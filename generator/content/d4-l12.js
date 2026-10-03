'use strict';
/*
 * D4-L12 · Review and Unit Assessment: Environment, Weather and Technology (60 marks: listening 20 · reading 10 · writing 20 · speaking 10)
 * Website: Pathways › Development › D4 › Lesson 12. The complete D4 language vault, a twelve-question cumulative grammar laboratory,
 * Part A listening (three recordings: climate and water · two views on technology · smart-city report — 20 questions × 1 mark),
 * Part B reading (an environment–technology article: 10 questions), Part C writing (five-field environmental action profile 5 +
 * 130–140-word article 15: task / range / accuracy), Part D speaking (environmental discussion + topic conversation 10) and the
 * D4 reflection / D5 target. All scripts, texts, questions, tasks and marks are the website’s.
 */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D4')({
  n: 12, fileTitle: 'Review_and_Unit_Assessment_Environment_Weather_Technology', chip: 'D4 Assessment',
  title: 'Review and Unit Assessment: Environment, Weather and Technology', arabic: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ',
  focus: 'Show what you can understand and produce about climate, weather, environmental problems, resources and technology — then choose one precise next step for D5.',
  icon: 'FaClipboardCheck', iconSet: 'fa6', level: 'Development · end of unit D4',
});
const NEXT = { nextCode: 'D5-L01', nextTitle: 'Hobbies and Free Time — Vocabulary and Present Habits', nextAr: 'الهِوَايَاتُ وَوَقْتُ الفَرَاغِ' };
const SITE = 'Pathways › Development › D4 Environment, Weather and Technology › D4-L12';
const T1 = 'يَسُودُ المَنَاخُ الصَّحْرَاوِيُّ الجَافُّ فِي دَاخِلِ بَعْضِ الدُّوَلِ العَرَبِيَّةِ، وَيُشَارُ إِلَى أَنَّ فَتَرَاتِ الجَفَافِ أَصْبَحَتْ أَطْوَلَ. وَنَتِيجَةً لِذٰلِكَ، يَزْدَادُ الضَّغْطُ عَلَى المِيَاهِ الجَوْفِيَّةِ. يَقْتَرِحُ الخَبِيرُ إِعَادَةَ اسْتِخْدَامِ المِيَاهِ وَتَرْشِيدَ الاسْتِهْلَاكِ.';
const T2 = 'سَلْمَى: أُؤَيِّدُ الطَّاقَةَ الشَّمْسِيَّةَ وَالشَّبَكَاتِ الذَّكِيَّةَ لِأَنَّهَا تُقَلِّلُ الهَدْرَ. عُمَرُ: أُوَافِقُ عَلَى تَقْلِيلِ الهَدْرِ، وَلٰكِنِّي أَخْشَى ارْتِفَاعَ التَّكْلِفَةِ وَجَمْعَ البَيَانَاتِ الشَّخْصِيَّةِ. سَلْمَى: إِذَنْ نَحْنُ مُتَّفِقَانِ عَلَى الهَدَفِ، وَلٰكِنَّنَا نَخْتَلِفُ فِي طَرِيقَةِ التَّطْبِيقِ.';
const T3 = 'تُمَثِّلُ الطَّاقَةُ المُتَجَدِّدَةُ خَمْسًا وَثَلَاثِينَ فِي المِئَةِ مِنْ إِنْتَاجِ الكَهْرَبَاءِ فِي المَدِينَةِ. وَكَانَ مِنَ المُقَرَّرِ اكْتِمَالُ شَبَكَةِ النَّقْلِ فِي عَامِ ٢٠٣٠، وَلٰكِنَّ المَوْعِدَ الجَدِيدَ هُوَ ٢٠٣٢. وَيُؤَكِّدُ الخَبِيرُ أَنَّ التِّقْنِيَّةَ وَحْدَهَا لَا تَكْفِي؛ بَلْ يَجِبُ أَنْ يَتَغَيَّرَ سُلُوكُ المُسْتَخْدِمِينَ أَيْضًا.';
const READ = 'يُشَارُ إِلَى أَنَّ تَغَيُّرَ المَنَاخِ يَزِيدُ شُحَّ المِيَاهِ فِي مَنَاطِقَ عَرَبِيَّةٍ عِدَّةٍ. فَبِسَبَبِ طُولِ فَتَرَاتِ الجَفَافِ، يَنْخَفِضُ المَخْزُونُ الجَوْفِيُّ وَتَتَضَرَّرُ الزِّرَاعَةُ. وَفِي المُدُنِ، يُلَوَّثُ الهَوَاءُ بِعَوَادِمِ السَّيَّارَاتِ. لِذٰلِكَ تَسْتَثْمِرُ بَعْضُ البَلَدِيَّاتِ فِي النَّقْلِ الكَهْرَبَائِيِّ وَالأَنْظِمَةِ الذَّكِيَّةِ. وَفْقًا لِبَيَانَاتِ إِحْدَى البَلَدِيَّاتِ، انْخَفَضَ اسْتِهْلَاكُ الكَهْرَبَاءِ فِي المَبَانِي العَامَّةِ بِنِسْبَةِ ١٨٪ بَعْدَ تَرْكِيبِ أَنْظِمَةٍ تُطْفِئُ الإِضَاءَةَ فِي الغُرَفِ الفَارِغَةِ. مَعَ ذٰلِكَ، هٰذِهِ الحُلُولُ مُكَلِّفَةٌ وَقَدْ تَجْمَعُ بَيَانَاتٍ شَخْصِيَّةً. فِي رَأْيِي، التِّقْنِيَّةُ جُزْءٌ مُهِمٌّ مِنَ الحَلِّ، شَرِيطَةَ أَنْ تُحْمَى الخُصُوصِيَّةُ وَأَنْ تَصْحَبَهَا سِيَاسَاتٌ وَسُلُوكٌ مَسْؤُولٌ.';

