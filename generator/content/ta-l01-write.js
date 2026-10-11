'use strict';
/* AT-A-L01 · Writing workshop — Time and Daily Routine. Exam practice for Paper 4 (Writing): Q1 form filling, Q2 directed writing (an email,
 * about 80–90 words), Q3 extended writing (one of two titles, about 130–150 words). Every question has Core · Develop · Stretch support and
 * model answers (a secure Core answer and a full-mark answer). Teacher-made, built on the AT-A-L01 language. */
const X = require('./xp-common');

const meta = X.meta('A', 1, 'Writing', {
  fileTitle: 'Time_and_Daily_Routine', title: 'Writing Workshop — Time and Daily Routine', arabic: 'وَرْشَةُ الكِتَابَةِ — الوَقْتُ وَالرُّوتِينُ اليَوْمِيُّ',
  focus: 'Paper 4 practice: fill in a form accurately, write an email that covers every bullet point, and write an extended piece with a range of tenses, linking words and opinions.',
  icon: 'FaPenToSquare',
});

const FORM = {
  title: 'Summer-camp registration form', ar: 'اسْتِمَارَةُ التَّسْجِيلِ فِي المُخَيَّمِ',
  fields: [
    { core: true, ar: 'الاسْمُ الكَامِلُ', en: 'Your full name', model: 'سَارَةُ أَحْمَدُ', modelEn: 'Sara Ahmad' },
    { core: true, ar: 'العُمْرُ', en: 'Your age', model: 'خَمْسَ عَشْرَةَ سَنَةً', modelEn: 'fifteen years' },
    { core: true, ar: 'الجِنْسِيَّةُ', en: 'Your nationality (m. / f.)', model: 'بِرِيطَانِيَّةٌ', modelEn: 'British (f.)' },
    { core: true, ar: 'مَوْعِدُ الاسْتِيقَاظِ عَادَةً', en: 'What time you usually wake up', model: 'السَّاعَةُ السَّادِسَةُ وَالنِّصْفُ', modelEn: 'half past six' },
    { core: true, ar: 'الإِفْطَارُ المُفَضَّلُ', en: 'Your favourite breakfast', model: 'البَيْضُ وَالخُبْزُ', modelEn: 'eggs and bread' },
    { core: true, ar: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟', en: 'How you travel to school', model: 'بِالحَافِلَةِ', modelEn: 'by bus' },
    { ar: 'نَشَاطٌ تُمَارِسُهُ بَعْدَ المَدْرَسَةِ', en: 'One activity after school', model: 'كُرَةُ السَّلَّةِ', modelEn: 'basketball' },
    { ar: 'جُمْلَةٌ عَنْ يَوْمِكَ المُفَضَّلِ وَلِمَاذَا', en: 'ONE sentence: your favourite day and why', model: 'أُحِبُّ يَوْمَ السَّبْتِ لِأَنِّي أَسْتَيْقِظُ مُتَأَخِّرًا.', modelEn: 'I love Saturday because I wake up late.' },
  ],
  foot: 'One word or a short phrase for each box — the last box needs a full sentence with a reason (li-anna).',
  notes: 'About 8 minutes. Core: boxes 1–6 (single words or phrases). Develop / Stretch: all 8, with the last answer as a full sentence. Remind students to answer in ARABIC and to match the question (a time for a time, a place for a place). Nationality must agree with the writer: بِرِيطَانِيٌّ (boy) / بِرِيطَانِيَّةٌ (girl).',
};

const Q2_TASK = 'You have a new pen friend in Jordan. Write an email in Arabic of about 80–90 words about your daily routine. You must include: • when you wake up and what you do before school • how you go to school and when you arrive • what you do after school • your opinion of your routine, with a reason.';
const Q2_CORE = `مَرْحَبًا يَا مَرْيَمُ،
كَيْفَ حَالُكِ؟ أَنَا سَارَةُ. أُرِيدُ أَنْ أُخْبِرَكِ عَنْ يَوْمِي. أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ. أَوَّلًا أَغْتَسِلُ، ثُمَّ أَتَنَاوَلُ الإِفْطَارَ وَأَشْرَبُ الحَلِيبَ. أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ مَعَ أَخِي، وَأَصِلُ فِي السَّاعَةِ الثَّامِنَةِ. فِي المَدْرَسَةِ أَدْرُسُ الرِّيَاضِيَّاتِ وَالعُلُومَ. بَعْدَ المَدْرَسَةِ أَتَنَاوَلُ الغَدَاءَ، ثُمَّ أَدْرُسُ. فِي المَسَاءِ أُشَاهِدُ التِّلْفَازَ مَعَ أُسْرَتِي، وَأَنَامُ فِي السَّاعَةِ العَاشِرَةِ. أُحِبُّ رُوتِينِي لِأَنَّهُ سَهْلٌ وَمُنَظَّمٌ.
مَعَ السَّلَامَةِ،
سَارَةُ`;
const Q2_FULL = `مَرْحَبًا يَا مَرْيَمُ،
كَيْفَ حَالُكِ؟ أُرِيدُ أَنْ أُخْبِرَكِ عَنْ يَوْمِي. فِي أَيَّامِ المَدْرَسَةِ أَسْتَيْقِظُ مُبَكِّرًا، فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ. أَوَّلًا أَغْتَسِلُ وَأَرْتَدِي مَلَابِسِي، ثُمَّ أَتَنَاوَلُ الإِفْطَارَ مَعَ أُسْرَتِي، لِأَنَّ الإِفْطَارَ مُهِمٌّ جِدًّا لِي. بَعْدَ ذٰلِكَ أَسْتَقِلُّ الحَافِلَةَ، وَأَصِلُ إِلَى المَدْرَسَةِ قَبْلَ الثَّامِنَةِ بِعَشْرِ دَقَائِقَ، وَتَبْدَأُ الدُّرُوسُ فِي الثَّامِنَةِ. بَعْدَ المَدْرَسَةِ أُنْهِي وَاجِبَاتِي، وَأَحْيَانًا أَلْعَبُ كُرَةَ السَّلَّةِ مَعَ صَدِيقَاتِي. فِي المَسَاءِ أَقْرَأُ قَلِيلًا، ثُمَّ أَنَامُ فِي السَّاعَةِ العَاشِرَةِ. فِي رَأْيِي رُوتِينِي مُفِيدٌ لِأَنَّهُ مُنَظَّمٌ، لٰكِنَّنِي أَشْعُرُ بِالتَّعَبِ أَحْيَانًا. وَأَنْتِ، كَيْفَ يَوْمُكِ؟ أَنْتَظِرُ رِسَالَتَكِ.
مَعَ تَحِيَّاتِي،
سَارَةُ`;

const Q3A_CORE = `اسْمِي آدَمُ. أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ كُلَّ يَوْمٍ. أَوَّلًا أَغْتَسِلُ، ثُمَّ أَرْتَدِي مَلَابِسِي، وَبَعْدَ ذٰلِكَ أَتَنَاوَلُ الإِفْطَارَ. أَتَنَاوَلُ الخُبْزَ وَالجُبْنَ وَأَشْرَبُ الحَلِيبَ. أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ مَعَ أَخِي، وَتَبْدَأُ الدُّرُوسُ فِي السَّاعَةِ الثَّامِنَةِ. فِي المَدْرَسَةِ أَدْرُسُ الرِّيَاضِيَّاتِ وَالعُلُومَ وَالعَرَبِيَّةَ. أُحِبُّ دَرْسَ العُلُومِ كَثِيرًا. فِي الاسْتِرَاحَةِ أَلْعَبُ مَعَ أَصْدِقَائِي. أَرْجِعُ إِلَى البَيْتِ فِي السَّاعَةِ الثَّالِثَةِ. بَعْدَ المَدْرَسَةِ أَتَنَاوَلُ الغَدَاءَ، ثُمَّ أَدْرُسُ سَاعَةً. فِي المَسَاءِ أَلْعَبُ مَعَ أَخِي وَأُشَاهِدُ التِّلْفَازَ، وَأَنَامُ فِي السَّاعَةِ العَاشِرَةِ.
فِي نِهَايَةِ الأُسْبُوعِ أَسْتَيْقِظُ مُتَأَخِّرًا وَأَزُورُ جَدِّي وَجَدَّتِي مَعَ أُسْرَتِي.
أَمْسِ اسْتَيْقَظْتُ مُتَأَخِّرًا، فَذَهَبْتُ إِلَى المَدْرَسَةِ بِالسَّيَّارَةِ مَعَ أَبِي، وَوَصَلْتُ فِي الثَّامِنَةِ وَالرُّبْعِ. كُنْتُ نَاعِسًا طُولَ اليَوْمِ، وَكَانَ يَوْمًا صَعْبًا!
أُحِبُّ رُوتِينِي لِأَنَّهُ سَهْلٌ وَمُنَظَّمٌ وَمُفِيدٌ، لٰكِنَّنِي نَاعِسٌ فِي الصَّبَاحِ أَحْيَانًا. فِي المُسْتَقْبَلِ سَأَنَامُ مُبَكِّرًا، وَسَأَتَنَاوَلُ إِفْطَارًا صِحِّيًّا، وَسَأُمَارِسُ الرِّيَاضَةَ كُلَّ يَوْمٍ، لِأَنَّ ذٰلِكَ مُهِمٌّ لِصِحَّتِي.`;
const Q3A_FULL = `أَسْتَيْقِظُ فِي أَيَّامِ الدِّرَاسَةِ فِي السَّاعَةِ السَّادِسَةِ، وَبَعْدَ أَنْ أَغْتَسِلَ وَأُصَلِّيَ الفَجْرَ أَتَنَاوَلُ الإِفْطَارَ مَعَ أُسْرَتِي. ثُمَّ أَسْتَقِلُّ الحَافِلَةَ إِلَى المَدْرَسَةِ، حَيْثُ تَبْدَأُ الدُّرُوسُ فِي الثَّامِنَةِ. بَعْدَ الظُّهْرِ أَرْجِعُ إِلَى البَيْتِ مُتْعَبًا، فَأَرْتَاحُ قَلِيلًا بَعْدَ يَوْمٍ طَوِيلٍ ثُمَّ أُنْهِي وَاجِبَاتِي. وَفِي المَسَاءِ أَقْضِي سَاعَةً مَعَ أُسْرَتِي، ثُمَّ أَقْرَأُ قَلِيلًا قَبْلَ النَّوْمِ.
فِي نِهَايَةِ الأُسْبُوعِ المَاضِي اسْتَيْقَظْتُ مُتَأَخِّرًا، وَذَهَبْتُ مَعَ أَبِي إِلَى السُّوقِ، ثُمَّ زُرْنَا جَدَّتِي وَتَنَاوَلْنَا الغَدَاءَ عِنْدَهَا، لِأَنَّهَا تَطْبُخُ أَطْيَبَ طَعَامٍ. وَفِي المَسَاءِ شَاهَدْنَا فِيلْمًا مَعًا. كَانَ يَوْمًا هَادِئًا وَمُمْتِعًا.
فِي رَأْيِي الرُّوتِينُ المُنَظَّمُ مُهِمٌّ جِدًّا، لِأَنَّهُ يُسَاعِدُنَا عَلَى النَّجَاحِ، وَيُعَلِّمُنَا تَنْظِيمَ الوَقْتِ، وَيُقَلِّلُ التَّوَتُّرَ. صَحِيحٌ أَنَّنِي أُحِبُّ رُوتِينِي، غَيْرَ أَنَّنِي أَنَامُ مُتَأَخِّرًا أَحْيَانًا بِسَبَبِ الهَاتِفِ، فَأَكُونُ نَاعِسًا فِي الصَّبَاحِ.
فِي السَّنَةِ القَادِمَةِ سَأُحَاوِلُ أَنْ أَنَامَ مُبَكِّرًا، وَسَأُمَارِسُ الرِّيَاضَةَ فِي الصَّبَاحِ لِأَكُونَ نَشِيطًا طُولَ اليَوْمِ. وَلَوْ نَجَحْتُ فِي ذٰلِكَ، لَتَحَسَّنَتْ دَرَجَاتِي أَيْضًا. وَأَنْتُمْ، كَيْفَ تُنَظِّمُونَ يَوْمَكُمْ؟`;
const Q3B_FULL = `فِي أَيَّامِ الدِّرَاسَةِ يَكُونُ يَوْمِي سَرِيعًا وَمُنَظَّمًا جِدًّا. أَسْتَيْقِظُ فِي السَّادِسَةِ، وَأَخْرُجُ مِنَ البَيْتِ فِي السَّابِعَةِ وَالنِّصْفِ، وَلَا أَرْجِعُ إِلَّا فِي الرَّابِعَةِ. وَبَعْدَ ذٰلِكَ أُنْهِي وَاجِبَاتِي، فَلَا يَبْقَى عِنْدِي وَقْتٌ كَثِيرٌ لِلرَّاحَةِ. أَمَّا فِي العُطْلَةِ فَأَسْتَيْقِظُ مُتَأَخِّرًا، وَأَقْضِي وَقْتًا أَطْوَلَ مَعَ أُسْرَتِي وَصَدِيقَاتِي، وَأَسْهَرُ قَلِيلًا مَعَهُمْ فِي المَسَاءِ.
أُفَضِّلُ أَيَّامَ العُطْلَةِ لِأَنَّنِي أَرْتَاحُ فِيهَا وَأُمَارِسُ هِوَايَاتِي مِثْلَ الرَّسْمِ وَالقِرَاءَةِ، غَيْرَ أَنَّنِي أَعْرِفُ أَنَّ أَيَّامَ الدِّرَاسَةِ تُعَلِّمُنِي النِّظَامَ وَالمَسْؤُولِيَّةَ.
فِي العُطْلَةِ المَاضِيَةِ قَضَيْتُ يَوْمًا رَائِعًا عَلَى الشَّاطِئِ؛ سَبَحْتُ فِي البَحْرِ، وَالْتَقَطْتُ صُوَرًا جَمِيلَةً، وَتَنَاوَلْنَا السَّمَكَ فِي مَطْعَمٍ صَغِيرٍ، ثُمَّ رَجَعْنَا إِلَى البَيْتِ فِي المَسَاءِ مُتْعَبِينَ وَسُعَدَاءَ. كَانَ الطَّقْسُ جَمِيلًا جِدًّا، وَكَانَ البَحْرُ هَادِئًا.
لَوْ كَانَ الأَمْرُ بِيَدِي، لَبَدَأَ اليَوْمُ الدِّرَاسِيُّ فِي التَّاسِعَةِ، لِأَنَّ الطُّلَّابَ يَكُونُونَ أَكْثَرَ نَشَاطًا عِنْدَمَا يَنَامُونَ جَيِّدًا، وَلَكَانَتْ نَتَائِجُهُمْ أَفْضَلَ. وَفِي المُسْتَقْبَلِ سَأُنَظِّمُ وَقْتِي فِي العُطْلَةِ أَيْضًا، لِكَيْ أَقْرَأَ أَكْثَرَ وَأَسْتَعِدَّ لِلسَّنَةِ الجَدِيدَةِ. وَأَنْتُمْ، مَاذَا تُفَضِّلُونَ؟`;

const slides = [
  X.title({ notes: `WORKSHOP AT A GLANCE — 60 minutes on Teams; individual writing with live feedback (students may write in a shared document or on paper and upload a photo).
0–2 Welcome · 2–6 How Paper 4 works · 6–14 Q1 form filling + model · 14–17 Q2 the task, in English and Arabic · 17–19 Q2 frames (Core) · 19–31 Q2 writing · 31–35 Q2 models · 35–38 Q3 choose a title + plan · 38–54 Q3 writing (Stretch) / Q2 redraft (Core) · 54–58 Q3 models + self-check · 58–60 Close.
Content: teacher-made exam questions for Advanced Topic A, Lesson 1 (Time and Daily Routine, AT-A-L01). Every question has Core · Develop · Stretch support; models are given at two levels (a secure Core answer and a full-mark answer).
EXAM FORMAT: Paper 4 Writing — Q1 form filling, Q2 directed writing (about 80–90 words), Q3 extended writing (one title from two, about 130–150 words), following the Cambridge IGCSE Arabic 0544 format. Check the word counts and marks against the current syllabus and the past paper you use.
Q3 in one lesson: Stretch students write Q3 in class; Core students redraft Q2 and plan Q3, then write Q3 for homework.` }),
  X.welcomeSlide(),
  X.map([
    ['teach', 4, 'How the writing paper works.', 'كَيْفَ'],
    ['youdo', 8, 'Question 1: fill in the form.', 'الاسْتِمَارَةُ'],
    ['youdo', 17, 'Question 2: an email about your day.', 'الرِّسَالَةُ'],
    ['youdo', 23, 'Question 3: extended writing (choose a title).', 'المَقَالُ'],
    ['feedback', 6, 'Model answers and self-check.', 'قَيِّمْ'],
  ], 'Core students: Questions 1 and 2 today, with frames; plan Question 3 and finish it at home. Stretch: all three questions in class.', 'MAP (1 min).'),
  {
    type: 'explain', stage: 'teach', min: 3, eyebrow: 'Teach · Paper 4 Writing', title: 'How the writing exam works', ar: 'امْتِحَانُ الكِتَابَةِ',
    pointsHead: 'THREE QUESTIONS',
    points: [
      'Q1 FORM FILLING — short answers (a word or a phrase) in Arabic. Answer exactly what each box asks.',
      'Q2 DIRECTED WRITING — about 80–90 words. Cover EVERY bullet point; a missing bullet loses marks.',
      'Q3 EXTENDED WRITING — choose ONE title, about 130–150 words. Show range: past, present and future, opinions, reasons, linking words.',
      'Check: verb endings (أَـ for “I”), agreement (m. / f.), and that you used the right tense for each bullet.',
    ],
    exHead: 'WORDS THAT LIFT YOUR WRITING',
    examples: [
      { ar: 'أَوَّلًا · ثُمَّ · بَعْدَ ذٰلِكَ · أَخِيرًا', en: 'first · then · after that · finally' },
      { ar: 'فِي رَأْيِي … لِأَنَّ …', en: 'in my opinion … because …' },
      { ar: 'أَمْسِ … · سَـ / سَوْفَ …', en: 'yesterday … (past) · will … (future)' },
    ],
    notes: 'TEACH (3 min). Stress the two biggest losses in the exam: a missed bullet point (Q2) and staying in one tense (Q3). Word counts are a guide: far too short cannot cover the task; far too long creates errors.',
  },
  X.formTask({ ...FORM, min: 6 }),
  X.formModel(FORM),
  {
    type: 'stretchTask', stage: 'youdo', min: 3, eyebrow: 'Question 2 · directed writing · about 80–90 words', title: 'Question 2: an email to your pen friend', ar: 'رِسَالَةٌ إِلَى صَدِيقَتِي', chip: 'Q2 · DIRECTED WRITING',
    task: Q2_TASK,
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Times and sequence words (awwalan · thumma · baʿda dhālika).', 'An opinion with a reason (fī ra’yī … li-anna …).', 'About 80–90 words.'],
    phrases: [['مَرْحَبًا يَا … ،', 'Hello … , (to a friend)'], ['أُرِيدُ أَنْ أُخْبِرَكَ عَنْ يَوْمِي.', 'I want to tell you about my day.'], ['أَصِلُ إِلَى المَدْرَسَةِ فِي …', 'I arrive at school at …'], ['مَعَ تَحِيَّاتِي،', 'With my greetings, (closing)']],
    bankHead: 'USEFUL LANGUAGE',
    notes: 'Q2 TASK (3 min to read and plan). Students number the four bullets 1–4 in the margin and tick each one as they write it. To a boy pen friend: أُخْبِرَكَ; to a girl: أُخْبِرَكِ.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 2, eyebrow: 'Question 2 · the task in Arabic (as in the exam)', title: 'Read the Arabic rubric', ar: 'نَصُّ السُّؤَالِ', ltr: true,
    cols: [{ label: 'Bullet', w: 1.2 }, { label: 'In Arabic', w: 6.8, size: 18 }, { label: 'In English', w: 4.33 }],
    rows: [
      { cells: ['task', 'لَكَ صَدِيقٌ جَدِيدٌ فِي الأُرْدُنِّ. اكْتُبْ رِسَالَةً إِلِكْتِرُونِيَّةً عَنْ رُوتِينِكَ اليَوْمِيِّ (٨٠–٩٠ كَلِمَةً).', 'A new friend in Jordan: an email about your routine (80–90 words).'] },
      { cells: ['1', 'مَتَى تَسْتَيْقِظُ، وَمَاذَا تَفْعَلُ قَبْلَ المَدْرَسَةِ؟', 'When you wake up; what you do before school'] },
      { cells: ['2', 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ، وَمَتَى تَصِلُ؟', 'How you go to school; when you arrive'] },
      { cells: ['3', 'مَاذَا تَفْعَلُ بَعْدَ المَدْرَسَةِ؟', 'What you do after school'] },
      { cells: ['4', 'مَا رَأْيُكَ فِي رُوتِينِكَ؟ وَلِمَاذَا؟', 'Your opinion of your routine, and why'] },
    ],
    foot: 'In the exam the instructions are in Arabic: underline the question word in each bullet (when? how? what? why?).',
    notes: 'Recognising the question words is the key Core skill: مَتَى (when) · كَيْفَ (how) · مَاذَا (what) · لِمَاذَا (why).',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 12, eyebrow: 'Question 2 · Core frames (Develop: use them only if stuck)', title: 'Write your email with these frames', ar: 'قَوَالِبُ الكِتَابَةِ', ltr: true,
    cols: [{ label: 'Bullet', w: 1.2 }, { label: 'Frame', w: 7.0, size: 18 }, { label: 'English', w: 4.13 }],
    rows: [
      { core: true, cells: ['start', 'مَرْحَبًا يَا ______ ، أَنَا ______ .', 'Hello …, I am …'] },
      { core: true, cells: ['1', 'أَسْتَيْقِظُ فِي السَّاعَةِ ______ . أَوَّلًا ______ ، ثُمَّ ______ .', 'I wake up at … First …, then …'] },
      { core: true, cells: ['2', 'أَذْهَبُ إِلَى المَدْرَسَةِ ______ ، وَأَصِلُ فِي ______ .', 'I go to school …, and I arrive at …'] },
      { core: true, cells: ['3', 'بَعْدَ المَدْرَسَةِ ______ ، وَفِي المَسَاءِ ______ .', 'After school …, and in the evening …'] },
      { core: true, cells: ['4', 'أُحِبُّ رُوتِينِي لِأَنَّهُ ______ .', 'I like my routine because it is …'] },
      { core: true, cells: ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'] },
    ],
    foot: 'Develop: add a frequency word (aḥyānan) and a “but” (lākinnanī). Stretch: write without frames and add a second opinion.',
    notes: 'WRITE (12 min). Teacher gives live feedback in the chat or on shared documents: check bullet coverage first, then verb endings. Core completes the frames; Develop adds detail; Stretch writes freely and reaches 90 words.',
  },
  X.model({
    eyebrow: 'Question 2 · Core model · a secure answer', title: 'Q2 Core model: every bullet covered', text: Q2_CORE, min: 2,
    en: '“Hello Maryam, how are you? I am Sara. I want to tell you about my day. I wake up at half past six. First I shower, then I have breakfast and drink milk. I go to school by bus with my brother and arrive at eight. At school I study maths and science. After school I have lunch, then I study. In the evening I watch TV with my family and I sleep at ten. I like my routine because it is easy and organised. Goodbye, Sara.”',
    find: ['أَسْتَيْقِظُ', 'أَوَّلًا … ثُمَّ', 'بَعْدَ المَدْرَسَةِ', 'لِأَنَّهُ'],
    notes: 'A Core model: every bullet answered in short, accurate sentences. It is about 65 words — show students how ONE extra detail per bullet brings it to 80–90 (compare with the full model).',
  }),
  X.model({
    eyebrow: 'Question 2 · full-mark model', title: 'Q2 full-mark model: detail, linking, opinion', text: Q2_FULL, min: 2,
    en: '“Hello Maryam, how are you? I want to tell you about my day. On school days I wake up early, at half past six. First I shower and get dressed, then I have breakfast with my family, because breakfast is very important to me. After that I take the bus and arrive ten minutes before eight; lessons start at eight. After school I finish my homework, and sometimes I play basketball with my friends. In the evening I read a little, then sleep at ten. In my opinion my routine is useful because it is organised, but I sometimes feel tired. And you, how is your day? I look forward to your message. With my greetings, Sara.”',
    find: ['مُبَكِّرًا', 'بَعْدَ ذٰلِكَ', 'وَأَحْيَانًا', 'فِي رَأْيِي … لٰكِنَّنِي'],
    notes: 'Full-mark model: all four bullets, a range of linking words, frequency, an opinion with a reason AND a contrast, and a question back to the reader. Students compare with their own: what can I add?',
  }),
  {
    type: 'formsTable', stage: 'youdo', min: 3, eyebrow: 'Question 3 · extended writing · about 130–150 words · choose ONE', title: 'Question 3: choose one title', ar: 'اخْتَرْ عُنْوَانًا وَاحِدًا', ltr: true,
    cols: [{ label: 'Title', w: 1.1 }, { label: 'In Arabic', w: 6.6, size: 17 }, { label: 'In English', w: 4.63 }],
    rows: [
      { cells: ['(أ)', 'يَوْمٌ فِي حَيَاتِي', 'A day in my life'] },
      { cells: ['', 'صِفْ يَوْمًا دِرَاسِيًّا عَادِيًّا · مَاذَا فَعَلْتَ فِي نِهَايَةِ الأُسْبُوعِ المَاضِي؟ · مَا رَأْيُكَ فِي رُوتِينِكَ؟ · مَاذَا سَتُغَيِّرُ فِي المُسْتَقْبَلِ؟', 'Typical school day · last weekend · your opinion · a future change'] },
      { cells: ['(ب)', 'أَيَّامُ الدِّرَاسَةِ وَأَيَّامُ العُطْلَةِ', 'School days and holidays'] },
      { cells: ['', 'قَارِنْ بَيْنَ اليَوْمَيْنِ · أَيُّهُمَا تُفَضِّلُ وَلِمَاذَا؟ · صِفْ يَوْمًا قَضَيْتَهُ فِي العُطْلَةِ المَاضِيَةِ · مَاذَا تُرِيدُ أَنْ تُغَيِّرَ؟', 'Compare · which you prefer and why · a past holiday day · a change you want'] },
    ],
    foot: 'Cover all four points. Use three time frames (present · past · future), opinions with reasons, and linking words.',
    notes: 'Q3 (3 min to choose and read). Title (أ) suits Core and Develop (it follows the AT-A-L01 language closely); title (ب) suits Stretch (comparison with ammā … fa-, preference with a reason, a conditional).',
  },
  {
    type: 'explain', stage: 'youdo', min: 3, eyebrow: 'Question 3 · plan before you write (4 paragraphs)', title: 'A four-paragraph plan', ar: 'خُطَّةُ الكِتَابَةِ',
    pointsHead: 'ONE PARAGRAPH FOR EACH POINT',
    points: [
      'Present — my typical day: times + sequence (awwalan, thumma, baʿda dhālika).',
      'Past — last weekend / a holiday day: istayqaẓtu, dhahabtu, tanāwalnā … kāna yawman mumtiʿan.',
      'Opinion — fī ra’yī … li-anna …; Stretch: ṣaḥīḥun anna … ghayra anna …',
      'Future — sa-uḥāwilu an …; Stretch: a conditional (law … la-).',
    ],
    exHead: 'ONE SENTENCE PER TIME FRAME',
    examples: [
      { ar: 'أَسْتَيْقِظُ فِي السَّادِسَةِ كُلَّ يَوْمٍ.', en: 'present: I wake up at six every day.' },
      { ar: 'أَمْسِ اسْتَيْقَظْتُ مُتَأَخِّرًا.', en: 'past: yesterday I woke up late.' },
      { ar: 'سَأُحَاوِلُ أَنْ أَنَامَ مُبَكِّرًا.', en: 'future: I will try to sleep early.' },
    ],
    callout: { head: 'ROUTES', text: 'Core: title (أ), one or two sentences per paragraph, then finish at home. Develop: three sentences per paragraph. Stretch: title (ب) with a contrast and a conditional.' },
    notes: 'PLAN (3 min) then WRITE (16 min). Teacher circulates (shared docs) and checks the plan before students write: four paragraphs = four bullet points.',
  },
  X.model({
    eyebrow: 'Question 3 · title (أ) · Core model', title: 'Q3 (أ) Core model: clear and complete', text: Q3A_CORE, min: 2,
    en: 'Present: my school day, step by step → weekend: I visit my grandparents → past: yesterday I woke up late and was sleepy all day → opinion: easy and organised, but sometimes sleepy → future: sleep early, healthy breakfast, sport every day.',
    find: ['أَوَّلًا … ثُمَّ', 'أَمْسِ اسْتَيْقَظْتُ', 'لِأَنَّهُ … لٰكِنَّنِي', 'سَأَنَامُ'],
    notes: 'Core model: simple sentences but all four points and three time frames — this is how a weaker writer still covers the task. Students highlight the past sentence and the future sentence.',
  }),
  X.model({
    eyebrow: 'Question 3 · title (أ) · full-mark model', title: 'Q3 (أ) full-mark model: range and accuracy', text: Q3A_FULL, min: 2,
    en: 'Present: school days from six o’clock to bedtime, with sequence and detail → past: last weekend at the market and at grandmother’s → opinion: an organised routine helps us succeed (concession: “it is true … but” — my phone keeps me up) → future: sleep early, exercise; “if I manage it, my marks would improve”.',
    find: ['بَعْدَ أَنْ أَغْتَسِلَ', 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ', 'لِأَكُونَ نَشِيطًا', 'لَوْ … لَتَحَسَّنَتْ'],
    notes: 'Full-mark model: four paragraphs, three time frames, a concession (ṣaḥīḥun anna … ghayra anna), purpose (li- + verb in -a), a conditional, and accurate agreement. Prayer is one example of a morning routine; students describe their own.',
  }),
  X.model({
    eyebrow: 'Question 3 · title (ب) · full-mark model', title: 'Q3 (ب) full-mark model: school days and holidays', text: Q3B_FULL, min: 2,
    en: 'Compare: fast, organised school days vs relaxed holidays (as for … then) → preference: holidays, but school teaches order and responsibility → past: a beach day last holiday → conditional: “if it were up to me, school would start at nine” → future: organise holiday time so that I read more.',
    find: ['أَمَّا فِي العُطْلَةِ فَأَسْتَيْقِظُ', 'غَيْرَ أَنَّنِي', 'لَوْ كَانَ … لَبَدَأَ', 'لِكَيْ أَقْرَأَ'],
    notes: 'Full-mark model for the comparison title: ammā … fa- (as for … then), lā … illā (not … until), a concession, a past narrative, a conditional and a purpose clause with likay.',
  }),
  X.selfCheckSlide([
    { route: 'core', text: 'Q1: I answered every box in Arabic, matching the question.' },
    { route: 'core', text: 'Q2: I covered all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: I used sequence words, a frequency word and an opinion with a reason.' },
    { route: 'develop', text: 'Q3: I wrote four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: I used a contrast, a purpose clause or a conditional accurately.' },
  ]),
  X.closeSlide({ nextCode: 'AT-A-L02 · Exam practice', nextTitle: 'Speaking and writing workshops — the next Topic A lesson', nextAr: 'وَرْشَةُ التَّدْرِيبِ', remember: 'Remember: cover every bullet point, check your verb endings, and use three time frames in Question 3.' }),
].map((sp) => (sp.type === 'close' ? { ...sp, byeEn: 'Well done — great writing practice today!', nextLabel: 'NEXT WORKSHOP' } : sp));

module.exports = { meta, slides, FORM, Q2_CORE, Q2_FULL, Q3A_CORE, Q3A_FULL, Q3B_FULL };
