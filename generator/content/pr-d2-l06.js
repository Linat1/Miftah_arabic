'use strict';
/* Practice Room · D2-L06 · Describing appearance — a full, respectful portrait. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd2-l06',
  arShort: 'وَصْفُ المَظْهَرِ',
  grammar: 'portrait order (height → hair → eyes → clothes); lahu / lahā (he / she has); hair is masculine (shaʿruhā ṭawīlun); eyes are dual (ʿaynāhā bunniyyatāni); yartadī / tartadī; picking people out with alladhī / allatī; respectful description only',
  focus: 'Students run their own speaking and writing practice describing appearance: say the appearance words, act a “who is it?” dialogue, answer question cards, do a role-play card describing a lost child to security, give a one-minute portrait, then build, fix and write a full portrait of someone they admire.',
  words1: 'Height and hair', words2: 'Eyes, features and clothes',
  dialogue: {
    title: 'Which one is your cousin?', ar: 'مَنْ ابْنَةُ عَمِّكَ؟',
    lines: [
      ['A', 'أَيُّ بِنْتٍ هِيَ ابْنَةُ عَمِّكَ؟', 'Which girl is your cousin?'],
      ['B', 'هِيَ البِنْتُ الَّتِي تَرْتَدِي نَظَّارَةً.', 'She’s the girl who is wearing glasses.'],
      ['A', 'الطَّوِيلَةُ أَمِ القَصِيرَةُ؟', 'The tall one or the short one?'],
      ['B', 'هِيَ مُتَوَسِّطَةُ القَامَةِ، وَشَعْرُهَا أَسْوَدُ طَوِيلٌ.', 'She is of medium height, and her hair is long and black.'],
      ['A', 'وَالوَلَدُ الَّذِي بِجَانِبِهَا؟', 'And the boy next to her?'],
      ['B', 'هٰذَا أَخُوهَا. لَهُ شَعْرٌ مُجَعَّدٌ، وَعَيْنَاهُ خَضْرَاوَانِ.', 'That’s her brother. He has curly hair, and his eyes are green.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: describe someone in a photo on your screen — your partner guesses who.',
  },
  questions: [
    { q: 'صِفْ نَفْسَكَ.', en: 'Describe yourself.', start: 'أَنَا … القَامَةِ، وَشَعْرِي …', more: '… وَعَيْنَايَ …' },
    { q: 'كَيْفَ يَبْدُو صَدِيقُكَ المُقَرَّبُ؟', en: 'What does your best friend look like?', start: 'هُوَ … القَامَةِ، وَلَهُ …', more: '… وَيَرْتَدِي …' },
    { q: 'مَا لَوْنُ عَيْنَيْ أُمِّكَ؟', en: 'What colour are your mother’s eyes?', start: 'عَيْنَاهَا بُنِّيَّتَانِ / سَوْدَاوَانِ …', more: '… مِثْلَ عَيْنَيَّ' },
    { q: 'مَنْ يَرْتَدِي نَظَّارَةً فِي عَائِلَتِكَ؟', en: 'Who wears glasses in your family?', start: '… يَرْتَدِي / تَرْتَدِي نَظَّارَةً', more: '… لِلْقِرَاءَةِ فَقَطْ' },
    { q: 'صِفِ الشَّخْصَ الَّذِي يَجْلِسُ بِجَانِبِكَ فِي الصَّفِّ.', en: 'Describe the person who sits next to you in class.', start: 'الشَّخْصُ الَّذِي / الَّتِي …', more: '… وَهُوَ / هِيَ أَيْضًا …' },
  ],
  card: {
    title: 'Role-play card — a lost child at the shopping centre', ar: 'طِفْلٌ ضَائِعٌ', you: 'an older sibling', them: 'the security guard',
    tasks: [
      { ex: 'كَيْفَ يَبْدُو أَخُوكَ؟', task: 'Age + height.', plan: 'كَيْفَ ← عُمْرُهُ … وَهُوَ … القَامَةِ', model: 'عُمْرُهُ سِتُّ سَنَوَاتٍ، وَهُوَ قَصِيرُ القَامَةِ.', modelEn: 'He is six and short.' },
      { ex: 'وَشَعْرُهُ؟', task: 'Hair + eyes.', plan: 'شَعْرُهُ ← شَعْرُهُ … ، وَعَيْنَاهُ …', model: 'شَعْرُهُ بُنِّيٌّ قَصِيرٌ، وَعَيْنَاهُ زَرْقَاوَانِ.', modelEn: 'His hair is short and brown, and his eyes are blue.' },
      { ex: 'مَاذَا يَرْتَدِي؟', task: 'Clothes + colours.', plan: '', model: 'يَرْتَدِي قَمِيصًا أَحْمَرَ وَسِرْوَالًا أَزْرَقَ، وَمَعَهُ حَقِيبَةٌ صَغِيرَةٌ.', modelEn: 'He is wearing a red shirt and blue trousers, and he has a small bag.' },
      { unexpected: true, ex: 'هُنَاكَ وَلَدَانِ. هَلْ هُوَ الوَلَدُ الَّذِي يَبْكِي؟', task: 'Pick him out.', plan: '', model: 'لَا، أَخِي هُوَ الوَلَدُ الَّذِي يَرْتَدِي القُبَّعَةَ الصَّفْرَاءَ!', modelEn: 'No — my brother is the boy wearing the yellow cap!' },
    ],
    girl: 'for a lost sister: عُمْرُهَا · قَصِيرَةُ القَامَةِ · شَعْرُهَا · عَيْنَاهَا · تَرْتَدِي · البِنْتُ الَّتِي',
    notes: 'Portrait order + alladhī / allatī to pick a person out.',
  },
  talk: {
    title: 'One minute: a portrait in order', ar: 'صُورَةٌ بِالتَّرْتِيبِ',
    text: 'Describe someone you admire for one minute in order: who → height → hair → eyes → clothes → one quality.',
    routes: {
      core: 'Height, hair and eyes with the right agreement.',
      develop: 'Add لَهُ / لَهَا, clothes with colours, and الَّذِي / الَّتِي.',
      stretch: 'Add a personality quality with evidence and a comparison (أَطْوَلُ مِنْ …).',
    },
  },
  builder: [
    { en: 'She is tall and her hair is curly.', cols: [['هِيَ طَوِيلَةُ القَامَةِ،', 'هِيَ طَوِيلُ القَامَةِ،'], ['وَشَعْرُهَا', 'وَشَعْرُهُ'], ['مُجَعَّدٌ.', 'مُجَعَّدَةٌ.']], key: [0, 0, 0], why: 'She → طَوِيلَةُ; hair is masculine → مُجَعَّدٌ.' },
    { en: 'His eyes are brown and big.', cols: [['عَيْنَاهُ', 'عَيْنُهُ'], ['بُنِّيَّتَانِ', 'بُنِّيٌّ'], ['وَكَبِيرَتَانِ.', 'وَكَبِيرٌ.']], key: [0, 0, 0], why: 'Eyes = dual feminine → بُنِّيَّتَانِ وَكَبِيرَتَانِ.' },
    { en: 'The man who wears glasses is my teacher.', cols: [['الرَّجُلُ', 'رَجُلٌ'], ['الَّذِي يَرْتَدِي نَظَّارَةً', 'الَّتِي تَرْتَدِي نَظَّارَةً'], ['هُوَ أُسْتَاذِي.', 'هِيَ أُسْتَاذِي.']], key: [0, 0, 0], why: 'Definite man → الَّذِي + ya-.' },
  ],
  errors: [
    { wrong: 'شَعْرُهَا طَوِيلَةٌ.', hint: 'Is hair masculine or feminine?', right: 'شَعْرُهَا طَوِيلٌ.', why: 'شَعْرٌ is masculine, even for a girl.' },
    { wrong: 'عَيْنَاهَا أَخْضَرُ.', hint: 'Two eyes …', right: 'عَيْنَاهَا خَضْرَاوَانِ.', why: 'Dual feminine colour: خَضْرَاوَانِ.' },
    { wrong: 'البِنْتُ الَّذِي تَرْتَدِي الحِجَابَ أُخْتِي.', hint: 'Who / which for a girl?', right: 'البِنْتُ الَّتِي تَرْتَدِي الحِجَابَ أُخْتِي.', why: 'Feminine → الَّتِي.' },
  ],
  task: {
    title: 'A portrait of someone I admire', ar: 'صُورَةُ شَخْصٍ أُعْجَبُ بِهِ',
    text: 'Write a respectful portrait (about 60–80 words) of someone you admire. Follow the order: who they are → height → hair → eyes → typical clothes → one quality with evidence. Include: • لَهُ / لَهَا • a dual for the eyes • one الَّذِي / الَّتِي sentence • one comparison.',
    phrases: [['هُوَ / هِيَ … القَامَةِ', 'he / she is … (height)'], ['شَعْرُهُ / شَعْرُهَا … · لَهُ لِحْيَةٌ', 'his / her hair … · he has a beard'], ['عَيْنَاهُ / عَيْنَاهَا بُنِّيَّتَانِ', 'his / her eyes are brown'], ['عَادَةً يَرْتَدِي / تَرْتَدِي …', 'he / she usually wears …']],
    coreFrames: [
      { ar: 'أُعْجَبُ بِ______ كَثِيرًا، وَهُوَ / هِيَ ______ .', en: 'I admire …, who is my …' },
      { ar: 'هُوَ / هِيَ ______ القَامَةِ، وَشَعْرُهُ / شَعْرُهَا ______ .', en: 'He / she is … height, and his / her hair is …' },
      { ar: 'عَيْنَاهُ / عَيْنَاهَا ______ .', en: 'His / her eyes are …' },
      { ar: 'عَادَةً يَرْتَدِي / تَرْتَدِي ______ .', en: 'He / she usually wears …' },
    ],
    developFrames: [
      { ar: 'هُوَ الشَّخْصُ الَّذِي / هِيَ الشَّخْصُ الَّتِي ______ .', en: 'He / she is the person who …' },
      { ar: 'هُوَ / هِيَ أَطْوَلُ مِنْ ______ ، وَ ______ .', en: 'He / she is taller than …, and …' },
    ],
    bank: ['طَوِيلُ / طَوِيلَةُ القَامَةِ', 'مُتَوَسِّطُ القَامَةِ', 'شَعْرٌ مُجَعَّدٌ · مُسْتَقِيمٌ', 'عَيْنَانِ بُنِّيَّتَانِ', 'لَهُ لِحْيَةٌ', 'يَرْتَدِي · تَرْتَدِي', 'نَظَّارَةٌ', 'الَّذِي · الَّتِي'],
    model: {
      text: 'أُعْجَبُ بِجَدِّي كَثِيرًا. هُوَ طَوِيلُ القَامَةِ، وَشَعْرُهُ أَبْيَضُ قَصِيرٌ، وَلَهُ لِحْيَةٌ بَيْضَاءُ أَنِيقَةٌ. عَيْنَاهُ بُنِّيَّتَانِ، وَيَرْتَدِي نَظَّارَةً لِلْقِرَاءَةِ. عَادَةً يَرْتَدِي ثَوْبًا تَقْلِيدِيًّا أَبْيَضَ، وَفِي الشِّتَاءِ يَلْبَسُ مِعْطَفًا رَمَادِيًّا. هُوَ أَطْوَلُ مِنْ أَبِي، وَلٰكِنَّهُ أَهْدَأُ مِنْهُ. جَدِّي هُوَ الشَّخْصُ الَّذِي يَسْمَعُنِي دَائِمًا، وَهُوَ صَبُورٌ جِدًّا، لِأَنَّهُ يُعَلِّمُنِي القُرْآنَ كُلَّ جُمُعَةٍ بِدُونِ تَعَبٍ. أُحِبُّهُ لِأَنَّ وَجْهَهُ يَبْتَسِمُ دَائِمًا.',
      en: '“I admire my grandfather very much. He is tall, his hair is short and white, and he has a neat white beard. His eyes are brown, and he wears reading glasses. He usually wears a traditional white thobe, and in winter he wears a grey coat. He is taller than my father, but calmer than him. My grandfather is the person who always listens to me, and he is very patient, because he teaches me the Qur’an every Friday without getting tired. I love him because his face is always smiling.”',
      find: ['طَوِيلُ القَامَةِ', 'وَلَهُ لِحْيَةٌ', 'عَيْنَاهُ بُنِّيَّتَانِ', 'الشَّخْصُ الَّذِي'],
    },
  },
  checkCore: 'follow the portrait order and treat hair as masculine?',
  checkDevelop: 'use the dual for eyes, لَهُ / لَهَا and الَّذِي / الَّتِي?',
});
