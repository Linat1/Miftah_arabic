'use strict';
/*
 * Apply Workshops for Foundation (F1–F6) and Development (D1–D6): the third lesson of the week, after two taught lessons
 * (Learn · Learn · Apply). One 60-minute lesson that brings the two lessons TOGETHER, so students speak and write with
 * the language of both at once:
 *   Part 1 · Remember   — words from both lessons → “which lesson?” sort.
 *   Part 2 · Speak      — a new dialogue that joins both lessons → mixed question cards → one role-play card → a short talk.
 *   Part 3 · Write      — sentence builder and spot-and-fix taken from both practice rooms → frames → one connected text
 *                         → buddy check.
 *   Check yourself      — role-play model · writing model · self-check.
 * The word bank, question cards, builder rows and common mistakes come from the two Practice Rooms (pr-*.js → data);
 * the dialogue, role-play card, talk and writing task are new and written for each workshop, so students APPLY the
 * language in a fresh context instead of repeating the rooms. Decks are written to <Unit folder>/Workshop.
 * Usage: workshop({ key: 'f2-w02', pair: ['f2-l03', 'f2-l04'], title, arShort, focus, dialogue, card, talk, task }).
 */
const C = require('./common');
const X = require('./xp-common');

const pad = (n) => String(n).padStart(2, '0');
const FOLDER = { F: 'Foundation', D: 'Development' };
const SPREAD = [0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9, 11];
const pick6 = (words) => SPREAD.map((i) => words[i]).filter(Boolean).slice(0, 6);

