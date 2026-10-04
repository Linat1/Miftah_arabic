'use strict';
/* GM-NUM-01 · Numbers — website: Mastery & Revision › Numeracy Mastery 01 (two digit systems ٠–٩ and 0–9, numbers written left to right;
 * traps ٥ / 0 and ٦ / 7; counting 0–10; building 11–19 (unit + ʿashara), the tens (-ūna; ʿishrūna from ʿashara) and compounds
 * (unit + wa + ten: khamsatun wa-ʿishrūna); ordinals first–tenth (fāʿil, al-awwal / al-ūlā) and clock times; agreement: 1–2 follow the
 * noun, 3–10 take the opposite gender of the singular with a genitive plural, 11–99 singular accusative (Stretch); reading, dictation,
 * speaking, writing). The website quizzes are interactive and not stored, so all questions are teacher-written on the website content.
 * Spelling: the deck uses modern مِئَة; the website’s مِائَة is an accepted older spelling. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'numeracy__numbers__numeracy-mastery-01-numbers';

const meta = G.meta({
  code: 'GM-NUM-01', fileTitle: 'Numbers', title: 'Numbers', arabic: 'الْأَرْقَامُ',
  focus: 'Read both digit systems (٥ = 5, ٦ = 6), count to 100, build compounds “five and twenty” (khamsatun wa-ʿishrūna = 25), use ordinals (al-awwal, ath-thānī) — and flip the gender for 3–10: thalāthatu awlādin but thalāthu banātin.',
  icon: 'FaCalculator',
});

const slides = G.gmLesson({
  code: 'GM-NUM-01', site: KEY,
  support: `• Core: the digits ٠–٩ ↔ 0–9 and the words 0–10; numbers 11–100 by pattern; ordinals first–fifth. Develop: compound numbers 21–99 (unit FIRST: خَمْسَةٌ وَعِشْرُونَ) and agreement for 1–2 (كِتَابٌ وَاحِدٌ) and 3–10 (ثَلَاثَةُ كُتُبٍ / ثَلَاثُ سَيَّارَاتٍ). Stretch: 11–99 + singular accusative noun (عِشْرُونَ طَالِبًا) and repairing complex errors.
• Website traps: ٥ looks like 0 but is 5; ٦ looks like 7 but is 6. Numbers are written left to right, even inside Arabic text (٢٠٢٦ = 2026).
• Golden rule for 3–10 (website): ask “what is the SINGULAR? Is it masculine or feminine?” — then flip.`,
  teach: 'Digits; building 11–100; agreement rules; ordinals.',
  wedo: 'Ordinals and time; sort ة on / ة off; repair.',
  next: { nextCode: 'GM-NUM-02', nextTitle: 'Telling the Time', nextAr: 'الْوَقْتُ' },
  doNow: {
    questions: [
      q('What is ٥ in Western digits?', ['5', '0', '6'], 'Website trap: the ring is five.'),
      q('What is ٦ in Western digits?', ['6', '7', '2'], 'Website trap: ٦ looks like 7.'),
      q('Choose “three”.', ['ثَلَاثَةٌ', 'ثَمَانِيَةٌ', 'ثَانِي'], 'thalātha.'),
      q('What is the singular of كُتُبٌ?', ['كِتَابٌ', 'كَاتِبٌ', 'مَكْتَبٌ'], 'Broken plural (GM-N-05).'),
      q('Which noun is feminine?', ['سَيَّارَةٌ', 'كِتَابٌ', 'يَوْمٌ'], 'Tāʾ marbūṭa.'),
    ],
    keyIdea: { text: 'Say the unit FIRST, then wa + the ten: 25 = five and twenty. For 3–10, the number takes the OPPOSITE gender of the singular noun.', ar: '{k|خَمْسَةٌ وَعِشْرُونَ} ‖ {e|ثَلَاثَةُ} أَوْلَادٍ · {e|ثَلَاثُ} بَنَاتٍ' },
    retrieves: 'Teacher-written retrieval: digits (website traps), GM-N-05 broken plurals and noun gender.',
  },
  objectives: ['Switch between ٠–٩ and 0–9.', 'Say and write numbers to 100, including compounds.', 'Use ordinals first to tenth.', 'Apply number–noun agreement for 1–2 and 3–10.'],
  routes: {
    core: ['I read ٤٥ as 45 and say khamsatun wa-arbaʿūna.', 'I count to ten and use ordinals 1st–5th.'],
    develop: ['I build compounds: unit + wa + ten.', 'I flip the gender for 3–10.'],
    stretch: ['I use 11–99 with a singular accusative noun.', 'I repair complex number errors.'],
  },
  terms: {
    items: [
      { ar: 'الرَّقْمُ', en: 'digit / number', note: '٧ · 7' },
      { ar: 'الْعَدَدُ', en: 'number (word)', note: 'سَبْعَةٌ' },
      { ar: 'الْمَعْدُودُ', en: 'the counted noun', note: 'ثَلَاثَةُ كُتُبٍ' },
      { ar: 'الْعَدَدُ التَّرْتِيبِيُّ', en: 'ordinal number', note: 'الْأَوَّلُ · الثَّانِي' },
      { ar: 'الْمُخَالَفَةُ', en: 'gender flip (3–10)', note: 'ثَلَاثُ بَنَاتٍ' },
      { ar: 'التَّمْيِيزُ', en: 'noun after 11–99 (singular)', note: 'عِشْرُونَ طَالِبًا' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Numbers · part 1 · two digit systems, one story (website tables)', title: 'Digits and the first numbers', ar: 'الْأَرْقَامُ الْهِنْدِيَّةُ وَالْغَرْبِيَّةُ', ltr: true,
      cols: [{ label: 'Digit', w: 1.2 }, { label: 'Hindi', w: 1.3, size: 26 }, { label: 'Word', w: 3.6, size: 24 }, { label: 'Digit', w: 1.2 }, { label: 'Hindi', w: 1.3, size: 26 }, { label: 'Word', w: 3.73, size: 24 }],
      rows: [
        { core: true, cells: ['0', '٠', 'صِفْرٌ', '6', '٦', 'سِتَّةٌ'] },
        { core: true, cells: ['1', '١', 'وَاحِدٌ', '7', '٧', 'سَبْعَةٌ'] },
        { core: true, cells: ['2', '٢', 'اِثْنَانِ', '8', '٨', 'ثَمَانِيَةٌ'] },
        { core: true, cells: ['3', '٣', 'ثَلَاثَةٌ', '9', '٩', 'تِسْعَةٌ'] },
        { core: true, cells: ['4', '٤', 'أَرْبَعَةٌ', '10', '١٠', 'عَشَرَةٌ'] },
        { core: true, cells: ['5', '٥', 'خَمْسَةٌ', '100', '١٠٠', 'مِئَةٌ'] },
      ],
      foot: 'Website key facts: numbers are written LEFT to right, even inside Arabic (٢٠٢٦ = 2026). Traps: ٥ looks like 0 but is 5; ٦ looks like 7 but is 6 — “the dot is zero, the ring is five”.',
      notes: 'PART 1 (3 min) — website “Two digit systems” and “Counting 0–10”. Faith hooks (website): khamsa — five daily prayers; sabʿa — seven verses of al-Fātiḥa.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Numbers · part 2 · building 11–100 (website patterns)', title: 'Three patterns build every number', ar: 'مِنْ أَحَدَ عَشَرَ إِلَى مِئَةٍ', ltr: true,
      cols: [{ label: 'Figure', w: 1.4 }, { label: 'Hindi', w: 1.6, size: 24 }, { label: 'Words', w: 5.0, size: 24 }, { label: 'Pattern', w: 4.33 }],
      rows: [
        { core: true, cells: ['11', '١١', 'أَحَدَ عَشَرَ', 'teens: unit + ʿashara'] },
        { cells: ['12', '١٢', 'اِثْنَا عَشَرَ', 'teens (both parts fatḥa)'] },
        { core: true, cells: ['15', '١٥', 'خَمْسَةَ عَشَرَ', 'teens'] },
        { core: true, cells: ['20', '٢٠', 'عِشْرُونَ', 'tens: -ūna (20 from ʿashara)'] },
        { cells: ['40', '٤٠', 'أَرْبَعُونَ', 'tens: unit + -ūna'] },
        { core: true, cells: ['25', '٢٥', 'خَمْسَةٌ وَعِشْرُونَ', 'unit FIRST + wa + ten'] },
        { cells: ['105', '١٠٥', 'مِئَةٌ وَخَمْسَةٌ', 'hundreds come first'] },
      ],
      foot: 'Website trap: when you HEAR khamsatun wa-ʿishrūna, do not write 52 — you hear “5 and 20”, you write 25.',
      notes: 'PART 2 (4 min) — website “Building 11–100 and beyond”. English link: “four-and-twenty blackbirds”.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Numbers · part 3 · the golden rules of agreement (website tables) · Develop / Stretch', title: 'Follow (1–2) — flip (3–10)', ar: 'الْعَدَدُ وَالْمَعْدُودُ', ltr: true,
      cols: [{ label: 'Rule', w: 2.4 }, { label: 'Example', w: 4.0, size: 24 }, { label: 'Meaning', w: 2.4 }, { label: 'Why', w: 3.53 }],
      rows: [
        { core: true, cells: ['1 · follows', 'كِتَابٌ وَاحِدٌ · سَيَّارَةٌ وَاحِدَةٌ', 'one book · one car', 'after the noun, same gender'] },
        { cells: ['2 · follows', 'بِنْتَانِ اثْنَتَانِ', 'two girls', 'dual + same gender'] },
        { core: true, cells: ['3–10 · flip', 'ثَلَاثَةُ أَوْلَادٍ', 'three boys', 'walad masc. → number with ة'] },
        { core: true, cells: ['3–10 · flip', 'ثَلَاثُ بَنَاتٍ', 'three girls', 'bint fem. → number without ة'] },
        { cells: ['3–10 · flip', 'سَبْعَةُ أَيَّامٍ · عَشْرُ دَقَائِقَ', 'seven days · ten minutes', 'singular first, then flip'] },
        { cells: ['11–99 (Stretch)', 'عِشْرُونَ طَالِبًا', 'twenty students', 'singular noun with -an'] },
      ],
      foot: 'Website #1 mistake: students look at the plural and panic. Ask: what is the SINGULAR — masculine or feminine? Then flip. 3–10: number BEFORE a genitive plural noun.',
      notes: 'PART 3 (3 min) — website “The Golden Rules of agreement”. Magnet image: opposites attract.',
    },
  ],
  quick: [
    q('What is ٢٧?', ['27', '72', '25'], 'Numbers are read left to right.'),
    q('You hear خَمْسَةٌ وَعِشْرُونَ. You write …', ['25', '52', '205'], '“Five and twenty”.'),
    q('Choose “three boys”.', ['ثَلَاثَةُ أَوْلَادٍ', 'ثَلَاثُ أَوْلَادٍ', 'ثَلَاثَةُ وَلَدٍ'], 'Walad is masculine → number with ة.'),
    q('Choose “ten minutes”.', ['عَشْرُ دَقَائِقَ', 'عَشَرَةُ دَقَائِقَ', 'عَشْرُ دَقِيقَةٍ'], 'Daqīqa is feminine → number without ة.'),
  ],
  quickNote: 'teacher-written hinge questions on the website rules.',
  ido: {
    title: 'Watch me write numbers about myself',
    steps: [
      { head: 'Age (Stretch)', ar: 'خَمْسَ عَشْرَةَ سَنَةً', think: 'sana fem. → teens flip.' },
      { head: 'House', ar: 'رَقْمُ ٢٧', think: 'Read left to right.' },
      { head: 'Class', ar: 'ثَمَانِيَةَ عَشَرَ طَالِبًا', think: '11–99: singular -an.' },
      { head: 'Books', ar: 'ثَلَاثَةُ كُتُبٍ', think: 'kitāb masc. → ة on.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'NUMBER', e: 'COUNTED NOUN' },
    model: 'اِسْمِي سَلْمَى، وَعُمْرِي {k|خَمْسَ عَشْرَةَ} {e|سَنَةً}. أَسْكُنُ فِي الْبَيْتِ رَقْمِ ٢٧. فِي فَصْلِي {k|ثَمَانِيَةَ عَشَرَ} {e|طَالِبًا}، وَعِنْدِي {k|ثَلَاثَةُ} {e|كُتُبٍ} عَرَبِيَّةٍ.',
    modelEn: 'My name is Salmā, and I am fifteen years old. I live at house number 27. There are eighteen students in my class, and I have three Arabic books.',
    notes: 'Website reading “Information hunt” (rakam → raqmi after a genitive: al-bayti raqmi 27 — website writes raqma; both are heard).',
  },
  models: [
    { ar: 'الدَّرْسُ الْأَوَّلُ · السَّنَةُ الْأُولَى', en: 'the first lesson · the first year', tip: 'Ordinal follows the noun.' },
    { ar: 'السَّاعَةُ الثَّالِثَةُ', en: 'three o’clock', tip: 'sāʿa fem. → ordinal fem.' },
    { ar: 'عِنْدِي أَرْبَعَةُ إِخْوَةٍ.', en: 'I have four brothers.', tip: 'akh masc. → ة on.' },
    { ar: 'فِي الْبَيْتِ خَمْسُ غُرَفٍ.', en: 'There are five rooms in the house.', tip: 'ghurfa fem. → ة off.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · ordinal numbers (website table) · say it aloud', title: 'First, second, third …', ar: 'الْأَعْدَادُ التَّرْتِيبِيَّةُ', ltr: true, stage: 'wedo',
      cols: [{ label: 'English', w: 2.0 }, { label: 'with a masc. noun', w: 2.8, size: 24 }, { label: 'with a fem. noun', w: 2.8, size: 24 }, { label: 'Example', w: 4.73, size: 22 }],
      rows: [
        { core: true, cells: ['first', 'الْأَوَّلُ', 'الْأُولَى', 'الدَّرْسُ الْأَوَّلُ'] },
        { core: true, cells: ['second', 'الثَّانِي', 'الثَّانِيَةُ', 'الْمَرَّةُ الثَّانِيَةُ'] },
        { core: true, cells: ['third', 'الثَّالِثُ', 'الثَّالِثَةُ', 'الطَّابِقُ الثَّالِثُ'] },
        { cells: ['fourth', 'الرَّابِعُ', 'الرَّابِعَةُ', 'السَّاعَةُ الرَّابِعَةُ'] },
        { cells: ['fifth', 'الْخَامِسُ', 'الْخَامِسَةُ', 'الصَّفُّ الْخَامِسُ'] },
        { cells: ['tenth', 'الْعَاشِرُ', 'الْعَاشِرَةُ', 'السَّاعَةُ الْعَاشِرَةُ'] },
      ],
      foot: 'Website: from second to tenth, ordinals follow fāʿil (thālith, rābiʿ, khāmis). Only al-awwal / al-ūlā is irregular — like English one → first. Clock times use the feminine: as-sāʿatu th-thālithatu.',
      notes: 'WE DO (3 min) — website “Ordinal numbers”. Cover a column; students supply it.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · website “Flip or follow?” · 3–10', title: 'Number with ة, or without?', ar: 'بِالتَّاءِ أَمْ بِدُونِهَا؟',
      categories: ['ة on (masc. singular noun)', 'ة off (fem. singular noun)'],
      items: [['ثَلَاثَةُ كُتُبٍ', 0], ['أَرْبَعَةُ أَيَّامٍ', 0], ['خَمْسَةُ أَقْلَامٍ', 0], ['سِتَّةُ طُلَّابٍ', 0], ['ثَلَاثُ سَيَّارَاتٍ', 1], ['عَشْرُ دَقَائِقَ', 1], ['سَبْعُ بَنَاتٍ', 1], ['أَرْبَعُ غُرَفٍ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). For each card students say the singular (kitāb, yawm, qalam, ṭālib · sayyāra, daqīqa, bint, ghurfa).',
    },
  ],
  mistakes: [
    { wrong: 'ثَلَاثُ أَوْلَادٍ', right: 'ثَلَاثَةُ أَوْلَادٍ', why: 'Walad is masculine → the number takes ة.' },
    { wrong: 'خَمْسَةُ سَيَّارَاتٍ', right: 'خَمْسُ سَيَّارَاتٍ', why: 'Sayyāra is feminine → the number drops ة.' },
    { wrong: 'عِشْرُونَ وَخَمْسَةٌ', right: 'خَمْسَةٌ وَعِشْرُونَ', why: 'Unit first, then wa + ten.' },
  ],
  hints: ['Singular masc. or fem.?', 'Singular masc. or fem.?', 'Which comes first?'],
  practice: [
    q('Choose “the second time”.', ['الْمَرَّةُ الثَّانِيَةُ', 'الْمَرَّةُ الثَّانِي', 'الثَّانِي مَرَّةٌ'], 'Marra fem. → thāniya.'),
    q('Choose 31 in words.', ['وَاحِدٌ وَثَلَاثُونَ', 'ثَلَاثُونَ وَوَاحِدٌ', 'ثَلَاثَةَ عَشَرَ'], 'Unit + wa + ten.'),
    q('Choose “seven days”.', ['سَبْعَةُ أَيَّامٍ', 'سَبْعُ أَيَّامٍ', 'سَبْعَةُ يَوْمٍ'], 'Yawm masc. → ة on, plural noun.'),
    q('Choose “twenty students” (Stretch).', ['عِشْرُونَ طَالِبًا', 'عِشْرُونَ طُلَّابٍ', 'عِشْرِينَ طَالِبٌ'], '11–99: singular accusative.'),
  ],
  practiceLabel: 'teacher-written questions on the website rules',
  read: {
    title: 'The stationery shop — maktabat an-Nūr', label: 'website reading task (price list)',
    text: 'مَكْتَبَةُ النُّورِ — قَائِمَةُ الْأَسْعَارِ: قَلَمٌ: ٣ جُنَيْهَاتٍ. دَفْتَرٌ: ١٢ جُنَيْهًا. حَقِيبَةٌ: ٤٥ جُنَيْهًا. قَامُوسٌ: ٩٩ جُنَيْهًا. اِشْتَرَى أَحْمَدُ قَلَمًا وَدَفْتَرًا، وَاشْتَرَتْ أُخْتُهُ الْحَقِيبَةَ. الْمَكْتَبَةُ فِي الطَّابِقِ الثَّانِي، وَتُغْلَقُ فِي السَّاعَةِ الثَّامِنَةِ.',
    glossary: [['قَائِمَةُ الْأَسْعَارِ', 'price list'], ['جُنَيْهٌ', 'pound'], ['دَفْتَرٌ', 'notebook'], ['قَامُوسٌ', 'dictionary'], ['الطَّابِقِ', 'the floor']],
    task: 'Website: read the Hindi-Arabic prices, then answer. Write one price in words.',
    questions: [
      q('How much does the notebook cost?', ['12 pounds', '21 pounds', '3 pounds'], '١٢ = ithnā ʿashara junayhan.'),
      q('How much did Aḥmad pay in total?', ['15 pounds', '12 pounds', '48 pounds'], '3 + 12 = khamsata ʿashara junayhan.'),
      q('Which item costs 45 pounds?', ['the bag', 'the dictionary', 'the pen'], '٤٥ = 45.'),
      q('Which floor is the shop on?', ['the second', 'the eighth', 'the first'], 'Aṭ-ṭābiq ath-thānī.'),
    ],
    qNote: 'Website reading task (price list) extended into a short text; questions adapted from the website answers.',
  },
  speak: {
    title: 'Speaking: my number world', source: 'website speaking task',
    prompts: [
      { route: 'core', ar: 'كَمْ عُمْرُكَ؟ وَمَا رَقْمُ بَيْتِكَ؟' },
      { route: 'develop', ar: 'كَمْ شَخْصًا فِي أُسْرَتِكَ؟ وَكَمْ أَخًا وَأُخْتًا عِنْدَكَ؟' },
      { route: 'stretch', ar: 'قَدِّمْ «عَالَمَ أَرْقَامِكَ»: سِتَّةُ أَرْقَامٍ عَلَى الْأَقَلِّ.' },
    ],
    stems: [
      { route: 'core', ar: 'عُمْرِي ______ سَنَةً، وَرَقْمُ بَيْتِي ______ .' },
      { route: 'develop', ar: 'فِي أُسْرَتِي ______ أَشْخَاصٍ، وَعِنْدِي ______ .' },
      { route: 'stretch', ar: 'أَنَا فِي الصَّفِّ ______ ، وَأَسْتَيْقِظُ فِي السَّاعَةِ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'كَمْ أَخًا عِنْدَكِ؟', en: 'How many brothers do you have? (to a girl)' },
      { who: 'B', ar: 'عِنْدِي ثَلَاثَةُ إِخْوَةٍ وَأُخْتَانِ. أَنَا الْبِنْتُ الْأُولَى فِي الْأُسْرَةِ، وَعُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً.', en: 'I have three brothers and two sisters. I am the first girl in the family, and I am fourteen.' },
    ],
    notes: 'Website: at least six numbers — age, a house / bus / phone number, people or objects, a price, an ordinal, a number above 100. Listening (website): dictate a phone number digit by digit.',
  },
  write: {
    siteTask: 'Write 7–9 Arabic sentences using both digit systems and at least two cardinal numbers, one ordinal, one agreement pattern, one compound number and one real-life detail.',
    core: { amount: '3 sentences', task: 'Website scaffold: age, house number, family.', how: 'ʿumrī … sana · raqm … · fī ʿāʾilatī …' },
    develop: { amount: '6 sentences', task: 'Add a compound number and two 3–10 phrases.', how: 'Flip: ة on / ة off.' },
    stretch: { amount: '7–9 sentences', task: 'Website connected number paragraph.', how: 'One 11–99 + singular noun.' },
  },
  frames: {
    core: [
      { en: 'I am … years old', ar: 'عُمْرِي ______ سَنَةً.' },
      { en: 'I live at house number …', ar: 'أَسْكُنُ فِي الْبَيْتِ رَقْمِ ______ .' },
      { en: 'There are … people in my family', ar: 'فِي عَائِلَتِي ______ أَشْخَاصٍ.' },
      { en: 'I am in Year …', ar: 'أَنَا فِي الصَّفِّ ______ .' },
    ],
    develop: [
      { en: 'I have … brothers', ar: 'عِنْدِي ______ إِخْوَةٍ.' },
      { en: 'There are … rooms in our house', ar: 'فِي بَيْتِنَا ______ غُرَفٍ.' },
      { en: 'My phone number is …', ar: 'رَقْمُ هَاتِفِي ______ .' },
      { en: 'The bag costs …', ar: 'ثَمَنُ الْحَقِيبَةِ ______ جُنَيْهًا.' },
    ],
    bank: ['وَاحِدٌ', 'اِثْنَانِ', 'ثَلَاثَةٌ / ثَلَاثُ', 'خَمْسَةٌ / خَمْسُ', 'عَشَرَةٌ / عَشْرُ', 'أَحَدَ عَشَرَ', 'عِشْرُونَ', 'خَمْسَةٌ وَعِشْرُونَ', 'مِئَةٌ', 'الْأَوَّلُ', 'الثَّانِي', 'الثَّالِثُ'],
  },
  stretchTask: {
    task: 'Website “Hot” task: write «عَائِلَتِي وَأَرْقَامِي» — age, house number, family size, brothers and sisters, wake-up time, with an ordinal.',
    checklist: ['Both digit systems (٢٧ and 27).', 'Two cardinal numbers in words.', 'One compound number (unit + wa + ten).', 'One 3–10 phrase with the gender flip.', 'One ordinal (al-awwal, ath-thāniya …).'],
    phrases: [['عُمْرِي', 'my age'], ['رَقْمُ', 'number (of)'], ['الْأَكْبَرُ / الْأَصْغَرُ', 'the oldest / youngest'], ['فِي السَّاعَةِ', 'at … o’clock'], ['أَشْخَاصٍ', 'people'], ['كُلَّ يَوْمٍ', 'every day']],
  },
  model: {
    text: 'عَائِلَتِي وَأَرْقَامِي: عُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً، وَأَنَا فِي الصَّفِّ الثَّامِنِ. أَسْكُنُ فِي الْبَيْتِ رَقْمِ ٣٤. فِي عَائِلَتِي سِتَّةُ أَشْخَاصٍ: أَبِي وَأُمِّي وَثَلَاثَةُ إِخْوَةٍ وَأَنَا. أَنَا الْبِنْتُ الْأُولَى، وَأَخِي الْأَصْغَرُ عُمْرُهُ خَمْسُ سَنَوَاتٍ. فِي بَيْتِنَا أَرْبَعُ غُرَفٍ. أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ، وَأَمْشِي إِلَى الْمَدْرَسَةِ عِشْرِينَ دَقِيقَةً. فِي فَصْلِي خَمْسَةٌ وَعِشْرُونَ طَالِبًا.',
    en: 'My family and my numbers: I am thirteen and I am in Year 8. I live at house number 34. There are six people in my family: my father, my mother, three brothers and me. I am the first daughter, and my youngest brother is five years old. There are four rooms in our house. I wake up at six o’clock, and I walk to school for twenty minutes. There are twenty-five students in my class.',
    find: ['ة on (masc.)', 'ة off (fem.)', 'compound number', 'ordinal'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'I can switch ٠–٩ and 0–9 (٥ = 5, ٦ = 6).' },
    { route: 'core', text: 'I said compounds unit first: khamsatun wa-ʿishrūna.' },
    { route: 'develop', text: 'For 3–10 I checked the singular, then flipped.' },
    { route: 'develop', text: 'My ordinals agree with the noun.' },
    { route: 'stretch', text: 'After 11–99 I used a singular noun with -an.' },
  ],
  exit: [
    q('What is ٥٦?', ['56', '06', '75'], 'The ring is five; ٦ is six.'),
    q('Choose “three cars”.', ['ثَلَاثُ سَيَّارَاتٍ', 'ثَلَاثَةُ سَيَّارَاتٍ', 'ثَلَاثُ سَيَّارَةٍ'], 'Fem. singular → number without ة.'),
    q('Choose “the first year”.', ['السَّنَةُ الْأُولَى', 'السَّنَةُ الْأَوَّلُ', 'الْأُولَى سَنَةٌ'], 'Fem. ordinal follows the noun.'),
  ],
  mastery: false,
  prep: {
    words: [['السَّاعَةُ', 'the hour / o’clock', 'السَّاعَةُ الْخَامِسَةُ'], ['النِّصْفُ', 'half', 'وَالنِّصْفُ'], ['الرُّبْعُ', 'quarter', 'وَالرُّبْعُ'], ['إِلَّا', 'to (minus)', 'إِلَّا رُبْعًا'], ['دَقِيقَةٌ', 'minute', 'عَشْرُ دَقَائِقَ']],
    questionEn: 'You know as-sāʿatu th-thālithatu = 3 o’clock. How do you think you say “half past three”?',
    questionAr: 'السَّاعَةُ الثَّالِثَةُ ______',
    homework: {
      core: 'Website “Mild”: numbers 1–20 three ways (digit, Hindi digit, word).',
      develop: 'Website “Spicy”: eight 3–10 sentences, labelled ة on / ة off.',
      stretch: 'Website “Hot”: «عَائِلَتِي وَأَرْقَامِي».',
    },
    wordsSource: 'The five words prepare GM-NUM-02 (website Numeracy Mastery 02: time).',
  },
  remember: 'Remember: ٥ = 5, ٦ = 6 · numbers read left to right · 25 = khamsatun wa-ʿishrūna · 1–2 follow the noun · 3–10 flip the gender of the singular · ordinals match the noun (al-awwal / al-ūlā).',
});

module.exports = { meta, slides };
