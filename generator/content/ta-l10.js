'use strict';
/* AT-A-L10 · Reading and Listening Exam Skills — website: Advanced Topics › Topic A › Lesson 10 (lesson engine D1-L10).
   The D1-L10 deck is reused; Do Now questions 3–4 now retrieve AT-A-L09 (transport) instead of D1-L09, and the Topic A
   “distractor detective” uses Topic A sentences (café, health, transport) so the exam skills are applied to the whole topic. */
const T = require('./topic-common');
const { q } = T;

const meta = T.meta('A', 10, { fileTitle: 'Reading_and_Listening_Exam_Skills', chip: 'Exam Skills', icon: 'FaHeadphones' });
const doNowFix = (slides) => slides.map((sp) => {
  if (sp.stage !== 'donow' || sp.type !== 'mcq') return sp;
  const qs = [...sp.questions];
  qs[2] = q('Choose “I go to school by bus.”', ['أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ.', 'أَذْهَبُ إِلَى المَدْرَسَةِ عَلَى الحَافِلَةِ.', 'أَذْهَبُ إِلَى المَدْرَسَةِ بِمَشْيًا.'], 'AT-A-L09: bi- with vehicles.');
  qs[3] = q('Sarah goes by bus. Who cycles?', ['her brother', 'Sarah', 'the father'], 'AT-A-L09 listening: amma … fa-.', { ar: 'أَمَّا أَخُوهَا فَيَذْهَبُ عَلَى الدَّرَّاجَةِ.' });
  return { ...sp, questions: qs, notes: sp.notes.replace(/Questions 3–5 retrieve[^\n]*/, 'Questions 3–4 retrieve AT-A-L09 (transport patterns and the listening “as for …”); question 5 retrieves AT-A-L02 (time with illā).') };
});
const slides = T.reuse('A', 10, require('./d1-l10'), {
  patch: [doNowFix],
  challenge: {
    steps: [
      'Teacher reads each item twice (script in the notes); the options are on the right.',
      'Everyone types the answer AND one Arabic evidence word.',
      'Then name the distractor: which option was “heard” but wrong?',
      'Say why the answer fits: person, time frame, “but / not”.',
    ],
    routes: {
      core: 'Answer items 1–2. Type the answer and one evidence word.',
      develop: 'All 4 items: answer, evidence and the distractor.',
      stretch: 'Explain each distractor in one sentence (wrong person / wrong time / cancelled by “but”).',
    },
    phrases: [['شَايٌ · قَهْوَةٌ · عَصِيرٌ', '1 · what does he order?'], ['يَوْمَانِ · أُسْبُوعٌ · شَهْرٌ', '2 · how long has she had the headache?'], ['حَافِلَةٌ · قِطَارٌ · مَشْيًا', '3 · how does Omar go today?'], ['٧:١٥ · ٧:٣٠ · ٧:٤٥', '4 · when does the train leave?']],
    notes: `SCRIPT (teacher reads each twice):
1. كُنْتُ أُرِيدُ قَهْوَةً، وَلٰكِنِّي طَلَبْتُ شَايًا لِأَنَّ القَهْوَةَ مُرَّةٌ. → tea (distractor: coffee — he wanted it but did not order it).
2. عِنْدَهَا صُدَاعٌ مُنْذُ يَوْمَيْنِ، وَسُعَالٌ مُنْذُ أُسْبُوعٍ. السُّؤَالُ عَنِ الصُّدَاعِ. → two days (distractor: a week = the cough).
3. عَادَةً يَذْهَبُ عُمَرُ بِالحَافِلَةِ، وَلٰكِنَّهُ اليَوْمَ يَذْهَبُ مَشْيًا لِأَنَّ الجَوَّ جَمِيلٌ. → on foot (distractor: bus = usually, not today).
4. كَانَ القِطَارُ يُغَادِرُ فِي السَّابِعَةِ وَالرُّبْعِ، وَلٰكِنَّ المَوْعِدَ الجَدِيدَ فِي السَّابِعَةِ وَالنِّصْفِ. → 7:30 (distractor: 7:15 = the old time).
Teacher-written items for the website “distractor detective”, built from Topic A lessons AT-A-L04/05, L07, L09 and L02. Answers: 1 tea · 2 two days · 3 on foot · 4 7:30.`,
  },
});
module.exports = { meta, slides };