function workshop(d) {
  if (!d.allowTatweel) X.lint(d, 'workshop');
  const [ka, kb] = d.pair;
  const A = require(`./pr-${ka}`).data; const B = require(`./pr-${kb}`).data;
  const LA = require(`./${ka}`).meta; const LB = require(`./${kb}`).meta;
  const unit = ka.slice(0, 2).toUpperCase(); const isF = unit[0] === 'F'; const isF1 = unit === 'F1';
  const w = +d.key.slice(-2); const code = `${unit}-W${pad(w)}`;
  const nb = +kb.slice(-2);
  let next = null; try { if (nb < 12) next = require(`./${ka.slice(0, 4)}${pad(nb + 1)}`).meta; } catch (e) { next = null; }
  const lab = A.lab; const both = `${LA.code} + ${LB.code}`;
  const fileTitle = d.title.replace(/-/g, ' ').replace(/[^A-Za-z0-9 ]/g, '').trim().replace(/\s+/g, '_');

  const M = {
    ...LB, code, chip: d.chip || 'Apply workshop', file: `${code}_Apply_Workshop_L${pad(+ka.slice(-2))}-L${pad(nb)}_${fileTitle}`,
    title: `Apply Workshop — ${d.title}`, arabic: `وَرْشَةُ التَّطْبِيقِ — ${d.arShort}`, focus: d.focus,
    kicker: LB.kicker.replace(LB.code, `${both} · APPLY WORKSHOP`),
    lessonLine: `Apply workshop · ${both}`, footer: LB.footer.replace(LB.code, `${code} · Apply workshop (${both})`),
    outDir: `${FOLDER[unit[0]]}_${unit}/Workshop`,
  };

  // ---------------------------------------------------------------- content from the two practice rooms
  const wa = pick6(A.words).map((x, i) => ({ ...x, n: i + 1 }));
  const wb = pick6(B.words).map((x, i) => ({ ...x, n: i + 7 }));
  const sortSrc = d.sort || [
    ...(A.task.phrases || []).slice(0, 4).map(([ar]) => ({ ar, cat: 0 })),
    ...(B.task.phrases || []).slice(0, 4).map(([ar]) => ({ ar, cat: 1 })),
  ];
  const ORDER = [0, 4, 5, 1, 2, 6, 7, 3];
  const sortItems = ORDER.map((i) => sortSrc[i]).filter(Boolean);
  const qs = [A.questions[0], B.questions[0], A.questions[1], B.questions[1], A.questions[2], B.questions[2]].filter(Boolean);
  const builder = d.builder || [A.builder[0], B.builder[0], A.builder[1], B.builder[1]].filter(Boolean).slice(0, 3);
  const errors = d.errors || [A.errors[0], B.errors[0], A.errors[1]].filter(Boolean);
  const fade = !isF;
  const card = d.card; const task = d.task;
  const talkTime = isF ? '30–45 seconds' : 'one minute';

  const wc = X.words(task.model.text); const [lo, hi] = task.range || (isF ? [40, 90] : [70, 120]);
  if (wc < lo || wc > hi) console.warn(`  ⚠ ${code} writing model: ${wc} words (target ${lo}–${hi})`);

  const objectives = d.objectives || [
    `${LA.code}: ${LA.title}`,
    `${LB.code}: ${LB.title}`,
    `Apply both: ${card.title.replace(/^Role-play card — /, '').replace(/^Reading card — /, '')} · ${task.title}`,
  ];
  const routes = d.routes || (isF1 ? {
    core: ['Say the sounds and read the words of both lessons.', 'Copy and write with the frames.'],
    develop: ['Read every item on the card without stopping.', 'Write the dictation without looking.'],
    stretch: ['Read new words with the same letters and marks.', 'Write extra words of your own.'],
  } : {
    core: ['Answer questions from BOTH lessons in full sentences.', 'Write the text using the frames.'],
    develop: [`Join both lessons in one conversation and a ${talkTime} talk.`, 'Write the text, frames only if stuck.'],
    stretch: ['Speak without notes; add reasons and opinions.', isF ? 'Add a reason (لِأَنَّ) and an extra detail to every point.' : 'Use more than one tense; give and justify opinions.'],
  });

  const slides = [
    { type: 'title', notes: `APPLY WORKSHOP AT A GLANCE — the third lesson of the week (Learn ${LA.code} · Learn ${LB.code} · Apply). 60 minutes on Teams: teacher-led in the main room for the short whole-class steps, pairs or breakout rooms of two or three for speaking, individual writing.
0–3 Welcome + plan · 3–6 What we learnt this week · PART 1 REMEMBER: word race (4) · which lesson? sort (4) · PART 2 SPEAK: new dialogue (5) · mixed question cards (6) · role-play card (7) · ${talkTime} talk (4) · PART 3 WRITE: sentence builder (3) · spot and fix (3) · connected writing (12) + buddy check (3) · CHECK YOURSELF: models + self-check (5).
PURPOSE: students APPLY the language of BOTH lessons in new contexts — the question cards, builder and common mistakes come from the two practice rooms; the dialogue, role-play, talk and writing task are new and join the lessons together.
CONTENT: ${LA.code} (${LA.title}) and ${LB.code} (${LB.title}).${d.notes ? ` ${d.notes}` : ''}
SET-UP: share this deck or its PDF in the chat. Pairs or breakout rooms for Part 2 (same-level rooms keep the routes simple). Everyone writes in their own book or document in Part 3.` },
    C.welcomeSlide(),
    {
      type: 'journey', stage: 'welcome', eyebrow: 'Today’s plan · learn, learn, apply', title: 'Two lessons — now use them together', ar: 'خُطُوَاتُ الوَرْشَةِ',
      steps: [
        { stage: 'teach', min: 6, text: `What we learnt: ${LA.code} and ${LB.code}.`, ar: 'مَاذَا تَعَلَّمْنَا؟' },
        { stage: 'wedo', min: 8, text: 'Part 1 · Remember: word race and “which lesson?” sort.', ar: 'تَذَكَّرْ' },
        { stage: 'youdo', min: 22, text: `Part 2 · Speak: ${lab.dialogue.toLowerCase()} · ${lab.questions.toLowerCase()} · ${lab.card.toLowerCase()} · ${lab.talk.toLowerCase()}.`, ar: 'تَكَلَّمْ' },
        { stage: 'youdo', min: 19, text: `Part 3 · Write: ${lab.builder.toLowerCase()} · ${lab.fix.toLowerCase()} · ${lab.write.toLowerCase()} · buddy check.`, ar: 'اكْتُبْ' },
        { stage: 'feedback', min: 5, text: 'Check yourself with the models.', ar: 'قَارِنْ' },
      ],
      supportHead: 'HOW THE WORKSHOP RUNS', support: 'Today there is no new language: you USE the words and structures of the last two lessons together. Everybody speaks in every step and everybody writes their own text. Choose your route — Core, Develop or Stretch — and move up when you are ready.',
      notes: `MAP (1 min). Apply = use what you learnt in ${LA.code} and ${LB.code} in a NEW situation. Point out the step number in the top-left of each slide.`,
    },
    {
      type: 'objectives', stage: 'teach', min: 3, eyebrow: `What we learnt this week · ${both}`, title: 'This week’s two lessons — and today’s goal', ar: 'نُطَبِّقُ مَا تَعَلَّمْنَا',
      objectives, routes,
      notes: `WHAT WE LEARNT (3 min, main room). Ask: “What can you say after ${LA.code}? After ${LB.code}?” Take two answers in the chat for each lesson (one word or one sentence is enough). Then read objective 3 — today’s new situation that needs BOTH lessons. Students tick their route goals at the end of the lesson.
${LA.code} language: ${A.grammar || LA.focus}
${LB.code} language: ${B.grammar || LB.focus}`,
    },
    // ------------------------------------------------------------------------------------------- PART 1 · REMEMBER
    {
      type: 'challenge', stage: 'wedo', min: 4, eyebrow: 'Part 1 · Step 1 · word race · 4 minutes', title: isF1 ? 'Letter race: two lessons, one race' : 'Word race: two lessons, one race', ar: 'سِبَاقُ الكَلِمَاتِ',
      chip: 'STEP 1 · PAIRS', icon: '🏁', head: isF1 ? 'Say it, find it — from both lessons' : 'English → Arabic, from both lessons',
      text: isF1
        ? `The next two slides show letters and words from ${LA.code} and ${LB.code}. Partner A says a letter name, sound or word; Partner B finds it and reads it. One point for every correct answer in 90 seconds — then swap.`
        : `The next two slides show words from ${LA.code} and ${LB.code}. Partner A says a word in ENGLISH; Partner B says it in ARABIC. One point for every correct answer in 90 seconds — then swap.`,
      steps: ['Teacher: first round together (3 words from each slide).', 'Pairs: 90 seconds each, as many as you can.', 'Mix the lessons: one word from slide 1, one from slide 2.', 'Last round: use two words — one from each lesson — in ONE sentence.'],
      routes: d.raceRoutes || (isF1 ? {
        core: 'Find the letter and say its sound.', develop: 'Read the whole word aloud.', stretch: 'Say another word with the same letter.',
      } : {
        core: 'Say the Arabic word clearly.', develop: 'Say the word, then a short sentence with it.', stretch: 'Join a word from each lesson in one sentence with وَ or لِأَنَّ.',
      }),
      phrases: [['دَوْرُكَ! / دَوْرُكِ!', 'your turn! (m. / f.)'], ['صَحِيحٌ!', 'correct!'], ['حَاوِلْ مَرَّةً أُخْرَى', 'try again'], ['نُقْطَةٌ لَكَ / لَكِ', 'a point for you (m. / f.)']],
      notes: 'STEP 1 (4 min). Quick, energetic retrieval. Model one round with a student, then pairs race. Collect the best score in the chat. Listen for words students hesitate over and revisit them in Part 2.',
    },
    { ...X.vocab({ eyebrow: `Step 1 · words from ${LA.code}`, title: `${LA.code} · ${LA.title}`, ar: A.wordsAr || 'كَلِمَاتُ الدَّرْسِ الأَوَّلِ', items: wa, notes: `Step 1 reference — six words from ${LA.code}.` }), bigAr: !!A.bigAr },
    { ...X.vocab({ eyebrow: `Step 1 · words from ${LB.code}`, title: `${LB.code} · ${LB.title}`, ar: B.wordsAr || 'كَلِمَاتُ الدَّرْسِ الثَّانِي', items: wb, notes: `Step 1 reference — six words from ${LB.code}.` }), bigAr: !!B.bigAr },
    {
      type: 'sorter', stage: 'wedo', min: 4, eyebrow: `Part 1 · Step 2 · ${d.sortCats ? 'sort it' : 'which lesson?'} · read each card, then sort it`, title: d.sortTitle || 'Which lesson does it come from?', ar: d.sortCats ? 'صَنِّفِ البِطَاقَاتِ' : 'مِنْ أَيِّ دَرْسٍ؟',
      categories: d.sortCats || [`${LA.code} · ${LA.title}`, `${LB.code} · ${LB.title}`], items: sortItems,
      answerSlide: { stage: 'feedback', min: 1, eyebrow: 'Step 2 · answers', title: d.sortCats ? 'Sort: answers' : 'Which lesson? Answers' },
      notes: `STEP 2 (4 min). Students read each card ALOUD (by invitation), then type its number in the chat with 1 or 2 (for example “card 3 → 2”). Then check the answer slide. Ask: “Which card could you use in BOTH lessons?” — this links the two lessons before Part 2.`,
    },
    // ------------------------------------------------------------------------------------------- PART 2 · SPEAK
    {
      type: 'formsTable', stage: 'wedo', min: 5, eyebrow: `Part 2 · Step 3 · ${lab.dialogue.toLowerCase()} · both lessons in one conversation`, title: d.dialogue.title, ar: d.dialogue.ar, ltr: true,
      cols: [{ label: 'Who', w: 1.0 }, { label: 'Say it in Arabic', w: 6.9, size: 19 }, { label: 'Meaning', w: 4.43 }],
      rows: d.dialogue.lines.map(([who, ar, en]) => ({ cells: [who, ar, en] })),
      foot: d.dialogue.foot || 'Round 1: read it in pairs (A and B). Round 2: swap letters. Round 3: cover the Arabic and say it from the English. Then change TWO details — one from each lesson — and say it again.',
      notes: `STEP 3 (5 min). A NEW dialogue that joins ${LA.code} and ${LB.code}. Teacher reads it once with a confident student; then pairs. Ask: “Which lines are from ${LA.code}? Which from ${LB.code}?” ${d.dialogue.notes || ''}`,
    },
    {
      type: 'formsTable', stage: 'youdo', min: 6, eyebrow: `Step 4 · ${lab.questions.toLowerCase()} · questions from both lessons, mixed`, title: isF1 ? 'Point, say, check — both lessons' : 'Mixed questions — answer, then add more', ar: 'أَسْئِلَةٌ مِنَ الدَّرْسَيْنِ', ltr: true,
      cols: A.qCols || [{ label: '#', w: 0.55 }, { label: 'Partner A asks', w: 3.9, size: 17 }, { label: 'Meaning', w: 2.6 }, { label: 'Start your answer (Core)', w: 3.0, size: 16 }, { label: 'Add more (Develop · Stretch)', w: 2.28, size: 15 }],
      rows: qs.map((x, i) => ({ core: i < 4, cells: [String(i + 1), x.q, x.en, x.start, x.more] })),
      foot: isF1 ? 'Odd numbers come from the first lesson, even numbers from the second. Core: say the sound or read the word. Develop: do the “then” part. Stretch: give your own example. Swap after each card.' : `Odd numbers come from ${LA.code}, even numbers from ${LB.code}. Core: a full sentence from the starter. Develop: add the “more” part. Stretch: link two answers with وَ, لِأَنَّ or لٰكِنَّ. Swap after each question.`,
      notes: 'STEP 4 (6 min, pairs or rooms). The questions come from the two practice rooms, now mixed so students switch between the lessons. Teacher: visit rooms and ask one Stretch follow-up question in each.',
    },
    {
      type: 'formsTable', stage: 'youdo', min: 7, eyebrow: `Step 5 · ${lab.card.toLowerCase()} · ${fade ? 'plans for tasks 1–2 are given — plan 3–5 yourself' : 'use the plan, then hide it and speak'}`, title: card.title, ar: card.ar, ltr: true,
      cols: A.cardCols || [{ label: '#', w: 0.55 }, { label: 'Partner A reads', w: 4.3, size: 17 }, { label: 'Speaker’s task', w: 3.6 }, { label: 'Plan: first words', w: 3.88, size: 16 }],
      rows: card.tasks.map((k, i) => ({ core: !fade || i < 2, cells: [k.unexpected ? `${i + 1} !` : String(i + 1), k.ex, k.task, (!fade || i < 2) ? k.plan : '______________'] })),
      foot: card.foot || `Speaker = ${card.you} · Partner A = ${card.them}. ${fade ? 'Write the plan for tasks 3–5 in your book first. Task ! is a surprise — Partner A reads it without warning.' : 'Read the plan for 1 minute, then hide it and speak. Task ! is a surprise.'} Then swap roles.`,
      notes: `STEP 5 (7 min). One NEW situation that needs both lessons: ${card.mix || `tasks use ${LA.code} and ${LB.code} language`}. ${fade ? 'FADED SUPPORT: tasks 1–2 show the plan; students write their own plan for 3–5.' : 'SUPPORTED: the plan column gives the first words, not the full answer.'} To a girl Partner A says: ${card.girl || 'the feminine forms (-ki / -īna)'}. ${card.notes || ''}`,
    },
    {
      type: 'challenge', stage: 'youdo', min: 4, eyebrow: `Step 6 · ${lab.talk.toLowerCase()} · ${talkTime}`, title: d.talk.title, ar: d.talk.ar,
      chip: 'STEP 6 · PAIRS', icon: '⏱', head: d.talk.head || (isF ? 'Talk for 30–45 seconds — use both lessons' : 'Talk for one minute — use both lessons'), text: d.talk.text,
      steps: d.talk.steps || ['Think for 30 seconds: 2 key words from EACH lesson, no sentences.', 'Speaker talks; the partner times it.', 'Partner: one thing that went well + one thing to improve.', 'Swap — then the teacher invites two volunteers.'],
      routes: d.talk.routes,
      phrases: d.talk.phrases || (isF ? [['أَنَا … وَ…', 'I am … and …'], ['عِنْدِي …', 'I have …'], ['أُحِبُّ … لِأَنَّ …', 'I like … because …'], ['وَأَيْضًا …', 'and also …']] : [['أَوَّلًا … ثُمَّ …', 'first … then …'], ['لِأَنَّ … · لِذٰلِكَ …', 'because … · so …'], ['فِي رَأْيِي …', 'in my opinion …'], ['فِي الخِتَامِ …', 'to finish …']]),
      notes: `STEP 6 (4 min). Fluency: one talk that uses BOTH lessons. Two volunteers speak to the whole class at the end (open mic). ${d.talk.notes || ''}`,
    },
    // ------------------------------------------------------------------------------------------- PART 3 · WRITE
    {
      type: 'builder', stage: 'wedo', min: 3, eyebrow: `Part 3 · Step 7 · ${lab.builder.toLowerCase()} · from both lessons`, title: A.builderTitle ? A.builderTitle.replace('three', 'three more') : 'Build three correct sentences', ar: A.builderAr || 'ابْنِ الجُمْلَةَ',
      rows: builder,
      answerSlide: { stage: 'feedback', min: 1, eyebrow: isF1 ? 'Step 7 · check your words' : 'Step 7 · check your sentences', title: A.builderAnswer || 'Sentence builder: answers' },
      notes: `STEP 7 (3 min). Rows come from the ${LA.code} and ${LB.code} practice rooms. Read the English, choose the correct part from each column (start on the RIGHT). Pairs agree, then check. Students copy the correct ${isF1 ? 'words' : 'sentences'} — they help in Step 9.`,
    },
    {
      type: 'repair', stage: 'wedo', min: 3, eyebrow: `Step 8 · ${lab.fix.toLowerCase()} · mistakes from both lessons`, title: 'Find the mistake, fix it', ar: 'اكْتَشِفِ الخَطَأَ',
      items: errors,
      answerSlide: { stage: 'feedback', min: 1, eyebrow: 'Step 8 · corrections', title: 'Spot and fix: corrections' },
      notes: 'STEP 8 (3 min). Common mistakes from both lessons. Students type the corrected version in the chat before the answer slide. These are the mistakes to look for in the buddy check.',
    },
    {
      type: 'frames', stage: 'youdo', min: 2, eyebrow: `Step 9 · ${lab.write.toLowerCase()} · frames if you need them`, title: 'Your writing frames', ar: 'قَوَالِبُ الكِتَابَةِ',
      core: task.coreFrames, develop: task.developFrames, bank: task.bank,
      notes: task.framesNotes || 'STEP 9 support. Core: use the Core frames for every bullet. Develop: use the Develop frames only if stuck. Stretch: no frames — add reasons, a time phrase and an extra detail.',
    },
    {
      type: 'stretchTask', stage: 'youdo', min: 10, eyebrow: `Step 9 · ${lab.write.toLowerCase()} · ${task.size || (task.text.match(/about \d+–\d+ words/) || ['one connected text'])[0]}`, title: task.title, ar: task.ar, chip: task.chip || (isF ? 'WRITING · BOTH LESSONS' : 'WRITING · DIRECTED TASK'),
      task: task.text, checklist: task.checklist || (isF
        ? ['Every bullet point has at least one sentence.', `Language from ${LA.code} AND ${LB.code}.`, 'Full sentences with the right ending (I · my · he · she).', 'At least one وَ and one لِأَنَّ (Develop).', 'Buddy check, then fix one thing.']
        : ['All the bullet points, in order.', `Language from ${LA.code} AND ${LB.code}.`, 'Linking words: وَ · ثُمَّ · لِأَنَّ · لٰكِنَّ.', 'One opinion with a reason.', 'Buddy check, then fix one thing.']),
      phrases: task.phrases, bankHead: 'USEFUL LANGUAGE',
      notes: task.notesFull || `STEP 9 (10 min writing, everyone on their own). Core: frames for every bullet (${isF ? '30–40' : '50–60'} words). Develop: ${isF ? '40–70' : '80–100'} words, frames only if stuck. Stretch: no frames, add reasons${isF ? '' : ' and another time frame'}. Teacher reads ONE sentence per student (in the chat or the shared document) and gives one live correction. ${task.notes || ''}`,
    },
    {
      type: 'formsTable', stage: 'youdo', min: 3, eyebrow: 'Step 9 · buddy check · swap and read your buddy’s text', title: 'Buddy check: five points', ar: 'رَاجِعْ مَعَ زَمِيلِكَ', ltr: true,
      cols: [{ label: 'Did the writer …', w: 6.6, size: 14 }, { label: 'Route', w: 1.4 }, { label: '✓ / ✗', w: 1.0 }, { label: 'Line / example', w: 3.33 }],
      rows: (d.buddyRows || A.buddyRows || [
        ['answer EVERY bullet point?', 'Core'],
        [A.checkCore || 'write full sentences with the right ending (I · my · he · she)?', 'Core'],
        [B.checkDevelop || A.checkDevelop || `use the key structures of ${LA.code} and ${LB.code} correctly?`, 'Develop'],
        ['use linking words (وَ · ثُمَّ · لِأَنَّ · لٰكِنَّ)?', 'Develop'],
        [isF ? 'add a reason, a time phrase or an opinion?' : 'use more than one tense and give an opinion with a reason?', 'Stretch'],
      ]).map(([text, route]) => ({ core: route === 'Core', cells: [text, route, '', ''] })),
      foot: 'Give back: one thing that went well + one thing to improve. The writer fixes ONE thing straight away.',
      notes: 'BUDDY CHECK (3 min). Pairs swap texts (or share screens). Then everyone returns to the main room.',
    },
    // ------------------------------------------------------------------------------------------- CHECK YOURSELF
    {
      type: 'formsTable', stage: 'feedback', min: 2, eyebrow: `Check yourself · ${lab.card.toLowerCase()}`, title: `${lab.card}: compare with a strong answer`, ar: 'قَارِنْ إِجَابَتَكَ', ltr: true,
      cols: [{ label: '#', w: 0.55 }, { label: 'Partner A reads', w: 4.1, size: 16 }, { label: 'A strong answer (with English)', w: 7.68, size: 18 }],
      rows: card.tasks.map((k, i) => ({ cells: [String(i + 1), k.ex, { ar: k.model, sub: k.modelEn }] })),
      foot: card.checkFoot || 'Did you answer every task in a full sentence? Find one phrase from each lesson in the models and say it aloud.',
      notes: 'CHECK YOURSELF (2 min, main room). Each student finds one task they answered less fully and says it again using the model.',
    },
    X.model({ eyebrow: `Check yourself · ${lab.write.toLowerCase()} · a strong answer`, title: 'Writing: compare with a strong answer', ar: 'قَارِنْ إِجَابَتَكَ', ...task.model, find: (task.model.find || []).slice(0, 4), notes: `CHECK YOURSELF (2 min). Find each bullet point in the model, and one phrase from ${LA.code} and one from ${LB.code}. Then each student copies ONE phrase from the model into their own text.` }),
    C.selfCheckSlide(d.selfCheck || (isF1 ? [
      { route: 'core', text: 'I said the sounds and read the words of both lessons.' },
      { route: 'core', text: 'I copied every letter from right to left with the dots in the right place.' },
      { route: 'develop', text: 'I read the card aloud without stopping.' },
      { route: 'develop', text: 'My buddy checked my writing and I fixed one thing.' },
      { route: 'stretch', text: 'I wrote the dictation and extra words without looking.' },
    ] : [
      { route: 'core', text: `I answered questions from ${LA.code} and ${LB.code} in full sentences.` },
      { route: 'core', text: 'I wrote a sentence for every bullet point.' },
      { route: 'develop', text: 'I used language from BOTH lessons when I spoke and when I wrote.' },
      { route: 'develop', text: 'My buddy checked my text and I fixed one mistake.' },
      { route: 'stretch', text: isF ? 'I added reasons (لِأَنَّ) and extra details without frames.' : 'I used more than one tense and gave opinions with reasons.' },
    ])),
    { ...C.closeSlide(next
      ? { nextCode: next.code, nextTitle: next.title, nextAr: next.arabic, remember: d.remember || 'Remember: keep using this week’s language — say it, then write it.' }
      : { nextCode: `${unit} complete`, nextTitle: 'Well done — the unit is complete', nextAr: 'أَحْسَنْتُمْ', remember: d.remember || 'Remember: keep using this unit’s language — say it, then write it.' }), byeEn: 'Well done — you used two lessons together!', nextLabel: 'NEXT LESSON' },
  ];
  return { meta: M, slides };
}

module.exports = { workshop };
