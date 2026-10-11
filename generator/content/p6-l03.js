'use strict';
/* P6-L03 · Paper 2 Reading — Full Format Practice and R1–R4 Mastery — website: Pathways › Progression › P6 › P6-L03 (the R1–R4 hierarchy; three
 * full-format texts — a library notice 4 · a volunteering argument with the Q4 gap-fill 6 · a reading-vs-screens opinion with R3 analysis and the Q5
 * cross-text matching 6; the performance analysis and the reflection). Website vocabulary, cards, texts, questions, fields and exit frames used as
 * published, with waṣl alif shown without a kasra and لِكَيْ always written with its sukūn. Teacher-made: the Do Now, the Q4 / Q5 strategy I Do, the
 * Core glossaries, the R3 writing task, frames and model. */
const P = require('./p6-common');
const { q } = P;

const meta = P.meta('P6')({
  n: 3, fileTitle: 'Paper_2_Reading', chip: 'IGCSE Bridge',
  title: 'Paper 2 Reading — Full Format Practice and R1–R4 Mastery', arabic: 'الوَرَقَةُ الثَّانِيَةُ — القِرَاءَةُ: تَدْرِيبٌ كَامِلٌ وَإِتْقَانُ المُسْتَوَيَاتِ',
  focus: 'Sit three full-format Paper 2 texts with the R1–R4 ladder — main idea, facts, the writer’s choices, the exact answer — master the Q4 gap-fill (find the trigger first) and the Q5 cross-text match (spot the paraphrase).',
  icon: 'FaBookOpenReader', iconSet: 'fa6',
});

const s = P.site('P6-L03');
const B = s.blocks;
const NEXT = { nextCode: 'P6-L04', nextTitle: 'Paper 4 Q1 — Directed Writing: Mastering Form and Register', nextAr: 'الوَرَقَةُ الرَّابِعَةُ — الكِتَابَةُ المُوَجَّهَةُ' };

