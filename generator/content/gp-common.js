'use strict';
/*
 * Guided Practice Rooms (Topics A–C): two extra lessons per Topic lesson, designed for students to run THEMSELVES in breakout
 * rooms. Each step tells the room exactly what to do, who does it and for how long, gives tiered support (Core · Develop ·
 * Stretch) that fades as the lesson goes on, and keeps the model answers for a final "check yourself" step.
 *   • Speaking Practice Room — word warm-up → the answer ladder → two role-play cards (planned, then self-planned) →
 *     topic conversation with A-R-E-T → a one-minute talk → check yourself.
 *   • Writing Practice Room — Q1 warm-up → decode the question → upgrade sentences → write Q2 with a buddy →
 *     spot and fix + buddy check → one Q3 paragraph with a formula → check yourself.
 * Decks are written to <Topic folder>/Guided_Practice. The task content is NEW (not the Exam_Practice workshop tasks).
 */
const C = require('./common');
const X = require('./xp-common');

const lessonCode = (t, n) => `${X.TOPICS[t].code}-L${String(n).padStart(2, '0')}`;
function meta(t, n, kind, o) {
  const T = X.TOPICS[t];
  const m = C.unitMeta({ code: T.code, kicker: `ADVANCED TOPIC ${t} · GUIDED PRACTICE`, name: `${T.name} · guided practice`, level: T.level, site: `Advanced Topics › Topic ${t}`, footer: `Topic ${t} · ${kind} practice room` })({
    n, fileTitle: `${kind}_Practice_Room_${o.fileTitle}`, chip: `${kind} practice room`, title: o.title, arabic: o.arabic, focus: o.focus, icon: o.icon, iconSet: 'fa6',
  });
  return { ...m, outDir: `${T.folder}/Guided_Practice` };
}
const close = (sp, bye) => ({ ...sp, byeEn: bye, nextLabel: 'NEXT' });
const DEF_SPEAK_CHECK = [
  { route: 'core', text: 'I answered every role-play task in a full sentence.' },
  { route: 'core', text: 'I planned my first words from the question word.' },
  { route: 'develop', text: 'I climbed to level 3: answer + reason + detail.' },
  { route: 'develop', text: 'I used today’s key structure correctly when I spoke.' },
  { route: 'stretch', text: 'I used all four A-R-E-T links and spoke for 90 seconds.' },
];
const DEF_WRITE_CHECK = [
  { route: 'core', text: 'I decoded every bullet: question word and tense.' },
  { route: 'core', text: 'My Q2 answers all four bullets, with a greeting and a closing.' },
  { route: 'develop', text: 'I upgraded my sentences: detail + reason in every bullet.' },
  { route: 'develop', text: 'My buddy checked my work and I fixed one mistake.' },
  { route: 'stretch', text: 'My Q3 paragraph has T, D, R and F, with past and future.' },
];
const DEF_TALK = [['سَأَتَكَلَّمُ عَنْ …', 'I am going to talk about …'], ['أَوَّلًا … ثُمَّ …', 'first … then …'], ['بِالإِضَافَةِ إِلَى ذٰلِكَ …', 'in addition …'], ['فِي الخِتَامِ …', 'to finish …']];
const DEF_Q2_CHECK = ['All four bullet points, in order.', 'A greeting and a closing.', 'The right tense for each bullet.', 'At least one reason with لِأَنَّ.', 'About 80–90 words.'];
const ROOM_PHRASES = [['دَوْرُكَ!', 'your turn!'], ['أَعِدْ مِنْ فَضْلِكَ / أَعِيدِي', 'repeat please (m. / f.)'], ['أَحْسَنْتَ! / أَحْسَنْتِ!', 'well done! (m. / f.)'], ['تَكَلَّمْ أَكْثَرَ / تَكَلَّمِي أَكْثَرَ', 'say more (m. / f.)']];

