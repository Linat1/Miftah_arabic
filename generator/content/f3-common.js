'use strict';
/*
 * Foundation F3 (My Family & Home) · Year 7.
 * Same lesson flow and helpers as F2 (f2-common.js): F3 labelling and the website quiz banks (site-data/f3-quizzes.json,
 * extracted from assets/js/f3-lNN-*.js and normalised to the F2 {q, a, ok, why} shape).
 * Lessons are labelled by website code only (F3-L01 …) — no week numbering.
 */
const C = require('./common');
const banks = require('../site-data/f3-quizzes.json');

const meta = C.unitMeta({ code: 'F3', kicker: 'YEAR 7  ·  FOUNDATION F3', name: 'Foundation F3 · My Family & Home', level: 'Foundation · A1', site: 'Pathways › Foundation › F3', footer: 'Foundation F3 · My Family & Home' });

const titleSlide = (o) => C.titleSlide({
  ...o,
  siteRef: o.siteRef || `Pathways › Foundation › F3 My Family & Home › Lesson ${o.n} (F3-L${String(o.n).padStart(2, '0')})`,
});

// Website quiz item → slide question. Website items: {q} or {show, prompt}, options, ok (index), why.
// `show` (the Arabic being asked about) is displayed large beside the English prompt.
function w(item, extra = {}) {
  const opts = (item.options || item.opts || item.a).slice(); const ok = item.ok !== undefined ? item.ok : (item.answer || 0);
  const right = opts.splice(ok, 1)[0]; opts.unshift(right);
  const out = { prompt: String(item.q || item.prompt || item.stem).replace(/<[^>]+>/g, '').replace(/\.\?\s*$/, '.').trim(), options: opts, answer: 0, why: item.why || item.feedback || '', ...extra };
  // Arabic embedded in an English prompt → show it large beside a short English prompt
  if (!item.show && !extra.prompt && /[A-Za-z]/.test(out.prompt) && /[\u0600-\u06FF]/.test(out.prompt)) {
    const colon = /^([^:\u0600-\u06FF]+):\s*(.*[\u0600-\u06FF].*)$/.exec(out.prompt);
    const runs = out.prompt.match(/[\u0600-\u06FF][\u0600-\u06FF\s…ـ.،؟!]*/g) || [];
    if (colon) { out.prompt = `${colon[1]}:`; out.ar = colon[2].trim(); out.arBig = true; }
    else if (runs.length === 1 && runs[0].replace(/[\s…ـ.،؟!\u064B-\u0652]/g, '').length > 1) {
      const endQ = /[؟?]$/.test(runs[0].trim()) && runs[0].trim().split(/\s+/).length > 1 && !/^(مَا|كَمْ|كَيْفَ|هَلْ|أَيْنَ|مِنْ أَيْنَ)/.test(runs[0].trim());
      out.ar = endQ ? runs[0].trim().replace(/[؟?]$/, '') : runs[0].trim(); out.arBig = true;
      out.prompt = out.prompt.replace(runs[0], /[؟?]$/.test(runs[0].trim()) ? 'this? ' : 'this ').replace(/\s+([.?!,])/g, '$1').trim();
    }
  }
  if (item.show && !extra.prompt) {
    if (/[؀-ۿ]/.test(item.show)) { out.ar = item.show; out.arBig = true; } else out.prompt = `${item.show} ${out.prompt}`;
  }
  return out;
}
// bank(n, 'finalQuiz', [0, 2, 5]) → selected website items as slide questions
const bank = (n, name, idx, extra) => {
  const b = banks[`l${String(n).padStart(2, '0')}`][name];
  if (!b) throw new Error(`No bank ${name} for lesson ${n}`);
  return (idx || b.map((_, i) => i)).map((i) => { if (!b[i]) throw new Error(`${name}[${i}] missing (lesson ${n})`); return w(b[i], extra); });
};

module.exports = { ...C, meta, titleSlide, w, bank, banks };
