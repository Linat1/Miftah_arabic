'use strict';
/*
 * F3-L12 · Unit Assessment: My Family and Home (60 marks: listening 20 · reading 10 · writing 20 · speaking 10)
 * Website: Pathways › Foundation › F3 › Lesson 12. Assessment structure and vocabulary, the F3 language vault, Part A
 * listening (Fatima’s home in Cairo · two siblings; 16 questions + 2 heard words), Part B reading (Samir, six answers in
 * Arabic), Part C writing (five room labels + 60–80 words), Part D speaking (five questions), results /60 and one F4 target.
 * All scripts, texts, questions, mark allocations and the full-mark model are the website’s.
 */
const F = require('./f3-common');
const { q, bank, banks } = F;

const meta = F.meta({
  n: 12, fileTitle: 'Unit_Assessment_My_Family_and_Home', chip: 'F3 Assessment',
  title: 'Unit Assessment: My Family and Home', arabic: 'تَقْيِيمُ الوَحْدَةِ — عَائِلَتِي وَبَيْتِي',
  focus: 'Show what you can understand and produce about family and home across listening, reading, writing and speaking — then set one precise, evidence-based target for F4.',
  icon: 'FaClipboardCheck', iconSet: 'fa6', level: 'Foundation · end of unit F3',
});
const NEXT = { nextCode: 'F4-L01', nextTitle: 'School Subjects — What Do You Study?', nextAr: 'المَوَادُّ الدِّرَاسِيَّةُ' };
const L = banks.l12.listening;
const T1 = 'أَنَا فَاطِمَةُ، وَأَسْكُنُ مَعَ عَائِلَتِي فِي بَيْتٍ كَبِيرٍ فِي القَاهِرَةِ. فِي بَيْتِنَا سِتُّ غُرَفٍ، وَغُرْفَةُ الجُلُوسِ فِي الطَّابِقِ الأَرْضِيِّ. فِيهَا أَرِيكَةٌ بُنِّيَّةٌ، وَتِلْفَازٌ كَبِيرٌ، وَسَجَّادَةٌ زَرْقَاءُ. المَطْبَخُ أَبْيَضُ وَمُضِيءٌ. بِجَانِبِ بَيْتِنَا مَخْبَزٌ، وَمُقَابِلَهُ حَدِيقَةٌ عَامَّةٌ. أَسْكُنُ مَعَ أَبِي وَأُمِّي وَأَخِي وَأُخْتِي. أُحِبُّ حَيَّنَا لِأَنَّهُ هَادِئٌ، وَغُرْفَتِي المُفَضَّلَةُ هِيَ غُرْفَةُ النَّوْمِ لِأَنَّهَا مُرِيحَةٌ.';
const T2 = 'يُوسُفُ: أَنَا الأَخُ الأَكْبَرُ. أَنَا طَوِيلٌ وَهَادِئٌ، وَأُحِبُّ القِرَاءَةَ فِي غُرْفَتِي. مَرْيَمُ: أَنَا الأُخْتُ الصُّغْرَى. أَنَا قَصِيرَةٌ وَمُضْحِكَةٌ، وَأُحِبُّ الجُلُوسَ فِي الحَدِيقَةِ. يُوسُفُ: غُرْفَتِي زَرْقَاءُ، وَفِيهَا مَكْتَبٌ وَحَاسُوبٌ. مَرْيَمُ: غُرْفَتِي وَرْدِيَّةٌ، وَفِيهَا سَرِيرٌ أَبْيَضُ وَخِزَانَةٌ كَبِيرَةٌ. كِلَانَا يُسَاعِدُ أُمَّنَا فِي البَيْتِ.';
const READ = 'اِسْمِي سَامِرٌ، وَأَسْكُنُ مَعَ أُسْرَتِي فِي شَقَّةٍ وَاسِعَةٍ قَرِيبَةٍ مِنَ المَدْرَسَةِ. عِنْدِي أَخٌ أَصْغَرُ وَأُخْتٌ كُبْرَى. أَبِي مُعَلِّمٌ هَادِئٌ، وَأُمِّي طَبِيبَةٌ لَطِيفَةٌ. فِي شَقَّتِنَا ثَلَاثُ غُرَفِ نَوْمٍ وَغُرْفَةُ جُلُوسٍ كَبِيرَةٌ. فِي غُرْفَتِي سَرِيرٌ وَمَكْتَبٌ وَرُفُوفٌ. المَكْتَبُ تَحْتَ النَّافِذَةِ، وَالحَاسُوبُ عَلَيْهِ. أُحِبُّ غُرْفَتِي لِأَنَّهَا مُرَتَّبَةٌ وَمُضِيئَةٌ. فِي المَسَاءِ أَدْرُسُ أَوَّلًا، ثُمَّ أَجْلِسُ مَعَ عَائِلَتِي فِي غُرْفَةِ الجُلُوسِ.';

