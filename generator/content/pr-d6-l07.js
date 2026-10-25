'use strict';
/* Practice Room · D6-L07 · Grammar consolidation — all tenses together in one text. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd6-l07',
  arShort: 'جَمِيعُ الأَزْمِنَةِ مَعًا',
  grammar: 'one text, the whole system: past (iḥtafalnā · kānat taḥtafilu) · present (naḥtafilu al-āna) · future (sa-naḥtafilu · lan natakhallā ʿan); plus ONE relative clause (alladhī / allatī), ONE comparative, ONE passive (tuzayyanu) and ONE formal connector (ʿilāwatan ʿalā dhālika) — each checked before joining it to the next',
  focus: 'Students run their own consolidation of the whole Development grammar system: say the grammar terms with examples, act a past–present–future dialogue about a family tradition, build sentences aloud with each structure, do a role-play card as a grammar coach, give a one-minute “all tenses” talk, then build, fix and write a checked paragraph with every structure.',
  words1: 'Grammar terms', words2: 'Structures in action',
  dialogue: {
    title: 'A tradition across three generations', ar: 'تَقْلِيدٌ عَبْرَ ثَلَاثَةِ أَجْيَالٍ',
    lines: [
      ['A', 'كَيْفَ كَانَتْ جَدَّتُكَ تَحْتَفِلُ بِالعِيدِ؟', 'How did your grandmother use to celebrate Eid?'],
      ['B', 'كَانَتْ تَحْتَفِلُ فِي قَرْيَتِهَا، وَكَانَ الجِيرَانُ يَطْبُخُونَ مَعًا.', 'She used to celebrate in her village, and the neighbours used to cook together.'],
      ['A', 'وَكَيْفَ تَحْتَفِلُونَ الآنَ؟', 'And how do you celebrate now?'],
      ['B', 'نَحْتَفِلُ الآنَ فِي المَدِينَةِ، وَتُزَيَّنُ الشُّقَّةُ الَّتِي نَسْكُنُ فِيهَا بِالأَنْوَارِ.', 'Now we celebrate in the city, and the flat we live in is decorated with lights.'],
      ['A', 'وَهَلِ الاحْتِفَالُ اليَوْمَ أَفْضَلُ؟', 'Is the celebration better today?'],
      ['B', 'هُوَ أَصْغَرُ مِنِ احْتِفَالِ القَرْيَةِ، وَلٰكِنَّنَا لَنْ نَتَخَلَّى عَنْهُ أَبَدًا، وَسَنُعَلِّمُهُ لِأَطْفَالِنَا.', 'It is smaller than the village celebration, but we will never give it up, and we will teach it to our children.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: tell YOUR family tradition across three generations.',
  },
  qTitle: 'Structure cards — one structure per answer',
  questions: [
    { q: 'كَيْفَ كَانَ أَجْدَادُكَ يَعِيشُونَ؟ (used to)', en: 'How did your grandparents use to live?', start: 'كَانُوا يَسْكُنُونَ … وَكَانُوا …', more: '…' },
    { q: 'مَا التَّقْلِيدُ الَّذِي تُحِبُّهُ؟ (relative clause)', en: 'Which tradition do you love?', start: 'التَّقْلِيدُ الَّذِي أُحِبُّهُ هُوَ …', more: '… لِأَنَّ …' },
    { q: 'مَاذَا يُحَضَّرُ فِي بَيْتِكُمْ فِي المُنَاسَبَاتِ؟ (passive)', en: 'What is prepared at home for occasions?', start: 'يُحَضَّرُ … / تُزَيَّنُ …', more: '…' },
    { q: 'هَلِ الاحْتِفَالُ اليَوْمَ أَكْبَرُ أَمْ أَصْغَرُ؟ (one comparative)', en: 'Is the celebration bigger or smaller today?', start: 'هُوَ أَصْغَرُ / أَكْبَرُ مِنْ …', more: '…' },
    { q: 'مَا الَّذِي لَنْ تَتَخَلَّى عَنْهُ؟ (negative future)', en: 'What will you never give up?', start: 'لَنْ أَتَخَلَّى عَنْ …', more: '… وَسَأُعَلِّمُهُ …' },
  ],
  card: {
    title: 'Role-play card — the grammar coach', ar: 'مُدَرِّبُ القَوَاعِدِ', you: 'the coach checking structures', them: 'a student building a paragraph',
    tasks: [
      { ex: 'كَتَبْتُ: «كَانَتْ أُمِّي تَطْبُخُ الكَعْكَ».', task: 'Name the structure.', plan: 'القَاعِدَةُ ← هٰذِهِ … (كَانَ + مُضَارِعٌ)', model: 'مُمْتَازٌ! هٰذِهِ عَادَةٌ فِي المَاضِي: كَانَتْ + فِعْلٌ مُضَارِعٌ.', modelEn: 'Excellent! That’s a past habit: kānat + present verb.' },
      { ex: 'وَالآنَ أُرِيدُ جُمْلَةً بِالمَبْنِيِّ لِلْمَجْهُولِ.', task: 'Give a passive example.', plan: 'المَجْهُولُ ← تُزَيَّنُ … / تُوَزَّعُ …', model: 'مِثَالٌ: «تُوَزَّعُ الهَدَايَا عَلَى الأَطْفَالِ».', modelEn: 'Example: “Gifts are handed out to the children.”' },
      { ex: 'كَتَبْتُ: «احْتِفَالُنَا أَكْثَرُ أَكْبَرُ».', task: 'Correct the comparative.', plan: '', model: 'خَطَأٌ: اسْتَخْدِمْ مُقَارَنَةً وَاحِدَةً — «احْتِفَالُنَا أَكْبَرُ».', modelEn: 'Error: use one comparative — “our celebration is bigger”.' },
      { unexpected: true, ex: 'كَيْفَ أَرْبِطُ الجُمَلَ؟', task: 'A formal connector.', plan: '', model: 'اسْتَخْدِمْ «عِلَاوَةً عَلَى ذٰلِكَ» مَرَّةً وَاحِدَةً، عِنْدَمَا تُضِيفُ فِكْرَةً جَدِيدَةً.', modelEn: 'Use “in addition” once, when you add a new idea.' },
    ],
    girl: 'coach to a girl: اسْتَخْدِمِي · تُضِيفِينَ',
    notes: 'Check each structure before joining it to the next: tense · relative · passive · comparative · connector.',
  },
  talk: {
    title: 'One minute: all tenses, one tradition', ar: 'تَقْلِيدٌ وَاحِدٌ بِكُلِّ الأَزْمِنَةِ',
    text: 'Talk for one minute about one tradition: how it used to be, how it is now, and how it will be. The Coach ticks: past · used to · present · future · لَنْ · relative · passive · comparative.',
    routes: {
      core: 'Past, present and future — one sentence each.',
      develop: 'Add كَانَ + present, a relative clause and a passive.',
      stretch: 'All eight structures, each correct.',
    },
  },
  builder: [
    { en: 'The family that lives next to us used to celebrate with us.', cols: [['العَائِلَةُ الَّتِي', 'العَائِلَةُ الَّذِي'], ['تَسْكُنُ بِجَانِبِنَا', 'يَسْكُنُ بِجَانِبِنَا'], ['كَانَتْ تَحْتَفِلُ مَعَنَا.', 'كَانَتْ احْتَفَلَتْ مَعَنَا.']], key: [0, 0, 0], why: 'f. → الَّتِي + تَسْكُنُ; used to = كَانَتْ + present.' },
    { en: 'Sweets are prepared the night before.', cols: [['تُحَضَّرُ', 'تُحَضِّرُ'], ['الحَلْوَى', 'لِلْحَلْوَى'], ['فِي اللَّيْلَةِ السَّابِقَةِ.', 'فِي اللَّيْلَةُ السَّابِقَةُ.']], key: [0, 0, 0], why: 'Passive -a- vowel: تُحَضَّرُ.' },
    { en: 'We will never give up our traditions.', cols: [['لَنْ', 'لَمْ'], ['نَتَخَلَّى', 'نَتَخَلَّ'], ['عَنْ تَقَالِيدِنَا أَبَدًا.', 'تَقَالِيدَنَا أَبَدًا.']], key: [0, 0, 0], why: 'Negative future لَنْ + subjunctive; يَتَخَلَّى عَنْ.' },
  ],
  errors: [
    { wrong: 'كَانَ جَدِّي يَعْمَلَ فِي المَزْرَعَةِ.', hint: 'After كَانَ, the verb …', right: 'كَانَ جَدِّي يَعْمَلُ فِي المَزْرَعَةِ.', why: 'كَانَ + present indicative (-u).' },
    { wrong: 'الاحْتِفَالُ اليَوْمَ أَكْثَرُ أَصْغَرُ.', hint: 'One comparative only.', right: 'الاحْتِفَالُ اليَوْمَ أَصْغَرُ.', why: 'Never أَكْثَرُ + أَفْعَلُ.' },
    { wrong: 'لَنْ نَتَخَلَّى تَقَالِيدَنَا.', hint: 'Missing preposition.', right: 'لَنْ نَتَخَلَّى عَنْ تَقَالِيدِنَا.', why: 'يَتَخَلَّى عَنْ + genitive.' },
  ],
  task: {
    title: 'One tradition, the whole grammar system', ar: 'تَقْلِيدٌ وَاحِدٌ وَالقَوَاعِدُ كُلُّهَا',
    text: 'Write a paragraph (about 60–80 words) about a family tradition across three generations. Include and underline: • a past habit (كَانَ / كَانَتْ + present) • a present-tense sentence • a future + a لَنْ sentence • ONE relative clause • ONE passive • ONE comparative • ONE formal connector. Check each one before you move on.',
    phrases: [['كَانَتْ جَدَّتِي تَ…', 'my grandmother used to …'], ['التَّقْلِيدُ الَّذِي … / العَادَةُ الَّتِي …', 'the tradition which … / the custom which …'], ['تُزَيَّنُ … · تُحَضَّرُ …', '… is decorated · … is prepared'], ['لَنْ نَتَخَلَّى عَنْ … · سَنُعَلِّمُ …', 'we will never give up … · we will teach …']],
    coreFrames: [
      { ar: 'كَانَتْ جَدَّتِي ______ فِي ______ .', en: 'My grandmother used to … in …' },
      { ar: 'أَمَّا الآنَ فَ______ .', en: 'As for now, …' },
      { ar: 'فِي المُسْتَقْبَلِ سَوْفَ ______ ، وَلَنْ ______ .', en: 'In the future we will …, and we won’t …' },
      { ar: 'التَّقْلِيدُ الَّذِي ______ هُوَ ______ .', en: 'The tradition which … is …' },
    ],
    developFrames: [
      { ar: 'تُزَيَّنُ / تُحَضَّرُ ______ ، وَ ______ أَكْبَرُ / أَصْغَرُ مِنْ ______ .', en: '… is decorated / prepared, and … is bigger / smaller than …' },
      { ar: 'عِلَاوَةً عَلَى ذٰلِكَ، ______ .', en: 'In addition, …' },
    ],
    bank: ['الزَّمَنُ المَاضِي', 'الزَّمَنُ الحَاضِرُ', 'الزَّمَنُ المُسْتَقْبَلُ', 'الاِسْمُ المَوْصُولُ', 'المَبْنِيُّ لِلْمَجْهُولِ', 'كَانَتْ تَحْتَفِلُ', 'لَنْ نَتَخَلَّى عَنْ', 'عِلَاوَةً عَلَى ذٰلِكَ'],
    model: {
      text: 'التَّقْلِيدُ الَّذِي أُحِبُّهُ أَكْثَرَ هُوَ إِفْطَارُ الجُمُعَةِ العَائِلِيُّ. كَانَتْ جَدَّتِي تُحَضِّرُهُ فِي بَيْتِهَا الكَبِيرِ فِي الصُّومَالِ، وَكَانَ الجِيرَانُ يُشَارِكُونَ فِيهِ. أَمَّا الآنَ فَنَجْتَمِعُ فِي شُقَّتِنَا فِي لَنْدَنَ، وَتُحَضَّرُ الأَطْبَاقُ قَبْلَ الصَّلَاةِ. إِفْطَارُنَا اليَوْمَ أَصْغَرُ مِنْ إِفْطَارِ جَدَّتِي، وَلٰكِنَّهُ دَافِئٌ جِدًّا. عِلَاوَةً عَلَى ذٰلِكَ، يَتَعَلَّمُ أَخِي الصَّغِيرُ وَصَفَاتِهَا. فِي المُسْتَقْبَلِ سَأُحَضِّرُهُ لِأَطْفَالِي، وَلَنْ نَتَخَلَّى عَنْهُ أَبَدًا.',
      en: '“The tradition I love most is the family Friday breakfast. My grandmother used to prepare it in her big house in Somalia, and the neighbours used to join in. Now we gather in our flat in London, and the dishes are prepared before the prayer. Our breakfast today is smaller than my grandmother’s, but it is very warm. In addition, my little brother is learning her recipes. In the future I will prepare it for my children, and we will never give it up.”',
      find: ['التَّقْلِيدُ الَّذِي', 'كَانَتْ جَدَّتِي تُحَضِّرُهُ', 'وَتُحَضَّرُ الأَطْبَاقُ', 'وَلَنْ نَتَخَلَّى عَنْهُ'],
    },
  },
  checkCore: 'use past, present and future accurately in one text?',
  checkDevelop: 'include one relative clause, one passive, one comparative and one connector — each correct?',
});
