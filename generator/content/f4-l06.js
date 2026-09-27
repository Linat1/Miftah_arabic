'use strict';
/*
 * F4-L06 · School Rules and Obligations — Must and Must Not
 * Website: Pathways › Foundation › F4 › Lesson 6. The F4 retrieval bridge, the school-rules vocabulary bank (16), “must”
 * and “must not” (يَجِبُ أَنْ / لَا يَجُوزُ أَنْ; لَا يَجِبُ أَنْ = not necessary; 12 action chunks; 14), audience forms (one male
 * · one female · a group; 12), signs and notices (مَمْنُوعٌ · مَسْمُوحٌ · إِلْزَامِيٌّ · اِخْتِيَارِيٌّ; fair / necessary; 10), the rule
 * builder, the School Rules Mission (14), the school announcement (listening), the rule poster and Salma’s view (reading),
 * the school-rules conversation, the eight-rule rulebook and the 16-question checkpoint.
 */
const F = require('./f4-common');
const game = require('../site-data/pathway-visual-games.json')['f4-l06'];
const { q, bank, banks } = F;

const meta = F.meta({
  n: 6, fileTitle: 'School_Rules_and_Obligations_Must_and_Must_Not', chip: 'School Rules',
  title: 'School Rules and Obligations — Must and Must Not', arabic: 'القَوَاعِدُ المَدْرَسِيَّةُ — يَجِبُ وَلَا يَجُوزُ',
  focus: 'Understand school rules, tell obligation (must) from prohibition (must not), address one boy, one girl or a group accurately, read signs and write a school rulebook.',
  icon: 'FaScaleBalanced', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F4-L07', nextTitle: 'A Typical School Day — Narrating a Sequence', nextAr: 'يَوْمٌ مَدْرَسِيٌّ عَادِيٌّ' };
const AR = /[؀-ۿ]/;
const rounds = banks.l06.rounds.map((r) => F.w({ ...r, q: AR.test(r.prompt) ? r.prompt : `${r.title}: ${r.prompt}` }));
const prompts = banks.l06.prompts;

const site = {
  speaking: {
    context: 'Lead a school-rules conversation',
    model: [
      ['A', 'مَا أَهَمُّ قَاعِدَةٍ فِي مَدْرَسَتِكَ؟', 'What is the most important rule in your school?'],
      ['B', 'لَا يَجُوزُ أَنْ نَتَنَمَّرَ عَلَى الْآخَرِينَ لِأَنَّ كُلَّ طَالِبٍ يَحْتَاجُ إِلَى الأَمَانِ.', 'We must not bully others because every student needs safety.'],
    ],
  },
  writing: {
    prompt: 'Website writing task: a titled school rulebook — four obligations (يَجِبُ أَنْ) and four prohibitions (لَا يَجُوزُ أَنْ), at least three reasons and one balanced opinion. Check every audience form.',
    checklist: ['Four يَجِبُ أَنْ + four لَا يَجُوزُ أَنْ.', 'Every verb matches the audience (ـَ / ـِي / ـُوا).', 'Three reasons with لِأَنَّ.', 'One opinion: هَذِهِ الْقَاعِدَةُ عَادِلَةٌ …، وَلَكِنْ …'],
    model: 'قَوَاعِدُ مَدْرَسَتِنَا: يَجِبُ أَنْ تَلْبَسُوا اللِّبَاسَ الْمَدْرَسِيَّ، وَيَجِبُ أَنْ تَحْضُرُوا فِي الْوَقْتِ الْمُحَدَّدِ. لَا يَجُوزُ أَنْ تُحْضِرُوا الْهَوَاتِفَ الْمَحْمُولَةَ إِلَى الْفُصُولِ، وَلَا يَجُوزُ أَنْ تَرْكُضُوا فِي الْمَمَرَّاتِ. يَجِبُ أَنْ تَحْتَرِمُوا الْمُعَلِّمِينَ لِأَنَّ الاِحْتِرَامَ مُهِمٌّ. لَا يَجُوزُ أَنْ تَغُشُّوا فِي الاِمْتِحَانِ لِأَنَّ الْغِشَّ غَيْرُ عَادِلٍ. فِي رَأْيِي، هَذِهِ الْقَوَاعِدُ عَادِلَةٌ.',
  },
  differentiation: {
    core: 'Four rules: two yajibu an and two lā yajūzu an.',
    develop: 'All eight rules and three reasons.',
    stretch: 'Vary the audience forms and evaluate one rule with wa-lākin.',
  },
  mistakes: [
    { wrong: 'لَا يَجِبُ أَنْ تَغُشَّ فِي الاِمْتِحَانِ.', right: 'لَا يَجُوزُ أَنْ تَغُشَّ فِي الاِمْتِحَانِ.', why: 'Lā yajibu = not necessary; must not = lā yajūzu.' },
    { wrong: 'يَا مَرْيَمُ، يَجِبُ أَنْ تَكْتُبَ.', right: 'يَا مَرْيَمُ، يَجِبُ أَنْ تَكْتُبِي.', why: 'One female: the verb ends in -ī.' },
    { wrong: 'يَجِبُ تَحْتَرِمُوا الْمُعَلِّمِينَ.', right: 'يَجِبُ أَنْ تَحْتَرِمُوا الْمُعَلِّمِينَ.', why: 'Both structures need an before the verb.' },
  ],
  listening: {
    title: 'A school announcement',
    script: 'إِعْلَانٌ إِلَى جَمِيعِ الطُّلَّابِ. فِي مَدْرَسَتِنَا، يَجِبُ أَنْ تَلْبَسُوا اللِّبَاسَ الْمَدْرَسِيَّ، وَأَنْ تَحْضُرُوا فِي الْوَقْتِ الْمُحَدَّدِ. لَا يَجُوزُ أَنْ تُحْضِرُوا الْهَوَاتِفَ الْمَحْمُولَةَ إِلَى الْفُصُولِ، وَلَا يَجُوزُ أَنْ تَرْكُضُوا فِي الْمَمَرَّاتِ. يَجِبُ أَنْ تَحْتَرِمُوا الْمُعَلِّمِينَ وَزُمَلَاءَكُمْ لِأَنَّ الاِحْتِرَامَ مُهِمٌّ. فِي الاِمْتِحَانَاتِ، لَا يَجُوزُ أَنْ تَغُشُّوا. وَقَبْلَ الْكَلَامِ فِي الْفَصْلِ، يَجِبُ أَنْ تَرْفَعُوا أَيْدِيَكُمْ. شُكْرًا لِتَعَاوُنِكُمْ.',
    questions: bank(6, 'listening', [1, 3, 4, 6, 8]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 6,
    source: 'Website sections used: the eight-question F4 retrieval bridge and “one vital distinction” (لَا يَجِبُ أَنْ ≠ لَا يَجُوزُ أَنْ), the school-rules vocabulary bank (16) and check, “must” and “must not” with 12 action chunks and the 14-question laboratory, audience forms (one male / one female / a group; 12), signs and notices (10), the rule builder, the School Rules Mission (14), the school announcement (listening, 10), the Al-Nour rule poster and Salma’s view (reading, 12), the school-rules conversation (4 prompts), the rulebook and the 16-question checkpoint. Picture match: website visual game.',
    support: `• Core: يَجِبُ أَنْ / لَا يَجُوزُ أَنْ + one male listener (تَـ …ـَ). Develop: one female (…ـِي) and a group (…ـُوا) + reasons. Stretch: judge a rule fairly (عَادِلَةٌ / غَيْرُ عَادِلَةٍ / ضَرُورِيَّةٌ) with وَلَكِنْ.
• Website “one vital distinction”: لَا يَجِبُ أَنْ = it is not necessary to; لَا يَجُوزُ أَنْ = must not / not permitted. Check this every lesson.
• Website Foundation pattern: after أَنْ learn the verb forms as CHUNKS (ـَ one male · ـِي one female · ـُوا a group) — full grammatical analysis belongs later.
• Respectful debate: students may disagree with a rule (Salma questions the uniform rule) — model polite, reasoned disagreement.
• Urdu bridge: قاعدہ، التزام، احترام، اجازت (≈ الإِذْنُ), ممنوع, لازمی (≈ إِلْزَامِيٌّ), اختیاری = اِخْتِيَارِيٌّ, غیر حاضری (absence).`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Rules vocabulary, must and must not, then who the rule addresses.', wedo: 'Signs, rules mission, the announcement, a rule poster.', next: 'F4-L07' }),
  F.doNow({
    questions: [
      q('What does قَاعِدَةٌ mean?', ['a rule', 'a lesson', 'a subject'], 'Prepared at home (F4-L05).'),
      q('What does مَمْنُوعٌ mean?', ['forbidden', 'allowed', 'optional'], 'Prepared at home (F4-L05).'),
      ...bank(6, 'retrieval', [2, 3, 7]),
    ],
    keyIdea: { text: 'Must = yajibu an. Must not = lā yajūzu an. BUT lā yajibu an = “you don’t have to”.', ar: '{k|يَجِبُ أَنْ} تَحْتَرِمَ · {e|لَا يَجُوزُ أَنْ} تَغُشَّ' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F4-L05. Questions 3–5 are the website “F4 retrieval bridge” (asking a girl, the feminine reason, because I like experiments).',
  }),
  F.objectivesSlide([
    'Recognise and use a broad school-rules vocabulary bank.',
    'Build rules with yajibu an and lā yajūzu an.',
    'Address one male, one female or a group accurately.',
    'Understand signs and write at least eight school rules.',
  ], {
    core: ['I can say two must and two must-not rules.', 'I can tell must not from not necessary.'],
    develop: ['I can address a girl or a group.', 'I can give a reason for a rule.'],
    stretch: ['I can judge a rule as fair or unfair.', 'I can write a full rulebook.'],
  }, 2, 'Website “By the end, I can…” (left) and the website rulebook Core / Develop / Stretch routes (right).'),
  F.keywordsSlide({
    text: 'Rules vocabulary, the two modal chunks and notice words. Core: rule, uniform, respect, homework, must, must not.',
    groups: [
      { head: 'GROUP 1', name: 'School-rules vocabulary · 16' },
      { head: 'GROUP 2', name: 'Must · must not · 12 actions' },
      { head: 'GROUP 3', name: 'Signs · forbidden · allowed' },
    ],
    bridge: [
      { ar: 'قَاعِدَةٌ', urdu: 'قاعدہ', tr: 'qā‘ida', en: 'rule' },
      { ar: 'الاِحْتِرَامُ', urdu: 'احترام', tr: 'al-iḥtirām', en: 'respect' },
      { ar: 'مَمْنُوعٌ', urdu: 'ممنوع', tr: 'mamnū‘', en: 'forbidden' },
      { ar: 'اِخْتِيَارِيٌّ', urdu: 'اختیاری', tr: 'ikhtiyāriyy', en: 'optional' },
      { ar: 'الْغِيَابُ', urdu: 'غیر حاضری', tr: 'al-ghiyāb', en: 'absence (root: absent)' },
    ],
    notes: 'URDU BRIDGE: قاعدہ، احترام، ممنوع، اختیاری، التزام are shared words; Urdu غائب (absent) shares the root of الْغِيَابُ; Urdu حاضری (attendance) = الْحُضُورُ.',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · school-rules vocabulary (website)', title: 'Rule, uniform, respect …', ar: 'مُفْرَدَاتُ قَوَاعِدِ الْمَدْرَسَةِ',
    items: [
      { n: 1, ar: 'قَاعِدَةٌ', en: 'rule', tr: 'qā-‘i-da', core: true, tag: 'f.', forms: [{ l: 'pl.', ar: 'قَوَاعِدُ' }] },
      { n: 2, ar: 'اللِّبَاسُ الْمَدْرَسِيُّ', en: 'school uniform', tr: 'al-li-bās al-mad-ra-siyy', core: true, tag: 'm.' },
      { n: 3, ar: 'الاِحْتِرَامُ', en: 'respect', tr: 'al-iḥ-ti-rām', core: true, tag: 'm.' },
      { n: 4, ar: 'الْوَاجِبُ الْمَنْزِلِيُّ', en: 'homework', tr: 'al-wā-jib al-man-zi-liyy', core: true, tag: 'm.' },
      { n: 5, ar: 'الْهَاتِفُ الْمَحْمُولُ', en: 'mobile phone', tr: 'al-hā-tif al-maḥ-mūl', core: true, tag: 'm.', forms: [{ l: 'pl.', ar: 'الْهَوَاتِفُ' }] },
      { n: 6, ar: 'التَّأَخُّرُ · الْغِيَابُ', en: 'lateness · absence', tr: 'at-ta-’akh-khur · al-ghi-yāb', tag: 'm.' },
    ],
    notes: 'SCHOOL-RULES BANK (website, 16). Also: اِلْتِزَامٌ / اِلْتِزَامَاتٌ (obligation), الاِنْضِبَاطُ (discipline), الْغِشُّ (cheating), التَّنَمُّرُ (bullying), رَفْعُ الْيَدِ (raising the hand), الاِسْتِمَاعُ (listening), الإِذْنُ (permission), السُّلُوكُ (behaviour), الْحُضُورُ (attendance — opposite of الْغِيَابُ).',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · must and must not (website)', title: 'Obligation or prohibition?', ar: 'يَجِبُ · لَا يَجُوزُ',
    cols: [{ label: 'Structure', w: 2.9, size: 22 }, { label: 'Example', w: 6.1, size: 22 }, { label: 'Meaning', w: 3.33 }],
    rows: [
      { core: true, cells: [{ ar: '{k|يَجِبُ أَنْ}' }, { ar: 'يَجِبُ أَنْ تَحْتَرِمَ الْمُعَلِّمِينَ.' }, 'must (obligation)'] },
      { core: true, cells: [{ ar: '{e|لَا يَجُوزُ أَنْ}' }, { ar: 'لَا يَجُوزُ أَنْ تَغُشَّ فِي الاِمْتِحَانِ.' }, 'must not (prohibition)'] },
      { cells: [{ ar: 'لَا يَجِبُ أَنْ' }, { ar: 'لَا يَجِبُ أَنْ تَكْتُبَ.' }, 'NOT necessary — not “must not”'] },
      { core: true, cells: [{ ar: 'يَجِبُ أَنْ …' }, { ar: 'تَلْبَسَ اللِّبَاسَ · تُكْمِلَ الْوَاجِبَ · تَرْفَعَ يَدَكَ' }, 'wear uniform · finish homework · raise hand'] },
      { core: true, cells: [{ ar: 'لَا يَجُوزُ أَنْ …' }, { ar: 'تَتَأَخَّرَ · تَرْكُضَ فِي الْمَمَرَّاتِ · تَصْرُخَ' }, 'be late · run in corridors · shout'] },
    ],
    foot: 'Both structures are followed by an + a present-tense verb: learn the whole phrase as one communication pattern.',
    notes: `GRAMMAR PART 1 — website section 3 “Control ‘must’ and ‘must not’”. The 12 website action chunks: تَلْبَسَ اللِّبَاسَ الْمَدْرَسِيَّ · تُحْضِرَ الْهَاتِفَ الْمَحْمُولَ إِلَى الْفَصْلِ · تَحْتَرِمَ الْمُعَلِّمِينَ وَالطُّلَّابَ · تُكْمِلَ الْوَاجِبَ الْمَنْزِلِيَّ · تَرْفَعَ يَدَكَ قَبْلَ الْكَلَامِ · تَسْتَمِعَ إِلَى الْمُعَلِّمِ · تَسْتَأْذِنَ قَبْلَ الْخُرُوجِ · تَتَأَخَّرَ عَنِ الدَّرْسِ · تَغُشَّ فِي الاِمْتِحَانِ · تَتَنَمَّرَ عَلَى الْآخَرِينَ · تَرْكُضَ فِي الْمَمَرَّاتِ · تَصْرُخَ فِي الْفَصْلِ.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · who does the rule address? (website)', title: 'One boy, one girl, a group', ar: 'مَنْ تُخَاطِبُ الْقَاعِدَةُ؟',
    cols: [{ label: 'Audience', w: 2.6 }, { label: 'Must write', w: 4.7, size: 24 }, { label: 'Must not be late', w: 5.03, size: 24 }],
    rows: [
      { core: true, cells: ['One male (-a)', { ar: 'يَجِبُ أَنْ تَكْتُبَ' }, { ar: 'لَا يَجُوزُ أَنْ تَتَأَخَّرَ' }] },
      { cells: ['One female (-ī)', { ar: 'يَجِبُ أَنْ تَكْتُبِ{e|ي}' }, { ar: 'لَا يَجُوزُ أَنْ تَتَأَخَّرِ{e|ي}' }] },
      { cells: ['A group (-ū)', { ar: 'يَجِبُ أَنْ تَكْتُبُ{w|وا}' }, { ar: 'لَا يَجُوزُ أَنْ تَتَأَخَّرُ{w|وا}' }] },
      { cells: ['Sign (noun phrase)', { ar: 'اللِّبَاسُ الْمَدْرَسِيُّ إِلْزَامِيٌّ' }, { ar: 'اِسْتِعْمَالُ الْهَاتِفِ مَمْنُوعٌ' }] },
    ],
    ltr: true,
    foot: 'The modal stays the same — only the action verb changes. Signs: mamnū‘ forbidden · masmūḥ allowed · ilzāmiyy compulsory · ikhtiyāriyy optional.',
    notes: `GRAMMAR PART 2 — website sections 4 “Choose who the rule addresses” and 5 “Read signs and school notices”.
Expand a notice (website): اِسْتِعْمَالُ الْهَاتِفِ مَمْنُوعٌ → لَا يَجُوزُ أَنْ تَسْتَخْدِمَ الْهَاتِفَ.
Short opinion language (website): هَذِهِ الْقَاعِدَةُ عَادِلَةٌ / غَيْرُ عَادِلَةٍ / مُهِمَّةٌ / ضَرُورِيَّةٌ + لِأَنَّ …`,
  },
  F.quickCheck([...bank(6, 'modal', [2, 11]), ...bank(6, 'audience', [1]), ...bank(6, 'notices', [4])], 'website modal laboratory questions 3 and 12, audience check question 2 and notice translator question 5.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me write rules for the class', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Obligation', ar: '{k|يَجِبُ أَنْ} تَلْبَسُوا اللِّبَاسَ الْمَدْرَسِيَّ.', think: 'Group → -ū.' },
      { head: 'Prohibition', ar: '{e|لَا يَجُوزُ أَنْ} تَرْكُضُوا فِي الْمَمَرَّاتِ.', think: 'Must NOT.' },
      { head: 'Reason', ar: 'يَجِبُ أَنْ تَحْتَرِمُوا الْجَمِيعَ لِأَنَّ الاِحْتِرَامَ مُهِمٌّ.', think: 'Rule + li’anna.' },
      { head: 'Opinion', ar: 'هَذِهِ الْقَاعِدَةُ عَادِلَةٌ لِأَنَّهَا تَحْمِي الطُّلَّابَ.', think: 'Judge it.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'MUST', e: 'MUST NOT' },
    model: '{k|يَجِبُ أَنْ} تَلْبَسُوا اللِّبَاسَ الْمَدْرَسِيَّ. {e|لَا يَجُوزُ أَنْ} تَرْكُضُوا فِي الْمَمَرَّاتِ. {k|يَجِبُ أَنْ} تَحْتَرِمُوا الْجَمِيعَ لِأَنَّ الاِحْتِرَامَ مُهِمٌّ. {e|لَا يَجُوزُ أَنْ} تَتَنَمَّرُوا عَلَى الْآخَرِينَ لِأَنَّ كُلَّ طَالِبٍ يَحْتَاجُ إِلَى الأَمَانِ.',
    modelEn: 'You must wear the school uniform. You must not run in the corridors. You must respect everyone because respect is important. You must not bully others because every student needs safety.',
    notes: 'I DO (3 min) — the website listening announcement as a model (addressing a group). Then change one rule for one boy and one girl on the board: تَلْبَسَ / تَلْبَسِي / تَلْبَسُوا.',
  },
  F.gameSlide({ ...game, title: 'Visual game — Rules', items: [game.items[1], game.items[2], game.items[3]] }, {
    title: 'Must or must not? Match the picture',
    en: ['Phone use in the lesson is not allowed.', 'We must arrive on time.', 'Running in the corridors is not allowed.'],
    icons: [[['fa6', 'FaMobileScreen', '5A6472'], ['fa6', 'FaBan', 'B83227']], [['fa6', 'FaClock', '1D5FBF'], ['fa6', 'FaCircleCheck', '1E6B52']], [['fa6', 'FaPersonRunning', '5A6472'], ['fa6', 'FaBan', 'B83227']]],
    labels: ['phone + no', 'clock + tick', 'running + no'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Note the “we” form نَصِلَ and the noun form after لَا يَجُوزُ (اسْتِخْدَامُ الهَاتِفِ، الجَرْيُ) — both accepted patterns. Other cards: نُحْضِرَ الكُتُبَ، نَحْتَرِمَ الآخَرِينَ، نُكْمِلَ الوَاجِبَ.',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website “School Rules Mission”', title: 'Complete the rules mission', ar: 'مُهِمَّةُ قَوَاعِدِ الْمَدْرَسَةِ',
    seed: 17,
    questions: [rounds[3], rounds[4], rounds[6], rounds[8], rounds[12]],
    side: { kind: 'core', label: 'CORE', text: 'must = yajibu an\nmust not = lā yajūzu an\nboy -a · girl -ī · group -ū' },
    answerSlide: { min: 0, eyebrow: 'We do · Mission answers', title: 'Mission: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 14 School Rules Mission rounds (female lateness, class exam rule, sign, raising the hand, not necessary). The other 9 are homework.',
    answerNotes: 'After each answer ask: must or must not? Who is addressed?',
  },
  F.repairSlide(site, ['Not necessary or must not?', 'To a girl: which ending?', 'What is missing after yajibu?']),
  F.listening(site, {
    coreTip: 'Listen twice.\nTwo columns: MUST · MUST NOT.',
    routes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5.',
    gloss: [
      ['إِعْلَانٌ إِلَى جَمِيعِ الطُّلَّابِ. فِي مَدْرَسَتِنَا، يَجِبُ أَنْ تَلْبَسُوا اللِّبَاسَ الْمَدْرَسِيَّ، وَأَنْ تَحْضُرُوا فِي الْوَقْتِ الْمُحَدَّدِ.', 'An announcement to all students. In our school you must wear the school uniform and arrive at the set time.'],
      ['لَا يَجُوزُ أَنْ تُحْضِرُوا الْهَوَاتِفَ الْمَحْمُولَةَ إِلَى الْفُصُولِ، وَلَا يَجُوزُ أَنْ تَرْكُضُوا فِي الْمَمَرَّاتِ.', 'You must not bring mobile phones to the classrooms, and you must not run in the corridors.'],
      ['يَجِبُ أَنْ تَحْتَرِمُوا الْمُعَلِّمِينَ وَزُمَلَاءَكُمْ لِأَنَّ الاِحْتِرَامَ مُهِمٌّ.', 'You must respect the teachers and your classmates because respect is important.'],
      ['فِي الاِمْتِحَانَاتِ، لَا يَجُوزُ أَنْ تَغُشُّوا. وَقَبْلَ الْكَلَامِ فِي الْفَصْلِ، يَجِبُ أَنْ تَرْفَعُوا أَيْدِيَكُمْ.', 'In exams you must not cheat. And before speaking in class, you must raise your hands.'],
      ['شُكْرًا لِتَعَاوُنِكُمْ.', 'Thank you for your cooperation.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · Text A · school notice (website)', title: 'Al-Nour School rules', ar: 'قَوَاعِدُ مَدْرَسَةِ النُّورِ',
    lines: [
      ['يَجِبُ أَنْ يَحْضُرَ الطُّلَّابُ قَبْلَ السَّاعَةِ الثَّامِنَةِ.', 'Students must arrive before 8:00'],
      ['يَجِبُ أَنْ يَلْبَسُوا اللِّبَاسَ الْمَدْرَسِيَّ.', 'They must wear the uniform'],
      ['لَا يَجُوزُ أَنْ يَسْتَخْدِمُوا الْهَوَاتِفَ فِي الْفُصُولِ.', 'No phones in classrooms'],
      ['لَا يَجُوزُ أَنْ يَرْكُضُوا فِي الْمَمَرَّاتِ.', 'No running in corridors'],
      ['يَجِبُ أَنْ يَحْتَرِمُوا الْجَمِيعَ.', 'They must respect everyone'],
    ],
    notes: 'TEXT A (website, complete). Purpose: to instruct. Notice the “they” forms (يَحْضُرَ، يَلْبَسُوا، يَسْتَخْدِمُوا) — the notice talks ABOUT students rather than TO them. Recognition only.',
  },
  {
    type: 'glossed', stage: 'wedo', flex: true, eyebrow: 'We do · reading · Text B · Salma’s view (website) · FLEX / Stretch', title: 'Are the rules fair?', ar: 'رَأْيُ سَلْمَى',
    lines: [
      ['فِي رَأْيِي، مُعْظَمُ قَوَاعِدِ مَدْرَسَتِي عَادِلَةٌ.', 'Most rules are fair'],
      ['مَنْعُ التَّنَمُّرِ ضَرُورِيٌّ لِأَنَّ كُلَّ طَالِبٍ يَحْتَاجُ إِلَى الأَمَانِ.', 'No bullying: necessary — everyone needs safety'],
      ['وَأُوَافِقُ عَلَى قَاعِدَةِ الْهَاتِفِ لِأَنَّ الدَّرْسَ يَحْتَاجُ إِلَى التَّرْكِيزِ.', 'Agrees with the phone rule — lessons need focus'],
      ['وَلَكِنِّي لَا أَرَى أَنَّ اللِّبَاسَ الْمَدْرَسِيَّ ضَرُورِيٌّ دَائِمًا.', 'But uniform is not always necessary'],
      ['أُفَضِّلُ أَنْ يَكُونَ اللِّبَاسُ مُرِيحًا وَمُنَاسِبًا.', 'Prefers comfortable, suitable clothing'],
    ],
    notes: 'TEXT B (website, complete) — an EVALUATION, not an instruction. Stretch model for the balanced opinion (… وَلَكِنِّي لَا أَرَى أَنَّ …). Discuss respectfully: which rules do you think are fair, and why?',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions (website)', title: 'Notice or opinion?', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 4,
    questions: bank(6, 'reading', [0, 1, 7, 9, 11]),
    side: { kind: 'info', head: 'PURPOSE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Text A instructs.\nText B evaluates.\nFind the exact evidence.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading questions 1, 2, 8, 10 and 12. The other 7 are homework.',
    answerNotes: 'A student reads aloud the evidence phrase (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'قُلْ قَاعِدَتَيْنِ لِطَالِبٍ جَدِيدٍ.' },
      { route: 'develop', ar: 'قُولِي ثَلَاثَ قَوَاعِدَ لِطَالِبَةٍ جَدِيدَةٍ.' },
      { route: 'develop', ar: 'أَنْتَ الْمُدِيرُ: قُلْ قَاعِدَتَيْنِ لِكُلِّ الطُّلَّابِ.' },
      { route: 'stretch', ar: 'مَا قَاعِدَةٌ عَادِلَةٌ؟ وَمَا قَاعِدَةٌ تُرِيدُ أَنْ تُغَيِّرَهَا؟ وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'يَجِبُ أَنْ ______ . لَا يَجُوزُ أَنْ ______ .' },
      { route: 'develop', ar: 'يَجِبُ أَنْ تَسْتَمِعِي … · لَا يَجُوزُ أَنْ تَتَأَخَّرِي …' },
      { route: 'develop', ar: 'يَجِبُ أَنْ ______ ـُوا … لِأَنَّ ______ .' },
      { route: 'stretch', ar: 'هَذِهِ الْقَاعِدَةُ عَادِلَةٌ لِأَنَّ … ، وَلَكِنَّ ______ .' },
    ],
    modelEn: ['What is the most important rule in your school?', 'We must not bully others because every student needs safety.'],
    notes: `WEBSITE SPEAKING STUDIO “Lead a school-rules conversation” — speak as a headteacher, a new student or a student representative. Prompts (website):
${prompts.map((r) => `• ${r.title}: ${r.detail}`).join('\n')}
Website checklist (1–6): يَجِبُ أَنْ · لَا يَجُوزُ أَنْ · the verb matches the listener or group · one reason with لِأَنَّ · a fair, respectful judgement · one follow-up.`,
  }),
  F.routesSlide(site, {
    core: { amount: '4 rules', how: 'Two yajibu an and two lā yajūzu an rules for one male listener.' },
    develop: { amount: '8 rules', how: 'All eight rules and three reasons.' },
    stretch: { amount: '8 rules + opinion', how: 'Vary the audience forms and evaluate one rule with wa-lākin.' },
  }),
  F.framesSlide({
    core: [
      { en: 'You must wear the school uniform.', ar: 'يَجِبُ أَنْ تَلْبَسَ اللِّبَاسَ الْمَدْرَسِيَّ.' },
      { en: 'You must complete the homework.', ar: 'يَجِبُ أَنْ تُكْمِلَ الْوَاجِبَ الْمَنْزِلِيَّ.' },
      { en: 'You must not be late for the lesson.', ar: 'لَا يَجُوزُ أَنْ تَتَأَخَّرَ عَنِ الدَّرْسِ.' },
      { en: 'You must not run in the corridors.', ar: 'لَا يَجُوزُ أَنْ تَرْكُضَ فِي الْمَمَرَّاتِ.' },
      { en: 'Using the phone is forbidden.', ar: 'اِسْتِعْمَالُ الْهَاتِفِ مَمْنُوعٌ.' },
    ],
    develop: [
      { en: 'You (f.) must listen to the teacher.', ar: 'يَجِبُ أَنْ تَسْتَمِعِي إِلَى الْمُعَلِّمِ.' },
      { en: 'You (all) must not cheat.', ar: 'لَا يَجُوزُ أَنْ تَغُشُّوا.' },
      { en: '… because respect is important.', ar: '… لِأَنَّ الاِحْتِرَامَ مُهِمٌّ.' },
      { en: 'This rule is fair because it protects students.', ar: 'هَذِهِ الْقَاعِدَةُ عَادِلَةٌ لِأَنَّهَا تَحْمِي الطُّلَّابَ.' },
      { en: 'It is not necessary to …', ar: 'لَا يَجِبُ أَنْ …' },
    ],
    bank: ['يَجِبُ أَنْ', 'لَا يَجُوزُ أَنْ', 'قَاعِدَةٌ', 'الاِحْتِرَامُ', 'الْوَاجِبُ', 'اللِّبَاسُ الْمَدْرَسِيُّ', 'مَمْنُوعٌ', 'مَسْمُوحٌ', 'عَادِلَةٌ', 'ضَرُورِيَّةٌ', 'لِأَنَّ', 'وَلَكِنْ'],
  }),
  F.modelSlide(site,
    'Our school rules: you must wear the school uniform and arrive at the set time. You must not bring mobile phones to classrooms, and you must not run in the corridors. You must respect the teachers because respect is important. You must not cheat in the exam because cheating is unfair. In my opinion these rules are fair.',
    ['must (group)', 'must not', 'reasons', 'opinion'],
    'Built from the website announcement (addressed to a group) with a reason and an opinion added. Stretch: add Salma’s balanced view.'),
  F.selfCheckSlide([
    { route: 'core', text: 'I wrote must and must-not rules.' },
    { route: 'core', text: 'I did not confuse lā yajibu with lā yajūzu.' },
    { route: 'develop', text: 'My verbs match the audience (-a / -ī / -ū).' },
    { route: 'develop', text: 'I gave three reasons.' },
    { route: 'stretch', text: 'I judged one rule respectfully.' },
  ]),
  F.exitTicket(bank(6, 'finalCheck', [2, 5, 6]), 16),
  F.prepSlide({
    ...NEXT,
    words: [['أَسْتَيْقِظُ', 'I wake up', '—'], ['أَذْهَبُ إِلَى الْمَدْرَسَةِ', 'I go to school', '—'], ['أَصِلُ', 'I arrive', '—'], ['أَعُودُ إِلَى الْبَيْتِ', 'I return home', '—'], ['أَوَّلًا · ثُمَّ', 'first · then', '—']],
    questionEn: 'What time do you wake up on a school day?',
    questionAr: 'مَتَى تَسْتَيْقِظُ؟',
    homework: {
      core: 'Website F4-L06: the School Rules Mission (14) and the picture game.',
      develop: 'Website rule builder: four rules, one changed audience form, two reasons.',
      stretch: 'Write a titled eight-rule rulebook with three reasons and one balanced opinion.',
    },
    wordsSource: 'The five words come from the website F4-L07 school-day routine bank.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: must = yajibu an · must not = lā yajūzu an · not necessary = lā yajibu an.' }),
];

module.exports = { meta, slides };
