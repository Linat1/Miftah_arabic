'use strict';
/*
 * Guided Practice Rooms for Foundation (F1–F6) and Development (D1–D6): ONE combined lesson per taught lesson — speaking
 * first, then writing — designed for students to run THEMSELVES in breakout rooms of two or three. Same principles as
 * the Topic A–C rooms (gp-common.js): every step says what to do, who does it and for how long; support is tiered
 * (Core · Develop · Stretch) and fades as the lesson goes on; models are kept for the final "check yourself" step.
 *   Part A · Speaking — word warm-up → say the model dialogue → question cards → a role-play card → a short talk.
 *   Part B · Writing  — sentence builder → spot and fix → frames → write a short text → buddy check.
 *   Check yourself — role-play model answers · writing model · self-check.
 * Title, codes and the word bank come from the taught lesson (its meta and its vocab slides), so the room always uses
 * the lesson's own words. Decks are written to <Unit folder>/Guided_Practice. Foundation: every role-play plan is given;
 * Development: the plan fades (tasks 1–2 given, 3–4 blank). F1 (script and sounds) relabels the steps via d.labels.
 */
const C = require('./common');
const X = require('./xp-common');

const pad = (n) => String(n).padStart(2, '0');
const FOLDER = { F: 'Foundation', D: 'Development' };
const ROOM_PHRASES = [['دَوْرُكَ! / دَوْرُكِ!', 'your turn! (m. / f.)'], ['أَعِدْ مِنْ فَضْلِكَ / أَعِيدِي', 'repeat please (m. / f.)'], ['أَحْسَنْتَ! / أَحْسَنْتِ!', 'well done! (m. / f.)'], ['بِبُطْءٍ مِنْ فَضْلِكَ', 'slowly, please']];

function lessonWords(lesson, pick) {
  const items = lesson.slides.filter((s) => s.type === 'vocab').flatMap((s) => s.items || []);
  let chosen;
  if (pick) chosen = pick.map((i) => items[i]).filter(Boolean);
  else {
    const core = items.filter((w) => w.core !== false); // spread across the lesson when it has more than 12 core words
    chosen = core.length > 12 ? Array.from({ length: 12 }, (_, i) => core[Math.round((i * (core.length - 1)) / 11)]) : [...core, ...items.filter((w) => w.core === false)];
  }
  return chosen.slice(0, 12).map((w, i) => ({ ...w, n: i + 1 }));
}

