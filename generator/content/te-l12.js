'use strict';
/* TE-L12 · Topic E Review and Bridge to Final Revision — website: Advanced Topics › Topic E › Lesson 12 (lesson engine D6-L12).
   Topic layer: the website “Topic E four-skills relay” as a FLEX revision station and the Topic game “Topic E Mixed Challenge” (FLEX);
   preparation bridges to the Exam Skills Extension (X1-L01), with five words from the website X1-L01 exam-terminology vault. */
const T = require('./topic-common');
const { game } = require('./topic-de-games');

const meta = T.meta('E', 12, { fileTitle: 'Topic_E_Review_and_Bridge_to_Final_Revision', chip: 'Topic E Assessment', icon: 'FaFlagCheckered', level: 'Topic E · end of topic' });
const NEXT = { nextCode: 'X1-L01', nextTitle: 'Exam Skills Extension — Mapping Paper 1 and Paper 2', nextAr: 'خَرِيطَةُ الوَرَقَتَيْنِ الأُولَى وَالثَّانِيَةِ' };

const relay = T.challengeSlide('E', 12, {
  steps: [
    'Four stations, 90 seconds each: countries & languages · customs · celebrations · international issues.',
    'At each station: 3 words, 1 grammar point, 1 extended sentence.',
    'Finish with one spoken and one written sentence linking two stations.',
    'Name the language you most need for final revision.',
  ],
  routes: {
    core: 'One sentence per station using the frames.',
    develop: 'Two sentences per station with agreement and a reason.',
    stretch: 'An extended answer per station with a passive, a comparison and a time frame.',
  },
  phrases: [['يَتَكَلَّمُ النَّاسُ فِي … اللُّغَةَ …', 'countries & languages'], ['مِنَ المُهَذَّبِ أَنْ …', 'customs'], ['يُحْتَفَلُ بِالعِيدِ فِي …', 'celebrations'], ['تَتَعَاوَنُ الدُّوَلُ فِي …', 'international issues']],
  notes: 'Website Topic E challenge “Topic E four-skills relay”: complete country/language, customs, celebration and international-issue stations, then identify the language needed for final revision. In the assessment lesson this is FLEX (the D6-L12 assessment is the main task).',
});
const mixed = game('e12', { title: 'Topic E in three pictures', notes: 'TOPIC E GAME “Topic E Mixed Challenge”: country + world, travel + respect, languages for understanding.' });
const finish = (slides) => {
  const out = slides.map((sp) => {
    if (sp.type === 'prep') {
      return T.prepSlide({
        ...NEXT,
        words: [['الوَرَقَةُ الأُولَى', 'Paper 1 (listening)', '—'], ['سُؤَالٌ مُتَعَدِّدُ الاخْتِيَارَاتِ', 'a multiple-choice question', 'pl. أَسْئِلَةٌ'], ['المُطَابَقَةُ', 'matching', '—'], ['المُشَتِّتُ', 'a distractor', 'pl. مُشَتِّتَاتٌ'], ['التَّقْيِيمُ الذَّاتِيُّ', 'self-assessment', '—']],
        questionEn: 'Which exam paper do you feel most ready for, and why?',
        questionAr: 'أَنَا مُسْتَعِدٌّ أَكْثَرَ لِلْوَرَقَةِ ______ لِأَنَّ ______ .',
        homework: {
          core: 'Redo the Topic E readiness check on the website; learn the five exam words.',
          develop: 'Redo the assessment section with your lowest score; learn the five exam words.',
          stretch: 'Write a Topic E reflection (strongest evidence + one precise next action); learn the five exam words.',
        },
        wordsSource: 'The five words come from the website X1-L01 exam-terminology vault (Exam Skills Extension).',
      });
    }
    if (sp.type === 'close') return T.closeSlide({ ...NEXT, remember: 'Topic E complete — well done! Learn 5 exam words for final revision.' });
    if (sp.type === 'journey') return { ...sp, steps: sp.steps.map((st) => (st.stage === 'prep' ? { ...st, text: 'Get ready for final exam revision.' } : st)) };
    return sp;
  });
  const at = out.findIndex((sp) => sp.stage === 'donow');
  out.splice(at + 1, 0, { ...relay, min: undefined, flex: true, stage: 'donow', eyebrow: 'Revision · Topic E application challenge (website) · FLEX' }, mixed);
  return out;
};
const slides = T.reuse('E', 12, require('./d6-l12'), { patch: [finish] });
module.exports = { meta, slides };
