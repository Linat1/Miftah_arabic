'use strict';
/*
 * F3-L10 · Speaking: My Family and Home
 * Website: Pathways › Foundation › F3 › Lesson 10. The eight-question F3 bridge, the speaking toolkit (16 terms + useful
 * instructions + interaction phrases, 12 questions), decoding the question word (12), the answer-expansion ladder (fact →
 * detail → example → reason) and reference (لِأَنَّهُ / لِأَنَّهَا / لِأَنَّنِي, 12), the examiner-prompt listening, the 14
 * prompt cards, the Talk Builder Mission (14), the 60-second carousel, follow-up questions and recovery language (10), the
 * assessed 45–60-second talk + two follow-ups, the /15 self-mark rubric and the 16-question checkpoint.
 */
const F = require('./f3-common');
const game = require('../site-data/pathway-visual-games.json')['f3-l10'];
const { q, bank, banks } = F;

const meta = F.meta({
  n: 10, fileTitle: 'Speaking_My_Family_and_Home', chip: 'Speaking',
  title: 'Speaking: My Family and Home', arabic: 'التَّحَدُّثُ عَنْ عَائِلَتِي وَبَيْتِي',
  focus: 'Decode the question, answer in two connected sentences, speak for 45–60 seconds about family and home, then answer two follow-up questions.',
  icon: 'FaMicrophone', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F3-L11', nextTitle: 'F3 Consolidation — Integrated Skills Review', nextAr: 'مُرَاجَعَةُ الوَحْدَةِ الثَّالِثَةِ' };
const rounds = banks.l10.gameRounds.map((r) => F.w({ ...r, q: `${r.prompt.replace(/\.$/, '')}: ${r.s}` }));

const TALK = 'أَسْكُنُ مَعَ عَائِلَتِي فِي شَقَّةٍ مُتَوَسِّطَةِ الحَجْمِ قَرِيبَةٍ مِنَ المَدْرَسَةِ. عِنْدِي أَخٌ وَأُخْتٌ. أَخِي مُضْحِكٌ، أَمَّا أُمِّي فَهِيَ لَطِيفَةٌ وَمُجْتَهِدَةٌ. فِي شَقَّتِنَا أَرْبَعُ غُرَفٍ، وَغُرْفَتِي صَغِيرَةٌ وَلَكِنَّهَا مُضِيئَةٌ. فِيهَا سَرِيرٌ أَبْيَضُ، وَالمَكْتَبُ بِجَانِبِ النَّافِذَةِ. فِي المَسَاءِ أَدْرُسُ فِي غُرْفَتِي، ثُمَّ أَجْلِسُ مَعَ عَائِلَتِي. أُحِبُّ غُرْفَتِي لِأَنَّهَا هَادِئَةٌ.';

const site = {
  speaking: {
    context: 'The assessed talk: 45–60 seconds + two follow-ups',
    model: [
      ['A', 'مَا غُرْفَتُكَ المُفَضَّلَةُ؟', 'What is your favourite room?'],
      ['B', 'غُرْفَتِي المُفَضَّلَةُ غُرْفَةُ الجُلُوسِ لِأَنَّهَا وَاسِعَةٌ. نَجْلِسُ فِيهَا مَعًا فِي المَسَاءِ.', 'My favourite room is the living room because it is spacious. We sit in it together in the evening.'],
    ],
  },
  writing: {
    prompt: 'Website assessed talk: plan FIVE cue points (not a full script) — family structure, one family description, home overview, one room in detail, opinion and reason. Speak for 45–60 seconds, then answer two follow-up questions.',
    checklist: ['Five Arabic cue points, keywords only.', 'Answer first, extend second.', 'One position and one reason (لِأَنَّ).', 'Two follow-ups: add, clarify or justify.'],
    model: TALK,
  },
  differentiation: {
    core: 'Answer four prompts in clear sentences using a prompt card.',
    develop: 'Two-sentence answers and at least one reason with li’anna.',
    stretch: 'A full minute: varied openings, detail and an unaided opinion.',
  },
  mistakes: [
    { wrong: 'أُحِبُّ غُرْفَتِي لِأَنَّهُ مُرِيحٌ.', right: 'أُحِبُّ غُرْفَتِي لِأَنَّهَا مُرِيحَةٌ.', why: 'Room is feminine: li’annahā.' },
    { wrong: 'كَمْ غُرْفَةً فِي بَيْتِكَ؟ — نَعَمْ.', right: 'فِي بَيْتِي خَمْسُ غُرَفٍ.', why: 'Kam asks for a number: answer the exact question.' },
    { wrong: 'أَقْرَأُ فِي غُرْفَتِي لِأَنَّ أُحِبُّ الهُدُوءَ.', right: 'أَقْرَأُ فِي غُرْفَتِي لِأَنَّنِي أُحِبُّ الهُدُوءَ.', why: 'Because I … = li’annanī.' },
  ],
  listening: {
    title: 'Examiner prompt rehearsal',
    script: 'مَنْ فِي عَائِلَتِكَ؟ صِفْ أَحَدَ أَفْرَادِ عَائِلَتِكَ. مَاذَا تَفْعَلُ مَعَ عَائِلَتِكَ فِي المَسَاءِ؟ أَيْنَ تَسْكُنُ؟ كَمْ غُرْفَةً فِي بَيْتِكَ؟ مَاذَا يُوجَدُ فِي غُرْفَتِكَ؟ أَيْنَ يَقَعُ مَكْتَبُكَ؟ لِمَاذَا تُحِبُّ بَيْتَكَ؟',
    questions: bank(10, 'listening', [0, 3, 4, 6, 9]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 10,
    source: 'Website sections used: the eight-question F3 bridge and the three routes, the speaking toolkit (16 terms, useful instructions, “keep the conversation moving”, 12 questions), “understand the question before building the answer” (8 question words, the two-sentence principle, 12 questions), the answer-expansion ladder and reference (12 questions), the examiner-prompt listening (8 prompts, 10 questions), the 14 prompt cards, the Talk Builder Mission (14), the 60-second carousel, follow-up questions and recovery language (10), the assessed talk and the /15 self-mark rubric, and the 16-question checkpoint. Picture match: website visual game (family scene).',
    support: `• Rubric (website, /15 — language performance, not personality): Communication /5 · Range /5 · Accuracy & fluency /5.
• Core: four prompt cards, one clear sentence each. Develop: the two-sentence principle + one لِأَنَّ. Stretch: 60 seconds with varied openings (أَمَّا … فَـ) and unaided follow-ups.
• PRIVACY (website): “say the type of home and general location, not a private address”. Real, fictional or ideal family and home are all accepted. Recording is optional; never share a recording without permission.
• Online: camera on, mic muted until invited. Pairs rehearse in breakout rooms; the assessed talk can be one-to-one with the teacher while others work on the website carousel.
• Note: two website follow-up answers contain small errors (تَشْبَهُ → تُشْبِهُ, نَشَاهِدُ → نُشَاهِدُ); the forms on these slides are corrected.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Question words, then the answer-expansion ladder.', wedo: 'Talk Builder mission, examiner prompts, prompt cards.', next: 'F3-L11' }),
  F.doNow({
    questions: [
      q('What does سَبَبٌ mean?', ['a reason', 'a question', 'an opinion'], 'Prepared at home (F3-L09).'),
      q('What does تَفْصِيلٌ mean?', ['a detail', 'an answer', 'a sentence'], 'Prepared at home (F3-L09).'),
      ...bank(10, 'retrieval', [3, 4, 7]),
    ],
    keyIdea: { text: 'Answer first. Extend second. Then give a reason.', ar: 'جَوَابٌ + تَفْصِيلٌ + سَبَبٌ' },
    retrieves: 'Questions 1–2 test two of the five speaking words prepared at home at the end of F3-L09. Questions 3–5 are the website “eight-question F3 bridge” (li’annahu, li’annahā, ammā … fa-).',
  }),
  F.objectivesSlide([
    'Understand common family-and-home speaking prompts.',
    'Develop one-word answers into two or more connected sentences.',
    'Use li’anna accurately to give reasons.',
    'Deliver a 45–60-second talk and answer two follow-up questions.',
  ], {
    core: ['I can answer four prompts in clear sentences.', 'I can ask for a question again.'],
    develop: ['I can give two-sentence answers.', 'I can give a reason with li’anna.'],
    stretch: ['I can speak for a full minute.', 'I can answer follow-ups without notes.'],
  }, 2, 'Website “By the end” aims (left) and the website three routes (right).'),
  F.keywordsSlide({
    text: 'Question words, speaking toolkit and conversation phrases. Core: who, where, how many, why + “once more, please”.',
    groups: [
      { head: 'GROUP 1', name: 'Question words · 8' },
      { head: 'GROUP 2', name: 'Speaking toolkit · 16' },
      { head: 'GROUP 3', name: 'Keep it moving · 4' },
    ],
    bridge: [
      { ar: 'سُؤَالٌ', urdu: 'سوال', tr: 'su’āl', en: 'question' },
      { ar: 'جَوَابٌ / إِجَابَةٌ', urdu: 'جواب', tr: 'jawāb', en: 'answer' },
      { ar: 'تَفْصِيلٌ', urdu: 'تفصیل', tr: 'tafṣīl', en: 'detail' },
      { ar: 'رَأْيٌ', urdu: 'رائے', tr: 'ra’y', en: 'opinion' },
      { ar: 'سَبَبٌ', urdu: 'سبب', tr: 'sabab', en: 'reason' },
    ],
    notes: 'URDU BRIDGE: all five are shared words — سوال، جواب، تفصیل، رائے، سبب. Students who speak Urdu already know the “language of speaking”; today they use it in Arabic.',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · question words (website)', title: 'Who? Where? How many? Why?', ar: 'أَدَوَاتُ الاِسْتِفْهَامِ',
    items: [
      { n: 1, ar: 'مَنْ؟', en: 'who?', tr: 'man', core: true, tag: '→ person', forms: [{ l: 'e.g.', ar: 'مَنْ فِي عَائِلَتِكَ؟' }] },
      { n: 2, ar: 'مَعَ مَنْ؟', en: 'with whom?', tr: 'ma‘a man', tag: '→ مَعَ + …', forms: [{ l: 'e.g.', ar: 'مَعَ مَنْ تَعِيشُ؟' }] },
      { n: 3, ar: 'أَيْنَ؟', en: 'where?', tr: 'ayna', core: true, tag: '→ place', forms: [{ l: 'e.g.', ar: 'أَيْنَ تَسْكُنُ؟' }] },
      { n: 4, ar: 'كَمْ؟', en: 'how many?', tr: 'kam', core: true, tag: '→ number', forms: [{ l: 'e.g.', ar: 'كَمْ غُرْفَةً فِي بَيْتِكَ؟' }] },
      { n: 5, ar: 'لِمَاذَا؟', en: 'why?', tr: 'li-mādhā', core: true, tag: '→ لِأَنَّ', forms: [{ l: 'e.g.', ar: 'لِمَاذَا تُحِبُّ بَيْتَكَ؟' }] },
      { n: 6, ar: 'صِفْ / صِفِي', en: 'describe (m. / f.)', tr: 'ṣif / ṣifī', tag: '→ details', forms: [{ l: 'e.g.', ar: 'صِفْ بَيْتَكَ.' }] },
    ],
    notes: 'QUESTION WORDS (website section 3). Also: مَاذَا؟ (what? → an object, feature or action) and هَلْ؟ (yes / no → answer, then extend). The female forms on the website cards: تَسْكُنِينَ، تَعِيشِينَ، عَائِلَتِكِ، صِفِي.',
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 2 · speaking toolkit and conversation (website)', title: 'Fluency, accuracy, once more …', ar: 'أَدَوَاتُ التَّحَدُّثِ',
    items: [
      { n: 7, ar: 'طَلَاقَةٌ', en: 'fluency', tr: 'ṭa-lā-qa', tag: 'f.' },
      { n: 8, ar: 'دِقَّةٌ', en: 'accuracy', tr: 'diq-qa', tag: 'f.' },
      { n: 9, ar: 'نُطْقٌ', en: 'pronunciation', tr: 'nuṭq', tag: 'm.' },
      { n: 10, ar: 'مَرَّةً أُخْرَى، مِنْ فَضْلِكَ.', en: 'Once more, please.', tr: 'mar-ra-tan ukh-rā', core: true, tag: 'phrase' },
      { n: 11, ar: 'تَكَلَّمْ بِبُطْءٍ، مِنْ فَضْلِكَ.', en: 'Speak slowly, please.', tr: 'ta-kal-lam bi-buṭ’', core: true, tag: 'phrase' },
      { n: 12, ar: 'دَعْنِي أُفَكِّرُ قَلِيلًا …', en: 'Let me think a little …', tr: 'da‘-nī u-fak-ki-ru qa-lī-lan', core: true, tag: 'phrase' },
    ],
    notes: 'SPEAKING TOOLKIT (website, 16 terms): تَحَدُّثٌ، مُحَادَثَةٌ، بِطَاقَةُ تَحَدُّثٍ، سُؤَالٌ / أَسْئِلَةٌ، إِجَابَةٌ / إِجَابَاتٌ، تَفْصِيلٌ / تَفَاصِيلُ، رَأْيٌ، سَبَبٌ، نُطْقٌ، طَلَاقَةٌ، دِقَّةٌ، تَرَدُّدٌ، تَوَاصُلٌ، تَذَكُّرٌ، تَوْسِيعُ الإِجَابَةِ، مَرَّةً أُخْرَى. Also: هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟ (could you repeat the question?), لَا أَفْهَمُ هَذِهِ الكَلِمَةَ (I don’t understand this word). For a female teacher: مِنْ فَضْلِكِ، تَكَلَّمِي.',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · the answer-expansion ladder (website)', title: 'Climb the ladder', ar: 'سُلَّمُ تَوْسِيعِ الإِجَابَةِ',
    cols: [{ label: 'Step', w: 2.2, size: 20 }, { label: 'Answer', w: 7.2, size: 22 }, { label: 'What it adds', w: 2.93 }],
    rows: [
      { core: true, cells: [{ ar: '١ حَقِيقَةٌ' }, { ar: 'أَسْكُنُ فِي بَيْتٍ.' }, 'Fact'] },
      { core: true, cells: [{ ar: '٢ تَفْصِيلٌ' }, { ar: 'أَسْكُنُ فِي بَيْتٍ كَبِيرٍ قَرِيبٍ مِنَ المَدْرَسَةِ.' }, 'Detail'] },
      { cells: [{ ar: '٣ مِثَالٌ' }, { ar: 'فِيهِ خَمْسُ غُرَفٍ، وَغُرْفَتِي فِي الطَّابِقِ الأَوَّلِ.' }, 'Example or position'] },
      { cells: [{ ar: '٤ رَأْيٌ وَسَبَبٌ' }, { ar: 'أُحِبُّ بَيْتِي {w|لِأَنَّهُ} مُرِيحٌ وَمُضِيءٌ.' }, 'Opinion + reason'] },
    ],
    foot: 'Website: build from one secure fact; stop at the level you can control accurately, then extend.',
    notes: `GRAMMAR PART 1 — website section 4 “Climb the answer-expansion ladder”.
The two-sentence principle (website section 3): answer first, extend second — نَعَمْ، عِنْدِي أَخٌ وَأُخْتٌ. / أَخِي طَوِيلٌ وَمُضْحِكٌ، وَأُخْتِي ذَكِيَّةٌ وَهَادِئَةٌ.
Core stops at step 2; Develop reaches step 4 once; Stretch climbs the ladder for every prompt.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · because it / because I (website)', title: 'li’annahu · li’annahā · li’annanī', ar: 'لِأَنَّهُ · لِأَنَّهَا · لِأَنَّنِي',
    cards: [
      { chip: 'HOUSE · M.', color: '1D5FBF', head: 'لِأَنَّهُ', big: 'أُحِبُّ بَيْتِي لِأَنَّهُ وَاسِعٌ.', en: 'I love my house because it is spacious.', clue: 'بَيْتٌ is masculine.' },
      { chip: 'ROOM · F.', color: 'B83280', head: 'لِأَنَّهَا', big: 'أُحِبُّ غُرْفَتِي لِأَنَّهَا مُرَتَّبَةٌ.', en: 'I love my room because it is tidy.', clue: 'غُرْفَةٌ is feminine.' },
      { chip: 'ME', color: '1E6B52', head: 'لِأَنَّنِي', big: 'أَقْرَأُ فِي غُرْفَتِي لِأَنَّنِي أُحِبُّ الهُدُوءَ.', en: 'I read in my room because I like quiet.', clue: '“because I …”' },
    ],
    error: { text: 'Stretch opening (website): vary the start with ammā … fa-.', pairs: [['أَمَّا أُمِّي فَهِيَ لَطِيفَةٌ وَمُجْتَهِدَةٌ.', 'أُمِّي لَطِيفَةٌ. أُمِّي مُجْتَهِدَةٌ.']] },
    notes: `GRAMMAR PART 2 — website “Masculine reference / Feminine reference / Speaker reason”.
Stretch openings (website): أَمَّا أُمِّي فَهِيَ لَطِيفَةٌ وَمُجْتَهِدَةٌ · أَمَّا غُرْفَتِي فَهِيَ صَغِيرَةٌ وَلَكِنَّهَا مُرِيحَةٌ.
Website optional expression: مَا شَاءَ اللهُ، عَائِلَتِي مُحِبَّةٌ وَمُتَعَاوِنَةٌ — a respectful expression sometimes used when praising family; optional, not required.`,
  },
  F.quickCheck([...[2, 3].map((i) => { const b = banks.l10.promptQuiz[i]; return F.w({ ...b, q: `What must the answer give: ${(b.prompt || b.q).replace(/ (requires|asks for)\.\.\.$/, '')}` }); }), ...bank(10, 'expandQuiz', [2, 3])], 'website prompt-decoding questions 3–4 and answer-expansion questions 3–4.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch me answer and extend', title: 'One prompt, four steps', ar: 'شَاهِدْ ثُمَّ تَكَلَّمْ',
    steps: [
      { head: 'Decode', ar: 'مَا غُرْفَتُكَ المُفَضَّلَةُ؟', think: 'What + favourite room.' },
      { head: 'Answer', ar: 'غُرْفَتِي المُفَضَّلَةُ غُرْفَةُ الجُلُوسِ.', think: 'Answer first.' },
      { head: 'Detail', ar: 'هِيَ وَاسِعَةٌ، وَفِيهَا أَرِيكَةٌ كَبِيرَةٌ مُقَابِلَ التِّلْفَازِ.', think: 'Extend: object + position.' },
      { head: 'Reason', ar: 'أُحِبُّهَا {e|لِأَنَّنَا} نَجْلِسُ فِيهَا مَعًا فِي المَسَاءِ.', think: 'Because we …' },
    ],
    legend: ['e'], legendLabels: { e: 'REASON' },
    model: 'غُرْفَتِي المُفَضَّلَةُ غُرْفَةُ الجُلُوسِ. هِيَ وَاسِعَةٌ، وَفِيهَا أَرِيكَةٌ كَبِيرَةٌ مُقَابِلَ التِّلْفَازِ. أُحِبُّهَا {e|لِأَنَّنَا} نَجْلِسُ فِيهَا مَعًا فِي المَسَاءِ.',
    modelEn: 'My favourite room is the living room. It is spacious, and it has a big sofa opposite the TV. I love it because we sit in it together in the evening.',
    notes: 'I DO (3 min) — model the ladder aloud on a website prompt card, then ask a student to “climb” the same prompt about their own (or an invented) favourite room. Stretch: لِأَنَّنَا = because we.',
  },
  F.gameSlide({ ...game, title: 'Visual game — Family scene', items: [game.items[0], game.items[3], game.items[5]] }, {
    flex: true,
    title: 'Warm-up: who is it?',
    en: ['This is my mother.', 'This is my brother.', 'This is my grandfather.'],
    icons: [[['fa6', 'FaPersonDress', 'B83280'], ['fa6', 'FaChildDress', '5A6472']], [['fa6', 'FaChild', '1D5FBF'], ['fa6', 'FaChild', '1D5FBF']], [['fa6', 'FaPersonCane', '1D5FBF'], ['fa6', 'FaChild', '5A6472']]],
    labels: ['mother and girl', 'two boys', 'grandfather and boy'],
    order: [1, 2, 0],
    notes: 'FLEX — website visual game (family). Speaking extension: after each match, a volunteer adds a second sentence (answer first, extend second): هٰذِهِ أُمِّي. هِيَ لَطِيفَةٌ وَكَرِيمَةٌ.',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website “Talk Builder Mission”', title: 'Build the answer', ar: 'مُهِمَّةُ بِنَاءِ الإِجَابَةِ',
    seed: 21,
    questions: [rounds[1], rounds[3], rounds[6], rounds[9], rounds[11]],
    side: { kind: 'core', label: 'CORE', text: 'answer → extend → reason\nhouse -hu · room -hā\nstay on the topic' },
    answerSlide: { min: 0, eyebrow: 'We do · Mission answers', title: 'Mission: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 14 Talk Builder rounds (home detail, reason for a room, feminine agreement, develop yes / no, ask for repetition). The other 9 are homework. Say every correct answer ALOUD together.',
    answerNotes: 'After each answer: a student says the full two-sentence answer aloud (by invitation).',
  },
  F.repairSlide(site, ['Room → which ending?', 'Kam: what must the answer contain?', 'Because I … ?']),
  F.listening(site, {
    coreTip: 'Listen twice.\nFor each prompt write: the question word + the topic.',
    routes: 'Core: questions 1, 3 and 5. Develop / Stretch: all 5, then answer three prompts aloud.',
    gloss: [
      ['مَنْ فِي عَائِلَتِكَ؟ · صِفْ أَحَدَ أَفْرَادِ عَائِلَتِكَ.', 'Who is in your family? · Describe one family member.'],
      ['مَاذَا تَفْعَلُ مَعَ عَائِلَتِكَ فِي المَسَاءِ؟', 'What do you do with your family in the evening?'],
      ['أَيْنَ تَسْكُنُ؟ · كَمْ غُرْفَةً فِي بَيْتِكَ؟', 'Where do you live? · How many rooms are in your home?'],
      ['مَاذَا يُوجَدُ فِي غُرْفَتِكَ؟ · أَيْنَ يَقَعُ مَكْتَبُكَ؟', 'What is in your room? · Where is your desk?'],
      ['لِمَاذَا تُحِبُّ بَيْتَكَ؟', 'Why do you like your home?'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · prompt cards · family (website)', title: 'Read the card, then plan', ar: 'بِطَاقَاتُ التَّحَدُّثِ',
    lines: [
      ['مَنْ فِي عَائِلَتِكَ؟ / عَائِلَتِكِ؟', 'Who is in your family? — name people + one description'],
      ['مَعَ مَنْ تَعِيشُ؟ / تَعِيشِينَ؟', 'Who do you live with? — ma‘a + possessives'],
      ['هَلْ عِنْدَكَ إِخْوَةٌ؟ / عِنْدَكِ إِخْوَةٌ؟', 'Do you have siblings? — number or relationship + one detail'],
      ['صِفْ أَحَدَ أَفْرَادِ عَائِلَتِكَ. / صِفِي …', 'Describe one family member — appearance + personality'],
      ['لِمَاذَا تُحِبُّ عَائِلَتَكَ؟ / تُحِبِّينَ عَائِلَتَكِ؟', 'Why do you love your family? — opinion + li’anna'],
    ],
    notes: 'WEBSITE PROMPT CARDS (family, 5 of 6 — also مَاذَا تَفْعَلُ مَعَ عَائِلَتِكَ؟). Read silently first: identify the command, the topic and the evidence the answer needs. The female form after the slash is for a female student.',
  },
  {
    type: 'glossed', stage: 'wedo', flex: true, eyebrow: 'We do · reading · prompt cards · home (website) · FLEX', title: 'Home cards', ar: 'بِطَاقَاتُ البَيْتِ',
    lines: [
      ['أَيْنَ تَسْكُنُ؟ / تَسْكُنِينَ؟', 'Where do you live? — type of home + general area (NOT an address)'],
      ['صِفْ بَيْتَكَ. / صِفِي بَيْتَكِ.', 'Describe your home — size, rooms, one feature'],
      ['كَمْ غُرْفَةً فِي بَيْتِكَ؟', 'How many rooms? — number + names of rooms'],
      ['مَا غُرْفَتُكَ المُفَضَّلَةُ؟', 'Favourite room? — name it, describe it, say why'],
      ['أَيْنَ يَقَعُ السَّرِيرُ أَوِ المَكْتَبُ؟', 'Where is the bed or desk? — a precise position'],
    ],
    notes: 'WEBSITE PROMPT CARDS (home, 5 of 8 — also مَاذَا يُوجَدُ فِي غُرْفَتِكَ؟، مَاذَا تَفْعَلُ فِي البَيْتِ؟، لِمَاذَا تُحِبُّ بَيْتَكَ؟).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · follow-up response drill (website)', title: 'Answer the follow-up', ar: 'الأَسْئِلَةُ الإِضَافِيَّةُ',
    seed: 4,
    questions: bank(10, 'followup', [0, 4, 6, 7, 8]),
    side: { kind: 'info', head: 'FOLLOW-UP', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Add, clarify or justify.\nDo not repeat the same sentence.' },
    answerSlide: { min: 0, eyebrow: 'We do · follow-up answers', title: 'Follow-ups: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website follow-up drill questions 1, 5, 7, 8 and 9. Recovery language (website): دَعْنِي أُفَكِّرُ قَلِيلًا … · فِي رَأْيِي … · عَلَى سَبِيلِ المِثَالِ … — “use a brief thinking phrase, then answer; do not fill the pause with English”.',
    answerNotes: 'Students say the correct answer aloud, then change one detail to make it true for them.',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'مَنْ فِي عَائِلَتِكَ؟ · أَيْنَ تَسْكُنُ؟' },
      { route: 'develop', ar: 'صِفْ أَحَدَ أَفْرَادِ عَائِلَتِكَ.' },
      { route: 'develop', ar: 'صِفْ غُرْفَتَكَ. لِمَاذَا تُحِبُّهَا؟' },
      { route: 'stretch', ar: 'أَيُّ غُرْفَةٍ تَسْتَخْدِمُ أَكْثَرَ؟ وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'فِي عَائِلَتِي ______ . أَسْكُنُ فِي ______ .' },
      { route: 'develop', ar: 'أَمَّا أُمِّي / أَبِي فَـ ______ وَ ______ .' },
      { route: 'develop', ar: 'غُرْفَتِي ______ ، وَفِيهَا ______ . أُحِبُّهَا لِأَنَّهَا ______ .' },
      { route: 'stretch', ar: 'أَسْتَخْدِمُ ______ أَكْثَرَ لِأَنَّنِي ______ .' },
    ],
    modelEn: ['What is your favourite room?', 'My favourite room is the living room because it is spacious. We sit in it together in the evening.'],
    notes: `WEBSITE ASSESSED TALK (section 10): plan five cue points — family structure, one family description, home overview, one room in detail, opinion and reason. Speak 45–60 s, then answer two follow-up questions.
Performance sequence (website): 1 read the card · 2 prepare from cue notes · 3 speak 45–60 s · 4 answer two questions · 5 self-mark with evidence.
Follow-up bank (website): مَنْ أَقْرَبُ شَخْصٍ إِلَيْكَ فِي العَائِلَةِ؟ وَلِمَاذَا؟ · مَاذَا تَفْعَلُونَ مَعًا فِي نِهَايَةِ الأُسْبُوعِ؟ · كَيْفَ تُسَاعِدُ أُسْرَتَكَ فِي البَيْتِ؟ · أَيُّ غُرْفَةٍ تَسْتَخْدِمُ أَكْثَرَ؟ · أَيْنَ تَدْرُسُ عَادَةً فِي البَيْتِ؟ · صِفْ بَيْتَكَ المِثَالِيَّ بِجُمْلَتَيْنِ.`,
  }),
  F.routesSlide(site, {
    core: { amount: '4 prompts', how: 'One clear sentence per prompt card, with the stems.' },
    develop: { amount: '45 seconds', how: 'Two sentences per point and at least one li’anna.' },
    stretch: { amount: '60 seconds', how: 'Five cue points, varied openings, two unaided follow-ups.' },
  }),
  F.framesSlide({
    core: [
      { en: 'I live with my family in a flat.', ar: 'أَسْكُنُ مَعَ عَائِلَتِي فِي شَقَّةٍ.' },
      { en: 'I have a brother and a sister.', ar: 'عِنْدِي أَخٌ وَأُخْتٌ.' },
      { en: 'In my home there are four rooms.', ar: 'فِي بَيْتِي أَرْبَعُ غُرَفٍ.' },
      { en: 'The desk is next to the window.', ar: 'المَكْتَبُ بِجَانِبِ النَّافِذَةِ.' },
      { en: 'Once more, please.', ar: 'مَرَّةً أُخْرَى، مِنْ فَضْلِكَ.' },
    ],
    develop: [
      { en: 'As for my mother, she is kind.', ar: 'أَمَّا أُمِّي فَهِيَ لَطِيفَةٌ.' },
      { en: 'My room is small but bright.', ar: 'غُرْفَتِي صَغِيرَةٌ، وَلَكِنَّهَا مُضِيئَةٌ.' },
      { en: 'I love my room because it is quiet.', ar: 'أُحِبُّ غُرْفَتِي لِأَنَّهَا هَادِئَةٌ.' },
      { en: 'I study, then I sit with my family.', ar: 'أَدْرُسُ، ثُمَّ أَجْلِسُ مَعَ عَائِلَتِي.' },
      { en: 'Let me think a little … in my opinion …', ar: 'دَعْنِي أُفَكِّرُ قَلِيلًا … فِي رَأْيِي …' },
    ],
    bank: ['مَنْ', 'أَيْنَ', 'كَمْ', 'لِمَاذَا', 'لِأَنَّهُ', 'لِأَنَّهَا', 'لِأَنَّنِي', 'أَمَّا … فَـ', 'وَلَكِنَّ', 'ثُمَّ', 'بِجَانِبِ', 'فِي رَأْيِي'],
  }),
  F.modelSlide(site,
    'I live with my family in a medium-sized flat near the school. I have a brother and a sister. My brother is funny; as for my mother, she is kind and hard-working. Our flat has four rooms, and my room is small but bright. In it there is a white bed, and the desk is next to the window. In the evening I study in my room, then I sit with my family. I love my room because it is quiet.',
    ['family', 'home + room', 'position', 'reason'],
    'Teacher-made 45–60-second talk covering the five website cue points (≈ 55 words spoken at Foundation pace).'),
  F.selfCheckSlide([
    { route: 'core', text: 'Communication: I covered family AND home.' },
    { route: 'core', text: 'I answered the exact question first.' },
    { route: 'develop', text: 'Range: a position, a reason and ammā … fa-.' },
    { route: 'develop', text: 'Accuracy: -hu / -hā and agreement controlled.' },
    { route: 'stretch', text: 'I answered two follow-ups without notes.' },
  ]),
  F.exitTicket(bank(10, 'finalQuiz', [0, 4, 5]), 16),
  F.prepSlide({
    ...NEXT,
    words: [['مُرَاجَعَةٌ', 'a review / revision', 'pl. مُرَاجَعَاتٌ'], ['خَطَأٌ', 'a mistake', 'pl. أَخْطَاءٌ'], ['تَصْحِيحٌ', 'a correction', 'pl. تَصْحِيحَاتٌ'], ['هَدَفٌ', 'a target / goal', 'pl. أَهْدَافٌ'], ['وَحْدَةٌ', 'a unit', 'pl. وَحَدَاتٌ']],
    questionEn: 'Which F3 lesson was hardest for you? Write your one revision target.',
    questionAr: 'مَا هَدَفُكَ؟',
    homework: {
      core: 'Website F3-L10: the Talk Builder Mission (14) and the prompt-decoding check.',
      develop: 'Website 60-second carousel: rehearse all three prompt sets.',
      stretch: 'Record your 45–60-second talk privately, self-mark it /15 and write one improvement.',
    },
    wordsSource: 'Teacher-chosen review words for the F3-L11 integrated review (retrieve · repair · rehearse · refine).',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: answer first, extend second · li’annahu / li’annahā / li’annanī.' }),
];

module.exports = { meta, slides };
