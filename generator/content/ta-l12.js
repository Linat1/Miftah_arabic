'use strict';
/* AT-A-L12 · Topic A Review and Assessment — website: Advanced Topics › Topic A › Lesson 12 (lesson engine D1-L12, the 60-mark profile).
   Topic layer: the readiness check now retrieves the five Topic A structures prepared at the end of AT-A-L11 (one per subtopic), the website
   “Topic A four-skills relay” is a FLEX revision station before the assessment, and preparation points to Topic B (TB-L01). */
const T = require('./topic-common');
const { q } = T;

const meta = T.meta('A', 12, { fileTitle: 'Topic_A_Review_and_Assessment', chip: 'Topic A Assessment', icon: 'FaFlagCheckered', level: 'Topic A · end of topic' });
const B1 = T.topic('B').lessons[0];
const NEXT = { nextCode: 'TB-L01', nextTitle: B1.title, nextAr: B1.arabic };

const doNow = (slides) => slides.map((sp, i) => {
  if (!(sp.stage === 'donow' && sp.type === 'mcq' && !sp.flex)) return sp;
  return {
    ...sp,
    questions: [
      q('Choose “I wake up at seven o’clock.”', ['أَسْتَيْقِظُ فِي السَّاعَةِ السَّابِعَةِ.', 'يَسْتَيْقِظُ فِي السَّاعَةِ السَّابِعَةِ.', 'أَسْتَيْقِظُ السَّابِعَةَ سَاعَةً.'], 'AT-A-L01–L02: I + time.'),
      q('Order politely from a WAITRESS.', ['أُرِيدُ شَايًا، مِنْ فَضْلِكِ.', 'أُرِيدُ شَايًا، مِنْ فَضْلِكَ.', 'أَعْطِنِي شَايًا.'], 'AT-A-L05: -ki to a woman.'),
      q('Choose “I have had pain in my back for two days.”', ['عِنْدِي أَلَمٌ فِي ظَهْرِي مُنْذُ يَوْمَيْنِ.', 'عِنْدِي أَلَمٌ فِي ظَهْرِي فِي يَوْمَيْنِ.', 'عِنْدَهُ أَلَمٌ فِي ظَهْرِي مُنْذُ يَوْمَيْنِ.'], 'AT-A-L07: ‘indī + mundhu.'),
      q('Complete the advice: يَجِبُ أَنْ ___ .', ['تَسْتَرِيحَ', 'تَسْتَرِيحُ', 'اِسْتَرِحْ'], 'AT-A-L08: -a after “an”.'),
      q('Choose “She goes to school by bike.”', ['تَذْهَبُ إِلَى المَدْرَسَةِ عَلَى الدَّرَّاجَةِ.', 'تَذْهَبُ إِلَى المَدْرَسَةِ بِمَشْيًا.', 'يَذْهَبُ إِلَى المَدْرَسَةِ عَلَى الدَّرَّاجَةِ.'], 'AT-A-L09: ‘alā + she = ta-.'),
    ],
    answerSide: { kind: 'keyidea', text: 'This warm-up does NOT count. It samples all of Topic A: routine and time · café · health · advice · transport.', ar: 'مُرَاجَعَةٌ ثُمَّ تَقْيِيمٌ' },
    notes: `READINESS CHECK (5 min + 2 min answers, not marked) — the five Topic A structures prepared at home at the end of AT-A-L11, one from each subtopic (AT-A-L01–L02 routine and time · AT-A-L05 café · AT-A-L07 health · AT-A-L08 advice · AT-A-L09 transport). Students who score 3/5 or less use the FLEX relay station next for the subtopic they missed.
The website engine’s own readiness check (routine grammar) is in the FLEX grammar laboratory on the next slide.
${sp.notes.split('\n').slice(2).join('\n')}`,
  };
});

const relay = T.challengeSlide('A', 12, {
  steps: [
    'Four stations, 1 minute each (FLEX: use before the assessment or as a revision lesson).',
    'LISTEN: teacher reads a café line — students type what was ordered.',
    'READ: a health sentence on screen — students give symptom + duration. SPEAK: 20s on your journey to school.',
    'WRITE: one routine sentence with a time and a frequency word. Then note your weakest station.',
  ],
  routes: {
    core: 'One sentence per station — use the five structures you prepared.',
    develop: 'Two sentences per station, each from a different Topic A subtopic.',
    stretch: 'Connect the stations: a day with a café, a health problem and a journey, using time words.',
  },
  phrases: [['أُرِيدُ … مِنْ فَضْلِكَ', 'café (AT-A-L05)'], ['عِنْدِي … مُنْذُ …', 'health (AT-A-L07)'], ['أَذْهَبُ بِـ … / عَلَى …', 'transport (AT-A-L09)'], ['دَائِمًا أَسْتَيْقِظُ فِي …', 'routine (AT-A-L01–L03)']],
  notes: `Station prompts (teacher reads or pastes):
LISTEN — أُرِيدُ حَسَاءً وَعَصِيرَ بُرْتُقَالٍ صَغِيرًا، مِنْ فَضْلِكِ. (soup + a small orange juice; to a woman)
READ — عِنْدَ أُخْتِي سُعَالٌ وَحُمَّى مُنْذُ ثَلَاثَةِ أَيَّامٍ. (cough and fever, three days)
SPEAK — كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟ وَلِمَاذَا؟
WRITE — a routine sentence with a time and a frequency word (أَحْيَانًا / دَائِمًا).
FLEX: the website sets this relay as the Topic A application challenge; in an assessment lesson use it only if the assessment is split over two sessions, or as the next lesson’s warm-up.`,
});
const flexRelay = { ...relay, min: undefined, flex: true, stage: 'donow', eyebrow: 'Revision · Topic A application challenge (website) · FLEX' };

const finish = (slides) => {
  let out = doNow(slides);
  const lab = out.findIndex((sp) => sp.stage === 'donow' && sp.flex);
  out.splice(lab + 1, 0, flexRelay);
  out = out.map((sp) => {
    if (sp.type === 'prep') {
      return T.prepSlide({
        ...NEXT,
        words: [['ثَقَافَةٌ', 'culture', 'pl. ثَقَافَاتٌ'], ['عَادَاتٌ', 'customs, habits', 'sg. عَادَةٌ'], ['اِحْتِرَامٌ', 'respect', ''], ['هُوِيَّةٌ', 'identity', 'pl. هُوِيَّاتٌ'], ['فَخُورٌ', 'proud', 'f. فَخُورَةٌ · pl. فَخُورُونَ']],
        questionEn: 'What makes up your identity? Name two things (languages, family, faith, places …).',
        questionAr: 'مَا هُوِيَّتُكَ؟',
        homework: {
          core: 'Redo the readiness check on the website; learn the five Topic B words.',
          develop: 'Redo the assessment section with your lowest score; then learn the Topic B words.',
          stretch: 'Write your Topic A reflection (strongest evidence + one precise next action) and 3 sentences about your identity.',
        },
        wordsSource: 'Topic B begins with identity and personal profiles (TB-L01, lesson engine F2-L10 — the five words come from its preparation list).',
      });
    }
    if (sp.type === 'close') return T.closeSlide({ ...NEXT, remember: 'Topic A complete — well done! Learn 5 identity words for Topic B.' });
    if (sp.type === 'journey') return { ...sp, steps: sp.steps.map((st) => (st.stage === 'prep' ? { ...st, text: 'Get ready for Topic B: identity.' } : st)) };
    return sp;
  });
  return out;
};

const slides = T.reuse('A', 12, require('./d1-l12'), { patch: [finish] });
module.exports = { meta, slides };
