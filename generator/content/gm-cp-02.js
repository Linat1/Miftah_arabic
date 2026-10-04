'use strict';
/* GM-CP-02 · Spatial and Temporal Locators — website: Mastery & Revision › Grammar › Conjunctions and Prepositions › Lesson 2 (spatial
 * locators amāma, warāʾa, khalfa, fawqa, taḥta, bi-jānibi, muqābila, bi-l-qurbi min, baʿīdan ʿan, ḥawla, dākhila, khārija + genitive;
 * technically locative nouns / adverbs — learn locator + genitive noun; bayna X wa-Y with both nouns genitive; ʿinda; time locators
 * qabla, baʿda, athnāʾa, khilāla, mundhu, ḥattā; map description; clinic). Quizzes are the website’s (Entry, Spatial, Two-Part, Time,
 * Final Mastery) plus the website game; items whose options are meta-statements (“Cambridge groups …”) are not used. Sorter, I-do,
 * frames, reading and model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__08-conjunctions-prepositions__grammar-mastery-02-spatial-locators';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-CP-02', fileTitle: 'Spatial_Temporal_Locators', title: 'Spatial and Temporal Locators', arabic: 'ظُرُوفُ الْمَكَانِ وَالزَّمَانِ',
  focus: 'Locators say exactly where and when: amāma (in front of), khalfa (behind), bayna (between), qabla (before), athnāʾa (during). Each one is followed by a noun with kasra: amāma l-bayti.',
  icon: 'FaMapLocationDot',
});

const slides = G.gmLesson({
  code: 'GM-CP-02', site: KEY,
  support: `• Core: أَمَامَ · خَلْفَ · فَوْقَ · تَحْتَ · بِجَانِبِ for a room. Develop: بَيْنَ … وَ … · مُقَابِلَ · بِالْقُرْبِ مِنْ · بَعِيدًا عَنْ for a map, and time locators قَبْلَ · بَعْدَ · أَثْنَاءَ · خِلَالَ · مُنْذُ. Stretch: technical status (locative nouns, not particles) and a 70–90-word map description with a route.
• Website: the locator ends in fatḥa (amāma, khalfa) and the next noun in kasra (amāma l-funduqi). In bayna X wa-Y both nouns are genitive.
• Practical routine (website): draw the room or map first, label it in Arabic, then describe it.`,
  teach: 'Spatial locators; between / at; time locators; directions.',
  wedo: 'Locate it; sort place / time; repair.',
  next: { nextCode: 'GM-CP-03', nextTitle: 'Prepositions with Pronouns and Verb Collocations', nextAr: 'حُرُوفُ الْجَرِّ مَعَ الضَّمَائِرِ وَالْمُتَلَازِمَاتِ' },
  doNow: {
    pick: [0, 1, 2, 3, 5],
    fb: { 0: 'Amāma creates a relation between two places.', 1: 'Taḥta means under.', 2: 'Both nouns after bayna … wa- are genitive.', 3: 'Athnāʾa places an action within an event.', 4: 'Bi-jānibi means beside / next to.' },
    keyIdea: { text: 'Locator (ends in -a) + noun with kasra. Bayna X wa-Y: both nouns with kasra.', ar: '{k|أَمَامَ} الْبَيْتِ ‖ {e|بَيْنَ} الْبَنْكِ وَالْمَتْجَرِ' },
    retrieves: 'The website Entry Check (questions 1, 2, 3, 4 and 6) — the GM-CP-01 prep words amāma, khalfa, bayna, qabla, baʿda.',
  },
  objectives: ['Describe where things are with spatial locators.', 'Use bayna with two genitive nouns.', 'Place actions in time with qabla, baʿda, athnāʾa.', 'Give clear directions on a map.'],
  routes: {
    core: ['I say where things are in my room.', 'I use amāma, khalfa, fawqa, taḥta.'],
    develop: ['I describe a map with bayna, muqābila, qurb.', 'I use before, after and during.'],
    stretch: ['I give a route a stranger can follow.', 'I explain why amāma is a noun, not a particle.'],
  },
  terms: {
    items: [
      { ar: 'ظَرْفُ الْمَكَانِ', en: 'place locator', note: 'أَمَامَ · خَلْفَ' },
      { ar: 'ظَرْفُ الزَّمَانِ', en: 'time locator', note: 'قَبْلَ · بَعْدَ' },
      { ar: 'الْمُضَافُ إِلَيْهِ', en: 'the genitive noun after it', note: 'الْبَيْتِ' },
      { ar: 'بَيْنَ … وَ …', en: 'between … and …', note: 'بَيْنَ الْبَيْتِ وَالْمَدْرَسَةِ' },
      { ar: 'الْخَرِيطَةُ', en: 'map', note: 'عَلَى الْخَرِيطَةِ' },
      { ar: 'الِاتِّجَاهَاتُ', en: 'directions', note: 'اِنْعَطِفْ يَمِينًا' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 1 · the spatial locator system (website table)', title: 'Where exactly?', ar: 'ظُرُوفُ الْمَكَانِ', ltr: true,
      cols: [{ label: 'Locator', w: 2.8, size: 24 }, { label: 'Meaning', w: 2.4 }, { label: 'Model (website)', w: 5.0, size: 22 }, { label: 'Route', w: 2.13 }],
      rows: [
        { core: true, cells: ['أَمَامَ', 'in front of', 'السَّيَّارَةُ أَمَامَ الْبَيْتِ.', 'Core'] },
        { core: true, cells: ['خَلْفَ · وَرَاءَ', 'behind', 'الْحَدِيقَةُ خَلْفَ الْمَدْرَسَةِ.', 'Core'] },
        { core: true, cells: ['فَوْقَ · تَحْتَ', 'above · under', 'الْحَقِيبَةُ تَحْتَ الْكُرْسِيِّ.', 'Core'] },
        { core: true, cells: ['بِجَانِبِ', 'beside', 'الْمَكْتَبَةُ بِجَانِبِ الْمَسْجِدِ.', 'Core'] },
        { cells: ['مُقَابِلَ', 'opposite', 'الْمَطْعَمُ مُقَابِلَ الْفُنْدُقِ.', 'Develop'] },
        { cells: ['بِالْقُرْبِ مِنْ · بَعِيدًا عَنْ', 'near · far from', 'أَسْكُنُ بِالْقُرْبِ مِنَ الْمَدْرَسَةِ.', 'Develop'] },
        { cells: ['دَاخِلَ · خَارِجَ · حَوْلَ', 'inside · outside · around', 'الطُّلَّابُ دَاخِلَ الْفَصْلِ.', 'Develop'] },
      ],
      foot: 'Website: words such as amāma, khalfa, fawqa are analysed as locative nouns / adverbs, not particle prepositions. Functionally, learn the complete pattern: locator + genitive noun.',
      notes: 'PART 1 (4 min) — website “The spatial locator system”. Use a pen and a box: put the pen in front of / behind / on / under it.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · between and two-part relations (website)', title: 'Between X and Y — both with kasra', ar: 'بَيْنَ وَعِنْدَ', ltr: true,
      cols: [{ label: 'Pattern', w: 3.0 }, { label: 'Arabic (website)', w: 5.6, size: 22 }, { label: 'English', w: 3.73 }],
      rows: [
        { core: true, cells: ['bayna X wa-Y', 'الْمَكْتَبَةُ بَيْنَ الْمَدْرَسَةِ وَالْمَسْجِدِ.', 'The library is between the school and the mosque.'] },
        { cells: ['bayna + dual', 'جَلَسْتُ بَيْنَ صَدِيقَيْنِ.', 'I sat between two friends.'] },
        { cells: ['ʿinda (at / by)', 'الْمَتْجَرُ عِنْدَ نِهَايَةِ الشَّارِعِ.', 'The shop is at the end of the street.'] },
        { cells: ['locator + pronoun', 'وَالْمَقْهَى بِجَانِبِهِ.', 'and the café is next to it.'] },
      ],
      foot: 'Website warning: in bayna l-banki wa-l-matjari, do not change the second noun back to nominative just because of wa-. Both nouns belong to the relationship.',
      notes: 'PART 2 (3 min) — website “Between, with and two-part relations”.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · locators of time (website table) · Develop / Stretch', title: 'Before, after, during', ar: 'ظُرُوفُ الزَّمَانِ', ltr: true,
      cols: [{ label: 'Locator', w: 2.4, size: 24 }, { label: 'Meaning', w: 2.6 }, { label: 'Model (website)', w: 5.6, size: 22 }, { label: '', w: 1.73 }],
      rows: [
        { core: true, cells: ['قَبْلَ', 'before', 'أَسْتَيْقِظُ قَبْلَ السَّابِعَةِ.', ''] },
        { core: true, cells: ['بَعْدَ', 'after', 'أَدْرُسُ بَعْدَ الْغَدَاءِ.', ''] },
        { cells: ['أَثْنَاءَ', 'during', 'لَا أَسْتَعْمِلُ هَاتِفِي أَثْنَاءَ الدَّرْسِ.', ''] },
        { cells: ['خِلَالَ', 'during / throughout', 'تَعَلَّمْتُ كَثِيرًا خِلَالَ الْعُطْلَةِ.', ''] },
        { cells: ['مُنْذُ', 'since / for', 'أَسْكُنُ هُنَا مُنْذُ سَنَتَيْنِ.', ''] },
        { cells: ['حَتَّى', 'until', 'أَدْرُسُ حَتَّى السَّاعَةِ الثَّامِنَةِ.', ''] },
      ],
      foot: 'Website boundary: qabla an, baʿda an and mundhu an link whole clauses — they return in GM-CP-05.',
      notes: 'PART 3 (3 min) — website “Locators of time”. Trap: khalfa is place only — “after lunch” is baʿda l-ghadāʾ.',
    },
  ],
  quick: [
    W(/Spatial Locator/, 0, { prompt: 'The picture is above the sofa.', feedback: 'Fawqa expresses the higher position.' }),
    W(/Spatial Locator/, 2, { prompt: 'The pharmacy is opposite the hospital.', feedback: 'Muqābila = facing / opposite.' }),
    W(/Two-Part/, 0, { prompt: 'Choose the accurate phrase.', feedback: 'Both nouns are in the locator phrase.' }),
    W(/Time Locator/, 0, { prompt: 'I revise after dinner.', feedback: 'After in time = baʿda.' }),
  ],
  quickNote: 'website Spatial, Two-Part and Time Locator checks.',
  ido: {
    title: 'Watch me describe my street and a route',
    steps: [
      { head: 'Reference point', ar: 'الْمَكْتَبَةِ', think: 'Start from a landmark.' },
      { head: 'Relation', ar: 'مُقَابِلَ', think: 'Opposite.' },
      { head: 'Next to it', ar: 'بِجَانِبِهِ', think: 'Locator + pronoun.' },
      { head: 'Route', ar: 'عِنْدَ الْمَسْجِدِ', think: 'Turn at the mosque.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'LOCATOR', e: 'GENITIVE NOUN' },
    model: 'يَقَعُ الْبَنْكُ {k|مُقَابِلَ} {e|الْمَكْتَبَةِ}، وَالْمَقْهَى {k|بِجَانِبِهِ}. سِرْ إِلَى نِهَايَةِ الشَّارِعِ، ثُمَّ انْعَطِفْ يَمِينًا {k|عِنْدَ} {e|الْمَسْجِدِ}.',
    modelEn: 'The bank is opposite the library, and the café is next to it. Walk to the end of the street, then turn right at the mosque.',
    notes: 'Website “From map to connected description” model. Reading strategy (website): sketch while reading directions.',
  },
  models: [
    { ar: 'الصُّورَةُ فَوْقَ السَّرِيرِ.', en: 'The picture is above the bed.', tip: 'fawqa.' },
    { ar: 'الْمَوْقِفُ خَلْفَ الْمَتْجَرِ.', en: 'The bus stop is behind the shop.', tip: 'khalfa.' },
    { ar: 'تُوجَدُ أَشْجَارٌ حَوْلَ الْبَيْتِ.', en: 'There are trees around the house.', tip: 'ḥawla.' },
    { ar: 'لَا أَسْتَعْمِلُ هَاتِفِي أَثْنَاءَ الدَّرْسِ.', en: 'I do not use my phone during the lesson.', tip: 'Time.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · read the clue, choose the locator (website game)', title: 'Where is it?', ar: 'أَيْنَ هُوَ؟', ltr: true, stage: 'wedo',
      cols: [{ label: 'Clue', w: 4.0 }, { label: 'Arabic', w: 5.0, size: 24 }, { label: 'Locator', w: 3.33 }],
      rows: [
        { core: true, cells: ['The bag is under the chair.', 'الْحَقِيبَةُ تَحْتَ الْكُرْسِيِّ.', 'taḥta'] },
        { core: true, cells: ['The garden is behind the house.', 'الْحَدِيقَةُ خَلْفَ الْبَيْتِ.', 'khalfa'] },
        { core: true, cells: ['The school is beside the mosque.', 'الْمَدْرَسَةُ بِجَانِبِ الْمَسْجِدِ.', 'bi-jānibi'] },
        { cells: ['The pharmacy is opposite the hospital.', 'الصَّيْدَلِيَّةُ مُقَابِلَ الْمُسْتَشْفَى.', 'muqābila'] },
        { cells: ['between the bank and the shop', 'بَيْنَ الْبَنْكِ وَالْمَتْجَرِ', 'bayna … wa-'] },
        { cells: ['near the station', 'بِالْقُرْبِ مِنَ الْمَحَطَّةِ', 'fixed phrase'] },
      ],
      foot: 'Website game: read each clue and select the locator that represents the relationship.',
      notes: 'WE DO (3 min) — website game items. Cover column 2; students build the sentence.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · place or time?', title: 'Where, or when?', ar: 'مَكَانٌ أَمْ زَمَانٌ؟',
      categories: ['Place', 'Time'],
      items: [['أَمَامَ الْبَيْتِ', 0], ['خَلْفَ الْمَدْرَسَةِ', 0], ['تَحْتَ الْكُرْسِيِّ', 0], ['مُقَابِلَ الْفُنْدُقِ', 0], ['قَبْلَ السَّابِعَةِ', 1], ['بَعْدَ الْغَدَاءِ', 1], ['أَثْنَاءَ الدَّرْسِ', 1], ['خِلَالَ الْعُطْلَةِ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Website clinic: “I study behind lunch” — use a time, not a place, locator.',
    },
  ],
  mistakes: [
    { wrong: 'الْمَطْعَمُ أَمَامُ الْفُنْدُقُ', right: 'الْمَطْعَمُ أَمَامَ الْفُنْدُقِ', why: 'Locator ends in -a; the next noun in kasra (website clinic).' },
    { wrong: 'بَيْنَ الْمَدْرَسَةِ وَالْمَتْجَرُ', right: 'بَيْنَ الْمَدْرَسَةِ وَالْمَتْجَرِ', why: 'The second noun stays in the relation (website clinic).' },
    { wrong: 'أَدْرُسُ خَلْفَ الْغَدَاءِ', right: 'أَدْرُسُ بَعْدَ الْغَدَاءِ', why: 'Use a time locator, not a place one (website clinic).' },
  ],
  hints: ['Which ending on each word?', 'What about the second noun?', 'Place or time?'],
  practice: [
    W(/Spatial Locator/, 3, { prompt: 'Which phrase means “near the station”?', feedback: 'Bi-l-qurbi min = near.' }),
    W(/Two-Part/, 3, { prompt: 'Which is “at the door”?', feedback: 'ʿInda locates something at a point.' }),
    W(/Time Locator/, 2, { prompt: 'I have lived here for two years.', feedback: 'Mundhu marks the starting point or period.' }),
    W(/Final Mastery/, 6, { prompt: 'Correct: “near the park”.', feedback: 'The fixed phrase is bi-l-qurbi min.' }),
  ],
  practiceLabel: 'website Spatial, Two-Part, Time and Final Mastery checks',
  read: {
    title: 'How to find our school', label: 'website skills workshop (teacher-written directions)',
    text: 'مَدْرَسَتُنَا بَيْنَ الْمَسْجِدِ وَالْمَكْتَبَةِ الْعَامَّةِ، وَمَوْقِفُ الْحَافِلَاتِ أَمَامَهَا. مُقَابِلَ الْمَدْرَسَةِ صَيْدَلِيَّةٌ صَغِيرَةٌ، وَبِجَانِبِهَا مَخْبَزٌ. إِذَا جِئْتَ بِالْقِطَارِ، فَاخْرُجْ مِنَ الْمَحَطَّةِ وَسِرْ مُسْتَقِيمًا حَتَّى الْإِشَارَةِ، ثُمَّ انْعَطِفْ يَسَارًا عِنْدَ الْحَدِيقَةِ. يَبْدَأُ الدَّوَامُ بَعْدَ الثَّامِنَةِ، فَتَعَالَ قَبْلَهَا بِعَشْرِ دَقَائِقَ!',
    glossary: [['مَوْقِفُ الْحَافِلَاتِ', 'the bus stop'], ['مَخْبَزٌ', 'a bakery'], ['الْإِشَارَةِ', 'the traffic lights'], ['الدَّوَامُ', 'the school day'], ['تَعَالَ', 'come!']],
    task: 'Website: draw a quick sketch while reading, then mark each landmark.',
    questions: [
      q('Where is the school?', ['between the mosque and the library', 'opposite the station', 'behind the park'], 'Bayna l-masjidi wa-l-maktaba.'),
      q('What is opposite the school?', ['a small pharmacy', 'a bakery', 'the bus stop'], 'Muqābila l-madrasa ṣaydaliyya.'),
      q('Where do you turn left?', ['at the park', 'at the lights', 'at the mosque'], 'ʿInda l-ḥadīqa.'),
      q('When should you arrive?', ['ten minutes before eight', 'after eight', 'at eight exactly'], 'Qablahā bi-ʿashri daqāʾiq.'),
    ],
    qNote: 'Teacher-written directions for the website skills workshop; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: help a stranger find it', source: 'website communication target',
    prompts: [
      { route: 'core', ar: 'صِفْ غُرْفَتَكَ: أَيْنَ السَّرِيرُ؟ وَأَيْنَ الْمَكْتَبُ؟' },
      { route: 'develop', ar: 'أَيْنَ يَقَعُ بَيْتُكَ؟ مَاذَا يُوجَدُ بِجَانِبِهِ وَمُقَابِلَهُ؟' },
      { route: 'stretch', ar: 'كَيْفَ أَصِلُ مِنَ الْمَدْرَسَةِ إِلَى أَقْرَبِ مَسْجِدٍ؟' },
    ],
    stems: [
      { route: 'core', ar: 'السَّرِيرُ ______ النَّافِذَةِ، وَالْمَكْتَبُ ______ الْبَابِ.' },
      { route: 'develop', ar: 'يَقَعُ بَيْتِي ______ ، وَبِجَانِبِهِ ______ .' },
      { route: 'stretch', ar: 'اُخْرُجْ مِنَ ______ ، وَسِرْ حَتَّى ______ ، ثُمَّ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مِنْ فَضْلِكِ، أَيْنَ الْمَكْتَبَةُ؟', en: 'Excuse me, where is the library? (to a woman)' },
      { who: 'B', ar: 'الْمَكْتَبَةُ قَرِيبَةٌ. سِرْ مُسْتَقِيمًا، وَهِيَ مُقَابِلَ الْبَنْكِ، بَيْنَ الْمَقْهَى وَالصَّيْدَلِيَّةِ.', en: 'The library is near. Walk straight on; it is opposite the bank, between the café and the pharmacy.' },
    ],
    notes: 'Website target: give a stranger enough information to find a building without seeing your map. Partner draws what they hear.',
  },
  write: {
    siteTask: 'Write 70–90 Arabic words describing the position of at least six objects or landmarks and explaining one short route.',
    core: { amount: '5 sentences', task: 'My room: where five things are.', how: 'amāma · khalfa · fawqa · taḥta · bi-jānibi.' },
    develop: { amount: '7 sentences', task: 'My street on a map, with bayna and a time locator.', how: 'Both nouns after bayna with kasra.' },
    stretch: { amount: '70–90 words', task: 'Website task: six landmarks and a route.', how: 'Connectors: thumma, baʿda dhālika.' },
  },
  frames: {
    core: [
      { en: 'The bed is beside …', ar: 'السَّرِيرُ بِجَانِبِ ______ .' },
      { en: 'The bag is under …', ar: 'الْحَقِيبَةُ تَحْتَ ______ .' },
      { en: 'The picture is above …', ar: 'الصُّورَةُ فَوْقَ ______ .' },
      { en: 'The car is in front of …', ar: 'السَّيَّارَةُ أَمَامَ ______ .' },
    ],
    develop: [
      { en: 'The library is between … and …', ar: 'الْمَكْتَبَةُ بَيْنَ ______ وَ ______ .' },
      { en: 'The bank is opposite …', ar: 'الْبَنْكُ مُقَابِلَ ______ .' },
      { en: 'I live near …', ar: 'أَسْكُنُ بِالْقُرْبِ مِنَ ______ .' },
      { en: 'Turn right at …', ar: 'اِنْعَطِفْ يَمِينًا عِنْدَ ______ .' },
    ],
    bank: ['أَمَامَ', 'خَلْفَ', 'فَوْقَ', 'تَحْتَ', 'بِجَانِبِ', 'مُقَابِلَ', 'بَيْنَ … وَ …', 'عِنْدَ', 'بِالْقُرْبِ مِنْ', 'بَعِيدًا عَنْ', 'قَبْلَ', 'بَعْدَ', 'أَثْنَاءَ'],
  },
  stretchTask: {
    task: 'Website task: describe a room or local map (70–90 words) with six landmarks and one route.',
    checklist: ['Six spatial locators.', 'One bayna phrase with two genitive nouns.', 'One time locator.', 'Connectors to sequence the route.', 'Kasra on every noun after a locator.'],
    phrases: [['يَقَعُ', 'is located'], ['سِرْ مُسْتَقِيمًا', 'walk straight on'], ['اِنْعَطِفْ يَمِينًا / يَسَارًا', 'turn right / left'], ['فِي نِهَايَةِ الشَّارِعِ', 'at the end of the street'], ['عَلَى بُعْدِ', 'at a distance of'], ['ثُمَّ', 'then']],
  },
  model: {
    text: 'أَسْكُنُ فِي شَارِعٍ هَادِئٍ بِالْقُرْبِ مِنْ وَسَطِ الْمَدِينَةِ. بَيْتِي بَيْنَ الْمَخْبَزِ وَالْمَسْجِدِ، وَأَمَامَهُ شَجَرَةٌ كَبِيرَةٌ. مُقَابِلَ الْبَيْتِ حَدِيقَةٌ عَامَّةٌ، وَخَلْفَ الْحَدِيقَةِ مَوْقِفُ الْحَافِلَاتِ. الْمَدْرَسَةُ بَعِيدَةٌ قَلِيلًا عَنْ بَيْتِي. لِلْوُصُولِ إِلَيْهَا، أَمْشِي حَتَّى نِهَايَةِ الشَّارِعِ، ثُمَّ أَنْعَطِفُ يَسَارًا عِنْدَ الصَّيْدَلِيَّةِ. أَخْرُجُ مِنَ الْبَيْتِ قَبْلَ السَّابِعَةِ، وَأَسْتَمِعُ إِلَى الْقُرْآنِ أَثْنَاءَ الطَّرِيقِ.',
    en: 'I live on a quiet street near the city centre. My house is between the bakery and the mosque, and in front of it is a big tree. Opposite the house is a public park, and behind the park is the bus stop. The school is a little far from my house. To get there, I walk to the end of the street, then turn left at the pharmacy. I leave the house before seven, and I listen to the Qur’an on the way.',
    find: ['place locator', 'bayna … wa-', 'time locator', 'route connector'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'I used five spatial locators.' },
    { route: 'core', text: 'The noun after each locator ends in kasra.' },
    { route: 'develop', text: 'Both nouns after bayna … wa- have kasra.' },
    { route: 'develop', text: 'I used a time locator correctly (not khalfa for time).' },
    { route: 'stretch', text: 'A stranger could follow my route.' },
  ],
  exit: [
    W(/Final Mastery/, 1, { prompt: 'Choose “opposite the school”.', feedback: 'Muqābila = opposite.' }),
    W(/Final Mastery/, 2, { prompt: 'Choose “between the two shops”.', feedback: 'Dual genitive: -ayni.' }),
    W(/Final Mastery/, 4, { prompt: 'Choose “during the holiday”.', feedback: 'Khilāla = during / throughout.' }),
  ],
  mastery: false,
  prep: {
    words: [['فِيهِ', 'in it / him', '—'], ['عَلَيْهِ', 'on it / him', '—'], ['مِنْهُ', 'from it / him', '—'], ['إِلَيْهِ', 'to it / him', '—'], ['مَعَهُ', 'with him', '—']],
    questionEn: 'You know bi-jānibihi (next to it). What happens to ʿalā when you add -hi?',
    questionAr: 'عَلَى + هِ = ______',
    homework: {
      core: 'Draw your room and write five locator sentences.',
      develop: 'Draw your street and write six sentences, including bayna.',
      stretch: 'Website task: room or map description (70–90 words).',
    },
    wordsSource: 'The five words prepare GM-CP-03 (website: prepositions with pronouns and verb collocations).',
  },
  remember: 'Remember: locator (-a) + noun (kasra): amāma l-bayti · bayna X wa-Y — both kasra · khalfa is place, baʿda is time · bi-l-qurbi min, baʿīdan ʿan are fixed phrases.',
});

module.exports = { meta, slides };
