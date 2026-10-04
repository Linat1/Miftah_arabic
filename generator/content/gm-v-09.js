'use strict';
/* GM-V-09 · Basic Conditionals — website: Mastery & Revision › Grammar › Verbs › Lesson 9 (idhā for real, expected or repeated conditions;
 * law for imagined or contrary-to-fact ones, with la- on the result; idhā patterns: future result, habitual result, command result with fa-,
 * nominal result with fa-; law + kāna / kuntu / past event; in- as Stretch; speaking ladder; clinic).
 * Website correction: in standard written Arabic a result beginning with sa- / sawfa takes fa- (إِذَا دَرَسْتَ فَسَتَنْجَحُ); the website
 * often omits it, as speech does. The fa- is restored in every quiz item and model used here (fixFa) and taught as a note.
 * Quizzes are the website’s (Entry, Meaning, Idhā Pattern, Law Pattern, Application, Mastery) plus the website game; items whose options
 * carry “only” / “فقط” notes are skipped. Sorter, I-do, frames, reading and model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__07-verbs__grammar-mastery-09-conditionals';
const S = G.site(KEY);
const fixFa = (t) => (typeof t === 'string' ? t.replace(/، سَ/g, '، فَسَ') : t);
const W = (re, i, patch = {}) => {
  const it = G.quiz(S, re)[i];
  return G.fq({ ...it, prompt: fixFa(it.prompt), options: it.options.map(fixFa), ...patch });
};

const meta = G.meta({
  code: 'GM-V-09', fileTitle: 'Conditionals', title: 'Basic Conditionals', arabic: 'أَسَالِيبُ الشَّرْطِ الْأَسَاسِيَّةُ',
  focus: 'Idhā = if / when for real, expected or repeated conditions (idhā darasta fa-sa-tanjaḥu). Law = if for imagined or impossible ones, and the result starts with la- (law kuntu ghaniyyan la-sāfartu).',
  icon: 'FaCodeBranch',
});

const slides = G.gmLesson({
  code: 'GM-V-09', site: KEY,
  support: `• Core: إِذَا + past form, then a result (إِذَا تَعِبْتُ أَسْتَرِيحُ · إِذَا وَصَلْتَ فَاتَّصِلْ بِي). Develop: لَوْ + كَانَ / كُنْتُ with a لَـ result (لَوْ كُنْتُ غَنِيًّا لَسَافَرْتُ). Stretch: counterfactual past (لَوْ خَرَجْنَا مُبَكِّرًا لَمَا تَأَخَّرْنَا) and formal إِنْ.
• Key warning (website): after idhā Arabic uses a PAST form for a future event — idhā waṣalta = when you arrive. Do not translate the English tense.
• Accuracy note: a result starting with sa-, a command or a noun is linked with fa- (فَسَتَنْجَحُ · فَاسْأَلْنِي · فَالرِّحْلَةُ مُمْتِعَةٌ).`,
  teach: 'Idhā vs law; idhā patterns; law patterns; speaking ladder.',
  wedo: 'Choose the connector; sort real / imagined; repair.',
  next: { nextCode: 'GM-V-10', nextTitle: 'Subjunctive', nextAr: 'الْمُضَارِعُ الْمَنْصُوبُ' },
  doNow: {
    pick: [0, 2, 3, 4, 5],
    fb: { 0: 'Idhā commonly presents a real, expected or repeated condition.', 1: 'Idhā can mean “when” as well as “if”.', 2: 'The result can be an instruction, linked with fa-.', 3: 'La- often marks the result of law.', 4: 'The priority is the functional contrast between idhā and law.' },
    keyIdea: { text: 'Real or expected → idhā (+ fa- on a sa-, command or noun result). Imagined → law (+ la- on the result).', ar: '{k|إِذَا} دَرَسْتَ {k|فَسَتَنْجَحُ} ‖ {e|لَوْ} كُنْتُ غَنِيًّا {e|لَسَافَرْتُ}' },
    retrieves: 'The website Entry Check (questions 1, 3, 4, 5 and 6) — the GM-V-08 prep words idhā, law, fa- and najaḥa.',
  },
  objectives: ['Use idhā for real and repeated conditions.', 'Use law for imagined conditions.', 'Build a future, command or noun result with fa-.', 'Mark a law result with la-.'],
  routes: {
    core: ['I say if I am tired, I rest with idhā.', 'I give advice: if you need help, ask me.'],
    develop: ['I say if I were rich, I would … with law.', 'I add la- to the law result.'],
    stretch: ['I reflect on the past: if we had left early …', 'I use the speaking ladder: fact, idhā, law.'],
  },
  terms: {
    items: [
      { ar: 'الشَّرْطُ', en: 'condition', note: 'إِذَا دَرَسْتَ' },
      { ar: 'جَوَابُ الشَّرْطِ', en: 'result clause', note: 'فَسَتَنْجَحُ' },
      { ar: 'إِذَا', en: 'if / when (real)', note: 'إِذَا تَعِبْتُ أَسْتَرِيحُ' },
      { ar: 'لَوْ', en: 'if (imagined)', note: 'لَوْ كُنْتُ طَائِرًا' },
      { ar: 'فَـ', en: 'then (links the result)', note: 'فَاسْأَلْنِي' },
      { ar: 'لَـ', en: 'would (result of law)', note: 'لَسَافَرْتُ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · idhā and law: real versus imagined (website table)', title: 'Real or imagined?', ar: 'إِذَا وَلَوْ', ltr: true,
      cols: [{ label: 'Connector', w: 2.2, size: 26 }, { label: 'Core meaning', w: 3.6 }, { label: 'Model', w: 4.4, size: 22 }, { label: 'Use', w: 2.13 }],
      rows: [
        { core: true, cells: ['إِذَا', 'if / when — real, expected or repeated', 'إِذَا دَرَسْتَ فَسَتَنْجَحُ.', 'advice, routines'] },
        { cells: ['لَوْ', 'if — imagined, unlikely, contrary to fact', 'لَوْ كَانَ عِنْدِي وَقْتٌ لَسَافَرْتُ.', 'dreams, regrets'] },
        { cells: ['إِنْ', 'if — formal (Stretch)', 'إِنْ تَدْرُسْ تَنْجَحْ.', 'formal texts'] },
      ],
      foot: 'Website: idhā presents the condition as realistic or expected; law opens an imagined alternative. In- takes the jussive in both parts (Stretch).',
      notes: 'PART 1 (3 min) — website “idhā and law”. Ask: is it going to happen, or am I dreaming?',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 2 · functional patterns with idhā (website)', title: 'Four reliable idhā frames', ar: 'أَنْمَاطُ «إِذَا»', ltr: true,
      cols: [{ label: 'Pattern', w: 3.0 }, { label: 'Arabic (website)', w: 5.6, size: 22 }, { label: 'English', w: 3.73 }],
      rows: [
        { core: true, cells: ['A · future result', 'إِذَا وَصَلْتَ فَسَأَتَّصِلُ بِكَ.', 'When you arrive, I will call you.'] },
        { core: true, cells: ['B · habit result', 'إِذَا شَعَرْتُ بِالتَّعَبِ، أَنَامُ مُبَكِّرًا.', 'If I feel tired, I sleep early.'] },
        { core: true, cells: ['C · command result', 'إِذَا احْتَجْتَ إِلَى مُسَاعَدَةٍ، فَاسْأَلْنِي.', 'If you need help, ask me.'] },
        { cells: ['D · noun result', 'إِذَا كَانَ الْجَوُّ جَمِيلًا، فَالرِّحْلَةُ مُمْتِعَةٌ.', 'If the weather is nice, the trip is fun.'] },
      ],
      foot: 'Website warning: after idhā the verb is usually PAST in form even for the future — idhā waṣalta = when you arrive. Results with sa-, a command or a noun take fa-.',
      notes: 'PART 2 (4 min) — website “Functional patterns with idhā” (fa- restored in pattern A; see file note).',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · hypotheses with law (website table) · Develop / Stretch', title: 'Dreams, wishes and regrets', ar: 'الِافْتِرَاضُ بِـ «لَوْ»', ltr: true,
      cols: [{ label: 'Frame', w: 3.0 }, { label: 'Model (website)', w: 5.6, size: 22 }, { label: 'Meaning', w: 3.73 }],
      rows: [
        { core: true, cells: ['law + kāna', 'لَوْ كَانَ عِنْدِي مَالٌ لَاشْتَرَيْتُ سَيَّارَةً.', 'If I had money, I would buy a car.'] },
        { core: true, cells: ['law + kuntu', 'لَوْ كُنْتُ مُدِيرًا لَغَيَّرْتُ الْقَوَاعِدَ.', 'If I were a manager, I would change the rules.'] },
        { cells: ['law + past event', 'لَوْ دَرَسْتُ أَكْثَرَ لَنَجَحْتُ.', 'If I had studied more, I would have passed.'] },
        { cells: ['negative result', 'لَوْ خَرَجْنَا مُبَكِّرًا لَمَا تَأَخَّرْنَا.', 'If we had left early, we wouldn’t have been late.'] },
        { cells: ['speaking ladder', 'أُحِبُّ السَّفَرَ. إِذَا سَافَرْتُ فَسَأَزُورُ الْمَغْرِبَ.', 'fact → likely condition → law'] },
      ],
      foot: 'Website: the la- on la-sāfartu, la-shtaraytu is the common signal of a law result; la-mā makes it negative.',
      notes: 'PART 3 (3 min) — website “Hypotheses with law” and “Conditionals extend answers”. Ladder ends: wa-law kāna ʿindī waqtun aṭwalu la-zurtu bilādan ukhrā.',
    },
  ],
  quick: [
    W(/Meaning Check/, 0, { prompt: 'Which shows an expected weather result?', feedback: 'A possible future condition: idhā.' }),
    W(/Meaning Check/, 1, { prompt: 'Which shows an imagined ability?', feedback: 'Hypothetical: law.' }),
    W(/Meaning Check/, 3, { prompt: 'Which connector is more hypothetical?', feedback: 'Law.' }),
    W(/إِذَا Pattern/, 0, { prompt: 'Best “When you arrive, call me.”', feedback: 'Past-form condition + command result with fa-.' }),
  ],
  quickNote: 'website Conditional Meaning and idhā Pattern checks.',
  ido: {
    title: 'Watch me give advice — then imagine',
    steps: [
      { head: 'Condition', ar: 'إِذَا نَظَّمْتَ وَقْتَكَ', think: 'Real → idhā + past form.' },
      { head: 'Result', ar: 'فَسَتُكْمِلُ', think: 'sa- result → fa-.' },
      { head: 'Imagined', ar: 'لَوْ كَانَ عِنْدِي', think: 'Not real → law.' },
      { head: 'Result', ar: 'لَخَصَّصْتُهُ', think: 'law result → la-.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'IDHĀ (REAL)', e: 'LAW (IMAGINED)' },
    model: '{k|إِذَا نَظَّمْتَ} وَقْتَكَ، {k|فَسَتُكْمِلُ} وَاجِبَاتِكَ بِسُهُولَةٍ. وَ{k|إِذَا شَعَرْتَ} بِالتَّعَبِ، {k|فَاسْتَرِحْ} قَلِيلًا. وَ{e|لَوْ كَانَ} عِنْدِي يَوْمٌ إِضَافِيٌّ، {e|لَخَصَّصْتُهُ} لِلْمُرَاجَعَةِ.',
    modelEn: 'If you organise your time, you will finish your homework easily. And if you feel tired, rest a little. And if I had an extra day, I would devote it to revision.',
    notes: 'Website model (fa- restored on fa-sa-tukmilu).',
  },
  models: [
    { ar: 'إِذَا أَمْطَرَتْ فَسَنَبْقَى فِي الْبَيْتِ.', en: 'If it rains, we will stay at home.', tip: 'Likely future.' },
    { ar: 'إِذَا جُعْتُ آكُلُ.', en: 'When I get hungry, I eat.', tip: 'Routine.' },
    { ar: 'لَوْ كُنْتُ طَيَّارًا لَسَافَرْتُ كَثِيرًا.', en: 'If I were a pilot, I would travel a lot.', tip: 'Dream job.' },
    { ar: 'لَوْ دَرَسْتُ أَكْثَرَ لَنَجَحْتُ.', en: 'If I had studied more, I would have passed.', tip: 'Regret.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · match connector, condition and result (website game)', title: 'Idhā or law?', ar: 'إِذَا أَمْ لَوْ؟', ltr: true, stage: 'wedo',
      cols: [{ label: 'Sentence (cover the connector)', w: 6.0, size: 22 }, { label: 'Connector', w: 2.4, size: 26 }, { label: 'Why', w: 3.93 }],
      rows: [
        { core: true, cells: ['… دَرَسْتَ فَسَتَنْجَحُ.', 'إِذَا', 'likely result'] },
        { core: true, cells: ['… كُنْتُ طَائِرًا لَطِرْتُ.', 'لَوْ', 'impossible + la-'] },
        { core: true, cells: ['… وَصَلْتَ فَاتَّصِلْ بِي.', 'إِذَا', 'expected + command'] },
        { cells: ['… كَانَ عِنْدِي وَقْتٌ لَقَرَأْتُ.', 'لَوْ', 'imagined + la-'] },
        { cells: ['… تَعِبْتُ أَسْتَرِيحُ.', 'إِذَا', 'routine'] },
        { cells: ['… دَرَسْتُ أَكْثَرَ لَنَجَحْتُ.', 'لَوْ', 'regret'] },
      ],
      foot: 'Website game: the result tells you — la- points to law; fa-sa-, a command or a habit point to idhā.',
      notes: 'WE DO (3 min) — website game items. Cover column 2.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · real or imagined?', title: 'Expected, or just imagined?', ar: 'وَاقِعِيٌّ أَمْ خَيَالِيٌّ؟',
      categories: ['Real / expected', 'Imagined'],
      items: [['إِذَا جُعْتُ آكُلُ', 0], ['إِذَا نَجَحْتُ فَسَأَحْتَفِلُ', 0], ['إِذَا أَرَدْتَ فَاسْأَلْ', 0], ['إِذَا أَمْطَرَتْ فَسَنَبْقَى', 0], ['لَوْ كُنْتُ طَبِيبًا لَسَاعَدْتُ', 1], ['لَوْ كَانَ عِنْدِي مَالٌ لَاشْتَرَيْتُ', 1], ['لَوْ خَرَجْنَا لَمَا تَأَخَّرْنَا', 1], ['لَوْ طِرْتُ لَزُرْتُ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Website listening idea: expected or imagined? Students type 1 or 2.',
    },
  ],
  mistakes: [
    { wrong: 'إِذَا سَوْفَ تَدْرُسُ، سَتَنْجَحُ', right: 'إِذَا دَرَسْتَ فَسَتَنْجَحُ', why: 'No future marker in the condition; use a past form (website clinic).' },
    { wrong: 'لَوْ شَعَرْتُ بِالْجُوعِ كُلَّ يَوْمٍ، لَأَكَلْتُ', right: 'إِذَا شَعَرْتُ بِالْجُوعِ آكُلُ', why: 'A routine relation uses idhā (website clinic).' },
    { wrong: 'لَوْ كُنْتُ غَنِيًّا، سَافَرْتُ', right: 'لَوْ كُنْتُ غَنِيًّا لَسَافَرْتُ', why: 'La- signals the imagined result (website clinic).' },
  ],
  hints: ['Future marker inside the condition?', 'Routine or imagined?', 'What signals a law result?'],
  practice: [
    W(/لَوْ Pattern/, 0, { prompt: 'Best “If I had time, I would read.”', feedback: 'Hypothetical possession: law kāna ʿindī.' }),
    W(/لَوْ Pattern/, 3, { prompt: 'Which expresses regret about the past?', feedback: 'Past unreal condition.' }),
    W(/Application/, 2, { prompt: 'Which gives the best advice?', feedback: 'Condition + command with fa-.' }),
    W(/Application/, 3, { prompt: 'Which is the best counterfactual reflection?', feedback: 'An imagined different past with la-mā.' }),
  ],
  practiceLabel: 'website law Pattern and Application checks',
  read: {
    title: 'Advice post: exam stress', label: 'website reading workshop (teacher-written post)',
    text: 'سُؤَالٌ مِنْ زَيْنَبَ: أَشْعُرُ بِالْقَلَقِ قَبْلَ الِامْتِحَانَاتِ. مَاذَا أَفْعَلُ؟ الْجَوَابُ: إِذَا شَعَرْتِ بِالْقَلَقِ، فَتَنَفَّسِي بِبُطْءٍ. إِذَا نِمْتِ مُبَكِّرًا، فَسَتَسْتَيْقِظِينَ نَشِيطَةً. وَإِذَا لَمْ تَفْهَمِي دَرْسًا، فَاسْأَلِي مُعَلِّمَتَكِ. أَنَا لَوْ كُنْتُ مَكَانَكِ لَصَنَعْتُ جَدْوَلًا لِلْمُرَاجَعَةِ. وَلَوْ بَدَأْتُ الْمُرَاجَعَةَ مُبَكِّرًا فِي سَنَتِي الْأُولَى، لَمَا شَعَرْتُ بِالضَّغْطِ!',
    glossary: [['الْقَلَقِ', 'worry'], ['تَنَفَّسِي', 'breathe (f.)'], ['بِبُطْءٍ', 'slowly'], ['مَكَانَكِ', 'in your place'], ['جَدْوَلًا', 'a timetable'], ['الضَّغْطِ', 'pressure']],
    task: 'Website: distinguish likely conditions from imagined alternatives, and identify the result in each sentence.',
    questions: [
      q('What should Zaynab do if she feels worried?', ['breathe slowly', 'sleep early', 'ask her teacher'], 'Fa-tanaffasī bi-buṭʾ.'),
      q('Which sentence is imagined, not real?', ['لَوْ كُنْتُ مَكَانَكِ لَصَنَعْتُ جَدْوَلًا', 'إِذَا نِمْتِ مُبَكِّرًا فَسَتَسْتَيْقِظِينَ', 'إِذَا شَعَرْتِ بِالْقَلَقِ فَتَنَفَّسِي'], 'Law + la- result.'),
      q('What is the result of sleeping early?', ['waking up energetic', 'feeling worried', 'making a timetable'], 'Fa-sa-tastayqiẓīna nashīṭatan.'),
      q('What does the writer regret?', ['not starting revision early', 'sleeping early', 'asking a teacher'], 'Law badaʾtu … la-mā shaʿartu bi-ḍ-ḍaghṭ.'),
    ],
    qNote: 'Teacher-written advice post for the website reading workshop; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: the conditional ladder', source: 'website speaking workshop',
    prompts: [
      { route: 'core', ar: 'مَاذَا تَفْعَلُ إِذَا شَعَرْتَ بِالتَّعَبِ؟' },
      { route: 'develop', ar: 'مَاذَا سَتَفْعَلُ إِذَا نَجَحْتَ فِي الِامْتِحَانَاتِ؟' },
      { route: 'stretch', ar: 'مَاذَا تَفْعَلُ لَوْ كُنْتَ وَزِيرًا لِلْبِيئَةِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'إِذَا شَعَرْتُ بِالتَّعَبِ ______ .' },
      { route: 'develop', ar: 'إِذَا نَجَحْتُ ______ .' },
      { route: 'stretch', ar: 'لَوْ كُنْتُ وَزِيرًا ______ .' },
    ],
    model: [
      { who: 'A', ar: 'هَلْ تُحِبِّينَ السَّفَرَ؟', en: 'Do you like travelling? (to a girl)' },
      { who: 'B', ar: 'نَعَمْ، أُحِبُّ السَّفَرَ. إِذَا سَافَرْتُ فِي الصَّيْفِ فَسَأَزُورُ الْمَغْرِبَ. وَلَوْ كَانَ عِنْدِي وَقْتٌ أَطْوَلُ لَزُرْتُ بِلَادًا أُخْرَى.', en: 'Yes, I love travelling. If I travel in the summer, I will visit Morocco. And if I had longer, I would visit other countries.' },
    ],
    notes: 'Website speaking ladder: fact → idhā consequence → law extension. Listening (website): eight condition–result pairs — expected or imagined?',
  },
  write: {
    siteTask: 'Write 120–140 words giving advice about study, health or the environment. Include three realistic idhā conditions and two hypothetical law extensions.',
    core: { amount: '5 sentences', task: 'Health advice with idhā.', how: 'idhā + past form, then the result.' },
    develop: { amount: '7 sentences', task: 'Add a command result and one law sentence.', how: 'fa- before a command; la- after law.' },
    stretch: { amount: '120–140 words', task: 'Website advice task with a regret.', how: 'Future, command and noun results; law + kāna / kuntu.' },
  },
  frames: {
    core: [
      { en: 'If I feel tired, I …', ar: 'إِذَا شَعَرْتُ بِالتَّعَبِ ______ .' },
      { en: 'If you need help, ask …', ar: 'إِذَا احْتَجْتَ مُسَاعَدَةً فَاسْأَلْ ______ .' },
      { en: 'If it rains, we will …', ar: 'إِذَا أَمْطَرَتْ فَسَنَبْقَى ______ .' },
      { en: 'If you study, you will …', ar: 'إِذَا دَرَسْتَ فَسَتَنْجَحُ ______ .' },
    ],
    develop: [
      { en: 'If I had money, I would buy …', ar: 'لَوْ كَانَ عِنْدِي مَالٌ لَاشْتَرَيْتُ ______ .' },
      { en: 'If I were a teacher, I would …', ar: 'لَوْ كُنْتُ مُعَلِّمًا ______ .' },
      { en: 'If we plant trees, …', ar: 'إِذَا زَرَعْنَا أَشْجَارًا ______ .' },
      { en: 'If I had studied more, …', ar: 'لَوْ دَرَسْتُ أَكْثَرَ ______ .' },
    ],
    bank: ['إِذَا', 'لَوْ', 'فَاسْأَلْ', 'فَاسْتَرِحْ', 'لَسَافَرْتُ', 'لَاشْتَرَيْتُ', 'لَنَجَحْتُ', 'لَمَا تَأَخَّرْتُ', 'كَانَ عِنْدِي', 'كُنْتُ', 'سَيَتَحَسَّنُ'],
  },
  stretchTask: {
    task: 'Website integrated production task: 120–140 words of advice about study, health or the environment.',
    checklist: ['Three realistic idhā conditions.', 'A future result with fa-sa-.', 'A command result and a noun result with fa-.', 'Two law extensions with la-.', 'One law + kāna / kuntu frame.'],
    phrases: [['إِذَا أَرَدْتَ أَنْ', 'if you want to'], ['فَعَلَيْكَ أَنْ', 'then you must'], ['لَوْ كُنْتُ مَكَانَكَ', 'if I were you'], ['لَوْ كَانَ عِنْدِي', 'if I had'], ['لَمَا', 'would not (have)'], ['سَيَتَحَسَّنُ', 'will improve']],
  },
  model: {
    text: 'نَصَائِحُ لِحَيَاةٍ صِحِّيَّةٍ: إِذَا أَرَدْتَ أَنْ تَكُونَ نَشِيطًا، فَنَمْ ثَمَانِيَ سَاعَاتٍ كُلَّ لَيْلَةٍ. إِذَا شَرِبْتَ الْمَاءَ بِانْتِظَامٍ فَسَتَشْعُرُ بِالرَّاحَةِ. وَإِذَا مَشَيْتَ كُلَّ يَوْمٍ، فَالْفَائِدَةُ كَبِيرَةٌ لِقَلْبِكَ. أَنَا إِذَا تَعِبْتُ أَسْتَرِيحُ قَلِيلًا ثُمَّ أَرْجِعُ إِلَى الدِّرَاسَةِ. لَوْ كُنْتُ مُدِيرَ الْمَدْرَسَةِ لَوَضَعْتُ فَوَاكِهَ فِي كُلِّ صَفٍّ. وَلَوْ عَرَفْتُ هَذِهِ النَّصَائِحَ مِنْ قَبْلُ، لَمَا أَكَلْتُ الْحَلْوَى كُلَّ يَوْمٍ!',
    en: 'Advice for a healthy life: if you want to be active, sleep eight hours every night. If you drink water regularly, you will feel comfortable. And if you walk every day, the benefit to your heart is great. When I get tired, I rest a little and then go back to studying. If I were the head teacher, I would put fruit in every classroom. And if I had known this advice before, I would not have eaten sweets every day!',
    find: ['idhā + command', 'idhā + fa-sa-', 'noun result', 'law + la-'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'I used idhā for real or repeated conditions.' },
    { route: 'core', text: 'My verb after idhā is a past form.' },
    { route: 'develop', text: 'I added fa- before sa-, a command or a noun result.' },
    { route: 'develop', text: 'My law results start with la-.' },
    { route: 'stretch', text: 'I wrote a regret with law … la-mā.' },
  ],
  exit: [
    W(/Conditional Mastery/, 2, { prompt: 'Best “When you arrive, call me.”', feedback: 'Expected condition + command.' }),
    W(/Conditional Mastery/, 4, { prompt: 'Best “If I were a doctor …”', feedback: 'Hypothetical identity: law kuntu.' }),
    W(/Conditional Mastery/, 8, { prompt: 'Which is counterfactual (unreal past)?', feedback: 'Law + past + la- result.' }),
  ],
  mastery: false,
  prep: {
    words: [['أَنْ', 'to (+ subjunctive)', 'أُرِيدُ أَنْ أَدْرُسَ'], ['لِـ / لِكَيْ', 'in order to', 'لِأَتَعَلَّمَ'], ['أَرَادَ', 'to want', 'أُرِيدُ'], ['يَجِبُ', 'must / it is necessary', 'يَجِبُ أَنْ'], ['حَتَّى', 'so that / until', 'حَتَّى أَنْجَحَ']],
    questionEn: 'You know lan aktuba (fatḥa). After an (“to”) the same thing happens. How would you say “I want to write”?',
    questionAr: 'أُرِيدُ ______ .',
    homework: {
      core: 'Write five idhā sentences about your routine.',
      develop: 'Write three law sentences about your dream job.',
      stretch: 'Website advice task with a regret.',
    },
    wordsSource: 'The five words prepare GM-V-10 (website Verbs lesson 10: the subjunctive).',
  },
  remember: 'Remember: idhā = real / expected / repeated (+ past form) · fa- before a sa-, command or noun result · law = imagined, and its result starts with la-.',
});

module.exports = { meta, slides };
