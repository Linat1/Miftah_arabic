'use strict';
/* Practice Room · F2-L05 · Masculine and feminine: make the pair match. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f2-l05',
  arShort: 'المُذَكَّرُ وَالمُؤَنَّثُ',
  grammar: 'people-noun pairs (ṭālib / ṭāliba); adjective agreement with ة; hādhā / hādhihi + noun + adjective',
  focus: 'Students run their own speaking and writing practice on masculine and feminine: say the noun and adjective pairs, act a short dialogue, answer question cards, do a role-play card describing classmates, give a 30-second talk, then build, fix and write short descriptions where everything agrees.',
  words1: 'People: masculine and feminine', words2: 'Adjectives: masculine and feminine',
  addWords: [
    ['طَالِبٌ · طَالِبَةٌ', 'a student (m. · f.)'], ['مُعَلِّمٌ · مُعَلِّمَةٌ', 'a teacher (m. · f.)'], ['صَدِيقٌ · صَدِيقَةٌ', 'a friend (m. · f.)'],
    ['وَلَدٌ · بِنْتٌ', 'a boy · a girl'], ['طَبِيبٌ · طَبِيبَةٌ', 'a doctor (m. · f.)'], ['جَارٌ · جَارَةٌ', 'a neighbour (m. · f.)'],
    ['كَبِيرٌ · كَبِيرَةٌ', 'big / old (m. · f.)'], ['صَغِيرٌ · صَغِيرَةٌ', 'small / young (m. · f.)'], ['طَوِيلٌ · طَوِيلَةٌ', 'tall (m. · f.)'],
    ['قَصِيرٌ · قَصِيرَةٌ', 'short (m. · f.)'], ['ذَكِيٌّ · ذَكِيَّةٌ', 'clever (m. · f.)'], ['لَطِيفٌ · لَطِيفَةٌ', 'kind (m. · f.)'],
  ],
  dialogue: {
    title: 'Who is this? What is he like?', ar: 'مَنْ هٰذَا؟',
    lines: [
      ['A', 'مَنْ هٰذَا؟', 'Who is this (m.)?'],
      ['B', 'هٰذَا طَالِبٌ جَدِيدٌ، اسْمُهُ زَيْدٌ.', 'This is a new student (m.); his name is Zaid.'],
      ['A', 'هَلْ هُوَ طَوِيلٌ؟', 'Is he tall?'],
      ['B', 'نَعَمْ، هُوَ طَوِيلٌ وَذَكِيٌّ.', 'Yes, he is tall and clever.'],
      ['A', 'وَمَنْ هٰذِهِ؟', 'And who is this (f.)?'],
      ['B', 'هٰذِهِ مُعَلِّمَةٌ جَدِيدَةٌ، وَهِيَ لَطِيفَةٌ جِدًّا.', 'This is a new teacher (f.), and she is very kind.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: describe two real people (a boy and a girl) — every word must match.',
  },
  questions: [
    { q: 'مَنْ هٰذَا؟ (طَالِبٌ)', en: 'Who is this? (a male student)', start: 'هٰذَا طَالِبٌ …', more: '… وَهُوَ ذَكِيٌّ' },
    { q: 'مَنْ هٰذِهِ؟ (طَبِيبَةٌ)', en: 'Who is this? (a female doctor)', start: 'هٰذِهِ طَبِيبَةٌ …', more: '… وَهِيَ لَطِيفَةٌ' },
    { q: 'هَلْ صَدِيقُكَ طَوِيلٌ؟', en: 'Is your friend tall?', start: 'نَعَمْ، هُوَ … / لَا، هُوَ …', more: '… وَ…' },
    { q: 'هَلْ صَدِيقَتُكِ قَصِيرَةٌ؟', en: 'Is your (girl) friend short?', start: 'نَعَمْ، هِيَ … / لَا، هِيَ …', more: '… وَ…' },
    { q: 'صِفْ مُعَلِّمَكَ أَوْ مُعَلِّمَتَكَ.', en: 'Describe your teacher.', start: 'مُعَلِّمِي … / مُعَلِّمَتِي …', more: '… وَ… جِدًّا' },
  ],
  card: {
    title: 'Role-play card — describing classmates for the school website', ar: 'أَصِفُ زُمَلَائِي', you: 'a student', them: 'the website editor',
    tasks: [
      { ex: 'مَنْ هٰذَا فِي الصُّورَةِ؟', task: 'Say who the boy is.', plan: 'مَنْ ← هٰذَا … ، اسْمُهُ …', model: 'هٰذَا صَدِيقِي، اسْمُهُ عَلِيٌّ.', modelEn: 'This is my friend; his name is Ali.' },
      { ex: 'كَيْفَ هُوَ؟', task: 'Give two adjectives (m.).', plan: 'كَيْفَ ← هُوَ … وَ…', model: 'هُوَ طَوِيلٌ وَذَكِيٌّ.', modelEn: 'He is tall and clever.' },
      { ex: 'وَمَنْ هٰذِهِ؟', task: 'Say who the girl is.', plan: 'مَنْ ← هٰذِهِ … ، اسْمُهَا …', model: 'هٰذِهِ صَدِيقَتِي، اسْمُهَا سَارَةُ.', modelEn: 'This is my friend; her name is Sara.' },
      { ex: 'كَيْفَ هِيَ؟', task: 'Give two adjectives (f.).', plan: 'كَيْفَ ← هِيَ … وَ…', model: 'هِيَ قَصِيرَةٌ وَلَطِيفَةٌ جِدًّا.', modelEn: 'She is short and very kind.' },
    ],
    girl: 'the questions do not change — but the Speaker’s adjectives must match the person described',
    notes: 'Language: hādhā / hādhihi · huwa + adjective / hiya + adjective-a · ة on every feminine word.',
  },
  talk: {
    title: '30 seconds: two people I know', ar: 'شَخْصَانِ أَعْرِفُهُمَا',
    text: 'Talk for 30 seconds about two people you know — a boy or man and a girl or woman. Who are they, and what are they like?',
    routes: {
      core: 'هٰذَا … ، هُوَ … · هٰذِهِ … ، هِيَ …',
      develop: 'Two adjectives for each person, joined with وَ.',
      stretch: 'Add جِدًّا and one more person (a teacher or a neighbour).',
    },
    phrases: [['هٰذَا … ، هُوَ …', 'this (m.) is …, he is …'], ['هٰذِهِ … ، هِيَ …', 'this (f.) is …, she is …'], ['… وَ…', '… and …'], ['جِدًّا', 'very']],
  },
  builder: [
    { en: 'This is a clever student (f.).', cols: [['هٰذِهِ', 'هٰذَا'], ['طَالِبَةٌ', 'طَالِبٌ'], ['ذَكِيَّةٌ', 'ذَكِيٌّ']], key: [0, 0, 0], why: 'Feminine all through: هٰذِهِ … طَالِبَةٌ ذَكِيَّةٌ.' },
    { en: 'He is a tall doctor.', cols: [['هُوَ', 'هِيَ'], ['طَبِيبٌ', 'طَبِيبَةٌ'], ['طَوِيلٌ', 'طَوِيلَةٌ']], key: [0, 0, 0], why: 'Masculine all through: هُوَ طَبِيبٌ طَوِيلٌ.' },
    { en: 'My neighbour (f.) is very kind.', cols: [['جَارَتِي', 'جَارِي'], ['لَطِيفَةٌ', 'لَطِيفٌ'], ['جِدًّا', 'أَيْضًا']], key: [0, 0, 0], why: 'A woman → جَارَتِي … لَطِيفَةٌ; very = جِدًّا.' },
  ],
  errors: [
    { wrong: 'هٰذِهِ مُعَلِّمَةٌ لَطِيفٌ.', hint: 'Does the adjective match?', right: 'هٰذِهِ مُعَلِّمَةٌ لَطِيفَةٌ.', why: 'A feminine noun → feminine adjective with ة.' },
    { wrong: 'هٰذَا بِنْتٌ صَغِيرَةٌ.', hint: 'A girl is feminine — even without ة.', right: 'هٰذِهِ بِنْتٌ صَغِيرَةٌ.', why: 'بِنْتٌ is feminine → هٰذِهِ.' },
    { wrong: 'صَدِيقِي ذَكِيَّةٌ.', hint: 'My friend (m.).', right: 'صَدِيقِي ذَكِيٌّ.', why: 'A boy → masculine adjective ذَكِيٌّ.' },
  ],
  task: {
    title: 'Describe four people', ar: 'أَصِفُ أَرْبَعَةَ أَشْخَاصٍ',
    text: 'Write short descriptions (about 35–50 words) of four people you know: two boys or men and two girls or women. For each: • who they are (هٰذَا / هٰذِهِ) • their name • two adjectives that match.',
    range: [25, 65],
    phrases: [['هٰذَا صَدِيقِي … ، هُوَ … وَ…', 'this is my friend …, he is … and …'], ['هٰذِهِ مُعَلِّمَتِي … ، هِيَ … وَ…', 'this is my teacher …, she is … and …'], ['اسْمُهُ … · اسْمُهَا …', 'his name … · her name …'], ['جِدًّا', 'very']],
    coreFrames: [
      { ar: 'هٰذَا ______ ، اسْمُهُ ______ . هُوَ ______ .', en: 'This is …, his name is … He is …' },
      { ar: 'هٰذِهِ ______ ، اسْمُهَا ______ . هِيَ ______ .', en: 'This is …, her name is … She is …' },
    ],
    developFrames: [
      { ar: 'هُوَ ______ وَ ______ جِدًّا.', en: 'He is … and very …' },
      { ar: 'هِيَ ______ وَ ______ أَيْضًا.', en: 'She is … and … too.' },
    ],
    bank: ['هٰذَا · هٰذِهِ', 'هُوَ · هِيَ', 'طَالِبٌ · طَالِبَةٌ', 'مُعَلِّمٌ · مُعَلِّمَةٌ', 'طَوِيلٌ · طَوِيلَةٌ', 'ذَكِيٌّ · ذَكِيَّةٌ', 'لَطِيفٌ · لَطِيفَةٌ', 'جِدًّا'],
    model: {
      text: 'هٰذَا صَدِيقِي، اسْمُهُ عُمَرُ. هُوَ طَوِيلٌ وَذَكِيٌّ. هٰذِهِ صَدِيقَتِي، اسْمُهَا هُدَى. هِيَ قَصِيرَةٌ وَلَطِيفَةٌ. هٰذَا جَارِي، اسْمُهُ السَّيِّدُ أَحْمَدُ. هُوَ كَبِيرٌ وَلَطِيفٌ جِدًّا. وَهٰذِهِ مُعَلِّمَتِي، اسْمُهَا الأُسْتَاذَةُ مَرْيَمُ. هِيَ ذَكِيَّةٌ جِدًّا.',
      en: '“This is my friend; his name is Omar. He is tall and clever. This is my friend; her name is Huda. She is short and kind. This is my neighbour, Mr Ahmed. He is old and very kind. And this is my teacher, Miss Maryam. She is very clever.”',
      find: ['هُوَ طَوِيلٌ وَذَكِيٌّ', 'هِيَ قَصِيرَةٌ وَلَطِيفَةٌ', 'هٰذَا جَارِي', 'هٰذِهِ مُعَلِّمَتِي'],
    },
  },
  checkCore: 'use هٰذَا / هُوَ for a boy and هٰذِهِ / هِيَ for a girl?',
  checkDevelop: 'add ة to every adjective for a girl or woman?',
});
