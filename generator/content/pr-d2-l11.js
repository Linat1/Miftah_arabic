'use strict';
/* Practice Room · D2-L11 · Writing — people, relationships and style in three paragraphs. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd2-l11',
  arShort: 'الكِتَابَةُ عَنِ النَّاسِ',
  grammar: 'three-paragraph plan: (1) person + appearance · (2) personality + relationship · (3) style + opinion; checking agreement (m. / f. / pl.; non-human plural → f. sg.), references (-hu / -hā), connectors (li-anna · wa-lākinna · baynamā · ʿalā al-raghmi min anna … fa-inna)',
  focus: 'Students run their own writing workshop, with speaking first: say the adjectives in all forms, act a planning dialogue, plan aloud with question cards, do a role-play card giving peer feedback, rehearse their text aloud for one minute, then build, fix and write an extended three-paragraph text and check it with a buddy.',
  words1: 'Personality (m. / f.)', words2: 'More qualities',
  dialogue: {
    title: 'Planning my text with a partner', ar: 'أُخَطِّطُ مَعَ زَمِيلِي',
    lines: [
      ['A', 'عَنْ مَنْ سَتَكْتُبُ؟', 'Who will you write about?'],
      ['B', 'عَنْ صَدِيقَتِي أَسْمَاءَ. الفِقْرَةُ الأُولَى عَنْ مَظْهَرِهَا.', 'About my friend Asma. Paragraph one is about her appearance.'],
      ['A', 'وَالفِقْرَةُ الثَّانِيَةُ؟', 'And paragraph two?'],
      ['B', 'عَنْ شَخْصِيَّتِهَا وَعَلَاقَتِي بِهَا: هِيَ صَادِقَةٌ وَمُتَعَاوِنَةٌ، وَأَثِقُ بِهَا.', 'About her personality and our relationship: she is honest and helpful, and I trust her.'],
      ['A', 'وَالثَّالِثَةُ؟', 'And the third?'],
      ['B', 'عَنْ أُسْلُوبِهَا وَرَأْيِي فِيهِ، مَعَ «عَلَى الرَّغْمِ مِنْ أَنَّ».', 'About her style and my opinion of it, with “although”.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: plan YOUR three paragraphs aloud the same way.',
  },
  qTitle: 'Plan aloud — one card per paragraph',
  questions: [
    { q: 'الفِقْرَةُ ١: مَنْ هُوَ / هِيَ؟ وَكَيْفَ يَبْدُو / تَبْدُو؟', en: 'Paragraph 1: who, and what do they look like?', start: 'سَأَكْتُبُ عَنْ … هُوَ / هِيَ …', more: '… وَعَيْنَاهُ / عَيْنَاهَا …' },
    { q: 'الفِقْرَةُ ٢: كَيْفَ شَخْصِيَّتُهُ / شَخْصِيَّتُهَا؟', en: 'Paragraph 2: personality?', start: '… وَ … لِأَنَّهُ / لِأَنَّهَا …', more: '… وَلٰكِنَّهُ / وَلٰكِنَّهَا أَحْيَانًا …' },
    { q: 'الفِقْرَةُ ٢: كَيْفَ عَلَاقَتُكُمَا؟', en: 'Paragraph 2: your relationship?', start: 'أَتَفَاهَمُ مَعَهُ / مَعَهَا …', more: '… مَثَلًا …' },
    { q: 'الفِقْرَةُ ٣: مَا أُسْلُوبُهُ / أُسْلُوبُهَا؟', en: 'Paragraph 3: style?', start: 'يَلْبَسُ / تَلْبَسُ …', more: '… أَكْثَرُ … مِنْ …' },
    { q: 'الفِقْرَةُ ٣: مَا رَأْيُكَ النِّهَائِيُّ؟', en: 'Paragraph 3: final opinion?', start: 'فِي رَأْيِي …', more: '… عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …' },
  ],
  card: {
    title: 'Role-play card — giving peer feedback', ar: 'تَغْذِيَةٌ رَاجِعَةٌ لِزَمِيلٍ', you: 'the reviewer', them: 'the writer of a draft',
    tasks: [
      { ex: 'مَا رَأْيُكَ فِي نَصِّي؟', task: 'One strength.', plan: 'إِيجَابِيٌّ ← أَعْجَبَنِي … لِأَنَّ …', model: 'أَعْجَبَتْنِي الفِقْرَةُ الثَّانِيَةُ، لِأَنَّ الأَمْثِلَةَ وَاضِحَةٌ.', modelEn: 'I liked the second paragraph, because the examples are clear.' },
      { ex: 'هَلْ هُنَاكَ أَخْطَاءٌ؟', task: 'One agreement error.', plan: 'خَطَأٌ ← كَتَبْتَ «…» وَالصَّوَابُ «…»', model: 'كَتَبْتَ «شَعْرُهَا طَوِيلَةٌ»، وَالصَّوَابُ «شَعْرُهَا طَوِيلٌ».', modelEn: 'You wrote “her hair is long (f.)”; correct is “long (m.)”.' },
      { ex: 'كَيْفَ أُحَسِّنُ الفِقْرَةَ الثَّالِثَةَ؟', task: 'One improvement.', plan: '', model: 'أَضِفْ جُمْلَةً فِيهَا «عَلَى الرَّغْمِ مِنْ أَنَّ» لِكَيْ يَكُونَ الرَّأْيُ مُتَوَازِنًا.', modelEn: 'Add a sentence with “although” so the opinion is balanced.' },
      { unexpected: true, ex: 'هَلْ نَصِّي طَوِيلٌ بِمَا يَكْفِي؟', task: 'Answer the surprise question.', plan: '', model: 'لَيْسَ بَعْدُ. أَضِفْ مِثَالًا فِي المَاضِي، مَثَلًا شَيْئًا فَعَلْتُمَاهُ مَعًا.', modelEn: 'Not yet. Add an example in the past — something you did together.' },
    ],
    girl: 'to a girl writer: رَأْيُكِ · كَتَبْتِ · أَضِيفِي',
    notes: 'Feedback = one strength + one correction + one improvement.',
  },
  talk: {
    title: 'One minute: say your text before you write it', ar: 'أَقُولُ نَصِّي أَوَّلًا',
    text: 'Speak your three paragraphs aloud for one minute from your plan. Your partner listens for agreement slips.',
    routes: {
      core: 'Two sentences per paragraph.',
      develop: 'Add a reason and an example in paragraph 2.',
      stretch: 'Add a concession in paragraph 3 and a comparison.',
    },
  },
  builder: [
    { en: 'His clothes are simple and practical.', cols: [['مَلَابِسُهُ', 'مَلَابِسُهَا'], ['بَسِيطَةٌ', 'بَسِيطُونَ'], ['وَعَمَلِيَّةٌ.', 'وَعَمَلِيٌّ.']], key: [0, 0, 0], why: 'Non-human plural → feminine singular adjectives.' },
    { en: 'She is shy, but she is confident in class.', cols: [['هِيَ خَجُولَةٌ،', 'هِيَ خَجُولٌ،'], ['وَلٰكِنَّهَا', 'وَلٰكِنَّهُ'], ['وَاثِقَةٌ فِي الصَّفِّ.', 'وَاثِقٌ فِي الصَّفِّ.']], key: [0, 0, 0], why: 'She → feminine all the way.' },
    { en: 'Although his style is modern, it is modest.', cols: [['عَلَى الرَّغْمِ مِنْ أَنَّ', 'عَلَى الرَّغْمِ مِنْ'], ['أُسْلُوبَهُ عَصْرِيٌّ،', 'أُسْلُوبُهُ عَصْرِيٌّ،'], ['فَإِنَّهُ مُحْتَشِمٌ.', 'فَإِنَّهَا مُحْتَشِمٌ.']], key: [0, 0, 0], why: 'أَنَّ + noun in -a; it (style, m.) → فَإِنَّهُ.' },
  ],
  errors: [
    { wrong: 'أَحْذِيَتُهَا جَمِيلُونَ.', hint: 'Things in the plural …', right: 'أَحْذِيَتُهَا جَمِيلَةٌ.', why: 'Non-human plural → feminine singular.' },
    { wrong: 'أَخِي صَبُورٌ، وَهِيَ تُسَاعِدُنِي دَائِمًا.', hint: 'Reference slip.', right: 'أَخِي صَبُورٌ، وَهُوَ يُسَاعِدُنِي دَائِمًا.', why: 'Keep the same person: هُوَ يُسَاعِدُنِي.' },
    { wrong: 'هِيَ وَدُودَةٌ. هِيَ صَادِقَةٌ. هِيَ مُجْتَهِدَةٌ.', hint: 'Join them!', right: 'هِيَ وَدُودَةٌ وَصَادِقَةٌ، كَمَا أَنَّهَا مُجْتَهِدَةٌ جِدًّا.', why: 'Use connectors to join short sentences.' },
  ],
  task: {
    title: 'Three paragraphs about someone important', ar: 'ثَلَاثُ فِقْرَاتٍ عَنْ شَخْصٍ مُهِمٍّ',
    text: 'Write a text (about 70–90 words) in three paragraphs about someone important to you. ¶1 who they are + appearance. ¶2 personality with evidence + your relationship (an example in the past). ¶3 style + a balanced opinion (عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …). Then check agreement, references and connectors with your buddy.',
    range: [65, 105],
    phrases: [['سَأَكْتُبُ عَنْ … لِأَنَّ …', 'I will write about … because …'], ['هُوَ / هِيَ … ، كَمَا أَنَّهُ / أَنَّهَا …', 'he / she is …, and also …'], ['مَثَلًا، فِي الصَّيْفِ المَاضِي …', 'for example, last summer …'], ['عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …', 'although …, …']],
    coreFrames: [
      { ar: '¶١ سَأَكْتُبُ عَنْ ______ . هُوَ / هِيَ ______ القَامَةِ، وَ ______ .', en: '¶1 I will write about … He / she is …, and …' },
      { ar: '¶٢ هُوَ / هِيَ ______ ، لِأَنَّهُ / لِأَنَّهَا ______ .', en: '¶2 He / she is …, because …' },
      { ar: 'أَتَفَاهَمُ مَعَهُ / مَعَهَا، وَمَثَلًا ______ .', en: 'I get on with him / her, and for example …' },
      { ar: '¶٣ يَلْبَسُ / تَلْبَسُ ______ ، وَفِي رَأْيِي ______ .', en: '¶3 He / she wears …, and in my opinion …' },
    ],
    developFrames: [
      { ar: '______ ، كَمَا أَنَّهُ / أَنَّهَا ______ .', en: '…, and also he / she is …' },
      { ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّ ______ .', en: 'Although …, …' },
    ],
    bank: ['وَدُودٌ · وَدُودَةٌ', 'صَادِقٌ · صَادِقَةٌ', 'مُتَعَاوِنٌ · مُتَعَاوِنَةٌ', 'وَاثِقٌ · وَاثِقَةٌ', 'كَمَا أَنَّ', 'وَلٰكِنَّ · بَيْنَمَا', 'عَلَى الرَّغْمِ مِنْ أَنَّ', 'فِي رَأْيِي'],
    model: {
      text: `سَأَكْتُبُ عَنْ جَارَتِنَا أُمِّ سَلِيمٍ. هِيَ قَصِيرَةُ القَامَةِ، وَشَعْرُهَا رَمَادِيٌّ، وَعَيْنَاهَا سَوْدَاوَانِ.
هِيَ كَرِيمَةٌ جِدًّا، لِأَنَّهَا تُرْسِلُ لَنَا الطَّعَامَ فِي رَمَضَانَ، كَمَا أَنَّهَا صَبُورَةٌ مَعَ الأَطْفَالِ. أَتَفَاهَمُ مَعَهَا كَثِيرًا؛ مَثَلًا، فِي الصَّيْفِ المَاضِي عَلَّمَتْنِي كَيْفَ أَطْبُخُ المَقْلُوبَةَ.
تَلْبَسُ عَادَةً مَلَابِسَ تَقْلِيدِيَّةً بَسِيطَةً. عَلَى الرَّغْمِ مِنْ أَنَّ أُسْلُوبَهَا قَدِيمٌ، فَإِنَّهُ أَنِيقٌ وَمُحْتَشِمٌ. فِي رَأْيِي هِيَ أَطْيَبُ جَارَةٍ فِي حَيِّنَا، وَهِيَ مِثْلُ جَدَّةٍ ثَانِيَةٍ لِي، لِذٰلِكَ أَزُورُهَا كُلَّ أُسْبُوعٍ.`,
      en: '“I will write about our neighbour Umm Salim. She is short, her hair is grey, and her eyes are black. She is very generous, because she sends us food in Ramadan, and she is also patient with children. I get on with her very well — for example, last summer she taught me how to cook maqluba. She usually wears simple traditional clothes. Although her style is old-fashioned, it is elegant and modest. In my opinion she is the kindest neighbour in our area, and she is like a second grandmother to me, so I visit her every week.”',
      find: ['وَعَيْنَاهَا سَوْدَاوَانِ', 'كَمَا أَنَّهَا صَبُورَةٌ', 'فِي الصَّيْفِ المَاضِي', 'عَلَى الرَّغْمِ مِنْ أَنَّ أُسْلُوبَهَا'],
    },
  },
  checkCore: 'write three clear paragraphs with correct he / she references?',
  checkDevelop: 'check agreement (including non-human plurals) and use a concession?',
});
