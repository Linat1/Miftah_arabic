'use strict';
/*
 * Shared slide specs for Topic C lessons. Keeps the lesson flow identical to the approved template
 * (Welcome → Do Now → Objectives → Key words → Grammar → Quick check → I Do → We Do → You Do → Feedback → Preparation)
 * so each lesson file only supplies its website content and scaffolds.
 */

const fromSite = (item, extra = {}) => ({ prompt: item.prompt, options: item.options, answer: item.answer || 0, why: item.feedback, ...extra });
const q = (prompt, options, why, extra = {}) => ({ prompt, options, answer: 0, why, ...extra });
// "Complete: <Arabic>" → English prompt + Arabic line so the Arabic is shown at full size
function splitPrompt(item, extra = {}) {
  const m = /^([A-Za-z][^؀-ۿ]*?):\s*([؀-ۿ].*)$/.exec(item.prompt);
  const base = fromSite(item, extra);
  if (m && !extra.prompt) { base.prompt = `${m[1]}:`; base.ar = m[2]; }
  return base;
}

// Lessons are labelled only by their website code (e.g. D1-L01): no week or “lesson x of 3” numbering,
// because the number of lessons per week changes every year.
function unitMeta(u) {
  return (o) => {
    const code = `${u.code}-L${String(o.n).padStart(2, '0')}`;
    return {
      code, file: `${code}_${o.fileTitle}`,
      chip: o.chip, title: o.title, arabic: o.arabic, focus: o.focus,
      kicker: `CAMBRIDGE IGCSE ARABIC 0544  ·  ${u.kicker}  ·  ${code}`,
      lessonLine: `${code} · ${u.name}`,
      level: o.level || u.level,
      site: `${u.site} › ${code}`,
      footer: `Miftah Arabic · ${u.footer} · ${code}`,
      icon: o.icon, iconSet: o.iconSet,
    };
  };
}
const meta = unitMeta({ code: 'TC', kicker: 'ADVANCED TOPIC C', name: 'Advanced Topic C', level: 'Topic C · A1+ → B1', site: 'Advanced Topics › Topic C', footer: 'Advanced Topic C · The World Around Us' });

function titleSlide(o) {
  return {
    type: 'title',
    notes: `LESSON AT A GLANCE — planned for 56 minutes, leaving about 4 minutes for Teams delays.
${o.plan || '0–1 Welcome · 1–2 Lesson map · 2–9 Do Now + answers · 9–10 Objectives · 10–17 Key words · 17–23 Grammar · 23–25 Quick check · 25–28 I Do · 28–37 We Do · 37–49 You Do (speaking 3 + writing 9, with live feedback) · 49–54 Feedback (model, self-check, exit ticket) · 54–56 Preparation for next lesson.'}
FLEX slides are optional. Use them if the class is moving quickly; otherwise the same activities are on the website for homework.

Content source: Miftah Arabic website, ${o.siteRef || `Advanced Topics › Topic C › Lesson ${o.n} (TC-L${String(o.n).padStart(2, '0')})`}. ${o.source}
All vocabulary, grammar rules, quizzes, the listening script, the reading text, speaking prompts and model answers come from those pages, so students meet the same language in class and at home. Anything teacher-made (Core scaffolds, riddles, translations) is labelled in the notes.

SUPPORT FOR THIS CLASS (Arabic not yet secure; mixed levels):
${o.support}
• Colour code (same as all Miftah lessons): WHO = blue, MEANING = purple, ENDING = pink, PATTERN = orange, KEY WORD = teal.
• SEND “automatic doors”: lesson map, chunked tasks, read-along scripts with English, cover-the-text reading and “pass” for reading aloud are built in for everyone, so no one is singled out.

ROUTES: Core (green) = students whose Arabic is not yet secure; Develop (amber) = on track; Stretch (red) = confident. Same objective for everyone — the task changes, not the goal (EAL Guide: adapt the task, not the objective).`,
  };
}

