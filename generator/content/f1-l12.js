'use strict';
/*
 * F1-L12 · F1 Review & Assessment (60 marks: A 30 · B 20 · Oral 10)
 * Website: Pathways › Foundation › F1 › Lesson 12. All assessment items are the website’s (A2 forms, A3 marks,
 * A4 numerals, B1 dictation, B2 vowelled reading, B3 signs, oral passage).
 */
const F = require('./f1-common');
const { q } = F;

const meta = F.meta({
  n: 12, fileTitle: 'Review_Assessment', chip: 'F1 Assessment',
  title: 'Show What You Know: F1 Review & Assessment', arabic: 'مُرَاجَعَةُ الوَحْدَةِ الأُولَى وَتَقْيِيمُهَا',
  focus: 'Celebrate eleven lessons of progress, complete a clear 60-mark assessment (alphabet, letter forms, marks, numerals, dictation, reading, signs and reading aloud), and choose one precise next step before F2.',
  icon: 'FaClipboardCheck', level: 'Foundation · end of unit F1',
});
const NEXT = { nextCode: 'F2-L01', nextTitle: 'Greetings — meeting people', nextAr: 'التَّحِيَّاتُ' };
const B = (ar) => ({ ar, arBig: true });

const slides = [
  F.titleSlide({
    n: 12,
    plan: '0–1 Welcome · 1–2 Lesson map · 2–7 Warm-up (not marked) · 7–9 Assessment map · 9–25 Part A (alphabet 14, forms 6, marks 5, numerals 5) · 25–40 Part B (dictation 10, vowelled reading 5, signs 5) · 40–52 Reading aloud (10, in pairs / with the teacher) · 52–56 Score profile and F2 target.',
    source: 'The website F1-L12 is a transparent 60-mark unit assessment (not an external exam paper): A1 alphabet 14 · A2 positional forms 6 · A3 diacritics 5 · A4 numerals 5 · B1 ten-word dictation 10 · B2 vowelled reading 5 · B3 signs 5 · oral reading aloud 10. Every assessment item, the dictation script, the oral passage, the mark scheme and the grade bands are the website’s.',
    support: `• Every student sits the same 60-mark assessment (website: heritage experience may change the challenge TEXT of the oral task, not the 10-mark scale).
• Access arrangements: extra time, questions read aloud in English, one section on screen at a time, squared paper for A1 and B1. The oral task is done one-to-one (teacher, or a trusted partner with the teacher checking).
• Answer slides follow each section — mark live, or hide them and mark later (teacher choice).`,
  }),
  F.welcomeSlide(),
  {
    type: 'journey', stage: 'welcome', eyebrow: 'Today’s lesson map', title: 'Our assessment, step by step', ar: 'خَرِيطَةُ الدَّرْسِ',
    steps: [
      { stage: 'donow', min: 5, text: 'Warm-up: letters and digits (not marked).', ar: 'هَيَّا نُرَاجِعْ' },
      { stage: 'teach', min: 2, text: 'The 60-mark map.', ar: 'خُطَّةُ التَّقْيِيمِ' },
      { stage: 'ido', min: 16, text: 'Part A: alphabet, forms, marks, numerals.', ar: 'الجُزْءُ أ' },
      { stage: 'wedo', min: 15, text: 'Part B: dictation, reading, signs.', ar: 'الجُزْءُ ب' },
      { stage: 'youdo', min: 12, text: 'Reading aloud, one by one.', ar: 'القِرَاءَةُ الجَهْرِيَّةُ' },
      { stage: 'feedback', min: 4, text: 'Score profile and my F2 target.', ar: 'الهَدَفُ' },
      { stage: 'prep', min: 2, text: 'Get ready for F2: greetings.', ar: 'اِسْتَعِدَّ' },
    ],
    support: 'Every section starts with the easiest questions. Work calmly; leave a blank and come back. The warm-up does not count.',
    notes: 'LESSON MAP. If time is short, the reading-aloud component can be completed at the start of the next lesson or by a short voice recording (the website allows a trusted partner to check).',
  },
  F.doNow({
    questions: [
      q('What is this letter called?', ['جِيمٌ', 'حَاءٌ', 'خَاءٌ'], 'Warm-up: dot inside the bowl.', B('ج')),
      q('What value is this digit?', ['5', '0', '4'], 'Five. Remember: the small dot digit is zero (website warm-up).', B('٥')),
      q('Which name matches?', ['qāf', 'fāʾ', 'kāf'], 'Qāf has two dots above (website warm-up).', B('ق')),
      q('What connection rule applies to د?', ['It does not join the next letter', 'It joins on both sides'], 'A non-connector.', B('د')),
      q('Which word means “achievement”?', ['إِنْجَازٌ', 'مُرَاجَعَةٌ', 'تَقْيِيمٌ'], 'Website words: review · assessment · achievement · progress · target.'),
    ],
    keyIdea: { text: 'This warm-up does NOT count. Say every letter aloud in order, then the ten digits.', ar: 'ا ب ت ث … ن ه و ي' },
    retrieves: 'Website warm-up “Letter & Number Sprint” (ungraded). Then chorally recite the 28 letters and read the digit strip.',
  }),
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Assessment map (website) · 60 marks in total', title: 'Know the task, the marks and the evidence', ar: 'خُطَّةُ التَّقْيِيمِ',
    cols: [{ label: 'Marks', w: 1.4 }, { label: 'What you do', w: 5.8 }, { label: 'Component', w: 3.4 }, { label: 'Part', w: 1.73 }],
    rows: [
      { core: true, cells: ['14', 'Write the 28 letters in order from memory (½ mark each).', 'Alphabet', 'A1'] },
      { core: true, cells: ['6', 'Choose six initial, medial or final forms.', 'Letter forms', 'A2'] },
      { core: true, cells: ['10', 'Name five marks; convert five numbers.', 'Marks and numerals', 'A3 · A4'] },
      { core: true, cells: ['20', 'Dictation (10) · vowelled reading (5) · signs (5).', 'Writing and reading', 'B1–B3'] },
      { core: true, cells: ['10', 'Five words in a short passage, 0–2 each.', 'Reading aloud', 'Oral'] },
    ],
    notes: 'ASSESSMENT MAP (website): 30 marks script and diacritics · 20 reading and writing · 10 reading aloud. This is an F1 unit assessment, not an external examination paper. Students record each component score on the score profile at the end.',
  },
  {
    type: 'formsTable', stage: 'ido', min: 6, eyebrow: 'Part A1 · 14 marks · write FIRST, then reveal', title: 'A1 · Write the alphabet from memory', ar: 'اُكْتُبِ الحُرُوفَ',
    cols: [{ label: '1–7', w: 3.08, size: 26 }, { label: '8–14', w: 3.08, size: 26 }, { label: '15–21', w: 3.08, size: 26 }, { label: '22–28', w: 3.09, size: 26 }],
    rows: [{ core: true, cells: ['ا ب ت ث ج ح خ', 'د ذ ر ز س ش ص', 'ض ط ظ ع غ ف ق', 'ك ل م ن ه و ي'] }],
    foot: 'Each letter in the correct position = ½ mark (28 × ½ = 14).',
    notes: `A1 (website). HIDE this slide until everyone has written all 28 isolated letters in order, right to left, on paper, without the alphabet wall (5 min). Then reveal; students compare and count correct positions.
Marking rule (website): letter identity and sequence earn the mark; a recognisable alternative handwritten shape is acceptable; an omitted, duplicated or displaced letter loses that position’s ½ mark. Give formation feedback separately.`,
  },
  {
    type: 'mcq', stage: 'ido', min: 3, eyebrow: 'Part A2 · 6 marks · positional forms (website)', title: 'A2 · Choose the exact form', ar: 'أَشْكَالُ الحُرُوفِ',
    seed: 30,
    questions: [
      q('Choose the initial form of ب.', ['بـ', 'ـبـ', 'ـب'], 'Initial bāʾ connects onward.'),
      q('Choose the medial form of ع.', ['ـعـ', 'عـ', 'ـع'], 'Medial ʿayn connects on both sides.'),
      q('Choose the final form of ف.', ['ـف', 'فـ', 'ـفـ'], 'Final fāʾ joins from the right only.'),
      q('Choose the initial form of ك.', ['كـ', 'ـك', 'ـكـ'], 'Initial kāf joins onward only.'),
      q('Choose the medial form of م.', ['ـمـ', 'مـ', 'ـم'], 'Medial mīm joins on both sides.'),
      q('Choose the final form of ي.', ['ـي', 'يـ', 'ـيـ'], 'Final yāʾ keeps its tail and two dots below.'),
    ],
    answerSlide: { min: 0, eyebrow: 'Part A2 · answers', title: 'A2 · Answers', ar: 'الإِجَابَاتُ' },
    notes: 'A2 (website): six items, 1 mark each. Private chat: A2: 1_ 2_ 3_ 4_ 5_ 6_.',
    answerNotes: 'Mark /6.',
  },
  {
    type: 'mcq', stage: 'ido', min: 3, eyebrow: 'Part A3 · 5 marks · diacritic names (website)', title: 'A3 · Name the mark', ar: 'العَلَامَاتُ',
    seed: 31,
    questions: [
      q('Name the mark.', ['fatḥa', 'kasra', 'ḍamma'], 'The short /a/ stroke above.', B('بَ')),
      q('Name the mark.', ['ḍamma', 'sukūn', 'shadda'], 'The short /u/ curl above.', B('بُ')),
      q('Name the mark.', ['kasra', 'fatḥa', 'tanwīn'], 'The short /i/ stroke below.', B('بِ')),
      q('Name the mark.', ['sukūn', 'shadda', 'madda'], 'No following vowel.', B('بْ')),
      q('Name the mark.', ['shadda', 'fatḥa', 'hamza'], 'Doubles the consonant.', B('بّ')),
    ],
    side: { kind: 'info', head: 'A3 · 5 MARKS', text: 'One mark each.\nPrivate chat: A3: 1_ 2_ 3_ 4_ 5_' },
    answerSlide: { min: 0, eyebrow: 'Part A3 · answers', title: 'A3 · Answers', ar: 'الإِجَابَاتُ' },
    notes: 'A3 (website). Review beyond the five marks (website): tanwīn, alif madda, hamza forms, long vowels, sun and moon letters remain on the end-of-unit checklist.',
    answerNotes: 'Mark /5.',
  },
  {
    type: 'mcq', stage: 'ido', min: 3, eyebrow: 'Part A4 · 5 marks · numeral conversion (website)', title: 'A4 · Choose the Arabic-Indic numeral', ar: 'الأَرْقَامُ',
    seed: 32,
    questions: [
      q('Choose the numeral for 3.', ['٣', '٢', '٤'], 'Three.'),
      q('Choose the numeral for 7.', ['٧', '٦', '٨'], 'Seven.'),
      q('Choose the numeral for 15.', ['١٥', '٥١', '١٠٥'], 'Place value stays fifteen.'),
      q('Choose the numeral for 20.', ['٢٠', '٢', '٢٠٠'], 'Two, then zero.'),
      q('Choose the numeral for 100.', ['١٠٠', '١٠', '١٠٠٠'], 'One, then two zeros.'),
    ],
    side: { kind: 'info', head: 'A4 · 5 MARKS', text: 'One mark each.\nPrivate chat: A4: 1_ 2_ 3_ 4_ 5_' },
    answerSlide: { min: 0, eyebrow: 'Part A4 · answers', title: 'A4 · Answers', ar: 'الإِجَابَاتُ' },
    notes: 'A4 (website). Part A total /30 (A1 14 + A2 6 + A3 5 + A4 5).',
    answerNotes: 'Mark /5. Students add up Part A /30.',
  },
  {
    type: 'formsTable', stage: 'wedo', min: 8, eyebrow: 'Part B1 · 10 marks · ten-word guided dictation (website) · reveal AFTER writing', title: 'B1 · Dictation', ar: 'إِمْلَاءُ عَشْرِ كَلِمَاتٍ',
    cols: [{ label: '1–5', w: 6.15, size: 26 }, { label: '6–10', w: 6.18, size: 26 }],
    rows: [{ core: true, cells: [{ ar: 'بَابٌ · كِتَابٌ · قَلَمٌ · مَدْرَسَةٌ · بَيْتٌ', sub: 'door · book · pen · school · house' }, { ar: 'مُعَلِّمٌ · طَالِبٌ · يَدٌ · عَيْنٌ · كَلِمَةٌ', sub: 'teacher · student · hand · eye · word' }] }],
    foot: 'One mark for each whole word (letters, joins, dots and marks). Record repeated errors as L · J · D · M.',
    notes: `B1 DICTATION (website). HIDE this slide during the dictation.
Before: students write numbers 1–10; pens down; read the whole list once so the rhythm is predictable.
During: say each word TWICE at a measured pace; leave a blank if needed and continue.
Script: بَابٌ. كِتَابٌ. قَلَمٌ. مَدْرَسَةٌ. بَيْتٌ. مُعَلِّمٌ. طَالِبٌ. يَدٌ. عَيْنٌ. كَلِمَةٌ.
Mark consistently (website): one whole-word mark; record recurring errors separately (L letter, J join, D dot, M mark).`,
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'Part B2 · 5 marks · vowelled reading (website)', title: 'B2 · Choose the closest transliteration', ar: 'قِرَاءَةُ كَلِمَاتٍ مَشْكُولَةٍ',
    seed: 33,
    questions: [
      q('Choose the closest transliteration.', ['bāb', 'bab', 'bib'], 'The written alif makes long ā.', B('بَاب')),
      q('Choose the closest transliteration.', ['madrasa', 'mudarrisa', 'midrāsa'], 'The visible vowels support madrasa.', B('مَدْرَسَة')),
      q('Choose the closest transliteration.', ['muʿallim', 'maʿlam', 'muʿālim'], 'Ḍamma gives mu-; shadda doubles l.', B('مُعَلِّم')),
      q('Choose the closest transliteration.', ['ʿayn', 'ʿīn', 'ghayn'], 'Fatḥa + yāʾ = ay.', B('عَيْن')),
      q('Choose the closest transliteration.', ['thalātha', 'talāta', 'thulūtha'], 'Thāʾ is th; alif gives long ā.', B('ثَلَاثَة')),
    ],
    side: { kind: 'info', head: 'KEY', text: 'ā = long alif sound\nʿ = the letter ʿayn\ndoubled letters = shadda\nth = the letter thāʾ' },
    answerSlide: { min: 0, eyebrow: 'Part B2 · answers', title: 'B2 · Answers', ar: 'الإِجَابَاتُ' },
    notes: 'B2 (website). Transliteration is only an assessment bridge; the Arabic remains primary. An equivalent consistent transliteration can be accepted (website key).',
    answerNotes: 'Mark /5.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'Part B3 · 5 marks · unvowelled signs (website) · use SCOPE', title: 'B3 · Read the signs', ar: 'لَافِتَاتٌ',
    seed: 34,
    questions: [
      q('Choose the meaning.', ['school', 'hospital', 'restaurant'], 'Madrasa = school.', B('مدرسة')),
      q('Choose the meaning.', ['restaurant', 'station', 'street'], 'Maṭʿam = restaurant.', B('مطعم')),
      q('Choose the meaning.', ['hospital', 'hotel', 'mosque'], 'Mustashfā = hospital.', B('مستشفى')),
      q('Choose the meaning.', ['station', 'bank', 'school'], 'Maḥaṭṭa = station.', B('محطة')),
      q('Which visible final shape is an evidence clue?', ['ى', 'ة', 'و'], 'The final alif maqṣūra supports the reading mustashfā.', B('مستشفى')),
    ],
    side: { kind: 'info', head: 'SCOPE', text: 'Scan · Chunk · Observe\nPredict · Evaluate\nPrivate chat: B3: 1_ 2_ 3_ 4_ 5_' },
    answerSlide: { min: 0, eyebrow: 'Part B3 · answers', title: 'B3 · Answers', ar: 'الإِجَابَاتُ' },
    notes: 'B3 (website): four meaning marks and one evidence mark. Part B total /20 (B1 10 + B2 5 + B3 5).',
    answerNotes: 'Mark /5. Students add up Part B /20.',
  },
  {
    type: 'glossed', stage: 'youdo', min: 12, eyebrow: 'Reading aloud · 10 marks · five target words (website)', title: 'Oral · Read the passage aloud', ar: 'القِرَاءَةُ الجَهْرِيَّةُ',
    lines: [
      ['هَذَا بَيْتٌ كَبِيرٌ وَفِيهِ حَدِيقَةٌ.', 'Level 1 (everyone): This is a big house, and it has a garden.'],
      ['هَذَا · بَيْتٌ · كَبِيرٌ · وَفِيهِ · حَدِيقَةٌ', 'The five scored words — 2 secure · 1 partial · 0 unable'],
      ['هذا بيت كبير وفيه حديقة جميلة. تسكن فيه أسرة صغيرة قرب المدرسة.', 'Level 2 (heritage extension): … a beautiful garden. A small family lives in it near the school.'],
    ],
    notes: `ORAL (website). One-to-one with the teacher (or a trusted partner, teacher checking), in a quiet space — e.g. breakout pairs while others complete their score profile.
Score each of the five target words: 2 = consonants, vowels and length secure (self-correction allowed); 1 = partly correct and recognisable, one material sound/length error; 0 = unable to attempt or not recognisable. Do not award or remove marks for accent alone when the intended sound is identifiable.
Heritage extension (website): read the longer, partly unvowelled passage, but score the SAME five target words so the total stays comparable. Fairness: heritage experience may change the challenge text, not the 10-mark scale.`,
  },
  {
    type: 'formsTable', stage: 'feedback', min: 3, eyebrow: 'Feedback · my F1 score profile (website)', title: 'Record all eight components', ar: 'مِنَ النَّتِيجَةِ إِلَى الهَدَفِ',
    cols: [{ label: 'Band (total /60)', w: 6.73 }, { label: 'My score', w: 2.0 }, { label: 'Component', w: 3.6 }],
    rows: [
      { core: true, cells: ['54–60 Excellent — secure F1 foundation', '/14 · /6', 'A1 alphabet · A2 forms'] },
      { core: true, cells: ['42–53.5 Good — ready for F2 with one practice target', '/5 · /5', 'A3 diacritics · A4 numerals'] },
      { core: true, cells: ['30–41.5 Satisfactory — targeted retrieval and early F2 support', '/10 · /5', 'B1 dictation · B2 reading'] },
      { core: true, cells: ['Below 30 — catch-up before the new language load increases', '/5 · /10', 'B3 signs · Oral'] },
    ],
    notes: `SCORE PROFILE (website). Students copy the table into their books and write their total /60. Website: these are course progress guides, not external examination thresholds.
Next step (website): a strong F2 target names ONE skill, ONE repeated action and a check date — e.g. “Dictation: I will write five words from memory every evening; check on Friday.”`,
  },
  F.selfCheckSlide([
    { route: 'core', text: 'I recognise all 28 letters and remember the six non-connectors.' },
    { route: 'core', text: 'I can read common diacritics, long vowels and Arabic-Indic numerals.' },
    { route: 'develop', text: 'I can use initial, medial and final forms.' },
    { route: 'develop', text: 'I can write familiar words from dictation.' },
    { route: 'stretch', text: 'I can decode simple unvowelled signs and read a short vowelled passage aloud.' },
  ]),
  F.prepSlide({
    ...NEXT,
    words: [['مَرْحَبًا', 'hello, welcome', ''], ['السَّلَامُ عَلَيْكُمْ', 'peace be upon you', ''], ['وَعَلَيْكُمُ السَّلَامُ', 'and upon you be peace', ''], ['اِسْمِي …', 'my name is …', ''], ['مَا اسْمُكَ؟', 'what is your name? (to a boy)', '']],
    questionEn: 'Write your F2 target: one skill, one repeated action, one check date.',
    questionAr: 'مَرْحَبًا! مَا اسْمُكَ؟',
    homework: {
      core: 'Correct your A1 and B1 mistakes in green pen; practise the letters you missed five times each.',
      develop: 'Website F1 games for your lowest component; then learn the five greeting phrases.',
      stretch: 'Record yourself reading the Level 2 passage; then write the five greetings from memory.',
    },
    wordsSource: 'F2 preview (website): next you will greet someone, say your name and age, ask simple personal questions and introduce yourself.',
  }),
  F.closeSlide({ ...NEXT, remember: 'F1 complete — well done! Learn 5 greetings before F2.' }),
];

module.exports = { meta, slides };
