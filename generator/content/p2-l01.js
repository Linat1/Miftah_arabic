'use strict';
/* P2-L01 · School Systems and Academic Life — website: Pathways › Progression › P2 › P2-L01 (academic verbs with their complements يَجْتَازُ + object ·
 * يَتَفَوَّقُ فِي · يَرْسُبُ فِي · يَلْتَحِقُ بِـ · يَحْصُلُ عَلَى; formal comparison بَيْنَمَا · فِي حِينِ أَنَّ · فِي المُقَابِلِ; يَتَمَيَّزُ بِـ).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing and visual game used as published, with two spelling fixes:
 * مُنْهَجٌ → مَنْهَجٌ, and the waṣl alif written with a kasra inside phrases (الاِمْتِحَانِ · مَادَّةٌ اِخْتِيَارِيَّةٌ) shown without it. English added to the patterns. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P2')({
  n: 1, fileTitle: 'School_Systems_and_Academic_Life', chip: 'Vocabulary',
  title: 'School Systems and Academic Life', arabic: 'المَنْظُومَاتُ التَّعْلِيمِيَّةُ وَالحَيَاةُ الأَكَادِيمِيَّةُ',
  focus: 'Describe and compare education systems in academic Arabic: the stages, the exam verbs with their complements (يَجْتَازُ الامْتِحَانَ · يَتَفَوَّقُ فِي · يَلْتَحِقُ بِـ), and formal comparison (بَيْنَمَا · فِي حِينِ أَنَّ · يَتَمَيَّزُ بِـ) instead of a list.',
  icon: 'FaSchool', iconSet: 'fa6',
});

const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const raw = D.site('P2-L01');
const site = D.waslFix({ ...raw, vocab: raw.vocab.map((g) => ({ ...g, items: g.items.map((it) => (it.ar === 'مُنْهَجٌ دِرَاسِيٌّ' ? { ...it, ar: 'مَنْهَجٌ دِرَاسِيٌّ' } : it)) })) });
const RH = [['Exam verbs', 'yajtāz + object · yarsub fī · yatafawwaq fī'], ['Enrolment and attainment', 'yaltaḥiq bi- · yaḥṣul ʿalā'], ['Formal contrast', 'baynamā · fī ḥīni anna · fī al-muqābil'], ['Distinguishing feature', 'yatamayyaz bi-']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));

const slides = D.devLesson('P2-L01', {
  support: `• NEW UNIT (Progression P2 · Education and Future Plans). Core: name the stages and use the exam verbs with their complements. Develop: compare two systems with two formal contrast connectors. Stretch: a distinguishing feature (يَتَمَيَّزُ بِـ) and a closing conditional (website ~90–100-word comparison).
• Respectful framing: students have studied in different countries and systems (UK, Pakistan, Egypt, Somalia …), and some in vocational routes or home education. Every system has strengths; the website says “كِلَا المَسَارَيْنِ مُحْتَرَمٌ”.
• Grammar links: one verb, one preposition (the P1 habit) · أَنَّ + accusative (P1-L07) · the Type 1 conditional (P1-L03) · numbers: ثَلَاثُ مَرَاحِلَ · ثَلَاثَ سَنَوَاتٍ.`,
  teach: 'Stages, exam verbs with their complements, formal comparison.',
  wedo: 'Sort the verbs, compare two systems in a table, match the learning route.',
  next: { nextCode: 'P2-L02', nextTitle: 'Reported Speech — What People Say About Education', nextAr: 'الكَلَامُ المَنْقُولُ' },
  objectives: ['Name the stages of an education system in academic Arabic.', 'Use yajtāz, yatafawwaq fī, yarsub fī and yaltaḥiq bi- with correct complements.', 'Compare two systems with baynamā, fī ḥīni anna and yatamayyaz bi-.', 'Write a comparative description of two school systems.'],
  objNotes: 'Website objectives (Arabic shown in transliteration on the slide so the lines read cleanly). The route statements turn them into this lesson’s concrete targets.',
  rulesAr: 'الأَفْعَالُ الأَكَادِيمِيَّةُ وَالمُقَارَنَةُ',
  doNow: {
    questions: [
      q('What does مَنْظُومَةٌ تَعْلِيمِيَّةٌ mean?', ['an education system', 'a school report', 'a university'], 'Prepared at home (P1-L12).'),
      q('What does يَجْتَازُ mean?', ['he passes (an exam)', 'he fails', 'he enrols'], 'Prepared at home (P1-L12).'),
      q('What does يَتَفَوَّقُ فِي mean?', ['he excels in', 'he specialises in', 'he relies on'], 'Prepared at home (P1-L12).'),
      q('Complete: الطَّعَامُ غَنِيٌّ ___ البُرُوتِينِ.', ['بِـ', 'مِنْ', 'فِي'], 'P1: one verb, one preposition.'),
      q('Complete: هَلْ تَعْلَمُ أَنَّ ___ يُقَوِّي المَنَاعَةَ؟', ['النَّوْمَ', 'النَّوْمُ', 'النَّوْمِ'], 'P1-L07: anna + accusative.'),
    ],
    keyIdea: { text: 'New topic, same habit: every academic verb comes with its own complement.', ar: '{w|يَجْتَازُ الامْتِحَانَ} · {e|يَتَفَوَّقُ فِي} · {k|يَلْتَحِقُ بِـ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P1-L12. Questions 4–5 retrieve the P1 preposition habit and anna + accusative — both carry straight into today’s verbs and فِي حِينِ أَنَّ.',
  },
  routes: {
    core: ['I can name the stages of a school system.', 'I can use the exam verbs with their complements.'],
    develop: ['I can compare two systems with baynamā / fī ḥīni anna.', 'I can say what a system is distinguished by.'],
    stretch: ['I can close with a conditional about improvement.', 'I can compare fairly, without ranking people.'],
  },
  bridge: [
    { ar: 'اِمْتِحَانٌ', urdu: 'امتحان', tr: 'imtiḥān', en: 'an exam' },
    { ar: 'تَعْلِيمٌ', urdu: 'تعلیم', tr: 'taʿlīm', en: 'education' },
    { ar: 'ثَانَوِيٌّ', urdu: 'ثانوی', tr: 'sānwī', en: 'secondary' },
    { ar: 'مَادَّةٌ', urdu: 'مضمون', tr: 'mazmūn', en: 'a school subject (Urdu uses a different word)' },
    { ar: 'شَهَادَةٌ', urdu: 'سند / شہادت', tr: 'sanad', en: 'Arabic: a certificate · Urdu shahādat: testimony' },
  ],
  bridgeNotes: 'URDU BRIDGE: امتحان، تعلیم، ثانوی and نتیجہ are shared. CAREFUL: Urdu شہادت means testimony or martyrdom, but Arabic شَهَادَةٌ ثَانَوِيَّةٌ is a secondary-school CERTIFICATE (Urdu سند). And a school subject is مَادَّةٌ in Arabic, مضمون in Urdu.',
  core: ['مَنْظُومَةٌ تَعْلِيمِيَّةٌ', 'مَرْحَلَةٌ ابْتِدَائِيَّةٌ', 'مَرْحَلَةٌ ثَانَوِيَّةٌ', 'تَعْلِيمٌ عَالٍ', 'مَنْهَجٌ دِرَاسِيٌّ', 'مَادَّةٌ إِلْزَامِيَّةٌ', 'امْتِحَانَاتُ الشَّهَادَةِ', 'يَلْتَحِقُ بِـ', 'يَجْتَازُ', 'يَرْسُبُ فِي', 'يَتَفَوَّقُ فِي', 'يَحْصُلُ عَلَى'],
  forms: {
    'مَنْظُومَةٌ تَعْلِيمِيَّةٌ': sp('مَنْظُومَاتٌ تَعْلِيمِيَّةٌ'), 'مَنْهَجٌ دِرَاسِيٌّ': sp('مَنَاهِجُ دِرَاسِيَّةٌ'), 'مُقَرَّرٌ': sp('مُقَرَّرَاتٌ'),
    'مَادَّةٌ إِلْزَامِيَّةٌ': sp('مَوَادُّ إِلْزَامِيَّةٌ'), 'مَادَّةٌ اخْتِيَارِيَّةٌ': sp('مَوَادُّ اخْتِيَارِيَّةٌ'), 'شَهَادَةٌ ثَانَوِيَّةٌ': sp('شَهَادَاتٌ ثَانَوِيَّةٌ'),
    'تَعْلِيمٌ عَالٍ': { tag: 'defective', forms: [{ l: 'with al-', ar: 'التَّعْلِيمُ العَالِي' }] },
    'يَلْتَحِقُ بِـ': ihs('أَلْتَحِقُ', 'تَلْتَحِقُ'), 'يَجْتَازُ': ihs('أَجْتَازُ', 'تَجْتَازُ'), 'يَرْسُبُ فِي': ihs('أَرْسُبُ', 'تَرْسُبُ'), 'يَتَفَوَّقُ فِي': ihs('أَتَفَوَّقُ', 'تَتَفَوَّقُ'),
    'يَحْصُلُ عَلَى': ihs('أَحْصُلُ', 'تَحْصُلُ'), 'يَتَخَصَّصُ فِي': ihs('أَتَخَصَّصُ', 'تَتَخَصَّصُ'), 'يَتَمَيَّزُ بِـ': ihs('أَتَمَيَّزُ', 'تَتَمَيَّزُ'), 'يَعْتَمِدُ عَلَى': ihs('أَعْتَمِدُ', 'تَعْتَمِدُ'),
  },
  vocabNotes: {
    0: 'Stages and structure. مَرْحَلَةٌ and مَادَّةٌ are feminine: the adjective takes -a (مَرْحَلَةٌ ثَانَوِيَّةٌ · مَادَّةٌ إِلْزَامِيَّةٌ). Plural مَوَادُّ is a diptote. عَالٍ is defective: التَّعْلِيمُ العَالِي.',
    1: 'Assessment and records: most are iḍāfa pairs (كَشْفُ الدَّرَجَاتِ · نِظَامُ التَّقْيِيمِ) — the second word is genitive.',
    2: 'Academic verbs: sort as you learn — DIRECT OBJECT: يَجْتَازُ | فِي: يَتَفَوَّقُ · يَرْسُبُ · يَتَخَصَّصُ | بِـ: يَلْتَحِقُ · يَتَمَيَّزُ | عَلَى: يَحْصُلُ · يَعْتَمِدُ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the academic verbs and their complements (website rules 1–2) · Core', title: 'Pass · excel · fail · enrol · obtain', ar: 'الأَفْعَالُ الأَكَادِيمِيَّةُ',
      cols: [{ label: 'Meaning', w: 2.3 }, { label: 'Verb', w: 2.7, size: 22 }, { label: 'Example', w: 5.7, size: 20 }, { label: 'Then', w: 1.63 }],
      rows: [
        { core: true, cells: ['passes', '{w|يَجْتَازُ}', 'يَجْتَازُ الطُّلَّابُ {w|الامْتِحَانَ}.', 'object'] },
        { core: true, cells: ['excels in', '{e|يَتَفَوَّقُ فِي}', 'يَتَفَوَّقُ الطَّالِبُ {e|فِي} الرِّيَاضِيَّاتِ.', 'fī'] },
        { cells: ['fails', '{e|يَرْسُبُ فِي}', 'يَرْسُبُ بَعْضُ الطُّلَّابِ {e|فِي} المَادَّةِ الصَّعْبَةِ.', 'fī'] },
        { cells: ['specialises in', '{e|يَتَخَصَّصُ فِي}', 'تَتَخَصَّصُ أُخْتِي {e|فِي} الطِّبِّ.', 'fī'] },
        { core: true, cells: ['enrols in', '{k|يَلْتَحِقُ بِـ}', 'يَلْتَحِقُ {k|بِالجَامِعَةِ} بَعْدَ الثَّانَوِيَّةِ.', 'bi-'] },
        { core: true, cells: ['obtains', '{m|يَحْصُلُ عَلَى}', 'تَحْصُلُ {m|عَلَى} شَهَادَةٍ مُعْتَمَدَةٍ.', 'ʿalā'] },
      ],
      ltr: true,
      foot: 'Website teaching point: yajtāz takes a direct object — never yajtāz fī al-imtiḥān.',
      notes: `GRAMMAR PART 1 — website rules “Exam verbs” (one takes a direct object; the other two take فِي) and “Enrolment and attainment” (enrolment takes بِـ; obtaining takes عَلَى), plus teaching point “Each academic verb keeps its own preposition”.
Website mistakes: يَجْتَازُ الطَّالِبُ فِي الامْتِحَانِ ✗ · يَلْتَحِقُ الطَّالِبُ عَلَى الجَامِعَةِ ✗.
Quick drill: say the verb, the class says the complement (object / fī / bi- / ʿalā) — then reverse.
Rows 4 and 6 show the feminine forms (تَتَخَصَّصُ أُخْتِي · تَحْصُلُ) — the same agreement habit as P1.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · the verbs in the past and the plural · Develop', title: 'I passed · she excelled · they enrolled', ar: 'المَاضِي وَالجَمْعُ',
      cols: [{ label: 'Verb', w: 2.5, size: 22 }, { label: 'I (past)', w: 2.6, size: 22 }, { label: 'She (past)', w: 2.7, size: 22 }, { label: 'They (m.) present', w: 2.9, size: 22 }, { label: 'Note', w: 1.63 }],
      rows: [
        { core: true, cells: ['يَجْتَازُ', '{e|اجْتَزْتُ}', 'اجْتَازَتْ', 'يَجْتَازُونَ', 'hollow: ā → a'] },
        { core: true, cells: ['يَتَفَوَّقُ فِي', 'تَفَوَّقْتُ', 'تَفَوَّقَتْ', 'يَتَفَوَّقُونَ', 'Form V'] },
        { cells: ['يَرْسُبُ فِي', 'رَسَبْتُ', 'رَسَبَتْ', 'يَرْسُبُونَ', 'Form I'] },
        { core: true, cells: ['يَلْتَحِقُ بِـ', 'الْتَحَقْتُ', 'الْتَحَقَتْ', 'يَلْتَحِقُونَ', 'Form VIII'] },
        { cells: ['يَحْصُلُ عَلَى', 'حَصَلْتُ', 'حَصَلَتْ', 'يَحْصُلُونَ', 'Form I'] },
      ],
      ltr: true,
      foot: 'Same hollow rule as zidtu and nimtu (P1): ijtāza → ijtaztu — the long ā shortens before -tu.',
      notes: `GRAMMAR PART 2 — the past and plural forms needed for the comparison and for narrating your own school history (P2 builds on these all unit).
اجْتَازَ is a hollow Form VIII verb (root ج-و-ز): اجْتَزْتُ (I passed) — the same pattern as زِدْتُ / نِمْتُ from P1. Website listening: يَجْتَازُ الطُّلَّابُ (verb first, singular) vs الطُّلَّابُ يَجْتَازُونَ (verb after, plural).
Drill: “I passed the exam” → اجْتَزْتُ الامْتِحَانَ · “She excelled in science” → تَفَوَّقَتْ فِي العُلُومِ · “I enrolled at university” → الْتَحَقْتُ بِالجَامِعَةِ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · formal contrast (website rule 3) · Develop', title: 'Set one system against another', ar: 'بَيْنَمَا · فِي حِينِ أَنَّ',
      cards: [
        { chip: 'WHILE · CORE', color: '1D5FBF', head: 'بَيْنَمَا + verb', big: 'بَيْنَمَا يَدُومُ التَّعْلِيمُ الثَّانَوِيُّ ثَلَاثَ سَنَوَاتٍ هُنَا، يَمْتَدُّ هُنَاكَ أَكْثَرَ.', en: 'While secondary school lasts three years here, it lasts longer there.', clue: 'Two clauses.' },
        { chip: 'WHEREAS · DEVELOP', color: 'C0386B', head: 'فِي حِينِ أَنَّ + noun (-a)', big: 'يَعْتَمِدُ نِظَامٌ عَلَى الامْتِحَانِ، فِي حِينِ أَنَّ نِظَامًا آخَرَ يَعْتَمِدُ عَلَى المَشَارِيعِ.', en: 'One system relies on the exam, whereas another relies on projects.', clue: 'anna → -a.' },
        { chip: 'IN CONTRAST · STRETCH', color: '6B4C9A', head: 'فِي المُقَابِلِ،', big: 'فِي المُقَابِلِ، يَخْتَلِفُ النِّظَامُ فِي بَعْضِ الدُّوَلِ العَرَبِيَّةِ.', en: 'In contrast, the system differs in some Arab countries.', clue: 'Starts a sentence.' },
      ],
      error: { text: 'Website quiz: compare, don’t list — chained wa adds nothing.', pairs: [['بَيْنَمَا يَعْتَمِدُ الأَوَّلُ عَلَى الامْتِحَانِ، يَعْتَمِدُ الثَّانِي عَلَى المَشَارِيعِ', 'الأَوَّلُ جَيِّدٌ وَالثَّانِي جَيِّدٌ']] },
      notes: `GRAMMAR PART 3 — website rule “Formal contrast” (set one system against another instead of chaining وَ) and teaching point “Compare, do not just list”.
Case after فِي حِينِ أَنَّ: the noun is accusative (نِظَامًا آخَرَ · النِّظَامَ) — the P1-L07 anna rule. بَيْنَمَا is followed directly by a verb or a full sentence.
Number note: ثَلَاثَ سَنَوَاتٍ (accusative: for three years) · ثَلَاثُ مَرَاحِلَ (nominative: three stages, a diptote plural).
Fair comparison: describe how systems DIFFER, not which country is “better”.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · what makes a system distinctive (website rule 4 + reading) · Stretch', title: 'Distinguished by …', ar: 'يَتَمَيَّزُ بِـ',
      cols: [{ label: 'Feature', w: 2.9 }, { label: 'Sentence', w: 7.6, size: 20 }, { label: 'Tool', w: 1.83 }],
      rows: [
        { core: true, cells: ['flexible subjects', 'يَتَمَيَّزُ النِّظَامُ {k|بِمُرُونَةِ} المَوَادِّ الاخْتِيَارِيَّةِ.', 'bi- + gen.'] },
        { core: true, cells: ['balance + fair assessment', 'يَتَمَيَّزُ نِظَامٌ جَيِّدٌ {k|بِتَوَازُنٍ} بَيْنَ المَوَادِّ {k|وَبِنِظَامِ} تَقْيِيمٍ عَادِلٍ.', 'two features'] },
        { cells: ['she-subject', '{w|تَتَمَيَّزُ} المَنْظُومَةُ {k|بِمَرَاحِلَ} وَاضِحَةٍ.', 'feminine'] },
        { cells: ['both paths respected', 'يَلْتَحِقُ المُتَفَوِّقُونَ بِالجَامِعَاتِ، {e|بَيْنَمَا} يَخْتَارُ آخَرُونَ التَّدْرِيبَ المِهَنِيَّ.', 'fair contrast'] },
        { cells: ['conditional close', '{m|إِذَا رَكَّزَتِ} المَنْظُومَةُ عَلَى التَّفْكِيرِ، {m|فَسَيَزْدَادُ} إِبْدَاعُ الطُّلَّابِ.', 'P1-L03'] },
      ],
      ltr: true,
      foot: 'Website mistake: yatamayyaz takes bi-, never fī — yatamayyaz al-niẓām bi-l-murūna.',
      notes: `GRAMMAR PART 4 — website rule “Distinguishing feature” (يَتَمَيَّزُ بِـ: name what marks a system out) and the website reading (يَتَمَيَّزُ نِظَامٌ جَيِّدٌ بِتَوَازُنٍ … · وَكِلَا المَسَارَيْنِ مُحْتَرَمٌ · إِذَا رَكَّزَتِ المَنْظُومَةُ عَلَى التَّفْكِيرِ لَا الحِفْظِ …).
Website mistake 3: يَتَمَيَّزُ النِّظَامُ فِي المُرُونَةِ ✗ → بِالمُرُونَةِ.
Row 3: مَرَاحِلَ is a diptote — after bi- it takes fatḥa, not kasra (بِمَرَاحِلَ).
Row 5 brings back the P1 conditional; فَـ before sa- is common when the result is a full sentence.`,
    },
  ],
  quick: [0, 1, 3, 5],
  rest: [2, 4, 6, 7],
  ido: {
    title: 'Watch me compare two systems',
    steps: [
      { head: 'Stages', ar: 'يَتَكَوَّنُ النِّظَامُ مِنْ ثَلَاثِ مَرَاحِلَ', think: 'Describe first.' },
      { head: 'Verbs', ar: '{w|يَجْتَازُ} الطُّلَّابُ الامْتِحَانَاتِ · {e|يَتَفَوَّقُ} بَعْضُهُمْ', think: 'Complements.' },
      { head: 'Contrast', ar: '{k|فِي المُقَابِلِ}، {k|بَيْنَمَا} …', think: 'Set against.' },
      { head: 'Feature', ar: '{m|يَتَمَيَّزُ} كُلُّ نِظَامٍ {m|بِتَوَازُنٍ}', think: 'bi-.' },
    ],
    legend: ['w', 'e', 'k', 'm'], legendLabels: { w: 'OBJECT VERB', e: 'FĪ VERB', k: 'CONTRAST', m: 'FEATURE' },
    model: 'يَتَكَوَّنُ النِّظَامُ التَّعْلِيمِيُّ البِرِيطَانِيُّ مِنْ ثَلَاثِ مَرَاحِلَ، {w|وَيَجْتَازُ} الطُّلَّابُ امْتِحَانَاتِ الشَّهَادَةِ فِي سِنِّ السَّادِسَةَ عَشْرَةَ، {e|وَيَتَفَوَّقُ} بَعْضُهُمْ فَيَلْتَحِقُونَ بِالجَامِعَاتِ. {k|فِي المُقَابِلِ}، يَخْتَلِفُ النِّظَامُ فِي بَعْضِ الدُّوَلِ العَرَبِيَّةِ؛ {k|فَبَيْنَمَا} يَدُومُ التَّعْلِيمُ الثَّانَوِيُّ ثَلَاثَ سَنَوَاتٍ فِي بَلَدٍ، يَمْتَدُّ فِي غَيْرِهِ أَكْثَرَ. {m|وَيَتَمَيَّزُ} كُلُّ نِظَامٍ {m|بِتَوَازُنٍ} بَيْنَ المَوَادِّ.',
    modelEn: 'The British education system consists of three stages; students pass the certificate exams at sixteen, and some excel and go on to university. In contrast, the system differs in some Arab countries: while secondary education lasts three years in one country, it lasts longer in another. Each system is distinguished by a balance between subjects.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Describe the stages. Pass — direct object. Excel — fī. Now I must COMPARE, not list: fī al-muqābil, then baynamā with two clauses. Finally the feature: yatamayyaz BI-.”',
  },
  patternEn: ['students pass the exam at sixteen', 'he excels in science and enrols at university', 'while the first system relies on exams, the second relies on projects'],
  game: {
    title: 'Which route? Match the picture',
    pick: [0, 1, 2],
    en: ['I study at secondary school.', 'I study at university.', 'I receive vocational training.'],
    icons: [[['fa6', 'FaSchool', '1D5FBF'], ['fa6', 'FaBook', 'C77700']], [['fa6', 'FaGraduationCap', '1E6B52'], ['fa6', 'FaBuildingColumns', '6B4C9A']], [['fa6', 'FaToolbox', 'C0386B'], ['fa6', 'FaScrewdriverWrench', 'C77700']]],
    labels: ['secondary school', 'university', 'vocational training'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Then upgrade each one with today’s verbs: اجْتَزْتُ امْتِحَانَاتِ الثَّانَوِيَّةِ · سَأَلْتَحِقُ بِالجَامِعَةِ · يَحْصُلُ المُتَدَرِّبُ عَلَى شَهَادَةٍ مِهَنِيَّةٍ. Other website cards: online learning, studying for an exam, education leading to a job.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · compare two systems (website listening and reading)', title: 'System A vs system B', ar: 'قَارِنْ بَيْنَ نِظَامَيْنِ',
      cols: [{ label: 'Compare', w: 2.4 }, { label: 'System A (the UK)', w: 4.2, size: 19 }, { label: 'System B (some Arab countries)', w: 5.73, size: 19 }],
      rows: [
        { core: true, cells: ['stages', 'ثَلَاثُ مَرَاحِلَ', 'ثَلَاثُ مَرَاحِلَ أَيْضًا'] },
        { core: true, cells: ['secondary', 'يَجْتَازُ الطُّلَّابُ الامْتِحَانَاتِ فِي السَّادِسَةَ عَشْرَةَ', 'يَدُومُ ثَلَاثَ سَنَوَاتٍ أَوْ أَكْثَرَ'] },
        { cells: ['assessment', 'يَعْتَمِدُ عَلَى امْتِحَانَاتِ الشَّهَادَةِ', 'يَعْتَمِدُ بَعْضُهَا عَلَى امْتِحَانٍ نِهَائِيٍّ وَاحِدٍ'] },
        { cells: ['after school', 'يَلْتَحِقُونَ بِالجَامِعَةِ أَوْ بِالتَّدْرِيبِ المِهَنِيِّ', 'يَلْتَحِقُ المُتَفَوِّقُونَ بِالجَامِعَاتِ'] },
      ],
      ltr: true,
      foot: 'Now join each row with baynamā or fī ḥīni anna: baynamā … fī al-mamlaka al-muttaḥida, …',
      notes: `WE DO (3 min) — a comparison grid built from the website listening and reading (the website lesson has no builder). Pairs turn each row into ONE comparative sentence.
Model (row 3): بَيْنَمَا يَعْتَمِدُ النِّظَامُ البِرِيطَانِيُّ عَلَى امْتِحَانَاتِ الشَّهَادَةِ، يَعْتَمِدُ بَعْضُ الأَنْظِمَةِ عَلَى امْتِحَانٍ نِهَائِيٍّ وَاحِدٍ.
Core: rows 1–2 with بَيْنَمَا. Develop: all four, using fī ḥīni anna once (noun in -a!). Stretch: replace System B with a system the student knows (Pakistan, Egypt, Somalia …) and add يَتَمَيَّزُ بِـ.`,
    },
  ],
  sorterTitle: 'Object, fī — or bi- / ʿalā?',
  sorterNotes: 'Then say a phrase for each verb: يَجْتَازُ الامْتِحَانَ · يَدْرُسُ الطِّبَّ · يُرَاجِعُ الدُّرُوسَ · يَتَفَوَّقُ فِي العُلُومِ · يَرْسُبُ فِي المَادَّةِ · يَتَخَصَّصُ فِي الهَنْدَسَةِ · يَلْتَحِقُ بِالجَامِعَةِ · يَحْصُلُ عَلَى شَهَادَةٍ · يَتَمَيَّزُ بِالمُرُونَةِ.',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns, final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'two website spelling fixes applied throughout: مُنْهَجٌ → مَنْهَجٌ, and the waṣl alif inside a phrase shown without a kasra (الامْتِحَانِ · مَادَّةٌ اخْتِيَارِيَّةٌ); rule headings shown in English and transliteration; the comparison grid is teacher-built from the website listening and reading. All other website items are used as published.',
  hints: ['yajtāz + fī?', 'yaltaḥiq + which preposition?', 'yatamayyaz + which preposition?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: the verbs and their complements.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write down the contrast connector you hear.',
  gloss: [
    ['يَتَكَوَّنُ النِّظَامُ التَّعْلِيمِيُّ البِرِيطَانِيُّ مِنْ ثَلَاثِ مَرَاحِلَ: الابْتِدَائِيَّةِ وَالإِعْدَادِيَّةِ وَالثَّانَوِيَّةِ.', 'The British education system consists of three stages: primary, middle and secondary.'],
    ['يَجْتَازُ الطُّلَّابُ امْتِحَانَاتِ الشَّهَادَةِ فِي نِهَايَةِ الثَّانَوِيَّةِ، وَيَتَفَوَّقُ بَعْضُهُمْ فَيَحْصُلُونَ عَلَى أَعْلَى الدَّرَجَاتِ.', 'Students sit the certificate exams at the end of secondary school, and some excel and obtain the highest grades.'],
    ['بَعْدَ ذٰلِكَ يَلْتَحِقُونَ بِالجَامِعَةِ أَوْ يَخْتَارُونَ التَّدْرِيبَ المِهَنِيَّ.', 'After that they enrol at university or choose vocational training.'],
    ['فِي المُقَابِلِ، يَخْتَلِفُ النِّظَامُ فِي بَعْضِ الدُّوَلِ العَرَبِيَّةِ؛ فَبَيْنَمَا يَدُومُ التَّعْلِيمُ الثَّانَوِيُّ ثَلَاثَ سَنَوَاتٍ فِي بَلَدٍ، يَمْتَدُّ فِي غَيْرِهِ أَكْثَرَ.', 'In contrast, the system differs in some Arab countries: while secondary education lasts three years in one country, it lasts longer in another.'],
    ['وَيَتَمَيَّزُ كُلُّ نِظَامٍ بِمَوَادَّ إِلْزَامِيَّةٍ وَأُخْرَى اخْتِيَارِيَّةٍ. وَإِذَا أُتِيحَ لِلطُّلَّابِ وَقْتٌ لِلْإِبْدَاعِ، سَتَتَحَسَّنُ نَتَائِجُهُمْ.', 'Each system has compulsory and elective subjects. If students are given time for creativity, their results will improve.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ مَرَاحِلَ نِظَامِكَ التَّعْلِيمِيِّ.' },
      { route: 'develop', ar: 'قَارِنْ بَيْنَ نِظَامَيْنِ مُسْتَعْمِلًا بَيْنَمَا أَوْ فِي حِينِ أَنَّ.' },
      { route: 'stretch', ar: 'بِمَاذَا يَتَمَيَّزُ نِظَامُكَ المِثَالِيُّ؟' },
    ],
    stems: [
      { route: 'core', ar: 'يَتَكَوَّنُ نِظَامُنَا مِنْ ______ مَرَاحِلَ، وَيَجْتَازُ الطُّلَّابُ ______ .' },
      { route: 'develop', ar: 'بَيْنَمَا ______ فِي بَلَدِي، ______ فِي ______ .' },
      { route: 'stretch', ar: 'يَتَمَيَّزُ نِظَامِي المِثَالِيُّ بِمُرُونَةِ ______ ، وَإِذَا ______ ، سَتَتَحَسَّنُ ______ .' },
    ],
    modelEn: ['Describe the stages of your system.', 'Our system has three stages, and students sit the certificate exams at the end of secondary school.', 'And what is your ideal system distinguished by?', 'It is distinguished by flexible elective subjects, and if there is time for creativity, results will improve.'],
    notes: 'Website prompts and model. Students may describe any system they know (their own school, a parent’s school abroad). Check the complements and the noun after فِي حِينِ أَنَّ (-a). To a girl: صِفِي · نِظَامِكِ · قَارِنِي · مُسْتَعْمِلَةً.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Website Core: five sentences using the academic verbs with correct complements.' },
    develop: { amount: '60–80 words', how: 'Website Develop: add two formal contrast connectors comparing two systems.' },
    stretch: { amount: '90–100 words', how: 'Website task: close with a distinguishing feature and a conditional about improvement.' },
  },
  frames: {
    core: [
      { en: 'The system consists of … stages.', ar: 'يَتَكَوَّنُ النِّظَامُ مِنْ ______ مَرَاحِلَ.' },
      { en: 'Students pass … at the end of …', ar: 'يَجْتَازُ الطُّلَّابُ ______ فِي نِهَايَةِ ______ .' },
      { en: 'Some excel in …', ar: 'يَتَفَوَّقُ بَعْضُهُمْ فِي ______ .' },
      { en: 'Then they enrol at …', ar: 'ثُمَّ يَلْتَحِقُونَ بِالجَامِعَةِ أَوْ ______ .' },
    ],
    develop: [
      { en: 'While … in my country, … in …', ar: 'بَيْنَمَا ______ فِي بَلَدِي، ______ فِي ______ .' },
      { en: 'One system relies on …, whereas another …', ar: 'يَعْتَمِدُ نِظَامٌ عَلَى ______ ، فِي حِينِ أَنَّ نِظَامًا آخَرَ ______ .' },
      { en: 'Each system is distinguished by …', ar: 'يَتَمَيَّزُ كُلُّ نِظَامٍ بِتَوَازُنٍ بَيْنَ ______ .' },
      { en: 'If the system focused on thinking, …', ar: 'إِذَا رَكَّزَتِ المَنْظُومَةُ عَلَى التَّفْكِيرِ، ______ .' },
    ],
    bank: ['ثَلَاثُ مَرَاحِلَ', 'امْتِحَانَاتُ الشَّهَادَةِ', 'العُلُومُ', 'الرِّيَاضِيَّاتُ', 'الجَامِعَةُ', 'التَّدْرِيبُ المِهَنِيُّ', 'المَوَادُّ الإِلْزَامِيَّةُ', 'المَوَادُّ الاخْتِيَارِيَّةُ', 'التَّقْيِيمُ المُسْتَمِرُّ', 'الامْتِحَانُ النِّهَائِيُّ', 'المُرُونَةُ', 'الإِبْدَاعُ'],
  },
  stretch: [
    ['فِي سِنِّ السَّادِسَةَ عَشْرَةَ', 'at the age of sixteen'],
    ['فَيَلْتَحِقُونَ بِالجَامِعَاتِ', 'and so they go on to university'],
    ['يَمْتَدُّ فِي غَيْرِهِ أَكْثَرَ', 'it lasts longer in another'],
    ['يَعْتَمِدُ آخَرُ عَلَى التَّقْيِيمِ المُسْتَمِرِّ', 'another relies on continuous assessment'],
    ['عَلَى التَّفْكِيرِ لَا الحِفْظِ', 'on thinking, not memorising'],
  ],
  modelEn: 'The British education system consists of three main stages; students pass the certificate exams at sixteen, and some excel and go on to university. In contrast, the system differs in some Arab countries: while secondary education lasts three years in one country, it lasts longer in another. Each system is distinguished by a balance between compulsory and elective subjects. Whereas one system relies on the final exam, another relies on continuous assessment. In my opinion, if the system focuses on thinking rather than memorising, attainment will improve.',
  find: ['yajtāz + a direct object', 'yatafawwaq fī / yaltaḥiq bi-', 'two formal contrast connectors', 'yatamayyaz bi- and a closing conditional'],
  modelNotes: 'Website writing model. Evidence: يَجْتَازُ الطُّلَّابُ امْتِحَانَاتِ · يَتَفَوَّقُ بَعْضُهُمْ فَيَلْتَحِقُونَ بِالجَامِعَاتِ · فِي المُقَابِلِ · فَبَيْنَمَا … يَمْتَدُّ … · يَتَمَيَّزُ كُلُّ نِظَامٍ بِتَوَازُنٍ · فِي حِينِ أَنَّ نِظَامًا … · إِذَا رَكَّزَتِ … فَسَيَتَحَسَّنُ.',
  selfCheck: [
    { route: 'core', text: 'No preposition after yajtāz; fī after yatafawwaq and yarsub.' },
    { route: 'core', text: 'bi- after yaltaḥiq and yatamayyaz; ʿalā after yaḥṣul.' },
    { route: 'develop', text: 'I compared with baynamā / fī ḥīni anna, not a chain of wa.' },
    { route: 'develop', text: 'After fī ḥīni anna my noun ends in -a.' },
    { route: 'stretch', text: 'I closed with a feature and a conditional, comparing fairly.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['لَا تُقَاسُ', 'is not measured'], ['جَوْدَةُ', 'the quality of'], ['فِعْلًا', 'really, actually'], ['تَقْيِيمٍ عَادِلٍ', 'fair assessment'], ['التَّقْيِيمِ المُسْتَمِرِّ', 'continuous assessment'],
    ['المُتَفَوِّقُونَ', 'high achievers'], ['التَّدْرِيبَ المِهَنِيَّ', 'vocational training'], ['كِلَا المَسَارَيْنِ', 'both paths'], ['الحِفْظِ', 'memorising'], ['المُرُونَةَ', 'flexibility'],
  ],
  prep: {
    words: [['قَالَ إِنَّ', 'he said that', 'قَالَتْ she'], ['أَضَافَ أَنَّ', 'he added that', 'أَضَافَتْ she'], ['أَكَّدَ أَنَّ', 'he stressed that', 'أَكَّدَتْ she'], ['وَفْقًا لِـ', 'according to', '—'], ['دِرَاسَةٌ حَدِيثَةٌ', 'a recent study', 'pl. دِرَاسَاتٌ']],
    questionEn: 'What did a teacher or a parent once tell you about studying? Report it.',
    questionAr: 'قَالَ لِي أَبِي إِنَّ ______ .',
    homework: {
      core: 'Learn the academic verbs with their complements; write five sentences.',
      develop: 'A 60–80-word comparison of two systems with two contrast connectors.',
      stretch: 'Website writing task: 90–100 words with يَتَمَيَّزُ بِـ and a closing conditional.',
    },
    wordsSource: 'The five words come from the website P2-L02 vocabulary (reported speech).',
  },
  remember: 'Remember: yajtāz al-imtiḥān (no preposition) · yatafawwaq / yarsub FĪ · yaltaḥiq BI- · yaḥṣul ʿALĀ — and compare, don’t list: baynamā … · fī ḥīni anna + -a · yatamayyaz BI-.',
});

module.exports = { meta, slides };
