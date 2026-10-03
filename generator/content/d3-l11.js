'use strict';
/* D3-L11 · D3 Consolidation — Error Analysis and Assessment Preparation — website: Pathways › Development › D3 › D3-L11 (agreement audit, verb + preposition audit, future audit, evidence audit; error-analysis profile; assessment rehearsal listening).
 * Website vocabulary, grammar rules, listening script and error-analysis text used as published; the quiz, listening and reading
 * questions, sorter, mistakes, speaking prompts, writing model, mission and final check are generic placeholders on the website
 * for this lesson (its visual game repeats D3-L01), so those items are teacher-written from the website’s own texts and rules. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D3')({
  n: 11, fileTitle: 'D3_Consolidation_Error_Analysis', chip: 'Unit Review',
  title: 'D3 Consolidation — Error Analysis and Assessment Preparation', arabic: 'تَرْسِيخُ الوَحْدَةِ الثَّالِثَةِ — تَحْلِيلُ الأَخْطَاءِ وَالاِسْتِعْدَادُ لِلتَّقْيِيمِ',
  focus: 'Pull the whole of D3 together: four audits (agreement · verb + preposition · future · evidence), a diagnose → explain → repair routine on a real student text, and one precise target before the D3 assessment.',
  icon: 'FaListCheck', iconSet: 'fa6',
});

const PL = {
  'طَبِيبٌ': 'أَطِبَّاءُ', 'مُهَنْدِسٌ': 'مُهَنْدِسُونَ', 'مُدَرِّسٌ': 'مُدَرِّسُونَ', 'مُمَرِّضٌ': 'مُمَرِّضُونَ', 'مُحَامٍ': 'مُحَامُونَ', 'صَحَفِيٌّ': 'صَحَفِيُّونَ',
  'مُبَرْمِجٌ': 'مُبَرْمِجُونَ', 'مُحَاسِبٌ': 'مُحَاسِبُونَ', 'مُصَمِّمٌ': 'مُصَمِّمُونَ', 'طَيَّارٌ': 'طَيَّارُونَ', 'شُرْطِيٌّ': 'شُرْطِيُّونَ', 'طَبَّاخٌ': 'طَبَّاخُونَ',
};
const forms = {};
D.site('D3-L11').vocab[0].items.forEach((it) => {
  const [m, f] = it.ar.split(' / ');
  if (PL[m]) forms[it.ar] = { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: PL[m] }, { l: 'f.', ar: f }, { l: 'm.', ar: m }] };
});
const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D3-L11', {
  support: `• No new grammar today: this is the D3 review before the D3-L12 assessment.
• Core: the agreement and future audits on the website error-analysis text (four errors to find). Develop: all four audits + explain each correction in one line. Stretch: a complete D3 response, then a self-audit with the checklist and a measurable target.
• Use the Do Now and quick-check results to choose each student’s route for the final You Do.
• The website listening is an ASSESSMENT REHEARSAL (an internship advert): treat it like the real test — two listenings, no script until after.`,
  teach: 'Four audits and a three-step repair routine.',
  wedo: 'Sort errors by audit, repair them, then an assessment-style listening.',
  next: { nextCode: 'D3-L12', nextTitle: 'D3 Review and Unit Assessment', nextAr: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ' },
  objectives: ['Retrieve the core D3 vocabulary (jobs, plans, connectors).', 'Audit a text for agreement, prepositions, future forms and evidence.', 'Explain why each correction is needed.', 'Set one precise, evidence-based target before the assessment.'],
  skipGroups: [1], // 24 review words (D3-L04 / L06): covered by the audits; the website vault is the revision list
  flexGroups: [2],
  rulesAr: 'تَحْلِيلُ الأَخْطَاءِ فِي اللُّغَةِ المِهَنِيَّةِ',
  doNow: {
    questions: [
      q('What does تَحْلِيلُ الأَخْطَاءِ mean?', ['error analysis', 'a complete review', 'a priority'], 'Prepared at home (D3-L10).'),
      q('What does أُحَسِّنُ mean?', ['I improve', 'I review', 'I eliminate'], 'Prepared at home (D3-L10).'),
      q('Complete: قَالَتْ ___ سَتَدْرُسُ الطِّبَّ.', ['إِنَّهَا', 'إِنَّهُ', 'أَنَا'], 'D3-L10: reporting a girl.'),
      q('Choose the accurate sentence.', ['أُمِّي مُحَاسِبَةٌ وَتَعْمَلُ فِي شَرِكَةٍ.', 'أُمِّي مُحَاسِبٌ وَيَعْمَلُ فِي شَرِكَةٍ.', 'أُمِّي تَكُونُ مُحَاسِبَةٌ.'], 'D3-L01: agreement, no “is”.'),
      q('Complete: يَحْتَاجُ الطَّبِيبُ ___ الصَّبْرِ.', ['إِلَى', 'فِي', 'عَنْ'], 'D3-L03.'),
    ],
    keyIdea: { text: 'Before you fix a word, ask: which audit? — agreement, preposition, future or evidence.', ar: 'هِيَ {e|مُهَنْدِسَةٌ} وَ{e|تَعْمَلُ} · يَحْتَاجُ {k|إِلَى} · {w|سَوْفَ أَدْرُسُ}' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of D3-L10. Questions 3–5 retrieve D3-L10, D3-L01 and D3-L03. Note which of 3–5 each student gets wrong: it points to their audit priority today.',
  },
  routes: {
    core: ['I can find agreement and future errors.', 'I can describe a job and a plan accurately.'],
    develop: ['I can explain why each correction is needed.', 'I can audit prepositions and evidence too.'],
    stretch: ['I can write a complete D3 response and self-audit it.', 'I can set a precise, evidence-based target.'],
  },
  bridge: [
    { ar: 'تَحْلِيلٌ', urdu: 'تحلیل', tr: 'tahlīl', en: 'analysis' },
    { ar: 'خَطَأٌ', urdu: 'خطا', tr: 'khatā', en: 'mistake' },
    { ar: 'صَحِيحٌ', urdu: 'صحیح', tr: 'sahīh', en: 'correct' },
    { ar: 'تَصْحِيحٌ', urdu: 'تصحیح', tr: 'tashīh', en: 'correction' },
    { ar: 'دَلِيلٌ', urdu: 'دلیل', tr: 'dalīl', en: 'evidence, proof' },
  ],
  bridgeNotes: 'URDU BRIDGE: every key word of the error-analysis routine is shared: تحلیل، خطا، صحیح، تصحیح، دلیل. Students can say the routine in Urdu first, then in Arabic.',
  core: ['طَبِيبٌ / طَبِيبَةٌ', 'مُهَنْدِسٌ / مُهَنْدِسَةٌ', 'مُدَرِّسٌ / مُدَرِّسَةٌ', 'مُمَرِّضٌ / مُمَرِّضَةٌ', 'مُحَامٍ / مُحَامِيَةٌ', 'صَحَفِيٌّ / صَحَفِيَّةٌ', 'مُبَرْمِجٌ / مُبَرْمِجَةٌ', 'مُحَاسِبٌ / مُحَاسِبَةٌ'],
  forms,
  vocabNotes: {
    0: 'Jobs review (D3-L01): every card shows m. · f. · pl. Quick-fire: say أَخِي / أُخْتِي + a job; the class gives the right form.',
    1: 'Plans (FLEX): D3-L04 review — check sa- / sawfa + present, and an / li-kay + verb in -a.',
    2: 'Cohesion (FLEX): D3-L09 review — every connector must have a job in your text.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 5, eyebrow: 'Grammar focus · Part 1 · the four D3 audits (website rules 1–4)', title: 'Four audits, four checks', ar: 'أَرْبَعُ مُرَاجَعَاتٍ',
      cols: [{ label: 'Audit', w: 2.5 }, { label: '✗', w: 3.4, size: 20 }, { label: '✓', w: 3.9, size: 20 }, { label: 'Check …', w: 2.53 }],
      rows: [
        { core: true, cells: ['Agreement (L01, L03)', P('أُخْتِي مُهَنْدِسٌ وَهِيَ يَعْمَلُ.', ''), P('أُخْتِي {e|مُهَنْدِسَةٌ} وَهِيَ {e|تَعْمَلُ}.', ''), 'person ↔ verb ↔ adjective'] },
        { cells: ['Verb + preposition (L03, L06)', P('يَحْتَاجُ خِبْرَةً. · يَتَقَدَّمُ الوَظِيفَةَ.', ''), P('يَحْتَاجُ {k|إِلَى} خِبْرَةٍ. · يَتَقَدَّمُ {k|لِلوَظِيفَةِ}.', ''), 'the whole phrase'] },
        { core: true, cells: ['Future (L04)', P('سَوْفَ دَرَسَتْ فِي الجَامِعَةِ.', ''), P('{w|سَوْفَ تَدْرُسُ} فِي الجَامِعَةِ.', ''), 'sawfa + PRESENT'] },
        { cells: ['Evidence (L03, L06)', P('أَنَا مُنَظَّمٌ.', ''), P('أَنَا مُنَظَّمٌ، {k|وَالدَّلِيلُ} أَنَّنِي أُسَلِّمُ عَمَلِي فِي المَوْعِدِ.', ''), 'claim + proof'] },
      ],
      ltr: true,
      foot: 'Traffic-light each audit for yourself: green · amber · red. Your reddest audit is your priority before D3-L12.',
      notes: `GRAMMAR PART 1 — website rules “Agreement audit” (الشَّخْصُ ↔ الفِعْلُ ↔ الصِّفَةُ: check gender and person across the whole sentence), “Verb-preposition audit” (learn the complete phrase, not an isolated verb), “Future audit” (do not combine سوف with a past verb) and “Evidence audit” (a developed answer proves or explains the claim). Website examples in the ✓ column; the ✗ column is from the website error-analysis text.
Row 2: لِـ + الوَظِيفَة is written لِلوَظِيفَةِ (the alif of al- drops).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · diagnose, explain, repair (the website error-analysis text)', title: 'Fix one sentence the right way', ar: 'شَخِّصْ · اِشْرَحْ · صَحِّحْ',
      cards: [
        { chip: '1 · DIAGNOSE', color: '1D5FBF', head: 'مَا الخَطَأُ؟', big: 'لِكَيْ تُصْبِحُ مُدِيرٌ', en: 'Two errors: the verb after li-kay, and the job after tuṣbiḥa.', clue: 'Name the audit.' },
        { chip: '2 · EXPLAIN', color: '6B4C9A', head: 'لِمَاذَا؟', big: 'بَعْدَ لِكَيْ يَأْتِي فِعْلٌ مَنْصُوبٌ.', en: 'After li-kay: -a. After tuṣbiḥa: the job in -atan (she).', clue: 'One line per rule.' },
        { chip: '3 · REPAIR', color: '1F7A4D', head: 'الصِّيَاغَةُ الصَّحِيحَةُ', big: 'لِكَيْ تُصْبِحَ مُدِيرَةً', en: 'in order to become a manager (f.)', clue: 'Now the rule is reusable.' },
      ],
      error: { text: 'Website error-analysis text: the future needs a present verb.', pairs: [['سَوْفَ تَدْرُسُ فِي الجَامِعَةِ.', 'سَوْفَ دَرَسَتْ فِي الجَامِعَةِ.']] },
      notes: `GRAMMAR PART 2 — the website reading text is a student’s faulty paragraph with its correction: «أُخْتِي مُهَنْدِسٌ وَهِيَ يَعْمَلُ فِي شَرِكَةٍ. سَوْفَ دَرَسَتْ فِي الجَامِعَةِ لِكَيْ تُصْبِحُ مُدِيرٌ» → «أُخْتِي مُهَنْدِسَةٌ وَهِيَ تَعْمَلُ فِي شَرِكَةٍ. سَوْفَ تَدْرُسُ فِي الجَامِعَةِ لِكَيْ تُصْبِحَ مُدِيرَةً». The four systems: gender, verb person, future, case ending.
Routine (as in F6-L11): diagnose (which audit?) → explain (which rule?) → repair.`,
    },
  ],
  rulesTitle: 'Integrated accuracy and error diagnosis',
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me audit a student’s paragraph',
    steps: [
      { head: 'Agreement', ar: 'أُخْتِي {e|مُهَنْدِسَةٌ} وَهِيَ {e|تَعْمَلُ}', think: 'She → -atun and ta-.' },
      { head: 'Future', ar: '{w|سَوْفَ تَدْرُسُ} فِي الجَامِعَةِ', think: 'sawfa + present, she.' },
      { head: 'After li-kay', ar: 'لِكَيْ {k|تُصْبِحَ}', think: 'Verb in -a.' },
      { head: 'Job after uṣbiḥa', ar: 'تُصْبِحَ {k|مُدِيرَةً}', think: 'f. + -an = -atan.' },
    ],
    legend: ['e', 'w', 'k'], legendLabels: { e: 'AGREEMENT', w: 'FUTURE', k: 'CASE / MOOD' },
    model: 'أُخْتِي {e|مُهَنْدِسَةٌ} وَهِيَ {e|تَعْمَلُ} فِي شَرِكَةٍ كَبِيرَةٍ. {w|سَوْفَ تَدْرُسُ} الإِدَارَةَ فِي الجَامِعَةِ لِكَيْ {k|تُصْبِحَ مُدِيرَةً}، لِأَنَّهَا تَحْتَاجُ إِلَى مُؤَهِّلَاتٍ أَعْلَى. هِيَ مُنَظَّمَةٌ، وَالدَّلِيلُ أَنَّهَا تُسَلِّمُ عَمَلَهَا دَائِمًا فِي المَوْعِدِ.',
    modelEn: 'My sister is an engineer and she works in a big company. She will study management at university in order to become a manager, because she needs higher qualifications. She is organised: the proof is that she always hands in her work on time.',
    notes: 'I DO (3 min) — the website error-analysis text, corrected one audit at a time, then extended with a reason (D3-L03 needs + ilā) and evidence (D3-L06) so all four audits appear in the copy box.',
  },
  patterns: [
    { ar: 'هِيَ مُهَنْدِسَةٌ وَتَعْمَلُ فِي شَرِكَةٍ كَبِيرَةٍ.', en: 'She is an engineer and works in a big company.', tip: 'Agreement audit.' },
    { ar: 'يَحْتَاجُ إِلَى خِبْرَةٍ. · يَتَقَدَّمُ لِلوَظِيفَةِ.', en: 'He needs experience. · He applies for the job.', tip: 'Verb + preposition.' },
    { ar: 'سَوْفَ أَدْرُسُ لِكَيْ أُصْبِحَ مُحَامِيًا.', en: 'I will study to become a lawyer.', tip: 'Future + purpose.' },
    { ar: 'أَنَا مُنَظَّمٌ، وَالدَّلِيلُ أَنَّنِي أُسَلِّمُ عَمَلِي فِي المَوْعِدِ.', en: 'I am organised; the proof is that I hand in my work on time.', tip: 'Claim + evidence.' },
  ],
  sorterCats: ['Agreement', 'Preposition', 'Future', 'Evidence'],
  sorterNotes: 'Then repair each item aloud. Stretch: explain the rule in one English line.',
  patch: {
    mission: null,
    sorter: {
      title: 'Which audit finds the error?', instructions: 'Each item has one problem: is it agreement, a missing preposition, a wrong future, or missing evidence?',
      categories: ['Agreement', 'Preposition', 'Future', 'Evidence'],
      items: [
        { label: 'هِيَ مُهَنْدِسٌ', answer: 0 }, { label: 'أُمِّي يَعْمَلُ', answer: 0 },
        { label: 'يَحْتَاجُ الصَّبْرَ', answer: 1 }, { label: 'يَتَقَدَّمُ الوَظِيفَةَ', answer: 1 },
        { label: 'سَوْفَ دَرَسْتُ', answer: 2 }, { label: 'سَوْفَ سَأَعْمَلُ', answer: 2 },
        { label: 'أَنَا مُنَظَّمٌ.', answer: 3 }, { label: 'أُحِبُّ الطِّبَّ.', answer: 3 },
      ],
    },
    mistakes: [
      { wrong: 'أُخْتِي مُهَنْدِسٌ وَهِيَ يَعْمَلُ فِي شَرِكَةٍ.', right: 'أُخْتِي مُهَنْدِسَةٌ وَهِيَ تَعْمَلُ فِي شَرِكَةٍ.', why: 'Agreement: she → -atun and ta-.' },
      { wrong: 'سَوْفَ دَرَسَتْ فِي الجَامِعَةِ.', right: 'سَوْفَ تَدْرُسُ فِي الجَامِعَةِ.', why: 'Future: sawfa + present.' },
      { wrong: 'لِكَيْ تُصْبِحُ مُدِيرٌ.', right: 'لِكَيْ تُصْبِحَ مُدِيرَةً.', why: 'After li-kay: -a; the job: -atan.' },
    ],
    grammar: {
      common_error: 'Do not correct only the visible ending: name the audit (agreement, preposition, future, evidence) and the rule, then repair (teacher wording: the website common error for this lesson is generic).',
      quiz: [
        L('Complete: أُخْتِي ___ وَتَعْمَلُ فِي شَرِكَةٍ.', ['مُهَنْدِسَةٌ', 'مُهَنْدِسٌ', 'مُهَنْدِسُونَ'], 'Agreement: she.'),
        L('Complete: يَتَقَدَّمُ ___ الوَظِيفَةِ.', ['لِـ', 'فِي', 'عَنْ'], 'yataqaddamu li-.'),
        L('Which future is correct?', ['سَوْفَ أَدْرُسُ', 'سَوْفَ دَرَسْتُ', 'سَوْفَ سَأَدْرُسُ'], 'sawfa + present only.'),
        L('Which answer has evidence?', ['أَنَا مُنَظَّمٌ، وَالدَّلِيلُ أَنَّنِي أُسَلِّمُ عَمَلِي فِي المَوْعِدِ.', 'أَنَا مُنَظَّمٌ جِدًّا.', 'أَنَا مُنَظَّمٌ وَمَسْؤُولٌ.'], 'Claim + proof.'),
        L('Complete: سَأَدْرُسُ لِكَيْ ___ مُحَامِيًا.', ['أُصْبِحَ', 'أَصْبَحْتُ', 'سَأُصْبِحُ'], 'After li-kay: present verb in -a.'),
        L('Complete: يَجِبُ أَنْ تَكُونَ المُمَرِّضَةُ ___ .', ['صَبُورَةً', 'صَبُورٌ', 'صَبُورًا'], 'She + -atan.'),
        L('Complete: الشَّرِكَةُ ___ أَعْمَلُ فِيهَا كَبِيرَةٌ.', ['الَّتِي', 'الَّذِي', 'الَّذِينَ'], 'D3-L02.'),
        L('Which is the formal opening of an application?', ['يَسُرُّنِي أَنْ أَتَقَدَّمَ لِلوَظِيفَةِ.', 'أُرِيدُ الوَظِيفَةَ.', 'مَرْحَبًا!'], 'D3-L06.'),
      ],
    },
    final: [
      L('Which audit checks سَوْفَ + verb?', ['future', 'agreement', 'evidence'], 'Future audit.'),
      L('Complete: يَحْتَاجُ الطَّبِيبُ ___ الدِّقَّةِ.', ['إِلَى', 'فِي', 'مِنْ'], 'Verb + preposition.'),
      L('Choose the correct repair of: هِيَ مُحَامٍ.', ['هِيَ مُحَامِيَةٌ.', 'هِيَ مُحَامُونَ.', 'هُوَ مُحَامِيَةٌ.'], 'Agreement.'),
      L('What makes an answer “developed”?', ['a claim with proof or a reason', 'more adjectives', 'longer words'], 'Evidence audit.'),
    ],
    listening: {
      questions: [
        L('What kind of opportunity is advertised?', ['a training placement for students', 'a full-time job', 'a scholarship'], 'فُرْصَةِ تَدْرِيبٍ لِلطُّلَّابِ'),
        L('Which two requirements are named?', ['computer skills and teamwork', 'a degree and experience', 'languages and driving'], 'إِجَادَةُ الحَاسُوبِ وَالقُدْرَةُ عَلَى العَمَلِ ضِمْنَ فَرِيقٍ'),
        L('What is the exact start date?', ['2 August', '12 August', '2 April'], 'فِي الثَّانِي مِنْ أَغُسْطُسَ، لَا فِي الثَّانِي عَشَرَ'),
        L('How long does it last?', ['four weeks', 'two weeks', 'twelve weeks'], 'أَرْبَعَةَ أَسَابِيعَ'),
        L('What two benefits are provided?', ['training and a certificate', 'a salary and a laptop', 'transport and lunch'], 'تَدْرِيبًا وَشَهَادَةً'),
        L('What is NOT provided?', ['a salary', 'training', 'a certificate'], 'لَا تُقَدِّمُ رَاتِبًا'),
      ],
    },
    reading: {
      questions: [
        L('What gender error appears first?', ['أُخْتِي مُهَنْدِسٌ', 'وَهِيَ يَعْمَلُ', 'فِي شَرِكَةٍ'], 'Sister (f.) + masculine job.'),
        L('Which verb-person error appears?', ['هِيَ يَعْمَلُ', 'سَوْفَ دَرَسَتْ', 'لِكَيْ تُصْبِحُ'], 'She + ya- verb.'),
        L('What is wrong after سَوْفَ?', ['a past verb is used', 'it should be sa-', 'nothing'], 'sawfa + darasat (past).'),
        L('What is the correct future verb?', ['سَوْفَ تَدْرُسُ', 'سَوْفَ دَرَسَتْ', 'سَوْفَ يَدْرُسُ'], 'She → tadrusu.'),
        L('What is the correct job after تُصْبِحَ?', ['مُدِيرَةً', 'مُدِيرٌ', 'مُدِيرَةٌ'], 'f. + -an.'),
        L('Which four systems are reviewed?', ['gender, verb, future and case', 'spelling, style, length and title', 'vocabulary only'], 'الجِنْسِ وَالفِعْلِ وَالمُسْتَقْبَلِ وَالحَالَةِ الإِعْرَابِيَّةِ'),
      ],
    },
    speaking: {
      context: 'Full D3 topic conversation',
      model: [
        ['A', 'مَا المِهْنَةُ الَّتِي تُرِيدُهَا؟ وَلِمَاذَا؟', 'Which job do you want? Why?'],
        ['B', 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ مُحَامِيًا لِأَنَّنِي أُحِبُّ العَدَالَةَ.', 'I aspire to become a lawyer because I love justice.'],
        ['A', 'وَمَا مَهَارَاتُكَ؟', 'And your skills?'],
        ['B', 'أَنَا مُنَظَّمٌ، وَالدَّلِيلُ أَنَّنِي أُسَلِّمُ عَمَلِي فِي المَوْعِدِ.', 'I am organised; the proof is that I hand in my work on time.'],
      ],
    },
    writing: {
      prompt: 'Produce a complete D3 response, then use an error-analysis checklist to improve agreement, prepositions, future forms and evidence.',
      model: 'فِي عَائِلَتِي مِهَنٌ مُخْتَلِفَةٌ: أُمِّي مُمَرِّضَةٌ وَتَعْمَلُ فِي مُسْتَشْفًى كَبِيرٍ، بَيْنَمَا أَبِي مُحَاسِبٌ فِي شَرِكَةٍ دَوْلِيَّةٍ. أَمَّا أَنَا فَأَطْمَحُ إِلَى أَنْ أُصْبِحَ مُحَامِيًا لِأَنَّنِي أُحِبُّ العَدَالَةَ. هٰذِهِ المِهْنَةُ تَحْتَاجُ إِلَى الدِّقَّةِ وَمَهَارَةِ التَّوَاصُلِ. أَنَا مُنَظَّمٌ، وَالدَّلِيلُ أَنَّنِي أُسَلِّمُ عَمَلِي دَائِمًا فِي المَوْعِدِ. أَوَّلًا سَوْفَ أَدْرُسُ القَانُونَ فِي الجَامِعَةِ، ثُمَّ سَأَتَدَرَّبُ فِي مَكْتَبِ مُحَامَاةٍ لِكَيْ أَكْتَسِبَ خِبْرَةً. عَلَى الرَّغْمِ مِنْ أَنَّ الطَّرِيقَ طَوِيلٌ، فَإِنَّنِي مُسْتَعِدٌّ. هَدَفِي قَبْلَ التَّقْيِيمِ هُوَ مُرَاجَعَةُ الأَفْعَالِ بَعْدَ لِكَيْ، لِأَنَّنِي أَخْطَأْتُ فِيهَا مَرَّتَيْنِ.',
    },
  },
  hints: ['She: which job ending and verb prefix?', 'sawfa + past or present?', 'After li-kay and tuṣbiḥa?'],
  coreTip: 'Assessment rehearsal: listen twice.\nCore: questions 1, 4 and 6. Two dates are heard!',
  listenRoutes: 'Core: questions 1, 4 and 6. Develop / Stretch: all 6 — question 3 has a corrected date (2nd, not 12th).',
  gloss: [
    ['تُعْلِنُ شَرِكَةٌ تِقْنِيَّةٌ عَنْ فُرْصَةِ تَدْرِيبٍ لِلطُّلَّابِ.', 'A tech company announces a training placement for students.'],
    ['يُشْتَرَطُ إِجَادَةُ الحَاسُوبِ وَالقُدْرَةُ عَلَى العَمَلِ ضِمْنَ فَرِيقٍ.', 'Good computer skills and the ability to work in a team are required.'],
    ['سَتَبْدَأُ الفُرْصَةُ فِي الثَّانِي مِنْ أَغُسْطُسَ، لَا فِي الثَّانِي عَشَرَ مِنْهُ،', 'The placement will start on the 2nd of August, not the 12th,'],
    ['وَسَتَسْتَمِرُّ أَرْبَعَةَ أَسَابِيعَ.', 'and it will last four weeks.'],
    ['تُقَدِّمُ الشَّرِكَةُ تَدْرِيبًا وَشَهَادَةً، وَلٰكِنَّهَا لَا تُقَدِّمُ رَاتِبًا.', 'The company provides training and a certificate, but it does not pay a salary.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا مِهْنَةُ أَحَدِ أَفْرَادِ عَائِلَتِكَ؟ وَأَيْنَ يَعْمَلُ؟' },
      { route: 'core', ar: 'مَا المِهْنَةُ الَّتِي تُرِيدُهَا؟ وَلِمَاذَا؟' },
      { route: 'develop', ar: 'مَا مَهَارَاتُكَ؟ وَمَا الدَّلِيلُ؟' },
      { route: 'develop', ar: 'مَا خُطَّتُكَ بَعْدَ المَدْرَسَةِ؟' },
      { route: 'stretch', ar: 'مَا الصُّعُوبَةُ المُحْتَمَلَةُ؟ وَكَيْفَ سَتَتَغَلَّبُ عَلَيْهَا؟' },
    ],
    stems: [
      { route: 'core', ar: '______ مُحَاسِبٌ / مُمَرِّضَةٌ وَيَعْمَلُ / تَعْمَلُ فِي ______ .' },
      { route: 'core', ar: 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ ______ لِأَنَّنِي ______ .' },
      { route: 'develop', ar: 'أَنَا ______ ، وَالدَّلِيلُ أَنَّنِي ______ .' },
      { route: 'develop', ar: 'أَوَّلًا سَوْفَ ______ ، ثُمَّ سَـ ______ لِكَيْ ______ .' },
      { route: 'stretch', ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّنِي ______ .' },
    ],
    modelEn: ['Which job do you want? Why?', 'I aspire to become a lawyer because I love justice.'],
    notes: 'Teacher-written D3 topic conversation (the website prompts are generic) — the same five questions the D3-L12 speaking assessment will use. Pairs: A asks, B answers for one minute; swap. To a girl: مَا المِهْنَةُ الَّتِي تُرِيدِينَهَا؟ · مَا مَهَارَاتُكِ؟',
  },
  write: {
    core: { amount: '5 sentences', how: 'Repair the website student text, then write one accurate sentence for each audit.' },
    develop: { amount: '100–120 words', how: 'A complete D3 response (job, plan, skills + evidence), audited with the four checks.' },
    stretch: { amount: '120–140 words', how: 'Website task: complete D3 response + self-audit + an evidence-based target.' },
  },
  frames: {
    core: [
      { en: 'My mother / father is a … and works in …', ar: 'أُمِّي / أَبِي ______ وَتَعْمَلُ / وَيَعْمَلُ فِي ______ .' },
      { en: 'I will study … in order to become …', ar: 'سَوْفَ أَدْرُسُ ______ لِكَيْ أُصْبِحَ ______ .' },
      { en: 'This job needs …', ar: 'هٰذِهِ المِهْنَةُ تَحْتَاجُ إِلَى ______ .' },
      { en: 'I am …; the proof is that I …', ar: 'أَنَا ______ ، وَالدَّلِيلُ أَنَّنِي ______ .' },
      { en: 'My priority is …', ar: 'أَوْلَوِيَّتِي هِيَ ______ .' },
    ],
    develop: [
      { en: 'whereas my … is a …', ar: 'بَيْنَمَا ______ ______ .' },
      { en: 'First … then … in order to …', ar: 'أَوَّلًا ______ ، ثُمَّ ______ لِكَيْ ______ .' },
      { en: 'Although …, I am ready.', ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّنِي مُسْتَعِدٌّ.' },
      { en: 'My target is … because I made mistakes in …', ar: 'هَدَفِي ______ لِأَنَّنِي أَخْطَأْتُ فِي ______ .' },
    ],
    bank: ['مُهَنْدِسَةٌ', 'تَعْمَلُ فِي', 'يَحْتَاجُ إِلَى', 'يَتَقَدَّمُ لِـ', 'سَوْفَ أَدْرُسُ', 'سَأَتَدَرَّبُ', 'لِكَيْ أُصْبِحَ', 'وَالدَّلِيلُ أَنَّنِي', 'أَوَّلًا', 'ثُمَّ', 'عَلَى الرَّغْمِ مِنْ أَنَّ', 'أَوْلَوِيَّةٌ'],
  },
  stretch: [
    ['أَخْطَأْتُ فِي … مَرَّتَيْنِ', 'I made mistakes in … twice'],
    ['غَيَّرْتُ … إِلَى … لِأَنَّ …', 'I changed … to … because …'],
    ['هٰذِهِ المِهْنَةُ تَحْتَاجُ إِلَى', 'this job needs'],
    ['أَكْتَسِبَ خِبْرَةً', 'gain experience'],
    ['أَصْبَحَ نَصِّي أَدَقَّ', 'my text became more accurate'],
  ],
  modelEn: 'There are different jobs in my family: my mother is a nurse and works in a big hospital, whereas my father is an accountant in an international company. As for me, I aspire to become a lawyer because I love justice. This job needs precision and communication skills. I am organised; the proof is that I always hand in my work on time. First I will study law at university, then I will train in a law office to gain experience. Although the road is long, I am ready. My target before the assessment is to revise verbs after li-kay, because I made mistakes with them twice.',
  find: ['agreement (she → -atun / ta-)', 'a verb + preposition phrase', 'a future with sawfa / sa-', 'a claim with evidence'],
  modelNotes: 'Teacher-written model (the website model for this lesson is a placeholder). Evidence: مُمَرِّضَةٌ وَتَعْمَلُ · تَحْتَاجُ إِلَى · سَوْفَ أَدْرُسُ، سَأَتَدَرَّبُ لِكَيْ أَكْتَسِبَ · وَالدَّلِيلُ أَنَّنِي … · هَدَفِي … لِأَنَّنِي أَخْطَأْتُ … مَرَّتَيْنِ (an evidence-based target).',
  selfCheck: [
    { route: 'core', text: 'Agreement: person, verb and job match.' },
    { route: 'core', text: 'Future: sa- / sawfa + present.' },
    { route: 'develop', text: 'Verbs keep their prepositions.' },
    { route: 'develop', text: 'Every claim has evidence.' },
    { route: 'stretch', text: 'My target names a rule and my evidence.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['كَتَبَ طَالِبٌ', 'a student wrote'], ['يَحْتَوِي عَلَى', 'contains'], ['أَخْطَاءٍ', 'mistakes'], ['الجِنْسِ', 'gender'], ['الفِعْلِ', 'the verb'],
    ['المُسْتَقْبَلِ', 'the future'], ['الحَالَةِ الإِعْرَابِيَّةِ', 'case ending'], ['الصِّيَاغَةُ الصَّحِيحَةُ', 'the correct wording'], ['مُدِيرَةً', 'a manager (f.)'], ['تُصْبِحَ', 'she becomes'],
  ],
  prep: {
    words: [['تَقْيِيمٌ', 'an assessment', 'pl. تَقْيِيمَاتٌ'], ['مَهَارَةٌ', 'a skill', 'pl. مَهَارَاتٌ'], ['دَرَجَةٌ', 'a mark / score', 'pl. دَرَجَاتٌ'], ['تَعْلِيمَاتٌ', 'instructions', 'sing. تَعْلِيمَةٌ'], ['أُرَاجِعُ', 'I revise / check', 'تُرَاجِعُ she']],
    questionEn: 'Revise your reddest audit: write three correct sentences that use it.',
    questionAr: 'أَوْلَوِيَّتِي: …',
    homework: {
      core: 'Redo the error-analysis repair; learn the five assessment words.',
      develop: 'Complete D3 response (100–120 words), audited with the four checks.',
      stretch: 'Website writing task + self-audit; practise the five conversation questions for one minute each.',
    },
    wordsSource: 'The five words are the instruction words of the D3-L12 assessment (skills, marks, instructions).',
  },
  remember: 'Remember: name the audit — agreement · preposition · future · evidence — then explain, then repair.',
});

module.exports = { meta, slides };
