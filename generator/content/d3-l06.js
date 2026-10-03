'use strict';
/* D3-L06 · Job Applications and Interviews — CV, Skills and Future Plans — website: Pathways › Development › D3 › D3-L06 (formal opening يَسُرُّنِي أَنْ أَتَقَدَّمَ لِـ, experience لَدَيَّ خِبْرَةٌ فِي / سَبَقَ لِي أَنْ, suitability أَعْتَقِدُ أَنَّنِي مُنَاسِبٌ / مُنَاسِبَةٌ, strength + evidence).
 * Website vocabulary, grammar rules, listening script and reading text used as published; the quiz, listening and reading
 * questions, sorter, mistakes, model sentences, speaking prompts, writing model, mission and final check are generic placeholders
 * on the website for this lesson, so those items are teacher-written from the website’s own script, text and rules. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D3')({
  n: 6, fileTitle: 'Job_Applications_and_Interviews', chip: 'Applications',
  title: 'Job Applications and Interviews — CV, Skills and Future Plans', arabic: 'طَلَبَاتُ العَمَلِ وَالمُقَابَلَاتُ — السِّيرَةُ الذَّاتِيَّةُ وَالمَهَارَاتُ وَالخُطَطُ',
  focus: 'Apply formally for a job and answer interview questions: a formal opening (يَسُرُّنِي أَنْ أَتَقَدَّمَ لِـ …), experience (لَدَيَّ خِبْرَةٌ فِي / سَبَقَ لِي أَنْ …), suitability (أَعْتَقِدُ أَنَّنِي مُنَاسِبٌ …) and a strength with evidence.',
  icon: 'FaFileSignature', iconSet: 'fa6',
});

const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D3-L06', {
  support: `• Core: 8 application words + four formal chunks learnt as wholes (يَسُرُّنِي أَنْ أَتَقَدَّمَ لِـ … · لَدَيَّ خِبْرَةٌ فِي … · أَعْتَقِدُ أَنَّنِي مُنَاسِبٌ / مُنَاسِبَةٌ … · مِنْ نِقَاطِ قُوَّتِي …). Develop: سَبَقَ لِي أَنْ + past verb and a strength with evidence. Stretch: a full formal email (greeting, purpose, experience, suitability, close).
• REGISTER is the new idea: formal Arabic avoids the chatty أُرِيدُ … in a letter — compare English “I would like to apply” vs “I want the job”.
• The D3-L03 skills (group 2) and D3-L04 future (sa-) feed straight into the interview answers.
• Role-play idea: the teacher (or a confident student) is the interviewer; students answer three questions in the chat or on the mic.`,
  teach: 'Formal application chunks and interview evidence.',
  wedo: 'Picture match, sort formal / informal, fix and listen to an interview.',
  next: { nextCode: 'D3-L07', nextTitle: 'Arabic Proverbs and Values — Work Ethic and Success', nextAr: 'الأَمْثَالُ العَرَبِيَّةُ وَالقِيَمُ' },
  objectives: ['Name the documents and steps of a job application.', 'Open a formal application with يَسُرُّنِي أَنْ أَتَقَدَّمَ لِـ.', 'Describe experience (لَدَيَّ خِبْرَةٌ فِي / سَبَقَ لِي أَنْ).', 'Name a strength in an interview and prove it.'],
  flexGroups: [1, 2],
  doNow: {
    questions: [
      q('What does سِيرَةٌ ذَاتِيَّةٌ mean?', ['a CV', 'a cover letter', 'an interview'], 'Prepared at home (D3-L05).'),
      q('What does نُقْطَةُ ضَعْفٍ mean?', ['a weakness', 'a strength', 'a reference'], 'Prepared at home (D3-L05).'),
      q('Complete: إِذَا ___ ، فَسَأَلْتَحِقُ بِالجَامِعَةِ.', ['نَجَحْتُ', 'سَأَنْجَحُ', 'نَاجِحٌ'], 'D3-L05: idhā + past.'),
      q('Which is a skill (noun)?', ['إِدَارَةُ الوَقْتِ', 'مُنَظَّمٌ', 'مَسْؤُولٌ'], 'D3-L03: skills are nouns.'),
      q('Choose the sentence about a girl.', ['أَنَا مُنَظَّمَةٌ لِأَنَّنِي أُخَطِّطُ يَوْمِي.', 'أَنَا مُنَظَّمٌ لِأَنَّهَا تُخَطِّطُ.', 'هُوَ مُنَظَّمَةٌ.'], 'D3-L03: quality + evidence.'),
    ],
    keyIdea: { text: 'A job letter is FORMAL: “I am pleased to apply”, not “I want the job”.', ar: '{w|يَسُرُّنِي أَنْ أَتَقَدَّمَ} لِوَظِيفَةِ … · {e|لَدَيَّ خِبْرَةٌ فِي} …' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of D3-L05. Question 3 retrieves D3-L05; questions 4–5 retrieve D3-L03 (skills and evidence).',
  },
  routes: {
    core: ['I can name the parts of a job application.', 'I can open a formal letter.'],
    develop: ['I can describe my experience.', 'I can give a strength with evidence.'],
    stretch: ['I can write a full formal application email.', 'I can answer interview questions with future plans.'],
  },
  bridge: [
    { ar: 'سِيرَةٌ', urdu: 'سیرت', tr: 'sīrat', en: 'life story (Sīra) → CV' },
    { ar: 'طَلَبٌ', urdu: 'طلب / درخواست', tr: 'talab', en: 'request → application' },
    { ar: 'مُقَابَلَةٌ', urdu: 'مقابلہ', tr: 'muqābla', en: 'Urdu: contest · Arabic: interview' },
    { ar: 'تَجْرِبَةٌ / خِبْرَةٌ', urdu: 'تجربہ', tr: 'tajurba', en: 'experience' },
    { ar: 'رَسْمِيٌّ', urdu: 'رسمی', tr: 'rasmī', en: 'formal' },
  ],
  bridgeNotes: 'URDU BRIDGE: سیرت (as in Sīrat an-Nabī — a life story) → سِيرَةٌ ذَاتِيَّةٌ (“self life-story” = CV). طلب، تجربہ، رسمی are shared. CAREFUL again: Urdu مقابلہ is a contest or competition; Arabic مُقَابَلَةٌ شَخْصِيَّةٌ is a (job) interview.',
  core: ['سِيرَةٌ ذَاتِيَّةٌ', 'رِسَالَةُ تَغْطِيَةٍ', 'طَلَبُ وَظِيفَةٍ', 'إِعْلَانُ وَظِيفَةٍ', 'مُقَابَلَةٌ شَخْصِيَّةٌ', 'خِبْرَةٌ سَابِقَةٌ', 'نُقْطَةُ قُوَّةٍ', 'نُقْطَةُ ضَعْفٍ', 'يَسُرُّنِي أَنْ أَتَقَدَّمَ'],
  forms: { 'سِيرَةٌ ذَاتِيَّةٌ': sp('سِيَرٌ ذَاتِيَّةٌ'), 'طَلَبُ وَظِيفَةٍ': sp('طَلَبَاتُ وَظَائِفَ'), 'مُقَابَلَةٌ شَخْصِيَّةٌ': sp('مُقَابَلَاتٌ'), 'نُقْطَةُ قُوَّةٍ': sp('نِقَاطُ قُوَّةٍ') },
  vocabNotes: {
    0: 'The application toolkit. Two cards are whole formal chunks: أَنَا مُنَاسِبٌ لِهٰذِهِ الوَظِيفَةِ (a girl: مُنَاسِبَةٌ) and يَسُرُّنِي أَنْ أَتَقَدَّمَ (literally “it pleases me to apply”).',
    1: 'Skills (FLEX): review from D3-L03 — every interview answer needs one.',
    2: 'Formal connectors (FLEX): in a letter prefer إِضَافَةً إِلَى ذٰلِكَ and عَلَى سَبِيلِ المِثَالِ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · formal opening and experience (website rules 1–2)', title: 'Formal, not chatty', ar: 'لُغَةٌ رَسْمِيَّةٌ',
      cols: [{ label: 'Informal (avoid in a letter)', w: 4.0, size: 22 }, { label: 'Formal (use)', w: 5.2, size: 22 }, { label: 'Pattern', w: 3.13 }],
      rows: [
        { core: true, cells: [P('أُرِيدُ هٰذِهِ الوَظِيفَةَ.', 'I want this job.'), P('{w|يَسُرُّنِي أَنْ أَتَقَدَّمَ} لِوَظِيفَةِ مُسَاعِدٍ إِدَارِيٍّ.', 'I am pleased to apply for the post of administrative assistant.'), 'yasurrunī an ataqaddama li-'] },
        { core: true, cells: [P('عَمِلْتُ فِي مَطْعَمٍ.', 'I worked in a restaurant.'), P('{e|لَدَيَّ خِبْرَةٌ فِي} خِدْمَةِ العُمَلَاءِ.', 'I have experience in customer service.'), 'ladayya + noun'] },
        { cells: [P('سَاعَدْتُ فِي المَكْتَبَةِ.', 'I helped in the library.'), P('{e|سَبَقَ لِي أَنْ} عَمِلْتُ فِي مَكْتَبٍ.', 'I have previously worked in an office.'), 'sabaqa lī an + past'] },
        { cells: [P('أَنَا جَيِّدٌ.', 'I am good.'), P('{k|أَعْتَقِدُ أَنَّنِي مُنَاسِبَةٌ} لِلوَظِيفَةِ.', 'I believe I am suitable for the job (f.).'), 'aʿtaqidu annanī + adj.'] },
      ],
      ltr: true,
      foot: 'Use ladayya with a NOUN (experience in …) and sabaqa lī an with a PAST verb (I have previously …).',
      notes: `GRAMMAR PART 1 — website rules “Formal opening” (يَسُرُّنِي أَنْ أَتَقَدَّمَ لِـ: a formal impersonal opening rather than conversational أُرِيدُ) and “Experience” (لَدَيَّ with a noun or سَبَقَ لِي أَنْ with a verb). Website examples: يَسُرُّنِي أَنْ أَتَقَدَّمَ لِوَظِيفَةِ مُسَاعِدٍ إِدَارِيٍّ · لَدَيَّ خِبْرَةٌ فِي خِدْمَةِ العُمَلَاءِ · سَبَقَ لِي أَنْ عَمِلْتُ فِي مَكْتَبٍ.
The informal column is teacher-added for contrast. Core: learn rows 1–2 as fixed chunks.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · suitability and interview evidence (website rules 3–4) · Develop / Stretch', title: 'Why me? Prove it.', ar: 'مُنَاسِبٌ · الدَّلِيلُ',
      cards: [
        { chip: 'SUITABLE · HE', color: '1D5FBF', head: 'أَعْتَقِدُ أَنَّنِي مُنَاسِبٌ', big: 'أَعْتَقِدُ أَنَّنِي مُنَاسِبٌ لِهٰذِهِ الفُرْصَةِ.', en: 'I believe I am suitable for this opportunity.', clue: 'A boy: munāsibun.' },
        { chip: 'SUITABLE · SHE', color: 'C0386B', head: 'أَعْتَقِدُ أَنَّنِي مُنَاسِبَةٌ', big: 'أَعْتَقِدُ أَنَّنِي مُنَاسِبَةٌ لِلوَظِيفَةِ لِأَنَّنِي مُنَظَّمَةٌ.', en: 'I believe I am suitable for the job because I am organised.', clue: 'A girl: -atun, twice.' },
        { chip: 'EVIDENCE · STRETCH', color: '1E7B4F', head: 'وَالدَّلِيلُ عَلَى ذٰلِكَ', big: 'مِنْ نِقَاطِ قُوَّتِي إِدَارَةُ الوَقْتِ، وَالدَّلِيلُ عَلَى ذٰلِكَ أَنَّنِي أُنَظِّمُ مَشْرُوعَاتِي بِدِقَّةٍ.', en: 'One of my strengths is time management; the proof is that I organise my projects carefully.', clue: 'Strength, then proof.' },
      ],
      error: { text: 'A girl applying: the adjective agrees.', pairs: [['قَالَتْ نُورُ: أَنَا مُنَاسِبَةٌ.', 'قَالَتْ نُورُ: أَنَا مُنَاسِبٌ.']] },
      notes: `GRAMMAR PART 2 — website rules “Suitability” (أَعْتَقِدُ أَنَّنِي مُنَاسِبٌ / مُنَاسِبَةٌ لِـ: agree the adjective with the applicant and support the claim) and “Interview evidence” (مِنْ نِقَاطِ قُوَّتِي … وَالدَّلِيلُ عَلَى ذٰلِكَ …: give evidence after naming a strength). Website examples as shown.
(Teacher-chosen: the website common error is generic.)`,
    },
  ],
  rulesTitle: 'Formal application language',
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me write a formal application',
    steps: [
      { head: 'Greeting', ar: 'السَّيِّدُ المُدِيرُ المُحْتَرَمُ،', think: 'Formal greeting.' },
      { head: 'Purpose', ar: '{w|يَسُرُّنِي أَنْ أَتَقَدَّمَ} لِوَظِيفَةِ مُسَاعِدٍ فِي مَتْجَرِكُمْ.', think: 'Formal opening.' },
      { head: 'Experience', ar: '{e|سَبَقَ لِي أَنْ} عَمِلْتُ فِي مَطْعَمٍ، وَ{e|لَدَيَّ خِبْرَةٌ فِي} خِدْمَةِ العُمَلَاءِ.', think: 'Verb, then noun.' },
      { head: 'Why me', ar: '{k|أَعْتَقِدُ أَنَّنِي مُنَاسِبٌ} لِلوَظِيفَةِ لِأَنَّنِي مَسْؤُولٌ.', think: 'Claim + reason.' },
    ],
    legend: ['w', 'e', 'k'], legendLabels: { w: 'OPENING', e: 'EXPERIENCE', k: 'SUITABILITY' },
    model: 'السَّيِّدُ المُدِيرُ المُحْتَرَمُ، {w|يَسُرُّنِي أَنْ أَتَقَدَّمَ} لِوَظِيفَةِ مُسَاعِدٍ فِي مَتْجَرِكُمْ يَوْمَ السَّبْتِ. {e|سَبَقَ لِي أَنْ} عَمِلْتُ فِي مَطْعَمِ عَمِّي، وَ{e|لَدَيَّ خِبْرَةٌ فِي} خِدْمَةِ العُمَلَاءِ. {k|أَعْتَقِدُ أَنَّنِي مُنَاسِبٌ} لِهٰذِهِ الوَظِيفَةِ لِأَنَّنِي مَسْؤُولٌ وَأَحْتَرِمُ المَوَاعِيدَ. مَعَ خَالِصِ التَّحِيَّاتِ.',
    modelEn: 'Dear Manager, I am pleased to apply for the post of Saturday assistant in your shop. I have previously worked in my uncle’s restaurant, and I have experience in customer service. I believe I am suitable for this job because I am responsible and I respect appointments. With best regards.',
    notes: 'I DO (3 min) — teacher-written model built on the website rules and reading text. Point out the five-part shape: greeting → purpose → experience → suitability → close (مَعَ خَالِصِ التَّحِيَّاتِ). To a woman manager: السَّيِّدَةُ المُدِيرَةُ المُحْتَرَمَةُ (as in the reading).',
  },
  patterns: [
    { ar: 'يَسُرُّنِي أَنْ أَتَقَدَّمَ لِوَظِيفَةِ مُسَاعِدٍ إِدَارِيٍّ.', en: 'I am pleased to apply for the post of administrative assistant.', tip: 'Formal opening.' },
    { ar: 'لَدَيَّ خِبْرَةٌ فِي خِدْمَةِ العُمَلَاءِ.', en: 'I have experience in customer service.', tip: 'ladayya + noun.' },
    { ar: 'سَبَقَ لِي أَنْ تَطَوَّعْتُ فِي مَكْتَبَةِ المَدْرَسَةِ.', en: 'I have previously volunteered in the school library.', tip: 'sabaqa lī an + past.' },
    { ar: 'أَعْتَقِدُ أَنَّنِي مُنَاسِبَةٌ لِلوَظِيفَةِ لِأَنَّنِي مُنَظَّمَةٌ.', en: 'I believe I am suitable for the job because I am organised.', tip: 'Agree (f.) + reason.' },
  ],
  game: {
    title: 'Applying for a job: match the picture',
    pick: [0, 1, 5],
    en: ['This is my CV.', 'I have a job interview.', 'I send the job application by email.'],
    icons: [[['fa6', 'FaFileLines', '1D5FBF'], ['fa6', 'FaUser', '5A6472']], [['fa6', 'FaHandshake', '1E7B4F'], ['fa6', 'FaBuilding', '6B4C9A']], [['fa6', 'FaEnvelope', 'C77700'], ['fa6', 'FaPaperclip', 'B83227']]],
    labels: ['a CV', 'an interview', 'email + attachment'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Other website cards: مِنْ نِقَاطِ قُوَّتِي التَّوَاصُلُ وَالتَّنْظِيمُ · لِمَاذَا تُرِيدُ هٰذِهِ الوَظِيفَةَ؟ (the classic interview question) · يَجِبُ أَنْ أَسْتَعِدَّ جَيِّدًا لِلْمُقَابَلَةِ.',
  },
  sorterCats: ['Formal (letter)', 'Informal (chat)'],
  sorterNotes: 'Then turn two informal items into formal ones: أُرِيدُ الوَظِيفَةَ → يَسُرُّنِي أَنْ أَتَقَدَّمَ لِلوَظِيفَةِ.',
  patch: {
    mission: null,
    sorter: {
      title: 'Formal or informal?', instructions: 'Would you use this in a formal job letter, or only when chatting with a friend?',
      categories: ['Formal (letter)', 'Informal (chat)'],
      items: [
        { label: 'يَسُرُّنِي أَنْ أَتَقَدَّمَ', answer: 0 }, { label: 'لَدَيَّ خِبْرَةٌ فِي', answer: 0 }, { label: 'سَبَقَ لِي أَنْ عَمِلْتُ', answer: 0 }, { label: 'مَعَ خَالِصِ التَّحِيَّاتِ', answer: 0 },
        { label: 'أُرِيدُ الوَظِيفَةَ', answer: 1 }, { label: 'مَرْحَبًا يَا صَدِيقِي', answer: 1 }, { label: 'أَنَا جَيِّدٌ', answer: 1 }, { label: 'إِلَى اللِّقَاءِ', answer: 1 },
      ],
    },
    mistakes: [
      { wrong: 'يَسُرُّنِي أَنْ أَتَقَدَّمُ لِلوَظِيفَةِ.', right: 'يَسُرُّنِي أَنْ أَتَقَدَّمَ لِلوَظِيفَةِ.', why: 'After an the verb ends in -a.' },
      { wrong: 'لَدَيَّ خِبْرَةٌ فِي عَمِلْتُ.', right: 'لَدَيَّ خِبْرَةٌ فِي خِدْمَةِ العُمَلَاءِ.', why: 'ladayya khibra fī + a NOUN.' },
      { wrong: 'قَالَتْ نُورُ: أَعْتَقِدُ أَنَّنِي مُنَاسِبٌ.', right: 'قَالَتْ نُورُ: أَعْتَقِدُ أَنَّنِي مُنَاسِبَةٌ.', why: 'Noor is a girl → munāsibatun.' },
    ],
    grammar: {
      common_error: 'Do not open a formal letter with أُرِيدُ, and make مُنَاسِبٌ agree with the applicant (teacher wording: the website common error for this lesson is generic).',
      quiz: [
        L('Which is the formal opening?', ['يَسُرُّنِي أَنْ أَتَقَدَّمَ لِلوَظِيفَةِ.', 'أُرِيدُ الوَظِيفَةَ.', 'أَنَا أُحِبُّ الوَظِيفَةَ.'], 'Formal, impersonal opening.'),
        L('Complete: لَدَيَّ خِبْرَةٌ ___ خِدْمَةِ العُمَلَاءِ.', ['فِي', 'عَلَى', 'مِنْ'], 'khibra fī = experience in.'),
        L('Complete: سَبَقَ لِي أَنْ ___ فِي مَكْتَبٍ.', ['عَمِلْتُ', 'أَعْمَلُ', 'عَمَلٌ'], 'sabaqa lī an + PAST verb.'),
        L('A girl writes: أَعْتَقِدُ أَنَّنِي ___ لِلوَظِيفَةِ.', ['مُنَاسِبَةٌ', 'مُنَاسِبٌ', 'مُنَاسِبُونَ'], 'Agree with the applicant.'),
        L('What does رِسَالَةُ تَغْطِيَةٍ mean?', ['a cover letter', 'a CV', 'a job advert'], 'risāla = letter.'),
        L('Which gives evidence for a strength?', ['وَالدَّلِيلُ عَلَى ذٰلِكَ أَنَّنِي قُدْتُ فَرِيقًا.', 'أَنَا قَائِدٌ جَيِّدٌ.', 'أُحِبُّ القِيَادَةَ.'], 'Strength, then proof.'),
        L('Which is a formal way to end a letter?', ['مَعَ خَالِصِ التَّحِيَّاتِ', 'إِلَى اللِّقَاءِ', 'بَاي'], 'With best regards.'),
        L('What does مَرْجِعٌ / تَزْكِيَةٌ mean?', ['a reference', 'a salary', 'a weakness'], 'Someone who recommends you.'),
      ],
    },
    final: [
      L('Complete: يَسُرُّنِي أَنْ ___ لِوَظِيفَةِ مُسَاعِدٍ.', ['أَتَقَدَّمَ', 'تَقَدَّمْتُ', 'سَأَتَقَدَّمُ'], 'an + verb (-a).'),
      L('Which uses a noun after ladayya?', ['لَدَيَّ خِبْرَةٌ فِي التَّصْمِيمِ.', 'لَدَيَّ عَمِلْتُ.', 'لَدَيَّ أَنْ أَعْمَلَ.'], 'ladayya + noun.'),
      L('What does مُقَابَلَةٌ شَخْصِيَّةٌ mean here?', ['a job interview', 'a contest', 'a meeting with friends'], 'Not the Urdu meaning!'),
      L('Which register does a job application use?', ['formal', 'informal', 'slang'], 'Formal Arabic.'),
    ],
    listening: {
      questions: [
        L('Why does Noor want the job?', ['she likes dealing with people', 'the salary is high', 'it is near her home'], 'أُحِبُّ التَّعَامُلَ مَعَ النَّاسِ'),
        L('What experience does she have?', ['organising school events', 'working in a shop', 'teaching children'], 'خِبْرَةٌ فِي تَنْظِيمِ الفَعَالِيَّاتِ المَدْرَسِيَّةِ'),
        L('What strength does she name?', ['she is organised', 'she is creative', 'she is calm'], 'أَنَا مُنَظَّمَةٌ'),
        L('What evidence does she give?', ['she led a team and finished early', 'she won a prize', 'she has a certificate'], 'قُدْتُ فَرِيقًا … قَبْلَ المَوْعِدِ'),
        L('How many students were in her team?', ['five', 'three', 'ten'], 'خَمْسِ طَالِبَاتٍ'),
        L('What will she study in the future?', ['business management', 'medicine', 'design'], 'سَأَدْرُسُ إِدَارَةَ الأَعْمَالِ'),
      ],
    },
    reading: {
      questions: [
        L('What is the writer applying for?', ['a summer training placement', 'a full-time job', 'a scholarship'], 'لِفُرْصَةِ التَّدْرِيبِ الصَّيْفِيِّ'),
        L('Which two skills does the writer name?', ['computer and communication', 'leadership and design', 'languages and maths'], 'مَهَارَاتٌ جَيِّدَةٌ فِي الحَاسُوبِ وَالتَّوَاصُلِ'),
        L('Where did the writer volunteer?', ['in the school library', 'in a hospital', 'in a shop'], 'تَطَوَّعْتُ فِي مَكْتَبَةِ المَدْرَسَةِ'),
        L('Which two tasks did the writer do?', ['helped visitors and organised records', 'taught pupils and cleaned', 'sold books and cooked'], 'سَاعَدْتُ الزُّوَّارَ وَرَتَّبْتُ السِّجِلَّاتِ'),
        L('Why does the writer feel suitable?', ['learns quickly and works well in a team', 'is the oldest student', 'lives near the company'], 'أَتَعَلَّمُ بِسُرْعَةٍ وَأَعْمَلُ جَيِّدًا ضِمْنَ فَرِيقٍ'),
        L('Which register is used?', ['formal', 'informal', 'a mix of English and Arabic'], 'السَّيِّدَةُ … المُحْتَرَمَةُ، يَسُرُّنِي …'),
      ],
    },
    speaking: {
      context: 'A job interview',
      model: [
        ['A', 'لِمَاذَا تُرِيدُ هٰذِهِ الوَظِيفَةَ؟', 'Why do you want this job?'],
        ['B', 'لِأَنَّنِي أُحِبُّ العَمَلَ مَعَ النَّاسِ، وَلَدَيَّ خِبْرَةٌ فِي خِدْمَةِ العُمَلَاءِ.', 'Because I like working with people, and I have experience in customer service.'],
        ['A', 'مَا نُقْطَةُ قُوَّتِكَ؟', 'What is your strength?'],
        ['B', 'مِنْ نِقَاطِ قُوَّتِي التَّنْظِيمُ، وَالدَّلِيلُ عَلَى ذٰلِكَ أَنَّنِي أُنْهِي وَاجِبَاتِي قَبْلَ المَوْعِدِ.', 'One of my strengths is organisation; the proof is that I finish my work before the deadline.'],
      ],
    },
    writing: {
      prompt: 'Write a formal application email for a weekend or summer job.',
      model: 'السَّيِّدُ مُدِيرُ المَتْجَرِ المُحْتَرَمُ، يَسُرُّنِي أَنْ أَتَقَدَّمَ لِوَظِيفَةِ مُسَاعِدٍ فِي مَتْجَرِكُمْ أَيَّامَ السَّبْتِ. أَنَا طَالِبٌ فِي الصَّفِّ الثَّامِنِ، وَأَنَا مَسْؤُولٌ وَمُنَظَّمٌ. سَبَقَ لِي أَنْ تَطَوَّعْتُ فِي مَكْتَبَةِ المَدْرَسَةِ، حَيْثُ سَاعَدْتُ الطُّلَّابَ وَرَتَّبْتُ الكُتُبَ، لِذٰلِكَ لَدَيَّ خِبْرَةٌ فِي التَّعَامُلِ مَعَ النَّاسِ. مِنْ نِقَاطِ قُوَّتِي إِدَارَةُ الوَقْتِ، وَالدَّلِيلُ عَلَى ذٰلِكَ أَنَّنِي أُنْهِي وَاجِبَاتِي دَائِمًا فِي الوَقْتِ. أَعْتَقِدُ أَنَّنِي مُنَاسِبٌ لِهٰذِهِ الوَظِيفَةِ لِأَنَّنِي أَتَعَلَّمُ بِسُرْعَةٍ. فِي المُسْتَقْبَلِ سَأَدْرُسُ إِدَارَةَ الأَعْمَالِ. مَعَ خَالِصِ التَّحِيَّاتِ.',
    },
  },
  hints: ['After an: -u or -a?', 'fī + a verb or a noun?', 'Noor is a girl: which ending?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 5.\nListen for: النَّاسِ · مُنَظَّمَةٌ · خَمْسِ.',
  listenRoutes: 'Core: questions 1, 3 and 5. Develop / Stretch: all 6.',
  gloss: [
    ['المُقَابِلُ: لِمَاذَا تُرِيدِينَ هٰذِهِ الوَظِيفَةَ؟', 'Interviewer: Why do you want this job?'],
    ['نُورُ: لِأَنَّنِي أُحِبُّ التَّعَامُلَ مَعَ النَّاسِ، وَلَدَيَّ خِبْرَةٌ فِي تَنْظِيمِ الفَعَالِيَّاتِ المَدْرَسِيَّةِ.', 'Noor: Because I like dealing with people, and I have experience in organising school events.'],
    ['المُقَابِلُ: مَا نُقْطَةُ قُوَّتِكِ؟', 'Interviewer: What is your strength?'],
    ['نُورُ: أَنَا مُنَظَّمَةٌ، فَقَدْ قُدْتُ فَرِيقًا مِنْ خَمْسِ طَالِبَاتٍ وَأَنْهَيْنَا المَشْرُوعَ قَبْلَ المَوْعِدِ.', 'Noor: I am organised — I led a team of five students and we finished the project before the deadline.'],
    ['المُقَابِلُ: مَا خُطَّتُكِ؟ نُورُ: سَأَدْرُسُ إِدَارَةَ الأَعْمَالِ فِي المُسْتَقْبَلِ.', 'Interviewer: What is your plan? Noor: I will study business management in the future.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'لِمَاذَا تُرِيدُ هٰذِهِ الوَظِيفَةَ؟' },
      { route: 'core', ar: 'مَا نُقْطَةُ قُوَّتِكَ؟' },
      { route: 'develop', ar: 'هَلْ لَدَيْكَ خِبْرَةٌ سَابِقَةٌ؟' },
      { route: 'stretch', ar: 'مَا نُقْطَةُ ضَعْفِكَ، وَكَيْفَ تُحَسِّنُهَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'لِأَنَّنِي أُحِبُّ ______ .' },
      { route: 'core', ar: 'نُقْطَةُ قُوَّتِي ______ لِأَنَّنِي ______ .' },
      { route: 'develop', ar: 'نَعَمْ، سَبَقَ لِي أَنْ ______ .' },
      { route: 'stretch', ar: 'أَحْيَانًا ______ ، وَلٰكِنَّنِي ______ .' },
    ],
    modelEn: ['Why do you want this job?', 'Because I like working with people, and I have experience in customer service.'],
    notes: 'Teacher-written prompts and model (the website prompts are generic) — an interview role play: the teacher is the interviewer. Model continues: A: مَا نُقْطَةُ قُوَّتِكَ؟ B: مِنْ نِقَاطِ قُوَّتِي التَّنْظِيمُ، وَالدَّلِيلُ عَلَى ذٰلِكَ أَنَّنِي أُنْهِي وَاجِبَاتِي قَبْلَ المَوْعِدِ. To a girl: لِمَاذَا تُرِيدِينَ …؟ · مَا نُقْطَةُ قُوَّتِكِ؟ (as in the listening).',
  },
  write: {
    core: { amount: '5 sentences', how: 'A short formal letter from the frames: greeting, purpose, one experience, why you, close.' },
    develop: { amount: '80–100 words', how: 'Formal email with sabaqa lī an, ladayya khibra and a strength with evidence.' },
    stretch: { amount: '100–120 words', how: 'Website task: a full formal application email for a weekend or summer job, with future plans.' },
  },
  frames: {
    core: [
      { en: 'Dear Manager,', ar: 'السَّيِّدُ المُدِيرُ المُحْتَرَمُ،' },
      { en: 'I am pleased to apply for the post of …', ar: 'يَسُرُّنِي أَنْ أَتَقَدَّمَ لِوَظِيفَةِ ______ .' },
      { en: 'I have experience in …', ar: 'لَدَيَّ خِبْرَةٌ فِي ______ .' },
      { en: 'I believe I am suitable because …', ar: 'أَعْتَقِدُ أَنَّنِي مُنَاسِبٌ / مُنَاسِبَةٌ لِأَنَّنِي ______ .' },
      { en: 'With best regards.', ar: 'مَعَ خَالِصِ التَّحِيَّاتِ.' },
    ],
    develop: [
      { en: 'I have previously …', ar: 'سَبَقَ لِي أَنْ ______ .' },
      { en: 'where I …', ar: 'حَيْثُ ______ .' },
      { en: 'One of my strengths is …', ar: 'مِنْ نِقَاطِ قُوَّتِي ______ ،' },
      { en: 'and the proof is that I …', ar: 'وَالدَّلِيلُ عَلَى ذٰلِكَ أَنَّنِي ______ .' },
    ],
    bank: ['يَسُرُّنِي أَنْ أَتَقَدَّمَ', 'لَدَيَّ خِبْرَةٌ فِي', 'سَبَقَ لِي أَنْ', 'أَعْتَقِدُ أَنَّنِي', 'مُنَاسِبٌ', 'مُنَاسِبَةٌ', 'مِنْ نِقَاطِ قُوَّتِي', 'وَالدَّلِيلُ عَلَى ذٰلِكَ', 'تَطَوَّعْتُ', 'خِدْمَةِ العُمَلَاءِ', 'إِضَافَةً إِلَى ذٰلِكَ', 'مَعَ خَالِصِ التَّحِيَّاتِ'],
  },
  stretch: [
    ['السَّيِّدَةُ المُدِيرَةُ المُحْتَرَمَةُ', 'Dear (female) Manager'],
    ['فُرْصَةُ التَّدْرِيبِ الصَّيْفِيِّ', 'a summer placement'],
    ['حَيْثُ سَاعَدْتُ الزُّوَّارَ', 'where I helped visitors'],
    ['أَتَعَلَّمُ بِسُرْعَةٍ', 'I learn quickly'],
    ['أَعْمَلُ جَيِّدًا ضِمْنَ فَرِيقٍ', 'I work well in a team'],
  ],
  modelEn: 'Dear Shop Manager, I am pleased to apply for the post of Saturday assistant in your shop. I am a Year 8 student, and I am responsible and organised. I have previously volunteered in the school library, where I helped students and arranged the books, so I have experience in dealing with people. One of my strengths is time management; the proof is that I always finish my homework on time. I believe I am suitable for this job because I learn quickly. In the future I will study business management. With best regards.',
  find: ['the formal opening', 'sabaqa lī an + past', 'a strength with evidence', 'the formal close'],
  modelNotes: 'Teacher-written model (the website model for this lesson is a placeholder). Evidence: يَسُرُّنِي أَنْ أَتَقَدَّمَ · سَبَقَ لِي أَنْ تَطَوَّعْتُ · لَدَيَّ خِبْرَةٌ فِي · مِنْ نِقَاطِ قُوَّتِي … وَالدَّلِيلُ عَلَى ذٰلِكَ · أَعْتَقِدُ أَنَّنِي مُنَاسِبٌ · سَأَدْرُسُ (D3-L04) · مَعَ خَالِصِ التَّحِيَّاتِ.',
  selfCheck: [
    { route: 'core', text: 'I used a formal opening and close.' },
    { route: 'core', text: 'munāsib agrees with me (m. / f.).' },
    { route: 'develop', text: 'ladayya + noun; sabaqa lī an + past.' },
    { route: 'develop', text: 'My strength has evidence.' },
    { route: 'stretch', text: 'I added a future plan (sa-).' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['مُدِيرَةُ المَوَارِدِ البَشَرِيَّةِ', 'HR manager (f.)'], ['المُحْتَرَمَةُ', 'respected (Dear …)'], ['فُرْصَةِ', 'opportunity'], ['التَّدْرِيبِ الصَّيْفِيِّ', 'summer training'], ['شَرِكَتِكُمْ', 'your company'],
    ['تَطَوَّعْتُ', 'I volunteered'], ['حَيْثُ', 'where'], ['الزُّوَّارَ', 'the visitors'], ['رَتَّبْتُ السِّجِلَّاتِ', 'I organised the records'], ['ضِمْنَ فَرِيقٍ', 'within a team'],
  ],
  prep: {
    words: [['مَثَلٌ', 'a proverb', 'pl. أَمْثَالٌ'], ['المُثَابَرَةُ', 'perseverance', '—'], ['الأَمَانَةُ', 'honesty, trustworthiness', '—'], ['الاِنْضِبَاطُ', 'discipline', '—'], ['الإِتْقَانُ', 'mastery, doing a job well', '—']],
    questionEn: 'Do you know a proverb (in any language) about hard work? Write it down.',
    questionAr: 'مَنْ جَدَّ …',
    homework: {
      core: 'Learn the four formal chunks by heart; write the 5-sentence letter from the frames.',
      develop: 'Formal email (80–100 words) with experience and a strength + evidence.',
      stretch: 'Website writing task: a formal application email for a weekend or summer job (100–120 words).',
    },
    wordsSource: 'The five words come from the website D3-L07 vocabulary (proverbs and work values).',
  },
  remember: 'Remember: formal opening — ladayya + noun, sabaqa lī an + past — every strength needs proof.',
});

module.exports = { meta, slides };
