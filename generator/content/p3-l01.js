'use strict';
/* P3-L01 · Modes of Transport — Advanced Vocabulary and Formal Descriptions — website: Pathways › Progression › P3 › P3-L01 (formal journey verbs with their
 * complements يَسْتَغْرِقُ + duration · يَقْطَعُ مَسَافَةً · يَصِلُ بَيْنَ, numbers with durations and distances, the comparative / superlative أَفْعَل and statistics
 * يَبْلُغُ / يُمَثِّلُ, and both conditional types applied to transport). Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing,
 * live builder and mission used as published, with waṣl alif shown without a kasra. The website visual game is a Foundation transport match (bus, train,
 * plane); three cards are used as a warm-up and upgraded to formal register. English added to the patterns; sorter headings in transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P3')({
  n: 1, fileTitle: 'Modes_of_Transport_Formal_Descriptions', chip: 'Vocabulary',
  title: 'Modes of Transport — Advanced Vocabulary and Formal Descriptions', arabic: 'وَسَائِلُ النَّقْلِ — المُفْرَدَاتُ المُتَقَدِّمَةُ وَالأَوْصَافُ الرَّسْمِيَّةُ',
  focus: 'Describe modern transport in formal Arabic: yastaghriq + a duration, yaqṭaʿ masāfatan, yaṣil bayna two places; compare modes with afʿal and quantify with yablugh / yumaththil — then reason about transport with idhā … sa- and law … la-.',
  icon: 'FaTrain', iconSet: 'fa6',
});

const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const hs = (she) => ({ tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: she }] });
const site = D.waslFix(D.site('P3-L01'));
const RH = [['Journey verbs', 'yastaghriq + duration · yaqṭaʿ masāfatan · yaṣil bayna'], ['Superlative and statistics', 'afʿal · yumaththil · yablugh'], ['Real prediction', 'idhā + past → sa-'], ['Counterfactual', 'law + past → la-']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P3-L01', {
  support: `• Core: six formal journey sentences with the right complements (website Core). Develop: add a superlative comparison and a statistic. Stretch: close with a Type 1 prediction and a Type 2 counterfactual (the website 90–100-word comparison).
• Start from what students know: the Foundation picture game (bus · train · plane) is the warm-up; the lesson then “upgrades” it to formal register: أُسَافِرُ بِالقِطَارِ → يَصِلُ القِطَارُ بَيْنَ … وَيَسْتَغْرِقُ …
• Islamic link (optional): the Haramain high-speed railway links Makkah and Madinah (about 450 km) at up to 300 km/h — a journey that took pilgrims days by caravan now takes around two hours. A perfect “law … la-kāna” sentence.
• Grammar links: superlative / comparative (P1-L09) · statistics يُمَثِّلُ · يَبْلُغُ (P1-L09) · Type 1 (P1-L03) · Type 2 (P2-L06).`,
  teach: 'Journey verbs + complements, numbers with time and distance, afʿal, both conditionals.',
  wedo: 'Upgrade a picture match, build a transport description, sort the complements.',
  next: { nextCode: 'P3-L02', nextTitle: 'Planning a Trip — Booking, Itineraries and Travel Documents', nextAr: 'التَّخْطِيطُ لِلرِّحْلَةِ — الحَجْزُ وَالوَثَائِقُ' },
  objectives: ['Name advanced transport modes in formal register.', 'Describe a journey with yastaghriq, yaqṭaʿ masāfatan and yaṣil bayna.', 'Compare modes with superlatives and statistics.', 'Predict the future of transport with both conditional types.'],
  rulesAr: 'وَصْفُ الرِّحْلَةِ الرَّسْمِيُّ وَالمُقَارَنَةُ',
  ruleEx: [['تَسْتَغْرِقُ الرِّحْلَةُ ثَلَاثَ سَاعَاتٍ', 'يَصِلُ المِتْرُو بَيْنَ المَرْكَزِ وَالمَطَارِ'], ['القِطَارُ السَّرِيعُ أَسْرَعُ وَسِيلَةٍ', 'تَبْلُغُ سُرْعَتُهُ القُصْوَى ثَلَاثَمِئَةِ كِيلُومِتْرٍ'], ['إِذَا اعْتَمَدْنَا عَلَى الكَهْرَبَاءِ، سَتَقِلُّ الانْبِعَاثَاتُ'], ['لَوْ تَطَوَّرَ النَّقْلُ العَامُّ مُبَكِّرًا، لَكَانَتِ المُدُنُ أَقَلَّ ازْدِحَامًا']],
  doNow: {
    questions: [
      q('What does الخَطُّ الحَدِيدِيُّ السَّرِيعُ mean?', ['high-speed rail', 'the underground metro', 'a motorway'], 'Prepared at home (P2-L12).'),
      q('What does مِتْرُو الأَنْفَاقِ mean?', ['the underground metro', 'a tram', 'a tunnel'], 'Prepared at home (P2-L12).'),
      q('What does انْبِعَاثَاتُ الكَرْبُونِ mean?', ['carbon emissions', 'fuel efficiency', 'infrastructure'], 'Prepared at home (P2-L12).'),
      q('Complete the Type 2: لَوْ دَرَسَ أَكْثَرَ، ___ .', ['لَنَجَحَ', 'سَيَنْجَحُ', 'يَنْجَحُ'], 'P2-L06: law … la-.'),
      q('Choose the accurate comparative.', ['النَّوْمُ أَهَمُّ مِنَ الطَّعَامِ.', 'النَّوْمُ أَكْثَرُ مُهِمٍّ مِنَ الطَّعَامِ.', 'النَّوْمُ مُهِمٌّ مِنَ الطَّعَامِ.'], 'P1-L09: afʿalu min.'),
    ],
    keyIdea: { text: 'Each journey verb has its own partner: a TIME, a DISTANCE, or BAYNA + two places.', ar: '{w|تَسْتَغْرِقُ} ثَلَاثَ سَاعَاتٍ · {k|يَقْطَعُ مَسَافَةَ} … · {e|يَصِلُ بَيْنَ} … وَ …' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P2-L12. Question 4 retrieves the Type 2 conditional (P2-L06) and question 5 the comparative afʿalu min (P1-L09) — both return in today’s transport comparisons.',
  },
  routes: {
    core: ['I can name 8 formal transport words.', 'I can use yastaghriq, yaqṭaʿ and yaṣil bayna correctly.'],
    develop: ['I can say a duration or distance with the right number form.', 'I can compare with afʿal and a statistic.'],
    stretch: ['I can predict with idhā … sa- and reflect with law … la-.', 'I can write a 90–100-word comparison.'],
  },
  bridge: [
    { ar: 'سَفَرٌ · مُسَافِرٌ', urdu: 'سفر · مسافر', tr: 'safar · musāfir', en: 'travel · a traveller' },
    { ar: 'مَسَافَةٌ', urdu: 'مسافت', tr: 'masāfat', en: 'a distance' },
    { ar: 'وَسِيلَةٌ', urdu: 'وسیلہ', tr: 'wasīla', en: 'a means (of transport)' },
    { ar: 'سُرْعَةٌ', urdu: 'سرعت', tr: 'surʿat', en: 'speed (Urdu also رفتار)' },
    { ar: 'مَرْكَزٌ', urdu: 'مرکز', tr: 'markaz', en: 'a centre' },
  ],
  bridgeNotes: 'URDU BRIDGE: سفر، مسافر، مسافت، وسیلہ، سرعت and مرکز are all shared — the formal transport words are already familiar. Urdu usually says رفتار for speed; in a formal Arabic text it is always سُرْعَةٌ (سُرْعَةٌ قُصْوَى = maximum speed).',
  core: ['الخَطُّ الحَدِيدِيُّ السَّرِيعُ', 'مِتْرُو الأَنْفَاقِ', 'سَيَّارَةٌ كَهْرَبَائِيَّةٌ', 'وَسِيلَةُ النَّقْلِ', 'يَسْتَغْرِقُ', 'يَقْطَعُ مَسَافَةً', 'يَصِلُ بَيْنَ', 'يُقَلِّصُ وَقْتَ السَّفَرِ', 'سُرْعَةٌ قُصْوَى', 'بُنْيَةٌ تَحْتِيَّةٌ', 'انْبِعَاثَاتُ الكَرْبُونِ', 'أَسْرَعُ وَسِيلَةٍ'],
  forms: {
    'سَيَّارَةٌ كَهْرَبَائِيَّةٌ': sp('سَيَّارَاتٌ كَهْرَبَائِيَّةٌ'), 'حَافِلَةٌ هِيدْرُوجِينِيَّةٌ': sp('حَافِلَاتٌ هِيدْرُوجِينِيَّةٌ'), 'سَفِينَةٌ سِيَاحِيَّةٌ': sp('سُفُنٌ سِيَاحِيَّةٌ'),
    'طَائِرَةٌ عِمْلَاقَةٌ': sp('طَائِرَاتٌ عِمْلَاقَةٌ'), 'طَائِرَةٌ مُسَيَّرَةٌ': sp('طَائِرَاتٌ مُسَيَّرَةٌ'), 'وَسِيلَةُ النَّقْلِ': sp('وَسَائِلُ النَّقْلِ'),
    'المَرْكَبَةُ': sp('المَرْكَبَاتُ'), 'بُنْيَةٌ تَحْتِيَّةٌ': sp('بُنًى تَحْتِيَّةٌ'),
    'يَسْتَغْرِقُ': hs('تَسْتَغْرِقُ'), 'يَقْطَعُ مَسَافَةً': hs('تَقْطَعُ مَسَافَةً'), 'يَصِلُ بَيْنَ': hs('تَصِلُ بَيْنَ'), 'يُقَلِّصُ وَقْتَ السَّفَرِ': hs('تُقَلِّصُ وَقْتَ السَّفَرِ'),
    'يُمَثِّلُ': hs('تُمَثِّلُ'), 'يَبْلُغُ': hs('تَبْلُغُ'),
  },
  vocabNotes: {
    0: 'Advanced transport modes: the formal names. A feminine vehicle takes ta-: تَسْتَغْرِقُ الرِّحْلَةُ · تَقْطَعُ الطَّائِرَةُ · تَصِلُ الحَافِلَةُ.',
    1: 'Describing journeys formally: each verb has its own partner — يَسْتَغْرِقُ + a duration · يَقْطَعُ + مَسَافَةً · يَصِلُ بَيْنَ + two places. المَرْكَبَةُ is the formal word for “vehicle”.',
    2: 'Efficiency and environment: أَنْظَفُ (cleaner) and أَسْرَعُ (fastest) are the afʿal form; يُمَثِّلُ and يَبْلُغُ quantify a claim (P1-L09).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · journey verbs and their partners (website rule 1 + table) · Core', title: 'Time, distance — or two places?', ar: 'أَفْعَالُ الرِّحْلَةِ',
      cols: [{ label: 'Verb', w: 2.3, size: 22 }, { label: 'Partner', w: 2.4 }, { label: 'Example', w: 5.2, size: 20 }, { label: 'English', w: 2.43 }],
      rows: [
        { core: true, cells: ['{w|يَسْتَغْرِقُ}', 'a duration', 'تَسْتَغْرِقُ الرِّحْلَةُ {w|ثَلَاثَ سَاعَاتٍ}.', 'takes 3 hours'] },
        { core: true, cells: ['{k|يَقْطَعُ}', 'masāfatan', 'يَقْطَعُ القِطَارُ {k|مَسَافَةَ} أَلْفِ كِيلُومِتْرٍ.', 'covers 1000 km'] },
        { core: true, cells: ['{e|يَصِلُ بَيْنَ}', 'two places', 'يَصِلُ المِتْرُو {e|بَيْنَ} المَرْكَزِ {e|وَالمَطَارِ}.', 'connects A and B'] },
        { cells: ['{m|يُقَلِّصُ}', 'waqta s-safar', 'يُقَلِّصُ القِطَارُ {m|وَقْتَ السَّفَرِ}.', 'reduces travel time'] },
      ],
      ltr: true,
      foot: 'Website common error: never ilā after yaṣil bayna — bayna takes TWO places joined by wa-.',
      notes: `GRAMMAR PART 1 — website rule “Journey verbs”, the website table and teaching point “Each journey verb keeps its own complement”.
Website mistake 1: يَصِلُ المِتْرُو إِلَى المَرْكَزِ وَالمَطَارِ ✗ → بَيْنَ المَرْكَزِ وَالمَطَارِ. (يَصِلُ إِلَى alone = “arrives at” — a different meaning.)
Agreement: the vehicle decides the prefix — يَقْطَعُ القِطَارُ (m.) · تَقْطَعُ الطَّائِرَةُ (f.) · تَسْتَغْرِقُ الرِّحْلَةُ (f.).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · numbers for time and distance (website quiz 1, listening and sorter) · Core / Develop', title: 'Three hours, twenty minutes, two hundred km', ar: 'الأَعْدَادُ مَعَ الوَقْتِ وَالمَسَافَةِ',
      cols: [{ label: 'Number', w: 1.8 }, { label: 'Arabic', w: 4.0, size: 22 }, { label: 'Rule', w: 4.0 }, { label: 'English', w: 2.53 }],
      rows: [
        { core: true, cells: ['3–10', '{w|ثَلَاثَ سَاعَاتٍ}', 'opposite gender + genitive plural', 'three hours'] },
        { core: true, cells: ['11–99', '{w|عِشْرِينَ دَقِيقَةً}', 'accusative singular noun', 'twenty minutes'] },
        { cells: ['½ · 1½', '{w|نِصْفَ سَاعَةٍ} · {w|سَاعَةً وَنِصْفًا}', 'object of yastaghriq (-a)', 'half an hour · 1½ hours'] },
        { cells: ['200', '{k|مِئَتَيْ كِيلُومِتْرٍ}', 'dual in construct (no -n)', '200 km'] },
        { core: true, cells: ['300 · 1000', '{k|ثَلَاثَمِئَةِ} · {k|أَلْفَ كِيلُومِتْرٍ}', 'hundreds / thousand + genitive singular', '300 · 1000 km'] },
      ],
      ltr: true,
      foot: 'Website quiz 1: tastaghriqu r-riḥlatu thalātha sāʿātin — after 3–10 the counted noun is genitive plural.',
      notes: `GRAMMAR PART 2 — the numbers used in the website quiz (ثَلَاثَ سَاعَاتٍ), listening (ثَلَاثَمِئَةِ كِيلُومِتْرٍ · نِصْفَ سَاعَةٍ) and sorter (سَاعَةً وَنِصْفًا · عِشْرِينَ دَقِيقَةً · مِئَتَيْ كِيلُومِتْرٍ · أَلْفَ كِيلُومِتْرٍ).
Gender of 3–10 is the OPPOSITE of the singular noun: سَاعَةٌ (f.) → ثَلَاثُ سَاعَاتٍ; كِيلُومِتْرٌ (m.) → ثَلَاثَةُ كِيلُومِتْرَاتٍ.
After يَسْتَغْرِقُ / يَقْطَعُ the number is the OBJECT, so it ends in -a: ثَلَاثَ · عِشْرِينَ · أَلْفَ. After بَلَغَتْ … the same.
Grammar Mastery link: GM-NUM (numbers 3–10, 11–99, hundreds).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · comparative, superlative and statistics (website rule 2) · Develop', title: 'Faster than … the fastest …', ar: 'التَّفْضِيلُ وَالإِحْصَاءُ',
      cols: [{ label: 'Adjective', w: 2.3, size: 20 }, { label: 'Comparative: afʿalu min', w: 3.6, size: 20 }, { label: 'Superlative', w: 3.7, size: 20 }, { label: 'English', w: 2.73 }],
      rows: [
        { core: true, cells: ['سَرِيعٌ', 'القِطَارُ {k|أَسْرَعُ مِنَ} الحَافِلَةِ', '{k|أَسْرَعُ وَسِيلَةٍ}', 'fast · faster · fastest'] },
        { core: true, cells: ['نَظِيفٌ', 'الكَهْرَبَائِيَّةُ {k|أَنْظَفُ مِنَ} التَّقْلِيدِيَّةِ', 'الخِيَارُ {k|الأَنْظَفُ}', 'clean · cleaner · cleanest'] },
        { cells: ['حَدِيثٌ', 'المِتْرُو {k|أَحْدَثُ مِنْ} …', 'مِنْ {k|أَحْدَثِ الشَّبَكَاتِ}', 'one of the newest'] },
        { cells: ['مُزْدَحِمٌ', 'المُدُنُ {k|أَكْثَرُ ازْدِحَامًا}', '{k|أَقَلُّ ازْدِحَامًا}', 'more / less congested'] },
        { cells: ['statistic', '{w|تَبْلُغُ} سُرْعَتُهُ ثَلَاثَمِئَةِ كِيلُومِتْرٍ', '{w|تُمَثِّلُ} … خَطْوَةً نَحْوَ …', 'reaches · represents'] },
      ],
      ltr: true,
      foot: 'afʿal does not change for m / f; for adjectives with more than three root letters use akthar / aqall + a noun (-an).',
      notes: `GRAMMAR PART 3 — website rule “Superlative and statistics” (القِطَارُ السَّرِيعُ أَسْرَعُ وَسِيلَةٍ · تَبْلُغُ سُرْعَتُهُ القُصْوَى …) and website mistake 2: أَكْثَرُ سَرِيعٍ ✗ → أَسْرَعُ.
Superlative patterns: afʿalu + indefinite genitive (أَسْرَعُ وَسِيلَةٍ = the fastest mode) · al-afʿal (الأَنْظَفُ) · min afʿali + plural (مِنْ أَحْدَثِ الشَّبَكَاتِ = one of the newest networks). Feminine al-fuʿlā in set phrases: المُدُنُ الكُبْرَى (website reading).
Row 4: مُزْدَحِمٌ is Form VIII (too long for afʿal) → أَكْثَرُ / أَقَلُّ + ازْدِحَامًا (tamyīz).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · reasoning about transport with both conditionals (website rules 3–4 + teaching point 2) · Stretch', title: 'Predict the future — imagine the past', ar: 'إِذَا … سَـ · لَوْ … لَـ',
      cards: [
        { chip: 'REAL PREDICTION · CORE', color: '1E6B52', head: 'إِذَا … سَـ', big: 'إِذَا اعْتَمَدَتِ المُدُنُ عَلَى النَّقْلِ الكَهْرَبَائِيِّ، سَتَنْخَفِضُ الانْبِعَاثَاتُ.', en: 'If cities rely on electric transport, emissions will fall.', clue: 'Still possible.' },
        { chip: 'COUNTERFACTUAL · DEVELOP', color: 'C0386B', head: 'لَوْ … لَكَانَتْ', big: 'لَوْ تَطَوَّرَ النَّقْلُ العَامُّ مُبَكِّرًا، لَكَانَتِ المُدُنُ أَقَلَّ ازْدِحَامًا.', en: 'Had public transport developed early, cities would be less congested.', clue: 'It did not happen.' },
        { chip: 'HISTORY · STRETCH', color: '6B4C9A', head: 'لَوْ … لَـ', big: 'لَوْ وُجِدَ القِطَارُ السَّرِيعُ قَدِيمًا، لَوَصَلَ الحُجَّاجُ فِي سَاعَتَيْنِ.', en: 'Had the fast train existed long ago, pilgrims would have arrived in two hours.', clue: 'Then vs now.' },
      ],
      error: { text: 'Website mistake 3: a Type 2 result takes la-, not sa-.', pairs: [['لَوْ تَطَوَّرَ النَّقْلُ مُبَكِّرًا، لَقَلَّتِ الازْدِحَامَاتُ', 'لَوْ تَطَوَّرَ النَّقْلُ مُبَكِّرًا، سَتَقِلُّ الازْدِحَامَاتُ']] },
      notes: `GRAMMAR PART 4 — website rules “Real prediction” and “Counterfactual” and teaching point “Use both conditionals to reason about transport”. Cards 1–2 are from the website listening and rule examples.
Card 3 is teacher-built (the Haramain railway link): وُجِدَ is passive past (“existed”); the result لَوَصَلَ — la- + past.
Website challenge: “Write one real prediction with إِذَا and one counterfactual with لَوْ about transport.”`,
    },
  ],
  quick: [0, 1, 3, 5],
  rest: [2, 4, 6, 7],
  ido: {
    title: 'Watch me describe and compare',
    steps: [
      { head: 'Journey', ar: '{w|يَصِلُ بَيْنَ} … وَ … · {w|يَقْطَعُ مَسَافَةً}', think: 'Partners.' },
      { head: 'Statistic', ar: '{k|تَبْلُغُ} سُرْعَتُهُ …', think: 'A number.' },
      { head: 'Compare', ar: '{k|أَسْرَعُ وَسِيلَةٍ} · {k|الأَنْظَفَ}', think: 'afʿal.' },
      { head: 'Reason', ar: '{e|إِذَا} … {e|سَـ} · {p|لَوْ} … {p|لَـ}', think: 'Both types.' },
    ],
    legend: ['w', 'k', 'e', 'p'], legendLabels: { w: 'JOURNEY VERB', k: 'COMPARISON · STATISTIC', e: 'TYPE 1', p: 'TYPE 2' },
    model: 'يُعَدُّ الخَطُّ الحَدِيدِيُّ السَّرِيعُ {k|أَسْرَعَ وَسِيلَةٍ} بَيْنَ المُدُنِ الكُبْرَى؛ فَهُوَ {w|يَصِلُ بَيْنَ} مَكَّةَ وَالمَدِينَةِ {w|وَيَقْطَعُ مَسَافَةً} طَوِيلَةً فِي سَاعَاتٍ قَلِيلَةٍ، {k|وَتَبْلُغُ} سُرْعَتُهُ القُصْوَى ثَلَاثَمِئَةِ كِيلُومِتْرٍ. {e|وَإِذَا اعْتَمَدَتِ} المُدُنُ عَلَى النَّقْلِ الكَهْرَبَائِيِّ، {e|سَتَنْخَفِضُ} الانْبِعَاثَاتُ. {p|وَلَوْ تَطَوَّرَتْ} شَبَكَاتُ النَّقْلِ مُبَكِّرًا، {p|لَكَانَتْ} مُدُنُنَا أَقَلَّ ازْدِحَامًا.',
    modelEn: 'High-speed rail is considered the fastest mode between the major cities: it connects Makkah and Madinah and covers a long distance in a few hours, and its maximum speed reaches 300 km. If cities rely on electric transport, emissions will fall. And if transport networks had developed early, our cities would be less congested.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Superlative first: asraʿa wasīlatin. Journey: yaṣil BAYNA two places, yaqṭaʿ MASĀFATAN. A statistic with tablugh. Then reason: idhā + past … sa- for the future; law + past … la-kānat for what did not happen.”',
  },
  patternEn: ['the high-speed line connects Makkah and Madinah', 'its maximum speed reaches 300 km per hour', 'had public transport developed early, cities would be less congested'],
  gameKey: 'P3-L01',
  game: {
    title: 'Which mode? Match — then upgrade',
    pick: [1, 4, 0],
    en: ['I travel by train.', 'I travel by plane.', 'I go by bus.'],
    icons: [[['fa6', 'FaTrain', '1D5FBF']], [['fa6', 'FaPlane', 'C0386B']], [['fa6', 'FaBus', 'C77700']]],
    labels: ['a train', 'a plane', 'a bus'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6; a Foundation transport match). Use it as a 2-minute warm-up, then UPGRADE each sentence to formal register: أُسَافِرُ بِالقِطَارِ → يَصِلُ القِطَارُ السَّرِيعُ بَيْنَ … وَيَسْتَغْرِقُ … · أُسَافِرُ بِالطَّائِرَةِ → تَقْطَعُ الطَّائِرَةُ العِمْلَاقَةُ مَسَافَةَ … · أَذْهَبُ بِالحَافِلَةِ → تُعَدُّ الحَافِلَةُ الهِيدْرُوجِينِيَّةُ أَنْظَفَ لِلْبِيئَةِ.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build a transport description (website live builder)', title: 'Journey + comparison + conditional', ar: 'ابْنِ وَصْفَكَ',
      cols: [{ label: '1 · Journey fact', w: 4.0, size: 16 }, { label: '2 · Comparison / statistic', w: 4.0, size: 16 }, { label: '3 · Conditional / citation', w: 4.33, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Say it, then write three different versions.',
      notes: `WE DO (3 min) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Core: read row 1 across. Develop: mix rows and name each journey verb’s partner. Stretch: replace column 3 with your own law … la- sentence.`,
    },
  ],
  sorterTitle: 'A time, a distance — or two places?',
  sorterCats: ['yastaghriq (time)', 'yaqṭaʿ (distance)', 'yaṣil bayna (places)'],
  sorterNotes: 'Then build a full sentence for each column: تَسْتَغْرِقُ الرِّحْلَةُ سَاعَةً وَنِصْفًا · يَقْطَعُ القِطَارُ مِئَتَيْ كِيلُومِتْرٍ · يَصِلُ الخَطُّ بَيْنَ العَاصِمَةِ وَالسَّاحِلِ.',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('يَصِلُ بَيْنَ', 'yaṣil bayna').replace('يَبْلُغُ', 'yablugh').replace('لَوْ', 'law') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; rule headings and formulas in English and transliteration; sorter headings in transliteration; the numbers table and the Haramain card are teacher-built from the website texts; the website visual game (a Foundation transport match) is used as a warm-up. All other website items are used as published.',
  hints: ['yaṣil + ilā?', 'akthar sarīʿ?', 'law … sa-?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: yaṣil bayna · tablugh · tastaghriq.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write down every number you hear as a figure.',
  gloss: [
    ['يَشْهَدُ العَالَمُ العَرَبِيُّ نَهْضَةً فِي النَّقْلِ العَامِّ. فَالخَطُّ الحَدِيدِيُّ السَّرِيعُ يَصِلُ بَيْنَ مَكَّةَ وَالمَدِينَةِ، وَتَبْلُغُ سُرْعَتُهُ القُصْوَى ثَلَاثَمِئَةِ كِيلُومِتْرٍ فِي السَّاعَةِ.', 'The Arab world is witnessing a boom in public transport. The high-speed line connects Makkah and Madinah, and its maximum speed reaches 300 km per hour.'],
    ['وَقَدْ قَلَّصَ هٰذَا المَشْرُوعُ وَقْتَ السَّفَرِ بِنِسْبَةٍ كَبِيرَةٍ. وَأَشَارَتْ تَقَارِيرُ إِلَى أَنَّ مِتْرُو الرِّيَاضِ أَصْبَحَ مِنْ أَحْدَثِ الشَّبَكَاتِ فِي العَالَمِ.', 'This project has cut travel time considerably. Reports indicated that the Riyadh metro has become one of the newest networks in the world.'],
    ['وَتَسْتَغْرِقُ الرِّحْلَةُ بَيْنَ المَرْكَزِ وَالمَطَارِ نِصْفَ سَاعَةٍ فَقَطْ.', 'The journey between the centre and the airport takes only half an hour.'],
    ['وَتُعَدُّ السَّيَّارَةُ الكَهْرَبَائِيَّةُ أَنْظَفَ لِلْبِيئَةِ مِنَ السَّيَّارَةِ التَّقْلِيدِيَّةِ. وَإِذَا اعْتَمَدَتِ المُدُنُ عَلَى النَّقْلِ الكَهْرَبَائِيِّ، سَتَنْخَفِضُ انْبِعَاثَاتُ الكَرْبُونِ.', 'The electric car is considered cleaner for the environment than the traditional car. If cities rely on electric transport, carbon emissions will fall.'],
    ['وَلَوْ بَدَأَتْ هٰذِهِ المَشَارِيعُ مُبَكِّرًا، لَكَانَتْ مُدُنُنَا أَقَلَّ ازْدِحَامًا اليَوْمَ.', 'And had these projects started early, our cities would be less congested today.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ رِحْلَةً بِالقِطَارِ السَّرِيعِ مُسْتَعْمِلًا «يَسْتَغْرِقُ» وَ«يَصِلُ بَيْنَ».' },
      { route: 'develop', ar: 'قَارِنْ بَيْنَ وَسِيلَتَيْنِ بِاسْتِعْمَالِ صِيغَةِ التَّفْضِيلِ.' },
      { route: 'stretch', ar: 'تَنَبَّأْ بِمُسْتَقْبَلِ النَّقْلِ بِشَرْطٍ مِنَ النَّوْعِ الأَوَّلِ.' },
    ],
    stems: [
      { route: 'core', ar: 'يَصِلُ القِطَارُ بَيْنَ ______ وَ ______ ، وَتَسْتَغْرِقُ الرِّحْلَةُ ______ .' },
      { route: 'develop', ar: '______ أَسْرَعُ مِنْ ______ ، لٰكِنَّ ______ أَنْظَفُ لِلْبِيئَةِ.' },
      { route: 'stretch', ar: 'إِذَا اعْتَمَدْنَا عَلَى ______ ، ______ .' },
    ],
    modelEn: ['Describe a journey by high-speed train.', 'The train connects the two cities and takes only two hours.', 'And how do you see the future of transport?', 'If we rely on electric vehicles, emissions will fall — and had we started early, our cities would be cleaner.'],
    notes: 'Website prompts and model. Pair task: each student describes a real journey they know (school run, a trip to family, Umrah) with one journey verb and one number. To a girl: صِفِي · مُسْتَعْمِلَةً · قَارِنِي · تَنَبَّئِي.',
  },
  write: {
    core: { amount: '6 sentences', how: 'Website Core: six formal journey sentences with the correct complements.' },
    develop: { amount: '60–80 words', how: 'Website Develop: add a superlative comparison and a statistic.' },
    stretch: { amount: '90–100 words', how: 'Website task: compare three modes with the journey verbs, a superlative, a statistic, environment words and both conditional types.' },
  },
  frames: {
    core: [
      { en: 'The fast train connects … and …', ar: 'يَصِلُ القِطَارُ السَّرِيعُ بَيْنَ ______ وَ ______ .' },
      { en: 'The journey takes …', ar: 'تَسْتَغْرِقُ الرِّحْلَةُ ______ .' },
      { en: 'The train covers a long distance in …', ar: 'يَقْطَعُ القِطَارُ مَسَافَةً طَوِيلَةً فِي ______ .' },
      { en: 'Its maximum speed reaches …', ar: 'تَبْلُغُ سُرْعَتُهُ القُصْوَى ______ .' },
    ],
    develop: [
      { en: '… is the fastest mode inside …', ar: '______ أَسْرَعُ وَسِيلَةٍ دَاخِلَ ______ .' },
      { en: 'The electric car represents …', ar: 'تُمَثِّلُ السَّيَّارَةُ الكَهْرَبَائِيَّةُ ______ .' },
      { en: 'If cities rely on …, …', ar: 'إِذَا اعْتَمَدَتِ المُدُنُ عَلَى ______ ، ______ .' },
      { en: 'If networks had developed early, …', ar: 'لَوْ تَطَوَّرَتِ الشَّبَكَاتُ مُبَكِّرًا، ______ .' },
    ],
    bank: ['مَكَّةَ وَالمَدِينَةِ', 'المَرْكَزِ وَالمَطَارِ', 'ثَلَاثَ سَاعَاتٍ', 'نِصْفَ سَاعَةٍ', 'ثَلَاثَمِئَةِ كِيلُومِتْرٍ فِي السَّاعَةِ', 'مِتْرُو الأَنْفَاقِ', 'المَدِينَةِ', 'الخِيَارَ الأَنْظَفَ لِلْبِيئَةِ', 'النَّقْلِ الكَهْرَبَائِيِّ', 'سَتَنْخَفِضُ الانْبِعَاثَاتُ', 'لَكَانَتِ المُدُنُ أَقَلَّ ازْدِحَامًا', 'البُنْيَةُ التَّحْتِيَّةُ'],
  },
  stretch: [
    ['يَشْهَدُ العَالَمُ العَرَبِيُّ تَطَوُّرًا كَبِيرًا', 'the Arab world is witnessing great development'],
    ['يُعَدُّ … أَسْرَعَ وَسِيلَةٍ بَيْنَ المُدُنِ الكُبْرَى', '… is considered the fastest mode between the major cities'],
    ['فَيَسْتَغْرِقُ دَقَائِقَ لِلتَّنَقُّلِ دَاخِلَ المَدِينَةِ', 'it takes minutes to get around inside the city'],
    ['لِأَنَّهَا تُقَلِّلُ انْبِعَاثَاتِ الكَرْبُونِ', 'because it reduces carbon emissions'],
    ['بِشَكْلٍ كَبِيرٍ', 'significantly'],
  ],
  modelEn: 'The Arab world is witnessing great development in transport. High-speed rail is considered the fastest mode between the major cities: it connects Makkah and Madinah and covers a long distance in a few hours, and its maximum speed reaches 300 km. As for the underground metro, it takes minutes to get around inside the city. The electric car represents the cleanest option for the environment because it reduces carbon emissions. If cities rely on electric transport, emissions will fall significantly. And if public transport networks had developed early, our cities would be less congested today.',
  find: ['yaṣil bayna · yaqṭaʿ masāfatan · yastaghriq', 'a superlative (asraʿa wasīlatin · al-anẓaf)', 'a statistic (tablugh · tumaththil)', 'idhā … sa- and law … la-kānat'],
  modelNotes: 'Website writing model. Evidence: يُعَدُّ … أَسْرَعَ وَسِيلَةٍ · يَصِلُ بَيْنَ مَكَّةَ وَالمَدِينَةِ · يَقْطَعُ مَسَافَةً طَوِيلَةً · تَبْلُغُ سُرْعَتُهُ القُصْوَى · يَسْتَغْرِقُ دَقَائِقَ · تُمَثِّلُ … الخِيَارَ الأَنْظَفَ · إِذَا اعْتَمَدَتِ … سَتَنْخَفِضُ · لَوْ تَطَوَّرَتْ … لَكَانَتْ.',
  selfCheck: [
    { route: 'core', text: 'yastaghriq + a time · yaqṭaʿ masāfatan · yaṣil BAYNA two places.' },
    { route: 'core', text: 'A feminine vehicle or journey takes ta- (tastaghriqu r-riḥla).' },
    { route: 'develop', text: 'My numbers have the right form (thalātha sāʿātin · ʿishrīna daqīqatan).' },
    { route: 'develop', text: 'I compared with afʿal (asraʿ · anẓaf), not akthar sarīʿ.' },
    { route: 'stretch', text: 'idhā … sa- for a prediction; law … la- for a counterfactual.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['تَسْتَثْمِرُ', 'invests'], ['بِكَثَافَةٍ', 'heavily'], ['يَرْبِطُ بَيْنَ', 'links'], ['المُدُنِ الكُبْرَى', 'the major cities'], ['خَفْضِ', 'reducing'],
    ['يُعَدُّ', 'is considered'], ['لِلتَّنَقُّلِ', 'for getting around'], ['الأَحْيَاءِ', 'neighbourhoods'], ['تَدْعَمُ الاقْتِصَادَ', 'supports the economy'], ['جَوْدَةُ الحَيَاةِ', 'quality of life'],
  ],
  prep: {
    words: [['جَدْوَلُ رِحْلَةٍ', 'a travel itinerary', 'pl. جَدَاوِلُ'], ['يَحْجِزُ', 'he books', 'تَحْجِزُ she'], ['تَأْشِيرَةٌ', 'a visa', 'pl. تَأْشِيرَاتٌ'], ['يُقِيمُ فِي', 'he stays at', 'تُقِيمُ she'], ['تَسْجِيلُ الوُصُولِ', 'check-in', '—']],
    questionEn: 'Plan a trip: where will you go, and where will you stay?',
    questionAr: 'سَأَحْجِزُ رِحْلَةً إِلَى ______ ، وَسَأُقِيمُ فِي ______ .',
    homework: {
      core: 'Write six formal journey sentences with yastaghriq, yaqṭaʿ and yaṣil bayna.',
      develop: 'Add a superlative comparison and a statistic (60–80 words).',
      stretch: 'Website writing task: a 90–100-word comparison of three modes of transport.',
    },
    wordsSource: 'The five words come from the website P3-L02 vocabulary (booking and travel documents).',
  },
  remember: 'Remember: yastaghriq + a TIME · yaqṭaʿ MASĀFATAN · yaṣil BAYNA + two places — compare with afʿal (asraʿu wasīlatin) — and reason with idhā … sa- (real) and law … la- (unreal).',
});

module.exports = { meta, slides };
