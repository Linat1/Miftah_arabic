'use strict';
/* Apply Workshop · D6-W05 · D6-L09 (writing: culture and identity) + D6-L10 (listening: culture, celebration and identity). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd6-w05', pair: ['d6-l09', 'd6-l10'],
  title: 'Identity Podcast, Then the Exam Text', arShort: 'بُودْكَاسْتُ الهُوِيَّةِ',
  focus: 'Students join listening at speed with exam writing: they listen to young people talking about celebrations and identity (the tense in the verb shape, the hedge that narrows a claim, who said it), then write a four-paragraph exam text «ثَقَافَتِي وَهُوِيَّتِي» with a past celebration, the present with a passive, a supported opinion and a future aspiration.',
  sortTitle: 'Listening clue or writing move?', sortCats: ['Writing moves · D6-L09', 'Listening clues · D6-L10'],
  sort: [
    { ar: 'لَا يُمْكِنُ إِنْكَارُ أَنَّ …', cat: 0 }, { ar: 'مِنْ وِجْهَةِ نَظَرِي', cat: 0 }, { ar: 'أَعْتَزُّ بِ…', cat: 0 }, { ar: 'أَطْمَحُ إِلَى أَنْ …', cat: 0 },
    { ar: 'كُنَّا نَحْتَفِلُ', cat: 1 }, { ar: 'فِي بَعْضِ العَائِلَاتِ', cat: 1 }, { ar: 'عَلَى حَدِّ عِلْمِي', cat: 1 }, { ar: 'قَالَتْ إِنَّ …', cat: 1 },
  ],
  dialogue: {
    title: 'Two voices on the podcast', ar: 'صَوْتَانِ فِي البُودْكَاسْتِ',
    lines: [
      ['A', 'كَيْفَ كُنْتُمْ تَحْتَفِلُونَ بِالعِيدِ فِي الطُّفُولَةِ؟', 'How did you use to celebrate Eid as children?'],
      ['B', 'كُنَّا نَحْتَفِلُ فِي بَيْتِ جَدِّي، أَمَّا الآنَ فَنَحْتَفِلُ فِي المَسْجِدِ مَعَ الجَالِيَةِ.', 'We used to celebrate at my grandfather’s house, but now we celebrate at the mosque with the community.'],
      ['A', 'وَهَلْ يَلْبَسُ الجَمِيعُ مَلَابِسَ تَقْلِيدِيَّةً؟', 'And does everyone wear traditional clothes?'],
      ['B', 'لَيْسَ دَائِمًا؛ فِي بَعْضِ العَائِلَاتِ فَقَطْ، عَلَى حَدِّ عِلْمِي.', 'Not always; only in some families, as far as I know.'],
      ['A', 'وَمَا مَعْنَى الهُوِيَّةِ لَكِ؟', 'And what does identity mean to you?'],
      ['B', 'أَعْتَزُّ بِلُغَتِي؛ لَا يُمْكِنُ إِنْكَارُ أَنَّ اللُّغَةَ جُزْءٌ مِنَ الهُوِيَّةِ. وَأَطْمَحُ إِلَى أَنْ أَزُورَ بَلَدَ أَجْدَادِي.', 'I am proud of my language; it cannot be denied that language is part of identity. And I aspire to visit my grandparents’ country.'],
    ],
    notes: 'Tense from the verb shape (كُنَّا نَحْتَفِلُ · نَحْتَفِلُ) and hedges (لَيْسَ دَائِمًا · فِي بَعْضِ العَائِلَاتِ · عَلَى حَدِّ عِلْمِي) come from D6-L10; a supported opinion (لَا يُمْكِنُ إِنْكَارُ أَنَّ …) and a future aspiration from D6-L09.',
  },
  card: {
    title: 'Listening card — the identity podcast', ar: 'بِطَاقَةُ الاسْتِمَاعِ', you: 'the listener', them: 'the podcast host',
    mix: 'catching tense, hedges and the speaker at speed (D6-L10), then turning what you hear into exam-text moves (D6-L09)',
    tasks: [
      { ex: '«احْتَفَلْنَا بِرَأْسِ السَّنَةِ الهِجْرِيَّةِ فِي المَسْجِدِ، وَسَنَحْتَفِلُ هٰذِهِ السَّنَةَ فِي البَيْتِ.» — أَيْنَ الاحْتِفَالُ القَادِمُ؟', task: 'The future detail.', plan: 'أَيْنَ ← سَنَحْتَفِلُ … فِي …', model: 'فِي البَيْتِ.', modelEn: 'At home.' },
      { ex: '«غَالِبًا مَا يَزُورُ النَّاسُ أَقَارِبَهُمْ فِي العِيدِ، وَلٰكِنْ لَيْسَ دَائِمًا.» — هَلْ يَزُورُونَ دَائِمًا؟', task: 'Catch the hedge.', plan: 'هَلْ ← لَا … الدَّلِيلُ: …', model: 'لَا؛ الدَّلِيلُ: «غَالِبًا» وَ«لَيْسَ دَائِمًا».', modelEn: 'No; the evidence: “often” and “not always”.' },
      { ex: '«قَالَتْ أُخْتِي إِنَّ الحِنَّاءَ تَقْلِيدٌ جَمِيلٌ، أَمَّا أَنَا فَلَا أُحِبُّهُ.» — مَنْ يُحِبُّ الحِنَّاءَ؟', task: 'Who said it?', plan: '______________', model: 'أُخْتُهُ تُحِبُّهُ، أَمَّا المُتَكَلِّمُ فَلَا.', modelEn: 'His sister likes it; the speaker does not.' },
      { ex: '«كُنَّا نَأْكُلُ المَنْسَفَ فِي العِيدِ.» — هَلْ مَا زَالُوا يَأْكُلُونَهُ؟', task: 'What the tense signals.', plan: '______________', model: 'لَا نَعْرِفُ؛ «كُنَّا نَأْكُلُ» عَادَةٌ فِي المَاضِي فَقَطْ.', modelEn: 'We don’t know; “we used to eat” is a past habit only.' },
      { unexpected: true, ex: 'وَأَنْتَ: بِمَاذَا تَعْتَزُّ؟ وَلِمَاذَا؟', task: 'A supported opinion.', plan: '______________', model: 'أَعْتَزُّ بِعَائِلَتِي وَلُغَتِي؛ لَا يُمْكِنُ إِنْكَارُ أَنَّهُمَا يَصْنَعَانِ هُوِيَّتِي.', modelEn: 'I am proud of my family and my language; it cannot be denied that they make my identity.' },
    ],
    foot: 'Partner A reads each clip twice. Answer, then name the clue: the verb shape, the hedge or the speaker. Task ! is your view. Then swap.',
    girl: 'وَأَنْتِ: بِمَاذَا تَعْتَزِّينَ؟',
  },
  talk: {
    title: 'My culture and identity — podcast clip', ar: 'ثَقَافَتِي وَهُوِيَّتِي',
    text: 'Record a one-minute clip in four parts, like the exam text: (1) a past celebration, (2) how you live your culture now (with a passive), (3) a supported opinion about language and identity, (4) a future aspiration. Use at least two hedges; your partner notes every tense and hedge they hear.',
    routes: {
      core: 'احْتَفَلْنَا بِ… · نَتَمَسَّكُ بِ… · أَطْمَحُ إِلَى أَنْ …',
      develop: 'Add كُنَّا + present, a passive (تُزَيَّنُ) and a hedge.',
      stretch: 'Add لَا يُمْكِنُ إِنْكَارُ أَنَّ … · مِنْ وِجْهَةِ نَظَرِي … and عَلَى حَدِّ عِلْمِي.',
    },
  },
  task: {
    title: 'Exam text: my culture and identity', ar: 'ثَقَافَتِي وَهُوِيَّتِي',
    text: 'Write an exam-style text (about 60–85 words) in four paragraphs. ¶1 a past celebration (past verbs, one كُنَّا + present). ¶2 how you live your culture now (with a passive). ¶3 a supported opinion on language and identity (لَا يُمْكِنُ إِنْكَارُ أَنَّ … / مِنْ وِجْهَةِ نَظَرِي …) with one hedge. ¶4 a future aspiration (أَطْمَحُ إِلَى أَنْ …).',
    range: [50, 105],
    phrases: [['احْتَفَلْنَا بِ… فِي …', 'we celebrated … in …'], ['نَتَمَسَّكُ بِ… · تُزَيَّنُ …', 'we hold on to … · … are decorated'], ['لَا يُمْكِنُ إِنْكَارُ أَنَّ …', 'it cannot be denied that …'], ['أَعْتَزُّ بِ… · أَطْمَحُ إِلَى أَنْ …', 'I am proud of … · I aspire to …']],
    coreFrames: [
      { ar: 'العَامَ المَاضِيَ احْتَفَلْنَا بِ ______ فِي ______ .', en: '¶1 Last year we celebrated … in …' },
      { ar: 'كُنَّا ______ .', en: '¶1 We used to …' },
      { ar: 'الآنَ نَتَمَسَّكُ بِ ______ ، وَتُزَيَّنُ ______ .', en: '¶2 Now we hold on to …, and … are decorated.' },
      { ar: 'لَا يُمْكِنُ إِنْكَارُ أَنَّ ______ .', en: '¶3 It cannot be denied that …' },
      { ar: 'أَطْمَحُ إِلَى أَنْ ______ .', en: '¶4 I aspire to …' },
    ],
    developFrames: [
      { ar: 'فِي بَعْضِ العَائِلَاتِ ______ ، وَلٰكِنْ لَيْسَ دَائِمًا.', en: 'In some families …, but not always.' },
      { ar: 'مِنْ وِجْهَةِ نَظَرِي، ______ .', en: 'From my point of view, …' },
    ],
    bank: ['احْتَفَلْنَا · حَضَرْتُ', 'كُنَّا نَحْتَفِلُ', 'نَتَمَسَّكُ بِ… · نَحْرِصُ عَلَى', 'تُزَيَّنُ · تُوَزَّعُ', 'لَا يُمْكِنُ إِنْكَارُ أَنَّ', 'مِنْ وِجْهَةِ نَظَرِي', 'عَلَى حَدِّ عِلْمِي', 'أَعْتَزُّ بِ… · أَطْمَحُ إِلَى أَنْ'],
    model: {
      text: `العَامَ المَاضِيَ احْتَفَلْنَا بِعِيدِ الأَضْحَى فِي بَيْتِ جَدِّي فِي بِرْمِنْغَهَام. كُنَّا نَأْكُلُ مَعًا، وَنَزُورُ الجِيرَانَ.
الآنَ نَتَمَسَّكُ بِعَادَاتِنَا؛ تُزَيَّنُ بُيُوتُنَا فِي العِيدِ، وَنَتَكَلَّمُ العَرَبِيَّةَ فِي البَيْتِ.
لَا يُمْكِنُ إِنْكَارُ أَنَّ اللُّغَةَ جُزْءٌ مِنَ الهُوِيَّةِ. مِنْ وِجْهَةِ نَظَرِي، تَرْبِطُنَا العَرَبِيَّةُ بِأَجْدَادِنَا، وَلٰكِنَّ الهُوِيَّةَ تَخْتَلِفُ مِنْ شَخْصٍ إِلَى آخَرَ.
أَعْتَزُّ بِثَقَافَتِي، وَأَطْمَحُ إِلَى أَنْ أَزُورَ اليَمَنَ يَوْمًا مَا.`,
      en: '“Last year we celebrated Eid al-Adha at my grandfather’s house in Birmingham. We used to eat together and visit the neighbours. / Now we hold on to our customs; our houses are decorated at Eid, and we speak Arabic at home. / It cannot be denied that language is part of identity. From my point of view, Arabic connects us to our ancestors, but identity differs from one person to another. / I am proud of my culture, and I aspire to visit Yemen one day.”',
      find: ['احْتَفَلْنَا بِعِيدِ الأَضْحَى', 'تُزَيَّنُ بُيُوتُنَا', 'لَا يُمْكِنُ إِنْكَارُ أَنَّ', 'أَطْمَحُ إِلَى أَنْ'],
    },
  },
});
