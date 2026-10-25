'use strict';
/* Guided Practice Rooms · TC-L02 · Landscapes, nature and animals. New tasks. Teacher-made. */
const XP = require('./xp-c-l02');

const base = { topic: 'C', n: 2, short: 'Landscapes, Nature and Animals', arShort: 'الطَّبِيعَةُ وَالحَيَوَانَاتُ', fileTitle: 'Landscapes_Nature_Animals', title: 'Landscapes, nature and animals', icon: 'FaMountainSun', grammar: 'broken plurals (jibāl, ghābāt, ṭuyūr) + non-human plural agreement (feminine singular); yūjadu / tūjadu; yaʿīshu fī; relative clause with alladhī / allatī; muhaddadun bi-l-inqirāḍ' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up on landscapes and animals, the answer ladder, two new role plays (booking a nature tour, a wildlife-park volunteer interview), a topic conversation with A-R-E-T, and a one-minute talk about a natural place they love.',
  words: XP.speak.words,
  words1: { title: 'Landscapes', ar: 'المَنَاظِرُ الطَّبِيعِيَّةُ' },
  words2: { title: 'Animals and describing nature', ar: 'الحَيَوَانَاتُ وَوَصْفُ الطَّبِيعَةِ' },
  ladder: {
    q: 'صِفْ مَكَانًا طَبِيعِيًّا جَمِيلًا زُرْتَهُ.', qEn: 'Describe a beautiful natural place you have visited.',
    rungs: [
      { ar: 'زُرْتُ جِبَالَ الأَطْلَسِ فِي المَغْرِبِ.', en: 'I visited the Atlas Mountains in Morocco.' },
      { ar: 'زُرْتُ جِبَالَ الأَطْلَسِ فِي المَغْرِبِ، وَهِيَ عَالِيَةٌ وَخَلَّابَةٌ.', en: '… which are high and stunning.' },
      { ar: '… تُوجَدُ فِيهَا وِدْيَانٌ خَضْرَاءُ وَأَنْهَارٌ صَغِيرَةٌ، وَرَأَيْنَا قُرُودًا بَرِّيَّةً بَيْنَ الأَشْجَارِ.', en: '… there are green valleys and small rivers, and we saw wild monkeys among the trees.' },
      { ar: '… فِي رَأْيِي هِيَ أَجْمَلُ مِنْ أَيِّ مَدِينَةٍ، وَأَتَمَنَّى أَنْ أَصْعَدَ إِلَى قِمَّتِهَا يَوْمًا مَا.', en: '… in my opinion it is more beautiful than any city, and I hope to climb to the top one day.' },
    ],
  },
  ladderQs: [
    { q: 'هَلْ تُفَضِّلُ البَحْرَ أَمِ الجِبَالَ؟', l1: 'أُفَضِّلُ …', l2: '… لِأَنَّ …', l3: '… مَثَلًا فِي الصَّيْفِ المَاضِي …' },
    { q: 'مَا حَيَوَانُكَ المُفَضَّلُ؟', l1: 'حَيَوَانِي المُفَضَّلُ …', l2: '… يَعِيشُ فِي …', l3: '… وَهُوَ مُهَدَّدٌ لِأَنَّ …' },
    { q: 'مَاذَا يُوجَدُ فِي الطَّبِيعَةِ حَوْلَ مَدِينَتِكَ؟', l1: 'يُوجَدُ … / تُوجَدُ …', l2: '… وَأَذْهَبُ إِلَى هُنَاكَ …', l3: '… وَلٰكِنْ …' },
    { q: 'هَلْ زُرْتَ صَحْرَاءَ؟', l1: 'نَعَمْ، زُرْتُ … / لَا، …', l2: '… كَانَتْ …', l3: '… وَلَوْ زُرْتُهَا لَـ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a travel agency in Muscat', title: 'Role play 1 — Booking a nature tour', ar: 'حَجْزُ رِحْلَةٍ إِلَى الطَّبِيعَةِ', you: 'a tourist', them: 'the travel agent',
      tasks: [
        { ex: 'أَهْلًا! أَيَّ رِحْلَةٍ تُرِيدُ؟', task: 'Say which landscape you want to see.', plan: 'أَيَّ ← أُرِيدُ أَنْ أَرَى …', model: 'أُرِيدُ أَنْ أَرَى الصَّحْرَاءَ وَالجِبَالَ.', modelEn: 'I want to see the desert and the mountains.' },
        { ex: 'كَمْ شَخْصًا مَعَكَ؟', task: 'Say how many people.', plan: 'كَمْ ← نَحْنُ … أَشْخَاصٍ', model: 'نَحْنُ أَرْبَعَةُ أَشْخَاصٍ: أَنَا وَوَالِدَايَ وَأُخْتِي.', modelEn: 'We are four people: me, my parents and my sister.' },
        { ex: 'مَاذَا تُحِبُّونَ أَنْ تَفْعَلُوا هُنَاكَ؟', task: 'Give two activities.', plan: 'مَاذَا ← نُحِبُّ أَنْ … وَأَنْ …', model: 'نُحِبُّ أَنْ نَمْشِيَ فِي الوَادِي وَأَنْ نَرَى الطُّيُورَ.', modelEn: 'We like to walk in the valley and see the birds.' },
        { ex: 'تُوجَدُ رِحْلَةٌ إِلَى الشَّاطِئِ أَيْضًا.', task: 'ASK about the turtles.', plan: 'اسْأَلْ ← هَلْ … السَّلَاحِفَ؟', model: 'هَلْ يُمْكِنُ أَنْ نَرَى السَّلَاحِفَ عَلَى الشَّاطِئِ؟', modelEn: 'Can we see the turtles on the beach?' },
        { unexpected: true, ex: 'لِمَاذَا تُحِبُّ الطَّبِيعَةَ؟', task: 'Answer the unexpected question with a reason.', plan: 'لِمَاذَا ← لِأَنَّهَا …', model: 'لِأَنَّهَا هَادِئَةٌ وَجَمِيلَةٌ، وَأَشْعُرُ فِيهَا بِالرَّاحَةِ.', modelEn: 'Because it is calm and beautiful, and I feel relaxed there.' },
      ],
      girl: 'تُرِيدِينَ · مَعَكِ · تُحِبِّينَ',
      notes: 'Language: urīdu an arā · kam + accusative (shakhṣan) · an + verb in -a twice · tūjadu (f. noun) · al-ṭuyūr, al-salāḥif: non-human plurals.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'an interview for a summer volunteer post', title: 'Role play 2 — Volunteering at a wildlife reserve', ar: 'مُتَطَوِّعٌ فِي مَحْمِيَّةٍ طَبِيعِيَّةٍ', you: 'a student volunteer', them: 'the reserve manager',
      tasks: [
        { ex: 'لِمَاذَا تُرِيدُ أَنْ تَتَطَوَّعَ فِي مَحْمِيَّتِنَا؟', task: 'Give two reasons.', model: 'لِأَنِّي أُحِبُّ الحَيَوَانَاتِ، وَلِأَنِّي أُرِيدُ أَنْ أَدْرُسَ عِلْمَ الأَحْيَاءِ فِي الجَامِعَةِ.', modelEn: 'Because I love animals, and because I want to study biology at university.' },
        { ex: 'هَلْ عِنْدَكَ خِبْرَةٌ مَعَ الحَيَوَانَاتِ؟', task: 'Describe a past experience.', model: 'نَعَمْ، فِي السَّنَةِ المَاضِيَةِ سَاعَدْتُ فِي مَرْكَزٍ لِلطُّيُورِ المَجْرُوحَةِ، وَكُنْتُ أُطْعِمُهَا كُلَّ صَبَاحٍ.', modelEn: 'Yes, last year I helped at a centre for injured birds, and I fed them every morning.' },
        { ex: 'أَيُّ حَيَوَانٍ يُعْجِبُكَ أَكْثَرَ هُنَا؟', task: 'Describe an animal (where it lives + why).', model: 'يُعْجِبُنِي المَهَا العَرَبِيُّ الَّذِي يَعِيشُ فِي الصَّحْرَاءِ، لِأَنَّهُ يَسْتَطِيعُ أَنْ يَعِيشَ بِدُونِ مَاءٍ أَيَّامًا.', modelEn: 'I like the Arabian oryx, which lives in the desert, because it can live without water for days.' },
        { ex: 'العَمَلُ يَبْدَأُ فِي السَّادِسَةِ صَبَاحًا.', task: 'React and ASK a question.', model: 'لَا مُشْكِلَةَ! هَلْ سَأَعْمَلُ مَعَ فَرِيقٍ أَمْ وَحْدِي؟', modelEn: 'No problem! Will I work with a team or alone?' },
        { unexpected: true, ex: 'لِمَاذَا أَصْبَحَتْ حَيَوَانَاتٌ كَثِيرَةٌ مُهَدَّدَةً؟', task: 'Answer the unexpected question (cause → result).', model: 'بِسَبَبِ قَطْعِ الغَابَاتِ وَالصَّيْدِ، فَقَدَتْ حَيَوَانَاتٌ كَثِيرَةٌ بُيُوتَهَا، لِذٰلِكَ يَجِبُ أَنْ نَحْمِيَ المَحْمِيَّاتِ مِثْلَ هٰذِهِ.', modelEn: 'Because of cutting forests and hunting, many animals lost their homes, so we must protect reserves like this one.' },
      ],
      girl: 'تُرِيدِينَ · تَتَطَوَّعِي · عِنْدَكِ · يُعْجِبُكِ',
      notes: 'Stretch language: li-annī … wa-li-annī · kuntu uṭʿimuhā (past habit) · alladhī yaʿīshu fī … · bi-sababi … li-dhālika · non-human plural + feminine singular (ḥayawānātun … faqadat).',
    },
  ],
  convAr: 'الطَّبِيعَةُ وَالحَيَوَانَاتُ',
  conv: [
    { route: 'Core', q: 'هَلْ عِنْدَكَ حَيَوَانٌ أَلِيفٌ؟', en: 'Do you have a pet?', push: 'صِفْهُ.' },
    { route: 'Core', q: 'هَلْ تُحِبُّ الشَّاطِئَ؟', en: 'Do you like the beach?', push: 'لِمَاذَا؟' },
    { route: 'Develop', q: 'صِفْ أَجْمَلَ مَنْظَرٍ طَبِيعِيٍّ رَأَيْتَهُ.', en: 'Describe the most beautiful view you have seen.', push: 'أَيْنَ وَمَتَى؟' },
    { route: 'Develop', q: 'مَا الفَرْقُ بَيْنَ الطَّبِيعَةِ فِي بِرِيطَانِيَا وَفِي بَلَدِ عَائِلَتِكَ؟', en: 'What is the difference between nature in Britain and in your family’s country?', push: 'وَالحَيَوَانَاتُ؟' },
    { route: 'Stretch', q: 'هَلْ حَدَائِقُ الحَيَوَانِ فِكْرَةٌ جَيِّدَةٌ؟', en: 'Are zoos a good idea?', push: 'وَلٰكِنْ …؟' },
    { route: 'Stretch', q: 'كَيْفَ نَحْمِي الحَيَوَانَاتِ المُهَدَّدَةَ؟', en: 'How do we protect endangered animals?', push: 'وَدَوْرُكَ أَنْتَ؟' },
  ],
  convModels: [
    { q: 'صِفْ أَجْمَلَ مَنْظَرٍ طَبِيعِيٍّ رَأَيْتَهُ.', model: 'أَجْمَلُ مَنْظَرٍ رَأَيْتُهُ كَانَ غُرُوبَ الشَّمْسِ فِي صَحْرَاءِ وَادِي رَمٍّ، لِأَنَّ الرِّمَالَ أَصْبَحَتْ حَمْرَاءَ؛ نِمْنَا فِي خَيْمَةٍ، وَرَأَيْنَا نُجُومًا كَثِيرَةً، وَسَأَرْجِعُ إِلَى هُنَاكَ مَعَ أَصْدِقَائِي.', modelEn: 'A: sunset in the Wadi Rum desert · R: the sand turned red · E: we slept in a tent and saw many stars · T: I will go back with friends.' },
    { q: 'مَا الفَرْقُ بَيْنَ الطَّبِيعَةِ فِي بِرِيطَانِيَا وَفِي بَلَدِ عَائِلَتِكَ؟', model: 'فِي بِرِيطَانِيَا تُوجَدُ غَابَاتٌ خَضْرَاءُ وَأَنْهَارٌ كَثِيرَةٌ، لِأَنَّ الأَمْطَارَ تَسْقُطُ دَائِمًا؛ أَمَّا فِي السُّودَانِ فَالصَّحْرَاءُ وَاسِعَةٌ، وَتَعِيشُ فِيهَا الجِمَالُ، وَالنِّيلُ أَطْوَلُ مِنْ أَيِّ نَهْرٍ هُنَا.', modelEn: 'A: in Britain, green forests and many rivers · R: it always rains · E/contrast: in Sudan the desert is vast, camels live there, and the Nile is longer than any river here.' },
    { q: 'هَلْ حَدَائِقُ الحَيَوَانِ فِكْرَةٌ جَيِّدَةٌ؟', model: 'صَحِيحٌ أَنَّ الحَيَوَانَاتِ فِي حَدَائِقِ الحَيَوَانِ لَيْسَتْ حُرَّةً، غَيْرَ أَنَّ بَعْضَهَا يَحْمِي الحَيَوَانَاتِ المُهَدَّدَةَ؛ مَثَلًا، رَأَيْتُ نَمِرًا نَادِرًا فِي حَدِيقَةِ لَنْدَنَ، وَلَوْلَا الحَدِيقَةُ لَمَاتَ.', modelEn: 'Concession: zoo animals aren’t free, but some zoos protect endangered species · E: I saw a rare tiger at London Zoo — without the zoo it would have died.' },
  ],
  talk: {
    title: 'One minute: a natural place I love', ar: 'مَكَانٌ طَبِيعِيٌّ أُحِبُّهُ',
    text: 'Talk for one minute about a natural place you love: where it is, what there is (mountains, rivers, beaches…), the animals that live there, what you did there — and why it matters.',
    routes: {
      core: '30 seconds: where, two things you find there (يُوجَدُ · تُوجَدُ), one animal.',
      develop: '60 seconds: add adjectives that agree, a past visit and a reason.',
      stretch: '90 seconds: add a danger to the place (بِسَبَبِ …) and how to protect it.',
    },
  },
  checkCore: 'used يُوجَدُ / تُوجَدُ with the right gender',
  checkDevelop: 'used feminine singular adjectives with non-human plurals (جِبَالٌ عَالِيَةٌ)',
};

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up form, decoding a new Q2 task (an email about a trip to the countryside), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Nature reserve: visitor form', ar: 'المَحْمِيَّةُ الطَّبِيعِيَّةُ: اسْتِمَارَةُ الزَّائِرِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'عَدَدُ الزُّوَّارِ', en: 'Number of visitors', tip: 'ثَلَاثَةُ أَشْخَاصٍ' },
      { core: true, ar: 'المَكَانُ المُفَضَّلُ', en: 'Favourite place', tip: 'الغَابَةُ · البُحَيْرَةُ' },
      { core: true, ar: 'حَيَوَانٌ تُرِيدُ أَنْ تَرَاهُ', en: 'An animal you want to see', tip: 'الغَزَالُ · النَّسْرُ' },
      { core: true, ar: 'نَشَاطٌ', en: 'An activity', tip: 'المَشْيُ · التَّصْوِيرُ' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُحِبُّ الطَّبِيعَةَ؟', en: 'ONE sentence: why you like nature', tip: 'أُحِبُّ الطَّبِيعَةَ لِأَنَّ …' },
    ],
  },
  Q2: {
    title: 'Question 2: a weekend in the countryside', ar: 'عُطْلَةُ نِهَايَةِ الأُسْبُوعِ فِي الرِّيفِ',
    task: 'You spent a weekend in the countryside. Write an email in Arabic to a friend of about 80–90 words. You must include: • where you went and with whom • a description of the landscape • the animals you saw • whether you would like to live in the countryside, and why.',
    phrases: [['ذَهَبْتُ مَعَ … إِلَى …', 'I went with … to …'], ['تُوجَدُ هُنَاكَ … وَ…', 'there are … and … there'], ['رَأَيْنَا … الَّتِي …', 'we saw … which …'], ['أُحِبُّ أَنْ أَسْكُنَ فِي الرِّيفِ لِأَنَّ …', 'I would like to live in the countryside because …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنْ عُطْلَتِكَ فِي الرِّيفِ (٨٠–٩٠ كَلِمَةً).', 'Write to a friend about your weekend in the countryside (80–90 words).'],
      ['1', 'أَيْنَ ذَهَبْتَ؟ وَمَعَ مَنْ؟', 'Where you went; with whom'],
      ['2', 'صِفِ المَنَاظِرَ الطَّبِيعِيَّةَ.', 'Describe the landscape'],
      ['3', 'مَا الحَيَوَانَاتُ الَّتِي رَأَيْتَهَا؟', 'The animals you saw'],
      ['4', 'هَلْ تُرِيدُ أَنْ تَسْكُنَ فِي الرِّيفِ؟ وَلِمَاذَا؟', 'Would you like to live there? Why?'],
    ],
    decode: ['an email to a FRIEND → informal greeting and closing', 'أَيْنَ ذَهَبْتَ → PAST (ذَهَبْتُ · سَافَرْنَا)', 'صِفْ → adjectives; non-human plural + feminine singular (أَشْجَارٌ عَالِيَةٌ)', 'مَا الحَيَوَانَاتُ الَّتِي رَأَيْتَهَا → PAST + الَّذِي / الَّتِي', 'هَلْ تُرِيدُ … لِمَاذَا → OPINION + reason (لِأَنَّ · لٰكِنَّ)'],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', en: 'Hello …, how are you?' },
      { ar: 'فِي نِهَايَةِ الأُسْبُوعِ ذَهَبْتُ مَعَ ______ إِلَى ______ .', en: '1 · At the weekend I went with … to …' },
      { ar: 'تُوجَدُ هُنَاكَ ______ ، وَ ______ .', en: '2 · There are … and … there.' },
      { ar: 'رَأَيْنَا ______ وَ ______ .', en: '3 · We saw … and …' },
      { ar: 'أُرِيدُ / لَا أُرِيدُ أَنْ أَسْكُنَ فِي الرِّيفِ، لِأَنَّ ______ .', en: '4 · I want / don’t want to live in the countryside, because …' },
    ],
    developFrames: [
      { ar: 'سَافَرْنَا بِ ______ إِلَى ______ الَّتِي تَقَعُ فِي ______ .', en: '1 · We travelled by … to …, which is in the …' },
      { ar: 'كَانَتِ الجِبَالُ ______ ، وَكَانَ النَّهْرُ ______ .', en: '2 · The mountains were …, and the river was …' },
      { ar: 'أَعْجَبَتْنِي ______ الَّتِي ______ .', en: '3 · I liked the … which …' },
      { ar: 'صَحِيحٌ أَنَّ الرِّيفَ ______ ، غَيْرَ أَنَّ ______ .', en: '4 · It is true the countryside is …, but …' },
    ],
    bank: ['جِبَالٌ عَالِيَةٌ', 'غَابَةٌ كَثِيفَةٌ', 'بُحَيْرَةٌ هَادِئَةٌ', 'وَادٍ أَخْضَرُ', 'طُيُورٌ نَادِرَةٌ', 'خِرَافٌ · أَبْقَارٌ', 'خَلَّابٌ', 'الَّذِي · الَّتِي'],
    model: {
      text: `مَرْحَبًا يَا زَيْنَبُ،
كَيْفَ حَالُكِ؟ فِي نِهَايَةِ الأُسْبُوعِ المَاضِي سَافَرْتُ مَعَ عَائِلَتِي بِالسَّيَّارَةِ إِلَى مِنْطَقَةِ البُحَيْرَاتِ الَّتِي تَقَعُ فِي شَمَالِ غَرْبِ إِنْجِلْتِرَا. المَنَاظِرُ هُنَاكَ خَلَّابَةٌ: جِبَالٌ عَالِيَةٌ وَخَضْرَاءُ، وَبُحَيْرَاتٌ هَادِئَةٌ، وَغَابَاتٌ كَثِيفَةٌ. مَشَيْنَا ثَلَاثَ سَاعَاتٍ بِجَانِبِ النَّهْرِ، وَرَأَيْنَا خِرَافًا كَثِيرَةً وَسِنْجَابًا أَحْمَرَ نَادِرًا، وَطُيُورًا تَسْبَحُ فِي المَاءِ. أَعْجَبَنِي الهُدُوءُ كَثِيرًا، لِأَنَّ مَدِينَتَنَا مُزْدَحِمَةٌ. صَحِيحٌ أَنَّ الرِّيفَ جَمِيلٌ وَالهَوَاءَ نَظِيفٌ، غَيْرَ أَنِّي لَا أُرِيدُ أَنْ أَسْكُنَ فِيهِ، لِأَنَّ المَدْرَسَةَ وَالمَحَلَّاتِ بَعِيدَةٌ جِدًّا، وَلَيْسَ هُنَاكَ مُوَاصَلَاتٌ.
مَعَ مَحَبَّتِي،
لَيْلَى`,
      en: '“Hi Zainab, how are you? Last weekend I travelled by car with my family to the Lake District, which is in the north-west of England. The scenery there is stunning: high green mountains, calm lakes and thick forests. We walked for three hours beside the river and saw lots of sheep, a rare red squirrel and birds swimming in the water. I loved the quiet, because our city is crowded. It’s true the countryside is beautiful and the air is clean, but I don’t want to live there, because school and the shops are very far and there is no transport. Love, Layla.”',
      find: ['الَّتِي تَقَعُ فِي شَمَالِ غَرْبِ', 'جِبَالٌ عَالِيَةٌ وَخَضْرَاءُ', 'سِنْجَابًا أَحْمَرَ نَادِرًا', 'صَحِيحٌ أَنَّ … غَيْرَ أَنِّي'],
    },
  },
  upgrade: [
    { ar: 'رَأَيْتُ طُيُورًا.', en: 'I saw birds.' },
    { ar: 'رَأَيْتُ طُيُورًا مُلَوَّنَةً فِي الغَابَةِ.', en: 'I saw colourful birds in the forest.' },
    { ar: 'رَأَيْتُ طُيُورًا مُلَوَّنَةً فِي الغَابَةِ الَّتِي تَقَعُ بِجَانِبِ البُحَيْرَةِ، لِأَنَّنَا قُمْنَا بَاكِرًا.', en: '… in the forest which is next to the lake, because we got up early.' },
    { ar: '… لِذٰلِكَ أُرِيدُ أَنْ أُصْبِحَ مُصَوِّرًا لِلْحَيَاةِ البَرِّيَّةِ، لِكَيْ يَعْرِفَ النَّاسُ جَمَالَهَا.', en: '… so I want to become a wildlife photographer, so that people know its beauty.' },
  ],
  builder: [
    { en: 'The mountains are high.', cols: [['الجِبَالُ', 'الجَبَلُ'], ['عَالِيَةٌ', 'عَالُونَ'], ['جِدًّا', 'مِنْ']], key: [0, 0, 0], why: 'Non-human plural → feminine singular adjective: عَالِيَةٌ.' },
    { en: 'There is a big lake near the village.', cols: [['تُوجَدُ', 'يُوجَدُ'], ['بُحَيْرَةٌ كَبِيرَةٌ', 'بُحَيْرَةٌ كَبِيرٌ'], ['قُرْبَ القَرْيَةِ', 'القَرْيَةَ قُرْبَ']], key: [0, 0, 0], why: 'بُحَيْرَةٌ is feminine → تُوجَدُ … كَبِيرَةٌ.' },
    { en: 'The camel, which lives in the desert, is strong.', cols: [['الجَمَلُ', 'الجِمَالُ'], ['الَّذِي يَعِيشُ فِي الصَّحْرَاءِ', 'الَّتِي تَعِيشُ فِي الصَّحْرَاءِ'], ['قَوِيٌّ', 'قَوِيَّةٌ']], key: [0, 0, 0], why: 'A masculine singular noun → الَّذِي + قَوِيٌّ.' },
  ],
  errors: [
    { wrong: 'الأَشْجَارُ طَوِيلُونَ.', hint: 'Trees are not people.', right: 'الأَشْجَارُ طَوِيلَةٌ.', why: 'Non-human plural → feminine singular: طَوِيلَةٌ.' },
    { wrong: 'يُوجَدُ غَابَةٌ قُرْبَ بَيْتِي.', hint: 'Is غَابَةٌ masculine or feminine?', right: 'تُوجَدُ غَابَةٌ قُرْبَ بَيْتِي.', why: 'Feminine noun → تُوجَدُ.' },
    { wrong: 'رَأَيْتُ الطَّائِرَ الَّتِي تَعِيشُ فِي الجَبَلِ.', hint: 'Check the relative pronoun.', right: 'رَأَيْتُ الطَّائِرَ الَّذِي يَعِيشُ فِي الجَبَلِ.', why: 'الطَّائِرُ is masculine → الَّذِي يَعِيشُ.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: an encounter with an animal', ar: 'لِقَاءٌ مَعَ حَيَوَانٍ',
    task: 'Full Q3 title: “Nature and the animals around us”. Today write ONLY the past paragraph: a time you saw an animal in nature — where you were, what the place and animal were like, what happened, and how you felt.',
    formula: [
      { ar: 'فِي العُطْلَةِ رَأَيْتُ دُلْفِينًا فِي البَحْرِ الأَحْمَرِ.', en: 'T · In the holiday I saw a dolphin in the Red Sea.' },
      { ar: 'كُنَّا فِي قَارِبٍ صَغِيرٍ، فَقَفَزَ الدُّلْفِينُ بِجَانِبِنَا.', en: 'D · We were in a small boat, and the dolphin jumped next to us.' },
      { ar: 'كَانَ مُمَيَّزًا لِأَنِّي رَأَيْتُهُ حُرًّا، لَا فِي حَدِيقَةٍ.', en: 'R · It was special because I saw it free, not in a zoo.' },
      { ar: 'شَعَرْتُ بِالسَّعَادَةِ، وَلَنْ أَنْسَى ذٰلِكَ اليَوْمَ.', en: 'F · I felt happy, and I will never forget that day.' },
    ],
    phrases: [['فَجْأَةً رَأَيْتُ …', 'suddenly I saw …'], ['كَانَ … كَبِيرًا / صَغِيرًا وَ…', 'it was big / small and …'], ['يَعِيشُ هٰذَا الحَيَوَانُ فِي …', 'this animal lives in …'], ['شَعَرْتُ بِالخَوْفِ / بِالدَّهْشَةِ', 'I felt fear / amazement'], ['لَنْ أَنْسَى …', 'I will never forget …']],
    model: {
      text: 'فِي الصَّيْفِ المَاضِي، خِلَالَ رِحْلَةٍ إِلَى صَحْرَاءِ عُمَانَ، رَأَيْتُ حَيَوَانًا نَادِرًا لِأَوَّلِ مَرَّةٍ. كُنَّا نَمْشِي مَعَ الدَّلِيلِ بَيْنَ الرِّمَالِ الذَّهَبِيَّةِ فِي الصَّبَاحِ البَاكِرِ، فَجْأَةً رَأَيْنَا مَجْمُوعَةً مِنَ المَهَا العَرَبِيِّ. كَانَتْ بَيْضَاءَ وَقُرُونُهَا طَوِيلَةٌ جِدًّا، وَكَانَتْ تَقِفُ هَادِئَةً تَحْتَ شَجَرَةٍ صَغِيرَةٍ. قَالَ الدَّلِيلُ إِنَّ هٰذَا الحَيَوَانَ كَانَ مُهَدَّدًا بِالانْقِرَاضِ. شَعَرْتُ بِالدَّهْشَةِ، لِأَنِّي رَأَيْتُهُ فِي بَيْتِهِ الطَّبِيعِيِّ.',
      en: 'T: last summer, on a trip to the Omani desert, I saw a rare animal for the first time · D: we were walking with the guide among the golden sand early in the morning; suddenly we saw a group of Arabian oryx — white with very long horns, standing calmly under a small tree; the guide said this animal had been endangered · R/F: I felt amazed, because I saw it in its natural home.',
      find: ['رَأَيْتُ حَيَوَانًا نَادِرًا', 'فَجْأَةً رَأَيْنَا', 'كَانَتْ بَيْضَاءَ وَقُرُونُهَا', 'مُهَدَّدًا بِالانْقِرَاضِ'],
    },
  },
};
speak.ladderQs[3].l3 = '… وَلَوْ زُرْتُهَا لَرَكِبْتُ …';
write.Q2.developFrames[0] = { ar: 'سَافَرْنَا بِالسَّيَّارَةِ إِلَى ______ الَّتِي تَقَعُ فِي ______ .', en: '1 · We travelled by car to …, which is in the …' };

module.exports = { speak, write };
