'use strict';
/* Practice Room · D2-L10 · Speaking — a one-minute portrait in six stages. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd2-l10',
  arShort: 'صُورَةٌ شَفَهِيَّةٌ',
  grammar: 'six-stage portrait: who → appearance → qualities + evidence → relationship → style → comparison + opinion; keeping he / she and his / her consistent (-hu / -hā, ya- / ta-); hair masculine, eyes dual; linking the stages (awwalan · baʿda dhālika · akhīran)',
  focus: 'Students run their own speaking practice for a full one-minute spoken portrait: rehearse the six stages, act a model portrait as a dialogue, answer stage-by-stage cards, do a role-play card nominating someone for a school award, perform the full one-minute portrait, then build, fix and write the portrait as a script.',
  words1: 'Appearance', words2: 'Qualities and style',
  dialogue: {
    title: 'A portrait in six stages', ar: 'صُورَةٌ فِي سِتِّ مَرَاحِلَ',
    lines: [
      ['A', '١) مَنْ؟ — سَأَصِفُ مُدَرِّبَتِي فِي النَّادِي، الأُسْتَاذَةَ هَالَةَ.', '1) Who? — I will describe my coach at the club, Ms Hala.'],
      ['B', '٢) المَظْهَرُ — هِيَ طَوِيلَةُ القَامَةِ، وَشَعْرُهَا قَصِيرٌ، وَعَيْنَاهَا بُنِّيَّتَانِ.', '2) Appearance — she is tall, her hair is short, and her eyes are brown.'],
      ['A', '٣) الصِّفَاتُ — هِيَ صَبُورَةٌ، لِأَنَّهَا تَشْرَحُ الحَرَكَةَ عَشْرَ مَرَّاتٍ بِدُونِ غَضَبٍ.', '3) Qualities — she is patient, because she explains a move ten times without getting angry.'],
      ['B', '٤) العَلَاقَةُ — أَحْتَرِمُهَا كَثِيرًا، وَهِيَ تَدْعَمُنِي قَبْلَ كُلِّ مُبَارَاةٍ.', '4) Relationship — I respect her a lot, and she supports me before every match.'],
      ['A', '٥) الأُسْلُوبُ — تَرْتَدِي مَلَابِسَ رِيَاضِيَّةً بَسِيطَةً وَعَمَلِيَّةً.', '5) Style — she wears simple, practical sportswear.'],
      ['B', '٦) المُقَارَنَةُ وَالرَّأْيُ — هِيَ أَكْثَرُ صَبْرًا مِنْ مُدَرِّبِي السَّابِقِ، وَفِي رَأْيِي هِيَ أَفْضَلُ مُدَرِّبَةٍ.', '6) Comparison and opinion — she is more patient than my previous coach, and I think she is the best coach.'],
    ],
    foot: 'Round 1: read the six stages in pairs. Round 2: swap letters. Round 3: describe a MAN using the same six stages — change every -hā to -hu and every ta- to ya-.',
  },
  qTitle: 'Stage cards — one stage per question',
  questions: [
    { q: '١) مَنْ تَصِفُ؟', en: '1) Who are you describing?', start: 'سَأَصِفُ … ، وَهُوَ / هِيَ …', more: '… عُمْرُهُ / عُمْرُهَا …' },
    { q: '٢) كَيْفَ يَبْدُو / تَبْدُو؟', en: '2) What does he / she look like?', start: 'هُوَ / هِيَ … القَامَةِ …', more: '… وَعَيْنَاهُ / عَيْنَاهَا …' },
    { q: '٣) كَيْفَ شَخْصِيَّتُهُ / شَخْصِيَّتُهَا؟', en: '3) What is his / her personality like?', start: 'هُوَ … / هِيَ … لِأَنَّهُ / لِأَنَّهَا …', more: '… مَثَلًا …' },
    { q: '٤) كَيْفَ عَلَاقَتُكَ بِهِ / بِهَا؟', en: '4) What is your relationship like?', start: 'أَتَفَاهَمُ مَعَهُ / مَعَهَا …', more: '… يَدْعَمُنِي / تَدْعَمُنِي …' },
    { q: '٥ + ٦) مَا أُسْلُوبُهُ؟ وَمَا رَأْيُكَ فِيهِ؟', en: '5 + 6) His / her style? Your opinion?', start: 'يَرْتَدِي / تَرْتَدِي …', more: '… أَكْثَرُ … مِنْ … · فِي رَأْيِي …' },
  ],
  card: {
    title: 'Role-play card — nominating someone for the “Kindness Award”', ar: 'جَائِزَةُ اللُّطْفِ', you: 'a student', them: 'the head of year',
    tasks: [
      { ex: 'مَنْ تُرَشِّحُ لِلْجَائِزَةِ؟', task: 'Who + one fact.', plan: 'مَنْ ← أُرَشِّحُ … ، وَهُوَ / هِيَ …', model: 'أُرَشِّحُ عَامِلَ النَّظَافَةِ، العَمَّ مُصْطَفَى.', modelEn: 'I nominate the cleaner, Uncle Mustafa.' },
      { ex: 'صِفْهُ لِي.', task: 'Appearance (two details).', plan: 'المَظْهَرُ ← هُوَ … وَلَهُ …', model: 'هُوَ مُتَوَسِّطُ القَامَةِ، وَلَهُ لِحْيَةٌ رَمَادِيَّةٌ وَابْتِسَامَةٌ جَمِيلَةٌ.', modelEn: 'He is of medium height, with a grey beard and a lovely smile.' },
      { ex: 'لِمَاذَا يَسْتَحِقُّ الجَائِزَةَ؟', task: 'Quality + evidence.', plan: '', model: 'لِأَنَّهُ لَطِيفٌ جِدًّا؛ مَثَلًا، يُسَاعِدُ الطُّلَّابَ الصِّغَارَ كُلَّ صَبَاحٍ.', modelEn: 'Because he is very kind — for example, he helps the young pupils every morning.' },
      { unexpected: true, ex: 'هَلْ تَعْرِفُ شَيْئًا عَنْ حَيَاتِهِ؟', task: 'Answer the surprise question.', plan: '', model: 'نَعَمْ، عِنْدَهُ أَرْبَعَةُ أَوْلَادٍ، وَيَعْمَلُ فِي المَدْرَسَةِ مُنْذُ عِشْرِينَ سَنَةً.', modelEn: 'Yes — he has four children and has worked at the school for twenty years.' },
    ],
    girl: 'if you nominate a woman: صِفْهَا · هِيَ مُتَوَسِّطَةُ القَامَةِ · لِأَنَّهَا لَطِيفَةٌ · تُسَاعِدُ',
    notes: 'Keep the reference consistent: once he, always he (-hu, ya-).',
  },
  talk: {
    title: 'One minute: the full portrait', ar: 'الصُّورَةُ الكَامِلَةُ',
    text: 'Give the full one-minute portrait of a real person in six stages. The Coach ticks each stage and counts any he / she slips.',
    routes: {
      core: 'Stages 1–4, one sentence each.',
      develop: 'All six stages, with evidence for each quality.',
      stretch: 'All six with linking words (أَوَّلًا · بَعْدَ ذٰلِكَ · أَخِيرًا) and zero he / she slips.',
    },
  },
  builder: [
    { en: 'She is short and her eyes are green.', cols: [['هِيَ قَصِيرَةُ القَامَةِ،', 'هِيَ قَصِيرُ القَامَةِ،'], ['وَعَيْنَاهَا', 'وَعَيْنُهَا'], ['خَضْرَاوَانِ.', 'أَخْضَرُ.']], key: [0, 0, 0], why: 'She → قَصِيرَةُ; eyes = dual → خَضْرَاوَانِ.' },
    { en: 'I respect him because he is honest.', cols: [['أَحْتَرِمُهُ', 'أَحْتَرِمُهَا'], ['لِأَنَّهُ', 'لِأَنَّهَا'], ['صَادِقٌ.', 'صَادِقَةٌ.']], key: [0, 0, 0], why: 'Him → -hu everywhere.' },
    { en: 'Finally, in my opinion she is the best teacher.', cols: [['أَخِيرًا،', 'أَوَّلًا،'], ['فِي رَأْيِي هِيَ', 'فِي رَأْيِي هُوَ'], ['أَفْضَلُ مُعَلِّمَةٍ.', 'أَفْضَلُ المُعَلِّمَةِ.']], key: [0, 0, 0], why: 'Superlative + indefinite noun: أَفْضَلُ مُعَلِّمَةٍ.' },
  ],
  errors: [
    { wrong: 'خَالَتِي طَوِيلَةٌ، وَهُوَ يَعْمَلُ فِي مُسْتَشْفًى.', hint: 'A he / she slip.', right: 'خَالَتِي طَوِيلَةٌ، وَهِيَ تَعْمَلُ فِي مُسْتَشْفًى.', why: 'Keep the same person: هِيَ تَعْمَلُ.' },
    { wrong: 'لَهَا شَعْرٌ طَوِيلَةٌ.', hint: 'Hair is …', right: 'لَهَا شَعْرٌ طَوِيلٌ.', why: 'شَعْرٌ is masculine.' },
    { wrong: 'هُوَ أَفْضَلُ المُدَرِّبِ.', hint: 'Superlative pattern.', right: 'هُوَ أَفْضَلُ مُدَرِّبٍ.', why: 'أَفْضَلُ + indefinite singular.' },
  ],
  task: {
    title: 'My one-minute portrait — the script', ar: 'نَصُّ الصُّورَةِ الشَّفَهِيَّةِ',
    text: 'Write the script (about 60–80 words) of your one-minute portrait, in six stages. Include: • who and why you chose him / her • two appearance details (hair masculine, eyes dual) • two qualities with evidence • your relationship (object suffix) • style • a comparison and a final opinion with a superlative.',
    phrases: [['سَأَصِفُ … لِأَنَّ …', 'I will describe … because …'], ['هُوَ / هِيَ … القَامَةِ · عَيْنَاهُ / عَيْنَاهَا …', 'he / she is … · his / her eyes …'], ['أَحْتَرِمُهُ / أَحْتَرِمُهَا لِأَنَّ …', 'I respect him / her because …'], ['أَخِيرًا، فِي رَأْيِي هُوَ / هِيَ أَفْضَلُ …', 'finally, I think he / she is the best …']],
    coreFrames: [
      { ar: 'سَأَصِفُ ______ ، لِأَنَّ ______ .', en: 'I will describe …, because …' },
      { ar: 'هُوَ / هِيَ ______ القَامَةِ، وَشَعْرُهُ / شَعْرُهَا ______ .', en: 'He / she is … height, and his / her hair is …' },
      { ar: 'هُوَ / هِيَ ______ ، لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'He / she is …, because he / she …' },
      { ar: 'يَرْتَدِي / تَرْتَدِي عَادَةً ______ .', en: 'He / she usually wears …' },
    ],
    developFrames: [
      { ar: 'أَحْتَرِمُهُ / أَحْتَرِمُهَا ______ ، وَيَدْعَمُنِي / وَتَدْعَمُنِي ______ .', en: 'I respect him / her …, and he / she supports me …' },
      { ar: 'أَخِيرًا، هُوَ / هِيَ أَكْثَرُ ______ مِنْ ______ ، وَفِي رَأْيِي ______ .', en: 'Finally, he / she is more … than …, and I think …' },
    ],
    bank: ['طَوِيلُ / طَوِيلَةُ القَامَةِ', 'شَعْرٌ قَصِيرٌ · مُجَعَّدٌ', 'عَيْنَانِ بُنِّيَّتَانِ', 'يَرْتَدِي نَظَّارَةً', 'وَدُودٌ · صَبُورٌ · صَادِقٌ', 'أَحْتَرِمُهُ · أَحْتَرِمُهَا', 'أَوَّلًا · بَعْدَ ذٰلِكَ · أَخِيرًا', 'أَفْضَلُ + noun'],
    model: {
      text: 'سَأَصِفُ عَمِّي يُونُسَ، لِأَنَّهُ قُدْوَتِي. هُوَ طَوِيلُ القَامَةِ، وَشَعْرُهُ أَسْوَدُ قَصِيرٌ، وَعَيْنَاهُ عَسَلِيَّتَانِ، وَيَرْتَدِي نَظَّارَةً. هُوَ كَرِيمٌ جِدًّا، لِأَنَّهُ يُسَاعِدُ الفُقَرَاءَ فِي حَيِّهِ كُلَّ شَهْرٍ، وَهُوَ صَبُورٌ مَعَ الأَطْفَالِ. أَحْتَرِمُهُ كَثِيرًا، وَيَدْعَمُنِي فِي دِرَاسَتِي؛ مَثَلًا، اشْتَرَى لِي كُتُبًا قَبْلَ الامْتِحَانَاتِ. عَادَةً يَرْتَدِي مَلَابِسَ رَسْمِيَّةً أَنِيقَةً لِأَنَّهُ مُهَنْدِسٌ. أَخِيرًا، هُوَ أَهْدَأُ مِنْ أَبِي، وَفِي رَأْيِي هُوَ أَطْيَبُ شَخْصٍ فِي عَائِلَتِنَا.',
      en: '“I will describe my uncle Yunus, because he is my role model. He is tall, his hair is short and black, his eyes are hazel, and he wears glasses. He is very generous, because he helps the poor in his neighbourhood every month, and he is patient with children. I respect him a lot, and he supports me in my studies — for example, he bought me books before the exams. He usually wears smart formal clothes because he is an engineer. Finally, he is calmer than my father, and in my opinion he is the kindest person in our family.”',
      find: ['وَعَيْنَاهُ عَسَلِيَّتَانِ', 'لِأَنَّهُ يُسَاعِدُ', 'أَحْتَرِمُهُ كَثِيرًا', 'أَطْيَبُ شَخْصٍ'],
    },
  },
  checkCore: 'cover at least four stages and keep he / she consistent?',
  checkDevelop: 'cover all six stages with evidence, a comparison and a superlative?',
});
