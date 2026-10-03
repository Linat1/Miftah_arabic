'use strict';
/* GM-PRO-01 · Subject Pronouns — website: Mastery & Revision › Grammar › Pronouns › Lesson 1 (“Grammar Mastery 01”; the website prints no
 * lesson code, so GM-PRO is a deck code). Content: every pronoun answers person + number + gender; 14 slots but 12 written forms
 * (أَنْتُمَا and هُمَا serve both genders); five Arabic words for “you”; mixed groups take هُمْ; no separate “am / is / are” in a simple present
 * nominal sentence; the pronoun controls the present-verb prefix and ending; the verb may carry the subject so أَنَا can be dropped;
 * feminine dual هُمَا تَدْرُسَانِ; misconception clinic. Quizzes are the website’s (Entry, three mini-checks, reading detective, final
 * mastery); English explanations rewritten without embedded Arabic. The reading text (Layla) is the website’s. Sorter, I-do model,
 * frames, speaking and writing support are teacher-made on the website tasks. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__06-pronouns__grammar-mastery-01-subject-pronouns';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-PRO-01', fileTitle: 'Subject_Pronouns', title: 'Subject Pronouns', arabic: 'ضَمَائِرُ الرَّفْعِ الْمُنْفَصِلَةُ',
  focus: 'Arabic pronouns show person, number AND gender: five different words for “you”. Learn the 12 forms as a grid, use them with no “is / are”, and let the pronoun choose the verb’s prefix and ending.',
  icon: 'FaUserGroup',
});

const slides = G.gmLesson({
  code: 'GM-PRO-01', site: KEY,
  support: `• Core: the core six (أَنَا · نَحْنُ · أَنْتَ · أَنْتِ · هُوَ · هِيَ) and pronoun + noun / adjective sentences with no “is” (هِيَ مُعَلِّمَةٌ). Develop: the full grid including dual and plural; mixed groups → هُمْ; pronoun + present verb (هِيَ تَدْرُسُ). Stretch: dropping the pronoun when the verb shows the subject; feminine dual verbs (هُمَا تَدْرُسَانِ); addressed feminine plural (أَنْتُنَّ تَكْتُبْنَ).
• Website “big difference”: English has one “you”; Arabic has five — decide gender and number BEFORE choosing.
• 14 grammatical slots, 12 written forms: أَنْتُمَا and هُمَا each cover masculine and feminine dual.`,
  teach: 'Person, number, gender; the 12-form grid; no “is”; verb agreement.',
  wedo: 'Build pronouns from clues; sort; repair.',
  next: { nextCode: 'GM-PRO-02', nextTitle: 'Possessive Pronoun Suffixes', nextAr: 'الضَّمَائِرُ الْمُتَّصِلَةُ بِالْأَسْمَاءِ' },
  doNow: {
    fb: {
      0: 'Hiya means “she”; huwa means “he”.',
      1: 'One female addressee: anti (with a final -i sound).',
      2: 'Antumā = you two — two males, two females or a mixed pair.',
      3: 'Hunna = three or more females; a mixed group uses hum.',
      4: '“She studies” = hiya tadrusu: the verb begins with ta-.',
    },
    keyIdea: { text: 'Every pronoun answers three questions: WHO (person)? HOW MANY (number)? WHICH GENDER?', ar: '{k|أَنْتَ} · {e|أَنْتِ} · {k|أَنْتُمَا} · {e|أَنْتُمْ} · {k|أَنْتُنَّ}' },
    retrieves: 'The website Entry Check (questions 1–5) — it uses the pronouns prepared at the end of GM-ADV-04.',
  },
  objectives: ['Build any pronoun from person, number and gender.', 'Use the 12 written forms, including the dual.', 'Make simple present sentences with no “is / are”.', 'Match the present verb to its pronoun.'],
  routes: {
    core: ['I know the core six pronouns.', 'I write she is a teacher with no “is”.'],
    develop: ['I use the dual and plural forms.', 'I write she studies with the right verb.'],
    stretch: ['I drop the pronoun when the verb is clear.', 'I use two girls write and you (f. pl.) write.'],
  },
  terms: {
    items: [
      { ar: 'الضَّمِيرُ', en: 'pronoun', note: 'أَنَا · هُوَ · هِيَ' },
      { ar: 'الْمُتَكَلِّمُ', en: '1st person (speaker)', note: 'أَنَا · نَحْنُ' },
      { ar: 'الْمُخَاطَبُ', en: '2nd person (addressed)', note: 'أَنْتَ · أَنْتِ …' },
      { ar: 'الْغَائِبُ', en: '3rd person (spoken about)', note: 'هُوَ · هِيَ · هُمْ' },
      { ar: 'الْمُثَنَّى', en: 'dual (exactly two)', note: 'أَنْتُمَا · هُمَا' },
      { ar: 'الْجَمْعُ', en: 'plural (three or more)', note: 'نَحْنُ · هُمْ · هُنَّ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 1 · the full grid (website table)', title: '12 written forms, 14 slots', ar: 'جَدْوَلُ الضَّمَائِرِ', ltr: true,
      cols: [{ label: 'Person', w: 2.0 }, { label: 'Singular', w: 3.6, size: 24 }, { label: 'Dual (two)', w: 3.0, size: 24 }, { label: 'Plural (3+)', w: 3.73, size: 24 }],
      rows: [
        { core: true, cells: ['1st (I / we)', 'أَنَا', '—', 'نَحْنُ'] },
        { core: true, cells: ['2nd m. (you)', 'أَنْتَ', 'أَنْتُمَا', 'أَنْتُمْ'] },
        { core: true, cells: ['2nd f. (you)', 'أَنْتِ', 'أَنْتُمَا', 'أَنْتُنَّ'] },
        { core: true, cells: ['3rd m. (he / they)', 'هُوَ', 'هُمَا', 'هُمْ'] },
        { core: true, cells: ['3rd f. (she / they)', 'هِيَ', 'هُمَا', 'هُنَّ'] },
      ],
      foot: 'Website: first-person forms never change for gender; the two dual forms serve both genders — that is why 14 slots have only 12 spellings. A mixed group takes hum.',
      notes: 'PART 1 (4 min) — website “Every pronoun answers three questions” and “Singular, dual and plural forms”. Core six first (rows 1–5, singular column + نَحْنُ); then fill the dual and plural columns. Hand gestures: point to self (1st), to the camera (2nd), to the side (3rd).',
    },
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 2 · no separate “am, is, are” (website)', title: 'Pronoun + description = a full sentence', ar: 'الضَّمِيرُ فِي الْجُمْلَةِ الِاسْمِيَّةِ',
      points: [
        'A pronoun can begin a present-time nominal sentence (website).',
        'Put the information straight after it — Arabic has no word for “am / is / are” here.',
        'The description agrees with the pronoun: hiya → muʿallima (f.); hum → plural.',
        'Anā is shared by boys and girls: the description shows the speaker’s gender.',
        'Website note: “was” (kāna) and “is not” (laysa) belong to later grammar.',
      ],
      examples: [
        { ar: 'هُوَ مُهَنْدِسٌ.', en: 'He is an engineer.', note: 'website · + noun' },
        { ar: 'أَنْتِ مُجْتَهِدَةٌ.', en: 'You are hardworking (one female).', note: 'website · + adjective' },
        { ar: 'نَحْنُ فِي الْفَصْلِ.', en: 'We are in the classroom.', note: 'website · + place' },
        { ar: 'هُمَا مُجْتَهِدَتَانِ.', en: 'They two are hardworking (f.).', note: 'website · dual' },
      ],
      callout: { kind: 'warn', head: 'COMMON ERROR', text: 'Do not translate “is” word for word: “anā akūnu ṭāliba” is wrong — just say anā ṭālibatun.' },
      notes: 'PART 2 (3 min) — website “Arabic normally needs no separate am, is or are”.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · the pronoun controls the present verb (website table) · Develop / Stretch', title: 'Prefix and ending show the subject', ar: 'الضَّمِيرُ وَالْفِعْلُ الْمُضَارِعُ', ltr: true,
      cols: [{ label: 'Pronoun', w: 2.6, size: 24 }, { label: 'Meaning', w: 2.6 }, { label: 'Verb: to study', w: 3.4, size: 24 }, { label: 'Pattern', w: 3.73 }],
      rows: [
        { core: true, cells: ['أَنَا · نَحْنُ', 'I · we', 'أَدْرُسُ · نَدْرُسُ', 'a- · na-'] },
        { core: true, cells: ['أَنْتَ · أَنْتِ', 'you m. · f.', 'تَدْرُسُ · تَدْرُسِينَ', 'ta- · ta-…-īna'] },
        { core: true, cells: ['هُوَ · هِيَ', 'he · she', 'يَدْرُسُ · تَدْرُسُ', 'ya- · ta-'] },
        { cells: ['أَنْتُمَا · هُمَا', 'you two · they two', 'تَدْرُسَانِ · يَدْرُسَانِ', '-āni (two girls: ta-…-āni)'] },
        { cells: ['أَنْتُمْ · هُمْ', 'you · they (m. / mixed)', 'تَدْرُسُونَ · يَدْرُسُونَ', '-ūna'] },
        { cells: ['أَنْتُنَّ · هُنَّ', 'you · they (f.)', 'تَدْرُسْنَ · يَدْرُسْنَ', '-na'] },
      ],
      foot: 'Website: the verb already contains the subject, so adrusu alone means “I study”. Add anā for clarity, contrast or emphasis.',
      notes: 'PART 3 (3 min) — website verb table and “feminine dual detail”. Note: anta tadrusu and hiya tadrusu look identical — context or the pronoun decides.',
    },
  ],
  quick: [
    W(/build from the clues/, 0, { feedback: 'The speakers include themselves: naḥnu = we.' }),
    W(/build from the clues/, 1, { feedback: 'Speaking directly to one male: anta.' }),
    W(/build the description/, 0, { feedback: 'Both pronoun and profession are feminine.' }),
    W(/build the description/, 4, { feedback: 'A mixed plural group normally uses hum.' }),
  ],
  quickNote: 'website mini-checks “build from the clues” and “build the description”.',
  ido: {
    title: 'Watch me choose the pronoun',
    steps: [
      { head: 'Person?', ar: 'أَتَكَلَّمُ عَنْ …', think: 'Spoken about → 3rd.' },
      { head: 'How many?', ar: 'أُخْتَانِ', think: 'Two → dual.' },
      { head: 'Pronoun', ar: 'هُمَا', think: 'Dual: hum-ā.' },
      { head: 'Verb', ar: 'هُمَا تَقْرَآنِ', think: 'Two girls → ta-…-āni.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'PRONOUN', e: 'AGREEING WORD' },
    model: '{k|أَنَا} لَيْلَى، وَ{k|أَنَا} {e|طَالِبَةٌ}. لِي أُخْتَانِ؛ {k|هُمَا} {e|مُجْتَهِدَتَانِ}، وَ{k|هُمَا} {e|تَقْرَآنِ} كُلَّ يَوْمٍ.',
    modelEn: 'I am Layla, and I am a student. I have two sisters; they are hardworking, and they read every day.',
    notes: 'From the website reading text. Ask three questions aloud each time: who? how many? which gender? Then point to the agreeing word.',
  },
  models: [
    { ar: 'هُوَ أَبِي، وَهُوَ مُهَنْدِسٌ.', en: 'He is my father, and he is an engineer.', tip: 'Website reading text.' },
    { ar: 'يَا مَرْيَمُ، أَنْتِ مُجْتَهِدَةٌ.', en: 'Maryam, you are hardworking.', tip: 'Website clinic: anti.' },
    { ar: 'هُمْ مِنْ لَنْدَنَ.', en: 'They are from London.', tip: 'Website: + place phrase.' },
    { ar: 'أَنَا أَدْرُسُ الْعَرَبِيَّةَ، وَهُوَ يَدْرُسُ الْفَرَنْسِيَّةَ.', en: 'I study Arabic, and he studies French.', tip: 'Website: pronouns for contrast.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · how many people?', title: 'Singular, dual or plural?', ar: 'مُفْرَدٌ أَمْ مُثَنًّى أَمْ جَمْعٌ؟',
      categories: ['One', 'Exactly two', 'Three or more'],
      items: [['أَنْتِ', 0], ['أَنْتُمَا', 1], ['نَحْنُ', 2], ['هُوَ', 0], ['هُمَا', 1], ['هُنَّ', 2], ['أَنَا', 0], ['أَنْتُنَّ', 2]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type 1, 2 or 3. Then say each in English with its gender: anti = you (one female) …',
    },
  ],
  mistakes: [
    { wrong: 'يَا مَرْيَمُ، أَنْتَ مُجْتَهِدَةٌ.', right: 'يَا مَرْيَمُ، أَنْتِ مُجْتَهِدَةٌ.', why: 'Choose by the person addressed (website clinic).' },
    { wrong: 'هِيَ يَدْرُسُ.', right: 'هِيَ تَدْرُسُ.', why: 'She → ta- (website clinic).' },
    { wrong: 'عَلِيٌّ وَسَارَةُ وَمُنَى: هُنَّ طُلَّابٌ.', right: 'عَلِيٌّ وَسَارَةُ وَمُنَى: هُمْ طُلَّابٌ.', why: 'A mixed group takes hum (website clinic).' },
  ],
  hints: ['Who is addressed?', 'Which prefix for she?', 'Is the group all female?'],
  practice: [
    W(/agreement detective/, 0, { feedback: 'One female addressed: anti taktubīna.' }),
    W(/agreement detective/, 1, { feedback: 'Masculine / mixed plural: hum yadhhabūna.' }),
    W(/agreement detective/, 2, { feedback: 'Two females: humā tadrusāni.' }),
    W(/agreement detective/, 4, { feedback: 'Addressed feminine plural: antunna taktubna.' }),
  ],
  practiceLabel: 'website mini-check “agreement detective”',
  read: {
    title: 'Layla’s family', label: 'website reading workshop',
    text: 'أَنَا لَيْلَى، وَأَنَا طَالِبَةٌ فِي مَدْرَسَةٍ فِي لَنْدَنَ. أَعِيشُ مَعَ أُسْرَتِي. هُوَ أَبِي، وَهُوَ مُهَنْدِسٌ. هِيَ أُمِّي، وَهِيَ مُعَلِّمَةٌ. لِي أَخَوَانِ. هُمَا طَالِبَانِ، وَهُمَا يُحِبَّانِ الرِّيَاضَةَ. لِي أُخْتَانِ أَيْضًا. هُمَا مُجْتَهِدَتَانِ، وَهُمَا تَقْرَآنِ كُلَّ يَوْمٍ. فِي نِهَايَةِ الْأُسْبُوعِ نَحْنُ نَذْهَبُ إِلَى الْحَدِيقَةِ.',
    size: 22,
    glossary: [['أَعِيشُ', 'I live'], ['أُسْرَتِي', 'my family'], ['لِي', 'I have'], ['أَخَوَانِ', 'two brothers'], ['أُخْتَانِ', 'two sisters'], ['يُحِبَّانِ', 'they (two) love'], ['تَقْرَآنِ', 'they (two f.) read']],
    task: 'Website: who does each pronoun refer to? Draw an arrow from every pronoun to the person or group.',
    questions: [
      W(/Reading detective/, 0, { feedback: 'The text says “he is my father”.' }),
      W(/Reading detective/, 1, { prompt: 'The sentence “they two are students (m.)” refers to:', feedback: 'The masculine dual follows “two brothers”.' }),
      W(/Reading detective/, 2, { prompt: 'Why does the verb for the two sisters begin with ta-?', feedback: 'The subject is the two sisters → feminine dual ta-…-āni.' }),
      W(/Reading detective/, 3, { feedback: 'Naḥnu includes Layla and her family.' }),
    ],
    qNote: 'Website reading text and “reading detective” questions; the final sentence is completed from the website text.',
  },
  speak: {
    title: 'Speaking studio: introduce your circle', source: 'website speaking studio',
    prompts: [
      { route: 'core', ar: 'مَنْ أَنْتَ؟ مَنْ هُوَ صَدِيقُكَ؟' },
      { route: 'develop', ar: 'قَدِّمْ أُسْرَتَكَ: أَنَا … هُوَ … هِيَ … هُمَا …' },
      { route: 'stretch', ar: 'مَنْ هُمْ أَصْدِقَاؤُكَ؟ مَاذَا يَفْعَلُونَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَنَا ______ ، وَهُوَ ______ .' },
      { route: 'develop', ar: 'هِيَ أُمِّي، وَهِيَ ______ . هُمَا ______ .' },
      { route: 'stretch', ar: 'نَحْنُ ______ ، وَهُمْ ______ كُلَّ يَوْمٍ.' },
    ],
    model: [
      { who: 'A', ar: 'مَنْ هِيَ؟', en: 'Who is she?' },
      { who: 'B', ar: 'هِيَ أُخْتِي سَارَةُ. هِيَ طَالِبَةٌ، وَتَدْرُسُ الطِّبَّ. نَحْنُ نُحِبُّ الْقِرَاءَةَ.', en: 'She is my sister Sara. She is a student, and she studies medicine. We love reading.' },
    ],
    notes: 'Website: at least six different pronouns; one nominal sentence, one present-verb sentence, one dual or plural form; answer “man huwa? man hiya? man hum?”.',
  },
  write: {
    siteTask: 'Write 7–10 connected sentences about your family or class, using pronouns to avoid repeating names.',
    core: { amount: '6 sentences', task: 'Introduce six people with he / she / I / we.', how: 'Pronoun + noun or adjective — no “is”.' },
    develop: { amount: '8 sentences', task: 'Add a dual and a plural, and present verbs.', how: 'Check prefix and ending against the grid.' },
    stretch: { amount: '7–10 sentences', task: 'Website writing workshop: my family or class.', how: 'Use the pronoun only where it adds clarity.' },
  },
  frames: {
    core: [
      { en: 'I am …', ar: 'أَنَا ______ .' },
      { en: 'He is my …', ar: 'هُوَ ______ .' },
      { en: 'She is a …', ar: 'هِيَ ______ .' },
      { en: 'We are in …', ar: 'نَحْنُ فِي ______ .' },
    ],
    develop: [
      { en: 'They two are …', ar: 'هُمَا ______ .' },
      { en: 'They (a group) are …', ar: 'هُمْ ______ .' },
      { en: 'She studies …', ar: 'هِيَ تَدْرُسُ ______ .' },
      { en: 'You (one female) are …', ar: 'أَنْتِ ______ .' },
    ],
    bank: ['أَنَا', 'نَحْنُ', 'أَنْتَ', 'أَنْتِ', 'هُوَ', 'هِيَ', 'هُمَا', 'هُمْ', 'هُنَّ', 'طَالِبٌ', 'طَالِبَةٌ', 'مُجْتَهِدَانِ', 'مُعَلِّمَةٌ', 'يَدْرُسُ', 'تَدْرُسُ'],
  },
  stretchTask: {
    task: 'Website writing workshop: 7–10 connected sentences about your family or class.',
    checklist: ['Six different pronouns.', 'A nominal sentence with no “is”.', 'A present verb that matches its pronoun.', 'A dual form with correct agreement.', 'Hum for a mixed group; hunna only for all-female.'],
    phrases: [['أَنَا طَالِبٌ / طَالِبَةٌ', 'I am a student'], ['هُوَ أَبِي', 'he is my father'], ['هُمَا تَوْأَمَانِ', 'they are twins'], ['نَحْنُ نَعِيشُ فِي …', 'we live in …'], ['هُمْ أَصْدِقَائِي', 'they are my friends'], ['هُنَّ أَخَوَاتِي', 'they are my sisters']],
  },
  model: {
    text: 'أَنَا يُوسُفُ، وَأَنَا فِي الصَّفِّ التَّاسِعِ. هَذَا صَدِيقِي عُمَرُ؛ هُوَ ذَكِيٌّ وَيُحِبُّ الرِّيَاضِيَّاتِ. أُخْتِي مَرْيَمُ مَعَنَا فِي الْمَدْرَسَةِ، وَهِيَ تَدْرُسُ الْعَرَبِيَّةَ. فِي صَفِّنَا طَالِبَتَانِ جَدِيدَتَانِ؛ هُمَا مُجْتَهِدَتَانِ، وَتَتَكَلَّمَانِ الْعَرَبِيَّةَ جَيِّدًا. نَحْنُ نَلْعَبُ مَعًا بَعْدَ الْمَدْرَسَةِ، وَهُمْ أَصْدِقَاءُ رَائِعُونَ.',
    en: 'I am Yusuf, and I am in Year 9. This is my friend Omar; he is clever and loves maths. My sister Maryam is with us at school, and she studies Arabic. In our class there are two new girls; they are hardworking and speak Arabic well. We play together after school, and they are great friends.',
    find: ['1st person', '3rd singular', 'dual', 'plural'],
    source: 'teacher model based on the website listening studio characters',
  },
  selfCheck: [
    { route: 'core', text: 'I used six different pronouns.' },
    { route: 'core', text: 'I did not translate “is” word for word.' },
    { route: 'develop', text: 'My verbs match their pronouns.' },
    { route: 'develop', text: 'I used the dual for exactly two people.' },
    { route: 'stretch', text: 'Hum for mixed groups; hunna for all-female.' },
  ],
  exit: [
    W(/Final Mastery/, 0, { feedback: 'Second-person dual: antumā.' }),
    W(/Final Mastery/, 2, { feedback: 'Pronoun humā; feminine dual predicate.' }),
    W(/Final Mastery/, 4, { feedback: 'Feminine dual third person: humā taktubāni.' }),
  ],
  mastery: false,
  masteryQs: [
    W(/Final Mastery/, 1, { feedback: 'First-person plural has no gender: naḥnu.' }),
    W(/Final Mastery/, 3, { feedback: 'Addressed masculine / mixed plural: antum tadrusūna.' }),
    W(/Final Mastery/, 6, { feedback: 'A mixed human group normally takes hum.' }),
    W(/Final Mastery/, 8, { feedback: 'Antunna is addressed feminine plural.' }),
  ],
  masteryNote: 'website final mastery challenge questions 2, 4, 7 and 9',
  prep: {
    words: [['كِتَابِي', 'my book', '-ī'], ['كِتَابُكَ', 'your book (m.)', '-ka'], ['كِتَابُكِ', 'your book (f.)', '-ki'], ['كِتَابُهُ', 'his book', '-hu'], ['كِتَابُهَا', 'her book', '-hā']],
    questionEn: 'Compare hiya (she) and kitābuhā (her book). What do they share?',
    questionAr: 'هِيَ · كِتَابُهَا — هُوَ · كِتَابُ______',
    homework: {
      core: 'Learn the core six pronouns with gestures.',
      develop: 'Copy the full grid from memory and check it.',
      stretch: 'Website writing workshop: my family or class.',
    },
    wordsSource: 'The five words prepare GM-PRO-02 (website Pronouns lesson 2: possessive suffixes).',
  },
  remember: 'Remember: person + number + gender · five words for “you” · no word for “is” · the pronoun chooses the verb prefix and ending · mixed group → hum.',
});

module.exports = { meta, slides };