const slides = P.bridgeLesson('P6-L03', {
  site: s, next: NEXT,
  plan: '0–1 Welcome · 1–2 Map · 2–8 Do Now + answers · 8–9 Objectives · 9–13 Reading words · 13–16 The R1–R4 ladder · 16–20 Q4 and Q5 strategy (I Do) · 20–25 Text 1 · 25–33 Text 2 · 33–41 Text 3 · 41–50 Write an R3 answer · 50–53 Performance analysis · 53–58 Reflection + self-check · 58–60 Preparation.',
  source: 'The website P6-L03: the reading terminology (8 words), the R1–R4 hierarchy cards, three full-format texts (a library notice — Q Groups 1–2, 4 marks · a volunteering argument — R1–R4 + Q4 gap-fill, 6 marks · a reading-vs-screens opinion — R3 analysis + Q5 cross-text matching, 6 marks), the reading performance-analysis fields and the reflection frames.',
  support: `• FULL-FORMAT PRACTICE: one text at a time — read (about 2 min), answer, check. The green key-words panel on each text is a teacher-made glossary for Core students (in the real exam there is none).
• Core: Text 1 all, Text 2 questions 1–2 and 5, Text 3 questions 4–6 (Q5 matching) — then the three Q4 gap-fills in the writing task. Develop: all 16. Stretch: all 16 + a written Arabic R3 answer.
• The two big Paper 2 skills today: Q4 gap-fill = find the TRIGGER first (P5-L08); Q5 cross-text = match by MEANING (paraphrase), not by one shared word.
• Website R3 card: “R3 decides whether you score 35 or 45” — give it the most teaching time.`,
  steps: [
    ['donow', 6, 'Retrieval: reading words and the gap-fill rule.', 'اِبْدَأِ الآنَ'],
    ['teach', 7, 'Reading words and the R1–R4 ladder.', 'المُسْتَوَيَاتُ'],
    ['ido', 4, 'Watch me solve a Q4 gap-fill and a Q5 match.', 'شَاهِدْ'],
    ['wedo', 21, 'Three full-format texts.', 'النُّصُوصُ الثَّلَاثَةُ'],
    ['youdo', 12, 'Write an R3 answer · analyse your score.', 'اُكْتُبْ'],
    ['feedback', 5, 'Model, reflection and self-check.', 'قَيِّمْ'],
    ['prep', 2, 'Get ready for directed writing.', 'اِسْتَعِدَّ'],
  ],
  doNow: {
    questions: [
      q('What does المَعْنَى العَامُّ mean?', ['the general meaning (R1)', 'a factual detail', 'an unknown word'], 'Prepared at home (P6-L02).'),
      q('What does الأَدِلَّةُ النَّصِّيَّةُ mean?', ['textual evidence', 'text messages', 'a text title'], 'Prepared at home (P6-L02).'),
      q('What does اسْتِنْتَاجُ الكَلِمَاتِ المَجْهُولَةِ mean?', ['deducing unknown words', 'translating every word', 'learning new words'], 'Prepared at home (P6-L02).'),
      q('Gap-fill: صَحِيحٌ أَنَّ الدَّوْلَةَ ___ إِجْرَاءَاتٍ.', ['تَتَّخِذُ', 'تَتَّخِذَ', 'تَتَّخِذْ'], 'P5-L08: a conceded fact → -u.'),
      q('Gap-fill: يَتَطَلَّبُ الأَمْرُ أَنْ ___ الحُكُومَاتُ.', ['تَتَحَرَّكَ', 'تَتَحَرَّكُ', 'تَحَرَّكَتْ'], 'P5-L08: a trigger → -a.'),
    ],
    keyIdea: { text: 'Paper 2 climbs a ladder: R1 the main idea → R2 the facts → R3 WHY the writer chose those words → R4 the exact answer.', ar: 'المَعْنَى العَامُّ ← التَّفَاصِيلُ ← الرَّأْيُ وَالأُسْلُوبُ ← الدِّقَّةُ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P6-L02. Questions 4–5 retrieve the P5-L08 gap-fill rule — today it is tested as IGCSE Q4.',
  },
  routes: {
    core: ['I can find the main idea and prove a fact from the text.', 'I can match a Q5 statement to its text.'],
    develop: ['I can find the trigger before choosing a Q4 form.', 'I can explain a writer’s choice (R3).'],
    stretch: ['I can match by paraphrase, not by a shared word.', 'I can write an R3 answer in Arabic.'],
  },
  vocab: {
    core: ['المَعْنَى العَامُّ', 'التَّفَاصِيلُ الوَاقِعِيَّةُ', 'الرَّأْيُ وَالمَوْقِفُ وَالأُسْلُوبُ', 'الأَدِلَّةُ النَّصِّيَّةُ', 'التَّطَابُقُ عَبْرَ النُّصُوصِ', 'الدِّقَّةُ فِي الاِخْتِيَارِ'],
    forms: { 'الأَدِلَّةُ النَّصِّيَّةُ': { tag: 'pl · sg', forms: [{ l: 'sg.', ar: 'دَلِيلٌ نَصِّيٌّ' }] }, 'التَّفَاصِيلُ الوَاقِعِيَّةُ': { tag: 'pl · sg', forms: [{ l: 'sg.', ar: 'تَفْصِيلٌ' }] } },
    vocabNotes: { 0: 'The R1–R4 ladder in Arabic: المَعْنَى العَامُّ (R1) → التَّفَاصِيلُ الوَاقِعِيَّةُ (R2) → الرَّأْيُ وَالمَوْقِفُ وَالأُسْلُوبُ (R3) → الاِخْتِيَارُ وَتَحْدِيدُ المَعْلُومَاتِ (R4). Every answer needs الأَدِلَّةُ النَّصِّيَّةُ — the words in the text that prove it.' },
    bridge: [
      { ar: 'مَعْنًى', urdu: 'معنی', tr: 'maanā', en: 'meaning' },
      { ar: 'دَلِيلٌ', urdu: 'دلیل', tr: 'dalīl', en: 'Arabic: evidence · Urdu: an argument' },
      { ar: 'اسْتِنْتَاجٌ', urdu: 'استنتاج', tr: 'istintāj', en: 'deduction, inference' },
      { ar: 'مَجْهُولٌ', urdu: 'مجہول', tr: 'majhūl', en: 'unknown (grammar: passive)' },
      { ar: 'دِقَّةٌ', urdu: 'دقت', tr: 'diqqat', en: 'Arabic: accuracy · Urdu: difficulty' },
    ],
    bridgeNotes: 'URDU BRIDGE: معنی and استنتاج are shared. Three traps: Urdu دلیل = an argument, but Arabic الدَّلِيلُ = the EVIDENCE; Urdu دقت = difficulty, but Arabic الدِّقَّةُ = ACCURACY; and مجہول — in Arabic المَجْهُولُ = unknown (الكَلِمَاتُ المَجْهُولَةُ = unknown words), and in grammar the passive (المَبْنِيُّ لِلْمَجْهُولِ).',
  },
  body: [
    P.cards(B[1], {
      min: 3, eyebrow: 'Teach · surface → deep (website)', ar: 'سُلَّمُ القِرَاءَةِ', title: 'The R1–R4 ladder', leftW: 6.9,
      examples: [
        { ar: 'يُشَارُ إِلَى أَنَّ …', en: 'R1 — the thesis sentence' },
        { ar: 'تُغْلَقُ المَكْتَبَةُ فِي السَّاعَةِ الثَّامِنَةِ', en: 'R2 — a fact you can point to' },
        { ar: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', en: 'R3 — why did the writer choose this?' },
        { ar: 'أَنْ تُنَظِّمَ · لَتَغَيَّرَتْ', en: 'R4 / Q4 — the exact form' },
      ],
      notes: 'TEACH (3 min) — the website cards. R2 carries most marks; R3 separates 35 from 45. Ask: which level asks “why”? (R3).',
    }),
    {
      type: 'explain', stage: 'ido', min: 4, eyebrow: 'I do · watch me solve Q4 and Q5', title: 'Find the trigger · spot the paraphrase', ar: 'السُّؤَالُ الرَّابِعُ وَالخَامِسُ',
      pointsHead: 'Q4 GAP-FILL · Q5 CROSS-TEXT', exHead: 'FROM TEXT 2', leftW: 6.9,
      points: [
        'Q4 — cover the options. Look LEFT of the gap for the clue.',
        'anna + a noun (a fact) → the verb stays -u · an / li-kay (an aim) → -a · law → the result takes la-.',
        'Only now read the options — and reject the ones with the wrong ending.',
        'Q5 — underline the KEY IDEA of each statement, then find the text that says the same thing in other words (a paraphrase). One shared word is not enough.',
      ],
      examples: [
        { ar: 'صَحِيحٌ أَنَّ الوَقْتَ مَحْدُودٌ', en: 'anna → a fact → -un / -u' },
        { ar: 'يَتَطَلَّبُ الأَمْرُ أَنْ تُنَظِّمَ', en: 'an → an aim → -a' },
        { ar: 'لَوْ شَارَكَ …، لَتَغَيَّرَتْ', en: 'law → la- + past' },
      ],
      callout: { head: 'WEBSITE R3 CARD', text: 'R3 asks WHY the writer made a language choice — a conditional, a trigger or a concession. This decides whether you score 35 or 45.' },
      notes: 'I DO (4 min) — think aloud on the three Text 2 gap-fills BEFORE students meet the text. Then model one Q5: “Volunteering strengthens community bonds” → which text talks about community and volunteering? (Text 2) — show that Text 3 also mentions people, but not this idea.',
    },
    P.quiz(B[2], {
      min: 2, readMin: 2, seed: 51, label: 'Reading',
      glossary: [['إِعْلَانٌ', 'a notice'], ['تُغْلَقُ', 'closes, is closed'], ['يُمْنَعُ', 'is forbidden'], ['إِدْخَالُ الطَّعَامِ', 'bringing in food'], ['اسْتِعَارَةِ الكُتُبِ', 'borrowing books'], ['إِبْرَازُ البِطَاقَةِ', 'showing the card'], ['تُقَامُ', 'is held'], ['حَلْقَةُ قِرَاءَةٍ', 'a reading circle']],
      notes: 'TEXT 1 (website Q Groups 1–2, 4 marks) — R2 facts. Everyone answers all four. Note the passives (تُغْلَقُ · يُمْنَعُ · تُقَامُ) — typical of notices.',
    }),
    P.quiz(B[3], {
      min: 5, readMin: 3, seed: 53, label: 'Reading',
      glossary: [['العَمَلَ التَّطَوُّعِيَّ', 'volunteering'], ['يُقَوِّي', 'strengthens'], ['رَوَابِطَ المُجْتَمَعِ', 'community bonds'], ['مَحْدُودٌ', 'limited'], ['أُسْبُوعِيًّا', 'weekly'], ['تَصْنَعُ فَرْقًا', 'makes a difference'], ['بَرَامِجَ تَطَوُّعٍ', 'volunteering programmes'], ['الأَحْيَاءُ', 'neighbourhoods']],
      notes: 'TEXT 2 (website Q Groups 3–4, 6 marks): R1, R2, R3 and three Q4 gap-fills. Core: questions 1, 2 and 5. Develop / Stretch: all 6. After answering, students name the trigger for each gap-fill.',
    }),
    P.quiz(B[4], {
      min: 5, readMin: 3, seed: 55, label: 'Reading',
      glossary: [['يَرَى الكَاتِبُ', 'the writer believes'], ['القِرَاءَةَ الحُرَّةَ', 'free (leisure) reading'], ['تُنَمِّي الخَيَالَ', 'develops the imagination'], ['لَا يُمْكِنُ إِنْكَارُ', 'it cannot be denied'], ['الإِفْرَاطَ', 'excess'], ['يُضْعِفُ التَّرْكِيزَ', 'weakens concentration'], ['نُوَازِنَ', '(that) we balance']],
      notes: 'TEXT 3 (website Q Groups 5–6, 6 marks): three R3 questions and three Q5 cross-text matches (all three texts). Core: questions 4–6. Develop / Stretch: all 6. For R3, insist on the WHY: لَا يُمْكِنُ إِنْكَارُ أَنَّ concedes before the stronger claim.',
    }),
    {
      type: 'routes', stage: 'youdo', min: 7, eyebrow: 'You do · write an R3 answer · 7 minutes', title: 'Write: choose your route', ar: 'اُكْتُبْ',
      core: { amount: '3 gap-fills', task: 'Copy the three Text 2 gap-fill sentences with the correct form, and circle the trigger in each.', how: 'Look left of the gap: anna / an / law?' },
      develop: { amount: '2 R3 answers', task: 'In English: why does the writer of Text 3 use lā yumkinu inkāru anna? Why wa-bināʾan ʿalā mā sabaqa? Quote the Arabic.', how: 'Name the structure · say what it does · quote it.' },
      stretch: { amount: '40–50 words', task: 'In Arabic: an R3 analysis of Text 3 — the writer’s attitude and the two structures that show it.', how: 'Use the frames: يَدُلُّ … عَلَى أَنَّ … · لِذٰلِكَ أَرَى أَنَّ مَوْقِفَهُ مُتَوَازِنٌ.' },
      notes: 'YOU DO (7 min). Live feedback: Stretch students post their first sentence after 3 minutes. Check anna + noun after يَدُلُّ عَلَى.',
    },
    {
      type: 'frames', stage: 'youdo', eyebrow: 'You do · support · R3 frames and word bank', title: 'R3 frames and word bank', ar: 'قَوَالِبُ التَّحْلِيلِ',
      core: [
        { en: 'The trigger in the sentence is …', ar: 'المُسَبِّبُ فِي الجُمْلَةِ هُوَ « ______ ».' },
        { en: 'So the verb ends in -a: …', ar: 'لِذٰلِكَ يَنْتَهِي الفِعْلُ بِالفَتْحَةِ: ______ .' },
        { en: 'After ṣaḥīḥun anna the clause is a fact: …', ar: 'بَعْدَ «صَحِيحٌ أَنَّ» نَجِدُ وَاقِعًا: ______ .' },
        { en: 'law takes a la- result: …', ar: 'جَوَابُ «لَوْ» يَبْدَأُ بِاللَّامِ: ______ .' },
      ],
      develop: [
        { en: 'The writer believes that …', ar: 'يَرَى الكَاتِبُ أَنَّ ______ .' },
        { en: '“lā yumkinu inkāru anna” shows that the writer …', ar: '«لَا يُمْكِنُ إِنْكَارُ أَنَّ» يَدُلُّ عَلَى أَنَّ الكَاتِبَ ______ .' },
        { en: '“wa-bināʾan ʿalā mā sabaqa” opens …', ar: '«وَبِنَاءً عَلَى مَا سَبَقَ» تَفْتَحُ ______ .' },
        { en: 'So I think his position is balanced.', ar: 'لِذٰلِكَ أَرَى أَنَّ مَوْقِفَهُ مُتَوَازِنٌ.' },
      ],
      bank: ['أَنْ تُنَظِّمَ', 'لَتَغَيَّرَتْ', 'مَحْدُودٌ', 'يَتَطَلَّبُ', 'القِرَاءَةَ الحُرَّةَ تُنَمِّي الخَيَالَ', 'يُسَلِّمُ بِفَائِدَةِ التِّقْنِيَّةِ', 'قَبْلَ أَنْ يَرُدَّ', 'الخَاتِمَةَ', 'مُتَوَازِنٌ', 'أُحَادِيٌّ', 'الإِفْرَاطَ', 'التَّرْكِيزَ'],
      notes: 'Frames for all three routes (Core = Q4 explanation frames; Develop / Stretch = R3 frames). Word bank from Texts 2 and 3.',
    },
    {
      type: 'modelAnswer', stage: 'feedback', min: 2, eyebrow: 'Feedback · a model R3 answer (teacher-written)', title: 'What a strong R3 answer looks like', ar: 'نَمُوذَجُ الإِجَابَةِ',
      text: 'يَرَى الكَاتِبُ أَنَّ القِرَاءَةَ الحُرَّةَ تُنَمِّي الخَيَالَ أَكْثَرَ مِنَ الشَّاشَاتِ. وَعِبَارَةُ «لَا يُمْكِنُ إِنْكَارُ أَنَّ التِّقْنِيَّةَ مُفِيدَةٌ» تَدُلُّ عَلَى أَنَّهُ يُسَلِّمُ بِفَائِدَةِ التِّقْنِيَّةِ قَبْلَ أَنْ يَرُدَّ بِـ«غَيْرَ أَنَّ». ثُمَّ تَفْتَحُ «وَبِنَاءً عَلَى مَا سَبَقَ» الخَاتِمَةَ. لِذٰلِكَ أَرَى أَنَّ مَوْقِفَهُ مُتَوَازِنٌ لَا أُحَادِيٌّ.',
      en: 'The writer believes that free reading develops the imagination more than screens. The phrase “it cannot be denied that technology is useful” shows that he concedes the benefit of technology before replying with “however”. Then “based on the above” opens the conclusion. So I think his position is balanced, not one-sided.',
      find: ['the writer’s view (yarā)', 'the concession and its job', 'the conclusion connector', 'the verdict: balanced'],
      notes: 'MODEL (teacher-written on the website Text 3) — show after writing. Students find the four chips, then add ONE missing element to their own answer.',
    },
    P.fields(B[5], {
      min: 3, eyebrow: 'You do · reading performance analysis (website)', ar: 'تَحْلِيلُ الأَدَاءِ', head: 'Record', ex: 'Example', lw: 4.6, ew: 4.4,
      examples: ['R1 / R2 / R3 / R4', '…/3', '…/3', 'To find the trigger first, I will cover the options', 'To spot the paraphrase, I will underline the key idea'],
      foot: 'Total …/16. Write your Q4 and Q5 actions under your Paper 2 target.',
      notes: 'PERFORMANCE ANALYSIS (3 min) — website fields.',
    }),
    P.reflect(B[6], {
      min: 2, eyebrow: 'Feedback · reading reflection (website)', ar: 'التَّأَمُّلُ', can: 'my strongest level', next: 'my practice for the mock',
      modelCan: 'R2 — I proved every fact with the text', modelNext: 'Q4 — covering the options first',
      extra: [['أَقْوَى مُسْتَوًى عِنْدِي هُوَ ______ .', 'My strongest level is …', 'المَعْنَى العَامُّ']],
      foot: 'My Paper 2 priority — write it under your Paper 2 target.',
      notes: 'REFLECTION (2 min) — the website frames, plus one Arabic line.',
    }),
  ],
  selfCheck: [
    { route: 'core', text: 'I located the thesis (R1) and proved facts from the text (R2).' },
    { route: 'core', text: 'I matched each Q5 statement to its text by its key idea.' },
    { route: 'develop', text: 'I chose -u after ṣaḥīḥun anna and -a after a trigger in Q4.' },
    { route: 'develop', text: 'I analysed attitude, register and purpose for R3.' },
    { route: 'stretch', text: 'I wrote an R3 answer that names the structure, its job and the evidence.' },
  ],
  prep: {
    words: [['الكِتَابَةُ المُوَجَّهَةُ', 'directed writing', '—'], ['خِطَابٌ رَسْمِيٌّ', 'a formal letter', 'pl. خِطَابَاتٌ'], ['صِيغَةٌ رَسْمِيَّةٌ', 'formal register', '≠ غَيْرُ رَسْمِيَّةٍ'], ['أَتَشَرَّفُ بِمُخَاطَبَتِكُمْ', 'I have the honour of writing to you', 'formal opener'], ['وَتَفَضَّلُوا بِقَبُولِ الاحْتِرَامِ', 'yours faithfully', 'formal closer']],
    questionEn: 'How does a letter to a minister begin differently from a message to a friend?',
    questionAr: 'أَبْدَأُ الخِطَابَ الرَّسْمِيَّ بِعِبَارَةِ « ______ ».',
    homework: {
      core: 'Redo the Q4 gap-fills and Q5 matches you missed; learn the five words.',
      develop: 'Write one R3 answer on Text 2 (why ṣaḥīḥun anna?); learn the five words.',
      stretch: 'Finish your 40–50-word Arabic R3 analysis; learn the five words.',
    },
    wordsSource: 'The five words come from the website P6-L04 vocabulary (text types and register).',
  },
  remember: 'Remember: climb the ladder — R1 main idea · R2 facts · R3 WHY the writer chose it · R4 the exact answer. Q4: find the trigger first. Q5: match the meaning, not one word.',
});

module.exports = { meta, slides };
