/**
 * Password-gated video playback for AES-GCM encrypted media.
 *
 * The server only ever holds ciphertext produced by tools/encrypt-media.mjs.
 * The key is derived in the browser from a password the visitor types, so the
 * password itself is never stored or transmitted anywhere.
 *
 * Byte layout of a .enc file: salt(16) || iv(12) || ciphertext-with-tag.
 */
(function () {
  'use strict';

  // The password is deliberately never persisted: every page load must ask for
  // it again.
  var ITERATIONS = 250000;
  var SALT_BYTES = 16;
  var IV_BYTES = 12;

  function h(tag, style, text) {
    var el = document.createElement(tag);
    if (style) el.style.cssText = style;
    if (text) el.textContent = text;
    return el;
  }

  async function deriveKey(password, salt) {
    var baseKey = await crypto.subtle.importKey(
      'raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']
    );
    return crypto.subtle.deriveKey(
      { name: 'PBKDF2', salt: salt, iterations: ITERATIONS, hash: 'SHA-256' },
      baseKey,
      { name: 'AES-GCM', length: 256 },
      false,
      ['decrypt']
    );
  }

  async function decryptToBlobUrl(url, password, onProgress) {
    var response = await fetch(url);
    if (!response.ok) throw new Error('fetch failed: ' + response.status);

    var total = Number(response.headers.get('content-length')) || 0;
    var buffer;

    // Stream so the download can show progress; large-ish files otherwise look
    // frozen while the browser waits on the network.
    if (response.body && total) {
      var reader = response.body.getReader();
      var chunks = [];
      var received = 0;
      while (true) {
        var step = await reader.read();
        if (step.done) break;
        chunks.push(step.value);
        received += step.value.length;
        if (onProgress) onProgress(received / total);
      }
      var merged = new Uint8Array(received);
      var offset = 0;
      chunks.forEach(function (c) { merged.set(c, offset); offset += c.length; });
      buffer = merged;
    } else {
      buffer = new Uint8Array(await response.arrayBuffer());
    }

    var salt = buffer.slice(0, SALT_BYTES);
    var iv = buffer.slice(SALT_BYTES, SALT_BYTES + IV_BYTES);
    var payload = buffer.slice(SALT_BYTES + IV_BYTES);

    var key = await deriveKey(password, salt);
    // Throws OperationError when the GCM tag does not verify, which is exactly
    // the wrong-password case.
    var plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: iv }, key, payload);

    return URL.createObjectURL(new Blob([plain], { type: 'video/mp4' }));
  }

  function buildPanel(node) {
    var ratio = node.getAttribute('data-ratio') || '1600 / 714';
    var accent = node.getAttribute('data-accent') || '#a78bfa';
    var border = node.getAttribute('data-border') || '#2d2d4a';

    var panel = h('div',
      'position:relative; width:100%; aspect-ratio:' + ratio + '; border-radius:10px;' +
      'border:1px solid ' + border + '; background:#0b0b14; display:flex;' +
      'flex-direction:column; align-items:center; justify-content:center; gap:0.9rem; padding:1.5rem; text-align:center;'
    );

    panel.appendChild(h('div', 'font-size:1.6rem; line-height:1;', '\uD83D\uDD12'));
    panel.appendChild(h('div',
      'font-size:0.78rem; letter-spacing:0.16em; text-transform:uppercase; color:' + accent + ';',
      'Protected \u00b7 \u9700\u5bc6\u7801\u89e3\u9501'
    ));
    panel.appendChild(h('p',
      'font-size:0.85rem; color:#94a3b8; max-width:420px; margin:0; line-height:1.7;',
      '\u8be5\u6210\u7247\u5c1a\u672a\u516c\u5f00\uff0c\u8bf7\u8f93\u5165\u5bc6\u7801\u67e5\u770b\u3002\u5982\u9700\u8bbf\u95ee\u6743\u9650\uff0c\u6b22\u8fce\u90ae\u4ef6\u8054\u7cfb zityliu@gmail.com'
    ));

    var form = h('form', 'display:flex; gap:0.5rem; flex-wrap:wrap; justify-content:center; margin-top:0.2rem;');
    var input = h('input',
      'padding:0.5rem 0.85rem; border-radius:6px; border:1px solid ' + border + ';' +
      'background:#12121f; color:#e2e8f0; font-size:0.85rem; min-width:190px; outline:none;'
    );
    input.type = 'password';
    input.placeholder = '\u8bf7\u8f93\u5165\u8bbf\u95ee\u5bc6\u7801';
    input.setAttribute('aria-label', '\u8bbf\u95ee\u5bc6\u7801');

    var button = h('button',
      'padding:0.5rem 1.15rem; border-radius:6px; border:1px solid ' + accent + ';' +
      'background:transparent; color:' + accent + '; font-size:0.85rem; cursor:pointer;',
      '\u89e3\u9501'
    );
    button.type = 'submit';

    var status = h('p', 'font-size:0.78rem; color:#64748b; margin:0; min-height:1.1em;');

    form.appendChild(input);
    form.appendChild(button);
    panel.appendChild(form);
    panel.appendChild(status);

    return { panel: panel, form: form, input: input, button: button, status: status };
  }

  function reveal(node, blobUrl) {
    var border = node.getAttribute('data-border') || '#2d2d4a';
    var video = document.createElement('video');
    video.controls = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute('controlsList', 'nodownload');
    video.style.cssText =
      'width:100%; border-radius:10px; border:1px solid ' + border + '; display:block; background:#000;';
    video.src = blobUrl;
    node.innerHTML = '';
    node.appendChild(video);
  }

  function init() {
    var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-locked-video]'));
    if (nodes.length === 0) return;

    if (!window.crypto || !window.crypto.subtle) {
      nodes.forEach(function (n) {
        n.textContent = '当前环境不支持 Web Crypto，请使用 https 访问。';
        n.style.cssText = 'color:#94a3b8; font-size:0.85rem; padding:1rem;';
      });
      return;
    }

    var panels = nodes.map(function (node) {
      var ui = buildPanel(node);
      node.appendChild(ui.panel);
      return { node: node, ui: ui };
    });

    // One password unlocks every protected clip on the page.
    async function unlockAll(password, origin) {
      panels.forEach(function (p) {
        p.ui.button.disabled = true;
        p.ui.input.disabled = true;
        p.ui.status.textContent = '解密中\u2026';
        p.ui.status.style.color = '#64748b';
      });

      var results = [];
      for (var i = 0; i < panels.length; i++) {
        var p = panels[i];
        try {
          var url = await decryptToBlobUrl(
            p.node.getAttribute('data-enc'),
            password,
            function (frac) { p.ui.status.textContent = '下载中 ' + Math.round(frac * 100) + '%'; }
          );
          results.push({ panel: p, url: url });
        } catch (err) {
          results.push({ panel: p, error: err });
        }
      }

      var failed = results.filter(function (r) { return r.error; });
      if (failed.length === results.length) {
        panels.forEach(function (p) {
          p.ui.button.disabled = false;
          p.ui.input.disabled = false;
          p.ui.status.textContent = '密码不正确，请重试。';
          p.ui.status.style.color = '#f87171';
        });
        if (origin) origin.ui.input.focus();
        return;
      }

      results.forEach(function (r) {
        if (r.url) reveal(r.panel.node, r.url);
        else {
          r.panel.ui.status.textContent = '该片段加载失败，请刷新重试。';
          r.panel.ui.status.style.color = '#f87171';
        }
      });
    }

    panels.forEach(function (p) {
      function submit(e) {
        e.preventDefault();
        if (p.ui.button.disabled) return;
        var value = p.ui.input.value.trim();
        if (!value) return;
        unlockAll(value, p);
      }
      p.ui.form.addEventListener('submit', submit);
      // Some embedding contexts swallow the implicit form submit, so Enter is
      // wired up directly as well.
      p.ui.input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') submit(e);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
