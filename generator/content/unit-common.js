'use strict';
/*
 * Shared factory for pathway units whose lessons are authored from the website page text + quiz banks
 * (F3-style: F4, D3, P2, P5, P6 …). mk({code, kicker, name, level, site, footer}) returns the same helpers as
 * f3-common.js (meta, titleSlide, w, bank, banks) bound to site-data/<code>-quizzes.json.
 */
const C = require('./common');
const F3 = require('./f3-common');

function mk(u) {
  const banks = require(`../site-data/${u.code.toLowerCase()}-quizzes.json`);
  const meta = C.unitMeta({ code: u.code, kicker: u.kicker, name: u.name, level: u.level, site: u.site, footer: u.footer || u.name });
  const titleSlide = (o) => C.titleSlide({
    ...o,
    siteRef: o.siteRef || `${u.site} ${u.short || ''} › Lesson ${o.n} (${u.code}-L${String(o.n).padStart(2, '0')})`.replace(/\s+›/g, ' ›'),
  });
  const bank = (n, name, idx, extra) => {
    const b = (banks[`l${String(n).padStart(2, '0')}`] || {})[name];
    if (!b) throw new Error(`No bank ${name} for lesson ${n}`);
    return (idx || b.map((_, i) => i)).map((i) => { if (!b[i]) throw new Error(`${name}[${i}] missing (lesson ${n})`); return F3.w(b[i], extra); });
  };
  return { ...C, meta, titleSlide, w: F3.w, bank, banks };
}
module.exports = { mk };
