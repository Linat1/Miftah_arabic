'use strict';
/* GM-PRO-06 · Pronouns with li and bi — website: Mastery & Revision › Grammar › Pronouns › Lesson 6 (li- + pronoun: the lām takes fatḥa —
 * لَكَ · لَهَا · لَنَا — except لِي; li- for “having” (no verb “to have”): لِي أَخٌ وَأُخْتَانِ; لِمَنْ هَذَا؟ — هَذَا لِي; bi- keeps its kasra and
 * triggers the kasra chain بِهِ · بِهِمَا · بِهِمْ · بِهِنَّ (but بِهَا); prepositions take plain ـِي, no protecting nūn (لِي · بِي vs سَاعَدَنِي);
 * star phrases أَهْلًا بِكُمْ · مَا بِكَ؟ · بِخَيْرٍ; describing people لَهَا شَعْرٌ طَوِيلٌ; heritage links الْحَمْدُ لِلَّهِ · بِسْمِ اللَّهِ; Eid letter;
 * Mild / Spicy / Hot homework). The website quizzes are JS-driven and did not extract, so questions are teacher-written; the Eid letter
 * and its question set are the website’s. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-PRO-06', fileTitle: 'Pronouns_with_Li_and_Bi', title: 'Pronouns with li and bi', arabic: 'الضَّمَائِرُ مَعَ اللَّامِ وَالْبَاءِ',
  focus: 'Arabic has no verb “to have”: lī akhun = I have a brother (literally “to me is a brother”). With a pronoun, li- becomes la- (laka, lahā) — except lī. Bi- (with, by) keeps its kasra and makes -hu become -hi: bihi, bihim.',
  icon: 'FaGift',
});

const slides = G.gmLesson({
  code: 'GM-PRO-06', site: 'grammar__06-pronouns__grammar-mastery-06-pronouns-with-li-bi',
  support: `• Core: لِي · لَكَ · لَكِ · لَهُ · لَهَا · لَنَا and “having” (لِي أُخْتٌ); بِكَ · بِكِ in أَهْلًا بِكَ / مَا بِكَ؟. Develop: all twelve forms of each family; the fatḥa switch (لِـ → لَـ except لِي). Stretch: the kasra chain (بِهِ · بِهِمَا · بِهِمْ · بِهِنَّ, but بِهَا); no protecting nūn with prepositions (لِي, not لِنِي — compare سَاعَدَنِي).
• Exam weight (website): لِي أَخَوَانِ وَأُخْتٌ lists your family in Speaking; أَهْلًا بِكَ opens role-plays; هَذَا لَكَ gives a gift; reading texts use بِهِ / بِهَا constantly.
• Heritage link: الْحَمْدُ لِلَّهِ (li + Allāh) · بِسْمِ اللَّهِ (bi) · رَبِّ اغْفِرْ لِي.
• This closes the Pronouns area: the same family now lives on nouns (PRO-02), verbs (PRO-03) and prepositions (PRO-06).`,
  teach: 'The li family and “having”; the bi family; three rules; everyday exchanges.',
  wedo: 'Gift post: li or bi?; repair.',
  next: { nextCode: 'GM-V-01', nextTitle: 'Verb Foundations and the Conjugation Map', nextAr: 'أُسُسُ الْأَفْعَالِ وَخَرِيطَةُ التَّصْرِيفِ' },
  doNow: {
    questions: [
      q('Choose “my book”.', ['كِتَابِي', 'كِتَابُنِي', 'كِتَابُكَ'], 'Nouns take -ī (GM-PRO-02).'),
      q('Choose “he helped me”.', ['سَاعَدَنِي', 'سَاعَدِي', 'سَاعَدْتُهُ'], 'Verbs take -nī (GM-PRO-03).'),
      q('Choose “the girl who …”.', ['الْبِنْتُ الَّتِي', 'الْبِنْتُ الَّذِي', 'الْبِنْتُ الَّذِينَ'], 'Feminine → allatī (GM-PRO-05).'),
      q('What does بِسْمِ اللَّهِ begin with?', ['bi- (with / in)', 'li- (for)', 'fī (in)'], 'Bi- + ism.'),
      q('What does الْحَمْدُ لِلَّهِ contain?', ['li- (to / for) + Allāh', 'bi- + Allāh', 'min + Allāh'], 'Praise be TO Allah.'),
    ],
    keyIdea: { text: 'The same pronoun family attaches to li- (for, to, having) and bi- (with, by). Watch the vowel changes.', ar: '{k|لِي} أَخٌ ‖ أَهْلًا {e|بِكُمْ}' },
    retrieves: 'Teacher-written retrieval of GM-PRO-02, 03 and 05, plus the five words prepared at the end of GM-PRO-05.',
  },
  objectives: ['Attach every pronoun to li- (with the fatḥa switch and the lī exception).', 'Attach every pronoun to bi- (with the kasra chain).', 'Use li- to say what you and others have.', 'Use the star phrases ahlan bikum and mā bika?'],
  routes: {
    core: ['I say I have a brother with lī.', 'I welcome a guest with ahlan bika / biki.'],
    develop: ['I build all twelve forms of li-.', 'I explain why li- becomes la- (except lī).'],
    stretch: ['I use the kasra chain: bihi, bihim, bihinna.', 'I describe people: lahā shaʿrun ṭawīl.'],
  },
  terms: {
    items: [
      { ar: 'حَرْفُ الْجَرِّ', en: 'preposition', note: 'لِـ · بِـ' },
      { ar: 'لِـ', en: 'to, for — and “having”', tr: 'li-', note: 'لِي · لَكَ · لَهَا' },
      { ar: 'بِـ', en: 'with, by', tr: 'bi-', note: 'بِهِ · بِهَا' },
      { ar: 'لِمَنْ هَذَا؟', en: 'Whose is this?', note: 'هَذَا لِي' },
      { ar: 'أَهْلًا بِكُمْ', en: 'Welcome (all of you)!', note: 'bi + -kum' },
      { ar: 'مَا بِكَ؟', en: 'What is the matter with you?', note: 'answer: أَنَا بِخَيْرٍ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 1 · the li family — to, for, having (website master grid)', title: 'The lām straightens — except for me', ar: 'عَائِلَةُ اللَّامِ', ltr: true,
      cols: [{ label: 'Owner', w: 2.6 }, { label: 'Singular', w: 3.2, size: 24 }, { label: 'Dual', w: 2.6, size: 24 }, { label: 'Plural', w: 3.93, size: 24 }],
      rows: [
        { core: true, cells: ['I / we', 'لِي', '—', 'لَنَا'] },
        { core: true, cells: ['you (m.)', 'لَكَ', 'لَكُمَا', 'لَكُمْ'] },
        { core: true, cells: ['you (f.)', 'لَكِ', 'لَكُمَا', 'لَكُنَّ'] },
        { core: true, cells: ['he / they (m.)', 'لَهُ', 'لَهُمَا', 'لَهُمْ'] },
        { core: true, cells: ['she / they (f.)', 'لَهَا', 'لَهُمَا', 'لَهُنَّ'] },
      ],
      foot: 'Website rule 1: before a noun li- has kasra (li-Muḥammadin); before a pronoun it becomes la- (laka, lahā, lanā) — except lī, because the ī of “me” wants a kasra before it.',
      notes: 'PART 1 (4 min) — website “The li family” master grid. Colour لِي differently: the one form that keeps its kasra.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 2 · the bi family — with and by (website master grid) · Develop / Stretch', title: 'The bā keeps its kasra — and -hu follows', ar: 'عَائِلَةُ الْبَاءِ', ltr: true,
      cols: [{ label: 'Owner', w: 2.6 }, { label: 'Singular', w: 3.2, size: 24 }, { label: 'Dual', w: 2.6, size: 24 }, { label: 'Plural', w: 3.93, size: 24 }],
      rows: [
        { core: true, cells: ['me / us', 'بِي', '—', 'بِنَا'] },
        { core: true, cells: ['you (m.)', 'بِكَ', 'بِكُمَا', 'بِكُمْ'] },
        { core: true, cells: ['you (f.)', 'بِكِ', 'بِكُمَا', 'بِكُنَّ'] },
        { cells: ['him / them (m.)', 'بِهِ', 'بِهِمَا', 'بِهِمْ'] },
        { cells: ['her / them (f.)', 'بِهَا', 'بِهِمَا', 'بِهِنَّ'] },
      ],
      foot: 'Website rule 2 — the kasra chain: after bi-, -hu becomes -hi (bihi, bihimā, bihim, bihinna); bihā stays because the alif shields it. The k-forms and -nā never change.',
      notes: 'PART 2 (4 min) — website “The bi family” master grid. Link to GM-PRO-02 Stretch: fī baytihi used the same “shy ḍamma”.',
    },
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 3 · having, welcoming — and rule 3 (website)', title: 'Two everyday conversations', ar: 'الْمِلْكِيَّةُ وَالتَّرْحِيبُ',
      points: [
        'Arabic has no verb “to have”: li- does the job — literally “to me is a brother” (website).',
        'Li- also describes people: she has long hair = lahā shaʿrun ṭawīlun (website).',
        'Bi- is for tools, transport and welcome: I wrote with it = katabtu bihi (website).',
        'Rule 3: prepositions take plain -ī — lī, bī — no protecting nūn. Only verbs take -nī (website).',
        'Caring question: mā bika? — answer: lā shayʾa, anā bi-khayr (website).',
      ],
      examples: [
        { ar: 'لِي أَخٌ وَأُخْتَانِ.', en: 'I have a brother and two sisters.', note: 'website · having' },
        { ar: 'لِمَنْ هَذَا الْقَلَمُ؟ — هَذَا لِي!', en: 'Whose is this pen? — It’s mine!', note: 'website' },
        { ar: 'كَتَبْتُ بِالْقَلَمِ · كَتَبْتُ بِهِ', en: 'I wrote with the pen · I wrote with it', note: 'website · kasra chain' },
        { ar: 'أَهْلًا وَسَهْلًا بِكُمْ!', en: 'Welcome, all of you!', note: 'website' },
      ],
      callout: { text: 'Website cliffhanger answered: “rabbi-ghfir lī” — not “linī” — because the guarding nūn protects verbs only.' },
      notes: 'PART 3 (3 min) — website “The rules, side by side” and “Having & welcoming”. Model the family exchange: hal laka ikhwatun? — naʿam, lī akhun kabīrun wa-ukhtāni ṣaghīratāni.',
    },
  ],
  quick: [
    q('Choose “for her”.', ['لَهَا', 'لِهَا', 'بِهَا'], 'Li- becomes la- before a pronoun.'),
    q('Choose “I have a sister.”', ['لِي أُخْتٌ.', 'لَي أُخْتٌ.', 'أَمْلِكُ أُخْتٌ.'], 'Lī keeps its kasra.'),
    q('Choose “with him / with it” (m.).', ['بِهِ', 'بِهُ', 'لَهُ'], 'Kasra chain: bihi.'),
    q('A guest arrives (one female). Choose the welcome.', ['أَهْلًا بِكِ!', 'أَهْلًا بِكَ!', 'أَهْلًا لَكِ!'], 'Bi + -ki.'),
  ],
  quickNote: 'teacher-written hinge questions on the website’s three rules.',
  ido: {
    title: 'Watch me talk about my family',
    steps: [
      { head: 'Question', ar: 'هَلْ لَكَ إِخْوَةٌ؟', think: 'la-ka: for you.' },
      { head: 'I have', ar: 'لِي أَخٌ', think: 'lī keeps kasra.' },
      { head: 'He has', ar: 'لَهُ دَرَّاجَةٌ', think: 'la-hu.' },
      { head: 'Welcome', ar: 'أَهْلًا بِكُمْ', think: 'bi + -kum.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'li- (HAVING / FOR)', e: 'bi- (WITH / WELCOME)' },
    model: '{k|لِي} أَخٌ كَبِيرٌ وَأُخْتَانِ. {k|لَهُ} سَيَّارَةٌ، وَنُسَافِرُ {e|بِهَا} كُلَّ عُطْلَةٍ. أَهْلًا {e|بِكُمْ} فِي بَيْتِنَا!',
    modelEn: 'I have a big brother and two sisters. He has a car, and we travel in it every holiday. Welcome to our house!',
    notes: 'Website exchange “Tell me about your family”. Point to the vowel each time: lī (kasra) · lahu (fatḥa) · bihā (kasra).',
  },
  models: [
    { ar: 'لَنَا بَيْتٌ جَمِيلٌ.', en: 'We have a beautiful house.', tip: 'Website.' },
    { ar: 'لَهَا صَدِيقَاتٌ كَثِيرَاتٌ.', en: 'She has many friends.', tip: 'Website.' },
    { ar: 'هَذِهِ الْهَدِيَّةُ لَكَ.', en: 'This present is for you.', tip: 'Website: Eid gift.' },
    { ar: 'مَا بِكِ؟ — لَا شَيْءَ، أَنَا بِخَيْرٍ.', en: 'What’s wrong? — Nothing, I’m fine.', tip: 'Website: the caring question.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · the gift post (website game) · li or bi?', title: 'Having / for — or with / by?', ar: 'لِمَنْ؟ بِمَاذَا؟',
      categories: ['li- : for, having', 'bi- : with, by, welcome'],
      items: [['هَذَا لَكَ', 0], ['أَهْلًا بِكَ', 1], ['لِي أُخْتَانِ', 0], ['سَافَرْنَا بِهَا', 1], ['لَهُمْ هَدَايَا', 0], ['مَا بِكِ؟', 1], ['لَهَا صَوْتٌ جَمِيلٌ', 0], ['كَتَبْتُ بِهِ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min) — website game “The Gift Post”. Students type L or B and translate.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'We do · three homes, one family (website rule 3) · Stretch', title: 'Noun, verb, preposition', ar: 'اسْمٌ · فِعْلٌ · حَرْفٌ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Owner', w: 2.4 }, { label: 'Noun (my …)', w: 3.2, size: 24 }, { label: 'Verb (… me)', w: 3.4, size: 24 }, { label: 'Preposition', w: 3.33, size: 24 }],
      rows: [
        { core: true, cells: ['me', 'كِتَابِي', 'سَاعَدَنِي', 'لِي · بِي'] },
        { core: true, cells: ['him', 'كِتَابُهُ', 'سَاعَدَهُ', 'لَهُ · بِهِ'] },
        { core: true, cells: ['her', 'كِتَابُهَا', 'سَاعَدَهَا', 'لَهَا · بِهَا'] },
        { cells: ['them (m.)', 'كِتَابُهُمْ', 'سَاعَدَهُمْ', 'لَهُمْ · بِهِمْ'] },
      ],
      foot: 'Only the VERB adds the protecting nūn for “me” (-nī). Nouns and prepositions take plain -ī.',
      notes: 'WE DO (2 min) — summary of the whole Pronouns area. Cover a column at a time.',
    },
  ],
  mistakes: [
    { wrong: 'لِكَ', right: 'لَكَ', why: 'Li- becomes la- before a pronoun (rule 1).' },
    { wrong: 'رَبِّ اغْفِرْ لِنِي', right: 'رَبِّ اغْفِرْ لِي', why: 'No protecting nūn after a preposition (rule 3).' },
    { wrong: 'كَتَبْتُ بِهُ.', right: 'كَتَبْتُ بِهِ.', why: 'Kasra chain after bi- (rule 2).' },
  ],
  hints: ['la- or li-?', 'Verb or preposition?', 'Which vowel after bi-?'],
  practice: [
    q('Choose “They (m.) have a big house.”', ['لَهُمْ بَيْتٌ كَبِيرٌ.', 'لِهُمْ بَيْتٌ كَبِيرٌ.', 'بِهِمْ بَيْتٌ كَبِيرٌ.'], 'Having → la-hum.'),
    q('Choose “He has a beautiful voice.”', ['لَهُ صَوْتٌ جَمِيلٌ.', 'لِي صَوْتٌ جَمِيلٌ.', 'بِهِ صَوْتٌ جَمِيلٌ.'], 'Describing people with la-hu (website).'),
    q('The car? “We travelled in it.”', ['سَافَرْنَا بِهَا.', 'سَافَرْنَا بِهِ.', 'سَافَرْنَا لَهَا.'], 'Car is feminine; bihā.'),
    q('Choose “Do you have siblings?” (to a boy).', ['هَلْ لَكَ إِخْوَةٌ؟', 'هَلْ لِكَ إِخْوَةٌ؟', 'هَلْ بِكَ إِخْوَةٌ؟'], 'Website examiner prompt.'),
  ],
  practiceLabel: 'teacher-written practice on the website content',
  read: {
    title: 'An Eid letter', label: 'website reading task',
    text: 'عِيدٌ مُبَارَكٌ يَا صَدِيقِي! أَهْلًا بِكَ فِي بَيْتِنَا غَدًا. لِي هَدِيَّةٌ جَمِيلَةٌ لَكَ، أَتَمَنَّى أَنْ تُعْجِبَكَ. عَائِلَتِي كُلُّهَا هُنَا: لِي أَخَوَانِ وَأُخْتٌ، وَلَهُمْ هَدَايَا لَكَ أَيْضًا! جَدَّتِي أَعَدَّتِ الْحَلْوَى، وَسَتُرَحِّبُ بِكُمْ جَمِيعًا. هَلْ لَكُمْ سَيَّارَةٌ؟ إِنْ لَمْ تَكُنْ، فَلَا تَقْلَقْ: سَنَأْتِي بِهَا إِلَيْكُمْ.',
    size: 22,
    glossary: [['هَدِيَّةٌ', 'a gift'], ['أَتَمَنَّى', 'I hope'], ['تُعْجِبَكَ', 'you like it'], ['هَدَايَا', 'gifts'], ['أَعَدَّتْ', 'prepared'], ['سَتُرَحِّبُ', 'she will welcome'], ['لَا تَقْلَقْ', 'don’t worry']],
    task: 'Website: find every li- and bi- form, and say who or what each pronoun refers to.',
    questions: [
      q('How many siblings does the writer have?', ['three', 'two', 'one'], 'Two brothers + one sister.'),
      q('Who else has gifts for the friend?', ['the siblings', 'the grandmother', 'the friend’s family'], 'Lahum = they have.'),
      q('Who will the grandmother welcome?', ['the friend’s whole family', 'only the friend', 'the siblings'], 'Bikum = you (all).'),
      q('What does بِهَا refer to?', ['the car', 'the gift', 'the grandmother'], 'Car is feminine → bihā.'),
    ],
    qNote: 'Website Eid letter and website question set (answers re-keyed as multiple choice).',
  },
  speak: {
    title: 'Speaking: your family and your welcome', source: 'website examiner prompts',
    prompts: [
      { route: 'core', ar: 'هَلْ لَكَ إِخْوَةٌ وَأَخَوَاتٌ؟' },
      { route: 'develop', ar: 'مَاذَا لَكَ فِي غُرْفَتِكَ؟' },
      { route: 'stretch', ar: 'كَيْفَ تُرَحِّبُ بِضُيُوفِكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'نَعَمْ، لِي ______ وَ ______ .' },
      { route: 'develop', ar: 'فِي غُرْفَتِي لِي ______ ، وَلِأَخِي ______ .' },
      { route: 'stretch', ar: 'أَقُولُ: أَهْلًا ______ ! ثُمَّ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'هَلْ لَكِ إِخْوَةٌ؟', en: 'Do you have siblings? (to a girl)' },
      { who: 'B', ar: 'نَعَمْ، لِي أَخٌ كَبِيرٌ وَأُخْتَانِ صَغِيرَتَانِ. لَهُمَا قِطَّةٌ صَغِيرَةٌ، وَتَلْعَبَانِ بِهَا كُلَّ يَوْمٍ.', en: 'Yes, I have a big brother and two little sisters. They have a small cat, and they play with it every day.' },
    ],
    notes: 'Website: answer aloud, then write, using at least four li- / bi- forms. Role-play: welcome a guest — ahlan bika / biki / bikum.',
  },
  write: {
    siteTask: 'Website homework (Mild / Spicy / Hot): chart, ten sentences, or an Eid welcome letter with ten li- / bi- forms.',
    core: { amount: 'Mild', task: 'Two-column chart: twelve li- forms beside twelve bi- forms.', how: 'Highlight lī and every bihi-type form.' },
    develop: { amount: 'Spicy', task: 'Ten sentences: five with li-, five with bi-.', how: 'Include a mā bika? exchange and one kasra-chain form.' },
    stretch: { amount: 'Hot', task: 'An Eid welcome letter «أَهْلًا بِكُمْ».', how: 'Ten li- / bi- forms, each underlined and labelled.' },
  },
  frames: {
    core: [
      { en: 'I have a brother and …', ar: 'لِي أَخٌ وَ ______ .' },
      { en: 'We have a … house.', ar: 'لَنَا بَيْتٌ ______ .' },
      { en: 'This gift is for you.', ar: 'هَذِهِ الْهَدِيَّةُ ______ .' },
      { en: 'Welcome (to a boy)!', ar: 'أَهْلًا ______ !' },
    ],
    develop: [
      { en: 'She has long hair.', ar: 'لَهَا ______ طَوِيلٌ.' },
      { en: 'Whose is this? It is mine.', ar: 'لِمَنْ هَذَا؟ هَذَا ______ .' },
      { en: 'I wrote with it (the pen).', ar: 'كَتَبْتُ ______ .' },
      { en: 'What’s wrong (to a girl)?', ar: 'مَا ______ ؟' },
    ],
    bank: ['لِي', 'لَكَ', 'لَكِ', 'لَهُ', 'لَهَا', 'لَنَا', 'لَهُمْ', 'بِكَ', 'بِكِ', 'بِكُمْ', 'بِهِ', 'بِهَا', 'بِخَيْرٍ', 'شَعْرٌ'],
  },
  stretchTask: {
    task: 'Website “Hot” challenge: an Eid welcome letter «أَهْلًا بِكُمْ» in the style of the reading text.',
    checklist: ['Invite a friend’s family and welcome them (bikum).', 'List what you have for them (lī … lakum).', 'Describe a family member with lahu / lahā.', 'One kasra-chain form (bihi, bihim …).', 'Ten li- / bi- forms in total, each labelled.'],
    phrases: [['أَهْلًا وَسَهْلًا بِكُمْ', 'welcome, all of you'], ['لِي هَدِيَّةٌ لَكَ', 'I have a gift for you'], ['لَهُمْ هَدَايَا', 'they have gifts'], ['سَنَأْتِي بِهَا', 'we will bring it'], ['عِيدٌ مُبَارَكٌ', 'blessed Eid'], ['الْحَمْدُ لِلَّهِ', 'praise be to Allah']],
  },
  model: {
    text: 'عِيدٌ مُبَارَكٌ يَا أَحْمَدُ! أَهْلًا وَسَهْلًا بِكُمْ فِي بَيْتِنَا يَوْمَ الْعِيدِ. لِي هَدِيَّةٌ صَغِيرَةٌ لَكَ، وَلِأُخْتِي هَدِيَّةٌ لِأُخْتِكَ. أُمِّي لَهَا يَدٌ سِحْرِيَّةٌ فِي الطَّبْخِ، وَسَتَصْنَعُ الْكَعْكَ بِالتَّمْرِ. لَنَا حَدِيقَةٌ كَبِيرَةٌ، وَسَنَلْعَبُ فِيهَا بِالْكُرَةِ. إِذَا لَمْ تَكُنْ لَكُمْ سَيَّارَةٌ، فَأَبِي سَيَأْتِي بِكُمْ. الْحَمْدُ لِلَّهِ عَلَى هَذَا الْعِيدِ!',
    en: 'Blessed Eid, Ahmad! Welcome to our house on Eid day. I have a small gift for you, and my sister has a gift for your sister. My mother has a magic touch in cooking, and she will make date cakes. We have a big garden, and we will play ball in it. If you don’t have a car, my father will bring you. Praise be to Allah for this Eid!',
    find: ['lī / lanā', 'lahā', 'bikum', 'bi + noun'],
    source: 'teacher model on the website “Hot” task',
  },
  selfCheck: [
    { route: 'core', text: 'I used lī to say what I have.' },
    { route: 'core', text: 'I welcomed someone with ahlan bika / biki / bikum.' },
    { route: 'develop', text: 'Li- became la- with every pronoun except lī.' },
    { route: 'develop', text: 'I used li- to describe someone (lahu / lahā).' },
    { route: 'stretch', text: 'I used the kasra chain: bihi, bihim.' },
  ],
  exit: [
    q('Choose “We have a cat.”', ['لَنَا قِطَّةٌ.', 'لِنَا قِطَّةٌ.', 'بِنَا قِطَّةٌ.'], 'La- + -nā.'),
    q('Choose “for me”.', ['لِي', 'لِنِي', 'لَي'], 'Lī: no protecting nūn, kasra stays.'),
    q('Choose “with them” (m.).', ['بِهِمْ', 'بِهُمْ', 'لَهُمْ'], 'Kasra chain: bihim.'),
  ],
  mastery: false,
  prep: {
    words: [['فِعْلٌ', 'verb', '—'], ['الْمَاضِي', 'past tense', 'كَتَبَ'], ['الْمُضَارِعُ', 'present tense', 'يَكْتُبُ'], ['الْأَمْرُ', 'command', 'اُكْتُبْ'], ['الْجِذْرُ', 'root (three letters)', 'ك ت ب']],
    questionEn: 'Kataba, yaktubu, maktab and kitāb share three letters. What are they, and what idea do they share?',
    questionAr: 'كَتَبَ · يَكْتُبُ · كِتَابٌ · ______',
    homework: {
      core: 'Mild: the two-column li- / bi- chart.',
      develop: 'Spicy: ten sentences with li- and bi-.',
      stretch: 'Hot: an Eid welcome letter.',
    },
    wordsSource: 'The five words prepare GM-V-01 (website Verbs lesson 1: verb foundations).',
  },
  remember: 'Remember: li- = for / having → la- with pronouns, except lī · bi- = with / by → keeps kasra; bihi, bihim, but bihā · prepositions take -ī, verbs take -nī · ahlan bikum!',
});

module.exports = { meta, slides };
