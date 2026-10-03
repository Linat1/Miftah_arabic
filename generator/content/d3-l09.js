'use strict';
/* D3-L09 · Writing — Career Plans Article or Email — website: Pathways › Development › D3 › D3-L09 (paragraph focus: idea + detail + reason, controlled sequence أَوَّلًا / ثُمَّ / بَعْدَ ذٰلِكَ / أَخِيرًا, reference without repetition هٰذَا المَجَالُ / هٰذِهِ المِهْنَةُ, concession عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …; 120–140 words).
 * Website vocabulary, grammar rules, listening script, reading model email and writing task used as published; the quiz, listening and
 * reading questions, sorter, mistakes, model sentences, speaking prompts, mission and final check are generic placeholders on the website
 * for this lesson (its visual game repeats D3-L04), so those items are teacher-written from the website’s own texts and rules. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D3')({
  n: 9, fileTitle: 'Writing_Career_Plans_Article_or_Email', chip: 'Extended Writing',
  title: 'Writing — Career Plans Article or Email', arabic: 'الكِتَابَةُ — خُطَطِي وَطُمُوحَاتِي المِهَنِيَّةُ',
  focus: 'Plan, draft and improve a 120–140-word career article or email in four paragraphs: ambition + reason · skills + evidence · route (sequenced) · challenge + concession — using the whole D3 toolkit.',
  icon: 'FaPenNib', iconSet: 'fa6',
});

const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const P = (a, b) => ({ ar: a, sub: b });
const site = D.site('D3-L09');
const slides = D.devLesson('D3-L09', {
  support: `• Core: a supported 60–80-word response with one frame per paragraph (all four points covered). Develop: 120–140 words, four paragraphs, sequencers and one reference expression. Stretch: add a concession (عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …) and improve the first draft with a self-audit.
• Lesson shape (like F6-L09): 8 min plan from the listening (Huda’s four-part plan) · 15 min draft · 7 min review with the checklist · 5 min improve two sentences.
• The four paragraphs reuse every D3 lesson: L04 (sa-, li-kay), L03 (skills + evidence), L05 (routes, idhā), L02 / L05 (pros and cons).
• The website reading text (Samira’s email) IS the model answer — use it in I Do and Feedback.`,
  teach: 'Paragraph focus, sequence, reference and concession.',
  wedo: 'Sort sentences into paragraphs, fix cohesion slips and turn Huda’s spoken plan into notes.',
  next: { nextCode: 'D3-L10', nextTitle: 'Listening — Work and Career Conversations', nextAr: 'الاِسْتِمَاعُ — مُحَادَثَاتُ العَمَلِ' },
  objectives: ['Plan a four-paragraph career text with one main point per paragraph.', 'Sequence a route with أَوَّلًا / ثُمَّ / بَعْدَ ذٰلِكَ / أَخِيرًا.', 'Avoid repetition with هٰذَا المَجَالُ / هٰذِهِ المِهْنَةُ.', 'Acknowledge a difficulty with a concession and defend your choice.'],
  flexGroups: [0, 1],
  doNow: {
    questions: [
      q('What does مَقَالٌ mean?', ['an article', 'an email', 'a step'], 'Prepared at home (D3-L08).'),
      q('What does خُطْوَةٌ mean?', ['a step', 'a plan', 'a goal'], 'Prepared at home (D3-L08).'),
      q('Which word introduces the purpose of a step?', ['لِكَيْ', 'لٰكِنَّ', 'بَيْنَمَا'], 'D3-L04.'),
      q('Complete: إِذَا ___ ، فَسَأَدْرُسُ الهَنْدَسَةَ.', ['نَجَحْتُ', 'سَأَنْجَحُ', 'نَاجِحٌ'], 'D3-L05: idhā + past.'),
      q('Which gives evidence for a strength?', ['وَالدَّلِيلُ عَلَى ذٰلِكَ أَنَّنِي قُدْتُ مَشْرُوعًا.', 'أَنَا جَيِّدَةٌ.', 'أُحِبُّ العُلُومَ.'], 'D3-L06.'),
    ],
    keyIdea: { text: 'Four paragraphs, four jobs: ambition · evidence · route · challenge.', ar: 'أَطْمَحُ إِلَى … · وَالدَّلِيلُ عَلَى ذٰلِكَ … · أَوَّلًا … ثُمَّ … · عَلَى الرَّغْمِ مِنْ أَنَّ …' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of D3-L08. Questions 3–5 retrieve D3-L04 (purpose), D3-L05 (condition) and D3-L06 (evidence) — the building blocks of today’s text.',
  },
  routes: {
    core: ['I can cover all four points.', 'I can write 60–80 accurate words.'],
    develop: ['I can write four focused paragraphs.', 'I can sequence my route and avoid repetition.'],
    stretch: ['I can add a concession (although … still …).', 'I can improve my draft with a self-audit.'],
  },
  bridge: [
    { ar: 'مَقَالٌ', urdu: 'مقالہ', tr: 'maqāla', en: 'article, essay' },
    { ar: 'فِقْرَةٌ', urdu: 'فقرہ', tr: 'fiqra', en: 'Urdu: sentence · Arabic: paragraph' },
    { ar: 'خُلَاصَةٌ', urdu: 'خلاصہ', tr: 'khulāsa', en: 'summary, conclusion' },
    { ar: 'مُسْتَعِدٌّ', urdu: 'مستعد', tr: 'mustaʿid', en: 'ready, prepared' },
    { ar: 'صُعُوبَةٌ', urdu: 'صعوبت / مشکل', tr: 'mushkil', en: 'difficulty' },
  ],
  bridgeNotes: 'URDU BRIDGE: مقالہ، خلاصہ، مستعد are shared. CAREFUL: Urdu فقرہ usually means a sentence or phrase; Arabic فِقْرَةٌ is a paragraph. صعوبت is formal Urdu; everyday Urdu says مشکل (and Arabic مُشْكِلَةٌ = a problem).',
  core: ['أَطْمَحُ إِلَى أَنْ', 'سَأَدْرُسُ', 'أَنْوِي أَنْ', 'بَعْدَ التَّخَرُّجِ', 'لِكَيْ', 'إِذَا نَجَحْتُ', 'لِأَنَّ', 'لِذٰلِكَ', 'عَلَى الرَّغْمِ مِنْ أَنَّ', 'عَلَى سَبِيلِ المِثَالِ', 'إِضَافَةً إِلَى ذٰلِكَ', 'نَتِيجَةً لِذٰلِكَ'],
  vocabNotes: {
    0: 'Career plans (FLEX): review from D3-L04 — paragraph 1 (ambition) and paragraph 3 (route).',
    1: 'Skills (FLEX): review from D3-L03 / L06 — paragraph 2 needs one skill AND its evidence.',
    2: 'Cohesion: the connectors that hold the text together. Each one has a job: reason (لِأَنَّ), result (لِذٰلِكَ، نَتِيجَةً لِذٰلِكَ), example (عَلَى سَبِيلِ المِثَالِ), adding (إِضَافَةً إِلَى ذٰلِكَ), concession (عَلَى الرَّغْمِ مِنْ أَنَّ).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · four paragraphs, four jobs (website rule 1 + Huda’s plan)', title: 'One main point per paragraph', ar: 'فِكْرَةٌ رَئِيسِيَّةٌ لِكُلِّ فِقْرَةٍ',
      cols: [{ label: 'Paragraph', w: 2.8 }, { label: 'Model sentence', w: 7.0, size: 21 }, { label: 'D3 lesson', w: 2.53 }],
      rows: [
        { core: true, cells: ['1 · ambition + reason', P('{w|أَطْمَحُ إِلَى أَنْ} أُصْبِحَ مُهَنْدِسَةَ بِيئَةٍ {k|لِأَنَّنِي} أُرِيدُ أَنْ أُسَاهِمَ فِي حَلِّ مُشْكِلَاتِ التَّلَوُّثِ.', ''), 'L01 · L04'] },
        { core: true, cells: ['2 · skills + evidence', P('أَنَا جَيِّدَةٌ فِي العُلُومِ، {k|وَالدَّلِيلُ عَلَى ذٰلِكَ} أَنَّنِي قُدْتُ مَشْرُوعًا مَدْرَسِيًّا.', ''), 'L03 · L06'] },
        { core: true, cells: ['3 · route (sequenced)', P('{e|أَوَّلًا} سَأُكْمِلُ دِرَاسَتِي، {e|ثُمَّ} سَأَدْرُسُ الهَنْدَسَةَ، {e|بَعْدَ ذٰلِكَ} سَأَبْحَثُ عَنْ تَدْرِيبٍ عَمَلِيٍّ.', ''), 'L04 · L05'] },
        { cells: ['4 · challenge + concession', P('{k|عَلَى الرَّغْمِ مِنْ أَنَّ} الطَّرِيقَ طَوِيلٌ، {k|فَإِنَّنِي} مُسْتَعِدَّةٌ لِلْعَمَلِ بِجِدٍّ.', ''), 'L05 · today'] },
      ],
      ltr: true,
      foot: 'These four sentences come from the website model email (Samira’s friend). Keep the jobs, change the content.',
      notes: `GRAMMAR PART 1 — website rule “Paragraph focus” (فِكْرَةٌ رَئِيسِيَّةٌ + تَفْصِيلٌ + سَبَبٌ: each paragraph should develop one main point) and the website listening (Huda’s four-part plan: the career + reason · skills + example · study and training plan · a possible difficulty and how to overcome it).
Website example: أَطْمَحُ إِلَى العَمَلِ فِي الطِّبِّ. سَأَدْرُسُ العُلُومَ لِأَنَّهَا أَسَاسُ هٰذَا المَجَالِ.
Word target (website): 120–140 words (Develop / Stretch); Core 60–80.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · sequence, reference, concession (website rules 2–4)', title: 'Glue the text together', ar: 'التَّرَابُطُ',
      cards: [
        { chip: 'SEQUENCE · CORE', color: '1D5FBF', head: 'أَوَّلًا · ثُمَّ · بَعْدَ ذٰلِكَ · أَخِيرًا', big: 'أَوَّلًا سَأُكْمِلُ دِرَاسَتِي، ثُمَّ سَأَتَدَرَّبُ.', en: 'First I will finish my studies, then I will train.', clue: 'For steps of a plan only.' },
        { chip: 'REFERENCE · DEVELOP', color: '6B4C9A', head: 'هٰذَا المَجَالُ · هٰذِهِ المِهْنَةُ', big: 'أُحِبُّ الهَنْدَسَةَ. هٰذَا المَجَالُ يَجْمَعُ بَيْنَ العِلْمِ وَالإِبْدَاعِ.', en: 'I love engineering. This field combines science and creativity.', clue: 'Don’t repeat the noun.' },
        { chip: 'CONCESSION · STRETCH', color: 'B83227', head: 'عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …', big: 'عَلَى الرَّغْمِ مِنْ أَنَّ التَّدْرِيبَ طَوِيلٌ، فَإِنَّ المِهْنَةَ مُجْزِيَةٌ.', en: 'Although the training is long, the job is rewarding.', clue: 'Admit, then defend.' },
      ],
      error: { text: 'After fa-inna the noun takes -a.', pairs: [['فَإِنَّ المِهْنَةَ مُجْزِيَةٌ.', 'فَإِنَّ المِهْنَةُ مُجْزِيَةٌ.']] },
      notes: `GRAMMAR PART 2 — website rules “Controlled sequence” (use sequencing to organise plans, not to join unrelated ideas), “Reference without repetition” (هٰذَا المَجَالُ / هٰذِهِ المِهْنَةُ / فِيهِ) and “Concession” (acknowledge a difficulty before defending the choice). Website examples as shown.
The error pair is teacher-chosen (the website common error is generic). With “I”: فَإِنَّنِي (fa-innanī) — as in the model email.`,
    },
  ],
  rulesTitle: 'Paragraph architecture and cohesion',
  quick: [0, 1, 2, 4],
  rest: [3, 5, 6, 7],
  ido: {
    title: 'Watch me plan, draft and improve one paragraph',
    steps: [
      { head: 'Plan · notes', ar: 'مُهَنْدِسَةُ بِيئَةٍ · التَّلَوُّثُ', think: 'Notes, not sentences.' },
      { head: 'Draft', ar: 'أُرِيدُ أَنْ أُصْبِحَ مُهَنْدِسَةً. أُحِبُّ الهَنْدَسَةَ.', think: 'Simple, repetitive.' },
      { head: 'Improve · range', ar: '{w|أَطْمَحُ إِلَى أَنْ} أُصْبِحَ مُهَنْدِسَةَ بِيئَةٍ {k|لِأَنَّنِي} أُرِيدُ أَنْ أُسَاهِمَ فِي حَلِّ مُشْكِلَاتِ التَّلَوُّثِ.', think: 'Ambition + reason.' },
      { head: 'Improve · reference', ar: '{e|هٰذَا المَجَالُ} يَجْمَعُ بَيْنَ العِلْمِ وَالإِبْدَاعِ.', think: 'No repeated noun.' },
    ],
    legend: ['w', 'k', 'e'], legendLabels: { w: 'AMBITION', k: 'REASON', e: 'REFERENCE' },
    model: site.reading.text.replace('أَطْمَحُ إِلَى أَنْ', '{w|أَطْمَحُ إِلَى أَنْ}').replace('وَالدَّلِيلُ عَلَى ذٰلِكَ', '{k|وَالدَّلِيلُ عَلَى ذٰلِكَ}').replace('عَلَى الرَّغْمِ مِنْ أَنَّ', '{e|عَلَى الرَّغْمِ مِنْ أَنَّ}'),
    modelEn: 'Dear Samira, you asked me about my plans after school. I aspire to become an environmental engineer because I want to help solve pollution problems. I am good at science and teamwork; the proof is that I led a school project on recycling. After graduating I will study engineering, then I will look for a work placement. Although the road is long, I am ready to work hard.',
    notes: 'I DO (3 min) — the plan → draft → improve cycle on paragraph 1, then the website model email (reading text) in the copy box. Students label the four jobs in it. Note: the website model is ≈ 75 words — a strong Core / Develop model; Develop extends it to 120–140 with paragraph 4 and a reference expression.',
  },
  patterns: [
    { ar: 'أَطْمَحُ إِلَى العَمَلِ فِي الطِّبِّ.', en: 'I aspire to work in medicine.', tip: 'Paragraph 1: ambition.' },
    { ar: 'سَأَدْرُسُ العُلُومَ لِأَنَّهَا أَسَاسُ هٰذَا المَجَالِ.', en: 'I will study science because it is the basis of this field.', tip: 'Reason + reference.' },
    { ar: 'أَوَّلًا سَأُكْمِلُ دِرَاسَتِي، ثُمَّ سَأَتَدَرَّبُ.', en: 'First I will finish my studies, then I will train.', tip: 'Sequence the route.' },
    { ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ التَّدْرِيبَ طَوِيلٌ، فَإِنَّ المِهْنَةَ مُجْزِيَةٌ.', en: 'Although the training is long, the job is rewarding.', tip: 'Concession.' },
  ],
  sorterCats: ['Ambition', 'Skills + evidence', 'Route', 'Challenge'],
  sorterNotes: 'Then put the four paragraphs in order and read the text aloud as a class.',
  patch: {
    mission: null,
    sorter: {
      title: 'Which paragraph?', instructions: 'Each sentence belongs in one paragraph of the career article.',
      categories: ['Ambition', 'Skills + evidence', 'Route', 'Challenge'],
      items: [
        { label: 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ طَبِيبَةً.', answer: 0 }, { label: 'أُرِيدُ أَنْ أُسَاعِدَ النَّاسَ.', answer: 0 },
        { label: 'أَنَا صَبُورَةٌ وَمُنَظَّمَةٌ.', answer: 1 }, { label: 'وَالدَّلِيلُ عَلَى ذٰلِكَ أَنَّنِي …', answer: 1 },
        { label: 'أَوَّلًا سَأَدْرُسُ العُلُومَ.', answer: 2 }, { label: 'ثُمَّ سَأَلْتَحِقُ بِالجَامِعَةِ.', answer: 2 },
        { label: 'عَلَى الرَّغْمِ مِنْ أَنَّ الطَّرِيقَ طَوِيلٌ …', answer: 3 }, { label: 'فَإِنَّنِي مُسْتَعِدَّةٌ.', answer: 3 },
      ],
    },
    mistakes: [
      { wrong: 'أُحِبُّ الهَنْدَسَةَ. الهَنْدَسَةُ مُمْتِعَةٌ. الهَنْدَسَةُ مُهِمَّةٌ.', right: 'أُحِبُّ الهَنْدَسَةَ. هٰذَا المَجَالُ مُمْتِعٌ وَمُهِمٌّ.', why: 'Use a reference expression; avoid repetition.' },
      { wrong: 'أَوَّلًا أُحِبُّ القِرَاءَةَ، ثُمَّ الطَّقْسُ جَمِيلٌ.', right: 'أَوَّلًا سَأُكْمِلُ دِرَاسَتِي، ثُمَّ سَأَتَدَرَّبُ.', why: 'Sequencers organise steps, not random ideas.' },
      { wrong: 'عَلَى الرَّغْمِ مِنَ الطَّرِيقُ طَوِيلٌ، أَنَا مُسْتَعِدٌّ.', right: 'عَلَى الرَّغْمِ مِنْ أَنَّ الطَّرِيقَ طَوِيلٌ، فَإِنَّنِي مُسْتَعِدٌّ.', why: 'min anna + clause, then fa-inna.' },
    ],
    grammar: {
      common_error: 'Do not join unrelated ideas with أَوَّلًا / ثُمَّ, and do not repeat the same noun in every sentence — use هٰذَا المَجَالُ / هٰذِهِ المِهْنَةُ (teacher wording: the website common error for this lesson is generic).',
      quiz: [
        L('How many main points should one paragraph develop?', ['one', 'three', 'as many as possible'], 'Website rule: one main point.'),
        L('Which word starts the FIRST step of a plan?', ['أَوَّلًا', 'أَخِيرًا', 'لِذٰلِكَ'], 'awwalan = firstly.'),
        L('Replace the repeated noun: أُحِبُّ الطِّبَّ. ___ يُسَاعِدُ النَّاسَ.', ['هٰذَا المَجَالُ', 'هٰذِهِ المِهْنَةُ', 'هُمْ'], 'al-ṭibb = a field (m.).'),
        L('Complete: عَلَى الرَّغْمِ مِنْ أَنَّ التَّدْرِيبَ طَوِيلٌ، ___ المِهْنَةَ مُجْزِيَةٌ.', ['فَإِنَّ', 'لِأَنَّ', 'بَيْنَمَا'], 'Concession: … fa-inna …'),
        L('Which connector gives an example?', ['عَلَى سَبِيلِ المِثَالِ', 'نَتِيجَةً لِذٰلِكَ', 'لٰكِنَّ'], 'For example.'),
        L('Which connector gives a result?', ['نَتِيجَةً لِذٰلِكَ', 'لِأَنَّ', 'عَلَى الرَّغْمِ مِنْ أَنَّ'], 'As a result.'),
        L('What is the word target for Develop / Stretch?', ['120–140 words', '40–60 words', '300 words'], 'Website task.'),
        L('Which is the best review order?', ['meaning, organisation, grammar, spelling', 'spelling only', 'word count, then nothing'], 'Same routine as F6-L09.'),
      ],
    },
    final: [
      L('What goes in paragraph 2?', ['skills and evidence', 'the route', 'a difficulty'], 'Huda’s plan.'),
      L('Complete: ___ سَأُكْمِلُ دِرَاسَتِي، ثُمَّ سَأَتَدَرَّبُ.', ['أَوَّلًا', 'أَخِيرًا', 'لِذٰلِكَ'], 'First … then …'),
      L('Which avoids repetition?', ['هٰذِهِ المِهْنَةُ', 'المِهْنَةُ المِهْنَةُ', 'مِهْنَةٌ'], 'A reference expression.'),
      L('Which sentence is a concession?', ['عَلَى الرَّغْمِ مِنْ أَنَّ الطَّرِيقَ طَوِيلٌ، فَإِنَّنِي مُسْتَعِدٌّ.', 'الطَّرِيقُ طَوِيلٌ.', 'أَنَا مُسْتَعِدٌّ.'], 'Admit, then defend.'),
    ],
    listening: {
      questions: [
        L('What will Huda write?', ['an article about her future', 'an email to a company', 'a CV'], 'مَقَالٍ عَنْ مُسْتَقْبَلِهَا'),
        L('What is paragraph one about?', ['the job she prefers and why', 'her skills', 'a difficulty'], 'المِهْنَةَ الَّتِي تُفَضِّلُهَا … سَبَبَ اخْتِيَارِهَا'),
        L('What must go with her skills?', ['an example', 'a photo', 'a reference'], 'المَهَارَاتِ … مَعَ مِثَالٍ'),
        L('What is paragraph three about?', ['her study and training plan', 'her family', 'her salary'], 'خُطَّةَ الدِّرَاسَةِ وَالتَّدْرِيبِ'),
        L('What will the ending include?', ['a possible difficulty and how to overcome it', 'a thank-you', 'a list of jobs'], 'صُعُوبَةً مُحْتَمَلَةً وَكَيْفَ سَتَتَغَلَّبُ عَلَيْهَا'),
        L('How many parts does her plan have?', ['four', 'two', 'six'], 'first · then · third · end'),
      ],
    },
    reading: {
      questions: [
        L('What career does the writer want?', ['environmental engineer', 'doctor', 'teacher'], 'مُهَنْدِسَةَ بِيئَةٍ'),
        L('Why?', ['to help solve pollution problems', 'for a high salary', 'to travel'], 'أُسَاهِمَ فِي حَلِّ مُشْكِلَاتِ التَّلَوُّثِ'),
        L('Which two strengths are named?', ['science and teamwork', 'maths and design', 'languages and leadership'], 'جَيِّدَةٌ فِي العُلُومِ وَالعَمَلِ الجَمَاعِيِّ'),
        L('What evidence is given?', ['she led a school recycling project', 'she won a prize', 'she has a certificate'], 'قُدْتُ مَشْرُوعًا مَدْرَسِيًّا عَنْ إِعَادَةِ التَّدْوِيرِ'),
        L('What two future steps are planned?', ['study engineering, then a work placement', 'travel, then study', 'work, then university'], 'سَأَدْرُسُ الهَنْدَسَةَ، ثُمَّ سَأَبْحَثُ عَنْ تَدْرِيبٍ'),
        L('How does she admit a difficulty?', ['although the road is long, she is ready', 'she says it is easy', 'she does not mention one'], 'عَلَى الرَّغْمِ مِنْ أَنَّ الطَّرِيقَ طَوِيلٌ'),
      ],
    },
    speaking: {
      context: 'Oral rehearsal: my career plan in four parts',
      model: [
        ['A', 'مَا المِهْنَةُ الَّتِي تَطْمَحُ إِلَيْهَا؟ وَلِمَاذَا؟', 'Which career do you aspire to? Why?'],
        ['B', 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ طَبِيبًا لِأَنَّنِي أُرِيدُ أَنْ أُسَاعِدَ النَّاسَ.', 'I aspire to become a doctor because I want to help people.'],
        ['A', 'وَمَا الصُّعُوبَةُ؟', 'And the difficulty?'],
        ['B', 'عَلَى الرَّغْمِ مِنْ أَنَّ الدِّرَاسَةَ طَوِيلَةٌ، فَإِنَّنِي مُسْتَعِدٌّ.', 'Although the studies are long, I am ready.'],
      ],
    },
  },
  hints: ['Can you replace the repeated noun?', 'Do these ideas form steps?', 'What follows ʿalā al-raghmi min?'],
  coreTip: 'Listen twice and fill a four-box plan:\nambition · skills · route · challenge.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 6, then copy Huda’s four-part plan as your own plan.',
  gloss: [
    ['تُخَطِّطُ هُدَى لِكِتَابَةِ مَقَالٍ عَنْ مُسْتَقْبَلِهَا.', 'Huda is planning to write an article about her future.'],
    ['فِي الفِقْرَةِ الأُولَى سَتُعَرِّفُ المِهْنَةَ الَّتِي تُفَضِّلُهَا وَسَتَشْرَحُ سَبَبَ اخْتِيَارِهَا.', 'In the first paragraph she will introduce the job she prefers and explain why she chose it.'],
    ['ثُمَّ سَتَذْكُرُ المَهَارَاتِ الَّتِي تَمْلِكُهَا مَعَ مِثَالٍ.', 'Then she will mention the skills she has, with an example.'],
    ['فِي الفِقْرَةِ الثَّالِثَةِ سَتُوَضِّحُ خُطَّةَ الدِّرَاسَةِ وَالتَّدْرِيبِ.', 'In the third paragraph she will explain her study and training plan.'],
    ['وَفِي النِّهَايَةِ سَتَعْرِضُ صُعُوبَةً مُحْتَمَلَةً وَكَيْفَ سَتَتَغَلَّبُ عَلَيْهَا.', 'And at the end she will present a possible difficulty and how she will overcome it.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا المِهْنَةُ الَّتِي تَطْمَحُ إِلَيْهَا؟ وَلِمَاذَا؟' },
      { route: 'develop', ar: 'مَا مَهَارَاتُكَ؟ وَمَا الدَّلِيلُ؟' },
      { route: 'develop', ar: 'مَا خُطْوَاتُ خُطَّتِكَ؟' },
      { route: 'stretch', ar: 'مَا الصُّعُوبَةُ المُحْتَمَلَةُ؟ وَكَيْفَ سَتَتَغَلَّبُ عَلَيْهَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ ______ لِأَنَّنِي ______ .' },
      { route: 'develop', ar: 'أَنَا ______ ، وَالدَّلِيلُ عَلَى ذٰلِكَ أَنَّنِي ______ .' },
      { route: 'develop', ar: 'أَوَّلًا ______ ، ثُمَّ ______ ، بَعْدَ ذٰلِكَ ______ .' },
      { route: 'stretch', ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّنِي ______ .' },
    ],
    modelEn: ['Which career do you aspire to? Why?', 'I aspire to become a doctor because I want to help people.'],
    notes: 'Oral rehearsal before drafting (teacher-written prompts following Huda’s four-part plan; the website prompts are generic). Pairs: 60 seconds each; the partner ticks the four parts heard. To a girl: مَا المِهْنَةُ الَّتِي تَطْمَحِينَ إِلَيْهَا؟',
  },
  write: {
    core: { amount: '60–80 words', how: 'One frame per paragraph: ambition + reason, one skill + evidence, two steps, one difficulty.' },
    develop: { amount: '120–140 words', how: 'Website task: four focused paragraphs, sequencers, one reference expression, checked with the routine.' },
    stretch: { amount: '140 words', how: 'Add a concession and an “if I succeed …” condition; improve your first draft with a self-audit.' },
  },
  frames: {
    core: [
      { en: 'I aspire to become … because …', ar: 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ ______ لِأَنَّنِي ______ .' },
      { en: 'I am good at …; the proof is that I …', ar: 'أَنَا جَيِّدٌ فِي ______ ، وَالدَّلِيلُ عَلَى ذٰلِكَ أَنَّنِي ______ .' },
      { en: 'First I will …, then I will …', ar: 'أَوَّلًا سَـ ______ ، ثُمَّ سَـ ______ .' },
      { en: 'Although the road is long, I am ready.', ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ الطَّرِيقَ طَوِيلٌ، فَإِنَّنِي مُسْتَعِدٌّ.' },
    ],
    develop: [
      { en: 'This field combines … and …', ar: 'هٰذَا المَجَالُ يَجْمَعُ بَيْنَ ______ وَ ______ .' },
      { en: 'After that I will look for … in order to …', ar: 'بَعْدَ ذٰلِكَ سَأَبْحَثُ عَنْ ______ لِكَيْ ______ .' },
      { en: 'Finally, if I succeed, I will …', ar: 'أَخِيرًا، إِذَا نَجَحْتُ، فَسَـ ______ .' },
      { en: 'One possible difficulty is that …', ar: 'مِنَ الصُّعُوبَاتِ المُحْتَمَلَةِ أَنَّ ______ .' },
    ],
    bank: ['أَطْمَحُ إِلَى أَنْ', 'لِأَنَّنِي', 'وَالدَّلِيلُ عَلَى ذٰلِكَ', 'أَوَّلًا', 'ثُمَّ', 'بَعْدَ ذٰلِكَ', 'أَخِيرًا', 'هٰذَا المَجَالُ', 'هٰذِهِ المِهْنَةُ', 'لِكَيْ', 'إِذَا نَجَحْتُ', 'عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ'],
  },
  stretch: [
    ['سَأَلْتِنِي عَنْ خُطَطِي', 'you asked me about my plans (to a girl)'],
    ['أُسَاهِمَ فِي حَلِّ مُشْكِلَاتِ …', 'contribute to solving … problems'],
    ['قُدْتُ مَشْرُوعًا مَدْرَسِيًّا', 'I led a school project'],
    ['مُسْتَعِدَّةٌ لِلْعَمَلِ بِجِدٍّ', 'ready to work hard (f.)'],
    ['سَأَتَغَلَّبُ عَلَى هٰذِهِ الصُّعُوبَةِ بِـ …', 'I will overcome this difficulty by …'],
  ],
  modelEn: 'Dear Samira, you asked me about my plans after school. I aspire to become an environmental engineer because I want to help solve pollution problems. I am good at science and teamwork; the proof is that I led a school project on recycling. After graduating I will study engineering, then I will look for a work placement. Although the road is long, I am ready to work hard.',
  find: ['ambition + reason', 'a skill with evidence', 'a sequenced route', 'a concession'],
  modelNotes: 'This is the WEBSITE model email (the reading text). Evidence: أَطْمَحُ إِلَى أَنْ أُصْبِحَ … لِأَنَّنِي … · وَالدَّلِيلُ عَلَى ذٰلِكَ أَنَّنِي قُدْتُ … · بَعْدَ التَّخَرُّجِ سَأَدْرُسُ … ثُمَّ سَأَبْحَثُ … · عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّنِي مُسْتَعِدَّةٌ. ≈ 75 words: Develop must add a reference expression and more detail to reach 120–140.',
  selfCheck: [
    { route: 'core', text: 'All four points are covered.' },
    { route: 'core', text: 'My future verbs have sa- / sawfa.' },
    { route: 'develop', text: 'One main point per paragraph.' },
    { route: 'develop', text: 'I used a reference expression (this field).' },
    { route: 'stretch', text: 'My concession uses ʿalā al-raghmi min anna … fa-inna.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['عَزِيزَتِي', 'dear (to a girl)'], ['سَأَلْتِنِي', 'you asked me'], ['مُهَنْدِسَةَ بِيئَةٍ', 'environmental engineer'], ['أُسَاهِمَ', 'contribute'], ['التَّلَوُّثِ', 'pollution'],
    ['قُدْتُ', 'I led'], ['مَشْرُوعًا مَدْرَسِيًّا', 'a school project'], ['إِعَادَةِ التَّدْوِيرِ', 'recycling'], ['بَعْدَ التَّخَرُّجِ', 'after graduating'], ['مُسْتَعِدَّةٌ', 'ready (f.)'],
  ],
  prep: {
    words: [['أَتَوَقَّعُ', 'I predict', 'يَتَوَقَّعُ he'], ['كَلِمَةٌ مِفْتَاحِيَّةٌ', 'a key word', 'pl. كَلِمَاتٌ'], ['مُشَتِّتٌ', 'a distractor', 'pl. مُشَتِّتَاتٌ'], ['أَسْتَبْعِدُ', 'I eliminate', 'يَسْتَبْعِدُ he'], ['أَتَحَقَّقُ مِنْ', 'I check, verify', 'يَتَحَقَّقُ he']],
    questionEn: 'Finish your final draft. Then: what is the hardest part of a listening test for you?',
    questionAr: 'أَصْعَبُ شَيْءٍ فِي الاِسْتِمَاعِ …',
    homework: {
      core: 'Final 60–80-word version from the frames; learn the five listening words.',
      develop: 'Website writing task: final 120–140-word article or email, checklist ticked.',
      stretch: 'Final 140-word version + a short self-audit of three improvements you made.',
    },
    wordsSource: 'The five words are the listening-strategy words for D3-L10 (as in D1-L10 and F6-L10); the website D3-L10 vocabulary is review.',
  },
  remember: 'Remember: four paragraphs, four jobs — sequence your route — avoid repetition — admit, then defend.',
});

module.exports = { meta, slides };
