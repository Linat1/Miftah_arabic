'use strict';
/*
 * F5-L12 · Review and Unit Assessment: Food, Health and Body (60 marks: listening 15 · reading 15 · writing 15 · speaking 15)
 * Website: Pathways › Foundation › F5 › Lesson 12. Twelve-question knowledge check (not marked), the F5 language vault and
 * grammar review (twelve-question laboratory, three sentence builders), Part A listening (Mariam’s routine · at the doctor ·
 * a restaurant order; 15), Part B reading (menu · health article · pharmacy notice; 15), Part C writing (clinic form +
 * 80–100-word article; 15), Part D speaking (two role plays + conversation; 15), the four-skills profile and reflection.
 * All scripts, texts, questions, tasks and marks are the website’s; the full-mark article is the F5-L11 website model.
 */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F5')({
  n: 12, fileTitle: 'Review_and_Unit_Assessment_Food_Health_and_Body', chip: 'F5 Assessment',
  title: 'Review and Unit Assessment: Food, Health and Body', arabic: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ',
  focus: 'Show what you can understand and produce about food, meals, the body, illness, healthcare and healthy habits — then choose one precise next step for F6.',
  icon: 'FaClipboardCheck', iconSet: 'fa6', level: 'Foundation · end of unit F5',
});
const NEXT = { nextCode: 'F6-L01', nextTitle: 'Places in Town', nextAr: 'الأَمَاكِنُ فِي المَدِينَةِ' };
const SITE = 'Pathways › Foundation › F5 Food, Health and Body › F5-L12';
const T1 = 'اِسْمِي مَرْيَمُ، وَأُحَاوِلُ أَنْ أَتَنَاوَلَ طَعَامًا مُتَوَازِنًا. فِي الفُطُورِ آكُلُ الزَّبَادِي وَالفَاكِهَةَ وَقِطْعَةً مِنَ الخُبْزِ، وَأَشْرَبُ كُوبًا مِنَ الحَلِيبِ. لَا أَشْرَبُ المَشْرُوبَاتِ الغَازِيَّةَ لِأَنَّهَا تَحْتَوِي عَلَى سُكَّرٍ كَثِيرٍ. فِي الغَدَاءِ آكُلُ الدَّجَاجَ مَعَ الأَرُزِّ وَالسَّلَطَةِ. أَشْرَبُ المَاءَ، وَلَكِنَّ هَدَفِي أَنْ أَزِيدَ كَمِّيَّةَ المَاءِ الَّتِي أَشْرَبُهَا كُلَّ يَوْمٍ.';
const T2 = 'الطَّبِيبُ: مَا المُشْكِلَةُ؟ المَرِيضُ: عِنْدِي أَلَمٌ شَدِيدٌ فِي مَعِدَتِي مُنْذُ يَوْمَيْنِ، وَعِنْدِي حُمَّى خَفِيفَةٌ أَيْضًا. الطَّبِيبُ: هَلْ أَكَلْتَ طَعَامًا دَسِمًا؟ المَرِيضُ: نَعَمْ، أَكَلْتُ طَعَامًا دَسِمًا فِي المَطْعَمِ. الطَّبِيبُ: يَجِبُ أَنْ تَشْرَبَ المَاءَ وَأَنْ تَسْتَرِيحَ. لَا تَأْكُلْ طَعَامًا دَسِمًا اليَوْمَ. إِذَا اسْتَمَرَّ الأَلَمُ، فَارْجِعْ إِلَى العِيَادَةِ.';
const T3 = 'النَّادِلُ: مَسَاءُ الخَيْرِ. مَاذَا تُرِيدُ؟ الزَّبُونُ: أُرِيدُ طَبَقَ الكَبْسَةِ، مِنْ فَضْلِكَ. النَّادِلُ: الكَبْسَةُ تَتَكَوَّنُ مِنَ الأَرُزِّ وَالدَّجَاجِ وَالتَّوَابِلِ. هَلْ تُرِيدُ شَيْئًا مَعَهَا؟ الزَّبُونُ: نَعَمْ، أُرِيدُ سَلَطَةً صَغِيرَةً وَعَصِيرَ اللَّيْمُونِ. النَّادِلُ: حَسَنًا. الزَّبُونُ: شُكْرًا. وَبَعْدَ الطَّعَامِ: الحِسَابُ، لَوْ سَمَحْتَ.';
const MENU = 'قَائِمَةُ مَطْعَمِ الوَاحَةِ · حَسَاءُ العَدَسِ مَعَ الخُبْزِ (نَبَاتِيٌّ): ٨ دَنَانِيرَ · الدَّجَاجُ مَعَ الأَرُزِّ: ١٨ دِينَارًا · السَّمَكُ المَشْوِيُّ مَعَ البَطَاطِسِ وَالسَّلَطَةِ: ٢٢ دِينَارًا · سَلَطَةُ الفَاكِهَةِ: ٧ دَنَانِيرَ · شَايٌ: ٣ دَنَانِيرَ · مَاءٌ مَعْدِنِيٌّ: ٤ · عَصِيرُ بُرْتُقَالٍ: ٦';
const ART = 'عَادَاتٌ صِحِّيَّةٌ لِلطُّلَّابِ · تَعْتَمِدُ الصِّحَّةُ عَلَى عَادَاتٍ يَوْمِيَّةٍ مُتَوَازِنَةٍ. يَنْبَغِي أَنْ نَأْكُلَ خَمْسَ حِصَصٍ مِنَ الفَاكِهَةِ وَالخَضْرَوَاتِ، وَأَنْ نَشْرَبَ المَاءَ بِانْتِظَامٍ. مِنَ الأَفْضَلِ أَنْ نُقَلِّلَ المَشْرُوبَاتِ السُّكَّرِيَّةَ لِأَنَّهَا قَدْ تَضُرُّ الأَسْنَانَ وَالجِسْمَ. كَمَا يَجِبُ أَنْ نَنَامَ مُبَكِّرًا وَنُمَارِسَ الرِّيَاضَةَ. قَبْلَ النَّوْمِ، اِسْتَرِحْ وَلَا تَسْتَخْدِمِ الهَاتِفَ لِسَاعَاتٍ طَوِيلَةٍ. لِذَلِكَ، اِبْنِ عَادَاتٍ صَغِيرَةً وَثَابِتَةً.';
const PHARM = 'تَعْلِيمَاتُ الصَّيْدَلِيَّةِ · خُذْ هٰذَا الدَّوَاءَ مَرَّتَيْنِ فِي اليَوْمِ بَعْدَ الطَّعَامِ. لَا تَزِدِ الجُرْعَةَ. إِذَا ظَهَرَتْ حَسَاسِيَّةٌ، تَوَقَّفْ عَنِ الدَّوَاءِ وَاتَّصِلْ بِالطَّبِيبِ. اِحْفَظِ الدَّوَاءَ فِي مَكَانٍ بَارِدٍ وَجَافٍّ، بَعِيدًا عَنِ الأَطْفَالِ.';

