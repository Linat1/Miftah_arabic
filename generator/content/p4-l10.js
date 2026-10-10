'use strict';
/* P4-L10 · Listening — Built and Natural World Texts — website: Pathways › Progression › P4 › P4-L10 (listening-skills lesson: hear the TRIGGER, not
 * the reduced final fatḥa — لِكَيْ = purpose, يَخْشَى / يَرْجُو أَنْ = fear / hope, يَنْبَغِي / يَتَطَلَّبُ أَنْ = necessity; tell fear from hope; let the
 * result marker decide the conditional; catch the past perfect, disaster passives and statistic verbs). The website listening (an environmental expert on
 * water scarcity) is split into two short listens. Website vocabulary, rules, quiz, sorter, mistakes, listening, reading (strategy guide), speaking,
 * writing, live builder and mission used as published, with waṣl alif shown without a kasra, لِكَيْ always written with its sukūn, rule examples shown
 * without their English labels, one teacher-added listening question (the share of renewable water) and two fixes: أَرْكُزُ عَلَى → أُرَكِّزُ عَلَى (Form II
 * “focus”) and لَوْ اسْتَثْمَرْنَا → لَوِ اسْتَثْمَرْنَا. No visual game (the website card set is beginner-level). Sorter headings in transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P4')({
  n: 10, fileTitle: 'Listening_Built_and_Natural_World_Texts', chip: 'Listening Skills',
  title: 'Listening — Built and Natural World Texts', arabic: 'الاسْتِمَاعُ — نُصُوصُ العَالَمِ المَبْنِيِّ وَالطَّبِيعِيِّ',
  focus: 'Listen like an examiner: hear the trigger, not the reduced final -a — li-kay (purpose), yakhshā / yarjū an (fear / hope), yanbaghī / yataṭallabu an (necessity) — let the result marker decide the conditional, and catch kāna qad, disaster passives and statistic verbs.',
  icon: 'FaHeadphones', iconSet: 'fa6',
});

const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const sg = (s) => ({ tag: 'sg · pl', forms: [{ l: 'sg.', ar: s }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ').replace(/أَرْكُزُ عَلَى/g, 'أُرَكِّزُ عَلَى').replace(/لَوْ اسْتَثْمَرْنَا/g, 'لَوِ اسْتَثْمَرْنَا'));
const site = fix(D.site('P4-L10'));
const RH = [['Trigger predicts the clause', 'li-kay · yakhshā / yarjū an · yanbaghī / yataṭallabu an'], ['Fear vs hope', 'yakhshā (fear) · yarjū (hope)'], ['Conditional by result marker', 'sa- (real) · la- (hypothetical)'], ['Past perfect and passives', 'kāna qad · dummirat · uʿlinat']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1], examples: r.examples.map((e) => e.replace(/ → .*$/, '')) }));
const S = site.listening.script;
const cut = S.indexOf('إِذَا اعْتَمَدْنَا');
const T1 = S.slice(0, cut).trim();
const T2 = S.slice(cut).trim();
const LB = site.live_builder.groups;

const slides = D.devLesson('P4-L10', {
  support: `• LISTENING-SKILLS LESSON (IGCSE Paper 1 style): the website listening is played as two short listens, each twice. The grammar slides are a listening toolkit built on the trigger system of P4-L01 to P4-L09.
• Core: annotate five questions with the trigger you will listen for (website Core). Develop: add whether each targets purpose, volition or necessity. Stretch: explain how telling a fear from a hope changed one answer.
• The key message of the website: in fast speech the final -a is often swallowed — so listen for the TRIGGER (li-kay · an), which is always clear. The P4 listening target on the website is 14+ out of 20.
• Teacher note: here the website files يَتَطَلَّبُ under necessity (P4-L03 / L08 called it volition). For listening it does not matter — “the situation requires” = something must happen.
• Grammar links: the trigger system (P4-L01–L09) · result markers by ear (P3-L10) · disaster passives (P4-L05) · past perfect (P4-L07).`,
  teach: 'Trigger → clause type, fear vs hope, result marker → conditional type, past perfect / passives / statistics by ear, the strategy guide.',
  wedo: 'Two short listens, build a listening report, sort purpose / volition / necessity.',
  next: { nextCode: 'P4-L11', nextTitle: 'Consolidation — Speaking Preparation and Full Subjunctive Mastery', nextAr: 'تَرْسِيخُ الوَحْدَةِ — إِعْدَادُ التَّحَدُّثِ' },
  objectives: ['Predict which trigger each question targets before listening.', 'Tell purpose, volition and necessity apart by their trigger.', 'Tell a fear (yakhshā) from a hope (yarjū).', 'Decide real or hypothetical by the result marker (sa- / la-).'],
  rulesAr: 'سَمَاعُ مُسَبِّبَاتِ النَّصْبِ وَالشَّرْطِ',
  ruleEx: [['لِكَيْ نَحْمِيَ', 'يَنْبَغِي أَنْ نَسْتَثْمِرَ'], ['يَخْشَى أَنْ يَتَجَاوَزَ الاحْتِرَارُ حَدَّهُ', 'يَرْجُو أَنْ تُوَقِّعَ الدُّوَلُ الاتِّفَاقَ'], ['إِذَا اسْتَثْمَرْنَا، سَنُقَلِّلُ', 'لَوْ بَدَأْنَا مُبَكِّرًا، لَنَجَحْنَا'], ['كَانَتِ المَدِينَةُ قَدْ فَقَدَتْ حَدَائِقَهَا', 'دُمِّرَتِ المَبَانِي وَأُعْلِنَتْ حَالَةُ الطَّوَارِئِ']],
  doNow: {
    questions: [
      q('What does المُسَبِّبُ المَسْمُوعُ mean?', ['the audible trigger', 'the silent letter', 'the speaker’s name'], 'Prepared at home (P4-L09).'),
      q('What does الفَتْحَةُ المُخْتَزَلَةُ mean?', ['the reduced fatḥa', 'the long vowel', 'the final ḍamma'], 'Prepared at home (P4-L09).'),
      q('What does الاحْتِرَارُ العَالَمِيُّ mean?', ['global warming', 'world heritage', 'global trade'], 'Prepared at home (P4-L09).'),
      q('Complete: يَهْدِفُ المَشْرُوعُ ___ أَنْ يُقَلِّلَ الانْبِعَاثَاتِ.', ['إِلَى', 'فِي', 'عَلَى'], 'P4-L09: yahdifu ILĀ an.'),
      q('Complete: نَزْرَعُ الأَشْجَارَ لِكَيْ ___ الهَوَاءَ.', ['نُنَقِّيَ', 'نُنَقِّي', 'نَقَّيْنَا'], 'P4-L09: li-kay + -a (nunaqqiya).'),
    ],
    keyIdea: { text: 'In fast speech the final -a disappears — but the trigger never does. Hear the trigger and you know the clause.', ar: '{e|لِكَيْ} = غَرَضٌ · {m|يَخْشَى} / {w|يَرْجُو} أَنْ = مَوْقِفٌ · {k|يَنْبَغِي} أَنْ = ضَرُورَةٌ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P4-L09. Questions 4–5 retrieve writing the triggers (P4-L09) — today students hear them.',
  },
  routes: {
    core: ['I can hear li-kay and name it: purpose.', 'I can answer 4 questions from the two listens.'],
    develop: ['I can tell volition from necessity by the trigger.', 'I can tell a fear from a hope.'],
    stretch: ['I can decide real / hypothetical by sa- or la-.', 'I can reject the general distractor.'],
  },
  bridge: [
    { ar: 'خَوْفٌ', urdu: 'خوف', tr: 'khauf', en: 'fear' },
    { ar: 'تَوَقُّعٌ', urdu: 'توقع', tr: 'tawaqqo', en: 'an expectation, a prediction' },
    { ar: 'احْتِمَالٌ', urdu: 'احتمال', tr: 'ehtimāl', en: 'a possibility' },
    { ar: 'سَمَاعٌ', urdu: 'سماعت', tr: 'samāat', en: 'Arabic: hearing (listening) · Urdu: a court hearing' },
    { ar: 'حَرَكَةٌ', urdu: 'حرکت', tr: 'harkat', en: 'Arabic: a short vowel mark, movement · Urdu: movement' },
  ],
  bridgeNotes: 'URDU BRIDGE: خوف، توقع and احتمال are shared — today we PREDICT (نَتَوَقَّعُ) the clause from its trigger. Note two words: Urdu سماعت is a court hearing (Arabic سَمَاعٌ / اسْتِمَاعٌ = listening); and in Arabic grammar حَرَكَةٌ is a short vowel mark (fatḥa, ḍamma, kasra) — the reading says: رَكِّزْ عَلَى المُسَبِّبِ لَا عَلَى الحَرَكَةِ.',
  core: ['المُسَبِّبُ المَسْمُوعُ', 'لِكَيْ', 'يَخْشَى أَنْ', 'يَرْجُو أَنْ', 'يَتَطَلَّبُ أَنْ', 'يَنْبَغِي أَنْ', 'الفَتْحَةُ المُخْتَزَلَةُ', 'المَوْقِفُ', 'نُدْرَةُ المِيَاهِ', 'الاحْتِرَارُ العَالَمِيُّ', 'تَحْلِيَةُ المِيَاهِ', 'الانْبِعَاثَاتُ'],
  forms: {
    'يَخْشَى أَنْ': ihs('أَخْشَى أَنْ', 'تَخْشَى أَنْ'), 'يَرْجُو أَنْ': ihs('أَرْجُو أَنْ', 'تَرْجُو أَنْ'),
    'المَوْقِفُ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'المَوَاقِفُ' }] }, 'الانْبِعَاثَاتُ': sg('انْبِعَاثٌ'), 'المَوَارِدُ الطَّبِيعِيَّةُ': sg('مَوْرِدٌ طَبِيعِيٌّ'),
  },
  vocabNotes: {
    0: 'Listening for triggers: لِكَيْ has two clear syllables (li-kay) — easy to hear. أَنْ is short, so listen for the VERB before it: يَخْشَى (fear) · يَرْجُو (hope) · يَتَطَلَّبُ / يَنْبَغِي (requirement). الفَتْحَةُ المُخْتَزَلَةُ = the final -a that is swallowed in fast speech.',
    1: 'Built and natural content you will hear: the P4 topic words. Listen for them as the SUBJECT of the clause after the trigger: أَنْ يَتَجَاوَزَ الاحْتِرَارُ … · أَنْ تُخَصِّصَ الحُكُومَاتُ … .',
    2: 'Grammar markers by ear: a checklist for the two listens — triggers, result markers (سَ / لَ), كَانَ قَدْ, the disaster passives and the statistic verbs يُمَثِّلُ (represents) / يَبْلُغُ (amounts to).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the trigger predicts the clause (website rule 1, teaching point 1 and table) · Core', title: 'Hear the trigger, not the vowel', ar: 'اسْمَعِ المُسَبِّبَ',
      cols: [{ label: 'You hear', w: 2.4, size: 20 }, { label: 'It signals', w: 1.8 }, { label: 'Listen next for …', w: 2.1 }, { label: 'Example (website listening)', w: 6.03, size: 17 }],
      rows: [
        { core: true, cells: ['{e|لِكَيْ}', 'purpose', 'the reason', 'نَزْرَعُ مَحَاصِيلَ أَقَلَّ اسْتِهْلَاكًا لِلْمَاءِ {e|لِكَيْ} نُوَفِّرَ مَوَارِدَنَا.'] },
        { core: true, cells: ['{k|يَتَطَلَّبُ} … أَنْ', 'necessity', 'what must happen', '{k|يَتَطَلَّبُ} الوَضْعُ أَنْ تُخَصِّصَ الحُكُومَاتُ مِيزَانِيَّاتٍ أَكْبَرَ.'] },
        { core: true, cells: ['{m|يَخْشَى} أَنْ', 'fear', 'the danger', '{m|نَخْشَى} أَنْ يَتَجَاوَزَ الاحْتِرَارُ العَالَمِيُّ حُدُودَهُ الآمِنَةَ.'] },
        { cells: ['{w|يَرْجُو} أَنْ', 'hope', 'the wish', '{w|نَرْجُو} أَنْ تُوَقِّعَ الدُّوَلُ اتِّفَاقًا لِإِدَارَةِ الأَنْهَارِ.'] },
        { cells: ['{w|يَهْدِفُ} إِلَى أَنْ', 'aim', 'the plan', 'وَ{w|يَهْدِفُ} المَشْرُوعُ إِلَى أَنْ يُخَفِّضَ الاسْتِهْلَاكَ.'] },
      ],
      ltr: true,
      foot: 'Website mistake 3: trying to catch the final fatḥa ✗ → focusing on the trigger ✓. The trigger alone answers the question.',
      notes: `GRAMMAR PART 1 — website rule “Trigger predicts the clause”, teaching point 1 (“Hear the trigger, not the final vowel”), the website table and mistake 3. Rows 1–4 are from the website listening; row 5 from the live builder.
Practise by ear: read each example at natural speed and let students shout the job (purpose! necessity! fear! hope!) as soon as they hear the trigger — before the end of the sentence.
Website mistake 1: hearing يَنْبَغِي أَنْ and thinking “purpose” ✗ — purpose is only لِكَيْ (or li-).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · fear vs hope (website rule 2, teaching point 2 and mistake 2) · Core / Develop', title: 'Same grammar, opposite attitude', ar: 'الخَوْفُ أَمِ الأَمَلُ؟',
      cards: [
        { chip: 'FEAR · CORE', color: 'C0386B', head: 'يَخْشَى أَنْ', big: 'نَخْشَى أَنْ يَتَجَاوَزَ الاحْتِرَارُ العَالَمِيُّ حُدُودَهُ الآمِنَةَ.', en: 'We fear that global warming will exceed its safe limits.', clue: 'Negative attitude.' },
        { chip: 'HOPE · CORE', color: '1E6B52', head: 'يَرْجُو أَنْ', big: 'نَرْجُو أَنْ تُوَقِّعَ الدُّوَلُ اتِّفَاقًا لِإِدَارَةِ الأَنْهَارِ.', en: 'We hope that states will sign an agreement to manage the rivers.', clue: 'Positive attitude.' },
        { chip: 'HEAR IT · DEVELOP', color: '1D5FBF', head: 'yakh-shā · yar-jū', big: 'يَخْشَى ≠ يَرْجُو', en: 'kh + sh = fear · r + j = hope', clue: 'Both: an + verb in -a.' },
      ],
      error: { text: 'Website mistake 2: yakhshā and yarjū carry opposite attitudes.', pairs: [['«يَخْشَى» خَوْفٌ وَ«يَرْجُو» أَمَلٌ', '«يَخْشَى» وَ«يَرْجُو» مَوْقِفٌ وَاحِدٌ']] },
      notes: `GRAMMAR PART 2 — website rule “Fear vs hope”, teaching point 2 (“Fear and hope are both volition — but opposite attitudes”) and mistake 2.
Paper 1 attitude questions often hang on this one verb: “What does the expert fear?” vs “What does the expert hope?” — the CONTENT after أَنْ may sound similar.
Card 3 is a sound trick: يَخْشَى has the rough kh + sh (a worried sound!); يَرْجُو has the soft r + j. Both come from the speaker: نَخْشَى / نَرْجُو = WE fear / hope.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · results, past perfect, passives and numbers by ear (website rules 3–4 + vocabulary) · Develop', title: 'Wait for the result — and the time', ar: 'عَلَامَةُ الجَوَابِ وَالزَّمَنُ',
      cols: [{ label: 'You hear', w: 2.4, size: 18 }, { label: 'It means', w: 2.2 }, { label: 'Example (website texts)', w: 7.73, size: 17 }],
      rows: [
        { core: true, cells: ['إِذَا … {w|سَنُ}…', 'real (Type 1)', 'إِذَا اعْتَمَدْنَا عَلَى الطَّاقَةِ الشَّمْسِيَّةِ، {w|سَنُخَفِّضُ} التَّكَالِيفَ.'] },
        { core: true, cells: ['لَوْ … {e|لَـ}…', 'did NOT happen', 'لَوْ كُنَّا قَدِ اسْتَثْمَرْنَا مُبَكِّرًا، {e|لَتَجَنَّبْنَا} هٰذِهِ الأَزْمَةَ.'] },
        { cells: ['{p|كَانَ قَدْ}', 'an earlier action', 'كَانَتِ المَدِينَةُ {p|قَدْ فَقَدَتْ} حَدَائِقَهَا.'] },
        { cells: ['{m|دُمِّرَتْ} · {m|أُعْلِنَتْ}', 'disaster passive', '{m|دُمِّرَتِ} المَبَانِي وَ{m|أُعْلِنَتْ} حَالَةُ الطَّوَارِئِ.'] },
        { cells: ['{k|يُمَثِّلُ} · {k|يَبْلُغُ}', 'a statistic', 'وَ{k|تُمَثِّلُ} المِيَاهُ المُتَجَدِّدَةُ نِسْبَةً ضَئِيلَةً مِنْ حَاجَتِنَا.'] },
      ],
      ltr: true,
      foot: 'Both idhā and law take a past verb — so wait for the RESULT: sa- = real · la- = it did not happen.',
      notes: `GRAMMAR PART 3 — website rules “Conditional by result marker” and “Past perfect and passives”, the vocabulary group “Grammar markers by ear” and the website listening (rows 1–2, 5).
Row 2 has a past perfect inside the Type 2: كُنَّا قَدِ اسْتَثْمَرْنَا (qad takes a kasra before the waṣl alif).
Row 5: نِسْبَةً ضَئِيلَةً = a tiny share — a statistic question may ask “how much?” and the answer is not a number but an adjective.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the listening strategy (website reading — a strategy guide) · Stretch', title: 'Before, during, after', ar: 'اسْتِرَاتِيجِيَّةُ الاسْتِمَاعِ',
      cols: [{ label: 'Step', w: 1.6 }, { label: 'The website strategy guide', w: 7.6, size: 17 }, { label: 'Why', w: 3.13 }],
      rows: [
        { core: true, cells: ['before', 'اقْرَأِ الأَسْئِلَةَ أَوَّلًا وَ{p|حَدِّدْ نَوْعَ المُسَبِّبِ المَطْلُوبِ}.', 'you know what to wait for'] },
        { core: true, cells: ['during', '{e|رَكِّزْ عَلَى المُسَبِّبِ لَا عَلَى الحَرَكَةِ}.', 'the final -a is often swallowed'] },
        { cells: ['conditional', '«سَ» تَدُلُّ عَلَى شَرْطٍ {w|حَقِيقِيٍّ} وَ«لَ» عَلَى شَرْطٍ {m|افْتِرَاضِيٍّ}.', 'the result decides'] },
        { cells: ['after', 'تَذَكَّرْ أَنَّ {k|الإِجَابَةَ العَامَّةَ} كَثِيرًا مَا تَكُونُ مُشَتِّتًا.', 'specific beats general'] },
      ],
      ltr: true,
      foot: 'The guide itself starts with a subjunctive: لِتَنْجَحَ فِي الاسْتِمَاعِ … = so that you succeed in listening (li- + -a).',
      notes: `GRAMMAR PART 4 — the website reading (“a listening strategy guide”) turned into a four-step routine. The full text and its questions are on the extension slides.
Distractor example from today’s listening: “What is the main cause of scarcity?” — the specific answer is قِلَّةُ الأَمْطَارِ وَسُوءُ الإِدَارَةِ, not a general “climate”.
Stretch: write the four steps as advice to a younger student with يَنْبَغِي أَنْ: يَنْبَغِي أَنْ تَقْرَأَ الأَسْئِلَةَ أَوَّلًا …`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me plan my listening',
    steps: [
      { head: 'Before', ar: 'أَقْرَأُ الأَسْئِلَةَ وَأُحَدِّدُ المُسَبِّبَ', think: 'Predict.' },
      { head: 'Purpose / need', ar: '{e|«لِكَيْ»} · {k|«يَنْبَغِي»} / {k|«يَتَطَلَّبُ»}', think: 'Which job?' },
      { head: 'Attitude', ar: '{m|«يَخْشَى»} ≠ {w|«يَرْجُو»}', think: 'Fear or hope?' },
      { head: 'Conditional', ar: '{p|عَلَامَةُ الجَوَابِ}: سَ / لَ', think: 'Wait for it.' },
    ],
    legend: ['e', 'k', 'm', 'w', 'p'], legendLabels: { e: 'PURPOSE', k: 'NECESSITY', m: 'FEAR', w: 'HOPE', p: 'RESULT MARKER' },
    model: 'قَبْلَ الاسْتِمَاعِ، أَقْرَأُ الأَسْئِلَةَ وَأُحَدِّدُ نَوْعَ المُسَبِّبِ المَطْلُوبِ. فَإِنْ كَانَ السُّؤَالُ عَنْ غَرَضٍ، أُصْغِي إِلَى {e|«لِكَيْ»}؛ وَإِنْ كَانَ عَنْ ضَرُورَةٍ، أُصْغِي إِلَى {k|«يَنْبَغِي»} أَوْ {k|«يَتَطَلَّبُ»}؛ وَإِنْ كَانَ عَنْ مَوْقِفٍ، أُمَيِّزُ {m|«يَخْشَى»} مِنْ {w|«يَرْجُو»}. وَلَا أُحَاوِلُ الْتِقَاطَ الفَتْحَةِ الأَخِيرَةِ، بَلْ أُرَكِّزُ عَلَى المُسَبِّبِ. وَفِي الشَّرْطِ، أُصْغِي إِلَى {p|عَلَامَةِ الجَوَابِ}.',
    modelEn: 'Before listening, I read the questions and identify the type of trigger needed. If the question is about a purpose, I listen for “li-kay”; if it is about a necessity, I listen for “yanbaghī” or “yataṭallabu”; if it is about an attitude, I tell “yakhshā” from “yarjū”. I do not try to catch the final fatḥa; I focus on the trigger. And in a conditional, I listen for the result marker.',
    notes: 'I DO (3 min) — from the website writing model. Model it on the question paper: write the trigger you expect next to each question number (Q2 → yataṭallabu · Q3 → nakhshā · Q6 → li-kay · Q7 → narjū). Then play Part 1 and tick the triggers as you hear them.',
  },
  patternEn: ['the situation requires governments to allocate bigger budgets', 'experts fear that warming will exceed its limit', 'we develop electric transport so that we reduce emissions'],
  listenParts: [
    {
      title: 'Part 1: the problem, the need, the fear', script: T1, q: [0, 1, 2], min: 3,
      extra: [L('How much of our need does renewable water cover?', ['a tiny share', 'about half', 'all of it'], 'وَتُمَثِّلُ المِيَاهُ المُتَجَدِّدَةُ نِسْبَةً ضَئِيلَةً مِنْ حَاجَتِنَا.')],
      tip: 'Label first: cause · necessity · fear · share.\nListen for: bi-sabab · yataṭallabu an · nakhshā an · tumaththilu.',
      routes: 'Core: questions 1, 2 and 3. Develop/Stretch: all four — and give the SPECIFIC answer (low rainfall and poor management), not a general one.',
      gloss: [
        ['يَقُولُ الخَبِيرُ البِيئِيُّ: تُعَانِي المِنْطَقَةُ العَرَبِيَّةُ مِنْ نُدْرَةِ المِيَاهِ بِسَبَبِ قِلَّةِ الأَمْطَارِ وَسُوءِ الإِدَارَةِ.', 'The environmental expert says: the Arab region suffers from water scarcity because of low rainfall and poor management.'],
        ['وَتُمَثِّلُ المِيَاهُ المُتَجَدِّدَةُ نِسْبَةً ضَئِيلَةً مِنْ حَاجَتِنَا. يَتَطَلَّبُ الوَضْعُ أَنْ تُخَصِّصَ الحُكُومَاتُ مِيزَانِيَّاتٍ أَكْبَرَ لِلتَّحْلِيَةِ.', 'Renewable water represents a tiny share of our need. The situation requires governments to allocate bigger budgets for desalination.'],
        ['وَنَخْشَى أَنْ يَتَجَاوَزَ الاحْتِرَارُ العَالَمِيُّ حُدُودَهُ الآمِنَةَ.', 'And we fear that global warming will exceed its safe limits.'],
      ],
    },
    {
      title: 'Part 2: if, had, so that, we hope', script: T2, q: [3, 4, 5, 6], min: 3,
      tip: 'Label first: Type 1 · Type 2 · purpose · hope.\nListen for: sa- · la- · li-kay · narjū an.',
      routes: 'Core: questions 1, 3 and 4. Develop/Stretch: all four — and for question 2, say what did NOT happen (they did not invest early).',
      gloss: [
        ['إِذَا اعْتَمَدْنَا عَلَى الطَّاقَةِ الشَّمْسِيَّةِ فِي التَّحْلِيَةِ، سَنُخَفِّضُ التَّكَالِيفَ. وَلَوْ كُنَّا قَدِ اسْتَثْمَرْنَا مُبَكِّرًا، لَتَجَنَّبْنَا هٰذِهِ الأَزْمَةَ.', 'If we rely on solar energy for desalination, we will cut costs. And had we invested early, we would have avoided this crisis.'],
        ['وَنَزْرَعُ مَحَاصِيلَ أَقَلَّ اسْتِهْلَاكًا لِلْمَاءِ لِكَيْ نُوَفِّرَ مَوَارِدَنَا.', 'And we grow crops that use less water so that we save our resources.'],
        ['وَأَخِيرًا، نَرْجُو أَنْ تُوَقِّعَ الدُّوَلُ اتِّفَاقًا لِإِدَارَةِ الأَنْهَارِ المُشْتَرَكَةِ.', 'Finally, we hope that states will sign an agreement to manage shared rivers.'],
      ],
    },
  ],
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 2, flex: true, eyebrow: 'We do · report what you heard (website live builder)', title: 'Necessity + attitude + conditional', ar: 'تَقْرِيرٌ عَمَّا سَمِعْتَ',
      cols: [{ label: '1 · Necessity', w: 4.0, size: 16 }, { label: '2 · Fear / hope / aim', w: 4.2, size: 16 }, { label: '3 · Conditional / purpose', w: 4.13, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Say it, then write three different versions.',
      notes: `WE DO (flex) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Use after the two listens: students retell the expert’s talk in the third person (يَرَى الخَبِيرُ أَنَّهُ يَنْبَغِي … · يَخْشَى الخَبِيرُ أَنْ …) — reported speech from P3-L06.`,
    },
  ],
  sorterTitle: 'Purpose, volition — or necessity?',
  sorterCats: ['purpose (li-kay)', 'volition (yakhshā / yarjū)', 'necessity (yanbaghī / yataṭallabu)'],
  sorterNotes: 'Then read each card aloud at full speed and let a partner sort it by ear only (eyes closed) — they must catch the trigger, not the -a.',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: { ...site.writing, prompt: 'Write eighty to ninety words explaining your listening strategy for built and natural world texts. Describe how you use the trigger to predict a purpose, volition or necessity clause, why you do not chase the final fatḥa, and how you tell idhā from law.', checklist: site.writing.checklist.map((c) => c.replace('لِكَيْ for purpose, يَخْشَى/يَرْجُو أَنْ for fear/hope, يَنْبَغِي/يَتَطَلَّبُ أَنْ for necessity.', 'li-kay for purpose, yakhshā / yarjū an for fear / hope, yanbaghī / yataṭallabu an for necessity.').replace('(سَـ / لَـ)', '(sa- / la-)')) }, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('يَتَطَلَّبُ أَنْ → necessity.', 'yataṭallabu an → necessity.').replace('يَخْشَى أَنْ → fear (volition).', 'yakhshā an → fear (volition).').replace('لِكَيْ → purpose.', 'li-kay → purpose.') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'the website listening is split into two short listens with one teacher-added question (the share of renewable water); waṣl alif shown without a kasra; لِكَيْ always written with its sukūn; fixes أَرْكُزُ عَلَى → أُرَكِّزُ عَلَى and لَوْ اسْتَثْمَرْنَا → لَوِ اسْتَثْمَرْنَا; rule formulas, pattern tips, writing prompt and checklist in transliteration; rule examples without their English labels; sorter headings in transliteration; the trigger, result and strategy tables are teacher-built from the website listening and reading; no visual game. All other website items are used as published.',
  hints: ['yanbaghī = purpose?', 'yakhshā = yarjū?', 'chasing the final -a?'],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا الغَرَضُ الَّذِي سَمِعْتَهُ؟ وَبِأَيِّ مُسَبِّبٍ عَرَفْتَهُ؟' },
      { route: 'develop', ar: 'مَا الضَّرُورَةُ الَّتِي سَمِعْتَهَا؟ وَبِأَيِّ مُسَبِّبٍ؟' },
      { route: 'stretch', ar: 'هَلْ سَمِعْتَ خَوْفًا أَمْ أَمَلًا؟ وَكَيْفَ مَيَّزْتَ بَيْنَهُمَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'سَمِعْتُ «لِكَيْ نُوَفِّرَ مَوَارِدَنَا»، وَهٰذَا غَرَضٌ.' },
      { route: 'develop', ar: 'سَمِعْتُ « ______ »، وَعَرَفْتُهَا مِنْ «يَتَطَلَّبُ».' },
      { route: 'stretch', ar: '«نَخْشَى أَنْ ______ » خَوْفٌ، وَ«نَرْجُو أَنْ ______ » أَمَلٌ.' },
    ],
    modelEn: ['What necessity did you hear?', 'I heard “the situation requires governments to allocate budgets”, and I recognised it from “yataṭallabu”.', 'And did you hear a fear?', 'Yes — “we fear that warming will exceed its limit” is a fear, and “we hope that states will sign” is a hope.'],
    notes: 'Website prompts and model. Pairs replay the expert’s talk from memory: A names a trigger, B gives the sentence it introduced. Swap. To a girl: سَمِعْتِ · عَرَفْتِ · مَيَّزْتِ.',
  },
  diff: { core: 'Annotate five questions with the trigger (li-kay / yanbaghī / yakhshā …) you will listen for.' },
  write: {
    core: { amount: '5 questions', how: 'Website Core: annotate five questions with the trigger you will listen for.' },
    develop: { amount: '5 questions + type', how: 'Website Develop: add whether each targets a purpose, a volition or a necessity clause.' },
    stretch: { amount: '80–90 words', how: 'Website task: explain your listening strategy — triggers, the reduced fatḥa, idhā vs law, the distractor.' },
  },
  frames: {
    core: [
      { en: 'Before listening, I read the questions.', ar: 'قَبْلَ الاسْتِمَاعِ، أَقْرَأُ الأَسْئِلَةَ وَأُحَدِّدُ ______ .' },
      { en: 'If the question is about a purpose, I listen for …', ar: 'إِنْ كَانَ السُّؤَالُ عَنْ غَرَضٍ، أُصْغِي إِلَى « ______ ».' },
      { en: 'If it is about a necessity, I listen for …', ar: 'إِنْ كَانَ عَنْ ضَرُورَةٍ، أُصْغِي إِلَى « ______ ».' },
      { en: '“yakhshā” is a fear and “yarjū” is a hope.', ar: '«يَخْشَى» ______ وَ«يَرْجُو» ______ .' },
    ],
    develop: [
      { en: 'I do not try to catch the final fatḥa, because …', ar: 'لَا أُحَاوِلُ الْتِقَاطَ الفَتْحَةِ الأَخِيرَةِ، لِأَنَّهَا ______ .' },
      { en: 'Instead, I focus on …', ar: 'بَلْ أُرَكِّزُ عَلَى ______ .' },
      { en: 'In a conditional, I listen for the result marker: …', ar: 'وَفِي الشَّرْطِ، أُصْغِي إِلَى عَلَامَةِ الجَوَابِ: ______ .' },
      { en: 'Finally, I reject the general answer, because …', ar: 'وَأَخِيرًا، أَرْفُضُ الإِجَابَةَ العَامَّةَ لِأَنَّهَا ______ .' },
    ],
    bank: ['نَوْعَ المُسَبِّبِ', 'لِكَيْ', 'يَنْبَغِي', 'يَتَطَلَّبُ', 'خَوْفٌ', 'أَمَلٌ', 'تُخْتَزَلُ فِي الكَلَامِ السَّرِيعِ', 'المُسَبِّبِ', 'شَرْطٌ حَقِيقِيٌّ', 'شَرْطٌ افْتِرَاضِيٌّ', 'تَكُونُ مُشَتِّتًا', 'الإِجَابَةَ المُحَدَّدَةَ'],
  },
  stretch: [
    ['أُحَدِّدُ نَوْعَ المُسَبِّبِ المَطْلُوبِ', 'I identify the type of trigger needed'],
    ['أُمَيِّزُ «يَخْشَى» الخَوْفَ مِنْ «يَرْجُو» الأَمَلَ', 'I tell “yakhshā” (fear) from “yarjū” (hope)'],
    ['تُخْتَزَلُ فِي الكَلَامِ السَّرِيعِ', 'is reduced in fast speech'],
    ['أُصْغِي إِلَى عَلَامَةِ الجَوَابِ', 'I listen for the result marker'],
    ['كَثِيرًا مَا تَكُونُ مُشَتِّتًا', 'is often a distractor'],
  ],
  modelEn: 'Before listening, I read the questions and identify the type of trigger needed. If the question is about a purpose, I listen for “li-kay”; if it is about a necessity, I listen for “yanbaghī” or “yataṭallabu”; and if it is about an attitude, I tell “yakhshā” (fear) from “yarjū” (hope). I do not try to catch the final fatḥa, because it is reduced in fast speech; instead I focus on the trigger. In a conditional, I listen for the result marker: “sa-” is a real conditional and “la-” a hypothetical one. Finally, I reject the general answer, because it is often a distractor.',
  find: ['identify the trigger first', 'yakhshā (fear) vs yarjū (hope)', 'the reduced fatḥa → focus on the trigger', 'sa- / la- + reject the general answer'],
  modelNotes: 'Website writing model. Evidence: أُحَدِّدُ نَوْعَ المُسَبِّبِ · إِنْ كَانَ … أُصْغِي إِلَى «لِكَيْ» · «يَنْبَغِي» أَوْ «يَتَطَلَّبُ» · أُمَيِّزُ «يَخْشَى» … مِنْ «يَرْجُو» · لِأَنَّهَا تُخْتَزَلُ · أُرَكِّزُ عَلَى المُسَبِّبِ · عَلَامَةِ الجَوَابِ · أَرْفُضُ الإِجَابَةَ العَامَّةَ. (Fix: أُرَكِّزُ — the website prints أَرْكُزُ.)',
  selfCheck: [
    { route: 'core', text: 'Before listening, I wrote the trigger I expect next to each question.' },
    { route: 'core', text: 'I heard li-kay and named it: purpose.' },
    { route: 'develop', text: 'I told volition (yakhshā / yarjū) from necessity (yanbaghī / yataṭallabu).' },
    { route: 'develop', text: 'I told a fear from a hope.' },
    { route: 'stretch', text: 'I waited for sa- / la- and chose the specific answer, not the general one.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['لِتَنْجَحَ', 'so that you succeed'], ['الأَكَادِيمِيِّ', 'academic'], ['حَدِّدْ', 'identify!'], ['المَطْلُوبِ', 'required'], ['بِمَقْطَعَيْنِ', 'in two syllables'],
    ['تُخْتَزَلُ', 'is reduced'], ['رَكِّزْ', 'focus!'], ['الحَرَكَةِ', 'the vowel mark'], ['حَقِيقِيٍّ', 'real'], ['مُشَتِّتًا', 'a distractor'],
  ],
  prep: {
    words: [['فَتْحَةُ النَّصْبِ', 'the subjunctive fatḥa', '—'], ['لَامُ الجَوَابِ', 'the la- of the result', '—'], ['التِّلْقَائِيَّةُ', 'spontaneity', '—'], ['الطَّلَاقَةُ', 'fluency', '—'], ['لَعِبُ الأَدْوَارِ', 'a role play', '—']],
    questionEn: 'Which P4 structure is hardest for you to SAY without notes — and why?',
    questionAr: 'أَصْعَبُ تَرْكِيبٍ عِنْدِي هُوَ ______ ، لِأَنَّ ______ .',
    homework: {
      core: 'Annotate five listening questions with the trigger you would listen for.',
      develop: 'Add the clause type to each: purpose, volition or necessity.',
      stretch: 'Website writing task: an 80–90-word listening strategy.',
    },
    wordsSource: 'The five words come from the website P4-L11 vocabulary (consolidation and speaking).',
  },
  remember: 'Remember: in fast speech the final -a disappears — so hear the TRIGGER: li-kay = purpose · yakhshā an = fear · yarjū an = hope · yanbaghī / yataṭallabu an = must. In a conditional, wait for sa- (real) or la- (it did not happen).',
});

module.exports = { meta, slides };
