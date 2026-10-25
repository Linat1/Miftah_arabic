'use strict';
/* Practice Room · D6-L10 · Listening — culture, celebration and identity texts. Partners read, partners catch. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd6-l10',
  arShort: 'أَسْتَمِعُ إِلَى الثَّقَافَةِ',
  grammar: 'catch three things at speed: the TENSE in the verb shape (iḥtafalnā · naḥtafilu · sa-naḥtafilu · kunnā naḥtafilu); the HEDGE that narrows a claim (fī baʿḍi al-ʿāʾilāt · laysa dāʾiman · ghāliban · ʿalā ḥaddi ʿilmī); WHO said it in a dialogue (anā / hiya / hum)',
  focus: 'Students run their own listening-and-speaking practice in pairs: one reads short cultural monologues and dialogues aloud, the other catches the tense of each celebration, the hedge that narrows a claim, and who said what. Then they do a role-play card as a podcast host, give a one-minute talk with hedges and tense changes, and build, fix and write a dialogue with traps.',
  words1: 'Culture words', words2: 'Tense and hedge signals',
  dialogue: {
    title: 'Catch the tense and the hedge', ar: 'الزَّمَنُ وَالتَّحَفُّظُ',
    lines: [
      ['A', 'كُنَّا نَحْتَفِلُ بِالعِيدِ فِي القَرْيَةِ، وَالآنَ نَحْتَفِلُ فِي المَدِينَةِ.', 'We used to celebrate Eid in the village, and now we celebrate in the city.'],
      ['B', '«كُنَّا نَحْتَفِلُ» = عَادَةٌ قَدِيمَةٌ؛ «نَحْتَفِلُ الآنَ» = الحَاضِرُ. الجَوَابُ لِلْيَوْمِ: المَدِينَةُ.', '“kunnā naḥtafilu” = old habit; “naḥtafilu now” = present. Today’s answer: the city.'],
      ['A', 'فِي بَعْضِ العَائِلَاتِ يَلْبَسُ الأَطْفَالُ مَلَابِسَ جَدِيدَةً.', 'In some families children wear new clothes.'],
      ['B', '«فِي بَعْضِ العَائِلَاتِ» — لَيْسَ كُلَّ العَائِلَاتِ! هٰذَا تَحَفُّظٌ.', '“In some families” — not all families! That’s a hedge.'],
      ['A', 'قَالَتْ أُخْتِي إِنَّهَا سَتُزَيِّنُ البَيْتَ، وَقَالَ أَبِي إِنَّهُ سَيَطْبُخُ.', 'My sister said she will decorate the house, and my dad said he will cook.'],
      ['B', 'مَنْ سَيُزَيِّنُ؟ الأُخْتُ. وَمَنْ سَيَطْبُخُ؟ الأَبُ — وَكِلَاهُمَا فِي المُسْتَقْبَلِ.', 'Who will decorate? The sister. Who will cook? The dad — both in the future.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: A invents a sentence with a hedge; B says what the hedge changes.',
  },
  qTitle: 'Catch it — the Leader reads, the Speaker answers',
  questions: [
    { q: 'احْتَفَلْنَا بِرَأْسِ السَّنَةِ الهِجْرِيَّةِ فِي المَسْجِدِ، وَسَنَحْتَفِلُ هٰذِهِ السَّنَةَ فِي البَيْتِ. — أَيْنَ الاحْتِفَالُ القَادِمُ؟', en: '“We celebrated the Islamic New Year at the mosque; this year we’ll celebrate at home.” — Where next?', start: 'فِي البَيْتِ …', more: 'الدَّلِيلُ: «سَنَحْتَفِلُ»' },
    { q: 'غَالِبًا مَا يَزُورُ النَّاسُ أَقَارِبَهُمْ فِي العِيدِ. — هَلْ يَزُورُ كُلُّ النَّاسِ أَقَارِبَهُمْ؟', en: '“People often visit relatives at Eid.” — Does everyone?', start: 'لَيْسَ بِالضَّرُورَةِ؛ «غَالِبًا» تَعْنِي …', more: '…' },
    { q: '— هَلْ تَصُومِينَ؟ — نَعَمْ، وَأَخِي يَصُومُ أَيْضًا، أَمَّا أُخْتِي الصَّغِيرَةُ فَلَا. — مَنْ لَا يَصُومُ؟', en: '“— Do you fast? — Yes, and my brother too; my little sister doesn’t.” — Who doesn’t?', start: 'الأُخْتُ الصَّغِيرَةُ …', more: 'Trap: الأَخُ يَصُومُ' },
    { q: 'عَلَى حَدِّ عِلْمِي، يُحْتَفَلُ بِهٰذَا المِهْرَجَانِ فِي الجَنُوبِ فَقَطْ. — هَلِ المُتَكَلِّمُ مُتَأَكِّدٌ؟', en: '“As far as I know, this festival is celebrated only in the south.” — Is the speaker sure?', start: 'لَا، «عَلَى حَدِّ عِلْمِي» تَعْنِي …', more: '…' },
    { q: 'كَانَ جَدِّي يَلْبَسُ الزِّيَّ التَّقْلِيدِيَّ دَائِمًا، أَمَّا أَبِي فَيَلْبَسُهُ فِي الأَعْيَادِ فَقَطْ. — مَتَى يَلْبَسُهُ الأَبُ؟', en: '“Grandpa always wore traditional dress; Dad wears it only at festivals.” — When does Dad?', start: 'فِي الأَعْيَادِ فَقَطْ …', more: 'Trap: «دَائِمًا» لِلْجَدِّ' },
  ],
  card: {
    title: 'Role-play card — hosting a culture podcast', ar: 'بُودْكَاسْتُ الثَّقَافَةِ', you: 'the podcast host', them: 'a guest talking about their culture',
    tasks: [
      { ex: 'كُنَّا نَحْتَفِلُ بِالمَوْلِدِ النَّبَوِيِّ فِي مِصْرَ بِحَلْوَى خَاصَّةٍ.', task: 'Ask about now (tense switch).', plan: 'سُؤَالٌ ← وَكَيْفَ تَحْتَفِلُونَ الآنَ؟', model: 'وَهَلْ مَا زِلْتُمْ تَحْتَفِلُونَ بِهِ الآنَ؟', modelEn: 'And do you still celebrate it now?' },
      { ex: 'نَعَمْ، وَلٰكِنْ لَيْسَ كُلُّ العَائِلَاتِ.', task: 'Reflect the hedge.', plan: 'التَّحَفُّظُ ← إِذَنْ فِي بَعْضِ العَائِلَاتِ فَقَطْ؟', model: 'إِذَنْ هِيَ عَادَةٌ فِي بَعْضِ العَائِلَاتِ، وَلَيْسَتْ فِي كُلِّهَا؟', modelEn: 'So it’s a custom in some families, not all of them?' },
      { ex: 'صَحِيحٌ. وَقَالَتْ أُمِّي إِنَّهَا سَتُعَلِّمُنِي الوَصْفَةَ.', task: 'Check who and when.', plan: '', model: 'جَمِيلٌ! إِذَنْ أُمُّكَ هِيَ الَّتِي سَتُعَلِّمُكَ — فِي المُسْتَقْبَلِ.', modelEn: 'Lovely! So your mother is the one who will teach you — in the future.' },
      { unexpected: true, ex: 'وَأَنْتَ، كَيْفَ تَحْتَفِلُ عَائِلَتُكَ؟', task: 'Answer with a hedge.', plan: '', model: 'غَالِبًا نَجْتَمِعُ عِنْدَ جَدَّتِي، وَلٰكِنْ لَيْسَ كُلَّ سَنَةٍ.', modelEn: 'We usually gather at my grandmother’s, but not every year.' },
    ],
    girl: 'guest to a female host: وَأَنْتِ · عَائِلَتُكِ',
    notes: 'The host mirrors the tense and the hedge back to check understanding.',
  },
  talk: {
    title: 'One minute: tenses and hedges', ar: 'أَزْمِنَةٌ وَتَحَفُّظَاتٌ',
    text: 'Talk for one minute about a celebration in your culture: how it used to be, how it is now, what will happen next time — with two hedges. Your partner writes the tense of each verb and circles the hedges.',
    head: 'Speak for one minute — your partner tracks tense and hedges',
    routes: {
      core: 'One past, one present and one future sentence.',
      develop: 'Add كُنَّا + present and one hedge.',
      stretch: 'Add a reported line (قَالَتْ / قَالَ إِنَّ …) and two hedges.',
    },
  },
  builder: [
    { en: 'We used to celebrate in the village.', cols: [['كُنَّا', 'كُنْتُمْ'], ['نَحْتَفِلُ', 'احْتَفَلْنَا'], ['فِي القَرْيَةِ.', 'فِي القَرْيَةُ.']], key: [0, 0, 0], why: 'Used to = كُنَّا + present.' },
    { en: 'In some families, gifts are exchanged.', cols: [['فِي بَعْضِ العَائِلَاتِ', 'فِي كُلِّ العَالَمِ'], ['تُتَبَادَلُ', 'يَتَبَادَلُ'], ['الهَدَايَا.', 'بِالهَدَايَا.']], key: [0, 0, 0], why: 'A hedge narrows the claim; passive + non-human plural.' },
    { en: 'My sister said that she will decorate the house.', cols: [['قَالَتْ أُخْتِي', 'قَالَ أُخْتِي'], ['إِنَّهَا', 'أَنَّهُ'], ['سَتُزَيِّنُ البَيْتَ.', 'زَيَّنَتِ البَيْتَ.']], key: [0, 0, 0], why: 'She → قَالَتْ … إِنَّهَا; future → sa-.' },
  ],
  errors: [
    { wrong: '«كُنَّا نَحْتَفِلُ فِي القَرْيَةِ» ← يَحْتَفِلُونَ فِي القَرْيَةِ الآنَ.', hint: 'كُنَّا + present = ?', right: 'كَانُوا يَحْتَفِلُونَ فِي القَرْيَةِ فِي المَاضِي.', why: 'كَانَ + present = past habit, not now.' },
    { wrong: '«فِي بَعْضِ العَائِلَاتِ …» ← كُلُّ العَائِلَاتِ تَفْعَلُ ذٰلِكَ.', hint: 'Listen to the hedge.', right: 'بَعْضُ العَائِلَاتِ فَقَطْ تَفْعَلُ ذٰلِكَ.', why: 'The hedge narrows the claim.' },
    { wrong: '«قَالَتْ أُخْتِي … وَقَالَ أَبِي إِنَّهُ سَيَطْبُخُ» ← الأُخْتُ سَتَطْبُخُ.', hint: 'Who said what?', right: 'الأَبُ سَيَطْبُخُ.', why: 'Match each reported line to its speaker.' },
  ],
  task: {
    title: 'A dialogue with traps', ar: 'حِوَارٌ فِيهِ فِخَاخٌ',
    text: 'Write a short dialogue (about 60–80 words) between two people about a celebration, for a listening test. Include: • at least three tenses, including كُنَّا / كَانَ + present • two hedges (فِي بَعْضِ … / غَالِبًا / لَيْسَ دَائِمًا / عَلَى حَدِّ عِلْمِي) • one reported line (قَالَ / قَالَتْ إِنَّ …). Then write three questions and read it with your partner.',
    phrases: [['كُنَّا نَحْتَفِلُ … · نَحْتَفِلُ الآنَ … · سَنَحْتَفِلُ …', 'we used to … · we celebrate now … · we will …'], ['فِي بَعْضِ العَائِلَاتِ … · لَيْسَ دَائِمًا', 'in some families … · not always'], ['عَلَى حَدِّ عِلْمِي …', 'as far as I know …'], ['قَالَ / قَالَتْ إِنَّ …', 'he / she said that …']],
    coreFrames: [
      { ar: '— كَيْفَ كُنْتُمْ تَحْتَفِلُونَ بِ______ ؟', en: '— How did you use to celebrate …?' },
      { ar: '— كُنَّا ______ ، وَالآنَ ______ .', en: '— We used to …, and now …' },
      { ar: '— وَهَلْ كُلُّ العَائِلَاتِ ______ ؟', en: '— And do all families …?' },
      { ar: '— لَا، فِي بَعْضِ العَائِلَاتِ ______ .', en: '— No, in some families …' },
    ],
    developFrames: [
      { ar: '— قَالَتْ / قَالَ ______ إِنَّ ______ .', en: '— … said that …' },
      { ar: 'أَسْئِلَةٌ: ١) كَيْفَ كَانُوا …؟ ٢) هَلْ كُلُّ …؟ ٣) مَنْ قَالَ …؟', en: 'Questions: 1) How did they use to …? 2) Do all …? 3) Who said …?' },
    ],
    bank: ['المُعْتَقَدَاتُ · القِيَمُ', 'التَّقَالِيدُ · المُنَاسَبَةُ', 'الاِنْتِمَاءُ · الجَالِيَةُ', 'كُنَّا نَحْتَفِلُ', 'سَنَحْتَفِلُ', 'فِي بَعْضِ العَائِلَاتِ', 'عَلَى حَدِّ عِلْمِي', 'قَالَتْ إِنَّ'],
    model: {
      text: `— كَيْفَ كُنْتُمْ تَحْتَفِلُونَ بِالعِيدِ فِي الأُرْدُنِّ؟
— كُنَّا نَزُورُ كُلَّ الأَقَارِبِ فِي يَوْمٍ وَاحِدٍ، أَمَّا الآنَ فَنَحْتَفِلُ فِي لَنْدَنَ مَعَ الجِيرَانِ.
— وَهَلْ تُقَدِّمُ كُلُّ العَائِلَاتِ المَعْمُولَ؟
— لَا، فِي بَعْضِ العَائِلَاتِ فَقَطْ؛ عَلَى حَدِّ عِلْمِي هُوَ مَشْهُورٌ فِي الشَّامِ أَكْثَرَ.
— وَالعِيدَ القَادِمَ؟
— قَالَتْ أُمِّي إِنَّنَا سَنُسَافِرُ إِلَى عَمَّانَ.
أَسْئِلَةٌ: ١) أَيْنَ يَحْتَفِلُونَ الآنَ؟ ٢) هَلْ تُقَدِّمُ كُلُّ العَائِلَاتِ المَعْمُولَ؟ ٣) مَنْ قَالَ إِنَّهُمْ سَيُسَافِرُونَ؟`,
      en: '“— How did you use to celebrate Eid in Jordan? — We used to visit all our relatives in one day; now we celebrate in London with the neighbours. — Do all families serve maamoul? — No, only some families; as far as I know it is more popular in the Levant. — And next Eid? — My mum said we will travel to Amman. Questions: 1) Where do they celebrate now? 2) Do all families serve maamoul? 3) Who said they will travel?”',
      find: ['كُنَّا نَزُورُ', 'فِي بَعْضِ العَائِلَاتِ', 'عَلَى حَدِّ عِلْمِي', 'قَالَتْ أُمِّي إِنَّنَا'],
    },
  },
  checkCore: 'catch the tense of each celebration (used to · now · next)?',
  checkDevelop: 'notice hedges and who said what?',
});
