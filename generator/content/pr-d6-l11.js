'use strict';
/* Practice Room · D6-L11 · Consolidation — complete review and speaking preparation. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd6-l11',
  arShort: 'الاسْتِعْدَادُ لِلْمُحَادَثَةِ',
  grammar: 'a fluent topic conversation under pressure: mirror the tense of the question (ḥaḍarta? → ḥaḍartu …); say verb + preposition as one unit (naḥtafilu bi- · antamī ilā · aʿtazzu bi-); add a reason (li-anna …); qualify as you speak (fī baʿḍi al-buldān · ʿalā ḥaddi ʿilmī); buy time and repair (daʿnī ufakkiru · ʿafwan, aqṣidu)',
  focus: 'Students run their own final preparation for the D6 speaking: say the fluency and qualifying phrases, act a full topic conversation, answer examiner cards that switch tense, do a role-play card as examiner and candidate, give a one-minute answer under pressure, then build, fix and write the script of their best topic-conversation answers with a self-assessment.',
  words1: 'Review and self-assessment', words2: 'Fluency and qualifying',
  dialogue: {
    title: 'A full topic conversation', ar: 'مُحَادَثَةٌ مَوْضُوعِيَّةٌ كَامِلَةٌ',
    lines: [
      ['A', 'هَلْ حَضَرْتَ احْتِفَالًا ثَقَافِيًّا مُؤَخَّرًا؟', 'Have you attended a cultural celebration recently?'],
      ['B', 'نَعَمْ، حَضَرْتُ عُرْسَ ابْنِ عَمِّي، وَاحْتَفَلْنَا بِالمُوسِيقَى وَالدَّبْكَةِ.', 'Yes, I attended my cousin’s wedding, and we celebrated with music and dabke.'],
      ['A', 'هَلْ هٰذِهِ عَادَةٌ عِنْدَ كُلِّ العَرَبِ؟', 'Is that a custom for all Arabs?'],
      ['B', 'لَا، عَلَى حَدِّ عِلْمِي الدَّبْكَةُ مَشْهُورَةٌ فِي بِلَادِ الشَّامِ خُصُوصًا، وَفِي بَعْضِ البُلْدَانِ الأُخْرَى.', 'No — as far as I know dabke is popular in the Levant especially, and in some other countries.'],
      ['A', 'وَمَا الَّذِي تَعْتَزُّ بِهِ فِي ثَقَافَتِكَ؟', 'And what are you proud of in your culture?'],
      ['B', 'دَعْنِي أُفَكِّرُ… أَعْتَزُّ بِالكَرَمِ، لِأَنَّ بَيْتَنَا مَفْتُوحٌ دَائِمًا لِلضُّيُوفِ.', 'Let me think… I am proud of generosity, because our home is always open to guests.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: hold YOUR conversation — mirror every tense and add one hedge.',
  },
  qTitle: 'Examiner cards — mirror the tense, add a reason, qualify',
  questions: [
    { q: 'هَلْ زُرْتَ بَلَدًا عَرَبِيًّا؟ مَاذَا رَأَيْتَ؟', en: 'Have you visited an Arab country? What did you see?', start: 'نَعَمْ، زُرْتُ … وَرَأَيْتُ …', more: '… لِأَنَّ …' },
    { q: 'كَيْفَ تَحْتَفِلُ عَائِلَتُكَ بِالمُنَاسَبَاتِ؟', en: 'How does your family celebrate occasions?', start: 'نَحْتَفِلُ بِ… عَادَةً …', more: '… فِي بَعْضِ السَّنَوَاتِ …' },
    { q: 'إِلَى أَيِّ ثَقَافَةٍ تَنْتَمِي؟', en: 'Which culture do you belong to?', start: 'أَنْتَمِي إِلَى …', more: '… وَأَعْتَزُّ بِ…' },
    { q: 'هَلِ العَرَبِيَّةُ مُهِمَّةٌ لَكَ؟ لِمَاذَا؟', en: 'Is Arabic important to you? Why?', start: 'نَعَمْ، لِأَنَّهَا …', more: '… عَلَى سَبِيلِ المِثَالِ …' },
    { q: 'كَيْفَ سَتَحْتَفِظُ بِثَقَافَتِكَ فِي المُسْتَقْبَلِ؟', en: 'How will you keep your culture in future?', start: 'سَأَحْتَفِظُ بِ… / سَأُعَلِّمُ …', more: '… لِكَيْ …' },
  ],
  card: {
    title: 'Role-play card — the D6 speaking test (practice)', ar: 'اخْتِبَارُ المُحَادَثَةِ', you: 'the candidate', them: 'the examiner',
    tasks: [
      { ex: 'صِفْ مُنَاسَبَةً ثَقَافِيَّةً حَضَرْتَهَا.', task: 'Past (mirror the tense).', plan: 'المَاضِي ← حَضَرْتُ … وَ…', model: 'حَضَرْتُ مِهْرَجَانَ الثَّقَافَةِ العَرَبِيَّةِ فِي لَنْدَنَ، وَشَاهَدْتُ عُرُوضًا لِلْخَطِّ.', modelEn: 'I attended the Arab culture festival in London, and watched calligraphy demonstrations.' },
      { ex: 'هَلْ يَحْتَفِلُ كُلُّ النَّاسِ بِهٰذِهِ المُنَاسَبَةِ؟', task: 'Qualify the claim.', plan: 'التَّحَفُّظُ ← لَا، فِي بَعْضِ …', model: 'لَيْسَ كُلُّهُمْ؛ يَحْضُرُهُ غَالِبًا أَفْرَادُ الجَالِيَةِ وَبَعْضُ الطُّلَّابِ.', modelEn: 'Not everyone — it’s mostly attended by the community and some students.' },
      { ex: 'مَا الَّذِي تَعْتَزُّ بِهِ فِي هُوِيَّتِكَ؟', task: 'Verb + preposition + reason.', plan: '', model: 'أَعْتَزُّ بِلُغَتِي، لِأَنَّهَا تَرْبِطُنِي بِتَارِيخٍ طَوِيلٍ وَبِعَائِلَتِي.', modelEn: 'I am proud of my language, because it connects me to a long history and to my family.' },
      { unexpected: true, ex: 'وَكَيْفَ سَتُحَافِظُ عَلَى ثَقَافَتِكَ بَعْدَ عَشْرِ سَنَوَاتٍ؟', task: 'Future + repair if needed.', plan: '', model: 'دَعْنِي أُفَكِّرُ… سَأَتَكَلَّمُ العَرَبِيَّةَ مَعَ أَطْفَالِي، وَسَنَحْتَفِلُ بِكُلِّ الأَعْيَادِ مَعًا.', modelEn: 'Let me think… I will speak Arabic with my children, and we will celebrate all the festivals together.' },
    ],
    girl: 'examiner to a girl: حَضَرْتِهَا · تَعْتَزِّينَ · هُوِيَّتِكِ · سَتُحَافِظِينَ · ثَقَافَتِكِ',
    notes: 'Mirror the tense · verb + preposition as one unit · reason · hedge · one repair allowed.',
  },
  talk: {
    title: 'One minute under pressure', ar: 'دَقِيقَةٌ تَحْتَ الضَّغْطِ',
    text: 'The Leader asks any card question with no warning. Answer for one minute: mirror the tense, give a reason and an example, and qualify one claim. The Coach completes a self-assessment strip: tense · preposition · reason · hedge · fluency.',
    routes: {
      core: 'Right tense + one reason.',
      develop: 'Add a verb + preposition and an example.',
      stretch: 'Add a hedge, a second tense and a smooth repair.',
    },
  },
  builder: [
    { en: 'As far as I know, this custom is popular in the Gulf.', cols: [['عَلَى حَدِّ عِلْمِي،', 'عَلَى حَدُّ عِلْمِي،'], ['هٰذِهِ العَادَةُ', 'هٰذَا العَادَةُ'], ['مَشْهُورَةٌ فِي الخَلِيجِ.', 'مَشْهُورٌ فِي الخَلِيجِ.']], key: [0, 0, 0], why: 'عَادَةٌ (f.) → هٰذِهِ + مَشْهُورَةٌ.' },
    { en: 'Did you attend? — Yes, I attended.', cols: [['هَلْ حَضَرْتَ؟', 'هَلْ تَحْضُرُ؟'], ['— نَعَمْ،', '— لَا،'], ['حَضَرْتُ.', 'أَحْضُرُ.']], key: [0, 0, 0], why: 'Mirror the tense: حَضَرْتَ → حَضَرْتُ.' },
    { en: 'We celebrate Eid with our neighbours.', cols: [['نَحْتَفِلُ', 'نَحْتَفِلَ'], ['بِالعِيدِ', 'العِيدَ'], ['مَعَ جِيرَانِنَا.', 'مَعَ جِيرَانُنَا.']], key: [0, 0, 0], why: 'نَحْتَفِلُ بِ… as one unit.' },
  ],
  errors: [
    { wrong: 'هَلْ زُرْتَ مِصْرَ؟ — نَعَمْ، أَزُورُ مِصْرَ.', hint: 'Mirror the tense.', right: 'نَعَمْ، زُرْتُ مِصْرَ.', why: 'Past question → past answer.' },
    { wrong: 'أَعْتَزُّ لُغَتِي.', hint: 'Verb + preposition.', right: 'أَعْتَزُّ بِلُغَتِي.', why: 'أَعْتَزُّ بِ…' },
    { wrong: 'كُلُّ العَرَبِ يَرْقُصُونَ الدَّبْكَةَ.', hint: 'Qualify!', right: 'فِي بَعْضِ البُلْدَانِ يَرْقُصُ النَّاسُ الدَّبْكَةَ فِي الأَعْرَاسِ.', why: 'Hedge the claim.' },
  ],
  task: {
    title: 'My best conversation — script and self-assessment', ar: 'أَفْضَلُ مُحَادَثَةٍ',
    text: 'Write the script (about 60–85 words) of your answers to three examiner questions from today (one past, one present, one future). Each answer must mirror the tense, include a verb + preposition, and give a reason; include at least one hedge. Then add a one-line self-assessment: one strength and one target.',
    range: [55, 100],
    phrases: [['حَضَرْتُ … · زُرْتُ … · احْتَفَلْنَا بِ…', 'I attended … · I visited … · we celebrated …'], ['نَحْتَفِلُ بِ… · أَنْتَمِي إِلَى … · أَعْتَزُّ بِ…', 'we celebrate … · I belong to … · I am proud of …'], ['عَلَى حَدِّ عِلْمِي … · فِي بَعْضِ البُلْدَانِ …', 'as far as I know … · in some countries …'], ['نُقْطَةُ قُوَّتِي … · هَدَفِي …', 'my strength … · my target …']],
    coreFrames: [
      { ar: 'س١: ______ ؟ ج: ______ ، لِأَنَّ ______ .', en: 'Q1: …? A: …, because …' },
      { ar: 'س٢: ______ ؟ ج: نَحْتَفِلُ بِ______ ، وَ ______ .', en: 'Q2: …? A: We celebrate …, and …' },
      { ar: 'س٣: ______ ؟ ج: سَوْفَ ______ .', en: 'Q3: …? A: I will …' },
      { ar: 'تَقْيِيمٌ ذَاتِيٌّ: نُقْطَةُ قُوَّتِي ______ ، وَهَدَفِي ______ .', en: 'Self-assessment: my strength is …, and my target …' },
    ],
    developFrames: [
      { ar: 'عَلَى حَدِّ عِلْمِي ______ ، وَلٰكِنْ لَيْسَ دَائِمًا.', en: 'As far as I know …, but not always.' },
      { ar: 'دَعْنِي أُفَكِّرُ… ______ .', en: 'Let me think… …' },
    ],
    bank: ['مُرَاجَعَةٌ نِهَائِيَّةٌ', 'تَقْيِيمٌ ذَاتِيٌّ', 'الطَّلَاقَةُ', 'دَعْنِي أُفَكِّرُ', 'عَفْوًا، أَقْصِدُ', 'عَلَى سَبِيلِ المِثَالِ', 'فِي بَعْضِ البُلْدَانِ', 'عَلَى حَدِّ عِلْمِي'],
    model: {
      text: `س١: هَلْ زُرْتَ بَلَدًا عَرَبِيًّا؟ ج: نَعَمْ، زُرْتُ المَغْرِبَ العَامَ المَاضِيَ، وَاسْتَمْتَعْتُ بِالأَسْوَاقِ، لِأَنَّهَا مَلِيئَةٌ بِالأَلْوَانِ.
س٢: كَيْفَ تَحْتَفِلُونَ بِالعِيدِ؟ ج: نَحْتَفِلُ بِالعِيدِ مَعَ جِيرَانِنَا، وَعَلَى حَدِّ عِلْمِي تَفْعَلُ ذٰلِكَ عَائِلَاتٌ كَثِيرَةٌ هُنَا، وَلٰكِنْ لَيْسَ كُلُّهَا.
س٣: كَيْفَ سَتُحَافِظُ عَلَى ثَقَافَتِكَ؟ ج: سَأَتَكَلَّمُ العَرَبِيَّةَ مَعَ أَطْفَالِي، لِأَنَّنِي أَعْتَزُّ بِلُغَتِي.
تَقْيِيمٌ ذَاتِيٌّ: نُقْطَةُ قُوَّتِي الأَزْمِنَةُ، وَهَدَفِي أَنْ أَتَكَلَّمَ بِطَلَاقَةٍ أَكْثَرَ.`,
      en: '“Q1: Have you visited an Arab country? A: Yes, I visited Morocco last year, and enjoyed the markets, because they are full of colour. Q2: How do you celebrate Eid? A: We celebrate Eid with our neighbours, and as far as I know many families here do that, but not all. Q3: How will you keep your culture? A: I will speak Arabic with my children, because I am proud of my language. Self-assessment: my strength is tenses, and my target is to speak more fluently.”',
      find: ['زُرْتُ المَغْرِبَ', 'نَحْتَفِلُ بِالعِيدِ', 'عَلَى حَدِّ عِلْمِي', 'أَعْتَزُّ بِلُغَتِي'],
    },
  },
  checkCore: 'mirror the tense of every question and give a reason?',
  checkDevelop: 'use verb + preposition units and qualify at least one claim?',
});