function room(d) {
  if (!d.allowTatweel) X.lint(d, 'room');
  const key = d.key; const unit = key.slice(0, 2).toUpperCase(); const n = +key.slice(-2);
  const lesson = require(`./${key}`);
  const L = lesson.meta; const code = L.code;
  const isF = unit[0] === 'F';
  const fileTitle = L.file.replace(`${code}_`, '');
  const nextKey = `${key.slice(0, 4)}${pad(n + 1)}`;
  let next = null; try { if (n < 12) next = require(`./${nextKey}`).meta; } catch (e) { next = null; }
  const lab = { words: 'Word warm-up', dialogue: 'Say the model dialogue', questions: 'Question cards', card: 'Role-play card', talk: 'Short talk', builder: 'Sentence builder', fix: 'Spot and fix', write: 'Write your text', ...(d.labels || {}) };

  const M = {
    ...L, file: `${code}_Practice_Room_${fileTitle}`, chip: 'Speaking + writing practice room',
    title: `Practice Room — ${L.title}`, arabic: `غُرْفَةُ التَّدَرُّبِ — ${d.arShort || L.arabic}`,
    focus: d.focus, kicker: L.kicker.replace(code, `${code} · PRACTICE ROOM`),
    footer: `${L.footer} · practice room`, outDir: `${FOLDER[unit[0]]}_${unit}/Guided_Practice`,
  };
  const words = d.words || lessonWords(lesson, d.pick);
  if (words.length < 12) console.warn(`  ⚠ ${code}: only ${words.length} words in the bank`);
  const wc = X.words(d.task.model.text); const [lo, hi] = d.task.range || (isF ? [35, 75] : [55, 95]);
  if (wc < lo || wc > hi) console.warn(`  ⚠ ${code} writing model: ${wc} words (target ${lo}–${hi})`);
  const fade = d.planFade !== undefined ? d.planFade : !isF;
  const card = d.card;

  const slides = [
    { type: 'title', notes: `PRACTICE ROOM AT A GLANCE — one combined lesson (speaking, then writing), 55–60 minutes: about 6 minutes in the main room, about 45 minutes in breakout rooms of two or three, about 6 minutes back together.
0–2 Welcome · 2–5 How the room works · ROOMS, Part A Speaking: Step 1 ${lab.words} (5) · Step 2 ${lab.dialogue} (5) · Step 3 ${lab.questions} (7) · Step 4 ${lab.card} (7) · Step 5 ${lab.talk} (4) · Part B Writing: Step 6 ${lab.builder} (4) · Step 7 ${lab.fix} (3) · Step 8 ${lab.write} (12) + buddy check (3) · back in the main room: Check yourself (4) · Self-check + close (2).
PURPOSE: students practise the lesson’s language ON THEIR OWN with a clear structure. The teacher visits each room (about 3 minutes per room), listens, reads one piece of writing per student and gives one live correction.
CONTENT: ${code} (${L.title}) — new practice tasks built on the lesson’s own word bank${d.grammar ? ` and grammar (${d.grammar})` : ''}.
SET-UP: rooms of two or three (same-level rooms keep the routes simple). Share this deck or its PDF in the chat so every room can follow the steps. Each student writes in their own book or document.` },
    C.welcomeSlide(),
    {
      type: 'journey', stage: 'welcome', eyebrow: 'Today’s room plan', title: 'Speak first, then write — you run it yourselves', ar: 'خُطُوَاتُ الغُرْفَةِ',
      steps: [
        { stage: 'wedo', min: 10, text: `Steps 1–2: ${lab.words.toLowerCase()} · ${lab.dialogue.toLowerCase()}.`, ar: 'الكَلِمَاتُ وَالحِوَارُ' },
        { stage: 'youdo', min: 18, text: `Steps 3–5: ${lab.questions.toLowerCase()} · ${lab.card.toLowerCase()} · ${lab.talk.toLowerCase()}.`, ar: 'تَكَلَّمْ' },
        { stage: 'wedo', min: 7, text: `Steps 6–7: ${lab.builder.toLowerCase()} · ${lab.fix.toLowerCase()}.`, ar: 'ابْنِ وَصَحِّحْ' },
        { stage: 'youdo', min: 15, text: `Step 8: ${lab.write.toLowerCase()} · buddy check.`, ar: 'اكْتُبْ' },
        { stage: 'feedback', min: 4, text: 'Check yourself with the models.', ar: 'قَارِنْ' },
      ],
      supportHead: 'HOW THE ROOM RUNS', support: 'Everybody speaks in every step and everybody writes their own text. Swap roles after each task. If you finish early, do the step again with the Stretch route.',
      notes: 'MAP (1 min) — Part A is speaking, Part B is writing. The step number is always in the top-left of each slide.',
    },
    {
      type: 'explain', stage: 'teach', min: 3, eyebrow: 'Before the rooms · how your room works', title: 'Three roles — then write alone, check together', ar: 'كَيْفَ نَعْمَلُ فِي الغُرْفَةِ',
      pointsHead: 'ROLES (SWAP AFTER EVERY TASK)',
      points: [
        'LEADER — opens the next step, keeps the time and reads the questions.',
        'SPEAKER — answers in Arabic, in a full sentence. Think for a few seconds, then speak.',
        'COACH — listens, checks with the slide, then says one thing that went well and one thing to improve. (In a pair, the Leader is also the Coach.)',
        'WRITING (Part B): everyone writes their OWN text; then swap with a buddy and check.',
      ],
      exHead: 'USEFUL ROOM PHRASES',
      examples: [
        { ar: 'دَوْرُكَ! / دَوْرُكِ!', en: 'Your turn! (m. / f.)' },
        { ar: 'عَفْوًا، أَعِدْ مِنْ فَضْلِكَ.', en: 'Sorry, repeat please.' },
        { ar: 'لَحْظَةً، أُفَكِّرُ …', en: 'One moment, I’m thinking …' },
      ],
      notes: 'HOW THE ROOM WORKS (3 min, main room). Model the roles quickly with two volunteers using one question from Step 3. Stress: the Coach is kind and specific. Then open the breakout rooms.',
    },
    // ------------------------------------------------------------------------------------------- PART A · SPEAKING
    {
      type: 'challenge', stage: 'wedo', min: 5, eyebrow: `Part A · Step 1 · ${lab.words.toLowerCase()} · 5 minutes`, title: d.warm?.title || 'Say it — then use it', ar: d.warm?.ar || 'قُلْهَا وَاسْتَعْمِلْهَا',
      chip: 'STEP 1 · IN YOUR ROOM', icon: '🔤', head: d.warm?.head || 'Word ping-pong',
      text: d.warm?.text || 'The Leader says a word in ENGLISH from the next two slides. The Speaker says it in ARABIC. The Coach checks the Arabic (and the ending) on the slide.',
      steps: d.warm?.steps || ['Leader: say 4 English words; Speaker answers in Arabic.', 'Coach checks the word on the slide.', 'Swap roles — new words each time.', 'Last round: use each word in a short sentence.'],
      routes: d.warm?.routes || {
        core: 'Say the Arabic word clearly.',
        develop: 'Say the word, then a short sentence: أَنَا … / عِنْدِي … / هٰذَا …',
        stretch: 'Give the feminine or plural form too, then a sentence with two words.',
      },
      phrases: ROOM_PHRASES,
      notes: `STEP 1 (5 min in rooms). The two word slides that follow come from the ${code} lesson. Teacher: visit the first room straight away to model the pace.`,
    },
    X.vocab({ eyebrow: 'Step 1 · word bank (1) · from the lesson', title: d.words1 || 'Today’s key words (1)', ar: 'كَلِمَاتُ الدَّرْسِ', items: words.slice(0, 6), notes: 'Step 1 reference — the Leader picks the English, the Speaker gives the Arabic.' }),
    X.vocab({ eyebrow: 'Step 1 · word bank (2) · from the lesson', title: d.words2 || 'Today’s key words (2)', ar: 'كَلِمَاتُ الدَّرْسِ', items: words.slice(6, 12), notes: 'Step 1 reference.' }),
    {
      type: 'formsTable', stage: 'wedo', min: 5, eyebrow: `Step 2 · ${lab.dialogue.toLowerCase()} · read it, then say it without looking`, title: d.dialogue.title, ar: d.dialogue.ar, ltr: true,
      cols: [{ label: 'Who', w: 1.0 }, { label: 'Say it in Arabic', w: 6.9, size: 20 }, { label: 'Meaning', w: 4.43 }],
      rows: d.dialogue.lines.map(([who, ar, en]) => ({ cells: [who, ar, en] })),
      foot: d.dialogue.foot || 'Round 1: read it in pairs (A and B). Round 2: swap letters. Round 3: cover the Arabic and say it from the English. Then change ONE detail (a name, a number, a place) and say it again.',
      notes: `STEP 2 (5 min). The dialogue models today’s language in a real exchange. ${d.dialogue.notes || ''}`,
    },
    {
      type: 'formsTable', stage: 'youdo', min: 7, eyebrow: `Step 3 · ${lab.questions.toLowerCase()} · the Leader asks, the Speaker answers`, title: d.qTitle || 'Answer in a full sentence — then add more', ar: 'أَسْئِلَةٌ وَأَجْوِبَةٌ', ltr: true,
      cols: [{ label: '#', w: 0.55 }, { label: 'Leader asks', w: 3.9, size: 17 }, { label: 'Meaning', w: 2.6 }, { label: 'Start your answer (Core)', w: 3.0, size: 16 }, { label: 'Add more (Develop · Stretch)', w: 2.28, size: 15 }],
      rows: d.questions.map((x, i) => ({ core: i < 3, cells: [String(i + 1), x.q, x.en, x.start, x.more] })),
      foot: 'Each Speaker answers every question. Core: a full sentence from the starter. Develop: add the “more” part. Stretch: add a reason with لِأَنَّ or a second detail. Swap after each question.',
      notes: 'STEP 3 (7 min). The starter column is support, not the answer: students finish it with their OWN information. Coach listens for the key structure of the lesson.',
    },
    {
      type: 'formsTable', stage: 'youdo', min: 7, eyebrow: `Step 4 · ${lab.card.toLowerCase()} · ${fade ? 'plans for tasks 1–2 are given — plan 3–4 yourself' : 'use the plan, then hide it and speak'}`, title: card.title, ar: card.ar, ltr: true,
      cols: d.cardCols || [{ label: '#', w: 0.55 }, { label: 'Leader reads', w: 4.3, size: 17 }, { label: 'Speaker’s task', w: 3.6 }, { label: 'Plan: first words', w: 3.88, size: 16 }],
      rows: card.tasks.map((k, i) => ({ core: !fade || i < 2, cells: [k.unexpected ? `${i + 1} !` : String(i + 1), k.ex, k.task, (!fade || i < 2) ? k.plan : '______________'] })),
      foot: card.foot || `Speaker = ${card.you} · Leader = ${card.them}. ${fade ? 'Write the plan for tasks 3–4 in your book first. Task ! is a surprise — the Leader reads it without warning.' : 'Read the plan for 1 minute, then hide it and speak.'} Then swap roles.`,
      notes: `STEP 4 (7 min). ${fade ? 'FADED SUPPORT: tasks 1–2 show the plan (question word → first words); students write their own plan for 3–4.' : 'SUPPORTED: the plan column models the thinking (first words), not the full answer.'} Everyone is Speaker once. To a girl the Leader says: ${card.girl || 'the feminine forms (-ki / -īna)'}. ${card.notes || ''}`,
    },
    {
      type: 'challenge', stage: 'youdo', min: 4, eyebrow: `Step 5 · ${lab.talk.toLowerCase()} · ${isF ? '30 seconds' : 'one minute'}`, title: d.talk.title, ar: d.talk.ar,
      chip: 'STEP 5 · IN YOUR ROOM', icon: '⏱', head: d.talk.head || (isF ? 'Talk for 30 seconds — no stopping' : 'Talk for one minute — no stopping'), text: d.talk.text,
      steps: d.talk.steps || ['Think for 30 seconds: 3–4 key words, no sentences.', 'Speaker talks; the Leader times it.', 'Coach: one thing that went well + one thing to improve.', 'Swap until everyone has spoken.'],
      routes: d.talk.routes,
      phrases: d.talk.phrases || (isF ? [['أَنَا … وَ…', 'I am … and …'], ['عِنْدِي …', 'I have …'], ['أُحِبُّ … لِأَنَّ …', 'I like … because …'], ['وَأَيْضًا …', 'and also …']] : [['أَوَّلًا … ثُمَّ …', 'first … then …'], ['لِأَنَّ … · لِذٰلِكَ …', 'because … · so …'], ['فِي رَأْيِي …', 'in my opinion …'], ['فِي الخِتَامِ …', 'to finish …']]),
      notes: `STEP 5 (4 min). A short talk builds fluency and confidence. ${d.talk.notes || ''}`,
    },
    // ------------------------------------------------------------------------------------------- PART B · WRITING
    {
      type: 'builder', stage: 'wedo', min: 4, eyebrow: `Part B · Step 6 · ${lab.builder.toLowerCase()} · choose A or B in each column`, title: d.builderTitle || 'Build three correct sentences', ar: 'ابْنِ الجُمْلَةَ',
      rows: d.builder,
      answerSlide: { stage: 'feedback', min: 1, eyebrow: 'Step 6 · check your sentences', title: 'Sentence builder: answers' },
      notes: 'STEP 6 (4 min). Read the English, then choose the correct part from each column (start on the RIGHT, column 1). Buddies agree before checking the answer slide. Students copy the three correct sentences into their book — they are useful for Step 8.',
    },
    {
      type: 'repair', stage: 'wedo', min: 3, eyebrow: `Step 7 · ${lab.fix.toLowerCase()} · mistakes students often make`, title: 'Find the mistake, fix it', ar: 'اكْتَشِفِ الخَطَأَ',
      items: d.errors,
      answerSlide: { stage: 'feedback', min: 1, eyebrow: 'Step 7 · corrections', title: 'Spot and fix: corrections' },
      notes: 'STEP 7 (3 min). Pairs agree on each correction before the answer slide. These are the mistakes to look for in the buddy check.',
    },
    {
      type: 'frames', stage: 'youdo', min: 2, eyebrow: `Step 8 · ${lab.write.toLowerCase()} · frames if you need them`, title: 'Your writing frames', ar: 'قَوَالِبُ الكِتَابَةِ',
      core: d.task.coreFrames, develop: d.task.developFrames, bank: d.task.bank,
      notes: 'STEP 8 support. Core: use the Core frames for every sentence. Develop: use the Develop frames only if stuck. Stretch: no frames — add a reason, a time phrase and one extra detail.',
    },
    {
      type: 'stretchTask', stage: 'youdo', min: 10, eyebrow: `Step 8 · ${lab.write.toLowerCase()} · ${isF ? 'about 40–60 words' : 'about 60–80 words'}`, title: d.task.title, ar: d.task.ar, chip: d.task.chip || (isF ? 'WRITING · SHORT TEXT' : 'WRITING · DIRECTED TASK'),
      task: d.task.text, checklist: d.task.checklist || (isF
        ? ['Every bullet point has at least one sentence.', 'Full sentences with the right ending (I · my · he · she).', 'Words from today’s word bank.', 'At least one و and one لِأَنَّ (Develop).', 'Buddy check, then fix one thing.']
        : ['All the bullet points, in order.', 'The right tense for each bullet.', 'Linking words: وَ · ثُمَّ · لِأَنَّ · لٰكِنَّ.', 'One opinion with a reason.', 'Buddy check, then fix one thing.']),
      phrases: d.task.phrases, bankHead: 'USEFUL LANGUAGE',
      notes: `STEP 8 (10 min writing). Core: frames for every bullet (${isF ? '25–35' : '40–50'} words). Develop: ${isF ? '40–60' : '60–80'} words, frames only if stuck. Stretch: no frames, add reasons and another time frame. Teacher visits rooms and reads ONE sentence per student. ${d.task.notes || ''}`,
    },
    {
      type: 'formsTable', stage: 'youdo', min: 3, eyebrow: 'Step 8 · buddy check · swap and read your buddy’s text', title: 'Buddy check: five points', ar: 'رَاجِعْ مَعَ زَمِيلِكَ', ltr: true,
      cols: [{ label: 'Did the writer …', w: 6.6, size: 14 }, { label: 'Route', w: 1.4 }, { label: '✓ / ✗', w: 1.0 }, { label: 'Line / example', w: 3.33 }],
      rows: [
        { core: true, cells: ['answer EVERY bullet point?', 'Core', '', ''] },
        { core: true, cells: [d.checkCore || 'write full sentences with the right ending (I · my · he · she)?', 'Core', '', ''] },
        { cells: [d.checkDevelop || 'use today’s key structure correctly?', 'Develop', '', ''] },
        { cells: ['use linking words (وَ · ثُمَّ · لِأَنَّ · لٰكِنَّ)?', 'Develop', '', ''] },
        { cells: [isF ? 'add a reason, a time phrase or an opinion?' : 'use more than one tense and give an opinion with a reason?', 'Stretch', '', ''] },
      ],
      foot: 'Give back: one thing that went well + one thing to improve. The writer fixes ONE thing straight away.',
      notes: 'BUDDY CHECK (3 min). Then everyone returns to the main room.',
    },
    // ------------------------------------------------------------------------------------------- CHECK YOURSELF
    {
      type: 'formsTable', stage: 'feedback', min: 2, eyebrow: `Check yourself · ${lab.card.toLowerCase()}`, title: `${lab.card}: compare with a strong answer`, ar: 'قَارِنْ إِجَابَتَكَ', ltr: true,
      cols: [{ label: '#', w: 0.55 }, { label: 'Leader reads', w: 4.1, size: 16 }, { label: 'A strong answer (with English)', w: 7.68, size: 18 }],
      rows: card.tasks.map((k, i) => ({ cells: [String(i + 1), k.ex, { ar: k.model, sub: k.modelEn }] })),
      foot: 'Did you answer every task in a full sentence? Choose one phrase you did not use and say it aloud.',
      notes: 'CHECK YOURSELF (2 min, main room). Each student finds one task they answered less fully and says it again using the model.',
    },
    X.model({ eyebrow: `Check yourself · ${lab.write.toLowerCase()} · a strong answer`, title: 'Writing: compare with a strong answer', ar: 'قَارِنْ إِجَابَتَكَ', ...d.task.model, notes: 'CHECK YOURSELF (2 min). Find each bullet point in the model. Then each student copies ONE phrase from the model into their own text.' }),
    C.selfCheckSlide(d.selfCheck || [
      { route: 'core', text: 'I answered the questions and the role-play tasks in full sentences.' },
      { route: 'core', text: 'I wrote a sentence for every bullet point.' },
      { route: 'develop', text: 'I used today’s key structure when I spoke AND when I wrote.' },
      { route: 'develop', text: 'My buddy checked my text and I fixed one mistake.' },
      { route: 'stretch', text: isF ? 'I added reasons (لِأَنَّ) and extra details without frames.' : 'I used more than one tense and gave opinions with reasons.' },
    ]),
    { ...C.closeSlide(next
      ? { nextCode: next.code, nextTitle: next.title, nextAr: next.arabic, remember: d.remember || 'Remember: say it, then write it — full sentences, every time.' }
      : { nextCode: `${unit} review`, nextTitle: 'Well done — the unit is complete', nextAr: 'أَحْسَنْتُمْ', remember: d.remember || 'Remember: say it, then write it — full sentences, every time.' }), byeEn: 'Well done — you practised it yourselves!', nextLabel: 'NEXT' },
  ];
  return { meta: M, slides };
}

module.exports = { room, lessonWords };
