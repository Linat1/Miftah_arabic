'use strict';
/* D6-L05 · Comparing Countries — Global Connections and the Arab Diaspora — website: Pathways › Development › D6 › D6-L05 (diaspora verbs يَنْتَمِي إِلَى ·
 * يَتَكَيَّفُ مَعَ · يَحْتَفِظُ بِـ · يُوَازِنُ بَيْنَ; the synthetic comparative أَكْبَرُ مِنْ vs the analytical أَكْثَرُ تَنَوُّعًا مِنْ — never both; بَيْنَمَا and the balanced pair).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking and writing used as published; English added to the patterns and speaking
 * model. The website visual game (flags) repeats D6-L01, so it is skipped. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D6')({
  n: 5, fileTitle: 'Comparing_Countries_Arab_Diaspora', chip: 'Culture',
  title: 'Comparing Countries — Global Connections and the Arab Diaspora', arabic: 'مُقَارَنَةُ الدُّوَلِ — الرَّوَابِطُ العَالَمِيَّةُ وَالجَالِيَةُ العَرَبِيَّةُ',
  focus: 'Talk about belonging to two places: where you belong (أَنْتَمِي إِلَى), how you adapt (أَتَكَيَّفُ مَعَ), what you keep (أَحْتَفِظُ بِـ), how you balance (أُوَازِنُ بَيْنَ) — and compare two cities with ONE comparative at a time (أَكْبَرُ مِنْ · أَكْثَرُ هُدُوءًا مِنْ).',
  icon: 'FaEarthEurope', iconSet: 'fa6',
});

const site = D.site('D6-L05');
const vf = (she, past) => ({ tag: 'I · past', forms: [{ l: 'past', ar: past }, { l: 'I', ar: she }] });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D6-L05', {
  support: `• Core: the four diaspora verbs with their prepositions in six sentences about yourself / your family. Develop: one comparative of each type (أَصْغَرُ مِنْ · أَكْثَرُ هُدُوءًا مِنْ) and a contrast with بَيْنَمَا. Stretch: the website 80–90-word comparison closing with a balanced statement on dual identity.
• This topic IS many of our students’ lives (second generation in the UK, families from Pakistan, Somalia, Morocco, Egypt, Iraq …). Invite real examples, but never require anyone to share family history; a fictional family is always acceptable.
• Sensitivity: مُهَاجِرٌ (migrant) and لَاجِئٌ (refugee) are NOT synonyms (website). Speak about refugees with care — some students or families may have this experience.`,
  teach: 'Four verbs + prepositions; two comparatives, never mixed.',
  wedo: 'Sort verbs by preposition, fix the double comparative, then a second-generation voice.',
  next: { nextCode: 'D6-L06', nextTitle: 'Arabic Around the World — The Language’s Global Reach', nextAr: 'العَرَبِيَّةُ حَوْلَ العَالَمِ' },
  objectives: ['Use يَنْتَمِي إِلَى · يَتَكَيَّفُ مَعَ · يَحْتَفِظُ بِـ · يُوَازِنُ بَيْنَ.', 'Compare with أَفْعَلُ مِنْ (أَكْبَرُ مِنْ).', 'Compare with أَكْثَرُ / أَقَلُّ + accusative noun + مِنْ.', 'Describe dual identity in a balanced, non-simplified way.'],
  rulesAr: 'الانْتِمَاءُ وَالتَّكَيُّفُ وَالمُقَارَنَةُ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does جَالِيَةٌ عَرَبِيَّةٌ mean?', ['an Arab community abroad', 'an Arab country', 'Arab identity'], 'Prepared at home (D6-L04).'),
      q('What does الجِيلُ الثَّانِي mean?', ['the second generation', 'the second country', 'the second language'], 'Prepared at home (D6-L04).'),
      q('What does جُذُورٌ mean?', ['roots', 'branches', 'borders'], 'Prepared at home (D6-L04).'),
      q('Complete: يَتَسَامَحُ المُجْتَمَعُ ___ الاخْتِلَافِ.', ['مَعَ', 'بِـ', 'عَلَى'], 'D6-L04.'),
      q('Choose the accurate sentence.', ['تَتَمَسَّكُ الأُسْرَةُ بِتَقَالِيدِهَا.', 'تَتَمَسَّكُ الأُسْرَةُ عَلَى تَقَالِيدِهَا.', 'تَتَمَسَّكُ الأُسْرَةُ تَقَالِيدَهَا.'], 'D6-L02.'),
    ],
    keyIdea: { text: 'Four verbs tell a diaspora story: belong · adapt · keep · balance.', ar: 'أَنْتَمِي {k|إِلَى} · أَتَكَيَّفُ {e|مَعَ} · أَحْتَفِظُ {w|بِـ} · أُوَازِنُ {k|بَيْنَ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D6-L04. Questions 4–5 retrieve the D6 verb + preposition habit (D6-L04 · D6-L02).',
  },
  routes: {
    core: ['I can say where I and my family belong.', 'I can use the four verbs with their prepositions.'],
    develop: ['I can compare two cities with أَكْبَرُ مِنْ / أَكْثَرُ … مِنْ.', 'I can contrast home and school with بَيْنَمَا.'],
    stretch: ['I can describe dual identity in a balanced way.', 'I can explain مُهَاجِرٌ vs لَاجِئٌ.'],
  },
  bridge: [
    { ar: 'مُهَاجِرٌ / هِجْرَةٌ', urdu: 'مہاجر / ہجرت', tr: 'muhājir / hijrat', en: 'migrant / migration (also the Prophet’s Hijra)' },
    { ar: 'وَطَنٌ', urdu: 'وطن', tr: 'waṭan', en: 'homeland' },
    { ar: 'غُرْبَةٌ', urdu: 'غربت / پردیس', tr: 'pardēs', en: 'Urdu غربت: poverty · Arabic غُرْبَةٌ: being far from home' },
    { ar: 'حَنِينٌ', urdu: 'یاد / تڑپ', tr: 'yād', en: 'longing, nostalgia' },
    { ar: 'جِنْسِيَّةٌ مُزْدَوَجَةٌ', urdu: 'دوہری شہریت', tr: 'dohrī shahriyat', en: 'dual nationality' },
  ],
  bridgeNotes: 'URDU BRIDGE: مہاجر، ہجرت، وطن are shared (and الهِجْرَةُ النَّبَوِيَّةُ is the first Muslim migration). CAREFUL: Urdu غربت = poverty; Arabic غُرْبَةٌ = being a stranger far from home (the poor are فُقَرَاءُ).',
  core: ['جَالِيَةٌ عَرَبِيَّةٌ', 'مُهَاجِرٌ / مُهَاجِرَةٌ', 'لَاجِئٌ / لَاجِئَةٌ', 'الجِيلُ الثَّانِي', 'الانْتِمَاءُ', 'هُوِيَّةٌ مُزْدَوَجَةٌ', 'حَنِينٌ', 'يَنْتَمِي إِلَى', 'يَتَكَيَّفُ مَعَ', 'يَحْتَفِظُ بِـ', 'يُوَازِنُ بَيْنَ', 'أَكْثَرُ / أَقَلُّ مِنْ'],
  forms: {
    'مُهَاجِرٌ / مُهَاجِرَةٌ': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'مُهَاجِرُونَ' }] }, 'لَاجِئٌ / لَاجِئَةٌ': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'لَاجِئُونَ' }] },
    'مُوَاطِنٌ / مُوَاطِنَةٌ': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'مُوَاطِنُونَ' }] }, 'جَالِيَةٌ عَرَبِيَّةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'جَالِيَاتٌ عَرَبِيَّةٌ' }] },
    'يَنْتَمِي إِلَى': vf('أَنْتَمِي', 'اِنْتَمَى'), 'يَتَكَيَّفُ مَعَ': vf('أَتَكَيَّفُ', 'تَكَيَّفَ'), 'يَحْتَفِظُ بِـ': vf('أَحْتَفِظُ', 'اِحْتَفَظَ'), 'يُوَازِنُ بَيْنَ': vf('أُوَازِنُ', 'وَازَنَ'), 'يَشْعُرُ بِـ': vf('أَشْعُرُ', 'شَعَرَ'),
  },
  vocabNotes: {
    0: 'People and communities. Cards show the plural. مُهَاجِرٌ (moved to live elsewhere) ≠ لَاجِئٌ (left because of danger).',
    1: 'Belonging and identity: words for feelings and heritage — حَنِينٌ إِلَى الوَطَنِ (longing for the homeland).',
    2: 'Verbs and comparison: cards show I / past. The comparatives: أَكْبَرُ مِنْ OR أَكْثَرُ + noun + مِنْ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · the four diaspora verbs (website rule 1)', title: 'Belong, adapt, keep, balance', ar: 'أَنْتَمِي · أَتَكَيَّفُ · أَحْتَفِظُ · أُوَازِنُ',
      cols: [{ label: 'Verb + preposition', w: 3.0, size: 22 }, { label: 'Example (website)', w: 6.6, size: 22 }, { label: 'Meaning', w: 2.73 }],
      rows: [
        { core: true, cells: ['يَنْتَمِي {k|إِلَى}', P('أَنْتَمِي {k|إِلَى} ثَقَافَتَيْنِ.', 'I belong to two cultures.'), 'belongs to'] },
        { core: true, cells: ['يَتَكَيَّفُ {e|مَعَ}', P('تَكَيَّفَتْ أُمِّي {e|مَعَ} الحَيَاةِ هُنَا بِسُرْعَةٍ.', 'My mother adapted to life here quickly.'), 'adapts to'] },
        { core: true, cells: ['يَحْتَفِظُ {w|بِـ}', P('تَحْتَفِظُ الأُسَرُ {w|بِلُغَتِهَا}.', 'Families keep their language.'), 'keeps'] },
        { cells: ['يُوَازِنُ {k|بَيْنَ}', P('أُوَازِنُ {k|بَيْنَ} اللُّغَتَيْنِ وَالعَادَتَيْنِ.', 'I balance between the two languages and customs.'), 'balances'] },
        { cells: ['يَشْعُرُ {w|بِـ}', P('أَحْيَانًا أَشْعُرُ {w|بِالحَنِينِ}.', 'Sometimes I feel nostalgia.'), 'feels'] },
      ],
      ltr: true,
      foot: 'After the preposition the noun is genitive: إِلَى ثَقَافَتَيْنِ (dual) · بِلُغَتِهَا · مَعَ الحَيَاةِ.',
      notes: `GRAMMAR PART 1 — website rule “The four diaspora verbs” (each preposition is fixed and takes the genitive; يُوَازِنُ بَيْنَ is followed by two things joined with وَ). Website teaching point: “Four verbs, four prepositions … the whole arc of diaspora experience: where you belong, how you adjust, what you keep and how you hold both sides at once.”
Website mistakes: أَنْتَمِي مَعَ ✗ · تَحْتَفِظُ الأُسَرُ عَلَى ✗.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · two ways to compare — never both (website rules 2–4) · Develop / Stretch', title: 'Bigger than — or more peaceful than?', ar: 'المُقَارَنَةُ',
      cards: [
        { chip: 'aFʿAL · CORE', color: '1E6B52', head: 'أَكْبَرُ مِنْ · أَصْغَرُ مِنْ', big: 'لَنْدَنُ أَكْبَرُ مِنْ مَدِينَتِي.', en: 'London is bigger than my city.', clue: 'One word: akbar.' },
        { chip: 'aktharu + NOUN · DEVELOP', color: '1D5FBF', head: 'أَكْثَرُ هُدُوءًا مِنْ', big: 'مَدِينَتُنَا أَكْثَرُ هُدُوءًا مِنَ القَاهِرَةِ.', en: 'Our city is calmer than Cairo.', clue: 'Noun in -an.' },
        { chip: 'BALANCE · STRETCH', color: '6B4C9A', head: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى', big: 'مِنْ نَاحِيَةٍ أَشْعُرُ بِالحَنِينِ، وَمِنْ نَاحِيَةٍ أُخْرَى أُحِبُّ حَيَاتِي هُنَا.', en: 'On one hand I feel nostalgia; on the other, I love my life here.', clue: 'Both sides.' },
      ],
      error: { text: 'Website mistake: only one comparative at a time.', pairs: [['أَكْبَرُ مِنْ غَيْرِهِ', 'أَكْثَرُ أَكْبَرُ مِنْ غَيْرِهِ']] },
      notes: `GRAMMAR PART 2 — website rules “The synthetic comparative” (أَفْعَل + مِنْ + genitive; invariable, no article), “The analytical comparative” (أَكْثَرُ / أَقَلُّ + accusative noun + مِنْ, when there is no أَفْعَل form) and “Contrast and balance”. Website teaching point: “Do not double the comparative.”
Useful pairs: أَكْبَرُ / أَصْغَرُ · أَحَرُّ / أَبْرَدُ · أَكْثَرُ تَنَوُّعًا · أَقَلُّ ازْدِحَامًا.`,
    },
  ],
  quick: [0, 2, 4, 5],
  rest: [1, 3, 6, 7],
  ido: {
    title: 'Watch me describe living between two places',
    steps: [
      { head: 'Belong', ar: 'أَنْتَمِي {k|إِلَى} ثَقَافَتَيْنِ', think: 'intamā + ilā.' },
      { head: 'Contrast', ar: 'نَتَحَدَّثُ العَرَبِيَّةَ، {w|بَيْنَمَا} أَدْرُسُ بِالإِنْجِلِيزِيَّةِ', think: 'Home vs school.' },
      { head: 'Compare', ar: 'أَصْغَرُ مِنْ · {e|أَكْثَرُ هُدُوءًا} مِنْ', think: 'One at a time.' },
      { head: 'Balance', ar: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', think: 'Both feelings.' },
    ],
    legend: ['k', 'w', 'e'], legendLabels: { k: 'PREPOSITION', w: 'CONTRAST', e: 'COMPARATIVE' },
    model: 'أَنَا مِنَ الجِيلِ الثَّانِي فِي الجَالِيَةِ العَرَبِيَّةِ. أَنْتَمِي {k|إِلَى} ثَقَافَتَيْنِ، وَأُوَازِنُ {k|بَيْنَهُمَا} كُلَّ يَوْمٍ. فِي البَيْتِ نَتَحَدَّثُ العَرَبِيَّةَ، {w|بَيْنَمَا} أَدْرُسُ بِالإِنْجِلِيزِيَّةِ. مَدِينَتُنَا {e|أَصْغَرُ مِنَ} القَاهِرَةِ، وَلٰكِنَّهَا {e|أَكْثَرُ هُدُوءًا} مِنْهَا.',
    modelEn: 'I am from the second generation of the Arab community. I belong to two cultures and balance between them every day. At home we speak Arabic, whereas I study in English. Our city is smaller than Cairo, but it is calmer.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Which preposition? Do I have an aFʿAL word (akbar, aṣghar)? If not, aktharu + noun in -an.” Offer students their own family’s cities (Lahore, Mogadishu, Casablanca, Cairo …).',
  },
  patternEn: ['I belong to two cultures', 'London is bigger than my city', 'more diverse than others'],
  sorterNotes: 'Then make one sentence about yourself for each column.',
  patch: {
    speaking: {
      model: [
        ['A', 'قَارِنْ بَيْنَ مَدِينَتِكَ وَمَدِينَةٍ عَرَبِيَّةٍ.', 'Compare your city with an Arab city.'],
        ['B', 'مَدِينَتِي أَصْغَرُ مِنَ القَاهِرَةِ، وَلٰكِنَّهَا أَكْثَرُ هُدُوءًا مِنْهَا.', 'My city is smaller than Cairo, but it is calmer.'],
        ['A', 'وَكَيْفَ تَصِفُ الهُوِيَّةَ المُزْدَوَجَةَ؟', 'And how do you describe dual identity?'],
        ['B', 'أَنْتَمِي إِلَى ثَقَافَتَيْنِ وَأُوَازِنُ بَيْنَهُمَا. مِنْ نَاحِيَةٍ أَشْعُرُ بِالحَنِينِ، وَمِنْ نَاحِيَةٍ أُخْرَى أُحِبُّ حَيَاتِي هُنَا.', 'I belong to two cultures and balance between them. On one hand I feel nostalgia; on the other, I love my life here.'],
      ],
    },
  },
  patchNote: 'English added to the patterns and speaking model; the website flag-based visual game repeats D6-L01 and is skipped.',
  hints: ['intamā + which preposition?', 'Two comparatives? Choose one!', 'iḥtafaẓa + which preposition?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 5.\nOne speaker, two places.',
  listenRoutes: 'Core: questions 1, 3 and 5. Develop / Stretch: all 5 — and note each diaspora verb with its preposition.',
  gloss: [
    ['أَنَا مِنَ الجِيلِ الثَّانِي فِي الجَالِيَةِ العَرَبِيَّةِ هُنَا. وُلِدْتُ فِي هٰذِهِ المَدِينَةِ، وَلٰكِنَّ أُسْرَتِي جَاءَتْ مِنَ المَغْرِبِ قَبْلَ ثَلَاثِينَ سَنَةً.', 'I am from the second generation of the Arab community here. I was born in this city, but my family came from Morocco thirty years ago.'],
    ['أَنْتَمِي إِلَى ثَقَافَتَيْنِ، وَأُوَازِنُ بَيْنَهُمَا كُلَّ يَوْمٍ. فِي البَيْتِ نَتَحَدَّثُ العَرَبِيَّةَ، بَيْنَمَا أَدْرُسُ وَأَعْمَلُ بِالإِنْجِلِيزِيَّةِ.', 'I belong to two cultures and balance between them every day. At home we speak Arabic, whereas I study and work in English.'],
    ['تَحْتَفِظُ أُمِّي بِعَادَاتِهَا وَبِمَطْبَخِهَا، وَقَدْ تَكَيَّفَتْ مَعَ الحَيَاةِ هُنَا بِسُرْعَةٍ.', 'My mother keeps her customs and her cooking, and she adapted to life here quickly.'],
    ['أَحْيَانًا أَشْعُرُ بِالحَنِينِ إِلَى بَلَدِ أُسْرَتِي، وَمِنْ نَاحِيَةٍ أُخْرَى أُحِبُّ حَيَاتِي هُنَا كَثِيرًا.', 'Sometimes I feel longing for my family’s country, and on the other hand I love my life here very much.'],
    ['لَيْسَتِ الهُوِيَّةُ المُزْدَوَجَةُ مُشْكِلَةً؛ هِيَ ثَرْوَةٌ فِي رَأْيِي.', 'Dual identity is not a problem — in my opinion it is a richness.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'قَارِنْ بَيْنَ مَدِينَتِكَ وَمَدِينَةٍ عَرَبِيَّةٍ. اِسْتَعْمِلْ أَفْعَل وَأَكْثَرُ مِنْ.' },
      { route: 'develop', ar: 'مَاذَا تَحْتَفِظُ بِهِ الأُسَرُ عِنْدَمَا تَنْتَقِلُ إِلَى بَلَدٍ جَدِيدٍ؟' },
      { route: 'stretch', ar: 'كَيْفَ تَصِفُ الهُوِيَّةَ المُزْدَوَجَةَ دُونَ تَبْسِيطٍ؟' },
    ],
    stems: [
      { route: 'core', ar: 'مَدِينَتِي ______ مِنْ ______ ، وَلٰكِنَّهَا أَكْثَرُ ______ مِنْهَا.' },
      { route: 'develop', ar: 'تَحْتَفِظُ الأُسَرُ بِـ ______ ، وَتَتَكَيَّفُ مَعَ ______ .' },
      { route: 'stretch', ar: 'مِنْ نَاحِيَةٍ ______ ، وَمِنْ نَاحِيَةٍ أُخْرَى ______ .' },
    ],
    modelEn: ['Compare your city with an Arab city.', 'My city is smaller than Cairo, but it is calmer.'],
    notes: 'Website prompts and model. Students may compare their UK city with their family’s city (Arab or not). To a girl: قَارِنِي · تَصِفِينَ.',
  },
  write: {
    core: { amount: '6 sentences', how: 'The four diaspora verbs with their prepositions, about you or a family.' },
    develop: { amount: '60–70 words', how: 'Add one comparative of each type and a contrast with بَيْنَمَا.' },
    stretch: { amount: '80–90 words', how: 'Website task: three verbs · two comparatives · بَيْنَمَا · a balanced statement on dual identity.' },
  },
  frames: {
    core: [
      { en: 'My family came from … years ago.', ar: 'جَاءَتْ أُسْرَتِي مِنْ ______ قَبْلَ ______ .' },
      { en: 'I belong to …', ar: 'أَنْتَمِي إِلَى ______ .' },
      { en: 'We keep …', ar: 'نَحْتَفِظُ بِـ ______ .' },
      { en: 'My mother adapted to …', ar: 'تَكَيَّفَتْ أُمِّي مَعَ ______ .' },
    ],
    develop: [
      { en: 'At home we speak …, whereas …', ar: 'فِي البَيْتِ نَتَحَدَّثُ ______ ، بَيْنَمَا ______ .' },
      { en: 'My city is bigger / smaller than …', ar: 'مَدِينَتِي أَكْبَرُ / أَصْغَرُ مِنْ ______ .' },
      { en: '… is calmer / more diverse than …', ar: '______ أَكْثَرُ هُدُوءًا / تَنَوُّعًا مِنْ ______ .' },
      { en: 'On one hand …, on the other hand …', ar: 'مِنْ نَاحِيَةٍ ______ ، وَمِنْ نَاحِيَةٍ أُخْرَى ______ .' },
    ],
    bank: ['أَنْتَمِي إِلَى', 'أَتَكَيَّفُ مَعَ', 'أَحْتَفِظُ بِـ', 'أُوَازِنُ بَيْنَ', 'أَشْعُرُ بِالحَنِينِ', 'الجِيلُ الثَّانِي', 'هُوِيَّةٌ مُزْدَوَجَةٌ', 'أَكْبَرُ مِنْ', 'أَصْغَرُ مِنْ', 'أَكْثَرُ … مِنْ', 'بَيْنَمَا', 'مِنْ نَاحِيَةٍ'],
  },
  stretch: [
    ['وُلِدْتُ فِي هٰذِهِ المَدِينَةِ', 'I was born in this city'],
    ['لَيْسَتِ الهُوِيَّةُ المُزْدَوَجَةُ مُشْكِلَةً؛ هِيَ ثَرْوَةٌ', 'dual identity is not a problem — it is a richness'],
    ['وَالكَلِمَتَانِ لَيْسَتَا مُتَرَادِفَتَيْنِ', 'and the two words are not synonyms'],
    ['فَلَا تُوجَدُ قِصَّةٌ وَاحِدَةٌ تَصِفُ الجَمِيعَ', 'so no single story describes everyone'],
    ['تَجَارِبُ النَّاسِ مُخْتَلِفَةٌ', 'people’s experiences differ'],
  ],
  modelEn: 'My family has lived here for many years, and I am from the second generation of the Arab community. I belong to two cultures and balance between them every day. At home we speak Arabic, whereas I study in English. My mother keeps her customs, and she adapted to life here quickly. Our city is smaller than Cairo, but it is calmer. On one hand I feel longing for my family’s country; on the other, I love my life here. People’s experiences differ, so no single story describes everyone.',
  find: ['three diaspora verbs + prepositions', 'أَصْغَرُ مِنْ and أَكْثَرُ هُدُوءًا', 'بَيْنَمَا', 'a balanced statement'],
  modelNotes: 'Website writing model. Evidence: أَنْتَمِي إِلَى · أُوَازِنُ بَيْنَهُمَا · تَحْتَفِظُ … بِعَادَاتِهَا · تَكَيَّفَتْ مَعَ · بَيْنَمَا · أَصْغَرُ مِنَ القَاهِرَةِ · أَكْثَرُ هُدُوءًا مِنْهَا · مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى · لَا تُوجَدُ قِصَّةٌ وَاحِدَةٌ …',
  selfCheck: [
    { route: 'core', text: 'Each diaspora verb has its preposition.' },
    { route: 'core', text: 'The noun after the preposition ends in -i.' },
    { route: 'develop', text: 'I used ONE comparative at a time.' },
    { route: 'develop', text: 'After أَكْثَرُ my noun ends in -an (هُدُوءًا).' },
    { route: 'stretch', text: 'My view of dual identity is balanced, not simplified.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['تَعِيشُ', 'live'], ['بَحْثًا عَنْ', 'looking for'], ['هَرَبًا مِنَ الحَرْبِ', 'fleeing war'], ['مُتَرَادِفَتَيْنِ', 'synonyms (dual)'], ['إِرْثِهِمُ الثَّقَافِيِّ', 'their cultural heritage'],
    ['فِي الوَقْتِ نَفْسِهِ', 'at the same time'], ['مُجْتَمَعَاتٍ جَدِيدَةٍ', 'new societies'], ['الغُرْبَةِ', 'being far from home'], ['ثَرْوَةً', 'a richness'], ['تَصِفُ الجَمِيعَ', 'describes everyone'],
  ],
  prep: {
    words: [['لُغَةُ الأُمَمِ المُتَّحِدَةِ', 'a UN language', '—'], ['مُتَحَدِّثٌ', 'a speaker', 'pl. مُتَحَدِّثُونَ'], ['الانْتِشَارُ', 'spread, reach', '—'], ['كَلِمَاتٌ مُسْتَعَارَةٌ', 'loanwords', 'sing. كَلِمَةٌ مُسْتَعَارَةٌ'], ['يُثْرِي', 'it enriches', 'أَثْرَى past']],
    questionEn: 'Do you know any English (or Urdu) words that come from Arabic? List three.',
    questionAr: 'مِنَ الكَلِمَاتِ ذَاتِ الأَصْلِ العَرَبِيِّ: … · … · …',
    homework: {
      core: 'Learn the four verbs with their prepositions; write six sentences.',
      develop: 'A 60–70-word comparison of two cities with both comparatives.',
      stretch: 'Website writing task: 80–90 words with a balanced statement on dual identity.',
    },
    wordsSource: 'The five words come from the website D6-L06 vocabulary (Arabic’s global reach).',
  },
  remember: 'Remember: أَنْتَمِي إِلَى · أَتَكَيَّفُ مَعَ · أَحْتَفِظُ بِـ · أُوَازِنُ بَيْنَ — and ONE comparative: أَكْبَرُ مِنْ or أَكْثَرُ هُدُوءًا مِنْ.',
});

module.exports = { meta, slides };