const lmcq = (label, title, qs, script, seed, marks) => ({
  type: 'mcq', stage: 'ido', min: 4, eyebrow: `Listening · ${label} · 1 mark each (website)`, title, ar: 'الاِسْتِمَاعُ',
  seed, questions: qs,
  answerSlide: { min: 0, eyebrow: `Listening · ${label} · answers`, title: `${title}: answers`, ar: 'الإِجَابَاتُ' },
  notes: `LISTENING ${label.toUpperCase()} (website Part A, 20 marks: 20 questions × 1). Read the recording twice at natural pace (website: “each of the three recordings may be played twice”); students answer after the second reading.\nSCRIPT: ${script}\nPrivate chat: ${marks} letters.`,
  answerNotes: `Mark /${marks}. Website: reveal the script only after the attempt; ask which final or corrected detail caught people out.`,
});
const rmcq = (part, qs, seed) => ({
  type: 'mcq', stage: 'wedo', min: 5, eyebrow: `Reading · questions ${part} · 1 mark each (website)`, title: `Reading questions ${part}`, ar: 'أَسْئِلَةُ القِرَاءَةِ', seed, questions: qs,
  answerSlide: { min: 0, eyebrow: 'Reading · answers · show AFTER the section', title: `Questions ${part}: answers`, ar: 'الإِجَابَاتُ' },
  notes: 'READING (website Part B: “locate · infer · prove”). Keep the text on the previous slide available (flick back or share it in the chat).',
  answerNotes: 'Mark /5. Ask one student to read the evidence phrase aloud (by invitation).',
});

