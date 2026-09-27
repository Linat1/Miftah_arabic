'use strict';
/*
 * F4-L12 · Review and Unit Assessment: School Life (60 marks: listening 20 · reading 10 · writing 20 · speaking 10)
 * Website: Pathways › Foundation › F4 › Lesson 12. The F4 language vault, the grammar system and ten-question grammar
 * check, the revision arcade (not marked), Part A listening (Salma at Al-Nour school · Mariam and Yusuf’s timetables;
 * 8 + 12 marks), Part B reading (Omar’s article, 10 marks), Part C writing (registration form 5 + email 70–90 words 15),
 * Part D speaking (role play 6 + topic response 4), the /60 profile with bands and the exit ticket with one F5 habit.
 * All scripts, texts, questions, marks and bands are the website’s; the full-mark email model is teacher-written.
 */
const F = require('./f4-common');
const { q } = F;

const meta = F.meta({
  n: 12, fileTitle: 'Review_and_Unit_Assessment_School_Life', chip: 'F4 Assessment',
  title: 'Review and Unit Assessment: School Life', arabic: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ — الحَيَاةُ المَدْرَسِيَّةُ',
  focus: 'Show what you can understand and produce about school life across listening, reading, writing and speaking — then turn the result into one precise next step for F5.',
  icon: 'FaClipboardCheck', iconSet: 'fa6', level: 'Foundation · end of unit F4',
});
const NEXT = { nextCode: 'F5-L01', nextTitle: 'Food and Drinks', nextAr: 'الطَّعَامُ وَالشَّرَابُ' };
const T1 = 'اِسْمِي سَلْمَى، وَأَدْرُسُ فِي مَدْرَسَةِ النُّورِ. فِي مَدْرَسَتِنَا نَحْوُ سِتِّمِئَةِ طَالِبٍ وَطَالِبَةٍ. أَدْرُسُ اللُّغَةَ العَرَبِيَّةَ وَاللُّغَةَ الإِنْجِلِيزِيَّةَ وَالرِّيَاضِيَّاتِ وَالعُلُومَ وَالتَّارِيخَ. مَادَّتِي المُفَضَّلَةُ هِيَ العُلُومُ لِأَنَّهَا مُفِيدَةٌ وَمُمْتِعَةٌ. لَا أُحِبُّ التَّارِيخَ لِأَنَّهُ طَوِيلٌ وَصَعْبٌ. يَجِبُ عَلَى الطُّلَّابِ أَنْ يَصِلُوا فِي الوَقْتِ، وَلَا يَجُوزُ لَهُمْ أَنْ يَسْتَخْدِمُوا الهَوَاتِفَ أَثْنَاءَ الدَّرْسِ.';
const T2 = 'فِي يَوْمِ الاِثْنَيْنِ تَدْرُسُ مَرْيَمُ اللُّغَةَ العَرَبِيَّةَ وَاللُّغَةَ الإِنْجِلِيزِيَّةَ، أَمَّا يُوسُفُ فَيَدْرُسُ الرِّيَاضِيَّاتِ وَالجُغْرَافِيَا. وَفِي يَوْمِ الأَرْبِعَاءِ يَدْرُسُ كِلَاهُمَا الفَنَّ، وَلَكِنَّ يُوسُفَ يَدْرُسُ العُلُومَ أَيْضًا. وَفِي يَوْمِ الخَمِيسِ يَدْرُسُ كِلَاهُمَا اللُّغَةَ العَرَبِيَّةَ، وَتَدْرُسُ مَرْيَمُ العُلُومَ بَيْنَمَا يَدْرُسُ يُوسُفُ التَّرْبِيَةَ البَدَنِيَّةَ. تَنْتَهِي دِرَاسَةُ مَرْيَمَ فِي السَّاعَةِ الثَّالِثَةِ، وَتَنْتَهِي دِرَاسَةُ يُوسُفَ فِي السَّاعَةِ الثَّالِثَةِ وَالنِّصْفِ.';
const READ = 'أَنَا عُمَرُ، وَأَدْرُسُ فِي مَدْرَسَةٍ كَبِيرَةٍ قَرِيبَةٍ مِنْ بَيْتِي. تَبْدَأُ الدِّرَاسَةُ فِي السَّاعَةِ الثَّامِنَةِ، وَتَنْتَهِي فِي السَّاعَةِ الثَّالِثَةِ. أَدْرُسُ سِتَّ مَوَادَّ، وَأُفَضِّلُ الحَاسُوبَ لِأَنَّهُ مُفِيدٌ وَمُمْتِعٌ. مُعَلِّمُ الحَاسُوبِ صَبُورٌ وَيَشْرَحُ الدَّرْسَ بِوُضُوحٍ. لَا أُحِبُّ الرِّيَاضِيَّاتِ كَثِيرًا لِأَنَّهَا صَعْبَةٌ، وَلَكِنِّي أُحَاوِلُ كُلَّ يَوْمٍ. فِي مَدْرَسَتِنَا مَكْتَبَةٌ جَيِّدَةٌ وَمَلْعَبٌ وَاسِعٌ. يَجِبُ أَنْ نَحْتَرِمَ المُعَلِّمِينَ، وَلَا يَجُوزُ الأَكْلُ فِي المَكْتَبَةِ.';

