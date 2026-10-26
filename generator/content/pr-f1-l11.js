'use strict';
/* Practice Room · F1-L11 · Arabic around us — script, language, meaning; fuṣḥā and dialects; calligraphy; the Arab world. Sounds + script in one lesson. Teacher-made. */
const { f1, room } = require('./pr-f1-common');

module.exports = room(f1({
  key: 'f1-l11',
  arShort: 'العَرَبِيَّةُ حَوْلَنَا',
  grammar: 'three different questions — which SCRIPT? which LANGUAGE? what MEANING?; one language, many voices (al-fuṣḥā for writing and news · dialects at home); three calligraphy styles with three jobs (naskh · ruqʿa · thuluth); Arabic in everyday life (food, shops, travel, screens); careful claims (“in many countries”, not “all Arabs”)',
  focus: 'Students run their own practice reading Arabic from real life: say the lesson’s words for talking about Arabic, act a “where did you see it?” mini-dialogue, read everyday words on point-and-say cards, read country names and style names on a reading card, race to read ten countries, then build words, spot careless claims, and copy words and write a short “Arabic around me” list.',
  bigAr: false,
  words1: 'Talking about Arabic (1)', words2: 'Talking about Arabic (2)',
  wordsAr: 'كَلِمَاتُ الدَّرْسِ',
  addWords: [['الفُصْحَى', 'Modern Standard Arabic'], ['لَهْجَةٌ', 'a dialect'], ['خَطٌّ', 'calligraphy / handwriting'], ['النَّسْخُ', 'Naskh — clear, everyday style'], ['الرُّقْعَةُ', 'Ruqʿah — quick handwriting'], ['الثُّلُثُ', 'Thuluth — large, for buildings']],
  warm: { head: 'Word ping-pong', text: 'The Leader says a word in ENGLISH from the next two slides. The Speaker finds the Arabic and reads it. The Coach checks.', steps: ['Leader: say 4 English words.', 'Speaker finds and reads each one.', 'Coach checks the marks.', 'Swap roles.'], routes: { core: 'Find the word and read it.', develop: 'Read it with al- in front.', stretch: 'Say where you have seen Arabic like this (shop, food, phone …).' } },
  dialogue: {
    title: 'Where did you see Arabic?', ar: 'أَيْنَ رَأَيْتَ العَرَبِيَّةَ؟',
    lines: [
      ['A', 'أَيْنَ رَأَيْتَ العَرَبِيَّةَ هٰذَا الأُسْبُوعَ؟', 'Where did you see Arabic this week?'],
      ['B', 'عَلَى لَافِتَةِ مَطْعَمٍ: «مَطْعَم».', 'On a restaurant sign: “maṭʿam”.'],
      ['A', 'هَلْ هُوَ بِالفُصْحَى؟', 'Is it in fuṣḥā?'],
      ['B', 'نَعَمْ، الكِتَابَةُ عَادَةً بِالفُصْحَى.', 'Yes, writing is usually in fuṣḥā.'],
      ['A', 'وَمَا الخَطُّ؟', 'And which style?'],
      ['B', 'النَّسْخُ — وَاضِحٌ وَسَهْلٌ.', 'Naskh — clear and easy.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: give YOUR real example (a food packet, a shop, a phone app, a mosque).',
  },
  qTitle: 'Everyday Arabic — read it, say where you’d see it',
  qFoot: 'The Speaker reads the word. Develop: say the meaning. Stretch: say where you would see it (a shop, a station, a packet …). Swap after each card.',
  questions: [
    { q: 'مَخْبَز', en: 'business · bakery', start: 'مَخْبَز', more: 'مَطْعَم' },
    { q: 'وُصُول', en: 'travel · arrivals', start: 'وُصُول', more: 'مُغَادَرَة' },
    { q: 'أَخْبَار', en: 'media · news', start: 'أَخْبَار', more: 'صَحِيفَة' },
    { q: 'مُكَوِّنَات', en: 'food · ingredients', start: 'مُكَوِّنَات', more: 'تَارِيخ' },
    { q: 'بَحْث', en: 'digital · search', start: 'بَحْث', more: 'رِسَالَة' },
  ],
  card: {
    title: 'Reading card — countries and styles', ar: 'بِطَاقَةُ القِرَاءَةِ', you: 'the reader', them: 'the card holder',
    tasks: [
      { ex: 'المَغْرِب · الجَزَائِر · تُونِس', task: 'Read the three Maghreb countries.', plan: 'al-Maghrib · al-Jazāʾir · Tūnis', model: 'المَغْرِب · الجَزَائِر · تُونِس', modelEn: 'Morocco · Algeria · Tunisia.' },
      { ex: 'مِصْر · السُّودَان', task: 'Read the Nile Valley countries.', plan: 'Miṣr · as-Sūdān (sun letter)', model: 'مِصْر · السُّودَان', modelEn: 'Egypt · Sudan.' },
      { ex: 'النَّسْخُ · الرُّقْعَةُ · الثُّلُثُ', task: 'Read the three styles; which is for buildings?', plan: 'an-naskh · ar-ruqʿa · ath-thuluth', model: 'الثُّلُثُ', modelEn: 'Thuluth — large and sweeping, for buildings.' },
      { unexpected: true, ex: 'المَمْلَكَةُ العَرَبِيَّةُ السُّعُودِيَّةُ', task: 'Read the long name slowly.', plan: 'three words', model: 'المَمْلَكَةُ العَرَبِيَّةُ السُّعُودِيَّةُ', modelEn: 'the Kingdom of Saudi Arabia.' },
    ],
  },
  talk: {
    title: 'Ten-country race', ar: 'عَشْرُ دُوَلٍ',
    text: 'In 30 seconds, read these ten countries: المَغْرِب · الجَزَائِر · تُونِس · مِصْر · السُّودَان · لُبْنَان · سُورِيَا · العِرَاق · السُّعُودِيَّة · عُمَان. The Coach counts the correct ones.',
    routes: { core: 'Read five countries.', develop: 'Read all ten.', stretch: 'Read all ten and say the region (Maghreb · Nile Valley · Levant · Gulf).' },
  },
  builder: [
    { en: 'culture — thaqāfa', cols: [['ثَ', 'تَ'], ['قَا', 'كَا'], ['فَةٌ', 'قَةٌ']], key: [0, 0, 0], full: 'ثَقَافَةٌ', why: 'th (three dots) · q (two dots) · f (one dot).' },
    { en: 'language — lugha', cols: [['لُ', 'لَ'], ['غَ', 'عَ'], ['ةٌ', 'هٌ']], key: [0, 0, 0], full: 'لُغَةٌ', why: 'gh has a dot above; ة at the end.' },
    { en: 'dialect — lahja', cols: [['لَهْ', 'لَحْ'], ['جَ', 'خَ'], ['ةٌ', 'تٌ']], key: [0, 0, 0], full: 'لَهْجَةٌ', why: 'light h (ه) with sukūn; j has its dot below.' },
  ],
  errors: [
    { wrong: 'كُلُّ العَرَبِ يَتَكَلَّمُونَ لَهْجَةً وَاحِدَةً.', hint: 'Is this a careful claim?', right: 'لِكُلِّ بَلَدٍ لَهْجَتُهُ، وَالفُصْحَى لِلْكِتَابَةِ.', why: 'Many dialects — one shared written language.' },
    { wrong: 'الثُّلُثُ', hint: 'The style for quick everyday handwriting is …', right: 'الرُّقْعَةُ', why: 'Ruqʿah = quick handwriting; Thuluth = buildings.' },
    { wrong: 'السُودَان', hint: 'س is a sun letter.', right: 'السُّودَان', why: 'Sun letter after al- → shadda: as-Sūdān.' },
  ],
  task: {
    title: 'Copy, listen and write: Arabic around me', ar: 'العَرَبِيَّةُ حَوْلِي',
    size: 'words · countries · my list',
    text: 'In your book: • copy the twelve words and the ten countries • DICTATION: your buddy reads five everyday words — write them without looking • write “Arabic around me”: three Arabic words you have really seen (a shop, a packet, an app, a mosque) and where you saw them.',
    phrases: [['الفُصْحَى · لَهْجَةٌ', 'fuṣḥā · a dialect'], ['النَّسْخُ · الرُّقْعَةُ · الثُّلُثُ', 'Naskh · Ruqʿah · Thuluth'], ['رَأَيْتُ … عَلَى …', 'I saw … on …'], ['فِي كَثِيرٍ مِنَ البُلْدَانِ', 'in many countries']],
    coreFrames: [
      { ar: 'لُغَةٌ ______ ثَقَافَةٌ ______ عَالَمٌ', en: 'Copy three words.' },
      { ar: 'المَغْرِب ______ مِصْر ______ العِرَاق', en: 'Copy three countries.' },
      { ar: 'النَّسْخُ ______ الرُّقْعَةُ ______ الثُّلُثُ', en: 'Copy the three styles.' },
      { ar: 'رَأَيْتُ ______ عَلَى ______', en: 'I saw … on … (in English is fine for the place).' },
    ],
    developFrames: [
      { ar: 'إِمْلَاءٌ: ١ ______ ٢ ______ ٣ ______', en: 'Dictation: everyday words.' },
      { ar: 'العَرَبِيَّةُ حَوْلِي: ١ ______ ٢ ______ ٣ ______', en: 'Arabic around me: three real words.' },
    ],
    bank: ['لُغَةٌ · ثَقَافَةٌ', 'عَالَمٌ · بِلَادٌ', 'فَنٌّ · تِجَارَةٌ', 'الفُصْحَى · لَهْجَةٌ', 'النَّسْخُ · الرُّقْعَةُ · الثُّلُثُ', 'مَطْعَم · مَخْبَز', 'وُصُول · مُغَادَرَة', 'المَغْرِب · مِصْر · العِرَاق'],
    checklist: ['Words and countries copied with every mark.', 'Sun letters doubled after al- (السُّودَان).', 'Dictation without looking (Develop).', 'Three REAL examples of Arabic around you (Stretch).', 'Buddy check, then fix one thing.'],
    notesFull: 'STEP 8 (10 min). Core: copy words, countries and styles with the frames. Develop: a five-word dictation + one real example. Stretch: three real examples with where you saw them, written as “رَأَيْتُ … عَلَى …”. Teacher asks one student per room to share a real example.',
    range: [12, 60],
    model: {
      text: `لُغَةٌ · ثَقَافَةٌ · عَالَمٌ · بِلَادٌ · فَنٌّ · تِجَارَةٌ
المَغْرِب · الجَزَائِر · تُونِس · مِصْر · السُّودَان · لُبْنَان · سُورِيَا · العِرَاق · السُّعُودِيَّة · عُمَان
إِمْلَاءٌ: مَخْبَز · وُصُول · أَخْبَار · بَحْث · رِسَالَة
العَرَبِيَّةُ حَوْلِي: «حَلَال» عَلَى مَحَلِّ اللَّحْمِ · «مَسْجِد» فِي شَارِعِي · «بَحْث» فِي تَطْبِيقٍ`,
      en: 'Line 1: six words. Line 2: the ten countries. Line 3: a dictation of five everyday words. Line 4: Arabic around me — “ḥalāl” on the butcher’s, “masjid” in my street, “search” in an app.',
      find: ['ثَقَافَةٌ', 'السُّودَان', 'وُصُول', 'العَرَبِيَّةُ حَوْلِي'],
    },
  },
}));
