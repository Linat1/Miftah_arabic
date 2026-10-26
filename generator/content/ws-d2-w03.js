'use strict';
/* Apply Workshop · D2-W03 · D2-L05 (comparing people and clothes) + D2-L06 (describing appearance: a full portrait). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd2-w03', pair: ['d2-l05', 'd2-l06'],
  title: 'Lost at the Festival', arShort: 'ضَائِعٌ فِي المِهْرَجَانِ',
  focus: 'Students join full physical portraits with comparisons: at a busy festival a younger brother is lost, so they describe him precisely to a steward (height, hair, eyes, clothes, الَّذِي / الَّتِي), compare him with other children (أَطْوَلُ مِنْ · مِثْلُ), and write a lost-child notice and a message home.',
  dialogue: {
    title: 'At the information tent', ar: 'فِي خَيْمَةِ الاسْتِعْلَامَاتِ',
    lines: [
      ['A', 'لَوْ سَمَحْتَ، أَخِي الصَّغِيرُ ضَائِعٌ!', 'Excuse me, my little brother is lost!'],
      ['B', 'لَا تَقْلَقْ. كَيْفَ يَبْدُو؟', 'Don’t worry. What does he look like?'],
      ['A', 'هُوَ قَصِيرُ القَامَةِ، وَشَعْرُهُ أَسْوَدُ قَصِيرٌ، وَعَيْنَاهُ بُنِّيَّتَانِ.', 'He is short, his hair is short and black, and his eyes are brown.'],
      ['B', 'مَاذَا يَرْتَدِي؟', 'What is he wearing?'],
      ['A', 'يَرْتَدِي قَمِيصًا أَحْمَرَ وَقُبَّعَةً زَرْقَاءَ. هُوَ أَقْصَرُ مِنْ هٰذَا الوَلَدِ قَلِيلًا.', 'He is wearing a red shirt and a blue cap. He is a little shorter than this boy.'],
      ['B', 'هَلْ هُوَ الوَلَدُ الَّذِي يَقِفُ بِجَانِبِ المُثَلَّجَاتِ؟', 'Is he the boy who is standing next to the ice cream?'],
    ],
    notes: 'The portrait order, hair (masculine), eyes (dual: بُنِّيَّتَانِ), يَرْتَدِي and الَّذِي come from D2-L06; comparatives (أَقْصَرُ مِنْ) from D2-L05.',
  },
  card: {
    title: 'Role-play card — describing someone who is lost', ar: 'نَصِفُ شَخْصًا ضَائِعًا', you: 'the worried family member', them: 'the festival steward',
    mix: 'a full portrait in order — height, hair, eyes, clothes, الَّذِي / الَّتِي (D2-L06) with comparatives, أَكْثَرُ + noun and مِثْلُ (D2-L05)',
    tasks: [
      { ex: 'مَنْ ضَاعَ؟ وَكَمْ عُمْرُهُ؟', task: 'Who and how old.', plan: 'مَنْ ← أُخْتِي / أَخِي … عُمْرُهُ / عُمْرُهَا …', model: 'أُخْتِي الصَّغِيرَةُ هُدَى، عُمْرُهَا سِتُّ سَنَوَاتٍ.', modelEn: 'My little sister Huda; she is six.' },
      { ex: 'كَيْفَ تَبْدُو؟', task: 'Height, hair and eyes (dual).', plan: 'كَيْفَ ← هِيَ … القَامَةِ · شَعْرُهَا … · عَيْنَاهَا …', model: 'هِيَ قَصِيرَةُ القَامَةِ، شَعْرُهَا بُنِّيٌّ طَوِيلٌ، وَعَيْنَاهَا خَضْرَاوَانِ.', modelEn: 'She is short, her hair is long and brown, and her eyes are green.' },
      { ex: 'مَاذَا تَرْتَدِي اليَوْمَ؟', task: 'Two clothes with colours that agree.', plan: '______________', model: 'تَرْتَدِي فُسْتَانًا أَصْفَرَ وَحِذَاءً أَبْيَضَ، وَلَهَا حَقِيبَةٌ صَغِيرَةٌ.', modelEn: 'She is wearing a yellow dress and white shoes, and she has a small bag.' },
      { ex: 'هَلْ هِيَ مِثْلُ هٰذِهِ البِنْتِ؟', task: 'Compare with a comparative and مِثْلُ.', plan: '______________', model: 'لَا، هِيَ أَصْغَرُ مِنْهَا، وَشَعْرُهَا أَطْوَلُ؛ وَلٰكِنَّ فُسْتَانَهَا مِثْلُ فُسْتَانِ تِلْكَ البِنْتِ.', modelEn: 'No, she is younger than her, and her hair is longer; but her dress is like that girl’s dress.' },
      { unexpected: true, ex: 'هَلْ هِيَ البِنْتُ الَّتِي تَبْكِي هُنَاكَ؟', task: 'Confirm with الَّتِي and a detail.', plan: '______________', model: 'نَعَمْ! هِيَ الَّتِي تَرْتَدِي الفُسْتَانَ الأَصْفَرَ. شُكْرًا جَزِيلًا!', modelEn: 'Yes! She is the one wearing the yellow dress. Thank you very much!' },
    ],
    girl: 'لَا تَقْلَقِي · كَيْفَ يَبْدُو …؟ — the questions are about the lost child, so they stay the same',
  },
  talk: {
    title: 'A full portrait — and a comparison', ar: 'صُورَةٌ كَامِلَةٌ وَمُقَارَنَةٌ',
    text: 'Talk for one minute: describe a family member in the portrait order (height → hair → eyes → clothes), then compare them with yourself or another person using three comparatives, one أَكْثَرُ / أَقَلُّ + noun and one similarity. Respectful description only.',
    routes: {
      core: 'هُوَ / هِيَ … القَامَةِ · شَعْرُهُ / شَعْرُهَا … · يَرْتَدِي / تَرْتَدِي …',
      develop: 'Add the eyes as a dual and three comparatives with مِنْ.',
      stretch: 'Add أَكْثَرُ صَبْرًا / أَقَلُّ … , مِثْلُ and a الَّذِي / الَّتِي sentence.',
    },
  },
  task: {
    title: 'A lost-child notice and a message home', ar: 'إِعْلَانٌ وَرِسَالَةٌ',
    text: 'Part 1: write the festival’s lost-child notice — a full portrait in order (who, age, height, hair, eyes as a dual, clothes). Part 2: write a message to your parents (together about 60–80 words): where you found him / her, a comparison with another child (two comparatives, one مِثْلُ), one الَّذِي / الَّتِي sentence, and how you felt.',
    range: [50, 100],
    phrases: [['هُوَ / هِيَ قَصِيرُ / قَصِيرَةُ القَامَةِ', 'he / she is short'], ['شَعْرُهُ / شَعْرُهَا … · عَيْنَاهُ / عَيْنَاهَا …', 'his / her hair … · his / her eyes …'], ['يَرْتَدِي / تَرْتَدِي …', 'he / she is wearing …'], ['أَطْوَلُ مِنْ · مِثْلُ · الَّذِي / الَّتِي', 'taller than · like · who']],
    coreFrames: [
      { ar: 'إِعْلَانٌ: ضَاعَ / ضَاعَتْ ______ ، عُمْرُهُ / عُمْرُهَا ______ .', en: 'Notice: … is lost; he / she is … years old.' },
      { ar: 'هُوَ / هِيَ ______ القَامَةِ، وَشَعْرُهُ / شَعْرُهَا ______ .', en: 'He / she is …, and his / her hair is …' },
      { ar: 'عَيْنَاهُ / عَيْنَاهَا ______ .', en: 'His / her eyes are …' },
      { ar: 'يَرْتَدِي / تَرْتَدِي ______ .', en: 'He / she is wearing …' },
      { ar: 'وَجَدْنَاهُ / وَجَدْنَاهَا ______ .', en: 'We found him / her …' },
    ],
    developFrames: [
      { ar: 'هُوَ / هِيَ ______ مِنْ ______ ، وَ ______ مِثْلُ ______ .', en: 'He / she is …-er than …, and … like …' },
      { ar: 'كَانَ / كَانَتِ الوَلَدَ الَّذِي / البِنْتَ الَّتِي ______ .', en: 'It was the boy who / the girl who …' },
    ],
    bank: ['قَصِيرُ القَامَةِ · طَوِيلَةُ القَامَةِ', 'شَعْرُهُ · شَعْرُهَا', 'عَيْنَاهُ · عَيْنَاهَا', 'بُنِّيَّتَانِ · خَضْرَاوَانِ', 'يَرْتَدِي · تَرْتَدِي', 'أَطْوَلُ · أَصْغَرُ مِنْ', 'مِثْلُ', 'الَّذِي · الَّتِي'],
    model: {
      text: `إِعْلَانٌ: ضَاعَ آدَمُ، عُمْرُهُ خَمْسُ سَنَوَاتٍ. هُوَ قَصِيرُ القَامَةِ، وَشَعْرُهُ أَسْوَدُ قَصِيرٌ، وَعَيْنَاهُ بُنِّيَّتَانِ. يَرْتَدِي قَمِيصًا أَحْمَرَ وَقُبَّعَةً زَرْقَاءَ.
أُمِّي، لَا تَقْلَقِي! وَجَدْنَا آدَمَ بِجَانِبِ خَيْمَةِ المُثَلَّجَاتِ. كَانَ الوَلَدَ الَّذِي يَبْكِي هُنَاكَ. هُوَ أَصْغَرُ مِنَ الأَطْفَالِ الآخَرِينَ وَأَقْصَرُ مِنْهُمْ، وَقُبَّعَتُهُ مِثْلُ قُبَّعَتِي تَمَامًا، لِذٰلِكَ عَرَفْتُهُ بِسُرْعَةٍ. كُنْتُ خَائِفًا جِدًّا، وَلٰكِنِّي الآنَ سَعِيدٌ.`,
      en: '“Notice: Adam is lost; he is five. He is short, his hair is short and black, and his eyes are brown. He is wearing a red shirt and a blue cap. / Mum, don’t worry! We found Adam next to the ice-cream tent. He was the boy who was crying there. He is younger and shorter than the other children, and his cap is exactly like mine, so I recognised him quickly. I was very scared, but now I am happy.”',
      find: ['قَصِيرُ القَامَةِ', 'عَيْنَاهُ بُنِّيَّتَانِ', 'الوَلَدَ الَّذِي يَبْكِي', 'مِثْلُ قُبَّعَتِي'],
    },
  },
});