function welcomeSlide() {
  return {
    type: 'welcome', stage: 'welcome', min: 1, eyebrow: 'Before we begin', title: 'Our online classroom', ar: 'آدَابُ الصَّفِّ',
    notes: `WELCOME (1 min) — while students join.
• Greet each student by name as they arrive: السَّلَامُ عَلَيْكُمْ. Take the register (Pastoral Tracker: attendance 0/1).
• 2-MINUTE CHECK-IN (SEND training): a private chat to any student who seemed unsettled last lesson — “Are you okay today? 👍 / 👎”.
• Point to the four expectations — brief and positive: this is our class agreement.
• Talk code: “I will always give you thinking and practice time before I ask anyone.” Reading aloud is by invitation — a student may say “pass” and you return to them later.
• Follow-up on preparation: who learnt the five words? Quick private reminder to anyone who did not (Flipped Learning: follow up every time).`,
  };
}

function journeySlide(o) {
  return {
    type: 'journey', stage: 'welcome', eyebrow: 'Today’s lesson map', title: 'Our lesson today, step by step', ar: 'خَرِيطَةُ الدَّرْسِ',
    steps: [
      { stage: 'donow', min: 7, text: 'Retrieval quiz on your own, then we check together.', ar: 'اِبْدَأِ الآنَ' },
      { stage: 'teach', min: 14, text: o.teach, ar: 'كَلِمَاتٌ وَقَوَاعِدُ' },
      { stage: 'ido', min: 3, text: 'Watch me build one sentence. Copy it into your book.', ar: 'شَاهِدْ' },
      { stage: 'wedo', min: 9, text: o.wedo || 'Build, fix and listen together.', ar: 'مَعًا' },
      { stage: 'youdo', min: 12, text: 'Speak first, then write on your route.', ar: 'وَحْدَكَ' },
      { stage: 'feedback', min: 5, text: 'Compare with a model and complete the exit ticket.', ar: 'قَيِّمْ عَمَلَكَ' },
      { stage: 'prep', min: 2, text: `Get ready at home for ${o.next}.`, ar: 'اِسْتَعِدَّ' },
    ],
    support: o.support || 'Look for the green CORE boxes: they give you transliteration, English meanings and sentence frames. You never need every word — find the key word first. You can answer in the chat, in English, or by holding up A / B / C to your camera.',
    notes: 'LESSON MAP (30 seconds) — SEND training: “absolute predictability”. Show the whole journey so students know what is coming and when they will be asked to speak or write. Point to the green box: using the Core supports is normal and expected (“automatic doors”).',
  };
}

function doNow(o) {
  return {
    type: 'mcq', stage: 'donow', min: 5, eyebrow: 'Do now · on your own · 5 minutes', title: 'Retrieval: what do you remember?', ar: 'اِبْدَأِ الآنَ',
    seed: o.seed || 0,
    questions: o.questions,
    side: { kind: 'howto', text: 'Work on your own in silence.\nWhen the timer ends, type in the chat:', chat: '1_  2_  3_  4_  5_', timer: '5 : 00' },
    answerSlide: { min: 2, eyebrow: 'Do now · answers and reasons', title: 'Let’s check — and explain why', ar: 'الإِجَابَاتُ وَالتَّعْلِيلُ' },
    answerSide: { kind: 'keyidea', text: o.keyIdea.text, ar: o.keyIdea.ar },
    notes: `DO NOW (5 min independent + 2 min going through answers).
${o.retrieves}
• Students work silently. Answers go in the chat as five letters only when the timer ends.
• Core students may answer in English and use their book.
• While they work: register, note late joiners, note anyone not attempting (Self-Management).
• Go THROUGH the answers on the next slide — ask one student (after thinking time) to explain WHY for each.`,
    answerNotes: `GO THROUGH THE ANSWERS (2 min). Reveal and ask “why?” for each (● 10s think → named student, warned in advance).
Key idea for today (bottom-right card): ${o.keyIdea.text}`,
  };
}

