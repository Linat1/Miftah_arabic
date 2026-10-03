'use strict';
/*
 * F6-L12 · Final Review and Assessment: My Town and Transport (60 marks: listening 20 · reading 10 · writing 20 · speaking 10)
 * Website: Pathways › Foundation › F6 › Lesson 12 (the Foundation-stage final assessment). Eight-question readiness check
 * (not marked), the complete F6 language vault and grammar review (four families, eight questions), Part A listening
 * (directions to the station · two people discuss their towns · a guide describes a city; 16 questions reported /20),
 * Part B reading (مَدِينَةُ السَّلَامِ; 10), Part C writing (transport form 5 + 80–100-word response 15), Part D speaking
 * (role play 4 + conversation 6), the four-skills profile and the end-of-Foundation reflection.
 * All scripts, texts, questions, tasks and marks are the website’s (one vowel corrected: يُغَادِرُ).
 */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F6')({
  n: 12, fileTitle: 'Final_Review_and_Assessment_My_Town_and_Transport', chip: 'F6 Assessment',
  title: 'Final Review and Assessment: My Town and Transport', arabic: 'المُرَاجَعَةُ النِّهَائِيَّةُ وَتَقْيِيمُ الوَحْدَةِ',
  focus: 'Show what you can understand and produce about places, transport, tickets, shopping, buildings and directions — then choose one precise next step for Development D1.',
  icon: 'FaFlagCheckered', iconSet: 'fa6', level: 'Foundation · end of F6 and of the Foundation stage',
});
const NEXT = { nextCode: 'D1-L01', nextTitle: 'My Morning Routine', nextAr: 'رُوتِينِي الصَّبَاحِيُّ' };
const SITE = 'Pathways › Foundation › F6 My Town and Transport › F6-L12';
const T1 = 'السَّائِحُ: مِنْ فَضْلِكَ، أَيْنَ مَحَطَّةُ القِطَارِ؟ المُوَاطِنُ: اِذْهَبْ مُسْتَقِيمًا حَتَّى إِشَارَةِ المُرُورِ، ثُمَّ اِنْعَطِفْ يَمِينًا. سَتَمُرُّ بِمَكْتَبَةٍ كَبِيرَةٍ عَلَى يَسَارِكَ، وَالمَحَطَّةُ خَلْفَ المَكْتَبَةِ. هِيَ قَرِيبَةٌ؛ تَسْتَغْرِقُ المَسَافَةُ عَشْرَ دَقَائِقَ مَشْيًا. اِشْتَرِ تَذْكِرَةَ ذَهَابٍ وَإِيَابٍ مِنَ الشُّبَّاكِ الثَّانِي. يُغَادِرُ القِطَارُ مِنَ الرَّصِيفِ الرَّابِعِ فِي السَّاعَةِ العَاشِرَةِ وَالنِّصْفِ. الرِّحْلَةُ تَسْتَغْرِقُ خَمْسًا وَأَرْبَعِينَ دَقِيقَةً. فِي العَوْدَةِ أَنْصَحُكَ بِالحَافِلَةِ لِأَنَّهَا أَرْخَصُ، وَلٰكِنَّ القِطَارَ أَسْرَعُ.';
const T2 = 'سَلْمَى: أَسْكُنُ فِي مَدِينَةٍ حَدِيثَةٍ تَتَمَيَّزُ بِمِتْرُو سَرِيعٍ وَمَرْكَزٍ تِجَارِيٍّ كَبِيرٍ. مِنْ مَزَايَاهَا أَنَّ المَوَاصَلَاتِ مُنَظَّمَةٌ، وَلٰكِنَّ الشَّوَارِعَ مُكْتَظَّةٌ. أَذْهَبُ إِلَى الجَامِعَةِ بِالمِتْرُو. حَسَنٌ: أَمَّا أَنَا فَأَسْكُنُ فِي بَلْدَةٍ تَارِيخِيَّةٍ هَادِئَةٍ. تُوجَدُ فِيهَا أَسْوَاقٌ قَدِيمَةٌ وَمَبَانٍ مَبْنِيَّةٌ مِنَ الحَجَرِ. لَا يُوجَدُ مِتْرُو، لِذٰلِكَ أَتَنَقَّلُ بِالحَافِلَةِ أَوْ مَشْيًا. نَحْنُ الاثْنَانِ نُحِبُّ مَكَانَ سَكَنِنَا، وَلٰكِنَّنَا نُرِيدُ مَوَاصَلَاتٍ أَنْظَفَ.';
const T3 = 'مَرْحَبًا بِكُمْ فِي مَدِينَةِ الوَاحَةِ. يَقَعُ الحَيُّ التَّارِيخِيُّ فِي شَمَالِ المَدِينَةِ، وَيَتَمَيَّزُ بِبُيُوتٍ مَبْنِيَّةٍ مِنَ الطِّينِ وَالحَجَرِ. فِي الوَسَطِ تُوجَدُ قَلْعَةٌ قَدِيمَةٌ وَسُوقٌ شَعْبِيٌّ. المَطَارُ خَارِجَ المَدِينَةِ، وَتَسْتَغْرِقُ الرِّحْلَةُ إِلَيْهِ نِصْفَ سَاعَةٍ بِسَيَّارَةِ الأُجْرَةِ. أَنْصَحُ الزُّوَّارَ بِاسْتِقْلَالِ الحَافِلَةِ فِي المَرْكَزِ لِأَنَّهَا رَخِيصَةٌ، وَبِالمَشْيِ فِي الحَيِّ القَدِيمِ لِأَنَّ شَوَارِعَهُ ضَيِّقَةٌ.';
const READ = 'مَدِينَةُ السَّلَامِ مَدِينَةٌ سَاحِلِيَّةٌ مُتَوَسِّطَةُ الحَجْمِ. فِي مَرْكَزِهَا تُوجَدُ مَكْتَبَةٌ حَدِيثَةٌ وَمَتْحَفٌ مَبْنِيٌّ مِنَ الحَجَرِ. أَمَّا المَحَطَّةُ فَهِيَ مُقَابِلَ السُّوقِ وَقَرِيبَةٌ مِنَ الفُنْدُقِ. أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ، وَتَسْتَغْرِقُ الرِّحْلَةُ خَمْسًا وَعِشْرِينَ دَقِيقَةً. مِنْ مَزَايَا المَدِينَةِ أَنَّ المَوَاصَلَاتِ رَخِيصَةٌ وَأَنَّ الحَدَائِقَ نَظِيفَةٌ. وَلٰكِنْ مِنْ عُيُوبِهَا أَنَّ الطُّرُقَ مُزْدَحِمَةٌ فِي الصَّبَاحِ. بِصِفَةٍ عَامَّةٍ أُحِبُّ مَدِينَتِي لِأَنَّهَا آمِنَةٌ وَنَشِيطَةٌ.';

