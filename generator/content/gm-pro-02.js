'use strict';
/* GM-PRO-02 · Possessive Pronoun Suffixes — website: Mastery & Revision › Grammar › Pronouns › Lesson 2 (ownership endings grow from the
 * subject pronouns: أَنَا ـِي · نَحْنُ ـنَا · أَنْتَ ـكَ · أَنْتِ ـكِ · أَنْتُمَا ـكُمَا · أَنْتُمْ ـكُمْ · أَنْتُنَّ ـكُنَّ · هُوَ ـهُ · هِيَ ـهَا · هُمَا ـهُمَا ·
 * هُمْ ـهُمْ · هُنَّ ـهُنَّ; four rules: attach directly, no الـ, no tanwīn, ة → ت; the adjective agrees with the thing possessed —
 * سَيَّارَتُهُ الْجَدِيدَةُ; Stretch: the vowel before the suffix may change — فِي كِتَابِهِ). The website quiz answer keys did not survive
 * extraction (every item stored option 1 as correct), so the website questions are re-keyed here with q() (correct option listed
 * first, shuffled on the slide). The reading text (Salma) and its questions are the website’s. Sorter, I-do, frames and model are
 * teacher-made on the website tasks. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-PRO-02', fileTitle: 'Possessive_Pronoun_Suffixes', title: 'Possessive Pronoun Suffixes', arabic: 'الضَّمَائِرُ الْمُتَّصِلَةُ بِالْأَسْمَاءِ',
  focus: 'Arabic says “my book” in ONE word: kitāb + -ī = kitābī. Each owner has an ending that grows from its pronoun (hiya → -hā). Attach it directly, drop al- and tanwīn, and turn tāʾ marbūṭa into t: madrasatī.',
  icon: 'FaKey',
});

const slides = G.gmLesson({
  code: 'GM-PRO-02', site: 'grammar__06-pronouns__grammar-mastery-02-possessive-pronouns',
  support: `• Core: the core endings ـِي · ـنَا · ـكَ · ـكِ · ـهُ · ـهَا with كِتَابٌ and بَيْتٌ. Develop: the full family (ـكُمَا · ـكُمْ · ـكُنَّ · ـهُمَا · ـهُمْ · ـهُنَّ); ة → ت (مَدْرَسَتِي); possessive sentences (هَذَا بَيْتُنَا · أَيْنَ حَقِيبَتُكِ؟). Stretch: adjective agreement with the thing possessed (سَيَّارَتُهُ الْجَدِيدَةُ); case vowel before the suffix (فِي كِتَابِهِ).
• Website pattern families: second-person endings begin with ك, third-person endings begin with ه — teach as two families.
• Pronunciation: ـكَ / ـكِ differ only in the final vowel; pronounce the doubled نّ in ـكُنَّ / ـهُنَّ clearly.
• Note for the teacher: the website quiz answer keys were re-keyed for this deck.`,
  teach: 'From pronoun to ending; the full family; four rules; sentences.',
  wedo: 'Switch the owner; sort the families; repair.',
  next: { nextCode: 'GM-PRO-03', nextTitle: 'Object Pronoun Suffixes', nextAr: 'ضَمَائِرُ الْمَفْعُولِ بِهِ' },
  doNow: {
    questions: [
      q('Which ending matches أَنَا?', ['my (-ī)', 'our (-nā)', 'his (-hu)'], 'Anā becomes -ī, meaning “my”.'),
      q('Which ending matches أَنْتِ?', ['your, feminine singular (-ki)', 'your, masculine singular (-ka)', 'her (-hā)'], 'Anti corresponds to -ki.'),
      q('Which ending matches أَنْتُمَا?', ['your, dual (-kumā)', 'their, dual (-humā)', 'your, plural (-kum)'], 'Direct address + exactly two = -kumā.'),
      q('Which ending matches هُوَ?', ['his (-hu)', 'her (-hā)', 'their (-hum)'], 'Huwa corresponds to -hu, “his”.'),
      q('Which ending matches نَحْنُ?', ['our (-nā)', 'my (-ī)', 'their (-hum)'], 'Naḥnu corresponds to -nā, “our”.'),
    ],
    keyIdea: { text: 'Each owner has an ending that grows from its pronoun: hiya → -hā, naḥnu → -nā. Attach it to the noun.', ar: 'كِتَابُ{k|هَا} ‖ بَيْتُ{e|نَا}' },
    retrieves: 'The website “Pronoun Bridge” check (5 of 6 questions) — it retrieves GM-PRO-01 and the five words prepared there.',
  },
  objectives: ['Match each subject pronoun to its possessive ending.', 'Attach endings to nouns: no al-, no tanwīn.', 'Change tāʾ marbūṭa to t before an ending.', 'Use possessive nouns in sentences, with correct adjective agreement.'],
  routes: {
    core: ['I say my, your, his, her and our book.', 'I hear the difference between -ka and -ki.'],
    develop: ['I write my school as madrasatī.', 'I use -kum / -kunna and -hum / -hunna.'],
    stretch: ['I give the adjective the gender of the thing owned.', 'I notice fī kitābihi (vowel change).'],
  },
  terms: {
    items: [
      { ar: 'الضَّمِيرُ الْمُتَّصِلُ', en: 'attached pronoun (suffix)', note: 'ـِي · ـكَ · ـهَا' },
      { ar: 'الْمَالِكُ', en: 'the owner', note: 'shown by the ending' },
      { ar: 'الْمَمْلُوكُ', en: 'the thing owned', note: 'the noun itself' },
      { ar: 'التَّاءُ الْمَرْبُوطَةُ', en: 'tāʾ marbūṭa', note: 'مَدْرَسَةٌ · مَدْرَسَتِي' },
      { ar: 'التَّنْوِينُ', en: 'tanwīn (-un, -an, -in)', note: 'dropped before a suffix' },
      { ar: 'لِمَنْ هَذَا؟', en: 'Whose is this?', note: 'هَذَا كِتَابِي' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 1 · all possessive endings with kitāb (website table)', title: 'From pronoun to ending', ar: 'مِنَ الضَّمِيرِ إِلَى اللَّاحِقَةِ', ltr: true,
      cols: [{ label: 'Pronoun', w: 2.4, size: 24 }, { label: 'Ending', w: 2.2, size: 24 }, { label: 'With book', w: 3.2, size: 24 }, { label: 'Meaning', w: 4.53 }],
      rows: [
        { core: true, cells: ['أَنَا · نَحْنُ', 'ـِي · ـنَا', 'كِتَابِي · كِتَابُنَا', 'my book · our book'] },
        { core: true, cells: ['أَنْتَ · أَنْتِ', 'ـكَ · ـكِ', 'كِتَابُكَ · كِتَابُكِ', 'your book (to a boy · to a girl)'] },
        { core: true, cells: ['هُوَ · هِيَ', 'ـهُ · ـهَا', 'كِتَابُهُ · كِتَابُهَا', 'his book · her book'] },
        { cells: ['أَنْتُمَا · هُمَا', 'ـكُمَا · ـهُمَا', 'كِتَابُكُمَا · كِتَابُهُمَا', 'your / their book (two owners)'] },
        { cells: ['أَنْتُمْ · هُمْ', 'ـكُمْ · ـهُمْ', 'كِتَابُكُمْ · كِتَابُهُمْ', 'your / their book (m. or mixed)'] },
        { cells: ['أَنْتُنَّ · هُنَّ', 'ـكُنَّ · ـهُنَّ', 'كِتَابُكُنَّ · كِتَابُهُنَّ', 'your / their book (all female)'] },
      ],
      foot: 'Website pattern families: “your” endings begin with k; “his / her / their” endings begin with h. Ka and ki differ only in the final vowel.',
      notes: 'PART 1 (4 min) — website table “All possessive endings with kitāb”. Point out the shared shapes: hiya / -hā, hum / -hum, hunna / -hunna, antum / -kum.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · four rules for building possessive nouns (website)', title: 'Attach — no al- — no tanwīn — ة becomes ت', ar: 'أَرْبَعُ قَوَاعِدَ', ltr: true,
      cols: [{ label: 'Rule', w: 3.6 }, { label: 'Before', w: 2.8, size: 24 }, { label: 'After', w: 2.8, size: 24 }, { label: 'Why', w: 3.13 }],
      rows: [
        { core: true, cells: ['1 · attach the ending directly', 'بَيْتٌ', 'بَيْتُنَا', 'one written word'] },
        { core: true, cells: ['2 · no al-', 'الْكِتَابُ', 'كِتَابِي', 'the ending already makes it definite'] },
        { core: true, cells: ['3 · no tanwīn', 'كِتَابٌ', 'كِتَابُهُ', 'tanwīn and a suffix never meet'] },
        { core: true, cells: ['4 · tāʾ marbūṭa → t', 'مَدْرَسَةٌ', 'مَدْرَسَتِي', 'the hidden t appears'] },
        { cells: ['more ة nouns (website)', 'حَقِيبَةٌ · سَيَّارَةٌ', 'حَقِيبَتُكِ · سَيَّارَتُهَا', 'your bag (f.) · her car'] },
        { cells: ['more ة nouns (website)', 'غُرْفَةٌ · أُسْرَةٌ', 'غُرْفَتُهُ · أُسْرَتُنَا', 'his room · our family'] },
      ],
      foot: 'Website Stretch: the short vowel before the ending can change with the noun’s role — hādhā kitābuhu, but fī kitābihi. The owner stays the same.',
      notes: 'PART 2 (3 min) — website “Four rules” and “Pattern lab: nouns ending in ة”. Common error from the website success criteria: madrasatī, not “madrasaī”.',
    },
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 3 · from a word to a sentence (website) · Develop / Stretch', title: 'Using possessives in real communication', ar: 'التَّوَاصُلُ بِالْمِلْكِيَّةِ',
      points: [
        'Pattern 1 — This is my / your / his …: hādhā + possessive noun (website).',
        'Pattern 2 — ask about a possession: ayna …? / mā …? (website).',
        'Choose -ka or -ki by the person you are SPEAKING TO.',
        'Pattern 3 — possessive noun + adjective: the adjective takes al- (website).',
        'The adjective agrees with the THING owned, not the owner (website).',
      ],
      examples: [
        { ar: 'هَذِهِ حَقِيبَتُكِ.', en: 'This is your bag (to one female).', note: 'website' },
        { ar: 'أَيْنَ كِتَابُكَ؟', en: 'Where is your book? (to one male)', note: 'website' },
        { ar: 'مَا اسْمُهَا؟', en: 'What is her name?', note: 'website' },
        { ar: 'سَيَّارَتُهُ الْجَدِيدَةُ سَرِيعَةٌ.', en: 'His new car is fast.', note: 'website · car is feminine' },
      ],
      callout: { kind: 'warn', head: 'AGREEMENT INSIGHT', text: 'His car takes FEMININE adjectives because car is feminine — even though the owner is a man (website).' },
      notes: 'PART 3 (3 min) — website “Move from a word to meaningful communication” (patterns 1–3).',
    },
  ],
  quick: [
    q('Choose “my school”.', ['مَدْرَسَتِي', 'مَدْرَسَةِي', 'الْمَدْرَسَتِي'], 'Tāʾ marbūṭa changes to t.'),
    q('Choose “our house”.', ['بَيْتُنَا', 'الْبَيْتُنَا', 'بَيْتٌنَا'], 'Attach -nā directly and remove tanwīn.'),
    q('Choose “her bag”.', ['حَقِيبَتُهَا', 'حَقِيبَةُهَا', 'حَقِيبَهَا'], 'Ḥaqība becomes ḥaqībat- before the ending.'),
    q('Choose “your book” — to two people.', ['كِتَابُكُمَا', 'كِتَابُكُمْ', 'كِتَابُهُمَا'], 'Second person + dual = -kumā.'),
  ],
  quickNote: 'website “Attachment Clinic”, re-keyed.',
  ido: {
    title: 'Watch me build a possessive',
    steps: [
      { head: 'Noun', ar: 'غُرْفَةٌ', think: 'room — ends in ة.' },
      { head: 'Owner', ar: 'هِيَ', think: 'her → -hā.' },
      { head: 'Attach', ar: 'غُرْفَتُهَا', think: 'ة → t, no tanwīn.' },
      { head: 'Sentence', ar: 'غُرْفَتُهَا كَبِيرَةٌ', think: 'Room is f. → kabīra.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'MY …', e: 'HIS / HER …' },
    model: '{k|اسْمِي} سَلْمَى. {k|غُرْفَتِي} صَغِيرَةٌ، وَ{e|غُرْفَتُهُ} كَبِيرَةٌ، وَ{e|حَقِيبَتُهَا} زَرْقَاءُ.',
    modelEn: 'My name is Salma. My room is small, his room is big, and her bag is blue.',
    notes: 'From the website reading text. Colour separates the speaker’s things (my) from other owners (his / her). Narrate the four rules every time.',
  },
  models: [
    { ar: 'اِسْمِي لَيْلَى.', en: 'My name is Layla.', tip: 'Website.' },
    { ar: 'هَذَا بَيْتُنَا.', en: 'This is our house.', tip: 'Website.' },
    { ar: 'هَلْ هَذَا فَصْلُكُمْ؟', en: 'Is this your classroom? (to a group)', tip: 'Website: -kum.' },
    { ar: 'كِتَابُهَا الْجَدِيدُ مُفِيدٌ.', en: 'Her new book is useful.', tip: 'Website: + adjective.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · whose is it?', title: 'Speaker, listener, or someone else?', ar: 'لِمَنْ هَذَا؟',
      categories: ['My / our (speaker)', 'Your (listener)', 'His / her / their'],
      items: [['قَلَمِي', 0], ['قَلَمُكَ', 1], ['قَلَمُهُ', 2], ['بَيْتُنَا', 0], ['بَيْتُكِ', 1], ['بَيْتُهَا', 2], ['غُرْفَتُكُمْ', 1], ['غُرْفَتُهُمْ', 2]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type 1, 2 or 3. Then translate each word; listen for -ka / -ki and -kum / -hum.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'We do · ownership switch (website game) · say it aloud', title: 'Change only the owner', ar: 'غَيِّرِ الْمَالِكَ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Owner', w: 3.0 }, { label: 'This is … book', w: 4.6, size: 24 }, { label: 'This is … car', w: 4.73, size: 24 }],
      rows: [
        { core: true, cells: ['I', 'هَذَا كِتَابِي.', 'هَذِهِ سَيَّارَتِي.'] },
        { core: true, cells: ['he', 'هَذَا كِتَابُهُ.', 'هَذِهِ سَيَّارَتُهُ.'] },
        { core: true, cells: ['we', 'هَذَا كِتَابُنَا.', 'هَذِهِ سَيَّارَتُنَا.'] },
        { cells: ['you (one girl)', 'هَذَا كِتَابُكِ.', 'هَذِهِ سَيَّارَتُكِ.'] },
        { cells: ['they (all female)', 'هَذَا كِتَابُهُنَّ.', 'هَذِهِ سَيَّارَتُهُنَّ.'] },
      ],
      foot: 'Website game “Ownership Switch”: keep the noun accurate and change only the ending. Car always needs the t.',
      notes: 'WE DO (2 min). Cover columns 2–3; call out an owner, students say both sentences.',
    },
  ],
  mistakes: [
    { wrong: 'الْكِتَابِي', right: 'كِتَابِي', why: 'No al- with a possessive ending (website).' },
    { wrong: 'مَدْرَسَةُهُ', right: 'مَدْرَسَتُهُ', why: 'Tāʾ marbūṭa becomes t (website).' },
    { wrong: 'يَا مَرْيَمُ، أَيْنَ حَقِيبَتُكَ؟', right: 'يَا مَرْيَمُ، أَيْنَ حَقِيبَتُكِ؟', why: 'Speaking to a girl → -ki.' },
  ],
  hints: ['Al- with an ending?', 'What happens to ة?', 'Boy or girl listening?'],
  practice: [
    q('Choose “Where is your bag?” — to one female.', ['أَيْنَ حَقِيبَتُكِ؟', 'أَيْنَ حَقِيبَتُكَ؟', 'أَيْنَ حَقِيبَتُهَا؟'], 'A female listener takes -ki.'),
    q('Choose “This is their house” — two owners.', ['هَذَا بَيْتُهُمَا.', 'هَذَا بَيْتُهُمْ.', 'هَذَا بَيْتُكُمَا.'], 'Third person + dual = -humā.'),
    q('Choose “His new car is fast.”', ['سَيَّارَتُهُ الْجَدِيدَةُ سَرِيعَةٌ.', 'سَيَّارَتُهُ الْجَدِيدُ سَرِيعٌ.', 'سَيَّارَتُهَا الْجَدِيدَةُ سَرِيعَةٌ.'], 'Car is feminine, so the adjectives are feminine.'),
    q('Choose “Is this your classroom?” — to a mixed group.', ['هَلْ هَذَا فَصْلُكُمْ؟', 'هَلْ هَذَا فَصْلُهُمْ؟', 'هَلْ هَذَا فَصْلُكُنَّ؟'], 'A mixed group being addressed takes -kum.'),
  ],
  practiceLabel: 'website “Meaning and Agreement” check, re-keyed',
  read: {
    title: 'My family and our home', label: 'website reading text',
    text: 'اِسْمِي سَلْمَى، وَهَذِهِ أُسْرَتِي. بَيْتُنَا قَرِيبٌ مِنْ مَدْرَسَتِي. غُرْفَتِي صَغِيرَةٌ وَلَكِنَّهَا مُرَتَّبَةٌ. هَذَا أَخِي خَالِدٌ. غُرْفَتُهُ كَبِيرَةٌ، وَحَاسُوبُهُ جَدِيدٌ. هَذِهِ أُخْتِي مَرْيَمُ. حَقِيبَتُهَا زَرْقَاءُ، وَكُتُبُهَا فِي غُرْفَتِهَا. وَالِدَايَ مُعَلِّمَانِ، وَمَدْرَسَتُهُمَا قَرِيبَةٌ مِنْ بَيْتِنَا. نَحْنُ نُحِبُّ بَيْتَنَا وَحَدِيقَتَنَا.',
    size: 22,
    glossary: [['أُسْرَتِي', 'my family'], ['مُرَتَّبَةٌ', 'tidy'], ['حَاسُوبُهُ', 'his computer'], ['زَرْقَاءُ', 'blue'], ['وَالِدَايَ', 'my parents'], ['حَدِيقَتَنَا', 'our garden']],
    task: 'Website: underline each attached ending and identify its owner (write the matching pronoun).',
    questions: [
      q('Who does “our house” belong to?', ['Salma and her family', 'Salma only', 'Khalid only'], '-nā means “our”.'),
      q('Whose room is big?', ['Khalid’s', 'Maryam’s', 'Salma’s'], 'Ghurfatuhu — -hu = his (Khalid).'),
      q('Whose bag is blue?', ['Maryam’s', 'Salma’s', 'Khalid’s'], 'Ḥaqībatuhā — -hā = her (Maryam).'),
      q('Who works at the school mentioned with -humā?', ['the two parents', 'the children', 'the girls'], '-humā marks two owners.'),
    ],
    qNote: 'Website reading text and website reading-comprehension questions (re-keyed).',
  },
  speak: {
    title: 'Speaking: whose is it?', source: 'website communication patterns',
    prompts: [
      { route: 'core', ar: 'مَا اسْمُكَ؟ مَا اسْمُ أَبِيكَ؟' },
      { route: 'develop', ar: 'صِفْ غُرْفَتَكَ وَغُرْفَةَ أَخِيكَ أَوْ أُخْتِكَ.' },
      { route: 'stretch', ar: 'صِفْ بَيْتَكُمْ وَأَشْيَاءَ أُسْرَتِكَ.' },
    ],
    stems: [
      { route: 'core', ar: 'اسْمِي ______ ، وَاسْمُ أَبِي ______ .' },
      { route: 'develop', ar: 'غُرْفَتِي ______ ، وَغُرْفَتُهَا ______ .' },
      { route: 'stretch', ar: 'بَيْتُنَا ______ ، وَسَيَّارَتُنَا ______ .' },
    ],
    model: [
      { who: 'A', ar: 'أَيْنَ حَقِيبَتُكِ؟', en: 'Where is your bag? (to a girl)' },
      { who: 'B', ar: 'حَقِيبَتِي فِي غُرْفَتِي، وَحَقِيبَةُ أَخِي فِي سَيَّارَتِهِ.', en: 'My bag is in my room, and my brother’s bag is in his car.' },
    ],
    notes: 'Pairs ask “ayna …-ka / -ki?” and answer with -ī. Listen for -ka vs -ki and the t in ة nouns.',
  },
  write: {
    siteTask: 'Write about your family and home, using possessive endings to show who owns what.',
    core: { amount: '6 sentences', task: 'Six sentences with my and our.', how: 'ismī, baytunā, ghurfatī …' },
    develop: { amount: '8 sentences', task: 'Add his, her and their, with ة nouns.', how: 'Check the t: madrasatuhu.' },
    stretch: { amount: '8–10 sentences', task: 'Describe family possessions with adjectives.', how: 'Adjective agrees with the thing owned.' },
  },
  frames: {
    core: [
      { en: 'My name is …', ar: 'اسْمِي ______ .' },
      { en: 'Our house is …', ar: 'بَيْتُنَا ______ .' },
      { en: 'My room is …', ar: 'غُرْفَتِي ______ .' },
      { en: 'This is my bag.', ar: 'هَذِهِ ______ .' },
    ],
    develop: [
      { en: 'His room is …', ar: 'غُرْفَتُهُ ______ .' },
      { en: 'Her bag is …', ar: 'حَقِيبَتُهَا ______ .' },
      { en: 'Their school is …', ar: 'مَدْرَسَتُهُمْ ______ .' },
      { en: 'Where is your book?', ar: 'أَيْنَ ______ ؟' },
    ],
    bank: ['ـِي', 'ـنَا', 'ـكَ', 'ـكِ', 'ـهُ', 'ـهَا', 'ـهُمْ', 'ـهُنَّ', 'كَبِيرٌ', 'صَغِيرَةٌ', 'جَدِيدٌ', 'قَرِيبَةٌ', 'مُرَتَّبَةٌ'],
  },
  stretchTask: {
    task: 'Write 8–10 sentences about your family and home, showing who owns what.',
    checklist: ['Five different possessive endings.', 'Three ة nouns with t before the ending.', 'No al- and no tanwīn before an ending.', 'One question: ayna …? or mā …?', 'One possessive noun + adjective with correct agreement.'],
    phrases: [['اسْمُهُ', 'his name'], ['سَيَّارَتُنَا', 'our car'], ['أُسْرَتِي', 'my family'], ['غُرْفَتُهَا الْجَدِيدَةُ', 'her new room'], ['مَدْرَسَتُهُمْ', 'their school'], ['أَيْنَ بَيْتُكِ؟', 'where is your house? (f.)']],
  },
  model: {
    text: 'اسْمِي آدَمُ، وَهَذِهِ أُسْرَتِي. أَبِي طَبِيبٌ، وَمُسْتَشْفَاهُ قَرِيبٌ مِنْ بَيْتِنَا. أُمِّي مُعَلِّمَةٌ، وَمَدْرَسَتُهَا كَبِيرَةٌ. أَخِي يُوسُفُ عِنْدَهُ دَرَّاجَةٌ؛ دَرَّاجَتُهُ الْجَدِيدَةُ حَمْرَاءُ. أُخْتَايَ تَوْأَمَانِ، وَغُرْفَتُهُمَا مُرَتَّبَةٌ دَائِمًا. غُرْفَتِي صَغِيرَةٌ، لَكِنِّي أُحِبُّهَا. نَحْنُ نُحِبُّ بَيْتَنَا كَثِيرًا.',
    en: 'My name is Adam, and this is my family. My father is a doctor, and his hospital is near our house. My mother is a teacher, and her school is big. My brother Yusuf has a bike; his new bike is red. My two sisters are twins, and their room is always tidy. My room is small, but I love it. We love our house very much.',
    find: ['my / our', 'his / her', 'their (dual)', 'ة → t'],
    source: 'teacher model on the website writing pattern',
  },
  selfCheck: [
    { route: 'core', text: 'Every ending matches the right owner.' },
    { route: 'core', text: 'No al- or tanwīn before an ending.' },
    { route: 'develop', text: 'My ة nouns show t before the ending.' },
    { route: 'develop', text: 'I chose -ka or -ki by the listener.' },
    { route: 'stretch', text: 'Adjectives agree with the thing owned.' },
  ],
  exit: [
    q('Choose “their room” — female plural owners.', ['غُرْفَتُهُنَّ', 'غُرْفَتُهُمْ', 'غُرْفَتُكُنَّ'], 'Third person + feminine plural = -hunna.'),
    q('Choose “our family”.', ['أُسْرَتُنَا', 'أُسْرَةُنَا', 'الْأُسْرَتُنَا'], 'Usra becomes usrat- before -nā.'),
    q('Choose “What is her name?”', ['مَا اسْمُهَا؟', 'مَا اسْمُهُ؟', 'مَا اسْمُكِ؟'], '-hā means “her”.'),
  ],
  mastery: false,
  prep: {
    words: [['يُسَاعِدُنِي', 'he helps me', '-nī'], ['يُسَاعِدُكَ', 'he helps you (m.)', '-ka'], ['يُسَاعِدُهُ', 'he helps him', '-hu'], ['يُسَاعِدُهَا', 'he helps her', '-hā'], ['يُسَاعِدُنَا', 'he helps us', '-nā']],
    questionEn: 'You know kitābī (my book). Why do you think “helps me” is yusāʿidunī and not “yusāʿidī”?',
    questionAr: 'كِتَابُهُ · يُسَاعِدُهُ — كِتَابُهَا · ______',
    homework: {
      core: 'Write my, your, his, her and our with five nouns.',
      develop: 'Label ten objects at home with their owners.',
      stretch: 'Write 8–10 sentences: my family and our home.',
    },
    wordsSource: 'The five words prepare GM-PRO-03 (website Pronouns lesson 3: object pronouns).',
  },
  remember: 'Remember: one word — noun + owner ending · no al-, no tanwīn · ة becomes t · -ka for a boy, -ki for a girl · the adjective agrees with the thing owned.',
});

module.exports = { meta, slides };
