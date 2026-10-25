'use strict';
/* Guided Practice Rooms · TC-L05 · Environmental solutions. New tasks. Teacher-made. */
const XP = require('./xp-c-l05');

const base = { topic: 'C', n: 5, short: 'Environmental Solutions', arShort: 'حُلُولٌ لِلْبِيئَةِ', fileTitle: 'Environmental_Solutions', title: 'Environmental solutions', icon: 'FaRecycle', grammar: 'obligation and advice (yajibu ʿalā … an · yanbaghī an · lā budda min); purpose (li-kay / li- + verb in -a); masʾūlun ʿan; the future (sa- / sawfa); idhā … fa-; imperatives for campaigns' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up on green solutions, the answer ladder, two new role plays (joining the school eco-club, presenting a green idea to the head teacher), a topic conversation with A-R-E-T, and a one-minute talk on what they do to help the planet.',
  words: XP.speak.words,
  words1: { title: 'Green actions', ar: 'أَعْمَالٌ خَضْرَاءُ' },
  words2: { title: 'Advice, duty and purpose', ar: 'النَّصِيحَةُ وَالوَاجِبُ وَالهَدَفُ' },
  ladder: {
    q: 'مَاذَا تَفْعَلُ لِتَحْمِيَ البِيئَةَ؟', qEn: 'What do you do to protect the environment?',
    rungs: [
      { ar: 'أُعِيدُ تَدْوِيرَ الوَرَقِ.', en: 'I recycle paper.' },
      { ar: 'أُعِيدُ تَدْوِيرَ الوَرَقِ وَالزُّجَاجِ، وَأُطْفِئُ الأَضْوَاءَ لِكَيْ أُوَفِّرَ الطَّاقَةَ.', en: '… and glass, and I switch off the lights to save energy.' },
      { ar: '… وَبَدَلًا مِنَ السَّيَّارَةِ أَذْهَبُ إِلَى المَدْرَسَةِ بِالدَّرَّاجَةِ، لِأَنَّهَا لَا تُلَوِّثُ الهَوَاءَ.', en: '… and instead of the car I cycle to school, because it doesn’t pollute the air.' },
      { ar: '… فِي رَأْيِي يَجِبُ عَلَى كُلِّ شَخْصٍ أَنْ يُسَاعِدَ، وَفِي الشَّهْرِ القَادِمِ سَأَزْرَعُ شَجَرَةً مَعَ نَادِي البِيئَةِ.', en: '… in my view everyone must help, and next month I will plant a tree with the eco-club.' },
    ],
  },
  ladderQs: [
    { q: 'كَيْفَ نُقَلِّلُ مِنَ النُّفَايَاتِ؟', l1: 'يَجِبُ أَنْ …', l2: '… لِكَيْ …', l3: '… مَثَلًا فِي بَيْتِنَا …' },
    { q: 'هَلْ تَسْتَعْمِلُ المُوَاصَلَاتِ العَامَّةَ؟', l1: 'نَعَمْ / لَا، …', l2: '… لِأَنَّ …', l3: '… وَإِذَا … فَسَـ …' },
    { q: 'مَا الَّذِي يَنْبَغِي أَنْ تَفْعَلَهُ الحُكُومَةُ؟', l1: 'يَنْبَغِي أَنْ …', l2: '… لِأَنَّ …', l3: '… وَلَوْ كُنْتُ رَئِيسًا لَـ …' },
    { q: 'هَلْ تُوَفِّرُ المَاءَ فِي البَيْتِ؟', l1: 'نَعَمْ، أُغْلِقُ …', l2: '… لِكَيْ …', l3: '… وَأُخْتِي …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'the school eco-club', title: 'Role play 1 — Joining the eco-club', ar: 'الانْضِمَامُ إِلَى نَادِي البِيئَةِ', you: 'a new member', them: 'the club leader',
      tasks: [
        { ex: 'أَهْلًا! لِمَاذَا تُرِيدُ أَنْ تَنْضَمَّ إِلَى النَّادِي؟', task: 'Give a reason.', plan: 'لِمَاذَا ← لِأَنِّي أُرِيدُ أَنْ …', model: 'لِأَنِّي أُرِيدُ أَنْ أَحْمِيَ البِيئَةَ.', modelEn: 'Because I want to protect the environment.' },
        { ex: 'مَاذَا تَفْعَلُ فِي البَيْتِ لِلْبِيئَةِ؟', task: 'Give two green actions.', plan: 'مَاذَا ← أُعِيدُ تَدْوِيرَ … وَأُوَفِّرُ …', model: 'أُعِيدُ تَدْوِيرَ البْلَاسْتِيكِ، وَأُوَفِّرُ المَاءَ.', modelEn: 'I recycle plastic, and I save water.' },
        { ex: 'كَيْفَ تَأْتِي إِلَى المَدْرَسَةِ؟', task: 'Say how you travel.', plan: 'كَيْفَ ← آتِي … بِـ ← مَشْيًا / بِالحَافِلَةِ', model: 'آتِي بِالحَافِلَةِ مَعَ أَصْدِقَائِي.', modelEn: 'I come by bus with my friends.' },
        { ex: 'سَنَزْرَعُ أَشْجَارًا يَوْمَ السَّبْتِ.', task: 'Accept and ASK a question.', plan: 'اقْبَلْ ← فِكْرَةٌ رَائِعَةٌ! … ؟', model: 'فِكْرَةٌ رَائِعَةٌ! فِي أَيِّ سَاعَةٍ نَبْدَأُ؟', modelEn: 'Great idea! What time do we start?' },
        { unexpected: true, ex: 'مَا الشَّيْءُ الَّذِي يَجِبُ أَنْ تُغَيِّرَهُ المَدْرَسَةُ؟', task: 'Answer the unexpected question.', plan: 'يَجِبُ ← يَجِبُ عَلَى المَدْرَسَةِ أَنْ …', model: 'يَجِبُ عَلَى المَدْرَسَةِ أَنْ تَضَعَ سِلَالًا لِإِعَادَةِ التَّدْوِيرِ فِي كُلِّ صَفٍّ.', modelEn: 'The school must put recycling bins in every class.' },
      ],
      girl: 'تُرِيدِينَ · تَنْضَمِّي · تَفْعَلِينَ · تَأْتِينَ',
      notes: 'Language: li-annī urīdu an + verb in -a · uʿīdu tadwīra · bi-l-ḥāfila · fī ayyi sāʿatin · yajibu ʿalā … an + verb in -a.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a meeting with the head teacher', title: 'Role play 2 — Pitching a green idea', ar: 'نَعْرِضُ فِكْرَةً خَضْرَاءَ', you: 'the student council representative', them: 'the head teacher',
      tasks: [
        { ex: 'مَا فِكْرَتُكُمْ؟', task: 'Present the idea with its purpose.', model: 'نَقْتَرِحُ أَنْ نَضَعَ أَلْوَاحًا شَمْسِيَّةً عَلَى سَطْحِ المَدْرَسَةِ، لِكَيْ نُوَفِّرَ الكَهْرَبَاءَ وَالمَالَ.', modelEn: 'We suggest putting solar panels on the school roof, to save electricity and money.' },
        { ex: 'هٰذَا غَالٍ جِدًّا!', task: 'Answer the objection (concession).', model: 'صَحِيحٌ أَنَّهَا غَالِيَةٌ فِي البِدَايَةِ، غَيْرَ أَنَّهَا سَتُوَفِّرُ آلَافَ الجُنَيْهَاتِ بَعْدَ خَمْسِ سَنَوَاتٍ.', modelEn: 'It’s true they are expensive at first, but they will save thousands of pounds after five years.' },
        { ex: 'هَلْ جَرَّبَتْ مَدْرَسَةٌ أُخْرَى ذٰلِكَ؟', task: 'Give a past example as evidence.', model: 'نَعَمْ، فِي السَّنَةِ المَاضِيَةِ رَكَّبَتْ مَدْرَسَةٌ قَرِيبَةٌ أَلْوَاحًا، فَانْخَفَضَتْ فَاتُورَتُهَا إِلَى النِّصْفِ.', modelEn: 'Yes, last year a nearby school installed panels, and its bill fell by half.' },
        { ex: 'وَمَاذَا يَسْتَطِيعُ الطُّلَّابُ أَنْ يَفْعَلُوا؟', task: 'Give two student actions + ASK for permission.', model: 'نَسْتَطِيعُ أَنْ نَجْمَعَ المَالَ وَأَنْ نُنَظِّمَ حَمْلَةً. هَلْ تَسْمَحُ لَنَا بِسُوقٍ خَيْرِيٍّ؟', modelEn: 'We can raise money and organise a campaign. Will you allow us a charity sale?' },
        { unexpected: true, ex: 'لَوْ رَفَضَ الآبَاءُ، مَاذَا تَفْعَلُونَ؟', task: 'Answer the unexpected question (law … la-).', model: 'لَوْ رَفَضُوا، لَدَعَوْنَاهُمْ إِلَى اجْتِمَاعٍ، وَشَرَحْنَا لَهُمْ أَنَّ هٰذَا المَشْرُوعَ مُفِيدٌ لِمُسْتَقْبَلِ أَوْلَادِهِمْ.', modelEn: 'If they refused, we would invite them to a meeting and explain that this project helps their children’s future.' },
      ],
      girl: 'you speak to a female head teacher: تَسْمَحِينَ — and the Speaker stays the same',
      notes: 'Stretch language: naqtariḥu an · li-kay + verb in -a · ṣaḥīḥun anna … ghayra anna · past evidence + fa- for result · nastaṭīʿu an … wa-an … · law … la-.',
    },
  ],
  convAr: 'حُلُولٌ لِلْبِيئَةِ',
  conv: [
    { route: 'Core', q: 'هَلْ تُعِيدُ التَّدْوِيرَ فِي البَيْتِ؟', en: 'Do you recycle at home?', push: 'مَاذَا بِالضَّبْطِ؟' },
    { route: 'Core', q: 'هَلْ تَمْشِي إِلَى المَدْرَسَةِ؟', en: 'Do you walk to school?', push: 'لِمَاذَا؟' },
    { route: 'Develop', q: 'مَاذَا فَعَلْتَ مُؤَخَّرًا لِتُسَاعِدَ البِيئَةَ؟', en: 'What have you done recently to help the environment?', push: 'وَمَاذَا سَتَفْعَلُ؟' },
    { route: 'Develop', q: 'كَيْفَ تَكُونُ مَدْرَسَتُكَ أَكْثَرَ خُضْرَةً؟', en: 'How could your school be greener?', push: 'وَمَنِ المَسْؤُولُ؟' },
    { route: 'Stretch', q: 'هَلْ يَجِبُ أَنْ تَمْنَعَ الحُكُومَةُ السَّيَّارَاتِ فِي وَسَطِ المُدُنِ؟', en: 'Should the government ban cars in city centres?', push: 'وَلٰكِنْ …؟' },
    { route: 'Stretch', q: 'هَلْ يَسْتَطِيعُ شَخْصٌ وَاحِدٌ أَنْ يُغَيِّرَ العَالَمَ؟', en: 'Can one person change the world?', push: 'مَثَلًا؟' },
  ],
  convModels: [
    { q: 'مَاذَا فَعَلْتَ مُؤَخَّرًا لِتُسَاعِدَ البِيئَةَ؟', model: 'فِي الشَّهْرِ المَاضِي شَارَكْتُ فِي تَنْظِيفِ النَّهْرِ مَعَ نَادِي البِيئَةِ، لِأَنَّهُ كَانَ مَلِيئًا بِالأَكْيَاسِ؛ جَمَعْنَا خَمْسِينَ كِيسًا، وَفِي الصَّيْفِ سَنُنَظِّفُ الحَدِيقَةَ العَامَّةَ.', modelEn: 'A: last month I joined a river clean-up · R: it was full of bags · E: we collected fifty bags · T: in summer we’ll clean the park.' },
    { q: 'كَيْفَ تَكُونُ مَدْرَسَتُكَ أَكْثَرَ خُضْرَةً؟', model: 'يَنْبَغِي أَنْ نَسْتَعْمِلَ وَرَقًا أَقَلَّ، لِأَنَّنَا نَطْبَعُ كَثِيرًا؛ مَثَلًا، نَسْتَطِيعُ أَنْ نُرْسِلَ الوَاجِبَاتِ بِالإِنْتَرْنِتِ، وَأَنْ نَزْرَعَ حَدِيقَةً لِلْخُضَارِ خَلْفَ المَلْعَبِ.', modelEn: 'A: use less paper · R: we print a lot · E: send homework online and plant a vegetable garden behind the pitch.' },
    { q: 'هَلْ يَسْتَطِيعُ شَخْصٌ وَاحِدٌ أَنْ يُغَيِّرَ العَالَمَ؟', model: 'صَحِيحٌ أَنَّ شَخْصًا وَاحِدًا لَا يَسْتَطِيعُ أَنْ يَفْعَلَ كُلَّ شَيْءٍ، غَيْرَ أَنَّهُ يَسْتَطِيعُ أَنْ يُلْهِمَ الآخَرِينَ؛ مَثَلًا، بَدَأَتْ غْرِيتَا ثُونْبِرْغ وَحْدَهَا، ثُمَّ تَبِعَهَا مَلَايِينُ الشَّبَابِ.', modelEn: 'Concession: one person can’t do everything, but they can inspire others · E: Greta Thunberg started alone, then millions of young people followed her.' },
  ],
  talk: {
    title: 'One minute: how I help the planet', ar: 'كَيْفَ أُسَاعِدُ الأَرْضَ',
    text: 'Talk for one minute about what you and your family do for the environment: recycling, energy, water, transport — something you did recently — and what others (school, government) should do.',
    routes: {
      core: '30 seconds: three things you do, with لِكَيْ once.',
      develop: '60 seconds: add a past action and يَجِبُ عَلَى … أَنْ …',
      stretch: '90 seconds: add a concession and a لَوْ … sentence about what you would change.',
    },
  },
  checkCore: 'used يَجِبُ / يَنْبَغِي أَنْ + verb in -a',
  checkDevelop: 'gave a purpose with لِكَيْ + verb in -a',
};

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up form, decoding a new Q2 task (a letter to the council with green ideas), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Green Week: volunteer sign-up', ar: 'الأُسْبُوعُ الأَخْضَرُ: تَسْجِيلُ المُتَطَوِّعِينَ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'الصَّفُّ', en: 'Class', tip: 'الصَّفُّ العَاشِرُ' },
      { core: true, ar: 'النَّشَاطُ', en: 'Activity', tip: 'زِرَاعَةُ الأَشْجَارِ' },
      { core: true, ar: 'اليَوْمُ', en: 'Day', tip: 'يَوْمَ الأَرْبِعَاءِ' },
      { core: true, ar: 'مَاذَا سَتُحْضِرُ؟', en: 'What you will bring', tip: 'قُفَّازَاتٌ · كِيسٌ' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تَتَطَوَّعُ؟', en: 'ONE sentence: why you are volunteering', tip: 'أَتَطَوَّعُ لِكَيْ …' },
    ],
  },
  Q2: {
    title: 'Question 2: a greener town', ar: 'مَدِينَةٌ أَكْثَرُ خُضْرَةً',
    task: 'Write a letter in Arabic to your town council of about 80–90 words. You must include: • an environmental problem in your town • what people should do • what the council must do, and why • something you did recently to help.',
    phrases: [['أَكْتُبُ إِلَيْكُمْ لِأَنَّ …', 'I am writing to you because …'], ['يَنْبَغِي عَلَى النَّاسِ أَنْ …', 'people should …'], ['يَجِبُ عَلَى البَلَدِيَّةِ أَنْ … لِكَيْ …', 'the council must … so that …'], ['فِي الشَّهْرِ المَاضِي …', 'last month …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى البَلَدِيَّةِ (٨٠–٩٠ كَلِمَةً).', 'Write a letter to the council (80–90 words).'],
      ['1', 'مَا المُشْكِلَةُ فِي مَدِينَتِكَ؟', 'The problem in your town'],
      ['2', 'مَاذَا يَنْبَغِي أَنْ يَفْعَلَ النَّاسُ؟', 'What people should do'],
      ['3', 'مَاذَا يَجِبُ عَلَى البَلَدِيَّةِ أَنْ تَفْعَلَ؟ وَلِمَاذَا؟', 'What the council must do and why'],
      ['4', 'مَاذَا فَعَلْتَ مُؤَخَّرًا لِتُسَاعِدَ؟', 'Something you did recently'],
    ],
    decode: ['a FORMAL letter → السَّادَةُ … المُحْتَرَمُونَ and a formal closing', 'مَا المُشْكِلَةُ → PRESENT + بِسَبَبِ', 'يَنْبَغِي أَنْ يَفْعَلَ النَّاسُ → advice + verb in -a', 'يَجِبُ عَلَى … وَلِمَاذَا → obligation + لِكَيْ / لِأَنَّ', 'مَاذَا فَعَلْتَ → PAST (first person)'],
    coreFrames: [
      { ar: 'السَّادَةُ فِي البَلَدِيَّةِ المُحْتَرَمُونَ،', en: 'Dear Sirs and Madams at the council,' },
      { ar: 'أَكْتُبُ إِلَيْكُمْ لِأَنَّ ______ فِي مَدِينَتِنَا.', en: '1 · I am writing because … in our town.' },
      { ar: 'يَنْبَغِي أَنْ ______ النَّاسُ ______ .', en: '2 · People should …' },
      { ar: 'يَجِبُ عَلَى البَلَدِيَّةِ أَنْ ______ ، لِكَيْ ______ .', en: '3 · The council must …, so that …' },
      { ar: 'فِي الشَّهْرِ المَاضِي ______ .', en: '4 · Last month I …' },
    ],
    developFrames: [
      { ar: 'تُعَانِي مَدِينَتُنَا مِنْ ______ بِسَبَبِ ______ .', en: '1 · Our town suffers from … because of …' },
      { ar: 'لَا بُدَّ مِنْ أَنْ ______ ، بَدَلًا مِنْ ______ .', en: '2 · We have to …, instead of …' },
      { ar: 'نَقْتَرِحُ أَنْ ______ ، لِأَنَّ ذٰلِكَ سَـ ______ .', en: '3 · We suggest …, because that will …' },
      { ar: 'نَظَّمْتُ مَعَ ______ ______ ، فَ ______ .', en: '4 · With … I organised …, and …' },
    ],
    bank: ['إِعَادَةُ التَّدْوِيرِ', 'المُوَاصَلَاتُ العَامَّةُ', 'يُوَفِّرُ الطَّاقَةَ', 'يُقَلِّلُ مِنَ التَّلَوُّثِ', 'يَجِبُ عَلَى … أَنْ', 'يَنْبَغِي أَنْ', 'لِكَيْ', 'حَمْلَةٌ'],
    model: {
      text: `السَّادَةُ فِي البَلَدِيَّةِ المُحْتَرَمُونَ،
أَكْتُبُ إِلَيْكُمْ لِأَنَّ حَدِيقَةَ مَدِينَتِنَا أَصْبَحَتْ مَلِيئَةً بِالنُّفَايَاتِ، بِسَبَبِ قِلَّةِ السِّلَالِ وَكَثْرَةِ الزُّوَّارِ فِي الصَّيْفِ. فِي رَأْيِي، يَنْبَغِي أَنْ يَحْمِلَ النَّاسُ نُفَايَاتِهِمْ إِلَى البَيْتِ، وَأَنْ يَسْتَعْمِلُوا زُجَاجَاتٍ يُمْكِنُ اسْتِعْمَالُهَا مَرَّةً ثَانِيَةً. وَيَجِبُ عَلَى البَلَدِيَّةِ أَنْ تَضَعَ سِلَالًا لِإِعَادَةِ التَّدْوِيرِ عِنْدَ كُلِّ بَابٍ، لِكَيْ تَبْقَى الحَدِيقَةُ نَظِيفَةً، وَلِأَنَّ الأَطْفَالَ يَلْعَبُونَ فِيهَا كُلَّ يَوْمٍ. فِي الشَّهْرِ المَاضِي، نَظَّمْتُ مَعَ نَادِي البِيئَةِ فِي مَدْرَسَتِي حَمْلَةَ تَنْظِيفٍ، فَجَمَعْنَا أَكْثَرَ مِنْ ثَلَاثِينَ كِيسًا فِي سَاعَتَيْنِ فَقَطْ.
مَعَ الاحْتِرَامِ،
فَاطِمَةُ أَحْمَدُ`,
      en: '“Dear Sirs and Madams at the council, I am writing to you because our town park has become full of rubbish, because there are too few bins and too many visitors in summer. In my opinion people should take their rubbish home and use bottles that can be used again. The council must put recycling bins at every gate, so that the park stays clean, and because children play there every day. Last month I organised a clean-up with my school eco-club, and we collected more than thirty bags in only two hours. Yours respectfully, Fatima Ahmed.”',
      find: ['بِسَبَبِ قِلَّةِ السِّلَالِ', 'يَنْبَغِي أَنْ يَحْمِلَ النَّاسُ', 'يَجِبُ عَلَى البَلَدِيَّةِ أَنْ تَضَعَ', 'لِكَيْ تَبْقَى الحَدِيقَةُ نَظِيفَةً'],
    },
  },
  upgrade: [
    { ar: 'أَمْشِي إِلَى المَدْرَسَةِ.', en: 'I walk to school.' },
    { ar: 'أَمْشِي إِلَى المَدْرَسَةِ كُلَّ يَوْمٍ، بَدَلًا مِنْ أَنْ أَذْهَبَ بِالسَّيَّارَةِ.', en: '… every day, instead of going by car.' },
    { ar: '… لِكَيْ أُقَلِّلَ مِنْ تَلَوُّثِ الهَوَاءِ، وَلِأَنَّ المَشْيَ مُفِيدٌ لِلصِّحَّةِ.', en: '… to reduce air pollution, and because walking is good for health.' },
    { ar: '… وَلَوْ مَشَى كُلُّ الطُّلَّابِ، لَأَصْبَحَ الهَوَاءُ أَمَامَ المَدْرَسَةِ أَنْظَفَ بِكَثِيرٍ.', en: '… and if all students walked, the air outside school would be much cleaner.' },
  ],
  builder: [
    { en: 'We must save water.', cols: [['يَجِبُ', 'يَجِبُ أَنَّ'], ['أَنْ نُوَفِّرَ', 'أَنْ نُوَفِّرُ'], ['المَاءَ', 'المَاءُ']], key: [0, 0, 0], why: 'يَجِبُ أَنْ + verb in -a (نُوَفِّرَ); the object is accusative.' },
    { en: 'I plant trees to protect nature.', cols: [['أَزْرَعُ أَشْجَارًا', 'أَزْرَعُ أَشْجَارٌ'], ['لِكَيْ', 'لِأَنَّ'], ['أَحْمِيَ الطَّبِيعَةَ', 'أَحْمِي الطَّبِيعَةُ']], key: [0, 0, 0], why: 'Purpose = لِكَيْ + verb in -a: أَحْمِيَ.' },
    { en: 'The government is responsible for transport.', cols: [['الحُكُومَةُ', 'الحُكُومَةَ'], ['مَسْؤُولَةٌ', 'مَسْؤُولٌ'], ['عَنِ المُوَاصَلَاتِ', 'لِلْمُوَاصَلَاتِ']], key: [0, 0, 0], why: 'Feminine subject → مَسْؤُولَةٌ; the preposition is عَنْ.' },
  ],
  errors: [
    { wrong: 'يَجِبُ أَنْ نَزْرَعُ أَشْجَارًا.', hint: 'Look at the verb after أَنْ.', right: 'يَجِبُ أَنْ نَزْرَعَ أَشْجَارًا.', why: 'أَنْ + verb in -a: نَزْرَعَ.' },
    { wrong: 'أُعِيدُ التَّدْوِيرَ لِكَيْ أُسَاعِدُ البِيئَةَ.', hint: 'لِكَيْ changes the verb.', right: 'أُعِيدُ التَّدْوِيرَ لِكَيْ أُسَاعِدَ البِيئَةَ.', why: 'لِكَيْ + verb in -a: أُسَاعِدَ.' },
    { wrong: 'يَجِبُ عَلَى الحُكُومَةِ أَنْ يَمْنَعَ البْلَاسْتِيكَ.', hint: 'Who must? Masculine or feminine?', right: 'يَجِبُ عَلَى الحُكُومَةِ أَنْ تَمْنَعَ البْلَاسْتِيكَ.', why: 'الحُكُومَةُ is feminine → تَمْنَعَ.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a green project I took part in', ar: 'مَشْرُوعٌ أَخْضَرُ شَارَكْتُ فِيهِ',
    task: 'Full Q3 title: “Protecting our planet”. Today write ONLY the past paragraph: a green project you took part in (or imagine one) — what it was, who took part, what you did, the result, and how you felt.',
    formula: [
      { ar: 'فِي الرَّبِيعِ شَارَكْتُ فِي زِرَاعَةِ الأَشْجَارِ مَعَ مَدْرَسَتِي.', en: 'T · In spring I took part in planting trees with my school.' },
      { ar: 'زَرَعْنَا مِئَةَ شَجَرَةٍ فِي يَوْمٍ وَاحِدٍ.', en: 'D · We planted a hundred trees in one day.' },
      { ar: 'فَعَلْنَا ذٰلِكَ لِكَيْ نُقَلِّلَ مِنَ التَّلَوُّثِ.', en: 'R · We did it to reduce pollution.' },
      { ar: 'شَعَرْتُ بِالفَخْرِ، وَسَأُشَارِكُ مَرَّةً أُخْرَى.', en: 'F · I felt proud, and I will take part again.' },
    ],
    phrases: [['شَارَكْتُ فِي …', 'I took part in …'], ['أَوَّلًا … ثُمَّ … وَفِي النِّهَايَةِ …', 'first … then … finally …'], ['لِكَيْ نُوَفِّرَ / نَحْمِيَ …', 'in order to save / protect …'], ['كَانَتِ النَّتِيجَةُ …', 'the result was …'], ['شَعَرْتُ بِالفَخْرِ', 'I felt proud']],
    model: {
      text: 'فِي الصَّيْفِ المَاضِي شَارَكْتُ فِي مَشْرُوعٍ رَائِعٍ مَعَ نَادِي البِيئَةِ فِي مَدْرَسَتِي. لَاحَظْنَا أَنَّ الطُّلَّابَ يَرْمُونَ مِئَاتِ الزُّجَاجَاتِ البْلَاسْتِيكِيَّةِ كُلَّ أُسْبُوعٍ، لِذٰلِكَ قَرَّرْنَا أَنْ نُغَيِّرَ ذٰلِكَ. أَوَّلًا صَمَّمْنَا مُلْصَقَاتٍ مُلَوَّنَةً، ثُمَّ جَمَعْنَا المَالَ لِكَيْ نَشْتَرِيَ نَافُورَةَ مَاءٍ جَدِيدَةً، وَبَعْدَ ذٰلِكَ أَعْطَيْنَا كُلَّ طَالِبٍ زُجَاجَةً مَعْدِنِيَّةً. بَعْدَ شَهْرٍ وَاحِدٍ، قَلَّتِ النُّفَايَاتُ إِلَى النِّصْفِ. شَعَرْتُ بِالفَخْرِ، لِأَنِّي فَهِمْتُ أَنَّنَا نَسْتَطِيعُ أَنْ نُغَيِّرَ الأَشْيَاءَ.',
      en: 'T: last summer I took part in a great project with my school eco-club · D: we noticed students threw away hundreds of plastic bottles every week, so we decided to change that; first we designed colourful posters, then raised money to buy a new water fountain, and then gave every student a metal bottle; after one month the rubbish fell by half · F/R: I felt proud, because I understood we can change things.',
      find: ['شَارَكْتُ فِي مَشْرُوعٍ', 'لِذٰلِكَ قَرَّرْنَا', 'لِكَيْ نَشْتَرِيَ', 'شَعَرْتُ بِالفَخْرِ'],
    },
  },
};
speak.RP[0].tasks[2].plan = 'كَيْفَ ← آتِي مَشْيًا / بِالحَافِلَةِ';
speak.ladderQs[1].l3 = '… وَإِذَا … فَسَأَذْهَبُ …';
speak.ladderQs[2].l3 = '… وَلَوْ كُنْتُ رَئِيسًا لَمَنَعْتُ …';
write.Q2.developFrames[2] = { ar: 'نَقْتَرِحُ أَنْ ______ ، لِأَنَّ ذٰلِكَ سَيُسَاعِدُ ______ .', en: '3 · We suggest …, because that will help …' };
write.Q2.developFrames[3] = { ar: 'نَظَّمْتُ مَعَ ______ ______ ، فَجَمَعْنَا ______ .', en: '4 · With … I organised …, and we collected …' };

module.exports = { speak, write };