// ===================================================================================================== SPEAKING ROOM
function speakingRoom(d) {
  X.lint(d, 'room.speak');
  const t = d.topic || 'A'; const code = lessonCode(t, d.n);
  const M = meta(t, d.n, 'Speaking', { fileTitle: d.fileTitle, title: `Speaking Practice Room — ${d.short}`, arabic: `غُرْفَةُ التَّحَدُّثِ — ${d.arShort}`, focus: d.focus, icon: d.icon || 'FaComments' });
  const tasksTable = (rp, planned) => ({
    type: 'formsTable', stage: 'youdo', min: 8, eyebrow: `Step 3 · role play ${rp.id} · ${rp.level} · ${planned ? 'the plan is given' : 'plan it yourself'}`, title: rp.title, ar: rp.ar, ltr: true,
    cols: [{ label: '#', w: 0.55 }, { label: 'Leader reads (the examiner)', w: 4.3, size: 17 }, { label: 'Speaker’s task', w: 3.6 }, { label: planned ? 'Plan: question word → my first words' : 'Plan it: question word → my first words', w: 3.88, size: 15 }],
    rows: rp.tasks.map((k, i) => ({ core: planned, cells: [k.unexpected ? `${i + 1} !` : String(i + 1), k.ex, k.task, planned ? k.plan : '______________'] })),
    foot: `Speaker = ${rp.you} · Leader = ${rp.them}. ${planned ? 'Use the plan column in your 1 minute of preparation, then hide it and speak.' : 'In your 1 minute, write the plan column in your book. Task ! : the Leader reads it without warning.'} Then swap roles.`,
    notes: `ROLE PLAY ${rp.id} (${rp.level}) — ${planned ? 'SUPPORTED: the plan column models the thinking (question word → tense → first words), NOT the full answer.' : 'FADED SUPPORT: students now write their own plan column — exactly what they will do in the exam in their preparation time.'}
ROOM ROUTINE: Leader reads the left column in order · Speaker answers · Coach ticks the checklist (step 5 slide) and gives one WWW + one EBI · swap so that everyone is Speaker once.
To a girl the Leader says: ${rp.girl || 'the feminine forms (-īna / -ki)'}.
${rp.notes || ''}`,
  });
  const modelTable = (rp) => ({
    type: 'formsTable', stage: 'feedback', min: 2, eyebrow: `Check yourself · role play ${rp.id}`, title: `Role play ${rp.id}: compare with a strong answer`, ar: 'قَارِنْ إِجَابَتَكَ', ltr: true,
    cols: [{ label: '#', w: 0.55 }, { label: 'Leader reads', w: 4.1, size: 16 }, { label: 'A strong answer (with English)', w: 7.68, size: 18 }],
    rows: rp.tasks.map((k, i) => ({ cells: [String(i + 1), k.ex, { ar: k.model, sub: k.modelEn }] })),
    foot: 'Compare: did you answer EVERY task with a full sentence? Steal one phrase you did not use and say it aloud.',
    notes: `CHECK YOURSELF — only AFTER the room has performed both cards. Each student finds one task they answered less fully and re-says it using the model. ${rp.modelNotes || ''}`,
  });
  const slides = [
    { type: 'title', notes: `SPEAKING PRACTICE ROOM AT A GLANCE — 55–60 minutes; about 8 minutes in the main room, about 40 minutes in breakout rooms of three, about 8 minutes back together.
0–2 Welcome · 2–6 How the room works (roles, rules) · then ROOMS: Step 1 Word warm-up (5) · Step 2 The answer ladder (8) · Step 3 Role plays 1 and 2 (14) · Step 4 Topic conversation with A-R-E-T (8) · Step 5 One-minute talk (5) · back in the main room: Check yourself (6) · Self-check + close (3).
PURPOSE: students practise ON THEIR OWN with a clear structure. The teacher visits each room (about 3 minutes per room), listens, and gives one live correction per student.
CONTENT: ${X.TOPICS[t].name}, Lesson ${d.n} (${d.title}, ${code}) — new role plays and questions (not the ones in the Exam Practice workshop), using the lesson’s language${d.grammar ? ` (${d.grammar})` : ''}.
SET-UP: rooms of three (same-level rooms keep the routes simple). Share this deck or its PDF in the chat so every room can follow the steps. Post the step timings in the chat.` },
    C.welcomeSlide(),
    {
      type: 'journey', stage: 'welcome', eyebrow: 'Today’s room plan', title: 'Five steps — you run them yourselves', ar: 'خُطُوَاتُ الغُرْفَةِ',
      steps: [
        { stage: 'wedo', min: 5, text: 'Step 1: word warm-up.', ar: 'الكَلِمَاتُ' },
        { stage: 'wedo', min: 8, text: 'Step 2: climb the answer ladder.', ar: 'السُّلَّمُ' },
        { stage: 'youdo', min: 14, text: 'Step 3: two role plays (planned, then you plan).', ar: 'تَمْثِيلُ الدَّوْرِ' },
        { stage: 'youdo', min: 8, text: 'Step 4: topic conversation, A-R-E-T.', ar: 'المُحَادَثَةُ' },
        { stage: 'youdo', min: 5, text: 'Step 5: one-minute talk.', ar: 'دَقِيقَةٌ وَاحِدَةٌ' },
        { stage: 'feedback', min: 6, text: 'Check yourself with the models.', ar: 'قَارِنْ' },
      ],
      supportHead: 'HOW THE ROOM RUNS', support: 'Everybody speaks in every step. Swap roles each time: Leader → Speaker → Coach. If you finish early, do the step again with the Stretch route.',
      notes: 'MAP (1 min) — show the route through the steps. Students keep this slide in mind: the step number is always in the top-left of each slide.',
    },
    {
      type: 'explain', stage: 'teach', min: 3, eyebrow: 'Before the rooms · how your room works', title: 'Three roles, four rules', ar: 'كَيْفَ نَعْمَلُ فِي الغُرْفَةِ',
      pointsHead: 'ROLES (SWAP AFTER EVERY TASK)',
      points: [
        'LEADER — opens the next step, keeps the time, and reads the examiner’s questions.',
        'SPEAKER — answers in full Arabic sentences. Plan for a few seconds, then speak.',
        'COACH — listens with the checklist, then gives one WWW (what went well) and one EBI (even better if).',
        'RULES: Arabic only in the tasks · full sentences · no silence (use a repair phrase) · everyone speaks in every step.',
      ],
      exHead: 'USEFUL ROOM PHRASES',
      examples: [
        { ar: 'دَوْرُكَ! / دَوْرُكِ!', en: 'Your turn! (m. / f.)' },
        { ar: 'عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟', en: 'Sorry, could you repeat the question?' },
        { ar: 'لَحْظَةً، دَعْنِي أُفَكِّرُ …', en: 'One moment, let me think …' },
      ],
      notes: 'HOW THE ROOM WORKS (3 min, main room). Model the three roles quickly with two volunteers using one question. Stress: the Coach is not a judge — one WWW, one EBI, kind and specific. Then open the breakout rooms.',
    },
    {
      type: 'challenge', stage: 'wedo', min: 5, eyebrow: 'Step 1 · word warm-up · 5 minutes', title: 'Say it — then use it', ar: 'قُلْهَا وَاسْتَعْمِلْهَا',
      chip: 'STEP 1 · IN YOUR ROOM', icon: '🔤', head: 'Word ping-pong', text: 'The Leader says a word in ENGLISH from the next two slides. The Speaker says it in ARABIC, then uses it in a short sentence about themselves. The Coach checks the Arabic on the slide.',
      steps: ['Leader: say 4 English words; Speaker answers in Arabic + one sentence each.', 'Coach checks the word and the ending (I / he / she / they).', 'Swap roles — new words each time.', 'Last round: say the he / she form of each verb.'],
      routes: d.warm || {
        core: 'Say the Arabic word, then a simple sentence: أَنَا … ',
        develop: 'Add when or how often: كُلَّ يَوْمٍ · أَحْيَانًا · مَرَّتَيْنِ فِي الأُسْبُوعِ',
        stretch: 'Use two words in one sentence with a reason (لِأَنَّ …).',
      },
      phrases: ROOM_PHRASES,
      notes: 'STEP 1 (5 min in rooms). The vocab slides that follow are the reference. Teacher: visit the first room straight away to model the pace.',
    },
    X.vocab({ eyebrow: 'Step 1 · word bank (1)', title: (d.words1 || {}).title || 'Today’s key words (1)', ar: (d.words1 || {}).ar || 'كَلِمَاتُ الدَّرْسِ', items: d.words.slice(0, 6), notes: 'Step 1 reference — the Leader picks the English, the Speaker gives the Arabic.' }),
    X.vocab({ eyebrow: 'Step 1 · word bank (2)', title: (d.words2 || {}).title || 'Today’s key words (2)', ar: (d.words2 || {}).ar || 'كَلِمَاتُ الدَّرْسِ', items: d.words.slice(6, 12), notes: 'Step 1 reference.' }),
    {
      type: 'models', stage: 'teach', min: 2, eyebrow: 'Step 2 · the answer ladder · how a short answer becomes a strong one', title: `Climb the ladder: “${d.ladder.qEn}”`, ar: d.ladder.q,
      rows: d.ladder.rungs.map((r, i) => ({ ar: r.ar, en: `Level ${i + 1} · ${['Answer in a full sentence', '+ a reason', '+ a detail (time, frequency, example)', '+ another time frame or an opinion'][i]}`, tip: r.en })),
      notes: `STEP 2 (read together for 2 min). Each level ADDS one thing. Core aims for level 2, Develop for level 3, Stretch for level 4. ${d.ladder.notes || ''}`,
    },
    {
      type: 'formsTable', stage: 'wedo', min: 6, eyebrow: 'Step 2 · your turn · climb the ladder for each question', title: 'Your ladder: build each answer level by level', ar: 'اصْعَدِ السُّلَّمَ', ltr: true,
      cols: [{ label: '#', w: 0.55 }, { label: 'Question', w: 3.9, size: 16 }, { label: 'Level 1 · answer', w: 2.7, size: 15 }, { label: 'Level 2 · + reason', w: 2.6, size: 15 }, { label: 'Level 3–4 · + detail / time', w: 2.58, size: 15 }],
      rows: d.ladderQs.map((q, i) => ({ core: i < 2, cells: [String(i + 1), q.q, q.l1, q.l2, q.l3] })),
      foot: 'Leader asks · Speaker climbs as high as they can · Coach says which level they reached. Swap for each question.',
      notes: 'STEP 2 (6 min). The cells are STARTERS, not full answers. Core: questions 1–2 to level 2. Develop: all four to level 3. Stretch: level 4 with an opinion or another time frame.',
    },
    {
      type: 'explain', stage: 'teach', min: 2, eyebrow: 'Step 3 · role play · how to use your 1 minute of preparation', title: 'Plan a role-play card in one minute', ar: 'خَطِّطْ فِي دَقِيقَةٍ',
      pointsHead: 'FOUR MOVES IN ONE MINUTE',
      points: [
        'WHO am I and WHO is the examiner? (formal or friendly · a man or a woman → your endings).',
        'For each task, find the QUESTION WORD and the TENSE (past · present · future).',
        'Plan only your FIRST 2–3 words for each task — not whole sentences.',
        'Task ! is unexpected: listen for the question word, then answer in a full sentence.',
      ],
      exHead: 'QUESTION WORD → HOW TO START',
      examples: [
        { ar: 'كَمْ …؟ ← رَقْمٌ + اسْمٌ', en: 'how many → a number + a noun' },
        { ar: 'مَتَى …؟ ← فِي السَّاعَةِ … / يَوْمَ …', en: 'when → at … o’clock / on …day' },
        { ar: 'لِمَاذَا …؟ ← لِأَنَّ …', en: 'why → because …' },
        { ar: 'هَلْ …؟ ← نَعَمْ / لَا + جُمْلَةٌ كَامِلَةٌ', en: 'yes/no question → yes / no + a full sentence' },
      ],
      notes: 'STEP 3 introduction (2 min). Role play 1 shows the plan column filled in; for role play 2 students write it themselves. This is the fading: by the exam, they plan alone.',
    },
    tasksTable(d.RP[0], true),
    tasksTable(d.RP[1], false),
    {
      type: 'explain', stage: 'teach', min: 2, eyebrow: 'Step 4 · topic conversation · keep the answer going', title: 'A-R-E-T: four links in every answer', ar: 'سِلْسِلَةُ الإِجَابَةِ',
      pointsHead: 'A · R · E · T',
      points: [
        'A — ANSWER the question in a full sentence.',
        'R — give a REASON: لِأَنَّ … / لِذٰلِكَ …',
        'E — add an EXAMPLE or a detail: مَثَلًا … / كُلَّ يَوْمٍ …',
        'T — change the TIME: past (أَمْسِ / فِي المَاضِي) or future (سَوْفَ / فِي المُسْتَقْبَلِ).',
      ],
      exHead: 'THE COACH PUSHES WITH',
      examples: [
        { ar: 'لِمَاذَا؟', en: 'Why?' }, { ar: 'مِثْلَ مَاذَا؟', en: 'Like what?' }, { ar: 'وَفِي المَاضِي؟ / وَفِي المُسْتَقْبَلِ؟', en: 'And in the past? / And in the future?' },
      ],
      callout: { head: 'ROUTES', text: 'Core: A + R. Develop: A + R + E. Stretch: all four, plus an opinion (فِي رَأْيِي) or a contrast (لٰكِنَّ).' },
      notes: 'STEP 4 introduction (2 min). Show one answer growing link by link, then open the conversation card.',
    },
    {
      type: 'formsTable', stage: 'youdo', min: 6, eyebrow: 'Step 4 · conversation card · the Leader asks, the Coach pushes', title: 'Conversation: answer, then keep going', ar: d.convAr || 'المُحَادَثَةُ', ltr: true,
      cols: [{ label: '#', w: 0.55 }, { label: 'Leader asks', w: 4.6, size: 16 }, { label: 'Meaning', w: 2.9 }, { label: 'Coach’s follow-up', w: 2.5, size: 15 }, { label: 'Route', w: 1.78 }],
      rows: d.conv.map((q, i) => ({ core: q.route === 'Core', cells: [String(i + 1), q.q, q.en, q.push, q.route] })),
      foot: 'Each Speaker answers three questions (one per route if you can), using A-R-E-T. The Coach asks the follow-up. Swap.',
      notes: 'STEP 4 (6 min). Leaders choose questions that suit the Speaker: Core questions first, then move up. The follow-up column trains extended answers — exactly what the conversation part of the exam rewards.',
    },
    {
      type: 'challenge', stage: 'youdo', min: 5, eyebrow: 'Step 5 · the one-minute talk · record and review', title: d.talk.title, ar: d.talk.ar,
      chip: 'STEP 5 · IN YOUR ROOM', icon: '⏱', head: 'Talk for one minute — no stopping', text: d.talk.text,
      steps: ['30 seconds: jot 4 key words (one per bullet) — no sentences.', 'Speaker talks; the Leader times it (record it on your phone or in Teams if you can).', 'Coach: tick the checklist on the next slide, then WWW + EBI.', 'Swap. Listen back to your recording at home and fix one sentence.'],
      routes: d.talk.routes,
      phrases: d.talk.phrases || DEF_TALK,
      notes: `STEP 5 (5 min). A monologue builds fluency for the conversation. ${d.talk.notes || ''}`,
    },
    {
      type: 'formsTable', stage: 'youdo', min: 1, eyebrow: 'Coach · checklist for every step', title: 'Coach: tick, then give WWW + EBI', ar: 'وَرَقَةُ المُدَرِّبِ', ltr: true,
      cols: [{ label: 'The Speaker …', w: 6.4, size: 14 }, { label: 'Route', w: 1.5 }, { label: '✓ / ✗', w: 1.1 }, { label: 'Example you heard', w: 3.33 }],
      rows: [
        { core: true, cells: ['answered every question / task in a FULL sentence', 'Core', '', ''] },
        { core: true, cells: [d.checkCore || 'used the topic words correctly (I / he / she endings)', 'Core', '', ''] },
        { cells: ['gave a reason (لِأَنَّ) and a detail (time, frequency, example)', 'Develop', '', ''] },
        { cells: [d.checkDevelop || 'used today’s key structure correctly', 'Develop', '', ''] },
        { cells: ['changed the time frame (past or future) or gave an opinion', 'Stretch', '', ''] },
        { cells: ['kept going with a repair phrase instead of silence', 'All', '', ''] },
      ],
      foot: 'Feedback is kind and specific: “WWW: you used لِأَنَّ twice. EBI: add a past sentence.”',
      notes: 'The Coach keeps this slide open during Steps 2–5. Back in the main room, ask each room for its best WWW.',
    },
    modelTable(d.RP[0]),
    modelTable(d.RP[1]),
    {
      type: 'formsTable', stage: 'feedback', min: 2, eyebrow: 'Check yourself · conversation and one-minute talk', title: 'Strong answers to compare with yours', ar: 'نَمَاذِجُ لِلْمُقَارَنَةِ', ltr: true,
      cols: [{ label: '#', w: 0.55 }, { label: 'Question', w: 3.6, size: 15 }, { label: 'A strong answer (with English)', w: 8.18, size: 17 }],
      rows: d.convModels.map((m, i) => ({ cells: [String(i + 1), m.q, { ar: m.model, sub: m.modelEn }] })),
      foot: 'Find the A, R, E and T in each answer. Which link do you usually forget?',
      notes: 'CHECK YOURSELF (2 min, main room). Read one aloud together; students say which A-R-E-T link they will add next time.',
    },
    C.selfCheckSlide(d.selfCheck || DEF_SPEAK_CHECK),
    close(C.closeSlide({ nextCode: `${code} · Writing practice room`, nextTitle: 'Decode, plan, write and check — step by step', nextAr: 'غُرْفَةُ الكِتَابَةِ', remember: d.remember || 'Remember: answer + reason + detail + another time frame — every time you speak.' }), 'Well done — you ran your own speaking practice!'),
  ];
  return { meta: M, slides };
}

