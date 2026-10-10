'use strict';
/* P1-L07 · Public Health Campaigns — website: Pathways › Progression › P1 › P1-L07 (rhetorical openers هَلْ تَعْلَمُ أَنَّ / أَلَا تَعْلَمُ أَنَّ + accusative noun;
 * persuasive verbs يُحَذِّرُ مِنْ · يَدْعُو إِلَى · يُشَجِّعُ عَلَى · يُحَفِّزُ + object; hook → argument → call to action; imperatives for he / she / you all).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing and visual game used as published.
 * The website visual-game card اِشْرَبِ المَاءَ بَانْتِظَامٍ (should be بِانْتِظَامٍ) is not used. English added to the patterns. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P1')({
  n: 7, fileTitle: 'Public_Health_Campaigns_Persuasion', chip: 'Writing',
  title: 'Public Health Campaigns — Persuasive Health Communication', arabic: 'حَمَلَاتُ الصِّحَّةِ العَامَّةِ',
  focus: 'Hook the reader with a rhetorical question (هَلْ تَعْلَمُ أَنَّ النَّوْمَ …؟), persuade with the right preposition (يُحَذِّرُ مِنْ · يَدْعُو إِلَى · يُشَجِّعُ عَلَى) and close with a clear call to action (لِنَبْدَأِ الآنَ · الخِيَارُ بِيَدِكَ).',
  icon: 'FaBullhorn', iconSet: 'fa6',
});

const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });

const site = D.site('P1-L07');
const RH = [['Rhetorical openers', 'hal taʿlamu anna + accusative noun'], ['Persuasive verbs', 'yuḥadhdhir min · yadʿū ilā · yushajjiʿ ʿalā'], ['Direct-object persuaders', 'yuḥaffiz / yuqniʿ + accusative'], ['The call to action', 'an imperative, or maʿan nastaṭīʿ']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));

const slides = D.devLesson('P1-L07', {
  support: `• Core: a rhetorical opener + two persuasive sentences with the right preposition. Develop: add a call for a healthier habit and a call to action (an imperative). Stretch: the website 100–110-word campaign text that persuades with evidence and closes with a concrete step.
• Tone (website reading): fear alone does not last and blame does not persuade — positive language plus one small, practical step works best. Islamic link (optional): campaigns can borrow the spirit of “إِنَّ لِجَسَدِكَ عَلَيْكَ حَقًّا” (your body has a right over you, Bukhārī) — students may quote it as a hook.
• Grammar links: أَنَّ + accusative (GM-NVS-02 · P1-L04) · Type 1 conditional (P1-L03) · imperatives (D units) · preposition families (P1-L02 – P1-L05).`,
  teach: 'Rhetorical openers with أَنَّ, persuasive verbs, imperatives for the call to action.',
  wedo: 'Build a campaign, sort the verbs, match the poster slogan.',
  next: { nextCode: 'P1-L08', nextTitle: 'Reading — Health and Wellbeing Texts', nextAr: 'القِرَاءَةُ — نُصُوصُ الصِّحَّةِ وَالعَافِيَةِ' },
  objectives: ['Engage the reader with hal taʿlamu anna and a-lā taʿlamu anna.', 'Use yuḥadhdhir min, yadʿū ilā and yushajjiʿ ʿalā with correct complements.', 'Structure a persuasive message: hook, argument, call to action.', 'Write a 100–110 word campaign text with a clear call to action.'],
  objNotes: 'Website objectives (Arabic shown in transliteration on the slide so the lines read cleanly). The route statements turn them into this lesson’s concrete targets.',
  rulesAr: 'البَلَاغَةُ وَالإِقْنَاعُ',
  doNow: {
    questions: [
      q('What does حَمْلَةٌ صِحِّيَّةٌ mean?', ['a health campaign', 'a hospital visit', 'a healthy meal'], 'Prepared at home (P1-L06).'),
      q('What does شِعَارٌ mean?', ['a slogan', 'a poster', 'a speech'], 'Prepared at home (P1-L06).'),
      q('What does يُحَذِّرُ مِنْ mean?', ['he warns against', 'he calls for', 'he encourages'], 'Prepared at home (P1-L06).'),
      q('Complete: تُشِيرُ الدِّرَاسَاتُ إِلَى أَنَّ ___ يُحَسِّنُ الصِّحَّةَ.', ['الإِقْلَاعَ', 'الإِقْلَاعُ', 'الإِقْلَاعِ'], 'P1-L04: anna + accusative.'),
      q('Choose the accurate passive.', ['يُعَالَجُ المَرِيضُ مَجَّانًا.', 'يُعَالَجُ المَرِيضَ مَجَّانًا.', 'يُعَالِجُ المَرِيضُ مَجَّانًا.'], 'P1-L06: the medical passive.'),
    ],
    keyIdea: { text: 'Hook → argument → call to action. And after anna, the noun takes -a.', ar: 'هَلْ تَعْلَمُ أَنَّ {e|النَّوْمَ} يُقَوِّي المَنَاعَةَ؟' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P1-L06. Question 4 retrieves anna + accusative (P1-L04) — the engine of today’s rhetorical openers; question 5 the nominative passive subject (P1-L06).',
  },
  routes: {
    core: ['I can open with hal taʿlamu anna …?', 'I can use yuḥadhdhir min and yadʿū ilā.'],
    develop: ['I can write a call to action (imperative).', 'I can say it to a boy, a girl and a group.'],
    stretch: ['I can write a 100–110-word campaign.', 'I can persuade with evidence, not fear.'],
  },
  bridge: [
    { ar: 'حَمْلَةٌ', urdu: 'حملہ', tr: 'hamla', en: 'Urdu: an attack · Arabic: a campaign' },
    { ar: 'دَعْوَةٌ', urdu: 'دعوت', tr: 'daʿwat', en: 'an invitation, a call' },
    { ar: 'تَنْبِيهٌ', urdu: 'تنبیہ', tr: 'tanbīh', en: 'a warning' },
    { ar: 'حُجَّةٌ', urdu: 'حجت', tr: 'hujjat', en: 'an argument, proof' },
    { ar: 'شِعَارٌ', urdu: 'شعار', tr: 'shiʿār', en: 'Urdu: a sign, practice · Arabic: a slogan' },
  ],
  bridgeNotes: 'URDU BRIDGE: دعوت، تنبیہ and حجت are shared. CAREFUL: Urdu حملہ means an attack — Arabic حَمْلَةٌ صِحِّيَّةٌ is a (peaceful!) health campaign. Urdu شعار is a custom or sign (شعارِ اسلام); in Arabic شِعَارٌ is also a slogan.',
  core: ['حَمْلَةٌ صِحِّيَّةٌ', 'رِسَالَةٌ صِحِّيَّةٌ', 'الإِقْنَاعُ', 'دَعْوَةٌ إِلَى العَمَلِ', 'شِعَارٌ', 'يُحَذِّرُ مِنْ', 'يَدْعُو إِلَى', 'يُشَجِّعُ عَلَى', 'هَلْ تَعْلَمُ أَنَّ', 'لِنَبْدَأِ الآنَ', 'مَعًا نَسْتَطِيعُ', 'الخِيَارُ بِيَدِكَ'],
  forms: {
    'حَمْلَةٌ صِحِّيَّةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'حَمَلَاتٌ صِحِّيَّةٌ' }] }, 'شِعَارٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'شِعَارَاتٌ' }] },
    'رِسَالَةٌ صِحِّيَّةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'رَسَائِلُ صِحِّيَّةٌ' }] }, 'حُجَّةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'حُجَجٌ' }] },
    'يُحَذِّرُ مِنْ': ihs('أُحَذِّرُ', 'تُحَذِّرُ'), 'يَدْعُو إِلَى': ihs('أَدْعُو', 'تَدْعُو'), 'يُشَجِّعُ عَلَى': ihs('أُشَجِّعُ', 'تُشَجِّعُ'), 'يُحَفِّزُ': ihs('أُحَفِّزُ', 'تُحَفِّزُ'),
    'يُقْنِعُ': ihs('أُقْنِعُ', 'تُقْنِعُ'), 'يَنْصَحُ بِـ': ihs('أَنْصَحُ', 'تَنْصَحُ'),
    'هَلْ تَعْلَمُ أَنَّ': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'هَلْ تَعْلَمُونَ' }, { l: 'f.', ar: 'هَلْ تَعْلَمِينَ' }] },
    'الخِيَارُ بِيَدِكَ': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'بِأَيْدِيكُمْ' }, { l: 'f.', ar: 'بِيَدِكِ' }] },
  },
  vocabNotes: {
    0: 'Campaign language. حَمْلَةٌ and رِسَالَةٌ are feminine → the verb is feminine: تُحَذِّرُ الحَمْلَةُ · تَدْعُو الرِّسَالَةُ.',
    1: 'Persuasive verbs: learn each WITH its preposition — يُحَذِّرُ مِنْ · يَدْعُو إِلَى · يُشَجِّعُ عَلَى · يَنْصَحُ بِـ; but يُحَفِّزُ and يُقْنِعُ take a direct object.',
    2: 'Rhetorical structures. Address a girl or a group too: هَلْ تَعْلَمِينَ · هَلْ تَعْلَمُونَ · الخِيَارُ بِيَدِكِ / بِأَيْدِيكُمْ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · rhetorical openers with anna (website rule 1) · Core', title: 'Did you know that …?', ar: 'هَلْ تَعْلَمُ أَنَّ …؟',
      cols: [{ label: 'Opener', w: 2.9, size: 21 }, { label: 'Noun after anna (-a)', w: 2.9, size: 22 }, { label: 'The rest (predicate)', w: 4.6, size: 20 }, { label: 'Meaning', w: 1.93 }],
      rows: [
        { core: true, cells: ['هَلْ تَعْلَمُ أَنَّ', '{e|النَّوْمَ}', 'يُقَوِّي المَنَاعَةَ؟', 'sleep'] },
        { core: true, cells: ['أَلَا تَعْلَمُ أَنَّ', '{e|الحَرَكَةَ}', 'تُطِيلُ العُمُرَ؟', 'movement'] },
        { cells: ['هَلْ تَعْلَمِينَ أَنَّ', '{e|المَاءَ}', 'ضَرُورِيٌّ لِلتَّرْكِيزِ؟', 'to a girl'] },
        { cells: ['هَلْ تَعْلَمُونَ أَنَّ', '{e|ثَلَاثِينَ} دَقِيقَةً', 'مِنَ المَشْيِ تَكْفِي؟', 'to a group'] },
        { cells: ['تَخَيَّلْ أَنَّ', '{e|صِحَّتَكَ}', 'تَتَحَسَّنُ خِلَالَ أَسَابِيعَ!', 'imagine'] },
      ],
      ltr: true,
      foot: 'Website rule: anna makes the following noun accusative; the predicate stays as it was (nominative or a verb).',
      notes: `GRAMMAR PART 1 — website rule “Rhetorical openers” (أَنَّ makes the following noun accusative; the predicate stays nominative) and teaching point “A rhetorical question hooks the reader”.
Website mistake: هَلْ تَعْلَمُ أَنَّ النَّوْمُ ✗ → النَّوْمَ. Same rule as تُشِيرُ الدِّرَاسَاتُ إِلَى أَنَّ … (P1-L04).
Row 3: a predicate ADJECTIVE after anna stays nominative — أَنَّ المَاءَ ضَرُورِيٌّ. Row 4: ثَلَاثِينَ is the accusative of ثَلَاثُونَ.
أَلَا تَعْلَمُ (do you not know …?) is stronger and more rhetorical than هَلْ تَعْلَمُ.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · persuasive verbs and their complements (website rules 2–3) · Core / Develop', title: 'Warn · call for · encourage · motivate', ar: 'أَفْعَالُ الإِقْنَاعِ',
      cols: [{ label: 'Meaning', w: 2.3 }, { label: 'Verb', w: 2.8, size: 22 }, { label: 'Example (the campaign = she)', w: 5.6, size: 20 }, { label: 'Then', w: 1.63 }],
      rows: [
        { core: true, cells: ['warns against', '{e|يُحَذِّرُ مِنْ}', 'تُحَذِّرُ الحَمْلَةُ {e|مِنَ} التَّدْخِينِ.', 'min'] },
        { core: true, cells: ['calls for', '{m|يَدْعُو إِلَى}', 'تَدْعُو الرِّسَالَةُ {m|إِلَى} نَمَطِ حَيَاةٍ صِحِّيٍّ.', 'ilā'] },
        { core: true, cells: ['encourages', '{k|يُشَجِّعُ عَلَى}', 'تُشَجِّعُ الحَمْلَةُ {k|عَلَى} المَشْيِ اليَوْمِيِّ.', 'ʿalā'] },
        { cells: ['motivates', '{w|يُحَفِّزُ}', 'تُحَفِّزُ الرِّسَالَةُ {w|الشَّبَابَ} عَلَى الحَرَكَةِ.', 'object'] },
        { cells: ['convinces', '{w|يُقْنِعُ}', 'لَا يُقْنِعُ التَّخْوِيفُ {w|النَّاسَ} وَحْدَهُ.', 'object'] },
        { cells: ['advises', '{p|يَنْصَحُ بِـ}', 'يَنْصَحُ الأَطِبَّاءُ {p|بِشُرْبِ} المَاءِ.', 'bi-'] },
      ],
      ltr: true,
      foot: 'Website common error: swapping the persuasive prepositions — yuḥadhdhir MIN, yadʿū ILĀ, yushajjiʿ ʿALĀ.',
      notes: `GRAMMAR PART 2 — website rules “Persuasive verbs” (each has a fixed preposition and a genitive complement) and “Direct-object persuaders” (يُحَفِّزُ / يُقْنِعُ + accusative).
Website mistakes: تُحَذِّرُ الحَمْلَةُ عَلَى التَّدْخِينِ ✗ · تَدْعُو الرِّسَالَةُ عَلَى نَمَطٍ ✗.
Row 4: يُحَفِّزُ takes the PERSON as a direct object, then عَلَى for the action (website quiz item 5).
Note the weak verb يَدْعُو: هِيَ تَدْعُو · أَنَا أَدْعُو · نَحْنُ نَدْعُو.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · the call to action — imperatives for him, her and everyone · Develop', title: 'Move! · Choose! · Let’s start!', ar: 'فِعْلُ الأَمْرِ',
      cols: [{ label: 'Meaning', w: 2.5 }, { label: 'To a boy', w: 3.2, size: 22 }, { label: 'To a girl', w: 3.2, size: 22 }, { label: 'To everyone', w: 3.43, size: 22 }],
      rows: [
        { core: true, cells: ['move!', '{k|تَحَرَّكْ}', '{k|تَحَرَّكِي}', '{k|تَحَرَّكُوا}'] },
        { core: true, cells: ['choose!', '{k|اِخْتَرْ}', '{k|اِخْتَارِي}', '{k|اِخْتَارُوا}'] },
        { cells: ['protect (your lungs)!', '{k|اِحْمِ} رِئَتَيْكَ', '{k|اِحْمِي} رِئَتَيْكِ', '{k|اِحْمُوا} رِئَاتِكُمْ'] },
        { cells: ['don’t smoke!', '{e|لَا تُدَخِّنْ}', '{e|لَا تُدَخِّنِي}', '{e|لَا تُدَخِّنُوا}'] },
        { core: true, cells: ['let’s start now!', '{w|لِنَبْدَأِ} الآنَ', '{w|لِنَبْدَأِ} الآنَ', '{w|لِنَبْدَأِ} الآنَ'] },
      ],
      ltr: true,
      foot: 'A campaign often addresses everyone (-ū) — or includes the writer: li-nabdaʾ (let’s start), maʿan nastaṭīʿ (together we can).',
      notes: `GRAMMAR PART 3 — website rule “The call to action” (an imperative, or مَعًا نَسْتَطِيعُ) and the website visual game slogans (لَا تُدَخِّنْ — اِحْمِ رِئَتَيْكَ! · تَحَرَّكْ كُلَّ يَوْمٍ · اِخْتَرْ طَعَامًا صِحِّيًّا).
Forming the imperative: drop the ta- of the present (تَتَحَرَّكُ → تَحَرَّكْ); if the word then starts with a sukūn, add اِ (تَخْتَارُ → اِخْتَرْ). Negative = لَا + jussive (لَا تُدَخِّنْ).
Weak verbs lose the final vowel: تَحْمِي → اِحْمِ (boy) · اِحْمِي (girl) · اِحْمُوا (group).
Hollow verb: اِخْتَرْ (boy) but اِخْتَارِي / اِخْتَارُوا — the long ā comes back before a vowel ending (like zidtu / zāda in P1-L02).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the campaign structure (website teaching point 2 + reading) · Stretch', title: 'Hook → argument → call to action', ar: 'السُّؤَالُ · الحُجَّةُ · الدَّعْوَةُ',
      cards: [
        { chip: '1 · HOOK', color: 'C0386B', head: 'هَلْ تَعْلَمُ أَنَّ …؟', big: 'هَلْ تَعْلَمُ أَنَّ ثَلَاثِينَ دَقِيقَةً مِنَ الحَرَكَةِ تَكْفِي؟', en: 'Did you know that thirty minutes of movement is enough?', clue: 'A true, surprising fact.' },
        { chip: '2 · ARGUMENT', color: '1D5FBF', head: 'تُحَذِّرُ · تَدْعُو · إِذَا', big: 'إِذَا بَدَأْتَ اليَوْمَ، سَتَشْعُرُ بِالفَرْقِ خِلَالَ أَسَابِيعَ.', en: 'If you start today, you will feel the difference within weeks.', clue: 'Evidence + benefit.' },
        { chip: '3 · CALL TO ACTION', color: '1E6B52', head: 'لِنَبْدَأِ · الخِيَارُ بِيَدِكَ', big: 'لَا نَطْلُبُ تَغْيِيرًا كَبِيرًا، بَلْ خُطْوَةً صَغِيرَةً.', en: 'We are not asking for a big change, just a small step.', clue: 'Small and concrete.' },
      ],
      error: { text: 'Website reading: fear alone does not last — persuade with evidence and one small step.', pairs: [['تَدْعُو إِلَى الوِقَايَةِ وَتُقَدِّمُ خُطُوَاتٍ', 'تُخِيفُ النَّاسَ دُونَ حَلٍّ']] },
      notes: `GRAMMAR PART 4 — website teaching point “Persuade with evidence, close with action” (a strong campaign names a fact, gives a reason, and ends with a clear call; fear alone persuades less than evidence plus a concrete next step) and the website reading (التَّخْوِيفُ وَحْدَهُ لَا يَدُومُ أَثَرُهُ … تُحَفِّزُ الجُمْهُورَ بِلُغَةٍ إِيجَابِيَّةٍ، لَا بِاللَّوْمِ).
Card 2 recycles the Type 1 conditional (P1-L03). Card 3: لَا … بَلْ … — after نَطْلُبُ the object is accusative, and بَلْ continues it (خُطْوَةً).
Quiz items 6 and 8 test this structure.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me write a campaign',
    steps: [
      { head: 'Hook', ar: 'هَلْ تَعْلَمُ أَنَّ {e|ثَلَاثِينَ} دَقِيقَةً …؟', think: 'anna + -a.' },
      { head: 'Warn', ar: '{m|تُحَذِّرُ} حَمْلَتُنَا {m|مِنَ} الجُلُوسِ', think: 'min.' },
      { head: 'Call for', ar: '{w|وَتَدْعُو إِلَى} نَمَطٍ أَكْثَرَ نَشَاطًا', think: 'ilā.' },
      { head: 'Act', ar: '{k|اِسْتَعْمِلِ} الدَّرَجَ … {k|لِنَبْدَأِ} الآنَ', think: 'Imperative.' },
    ],
    legend: ['e', 'm', 'w', 'k'], legendLabels: { e: 'ANNA + -A', m: 'WARN MIN', w: 'CALL ILĀ', k: 'ACTION' },
    model: 'هَلْ تَعْلَمُ أَنَّ {e|ثَلَاثِينَ} دَقِيقَةً مِنَ الحَرَكَةِ يَوْمِيًّا تُقَلِّلُ مِنْ خَطَرِ أَمْرَاضٍ كَثِيرَةٍ؟ {m|تُحَذِّرُ} حَمْلَتُنَا {m|مِنَ} الجُلُوسِ الطَّوِيلِ أَمَامَ الشَّاشَاتِ، {w|وَتَدْعُو إِلَى} نَمَطِ حَيَاةٍ أَكْثَرَ نَشَاطًا. {k|اِسْتَعْمِلِ} الدَّرَجَ بَدَلَ المِصْعَدِ. الخِيَارُ بِيَدِكَ — {k|لِنَبْدَأِ} الآنَ.',
    modelEn: 'Did you know that thirty minutes of movement a day reduces the risk of many diseases? Our campaign warns against sitting for long periods in front of screens, and calls for a more active lifestyle. Use the stairs instead of the lift. The choice is yours — let’s start now.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Hook: a true, surprising fact — after anna the noun takes -a. Warn: min. Call for: ilā. Then ONE small step as an imperative, and a positive close.”',
  },
  patternEn: ['did you know that sleep strengthens immunity?', 'the campaign warns against smoking', 'let’s start now with a small step'],
  game: {
    title: 'Which slogan? Match the poster',
    pick: [1, 2, 5],
    en: ['Don’t smoke — protect your lungs!', 'Move every day for your health!', 'Switch off the screen before sleep.'],
    icons: [[['fa6', 'FaBanSmoking', 'C0386B'], ['fa6', 'FaBullhorn', 'C77700']], [['fa6', 'FaPersonWalking', '1E6B52'], ['fa6', 'FaBullhorn', 'C77700']], [['fa6', 'FaMobileScreen', '1D5FBF'], ['fa6', 'FaMoon', '6B4C9A'], ['fa6', 'FaBan', 'C0386B']]],
    labels: ['no smoking', 'walking every day', 'no screens at night'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Then say each slogan to a girl and to the whole class: لَا تُدَخِّنِي — اِحْمِي رِئَتَيْكِ! · تَحَرَّكُوا كُلَّ يَوْمٍ! Other website cards: healthy food, sleep as a priority, and a water card (not used: بَانْتِظَامٍ should be بِانْتِظَامٍ).',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build a mini-campaign (website listening and model)', title: 'Hook + argument + action', ar: 'اِبْنِ حَمْلَةً',
      cols: [{ label: '1 · Hook', w: 4.4, size: 19 }, { label: '2 · Warn / call for', w: 4.2, size: 19 }, { label: '3 · Call to action', w: 3.73, size: 19 }],
      rows: [
        { core: true, cells: ['هَلْ تَعْلَمُ أَنَّ النَّوْمَ يُقَوِّي المَنَاعَةَ؟', 'تُحَذِّرُ حَمْلَتُنَا مِنَ السَّهَرِ', 'لِنَبْدَأِ الآنَ!'] },
        { core: true, cells: ['أَلَا تَعْلَمُ أَنَّ الحَرَكَةَ تُطِيلُ العُمُرَ؟', 'وَتَدْعُو إِلَى المَشْيِ اليَوْمِيِّ', 'الخِيَارُ بِيَدِكَ.'] },
        { cells: ['هَلْ تَعْلَمُ أَنَّ المَاءَ ضَرُورِيٌّ لِلتَّرْكِيزِ؟', 'وَتُشَجِّعُ الشَّبَابَ عَلَى عَادَاتٍ أَفْضَلَ', 'مَعًا نَسْتَطِيعُ!'] },
      ],
      foot: 'Pick one box from each column, then add ONE small step as an imperative (tamarrak! · ishrab! · ikhtar!).',
      notes: `WE DO (3 min) — a campaign builder made from the website listening, model and rules. Pairs build a three-part campaign and read it aloud like a radio advert.
Core: read row 1 and translate it. Develop: build a new combination and add an imperative step. Stretch: rewrite the campaign for a group of girls (هَلْ تَعْلَمْنَ … اِبْدَأْنَ) or for the whole class (تَعْلَمُونَ · تَحَرَّكُوا).
Translations: did you know that sleep strengthens immunity? / do you not know that movement lengthens life? / did you know that water is essential for focus? — our campaign warns against staying up late / and calls for daily walking / and encourages young people towards better habits — let’s start now / the choice is yours / together we can.`,
    },
  ],
  sorterTitle: 'min, ilā or ʿalā?',
  sorterNotes: 'Then say a phrase for each verb: يُحَذِّرُ مِنَ التَّدْخِينِ · يَحُدُّ مِنَ السُّكَّرِ · يُقَلِّلُ مِنَ الخَطَرِ · يَدْعُو إِلَى الحَرَكَةِ · يُشِيرُ إِلَى أَنَّ … · يُؤَدِّي إِلَى الأَمْرَاضِ · يُشَجِّعُ عَلَى المَشْيِ · يُسَاعِدُ عَلَى النَّوْمِ · يُحَافِظُ عَلَى الصِّحَّةِ.',
  patch: { grammar: { ...site.grammar, rules } },
  patchNote: 'website rule headings and formulas shown in English and transliteration; the mini-campaign builder is teacher-built from the website listening and model. All other website items are used as published (one visual-game card not used, see notes).',
  hints: ['After anna: -u or -a?', 'yuḥadhdhir + which preposition?', 'yadʿū + which preposition?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 5.\nListen for: the hook and the close.',
  listenRoutes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 5 — and write down the three persuasive verbs you hear with their prepositions.',
  gloss: [
    ['هَلْ تَعْلَمُ أَنَّ ثَلَاثِينَ دَقِيقَةً مِنَ المَشْيِ يَوْمِيًّا تُقَلِّلُ مِنْ خَطَرِ أَمْرَاضٍ كَثِيرَةٍ؟', 'Did you know that thirty minutes of walking a day reduces the risk of many diseases?'],
    ['تُحَذِّرُ حَمْلَتُنَا مِنَ الجُلُوسِ الطَّوِيلِ، وَتَدْعُو إِلَى نَمَطِ حَيَاةٍ أَكْثَرَ حَرَكَةً. لَا نَطْلُبُ تَغْيِيرًا كَبِيرًا؛ بَلْ خُطْوَةً صَغِيرَةً كُلَّ يَوْمٍ.', 'Our campaign warns against long periods of sitting and calls for a more active lifestyle. We do not ask for a big change, just a small step every day.'],
    ['تُشَجِّعُ الرِّسَالَةُ الشَّبَابَ عَلَى اسْتِعْمَالِ الدَّرَجِ بَدَلَ المِصْعَدِ، وَعَلَى المَشْيِ إِلَى المَدْرَسَةِ.', 'The message encourages young people to use the stairs instead of the lift, and to walk to school.'],
    ['وَإِذَا بَدَأْتَ اليَوْمَ، سَتَشْعُرُ بِالفَرْقِ خِلَالَ أَسَابِيعَ.', 'If you start today, you will feel the difference within weeks.'],
    ['الخِيَارُ بِيَدِكَ، وَمَعًا نَسْتَطِيعُ أَنْ نَبْنِيَ عَادَاتٍ أَفْضَلَ.', 'The choice is yours, and together we can build better habits.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'اِبْدَأْ حَمْلَتَكَ بِسُؤَالٍ بَلَاغِيٍّ. مَا هُوَ؟' },
      { route: 'develop', ar: 'مِمَّ تُحَذِّرُ؟ وَإِلَى مَاذَا تَدْعُو؟' },
      { route: 'stretch', ar: 'مَا دَعْوَتُكَ إِلَى العَمَلِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'هَلْ تَعْلَمُ أَنَّ ______ ؟' },
      { route: 'develop', ar: 'أُحَذِّرُ مِنْ ______ ، وَأَدْعُو إِلَى ______ .' },
      { route: 'stretch', ar: 'لِنَبْدَأِ الآنَ: ______ !' },
    ],
    modelEn: ['Start your campaign with a rhetorical question.', 'Did you know that daily walking reduces the risk of heart disease?', 'And what do you call for?', 'I call for a more active lifestyle, I encourage one small step every day — and the choice is yours.'],
    notes: 'Website prompts and model. Pitch it like a 20-second radio advert. Check: -a after anna, the three prepositions, and an imperative at the end. To a girl: اِبْدَئِي حَمْلَتَكِ · تُحَذِّرِينَ · تَدْعِينَ · دَعْوَتُكِ.',
  },
  write: {
    core: { amount: '3–4 sentences', how: 'Website Core: a rhetorical opener and two persuasive sentences with correct prepositions.' },
    develop: { amount: '60–80 words', how: 'Website Develop: add a call for a healthier habit and a call to action.' },
    stretch: { amount: '100–110 words', how: 'Website task: a full campaign that persuades with evidence and closes with a concrete step.' },
  },
  frames: {
    core: [
      { en: 'Did you know that … ?', ar: 'هَلْ تَعْلَمُ أَنَّ ______ ؟' },
      { en: 'Our campaign warns against …', ar: 'تُحَذِّرُ حَمْلَتُنَا مِنَ ______ .' },
      { en: 'It calls for …', ar: 'وَتَدْعُو إِلَى ______ .' },
      { en: 'It encourages young people to …', ar: 'وَتُشَجِّعُ الشَّبَابَ عَلَى ______ .' },
    ],
    develop: [
      { en: 'We are not asking for a big change, but …', ar: 'لَا نَطْلُبُ تَغْيِيرًا كَبِيرًا، بَلْ ______ .' },
      { en: 'If you start today, you will …', ar: 'إِذَا بَدَأْتَ اليَوْمَ، ______ .' },
      { en: 'Use … instead of …', ar: 'اِسْتَعْمِلِ ______ بَدَلَ ______ .' },
      { en: 'The choice is yours, and together we can …', ar: 'الخِيَارُ بِيَدِكَ، وَمَعًا نَسْتَطِيعُ أَنْ ______ .' },
    ],
    bank: ['الجُلُوسُ الطَّوِيلُ', 'السَّهَرُ', 'التَّدْخِينُ', 'السُّكَّرُ', 'المَشْيُ اليَوْمِيُّ', 'شُرْبُ المَاءِ', 'نَمَطُ حَيَاةٍ صِحِّيٌّ', 'خُطْوَةٌ صَغِيرَةٌ', 'الدَّرَجُ', 'المِصْعَدُ', 'خِلَالَ أَسَابِيعَ', 'لِنَبْدَأِ الآنَ'],
  },
  stretch: [
    ['أَمَامَ الشَّاشَاتِ', 'in front of screens'],
    ['لَا نَطْلُبُ مِنْكَ تَغْيِيرًا كَبِيرًا، بَلْ خُطْوَةً صَغِيرَةً', 'we are not asking you for a big change, but a small step'],
    ['بِلُغَةٍ إِيجَابِيَّةٍ لَا بِاللَّوْمِ', 'with positive language, not blame'],
    ['تَذَكَّرْ أَنَّ التَّغْيِيرَ يَبْدَأُ بِقَرَارٍ وَاحِدٍ', 'remember that change begins with one decision'],
    ['مَعًا نَسْتَطِيعُ أَنْ نَبْنِيَ عَادَاتٍ أَفْضَلَ', 'together we can build better habits'],
  ],
  modelEn: 'Did you know that thirty minutes of movement a day reduces the risk of many diseases? Our campaign warns against sitting for long periods in front of screens, and calls for a more active lifestyle. We are not asking you for a big change, just a small step: use the stairs instead of the lift, and walk to school. The message encourages young people to move with positive language, not blame. If you start today, you will feel the difference within weeks. Remember that change begins with one decision. The choice is yours, and together we can build better habits. Let’s start now.',
  find: ['a hook with anna + an accusative noun', 'yuḥadhdhir min and yadʿū ilā', 'imperatives (istaʿmil · imshi)', 'a call to action (li-nabdaʾ)'],
  modelNotes: 'Website writing model. Evidence: هَلْ تَعْلَمُ أَنَّ ثَلَاثِينَ دَقِيقَةً · تُحَذِّرُ … مِنَ الجُلُوسِ · تَدْعُو إِلَى نَمَطِ حَيَاةٍ · اِسْتَعْمِلِ الدَّرَجَ · وَامْشِ · تُشَجِّعُ … عَلَى الحَرَكَةِ · إِذَا بَدَأْتَ … سَتَشْعُرُ · تَذَكَّرْ أَنَّ التَّغْيِيرَ · الخِيَارُ بِيَدِكَ · لِنَبْدَأِ الآنَ.',
  selfCheck: [
    { route: 'core', text: 'My hook has anna + an accusative noun (-a).' },
    { route: 'core', text: 'yuḥadhdhir MIN · yadʿū ILĀ · yushajjiʿ ʿALĀ.' },
    { route: 'develop', text: 'I gave one small step as an imperative.' },
    { route: 'develop', text: 'A feminine subject (al-ḥamla) has a tu- / ta- verb.' },
    { route: 'stretch', text: 'I persuaded with evidence and a positive close, not fear.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['تَجْمَعُ بَيْنَ', 'combines'], ['الوُضُوحِ', 'clarity'], ['الغَامِضَةُ', 'vague'], ['التَّخْوِيفُ', 'frightening (people)'], ['لَا يَدُومُ أَثَرُهُ', 'its effect does not last'],
    ['صَادِمَةٍ', 'shocking'], ['عَبْرَ وَسَائِلِ التَّوَاصُلِ', 'via social media'], ['قَابِلَةً لِلتَّطْبِيقِ', 'practical, applicable'], ['تَمْكِينَهُمْ', 'empowering them'], ['اتِّخَاذِ قَرَارٍ', 'making a decision'],
  ],
  prep: {
    words: [['المَصْدَرُ', 'the source', 'pl. المَصَادِرُ'], ['دَلِيلٌ', 'evidence', 'pl. أَدِلَّةٌ'], ['ادِّعَاءٌ', 'a claim', '—'], ['حَقِيقَةٌ', 'a fact', 'pl. حَقَائِقُ'], ['رَأْيٌ', 'an opinion', 'pl. آرَاءٌ']],
    questionEn: 'How can you tell whether a health claim online is true?',
    questionAr: 'أَعْرِفُ أَنَّ الادِّعَاءَ صَحِيحٌ إِذَا ______ .',
    homework: {
      core: 'Learn the campaign words; write a rhetorical opener and two persuasive sentences.',
      develop: 'A 60–80-word campaign with an imperative call to action.',
      stretch: 'Website writing task: a 100–110-word campaign on a topic of your choice.',
    },
    wordsSource: 'The five words come from the website P1-L08 vocabulary (evaluating health texts).',
  },
  remember: 'Remember: hook with hal taʿlamu anna + an accusative noun · yuḥadhdhir MIN · yadʿū ILĀ · yushajjiʿ ʿALĀ · close with one small step as an imperative — persuade with evidence, not fear.',
});

module.exports = { meta, slides };
