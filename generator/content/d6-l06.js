'use strict';
/* D6-L06 · Arabic Around the World — The Language’s Global Reach — website: Pathways › Development › D6 › D6-L06 (statistical verbs يُعَدُّ مِنْ · يَبْلُغُ · يُمَثِّلُ,
 * numbers with مِلْيُونِ + singular genitive, direct-object verbs يُثْرِي · يُوَسِّعُ · يُمَثِّلُ — no preposition; loanwords الجَبْرُ · سُكَّرٌ · صِفْرٌ …; qualifying historical claims).
 * Website vocabulary, rules, quiz, sorter, listening, reading, speaking and writing used as published; the connector عِلَاوَةً shown as عَلَاوَةً; the third
 * website mistake mixes an English word into the Arabic line, so it is replaced with a direct-object slip; English added to the patterns and speaking model.
 * The website visual game (flags) repeats D6-L01, so it is skipped. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D6')({
  n: 6, fileTitle: 'Arabic_Around_the_World', chip: 'Culture',
  title: 'Arabic Around the World — The Language’s Global Reach', arabic: 'العَرَبِيَّةُ حَوْلَ العَالَمِ',
  focus: 'Argue for Arabic like an expert: its status (تُعَدُّ مِنْ أَكْثَرِ اللُّغَاتِ انْتِشَارًا · إِحْدَى لُغَاتِ الأُمَمِ المُتَّحِدَةِ), its numbers (مَلَايِينُ المُتَحَدِّثِينَ), the words it gave the world (الجَبْرُ · سُكَّرٌ · صِفْرٌ) and what it does for you (تُثْرِي تَفْكِيرِي · تُوَسِّعُ آفَاقِي).',
  icon: 'FaLanguage', iconSet: 'fa6',
});

const fix = (v) => (typeof v === 'string' ? v.replace(/عِلَاوَةً/g, 'عَلَاوَةً')
  : Array.isArray(v) ? v.map(fix) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, fix(x)])) : v);
const site = fix(D.site('D6-L06'));
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D6-L06', {
  support: `• Core: five sentences on Arabic’s status with تُعَدُّ مِنْ / يَبْلُغُ and two loanwords. Develop: add an accurate number phrase (مَلَايِينُ · أَرْبَعُمِئَةِ مِلْيُونِ مُتَحَدِّثٍ) and يُمَثِّلُ + object. Stretch: the website 80–90-word argument with يُثْرِي / يُوَسِّعُ and a qualified historical claim.
• Motivation lesson: our students learn Arabic first as لُغَةُ القُرْآنِ الكَرِيمِ — this lesson adds the global, academic and professional reasons. Ask: “What does Arabic open for YOU?”
• Accuracy (website): say a word REACHED another language; do not claim an exact route unless checked. Fun extension: English / Urdu words from Arabic (algebra, sugar, coffee, cotton, zero · کتاب، قلم، دنیا).`,
  teach: 'Statistical verbs, million + genitive, direct-object verbs.',
  wedo: 'Sort statistics / loanwords / argument verbs, fix slips, then why one student chose Arabic.',
  next: { nextCode: 'D6-L07', nextTitle: 'D6 Grammar Consolidation — All Tenses Together', nextAr: 'تَرْسِيخُ القَوَاعِدِ — جَمِيعُ الأَزْمِنَةِ مَعًا' },
  objectives: ['Describe Arabic’s status with تُعَدُّ مِنْ · يَبْلُغُ · يُمَثِّلُ.', 'Say large numbers with مِلْيُونِ + singular genitive.', 'Use يُثْرِي / يُوَسِّعُ / يُمَثِّلُ with a direct object (no preposition).', 'Name words that travelled from Arabic and qualify historical claims.'],
  rulesAr: 'لُغَةُ الإِحْصَاءِ وَالمَفْعُولُ بِهِ',
  flexGroups: [],
  mistakes: [
    { wrong: 'تُمَثِّلُ العَرَبِيَّةُ بِجِسْرٍ بَيْنَ الثَّقَافَاتِ.', right: 'تُمَثِّلُ العَرَبِيَّةُ جِسْرًا بَيْنَ الثَّقَافَاتِ.', why: 'yumaththilu takes a direct object, not a preposition.' },
    { wrong: 'أَرْبَعُمِئَةِ مِلْيُونَ مُتَحَدِّثُونَ.', right: 'أَرْبَعُمِئَةِ مِلْيُونِ مُتَحَدِّثٍ.', why: 'After milyūn: a singular genitive noun.' },
    { wrong: 'يُوَسِّعُ تَعَلُّمُ اللُّغَاتِ بِآفَاقِنَا.', right: 'يُوَسِّعُ تَعَلُّمُ اللُّغَاتِ آفَاقَنَا.', why: 'yuwassiʿu takes a direct object (-a), no preposition.' },
  ],
  doNow: {
    questions: [
      q('What does مُتَحَدِّثٌ mean?', ['a speaker', 'a translator', 'a language'], 'Prepared at home (D6-L05).'),
      q('What does كَلِمَاتٌ مُسْتَعَارَةٌ mean?', ['loanwords', 'key words', 'new words'], 'Prepared at home (D6-L05).'),
      q('What does يُثْرِي mean?', ['it enriches', 'it represents', 'it reaches'], 'Prepared at home (D6-L05).'),
      q('Choose the accurate comparative.', ['لَنْدَنُ أَكْبَرُ مِنْ مَدِينَتِي.', 'لَنْدَنُ أَكْثَرُ أَكْبَرُ مِنْ مَدِينَتِي.', 'لَنْدَنُ الأَكْبَرُ مِنْ مَدِينَتِي.'], 'D6-L05.'),
      q('Complete: انْخَفَضَ الاسْتِهْلَاكُ ___ ١٨٪.', ['بِنِسْبَةِ', 'مِنْ نِسْبَةِ', 'نِسْبَةُ'], 'D4-L08 / L10: statistics.'),
    ],
    keyIdea: { text: 'Arabic: counted among the most widespread languages — and it widens your horizons.', ar: '{k|تُعَدُّ} العَرَبِيَّةُ {k|مِنْ} أَكْثَرِ اللُّغَاتِ انْتِشَارًا · {e|تُوَسِّعُ} {w|آفَاقَنَا}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D6-L05. Question 4 retrieves the D6-L05 comparative; question 5 retrieves D4 statistical language.',
  },
  routes: {
    core: ['I can say Arabic’s status with تُعَدُّ مِنْ.', 'I can name two words that came from Arabic.'],
    develop: ['I can say a large number accurately.', 'I can use يُمَثِّلُ + object.'],
    stretch: ['I can argue why Arabic is worth learning.', 'I can qualify a historical claim.'],
  },
  bridge: [
    { ar: 'كِتَابٌ · قَلَمٌ · دُنْيَا', urdu: 'کتاب · قلم · دنیا', tr: 'kitāb · qalam · dunyā', en: 'book · pen · world — Arabic words in Urdu' },
    { ar: 'سُكَّرٌ', urdu: 'شکر', tr: 'shakkar', en: 'sugar (English sugar via Arabic)' },
    { ar: 'قَهْوَةٌ', urdu: 'قہوہ', tr: 'qahwa', en: 'Urdu: green tea · Arabic: coffee' },
    { ar: 'تَرْجَمَةٌ', urdu: 'ترجمہ', tr: 'tarjuma', en: 'translation' },
    { ar: 'لُغَةٌ', urdu: 'لغت', tr: 'lughat', en: 'Urdu: a dictionary · Arabic: a language' },
  ],
  bridgeNotes: 'URDU BRIDGE: thousands of Urdu words come from Arabic — Urdu is living proof of today’s lesson. CAREFUL: Urdu قہوہ = green / herbal tea, Arabic قَهْوَةٌ = coffee; Urdu لغت = a dictionary, Arabic لُغَةٌ = a language (a dictionary is قَامُوسٌ / مُعْجَمٌ).',
  core: ['لُغَةٌ رَسْمِيَّةٌ', 'لُغَةُ الأُمَمِ المُتَّحِدَةِ', 'مُتَحَدِّثٌ / مُتَحَدِّثُونَ', 'يُعَدُّ مِنْ', 'يَبْلُغُ', 'يُمَثِّلُ', 'لُغَةُ القُرْآنِ الكَرِيمِ', 'الجَبْرُ', 'سُكَّرٌ', 'صِفْرٌ', 'يُثْرِي', 'يُوَسِّعُ'],
  vocabNotes: {
    0: 'Status and statistics: three verbs carry almost every statistical sentence — يُعَدُّ مِنْ (is counted among) · يَبْلُغُ (reaches) · يُمَثِّلُ (represents).',
    1: 'Words that travelled: say a word REACHED another language (وَصَلَتْ إِلَى) — the exact route is not always certain.',
    2: 'Why it is worth learning: يُثْرِي · يُوَسِّعُ · يَفْتَحُ take a DIRECT object (no preposition).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · statistical language (website rules 1–2)', title: 'Status and numbers', ar: 'المَكَانَةُ وَالأَرْقَامُ',
      cols: [{ label: 'Pattern', w: 3.0, size: 22 }, { label: 'Example (website)', w: 6.6, size: 22 }, { label: 'Check', w: 2.73 }],
      rows: [
        { core: true, cells: ['يُعَدُّ {k|مِنْ}', P('تُعَدُّ العَرَبِيَّةُ {k|مِنْ} أَكْثَرِ اللُّغَاتِ انْتِشَارًا.', 'Arabic is among the most widespread languages.'), 'min + genitive plural'] },
        { core: true, cells: ['إِحْدَى', P('هِيَ {e|إِحْدَى} لُغَاتِ الأُمَمِ المُتَّحِدَةِ.', 'It is one of the UN languages.'), 'one of (f.)'] },
        { cells: ['يَبْلُغُ', P('يَبْلُغُ عَدَدُ المُتَحَدِّثِينَ مَلَايِينَ كَثِيرَةً.', 'Speakers number many millions.'), 'a figure'] },
        { cells: ['مِلْيُونِ مُتَحَدِّثٍ', P('أَرْبَعُمِئَةِ {w|مِلْيُونِ مُتَحَدِّثٍ}', 'four hundred million speakers'), 'singular genitive'] },
        { core: true, cells: ['مِنْ أَقْدَمِ', P('مِنْ {k|أَقْدَمِ} اللُّغَاتِ الحَيَّةِ', 'one of the oldest living languages'), 'superlative'] },
      ],
      ltr: true,
      foot: 'Website teaching point: “Formal statistics have their own verbs.”',
      notes: `GRAMMAR PART 1 — website rules “يُعَدُّ مِنْ” (a passive verb placing something within a group; the following noun is genitive) and “Numbers with مِلْيُون” (مِلْيُون behaves as the counted noun and is followed by a singular genitive).
Website mistake: أَرْبَعُمِئَةِ مِلْيُونَ مُتَحَدِّثُونَ ✗ → مِلْيُونِ مُتَحَدِّثٍ. Islamic link: إِنَّا أَنْزَلْنَاهُ قُرْآنًا عَرَبِيًّا (Yūsuf 12:2).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · direct-object verbs (website rules 3–4) · Develop / Stretch', title: 'No preposition after these', ar: 'المَفْعُولُ بِهِ',
      cards: [
        { chip: 'REPRESENTS · DEVELOP', color: '1D5FBF', head: 'تُمَثِّلُ جِسْرًا', big: 'تُمَثِّلُ العَرَبِيَّةُ جِسْرًا بَيْنَ الثَّقَافَاتِ.', en: 'Arabic represents a bridge between cultures.', clue: 'No bi-.' },
        { chip: 'ENRICHES · CORE', color: '1E6B52', head: 'تُثْرِي تَفْكِيرَنَا', big: 'تُثْرِي اللُّغَةُ تَفْكِيرَنَا.', en: 'Language enriches our thinking.', clue: 'Object in -a.' },
        { chip: 'BROADENS · STRETCH', color: '6B4C9A', head: 'يُوَسِّعُ · يَفْتَحُ أَبْوَابًا', big: 'يُوَسِّعُ تَعَلُّمُ اللُّغَاتِ آفَاقَنَا.', en: 'Learning languages broadens our horizons.', clue: 'Object in -a.' },
      ],
      error: { text: 'Website mistake: yumaththilu takes a direct object.', pairs: [['تُمَثِّلُ جِسْرًا', 'تُمَثِّلُ بِجِسْرٍ']] },
      notes: `GRAMMAR PART 2 — website rules “يُمَثِّلُ with a direct object” and “يُثْرِي and يُوَسِّعُ” (both take direct objects; do not add a preposition). Website common error: adding a preposition after يُمَثِّلُ، يُثْرِي or يُوَسِّعُ.
Website teaching point (qualifying): “Say that a word reached another language; avoid claiming an exact path unless you have checked it.”`,
    },
  ],
  quick: [0, 2, 3, 6],
  rest: [1, 4, 5, 7],
  ido: {
    title: 'Watch me argue for Arabic',
    steps: [
      { head: 'Status', ar: '{k|تُعَدُّ} العَرَبِيَّةُ {k|مِنْ} أَكْثَرِ اللُّغَاتِ', think: 'Counted among.' },
      { head: 'Number', ar: 'يَبْلُغُ عَدَدُ المُتَحَدِّثِينَ {w|مَلَايِينَ}', think: 'A figure.' },
      { head: 'Loanwords', ar: 'الجَبْرُ · القَهْوَةُ · السُّكَّرُ', think: 'Words that travelled.' },
      { head: 'Argument', ar: '{e|تُوَسِّعُ} آفَاقِي', think: 'Direct object.' },
    ],
    legend: ['k', 'w', 'e'], legendLabels: { k: 'STATUS', w: 'FIGURE', e: 'ARGUMENT' },
    model: '{k|تُعَدُّ} العَرَبِيَّةُ {k|مِنْ} أَكْثَرِ اللُّغَاتِ انْتِشَارًا فِي العَالَمِ، وَهِيَ إِحْدَى لُغَاتِ الأُمَمِ المُتَّحِدَةِ الرَّسْمِيَّةِ. وَيَبْلُغُ عَدَدُ المُتَحَدِّثِينَ بِهَا {w|مَلَايِينَ كَثِيرَةً}. أَتَعَلَّمُ العَرَبِيَّةَ لِأَنَّهَا {e|تُثْرِي} تَفْكِيرِي وَ{e|تُوَسِّعُ} آفَاقِي.',
    modelEn: 'Arabic is among the most widespread languages in the world, and it is one of the official UN languages. The number of its speakers reaches many millions. I learn Arabic because it enriches my thinking and broadens my horizons.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Status verb + min; figure with yablughu; argument verb + direct object, no preposition.” Then add a personal reason: وَهِيَ لُغَةُ القُرْآنِ الكَرِيمِ.',
  },
  patternEn: ['Arabic is among the most widespread languages', 'four hundred million speakers', 'it broadens our horizons'],
  sorterNotes: 'Then use one item from each column in a sentence about why YOU learn Arabic.',
  patch: {
    vocab: site.vocab, grammar: site.grammar, listening: site.listening, reading: site.reading, writing: site.writing, final: site.final, patterns: site.patterns,
    speaking: {
      ...site.speaking,
      model: [
        ['A', 'مَا مَكَانَةُ العَرَبِيَّةِ فِي العَالَمِ؟', 'What is Arabic’s standing in the world?'],
        ['B', 'تُعَدُّ مِنْ أَكْثَرِ اللُّغَاتِ انْتِشَارًا، وَهِيَ إِحْدَى لُغَاتِ الأُمَمِ المُتَّحِدَةِ.', 'It is among the most widespread languages, and it is one of the UN languages.'],
        ['A', 'وَلِمَاذَا تَتَعَلَّمُهَا أَنْتَ؟', 'And why do you learn it?'],
        ['B', 'لِأَنَّهَا تُوَسِّعُ آفَاقِي وَتَفْتَحُ أَبْوَابًا فِي التَّرْجَمَةِ، وَقَدْ وَصَلَتْ كَلِمَاتٌ مِثْلُ الجَبْرِ وَالقَهْوَةِ إِلَى لُغَاتٍ أُخْرَى.', 'Because it broadens my horizons and opens doors in translation — and words like algebra and coffee reached other languages.'],
      ],
    },
  },
  patchNote: 'the connector عِلَاوَةً shown as عَلَاوَةً, one mixed-script website mistake replaced, and English added to the patterns and speaking model; the website visual game repeats D6-L01 and is skipped.',
  hints: ['yumaththilu + preposition?', 'After milyūn: singular or plural?', 'yuwassiʿu: object in -a or -u?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nStatus → reasons → loanwords.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5 — and list the loanwords you hear.',
  gloss: [
    ['تُعَدُّ العَرَبِيَّةُ مِنْ أَكْثَرِ اللُّغَاتِ انْتِشَارًا فِي العَالَمِ، وَهِيَ إِحْدَى لُغَاتِ الأُمَمِ المُتَّحِدَةِ الرَّسْمِيَّةِ.', 'Arabic is among the most widespread languages in the world, and it is one of the official UN languages.'],
    ['وَيَبْلُغُ عَدَدُ المُتَحَدِّثِينَ بِهَا مَلَايِينَ كَثِيرَةً فِي قَارَّاتٍ مُخْتَلِفَةٍ.', 'Its speakers number many millions on different continents.'],
    ['اخْتَرْتُ دِرَاسَتَهَا لِأَنَّهَا تَفْتَحُ أَبْوَابًا فِي التَّرْجَمَةِ وَالدِّبْلُومَاسِيَّةِ وَالتِّجَارَةِ.', 'I chose to study it because it opens doors in translation, diplomacy and trade.'],
    ['وَقَدْ فَاجَأَنِي أَنَّ كَلِمَاتٍ كَثِيرَةً وَصَلَتْ مِنَ العَرَبِيَّةِ إِلَى لُغَاتٍ أُخْرَى، مِثْلَ الجَبْرِ وَالكِيمْيَاءِ وَالقَهْوَةِ وَالسُّكَّرِ وَالصِّفْرِ.', 'It surprised me that many words reached other languages from Arabic, like algebra, chemistry, coffee, sugar and zero.'],
    ['تُثْرِي اللُّغَةُ تَفْكِيرِي، وَتُوَسِّعُ آفَاقِي، وَتُمَثِّلُ جِسْرًا بَيْنِي وَبَيْنَ ثَقَافَاتٍ جَدِيدَةٍ.', 'The language enriches my thinking, broadens my horizons, and represents a bridge between me and new cultures.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا مَكَانَةُ العَرَبِيَّةِ فِي العَالَمِ؟ اِسْتَعْمِلْ يُعَدُّ مِنْ.' },
      { route: 'develop', ar: 'اِذْكُرْ كَلِمَتَيْنِ وَصَلَتَا مِنَ العَرَبِيَّةِ إِلَى لُغَاتٍ أُخْرَى.' },
      { route: 'stretch', ar: 'لِمَاذَا تَتَعَلَّمُ العَرَبِيَّةَ؟ اِسْتَعْمِلْ يُثْرِي أَوْ يُوَسِّعُ.' },
    ],
    stems: [
      { route: 'core', ar: 'تُعَدُّ العَرَبِيَّةُ مِنْ ______ ، وَهِيَ إِحْدَى ______ .' },
      { route: 'develop', ar: 'وَصَلَتْ كَلِمَاتٌ مِثْلُ ______ وَ ______ إِلَى لُغَاتٍ أُخْرَى.' },
      { route: 'stretch', ar: 'أَتَعَلَّمُ العَرَبِيَّةَ لِأَنَّهَا تُوَسِّعُ ______ وَ ______ .' },
    ],
    modelEn: ['What is Arabic’s standing in the world?', 'It is among the most widespread languages, and it is one of the UN languages.'],
    notes: 'Website prompts and model (order adjusted: status → loanwords → personal argument). Every student has a real reason — the Qur’an, family, travel, a future career. To a girl: تَتَعَلَّمِينَ · اِذْكُرِي · اِسْتَعْمِلِي.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Arabic’s status with تُعَدُّ مِنْ / يَبْلُغُ + two loanwords.' },
    develop: { amount: '60–70 words', how: 'Add an accurate number phrase and يُمَثِّلُ + object.' },
    stretch: { amount: '80–90 words', how: 'Website task: two statistical verbs · two loanwords · an argument with يُثْرِي / يُوَسِّعُ · a qualification.' },
  },
  frames: {
    core: [
      { en: 'Arabic is among the most … languages.', ar: 'تُعَدُّ العَرَبِيَّةُ مِنْ أَكْثَرِ اللُّغَاتِ ______ .' },
      { en: 'It is one of the UN languages.', ar: 'هِيَ إِحْدَى لُغَاتِ الأُمَمِ المُتَّحِدَةِ.' },
      { en: 'Its speakers number …', ar: 'يَبْلُغُ عَدَدُ المُتَحَدِّثِينَ بِهَا ______ .' },
      { en: 'Words like … reached other languages.', ar: 'وَصَلَتْ كَلِمَاتٌ مِثْلُ ______ إِلَى لُغَاتٍ أُخْرَى.' },
    ],
    develop: [
      { en: 'Arabic represents …', ar: 'تُمَثِّلُ العَرَبِيَّةُ ______ .' },
      { en: 'I learn Arabic because it enriches …', ar: 'أَتَعَلَّمُ العَرَبِيَّةَ لِأَنَّهَا تُثْرِي ______ .' },
      { en: 'It opens doors in …', ar: 'تَفْتَحُ أَبْوَابًا فِي ______ .' },
      { en: 'The route is not entirely clear, but …', ar: 'لَيْسَ الطَّرِيقُ وَاضِحًا تَمَامًا، وَلٰكِنَّ ______ .' },
    ],
    bank: ['تُعَدُّ مِنْ', 'إِحْدَى', 'يَبْلُغُ', 'مَلَايِينَ', 'مِلْيُونِ مُتَحَدِّثٍ', 'تُمَثِّلُ', 'تُثْرِي', 'تُوَسِّعُ آفَاقِي', 'تَفْتَحُ أَبْوَابًا', 'الجَبْرُ · السُّكَّرُ · الصِّفْرُ', 'لُغَةُ القُرْآنِ الكَرِيمِ', 'التَّرْجَمَةُ'],
  },
  stretch: [
    ['مِنْ أَقْدَمِ اللُّغَاتِ الحَيَّةِ وَأَوْسَعِهَا انْتِشَارًا', 'among the oldest and most widespread living languages'],
    ['عَبْرَ التِّجَارَةِ وَالتَّرْجَمَةِ وَالعُلُومِ', 'through trade, translation and the sciences'],
    ['انْتَقَلَ مَعَ نِظَامِ الأَرْقَامِ', 'moved with the number system'],
    ['وَلٰكِنَّ التَّأْثِيرَ اللُّغَوِيَّ ثَابِتٌ', 'but the linguistic influence is certain'],
    ['قِيمَةً مِهْنِيَّةً فِي التَّرْجَمَةِ وَالدِّبْلُومَاسِيَّةِ', 'professional value in translation and diplomacy'],
  ],
  modelEn: 'Arabic is among the most widespread languages in the world, and it is one of the official UN languages. Its speakers number many millions on different continents. Arabic words reached other languages through trade and translation, such as algebra, chemistry, coffee and sugar. The route is not entirely clear in every case, but the influence is certain. I learn Arabic because it enriches my thinking and broadens my horizons, and it has professional value in translation and diplomacy.',
  find: ['تُعَدُّ مِنْ + genitive plural', 'a figure with يَبْلُغُ', 'loanwords', 'تُثْرِي / تُوَسِّعُ + direct object'],
  modelNotes: 'Website writing model. Evidence: تُعَدُّ … مِنْ أَكْثَرِ اللُّغَاتِ · إِحْدَى لُغَاتِ الأُمَمِ المُتَّحِدَةِ · يَبْلُغُ عَدَدُ … مَلَايِينَ · الجَبْرِ وَالكِيمْيَاءِ وَالقَهْوَةِ وَالسُّكَّرِ · لَيْسَ الطَّرِيقُ وَاضِحًا تَمَامًا · تُثْرِي تَفْكِيرِي وَتُوَسِّعُ آفَاقِي · تُمَثِّلُ قِيمَةً مِهْنِيَّةً.',
  selfCheck: [
    { route: 'core', text: 'I used تُعَدُّ مِنْ with a genitive plural.' },
    { route: 'core', text: 'I named two loanwords accurately.' },
    { route: 'develop', text: 'After مِلْيُونِ my noun is singular genitive.' },
    { route: 'develop', text: 'No preposition after يُمَثِّلُ / يُثْرِي / يُوَسِّعُ.' },
    { route: 'stretch', text: 'I qualified a historical claim.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['أَقْدَمِ اللُّغَاتِ الحَيَّةِ', 'the oldest living languages'], ['أَوْسَعِهَا انْتِشَارًا', 'the most widespread'], ['عَبْرَ التِّجَارَةِ', 'through trade'], ['التَّرْجَمَاتِ العِلْمِيَّةِ', 'scientific translations'], ['القُطْنُ', 'cotton'],
    ['نِظَامِ الأَرْقَامِ', 'the number system'], ['غَيَّرَ الحِسَابَ', 'changed calculation'], ['قِيمَةً مِهْنِيَّةً', 'professional value'], ['سَلَكَتْهُ', 'it followed (a route)'], ['ثَابِتٌ', 'established, certain'],
  ],
  prep: {
    words: [['مُرَاجَعَةٌ شَامِلَةٌ', 'a comprehensive review', '—'], ['الاِسْمُ المَوْصُولُ', 'the relative pronoun', '—'], ['لَنْ + verb', 'will not', 'لَنْ أَنْسَى'], ['شَرِيطَةَ أَنْ', 'provided that', '—'], ['إِتْقَانٌ', 'mastery', '—']],
    questionEn: 'Write one sentence about yourself in the past, one in the present and one in the future.',
    questionAr: 'كُنْتُ … · أَنَا الآنَ … · سَـ …',
    homework: {
      core: 'Learn 12 words on Arabic’s reach; write five sentences.',
      develop: 'A 60–70-word paragraph with a number phrase and يُمَثِّلُ.',
      stretch: 'Website writing task: an 80–90-word argument for learning Arabic.',
    },
    wordsSource: 'The five words come from the website D6-L07 vocabulary (grammar consolidation: all tenses together).',
  },
  remember: 'Remember: تُعَدُّ مِنْ + genitive plural · مِلْيُونِ + singular genitive · يُمَثِّلُ / يُثْرِي / يُوَسِّعُ + direct object — and qualify what you can’t prove.',
});

module.exports = { meta, slides };
