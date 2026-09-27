'use strict';
/*
 * Foundation F2 (Greetings & Introductions) · Year 7.
 * Same lesson flow and helpers as Topic C (common.js); F2 labelling, the website quiz banks (site-data/f2-quizzes.json)
 * and a small adapter that turns website {q|show+prompt, options, ok, why} items into slide questions.
 * 12 lessons = 4 weeks × 3 lessons.
 */
const C = require('./common');
const banks = require('../site-data/f2-quizzes.json');

function meta(o) {
  const wk = Math.ceil(o.n / 3); const k = ((o.n - 1) % 3) + 1; const nn = String(o.n).padStart(2, '0');
  return {
    code: `F2-L${nn}`,
    file: `Y7_F2_Wk${String(wk).padStart(2, '0')}_L${k}_F2L${nn}_${o.fileTitle}`,
    chip: o.chip, title: o.title, arabic: o.arabic, focus: o.focus,
    kicker: `CAMBRIDGE IGCSE ARABIC 0544  ·  YEAR 7  ·  FOUNDATION F2  ·  WEEK ${wk}  ·  LESSON ${k} OF 3`,
    lessonLine: `F2-L${nn} · Week ${wk}, lesson ${k}`,
    level: o.level || 'Foundation · A1',
    site: `Foundation › F2 › Lesson ${o.n}`,
    footer: `Miftah Arabic · Foundation F2 · Greetings & Introductions · Week ${wk} · Lesson ${k} of 3`,
    icon: o.icon, iconSet: o.iconSet,
    week: wk, k,
  };
}

const titleSlide = (o) => C.titleSlide({
  ...o,
  siteRef: `Pathways › Foundation › F2 Greetings & Introductions › Lesson ${o.n} (F2-L${String(o.n).padStart(2, '0')})`,
});

// Website quiz item → slide question. Website items: {q} or {show, prompt}, options, ok (index), why.
// `show` (the Arabic being asked about) is displayed large beside the English prompt.
function w(item, extra = {}) {
  const opts = (item.options || item.opts || item.a).slice(); const ok = item.ok !== undefined ? item.ok : (item.answer || 0);
  const right = opts.splice(ok, 1)[0]; opts.unshift(right);
  const out = { prompt: item.q || item.prompt || item.stem, options: opts, answer: 0, why: item.why || item.feedback || '', ...extra };
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