function objectivesSlide(objectives, routes, k, extra = '') {
  return {
    type: 'objectives', stage: 'welcome', min: 1, eyebrow: 'Lesson objectives', title: 'Objectives and success criteria', ar: 'الأَهْدَافُ وَمَعَايِيرُ النَّجَاحِ',
    objectives, routes,
    notes: `OBJECTIVES (1 min).
Left: the lesson objectives exactly as they appear on the website.
Right: the same objectives broken into three routes. Everyone starts with Core; most students reach Develop; confident students aim for Stretch. Students decide privately which route they are aiming for (● Think 10s) — revisit in Feedback.
${extra}
EAL: read the Core statements aloud, pointing to the Arabic as you say it.`,
  };
}

function keywordsSlide(o) {
  return {
    type: 'keywords', stage: 'teach', min: 7,
    text: o.text, groups: o.groups, bridge: o.bridge, bridgeTitle: o.bridgeTitle,
    notes: `KEY WORDS — HOW TO TEACH EACH GROUP (EAL pre-teaching routine, 7 min)
1. HEAR IT: say the word twice, clearly, with a gesture where possible.
2. SAY IT: choral repetition — “I say, you say” — then two volunteers.
3. SEE IT: point out the part of the word that carries today’s grammar (colour code).
4. USE IT: quick check — “Type the NUMBER of the word that means …” in the chat.
Transliteration is printed for Core students. Develop/Stretch students should cover it and read the Arabic.
FLEX groups are for fast classes or homework — every word is on the website vocabulary tab.
${o.notes || ''}`,
  };
}

function quickCheck(questions, extra = '') {
  return {
    type: 'mcq', stage: 'teach', min: 2, eyebrow: 'Check for understanding · hinge questions', title: 'Quick check', ar: 'فَحْصٌ سَرِيعٌ',
    seed: 3, questions,
    answerSlide: { eyebrow: 'Check for understanding · answers', title: 'Answers and reasons', ar: 'الإِجَابَاتُ وَالتَّعْلِيلُ' },
    notes: `CHECK FOR UNDERSTANDING (2 min) — ${extra}
● Think 20s silently → everyone types four letters in chat together on “3-2-1-go”. “Show me” alternative: A/B/C fingers to camera (EAL: show, not tell).
Read the chat: if more than a quarter of the class misses a question, re-teach that rule with its grammar slide before moving on (Live feedback: correct misconceptions immediately).
Use the results to confirm routes for the You Do task.`,
    answerNotes: 'Go through each answer. Ask “Who can build on that?” (+) — a student explains why one wrong option is wrong.',
  };
}

function morePractice(questions, label) {
  return {
    type: 'mcq', stage: 'wedo', flex: true, eyebrow: `We do · guided practice · ${label}`, title: 'More practice', ar: 'تَدْرِيبٌ إِضَافِيٌّ',
    seed: 7, questions,
    answerSlide: { eyebrow: 'We do · answers', title: 'Answers and reasons', ar: 'الإِجَابَاتُ وَالتَّعْلِيلُ' },
    notes: `WE DO — ${label} (FLEX, 2 min). If time is short these are homework on the website.
“Show me” alternative: students hold up A/B/C fingers to camera.`,
    answerNotes: 'Go through the answers; link each to the grammar rule or vocabulary card it tests.',
  };
}

function repairSlide(site, hints) {
  return {
    type: 'repair', stage: 'wedo', min: 2, eyebrow: 'We do · spot and fix', title: 'Repair the mistake', ar: 'صَحِّحِ الخَطَأَ',
    items: site.mistakes.map((m, i) => ({ ...m, hint: hints[i] })),
    answerSlide: { min: 0, eyebrow: 'We do · corrections', title: 'Fixed — and why', ar: 'التَّصْحِيحُ وَالسَّبَبُ' },
    notes: `WE DO — website common mistakes (2 min).
● 20s think: find the mistake → ↔ 30s: agree with a partner (chat DM or whisper) → ◎ share.
Core prompts are printed on each card. Stretch: explain each fix with a grammar word.`,
  };
}