// ===================================================================================================== WRITING ROOM
function writingRoom(d) {
  X.lint(d, 'room.write');
  const t = d.topic || 'A'; const code = lessonCode(t, d.n);
  const nextCode = d.n < 12 ? lessonCode(t, d.n + 1) : null;
  const M = meta(t, d.n, 'Writing', { fileTitle: d.fileTitle, title: `Writing Practice Room — ${d.short}`, arabic: `غُرْفَةُ الكِتَابَةِ — ${d.arShort}`, focus: d.focus, icon: d.icon || 'FaPenToSquare' });
  const n2 = X.words(d.Q2.model.text); if (n2 < 75 || n2 > 95) console.warn(`  ⚠ ${code} room Q2 model: ${n2} words (target 75–95)`);
  const n3 = X.words(d.Q3.model.text); if (n3 < 45 || n3 > 75) console.warn(`  ⚠ ${code} room Q3 paragraph: ${n3} words (target 45–75)`);
  const slides = [
    { type: 'title', notes: `WRITING PRACTICE ROOM AT A GLANCE — 55–60 minutes; short launch in the main room, then writing pairs in breakout rooms (each student writes their OWN text; the buddy checks), back together to compare.
0–2 Welcome · 2–5 How the room works · ROOMS: Step 1 Q1 warm-up (4) · Step 2 Decode the Q2 task (6) · Step 3 Upgrade sentences (6) · Step 4 Write Q2 + buddy swap (14) · Step 5 Spot and fix + buddy check (6) · Step 6 One Q3 paragraph (10) · back together: Check yourself (5) · Self-check + close (2).
PURPOSE: students learn a REPEATABLE PROCESS for Paper 4 (decode → plan → write → check) and write independently, with support that fades.
CONTENT: ${X.TOPICS[t].name}, Lesson ${d.n} (${d.title}, ${code}) — new writing tasks (not the Exam Practice workshop tasks).
WHERE TO WRITE: a page in the class notebook / a shared document (each student their own), or paper + a photo to the teacher. Buddies read each other’s page in Step 4 and Step 5.` },
    C.welcomeSlide(),
    {
      type: 'journey', stage: 'welcome', eyebrow: 'Today’s room plan', title: 'Six steps to a strong answer', ar: 'خُطُوَاتُ الكِتَابَةِ',
      steps: [
        { stage: 'wedo', min: 4, text: 'Step 1: Q1 form warm-up.', ar: 'الاسْتِمَارَةُ' },
        { stage: 'wedo', min: 6, text: 'Step 2: decode the question.', ar: 'افْهَمِ السُّؤَالَ' },
        { stage: 'wedo', min: 6, text: 'Step 3: upgrade your sentences.', ar: 'حَسِّنْ جُمَلَكَ' },
        { stage: 'youdo', min: 14, text: 'Step 4: write Q2, then swap with your buddy.', ar: 'اكْتُبْ' },
        { stage: 'youdo', min: 6, text: 'Step 5: spot and fix · buddy check.', ar: 'صَحِّحْ' },
        { stage: 'youdo', min: 10, text: 'Step 6: one Q3 paragraph.', ar: 'فِقْرَةٌ' },
      ],
      supportHead: 'HOW THE ROOM RUNS', support: 'Everyone writes their own answer. Your buddy reads it and checks it with the checklist. The models come at the very end — try first!',
      notes: 'MAP (1 min).',
    },
    {
      type: 'explain', stage: 'teach', min: 2, eyebrow: 'Before the rooms · how your writing room works', title: 'Write alone, check together', ar: 'كَيْفَ نَعْمَلُ',
      pointsHead: 'HOW IT WORKS',
      points: [
        'Rooms of two or three. Each person writes their OWN answer on their own page.',
        'LEADER keeps the time for each step and moves the room on.',
        'BUDDY — after each writing step, swap pages and check with the checklist (Step 5).',
        'Try every step BEFORE you look at a model. The models are at the end.',
      ],
      exHead: 'THE PROCESS YOU WILL USE IN THE EXAM',
      examples: [
        { ar: 'افْهَمْ ← خَطِّطْ ← اكْتُبْ ← رَاجِعْ', en: 'decode → plan → write → check' },
        { ar: 'نُقْطَةٌ وَاحِدَةٌ = فِقْرَةٌ وَاحِدَةٌ', en: 'one bullet point = one paragraph' },
      ],
      notes: 'HOW THE ROOM WORKS (2 min). Show where students write. Then open the rooms.',
    },
    {
      type: 'formsTable', stage: 'wedo', min: 4, eyebrow: 'Step 1 · Q1 warm-up · 4 minutes · a short answer in each box', title: d.FORM.title, ar: d.FORM.ar, ltr: true,
      cols: [{ label: '#', w: 0.55 }, { label: 'The form', w: 4.2, size: 17 }, { label: 'What to write', w: 3.2 }, { label: 'Tip', w: 4.38 }],
      rows: d.FORM.fields.map((f, i) => ({ core: !!f.core, cells: [String(i + 1), f.ar, f.en, f.tip] })),
      foot: 'Write a word or a short phrase — about yourself. Buddy check: does each answer match exactly what the box asks?',
      notes: 'STEP 1 (4 min). Personal answers, so no single model: the buddy checks meaning and spelling. Core: boxes 1–5.',
    },
    {
      type: 'explain', stage: 'teach', min: 2, eyebrow: 'Step 2 · decode the question before you write', title: 'Four moves to decode a question', ar: 'افْهَمِ السُّؤَالَ',
      pointsHead: 'DECODE IN TWO MINUTES',
      points: [
        'WHAT do I write (an email, a message, a blog) and to WHOM (a friend → informal)?',
        'NUMBER the bullet points 1–4. Each one = one short paragraph.',
        'UNDERLINE the question word in each bullet and decide the TENSE it needs.',
        'Write ONE idea (in English or Arabic) next to each bullet. That is your plan.',
      ],
      exHead: 'THE VERB IN THE BULLET TELLS YOU THE TENSE',
      examples: [
        { ar: 'مَاذَا فَعَلْتَ؟ ← فَعَلْتُ (المَاضِي)', en: 'what did you do? → past' },
        { ar: 'مَاذَا تَفْعَلُ عَادَةً؟ ← أَفْعَلُ (الحَاضِرُ)', en: 'what do you usually do? → present' },
        { ar: 'مَاذَا سَتَفْعَلُ؟ ← سَأَفْعَلُ (المُسْتَقْبَلُ)', en: 'what will you do? → future' },
        { ar: 'مَا رَأْيُكَ؟ ← فِي رَأْيِي … لِأَنَّ …', en: 'your opinion? → in my opinion … because …' },
      ],
      notes: 'STEP 2 (2 min). Missing a bullet is the most common way to lose marks in Q2 — decoding stops it.',
    },
    {
      type: 'stretchTask', stage: 'wedo', min: 2, eyebrow: 'Step 2 · today’s Question 2 · about 80–90 words', title: d.Q2.title, ar: d.Q2.ar, chip: 'Q2 · DIRECTED WRITING',
      task: d.Q2.task, checklist: d.Q2.checklist || DEF_Q2_CHECK, phrases: d.Q2.phrases, bankHead: 'USEFUL LANGUAGE',
      notes: 'STEP 2 — read the task. Then decode it on the next slide.',
    },
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'Step 2 · your turn · decode each bullet (in your book)', title: 'Decode it: question word · tense · my idea', ar: 'حَلِّلِ السُّؤَالَ', ltr: true,
      cols: [{ label: '#', w: 0.55 }, { label: 'The bullet in Arabic', w: 5.6, size: 17 }, { label: 'Question word + tense', w: 3.0 }, { label: 'My idea', w: 3.18 }],
      rows: d.Q2.rubric.map(([b, ar], i) => ({ core: i < 2, cells: [b, ar, '______________', '______________'] })),
      foot: 'Copy the two empty columns into your book and fill them in. Then check with your buddy on the next slide.',
      notes: 'STEP 2 (3 min). Students decode in pairs; Core students may use the English on the task slide.',
    },
    {
      type: 'formsTable', stage: 'feedback', min: 1, eyebrow: 'Step 2 · check your decoding', title: 'Decoded: what each bullet needs', ar: 'تَحَقَّقْ', ltr: true,
      cols: [{ label: '#', w: 0.55 }, { label: 'The bullet in Arabic', w: 5.0, size: 16 }, { label: 'Question word + tense', w: 3.4 }, { label: 'In English', w: 3.38 }],
      rows: d.Q2.rubric.map(([b, ar, en], i) => ({ cells: [b, ar, d.Q2.decode[i], en] })),
      foot: 'Did you get the tense right for every bullet? Fix your plan before you write.',
      notes: 'STEP 2 answers (1 min).',
    },
    {
      type: 'models', stage: 'teach', min: 2, eyebrow: 'Step 3 · upgrade a sentence · watch it grow', title: 'From a simple sentence to a strong one', ar: 'حَسِّنِ الجُمْلَةَ',
      rows: d.upgrade.map((u, i) => ({ ar: u.ar, en: `${['Simple', '+ detail (time, frequency, how much)', '+ a reason', '+ an opinion or a contrast'][i]}`, tip: u.en })),
      notes: 'STEP 3 (2 min). Each line adds ONE thing. Students will do the same with their own sentences in Step 4.',
    },
    {
      type: 'builder', stage: 'wedo', min: 4, eyebrow: 'Step 3 · your turn · build three strong sentences', title: 'Sentence builder: choose A or B in each column', ar: 'ابْنِ الجُمْلَةَ',
      rows: d.builder,
      answerSlide: { stage: 'feedback', min: 1, eyebrow: 'Step 3 · check your sentences', title: 'Sentence builder: answers' },
      notes: 'STEP 3 (4 min). Read the English, then choose the correct part from each column (start on the RIGHT, column 1). Buddies agree before checking the answer slide. Watch the agreement and the verb after أَنْ.',
    },
    {
      type: 'frames', stage: 'youdo', min: 3, eyebrow: 'Step 4 · write Question 2 · frames if you need them', title: 'Your frames for Question 2', ar: 'قَوَالِبُ الكِتَابَةِ',
      core: d.Q2.coreFrames, develop: d.Q2.developFrames, bank: d.Q2.bank,
      notes: 'STEP 4 support. Core: use the Core frames for every bullet. Develop: use the Develop frames only if stuck. Stretch: no frames — add a contrast and a future plan.',
    },
    {
      type: 'challenge', stage: 'youdo', min: 11, eyebrow: 'Step 4 · write, then swap · 14 minutes', title: 'Write Question 2 — bullet by bullet', ar: 'اكْتُبْ ثُمَّ بَادِلْ',
      chip: 'STEP 4 · IN YOUR ROOM', icon: '✍', head: 'Two rounds of writing', text: 'Round 1 (6 min): write bullets 1 and 2. SWAP: your buddy reads and ticks “bullet covered?”. Round 2 (6 min): write bullets 3 and 4 and your closing. SWAP again.',
      steps: ['Start with a greeting; end with a closing and a question.', 'One short paragraph per bullet — tick it off your plan.', 'Use at least one upgrade from Step 3 in every paragraph.', 'Count your words: about 80–90.'],
      routes: {
        core: 'Use the Core frames. Aim for 60–70 words, every bullet covered.',
        develop: 'Develop frames only if stuck. Add a reason and a time word to every bullet. 80–90 words.',
        stretch: 'No frames. Add a contrast (لٰكِنَّ) and a future plan. Up to 90 words, with no errors.',
      },
      phrases: d.Q2.linkers || [['أَوَّلًا · ثُمَّ · بَعْدَ ذٰلِكَ', 'first · then · after that'], ['لِأَنَّ · لِذٰلِكَ', 'because · so'], ['لٰكِنَّ · وَلٰكِنْ', 'but'], ['فِي رَأْيِي', 'in my opinion']],
      notes: 'STEP 4 (14 min). Teacher visits each room and reads ONE paragraph per student: one correction, one praise.',
    },
    {
      type: 'repair', stage: 'youdo', min: 3, eyebrow: 'Step 5 · spot and fix · mistakes students often make in this topic', title: 'Find the mistake, fix it', ar: 'اكْتَشِفِ الخَطَأَ',
      items: d.errors,
      answerSlide: { stage: 'feedback', min: 1, eyebrow: 'Step 5 · corrections', title: 'Spot and fix: corrections' },
      notes: 'STEP 5 (3 min). Pairs agree on each correction before the answer slide. Then they look for the SAME mistakes in their own Q2.',
    },
    {
      type: 'formsTable', stage: 'youdo', min: 3, eyebrow: 'Step 5 · buddy check · read your buddy’s Q2', title: 'Buddy check: five points', ar: 'رَاجِعْ مَعَ زَمِيلِكَ', ltr: true,
      cols: [{ label: 'Did the writer …', w: 6.6, size: 14 }, { label: 'Route', w: 1.4 }, { label: '✓ / ✗', w: 1.0 }, { label: 'Line / example', w: 3.33 }],
      rows: [
        { core: true, cells: ['answer ALL four bullets (one paragraph each)?', 'Core', '', ''] },
        { core: true, cells: ['use the right verb ending (I · we) and the right tense for each bullet?', 'Core', '', ''] },
        { cells: ['make adjectives agree (m. / f. / non-human plural)?', 'Develop', '', ''] },
        { cells: ['use linking words and give at least two reasons?', 'Develop', '', ''] },
        { cells: ['use past, present AND future, and give an opinion?', 'Stretch', '', ''] },
      ],
      foot: 'Give back: one WWW + one EBI. The writer fixes ONE thing straight away.',
      notes: 'STEP 5 (3 min).',
    },
    {
      type: 'explain', stage: 'teach', min: 2, eyebrow: 'Step 6 · Question 3 · how to build one strong paragraph', title: 'The paragraph formula: T · D · R · F', ar: 'كَيْفَ تَكْتُبُ فِقْرَةً',
      pointsHead: 'FOUR PARTS',
      points: ['T — TOPIC sentence: say what the paragraph is about.', 'D — DETAILS: what, when, where, with whom (two sentences).', 'R — REASON: why? (لِأَنَّ … / لِذٰلِكَ …)', 'F — FEELING or opinion, and (Stretch) a link to the future.'],
      exHead: 'THE FORMULA IN ACTION',
      examples: d.Q3.formula,
      notes: 'STEP 6 (2 min). One paragraph done well is the building block of Q3: four paragraphs like this = a full Q3 answer.',
    },
    {
      type: 'stretchTask', stage: 'youdo', min: 8, eyebrow: `Step 6 · write ONE paragraph of Question 3 · about 50–70 words`, title: d.Q3.title, ar: d.Q3.ar, chip: 'Q3 · ONE PARAGRAPH',
      task: d.Q3.task, checklist: ['T — a topic sentence.', 'D — two details (when, where, who, what).', 'R — a reason with لِأَنَّ or لِذٰلِكَ.', 'F — a feeling or opinion (Stretch: + a future sentence).', 'Buddy check: past verbs with the right ending?'],
      phrases: d.Q3.phrases, bankHead: 'USEFUL LANGUAGE FOR THIS PARAGRAPH',
      notes: `STEP 6 (8 min). Core: 3–4 sentences using the bank. Develop: the full formula. Stretch: the formula + a contrast and a future link. Homework: write the other three paragraphs. ${d.Q3.notes || ''}`,
    },
    X.model({ eyebrow: 'Check yourself · Question 2 · a strong answer', title: 'Q2: compare with a strong answer', ar: 'قَارِنْ إِجَابَتَكَ', ...d.Q2.model, notes: 'CHECK YOURSELF (3 min, main room or rooms). Find the four bullets. Then each student copies ONE phrase from the model into their own answer.' }),
    X.model({ eyebrow: 'Check yourself · Question 3 · one paragraph', title: 'Q3 paragraph: T · D · R · F in a model', ar: 'نَمُوذَجُ الفِقْرَةِ', ...d.Q3.model, notes: 'CHECK YOURSELF (2 min). Students label T, D, R and F in the model, then in their own paragraph.' }),
    C.selfCheckSlide(d.selfCheck || DEF_WRITE_CHECK),
    close(C.closeSlide(nextCode
      ? { nextCode: `${nextCode}`, nextTitle: 'The next lesson in the topic', nextAr: 'الدَّرْسُ التَّالِي', remember: d.remember || 'Remember: decode → plan → write → check. Every bullet, every time.' }
      : { nextCode: `Topic ${X.TOPICS[t].next}`, nextTitle: 'The next topic', nextAr: 'المِحْوَرُ التَّالِي', remember: d.remember || 'Remember: decode → plan → write → check.' }), 'Well done — you wrote it yourself!'),
  ];
  return { meta: M, slides };
}

module.exports = { speakingRoom, writingRoom, meta };
