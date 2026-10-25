'use strict';
/* Practice Room · D2-L05 · Comparing people and clothes — more, less and better. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd2-l05',
  arShort: 'المُقَارَنَةُ',
  grammar: 'comparative afʿalu + min (aṭwalu min · arkhaṣu min · aghlā min); akthar / aqall + an accusative noun (akthar thiqatan · aqall saʿran); the same: mithla · bi-nafsi al-daraja; preference: ufaḍḍilu … ʿalā …; superlative: al-afḍal · aṭwalu ṭālibin',
  focus: 'Students run their own speaking and writing practice comparing people and clothes: say the comparatives, act a shopping comparison dialogue, answer comparison cards, do a role-play card choosing a gift with a sibling, give a one-minute comparison talk, then build, fix and write a comparison of two people or two outfits.',
  words1: 'Comparing (1)', words2: 'Comparing (2)',
  dialogue: {
    title: 'Which one is better?', ar: 'أَيُّهُمَا أَفْضَلُ؟',
    lines: [
      ['A', 'أَيُّهُمَا أَفْضَلُ: المِعْطَفُ الأَسْوَدُ أَمِ الرَّمَادِيُّ؟', 'Which is better: the black coat or the grey one?'],
      ['B', 'الأَسْوَدُ أَجْمَلُ، وَلٰكِنَّهُ أَغْلَى مِنَ الرَّمَادِيِّ.', 'The black one is nicer, but it is more expensive than the grey one.'],
      ['A', 'وَأَيُّهُمَا أَدْفَأُ؟', 'And which is warmer?'],
      ['B', 'الرَّمَادِيُّ أَدْفَأُ وَأَكْثَرُ رَاحَةً.', 'The grey one is warmer and more comfortable.'],
      ['A', 'إِذَنْ هُوَ الأَكْثَرُ مُنَاسَبَةً لِلشِّتَاءِ!', 'So it’s the most suitable for winter!'],
      ['B', 'صَحِيحٌ. أُفَضِّلُ الرَّاحَةَ عَلَى المَوْضَةِ.', 'True. I prefer comfort to fashion.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: compare two REAL things you own (shoes, bags, phones …).',
  },
  questions: [
    { q: 'مَنْ أَطْوَلُ: أَنْتَ أَمْ أَخُوكَ / أُخْتُكَ؟', en: 'Who is taller: you or your brother / sister?', start: '… أَطْوَلُ مِنِّي / أَنَا أَطْوَلُ مِنْ …', more: '… وَلٰكِنَّنِي أَكْبَرُ …' },
    { q: 'مَنْ أَكْثَرُ صَبْرًا فِي عَائِلَتِكَ؟', en: 'Who is the most patient in your family?', start: '… أَكْثَرُ صَبْرًا مِنْ …', more: '… لِأَنَّهُ / لِأَنَّهَا …' },
    { q: 'أَيُّهُمَا تُفَضِّلُ: الحِذَاءُ الرِّيَاضِيُّ أَمِ الرَّسْمِيُّ؟', en: 'Trainers or formal shoes?', start: 'أُفَضِّلُ … عَلَى … لِأَنَّهُ …', more: '… أَكْثَرُ رَاحَةً' },
    { q: 'هَلِ المَلَابِسُ عَلَى الإِنْتَرْنِت أَرْخَصُ مِنَ المَحَلَّاتِ؟', en: 'Are clothes online cheaper than in shops?', start: 'نَعَمْ، أَرْخَصُ، وَلٰكِنَّ …', more: '… أَقَلُّ جَوْدَةً أَحْيَانًا' },
    { q: 'مَنْ أَفْضَلُ صَدِيقٍ عِنْدَكَ؟ لِمَاذَا؟', en: 'Who is your best friend? Why?', start: 'أَفْضَلُ صَدِيقٍ عِنْدِي …', more: '… لِأَنَّهُ أَكْثَرُ …' },
  ],
  card: {
    title: 'Role-play card — choosing a gift for Mum with your sibling', ar: 'هَدِيَّةٌ لِأُمِّي', you: 'yourself', them: 'your brother or sister',
    tasks: [
      { ex: 'هَلْ نَشْتَرِي الحَقِيبَةَ أَمِ الوِشَاحَ؟', task: 'Choose + comparison.', plan: 'أَيُّهُمَا ← الحَقِيبَةُ أَجْمَلُ مِنْ …', model: 'الحَقِيبَةُ أَجْمَلُ مِنَ الوِشَاحِ، وَأُمِّي تَحْتَاجُهَا.', modelEn: 'The bag is nicer than the scarf, and Mum needs it.' },
      { ex: 'وَلٰكِنَّهَا أَغْلَى!', task: 'Answer with a price comparison.', plan: 'الثَّمَنُ ← صَحِيحٌ، وَلٰكِنَّهَا أَكْثَرُ …', model: 'صَحِيحٌ، وَلٰكِنَّهَا أَكْثَرُ جَوْدَةً، وَنَدْفَعُ ثَمَنَهَا مَعًا.', modelEn: 'True, but it is better quality, and we pay for it together.' },
      { ex: 'وَأَيُّ لَوْنٍ؟', task: 'Preference with عَلَى.', plan: '', model: 'أُفَضِّلُ البُنِّيَّ عَلَى الأَسْوَدِ، لِأَنَّهُ أَنْسَبُ لِمَلَابِسِهَا.', modelEn: 'I prefer brown to black, because it suits her clothes better.' },
      { unexpected: true, ex: 'مَنْ يَعْرِفُ ذَوْقَ أُمِّي أَكْثَرَ: أَنَا أَمْ أَنْتَ؟', task: 'Answer the surprise question.', plan: '', model: 'أَنْتَ تَعْرِفُ ذَوْقَهَا أَكْثَرَ مِنِّي، لِأَنَّكَ تَتَسَوَّقُ مَعَهَا دَائِمًا.', modelEn: 'You know her taste better than me, because you always shop with her.' },
    ],
    girl: 'to a sister: أَنْتِ تَعْرِفِينَ · لِأَنَّكِ تَتَسَوَّقِينَ',
    notes: 'afʿalu + min never changes for gender: الحَقِيبَةُ أَجْمَلُ · المِعْطَفُ أَجْمَلُ.',
  },
  talk: {
    title: 'One minute: compare two people', ar: 'أُقَارِنُ بَيْنَ شَخْصَيْنِ',
    text: 'Compare two people you know for one minute: appearance, personality and style.',
    routes: {
      core: 'Four sentences with أَفْعَلُ + مِنْ.',
      develop: 'Add أَكْثَرُ / أَقَلُّ + noun (أَكْثَرُ ثِقَةً) and مِثْلُ.',
      stretch: 'Add a superlative (أَطْوَلُ شَخْصٍ …) and أُفَضِّلُ … عَلَى …',
    },
  },
  builder: [
    { en: 'My sister is taller than me.', cols: [['أُخْتِي', 'أُخْتِيَ'], ['أَطْوَلُ', 'طُولَى'], ['مِنِّي.', 'مِنْ أَنَا.']], key: [0, 0, 0], why: 'أَفْعَلُ + مِنْ doesn’t change for gender; from me = مِنِّي.' },
    { en: 'My father is more patient than my uncle.', cols: [['أَبِي', 'أَبُو'], ['أَكْثَرُ صَبْرًا', 'أَكْثَرُ صَبُورٌ'], ['مِنْ عَمِّي.', 'مِنْ عَمِّيَ.']], key: [0, 0, 0], why: 'أَكْثَرُ + accusative noun: صَبْرًا.' },
    { en: 'I prefer cotton to wool.', cols: [['أُفَضِّلُ', 'أُفَضِّلُ مِنْ'], ['القُطْنَ', 'القُطْنُ'], ['عَلَى الصُّوفِ.', 'مِنَ الصُّوفِ.']], key: [0, 0, 0], why: 'أُفَضِّلُ X (object, -a) عَلَى Y.' },
  ],
  errors: [
    { wrong: 'هٰذِهِ السُّتْرَةُ أَرْخَصَةٌ مِنْ تِلْكَ.', hint: 'The comparative never takes …', right: 'هٰذِهِ السُّتْرَةُ أَرْخَصُ مِنْ تِلْكَ.', why: 'أَفْعَلُ + مِنْ: no feminine ending.' },
    { wrong: 'أَخِي أَكْثَرُ ذَكِيٌّ مِنِّي.', hint: 'ذَكِيٌّ has its own comparative.', right: 'أَخِي أَذْكَى مِنِّي.', why: 'Use أَفْعَلُ when it exists: أَذْكَى.' },
    { wrong: 'أُفَضِّلُ الشَّايَ مِنَ القَهْوَةِ.', hint: 'Prefer X to Y.', right: 'أُفَضِّلُ الشَّايَ عَلَى القَهْوَةِ.', why: 'أُفَضِّلُ … عَلَى …' },
  ],
  task: {
    title: 'Two people, two styles', ar: 'شَخْصَانِ وَأُسْلُوبَانِ',
    text: 'Write a comparison (about 60–80 words) of two people you know — their appearance, personality and style of clothes. Include: • four comparatives with مِنْ • one أَكْثَرُ / أَقَلُّ + noun • one similarity with مِثْلُ or بِنَفْسِ الدَّرَجَةِ • one superlative • which style you prefer and why (أُفَضِّلُ … عَلَى …).',
    phrases: [['… أَطْوَلُ / أَصْغَرُ مِنْ …', '… taller / younger than …'], ['أَكْثَرُ ثِقَةً · أَقَلُّ صَبْرًا', 'more confident · less patient'], ['… مِثْلُ … · بِنَفْسِ الدَّرَجَةِ', 'like … · to the same degree'], ['أُفَضِّلُ أُسْلُوبَ … عَلَى …', 'I prefer …’s style to …']],
    coreFrames: [
      { ar: '______ أَطْوَلُ مِنْ ______ .', en: '… is taller than …' },
      { ar: '______ أَكْبَرُ / أَصْغَرُ مِنْ ______ .', en: '… is older / younger than …' },
      { ar: '______ أَكْثَرُ ______ مِنْ ______ .', en: '… is more … than …' },
      { ar: 'أُفَضِّلُ أُسْلُوبَ ______ عَلَى ______ ، لِأَنَّ ______ .', en: 'I prefer …’s style to …, because …' },
    ],
    developFrames: [
      { ar: 'كِلَاهُمَا ______ بِنَفْسِ الدَّرَجَةِ.', en: 'Both are … to the same degree.' },
      { ar: '______ أَكْثَرُ شَخْصٍ ______ فِي ______ .', en: '… is the most … person in …' },
    ],
    bank: ['أَطْوَلُ · أَقْصَرُ', 'أَكْبَرُ · أَصْغَرُ', 'أَرْخَصُ · أَغْلَى', 'أَجْمَلُ · أَفْضَلُ', 'أَكْثَرُ ثِقَةً', 'أَقَلُّ صَبْرًا', 'مِثْلُ · بِنَفْسِ الدَّرَجَةِ', 'أُفَضِّلُ … عَلَى …'],
    model: {
      text: 'سَأُقَارِنُ بَيْنَ خَالِي وَعَمَّتِي. خَالِي أَطْوَلُ مِنْ عَمَّتِي، وَهُوَ أَصْغَرُ مِنْهَا بِخَمْسِ سَنَوَاتٍ. عَمَّتِي أَكْثَرُ صَبْرًا مِنْهُ، أَمَّا خَالِي فَهُوَ أَكْثَرُ مَرَحًا. كِلَاهُمَا كَرِيمٌ بِنَفْسِ الدَّرَجَةِ. خَالِي يَلْبَسُ مَلَابِسَ عَصْرِيَّةً وَمُلَوَّنَةً، بَيْنَمَا تَلْبَسُ عَمَّتِي مَلَابِسَ تَقْلِيدِيَّةً أَنِيقَةً. مَلَابِسُ خَالِي أَرْخَصُ، وَلٰكِنَّ مَلَابِسَ عَمَّتِي أَكْثَرُ جَوْدَةً. فِي رَأْيِي عَمَّتِي أَكْثَرُ شَخْصٍ أَنِيقٍ فِي عَائِلَتِنَا. أُفَضِّلُ أُسْلُوبَهَا عَلَى أُسْلُوبِ خَالِي، لِأَنَّهُ بَسِيطٌ وَمُحْتَشِمٌ.',
      en: '“I will compare my uncle and my aunt. My uncle is taller than my aunt, and he is five years younger than her. My aunt is more patient than him; as for my uncle, he is more fun. Both are generous to the same degree. My uncle wears modern, colourful clothes, whereas my aunt wears elegant traditional clothes. My uncle’s clothes are cheaper, but my aunt’s are better quality. In my opinion my aunt is the most elegant person in our family. I prefer her style to my uncle’s, because it is simple and modest.”',
      find: ['أَطْوَلُ مِنْ عَمَّتِي', 'أَكْثَرُ صَبْرًا', 'بِنَفْسِ الدَّرَجَةِ', 'أُفَضِّلُ أُسْلُوبَهَا عَلَى'],
    },
  },
  checkCore: 'use أَفْعَلُ + مِنْ without a feminine ending?',
  checkDevelop: 'use أَكْثَرُ / أَقَلُّ + noun, a superlative and أُفَضِّلُ … عَلَى …?',
});
