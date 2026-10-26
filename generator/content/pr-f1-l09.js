'use strict';
/* Practice Room · F1-L09 · Write clearly, then fluently — the 28 letters, repair codes and dictation. Sounds + script in one lesson. Teacher-made. */
const { f1, room } = require('./pr-f1-common');

module.exports = room(f1({
  key: 'f1-l09',
  arShort: 'الكِتَابَةُ الوَاضِحَةُ',
  grammar: 'the WRITE routine (Watch · Repeat · Imagine · Try · Examine); five features of clear handwriting with repair codes — L letter shape · D dots · J joins · M marks · S spacing and baseline; fair dictation: listen · hold · write · check',
  focus: 'Students run their own handwriting practice: say the lesson’s dictation words, act a “what needs repairing?” mini-dialogue, give repair codes on point-and-say cards, check pairs of written words on a reading card, race to spell words aloud letter by letter, then choose the clearly written form, spot slips with a code, and do three rounds of fair dictation.',
  bigAr: false,
  words1: 'Dictation words — round A', words2: 'Dictation words — rounds B and C',
  wordsAr: 'كَلِمَاتُ الإِمْلَاءِ',
  words: [
    ['بَابٌ', 'door', 'breaker ا', 'round A'], ['كِتَابٌ', 'book', 'long ā', 'round A'], ['قَلَمٌ', 'pen', 'q: two dots', 'round A'], ['مَدْرَسَةٌ', 'school', 'sukūn · ة', 'round A'], ['بَيْتٌ', 'house', 'sukūn on y', 'round A'],
    ['مُعَلِّمٌ', 'teacher', 'shadda', 'round B'], ['طَالِبٌ', 'student', 'heavy ṭ', 'round B'], ['عَيْنٌ', 'eye', 'ʿayn at the start', 'round B'], ['كَلِمَةٌ', 'word', 'ة at the end', 'round B'],
    ['ثَلَاثَةٌ', 'three', 'th: three dots', 'round C'], ['وَلَدٌ', 'boy', 'two breakers', 'round C'], ['جَدِيدٌ', 'new', 'long ī', 'round C'],
  ],
  warm: { head: 'Spell ping-pong', text: 'The Leader says a word in ENGLISH from the next two slides. The Speaker spells it letter by letter in Arabic (kāf · tāʾ · alif · bāʾ), then reads it. The Coach checks on the slide.', steps: ['Leader: say 4 English words.', 'Speaker spells each word by letter names, then reads it.', 'Coach checks letters and marks.', 'Swap roles.'], routes: { core: 'Find the word and read it.', develop: 'Spell it by letter names.', stretch: 'Spell it with the marks too (kāf-kasra …).' } },
  dialogue: {
    title: 'What needs repairing?', ar: 'مَاذَا نُصْلِحُ؟',
    lines: [
      ['A', 'انْظُرْ إِلَى كَلِمَتِي: «بَاپٌ».', 'Look at my word: “bāp” (three dots below).'],
      ['B', 'رَمْزُ النُّقَاطِ: البَاءُ لَهَا نُقْطَةٌ وَاحِدَةٌ.', 'Code D (dots): bāʾ has ONE dot.'],
      ['A', 'وَ«و لد»؟', 'And “w ld” (with a gap)?'],
      ['B', 'رَمْزُ الوَصْلِ: اللَّامُ تَتَّصِلُ بِالدَّالِ: «وَلَدٌ».', 'Code J (joins): lām joins the dāl: walad.'],
      ['A', 'شُكْرًا! أَكْتُبُهَا مَرَّةً أُخْرَى.', 'Thanks! I’ll write it again.'],
      ['B', 'أَحْسَنْتَ — الآنَ وَاضِحَةٌ.', 'Well done — now it’s clear.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: write a word with ONE deliberate mistake in the chat; your partner gives the code (L · D · J · M · S).',
  },
  qTitle: 'Repair cards — read, give the code, fix',
  qFoot: 'The Speaker reads the slip, names the code (L · D · J · M · S — see the hint) and says the correct word. Develop: spell the correct word. Stretch: write it in the chat. Swap after each card.',
  questions: [
    { q: 'فَلَمٌ', en: 'meant: pen · code D (dots)', start: 'قَلَمٌ', more: 'قَافٌ' },
    { q: 'مَدرَسَةٌ', en: 'meant: school · code M (a mark is missing)', start: 'مَدْرَسَةٌ', more: 'سُكُونٌ' },
    { q: 'كِتَا ب', en: 'meant: book · code S (spacing)', start: 'كِتَابٌ', more: 'كُتُبٌ' },
    { q: 'غَيْنٌ', en: 'meant: eye · code D (no dot on ʿayn)', start: 'عَيْنٌ', more: 'عَيْنَانِ' },
    { q: 'ظَالِبٌ', en: 'meant: student · code D (no dot on ṭāʾ)', start: 'طَالِبٌ', more: 'طَالِبَةٌ' },
  ],
  card: {
    title: 'Reading card — which is written clearly?', ar: 'بِطَاقَةُ القِرَاءَةِ', you: 'the checker', them: 'the card holder',
    tasks: [
      { ex: 'جَدِيدٌ · حَدِيدٌ', task: 'Which says “new”? Why?', plan: 'look at the dot', model: 'جَدِيدٌ', modelEn: 'jadīd — new (ج has a dot; حَدِيدٌ = iron).' },
      { ex: 'ثَلَاثَةٌ · تَلَاتَةٌ', task: 'Which says “three”?', plan: 'count the dots', model: 'ثَلَاثَةٌ', modelEn: 'thalātha — three dots on each th.' },
      { ex: 'مُعَلِّمٌ · مُعَلِمٌ', task: 'Which is complete?', plan: 'look for the shadda', model: 'مُعَلِّمٌ', modelEn: 'muʿallim — shadda on lām (code M).' },
      { unexpected: true, ex: 'وَلَدٌ', task: 'Spell it by letter names.', plan: 'three letters, two breakers', model: 'وَاوٌ · لَامٌ · دَالٌ', modelEn: 'wāw · lām · dāl.' },
    ],
  },
  talk: {
    title: 'Spelling race', ar: 'سِبَاقُ التَّهْجِئَةِ',
    text: 'In 30 seconds, spell as many words from the word slides as you can by letter names (bāʾ · alif · bāʾ = bāb). The Coach counts the correct ones.',
    head: 'Spell aloud for 30 seconds — as many as you can',
    routes: { core: 'Spell three round-A words.', develop: 'Spell six words.', stretch: 'Spell round-C words, including the marks.' },
  },
  builderTitle: 'Choose the clearly written part',
  builder: [
    { en: 'school — madrasa', cols: [['مَدْ', 'مَد'], ['رَ', 'زَ'], ['سَةٌ', 'سَه']], key: [0, 0, 0], full: 'مَدْرَسَةٌ', why: 'M: sukūn on d · D: r has no dot · ة at the end.' },
    { en: 'pen — qalam', cols: [['قَ', 'فَ'], ['لَ', 'ل'], ['مٌ', 'م']], key: [0, 0, 0], full: 'قَلَمٌ', why: 'D: two dots on q · M: every mark written.' },
    { en: 'word — kalima', cols: [['كَ', 'گ'], ['لِ', 'لَ'], ['مَةٌ', 'مَه']], key: [0, 0, 0], full: 'كَلِمَةٌ', why: 'L: Arabic kāf shape · ة, not ه, at the end.' },
  ],
  errors: [
    { wrong: 'بَيتٌ', hint: 'Code M — a mark is missing.', right: 'بَيْتٌ', why: 'sukūn on yāʾ: bay-tun.' },
    { wrong: 'كَلِمَه', hint: 'Code L — the last letter.', right: 'كَلِمَةٌ', why: 'Feminine ending ة has two dots.' },
    { wrong: 'وَ لَدٌ', hint: 'Code S — spacing.', right: 'وَلَدٌ', why: 'One word: the small gap after و is natural, not a space.' },
  ],
  task: {
    title: 'Copy, listen and write: three dictation rounds', ar: 'إِمْلَاءٌ فِي ثَلَاثِ جَوْلَاتٍ',
    size: 'alphabet · dictation · repair',
    text: 'In your book: • write the 28 letters from memory (then check) • DICTATION in three rounds: your buddy reads round A (5 words), then B, then C — LISTEN · HOLD · WRITE · CHECK • mark each word with a code (L · D · J · M · S) and write any repaired word again from memory.',
    phrases: [['L · D · J · M · S', 'shape · dots · joins · marks · spacing'], ['اسْمَعْ · احْفَظْ · اكْتُبْ · رَاجِعْ', 'listen · hold · write · check'], ['إِمْلَاءٌ', 'dictation'], ['أُصْلِحُ', 'I repair']],
    coreFrames: [
      { ar: 'ا ب ت ث ج ح خ … ي', en: 'Write the 28 letters from memory.' },
      { ar: 'أ: ١ ______ ٢ ______ ٣ ______ ٤ ______ ٥ ______', en: 'Round A — five words.' },
      { ar: 'بَابٌ ______ كِتَابٌ ______', en: 'Copy two anchor words.' },
      { ar: 'أُصْلِحُ: ______ ← ______', en: 'Repair one word: wrong → right.' },
    ],
    developFrames: [
      { ar: 'ب: ١ ______ ٢ ______ ٣ ______ ٤ ______', en: 'Round B — four words.' },
      { ar: 'ج: ١ ______ ٢ ______ ٣ ______', en: 'Round C — three words (Stretch).' },
    ],
    bank: ['بَابٌ · كِتَابٌ', 'قَلَمٌ · مَدْرَسَةٌ', 'بَيْتٌ', 'مُعَلِّمٌ · طَالِبٌ', 'عَيْنٌ · كَلِمَةٌ', 'ثَلَاثَةٌ · وَلَدٌ', 'جَدِيدٌ', 'إِمْلَاءٌ'],
    checklist: ['28 letters from memory, right to left.', 'Each dictation word: listen · hold · write · check.', 'Every word given a code or a ✓.', 'Rounds B and C (Develop · Stretch).', 'One repaired word written again from memory.'],
    notesFull: 'STEP 8 (10 min). Core: alphabet from memory + round A. Develop: rounds A and B with codes. Stretch: all three rounds and two repairs from memory. Fair dictation: the buddy reads each word twice, at normal speed, and does not point.',
    range: [12, 60],
    model: {
      text: `ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي
أ: بَابٌ · كِتَابٌ · قَلَمٌ · مَدْرَسَةٌ · بَيْتٌ
ب: مُعَلِّمٌ · طَالِبٌ · عَيْنٌ · كَلِمَةٌ
ج: ثَلَاثَةٌ · وَلَدٌ · جَدِيدٌ
أُصْلِحُ: بَيتٌ ← بَيْتٌ`,
      en: 'Line 1: the 28 letters from memory. Lines 2–4: the three dictation rounds. Line 5: one repair (code M — a missing sukūn).',
      find: ['ا ب ت ث', 'مَدْرَسَةٌ', 'مُعَلِّمٌ', 'جَدِيدٌ'],
    },
  },
  buddyRows: [['write all 28 letters in the right order?', 'Core'], ['put dots in the right number and place (code D)?', 'Core'], ['join letters correctly (code J)?', 'Develop'], ['write every mark (code M)?', 'Develop'], ['repair a word and write it again from memory?', 'Stretch']],
}));
