'use strict';
/* D5-L02 · Sport — Vocabulary, Famous Athletes and Cultural Context — website: Pathways › Development › D5 › D5-L02 (results فَازَ بِـ / فَازَ عَلَى / خَسِرَ / تَعَادَلَ,
 * rules يَجِبُ عَلَى … أَنْ · يُسْمَحُ بِـ · مَمْنُوعٌ, admiration يُعْجِبُنِي · أُعْجَبُ بِـ … لِأَنَّهُ / لِأَنَّهَا).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing and visual game used as published; one quiz distractor
 * replaced (it differed only in a vowel ending), one missing vowel added in the listening script (المَاضِي), English added to the model sentences. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D5')({
  n: 2, fileTitle: 'Sport_Famous_Athletes', chip: 'Vocabulary',
  title: 'Sport — Vocabulary, Famous Athletes and Cultural Context', arabic: 'الرِّيَاضَةُ وَالرِّيَاضِيُّونَ المَشْهُورُونَ',
  focus: 'Name sports, report results (فَازَ بِالبُطُولَةِ · فَازَ عَلَى الفَرِيقِ · خَسِرَ · تَعَادَلَ), state rules (يَجِبُ عَلَى … أَنْ · مَمْنُوعٌ) and say why you admire an athlete (أُعْجَبُ بِـ … لِأَنَّهُ).',
  icon: 'FaTrophy', iconSet: 'fa6',
});

const site = D.site('D5-L02');
const quiz = site.grammar.quiz.map((it, i) => (i === 5 ? { ...it, options: [it.options[0], 'يُعْجِبُنِي عَلَى هٰذَا اللَّاعِبِ كَثِيرًا.', it.options[2]] } : it));
const mfp = (f, pl) => ({ tag: 'm · f · pl', forms: [{ l: 'pl.', ar: pl }, { l: 'f.', ar: f }] });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D5-L02', {
  support: `• Core: 10 sports + one result sentence (فَازَ فَرِيقُنَا) + one admiration sentence (يُعْجِبُنِي هٰذَا اللَّاعِبُ). Develop: فَازَ بِـ vs فَازَ عَلَى, a rule with يَجِبُ عَلَى … أَنْ, أُعْجَبُ بِـ + reason. Stretch: the website ~70-word athlete profile with both admiration structures and a contrast (لٰكِنَّهُ خَسِرَ … · وَمَعَ ذٰلِكَ).
• فَازَ · خَسِرَ · تَعَادَلَ are PAST verbs: learn them as chunks today; D5-L03 teaches the full past-tense system.
• Cultural context: invite students to name Arab / Muslim athletes they admire (football, squash, athletics, weightlifting) — any athlete works for the writing task.`,
  teach: 'Results, rules and admiration — three fixed patterns.',
  wedo: 'Sort the structures, fix preposition slips, then a match report.',
  next: { nextCode: 'D5-L03', nextTitle: 'The Past Tense — Form I Regular Singular Verbs', nextAr: 'الفِعْلُ المَاضِي — المُفْرَدُ' },
  objectives: ['Name fifteen sports and use each with its verb.', 'Report a result with فَازَ بِـ / فَازَ عَلَى / خَسِرَ / تَعَادَلَ.', 'State a rule with يَجِبُ عَلَى … أَنْ · يُسْمَحُ بِـ · مَمْنُوعٌ.', 'Say why you admire an athlete with يُعْجِبُنِي / أُعْجَبُ بِـ + لِأَنَّهُ / لِأَنَّهَا.'],
  rulesAr: 'النَّتَائِجُ وَالقَوَاعِدُ وَالإِعْجَابُ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does مُبَارَاةٌ mean?', ['a match', 'a team', 'a championship'], 'Prepared at home (D5-L01).'),
      q('What does فَازَ بِـ mean?', ['he won (a prize)', 'he lost', 'he drew'], 'Prepared at home (D5-L01).'),
      q('What does بُطُولَةٌ mean?', ['a championship', 'a player', 'a goal'], 'Prepared at home (D5-L01).'),
      q('Complete: ___ كُرَةَ القَدَمِ مَرَّتَيْنِ فِي الأُسْبُوعِ.', ['أَلْعَبُ', 'أَعْزِفُ', 'أَسْتَمِعُ'], 'D5-L01: collocation.'),
      q('Complete: أُفَضِّلُ السِّبَاحَةَ ___ الجَرْيِ.', ['عَلَى', 'إِلَى', 'مِنْ'], 'D5-L01: preference.'),
    ],
    keyIdea: { text: 'You win a PRIZE with bi- and you beat a TEAM with ʿalā.', ar: 'فَازَ {w|بِـ}البُطُولَةِ · فَازَ {k|عَلَى} الفَرِيقِ الضَّيْفِ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D5-L01. Questions 4–5 retrieve the D5-L01 collocation and preference structures.',
  },
  routes: {
    core: ['I can name 10 sports.', 'I can say a team won or lost.'],
    develop: ['I can use فَازَ بِـ and فَازَ عَلَى correctly.', 'I can state a rule with يَجِبُ عَلَى … أَنْ.'],
    stretch: ['I can write an athlete profile with a reason.', 'I can contrast a win and a loss.'],
  },
  bridge: [
    { ar: 'مُقَابَلَةٌ / مُبَارَاةٌ', urdu: 'مقابلہ', tr: 'muqābla', en: 'Urdu: match, contest · Arabic match = مُبَارَاةٌ' },
    { ar: 'كُشْتِي → مُصَارَعَةٌ', urdu: 'کشتی', tr: 'kushtī', en: 'wrestling (Arabic: مُصَارَعَةٌ)' },
    { ar: 'بَطَلٌ', urdu: 'بطل', tr: 'baṭal', en: 'champion, hero' },
    { ar: 'مَشْهُورٌ', urdu: 'مشہور', tr: 'mashhūr', en: 'famous' },
    { ar: 'مُتَوَاضِعٌ', urdu: 'متواضع / عاجز', tr: 'mutawāziʿ', en: 'modest, humble' },
  ],
  bridgeNotes: 'URDU BRIDGE: مشہور، متواضع are shared; بطل is known from Islamic texts. CAREFUL: Urdu مقابلہ = a match / contest, but in Arabic a match is مُبَارَاةٌ and مُقَابَلَةٌ is an interview. فَازَ is related to Urdu فائز (successful) and فوز (victory).',
  core: ['كُرَةُ القَدَمِ', 'كُرَةُ السَّلَّةِ', 'السِّبَاحَةُ', 'التِّنِسُ', 'فَرِيقٌ', 'مُبَارَاةٌ', 'فَازَ بِـ', 'فَازَ عَلَى', 'خَسِرَ', 'لَاعِبٌ / لَاعِبُونَ', 'يُعْجِبُنِي', 'مَشْهُورٌ'],
  forms: {
    'لَاعِبٌ / لَاعِبُونَ': mfp('لَاعِبَةٌ', 'لَاعِبُونَ / لَاعِبَاتٌ'), 'مُتَوَاضِعٌ': mfp('مُتَوَاضِعَةٌ', 'مُتَوَاضِعُونَ'), 'مُجْتَهِدٌ': mfp('مُجْتَهِدَةٌ', 'مُجْتَهِدُونَ'),
    'مَشْهُورٌ': mfp('مَشْهُورَةٌ', 'مَشْهُورُونَ'), 'بَطَلٌ / بَطَلَةٌ': mfp('بَطَلَةٌ', 'أَبْطَالٌ / بَطَلَاتٌ'), 'فَرِيقٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'فِرَقٌ' }] },
    'خَسِرَ': { tag: 'he · she', forms: [{ l: 'she', ar: 'خَسِرَتْ' }] }, 'تَعَادَلَ': { tag: 'he · she', forms: [{ l: 'she', ar: 'تَعَادَلَتْ' }] },
  },
  vocabNotes: {
    0: 'Sports. Most take يَلْعَبُ (ball games) or يُمَارِسُ (activities) — D5-L01. Notice the iḍāfa: كُرَةُ القَدَمِ = “ball of the foot”.',
    1: 'Matches and results. فَازَ / خَسِرَ / تَعَادَلَ are PAST verbs (he won / lost / drew); for “she”, add -at: فَازَتْ · خَسِرَتْ.',
    2: 'Rules and admiration. Cards show m. / f. / pl. for people and adjectives: لَاعِبٌ · لَاعِبَةٌ · لَاعِبُونَ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · reporting results (website rules 1–2)', title: 'Won, lost or drew?', ar: 'النَّتَائِجُ',
      cols: [{ label: 'Verb', w: 2.6, size: 22 }, { label: 'Example (website)', w: 7.0, size: 22 }, { label: 'Meaning', w: 2.73 }],
      rows: [
        { core: true, cells: ['فَازَ بِـ', P('فَازَ {w|بِالمِيدَالِيَةِ} الذَّهَبِيَّةِ.', 'He won the gold medal.'), 'won a PRIZE'] },
        { core: true, cells: ['فَازَ عَلَى', P('فَازَ فَرِيقُنَا {k|عَلَى} الفَرِيقِ الضَّيْفِ.', 'Our team beat the visiting team.'), 'beat an OPPONENT'] },
        { core: true, cells: ['خَسِرَ', P('خَسِرَ الفَرِيقُ المُبَارَاةَ النِّهَائِيَّةَ.', 'The team lost the final.'), 'lost'] },
        { cells: ['تَعَادَلَ', P('تَعَادَلَ الفَرِيقَانِ فِي النِّقَاطِ.', 'The two teams drew on points.'), 'drew (two sides)'] },
        { cells: ['فَازَتْ', P('فَازَتِ البَطَلَةُ بِالمِيدَالِيَةِ الفِضِّيَّةِ.', 'The (female) champion won the silver medal.'), 'she won'] },
      ],
      ltr: true,
      foot: 'Scores: a 2–1 win is “by two goals to one” (bi-hadafayni muqābila hadafin wāḥid) — see the listening.',
      notes: `GRAMMAR PART 1 — website rules “Reporting a win” (بِـ introduces what was won; عَلَى introduces who was beaten; both are followed by the genitive) and “Losing and drawing” (تَعَادَلَ is Form VI, a mutual action, so its subject is usually dual or plural). Website teaching point: “You are already reading past tense” — learn them as chunks now.
Website mistake: فَازَ عَلَى البُطُولَةِ ✗ → فَازَ بِالبُطُولَةِ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · rules and admiration (website rules 3–4) · Develop / Stretch', title: 'Rules and the athletes we admire', ar: 'القَوَاعِدُ وَالإِعْجَابُ',
      cards: [
        { chip: 'RULE · DEVELOP', color: '1D5FBF', head: 'يَجِبُ عَلَى … أَنْ', big: 'يَجِبُ عَلَى اللَّاعِبِينَ أَنْ يَحْتَرِمُوا الحَكَمَ.', en: 'Players must respect the referee.', clue: 'ʿalā + -īna; an + -ū.' },
        { chip: 'FORBIDDEN · DEVELOP', color: 'C0386B', head: 'مَمْنُوعٌ لَمْسُ …', big: 'مَمْنُوعٌ لَمْسُ الكُرَةِ بِاليَدَيْنِ.', en: 'Touching the ball with the hands is forbidden.', clue: 'A verbal noun.' },
        { chip: 'ADMIRE · CORE / STRETCH', color: '6B4C9A', head: 'يُعْجِبُنِي · أُعْجَبُ بِـ', big: 'أُعْجَبُ بِهٰذِهِ البَطَلَةِ لِأَنَّهَا مُجْتَهِدَةٌ.', en: 'I admire this champion because she is hard-working.', clue: 'Reason agrees.' },
      ],
      error: { text: 'Website mistake: أُعْجَبُ always needs bi-.', pairs: [['أُعْجَبُ بِاللَّاعِبِ.', 'أُعْجَبُ اللَّاعِبَ.']] },
      notes: `GRAMMAR PART 2 — website rules “Stating a rule” (the person obliged follows عَلَى in the genitive; the action follows أَنْ in the subjunctive; مَمْنُوعٌ introduces a prohibition with a verbal noun) and “Expressing admiration” (with يُعْجِبُنِي the admired person is the grammatical SUBJECT — يُعْجِبُنِي هٰذَا اللَّاعِبُ; أُعْجَبُ is passive in form and fixed with بِـ).
Core: يُعْجِبُنِي + name is enough. Website mistake: يَجِبُ عَلَى اللَّاعِبُونَ أَنْ يَتَدَرَّبُونَ ✗ → اللَّاعِبِينَ … يَتَدَرَّبُوا.`,
    },
  ],
  quick: [0, 1, 5, 7],
  rest: [2, 3, 4, 6],
  ido: {
    title: 'Watch me describe an athlete I admire',
    steps: [
      { head: 'Admire', ar: '{e|يُعْجِبُنِي} هٰذَا اللَّاعِبُ', think: 'Player = subject.' },
      { head: 'Prize', ar: 'فَازَ {w|بِـ}البُطُولَةِ', think: 'Prize: bi-.' },
      { head: 'Opponent', ar: 'فَازَ {k|عَلَى} فِرَقٍ قَوِيَّةٍ', think: 'Opponent: ʿalā.' },
      { head: 'Reason', ar: '{e|أُعْجَبُ بِهِ} لِأَنَّهُ مُتَوَاضِعٌ', think: 'He: -hu.' },
    ],
    legend: ['e', 'w', 'k'], legendLabels: { e: 'ADMIRATION', w: 'PRIZE', k: 'OPPONENT' },
    model: '{e|يُعْجِبُنِي} لَاعِبُ كُرَةِ القَدَمِ فِي فَرِيقِنَا الوَطَنِيِّ كَثِيرًا. فِي المَوْسِمِ المَاضِي فَازَ {w|بِالبُطُولَةِ}، وَفَازَ فَرِيقُهُ {k|عَلَى} فِرَقٍ قَوِيَّةٍ. هُوَ مُتَوَاضِعٌ وَمُجْتَهِدٌ، وَ{e|أُعْجَبُ بِهِ} لِأَنَّهُ يَحْتَرِمُ مُنَافِسِيهِ.',
    modelEn: 'I really admire the footballer in our national team. Last season he won the championship, and his team beat strong teams. He is modest and hard-working, and I admire him because he respects his opponents.',
    notes: 'I DO (3 min) — think aloud with the website writing model: “Prize or opponent? bi- or ʿalā? Is the athlete he or she?” Then repeat the reason for a female athlete: أُعْجَبُ بِهَا لِأَنَّهَا مُتَوَاضِعَةٌ.',
  },
  patternEn: ['he won the gold medal', 'the players must train', 'I admire his modesty'],
  game: {
    title: 'Which sport? Match the picture',
    pick: [0, 1, 5],
    en: ['I play football.', 'I play basketball.', 'I run three times a week.'],
    icons: [[['fa6', 'FaFutbol', '1E2B3C']], [['fa6', 'FaBasketball', 'D2691E']], [['fa6', 'FaPersonRunning', '1E7B4F'], ['fa6', 'FaStopwatch', '5A6472']]],
    labels: ['a football', 'a basketball', 'a runner'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Then upgrade each: add a result (فَازَ فَرِيقِي …) or a frequency. Other website cards: tennis, cycling and swimming (the swimming card is printed أَمَارِسُ on the website — the correct form is أُمَارِسُ).',
  },
  sorterNotes: 'Then make one sentence from each column about a sport you follow.',
  patch: {
    grammar: { ...site.grammar, quiz },
    listening: { script: site.listening.script.replace('الماضِي', 'المَاضِي') },
  },
  patchNote: 'one quiz distractor replaced (it differed only in a vowel ending), one missing vowel added in the listening script and English added to the model sentences.',
  hints: ['A prize or an opponent?', 'After ʿalā: -ūna or -īna?', 'Which preposition after uʿjabu?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nThree results: won · lost · drew.',
  listenRoutes: 'Core: questions 1–3 (the three results). Develop / Stretch: all 5 — and the score (2–1).',
  gloss: [
    ['فِي المُبَارَاةِ النِّهَائِيَّةِ أَمْسِ، فَازَ فَرِيقُنَا عَلَى الفَرِيقِ الضَّيْفِ', 'In the final yesterday, our team beat the visiting team'],
    ['بِهَدَفَيْنِ مُقَابِلَ هَدَفٍ وَاحِدٍ.', 'by two goals to one.'],
    ['وَفِي الأُسْبُوعِ المَاضِي خَسِرَ الفَرِيقُ مُبَارَاتَهُ، وَقَبْلَ ذٰلِكَ تَعَادَلَ الفَرِيقَانِ فِي النِّقَاطِ.', 'Last week the team lost its match, and before that the two teams drew on points.'],
    ['أَمَّا أَنَا فَيُعْجِبُنِي لَاعِبُنَا الجَدِيدُ كَثِيرًا، وَأُعْجَبُ بِتَوَاضُعِهِ وَاجْتِهَادِهِ،', 'As for me, I really like our new player, and I admire his modesty and hard work,'],
    ['لِأَنَّهُ يَتَدَرَّبُ يَوْمِيًّا رَغْمَ نَجَاحِهِ الكَبِيرِ. وَقَدْ فَازَ بِمِيدَالِيَةٍ ذَهَبِيَّةٍ فِي بُطُولَةٍ كَبِيرَةٍ.', 'because he trains every day despite his great success. He has won a gold medal in a big championship.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَنِ الرِّيَاضِيُّ الَّذِي يُعْجِبُكَ؟ وَلِمَاذَا؟' },
      { route: 'develop', ar: 'مَاذَا فَازَ بِهِ فِي المَوْسِمِ المَاضِي؟' },
      { route: 'stretch', ar: 'هَلْ تُفَضِّلُ الرِّيَاضَةَ الفَرْدِيَّةَ أَمِ الجَمَاعِيَّةَ؟ لِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'يُعْجِبُنِي ______ لِأَنَّهُ / لِأَنَّهَا ______ .' },
      { route: 'develop', ar: 'فَازَ / فَازَتْ بِـ ______ ، وَفَازَ عَلَى ______ .' },
      { route: 'stretch', ar: 'أُفَضِّلُ الرِّيَاضَةَ ______ عَلَى ______ لِأَنَّ ______ .' },
    ],
    modelEn: ['Which athlete do you admire?', 'I admire a famous player in our national team.'],
    notes: 'Website prompts and model (four lines: question → name → achievement → result + admiration + reason). Website task: “my sporting hero”. To a girl: يُعْجِبُكِ · تُفَضِّلِينَ.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Three sports with their verbs + two results (won / lost).' },
    develop: { amount: '50–60 words', how: 'An athlete profile with fāza bi-, a rule and uʿjabu bi- … li-anna.' },
    stretch: { amount: '≈ 70 words', how: 'Website task: sport, achievement, two adjectives, both admiration structures and a contrast.' },
  },
  frames: {
    core: [
      { en: 'I admire … a lot.', ar: 'يُعْجِبُنِي ______ كَثِيرًا.' },
      { en: 'He / she plays …', ar: 'يَلْعَبُ / تَلْعَبُ ______ .' },
      { en: 'He / she won the …', ar: 'فَازَ / فَازَتْ بِـ ______ .' },
      { en: 'His / her team beat …', ar: 'فَازَ فَرِيقُهُ / فَرِيقُهَا عَلَى ______ .' },
    ],
    develop: [
      { en: 'He is modest and hard-working.', ar: 'هُوَ مُتَوَاضِعٌ وَمُجْتَهِدٌ. / هِيَ مُتَوَاضِعَةٌ وَمُجْتَهِدَةٌ.' },
      { en: 'I admire him / her because …', ar: 'أُعْجَبُ بِهِ / بِهَا لِأَنَّهُ / لِأَنَّهَا ______ .' },
      { en: 'But he / she lost …', ar: 'لٰكِنَّهُ / لٰكِنَّهَا خَسِرَ / خَسِرَتْ ______ .' },
      { en: 'Players must …', ar: 'يَجِبُ عَلَى اللَّاعِبِينَ أَنْ ______ .' },
    ],
    bank: ['يُعْجِبُنِي', 'أُعْجَبُ بِـ', 'فَازَ بِـ', 'فَازَ عَلَى', 'خَسِرَ', 'تَعَادَلَ', 'بُطُولَةٌ', 'مِيدَالِيَةٌ ذَهَبِيَّةٌ', 'مُتَوَاضِعٌ', 'مُجْتَهِدٌ', 'مَشْهُورٌ', 'يَجِبُ عَلَى … أَنْ'],
  },
  stretch: [
    ['فِي المَوْسِمِ المَاضِي', 'last season'],
    ['يَحْتَرِمُ مُنَافِسِيهِ', 'he respects his opponents'],
    ['رَغْمَ نَجَاحِهِ الكَبِيرِ', 'despite his great success'],
    ['العَمَلُ الجَمَاعِيُّ أَهَمُّ مِنَ الإِنْجَازِ الفَرْدِيِّ', 'teamwork matters more than individual achievement'],
    ['وَمَعَ ذٰلِكَ …', 'and yet …'],
  ],
  modelEn: 'I really admire the footballer in our national team. Last season he won the championship, and his team beat strong teams. But he lost the final in another championship. He is modest and hard-working, and I admire him because he respects his opponents. In my opinion, players must train regularly.',
  find: ['both admiration structures', 'فَازَ بِـ and فَازَ عَلَى', 'two personality adjectives', 'a reason with لِأَنَّهُ'],
  modelNotes: 'Website writing model. Evidence: يُعْجِبُنِي … · فَازَ بِالبُطُولَةِ · فَازَ فَرِيقُهُ عَلَى فِرَقٍ قَوِيَّةٍ · خَسِرَ المُبَارَاةَ · مُتَوَاضِعٌ وَمُجْتَهِدٌ · أُعْجَبُ بِهِ لِأَنَّهُ … · يَجِبُ عَلَى اللَّاعِبِينَ أَنْ يَتَدَرَّبُوا.',
  selfCheck: [
    { route: 'core', text: 'I named the sport with the right verb.' },
    { route: 'core', text: 'I reported a result (won / lost).' },
    { route: 'develop', text: 'I used bi- for the prize and ʿalā for the opponent.' },
    { route: 'develop', text: 'My adjectives agree with the athlete (m. / f.).' },
    { route: 'stretch', text: 'I used both يُعْجِبُنِي and أُعْجَبُ بِـ with a reason.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['يَلْعَبُ لِفَرِيقٍ', 'plays for a team'], ['أُورُوبِّيٍّ', 'European'], ['بِجَوَائِزَ عَدِيدَةٍ', 'many prizes'], ['يُعْتَبَرُ', 'is considered'], ['أَفْضَلِ', 'the best'],
    ['المَوْسِمِ المَاضِي', 'last season'], ['سَجَّلَ أَهْدَافًا', 'scored goals'], ['المُبَارَاةَ النِّهَائِيَّةَ', 'the final'], ['رَغْمَ', 'despite'], ['العَمَلَ الجَمَاعِيَّ', 'teamwork'],
  ],
  prep: {
    words: [['الفِعْلُ المَاضِي', 'the past-tense verb', '—'], ['ذَهَبَ', 'he went', 'ذَهَبْتُ I went'], ['لَعِبَ', 'he played', 'لَعِبْتُ I played'], ['أَمْسِ', 'yesterday', '—'], ['الأُسْبُوعَ المَاضِيَ', 'last week', '—']],
    questionEn: 'What did you do last weekend? Try one sentence with ذَهَبْتُ or لَعِبْتُ.',
    questionAr: 'فِي نِهَايَةِ الأُسْبُوعِ المَاضِي …',
    homework: {
      core: 'Learn 12 sports words; write five sentences from the frames.',
      develop: 'A 50–60-word athlete profile with فَازَ بِـ and أُعْجَبُ بِـ.',
      stretch: 'Website writing task: ≈ 70 words, both admiration structures and a contrast.',
    },
    wordsSource: 'The five words come from the website D5-L03 vocabulary (the past tense).',
  },
  remember: 'Remember: فَازَ بِـ the prize · فَازَ عَلَى the opponent · أُعْجَبُ بِـ the person — and give a reason that agrees.',
});

module.exports = { meta, slides };
