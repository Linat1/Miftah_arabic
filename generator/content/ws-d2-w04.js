'use strict';
/* Apply Workshop · D2-W04 · D2-L07 (listening: people, personality and style) + D2-L08 (reading: opinion texts). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd2-w04', pair: ['d2-l07', 'd2-l08'],
  title: 'Podcast and Magazine: Friends or Family?', arShort: 'الأَصْدِقَاءُ أَمِ العَائِلَةُ؟',
  focus: 'Students join listening and reading: they listen to a podcast clip about two people (tracking who is who, what changes after وَلٰكِنَّ and بَيْنَمَا, fact vs opinion), read a magazine opinion (يَرَى الكَاتِبُ أَنَّ …), report both views, and write a reply that agrees or disagrees with evidence.',
  sortTitle: 'Fact or opinion?', sortCats: ['Fact or description', 'Opinion or view'],
  sort: [
    { ar: 'هِيَ أَطْوَلُ مِنْ أَخِيهَا', cat: 0 }, { ar: 'يَرْتَدِي نَظَّارَةً', cat: 0 }, { ar: 'تُسَاعِدُ أُمَّهَا كُلَّ يَوْمٍ', cat: 0 }, { ar: 'شَعْرُهُ قَصِيرٌ', cat: 0 },
    { ar: 'فِي رَأْيِي …', cat: 1 }, { ar: 'يَبْدُو أَنَّهُ …', cat: 1 }, { ar: 'يَرَى الكَاتِبُ أَنَّ …', cat: 1 }, { ar: 'لَا أُوَافِقُ لِأَنَّ …', cat: 1 },
  ],
  dialogue: {
    title: 'After the podcast', ar: 'بَعْدَ البُودْكَاسْتِ',
    lines: [
      ['A', 'مَاذَا قَالَتْ سَلْمَى فِي البُودْكَاسْتِ؟', 'What did Salma say in the podcast?'],
      ['B', 'قَالَتْ إِنَّ أُخْتَهَا هَادِئَةٌ، بَيْنَمَا هِيَ نَشِيطَةٌ وَمَرِحَةٌ.', 'She said that her sister is calm, whereas she herself is lively and cheerful.'],
      ['A', 'وَهَلْ تَتَفَاهَمَانِ؟', 'And do they get on?'],
      ['B', 'عَادَةً، وَلٰكِنَّهُمَا تَخْتَلِفَانِ فِي المَلَابِسِ!', 'Usually, but they disagree about clothes!'],
      ['A', 'وَفِي المَجَلَّةِ؟ مَا رَأْيُ الكَاتِبِ؟', 'And in the magazine? What is the writer’s opinion?'],
      ['B', 'يَرَى الكَاتِبُ أَنَّ الأَصْدِقَاءَ أَهَمُّ مِنَ العَائِلَةِ، وَأَنَا لَا أُوَافِقُ.', 'The writer thinks that friends are more important than family, and I don’t agree.'],
    ],
    notes: 'Tracking hiya / huwa, بَيْنَمَا and the change after وَلٰكِنَّ come from D2-L07; reporting a writer’s view (يَرَى الكَاتِبُ أَنَّ + accusative noun) and agreeing / disagreeing from D2-L08.',
  },
  card: {
    title: 'Listening and reading card', ar: 'بِطَاقَةُ الاسْتِمَاعِ وَالقِرَاءَةِ', you: 'the listener / reader', them: 'the person reading the texts aloud',
    mix: 'listening for reference, contrast and inference (D2-L07) and reading for the writer’s view, examples and concession (D2-L08)',
    tasks: [
      { ex: '«يُوسُفُ وَأُخْتُهُ: هُوَ خَجُولٌ، بَيْنَمَا هِيَ اجْتِمَاعِيَّةٌ جِدًّا.» — مَنِ الخَجُولُ؟', task: 'Track who is who.', plan: 'مَنْ ← هُوَ … / هِيَ …', model: 'يُوسُفُ هُوَ الخَجُولُ؛ أُخْتُهُ اجْتِمَاعِيَّةٌ.', modelEn: 'Yusuf is the shy one; his sister is sociable.' },
      { ex: '«المُعَلِّمُ صَارِمٌ فِي الصَّفِّ، وَلٰكِنَّهُ لَطِيفٌ جِدًّا فِي النَّادِي.» — كَيْفَ هُوَ فِي النَّادِي؟', task: 'What changes after وَلٰكِنَّ?', plan: 'وَلٰكِنَّ ← فِي النَّادِي …', model: 'هُوَ لَطِيفٌ جِدًّا فِي النَّادِي.', modelEn: 'He is very kind at the club.' },
      { ex: '«سَارَةُ تُسَاعِدُ جَارَتَهَا العَجُوزَ كُلَّ أُسْبُوعٍ.» — مَا الصِّفَةُ؟', task: 'Infer a quality from a behaviour.', plan: '______________', model: 'هِيَ كَرِيمَةٌ وَمُتَعَاوِنَةٌ، لِأَنَّهَا تُسَاعِدُ جَارَتَهَا.', modelEn: 'She is generous and helpful, because she helps her neighbour.' },
      { ex: '«أَرَى أَنَّ الأَصْدِقَاءَ أَهَمُّ مِنَ العَائِلَةِ، لِأَنَّهُمْ يَفْهَمُونَنَا أَكْثَرَ.» — مَا رَأْيُ الكَاتِبِ؟', task: 'Report the writer’s view.', plan: '______________', model: 'يَرَى الكَاتِبُ أَنَّ الأَصْدِقَاءَ أَهَمُّ مِنَ العَائِلَةِ لِأَنَّهُمْ يَفْهَمُونَنَا أَكْثَرَ.', modelEn: 'The writer thinks friends are more important than family because they understand us better.' },
      { unexpected: true, ex: 'وَأَنْتَ: هَلْ تُوَافِقُ الكَاتِبَ؟', task: 'Agree or disagree with an example.', plan: '______________', model: 'أُوَافِقُ جُزْئِيًّا؛ مَثَلًا، صَدِيقِي يَفْهَمُنِي، وَلٰكِنَّ أُمِّي تَدْعَمُنِي دَائِمًا.', modelEn: 'I partly agree; for example, my friend understands me, but my mother always supports me.' },
    ],
    foot: 'Partner A reads each text twice. Answer briefly first, then in a full sentence, and say the clue (هُوَ / هِيَ · وَلٰكِنَّ · بَيْنَمَا · يَرَى). Task ! is your own view. Then swap.',
    girl: 'وَأَنْتِ: هَلْ تُوَافِقِينَ الكَاتِبَ؟',
  },
  talk: {
    title: 'Friends or family — my view', ar: 'رَأْيِي',
    text: 'Talk for one minute: report what the writer thinks (يَرَى الكَاتِبُ أَنَّ …), say whether you agree, give an example from your own life of a friend and a family member (with qualities and evidence), add a contrast or concession, and conclude.',
    routes: {
      core: 'يَرَى الكَاتِبُ أَنَّ … · أُوَافِقُ / لَا أُوَافِقُ لِأَنَّ …',
      develop: 'Add an example (مَثَلًا …) and a contrast with بَيْنَمَا or وَلٰكِنَّ.',
      stretch: 'Add a concession (عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …) and a conclusion with أَرَى أَنَّ …',
    },
  },
  task: {
    title: 'A reply to the magazine article', ar: 'رَدٌّ عَلَى المَقَالِ',
    text: 'The magazine says friends are more important than family in teenagers’ lives. Write a reply (about 60–80 words). Include: • report the writer’s view • do you agree? why? • an example from your life about a friend and a family member, with a quality shown by a behaviour • a contrast with بَيْنَمَا or وَلٰكِنَّ • a concession • your conclusion.',
    range: [50, 100],
    phrases: [['يَرَى الكَاتِبُ أَنَّ …', 'the writer thinks that …'], ['أُوَافِقُ جُزْئِيًّا / لَا أُوَافِقُ لِأَنَّ …', 'I partly agree / I don’t agree because …'], ['مَثَلًا … · بَيْنَمَا …', 'for example … · whereas …'], ['فِي النِّهَايَةِ أَرَى أَنَّ …', 'in the end I think that …']],
    coreFrames: [
      { ar: 'يَرَى الكَاتِبُ أَنَّ ______ .', en: 'The writer thinks that …' },
      { ar: 'أُوَافِقُ / لَا أُوَافِقُ لِأَنَّ ______ .', en: 'I agree / don’t agree because …' },
      { ar: 'مَثَلًا، صَدِيقِي ______ ، وَأُمِّي ______ .', en: 'For example, my friend … and my mother …' },
      { ar: 'فِي النِّهَايَةِ أَرَى أَنَّ ______ .', en: 'In the end I think that …' },
    ],
    developFrames: [
      { ar: '______ ، بَيْنَمَا ______ .', en: '…, whereas …' },
      { ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّ ______ .', en: 'Although …, …' },
    ],
    bank: ['يَرَى الكَاتِبُ أَنَّ', 'أُوَافِقُ · لَا أُوَافِقُ', 'جُزْئِيًّا', 'مَثَلًا', 'بَيْنَمَا · وَلٰكِنَّ', 'يَبْدُو أَنَّ', 'عَلَى الرَّغْمِ مِنْ أَنَّ', 'فِي النِّهَايَةِ'],
    model: {
      text: 'يَرَى الكَاتِبُ أَنَّ الأَصْدِقَاءَ أَهَمُّ مِنَ العَائِلَةِ فِي حَيَاةِ المُرَاهِقِينَ. أُوَافِقُ جُزْئِيًّا فَقَطْ. مَثَلًا، صَدِيقِي زَيْدٌ صَبُورٌ؛ يَسْمَعُنِي عِنْدَمَا أَكُونُ حَزِينًا. بَيْنَمَا أُمِّي تَدْعَمُنِي فِي كُلِّ امْتِحَانٍ، وَتُسَاعِدُنِي كُلَّ يَوْمٍ. عَلَى الرَّغْمِ مِنْ أَنَّ الأَصْدِقَاءَ يَفْهَمُونَنَا، فَإِنَّ العَائِلَةَ مَعَنَا دَائِمًا. فِي النِّهَايَةِ أَرَى أَنَّ الاثْنَيْنِ مُهِمَّانِ، وَلٰكِنَّ العَائِلَةَ أَهَمُّ قَلِيلًا.',
      en: '“The writer thinks that friends are more important than family in teenagers’ lives. I only partly agree. For example, my friend Zayd is patient; he listens to me when I am sad. Whereas my mother supports me in every exam and helps me every day. Although friends understand us, family is always with us. In the end I think both are important, but family is a little more important.”',
      find: ['يَرَى الكَاتِبُ أَنَّ', 'أُوَافِقُ جُزْئِيًّا', 'بَيْنَمَا أُمِّي', 'عَلَى الرَّغْمِ مِنْ أَنَّ'],
    },
  },
});
