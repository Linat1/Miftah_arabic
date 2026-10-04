'use strict';
/* GM-V-07 · Imperatives and Negative Commands — website: Mastery & Revision › Grammar › Verbs › Lesson 7 (derive the imperative from the
 * second-person jussive: remove ta-, add a helping vowel u- or i-; endings for one male, one female, two, a group, a female group;
 * prohibition = lā + jussive (the five verbs drop their nūn); tone and politeness; clinic). Website model corrected: “iftaḥ al-milaffa”
 * needs a linking kasra — اِفْتَحِ الْمِلَفَّ. Quizzes are the website’s (Entry, Build, Audience, Prohibition, Functional, Mastery) plus
 * the website game; one item with an “only” option is skipped. Sorter, I-do, frames, reading and model are teacher-made. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__07-verbs__grammar-mastery-07-imperative-prohibition';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-V-07', fileTitle: 'Imperatives', title: 'Imperatives and Negative Commands', arabic: 'فِعْلُ الْأَمْرِ وَالنَّهْيُ',
  focus: 'A command comes from the present “you” form: drop ta-, add a helping vowel (u- or i-), then choose the ending for your audience. “Don’t!” = lā + the you-form with sukūn — and the five verbs drop their nūn.',
  icon: 'FaBullhorn',
});

const slides = G.gmLesson({
  code: 'GM-V-07', site: KEY,
  support: `• Core: commands to one male and one female (اُكْتُبْ · اُكْتُبِي · اِجْلِسْ · اِجْلِسِي) and the prohibition لَا تَكْتُبْ. Develop: group, dual and feminine-group commands (اُكْتُبُوا · اُكْتُبَا · اُكْتُبْنَ) and لَا تَكْتُبِي · لَا تَكْتُبُوا. Stretch: deriving the command from the jussive; polite and formal alternatives (مِنْ فَضْلِكَ · يُرْجَى …).
• Website advice: learn each command WITH its present pair (يَكْتُبُ · اُكْتُبْ / يَجْلِسُ · اِجْلِسْ) — the helping vowel is not always the same.
• Classroom routine: the teacher’s own instructions become the examples (اِفْتَحُوا الْكِتَابَ · لَا تَتَكَلَّمُوا).`,
  teach: 'Derivation; audience endings; lā + jussive; tone.',
  wedo: 'Command the audience; sort command / prohibition / future; repair.',
  next: { nextCode: 'GM-V-08', nextTitle: 'Negating Past and Present', nextAr: 'نَفْيُ الْمَاضِي وَالْمُضَارِعِ' },
  doNow: {
    pick: [0, 1, 2, 3, 4],
    fb: { 0: 'The masculine singular command is uktub.', 1: 'The feminine singular command adds -ī.', 2: 'The group command adds -ū (with a silent alif).', 3: 'Prohibition = lā + jussive (sukūn).', 4: 'The nūn drops after prohibitive lā.' },
    keyIdea: { text: 'Command = you-form without ta- + a helping vowel. Don’t = lā + you-form with sukūn (five verbs drop the nūn).', ar: '{k|اُكْتُبْ} · {k|اُكْتُبِي} ‖ {e|لَا تَكْتُبْ} · {e|لَا تَكْتُبِي}' },
    retrieves: 'The website Entry Check (questions 1–5) — the GM-V-06 prep words uktub, uktubī, uktubū and lā taktub.',
  },
  objectives: ['Build a command from the present you-form.', 'Choose the ending for one male, one female, two or a group.', 'Say “don’t” with lā and the jussive.', 'Give polite, clear instructions.'],
  routes: {
    core: ['I give commands to a boy and to a girl.', 'I say “don’t” to one person.'],
    develop: ['I give commands to a group and to two people.', 'I drop the nūn after lā.'],
    stretch: ['I explain how the command comes from the jussive.', 'I write a polite 12-step guide.'],
  },
  terms: {
    items: [
      { ar: 'فِعْلُ الْأَمْرِ', en: 'imperative (command)', note: 'اُكْتُبْ' },
      { ar: 'النَّهْيُ', en: 'prohibition (don’t!)', note: 'لَا تَكْتُبْ' },
      { ar: 'لَا النَّاهِيَةُ', en: 'prohibitive lā', note: 'لَا تَتَأَخَّرْ' },
      { ar: 'الْمَجْزُومُ', en: 'jussive (ends in sukūn)', note: 'تَكْتُبْ' },
      { ar: 'الْمُخَاطَبُ', en: 'the person addressed', note: 'أَنْتَ · أَنْتِ · أَنْتُمْ' },
      { ar: 'مِنْ فَضْلِكَ', en: 'please (to a male)', note: 'مِنْ فَضْلِكِ (f.)' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 1 · how the imperative is built (website table)', title: 'From “you write” to “Write!”', ar: 'كَيْفَ نَبْنِي الْأَمْرَ؟', ltr: true,
      cols: [{ label: 'Step', w: 3.4 }, { label: 'write', w: 3.0, size: 26 }, { label: 'study', w: 3.0, size: 26 }, { label: 'sit', w: 2.93, size: 26 }],
      rows: [
        { core: true, cells: ['1 · you (m.) present', 'تَكْتُبُ', 'تَدْرُسُ', 'تَجْلِسُ'] },
        { core: true, cells: ['2 · jussive (sukūn)', 'تَكْتُبْ', 'تَدْرُسْ', 'تَجْلِسْ'] },
        { cells: ['3 · remove ta-', 'كْتُبْ', 'دْرُسْ', 'جْلِسْ'] },
        { core: true, cells: ['4 · add a helping vowel', 'اُكْتُبْ', 'اُدْرُسْ', 'اِجْلِسْ'] },
      ],
      foot: 'Website: a word cannot begin with sukūn, so a helping alif is added — u- when the middle vowel is u (yaktubu), i- otherwise (yajlisu, yaftaḥu). Learn each pair.',
      notes: 'PART 1 (4 min) — website “How the imperative is built”. Step 3 is not a real word: it shows why the helping vowel is needed.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · imperative endings for each audience (website table)', title: 'Commands have an audience', ar: 'نِهَايَاتُ الْأَمْرِ', ltr: true,
      cols: [{ label: 'Speaking to', w: 3.0 }, { label: 'write', w: 3.1, size: 26 }, { label: 'go', w: 3.1, size: 26 }, { label: 'read', w: 3.13, size: 26 }],
      rows: [
        { core: true, cells: ['one male · anta', 'اُكْتُبْ', 'اِذْهَبْ', 'اِقْرَأْ'] },
        { core: true, cells: ['one female · anti', 'اُكْتُبِي', 'اِذْهَبِي', 'اِقْرَئِي'] },
        { cells: ['two people · antumā', 'اُكْتُبَا', 'اِذْهَبَا', 'اِقْرَآ'] },
        { core: true, cells: ['a group · antum', 'اُكْتُبُوا', 'اِذْهَبُوا', 'اِقْرَؤُوا'] },
        { cells: ['a female group · antunna', 'اُكْتُبْنَ', 'اِذْهَبْنَ', 'اِقْرَأْنَ'] },
      ],
      foot: 'Website: the same small ending family every time — nothing, -ī, -ā, -ū, -na. Irregular and very common: khudh (take!), kul (eat!), qul (say!).',
      notes: 'PART 2 (3 min) — website “Imperative endings for different addressees”. Point at a student, a pair, the class.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · negative commands and tone (website) · Develop / Stretch', title: 'Don’t! — and how to sound polite', ar: 'النَّهْيُ وَالْأُسْلُوبُ', ltr: true,
      cols: [{ label: 'Command', w: 2.8, size: 24 }, { label: 'Don’t!', w: 3.4, size: 24 }, { label: 'Meaning', w: 6.13 }],
      rows: [
        { core: true, cells: ['اُكْتُبْ', 'لَا تَكْتُبْ', 'do not write (one male) — sukūn'] },
        { core: true, cells: ['اُكْتُبِي', 'لَا تَكْتُبِي', 'do not write (one female) — nūn dropped'] },
        { cells: ['اُكْتُبَا', 'لَا تَكْتُبَا', 'do not write (two people)'] },
        { core: true, cells: ['اُكْتُبُوا', 'لَا تَكْتُبُوا', 'do not write (a group)'] },
        { cells: ['اُكْتُبْنَ', 'لَا تَكْتُبْنَ', 'do not write (a female group)'] },
        { cells: ['polite', 'مِنْ فَضْلِكِ، اِقْرَئِي النَّصَّ.', 'Please read the text. (to a girl)'] },
        { cells: ['formal sign', 'يُرْجَى إِغْلَاقُ الْهَاتِفِ.', 'Please switch off your phone.'] },
      ],
      foot: 'Website: a positive command uses the imperative; a negative command uses lā + the jussive you-form. Lan is NOT a command (GM-V-06).',
      notes: 'PART 3 (3 min) — website “Negative commands” and “Commands in real contexts”. Tone: add please, a greeting or a reason.',
    },
  ],
  quick: [
    W(/Build the Imperative/, 0, { prompt: 'Imperative of yaftaḥu (open)?', feedback: 'Common command: iftaḥ.' }),
    W(/Build the Imperative/, 2, { prompt: 'Imperative of yakhruju (go out)?', feedback: 'Middle vowel u → helping vowel u: ukhruj.' }),
    W(/Command Audience/, 0, { prompt: '“Go!” to one female', feedback: 'Feminine singular command: -ī.' }),
    W(/Command Audience/, 2, { prompt: '“Write!” to a female group', feedback: 'Feminine plural ending -na.' }),
  ],
  quickNote: 'website Build the Imperative and Command Audience checks.',
  ido: {
    title: 'Watch me give instructions for a computer task',
    steps: [
      { head: 'You open', ar: 'تَفْتَحُ', think: 'yaftaḥu → you form.' },
      { head: 'Command', ar: 'اِفْتَحْ', think: 'Drop ta-, add i-.' },
      { head: 'You forget', ar: 'تَنْسَى', think: 'Final weak verb.' },
      { head: 'Don’t!', ar: 'لَا تَنْسَ', think: 'Jussive: the alif drops.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'COMMAND', e: 'PROHIBITION' },
    model: 'أَوَّلًا، {k|اِفْتَحِ} الْمِلَفَّ. بَعْدَ ذَلِكَ {k|اُكْتُبْ} عُنْوَانَكَ. {e|لَا تَنْسَ} أَنْ تَحْفَظَ الْعَمَلَ، وَ{e|لَا تُغْلِقِ} الْمُتَصَفِّحَ قَبْلَ الْحِفْظِ.',
    modelEn: 'First, open the file. After that, write your title. Don’t forget to save the work, and don’t close the browser before saving.',
    notes: 'Website model (corrected: iftaḥi l-milaffa — a sukūn before al- becomes kasra, as in lā tughliqi). Stretch: lā tansa — the final alif drops in the jussive.',
  },
  models: [
    { ar: 'مِنْ فَضْلِكِ، اِفْتَحِي النَّافِذَةَ.', en: 'Please open the window. (to a girl)', tip: 'Polite + -ī.' },
    { ar: 'اِذْهَبْ مُسْتَقِيمًا، ثُمَّ انْعَطِفْ يَمِينًا.', en: 'Go straight, then turn right.', tip: 'Directions.' },
    { ar: 'لَا تَعْبُرُوا الطَّرِيقَ هُنَا.', en: 'Don’t cross the road here. (to a group)', tip: 'Safety rule.' },
    { ar: 'خُذْ كِتَابَكَ وَاجْلِسْ.', en: 'Take your book and sit down.', tip: 'Irregular khudh.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · command the audience (website game) · say it aloud', title: 'Who are you talking to?', ar: 'مَنِ الْمُخَاطَبُ؟', ltr: true, stage: 'wedo',
      cols: [{ label: 'Instruction', w: 3.6 }, { label: 'To whom?', w: 2.8 }, { label: 'Arabic', w: 3.4, size: 26 }, { label: 'Clue', w: 2.53 }],
      rows: [
        { core: true, cells: ['Write!', 'one female', 'اُكْتُبِي', '-ī'] },
        { core: true, cells: ['Read!', 'a group', 'اِقْرَؤُوا', '-ū'] },
        { core: true, cells: ['Don’t write!', 'one male', 'لَا تَكْتُبْ', 'sukūn'] },
        { cells: ['Don’t write!', 'one female', 'لَا تَكْتُبِي', 'nūn drops'] },
        { cells: ['Don’t leave!', 'a group', 'لَا تَخْرُجُوا', 'nūn drops'] },
        { cells: ['Go!', 'two people', 'اِذْهَبَا', '-ā'] },
      ],
      foot: 'Website game: match purpose, addressee and form. Take! = khudh (irregular).',
      notes: 'WE DO (3 min) — website game items. Cover column 3; students point to who they are talking to.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · command, don’t, or future?', title: 'Command, prohibition or future negation?', ar: 'أَمْرٌ أَمْ نَهْيٌ أَمْ نَفْيٌ؟',
      categories: ['Command', 'Don’t! (lā)', 'Will not (lan)'],
      items: [['اِجْلِسْ', 0], ['اُكْتُبُوا', 0], ['اِقْرَئِي', 0], ['لَا تَتَأَخَّرْ', 1], ['لَا تَخْرُجُوا', 1], ['لَا تَنْسَيْ', 1], ['لَنْ تَكْتُبَ', 2], ['لَنْ يَخْرُجُوا', 2]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type 1, 2 or 3. Website check: “Which is future negation, not prohibition?” — lan.',
    },
  ],
  mistakes: [
    { wrong: 'ذَهَبْ!', right: 'اِذْهَبْ!', why: 'The command comes from the present, not the past (website clinic).' },
    { wrong: 'لَا تَكْتُبُ عَلَى الْجِدَارِ', right: 'لَا تَكْتُبْ عَلَى الْجِدَارِ', why: 'Prohibitive lā needs the jussive — sukūn (website clinic).' },
    { wrong: 'لَنْ تَذْهَبْ!', right: 'لَا تَذْهَبْ!', why: 'Lan is future negation; lā gives a negative command (website clinic).' },
  ],
  hints: ['Past or present base?', 'Damma or sukūn after lā?', 'Lan or lā for “don’t”?'],
  practice: [
    W(/Prohibition Check/, 1, { prompt: '“Don’t be late!” to one female', feedback: 'The nūn drops.' }),
    W(/Prohibition Check/, 2, { prompt: '“Don’t go out!” to a group', feedback: 'Jussive five-verb form: no nūn.' }),
    W(/Functional Command/, 0, { prompt: 'Best polite request to one female', feedback: 'Feminine form and politeness.' }),
    W(/Functional Command/, 3, { prompt: 'Best formal notice', feedback: 'An impersonal formal request: yurjā.' }),
  ],
  practiceLabel: 'website Prohibition and Functional Command checks',
  read: {
    title: 'Library rules', label: 'website reading workshop (teacher-written notice)',
    text: 'قَوَاعِدُ الْمَكْتَبَةِ: أَهْلًا وَسَهْلًا! مِنْ فَضْلِكُمْ، اُدْخُلُوا بِهُدُوءٍ وَاجْلِسُوا فِي أَمَاكِنِكُمْ. لَا تَأْكُلُوا وَلَا تَشْرَبُوا هُنَا. يُرْجَى إِغْلَاقُ الْهَوَاتِفِ. إِذَا أَخَذْتَ كِتَابًا فَاكْتُبِ اسْمَكَ فِي السِّجِلِّ. يَا مَرْيَمُ، أَرْجِعِي الْكُتُبَ إِلَى الرَّفِّ، وَلَا تَنْسَيْ بِطَاقَتَكِ!',
    glossary: [['بِهُدُوءٍ', 'quietly'], ['أَمَاكِنِكُمْ', 'your places'], ['السِّجِلِّ', 'the register'], ['الرَّفِّ', 'the shelf'], ['بِطَاقَتَكِ', 'your card']],
    task: 'Website: classify each instruction as positive command, prohibition or impersonal formal request.',
    questions: [
      q('Which sentence is an impersonal formal request?', ['يُرْجَى إِغْلَاقُ الْهَوَاتِفِ.', 'اِجْلِسُوا فِي أَمَاكِنِكُمْ.', 'لَا تَأْكُلُوا.'], 'Yurjā — no direct addressee.'),
      q('What are visitors not allowed to do?', ['eat and drink', 'sit down', 'take books'], 'Lā taʾkulū wa-lā tashrabū.'),
      q('Who is Maryam told to do something?', ['return the books', 'close her phone', 'write her name'], 'Arjiʿī l-kutub — feminine command.'),
      q('Why does lā tansay end without a nūn?', ['the jussive after lā drops it', 'it is past tense', 'it is a mistake'], 'Tansayna → lā tansay.'),
    ],
    qNote: 'Teacher-written notice for the website reading workshop; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: directions and instructions', source: 'website speaking workshop',
    prompts: [
      { route: 'core', ar: 'أَعْطِ صَدِيقَكَ ثَلَاثَةَ أَوَامِرَ فِي الصَّفِّ.' },
      { route: 'develop', ar: 'كَيْفَ أَذْهَبُ إِلَى الْمَكْتَبَةِ مِنْ فَضْلِكَ؟' },
      { route: 'stretch', ar: 'اِشْرَحْ لِمَجْمُوعَةٍ كَيْفَ يَطْبُخُونَ طَبَقًا بَسِيطًا.' },
    ],
    stems: [
      { route: 'core', ar: 'مِنْ فَضْلِكَ، ______ ، ثُمَّ ______ .' },
      { route: 'develop', ar: 'اِذْهَبْ ______ ، ثُمَّ ______ ، وَلَا ______ .' },
      { route: 'stretch', ar: 'أَوَّلًا ______ ، بَعْدَ ذَلِكَ ______ ، وَلَا ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مِنْ فَضْلِكِ، كَيْفَ أَذْهَبُ إِلَى الْمَسْجِدِ؟', en: 'Excuse me, how do I get to the mosque?' },
      { who: 'B', ar: 'اِذْهَبْ مُسْتَقِيمًا، ثُمَّ انْعَطِفْ يَسَارًا عِنْدَ الْمَدْرَسَةِ. لَا تَعْبُرِ الطَّرِيقَ هُنَاكَ، فَهُوَ خَطِيرٌ.', en: 'Go straight, then turn left at the school. Don’t cross the road there — it is dangerous.' },
    ],
    notes: 'Website: role play giving directions or explaining a process, with polite openings and clarification questions. Listening (website): follow a partner’s route; was each command to one person or a group?',
  },
  write: {
    siteTask: 'Create a 12-step Arabic guide for a school activity, recipe, journey or digital task. Include at least three negative instructions and vary the addressee in a short second section.',
    core: { amount: '6 steps', task: 'Classroom rules for one student.', how: 'Commands to one male, with please.' },
    develop: { amount: '8 steps', task: 'Rules for a group, with three “don’t” rules.', how: 'lā + -ū (no nūn).' },
    stretch: { amount: '12 steps', task: 'Website guide with a second section to a girl or a female group.', how: 'Accurate helping vowels; one formal yurjā.' },
  },
  frames: {
    core: [
      { en: 'Please open …', ar: 'مِنْ فَضْلِكَ، اِفْتَحِ ______ .' },
      { en: 'Write …', ar: 'اُكْتُبْ ______ .' },
      { en: 'Don’t forget …', ar: 'لَا تَنْسَ ______ .' },
      { en: 'Sit …', ar: 'اِجْلِسْ ______ .' },
    ],
    develop: [
      { en: 'First, (all of you) open …', ar: 'أَوَّلًا، اِفْتَحُوا ______ .' },
      { en: 'Don’t (all of you) talk …', ar: 'لَا تَتَكَلَّمُوا ______ .' },
      { en: '(To a girl) Read …', ar: 'اِقْرَئِي ______ .' },
      { en: 'Please do not …', ar: 'يُرْجَى عَدَمُ ______ .' },
    ],
    bank: ['اِفْتَحْ', 'اُكْتُبْ', 'اِجْلِسْ', 'اِقْرَئِي', 'اِذْهَبُوا', 'خُذْ', 'لَا تَنْسَ', 'لَا تَتَأَخَّرْ', 'لَا تَتَكَلَّمُوا', 'مِنْ فَضْلِكَ', 'أَوَّلًا', 'ثُمَّ', 'بَعْدَ ذَلِكَ'],
  },
  stretchTask: {
    task: 'Website integrated production task: a 12-step guide with three negative instructions and a second section for a different audience.',
    checklist: ['Accurate helping vowels (u- or i-).', 'At least one feminine command.', 'At least one group command.', 'Three prohibitions with lā.', 'Polite language where appropriate.'],
    phrases: [['أَوَّلًا', 'first'], ['بَعْدَ ذَلِكَ', 'after that'], ['أَخِيرًا', 'finally'], ['اِنْتَبِهْ', 'be careful'], ['يُرْجَى', 'it is requested'], ['لَا تَنْسَ أَنْ', 'don’t forget to']],
  },
  model: {
    text: 'كَيْفَ تُحَضِّرُ الشَّايَ؟ أَوَّلًا، اِغْسِلْ يَدَيْكَ. ثُمَّ امْلَأِ الْإِبْرِيقَ بِالْمَاءِ وَضَعْهُ عَلَى النَّارِ. اِنْتَبِهْ وَلَا تَلْمِسِ الْإِبْرِيقَ لِأَنَّهُ حَارٌّ. بَعْدَ ذَلِكَ ضَعِ الشَّايَ فِي الْكُوبِ، وَلَا تَنْسَ السُّكَّرَ. يَا أُخْتِي، اِغْسِلِي الْأَكْوَابَ مِنْ فَضْلِكِ، وَلَا تَتْرُكِيهَا فِي الْمَطْبَخِ. يَا أَصْدِقَائِي، اِجْلِسُوا وَاشْرَبُوا، وَلَا تَتَأَخَّرُوا!',
    en: 'How do you make tea? First, wash your hands. Then fill the kettle with water and put it on the heat. Be careful and don’t touch the kettle because it is hot. After that put the tea in the cup, and don’t forget the sugar. Sister, please wash the cups, and don’t leave them in the kitchen. My friends, sit and drink, and don’t be late!',
    find: ['command (one)', 'command (group)', 'feminine command', 'lā + jussive'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'My commands start with a helping vowel (u- or i-).' },
    { route: 'core', text: 'I added -ī for a girl.' },
    { route: 'develop', text: 'After lā my verb has sukūn or no nūn.' },
    { route: 'develop', text: 'I used lā, not lan, for “don’t”.' },
    { route: 'stretch', text: 'I used polite or formal language.' },
  ],
  exit: [
    W(/Imperative Mastery/, 2, { prompt: '“Write!” to two people', feedback: 'Dual: -ā.' }),
    W(/Imperative Mastery/, 7, { prompt: '“Don’t write!” to a group', feedback: 'Prohibition: lā + jussive, no nūn.' }),
    W(/Imperative Mastery/, 8, { prompt: '“Take!” to one male', feedback: 'Irregular command: khudh.' }),
  ],
  mastery: false,
  prep: {
    words: [['مَا', 'did not (+ past)', 'مَا ذَهَبْتُ'], ['لَمْ', 'did not (+ jussive)', 'لَمْ أَذْهَبْ'], ['لَا', 'do not (+ present)', 'لَا أَذْهَبُ'], ['أَمْسِ', 'yesterday', '—'], ['أَبَدًا', 'never / at all', '—']],
    questionEn: 'You know lā taktub (don’t write!). How do you think you say “I did not write”?',
    questionAr: 'كَتَبْتُ · ______',
    homework: {
      core: 'Write five classroom commands to a boy and five to a girl.',
      develop: 'Turn eight commands into prohibitions (lā + jussive).',
      stretch: 'Website task: a 12-step guide with three prohibitions.',
    },
    wordsSource: 'The five words prepare GM-V-08 (website Verbs lesson 8: negating past and present).',
  },
  remember: 'Remember: command = you-form − ta- + helping vowel · endings: —, -ī, -ā, -ū, -na · don’t = lā + jussive (sukūn, no nūn) · lan is not a command.',
});

module.exports = { meta, slides };
