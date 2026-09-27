'use strict';
/* F6-L05 · Describing Your Town: Advantages and Disadvantages — website: Pathways › Foundation › F6 › F6-L05 (town adjectives m/f, مِنْ مَزَايَا / مِنْ عُيُوبِ … أَنَّ, تَتَمَيَّزُ بِـ, تَفْتَقِرُ إِلَى, balanced argument). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F6')({
  n: 5, fileTitle: 'Describing_Your_Town_Advantages_Disadvantages', chip: 'Describing Your Town',
  title: 'Describing Your Town: Advantages and Disadvantages', arabic: 'وَصْفُ مَدِينَتِكَ — المَزَايَا وَالعُيُوبُ',
  focus: 'Describe a town with agreeing adjectives, then give a balanced view: مِنْ مَزَايَا مَدِينَتِي أَنَّ … · مِنْ عُيُوبِهَا أَنَّ … · تَتَمَيَّزُ بِـ … · تَفْتَقِرُ إِلَى …',
  icon: 'FaScaleBalanced', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('F6-L05', {
  support: `• Core: four descriptive sentences with correct gender — مَدِينَتِي هَادِئَةٌ وَنَظِيفَةٌ (city = feminine!).
• Develop: one advantage and one disadvantage with أَنَّ in a connected paragraph.
• Stretch: a nuanced review with both argument frames, a distinctive feature (تَتَمَيَّزُ بِـ) and a recommendation (أُوصِي بِزِيَارَتِهَا).
• Website: “A strong opinion is supported by a precise feature, not just ‘good’ or ‘bad’.” · “Balanced writing is not negative writing.”
• Students may describe an imagined city (website task) — useful for anyone who prefers not to describe their real area.
• Synonyms: the prep word مُزْدَحِمٌ and the lesson word مُكْتَظٌّ both mean crowded.`,
  teach: 'Town adjectives (m. / f.), then the argument frames with أَنَّ.',
  wedo: 'Sort advantages and disadvantages, fix the agreement and listen to Salma and Omar compare towns.',
  next: { nextCode: 'F6-L06', nextTitle: 'Shopping in Town: Prices and Comparisons', nextAr: 'التَّسَوُّقُ فِي المَدِينَةِ' },
  doNow: {
    questions: [
      q('What does مَزَايَا mean?', ['advantages', 'disadvantages', 'prices'], 'Prepared at home (F6-L04).'),
      q('What does مُزْدَحِمٌ mean?', ['crowded', 'quiet', 'clean'], 'Prepared at home (F6-L04). The lesson also uses مُكْتَظٌّ.'),
      q('Complete: ____ الرِّحْلَةُ سَاعَتَيْنِ.', ['تَسْتَغْرِقُ', 'يَسْتَغْرِقُ', 'أَسْتَغْرِقُ'], 'F6-L04: journey is feminine.'),
      q('Which asks “from which platform?”', ['مِنْ أَيِّ رَصِيفٍ؟', 'مَتَى الرَّصِيفُ؟', 'كَمْ رَصِيفًا؟'], 'F6-L04 ticket questions.'),
      q('Choose “There is a school.”', ['تُوجَدُ مَدْرَسَةٌ.', 'يُوجَدُ مَدْرَسَةٌ.', 'هُنَاكَ المَدْرَسَةُ.'], 'F6-L01: feminine place → tūjadu.'),
    ],
    keyIdea: { text: 'City and town are feminine — and so are their adjectives. Then weigh both sides.', ar: 'مَدِينَتِي {e|هَادِئَةٌ}، {w|وَلَكِنَّ} الشَّوَارِعَ مُكْتَظَّةٌ.' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F6-L04. Questions 3–5 retrieve F6-L04 (duration, platform) and F6-L01 (tūjadu).',
  },
  routes: {
    core: ['I can describe my town with four adjectives.', 'I can make them agree (مَدِينَتِي جَمِيلَةٌ).'],
    develop: ['I can give an advantage and a disadvantage with أَنَّ.', 'I can use تَتَمَيَّزُ بِـ.'],
    stretch: ['I can write a balanced review.', 'I can end with a recommendation.'],
  },
  bridge: [
    { ar: 'عَيْبٌ', urdu: 'عیب', tr: 'aib', en: 'fault → disadvantage' },
    { ar: 'مُمْتَازٌ · مِيزَةٌ', urdu: 'امتیاز', tr: 'imtiyāz', en: 'distinction → advantage' },
    { ar: 'خَطِيرٌ', urdu: 'خطرناک', tr: 'khatarnāk', en: 'dangerous' },
    { ar: 'آمِنٌ', urdu: 'امن', tr: 'aman', en: 'peace → safe' },
    { ar: 'بِالرَّغْمِ', urdu: 'باوجود', tr: 'bāwujūd', en: 'despite (a new word)' },
  ],
  bridgeNotes: 'URDU BRIDGE: عیب (fault) → عَيْبٌ (a disadvantage). امتیاز (distinction) shares its root with مِيزَةٌ and تَتَمَيَّزُ (is distinguished). خطرناک (Persian ending on Arabic خطر) → خَطِيرٌ. امن (peace) → آمِنٌ (safe). “Despite” is new: Urdu باوجود vs Arabic بِالرَّغْمِ مِنْ.',
  core: ['مِيزَةٌ / مَزَايَا', 'عَيْبٌ / عُيُوبٌ', 'مُكْتَظٌّ / مُكْتَظَّةٌ', 'هَادِئٌ / هَادِئَةٌ', 'صَاخِبٌ / صَاخِبَةٌ', 'نَظِيفٌ / نَظِيفَةٌ', 'آمِنٌ / آمِنَةٌ', 'جَمِيلٌ / جَمِيلَةٌ', 'حَدِيثٌ / حَدِيثَةٌ', 'نَشِيطٌ / نَشِيطَةٌ', 'تَتَمَيَّزُ بِـ', 'تَفْتَقِرُ إِلَى'],
  vocabSlides: 3,
  vocabNotes: {
    0: 'Every card: masculine / feminine. For a CITY use the feminine. For plural things (streets, parks) also use the feminine singular: الشَّوَارِعُ مُكْتَظَّةٌ، الحَدَائِقُ نَظِيفَةٌ.',
    1: 'FLEX: the argument frames are on the grammar slides. مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى = on one hand … on the other.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · agreement and distinctive features (website rules 3 and 4)', title: 'My city is modern and clean', ar: 'مَدِينَةٌ حَدِيثَةٌ وَنَظِيفَةٌ',
      cols: [{ label: 'Masculine place', w: 6.1, size: 24 }, { label: 'Feminine place', w: 6.23, size: 24 }],
      rows: [
        { core: true, cells: [P('الحَيُّ {w|آمِنٌ} وَ{w|هَادِئٌ}.', 'The neighbourhood is safe and quiet.'), P('المَدِينَةُ {e|آمِنَةٌ} وَ{e|هَادِئَةٌ}.', 'The city is safe and quiet.')] },
        { core: true, cells: [P('مَرْكَزُ المَدِينَةِ {w|صَاخِبٌ}.', 'The city centre is noisy.'), P('قَرْيَتِي {e|جَمِيلَةٌ} وَلَكِنَّهَا بَعِيدَةٌ.', 'My village is beautiful but far away.')] },
        { cells: [P('{w|يَتَمَيَّزُ} الحَيُّ بِحَدَائِقِهِ.', 'The area is distinguished by its parks.'), P('{e|تَتَمَيَّزُ} المَدِينَةُ بِأَسْوَاقِهَا القَدِيمَةِ.', 'The city is known for its old markets.')] },
        { cells: [P('{w|يَفْتَقِرُ} الحَيُّ إِلَى مَكْتَبَةٍ.', 'The area lacks a library.'), P('{e|تَفْتَقِرُ} البَلْدَةُ إِلَى مُسْتَشْفًى.', 'The town lacks a hospital.')] },
      ],
      foot: 'madīnatī jamīla, not jamīl. Plural things take the feminine too: ash-shawāriʿu muktaẓẓa.',
      notes: `GRAMMAR PART 1 — website rules “Make adjectives agree” (مَدِينَةٌ / بَلْدَةٌ / قَرْيَةٌ + feminine adjective) and “Highlight a distinctive feature” (تَتَمَيَّزُ + المَدِينَةُ + بِـ — the verb is feminine with مَدِينَةٌ).
Website mistakes: مَدِينَتِي حَدِيثٌ ✗ → حَدِيثَةٌ ✓ · يَتَمَيَّزُ المَدِينَةُ ✗ → تَتَمَيَّزُ المَدِينَةُ ✓.
Link: F5-L04 (agreement follows the noun) and F6-L04 (the verb agrees with its subject).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · a balanced argument (website rules 1 and 2)', title: 'One advantage … one disadvantage …', ar: 'مِنْ مَزَايَا … مِنْ عُيُوبِ …',
      cards: [
        { chip: 'ADVANTAGE', color: '1E7B4F', head: 'مِنْ مَزَايَا … أَنَّ', big: 'مِنْ مَزَايَا مَدِينَتِي أَنَّ المَوَاصَلَاتِ سَرِيعَةٌ.', en: 'One advantage of my city is that transport is fast.', clue: 'anna + a full sentence.' },
        { chip: 'DISADVANTAGE', color: 'C0386B', head: 'مِنْ عُيُوبِ … أَنَّ', big: 'مِنْ عُيُوبِهَا أَنَّ الشَّوَارِعَ مُكْتَظَّةٌ.', en: 'One disadvantage is that the streets are crowded.', clue: 'A real contrast.' },
        { chip: 'OVERALL', color: '6B4C9A', head: 'بِالرَّغْمِ مِنْ ذَلِكَ', big: 'بِالرَّغْمِ مِنْ ذَلِكَ، أُوصِي بِزِيَارَتِهَا.', en: 'Despite that, I recommend visiting it.', clue: 'End with a judgement.' },
      ],
      error: { text: 'Website common error: add anna before the clause.', pairs: [['مِنْ مَزَايَا مَدِينَتِي أَنَّ المَوَاصَلَاتِ جَيِّدَةٌ.', 'مِنْ مَزَايَا مَدِينَتِي المَوَاصَلَاتُ جَيِّدَةٌ.']] },
      notes: `GRAMMAR PART 2 — website rules “Introduce an advantage” and “Introduce a disadvantage” (مِنْ مَزَايَا / مِنْ عُيُوبِ + place + أَنَّ + clause).
After أَنَّ the subject ends in -a: أَنَّ المَوَاصَلَاتِ، أَنَّ الشَّوَارِعَ. With a pronoun: أَنَّهَا آمِنَةٌ (the city), أَنَّهُ آمِنٌ (the neighbourhood).
Website: “Use a real contrast rather than repeating the same idea negatively.”`,
    },
  ],
  quick: [0, 1, 2, 4],
  rest: [3, 5, 7],
  ido: {
    title: 'Watch me write a balanced town review',
    steps: [
      { head: '1 · Describe', ar: 'مَدِينَتِي مُتَوَسِّطَةُ الحَجْمِ وَ{e|حَدِيثَةٌ}.', think: 'City = f.' },
      { head: '2 · Feature', ar: '{e|تَتَمَيَّزُ} بِحَدَائِقِهَا الكَبِيرَةِ وَمَكْتَبَاتِهَا.', think: 'tatamayyazu bi-.' },
      { head: '3 · For / against', ar: '{k|مِنْ مَزَايَاهَا أَنَّ} الأَحْيَاءَ آمِنَةٌ، وَ{w|مِنْ عُيُوبِهَا أَنَّ} الشَّوَارِعَ مُكْتَظَّةٌ.', think: 'Both sides + anna.' },
      { head: '4 · Judgement', ar: 'بِالرَّغْمِ مِنْ ذَلِكَ، أُحِبُّ مَدِينَتِي وَأُوصِي بِزِيَارَتِهَا.', think: 'Despite that …' },
    ],
    legend: ['e', 'k', 'w'], legendLabels: { e: 'FEMININE', k: 'FOR', w: 'AGAINST' },
    model: 'مَدِينَتِي مُتَوَسِّطَةُ الحَجْمِ وَ{e|حَدِيثَةٌ}. {e|تَتَمَيَّزُ} بِحَدَائِقِهَا الكَبِيرَةِ وَمَكْتَبَاتِهَا وَمَوَاصَلَاتِهَا العَامَّةِ. {k|مِنْ مَزَايَاهَا أَنَّ} الأَحْيَاءَ آمِنَةٌ وَأَنَّ المَحَطَّاتِ قَرِيبَةٌ مِنَ البُيُوتِ. {w|مِنْ عُيُوبِهَا أَنَّ} مَرْكَزَ المَدِينَةِ صَاخِبٌ وَأَنَّ الشَّوَارِعَ مُكْتَظَّةٌ فِي الصَّبَاحِ. كَمَا أَنَّ بَعْضَ المَنَاطِقِ تَفْتَقِرُ إِلَى المَلَاعِبِ. بِالرَّغْمِ مِنْ ذَلِكَ، أُحِبُّ مَدِينَتِي وَأُوصِي بِزِيَارَتِهَا.',
    modelEn: 'My city is medium-sized and modern. It is distinguished by its big parks, its libraries and its public transport. One advantage is that the neighbourhoods are safe and the stations are close to the houses. One disadvantage is that the city centre is noisy and the streets are crowded in the morning. Also, some areas lack sports grounds. Despite that, I love my city and recommend visiting it.',
    notes: 'I DO (3 min) — the website writing model built step by step. Students copy it, then replace the advantage and disadvantage with their own.',
  },
  sorterNotes: 'Turn two cards into full sentences: مِنْ مَزَايَا مَدِينَتِي أَنَّ … / مِنْ عُيُوبِهَا أَنَّ …',
  hints: ['City is m. or f.?', 'City is f.: which verb form?', 'What is missing before the clause?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 4.\nListen for: مِنْ مَزَايَاهَا · وَلَكِنَّ · مِنْ عُيُوبِهَا.',
  listenRoutes: 'Core: questions 1, 3 and 4. Develop / Stretch: all 5, then say which town you prefer and why.',
  gloss: [
    ['سَلْمَى: أُحِبُّ مَدِينَتِي لِأَنَّهَا حَدِيثَةٌ وَنَظِيفَةٌ.', 'Salma: I love my city because it is modern and clean.'],
    ['مِنْ مَزَايَاهَا أَنَّ المَوَاصَلَاتِ سَرِيعَةٌ وَأَنَّ فِيهَا حَدَائِقَ كَثِيرَةً. وَلَكِنَّ الشَّوَارِعَ مُكْتَظَّةٌ.', 'Its advantages are that transport is fast and it has many parks. But the streets are crowded.'],
    ['عُمَرُ: أَنَا أَسْكُنُ فِي بَلْدَةٍ صَغِيرَةٍ. هِيَ هَادِئَةٌ وَآمِنَةٌ، وَتَتَمَيَّزُ بِسُوقِهَا التَّقْلِيدِيِّ.', 'Omar: I live in a small town. It is quiet and safe, and known for its traditional market.'],
    ['مِنْ عُيُوبِهَا أَنَّهَا تَفْتَقِرُ إِلَى الجَامِعَاتِ وَالقِطَارَاتِ.', 'One disadvantage is that it lacks universities and trains.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ مَدِينَتَكَ بِثَلَاثِ صِفَاتٍ.' },
      { route: 'develop', ar: 'مَا أَهَمُّ مِيزَةٍ فِي مَدِينَتِكَ؟' },
      { route: 'develop', ar: 'مَا أَكْبَرُ عَيْبٍ؟' },
      { route: 'stretch', ar: 'هَلْ تُوصِي بِزِيَارَتِهَا؟ وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'مَدِينَتِي ______ وَ ______ وَ ______ .' },
      { route: 'develop', ar: 'مِنْ مَزَايَاهَا أَنَّ ______ .' },
      { route: 'develop', ar: 'مِنْ عُيُوبِهَا أَنَّ ______ .' },
      { route: 'stretch', ar: 'بِالرَّغْمِ مِنْ ذَلِكَ، أُوصِي بِزِيَارَتِهَا لِأَنَّ …' },
    ],
    modelEn: ['What is the most important advantage of your city?', 'Its advantages include good transport and safe neighbourhoods.'],
    notes: 'Website “Town review panel” — all four prompts are the website’s. Panel format: one student describes, two “judges” ask about the advantage and disadvantage. Website model: مَا أَهَمُّ مِيزَةٍ فِي مَدِينَتِكَ؟ — مِنْ مَزَايَاهَا أَنَّ المَوَاصَلَاتِ جَيِّدَةٌ وَأَنَّ الأَحْيَاءَ آمِنَةٌ. — وَمَا أَكْبَرُ عَيْبٍ؟ — الشَّوَارِعُ مُكْتَظَّةٌ، وَلَكِنِّي أُوصِي بِزِيَارَتِهَا.',
  },
  write: {
    core: { amount: '4 sentences', how: 'Four descriptive sentences with feminine adjectives for the city.' },
    develop: { amount: '70–80 words', how: 'One advantage and one disadvantage with anna in a connected paragraph.' },
    stretch: { amount: '80–100 words', how: 'Website task: a balanced review with a distinctive feature, both frames and a recommendation.' },
  },
  frames: {
    core: [
      { en: 'My city is beautiful and clean.', ar: 'مَدِينَتِي جَمِيلَةٌ وَنَظِيفَةٌ.' },
      { en: 'My village is quiet and safe.', ar: 'قَرْيَتِي هَادِئَةٌ وَآمِنَةٌ.' },
      { en: 'The city centre is noisy.', ar: 'مَرْكَزُ المَدِينَةِ صَاخِبٌ.' },
      { en: 'The streets are crowded.', ar: 'الشَّوَارِعُ مُكْتَظَّةٌ.' },
      { en: 'I like my town because it is …', ar: 'أُحِبُّ مَدِينَتِي لِأَنَّهَا ______ .' },
    ],
    develop: [
      { en: 'One advantage of my city is that …', ar: 'مِنْ مَزَايَا مَدِينَتِي أَنَّ ______ .' },
      { en: 'One disadvantage is that …', ar: 'مِنْ عُيُوبِهَا أَنَّ ______ .' },
      { en: 'It is distinguished by its …', ar: 'تَتَمَيَّزُ بِـ ______ .' },
      { en: 'It lacks …', ar: 'تَفْتَقِرُ إِلَى ______ .' },
      { en: 'Overall, I recommend visiting it.', ar: 'بِصِفَةٍ عَامَّةٍ، أُوصِي بِزِيَارَتِهَا.' },
    ],
    bank: ['هَادِئَةٌ', 'صَاخِبَةٌ', 'نَظِيفَةٌ', 'آمِنَةٌ', 'حَدِيثَةٌ', 'تَقْلِيدِيَّةٌ', 'نَشِيطَةٌ', 'مُكْتَظَّةٌ', 'مِنْ مَزَايَا … أَنَّ', 'مِنْ عُيُوبِ … أَنَّ', 'تَتَمَيَّزُ بِـ', 'تَفْتَقِرُ إِلَى'],
  },
  stretch: [
    ['مَدِينَةٌ سَاحِلِيَّةٌ', 'a coastal city'],
    ['تَزْدَحِمُ الشَّوَارِعُ فِي الصَّيْفِ', 'the streets get crowded in summer'],
    ['مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', 'on one hand … on the other …'],
    ['كَمَا أَنَّ …', 'also / moreover …'],
    ['لِأَنَّهَا مُرِيحَةٌ وَمُمْتِعَةٌ', 'because it is comfortable and enjoyable'],
  ],
  modelEn: 'My city is medium-sized and modern. It is distinguished by its big parks, its libraries and its public transport. One advantage is that the neighbourhoods are safe and the stations are close to the houses. One disadvantage is that the city centre is noisy and the streets are crowded in the morning. Also, some areas lack sports grounds. Despite that, I love my city and recommend visiting it.',
  find: ['a feature', 'an advantage', 'a disadvantage', 'a judgement'],
  modelNotes: 'Evidence: تَتَمَيَّزُ بِحَدَائِقِهَا · مِنْ مَزَايَاهَا أَنَّ · مِنْ عُيُوبِهَا أَنَّ · بِالرَّغْمِ مِنْ ذَلِكَ، أُوصِي بِزِيَارَتِهَا. Adjectives: حَدِيثَةٌ، آمِنَةٌ، قَرِيبَةٌ، صَاخِبٌ، مُكْتَظَّةٌ.',
  selfCheck: [
    { route: 'core', text: 'City / town adjectives are feminine.' },
    { route: 'core', text: 'I used six different adjectives.' },
    { route: 'develop', text: 'Advantage + disadvantage with أَنَّ.' },
    { route: 'develop', text: 'تَتَمَيَّزُ بِـ or تَفْتَقِرُ إِلَى.' },
    { route: 'stretch', text: 'I ended with a recommendation.' },
  ],
  exit: [0, 2, 4],
  glossary: [
    ['سَاحِلِيَّةٍ', 'coastal'], ['بِشَاطِئِهَا', 'by its beach'], ['مَبَانِيهَا القَدِيمَةِ', 'its old buildings'], ['الحَيَاةَ فِيهَا نَشِيطَةٌ', 'life there is lively'], ['رَخِيصَةٌ', 'cheap'],
    ['مِنْ نَاحِيَةٍ أُخْرَى', 'on the other hand'], ['تَزْدَحِمُ', 'get crowded'], ['بَعْضُ الأَحْيَاءِ', 'some neighbourhoods'], ['بِالرَّغْمِ مِنْ ذَلِكَ', 'despite that'], ['أُوصِي بِزِيَارَةِ', 'I recommend visiting'],
  ],
  prep: {
    words: [['مَتْجَرٌ', 'a shop', 'pl. مَتَاجِرُ'], ['أَرْخَصُ مِنْ', 'cheaper than', '—'], ['أَغْلَى مِنْ', 'more expensive than', '—'], ['خَصْمٌ', 'a discount', '—'], ['يَشْتَرِي', 'buys', 'she: تَشْتَرِي']],
    questionEn: 'Where do you buy clothes: a shopping centre, a market or online?',
    questionAr: 'أَشْتَرِي المَلَابِسَ مِنْ …',
    homework: {
      core: 'Website F6-L05: the vocabulary tab and the “Advantage or disadvantage?” sorter.',
      develop: 'Write 70–80 words with one advantage and one disadvantage (anna).',
      stretch: 'Website writing task: a balanced 80–100-word review with a recommendation.',
    },
    wordsSource: 'The five words come from the website F6-L06 lesson (shopping, prices and comparisons).',
  },
  remember: 'Remember: مَدِينَتِي + feminine adjective · مِنْ مَزَايَا / عُيُوبِ … أَنَّ … · end with a judgement.',
});

module.exports = { meta, slides };