function listening(site, o) {
  return {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · listening · teacher reads aloud twice', title: site.listening.title, ar: 'الاِسْتِمَاعُ',
    seed: 1,
    questions: site.listening.questions.map((x) => fromSite(x)),
    side: { kind: 'core', label: 'CORE', text: o.coreTip },
    answerSlide: { min: 0, eyebrow: 'We do · listening answers', title: 'Listening: answers', ar: 'إِجَابَاتُ الاِسْتِمَاعِ' },
    between: {
      type: 'glossed', stage: 'wedo', eyebrow: 'We do · listening support · read along (Core)', title: 'The script — read along with English', ar: 'نَصُّ الاِسْتِمَاعِ',
      lines: o.gloss,
      notes: `READ-ALONG (Core support) — show AFTER the second listening. The Arabic is the website script, line by line; the English is a teacher translation.
Read it once more while Core students follow. Annotate the words that gave each answer.
Stretch: cover the English column and translate one line aloud.`,
    },
    notes: `LISTENING (4 min) — website script. Read it aloud yourself, twice, at natural speed with pauses.
Before listening: students read the questions (● 30s). ${o.routes || 'Core: questions 1–3 only. Develop/Stretch: all 5.'}
Listen 1: just listen. Listen 2: note answers. Then chat the letters.
Support: after the second listening, show the read-along slide (Arabic + English, line by line) for Core students.

SCRIPT (read aloud):
${site.listening.script}`,
    answerNotes: 'Go through answers. For each, ask “Which Arabic words gave you the answer?” — the evidence line is under each card.',
  };
}

function speakingSlide(site, o) {
  return {
    type: 'speaking', stage: 'youdo', min: 3, eyebrow: 'You do · say it before you write it', title: site.speaking.context, ar: 'التَّحَدُّثُ',
    prompts: o.prompts, stems: o.stems,
    model: site.speaking.model.slice(0, 2).map(([who, ar, en], i) => ({ who, ar, en: (o.modelEn && o.modelEn[i]) || en })),
    notes: `SPEAKING REHEARSAL (3 min) — website speaking prompts${o.coreMade ? ' (the Core prompt is teacher-made)' : ''}. No breakout rooms (saves setup time).
Sequence: ● 10s think → ↔ 45s everyone rehearses their answer aloud with mic muted → ◎ pairs on open mic: name two students (warned in advance); A asks, B answers; the rest of the class types one follow-up question in chat (+ / ?) → ↺ one student summarises the answer they heard.
Routes: Core uses the Core prompt and stem; Develop the Develop prompts; Stretch the last prompt.
Model (website) at the bottom — read it with a confident student first. The website model continues:
${site.speaking.model.slice(2).map(([w, a, e]) => `${w}: ${a} (${e})`).join('\n')}
${o.notes || ''}`,
  };
}

function routesSlide(site, o) {
  return {
    type: 'routes', stage: 'youdo', min: 9, eyebrow: 'You do · independent practice · 9 minutes', title: 'Write: choose your route', ar: 'اُكْتُبْ',
    core: { amount: o.core.amount, task: o.core.task || site.differentiation.core, how: o.core.how },
    develop: { amount: o.develop.amount, task: o.develop.task || site.differentiation.develop, how: o.develop.how },
    stretch: { amount: o.stretch.amount, task: o.stretch.task || site.differentiation.stretch, how: o.stretch.how },
    notes: `YOU DO (9 min writing). Steer routes using the Do Now and quick-check results.
Website differentiation tasks: Core — ${site.differentiation.core} · Develop — ${site.differentiation.develop} · Stretch — ${site.differentiation.stretch}
Website writing task (Stretch): ${site.writing.prompt}
${o.notes || ''}
LIVE FEEDBACK: students post their first two sentences in the chat (or OneNote) after 3 minutes. Scan and correct misconceptions immediately — use private chat for individual corrections (Behaviour: quiet, individual).
Work with the less able: stay with Core students for the first 3 minutes; Develop/Stretch continue independently. SEND: chunk the Core task — “two sentences, then show me”.
Extension (fast finishers): the reading on the Extension slides. Pastoral: Self-Management point for students who work without prompting.`,
  };
}

