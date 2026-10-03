'use strict';
/* GM-ADJ-03 · Colour Adjectives (أَفْعَلُ / فَعْلَاءُ) — website: Mastery & Revision › Grammar › Adjectives › Lesson 3 (basic colours use
 * masculine أَفْعَلُ and feminine فَعْلَاءُ, not + ة; agreement from the singular noun’s gender — قَلَمٌ أَحْمَرُ · حَقِيبَةٌ حَمْرَاءُ;
 * non-human plurals take the feminine singular colour — سَيَّارَاتٌ حَمْرَاءُ · حَقَائِبُ سَوْدَاءُ; clinic: أَحْمَرَةٌ ✗, matching the
 * nearest word instead of the head noun). The website Entry Check is the Do Now (feedback in English); guided and mastery checks repeat
 * it, so quick check, practice and exit are teacher-written. Teacher-added: “no tanwīn” (diptote) note, the -iyy colours
 * (بُنِّيٌّ · رَمَادِيٌّ …) that DO take + ة, and the human plural colours (بِيضٌ · سُودٌ) for Stretch recognition. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-ADJ-03', fileTitle: 'Colour_Adjectives', title: 'Colour Adjectives', arabic: 'أَلْوَانُ أَفْعَلَ وَفَعْلَاءَ',
  focus: 'The six basic colours have their own feminine shape: red → ḥamrāʾ, not “aḥmara”. Masculine noun → aḥmar; feminine noun or a plural of things → ḥamrāʾ.',
  icon: 'FaPalette',
});

const slides = G.gmLesson({
  code: 'GM-ADJ-03', site: 'grammar__04-adjectives__grammar-mastery-03-colours',
  support: `• Core: learn the six pairs as families (أَحْمَرُ حَمْرَاءُ · أَخْضَرُ خَضْرَاءُ · أَزْرَقُ زَرْقَاءُ · أَصْفَرُ صَفْرَاءُ · أَبْيَضُ بَيْضَاءُ · أَسْوَدُ سَوْدَاءُ). Develop: choose from the HEAD noun; things in the plural → feminine form. Stretch: no tanwīn on these colours; -iyy colours (بُنِّيٌّ / بُنِّيَّةٌ) use normal + ة.
• Pattern teaching: show the root letters ḥ-m-r in both أَحْمَرُ and حَمْرَاءُ — the shape changes around them (link to broken plurals, GM-N-05).
• Visual hook: hold up real objects (pen, bag, shirt) on camera; students name them with colours in the chat.`,
  teach: 'The colour pair; agreement from the head noun; plurals.',
  wedo: 'Match pairs, sort masculine / feminine, describe objects.',
  next: { nextCode: 'GM-ADJ-04', nextTitle: 'Position and Full Adjective Agreement', nextAr: 'مَوْقِعُ الصِّفَةِ وَالْمُطَابَقَةُ الْكَامِلَةُ' },
  doNow: {
    fb: { 0: 'The feminine colour pattern is faʿlāʾ.', 1: 'Bag is feminine singular.', 2: 'Shirt is masculine singular.', 3: 'Cars are a non-human plural → feminine singular.' },
    keyIdea: { text: 'Colours do not add tāʾ marbūṭa. Masculine aḥmar → feminine ḥamrāʾ. Plural things take the feminine form.', ar: 'قَلَمٌ {k|أَحْمَرُ} ‖ حَقِيبَةٌ {e|حَمْرَاءُ}' },
    retrieves: 'The website Entry Check (all five questions) — it uses the five colour words prepared at the end of GM-ADJ-02.',
  },
  objectives: ['Name the six basic colours in masculine and feminine.', 'Choose the colour form from the head noun.', 'Use the feminine colour with non-human plurals.', 'Recognise colours that DO take tāʾ marbūṭa.'],
  routes: {
    core: ['I know the six colour pairs.', 'I say a red pen and a red bag correctly.'],
    develop: ['I match the colour to the head noun.', 'I use the feminine colour for plural things.'],
    stretch: ['I know basic colours take no tanwīn.', 'I use brown, grey and orange with + ة.'],
  },
  terms: {
    items: [
      { ar: 'لَوْنٌ', en: 'colour', note: 'pl. أَلْوَانٌ' },
      { ar: 'أَفْعَلُ', en: 'masculine colour pattern', tr: 'afʿal', note: 'أَحْمَرُ · أَزْرَقُ' },
      { ar: 'فَعْلَاءُ', en: 'feminine colour pattern', tr: 'faʿlāʾ', note: 'حَمْرَاءُ · زَرْقَاءُ' },
      { ar: 'الْمَوْصُوفُ', en: 'head noun (the one described)', note: 'قَمِيصُ … أَبْيَضُ' },
      { ar: 'مَا لَوْنُ …؟', en: 'What colour is …?', note: 'مَا لَوْنُ حَقِيبَتِكَ؟' },
      { ar: 'مَمْنُوعٌ مِنَ الصَّرْفِ', en: 'takes no tanwīn (diptote)', note: 'أَحْمَرُ — not أَحْمَرٌ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · step 1 · the colour pair (website)', title: 'Six colours, two shapes each', ar: 'أَفْعَلُ وَفَعْلَاءُ', ltr: true,
      cols: [{ label: 'Colour', w: 2.6 }, { label: 'Masculine · afʿal', w: 3.4, size: 26 }, { label: 'Feminine · faʿlāʾ', w: 3.4, size: 26 }, { label: 'Example', w: 2.93, size: 20 }],
      rows: [
        { core: true, cells: ['red', 'أَحْمَرُ', 'حَمْرَاءُ', 'تُفَّاحَةٌ حَمْرَاءُ'] },
        { core: true, cells: ['green', 'أَخْضَرُ', 'خَضْرَاءُ', 'شَجَرَةٌ خَضْرَاءُ'] },
        { core: true, cells: ['blue', 'أَزْرَقُ', 'زَرْقَاءُ', 'سَمَاءٌ زَرْقَاءُ'] },
        { core: true, cells: ['yellow', 'أَصْفَرُ', 'صَفْرَاءُ', 'شَمْسٌ صَفْرَاءُ'] },
        { core: true, cells: ['white', 'أَبْيَضُ', 'بَيْضَاءُ', 'قَمِيصٌ أَبْيَضُ'] },
        { core: true, cells: ['black', 'أَسْوَدُ', 'سَوْدَاءُ', 'قِطَّةٌ سَوْدَاءُ'] },
      ],
      foot: 'Website: the feminine is NOT made by adding tāʾ marbūṭa. The three root letters stay; the shape around them changes: a-ḥ-m-a-r → ḥ-a-m-r-āʾ.',
      notes: 'STEP 1 (3 min) — website “The colour pair”. Chant the pairs with actions; colour the root letters in both forms.',
    },
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · step 2 · agreement in context (website)', title: 'Look at the head noun', ar: 'الْمُطَابَقَةُ فِي السِّيَاقِ',
      points: [
        'Choose the colour form from the gender of the singular noun (website).',
        'Masculine noun → afʿal: a red pen, a blue shirt.',
        'Feminine noun → faʿlāʾ: a red bag, a blue car — including hidden feminines like the sky.',
        'Match the HEAD noun, not the nearest word (website clinic).',
        'Stretch: these colours never take tanwīn — say aḥmaru, not aḥmarun.',
      ],
      examples: [
        { ar: 'قَلَمٌ أَحْمَرُ', en: 'a red pen', note: 'website' },
        { ar: 'حَقِيبَةٌ حَمْرَاءُ', en: 'a red bag', note: 'website' },
        { ar: 'قَمِيصٌ أَزْرَقُ', en: 'a blue shirt', note: 'website' },
        { ar: 'قَمِيصُ أُخْتِي الْأَبْيَضُ', en: 'my sister’s white shirt', note: 'the head noun is the shirt' },
      ],
      callout: { kind: 'warn', head: 'CLINIC', text: 'Never “aḥmara” with tāʾ marbūṭa. The feminine of red is always ḥamrāʾ.' },
      notes: 'STEP 2 (3 min) — website “Agreement in context”. The last example is the “nearest word” trap: sister is feminine, but the colour describes the shirt.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · step 3 · plurals and other colours (website + Stretch)', title: 'Plural things, people — and colours with + ة', ar: 'الْجَمْعُ وَأَلْوَانٌ أُخْرَى', ltr: true,
      cols: [{ label: 'Meaning', w: 3.4 }, { label: 'Arabic', w: 4.4, size: 24 }, { label: 'Why', w: 4.53 }],
      rows: [
        { core: true, cells: ['red cars', 'سَيَّارَاتٌ حَمْرَاءُ', 'things → feminine form (website)'] },
        { core: true, cells: ['black bags', 'حَقَائِبُ سَوْدَاءُ', 'things → feminine form (website)'] },
        { core: true, cells: ['green trees', 'أَشْجَارٌ خَضْرَاءُ', 'website model bank'] },
        { cells: ['a brown bag', 'حَقِيبَةٌ بُنِّيَّةٌ', 'brown (bunniyy) is regular: + ة'] },
        { cells: ['a grey / orange car', 'سَيَّارَةٌ رَمَادِيَّةٌ / بُرْتُقَالِيَّةٌ', 'colours in -iyy add ة'] },
        { cells: ['white (people, plural)', 'بِيضٌ · سُودٌ', 'recognition only: human plural colours'] },
      ],
      foot: 'Everyday rule (website): plural things take the feminine singular colour. Only basic colours change shape — -iyy colours follow the normal + ة rule.',
      notes: 'STEP 3 (3 min) — website “Plural colour agreement”, with teacher-added rows. Core: rows 1–3. Stretch: the -iyy colours and the human plural forms (recognition only).',
    },
  ],
  quick: [
    q('Feminine of أَخْضَرُ?', ['خَضْرَاءُ', 'أَخْضَرَةٌ', 'خُضْرٌ'], 'Pattern faʿlāʾ.'),
    q('Complete: سَمَاءٌ ______ (blue).', ['زَرْقَاءُ', 'أَزْرَقُ', 'زَرْقَةٌ'], 'Sky is feminine.'),
    q('Complete: أَقْلَامٌ ______ (black).', ['سَوْدَاءُ', 'أَسْوَدُ', 'أَسْوَدُونَ'], 'Plural things → feminine form.'),
    q('Choose “a brown table”.', ['طَاوِلَةٌ بُنِّيَّةٌ', 'طَاوِلَةٌ بُنِّيٌّ', 'طَاوِلَةٌ بَنْيَاءُ'], 'Brown is an -iyy colour → + ة.'),
  ],
  quickNote: 'teacher-written hinge questions on the website’s three steps.',
  ido: {
    title: 'Watch me describe my desk',
    steps: [
      { head: 'Masculine noun', ar: 'قَلَمٌ أَزْرَقُ', think: 'pen → afʿal.' },
      { head: 'Feminine noun', ar: 'مِسْطَرَةٌ صَفْرَاءُ', think: 'ruler → faʿlāʾ.' },
      { head: 'Plural things', ar: 'كُتُبٌ حَمْرَاءُ', think: 'books → feminine form.' },
      { head: '-iyy colour', ar: 'حَقِيبَةٌ بُنِّيَّةٌ', think: 'brown → + ة.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'MASCULINE', e: 'FEMININE FORM' },
    model: 'عَلَى مَكْتَبِي قَلَمٌ {k|أَزْرَقُ} وَمِسْطَرَةٌ {e|صَفْرَاءُ} وَكُتُبٌ {e|حَمْرَاءُ}، وَحَقِيبَتِي {e|بُنِّيَّةٌ}.',
    modelEn: 'On my desk there is a blue pen, a yellow ruler and red books, and my bag is brown.',
    notes: 'Hold real objects up to the camera. For each: “What is the noun? Masculine, feminine, or plural things?” then choose the colour.',
  },
  models: [
    { ar: 'قَمِيصٌ أَبْيَضُ وَتَنُّورَةٌ بَيْضَاءُ', en: 'a white shirt and a white skirt', tip: 'Website model bank.' },
    { ar: 'أَشْجَارٌ خَضْرَاءُ', en: 'green trees', tip: 'Website model bank.' },
    { ar: 'مَا لَوْنُ سَيَّارَتِكَ؟ — سَيَّارَتِي سَوْدَاءُ.', en: 'What colour is your car? — My car is black.', tip: 'Question and answer.' },
    { ar: 'لَبِسْتُ حِذَاءً أَسْوَدَ.', en: 'I wore black shoes.', tip: 'Stretch: object, no tanwīn on the colour.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · which form of green?', title: 'Masculine or feminine colour?', ar: 'صَنِّفْ',
      categories: ['Masculine: akhḍar', 'Feminine form: khaḍrāʾ'],
      items: [['قَمِيصٌ', 0], ['حَدِيقَةٌ', 1], ['بَابٌ', 0], ['أَوْرَاقٌ', 1], ['قَلَمٌ', 0], ['تُفَّاحَةٌ', 1], ['كُرْسِيٌّ', 0], ['أَشْجَارٌ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type M or F. Traps: leaves and trees are plural things → feminine form.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'We do · transformation drill (website) · say it aloud', title: 'Change the noun, change the colour', ar: 'حَوِّلْ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Start', w: 3.8, size: 24 }, { label: 'Change to', w: 3.0 }, { label: 'Result', w: 5.53, size: 24 }],
      rows: [
        { core: true, cells: ['قَمِيصٌ أَحْمَرُ', 'a skirt', 'تَنُّورَةٌ حَمْرَاءُ'] },
        { core: true, cells: ['قَلَمٌ أَسْوَدُ', 'a bag', 'حَقِيبَةٌ سَوْدَاءُ'] },
        { core: true, cells: ['بَيْتٌ أَبْيَضُ', 'houses', 'بُيُوتٌ بَيْضَاءُ'] },
        { cells: ['سَيَّارَةٌ زَرْقَاءُ', 'a bus (m.)', 'بَاصٌ أَزْرَقُ'] },
        { cells: ['كِتَابٌ أَصْفَرُ', 'notebooks', 'دَفَاتِرُ صَفْرَاءُ'] },
      ],
      foot: 'Website drill: change the noun, then every adjective feature it controls — and say why in grammar words.',
      notes: 'WE DO (2 min). Discussion point to add orally: “dress” (فُسْتَانٌ) is MASCULINE in Arabic, so a red dress is فُسْتَانٌ أَحْمَرُ — check the noun, not the English idea of the object.',
    },
  ],
  mistakes: [
    { wrong: 'حَقِيبَةٌ أَحْمَرَةٌ', right: 'حَقِيبَةٌ حَمْرَاءُ', why: 'Colours use faʿlāʾ, not + ة (website clinic).' },
    { wrong: 'سَيَّارَاتٌ أَزْرَقُ', right: 'سَيَّارَاتٌ زَرْقَاءُ', why: 'Plural things → feminine form.' },
    { wrong: 'قَمِيصُ أُخْتِي الْبَيْضَاءُ', right: 'قَمِيصُ أُخْتِي الْأَبْيَضُ', why: 'Match the head noun, the shirt (website clinic).' },
  ],
  hints: ['Is the feminine + ة?', 'Things in the plural?', 'Which word is described?'],
  practice: [
    q('Choose “a yellow flower”.', ['زَهْرَةٌ صَفْرَاءُ', 'زَهْرَةٌ أَصْفَرُ', 'زَهْرَةٌ أَصْفَرَةٌ'], 'Feminine noun → faʿlāʾ.'),
    q('Choose “a white door”.', ['بَابٌ أَبْيَضُ', 'بَابٌ بَيْضَاءُ', 'بَابٌ أَبْيَضَةٌ'], 'Masculine noun → afʿal.'),
    q('Choose “green leaves”.', ['أَوْرَاقٌ خَضْرَاءُ', 'أَوْرَاقٌ أَخْضَرُ', 'أَوْرَاقٌ خُضْرٌ'], 'Plural things → feminine form.'),
    q('The flag is masculine. Choose “The flag is green and white.”', ['الْعَلَمُ أَخْضَرُ وَأَبْيَضُ.', 'الْعَلَمُ خَضْرَاءُ وَبَيْضَاءُ.', 'الْعَلَمُ أَخْضَرَةٌ.'], 'Flag is masculine.'),
  ],
  practiceLabel: 'teacher-written practice on the website rules',
  read: {
    title: 'A colourful city', label: 'website reading text, extended by the teacher',
    text: 'فِي مَدِينَتِي أَمَاكِنُ جَمِيلَةٌ وَشَوَارِعُ وَاسِعَةٌ. هَذِهِ الْمَدْرَسَةُ الْجَدِيدَةُ قَرِيبَةٌ، وَذَلِكَ الْمَتْحَفُ الْقَدِيمُ مُثِيرٌ لِلِاهْتِمَامِ. بَابُ الْمَتْحَفِ أَزْرَقُ، وَحَوْلَهُ أَشْجَارٌ خَضْرَاءُ وَزُهُورٌ صَفْرَاءُ. الْحَافِلَاتُ فِي الْمَدِينَةِ حَمْرَاءُ، وَالسَّمَاءُ زَرْقَاءُ فِي الصَّيْفِ.',
    glossary: [['أَمَاكِنُ', 'places'], ['وَاسِعَةٌ', 'wide'], ['الْمَتْحَفُ', 'the museum'], ['مُثِيرٌ لِلِاهْتِمَامِ', 'interesting'], ['حَوْلَهُ', 'around it'], ['زُهُورٌ', 'flowers'], ['الْحَافِلَاتُ', 'the buses']],
    task: 'Website: underline each adjective, draw an arrow to its noun, and label the agreement feature.',
    questions: [
      q('Which noun does أَزْرَقُ describe?', ['the door', 'the museum', 'the city'], 'Head noun of the iḍāfa: the door.'),
      q('Why is the colour of the trees خَضْرَاءُ?', ['Trees are plural things.', 'Trees are feminine people.', 'It is a mistake.'], 'Non-human plural → feminine form.'),
      q('Why is it السَّمَاءُ زَرْقَاءُ?', ['Sky is feminine.', 'Sky is plural.', 'Sky is masculine.'], 'A hidden feminine noun.'),
      q('Which colour describes the buses?', ['red', 'yellow', 'blue'], 'الْحَافِلَاتُ … حَمْرَاءُ.'),
    ],
    qNote: 'The first two sentences are the website text; the rest is teacher-written. Questions teacher-written.',
  },
  speak: {
    title: 'Speaking: what are you wearing?', source: 'website speaking task (45–60 seconds)',
    prompts: [
      { route: 'core', ar: 'مَا لَوْنُ قَمِيصِكَ؟ مَا لَوْنُ حَقِيبَتِكَ؟' },
      { route: 'develop', ar: 'صِفْ غُرْفَتَكَ بِالْأَلْوَانِ.' },
      { route: 'stretch', ar: 'صِفْ عَلَمَ بَلَدِكَ وَأَلْوَانَ مَدِينَتِكَ.' },
    ],
    stems: [
      { route: 'core', ar: 'قَمِيصِي ______ ، وَحَقِيبَتِي ______ .' },
      { route: 'develop', ar: 'فِي غُرْفَتِي سَرِيرٌ ______ وَسَتَائِرُ ______ .' },
      { route: 'stretch', ar: 'عَلَمُ بَلَدِي ______ وَ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَا لَوْنُ حِذَائِكِ؟', en: 'What colour are your shoes? (to a girl)' },
      { who: 'B', ar: 'حِذَائِي أَسْوَدُ، وَحَقِيبَتِي حَمْرَاءُ، وَنَظَّارَتِي زَرْقَاءُ.', en: 'My shoes are black, my bag is red and my glasses are blue.' },
    ],
    notes: 'Website: 45–60 seconds with six accurate structures. Camera game: students hold up an object; the class says it with its colour.',
  },
  write: {
    siteTask: 'Write 90–120 words describing a person, place, object or experience, with at least eight target adjective structures, underlined.',
    core: { amount: '6 sentences', task: 'Describe six objects in your room with colours.', how: 'Three masculine, three feminine nouns.' },
    develop: { amount: '8 sentences', task: 'Add plural things and “What colour is …?”.', how: 'Plural things → feminine form.' },
    stretch: { amount: '90–120 words', task: 'Website task: describe an outfit or a place, with one -iyy colour and one object in the accusative.', how: 'Brown, grey, orange: + ة.' },
  },
  frames: {
    core: [
      { en: 'My shirt is …', ar: 'قَمِيصِي ______ .' },
      { en: 'My bag is …', ar: 'حَقِيبَتِي ______ .' },
      { en: 'The sky is …', ar: 'السَّمَاءُ ______ .' },
      { en: 'I have a … pen.', ar: 'عِنْدِي قَلَمٌ ______ .' },
    ],
    develop: [
      { en: 'In my room there are … curtains.', ar: 'فِي غُرْفَتِي سَتَائِرُ ______ .' },
      { en: 'The trees in the garden are …', ar: 'الْأَشْجَارُ فِي الْحَدِيقَةِ ______ .' },
      { en: 'What colour is your car?', ar: 'مَا لَوْنُ ______ ؟' },
      { en: 'My father’s car is …', ar: 'سَيَّارَةُ أَبِي ______ .' },
    ],
    bank: ['أَحْمَرُ', 'حَمْرَاءُ', 'أَخْضَرُ', 'خَضْرَاءُ', 'أَزْرَقُ', 'زَرْقَاءُ', 'أَصْفَرُ', 'صَفْرَاءُ', 'أَبْيَضُ', 'بَيْضَاءُ', 'أَسْوَدُ', 'سَوْدَاءُ', 'بُنِّيٌّ / بُنِّيَّةٌ'],
  },
  stretchTask: {
    task: 'Website extended writing workshop: 90–120 words describing a person, place, object or experience, with at least eight target adjective structures.',
    checklist: ['Three masculine nouns with afʿal colours.', 'Three feminine nouns with faʿlāʾ colours.', 'Two plural things with the feminine colour form.', 'One -iyy colour with + ة.', 'Every colour matches its HEAD noun.'],
    phrases: [['قَمِيصٌ أَبْيَضُ', 'a white shirt'], ['تَنُّورَةٌ زَرْقَاءُ', 'a blue skirt'], ['أَشْجَارٌ خَضْرَاءُ', 'green trees'], ['سَيَّارَاتٌ حَمْرَاءُ', 'red cars'], ['حَقِيبَةٌ بُنِّيَّةٌ', 'a brown bag'], ['مَا لَوْنُ …؟', 'what colour is …?']],
  },
  model: {
    text: 'فِي يَوْمِ الْعِيدِ لَبِسْتُ ثِيَابًا جَدِيدَةً: قَمِيصًا أَبْيَضَ وَبِنْطَالًا أَزْرَقَ وَحِذَاءً أَسْوَدَ. أُخْتِي لَبِسَتْ فُسْتَانًا أَخْضَرَ وَحِجَابًا وَرْدِيًّا. ذَهَبْنَا إِلَى حَدِيقَةٍ كَبِيرَةٍ فِيهَا أَشْجَارٌ خَضْرَاءُ وَزُهُورٌ حَمْرَاءُ وَصَفْرَاءُ. كَانَتِ السَّمَاءُ زَرْقَاءَ، وَكَانَ الْيَوْمُ جَمِيلًا.',
    en: 'On Eid day I wore new clothes: a white shirt, blue trousers and black shoes. My sister wore a green dress and a pink headscarf. We went to a big park with green trees and red and yellow flowers. The sky was blue, and the day was beautiful.',
    find: ['masculine colours', 'feminine colours', 'plural things', '-iyy colour'],
    source: 'teacher model on the website writing workshop',
  },
  selfCheck: [
    { route: 'core', text: 'My colours use the right pair: afʿal or faʿlāʾ.' },
    { route: 'core', text: 'I never added tāʾ marbūṭa to a basic colour.' },
    { route: 'develop', text: 'Plural things have the feminine colour.' },
    { route: 'develop', text: 'Each colour matches its head noun.' },
    { route: 'stretch', text: 'I used an -iyy colour and no tanwīn on basic colours.' },
  ],
  exit: [
    q('Feminine of أَبْيَضُ?', ['بَيْضَاءُ', 'أَبْيَضَةٌ', 'بِيضٌ'], 'Pattern faʿlāʾ.'),
    q('Choose “a black cat (f.)”.', ['قِطَّةٌ سَوْدَاءُ', 'قِطَّةٌ أَسْوَدُ', 'قِطَّةٌ أَسْوَدَةٌ'], 'Feminine noun → faʿlāʾ.'),
    q('Choose “blue chairs”.', ['كَرَاسِيُّ زَرْقَاءُ', 'كَرَاسِيُّ أَزْرَقُ', 'كَرَاسِيُّ أَزْرَقُونَ'], 'Plural things → feminine form.'),
  ],
  mastery: false,
  prep: {
    words: [['الصِّفَةُ', 'adjective', '—'], ['قَبْلَ', 'before', '—'], ['بَعْدَ', 'after', '—'], ['مُعَرَّفٌ', 'definite (with al-)', '—'], ['نَكِرَةٌ', 'indefinite', '—']],
    questionEn: 'In English we say “a big house”. In Arabic, where does the adjective go — and what must it copy from the noun?',
    questionAr: 'بَيْتٌ كَبِيرٌ · الْبَيْتُ ______',
    homework: {
      core: 'Label ten objects at home with their colour (masculine or feminine).',
      develop: 'Write eight sentences describing clothes and plural things.',
      stretch: 'Website writing workshop on an outfit or a colourful place.',
    },
    wordsSource: 'The five words prepare GM-ADJ-04 (website Adjectives lesson 4: position and full agreement).',
  },
  remember: 'Remember: basic colours change shape — aḥmar · ḥamrāʾ · never “aḥmara” · plural things → feminine form · match the head noun · brown, grey, orange just add ة.',
});

module.exports = { meta, slides };
