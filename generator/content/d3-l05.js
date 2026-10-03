'use strict';
/* D3-L05 · Education and Training — Routes to a Career — website: Pathways › Development › D3 › D3-L05 (لِكَيْ أُصْبِحَ … يَجِبُ أَنْ …, conditional إِذَا + past, فَـ + future, comparison أَفْضَلُ مِنْ / أَكْثَرُ عَمَلِيَّةً مِنْ, balanced evaluation).
 * Website vocabulary, grammar rules, listening script and reading text used as published (two vowel slips corrected: لِكَيْ أُصْبِحَ, لَمْ تُقَرِّرْ);
 * the quiz, listening and reading questions, sorter, mistakes, model sentences, speaking prompts, writing model, mission and final check are
 * generic placeholders on the website for this lesson, so those items are teacher-written from the website’s own script, text and rules. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D3')({
  n: 5, fileTitle: 'Education_and_Training_Routes_to_a_Career', chip: 'Routes',
  title: 'Education and Training — Routes to a Career', arabic: 'التَّعْلِيمُ وَالتَّدْرِيبُ — طُرُقٌ إِلَى المَسِيرَةِ المِهَنِيَّةِ',
  focus: 'Compare routes into work (university, college, apprenticeship, course): the route to a goal (لِكَيْ أُصْبِحَ … يَجِبُ أَنْ …), a condition (إِذَا نَجَحْتُ، فَسَـ …), a comparison and a balanced judgement.',
  icon: 'FaGraduationCap', iconSet: 'fa6',
});

const site = D.site('D3-L05');
const fix = (t) => t.replace('لِكَيْ أَصْبِحَ', 'لِكَيْ أُصْبِحَ').replace('لَمْ تَقْرِّرْ', 'لَمْ تُقَرِّرْ');
const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D3-L05', {
  support: `• Core: 8 education / training words + “To become a doctor, I must study at university” (لِكَيْ أُصْبِحَ … يَجِبُ أَنْ أَدْرُسَ …). Develop: a condition (إِذَا نَجَحْتُ، فَسَأَلْتَحِقُ …) and a comparison (أَفْضَلُ مِنْ / أَكْثَرُ عَمَلِيَّةً مِنْ). Stretch: compare university and an apprenticeship and recommend one route for one career.
• Builds directly on D3-L04 (sa-, li-kay, an + verb in -a). NEW: إِذَا + PAST verb for a future condition (إِذَا نَجَحْتُ = if I succeed).
• UK link: “apprenticeship” = تَلْمَذَةٌ مِهَنِيَّةٌ; “college / sixth form” = كُلِّيَّةٌ. Students can talk about real UK routes (A levels, T levels, apprenticeships).
• Website text corrections used in the deck: لِكَيْ أُصْبِحَ (website: أَصْبِحَ) and لَمْ تُقَرِّرْ (website: تَقْرِّرْ).`,
  teach: 'The route to a goal, if …, comparison and pros / cons.',
  wedo: 'Picture match, sort university / apprenticeship, fix and listen to three routes.',
  next: { nextCode: 'D3-L06', nextTitle: 'Job Applications and Interviews — CV, Skills and Future Plans', nextAr: 'طَلَبَاتُ العَمَلِ وَالمُقَابَلَاتُ' },
  objectives: ['Name education and training routes into work.', 'Link a goal to its route (لِكَيْ أُصْبِحَ … يَجِبُ أَنْ …).', 'Make a plan with a condition (إِذَا + past, فَـ + future).', 'Compare two routes and give a balanced recommendation.'],
  flexGroups: [1, 2],
  doNow: {
    questions: [
      q('What does شَهَادَةٌ mean?', ['a certificate / degree', 'a university', 'a course'], 'Prepared at home (D3-L04).'),
      q('What does مِنْحَةٌ دِرَاسِيَّةٌ mean?', ['a scholarship', 'a work placement', 'an exam'], 'Prepared at home (D3-L04).'),
      q('Which means “I will study”?', ['سَأَدْرُسُ', 'أَدْرُسُ', 'دَرَسْتُ'], 'D3-L04: sa- + present.'),
      q('Complete: سَأَتَدَرَّبُ لِكَيْ ___ خِبْرَةً.', ['أَكْتَسِبَ', 'اكْتَسَبْتُ', 'سَأَكْتَسِبُ'], 'D3-L04: li-kay + verb (-a).'),
      q('Which sentence gives a disadvantage?', ['مِنْ عُيُوبِهِ أَنَّهُ مُجْهِدٌ.', 'مِنْ مَزَايَاهُ أَنَّهُ مُجْزٍ.', 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ طَبِيبًا.'], 'D3-L02: pros and cons.'),
    ],
    keyIdea: { text: 'Goal → route → condition: to become … I must … — if I succeed, I will …', ar: 'لِكَيْ {w|أُصْبِحَ} طَبِيبًا يَجِبُ أَنْ أَدْرُسَ · إِذَا {k|نَجَحْتُ}، فَ{k|سَ}أَلْتَحِقُ بِالجَامِعَةِ' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of D3-L04. Questions 3–4 retrieve D3-L04 (future, purpose); question 5 retrieves D3-L02 (pros and cons).',
  },
  routes: {
    core: ['I can name routes into work.', 'I can say what I must do to become …'],
    develop: ['I can make a plan with if …', 'I can compare two routes.'],
    stretch: ['I can weigh university against an apprenticeship.', 'I can recommend a route for one career.'],
  },
  bridge: [
    { ar: 'جَامِعَةٌ', urdu: 'جامعہ', tr: 'jāmiʿa', en: 'university' },
    { ar: 'تَعْلِيمٌ', urdu: 'تعلیم', tr: 'taʿlīm', en: 'education' },
    { ar: 'شَهَادَةٌ', urdu: 'شہادت', tr: 'shahādat', en: 'Urdu: testimony, martyrdom · Arabic: certificate' },
    { ar: 'تَلْمَذَةٌ', urdu: 'تلمیذ / شاگرد', tr: 'tilmīz', en: 'pupil → apprenticeship' },
    { ar: 'تَخَصُّصٌ', urdu: 'خصوصی', tr: 'khusūsī', en: 'special → specialisation' },
  ],
  bridgeNotes: 'URDU BRIDGE: جامعہ (as in Jamia universities) and تعلیم are shared. CAREFUL: شہادت in Urdu is testimony or martyrdom; Arabic شَهَادَةٌ is also a certificate or degree. تلمیذ (pupil, disciple) is the root of تَلْمَذَةٌ مِهَنِيَّةٌ (apprenticeship). خصوصی shares the root of تَخَصُّصٌ (specialisation).',
  core: ['جَامِعَةٌ', 'كُلِّيَّةٌ', 'مَعْهَدٌ مِهَنِيٌّ', 'تَدْرِيبٌ مِهَنِيٌّ', 'تَدْرِيبٌ عَمَلِيٌّ', 'تَلْمَذَةٌ مِهَنِيَّةٌ', 'شَهَادَةٌ', 'دَوْرَةٌ تَدْرِيبِيَّةٌ', 'مِنْحَةٌ دِرَاسِيَّةٌ', 'مُتَطَلَّبَاتُ القَبُولِ'],
  forms: {
    'جَامِعَةٌ': sp('جَامِعَاتٌ'), 'كُلِّيَّةٌ': sp('كُلِّيَّاتٌ'), 'مَعْهَدٌ مِهَنِيٌّ': sp('مَعَاهِدُ مِهَنِيَّةٌ'), 'شَهَادَةٌ': sp('شَهَادَاتٌ'),
    'دَوْرَةٌ تَدْرِيبِيَّةٌ': sp('دَوْرَاتٌ تَدْرِيبِيَّةٌ'), 'مِنْحَةٌ دِرَاسِيَّةٌ': sp('مِنَحٌ دِرَاسِيَّةٌ'),
  },
  vocabNotes: {
    0: 'Routes into work. Cards show the plural where it is useful. مِهَنِيٌّ = vocational (from مِهْنَةٌ, D3-L01); عَمَلِيٌّ = practical (from عَمَلٌ).',
    1: 'Future planning (FLEX): review from D3-L04 — you need sa- and li-kay for every plan today.',
    2: 'Evaluation (FLEX): the D3 connector list. Today: عَلَى الرَّغْمِ مِنْ أَنَّ and مِنْ جِهَةٍ … مِنْ جِهَةٍ أُخْرَى for a balanced view.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · goal, route and condition (website rules 1–2)', title: 'To become … I must … — if …, I will …', ar: 'لِكَيْ أُصْبِحَ · إِذَا … فَسَـ',
      cols: [{ label: 'Example', w: 8.2, size: 22 }, { label: 'Pattern', w: 4.13 }],
      rows: [
        { core: true, cells: [P('لِكَيْ {w|أُصْبِحَ} طَبِيبًا، {e|يَجِبُ أَنْ} أَدْرُسَ فِي الجَامِعَةِ.', 'To become a doctor, I must study at university.'), 'goal → route'] },
        { core: true, cells: [P('{e|يَجِبُ أَنْ} أَتَدَرَّبَ لِكَيْ {w|أُصْبِحَ} فَنِّيًّا.', 'I must train to become a technician.'), 'route → goal'] },
        { cells: [P('{k|إِذَا نَجَحْتُ}، فَسَأَلْتَحِقُ بِالجَامِعَةِ.', 'If I succeed, I will join university.'), 'if + PAST, fa-sa- + present'] },
        { cells: [P('{k|إِذَا وَجَدْتُ} تَلْمَذَةً مِهَنِيَّةً، فَسَأُقَدِّمُ طَلَبًا.', 'If I find an apprenticeship, I will apply.'), 'if + PAST = a real future'] },
      ],
      ltr: true,
      foot: 'idhā + a PAST verb talks about the FUTURE: idhā najaḥtu = if I succeed (literally “if I succeeded”).',
      notes: `GRAMMAR PART 1 — website rules “Route to a goal” (لِكَيْ أُصْبِحَ … يَجِبُ أَنْ …: state the goal first or last, but connect the route logically) and “Conditional plan” (إِذَا + مَاضٍ، فَـ + مُسْتَقْبَلٌ: use a past-form verb after إذا for a realistic future condition). Website examples as shown (one vowel corrected: website has لِكَيْ أَصْبِحَ).
Teacher point: the job after أُصْبِحَ takes -an (طَبِيبًا، فَنِّيًّا) — D3-L01. Core can stop at rows 1–2.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · compare and evaluate (website rules 3–4) · Develop / Stretch', title: 'Better than … · on the other hand …', ar: 'أَفْضَلُ مِنْ · مِنْ مَزَايَا',
      cards: [
        { chip: 'COMPARE · DEVELOP', color: '1D5FBF', head: 'أَكْثَرُ عَمَلِيَّةً مِنْ', big: 'التَّدْرِيبُ العَمَلِيُّ أَكْثَرُ عَمَلِيَّةً مِنَ الدِّرَاسَةِ النَّظَرِيَّةِ.', en: 'Practical training is more practical than theoretical study.', clue: 'akthar + noun (-an) + min.' },
        { chip: 'ADVANTAGE · CORE', color: '1E7B4F', head: 'مِنْ مَزَايَا … أَنَّهَا', big: 'مِنْ مَزَايَا التَّلْمَذَةِ المِهَنِيَّةِ أَنَّهَا مَدْفُوعَةٌ.', en: 'One advantage of an apprenticeship is that it is paid.', clue: 'annahā = that it (f.).' },
        { chip: 'DISADVANTAGE · STRETCH', color: 'B83227', head: 'مِنْ عُيُوبِهَا أَنَّ', big: 'مِنْ عُيُوبِهَا أَنَّ الخِيَارَاتِ قَدْ تَكُونُ مَحْدُودَةً.', en: 'One disadvantage is that the options may be limited.', clue: 'qad takūnu = may be.' },
      ],
      error: { text: 'A comparative needs min.', pairs: [['الجَامِعَةُ أَفْضَلُ مِنَ الدَّوْرَةِ لِهٰذِهِ المِهْنَةِ.', 'الجَامِعَةُ أَفْضَلُ الدَّوْرَةِ لِهٰذِهِ المِهْنَةِ.']] },
      notes: `GRAMMAR PART 2 — website rules “Comparison” (أَفْضَلُ مِنْ / أَكْثَرُ عَمَلِيَّةً مِنْ: use مِنْ after the comparative) and “Balanced evaluation” (present both sides before reaching a judgement). Website examples as shown.
Comparative forms (F6-L06 link): أَرْخَصُ مِنْ، أَغْلَى مِنْ، أَفْضَلُ مِنْ. For longer adjectives use أَكْثَرُ / أَقَلُّ + noun in -an: أَقَلُّ تَكْلِفَةً (less costly — reading text). The error pair is teacher-chosen (the website common error is generic).`,
    },
  ],
  rulesTitle: 'Routes, alternatives and conditions',
  ruleEx: site.grammar.rules.map((r) => r.examples.map(fix)),
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me choose a route',
    steps: [
      { head: 'Goal + route', ar: 'لِكَيْ {w|أُصْبِحَ} كَهْرَبَائِيًّا، {e|يَجِبُ أَنْ} أَتَدَرَّبَ.', think: 'Goal, then what I must do.' },
      { head: 'Compare', ar: 'التَّلْمَذَةُ المِهَنِيَّةُ {k|أَكْثَرُ عَمَلِيَّةً مِنَ} الجَامِعَةِ.', think: 'akthar … min.' },
      { head: 'Balance', ar: 'مِنْ مَزَايَاهَا أَنَّهَا مَدْفُوعَةٌ، وَلٰكِنَّ الخِيَارَاتِ مَحْدُودَةٌ.', think: 'Both sides.' },
      { head: 'Condition', ar: '{k|إِذَا وَجَدْتُ} تَلْمَذَةً، فَسَأُقَدِّمُ طَلَبًا.', think: 'idhā + past → fa-sa-.' },
    ],
    legend: ['w', 'e', 'k'], legendLabels: { w: 'GOAL', e: 'ROUTE', k: 'COMPARE / IF' },
    model: 'لِكَيْ {w|أُصْبِحَ} كَهْرَبَائِيًّا، {e|يَجِبُ أَنْ} أَتَدَرَّبَ فِي مَعْهَدٍ مِهَنِيٍّ أَوْ فِي شَرِكَةٍ. فِي رَأْيِي، التَّلْمَذَةُ المِهَنِيَّةُ {k|أَكْثَرُ عَمَلِيَّةً مِنَ} الجَامِعَةِ لِهٰذِهِ المِهْنَةِ. مِنْ مَزَايَاهَا أَنَّهَا مَدْفُوعَةٌ، وَلٰكِنْ مِنْ عُيُوبِهَا أَنَّ الخِيَارَاتِ قَدْ تَكُونُ مَحْدُودَةً. {k|إِذَا وَجَدْتُ} تَلْمَذَةً مِهَنِيَّةً جَيِّدَةً، فَسَأُقَدِّمُ طَلَبًا فَوْرًا.',
    modelEn: 'To become an electrician, I must train at a vocational institute or in a company. In my opinion, an apprenticeship is more practical than university for this job. One advantage is that it is paid, but one disadvantage is that the options may be limited. If I find a good apprenticeship, I will apply straight away.',
    notes: 'I DO (3 min) — teacher-written model built on the website rules and listening (Ahmed: an apprenticeship in an electricity company). Think aloud: “Goal? Route? Better than what? What if …?”',
  },
  patterns: [
    { ar: 'لِكَيْ أُصْبِحَ طَبِيبًا، يَجِبُ أَنْ أَدْرُسَ فِي الجَامِعَةِ.', en: 'To become a doctor, I must study at university.', tip: 'Goal → route.' },
    { ar: 'إِذَا نَجَحْتُ، فَسَأَلْتَحِقُ بِالجَامِعَةِ.', en: 'If I succeed, I will join university.', tip: 'idhā + past, fa-sa-.' },
    { ar: 'التَّلْمَذَةُ المِهَنِيَّةُ أَقَلُّ تَكْلِفَةً مِنَ الجَامِعَةِ.', en: 'An apprenticeship costs less than university.', tip: 'aqall + -an + min.' },
    { ar: 'مِنْ مَزَايَا الجَامِعَةِ أَنَّهَا تُقَدِّمُ مَعْرِفَةً عَمِيقَةً.', en: 'One advantage of university is that it offers deep knowledge.', tip: 'Advantage + annahā.' },
  ],
  game: {
    title: 'Where do I learn? Match the picture',
    pick: [1, 2, 3],
    en: ['I study at university.', 'I receive vocational training.', 'I learn remotely.'],
    icons: [[['fa6', 'FaGraduationCap', '1D5FBF'], ['fa6', 'FaBuildingColumns', '5A6472']], [['fa6', 'FaToolbox', 'C77700'], ['fa6', 'FaCertificate', 'B83227']], [['fa6', 'FaLaptop', '6B4C9A'], ['fa6', 'FaBookOpen', '1E7B4F']]],
    labels: ['university', 'vocational training', 'learning online'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Other website cards: أَدْرُسُ فِي المَدْرَسَةِ الثَّانَوِيَّةِ · أَدْرُسُ لِأَنْجَحَ فِي الاِمْتِحَانِ (li- + verb in -a = in order to) · التَّعْلِيمُ يُسَاعِدُنِي عَلَى الحُصُولِ عَلَى وَظِيفَةٍ.',
  },
  sorterCats: ['University', 'Apprenticeship'],
  sorterNotes: 'Then choose one card from each side and make a sentence: مِنْ مَزَايَا الجَامِعَةِ أَنَّهَا … · مِنْ مَزَايَا التَّلْمَذَةِ أَنَّهَا …',
  patch: {
    mission: null,
    listening: { script: fix(site.listening.script),
      questions: [
        L('Why does Sarah prefer university?', ['she wants to become a lawyer', 'it is cheaper', 'her friends go there'], 'تُرِيدُ أَنْ تُصْبِحَ مُحَامِيَةً'),
        L('What route did Ahmed choose?', ['an apprenticeship', 'university', 'a short course'], 'اخْتَارَ تَلْمَذَةً مِهَنِيَّةً'),
        L('In what kind of company?', ['an electricity company', 'a building company', 'a design company'], 'فِي شَرِكَةِ كَهْرَبَاءٍ'),
        L('Why does he prefer it?', ['he prefers practical learning', 'he dislikes studying', 'it is near his home'], 'يُفَضِّلُ التَّعَلُّمَ العَمَلِيَّ'),
        L('What money detail is mentioned?', ['he gets a small salary while training', 'he pays high fees', 'he has a scholarship'], 'يَحْصُلُ عَلَى رَاتِبٍ صَغِيرٍ'),
        L('What is Maryam looking for?', ['a short design course', 'a university place', 'a job in a shop'], 'دَوْرَةٍ قَصِيرَةٍ فِي التَّصْمِيمِ'),
      ] },
    sorter: {
      title: 'University or apprenticeship?', instructions: 'Which route does each description fit best (from the reading text)?',
      categories: ['University', 'Apprenticeship'],
      items: [
        { label: 'مَعْرِفَةٌ عَمِيقَةٌ', answer: 0 }, { label: 'شَهَادَةٌ لِلطِّبِّ وَالقَانُونِ', answer: 0 }, { label: 'دِرَاسَةٌ نَظَرِيَّةٌ', answer: 0 }, { label: 'تَكْلِفَةٌ أَعْلَى', answer: 0 },
        { label: 'تَجْمَعُ بَيْنَ العَمَلِ وَالدِّرَاسَةِ', answer: 1 }, { label: 'أَكْثَرُ عَمَلِيَّةً', answer: 1 }, { label: 'أَقَلُّ تَكْلِفَةً', answer: 1 }, { label: 'رَاتِبٌ أَثْنَاءَ التَّدْرِيبِ', answer: 1 },
      ],
    },
    mistakes: [
      { wrong: 'لِكَيْ أُصْبِحُ طَبِيبًا، يَجِبُ أَنْ أَدْرُسَ.', right: 'لِكَيْ أُصْبِحَ طَبِيبًا، يَجِبُ أَنْ أَدْرُسَ.', why: 'After li-kay the verb ends in -a.' },
      { wrong: 'إِذَا أَنْجَحُ، سَأَلْتَحِقُ بِالجَامِعَةِ.', right: 'إِذَا نَجَحْتُ، فَسَأَلْتَحِقُ بِالجَامِعَةِ.', why: 'idhā + past verb; fa- before the future.' },
      { wrong: 'التَّدْرِيبُ أَكْثَرُ عَمَلِيَّةً الدِّرَاسَةِ.', right: 'التَّدْرِيبُ أَكْثَرُ عَمَلِيَّةً مِنَ الدِّرَاسَةِ.', why: 'A comparative needs min.' },
    ],
    grammar: {
      rules: site.grammar.rules.map((r) => ({ ...r, examples: r.examples.map(fix) })),
      common_error: 'Do not use a present verb after إِذَا for a future plan, and do not leave out مِنْ after a comparative (teacher wording: the website common error for this lesson is generic).',
      quiz: [
        L('Complete: لِكَيْ ___ طَبِيبًا، يَجِبُ أَنْ أَدْرُسَ.', ['أُصْبِحَ', 'أَصْبَحْتُ', 'سَأُصْبِحُ'], 'After li-kay: present verb in -a.'),
        L('Complete: إِذَا ___ ، فَسَأَلْتَحِقُ بِالجَامِعَةِ.', ['نَجَحْتُ', 'سَأَنْجَحُ', 'نَاجِحٌ'], 'idhā + past verb.'),
        L('Complete: التَّدْرِيبُ أَكْثَرُ عَمَلِيَّةً ___ الدِّرَاسَةِ.', ['مِنَ', 'فِي', 'إِلَى'], 'Comparative + min.'),
        L('What does تَلْمَذَةٌ مِهَنِيَّةٌ mean?', ['an apprenticeship', 'a scholarship', 'a university'], 'tilmīdh = pupil.'),
        L('Which sentence is a balanced judgement?', ['مِنْ مَزَايَاهَا أَنَّهَا مَدْفُوعَةٌ، وَلٰكِنَّ الخِيَارَاتِ مَحْدُودَةٌ.', 'إِنَّهَا مَدْفُوعَةٌ.', 'الخِيَارَاتُ مَحْدُودَةٌ.'], 'Both sides, then a contrast.'),
        L('Which means “less costly”?', ['أَقَلُّ تَكْلِفَةً', 'أَكْثَرُ عَمَلِيَّةً', 'أَفْضَلُ مِنْ'], 'aqall = less.'),
        L('What does مُتَطَلَّبَاتُ القَبُولِ mean?', ['entry requirements', 'a training course', 'work experience'], 'qabūl = acceptance.'),
        L('Which word follows idhā najaḥtu in a plan?', ['فَسَأَلْتَحِقُ', 'أَلْتَحِقُ', 'الْتَحَقْتُ'], 'fa- + future.'),
      ],
    },
    final: [
      L('Complete: إِذَا ___ تَلْمَذَةً مِهَنِيَّةً، فَسَأُقَدِّمُ طَلَبًا.', ['وَجَدْتُ', 'أَجِدُ', 'سَأَجِدُ'], 'idhā + past.'),
      L('Which route combines work and study?', ['التَّلْمَذَةُ المِهَنِيَّةُ', 'الجَامِعَةُ', 'المِنْحَةُ الدِّرَاسِيَّةُ'], 'Reading text.'),
      L('Complete: الجَامِعَةُ أَفْضَلُ ___ الدَّوْرَةِ لِهٰذِهِ المِهْنَةِ.', ['مِنَ', 'عَلَى', 'عَنْ'], 'afḍal min.'),
      L('What does شَهَادَةٌ mean here?', ['a certificate / degree', 'a testimony', 'a job'], 'Careful with Urdu shahādat!'),
    ],
    reading: {
      questions: [
        L('What does university provide?', ['deep knowledge and a required degree', 'a salary', 'shorter study'], 'مَعْرِفَةً عَمِيقَةً وَشَهَادَةً مَطْلُوبَةً'),
        L('Which careers need a degree?', ['medicine and law', 'design and cooking', 'driving and building'], 'مِثْلَ الطِّبِّ وَالقَانُونِ'),
        L('What does an apprenticeship combine?', ['work and study', 'travel and study', 'sport and work'], 'تَجْمَعُ بَيْنَ العَمَلِ وَالدِّرَاسَةِ'),
        L('Which two advantages of an apprenticeship are given?', ['more practical and less costly', 'deeper and longer', 'easier and closer'], 'أَكْثَرُ عَمَلِيَّةً وَأَقَلُّ تَكْلِفَةً'),
        L('What possible disadvantage is given?', ['fewer chances to specialise', 'no salary', 'long holidays'], 'فُرَصُ التَّخَصُّصِ … أَضْيَقَ'),
        L('What should a student think about before choosing?', ['their goal and how they learn', 'their friends’ choices', 'the nearest college'], 'هَدَفَهُ وَطَرِيقَةَ تَعَلُّمِهِ'),
      ],
    },
    speaking: {
      context: 'University, college or apprenticeship?',
      model: [
        ['A', 'هَلْ تُفَضِّلُ الجَامِعَةَ أَمِ التَّلْمَذَةَ المِهَنِيَّةَ؟', 'Do you prefer university or an apprenticeship?'],
        ['B', 'أُفَضِّلُ الجَامِعَةَ لِأَنَّنِي أُرِيدُ أَنْ أُصْبِحَ مُحَامِيًا.', 'I prefer university because I want to become a lawyer.'],
        ['A', 'وَمَا خُطَّتُكَ؟', 'And what is your plan?'],
        ['B', 'إِذَا نَجَحْتُ فِي الاِمْتِحَانَاتِ، فَسَأَدْرُسُ القَانُونَ.', 'If I pass the exams, I will study law.'],
      ],
    },
    writing: {
      prompt: 'Compare university and vocational training and recommend the best route for one career.',
      model: 'لَيْسَ هُنَاكَ مَسَارٌ وَاحِدٌ يُنَاسِبُ الجَمِيعَ. لِكَيْ أُصْبِحَ مُحَامِيًا، يَجِبُ أَنْ أَدْرُسَ القَانُونَ فِي الجَامِعَةِ، لِأَنَّ هٰذِهِ المِهْنَةَ تَحْتَاجُ إِلَى شَهَادَةٍ. مِنْ مَزَايَا الجَامِعَةِ أَنَّهَا تُقَدِّمُ مَعْرِفَةً عَمِيقَةً، وَلٰكِنْ مِنْ عُيُوبِهَا أَنَّهَا مُكْلِفَةٌ. أَمَّا التَّلْمَذَةُ المِهَنِيَّةُ فَهِيَ أَكْثَرُ عَمَلِيَّةً وَأَقَلُّ تَكْلِفَةً، وَهِيَ مُنَاسِبَةٌ لِمِهَنٍ مِثْلِ الكَهْرَبَاءِ وَالتَّصْمِيمِ. فِي رَأْيِي، الجَامِعَةُ أَفْضَلُ لِي لِأَنَّنِي أُحِبُّ القِرَاءَةَ وَالبَحْثَ. إِذَا حَصَلْتُ عَلَى مِنْحَةٍ دِرَاسِيَّةٍ، فَسَأَلْتَحِقُ بِجَامِعَةٍ فِي لَنْدَنَ.',
    },
  },
  hints: ['After li-kay: -u or -a?', 'idhā + which tense?', 'What is missing after akthar ʿamaliyyatan?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 6.\nListen for: مُحَامِيَةً · تَلْمَذَةً · دَوْرَةٍ.',
  listenRoutes: 'Core: questions 1, 2 and 6. Develop / Stretch: all 6.',
  gloss: [
    ['تُفَضِّلُ سَارَةُ الدِّرَاسَةَ الجَامِعِيَّةَ لِأَنَّهَا تُرِيدُ أَنْ تُصْبِحَ مُحَامِيَةً.', 'Sarah prefers university study because she wants to become a lawyer.'],
    ['أَمَّا أَحْمَدُ فَقَدِ اخْتَارَ تَلْمَذَةً مِهَنِيَّةً فِي شَرِكَةِ كَهْرَبَاءٍ', 'As for Ahmed, he has chosen an apprenticeship in an electricity company'],
    ['لِأَنَّهُ يُفَضِّلُ التَّعَلُّمَ العَمَلِيَّ وَيَحْصُلُ عَلَى رَاتِبٍ صَغِيرٍ أَثْنَاءَ التَّدْرِيبِ.', 'because he prefers practical learning and he gets a small salary during training.'],
    ['وَمَرْيَمُ لَمْ تُقَرِّرْ بَعْدُ؛', 'And Maryam has not decided yet;'],
    ['فَهِيَ تَبْحَثُ عَنْ دَوْرَةٍ قَصِيرَةٍ فِي التَّصْمِيمِ.', 'she is looking for a short course in design.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَاذَا يَجِبُ أَنْ تَدْرُسَ لِكَيْ تُصْبِحَ مُدَرِّسًا؟' },
      { route: 'core', ar: 'هَلْ تُفَضِّلُ الجَامِعَةَ أَمِ التَّلْمَذَةَ المِهَنِيَّةَ؟' },
      { route: 'develop', ar: 'مَا خُطَّتُكَ إِذَا نَجَحْتَ فِي الاِمْتِحَانَاتِ؟' },
      { route: 'stretch', ar: 'مَا مَزَايَا التَّلْمَذَةِ المِهَنِيَّةِ وَعُيُوبُهَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'لِكَيْ أُصْبِحَ ______ ، يَجِبُ أَنْ ______ .' },
      { route: 'core', ar: 'أُفَضِّلُ ______ لِأَنَّ ______ .' },
      { route: 'develop', ar: 'إِذَا نَجَحْتُ، فَسَـ ______ .' },
      { route: 'stretch', ar: 'مِنْ مَزَايَاهَا أَنَّ ______ ، وَلٰكِنْ مِنْ عُيُوبِهَا أَنَّ ______ .' },
    ],
    modelEn: ['Do you prefer university or an apprenticeship?', 'I prefer university because I want to become a lawyer.'],
    notes: 'Teacher-written prompts and model (the website prompts are generic). Model continues: A: وَمَا خُطَّتُكَ؟ B: إِذَا نَجَحْتُ فِي الاِمْتِحَانَاتِ، فَسَأَدْرُسُ القَانُونَ. To a girl: هَلْ تُفَضِّلِينَ …؟ · لِكَيْ تُصْبِحِي …',
  },
  write: {
    core: { amount: '5 sentences', how: 'One job: what you must do to become it, which route you prefer and why.' },
    develop: { amount: '80–100 words', how: 'Compare two routes (akthar … min) and add a plan with idhā.' },
    stretch: { amount: '100–120 words', how: 'Website task: compare university and vocational training and recommend a route for one career.' },
  },
  frames: {
    core: [
      { en: 'To become a …, I must …', ar: 'لِكَيْ أُصْبِحَ ______ ، يَجِبُ أَنْ ______ .' },
      { en: 'I prefer … because …', ar: 'أُفَضِّلُ ______ لِأَنَّ ______ .' },
      { en: 'After school I will study …', ar: 'بَعْدَ المَدْرَسَةِ سَأَدْرُسُ ______ .' },
      { en: 'One advantage of … is that …', ar: 'مِنْ مَزَايَا ______ أَنَّ ______ .' },
    ],
    develop: [
      { en: '… is more practical than …', ar: '______ أَكْثَرُ عَمَلِيَّةً مِنْ ______ .' },
      { en: '… costs less than …', ar: '______ أَقَلُّ تَكْلِفَةً مِنْ ______ .' },
      { en: 'If I succeed, I will …', ar: 'إِذَا نَجَحْتُ، فَسَـ ______ .' },
      { en: 'If I get a scholarship, I will …', ar: 'إِذَا حَصَلْتُ عَلَى مِنْحَةٍ، فَسَـ ______ .' },
    ],
    bank: ['جَامِعَةٌ', 'كُلِّيَّةٌ', 'تَلْمَذَةٌ مِهَنِيَّةٌ', 'دَوْرَةٌ تَدْرِيبِيَّةٌ', 'شَهَادَةٌ', 'لِكَيْ أُصْبِحَ', 'يَجِبُ أَنْ', 'إِذَا نَجَحْتُ', 'فَسَـ', 'أَفْضَلُ مِنْ', 'أَكْثَرُ عَمَلِيَّةً', 'أَقَلُّ تَكْلِفَةً'],
  },
  stretch: [
    ['لَيْسَ هُنَاكَ مَسَارٌ وَاحِدٌ يُنَاسِبُ الجَمِيعَ', 'there is no single route that suits everyone'],
    ['تَجْمَعُ بَيْنَ العَمَلِ وَالدِّرَاسَةِ', 'it combines work and study'],
    ['فُرَصُ التَّخَصُّصِ', 'chances to specialise'],
    ['يَنْبَغِي لِلطَّالِبِ أَنْ …', 'the student should …'],
    ['طَرِيقَةُ تَعَلُّمِهِ', 'the way he learns'],
  ],
  modelEn: 'There is no single route that suits everyone. To become a lawyer, I must study law at university, because this job needs a degree. One advantage of university is that it offers deep knowledge, but one disadvantage is that it is expensive. An apprenticeship, on the other hand, is more practical and less costly, and it suits jobs such as electrics and design. In my opinion, university is better for me because I love reading and research. If I get a scholarship, I will join a university in London.',
  find: ['goal → route (li-kay … yajibu an)', 'a comparison with min', 'an advantage and a disadvantage', 'a condition with idhā'],
  modelNotes: 'Teacher-written model (the website model for this lesson is a placeholder). Evidence: لِكَيْ أُصْبِحَ مُحَامِيًا، يَجِبُ أَنْ أَدْرُسَ · مِنْ مَزَايَا … وَلٰكِنْ مِنْ عُيُوبِهَا … · أَكْثَرُ عَمَلِيَّةً وَأَقَلُّ تَكْلِفَةً · أَفْضَلُ لِي · إِذَا حَصَلْتُ … فَسَأَلْتَحِقُ.',
  selfCheck: [
    { route: 'core', text: 'I linked a goal to a route.' },
    { route: 'core', text: 'After li-kay / an: verb in -a.' },
    { route: 'develop', text: 'My comparison has min.' },
    { route: 'develop', text: 'idhā + past verb, then fa-sa-.' },
    { route: 'stretch', text: 'I gave both sides before recommending.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['مَسَارٌ', 'a route'], ['يُنَاسِبُ الجَمِيعَ', 'suits everyone'], ['مَعْرِفَةً عَمِيقَةً', 'deep knowledge'], ['مَطْلُوبَةً', 'required'], ['القَانُونِ', 'law'],
    ['تَجْمَعُ بَيْنَ', 'combines'], ['أَقَلُّ تَكْلِفَةً', 'less costly'], ['فُرَصُ التَّخَصُّصِ', 'chances to specialise'], ['أَضْيَقَ', 'narrower'], ['يَنْبَغِي', 'should'],
  ],
  prep: {
    words: [['سِيرَةٌ ذَاتِيَّةٌ', 'a CV', 'pl. سِيَرٌ ذَاتِيَّةٌ'], ['رِسَالَةُ تَغْطِيَةٍ', 'a cover letter', 'pl. رَسَائِلُ'], ['مُقَابَلَةٌ شَخْصِيَّةٌ', 'an interview', 'pl. مُقَابَلَاتٌ'], ['إِعْلَانُ وَظِيفَةٍ', 'a job advert', 'pl. إِعْلَانَاتٌ'], ['نُقْطَةُ ضَعْفٍ', 'a weakness', 'pl. نِقَاطُ ضَعْفٍ']],
    questionEn: 'What is your biggest strength for a job? Write one sentence with evidence.',
    questionAr: 'نُقْطَةُ قُوَّتِي هِيَ … لِأَنَّنِي …',
    homework: {
      core: 'Learn the 10 route words; write 5 sentences from the frames.',
      develop: 'Compare two routes in 80–100 words with min and idhā.',
      stretch: 'Website writing task: compare university and vocational training and recommend a route (100–120 words).',
    },
    wordsSource: 'The five words come from the website D3-L06 vocabulary (applications and interviews).',
  },
  remember: 'Remember: to become … I must … — idhā + past, fa-sa- — a comparative needs min.',
});

module.exports = { meta, slides };