function framesSlide(o) {
  return {
    type: 'frames', stage: 'youdo', eyebrow: 'You do · support · Core and Develop frames', title: 'Sentence frames and word bank', ar: 'قَوَالِبُ الجُمَلِ',
    core: o.core, develop: o.develop, bank: o.bank,
    notes: `Keep on screen during writing — Core students complete the frames on the right; Develop students use the frames on the left.
Frames and word bank use only this lesson’s website language (EAL: sentence frame + word bank scaffold; same objective, adapted task).
EAL Band A–B students: complete three frames, then copy and adapt one model sentence.`,
  };
}

function stretchSlide(site, phrases, extraCheck) {
  return {
    type: 'stretchTask', stage: 'youdo', eyebrow: 'You do · stretch · the website writing task', title: 'Stretch: the full writing task', ar: 'مُهِمَّةُ التَّحَدِّي',
    task: site.writing.prompt,
    checklist: extraCheck ? [...site.writing.checklist, extraCheck] : site.writing.checklist,
    phrases,
    notes: 'Stretch students work from this slide. Checklist = website writing checklist; phrase bank = phrases from the website model, reading text and listening script. Live feedback for Stretch: check the target structures appear and are accurate.',
  };
}

function modelSlide(site, en, find, notes) {
  return {
    type: 'modelAnswer', stage: 'feedback', min: 1, eyebrow: 'Feedback · compare with the model', title: 'What a strong answer looks like', ar: 'نَمُوذَجُ الإِجَابَةِ',
    text: site.writing.model, en, find,
    notes: `FEEDBACK (1 min) — website model answer, with an English translation for Core students.
Students find in the model (● 20s → ◎) the four items on the chips. ${notes || ''}
Then each student chooses ONE thing from the model to add to their own writing (specific, actionable feedback on the success criteria).`,
  };
}

function selfCheckSlide(items) {
  return {
    type: 'selfCheck', stage: 'feedback', min: 1, eyebrow: 'Feedback · success criteria', title: 'Check your work', ar: 'قَيِّمْ عَمَلَكَ',
    items,
    notes: `SELF-CHECK (1 min) against the website success criteria. Students tick privately, then type one WWW and one EBI in the chat (English is fine).
Teacher: one whole-class feedback point from live feedback. Pastoral: Curiosity & Growth for honest reflection and a harder target next lesson.`,
  };
}

function exitTicket(questions, total) {
  return {
    type: 'mcq', stage: 'feedback', min: 2, eyebrow: 'Exit ticket · on your own', title: 'Exit ticket: three questions', ar: 'تَذْكِرَةُ الخُرُوجِ',
    seed: 4, questions,
    bottom: { head: 'ON YOUR OWN · 2 MINUTES', text: 'Answer silently. When the timer ends, type your three letters in the chat: 1_ 2_ 3_. The other end-of-lesson questions are on the website.' },
    answerSlide: { min: 1, eyebrow: 'Exit ticket · answers', title: 'Exit ticket: answers', ar: 'إِجَابَاتُ تَذْكِرَةِ الخُرُوجِ' },
    answerBottom: { head: 'SCORE', fill: 'EEF3FA', line: 'C9D6EA', color: '1B3B6F', text: '3/3 → aim for Stretch next lesson  ·  2/3 → Develop  ·  0–1 → Core route and a quick check-in during the next Do Now.' },
    notes: `EXIT TICKET (2 min) — 3 of the website’s ${total} end-of-lesson questions (“Final self-marking check”). The rest are on the website for homework.
Anyone scoring low → Core route next lesson and a check-in during the Do Now. Record Pastoral Tracker points now.`,
    answerNotes: 'Quick reveal. Students self-mark and type their score out of 3 in the chat.',
  };
}

