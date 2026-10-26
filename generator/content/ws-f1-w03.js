'use strict';
/* Apply Workshop · F1-W03 · F1-L05 (one letter, four positions) + F1-L06 (shadda, tanwīn, madda, hamza). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f1-w03', pair: ['f1-l05', 'f1-l06'], allowTatweel: true,
  title: 'Name Badges for Our Class', arShort: 'بِطَاقَاتُ الأَسْمَاءِ',
  focus: 'Students join letter positions with the small marks: they read and write name badges (مُحَمَّدٌ · آدَمُ · سَعِيدٌ · هُدَى …), say which form each letter takes, find the shadda, madda, hamza and tanwīn, race to read the badges and copy and take dictation of names.',
  sort: [
    { ar: 'بـ', cat: 0 }, { ar: 'ـعـ', cat: 0 }, { ar: 'ـه', cat: 0 }, { ar: 'ا د ذ ر ز و', cat: 0 },
    { ar: 'شَدَّةٌ', cat: 1 }, { ar: 'آ', cat: 1 }, { ar: 'ء', cat: 1 }, { ar: 'كِتَابًا', cat: 1 },
  ],
  dialogue: {
    title: 'Read my badge', ar: 'اقْرَأْ بِطَاقَتِي',
    lines: [
      ['A', 'اقْرَأْ بِطَاقَتِي: مُحَمَّدٌ.', 'Read my badge: Muḥammad.'],
      ['B', 'مُحَمَّدٌ — عَلَى المِيمِ شَدَّةٌ: مَّ.', 'Muḥammad — there is a shadda on the mīm: mm.'],
      ['A', 'وَأَيْنَ الحَاءُ؟', 'And where is the ḥāʾ?'],
      ['B', 'فِي الوَسَطِ: ـحـ.', 'In the middle: (middle form).'],
      ['A', 'وَهٰذِهِ بِطَاقَةُ أُخْتِي: آمِنَةُ.', 'And this is my sister’s badge: Āmina.'],
      ['B', 'آمِنَةُ — فِي أَوَّلِهَا مَدَّةٌ: آ.', 'Āmina — at the start there is a madda: ʾā.'],
    ],
    notes: 'Letter positions (the ḥāʾ in the middle) come from F1-L05; shadda and madda from F1-L06. Names give a real reason to read carefully.',
  },
  card: {
    title: 'Reading card — the name badges', ar: 'بِطَاقَةُ القِرَاءَةِ', you: 'the reader', them: 'the badge maker',
    mix: 'letter forms in four positions and the six breakers (F1-L05) with shadda, tanwīn, madda and hamza (F1-L06)',
    tasks: [
      { ex: 'سَعِيدٌ', task: 'Read it; which form is the ʿayn?', plan: 'start · middle · end?', model: 'سَعِيدٌ — ـعـ', modelEn: 'saʿīd — the ʿayn is in the middle form.' },
      { ex: 'مُحَمَّدٌ', task: 'Read it; find the shadda.', plan: 'doubled m', model: 'مُحَمَّدٌ — مَّ', modelEn: 'Muḥammad — the shadda doubles the mīm.' },
      { ex: 'آدَمُ · مَرْيَمُ', task: 'Read both; which one starts with a madda?', plan: 'ʾā', model: 'آدَمُ', modelEn: 'Ādam — the madda says ʾā.' },
      { ex: 'هُدَى · هِنْدٌ', task: 'Read both; is the hāʾ at the start or alone?', plan: 'look at the joins', model: 'هُدَى · هِنْدٌ — هـ', modelEn: 'Both names start with هـ (the start form).' },
      { unexpected: true, ex: 'دَاوُدُ', task: 'Count the breakers in this name.', plan: 'ا د ذ ر ز و', model: 'د · ا · و · د — أَرْبَعَةٌ', modelEn: 'Four breakers: d · ā · w · d — so no letters join!' },
    ],
  },
  talk: {
    title: 'Badge race', ar: 'سِبَاقُ البِطَاقَاتِ',
    text: 'In 30 seconds, read as many name badges as you can from the reading card and the word bank. For every name, say one thing: a letter position or a mark. The partner counts.',
    routes: { core: 'Read four names clearly.', develop: 'Read six names and name one mark in each.', stretch: 'Read every name and say the position of one letter in each.' },
  },
  task: {
    title: 'Copy, listen and write: name badges', ar: 'أَكْتُبُ بِطَاقَاتِ الأَسْمَاءِ',
    text: 'In your book: • copy one letter in all four positions • make three name badges from the word bank, copying every mark • DICTATION: your buddy reads four names — write them without looking • circle each shadda, madda and hamza, and box each breaker.',
    range: [8, 50],
    phrases: [['بـ · ـبـ · ـب · ب', 'start · middle · end · alone'], ['ا د ذ ر ز و', 'the six breakers'], ['ـّ', 'shadda — say the letter twice'], ['آ · ء', 'madda (ʾā) · hamza (a catch)']],
    coreFrames: [
      { ar: 'ع · عـ · ـعـ · ـع', en: 'Copy ʿayn in four positions.' },
      { ar: 'مُحَمَّدٌ ______ آدَمُ ______', en: 'Copy two badges with their marks.' },
      { ar: 'سَعِيدٌ ______ هُدَى ______', en: 'Copy two more badges.' },
    ],
    developFrames: [
      { ar: 'إِمْلَاءٌ: ١ ______ ٢ ______ ٣ ______', en: 'Dictation: four names.' },
      { ar: 'آمِنَةُ ______ دَاوُدُ ______', en: 'Copy, then circle the marks and box the breakers.' },
    ],
    bank: ['مُحَمَّدٌ', 'آدَمُ · آمِنَةُ', 'سَعِيدٌ · عَلِيٌّ', 'هُدَى · هِنْدٌ', 'مَرْيَمُ · دَاوُدُ', 'ـّ · آ · ء', 'بـ · ـبـ · ـب', 'ا د ذ ر ز و'],
    model: {
      text: `ع · عـ · ـعـ · ـع
مُحَمَّدٌ · آدَمُ · سَعِيدٌ · هُدَى
إِمْلَاءٌ: عَلِيٌّ · آمِنَةُ · مَرْيَمُ · دَاوُدُ`,
      en: 'Line 1: ʿayn in four positions. Line 2: four name badges with every mark. Line 3: a dictation of four names. Marks: the shaddas in مُحَمَّد and عَلِيّ · the maddas in آدَم and آمِنَة. Breakers in دَاوُد: all four letters.',
      find: ['سَعِيدٌ', 'مُحَمَّدٌ', 'آدَمُ', 'دَاوُدُ'],
    },
  },
});