const lmcq = (label, title, qs, script, seed, marks) => ({
  type: 'mcq', stage: 'ido', min: 4, eyebrow: `Listening · ${label} (website)`, title, ar: 'الاِسْتِمَاعُ',
  seed, questions: qs,
  answerSlide: { min: 0, eyebrow: `Listening · ${label} · answers`, title: `${title}: answers`, ar: 'الإِجَابَاتُ' },
  notes: `LISTENING ${label.toUpperCase()} (website). Read twice at natural pace (website: “Read each set first. Listen twice.”); students answer after the second reading.\nSCRIPT: ${script}\nPrivate chat: ${marks} letters.`,
  answerNotes: `Mark /${marks}. Website: use the script only for analysis AFTER the attempt; students name one listening cue they missed.`,
});
const rmcq = (part, qs, seed) => ({
  type: 'mcq', stage: 'wedo', min: 5, eyebrow: `Reading · questions ${part} · 5 marks (website)`, title: `Reading questions ${part}`, ar: 'أَسْئِلَةُ القِرَاءَةِ', seed, questions: qs,
  answerSlide: { min: 0, eyebrow: 'Reading · answers · show AFTER the section', title: `Questions ${part}: answers`, ar: 'الإِجَابَاتُ' },
  notes: 'READING (website: “Read for gist, locate the exact evidence, then interpret the writer’s attitude.”). Keep the text available (flick back or share it in the chat).',
  answerNotes: 'Mark /5. Ask one student to read the evidence phrase aloud (by invitation).',
});
const WHO = ['Salma', 'Hasan', 'both'];
const who = (prompt, i, why) => ({ prompt, options: WHO, answer: i, feedback: why });

