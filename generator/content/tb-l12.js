'use strict';
/* TB-L12 · Topic B Review and Four-Skills Assessment — website: Advanced Topics › Topic B › Lesson 12 (lesson engine D2-L12).
   Topic layer: the website “Topic B four-skills relay” as a FLEX revision station; preparation points to Topic C (TC-L01). */
const T = require('./topic-common');

const meta = T.meta('B', 12, { fileTitle: 'Topic_B_Review_and_Four_Skills_Assessment', chip: 'Topic B Assessment', icon: 'FaFlagCheckered', level: 'Topic B · end of topic' });
const NEXT = { nextCode: 'TC-L01', nextTitle: 'People, Places, Continents and Compass Points', nextAr: 'النَّاسُ وَالأَمَاكِنُ وَالقَارَّاتُ' };

const relay = T.challengeSlide('B', 12, {
  steps: [
    'Four stations, 1 minute each: identity · home · clothes · leisure.',
    'At each station: retrieve 3 words, 1 grammar point and 1 extended sentence.',
    'Note your weakest station — that is your revision target.',
    'FLEX: use before the assessment or as the next lesson’s warm-up.',
  ],
  routes: {
    core: 'One sentence per station using the frames.',
    develop: 'Two sentences per station, with agreement checked.',
    stretch: 'An extended answer at each station with a reason and a time frame.',
  },
  phrases: [['اِسْمُهَا … وَعُمْرُهَا …', 'identity'], ['فِي بَيْتِي … / تُوجَدُ …', 'home'], ['قَمِيصٌ أَزْرَقُ / فُسْتَانٌ …', 'clothes'], ['أُمَارِسُ … مَرَّتَيْنِ فِي الأُسْبُوعِ', 'leisure']],
  notes: 'Website Topic B challenge “Topic B four-skills relay”: rotate through identity, home, clothes and leisure stations. In the assessment lesson this is FLEX (the D2-L12 assessment is the main task).',
});
const finish = (slides) => {
  const out = slides.map((sp) => {
    if (sp.type === 'prep') {
      return T.prepSlide({
        ...NEXT,
        words: [['بَلَدٌ', 'a country', 'pl. بُلْدَانٌ'], ['قَارَّةٌ', 'a continent', 'pl. قَارَّاتٌ'], ['جِنْسِيَّةٌ', 'a nationality', ''], ['لُغَةٌ', 'a language', 'pl. لُغَاتٌ'], ['شَمَالٌ · جَنُوبٌ', 'north · south', 'شَرْقٌ · غَرْبٌ = east · west']],
        questionEn: 'Which country is your family from, and which continent is it in?',
        questionAr: 'مِنْ أَيْنَ أَنْتَ؟',
        homework: {
          core: 'Redo the Topic B readiness check on the website; learn the five Topic C words.',
          develop: 'Redo the assessment section with your lowest score.',
          stretch: 'Write your Topic B reflection (strongest evidence + one precise next action).',
        },
        wordsSource: 'Topic C begins with people, places, continents and compass points (TC-L01).',
      });
    }
    if (sp.type === 'close') return T.closeSlide({ ...NEXT, remember: 'Topic B complete — well done! Learn 5 words for Topic C.' });
    if (sp.type === 'journey') return { ...sp, steps: sp.steps.map((st) => (st.stage === 'prep' ? { ...st, text: 'Get ready for Topic C: places.' } : st)) };
    return sp;
  });
  const at = out.findIndex((sp) => sp.stage === 'donow' && sp.flex);
  out.splice(at >= 0 ? at + 1 : 5, 0, { ...relay, min: undefined, flex: true, stage: 'donow', eyebrow: 'Revision · Topic B application challenge (website) · FLEX' });
  return out;
};
const slides = T.reuse('B', 12, require('./d2-l12'), { patch: [finish] });
module.exports = { meta, slides };
