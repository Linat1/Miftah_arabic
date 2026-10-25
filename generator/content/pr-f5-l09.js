'use strict';
/* Practice Room · F5-L09 · At the doctor and pharmacy. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f5-l09',
  arShort: 'عِنْدَ الطَّبِيبِ',
  grammar: 'explaining a problem (ʿindī … mundhu …); advice with yajibu an + verb in -a; imperatives to a boy / girl (istariḥ / istarīḥī · ishrab / ishrabī · khudh / khudhī); kam marratan fī al-yawm?',
  focus: 'Students run their own speaking and writing practice at the doctor’s and the pharmacy: say the health-service words, act a consultation, answer question cards, do a role-play card at a pharmacy, give a 30-second talk, then build, fix and write a short note of the doctor’s advice.',
  words1: 'Places and people', words2: 'Medicine and advice',
  dialogue: {
    title: 'At the doctor’s', ar: 'عِنْدَ الطَّبِيبِ',
    lines: [
      ['A', 'تَفَضَّلْ، مَاذَا بِكَ؟', 'Come in — what’s wrong?'],
      ['B', 'عِنْدِي سُعَالٌ وَأَلَمٌ فِي الحَلْقِ مُنْذُ ثَلَاثَةِ أَيَّامٍ.', 'I have had a cough and a sore throat for three days.'],
      ['A', 'هَلْ عِنْدَكَ حُمَّى؟', 'Do you have a fever?'],
      ['B', 'نَعَمْ، قَلِيلًا فِي اللَّيْلِ.', 'Yes, a little at night.'],
      ['A', 'يَجِبُ أَنْ تَسْتَرِيحَ. اشْرَبْ مَاءً كَثِيرًا، وَخُذْ هٰذَا الدَّوَاءَ.', 'You must rest. Drink plenty of water, and take this medicine.'],
      ['B', 'كَمْ مَرَّةً فِي اليَوْمِ؟ — ثَلَاثَ مَرَّاتٍ، بَعْدَ الأَكْلِ.', 'How many times a day? — Three times, after food.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: choose a different problem (صُدَاعٌ · أَلَمُ المَعِدَةِ) and give different advice.',
  },
  questions: [
    { q: 'مَاذَا بِكَ؟', en: 'What’s wrong?', start: 'عِنْدِي …', more: '… مُنْذُ …' },
    { q: 'أَيْنَ تَذْهَبُ عِنْدَمَا يَكُونُ عِنْدَكَ أَلَمُ الأَسْنَانِ؟', en: 'Where do you go with toothache?', start: 'أَذْهَبُ إِلَى طَبِيبِ الأَسْنَانِ', more: '… فِي العِيَادَةِ' },
    { q: 'مَاذَا يَقُولُ الطَّبِيبُ عِنْدَمَا عِنْدَكَ زُكَامٌ؟', en: 'What does the doctor say when you have a cold?', start: 'يَقُولُ: اسْتَرِحْ وَ…', more: '… وَاشْرَبْ …' },
    { q: 'كَمْ مَرَّةً تَأْخُذُ الدَّوَاءَ؟', en: 'How often do you take the medicine?', start: 'آخُذُهُ … مَرَّاتٍ فِي اليَوْمِ', more: '… بَعْدَ الأَكْلِ' },
    { q: 'أَيْنَ تَشْتَرِي الدَّوَاءَ؟', en: 'Where do you buy medicine?', start: 'أَشْتَرِيهِ مِنَ الصَّيْدَلِيَّةِ', more: '… الَّتِي بِجَانِبِ …' },
  ],
  card: {
    title: 'Role-play card — at the pharmacy', ar: 'فِي الصَّيْدَلِيَّةِ', you: 'a customer', them: 'the pharmacist',
    tasks: [
      { ex: 'أَهْلًا! كَيْفَ أُسَاعِدُكَ؟', task: 'Explain the problem.', plan: 'كَيْفَ ← عِنْدِي … مُنْذُ …', model: 'عِنْدِي صُدَاعٌ قَوِيٌّ مُنْذُ الصَّبَاحِ.', modelEn: 'I have had a bad headache since the morning.' },
      { ex: 'هَلْ عِنْدَكَ شَيْءٌ آخَرُ؟', task: 'Add one symptom.', plan: 'هَلْ ← نَعَمْ، أَشْعُرُ بِالتَّعَبِ أَيْضًا', model: 'نَعَمْ، أَشْعُرُ بِالتَّعَبِ أَيْضًا.', modelEn: 'Yes, I feel tired too.' },
      { ex: 'خُذْ هٰذِهِ الحُبُوبَ.', task: 'Ask how often.', plan: 'اسْأَلْ ← كَمْ مَرَّةً فِي اليَوْمِ؟', model: 'شُكْرًا. كَمْ مَرَّةً فِي اليَوْمِ آخُذُهَا؟', modelEn: 'Thanks. How many times a day do I take them?' },
      { ex: 'مَرَّتَيْنِ. وَيَجِبُ أَنْ تَشْرَبَ مَاءً كَثِيرًا.', task: 'Thank + ask the price.', plan: 'شُكْرًا ← … كَمِ السِّعْرُ؟', model: 'شُكْرًا جَزِيلًا. كَمِ السِّعْرُ، مِنْ فَضْلِكَ؟', modelEn: 'Thank you very much. How much is it, please?' },
    ],
    girl: 'to a female customer the pharmacist says: أُسَاعِدُكِ · عِنْدَكِ · خُذِي · تَشْرَبِي',
    notes: 'Language: ʿindī … mundhu · imperatives (khudh / khudhī) · kam marratan fī al-yawm · yajibu an + verb in -a.',
  },
  talk: {
    title: '30 seconds: a visit to the doctor', ar: 'زِيَارَةٌ لِلطَّبِيبِ',
    text: 'In 30 seconds, describe a visit to the doctor (real or imagined): the problem, since when, what the doctor said, and the medicine.',
    routes: {
      core: 'عِنْدِي … · ذَهَبْتُ إِلَى … · قَالَ: اسْتَرِحْ.',
      develop: 'Add مُنْذُ … and two pieces of advice (يَجِبُ أَنْ …).',
      stretch: 'Add how often you took the medicine and how you feel now.',
    },
  },
  builder: [
    { en: 'You must rest at home. (to a boy)', cols: [['يَجِبُ أَنْ', 'يَجِبُ'], ['تَسْتَرِيحَ', 'تَسْتَرِيحُ'], ['فِي البَيْتِ.', 'البَيْتَ.']], key: [0, 0, 0], why: 'يَجِبُ أَنْ + verb ending in -a.' },
    { en: 'Drink plenty of water! (to a girl)', cols: [['اشْرَبِي', 'اشْرَبْ'], ['مَاءً', 'مَاءٌ'], ['كَثِيرًا!', 'كَثِيرٌ!']], key: [0, 0, 0], why: 'To a girl → اشْرَبِي; object → مَاءً كَثِيرًا.' },
    { en: 'Take the medicine three times a day.', cols: [['خُذِ الدَّوَاءَ', 'تَأْخُذُ الدَّوَاءُ'], ['ثَلَاثَ مَرَّاتٍ', 'ثَلَاثَةُ مَرَّةٍ'], ['فِي اليَوْمِ.', 'اليَوْمَ.']], key: [0, 0, 0], why: 'Take! = خُذْ; three times = ثَلَاثَ مَرَّاتٍ (f. noun → ثَلَاثَ).' },
  ],
  errors: [
    { wrong: 'خُذْ الدَّوَاءَ يَا سَلْمَى.', hint: 'Salma is a girl.', right: 'خُذِي الدَّوَاءَ يَا سَلْمَى.', why: 'To a girl: خُذِي.' },
    { wrong: 'يَجِبُ أَنْ تَشْرَبُ المَاءَ.', hint: 'After أَنْ …', right: 'يَجِبُ أَنْ تَشْرَبَ المَاءَ.', why: 'أَنْ + verb in -a.' },
    { wrong: 'آخُذُ الدَّوَاءَ ثَلَاثَةَ مَرَّاتٍ.', hint: 'مَرَّةٌ is feminine.', right: 'آخُذُ الدَّوَاءَ ثَلَاثَ مَرَّاتٍ.', why: 'Feminine noun → ثَلَاثَ.' },
  ],
  task: {
    title: 'The doctor’s advice — a note for my family', ar: 'نَصِيحَةُ الطَّبِيبِ',
    text: 'You went to the doctor. Write a note (about 40–55 words) for your family. Include: • the problem and since when • what the doctor said (two pieces of advice with يَجِبُ أَنْ or imperatives) • the medicine and how often • when you will feel better (hope).',
    phrases: [['ذَهَبْتُ إِلَى الطَّبِيبِ لِأَنَّ عِنْدِي …', 'I went to the doctor because I have …'], ['قَالَ الطَّبِيبُ: يَجِبُ أَنْ …', 'the doctor said: I must …'], ['آخُذُ الدَّوَاءَ … مَرَّاتٍ فِي اليَوْمِ', 'I take the medicine … times a day'], ['إِنْ شَاءَ اللّٰهُ سَأَكُونُ بِخَيْرٍ …', 'God willing I will be fine …']],
    coreFrames: [
      { ar: 'ذَهَبْتُ إِلَى الطَّبِيبِ لِأَنَّ عِنْدِي ______ .', en: 'I went to the doctor because I have …' },
      { ar: 'عِنْدِي ______ مُنْذُ ______ .', en: 'I have had … since …' },
      { ar: 'قَالَ الطَّبِيبُ: يَجِبُ أَنْ ______ .', en: 'The doctor said: I must …' },
      { ar: 'آخُذُ الدَّوَاءَ ______ مَرَّاتٍ فِي اليَوْمِ.', en: 'I take the medicine … times a day.' },
    ],
    developFrames: [
      { ar: 'وَقَالَ: اسْتَرِحْ وَ ______ .', en: 'And he said: rest and …' },
      { ar: 'إِنْ شَاءَ اللّٰهُ سَأَكُونُ بِخَيْرٍ ______ .', en: 'God willing I will be well …' },
    ],
    bank: ['طَبِيبٌ · طَبِيبَةٌ', 'عِيَادَةٌ · صَيْدَلِيَّةٌ', 'دَوَاءٌ · حُبُوبٌ', 'مَوْعِدٌ', 'يَجِبُ أَنْ', 'اسْتَرِحْ · اشْرَبْ · خُذْ', 'مَرَّتَيْنِ · ثَلَاثَ مَرَّاتٍ', 'بَعْدَ الأَكْلِ'],
    model: {
      text: 'أُمِّي العَزِيزَةُ، ذَهَبْتُ إِلَى الطَّبِيبِ اليَوْمَ، لِأَنَّ عِنْدِي سُعَالًا وَحُمَّى مُنْذُ يَوْمَيْنِ. قَالَ الطَّبِيبُ: يَجِبُ أَنْ تَسْتَرِيحَ فِي البَيْتِ، وَاشْرَبْ مَاءً كَثِيرًا. أَعْطَانِي دَوَاءً، وَآخُذُهُ ثَلَاثَ مَرَّاتٍ فِي اليَوْمِ بَعْدَ الأَكْلِ. إِنْ شَاءَ اللّٰهُ سَأَكُونُ بِخَيْرٍ بَعْدَ أَيَّامٍ قَلِيلَةٍ. ابْنُكِ يُوسُفُ.',
      en: '“Dear Mum, I went to the doctor today, because I have had a cough and a fever for two days. The doctor said: you must rest at home, and drink plenty of water. He gave me medicine, and I take it three times a day after food. God willing I will be fine in a few days. Your son, Yusuf.”',
      find: ['لِأَنَّ عِنْدِي سُعَالًا', 'يَجِبُ أَنْ تَسْتَرِيحَ', 'ثَلَاثَ مَرَّاتٍ فِي اليَوْمِ', 'إِنْ شَاءَ اللّٰهُ'],
    },
  },
  checkCore: 'explain the problem with عِنْدِي … مُنْذُ …?',
  checkDevelop: 'give advice with يَجِبُ أَنْ + -a or a correct imperative?',
});