const slides = [
  D.titleSlide({
    n: 12, siteRef: SITE,
    plan: '0–1 Welcome · 1–2 Map · 2–6 Readiness check (not marked) · 6–8 Grammar review + assessment map · 8–22 Listening (20) · 22–30 Reading (10) · 30–46 Writing (20) · 46–56 Speaking (10, one-to-one or trusted pairs) · 56–60 Profile and D1 step.',
    source: 'The website F6-L12 is the Foundation-stage final assessment (60 marks): an eight-question F6 readiness check, the complete F6 language vault (all eleven lessons) and grammar review (four families + eight questions), Part A listening (directions to the station 8 · two people discuss their towns 6 · a guide describes a city 2 — reported /20), Part B reading (مَدِينَةُ السَّلَامِ: 10 questions), Part C writing (a five-field transport registration form 5 + an 80–100-word response 15, three route choices), Part D speaking (role play 4 · conversation 6) and an evidence-based reflection before Development D1.',
    support: `• Everyone sits the same 60 marks. Access arrangements: extra time, questions read aloud in English, one section on screen at a time; speaking one-to-one or in trusted pairs (it can move to the next lesson).
• If time is short: listening + reading in class; writing and speaking next lesson.
• Listening has 16 questions; the website dashboard reports the section out of 20. On paper: mark /16 and multiply by 1.25 (round to the nearest whole mark).
• Website: “Use the profile to identify the next specific language action for Development D1.”
• This is the END of the Foundation stage (F1–F6): celebrate it!`,
  }),
  D.welcomeSlide(),
  {
    type: 'journey', stage: 'welcome', eyebrow: 'Today’s lesson map', title: 'Our assessment, step by step', ar: 'خَرِيطَةُ الدَّرْسِ',
    steps: [
      { stage: 'donow', min: 4, text: 'Readiness check (not marked).', ar: 'تَهْيِئَةٌ' },
      { stage: 'teach', min: 2, text: 'Grammar review and the 60-mark map.', ar: 'خُطَّةُ التَّقْيِيمِ' },
      { stage: 'ido', min: 14, text: 'Listening: 20 marks.', ar: 'الاِسْتِمَاعُ' },
      { stage: 'wedo', min: 8, text: 'Reading: 10 marks.', ar: 'القِرَاءَةُ' },
      { stage: 'youdo', min: 26, text: 'Writing 20 + speaking 10.', ar: 'الكِتَابَةُ وَالتَّحَدُّثُ' },
      { stage: 'feedback', min: 4, text: 'My profile and one next step.', ar: 'الهَدَفُ' },
      { stage: 'prep', min: 2, text: 'Get ready for Development D1.', ar: 'اِسْتَعِدَّ' },
    ],
    support: 'Start each section with the questions you find easiest. Leave a blank and come back. The readiness check does not count.',
    notes: 'LESSON MAP. Website sections: 01 readiness check · language vault · 02 grammar review · 03 four-skills dashboard · 04 listening · 05 reading · 06 writing · 07 speaking · 08 evidence-based reflection (complete Foundation, prepare for Development).',
  },
  D.doNow({
    questions: [
      q('What does تَقْيِيمٌ mean?', ['an assessment', 'a skill', 'instructions'], 'Prepared at home (F6-L11).'),
      q('Complete: ___ مَحَطَّةٌ قَرِيبَةٌ.', ['تُوجَدُ', 'يُوجَدُ', 'هٰذَا'], 'Website readiness check 1.'),
      q('Which means “by train”?', ['بِالقِطَارِ', 'عَلَى القِطَارِ', 'مَشْيًا القِطَارَ'], 'Website readiness check 2.'),
      q('Command a group to go straight.', ['اِذْهَبُوا مُسْتَقِيمًا.', 'اِذْهَبِي مُسْتَقِيمًا.', 'اِذْهَبْ مُسْتَقِيمًا.'], 'Website readiness check 3.'),
      q('Which asks for the nearest station?', ['أَيْنَ أَقْرَبُ مَحَطَّةٍ؟', 'كَمْ مَحَطَّةٌ؟', 'مَاذَا المَحَطَّةُ؟'], 'Website readiness check 8.'),
    ],
    keyIdea: { text: 'This warm-up does NOT count. Use it to find ONE gap to repair before the assessment.', ar: 'اِقْرَأْ · اِبْحَثْ عَنِ الدَّلِيلِ · أَجِبْ' },
    retrieves: 'Question 1 tests one of the words prepared at home at the end of F6-L11. Questions 2–5 are from the website eight-question F6 readiness check (used diagnostically; the other items are in the grammar review).',
  }),
  {
    type: 'ruleCards', stage: 'teach', min: 1, eyebrow: 'Review · the F6 grammar system (website)', title: 'Four families to check', ar: 'مُرَاجَعَةُ القَوَاعِدِ',
    cards: [
      { chip: 'EXISTENCE + GENDER', color: '1D5FBF', head: 'يُوجَدُ · تُوجَدُ', big: 'تُوجَدُ مَكْتَبَةٌ.', en: 'There is a library.', clue: 'The noun controls the verb.' },
      { chip: 'MOVEMENT + DIRECTION', color: '6B4C9A', head: 'بِـ · اِنْعَطِفُوا', big: 'أَذْهَبُ بِالحَافِلَةِ.', en: 'I go by bus.', clue: 'Transport → preposition; listener → ending.' },
      { chip: 'BUILDINGS + JUDGEMENT', color: 'C0386B', head: 'مَبْنِيَّةٌ · أَنَّ', big: 'مِنْ مَزَايَاهَا أَنَّهَا آمِنَةٌ.', en: 'One advantage is that it is safe.', clue: 'Agreement stays visible.' },
    ],
    error: { text: 'Website grammar review: the journey noun is feminine.', pairs: [['تَسْتَغْرِقُ الرِّحْلَةُ نِصْفَ سَاعَةٍ.', 'يَسْتَغْرِقُ الرِّحْلَةُ نِصْفَ سَاعَةٍ.']] },
    notes: `REVIEW (website “Complete F6 grammar review”): 1 Existence and gender (يُوجَدُ + مُذَكَّرٌ · تُوجَدُ + مُؤَنَّثٌ) · 2 Movement and direction (بِـ / عَلَى / مَشْيًا · اِذْهَبْ / اِذْهَبِي / اِذْهَبُوا) · 3 Prices and duration (كَمْ ثَمَنُهُ / ثَمَنُهَا؟ · تَسْتَغْرِقُ + مُدَّةً) · 4 Buildings and balanced judgement (مَبْنِيٌّ / مَبْنِيَّةٌ مِنْ · مِنْ مَزَايَا / عُيُوبِ … أَنَّ).
Website grammar questions (quick oral round if time): تُوجَدُ مَكْتَبَةٌ · اِنْعَطِفِي يَمِينًا (one female) · أَرْخَصُ مِنْ · البَيْتُ مَبْنِيٌّ مِنَ الحَجَرِ · مِنْ مَزَايَا المَدِينَةِ أَنَّ … · الرِّحْلَةُ ← تَسْتَغْرِقُ · يَتَمَيَّزُ بِـ.
NOTE: website grammar question 2 gives عَلَى الدَّرَّاجَةِ as the accurate answer and “بِالدَّرَّاجَةِ always” as wrong; both are used — F6-L03 taught بِالدَّرَّاجَةِ. Accept either in writing and speaking.
The website language vault (all F6 vocabulary by lesson) is for revision BEFORE the assessment — close it during each section.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Assessment map (website) · 60 marks in total', title: 'Four skills, sixty marks', ltr: true, ar: 'خُطَّةُ التَّقْيِيمِ',
    cols: [{ label: 'Marks', w: 1.4 }, { label: 'What you do', w: 7.2 }, { label: 'Section', w: 3.73 }],
    rows: [
      { core: true, cells: ['20', 'Three recordings (heard twice): directions to the station (8) · two people discuss their towns (6) · a guide describes a city (2)', 'A · Listening'] },
      { core: true, cells: ['10', 'One text, The City of Peace: gist, exact evidence and the writer’s attitude — 10 questions', 'B · Reading'] },
      { core: true, cells: ['20', 'A five-field transport form (5) + an 80–100-word response (15)', 'C · Writing'] },
      { core: true, cells: ['10', 'Role play: asking the way to the metro (4) · conversation about your town (6)', 'D · Speaking'] },
    ],
    notes: 'ASSESSMENT MAP (website “Assessment dashboard”): “Automatic listening and reading scores combine with the entered writing and speaking marks.”',
  },
  lmcq('Text 1 · questions 1–4', 'Directions to the train station (1)', [
    q('At the traffic lights, which way should the tourist turn?', ['right', 'left', 'back'], 'ثُمَّ اِنْعَطِفْ يَمِينًا'),
    q('What landmark is on the tourist’s left?', ['a large library', 'a mosque', 'a bank'], 'بِمَكْتَبَةٍ كَبِيرَةٍ عَلَى يَسَارِكَ'),
    q('Where is the station?', ['behind the library', 'opposite the airport', 'inside the market'], 'وَالمَحَطَّةُ خَلْفَ المَكْتَبَةِ'),
    q('How long does the walk take?', ['10 minutes', '20 minutes', '45 minutes'], 'عَشْرَ دَقَائِقَ مَشْيًا'),
  ], T1, 61, 4),
  lmcq('Text 1 · questions 5–8', 'Directions to the train station (2)', [
    q('Which ticket should be bought?', ['return', 'single only', 'weekly pass'], 'تَذْكِرَةَ ذَهَابٍ وَإِيَابٍ'),
    q('Which platform is needed?', ['platform 4', 'platform 2', 'platform 10'], 'مِنَ الرَّصِيفِ الرَّابِعِ'),
    q('What time does the train leave?', ['10:30', '10:15', '11:30'], 'فِي السَّاعَةِ العَاشِرَةِ وَالنِّصْفِ'),
    q('Why is the bus recommended for the return?', ['it is cheaper', 'it is faster', 'it is quieter'], 'لِأَنَّهَا أَرْخَصُ'),
  ], 'Same script as the previous slide (read it twice again, or once if students heard it twice already).', 62, 4),
  lmcq('Text 2 · 6 questions', 'Two people discuss their towns', [
    who('Who lives in a modern city?', 0, 'سَلْمَى: أَسْكُنُ فِي مَدِينَةٍ حَدِيثَةٍ'),
    who('Who mentions historic stone buildings?', 1, 'حَسَنٌ: مَبَانٍ مَبْنِيَّةٌ مِنَ الحَجَرِ'),
    who('Who travels by metro?', 0, 'سَلْمَى: أَذْهَبُ إِلَى الجَامِعَةِ بِالمِتْرُو'),
    who('Who sometimes walks?', 1, 'حَسَنٌ: أَتَنَقَّلُ بِالحَافِلَةِ أَوْ مَشْيًا'),
    who('Who likes where they live?', 2, 'نَحْنُ الاثْنَانِ نُحِبُّ مَكَانَ سَكَنِنَا'),
    who('Who wants cleaner transport?', 2, 'نُرِيدُ مَوَاصَلَاتٍ أَنْظَفَ'),
  ], T2, 63, 6),
  lmcq('Text 3 · 2 questions', 'A guide describes a city', [
    q('Which statement is correct?', ['The historic district is in the north.', 'The airport is in the centre.', 'The castle is modern.'], 'يَقَعُ الحَيُّ التَّارِيخِيُّ فِي شَمَالِ المَدِينَةِ'),
    q('Which second statement is correct?', ['The bus is recommended in the centre.', 'The old streets are wide.', 'The airport journey takes ten minutes.'], 'أَنْصَحُ الزُّوَّارَ بِاسْتِقْلَالِ الحَافِلَةِ فِي المَرْكَزِ'),
  ], T3, 64, 2),
  { type: 'passage', stage: 'wedo', min: 3, eyebrow: 'Reading · Part B · 10 marks (website)', title: 'The City of Peace', ar: 'مَدِينَةُ السَّلَامِ', text: READ, notes: 'READING TEXT (website). No English support on assessment texts. Website strategy: read for gist first, then locate the exact evidence, then decide the writer’s attitude.' },
  rmcq('1–5', [
    q('What type of city is described?', ['a medium-sized coastal city', 'a tiny mountain village', 'a capital in the desert'], 'مَدِينَةٌ سَاحِلِيَّةٌ مُتَوَسِّطَةُ الحَجْمِ'),
    q('What is the museum built of?', ['stone', 'glass', 'wood'], 'مَتْحَفٌ مَبْنِيٌّ مِنَ الحَجَرِ'),
    q('Where is the station?', ['opposite the market', 'behind the airport', 'inside the museum'], 'مُقَابِلَ السُّوقِ'),
    q('What is the station near?', ['the hotel', 'the school', 'the bridge'], 'قَرِيبَةٌ مِنَ الفُنْدُقِ'),
    q('How does the writer go to school?', ['by bus', 'by metro', 'on foot'], 'بِالحَافِلَةِ'),
  ], 65),
  rmcq('6–10', [
    q('How long is the journey?', ['25 minutes', '15 minutes', '50 minutes'], 'خَمْسًا وَعِشْرِينَ دَقِيقَةً'),
    q('Which advantage is mentioned?', ['cheap transport', 'a nearby airport', 'wide roads'], 'المَوَاصَلَاتِ رَخِيصَةٌ'),
    q('What is the main disadvantage?', ['morning congestion', 'unsafe parks', 'expensive tickets'], 'الطُّرُقَ مُزْدَحِمَةٌ فِي الصَّبَاحِ'),
    q('What is the writer’s overall attitude?', ['positive', 'negative', 'uncertain'], 'بِصِفَةٍ عَامَّةٍ أُحِبُّ مَدِينَتِي'),
    q('Which phrase proves the city feels secure?', ['لِأَنَّهَا آمِنَةٌ', 'لِأَنَّهَا سَاحِلِيَّةٌ', 'لِأَنَّهَا مُزْدَحِمَةٌ'], 'آمِنَةٌ = safe'),
  ], 66),
  {
    type: 'formsTable', stage: 'youdo', min: 4, eyebrow: 'Writing · Task 1 · transport registration form · 5 marks (website)', title: 'Complete the transport form', ltr: true, ar: 'اِسْتِمَارَةُ النَّقْلِ',
    cols: [{ label: 'Field', w: 3.8 }, { label: 'Arabic label', w: 4.0, size: 22 }, { label: 'Your answer in Arabic', w: 4.53 }],
    rows: [
      { core: true, cells: ['1 · Name of the city', { ar: 'اِسْمُ المَدِينَةِ' }, '______________'] },
      { core: true, cells: ['2 · Main transport', { ar: 'وَسِيلَةُ النَّقْلِ الرَّئِيسِيَّةُ' }, '______________'] },
      { core: true, cells: ['3 · Distance to school', { ar: 'المَسَافَةُ إِلَى المَدْرَسَةِ' }, '______________'] },
      { core: true, cells: ['4 · One advantage', { ar: 'مِيزَةٌ وَاحِدَةٌ' }, '______________'] },
      { core: true, cells: ['5 · One disadvantage', { ar: 'عَيْبٌ وَاحِدٌ' }, '______________'] },
    ],
    foot: 'Example: لَنْدَنُ · الحَافِلَةُ · خَمْسَةُ كِيلُومِتْرَاتٍ · المَوَاصَلَاتُ رَخِيصَةٌ · الشَّوَارِعُ مُكْتَظَّةٌ',
    notes: 'WRITING TASK 1 (website, 5 marks): one mark per field completed accurately in Arabic. Accept a short phrase (not a sentence) in each field; the spelling and agreement must be correct for the mark.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 12, eyebrow: 'Writing · Task 2 · 80–100 words · 15 marks (website)', title: 'Choose one route and write', ltr: true, ar: 'الكِتَابَةُ',
    cols: [{ label: 'Choose ONE title', w: 5.4 }, { label: 'Website checklist — include all four', w: 6.93 }],
    rows: [
      { core: true, cells: ['A · My town and how I get around', 'Use yūjadu / tūjadu accurately.'] },
      { core: true, cells: ['B · My ideal town', 'Describe transport with the correct preposition and duration.'] },
      { core: true, cells: ['C · Advantages and disadvantages of my town', 'Use mabniyyun min or yatamayyazu bi-.'] },
      { cells: ['Plan → draft → check → improve (F6-L09)', 'One advantage, one disadvantage and a justified conclusion.'] },
    ],
    foot: 'Independent evidence: no translation software or AI. Three paragraphs, three jobs: town · transport · judgement.',
    notes: `WRITING TASK 2 (website, 15 marks): 80–100 words on one route. Suggested strands (as in F3–F5): task completion (5) · range of F6 structures (5) · accuracy (5).
The F6-L09 website model answer (أَسْكُنُ فِي مَدِينَةٍ مُتَوَسِّطَةٍ وَحَدِيثَةٍ …) is the full-mark exemplar — show it ONLY after writing.`,
  },
  {
    type: 'formsTable', stage: 'youdo', min: 8, eyebrow: 'Speaking · Part D · 10 marks (website)', title: 'A role play and a conversation', ltr: true, ar: 'التَّحَدُّثُ',
    cols: [{ label: 'Card', w: 3.0 }, { label: 'What you do', w: 7.8 }, { label: 'Marks', w: 1.53 }],
    rows: [
      { core: true, cells: ['Role play', 'Ask where the nearest metro is, ask how to get there, ask how long the walk takes, and respond appropriately.', '4'] },
      { core: true, cells: ['Conversation', 'Describe your town, explain how you travel, and present one advantage and one disadvantage.', '6'] },
      { cells: ['Language target', 'A direction command, one existence structure and one justified opinion.', '—'] },
    ],
    foot: 'Website: use the preparation space to organise ideas, not to write a script.',
    notes: `SPEAKING (website, 10 marks). Website possible questions: صِفْ مَدِينَتَكَ. · كَيْفَ تَتَنَقَّلُ فِي مَدِينَتِكَ؟ · مَا مَزَايَا مَدِينَتِكَ وَعُيُوبُهَا؟ · أَيْنَ أَقْرَبُ مَحَطَّةٍ؟ · كَيْفَ أَذْهَبُ إِلَى المَتْحَفِ؟
To a girl: صِفِي مَدِينَتَكِ · كَيْفَ تَتَنَقَّلِينَ فِي مَدِينَتِكِ؟
Website preparation notes (three boxes): places and description · transport and duration · advantage, disadvantage and direction.
ORGANISATION: one-to-one with the teacher while others finish writing, or trusted pairs with the teacher listening (the teacher plays the local person in the role play).`,
  },
  {
    type: 'formsTable', stage: 'feedback', min: 3, eyebrow: 'Results · your F6 four-skills profile (website)', title: 'My F6 score profile', ltr: true, ar: 'مِلَفُّ المَهَارَاتِ',
    cols: [{ label: 'Teacher guide (total /60)', w: 6.93 }, { label: 'My score', w: 2.0 }, { label: 'Section', w: 3.4 }],
    rows: [
      { core: true, cells: ['54–60 Excellent — confident town and transport communication', '/20', 'A · Listening'] },
      { core: true, cells: ['42–53 Good — secure, with a few focused gaps', '/10', 'B · Reading'] },
      { core: true, cells: ['30–41 Satisfactory — core communication in place', '/20', 'C · Writing'] },
      { core: true, cells: ['Below 30 — revisit selected F6 lessons with guided practice', '/10', 'D · Speaking'] },
    ],
    foot: 'Website reflection: My strongest F6 evidence was … · Before D1, I will …',
    notes: `PROFILE (website “Evidence-based reflection”: “Name evidence and a measurable next action.”). The bands are a teacher guide in line with the F3–F5 assessments.
Website: “Foundation F1–F6 complete. You can now read and form Arabic, exchange personal information, describe family and home, discuss school, communicate about food and health, and navigate town and transport contexts. Development D1 will deepen connected communication through routines, time and frequency.”`,
  },
  D.selfCheckSlide([
    { route: 'core', text: 'I can name places in town and say where they are.' },
    { route: 'core', text: 'I can say how I travel and how long it takes.' },
    { route: 'develop', text: 'I can ask for and give directions.' },
    { route: 'develop', text: 'I can buy a ticket and compare prices.' },
    { route: 'stretch', text: 'I can write a balanced 80–100-word text about my town.' },
  ]),
  D.prepSlide({
    ...NEXT,
    words: [['أَسْتَيْقِظُ', 'I wake up', 'تَسْتَيْقِظُ she'], ['أَغْسِلُ وَجْهِي', 'I wash my face', 'تَغْسِلُ she'], ['أَتَنَاوَلُ الفُطُورَ', 'I have breakfast', 'نَتَنَاوَلُ we'], ['أَلْبَسُ', 'I put on / wear', 'تَلْبَسُ she'], ['أَخْرُجُ مِنَ البَيْتِ', 'I leave the house', 'يَخْرُجُ he']],
    questionEn: 'What do you do first every morning? Write one sentence.',
    questionAr: 'فِي الصَّبَاحِ، أَوَّلًا …',
    homework: {
      core: 'Redo the website F6-L12 section with your lowest score; learn the five morning words.',
      develop: 'Improve one paragraph of your assessed text, then learn the five morning words.',
      stretch: 'Write your morning routine in five sentences with ثُمَّ and بَعْدَ ذٰلِكَ.',
    },
    wordsSource: 'Development D1 begins with daily routines (website D1-L01 “My Morning Routine”).',
  }),
  D.closeSlide({ ...NEXT, remember: 'Foundation complete — mabrūk! Carry the same habits into Development: agreement, complete structures, reasons.' }),
];

module.exports = { meta, slides };
