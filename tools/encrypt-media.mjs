/**
 * Encrypts media files so they can be published to a static host while staying
 * unreadable without a password. Output layout matches what WebCrypto expects
 * on the client: salt(16) || iv(12) || ciphertext-with-appended-tag.
 *
 * Usage:
 *   node tools/encrypt-media.mjs <password> <file...>
 *
 * Re-run with a different password to rotate; the .enc files are replaced.
 */
import { createCipheriv, pbkdf2Sync, randomBytes } from 'node:crypto';
import { readFileSync, writeFileSync, statSync } from 'node:fs';

const ITERATIONS = 250000;
const SALT_BYTES = 16;
const IV_BYTES = 12;

const [password, ...files] = process.argv.slice(2);

if (!password || files.length === 0) {
  console.error('usage: node tools/encrypt-media.mjs <password> <file...>');
  process.exit(1);
}

for (const file of files) {
  const plaintext = readFileSync(file);
  const salt = randomBytes(SALT_BYTES);
  const iv = randomBytes(IV_BYTES);
  const key = pbkdf2Sync(password, salt, ITERATIONS, 32, 'sha256');

  const cipher = createCipheriv('aes-256-gcm', key, iv);
  const ciphertext = Buffer.concat([cipher.update(plaintext), cipher.final()]);
  const tag = cipher.getAuthTag();

  const out = `${file}.enc`;
  writeFileSync(out, Buffer.concat([salt, iv, ciphertext, tag]));

  const before = statSync(file).size / 1048576;
  const after = statSync(out).size / 1048576;
  console.log(`${file} -> ${out}  ${before.toFixed(2)}MB -> ${after.toFixed(2)}MB`);
}

console.log(`\ndone: ${files.length} file(s), pbkdf2-sha256 x${ITERATIONS}, aes-256-gcm`);
