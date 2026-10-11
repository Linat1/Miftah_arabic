'use strict';
/* TD-L12 · Topic D Review and Four-Skills Assessment — website: Advanced Topics › Topic D › Lesson 12 (lesson engine D3-L12).
   Topic layer: the website “Topic D four-skills relay” as a FLEX revision station and the Topic game “Topic D Mixed Challenge” (FLEX);
   preparation points to Topic E (TE-L01, engine D6-L01), whose Do Now tests the website D5-L12 home words. */
const T = require('./topic-common');
const { game } = require('./topic-de-games');

const meta = T.meta('D', 12, { fileTitle: 'Topic_D_Review_and_Four_Skills_Assessment', chip: 'Topic D Assessment', icon: 'FaFlagCheckered', level: 'Topic D · end of topic' });
const E1 = T.lesson('E', 1);
const NEXT = { nextCode: 'TE-L01', nextTitle: E1.title, nextAr: E1.arabic };

const relay = T.challengeSlide('D', 12, {
  steps: [
    'Four stations, 90 seconds each: education · study · jobs · careers.',
    'At each station: 3 words, 1 grammar point, 1 extended sentence.',
    'Finish with one spoken and one written sentence that link two stations.',
    'Self-assess: which station was weakest? That is your revision target.',
  ],
  routes: {
    core: 'One sentence per station using the frames.',
    develop: 'Two sentences per station with agreement and a reason.',
    stretch: 'An extended answer per station with a time frame and a conditional.',
  },
  phrases: [['المَرْحَلَةُ الثَّانَوِيَّةُ …', 'education'], ['يَنْبَغِي أَنْ أُرَاجِعَ …', 'study'], ['يَعْمَلُ / تَعْمَلُ فِي …', 'jobs'], ['أَطْمَحُ إِلَى … لِأَنَّ …', 'careers']],
  notes: 'Website Topic D challenge “Topic D four-skills relay”: rotate through education, study, jobs and careers; use evidence in listening/reading and produce one spoken and one written response before self-assessing. In the assessment lesson this is FLEX (the D3-L12 assessment is the main task).',
});
const mixed = game('d12', { title: 'Topic D in three pictures', notes: 'TOPIC D GAME “Topic D Mixed Challenge”: qualification, skills, the application → interview → job sequence (past tense).' });
const finish = (slides) => {
  const out = slides.map((sp) => {
    if (sp.type === 'prep') {
      const src = T.retarget(require('./d5-l12').slides.find((x) => x.type === 'prep'), 'E');
      return T.prepSlide({
        ...NEXT, words: src.words, questionEn: src.questionEn, questionAr: src.questionAr,
        homework: {
          core: 'Redo the Topic D readiness check on the website; learn the five Topic E words.',
          develop: 'Redo the assessment section with your lowest score; learn the five Topic E words.',
          stretch: 'Write a Topic D reflection (strongest evidence + one precise next action); learn the five Topic E words.',
        },
        wordsSource: 'Topic E begins with countries, nationalities and languages (TE-L01); its Do Now tests these five words (website D5-L12 preparation list).',
      });
    }
    if (sp.type === 'close') return T.closeSlide({ ...NEXT, remember: 'Topic D complete — well done! Learn 5 words for Topic E.' });
    if (sp.type === 'journey') return { ...sp, steps: sp.steps.map((st) => (st.stage === 'prep' ? { ...st, text: 'Get ready for Topic E: the international world.' } : st)) };
    return sp;
  });
  const at = out.findIndex((sp) => sp.stage === 'donow');
  out.splice(at + 1, 0, { ...relay, min: undefined, flex: true, stage: 'donow', eyebrow: 'Revision · Topic D application challenge (website) · FLEX' }, mixed);
  return out;
};
const slides = T.reuse('D', 12, require('./d3-l12'), { patch: [finish] });
module.exports = { meta, slides };
