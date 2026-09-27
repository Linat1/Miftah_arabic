'use strict';
/*
 * F2-L09 · Listening to Personal Introductions
 * Website: Pathways › Foundation › F2 › Lesson 9. Six fact families, signal phrases, the four-step listening routine,
 * task-instruction words, the clue/distractor lab, Task A (Karim · multiple choice), Task B (Leila · note completion),
 * Task C (three speakers · matching), third-person retell, twelve-question listening checkpoint.
 */
const F = require('./f2-common');
const game = require('../site-data/pathway-visual-games.json')['f2-l09'];
const { q, bank, banks } = F;

const meta = F.meta({
  n: 9, fileTitle: 'Listening_Introductions', chip: 'Listening',
  title: 'Listening to Personal Introductions', arabic: 'الاِسْتِمَاعُ إِلَى التَّعْرِيفَاتِ الشَّخْصِيَّةِ',
  focus: 'Train your ear to catch the facts that matter — name, age, country, city, language and interests — through multiple-choice, note-completion and matching tasks, then retell what you heard in the third person.',
  icon: 'FaHeadphones', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F2-L10', nextTitle: 'Greetings and Identity in the Arab World', nextAr: 'التَّحِيَّاتُ وَالهُوِيَّةُ' };
const profiles = banks.l09.profiles;
const people = banks.l09.people;
const scriptB = 'السَّلَامُ عَلَيْكُمْ. اِسْمِي لَيْلَى، وَعُمْرِي إِحْدَى عَشْرَةَ سَنَةً. أَنَا بَرِيطَانِيَّةٌ لُبْنَانِيَّةٌ. أَنَا مِنْ بَرِيطَانِيَا، وَأَسْكُنُ فِي مَانْشِسْتَرَ. أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ، وَأَفْهَمُ العَرَبِيَّةَ أَيْضًا. هِوَايَتِي المُفَضَّلَةُ الرَّسْمُ.';
const scriptC = [
  'المُتَحَدِّثُ الأَوَّلُ: اِسْمِي يُوسُفُ، وَعُمْرِي اِثْنَتَا عَشْرَةَ سَنَةً. أَنَا مِنْ مِصْرَ، وَأَسْكُنُ فِي بِرْمِنْغَامَ. أَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ.',
  'المُتَحَدِّثَةُ الثَّانِيَةُ: اِسْمِي مَرْيَمُ، وَعُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً. أَنَا مِنْ سُورِيَا، وَأَسْكُنُ فِي بَارِيسَ. أَتَكَلَّمُ العَرَبِيَّةَ وَالفَرَنْسِيَّةَ.',
  'المُتَحَدِّثُ الثَّالِثُ: اِسْمِي بِلَالٌ، وَعُمْرِي خَمْسَ عَشْرَةَ سَنَةً. أَنَا مِنْ بَاكِسْتَانَ، وَأَسْكُنُ فِي لَنْدَنَ. أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ وَالأُرْدِيَّةَ.',
];

const site = {
  speaking: {
    context: 'Retell what you heard in the third person',
    model: [
      ['هُوَ', 'اِسْمُهُ كَرِيمٌ، وَعُمْرُهُ ثَلَاثَ عَشْرَةَ سَنَةً. هُوَ مَغْرِبِيٌّ، وَيَعِيشُ فِي لَنْدَنَ.', 'His name is Karim, and he is 13. He is Moroccan and lives in London.'],
      ['هِيَ', 'اِسْمُهَا لَيْلَى، وَعُمْرُهَا إِحْدَى عَشْرَةَ سَنَةً. هِيَ بَرِيطَانِيَّةٌ لُبْنَانِيَّةٌ، وَتَعِيشُ فِي مَانْشِسْتَرَ.', 'Her name is Leila, and she is 11. She is British-Lebanese and lives in Manchester.'],
    ],
  },
  writing: {
    prompt: 'Website retell task: write four to six sentences retelling one speaker’s information in the third person. Underline the six fact signals and read your profile aloud.',
    checklist: ['هُوَ / هِيَ and اِسْمُهُ / اِسْمُهَا match the speaker.', 'The age uses عُمْرُهُ / عُمْرُهَا … سَنَةً.', 'Origin with مِنْ, residence with فِي / يَعِيشُ.', 'At least two connectors (وَ، أَيْضًا، وَلَكِنْ).'],
    model: profiles[0].model,
  },
  differentiation: {
    core: 'Choose one speaker. Four accurate facts: name, age, country and city.',
    develop: 'Retell six facts using he / she and his / her forms, with two connectors.',
    stretch: 'Compare two speakers: one complete sentence each and one contrast with وَلَكِنْ.',
  },
  listening: {
    title: 'Task A · Karim introduces himself',
    script: 'مَرْحَبًا. اِسْمِي كَرِيمٌ، وَعُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً. أَنَا مَغْرِبِيٌّ، وَأَنَا مِنَ المَغْرِبِ. أَسْكُنُ فِي لَنْدَنَ، وَأَتَكَلَّمُ العَرَبِيَّةَ وَالفَرَنْسِيَّةَ. أُحِبُّ كُرَةَ القَدَمِ. إِلَى اللِّقَاءِ.',
    questions: bank(9, 'taskAQuiz', [1, 2, 3, 4, 5]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 9,
    plan: '0–1 Welcome · 1–2 Lesson map · 2–9 Do Now + answers · 9–10 Objectives · 10–18 Signals, routine, instruction words · 18–20 Quick check · 20–23 Clue lab · 23–30 Task A · 30–37 Task B · 37–44 Task C · 44–50 Retell (speak, then write) · 50–54 Feedback · 54–56 Preparation.',
    source: 'Website sections used: the six fact families, the eight-question signal check, the four-step listening routine, the complete listening reference table (questions, signals, ages, countries, cities, languages, interests, task words, strategy words), the instruction-word check (6), the ten-question clue and distractor lab, Task A (Karim, six multiple-choice questions), Task B (Leila, seven detail checks), Task C (three speakers, matching + six checks), the third-person retell with profile cards and the twelve-question listening checkpoint. The website visual game repeats the F2-L08 cards; three different cards are used here.',
    support: `• This lesson has NO new topic language: it trains LISTENING with everything from F2-L01 to L08. Audio on the website is “coming soon”, so the teacher reads every script (twice, natural pace, pausing between sentences on the second reading). All scripts are in the notes.
• Website listening rule: “Keep moving — missing one word does not mean you have missed the answer.” Teach the four-step routine explicitly and use it for every task.
• Core: Task A + Task C names; four-fact retell. Develop: all three tasks; six-fact retell. Stretch: note completion without options (Task B, answers hidden) and a two-speaker comparison with وَلَكِنْ.
• SEND / EAL: the read-along slides are shown ONLY after the second listening; allow a written grid instead of spoken answers.`,
  }),
  F.welcomeSlide(),
  {
    type: 'journey', stage: 'welcome', eyebrow: 'Today’s lesson map', title: 'Our listening lesson, step by step', ar: 'خَرِيطَةُ الدَّرْسِ',
    steps: [
      { stage: 'donow', min: 7, text: 'Retrieval quiz: which fact follows which phrase?', ar: 'اِبْدَأِ الآنَ' },
      { stage: 'teach', min: 10, text: 'Signal phrases, the four-step routine, task words.', ar: 'الإِشَارَاتُ' },
      { stage: 'ido', min: 3, text: 'Clue lab: how I avoid a trap.', ar: 'شَاهِدْ' },
      { stage: 'wedo', min: 21, text: 'Three listening tasks: A, B and C.', ar: 'مَعًا' },
      { stage: 'youdo', min: 6, text: 'Retell one speaker: say it, then write it.', ar: 'وَحْدَكَ' },
      { stage: 'feedback', min: 5, text: 'Model, self-check and exit ticket.', ar: 'قَيِّمْ عَمَلَكَ' },
      { stage: 'prep', min: 2, text: 'Get ready at home for F2-L10.', ar: 'اِسْتَعِدَّ' },
    ],
    support: 'You will hear every text TWICE. First listen: who is speaking and which facts? Second listen: the exact details. Missing a word is normal — keep listening for the next signal.',
    notes: 'LESSON MAP. Make the routine visible and predictable (SEND). Remind students that the scripts will be shown AFTER the listening to check and repair — never before.',
  },
  F.doNow({
    questions: [
      q('What does اِسْتَمِعْ mean?', ['Listen!', 'Choose!', 'Write!'], 'Prepared at home.'),
      q('What does صَحِيحٌ mean?', ['true, correct', 'false, wrong', 'the details'], 'Prepared at home.'),
      ...bank(9, 'retrievalQuiz', [1, 3, 7]),
    ],
    keyIdea: { text: 'Every fact has a SIGNAL phrase in front of it. Hear the signal → get ready for the fact.', ar: 'عُمْرِي … · أَنَا مِنْ … · أَسْكُنُ فِي …' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home. Questions 3–5 are the website “eight-question signal check” (age, residence, her).',
  }),
  F.objectivesSlide([
    'Catch name, age, country, city, language and interests.',
    'Use signal phrases to predict and find each fact.',
    'Complete multiple-choice, note and matching tasks.',
    'Retell what I heard in the third person.',
  ], {
    core: ['I can catch four facts about one speaker.', 'I can retell four facts with هُوَ / هِيَ.'],
    develop: ['I can complete all three listening tasks.', 'I can retell six facts with two connectors.'],
    stretch: ['I can complete notes without options.', 'I can compare two speakers with “but”.'],
  }, 3, 'Website lesson aims and the website retell routes (Core / Develop / Stretch).'),
  F.keywordsSlide({
    text: 'No new topic vocabulary today — only listening SIGNALS, task instructions and strategy words from the website.',
    groups: [
      { head: 'GROUP 1', name: 'Signal phrases · 6 fact families' },
      { head: 'GROUP 2', name: 'Task instructions · 6' },
      { head: 'GROUP 3', name: 'Strategy words · 4' },
    ],
    bridge: [
      { ar: 'صَحِيحٌ', urdu: 'صحیح', tr: 'sahīh', en: 'correct' },
      { ar: 'خَطَأٌ', urdu: 'خطا', tr: 'khatā', en: 'mistake, error' },
      { ar: 'تَفَاصِيلُ', urdu: 'تفصیل', tr: 'tafsīl', en: 'detail' },
      { ar: 'فِكْرَةٌ', urdu: 'فکر', tr: 'fikr', en: 'thought, idea' },
      { ar: 'جَوَابٌ · إِجَابَةٌ', urdu: 'جواب', tr: 'jawāb', en: 'answer' },
    ],
    notes: 'URDU BRIDGE: صحیح (correct — the SAME word), خطا (mistake), تفصیل (detail → التَّفَاصِيلُ), فکر (thought → الفِكْرَةُ الرَّئِيسِيَّةُ, the main idea), جواب (answer). Urdu speakers will find the Arabic task instructions surprisingly familiar.',
  }),
  {
    type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Key words · Group 1 · the listening reference table (website)', title: 'Hear the signal, catch the fact', ar: 'إِشَارَاتُ المَعْلُومَاتِ',
    cols: [{ label: 'Signal: I', w: 3.3, size: 22 }, { label: 'Signal: he / she', w: 4.4, size: 22 }, { label: 'The fact that follows', w: 4.63 }],
    rows: [
      { core: true, cells: [{ ar: 'اِسْمِي …' }, { ar: 'اِسْمُهُ … / اِسْمُهَا …' }, '🪪 a NAME'] },
      { core: true, cells: [{ ar: 'عُمْرِي … سَنَةً' }, { ar: 'عُمْرُهُ … / عُمْرُهَا …' }, '🎂 an AGE — the number just before سَنَةً'] },
      { core: true, cells: [{ ar: 'أَنَا مِنْ …' }, { ar: 'هُوَ مِنْ … / هِيَ مِنْ …' }, '🌍 a COUNTRY of origin'] },
      { core: true, cells: [{ ar: 'أَسْكُنُ فِي …' }, { ar: 'يَعِيشُ فِي … / تَعِيشُ فِي …' }, '🏙️ a CITY of residence'] },
      { cells: [{ ar: 'أَتَكَلَّمُ … / أَفْهَمُ …' }, { ar: 'يَتَكَلَّمُ … / تَتَكَلَّمُ …' }, '🗣️ a LANGUAGE'] },
      { cells: [{ ar: 'أُحِبُّ … / هِوَايَتِي …' }, { ar: 'يُحِبُّ … / تُحِبُّ …' }, '⚽ an INTEREST'] },
    ],
    notes: `SIGNAL TABLE (website “Keep the F2 listening vocabulary at hand”). Drill: teacher says ONLY the signal (“عُمْرِي …”) and pauses; students call out the fact family (“age!”).
Website distractor warnings: a country normally follows مِنْ, a city follows فِي; a nationality describes the person (مَغْرِبِيٌّ), it is NOT the country. Listen for the number immediately before سَنَةً.
Cities on the website: لَنْدَنُ · مَانْشِسْتَرُ · بِرْمِنْغَامُ · القَاهِرَةُ · دِمَشْقُ · بَيْرُوتُ · الرِّيَاضُ · بَارِيسُ · إِسْطَنْبُولُ · الرِّبَاطُ.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Key words · the four-step listening routine (website)', title: 'Four listening steps', ar: 'خُطُوَاتُ الاِسْتِمَاعِ الأَرْبَعُ',
    cols: [{ label: 'Step', w: 3.8, size: 22 }, { label: 'What you do', w: 6.6 }, { label: 'When', w: 1.93 }],
    rows: [
      { core: true, cells: [{ ar: '١ · تَوَقَّعْ', sub: 'Predict' }, 'Read the question; name the category: name, age, country, city, language or hobby.', 'before'] },
      { core: true, cells: [{ ar: '٢ · اِسْتَمِعْ لِلْفِكْرَةِ العَامَّةِ', sub: 'First listen: gist' }, 'Who is speaking? Which categories do you hear? Do not stop for one missed word.', 'listen 1'] },
      { core: true, cells: [{ ar: '٣ · اِسْتَمِعْ لِلتَّفَاصِيلِ', sub: 'Second listen: detail' }, 'Write the exact name, number or place — listen for the signal just before it.', 'listen 2'] },
      { core: true, cells: [{ ar: '٤ · تَحَقَّقْ', sub: 'Verify' }, 'Do your answers make one possible person? Then use the script to repair — not replace.', 'after'] },
    ],
    notes: 'THE FOUR-STEP ROUTINE (website section 2). Put this slide back on screen before each task (A, B, C). Website rule: “Keep moving. Missing one word does not mean you have missed the answer. The key fact may be repeated or signalled by a familiar phrase.”',
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Groups 2–3 · task instructions and strategy words (website)', title: 'Words that tell you what to do', ar: 'تَعْلِيمَاتُ المَهَامِّ',
    items: [
      { n: 1, ar: 'اِسْتَمِعْ', en: 'Listen!', tr: 'is-ta-miʿ · -ī · -ū', tag: 'to m. · f. · pl.', core: true, forms: [{ l: 'to m.', ar: 'اِسْتَمِعْ' }, { l: 'to f.', ar: 'اِسْتَمِعِي' }, { l: 'to pl.', ar: 'اِسْتَمِعُوا' }] },
      { n: 2, ar: 'اِخْتَرْ', en: 'Choose!', tr: 'ikh-tar · ikh-tā-rī · ikh-tā-rū', tag: 'to m. · f. · pl.', core: true, forms: [{ l: 'to m.', ar: 'اِخْتَرْ' }, { l: 'to f.', ar: 'اِخْتَارِي' }, { l: 'to pl.', ar: 'اِخْتَارُوا' }] },
      { n: 3, ar: 'اِمْلَأِ الفَرَاغَ', en: 'Fill the gap!', tr: 'im-la-ʾi l-fa-rāgh', tag: 'instruction', core: true, note: 'Write the missing word.' },
      { n: 4, ar: 'صَحِيحٌ · خَطَأٌ', en: 'true · false', tr: 'ṣa-ḥīḥ · kha-ṭaʾ', tag: 'label', core: true, note: 'Urdu: sahīh · khatā' },
      { n: 5, ar: 'مَرَّةً أُخْرَى', en: 'once more, again', tr: 'mar-ra-tan ukh-rā', tag: 'instruction', note: 'The teacher reads it a second time.' },
      { n: 6, ar: 'الفِكْرَةُ الرَّئِيسِيَّةُ · التَّفَاصِيلُ', en: 'the main idea · the details', tr: 'al-fik-ra r-ra-ʾī-siy-ya · at-ta-fā-ṣīl', tag: 'strategy', note: 'Listen 1 = main idea · Listen 2 = details' },
    ],
    notes: `TASK INSTRUCTIONS (website “Listening task instructions” and “Listening strategy vocabulary”). Cards 1–2 show the command for a boy / girl / group — F2-L06 pattern (تَفَضَّلْ / تَفَضَّلِي).
Website strategy words (recognition): أَسْتَمِعُ I listen · يَسْتَمِعُ he listens · تَسْتَمِعُ she listens · أُرَكِّزُ I focus · السُّؤَالُ the question · الإِجَابَةُ the answer.
From today, give listening instructions in Arabic: اِسْتَمِعُوا … اِخْتَارُوا … مَرَّةً أُخْرَى.`,
  },
  F.quickCheck(bank(9, 'rubricQuiz', [0, 1, 2, 5]), 'website “Listening instruction-word check” questions 1, 2, 3 and 6.'),
  {
    type: 'mcq', stage: 'ido', min: 3, eyebrow: 'I do · the listening clue lab (website) · how to avoid a trap', title: 'Which detail does the signal introduce?', ar: 'مُخْتَبَرُ إِشَارَاتِ الاِسْتِمَاعِ',
    seed: 18,
    questions: bank(9, 'clueQuiz', [0, 1, 4, 5, 9]),
    side: { kind: 'info', head: 'THREE TRAPS', text: 'Country (مِنْ) vs city (فِي).\nSpeaks (أَتَكَلَّمُ) vs understands (أَفْهَمُ).\nNationality vs place.' },
    answerSlide: { min: 0, eyebrow: 'I do · clue lab answers', title: 'Clue lab: answers', ar: 'الإِجَابَاتُ' },
    notes: 'I DO — model the thinking for questions 1 and 3 aloud (“I hear مِنْ, so Egypt is the COUNTRY of origin…”); students do the rest. Website: “These short decisions train the exact contrasts that cause missed answers: country versus city, speaker versus another person, and one number versus a similar number.”',
    answerNotes: 'Reveal; for each, ask “Which word was the signal?”.',
  },
  F.gameSlide({ ...game, items: [game.items[1], game.items[2], game.items[5]] }, {
    title: 'Quick match: profile cards',
    en: ['My name is Ali and I am fifteen.', 'I am French and I speak French. (girl)', 'I live in Dubai.'],
    icons: [[['fa6', 'FaPerson', '1D5FBF'], ['fa6', 'FaIdCard', '1D5FBF']], [['fa6', 'FaPersonDress', 'D6336C'], ['fa6', 'FaComments', '1D5FBF']], [['fa6', 'FaPerson', '1D5FBF'], ['fa6', 'FaCity', '5A6472']]],
    labels: ['Ali · 15', 'a girl · France · French', 'a boy · Dubai'],
    order: [2, 0, 1],
    min: 2,
    notes: 'Website visual game (it repeats the F2-L08 card set; these are the three cards not used last lesson). Use it as a quick reading warm-up before the listening tasks: the SIGNAL words (اِسْمِي، عُمْرِي، أَنَا … وَأَتَكَلَّمُ، أَسْكُنُ فِي) are exactly what students will hear.',
  }),
  F.listening(site, {
    coreTip: 'Task A · six-box grid:\nname · age · nationality · city · languages · hobby.',
    routes: 'Core: questions 1, 3 and 5. Develop / Stretch: all 5. Website multiple-choice task.',
    gloss: [
      ['مَرْحَبًا. اِسْمِي كَرِيمٌ، وَعُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً.', 'Hello. My name is Karim, and I am thirteen.'],
      ['أَنَا مَغْرِبِيٌّ، وَأَنَا مِنَ المَغْرِبِ.', 'I am Moroccan, and I am from Morocco.'],
      ['أَسْكُنُ فِي لَنْدَنَ، وَأَتَكَلَّمُ العَرَبِيَّةَ وَالفَرَنْسِيَّةَ.', 'I live in London, and I speak Arabic and French.'],
      ['أُحِبُّ كُرَةَ القَدَمِ. إِلَى اللِّقَاءِ.', 'I like football. See you later.'],
    ],
  }),
  {
    type: 'mcq', stage: 'wedo', min: 5, eyebrow: 'We do · Task B · note completion · Leila’s information card (website)', title: 'Task B · Leila’s information card', ar: 'بِطَاقَةُ لَيْلَى',
    seed: 19,
    questions: bank(9, 'taskBQuiz', [0, 1, 3, 5, 6]).map((x) => ({ ...x, prompt: x.prompt })),
    side: { kind: 'core', label: 'STRETCH FIRST', text: 'Stretch: cover the options.\nWrite age, city and the understood language from memory, then check.' },
    answerSlide: { min: 0, eyebrow: 'We do · Task B answers', title: 'Task B: answers', ar: 'الإِجَابَاتُ' },
    between: {
      type: 'glossed', stage: 'wedo', eyebrow: 'We do · Task B · read along (Core)', title: 'Leila’s script with English', ar: 'نَصُّ الاِسْتِمَاعِ',
      lines: [
        ['السَّلَامُ عَلَيْكُمْ. اِسْمِي لَيْلَى، وَعُمْرِي إِحْدَى عَشْرَةَ سَنَةً.', 'Peace be upon you. My name is Leila, and I am eleven.'],
        ['أَنَا بَرِيطَانِيَّةٌ لُبْنَانِيَّةٌ. أَنَا مِنْ بَرِيطَانِيَا، وَأَسْكُنُ فِي مَانْشِسْتَرَ.', 'I am British-Lebanese. I am from Britain, and I live in Manchester.'],
        ['أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ، وَأَفْهَمُ العَرَبِيَّةَ أَيْضًا.', 'I speak English, and I understand Arabic too.'],
        ['هِوَايَتِي المُفَضَّلَةُ الرَّسْمُ.', 'My favourite hobby is drawing.'],
      ],
      notes: 'READ-ALONG — show ONLY after the second listening. Point out the trap: Leila SPEAKS English but UNDERSTANDS Arabic; she is from Britain (مِنْ) and lives in Manchester (فِي). Two nationalities side by side (بَرِيطَانِيَّةٌ لُبْنَانِيَّةٌ) — layered identity, as in F2-L04.',
    },
    notes: `TASK B (website note completion, 5 of 7 detail checks). Website: “This time the answers are not all given as options. Record exact details.” Students first write a seven-line card (age · nationality · country · city · language spoken · language understood · favourite hobby), THEN answer.
Website listening instruction: first identify whether Leila gives one nationality or more than one; on the second listen, record age, city and languages.

SCRIPT (read aloud twice):
${scriptB}`,
    answerNotes: 'Go through answers; ask “What was the signal?” (عُمْرِي · أَنَا … · أَسْكُنُ فِي · أَفْهَمُ · هِوَايَتِي).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 5, eyebrow: 'We do · Task C · three speakers · matching (website)', title: 'Task C · Who matches each detail?', ar: 'مَنْ يُنَاسِبُ كُلَّ مَعْلُومَةٍ؟',
    seed: 20,
    questions: bank(9, 'taskCQuiz', [0, 1, 2, 3, 5]),
    side: { kind: 'core', label: 'CORE', text: 'Three columns: Speaker 1 · 2 · 3.\nListen 1: the three names.\nListen 2: age, country, city, language.' },
    answerSlide: { min: 0, eyebrow: 'We do · Task C answers', title: 'Task C: answers', ar: 'الإِجَابَاتُ' },
    between: {
      type: 'formsTable', stage: 'wedo', eyebrow: 'We do · Task C · the three detail cards (website matching mission)', title: 'Check your three columns', ar: 'بِطَاقَاتُ المُتَحَدِّثِينَ',
      cols: [{ label: 'Speaker', w: 2.6, size: 24 }, { label: 'Age', w: 1.6 }, { label: 'From (مِنْ)', w: 2.4 }, { label: 'Lives in (فِي)', w: 2.6 }, { label: 'Speaks', w: 3.13 }],
      rows: people.map((p) => { const [age, from, city, lang] = p.detail.split(' · '); return { core: true, cells: [{ ar: p.name }, age, from, city, lang] }; }),
      notes: 'MATCHING MISSION (website “Match each name to its complete detail card”). Show AFTER the second listening: students compare with their three columns and correct in green pen. Then show the Arabic script on request (it is in the notes of the previous slide).',
    },
    notes: `TASK C (website matching, 5 of 6 detail checks). Three students speak in order. Website instruction: first hearing — record the three names; second hearing — add one age, country, city and language for each.

SCRIPT (read aloud twice, pausing between speakers):
${scriptC.join('\n')}`,
    answerNotes: 'Reveal. Distractor discussion: Yusuf and Bilal BOTH speak English; Maryam and Yusuf BOTH speak Arabic — which extra detail separates them?',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'مَنْ هُوَ؟ اِسْمُهُ … عُمْرُهُ …' },
      { route: 'develop', ar: 'أَعِدْ رِوَايَةَ تَعْرِيفِ لَيْلَى.' },
      { route: 'develop', ar: 'أَعِدْ رِوَايَةَ تَعْرِيفِ كَرِيمٍ.' },
      { route: 'stretch', ar: 'قَارِنْ بَيْنَ مَرْيَمَ وَبِلَالٍ.' },
    ],
    stems: [
      { route: 'core', ar: 'اِسْمُهُ / اِسْمُهَا ______ ، وَعُمْرُهُ / وَعُمْرُهَا ______ سَنَةً.' },
      { route: 'develop', ar: 'هُوَ / هِيَ مِنْ ______ ، وَيَعِيشُ / وَتَعِيشُ فِي ______ .' },
      { route: 'stretch', ar: 'مَرْيَمُ تَعِيشُ فِي بَارِيسَ، وَلَكِنْ بِلَالٌ ______ .' },
      { route: 'sum', ar: 'يَتَكَلَّمُ / تَتَكَلَّمُ ______ .' },
    ],
    modelEn: ['His name is Karim, and he is 13. He is Moroccan and lives in London.', 'Her name is Leila, and she is 11. She is British-Lebanese and lives in Manchester.'],
    notes: `WEBSITE RETELL (section 8): “Listening becomes stronger when you can transform notes into a short spoken or written profile.”
Random retell cards (website): ${profiles.map((p) => `${p.name} (${p.facts})`).join(' · ')}.
Routes (website): Core — choose one speaker, four facts (name, age, country, city) · Develop — six facts with هُوَ / هِيَ, اِسْمُهُ / اِسْمُهَا and two connectors · Stretch — compare two speakers with one contrast using وَلَكِنْ.`,
  }),
  F.routesSlide(site, {
    core: { amount: '4 sentences', how: 'One speaker: name, age, country, city — use your listening grid.' },
    develop: { amount: '6 sentences', how: 'Six facts with he / she forms and two connectors.' },
    stretch: { amount: '2 speakers', how: 'One sentence for each speaker and a contrast with وَلَكِنْ.' },
  }),
  F.framesSlide({
    core: [
      { en: 'His / Her name is …', ar: 'اِسْمُهُ / اِسْمُهَا ______ .' },
      { en: 'He / She is … years old.', ar: 'عُمْرُهُ / عُمْرُهَا ______ سَنَةً.' },
      { en: 'He / She is from …', ar: 'هُوَ / هِيَ مِنْ ______ .' },
      { en: 'He / She lives in …', ar: 'يَعِيشُ / تَعِيشُ فِي ______ .' },
    ],
    develop: [
      { en: 'He speaks … and …', ar: 'يَتَكَلَّمُ ______ وَ ______ .' },
      { en: 'She understands … too.', ar: 'وَتَفْهَمُ ______ أَيْضًا.' },
      { en: 'He likes …', ar: 'يُحِبُّ ______ .' },
      { en: 'Her favourite hobby is …', ar: 'هِوَايَتُهَا المُفَضَّلَةُ ______ .' },
      { en: '… but … lives in …', ar: '______ ، وَلَكِنْ ______ يَعِيشُ فِي ______ .' },
    ],
    bank: ['كَرِيمٌ', 'لَيْلَى', 'يُوسُفُ', 'مَرْيَمُ', 'بِلَالٌ', 'لَنْدَنَ', 'مَانْشِسْتَرَ', 'بَارِيسَ', 'بِرْمِنْغَامَ', 'المَغْرِبِ', 'مِصْرَ', 'سُورِيَا', 'بَاكِسْتَانَ', 'كُرَةَ القَدَمِ', 'الرَّسْمُ'],
  }),
  F.modelSlide(site,
    'His name is Karim, and he is thirteen. He is Moroccan, and he lives in London. He speaks Arabic and French, and he likes football.',
    ['اِسْمُهُ / عُمْرُهُ', 'a nationality', 'يَعِيشُ فِي', 'two languages'],
    'Website retell model (Karim). Ask: which facts from the ORIGINAL listening changed form? (اِسْمِي → اِسْمُهُ · أَسْكُنُ → يَعِيشُ · أَتَكَلَّمُ → يَتَكَلَّمُ).'),
  F.selfCheckSlide([
    { route: 'core', text: 'I listened twice: gist first, then details.' },
    { route: 'core', text: 'I caught four facts about one speaker.' },
    { route: 'develop', text: 'I kept country (مِنْ) and city (فِي) apart.' },
    { route: 'develop', text: 'I retold six facts with هُوَ / هِيَ.' },
    { route: 'stretch', text: 'I compared two speakers with وَلَكِنْ.' },
  ]),
  F.exitTicket(bank(9, 'finalQuiz', [3, 8, 11]), 12),
  F.prepSlide({
    ...NEXT,
    words: [['ثَقَافَةٌ', 'culture', ''], ['عَادَاتٌ', 'customs, habits', 'sg. عَادَةٌ'], ['اِحْتِرَامٌ', 'respect', ''], ['هُوِيَّةٌ', 'identity', ''], ['فَخُورٌ', 'proud (m.)', 'f. فَخُورَةٌ']],
    questionEn: 'Think of one greeting custom in your family or community. You do NOT have to share anything personal.',
    questionAr: 'أَنَا فَخُورٌ / فَخُورَةٌ بِـ …',
    homework: {
      core: 'Website F2-L09: Task A (six questions), then the instruction-word check.',
      develop: 'Website Tasks B and C, then write your retell (4–6 sentences).',
      stretch: 'All three tasks, a two-speaker comparison, and the 12-question checkpoint (aim for 10/12).',
    },
    wordsSource: 'The five words are from the website F2-L10 core cultural vocabulary (the first ten words are the lesson’s required core).',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: listen twice — gist first, details second.' }),
];

module.exports = { meta, slides };
