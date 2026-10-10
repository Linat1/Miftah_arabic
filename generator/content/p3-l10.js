'use strict';
/* P3-L10 · Listening — Travel, Tourism and Transport Texts — website: Pathways › Progression › P3 › P3-L10 (listening-skills lesson: the result marker
 * سَـ / لَـ decides the conditional type, reported speech decoded by its verb, the past perfect كَانَ قَدْ and the booking verbs يَحْجِزُ / يُقِيمُ by ear, the
 * speaker’s own view vs a cited one, and the general-answer distractor). The website listening (a holiday in Morocco) is split into two short listens.
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading (strategy guide), speaking, writing, live builder and mission used as published,
 * with waṣl alif shown without a kasra; rule examples shown without English glosses; two listening questions added (where the traveller stayed · what
 * impressed them most). The website has no separate P3-L10 visual game (it repeats the P3-L04 cards), so none is used. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P3')({
  n: 10, fileTitle: 'Listening_Travel_Tourism_and_Transport_Texts', chip: 'Listening Skills',
  title: 'Listening — Travel, Tourism and Transport Texts', arabic: 'الاسْتِمَاعُ — نُصُوصُ السَّفَرِ وَالسِّيَاحَةِ وَالنَّقْلِ',
  focus: 'Listen like an examiner: let the result marker decide the conditional (sa- = real · la- = unreal), decode qāla … inna, catch kāna qad and the booking verbs yaḥjiz / yuqīm, keep the speaker’s view apart from a cited one, and reject the general distractor.',
  icon: 'FaHeadphones', iconSet: 'fa6',
});

const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const site = D.waslFix(D.site('P3-L10'));
const RH = [['Type by result marker', 'sa- (real) · la- (hypothetical)'], ['Decode reported speech', 'verb + inna / anna + content'], ['Past perfect and booking verbs', 'kāna qad · yaḥjiz · yuqīm'], ['Own view vs cited view', 'arā anna vs ashāra … ilā anna']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1], examples: r.examples.flatMap((e) => e.split(' vs ').map((x) => x.replace(/ → .*$/, '').replace(/ \((own|cited)\)$/, ''))) }));
const S = site.listening.script;
const cut = S.indexOf('إِذَا زُرْتُ');
const T1 = S.slice(0, cut).trim();
const T2 = S.slice(cut).trim();
const LB = site.live_builder.groups;

const slides = D.devLesson('P3-L10', {
  support: `• LISTENING-SKILLS LESSON (IGCSE Paper 1 style): the website script is read in TWO short parts, each with its own questions, read-along and answers. Read it yourself at natural speed — kuntu qad and the la- of the result are fast.
• Before each listen, students label every question C / R / P (conditional · reported · past perfect) and write the signal they expect (سَـ / لَـ · قَالَ · كَانَ قَدْ).
• Core: annotate five questions with the result marker to listen for (website Core). Develop: say which structure each targets. Stretch: explain how the result marker changed the meaning of one answer.
• Grammar links: Type 1 / Type 2 (P3-L05) · reading conditionals for attitude (P3-L08) · qāla inna (P3-L06) · yaḥjiz / yuqīm (P3-L02) · the P2 listening routine (P2-L10).`,
  teach: 'The result marker decides the type, reported speech, kāna qad and booking verbs, specific vs general answers.',
  wedo: 'Two short listens with read-along, then sort the result markers and build a listening report.',
  next: { nextCode: 'P3-L11', nextTitle: 'Consolidation — Speaking Preparation and Grammar Mastery', nextAr: 'تَرْسِيخُ الوَحْدَةِ — إِعْدَادُ التَّحَدُّثِ' },
  objectives: ['Predict which structure each question targets before listening.', 'Decide a conditional’s type from its result marker (sa- / la-).', 'Catch reported speech, kāna qad and the booking verbs by ear.', 'Reject the general answer when the question wants a specific one.'],
  rulesAr: 'سَمَاعُ الشَّرْطِ وَالنَّقْلِ فِي الكَلَامِ السَّرِيعِ',
  ruleEx: [['إِذَا زُرْتُهَا، سَأُخَصِّصُ أُسْبُوعًا', 'لَوْ خَطَّطْتُ، لَحَجَزْتُ فُنْدُقًا'], ['قَالَ الدَّلِيلُ إِنَّ الرَّبِيعَ أَفْضَلُ مَوْسِمٍ'], ['كُنْتُ قَدْ حَجَزْتُ الفُنْدُقَ', 'سَأُقِيمُ فِي رِيَاضٍ تَقْلِيدِيٍّ'], ['أَرَى أَنَّ …', 'أَشَارَ الخَبِيرُ إِلَى أَنَّ …']],
  doNow: {
    questions: [
      q('What does التَّمْيِيزُ الصَّوْتِيُّ mean?', ['auditory distinction', 'a loud voice', 'a sound system'], 'Prepared at home (P3-L09).'),
      q('What does الفِعْلُ التَّالِي mean?', ['the following verb', 'the past verb', 'the main verb'], 'Prepared at home (P3-L09).'),
      q('What does التَّشْكِيكُ mean?', ['doubt', 'certainty', 'distinction'], 'Prepared at home (P3-L09).'),
      q('Which pair earns two Range marks?', ['إِذَا زُرْتَ فَاسَ سَتَنْبَهِرُ؛ وَلَوْ بَقِيتُ أَطْوَلَ لَرَأَيْتُ المَزِيدَ.', 'إِذَا زُرْتَ فَاسَ سَتَنْبَهِرُ؛ وَإِذَا بَقِيتَ أَطْوَلَ سَتَرَى المَزِيدَ.', 'لَوْ زُرْتُ فَاسَ لَانْبَهَرْتُ؛ وَلَوْ بَقِيتُ أَطْوَلَ لَرَأَيْتُ المَزِيدَ.'], 'P3-L09: one idhā AND one law.'),
      q('Complete: قَالَ الدَّلِيلُ ___ الرَّبِيعَ أَفْضَلُ مَوْسِمٍ.', ['إِنَّ', 'أَنَّ', 'بِأَنَّ'], 'P3-L06 / L09: qāla takes inna.'),
    ],
    keyIdea: { text: 'Both idhā and law take a past verb — so listen to the END: sa- = real, la- = unreal.', ar: 'إِذَا زُرْتُ … {k|سَـ}أُخَصِّصُ · لَوْ خَطَّطْتُ … {p|لَـ}حَجَزْتُ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P3-L09. Questions 4–5 retrieve both conditional types and qāla inna (P3-L09) — today students catch them by ear at natural speed.',
  },
  routes: {
    core: ['I can write the result marker each question needs.', 'I can hear sa- (real) and la- (unreal).'],
    develop: ['I can catch qāla … inna and kāna qad.', 'I can hear yaḥjiz / yuqīm in any tense.'],
    stretch: ['I can tell the speaker’s view from a cited one.', 'I can reject the general distractor.'],
  },
  bridge: [
    { ar: 'شَكٌّ · تَشْكِيكٌ', urdu: 'شک', tr: 'shak', en: 'doubt' },
    { ar: 'وَسِيلَةٌ', urdu: 'وسیلہ', tr: 'wasīla', en: 'a means (وَسِيلَةُ نَقْلٍ = transport)' },
    { ar: 'سَفَرٌ · مُسَافِرٌ', urdu: 'سفر · مسافر', tr: 'safar · musāfir', en: 'travel · a traveller' },
    { ar: 'مَوْسِمٌ', urdu: 'موسم', tr: 'mausam', en: 'Arabic: a season · Urdu: the weather' },
    { ar: 'تَمْيِيزٌ', urdu: 'تمیز', tr: 'tamīz', en: 'false friend! Urdu = manners' },
  ],
  bridgeNotes: 'URDU BRIDGE: شک، وسیلہ، سفر and مسافر are shared. Two traps: Urdu موسم = the weather, but Arabic مَوْسِمٌ = a season (the weather = الطَّقْسُ); Urdu تمیز = good manners, but Arabic تَمْيِيزٌ = telling things apart — today’s skill.',
  core: ['التَّمْيِيزُ الصَّوْتِيُّ', 'الفِعْلُ التَّالِي', 'شَرْطٌ حَقِيقِيٌّ', 'شَرْطٌ افْتِرَاضِيٌّ', 'الجَزْمُ', 'التَّشْكِيكُ', 'أَفْضَلُ مَوْسِمٍ', 'وَسِيلَةُ نَقْلٍ', 'عَادَةٌ ثَقَافِيَّةٌ', 'تَوْصِيَةٌ', 'قَالَ إِنَّ', 'كَانَ قَدْ'],
  forms: {
    'رِحْلَةٌ سِيَاحِيَّةٌ': sp('رِحْلَاتٌ سِيَاحِيَّةٌ'), 'دَلِيلٌ سِيَاحِيٌّ': sp('أَدِلَّاءُ سِيَاحِيُّونَ'), 'وَسِيلَةُ نَقْلٍ': sp('وَسَائِلُ نَقْلٍ'), 'عَادَةٌ ثَقَافِيَّةٌ': sp('عَادَاتٌ ثَقَافِيَّةٌ'),
    'بُنْيَةٌ تَحْتِيَّةٌ': sp('بُنًى تَحْتِيَّةٌ'), 'تَوْصِيَةٌ': sp('تَوْصِيَاتٌ'),
    'يَحْجِزُ': ihs('أَحْجِزُ', 'تَحْجِزُ'), 'يُقِيمُ': ihs('أُقِيمُ', 'تُقِيمُ'),
    'كَانَ قَدْ': { tag: 'he · she · I', forms: [{ l: 'I', ar: 'كُنْتُ قَدْ' }, { l: 'she', ar: 'كَانَتْ قَدْ' }] },
  },
  vocabNotes: {
    0: 'Listening for conditionals: إِذَا and لَوْ both take a past verb, so the FOLLOWING verb (الفِعْلُ التَّالِي) is not enough — wait for the result. Careful: in grammar الجَزْمُ also means the jussive mood (لَمْ يَذْهَبْ); here the website uses it for “certainty”.',
    1: 'Travel content you will hear: a trip, a guide, the best season, transport, a custom, visitor numbers, infrastructure, a recommendation.',
    2: 'Grammar markers by ear: each one is short and fast — قَالَ إِنَّ · كَانَ قَدْ · سَـ · لَـ. The booking verbs change shape: أَحْجِزُ / حَجَزْتُ / سَأَحْجِزُ · أُقِيمُ / أَقَمْتُ / سَأُقِيمُ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the result marker decides (website rule 1 + teaching point 1 + table) · Core', title: 'Wait for the result', ar: 'عَلَامَةُ الجَوَابِ تُحَدِّدُ النَّوْعَ',
      cols: [{ label: 'You hear', w: 7.2, size: 19 }, { label: 'Result marker', w: 2.3 }, { label: 'So it is …', w: 2.83 }],
      rows: [
        { core: true, cells: ['إِذَا زُرْتُ المَغْرِبَ ثَانِيَةً، {k|سَأُخَصِّصُ} أُسْبُوعًا لِفَاسَ.', 'sa-', 'a real plan'] },
        { core: true, cells: ['لَوْ كُنْتُ قَدْ خَطَّطْتُ مُسْبَقًا، {p|لَحَجَزْتُ} فُنْدُقًا كِلَاسِيكِيًّا.', 'la-', 'a regret (unreal)'] },
        { cells: ['إِذَا وَصَلْتَ صَبَاحًا، {k|سَتَتَجَنَّبُ} الزِّحَامَ.', 'sa-', 'real advice'] },
        { cells: ['لَوْ بَقِيتُ لَيْلَةً إِضَافِيَّةً، {p|لَرَأَيْتُ} المَزِيدَ.', 'la-', 'a regret (unreal)'] },
        { cells: ['لَوْ عَرَفْتُ العَادَاتِ، {p|لَمَا} أَخْطَأْتُ.', 'lamā', 'unreal (negative)'] },
      ],
      ltr: true,
      foot: 'Website common error: deciding the type from the particle alone. Both take a past verb — the END decides.',
      notes: `GRAMMAR PART 1 — website rule “Type by result marker”, teaching point 1, the website table and the sorter. Rows 1–4 are from the website listening, sorter and live builder; row 5 adds the negative result لَمَا (P3-L03).
Ear tip: la- is ONE short syllable stuck to a past verb (لَحَجَزْتُ · لَرَأَيْتُ); sa- is stuck to a present verb (سَأُخَصِّصُ). Two clues in one: the prefix AND the tense.
Careful with verbs that begin with la- anyway (لَعِبْتُ = I played) — check that a law came first.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · who is speaking? (website rules 2 and 4) · Core / Develop', title: 'Whose words are they?', ar: 'كَلَامُ مَنْ؟',
      cards: [
        { chip: 'CITED · CORE', color: '1D5FBF', head: 'قَالَ … إِنَّ', big: 'قَالَ الدَّلِيلُ إِنَّ أَفْضَلَ مَوْسِمٍ لِلزِّيَارَةِ هُوَ الرَّبِيعُ.', en: 'The guide said that the best season to visit is spring.', clue: 'The guide’s view.' },
        { chip: 'CITED · DEVELOP', color: 'C77700', head: 'أَشَارَ … إِلَى أَنَّ', big: 'أَشَارَ الخَبِيرُ إِلَى أَنَّ الرَّبِيعَ أَفْضَلُ.', en: 'The expert pointed out that spring is best.', clue: 'ilā before anna.' },
        { chip: 'OWN VIEW · DEVELOP', color: '1E6B52', head: 'أَرَى أَنَّ · أَنْصَحُ', big: 'أَنْصَحُ كُلَّ مُسَافِرٍ بِاحْتِرَامِ العَادَاتِ المَحَلِّيَّةِ.', en: 'I advise every traveller to respect local customs.', clue: 'The speaker’s view.' },
      ],
      error: { text: 'Website mistake 3: ashāra is fixed with ilā before anna.', pairs: [['أَشَارَ الدَّلِيلُ إِلَى أَنَّ الرَّبِيعَ أَفْضَلُ', 'أَشَارَ الدَّلِيلُ أَنَّ الرَّبِيعَ أَفْضَلُ']] },
      notes: `GRAMMAR PART 2 — website rules “Decode reported speech” and “Own view vs cited view”, and mistakes 2–3.
Website mistake 2: «قَالَ الدَّلِيلُ إِنَّ …» رَأْيُ المُتَحَدِّثِ نَفْسِهِ ✗ → يَنْقُلُ رَأْيَ الدَّلِيلِ.
Card 3 is from the website listening (the speaker’s own advice, in the first person). Exam habit: when a question asks what the SPEAKER thinks, look for أَنَا-forms (أَرَى · أَنْصَحُ · أَعْجَبَنِي), not قَالَ.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · the past perfect and the booking verbs by ear (website rule 3 + listening) · Develop', title: 'When did it happen?', ar: 'مَتَى حَدَثَ؟',
      cols: [{ label: 'You hear', w: 5.6, size: 20 }, { label: 'Verb', w: 2.0 }, { label: 'Time', w: 2.4 }, { label: 'Clue', w: 2.33 }],
      rows: [
        { core: true, cells: ['{e|كُنْتُ قَدْ حَجَزْتُ} رِحْلَتِي قَبْلَ شَهْرَيْنِ', 'yaḥjiz', 'before the trip', 'kuntu qad'] },
        { cells: ['{e|وَكُنْتُ قَدْ قَرَأْتُ} عَنْ فَاسَ كَثِيرًا', 'yaqraʾ', 'before the trip', 'kuntu qad'] },
        { core: true, cells: ['{m|أَقَمْتُ} فِي رِيَاضٍ تَقْلِيدِيٍّ', 'yuqīm', 'during the trip', 'past (-tu)'] },
        { cells: ['{k|سَأُقِيمُ} فِي رِيَاضٍ تَقْلِيدِيٍّ', 'yuqīm', 'next time', 'sa- + present'] },
        { cells: ['{k|سَأَحْجِزُ} رِحْلَةً مُبَاشِرَةً', 'yaḥjiz', 'next time', 'sa- + present'] },
      ],
      ltr: true,
      foot: 'yuqīm is hollow: present أُقِيمُ (long ī) but past أَقَمْتُ (short a) — the vowel changes, so listen for the root q-m.',
      notes: `GRAMMAR PART 3 — website rule “Past perfect and 2028 verbs” (the website’s name for the booking verbs يَحْجِزُ / يُقِيمُ) and the listening.
Row 1–2: kuntu qad is spoken fast as one unit — “kuntu-qad-ḥajaztu”. Row 3: أَقَمْتُ comes from أَقَامَ — the long ī of أُقِيمُ disappears in the past.
Drill: say each row at full speed; students hold up 1 (before), 2 (during), 3 (next time).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the general distractor (website reading + listening) · Stretch', title: 'Specific beats general', ar: 'الإِجَابَةُ العَامَّةُ مُشَتِّتٌ',
      cols: [{ label: 'Question', w: 3.0 }, { label: 'Specific (correct)', w: 4.8, size: 18 }, { label: 'General (distractor)', w: 4.53 }],
      rows: [
        { core: true, cells: ['Where did they stay?', 'فِي {m|رِيَاضٍ تَقْلِيدِيٍّ} فِي المَدِينَةِ القَدِيمَةِ', 'in a hotel in Morocco'] },
        { core: true, cells: ['Which transport?', '{m|القِطَارُ السَّرِيعُ} الَّذِي يَصِلُ بَيْنَ المُدُنِ الكُبْرَى', 'public transport'] },
        { cells: ['The plan for next time?', 'سَأُخَصِّصُ {m|أُسْبُوعًا كَامِلًا لِفَاسَ}', 'visit Morocco again'] },
        { cells: ['What impressed them most?', '{m|كَرَمُ النَّاسِ}', 'Morocco is beautiful'] },
      ],
      ltr: true,
      foot: 'Website reading: الإِجَابَةُ العَامَّةُ كَثِيرًا مَا تَكُونُ مُشَتِّتًا — the general answer is often a distractor.',
      notes: `GRAMMAR PART 4 — the website reading (strategy guide) ends: «وَتَذَكَّرْ أَنَّ الإِجَابَةَ العَامَّةَ كَثِيرًا مَا تَكُونُ مُشَتِّتًا». The examples are from the website listening.
The distractors are not false — they are too vague to score. Train students to ask: “Does my answer contain the DETAIL the speaker gave?”
يَصِلُ بَيْنَ = links (the train links the major cities).`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me label, predict, listen',
    steps: [
      { head: 'Label', ar: 'C · R · P', think: 'What does it ask?' },
      { head: 'Before?', ar: '{e|كُنْتُ-قَدْ-حَجَزْتُ}', think: 'One fast unit.' },
      { head: 'Whose?', ar: '{m|قَالَ} الدَّلِيلُ {m|إِنَّ} …', think: 'The guide’s.' },
      { head: 'Real?', ar: '… {k|سَـ}أُخَصِّصُ · … {p|لَـ}حَجَزْتُ', think: 'Wait for the end.' },
    ],
    legend: ['e', 'm', 'k', 'p'], legendLabels: { e: 'PAST PERFECT', m: 'REPORTED', k: 'REAL · SA-', p: 'UNREAL · LA-' },
    model: 'يَقُولُ المُسَافِرُ: {e|كُنْتُ قَدْ حَجَزْتُ} رِحْلَتِي إِلَى المَغْرِبِ قَبْلَ شَهْرَيْنِ. {m|قَالَ} الدَّلِيلُ {m|إِنَّ} أَفْضَلَ مَوْسِمٍ لِلزِّيَارَةِ هُوَ الرَّبِيعُ. إِذَا زُرْتُ المَغْرِبَ ثَانِيَةً، {k|سَأُخَصِّصُ} أُسْبُوعًا كَامِلًا لِفَاسَ. وَلَوْ كُنْتُ قَدْ خَطَّطْتُ مُسْبَقًا، {p|لَحَجَزْتُ} فُنْدُقًا كِلَاسِيكِيًّا.',
    modelEn: 'The traveller says: I had booked my trip to Morocco two months earlier. The guide said that the best season to visit is spring. If I visit Morocco again, I will devote a whole week to Fez. And had I planned ahead, I would have booked a classic hotel.',
    notes: 'I DO (3 min) — model the routine on listening questions 1–4 BEFORE the class hears the text. Label (P, R, C, C) → write the signals (كُنْتُ قَدْ · قَالَ · سَـ · لَـ) → read the four sentences aloud once → circle the sa- of سَأُخَصِّصُ and the la- of لَحَجَزْتُ. The copy box shows the transcript AFTER annotation.',
  },
  patternEn: ['if I visit Morocco again, I will devote a week to Fez', 'had I planned ahead, I would have booked a classic hotel', 'the guide said that the best season is spring'],
  listenParts: [
    {
      title: 'Part 1: before and during the trip', script: T1, q: [0, 1, 4], min: 3,
      extra: [L('Where did the traveller stay?', ['in a traditional riad in the old city', 'in a modern hotel by the sea', 'with a family in the countryside'], 'أَقَمْتُ فِي رِيَاضٍ تَقْلِيدِيٍّ فِي المَدِينَةِ القَدِيمَةِ.')],
      tip: 'Label first: P · R · detail · detail.\nListen for: kuntu qad · qāla … inna · aqamtu.',
      routes: 'Core: questions 1, 2 and 4. Develop/Stretch: all four — and give the SPECIFIC answer (the high-speed train, a traditional riad), not a general one.',
      gloss: [
        ['يَقُولُ المُسَافِرُ: كُنْتُ قَدْ حَجَزْتُ رِحْلَتِي إِلَى المَغْرِبِ قَبْلَ شَهْرَيْنِ، وَكُنْتُ قَدْ قَرَأْتُ عَنْ فَاسَ كَثِيرًا.', 'The traveller says: I had booked my trip to Morocco two months earlier, and I had read a lot about Fez.'],
        ['أَقَمْتُ فِي رِيَاضٍ تَقْلِيدِيٍّ فِي المَدِينَةِ القَدِيمَةِ. قَالَ الدَّلِيلُ إِنَّ أَفْضَلَ مَوْسِمٍ لِلزِّيَارَةِ هُوَ الرَّبِيعُ.', 'I stayed in a traditional riad in the old city. The guide said that the best season to visit is spring.'],
        ['اسْتَعْمَلْتُ القِطَارَ السَّرِيعَ الَّذِي يَصِلُ بَيْنَ المُدُنِ الكُبْرَى.', 'I used the high-speed train that links the major cities.'],
      ],
    },
    {
      title: 'Part 2: plans, a regret and advice', script: T2, q: [2, 3], min: 3,
      extra: [L('What impressed the traveller most?', ['the generosity of the people', 'the price of the hotels', 'the speed of the trains'], 'أَكْثَرُ مَا أَعْجَبَنِي كَانَ كَرَمُ النَّاسِ.')],
      tip: 'Label first: C · C · O.\nListen for: sa- · la- · aʿjabanī · anṣaḥu.',
      routes: 'Core: questions 1 and 2. Develop/Stretch: all three — question 3 asks for the SPEAKER’s own feeling (aʿjabanī), not a cited view.',
      gloss: [
        ['إِذَا زُرْتُ المَغْرِبَ ثَانِيَةً، سَأُخَصِّصُ أُسْبُوعًا كَامِلًا لِفَاسَ.', 'If I visit Morocco again, I will devote a whole week to Fez.'],
        ['وَلَوْ كُنْتُ قَدْ خَطَّطْتُ مُسْبَقًا، لَحَجَزْتُ فُنْدُقًا كِلَاسِيكِيًّا بَدَلَ الحَدِيثِ.', 'And had I planned ahead, I would have booked a classic hotel instead of the modern one.'],
        ['أَكْثَرُ مَا أَعْجَبَنِي كَانَ كَرَمُ النَّاسِ. وَأَنْصَحُ كُلَّ مُسَافِرٍ بِاحْتِرَامِ العَادَاتِ المَحَلِّيَّةِ.', 'What I liked most was the generosity of the people. And I advise every traveller to respect local customs.'],
      ],
    },
  ],
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 2, flex: true, eyebrow: 'We do · report what you heard (website live builder)', title: 'Plan + regret + past-perfect fact', ar: 'تَقْرِيرٌ عَمَّا سَمِعْتَ',
      cols: [{ label: '1 · Real plan (sa-)', w: 4.0, size: 16 }, { label: '2 · Regret (la-)', w: 4.2, size: 16 }, { label: '3 · Fact / report', w: 4.13, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Say it, then write three different versions.',
      notes: `WE DO (flex) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Use after the two listens: students retell the traveller’s story in the third person (إِنَّهُ كَانَ قَدْ حَجَزَ · سَيُخَصِّصُ · لَحَجَزَ) — the pronoun switch from P3-L06.`,
    },
  ],
  sorterTitle: 'A real result, a hypothetical result — or a report / past perfect?',
  sorterCats: ['real result (sa-)', 'hypothetical result (la-)', 'report / past perfect'],
  sorterNotes: 'Then say each card aloud at full speed and let a partner point to the right column by ear only (eyes closed).',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('سَـ result → real plan.', 'A sa- result → a real plan.').replace('لَـ result → counterfactual.', 'A la- result → a counterfactual.') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'the website listening is split into two short listens with two teacher-added questions (where the traveller stayed · what impressed them most); waṣl alif shown without a kasra; rule headings and formulas in English and transliteration (rule examples without their English glosses); sorter headings in transliteration; the result-marker, timing and distractor tables are teacher-built from the website listening and reading; no visual game (the website repeats the P3-L04 cards). All other website items are used as published.',
  hints: ['law → a real plan?', 'qāla l-dalīlu → whose view?', 'ashāra + anna?'],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا الشَّرْطُ الحَقِيقِيُّ الَّذِي سَمِعْتَهُ؟ وَبِأَيِّ عَلَامَةٍ عَرَفْتَهُ؟' },
      { route: 'develop', ar: 'مَا الشَّرْطُ الافْتِرَاضِيُّ؟ وَمَاذَا يَعْنِي؟' },
      { route: 'stretch', ar: 'مَا الكَلَامُ المَنْقُولُ الَّذِي سَمِعْتَهُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'سَمِعْتُ « ______ »، وَعَرَفْتُهُ مِنْ عَلَامَةِ «سَـ».' },
      { route: 'develop', ar: 'سَمِعْتُ « ______ »، وَعَلَامَةُ «لَـ» دَلَّتْ عَلَى الافْتِرَاضِ.' },
      { route: 'stretch', ar: 'قَالَ الدَّلِيلُ إِنَّ ______ ، وَهٰذَا رَأْيُ ______ .' },
    ],
    modelEn: ['What real conditional did you hear?', 'I heard “if I visit Morocco, I will devote a week”, and I knew it from the sa- marker.', 'And the hypothetical one?', 'I heard “had I planned, I would have booked”, and the la- marker showed it was hypothetical.'],
    notes: 'Website prompts and model. Students quote the exact words they heard, then name the marker. To a girl: سَمِعْتِهِ · عَرَفْتِهِ.',
  },
  write: {
    core: { amount: '5 questions', how: 'Website Core: annotate five questions with the result marker (sa- / la-) you will listen for.' },
    develop: { amount: '50–60 words', how: 'Website Develop: add whether each targets a conditional, a report or a past perfect.' },
    stretch: { amount: '80–90 words', how: 'Website task: explain your listening strategy — the result marker, reported speech, kāna qad and the general distractor.' },
  },
  frames: {
    core: [
      { en: 'Before listening, I read the questions and …', ar: 'قَبْلَ الاسْتِمَاعِ، أَقْرَأُ الأَسْئِلَةَ وَ ______ .' },
      { en: 'I do not rely on the particle alone, because …', ar: 'لَا أَعْتَمِدُ عَلَى الأَدَاةِ وَحْدَهَا، لِأَنَّ ______ .' },
      { en: 'sa- means … and la- means …', ar: '«سَـ» تَعْنِي ______ ، وَ«لَـ» تَعْنِي ______ .' },
      { en: 'kāna qad shows …', ar: 'تَدُلُّ «كَانَ قَدْ» عَلَى ______ .' },
    ],
    develop: [
      { en: 'I identify reported speech from …', ar: 'أُمَيِّزُ الكَلَامَ المَنْقُولَ مِنَ ______ .' },
      { en: 'It conveys the view of …', ar: 'يَنْقُلُ رَأْيَ ______ .' },
      { en: 'I reject the general answer because …', ar: 'أَرْفُضُ الإِجَابَةَ العَامَّةَ لِأَنَّهَا ______ .' },
      { en: 'The result marker changed the answer: …', ar: 'غَيَّرَتْ عَلَامَةُ الجَوَابِ الإِجَابَةَ: ______ .' },
    ],
    bank: ['أُحَدِّدُ نَوْعَ المَعْلُومَةِ', 'يَتْبَعُهُمَا فِعْلٌ مَاضٍ', 'شَرْطًا حَقِيقِيًّا', 'شَرْطًا افْتِرَاضِيًّا', 'الفِعْلِ النَّاقِلِ مَعَ «إِنَّ»', 'مَصْدَرٍ آخَرَ', 'إِنْجَازٍ سَابِقٍ', 'مُشَتِّتًا', 'عَلَامَةِ الجَوَابِ', 'رَأْيِ المُتَحَدِّثِ', 'التَّفْصِيلِ الدَّقِيقِ', 'عَامَّةٌ جِدًّا'],
  },
  stretch: [
    ['وَأُحَدِّدُ نَوْعَ المَعْلُومَةِ المَطْلُوبَةِ', 'and I identify the type of information required'],
    ['لِأَنَّ «إِذَا» وَ«لَوْ» يَتْبَعُهُمَا فِعْلٌ مَاضٍ', 'because idhā and law are both followed by a past verb'],
    ['لِذٰلِكَ أُصْغِي إِلَى عَلَامَةِ الجَوَابِ', 'so I listen carefully to the result marker'],
    ['بِوَصْفِهَا عَلَامَةَ إِنْجَازٍ سَابِقٍ', 'as the sign of an earlier achievement'],
    ['أَرْفُضُ الإِجَابَةَ العَامَّةَ', 'I reject the general answer'],
  ],
  modelEn: 'Before listening, I read the questions and identify the type of information required. With a conditional, I do not rely on the particle alone, because idhā and law are both followed by a past verb. So I listen carefully to the result marker: sa- means a real conditional, and la- means a hypothetical one. I identify reported speech from the reporting verb with inna, and I remember that it conveys the view of another source. I catch kāna qad as the sign of an earlier achievement. Finally, I reject the general answer, because it is often a distractor.',
  find: ['a prediction step', 'the result-marker rule (sa- / la-)', 'reported speech = another source', 'kāna qad + rejecting the general distractor'],
  modelNotes: 'Website writing model. Evidence: أَقْرَأُ الأَسْئِلَةَ وَأُحَدِّدُ … · لَا أَعْتَمِدُ عَلَى الأَدَاةِ وَحْدَهَا · أُصْغِي إِلَى عَلَامَةِ الجَوَابِ: «سَـ» … وَ«لَـ» … · الفِعْلِ النَّاقِلِ مَعَ «إِنَّ» … رَأْيَ مَصْدَرٍ آخَرَ · أَلْتَقِطُ «كَانَ قَدْ» · أَرْفُضُ الإِجَابَةَ العَامَّةَ.',
  selfCheck: [
    { route: 'core', text: 'I labelled every question and wrote the marker I expected.' },
    { route: 'core', text: 'I decided each conditional from its result (sa- / la-).' },
    { route: 'develop', text: 'I caught who said it (qāla … inna) and kāna qad.' },
    { route: 'develop', text: 'I heard yaḥjiz / yuqīm in the past, present and future.' },
    { route: 'stretch', text: 'I gave the specific detail, not the general distractor.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['الأَكَادِيمِيِّ', 'academic'], ['حَدِّدْ', 'identify'], ['المَطْلُوبَةِ', 'required'], ['لَا تَعْتَمِدْ عَلَى', 'do not rely on'], ['الأَدَاةِ', 'the particle'],
    ['يَتْبَعُهُمَا', 'follows them both'], ['المُؤَشِّرُ الأَوْثَقُ', 'the most reliable signal'], ['عَلَامَةُ الجَوَابِ', 'the result marker'], ['الإِنْجَازُ السَّابِقُ', 'the earlier achievement'], ['مُشَتِّتًا', 'a distractor'],
  ],
  prep: {
    words: [['لَامُ الجَوَابِ', 'the la- of the result', '—'], ['الفِعْلُ المَنْصُوبُ بَعْدَ أَنْ', 'the subjunctive after an', '—'], ['الطَّلَاقَةُ', 'fluency', '—'], ['لَعِبُ الأَدْوَارِ', 'a role play', '—'], ['اسْتِشَارَةُ وَكَالَةِ سَفَرٍ', 'a travel-agency consultation', '—']],
    questionEn: 'Prepare a 30-second answer: tell me about a trip — and one thing you would have done differently.',
    questionAr: 'زُرْتُ ______ ، وَلَوْ بَقِيتُ أَطْوَلَ لَرَأَيْتُ ______ .',
    homework: {
      core: 'Learn the 12 core words; annotate five listening questions with sa- or la-.',
      develop: 'A 50–60-word note on which structure each question targeted.',
      stretch: 'Website writing task: an 80–90-word explanation of your listening strategy.',
    },
    wordsSource: 'The five words come from the website P3-L11 vocabulary (error zones and speaking fluency).',
  },
  remember: 'Remember: idhā and law both take a past verb — wait for the result: sa- = real, la- / lamā = unreal — qāla … inna is someone else’s view — kāna qad is earlier — and the specific detail beats the general distractor.',
});

module.exports = { meta, slides };
