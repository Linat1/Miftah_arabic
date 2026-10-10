'use strict';
/* P1-L09 · Writing — Healthy Lifestyles (Paper 4 Extended Writing) — website: Pathways › Progression › P1 › P1-L09 (assembling the P1 Range into a 140–150-word
 * magazine article: four-move plan, the nine Range criteria, formal connectors instead of bare وَ, statistical language يُمَثِّلُ · يَبْلُغُ · نِسْبَةٌ, double-marker
 * sentences, self-marking against Paper 4 Q3). Website vocabulary, rules, quiz, sorter, mistakes, listening, annotated reading model, speaking and writing used as
 * published; English added to the patterns. The website visual game is a Foundation symptoms match, unrelated to extended writing, so it is not used. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P1')({
  n: 9, fileTitle: 'Writing_Healthy_Lifestyles_Paper_4', chip: 'Writing Skills',
  title: 'Writing — Healthy Lifestyles (Paper 4 Extended Writing)', arabic: 'الكِتَابَةُ — أَسَالِيبُ الحَيَاةِ الصِّحِّيَّةِ',
  focus: 'Plan and write a 140–150-word health article in four moves, packing in at least seven of the nine P1 Range criteria — a rhetorical hook with a statistic, a passive, a conditional, a benefit verb, a comparative, formal connectors and an opinion — then self-mark it.',
  icon: 'FaPenNib', iconSet: 'fa6',
});

const site = D.site('P1-L09');
const RH = [['Hook with question plus statistic', 'hal taʿlamu anna + accusative … bi-l-miʾa'], ['Combine conditional and statistic', 'idhā + past → sa- + nisba'], ['Raise register with connectors', 'ʿilāwatan ʿalā dhālika · ʿalā al-raghm min'], ['Statistical language', 'yumaththil · yablugh · muʿaddal']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));

const slides = D.devLesson('P1-L09', {
  support: `• WRITING-SKILLS LESSON (IGCSE Paper 4, Q3 style): the website task is a 140–150-word youth-magazine article on healthy lifestyles. This lesson brings together P1-L01 to P1-L08 — it is the P1 writing assessment rehearsal.
• Core: the four-paragraph plan + one accurate sentence per paragraph. Develop: 140 words with five Range markers labelled. Stretch: 150 words, seven or more markers, two double-marker sentences.
• Marking (website listening): Paper 4 Q3 rewards CONTENT, RANGE and ACCURACY — Range means variety of structures, not length. Students count their markers with the self-check slide.
• Timing: give a strict 15 minutes of silent writing in You Do; collect the drafts for the P1-L12 assessment feedback.`,
  teach: 'The four-move plan, nine Range markers, formal connectors and statistics.',
  wedo: 'Upgrade plain sentences, sort the connectors, plan aloud with a partner.',
  next: { nextCode: 'P1-L10', nextTitle: 'Listening — Health and Lifestyle Texts', nextAr: 'الاسْتِمَاعُ — نُصُوصُ الصِّحَّةِ وَأُسْلُوبِ الحَيَاةِ' },
  objectives: site.objectives,
  rulesAr: 'تَرْكِيبُ النِّطَاقِ اللُّغَوِيِّ',
  ruleEx: [['هَلْ تَعْلَمُ أَنَّ ثُلُثَ المُرَاهِقِينَ لَا يَنَامُونَ كِفَايَةً؟'], ['إِذَا مَارَسْتَ الرِّيَاضَةَ، سَتَنْخَفِضُ نِسْبَةُ التَّوَتُّرِ'], ['عِلَاوَةً عَلَى ذٰلِكَ، يُحَسِّنُ النَّوْمُ التَّرْكِيزَ', 'عَلَى الرَّغْمِ مِنْ ذٰلِكَ، يُهْمِلُ كَثِيرُونَ الرَّاحَةَ'], ['يُمَثِّلُ النَّشَاطُ البَدَنِيُّ رُكْنًا أَسَاسِيًّا', 'يَبْلُغُ مُعَدَّلُ النَّوْمِ المُوصَى بِهِ ثَمَانِيَ سَاعَاتٍ']],
  doNow: {
    questions: [
      q('What does عِلَاوَةً عَلَى ذٰلِكَ mean?', ['moreover', 'despite', 'in conclusion'], 'Prepared at home (P1-L08).'),
      q('What does عَلَى الرَّغْمِ مِنْ mean?', ['despite', 'as a result', 'in addition to'], 'Prepared at home (P1-L08).'),
      q('What does نِسْبَةٌ mean?', ['a proportion, rate', 'a statistic', 'a source'], 'Prepared at home (P1-L08).'),
      q('Choose the accurate conditional.', ['إِذَا نِمْتَ مُبَكِّرًا، سَتَكُونُ أَكْثَرَ تَرْكِيزًا.', 'إِذَا تَنَامُ مُبَكِّرًا، سَتَكُونُ أَكْثَرَ تَرْكِيزًا.', 'إِذَا سَتَنَامُ مُبَكِّرًا، تَكُونُ أَكْثَرَ تَرْكِيزًا.'], 'P1-L03: idhā + past form.'),
      q('Complete: التَّمْرُ غَنِيٌّ ___ الحَدِيدِ.', ['بِـ', 'مِنْ', 'عَلَى'], 'P1-L01: content structures.'),
    ],
    keyIdea: { text: 'Range = VARIETY of structures, not length. Count your markers, not your words.', ar: '{e|هَلْ تَعْلَمُ أَنَّ} … · {k|يُوصَى بِـ} … · {w|إِذَا} … {w|سَـ} … · {m|عِلَاوَةً عَلَى ذٰلِكَ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P1-L08. Questions 4–5 retrieve two P1 structures (the conditional, P1-L03; غَنِيٌّ بِـ, P1-L01) — the website’s own mistakes list shows these are the errors that cost Accuracy marks.',
  },
  routes: {
    core: ['I can plan four paragraphs.', 'I can write one accurate sentence per paragraph.'],
    develop: ['I can write 140 words with 5 labelled markers.', 'I can replace a bare wa with a formal connector.'],
    stretch: ['I can reach 7+ of the 9 Range criteria.', 'I can write two double-marker sentences.'],
  },
  bridge: [
    { ar: 'عِلَاوَةً عَلَى ذٰلِكَ', urdu: 'علاوہ ازیں', tr: 'ilāwa azīn', en: 'moreover (Urdu uses the same عِلَاوَة)' },
    { ar: 'نَتِيجَةً لِذٰلِكَ', urdu: 'نتیجتاً', tr: 'natījatan', en: 'as a result' },
    { ar: 'نِسْبَةٌ', urdu: 'نسبت', tr: 'nisbat', en: 'Urdu: relation · Arabic: proportion, rate' },
    { ar: 'مُعَدَّلٌ', urdu: 'شرح / اوسط', tr: 'ausat', en: 'average, rate (Urdu uses a different word)' },
    { ar: 'خِتَامًا', urdu: 'اختتام', tr: 'ikhtitām', en: 'in conclusion (Urdu: conclusion, closing)' },
  ],
  bridgeNotes: 'URDU BRIDGE: formal Urdu connectors come straight from Arabic — علاوہ ازیں، نتیجتاً، اختتام. Students who write formal Urdu already know how these work. CAREFUL: Urdu نسبت means a relation or connection; in an Arabic article نِسْبَةٌ is a rate or percentage.',
  core: ['نِطَاقٌ لُغَوِيٌّ', 'جُمْلَةٌ شَرْطِيَّةٌ', 'مَبْنِيٌّ لِلْمَجْهُولِ', 'سُؤَالٌ بَلَاغِيٌّ', 'رَابِطٌ رَسْمِيٌّ', 'عِلَاوَةً عَلَى ذٰلِكَ', 'عَلَى الرَّغْمِ مِنْ', 'نَتِيجَةً لِذٰلِكَ', 'خِتَامًا', 'يُمَثِّلُ', 'بِالْمِئَةِ', 'نِسْبَةٌ'],
  forms: {
    'نِسْبَةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'نِسَبٌ' }] }, 'مُعَدَّلٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'مُعَدَّلَاتٌ' }] },
    'رَابِطٌ رَسْمِيٌّ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'رَوَابِطُ رَسْمِيَّةٌ' }] }, 'جُمْلَةٌ شَرْطِيَّةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'جُمَلٌ شَرْطِيَّةٌ' }] },
    'يُمَثِّلُ': { tag: 'he · she', forms: [{ l: 'she', ar: 'تُمَثِّلُ' }] }, 'يَبْلُغُ': { tag: 'he · she', forms: [{ l: 'she', ar: 'تَبْلُغُ' }] },
    'يَتَزَايَدُ': { tag: 'he · she', forms: [{ l: 'she', ar: 'تَتَزَايَدُ' }] }, 'يَنْخَفِضُ': { tag: 'he · she', forms: [{ l: 'she', ar: 'تَنْخَفِضُ' }] },
    'صِيغَةُ التَّفْضِيلِ': { tag: 'm · f', forms: [{ l: 'f.', ar: 'الكُبْرَى · الفُضْلَى' }, { l: 'm.', ar: 'أَكْبَرُ · أَفْضَلُ' }] },
  },
  vocabNotes: {
    0: 'The nine Range criteria — the checklist for today. Each card’s note shows an example from P1: a conditional (P1-L03), a passive (P1-L06), a rhetorical question (P1-L07) …',
    1: 'Formal connectors: replace a bare وَ, ثُمَّ or لِذٰلِكَ. Each one sits at the START of a sentence, followed by a comma: عِلَاوَةً عَلَى ذٰلِكَ، …',
    2: 'Statistical language. A feminine subject takes ta-: تُمَثِّلُ الأَطْعِمَةُ المُصَنَّعَةُ … · تَبْلُغُ النِّسْبَةُ … · تَتَزَايَدُ الحَالَاتُ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the four-move plan (website teaching point 2 + listening) · Core', title: 'Four paragraphs, four jobs', ar: 'خُطَّةُ المَقَالَةِ',
      cols: [{ label: 'Paragraph', w: 1.9 }, { label: 'Job', w: 2.5 }, { label: 'Range markers', w: 2.5 }, { label: 'Model sentence (website model)', w: 5.43, size: 19 }],
      rows: [
        { core: true, cells: ['1 · hook', 'grab the reader', 'question + statistic', '{e|هَلْ تَعْلَمُ أَنَّ} ثُلُثَ المُرَاهِقِينَ لَا يَحْصُلُونَ عَلَى نَوْمٍ كَافٍ؟'] },
        { core: true, cells: ['2 · diet', 'advise precisely', 'passive + academic word', '{k|يُوصَى بِتَنَاوُلِ} طَعَامٍ غَنِيٍّ بِالخُضَارِ وَالبُرُوتِينِ.'] },
        { core: true, cells: ['3 · exercise + mind', 'show cause and effect', 'Form II + conditional', '{w|تُقَوِّي} الرِّيَاضَةُ الجِسْمَ؛ {w|فَإِذَا} مَارَسْتَهَا، {w|سَتَنْخَفِضُ} نِسْبَةُ التَّوَتُّرِ.'] },
        { core: true, cells: ['4 · conclusion', 'opinion + way forward', 'opinion + connector', '{m|فِي رَأْيِي}، التَّوَازُنُ هُوَ المِفْتَاحُ. {m|خِتَامًا}، أَدْعُوكَ إِلَى خُطْوَةٍ صَغِيرَةٍ.'] },
      ],
      ltr: true,
      foot: 'Website teaching point: “The plan is what turns vocabulary into a Level A text.”',
      notes: `GRAMMAR PART 1 — website teaching point “Structure the article in four moves” (P1 a rhetorical hook plus a statistic; P2 diet with academic vocabulary and a passive; P3 exercise and mental health with a Form II verb and a conditional; P4 an opinion and a forward look joined by a formal connector) and the website listening (اِفْتَحْ بِسُؤَالٍ بَلَاغِيٍّ وَإِحْصَائِيَّةٍ …).
Each paragraph recycles one earlier P1 lesson: hook (P1-L07) · diet (P1-L01) · exercise + mind (P1-L02, P1-L03) · conclusion (P1-L07 call to action).
Core students write ONLY the four model-style sentences — one per paragraph — and still have a complete, organised text.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · raise the register with connectors (website rule 3) · Develop', title: 'Replace the bare wa', ar: 'الرَّوَابِطُ الرَّسْمِيَّةُ',
      cols: [{ label: 'Job', w: 1.7 }, { label: 'Plain (Foundation)', w: 2.2, size: 22 }, { label: 'Formal (Progression)', w: 3.2, size: 22 }, { label: 'Example', w: 5.23, size: 18 }],
      rows: [
        { core: true, cells: ['addition', 'وَ · أَيْضًا', '{w|عِلَاوَةً عَلَى ذٰلِكَ}', 'عِلَاوَةً عَلَى ذٰلِكَ، يُحَسِّنُ النَّوْمُ التَّرْكِيزَ.'] },
        { cells: ['addition', 'وَ', '{w|بِالإِضَافَةِ إِلَى}', 'بِالإِضَافَةِ إِلَى الرِّيَاضَةِ، يُوصَى بِالنَّوْمِ.'] },
        { core: true, cells: ['contrast', 'لٰكِنْ', '{e|عَلَى الرَّغْمِ مِنْ ذٰلِكَ}', 'عَلَى الرَّغْمِ مِنْ ذٰلِكَ، يُهْمِلُ كَثِيرُونَ الرَّاحَةَ.'] },
        { cells: ['contrast', 'لٰكِنْ', '{e|مِنْ نَاحِيَةٍ أُخْرَى}', 'مِنْ نَاحِيَةٍ أُخْرَى، تُعِيقُ الشَّاشَاتُ النَّوْمَ.'] },
        { core: true, cells: ['result', 'لِذٰلِكَ', '{k|نَتِيجَةً لِذٰلِكَ}', 'نَتِيجَةً لِذٰلِكَ، يَتَحَسَّنُ المِزَاجُ.'] },
        { cells: ['conclusion', 'فِي النِّهَايَةِ', '{m|خِتَامًا}', 'خِتَامًا، أَدْعُوكَ إِلَى خُطْوَةٍ صَغِيرَةٍ.'] },
      ],
      ltr: true,
      foot: 'Website mistake: chained wa … wa … wa adds no Range — a connector and an analytical verb do.',
      notes: `GRAMMAR PART 3 — website rule “Raise register with connectors” (replace a bare وَ with a formal connector) and website mistake 2: وَالنَّوْمُ مُهِمٌّ وَالرِّيَاضَةُ مُهِمَّةٌ وَالغِذَاءُ مُهِمٌّ ✗ → عِلَاوَةً عَلَى ذٰلِكَ، يُمَثِّلُ النَّوْمُ رُكْنًا أَسَاسِيًّا لِلصِّحَّةِ.
Grammar notes: عَلَى الرَّغْمِ مِنْ + a noun (عَلَى الرَّغْمِ مِنْ فَوَائِدِهَا) or + ذٰلِكَ. بِالإِضَافَةِ إِلَى + genitive. After each connector at the start of a sentence: a comma.
Rule of thumb for Develop: at least TWO formal connectors in 140 words.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · statistics and the comparative (website rules 1, 4) · Develop / Stretch', title: 'Numbers that persuade', ar: 'اللُّغَةُ الإِحْصَائِيَّةُ',
      cols: [{ label: 'Tool', w: 2.5 }, { label: 'Arabic', w: 3.0, size: 22 }, { label: 'Example', w: 6.83, size: 19 }],
      rows: [
        { core: true, cells: ['a third / a half', 'ثُلُثُ · نِصْفُ', 'هَلْ تَعْلَمُ أَنَّ {e|ثُلُثَ} المُرَاهِقِينَ لَا يَنَامُونَ كِفَايَةً؟'] },
        { core: true, cells: ['percent', 'بِالْمِئَةِ', 'يُعَانِي {e|ثَلَاثُونَ بِالْمِئَةِ} مِنَ الطُّلَّابِ مِنَ التَّوَتُّرِ.'] },
        { cells: ['represents', 'يُمَثِّلُ · تُمَثِّلُ', '{k|تُمَثِّلُ} الأَطْعِمَةُ المُصَنَّعَةُ خَطَرًا مُتَزَايِدًا.'] },
        { cells: ['amounts to', 'يَبْلُغُ', '{k|يَبْلُغُ} مُعَدَّلُ النَّوْمِ المُوصَى بِهِ ثَمَانِيَ سَاعَاتٍ.'] },
        { cells: ['rises / falls', 'يَتَزَايَدُ · يَنْخَفِضُ', '{k|سَتَنْخَفِضُ} نِسْبَةُ التَّوَتُّرِ · {k|تَتَزَايَدُ} الحَالَاتُ.'] },
        { cells: ['comparative', 'أَهَمُّ · أَكْثَرُ', 'النَّوْمُ {w|أَهَمُّ مِنَ} الطَّعَامِ أَحْيَانًا.'] },
      ],
      ltr: true,
      foot: 'After anna the fraction is accusative (thulutha); the comparative afʿal does not change for m / f: al-nawm ahammu · al-rāḥa ahammu.',
      notes: `GRAMMAR PART 3 — website rules “Hook with question plus statistic” and “Statistical language” (يُمَثِّلُ · يَبْلُغُ · مُعَدَّلٌ: quantify a claim to add analytical weight), plus the comparative (Range criterion 7, صِيغَةُ التَّفْضِيلِ).
Website quiz item 3: هَلْ تَعْلَمُ أَنَّ ___ المُرَاهِقِينَ → ثُلُثَ (accusative after anna). Quiz item 7: ثَمَانِيَ سَاعَاتٍ (3–10 + genitive plural).
Only use numbers you can justify — or soften them: تُشِيرُ الإِحْصَاءَاتُ إِلَى أَنَّ … (P1-L08: who says so?).
Comparative: أَفْعَلُ مِنْ (more … than) for m and f alike: الرَّاحَةُ أَهَمُّ مِنَ … · النَّوْمُ أَهَمُّ مِنَ …`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · one sentence, two Range markers (website teaching point 1 + rule 2) · Stretch', title: 'Make each sentence do two jobs', ar: 'جُمْلَةٌ وَاحِدَةٌ، عَلَامَتَانِ',
      cards: [
        { chip: 'CONDITIONAL + STATISTIC', color: '1E6B52', head: 'إِذَا … سَتَنْخَفِضُ نِسْبَةُ', big: 'إِذَا مَارَسْتَ الرِّيَاضَةَ، سَتَنْخَفِضُ نِسْبَةُ التَّوَتُّرِ.', en: 'If you exercise, the level of stress will fall.', clue: '2 markers.' },
        { chip: 'CONNECTOR + PASSIVE', color: '1D5FBF', head: 'عِلَاوَةً عَلَى ذٰلِكَ · يُوصَى', big: 'عِلَاوَةً عَلَى ذٰلِكَ، يُوصَى بِالنَّوْمِ الكَافِي.', en: 'Moreover, sufficient sleep is recommended.', clue: '2 markers.' },
        { chip: 'QUESTION + STATISTIC', color: 'C0386B', head: 'هَلْ تَعْلَمُ أَنَّ ثُلُثَ …', big: 'هَلْ تَعْلَمُ أَنَّ نِصْفَ الأَمْرَاضِ يُمْكِنُ تَجَنُّبُهَا؟', en: 'Did you know that half of diseases can be avoided?', clue: '2 markers.' },
      ],
      error: { text: 'Website common error: 150 fluent words with ONE structure repeated earns little Range.', pairs: [['إِذَا تَمَرَّنْتَ، سَتَشْعُرُ بِتَحَسُّنٍ', 'إِذَا تَتَمَرَّنُ، تَشْعُرُ بِتَحَسُّنٍ']] },
      notes: `GRAMMAR PART 4 — website teaching point “One sophisticated sentence can carry two Range markers” (إِذَا اتَّبَعْتَ حِمْيَةً مُتَوَازِنَةً، سَتَنْخَفِضُ نِسْبَةُ الإِصَابَةِ بِأَمْرَاضِ القَلْبِ) and rule “Combine conditional and statistic”.
The error pair is website mistake 3 (accuracy still matters: idhā + PAST, result with sa-). Website mistake 1: غَنِيٌّ مِنَ ✗ → غَنِيٌّ بِـ.
Stretch target: two double-marker sentences in the article — underline them in two colours.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me upgrade a paragraph',
    steps: [
      { head: 'Plain', ar: 'الرِّيَاضَةُ مُفِيدَةٌ وَالنَّوْمُ مُهِمٌّ.', think: 'No Range.' },
      { head: 'Benefit verb', ar: '{w|تُقَوِّي} الرِّيَاضَةُ الجِسْمَ', think: 'Form II.' },
      { head: 'Conditional', ar: '{e|فَإِذَا} مَارَسْتَهَا، {e|سَتَنْخَفِضُ} نِسْبَةُ التَّوَتُّرِ', think: '+ statistic.' },
      { head: 'Connector', ar: '{m|عَلَى الرَّغْمِ مِنْ ذٰلِكَ}، يُهْمِلُ كَثِيرُونَ النَّوْمَ', think: 'Contrast.' },
    ],
    legend: ['w', 'e', 'm'], legendLabels: { w: 'BENEFIT VERB', e: 'CONDITION + STATISTIC', m: 'CONNECTOR' },
    model: '{m|عِلَاوَةً عَلَى ذٰلِكَ}، {w|تُقَوِّي} الرِّيَاضَةُ الجِسْمَ {w|وَتُحَسِّنُ} المِزَاجَ؛ {e|فَإِذَا} مَارَسْتَ الرِّيَاضَةَ ثَلَاثَ مَرَّاتٍ أُسْبُوعِيًّا، {e|سَتَنْخَفِضُ} نِسْبَةُ التَّوَتُّرِ وَسَتَنَامُ أَعْمَقَ. {m|عَلَى الرَّغْمِ مِنْ ذٰلِكَ}، يُهْمِلُ كَثِيرُونَ النَّوْمَ، وَهُوَ أَهَمُّ مِنَ الطَّعَامِ أَحْيَانًا.',
    modelEn: 'Moreover, sport strengthens the body and improves mood; if you exercise three times a week, the level of stress will fall and you will sleep more deeply. Despite that, many people neglect sleep, which is sometimes more important than food.',
    notes: 'I DO (3 min) — paragraph 3 of the website model. Start from the plain sentence and upgrade it live, counting the markers aloud: connector (1) · Form II benefit verbs (2) · conditional (3) + statistic (4) · contrast connector (5) · comparative أَهَمُّ (6). “One paragraph, six markers.”',
  },
  patternEn: ['did you know that a third of teenagers do not sleep enough?', 'if you exercise, the level of stress will fall', 'moreover, sufficient sleep is recommended'],
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · upgrade the sentence (website mistakes and model)', title: 'From plain to Paper 4', ar: 'حَسِّنِ الجُمْلَةَ',
      cols: [{ label: 'Plain sentence', w: 4.1, size: 20 }, { label: 'Paper 4 sentence', w: 6.0, size: 19 }, { label: 'Marker', w: 2.23 }],
      rows: [
        { core: true, cells: ['النَّوْمُ قَلِيلٌ عِنْدَ المُرَاهِقِينَ.', 'هَلْ تَعْلَمُ أَنَّ ثُلُثَ المُرَاهِقِينَ لَا يَحْصُلُونَ عَلَى نَوْمٍ كَافٍ؟', 'question + statistic'] },
        { core: true, cells: ['كُلِ الخُضَارَ!', 'يُوصَى بِتَنَاوُلِ طَعَامٍ غَنِيٍّ بِالخُضَارِ.', 'passive'] },
        { cells: ['الرِّيَاضَةُ حِلْوَةٌ.', 'تُقَوِّي الرِّيَاضَةُ الجِسْمَ وَتُحَسِّنُ المِزَاجَ.', 'Form II verbs'] },
        { cells: ['وَالنَّوْمُ مُهِمٌّ أَيْضًا.', 'عِلَاوَةً عَلَى ذٰلِكَ، يُمَثِّلُ النَّوْمُ رُكْنًا أَسَاسِيًّا.', 'connector + statistic verb'] },
        { cells: ['أُحِبُّ الصِّحَّةَ.', 'فِي رَأْيِي، التَّوَازُنُ هُوَ المِفْتَاحُ الحَقِيقِيُّ.', 'opinion'] },
      ],
      ltr: true,
      foot: 'Cover the middle column: upgrade each plain sentence, then compare with the website model.',
      notes: `WE DO (3 min) — the website lesson has no builder, so this upgrade drill is built from the website mistakes (chained wa, غَنِيٌّ مِنْ) and the website model.
Core: rows 1–2. Develop: rows 1–4. Stretch: all five, then combine two rows into a double-marker sentence.
The left-hand sentences are all accurate — but they show almost no Range. That is the point: accurate is not enough at Paper 4.`,
    },
  ],
  sorterTitle: 'Addition, contrast or result?',
  sorterNotes: 'Then use one connector from each column to join three sentences about sleep, food and exercise.',
  patch: { grammar: { ...site.grammar, rules } },
  patchNote: 'website rule headings and formulas shown in English and transliteration (rule examples without the English glosses); the upgrade drill is teacher-built from the website mistakes and model; the website visual game (a Foundation symptoms match) is not used. All other website items are used as published.',
  hints: ['ghaniyy + which preposition?', 'wa … wa … wa: Range?', 'After idhā: past or present?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nListen for: the three things Q3 marks.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5 — and write down which marker goes in which paragraph.',
  gloss: [
    ['فِي الوَرَقَةِ الرَّابِعَةِ، السُّؤَالُ الثَّالِثُ يُقَيِّمُ ثَلَاثَةَ أَشْيَاءَ: المُحْتَوَى، وَالنِّطَاقَ، وَالدِّقَّةَ.', 'In Paper 4, question 3 assesses three things: content, range and accuracy.'],
    ['النِّطَاقُ يَعْنِي تَنَوُّعَ البُنَى: جُمْلَةٌ شَرْطِيَّةٌ، وَمَبْنِيٌّ لِلْمَجْهُولِ، وَسُؤَالٌ بَلَاغِيٌّ، وَرَابِطٌ رَسْمِيٌّ.', 'Range means a variety of structures: a conditional, a passive, a rhetorical question and a formal connector.'],
    ['لَا يَكْفِي أَنْ تَكْتُبَ مِئَةً وَخَمْسِينَ كَلِمَةً بِبُنْيَةٍ وَاحِدَةٍ مُكَرَّرَةٍ. اُكْتُبْ مِئَةً وَأَرْبَعِينَ إِلَى مِئَةٍ وَخَمْسِينَ كَلِمَةً، وَاجْعَلْ كُلَّ فِقْرَةٍ تَحْمِلُ عَلَامَةَ نِطَاقٍ جَدِيدَةً.', 'It is not enough to write 150 words with one repeated structure. Write 140 to 150 words, and make each paragraph carry a new Range marker.'],
    ['اِفْتَحْ بِسُؤَالٍ بَلَاغِيٍّ وَإِحْصَائِيَّةٍ، ثُمَّ اسْتَعْمِلْ فِعْلًا مَبْنِيًّا لِلْمَجْهُولِ فِي فِقْرَةِ الغِذَاءِ، وَجُمْلَةً شَرْطِيَّةً فِي فِقْرَةِ الرِّيَاضَةِ.', 'Open with a rhetorical question and a statistic, then use a passive verb in the diet paragraph and a conditional in the exercise paragraph.'],
    ['خِتَامًا، أَعْطِ رَأْيًا وَنَظْرَةً إِلَى المُسْتَقْبَلِ.', 'Finally, give an opinion and a look to the future.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا سُؤَالُكَ البَلَاغِيُّ الافْتِتَاحِيُّ وَإِحْصَائِيَّتُكَ؟' },
      { route: 'develop', ar: 'أَيَّ فِعْلٍ مَبْنِيٍّ لِلْمَجْهُولِ سَتَسْتَعْمِلُ فِي فِقْرَةِ الغِذَاءِ؟' },
      { route: 'stretch', ar: 'مَا جُمْلَتُكَ الشَّرْطِيَّةُ فِي فِقْرَةِ الرِّيَاضَةِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'هَلْ تَعْلَمُ أَنَّ ______ ؟' },
      { route: 'develop', ar: 'سَأَسْتَعْمِلُ « يُوصَى ______ » فِي فِقْرَةِ الغِذَاءِ.' },
      { route: 'stretch', ar: 'إِذَا ______ ، سَتَنْخَفِضُ نِسْبَةُ ______ .' },
    ],
    modelEn: ['What is your opening question?', 'Did you know that a third of teenagers do not sleep enough?', 'And your conditional?', 'If I organise my sleep, my focus will improve, and moreover my energy will rise.'],
    notes: 'Website prompts and model: students TALK THROUGH their plan with a partner before writing (2 min each). The partner counts the Range markers on their fingers. To a girl: سُؤَالُكِ · إِحْصَائِيَّتُكِ · سَتَسْتَعْمِلِينَ · جُمْلَتُكِ.',
  },
  write: {
    core: { amount: '4 paragraphs', how: 'Website Core: the four-paragraph plan and one sentence per paragraph.' },
    develop: { amount: '140 words', how: 'Website Develop: expand to 140 words with five Range markers labelled.' },
    stretch: { amount: '140–150 words', how: 'Website task: 7+ of the 9 Range criteria, including two double-marker sentences.' },
  },
  frames: {
    core: [
      { en: '1 · Did you know that …?', ar: 'هَلْ تَعْلَمُ أَنَّ ______ ؟' },
      { en: '2 · It is recommended to eat food rich in …', ar: 'يُوصَى بِتَنَاوُلِ طَعَامٍ غَنِيٍّ بِالخُضَارِ وَ ______ .' },
      { en: '3 · If you exercise …, the level of … will fall.', ar: 'إِذَا مَارَسْتَ الرِّيَاضَةَ ______ ، سَتَنْخَفِضُ نِسْبَةُ ______ .' },
      { en: '4 · In my opinion, … is the key.', ar: 'فِي رَأْيِي، ______ هُوَ المِفْتَاحُ.' },
    ],
    develop: [
      { en: 'Good health rests on three pillars.', ar: 'إِنَّ الصِّحَّةَ الجَيِّدَةَ تَقُومُ عَلَى ______ أَرْكَانٍ.' },
      { en: 'Moreover, sport strengthens …', ar: 'عِلَاوَةً عَلَى ذٰلِكَ، تُقَوِّي الرِّيَاضَةُ ______ .' },
      { en: 'Despite that, many neglect …', ar: 'عَلَى الرَّغْمِ مِنْ ذٰلِكَ، يُهْمِلُ كَثِيرُونَ ______ .' },
      { en: 'In conclusion, I invite you to …', ar: 'خِتَامًا، أَدْعُوكَ إِلَى ______ .' },
    ],
    bank: ['ثُلُثُ', 'نِصْفُ', 'بِالْمِئَةِ', 'نِسْبَةُ التَّوَتُّرِ', 'يُمَثِّلُ', 'يُوصَى بِـ', 'تُقَوِّي', 'تُحَسِّنُ', 'أَهَمُّ مِنْ', 'عِلَاوَةً عَلَى ذٰلِكَ', 'عَلَى الرَّغْمِ مِنْ ذٰلِكَ', 'خِتَامًا'],
  },
  stretch: [
    ['تَقُومُ عَلَى ثَلَاثَةِ أَرْكَانٍ', 'rests on three pillars'],
    ['الَّتِي تُمَثِّلُ خَطَرًا مُتَزَايِدًا', 'which represent a growing danger'],
    ['سَتَنْخَفِضُ نِسْبَةُ التَّوَتُّرِ وَسَتَنَامُ أَعْمَقَ', 'the level of stress will fall and you will sleep more deeply'],
    ['وَهُوَ أَهَمُّ مِنَ الطَّعَامِ أَحْيَانًا', 'and it is sometimes more important than food'],
    ['فَالتَّغْيِيرُ يَبْدَأُ بِقَرَارٍ وَاحِدٍ', 'for change begins with a single decision'],
  ],
  modelEn: 'Did you know that a third of teenagers do not get enough sleep? Good health in the twenty-first century rests on three pillars. Firstly, food: it is recommended to eat food rich in vegetables and protein, and to reduce processed foods, which represent a growing danger. Moreover, sport strengthens the body and improves mood; if you exercise three times a week, the level of stress will fall and you will sleep more deeply. Despite that, many people neglect sleep, which is sometimes more important than food. In my opinion, the balance between food, movement and rest is the real key. In conclusion, I invite you to take one small step today, for change begins with a single decision.',
  find: ['a rhetorical question + statistic', 'a passive (yūṣā bi-)', 'a conditional + statistic', 'two formal connectors and an opinion'],
  modelNotes: 'Website writing model (≈ 150 words). Range markers: هَلْ تَعْلَمُ أَنَّ ثُلُثَ (question + statistic) · يُوصَى بِتَنَاوُلِ (passive) · غَنِيٍّ بِـ · تُمَثِّلُ خَطَرًا (statistical verb) · تُقَوِّي · تُحَسِّنُ (Form II) · فَإِذَا مَارَسْتَ … سَتَنْخَفِضُ نِسْبَةُ (conditional + statistic) · عِلَاوَةً عَلَى ذٰلِكَ · عَلَى الرَّغْمِ مِنْ ذٰلِكَ · خِتَامًا (connectors) · أَهَمُّ مِنَ (comparative) · فِي رَأْيِي (opinion) — all nine criteria.',
  selfCheck: [
    { route: 'core', text: 'I wrote four paragraphs in the four-move order.' },
    { route: 'core', text: 'My conditional has idhā + past and a sa- result.' },
    { route: 'develop', text: 'I used two formal connectors instead of bare wa.' },
    { route: 'develop', text: 'I labelled five Range markers in the margin.' },
    { route: 'stretch', text: 'I counted 7+ of 9 markers and two double-marker sentences.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['تَقُومُ عَلَى', 'rests on'], ['أَرْكَانٍ', 'pillars'], ['أَوَّلًا', 'firstly'], ['غَنِيٍّ بِالخُضَارِ', 'rich in vegetables'], ['الأَطْعِمَةِ المُصَنَّعَةِ', 'processed foods'],
    ['أُسْبُوعِيًّا', 'weekly'], ['يُهْمِلُ', 'neglects'], ['المِفْتَاحُ', 'the key'], ['أَدْعُوكَ إِلَى', 'I invite you to'], ['خُطْوَةٍ صَغِيرَةٍ', 'a small step'],
  ],
  prep: {
    words: [['كَلِمَةٌ مِفْتَاحِيَّةٌ', 'a key word', 'pl. كَلِمَاتٌ مِفْتَاحِيَّةٌ'], ['مُشَتِّتٌ', 'a distractor', 'pl. مُشَتِّتَاتٌ'], ['الفِكْرَةُ الرَّئِيسِيَّةُ', 'the main idea', '—'], ['حِمْيَةٌ', 'a diet', 'pl. حِمْيَاتٌ'], ['بِالْمِئَةِ', 'percent', '—']],
    questionEn: 'In a listening exam, what makes a wrong answer look right?',
    questionAr: 'المُشَتِّتُ هُوَ جَوَابٌ ______ .',
    homework: {
      core: 'Finish the four-paragraph plan with one accurate sentence per paragraph.',
      develop: 'A 140-word article with five Range markers labelled in the margin.',
      stretch: 'Website writing task: a 140–150-word article with 7+ of the 9 Range criteria.',
    },
    wordsSource: 'The five words come from the website P1-L10 vocabulary (listening strategies and health numbers).',
  },
  remember: 'Remember: four moves (hook · diet · exercise + mind · conclusion) — Range is VARIETY: question + statistic, passive, conditional, Form II verb, comparative, connectors, opinion — and make some sentences do two jobs.',
});

module.exports = { meta, slides };
