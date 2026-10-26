'use strict';
/* Apply Workshop · D6-W06 · D6-L11 (D6 consolidation: speaking preparation) + D6-L12 (review and unit assessment). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd6-w06', pair: ['d6-l11', 'd6-l12'],
  title: 'Culture and Identity: The Final Conversation', arShort: 'الثَّقَافَةُ وَالهُوِيَّةُ',
  focus: 'Students use all of D6 — and the whole Development stage — for one real purpose: a fluent topic conversation under pressure (mirroring the tense of each question, verb + preposition as one unit, a reason and a hedge every time), then the exam-style article for an online youth magazine about family origins, celebrations, customs and identity.',
  sortTitle: 'Verb + preposition or hedge?', sortCats: ['Verb + preposition (one unit)', 'Hedges that narrow a claim'],
  sort: [
    { ar: 'نَحْتَفِلُ بِالعِيدِ', cat: 0 }, { ar: 'أَنْتَمِي إِلَى', cat: 0 }, { ar: 'أَعْتَزُّ بِلُغَتِي', cat: 0 }, { ar: 'نَتَمَسَّكُ بِعَادَاتِنَا', cat: 0 },
    { ar: 'فِي بَعْضِ البُلْدَانِ', cat: 1 }, { ar: 'لَيْسَ دَائِمًا', cat: 1 }, { ar: 'غَالِبًا', cat: 1 }, { ar: 'عَلَى حَدِّ عِلْمِي', cat: 1 },
  ],
  dialogue: {
    title: 'Mirror the tense', ar: 'اتْبَعْ زَمَنَ السُّؤَالِ',
    lines: [
      ['A', 'هَلْ زُرْتَ بَلَدًا عَرَبِيًّا؟', 'Have you visited an Arab country?'],
      ['B', 'نَعَمْ، زُرْتُ المَغْرِبَ الصَّيْفَ المَاضِيَ، وَرَأَيْتُ الأَسْوَاقَ القَدِيمَةَ.', 'Yes, I visited Morocco last summer, and I saw the old markets.'],
      ['A', 'كَيْفَ تَحْتَفِلُ عَائِلَتُكَ بِالمُنَاسَبَاتِ؟', 'How does your family celebrate occasions?'],
      ['B', 'نَحْتَفِلُ بِالعِيدِ مَعَ الأَقَارِبِ، وَفِي بَعْضِ العَائِلَاتِ يَتَبَادَلُونَ الهَدَايَا، وَلٰكِنْ لَيْسَ دَائِمًا.', 'We celebrate Eid with relatives, and in some families they exchange presents, but not always.'],
      ['A', 'وَمَاذَا سَتَفْعَلُ لِتَحْتَفِظَ بِلُغَتِكَ؟', 'And what will you do to keep your language?'],
      ['B', 'سَأَقْرَأُ كُلَّ يَوْمٍ، وَلَنْ أَتَخَلَّى عَنِ العَرَبِيَّةِ أَبَدًا، لِأَنِّي أَعْتَزُّ بِهَا.', 'I will read every day, and I will never give up Arabic, because I am proud of it.'],
    ],
    notes: 'Mirroring the tense (زُرْتَ؟ → زُرْتُ · تَحْتَفِلُ؟ → نَحْتَفِلُ · سَتَفْعَلُ؟ → سَأَقْرَأُ), verb + preposition as one unit, a reason and a hedge come from D6-L11; the content is the D6-L12 review.',
  },
  card: {
    title: 'Speaking card — the final topic conversation', ar: 'المُحَادَثَةُ النِّهَائِيَّةُ', you: 'the candidate', them: 'the examiner',
    mix: 'answering in the tense of the question with verb + preposition units, reasons and hedges (D6-L11) across all of D6 (D6-L12)',
    tasks: [
      { ex: 'مِنْ أَيْنَ عَائِلَتُكَ؟ وَمَا جِنْسِيَّاتُهُمْ؟', task: 'Origins with nationality agreement.', plan: 'مِنْ أَيْنَ ← أَبِي … وَأُمِّي …', model: 'أَبِي عِرَاقِيٌّ، وَأُمِّي فِلَسْطِينِيَّةٌ، وَأَنَا بِرِيطَانِيٌّ أَيْضًا.', modelEn: 'My father is Iraqi, my mother is Palestinian, and I am British too.' },
      { ex: 'كَيْفَ كَانَ العِيدُ فِي طُفُولَتِكَ؟ وَكَيْفَ هُوَ الآنَ؟', task: 'Used to + now.', plan: 'كَيْفَ ← كُنَّا نَحْتَفِلُ … أَمَّا الآنَ فَ…', model: 'كُنَّا نَحْتَفِلُ فِي بَغْدَادَ مَعَ جَدَّتِي، أَمَّا الآنَ فَنَحْتَفِلُ فِي لَنْدَنَ مَعَ الجَالِيَةِ.', modelEn: 'We used to celebrate in Baghdad with my grandmother, but now we celebrate in London with the community.' },
      { ex: 'مَا العَادَةُ الَّتِي تَتَمَسَّكُ بِهَا عَائِلَتُكَ؟', task: 'A custom described fairly, with a hedge.', plan: '______________', model: 'نَتَمَسَّكُ بِزِيَارَةِ الكِبَارِ فِي العِيدِ؛ هٰذِهِ عَادَةٌ مُهِمَّةٌ فِي كَثِيرٍ مِنَ العَائِلَاتِ، وَلَيْسَتْ فِي كُلِّهَا.', modelEn: 'We hold on to visiting the elderly at Eid; this is an important custom in many families, though not in all.' },
      { ex: 'إِلَى أَيِّ ثَقَافَةٍ تَنْتَمِي؟ لِمَاذَا؟', task: 'Belonging + a reason.', plan: '______________', model: 'أَنْتَمِي إِلَى الثَّقَافَتَيْنِ، لِأَنِّي وُلِدْتُ هُنَا، وَعَائِلَتِي تَحْتَفِظُ بِلُغَتِهَا وَعَادَاتِهَا.', modelEn: 'I belong to both cultures, because I was born here, and my family keeps its language and customs.' },
      { unexpected: true, ex: 'مَاذَا تَعْنِي لَكَ العَرَبِيَّةُ؟', task: 'A supported opinion + a future promise.', plan: '______________', model: 'أَعْتَزُّ بِهَا؛ لَا يُمْكِنُ إِنْكَارُ أَنَّهَا جُزْءٌ مِنْ هُوِيَّتِي، وَلَنْ أَتَخَلَّى عَنْهَا.', modelEn: 'I am proud of it; it cannot be denied that it is part of my identity, and I will not give it up.' },
    ],
    girl: 'مِنْ أَيْنَ عَائِلَتُكِ؟ · إِلَى أَيِّ ثَقَافَةٍ تَنْتَمِينَ؟ · مَاذَا تَعْنِي لَكِ العَرَبِيَّةُ؟',
  },
  talk: {
    title: 'My culture, my identity — no notes', ar: 'ثَقَافَتِي وَهُوِيَّتِي بِلَا أَوْرَاقٍ',
    text: 'Speak for one minute without notes: where your family is from (nationalities), how a celebration used to be and how it is now, a custom you hold on to (described fairly, with a hedge), what Arabic and your culture mean to you, and one future promise.',
    routes: {
      core: 'أَبِي … وَأُمِّي … · نَحْتَفِلُ بِ… · أَعْتَزُّ بِ…',
      develop: 'Add كُنَّا نَحْتَفِلُ … أَمَّا الآنَ فَ… and a hedge.',
      stretch: 'Add أَنْتَمِي إِلَى … · لَا يُمْكِنُ إِنْكَارُ أَنَّ … · لَنْ أَتَخَلَّى عَنْ …',
    },
  },
  task: {
    title: 'Exam-style article: culture and identity', ar: 'الثَّقَافَةُ وَالهُوِيَّةُ',
    text: 'Write an article (about 60–85 words) for an online youth magazine. Answer ALL four bullets: • where your family is from (nationalities) • a celebration — how it used to be and how it is now • a custom you hold on to, described fairly • what Arabic and your culture mean to you, and one future promise. Use at least two verb + preposition units and two hedges.',
    range: [50, 105],
    phrases: [['أَبِي مِصْرِيٌّ وَأُمِّي سُورِيَّةٌ', 'my father is Egyptian and my mother Syrian'], ['كُنَّا نَحْتَفِلُ … أَمَّا الآنَ فَ…', 'we used to celebrate … but now …'], ['نَتَمَسَّكُ بِ… · فِي بَعْضِ العَائِلَاتِ …', 'we hold on to … · in some families …'], ['أَعْتَزُّ بِ… · لَنْ أَتَخَلَّى عَنْ …', 'I am proud of … · I will not give up …']],
    coreFrames: [
      { ar: 'أَبِي ______ ، وَأُمِّي ______ .', en: '• My father is …, and my mother is …' },
      { ar: 'كُنَّا نَحْتَفِلُ بِ ______ فِي ______ .', en: '• We used to celebrate … in …' },
      { ar: 'أَمَّا الآنَ فَ ______ .', en: '• But now …' },
      { ar: 'نَتَمَسَّكُ بِ ______ .', en: '• We hold on to …' },
      { ar: 'أَعْتَزُّ بِ ______ ، وَلَنْ أَتَخَلَّى عَنْ ______ .', en: '• I am proud of …, and I will not give up …' },
    ],
    developFrames: [
      { ar: 'فِي بَعْضِ العَائِلَاتِ ______ ، وَلٰكِنْ لَيْسَ دَائِمًا.', en: 'In some families …, but not always.' },
      { ar: 'لَا يُمْكِنُ إِنْكَارُ أَنَّ ______ .', en: 'It cannot be denied that …' },
    ],
    bank: ['مِصْرِيٌّ · سُورِيَّةٌ', 'كُنَّا نَحْتَفِلُ', 'أَمَّا الآنَ فَ…', 'نَتَمَسَّكُ بِ… · نَحْتَفِلُ بِ…', 'أَنْتَمِي إِلَى · أَعْتَزُّ بِ…', 'فِي بَعْضِ العَائِلَاتِ', 'لَيْسَ دَائِمًا · غَالِبًا', 'لَنْ أَتَخَلَّى عَنْ'],
    model: {
      text: 'أَبِي عِرَاقِيٌّ، وَأُمِّي فِلَسْطِينِيَّةٌ، وَأَنَا وُلِدْتُ فِي لَنْدَنَ. فِي طُفُولَتِي كُنَّا نَحْتَفِلُ بِالعِيدِ فِي بَيْتِ جَدَّتِي، أَمَّا الآنَ فَنَحْتَفِلُ بِهِ فِي المَسْجِدِ مَعَ الجَالِيَةِ. نَتَمَسَّكُ بِزِيَارَةِ الكِبَارِ فِي العِيدِ؛ هٰذِهِ عَادَةٌ مُهِمَّةٌ فِي كَثِيرٍ مِنَ العَائِلَاتِ، وَلٰكِنْ لَيْسَ فِي كُلِّهَا. أَنْتَمِي إِلَى ثَقَافَتَيْنِ، وَأَعْتَزُّ بِاللُّغَةِ العَرَبِيَّةِ؛ لَا يُمْكِنُ إِنْكَارُ أَنَّهَا جُزْءٌ مِنْ هُوِيَّتِي. لَنْ أَتَخَلَّى عَنْهَا أَبَدًا، وَسَأُعَلِّمُهَا لِأَوْلَادِي.',
      en: '“My father is Iraqi, my mother is Palestinian, and I was born in London. In my childhood we used to celebrate Eid at my grandmother’s house, but now we celebrate it at the mosque with the community. We hold on to visiting the elderly at Eid; this is an important custom in many families, but not in all of them. I belong to two cultures, and I am proud of the Arabic language; it cannot be denied that it is part of my identity. I will never give it up, and I will teach it to my children.”',
      find: ['كُنَّا نَحْتَفِلُ', 'أَمَّا الآنَ فَنَحْتَفِلُ', 'نَتَمَسَّكُ بِزِيَارَةِ', 'لَنْ أَتَخَلَّى عَنْهَا'],
    },
  },
});
