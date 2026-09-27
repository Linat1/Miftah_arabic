'use strict';
/*
 * F4-L10 · Listening and Speaking: School Conversations
 * Website: Pathways › Foundation › F4 › Lesson 10. The F4 retrieval bridge and the five-move conversation (open · ask ·
 * listen · repair · close), the role-play toolkit (16; 14), transactional questions (8 model exchanges; 14), repairing
 * communication (8 phrases; 12), two school conversations (listening), three scenario cards (new student · library ·
 * school office), the Role-Play Mission (14), two school exchanges (reading), the two-minute role-play simulator, the
 * /12 self-assessment, the dialogue or report and the 16-question checkpoint.
 */
const F = require('./f4-common');
const { q, bank, banks } = F;

const meta = F.meta({
  n: 10, fileTitle: 'Listening_and_Speaking_School_Conversations', chip: 'School Conversations',
  title: 'Listening and Speaking: School Conversations', arabic: 'الاِسْتِمَاعُ وَالتَّحَدُّثُ — مُحَادَثَاتٌ مَدْرَسِيَّةٌ',
  focus: 'Listen for purpose and detail, ask precise school questions, repair misunderstandings politely and complete three realistic five-prompt role plays.',
  icon: 'FaComments', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F4-L11', nextTitle: 'Speaking and Writing About School', nextAr: 'التَّحَدُّثُ وَالكِتَابَةُ عَنِ المَدْرَسَةِ' };
const rounds = banks.l10.gameRounds.map((r) => F.w({ ...r, q: r.s || r.prompt }));

const site = {
  speaking: {
    context: 'Two-minute school role-play',
    model: [
      ['A', 'السَّلَامُ عَلَيْكُمْ. هَلْ عِنْدَكُمْ كِتَابٌ فِي قَوَاعِدِ اللُّغَةِ العَرَبِيَّةِ؟', 'Hello. Do you have a book on Arabic grammar?'],
      ['B', 'نَعَمْ، عِنْدَنَا كِتَابَانِ عَلَى الرَّفِّ الثَّالِثِ.', 'Yes, we have two books on the third shelf.'],
    ],
  },
  writing: {
    prompt: 'Website writing task — Route A: reconstruct an 8–12-line dialogue (greeting and context, at least three questions and three answers, one clarification phrase, one polite closing). Route B: report what happened using the past-tense chunks provided on the website.',
    checklist: ['A greeting and the situation.', 'Three questions with the right question word.', 'One repair phrase (آسِفٌ / آسِفَةٌ، لَمْ أَفْهَمْ …).', 'A polite closing: شُكْرًا جَزِيلًا …'],
    model: 'مَرْيَمُ: صَبَاحُ الخَيْرِ يَا أُسْتَاذَةُ. أَنَا طَالِبَةٌ جَدِيدَةٌ، وَاسْمِي مَرْيَمُ. المُعَلِّمَةُ: أَهْلًا وَسَهْلًا يَا مَرْيَمُ. مَرْيَمُ: مَا المَوَادُّ الَّتِي نَدْرُسُهَا يَوْمَ الاِثْنَيْنِ؟ المُعَلِّمَةُ: نَدْرُسُ العَرَبِيَّةَ وَالرِّيَاضِيَّاتِ وَالعُلُومَ. مَرْيَمُ: آسِفَةٌ، هَلْ يُمْكِنُكِ أَنْ تُعِيدِي المَادَّةَ الأَخِيرَةَ؟ المُعَلِّمَةُ: العُلُومَ. وَتَنْتَهِي المَدْرَسَةُ فِي السَّاعَةِ الثَّالِثَةِ. مَرْيَمُ: شُكْرًا جَزِيلًا.',
  },
  differentiation: {
    core: 'Five prompts, one short sentence each, using the phrase bank.',
    develop: 'Two question words, a repair phrase and a polite close.',
    stretch: 'Respond to an unpredictable reply and keep the exchange going.',
  },
  mistakes: [
    { wrong: 'قَالَتْ مَرْيَمُ: آسِفٌ، لَمْ أَفْهَمْ.', right: 'قَالَتْ مَرْيَمُ: آسِفَةٌ، لَمْ أَفْهَمْ.', why: 'A female SPEAKER: āsifa.' },
    { wrong: 'يَا أُسْتَاذَةُ، هَلْ يُمْكِنُكَ أَنْ تُعِيدَ ذَلِكَ؟', right: 'يَا أُسْتَاذَةُ، هَلْ يُمْكِنُكِ أَنْ تُعِيدِي ذَلِكَ؟', why: 'A female LISTENER: yumkinuki … tu‘īdī.' },
    { wrong: 'مَتَى المَقْصَفُ؟', right: 'أَيْنَ المَقْصَفُ؟', why: 'A place needs ayna, not matā.' },
  ],
  listening: {
    title: 'Two school conversations',
    script: 'أَحْمَدُ: مَتَى عِنْدَنَا الرِّيَاضِيَّاتُ؟ لَيْلَى: عِنْدَنَا الرِّيَاضِيَّاتُ يَوْمَ الاِثْنَيْنِ فِي السَّاعَةِ التَّاسِعَةِ صَبَاحًا. أَحْمَدُ: وَمَتَى تَبْدَأُ الاِسْتِرَاحَةُ؟ لَيْلَى: تَبْدَأُ الاِسْتِرَاحَةُ فِي السَّاعَةِ الحَادِيَةَ عَشْرَةَ، ثُمَّ عِنْدَنَا العُلُومُ فِي المُخْتَبَرِ. — الطَّالِبَةُ: آسِفَةٌ يَا أُسْتَاذَةُ، مَا الوَاجِبُ؟ الأُسْتَاذَةُ: اُكْتُبِي خَمْسَ جُمَلٍ عَنْ مَدْرَسَتِكِ. الطَّالِبَةُ: هَلْ يُمْكِنُكِ أَنْ تُعِيدِي ذَلِكَ، مِنْ فَضْلِكِ؟ الأُسْتَاذَةُ: نَعَمْ. خَمْسُ جُمَلٍ عَنِ المَدْرَسَةِ، وَأَضِيفِي رَأْيًا وَسَبَبًا. الوَاجِبُ لِيَوْمِ الثُّلَاثَاءِ. الطَّالِبَةُ: شُكْرًا، فَهِمْتُ الآنَ.',
    questions: bank(10, 'listening', [2, 4, 6, 8, 9]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 10,
    source: 'Website sections used: the eight-question F4 retrieval bridge and the five-move conversation, the role-play and conversation toolkit (16) and the 14-question check, transactional questions (8 model exchanges, 14), repairing communication (8 phrases, 12), two school conversations (listening, 10), three scenario cards (A new student · B library · C school office), the Role-Play Mission (14), two school exchanges (reading, 12), the two-minute role-play simulator, the /12 self-assessment (response · clarity · pronunciation & fluency · interaction & repair), the dialogue or report and the 16-question checkpoint.',
    support: `• Website principle: short, accurate and relevant language is stronger than a long confused answer. A clarification phrase is evidence of ACTIVE listening, not weak speaking.
• Core: the five prompts of one scenario with the phrase bank. Develop: two question words + one repair + polite close. Stretch: respond to unpredictable replies (the teacher plays the role flexibly).
• Two gender systems at once: the SPEAKER (آسِفٌ / آسِفَةٌ) and the LISTENER (مِنْ فَضْلِكَ / مِنْ فَضْلِكِ, تُعِيدَ / تُعِيدِي).
• Scenario C (absence): students give an invented reason — nobody should share real medical or family details.
• Online: role plays in breakout pairs or teacher ↔ student; the website simulator runs a two-minute timer.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'The five-move conversation, precise questions, then repair phrases.', wedo: 'Two conversations, scenario cards, the role-play mission, two dialogues.', next: 'F4-L11' }),
  F.doNow({
    questions: [
      q('What does مُحَادَثَةٌ mean?', ['a conversation', 'an announcement', 'a timetable'], 'Prepared at home (F4-L09).'),
      q('What does تَمْثِيلُ دَوْرٍ mean?', ['a role play', 'a homework task', 'a school rule'], 'Prepared at home (F4-L09).'),
      ...bank(10, 'retrieval', [1, 2, 6]),
    ],
    keyIdea: { text: 'Five moves: open · ask · listen · repair · close. Short, accurate and relevant beats long and confused.', ar: 'آسِفَةٌ، لَمْ أَفْهَمْ. هَلْ يُمْكِنُكَ أَنْ تُعِيدَ السُّؤَالَ؟' },
    retrieves: 'Questions 1–2 test two of the five phrases prepared at home at the end of F4-L09. Questions 3–5 are the website “F4 retrieval bridge” (day, place question, polite closing).',
  }),
  F.objectivesSlide([
    'Understand two short school conversations after focused listening.',
    'Use question words to obtain days, times, places and school information.',
    'Ask for repetition or slower speech without abandoning the exchange.',
    'Complete three five-prompt school role plays.',
  ], {
    core: ['I can greet, ask one question and thank.', 'I can say “sorry, I didn’t understand”.'],
    develop: ['I can ask when, where and how many.', 'I can repair a misunderstanding politely.'],
    stretch: ['I can answer an unexpected reply.', 'I can keep a two-minute role play going.'],
  }, 2, 'Website “By the end, I can…” (left) and the lesson routes (right).'),
  F.keywordsSlide({
    text: 'Conversation toolkit, transactional questions and repair phrases. Core: please, sorry, repeat, slowly, thank you.',
    groups: [
      { head: 'GROUP 1', name: 'Role-play toolkit · 16' },
      { head: 'GROUP 2', name: 'School questions · 8' },
      { head: 'GROUP 3', name: 'Repair phrases · 8' },
    ],
    bridge: [
      { ar: 'مُحَادَثَةٌ', urdu: 'محادثہ', tr: 'muḥādatha', en: 'conversation' },
      { ar: 'وُضُوحٌ', urdu: 'وضاحت', tr: 'wuḍūḥ', en: 'clarity' },
      { ar: 'تَوْضِيحٌ', urdu: 'توضیح', tr: 'tawḍīḥ', en: 'clarification' },
      { ar: 'مُعَامَلَةٌ', urdu: 'معاملہ', tr: 'mu‘āmala', en: 'transaction' },
      { ar: 'تَلَفُّظ / نُطْقٌ', urdu: 'تلفظ', tr: 'nuṭq', en: 'pronunciation' },
    ],
    notes: 'URDU BRIDGE: محادثہ، وضاحت، توضیح، معاملہ are shared words; Urdu تلفظ (pronunciation) is also Arabic تَلَفُّظ — Arabic more often says نُطْقٌ.',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 3 · repair and politeness (website)', title: 'Sorry, repeat, slowly …', ar: 'إِصْلَاحُ التَّوَاصُلِ',
    items: [
      { n: 1, ar: 'آسِفٌ / آسِفَةٌ، لَمْ أَفْهَمْ.', en: 'Sorry, I didn’t understand. (m. / f. speaker)', tr: 'ā-sif / ā-si-fa, lam af-ham', core: true, tag: 'speaker' },
      { n: 2, ar: 'هَلْ يُمْكِنُكَ أَنْ تُعِيدَ ذَلِكَ؟', en: 'Could you repeat that? (to a male)', tr: 'hal yum-ki-nu-ka an tu-‘ī-da dhā-lik', core: true, tag: 'listener m.' },
      { n: 3, ar: 'هَلْ يُمْكِنُكِ أَنْ تُعِيدِي ذَلِكَ؟', en: 'Could you repeat that? (to a female)', tr: 'hal yum-ki-nu-ki an tu-‘ī-dī dhā-lik', tag: 'listener f.' },
      { n: 4, ar: 'تَكَلَّمْ / تَكَلَّمِي بِبُطْءٍ', en: 'Speak slowly (m. / f.)', tr: 'ta-kal-lam / ta-kal-la-mī bi-buṭ’', core: true, tag: 'listener' },
      { n: 5, ar: 'مِنْ فَضْلِكَ / مِنْ فَضْلِكِ', en: 'please (to a male / female)', tr: 'min faḍ-li-ka / faḍ-li-ki', core: true, tag: 'listener' },
      { n: 6, ar: 'شُكْرًا، فَهِمْتُ الآنَ.', en: 'Thank you, I understand now.', tr: 'shuk-ran, fa-him-tu l-ān', tag: 'close' },
    ],
    notes: 'REPAIR PHRASES (website section 4). Also: هَلْ تَعْنِي …؟ / هَلْ تَعْنِينَ …؟ (do you mean …?). Website: “Weak breakdown: لَا أَعْرِفُ — the exchange stops. Strong repair: آسِفَةٌ، لَمْ أَفْهَمْ. هَلْ يُمْكِنُكَ أَنْ تُعِيدَ السُّؤَالَ؟ — the speaker identifies the problem and requests a solution.” Toolkit (website): مُحَادَثَةٌ، تَمْثِيلُ دَوْرٍ، سِينارْيُو، بِطَاقَةُ الدَّوْرِ، تَبَادُلٌ، مُعَامَلَةٌ، اِسْتِجَابَةٌ، تَوْضِيحٌ، نُطْقٌ، طَلَاقَةٌ، وُضُوحٌ.',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · ask for the exact information (website)', title: 'Question → answer', ar: 'اِسْأَلْ عَنِ المَعْلُومَةِ الدَّقِيقَةِ',
    cols: [{ label: 'Need', w: 1.8 }, { label: 'Question', w: 5.2, size: 22 }, { label: 'Answer', w: 5.33, size: 22 }],
    rows: [
      { core: true, cells: ['Time', { ar: 'مَتَى تَبْدَأُ الحِصَّةُ؟' }, { ar: 'تَبْدَأُ فِي السَّاعَةِ التَّاسِعَةِ.' }] },
      { core: true, cells: ['Day', { ar: 'فِي أَيِّ يَوْمٍ عِنْدَنَا العَرَبِيَّةُ؟' }, { ar: 'عِنْدَنَا العَرَبِيَّةُ يَوْمَ الاِثْنَيْنِ.' }] },
      { core: true, cells: ['Place', { ar: 'أَيْنَ المَقْصَفُ؟' }, { ar: 'هُوَ بِجَانِبِ المَكْتَبَةِ.' }] },
      { cells: ['Number', { ar: 'كَمْ حِصَّةً عِنْدَنَا اليَوْمَ؟' }, { ar: 'عِنْدَنَا سِتُّ حِصَصٍ.' }] },
      { cells: ['Permission', { ar: 'هَلْ يُمْكِنُنِي أَنْ أَسْتَعِيرَهُ؟' }, { ar: 'نَعَمْ، يُمْكِنُكَ ذَلِكَ.' }] },
      { cells: ['Homework', { ar: 'مَا الوَاجِبُ؟' }, { ar: 'اُكْتُبْ خَمْسَ جُمَلٍ عَنْ مَدْرَسَتِكَ.' }] },
    ],
    ltr: true,
    foot: 'Choose the question word from the information you need. Keep the question short enough to say clearly.',
    notes: `GRAMMAR PART 1 — website section 3 “Ask for the exact information you need” (8 model exchanges). Also: availability — هَلْ عِنْدَكُمْ كِتَابٌ فِي القَوَاعِدِ؟ → نَعَمْ، عِنْدَنَا نُسْخَتَانِ. Reason — لِمَاذَا سَتَغِيبُ / سَتَغِيبِينَ؟ → لِأَنَّ عِنْدِي مَوْعِدًا طِبِّيًّا.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · the five-move conversation (website)', title: 'Open, ask, listen, repair, close', ar: 'خَمْسُ خُطُوَاتٍ لِلْمُحَادَثَةِ',
    cards: [
      { chip: 'OPEN', color: '1D5FBF', head: 'صَبَاحُ الخَيْرِ …', big: 'صَبَاحُ الخَيْرِ يَا أُسْتَاذَةُ. اِسْمِي سَلْمَى.', en: 'Good morning, teacher. My name is Salma.', clue: 'Greet + the situation.' },
      { chip: 'ASK + LISTEN · REPAIR', color: 'C77700', head: 'آسِفَةٌ، لَمْ أَفْهَمْ …', big: 'آسِفَةٌ، هَلْ يُمْكِنُكِ أَنْ تُعِيدِي ذَلِكَ؟', en: 'Sorry, could you repeat that?', clue: 'Name the problem, ask for a fix.' },
      { chip: 'CLOSE', color: '1E6B52', head: 'شُكْرًا جَزِيلًا …', big: 'شُكْرًا جَزِيلًا عَلَى مُسَاعَدَتِكِ. إِلَى اللِّقَاءِ.', en: 'Thank you very much for your help. Goodbye.', clue: 'Thank + end politely.' },
    ],
    error: { text: 'Website: a clarification phrase keeps the exchange alive.', pairs: [['آسِفٌ، لَمْ أَفْهَمْ. مَرَّةً أُخْرَى، مِنْ فَضْلِكَ.', 'لَا أَعْرِفُ.']] },
    notes: `GRAMMAR PART 2 — website “The five-move conversation”: Open (greet and establish the situation) · Ask (the correct question word) · Listen (catch the information that answers your question) · Repair (request repetition or clarification) · Close (thank and end politely).
Speaker vs listener gender: آسِفٌ / آسِفَةٌ follows the SPEAKER; مِنْ فَضْلِكَ / مِنْ فَضْلِكِ, تُعِيدَ / تُعِيدِي follow the LISTENER.`,
  },
  F.quickCheck([...bank(10, 'questions', [1, 5]), ...bank(10, 'repair', [0, 5])], 'website transactional-question laboratory questions 2 and 6, and repair check questions 1 and 6.'),
  {
    type: 'glossed', stage: 'ido', min: 3, eyebrow: 'I do · model Scenario A with me (website role card)', title: 'Scenario A · New student', ar: 'سِينارْيُو أ · طَالِبَةٌ جَدِيدَةٌ',
    lines: [
      ['السَّلَامُ عَلَيْكُمْ. اِسْمِي …', '1 · Greet the teacher and say your name'],
      ['مَا المَوَادُّ الَّتِي نَدْرُسُهَا يَوْمَ الاِثْنَيْنِ؟', '2 · Ask which subjects are studied on Monday'],
      ['مَتَى يَنْتَهِي اليَوْمُ الدِّرَاسِيُّ؟', '3 · Ask what time school finishes'],
      ['أَيْنَ المَقْصَفُ، مِنْ فَضْلِكِ؟', '4 · Ask where the canteen is (female teacher)'],
      ['شُكْرًا جَزِيلًا. إِلَى اللِّقَاءِ.', '5 · Thank the teacher and close politely'],
    ],
    notes: `I DO (3 min) — the website Scenario A card and phrase bank. Model the role play live with a confident student (you play the teacher and answer unpredictably). Then show Scenarios B and C (website):
B · library: هَلْ عِنْدَكُمْ كِتَابٌ فِي قَوَاعِدِ اللُّغَةِ العَرَبِيَّةِ؟ · أَيْنَ الكِتَابُ، مِنْ فَضْلِكَ؟ · أَحْتَاجُ إِلَيْهِ لِيَوْمِ الثُّلَاثَاءِ. · هَلْ يُمْكِنُنِي أَنْ أَسْتَعِيرَهُ؟ · شُكْرًا جَزِيلًا عَلَى مُسَاعَدَتِكَ.
C · school office: سَأَغِيبُ عَنِ المَدْرَسَةِ يَوْمَ الخَمِيسِ. · (reason: لِأَنَّ عِنْدِي مَوْعِدًا …) · مَا الوَاجِبُ الَّذِي سَيَفُوتُنِي؟ · هَلْ يُمْكِنُكَ أَنْ تُخْبِرَ مُعَلِّمِي؟ · شُكْرًا …`,
  },
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website “Role-Play Mission”', title: 'Complete the role-play mission', ar: 'مُهِمَّةُ تَمْثِيلِ الدَّوْرِ',
    seed: 21,
    questions: [rounds[2], rounds[5], rounds[7], rounds[10], rounds[11]],
    side: { kind: 'core', label: 'CORE', text: 'fits the prompt?\nsuits the situation?\nkeeps the exchange moving?' },
    answerSlide: { min: 0, eyebrow: 'We do · Mission answers', title: 'Mission: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 14 Role-Play Mission rounds (finish time, where is the book, permission, missed work, repair). The other 9 are homework. Say each correct answer aloud in role.',
    answerNotes: 'Pairs say the correct line and the partner improvises a reply.',
  },
  F.repairSlide(site, ['Maryam is speaking: which form?', 'The teacher is a woman: which ending?', 'A place: which question word?']),
  F.listening(site, {
    coreTip: 'Listen twice.\n1st: the situation. 2nd: day, time, subject, instruction, deadline.',
    routes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5.',
    gloss: [
      ['أَحْمَدُ: مَتَى عِنْدَنَا الرِّيَاضِيَّاتُ؟ لَيْلَى: عِنْدَنَا الرِّيَاضِيَّاتُ يَوْمَ الاِثْنَيْنِ فِي السَّاعَةِ التَّاسِعَةِ صَبَاحًا.', 'C1 · Ahmad: When do we have maths? Layla: On Monday at 9 am.'],
      ['أَحْمَدُ: وَمَتَى تَبْدَأُ الاِسْتِرَاحَةُ؟ لَيْلَى: تَبْدَأُ الاِسْتِرَاحَةُ فِي السَّاعَةِ الحَادِيَةَ عَشْرَةَ، ثُمَّ عِنْدَنَا العُلُومُ فِي المُخْتَبَرِ.', 'Ahmad: When does break begin? Layla: At eleven, then we have science in the lab.'],
      ['الطَّالِبَةُ: آسِفَةٌ يَا أُسْتَاذَةُ، مَا الوَاجِبُ؟ الأُسْتَاذَةُ: اُكْتُبِي خَمْسَ جُمَلٍ عَنْ مَدْرَسَتِكِ.', 'C2 · Student: Sorry, miss, what is the homework? Teacher: Write five sentences about your school.'],
      ['الطَّالِبَةُ: هَلْ يُمْكِنُكِ أَنْ تُعِيدِي ذَلِكَ، مِنْ فَضْلِكِ؟ الأُسْتَاذَةُ: نَعَمْ. خَمْسُ جُمَلٍ عَنِ المَدْرَسَةِ، وَأَضِيفِي رَأْيًا وَسَبَبًا.', 'Student: Could you repeat that, please? Teacher: Yes — five sentences about school; add an opinion and a reason.'],
      ['الأُسْتَاذَةُ: الوَاجِبُ لِيَوْمِ الثُّلَاثَاءِ. الطَّالِبَةُ: شُكْرًا، فَهِمْتُ الآنَ.', 'Teacher: The homework is for Tuesday. Student: Thank you, I understand now.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · Dialogue B · library transaction (website)', title: 'Yusuf in the library', ar: 'المُحَادَثَةُ (ب)',
    lines: [
      ['يُوسُفُ: السَّلَامُ عَلَيْكُمْ. هَلْ عِنْدَكُمْ كِتَابٌ فِي قَوَاعِدِ اللُّغَةِ العَرَبِيَّةِ؟', 'OPEN + ASK · availability'],
      ['أَمِينُ المَكْتَبَةِ: نَعَمْ، عِنْدَنَا كِتَابَانِ عَلَى الرَّفِّ الثَّالِثِ.', 'Two books · third shelf'],
      ['يُوسُفُ: أَحْتَاجُ إِلَى أَحَدِهِمَا لِيَوْمِ الثُّلَاثَاءِ. هَلْ يُمْكِنُنِي أَنْ أَسْتَعِيرَهُ؟', 'Needs one for Tuesday · asks PERMISSION'],
      ['أَمِينُ المَكْتَبَةِ: نَعَمْ، وَلَكِنْ يَجِبُ أَنْ تُعِيدَهُ يَوْمَ الأَرْبِعَاءِ.', 'Yes — but return it on Wednesday (a condition)'],
      ['يُوسُفُ: شُكْرًا جَزِيلًا عَلَى مُسَاعَدَتِكَ.', 'CLOSE'],
    ],
    notes: 'DIALOGUE B (website, complete) — a transaction: Yusuf obtains a service and agrees to a condition. Dialogue A (Maryam, new student) is the writing model on the model slide and in the website reading section.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · dialogue evidence questions (website)', title: 'Maryam or Yusuf?', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 5,
    questions: bank(10, 'reading', [0, 2, 7, 9, 10]),
    side: { kind: 'info', head: 'EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Find the question,\nthen the answer line after it.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website dialogue evidence questions 1, 3, 8, 10 and 11 (1 and 3 are about Dialogue A — see the model slide). The other 7 are homework.',
    answerNotes: 'A student reads aloud the evidence line (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'سِينارْيُو أ: طَالِبٌ جَدِيدٌ / طَالِبَةٌ جَدِيدَةٌ — مَعَ المُعَلِّمِ.' },
      { route: 'develop', ar: 'سِينارْيُو ب: فِي المَكْتَبَةِ — تَحْتَاجُ إِلَى كِتَابٍ.' },
      { route: 'develop', ar: 'سِينارْيُو ج: فِي مَكْتَبِ المَدْرَسَةِ — سَتَغِيبُ يَوْمَ الخَمِيسِ.' },
      { route: 'stretch', ar: 'اِسْتَعْمِلْ عِبَارَةَ تَوْضِيحٍ وَاحِدَةً فِي كُلِّ مُحَادَثَةٍ.' },
    ],
    stems: [
      { route: 'core', ar: 'صَبَاحُ الخَيْرِ. اِسْمِي … · مَتَى …؟ · أَيْنَ …؟ · شُكْرًا.' },
      { route: 'develop', ar: 'هَلْ عِنْدَكُمْ …؟ · هَلْ يُمْكِنُنِي أَنْ …؟' },
      { route: 'develop', ar: 'سَأَغِيبُ يَوْمَ … لِأَنَّ … · مَا الوَاجِبُ الَّذِي سَيَفُوتُنِي؟' },
      { route: 'stretch', ar: 'آسِفٌ / آسِفَةٌ، لَمْ أَفْهَمْ. هَلْ تَعْنِي …؟' },
    ],
    modelEn: ['Hello. Do you have a book on Arabic grammar?', 'Yes, we have two books on the third shelf.'],
    notes: `WEBSITE TWO-MINUTE ROLE-PLAY SIMULATOR — choose a scenario, prepare short cue points (not a script) and respond as each prompt appears.
Website targets: answered all five prompts · two question words · a clarification phrase when needed · closed politely · understandable speech.
Website self-assessment /12 (three points each): Response · Clarity · Pronunciation & fluency · Interaction & repair — score only with evidence.`,
  }),
  F.routesSlide(site, {
    core: { amount: '8 lines', how: 'Route A dialogue: greeting, two questions and answers, thanks.' },
    develop: { amount: '10 lines', how: 'Three questions and answers, one repair phrase, polite close.' },
    stretch: { amount: '12 lines', how: 'Add an unexpected reply and handle it (condition, clarification).' },
  }),
  F.framesSlide({
    core: [
      { en: 'Good morning, teacher (f.). My name is …', ar: 'صَبَاحُ الخَيْرِ يَا أُسْتَاذَةُ. اِسْمِي …' },
      { en: 'When does the school day end?', ar: 'مَتَى يَنْتَهِي اليَوْمُ الدِّرَاسِيُّ؟' },
      { en: 'Where is the canteen, please?', ar: 'أَيْنَ المَقْصَفُ، مِنْ فَضْلِكِ؟' },
      { en: 'Sorry, I didn’t understand.', ar: 'آسِفٌ / آسِفَةٌ، لَمْ أَفْهَمْ.' },
      { en: 'Thank you very much. Goodbye.', ar: 'شُكْرًا جَزِيلًا. إِلَى اللِّقَاءِ.' },
    ],
    develop: [
      { en: 'Do you have a grammar book?', ar: 'هَلْ عِنْدَكُمْ كِتَابٌ فِي القَوَاعِدِ؟' },
      { en: 'May I borrow it?', ar: 'هَلْ يُمْكِنُنِي أَنْ أَسْتَعِيرَهُ؟' },
      { en: 'I need it for Tuesday.', ar: 'أَحْتَاجُ إِلَيْهِ لِيَوْمِ الثُّلَاثَاءِ.' },
      { en: 'Could you (f.) repeat that, please?', ar: 'هَلْ يُمْكِنُكِ أَنْ تُعِيدِي ذَلِكَ، مِنْ فَضْلِكِ؟' },
      { en: 'I will be absent on Thursday.', ar: 'سَأَغِيبُ عَنِ المَدْرَسَةِ يَوْمَ الخَمِيسِ.' },
    ],
    bank: ['مَتَى', 'أَيْنَ', 'كَمْ', 'مَا', 'هَلْ', 'لِمَاذَا', 'مِنْ فَضْلِكَ', 'مِنْ فَضْلِكِ', 'آسِفٌ', 'آسِفَةٌ', 'شُكْرًا جَزِيلًا', 'إِلَى اللِّقَاءِ'],
  }),
  F.modelSlide(site,
    'Maryam: Good morning, teacher. I am a new student and my name is Maryam. Teacher: Welcome, Maryam. Maryam: Which subjects do we study on Monday? Teacher: We study Arabic, maths and science. Maryam: Sorry, could you repeat the last subject? Teacher: Science. And school finishes at three. Maryam: Thank you very much.',
    ['open', 'ask', 'repair', 'close'],
    'The website Dialogue A (Maryam, new student) — a full five-move model for Route A.'),
  F.selfCheckSlide([
    { route: 'core', text: 'Response: I answered every prompt.' },
    { route: 'core', text: 'Clarity: short, organised sentences.' },
    { route: 'develop', text: 'I used two question words.' },
    { route: 'develop', text: 'Repair: I used a clarification phrase.' },
    { route: 'stretch', text: 'I handled an unexpected reply.' },
  ]),
  F.exitTicket(bank(10, 'finalQuiz', [1, 4, 6]), 16),
  F.prepSlide({
    ...NEXT,
    words: [['خُطَّةٌ', 'a plan', 'pl. خُطَطٌ'], ['تَقْدِيمٌ', 'a presentation', '—'], ['هَدَفٌ', 'a purpose / aim', 'pl. أَهْدَافٌ'], ['خَاتِمَةٌ', 'a conclusion', '—'], ['تَعْلِيقٌ', 'feedback / comment', '—']],
    questionEn: 'Plan a 1-minute talk about your school: write five keywords in Arabic.',
    questionAr: 'خَمْسُ كَلِمَاتٍ',
    homework: {
      core: 'Website F4-L10: the Role-Play Mission (14) and the repair check.',
      develop: 'Website five-prompt planner for one scenario + one repair + one closing.',
      stretch: 'Record a two-minute role play privately, self-assess /12 and write one target.',
    },
    wordsSource: 'Teacher-chosen planning words for the F4-L11 speaking-and-writing lesson.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: open · ask · listen · repair · close — short and accurate wins.' }),
];

module.exports = { meta, slides };
