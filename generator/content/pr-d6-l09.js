'use strict';
/* Practice Room · D6-L09 · Writing — my culture and identity (exam-style extended writing). Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd6-l09',
  arShort: 'ثَقَافَتِي وَهُوِيَّتِي',
  grammar: 'the full D6 range in one text: a past celebration (iḥtafalnā bi-l-ʿīd) · the present with a passive (tuzayyanu al-buyūt) · a supported opinion (lā yumkinu inkāru anna … · min wijhati naẓarī) · a future aspiration (aṭmaḥu ilā an …); identity verbs (aʿtazzu bi- · antamī ilā); self-marking against the bullets',
  focus: 'Students run their own writing workshop, with speaking first: say the identity toolkit, act a planning dialogue, plan each part aloud with cards, do a role-play card as an examiner self-marking a draft, rehearse the text aloud for one minute, then build, fix and write an extended exam-style text on culture and identity.',
  words1: 'Identity words', words2: 'Opinion and range',
  dialogue: {
    title: 'Planning “My culture and identity”', ar: 'نُخَطِّطُ: ثَقَافَتِي وَهُوِيَّتِي',
    lines: [
      ['A', 'بِمَاذَا سَتَبْدَأُ؟', 'How will you start?'],
      ['B', 'بِتَجْرِبَةٍ شَخْصِيَّةٍ: احْتَفَلْنَا بِالعِيدِ فِي بَيْتِ جَدِّي فِي تُونِسَ.', 'With a personal experience: we celebrated Eid at my grandfather’s house in Tunisia.'],
      ['A', 'وَالحَاضِرُ؟', 'And the present?'],
      ['B', 'هُنَا فِي بِرِيطَانْيَا تُزَيَّنُ بُيُوتُنَا، وَنَتَمَسَّكُ بِعَادَاتِنَا.', 'Here in Britain our homes are decorated, and we hold on to our customs.'],
      ['A', 'وَرَأْيُكَ؟', 'And your opinion?'],
      ['B', 'لَا يُمْكِنُ إِنْكَارُ أَنَّ اللُّغَةَ جُزْءٌ مِنَ الهُوِيَّةِ. وَفِي النِّهَايَةِ أَطْمَحُ إِلَى أَنْ أُعَلِّمَ أَطْفَالِي العَرَبِيَّةَ.', 'It cannot be denied that language is part of identity. And at the end: I aspire to teach my children Arabic.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: plan YOUR four parts aloud the same way.',
  },
  qTitle: 'Plan aloud — one card per part',
  questions: [
    { q: '¶١ احْكِ عَنِ احْتِفَالٍ مَاضٍ.', en: '¶1 Tell about a past celebration.', start: 'احْتَفَلْنَا بِ… فِي …', more: '… وَكَانَ …' },
    { q: '¶٢ كَيْفَ تَعِيشُ ثَقَافَتَكَ الآنَ؟', en: '¶2 How do you live your culture now?', start: 'الآنَ نَتَمَسَّكُ بِ… وَتُزَيَّنُ …', more: '…' },
    { q: '¶٣ مَا رَأْيُكَ فِي اللُّغَةِ وَالهُوِيَّةِ؟', en: '¶3 Your opinion on language and identity?', start: 'لَا يُمْكِنُ إِنْكَارُ أَنَّ …', more: '… مِنْ وِجْهَةِ نَظَرِي …' },
    { q: '¶٤ مَا طُمُوحُكَ لِلْمُسْتَقْبَلِ؟', en: '¶4 Your future aspiration?', start: 'أَطْمَحُ إِلَى أَنْ …', more: '… لِكَيْ …' },
    { q: 'بِمَاذَا تَعْتَزُّ؟', en: 'What are you proud of?', start: 'أَعْتَزُّ بِ…', more: '… لِأَنَّ …' },
  ],
  card: {
    title: 'Role-play card — self-marking with an examiner’s eye', ar: 'أُصَحِّحُ مِثْلَ المُمْتَحِنِ', you: 'the examiner', them: 'a writer with a draft',
    tasks: [
      { ex: 'هَلْ أَجَبْتُ عَنْ كُلِّ النِّقَاطِ؟', task: 'Check the bullets.', plan: 'النِّقَاطُ ← أَجَبْتَ عَنْ … وَلٰكِنْ …', model: 'أَجَبْتَ عَنِ المَاضِي وَالحَاضِرِ، وَلٰكِنْ لَيْسَ عِنْدَكَ رَأْيٌ مَدْعُومٌ.', modelEn: 'You answered past and present, but you have no supported opinion.' },
      { ex: 'كَيْفَ أَدْعَمُ رَأْيِي؟', task: 'Suggest support.', plan: 'الدَّعْمُ ← أَضِفْ سَبَبًا وَمِثَالًا …', model: 'أَضِفْ سَبَبًا وَمِثَالًا؛ مَثَلًا: «لِأَنَّنِي أَفْهَمُ جَدَّتِي بِالعَرَبِيَّةِ فَقَطْ».', modelEn: 'Add a reason and an example; e.g. “because I can only understand my grandmother in Arabic”.' },
      { ex: 'وَهَلْ عِنْدِي مَبْنِيٌّ لِلْمَجْهُولِ؟', task: 'Check range.', plan: '', model: 'لَا؛ أَضِفْ مَثَلًا: «تُحَضَّرُ الأَطْبَاقُ التَّقْلِيدِيَّةُ فِي العِيدِ».', modelEn: 'No — add, for example: “Traditional dishes are prepared at Eid.”' },
      { unexpected: true, ex: 'مَا الدَّرَجَةُ الَّتِي سَأَحْصُلُ عَلَيْهَا؟', task: 'Encourage + one target.', plan: '', model: 'نَصُّكَ جَيِّدٌ جِدًّا؛ إِذَا أَضَفْتَ الرَّأْيَ المَدْعُومَ، فَسَيُصْبِحُ مُمْتَازًا.', modelEn: 'Your text is very good; if you add the supported opinion, it will become excellent.' },
    ],
    girl: 'to a girl writer: أَجَبْتِ · عِنْدَكِ · أَضِيفِي · نَصُّكِ · أَضَفْتِ',
    notes: 'Self-marking = bullets · tense range · supported opinion · accuracy.',
  },
  talk: {
    title: 'One minute: say your identity text', ar: 'أَقُولُ نَصِّي',
    text: 'Speak your four parts aloud for one minute from your plan: past celebration → present → supported opinion → future aspiration.',
    routes: {
      core: 'One sentence per part, each in the right tense.',
      develop: 'Add a passive in the present and a reason for your opinion.',
      stretch: 'Add لَا يُمْكِنُ إِنْكَارُ أَنَّ … , أَعْتَزُّ بِ… and أَطْمَحُ إِلَى أَنْ …',
    },
  },
  builder: [
    { en: 'It cannot be denied that language is part of identity.', cols: [['لَا يُمْكِنُ إِنْكَارُ', 'لَا يُمْكِنُ إِنْكَارَ'], ['أَنَّ اللُّغَةَ', 'أَنَّ اللُّغَةُ'], ['جُزْءٌ مِنَ الهُوِيَّةِ.', 'جُزْءًا مِنَ الهُوِيَّةِ.']], key: [0, 0, 0], why: 'إِنْكَارُ is the subject (-u); أَنَّ + -a; predicate -un.' },
    { en: 'I take pride in my roots.', cols: [['أَعْتَزُّ', 'أَعْتَزَّ'], ['بِ', 'عَلَى'], ['جُذُورِي.', 'جُذُورُي.']], key: [0, 0, 0], why: 'أَعْتَزُّ بِ + genitive.' },
    { en: 'Traditional dishes are prepared at Eid.', cols: [['تُحَضَّرُ', 'تُحَضِّرُ'], ['الأَطْبَاقُ التَّقْلِيدِيَّةُ', 'الأَطْبَاقَ التَّقْلِيدِيَّةَ'], ['فِي العِيدِ.', 'فِي العِيدُ.']], key: [0, 0, 0], why: 'Passive + subject (-u).' },
  ],
  errors: [
    { wrong: 'أَعْتَزُّ ثَقَافَتِي.', hint: 'Missing preposition.', right: 'أَعْتَزُّ بِثَقَافَتِي.', why: 'أَعْتَزُّ بِ…' },
    { wrong: 'أَطْمَحُ أَنْ أُعَلِّمُ أَطْفَالِي.', hint: 'Two things to fix.', right: 'أَطْمَحُ إِلَى أَنْ أُعَلِّمَ أَطْفَالِي.', why: 'أَطْمَحُ إِلَى أَنْ + -a.' },
    { wrong: 'فِي رَأْيِي اللُّغَةُ مُهِمَّةٌ.', hint: 'An opinion alone isn’t enough — support it!', right: 'فِي رَأْيِي اللُّغَةُ مُهِمَّةٌ، لِأَنَّهَا تَرْبِطُنِي بِجَدَّتِي؛ مَثَلًا، نَتَحَدَّثُ كُلَّ يَوْمٍ.', why: 'A supported opinion = reason + example.' },
  ],
  task: {
    title: 'My culture and identity', ar: 'ثَقَافَتِي وَهُوِيَّتِي',
    text: 'Write an exam-style text (about 80–100 words) on «ثَقَافَتِي وَهُوِيَّتِي». ¶1 a past celebration. ¶2 how you live your culture now (with a passive). ¶3 a supported opinion (لَا يُمْكِنُ إِنْكَارُ أَنَّ … / مِنْ وِجْهَةِ نَظَرِي …). ¶4 a future aspiration (أَطْمَحُ إِلَى أَنْ …). Then self-mark it against the four parts.',
    range: [65, 110],
    phrases: [['احْتَفَلْنَا بِ… فِي …', 'we celebrated … in …'], ['نَتَمَسَّكُ بِ… · تُزَيَّنُ …', 'we hold on to … · … is decorated'], ['لَا يُمْكِنُ إِنْكَارُ أَنَّ …', 'it cannot be denied that …'], ['أَعْتَزُّ بِ… · أَطْمَحُ إِلَى أَنْ …', 'I am proud of … · I aspire to …']],
    coreFrames: [
      { ar: '¶١ فِي ______ احْتَفَلْنَا بِ______ فِي ______ .', en: '¶1 In … we celebrated … in …' },
      { ar: '¶٢ الآنَ نَتَمَسَّكُ بِ______ ، وَتُزَيَّنُ ______ .', en: '¶2 Now we hold on to …, and … is decorated.' },
      { ar: '¶٣ لَا يُمْكِنُ إِنْكَارُ أَنَّ ______ .', en: '¶3 It cannot be denied that …' },
      { ar: '¶٤ أَطْمَحُ إِلَى أَنْ ______ .', en: '¶4 I aspire to …' },
    ],
    developFrames: [
      { ar: 'مِنْ وِجْهَةِ نَظَرِي ______ ، لِأَنَّ ______ ؛ مَثَلًا ______ .', en: 'From my point of view …, because …; for example …' },
      { ar: 'أَعْتَزُّ بِ______ ، وَأَنْتَمِي إِلَى ______ .', en: 'I am proud of …, and I belong to …' },
    ],
    bank: ['الهُوِيَّةُ', 'تَجْرِبَةٌ شَخْصِيَّةٌ', 'أَعْتَزُّ بِ…', 'أَنْتَمِي إِلَى', 'لَا يُمْكِنُ إِنْكَارُ أَنَّ', 'مِنْ وِجْهَةِ نَظَرِي', 'تُزَيَّنُ · تُحَضَّرُ', 'أَطْمَحُ إِلَى أَنْ'],
    model: {
      text: `فِي الصَّيْفِ المَاضِي احْتَفَلْنَا بِعِيدِ الأَضْحَى فِي قَرْيَةِ جَدِّي فِي تُونِسَ، وَكَانَتِ العَائِلَةُ كُلُّهَا مَعًا لِأَوَّلِ مَرَّةٍ.
أَمَّا هُنَا فِي لِيدْزَ فَنَتَمَسَّكُ بِعَادَاتِنَا؛ تُزَيَّنُ بُيُوتُنَا فِي العِيدِ، وَتُحَضَّرُ الأَطْبَاقُ التُّونِسِيَّةُ.
لَا يُمْكِنُ إِنْكَارُ أَنَّ اللُّغَةَ جُزْءٌ مِنَ الهُوِيَّةِ. مِنْ وِجْهَةِ نَظَرِي، العَرَبِيَّةُ تَرْبِطُنِي بِجَدَّتِي؛ مَثَلًا، نَتَحَدَّثُ بِالفِيدْيُو كُلَّ أُسْبُوعٍ. لِذٰلِكَ أَعْتَزُّ بِهُوِيَّتِي المُزْدَوَجَةِ.
فِي المُسْتَقْبَلِ أَطْمَحُ إِلَى أَنْ أُعَلِّمَ أَطْفَالِي العَرَبِيَّةَ، لِكَيْ يَبْقَوْا قَرِيبِينَ مِنْ جُذُورِهِمْ.`,
      en: '“Last summer we celebrated Eid al-Adha in my grandfather’s village in Tunisia, and the whole family was together for the first time. Here in Leeds we hold on to our customs: our homes are decorated at Eid, and Tunisian dishes are prepared. It cannot be denied that language is part of identity. From my point of view, Arabic connects me to my grandmother — for example, we video-call every week. So I am proud of my dual identity. In the future I aspire to teach my children Arabic, so they stay close to their roots.”',
      find: ['احْتَفَلْنَا بِعِيدِ الأَضْحَى', 'تُزَيَّنُ بُيُوتُنَا', 'لَا يُمْكِنُ إِنْكَارُ أَنَّ', 'أَطْمَحُ إِلَى أَنْ'],
    },
  },
  checkCore: 'cover all four parts, each in the right tense?',
  checkDevelop: 'include a passive and a supported opinion with a reason and an example?',
});
