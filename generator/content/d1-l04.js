'use strict';
/* D1-L04 · Before and After — Sequencing My Day — website: Pathways › Development › D1 › D1-L04 (قَبْلَ / بَعْدَ + noun, قَبْلَ أَنْ / بَعْدَ أَنْ + subjunctive, five verbs lose ن). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D1')({
  n: 4, fileTitle: 'Before_and_After', chip: 'Before and After',
  title: 'Before and After — Sequencing My Day', arabic: 'قَبْلَ وَبَعْدَ — تَرْتِيبُ يَوْمِي',
  focus: 'Sequence a whole day with قَبْلَ / بَعْدَ + noun and قَبْلَ أَنْ / بَعْدَ أَنْ + verb, and notice the verb ending that changes after أَنْ.',
  icon: 'FaArrowRightArrowLeft', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D1-L04', {
  support: `• Core: ONE decision only — is the next word a NOUN (no أَنْ) or a VERB (use أَنْ)? Core students may write noun structures (قَبْلَ النَّوْمِ، بَعْدَ المَدْرَسَةِ) plus one learnt chunk: قَبْلَ أَنْ أَنَامَ.
• Develop: control the singular subjunctive (final ḍamma → fatḥa) in a paragraph. Stretch: the five verbs lose ن (تُكْمِلِينَ → أَنْ تُكْمِلِي).
• The ending is colour-coded pink on every grammar slide: students only need to watch the LAST letter.
• Recycling: frequency (D1-L03), time (D1-L02) and the D1-L01 routine verbs.
• Urdu bridge: قبل، بعد، فوراً، دوران / اثنا (اثناء)، آخر.`,
  teach: 'Noun or verb after before/after? Then the ending that changes after أَنْ.',
  wedo: 'Picture match, sort noun/verb, fix and listen.',
  next: { nextCode: 'D1-L05', nextTitle: 'After School and Evening Routine', nextAr: 'بَعْدَ المَدْرَسَةِ وَرُوتِينُ المَسَاءِ' },
  doNow: {
    questions: [
      q('What does قَبْلَ أَنْ mean?', ['before (+ verb)', 'after (+ verb)', 'when'], 'Prepared at home.'),
      q('What does أَسْتَرِيحُ mean?', ['I rest', 'I revise', 'I return'], 'Prepared at home.'),
      q('What does نَادِرًا mean?', ['rarely', 'always', 'daily'], 'D1-L03 frequency ladder.'),
      q('Choose the accurate sentence.', ['أَتَمَرَّنُ يَوْمِيًّا، بَيْنَمَا تَتَمَرَّنُ أُخْتِي أُسْبُوعِيًّا.', 'أَتَمَرَّنُ يَوْمِيًّا، بَيْنَمَا أَتَمَرَّنُ أُخْتِي أُسْبُوعِيًّا.', 'أَتَمَرَّنُ يَوْمِيًّا، بَيْنَمَا يَتَمَرَّنُ أُخْتِي أُسْبُوعِيًّا.'], 'D1-L03: after بَيْنَمَا the verb matches its own subject.'),
      q('Which is half past four?', ['الرَّابِعَةُ وَالنِّصْفُ', 'الرَّابِعَةُ إِلَّا الرُّبْعَ', 'الخَامِسَةُ وَالنِّصْفُ'], 'D1-L02 time.', { ar: '٤:٣٠', arBig: true }),
    ],
    keyIdea: { text: 'قَبْلَ / بَعْدَ + a noun: nothing extra. قَبْلَ أَنْ / بَعْدَ أَنْ + a verb: the verb ending changes.', ar: 'قَبْلَ {k|النَّوْمِ}  ←→  قَبْلَ {k|أَنْ} أَنَا{e|مَ}' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home. Questions 3–5 retrieve D1-L03 (frequency, بَيْنَمَا) and D1-L02 (time).',
  },
  routes: {
    core: ['I can say before/after with a noun (قَبْلَ النَّوْمِ).', 'I can order five actions in my afternoon.'],
    develop: ['I can use قَبْلَ أَنْ / بَعْدَ أَنْ with the correct ending.', 'I can say once / twice / three times.'],
    stretch: ['I can drop the final ن of the five verbs after أَنْ.', 'I can join eight actions into one paragraph.'],
  },
  bridge: [
    { ar: 'قَبْلَ', urdu: 'قبل', tr: 'qabl', en: 'before' },
    { ar: 'بَعْدَ', urdu: 'بعد', tr: "ba'd", en: 'after' },
    { ar: 'فَوْرَ', urdu: 'فوراً', tr: 'fauran', en: 'immediately' },
    { ar: 'أَثْنَاءَ', urdu: 'اثنا', tr: 'isnā', en: 'during (in the meantime)' },
    { ar: 'فِي النِّهَايَةِ', urdu: 'نہایت', tr: 'nihāyat', en: 'Urdu: extremely · Arabic: the end' },
  ],
  bridgeNotes: 'URDU BRIDGE: قبل / بعد are identical (قبل از، بعد میں). فوراً (immediately) → فَوْرَ أَنْ. اثنا (اس اثنا میں = meanwhile) → أَثْنَاءَ (during). نہایت is a FALSE FRIEND: Urdu “extremely”, Arabic النِّهَايَةُ = the end (فِي النِّهَايَةِ = in the end).',
  core: ['قَبْلَ أَنْ', 'بَعْدَ أَنْ', 'عِنْدَمَا', 'بَعْدَ ذٰلِكَ', 'فِي النِّهَايَةِ', 'أُكْمِلُ وَاجِبِي', 'أَسْتَرِيحُ', 'أُرَاجِعُ دُرُوسِي', 'أُسَاعِدُ أُسْرَتِي'],
  forms: {
    'أُرَاجِعُ دُرُوسِي': { tag: 'I · he · she', forms: [{ l: 'he', ar: 'يُرَاجِعُ' }, { l: 'she', ar: 'تُرَاجِعُ' }, { l: 'after an', ar: 'أَنْ أُرَاجِعَ' }] },
    'أُكْمِلُ وَاجِبِي': { tag: 'I · he · she', forms: [{ l: 'he', ar: 'يُكْمِلُ' }, { l: 'she', ar: 'تُكْمِلُ' }, { l: 'after an', ar: 'أَنْ أُكْمِلَ' }] },
    'أَسْتَرِيحُ': { tag: 'I · he · she', forms: [{ l: 'he', ar: 'يَسْتَرِيحُ' }, { l: 'she', ar: 'تَسْتَرِيحُ' }, { l: 'after an', ar: 'أَنْ أَسْتَرِيحَ' }] },
    'أَتَمَرَّنُ': { tag: 'I · he · she', forms: [{ l: 'he', ar: 'يَتَمَرَّنُ' }, { l: 'she', ar: 'تَتَمَرَّنُ' }, { l: 'we', ar: 'نَتَمَرَّنُ' }] },
    'أَخْلُدُ إِلَى النَّوْمِ': { tag: 'I · he · she', forms: [{ l: 'he', ar: 'يَخْلُدُ' }, { l: 'she', ar: 'تَخْلُدُ' }, { l: 'after an', ar: 'أَنْ أَخْلُدَ' }] },
  },
  vocabNotes: { 0: 'Sort as you teach: قَبْلَ أَنْ، بَعْدَ أَنْ، بِمُجَرَّدِ أَنْ، فَوْرَ أَنْ are followed by a VERB. أَثْنَاءَ is followed by a NOUN (أَثْنَاءَ الدَّرْسِ). عِنْدَمَا / حِينَ take an ordinary verb (no change).', 1: 'Card forms: “after an” shows the changed ending — point at the final fatḥa.' },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · noun or verb? (website table)', title: 'Is the next word a noun or a verb?', ar: 'اِسْمٌ أَمْ فِعْلٌ؟',
      cols: [{ label: 'With a noun: no extra word', w: 4.3, size: 24 }, { label: 'With a verb: add an', w: 5.03, size: 24 }, { label: 'Meaning', w: 3.0 }],
      rows: [
        { core: true, cells: [P('قَبْلَ {k|الدَّرْسِ}', 'before the lesson'), P('قَبْلَ {k|أَنْ} يَبْدَأَ الدَّرْسُ', 'before the lesson starts'), 'before'] },
        { core: true, cells: [P('بَعْدَ {k|التَّمْرِينِ}', 'after training'), P('بَعْدَ {k|أَنْ} يَنْتَهِيَ التَّمْرِينُ', 'after training finishes'), 'after'] },
        { cells: [P('عِنْدَ {k|الوُصُولِ}', 'on arrival'), P('عِنْدَمَا أَصِلُ', 'when I arrive (no change!)'), 'when'] },
        { cells: [P('أَثْنَاءَ {k|الدَّرْسِ}', 'during the lesson'), P('بِمُجَرَّدِ {k|أَنْ} أَنْتَهِيَ', 'as soon as I finish'), 'during / as soon as'] },
      ],
      foot: 'Test: can you put “the” (الـ) on the next word? → noun → no أَنْ.',
      notes: `GRAMMAR PART 1 — website rule “Use a noun after قَبْلَ / بَعْدَ without أَنْ” and the website comparison table.
Teacher script: “Before and after are easy with a NOUN. Only when a VERB follows do we need the little bridge أَنْ.”
Quick-fire: say a word (النَّوْمِ / أَنَامَ / المَدْرَسَةِ / أَخْرُجَ); students show a flat hand (noun) or two fingers (verb + أَنْ).
Website common error: قَبْلَ أَنْ الإِفْطَارِ ✗ → قَبْلَ الإِفْطَارِ ✓.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 2 · the verb ending changes (website rules)', title: 'After أَنْ: watch the last letter', ar: 'الفِعْلُ بَعْدَ أَنْ',
      cols: [{ label: 'Ordinary present', w: 3.9, size: 26 }, { label: 'After an (subjunctive)', w: 4.6, size: 26 }, { label: 'What changes', w: 3.83 }],
      rows: [
        { core: true, cells: [P('أَخْرُ{e|جُ}', 'I go out'), P('قَبْلَ أَنْ أَخْرُ{e|جَ}', 'before I go out'), 'ḍamma → fatḥa'] },
        { core: true, cells: [P('أَنَا{e|مُ}', 'I sleep'), P('قَبْلَ أَنْ أَنَا{e|مَ}', 'before I sleep'), 'ḍamma → fatḥa'] },
        { cells: [P('أَعُو{e|دُ}', 'I return'), P('بَعْدَ أَنْ أَعُو{e|دَ}', 'after I return'), 'ḍamma → fatḥa'] },
        { cells: [P('تُكْمِلِي{e|نَ}', 'you (f.) complete'), P('بَعْدَ أَنْ تُكْمِلِي', 'after you (f.) complete'), 'final ن removed'] },
        { cells: [P('تَذْهَبُو{e|نَ}', 'you (pl.) go'), P('قَبْلَ أَنْ تَذْهَبُوا', 'before you (pl.) go'), 'ن removed + alif'] },
      ],
      foot: 'Core: learn rows 1–2 as chunks. Develop: rows 1–3. Stretch: all five.',
      notes: `GRAMMAR PART 2 — website rules “Use قَبْلَ أَنْ for an action that happens first”, “Use بَعْدَ أَنْ for the completed first action”, “Remove final ن from the five verbs after أَنْ”.
Website overview: the verb after أَنْ is in the subjunctive: in singular verbs the final ḍamma becomes fatḥa; in the five verbs (ending ون / ان / ين) the ن disappears.
Teacher script: “أَنْ is a little magnet — it pulls the last vowel from u to a.” Say both columns aloud; students clap on the changed ending.
Website warning: قَبْلَ أَنْ أَخْرُجُ ✗ → قَبْلَ أَنْ أَخْرُجَ ✓. Note: عِنْدَمَا does NOT change the verb (عِنْدَمَا أَعُودُ).`,
    },
  ],
  quick: [0, 1, 2, 3],
  ido: {
    title: 'Watch me sequence my afternoon',
    steps: [
      { head: 'Noun', ar: '{k|بَعْدَ} المَدْرَسَةِ أَعُودُ إِلَى البَيْتِ.', think: 'المَدْرَسَةِ is a noun → no أَنْ.' },
      { head: 'After + verb', ar: '{k|بَعْدَ أَنْ} أَعُو{e|دَ}، أَسْتَرِيحُ نِصْفَ سَاعَةٍ.', think: 'After أَنْ: أَعُودُ → أَعُودَ.' },
      { head: 'Before + verb', ar: 'أُكْمِلُ وَاجِبِي {k|قَبْلَ أَنْ} أَسْتَعْمِ{e|لَ} هَاتِفِي.', think: 'The homework happens FIRST.' },
      { head: 'How often', ar: 'أَتَمَرَّنُ {w|مَرَّتَيْنِ} فِي الأُسْبُوعِ.', think: 'Recycle D1-L03.' },
    ],
    legend: ['k', 'e', 'w'], legendLabels: { k: 'BEFORE / AFTER', e: 'CHANGED ENDING', w: 'FREQUENCY' },
    model: '{k|بَعْدَ} المَدْرَسَةِ أَعُودُ إِلَى البَيْتِ. {k|بَعْدَ أَنْ} أَعُو{e|دَ}، أَسْتَرِيحُ نِصْفَ سَاعَةٍ. ثُمَّ أُكْمِلُ وَاجِبِي {k|قَبْلَ أَنْ} أَسْتَعْمِ{e|لَ} هَاتِفِي. أَتَمَرَّنُ {w|مَرَّتَيْنِ} فِي الأُسْبُوعِ، وَ{k|قَبْلَ أَنْ} أَنَا{e|مَ} أُحَضِّرُ حَقِيبَتِي.',
    modelEn: 'After school I return home. After I return, I rest for half an hour. Then I finish my homework before I use my phone. I exercise twice a week, and before I sleep I prepare my bag.',
    notes: 'I DO (3 min) — website patterns 1–3 combined into a short afternoon, with a think-aloud. For each before/after, ask: “noun or verb?” Students copy it and circle every changed (pink) ending.',
  },
  game: {
    title: 'Which comes first? Match the picture',
    pick: [0, 3, 4],
    en: ['Before breakfast I wake up.', 'Before sleeping I brush my teeth.', 'After homework I play.'],
    icons: [[['fa6', 'FaSun', 'C77700'], ['fa6', 'FaBowlFood', '8A5A2B']], [['fa6', 'FaTooth', '1D5FBF'], ['fa6', 'FaBed', '6B4C9A']], [['fa6', 'FaBook', '1E7B4F'], ['fa6', 'FaGamepad', 'B83227']]],
    labels: ['1 wake → 2 breakfast', '1 teeth → 2 bed', '1 homework → 2 games'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). All six use a NOUN after قَبْلَ / بَعْدَ — perfect for Core. Ask: which action happens FIRST? Other cards for homework: بَعْدَ المَدْرَسَةِ، بَعْدَ العَشَاءِ، بَعْدَ الاِسْتِحْمَامِ.',
  },
  sorterCats: ['Noun: no أَنْ', 'Verb: use أَنْ'],
  sorterNotes: 'Core support: point to الـ — every item with الـ is a noun.',
  hints: ['After أَنْ, what happens to the last vowel?', 'Five verb (-ينَ). What disappears?', 'Is الإِفْطَارِ a noun or a verb?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 5.\nListen for: بَعْدَ أَنْ أَعُودَ · مَرَّتَيْنِ · قَبْلَ أَنْ أَنَامَ.',
  listenRoutes: 'Core: questions 1, 3 and 5. Develop / Stretch: all 5.',
  gloss: [
    ['بَعْدَ أَنْ أَعُودَ مِنَ المَدْرَسَةِ، أَتَنَاوَلُ وَجْبَةً خَفِيفَةً وَأَسْتَرِيحُ لِمُدَّةِ عِشْرِينَ دَقِيقَةً.', 'After I return from school, I have a snack and rest for twenty minutes.'],
    ['ثُمَّ أُكْمِلُ وَاجِبِي قَبْلَ أَنْ أَفْتَحَ هَاتِفِي.', 'Then I finish my homework before I open my phone.'],
    ['يَوْمَيِ الاِثْنَيْنِ وَالخَمِيسِ أَتَمَرَّنُ فِي النَّادِي، أَيْ مَرَّتَيْنِ فِي الأُسْبُوعِ.', 'On Mondays and Thursdays I train at the club, that is twice a week.'],
    ['أَمَّا فِي الأَيَّامِ الأُخْرَى فَأُسَاعِدُ أُسْرَتِي أَوْ أَقْرَأُ.', 'As for the other days, I help my family or read.'],
    ['قَبْلَ أَنْ أَنَامَ، أُحَضِّرُ مَلَابِسِي وَحَقِيبَتِي لِلْيَوْمِ التَّالِي، وَبِذٰلِكَ لَا أَضْطَرُّ إِلَى العَجَلَةِ صَبَاحًا.', 'Before I sleep, I prepare my clothes and bag for the next day, so I do not have to rush in the morning.'],
  ],
  speak: {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'مَاذَا تَفْعَلُ بَعْدَ المَدْرَسَةِ؟ وَقَبْلَ النَّوْمِ؟' },
      { route: 'develop', ar: 'مَاذَا تَفْعَلُ بَعْدَ أَنْ تَعُودَ مِنَ المَدْرَسَةِ؟' },
      { route: 'develop', ar: 'كَمْ مَرَّةً تَتَمَرَّنُ أَوْ تَقْرَأُ فِي الأُسْبُوعِ؟' },
      { route: 'stretch', ar: 'أَيُّ عَادَةٍ مَسَائِيَّةٍ تُرِيدُ أَنْ تُغَيِّرَهَا؟ وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'بَعْدَ المَدْرَسَةِ ______ ، وَقَبْلَ النَّوْمِ ______ .' },
      { route: 'develop', ar: 'بَعْدَ أَنْ أَعُودَ ، ______ .' },
      { route: 'stretch', ar: 'أُرِيدُ أَنْ أُغَيِّرَ ______ لِأَنَّ ______ .' },
      { route: 'sum', ar: 'قَبْلَ أَنْ أَنَامَ ، ______ .' },
    ],
    modelEn: ['What do you do before sleeping?', 'Before I sleep, I prepare my bag and read a little. I do that because I want to wake up calm.'],
    notes: 'Core prompt (teacher-made) uses nouns only: “What do you do after school? And before sleep?” Develop/Stretch prompts are the website prompts. Website model answer on the slide: accurate subjunctive (أَنَامَ، أَسْتَيْقِظَ) and a reason.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Five actions in order: after school, then, after that, before sleep, in the end. Use the Core frames.' },
    develop: { amount: '8 sentences', how: 'Afternoon and evening: two before/after + verb sentences (fatḥa ending!) and one “twice a week”.' },
    stretch: { amount: '100–120 words', how: 'Website task: waking to sleeping, one five-verb form without ن, a contrast and a judgement.' },
  },
  frames: {
    core: [
      { en: 'After school I …', ar: 'بَعْدَ المَدْرَسَةِ ______ .' },
      { en: 'Then I …', ar: 'ثُمَّ ______ .' },
      { en: 'After that I …', ar: 'بَعْدَ ذٰلِكَ ______ .' },
      { en: 'Before sleep I …', ar: 'قَبْلَ النَّوْمِ ______ .' },
      { en: 'In the end I sleep at …', ar: 'فِي النِّهَايَةِ أَنَامُ فِي السَّاعَةِ ______ .' },
    ],
    develop: [
      { en: 'After I return, I …', ar: 'بَعْدَ أَنْ أَعُودَ ، ______ .' },
      { en: 'I … before I use my phone.', ar: '______ قَبْلَ أَنْ أَسْتَعْمِلَ هَاتِفِي.' },
      { en: 'As soon as I finish, I …', ar: 'بِمُجَرَّدِ أَنْ أَنْتَهِيَ ، ______ .' },
      { en: 'I exercise … a week.', ar: 'أَتَمَرَّنُ ______ فِي الأُسْبُوعِ.' },
      { en: 'Before we go to sleep, we …', ar: 'قَبْلَ أَنْ نَذْهَبَ إِلَى النَّوْمِ ______ .' },
    ],
    bank: ['قَبْلَ أَنْ', 'بَعْدَ أَنْ', 'عِنْدَمَا', 'ثُمَّ', 'بَعْدَ ذٰلِكَ', 'فِي النِّهَايَةِ', 'أَعُودَ', 'أَنَامَ', 'أَخْرُجَ', 'أُكْمِلُ وَاجِبِي', 'أَسْتَرِيحُ', 'أُسَاعِدُ أُسْرَتِي', 'مَرَّتَيْنِ', 'أُحَضِّرُ حَقِيبَتِي'],
  },
  stretch: [
    ['قَبْلَ أَنْ نَذْهَبَ إِلَى النَّوْمِ', 'before we go to sleep (نَذْهَبَ)'],
    ['بَعْدَ أَنْ تُكْمِلِي وَاجِبَكِ', 'after you (f.) finish your homework — no ن'],
    ['يَجْمَعُ بَيْنَ العَمَلِ وَالرَّاحَةِ', 'it combines work and rest'],
    ['مِنَ الأَفْضَلِ أَنْ أُقَلِّلَ وَقْتَ الشَّاشَةِ', 'it is better that I reduce screen time'],
    ['وَبِذٰلِكَ لَا أَضْطَرُّ إِلَى العَجَلَةِ', 'so I do not have to rush'],
  ],
  modelEn: 'After I return from school, I have a snack and rest for half an hour. Then I finish my homework before I use my phone. I exercise twice a week, whereas I spend Friday with my family. After dinner I revise my lessons, and before we go to sleep we prepare our things for the next day. In my opinion, my routine is useful because it combines work and rest, but it is better that I reduce screen time.',
  find: ['three verbs with a changed ending after أَنْ', 'a noun after بَعْدَ', 'a frequency expression', 'a contrast word'],
  modelNotes: 'Evidence: أَنْ أَعُودَ · أَنْ أَسْتَعْمِلَ · أَنْ نَذْهَبَ · أَنْ أُقَلِّلَ · بَعْدَ العَشَاءِ (noun) · مَرَّتَيْنِ فِي الأُسْبُوعِ · بَيْنَمَا / وَلٰكِنَّ.',
  selfCheck: [
    { route: 'core', text: 'My actions are in the right order.' },
    { route: 'core', text: 'I used before/after with a noun (no extra word).' },
    { route: 'develop', text: 'After أَنْ, my verb ends in fatḥa.' },
    { route: 'develop', text: 'I said how often (once / twice a week).' },
    { route: 'stretch', text: 'I dropped the final ن of a five verb after أَنْ.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['تَعْتَقِدُ', 'she believes'], ['المُنَظَّمَ', 'organised'], ['يُؤَثِّرُ فِي', 'affects'], ['اليَوْمِ التَّالِي', 'the next day'], ['الأَلْعَابَ الإِلِكْتُرُونِيَّةَ', 'electronic games'],
    ['تَمْشِي', 'she walks'], ['تُرَاجِعُ', 'she reviews'], ['تَتَجَنَّبُ', 'she avoids'], ['الكَافِيِينِ', 'caffeine'], ['بِعُمْقٍ', 'deeply'],
  ],
  prep: {
    words: [['أُغَيِّرُ مَلَابِسِي', 'I change my clothes', 'he: يُغَيِّرُ'], ['أَتَنَاوَلُ وَجْبَةً خَفِيفَةً', 'I have a snack', ''], ['أُرَتِّبُ غُرْفَتِي', 'I tidy my room', 'he: يُرَتِّبُ'], ['أَغْسِلُ الأَطْبَاقَ', 'I wash the dishes', 'he: يَغْسِلُ'], ['لِمُدَّةِ نِصْفِ سَاعَةٍ', 'for half an hour', '']],
    questionEn: 'What do you do between arriving home and going to bed? Put five actions in order.',
    questionAr: 'مَاذَا تَفْعَلُ فِي المَسَاءِ؟',
    homework: {
      core: 'Website D1-L04: the picture game “Which comes first?” and the sorter.',
      develop: 'Write 8 sentences about your afternoon with قَبْلَ أَنْ / بَعْدَ أَنْ — colour every changed ending.',
      stretch: 'Website writing task: 100–120 words, waking to sleeping.',
    },
    wordsSource: 'The five words come from the website D1-L05 vocabulary (after school, evening routine, duration).',
  },
  remember: 'Remember: noun → no أَنْ. Verb → أَنْ + fatḥa.',
});

module.exports = { meta, slides };
