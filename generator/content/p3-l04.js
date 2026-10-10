'use strict';
/* P3-L04 · Arabic-Speaking Destinations — Culture, Geography and Tourism — website: Pathways › Progression › P3 › P3-L04 (tourism verbs with their complements:
 * يَسْتَقْطِبُ / يُبْهِرُ + direct object, يَتَمَيَّزُ بِـ / يَشْتَهِرُ بِـ; agreement with place names; present for description, past for a visit, a Type 1
 * recommendation with فَلَا بُدَّ مِنْ; travel-magazine register). Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live
 * builder, mission and visual game used as published, with waṣl alif shown without a kasra and one grammar fix: أَدْرَكْتُ أَنَّ لَا شَيْءَ → أَنَّهُ لَا شَيْءَ.
 * English added to the patterns; sorter headings in transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P3')({
  n: 4, fileTitle: 'Arabic_Speaking_Destinations', chip: 'Culture',
  title: 'Arabic-Speaking Destinations — Culture, Geography and Tourism', arabic: 'وِجْهَاتُ النَّاطِقِينَ بِالعَرَبِيَّةِ — الثَّقَافَةُ وَالسِّيَاحَةُ',
  focus: 'Write about Arab destinations in travel-magazine register: yastaqṭib and yubhir with a direct object, yatamayyaz bi- and yashtahir bi-, the present for description and the past for your visit — then recommend with idhā zurta … fa-lā budda min.',
  icon: 'FaMosque', iconSet: 'fa6',
});

const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const hs = (she) => ({ tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: she }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/أَنَّ لَا شَيْءَ/g, 'أَنَّهُ لَا شَيْءَ'));
const site = fix(D.site('P3-L04'));
const RH = [['Attracting and dazzling', 'yastaqṭib / yubhir + object'], ['Distinguished by, famous for', 'yatamayyaz bi- · yashtahir bi-'], ['General vs experience', 'present (truth) · past (visit)'], ['Recommend with a conditional', 'idhā zurta … fa-lā budda min']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P3-L04', {
  support: `• Core: six destination sentences with the tourism verbs and correct complements (website Core). Develop: add a present general description and a past visit. Stretch: a full magazine profile with a reported recommendation and a Type 1 close (website 100–110 words).
• Choose places with care and pride: Fez (al-Qarawiyyīn, founded by Fāṭima al-Fihriyya in 859 CE), Petra (one of the New Seven Wonders, 2007), Marrakesh, Cairo’s pyramids. Invite students to profile a place linked to their own family heritage.
• Agreement trap: city names are feminine (تَسْتَقْطِبُ مَرَّاكُشُ · تَتَمَيَّزُ فَاسُ), and many are diptotes — no tanwīn (زُرْتُ فَاسَ · فِي مَرَّاكُشَ).
• Grammar links: superlatives min afʿal (P3-L01) · past narrative (P3-L03) · Type 1 (P1-L03) · reported speech (P2-L02).`,
  teach: 'Tourism verbs + complements, place-name agreement, tense by purpose, magazine register.',
  wedo: 'Match tourism pictures, build a destination profile, sort the complements.',
  next: { nextCode: 'P3-L05', nextTitle: 'Sustainable Tourism — The Ethics and Impact of Travel', nextAr: 'السِّيَاحَةُ المُسْتَدَامَةُ' },
  objectives: ['Name destination, heritage and tourism vocabulary.', 'Use yastaqṭib, yubhir and yastaḥiqq al-ziyāra to say what makes a place special.', 'Move between the present (description), the past (a visit) and a Type 1 recommendation.', 'Write a travel-magazine destination profile.'],
  rulesAr: 'أَفْعَالُ السِّيَاحَةِ وَأُسْلُوبُ المَجَلَّةِ',
  ruleEx: [['تَسْتَقْطِبُ الأَهْرَامُ مَلَايِينَ السُّيَّاحِ', 'تُبْهِرُ البَتْرَاءُ زُوَّارَهَا'], ['تَتَمَيَّزُ فَاسُ بِأَزِقَّتِهَا الضَّيِّقَةِ', 'تَشْتَهِرُ بِأَقْدَمِ جَامِعَةٍ فِي العَالَمِ'], ['تُعَدُّ فَاسُ مِنْ أَعْرَقِ المُدُنِ', 'زُرْتُ فَاسَ وَأَدْرَكْتُ سِحْرَهَا'], ['إِذَا زُرْتَ المَغْرِبَ، فَلَا بُدَّ مِنْ زِيَارَةِ فَاسَ']],
  doNow: {
    questions: [
      q('What does وِجْهَةٌ سِيَاحِيَّةٌ mean?', ['a tourist destination', 'a tourist guide', 'a souvenir'], 'Prepared at home (P3-L03).'),
      q('What does مَعْلَمٌ تُرَاثِيٌّ mean?', ['a heritage landmark', 'a museum guide', 'a hotel'], 'Prepared at home (P3-L03).'),
      q('What does يَسْتَقْطِبُ mean?', ['it attracts', 'it is famous for', 'it amazes'], 'Prepared at home (P3-L03).'),
      q('Complete the Type 2: لَوْ لَمْ أُسَافِرْ، ___ فَهِمْتُ الثَّقَافَةَ.', ['لَمَا', 'سَمَا', 'لَنْ'], 'P3-L03: law lam … lamā.'),
      q('Choose the accurate reaction.', ['فَاقَ المَكَانُ تَوَقُّعَاتِي.', 'فَاقَ المَكَانُ عَلَى تَوَقُّعَاتِي.', 'فَاقَ المَكَانُ بِتَوَقُّعَاتِي.'], 'P3-L03: fāqa + direct object.'),
    ],
    keyIdea: { text: 'Two verbs take a direct object, two take bi-. Learn each with its partner.', ar: '{w|تَسْتَقْطِبُ السُّيَّاحَ} · {w|تُبْهِرُ زُوَّارَهَا} · {k|تَتَمَيَّزُ بِـ} · {k|تَشْتَهِرُ بِـ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P3-L03. Questions 4–5 retrieve the negative Type 2 and fāqa + object (P3-L03) — today’s profiles end with a visit and a reaction.',
  },
  routes: {
    core: ['I can name 8 destination and heritage words.', 'I can use yastaqṭib / yubhir with an object.'],
    develop: ['I can use yatamayyaz bi- and yashtahir bi-.', 'I can describe in the present and narrate a visit in the past.'],
    stretch: ['I can recommend with idhā … fa-lā budda min.', 'I can write a magazine profile.'],
  },
  bridge: [
    { ar: 'سَائِحٌ · سِيَاحَةٌ', urdu: 'سیاح · سیاحت', tr: 'sayyāh · siyāhat', en: 'a tourist · tourism' },
    { ar: 'يَشْتَهِرُ · مَشْهُورٌ', urdu: 'مشہور', tr: 'mashhūr', en: 'is famous · famous' },
    { ar: 'يَتَمَيَّزُ · مُمْتَازٌ', urdu: 'ممتاز', tr: 'mumtāz', en: 'stands out · distinguished' },
    { ar: 'آثَارٌ', urdu: 'آثار', tr: 'āsār', en: 'remains, ruins (آثارِ قدیمہ)' },
    { ar: 'عَجَائِبُ', urdu: 'عجائب', tr: 'ajāib', en: 'wonders (عجائب گھر = museum!)' },
  ],
  bridgeNotes: 'URDU BRIDGE: سیاح، سیاحت، مشہور، ممتاز، آثار and عجائب are all shared — the travel-magazine words are already familiar. Fun fact: Urdu عجائب گھر (“house of wonders”) means a museum; Arabic says مَتْحَفٌ.',
  core: ['وِجْهَةٌ سِيَاحِيَّةٌ', 'مَعْلَمٌ تُرَاثِيٌّ', 'مَوْقِعٌ لِلتُّرَاثِ العَالَمِيِّ', 'مَدِينَةٌ قَدِيمَةٌ', 'سُوقٌ شَعْبِيٌّ', 'آثَارٌ', 'يَسْتَقْطِبُ', 'يُبْهِرُ', 'يَتَمَيَّزُ بِـ', 'يَشْتَهِرُ بِـ', 'يُعَدُّ مِنْ', 'لَا بُدَّ مِنْ زِيَارَةِ'],
  forms: {
    'وِجْهَةٌ سِيَاحِيَّةٌ': sp('وِجْهَاتٌ سِيَاحِيَّةٌ'), 'مَعْلَمٌ تُرَاثِيٌّ': sp('مَعَالِمُ تُرَاثِيَّةٌ'), 'مَوْقِعٌ لِلتُّرَاثِ العَالَمِيِّ': sp('مَوَاقِعُ لِلتُّرَاثِ العَالَمِيِّ'),
    'مَدِينَةٌ قَدِيمَةٌ': sp('مُدُنٌ قَدِيمَةٌ'), 'سُوقٌ شَعْبِيٌّ': sp('أَسْوَاقٌ شَعْبِيَّةٌ'), 'آثَارٌ': { tag: 'sg · pl', forms: [{ l: 'sg.', ar: 'أَثَرٌ' }] },
    'مَنْطِقَةٌ طَبِيعِيَّةٌ مَحْمِيَّةٌ': sp('مَنَاطِقُ طَبِيعِيَّةٌ مَحْمِيَّةٌ'), 'مَتْحَفٌ وَطَنِيٌّ': sp('مَتَاحِفُ وَطَنِيَّةٌ'),
    'زُوَّارٌ': { tag: 'm · f · pl', forms: [{ l: 'f.', ar: 'زَائِرَةٌ' }, { l: 'm. sg.', ar: 'زَائِرٌ' }] },
    'يَسْتَقْطِبُ': hs('تَسْتَقْطِبُ'), 'يُبْهِرُ': hs('تُبْهِرُ'), 'يَتَمَيَّزُ بِـ': hs('تَتَمَيَّزُ بِـ'), 'يَشْتَهِرُ بِـ': hs('تَشْتَهِرُ بِـ'), 'يُعَدُّ مِنْ': hs('تُعَدُّ مِنْ'),
  },
  vocabNotes: {
    0: 'Destinations and heritage: the nouns of a travel profile. مَوْقِعٌ لِلتُّرَاثِ العَالَمِيِّ = a UNESCO World Heritage Site (Fez’s medina and Petra are both on the list).',
    1: 'Tourism verbs: يَسْتَقْطِبُ (Form X) and يُبْهِرُ (Form IV) take a DIRECT object; يَتَمَيَّزُ and يَشْتَهِرُ are fixed with بِـ. With a city as subject, use ta-: تَسْتَقْطِبُ مَرَّاكُشُ.',
    2: 'The tourism industry: words for the economics of travel — useful for the next lesson on sustainable tourism.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · tourism verbs and their complements (website rules 1–2 + table) · Core', title: 'Object — or bi-?', ar: 'الفِعْلُ وَمُتَمِّمُهُ',
      cols: [{ label: 'Verb', w: 2.2, size: 22 }, { label: 'Form', w: 1.3 }, { label: 'Partner', w: 2.0 }, { label: 'Example (website)', w: 6.83, size: 19 }],
      rows: [
        { core: true, cells: ['{w|يَسْتَقْطِبُ}', 'X', 'direct object', 'تَسْتَقْطِبُ مَرَّاكُشُ {w|مَلَايِينَ} السُّيَّاحِ سَنَوِيًّا.'] },
        { core: true, cells: ['{w|يُبْهِرُ}', 'IV', 'direct object', 'تُبْهِرُ البَتْرَاءُ {w|زُوَّارَهَا}.'] },
        { core: true, cells: ['{k|يَتَمَيَّزُ}', 'V', 'bi-', 'تَتَمَيَّزُ فَاسُ {k|بِأَزِقَّتِهَا} الضَّيِّقَةِ.'] },
        { core: true, cells: ['{k|يَشْتَهِرُ}', 'VIII', 'bi-', 'تَشْتَهِرُ {k|بِأَقْدَمِ} جَامِعَةٍ فِي العَالَمِ.'] },
        { cells: ['{m|يَزْخَرُ}', 'I', 'bi-', 'تَزْخَرُ المَدِينَةُ {m|بِالمَعَالِمِ} التُّرَاثِيَّةِ.'] },
      ],
      ltr: true,
      foot: 'Website common error: bi- after yastaqṭib / yubhir ✗ — or no bi- after yatamayyaz / yashtahir ✗.',
      notes: `GRAMMAR PART 1 — website rules “Attracting and dazzling” and “Distinguished by, famous for”, the website table and teaching point 1. Row 5 (يَزْخَرُ بِـ = is rich in, teems with) is from the website sorter and live builder.
Website mistakes 1–3: تَسْتَقْطِبُ … بِمَلَايِينِ ✗ · تَتَمَيَّزُ … أَزِقَّتَهَا ✗ · تُبْهِرُ … بِزُوَّارِهَا ✗.
Careful: يُبْهِرُ CAN be followed by bi- for the MEANS (تُبْهِرُ زُوَّارَهَا بِأَلْوَانِ المَدَابِغِ = dazzles its visitors WITH the colours) — the person dazzled is always the direct object.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · agreement with place names (website listening, reading and patterns) · Core / Develop', title: 'Fez attracts — she attracts', ar: 'مُطَابَقَةُ أَسْمَاءِ الأَمَاكِنِ',
      cols: [{ label: 'Place', w: 2.4 }, { label: 'Treated as', w: 2.4 }, { label: 'Sentence', w: 5.6, size: 19 }, { label: 'Note', w: 1.93 }],
      rows: [
        { core: true, cells: ['Fez · Marrakesh (cities)', 'she', '{k|تَسْتَقْطِبُ} مَرَّاكُشُ مَلَايِينَ السُّيَّاحِ.', 'no tanwīn'] },
        { core: true, cells: ['Petra', 'she', '{k|تُبْهِرُ} البَتْرَاءُ زُوَّارَهَا.', 'al- + f.'] },
        { cells: ['the pyramids (pl.)', 'she', '{k|تَسْتَقْطِبُ} الأَهْرَامُ مَلَايِينَ السُّيَّاحِ.', 'non-human pl.'] },
        { cells: ['Morocco · Jordan', 'he', '{w|يَسْتَقْطِبُ} المَغْرِبُ السُّيَّاحَ.', 'countries with al-'] },
        { cells: ['Egypt', 'she', '{k|تَتَمَيَّزُ} مِصْرُ بِآثَارِهَا.', 'no tanwīn'] },
      ],
      ltr: true,
      foot: 'Diptotes: zurtu fāsa · fī marrākusha · min miṣra — no tanwīn, and -a for the genitive.',
      notes: `GRAMMAR PART 2 — agreement drawn from the website texts: تَسْتَقْطِبُ مَرَّاكُشُ (pattern 1) · تُبْهِرُ البَتْرَاءُ (rule 1) · تَسْتَقْطِبُ الأَهْرَامُ (mistake 1) · المَغْرِبُ / الأُرْدُنُّ.
Most city names are feminine. Countries with al- are usually masculine (المَغْرِبُ · الأُرْدُنُّ · العِرَاقُ); مِصْرُ is feminine.
Diptote place names (مَمْنُوعٌ مِنَ الصَّرْفِ): فَاسُ · مَرَّاكُشُ · مِصْرُ · مَكَّةُ — no tanwīn; after a preposition they take -a: فِي مَرَّاكُشَ · مِنْ مِصْرَ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · match the tense to the purpose (website rules 3–4 + teaching point 2) · Develop', title: 'Describe · remember · recommend', ar: 'الوَصْفُ · التَّجْرِبَةُ · التَّوْصِيَةُ',
      cards: [
        { chip: 'PRESENT · DESCRIBE · CORE', color: '1D5FBF', head: 'تُعَدُّ … مِنْ', big: 'تُعَدُّ فَاسُ مِنْ أَعْرَقِ المُدُنِ العَرَبِيَّةِ.', en: 'Fez is considered one of the most ancient Arab cities.', clue: 'General truth.' },
        { chip: 'PAST · YOUR VISIT · DEVELOP', color: 'C77700', head: 'زُرْتُ … أَدْرَكْتُ', big: 'زُرْتُ فَاسَ قَبْلَ عَامَيْنِ، وَأَدْرَكْتُ سِحْرَهَا.', en: 'I visited Fez two years ago and realised its magic.', clue: 'Your experience.' },
        { chip: 'TYPE 1 · RECOMMEND · STRETCH', color: '1E6B52', head: 'إِذَا زُرْتَ … فَلَا بُدَّ', big: 'إِذَا زُرْتَ المَغْرِبَ، فَلَا بُدَّ مِنْ زِيَارَةِ فَاسَ.', en: 'If you visit Morocco, you must visit Fez.', clue: 'fa- before lā budda.' },
      ],
      error: { text: 'Website mistake 1: yastaqṭib takes a direct object.', pairs: [['تَسْتَقْطِبُ الأَهْرَامُ مَلَايِينَ السُّيَّاحِ', 'تَسْتَقْطِبُ الأَهْرَامُ بِمَلَايِينِ السُّيَّاحِ']] },
      notes: `GRAMMAR PART 3 — website rules “General vs experience” and “Recommend with a conditional”, teaching point “Match the tense to the purpose”.
Card 3: when the result of idhā is NOT a sa- verb (لَا بُدَّ مِنْ · a command · a nominal sentence), it takes fa-: فَلَا بُدَّ مِنْ زِيَارَةِ … · فَزُرْ … · فَهِيَ تَجْرِبَةٌ فَرِيدَةٌ.
لَا بُدَّ مِنْ + verbal noun in the genitive: لَا بُدَّ مِنْ زِيَارَةِ / قَضَاءِ / تَجْرِبَةِ …`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · travel-magazine register (website reading and writing model) · Stretch', title: 'Sound like a travel magazine', ar: 'أُسْلُوبُ المَجَلَّةِ السِّيَاحِيَّةِ',
      cols: [{ label: 'Tool', w: 2.6 }, { label: 'Example (website texts)', w: 7.0, size: 19 }, { label: 'Structure', w: 2.73 }],
      rows: [
        { core: true, cells: ['one of the most …', 'تُعَدُّ البَتْرَاءُ {p|مِنْ أَشْهَرِ} الوِجْهَاتِ السِّيَاحِيَّةِ.', 'min + afʿal + pl.'] },
        { cells: ['passive', 'وَقَدِ {e|اخْتِيرَتْ} وَاحِدَةً مِنْ عَجَائِبِ الدُّنْيَا الجَدِيدَةِ.', 'passive past'] },
        { cells: ['relative clause', 'تَشْتَهِرُ بِالخَزْنَةِ {m|الَّتِي} تَظْهَرُ فَجْأَةً.', 'allatī'] },
        { cells: ['the senses', 'تُبْهِرُ زُوَّارَهَا {w|بِأَلْوَانِ} المَدَابِغِ {w|وَرَوَائِحِ} التَّوَابِلِ.', 'bi- + iḍāfa'] },
        { core: true, cells: ['the close', 'فَهِيَ {k|تَجْرِبَةٌ فَرِيدَةٌ لَا تُنْسَى}.', 'fa-hiya + noun'] },
      ],
      ltr: true,
      foot: 'A magazine profile moves from the big picture (yuʿaddu min ashhar …) to the senses (colours, smells) to a personal close.',
      notes: `GRAMMAR PART 4 — register tools from the website reading (Petra) and writing model (Fez): min + afʿal + plural (مِنْ أَعْرَقِ المُدُنِ · مِنْ أَشْهَرِ الوِجْهَاتِ — P3-L01), the passive اخْتِيرَتْ (was chosen), a relative clause, sensory detail and a memorable close.
Accuracy: Petra was named one of the New Seven Wonders of the World in 2007; al-Qarawiyyīn (Fez, 859 CE) is often described as the oldest university still operating.
Stretch: write one sentence with each tool about a destination of your choice.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me write a destination profile',
    steps: [
      { head: 'Big picture', ar: '{p|تُعَدُّ} … {p|مِنْ أَعْرَقِ} … {w|وَتَسْتَقْطِبُ}', think: 'Present.' },
      { head: 'Features', ar: '{k|تَتَمَيَّزُ بِـ} … {k|وَتَشْتَهِرُ بِـ} …', think: 'bi-!' },
      { head: 'My visit', ar: '{e|زُرْتُ} … {e|وَأَدْرَكْتُ أَنَّهُ} …', think: 'Past.' },
      { head: 'Recommend', ar: '{m|إِذَا زُرْتَ} … {m|فَلَا بُدَّ مِنْ} …', think: 'fa-.' },
    ],
    legend: ['p', 'w', 'k', 'e', 'm'], legendLabels: { p: 'MAGAZINE REGISTER', w: 'DIRECT OBJECT', k: 'BI-', e: 'PAST VISIT', m: 'RECOMMENDATION' },
    model: '{p|تُعَدُّ} مَدِينَةُ فَاسَ {p|مِنْ أَعْرَقِ} المُدُنِ العَرَبِيَّةِ، {w|وَتَسْتَقْطِبُ} آلَافَ السُّيَّاحِ سَنَوِيًّا. {k|تَتَمَيَّزُ} مَدِينَتُهَا القَدِيمَةُ {k|بِأَزِقَّتِهَا} الضَّيِّقَةِ، {k|وَتَشْتَهِرُ بِأَقْدَمِ} جَامِعَةٍ فِي العَالَمِ. {e|زُرْتُ} فَاسَ قَبْلَ عَامَيْنِ، {e|وَأَدْرَكْتُ أَنَّهُ} لَا شَيْءَ يُعَوِّضُ تَجْرِبَةَ التَّجَوُّلِ فِي أَزِقَّتِهَا. {m|إِذَا زُرْتَ} المَغْرِبَ، {m|فَلَا بُدَّ مِنْ} زِيَارَةِ فَاسَ.',
    modelEn: 'The city of Fez is considered one of the most ancient Arab cities, and it attracts thousands of tourists every year. Its old city is distinguished by its narrow alleys, and it is famous for the oldest university in the world. I visited Fez two years ago and realised that nothing replaces the experience of wandering its alleys. If you visit Morocco, you must visit Fez.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Big picture in the present: tuʿaddu … min aʿraqi. Fez is a city → ta-: tastaqṭibu. Features need BI-. Now my visit — switch to the past: zurtu, adraktu anna-hu. Close with a recommendation: idhā zurta … FA-lā budda min.”',
  },
  patternEn: ['Marrakesh attracts millions of tourists every year', 'Fez stands out for its alleys and is famous for the oldest university', 'if you visit Morocco, you must visit Fez'],
  gameKey: 'P3-L04',
  game: {
    title: 'What do tourists do? Match the picture',
    pick: [0, 1, 4],
    en: ['Tourists visit the historical landmarks.', 'The region is famous for its beaches.', 'The tourist tries the local food.'],
    icons: [[['fa6', 'FaLandmark', '1D5FBF'], ['fa6', 'FaCamera', 'C77700']], [['fa6', 'FaUmbrellaBeach', 'C0386B']], [['fa6', 'FaUtensils', '1E6B52']]],
    labels: ['historical landmarks', 'famous beaches', 'local food'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Then upgrade each to magazine register: يَزُورُ السُّيَّاحُ المَعَالِمَ → تَسْتَقْطِبُ المَعَالِمُ التَّارِيخِيَّةُ آلَافَ الزُّوَّارِ · تَشْتَهِرُ المِنْطَقَةُ بِالشَّوَاطِئِ → تَتَمَيَّزُ المِنْطَقَةُ بِشَوَاطِئِهَا الذَّهَبِيَّةِ · يُجَرِّبُ السَّائِحُ الطَّعَامَ → لَا بُدَّ مِنْ تَجْرِبَةِ الطَّعَامِ المَحَلِّيِّ.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build a destination profile (website live builder)', title: 'Attraction + feature + recommendation', ar: 'ابْنِ مَلَفًّا سِيَاحِيًّا',
      cols: [{ label: '1 · Attraction', w: 4.0, size: 16 }, { label: '2 · Distinguishing feature', w: 4.1, size: 16 }, { label: '3 · Visit / recommendation', w: 4.23, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Then replace المَدِينَة with a real place name.',
      notes: `WE DO (3 min) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Core: read row 1 across. Develop: replace المَدِينَةُ with فَاسُ / مَرَّاكُشُ / البَتْرَاءُ and check the agreement. Stretch: change column 3 row 2 to a real country (إِذَا زُرْتَ الأُرْدُنَّ، فَلَا بُدَّ مِنْ …).`,
    },
  ],
  sorterTitle: 'A direct object, bi- — or recommendation / register?',
  sorterCats: ['direct object', 'bi-', 'recommend / register'],
  sorterNotes: 'Then use one card from each column in a sentence about a real destination: تَسْتَقْطِبُ … · تَشْتَهِرُ بِـ … · إِذَا زُرْتَ …، فَلَا بُدَّ مِنْ …',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('يَسْتَقْطِبُ', 'yastaqṭib').replace('بِـ with يَتَمَيَّزُ and يَشْتَهِرُ', 'bi- with yatamayyaz and yashtahir') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; one grammar fix (أَدْرَكْتُ أَنَّ لَا شَيْءَ → أَنَّهُ لَا شَيْءَ); rule headings and formulas in English and transliteration; sorter headings in transliteration; the agreement and register tables are teacher-built from the website texts. All other website items, including the visual game, are used as published.',
  hints: ['yastaqṭib + bi-?', 'yatamayyaz + object?', 'yubhir + bi- for the person?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: tuʿaddu min · tatamayyazu bi- · tashtahiru bi-.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and note which sentences are present (description) and which are past (the visit).',
  gloss: [
    ['تُعَدُّ مَدِينَةُ فَاسَ المَغْرِبِيَّةُ مِنْ أَعْرَقِ المُدُنِ العَرَبِيَّةِ. تَسْتَقْطِبُ آلَافَ السُّيَّاحِ سَنَوِيًّا بِتُرَاثِهَا المِعْمَارِيِّ الأَصِيلِ وَأَسْوَاقِهَا الحَيَّةِ.', 'The Moroccan city of Fez is considered one of the most ancient Arab cities. It attracts thousands of tourists every year with its authentic architectural heritage and lively souks.'],
    ['تَتَمَيَّزُ المَدِينَةُ القَدِيمَةُ بِأَزِقَّتِهَا الضَّيِّقَةِ، وَتَشْتَهِرُ بِأَقْدَمِ جَامِعَةٍ فِي العَالَمِ، جَامِعَةِ القَرَوِيِّينَ.', 'The old city is distinguished by its narrow alleys, and it is famous for the oldest university in the world, al-Qarawiyyīn.'],
    ['تُبْهِرُ زُوَّارَهَا بِأَلْوَانِ المَدَابِغِ الشَّهِيرَةِ. زُرْتُ فَاسَ قَبْلَ عَامَيْنِ، وَأَدْرَكْتُ أَنَّهُ لَا شَيْءَ يُمْكِنُهُ أَنْ يُعَوِّضَ تَجْرِبَةَ التَّجَوُّلِ فِيهَا.', 'It dazzles its visitors with the colours of its famous tanneries. I visited Fez two years ago, and I realised that nothing can replace the experience of wandering through it.'],
    ['وَأَشَارَ الدَّلِيلُ السِّيَاحِيُّ إِلَى أَنَّ أَفْضَلَ مَوْسِمٍ لِلزِّيَارَةِ هُوَ الرَّبِيعُ.', 'The tourist guide pointed out that the best season to visit is spring.'],
    ['إِذَا زُرْتَ المَغْرِبَ، فَلَا بُدَّ مِنْ زِيَارَةِ فَاسَ.', 'If you visit Morocco, you must visit Fez.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ وِجْهَةً عَرَبِيَّةً مُسْتَعْمِلًا «يَسْتَقْطِبُ» وَ«يَتَمَيَّزُ بِـ».' },
      { route: 'develop', ar: 'احْكِ عَنْ زِيَارَةٍ قُمْتَ بِهَا فِي المَاضِي.' },
      { route: 'stretch', ar: 'انْصَحْ زَائِرًا بِشَرْطٍ مِنَ النَّوْعِ الأَوَّلِ.' },
    ],
    stems: [
      { route: 'core', ar: 'تَسْتَقْطِبُ ______ آلَافَ السُّيَّاحِ، وَتَشْتَهِرُ بِمَعَالِمِهَا مِثْلِ ______ .' },
      { route: 'develop', ar: 'زُرْتُ ______ قَبْلَ ______ ، وَأَبْهَرَنِي ______ .' },
      { route: 'stretch', ar: 'إِذَا زُرْتَ ______ ، فَلَا بُدَّ مِنْ ______ .' },
    ],
    modelEn: ['Describe an Arab destination.', 'Fez attracts thousands of tourists; it stands out for its alleys and is famous for its ancient university.', 'And what do you advise a visitor?', 'I visited it and it dazzled me — and if you visit Morocco, you must visit Fez.'],
    notes: 'Website prompts and model. Pair task: “tourism ambassador” — each student promotes a destination for 30 seconds; the partner checks yastaqṭib + object and yashtahir + bi-. To a girl: صِفِي · مُسْتَعْمِلَةً · احْكِي · قُمْتِ · انْصَحِي.',
  },
  write: {
    core: { amount: '6 sentences', how: 'Website Core: six destination sentences with the tourism verbs and correct complements.' },
    develop: { amount: '60–80 words', how: 'Website Develop: add a present general description and a past visit sentence.' },
    stretch: { amount: '100–110 words', how: 'Website task: a magazine profile with the four tourism verbs, a past visit, a reported recommendation and a Type 1 close.' },
  },
  frames: {
    core: [
      { en: '… attracts thousands of tourists every year.', ar: 'تَسْتَقْطِبُ ______ آلَافَ السُّيَّاحِ سَنَوِيًّا.' },
      { en: 'The old city is distinguished by its …', ar: 'تَتَمَيَّزُ المَدِينَةُ القَدِيمَةُ بِأَزِقَّتِهَا وَ ______ .' },
      { en: 'It is famous for landmarks such as …', ar: 'تَشْتَهِرُ بِمَعَالِمِهَا مِثْلِ ______ .' },
      { en: 'The city dazzles its visitors with the beauty of …', ar: 'تُبْهِرُ المَدِينَةُ زُوَّارَهَا بِجَمَالِ ______ .' },
    ],
    develop: [
      { en: '… is considered one of the most ancient Arab cities.', ar: 'تُعَدُّ ______ مِنْ أَعْرَقِ المُدُنِ العَرَبِيَّةِ.' },
      { en: 'I visited … and realised that …', ar: 'زُرْتُ ______ ، وَأَدْرَكْتُ أَنَّ ______ .' },
      { en: 'The guide pointed out that …', ar: 'أَشَارَ الدَّلِيلُ إِلَى أَنَّ ______ .' },
      { en: 'If you visit …, you must visit …', ar: 'إِذَا زُرْتَ ______ ، فَلَا بُدَّ مِنْ زِيَارَةِ ______ .' },
    ],
    bank: ['فَاسُ', 'مَرَّاكُشُ', 'البَتْرَاءُ', 'الأَهْرَامُ', 'أَسْوَاقِهَا الحَيَّةِ', 'جَامِعَةِ القَرَوِيِّينَ', 'الخَزْنَةِ', 'المَدَابِغِ الشَّهِيرَةِ', 'الرَّبِيعَ أَفْضَلُ مَوْسِمٍ', 'الصُّوَرَ لَا تُنْصِفُهَا', 'تَجْرِبَةٌ فَرِيدَةٌ', 'مَوْقِعٌ لِلتُّرَاثِ العَالَمِيِّ'],
  },
  stretch: [
    ['بِتُرَاثِهَا المِعْمَارِيِّ الأَصِيلِ', 'with its authentic architectural heritage'],
    ['وَمَبَانِيهَا الحَجَرِيَّةِ', 'and its stone buildings'],
    ['بِأَلْوَانِ المَدَابِغِ الشَّهِيرَةِ وَرَوَائِحِ التَّوَابِلِ', 'with the colours of the famous tanneries and the scents of spices'],
    ['لَا شَيْءَ يُعَوِّضُ تَجْرِبَةَ التَّجَوُّلِ فِي أَزِقَّتِهَا', 'nothing replaces the experience of wandering its alleys'],
    ['فَهِيَ تَجْرِبَةٌ فَرِيدَةٌ لَا تُنْسَى', 'for it is a unique, unforgettable experience'],
  ],
  modelEn: 'The Moroccan city of Fez is considered one of the most ancient Arab cities, and it attracts thousands of tourists every year with its authentic architectural heritage. Its old city is distinguished by its narrow alleys and stone buildings, and it is famous for the oldest university in the world, al-Qarawiyyīn. It dazzles its visitors with the colours of its famous tanneries and the scents of spices in its souks. I visited Fez two years ago, and I realised that nothing replaces the experience of wandering its alleys. The guide pointed out that spring is the best season to visit. So if you visit Morocco, you must visit Fez — it is a unique, unforgettable experience.',
  find: ['tastaqṭibu + object · tubhiru + object', 'tatamayyazu bi- · tashtahiru bi-', 'a past visit (zurtu · adraktu)', 'a reported tip + idhā … fa-lā budda min'],
  modelNotes: 'Website writing model. Evidence: تُعَدُّ … مِنْ أَعْرَقِ · تَسْتَقْطِبُ آلَافَ السُّيَّاحِ · تَتَمَيَّزُ … بِأَزِقَّتِهَا · تَشْتَهِرُ بِأَقْدَمِ · تُبْهِرُ زُوَّارَهَا · زُرْتُ … وَأَدْرَكْتُ أَنَّهُ · أَشَارَ الدَّلِيلُ إِلَى أَنَّ · إِذَا زُرْتَ …، فَلَا بُدَّ مِنْ.',
  selfCheck: [
    { route: 'core', text: 'yastaqṭib / yubhir have a direct object (no bi-).' },
    { route: 'core', text: 'yatamayyaz / yashtahir have bi-.' },
    { route: 'develop', text: 'My verbs agree with the place (tastaqṭibu fāsu · yastaqṭibu l-maghribu).' },
    { route: 'develop', text: 'Present for description, past for my visit.' },
    { route: 'stretch', text: 'My recommendation uses idhā … fa-lā budda min + a verbal noun.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['القَارَّاتِ', 'the continents'], ['المَنْحُوتَةِ', 'carved'], ['الصَّخْرِ الوَرْدِيِّ', 'the pink rock'], ['النَّبَطِيِّ', 'Nabataean'], ['اخْتِيرَتْ', 'it was chosen'],
    ['عَجَائِبِ الدُّنْيَا', 'the wonders of the world'], ['مِثَالِيًّا', 'ideal'], ['لَيْلًا', 'at night'], ['سَاحِرَةٌ', 'enchanting'], ['خَطَّطْتَ', 'you planned'],
  ],
  prep: {
    words: [['السِّيَاحَةُ المُسْتَدَامَةُ', 'sustainable tourism', '—'], ['الاكْتِظَاظُ السِّيَاحِيُّ', 'over-tourism', '—'], ['بَصْمَةٌ كَرْبُونِيَّةٌ', 'a carbon footprint', 'pl. بَصَمَاتٌ'], ['يُلْحِقُ الضَّرَرَ بِـ', 'he / it causes harm to', 'تُلْحِقُ she / it (f.)'], ['يَحْمِي التُّرَاثَ', 'he / it protects heritage', 'تَحْمِي she / it (f.)']],
    questionEn: 'Does tourism help a place, harm it — or both?',
    questionAr: 'أَعْتَقِدُ أَنَّ السِّيَاحَةَ ______ ، لٰكِنَّ ______ .',
    homework: {
      core: 'Write six destination sentences with yastaqṭib, yubhir, yatamayyaz bi- and yashtahir bi-.',
      develop: 'Add a present description and a past visit (60–80 words).',
      stretch: 'Website writing task: a 100–110-word travel-magazine profile of an Arab city or site.',
    },
    wordsSource: 'The five words come from the website P3-L05 vocabulary (sustainable tourism).',
  },
  remember: 'Remember: tastaqṭibu / tubhiru + an OBJECT · tatamayyazu / tashtahiru + BI- — cities are “she” — present to describe, past for your visit — and recommend with idhā zurta … fa-lā budda min.',
});

module.exports = { meta, slides };
