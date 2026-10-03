'use strict';
/* D3-L03 · Skills and Qualities — What Makes a Good Worker? — website: Pathways › Development › D3 › D3-L03 (يَحْتَاجُ إِلَى + skill, يَجِبُ أَنْ يَكُونَ / تَكُونَ + adjective in -an, يَسْتَطِيعُ أَنْ + verb, quality + evidence with لِأَنَّهُ / لِأَنَّهَا).
 * Website vocabulary, grammar rules, listening script and reading text used as published; the quiz, listening and reading
 * questions, sorter, mistakes, model sentences, speaking prompts, writing model, mission and final check are generic placeholders
 * on the website for this lesson, so those items are teacher-written from the website’s own script, text and rules. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D3')({
  n: 3, fileTitle: 'Skills_and_Qualities', chip: 'Skills',
  title: 'Skills and Qualities — What Makes a Good Worker?', arabic: 'المَهَارَاتُ وَالمُؤَهِّلَاتُ — مَا الَّذِي يَجْعَلُ العَامِلَ جَيِّدًا؟',
  focus: 'Say what a job needs (يَحْتَاجُ إِلَى …), what a worker must be (يَجِبُ أَنْ يَكُونَ صَبُورًا), what someone can do (يَسْتَطِيعُ أَنْ …), and prove a quality with behaviour.',
  icon: 'FaPuzzlePiece', iconSet: 'fa6',
});

const PL = {
  'مَسْؤُولٌ': 'مَسْؤُولُونَ', 'مُنَظَّمٌ': 'مُنَظَّمُونَ', 'صَبُورٌ': 'صَبُورُونَ', 'مُجْتَهِدٌ': 'مُجْتَهِدُونَ', 'مُبَادِرٌ': 'مُبَادِرُونَ', 'مَوْثُوقٌ بِهِ': 'مَوْثُوقٌ بِهِمْ',
  'وَاثِقٌ': 'وَاثِقُونَ', 'مُتَعَاوِنٌ': 'مُتَعَاوِنُونَ', 'مَرِنٌ': 'مَرِنُونَ', 'هَادِئٌ': 'هَادِئُونَ', 'طَمُوحٌ': 'طَمُوحُونَ', 'أَمِينٌ': 'أُمَنَاءُ',
};
const forms = {};
D.site('D3-L03').vocab[1].items.forEach((it) => {
  const [m, f] = it.ar.split(' / ');
  forms[it.ar] = { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: PL[m] }, { l: 'f.', ar: f }, { l: 'm.', ar: m }] };
});

const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D3-L03', {
  support: `• Core: 6 skills + 6 qualities (m. / f.) and “A doctor needs patience” (يَحْتَاجُ الطَّبِيبُ إِلَى الصَّبْرِ) + one quality with evidence. Develop: يَجِبُ أَنْ يَكُونَ … (adjective in -an) and يَسْتَطِيعُ أَنْ …. Stretch: two contrasting careers, shared skills, evidence for every quality.
• The D2 personality adjectives return as WORKER qualities (صَبُورٌ، مُتَعَاوِنٌ، مُجْتَهِدٌ) — students already know the m. / f. habit.
• Grammar link: يَجِبُ أَنْ + verb (-a) is from F4-L06 / F5-L10; NEW is يَكُونَ + adjective in -an (صَبُورًا / هَادِئَةً).
• Urdu bridge: مہارت، تجربہ (≠ خِبْرَةٌ by sound), قیادت، ذمہ دار.`,
  teach: 'Needs, must be, can — and evidence for every quality.',
  wedo: 'Picture match, sort skills / qualities, fix and listen to a job advert.',
  next: { nextCode: 'D3-L04', nextTitle: 'The Future Tense — Plans, Ambitions and Career Goals', nextAr: 'المُسْتَقْبَلُ — الخُطَطُ وَالطُّمُوحَاتُ' },
  objectives: ['Name key workplace skills and qualities (m. / f. / pl.).', 'Say what a job needs with يَحْتَاجُ إِلَى.', 'Say what a worker must be (يَجِبُ أَنْ يَكُونَ + -an) and can do.', 'Support every quality with evidence.'],
  flexGroups: [2],
  doNow: {
    questions: [
      q('What does خِبْرَةٌ mean?', ['experience', 'a skill', 'leadership'], 'Prepared at home (D3-L02).'),
      q('What does القِيَادَةُ mean?', ['leadership', 'responsibility', 'organisation'], 'Prepared at home (D3-L02).'),
      q('Complete: الشَّرِكَةُ ___ أَعْمَلُ فِيهَا كَبِيرَةٌ.', ['الَّتِي', 'الَّذِي', 'الَّذِينَ'], 'D3-L02: feminine noun → allatī.'),
      q('Which means “a modern office”?', ['مَكْتَبٌ حَدِيثٌ', 'مَكْتَبٌ حَدِيثَةٌ', 'مَكْتَبَةٌ حَدِيثٌ'], 'D3-L02: the adjective agrees.'),
      q('Choose the sentence about a girl.', ['هِيَ صَبُورَةٌ لِأَنَّهَا تَسْتَمِعُ.', 'هِيَ صَبُورٌ لِأَنَّهُ يَسْتَمِعُ.', 'هِيَ صَبُورَةٌ لِأَنَّهُ تَسْتَمِعُ.'], 'D2-L01: quality + evidence agree.'),
    ],
    keyIdea: { text: 'A job NEEDS a skill; a worker MUST BE a quality — and you prove it with behaviour.', ar: 'يَحْتَاجُ إِلَى {k|الصَّبْرِ} · يَجِبُ أَنْ يَكُونَ {w|صَبُورًا} · {e|لِأَنَّهُ} يَسْتَمِعُ' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of D3-L02. Questions 3–4 retrieve D3-L02; question 5 retrieves D2-L01 (quality + evidence).',
  },
  routes: {
    core: ['I can name six skills and six qualities.', 'I can say what a job needs.'],
    develop: ['I can say what a worker must be and can do.', 'I can prove a quality with behaviour.'],
    stretch: ['I can compare the skills of two careers.', 'I can name the skills they share.'],
  },
  bridge: [
    { ar: 'مَهَارَةٌ', urdu: 'مہارت', tr: 'mahārat', en: 'skill' },
    { ar: 'القِيَادَةُ', urdu: 'قیادت', tr: 'qiyādat', en: 'leadership' },
    { ar: 'مَسْؤُولٌ', urdu: 'مسؤول / ذمہ دار', tr: 'masʾūl', en: 'responsible' },
    { ar: 'الإِبْدَاعُ', urdu: 'ایجاد / بدیع', tr: 'badīʿ', en: 'creativity (root b-d-ʿ)' },
    { ar: 'أَمِينٌ', urdu: 'امین', tr: 'amīn', en: 'trustworthy, honest' },
  ],
  bridgeNotes: 'URDU BRIDGE: مہارت، قیادت، امین are shared (al-Amīn, the Trustworthy). مسؤول is used in formal Urdu; everyday Urdu says ذمہ دار. الإِبْدَاعُ shares the root of بدیع (wonderful, original). خِبْرَةٌ (experience) is NOT Urdu خبر (news) — same root (to know), different meaning: careful!',
  core: ['مَهَارَةُ التَّوَاصُلِ', 'حَلُّ المُشْكِلَاتِ', 'العَمَلُ الجَمَاعِيُّ', 'إِدَارَةُ الوَقْتِ', 'الدِّقَّةُ', 'الخِبْرَةُ', 'مَسْؤُولٌ / مَسْؤُولَةٌ', 'مُنَظَّمٌ / مُنَظَّمَةٌ', 'صَبُورٌ / صَبُورَةٌ', 'مُتَعَاوِنٌ / مُتَعَاوِنَةٌ', 'وَاثِقٌ / وَاثِقَةٌ', 'أَمِينٌ / أَمِينَةٌ'],
  forms,
  vocabNotes: {
    0: 'Skills are NOUNS (what a job needs): يَحْتَاجُ إِلَى + these words. Many are verbal nouns (حَلٌّ = solving, إِدَارَةٌ = managing).',
    1: 'Qualities are ADJECTIVES (what a worker is): every card shows m. · f. · pl. أَمِينٌ has a broken plural: أُمَنَاءُ. مَوْثُوقٌ بِهِ: the pronoun changes too (بِهِ / بِهَا / بِهِمْ).',
    2: 'Reason and evidence (FLEX): the D3 connector list. Today: عَلَى سَبِيلِ المِثَالِ (for example) — the evidence word.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · needs and must be (website rules 1–2)', title: 'Needs a skill · must be a quality', ar: 'يَحْتَاجُ إِلَى · يَجِبُ أَنْ يَكُونَ',
      cols: [{ label: 'He / a man', w: 4.6, size: 22 }, { label: 'She / a woman', w: 4.6, size: 22 }, { label: 'Pattern', w: 3.13 }],
      rows: [
        { core: true, cells: [P('يَحْتَاجُ الطَّبِيبُ {k|إِلَى} الصَّبْرِ.', 'The doctor needs patience.'), P('تَحْتَاجُ المُهَنْدِسَةُ {k|إِلَى} الدِّقَّةِ.', 'The engineer needs accuracy.'), 'needs + ilā + noun'] },
        { core: true, cells: [P('يَحْتَاجُ إِلَى {k|مَهَارَاتِ الحَاسُوبِ}.', 'needs computer skills'), P('تَحْتَاجُ إِلَى {k|العَمَلِ الجَمَاعِيِّ}.', 'needs teamwork'), 'skill noun'] },
        { cells: [P('يَجِبُ أَنْ {w|يَكُونَ} المُدَرِّسُ {w|صَبُورًا}.', 'The teacher must be patient.'), P('يَجِبُ أَنْ {e|تَكُونَ} المُمَرِّضَةُ {e|هَادِئَةً}.', 'The nurse must be calm.'), 'yakūna / takūna + -an'] },
        { cells: [P('يَجِبُ أَنْ يَكُونَ {w|مَسْؤُولًا}.', 'He must be responsible.'), P('يَجِبُ أَنْ تَكُونَ {e|مُنَظَّمَةً}.', 'She must be organised.'), '-an · -atan'] },
      ],
      foot: 'After yakūna / takūna the adjective takes -an: ṣabūran, hādiʾatan (the same ending as yaʿmalu muḥāsiban in D3-L01).',
      notes: `GRAMMAR PART 1 — website rules “Needs a skill” (يَحْتَاجُ إِلَى + مَصْدَرٍ / اسْمٍ) and “Must be” (يَجِبُ أَنْ يَكُونَ / تَكُونَ + صِفَةً: the verb agrees with the person; the predicate adjective is accusative). Website examples: يَحْتَاجُ الطَّبِيبُ إِلَى الصَّبْرِ · تَحْتَاجُ المُهَنْدِسَةُ إِلَى الدِّقَّةِ · يَجِبُ أَنْ يَكُونَ المُدَرِّسُ صَبُورًا · يَجِبُ أَنْ تَكُونَ المُمَرِّضَةُ هَادِئَةً.
Core can stay with rows 1–2 (يَحْتَاجُ إِلَى).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · can do, and the evidence (website rules 3–4) · Develop / Stretch', title: 'Can do · and prove it', ar: 'يَسْتَطِيعُ أَنْ · لِأَنَّهُ',
      cards: [
        { chip: 'ABILITY · DEVELOP', color: '1D5FBF', head: 'يَسْتَطِيعُ أَنْ يَـ…', big: 'يَسْتَطِيعُ أَنْ يَحُلَّ المُشْكِلَاتِ.', en: 'He can solve problems.', clue: 'an + present verb (-a).' },
        { chip: 'SHE CAN · DEVELOP', color: '6B4C9A', head: 'تَسْتَطِيعُ أَنْ تَـ…', big: 'تَسْتَطِيعُ أَنْ تَعْمَلَ ضِمْنَ فَرِيقٍ.', en: 'She can work within a team.', clue: 'Both verbs agree: ta- … ta-.' },
        { chip: 'EVIDENCE · CORE', color: '1E7B4F', head: 'لِأَنَّهُ / لِأَنَّهَا', big: 'هُوَ مَسْؤُولٌ لِأَنَّهُ يَحْتَرِمُ المَوَاعِيدَ.', en: 'He is responsible because he respects deadlines.', clue: 'Behaviour, not a label.' },
      ],
      error: { text: 'After yaḥtāju, use ilā.', pairs: [['يَحْتَاجُ الطَّبِيبُ إِلَى الصَّبْرِ.', 'يَحْتَاجُ الطَّبِيبُ الصَّبْرَ.']] },
      notes: `GRAMMAR PART 2 — website rules “Ability” (يَسْتَطِيعُ أَنْ + مُضَارِعٌ) and “Evidence” (support a quality with behaviour rather than a label alone). Website examples: يَسْتَطِيعُ أَنْ يَحُلَّ المُشْكِلَاتِ · تَسْتَطِيعُ أَنْ تَعْمَلَ ضِمْنَ فَرِيقٍ · هُوَ مَسْؤُولٌ لِأَنَّهُ يَحْتَرِمُ المَوَاعِيدَ · هِيَ مُتَعَاوِنَةٌ لِأَنَّهَا تُسَاعِدُ زُمَلَاءَهَا.
The error pair is teacher-chosen (the website common error for this lesson is generic): in Modern Standard Arabic يَحْتَاجُ normally takes إِلَى.`,
    },
  ],
  rulesTitle: 'Requirement structures',
  quick: [0, 1, 2, 4],
  rest: [3, 5, 6, 7],
  ido: {
    title: 'Watch me describe a good nurse',
    steps: [
      { head: 'Needs', ar: 'تَحْتَاجُ المُمَرِّضَةُ {k|إِلَى} الصَّبْرِ وَالدِّقَّةِ.', think: 'Skill nouns after ilā.' },
      { head: 'Must be', ar: 'يَجِبُ أَنْ {e|تَكُونَ} {e|هَادِئَةً}.', think: 'She → takūna + -atan.' },
      { head: 'Can', ar: 'تَسْتَطِيعُ أَنْ {w|تَعْمَلَ} ضِمْنَ فَرِيقٍ.', think: 'an + verb (-a).' },
      { head: 'Proof', ar: 'مُمَرِّضَتِي مَسْؤُولَةٌ {k|لِأَنَّهَا} تَحْتَرِمُ المَوَاعِيدَ.', think: 'Quality + behaviour.' },
    ],
    legend: ['k', 'e', 'w'], legendLabels: { k: 'NEEDS / PROOF', e: 'MUST BE', w: 'CAN' },
    model: 'تَحْتَاجُ المُمَرِّضَةُ {k|إِلَى} الصَّبْرِ وَالدِّقَّةِ، وَيَجِبُ أَنْ {e|تَكُونَ} {e|هَادِئَةً} عِنْدَمَا يَكُونُ المَرِيضُ قَلِقًا. يَجِبُ أَيْضًا أَنْ {w|تَسْتَطِيعَ} العَمَلَ ضِمْنَ فَرِيقٍ لِأَنَّهَا تَعْمَلُ مَعَ الأَطِبَّاءِ. أَمَّا المُبَرْمِجُ فَيَحْتَاجُ {k|إِلَى} التَّفْكِيرِ المَنْطِقِيِّ، وَيَجِبُ أَنْ {e|يَكُونَ} {e|مُنَظَّمًا}. خَالَتِي مُمَرِّضَةٌ مَسْؤُولَةٌ {k|لِأَنَّهَا} تَحْتَرِمُ المَوَاعِيدَ وَتُسَاعِدُ زُمَلَاءَهَا.',
    modelEn: 'A nurse needs patience and accuracy, and she must be calm when the patient is worried. She must also be able to work in a team because she works with doctors. As for a programmer, he needs logical thinking and he must be organised. My aunt is a responsible nurse because she respects appointments and helps her colleagues.',
    notes: 'I DO (3 min) — teacher-written model built on the website rules and reading text (doctor / programmer / teacher). Think aloud: “Skill (noun) or quality (adjective)? He or she? Where is my proof?”',
  },
  patterns: [
    { ar: 'يَحْتَاجُ الطَّبِيبُ إِلَى الصَّبْرِ.', en: 'A doctor needs patience.', tip: 'needs + ilā + skill noun.' },
    { ar: 'يَجِبُ أَنْ يَكُونَ المُدَرِّسُ صَبُورًا.', en: 'A teacher must be patient.', tip: 'yakūna + adjective (-an).' },
    { ar: 'تَسْتَطِيعُ أَنْ تَعْمَلَ ضِمْنَ فَرِيقٍ.', en: 'She can work in a team.', tip: 'an + verb (-a).' },
    { ar: 'هِيَ مُتَعَاوِنَةٌ لِأَنَّهَا تُسَاعِدُ زُمَلَاءَهَا.', en: 'She is cooperative because she helps her colleagues.', tip: 'Quality + behaviour.' },
  ],
  game: {
    title: 'What is he / she good at? Match the picture',
    pick: [0, 2, 3],
    en: ['He is good at teamwork.', 'He is good at problem solving.', 'She is organised and respects time.'],
    icons: [[['fa6', 'FaHandshake', '1E7B4F'], ['fa6', 'FaPeopleGroup', '5A6472']], [['fa6', 'FaPuzzlePiece', '6B4C9A'], ['fa6', 'FaLightbulb', 'C77700']], [['fa6', 'FaClock', '1D5FBF'], ['fa6', 'FaListCheck', 'B83227']]],
    labels: ['teamwork', 'solving problems', 'organised · on time'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Ask: which word shows HE / SHE? (هُوَ / هِيَ and the -a ending in مُنَظَّمَةٌ). Other website cards: لَدَيْهَا مَهَارَاتُ تَوَاصُلٍ جَيِّدَةٌ · لَدَيْهِ مَهَارَاتٌ رَقْمِيَّةٌ · هِيَ طَمُوحَةٌ وَمُجْتَهِدَةٌ.',
  },
  sorterCats: ['Skill (noun)', 'Quality (adjective)'],
  sorterNotes: 'Then build: يَحْتَاجُ إِلَى + a skill · يَجِبُ أَنْ يَكُونَ + a quality (-an).',
  patch: {
    mission: null,
    sorter: {
      title: 'Skill or quality?', instructions: 'Is it a skill (a noun a job needs) or a quality (an adjective describing the worker)?',
      categories: ['Skill (noun)', 'Quality (adjective)'],
      items: [
        { label: 'حَلُّ المُشْكِلَاتِ', answer: 0 }, { label: 'إِدَارَةُ الوَقْتِ', answer: 0 }, { label: 'الدِّقَّةُ', answer: 0 }, { label: 'العَمَلُ الجَمَاعِيُّ', answer: 0 },
        { label: 'مَسْؤُولٌ', answer: 1 }, { label: 'مُنَظَّمَةٌ', answer: 1 }, { label: 'صَبُورٌ', answer: 1 }, { label: 'مُتَعَاوِنَةٌ', answer: 1 }, { label: 'طَمُوحٌ', answer: 1 },
      ],
    },
    mistakes: [
      { wrong: 'يَجِبُ أَنْ يَكُونَ المُدَرِّسُ صَبُورٌ.', right: 'يَجِبُ أَنْ يَكُونَ المُدَرِّسُ صَبُورًا.', why: 'After yakūna the adjective takes -an.' },
      { wrong: 'يَجِبُ أَنْ يَكُونَ المُمَرِّضَةُ هَادِئَةً.', right: 'يَجِبُ أَنْ تَكُونَ المُمَرِّضَةُ هَادِئَةً.', why: 'The nurse is a woman → takūna.' },
      { wrong: 'تَسْتَطِيعُ أَنْ يَعْمَلَ ضِمْنَ فَرِيقٍ.', right: 'تَسْتَطِيعُ أَنْ تَعْمَلَ ضِمْنَ فَرِيقٍ.', why: 'Both verbs agree with “she”.' },
    ],
    grammar: {
      common_error: 'Do not drop إِلَى after يَحْتَاجُ, and do not leave the adjective after يَكُونَ / تَكُونَ in -un (teacher wording: the website common error for this lesson is generic).',
      quiz: [
        L('Complete: يَحْتَاجُ الطَّبِيبُ ___ الصَّبْرِ.', ['إِلَى', 'فِي', 'عَنْ'], 'yaḥtāju ilā = needs.'),
        L('Complete: يَجِبُ أَنْ ___ المُمَرِّضَةُ هَادِئَةً.', ['تَكُونَ', 'يَكُونَ', 'أَكُونَ'], 'The nurse (f.) → takūna.'),
        L('Complete: يَجِبُ أَنْ يَكُونَ المُدَرِّسُ ___ .', ['صَبُورًا', 'صَبْرًا', 'صَبُورَةً'], 'Masculine teacher + -an.'),
        L('Which word is a SKILL (a noun)?', ['حَلُّ المُشْكِلَاتِ', 'مُنَظَّمٌ', 'صَبُورٌ'], 'ḥall = solving (a noun).'),
        L('Complete: تَسْتَطِيعُ أَنْ ___ ضِمْنَ فَرِيقٍ.', ['تَعْمَلَ', 'يَعْمَلَ', 'تَعْمَلُونَ'], 'She can → an taʿmala.'),
        L('Which gives evidence for a quality?', ['هُوَ مَسْؤُولٌ لِأَنَّهُ يَحْتَرِمُ المَوَاعِيدَ.', 'هُوَ مَسْؤُولٌ جِدًّا.', 'هُوَ مَسْؤُولٌ وَمُنَظَّمٌ.'], 'Quality + behaviour.'),
        L('What does إِدَارَةُ الوَقْتِ mean?', ['time management', 'teamwork', 'leadership'], 'idāra = managing; waqt = time.'),
        L('Choose the feminine of أَمِينٌ.', ['أَمِينَةٌ', 'أُمَنَاءُ', 'أَمَانَةٌ'], 'amīnatun (f.) · umanāʾ (pl.) · amāna = honesty.'),
      ],
    },
    final: [
      L('Complete: تَحْتَاجُ المُهَنْدِسَةُ إِلَى ___ .', ['الدِّقَّةِ', 'دَقِيقَةٌ', 'دَقِيقًا'], 'A skill noun after ilā.'),
      L('Which is a quality (adjective)?', ['مُتَعَاوِنٌ', 'العَمَلُ الجَمَاعِيُّ', 'إِدَارَةُ الوَقْتِ'], 'mutaʿāwin = cooperative.'),
      L('Complete: يَسْتَطِيعُ أَنْ ___ المُشْكِلَاتِ.', ['يَحُلَّ', 'تَحُلَّ', 'حَلَّ'], 'He can → an yaḥulla.'),
      L('Which sentence proves a quality?', ['هِيَ مُتَعَاوِنَةٌ لِأَنَّهَا تُسَاعِدُ زُمَلَاءَهَا.', 'هِيَ مُتَعَاوِنَةٌ.', 'هِيَ مُتَعَاوِنَةٌ جِدًّا.'], 'Behaviour = evidence.'),
    ],
    listening: {
      questions: [
        L('What job is advertised?', ['customer service (female employee)', 'a nurse', 'a programmer'], 'مُوَظَّفَةٍ لِخِدْمَةِ العُمَلَاءِ'),
        L('Which two qualities are needed?', ['confident and patient', 'calm and creative', 'ambitious and honest'], 'وَاثِقَةً وَصَبُورَةً'),
        L('What must she be able to do quickly?', ['solve problems', 'write reports', 'speak to the manager'], 'حَلَّ المُشْكِلَاتِ بِسُرْعَةٍ'),
        L('Is experience essential?', ['no — useful but not essential', 'yes, always', 'it is not mentioned'], 'لَيْسَتْ ضَرُورِيَّةً'),
        L('Why not?', ['the company provides training', 'the job is easy', 'the salary is low'], 'الشَّرِكَةَ تُقَدِّمُ تَدْرِيبًا'),
        L('What is an extra advantage?', ['speaking two languages well', 'a driving licence', 'a university degree'], 'إِجَادَةَ لُغَتَيْنِ'),
      ],
    },
    reading: {
      questions: [
        L('What knowledge does a doctor need?', ['scientific knowledge', 'computer skills', 'business knowledge'], 'مَعْرِفَةٍ عِلْمِيَّةٍ'),
        L('What must a doctor be able to do with patients?', ['listen to them', 'teach them', 'phone them'], 'قُدْرَةٍ عَلَى الاِسْتِمَاعِ لِلْمَرْضَى'),
        L('What kind of thinking does a programmer need?', ['logical thinking', 'creative writing', 'quick speaking'], 'التَّفْكِيرِ المَنْطِقِيِّ'),
        L('When does a programmer need patience?', ['when fixing errors', 'when meeting clients', 'when travelling'], 'عِنْدَ حَلِّ الأَخْطَاءِ'),
        L('What must a teacher be able to do?', ['explain ideas in different ways', 'repair computers', 'work at night'], 'شَرْحِ الأَفْكَارِ بِطُرُقٍ مُخْتَلِفَةٍ'),
        L('Which two things do all three jobs share?', ['communication and responsibility', 'salary and hours', 'travel and leadership'], 'التَّوَاصُلِ وَالمَسْؤُولِيَّةِ'),
      ],
    },
    speaking: {
      context: 'What makes a good worker?',
      model: [
        ['A', 'مَا المَهَارَاتُ الَّتِي يَحْتَاجُ إِلَيْهَا المُدَرِّسُ؟', 'What skills does a teacher need?'],
        ['B', 'يَحْتَاجُ إِلَى التَّوَاصُلِ، وَيَجِبُ أَنْ يَكُونَ صَبُورًا وَمُنَظَّمًا.', 'He needs communication, and he must be patient and organised.'],
        ['A', 'وَمَا أَهَمُّ صِفَةٍ فِيكَ؟', 'And what is your most important quality?'],
        ['B', 'أَنَا مَسْؤُولٌ لِأَنَّنِي أُكْمِلُ وَاجِبَاتِي فِي الوَقْتِ.', 'I am responsible because I finish my homework on time.'],
      ],
    },
    writing: {
      prompt: 'Explain the qualities and skills needed for two contrasting careers.',
      model: 'تَخْتَلِفُ المَهَارَاتُ المَطْلُوبَةُ مِنْ مِهْنَةٍ إِلَى أُخْرَى. تَحْتَاجُ المُمَرِّضَةُ إِلَى الصَّبْرِ وَالدِّقَّةِ، وَيَجِبُ أَنْ تَكُونَ هَادِئَةً عِنْدَمَا يَكُونُ المَرِيضُ قَلِقًا. كَمَا يَجِبُ أَنْ تَسْتَطِيعَ العَمَلَ ضِمْنَ فَرِيقٍ لِأَنَّهَا تَعْمَلُ مَعَ الأَطِبَّاءِ. أَمَّا المُبَرْمِجُ فَيَحْتَاجُ إِلَى التَّفْكِيرِ المَنْطِقِيِّ وَمَهَارَاتِ الحَاسُوبِ، وَيَجِبُ أَنْ يَكُونَ مُنَظَّمًا وَصَبُورًا عِنْدَ حَلِّ الأَخْطَاءِ. عَلَى الرَّغْمِ مِنْ أَنَّ المِهْنَتَيْنِ مُخْتَلِفَتَانِ، فَإِنَّهُمَا تَحْتَاجَانِ إِلَى التَّوَاصُلِ وَالمَسْؤُولِيَّةِ. أَنَا أَمِيلُ إِلَى البَرْمَجَةِ لِأَنَّنِي أَسْتَطِيعُ أَنْ أُرَكِّزَ طَوِيلًا وَأُحِبُّ حَلَّ المُشْكِلَاتِ.',
    },
  },
  hints: ['After yakūna: -un or -an?', 'The nurse is a woman: yakūna or takūna?', 'She can …: ya- or ta-?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nListen for: خِدْمَةِ العُمَلَاءِ · وَاثِقَةً · الخِبْرَةُ.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 6.',
  gloss: [
    ['تَبْحَثُ شَرِكَةٌ عَنْ مُوَظَّفَةٍ لِخِدْمَةِ العُمَلَاءِ.', 'A company is looking for a (female) customer-service employee.'],
    ['يَجِبُ أَنْ تَكُونَ وَاثِقَةً وَصَبُورَةً،', 'She must be confident and patient,'],
    ['وَأَنْ تَسْتَطِيعَ حَلَّ المُشْكِلَاتِ بِسُرْعَةٍ.', 'and able to solve problems quickly.'],
    ['الخِبْرَةُ مُفِيدَةٌ، لٰكِنَّهَا لَيْسَتْ ضَرُورِيَّةً لِأَنَّ الشَّرِكَةَ تُقَدِّمُ تَدْرِيبًا.', 'Experience is useful but not essential, because the company provides training.'],
    ['كَمَا أَنَّ إِجَادَةَ لُغَتَيْنِ تُعَدُّ مِيزَةً مُهِمَّةً.', 'Also, speaking two languages well is an important advantage.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا المَهَارَاتُ الَّتِي يَحْتَاجُ إِلَيْهَا الطَّبِيبُ؟' },
      { route: 'core', ar: 'مَا أَهَمُّ صِفَةٍ فِيكَ؟' },
      { route: 'develop', ar: 'كَيْفَ يَجِبُ أَنْ يَكُونَ المُدَرِّسُ الجَيِّدُ؟' },
      { route: 'stretch', ar: 'مَا المَهَارَاتُ الَّتِي تَشْتَرِكُ فِيهَا كُلُّ المِهَنِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'يَحْتَاجُ الطَّبِيبُ إِلَى ______ .' },
      { route: 'core', ar: 'أَنَا ______ لِأَنَّنِي ______ .' },
      { route: 'develop', ar: 'يَجِبُ أَنْ يَكُونَ ______ وَ ______ .' },
      { route: 'stretch', ar: 'كُلُّ المِهَنِ تَحْتَاجُ إِلَى ______ لِأَنَّ ______ .' },
    ],
    modelEn: ['What skills does a teacher need?', 'He needs communication, and he must be patient and organised.'],
    notes: 'Teacher-written prompts and model (the website prompts are generic). Model continues: A: وَمَا أَهَمُّ صِفَةٍ فِيكَ؟ B: أَنَا مَسْؤُولٌ لِأَنَّنِي أُكْمِلُ وَاجِبَاتِي فِي الوَقْتِ. To a girl: مَا أَهَمُّ صِفَةٍ فِيكِ؟ — أَنَا مَسْؤُولَةٌ لِأَنَّنِي …',
  },
  write: {
    core: { amount: '5 sentences', how: 'One job: two skills (يَحْتَاجُ إِلَى), one quality, and one quality of yours with evidence.' },
    develop: { amount: '80–100 words', how: 'Two jobs: needs, must be (-an) and can do, with evidence for each quality.' },
    stretch: { amount: '100–120 words', how: 'Website task: two contrasting careers, shared skills, and which suits you and why.' },
  },
  frames: {
    core: [
      { en: 'A … needs …', ar: 'يَحْتَاجُ الـ ______ إِلَى ______ .' },
      { en: 'and …', ar: 'وَ ______ .' },
      { en: 'He must be …', ar: 'يَجِبُ أَنْ يَكُونَ ______ .' },
      { en: 'I am … because I …', ar: 'أَنَا ______ لِأَنَّنِي ______ .' },
    ],
    develop: [
      { en: 'A nurse must be calm.', ar: 'يَجِبُ أَنْ تَكُونَ المُمَرِّضَةُ ______ .' },
      { en: 'He can solve problems.', ar: 'يَسْتَطِيعُ أَنْ ______ .' },
      { en: 'As for a programmer, he needs …', ar: 'أَمَّا المُبَرْمِجُ فَيَحْتَاجُ إِلَى ______ .' },
      { en: 'Both jobs need …', ar: 'تَحْتَاجُ المِهْنَتَانِ إِلَى ______ .' },
    ],
    bank: ['يَحْتَاجُ إِلَى', 'يَجِبُ أَنْ يَكُونَ', 'تَكُونَ', 'يَسْتَطِيعُ أَنْ', 'الصَّبْرِ', 'الدِّقَّةِ', 'حَلِّ المُشْكِلَاتِ', 'صَبُورًا', 'مُنَظَّمَةً', 'مَسْؤُولٌ', 'لِأَنَّهُ', 'عَلَى سَبِيلِ المِثَالِ'],
  },
  stretch: [
    ['تَخْتَلِفُ المَهَارَاتُ مِنْ مِهْنَةٍ إِلَى أُخْرَى', 'skills differ from one job to another'],
    ['قُدْرَةٌ عَلَى الاِسْتِمَاعِ', 'the ability to listen'],
    ['بِطُرُقٍ مُخْتَلِفَةٍ', 'in different ways'],
    ['تَشْتَرِكُ المِهَنُ فِي …', 'the jobs share …'],
    ['أَمِيلُ إِلَى …', 'I am drawn to …'],
  ],
  modelEn: 'The skills needed differ from one job to another. A nurse needs patience and accuracy, and she must be calm when a patient is worried. She must also be able to work in a team because she works with doctors. As for a programmer, he needs logical thinking and computer skills, and he must be organised and patient when fixing errors. Although the two jobs are different, they both need communication and responsibility. I am drawn to programming because I can concentrate for a long time and I love solving problems.',
  find: ['yaḥtāju ilā + skill', 'yakūna / takūna + -an', 'yastaṭīʿu an + verb', 'a quality with evidence'],
  modelNotes: 'Teacher-written model (the website model for this lesson is a placeholder). Evidence: تَحْتَاجُ المُمَرِّضَةُ إِلَى الصَّبْرِ · يَجِبُ أَنْ تَكُونَ هَادِئَةً · أَنْ تَسْتَطِيعَ العَمَلَ · مُنَظَّمًا وَصَبُورًا · تَحْتَاجَانِ (dual, Stretch) · لِأَنَّنِي أَسْتَطِيعُ أَنْ أُرَكِّزَ.',
  selfCheck: [
    { route: 'core', text: 'I used yaḥtāju ilā + a skill.' },
    { route: 'core', text: 'My qualities agree (m. / f.).' },
    { route: 'develop', text: 'After yakūna / takūna: -an.' },
    { route: 'develop', text: 'Every quality has evidence.' },
    { route: 'stretch', text: 'I named the skills two jobs share.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['تَخْتَلِفُ', 'differ'], ['المَطْلُوبَةُ', 'required'], ['مَعْرِفَةٍ عِلْمِيَّةٍ', 'scientific knowledge'], ['قُدْرَةٍ عَلَى', 'the ability to'], ['لِلْمَرْضَى', 'to patients'],
    ['التَّفْكِيرِ المَنْطِقِيِّ', 'logical thinking'], ['حَلِّ الأَخْطَاءِ', 'fixing errors'], ['قَادِرًا عَلَى', 'able to'], ['شَرْحِ الأَفْكَارِ', 'explaining ideas'], ['تَشْتَرِكُ', 'share'],
  ],
  prep: {
    words: [['سَـ / سَوْفَ', 'will (future)', 'سَأَدْرُسُ I will study'], ['أُرِيدُ أَنْ أُصْبِحَ', 'I want to become', 'تُرِيدُ أَنْ تُصْبِحَ she'], ['فِي المُسْتَقْبَلِ', 'in the future', '—'], ['بَعْدَ التَّخَرُّجِ', 'after graduation', '—'], ['أُخَطِّطُ لِـ', 'I plan to', 'يُخَطِّطُ he']],
    questionEn: 'What job would you like in the future? Write one sentence.',
    questionAr: 'فِي المُسْتَقْبَلِ أُرِيدُ أَنْ أُصْبِحَ …',
    homework: {
      core: 'Learn 6 skills and 6 qualities (m. / f.); write 5 sentences from the frames.',
      develop: 'Two jobs in 80–100 words: needs, must be, can do, with evidence.',
      stretch: 'Website writing task: two contrasting careers and shared skills (100–120 words).',
    },
    wordsSource: 'The five words come from the website D3-L04 vocabulary (future plans).',
  },
  remember: 'Remember: needs + ilā — must be + -an — prove every quality with behaviour.',
});

module.exports = { meta, slides };