const slides = [
  F.titleSlide({
    n: 12,
    plan: '0–1 Welcome · 1–2 Lesson map · 2–6 Warm-up (not marked) · 6–7 Assessment map · 7–22 Listening (20) · 22–32 Reading (10) · 32–48 Writing (20) · 48–56 Speaking (10, one-to-one or trusted pairs) · 56–60 Results and F4 target.',
    source: 'The website F3-L12 is a four-skill, 60-mark unit assessment: Part A listening 20 (Fatima’s home in Cairo · two siblings: 8 multiple-choice + 4 speaker matches + 4 true / false + two heard words /4) · Part B reading 10 (Samir’s partly vowelled text, six answers in complete Arabic sentences) · Part C writing 20 (label five room items /5 + 60–80 words /15: task completion, range, accuracy) · Part D speaking 10 (five questions: communication /5, accuracy and fluency /5). Every script, text, question, mark and the full-mark writing model are the website’s.',
    support: `• Everyone sits the same 60 marks. Access arrangements: extra time, questions read aloud in English, one section on screen at a time; speaking one-to-one or in trusted pairs with the teacher listening (it can move to the next lesson).
• Website: “organise the assessment across manageable sessions” — if time is short, listening + reading in class; writing and speaking next lesson.
• Read each listening script twice at natural pace. Do NOT show scripts, model answers or the full-mark model until the section is finished.
• Privacy (website): own or fictional details are accepted in writing and speaking; “this webpage does not record or upload audio” — never ask students to share recordings.
• The language vault is for revision BEFORE the assessment — close it during each section.`,
  }),
  F.welcomeSlide(),
  {
    type: 'journey', stage: 'welcome', eyebrow: 'Today’s lesson map', title: 'Our assessment, step by step', ar: 'خَرِيطَةُ الدَّرْسِ',
    steps: [
      { stage: 'donow', min: 4, text: 'Warm-up (not marked).', ar: 'تَهْيِئَةٌ' },
      { stage: 'teach', min: 1, text: 'The 60-mark map.', ar: 'خُطَّةُ التَّقْيِيمِ' },
      { stage: 'ido', min: 15, text: 'Listening: 20 marks.', ar: 'الاِسْتِمَاعُ' },
      { stage: 'wedo', min: 10, text: 'Reading: 10 marks.', ar: 'القِرَاءَةُ' },
      { stage: 'youdo', min: 24, text: 'Writing 20 + speaking 10.', ar: 'الكِتَابَةُ وَالتَّحَدُّثُ' },
      { stage: 'feedback', min: 4, text: 'My score and my F4 target.', ar: 'الهَدَفُ' },
      { stage: 'prep', min: 2, text: 'Get ready for F4: school.', ar: 'اِسْتَعِدَّ' },
    ],
    support: 'Start each section with the questions you find easiest. Leave a blank and come back. The warm-up does not count.',
    notes: 'LESSON MAP. Website four-step plan: 1 Prepare (review the vault, organise sessions) · 2 Listening + Reading (receptive tasks before opening scripts) · 3 Writing + Speaking (visible criteria) · 4 Reflect (four scores + one precise F4 target).',
  },
  F.doNow({
    questions: [
      q('What does تَقْيِيمٌ mean?', ['an assessment', 'an achievement', 'a result'], 'Prepared at home (F3-L11).'),
      q('What does ثِقَةٌ mean?', ['confidence', 'progress', 'a target'], 'Prepared at home (F3-L11).'),
      ...bank(11, 'finalQuiz', [0, 2, 6]),
    ],
    keyIdea: { text: 'This warm-up does NOT count. Read every question fully — then look for the evidence.', ar: 'اِقْرَأْ · اِبْحَثْ عَنِ الدَّلِيلِ · أَجِبْ' },
    retrieves: 'Questions 1–2 test two of the assessment words prepared at home at the end of F3-L11 (website F3-L12 assessment vocabulary). Questions 3–5 are from the website F3-L11 final checkpoint (room agreement, room count, colour).',
  }),
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Assessment map (website) · 60 marks in total', title: 'Four sections, sixty marks', ltr: true, ar: 'خُطَّةُ التَّقْيِيمِ',
    cols: [{ label: 'Marks', w: 1.4 }, { label: 'What you do', w: 7.2 }, { label: 'Section', w: 3.73 }],
    rows: [
      { core: true, cells: ['20', 'Two texts: 8 multiple-choice · 4 “who?” · 4 true / false · write 2 words you heard (4)', 'A · Listening'] },
      { core: true, cells: ['10', 'Read Samir’s text · answer six questions in complete Arabic sentences', 'B · Reading'] },
      { core: true, cells: ['20', 'Label five room items (5) · write 60–80 words about home and family (15)', 'C · Writing'] },
      { core: true, cells: ['10', 'Answer five family-and-home questions: communication (5) · accuracy and fluency (5)', 'D · Speaking'] },
    ],
    notes: 'ASSESSMENT MAP (website). Website assessment vocabulary: تَقْيِيمٌ assessment · إِنْجَازٌ achievement · تَقَدُّمٌ progress · هَدَفٌ target · ثِقَةٌ confidence. Website “By the end”: understand two connected listening texts · read a partly vowelled description · label room items · write 60–80 connected words · answer five speaking questions · identify one evidence-based F4 target.',
  },
  {
    type: 'mcq', stage: 'ido', min: 5, eyebrow: 'Listening · Text 1 · Fatima’s home in Cairo · 8 marks (website)', title: 'Listening · Text 1', ar: 'الاِسْتِمَاعُ · النَّصُّ الأَوَّلُ',
    seed: 31,
    questions: L.slice(0, 8).map((x) => F.w(x)),
    answerSlide: { min: 0, eyebrow: 'Listening · Text 1 · answers', title: 'Text 1 · Answers', ar: 'الإِجَابَاتُ' },
    notes: `LISTENING TEXT 1 (website, 8 marks). Read twice at natural pace; students answer after the second reading.
SCRIPT: ${T1}
Private chat: 1_ 2_ 3_ 4_ 5_ 6_ 7_ 8_`,
    answerNotes: 'Mark /8.',
  },
  {
    type: 'mcq', stage: 'ido', min: 5, eyebrow: 'Listening · Text 2 · two siblings · 8 marks (website)', title: 'Listening · Text 2', ar: 'الاِسْتِمَاعُ · النَّصُّ الثَّانِي',
    seed: 32,
    questions: L.slice(8, 16).map((x) => F.w(x)),
    answerSlide: { min: 0, eyebrow: 'Listening · Text 2 · answers', title: 'Text 2 · Answers', ar: 'الإِجَابَاتُ' },
    notes: `LISTENING TEXT 2 (website, 8 marks: 4 speaker matches + 4 true / false). Read twice — use two voices if possible (Yusuf / Maryam).
SCRIPT: ${T2}
Private chat: 9_ 10_ … 16_`,
    answerNotes: 'Mark /8.',
  },
  {
    type: 'formsTable', stage: 'ido', min: 2, eyebrow: 'Listening · heard words · 4 marks (website)', title: 'Write two Arabic words you heard', ltr: true, ar: 'كَلِمَتَانِ سَمِعْتَهُمَا',
    cols: [{ label: 'Marks', w: 1.6 }, { label: 'What to write', w: 10.73 }],
    rows: [
      { core: true, cells: ['2', 'Word 1: any Arabic word that appears in Text 1 or Text 2, spelt so it can be recognised.'] },
      { core: true, cells: ['2', 'Word 2: a different word from the texts (for example a room, a colour or a family member).'] },
    ],
    foot: 'Type or write your two words now. Listening total: Text 1 (8) + Text 2 (8) + heard words (4) = 20.',
    notes: `HEARD WORDS (website, 4 marks — 2 per word). The website accepts any word from the two scripts, written with or without vowels; it normalises ة/ه and hamza forms (e.g. فاطمه, حديقه, اريكه). Award the marks for a recognisable word from the texts even with a minor spelling slip.
Examples of accepted words (website list): بَيْتٌ، غُرْفَةٌ، أَرِيكَةٌ، سَجَّادَةٌ، زَرْقَاءُ، المَطْبَخُ، حَدِيقَةٌ، مَكْتَبٌ، حَاسُوبٌ، سَرِيرٌ، خِزَانَةٌ، أَبِي، أُمِّي، أَخِي، أُخْتِي …`,
  },
  {
    type: 'passage', stage: 'wedo', min: 2, eyebrow: 'Reading · Part B · partly vowelled text (website)', title: 'Reading · Samir’s home', ar: 'القِرَاءَةُ',
    text: READ,
    notes: 'READING TEXT (website). Website: “Read · locate evidence · answer in Arabic.” No English support on the assessment text. Keep this slide on screen while students answer (next slide).',
  },
  {
    type: 'formsTable', stage: 'wedo', min: 8, eyebrow: 'Reading · 10 marks · answer in complete Arabic sentences (website)', title: 'Six questions about Samir', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    cols: [{ label: 'Marks', w: 1.4 }, { label: 'Question', w: 7.2, size: 22 }, { label: 'In English', w: 3.73 }],
    rows: [
      { core: true, cells: ['1', { ar: '١ مَعَ مَنْ يَسْكُنُ سَامِرٌ؟' }, 'Who does Samir live with?'] },
      { core: true, cells: ['1', { ar: '٢ مَا عَمَلُ أَبِيهِ؟' }, 'What is his father’s job?'] },
      { core: true, cells: ['2', { ar: '٣ كَمْ غُرْفَةَ نَوْمٍ فِي الشَّقَّةِ؟' }, 'How many bedrooms?'] },
      { cells: ['2', { ar: '٤ أَيْنَ المَكْتَبُ وَالحَاسُوبُ؟' }, 'Where are the desk and computer?'] },
      { cells: ['2', { ar: '٥ مَاذَا يُحِبُّ سَامِرٌ فِي بَيْتِهِ؟ وَلِمَاذَا؟' }, 'What does he like, and why?'] },
      { cells: ['2', { ar: '٦ مَاذَا يَفْعَلُ فِي المَسَاءِ؟' }, 'What does he do in the evening?'] },
    ],
    foot: 'Number your answers 1–6. Core: a short Arabic phrase from the text still earns the first mark.',
    notes: `READING (website, 10 marks). Questions 3–6 carry two marks: one for the correct information, one for a complete accurate sentence.
Access arrangement: the text is on the previous slide — flick back or share it in the chat.
Model answers are on the next slide — show ONLY after marking.`,
  },
  {
    type: 'glossed', stage: 'wedo', min: 1, eyebrow: 'Reading · website model answers · show AFTER the section', title: 'Reading: model answers', ar: 'الإِجَابَاتُ النَّمُوذَجِيَّةُ',
    lines: [
      ['١ يَسْكُنُ سَامِرٌ مَعَ أُسْرَتِهِ. · ٢ أَبُوهُ مُعَلِّمٌ.', '1 with his family · 2 a teacher'],
      ['٣ فِي الشَّقَّةِ ثَلَاثُ غُرَفِ نَوْمٍ.', '3 three bedrooms'],
      ['٤ المَكْتَبُ تَحْتَ النَّافِذَةِ، وَالحَاسُوبُ عَلَى المَكْتَبِ.', '4 desk under the window, computer on the desk'],
      ['٥ يُحِبُّ غُرْفَتَهُ لِأَنَّهَا مُرَتَّبَةٌ وَمُضِيئَةٌ.', '5 his room — tidy and bright'],
      ['٦ يَدْرُسُ أَوَّلًا، ثُمَّ يَجْلِسُ مَعَ عَائِلَتِهِ.', '6 studies first, then sits with his family'],
    ],
    notes: 'WEBSITE MODEL ANSWERS. Notice the change from “I” in the text (أَدْرُسُ، أُحِبُّ) to “he” in the answers (يَدْرُسُ، يُحِبُّ، غُرْفَتَهُ) — reward it, but at Foundation accept correct information in the “I” form for the first mark. Reading total /10.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 3, eyebrow: 'Writing · Question 1 · 5 marks (website)', title: 'Label five room items in Arabic', ltr: true, ar: 'السُّؤَالُ الأَوَّلُ',
    cols: [{ label: 'No.', w: 1.4 }, { label: 'Item (English)', w: 4.6 }, { label: 'Write the Arabic noun', w: 6.33 }],
    rows: [
      { core: true, cells: ['1', 'bed', '______________'] },
      { core: true, cells: ['2', 'wardrobe', '______________'] },
      { core: true, cells: ['3', 'desk', '______________'] },
      { core: true, cells: ['4', 'window', '______________'] },
      { core: true, cells: ['5', 'lamp', '______________'] },
    ],
    foot: 'One mark for each recognisable Arabic noun (with or without al-).',
    notes: `WRITING QUESTION 1 (website, 5 marks: “label five room items in Arabic”). The website shows a room picture; on this deck the five items are named in English. If you prefer a picture task, share a bedroom image in the chat and number five items.
ANSWERS: ١ سَرِيرٌ · ٢ خِزَانَةٌ · ٣ مَكْتَبٌ · ٤ نَافِذَةٌ · ٥ مِصْبَاحٌ.`,
  },
  {
    type: 'formsTable', stage: 'youdo', min: 13, eyebrow: 'Writing · Question 2 · 15 marks (website)', title: 'Write 60–80 words about your home and family', ltr: true, ar: 'السُّؤَالُ الثَّانِي',
    cols: [{ label: 'Include all five points', w: 7.0 }, { label: 'Mark scheme (15)', w: 5.33 }],
    rows: [
      { core: true, cells: ['1 · Describe your family and one person.', 'Task completion /5'] },
      { core: true, cells: ['2 · Describe your home and the number of rooms.', 'all five points, 60–80 words'] },
      { core: true, cells: ['3 · Describe one room: furniture, colours, positions.', 'Range /5 — connectors, adjectives,'] },
      { core: true, cells: ['4 · Mention your neighbourhood or one routine.', 'positions, possessives, reasons'] },
      { core: true, cells: ['5 · Give an opinion and a reason.', 'Accuracy /5 — agreement, -hu / -hā, spelling'] },
    ],
    foot: 'Do not copy a model. Use your own or fictional details. Leave space to improve one sentence after feedback.',
    notes: `WRITING QUESTION 2 (website, 15 marks: task completion 5 · range 5 · accuracy 5). Word count 60–80 Arabic words.
Guidance for marking each strand /5: 5 = consistently secure · 4 = secure with minor gaps · 3 = generally successful · 2 = partial · 1 = very limited · 0 = no creditable response.
Website full-mark model on the next slide — show ONLY after students have finished.`,
  },
  {
    type: 'glossed', stage: 'feedback', min: 1, eyebrow: 'Writing · the website full-mark model · show AFTER writing', title: 'A full-mark response', ar: 'نَمُوذَجُ الدَّرَجَةِ الكَامِلَةِ',
    lines: [
      ['أَسْكُنُ مَعَ عَائِلَتِي فِي بَيْتٍ مُتَوَسِّطٍ. عِنْدِي أَبٌ وَأُمٌّ وَأُخْتَانِ.', 'home + family'],
      ['أَبِي طَوِيلٌ وَهَادِئٌ، وَأُمِّي لَطِيفَةٌ وَمُتَعَاوِنَةٌ.', 'describe people (m. · f.)'],
      ['فِي بَيْتِنَا أَرْبَعُ غُرَفٍ وَمَطْبَخٌ وَحَمَّامَانِ. غُرْفَتِي المُفَضَّلَةُ هِيَ غُرْفَةُ النَّوْمِ.', 'rooms + number · favourite room'],
      ['فِيهَا سَرِيرٌ أَبْيَضُ وَمَكْتَبٌ بُنِّيٌّ بِجَانِبِ النَّافِذَةِ.', 'furniture · colours · position'],
      ['حَيُّنَا هَادِئٌ، وَقُرْبَ بَيْتِنَا حَدِيقَةٌ عَامَّةٌ.', 'neighbourhood'],
    ],
    notes: 'WEBSITE FULL-MARK MODEL (as published it ends here; an opinion + reason — e.g. أُحِبُّ بَيْتِي لِأَنَّهُ مُرِيحٌ — completes point 5). Students compare and add ONE improvement in green pen (self-assessment only — the mark stands).',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 8, eyebrow: 'Speaking · Part D · 10 marks (website)', title: 'Answer five questions', ar: 'القِسْمُ الرَّابِعُ — التَّحَدُّثُ',
    cols: [{ label: 'Question', w: 7.6, size: 22 }, { label: 'In English', w: 4.73 }],
    rows: [
      { core: true, cells: [{ ar: '١ صِفْ عَائِلَتَكَ. / صِفِي عَائِلَتَكِ.' }, 'Describe your family.'] },
      { core: true, cells: [{ ar: '٢ صِفْ شَخْصًا وَاحِدًا مِنْ عَائِلَتِكَ.' }, 'Describe one family member.'] },
      { core: true, cells: [{ ar: '٣ صِفْ بَيْتَكَ. / صِفِي بَيْتَكِ.' }, 'Describe your home.'] },
      { core: true, cells: [{ ar: '٤ مَا هِيَ غُرْفَتُكَ المُفَضَّلَةُ؟ وَلِمَاذَا؟' }, 'Your favourite room and why?'] },
      { core: true, cells: [{ ar: '٥ مَاذَا يُوجَدُ قُرْبَ بَيْتِكَ؟' }, 'What is near your home?'] },
    ],
    foot: 'Prepare cue words only (3 minutes): a direct answer, one detail, one opinion or reason — not a memorised script.',
    notes: `SPEAKING (website, 10 marks): Communication /5 (relevant, understandable answers covering family and home) · Accuracy and fluency /5 (controlled gender and reference, manageable hesitation, intelligible pronunciation).
ORGANISATION: one-to-one with the teacher while others finish writing, or trusted pairs with the teacher listening. Website 3-minute preparation timer. Female forms: صِفِي، عَائِلَتِكِ، بَيْتِكِ.`,
  },
  {
    type: 'formsTable', stage: 'feedback', min: 3, eyebrow: 'Results · record your score and set one F4 target (website)', title: 'My F3 score profile', ltr: true, ar: 'النَّتِيجَةُ وَهَدَفُ الوَحْدَةِ الرَّابِعَةِ',
    cols: [{ label: 'Guide (total /60) · teacher guide, not an exam grade', w: 6.93 }, { label: 'My score', w: 2.0 }, { label: 'Section', w: 3.4 }],
    rows: [
      { core: true, cells: ['54–60 Excellent — secure F3 foundation', '/20', 'A · Listening'] },
      { core: true, cells: ['42–53 Good — ready for F4 with one practice target', '/10', 'B · Reading'] },
      { core: true, cells: ['30–41 Satisfactory — targeted F3 retrieval early in F4', '/20', 'C · Writing'] },
      { core: true, cells: ['Below 30 — catch-up on the lowest skill before F4', '/10', 'D · Speaking'] },
    ],
    foot: 'Website reflection frames: anā fakhūr(a) bi- … (I am proud of) · taqaddamtu fī … (I improved in) · hadafī fī F4 … (my F4 target).',
    notes: `RESULTS (website “Results and F4 target”): total /60 and an evidence-based reflection — one achievement with evidence, one difficulty and one precise F4 target:
أَنَا فَخُورٌ / فَخُورَةٌ بِـ… · تَقَدَّمْتُ فِي… · هَدَفِي فِي F4 هُوَ…
The bands are a teacher guide in line with the F1 and F2 assessments (the website totals the four sections but does not print bands). Compare percentages across sections, as the sections have different totals (20 · 10 · 20 · 10).`,
  },
  F.selfCheckSlide([
    { route: 'core', text: 'I can name family members, rooms and furniture.' },
    { route: 'core', text: 'I can say what is in my home and where it is.' },
    { route: 'develop', text: 'I can describe people and rooms with accurate agreement.' },
    { route: 'develop', text: 'I can find exact evidence in a text and answer in Arabic.' },
    { route: 'stretch', text: 'I can write 60–80 connected words with reasons.' },
  ]),
  F.prepSlide({
    ...NEXT,
    words: [['الرِّيَاضِيَّاتُ', 'mathematics', 'f.'], ['العُلُومُ', 'science', 'f.'], ['التَّارِيخُ', 'history', 'm.'], ['الجُغْرَافِيَا', 'geography', 'f.'], ['الفَنُّ', 'art', 'm.']],
    questionEn: 'Write your F4 target: one skill, one repeated action, one check date.',
    questionAr: 'هَدَفِي …',
    homework: {
      core: 'Redo the website F3-L12 section with your lowest score; learn the five school subjects.',
      develop: 'Improve one sentence of your assessed writing, then learn the five subjects.',
      stretch: 'Write three sentences: I study … · I like … because … (using the five subjects).',
    },
    wordsSource: 'F4 begins with school subjects (website F4-L01 “School Subjects — What Do You Study?”); the لِأَنَّهُ / لِأَنَّهَا notes are the website’s.',
  }),
  F.closeSlide({ ...NEXT, remember: 'F3 complete — well done! Learn 5 school subjects for F4.' }),
];

module.exports = { meta, slides };
