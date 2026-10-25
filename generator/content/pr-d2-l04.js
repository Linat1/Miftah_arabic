'use strict';
/* Practice Room · D2-L04 · Fashion and identity — balanced opinions on style. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd2-l04',
  arShort: 'المَوْضَةُ وَالهُوِيَّةُ',
  grammar: 'opinion + reason: fī raʾyī … li-anna; contrast: wa-lākinna + noun / pronoun; concession: ʿalā al-raghmi min anna … fa-inna …; style adjectives with agreement (anīq / anīqa · ʿaṣrī / ʿaṣriyya · taqlīdī / taqlīdiyya); judging clothes, never people',
  focus: 'Students run their own speaking and writing practice giving balanced opinions on fashion: say the style adjectives, act a short debate dialogue, answer opinion cards, do a role-play card on a school-uniform consultation, give a one-minute balanced talk, then build, fix and write a balanced opinion paragraph about fashion and identity.',
  words1: 'Style adjectives', words2: 'Opinion language',
  dialogue: {
    title: 'Is fashion important?', ar: 'هَلِ المَوْضَةُ مُهِمَّةٌ؟',
    lines: [
      ['A', 'هَلْ تَتْبَعُ المَوْضَةَ؟', 'Do you follow fashion?'],
      ['B', 'قَلِيلًا. فِي رَأْيِي المَلَابِسُ تُعَبِّرُ عَنْ شَخْصِيَّتِنَا.', 'A little. In my opinion clothes express our personality.'],
      ['A', 'وَلٰكِنَّ المَوْضَةَ غَالِيَةٌ جِدًّا!', 'But fashion is very expensive!'],
      ['B', 'صَحِيحٌ، لِذٰلِكَ أُفَضِّلُ المَلَابِسَ البَسِيطَةَ وَالمُرِيحَةَ.', 'True, so I prefer simple, comfortable clothes.'],
      ['A', 'وَمَا رَأْيُكَ فِي اللِّبَاسِ التَّقْلِيدِيِّ؟', 'And what do you think of traditional dress?'],
      ['B', 'عَلَى الرَّغْمِ مِنْ أَنَّهُ قَدِيمٌ، فَإِنَّهُ أَنِيقٌ وَيُعَبِّرُ عَنْ هُوِيَّتِنَا.', 'Although it is old, it is elegant and expresses our identity.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: give YOUR real opinions — every opinion needs لِأَنَّ.',
  },
  questions: [
    { q: 'مَا رَأْيُكَ فِي المَوْضَةِ؟', en: 'What do you think of fashion?', start: 'فِي رَأْيِي المَوْضَةُ …', more: '… لِأَنَّ … وَلٰكِنَّ …' },
    { q: 'هَلْ تُفَضِّلُ المَلَابِسَ العَصْرِيَّةَ أَمِ التَّقْلِيدِيَّةَ؟', en: 'Modern or traditional clothes?', start: 'أُفَضِّلُ … لِأَنَّهَا …', more: '… عَلَى الرَّغْمِ مِنْ أَنَّ …' },
    { q: 'مَاذَا تَلْبَسُ فِي مُنَاسَبَةٍ رَسْمِيَّةٍ؟', en: 'What do you wear on a formal occasion?', start: 'أَلْبَسُ … أَنِيقًا / أَنِيقَةً', more: '… مَثَلًا فِي العِيدِ …' },
    { q: 'هَلِ المَلَابِسُ تُعَبِّرُ عَنِ الشَّخْصِيَّةِ؟', en: 'Do clothes express personality?', start: 'نَعَمْ / إِلَى حَدٍّ مَا، لِأَنَّ …', more: '… وَلٰكِنَّ الأَخْلَاقَ أَهَمُّ' },
    { q: 'هَلْ تُنْفِقُ مَالًا كَثِيرًا عَلَى المَلَابِسِ؟', en: 'Do you spend a lot of money on clothes?', start: 'لَا، لِأَنَّ … / نَعَمْ، …', more: '… لِذٰلِكَ …' },
  ],
  card: {
    title: 'Role-play card — the school uniform consultation', ar: 'اسْتِشَارَةٌ عَنِ الزِّيِّ المَدْرَسِيِّ', you: 'the student representative', them: 'the head teacher',
    tasks: [
      { ex: 'مَا رَأْيُ الطُّلَّابِ فِي الزِّيِّ الحَالِيِّ؟', task: 'Opinion + reason.', plan: 'رَأْيٌ ← فِي رَأْيِ الطُّلَّابِ … لِأَنَّ …', model: 'فِي رَأْيِ الطُّلَّابِ الزِّيُّ أَنِيقٌ، لِأَنَّ لَوْنَهُ جَمِيلٌ.', modelEn: 'The students think the uniform is smart, because its colour is nice.' },
      { ex: 'هَلْ هُنَاكَ مُشْكِلَةٌ؟', task: 'A problem — with وَلٰكِنَّ.', plan: 'مُشْكِلَةٌ ← وَلٰكِنَّ السُّتْرَةَ …', model: 'نَعَمْ، وَلٰكِنَّ السُّتْرَةَ ثَقِيلَةٌ وَغَيْرُ مُرِيحَةٍ فِي الصَّيْفِ.', modelEn: 'Yes, but the blazer is heavy and uncomfortable in summer.' },
      { ex: 'مَا اقْتِرَاحُكَ؟', task: 'A proposal.', plan: '', model: 'نَقْتَرِحُ قَمِيصًا رِيَاضِيًّا بَسِيطًا لِلصَّيْفِ، لِأَنَّهُ عَمَلِيٌّ.', modelEn: 'We suggest a simple polo shirt for summer, because it is practical.' },
      { unexpected: true, ex: 'وَلٰكِنَّ بَعْضَ الأَهَالِي يَقُولُونَ إِنَّهُ غَيْرُ رَسْمِيٍّ.', task: 'A concession.', plan: '', model: 'عَلَى الرَّغْمِ مِنْ أَنَّهُ غَيْرُ رَسْمِيٍّ، فَإِنَّهُ مُرِيحٌ وَأَرْخَصُ لِلْعَائِلَاتِ.', modelEn: 'Although it isn’t formal, it is comfortable and cheaper for families.' },
    ],
    girl: 'head teacher to a girl: اقْتِرَاحُكِ',
    notes: 'Concession frame: ʿalā al-raghmi min anna-hu … fa-inna-hu … (judge the clothes, not people).',
  },
  talk: {
    title: 'One minute: fashion — for and against', ar: 'المَوْضَةُ: مَعَ وَضِدَّ',
    text: 'Give a balanced one-minute talk: two points for following fashion, two against, then your conclusion.',
    routes: {
      core: 'Two opinions with فِي رَأْيِي … لِأَنَّ …',
      develop: 'Add وَلٰكِنَّ + one counter-point and four style adjectives.',
      stretch: 'Add عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ … and a personal example.',
    },
  },
  builder: [
    { en: 'In my opinion this dress is elegant.', cols: [['فِي رَأْيِي', 'فِي رَأْيِيَ'], ['هٰذَا الفُسْتَانُ', 'هٰذِهِ الفُسْتَانُ'], ['أَنِيقٌ.', 'أَنِيقَةٌ.']], key: [0, 0, 0], why: 'فُسْتَانٌ (m.) → هٰذَا + أَنِيقٌ.' },
    { en: 'Modern clothes are nice, but they are expensive.', cols: [['المَلَابِسُ العَصْرِيَّةُ جَمِيلَةٌ،', 'المَلَابِسُ العَصْرِيُّ جَمِيلٌ،'], ['وَلٰكِنَّهَا', 'وَلٰكِنَّهُمْ'], ['غَالِيَةٌ.', 'غَالِيُونَ.']], key: [0, 0, 0], why: 'Non-human plural → feminine singular: جَمِيلَةٌ · وَلٰكِنَّهَا · غَالِيَةٌ.' },
    { en: 'Although the uniform is simple, it is practical.', cols: [['عَلَى الرَّغْمِ مِنْ أَنَّ', 'عَلَى الرَّغْمِ أَنَّ'], ['الزِّيَّ بَسِيطٌ،', 'الزِّيُّ بَسِيطٌ،'], ['فَإِنَّهُ عَمَلِيٌّ.', 'لٰكِنَّهُ عَمَلِيٌّ.']], key: [0, 0, 0], why: 'مِنْ أَنَّ + noun in -a (الزِّيَّ); answer with فَإِنَّ.' },
  ],
  errors: [
    { wrong: 'المَلَابِسُ التَّقْلِيدِيَّةُ أَنِيقُونَ.', hint: 'Non-human plural …', right: 'المَلَابِسُ التَّقْلِيدِيَّةُ أَنِيقَةٌ.', why: 'Things in the plural → feminine singular adjective.' },
    { wrong: 'وَلٰكِنَّ المَوْضَةُ غَالِيَةٌ.', hint: 'After وَلٰكِنَّ …', right: 'وَلٰكِنَّ المَوْضَةَ غَالِيَةٌ.', why: 'وَلٰكِنَّ + noun in -a.' },
    { wrong: 'هٰذِهِ البِنْتُ قَبِيحَةٌ لِأَنَّ مَلَابِسَهَا قَدِيمَةٌ.', hint: 'Judge the clothes, not the person.', right: 'فِي رَأْيِي هٰذَا الأُسْلُوبُ لَا يُنَاسِبُنِي.', why: 'Respectful opinions: talk about style, not people’s looks.' },
  ],
  task: {
    title: 'A balanced opinion: fashion and identity', ar: 'رَأْيٌ مُتَوَازِنٌ: المَوْضَةُ وَالهُوِيَّةُ',
    text: 'Write a balanced paragraph (about 60–80 words) for a class debate: “Do clothes show who we are?” Include: • your opinion with a reason • one point for and one point against (وَلٰكِنَّ) • a concession with عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ … • four style adjectives that agree • a conclusion.',
    phrases: [['فِي رَأْيِي … لِأَنَّ …', 'in my opinion … because …'], ['مِنْ جِهَةٍ … وَمِنْ جِهَةٍ أُخْرَى …', 'on one hand … on the other …'], ['عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …', 'although …, …'], ['فِي النِّهَايَةِ أَرَى أَنَّ …', 'in the end I think that …']],
    coreFrames: [
      { ar: 'فِي رَأْيِي المَلَابِسُ ______ لِأَنَّ ______ .', en: 'In my opinion clothes … because …' },
      { ar: 'مَثَلًا، أُحِبُّ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'For example, I like … because it …' },
      { ar: 'وَلٰكِنَّ ______ .', en: 'But …' },
      { ar: 'فِي النِّهَايَةِ أَرَى أَنَّ ______ .', en: 'In the end I think that …' },
    ],
    developFrames: [
      { ar: 'مِنْ جِهَةٍ ______ ، وَمِنْ جِهَةٍ أُخْرَى ______ .', en: 'On one hand …, on the other …' },
      { ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّ ______ .', en: 'Although …, …' },
    ],
    bank: ['أَنِيقٌ · أَنِيقَةٌ', 'عَصْرِيٌّ · عَصْرِيَّةٌ', 'تَقْلِيدِيٌّ · تَقْلِيدِيَّةٌ', 'بَسِيطٌ · مُرِيحٌ', 'مُحْتَشِمٌ · رَسْمِيٌّ', 'تُعَبِّرُ عَنْ', 'وَلٰكِنَّ', 'عَلَى الرَّغْمِ مِنْ أَنَّ'],
    model: {
      text: 'فِي رَأْيِي المَلَابِسُ تُعَبِّرُ عَنْ جُزْءٍ مِنْ شَخْصِيَّتِنَا، لِأَنَّنَا نَخْتَارُ الأَلْوَانَ وَالأُسْلُوبَ بِأَنْفُسِنَا. مَثَلًا، أُحِبُّ المَلَابِسَ البَسِيطَةَ وَالمُرِيحَةَ، لِأَنَّنِي شَخْصٌ هَادِئٌ وَعَمَلِيٌّ. مِنْ جِهَةٍ، اللِّبَاسُ التَّقْلِيدِيُّ أَنِيقٌ وَمُحْتَشِمٌ وَيُعَبِّرُ عَنْ هُوِيَّتِنَا. وَلٰكِنَّ المَوْضَةَ العَصْرِيَّةَ تَتَغَيَّرُ بِسُرْعَةٍ وَغَالِيَةٌ جِدًّا. عَلَى الرَّغْمِ مِنْ أَنَّ المَلَابِسَ مُهِمَّةٌ، فَإِنَّ الأَخْلَاقَ أَهَمُّ مِنْهَا بِكَثِيرٍ. فِي النِّهَايَةِ أَرَى أَنَّ المَلَابِسَ تُظْهِرُ ذَوْقَنَا فَقَطْ، وَلَا تُظْهِرُ مَنْ نَحْنُ حَقًّا.',
      en: '“In my opinion clothes express part of our personality, because we choose the colours and style ourselves. For example, I like simple, comfortable clothes, because I am a calm, practical person. On one hand, traditional dress is elegant and modest and expresses our identity. But modern fashion changes quickly and is very expensive. Although clothes are important, good character is much more important. In the end I think clothes only show our taste — they don’t show who we really are.”',
      find: ['فِي رَأْيِي', 'وَلٰكِنَّ المَوْضَةَ', 'عَلَى الرَّغْمِ مِنْ أَنَّ', 'فَإِنَّ الأَخْلَاقَ'],
    },
  },
  checkCore: 'give an opinion with a reason and make the adjectives agree?',
  checkDevelop: 'balance it with وَلٰكِنَّ and a concession (عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ)?',
});
