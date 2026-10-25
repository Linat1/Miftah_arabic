'use strict';
/* Practice Room · D5-L12 · Review — hobbies, sport and leisure, the whole unit in one room. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd5-l12',
  arShort: 'مُرَاجَعَةُ الوَحْدَةِ',
  grammar: 'D5 review: hobby verbs + prepositions (yaʿzifu ʿalā · yastamiʿu ilā); results (fāza bi- / ʿalā); past singular and plural endings (-tu · -ta · -ti · -a · -at · -nā · -tum · -ū); irregular stems (zurtu · mashaynā · nimnā · qālū); kāna + -an and kuntu + present; arts verbs (yuʿabbiru ʿan · yuʾaththiru fī); travel past → future',
  focus: 'Students run their own review of the whole D5 unit: recall twelve key D5 expressions, act a mixed dialogue, answer mixed exam-style cards, do a full role-play card, give a one-minute talk, then build, fix and write an exam-style email — and set one target for D6.',
  words1: 'D5 key language (1)', words2: 'D5 key language (2)',
  addWords: [
    ['أَعْزِفُ عَلَى العُودِ', 'I play the oud'], ['أَسْتَمِعُ إِلَى المُوسِيقَى', 'I listen to music'], ['فَازَ عَلَى', 'beat (a team)'], ['فَازَتْ بِالكَأْسِ', 'she won the cup'], ['ذَهَبْتُ · ذَهَبَتْ', 'I went · she went'], ['لَعِبْنَا · لَعِبُوا', 'we played · they played'],
    ['زُرْنَا', 'we visited'], ['كَانَ الطَّقْسُ جَمِيلًا', 'the weather was lovely'], ['كُنْتُ أَلْعَبُ', 'I used to play'], ['فَجْأَةً', 'suddenly'], ['يُعَبِّرُ عَنْ', 'expresses'], ['سَأُسَافِرُ', 'I will travel'],
  ],
  dialogue: {
    title: 'Everything from D5 in one conversation', ar: 'كُلُّ الوَحْدَةِ فِي حِوَارٍ',
    lines: [
      ['A', 'مَا هِوَايَاتُكَ؟', 'What are your hobbies?'],
      ['B', 'أَعْزِفُ عَلَى العُودِ، وَأَلْعَبُ كُرَةَ السَّلَّةِ. فِي الطُّفُولَةِ كُنْتُ أَسْبَحُ كَثِيرًا.', 'I play the oud and basketball. As a child I used to swim a lot.'],
      ['A', 'وَمَاذَا فَعَلْتُمْ فِي العُطْلَةِ؟', 'And what did you all do in the holiday?'],
      ['B', 'سَافَرْنَا إِلَى تُونِسَ، وَزُرْنَا المَدِينَةَ القَدِيمَةَ. كَانَ الطَّقْسُ حَارًّا جِدًّا!', 'We travelled to Tunisia and visited the old city. The weather was very hot!'],
      ['A', 'وَهَلْ حَدَثَ شَيْءٌ مُضْحِكٌ؟', 'Did anything funny happen?'],
      ['B', 'نَعَمْ! فَجْأَةً أَخَذَ قِطٌّ سَمَكَتِي مِنَ الصَّحْنِ! وَالصَّيْفَ القَادِمَ سَنُسَافِرُ إِلَى مِصْرَ.', 'Yes! Suddenly a cat took my fish off the plate! And next summer we will travel to Egypt.'],
    ],
    foot: 'Round 1: read it. Round 2: swap letters. Round 3: answer with YOUR life — then ask your partner the same three questions.',
  },
  qTitle: 'Mixed exam cards — one from each part of D5',
  questions: [
    { q: 'مَاذَا تَفْعَلُ فِي وَقْتِ فَرَاغِكَ؟', en: 'What do you do in your free time?', start: 'أَلْعَبُ … / أَعْزِفُ عَلَى … / أَسْتَمِعُ إِلَى …', more: '… مَرَّتَيْنِ فِي الأُسْبُوعِ' },
    { q: 'مَنِ الرِّيَاضِيُّ الَّذِي تُعْجَبُ بِهِ؟ مَاذَا فَعَلَ؟', en: 'Which athlete do you admire? What did they do?', start: 'أُعْجَبُ بِ… لِأَنَّهُ / لِأَنَّهَا فَازَ / فَازَتْ بِ…', more: '…' },
    { q: 'احْكِ عَنْ ذِكْرَى جَمِيلَةٍ.', en: 'Tell a lovely memory.', start: 'كُنْتُ فِي … وَكَانَ … وَفَجْأَةً …', more: '… مَا زِلْتُ أَتَذَكَّرُ …' },
    { q: 'مَا الفَنُّ العَرَبِيُّ الَّذِي يُعْجِبُكَ؟', en: 'Which Arabic art do you like?', start: 'يُعْجِبُنِي … لِأَنَّهُ يُعَبِّرُ عَنْ …', more: '…' },
    { q: 'أَيْنَ قَضَيْتَ إِجَازَتَكَ؟ وَأَيْنَ سَتَقْضِي القَادِمَةَ؟', en: 'Where did you spend your holiday? And the next?', start: 'سَافَرْتُ إِلَى … وَسَأُسَافِرُ إِلَى …', more: '… لِأَنَّ …' },
  ],
  card: {
    title: 'Role-play card — the summer camp reunion', ar: 'لِقَاءُ أَصْدِقَاءِ المُخَيَّمِ', you: 'yourself', them: 'a friend from last year’s camp',
    tasks: [
      { ex: 'أَهْلًا! مَاذَا فَعَلْتَ بَعْدَ المُخَيَّمِ؟', task: 'Two past actions.', plan: 'المَاضِي ← … ثُمَّ …', model: 'رَجَعْتُ إِلَى البَيْتِ، ثُمَّ اشْتَرَكْتُ فِي نَادِي الشِّطْرَنْجِ.', modelEn: 'I went home, then joined the chess club.' },
      { ex: 'هَلْ تَتَذَكَّرُ يَوْمَ الرِّحْلَةِ إِلَى الجَبَلِ؟', task: 'We + irregular verbs.', plan: 'نَحْنُ ← مَشَيْنَا … وَنِمْنَا …', model: 'طَبْعًا! مَشَيْنَا خَمْسَ سَاعَاتٍ، وَنِمْنَا تَحْتَ النُّجُومِ.', modelEn: 'Of course! We walked five hours and slept under the stars.' },
      { ex: 'وَمَاذَا يَفْعَلُ صَدِيقُنَا عُمَرُ الآنَ؟', task: 'Present.', plan: '', model: 'يَلْعَبُ كُرَةَ القَدَمِ فِي فَرِيقِ المَدِينَةِ، وَفَازُوا عَلَى فَرِيقٍ قَوِيٍّ أَمْسِ.', modelEn: 'He plays football for the city team, and they beat a strong team yesterday.' },
      { unexpected: true, ex: 'هَلْ سَتَأْتِي إِلَى المُخَيَّمِ هٰذَا الصَّيْفَ؟', task: 'Future + reason.', plan: '', model: 'لِلْأَسَفِ لَا، لِأَنَّنَا سَنُسَافِرُ إِلَى بَاكِسْتَانَ لِزِيَارَةِ جَدَّتِي.', modelEn: 'Unfortunately not, because we will travel to Pakistan to visit my grandmother.' },
    ],
    girl: 'to a girl: فَعَلْتِ · تَتَذَكَّرِينَ · سَتَأْتِينَ · صَدِيقَتُنَا … تَلْعَبُ',
    notes: 'This card mixes every D5 structure; the Coach ticks each one heard.',
  },
  talk: {
    title: 'One minute: my D5 showcase', ar: 'أَعْرِضُ مَا تَعَلَّمْتُ',
    text: 'Talk for one minute about your hobbies, a memory and a trip. The Coach ticks: hobby verb + preposition · فَازَ · -tu · -at · -nā · -ū · irregular stem · كَانَ + -an · كُنْتُ + present · future.',
    routes: {
      core: 'Five structures from the list.',
      develop: 'Seven structures with no stem errors.',
      stretch: 'All ten, with a story shape (فَجْأَةً … فِي النِّهَايَةِ …).',
    },
  },
  builder: [
    { en: 'My sister listens to music and plays the piano.', cols: [['تَسْتَمِعُ أُخْتِي إِلَى المُوسِيقَى', 'يَسْتَمِعُ أُخْتِي المُوسِيقَى'], ['وَتَعْزِفُ', 'وَتَلْعَبُ'], ['عَلَى البِيَانُو.', 'البِيَانُو.']], key: [0, 0, 0], why: 'She → ta-; يَسْتَمِعُ إِلَى; يَعْزِفُ عَلَى.' },
    { en: 'They visited the museum and said it was wonderful.', cols: [['زَارُوا المَتْحَفَ', 'زُرْنَا المَتْحَفَ'], ['وَقَالُوا', 'وَقُلْنَا'], ['إِنَّهُ رَائِعٌ.', 'أَنَّهُ رَائِعًا.']], key: [0, 0, 0], why: 'They → -ū (hollow verbs keep ā: زَارُوا · قَالُوا).' },
    { en: 'The weather was cold, and we were playing outside.', cols: [['كَانَ الطَّقْسُ بَارِدًا،', 'كَانَ الطَّقْسُ بَارِدٌ،'], ['وَكُنَّا', 'وَكُنْتُمْ'], ['نَلْعَبُ فِي الخَارِجِ.', 'لَعِبْنَا فِي الخَارِجِ.']], key: [0, 0, 0], why: 'كَانَ + -an; was …-ing = كُنَّا + present.' },
  ],
  errors: [
    { wrong: 'أُخْتِي لَعِبَ التِّنِسَ وَفَازَ عَلَى الكَأْسِ.', hint: 'Two errors.', right: 'أُخْتِي لَعِبَتِ التِّنِسَ وَفَازَتْ بِالكَأْسِ.', why: 'She → -at; win a title = فَازَ بِ…' },
    { wrong: 'زَارْنَا المَدِينَةَ وَنَامْنَا فِي فُنْدُقٍ.', hint: 'Two stem errors.', right: 'زُرْنَا المَدِينَةَ وَنِمْنَا فِي فُنْدُقٍ.', why: 'Hollow verbs shorten before -nā.' },
    { wrong: 'كَانَ الجَوُّ جَمِيلٌ وَكُنْتُ لَعِبْتُ فِي الحَدِيقَةِ.', hint: 'Two errors.', right: 'كَانَ الجَوُّ جَمِيلًا، وَكُنْتُ أَلْعَبُ فِي الحَدِيقَةِ.', why: 'كَانَ + -an; كُنْتُ + present.' },
  ],
  task: {
    title: 'Exam-style email: my free time', ar: 'رِسَالَةٌ بِأُسْلُوبِ الامْتِحَانِ: وَقْتُ فَرَاغِي',
    text: 'Write an email (about 70–90 words) to an Arabic-speaking friend. Answer ALL four bullets: • your hobbies now and how often • a hobby you used to do as a child • a memorable trip or event (what you and others did) • your plans for next holiday.',
    range: [60, 105],
    phrases: [['أَلْعَبُ … · أَعْزِفُ عَلَى … · مَرَّتَيْنِ فِي الأُسْبُوعِ', 'I play … · I play (instrument) … · twice a week'], ['فِي الطُّفُولَةِ كُنْتُ …', 'as a child I used to …'], ['سَافَرْنَا … · زُرْنَا … · كَانَ الطَّقْسُ …', 'we travelled … · we visited … · the weather was …'], ['فِي الإِجَازَةِ القَادِمَةِ سَأُسَافِرُ …', 'next holiday I will travel …']],
    coreFrames: [
      { ar: 'فِي وَقْتِ فَرَاغِي ______ ______ فِي الأُسْبُوعِ.', en: 'In my free time I … … a week.' },
      { ar: 'فِي الطُّفُولَةِ كُنْتُ ______ .', en: 'As a child I used to …' },
      { ar: 'فِي ______ سَافَرْنَا إِلَى ______ ، وَزُرْنَا ______ .', en: 'In … we travelled to …, and visited …' },
      { ar: 'فِي الإِجَازَةِ القَادِمَةِ سَوْفَ ______ .', en: 'Next holiday I will …' },
    ],
    developFrames: [
      { ar: 'كَانَ الطَّقْسُ ______ ، وَفَجْأَةً ______ .', en: 'The weather was …, and suddenly …' },
      { ar: 'أَمَّا أَصْدِقَائِي فَ______ .', en: 'As for my friends, they …' },
    ],
    bank: ['أَلْعَبُ · أُمَارِسُ', 'أَعْزِفُ عَلَى · أَسْتَمِعُ إِلَى', 'كُنْتُ أَلْعَبُ', 'سَافَرْنَا · زُرْنَا', 'لَعِبُوا · قَالُوا', 'كَانَ الطَّقْسُ …', 'فَجْأَةً · فِي النِّهَايَةِ', 'سَأُسَافِرُ · سَوْفَ نَزُورُ'],
    model: {
      text: `مَرْحَبًا يَا يُوسُفُ،
فِي وَقْتِ فَرَاغِي أَلْعَبُ كُرَةَ الطَّائِرَةِ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ، وَأَسْتَمِعُ إِلَى المُوسِيقَى العَرَبِيَّةِ. فِي الطُّفُولَةِ كُنْتُ أَعْزِفُ عَلَى البِيَانُو، وَلٰكِنَّنِي تَوَقَّفْتُ. فِي الصَّيْفِ المَاضِي سَافَرْنَا إِلَى الأُرْدُنِّ، وَزُرْنَا البَتْرَاءَ وَنِمْنَا فِي الصَّحْرَاءِ. كَانَ الطَّقْسُ حَارًّا، وَفَجْأَةً هَبَّتْ عَاصِفَةٌ رَمْلِيَّةٌ! أَمَّا أَبْنَاءُ عَمِّي فَرَكِبُوا الجِمَالَ وَضَحِكُوا كَثِيرًا. فِي الإِجَازَةِ القَادِمَةِ سَأُسَافِرُ إِلَى إِسْبَانْيَا لِأَزُورَ قَصْرَ الحَمْرَاءِ.
صَدِيقُكَ، آدَمُ`,
      en: '“Hi Yusuf, in my free time I play volleyball three times a week, and I listen to Arabic music. As a child I used to play the piano, but I stopped. Last summer we travelled to Jordan, visited Petra and slept in the desert. The weather was hot, and suddenly a sandstorm blew up! As for my cousins, they rode camels and laughed a lot. Next holiday I will travel to Spain to visit the Alhambra. Your friend, Adam.”',
      find: ['كُنْتُ أَعْزِفُ', 'وَزُرْنَا البَتْرَاءَ', 'فَرَكِبُوا الجِمَالَ', 'سَأُسَافِرُ إِلَى'],
    },
  },
  checkCore: 'answer all four bullets in the right tense?',
  checkDevelop: 'use plural endings, irregular stems and كُنْتُ + present accurately?',
  remember: 'Before you leave: write ONE target for D6 in your book, e.g. “I will fix the stem first: زُرْنَا, not زَارْنَا.”',
});
