'use strict';
/*
 * D2-L12 · Review and Unit Assessment (60 marks: listening 20 · reading 10 · writing 20 · speaking 10)
 * Website: Pathways › Development › D2 › D2-L12 (PHP page; data extracted to site-data/d2-l12.json).
 * Grammar laboratory (practice), the four-skill 60-mark profile, reflection and next-unit readiness.
 */
const D = require('./d-common');
const { fromSite, splitPrompt } = D;
const A = require('../site-data/d2-l12.json');

const meta = D.meta('D2')({
  n: 12, fileTitle: 'Review_and_Unit_Assessment', chip: 'D2 Assessment',
  title: 'Review and Unit Assessment', arabic: 'المُرَاجَعَةُ وَالتَّقْيِيمُ',
  focus: 'Bring together personality, relationships, clothes, appearance, comparison and style — revise the D2 grammar, then show it across a 60-mark four-skills profile and set one precise next target.',
  icon: 'FaFlagCheckered', iconSet: 'fa6', level: 'Development · end of unit D2',
});
const NEXT = { nextCode: 'D3-L01', nextTitle: 'Jobs and Professions (D3)', nextAr: 'الوَظَائِفُ وَالمِهَنُ' };
const sp = (x) => splitPrompt(x);

const slides = [
  D.titleSlide({
    n: 12,
    siteRef: 'Pathways › Development › D2 People, Relationships and Style › D2-L12',
    plan: '0–1 Welcome · 1–2 Lesson map · 2–8 Grammar laboratory (not marked) · 8–9 Assessment map · 9–20 Listening (20: two texts) · 20–30 Reading (10) · 30–44 Writing (20: profile form + article) · 44–53 Speaking (10: portrait + conversation, pairs / one-to-one) · 53–56 Score profile, strength and next target.',
    source: 'The website D2-L12 is a 60-mark Development profile (not an external exam paper): listening 20 (a friend and her style · buying a coat — 12 questions) · reading 10 (Salma’s portrait) · writing 20 (person-profile form 5 + article or email 15: Task 5 · Range 5 · Accuracy 5) · speaking 10 (Communication 5 · Accuracy and range 5). The grammar laboratory (12) is practice. Every item, script, text and mark allocation is the website’s.',
    support: `• Everyone sits the same 60 marks. Access arrangements: extra time, questions read aloud in English, one section on screen at a time; speaking one-to-one or in trusted pairs (it can move to the next lesson).
• Listening: the website has 12 listening questions and reports the section out of 20. Mark each question out of 1, then scale ×5/3 and round (12/12 = 20) — or simply record /12 and convert at the end.
• Scripts: read each text twice at natural pace if the website audio is unavailable; scripts are in the slide notes — do not show them before the section is submitted.
• Answer slides follow each part — mark live, or hide them and mark later.`,
  }),
  D.welcomeSlide(),
  {
    type: 'journey', stage: 'welcome', eyebrow: 'Today’s lesson map', title: 'Our assessment, step by step', ar: 'خَرِيطَةُ الدَّرْسِ',
    steps: [
      { stage: 'donow', min: 6, text: 'Grammar laboratory (not marked).', ar: 'المُرَاجَعَةُ' },
      { stage: 'teach', min: 1, text: 'The 60-mark map.', ar: 'خُطَّةُ التَّقْيِيمِ' },
      { stage: 'ido', min: 11, text: 'Listening: 20 marks.', ar: 'الاِسْتِمَاعُ' },
      { stage: 'wedo', min: 10, text: 'Reading: 10 marks.', ar: 'القِرَاءَةُ' },
      { stage: 'youdo', min: 23, text: 'Writing 20 + speaking 10.', ar: 'الكِتَابَةُ وَالتَّحَدُّثُ' },
      { stage: 'feedback', min: 3, text: 'My profile, my strength, my target.', ar: 'الهَدَفُ' },
      { stage: 'prep', min: 2, text: 'Get ready for the next unit.', ar: 'اِسْتَعِدَّ' },
    ],
    support: 'Each section starts with the easier questions. Leave a blank and come back. The grammar laboratory does not count.',
    notes: 'LESSON MAP. Website structure: 01 Language vault · 02 Grammar laboratory · 03 60-mark profile · 04 Listening · 05 Reading · 06 Writing · 07 Speaking · 08 Reflection.',
  },
  D.doNow({
    seed: 12,
    questions: [0, 1, 2, 4, 7].map((i) => sp(A.grammar[i])),
    keyIdea: { text: 'This warm-up does NOT count. It samples D2: agreement · object pronouns · this (f.) · who (f.) · dual eyes.', ar: 'مُرَاجَعَةٌ ثُمَّ تَقْيِيمٌ' },
    retrieves: 'Five of the twelve website grammar-laboratory questions (D2-L01, L02, L03, L06). Students scoring below 3/5 revise the D2-L11 personality bank before writing.',
  }),
  {
    type: 'mcq', stage: 'donow', flex: true, eyebrow: 'Revision · website grammar laboratory · FLEX (not marked)', title: 'Grammar laboratory', ar: 'مُخْتَبَرُ القَوَاعِدِ',
    seed: 24,
    questions: [3, 5, 6, 8, 9, 11].map((i) => sp(A.grammar[i])),
    answerSlide: { min: 0, eyebrow: 'Revision · answers', title: 'Grammar laboratory: answers', ar: 'الإِجَابَاتُ' },
    notes: 'FLEX — six more website grammar-laboratory questions (comparison, evidence, balanced opinion, superlative, لِأَنَّنَا, developed answer).',
  },
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Assessment map (website) · 60 marks in total', title: 'Your 60-mark D2 profile', ar: 'خُطَّةُ التَّقْيِيمِ',
    cols: [{ label: 'Marks', w: 1.4 }, { label: 'What you do', w: 7.2 }, { label: 'Skill', w: 3.73 }],
    rows: [
      { core: true, cells: ['20', 'Two texts, each heard twice: a friend and her style · buying a coat (12 questions)', '🎧 Listening · الاِسْتِمَاعُ'] },
      { core: true, cells: ['10', 'Salma’s portrait: ten questions — evidence, reference, inference', '📖 Reading · القِرَاءَةُ'] },
      { core: true, cells: ['20', 'Person-profile form (5) · article or email, 100–120 words (15)', '✍️ Writing · الكِتَابَةُ'] },
      { core: true, cells: ['10', 'Portrait + topic conversation — cue words only', '🎙️ Speaking · التَّحَدُّثُ'] },
    ],
    notes: 'ASSESSMENT MAP (website “Your 60-mark D2 profile”).',
  },
  {
    type: 'mcq', stage: 'ido', min: 5, eyebrow: 'Listening · Text 1 · heard twice (website)', title: 'Text 1 · A friend and her style', ar: 'الاِسْتِمَاعُ (١)',
    seed: 31,
    questions: A.listen1.map((x) => fromSite(x)),
    side: { kind: 'info', head: 'TWO PEOPLE', text: 'Huda speaks about Salma.\nChat: 1_ 2_ 3_ 4_ 5_ 6_' },
    answerSlide: { min: 0, eyebrow: 'Listening · Text 1 · answers', title: 'Text 1 · Answers', ar: 'الإِجَابَاتُ' },
    notes: `LISTENING TEXT 1 (website). Students read the questions (30 s). Read the script twice.
SCRIPT: ${A.scripts[0]}
Website note: Q5 “How does the speaker’s style differ?” — Huda prefers brighter colours (أَلْوَانًا أَكْثَرَ زَهَاءً).`,
    answerNotes: 'Mark /6.',
  },
  {
    type: 'mcq', stage: 'ido', min: 5, eyebrow: 'Listening · Text 2 · heard twice (website)', title: 'Text 2 · Buying a coat', ar: 'الاِسْتِمَاعُ (٢)',
    seed: 32,
    questions: A.listen2.map((x) => fromSite(x)),
    side: { kind: 'info', head: 'IN A SHOP', text: 'Listen past “however” (maʿa dhālika).\nChat: 1_ 2_ 3_ 4_ 5_ 6_' },
    answerSlide: { min: 0, eyebrow: 'Listening · Text 2 · answers', title: 'Text 2 · Answers', ar: 'الإِجَابَاتُ' },
    notes: `LISTENING TEXT 2 (website). Read twice; two voices if possible.
SCRIPT: ${A.scripts[1]}
Listening total: /12 → ×5/3 = /20 (website profile).`,
    answerNotes: 'Mark /6. Students add up Listening /12 and convert to /20 (12 → 20, 9 → 15, 6 → 10, 3 → 5).',
  },
  {
    type: 'passage', stage: 'wedo', min: 3, eyebrow: 'Reading · 10 marks · Salma’s portrait (website)', title: 'Reading · Salma, my close friend', ar: 'نَصُّ القِرَاءَةِ',
    text: A.readingText,
    notes: 'READING TEXT (website). Read once for the overall picture, then return for evidence, reference and contrast. No English support on assessment texts.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'Reading · questions 1–5 · 5 marks (website)', title: 'Reading · Questions 1–5', ar: 'القِرَاءَةُ (١–٥)',
    seed: 34,
    questions: A.reading.slice(0, 5).map((x) => fromSite(x)),
    side: { kind: 'info', head: 'FIND THE EVIDENCE', text: 'Go back to the text for every answer.\nChat: 1_ 2_ 3_ 4_ 5_' },
    answerSlide: { min: 0, eyebrow: 'Reading · questions 1–5 · answers', title: 'Reading 1–5 · Answers', ar: 'الإِجَابَاتُ' },
    notes: 'READING QUESTIONS 1–5 (website).',
    answerNotes: 'Mark /5.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'Reading · questions 6–10 · 5 marks (website)', title: 'Reading · Questions 6–10', ar: 'القِرَاءَةُ (٦–١٠)',
    seed: 35,
    questions: A.reading.slice(5).map((x, i) => fromSite(x, { n: i + 6 })),
    side: { kind: 'info', head: 'FIND THE EVIDENCE', text: 'Q7–8: find the exact words.\nChat: 6_ 7_ 8_ 9_ 10_' },
    answerSlide: { min: 0, eyebrow: 'Reading · questions 6–10 · answers', title: 'Reading 6–10 · Answers', ar: 'الإِجَابَاتُ' },
    notes: 'READING QUESTIONS 6–10 (website). Reading total /10.',
    answerNotes: 'Mark /5. Students add up Reading /10.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 14, eyebrow: 'Writing · 20 marks · profile form (5) + article or email (15) (website)', title: 'Writing assessment', ar: 'تَقْيِيمُ الكِتَابَةِ',
    cols: [{ label: 'Question 1 · person profile (5)', w: 4.8, size: 22 }, { label: 'Question 2 · article or email, 100–120 words (15)', w: 7.53 }],
    rows: [
      { core: true, cells: [{ ar: 'الاِسْمُ: ______' }, 'About a person: your relationship, their appearance and style'] },
      { core: true, cells: [{ ar: 'صِفَتَانِ شَخْصِيَّتَانِ: ______' }, 'Include: a comparison · evidence · a reasoned opinion'] },
      { core: true, cells: [{ ar: 'دَلِيلٌ عَلَى صِفَةٍ: ______' }, 'Task /5 — all content points developed'] },
      { core: true, cells: [{ ar: 'وَصْفُ المَظْهَرِ: ______' }, 'Range /5 — varied grammar and vocabulary'] },
      { core: true, cells: [{ ar: 'الأُسْلُوبُ فِي المَلَابِسِ: ______' }, 'Accuracy /5 — agreement, reference and spelling'] },
    ],
    foot: 'Check before you finish: m. / f. adjectives · he / she all the way · hair masc., eyes dual · connectors.',
    notes: `WRITING (website, 20 marks). Three routes (website): type, write or draw on screen, or on paper.
MARK SCHEME (website): Form /5 — one mark per field completed in Arabic. Article /15 — Task 5 · Range 5 · Accuracy 5.
Core access: the D2-L11 frames may be used for Question 1 only. Teacher model on the next slide — show ONLY after writing.`,
  },
  {
    type: 'glossed', stage: 'feedback', min: 1, eyebrow: 'Writing · a strong answer (website D2-L11 model) · show AFTER writing', title: 'What a strong article includes', ar: 'نَمُوذَجُ إِجَابَةٍ قَوِيَّةٍ',
    lines: [
      ['سَأَكْتُبُ عَنْ صَدِيقَتِي سَلْمَى الَّتِي أَعْرِفُهَا مُنْذُ خَمْسِ سَنَوَاتٍ.', 'person + relationship · relative clause'],
      ['هِيَ مُتَوَسِّطَةُ القَامَةِ، وَلَهَا شَعْرٌ قَصِيرٌ وَمُجَعَّدٌ، وَتَرْتَدِي عَادَةً مَلَابِسَ بَسِيطَةً وَمُحْتَشِمَةً.', 'appearance + style'],
      ['سَلْمَى وَدُودَةٌ وَصَادِقَةٌ، وَأَثِقُ بِهَا لِأَنَّهَا تَسْتَمِعُ إِلَيَّ وَتَقُولُ الحَقَّ.', 'qualities + evidence'],
      ['أُسْلُوبُهَا أَكْثَرُ عَصْرِيَّةً مِنْ أُسْلُوبِي، بَيْنَمَا أُفَضِّلُ المَلَابِسَ العَمَلِيَّةَ.', 'comparison + contrast'],
      ['فِي رَأْيِي، أَفْضَلُ صِفَةٍ فِيهَا هِيَ صِدْقُهَا، لِأَنَّهُ يَجْعَلُ عَلَاقَتَنَا قَوِيَّةً.', 'reasoned opinion'],
    ],
    notes: 'MODEL: the website D2-L11 writing model (the assessment page prints no model). Students compare and add ONE improvement in green pen (self-assessment only — the mark stands).',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 9, eyebrow: 'Speaking · 10 marks · portrait + topic conversation (website)', title: 'Speaking assessment', ar: 'تَقْيِيمُ التَّحَدُّثِ',
    cols: [{ label: 'Prepare concise cues (website)', w: 7.1, size: 20 }, { label: 'Marked for', w: 5.23 }],
    rows: [
      { core: true, cells: ['1 · Describe a person and your relationship.', 'Communication /5 — clear, developed, relevant'] },
      { core: true, cells: ['2 · Give appearance and clothing detail.', 'Accuracy and range /5 — agreement, reference, variety'] },
      { core: true, cells: ['3 · Give personality evidence.', ''] },
      { core: true, cells: ['4 · Compare your styles.', ''] },
      { core: true, cells: ['5 · Give and justify an opinion.', ''] },
    ],
    foot: 'Cue words only — one or two per stage (D2-L10). Then answer the teacher’s follow-up questions (D2-L09).',
    notes: `SPEAKING (website, 10 marks: Communication /5 · Accuracy and range /5).
Follow-up questions for the conversation part: مَنْ يَدْعَمُكَ؟ · كَيْفَ تَتَفَاهَمَانِ؟ · مَا أَهَمُّ: الرَّاحَةُ أَمِ الأَنَاقَةُ؟ · أَيُّهُمَا تُفَضِّلُ وَلِمَاذَا؟
ORGANISATION: one-to-one (others finish writing) or trusted pairs with the teacher listening.`,
  },
  {
    type: 'formsTable', stage: 'feedback', min: 2, eyebrow: 'Results · record your profile and set one target (website reflection)', title: 'My D2 score profile', ar: 'سَجِّلْ دَرَجَتَكَ',
    cols: [{ label: 'Guide (total /60) · teacher guide, not an exam grade', w: 6.93 }, { label: 'My score', w: 2.0 }, { label: 'Skill', w: 3.4 }],
    rows: [
      { core: true, cells: ['54–60 Excellent — secure D2 foundation', '/20', '🎧 Listening'] },
      { core: true, cells: ['42–53 Good — ready to move on with one practice target', '/10', '📖 Reading'] },
      { core: true, cells: ['30–41 Satisfactory — targeted D2 retrieval early next unit', '/20', '✍️ Writing'] },
      { core: true, cells: ['Below 30 — catch-up on the lowest skill first', '/10', '🎙️ Speaking'] },
    ],
    foot: 'Write in your book (website reflection): one secure language feature · one precise next action.',
    notes: `SCORE PROFILE (website “Evidence · target · transfer — D2 reflection”). The bands are a teacher guide in line with the other units (the website totals the four scores but prints no bands).
A precise action = rule + task + frequency, e.g. “Adjective agreement: five he / she pairs every two days; check in two weeks.”`,
  },
  D.selfCheckSlide([
    { route: 'core', text: 'I can describe a person’s personality with m. / f. adjectives.' },
    { route: 'core', text: 'I can describe clothes with this / this (f.) and colours.' },
    { route: 'develop', text: 'I can compare people and clothes (…-er than, more … than).' },
    { route: 'develop', text: 'I can describe appearance: he / she has …, hair, eyes.' },
    { route: 'stretch', text: 'I can give a balanced opinion with evidence.' },
  ]),
  D.prepSlide({
    ...NEXT,
    words: [['مُرَاجَعَةٌ', 'review', 'D2-L11'], ['نُقْطَةُ قُوَّةٍ', 'a strength', ''], ['هَدَفٌ', 'a target', 'pl. أَهْدَافٌ'], ['أُحَسِّنُ', 'I improve', 'he: يُحَسِّنُ'], ['أَتَدَرَّبُ', 'I practise', 'he: يَتَدَرَّبُ']],
    questionEn: 'Write your target for the next unit: one skill, one repeated action, one check date.',
    questionAr: 'هَدَفِي …',
    homework: {
      core: 'Redo the D2-L12 grammar laboratory on the website; relearn any adjective pair you got wrong.',
      develop: 'Redo the assessment section with your lowest score on the website.',
      stretch: 'Write your D2 reflection (one secure feature + one precise next action) in Arabic.',
    },
    wordsSource: 'Reflection words (the next Development unit starts with its own website preparation). The website’s next Development unit is D3, starting with jobs and professions.',
  }),
  D.closeSlide({ ...NEXT, remember: 'D2 complete — well done! Keep your target visible.' }),
];

module.exports = { meta, slides };
