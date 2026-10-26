'use strict';
/* Practice Room · F1-L10 · Read what is written — unvowelled text and everyday signs (SCOPE). Sounds + script in one lesson. Teacher-made. */
const { f1, room } = require('./pr-f1-common');

module.exports = room(f1({
  key: 'f1-l10',
  arShort: 'نُصُوصٌ بِلَا تَشْكِيلٍ',
  grammar: 'most everyday Arabic has no short-vowel marks: letters, dots and long vowels (ا و ي) stay; the SCOPE routine — Scan the skeleton · Chunk what is known (ال · و · بـ · ة · ات) · Observe vowel clues · Predict with context · Evaluate everything; saying “I’m not sure yet” when a skeleton has two readings',
  focus: 'Students run their own practice reading unvowelled Arabic: say eight everyday signs, act a SCOPE mini-dialogue, scan sign cards, choose between two readings on a reading card, race to read the signs, then match each sign to its vowelled form, spot misreadings, and copy signs and write labels for places in their area.',
  bigAr: false,
  words1: 'Everyday signs (1)', words2: 'Everyday signs (2)',
  wordsAr: 'لَافِتَاتٌ',
  words: [
    ['مطعم', 'restaurant', 'ṭ has no dot; ع is open', 'sign', 'مَطْعَم', 'with marks'], ['مدرسة', 'school', 'final ة', 'sign', 'مَدْرَسَة', 'with marks'], ['مستشفى', 'hospital', 'final ى', 'sign', 'مُسْتَشْفَى', 'with marks'], ['مسجد', 'mosque', 'final د', 'sign', 'مَسْجِد', 'with marks'], ['محطة', 'station', 'final ة', 'sign', 'مَحَطَّة', 'with marks'], ['شارع', 'street', 'long ā', 'sign', 'شَارِع', 'with marks'],
    ['بنك', 'bank', 'dots on ب ن', 'sign', 'بَنْك', 'with marks'], ['فندق', 'hotel', 'ف one dot · ق two', 'sign', 'فُنْدُق', 'with marks'], ['مكتبة', 'library', 'ال + مكتب + ة', 'sign', 'مَكْتَبَة', 'with marks'], ['مدخل', 'entrance', 'opposite of exit', 'sign', 'مَدْخَل', 'with marks'], ['مخرج', 'exit', 'خ dot above', 'sign', 'مَخْرَج', 'with marks'], ['مغلق', 'closed', 'غ dot above', 'sign', 'مُغْلَق', 'with marks'],
  ],
  warm: { head: 'Sign ping-pong', text: 'The Leader says a place in ENGLISH (bank, exit …). The Speaker finds the sign on the next two slides and reads it WITHOUT looking at the marks line. The Coach checks with the vowelled form.', steps: ['Leader: say 4 places in English.', 'Speaker reads the unvowelled sign.', 'Coach checks with the “with marks” line.', 'Swap roles.'], routes: { core: 'Find the sign and read it.', develop: 'Name the letters right to left first (S of SCOPE).', stretch: 'Say which chunk you recognised (ال · ة · م…).' } },
  dialogue: {
    title: 'SCOPE the sign', ar: 'اقْرَأِ اللَّافِتَةَ',
    lines: [
      ['A', 'مَاذَا تَقْرَأُ هُنَا؟ «المكتبة»', 'What do you read here? “المكتبة”'],
      ['B', 'أَبْدَأُ مِنَ اليَمِينِ: ا ل م ك ت ب ة.', 'I start on the right: a-l-m-k-t-b-a.'],
      ['A', 'مَا الَّذِي تَعْرِفُهُ؟', 'What do you recognise?'],
      ['B', '«ال» فِي البِدَايَةِ، وَ«ة» فِي النِّهَايَةِ.', '“al-” at the start, and “ة” at the end.'],
      ['A', 'وَالمَعْنَى؟', 'And the meaning?'],
      ['B', 'المَكْتَبَةُ! هٰذَا يُنَاسِبُ المَدْرَسَةَ.', 'al-maktaba — the library! It fits a school sign.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: A chooses any sign from the word slides; B talks through S-C-O-P-E in English and reads it.',
  },
  qTitle: 'Sign cards — scan, read, prove',
  qFoot: 'The Speaker scans the letters right to left, then reads the sign. Develop: say the meaning. Stretch: give the evidence (a chunk, a long vowel, the context). Swap after each card.',
  questions: [
    { q: 'مطعم', en: 'you are hungry …', start: 'مَطْعَم', more: 'المَطْعَمُ' },
    { q: 'مستشفى', en: 'ends in ى (alif maqṣūra)', start: 'مُسْتَشْفَى', more: 'المُسْتَشْفَى' },
    { q: 'مخرج', en: 'over a door', start: 'مَخْرَج', more: 'مَدْخَل' },
    { q: 'محطة القطار', en: 'two words · trains', start: 'مَحَطَّة القِطَار', more: 'محطة الحافلات' },
    { q: 'مغلق', en: 'on a shop door', start: 'مُغْلَق', more: 'مفتوح' },
  ],
  card: {
    title: 'Reading card — one skeleton, two readings', ar: 'بِطَاقَةُ القِرَاءَةِ', you: 'the reader', them: 'the card holder',
    tasks: [
      { ex: 'كتب', task: 'Give two possible readings.', plan: 'a verb · a plural noun', model: 'كَتَبَ · كُتُب', modelEn: 'kataba (he wrote) · kutub (books) — I’m not sure yet without context.' },
      { ex: 'كتب الطالب الدرس', task: 'Now read it — the context decides.', plan: 'a sentence: who did what?', model: 'كَتَبَ الطَّالِبُ الدَّرْسَ', modelEn: 'The student wrote the lesson.' },
      { ex: 'مدرسة البنات', task: 'Read the school sign.', plan: 'two chunks: مدرسة + البنات', model: 'مَدْرَسَةُ البَنَاتِ', modelEn: 'girls’ school.' },
      { unexpected: true, ex: 'بنك', task: 'Read it and prove it.', plan: 'dots: ب below · ن above', model: 'بَنْك', modelEn: 'bank — one dot below, one above, then kāf.' },
    ],
  },
  talk: {
    title: 'Sign race', ar: 'سِبَاقُ اللَّافِتَاتِ',
    text: 'In 30 seconds, read the twelve signs WITHOUT looking at the marks lines (cover them!). The Coach counts the correct ones and checks with the vowelled forms.',
    routes: { core: 'Read six signs.', develop: 'Read all twelve.', stretch: 'Read all twelve with al- in front (المطعم …).' },
  },
  builderTitle: 'Match the sign to its vowelled parts',
  builder: [
    { en: 'restaurant (the sign: m-ṭ-ʿ-m)', cols: [['مَطْ', 'مُطْ'], ['عَ', 'غَ'], ['م', 'ن']], key: [0, 0, 0], full: 'مَطْعَم', why: 'S: m-ṭ-ʿ-m · ع is open, no dot.' },
    { en: 'hotel (the sign: f-n-d-q)', cols: [['فُنْ', 'قُنْ'], ['دُ', 'ذُ'], ['ق', 'ف']], key: [0, 0, 0], full: 'فُنْدُق', why: 'ف one dot at the start · ق two dots at the end.' },
    { en: 'library (the sign: m-k-t-b-a)', cols: [['مَكْ', 'مُكْ'], ['تَ', 'ثَ'], ['بَة', 'نَة']], key: [0, 0, 0], full: 'مَكْتَبَة', why: 'C: the chunk مكتب + ة.' },
  ],
  errors: [
    { wrong: 'مَدْخَل', hint: 'The sign says مخرج — check the letters.', right: 'مَخْرَج', why: 'kh-r-j = going out: exit. مدخل = entrance.' },
    { wrong: 'مَسْجِل', hint: 'The sign is مسجد — what is the last letter?', right: 'مَسْجِد', why: 'Final د, not ل: masjid — mosque.' },
    { wrong: 'بِنْت', hint: 'The sign is بنك — check the last letter.', right: 'بَنْك', why: 'The skeleton ends in ك (kāf), not ت.' },
  ],
  task: {
    title: 'Copy, listen and write: signs in my area', ar: 'لَافِتَاتٌ فِي مِنْطَقَتِي',
    size: 'signs · labels · dictation',
    text: 'In your book: • copy the twelve signs WITHOUT marks • under six of them, write the vowelled form • DICTATION: your buddy reads five signs — write them without marks • write three signs for real places near your home (school, mosque, shop …).',
    phrases: [['لَافِتَةٌ', 'a sign'], ['بِلَا تَشْكِيلٍ', 'without marks'], ['مَعَ التَّشْكِيلِ', 'with marks'], ['لَسْتُ مُتَأَكِّدًا بَعْدُ', 'I’m not sure yet']],
    coreFrames: [
      { ar: 'مطعم ______ مدرسة ______ مسجد', en: 'Copy three signs.' },
      { ar: 'مَطْعَم ______ مَدْرَسَة ______', en: 'Copy two vowelled forms.' },
      { ar: 'مدخل ______ مخرج', en: 'Copy the door signs.' },
      { ar: 'قُرْبَ بَيْتِي: ______', en: 'Near my home: … (one sign).' },
    ],
    developFrames: [
      { ar: 'إِمْلَاءٌ: ١ ______ ٢ ______ ٣ ______', en: 'Dictation — no marks.' },
      { ar: 'قُرْبَ بَيْتِي: ______ · ______ · ______', en: 'Three real places near your home.' },
    ],
    bank: ['مطعم · مدرسة', 'مستشفى · مسجد', 'محطة · شارع', 'بنك · فندق', 'مكتبة', 'مدخل · مخرج', 'مغلق · مفتوح', 'ال · ة'],
    checklist: ['Signs copied without marks — every dot present.', 'Six vowelled forms added.', 'Final letters checked (ة · ى · د · ك).', 'Dictation without marks (Develop).', 'Three real signs from your area (Stretch).'],
    notesFull: 'STEP 8 (10 min). Core: copy signs and two vowelled forms with the frames. Develop: dictation of five signs + three real places. Stretch: write a short unvowelled sign for your classroom door and two others. Teacher checks final letters and dots — without marks, dots carry the meaning.',
    range: [12, 50],
    model: {
      text: `مطعم · مدرسة · مستشفى · مسجد · محطة · شارع
بنك · فندق · مكتبة · مدخل · مخرج · مغلق
مَطْعَم · مَدْرَسَة · مُسْتَشْفَى · مَسْجِد · فُنْدُق · مَكْتَبَة
إِمْلَاءٌ: مسجد · بنك · مخرج · مكتبة · مغلق
قُرْبَ بَيْتِي: مدرسة · مسجد · صيدلية`,
      en: 'Lines 1–2: the twelve signs without marks. Line 3: six vowelled forms. Line 4: a dictation of five signs. Line 5: three real places near home (school · mosque · pharmacy).',
      find: ['مستشفى', 'مكتبة', 'مُسْتَشْفَى', 'مخرج'],
    },
  },
}));
