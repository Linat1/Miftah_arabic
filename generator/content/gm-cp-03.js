'use strict';
/* GM-CP-03 · Prepositions with Pronouns and Verb Collocations — website: Mastery & Revision › Grammar › Conjunctions and Prepositions ›
 * Lesson 3 (preposition + attached pronoun = one word: fīhi, ilayhā, ʿalayhim, ʿanhu, minhum, maʿahā, lahu, bihā — ilā / ʿalā become
 * ilay- / ʿalay-; replace a repeated noun — the pronoun agrees with the Arabic noun; twelve verb + preposition collocations; direct
 * object or preposition: zāra, saʾala, sāʿada, intaẓara take a direct object; clinic). Website vowelling corrected: al-mutḥaf →
 * al-matḥaf (museum). Quizzes are the website’s (Entry, Pronoun Form, Reference, Collocation, Final Mastery) plus the website game; one
 * Entry option labelled “only” is skipped. Sorter, I-do, frames, reading and model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__08-conjunctions-prepositions__grammar-mastery-03-prepositions-pronouns-collocations';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-CP-03', fileTitle: 'Prepositions_Pronouns_Collocations', title: 'Prepositions with Pronouns and Verb Collocations', arabic: 'حُرُوفُ الْجَرِّ مَعَ الضَّمَائِرِ وَالْمُتَلَازِمَاتِ',
  focus: 'Preposition + pronoun = one word: ilā + hā → ilayhā (to her / it). Many verbs come with their own preposition — baḥatha ʿan (look for), iʿtamada ʿalā (rely on) — and some take none: zurtu ṣadīqī.',
  icon: 'FaLink',
});

const slides = G.gmLesson({
  code: 'GM-CP-03', site: KEY,
  support: `• Core: the -hu / -hā / -hum family with فِي · مِنْ · عَنْ · مَعَ · لِـ · بِـ (فِيهِ · مِنْهَا · مَعَهُمْ · لَهُ). Develop: the stem change إِلَى → إِلَيْـ, عَلَى → عَلَيْـ and twelve verb + preposition pairs. Stretch: direct object vs preposition — زَارَ · سَأَلَ · سَاعَدَ · اِنْتَظَرَ take NO preposition.
• Website reference check: the pronoun agrees with the Arabic noun, not the English “it” — al-madrasa is feminine → ilayhā; non-human plurals → -hā.
• Recycles GM-PRO-02 / PRO-03 (attached pronouns) and GM-VF verb families (istamaʿa ilā, iʿtamada ʿalā).`,
  teach: 'Preposition + pronoun; replace the noun; collocations; direct object.',
  wedo: 'Replace the noun; sort with / without a preposition; repair.',
  next: { nextCode: 'GM-CP-04', nextTitle: 'Core Conjunctions and Logical Links', nextAr: 'حُرُوفُ الْعَطْفِ وَالرَّبْطِ' },
  doNow: {
    pick: [0, 1, 2, 3, 4],
    fb: { 0: 'The established form is fīhi.', 1: 'The pronoun attaches to the changed stem ilay-.', 2: 'The pair is baḥatha ʿan.', 3: 'The pair is istamaʿa ilā.', 4: 'Zāra takes the person or place directly.' },
    keyIdea: { text: 'One word: preposition + pronoun (ilā → ilay-, ʿalā → ʿalay-). Learn every verb WITH its preposition — or with none.', ar: '{k|إِلَيْهَا} · {k|عَلَيْهِ} ‖ {e|بَحَثَ عَنْ} · {e|زَارَ}' },
    retrieves: 'The website Entry Check (questions 1–5) — the GM-CP-02 prep words fīhi, ʿalayhi, minhu, ilayhi, maʿahu.',
  },
  objectives: ['Attach pronouns to prepositions as one word.', 'Replace a repeated noun with the right pronoun.', 'Learn verbs with their prepositions.', 'Know which verbs take a direct object.'],
  routes: {
    core: ['I say fīhi, minhā, maʿahum.', 'I replace a noun to avoid repeating it.'],
    develop: ['I write ilayhā and ʿalayhim correctly.', 'I use six verb + preposition pairs.'],
    stretch: ['I write zurtu ṣadīqī (no ilā).', 'I write 80–100 words with four pronoun forms.'],
  },
  terms: {
    items: [
      { ar: 'الضَّمِيرُ الْمُتَّصِلُ', en: 'attached pronoun', note: 'ـهُ · ـهَا · ـهُمْ' },
      { ar: 'إِلَيْـ · عَلَيْـ', en: 'changed stems', note: 'إِلَيْهِ · عَلَيْهَا' },
      { ar: 'الْمَرْجِعُ', en: 'the noun the pronoun refers to', note: 'الْمَدْرَسَةُ ← هَا' },
      { ar: 'الْمُتَلَازِمَاتُ', en: 'verb + preposition pairs', note: 'اِعْتَمَدَ عَلَى' },
      { ar: 'الْمَفْعُولُ بِهِ', en: 'direct object (no preposition)', note: 'زُرْتُ صَدِيقِي' },
      { ar: 'التَّكْرَارُ', en: 'repetition (to avoid)', note: 'ذَهَبْتُ إِلَيْهَا' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 1 · how pronouns attach (website table)', title: 'One word: preposition + pronoun', ar: 'حُرُوفُ الْجَرِّ مَعَ الضَّمَائِرِ', ltr: true,
      cols: [{ label: 'Base', w: 1.9, size: 24 }, { label: 'him / it (m.)', w: 2.5, size: 24 }, { label: 'her / it (f.)', w: 2.5, size: 24 }, { label: 'them', w: 2.5, size: 24 }, { label: 'Meaning', w: 2.93 }],
      rows: [
        { core: true, cells: ['فِي', 'فِيهِ', 'فِيهَا', 'فِيهِمْ', 'in'] },
        { core: true, cells: ['مِنْ', 'مِنْهُ', 'مِنْهَا', 'مِنْهُمْ', 'from'] },
        { core: true, cells: ['مَعَ', 'مَعَهُ', 'مَعَهَا', 'مَعَهُمْ', 'with (company)'] },
        { cells: ['إِلَى', 'إِلَيْهِ', 'إِلَيْهَا', 'إِلَيْهِمْ', 'to — stem ilay-'] },
        { cells: ['عَلَى', 'عَلَيْهِ', 'عَلَيْهَا', 'عَلَيْهِمْ', 'on — stem ʿalay-'] },
        { cells: ['عَنْ', 'عَنْهُ', 'عَنْهَا', 'عَنْهُمْ', 'about'] },
        { cells: ['لِـ · بِـ', 'لَهُ · بِهِ', 'لَهَا · بِهَا', 'لَهُمْ · بِهِمْ', 'for · with / by'] },
      ],
      foot: 'Website: ilā and ʿalā become ilay- and ʿalay- before a pronoun. Write ONE word — never ilā hā, and never invent ʿalāhu. After i / y, -hu becomes -hi (fīhi, ʿalayhi, bihi).',
      notes: 'PART 1 (4 min) — website “How pronouns attach”. Core: rows 1–3 only.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · replace the repeated noun (website)', title: 'Same preposition — new pronoun', ar: 'تَجَنَّبِ التَّكْرَارَ', ltr: true,
      cols: [{ label: 'First mention', w: 4.6, size: 22 }, { label: 'Second mention', w: 4.0, size: 22 }, { label: 'Why', w: 3.73 }],
      rows: [
        { core: true, cells: ['ذَهَبْتُ إِلَى الْمَكْتَبَةِ.', 'ذَهَبْتُ إِلَيْهَا أَمْسِ.', 'maktaba: feminine'] },
        { core: true, cells: ['تَحَدَّثْنَا عَنِ الرِّحْلَةِ.', 'تَحَدَّثْنَا عَنْهَا طَوِيلًا.', 'riḥla: feminine'] },
        { cells: ['الْكِتَابُ عَلَى الطَّاوِلَةِ.', 'هُوَ عَلَيْهَا.', 'ṭāwila: feminine'] },
        { cells: ['ذَهَبْتُ مَعَ أَصْدِقَائِي.', 'قَضَيْتُ الْيَوْمَ مَعَهُمْ.', 'human plural: -hum'] },
        { cells: ['بَحَثْتُ عَنِ الْكُتُبِ.', 'بَحَثْتُ عَنْهَا.', 'non-human plural: -hā'] },
      ],
      foot: 'Website reference check: the pronoun agrees with the noun it replaces, not with the English word “it”. Keep the same preposition.',
      notes: 'PART 2 (3 min) — website “Replace the repeated noun” (last row from the website Final Mastery).',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · verb collocations and direct objects (website tables) · Develop / Stretch', title: 'Learn the verb with its partner — or with none', ar: 'الْمُتَلَازِمَاتُ وَالْمَفْعُولُ بِهِ', ltr: true,
      cols: [{ label: 'Verb + preposition', w: 3.2, size: 24 }, { label: 'Meaning', w: 2.6 }, { label: 'Model (website)', w: 6.53, size: 22 }],
      rows: [
        { core: true, cells: ['بَحَثَ عَنْ', 'look for', 'أَبْحَثُ عَنْ عَمَلٍ.'] },
        { core: true, cells: ['فَكَّرَ فِي', 'think about', 'أُفَكِّرُ فِي الْمُسْتَقْبَلِ.'] },
        { cells: ['اِعْتَمَدَ عَلَى', 'rely on', 'نَعْتَمِدُ عَلَى التِّقْنِيَّةِ.'] },
        { cells: ['اِحْتَاجَ إِلَى', 'need', 'أَحْتَاجُ إِلَى وَقْتٍ.'] },
        { cells: ['تَحَدَّثَ مَعَ … عَنْ', 'talk with … about', 'تَحَدَّثْتُ مَعَ الْمُعَلِّمَةِ عَنِ الْبِيئَةِ.'] },
        { cells: ['زَارَ · سَاعَدَ', 'visit · help (no preposition!)', 'زُرْتُ صَدِيقِي وَسَاعَدْتُ أُخْتِي.'] },
      ],
      foot: 'Website translation trap: English syntax does not decide Arabic syntax. Zāra, saʾala, sāʿada and intaẓara take a direct object — no ilā, no li-.',
      notes: 'PART 3 (3 min) — website “Verb–preposition collocations” and “Direct object or preposition?”. Also: waṣala ilā, ʿāda min, shāraka fī, ihtamma bi-, istamaʿa ilā.',
    },
  ],
  quick: [
    W(/Pronoun Form/, 0, { prompt: 'Choose “on it / on him”.', feedback: 'ʿAlā becomes ʿalay- before the pronoun.' }),
    W(/Pronoun Form/, 1, { prompt: 'Choose “from them”.', feedback: 'min + hum = minhum.' }),
    W(/Reference Check/, 0, { prompt: 'Replace al-madrasa in “dhahabtu ilā l-madrasa”.', feedback: 'Madrasa is feminine; keep ilā.' }),
    W(/Collocation Check/, 0, { prompt: 'Complete: “I think ___ my plans.”', feedback: 'The pair is fakkara fī.' }),
  ],
  quickNote: 'website Pronoun Form, Reference and Collocation checks.',
  ido: {
    title: 'Watch me avoid repeating nouns',
    steps: [
      { head: 'Noun', ar: 'الْمُسَابَقَةِ', think: 'Feminine.' },
      { head: 'Verb pair', ar: 'شَارَكْتُ فِي', think: 'shāraka fī.' },
      { head: 'Pronoun', ar: 'فِيهَا', think: 'fī + hā.' },
      { head: 'Person', ar: 'إِلَيْهِ', think: 'istamaʿa ilā + hi.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'VERB + PREPOSITION', e: 'PREPOSITION + PRONOUN' },
    model: '{k|قَرَأْتُ عَنِ} الْمُسَابَقَةِ، ثُمَّ {k|شَارَكْتُ} {e|فِيهَا}. {k|تَحَدَّثْتُ مَعَ} مُعَلِّمِي عَنِ الْمُسْتَقْبَلِ، وَ{k|اسْتَمَعْتُ} {e|إِلَيْهِ} بِعِنَايَةٍ.',
    modelEn: 'I read about the competition, then I took part in it. I talked with my teacher about the future, and I listened to him carefully.',
    notes: 'Website skills-workshop model.',
  },
  models: [
    { ar: 'وَصَلْتُ إِلَى الْفُنْدُقِ.', en: 'I arrived at the hotel.', tip: 'waṣala ilā.' },
    { ar: 'عَادُوا مِنَ السَّفَرِ.', en: 'They came back from travelling.', tip: 'ʿāda min.' },
    { ar: 'نَهْتَمُّ بِالصِّحَّةِ.', en: 'We care about health.', tip: 'ihtamma bi-.' },
    { ar: 'اِنْتَظَرْتُ الْحَافِلَةَ.', en: 'I waited for the bus.', tip: 'Direct object.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · replace the noun (website reference check)', title: 'Keep the preposition, change the noun', ar: 'ضَعِ الضَّمِيرَ مَكَانَ الِاسْمِ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Sentence', w: 5.0, size: 22 }, { label: 'With pronoun', w: 3.8, size: 24 }, { label: 'Clue', w: 3.53 }],
      rows: [
        { core: true, cells: ['ذَهَبْتُ إِلَى الْحَدِيقَةِ.', 'ذَهَبْتُ إِلَيْهَا.', 'feminine'] },
        { core: true, cells: ['بَحَثْتُ عَنِ الْكِتَابِ.', 'بَحَثْتُ عَنْهُ.', 'masculine'] },
        { core: true, cells: ['ذَهَبْتُ مَعَ الصَّدِيقَاتِ.', 'ذَهَبْتُ مَعَهُنَّ.', 'female group: -hunna'] },
        { cells: ['اِهْتَمَمْتُ بِالْمَعْلُومَاتِ.', 'اِهْتَمَمْتُ بِهَا.', 'non-human plural'] },
        { cells: ['اِعْتَمَدْنَا عَلَى الْخُطَّةِ.', 'اِعْتَمَدْنَا عَلَيْهَا.', 'ʿalay- + hā'] },
        { cells: ['تَحَدَّثْتُ عَنِ الْأَوْلَادِ.', 'تَحَدَّثْتُ عَنْهُمْ.', 'human plural'] },
      ],
      foot: 'Website: first identify the preposition; then attach a pronoun matching the known noun.',
      notes: 'WE DO (3 min) — website Reference and Final Mastery items. Cover column 2.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · website translation trap · preposition or direct object?', title: 'Does the verb need a preposition?', ar: 'بِحَرْفِ جَرٍّ أَمْ بِدُونِهِ؟',
      categories: ['Needs a preposition', 'Direct object (no preposition)'],
      items: [['بَحَثَ عَنْ', 0], ['اِسْتَمَعَ إِلَى', 0], ['اِعْتَمَدَ عَلَى', 0], ['شَارَكَ فِي', 0], ['زَارَ', 1], ['سَاعَدَ', 1], ['سَأَلَ', 1], ['اِنْتَظَرَ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). English says “wait FOR”, “listen TO” — Arabic intaẓara has no preposition, istamaʿa needs ilā.',
    },
  ],
  mistakes: [
    { wrong: 'ذَهَبْتُ إِلَى هَا', right: 'ذَهَبْتُ إِلَيْهَا', why: 'Attach the pronoun and change the stem (website clinic).' },
    { wrong: 'أَبْحَثُ إِلَى عَمَلٍ', right: 'أَبْحَثُ عَنْ عَمَلٍ', why: 'The pair is baḥatha ʿan (website clinic).' },
    { wrong: 'زُرْتُ إِلَى الْمَتْحَفِ', right: 'زُرْتُ الْمَتْحَفَ', why: 'Zāra takes a direct object (website clinic).' },
  ],
  hints: ['One word or two?', 'Which partner for baḥatha?', 'Does zāra need ilā?'],
  practice: [
    W(/Pronoun Form/, 2, { prompt: 'Choose “for her”.', feedback: 'The established form is lahā.' }),
    W(/Reference Check/, 2, { prompt: 'Replace aṣ-ṣadīqāt in “dhahabtu maʿa ṣ-ṣadīqāt”.', feedback: 'A female human plural takes -hunna.' }),
    W(/Collocation Check/, 2, { prompt: 'Complete: “We rely ___ solar energy.”', feedback: 'The pair is iʿtamada ʿalā.' }),
    W(/Final Mastery/, 5, { prompt: 'Complete: “I talked ___ my friend ___ the problem.”', feedback: 'Person: maʿa; topic: ʿan.' }),
  ],
  practiceLabel: 'website Pronoun Form, Reference, Collocation and Final Mastery checks',
  read: {
    title: 'Our robotics club', label: 'website skills workshop (teacher-written account)',
    text: 'فِي مَدْرَسَتِنَا نَادٍ لِلرُّوبُوتَاتِ. سَمِعْتُ عَنْهُ مِنْ صَدِيقِي، فَشَارَكْتُ فِيهِ. نَحْتَاجُ إِلَى أَدَوَاتٍ كَثِيرَةٍ، وَنَعْتَمِدُ عَلَيْهَا فِي كُلِّ مَشْرُوعٍ. الْمُدَرِّبَةُ ذَكِيَّةٌ، وَنَسْتَمِعُ إِلَيْهَا بِاهْتِمَامٍ. أَمْسِ زُرْنَا مَعْرِضًا لِلتِّقْنِيَّةِ، وَتَحَدَّثْنَا مَعَ مُهَنْدِسِينَ عَنْ عَمَلِهِمْ. سَأَلْتُهُمْ أَسْئِلَةً كَثِيرَةً، وَأَجَابُوا عَنْهَا بِصَبْرٍ.',
    glossary: [['الرُّوبُوتَاتِ', 'robots'], ['أَدَوَاتٍ', 'tools'], ['الْمُدَرِّبَةُ', 'the coach (f.)'], ['مَعْرِضًا', 'an exhibition'], ['أَجَابُوا عَنْ', 'they answered']],
    task: 'Website: underline verb–preposition pairs once and circle attached pronoun forms. Check what each pronoun refers to.',
    questions: [
      q('What does ʿalayhā refer to?', ['the tools', 'the coach', 'the club'], 'Adawāt: non-human plural → -hā.'),
      q('Who do they listen to carefully?', ['the coach', 'the engineers', 'a friend'], 'Nastamiʿu ilayhā.'),
      q('Which verb takes a direct object here?', ['زُرْنَا', 'نَحْتَاجُ', 'تَحَدَّثْنَا'], 'Zurnā maʿriḍan.'),
      q('What did the engineers do?', ['answered the questions patiently', 'visited the club', 'sold tools'], 'Ajābū ʿanhā bi-ṣabr.'),
    ],
    qNote: 'Teacher-written account for the website skills workshop; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: talk about it — don’t repeat it', source: 'website skills workshop',
    prompts: [
      { route: 'core', ar: 'هَلْ تَذْهَبُ إِلَى الْمَكْتَبَةِ؟ مَتَى تَذْهَبُ إِلَيْهَا؟' },
      { route: 'develop', ar: 'بِمَاذَا تَهْتَمُّ؟ وَعَلَى مَنْ تَعْتَمِدُ؟' },
      { route: 'stretch', ar: 'تَحَدَّثْ عَنْ نَادٍ أَوْ مَشْرُوعٍ شَارَكْتَ فِيهِ.' },
    ],
    stems: [
      { route: 'core', ar: 'نَعَمْ، أَذْهَبُ إِلَيْهَا ______ .' },
      { route: 'develop', ar: 'أَهْتَمُّ ______ ، وَأَعْتَمِدُ عَلَى ______ .' },
      { route: 'stretch', ar: 'شَارَكْتُ فِي ______ ، وَتَحَدَّثْنَا عَنْ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'هَلْ تَتَحَدَّثِينَ مَعَ جَدَّتِكِ كَثِيرًا؟', en: 'Do you talk with your grandmother a lot? (to a girl)' },
      { who: 'B', ar: 'نَعَمْ، أَتَحَدَّثُ مَعَهَا كُلَّ يَوْمٍ، وَأَسْتَمِعُ إِلَيْهَا عِنْدَمَا تَحْكِي عَنْ طُفُولَتِهَا. أَزُورُهَا يَوْمَ الْجُمُعَةِ.', en: 'Yes, I talk with her every day, and I listen to her when she tells me about her childhood. I visit her on Fridays.' },
    ],
    notes: 'Website: avoid repetition by replacing a known noun with the correct attached pronoun.',
  },
  write: {
    siteTask: 'Write 80–100 Arabic words about a project, club, journey or school event. Refer back to people, places and things with attached pronouns instead of repeating every noun.',
    core: { amount: '5 sentences', task: 'A club: what it is, who is in it, what we do in it.', how: 'fīhi · maʿahum · lahu.' },
    develop: { amount: '7 sentences', task: 'Add five verb + preposition pairs.', how: 'baḥatha ʿan · iʿtamada ʿalā · fakkara fī.' },
    stretch: { amount: '80–100 words', task: 'Website account with four pronoun forms and a direct-object verb.', how: 'zurtu · sāʿadtu (no preposition).' },
  },
  frames: {
    core: [
      { en: 'I went to it (f.) on …', ar: 'ذَهَبْتُ إِلَيْهَا يَوْمَ ______ .' },
      { en: 'I spent … with them', ar: 'قَضَيْتُ ______ مَعَهُمْ.' },
      { en: 'I read about it (m.) in …', ar: 'قَرَأْتُ عَنْهُ فِي ______ .' },
      { en: 'This … is for her', ar: 'هَذِهِ ______ لَهَا.' },
    ],
    develop: [
      { en: 'I am looking for …', ar: 'أَبْحَثُ عَنْ ______ .' },
      { en: 'We rely on …', ar: 'نَعْتَمِدُ عَلَى ______ .' },
      { en: 'I need …', ar: 'أَحْتَاجُ إِلَى ______ .' },
      { en: 'I visited … (no preposition)', ar: 'زُرْتُ ______ .' },
    ],
    bank: ['فِيهِ', 'فِيهَا', 'إِلَيْهِ', 'إِلَيْهَا', 'عَلَيْهِمْ', 'مِنْهُ', 'عَنْهَا', 'مَعَهُمْ', 'لَهُ', 'بِهَا', 'بَحَثَ عَنْ', 'اِعْتَمَدَ عَلَى', 'زَارَ'],
  },
  stretchTask: {
    task: 'Website connected account (80–100 words): a project, club, journey or event without repeating nouns.',
    checklist: ['Five verb–preposition pairs.', 'Four preposition + pronoun forms (one word).', 'Pronouns that agree with the Arabic noun.', 'One direct-object verb without a preposition.', 'ilay- / ʿalay- stems correct.'],
    phrases: [['سَمِعْتُ عَنْهُ', 'I heard about it'], ['شَارَكْتُ فِيهِ', 'I took part in it'], ['تَحَدَّثْتُ مَعَهُ عَنْ', 'I talked with him about'], ['أَحْتَاجُ إِلَيْهِ', 'I need it'], ['أَعْتَمِدُ عَلَيْهَا', 'I rely on her / it'], ['زُرْتُهُ', 'I visited him / it']],
  },
  model: {
    text: 'فِي الصَّيْفِ الْمَاضِي سَمِعْتُ عَنْ مُخَيَّمٍ لِلْعُلُومِ، فَشَارَكْتُ فِيهِ مَعَ ابْنِ عَمِّي. وَصَلْنَا إِلَيْهِ بِالْقِطَارِ، وَكَانَ الْمُشْرِفُونَ لُطَفَاءَ؛ تَحَدَّثْنَا مَعَهُمْ عَنْ مَشَارِيعِنَا، وَاسْتَمَعْنَا إِلَيْهِمْ بِاهْتِمَامٍ. كُنَّا نَحْتَاجُ إِلَى أَدَوَاتٍ خَاصَّةٍ، فَبَحَثْنَا عَنْهَا فِي الْمُخْتَبَرِ. فِي الْيَوْمِ الْأَخِيرِ زُرْنَا مَتْحَفًا قَرِيبًا، وَسَأَلْتُ الْمُرْشِدَ أَسْئِلَةً كَثِيرَةً. أُفَكِّرُ فِي الْمُخَيَّمِ دَائِمًا، وَسَأَرْجِعُ إِلَيْهِ إِنْ شَاءَ اللَّهُ.',
    en: 'Last summer I heard about a science camp, so I took part in it with my cousin. We got there by train, and the supervisors were kind; we talked with them about our projects and listened to them carefully. We needed special tools, so we looked for them in the lab. On the last day we visited a nearby museum, and I asked the guide many questions. I think about the camp all the time, and I will go back to it, in shāʾ Allāh.',
    find: ['verb + preposition', 'preposition + pronoun', 'direct object', 'non-human plural -hā'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'My preposition + pronoun forms are one word.' },
    { route: 'core', text: 'My pronouns match the Arabic noun (masc. / fem.).' },
    { route: 'develop', text: 'I wrote ilayhā / ʿalayhi with the stem change.' },
    { route: 'develop', text: 'I used five verb + preposition pairs.' },
    { route: 'stretch', text: 'I used zāra / sāʿada without a preposition.' },
  ],
  exit: [
    W(/Final Mastery/, 0, { prompt: 'Choose “to them”.', feedback: 'ilā + hum = ilayhim.' }),
    W(/Final Mastery/, 6, { prompt: 'Which is the correct direct-object sentence?', feedback: 'Sāʿada takes a direct object.' }),
    W(/Final Mastery/, 8, { prompt: 'Replace al-kutub in “baḥathtu ʿani l-kutub”.', feedback: 'Non-human plural → feminine singular: ʿanhā.' }),
  ],
  mastery: false,
  prep: {
    words: [['وَ', 'and', '—'], ['ثُمَّ', 'then (after a gap)', '—'], ['فَـ', 'so / then (straight after)', '—'], ['أَوْ', 'or', '—'], ['لَكِنَّ', 'but', '—']],
    questionEn: 'Wa, fa- and thumma all join actions. Which one do you think shows a time gap?',
    questionAr: 'اِسْتَيْقَظْتُ ______ صَلَّيْتُ.',
    homework: {
      core: 'Write the -hu / -hā / -hum forms for six prepositions.',
      develop: 'Write six sentences, each with a different verb + preposition pair.',
      stretch: 'Website account (80–100 words) with four pronoun forms.',
    },
    wordsSource: 'The five words prepare GM-CP-04 (website: core conjunctions and logical links).',
  },
  remember: 'Remember: preposition + pronoun = one word (fīhi, ilayhā, ʿalayhim) · the pronoun agrees with the Arabic noun · learn verb + partner (baḥatha ʿan) · zāra, sāʿada, saʾala, intaẓara take no preposition.',
});

module.exports = { meta, slides };
