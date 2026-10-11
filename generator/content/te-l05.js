'use strict';
/* TE-L05 · Faiths, Beliefs and Places of Worship — website: Advanced Topics › Topic E › Lesson 5 (lesson engine D6-L03).
   The website uses the same engine (D6-L03, Islamic celebrations) for TE-L05 and TE-L06. To keep the two lessons distinct, this deck adds a
   teacher-made faith-and-places layer (12 words with m. / f. / pl., respectful frames — nominal sentences, relative clauses, prepositions), makes the
   Topic game “Belief & Place Match” and the website challenge “Belief and place vocabulary match” the main tasks, and moves the engine’s Eid
   listening and writing to FLEX (they are taught in full in TE-L06). The preparation words are the ones the TE-L06 Do Now tests. */
const T = require('./topic-common');
const D = require('./d-common');
const { q, translit } = D;
const { game } = require('./topic-de-games');

const meta = T.meta('E', 5, { fileTitle: 'Faiths_Beliefs_and_Places_of_Worship', chip: 'Faiths and Beliefs', icon: 'FaMosque' });
const L6 = T.lesson('E', 6);
const NX = { nextCode: 'TE-L06', nextTitle: L6.title, nextAr: L6.arabic };

const W = [
  ['دِينٌ', 'a religion, a faith', 'pl.', 'أَدْيَانٌ'], ['مُعْتَقَدٌ', 'a belief', 'pl.', 'مُعْتَقَدَاتٌ'], ['عِبَادَةٌ', 'worship', 'pl.', 'عِبَادَاتٌ'],
  ['مَكَانُ عِبَادَةٍ', 'a place of worship', 'pl.', 'أَمَاكِنُ عِبَادَةٍ'], ['مَسْجِدٌ', 'a mosque', 'pl.', 'مَسَاجِدُ'], ['كَنِيسَةٌ', 'a church', 'pl.', 'كَنَائِسُ'],
  ['كَنِيسٌ', 'a synagogue', 'pl.', 'كُنُسٌ'], ['مَعْبَدٌ', 'a temple', 'pl.', 'مَعَابِدُ'], ['مُسْلِمٌ', 'a Muslim', 'f. مُسْلِمَةٌ', 'مُسْلِمُونَ'],
  ['مَسِيحِيٌّ', 'a Christian', 'f. مَسِيحِيَّةٌ', 'مَسِيحِيُّونَ'], ['مُجْتَمَعٌ', 'a community, society', 'pl.', 'مُجْتَمَعَاتٌ'], ['احْتِرَامٌ', 'respect', 'v.', 'يَحْتَرِمُ'],
];
const item = ([ar, en, tag, pl], k) => ({
  n: k + 1, ar, en, tr: translit(ar), core: k < 8,
  tag: tag.startsWith('f. ') ? 'm · f · pl' : tag === 'v.' ? 'verb' : 'sg · pl',
  forms: tag.startsWith('f. ') ? [{ l: 'pl.', ar: pl }, { l: 'f.', ar: tag.slice(3) }, { l: 'm.', ar }] : tag === 'v.' ? [{ l: 'verb', ar: pl }] : [{ l: 'pl.', ar: pl }, { l: 'sg.', ar }],
});
const vocab = (from, to, part) => ({
  type: 'vocab', stage: 'teach', min: 2, eyebrow: `Key words · Topic E · faiths and places of worship (${part} of 2)`, title: part === 1 ? 'Faith, belief and worship' : 'Places, people and respect', ar: 'الأَدْيَانُ وَأَمَاكِنُ العِبَادَةِ',
  items: W.slice(from, to).map((w, k) => item(w, from + k)),
  notes: 'TOPIC E KEY WORDS (teacher-made, neutral and factual — the website Topic E focus: “respectful factual language to understand and describe familiar faith contexts”). Say each word, students repeat; for people say m. → f. → pl. (مُسْلِمٌ – مُسْلِمَةٌ – مُسْلِمُونَ). Broken plurals as a chant: masjid – masājid, kanīsa – kanāʾis.',
});
const frames = {
  type: 'explain', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Topic E · describing faith contexts respectfully', title: 'Facts, not judgements', ar: 'لُغَةُ الاحْتِرَامِ',
  pointsHead: 'HOW WE TALK ABOUT FAITHS', exHead: 'IN ARABIC',
  points: [
    'Use a nominal sentence for a fact: the place + what it is (al-masjid makān ʿibāda).',
    'Use a relative clause to say who prays there: makān yuṣallī fīhi … (fīhi / fīhā points back to the place).',
    'Say “some people” or “many”, not “all” — beliefs and practices vary.',
    'Compare without value judgements: describe, never rank.',
  ],
  examples: [
    { ar: 'المَسْجِدُ مَكَانُ عِبَادَةٍ لِلْمُسْلِمِينَ.', en: 'The mosque is a place of worship for Muslims.' },
    { ar: 'الكَنِيسَةُ مَكَانٌ يُصَلِّي فِيهِ المَسِيحِيُّونَ.', en: 'The church is a place where Christians pray.' },
    { ar: 'يَحْتَرِمُ المُجْتَمَعُ أَمَاكِنَ العِبَادَةِ كُلَّهَا.', en: 'The community respects all places of worship.' },
  ],
  notes: 'TEACH (3 min) — teacher layer for the Topic E grammar (relative clauses; nominal sentences; prepositions). Many students are Muslim and will know the Islamic vocabulary well — invite them to explain, but never require personal disclosure. Other faiths are described in the same neutral, factual way the website asks for.',
};
const challenge = {
  min: 8,
  steps: [
    'Match 8 words (faith · belief · community · places of worship) to 8 short factual descriptions (in the notes).',
    'Check with a partner: read each match aloud as a full sentence.',
    'Read two statements about practices and compare them respectfully (baynamā …).',
    'Rule: describe, do not judge — no “better / worse”.',
  ],
  routes: {
    core: 'Match the cards; one fact: “al-masjid makān ʿibāda”.',
    develop: 'Three facts, one with a relative clause (makān yuṣallī fīhi …).',
    stretch: 'A respectful comparison of two statements with “baynamā” and a hedge (baʿḍ / kathīr min).',
  },
  phrases: [['المَسْجِدُ مَكَانُ عِبَادَةٍ لِلْمُسْلِمِينَ', 'the mosque is a place of worship for Muslims'], ['مَكَانٌ يُصَلِّي فِيهِ …', 'a place where … pray'], ['بَيْنَمَا …', 'whereas …'], ['يَعْتَقِدُ كَثِيرٌ مِنَ النَّاسِ أَنَّ …', 'many people believe that …']],
  notes: 'Website Topic E challenge “Belief and place vocabulary match”: match neutral vocabulary for faith, belief, community and places of worship to short factual descriptions, then compare two statements respectfully without value judgements. Descriptions: يُصَلِّي فِيهِ المُسْلِمُونَ (مَسْجِدٌ) · يُصَلِّي فِيهَا المَسِيحِيُّونَ (كَنِيسَةٌ) · يُصَلِّي فِيهِ اليَهُودُ (كَنِيسٌ) · مَكَانُ عِبَادَةٍ عِنْدَ الهِنْدُوسِ وَالبُوذِيِّينَ (مَعْبَدٌ) · مَا يُؤْمِنُ بِهِ الإِنْسَانُ (مُعْتَقَدٌ) · مَجْمُوعَةٌ مِنَ النَّاسِ تَعِيشُ مَعًا (مُجْتَمَعٌ) · الصَّلَاةُ وَالصِّيَامُ مِنْهَا (عِبَادَةٌ) · نُعَامِلُ الآخَرِينَ بِأَدَبٍ (احْتِرَامٌ). Statements to compare: يُصَلِّي المُسْلِمُونَ خَمْسَ مَرَّاتٍ فِي اليَوْمِ · يَذْهَبُ كَثِيرٌ مِنَ المَسِيحِيِّينَ إِلَى الكَنِيسَةِ يَوْمَ الأَحَدِ.',
};
const FLEXT = ['routes', 'frames', 'stretchTask', 'modelAnswer'];
const patch = (slides) => slides.map((sp) => {
  if (sp.type === 'objectives') {
    return D.objectivesSlide(T.retarget(['Name places of worship and the people who use them (m. / f. / pl.).', 'Describe a place of worship with a nominal sentence and a relative clause (makān yuṣallī fīhi …).', 'Compare two statements about faith practices respectfully, without value judgements.', 'Preview how a faith marks its celebrations (Ramadan and Eid — the full lesson is TE-L06).'], 'E'), {
      core: ['I can name four places of worship.', 'I can say who prays there.'],
      develop: ['I can use a relative clause with fīhi / fīhā.', 'I can use m. / f. / pl. forms for people.'],
      stretch: ['I can compare two practices with baynamā.', 'I can hedge (baʿḍ / kathīr min) and avoid judgements.'],
    }, 0, 'TE-L05 objectives (teacher-made from the website Topic E focus and grammar for this lesson).');
  }
  if (sp.type === 'selfCheck') {
    return D.selfCheckSlide([
      { route: 'core', text: 'I named four places of worship and who prays there.' },
      { route: 'core', text: 'I used m. / f. / pl. forms for people (muslim – muslima – muslimūn).' },
      { route: 'develop', text: 'I used a relative clause with fīhi / fīhā.' },
      { route: 'stretch', text: 'I compared two practices with baynamā and a hedge, without judging.' },
    ]);
  }
  if (sp.type === 'picMatch' && !/Topic game/.test(sp.eyebrow || '')) {
    return { ...sp, min: undefined, flex: true, eyebrow: `${sp.eyebrow} · FLEX (TE-L06)` };
  }
  if (FLEXT.includes(sp.type) || (sp.type === 'mcq' && /listening/i.test(sp.eyebrow || ''))) {
    return { ...sp, min: undefined, flex: true, eyebrow: `${sp.eyebrow} · FLEX (taught in full in TE-L06)`, notes: `FLEX in TE-L05 — the engine’s Ramadan and Eid listening / writing are the main tasks of TE-L06. Use here only as an extension.\n${sp.notes || ''}` };
  }
  return sp;
});
const insertLayer = (slides) => {
  let at = -1; slides.forEach((sp, k) => { if (sp.type === 'vocab') at = k; });
  slides.splice(at + 1, 0, vocab(0, 6, 1), vocab(6, 12, 2), frames);
  return slides;
};
const slides = T.reuse('E', 5, require('./d6-l03'), {
  addGame: game('e05', { flex: false, min: 3, title: 'Match the place to the sentence', notes: 'TOPIC E GAME “Belief & Place Match” — a main task today: the mosque, the church, and respectful discussion of beliefs.' }),
  challenge,
  prep: {
    words: [['مَكَانُ عِبَادَةٍ', 'a place of worship', 'pl. أَمَاكِنُ عِبَادَةٍ'], ['مُعْتَقَدٌ', 'a belief', 'pl. مُعْتَقَدَاتٌ'], ['مُنَاسَبَةٌ', 'an occasion', 'pl. مُنَاسَبَاتٌ'], ['احْتِفَالٌ', 'a celebration', 'pl. احْتِفَالَاتٌ'], ['هَدِيَّةٌ', 'a gift', 'pl. هَدَايَا']],
    questionEn: 'Name one special occasion your family celebrates and one thing you do on it.',
    questionAr: 'فِي ______ نَجْتَمِعُ مَعَ الأُسْرَةِ وَ ______ .',
    homework: {
      core: 'Website TE game “Belief & Place Match”; learn the 12 faith words (m. / f. / pl.).',
      develop: 'Write four factual sentences about places of worship, two with a relative clause.',
      stretch: 'Write a respectful 60-word comparison of two practices, with baynamā and a hedge.',
    },
    wordsSource: 'TE-L06 uses the same website engine; its Do Now tests these five words (teacher-chosen bridge from faiths to celebrations).',
  },
  close: { remember: 'Remember: describe, do not judge — and 5 words for TE-L06.' },
  patch: [patch, insertLayer],
});
module.exports = { meta, slides, NX };
