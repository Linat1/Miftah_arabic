'use strict';
/* Practice Room · D2-L07 · Listening — people, personality and style descriptions. Partners read, partners catch. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd2-l07',
  arShort: 'أَسْتَمِعُ إِلَى الوَصْفِ',
  grammar: 'tracking reference in descriptions: huwa / hiya · -hu / -hā · alladhī / allatī; what changes after wa-lākinna and baynamā; fact vs opinion (fī raʾyī · yabdū) vs inference (evidence → li-dhālika); adjective endings as clues to WHO',
  focus: 'Students run their own listening-and-speaking practice in pairs: one reads a short description of people aloud, the other tracks who is who, catches what changes after “but”, and separates fact, opinion and inference. Then they build, fix and write a description with traps for a partner to test.',
  words1: 'Linking and opinion', words2: 'People and style words',
  pick: [0, 2, 3, 4, 12, 13, 17, 19, 20, 23, 24, 32],
  dialogue: {
    title: 'Who is who?', ar: 'مَنْ هُوَ؟ مَنْ هِيَ؟',
    lines: [
      ['A', 'عِنْدِي أَخٌ وَأُخْتٌ. الكَبِيرُ طَوِيلٌ وَخَجُولٌ، بَيْنَمَا الصَّغِيرَةُ مَرِحَةٌ جِدًّا.', 'I have a brother and a sister. The older one is tall and shy, whereas the little one is very cheerful.'],
      ['B', 'إِذَنِ الأَخُ خَجُولٌ، لِأَنَّ «الكَبِيرُ» مُذَكَّرٌ.', 'So the brother is shy, because “al-kabīr” is masculine.'],
      ['A', 'صَحِيحٌ! أُخْتِي تَلْبَسُ مَلَابِسَ مُلَوَّنَةً، وَلٰكِنَّهَا فِي المَدْرَسَةِ تَلْبَسُ الزِّيَّ الرَّسْمِيَّ.', 'Right! My sister wears colourful clothes, but at school she wears formal uniform.'],
      ['B', 'فِي المَدْرَسَةِ: الزِّيُّ الرَّسْمِيُّ. «وَلٰكِنَّ» غَيَّرَتِ المَعْلُومَةَ.', 'At school: formal uniform. “But” changed the information.'],
      ['A', 'وَأَخِي دَائِمًا يُسَاعِدُ جَدِّي فِي الحَدِيقَةِ.', 'And my brother always helps my grandfather in the garden.'],
      ['B', 'هٰذَا دَلِيلٌ عَلَى أَنَّهُ مُتَعَاوِنٌ — اسْتِنْتَاجٌ، لَا حَقِيقَةٌ مَكْتُوبَةٌ.', 'That is evidence he is helpful — an inference, not a stated fact.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: A describes two real people; B tracks who is who after every sentence.',
  },
  qTitle: 'Catch it — the Leader reads, the Speaker answers',
  questions: [
    { q: 'سَارَةُ وَأَخُوهَا: هِيَ قَصِيرَةٌ، وَهُوَ أَطْوَلُ مِنْهَا بِكَثِيرٍ. — مَنِ الطَّوِيلُ؟', en: '“Sara and her brother: she is short, he is much taller.” — Who is tall?', start: 'الأَخُ …', more: 'Clue: هُوَ أَطْوَلُ' },
    { q: 'صَدِيقِي صَبُورٌ عَادَةً، وَلٰكِنَّهُ عَصَبِيٌّ فِي المُبَارَيَاتِ. — مَتَى هُوَ عَصَبِيٌّ؟', en: '“My friend is usually patient, but irritable in matches.” — When is he irritable?', start: 'فِي …', more: 'Key word: وَلٰكِنَّ' },
    { q: 'المُعَلِّمَةُ الَّتِي تَرْتَدِي نَظَّارَةً صَارِمَةٌ، أَمَّا الأُخْرَى فَوَدُودَةٌ. — مَنِ الوَدُودَةُ؟', en: '“The teacher who wears glasses is strict; the other is friendly.” — Who is friendly?', start: 'المُعَلِّمَةُ الَّتِي لَا …', more: 'Trap: النَّظَّارَةُ = الصَّارِمَةُ' },
    { q: 'فِي رَأْيِي هٰذَا الفُسْتَانُ أَنِيقٌ، وَثَمَنُهُ مِئَةُ جُنَيْهٍ. — مَا الحَقِيقَةُ؟ مَا الرَّأْيُ؟', en: '“I think this dress is elegant; it costs £100.” — Fact? Opinion?', start: 'الحَقِيقَةُ: الثَّمَنُ … الرَّأْيُ: …', more: 'Clue: فِي رَأْيِي = opinion' },
    { q: 'يَبْتَسِمُ خَالِدٌ دَائِمًا وَيُضْحِكُ الجَمِيعَ. — كَيْفَ شَخْصِيَّتُهُ؟', en: '“Khalid always smiles and makes everyone laugh.” — What is he like?', start: 'هُوَ مَرِحٌ …', more: '… الدَّلِيلُ: …' },
  ],
  card: {
    title: 'Role-play card — the radio quiz “Guess the person”', ar: 'مُسَابَقَةُ: مَنْ هٰذَا الشَّخْصُ؟', you: 'the contestant (listen, then guess)', them: 'the quiz presenter',
    tasks: [
      { ex: 'هٰذِهِ الشَّخْصِيَّةُ امْرَأَةٌ طَوِيلَةُ القَامَةِ، شَعْرُهَا قَصِيرٌ.', task: 'Repeat two facts.', plan: 'حَقَائِقُ ← هِيَ … وَشَعْرُهَا …', model: 'هِيَ امْرَأَةٌ طَوِيلَةٌ، وَشَعْرُهَا قَصِيرٌ.', modelEn: 'She is a tall woman, and her hair is short.' },
      { ex: 'تَعْمَلُ مَعَ الأَطْفَالِ كُلَّ يَوْمٍ، وَلَا تَغْضَبُ أَبَدًا.', task: 'Infer a quality.', plan: 'اسْتِنْتَاجٌ ← إِذَنْ هِيَ … لِأَنَّهَا …', model: 'إِذَنْ هِيَ صَبُورَةٌ جِدًّا، لِأَنَّهَا لَا تَغْضَبُ أَبَدًا.', modelEn: 'So she is very patient, because she never gets angry.' },
      { ex: 'كَانَتْ تَلْبَسُ أَبْيَضَ دَائِمًا، وَلٰكِنَّهَا الآنَ تَلْبَسُ أَزْرَقَ.', task: 'Catch the change.', plan: '', model: 'الآنَ تَلْبَسُ الأَزْرَقَ، لَا الأَبْيَضَ.', modelEn: 'Now she wears blue, not white.' },
      { unexpected: true, ex: 'مَنْ هِيَ فِي رَأْيِكَ؟', task: 'Guess + evidence.', plan: '', model: 'أَظُنُّ أَنَّهَا مُمَرِّضَةٌ فِي مُسْتَشْفَى الأَطْفَالِ، لِأَنَّهَا صَبُورَةٌ وَتَلْبَسُ الأَزْرَقَ.', modelEn: 'I think she is a nurse at the children’s hospital, because she is patient and wears blue.' },
    ],
    girl: 'presenter to a girl: رَأْيِكِ',
    notes: 'Separate the three: fact (stated) · opinion (fī raʾyī) · inference (your conclusion + evidence).',
  },
  talk: {
    title: 'One minute: a description with traps', ar: 'وَصْفٌ فِيهِ فِخَاخٌ',
    text: 'Describe two people (one male, one female) for one minute. Hide two traps. Your partner must say who is who and name the traps.',
    head: 'Speak for one minute — your partner tracks who is who',
    routes: {
      core: 'Four facts about each person; partner writes them under “he” / “she”.',
      develop: 'Add one وَلٰكِنَّ change and one بَيْنَمَا contrast.',
      stretch: 'Add one opinion and one behaviour your partner must turn into an inference.',
    },
  },
  builder: [
    { en: 'My aunt is patient, whereas my uncle is irritable.', cols: [['عَمَّتِي صَبُورَةٌ،', 'عَمَّتِي صَبُورٌ،'], ['بَيْنَمَا', 'لِأَنَّ'], ['عَمِّي عَصَبِيٌّ.', 'عَمِّي عَصَبِيَّةٌ.']], key: [0, 0, 0], why: 'Each adjective agrees with its own person.' },
    { en: 'He is usually calm, but he is nervous before exams.', cols: [['هُوَ هَادِئٌ عَادَةً،', 'هِيَ هَادِئَةٌ عَادَةً،'], ['وَلٰكِنَّهُ', 'وَلٰكِنَّهَا'], ['قَلِقٌ قَبْلَ الامْتِحَانَاتِ.', 'قَلِقَةٌ قَبْلَ الامْتِحَانَاتِ.']], key: [0, 0, 0], why: 'He → -hu and masculine adjectives throughout.' },
    { en: 'She shares her food, so she is generous.', cols: [['تُشَارِكُ طَعَامَهَا،', 'يُشَارِكُ طَعَامَهُ،'], ['لِذٰلِكَ', 'لِأَنَّ'], ['هِيَ كَرِيمَةٌ.', 'هِيَ كَرِيمٌ.']], key: [0, 0, 0], why: 'Evidence → لِذٰلِكَ → inference.' },
  ],
  errors: [
    { wrong: '«أُخْتِي طَوِيلَةٌ وَأَخِي قَصِيرٌ.» ← مَنِ الطَّوِيلُ؟ الأَخُ.', hint: 'Look at the ending.', right: 'الطَّوِيلَةُ هِيَ الأُخْتُ.', why: 'طَوِيلَةٌ (f.) belongs to أُخْتِي.' },
    { wrong: '«هُوَ مَرِحٌ، وَلٰكِنَّهُ اليَوْمَ حَزِينٌ.» ← كَيْفَ هُوَ اليَوْمَ؟ مَرِحٌ.', hint: 'Listen after وَلٰكِنَّ.', right: 'هُوَ حَزِينٌ اليَوْمَ.', why: 'The part after وَلٰكِنَّ is the answer for “today”.' },
    { wrong: '«فِي رَأْيِي هِيَ أَنِيقَةٌ.» ← هٰذِهِ حَقِيقَةٌ.', hint: 'Who says it?', right: 'هٰذَا رَأْيٌ، لَيْسَ حَقِيقَةً.', why: 'فِي رَأْيِي marks an opinion.' },
  ],
  task: {
    title: 'A description with traps for my partner', ar: 'وَصْفٌ فِيهِ فِخَاخٌ لِزَمِيلِي',
    text: 'Write a description (about 60–80 words) of two people — one male, one female — for a listening test. Include: • appearance and personality for each, with correct agreement • one change after وَلٰكِنَّ • one contrast with بَيْنَمَا • one opinion (فِي رَأْيِي) • one behaviour that shows a quality (for an inference). Then write three questions. Read it aloud to your partner.',
    phrases: [['… بَيْنَمَا …', '… whereas …'], ['… وَلٰكِنَّهُ / وَلٰكِنَّهَا …', '… but he / she …'], ['فِي رَأْيِي … · يَبْدُو …', 'in my opinion … · seems …'], ['مَنْ …؟ · كَيْفَ …؟ · مَا الدَّلِيلُ؟', 'who …? · what is … like? · what is the evidence?']],
    coreFrames: [
      { ar: 'عِنْدِي ______ وَ ______ .', en: 'I have … and …' },
      { ar: 'هُوَ ______ القَامَةِ وَ ______ ، بَيْنَمَا هِيَ ______ .', en: 'He is … and …, whereas she …' },
      { ar: '______ ، وَلٰكِنَّهُ / وَلٰكِنَّهَا ______ .', en: '…, but he / she …' },
      { ar: 'فِي رَأْيِي ______ .', en: 'In my opinion …' },
    ],
    developFrames: [
      { ar: 'دَائِمًا يُسَاعِدُ / تُسَاعِدُ ______ .', en: 'He / she always helps … (→ inference)' },
      { ar: 'أَسْئِلَةٌ: ١) مَنْ …؟ ٢) كَيْفَ …؟ ٣) مَا الدَّلِيلُ عَلَى أَنَّ …؟', en: 'Questions: 1) Who …? 2) What … like? 3) What shows that …?' },
    ],
    bank: ['بَيْنَمَا', 'وَلٰكِنَّ', 'فِي رَأْيِي', 'لِذٰلِكَ', 'عَلَى الرَّغْمِ مِنْ أَنَّ', 'الَّذِي · الَّتِي', 'هُوَ · هِيَ', 'دَلِيلٌ · اسْتِنْتَاجٌ'],
    model: {
      text: `عِنْدِي جَارَانِ: سَمِيرٌ وَأُخْتُهُ دَانَةُ. سَمِيرٌ طَوِيلُ القَامَةِ وَخَجُولٌ، بَيْنَمَا دَانَةُ قَصِيرَةٌ وَوَاثِقَةٌ جِدًّا. شَعْرُ سَمِيرٍ أَسْوَدُ، وَلٰكِنَّهُ صَبَغَهُ أَزْرَقَ فِي الصَّيْفِ! دَانَةُ تُسَاعِدُ الجِيرَانَ كِبَارَ السِّنِّ كُلَّ أُسْبُوعٍ. فِي رَأْيِي سَمِيرٌ أَنِيقٌ أَكْثَرَ مِنْ أُخْتِهِ، لِأَنَّهُ يَلْبَسُ مَلَابِسَ رَسْمِيَّةً دَائِمًا.
أَسْئِلَةٌ: ١) مَنِ الوَاثِقُ؟ ٢) مَا لَوْنُ شَعْرِ سَمِيرٍ فِي الصَّيْفِ؟ ٣) مَا الدَّلِيلُ عَلَى أَنَّ دَانَةَ مُتَعَاوِنَةٌ؟`,
      en: '“I have two neighbours: Samir and his sister Dana. Samir is tall and shy, whereas Dana is short and very confident. Samir’s hair is black, but he dyed it blue in the summer! Dana helps the elderly neighbours every week. In my opinion Samir is more elegant than his sister, because he always wears formal clothes. Questions: 1) Who is confident? 2) What colour is Samir’s hair in summer? 3) What shows that Dana is helpful?”',
      find: ['بَيْنَمَا دَانَةُ', 'وَلٰكِنَّهُ صَبَغَهُ', 'فِي رَأْيِي', 'تُسَاعِدُ الجِيرَانَ'],
    },
  },
  checkCore: 'track who is who using he / she and the adjective endings?',
  checkDevelop: 'separate fact, opinion and inference, and catch the change after وَلٰكِنَّ?',
});
