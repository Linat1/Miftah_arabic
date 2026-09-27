'use strict';
/*
 * Fully vowelled Arabic → syllabified learner transliteration (e.g. أَسْتَيْقِظُ → as-tay-qi-ẓu).
 * Used for the Core pronunciation line on vocabulary cards. Assumes fully vowelled input; unvowelled words
 * are transliterated letter by letter and should be avoided.
 */
const CONS = {
  'ب': 'b', 'ت': 't', 'ث': 'th', 'ج': 'j', 'ح': 'ḥ', 'خ': 'kh', 'د': 'd', 'ذ': 'dh', 'ر': 'r', 'ز': 'z', 'س': 's', 'ش': 'sh',
  'ص': 'ṣ', 'ض': 'ḍ', 'ط': 'ṭ', 'ظ': 'ẓ', 'ع': 'ʿ', 'غ': 'gh', 'ف': 'f', 'ق': 'q', 'ك': 'k', 'ل': 'l', 'م': 'm', 'ن': 'n',
  'ه': 'h', 'و': 'w', 'ي': 'y', 'ء': 'ʾ', 'أ': 'ʾ', 'إ': 'ʾ', 'ؤ': 'ʾ', 'ئ': 'ʾ', 'ة': 't', 'پ': 'p', 'ڤ': 'v', 'گ': 'g', 'چ': 'ch',
};
const SUN = new Set('تثدذرزسشصضطظلن'.split(''));
const V = { 'َ': 'a', 'ُ': 'u', 'ِ': 'i' };
const TAN = { 'ً': 'an', 'ٌ': 'un', 'ٍ': 'in' };
const SUKUN = 'ْ'; const SHADDA = 'ّ'; const DAGGER = 'ٰ';

// word → list of {c, v} units (c consonant or '', v vowel string or '')
function units(word) {
  const w = word.replace(/ـ/g, '').replace(/ٱ/g, 'ا');
  const ch = [...w]; const out = [];
  let i = 0;
  // definite article
  if ((ch[0] === 'ا' || ch[0] === 'أ') && ch[1] === 'ل' && ch.length > 3) {
    const nxt = ch.slice(2).find((c) => !/[ً-ْٰ]/.test(c));
    const nxtIdx = ch.indexOf(nxt, 2);
    const shadda = ch[nxtIdx + 1] === SHADDA || ch[nxtIdx + 2] === SHADDA;
    if (SUN.has(nxt) && shadda && nxt !== 'ل') { out.push({ c: '', v: 'a', art: true }); i = 2; } else { out.push({ c: '', v: 'a' }); out.push({ c: 'l', v: '', art: true }); i = 2; if (ch[i] === SUKUN) i += 1; }
  }
  for (; i < ch.length; i += 1) {
    const c = ch[i];
    const marks = []; let j = i + 1;
    while (j < ch.length && /[ً-ْٰ]/.test(ch[j])) { marks.push(ch[j]); j += 1; }
    const vow = marks.map((m) => V[m] || '').join('');
    const tan = marks.map((m) => TAN[m] || '').join('');
    const sh = marks.includes(SHADDA); const dag = marks.includes(DAGGER);
    const prev = out[out.length - 1];
    if (c === 'ا' || c === 'ى') {
      if (i === 0) { out.push({ c: '', v: vow || (marks.length ? '' : 'a') }); i = j - 1; continue; }
      if (prev && prev.v === 'a') prev.v = 'ā';
      else if (prev && /an$/.test(prev.v)) { /* tanwin alif */ } else if (prev && prev.v === '' && prev.c === 'w') { /* plural alif after wa */ } else if (prev) prev.v += c === 'ى' ? 'ā' : '';
      i = j - 1; continue;
    }
    if (c === 'آ') { out.push({ c: i === 0 ? '' : 'ʾ', v: 'ā' }); i = j - 1; continue; }
    if ((c === 'و' || c === 'ي') && !vow && !tan && !sh && prev) {
      const lv = { 'و': 'u', 'ي': 'i' }[c];
      if (prev.v === lv) { prev.v = lv === 'u' ? 'ū' : 'ī'; i = j - 1; continue; }
      if (prev.v === 'a' && marks.includes(SUKUN)) { prev.v = c === 'و' ? 'aw' : 'ay'; i = j - 1; continue; }
    }
    if (c === 'ة') { out.push({ c: vow || tan ? 't' : '', v: tan || vow || (dag ? 'ā' : ''), tm: true }); if (!vow && !tan && prev) prev.v += ''; if (!vow && !tan) { out.pop(); if (prev) prev.v = `${prev.v}`; out.push({ c: '', v: '', tm: true }); } i = j - 1; continue; }
    const base = CONS[c];
    if (!base) { out.push({ c: '', v: '', raw: c }); i = j - 1; continue; }
    const cc = ((i === 0 || (prev && prev.art)) && (c === 'أ' || c === 'إ')) ? '' : base;
    if (sh) out.push({ c: cc, v: '' });
    out.push({ c: cc, v: (tan || vow) + (dag ? 'ā' : '') || (c === 'إ' && i === 0 ? 'i' : '') });
    i = j - 1;
  }
  return out;
}

function translitWord(word) {
  const u = units(word).filter((x) => !x.tm || x.v);
  // syllables: a unit with a vowel starts a syllable; vowel-less units close the previous one
  const syl = [];
  u.forEach((x) => {
    if (x.raw) { syl.push(x.raw); return; }
    if (x.v) syl.push(x.c + x.v);
    else if (syl.length) syl[syl.length - 1] += x.c;
    else syl.push(x.c);
  });
  let s = syl.join('-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  if (u[1] && u[1].art) s = s.replace(/^(a[a-zḍṣṭẓḥʿ]+?)-/, '$1-');
  return s;
}

function translit(text) {
  return text.split(/(\s+|[،؟.!…/·()])/).map((t) => {
    if (!/[؀-ۿ]/.test(t)) return t.replace('،', ',').replace('؟', '?');
    return translitWord(t);
  }).join('').replace(/\s+/g, ' ').trim();
}

module.exports = { translit, translitWord };

if (require.main === module) {
  ['أَسْتَيْقِظُ', 'أَتَوَضَّأُ', 'أَرْتَدِي مَلَابِسِي', 'أَتَنَاوَلُ الإِفْطَارَ', 'أَسْتَقِلُّ الحَافِلَةَ', 'أَصِلُ إِلَى المَدْرَسَةِ', 'بَعْدَ ذٰلِكَ', 'كُلَّ يَوْمٍ', 'فِي الصَّبَاحِ البَاكِرِ', 'مُنَبِّهٌ', 'نَشِيطٌ / نَشِيطَةٌ', 'السَّلَامُ عَلَيْكُمْ', 'أَوَّلًا', 'مُتَأَخِّرًا', 'يَكْتُبُونَ', 'اِسْتَيْقَظَ', 'الشَّمْسُ', 'القَمَرُ', 'مَدْرَسَةٌ', 'الصَّلَاةِ', 'أُمَشِّطُ شَعْرِي', 'هُمْ ذَهَبُوا', 'مُسْتَشْفَى']
    .forEach((w) => console.log(w, '→', translit(w)));
}