const lmcq = (n, title, qs, script, seed) => ({
  type: 'mcq', stage: 'ido', min: 5, eyebrow: `Listening · Text ${n} · 5 marks (website)`, title, ar: `الاِسْتِمَاعُ · النَّصُّ ${['الأَوَّلُ', 'الثَّانِي', 'الثَّالِثُ'][n - 1]}`,
  seed, questions: qs,
  answerSlide: { min: 0, eyebrow: `Listening · Text ${n} · answers`, title: `Text ${n} · Answers`, ar: 'الإِجَابَاتُ' },
  notes: `LISTENING TEXT ${n} (website, 5 marks). Read twice at natural pace (website: each recording may be played twice); students answer after the second reading.\nSCRIPT: ${script}\nPrivate chat: five letters.`,
  answerNotes: 'Mark /5. Website: reveal the script only after the attempt; students identify one listening cue to remember.',
});
const rmcq = (title, eyebrow, qs, seed) => ({
  type: 'mcq', stage: 'wedo', min: 4, eyebrow, title, ar: 'أَسْئِلَةُ القِرَاءَةِ', seed, questions: qs,
  answerSlide: { min: 0, eyebrow: 'Reading · answers · show AFTER the section', title: `${title}: answers`, ar: 'الإِجَابَاتُ' },
  notes: 'READING (website, 5 marks on this text). Keep the text on the previous slide available (flick back or share it in the chat).',
  answerNotes: 'Mark /5. Ask one student to read the evidence phrase aloud (by invitation).',
});

