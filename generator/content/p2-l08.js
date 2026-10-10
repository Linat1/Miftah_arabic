'use strict';
/* P2-L08 · Reading — Education Texts — website: Pathways › Progression › P2 › P2-L08 (reading-skills lesson: the reporting verb as a signal of certainty
 * أَكَّدَ / ادَّعَى / اعْتَرَفَ بِـ, the writer’s own view vs a cited view, the conditional type as an argument signal إِذَا vs لَوْ, mention vs recommend يَذْكُرُ ≠ يُوصِي بِـ).
 * The website reading (a ministry report and an opinion article) is the main You Do task. Website vocabulary, rules, quiz, sorter, mistakes, listening,
 * reading, speaking, writing, live builder and mission used as published, with waṣl alif shown without a kasra inside phrases and the listening imperative
 * spelt وَمَيِّزْ. The website visual game repeats the P2-L01 / P2-L03 education-path cards, so it is not used. English added to the patterns; rule
 * examples shown without their English glosses. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P2')({
  n: 8, fileTitle: 'Reading_Education_Texts', chip: 'Reading Skills',
  title: 'Reading — Education Texts', arabic: 'القِرَاءَةُ — نُصُوصُ التَّعْلِيمِ',
  focus: 'Read education texts like an examiner: let the reporting verb show certainty (akkada = sure · iddaʿā = doubtful), separate the writer’s view from a cited one, read idhā as a proposal and law as a counterfactual, and never mistake a mention for a recommendation.',
  icon: 'FaNewspaper', iconSet: 'fa6',
});

const he3 = (she, they) => ({ tag: 'he · she · they', forms: [{ l: 'they', ar: they }, { l: 'she', ar: she }] });
const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/وَمِيِّزْ/g, 'وَمَيِّزْ'));
const site = fix(D.site('P2-L08'));
const RH = [['Certainty from the reporting verb', 'akkada (certain) · iddaʿā (doubtful)'], ['Own view vs cited view', 'reported source ≠ the writer'], ['Conditional type as an argument signal', 'idhā (real) · law (hypothetical)'], ['Mention vs recommend', 'yadhkur ≠ yūṣī bi-']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P2-L08', {
  support: `• READING-SKILLS LESSON: the website text “two education texts” (a ministry report and an opinion article) is the main You Do task. The grammar slides are a reading toolkit built on P2 grammar students already know (reported speech, both conditionals).
• Core: classify six reporting verbs as certain, doubtful or neutral (website Core). Develop: say whether two conditionals are real or hypothetical. Stretch: write an R3-style question that needs analysis of a reporting verb or a conditional.
• Exam link: IGCSE Paper 1 R3 questions ask “what does the writer think / imply?” — the reporting verb and the conditional type are the evidence. Train students to QUOTE the word.
• Media-literacy link: the same verbs appear in news headlines («يَدَّعِي» vs «يُؤَكِّدُ»). Ask: who is speaking — the journalist or the person quoted?
• Grammar links: reported speech (P2-L02) · Type 2 conditional (P2-L06) · fact vs opinion (P1-L08).`,
  teach: 'Reporting verbs as certainty signals, cited vs own view, idhā vs law, mention vs recommend.',
  wedo: 'Compare a report and an opinion piece, build an analysis, sort the verbs.',
  next: { nextCode: 'P2-L09', nextTitle: 'Writing — Education and Future Plans (Paper 4 Extended Writing)', nextAr: 'الكِتَابَةُ — التَّعْلِيمُ وَخُطَطُ المُسْتَقْبَلِ' },
  objectives: ['Answer R1–R4 questions on education texts.', 'Read the reporting verb as a signal of certainty and stance.', 'Tell a real idhā argument from a hypothetical law one.', 'Frame an inferential R3 question about a text.'],
  rulesAr: 'إِشَارَاتُ القِرَاءَةِ',
  ruleEx: [['أَكَّدَ الوَزِيرُ أَنَّ …', 'ادَّعَى المُنْتَقِدُونَ أَنَّ …'], ['أَشَارَ التَّقْرِيرُ إِلَى أَنَّ …'], ['إِذَا زَادَ الإِنْفَاقُ، سَتَتَحَسَّنُ النَّتَائِجُ', 'لَوْ زَادَ الإِنْفَاقُ، لَتَحَسَّنَتْ'], ['ذَكَرَ التَّقْرِيرُ الفَجْوَةَ', 'أَوْصَى بِسَدِّ الفَجْوَةِ']],
  doNow: {
    questions: [
      q('What does نَصٌّ تَحْلِيلِيٌّ mean?', ['an analytical text', 'an interview', 'a reference'], 'Prepared at home (P2-L07).'),
      q('What does مَقَالُ رَأْيٍ mean?', ['an opinion article', 'an official report', 'a point of view'], 'Prepared at home (P2-L07).'),
      q('What does حُجَّةٌ مُضَادَّةٌ mean?', ['a counter-argument', 'evidence', 'a conclusion'], 'Prepared at home (P2-L07).'),
      q('Complete: تَمُرُّ المِنْطَقَةُ ___ أَزْمَةٍ تَعْلِيمِيَّةٍ.', ['بِـ', 'عَلَى', 'إِلَى'], 'P2-L07: yamurr bi-.'),
      q('Which sentence is hypothetical?', ['لَوْ زَادَ الإِنْفَاقُ، لَتَحَسَّنَتِ النَّتَائِجُ.', 'إِذَا زَادَ الإِنْفَاقُ، سَتَتَحَسَّنُ النَّتَائِجُ.', 'زَادَ الإِنْفَاقُ فَتَحَسَّنَتِ النَّتَائِجُ.'], 'P2-L06: law … la-.'),
    ],
    keyIdea: { text: 'Read HOW it is said, not only what is said: the reporting verb shows how sure the writer is.', ar: '{w|أَكَّدَ} = وَاثِقٌ · {e|ادَّعَى} = شَكٌّ · {m|اعْتَرَفَ بِـ} = تَنَازُلٌ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P2-L07. Question 4 retrieves yamurr bi- (P2-L07) and question 5 the Type 2 conditional (P2-L06) — today students read law as a signal of the writer’s argument.',
  },
  routes: {
    core: ['I can sort reporting verbs: certain, doubtful, neutral.', 'I can find the phrase that proves my answer.'],
    develop: ['I can say if a conditional is a proposal or a counterfactual.', 'I can tell a cited view from the writer’s own.'],
    stretch: ['I can tell mentioning from recommending.', 'I can write an R3-style question.'],
  },
  bridge: [
    { ar: 'تَحْلِيلٌ', urdu: 'تجزیہ / تحلیل', tr: 'tajziya', en: 'analysis' },
    { ar: 'دَعْوَى · ادَّعَى', urdu: 'دعویٰ', tr: 'daʿwā', en: 'a claim · he claimed' },
    { ar: 'اعْتِرَافٌ', urdu: 'اعتراف', tr: 'iʿtirāf', en: 'admission, confession' },
    { ar: 'وَضَاحَةٌ · أَوْضَحَ', urdu: 'وضاحت', tr: 'wazāhat', en: 'clarification · he clarified' },
    { ar: 'مَوْقِفٌ', urdu: 'موقف', tr: 'mauqif', en: 'stance, position' },
  ],
  bridgeNotes: 'URDU BRIDGE: دعویٰ (a claim — the noun behind ادَّعَى), اعتراف (admission — اعْتَرَفَ بِـ), وضاحت (clarification — أَوْضَحَ) and موقف are shared. Urdu دعویٰ often sounds neutral, but in Arabic reporting ادَّعَى signals the writer’s DOUBT.',
  core: ['نَصٌّ تَحْلِيلِيٌّ', 'تَقْرِيرٌ مُؤَسَّسِيٌّ', 'مَقَالُ رَأْيٍ', 'حُجَّةٌ مُضَادَّةٌ', 'دَلِيلٌ', 'يَتَوَصَّلُ إِلَى', 'يَسْتَشْهِدُ بِـ', 'يَذْكُرُ', 'يُوصِي بِـ', 'أَكَّدَ', 'اِدَّعَى', 'اِعْتَرَفَ بِـ'],
  forms: {
    'نَصٌّ تَحْلِيلِيٌّ': sp('نُصُوصٌ تَحْلِيلِيَّةٌ'), 'تَقْرِيرٌ مُؤَسَّسِيٌّ': sp('تَقَارِيرُ مُؤَسَّسِيَّةٌ'), 'مَقَالُ رَأْيٍ': sp('مَقَالَاتُ رَأْيٍ'), 'حُجَّةٌ مُضَادَّةٌ': sp('حُجَجٌ مُضَادَّةٌ'),
    'دَلِيلٌ': sp('أَدِلَّةٌ'), 'مَرْجِعٌ': sp('مَرَاجِعُ'), 'مُقَابَلَةٌ': sp('مُقَابَلَاتٌ'),
    'يَتَوَصَّلُ إِلَى': ihs('أَتَوَصَّلُ', 'تَتَوَصَّلُ'), 'يَسْتَشْهِدُ بِـ': ihs('أَسْتَشْهِدُ', 'تَسْتَشْهِدُ'), 'يَسْتَنْتِجُ': ihs('أَسْتَنْتِجُ', 'تَسْتَنْتِجُ'), 'يُمَيِّزُ بَيْنَ': ihs('أُمَيِّزُ', 'تُمَيِّزُ'),
    'يَذْكُرُ': ihs('أَذْكُرُ', 'تَذْكُرُ'), 'يُوصِي بِـ': ihs('أُوصِي', 'تُوصِي'),
    'أَكَّدَ': he3('أَكَّدَتْ', 'أَكَّدُوا'), 'اِدَّعَى': he3('ادَّعَتْ', 'ادَّعَوْا'), 'اِعْتَرَفَ بِـ': he3('اعْتَرَفَتْ', 'اعْتَرَفُوا'), 'أَوْضَحَ': he3('أَوْضَحَتْ', 'أَوْضَحُوا'),
    'نَفَى': he3('نَفَتْ', 'نَفَوْا'), 'زَعَمَ': he3('زَعَمَتْ', 'زَعَمُوا'),
  },
  vocabNotes: {
    0: 'Text types: an examiner’s first question is “what kind of text is this?” — an official report (تَقْرِيرٌ مُؤَسَّسِيٌّ) speaks for an institution; an opinion article (مَقَالُ رَأْيٍ) speaks for its writer.',
    1: 'Reading verbs — the verbs of an exam answer, each with its partner: يَتَوَصَّلُ إِلَى · يَسْتَشْهِدُ بِـ · يُشِيرُ إِلَى · يُوصِي بِـ · يُمَيِّزُ بَيْنَ … وَ … · يَسْتَنْتِجُ + object.',
    2: 'Certainty in reporting verbs: أَكَّدَ (certain) · أَوْضَحَ (neutral) · اعْتَرَفَ بِـ (concedes) · ادَّعَى / زَعَمَ (doubtful) · نَفَى (denied). Past forms: he · she · they.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · how sure is the source? (website rule 1 + table) · Core', title: 'The reporting verb signals certainty', ar: 'الفِعْلُ النَّاقِلُ وَدَرَجَةُ اليَقِينِ',
      cols: [{ label: 'Reporting verb', w: 2.5, size: 22 }, { label: 'She · they', w: 2.9, size: 19 }, { label: 'Signals', w: 2.6 }, { label: 'How to read it', w: 4.33 }],
      rows: [
        { core: true, cells: ['{w|أَكَّدَ}', 'أَكَّدَتْ · أَكَّدُوا', 'high certainty', 'a confident (often official) source'] },
        { cells: ['{w|أَثْبَتَ}', 'أَثْبَتَتْ · أَثْبَتُوا', 'proof', 'backed by evidence'] },
        { core: true, cells: ['{m|أَوْضَحَ}', 'أَوْضَحَتْ · أَوْضَحُوا', 'neutral', 'explains plainly'] },
        { cells: ['{m|اعْتَرَفَ بِـ}', 'اعْتَرَفَتْ · اعْتَرَفُوا', 'concession', 'admits something reluctantly'] },
        { core: true, cells: ['{e|ادَّعَى}', 'ادَّعَتْ · ادَّعَوْا', 'doubt', 'the writer is sceptical'] },
        { cells: ['{e|زَعَمَ}', 'زَعَمَتْ · زَعَمُوا', 'strong doubt', 'the writer thinks it is false'] },
      ],
      ltr: true,
      foot: 'Website mistake 1: iddaʿā does NOT mean the writer is confident — it signals doubt.',
      notes: `GRAMMAR PART 1 — website rule “Certainty from the reporting verb”, the website table and teaching point “The reporting verb signals certainty and stance” (a core R3 skill).
Website mistake 1: «اِدَّعَى» تَعْنِي أَنَّ الكَاتِبَ وَاثِقٌ ✗ → تُشِيرُ إِلَى شَكِّ الكَاتِبِ.
Forms: ادَّعَى is Form VIII of دعو (they → ادَّعَوْا, like نَفَوْا) · present يَدَّعِي (website reading). All take أَنَّ, except اعْتَرَفَ بِـ → بِأَنَّ.
Quick drill: read a headline with each verb and ask “Does the journalist believe it?”`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · whose view is it? (website rule 2) · Core / Develop', title: 'The writer’s view — or someone else’s?', ar: 'رَأْيُ الكَاتِبِ أَمْ رَأْيُ غَيْرِهِ؟',
      cards: [
        { chip: 'CITED VIEW · CORE', color: '1D5FBF', head: 'أَشَارَ التَّقْرِيرُ', big: 'أَشَارَ التَّقْرِيرُ إِلَى أَنَّ الفَجْوَةَ قَائِمَةٌ.', en: 'The report pointed out that the gap exists.', clue: 'The report’s view.' },
        { chip: 'OWN VIEW · CORE', color: '1E6B52', head: 'أَرَى أَنَّ', big: 'أَرَى أَنَّ الإِصْلَاحَ ضَرُورِيٌّ.', en: 'I believe reform is necessary.', clue: 'The writer’s view.' },
        { chip: 'CITED + DOUBTED · DEVELOP', color: 'C0386B', head: 'يَدَّعِي … لٰكِنَّ', big: 'يَدَّعِي بَعْضُ المَسْؤُولِينَ أَنَّ كُلَّ شَيْءٍ عَلَى مَا يُرَامُ، لٰكِنَّ الوَاقِعَ مُخْتَلِفٌ.', en: 'Some officials claim all is well, but reality is different.', clue: 'Cited, then rejected.' },
      ],
      error: { text: 'Website common error: reported speech is not always the writer’s own view.', pairs: [['الكَلَامُ المَنْقُولُ قَدْ يَنْقُلُ رَأْيَ غَيْرِهِ', 'الكَلَامُ المَنْقُولُ رَأْيُ الكَاتِبِ دَائِمًا']] },
      notes: `GRAMMAR PART 2 — website rule “Own view vs cited view” (reported speech often cites someone else, not the writer) and the listening: وَالكَلَامُ المَنْقُولُ لَا يَعْنِي دَائِمًا رَأْيَ الكَاتِبِ نَفْسِهِ، بَلْ قَدْ يَنْقُلُ رَأْيَ غَيْرِهِ.
Card 3 is from the website reading (text 2). Ask: “Who says all is well? The officials. What does the WRITER think? lākinna … — he disagrees.”
Website quiz 3: «أَشَارَ التَّقْرِيرُ إِلَى أَنَّ…» presents the report’s view, cited by the writer.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · the conditional type is an argument signal (website rule 3 + teaching point 2) · Develop', title: 'Proposal or counterfactual?', ar: 'اقْتِرَاحٌ أَمْ حُجَّةٌ افْتِرَاضِيَّةٌ؟',
      cols: [{ label: 'Sentence from an education text', w: 6.3, size: 18 }, { label: 'Type', w: 2.0 }, { label: 'What the writer is doing', w: 4.03 }],
      rows: [
        { core: true, cells: ['{k|إِذَا اسْتَمَرَّ} الاسْتِثْمَارُ، {k|سَتَتَقَلَّصُ} الفَجْوَةُ.', 'real (idhā)', 'proposing a realistic way forward'] },
        { core: true, cells: ['{e|لَوْ كَانَتِ} المَدَارِسُ الرِّيفِيَّةُ مُمَوَّلَةً، {e|لَاخْتَفَتِ} الفَجْوَةُ.', 'hypothetical (law)', 'criticising: they were NOT funded'] },
        { cells: ['{k|إِذَا زَادَ} الإِنْفَاقُ، {k|سَتَتَحَسَّنُ} النَّتَائِجُ.', 'real (idhā)', 'a proposal for the future'] },
        { cells: ['{e|لَوْ زَادَ} الإِنْفَاقُ، {e|لَتَحَسَّنَتِ} النَّتَائِجُ.', 'hypothetical (law)', 'implying spending did NOT rise'] },
      ],
      ltr: true,
      foot: 'law hides a criticism: it tells the reader what did NOT happen.',
      notes: `GRAMMAR PART 3 — website rule “Conditional type as argument signal” and teaching point “إِذَا argues about the real; لَوْ argues about the unreal”. Rows 1–2 are from the website reading (text 1 = official proposal; text 2 = sceptical counterfactual); rows 3–4 from the website rule.
Exam answer frame: يَسْتَعْمِلُ الكَاتِبُ «لَوْ» لِيُجَادِلَ بِمَا كَانَ يُمْكِنُ أَنْ يَحْدُثَ (website reading).
Website quiz 4–5 test exactly this contrast.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · mention vs recommend, and the verbs of an answer (website rule 4 + vocabulary) · Stretch', title: 'Mentioning is not recommending', ar: 'الذِّكْرُ لَيْسَ تَوْصِيَةً',
      cols: [{ label: 'Verb + partner', w: 2.9, size: 20 }, { label: 'Example', w: 5.4, size: 19 }, { label: 'What it means', w: 4.03 }],
      rows: [
        { core: true, cells: ['{m|يَذْكُرُ}', 'ذَكَرَ التَّقْرِيرُ {m|الفَجْوَةَ}.', 'mentions it (direct object) — no advice'] },
        { core: true, cells: ['{w|يُوصِي بِـ}', 'أَوْصَى التَّقْرِيرُ {w|بِسَدِّ} الفَجْوَةِ.', 'recommends action'] },
        { cells: ['{w|يَقْتَرِحُ}', 'يَقْتَرِحُ التَّقْرِيرُ حَلًّا وَاقِعِيًّا.', 'proposes a solution (direct object)'] },
        { cells: ['{k|يَتَوَصَّلُ إِلَى}', 'يَتَوَصَّلُ الكَاتِبُ {k|إِلَى} نَتِيجَةٍ وَاضِحَةٍ.', 'reaches a conclusion'] },
        { cells: ['{k|يَسْتَشْهِدُ بِـ}', 'يَسْتَشْهِدُ الكَاتِبُ {k|بِدِرَاسَةٍ} حَدِيثَةٍ.', 'cites evidence'] },
      ],
      ltr: true,
      foot: 'Website mistake 2: mentioning the gap does not necessarily mean recommending that it be closed.',
      notes: `GRAMMAR PART 4 — website rule “Mention vs recommend” (يَذْكُرُ ≠ يُوصِي بِـ) and the reading verbs with their partners (website vocabulary notes).
Website mistake 2: ذِكْرُ الفَجْوَةِ … يَعْنِي أَنَّهُ أَوْصَى بِسَدِّهَا ✗. Website mistake 3: يَتَوَصَّلُ … بِنَتِيجَةٍ ✗ → إِلَى نَتِيجَةٍ.
Listening: فَقَدْ يَذْكُرُ التَّقْرِيرُ فَجْوَةً دُونَ أَنْ يُوصِيَ بِحَلٍّ.
Stretch: use these verbs in exam answers — يَتَوَصَّلُ الكَاتِبُ إِلَى أَنَّ … · يَسْتَشْهِدُ بِـ … لِيُثْبِتَ …`,
    },
  ],
  quick: [0, 1, 3, 4],
  rest: [2, 5, 6, 7],
  ido: {
    title: 'Watch me analyse a text',
    steps: [
      { head: 'Verb', ar: '«{w|أَكَّدَتِ} الوِزَارَةُ»', think: 'Certain, official.' },
      { head: 'Verb', ar: '«{e|يَدَّعِي} المُنْتَقِدُونَ»', think: 'Doubt.' },
      { head: 'Conditional', ar: '{k|إِذَا} … سَـ · {m|لَوْ} … لَـ', think: 'Proposal or not?' },
      { head: 'Mention', ar: 'يَذْكُرُهَا · يَقْتَرِحُ حَلًّا', think: 'Recommend?' },
    ],
    legend: ['w', 'e', 'k', 'm'], legendLabels: { w: 'CERTAIN', e: 'DOUBT', k: 'REAL · IDHĀ', m: 'HYPOTHETICAL · LAW' },
    model: 'يَكْشِفُ النَّصُّ مَوْقِفَهُ مِنْ خِلَالِ أَفْعَالِهِ النَّاقِلَةِ. فَحِينَ يَكْتُبُ «{w|أَكَّدَتِ} الوِزَارَةُ»، فَهُوَ يَنْقُلُ مَصْدَرًا رَسْمِيًّا وَاثِقًا، أَمَّا «{e|يَدَّعِي} المُنْتَقِدُونَ» فَتُظْهِرُ شَكَّهُ. وَالشَّرْطُ فِي النَّصِّ الأَوَّلِ وَاقِعِيٌّ؛ فَـ«{k|إِذَا اسْتَمَرَّ} الاسْتِثْمَارُ، {k|سَتَتَقَلَّصُ} الفَجْوَةُ» اقْتِرَاحٌ حَقِيقِيٌّ. أَمَّا فِي النَّصِّ الثَّانِي فَـ«{m|لَوْ}» تُقَدِّمُ حُجَّةً افْتِرَاضِيَّةً.',
    modelEn: 'The text reveals its stance through its reporting verbs. When it writes “the ministry stressed”, it conveys a confident official source, whereas “the critics claim” shows its doubt. The conditional in the first text is real: “if investment continues, the gap will shrink” is a genuine proposal. In the second text, however, “law” presents a hypothetical argument.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “First the reporting verbs: akkadat — certain, official. yaddaʿī — the writer doubts it. Then the conditionals: idhā … sa- is a real proposal; law … la- argues about what did not happen. Last: does the text recommend, or only mention?”',
  },
  patternEn: ['the minister stressed that reform is necessary', 'some critics claimed that the reform failed', 'had spending increased, the results would have improved'],
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · compare the two texts (preparing the website reading)', title: 'Ministry report or opinion article?', ar: 'قَارِنْ بَيْنَ النَّصَّيْنِ',
      cols: [{ label: 'Test', w: 2.5 }, { label: 'Text 1: a ministry report', w: 4.9, size: 18 }, { label: 'Text 2: an opinion article', w: 4.93, size: 18 }],
      rows: [
        { core: true, cells: ['Text type', 'تَقْرِيرٌ وِزَارِيٌّ — مَصْدَرٌ رَسْمِيٌّ', 'مَقَالُ رَأْيٍ'] },
        { core: true, cells: ['Reporting verb', '«{w|أَكَّدَتْ}» · «{m|أَشَارَتْ إِلَى أَنَّ}»', '«{e|يَدَّعِي}»'] },
        { cells: ['Certainty', 'وَاثِقٌ', 'شَكٌّ'] },
        { cells: ['Conditional', '{k|إِذَا} — اقْتِرَاحٌ وَاقِعِيٌّ', '{e|لَوْ} — حُجَّةٌ افْتِرَاضِيَّةٌ'] },
        { cells: ['Mention or recommend?', 'يَذْكُرُ الفَجْوَةَ وَيَقْتَرِحُ حَلًّا', 'يَنْتَقِدُ وَلَا يَقْتَرِحُ حَلًّا'] },
      ],
      ltr: true,
      foot: 'The website reading uses exactly these two texts — this table is the plan for answering its questions.',
      notes: `WE DO (3 min) — built from the website reading “two education texts”. Read both quoted texts aloud first, then fill the table together, covering columns 2–3.
Core: rows 1–2. Develop: rows 3–4 with the quoted conditional. Stretch: row 5 and a sentence: يَذْكُرُ النَّصُّ الأَوَّلُ … وَيَقْتَرِحُ … ، بَيْنَمَا يَكْتَفِي الثَّانِي بِالنَّقْدِ.
Vocabulary: وِزَارِيٌّ = ministerial · يَنْتَقِدُ = criticises · يَكْتَفِي بِـ = contents itself with.`,
    },
    {
      type: 'formsTable', stage: 'wedo', min: 2, flex: true, eyebrow: 'We do · build a text analysis (website live builder)', title: 'Verb + conditional + stance', ar: 'ابْنِ تَحْلِيلَكَ',
      cols: [{ label: '1 · The reporting verb', w: 4.0, size: 16 }, { label: '2 · The conditional', w: 4.0, size: 16 }, { label: '3 · Source and stance', w: 4.33, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Say it, then write three different versions.',
      notes: `WE DO (flex) — the website live builder: “Build a text analysis from a reporting-verb reading, a conditional-type reading and a stance judgement.” Website feedback: any three different combinations work.
Use it as oral rehearsal for the website writing task.`,
    },
  ],
  sorterTitle: 'Certain, doubtful — or neutral / concession?',
  sorterCats: ['certain', 'doubtful', 'neutral / concession'],
  sorterNotes: 'Then put each verb into a headline about education and ask: does the journalist believe it? أَكَّدَ الوَزِيرُ أَنَّ … · زَعَمَ نَاقِدٌ أَنَّ … · اعْتَرَفَتِ الوِزَارَةُ بِأَنَّ …',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('أَكَّدَ', 'akkada').replace('اِدَّعَى', 'iddaʿā') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra inside phrases; the listening imperative spelt وَمَيِّزْ; rule headings and formulas in English and transliteration; rule examples shown without their English glosses; the two-text comparison table is teacher-built from the website reading; the website visual game repeats the P2-L01 / P2-L03 cards and is not used. All other website items are used as published.',
  hints: ['iddaʿā → confident?', 'A mention = a recommendation?', 'yatawaṣṣal + bi-?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: akkada · iddaʿā · idhā · law.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write down the four reading habits the speaker gives.',
  gloss: [
    ['عِنْدَمَا تَقْرَأُ نَصًّا تَعْلِيمِيًّا، لَا تَنْظُرْ إِلَى مَا يُقَالُ فَقَطْ، بَلْ إِلَى كَيْفِيَّةِ قَوْلِهِ.', 'When you read an education text, do not look only at what is said, but at how it is said.'],
    ['فَحِينَ يَكْتُبُ الكَاتِبُ «أَكَّدَ الوَزِيرُ»، فَهُوَ يَنْقُلُ مَصْدَرًا رَسْمِيًّا وَاثِقًا. أَمَّا حِينَ يَكْتُبُ «اِدَّعَى بَعْضُ المُنْتَقِدِينَ»، فَهُوَ يُشِيرُ إِلَى شَكِّهِ فِي الكَلَامِ.', 'When the writer writes “the minister stressed”, he is conveying a confident official source. But when he writes “some critics claimed”, he signals his doubt about what was said.'],
    ['وَالكَلَامُ المَنْقُولُ لَا يَعْنِي دَائِمًا رَأْيَ الكَاتِبِ نَفْسِهِ، بَلْ قَدْ يَنْقُلُ رَأْيَ غَيْرِهِ.', 'Reported speech does not always mean the writer’s own view; it may convey someone else’s.'],
    ['وَانْتَبِهْ لِنَوْعِ الشَّرْطِ: إِذَا تُقَدِّمُ اقْتِرَاحًا وَاقِعِيًّا، وَلَوْ تُقَدِّمُ حُجَّةً افْتِرَاضِيَّةً.', 'Pay attention to the type of conditional: idhā offers a realistic proposal, and law offers a hypothetical argument.'],
    ['وَمَيِّزْ بَيْنَ ذِكْرِ فِكْرَةٍ وَالتَّوْصِيَةِ بِهَا؛ فَقَدْ يَذْكُرُ التَّقْرِيرُ فَجْوَةً دُونَ أَنْ يُوصِيَ بِحَلٍّ.', 'Distinguish between mentioning an idea and recommending it: a report may mention a gap without recommending a solution.'],
  ],
  readingCore: {
    readMin: 5, qMin: 6,
    notes: 'YOU DO — READING (main task): the website text “two education texts”. Before reading: underline every reporting verb (أَكَّدَتْ · أَشَارَتْ · يَدَّعِي) and box every conditional (إِذَا · لَوْ).\nCore: questions 1, 2 and 3 (R1–R2). Develop: all 5 + quote the verb or conditional that proves each answer. Stretch: then write one R3-style question about the texts (website Stretch) and swap with a partner.',
  },
  glossary: [
    ['تَقْرِيرٌ وِزَارِيٌّ', 'a ministry report'], ['نِسْبَةَ الالْتِحَاقِ', 'the enrolment rate'], ['مَا زَالَتْ قَائِمَةً', 'still exists'], ['سَتَتَقَلَّصُ', 'will shrink'], ['المَسْؤُولِينَ', 'officials'],
    ['عَلَى مَا يُرَامُ', 'fine, as it should be'], ['الرِّيفِيَّةُ', 'rural'], ['مُمَوَّلَةً', 'funded'], ['لَاخْتَفَتِ', 'would have disappeared'], ['لِيُظْهِرَ شَكَّهُ', 'to show his doubt'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا الفِعْلُ النَّاقِلُ فِي الجُمْلَةِ؟ وَمَاذَا يَدُلُّ عَلَيْهِ؟' },
      { route: 'develop', ar: 'هَلِ الشَّرْطُ فِي النَّصِّ وَاقِعِيٌّ أَمِ افْتِرَاضِيٌّ؟' },
      { route: 'stretch', ar: 'هَلْ يَذْكُرُ النَّصُّ الفِكْرَةَ أَمْ يُوصِي بِهَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'الفِعْلُ النَّاقِلُ « ______ »، وَهُوَ يَدُلُّ عَلَى ______ .' },
      { route: 'develop', ar: 'الشَّرْطُ ______ ، لِأَنَّ الكَاتِبَ يَسْتَعْمِلُ « ______ ».' },
      { route: 'stretch', ar: 'يَذْكُرُ النَّصُّ ______ ، لٰكِنَّهُ لَا يُوصِي ______ .' },
    ],
    modelEn: ['What is the reporting verb, and what does it signal?', 'The verb is “iddaʿā”, and it signals the writer’s doubt about what was said.', 'And is the conditional real or hypothetical?', 'Hypothetical: “law … la-” argues about what could have happened, not a realistic proposal.'],
    notes: 'Website prompts and model. Pairs take one sentence from the reading each and analyse it aloud with the three questions. Stretch stem: يُوصِي بِحَلٍّ / بِسَدِّ الفَجْوَةِ. To a girl: تَسْتَعْمِلِينَ.',
  },
  write: {
    core: { amount: '6 verbs', how: 'Website Core: classify six reporting verbs as certain, doubtful or neutral — with one example sentence each.' },
    develop: { amount: '40–50 words', how: 'Website Develop: for two sentences, say whether the conditional is real or hypothetical, and why.' },
    stretch: { amount: '80–90 words', how: 'Website task: analyse an education text — reporting verb, conditional type, mention vs recommendation and the writer’s stance.' },
  },
  frames: {
    core: [
      { en: 'The verb “…” signals certainty.', ar: 'الفِعْلُ « ______ » يَدُلُّ عَلَى اليَقِينِ.' },
      { en: 'The verb “…” signals the writer’s doubt.', ar: 'الفِعْلُ « ______ » يُظْهِرُ شَكَّ الكَاتِبِ.' },
      { en: 'This text is an official report / an opinion article.', ar: 'هٰذَا النَّصُّ ______ .' },
      { en: 'The report mentions …', ar: 'يَذْكُرُ التَّقْرِيرُ ______ .' },
    ],
    develop: [
      { en: 'The conditional is real, because …', ar: 'الشَّرْطُ وَاقِعِيٌّ، لِأَنَّ ______ .' },
      { en: '“law” presents a hypothetical argument: …', ar: 'تُقَدِّمُ «لَوْ» حُجَّةً افْتِرَاضِيَّةً: ______ .' },
      { en: 'The text mentions … without recommending a solution.', ar: 'يَذْكُرُ النَّصُّ ______ دُونَ أَنْ يُوصِيَ بِحَلٍّ.' },
      { en: 'The writer reaches the conclusion that …', ar: 'يَتَوَصَّلُ الكَاتِبُ إِلَى أَنَّ ______ .' },
    ],
    bank: ['أَكَّدَ', 'أَثْبَتَ', 'أَوْضَحَ', 'اعْتَرَفَ بِـ', 'ادَّعَى', 'زَعَمَ', 'تَقْرِيرٌ رَسْمِيٌّ', 'مَقَالُ رَأْيٍ', 'اقْتِرَاحٌ وَاقِعِيٌّ', 'حُجَّةٌ افْتِرَاضِيَّةٌ', 'مَصْدَرٌ وَاثِقٌ', 'شَكُّ الكَاتِبِ'],
  },
  stretch: [
    ['يَكْشِفُ النَّصُّ مَوْقِفَهُ مِنْ خِلَالِ أَفْعَالِهِ النَّاقِلَةِ', 'the text reveals its stance through its reporting verbs'],
    ['يَنْقُلُ مَصْدَرًا رَسْمِيًّا وَاثِقًا', 'it conveys a confident official source'],
    ['اقْتِرَاحٌ حَقِيقِيٌّ', 'a genuine proposal'],
    ['بَيْنَمَا يَكْتَفِي المَقَالُ بِالنَّقْدِ', 'while the article contents itself with criticism'],
    ['أَقْرَأُ النَّصَّيْنِ بِوَعْيٍ بِمَصْدَرِهِمَا وَمَوْقِفِهِمَا', 'I read both texts aware of their source and stance'],
  ],
  modelEn: 'The text reveals its stance through its reporting verbs. When it writes “the ministry stressed”, it conveys a confident official source, whereas “the critics claim” shows its doubt. The conditional in the first text is real: “if investment continues, the gap will shrink” is a genuine proposal. In the second text, however, “law” presents a hypothetical argument. I distinguish between mentioning the gap and recommending that it be closed: the report mentions it and proposes a solution, while the article contents itself with criticism. So I read both texts aware of their source and stance.',
  find: ['a certain reporting verb (akkadat)', 'a doubtful reporting verb (yaddaʿī)', 'a real vs a hypothetical conditional', 'mention vs recommendation (yadhkuruhā · yaqtariḥ)'],
  modelNotes: 'Website writing model. Evidence: «أَكَّدَتِ الوِزَارَةُ» … مَصْدَرًا رَسْمِيًّا وَاثِقًا · «يَدَّعِي المُنْتَقِدُونَ» فَتُظْهِرُ شَكَّهُ · «إِذَا اسْتَمَرَّ … سَتَتَقَلَّصُ» اقْتِرَاحٌ حَقِيقِيٌّ · «لَوْ» تُقَدِّمُ حُجَّةً افْتِرَاضِيَّةً · أُمَيِّزُ بَيْنَ ذِكْرِ الفَجْوَةِ وَالتَّوْصِيَةِ بِسَدِّهَا.',
  selfCheck: [
    { route: 'core', text: 'I named each reporting verb and its certainty.' },
    { route: 'core', text: 'I quoted the exact phrase that proves my answer.' },
    { route: 'develop', text: 'I classified each conditional: idhā = proposal, law = counterfactual.' },
    { route: 'develop', text: 'I separated the writer’s view from a cited view.' },
    { route: 'stretch', text: 'I did not read a mention as a recommendation.' },
  ],
  exit: [0, 1, 2],
  prep: {
    words: [['عَلَاوَةً عَلَى ذٰلِكَ', 'moreover', '—'], ['شَرِيطَةَ أَنْ', 'provided that', '—'], ['بِنَاءً عَلَى مَا سَبَقَ', 'based on the above', '—'], ['مِنْ جِهَةٍ أُخْرَى', 'on the other hand', '—'], ['نَتِيجَةً لِذٰلِكَ', 'as a result', '—']],
    questionEn: 'Plan an essay: does education guarantee a better future?',
    questionAr: 'أَوَّلًا ______ ، وَعَلَاوَةً عَلَى ذٰلِكَ ______ ، وَبِنَاءً عَلَى مَا سَبَقَ ______ .',
    homework: {
      core: 'Classify six reporting verbs (certain · doubtful · neutral) with one example each.',
      develop: 'Find two conditionals in a news text and say if each is real or hypothetical.',
      stretch: 'Website writing task: an 80–90-word analysis of a short education text.',
    },
    wordsSource: 'The five words come from the website P2-L09 vocabulary (formal connectors for extended writing).',
  },
  remember: 'Remember: read HOW it is said — akkada = certain · iddaʿā / zaʿama = doubtful · iʿtarafa bi- = concedes — idhā proposes, law criticises what did not happen, and a mention is not a recommendation.',
});

module.exports = { meta, slides };
