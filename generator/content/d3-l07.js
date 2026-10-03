'use strict';
/* D3-L07 · Arabic Proverbs and Values — Work Ethic and Success — website: Pathways › Development › D3 › D3-L07 (six work proverbs, values nouns, commands اِفْعَلْ / اِفْعَلِي, prohibition لَا + jussive, يَعْنِي هٰذَا المَثَلُ أَنَّ …, يَنْطَبِقُ … عَلَى … لِأَنَّ …).
 * Website vocabulary, grammar rules, listening script and reading text used as published; the quiz, listening and reading
 * questions, sorter, mistakes, model sentences, speaking prompts, writing model, mission and final check are generic placeholders
 * on the website for this lesson, so those items are teacher-written from the website’s own script, text and rules. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D3')({
  n: 7, fileTitle: 'Arabic_Proverbs_and_Work_Values', chip: 'Proverbs',
  title: 'Arabic Proverbs and Values — Work Ethic and Success', arabic: 'الأَمْثَالُ العَرَبِيَّةُ وَالقِيَمُ — أَخْلَاقِيَّاتُ العَمَلِ وَالنَّجَاحُ',
  focus: 'Learn six Arabic proverbs about work, explain what each one means (يَعْنِي هٰذَا المَثَلُ أَنَّ …), apply it to a real situation (يَنْطَبِقُ … عَلَى …) and give advice with commands and prohibitions.',
  icon: 'FaScroll', iconSet: 'fa6',
});

const PL = {
  'مَسْؤُولٌ': 'مَسْؤُولُونَ', 'مُنَظَّمٌ': 'مُنَظَّمُونَ', 'صَبُورٌ': 'صَبُورُونَ', 'مُجْتَهِدٌ': 'مُجْتَهِدُونَ', 'مُبَادِرٌ': 'مُبَادِرُونَ', 'مَوْثُوقٌ بِهِ': 'مَوْثُوقٌ بِهِمْ',
  'وَاثِقٌ': 'وَاثِقُونَ', 'مُتَعَاوِنٌ': 'مُتَعَاوِنُونَ', 'مَرِنٌ': 'مَرِنُونَ', 'هَادِئٌ': 'هَادِئُونَ', 'طَمُوحٌ': 'طَمُوحُونَ', 'أَمِينٌ': 'أُمَنَاءُ',
};
const forms = {};
D.site('D3-L07').vocab[1].items.forEach((it) => {
  const [m, f] = it.ar.split(' / ');
  if (PL[m]) forms[it.ar] = { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: PL[m] }, { l: 'f.', ar: f }, { l: 'm.', ar: m }] };
});
const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D3-L07', {
  support: `• Core: learn three proverbs by heart (مَنْ جَدَّ وَجَدَ · الصَّبْرُ مِفْتَاحُ الفَرَجِ · الاِتِّحَادُ قُوَّةٌ) and match each to a situation. Develop: explain the meaning (يَعْنِي هٰذَا المَثَلُ أَنَّ …) and give advice with a command / prohibition. Stretch: apply two proverbs to real cases and justify (يَنْطَبِقُ … عَلَى … لِأَنَّ …).
• Commands return from F6-L08 (اِذْهَبْ / اِذْهَبِي): today with work verbs (اِجْتَهِدْ، اِجْتَهِدِي). NEW: prohibition لَا تَـ … (jussive, no final vowel).
• Islamic Studies link (teacher choice): the work value of إِتْقَانٌ is often linked to the hadith إِنَّ اللّٰهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ (reported by al-Bayhaqī and aṭ-Ṭabarānī). Present it as a hadith, not a proverb.
• Interpret, don’t translate word by word: الصَّبْرُ مِفْتَاحُ الفَرَجِ is literally “patience is the key to relief”.`,
  teach: 'Six proverbs, what they mean, and advice with commands.',
  wedo: 'Picture match, sort proverb → value, fix and listen: which proverb fits?',
  next: { nextCode: 'D3-L08', nextTitle: 'Reading — Jobs and Career Texts', nextAr: 'القِرَاءَةُ — نُصُوصُ الوَظَائِفِ' },
  objectives: ['Understand six Arabic proverbs about work and success.', 'Explain a proverb’s message with يَعْنِي هٰذَا المَثَلُ أَنَّ.', 'Give advice with commands (اِفْعَلْ / اِفْعَلِي) and prohibitions (لَا تَفْعَلْ).', 'Apply a proverb to a real work or study situation.'],
  flexGroups: [1, 2],
  doNow: {
    questions: [
      q('What does مَثَلٌ mean?', ['a proverb', 'an example', 'a lesson'], 'Prepared at home (D3-L06).'),
      q('What does الإِتْقَانُ mean?', ['mastery, doing a job well', 'discipline', 'honesty'], 'Prepared at home (D3-L06).'),
      q('Which is the formal opening?', ['يَسُرُّنِي أَنْ أَتَقَدَّمَ لِلوَظِيفَةِ.', 'أُرِيدُ الوَظِيفَةَ.', 'مَرْحَبًا يَا صَدِيقِي.'], 'D3-L06: formal register.'),
      q('Give “turn right” to a girl.', ['اِنْعَطِفِي يَمِينًا.', 'اِنْعَطِفْ يَمِينًا.', 'اِنْعَطِفُوا يَمِينًا.'], 'F6-L08: -ī for a girl.'),
      q('Which word means “honest”?', ['أَمِينٌ', 'مُبَادِرٌ', 'مَرِنٌ'], 'D3-L03 qualities.'),
    ],
    keyIdea: { text: 'A proverb gives advice in a few words. Explain the MESSAGE, then apply it.', ar: '{w|مَنْ جَدَّ وَجَدَ} · يَعْنِي هٰذَا المَثَلُ {e|أَنَّ} الجُهْدَ يُؤَدِّي إِلَى النَّجَاحِ' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of D3-L06. Question 3 retrieves D3-L06; question 4 retrieves F6-L08 commands (needed today); question 5 retrieves D3-L03.',
  },
  routes: {
    core: ['I can say three proverbs and what they mean.', 'I can match a proverb to a situation.'],
    develop: ['I can explain a proverb with yaʿnī … anna.', 'I can give advice with do / don’t.'],
    stretch: ['I can apply two proverbs to real cases.', 'I can justify my choice of proverb.'],
  },
  bridge: [
    { ar: 'صَبْرٌ', urdu: 'صبر', tr: 'sabr', en: 'patience' },
    { ar: 'عِلْمٌ', urdu: 'علم', tr: 'ʿilm', en: 'knowledge' },
    { ar: 'أَمَانَةٌ', urdu: 'امانت', tr: 'amānat', en: 'trust, honesty' },
    { ar: 'اِتِّحَادٌ', urdu: 'اتحاد', tr: 'ittihād', en: 'unity' },
    { ar: 'نُورٌ', urdu: 'نور', tr: 'nūr', en: 'light' },
  ],
  bridgeNotes: 'URDU BRIDGE: almost every key word today is shared — صبر، علم، امانت، اتحاد، نور (and اتحاد میں برکت ہے “there is blessing in unity” is a close Urdu cousin of الاِتِّحَادُ قُوَّةٌ). Ask students for Urdu proverbs with the same messages.',
  core: ['مَنْ جَدَّ وَجَدَ', 'الصَّبْرُ مِفْتَاحُ الفَرَجِ', 'لَا تُؤَجِّلْ عَمَلَ اليَوْمِ إِلَى الغَدِ', 'الاِتِّحَادُ قُوَّةٌ', 'العِلْمُ نُورٌ', 'الإِتْقَانُ أَسَاسُ النَّجَاحِ', 'المُثَابَرَةُ', 'الأَمَانَةُ', 'الاِنْضِبَاطُ', 'المَسْؤُولِيَّةُ'],
  forms,
  vocabNotes: {
    0: 'Six proverbs + six VALUE nouns. Say each proverb, then its message in one English sentence. مَنْ جَدَّ وَجَدَ rhymes (jadda — wajada): a memory trick.',
    1: 'Work values as adjectives (FLEX, review from D3-L03): every value noun has a person adjective — الأَمَانَةُ → أَمِينٌ، المَسْؤُولِيَّةُ → مَسْؤُولٌ.',
    2: 'Interpretation connectors (FLEX): today use لِأَنَّ and عَلَى سَبِيلِ المِثَالِ to justify a proverb.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · do and don’t (website rules 1–2)', title: 'Advice: do · don’t', ar: 'اِفْعَلْ · لَا تَفْعَلْ',
      cols: [{ label: 'To a boy', w: 4.4, size: 22 }, { label: 'To a girl', w: 4.4, size: 22 }, { label: 'Pattern', w: 3.53 }],
      rows: [
        { core: true, cells: [P('{w|اِجْتَهِدْ} فِي عَمَلِكَ.', 'Work hard at your job.'), P('{e|اِجْتَهِدِي} فِي عَمَلِكِ.', 'Work hard at your job.'), 'do: -ø · -ī'] },
        { core: true, cells: [P('{w|رَاجِعْ} عَمَلَكَ.', 'Check your work.'), P('{e|رَاجِعِي} عَمَلَكِ.', 'Check your work.'), 'do: -ø · -ī'] },
        { cells: [P('{k|لَا تُؤَجِّلْ} عَمَلَ اليَوْمِ.', 'Don’t postpone today’s work.'), P('{k|لَا تُؤَجِّلِي} عَمَلَ اليَوْمِ.', 'Don’t postpone today’s work.'), 'don’t: lā tu-…'] },
        { cells: [P('{k|لَا تُهْمِلْ} التَّفَاصِيلَ.', 'Don’t neglect the details.'), P('{k|لَا تُهْمِلِي} التَّفَاصِيلَ.', 'Don’t neglect the details.'), 'lā + jussive'] },
      ],
      ltr: true,
      foot: 'Notice -ka (your, boy) and -ki (your, girl) change too: ʿamalaka / ʿamalaki.',
      notes: `GRAMMAR PART 1 — website rules “Positive command” (اِفْعَلْ / اِفْعَلِي: the imperative changes for masculine and feminine addressees) and “Negative command” (لَا + مُضَارِعٌ مَجْزُومٌ: لا الناهية with the jussive). Website examples: اِجْتَهِدْ فِي عَمَلِكَ · اِجْتَهِدِي فِي عَمَلِكِ · لَا تُؤَجِّلْ عَمَلَ اليَوْمِ · لَا تُهْمِلِي التَّفَاصِيلَ.
Link: F6-L08 directions (اِذْهَبْ / اِذْهَبِي / اِذْهَبُوا). Jussive = the present verb with no final -u: تُؤَجِّلُ → لَا تُؤَجِّلْ; a girl: تُؤَجِّلِينَ → لَا تُؤَجِّلِي (the -na drops). Group (Stretch): لَا تُؤَجِّلُوا.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · explain and apply a proverb (website rules 3–4) · Develop / Stretch', title: 'What it means · where it fits', ar: 'يَعْنِي · يَنْطَبِقُ عَلَى',
      cards: [
        { chip: 'PROVERB · CORE', color: '6B4C9A', head: 'مَنْ جَدَّ وَجَدَ', big: 'مَنْ جَدَّ وَجَدَ.', en: 'Whoever strives, finds (success).', clue: 'Learn it as a whole.' },
        { chip: 'MEANING · DEVELOP', color: '1D5FBF', head: 'يَعْنِي هٰذَا المَثَلُ أَنَّ', big: 'يَعْنِي هٰذَا المَثَلُ أَنَّ الجُهْدَ يُؤَدِّي إِلَى النَّجَاحِ.', en: 'This proverb means that effort leads to success.', clue: 'The message, not word for word.' },
        { chip: 'APPLY · STRETCH', color: '1E7B4F', head: 'يَنْطَبِقُ … عَلَى … لِأَنَّ', big: 'يَنْطَبِقُ «الاِتِّحَادُ قُوَّةٌ» عَلَى فَرِيقِ العَمَلِ لِأَنَّ التَّعَاوُنَ يُحَسِّنُ النَّتِيجَةَ.', en: '“Unity is strength” applies to a work team because cooperation improves the result.', clue: 'Case + reason.' },
      ],
      error: { text: 'A prohibition takes the jussive (no final -u).', pairs: [['لَا تُؤَجِّلْ عَمَلَ اليَوْمِ.', 'لَا تُؤَجِّلُ عَمَلَ اليَوْمِ.']] },
      notes: `GRAMMAR PART 2 — website rules “Meaning of a proverb” (يَعْنِي هٰذَا المَثَلُ أَنَّ …: interpret the message rather than translating each word only) and “Application” (يَنْطَبِقُ هٰذَا المَثَلُ عَلَى … لِأَنَّ …: connect the proverb to a realistic case and justify it). Website examples as shown.
Error pair teacher-chosen (the website common error is generic). In speech the difference is one vowel, but in meaning: لَا تُؤَجِّلُ (indicative) = “you don’t postpone” (a statement), لَا تُؤَجِّلْ = “don’t postpone!” (advice).`,
    },
  ],
  rulesTitle: 'Commands, prohibitions and proverb interpretation',
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me explain and apply a proverb',
    steps: [
      { head: 'Proverb', ar: '«{w|الصَّبْرُ مِفْتَاحُ الفَرَجِ}»', think: 'Literally: patience is the key to relief.' },
      { head: 'Meaning', ar: 'يَعْنِي هٰذَا المَثَلُ {e|أَنَّ} الصَّبْرَ يُسَاعِدُنَا عَلَى حَلِّ المَشَاكِلِ.', think: 'The message.' },
      { head: 'Apply', ar: 'يَنْطَبِقُ {k|عَلَى} طَالِبٍ يُرَاجِعُ لِامْتِحَانٍ صَعْبٍ.', think: 'A real case.' },
      { head: 'Advice', ar: '{w|لَا تَيْأَسْ}، وَ{w|اسْتَمِرَّ} فِي العَمَلِ.', think: 'Don’t … and do …' },
    ],
    legend: ['w', 'e', 'k'], legendLabels: { w: 'PROVERB / ADVICE', e: 'MEANING', k: 'CASE' },
    model: 'يَقُولُ المَثَلُ العَرَبِيُّ: «{w|الصَّبْرُ مِفْتَاحُ الفَرَجِ}». يَعْنِي هٰذَا المَثَلُ {e|أَنَّ} الصَّبْرَ يُسَاعِدُنَا عَلَى حَلِّ المَشَاكِلِ. يَنْطَبِقُ هٰذَا المَثَلُ {k|عَلَى} طَالِبٍ يُرَاجِعُ لِامْتِحَانٍ صَعْبٍ، لِأَنَّ النَّتِيجَةَ لَا تَظْهَرُ فَوْرًا. نَصِيحَتِي لَهُ: {w|لَا تَيْأَسْ}، {w|وَاسْتَمِرَّ} فِي العَمَلِ كُلَّ يَوْمٍ.',
    modelEn: 'The Arabic proverb says: “Patience is the key to relief.” This proverb means that patience helps us solve problems. It applies to a student revising for a difficult exam, because the result does not appear immediately. My advice to him: don’t give up, and keep working every day.',
    notes: 'I DO (3 min) — teacher-written model built on the website rules and reading text (“patience is important when facing a difficult project”). Steps: proverb → meaning → case → advice. لَا تَيْأَسْ (don’t despair) is a useful extra prohibition.',
  },
  patterns: [
    { ar: 'مَنْ جَدَّ وَجَدَ.', en: 'Whoever strives, succeeds.', tip: 'Effort → success.' },
    { ar: 'يَعْنِي هٰذَا المَثَلُ أَنَّ الجُهْدَ يُؤَدِّي إِلَى النَّجَاحِ.', en: 'This proverb means that effort leads to success.', tip: 'Explain the message.' },
    { ar: 'لَا تُؤَجِّلْ عَمَلَ اليَوْمِ إِلَى الغَدِ.', en: 'Don’t put off today’s work until tomorrow.', tip: 'lā + jussive.' },
    { ar: 'يَنْطَبِقُ «الاِتِّحَادُ قُوَّةٌ» عَلَى فَرِيقِ العَمَلِ.', en: '“Unity is strength” applies to a work team.', tip: 'Apply to a case.' },
  ],
  game: {
    title: 'Which value? Match the picture',
    pick: [0, 1, 3],
    en: ['Punctuality is important.', 'Cooperation helps the team.', 'Perseverance leads to success.'],
    icons: [[['fa6', 'FaClock', '1D5FBF'], ['fa6', 'FaCircleCheck', '1E7B4F']], [['fa6', 'FaHandshake', 'C77700'], ['fa6', 'FaPeopleGroup', '5A6472']], [['fa6', 'FaBullseye', 'B83227'], ['fa6', 'FaRotateRight', '6B4C9A']]],
    labels: ['on time', 'working together', 'keep trying'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Then: which proverb matches each card? (الاِتِّحَادُ قُوَّةٌ → cooperation; مَنْ جَدَّ وَجَدَ → perseverance). Other website cards: مَنْ جَدَّ وَجَدَ · الأَمَانَةُ ضَرُورِيَّةٌ فِي العَمَلِ · التَّعَلُّمُ المُسْتَمِرُّ يُطَوِّرُ المَهَارَاتِ.',
  },
  sorterCats: ['Effort and patience', 'Teamwork and quality'],
  sorterNotes: 'Then say which proverb you would give to (a) a student who gives up, (b) a group that argues.',
  patch: {
    mission: null,
    sorter: {
      title: 'Which value does it teach?', instructions: 'Sort the proverbs and values: effort and patience, or teamwork and quality?',
      categories: ['Effort and patience', 'Teamwork and quality'],
      items: [
        { label: 'مَنْ جَدَّ وَجَدَ', answer: 0 }, { label: 'الصَّبْرُ مِفْتَاحُ الفَرَجِ', answer: 0 }, { label: 'لَا تُؤَجِّلْ عَمَلَ اليَوْمِ', answer: 0 }, { label: 'المُثَابَرَةُ', answer: 0 },
        { label: 'الاِتِّحَادُ قُوَّةٌ', answer: 1 }, { label: 'الإِتْقَانُ أَسَاسُ النَّجَاحِ', answer: 1 }, { label: 'التَّعَاوُنُ', answer: 1 }, { label: 'الجَوْدَةُ', answer: 1 },
      ],
    },
    mistakes: [
      { wrong: 'اِجْتَهِدْ فِي عَمَلِكِ يَا مَرْيَمُ.', right: 'اِجْتَهِدِي فِي عَمَلِكِ يَا مَرْيَمُ.', why: 'To a girl: -ī on the command.' },
      { wrong: 'لَا تُؤَجِّلُ عَمَلَ اليَوْمِ إِلَى الغَدِ.', right: 'لَا تُؤَجِّلْ عَمَلَ اليَوْمِ إِلَى الغَدِ.', why: 'A prohibition takes the jussive.' },
      { wrong: 'يَعْنِي هٰذَا المَثَلُ الجُهْدُ يُؤَدِّي إِلَى النَّجَاحِ.', right: 'يَعْنِي هٰذَا المَثَلُ أَنَّ الجُهْدَ يُؤَدِّي إِلَى النَّجَاحِ.', why: 'Add anna before the clause.' },
    ],
    grammar: {
      common_error: 'Do not translate a proverb word for word: explain its message (يَعْنِي … أَنَّ …), and use the jussive after لَا الناهية (teacher wording: the website common error for this lesson is generic).',
      quiz: [
        L('Give “work hard” to a girl.', ['اِجْتَهِدِي', 'اِجْتَهِدْ', 'اِجْتَهِدُوا'], 'To a girl: -ī.'),
        L('Which is a prohibition (don’t …)?', ['لَا تُؤَجِّلْ', 'سَأُؤَجِّلُ', 'أُؤَجِّلُ'], 'lā + jussive.'),
        L('What does مَنْ جَدَّ وَجَدَ mean?', ['whoever strives succeeds', 'unity is strength', 'knowledge is light'], 'jadda = strove; wajada = found.'),
        L('Complete: يَعْنِي هٰذَا المَثَلُ ___ الصَّبْرَ مُهِمٌّ.', ['أَنَّ', 'لِأَنَّ', 'مَنْ'], 'yaʿnī … anna.'),
        L('Which proverb fits a team that cooperates?', ['الاِتِّحَادُ قُوَّةٌ', 'العِلْمُ نُورٌ', 'الصَّبْرُ مِفْتَاحُ الفَرَجِ'], 'Unity is strength.'),
        L('What does الاِنْضِبَاطُ mean?', ['discipline', 'perseverance', 'quality'], 'A work value.'),
        L('Complete: يَنْطَبِقُ هٰذَا المَثَلُ ___ فَرِيقِ العَمَلِ.', ['عَلَى', 'فِي', 'إِلَى'], 'yanṭabiqu ʿalā = applies to.'),
        L('Which value adjective matches الأَمَانَةُ?', ['أَمِينٌ', 'مُنَظَّمٌ', 'طَمُوحٌ'], 'amāna → amīn.'),
      ],
    },
    final: [
      L('Give “don’t neglect” to a girl.', ['لَا تُهْمِلِي', 'لَا تُهْمِلْ', 'لَا تُهْمِلُوا'], 'Girl: lā tuhmilī.'),
      L('Which proverb is about not postponing work?', ['لَا تُؤَجِّلْ عَمَلَ اليَوْمِ إِلَى الغَدِ', 'العِلْمُ نُورٌ', 'الاِتِّحَادُ قُوَّةٌ'], 'Today / tomorrow.'),
      L('Which sentence explains a proverb?', ['يَعْنِي هٰذَا المَثَلُ أَنَّ التَّعَاوُنَ يُقَوِّي الفَرِيقَ.', 'هٰذَا مَثَلٌ جَمِيلٌ.', 'أُحِبُّ هٰذَا المَثَلَ.'], 'yaʿnī … anna + message.'),
      L('What does الإِتْقَانُ أَسَاسُ النَّجَاحِ mean?', ['mastery is the basis of success', 'patience is the key', 'knowledge is light'], 'itqān = mastery.'),
    ],
    listening: {
      questions: [
        L('Why was Saeed late finishing his project?', ['he put off the work every day', 'he was ill', 'he lost his notes'], 'كَانَ يُؤَجِّلُ العَمَلَ كُلَّ يَوْمٍ'),
        L('What happened when he rushed?', ['he made many mistakes', 'he finished early', 'he won a prize'], 'ارْتَكَبَ أَخْطَاءً كَثِيرَةً'),
        L('Which proverb did his teacher use?', ['don’t put off today’s work until tomorrow', 'whoever strives succeeds', 'knowledge is light'], 'لَا تُؤَجِّلْ عَمَلَ اليَوْمِ إِلَى الغَدِ'),
        L('What did Layla’s team do?', ['shared the tasks and cooperated', 'worked alone', 'asked the teacher to help'], 'قَسَّمَ المَهَامَّ وَتَعَاوَنَ'),
        L('What was the result?', ['their project succeeded', 'their project was late', 'they argued'], 'فَنَجَحَ مَشْرُوعُهُمْ'),
        L('Which proverb fits Layla’s team?', ['unity is strength', 'patience is the key to relief', 'whoever strives succeeds'], 'الاِتِّحَادُ قُوَّةٌ'),
      ],
    },
    reading: {
      questions: [
        L('Which three work values are named?', ['honesty, mastery and responsibility', 'speed, money and fame', 'luck, patience and leadership'], 'الأَمَانَةَ وَالإِتْقَانَ وَتَحَمُّلَ المَسْؤُولِيَّةِ'),
        L('What does an honest worker NOT do?', ['hide his mistake', 'arrive on time', 'check his work'], 'لَا يُخْفِي خَطَأَهُ'),
        L('What does a careful worker do?', ['reviews his work before handing it in', 'works very fast', 'asks others to check it'], 'يُرَاجِعُ عَمَلَهُ قَبْلَ أَنْ يُسَلِّمَهُ'),
        L('What does مَنْ جَدَّ وَجَدَ remind us?', ['success does not come by luck alone', 'luck is everything', 'work is not important'], 'لَا يَأْتِي بِالحَظِّ وَحْدَهُ'),
        L('When is patience important?', ['when facing a difficult project', 'when on holiday', 'when the work is easy'], 'عِنْدَ مُوَاجَهَةِ مَشْرُوعٍ صَعْبٍ'),
        L('What is the main message?', ['work ethics are more than arriving on time', 'punctuality is the only value', 'proverbs are old-fashioned'], 'لَا تَقْتَصِرُ … عَلَى الحُضُورِ فِي المَوْعِدِ'),
      ],
    },
    speaking: {
      context: 'Which proverb do you live by?',
      model: [
        ['A', 'مَا المَثَلُ المُفَضَّلُ لَدَيْكَ؟', 'What is your favourite proverb?'],
        ['B', '«مَنْ جَدَّ وَجَدَ»، لِأَنَّهُ يَعْنِي أَنَّ الجُهْدَ يُؤَدِّي إِلَى النَّجَاحِ.', '“Whoever strives succeeds”, because it means effort leads to success.'],
        ['A', 'عَلَى مَنْ يَنْطَبِقُ؟', 'Who does it apply to?'],
        ['B', 'يَنْطَبِقُ عَلَى الطُّلَّابِ قَبْلَ الاِمْتِحَانَاتِ؛ لَا تُؤَجِّلُوا المُرَاجَعَةَ!', 'It applies to students before exams — don’t put off revision!'],
      ],
    },
    writing: {
      prompt: 'Explain two Arabic proverbs and apply each one to a work or study situation.',
      model: 'فِي اللُّغَةِ العَرَبِيَّةِ أَمْثَالٌ كَثِيرَةٌ عَنِ العَمَلِ وَالنَّجَاحِ. المَثَلُ الأَوَّلُ هُوَ «مَنْ جَدَّ وَجَدَ»، وَيَعْنِي أَنَّ الجُهْدَ يُؤَدِّي إِلَى النَّجَاحِ، وَأَنَّ النَّجَاحَ لَا يَأْتِي بِالحَظِّ وَحْدَهُ. يَنْطَبِقُ هٰذَا المَثَلُ عَلَى الطُّلَّابِ قَبْلَ الاِمْتِحَانَاتِ، لِأَنَّ المُرَاجَعَةَ المُنْتَظِمَةَ تُحَسِّنُ النَّتَائِجَ. أَمَّا المَثَلُ الثَّانِي فَهُوَ «الاِتِّحَادُ قُوَّةٌ»، وَيَعْنِي أَنَّ التَّعَاوُنَ يَجْعَلُ الفَرِيقَ أَقْوَى. عَلَى سَبِيلِ المِثَالِ، نَجَحَ مَشْرُوعُ فَرِيقِنَا لِأَنَّنَا قَسَّمْنَا المَهَامَّ. نَصِيحَتِي لِكُلِّ طَالِبٍ: اِجْتَهِدْ، وَلَا تُؤَجِّلْ عَمَلَ اليَوْمِ إِلَى الغَدِ.',
    },
  },
  hints: ['Maryam is a girl: which ending?', 'Statement or advice? -u or no vowel?', 'What is missing before the clause?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 6.\nListen for: يُؤَجِّلُ · لَا تُؤَجِّلْ · الاِتِّحَادُ.',
  listenRoutes: 'Core: questions 1, 3 and 6. Develop / Stretch: all 6.',
  gloss: [
    ['تَأَخَّرَ سَعِيدٌ فِي إِنْجَازِ مَشْرُوعِهِ لِأَنَّهُ كَانَ يُؤَجِّلُ العَمَلَ كُلَّ يَوْمٍ.', 'Saeed was late finishing his project because he used to put off the work every day.'],
    ['فِي النِّهَايَةِ اضْطُرَّ إِلَى العَمَلِ بِسُرْعَةٍ وَارْتَكَبَ أَخْطَاءً كَثِيرَةً.', 'In the end he had to work quickly and made many mistakes.'],
    ['نَصَحَهُ مُدَرِّسُهُ بِقَوْلِهِ: «لَا تُؤَجِّلْ عَمَلَ اليَوْمِ إِلَى الغَدِ».', 'His teacher advised him: “Don’t put off today’s work until tomorrow.”'],
    ['أَمَّا فَرِيقُ لَيْلَى فَقَدْ قَسَّمَ المَهَامَّ وَتَعَاوَنَ، فَنَجَحَ مَشْرُوعُهُمْ؛', 'As for Layla’s team, they divided the tasks and cooperated, so their project succeeded;'],
    ['وَهُنَا يَنْطَبِقُ مَثَلُ «الاِتِّحَادُ قُوَّةٌ».', 'and here the proverb “Unity is strength” applies.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا المَثَلُ المُفَضَّلُ لَدَيْكَ؟' },
      { route: 'core', ar: 'مَاذَا يَعْنِي هٰذَا المَثَلُ؟' },
      { route: 'develop', ar: 'عَلَى مَنْ يَنْطَبِقُ هٰذَا المَثَلُ؟' },
      { route: 'stretch', ar: 'مَا نَصِيحَتُكَ لِطَالِبٍ يُؤَجِّلُ وَاجِبَاتِهِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'المَثَلُ المُفَضَّلُ لَدَيَّ هُوَ « ______ ».' },
      { route: 'core', ar: 'يَعْنِي هٰذَا المَثَلُ أَنَّ ______ .' },
      { route: 'develop', ar: 'يَنْطَبِقُ عَلَى ______ لِأَنَّ ______ .' },
      { route: 'stretch', ar: 'لَا ______ ، وَ ______ !' },
    ],
    modelEn: ['What is your favourite proverb?', '“Whoever strives succeeds”, because it means effort leads to success.'],
    notes: 'Teacher-written prompts and model (the website prompts are generic). Model continues: A: عَلَى مَنْ يَنْطَبِقُ؟ B: يَنْطَبِقُ عَلَى الطُّلَّابِ قَبْلَ الاِمْتِحَانَاتِ؛ لَا تُؤَجِّلُوا المُرَاجَعَةَ! (to a group: -ū). To a girl: مَا المَثَلُ المُفَضَّلُ لَدَيْكِ؟',
  },
  write: {
    core: { amount: '5 sentences', how: 'One proverb: say it, give its meaning, one situation, one piece of advice (do / don’t).' },
    develop: { amount: '80–100 words', how: 'Two proverbs with yaʿnī … anna, one case each, and advice.' },
    stretch: { amount: '100–120 words', how: 'Website task: explain two proverbs and apply each to a real work or study situation, with justification.' },
  },
  frames: {
    core: [
      { en: 'The Arabic proverb says: “…”', ar: 'يَقُولُ المَثَلُ العَرَبِيُّ: « ______ ».' },
      { en: 'This proverb means that …', ar: 'يَعْنِي هٰذَا المَثَلُ أَنَّ ______ .' },
      { en: 'It applies to …', ar: 'يَنْطَبِقُ عَلَى ______ .' },
      { en: 'My advice: work hard and don’t …', ar: 'نَصِيحَتِي: اِجْتَهِدْ، وَلَا ______ .' },
    ],
    develop: [
      { en: 'As for the second proverb, it is …', ar: 'أَمَّا المَثَلُ الثَّانِي فَهُوَ « ______ ».' },
      { en: 'because …', ar: 'لِأَنَّ ______ .' },
      { en: 'For example, …', ar: 'عَلَى سَبِيلِ المِثَالِ، ______ .' },
      { en: 'Success does not come by luck alone.', ar: 'النَّجَاحُ لَا يَأْتِي بِالحَظِّ وَحْدَهُ.' },
    ],
    bank: ['مَنْ جَدَّ وَجَدَ', 'الصَّبْرُ مِفْتَاحُ الفَرَجِ', 'الاِتِّحَادُ قُوَّةٌ', 'يَعْنِي … أَنَّ', 'يَنْطَبِقُ عَلَى', 'اِجْتَهِدْ', 'اِجْتَهِدِي', 'لَا تُؤَجِّلْ', 'لَا تُهْمِلْ', 'المُثَابَرَةُ', 'الأَمَانَةُ', 'الإِتْقَانُ'],
  },
  stretch: [
    ['أَخْلَاقِيَّاتُ العَمَلِ', 'work ethics'],
    ['لَا يُخْفِي خَطَأَهُ', 'he does not hide his mistake'],
    ['يُرَاجِعُ عَمَلَهُ قَبْلَ أَنْ يُسَلِّمَهُ', 'he checks his work before handing it in'],
    ['لَا يَأْتِي بِالحَظِّ وَحْدَهُ', 'does not come by luck alone'],
    ['عِنْدَ مُوَاجَهَةِ مَشْرُوعٍ صَعْبٍ', 'when facing a difficult project'],
  ],
  modelEn: 'Arabic has many proverbs about work and success. The first proverb is “Whoever strives succeeds”: it means that effort leads to success, and that success does not come by luck alone. It applies to students before exams, because regular revision improves results. The second proverb is “Unity is strength”: it means that cooperation makes a team stronger. For example, our team’s project succeeded because we divided the tasks. My advice to every student: work hard, and don’t put off today’s work until tomorrow.',
  find: ['a proverb in quotation marks', 'yaʿnī … anna', 'yanṭabiqu ʿalā + a case', 'a command and a prohibition'],
  modelNotes: 'Teacher-written model (the website model for this lesson is a placeholder). Evidence: «مَنْ جَدَّ وَجَدَ» · وَيَعْنِي أَنَّ الجُهْدَ … · يَنْطَبِقُ … عَلَى الطُّلَّابِ لِأَنَّ … · «الاِتِّحَادُ قُوَّةٌ» · عَلَى سَبِيلِ المِثَالِ · اِجْتَهِدْ، وَلَا تُؤَجِّلْ.',
  selfCheck: [
    { route: 'core', text: 'I quoted a proverb accurately.' },
    { route: 'core', text: 'My command fits the listener (boy / girl).' },
    { route: 'develop', text: 'I explained the message with anna.' },
    { route: 'develop', text: 'My prohibition is jussive (no final -u).' },
    { route: 'stretch', text: 'Each proverb has a real case and a reason.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['لَا تَقْتَصِرُ عَلَى', 'is not limited to'], ['أَخْلَاقِيَّاتُ العَمَلِ', 'work ethics'], ['الحُضُورِ فِي المَوْعِدِ', 'arriving on time'], ['تَشْمَلُ', 'includes'], ['تَحَمُّلَ المَسْؤُولِيَّةِ', 'taking responsibility'],
    ['لَا يُخْفِي', 'does not hide'], ['المُتْقِنُ', 'the skilled / careful one'], ['يُسَلِّمَهُ', 'hands it in'], ['بِالحَظِّ وَحْدَهُ', 'by luck alone'], ['مُوَاجَهَةِ', 'facing'],
  ],
  prep: {
    words: [['مُتَطَلَّبَاتُ الوَظِيفَةِ', 'job requirements', '—'], ['المُؤَهِّلَاتُ', 'qualifications', 'sing. مُؤَهِّلٌ'], ['يُشْتَرَطُ', 'is required', '—'], ['مَرْجِعٌ', 'a reference', 'pl. مَرَاجِعُ'], ['إِجَادَةُ اللُّغَاتِ', 'language proficiency', '—']],
    questionEn: 'Think of a job advert you have seen. What did it ask for? Write two requirements.',
    questionAr: 'يُشْتَرَطُ … · المُؤَهِّلَاتُ: …',
    homework: {
      core: 'Learn three proverbs by heart with their meanings; write the 4-frame paragraph for one.',
      develop: 'Two proverbs (80–100 words) with meaning, case and advice.',
      stretch: 'Website writing task: explain and apply two proverbs (100–120 words).',
    },
    wordsSource: 'The five words come from the website D3-L08 vocabulary (job adverts and requirements).',
  },
  remember: 'Remember: proverb → meaning (anna) → real case → advice: do (-ī for a girl) / don’t (lā + jussive).',
});

module.exports = { meta, slides };