const slides = [
  D.titleSlide({
    n: 12, siteRef: SITE,
    plan: '0–1 Welcome · 1–2 Map · 2–6 Knowledge check (not marked) · 6–7 Assessment map · 7–20 Listening (15) · 20–32 Reading (15) · 32–46 Writing (15) · 46–56 Speaking (15, one-to-one or trusted pairs) · 56–60 Profile and F6 step.',
    source: 'The website F5-L12 is a four-skill, 60-mark unit assessment (15 per skill): a twelve-question knowledge check, the F5 language vault and grammar review (a twelve-question grammar laboratory and three sentence builders), Part A listening (Mariam’s food and health routine · at the doctor · a restaurant order: 15 questions), Part B reading (the Al-Waha restaurant menu · a health article · pharmacy instructions: 15 questions), Part C writing (a five-field clinic form + an 80–100-word article طَعَامِي وَصِحَّتِي), Part D speaking (restaurant role play 5 · doctor role play 5 · conversation 5) and a reflection with one precise next action.',
    support: `• Everyone sits the same 60 marks. Access arrangements: extra time, questions read aloud in English, one section on screen at a time; speaking one-to-one or in trusted pairs (it can move to the next lesson).
• If time is short: listening + reading in class; writing and speaking next lesson.
• Website: “Each skill remains visible separately. Your result should identify what to practise next, not reduce progress to one number.”
• Website writing rule: “This is independently assessed evidence: do not use translation software or AI.”
• Health content: all role plays use invented symptoms; nobody shares real medical information.`,
  }),
  D.welcomeSlide(),
  {
    type: 'journey', stage: 'welcome', eyebrow: 'Today’s lesson map', title: 'Our assessment, step by step', ar: 'خَرِيطَةُ الدَّرْسِ',
    steps: [
      { stage: 'donow', min: 4, text: 'Knowledge check (not marked).', ar: 'تَهْيِئَةٌ' },
      { stage: 'teach', min: 2, text: 'Grammar review and the 60-mark map.', ar: 'خُطَّةُ التَّقْيِيمِ' },
      { stage: 'ido', min: 13, text: 'Listening: 15 marks.', ar: 'الاِسْتِمَاعُ' },
      { stage: 'wedo', min: 12, text: 'Reading: 15 marks.', ar: 'القِرَاءَةُ' },
      { stage: 'youdo', min: 24, text: 'Writing 15 + speaking 15.', ar: 'الكِتَابَةُ وَالتَّحَدُّثُ' },
      { stage: 'feedback', min: 3, text: 'My profile and one next step.', ar: 'الهَدَفُ' },
      { stage: 'prep', min: 2, text: 'Get ready for F6: town.', ar: 'اِسْتَعِدَّ' },
    ],
    support: 'Start each section with the questions you find easiest. Leave a blank and come back. The knowledge check does not count.',
    notes: 'LESSON MAP. Website sections: 01 knowledge check · 02 grammar and sentence-building review · 03 four-skills dashboard · 04 listening · 05 reading · 06 writing · 07 speaking · 08 reflection and next-step plan.',
  },
  D.doNow({
    questions: [
      q('What does تَقْيِيمٌ mean?', ['an assessment', 'reading', 'a plan'], 'Prepared at home (F5-L11).'),
      q('Which sentence means “I prefer fruit because it is healthy”?', ['أُفَضِّلُ الفَاكِهَةَ لِأَنَّهَا صِحِّيَّةٌ.', 'أُحِبُّ الفَاكِهَةَ لِأَنَّهُ صِحِّيٌّ.', 'آكُلُ الفَاكِهَةَ فِي المَدْرَسَةِ.'], 'Website knowledge check 1: fruit is feminine.'),
      q('Which phrase means “I have pain in my stomach”?', ['عِنْدِي أَلَمٌ فِي مَعِدَتِي.', 'مَعِدَتِي لَذِيذَةٌ.', 'أَشْرَبُ مَعِدَتِي.'], 'Website knowledge check 3.'),
      q('Which body noun is feminine?', ['يَدٌ', 'رَأْسٌ', 'ظَهْرٌ'], 'Website knowledge check 6.'),
      q('Which phrase asks for the bill?', ['الحِسَابُ، لَوْ سَمَحْتَ.', 'قَائِمَةُ الطَّعَامِ.', 'هَلْ عِنْدَكُمْ حَسَاءٌ؟'], 'Website knowledge check 8.'),
    ],
    keyIdea: { text: 'This warm-up does NOT count. Use it to find ONE gap to repair before the assessment.', ar: 'اِقْرَأْ · اِبْحَثْ عَنِ الدَّلِيلِ · أَجِبْ' },
    retrieves: 'Question 1 tests one of the words prepared at home at the end of F5-L11. Questions 2–5 are from the website twelve-question F5 knowledge check (used diagnostically).',
  }),
  {
    type: 'ruleCards', stage: 'teach', min: 1, eyebrow: 'Review · the F5 grammar system (website)', title: 'Four patterns to check', ar: 'مُرَاجَعَةُ القَوَاعِدِ',
    cards: [
      { chip: 'REASON AGREEMENT', color: 'C0386B', head: 'لِأَنَّهُ · لِأَنَّهَا', big: 'السَّلَطَةُ صِحِّيَّةٌ لِأَنَّهَا طَازَجَةٌ.', en: 'The salad is healthy because it is fresh.', clue: 'Agrees with the noun, not the speaker.' },
      { chip: 'SYMPTOM + DURATION', color: '6B4C9A', head: 'عِنْدِي … فِي … مُنْذُ …', big: 'عِنْدِي أَلَمٌ فِي مَعِدَتِي مُنْذُ يَوْمَيْنِ.', en: 'I have had stomach pain for two days.', clue: 'Keep each structure complete.' },
      { chip: 'ADVICE + أَنْ', color: '1E6B52', head: 'يَجِبُ أَنْ · مِنَ الأَفْضَلِ أَنْ', big: 'مِنَ الأَفْضَلِ أَنْ تَنَامَ مُبَكِّرًا.', en: 'It is better to sleep early.', clue: 'A verb (-a) after an.' },
    ],
    error: { text: 'Website grammar laboratory: the first-person verb starts with a-.', pairs: [['أَنَا أَتَنَاوَلُ الفُطُورَ.', 'أَنَا تَتَنَاوَلُ الفُطُورَ.']] },
    notes: `REVIEW (website “F5 grammar and sentence-building review”): Present-tense communication (آكُلُ · أَشْرَبُ · أُفَضِّلُ · أَتَنَاوَلُ; تُـ for you/she, يُـ for he) · Reasons and agreement · Symptoms and duration · Advice with أَنْ.
Website sentence builders (correct choices): أُفَضِّلُ السَّلَطَةَ لِأَنَّهَا صِحِّيَّةٌ. · عِنْدِي أَلَمٌ فِي مَعِدَتِي مُنْذُ يَوْمَيْنِ. · مِنَ الأَفْضَلِ أَنْ تَشْرَبَ المَاءَ بِانْتِظَامٍ.
The website language vault (all F5 vocabulary by lesson) is for revision BEFORE the assessment — close it during each section.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Assessment map (website) · 60 marks in total', title: 'Four skills, fifteen marks each', ltr: true, ar: 'خُطَّةُ التَّقْيِيمِ',
    cols: [{ label: 'Marks', w: 1.4 }, { label: 'What you do', w: 7.2 }, { label: 'Section', w: 3.73 }],
    rows: [
      { core: true, cells: ['15', 'Three recordings (heard twice): Mariam’s routine · at the doctor · a restaurant order — 5 questions each', 'A · Listening'] },
      { core: true, cells: ['15', 'Three texts: a restaurant menu · a health article · pharmacy instructions — 5 questions each', 'B · Reading'] },
      { core: true, cells: ['15', 'A five-field clinic form + an 80–100-word article: My food and my health', 'C · Writing'] },
      { core: true, cells: ['15', 'Restaurant role play (5) · doctor role play (5) · food-and-health conversation (5)', 'D · Speaking'] },
    ],
    notes: 'ASSESSMENT MAP (website “Four-skills profile”). Website: “Listening and reading update automatically after checking. Enter the agreed writing and speaking marks after those tasks have been reviewed.”',
  },
  lmcq(1, 'Listening · Mariam’s food and health routine', [
    q('What does Mariam eat for breakfast?', ['yoghurt, fruit and bread', 'eggs and cheese', 'soup and rice'], 'الزَّبَادِي وَالفَاكِهَةَ وَقِطْعَةً مِنَ الخُبْزِ'),
    q('What does she drink in the morning?', ['milk', 'orange juice', 'tea'], 'كُوبًا مِنَ الحَلِيبِ'),
    q('Why does she avoid fizzy drinks?', ['They contain a lot of sugar.', 'They are expensive.', 'She cannot find them.'], 'تَحْتَوِي عَلَى سُكَّرٍ كَثِيرٍ'),
    q('Which meal includes chicken and rice?', ['lunch', 'breakfast', 'dinner'], 'فِي الغَدَاءِ آكُلُ الدَّجَاجَ مَعَ الأَرُزِّ'),
    q('What personal target does she mention?', ['drink more water', 'eat more chocolate', 'stop eating fruit'], 'أَنْ أَزِيدَ كَمِّيَّةَ المَاءِ'),
  ], T1, 51),
  lmcq(2, 'Listening · At the doctor', [
    q('Where does the patient feel pain?', ['stomach', 'teeth', 'head'], 'أَلَمٌ شَدِيدٌ فِي مَعِدَتِي'),
    q('How long has the problem lasted?', ['for two days', 'since this morning', 'for a week'], 'مُنْذُ يَوْمَيْنِ'),
    q('Which additional symptom is mentioned?', ['fever', 'cough', 'toothache'], 'حُمَّى خَفِيفَةٌ'),
    q('What does the doctor advise the patient to avoid?', ['fatty food', 'sleep', 'water'], 'لَا تَأْكُلْ طَعَامًا دَسِمًا'),
    q('When should the patient return?', ['if the pain continues', 'tomorrow in every case', 'after one month'], 'إِذَا اسْتَمَرَّ الأَلَمُ'),
  ], T2, 52),
  lmcq(3, 'Listening · A restaurant order', [
    q('Which traditional dish does the customer order?', ['kabsa', 'mansaf', 'couscous'], 'أُرِيدُ طَبَقَ الكَبْسَةِ'),
    q('What does the dish contain?', ['rice, chicken and spices', 'bread, beans and eggs', 'fish, pasta and cheese'], 'الأَرُزِّ وَالدَّجَاجِ وَالتَّوَابِلِ'),
    q('Which side dish is requested?', ['salad', 'soup', 'chips'], 'سَلَطَةً صَغِيرَةً'),
    q('Which drink is selected?', ['lemon juice', 'mineral water', 'tea'], 'عَصِيرَ اللَّيْمُونِ'),
    q('What happens at the end?', ['The customer asks for the bill.', 'The customer changes the order.', 'The restaurant closes.'], 'الحِسَابُ، لَوْ سَمَحْتَ'),
  ], T3, 53),
  {
    type: 'formsTable', stage: 'wedo', min: 2, eyebrow: 'Reading · Part B · text 1 · a restaurant menu (website)', title: 'Al-Waha restaurant menu', ar: 'قَائِمَةُ مَطْعَمِ الوَاحَةِ',
    cols: [{ label: 'الطَّبَقُ', w: 9.0, size: 24 }, { label: 'السِّعْرُ', w: 3.33, size: 24 }],
    rows: [
      { cells: [{ ar: 'حَسَاءُ العَدَسِ مَعَ الخُبْزِ (نَبَاتِيٌّ)' }, { ar: '٨ دَنَانِيرَ' }] },
      { cells: [{ ar: 'الدَّجَاجُ مَعَ الأَرُزِّ' }, { ar: '١٨ دِينَارًا' }] },
      { cells: [{ ar: 'السَّمَكُ المَشْوِيُّ مَعَ البَطَاطِسِ وَالسَّلَطَةِ' }, { ar: '٢٢ دِينَارًا' }] },
      { cells: [{ ar: 'سَلَطَةُ الفَاكِهَةِ' }, { ar: '٧ دَنَانِيرَ' }] },
      { cells: [{ ar: 'شَايٌ · مَاءٌ مَعْدِنِيٌّ · عَصِيرُ بُرْتُقَالٍ' }, { ar: '٣ · ٤ · ٦' }] },
    ],
    notes: `READING TEXT 1 (website menu, reproduced as a table). No English support on assessment texts. Keep on screen while students answer (next slide).\n${MENU}`,
  },
  rmcq('The menu', 'Reading · text 1 · 5 marks (website)', [
    q('Which meal is vegetarian?', ['lentil soup with bread', 'chicken with rice', 'grilled fish'], 'حَسَاءُ العَدَسِ مَعَ الخُبْزِ (نَبَاتِيٌّ)'),
    q('Which item costs 18 dinars?', ['chicken and rice', 'grilled fish', 'fruit salad'], 'الدَّجَاجُ مَعَ الأَرُزِّ: ١٨'),
    q('What is served with the grilled fish?', ['potatoes and salad', 'bread and cheese', 'rice and yoghurt'], 'مَعَ البَطَاطِسِ وَالسَّلَطَةِ'),
    q('Which is the cheapest drink?', ['tea', 'mineral water', 'orange juice'], 'شَايٌ: ٣'),
    q('Which dessert contains fruit?', ['fruit salad', 'chocolate cake', 'ice cream only'], 'سَلَطَةُ الفَاكِهَةِ'),
  ], 54),
  { type: 'passage', stage: 'wedo', min: 2, eyebrow: 'Reading · text 2 · a health article (website)', title: 'Healthy habits for students', ar: 'عَادَاتٌ صِحِّيَّةٌ لِلطُّلَّابِ', text: ART, notes: 'READING TEXT 2 (website health article).' },
  rmcq('The health article', 'Reading · text 2 · 5 marks (website)', [
    q('What is the writer’s main message?', ['Health depends on balanced daily habits.', 'Only medicine keeps people healthy.', 'Exercise is unnecessary.'], 'تَعْتَمِدُ الصِّحَّةُ عَلَى عَادَاتٍ يَوْمِيَّةٍ مُتَوَازِنَةٍ'),
    q('How many portions of fruit and vegetables are recommended?', ['five', 'three', 'one'], 'خَمْسَ حِصَصٍ'),
    q('Why should sugary drinks be reduced?', ['They can harm the teeth and body.', 'They are always cold.', 'They are difficult to buy.'], 'قَدْ تَضُرُّ الأَسْنَانَ وَالجِسْمَ'),
    q('What should a student do before sleeping?', ['relax and avoid long phone use', 'eat a heavy meal', 'use a phone for hours'], 'اِسْتَرِحْ وَلَا تَسْتَخْدِمِ الهَاتِفَ'),
    q('Which connective introduces a result?', ['لِذَلِكَ', 'أَيْضًا', 'لِأَنَّ'], 'لِذَلِكَ، اِبْنِ عَادَاتٍ صَغِيرَةً'),
  ], 55),
  { type: 'passage', stage: 'wedo', min: 1, eyebrow: 'Reading · text 3 · a pharmacy notice (website)', title: 'Pharmacy instructions', ar: 'تَعْلِيمَاتُ الصَّيْدَلِيَّةِ', text: PHARM, notes: 'READING TEXT 3 (website pharmacy notice).' },
  rmcq('The pharmacy notice', 'Reading · text 3 · 5 marks (website)', [
    q('Who should read the notice?', ['customers collecting medicine', 'restaurant workers', 'bus passengers'], 'تَعْلِيمَاتُ الصَّيْدَلِيَّةِ'),
    q('How often is the medicine taken?', ['twice daily', 'once daily', 'four times daily'], 'مَرَّتَيْنِ فِي اليَوْمِ'),
    q('When is it taken?', ['after food', 'before food', 'only at night'], 'بَعْدَ الطَّعَامِ'),
    q('What should the patient do if an allergy appears?', ['stop and contact a doctor', 'take more medicine', 'ignore it'], 'تَوَقَّفْ … وَاتَّصِلْ بِالطَّبِيبِ'),
    q('Where should the medicine be kept?', ['in a cool dry place', 'in direct sunlight', 'next to food on the table'], 'فِي مَكَانٍ بَارِدٍ وَجَافٍّ'),
  ], 56),
  {
    type: 'formsTable', stage: 'youdo', min: 4, eyebrow: 'Writing · Task 1 · clinic form (website)', title: 'Complete the clinic form', ltr: true, ar: 'اِسْتِمَارَةُ العِيَادَةِ',
    cols: [{ label: 'Field', w: 4.2 }, { label: 'Arabic label', w: 3.4, size: 22 }, { label: 'Your answer in Arabic', w: 4.73 }],
    rows: [
      { core: true, cells: ['1 · Symptom', { ar: 'العَرَضُ' }, '______________'] },
      { core: true, cells: ['2 · Affected body part', { ar: 'جُزْءُ الجِسْمِ' }, '______________'] },
      { core: true, cells: ['3 · Duration', { ar: 'المُدَّةُ' }, '______________'] },
      { core: true, cells: ['4 · One food habit', { ar: 'عَادَةٌ غِذَائِيَّةٌ' }, '______________'] },
      { core: true, cells: ['5 · The advice you want', { ar: 'النَّصِيحَةُ المَطْلُوبَةُ' }, '______________'] },
    ],
    foot: 'Invented details only. Example: صُدَاعٌ · رَأْسِي · مُنْذُ يَوْمَيْنِ · أَشْرَبُ قَلِيلًا مِنَ المَاءِ · مَاذَا يَجِبُ أَنْ أَفْعَلَ؟',
    notes: 'WRITING TASK 1 (website): five fields in Arabic — symptom, affected body part, duration, one food habit and the advice wanted. Suggested marking: part of the 15 writing marks (e.g. 5 for the form, 10 for the article) or holistic with the article — agree the split with your department.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 12, eyebrow: 'Writing · Task 2 · 80–100 words (website)', title: 'My food and my health', ltr: true, ar: 'طَعَامِي وَصِحَّتِي',
    cols: [{ label: 'Include all five points', w: 7.0 }, { label: 'Website checklist', w: 5.33 }],
    rows: [
      { core: true, cells: ['1 · Your meals and favourite food.', 'Food and drink vocabulary accurate'] },
      { core: true, cells: ['2 · A justified opinion (because …).', 'li-annahu / li-annahā + three connectives'] },
      { core: true, cells: ['3 · At least two health habits.', 'yajibu an or min al-afḍal an'] },
      { core: true, cells: ['4 · One improvement target.', 'Agreement checked'] },
      { core: true, cells: ['5 · Advice to another student.', 'Body / health spelling checked'] },
    ],
    foot: 'Website: independent evidence — no translation software or AI. Plan → draft → check (verbs, gender, reasons, connectives, spelling).',
    notes: `WRITING TASK 2 (website): 80–100 words — meals and favourite food, a justified opinion, at least two health habits, one improvement target and advice to another student.
Suggested strands (as in F3 and F4): task completion · range · accuracy. The F5-L11 website model article (طَعَامِي وَصِحَّتِي) is the full-mark exemplar — show it ONLY after writing.`,
  },
  {
    type: 'formsTable', stage: 'youdo', min: 8, eyebrow: 'Speaking · Part D · 15 marks (website)', title: 'Two role plays and a conversation', ltr: true, ar: 'التَّحَدُّثُ',
    cols: [{ label: 'Card', w: 3.0 }, { label: 'What you do', w: 7.8 }, { label: 'Marks', w: 1.53 }],
    rows: [
      { core: true, cells: ['Role play 1 · restaurant', 'Greet the waiter, ask about a dish, order food and a drink, answer one clarification, ask for the bill.', '5'] },
      { core: true, cells: ['Role play 2 · doctor', 'Describe a symptom and body part, say how long, answer a question, respond to advice.', '5'] },
      { core: true, cells: ['Conversation', 'Your meals, a justified preference, healthy habits and one future target.', '5'] },
    ],
    foot: 'Website: use the cards as prompts, not scripts. Be ready for natural follow-up questions.',
    notes: `SPEAKING (website, 15 marks). Website follow-up questions: مَا طَعَامُكَ المُفَضَّلُ؟ وَلِمَاذَا؟ · مَاذَا تَأْكُلُ وَتَشْرَبُ فِي الفُطُورِ؟ · كَيْفَ تُحَافِظُ عَلَى صِحَّتِكَ؟ · مَتَى ذَهَبْتَ إِلَى الطَّبِيبِ آخِرَ مَرَّةٍ؟ · مَا العَادَةُ الَّتِي تُرِيدُ أَنْ تُحَسِّنَهَا؟
To a girl: طَعَامُكِ، تَأْكُلِينَ وَتَشْرَبِينَ، تُحَافِظِينَ، ذَهَبْتِ، تُرِيدِينَ.
ORGANISATION: one-to-one with the teacher while others finish writing, or trusted pairs with the teacher listening (teacher plays the waiter / doctor).`,
  },
  {
    type: 'formsTable', stage: 'feedback', min: 3, eyebrow: 'Results · your F5 four-skills profile (website)', title: 'My F5 score profile', ltr: true, ar: 'مِلَفُّ المَهَارَاتِ',
    cols: [{ label: 'Teacher guide (total /60)', w: 6.93 }, { label: 'My score', w: 2.0 }, { label: 'Section', w: 3.4 }],
    rows: [
      { core: true, cells: ['54–60 Excellent — confident food and health communication', '/15', 'A · Listening'] },
      { core: true, cells: ['42–53 Good — secure, with a few focused gaps', '/15', 'B · Reading'] },
      { core: true, cells: ['30–41 Satisfactory — core communication in place', '/15', 'C · Writing'] },
      { core: true, cells: ['Below 30 — revisit selected F5 lessons with guided practice', '/15', 'D · Speaking'] },
    ],
    foot: 'Website reflection: “Name evidence, not only a feeling.” My strongest evidence was … · My next precise action is …',
    notes: `PROFILE (website “Reflection and next-step plan”). Website: “Each skill remains visible separately.” The bands are a teacher guide in line with the F3 and F4 assessments (the F5 page gives the four skill totals).
Website bridge: “F5 has secured food, meals, body parts and simple health interactions. F6 will use the same communication habits with places, transport, signs and directions.”`,
  },
  D.selfCheckSlide([
    { route: 'core', text: 'I can name foods, drinks, meals and body parts.' },
    { route: 'core', text: 'I can say what hurts and since when.' },
    { route: 'develop', text: 'I can order politely and ask about prices.' },
    { route: 'develop', text: 'I can give advice with يَجِبُ أَنْ.' },
    { route: 'stretch', text: 'I can write 80–100 connected words with reasons.' },
  ]),
  D.prepSlide({
    ...NEXT,
    words: [['مَدِينَةٌ', 'a city', 'pl. مُدُنٌ'], ['شَارِعٌ', 'a street', 'pl. شَوَارِعُ'], ['حَيٌّ', 'a neighbourhood', 'pl. أَحْيَاءٌ'], ['مَرْكَزُ المَدِينَةِ', 'the city centre', '—'], ['قَرْيَةٌ', 'a village', 'pl. قُرًى']],
    questionEn: 'Do you live in a city, a town or a village? Write one sentence.',
    questionAr: 'أَسْكُنُ فِي …',
    homework: {
      core: 'Redo the website F5-L12 section with your lowest score; learn the five town words.',
      develop: 'Improve one sentence of your assessed article, then learn the five town words.',
      stretch: 'Write three sentences about your area with the five town words.',
    },
    wordsSource: 'F6 begins with places in town (website F6-L01 “Places in Town: Buildings and Public Spaces”).',
  }),
  D.closeSlide({ ...NEXT, remember: 'F5 complete — well done! Carry the same habits into F6: reasons, agreement, complete structures.' }),
];

module.exports = { meta, slides };
