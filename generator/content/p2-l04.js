'use strict';
/* P2-L04 · Study Skills and Academic Success — website: Pathways › Progression › P2 › P2-L04 (Bloom’s taxonomy verbs يَتَذَكَّرُ → يُبْدِعُ, Form II / IV
 * study verbs with a direct object يُحَلِّلُ النَّصَّ, يَحْتَفِظُ بِـ, the study-outcome conditional إِذَا رَاجَعْتَ … سَتَحْتَفِظُ …, أَنْ + subjunctive chains).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking and writing used as published, with small spelling fixes: waṣl alif
 * without a kasra (الانْتِهَاءِ · الاسْتِيعَابُ) and the helping kasra in بَلِ التَّعَلُّمَ. The website visual game for this lesson is about future plans (it belongs to
 * P2-L05); this deck uses the study-strategies game the website files under P2-L05 (gameKey). English added to the patterns. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P2')({
  n: 4, fileTitle: 'Study_Skills_and_Academic_Success', chip: 'Vocabulary',
  title: 'Study Skills and Academic Success', arabic: 'مَهَارَاتُ الدِّرَاسَةِ وَالنَّجَاحُ الأَكَادِيمِيُّ',
  focus: 'Describe how to study well: climb Bloom’s ladder (يَتَذَكَّرُ → يَفْهَمُ → يُطَبِّقُ → يُحَلِّلُ → يُقَيِّمُ → يُبْدِعُ), use the study verbs with their objects (يُلَخِّصُ المَادَّةَ · يَحْتَفِظُ بِالمَعْلُومَاتِ) and link each habit to its outcome with إِذَا.',
  icon: 'FaBrain', iconSet: 'fa6',
});

const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/الِانْتِهَاءِ/g, 'الانْتِهَاءِ').replace(/بَلْ التَّعَلُّمَ/g, 'بَلِ التَّعَلُّمَ'));
const site = fix(D.site('P2-L04'));
const RH = [['Form II / IV study verbs', 'yuṭabbiq / yuḥallil / yuqayyim + object'], ['Cognitive order', 'yatadhakkar → … → yubdiʿ'], ['Study-outcome conditional', 'idhā + past → sa- + present'], ['Retaining information', 'yaḥtafiẓ bi-']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));

const slides = D.devLesson('P2-L04', {
  support: `• Core: six sentences, one for each Bloom’s level, about studying Arabic. Develop: two study-outcome conditionals. Stretch: the website ~100–110-word study guide with a rhetorical opener, four study verbs, two conditionals and a reported-speech citation.
• Make it practical: students leave with ONE study habit to try this week (self-testing, spaced repetition, a mind map). Students with SEND may find colour-coded mind maps and short spaced sessions especially useful — present them as smart tools, not remedies.
• Islamic link (optional): memorising the Qur’an uses spaced repetition (مُرَاجَعَةٌ) and self-testing (تَسْمِيعٌ) — many students already practise these skills.
• Grammar links: Form II verbs (P1-L02) · Type 1 conditional (P1-L03) · reported speech (P2-L02) · أَنْ + subjunctive (D units).`,
  teach: 'Bloom’s ladder, study verbs with objects, habit → outcome conditionals.',
  wedo: 'Plan a Bloom’s study ladder, sort the levels, hear a study guide.',
  next: { nextCode: 'P2-L05', nextTitle: 'Career Aspirations and the Future of Work', nextAr: 'الطُّمُوحَاتُ المِهَنِيَّةُ وَمُسْتَقْبَلُ العَمَلِ' },
  objectives: ['Name study strategies in academic Arabic.', 'Use Bloom’s taxonomy verbs from remembering to creating.', 'Link a study habit to its outcome with a Type 1 conditional.', 'Write an academic-magazine study guide.'],
  rulesAr: 'أَفْعَالُ الدِّرَاسَةِ وَشَرْطُ النَّتِيجَةِ',
  ruleEx: [['يُحَلِّلُ الطَّالِبُ النَّصَّ', 'يُقَيِّمُ كِتَابَتَهُ بَعْدَ الانْتِهَاءِ'], ['يَتَذَكَّرُ المُفْرَدَاتِ ثُمَّ يُطَبِّقُهَا'], ['إِذَا رَاجَعْتَ يَوْمِيًّا، سَتَتَحَسَّنُ ذَاكِرَتُكَ'], ['يَحْتَفِظُ بِالمَعْلُومَاتِ مُدَّةً أَطْوَلَ']],
  doNow: {
    questions: [
      q('What does تَنْظِيمُ الوَقْتِ mean?', ['time management', 'a mind map', 'a summary'], 'Prepared at home (P2-L03).'),
      q('What does خَرِيطَةٌ ذِهْنِيَّةٌ mean?', ['a mind map', 'a timetable', 'a test'], 'Prepared at home (P2-L03).'),
      q('What does التَّشْتِيتُ mean?', ['distraction', 'focus', 'revision'], 'Prepared at home (P2-L03).'),
      q('Choose the accurate past perfect.', ['كُنْتُ قَدْ أَنْهَيْتُ بَحْثِي.', 'كُنْتُ قَدْ أُنْهِي بَحْثِي.', 'كَانَ قَدْ أَنْهَيْتُ بَحْثِي.'], 'P2-L03: the past perfect.'),
      q('Choose the accurate sentence.', ['يُقَوِّي التَّمْرِينُ العَضَلَاتِ.', 'يُقَوِّي التَّمْرِينُ مِنَ العَضَلَاتِ.', 'يُقَوِّي التَّمْرِينُ بِالعَضَلَاتِ.'], 'P1-L02: Form II verbs take an object.'),
    ],
    keyIdea: { text: 'Most study verbs are Form II (yu-…-i-…) and take a DIRECT object — no preposition.', ar: '{w|يُحَلِّلُ النَّصَّ} · {w|يُلَخِّصُ المَادَّةَ} · {k|يَحْتَفِظُ بِالمَعْلُومَاتِ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P2-L03. Question 4 retrieves the past perfect (P2-L03); question 5 the P1-L02 rule that Form II benefit verbs take a direct object — the same rule as today’s study verbs.',
  },
  routes: {
    core: ['I can name 8 study strategies.', 'I can say what a student does at each Bloom’s level.'],
    develop: ['I can link a habit to its outcome (idhā … sa-).', 'I can contrast memorising and understanding.'],
    stretch: ['I can write a study guide with a citation.', 'I can chain an + subjunctive (an yuḥallila wa-yuqayyima …).'],
  },
  bridge: [
    { ar: 'تَحْلِيلٌ · يُحَلِّلُ', urdu: 'تحلیل / تجزیہ', tr: 'tahlīl', en: 'analysis · analyses' },
    { ar: 'خُلَاصَةٌ · مُلَخَّصٌ', urdu: 'خلاصہ', tr: 'khulāsa', en: 'a summary' },
    { ar: 'حِفْظٌ', urdu: 'حفظ', tr: 'hifz', en: 'memorisation (ḥāfiẓ of the Qur’an!)' },
    { ar: 'تَوَجُّهٌ · تَرْكِيزٌ', urdu: 'توجہ', tr: 'tawajjuh', en: 'attention, focus' },
    { ar: 'إِبْدَاعٌ', urdu: 'ابداع / تخلیق', tr: 'takhlīq', en: 'creativity (Urdu usually says تخلیق)' },
  ],
  bridgeNotes: 'URDU BRIDGE: حفظ (as in حافظِ قرآن), خلاصہ, تحلیل and توجہ are shared. Point out that Qur’an memorisation already uses the strongest study techniques: spaced revision (دَوْر / مُرَاجَعَةٌ) and self-testing (تَسْمِيعٌ). Today the aim is to add the higher Bloom’s levels: analysing, evaluating, creating.',
  core: ['مَهَارَاتُ الدِّرَاسَةِ', 'تَنْظِيمُ الوَقْتِ', 'خَرِيطَةٌ ذِهْنِيَّةٌ', 'مُلَخَّصٌ', 'تَسْمِيعٌ ذَاتِيٌّ', 'مُرَاجَعَةٌ مُتَبَاعِدَةٌ', 'التَّشْتِيتُ', 'يَتَذَكَّرُ', 'يُطَبِّقُ', 'يُحَلِّلُ', 'يُقَيِّمُ', 'يُبْدِعُ'],
  forms: {
    'خَرِيطَةٌ ذِهْنِيَّةٌ': sp('خَرَائِطُ ذِهْنِيَّةٌ'), 'مُلَخَّصٌ': sp('مُلَخَّصَاتٌ'), 'مَهَارَاتُ الدِّرَاسَةِ': { tag: 'sg · pl', forms: [{ l: 'sg.', ar: 'مَهَارَةٌ' }] },
    'يَتَذَكَّرُ': ihs('أَتَذَكَّرُ', 'تَتَذَكَّرُ'), 'يَفْهَمُ': ihs('أَفْهَمُ', 'تَفْهَمُ'), 'يُطَبِّقُ': ihs('أُطَبِّقُ', 'تُطَبِّقُ'), 'يُحَلِّلُ': ihs('أُحَلِّلُ', 'تُحَلِّلُ'),
    'يُقَيِّمُ': ihs('أُقَيِّمُ', 'تُقَيِّمُ'), 'يُبْدِعُ': ihs('أُبْدِعُ', 'تُبْدِعُ'), 'يُنَظِّمُ': ihs('أُنَظِّمُ', 'تُنَظِّمُ'), 'يُرَاجِعُ': ihs('أُرَاجِعُ', 'تُرَاجِعُ'),
    'يُلَخِّصُ': ihs('أُلَخِّصُ', 'تُلَخِّصُ'), 'يَحْتَفِظُ بِـ': ihs('أَحْتَفِظُ', 'تَحْتَفِظُ'),
  },
  vocabNotes: {
    0: 'Study strategies: the tools on today’s menu. مُرَاجَعَةٌ مُتَبَاعِدَةٌ (spaced repetition) and تَسْمِيعٌ ذَاتِيٌّ (self-testing) are the two the research rates highest.',
    1: 'Bloom’s taxonomy: six levels from remembering (يَتَذَكَّرُ) to creating (يُبْدِعُ). From “apply” upwards the verbs are Form II / IV with a direct object.',
    2: 'Study verbs: all take a DIRECT object (يُنَظِّمُ وَقْتَهُ · يُرَاجِعُ الدُّرُوسَ · يُلَخِّصُ المَادَّةَ) — except يَحْتَفِظُ بِـ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · Bloom’s ladder (website rules 1–2 + table) · Core', title: 'From remembering to creating', ar: 'هَرَمُ بْلُومَ',
      cols: [{ label: 'Level', w: 2.0 }, { label: 'Verb', w: 2.4, size: 24 }, { label: 'Studying Arabic', w: 5.9, size: 20 }, { label: 'Form', w: 2.03 }],
      rows: [
        { core: true, cells: ['1 · remember', '{p|يَتَذَكَّرُ}', 'يَتَذَكَّرُ الطَّالِبُ {p|المُفْرَدَاتِ} الجَدِيدَةَ.', 'V'] },
        { core: true, cells: ['2 · understand', '{p|يَفْهَمُ}', 'يَفْهَمُ {p|القَاعِدَةَ} وَيَشْرَحُهَا بِكَلِمَاتِهِ.', 'I'] },
        { core: true, cells: ['3 · apply', '{w|يُطَبِّقُ}', 'يُطَبِّقُ {w|القَاعِدَةَ} فِي جُمَلٍ جَدِيدَةٍ.', 'II'] },
        { cells: ['4 · analyse', '{w|يُحَلِّلُ}', 'يُحَلِّلُ {w|النَّصَّ} وَيُمَيِّزُ الحَقِيقَةَ مِنَ الرَّأْيِ.', 'II'] },
        { cells: ['5 · evaluate', '{w|يُقَيِّمُ}', 'يُقَيِّمُ {w|كِتَابَتَهُ} بَعْدَ الانْتِهَاءِ.', 'II'] },
        { cells: ['6 · create', '{k|يُبْدِعُ}', 'يُبْدِعُ {k|نَصًّا} جَدِيدًا.', 'IV'] },
      ],
      ltr: true,
      foot: 'Website teaching point: the levels rise — and the higher verbs are Form II / IV with a direct object.',
      notes: `GRAMMAR PART 1 — website rules “Form II/IV study verbs” and “Cognitive order”, the website table and teaching point “Bloom's verbs climb from remembering to creating”.
Website mistake 1: يُحَلِّلُ الطَّالِبُ فِي النَّصِّ ✗ → يُحَلِّلُ النَّصَّ.
Make it real: every row is something students already do in this course (vocabulary → grammar rule → sentence building → reading P1-L08 → self-check → writing).
Quick quiz: teacher names a classroom task (“write your own campaign”), students name the level (يُبْدِعُ).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · study verbs for I, he and she (website vocabulary + rule 4) · Core / Develop', title: 'I organise my time · she organises hers', ar: 'أَفْعَالُ الدِّرَاسَةِ',
      cols: [{ label: 'Meaning', w: 2.2 }, { label: 'I', w: 3.3, size: 20 }, { label: 'He', w: 3.3, size: 20 }, { label: 'She', w: 3.53, size: 20 }],
      rows: [
        { core: true, cells: ['organise my / his / her time', 'أُنَظِّمُ {w|وَقْتِي}', 'يُنَظِّمُ {w|وَقْتَهُ}', 'تُنَظِّمُ {w|وَقْتَهَا}'] },
        { core: true, cells: ['summarise the material', 'أُلَخِّصُ المَادَّةَ', 'يُلَخِّصُ المَادَّةَ', 'تُلَخِّصُ المَادَّةَ'] },
        { cells: ['revise the lessons', 'أُرَاجِعُ الدُّرُوسَ', 'يُرَاجِعُ الدُّرُوسَ', 'تُرَاجِعُ الدُّرُوسَ'] },
        { core: true, cells: ['retain the information', 'أَحْتَفِظُ {k|بِالمَعْلُومَاتِ}', 'يَحْتَفِظُ {k|بِالمَعْلُومَاتِ}', 'تَحْتَفِظُ {k|بِالمَعْلُومَاتِ}'] },
        { cells: ['evaluate my / his / her work', 'أُقَيِّمُ {w|عَمَلِي}', 'يُقَيِّمُ {w|عَمَلَهُ}', 'تُقَيِّمُ {w|عَمَلَهَا}'] },
      ],
      ltr: true,
      foot: 'Two things change with the person: the verb prefix (u- · yu- · tu-) and the possessive (-ī · -hu · -hā).',
      notes: `GRAMMAR PART 2 — the website vocabulary group “Study verbs and concepts” and rule “Retaining information” (يَحْتَفِظُ بِـ, fixed with bi-). Website mistake 2: يَحْتَفِظُ الطَّالِبُ المَعْلُومَاتِ ✗.
Form II present prefixes have a ḍamma: أُ · يُ · تُ (أُنَظِّمُ · يُنَظِّمُ · تُنَظِّمُ) — Form VIII يَحْتَفِظُ has a fatḥa (أَحْتَفِظُ · يَحْتَفِظُ · تَحْتَفِظُ).
Rows 1 and 5: the possessive changes with the person — the same switch as reported speech (P2-L02).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · habit → outcome (website rule 3 + teaching point 2) · Develop', title: 'If you do this, you will remember that', ar: 'إِذَا … سَـ …',
      cards: [
        { chip: 'HABIT → OUTCOME · CORE', color: '1E6B52', head: 'إِذَا رَاجَعْتَ', big: 'إِذَا رَاجَعْتَ يَوْمِيًّا، سَتَتَحَسَّنُ ذَاكِرَتُكَ.', en: 'If you revise daily, your memory will improve.', clue: 'Past → sa-.' },
        { chip: 'HABIT → OUTCOME · DEVELOP', color: '1D5FBF', head: 'إِذَا لَخَّصْتَ', big: 'إِذَا لَخَّصْتَ المَادَّةَ بِكَلِمَاتِكَ، سَتَحْتَفِظُ بِهَا أَطْوَلَ.', en: 'If you summarise in your own words, you will retain it longer.', clue: 'bi-hā!' },
        { chip: 'CONTRAST · STRETCH', color: 'C0386B', head: 'بَيْنَمَا', big: 'بَيْنَمَا يُؤَدِّي الحِفْظُ إِلَى النِّسْيَانِ، يُؤَدِّي الفَهْمُ إِلَى الاحْتِفَاظِ.', en: 'While memorising leads to forgetting, understanding leads to retention.', clue: 'Two methods.' },
      ],
      error: { text: 'Website mistake 3: the verb after idhā is past in form.', pairs: [['إِذَا رَاجَعْتَ يَوْمِيًّا، سَتَنْجَحُ', 'إِذَا تُرَاجِعُ يَوْمِيًّا، سَتَنْجَحُ']] },
      notes: `GRAMMAR PART 3 — website rule “Study-outcome conditional” and teaching point “Connect a habit to its outcome” (a study guide is stronger when it links cause to effect). Card 3 recycles بَيْنَمَا from P2-L01 (website quiz item 7 and pattern 3).
Past forms after idhā: رَاجَعْتَ (Form III) · لَخَّصْتَ (Form II) · نَظَّمْتَ (Form II) · اسْتَعْمَلْتَ (Form X).
Card 2: سَتَحْتَفِظُ بِهَا — the bi- stays even with a pronoun (bihā = it, the material).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · recommending with an + subjunctive (website listening and model) · Stretch', title: 'Research recommends that the student …', ar: 'أَنْ + المُضَارِعُ المَنْصُوبُ',
      cols: [{ label: 'Present', w: 2.6, size: 22 }, { label: 'After an (-a)', w: 2.8, size: 22 }, { label: 'In the website model', w: 6.93, size: 19 }],
      rows: [
        { core: true, cells: ['يُنَظِّمُ', '{e|يُنَظِّمَ}', 'تُوصِي الأَبْحَاثُ بِأَنْ {e|يُنَظِّمَ} الطَّالِبُ وَقْتَهُ …'] },
        { core: true, cells: ['يُلَخِّصُ', '{e|يُلَخِّصَ}', '… {e|وَيُلَخِّصَ} المَادَّةَ …'] },
        { cells: ['يُطَبِّقُ', '{e|يُطَبِّقَ}', '… {e|وَيُطَبِّقَ} مَا تَعَلَّمَهُ.'] },
        { cells: ['يُحَلِّلُ · يُقَيِّمُ', '{e|يُحَلِّلَ · يُقَيِّمَ}', 'أَنْ {e|يُحَلِّلَ} {e|وَيُقَيِّمَ} {e|وَيُبْدِعَ}.'] },
      ],
      ltr: true,
      foot: 'One an governs the whole chain: every verb joined by wa- also takes -a.',
      notes: `GRAMMAR PART 4 — from the website listening (تُوصِي الأَبْحَاثُ بِأَنْ يُنَظِّمَ الطَّالِبُ وَقْتَهُ) and writing model (… وَيُلَخِّصَ المَادَّةَ، وَيُطَبِّقَ مَا تَعَلَّمَهُ · أَنْ يُحَلِّلَ وَيُقَيِّمَ وَيُبْدِعَ).
تُوصِي بِأَنْ + subjunctive is the active partner of P1-L01’s يُوصَى بِـ + verbal noun: يُوصَى بِتَنْظِيمِ الوَقْتِ = تُوصِي الأَبْحَاثُ بِأَنْ يُنَظِّمَ الطَّالِبُ وَقْتَهُ.
Stretch: rewrite each row as a verbal noun — بِتَنْظِيمِ · بِتَلْخِيصِ · بِتَطْبِيقِ.`,
    },
  ],
  quick: [0, 1, 2, 4],
  rest: [3, 5, 6, 7],
  ido: {
    title: 'Watch me write a study guide',
    steps: [
      { head: 'Hook', ar: 'هَلْ تَعْلَمُ أَنَّ … يَتَفَوَّقُونَ؟', think: 'P1-L07.' },
      { head: 'Recommend', ar: 'تُوصِي الأَبْحَاثُ بِأَنْ {e|يُنَظِّمَ} … {e|وَيُلَخِّصَ}', think: 'an + -a.' },
      { head: 'Outcome', ar: '{k|إِذَا لَخَّصْتَ} … {k|سَتَحْتَفِظُ} بِهَا', think: 'Habit → result.' },
      { head: 'Contrast', ar: '{w|بَيْنَمَا} يُؤَدِّي الحِفْظُ …', think: 'Two methods.' },
    ],
    legend: ['e', 'k', 'w'], legendLabels: { e: 'AN + SUBJUNCTIVE', k: 'CONDITIONAL', w: 'CONTRAST' },
    model: 'هَلْ تَعْلَمُ أَنَّ الطُّلَّابَ الَّذِينَ يَسْتَعْمِلُونَ المُرَاجَعَةَ المُتَبَاعِدَةَ يَتَفَوَّقُونَ عَلَى أَقْرَانِهِمْ؟ تُوصِي الأَبْحَاثُ بِأَنْ {e|يُنَظِّمَ} الطَّالِبُ وَقْتَهُ {e|وَيُلَخِّصَ} المَادَّةَ. {k|وَإِذَا لَخَّصْتَ} المَادَّةَ بِكَلِمَاتِكَ، {k|سَتَحْتَفِظُ} بِهَا أَطْوَلَ. {w|بَيْنَمَا} يُؤَدِّي الحِفْظُ عَنْ ظَهْرِ قَلْبٍ إِلَى نِسْيَانٍ سَرِيعٍ، يُؤَدِّي الفَهْمُ العَمِيقُ إِلَى احْتِفَاظٍ طَوِيلٍ.',
    modelEn: 'Did you know that students who use spaced repetition outperform their peers? Research recommends that the student organise his time and summarise the material. If you summarise the material in your own words, you will retain it longer. While rote memorisation leads to quick forgetting, deep understanding leads to long retention.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Hook with hal taʿlamu anna (P1-L07). Recommend: tūṣī bi-an + subjunctive — every verb in the chain takes -a. Then habit → outcome with idhā. Finally contrast two methods with baynamā (P2-L01).”',
  },
  patternEn: ['the student analyses the text, then evaluates his understanding', 'if you revise the material weekly, you will retain the information better', 'while memorising leads to quick forgetting, understanding leads to long retention'],
  gameKey: 'P2-L05',
  game: {
    title: 'Which strategy? Match the picture',
    pick: [0, 3, 4],
    en: ['I organise my time with a study timetable.', 'I study in short sessions with a break.', 'I write questions to test myself.'],
    icons: [[['fa6', 'FaCalendarCheck', '1E6B52'], ['fa6', 'FaListCheck', '1D5FBF']], [['fa6', 'FaStopwatch', 'C0386B'], ['fa6', 'FaBook', 'C77700'], ['fa6', 'FaMugHot', '6B4C9A']], [['fa6', 'FaCircleQuestion', '1D5FBF'], ['fa6', 'FaPenToSquare', '1E6B52']]],
    labels: ['a study timetable', 'short sessions with breaks', 'self-testing'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6; the website files this study-skills set under P2-L05 and the careers set under P2-L04, so the two are swapped here). Then link each habit to its outcome: إِذَا نَظَّمْتُ وَقْتِي، سَيَقِلُّ التَّشْتِيتُ · إِذَا اخْتَبَرْتُ نَفْسِي، سَأَحْتَفِظُ بِالمَعْلُومَاتِ أَطْوَلَ.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · plan a Bloom’s study ladder (website rules and table)', title: 'One topic, six levels', ar: 'سُلَّمُ بْلُومَ لِمَوْضُوعٍ وَاحِدٍ',
      cols: [{ label: 'Level', w: 2.0 }, { label: 'Topic: P1 Healthy Lifestyles — what I will do', w: 7.9, size: 19 }, { label: 'Verb', w: 2.43 }],
      rows: [
        { core: true, cells: ['remember', 'أَتَذَكَّرُ مُفْرَدَاتِ التَّغْذِيَةِ بِالتَّسْمِيعِ الذَّاتِيِّ.', 'يَتَذَكَّرُ'] },
        { core: true, cells: ['understand', 'أَفْهَمُ قَاعِدَةَ الشَّرْطِ وَأَشْرَحُهَا لِزَمِيلِي.', 'يَفْهَمُ'] },
        { cells: ['apply', 'أُطَبِّقُ «إِذَا … سَـ» فِي خَمْسِ جُمَلٍ جَدِيدَةٍ.', 'يُطَبِّقُ'] },
        { cells: ['analyse', 'أُحَلِّلُ نَصًّا صِحِّيًّا وَأُمَيِّزُ الحَقِيقَةَ مِنَ الرَّأْيِ.', 'يُحَلِّلُ'] },
        { cells: ['evaluate · create', 'أُقَيِّمُ مَقَالَتِي ثُمَّ أُبْدِعُ حَمْلَةً صِحِّيَّةً جَدِيدَةً.', 'يُقَيِّمُ · يُبْدِعُ'] },
      ],
      ltr: true,
      foot: 'Now plan your own ladder for P2 (education): one sentence per level, starting with a Form II verb where you can.',
      notes: `WE DO (3 min) — a study ladder built from the website Bloom’s table, applied to the P1 unit students have just finished (the website lesson has no builder).
Read row by row; students name the level before you reveal it. Then pairs write their own ladder for P2 Education.
Core: rows 1–3 for their own ladder. Develop: all six levels. Stretch: add a conditional to two rows (إِذَا طَبَّقْتُ … سَأَتَذَكَّرُ …).`,
    },
  ],
  sorterTitle: 'Remember / understand, apply / analyse / evaluate — or create?',
  sorterNotes: 'Then put each verb in a sentence about studying Arabic: أَتَذَكَّرُ … · أَسْتَوْعِبُ … · أُطَبِّقُ … · أُحَلِّلُ … · أُقَيِّمُ … · أُبْدِعُ / أَبْتَكِرُ / أُؤَلِّفُ …',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('يَحْتَفِظُ بِـ', 'yaḥtafiẓ bi-') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'small website spelling fixes (waṣl alif without a kasra: الانْتِهَاءِ · الاسْتِيعَابُ; the helping kasra in بَلِ التَّعَلُّمَ); rule headings shown in English and transliteration; the Bloom’s ladder is teacher-built from the website table; the website visual games for P2-L04 and P2-L05 are swapped (study strategies here, future plans in P2-L05). All other website items are used as published.',
  hints: ['yuḥallil + fī?', 'yaḥtafiẓ + which preposition?', 'After idhā: past or present?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: idhā … sa- and the study verbs.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write down one conditional and one reported-speech verb you hear.',
  gloss: [
    ['تُوصِي الأَبْحَاثُ بِأَنْ يُنَظِّمَ الطَّالِبُ وَقْتَهُ أَوَّلًا.', 'Research recommends that the student organise his time first.'],
    ['هَلْ تَعْلَمُ أَنَّ الَّذِينَ يَسْتَعْمِلُونَ المُرَاجَعَةَ المُتَبَاعِدَةَ يَتَفَوَّقُونَ عَلَى أَقْرَانِهِمْ؟', 'Did you know that those who use spaced repetition outperform their peers?'],
    ['الطَّرِيقَةُ الفَعَّالَةُ لَا تَعْتَمِدُ عَلَى الحِفْظِ عَنْ ظَهْرِ قَلْبٍ، بَلْ عَلَى الفَهْمِ العَمِيقِ. فَإِذَا لَخَّصْتَ المَادَّةَ بِكَلِمَاتِكَ، سَتَحْتَفِظُ بِهَا أَطْوَلَ.', 'The effective method does not rely on rote memorisation but on deep understanding. If you summarise the material in your own words, you will retain it longer.'],
    ['وَأَكَّدَ عُلَمَاءُ التَّرْبِيَةِ أَنَّ الطَّالِبَ الَّذِي يَسْتَعْمِلُ هَرَمَ بْلُومَ يَصِلُ إِلَى مُسْتَوَيَاتِ التَّفْكِيرِ العُلْيَا.', 'Education scholars stressed that the student who uses Bloom’s taxonomy reaches the higher levels of thinking.'],
    ['وَبَيْنَمَا يُضْعِفُ التَّشْتِيتُ التَّرْكِيزَ، تُعَزِّزُ البِيئَةُ الهَادِئَةُ الإِنْتَاجِيَّةَ. ابْدَأْ بِخُطْوَةٍ صَغِيرَةٍ اليَوْمَ.', 'While distraction weakens focus, a quiet environment boosts productivity. Start with a small step today.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'كَيْفَ تُنَظِّمُ وَقْتَ دِرَاسَتِكَ؟' },
      { route: 'develop', ar: 'أَيَّ مُسْتَوَى مِنْ هَرَمِ بْلُومَ تَجِدُهُ أَصْعَبَ؟' },
      { route: 'stretch', ar: 'مَاذَا سَيَحْدُثُ إِذَا اسْتَعْمَلْتَ المُرَاجَعَةَ المُتَبَاعِدَةَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أُنَظِّمُ وَقْتِي فِي ______ ، وَأُلَخِّصُ المَادَّةَ ______ .' },
      { route: 'develop', ar: 'أَجِدُ مُسْتَوَى ______ أَصْعَبَ، لِأَنَّ ______ .' },
      { route: 'stretch', ar: 'إِذَا رَاجَعْتُ عَلَى فَتَرَاتٍ مُتَبَاعِدَةٍ، ______ .' },
    ],
    modelEn: ['How do you organise your study time?', 'I organise my time in a timetable, and I summarise the material with mind maps.', 'And what will happen if you revise at intervals?', 'If I revise at spaced intervals, I will retain the information longer and analyse texts more deeply.'],
    notes: 'Website prompts and model. Pair task: each student names ONE habit they will try this week and its outcome (إِذَا … سَـ). To a girl: تُنَظِّمِينَ · دِرَاسَتِكِ · تَجِدِينَهُ · اسْتَعْمَلْتِ.',
  },
  write: {
    core: { amount: '6 sentences', how: 'Website Core: one sentence for each Bloom’s level about studying Arabic.' },
    develop: { amount: '60–80 words', how: 'Website Develop: add two study-outcome conditionals.' },
    stretch: { amount: '100–110 words', how: 'Website task: a study guide with a rhetorical opener, four study verbs, two conditionals and a citation.' },
  },
  frames: {
    core: [
      { en: 'I remember … by …', ar: 'أَتَذَكَّرُ ______ عَنْ طَرِيقِ ______ .' },
      { en: 'I apply the rule in …', ar: 'أُطَبِّقُ القَاعِدَةَ فِي ______ .' },
      { en: 'I analyse … and evaluate …', ar: 'أُحَلِّلُ ______ ، وَأُقَيِّمُ ______ .' },
      { en: 'I create …', ar: 'أُبْدِعُ ______ .' },
    ],
    develop: [
      { en: 'If you revise daily, …', ar: 'إِذَا رَاجَعْتَ يَوْمِيًّا، ______ .' },
      { en: 'If you summarise in your own words, you will …', ar: 'إِذَا لَخَّصْتَ المَادَّةَ بِكَلِمَاتِكَ، ______ .' },
      { en: 'Research recommends that the student …', ar: 'تُوصِي الأَبْحَاثُ بِأَنْ ______ الطَّالِبُ ______ .' },
      { en: 'While memorising leads to …, understanding leads to …', ar: 'بَيْنَمَا يُؤَدِّي الحِفْظُ إِلَى ______ ، يُؤَدِّي الفَهْمُ إِلَى ______ .' },
    ],
    bank: ['المُفْرَدَاتُ', 'القَاعِدَةُ', 'النَّصُّ', 'كِتَابَتِي', 'خَرِيطَةٌ ذِهْنِيَّةٌ', 'التَّسْمِيعُ الذَّاتِيُّ', 'المُرَاجَعَةُ المُتَبَاعِدَةُ', 'سَتَحْتَفِظُ بِهَا أَطْوَلَ', 'سَتَتَحَسَّنُ ذَاكِرَتُكَ', 'سَيَقِلُّ التَّشْتِيتُ', 'النِّسْيَانُ', 'الاحْتِفَاظُ'],
  },
  stretch: [
    ['يَتَفَوَّقُونَ عَلَى أَقْرَانِهِمْ', 'outperform their peers'],
    ['وَيُطَبِّقَ مَا تَعَلَّمَهُ', 'and apply what he has learned'],
    ['سَيَصِلُ إِلَى مُسْتَوَيَاتِ التَّفْكِيرِ العُلْيَا', 'will reach the higher levels of thinking'],
    ['نِسْيَانٌ سَرِيعٌ · احْتِفَاظٌ طَوِيلٌ', 'quick forgetting · long retention'],
    ['سَيَتَغَيَّرُ نَهْجُكَ فِي التَّعَلُّمِ، فَابْدَأِ اليَوْمَ', 'your approach to learning will change, so start today'],
  ],
  modelEn: 'Did you know that students who use spaced repetition outperform their peers? Research recommends that the student organise his time, summarise the material and apply what he has learned. Education scholars stressed that if the student uses Bloom’s taxonomy, he will reach the higher levels of thinking: analysing, evaluating and creating. If you summarise the material in your own words, you will retain it longer. While rote memorisation leads to quick forgetting, deep understanding leads to long retention. Your approach to learning will change — so start today.',
  find: ['a rhetorical opener (hal taʿlamu anna)', 'four study verbs (an + subjunctive chain)', 'two idhā conditionals', 'a reported-speech citation (akkada … anna)'],
  modelNotes: 'Website writing model. Evidence: هَلْ تَعْلَمُ أَنَّ الطُّلَّابَ … · تُوصِي الأَبْحَاثُ بِأَنْ يُنَظِّمَ … وَيُلَخِّصَ … وَيُطَبِّقَ · وَأَكَّدَ عُلَمَاءُ التَّرْبِيَةِ أَنَّهُ إِذَا اسْتَعْمَلَ … سَيَصِلُ · أَنْ يُحَلِّلَ وَيُقَيِّمَ وَيُبْدِعَ · إِذَا لَخَّصْتَ … سَتَحْتَفِظُ · بَيْنَمَا …',
  selfCheck: [
    { route: 'core', text: 'My study verbs have a direct object (no fī / bi-).' },
    { route: 'core', text: 'yaḥtafiẓ has bi- (yaḥtafiẓ bi-l-maʿlūmāt).' },
    { route: 'develop', text: 'My idhā verbs are past; my results have sa-.' },
    { route: 'develop', text: 'After an, every verb in my chain ends in -a.' },
    { route: 'stretch', text: 'I cited research with a reporting verb (akkada anna).' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['مَوْهِبَةً', 'a talent'], ['تُكْتَسَبُ', 'is acquired'], ['عَلَى فَتَرَاتٍ مُتَبَاعِدَةٍ', 'at spaced intervals'], ['التَّسْمِيعَ الذَّاتِيَّ', 'self-testing'], ['إِعَادَةِ القِرَاءَةِ', 're-reading'],
    ['نِسْيَانٍ سَرِيعٍ', 'quick forgetting'], ['احْتِفَاظٍ', 'retention'], ['طَوِيلِ الأَمَدِ', 'long-term'], ['جَمْعَ المَعْلُومَاتِ', 'collecting information'], ['كَيْفَ نُفَكِّرُ', 'how to think'],
  ],
  prep: {
    words: [['طُمُوحٌ مِهَنِيٌّ', 'a career ambition', 'pl. طُمُوحَاتٌ'], ['مَسَارٌ مِهَنِيٌّ', 'a career path', 'pl. مَسَارَاتٌ'], ['رِيَادَةُ الأَعْمَالِ', 'entrepreneurship', '—'], ['الذَّكَاءُ الاصْطِنَاعِيُّ', 'artificial intelligence', '—'], ['يَطْمَحُ إِلَى', 'he aspires to', 'تَطْمَحُ she']],
    questionEn: 'What job would you like in the future, and will AI change it?',
    questionAr: 'أَطْمَحُ إِلَى أَنْ أَعْمَلَ ______ ، وَأَعْتَقِدُ أَنَّ الذَّكَاءَ الاصْطِنَاعِيَّ ______ .',
    homework: {
      core: 'Learn the six Bloom’s verbs; write one sentence per level about studying Arabic.',
      develop: 'A 60–80-word study plan with two habit → outcome conditionals.',
      stretch: 'Website writing task: a 100–110-word study guide for an academic magazine.',
    },
    wordsSource: 'The five words come from the website P2-L05 vocabulary (careers and the future of work).',
  },
  remember: 'Remember: climb Bloom’s ladder — yatadhakkar · yafham · yuṭabbiq · yuḥallil · yuqayyim · yubdiʿ — study verbs take a DIRECT object (but yaḥtafiẓ BI-) — and link every habit to its outcome with idhā … sa-.',
});

module.exports = { meta, slides };