function readingSlides(site, glossary) {
  return [
    {
      type: 'passage', stage: 'youdo', flex: true, eyebrow: 'Extension · fast finishers or homework (Stretch)', title: site.reading.title, ar: 'القِرَاءَةُ',
      text: site.reading.text, glossary,
      notes: `EXTENSION — website reading text. For fast finishers during You Do, or Stretch homework. “You don’t need every word; find the words the question asks about.”
The green key-words panel is a teacher-made glossary so Develop students can also attempt it.
SEND reading strategy (Toolkit 1): cover the text with a piece of paper and uncover one sentence at a time.`,
    },
    {
      type: 'mcq', stage: 'youdo', flex: true, eyebrow: 'Extension · reading questions', title: 'Reading: questions', ar: 'أَسْئِلَةُ القِرَاءَةِ',
      seed: 9, questions: site.reading.questions.map((x) => fromSite(x)),
      side: { kind: 'info', head: 'READ LIKE A DETECTIVE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: '1. Read the question first.\n2. Find ONE key word from the question in the text.\n3. Read only that sentence again, then choose.' },
      answerSlide: { eyebrow: 'Extension · reading answers', title: 'Reading: answers', ar: 'إِجَابَاتُ القِرَاءَةِ' },
      notes: 'Reading questions from the website. The detective steps follow the SEND “modular reading” strategy: read one part at a time.',
      answerNotes: 'Answers from the website, with the evidence for each.',
    },
  ];
}

function prepSlide(o) {
  return {
    type: 'prep', stage: 'prep', min: 2, eyebrow: 'Preparation for next lesson · about 10 minutes', title: `Before ${o.nextCode}: get ready at home`, ar: 'التَّحْضِيرُ لِلدَّرْسِ القَادِمِ',
    next: `${o.nextCode} · ${o.nextTitle}`, words: o.words, questionEn: o.questionEn, questionAr: o.questionAr, homework: o.homework,
    notes: `PREPARATION — flipped learning (2 min to explain).
Next lesson (${o.nextCode} · ${o.nextTitle}) will spend class time USING this language, so students prepare it tonight — short, simple, easy to access (school guidance: “Simple, Short, Interesting, Relevant, Easy to access”). ${o.wordsSource}
Follow-up: the next Do Now tests two of these words (Flipped Learning: keep it short AND follow up).
Homework by route (website tasks). No internet? Students copy the five words from this slide into their book now.`,
  };
}

function closeSlide(o) {
  return {
    type: 'close', next: `${o.nextCode} · ${o.nextTitle}`, nextAr: o.nextAr, remember: o.remember || 'Remember: 5 words + 1 sentence before next lesson.',
    notes: 'CLOSE — thank students, dismiss calmly. After the lesson: complete the Pastoral Tracker (attendance, character, self-management, curiosity; demerits only for the five listed concerns). Note any student below 2/3 on the exit ticket for a Do Now check-in next lesson.',
  };
}

function gameSlide(game, o) {
  return {
    type: 'picMatch', stage: 'wedo', min: o.min || 2, flex: !!o.flex, eyebrow: `We do · picture match · website game “${game.title}”`, title: o.title || 'Match the picture to the sentence', ar: game.arabic,
    items: game.items.map((it, i) => ({ ar: it.sentence, en: o.en[i], icons: o.icons[i], link: o.link, label: o.labels ? o.labels[i] : undefined })),
    order: o.order,
    answerSlide: { min: 0, eyebrow: 'We do · picture match answers', title: 'Picture match: answers' },
    notes: `WE DO — the website’s interactive lesson game (“${game.title}”) as a whole-class picture match (2 min). The sentences are the website game sentences; the pictures are icons standing in for the website images.
● 20s: look at each picture and find ONE key word you know in each sentence → type “1_ 2_ 3_” in the chat.
This is the most accessible task in the lesson — use it to build confidence before independent work. Core students read the sentence aloud after the answer is revealed (by invitation).
${o.notes || ''}`,
  };
}

module.exports = {
  fromSite, q, splitPrompt, unitMeta, meta, titleSlide, welcomeSlide, journeySlide, doNow, objectivesSlide, keywordsSlide, quickCheck,
  morePractice, repairSlide, listening, speakingSlide, routesSlide, framesSlide, stretchSlide, modelSlide, selfCheckSlide,
  exitTicket, readingSlides, prepSlide, closeSlide, gameSlide,
};
