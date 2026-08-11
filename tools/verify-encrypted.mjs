/**
 * Verifies that .enc media produced by encrypt-media.mjs round-trips through
 * the same WebCrypto calls the browser makes, and that a wrong password is
 * rejected rather than yielding garbage.
 *
 * Usage: node tools/verify-encrypted.mjs <password> <file.enc...>
 */
import { webcrypto } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

const subtle = webcrypto.subtle;
const [password, ...files] = process.argv.slice(2);

async function deriveKey(pw, salt) {
  const baseKey = await subtle.importKey('raw', new TextEncoder().encode(pw), 'PBKDF2', false, ['deriveKey']);
  return subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: 250000, hash: 'SHA-256' },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt']
  );
}

async function tryDecrypt(bytes, pw) {
  const salt = bytes.slice(0, 16);
  const iv = bytes.slice(16, 28);
  const payload = bytes.slice(28);
  const key = await deriveKey(pw, salt);
  return new Uint8Array(await subtle.decrypt({ name: 'AES-GCM', iv }, key, payload));
}

const isMp4 = (b) => String.fromCharCode(b[4], b[5], b[6], b[7]) === 'ftyp';

let failures = 0;

for (const file of files) {
  const bytes = new Uint8Array(readFileSync(file));
  console.log(`\n=== ${file} (${(bytes.length / 1048576).toFixed(2)} MB) ===`);

  const head = Array.from(bytes.slice(0, 8)).map((x) => x.toString(16).padStart(2, '0')).join(' ');
  console.log(`  ciphertext head : ${head}`);
  console.log(`  readable as mp4 without password: ${isMp4(bytes) ? 'YES  <-- FAIL' : 'no   <-- ok'}`);
  if (isMp4(bytes)) failures++;

  try {
    await tryDecrypt(bytes, 'definitely-the-wrong-password');
    console.log('  wrong password  : DECRYPTED  <-- FAIL');
    failures++;
  } catch (e) {
    console.log(`  wrong password  : rejected (${e.name})  <-- ok`);
  }

  const t0 = Date.now();
  try {
    const plain = await tryDecrypt(bytes, password);
    const ok = isMp4(plain);
    console.log(`  right password  : ${plain.length} bytes, valid mp4=${ok}, ${Date.now() - t0}ms`);
    if (!ok) failures++;
    writeFileSync(`${file}.decrypted.mp4`, plain);
  } catch (e) {
    console.log(`  right password  : FAILED (${e.name})  <-- FAIL`);
    failures++;
  }
}

console.log(failures === 0 ? '\nALL CHECKS PASSED' : `\n${failures} CHECK(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);