const slides = [
  F.titleSlide({
    n: 12,
    plan: '0–1 Welcome · 1–2 Lesson map · 2–6 Revision arcade (not marked) · 6–7 Assessment map · 7–22 Listening (20) · 22–32 Reading (10) · 32–48 Writing (20) · 48–56 Speaking (10, one-to-one or trusted pairs) · 56–60 Profile and F5 habit.',
    source: 'The website F4-L12 is a four-skill, 60-mark unit assessment: the F4 language vault and grammar system (with a ten-question grammar check and three sentence builders), the revision arcade (not marked), Part A listening 20 (Text 1 Salma at Al-Nour school: 8 multiple-choice · Text 2 Mariam and Yusuf’s timetables: 8 matches + 4 true / false), Part B reading 10 (Omar’s article, six questions), Part C writing 20 (registration form 5 + a 70–90-word email to a new student 15: task completion, range, accuracy), Part D speaking 10 (role play 6 + topic response 4), the /60 profile with bands and a three-prompt exit ticket.',
    support: `• Everyone sits the same 60 marks. Access arrangements: extra time, questions read aloud in English, one section on screen at a time; speaking one-to-one or in trusted pairs (it can move to the next lesson).
• If time is short: listening + reading in class; writing and speaking next lesson.
• Read each listening script twice at natural pace (website: first for the main message, second for precise detail). Do NOT show scripts or answers until the section is finished.
• Website: “These original Miftah tasks develop familiar skills used in external Arabic qualifications. They are not official examination-board papers or grade thresholds.”
• Privacy: own or fictional details are accepted in the form, the email and the speaking.`,
  }),
  F.welcomeSlide(),
  {
    type: 'journey', stage: 'welcome', eyebrow: 'Today’s lesson map', title: 'Our assessment, step by step', ar: 'خَرِيطَةُ الدَّرْسِ',
    steps: [
      { stage: 'donow', min: 4, text: 'Revision arcade (not marked).', ar: 'تَهْيِئَةٌ' },
      { stage: 'teach', min: 1, text: 'The 60-mark map.', ar: 'خُطَّةُ التَّقْيِيمِ' },
      { stage: 'ido', min: 15, text: 'Listening: 20 marks.', ar: 'الاِسْتِمَاعُ' },
      { stage: 'wedo', min: 10, text: 'Reading: 10 marks.', ar: 'القِرَاءَةُ' },
      { stage: 'youdo', min: 24, text: 'Writing 20 + speaking 10.', ar: 'الكِتَابَةُ وَالتَّحَدُّثُ' },
      { stage: 'feedback', min: 4, text: 'My profile and one next step.', ar: 'الهَدَفُ' },
      { stage: 'prep', min: 2, text: 'Get ready for F5: food.', ar: 'اِسْتَعِدَّ' },
    ],
    support: 'Start each section with the questions you find easiest. Leave a blank and come back. The arcade does not count.',
    notes: 'LESSON MAP. Website route: 01 Retrieve (revision arcade and gap check) · 02 Listen (two school-life texts, 20) · 03 Read (school article, 10) · 04 Write (form and email, 20) · 05 Speak (role play and topic response, 10) · 06 Respond (profile, feedback and next step).',
  },
  F.doNow({
    questions: [
      q('What does اِخْتِبَارٌ mean?', ['a test', 'a review', 'an answer'], 'Prepared at home (F4-L11).'),
      q('What does تَعْلِيمَاتٌ mean?', ['instructions', 'questions', 'answers'], 'Prepared at home (F4-L11).'),
      q('Complete: أُحِبُّ العُلُومَ ____ مُفِيدَةٌ.', ['لِأَنَّهَا', 'لِأَنَّهُ', 'لَكِنَّ'], 'العُلُومُ is treated as feminine: li-annahā + mufīda (website revision arcade).'),
      q('لَا يَجُوزُ اسْتِخْدَامُ الهَاتِفِ.', ['Phone use is not allowed.', 'Phone use is allowed.', 'Phone use is preferred.'], 'lā yajūzu introduces something prohibited (website revision arcade).'),
      q('In a timetable question, what does مَتَى ask for?', ['a time or day', 'a place', 'a reason'], 'matā = when (website revision arcade).'),
    ],
    keyIdea: { text: 'This warm-up does NOT count. Read every question fully — then look for the evidence.', ar: 'اِقْرَأْ · اِبْحَثْ عَنِ الدَّلِيلِ · أَجِبْ' },
    retrieves: 'Questions 1–2 test two of the assessment words prepared at home at the end of F4-L11. Questions 3–5 are from the website F4 revision arcade (reason agreement, rules, question words).',
  }),
  {
    type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Review · the F4 grammar system (website)', title: 'Four patterns to check', ar: 'نِظَامُ القَوَاعِدِ',
    cards: [
      { chip: 'VERB PERSON', color: '1D5FBF', head: 'أَنَا أَدْرُسُ · هِيَ تَدْرُسُ', big: 'هُوَ يَدْرُسُ التَّارِيخَ.', en: 'He studies history.', clue: 'The prefix shows the person.' },
      { chip: 'REASON AGREEMENT', color: 'C0386B', head: 'لِأَنَّهُ · لِأَنَّهَا', big: 'أُحِبُّ العَرَبِيَّةَ لِأَنَّهَا مُمْتِعَةٌ.', en: 'I like Arabic because it is enjoyable.', clue: 'Pronoun + adjective agree.' },
      { chip: 'RULES', color: '1E6B52', head: 'يَجِبُ أَنْ · لَا يَجُوزُ', big: 'يَجِبُ أَنْ نَصِلَ فِي الوَقْتِ.', en: 'We must arrive on time.', clue: 'Obligation + an + verb.' },
    ],
    error: { text: 'Website: do not keep the first-person form when the subject changes.', pairs: [['هِيَ تَدْرُسُ التَّارِيخَ.', 'هِيَ أَدْرُسُ التَّارِيخَ.']] },
    notes: `REVIEW (website “F4 grammar system and sentence builders”): Present-tense person — أَنَا أَدْرُسُ · هُوَ يَدْرُسُ · هِيَ تَدْرُسُ. Days and time — فِي يَوْمِ + day · عِنْدَ السَّاعَةِ + time. Reasons — لِأَنَّهُ + masculine · لِأَنَّهَا + feminine. Rules — يَجِبُ أَنْ + verb · لَا يَجُوزُ + verbal noun.
Website sentence builders (correct choices): أُفَضِّلُ العُلُومَ لِأَنَّهَا مُفِيدَةٌ. · فِي يَوْمِ الاِثْنَيْنِ عِنْدِي اللُّغَةُ العَرَبِيَّةُ عِنْدَ السَّاعَةِ التَّاسِعَةِ. · يَجِبُ أَنْ نَصِلَ فِي الوَقْتِ.
The website language vault (places and people, subjects, timetable, classroom objects and routines, opinions, rules and connectives) is for revision BEFORE the assessment — close it during each section.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Assessment map (website) · 60 marks in total', title: 'Four sections, sixty marks', ltr: true, ar: 'خُطَّةُ التَّقْيِيمِ',
    cols: [{ label: 'Marks', w: 1.4 }, { label: 'What you do', w: 7.2 }, { label: 'Section', w: 3.73 }],
    rows: [
      { core: true, cells: ['20', 'Two texts: school description (8 multiple-choice) · two timetables (8 matches + 4 true / false)', 'A · Listening'] },
      { core: true, cells: ['10', 'A short school article: detail, evidence and inference questions', 'B · Reading'] },
      { core: true, cells: ['20', 'A five-line registration form (5) · a 70–90-word email to a new student (15)', 'C · Writing'] },
      { core: true, cells: ['10', 'A short school role play (6) · one developed opinion response (4)', 'D · Speaking'] },
    ],
    notes: 'ASSESSMENT MAP (website). Website outcomes: Recall — retrieve F4 language · Understand — extract spoken and written detail · Produce — communicate clearly · Reflect — record one strength, one gap and one manageable improvement action before F5.',
  },
  {
    type: 'mcq', stage: 'ido', min: 5, eyebrow: 'Listening · Text 1 · school description · 8 marks (website)', title: 'Listening · Text 1', ar: 'الاِسْتِمَاعُ · النَّصُّ الأَوَّلُ',
    seed: 41,
    questions: [
      q('What is the school called?', ['Al-Nour', 'Al-Salam', 'Al-Amal'], 'مَدْرَسَةِ النُّورِ'),
      q('Approximately how many students attend the school?', ['600', '60', '1,600'], 'نَحْوُ سِتِّمِئَةِ طَالِبٍ وَطَالِبَةٍ'),
      q('Which subject is mentioned?', ['science', 'geography', 'music'], 'وَالعُلُومَ'),
      q('What is Salma’s favourite subject?', ['science', 'history', 'Arabic'], 'مَادَّتِي المُفَضَّلَةُ هِيَ العُلُومُ'),
      q('Why does she like it?', ['It is useful and enjoyable.', 'It is easy and short.', 'It is new and important.'], 'لِأَنَّهَا مُفِيدَةٌ وَمُمْتِعَةٌ'),
      q('Which subject does she dislike?', ['history', 'art', 'English'], 'لَا أُحِبُّ التَّارِيخَ'),
      q('What must students do?', ['arrive on time', 'bring lunch', 'wear blue'], 'أَنْ يَصِلُوا فِي الوَقْتِ'),
      q('What is not allowed during the lesson?', ['phones', 'books', 'questions'], 'الهَوَاتِفَ أَثْنَاءَ الدَّرْسِ'),
    ],
    answerSlide: { min: 0, eyebrow: 'Listening · Text 1 · answers', title: 'Text 1 · Answers', ar: 'الإِجَابَاتُ' },
    notes: `LISTENING TEXT 1 (website, 8 marks). Read twice at natural pace; students answer after the second reading.
SCRIPT: ${T1}
Private chat: 1_ 2_ 3_ 4_ 5_ 6_ 7_ 8_`,
    answerNotes: 'Mark /8.',
  },
  {
    type: 'formsTable', stage: 'ido', min: 5, eyebrow: 'Listening · Text 2 · Mariam and Yusuf · matches 1–6 (website)', title: 'Mariam, Yusuf, both or neither?', ltr: true, ar: 'النَّصُّ الثَّانِي',
    cols: [{ label: 'No.', w: 1.2 }, { label: 'Statement', w: 7.4 }, { label: 'M · Y · Both · Neither', w: 3.73 }],
    rows: [
      { core: true, cells: ['1', 'Studies Arabic on Monday', '________'] },
      { core: true, cells: ['2', 'Studies mathematics on Monday', '________'] },
      { core: true, cells: ['3', 'Studies Arabic on Thursday', '________'] },
      { cells: ['4', 'Has art on Wednesday', '________'] },
      { cells: ['5', 'Has science on Wednesday', '________'] },
      { cells: ['6', 'Has science on Thursday', '________'] },
    ],
    foot: 'Write M, Y, Both or Neither for each statement. One mark each.',
    notes: `LISTENING TEXT 2 (website, 12 marks: 8 matches + 4 true / false). Read twice — use two voices if possible.
SCRIPT: ${T2}
ANSWERS 1–6: 1 Mariam · 2 Yusuf · 3 Both · 4 Both · 5 Yusuf · 6 Mariam.`,
  },
  {
    type: 'formsTable', stage: 'ido', min: 3, eyebrow: 'Listening · Text 2 · matches 7–8 and true / false (website)', title: 'Finish Text 2', ltr: true, ar: 'النَّصُّ الثَّانِي',
    cols: [{ label: 'No.', w: 1.2 }, { label: 'Statement', w: 7.4 }, { label: 'Your answer', w: 3.73 }],
    rows: [
      { core: true, cells: ['7', 'Finishes school at 3:00 (M · Y · Both · Neither)', '________'] },
      { core: true, cells: ['8', 'Finishes school at 3:30 (M · Y · Both · Neither)', '________'] },
      { core: true, cells: ['9', 'Both students study Arabic on Thursday.', 'True · False'] },
      { cells: ['10', 'Mariam studies mathematics on Monday.', 'True · False'] },
      { cells: ['11', 'Yusuf has art and science on Wednesday.', 'True · False'] },
      { cells: ['12', 'Both students finish school at the same time.', 'True · False'] },
    ],
    foot: 'Listening total: Text 1 (8) + Text 2 (12) = 20.',
    notes: `ANSWERS 7–12: 7 Mariam · 8 Yusuf · 9 True · 10 False (Yusuf studies maths on Monday) · 11 True · 12 False (3:00 and 3:30).
Website after both texts: reveal the script, compare the exact wording with your answers, then identify one listening cue to remember (e.g. أَمَّا … فَـ introduces a contrast between two people; كِلَاهُمَا = both of them).`,
  },
  {
    type: 'passage', stage: 'wedo', min: 2, eyebrow: 'Reading · Part B · a school article (website)', title: 'Reading · My school life', ar: 'حَيَاتِي المَدْرَسِيَّةُ',
    text: READ,
    notes: 'READING TEXT (website). Website: “Read once for the overall message. Read again to underline the exact words that support each answer.” No English support on the assessment text. Keep this slide on screen while students answer (next slide).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 7, eyebrow: 'Reading · 10 marks · six questions (website)', title: 'Questions about Omar', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 43,
    questions: [
      q('Where is Omar’s school?', ['near his home', 'near the station', 'far from his home'], 'قَرِيبَةٍ مِنْ بَيْتِي'),
      q('When does school begin and end?', ['8:00–3:00', '8:00–3:30', '9:00–3:00'], 'فِي السَّاعَةِ الثَّامِنَةِ … فِي السَّاعَةِ الثَّالِثَةِ'),
      q('Which subject does he prefer, and why?', ['computing — useful and enjoyable', 'maths — it is easy', 'Arabic — it is important'], 'أُفَضِّلُ الحَاسُوبَ لِأَنَّهُ مُفِيدٌ وَمُمْتِعٌ'),
      q('What shows the computing teacher supports learning?', ['He is patient and explains clearly.', 'He is strict and gives homework.', 'He is young and funny.'], 'صَبُورٌ وَيَشْرَحُ الدَّرْسَ بِوُضُوحٍ'),
      q('Which two facilities are mentioned?', ['a library and a playground', 'a hall and a canteen', 'an office and a laboratory'], 'مَكْتَبَةٌ جَيِّدَةٌ وَمَلْعَبٌ وَاسِعٌ'),
      q('Which school-rule summary is accurate?', ['Respect teachers; do not eat in the library.', 'Do not use phones; wear a uniform.', 'Complete homework; remain silent.'], 'نَحْتَرِمَ المُعَلِّمِينَ … لَا يَجُوزُ الأَكْلُ فِي المَكْتَبَةِ'),
    ],
    answerSlide: { min: 0, eyebrow: 'Reading · answers · show AFTER the section', title: 'Reading · Answers', ar: 'الإِجَابَاتُ' },
    notes: `READING (website, 10 marks across six questions). Suggested weighting for a /10 record: questions 1, 2, 5 and 6 one mark each; questions 3 and 4 (reason and evidence) three marks each — one for the choice and two for quoting the Arabic evidence in the chat (Develop / Stretch). Core: the choice alone earns the first mark.
Access arrangement: the text is on the previous slide — flick back or share it in the chat.`,
    answerNotes: 'Mark /10. Ask Stretch students which phrase shows Omar keeps trying (وَلَكِنِّي أُحَاوِلُ كُلَّ يَوْمٍ).',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 4, eyebrow: 'Writing · Question 1 · 5 marks (website)', title: 'School registration form', ltr: true, ar: 'اِسْتِمَارَةُ التَّسْجِيلِ',
    cols: [{ label: 'Line', w: 4.2 }, { label: 'Arabic label', w: 3.4, size: 22 }, { label: 'Your answer in Arabic', w: 4.73 }],
    rows: [
      { core: true, cells: ['1 · Name', { ar: 'الاِسْمُ' }, '______________'] },
      { core: true, cells: ['2 · Age', { ar: 'العُمْرُ' }, '______________'] },
      { core: true, cells: ['3 · Nationality', { ar: 'الجِنْسِيَّةُ' }, '______________'] },
      { core: true, cells: ['4 · Subjects studied', { ar: 'المَوَادُّ' }, '______________'] },
      { core: true, cells: ['5 · Favourite subject', { ar: 'المَادَّةُ المُفَضَّلَةُ' }, '______________'] },
    ],
    foot: 'One mark for each relevant, readable line in Arabic. Own or fictional details are fine.',
    notes: `WRITING QUESTION 1 (website, 5 marks). Example answers: الاِسْمُ: مَرْيَمُ · العُمْرُ: اِثْنَتَا عَشْرَةَ سَنَةً / ١٢ · الجِنْسِيَّةُ: بِرِيطَانِيَّةٌ · المَوَادُّ: العَرَبِيَّةُ وَالعُلُومُ وَالتَّارِيخُ · المَادَّةُ المُفَضَّلَةُ: العُلُومُ.
Accept numerals for age; accept masculine or feminine nationality matching the writer.`,
  },
  {
    type: 'formsTable', stage: 'youdo', min: 12, eyebrow: 'Writing · Question 2 · 15 marks (website)', title: 'Email a new student (70–90 words)', ltr: true, ar: 'رِسَالَةٌ إِلَى طَالِبٍ جَدِيدٍ',
    cols: [{ label: 'Include all five points', w: 7.0 }, { label: 'Mark scheme (15)', w: 5.33 }],
    rows: [
      { core: true, cells: ['1 · A greeting and a short description of the school.', 'Task completion /5'] },
      { core: true, cells: ['2 · Subjects and at least one timetable detail.', 'all points, 70–90 words'] },
      { core: true, cells: ['3 · One rule with yajibu an or lā yajūzu an.', 'Range /5 — connectives, reasons,'] },
      { core: true, cells: ['4 · Your opinion with a reason.', 'times, rules, varied openings'] },
      { core: true, cells: ['5 · A suitable closing.', 'Accuracy /5 — verbs, agreement, li-annahu / li-annahā'] },
    ],
    foot: 'Website self-check: all content points · three connectives · verbs and agreement checked · a correct reason · 70–90 words.',
    notes: `WRITING QUESTION 2 (website, 15 marks: task completion 5 · range 5 · accuracy 5). Word count 70–90 Arabic words.
Guidance for each strand /5: 5 = consistently secure · 4 = secure with minor gaps · 3 = generally successful · 2 = partial · 1 = very limited · 0 = no creditable response.
A teacher-written full-mark model is on the next slide — show ONLY after students have finished.`,
  },
  {
    type: 'glossed', stage: 'feedback', min: 1, eyebrow: 'Writing · a full-mark model (teacher-written) · show AFTER writing', title: 'A full-mark email', ar: 'نَمُوذَجُ الدَّرَجَةِ الكَامِلَةِ',
    lines: [
      ['عَزِيزِي آدَمُ، أَهْلًا وَسَهْلًا فِي مَدْرَسَتِنَا! مَدْرَسَتُنَا كَبِيرَةٌ، وَفِيهَا مَكْتَبَةٌ وَمُخْتَبَرٌ.', 'greeting + school'],
      ['نَدْرُسُ ثَمَانِيَ مَوَادَّ. فِي يَوْمِ الاِثْنَيْنِ عِنْدَنَا العَرَبِيَّةُ عِنْدَ السَّاعَةِ التَّاسِعَةِ، ثُمَّ العُلُومُ.', 'subjects + timetable'],
      ['يَجِبُ أَنْ نَصِلَ فِي الوَقْتِ، وَلَا يَجُوزُ أَنْ نَسْتَعْمِلَ الهَاتِفَ فِي الدَّرْسِ.', 'two rules'],
      ['أُفَضِّلُ التَّارِيخَ لِأَنَّهُ مُمْتِعٌ، وَلَكِنَّ الرِّيَاضِيَّاتِ صَعْبَةٌ قَلِيلًا. المُعَلِّمُونَ صَبُورُونَ.', 'opinion + reason + contrast'],
      ['أَتَمَنَّى أَنْ تُحِبَّ المَدْرَسَةَ. إِلَى اللِّقَاءِ! صَدِيقُكَ، يُوسُفُ', 'closing'],
    ],
    notes: 'TEACHER-WRITTEN FULL-MARK MODEL (about 75 words). Students compare and add ONE improvement in green pen (self-assessment only — the mark stands). Point out: three connectives (ثُمَّ، وَلَكِنَّ، وَ), a masculine reason (لِأَنَّهُ مُمْتِعٌ), a feminine adjective (صَعْبَةٌ), a timetable detail and two rules with أَنْ.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 5, eyebrow: 'Speaking · role play · 6 marks (website)', title: 'You are a new student', ar: 'تَمْثِيلُ الدَّوْرِ',
    cols: [{ label: 'Prompt', w: 5.6 }, { label: 'Support', w: 6.73, size: 22 }],
    rows: [
      { core: true, cells: ['1 · Greet the teacher and say your name.', { ar: 'السَّلَامُ عَلَيْكُمْ. اِسْمِي …' }] },
      { core: true, cells: ['2 · Say two subjects you study.', { ar: 'أَدْرُسُ … وَ …' }] },
      { core: true, cells: ['3 · Say when you study one subject.', { ar: 'عِنْدِي … يَوْمَ …' }] },
      { core: true, cells: ['4 · Your favourite subject and a reason.', { ar: 'مَادَّتِي المُفَضَّلَةُ … لِأَنَّهَا …' }] },
      { core: true, cells: ['5 · State one school rule.', { ar: 'يَجِبُ أَنْ …' }] },
    ],
    ltr: true,
    foot: 'The teacher asks about your timetable, favourite subjects and one rule. Short accurate answers earn credit.',
    notes: `SPEAKING ROLE PLAY (website, 6 marks). Website: “Respond naturally. Short accurate answers can earn credit; developed answers show greater range.”
Criteria: Communication — relevant information, completed prompts and understandable meaning · Language quality — accurate core structures, some range, clear pronunciation and manageable hesitation.
ORGANISATION: one-to-one with the teacher while others finish writing, or trusted pairs with the teacher listening.`,
  },
  {
    type: 'glossed', stage: 'youdo', min: 3, eyebrow: 'Speaking · topic response · 4 marks (website)', title: 'What do you think of your school?', ar: 'مَا رَأْيُكَ فِي مَدْرَسَتِكَ؟',
    lines: [
      ['مَا رَأْيُكَ فِي مَدْرَسَتِكَ؟ هَلْ تُحِبُّ المَدْرَسَةَ؟ لِمَاذَا؟', 'The question (to a girl: raʼyuki, madrasatiki, tuḥibbīna)'],
      ['أُحِبُّ مَدْرَسَتِي لِأَنَّ المُعَلِّمِينَ صَبُورُونَ.', 'CORE · two accurate sentences and one reason'],
      ['مَدْرَسَتِي كَبِيرَةٌ، وَفِيهَا مَلْعَبٌ. أُحِبُّ العُلُومَ، وَلَكِنَّ اليَوْمَ طَوِيلٌ.', 'DEVELOP · four connected sentences with a contrast'],
      ['فِي رَأْيِي، مَدْرَسَتِي جَيِّدَةٌ لِأَنَّنِي أَتَعَلَّمُ كَثِيرًا، وَلَكِنَّ الوَاجِبَاتِ كَثِيرَةٌ أَحْيَانًا.', 'STRETCH · a balanced opinion with evidence'],
    ],
    notes: 'TOPIC RESPONSE (website, 4 marks): give a relevant answer, develop it with at least two details and justify one opinion. The route examples are teacher-written starters — hide lines 2–4 during the assessed response if you want independent answers.',
  },
  {
    type: 'formsTable', stage: 'feedback', min: 3, eyebrow: 'Results · your F4 assessment profile (website)', title: 'My F4 score profile', ltr: true, ar: 'مِلَفُّ التَّقْيِيمِ',
    cols: [{ label: 'Website bands (total /60)', w: 6.93 }, { label: 'My score', w: 2.0 }, { label: 'Section', w: 3.4 }],
    rows: [
      { core: true, cells: ['54–60 Excellent — confident, accurate school-life communication', '/20', 'A · Listening'] },
      { core: true, cells: ['42–53 Good — secure progress with a few focused gaps', '/10', 'B · Reading'] },
      { core: true, cells: ['30–41 Satisfactory — core communication in place', '/20', 'C · Writing'] },
      { core: true, cells: ['0–29 Needs support — return to selected F4 cycles', '/10', 'D · Speaking'] },
    ],
    foot: 'Website: one strength supported by evidence · one precise gap · my next action.',
    notes: `PROFILE (website “Evidence into action”): “A mark becomes useful when it leads to a specific decision and a later opportunity to improve.” Bands are the website’s. Compare percentages across sections, as the sections have different totals (20 · 10 · 20 · 10).
Website exit ticket: 1 write one accurate school sentence · 2 name the skill you improved most · 3 choose your first F5 habit: retrieve vocabulary little and often · give one reason in every opinion · check gender and agreement · extend speaking answers.`,
  },
  F.selfCheckSlide([
    { route: 'core', text: 'I can name subjects, places and classroom objects.' },
    { route: 'core', text: 'I can say what I study and when.' },
    { route: 'develop', text: 'I can give opinions with an accurate reason.' },
    { route: 'develop', text: 'I can state school rules with yajibu an / lā yajūzu.' },
    { route: 'stretch', text: 'I can write 70–90 connected words to a new student.' },
  ]),
  F.prepSlide({
    ...NEXT,
    words: [['خُبْزٌ', 'bread', 'm.'], ['أَرُزٌّ', 'rice', 'm.'], ['دَجَاجٌ', 'chicken', 'm.'], ['تُفَّاحٌ', 'apples', 'coll.'], ['مَاءٌ', 'water', 'm.']],
    questionEn: 'Choose your first F5 habit and write one accurate school sentence.',
    questionAr: 'عَادَتِي الأُولَى',
    homework: {
      core: 'Redo the website F4-L12 section with your lowest score; learn the five food words.',
      develop: 'Improve one sentence of your assessed email, then learn the five food words.',
      stretch: 'Write three sentences: I like … · I do not like … · because … (using the food words).',
    },
    wordsSource: 'F5 begins with food and drinks (website F5-L01 “Food and Drinks”, vocabulary group “Staples and proteins”).',
  }),
  F.closeSlide({ ...NEXT, remember: 'F4 complete — well done! Carry one reason in every opinion into F5.' }),
];

module.exports = { meta, slides };
