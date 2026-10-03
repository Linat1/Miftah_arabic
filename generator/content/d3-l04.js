'use strict';
/* D3-L04 · The Future Tense — Plans, Ambitions and Career Goals — website: Pathways › Development › D3 › D3-L04 (سَـ / سَوْفَ + present verb, أَطْمَحُ إِلَى أَنْ + verb, purpose with لِكَيْ / حَتَّى + subjunctive).
 * Website vocabulary, grammar rules, listening script and reading text used as published; the quiz, listening and reading
 * questions, sorter, mistakes, model sentences, speaking prompts, writing model, mission and final check are generic placeholders
 * on the website for this lesson, so those items are teacher-written from the website’s own script, text and rules. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D3')({
  n: 4, fileTitle: 'Future_Tense_Plans_and_Career_Goals', chip: 'Future Plans',
  title: 'The Future Tense — Plans, Ambitions and Career Goals', arabic: 'المُسْتَقْبَلُ — الخُطَطُ وَالطُّمُوحَاتُ وَالأَهْدَافُ المِهْنِيَّةُ',
  focus: 'Talk about the future with سَـ and سَوْفَ, state an ambition (أَطْمَحُ إِلَى أَنْ …) and give the purpose of each step (لِكَيْ / حَتَّى …).',
  icon: 'FaRoute', iconSet: 'fa6',
});

const ihs = (i, he, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'he', ar: he }, { l: 'I', ar: i }] });
const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D3-L04', {
  support: `• Core: سَـ + the present verb for I / he / she (سَأَدْرُسُ · سَيَدْرُسُ · سَتَدْرُسُ) and أُرِيدُ أَنْ أُصْبِحَ … (job in -an, D3-L01). Develop: سَوْفَ, أَطْمَحُ إِلَى أَنْ and one purpose (لِكَيْ). Stretch: a three-step route with a purpose for each step and a condition (إِذَا نَجَحْتُ …).
• The future is EASY: no new verb forms — just add سَـ (attached) or سَوْفَ (separate) to the present tense students know from D1.
• After لِكَيْ / حَتَّى / أَنْ the verb ends in -a (أَنْجَحَ), the same as after يَجِبُ أَنْ (F4, D3-L03).
• Vocabulary group 2 (education routes) prepares D3-L05 — FLEX today.`,
  teach: 'سَـ / سَوْفَ, ambition, and purpose.',
  wedo: 'Picture match, sort future / not future, fix and listen to three career plans.',
  next: { nextCode: 'D3-L05', nextTitle: 'Education and Training — Routes to a Career', nextAr: 'التَّعْلِيمُ وَالتَّدْرِيبُ' },
  objectives: ['Form the future with سَـ and سَوْفَ for I, he and she.', 'State an ambition with أُرِيدُ أَنْ / أَطْمَحُ إِلَى أَنْ.', 'Give the purpose of a step with لِكَيْ / حَتَّى + verb (-a).', 'Describe a career plan in connected steps.'],
  flexGroups: [1, 2],
  doNow: {
    questions: [
      q('What does بَعْدَ التَّخَرُّجِ mean?', ['after graduation', 'in the future', 'before school'], 'Prepared at home (D3-L03).'),
      q('What does أُخَطِّطُ لِـ mean?', ['I plan to', 'I want to', 'I need'], 'Prepared at home (D3-L03).'),
      q('Complete: يَحْتَاجُ الطَّبِيبُ ___ الصَّبْرِ.', ['إِلَى', 'فِي', 'عَنْ'], 'D3-L03: yaḥtāju ilā.'),
      q('Complete: يَجِبُ أَنْ يَكُونَ المُدَرِّسُ ___ .', ['صَبُورًا', 'صَبُورٌ', 'صَبُورَةً'], 'D3-L03: -an after yakūna.'),
      q('Which means “I study”?', ['أَدْرُسُ', 'يَدْرُسُ', 'تَدْرُسُ'], 'D1: a- = I.'),
    ],
    keyIdea: { text: 'The future = sa- or sawfa + the present verb you already know.', ar: '{k|سَـ}أَدْرُسُ · {k|سَوْفَ} أَتَدَرَّبُ · لِكَيْ {w|أَنْجَحَ}' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of D3-L03. Questions 3–4 retrieve D3-L03; question 5 retrieves the D1 present tense (the base of the future).',
  },
  routes: {
    core: ['I can say what I will study and do.', 'I can say what I want to become.'],
    develop: ['I can use sawfa and state an ambition.', 'I can give the purpose of a step.'],
    stretch: ['I can describe a three-step career route.', 'I can add a condition (if I succeed …).'],
  },
  bridge: [
    { ar: 'مُسْتَقْبَلٌ', urdu: 'مستقبل', tr: 'mustaqbil', en: 'future' },
    { ar: 'خُطَّةٌ', urdu: 'خاکہ / منصوبہ', tr: 'mansūba', en: 'plan (meaning only)' },
    { ar: 'هَدَفٌ', urdu: 'ہدف', tr: 'hadaf', en: 'target, goal' },
    { ar: 'أَطْمَحُ', urdu: 'طمع', tr: 'tamaʿ', en: 'Urdu: greed · Arabic: ambition' },
    { ar: 'نِيَّةٌ / أَنْوِي', urdu: 'نیت', tr: 'niyyat', en: 'intention → I intend' },
  ],
  bridgeNotes: 'URDU BRIDGE: مستقبل، ہدف، نیت are shared (niyya → أَنْوِي, I intend). CAREFUL: Urdu طمع means greed; Arabic طُمُوحٌ / أَطْمَحُ means ambition / I aspire — a positive word! خُطَّةٌ has no Urdu cognate: link it to منصوبہ.',
  core: ['سَأَدْرُسُ', 'سَوْفَ أَتَدَرَّبُ', 'أُرِيدُ أَنْ أُصْبِحَ', 'أَطْمَحُ إِلَى أَنْ', 'أَنْوِي أَنْ', 'أُخَطِّطُ لِـ', 'بَعْدَ التَّخَرُّجِ', 'فِي المُسْتَقْبَلِ', 'لِكَيْ', 'إِذَا نَجَحْتُ'],
  forms: {
    'سَأَدْرُسُ': ihs('سَأَدْرُسُ', 'سَيَدْرُسُ', 'سَتَدْرُسُ'),
    'سَوْفَ أَتَدَرَّبُ': ihs('سَوْفَ أَتَدَرَّبُ', 'سَوْفَ يَتَدَرَّبُ', 'سَوْفَ تَتَدَرَّبُ'),
    'أُرِيدُ أَنْ أُصْبِحَ': ihs('أُرِيدُ أَنْ أُصْبِحَ', 'يُرِيدُ أَنْ يُصْبِحَ', 'تُرِيدُ أَنْ تُصْبِحَ'),
    'أَطْمَحُ إِلَى أَنْ': ihs('أَطْمَحُ', 'يَطْمَحُ', 'تَطْمَحُ'),
    'أَنْوِي أَنْ': ihs('أَنْوِي', 'يَنْوِي', 'تَنْوِي'),
    'أُخَطِّطُ لِـ': ihs('أُخَطِّطُ', 'يُخَطِّطُ', 'تُخَطِّطُ'),
  },
  vocabNotes: {
    0: 'Every verb card shows I · he · she: only the first letter changes (a- / ya- / ta-), and sa- stays in front. لِكَيْ / حَتَّى (in order to / so that) are followed by a verb ending in -a.',
    1: 'Education routes (FLEX today — taught in D3-L05): useful for the “route” part of a plan.',
    2: 'Career language (FLEX): review from D3-L03 — the skills you will develop.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · the future with sa- and sawfa (website rules 1–2)', title: 'Present + sa- = future', ar: 'سَـ · سَوْفَ',
      cols: [{ label: 'Present', w: 3.0, size: 24 }, { label: 'Future with sa-', w: 3.4, size: 24 }, { label: 'Future with sawfa', w: 3.6, size: 24 }, { label: 'Who', w: 2.33 }],
      rows: [
        { core: true, cells: [{ ar: 'أَدْرُسُ' }, { ar: '{k|سَ}أَدْرُسُ' }, { ar: '{k|سَوْفَ} أَدْرُسُ' }, 'I'] },
        { core: true, cells: [{ ar: 'يَعْمَلُ' }, { ar: '{k|سَ}يَعْمَلُ' }, { ar: '{k|سَوْفَ} يَعْمَلُ' }, 'he'] },
        { core: true, cells: [{ ar: 'تَتَدَرَّبُ' }, { ar: '{k|سَ}تَتَدَرَّبُ' }, { ar: '{k|سَوْفَ} تَتَدَرَّبُ' }, 'she'] },
        { cells: [{ ar: 'نُسَافِرُ' }, { ar: '{k|سَ}نُسَافِرُ' }, { ar: '{k|سَوْفَ} نُسَافِرُ' }, 'we'] },
      ],
      foot: 'sa- is joined to the verb; sawfa is a separate word (more deliberate / formal). Same meaning: will.',
      notes: `GRAMMAR PART 1 — website rules “Near or planned future” (سَـ + المُضَارِعُ: attach سـ directly to the present verb) and “Future with سوف” (a separate word; may sound more deliberate or formal). Website examples: سَأَدْرُسُ الطِّبَّ · سَأَعْمَلُ فِي الخَارِجِ · سَوْفَ أَتَدَرَّبُ فِي شَرِكَةٍ · سَوْفَ أَكْتَسِبُ خِبْرَةً.
Here sa- is coloured as a separate prefix ON PURPOSE: it is a whole prefix, so colouring it does not split a letter. Negative future (Stretch, teacher addition): لَنْ + verb (-a): لَنْ أَعْمَلَ فِي مَكْتَبٍ (I will not work in an office).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · ambition and purpose (website rules 3–4) · Develop / Stretch', title: 'What I aim for · and why', ar: 'أَطْمَحُ إِلَى أَنْ · لِكَيْ',
      cards: [
        { chip: 'WANT · CORE', color: '1E7B4F', head: 'أُرِيدُ أَنْ أُصْبِحَ', big: 'أُرِيدُ أَنْ أُصْبِحَ مُهَنْدِسًا.', en: 'I want to become an engineer.', clue: 'Job after uṣbiḥa: -an.' },
        { chip: 'AMBITION · DEVELOP', color: '1D5FBF', head: 'أَطْمَحُ إِلَى أَنْ', big: 'أَطْمَحُ إِلَى أَنْ أُدِيرَ شَرِكَةً.', en: 'I aspire to run a company.', clue: 'ilā an + verb (-a).' },
        { chip: 'PURPOSE · DEVELOP', color: '6B4C9A', head: 'لِكَيْ · حَتَّى', big: 'سَأَدْرُسُ بِجِدٍّ لِكَيْ أَنْجَحَ.', en: 'I will study hard in order to succeed.', clue: 'Verb after li-kay ends in -a.' },
      ],
      error: { text: 'sa- is joined to the verb.', pairs: [['سَأَدْرُسُ الطِّبَّ.', 'سَ أَدْرُسُ الطِّبَّ.']] },
      notes: `GRAMMAR PART 2 — website rules “Ambition” (أَطْمَحُ إِلَى أَنْ + مُضَارِعٌ) and “Purpose” (لِكَيْ / حَتَّى + مُضَارِعٌ مَنْصُوبٌ: a purpose connector followed by a subjunctive verb). Website examples: أَطْمَحُ إِلَى أَنْ أُصْبِحَ مُهَنْدِسًا · أَطْمَحُ إِلَى أَنْ أُدِيرَ شَرِكَةً · سَأَدْرُسُ بِجِدٍّ لِكَيْ أَنْجَحَ · سَأَتَدَرَّبُ حَتَّى أَكْتَسِبَ خِبْرَةً.
The error pair is teacher-chosen (the website common error is generic). CAREFUL: حَتَّى also means “until” (D1: حَتَّى السَّابِعَةِ) — here it means “so that”, followed by a verb in -a.`,
    },
  ],
  rulesTitle: 'Future tense and purpose',
  quick: [0, 1, 2, 4],
  rest: [3, 5, 6, 7],
  ido: {
    title: 'Watch me plan a career route',
    steps: [
      { head: 'Ambition', ar: 'أَطْمَحُ إِلَى أَنْ {w|أُصْبِحَ} مُهَنْدِسًا.', think: 'ilā an + verb (-a).' },
      { head: 'Step 1', ar: '{k|سَ}أَدْرُسُ الرِّيَاضِيَّاتِ فِي الجَامِعَةِ.', think: 'sa- + present.' },
      { head: 'Step 2 + why', ar: '{k|سَوْفَ} أَتَدَرَّبُ فِي شَرِكَةٍ {e|لِكَيْ} أَكْتَسِبَ خِبْرَةً.', think: 'Purpose: li-kay + -a.' },
      { head: 'Condition', ar: 'إِذَا نَجَحْتُ، {k|سَ}أَعْمَلُ فِي الخَارِجِ.', think: 'If I succeed → sa-.' },
    ],
    legend: ['k', 'w', 'e'], legendLabels: { k: 'FUTURE', w: 'AMBITION', e: 'PURPOSE' },
    model: 'فِي المُسْتَقْبَلِ أَطْمَحُ إِلَى أَنْ {w|أُصْبِحَ} مُهَنْدِسًا. بَعْدَ المَدْرَسَةِ {k|سَ}أَدْرُسُ الرِّيَاضِيَّاتِ وَالفِيزِيَاءَ فِي الجَامِعَةِ، ثُمَّ {k|سَوْفَ} أَتَدَرَّبُ فِي شَرِكَةِ بِنَاءٍ {e|لِكَيْ} أَكْتَسِبَ خِبْرَةً عَمَلِيَّةً. إِذَا نَجَحْتُ، {k|سَ}أَعْمَلُ فِي الخَارِجِ {e|حَتَّى} أَتَعَلَّمَ مِنْ مُهَنْدِسِينَ مِنْ ثَقَافَاتٍ مُخْتَلِفَةٍ.',
    modelEn: 'In the future I aspire to become an engineer. After school I will study mathematics and physics at university, then I will train in a building company in order to gain practical experience. If I succeed, I will work abroad so that I learn from engineers from different cultures.',
    notes: 'I DO (3 min) — teacher-written model built on the website rules and listening (Omar wants to become an engineer). Think aloud: “When? (sa- / sawfa) Why? (li-kay / ḥattā + -a)”.',
  },
  patterns: [
    { ar: 'سَأَدْرُسُ الطِّبَّ فِي الجَامِعَةِ.', en: 'I will study medicine at university.', tip: 'sa- joined to the verb.' },
    { ar: 'سَوْفَ تَتَدَرَّبُ هِنْدٌ فِي شَرِكَةٍ.', en: 'Hind will train in a company.', tip: 'sawfa + she-verb (ta-).' },
    { ar: 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ مُهَنْدِسًا.', en: 'I aspire to become an engineer.', tip: 'ilā an + verb; job in -an.' },
    { ar: 'سَأَتَدَرَّبُ حَتَّى أَكْتَسِبَ خِبْرَةً.', en: 'I will train so that I gain experience.', tip: 'Purpose + verb (-a).' },
  ],
  game: {
    title: 'What will I do? Match the picture',
    pick: [1, 2, 4],
    en: ['I will work as a programmer.', 'I will travel abroad.', 'I will develop my skills.'],
    icons: [[['fa6', 'FaLaptopCode', '6B4C9A'], ['fa6', 'FaUserTie', '5A6472']], [['fa6', 'FaPlane', '1D5FBF'], ['fa6', 'FaEarthAfrica', '1E7B4F']], [['fa6', 'FaBookOpen', 'C77700'], ['fa6', 'FaArrowTrendUp', 'B83227']]],
    labels: ['programmer', 'travel abroad', 'develop skills'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Ask: which letter shows the FUTURE? (sa-). Other website cards: سَأَدْرُسُ الطِّبَّ فِي المُسْتَقْبَلِ · سَأَدْرُسُ فِي الجَامِعَةِ · أَطْمَحُ إِلَى وَظِيفَةٍ نَاجِحَةٍ (note: ilā + a NOUN here, no an).',
  },
  sorterCats: ['Future', 'Present'],
  sorterNotes: 'Then change every present verb into the future (add sa-) and say it aloud.',
  patch: {
    mission: null,
    sorter: {
      title: 'Future or present?', instructions: 'Is the verb about the future or the present?',
      categories: ['Future', 'Present'],
      items: [
        { label: 'سَأَدْرُسُ الطِّبَّ', answer: 0 }, { label: 'سَوْفَ يَتَدَرَّبُ', answer: 0 }, { label: 'سَتَعْمَلُ فِي الخَارِجِ', answer: 0 }, { label: 'سَنُسَافِرُ', answer: 0 },
        { label: 'أَدْرُسُ العُلُومَ', answer: 1 }, { label: 'يَعْمَلُ فِي مَكْتَبٍ', answer: 1 }, { label: 'تَتَدَرَّبُ الآنَ', answer: 1 }, { label: 'نَسْكُنُ فِي لَنْدَنَ', answer: 1 },
      ],
    },
    mistakes: [
      { wrong: 'سَوْفَ سَأَدْرُسُ الطِّبَّ.', right: 'سَوْفَ أَدْرُسُ الطِّبَّ.', why: 'Use sa- OR sawfa, not both.' },
      { wrong: 'أَطْمَحُ إِلَى أَنْ أُصْبِحُ مُهَنْدِسًا.', right: 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ مُهَنْدِسًا.', why: 'After an the verb ends in -a.' },
      { wrong: 'سَتَدْرُسُ عُمَرُ الهَنْدَسَةَ.', right: 'سَيَدْرُسُ عُمَرُ الهَنْدَسَةَ.', why: 'Omar is “he” → sa-ya-.' },
    ],
    grammar: {
      common_error: 'Do not use سَـ and سَوْفَ together, and do not forget the -a ending after أَنْ / لِكَيْ / حَتَّى (teacher wording: the website common error for this lesson is generic).',
      quiz: [
        L('Which means “I will study”?', ['سَأَدْرُسُ', 'أَدْرُسُ', 'دَرَسْتُ'], 'sa- + adrusu.'),
        L('Complete: ___ تَتَدَرَّبُ هِنْدٌ فِي شَرِكَةٍ.', ['سَوْفَ', 'لَمْ', 'قَدْ'], 'sawfa = will.'),
        L('Choose the future for “he works”.', ['سَيَعْمَلُ', 'سَتَعْمَلُ', 'سَأَعْمَلُ'], 'he → sa-ya-.'),
        L('Complete: أَطْمَحُ ___ أَنْ أُصْبِحَ طَبِيبًا.', ['إِلَى', 'فِي', 'عَلَى'], 'aṭmaḥu ilā an …'),
        L('Complete: سَأَدْرُسُ بِجِدٍّ لِكَيْ ___ .', ['أَنْجَحَ', 'نَجَحْتُ', 'سَأَنْجَحُ'], 'After li-kay: present verb in -a.'),
        L('Which word gives a purpose?', ['لِكَيْ', 'لٰكِنَّ', 'بَيْنَمَا'], 'li-kay = in order to.'),
        L('What does أَنْوِي أَنْ mean?', ['I intend to', 'I succeed in', 'I need to'], 'niyya = intention.'),
        L('Complete: أُرِيدُ أَنْ أُصْبِحَ ___ .', ['مُهَنْدِسًا', 'مُهَنْدِسٌ', 'مُهَنْدِسِينَ'], 'Job after uṣbiḥa: -an.'),
      ],
    },
    final: [
      L('Choose the future for “she studies”.', ['سَتَدْرُسُ', 'سَيَدْرُسُ', 'سَأَدْرُسُ'], 'she → sa-ta-.'),
      L('Which sentence gives a purpose?', ['سَأَتَدَرَّبُ حَتَّى أَكْتَسِبَ خِبْرَةً.', 'سَأَتَدَرَّبُ فِي شَرِكَةٍ.', 'تَدَرَّبْتُ أَمْسِ.'], 'ḥattā + verb (-a) = so that.'),
      L('Complete: أَطْمَحُ إِلَى أَنْ ___ شَرِكَةً.', ['أُدِيرَ', 'أَدَرْتُ', 'سَأُدِيرُ'], 'After an: present verb in -a.'),
      L('What does سَوْفَ mean?', ['will', 'did', 'must'], 'sawfa + present = future.'),
    ],
    listening: {
      questions: [
        L('What does Omar want to become?', ['an engineer', 'a doctor', 'a designer'], 'يُرِيدُ عُمَرُ أَنْ يُصْبِحَ مُهَنْدِسًا'),
        L('What will Omar study at university?', ['maths and physics', 'medicine', 'computing'], 'سَيَدْرُسُ الرِّيَاضِيَّاتِ وَالفِيزِيَاءَ'),
        L('What will Hind join?', ['a design course', 'a nursing course', 'a language course'], 'سَوْفَ تَلْتَحِقُ بِدَوْرَةٍ فِي التَّصْمِيمِ'),
        L('Why will she join it?', ['to build a portfolio', 'to find a job abroad', 'to meet friends'], 'لِكَيْ تَبْنِيَ مَلَفَّ أَعْمَالٍ'),
        L('Where does Yusuf plan to train?', ['in a hospital', 'in a school', 'in a bank'], 'لِلتَّدَرُّبِ فِي مُسْتَشْفًى'),
        L('What does Yusuf want to check?', ['that nursing suits him', 'that the salary is high', 'that the hours are short'], 'حَتَّى يَتَأَكَّدَ مِنْ أَنَّ التَّمْرِيضَ يُنَاسِبُهُ'),
      ],
    },
    reading: {
      questions: [
        L('Which field interests the writer?', ['cyber security', 'medicine', 'journalism'], 'الأَمْنِ السِّيبْرَانِيِّ'),
        L('What will the writer study?', ['computer science', 'engineering', 'languages'], 'سَأَدْرُسُ عُلُومَ الحَاسُوبِ'),
        L('What practical step is planned?', ['a work placement in a tech company', 'a year abroad', 'a part-time job in a shop'], 'تَدْرِيبٍ عَمَلِيٍّ فِي شَرِكَةٍ تِقْنِيَّةٍ'),
        L('Which two skills will be developed?', ['programming and problem solving', 'leadership and design', 'languages and teamwork'], 'البَرْمَجَةِ وَحَلِّ المُشْكِلَاتِ'),
        L('What is the purpose of these skills?', ['to protect data', 'to earn more money', 'to travel'], 'لِكَيْ أَحْمِيَ البَيَانَاتِ'),
        L('What long-term possibility is mentioned?', ['founding a company one day', 'becoming a teacher', 'retiring early'], 'قَدْ أُؤَسِّسُ شَرِكَتِي الخَاصَّةَ'),
      ],
    },
    speaking: {
      context: 'My career plans',
      model: [
        ['A', 'مَاذَا سَتَفْعَلُ بَعْدَ المَدْرَسَةِ؟', 'What will you do after school?'],
        ['B', 'سَأَدْرُسُ عُلُومَ الحَاسُوبِ فِي الجَامِعَةِ.', 'I will study computer science at university.'],
        ['A', 'وَلِمَاذَا؟', 'And why?'],
        ['B', 'لِأَنَّنِي أَطْمَحُ إِلَى أَنْ أُصْبِحَ مُبَرْمِجًا، وَسَأَتَدَرَّبُ فِي شَرِكَةٍ لِكَيْ أَكْتَسِبَ خِبْرَةً.', 'Because I aspire to become a programmer, and I will train in a company to gain experience.'],
      ],
    },
    writing: {
      prompt: 'Write about your future career plan, the route you will follow and the purpose of each step.',
      model: 'فِي المُسْتَقْبَلِ أَطْمَحُ إِلَى أَنْ أُصْبِحَ مُهَنْدِسًا لِأَنَّنِي أُحِبُّ الرِّيَاضِيَّاتِ وَحَلَّ المُشْكِلَاتِ. بَعْدَ المَدْرَسَةِ سَأَدْرُسُ الهَنْدَسَةَ فِي الجَامِعَةِ، وَسَوْفَ أَبْحَثُ عَنْ تَدْرِيبٍ عَمَلِيٍّ فِي شَرِكَةِ بِنَاءٍ لِكَيْ أَكْتَسِبَ خِبْرَةً. كَمَا سَأَتَعَلَّمُ لُغَةً أَجْنَبِيَّةً حَتَّى أَسْتَطِيعَ العَمَلَ مَعَ فَرِيقٍ دَوْلِيٍّ. إِذَا نَجَحْتُ فِي هٰذِهِ الخُطَّةِ، فَسَأَعْمَلُ فِي الخَارِجِ لِمُدَّةِ سَنَتَيْنِ. عَلَى الرَّغْمِ مِنْ أَنَّ الطَّرِيقَ طَوِيلٌ، فَإِنَّنِي مُسْتَعِدٌّ لِلْعَمَلِ بِجِدٍّ.',
    },
  },
  hints: ['sa- or sawfa: both?', 'After an: -u or -a?', 'Omar = he: which prefix?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 5.\nListen for: مُهَنْدِسًا · التَّصْمِيمِ · مُسْتَشْفًى.',
  listenRoutes: 'Core: questions 1, 3 and 5. Develop / Stretch: all 6.',
  gloss: [
    ['يُرِيدُ عُمَرُ أَنْ يُصْبِحَ مُهَنْدِسًا،', 'Omar wants to become an engineer,'],
    ['لِذٰلِكَ سَيَدْرُسُ الرِّيَاضِيَّاتِ وَالفِيزِيَاءَ فِي الجَامِعَةِ.', 'so he will study maths and physics at university.'],
    ['أَمَّا هِنْدٌ فَسَوْفَ تَلْتَحِقُ بِدَوْرَةٍ فِي التَّصْمِيمِ لِكَيْ تَبْنِيَ مَلَفَّ أَعْمَالٍ.', 'As for Hind, she will join a design course in order to build a portfolio.'],
    ['وَيُخَطِّطُ يُوسُفُ لِلتَّدَرُّبِ فِي مُسْتَشْفًى', 'And Yusuf plans to train in a hospital'],
    ['حَتَّى يَتَأَكَّدَ مِنْ أَنَّ التَّمْرِيضَ يُنَاسِبُهُ.', 'so that he can make sure nursing suits him.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَاذَا سَتَدْرُسُ بَعْدَ المَدْرَسَةِ؟' },
      { route: 'core', ar: 'مَاذَا تُرِيدُ أَنْ تُصْبِحَ فِي المُسْتَقْبَلِ؟' },
      { route: 'develop', ar: 'لِمَاذَا تُرِيدُ هٰذِهِ المِهْنَةَ؟' },
      { route: 'stretch', ar: 'مَا خُطَّتُكَ إِذَا لَمْ تَنْجَحْ فِي الخُطَّةِ الأُولَى؟' },
    ],
    stems: [
      { route: 'core', ar: 'سَأَدْرُسُ ______ .' },
      { route: 'core', ar: 'أُرِيدُ أَنْ أُصْبِحَ ______ .' },
      { route: 'develop', ar: 'أَطْمَحُ إِلَى ذٰلِكَ لِأَنَّ ______ ، وَسَوْفَ ______ لِكَيْ ______ .' },
      { route: 'stretch', ar: 'إِذَا لَمْ أَنْجَحْ، سَوْفَ ______ .' },
    ],
    modelEn: ['What will you do after school?', 'I will study computer science at university.'],
    notes: 'Teacher-written prompts and model (the website prompts are generic). Model continues: A: وَلِمَاذَا؟ B: لِأَنَّنِي أَطْمَحُ إِلَى أَنْ أُصْبِحَ مُبَرْمِجًا، وَسَأَتَدَرَّبُ فِي شَرِكَةٍ لِكَيْ أَكْتَسِبَ خِبْرَةً. To a girl: مَاذَا سَتَدْرُسِينَ؟ · مَاذَا تُرِيدِينَ أَنْ تُصْبِحِي؟',
  },
  write: {
    core: { amount: '5 sentences', how: 'What you want to become, two things you will do (sa-), and one reason.' },
    develop: { amount: '80–100 words', how: 'Ambition + route (sa- / sawfa) + a purpose (li-kay / ḥattā) for two steps.' },
    stretch: { amount: '100–120 words', how: 'Website task: your plan, the route and the purpose of EACH step, plus “if I succeed …”.' },
  },
  frames: {
    core: [
      { en: 'In the future I want to become …', ar: 'فِي المُسْتَقْبَلِ أُرِيدُ أَنْ أُصْبِحَ ______ .' },
      { en: 'After school I will study …', ar: 'بَعْدَ المَدْرَسَةِ سَأَدْرُسُ ______ .' },
      { en: 'Then I will work in …', ar: 'ثُمَّ سَأَعْمَلُ فِي ______ .' },
      { en: 'because I love …', ar: 'لِأَنَّنِي أُحِبُّ ______ .' },
    ],
    develop: [
      { en: 'I aspire to …', ar: 'أَطْمَحُ إِلَى أَنْ ______ .' },
      { en: 'I will train in … in order to …', ar: 'سَوْفَ أَتَدَرَّبُ فِي ______ لِكَيْ ______ .' },
      { en: 'I will learn … so that I can …', ar: 'سَأَتَعَلَّمُ ______ حَتَّى ______ .' },
      { en: 'If I succeed, I will …', ar: 'إِذَا نَجَحْتُ، سَـ ______ .' },
    ],
    bank: ['سَأَدْرُسُ', 'سَأَعْمَلُ', 'سَوْفَ أَتَدَرَّبُ', 'أُرِيدُ أَنْ أُصْبِحَ', 'أَطْمَحُ إِلَى أَنْ', 'أَنْوِي أَنْ', 'لِكَيْ', 'حَتَّى', 'أَكْتَسِبَ خِبْرَةً', 'بَعْدَ التَّخَرُّجِ', 'فِي المُسْتَقْبَلِ', 'إِذَا نَجَحْتُ'],
  },
  stretch: [
    ['فِي مَجَالِ …', 'in the field of …'],
    ['أَبْحَثُ عَنْ تَدْرِيبٍ عَمَلِيٍّ', 'I look for a work placement'],
    ['أُطَوِّرُ مَهَارَاتِي فِي …', 'I develop my skills in …'],
    ['قَدْ أُؤَسِّسُ شَرِكَتِي الخَاصَّةَ يَوْمًا مَا', 'I may found my own company one day'],
    ['عَلَى الرَّغْمِ مِنْ أَنَّ الطَّرِيقَ طَوِيلٌ', 'although the road is long'],
  ],
  modelEn: 'In the future I aspire to become an engineer because I love maths and solving problems. After school I will study engineering at university, and I will look for a work placement in a building company in order to gain experience. I will also learn a foreign language so that I can work with an international team. If I succeed in this plan, I will work abroad for two years. Although the road is long, I am ready to work hard.',
  find: ['an ambition (aṭmaḥu ilā an)', 'sa- and sawfa', 'li-kay / ḥattā + verb (-a)', 'a condition (if I succeed)'],
  modelNotes: 'Teacher-written model (the website model for this lesson is a placeholder). Evidence: أَطْمَحُ إِلَى أَنْ أُصْبِحَ · سَأَدْرُسُ، سَوْفَ أَبْحَثُ، سَأَتَعَلَّمُ · لِكَيْ أَكْتَسِبَ، حَتَّى أَسْتَطِيعَ · إِذَا نَجَحْتُ … فَسَأَعْمَلُ.',
  selfCheck: [
    { route: 'core', text: 'My future verbs start with sa- or sawfa.' },
    { route: 'core', text: 'The job after uṣbiḥa ends in -an.' },
    { route: 'develop', text: 'After an / li-kay / ḥattā: verb in -a.' },
    { route: 'develop', text: 'Each step has a purpose.' },
    { route: 'stretch', text: 'I added a condition (if I succeed).' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['مَجَالِ', 'the field of'], ['الأَمْنِ السِّيبْرَانِيِّ', 'cyber security'], ['إِنْهَاءِ المَدْرَسَةِ', 'finishing school'], ['عُلُومَ الحَاسُوبِ', 'computer science'], ['تَدْرِيبٍ عَمَلِيٍّ', 'a work placement'],
    ['شَرِكَةٍ تِقْنِيَّةٍ', 'a tech company'], ['أُطَوِّرَ', 'I develop'], ['أَحْمِيَ البَيَانَاتِ', 'I protect data'], ['فَرِيقٍ دَوْلِيٍّ', 'an international team'], ['أُؤَسِّسُ', 'I found / set up'],
  ],
  prep: {
    words: [['جَامِعَةٌ', 'a university', 'pl. جَامِعَاتٌ'], ['شَهَادَةٌ', 'a certificate / degree', 'pl. شَهَادَاتٌ'], ['تَدْرِيبٌ عَمَلِيٌّ', 'a work placement', '—'], ['دَوْرَةٌ تَدْرِيبِيَّةٌ', 'a training course', 'pl. دَوْرَاتٌ'], ['مِنْحَةٌ دِرَاسِيَّةٌ', 'a scholarship', 'pl. مِنَحٌ']],
    questionEn: 'Which route interests you more: university or a vocational course? Why?',
    questionAr: 'أُفَضِّلُ … لِأَنَّ …',
    homework: {
      core: 'Change 6 present sentences into the future (sa- / sawfa); write 5 sentences from the frames.',
      develop: 'Write your plan in 80–100 words with li-kay / ḥattā.',
      stretch: 'Website writing task: your career route with the purpose of each step (100–120 words).',
    },
    wordsSource: 'The five words come from the website D3-L05 vocabulary (education and training routes).',
  },
  remember: 'Remember: future = sa- / sawfa + present — after an, li-kay and ḥattā the verb ends in -a.',
});

module.exports = { meta, slides };