const slides = [
  D.titleSlide({
    n: 12, siteRef: SITE,
    plan: '0–1 Welcome · 1–2 Map · 2–6 Grammar laboratory (not marked) · 6–7 Assessment map · 7–21 Listening (20) · 21–29 Reading (10) · 29–46 Writing (20) · 46–56 Speaking (10, one-to-one or trusted pairs) · 56–60 Profile and D5 target.',
    source: 'The website D4-L12 is a four-skill, 60-mark unit assessment: the complete D4 language vault (all eleven lessons), a twelve-question cumulative grammar laboratory, Part A listening (three recordings — climate and water · two views on technology · smart-city report: 20 questions × 1 = 20), Part B reading (an environment–technology article: 10), Part C writing (five-field environmental action profile 5 + 130–140-word article 15, marked task / range / accuracy) and Part D speaking (environmental discussion + topic conversation: 10), then an evidence-based D5 target.',
    support: `• Everyone sits the same 60 marks. Access arrangements: extra time, questions read aloud in English, one section on screen at a time; speaking one-to-one or in trusted pairs (it can move to the next lesson).
• If time is short: listening + reading in class; writing and speaking next lesson.
• NOTE: the reading article recycles the D4-L08 council data (18%) — students who revised closely have an advantage; that is fine (it rewards revision), but mark the WRITING strictly for originality.
• Website: “Complete each section independently, then record a precise D5 target.”`,
  }),
  D.welcomeSlide(),
  {
    type: 'journey', stage: 'welcome', eyebrow: 'Today’s lesson map', title: 'Our assessment, step by step', ar: 'خَرِيطَةُ الدَّرْسِ',
    steps: [
      { stage: 'donow', min: 4, text: 'Grammar laboratory (not marked).', ar: 'تَهْيِئَةٌ' },
      { stage: 'teach', min: 2, text: 'The D4 chain and the 60-mark map.', ar: 'خُطَّةُ التَّقْيِيمِ' },
      { stage: 'ido', min: 14, text: 'Listening: three recordings, 20 marks.', ar: 'الاِسْتِمَاعُ' },
      { stage: 'wedo', min: 8, text: 'Reading: 10 marks.', ar: 'القِرَاءَةُ' },
      { stage: 'youdo', min: 27, text: 'Writing 20 + speaking 10.', ar: 'الكِتَابَةُ وَالتَّحَدُّثُ' },
      { stage: 'feedback', min: 3, text: 'My profile and one D5 target.', ar: 'الهَدَفُ' },
      { stage: 'prep', min: 2, text: 'Get ready for D5: hobbies.', ar: 'اِسْتَعِدَّ' },
    ],
    support: 'Start each section with the questions you find easiest. Leave a blank and come back. The grammar laboratory does not count.',
    notes: 'LESSON MAP. Website sections: 01 complete D4 language vault · 02 cumulative grammar laboratory · 03 Part A listening · 04 Part B reading · 05 Part C writing · 06 Part D speaking · 07 reflection and D5 readiness.',
  },
  D.doNow({
    questions: [
      q('What does مَعَايِيرُ التَّصْحِيحِ mean?', ['marking criteria', 'reading comprehension', 'an assessment'], 'Prepared at home (D4-L11).'),
      q('Choose the accurate climate description.', ['يَتَّسِمُ السَّاحِلُ بِمَنَاخٍ مُعْتَدِلٍ.', 'يَتَّسِمُ السَّاحِلُ إِلَى مَنَاخٍ مُعْتَدِلٍ.', 'يَتَّسِمُ السَّاحِلُ عَلَى مَنَاخٍ مُعْتَدِلٍ.'], 'Website grammar laboratory 1.'),
      q('Which connector must be followed by إِلَى?', ['يُؤَدِّي', 'بِسَبَبِ', 'مِمَّا'], 'Website grammar laboratory 4.'),
      q('Which five-verb form is accurate after أَنْ?', ['أَنْ يُعِيدُوا التَّدْوِيرَ', 'أَنْ يُعِيدُونَ التَّدْوِيرَ', 'أَنْ يُعِيدُ التَّدْوِيرَ'], 'Website grammar laboratory 6: the nūn drops.'),
      q('Which conclusion is balanced and conditional?', ['مُفِيدَةٌ إِلَى حَدٍّ مَا، شَرِيطَةَ أَنْ تُطَبَّقَ بِمَسْؤُولِيَّةٍ.', 'مُفِيدَةٌ دَائِمًا دُونَ شُرُوطٍ.', 'غَيْرُ مُفِيدَةٍ لِأَنَّهَا تِقْنِيَّةٌ.'], 'Website grammar laboratory 12.'),
    ],
    keyIdea: { text: 'This warm-up does NOT count. Use it to find ONE check for your writing today.', ar: 'المُطَابَقَةُ · حَرْفُ الجَرِّ · أَنْ / أَنَّ · الحُكْمُ المُتَوَازِنُ' },
    retrieves: 'Question 1 tests one of the words prepared at home at the end of D4-L11. Questions 2–5 are from the website twelve-question cumulative grammar laboratory (used diagnostically; items that differ only in vowel endings are reviewed on the next slide instead).',
  }),
  {
    type: 'ruleCards', stage: 'teach', min: 1, eyebrow: 'Review · the D4 grammar system (website grammar laboratory)', title: 'The D4 chain before you write', ar: 'مُرَاجَعَةُ القَوَاعِدِ',
    cards: [
      { chip: 'CLIMATE + AGREEMENT', color: '1D5FBF', head: 'يَسُودُ · تَهُبُّ الرِّيَاحُ', big: 'تَهُبُّ الرِّيَاحُ وَتَسْقُطُ الثُّلُوجُ.', en: 'The winds blow and the snow falls.', clue: 'Non-human plurals: tu-.' },
      { chip: 'PROBLEM + RESULT', color: 'C0386B', head: 'يُلَوَّثُ · يُؤَدِّي إِلَى', big: 'يُلَوَّثُ الهَوَاءُ بِعَوَادِمِ السَّيَّارَاتِ.', en: 'The air is polluted by car exhaust.', clue: 'True passive.' },
      { chip: 'SOLUTION + JUDGEMENT', color: '6B4C9A', head: 'أَنْ / لَمْ · شَرِيطَةَ أَنْ', big: 'يَنْبَغِي أَنْ نُقَلِّلَ النُّفَايَاتِ.', en: 'We should reduce waste.', clue: 'After an: -a; after lam: sukūn.' },
    ],
    error: { text: 'Website grammar laboratory: impersonal reporting uses anna, then -a.', pairs: [['يُشَارُ إِلَى أَنَّ المَنَاخَ يَتَغَيَّرُ.', 'يُشَارُ إِلَى أَنْ المَنَاخُ يَتَغَيَّرُ.']] },
    notes: `REVIEW (website “Cumulative grammar laboratory”, correct answers): يَتَّسِمُ السَّاحِلُ بِمَنَاخٍ مُعْتَدِلٍ · تَهُبُّ الرِّيَاحُ وَتَسْقُطُ الثُّلُوجُ · يُلَوَّثُ الهَوَاءُ بِعَوَادِمِ السَّيَّارَاتِ · يُؤَدِّي إِلَى · يَنْبَغِي أَنْ نُقَلِّلَ النُّفَايَاتِ · أَنْ يُعِيدُوا التَّدْوِيرَ · إِذَا لَمْ نُرَشِّدِ المِيَاهَ، فَسَتَزْدَادُ الأَزْمَةُ · يَنْضَبُ النِّفْطُ وَتَشِحُّ المِيَاهُ · يُشَارُ إِلَى أَنَّ المَنَاخَ يَتَغَيَّرُ · يُتَوَقَّعُ أَنْ يَزْدَادَ الطَّلَبُ · عَلَى الرَّغْمِ مِنْ أَنَّ المَشْرُوعَ مُكَلِّفٌ، فَإِنَّهُ يُوَفِّرُ الطَّاقَةَ لَاحِقًا · مُفِيدَةٌ إِلَى حَدٍّ مَا، شَرِيطَةَ أَنْ تُطَبَّقَ بِمَسْؤُولِيَّةٍ.
(The website item 7 prints نُرَشِّدْ المِيَاهَ; before the article the sukūn becomes kasra: نُرَشِّدِ المِيَاهَ.)
The website language vault (all D4 vocabulary by lesson) is for revision BEFORE the assessment — close it during each section.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Assessment map (website) · 60 marks in total', title: 'Four skills, sixty marks', ltr: true, ar: 'خُطَّةُ التَّقْيِيمِ',
    cols: [{ label: 'Marks', w: 1.4 }, { label: 'What you do', w: 7.2 }, { label: 'Section', w: 3.73 }],
    rows: [
      { core: true, cells: ['20', 'Three recordings (each heard twice): climate and water · two views on technology · a smart-city report — 20 questions, 1 mark each', 'A · Listening'] },
      { core: true, cells: ['10', 'An environment–technology article: locate, infer and prove — 10 questions', 'B · Reading'] },
      { core: true, cells: ['20', 'A five-field environmental action profile (5) + a 130–140-word article (15)', 'C · Writing'] },
      { core: true, cells: ['10', 'An environmental discussion + a topic conversation', 'D · Speaking'] },
    ],
    notes: 'ASSESSMENT MAP (website: “Four skills · one evidence profile”).',
  },
  lmcq('Text 1 · questions 1–4', 'Climate and water (1)', [
    q('Which region has the driest climate?', ['the interior', 'the northern coast', 'the mountain summit'], 'فِي دَاخِلِ بَعْضِ الدُّوَلِ العَرَبِيَّةِ'),
    q('What has become longer?', ['drought periods', 'live streams', 'school terms'], 'فَتَرَاتِ الجَفَافِ أَصْبَحَتْ أَطْوَلَ'),
    q('What consequence is named?', ['greater pressure on groundwater', 'more snowfall everywhere', 'lower demand for water'], 'يَزْدَادُ الضَّغْطُ عَلَى المِيَاهِ الجَوْفِيَّةِ'),
    q('Which solution is proposed?', ['water reuse and conservation', 'greater waste', 'more fossil-fuel use'], 'إِعَادَةَ اسْتِخْدَامِ المِيَاهِ وَتَرْشِيدَ الاسْتِهْلَاكِ'),
  ], T1, 41, 4),
  lmcq('Text 1 · questions 5–8', 'Climate and water (2)', [
    q('Which formal phrase introduces reported information?', ['يُشَارُ إِلَى أَنَّ', 'لِكَيْ', 'مِنْ نَاحِيَةٍ أُخْرَى'], 'وَيُشَارُ إِلَى أَنَّ …'),
    q('Which two responses are recommended?', ['water reuse and reduced consumption', 'more groundwater extraction and more waste', 'solar panels and password sharing'], 'إِعَادَةَ اسْتِخْدَامِ … وَتَرْشِيدَ الاسْتِهْلَاكِ'),
    q('What is the overall topic?', ['climate-related water pressure', 'social-media fashion', 'a sports timetable'], 'dry climate → drought → groundwater'),
    q('Which idea is NOT mentioned?', ['increasing fossil-fuel use', 'groundwater pressure', 'longer drought'], 'No fossil fuels in the text.'),
  ], T1, 42, 4),
  lmcq('Text 2 · 6 questions', 'Two views on technology', [
    q('What does Salma support?', ['solar energy and smart grids', 'only fossil fuels', 'removing public transport'], 'أُؤَيِّدُ الطَّاقَةَ الشَّمْسِيَّةَ وَالشَّبَكَاتِ الذَّكِيَّةَ'),
    q('What is Omar’s main reservation?', ['high cost and privacy risk', 'there is no technology', 'the weather is cold'], 'ارْتِفَاعَ التَّكْلِفَةِ وَجَمْعَ البَيَانَاتِ الشَّخْصِيَّةِ'),
    q('What do both speakers support?', ['reducing waste', 'increasing consumption', 'sharing passwords'], 'أُوَافِقُ عَلَى تَقْلِيلِ الهَدْرِ'),
    q('Where do the speakers disagree?', ['how the technology should be implemented', 'whether waste should be reduced', 'whether the environment exists'], 'نَخْتَلِفُ فِي طَرِيقَةِ التَّطْبِيقِ'),
    q('Why does Salma support smart grids?', ['they reduce waste', 'they collect more private data', 'they replace all human decisions'], 'لِأَنَّهَا تُقَلِّلُ الهَدْرَ'),
    q('Which sentence best summarises the exchange?', ['same goal, different method and safeguards', 'they discuss weather only', 'they disagree about every point'], 'مُتَّفِقَانِ عَلَى الهَدَفِ … نَخْتَلِفُ فِي طَرِيقَةِ التَّطْبِيقِ'),
  ], T2, 43, 6),
  lmcq('Text 3 · 6 questions', 'Smart-city report', [
    q('What percentage of electricity is renewable?', ['35%', '53%', '15%'], 'خَمْسًا وَثَلَاثِينَ فِي المِئَةِ'),
    q('What changed from the original plan?', ['completion moved from 2030 to 2032', 'the city changed country', 'the percentage became zero'], 'وَلٰكِنَّ المَوْعِدَ الجَدِيدَ هُوَ ٢٠٣٢'),
    q('What is the expert’s final judgement?', ['technology + responsible behaviour', 'no environmental action is useful', 'technology alone solves everything'], 'التِّقْنِيَّةَ وَحْدَهَا لَا تَكْفِي'),
    q('What does 35% measure?', ['renewable share of electricity', 'the fall in water demand', 'the number of buses'], 'مِنْ إِنْتَاجِ الكَهْرَبَاءِ'),
    q('What was the original completion year?', ['2030', '2032', '2025'], 'كَانَ مِنَ المُقَرَّرِ … ٢٠٣٠'),
    q('Which verb introduces the expert’s conclusion?', ['يُؤَكِّدُ', 'يَتَفَاعَلُ مَعَ', 'يُعَلِّقُ عَلَى'], 'وَيُؤَكِّدُ الخَبِيرُ أَنَّ …'),
  ], T3, 44, 6),
  { type: 'passage', stage: 'wedo', min: 3, eyebrow: 'Reading · Part B · 10 marks (website)', title: 'Technology and the environment', ar: 'التِّقْنِيَّةُ وَالبِيئَةُ', text: READ, notes: 'READING TEXT (website Part B). No English support on assessment texts. Website strategy: “Locate · infer · prove”.' },
  rmcq('1–5', [
    q('What is the article’s central argument?', ['technology helps but cannot replace policy and behaviour', 'technology has no environmental use', 'weather vocabulary is the only issue'], 'جُزْءٌ مُهِمٌّ مِنَ الحَلِّ، شَرِيطَةَ أَنْ …'),
    q('Which problem is linked to longer drought?', ['water scarcity', 'clothing prices', 'cyberbullying'], 'شُحَّ المِيَاهِ … طُولِ فَتَرَاتِ الجَفَافِ'),
    q('Which passive foregrounds an environmental result?', ['يُلَوَّثُ الهَوَاءُ', 'يَسْتَخْدِمُ النَّاسُ', 'تُسَاعِدُ الشَّبَكَةُ'], 'The air is the affected subject.'),
    q('Which datum is used as evidence?', ['electricity use fell 18% in public buildings', 'the writer likes green buildings', 'the city has a long name'], 'بِنِسْبَةِ ١٨٪'),
    q('In “لِأَنَّهَا تُقَلِّلُ الهَدْرَ” about systems in buildings, “-hā” refers to …', ['الأَنْظِمَةُ', 'المَبَانِي', 'الهَدْرُ'], 'The systems reduce waste.'),
  ], 45),
  rmcq('6–10', [
    q('Which phrase attributes information to a source?', ['وَفْقًا لِبَيَانَاتِ البَلَدِيَّةِ', 'مِنْ نَاحِيَةٍ أُخْرَى', 'عَلَى السَّاحِلِ'], 'according to …'),
    q('What limitation of smart systems is acknowledged?', ['cost and privacy concerns', 'they cannot measure anything', 'they always increase waste'], 'مُكَلِّفَةٌ وَقَدْ تَجْمَعُ بَيَانَاتٍ شَخْصِيَّةً'),
    q('Which connector introduces the counterargument?', ['مَعَ ذٰلِكَ', 'عَلَاوَةً عَلَى ذٰلِكَ', 'نَتِيجَةً لِذٰلِكَ'], 'nevertheless'),
    q('Why does the writer mention electric transport?', ['a practical way to reduce emissions', 'a cause of all water scarcity', 'an example of social media'], 'تَسْتَثْمِرُ … فِي النَّقْلِ الكَهْرَبَائِيِّ'),
    q('What tone best describes the article?', ['analytical and cautiously optimistic', 'entirely pessimistic without evidence', 'comic and unrelated'], 'evidence + condition'),
  ], 46),
  {
    type: 'formsTable', stage: 'youdo', min: 5, eyebrow: 'Writing · Question 1 · environmental action profile · 5 marks (website)', title: 'Complete the environmental action profile', ltr: true, ar: 'مِلَفُّ العَمَلِ البِيئِيِّ',
    cols: [{ label: 'Field', w: 3.6 }, { label: 'Arabic label', w: 4.0, size: 22 }, { label: 'Your answer in Arabic', w: 4.73 }],
    rows: [
      { core: true, cells: ['1 · The environmental problem', { ar: 'المُشْكِلَةُ البِيئِيَّةُ' }, '______________'] },
      { core: true, cells: ['2 · Two causes', { ar: 'سَبَبَانِ' }, '______________'] },
      { core: true, cells: ['3 · Evidence or a statistic', { ar: 'دَلِيلٌ أَوْ إِحْصَائِيَّةٌ' }, '______________'] },
      { core: true, cells: ['4 · A practical solution', { ar: 'حَلٌّ عَمَلِيٌّ' }, '______________'] },
      { core: true, cells: ['5 · An expected result', { ar: 'نَتِيجَةٌ مُتَوَقَّعَةٌ' }, '______________'] },
    ],
    foot: 'Example: تَلَوُّثُ الهَوَاءِ · عَوَادِمُ السَّيَّارَاتِ وَالمَصَانِعُ · ارْتَفَعَ التَّلَوُّثُ بِنِسْبَةِ ١٠٪ · تَوْسِيعُ النَّقْلِ العَامِّ · هَوَاءٌ أَنْظَفُ',
    notes: 'WRITING QUESTION 1 (website, 5 marks): one mark per field completed accurately in Arabic (a phrase is enough; spelling and agreement must be correct for the mark).',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 13, eyebrow: 'Writing · Question 2 · 130–140 words · 15 marks (website)', title: 'Environment and technology article', ltr: true, ar: 'مَقَالٌ عَنِ البِيئَةِ وَالتِّقْنِيَّةِ',
    cols: [{ label: 'Include all five points', w: 6.6 }, { label: 'Marked for (website)', w: 5.73 }],
    rows: [
      { core: true, cells: ['1 · An environmental issue', 'Task /5 — all points developed'] },
      { core: true, cells: ['2 · Its causes and effects', 'Range /5 — varied grammar and vocabulary'] },
      { core: true, cells: ['3 · A practical or technological solution', 'Accuracy /5 — agreement, patterns, spelling'] },
      { core: true, cells: ['4 · Evidence (an example or a statistic)', 'وَفْقًا لِـ · بِنِسْبَةِ · يُشَارُ إِلَى أَنَّ'] },
      { core: true, cells: ['5 · One limitation', 'عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ · شَرِيطَةَ أَنْ'] },
    ],
    foot: 'Independent evidence: no translation software or AI. Build the D4 chain (D4-L11) in four paragraphs (D4-L09), then check -a after أَنْ, لِكَيْ and أَنَّ.',
    notes: 'WRITING QUESTION 2 (website, 15 marks: Task 5 · Range 5 · Accuracy 5): 130–140 words explaining an environmental issue, causes and effects, a practical or technological solution, evidence and one limitation. The D4-L11 website model is a full-mark exemplar — show it ONLY after writing.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 8, eyebrow: 'Speaking · Part D · 10 marks (website)', title: 'Environmental discussion and topic conversation', ltr: true, ar: 'التَّحَدُّثُ',
    cols: [{ label: 'Cue (website)', w: 7.6 }, { label: 'Useful language', w: 4.73 }],
    rows: [
      { core: true, cells: ['1 · Identify one environmental or technological issue.', 'min ahammi al-mushkilāti …'] },
      { core: true, cells: ['2 · Explain its causes and consequences.', 'bi-sababi … mimmā yuʾaddī ilā …'] },
      { core: true, cells: ['3 · Propose and evaluate one solution.', 'yajibu ʿalā … an … li-kay …'] },
      { core: true, cells: ['4 · Use one precise example or statistic.', 'wafqan li- … bi-nisbati …'] },
      { core: true, cells: ['5 · Respond to a follow-up question and justify your view.', 'ilā ḥaddin mā · sharīṭata an …'] },
    ],
    foot: 'Website: prepare concise cues, not a script. Self-correct if you slip (لِأُصَحِّحْ ذٰلِكَ).',
    notes: `SPEAKING (website, 10 marks). Teacher questions (D4-L11 prompts): مَا أَهَمُّ مُشْكِلَةٍ بِيئِيَّةٍ فِي رَأْيِكَ؟ · مَا أَسْبَابُهَا وَنَتَائِجُهَا؟ · مَا الحَلُّ الَّذِي تَقْتَرِحُهُ؟ · هَلِ التِّقْنِيَّةُ جُزْءٌ مِنَ الحَلِّ؟ · هَلْ هُنَاكَ حُدُودٌ لِهٰذَا الحَلِّ؟
To a girl: رَأْيِكِ · تَقْتَرِحِينَهُ.
Suggested marking: communication and development 4 · range 3 · accuracy and pronunciation 3. ORGANISATION: one-to-one while others finish writing, or trusted pairs with the teacher as interviewer.`,
  },
  {
    type: 'formsTable', stage: 'feedback', min: 3, eyebrow: 'Results · your D4 four-skills profile (website)', title: 'My D4 score profile', ltr: true, ar: 'مِلَفُّ المَهَارَاتِ',
    cols: [{ label: 'Teacher guide (total /60)', w: 6.93 }, { label: 'My score', w: 2.0 }, { label: 'Section', w: 3.4 }],
    rows: [
      { core: true, cells: ['54–60 Excellent — confident environmental discussion', '/20', 'A · Listening'] },
      { core: true, cells: ['42–53 Good — secure, with a few focused gaps', '/10', 'B · Reading'] },
      { core: true, cells: ['30–41 Satisfactory — core communication in place', '/20', 'C · Writing'] },
      { core: true, cells: ['Below 30 — revisit selected D4 lessons with guided practice', '/10', 'D · Speaking'] },
    ],
    foot: 'Website reflection: My strongest D4 evidence was … · My precise next action is …',
    notes: 'PROFILE (website “D4 reflection and D5 readiness”: “Record one secure language feature and one precise next action.”). The bands are a teacher guide in line with the D1–D3 assessments.',
  },
  D.selfCheckSlide([
    { route: 'core', text: 'I can describe the climate and weather of a place.' },
    { route: 'core', text: 'I can name an environmental problem and its cause.' },
    { route: 'develop', text: 'I can propose a solution with يَجِبُ عَلَى … أَنْ … لِكَيْ.' },
    { route: 'develop', text: 'I can read and report statistics and sources.' },
    { route: 'stretch', text: 'I can write a balanced, qualified article about technology.' },
  ]),
  D.prepSlide({
    ...NEXT,
    words: [['هِوَايَةٌ', 'a hobby', 'pl. هِوَايَاتٌ'], ['وَقْتُ الفَرَاغِ', 'free time', '—'], ['يُمَارِسُ الرِّيَاضَةَ', 'he practises sport', 'تُمَارِسُ she'], ['يَعْزِفُ عَلَى', 'he plays (an instrument)', 'تَعْزِفُ she'], ['مَرَّتَيْنِ فِي الأُسْبُوعِ', 'twice a week', '—']],
    questionEn: 'What do you do in your free time, and how often?',
    questionAr: 'فِي وَقْتِ فَرَاغِي … مَرَّتَيْنِ فِي الأُسْبُوعِ.',
    homework: {
      core: 'Redo the website D4-L12 section with your lowest score; learn the five hobby words.',
      develop: 'Improve one paragraph of your assessed article, then learn the five hobby words.',
      stretch: 'Write three sentences about your hobbies, with a frequency and a reason, using the five words.',
    },
    wordsSource: 'D5 begins with hobbies and free time (website D5-L01 “Hobbies and Free Time — Vocabulary and Present Habits”).',
  }),
  D.closeSlide({ ...NEXT, remember: 'D4 complete — well done! Carry the D4 chain into D5: describe, explain, give evidence, judge with a condition.' }),
];

module.exports = { meta, slides };
