'use strict';
/* D3-L08 · Reading — Jobs and Career Texts — website: Pathways › Development › D3 › D3-L08 (advert language يُشْتَرَطُ / يُطْلَبُ / يُفَضَّلُ, relative reference الَّذِي / الَّتِي / الَّذِينَ, pronoun reference ـهُ / ـهَا / ـهُمْ, inference يَدُلُّ هٰذَا عَلَى أَنَّ …).
 * Website vocabulary, grammar rules, listening script and reading texts used as published; the quiz, listening and reading
 * questions, sorter, mistakes, model sentences, speaking prompts, writing model, mission and final check are generic placeholders
 * on the website for this lesson (its visual game repeats D3-L01), so those items are teacher-written from the website’s own texts and rules. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D3')({
  n: 8, fileTitle: 'Reading_Jobs_and_Career_Texts', chip: 'Reading Skills',
  title: 'Reading — Jobs and Career Texts', arabic: 'القِرَاءَةُ — نُصُوصُ الوَظَائِفِ وَالمَسِيرَةِ المِهَنِيَّةِ',
  focus: 'Read like an examiner: decode advert language (يُشْتَرَطُ · يُطْلَبُ · يُفَضَّلُ), track who “who / which” and “-hā / -hu” refer to, and make an inference you can prove from the text.',
  icon: 'FaNewspaper', iconSet: 'fa6',
});

const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D3-L08', {
  support: `• This is a READING-SKILLS lesson: the website’s three short texts (an advert, a message, an article) are the main You Do task.
• Core: the advert words (يُشْتَرَطُ = is required, يُفَضَّلُ = is preferred) and questions 1–3. Develop: reference tracking (الَّذِي / الَّتِي, ـهَا) and all 6 questions. Stretch: an inference with evidence (يَدُلُّ هٰذَا عَلَى أَنَّ …) and the written reply to an advert.
• Reading routine on every text: (1) What TYPE of text is it? (2) Underline the requirement words. (3) Circle every pronoun and draw an arrow to its noun.
• Builds on D3-L02 (الَّذِي / الَّتِي) and D3-L06 (applications).`,
  teach: 'Advert language, reference tracking and inference.',
  wedo: 'Sort requirements / offers, fix reference errors, then a voicemail advert.',
  next: { nextCode: 'D3-L09', nextTitle: 'Writing — Career Plans Article or Email', nextAr: 'الكِتَابَةُ — مَقَالٌ أَوْ رِسَالَةٌ عَنِ الخُطَطِ المِهَنِيَّةِ' },
  objectives: ['Understand requirement language in job adverts.', 'Track what الَّذِي / الَّتِي / الَّذِينَ refer to.', 'Track attached pronouns (ـهُ / ـهَا / ـهُمْ) to the right noun.', 'Make an inference supported by a phrase from the text.'],
  flexGroups: [0, 2],
  doNow: {
    questions: [
      q('What does يُشْتَرَطُ mean?', ['is required', 'is preferred', 'is offered'], 'Prepared at home (D3-L07).'),
      q('What does مَرْجِعٌ mean?', ['a reference', 'a requirement', 'a qualification'], 'Prepared at home (D3-L07).'),
      q('Complete: الشَّرِكَةُ ___ أَعْمَلُ فِيهَا كَبِيرَةٌ.', ['الَّتِي', 'الَّذِي', 'الَّذِينَ'], 'D3-L02: allatī.'),
      q('Which is the formal opening?', ['يَسُرُّنِي أَنْ أَتَقَدَّمَ لِلوَظِيفَةِ.', 'أُرِيدُ الوَظِيفَةَ.', 'أَنَا جَيِّدٌ.'], 'D3-L06.'),
      q('In سِيرَتُهَا, whose CV is it?', ['hers', 'his', 'mine'], '-hā = her.'),
    ],
    keyIdea: { text: 'Don’t just find a word — find WHO or WHAT it refers to.', ar: 'أَرْسَلَتْ {e|سَلْمَى} {e|سِيرَتَهَا} · المُتَقَدِّمُ {w|الَّذِي} يَمْلِكُ خِبْرَةً' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of D3-L07. Questions 3–4 retrieve D3-L02 and D3-L06; question 5 previews today’s pronoun reference.',
  },
  routes: {
    core: ['I can find the requirements in an advert.', 'I can answer three detail questions.'],
    develop: ['I can say what a pronoun refers to.', 'I can track allaḏī / allatī / allaḏīna.'],
    stretch: ['I can make an inference with evidence.', 'I can reply to an advert using its exact requirements.'],
  },
  bridge: [
    { ar: 'شَرْطٌ / يُشْتَرَطُ', urdu: 'شرط', tr: 'shart', en: 'condition → is required' },
    { ar: 'إِعْلَانٌ', urdu: 'اعلان', tr: 'eʿlān', en: 'announcement → advert' },
    { ar: 'مَقَالٌ', urdu: 'مقالہ', tr: 'maqāla', en: 'essay, article' },
    { ar: 'دَلِيلٌ / يَدُلُّ', urdu: 'دلیل', tr: 'dalīl', en: 'proof → indicates' },
    { ar: 'خَبِيرٌ', urdu: 'خبیر / ماہر', tr: 'khabīr', en: 'expert' },
  ],
  bridgeNotes: 'URDU BRIDGE: شرط (condition — also “a bet” in Urdu) → يُشْتَرَطُ (it is made a condition = required). اعلان، مقالہ، دلیل are shared. خبیر appears in Urdu religious language (اللہ خبیر ہے); everyday Urdu says ماہر for an expert.',
  core: ['إِعْلَانُ وَظِيفَةٍ', 'مُتَطَلَّبَاتُ الوَظِيفَةِ', 'خِبْرَةٌ سَابِقَةٌ', 'سِيرَةٌ ذَاتِيَّةٌ', 'المُؤَهِّلَاتُ', 'إِجَادَةُ اللُّغَاتِ', 'مَهَارَاتُ الحَاسُوبِ', 'مَهَارَةُ التَّوَاصُلِ'],
  vocabNotes: {
    0: 'Application words (FLEX): review from D3-L06 — you will meet them in all three texts.',
    1: 'Requirements: these are what an advert asks for. In adverts they come after يُشْتَرَطُ / يُطْلَبُ / يُفَضَّلُ.',
    2: 'Reading signals (FLEX): لٰكِنَّ, لِذٰلِكَ and نَتِيجَةً لِذٰلِكَ often hide the answer to a “why” question.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · advert language (website rule 1)', title: 'What does the advert ask for?', ar: 'يُشْتَرَطُ · يُطْلَبُ · يُفَضَّلُ',
      cols: [{ label: 'Advert phrase', w: 6.4, size: 22 }, { label: 'Meaning', w: 3.4 }, { label: 'Strength', w: 2.53 }],
      rows: [
        { core: true, cells: [P('{k|يُشْتَرَطُ} إِجَادَةُ اللُّغَةِ العَرَبِيَّةِ.', 'Fluent Arabic is required.'), 'is required', 'must have'] },
        { core: true, cells: [P('{k|يُطْلَبُ} خِبْرَةٌ سَابِقَةٌ.', 'Previous experience is requested.'), 'is requested', 'must have'] },
        { core: true, cells: [P('{w|يُفَضَّلُ} المُتَقَدِّمُ الَّذِي يُحِبُّ القِرَاءَةَ.', 'An applicant who loves reading is preferred.'), 'is preferred', 'nice to have'] },
        { cells: [P('{e|لَا تُشْتَرَطُ} الخِبْرَةُ.', 'Experience is not required.'), 'not required', 'not needed'] },
        { cells: [P('يُشْتَرَطُ أَنْ يَكُونَ المُتَقَدِّمُ مُنَظَّمًا.', 'The applicant must be organised.'), 'must be + -an', 'D3-L03'] },
      ],
      ltr: true,
      foot: 'Passive verbs start with yu- and have -a- in the middle: yushtaraṭu, yuṭlabu, yufaḍḍalu = “is …ed”.',
      notes: `GRAMMAR PART 1 — website rule “Required passive” (يُشْتَرَطُ / يُطْلَبُ + اسْمٌ: passive forms are common in adverts and formal texts). Website examples: يُشْتَرَطُ إِجَادَةُ اللُّغَةِ العَرَبِيَّةِ · يُطْلَبُ خِبْرَةٌ سَابِقَةٌ. Rows 3–5 are from the website listening and reading texts.
Exam tip: “required” vs “preferred” is a classic distractor — a preferred quality is NOT a requirement.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · reference and inference (website rules 2–4) · Develop / Stretch', title: 'Who or what? How do you know?', ar: 'الإِحَالَةُ · الاِسْتِنْتَاجُ',
      cards: [
        { chip: 'WHO / WHICH · DEVELOP', color: '1D5FBF', head: 'الَّذِي · الَّتِي · الَّذِينَ', big: 'المَهَارَةُ الَّتِي نَحْتَاجُ إِلَيْهَا', en: 'the skill (which) we need', clue: 'allatī → the skill (f.).' },
        { chip: 'PRONOUN · DEVELOP', color: 'C0386B', head: 'ـهُ · ـهَا · ـهُمْ', big: 'تُقَدِّمُ الشَّرِكَةُ تَدْرِيبًا لِمُوَظَّفِيهَا.', en: 'The company offers training to its employees.', clue: '-hā → the company, not the training.' },
        { chip: 'INFERENCE · STRETCH', color: '1E7B4F', head: 'يَدُلُّ هٰذَا عَلَى أَنَّ', big: 'ذُكِرَتْ سَاعَاتٌ مَرِنَةٌ؛ يَدُلُّ هٰذَا عَلَى أَنَّ الوَظِيفَةَ قَدْ تُنَاسِبُ الطُّلَّابَ.', en: 'Flexible hours are mentioned; this suggests the job may suit students.', clue: 'Phrase → conclusion.' },
      ],
      error: { text: 'The company (f.) has the employees: -hā, not -hu.', pairs: [['تُقَدِّمُ الشَّرِكَةُ تَدْرِيبًا لِمُوَظَّفِيهَا.', 'تُقَدِّمُ الشَّرِكَةُ تَدْرِيبًا لِمُوَظَّفِيهِ.']] },
      notes: `GRAMMAR PART 2 — website rules “Relative reference” (track the noun a relative pronoun refers to), “Pronoun reference” (identify the nearest LOGICAL antecedent, not merely the nearest noun) and “Inference” (an inference must be supported by a specific phrase). Website examples: المُتَقَدِّمُ الَّذِي يَمْلِكُ خِبْرَةً · المَهَارَةُ الَّتِي نَحْتَاجُ إِلَيْهَا · تُقَدِّمُ الشَّرِكَةُ تَدْرِيبًا لِمُوَظَّفِيهَا · أَرْسَلَتْ سَلْمَى سِيرَتَهَا · ذُكِرَتْ سَاعَاتٌ مَرِنَةٌ؛ يَدُلُّ هٰذَا عَلَى أَنَّ …
Why not “the training”? تَدْرِيبٌ is masculine (it would need -hu), and a company has employees, training does not.`,
    },
  ],
  rulesTitle: 'Reading reference and requirement language',
  quick: [0, 2, 4, 5],
  rest: [1, 3, 6, 7],
  ido: {
    title: 'Watch me read an advert like an examiner',
    steps: [
      { head: 'Text type', ar: 'إِعْلَانٌ: تُعْلِنُ مَكْتَبَةُ المَدِينَةِ …', think: 'An advert → look for requirements.' },
      { head: 'Requirement?', ar: '{w|يُفَضَّلُ} المُتَقَدِّمُ الَّذِي يُحِبُّ القِرَاءَةَ.', think: 'Preferred, NOT required.' },
      { head: 'Reference', ar: 'لِذٰلِكَ {e|سَأُرْسِلُهَا} اليَوْمَ.', think: '-hā = shahādatī, my certificate (f.).' },
      { head: 'Inference', ar: '{k|يَدُلُّ هٰذَا عَلَى أَنَّ} المَكْتَبَةَ تَهْتَمُّ بِالزُّوَّارِ.', think: 'Proof: يَتَعَامَلُ بِلُطْفٍ.' },
    ],
    legend: ['w', 'e', 'k'], legendLabels: { w: 'ADVERT WORD', e: 'REFERENCE', k: 'INFERENCE' },
    model: 'النَّصُّ الأَوَّلُ إِعْلَانٌ. {w|يُفَضَّلُ} المُتَقَدِّمُ الَّذِي يُحِبُّ القِرَاءَةَ، وَلٰكِنَّ ذٰلِكَ لَيْسَ شَرْطًا. فِي الرِّسَالَةِ، يَعُودُ الضَّمِيرُ فِي «{e|سَأُرْسِلُهَا}» إِلَى «شَهَادَتِي». {k|يَدُلُّ هٰذَا عَلَى أَنَّ} الكَاتِبَ أَرْسَلَ طَلَبًا نَاقِصًا.',
    modelEn: 'The first text is an advert. An applicant who loves reading is preferred, but that is not a condition. In the message, the pronoun in “I will send it” refers to “my certificate”. This suggests that the writer sent an incomplete application.',
    notes: 'I DO (3 min) — teacher think-aloud on the website reading texts (the advert and the message). Students copy the four-step routine: type → requirement → reference → inference.',
  },
  patterns: [
    { ar: 'يُشْتَرَطُ إِجَادَةُ اللُّغَةِ العَرَبِيَّةِ.', en: 'Fluent Arabic is required.', tip: 'Required (passive).' },
    { ar: 'يُفَضَّلُ المُتَقَدِّمُ الَّذِي يُحِبُّ القِرَاءَةَ.', en: 'An applicant who loves reading is preferred.', tip: 'Preferred ≠ required.' },
    { ar: 'يَعُودُ الضَّمِيرُ «هَا» إِلَى الشَّهَادَةِ.', en: 'The pronoun “-hā” refers to the certificate.', tip: 'Reference sentence.' },
    { ar: 'يَدُلُّ هٰذَا عَلَى أَنَّ الوَظِيفَةَ تُنَاسِبُ الطُّلَّابَ.', en: 'This suggests the job suits students.', tip: 'Inference + evidence.' },
  ],
  sorterCats: ['The job requires', 'The employer offers'],
  sorterNotes: 'Then underline the signal word: requirements come after يُشْتَرَطُ / يُطْلَبُ; offers after نُقَدِّمُ / تُقَدِّمُ.',
  patch: {
    mission: null,
    sorter: {
      title: 'Requirement or offer?', instructions: 'Does the advert REQUIRE this from you, or OFFER it to you?',
      categories: ['The job requires', 'The employer offers'],
      items: [
        { label: 'يُشْتَرَطُ إِجَادَةُ الحَاسُوبِ', answer: 0 }, { label: 'يُطْلَبُ خِبْرَةٌ سَابِقَةٌ', answer: 0 }, { label: 'أَنْ يَكُونَ مُنَظَّمًا', answer: 0 }, { label: 'إِجَادَةُ لُغَتَيْنِ', answer: 0 },
        { label: 'نُقَدِّمُ تَدْرِيبًا', answer: 1 }, { label: 'سَاعَاتٌ مَرِنَةٌ', answer: 1 }, { label: 'رَاتِبٌ جَيِّدٌ', answer: 1 }, { label: 'إِجَازَةٌ سَنَوِيَّةٌ', answer: 1 },
      ],
    },
    mistakes: [
      { wrong: 'المُتَقَدِّمَةُ الَّذِي تُحِبُّ القِرَاءَةَ.', right: 'المُتَقَدِّمَةُ الَّتِي تُحِبُّ القِرَاءَةَ.', why: 'A female applicant → allatī.' },
      { wrong: 'أَرْسَلَتْ سَلْمَى سِيرَتَهُ.', right: 'أَرْسَلَتْ سَلْمَى سِيرَتَهَا.', why: 'Salma’s own CV → -hā.' },
      { wrong: 'يُشْتَرَطُ أَنْ يَكُونَ المُتَقَدِّمُ مُنَظَّمٌ.', right: 'يُشْتَرَطُ أَنْ يَكُونَ المُتَقَدِّمُ مُنَظَّمًا.', why: 'After yakūna: -an.' },
    ],
    grammar: {
      common_error: 'Do not link a pronoun to the nearest noun automatically — choose the logical one — and do not treat يُفَضَّلُ (preferred) as a requirement (teacher wording: the website common error for this lesson is generic).',
      quiz: [
        L('What does يُشْتَرَطُ mean in an advert?', ['is required', 'is preferred', 'is offered'], 'shart = condition.'),
        L('Complete: ___ خِبْرَةٌ سَابِقَةٌ.', ['يُطْلَبُ', 'طَلَبْتُ', 'طَالِبٌ'], 'yuṭlabu = is requested.'),
        L('Complete: المُتَقَدِّمُ ___ يَمْلِكُ خِبْرَةً.', ['الَّذِي', 'الَّتِي', 'الَّذِينَ'], 'Masculine singular → allaḏī.'),
        L('Complete: المُتَقَدِّمُونَ ___ يُحِبُّونَ القِرَاءَةَ.', ['الَّذِينَ', 'الَّذِي', 'الَّتِي'], 'Plural people → allaḏīna.'),
        L('In أَرْسَلَتْ سَلْمَى سِيرَتَهَا, who does -hā refer to?', ['Salma', 'the company', 'the CV'], 'Her own CV.'),
        L('In تُقَدِّمُ الشَّرِكَةُ تَدْرِيبًا لِمُوَظَّفِيهَا, -hā refers to …', ['the company', 'the training', 'the employees'], 'The company’s employees.'),
        L('Which sentence is an inference?', ['يَدُلُّ هٰذَا عَلَى أَنَّ الوَظِيفَةَ تُنَاسِبُ الطُّلَّابَ.', 'السَّاعَاتُ مَرِنَةٌ.', 'يُطْلَبُ مُسَاعِدٌ.'], 'A conclusion from evidence.'),
        L('What does يُفَضَّلُ mean in an advert?', ['is preferred', 'is required', 'is forbidden'], 'Nice to have.'),
      ],
    },
    final: [
      L('What does لَا تُشْتَرَطُ الخِبْرَةُ mean?', ['experience is not required', 'experience is required', 'experience is preferred'], 'lā = not.'),
      L('Complete: المَهَارَةُ ___ نَحْتَاجُ إِلَيْهَا.', ['الَّتِي', 'الَّذِي', 'الَّذِينَ'], 'mahāra (f.) → allatī.'),
      L('In سَأُرْسِلُهَا (the message), -hā refers to …', ['my certificate', 'the library', 'the visitor'], 'nasītu an urfiqa shahādatī.'),
      L('Which phrase introduces an inference?', ['يَدُلُّ هٰذَا عَلَى أَنَّ', 'يُشْتَرَطُ', 'يُفَضَّلُ'], 'This indicates that …'),
    ],
    listening: {
      questions: [
        L('Which days is the job?', ['Saturday and Sunday', 'Friday and Saturday', 'Monday to Friday'], 'يَوْمَيِ السَّبْتِ وَالأَحَدِ'),
        L('What are the hours?', ['10:00 to 4:00', '9:00 to 5:00', '10:00 to 2:00'], 'مِنَ العَاشِرَةِ إِلَى الرَّابِعَةِ'),
        L('Which quality is required?', ['being organised', 'being creative', 'being confident'], 'أَنْ يَكُونَ المُتَقَدِّمُ مُنَظَّمًا'),
        L('Which technical skill is required?', ['using a computer well', 'driving', 'speaking French'], 'أَنْ يُجِيدَ اسْتِخْدَامَ الحَاسُوبِ'),
        L('Is experience required?', ['no — training is given in the first week', 'yes, two years', 'it is not mentioned'], 'لَا تُشْتَرَطُ الخِبْرَةُ'),
        L('What is the deadline for the CV?', ['before Thursday', 'before Saturday', 'next week'], 'قَبْلَ يَوْمِ الخَمِيسِ'),
      ],
    },
    reading: {
      questions: [
        L('What shift does the library advertise?', ['the evening', 'the morning', 'the weekend'], 'فِي فَتْرَةِ المَسَاءِ'),
        L('Which applicant is preferred?', ['one who loves reading', 'one with a degree', 'one who speaks two languages'], 'يُفَضَّلُ المُتَقَدِّمُ الَّذِي يُحِبُّ القِرَاءَةَ'),
        L('How should the applicant treat visitors?', ['kindly', 'quickly', 'formally'], 'يَتَعَامَلُ بِلُطْفٍ مَعَ الزُّوَّارِ'),
        L('What did the message writer forget?', ['to attach the certificate', 'to send the application', 'to write a CV'], 'نَسِيتُ أَنْ أُرْفِقَ شَهَادَتِي'),
        L('In سَأُرْسِلُهَا, what does -hā refer to?', ['the certificate', 'the application', 'the library'], 'نَسِيتُ أَنْ أُرْفِقَ شَهَادَتِي'),
        L('According to experts, what will stay important?', ['communication skills, even in tech jobs', 'computer skills only', 'previous experience'], 'مَهَارَاتِ التَّوَاصُلِ سَتَبْقَى مُهِمَّةً'),
      ],
    },
    speaking: {
      context: 'Explain your reading evidence',
      model: [
        ['A', 'مَا نَوْعُ النَّصِّ الأَوَّلِ؟', 'What type is the first text?'],
        ['B', 'هُوَ إِعْلَانُ وَظِيفَةٍ مِنْ مَكْتَبَةِ المَدِينَةِ.', 'It is a job advert from the city library.'],
        ['A', 'هَلْ حُبُّ القِرَاءَةِ شَرْطٌ؟', 'Is loving reading a condition?'],
        ['B', 'لَا، لِأَنَّ الإِعْلَانَ يَقُولُ «يُفَضَّلُ»، وَلَيْسَ «يُشْتَرَطُ».', 'No, because the advert says “is preferred”, not “is required”.'],
      ],
    },
    writing: {
      prompt: 'Respond to a job advert, using exact requirements from the text as evidence of your suitability.',
      model: 'السَّادَةُ فِي مَرْكَزِ النُّورِ المُحْتَرَمُونَ، يَسُرُّنِي أَنْ أَتَقَدَّمَ لِوَظِيفَةِ المُسَاعِدِ فِي نِهَايَةِ الأُسْبُوعِ. قَرَأْتُ فِي إِعْلَانِكُمْ أَنَّهُ يُشْتَرَطُ أَنْ يَكُونَ المُتَقَدِّمُ مُنَظَّمًا، وَأَنَا مُنَظَّمٌ؛ وَالدَّلِيلُ عَلَى ذٰلِكَ أَنَّنِي أُخَطِّطُ لِدِرَاسَتِي كُلَّ أُسْبُوعٍ. كَمَا يُشْتَرَطُ أَنْ يُجِيدَ المُتَقَدِّمُ اسْتِخْدَامَ الحَاسُوبِ، وَلَدَيَّ مَهَارَاتٌ جَيِّدَةٌ فِي البَرْمَجَةِ وَالطِّبَاعَةِ. لَيْسَتْ لَدَيَّ خِبْرَةٌ سَابِقَةٌ، وَلٰكِنَّ الإِعْلَانَ يَذْكُرُ أَنَّكُمْ تُقَدِّمُونَ تَدْرِيبًا فِي الأُسْبُوعِ الأَوَّلِ. سَأُرْسِلُ سِيرَتِي الذَّاتِيَّةَ قَبْلَ يَوْمِ الخَمِيسِ. مَعَ خَالِصِ التَّحِيَّاتِ.',
    },
  },
  hints: ['A female applicant: allaḏī or allatī?', 'Whose CV? -hu or -hā?', 'After yakūna: -un or -an?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 6.\nListen for: السَّبْتِ · العَاشِرَةِ · الخَمِيسِ.',
  listenRoutes: 'Core: questions 1, 2 and 6. Develop / Stretch: all 6 — then say which requirement is NOT needed.',
  gloss: [
    ['مَرْحَبًا، هٰذِهِ رِسَالَةٌ مِنْ مَرْكَزِ النُّورِ.', 'Hello, this is a message from Al-Nour Centre.'],
    ['نَبْحَثُ عَنْ مُسَاعِدٍ لِلْعَمَلِ يَوْمَيِ السَّبْتِ وَالأَحَدِ مِنَ العَاشِرَةِ إِلَى الرَّابِعَةِ.', 'We are looking for an assistant to work on Saturdays and Sundays from ten to four.'],
    ['يُشْتَرَطُ أَنْ يَكُونَ المُتَقَدِّمُ مُنَظَّمًا وَأَنْ يُجِيدَ اسْتِخْدَامَ الحَاسُوبِ.', 'The applicant must be organised and good at using a computer.'],
    ['لَا تُشْتَرَطُ الخِبْرَةُ، لِأَنَّنَا نُقَدِّمُ تَدْرِيبًا فِي الأُسْبُوعِ الأَوَّلِ.', 'Experience is not required, because we provide training in the first week.'],
    ['أَرْسِلُوا السِّيرَةَ الذَّاتِيَّةَ قَبْلَ يَوْمِ الخَمِيسِ.', 'Send your CV before Thursday.'],
  ],
  readingCore: {
    readMin: 4, qMin: 6,
    notes: 'YOU DO — READING (main task): the website’s three career texts (an advert, a message, an article). First read: label each text type. Second read: underline requirement words and circle every pronoun.\nCore: questions 1–3. Develop: all 6. Stretch: then the reply to the advert.\n(Questions are teacher-written: the website questions for these texts are generic.)',
  },
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا نَوْعُ النَّصِّ الأَوَّلِ؟' },
      { route: 'develop', ar: 'هَلْ حُبُّ القِرَاءَةِ شَرْطٌ؟ كَيْفَ تَعْرِفُ؟' },
      { route: 'develop', ar: 'إِلَى مَاذَا يَعُودُ الضَّمِيرُ فِي «سَأُرْسِلُهَا»؟' },
      { route: 'stretch', ar: 'مَاذَا تَسْتَنْتِجُ مِنَ المَقَالِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'النَّصُّ الأَوَّلُ ______ .' },
      { route: 'develop', ar: 'لَا، لِأَنَّ الإِعْلَانَ يَقُولُ « ______ ».' },
      { route: 'develop', ar: 'يَعُودُ الضَّمِيرُ إِلَى ______ .' },
      { route: 'stretch', ar: 'يَدُلُّ هٰذَا عَلَى أَنَّ ______ .' },
    ],
    modelEn: ['What type is the first text?', 'It is a job advert from the city library.'],
    notes: 'Teacher-written prompts and model (the website prompts are generic). Students explain HOW they read. Model continues: A: هَلْ حُبُّ القِرَاءَةِ شَرْطٌ؟ B: لَا، لِأَنَّ الإِعْلَانَ يَقُولُ «يُفَضَّلُ»، وَلَيْسَ «يُشْتَرَطُ».',
  },
  write: {
    core: { amount: '5 sentences', how: 'Answer the advert: formal opening, two requirements you meet (yushtaraṭu …, wa-anā …), close.' },
    develop: { amount: '80–100 words', how: 'Reply to the Al-Nour advert, quoting two exact requirements and giving evidence for each.' },
    stretch: { amount: '100–120 words', how: 'Website task: respond to the advert using its exact requirements as evidence, and address the missing experience.' },
  },
  frames: {
    core: [
      { en: 'I am pleased to apply for …', ar: 'يَسُرُّنِي أَنْ أَتَقَدَّمَ لِـ ______ .' },
      { en: 'I read in your advert that … is required.', ar: 'قَرَأْتُ فِي إِعْلَانِكُمْ أَنَّهُ يُشْتَرَطُ ______ .' },
      { en: 'and I am …', ar: 'وَأَنَا ______ .' },
      { en: 'I will send my CV before …', ar: 'سَأُرْسِلُ سِيرَتِي الذَّاتِيَّةَ قَبْلَ ______ .' },
    ],
    develop: [
      { en: 'The advert also requires …', ar: 'كَمَا يُشْتَرَطُ ______ ،' },
      { en: 'and I have good skills in …', ar: 'وَلَدَيَّ مَهَارَاتٌ جَيِّدَةٌ فِي ______ .' },
      { en: 'I have no previous experience, but …', ar: 'لَيْسَتْ لَدَيَّ خِبْرَةٌ سَابِقَةٌ، وَلٰكِنَّ ______ .' },
      { en: 'The proof is that I …', ar: 'وَالدَّلِيلُ عَلَى ذٰلِكَ أَنَّنِي ______ .' },
    ],
    bank: ['يُشْتَرَطُ', 'يُطْلَبُ', 'يُفَضَّلُ', 'لَا تُشْتَرَطُ', 'مُنَظَّمٌ', 'اسْتِخْدَامُ الحَاسُوبِ', 'خِبْرَةٌ سَابِقَةٌ', 'تَدْرِيبٌ', 'سِيرَتِي الذَّاتِيَّةُ', 'الَّذِي', 'الَّتِي', 'يَدُلُّ هٰذَا عَلَى أَنَّ'],
  },
  stretch: [
    ['تُعْلِنُ … عَنْ حَاجَتِهَا إِلَى', 'announces its need for'],
    ['فِي فَتْرَةِ المَسَاءِ', 'in the evening shift'],
    ['يَتَعَامَلُ بِلُطْفٍ مَعَ', 'deals kindly with'],
    ['نَسِيتُ أَنْ أُرْفِقَ', 'I forgot to attach'],
    ['يَرَى الخُبَرَاءُ أَنَّ', 'experts believe that'],
  ],
  modelEn: 'Dear Al-Nour Centre, I am pleased to apply for the weekend assistant post. I read in your advert that the applicant must be organised, and I am organised: the proof is that I plan my studies every week. The advert also requires good computer use, and I have good skills in programming and typing. I have no previous experience, but the advert says that you provide training in the first week. I will send my CV before Thursday. With best regards.',
  find: ['an exact requirement quoted', 'evidence for a requirement', 'a missing requirement addressed', 'a formal close'],
  modelNotes: 'Teacher-written model (the website model for this lesson is a placeholder). Evidence: قَرَأْتُ فِي إِعْلَانِكُمْ أَنَّهُ يُشْتَرَطُ … · وَالدَّلِيلُ عَلَى ذٰلِكَ · كَمَا يُشْتَرَطُ … · لَيْسَتْ لَدَيَّ خِبْرَةٌ … وَلٰكِنَّ الإِعْلَانَ يَذْكُرُ … · قَبْلَ يَوْمِ الخَمِيسِ (the deadline from the listening).',
  selfCheck: [
    { route: 'core', text: 'I found the requirement words.' },
    { route: 'core', text: 'I did not confuse “preferred” with “required”.' },
    { route: 'develop', text: 'I linked each pronoun to the right noun.' },
    { route: 'develop', text: 'I tracked allaḏī / allatī / allaḏīna.' },
    { route: 'stretch', text: 'My inference quotes a phrase from the text.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['تُعْلِنُ', 'announces'], ['حَاجَتِهَا إِلَى', 'its need for'], ['فَتْرَةِ المَسَاءِ', 'the evening shift'], ['يُفَضَّلُ', 'is preferred'], ['بِلُطْفٍ', 'kindly'],
    ['أَرْسَلْتُ طَلَبِي', 'I sent my application'], ['نَسِيتُ', 'I forgot'], ['أُرْفِقَ', 'attach'], ['الخُبَرَاءُ', 'the experts'], ['سَتَبْقَى', 'will remain'],
  ],
  prep: {
    words: [['مَقَالٌ', 'an article', 'pl. مَقَالَاتٌ'], ['رِسَالَةٌ إِلِكْتُرُونِيَّةٌ', 'an email', 'pl. رَسَائِلُ'], ['خُطْوَةٌ', 'a step', 'pl. خُطُوَاتٌ'], ['مِنَ المُحْتَمَلِ أَنْ', 'it is likely that', '—'], ['أَنْوِي أَنْ', 'I intend to', 'يَنْوِي he']],
    questionEn: 'Plan three steps of your own career route (just notes).',
    questionAr: 'الخُطْوَةُ الأُولَى: … · الثَّانِيَةُ: … · الثَّالِثَةُ: …',
    homework: {
      core: 'Learn the advert words (يُشْتَرَطُ، يُطْلَبُ، يُفَضَّلُ); redo reading questions 1–3.',
      develop: 'Reply to the Al-Nour advert in 80–100 words, quoting two requirements.',
      stretch: 'Website writing task: respond to a job advert using its exact requirements (100–120 words).',
    },
    wordsSource: 'The five words prepare the website D3-L09 writing lesson (a career-plan article or email).',
  },
  remember: 'Remember: required ≠ preferred — link every pronoun to its LOGICAL noun — prove every inference.',
});

module.exports = { meta, slides };
