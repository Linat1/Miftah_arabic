'use strict';
/* TE-L06 · Faith Celebrations and Special Occasions — website: Advanced Topics › Topic E › Lesson 6 (lesson engine D6-L03, the same engine as TE-L05).
   Topic layer: a new Do Now on the TE-L05 home words (the engine Do Now was already used in TE-L05), the Topic game “Special Occasion Planner”
   as a main We Do, and the website challenge “Celebration planner”. The engine’s Ramadan and Eid listening and writing are the main You Do here. */
const T = require('./topic-common');
const { q } = require('./d-common');
const { game } = require('./topic-de-games');

const meta = T.meta('E', 6, { fileTitle: 'Faith_Celebrations_and_Special_Occasions', chip: 'Celebrations', icon: 'FaMoon' });

const DO_NOW = [
  q('What does مُنَاسَبَةٌ mean?', ['an occasion', 'a place of worship', 'a belief'], 'Prepared at home (TE-L05).'),
  q('What does احْتِفَالٌ mean?', ['a celebration', 'a gift', 'a prayer'], 'Prepared at home (TE-L05).'),
  q('What does هَدِيَّةٌ mean? (pl. هَدَايَا)', ['a gift', 'a guest', 'a greeting'], 'Prepared at home (TE-L05).'),
  q('Complete: الكَنِيسَةُ مَكَانٌ يُصَلِّي ___ المَسِيحِيُّونَ.', ['فِيهِ', 'فِيهَا', 'مِنْهُ'], 'TE-L05: makān (m.) → fīhi.'),
  q('Choose the plural of مَسْجِدٌ.', ['مَسَاجِدُ', 'مَسْجِدَاتٌ', 'مُسْجِدُونَ'], 'TE-L05: a broken plural (masājid).'),
];
const patch = (slides) => slides.map((sp) => (sp.type === 'mcq' && sp.stage === 'donow' && !sp.flex
  ? { ...sp, questions: DO_NOW, notes: sp.notes.replace(/^.*Questions 1–3[^\n]*/m, 'Questions 1–3 test three of the five words prepared at home at the end of TE-L05. Questions 4–5 retrieve TE-L05: the relative clause with fīhi and the broken plural masājid.') }
  : sp));
const slides = T.reuse('E', 6, require('./d6-l03'), {
  addGame: game('e06', { flex: false, min: 3, title: 'Plan the occasion: match the picture', notes: 'TOPIC E GAME “Special Occasion Planner” — family and a special meal, gifts and visits, a fixed date every year.' }),
  challenge: {
    min: 6,
    steps: [
      'Pairs plan a special occasion: date, activities, food, clothing and greetings.',
      'Write it as a short sequence: awwalan … thumma … baʿda dhālika …',
      'The partner asks two follow-up questions (matā? mādhā talbasūn?).',
      'Check the order of events and one passive verb (tuzayyan / tuwazzaʿ).',
    ],
    routes: {
      core: 'Three steps in the present: “najtamiʿu … thumma nakulu …”.',
      develop: 'Five steps with sequencing words and one passive verb.',
      stretch: 'A plan + a past memory (iḥtafalnā …) and an object pronoun (nuʿṭīhā li-…).',
    },
    phrases: [['أَوَّلًا … ثُمَّ … بَعْدَ ذٰلِكَ …', 'first … then … after that …'], ['نَتَبَادَلُ الهَدَايَا', 'we exchange gifts'], ['تُزَيَّنُ البُيُوتُ', 'the houses are decorated'], ['عِيدٌ مُبَارَكٌ! / كُلُّ عَامٍ وَأَنْتُمْ بِخَيْرٍ', 'Eid Mubarak! / many happy returns']],
    notes: 'Website Topic E challenge “Celebration planner”: plan a special occasion using date, activities, food, clothing and greetings; a partner asks follow-up questions and checks the sequence of events. Any occasion is welcome (Eid, a wedding, a birthday, a national day); students who prefer not to share family details invent an occasion.',
  },
  close: { remember: 'Remember: learn the 5 words for TE-L07.' },
  patch: [patch],
});
module.exports = { meta, slides };
