'use strict';
/* D6-L01 · Countries, Nationalities and Languages of the Arab World — website: Pathways › Development › D6 › D6-L01 (the nisba ـِيٌّ / ـِيَّةٌ, diptote country names
 * مِنْ لُبْنَانَ · زُرْتُ مِصْرَ, past for history vs present for today, describing language use accurately: الفُصْحَى · اللَّهَجَاتُ · الأَمَازِيغِيَّةُ · الكُرْدِيَّةُ).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking and writing used as published; the diptote case-ending distractors are
 * the lesson’s key error and are kept; one other distractor replaced; English added to the patterns and speaking model. The website visual game uses
 * national flags (and two vowel slips), so it is not reproduced. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D6')({
  n: 1, fileTitle: 'Countries_Nationalities_and_Languages', chip: 'Vocabulary',
  title: 'Countries, Nationalities and Languages of the Arab World', arabic: 'دُوَلُ العَالَمِ العَرَبِيِّ وَجِنْسِيَّاتُهَا وَلُغَاتُهَا',
  focus: 'Name the Arab countries, build the nationality (مِصْرُ → مِصْرِيٌّ · مِصْرِيَّةٌ · مِصْرِيُّونَ), say “from Lebanon” without tanwīn (مِنْ لُبْنَانَ) and describe the region’s languages accurately — fuṣḥā, dialects, Amazigh, Kurdish.',
  icon: 'FaEarthAfrica', iconSet: 'fa6',
});

const site = D.site('D6-L01');
const quiz = site.grammar.quiz.map((it, i) => (i === 2 ? { ...it, options: [it.options[0], it.options[1], 'اللُّبْنَانِيِّ'] } : it));
const rules = site.grammar.rules.map((r, i) => (i === 2 ? { ...r, formula: 'past (nashaʾat) for history · present (tuʿaddu) for today' } : r));
const nat = (m, f, pl) => ({ tag: 'm · f · pl', forms: [{ l: 'pl.', ar: pl }, { l: 'f.', ar: f }, { l: 'm.', ar: m }] });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D6-L01', {
  support: `• NEW UNIT (D6 · Countries, Cultures and Celebrations — the last Development unit). Core: 12 countries + their nationality for a boy and a girl (مَغْرِبِيٌّ / مَغْرِبِيَّةٌ). Develop: diptotes after a preposition (مِنْ لُبْنَانَ · فِي مِصْرَ) and languages used in two countries. Stretch: contrast fuṣḥā and the dialects and qualify a claim about diversity (website ~80-word task).
• Respectful framing: the region is multilingual and diverse (Amazigh, Kurdish, many dialects). Invite students to share their own family’s country and language(s).
• Grammar links: the nisba was met for nationalities in F1 / F2 (عَرَبِيٌّ · بِرِيطَانِيٌّ); diptotes are NEW at this level.`,
  teach: 'Nisba for nationality, diptote countries, accurate language facts.',
  wedo: 'Sort countries by region, fix nisba / tanwīn slips, then meet three students.',
  next: { nextCode: 'D6-L02', nextTitle: 'Cultural Customs — Traditions, Greetings and Social Norms', nextAr: 'العَادَاتُ الثَّقَافِيَّةُ — التَّقَالِيدُ وَالتَّحِيَّاتُ' },
  objectives: ['Name Arab League countries and their nationalities (m. / f. / pl.).', 'Form the nisba with ـِيٌّ / ـِيَّةٌ and make it agree.', 'Use diptote country names without tanwīn (مِنْ لُبْنَانَ).', 'Describe language use accurately and without generalising.'],
  rulesAr: 'النِّسْبَةُ وَالمَمْنُوعُ مِنَ الصَّرْفِ وَوَصْفُ المِنْطَقَةِ',
  ruleEx: [['المَغْرِبُ · مَغْرِبِيٌّ · مَغْرِبِيَّةٌ', 'السُّعُودِيَّةُ · سُعُودِيٌّ · سُعُودِيَّةٌ']],
  flexGroups: [],
  doNow: {
    questions: [
      q('What does دَوْلَةٌ mean?', ['a country, state', 'a city', 'a language'], 'Prepared at home (D5-L12).'),
      q('What does جِنْسِيَّةٌ mean?', ['nationality', 'identity', 'dialect'], 'Prepared at home (D5-L12).'),
      q('What does اللَّهَجَاتُ mean?', ['the dialects', 'the countries', 'the capitals'], 'Prepared at home (D5-L12).'),
      q('Complete: أَنَا ___ (I am Arab, m.).', ['عَرَبِيٌّ', 'عَرَبِيَّةٌ', 'عَرَبٌ'], 'F1 / F2: nationality.'),
      q('Choose the accurate past sentence.', ['زُرْتُ مِصْرَ قَبْلَ سَنَتَيْنِ.', 'زَارْتُ مِصْرَ قَبْلَ سَنَتَيْنِ.', 'أَزُورُ مِصْرَ قَبْلَ سَنَتَيْنِ.'], 'D5: hollow verb + past marker.'),
    ],
    keyIdea: { text: 'Country + -iyyun (he) / -iyyatun (she) = the nationality.', ar: 'مِصْرُ · {e|مِصْرِيٌّ} · {k|مِصْرِيَّةٌ} · {w|مِصْرِيُّونَ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D5-L12. Questions 4–5 retrieve the nisba (F1 / F2) and the D5 past tense (هِيَ زَارَتْ … / زُرْتُ).',
  },
  routes: {
    core: ['I can name 12 Arab countries.', 'I can say a nationality for a boy and a girl.'],
    develop: ['I can say “from Lebanon / in Egypt” without tanwīn.', 'I can name languages used in two countries.'],
    stretch: ['I can contrast fuṣḥā and the dialects.', 'I can qualify a claim about the region.'],
  },
  bridge: [
    { ar: 'مِصْرُ', urdu: 'مصر', tr: 'Miṣr', en: 'Egypt' },
    { ar: 'عَرَبِيٌّ', urdu: 'عربی', tr: 'ʿarabī', en: 'Arab, Arabic (the same -ī ending!)' },
    { ar: 'جِنْسِيَّةٌ', urdu: 'شہریت / قومیت', tr: 'qaumiyyat', en: 'nationality (Urdu uses the same -iyyat pattern)' },
    { ar: 'عَاصِمَةٌ', urdu: 'دارالحکومت', tr: 'dār-ul-ḥukūmat', en: 'capital city' },
    { ar: 'لَهْجَةٌ', urdu: 'لہجہ', tr: 'lahja', en: 'Urdu: accent, tone · Arabic: dialect' },
  ],
  bridgeNotes: 'URDU BRIDGE: the -ī ending is the same in Urdu: عربی، پاکستانی، ہندوستانی — this IS the Arabic nisba. CAREFUL: Urdu لہجہ = accent / tone of voice; Arabic لَهْجَةٌ = a whole dialect (اللَّهْجَةُ المِصْرِيَّةُ).',
  core: ['المَمْلَكَةُ العَرَبِيَّةُ السُّعُودِيَّةُ', 'مِصْرُ', 'العِرَاقُ', 'الأُرْدُنُّ', 'لُبْنَانُ', 'فِلَسْطِينُ', 'الإِمَارَاتُ', 'المَغْرِبُ', 'الجَزَائِرُ', 'العَرَبِيَّةُ الفُصْحَى', 'اللَّهَجَاتُ', 'لُغَةٌ رَسْمِيَّةٌ'],
  forms: {
    'المَمْلَكَةُ العَرَبِيَّةُ السُّعُودِيَّةُ': nat('سُعُودِيٌّ', 'سُعُودِيَّةٌ', 'سُعُودِيُّونَ'), 'مِصْرُ': nat('مِصْرِيٌّ', 'مِصْرِيَّةٌ', 'مِصْرِيُّونَ'),
    'العِرَاقُ': nat('عِرَاقِيٌّ', 'عِرَاقِيَّةٌ', 'عِرَاقِيُّونَ'), 'سُورِيَا': nat('سُورِيٌّ', 'سُورِيَّةٌ', 'سُورِيُّونَ'), 'الأُرْدُنُّ': nat('أُرْدُنِّيٌّ', 'أُرْدُنِّيَّةٌ', 'أُرْدُنِّيُّونَ'),
    'لُبْنَانُ': nat('لُبْنَانِيٌّ', 'لُبْنَانِيَّةٌ', 'لُبْنَانِيُّونَ'), 'فِلَسْطِينُ': nat('فِلَسْطِينِيٌّ', 'فِلَسْطِينِيَّةٌ', 'فِلَسْطِينِيُّونَ'), 'الكُوَيْتُ': nat('كُوَيْتِيٌّ', 'كُوَيْتِيَّةٌ', 'كُوَيْتِيُّونَ'),
    'الإِمَارَاتُ': nat('إِمَارَاتِيٌّ', 'إِمَارَاتِيَّةٌ', 'إِمَارَاتِيُّونَ'), 'قَطَرُ': nat('قَطَرِيٌّ', 'قَطَرِيَّةٌ', 'قَطَرِيُّونَ'), 'عُمَانُ': nat('عُمَانِيٌّ', 'عُمَانِيَّةٌ', 'عُمَانِيُّونَ'),
    'اليَمَنُ': nat('يَمَنِيٌّ', 'يَمَنِيَّةٌ', 'يَمَنِيُّونَ'), 'تُونُسُ': nat('تُونُسِيٌّ', 'تُونُسِيَّةٌ', 'تُونُسِيُّونَ'), 'الجَزَائِرُ': nat('جَزَائِرِيٌّ', 'جَزَائِرِيَّةٌ', 'جَزَائِرِيُّونَ'),
    'المَغْرِبُ': nat('مَغْرِبِيٌّ', 'مَغْرِبِيَّةٌ', 'مَغَارِبَةٌ'), 'السُّودَانُ': nat('سُودَانِيٌّ', 'سُودَانِيَّةٌ', 'سُودَانِيُّونَ'), 'لِيبِيَا': nat('لِيبِيٌّ', 'لِيبِيَّةٌ', 'لِيبِيُّونَ'),
    'البَحْرَيْنُ': nat('بَحْرَيْنِيٌّ', 'بَحْرَيْنِيَّةٌ', 'بَحْرَيْنِيُّونَ'), 'الصُّومَالُ': nat('صُومَالِيٌّ', 'صُومَالِيَّةٌ', 'صُومَالِيُّونَ'), 'مُورِيتَانِيَا': nat('مُورِيتَانِيٌّ', 'مُورِيتَانِيَّةٌ', 'مُورِيتَانِيُّونَ'),
    'جِيبُوتِي': nat('جِيبُوتِيٌّ', 'جِيبُوتِيَّةٌ', 'جِيبُوتِيُّونَ'), 'جُزُرُ القَمَرِ': nat('قَمَرِيٌّ', 'قَمَرِيَّةٌ', 'قَمَرِيُّونَ'),
    'عَاصِمَةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'عَوَاصِمُ' }] },
  },
  vocabNotes: {
    0: 'Countries of the Mashriq and the Gulf. Each card shows the nationality: m. · f. · pl. Notice the diptotes (no tanwīn): مِصْرُ · لُبْنَانُ · قَطَرُ · عُمَانُ · فِلَسْطِينُ.',
    1: 'Countries of the Maghreb and the Horn. Note: المَغْرِبُ → مَغْرِبِيٌّ, but the plural is مَغَارِبَةٌ.',
    2: 'Languages and identity: say what is true — Arabic is shared, but it is not the only language of the region.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the nisba (website rule 1)', title: 'From country to nationality', ar: 'النِّسْبَةُ',
      cols: [{ label: 'Country', w: 2.9, size: 24 }, { label: 'He', w: 2.6, size: 24 }, { label: 'She', w: 2.6, size: 24 }, { label: 'They', w: 2.6, size: 24 }, { label: 'Step', w: 1.63 }],
      rows: [
        { core: true, cells: ['مِصْرُ', '{e|مِصْرِيٌّ}', '{k|مِصْرِيَّةٌ}', '{w|مِصْرِيُّونَ}', '+ -iyy'] },
        { core: true, cells: ['المَغْرِبُ', '{e|مَغْرِبِيٌّ}', '{k|مَغْرِبِيَّةٌ}', '{w|مَغَارِبَةٌ}', 'drop al-'] },
        { cells: ['السُّعُودِيَّةُ', '{e|سُعُودِيٌّ}', '{k|سُعُودِيَّةٌ}', '{w|سُعُودِيُّونَ}', 'drop -iyya'] },
        { cells: ['الأُرْدُنُّ', '{e|أُرْدُنِّيٌّ}', '{k|أُرْدُنِّيَّةٌ}', '{w|أُرْدُنِّيُّونَ}', 'keep the shadda'] },
        { cells: ['لُبْنَانُ', '{e|لُبْنَانِيٌّ}', '{k|لُبْنَانِيَّةٌ}', '{w|لُبْنَانِيُّونَ}', '+ -iyy'] },
      ],
      ltr: true,
      foot: 'The nisba is an adjective: it agrees — طَالِبٌ جَزَائِرِيٌّ · طَالِبَةٌ جَزَائِرِيَّةٌ.',
      notes: `GRAMMAR PART 1 — website rule “Forming the nisba” (the ending carries a shadda on the yāʾ; a final tāʾ marbūṭa or article is dropped first). Website teaching point: “The nisba builds the nationality … the shadda is part of the ending, not an optional decoration.”
Website mistake: هِيَ طَالِبَةٌ مَغْرِبِيٌّ ✗ → مَغْرِبِيَّةٌ. Ask students for their own: أَنَا بِرِيطَانِيٌّ / بَاكِسْتَانِيَّةٌ / صُومَالِيٌّ …`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · diptotes, tense, accuracy (website rules 2–4) · Develop / Stretch', title: 'No tanwīn — and no generalising', ar: 'مَمْنُوعٌ مِنَ الصَّرْفِ',
      cards: [
        { chip: 'DIPTOTES · CORE', color: '1D5FBF', head: 'مِنْ لُبْنَانَ · زُرْتُ مِصْرَ', big: 'أَنَا مِنْ لُبْنَانَ، وَزُرْتُ مِصْرَ.', en: 'I am from Lebanon, and I visited Egypt.', clue: 'No tanwīn.' },
        { chip: 'HISTORY vs TODAY · DEVELOP', color: 'C0386B', head: 'نَشَأَتْ · تُعَدُّ', big: 'نَشَأَتِ الحَضَارَةُ هُنَا، وَتُعَدُّ العَرَبِيَّةُ لُغَةً مُنْتَشِرَةً.', en: 'The civilisation arose here, and Arabic is (now) a widespread language.', clue: 'Past · present.' },
        { chip: 'ACCURACY · STRETCH', color: '6B4C9A', head: 'إِلَى جَانِبِ العَرَبِيَّةِ', big: 'تُسْتَعْمَلُ الكُرْدِيَّةُ إِلَى جَانِبِ العَرَبِيَّةِ فِي العِرَاقِ.', en: 'Kurdish is used alongside Arabic in Iraq.', clue: 'Name the others.' },
      ],
      error: { text: 'Website mistake: a diptote never takes tanwīn.', pairs: [['مِنْ لُبْنَانَ', 'مِنْ لُبْنَانٍ']] },
      notes: `GRAMMAR PART 2 — website rules “Diptote country names” (no tanwīn; a ḍamma in the nominative and a fatḥa in both the accusative and the genitive), “Past for history, present for today” and “Describing language use accurately” (name co-official languages and qualify claims). Website teaching point: “Several country names are diptotes … writing مِصْرٍ is a visible error.”
Diptotes today: مِصْرُ · لُبْنَانُ · قَطَرُ · عُمَانُ · تُونُسُ · فِلَسْطِينُ.`,
    },
  ],
  quick: [0, 1, 2, 7],
  rest: [3, 4, 5, 6],
  ido: {
    title: 'Watch me introduce a country',
    steps: [
      { head: 'Country', ar: 'المَغْرِبُ · عَاصِمَتُهُ الرِّبَاطُ', think: 'Name + capital.' },
      { head: 'Nationality', ar: '{e|مَغْرِبِيٌّ} · {k|مَغْرِبِيَّةٌ}', think: 'He / she.' },
      { head: 'Languages', ar: 'العَرَبِيَّةُ وَ{w|الأَمَازِيغِيَّةُ}', think: 'Not only Arabic.' },
      { head: 'Diptote', ar: 'زُرْتُ {e|مِصْرَ}', think: 'No tanwīn.' },
    ],
    legend: ['e', 'k', 'w'], legendLabels: { e: 'HE / DIPTOTE', k: 'SHE', w: 'OTHER LANGUAGE' },
    model: 'مِنْ أَجْمَلِ الدُّوَلِ العَرَبِيَّةِ المَغْرِبُ، وَعَاصِمَتُهُ الرِّبَاطُ. وَالطَّالِبُ مِنْهُمْ {e|مَغْرِبِيٌّ} وَالطَّالِبَةُ {k|مَغْرِبِيَّةٌ}. تُسْتَعْمَلُ فِيهِ العَرَبِيَّةُ وَ{w|الأَمَازِيغِيَّةُ}. وَقَدْ زُرْتُ {e|مِصْرَ} أَيْضًا قَبْلَ سَنَتَيْنِ.',
    modelEn: 'Morocco is one of the most beautiful Arab countries, and its capital is Rabat. A (male) student from there is Moroccan and a (female) student is Moroccan. Arabic and Amazigh are used there. I also visited Egypt two years ago.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Is the noun masculine or feminine? Add -iyy or -iyya. Is the country a diptote? Then no tanwīn after a preposition.”',
  },
  patternEn: ['Egypt → Egyptian (m.) / (f.)', 'I am from Lebanon', 'Arabic is considered one of the most widespread languages'],
  sorterNotes: 'Then give the nationality (he / she) of one country from each column.',
  patch: {
    grammar: { ...site.grammar, quiz, rules },
    speaking: {
      model: [
        ['A', 'اِخْتَرْ دَوْلَةً عَرَبِيَّةً وَتَحَدَّثْ عَنْهَا.', 'Choose an Arab country and talk about it.'],
        ['B', 'أَخْتَارُ المَغْرِبَ. عَاصِمَتُهُ الرِّبَاطُ، وَأَهْلُهُ مَغَارِبَةٌ، وَالوَاحِدُ مِنْهُمْ مَغْرِبِيٌّ.', 'I choose Morocco. Its capital is Rabat, its people are Moroccans, and one of them is a Moroccan.'],
        ['A', 'وَأَيُّ لُغَاتٍ تُسْتَعْمَلُ هُنَاكَ؟', 'And which languages are used there?'],
        ['B', 'تُسْتَعْمَلُ العَرَبِيَّةُ وَالأَمَازِيغِيَّةُ، وَالأَمَازِيغِيَّةُ لُغَةٌ رَسْمِيَّةٌ أَيْضًا، وَلَيْسَ الأَمْرُ نَفْسَهُ فِي كُلِّ الدُّوَلِ.', 'Arabic and Amazigh are used, and Amazigh is an official language too — it is not the same in every country.'],
      ],
    },
  },
  patchNote: 'one quiz distractor replaced (the diptote case-ending errors are kept on purpose) and English added to the patterns and speaking model; the website flag-based visual game is not reproduced.',
  hints: ['Lubnān: tanwīn or not?', 'A girl: -iyy or -iyya?', 'Is Arabic the only language?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nThree people: Salma · Karim · Nur.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5 — and note each nationality (he / she).',
  gloss: [
    ['أَنَا سَلْمَى، وَأَنَا مَغْرِبِيَّةٌ مِنْ مَدِينَةِ الرِّبَاطِ.', 'I am Salma, and I am Moroccan, from the city of Rabat.'],
    ['فِي بَيْتِنَا نَتَحَدَّثُ العَرَبِيَّةَ وَالأَمَازِيغِيَّةَ، لِأَنَّ الأَمَازِيغِيَّةَ لُغَةٌ رَسْمِيَّةٌ فِي المَغْرِبِ.', 'At home we speak Arabic and Amazigh, because Amazigh is an official language in Morocco.'],
    ['وَصَدِيقِي كَرِيمٌ عِرَاقِيٌّ مِنْ بَغْدَادَ، وَيَقُولُ إِنَّ الكُرْدِيَّةَ تُسْتَعْمَلُ إِلَى جَانِبِ العَرَبِيَّةِ فِي بِلَادِهِ.', 'My friend Karim is Iraqi, from Baghdad, and he says Kurdish is used alongside Arabic in his country.'],
    ['أَمَّا زَمِيلَتُنَا نُورُ فَهِيَ لُبْنَانِيَّةٌ، وَقَدْ جَاءَتْ مِنْ لُبْنَانَ قَبْلَ سَنَتَيْنِ.', 'As for our classmate Nur, she is Lebanese, and she came from Lebanon two years ago.'],
    ['نَحْنُ نَكْتُبُ جَمِيعًا بِالفُصْحَى، وَلٰكِنَّنَا نَتَحَدَّثُ بِلَهَجَاتٍ مُخْتَلِفَةٍ، وَأَحْيَانًا لَا نَفْهَمُ بَعْضَنَا بِسُرْعَةٍ.', 'We all write in Standard Arabic, but we speak different dialects, and sometimes we don’t understand each other quickly.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'اِخْتَرْ دَوْلَةً عَرَبِيَّةً. مَا عَاصِمَتُهَا؟ وَمَا جِنْسِيَّةُ أَهْلِهَا؟' },
      { route: 'develop', ar: 'أَيُّ لُغَاتٍ تُسْتَعْمَلُ هُنَاكَ إِلَى جَانِبِ العَرَبِيَّةِ؟' },
      { route: 'stretch', ar: 'مَا الفَرْقُ بَيْنَ الفُصْحَى وَاللَّهَجَاتِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَخْتَارُ ______ . عَاصِمَتُهَا ______ ، وَالطَّالِبُ مِنْهَا ______ .' },
      { route: 'develop', ar: 'تُسْتَعْمَلُ ______ إِلَى جَانِبِ العَرَبِيَّةِ فِي ______ .' },
      { route: 'stretch', ar: 'نَكْتُبُ بِالفُصْحَى، وَلٰكِنْ ______ .' },
    ],
    modelEn: ['Choose an Arab country and talk about it.', 'I choose Morocco. Its capital is Rabat, its people are Moroccans, and one of them is a Moroccan.'],
    notes: 'Website prompts and model. Students may choose their family’s country. Check the nisba agreement and the diptotes. To a girl: اِخْتَارِي · تَحَدَّثِي.',
  },
  write: {
    core: { amount: '5 sentences', how: 'A country, its capital, its nationality (he / she) and one language.' },
    develop: { amount: '60–70 words', how: 'Add a diptote after a preposition and the languages of two countries.' },
    stretch: { amount: '≈ 80 words', how: 'Website task: country · capital · nationality · languages · a qualified statement about diversity.' },
  },
  frames: {
    core: [
      { en: 'I choose …; its capital is …', ar: 'أَخْتَارُ ______ ، وَعَاصِمَتُهَا ______ .' },
      { en: 'A (male) student from there is … (-iyyun)', ar: 'الطَّالِبُ مِنْهَا ______ .' },
      { en: 'A (female) student from there is … (-iyyatun)', ar: 'الطَّالِبَةُ مِنْهَا ______ .' },
      { en: 'The official language is …', ar: 'اللُّغَةُ الرَّسْمِيَّةُ ______ .' },
    ],
    develop: [
      { en: 'I visited … two years ago.', ar: 'زُرْتُ ______ قَبْلَ سَنَتَيْنِ.' },
      { en: '… is used alongside Arabic in …', ar: 'تُسْتَعْمَلُ ______ إِلَى جَانِبِ العَرَبِيَّةِ فِي ______ .' },
      { en: 'We all write in fuṣḥā, but …', ar: 'نَكْتُبُ جَمِيعًا بِالفُصْحَى، وَلٰكِنَّنَا ______ .' },
      { en: 'It is not true that …', ar: 'وَلَيْسَ صَحِيحًا أَنَّ ______ .' },
    ],
    bank: ['مِصْرُ · مِصْرِيٌّ', 'المَغْرِبُ · مَغْرِبِيٌّ', 'الأُرْدُنُّ · أُرْدُنِّيٌّ', 'العِرَاقُ · عِرَاقِيٌّ', 'عَاصِمَةٌ', 'جِنْسِيَّةٌ', 'لُغَةٌ رَسْمِيَّةٌ', 'الفُصْحَى', 'اللَّهَجَاتُ', 'الأَمَازِيغِيَّةُ', 'الكُرْدِيَّةُ', 'إِلَى جَانِبِ'],
  },
  stretch: [
    ['مِنْ أَجْمَلِ الدُّوَلِ العَرَبِيَّةِ', 'one of the most beautiful Arab countries'],
    ['لَاحَظْتُ أَنَّ اللَّهْجَةَ تَخْتَلِفُ كَثِيرًا', 'I noticed that the dialect differs a lot'],
    ['تُعَدُّ العَرَبِيَّةُ مِنْ أَكْثَرِ اللُّغَاتِ انْتِشَارًا', 'Arabic is one of the most widespread languages'],
    ['لَيْسَ صَحِيحًا أَنَّ المِنْطَقَةَ ذَاتُ ثَقَافَةٍ وَاحِدَةٍ', 'it is not true that the region has a single culture'],
    ['فَالتَّنَوُّعُ فِيهَا كَبِيرٌ', 'for its diversity is great'],
  ],
  modelEn: 'Morocco is one of the most beautiful Arab countries, and its capital is Rabat. Its people are Moroccans: a male student is Moroccan (maghribī) and a female student is Moroccan (maghribiyya). Arabic and Amazigh are used there, and Amazigh is an official language. I also visited Egypt two years ago and noticed that the dialect is very different from Morocco’s. We all write in fuṣḥā, but we speak different dialects. It is not true that the region has one single culture; its diversity is very great.',
  find: ['a nisba for he and she', 'a diptote after a verb or preposition (زُرْتُ مِصْرَ)', 'a language other than Arabic', 'a qualified statement'],
  modelNotes: 'Website writing model. Evidence: مَغْرِبِيٌّ / مَغْرِبِيَّةٌ / مَغَارِبَةٌ · زُرْتُ مِصْرَ · لَهْجَةِ المَغْرِبِ · الأَمَازِيغِيَّةُ لُغَةٌ رَسْمِيَّةٌ · نَكْتُبُ … بِالفُصْحَى … نَتَحَدَّثُ بِلَهَجَاتٍ · لَيْسَ صَحِيحًا أَنَّ …',
  selfCheck: [
    { route: 'core', text: 'My nationality agrees: -iyyun (m.), -iyyatun (f.).' },
    { route: 'core', text: 'I named a capital and a language.' },
    { route: 'develop', text: 'My diptotes have no tanwīn (مِنْ لُبْنَانَ).' },
    { route: 'develop', text: 'I named a language other than Arabic.' },
    { route: 'stretch', text: 'I contrasted fuṣḥā and dialects and avoided a generalisation.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['تَضُمُّ', 'includes'], ['جَامِعَةُ الدُّوَلِ العَرَبِيَّةِ', 'the Arab League'], ['تَمْتَدُّ', 'stretch'], ['المُحِيطِ الأَطْلَسِيِّ', 'the Atlantic Ocean'], ['الخَلِيجِ', 'the Gulf'],
    ['المُشْتَرَكَةَ', 'shared, common'], ['الإِعْلَامِ', 'the media'], ['الحَيَاةِ اليَوْمِيَّةِ', 'daily life'], ['تَخْتَلِفُ', 'differ'], ['ذَاتُ ثَقَافَةٍ وَاحِدَةٍ', 'with one culture'],
  ],
  prep: {
    words: [['عَادَةٌ', 'a custom', 'pl. عَادَاتٌ'], ['تَقْلِيدٌ', 'a tradition', 'pl. تَقَالِيدُ'], ['ضِيَافَةٌ', 'hospitality', '—'], ['احْتِرَامُ الكِبَارِ', 'respect for elders', '—'], ['يَحْتَفِلُ بِـ', 'he celebrates', 'تَحْتَفِلُ she']],
    questionEn: 'Think of one custom in your family when a guest visits. What do you do?',
    questionAr: 'عِنْدَمَا يَزُورُنَا ضَيْفٌ …',
    homework: {
      core: 'Learn 12 countries with their nationality (he / she); write five sentences.',
      develop: 'A 60–70-word profile of a country with a diptote and two languages.',
      stretch: 'Website writing task: ≈ 80 words with a qualified statement about diversity.',
    },
    wordsSource: 'The five words come from the website D6-L02 vocabulary (customs and values).',
  },
  remember: 'Remember: country + -iyy (he) / -iyya (she) — no tanwīn on مِصْرَ · لُبْنَانَ · قَطَرَ — and Arabic is shared, but not the only language.',
});

module.exports = { meta, slides };
