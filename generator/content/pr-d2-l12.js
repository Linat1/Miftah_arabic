'use strict';
/* Practice Room · D2-L12 · Review — the whole of D2 in one room. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd2-l12',
  arShort: 'مُرَاجَعَةُ الوَحْدَةِ',
  grammar: 'D2 review: adjective agreement (m. / f. / pl. / non-human pl.); laysa + -an; relationship verbs + prepositions and object suffixes; hādhā / hādhihi + colour agreement; comparatives and superlatives; appearance (hair m., eyes dual, lahu / lahā, alladhī / allatī); opinions with li-anna · wa-lākinna · ʿalā al-raghmi min anna … fa-inna',
  focus: 'Students run their own review of the whole D2 unit: recall twelve key D2 expressions, act a mixed dialogue, answer mixed exam-style cards, do a full role-play card, give a one-minute talk, then build, fix and write an exam-style text — and set one target for D3.',
  words1: 'D2 key language (1)', words2: 'D2 key language (2)',
  addWords: [
    ['صَبُورٌ · صَبُورَةٌ', 'patient (m. · f.)'], ['لَيْسَ أَنَانِيًّا', 'he isn’t selfish'], ['أَتَفَاهَمُ مَعَ', 'I get on with'], ['أَثِقُ بِهِ · بِهَا', 'I trust him · her'], ['يَدْعَمُنِي · تَدْعَمُنِي', 'he · she supports me'], ['هٰذِهِ السُّتْرَةُ الزَّرْقَاءُ', 'this blue jacket'],
    ['أَرْخَصُ مِنْ', 'cheaper than'], ['أَكْثَرُ ثِقَةً', 'more confident'], ['شَعْرُهَا طَوِيلٌ', 'her hair is long'], ['عَيْنَاهُ بُنِّيَّتَانِ', 'his eyes are brown'], ['الَّذِي · الَّتِي', 'who (m. · f.)'], ['عَلَى الرَّغْمِ مِنْ أَنَّ', 'although'],
  ],
  dialogue: {
    title: 'Everything from D2 in one conversation', ar: 'كُلُّ الوَحْدَةِ فِي حِوَارٍ',
    lines: [
      ['A', 'مَنِ البِنْتُ الَّتِي تَرْتَدِي السُّتْرَةَ الزَّرْقَاءَ؟', 'Who is the girl wearing the blue jacket?'],
      ['B', 'هِيَ ابْنَةُ خَالَتِي. شَعْرُهَا طَوِيلٌ، وَعَيْنَاهَا خَضْرَاوَانِ.', 'She is my cousin. Her hair is long, and her eyes are green.'],
      ['A', 'كَيْفَ شَخْصِيَّتُهَا؟', 'What is she like?'],
      ['B', 'هِيَ صَبُورَةٌ وَكَرِيمَةٌ، وَلَيْسَتْ خَجُولَةً أَبَدًا. أَتَفَاهَمُ مَعَهَا لِأَنَّهَا تَدْعَمُنِي.', 'She is patient and generous, and never shy. I get on with her because she supports me.'],
      ['A', 'وَأُسْلُوبُهَا؟', 'And her style?'],
      ['B', 'أُسْلُوبُهَا أَكْثَرُ أَنَاقَةً مِنْ أُسْلُوبِي! عَلَى الرَّغْمِ مِنْ أَنَّ مَلَابِسَهَا بَسِيطَةٌ، فَإِنَّهَا جَمِيلَةٌ.', 'Her style is more elegant than mine! Although her clothes are simple, they are beautiful.'],
    ],
    foot: 'Round 1: read it. Round 2: swap letters. Round 3: describe a MALE relative with the same questions — every ending must change.',
  },
  qTitle: 'Mixed exam cards — one from each part of D2',
  questions: [
    { q: 'صِفْ شَخْصِيَّةَ أَحَدِ أَفْرَادِ عَائِلَتِكَ.', en: 'Describe a family member’s personality.', start: '… صَبُورٌ / صَبُورَةٌ لِأَنَّهُ / لِأَنَّهَا …', more: '… وَلَيْسَ / وَلَيْسَتْ …' },
    { q: 'مَعَ مَنْ تَتَفَاهَمُ أَكْثَرَ؟ لِمَاذَا؟', en: 'Who do you get on with most? Why?', start: 'أَتَفَاهَمُ مَعَ … لِأَنَّ …', more: '… يَدْعَمُنِي / تَدْعَمُنِي …' },
    { q: 'مَاذَا تَلْبَسُ فِي العُطْلَةِ؟', en: 'What do you wear in the holidays?', start: 'أَلْبَسُ … أَزْرَقَ / زَرْقَاءَ …', more: '… لِأَنَّهُ مُرِيحٌ' },
    { q: 'قَارِنْ بَيْنَكَ وَبَيْنَ صَدِيقِكَ.', en: 'Compare yourself with your friend.', start: 'أَنَا أَطْوَلُ … / هُوَ أَكْثَرُ …', more: '… وَلٰكِنَّنَا …' },
    { q: 'هَلِ المَظْهَرُ مُهِمٌّ؟', en: 'Is appearance important?', start: 'فِي رَأْيِي … لِأَنَّ …', more: '… عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …' },
  ],
  card: {
    title: 'Role-play card — the school yearbook interview', ar: 'مُقَابَلَةُ كِتَابِ السَّنَةِ', you: 'a student', them: 'the yearbook editor',
    tasks: [
      { ex: 'صِفْ نَفْسَكَ فِي ثَلَاثِ كَلِمَاتٍ.', task: 'Three qualities.', plan: 'أَنَا ← أَنَا … وَ … وَ …', model: 'أَنَا مُجْتَهِدٌ وَمَرِحٌ وَمُتَعَاوِنٌ.', modelEn: 'I am hard-working, cheerful and helpful.' },
      { ex: 'مَنْ أَقْرَبُ صَدِيقٍ لَكَ؟ صِفْهُ.', task: 'Appearance + quality.', plan: 'صَدِيقِي ← هُوَ … القَامَةِ وَ … لِأَنَّهُ …', model: 'صَدِيقِي آدَمُ؛ هُوَ قَصِيرُ القَامَةِ، وَصَادِقٌ لِأَنَّهُ لَا يَكْذِبُ أَبَدًا.', modelEn: 'My friend Adam — he is short, and honest because he never lies.' },
      { ex: 'مَا أُسْلُوبُكَ فِي المَلَابِسِ؟', task: 'Style + comparison.', plan: '', model: 'أُفَضِّلُ المَلَابِسَ الرِّيَاضِيَّةَ، لِأَنَّهَا أَكْثَرُ رَاحَةً مِنَ الرَّسْمِيَّةِ.', modelEn: 'I prefer sportswear, because it is more comfortable than formal clothes.' },
      { unexpected: true, ex: 'مَا أَجْمَلُ ذِكْرَى مَعَ صَدِيقِكَ هٰذِهِ السَّنَةَ؟', task: 'Answer in the past.', plan: '', model: 'رِحْلَةُ المَدْرَسَةِ إِلَى الجِبَالِ؛ ضَحِكْنَا كَثِيرًا، وَتَصَالَحْنَا بَعْدَ خِلَافٍ صَغِيرٍ.', modelEn: 'The school trip to the mountains — we laughed a lot and made up after a small argument.' },
    ],
    girl: 'editor to a girl: صِفِي نَفْسَكِ · أَنَا مُجْتَهِدَةٌ وَمَرِحَةٌ وَمُتَعَاوِنَةٌ · صَدِيقَتِي … هِيَ قَصِيرَةُ القَامَةِ',
    notes: 'This card mixes every D2 structure; the Coach ticks each one heard.',
  },
  talk: {
    title: 'One minute: my D2 showcase', ar: 'أَعْرِضُ مَا تَعَلَّمْتُ',
    text: 'Talk for one minute about a person you know and show as many D2 structures as you can. The Coach ticks: agreement · لَيْسَ · relationship verb · object suffix · colour · comparative · hair / eyes · الَّذِي / الَّتِي · concession.',
    routes: {
      core: 'Five structures from the list.',
      develop: 'Seven structures, all with correct agreement.',
      stretch: 'All nine, with a past example.',
    },
  },
  builder: [
    { en: 'My cousin (f.) isn’t shy; she is confident.', cols: [['ابْنَةُ عَمِّي', 'ابْنُ عَمِّي'], ['لَيْسَتْ خَجُولَةً،', 'لَيْسَتْ خَجُولَةٌ،'], ['هِيَ وَاثِقَةٌ.', 'هِيَ وَاثِقٌ.']], key: [0, 0, 0], why: 'لَيْسَتْ + -an; she → وَاثِقَةٌ.' },
    { en: 'The man who wears the black coat is my uncle.', cols: [['الرَّجُلُ الَّذِي', 'الرَّجُلُ الَّتِي'], ['يَرْتَدِي المِعْطَفَ الأَسْوَدَ', 'يَرْتَدِي المِعْطَفَ السَّوْدَاءَ'], ['هُوَ عَمِّي.', 'هِيَ عَمِّي.']], key: [0, 0, 0], why: 'Man → الَّذِي; coat (m.) → أَسْوَدُ.' },
    { en: 'This bag is cheaper than that one.', cols: [['هٰذِهِ الحَقِيبَةُ', 'هٰذَا الحَقِيبَةُ'], ['أَرْخَصُ', 'أَرْخَصَةٌ'], ['مِنْ تِلْكَ.', 'مِنْ ذٰلِكَ.']], key: [0, 0, 0], why: 'Feminine → هٰذِهِ / تِلْكَ; comparative never changes.' },
  ],
  errors: [
    { wrong: 'أُمِّي صَبُورٌ وَلَيْسَتْ عَصَبِيَّةٌ.', hint: 'Two errors.', right: 'أُمِّي صَبُورَةٌ وَلَيْسَتْ عَصَبِيَّةً.', why: 'Feminine agreement; لَيْسَتْ + -an.' },
    { wrong: 'أَخِي أَطْوَلُ مِنِّي، وَشَعْرُهُ طَوِيلَةٌ وَعَيْنُهُ زَرْقَاءُ.', hint: 'Two errors.', right: 'أَخِي أَطْوَلُ مِنِّي، وَشَعْرُهُ طَوِيلٌ وَعَيْنَاهُ زَرْقَاوَانِ.', why: 'Hair is masculine; eyes are dual.' },
    { wrong: 'أَثِقُ صَدِيقِي لِأَنَّهَا صَادِقٌ.', hint: 'Two errors.', right: 'أَثِقُ بِصَدِيقِي لِأَنَّهُ صَادِقٌ.', why: 'أَثِقُ + bi-; he → لِأَنَّهُ.' },
  ],
  task: {
    title: 'Exam-style text: a special person', ar: 'نَصٌّ بِأُسْلُوبِ الامْتِحَانِ: شَخْصٌ مُمَيَّزٌ',
    text: 'Write an email (about 70–90 words) to an Arabic-speaking friend about a special person in your life. Answer ALL four bullets: • who they are and what they look like • their personality, with evidence • your relationship and something you did together • their style, and your opinion of it.',
    range: [65, 105],
    phrases: [['أُرِيدُ أَنْ أُخْبِرَكَ عَنْ …', 'I want to tell you about …'], ['هُوَ / هِيَ … لِأَنَّهُ / لِأَنَّهَا …', 'he / she is … because …'], ['أَتَفَاهَمُ مَعَهُ / مَعَهَا · فِي الصَّيْفِ المَاضِي …', 'I get on with him / her · last summer …'], ['عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …', 'although …, …']],
    coreFrames: [
      { ar: 'أُرِيدُ أَنْ أُخْبِرَكَ عَنْ ______ . هُوَ / هِيَ ______ .', en: 'I want to tell you about … He / she is …' },
      { ar: 'هُوَ / هِيَ ______ ، لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'He / she is …, because …' },
      { ar: 'أَتَفَاهَمُ مَعَهُ / مَعَهَا، وَ ______ مَعًا.', en: 'I get on with him / her, and we … together.' },
      { ar: 'يَلْبَسُ / تَلْبَسُ ______ ، وَفِي رَأْيِي ______ .', en: 'He / she wears …, and in my opinion …' },
    ],
    developFrames: [
      { ar: 'هُوَ / هِيَ أَكْثَرُ ______ مِنْ ______ .', en: 'He / she is more … than …' },
      { ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّ ______ .', en: 'Although …, …' },
    ],
    bank: ['طَوِيلُ / طَوِيلَةُ القَامَةِ', 'عَيْنَاهُ · عَيْنَاهَا', 'صَبُورٌ · صَبُورَةٌ', 'لَيْسَ خَجُولًا · لَيْسَتْ خَجُولَةً', 'أَتَفَاهَمُ مَعَ · أَثِقُ بِ…', 'أَكْثَرُ … مِنْ', 'وَلٰكِنَّ', 'عَلَى الرَّغْمِ مِنْ أَنَّ'],
    model: {
      text: `مَرْحَبًا يَا جُودُ،
أُرِيدُ أَنْ أُخْبِرَكِ عَنْ أُخْتِي الكَبِيرَةِ مَرْيَمَ. هِيَ طَوِيلَةُ القَامَةِ، وَشَعْرُهَا بُنِّيٌّ مُجَعَّدٌ، وَعَيْنَاهَا عَسَلِيَّتَانِ. هِيَ ذَكِيَّةٌ وَصَبُورَةٌ، لِأَنَّهَا تَشْرَحُ لِي الرِّيَاضِيَّاتِ كُلَّ مَسَاءٍ، وَلَيْسَتْ عَصَبِيَّةً أَبَدًا. أَتَفَاهَمُ مَعَهَا جِدًّا، وَأَثِقُ بِهَا؛ فِي الصَّيْفِ المَاضِي سَافَرْنَا مَعًا إِلَى بَيْتِ جَدَّتِي. تَلْبَسُ عَادَةً مَلَابِسَ عَصْرِيَّةً وَمُحْتَشِمَةً، وَهِيَ أَكْثَرُ أَنَاقَةً مِنِّي! عَلَى الرَّغْمِ مِنْ أَنَّ أُسْلُوبَهَا بَسِيطٌ، فَإِنَّهُ جَمِيلٌ جِدًّا. وَأَنْتِ، مَنِ الشَّخْصُ المُمَيَّزُ فِي حَيَاتِكِ؟
صَدِيقَتُكِ، هِنْدُ`,
      en: '“Hi Jude, I want to tell you about my older sister Maryam. She is tall, her hair is curly and brown, and her eyes are hazel. She is clever and patient, because she explains maths to me every evening, and she is never irritable. I get on with her very well and trust her — last summer we travelled together to my grandmother’s house. She usually wears modern, modest clothes, and she is more elegant than me! Although her style is simple, it is very beautiful. And you — who is the special person in your life? Your friend, Hind.”',
      find: ['وَعَيْنَاهَا عَسَلِيَّتَانِ', 'وَلَيْسَتْ عَصَبِيَّةً', 'وَأَثِقُ بِهَا', 'عَلَى الرَّغْمِ مِنْ أَنَّ أُسْلُوبَهَا'],
    },
  },
  checkCore: 'answer all four bullets with correct agreement?',
  checkDevelop: 'use a comparative, a concession and a past example?',
  remember: 'Before you leave: write ONE target for D3 in your book, e.g. “I will check hair = masculine, eyes = dual.”',
});
