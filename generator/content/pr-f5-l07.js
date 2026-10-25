'use strict';
/* Practice Room · F5-L07 · The body and its parts. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f5-l07',
  arShort: 'الجِسْمُ',
  grammar: 'hādhā / hādhihi by gender (ʿayn, udhun, yad, rijl, qadam are feminine); the dual for pairs (ʿaynāni · yadāni); arā bi-ʿaynayya · asmaʿu bi-udhunayya; possessive endings',
  focus: 'Students run their own speaking and writing practice about the body: say and point to body parts, act a short dialogue, answer question cards, do a role-play card describing a monster for a class story, give a 30-second talk, then build, fix and write a description of a character.',
  words1: 'Head and face', words2: 'Body, arms and legs',
  dialogue: {
    title: 'What do we do with it?', ar: 'مَاذَا نَفْعَلُ بِهِ؟',
    lines: [
      ['A', 'مَا هٰذِهِ؟ (point to your eye)', 'What is this?'],
      ['B', 'هٰذِهِ عَيْنٌ. لِي عَيْنَانِ.', 'This is an eye. I have two eyes.'],
      ['A', 'مَاذَا تَفْعَلُ بِعَيْنَيْكَ؟', 'What do you do with your eyes?'],
      ['B', 'أَرَى بِعَيْنَيَّ، وَأَسْمَعُ بِأُذُنَيَّ.', 'I see with my eyes, and I hear with my ears.'],
      ['A', 'وَمَا هٰذَا؟ (point to your head)', 'And what is this?'],
      ['B', 'هٰذَا رَأْسٌ. وَأَكْتُبُ بِيَدِي، وَأَمْشِي بِقَدَمَيَّ.', 'This is a head. And I write with my hand, and I walk with my feet.'],
    ],
    foot: 'Round 1: read it in pairs, pointing to each part on camera. Round 2: swap letters. Round 3: the Leader points silently — the Speaker names it with هٰذَا / هٰذِهِ.',
  },
  questions: [
    { q: 'مَا هٰذَا؟ / مَا هٰذِهِ؟ (point)', en: 'What is this? (point to a part)', start: 'هٰذَا … / هٰذِهِ …', more: '… لِي … ← لِي يَدَانِ' },
    { q: 'بِمَاذَا تَرَى؟', en: 'What do you see with?', start: 'أَرَى بِعَيْنَيَّ …', more: '…' },
    { q: 'بِمَاذَا تَكْتُبُ؟', en: 'What do you write with?', start: 'أَكْتُبُ بِيَدِي …', more: '… اليُمْنَى / اليُسْرَى' },
    { q: 'كَمْ إِصْبَعًا لَكَ؟', en: 'How many fingers do you have?', start: 'لِي عَشَرَةُ أَصَابِعَ', more: '…' },
    { q: 'صِفْ وَجْهَ صَدِيقِكَ.', en: 'Describe your friend’s face.', start: 'عَيْنَاهُ … وَشَعْرُهُ …', more: '… وَأَنْفُهُ …' },
  ],
  card: {
    title: 'Role-play card — designing a friendly monster for a class story', ar: 'وَحْشٌ لَطِيفٌ', you: 'the designer', them: 'the story writer',
    tasks: [
      { ex: 'كَمْ رَأْسًا لِلْوَحْشِ؟', task: 'Say how many heads.', plan: 'كَمْ ← لَهُ رَأْسَانِ / رَأْسٌ وَاحِدٌ', model: 'لَهُ رَأْسَانِ كَبِيرَانِ!', modelEn: 'It has two big heads!' },
      { ex: 'وَكَمْ عَيْنًا؟', task: 'Number + colour.', plan: 'كَمْ ← لَهُ … أَعْيُنٍ … ← ثَلَاثُ أَعْيُنٍ', model: 'لَهُ ثَلَاثُ أَعْيُنٍ خَضْرَاءَ.', modelEn: 'It has three green eyes.' },
      { ex: 'صِفْ يَدَيْهِ وَرِجْلَيْهِ.', task: 'Describe hands and legs.', plan: 'صِفْ ← يَدَاهُ … وَرِجْلَاهُ …', model: 'يَدَاهُ صَغِيرَتَانِ، وَرِجْلَاهُ طَوِيلَتَانِ جِدًّا.', modelEn: 'Its hands are small, and its legs are very long.' },
      { ex: 'مَاذَا يَفْعَلُ بِأُذُنَيْهِ الكَبِيرَتَيْنِ؟', task: 'Say what it does with them.', plan: 'مَاذَا ← يَسْمَعُ بِهِمَا …', model: 'يَسْمَعُ بِهِمَا كُلَّ شَيْءٍ فِي المَدِينَةِ!', modelEn: 'It hears everything in the city with them!' },
    ],
    girl: 'صِفِي',
    notes: 'Language: duals and their adjectives (ṣaghīratāni · ṭawīlatāni) · lahu + body parts · bi- + body part.',
  },
  talk: {
    title: '30 seconds: describe a character', ar: 'أَصِفُ شَخْصِيَّةً',
    text: 'In 30 seconds, describe a real person or a cartoon character: face, eyes, hair, height — and one thing they do with a body part.',
    routes: {
      core: 'Three parts with hādhā / hādhihi or lahu / lahā.',
      develop: 'Add duals with adjectives: عَيْنَاهُ زَرْقَاوَانِ.',
      stretch: 'Add verbs: يَرَى بِعَيْنَيْهِ · يَمْشِي بِرِجْلَيْهِ and a comparison.',
    },
  },
  builder: [
    { en: 'This is my hand.', cols: [['هٰذِهِ', 'هٰذَا'], ['يَدِي', 'يَدُكَ'], ['اليُمْنَى.', 'اليَمِينُ.']], key: [0, 0, 0], why: 'يَدٌ is feminine (no ة!) → هٰذِهِ.' },
    { en: 'I hear with my ears.', cols: [['أَسْمَعُ', 'يَسْمَعُ'], ['بِأُذُنَيَّ', 'بِأُذُنَايَ'], ['.', 'أَمْسِ.']], key: [0, 0, 0], why: 'with my two ears = بِأُذُنَيَّ (dual after bi-).' },
    { en: 'Her eyes are big.', cols: [['عَيْنَاهَا', 'عَيْنَاهُ'], ['كَبِيرَتَانِ', 'كَبِيرَانِ'], ['.', 'جِدًّا؟']], key: [0, 0, 0], why: 'Her → -hā; عَيْنٌ is feminine → dual adjective كَبِيرَتَانِ.' },
  ],
  errors: [
    { wrong: 'هٰذَا عَيْنٌ.', hint: 'عَيْنٌ is feminine without ة.', right: 'هٰذِهِ عَيْنٌ.', why: 'Body pairs (عَيْنٌ · أُذُنٌ · يَدٌ · رِجْلٌ · قَدَمٌ) are feminine.' },
    { wrong: 'لِي اثْنَانِ يَدٌ.', hint: 'Two of something → one word.', right: 'لِي يَدَانِ.', why: 'Use the dual: يَدَانِ.' },
    { wrong: 'أَرَى بِعَيْنِي الاثْنَيْنِ.', hint: 'With my two eyes …', right: 'أَرَى بِعَيْنَيَّ.', why: 'Dual + my = عَيْنَيَّ.' },
  ],
  task: {
    title: 'Describe a character', ar: 'أَصِفُ شَخْصِيَّةً',
    text: 'Write a description (about 40–60 words) of a character for a class story — a person, a robot or a friendly monster. Include: • the head and face (eyes, nose, mouth, hair) • arms, hands, legs and feet, with numbers or duals • colours and sizes that agree • what it does with two body parts.',
    phrases: [['لَهُ / لَهَا …', 'he / she / it has …'], ['عَيْنَاهُ / عَيْنَاهَا …', 'his / her eyes are …'], ['يَدَاهُ … وَرِجْلَاهُ …', 'its hands are … and its legs are …'], ['يَرَى بِعَيْنَيْهِ · يَمْشِي بِرِجْلَيْهِ', 'it sees with … · walks with …']],
    coreFrames: [
      { ar: 'اسْمُهُ / اسْمُهَا ______ .', en: 'His / her name is …' },
      { ar: 'لَهُ / لَهَا رَأْسٌ ______ ، وَعَيْنَانِ ______ .', en: 'It has a … head and … eyes.' },
      { ar: 'لَهُ / لَهَا ______ وَ ______ .', en: 'It has … and …' },
      { ar: 'يَدَاهُ / يَدَاهَا ______ .', en: 'Its hands are …' },
    ],
    developFrames: [
      { ar: 'يَرَى / تَرَى بِعَيْنَيْهِ ______ ، وَيَسْمَعُ / وَتَسْمَعُ بِأُذُنَيْهِ ______ .', en: 'With its eyes it sees …, and with its ears it hears …' },
      { ar: 'رِجْلَاهُ ______ ، لِذٰلِكَ ______ .', en: 'Its legs are …, so …' },
    ],
    bank: ['رَأْسٌ · وَجْهٌ', 'عَيْنَانِ · أُذُنَانِ', 'أَنْفٌ · فَمٌ', 'يَدَانِ · ذِرَاعَانِ', 'رِجْلَانِ · قَدَمَانِ', 'كَبِيرٌ · صَغِيرَتَانِ', 'لَهُ · لَهَا', 'يَرَى بِعَيْنَيْهِ · يَمْشِي بِرِجْلَيْهِ'],
    model: {
      text: 'هٰذَا رُوبُوتٌ اسْمُهُ نُورٌ. لَهُ رَأْسٌ مُرَبَّعٌ فِضِّيٌّ، وَعَيْنَانِ زَرْقَاوَانِ كَبِيرَتَانِ. أَنْفُهُ صَغِيرٌ، وَفَمُهُ أَحْمَرُ. لَهُ أَرْبَعُ أَذْرُعٍ طَوِيلَةٍ، وَيَدَاهُ قَوِيَّتَانِ جِدًّا. رِجْلَاهُ قَصِيرَتَانِ، لِذٰلِكَ يَمْشِي بِبُطْءٍ. يَرَى بِعَيْنَيْهِ فِي اللَّيْلِ، وَيَحْمِلُ بِيَدَيْهِ الكُتُبَ الثَّقِيلَةَ لِلْمُعَلِّمِ.',
      en: '“This is a robot called Nour. It has a square silver head and two big blue eyes. Its nose is small and its mouth is red. It has four long arms, and its hands are very strong. Its legs are short, so it walks slowly. It sees with its eyes at night, and carries the teacher’s heavy books with its hands.”',
      find: ['عَيْنَانِ زَرْقَاوَانِ', 'يَدَاهُ قَوِيَّتَانِ', 'رِجْلَاهُ قَصِيرَتَانِ', 'يَرَى بِعَيْنَيْهِ'],
    },
  },
  checkCore: 'use هٰذِهِ for the feminine body parts (عَيْنٌ · يَدٌ · رِجْلٌ …)?',
  checkDevelop: 'use duals with matching adjectives (عَيْنَانِ كَبِيرَتَانِ)?',
});
