'use strict';
/*
 * TC-L01 · People, Places, Continents and Compass Points
 * Website: Advanced Topics › Topic C › Lesson 1 (reuses D6-L01 + the People & Places vocabulary bank).
 * Every Arabic word, rule, quiz, script, text and model answer below is taken from those website sources
 * unless a line is marked "teacher-made" in the notes (scaffolds added for learners whose Arabic is not yet secure).
 */
const site = require('../site-data/d6-content.json').lessons.find((l) => l.code === 'D6-L01');
const G = site.grammar;

// nisba helper: stem already carries the kasra on its last letter
const nis = (stem) => ({ m: `{m|${stem}}{e|يٌّ}`, f: `{m|${stem}}{e|يَّةٌ}`, pl: `{m|${stem}}{e|يُّونَ}` });
const country = (ar, tr, en, stem, note, core) => {
  const n = nis(stem);
  return { core, cells: [{ ar, sub: `${tr} · ${en}` }, n.m, n.f, n.pl, note || ''] };
};
const natCols = [
  { label: 'Country', w: 3.25, size: 20 },
  { label: 'he  (m.)', w: 2.2 },
  { label: 'she  (f.)', w: 2.2 },
  { label: 'they  (pl.)', w: 2.2 },
  { label: 'Note (website)', w: 2.48, italic: true },
];
const q = (prompt, options, why, extra = {}) => ({ prompt, options, answer: 0, why, ...extra });
const fromSite = (item, extra = {}) => ({ prompt: item.prompt, options: item.options, answer: item.answer, why: item.feedback, ...extra });

const meta = {
  code: 'TC-L01',
  file: 'TC_Wk01_L1_TCL01_People_Places_Compass_Points',
  chip: 'People, Places & Compass',
  title: 'People, Places, Continents and Compass Points',
  arabic: 'النَّاسُ وَالأَمَاكِنُ وَالقَارَّاتُ وَاتِّجَاهَاتُ البُوصَلَةِ',
  focus: 'Locate, identify and compare places accurately: name the Arab countries, build nationalities with the nisba ـِيٌّ / ـِيَّةٌ and say where places are with compass points.',
  kicker: 'CAMBRIDGE IGCSE ARABIC 0544  ·  ADVANCED TOPIC C  ·  WEEK 1  ·  LESSON 1 OF 3',
  lessonLine: 'TC-L01 · Week 1, lesson 1',
  level: 'Topic C · A1+ → B1',
  site: 'Advanced Topics › C › Lesson 1',
  footer: 'Miftah Arabic · Advanced Topic C · The World Around Us · Week 1 · Lesson 1 of 3',
  icon: 'FaEarthAfrica',
};

const slides = [
  // 1 ────────────────────────────────────────────── TITLE
  {
    type: 'title',
    notes: `LESSON AT A GLANCE — planned for 56 minutes, leaving about 4 minutes for Teams delays.
0–1 Welcome · 1–2 Lesson map · 2–9 Do Now + answers · 9–10 Objectives · 10–17 Key words · 17–23 Grammar · 23–25 Quick check · 25–28 I Do · 28–37 We Do (sentence builder, repair, listening) · 37–49 You Do (speaking 3 + writing 9, with live feedback) · 49–54 Feedback (model, self-check, exit ticket) · 54–56 Preparation for next lesson.
FLEX slides are optional. Use them if the class is moving quickly; otherwise the same activities are on the website for homework.

Content source: Miftah Arabic website, Advanced Topics › Topic C › Lesson 1 (TC-L01). The website lesson reuses D6-L01 (Countries, Nationalities and Languages of the Arab World) and the Topic C “People & Places” vocabulary bank (continents and compass points). All vocabulary, grammar rules, quizzes, the listening script, the reading text, speaking prompts and model answers come from those pages, so students meet the same language in class and at home.

SUPPORT FOR THIS CLASS (Arabic not yet secure; mixed levels):
• Core route is designed for students working at roughly A1: transliteration on every key word, English on every model sentence, sentence frames and a word bank, and a CORE flag on the words to learn first.
• Colour code (same as all Miftah lessons): WHO = blue, MEANING/country = purple, ENDING = pink, KEY WORD/place = teal.
• Urdu bridge words (شمال، جنوب، مشرق، مغرب، لہجہ) value home language as a resource (EAL Guide).
• SEND “automatic doors”: the lesson map, chunked tasks, read-along scripts, cover-the-text reading and “pass” for reading aloud are built in for everyone, so no one is singled out.

ROUTES: Core (green) = students whose Arabic is not yet secure; Develop (amber) = on track; Stretch (red) = confident. Same objective for everyone — the task changes, not the goal (EAL Guide: adapt the task, not the objective).`,
  },
  // 2 ────────────────────────────────────────────── WELCOME
  {
    type: 'welcome', stage: 'welcome', min: 1, eyebrow: 'Before we begin', title: 'Our online classroom', ar: 'آدَابُ الصَّفِّ',
    notes: `WELCOME (1 min) — while students join.
• Greet each student by name as they arrive: السَّلَامُ عَلَيْكُمْ. Take the register (Pastoral Tracker: attendance 0/1).
• 2-MINUTE CHECK-IN (SEND training): send a private chat to any student who seemed unsettled last lesson — “Are you okay today? 👍 / 👎”. Keep it private and brief.
• Point to the four expectations — brief and positive: this is our class agreement (Behaviour training: rules agreed early and revisited).
• Remind students of the talk code: “I will always give you thinking and practice time before I ask anyone.” (Oracy: safe cold call; EAL: warn before you ask.) Reading aloud is always by invitation — a student may say “pass” and you return to them later.`,
  },
  // 3 ────────────────────────────────────────────── LESSON MAP (SEND predictability)
  {
    type: 'journey', stage: 'welcome', eyebrow: 'Today’s lesson map', title: 'Our lesson today, step by step', ar: 'خَرِيطَةُ الدَّرْسِ',
    steps: [
      { stage: 'donow', min: 7, text: 'Retrieval quiz on your own, then we check together.', ar: 'اِبْدَأِ الآنَ' },
      { stage: 'teach', min: 14, text: 'Key words, then how to make a nationality and say where a place is.', ar: 'كَلِمَاتٌ وَقَوَاعِدُ' },
      { stage: 'ido', min: 3, text: 'Watch me build one sentence. Copy it into your book.', ar: 'شَاهِدْ' },
      { stage: 'wedo', min: 9, text: 'Build, fix and listen together.', ar: 'مَعًا' },
      { stage: 'youdo', min: 12, text: 'Speak first, then write on your route.', ar: 'وَحْدَكَ' },
      { stage: 'feedback', min: 5, text: 'Compare with a model and complete the exit ticket.', ar: 'قَيِّمْ عَمَلَكَ' },
      { stage: 'prep', min: 2, text: 'Get ready at home for TC-L02.', ar: 'اِسْتَعِدَّ' },
    ],
    support: 'Look for the green CORE boxes: they give you transliteration, English meanings and sentence frames. You never need every word — find the key word first. You can answer in the chat, in English, or by holding up A / B / C to your camera.',
    notes: `LESSON MAP (30 seconds) — SEND training: “absolute predictability”. Show the whole journey so students know what is coming and when they will be asked to speak or write.
Point to the green box and say it aloud: using the Core supports is normal and expected, not a sign of weakness. This is the “automatic doors” idea — support is there for everyone, so no student is singled out.`,
  },
  // 4–5 ─────────────────────────────────────────── DO NOW
  {
    type: 'mcq', stage: 'donow', min: 5, eyebrow: 'Do now · on your own · 5 minutes', title: 'Retrieval: what do you remember?', ar: 'اِبْدَأِ الآنَ',
    questions: [
      q('Which word means “country”?', ['بَلَدٌ', 'لُغَةٌ', 'جِنْسِيَّةٌ'], 'بَلَدٌ = country · لُغَةٌ = language · جِنْسِيَّةٌ = nationality.'),
      q('What does this mean?', ['I am from Britain.', 'I live in Britain.', 'I am British.'], 'أَنَا مِنْ … = I am from …', { ar: 'أَنَا مِنْ بِرِيطَانْيَا.' }),
      q('Which word is feminine?', ['طَالِبَةٌ', 'طَالِبٌ', 'مُعَلِّمٌ'], 'ـَةٌ (tāʾ marbūṭa) at the end usually shows a feminine word.'),
      q('Which word means “Arabic” (the language)?', ['العَرَبِيَّةُ', 'العَرَبُ', 'عَرَبِيٌّ'], 'العَرَبِيَّةُ = the Arabic language. عَرَبِيٌّ = an Arab man / Arab (m.).'),
      q('What does this mean?', ['I am an Arab student.', 'I am an Arabic teacher.', 'I study Arabic.'], 'The describing word عَرَبِيٌّ comes AFTER the noun طَالِبٌ.', { ar: 'أَنَا طَالِبٌ عَرَبِيٌّ.' }),
    ],
    side: { kind: 'howto', text: 'Work on your own in silence.\nWhen the timer ends, type in the chat:', chat: '1_  2_  3_  4_  5_', timer: '5 : 00' },
    answerSlide: { min: 2, eyebrow: 'Do now · answers and reasons', title: 'Let’s check — and explain why', ar: 'الإِجَابَاتُ وَالتَّعْلِيلُ' },
    answerSide: { kind: 'keyidea', text: 'Add ـِيٌّ (he) or ـِيَّةٌ (she) to a country to make a nationality.', ar: '{m|مِصْرُ}  ←  {m|مِصْرِ}{e|يٌّ}  /  {m|مِصْرِ}{e|يَّةٌ}' },
    notes: `DO NOW (5 min independent + 2 min going through answers).
This is the first lesson of Topic C, so the Do Now retrieves Foundation language that today’s lesson depends on: country, “I am from…”, feminine ـَةٌ, the word for Arabic, and the adjective coming after the noun. (Teacher-made retrieval questions — the website Do Now for this lesson uses end-of-lesson questions, which appear in today’s exit ticket instead.)
• Students work silently. Answers go in the chat as five letters (e.g. “1B 2A …”) only when the timer ends.
• Core students may answer in English and use their book.
• While they work: register, note late joiners, note anyone not attempting (Self-Management).
• Go THROUGH the answers on the next slide — ask one student (after thinking time) to explain WHY for each.`,
    answerNotes: `GO THROUGH THE ANSWERS (2 min). Reveal and ask “why?” for each (● 10s think → named student, warned in advance).
Q4 and Q5 are the bridge into today: عَرَبِيٌّ is already a nationality word. Today we make the same shape for every Arab country.
Key idea for today (bottom-right card): add ـِيٌّ for he and ـِيَّةٌ for she.`,
  },
  // 6 ────────────────────────────────────────────── OBJECTIVES
  {
    type: 'objectives', stage: 'welcome', min: 1, eyebrow: 'Lesson 1 of 3 this week', title: 'Objectives and success criteria', ar: 'الأَهْدَافُ وَمَعَايِيرُ النَّجَاحِ',
    objectives: site.objectives,
    routes: {
      core: ['I can say where a country is with فِي and north / south / east / west.', 'I can make the nationality for he (ـِيٌّ) and she (ـِيَّةٌ).'],
      develop: ['I can match nationalities to 10 countries and to the noun (m. / f.).', 'I can say which languages are used in a country.'],
      stretch: ['I can write مِنْ لُبْنَانَ, زُرْتُ مِصْرَ — no tanwīn on a diptote.', 'I can write about 80 words about one Arab country.'],
    },
    notes: `OBJECTIVES (1 min).
Left: the lesson objectives exactly as they appear on the website (D6-L01, reused by TC-L01).
Right: the same objectives broken into three routes. Everyone starts with Core; most students reach Develop; confident students aim for Stretch. Students decide privately which route they are aiming for (● Think 10s) — revisit in Feedback.
The Core statements add the Topic C focus (“Locate, identify and compare places accurately”) using compass points from the Topic C People & Places vocabulary bank.
EAL: read the Core statements aloud, pointing to the Arabic as you say it.`,
  },
  // 7 ────────────────────────────────────────────── KEY WORDS INTRO
  {
    type: 'keywords', stage: 'teach', min: 7,
    text: '47 words from the website in 4 groups. Learn the CORE words first. Hear it → say it → see it → use it.',
    groups: [
      { head: 'GROUP 1', name: 'Compass points & continents · 13' },
      { head: 'GROUP 2', name: 'Arab countries & nationalities · 22' },
      { head: 'GROUP 3', name: 'Language & identity · 6' },
      { head: 'GROUP 4 · FLEX', name: 'Extra detail · 6', flex: true },
    ],
    bridge: [
      { ar: 'شَمَالٌ', urdu: 'شمال', tr: 'shimāl', en: 'north' },
      { ar: 'جَنُوبٌ', urdu: 'جنوب', tr: 'junūb', en: 'south' },
      { ar: 'شَرْقٌ', urdu: 'مشرق', tr: 'mashriq', en: 'east' },
      { ar: 'غَرْبٌ', urdu: 'مغرب', tr: 'maghrib', en: 'west' },
      { ar: 'لَهْجَةٌ', urdu: 'لہجہ', tr: 'lahja', en: 'accent' },
    ],
    notes: `KEY WORDS — HOW TO TEACH EACH GROUP (EAL pre-teaching routine, 7 min for Groups 1–3)
1. HEAR IT: say the word twice, clearly, with a gesture where possible (point up for north, down for south, right for east, left for west — as on a map).
2. SAY IT: choral repetition — “I say, you say” — then two volunteers.
3. SEE IT: point out the part of the word that carries today’s grammar (the pink ending ـِيٌّ / ـِيَّةٌ).
4. USE IT: quick check — “Type the NUMBER of the word that means …” in the chat.
Transliteration is printed for Core students. Develop/Stretch students should cover it and read the Arabic.
Group 4 (FLEX) is for fast classes or homework — every word is on the website vocabulary tab and the People & Places bank.

URDU BRIDGE: ask “Which of these do you already know from home?” (● 10s → ◎). Urdu uses مشرق / مغرب for east / west — the same roots as شَرْقٌ / غَرْبٌ. المَغْرِبُ (Morocco) literally means “the West”, and صَلَاةُ المَغْرِبِ is the sunset prayer: the sun sets in the west. This values home language as a resource (EAL principle).`,
  },
  // 8 ────────────────────────────────────────────── GROUP 1a
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1', title: 'Compass points (1 of 2)', ar: 'اتِّجَاهَاتُ البُوصَلَةِ',
    items: [
      { n: 1, ar: 'شَمَالٌ', en: 'north', tr: 'sha-māl', tag: 'direction', core: true, forms: [{ l: 'm.', ar: '{m|شَمَالِ}{e|يٌّ}' }, { l: 'f.', ar: '{m|شَمَالِ}{e|يَّةٌ}' }] },
      { n: 2, ar: 'جَنُوبٌ', en: 'south', tr: 'ja-nūb', tag: 'direction', core: true, forms: [{ l: 'm.', ar: '{m|جَنُوبِ}{e|يٌّ}' }, { l: 'f.', ar: '{m|جَنُوبِ}{e|يَّةٌ}' }] },
      { n: 3, ar: 'شَرْقٌ', en: 'east', tr: 'sharq', tag: 'direction', core: true, forms: [{ l: 'm.', ar: '{m|شَرْقِ}{e|يٌّ}' }, { l: 'f.', ar: '{m|شَرْقِ}{e|يَّةٌ}' }] },
      { n: 4, ar: 'غَرْبٌ', en: 'west', tr: 'gharb', tag: 'direction', core: true, forms: [{ l: 'm.', ar: '{m|غَرْبِ}{e|يٌّ}' }, { l: 'f.', ar: '{m|غَرْبِ}{e|يَّةٌ}' }] },
      { n: 5, ar: 'قَارَّةٌ', en: 'continent', tr: 'qār-ra · pl. qār-rāt', tag: 'noun · f.', core: true, forms: [{ l: 'sg.', ar: 'قَارَّةٌ' }, { l: 'pl.', ar: 'قَارَّاتٌ' }] },
      { n: 6, ar: 'اتِّجَاهٌ', en: 'direction', tr: 'it-ti-jāh · pl. it-ti-jā-hāt', tag: 'noun · m.', forms: [{ l: 'sg.', ar: 'اتِّجَاهٌ' }, { l: 'pl.', ar: 'اتِّجَاهَاتٌ' }] },
    ],
    notes: `KEY WORDS — Compass points (website: Topic C People & Places bank, “Compass directions”). Hear → Say → See → Use.
The small boxes show the describing form (m. / f.) — شَمَالِيٌّ “northern”. This is the SAME ending as today’s nationalities, so students meet the pattern before the grammar slide. Example they will see later: أَمْرِيكَا الشَّمَالِيَّةُ (North America).
Website example: تُشِيرُ إِبْرَةُ البُوصَلَةِ نَحْوَ الشَّمَالِ = The compass needle points north.
Website note: تُشْرِقُ الشَّمْسُ مِنَ الشَّرْقِ = the sun rises in the east.
PRONUNCIATION: ج in جَنُوب is “j”; غ in غَرْب is the gargled “gh” (like French r); ق in شَرْق is the deep “q” from the back of the throat.
Quick check: “Type the NUMBER of the word that means west / north / continent”.`,
  },
  // 9 ────────────────────────────────────────────── GROUP 1b continents
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Key words · Group 1', title: 'Continents (2 of 2)', ar: 'القَارَّاتُ',
    cols: [{ label: 'Continent', w: 4.1, size: 22 }, { label: 'English', w: 2.6 }, { label: 'Arab League countries here', w: 5.63, italic: true }],
    rows: [
      { core: true, cells: [{ ar: 'آسِيَا', sub: 'ā-si-yā' }, 'Asia', '12 — e.g. العِرَاقُ، الأُرْدُنُّ، السُّعُودِيَّةُ'] },
      { core: true, cells: [{ ar: 'أَفْرِيقِيَا', sub: 'af-rī-qi-yā' }, 'Africa', '10 — e.g. مِصْرُ، المَغْرِبُ، تُونُسُ'] },
      { core: true, cells: [{ ar: 'أُورُوبَّا', sub: 'ū-rūb-bā' }, 'Europe', 'none'] },
      { cells: [{ ar: 'أَمْرِيكَا {m|الشَّمَالِ}{e|يَّةُ}', sub: 'am-rī-kā sh-sha-mā-liy-ya' }, 'North America', 'none — notice the nisba: الشَّمَالِيَّةُ (f.)'] },
      { cells: [{ ar: 'أَمْرِيكَا {m|الجَنُوبِ}{e|يَّةُ}', sub: 'am-rī-kā l-ja-nū-biy-ya' }, 'South America', 'none — الجَنُوبِيَّةُ agrees with a feminine continent'] },
      { cells: [{ ar: 'أُسْتُرَالِيَا', sub: 'us-tu-rā-li-yā' }, 'Australia (continent)', 'none'] },
      { cells: [{ ar: 'القَارَّةُ القُطْبِيَّةُ الجَنُوبِيَّةُ', sub: 'al-qār-ra l-quṭ-biy-ya l-ja-nū-biy-ya' }, 'Antarctica', 'none'] },
    ],
    notes: `KEY WORDS — Continents (website: Topic C People & Places bank, “Continents”). All continents are feminine.
The third column is teacher-added context (the 22 Arab League states: 12 in Asia, 10 in Africa — the website reading text says the Arab League has 22 states).
Point out the pink endings: الشَّمَالِيَّةُ and الجَنُوبِيَّةُ are nisba adjectives (northern / southern) in the feminine because قَارَّة is feminine. Core students only need the three CORE continents.
Website example: تَضُمُّ آسِيَا الصِّينَ وَاليَابَانَ وَالهِنْدَ = Asia includes China, Japan and India.`,
  },
  // 10–12 ───────────────────────────────────────── GROUP 2 countries
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Key words · Group 2 · start here', title: 'Arab countries (1 of 3): the core seven', ar: 'الدُّوَلُ العَرَبِيَّةُ',
    cols: natCols,
    rows: [
      country('المَغْرِبُ', 'al-Maghrib', 'Morocco', 'مَغْرِبِ', 'Also: مَغَارِبَةٌ (people, pl.)', true),
      country('مِصْرُ', 'Miṣr', 'Egypt', 'مِصْرِ', 'A diptote: مِصْرُ، مِصْرَ — never مِصْرٌ.', true),
      country('العِرَاقُ', 'al-ʿIrāq', 'Iraq', 'عِرَاقِ', 'Nationality عِرَاقِيٌّ.', true),
      country('لُبْنَانُ', 'Lubnān', 'Lebanon', 'لُبْنَانِ', 'A diptote: مِنْ لُبْنَانَ.', true),
      country('الأُرْدُنُّ', 'al-Urdunn', 'Jordan', 'أُرْدُنِّ', 'Nationality أُرْدُنِّيٌّ.', true),
      country('السُّعُودِيَّةُ', 'as-Suʿūdiyya', 'Saudi Arabia', 'سُعُودِ', 'Drop the ـة first.', true),
      country('تُونُسُ', 'Tūnis', 'Tunisia', 'تُونُسِ', 'A diptote.', true),
    ],
    notes: `KEY WORDS — Arab countries and nationalities (website: D6-L01 vocabulary “Countries of the Mashriq and the Gulf” / “Countries of the Maghreb and the Horn”). Notes column = website notes.
These seven are the CORE countries: they appear in today’s listening, speaking and model texts.
The he / she / they columns give every nationality in masculine, feminine and plural. Purple = the country (meaning); pink = the ending.
SAY IT: -ī (he) · -iyya (she) · -iyyūn (they). Example: miṣr → miṣrī · miṣriyya · miṣriyyūn.
The website’s full name for Saudi Arabia is المَمْلَكَةُ العَرَبِيَّةُ السُّعُودِيَّةُ; السُّعُودِيَّةُ is the everyday short form.
Plural note: the sound plural ـِيُّونَ is always correct; some nationalities also have a common broken plural (the website uses مَغَارِبَةٌ for Moroccans).`,
  },
  {
    type: 'formsTable', stage: 'teach', eyebrow: 'Key words · Group 2 · Develop', title: 'Arab countries (2 of 3): Mashriq and the Gulf', ar: 'المَشْرِقُ وَالخَلِيجُ',
    cols: natCols,
    rows: [
      country('سُورِيَا', 'Sūriyā', 'Syria', 'سُورِ', 'Indeclinable.'),
      country('فِلَسْطِينُ', 'Filasṭīn', 'Palestine', 'فِلَسْطِينِ', 'A diptote.'),
      country('الكُوَيْتُ', 'al-Kuwayt', 'Kuwait', 'كُوَيْتِ', ''),
      country('الإِمَارَاتُ', 'al-Imārāt', 'the UAE', 'إِمَارَاتِ', ''),
      country('قَطَرُ', 'Qaṭar', 'Qatar', 'قَطَرِ', 'A diptote.'),
      country('البَحْرَيْنُ', 'al-Baḥrayn', 'Bahrain', 'بَحْرَيْنِ', ''),
      country('عُمَانُ', 'ʿUmān', 'Oman', 'عُمَانِ', 'A diptote.'),
      country('اليَمَنُ', 'al-Yaman', 'Yemen', 'يَمَنِ', ''),
    ],
    notes: `KEY WORDS — Mashriq and Gulf countries (website D6-L01). Develop / Stretch focus; Core students listen and repeat, then use the table as a reference during writing.
Pattern check (● 10s): “What do you drop before adding the ending?” → the article ال (الكُوَيْت → كُوَيْتِيٌّ).
Diptotes flagged in the notes column link to the Stretch grammar slide (no tanwīn: مِنْ قَطَرَ).`,
  },
  {
    type: 'formsTable', stage: 'teach', eyebrow: 'Key words · Group 2 · Develop', title: 'Arab countries (3 of 3): Maghreb and Horn of Africa', ar: 'المَغْرِبُ العَرَبِيُّ وَالقَرْنُ الأَفْرِيقِيُّ',
    cols: natCols,
    rows: [
      country('الجَزَائِرُ', 'al-Jazāʾir', 'Algeria', 'جَزَائِرِ', ''),
      country('لِيبِيَا', 'Lībiyā', 'Libya', 'لِيبِ', ''),
      country('مُورِيتَانِيَا', 'Mūrītāniyā', 'Mauritania', 'مُورِيتَانِ', ''),
      country('السُّودَانُ', 'as-Sūdān', 'Sudan', 'سُودَانِ', ''),
      country('الصُّومَالُ', 'aṣ-Ṣūmāl', 'Somalia', 'صُومَالِ', ''),
      country('جِيبُوتِي', 'Jībūtī', 'Djibouti', 'جِيبُوتِ', 'Indeclinable.'),
      country('جُزُرُ القَمَرِ', 'Juzur al-Qamar', 'the Comoros', 'قَمَرِ', 'An iḍāfa.'),
    ],
    notes: `KEY WORDS — Maghreb and Horn of Africa (website D6-L01). Together with the previous two slides this gives all 22 Arab League states.
Countries ending in ـيَا (لِيبِيَا، سُورِيَا، مُورِيتَانِيَا) drop the ـيَا before the ending: لِيبِيَا → لِيبِيٌّ.
Quick check: “Type the nationality for a girl from Sudan” → سُودَانِيَّةٌ.`,
  },
  // 13 ───────────────────────────────────────────── GROUP 3
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 3', title: 'Language and identity', ar: 'اللُّغَةُ وَالهُوِيَّةُ',
    items: [
      { n: 1, ar: 'بَلَدٌ', en: 'country', tr: 'ba-lad · pl. bul-dān', tag: 'noun · m.', core: true, forms: [{ l: 'sg.', ar: 'بَلَدٌ' }, { l: 'pl.', ar: 'بُلْدَانٌ' }] },
      { n: 2, ar: 'لُغَةٌ', en: 'language', tr: 'lu-gha · pl. lu-ghāt', tag: 'noun · f.', core: true, forms: [{ l: 'sg.', ar: 'لُغَةٌ' }, { l: 'pl.', ar: 'لُغَاتٌ' }] },
      { n: 3, ar: 'جِنْسِيَّةٌ', en: 'nationality', tr: 'jin-siy-ya · pl. jin-siy-yāt', tag: 'noun · f.', core: true, forms: [{ l: 'sg.', ar: 'جِنْسِيَّةٌ' }, { l: 'pl.', ar: 'جِنْسِيَّاتٌ' }] },
      { n: 4, ar: 'عَاصِمَةٌ', en: 'capital city', tr: 'ʿā-ṣi-ma · pl. ʿa-wā-ṣim', tag: 'noun · f.', core: true, forms: [{ l: 'sg.', ar: 'عَاصِمَةٌ' }, { l: 'pl.', ar: 'عَوَاصِمُ' }] },
      { n: 5, ar: 'العَرَبِيَّةُ الفُصْحَى', en: 'Modern Standard Arabic', tr: 'al-ʿa-ra-biy-ya l-fuṣ-ḥā', tag: 'register', note: 'The shared written and formal register.' },
      { n: 6, ar: 'لَهْجَةٌ', en: 'a dialect', tr: 'lah-ja · pl. la-ha-jāt', tag: 'noun · f.', forms: [{ l: 'sg.', ar: 'لَهْجَةٌ' }, { l: 'pl.', ar: 'لَهَجَاتٌ' }] },
    ],
    notes: `KEY WORDS — Language and identity (website: D6-L01 “Languages and identity” + Topic C People & Places bank for بَلَد / لُغَة / جِنْسِيَّة). Hear → Say → See → Use.
Website notes: الفُصْحَى = the shared written and formal register; اللَّهَجَاتُ = spoken varieties, which differ by region; عَوَاصِمُ (capitals) is a diptote.
URDU BRIDGE: لَهْجَةٌ ↔ لہجہ (accent). عَاصِمَةٌ has no Urdu cognate — give it a gesture (a star on a map).
Note: جِنْسِيَّةٌ itself ends in ـِيَّةٌ — the same feminine ending students are about to learn.`,
  },
  // 14 ───────────────────────────────────────────── GROUP 4 FLEX
  {
    type: 'vocab', stage: 'teach', flex: true, eyebrow: 'Key words · Group 4 · FLEX', title: 'Extra detail', ar: 'تَفَاصِيلُ إِضَافِيَّةٌ',
    items: [
      { n: 1, ar: '{m|الأَمَازِيغِ}{e|يَّةُ}', en: 'Amazigh (Berber)', tr: 'al-a-mā-zī-ghiy-ya', tag: 'language', note: 'Official in Morocco and Algeria.' },
      { n: 2, ar: '{m|الكُرْدِ}{e|يَّةُ}', en: 'Kurdish', tr: 'al-kur-diy-ya', tag: 'language', note: 'Official in Iraq alongside Arabic.' },
      { n: 3, ar: 'لُغَةٌ رَسْمِيَّةٌ', en: 'an official language', tr: 'lu-gha ras-miy-ya', tag: 'phrase', forms: [{ l: 'sg.', ar: 'لُغَةٌ رَسْمِيَّةٌ' }, { l: 'pl.', ar: 'لُغَاتٌ رَسْمِيَّةٌ' }] },
      { n: 4, ar: 'وَطَنٌ', en: 'homeland, home country', tr: 'wa-ṭan · pl. aw-ṭān', tag: 'noun · m.', forms: [{ l: 'sg.', ar: 'وَطَنٌ' }, { l: 'pl.', ar: 'أَوْطَانٌ' }] },
      { n: 5, ar: 'نَشَأَ / يَنْشَأُ', en: 'arose / arises', tr: 'na-sha-ʾa / yan-sha-ʾu', tag: 'verb', note: 'Used for civilisations and institutions.' },
      { n: 6, ar: 'اتَّسَعَ / يَتَّسِعُ', en: 'expanded / expands', tr: 'it-ta-sa-ʿa / yat-ta-si-ʿu', tag: 'verb · Form VIII', note: 'Form VIII.' },
    ],
    notes: `KEY WORDS — Extra detail (FLEX: teach only if time allows; otherwise students learn these on the website vocabulary tab for homework). Website notes shown on the cards.
Language names are feminine nisba words because لُغَة is feminine: (اللُّغَةُ) العَرَبِيَّةُ، الأَمَازِيغِيَّةُ، الكُرْدِيَّةُ — pink ending again.
Also on the website: الهُوِيَّةُ العَرَبِيَّةُ = Arab identity.
Stretch: نَشَأَ and اتَّسَعَ are used for history (past tense) — see the FLEX grammar slide.`,
  },
  // 15 ───────────────────────────────────────────── GRAMMAR 1 code word
  {
    type: 'codeWord', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 1 · the nisba', title: 'Make a nationality in three steps', ar: 'النِّسْبَةُ',
    word: '{m|مِصْرِ}{e|يَّةٌ}', tr: 'miṣ-riy-ya · Egyptian (f.) — an Egyptian woman or girl',
    parts: [
      { code: 'm', ar: 'مِصْرُ', title: 'COUNTRY = meaning', text: 'Start with the country. Drop ال or a final ـة first: المَغْرِب → مَغْرِب.' },
      { code: 'e', ar: 'ـِيٌّ', title: 'HE · a man or boy (m.)', text: 'Add -ī with a shadda: مِصْرِيٌّ = Egyptian (m.).' },
      { code: 'e', ar: 'ـِيَّةٌ', title: 'SHE · a woman or girl (f.)', text: 'Add -iyya: مِصْرِيَّةٌ. They (pl.) = مِصْرِيُّونَ.' },
    ],
    notes: `GRAMMAR PART 1 — the nisba (2 min). Website rule “Forming the nisba”: country + ـِيٌّ (m.) / ـِيَّةٌ (f.). The ending carries a shadda on the yāʾ. A final tāʾ marbūṭa or article is dropped first.
Think aloud: “When I look at مِصْرِيَّةٌ I read it in two parts. The PURPLE part is the country — the meaning. The PINK part is the ending — it tells me WHO: a woman or girl.”
For Core students the only rule to hold on to today: country + ـِيٌّ for he, + ـِيَّةٌ for she.
Website teaching point: “The shadda on the yāʾ is part of the ending, not an optional decoration.”
Misconception: students write مِصْرِيٌ (no shadda) or مَغْرِبَةٌ (adding ـة straight to the country) — the website quiz uses مَغْرِبَةٌ as a distractor.
Pastoral: award Curiosity to any student who notices that عَرَبِيٌّ, شَمَالِيٌّ and جِنْسِيَّةٌ all use the same ending.`,
  },
  // 16 ───────────────────────────────────────────── GRAMMAR 2 people table
  {
    type: 'peopleTable', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · match the nisba to the person', title: 'One country, many people', ar: 'بَلَدٌ وَاحِدٌ، نَاسٌ كَثِيرُونَ',
    heads: ['Who?', 'Nationality', 'Model sentence (website language)'],
    rows: [
      { who: 'هُوَ', whoEn: 'he', word: '{m|مَغْرِبِ}{e|يٌّ}', sentence: '{w|الطَّالِبُ} {m|مَغْرِبِ}{e|يٌّ}.', en: 'The (male) student is Moroccan.' },
      { who: 'هِيَ', whoEn: 'she', word: '{m|مَغْرِبِ}{e|يَّةٌ}', sentence: '{w|الطَّالِبَةُ} {m|مَغْرِبِ}{e|يَّةٌ}.', en: 'The (female) student is Moroccan.' },
      { who: 'أَنَا', whoEn: 'I (girl)', word: '{m|مَغْرِبِ}{e|يَّةٌ}', sentence: '{w|أَنَا} سَلْمَى، وَ{w|أَنَا} {m|مَغْرِبِ}{e|يَّةٌ}.', en: 'I am Salmā, and I am Moroccan.' },
      { who: 'هُمْ', whoEn: 'they', word: '{m|مَغْرِبِ}{e|يُّونَ}', sentence: '{w|هُمْ} {m|مَغْرِبِ}{e|يُّونَ} مِنَ الرِّبَاطِ.', en: 'They are Moroccans from Rabat.' },
      { who: 'لُغَةٌ', whoEn: 'language (f.)', word: '{m|العَرَبِ}{e|يَّةُ}', sentence: '{w|اللُّغَةُ} {m|العَرَبِ}{e|يَّةُ} لُغَةٌ رَسْمِيَّةٌ فِي المَغْرِبِ.', en: 'Arabic is an official language in Morocco.' },
    ],
    notes: `GRAMMAR PART 2 — agreement (2 min). Website rule: the nisba adjective must agree with its noun (quiz: هِيَ طَالِبَةٌ جَزَائِرِيَّةٌ).
Model: read each row aloud; students repeat only the blue WHO + the pink ending.
Spot the trap: أَنَا can be a boy OR a girl — Salmā is a girl, so أَنَا مَغْرِبِيَّةٌ.
Sentences are built from website language: الطَّالِبُ مِنْهُمْ مَغْرِبِيٌّ وَالطَّالِبَةُ مَغْرِبِيَّةٌ (writing model) and أَنَا سَلْمَى، وَأَنَا مَغْرِبِيَّةٌ (listening script). The website model also uses the broken plural مَغَارِبَةٌ — both are correct.
Row 5 shows why language names end in ـِيَّةُ: اللُّغَةُ is feminine.
Check: thumbs-up reaction if you can tell me the ending for “she” (ـِيَّةٌ).`,
  },
  // 17 ───────────────────────────────────────────── GRAMMAR 3 formula
  {
    type: 'formula', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 3 · say where a place is', title: 'Where is it? Country + place', ar: 'أَيْنَ يَقَعُ البَلَدُ؟',
    cols: [
      { label: 'country (what?)', ar: 'البَلَدُ', color: '1B3B6F', pale: 'EEF3FA' },
      { label: 'place word (key word)', ar: 'أَيْنَ؟', color: '0E7C86', pale: 'E3F2F3' },
      { label: 'place', ar: 'المَكَانُ', color: '8A6D1E', pale: 'F8F0DC' },
    ],
    rows: [
      { en: 'Egypt is in Africa.', cells: ['مِصْرُ', '{k|فِي}', 'أَفْرِيقِيَا.'] },
      { en: 'Iraq is in Asia.', cells: ['العِرَاقُ', '{k|فِي}', 'آسِيَا.'] },
      { en: 'Morocco is west of Algeria.', cells: ['المَغْرِبُ', '{k|غَرْبَ}', 'الجَزَائِرِ.'] },
      { en: 'Yemen is south of Saudi Arabia.', cells: ['اليَمَنُ', '{k|جَنُوبَ}', 'السُّعُودِيَّةِ.'] },
      { en: 'France is north of Spain. (website game)', cells: ['فَرَنْسَا', '{k|شَمَالَ}', 'إِسْبَانْيَا.'] },
    ],
    foot: 'No word for “is”: مِصْرُ فِي أَفْرِيقِيَا = Egypt (is) in Africa. Use شَمَالَ / جَنُوبَ / شَرْقَ / غَرْبَ + a place.',
    notes: `GRAMMAR PART 3 — the nominal sentence with a place (2 min). Topic C grammar focus: “Nisba adjectives; prepositions; nominal sentences” and the Topic C grammar spine “Place expressions, compass directions and locative prepositions”.
Read each line in three beats: country → place word → place. Students tap the three beats.
Key point for Core: Arabic has NO word for “is” in these sentences.
Row 5 is from the website Map & Compass game (فَرَنْسَا شَمَالَ إِسْبَانْيَا). Rows 1–4 are teacher-made with website vocabulary so that students practise Arab countries.
Develop/Stretch: after شَمَالَ / جَنُوبَ / شَرْقَ / غَرْبَ the place is genitive (ending ـِ): غَرْبَ الجَزَائِرِ. With a diptote it is a fatḥa: شَرْقَ تُونُسَ.`,
  },
  // 18 ───────────────────────────────────────────── GRAMMAR 4 FLEX diptotes
  {
    type: 'ruleCards', stage: 'teach', flex: true, eyebrow: 'Grammar focus · Part 4 · FLEX · Stretch', title: 'Country names that refuse tanwīn', ar: 'المَمْنُوعُ مِنَ الصَّرْفِ',
    cards: [
      { chip: 'NORMAL', head: 'مِنَ العِرَاقِ', big: 'مِنَ العِرَاقِ', en: 'from Iraq — normal kasra ـِ', clue: 'Most country names with ال take the normal kasra after مِنْ / فِي / إِلَى.' },
      { chip: 'DIPTOTE · GENITIVE', color: '7B3FA0', head: 'مِنْ لُبْنَانَ', big: 'أَنَا مِنْ لُبْنَانَ', en: 'I am from Lebanon — fatḥa ـَ, never ـٍ', clue: 'Diptotes: مِصْرُ، لُبْنَانُ، قَطَرُ، عُمَانُ، تُونُسُ، فِلَسْطِينُ.' },
      { chip: 'DIPTOTE · ACCUSATIVE', color: '7B3FA0', head: 'زُرْتُ مِصْرَ', big: 'زُرْتُ مِصْرَ فِي الصَّيْفِ', en: 'I visited Egypt in the summer — never مِصْرًا', clue: 'After a verb the diptote also takes a bare fatḥa.' },
    ],
    error: { text: 'Adding tanwīn to a diptote — writing مِنْ لُبْنَانٍ or زُرْتُ مِصْرًا.', pairs: [['مِنْ لُبْنَانَ', 'مِنْ لُبْنَانٍ'], ['زُرْتُ مِصْرَ', 'زُرْتُ مِصْرًا']] },
    notes: `GRAMMAR PART 4 — diptotes (FLEX — Stretch focus; if time is short, say only: “Egypt and Lebanon never take tanwīn”).
Website rule “Diptote country names”: no tanwīn; fatḥa instead of kasra. A diptote takes a ḍamma when nominative and a fatḥa in both the accusative and the genitive. Examples (website): أَنَا مِنْ لُبْنَانَ · زُرْتُ مِصْرَ فِي الصَّيْفِ.
Website common error: “Adding tanwīn to a diptote — writing مِنْ لُبْنَانٍ or زُرْتُ مِصْرًا. These names take a bare fatḥa in the genitive and accusative.”
• CORE: not required today — listen only.
• DEVELOP: recognise the six diptotes in the clue box.
• STRETCH: use one diptote after مِنْ and one after a verb in the writing task.`,
  },
  // 19 ───────────────────────────────────────────── GRAMMAR 5 FLEX website rules
  {
    type: 'ruleRows', stage: 'teach', flex: true, eyebrow: 'Grammar focus · Part 5 · website examples · FLEX', title: 'The four rules with website examples', ar: 'أَمْثِلَةُ القَوَاعِدِ',
    rows: G.rules.map((r) => ({ title: r.heading, formula: r.formula, examples: r.examples })),
    notes: `WEBSITE GRAMMAR RULES AND EXAMPLES (FLEX — use for revision or homework). Every example sentence from the website grammar tab, one row per rule.
Website overview: “${G.overview}”
Read one row at a time; students choose ONE example per rule to copy. Core: rows 1 and 2. Stretch: explain rules 3 and 4 in one English sentence each (past for history, present for today; qualify claims about language).`,
  },
  // 20–21 ────────────────────────────────────────── QUICK CHECK
  {
    type: 'mcq', stage: 'teach', min: 2, eyebrow: 'Check for understanding · hinge questions', title: 'Quick check', ar: 'فَحْصٌ سَرِيعٌ',
    seed: 3,
    questions: [
      fromSite(G.quiz[0]),
      fromSite(G.quiz[1]),
      fromSite(G.quiz[7]),
      fromSite(site.mission.rounds[7], { prompt: 'Complete: هُوَ مُهَنْدِسٌ ___ .' }),
    ],
    answerSlide: { eyebrow: 'Check for understanding · answers', title: 'Answers and reasons', ar: 'الإِجَابَاتُ وَالتَّعْلِيلُ' },
    notes: `CHECK FOR UNDERSTANDING (2 min) — website grammar quiz questions 1, 2 and 8, plus Arab World Mission round 8.
● Think 20s silently → everyone types four letters in chat together on “3-2-1-go”. “Show me” alternative: A/B/C fingers to camera (EAL: show, not tell).
Read the chat: if more than a quarter of the class misses a question, re-teach that rule with its grammar slide before moving on (Live feedback: correct misconceptions immediately).
Use the results to confirm routes for the You Do task.`,
    answerNotes: 'Go through each answer. Ask “Who can build on that?” (+) — a student explains why one wrong option is wrong (e.g. مَغْرِبَةٌ adds ـة to the country without ـِيّ).',
  },
  // 22 ───────────────────────────────────────────── I DO
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me build one description', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Choose a country', ar: '{m|المَغْرِبُ}', think: 'Start with the country. المَغْرِبُ = “the West” (like Maghrib prayer).' },
      { head: 'Say where it is', ar: '{k|فِي شَمَالِ} أَفْرِيقِيَا', think: 'No word for “is”: country + فِي + place.' },
      { head: 'Add the capital', ar: 'وَعَاصِمَتُهُ الرِّبَاطُ', think: 'عَاصِمَة = capital. ـهُ = its.' },
      { head: 'Who? Then the ending', ar: '{w|سَلْمَى} {m|مَغْرِبِ}{e|يَّةٌ}', think: 'Salmā is a girl → she → ـِيَّةٌ.' },
    ],
    legend: ['w', 'm', 'e', 'k'],
    legendLabels: { w: 'WHO', m: 'COUNTRY', e: 'ENDING', k: 'PLACE' },
    model: '{m|المَغْرِبُ} {k|فِي شَمَالِ} أَفْرِيقِيَا، وَعَاصِمَتُهُ الرِّبَاطُ. {w|سَلْمَى} {m|مَغْرِبِ}{e|يَّةٌ} مِنَ الرِّبَاطِ.',
    modelEn: 'Morocco is in the north of Africa, and its capital is Rabat. Salmā is Moroccan, from Rabat.',
    notes: `I DO (3 min) — teacher models with a think-aloud; students watch, then COPY the finished sentence into their books (framework: students copy the example so they can refer back to it).
Think-aloud script:
Step 1 — Choose a country: “I choose المَغْرِبُ. It means ‘the West’ — like the Maghrib prayer at sunset.”
Step 2 — Say where it is: “There is no ‘is’ in Arabic here. Country + فِي + place: فِي شَمَالِ أَفْرِيقِيَا.”
Step 3 — Add the capital: “عَاصِمَة is capital; ـهُ means its, because المَغْرِب is masculine.”
Step 4 — Who? Then the ending: “Salmā is a girl, so I need she → ـِيَّةٌ: مَغْرِبِيَّةٌ.”
Finish by reading the whole description twice; students read it chorally once.
Built from website language: Salmā is Moroccan from Rabat (listening script); الرِّبَاطُ is the capital of Morocco (Arab World Mission); عَاصِمَتُهُ الرِّبَاطُ (speaking model).`,
  },
  // 23 ───────────────────────────────────────────── MODEL SENTENCES
  {
    type: 'models', stage: 'ido', min: 1, eyebrow: 'I do · model sentences from the website', title: 'Four sentences to borrow', ar: 'جُمَلٌ نَمُوذَجِيَّةٌ',
    rows: [
      { ar: 'مِصْر ← {m|مِصْرِ}{e|يٌّ} / {m|مِصْرِ}{e|يَّةٌ}', en: 'Egypt → Egyptian (m.) / Egyptian (f.)', tip: 'The nisba ending carries a shadda on the yāʾ.' },
      { ar: 'أَنَا مِنْ لُبْنَانَ.', en: 'I am from Lebanon.', tip: 'A diptote takes a fatḥa after مِنْ, with no tanwīn.' },
      { ar: 'الأَمَازِيغِيَّةُ لُغَةٌ رَسْمِيَّةٌ فِي المَغْرِبِ وَالجَزَائِرِ.', en: 'Amazigh is an official language in Morocco and Algeria.', tip: 'Name a language other than Arabic.' },
      { ar: 'نَكْتُبُ جَمِيعًا بِالفُصْحَى، وَلٰكِنَّنَا نَتَحَدَّثُ بِلَهَجَاتٍ مُخْتَلِفَةٍ.', en: 'We all write in fuṣḥā, but we speak different dialects.', tip: 'A careful, accurate statement about the region.' },
    ],
    notes: `MODEL SENTENCES (1 min) — website patterns, grammar examples and listening script. Read each aloud; students copy TWO that are useful for them.
• Core: copy 1 and 2.
• Develop: copy 3 and change the country (e.g. الكُرْدِيَّةُ … فِي العِرَاقِ).
• Stretch: copy 4 and write a second sentence using the same structure.`,
  },
  // 24–25 ────────────────────────────────────────── BUILDER
  {
    type: 'builder', stage: 'wedo', min: 3, eyebrow: 'We do · guided practice · sentence builder', title: 'Build the sentence', ar: 'اِبْنِ الجُمْلَةَ',
    rows: [
      { en: 'Karīm is Iraqi, from Baghdad.', cols: [['كَرِيمٌ', 'سَلْمَى'], ['عِرَاقِيَّةٌ', 'عِرَاقِيٌّ'], ['مِنْ بَغْدَادَ.', 'مِنَ الرِّبَاطِ.']], key: [0, 1, 0], why: 'Karīm is a boy → ـِيٌّ.' },
      { en: 'Nūr is Lebanese, from Lebanon.', cols: [['نُورُ', 'كَرِيمٌ'], ['لُبْنَانِيٌّ', 'لُبْنَانِيَّةٌ'], ['مِنْ لُبْنَانٍ.', 'مِنْ لُبْنَانَ.']], key: [0, 1, 1], why: 'Nūr is a girl → ـِيَّةٌ; لُبْنَانَ has no tanwīn.' },
      { en: 'Egypt is in Africa, and Iraq is in Asia.', cols: [['المَغْرِبُ', 'مِصْرُ'], ['فِي أَفْرِيقِيَا', 'فِي أُورُوبَّا'], ['وَالعِرَاقُ فِي أُورُوبَّا.', 'وَالعِرَاقُ فِي آسِيَا.']], key: [1, 0, 1], why: 'No word for “is”: country + فِي + continent.' },
    ],
    answerSlide: { min: 0, eyebrow: 'We do · sentence builder answers', title: 'Check your sentences', ar: 'تَحَقَّقْ مِنْ جُمَلِكَ' },
    notes: `WE DO — sentence builder (3 min). Teacher-made from website language (listening script: Karīm is Iraqi from Baghdad; Nūr is Lebanese from Lebanon).
For each English sentence, students choose ONE box from each column (start from Column 1 on the right) and type the letters in chat, e.g. “1: A B A”.
↔ Rehearse 30s: whisper the full Arabic sentence before typing.
Prompt Core students: “Find the WHO first — boy or girl? — then the matching ending.” Develop/Stretch explain the wrong option in each column.
Separate the class if needed (framework): Develop/Stretch continue to the FLEX practice while you work with Core students on sentence 1.`,
  },
  // 26–27 ────────────────────────────────────────── MORE PRACTICE FLEX
  {
    type: 'mcq', stage: 'wedo', flex: true, eyebrow: 'We do · guided practice · quiz questions 3, 4, 6, 7', title: 'More practice', ar: 'تَدْرِيبٌ إِضَافِيٌّ',
    seed: 7,
    questions: [fromSite(G.quiz[2], { n: 5 }), fromSite(G.quiz[3], { n: 6 }), fromSite(G.quiz[5], { n: 7 }), fromSite(G.quiz[6], { n: 8 })],
    answerSlide: { eyebrow: 'We do · answers', title: 'Answers and reasons', ar: 'الإِجَابَاتُ وَالتَّعْلِيلُ' },
    notes: `WE DO — website grammar quiz questions 3, 4, 6 and 7 (FLEX, 2 min). If time is short these are homework on the website.
“Show me” alternative: students hold up A/B/C fingers to camera.
Q5–6 are the Stretch diptote rule; Q7–8 check the language facts from the vocabulary.`,
    answerNotes: 'Go through the answers; link each to the grammar rule or vocabulary card it tests.',
  },
  // 28–29 ────────────────────────────────────────── SORTER FLEX
  {
    type: 'sorter', stage: 'wedo', flex: true, eyebrow: 'We do · sort it', title: 'Which region is each country in?', ar: 'صَنِّفْ',
    categories: ['Mashriq and Gulf', 'Maghreb', 'Horn of Africa'],
    items: [
      { ar: 'تُونُسُ', cat: 1 }, { ar: 'العِرَاقُ', cat: 0 }, { ar: 'الصُّومَالُ', cat: 2 }, { ar: 'الجَزَائِرُ', cat: 1 },
      { ar: 'قَطَرُ', cat: 0 }, { ar: 'جِيبُوتِي', cat: 2 }, { ar: 'الأُرْدُنُّ', cat: 0 }, { ar: 'جُزُرُ القَمَرِ', cat: 2 }, { ar: 'المَغْرِبُ', cat: 1 },
    ],
    answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
    notes: `WE DO — website sorter (FLEX, 2 min).
Read each Arabic country and place it in its region. This supports listening, reading and the Continent & Compass challenge.
On Teams: drag the tiles into the columns live (PowerPoint edit mode) while students call out “tile → column”, or annotate on the shared screen.
Core: sort the tiles you know and say the nationality (تُونُسِيٌّ). Develop/Stretch: say a full sentence for each tile, e.g. تُونُسُ فِي شَمَالِ أَفْرِيقِيَا.`,
  },
  // 30–31 ────────────────────────────────────────── REPAIR
  {
    type: 'repair', stage: 'wedo', min: 2, eyebrow: 'We do · spot and fix', title: 'Repair the mistake', ar: 'صَحِّحِ الخَطَأَ',
    items: site.mistakes.map((m, i) => ({ ...m, hint: ['What is wrong? Check the ending on the country after مِنْ.', 'What is wrong? Check the WHO: boy or girl?', 'What is wrong? Is Arabic really the only language?'][i] })),
    answerSlide: { min: 0, eyebrow: 'We do · corrections', title: 'Fixed — and why', ar: 'التَّصْحِيحُ وَالسَّبَبُ' },
    notes: `WE DO — website common mistakes (2 min).
● 20s think: find the mistake → ↔ 30s: agree with a partner (chat DM or whisper) → ◎ share.
Prompt Core: “Check the WHO first — does the ending match?” Stretch: explain each fix with a grammar word (diptote, agreement, qualified claim).`,
  },
  // 32 ───────────────────────────────────────────── LISTENING
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · listening · teacher reads aloud twice', title: 'Listening: introductions from across the region', ar: 'الاِسْتِمَاعُ',
    seed: 1,
    questions: site.listening.questions.map((x) => fromSite(x)),
    side: { kind: 'core', label: 'CORE', text: 'Listen twice. 1st time: just listen. 2nd time: choose A, B or C.\nCore: answer questions 1–3 — listen for the names Salmā, Karīm and Nūr, and the countries.' },
    answerSlide: { min: 0, eyebrow: 'We do · listening answers', title: 'Listening: answers', ar: 'إِجَابَاتُ الاِسْتِمَاعِ' },
    notes: `LISTENING (4 min) — website script. Read it aloud yourself, twice, at natural speed with pauses (the website audio is “coming soon”).
Before listening: students read the questions (● 30s). Core: questions 1–3 only. Develop/Stretch: all 5.
Listen 1: just listen. Listen 2: note answers. Then chat the letters.
Support: after the second listening, show the read-along slide (Arabic + English, line by line) for Core students.

SCRIPT (read aloud):
${site.listening.script}`,
    answerNotes: 'Go through answers. For each, ask “Which Arabic words gave you the answer?” — the evidence line is under each card.',
  },
  // 33 ───────────────────────────────────────────── LISTENING READ-ALONG (inserted before answers by order below)
  // 35–36 ────────────────────────────────────────── APPLICATION (Continent & compass challenge)
  {
    type: 'mcq', stage: 'wedo', flex: true, eyebrow: 'We do · continent and compass challenge (website)', title: 'Where am I? Guess the country', ar: 'أَيْنَ أَنَا؟',
    seed: 5, cols: 3,
    questions: [
      q('Where am I?', ['المَغْرِبُ', 'مِصْرُ', 'العِرَاقُ'], 'I am in North Africa, west of Algeria. My capital is Rabat.', { ar: 'أَنَا دَوْلَةٌ فِي شَمَالِ أَفْرِيقِيَا، غَرْبَ الجَزَائِرِ. عَاصِمَتِي الرِّبَاطُ.', arBlock: true }),
      q('Where am I?', ['اليَمَنُ', 'الأُرْدُنُّ', 'تُونُسُ'], 'I am a country in Asia, south of Saudi Arabia.', { ar: 'أَنَا دَوْلَةٌ فِي آسِيَا، جَنُوبَ السُّعُودِيَّةِ.', arBlock: true }),
      q('Where am I?', ['العِرَاقُ', 'المَغْرِبُ', 'قَطَرُ'], 'I am a country in Asia, and my capital is Baghdad.', { ar: 'أَنَا دَوْلَةٌ فِي آسِيَا، وَعَاصِمَتِي بَغْدَادُ.', arBlock: true }),
    ],
    bottom: { head: 'YOUR TURN', fill: 'E3F2F3', line: '9CCFD4', color: '0E7C86', text: 'Write your own riddle in the chat: “أَنَا دَوْلَةٌ فِي ___ ، غَرْبَ ___ .” Your partner guesses the country and its nationality (he / she).' },
    answerSlide: { eyebrow: 'We do · challenge answers', title: 'Where am I? Answers', ar: 'الإِجَابَاتُ' },
    notes: `WE DO — Advanced application from the website (FLEX, 3 min): “Continent and compass challenge — place countries and regions on a simple map, add north/south/east/west clues and describe where people or places are without naming them first.”
The three riddles are teacher-made with website vocabulary. Read each riddle aloud twice; students answer A/B/C in the chat.
Website routes for this challenge — Core: complete accurately · Develop: add a reason or comparison · Stretch: change time frame or viewpoint (e.g. زُرْتُ … قَبْلَ سَنَتَيْنِ).
YOUR TURN: pairs write a riddle in the chat; the class guesses. Oracy: + build (add a clue) / ? challenge (“Is that really west?”).`,
    answerNotes: 'Reveal answers. The English line under each card translates the riddle for Core students. Ask a Stretch student to change one riddle into the past: كُنْتُ … / زُرْتُ …',
  },
  // 37 ───────────────────────────────────────────── SPEAKING
  {
    type: 'speaking', stage: 'youdo', min: 3, eyebrow: 'You do · say it before you write it', title: 'Speaking: introduce a country and its languages', ar: 'التَّحَدُّثُ',
    prompts: [
      { route: 'core', ar: 'أَيْنَ تَقَعُ مِصْرُ؟ وَمَا جِنْسِيَّةُ أَهْلِهَا؟' },
      { route: 'develop', ar: site.speaking.prompts[0] },
      { route: 'develop', ar: site.speaking.prompts[1] },
      { route: 'stretch', ar: site.speaking.prompts[2] },
    ],
    stems: [
      { route: 'core', ar: '______ فِي ______ ، وَأَهْلُهَا ______ ـِيُّونَ.' },
      { route: 'develop', ar: 'عَاصِمَتُهُ ______ ، وَتُسْتَعْمَلُ هُنَاكَ ______ .' },
      { route: 'stretch', ar: 'نَكْتُبُ بِالفُصْحَى، وَلٰكِنَّنَا ______ .' },
      { route: 'sum', ar: 'هُوَ / هِيَ اخْتَارَ / اخْتَارَتْ ______ .' },
    ],
    model: site.speaking.model.slice(0, 2).map(([who, ar, en]) => ({ who, ar, en: who === 'A' ? 'Choose an Arab country and talk about it.' : en })),
    notes: `SPEAKING REHEARSAL (3 min) — website speaking prompts (prompt 1 is a teacher-made Core prompt). No breakout rooms (saves setup time).
Sequence: ● 10s think → ↔ 45s everyone rehearses their answer aloud with mic muted (say it to yourself) → ◎ pairs on open mic: name two students (warned in advance); A asks, B answers; the rest of the class types one follow-up question in chat (+ / ?) → ↺ one student summarises the answer they heard.
Routes: Core uses prompt 1 with the Core stem (e.g. مِصْرُ فِي أَفْرِيقِيَا، وَأَهْلُهَا مِصْرِيُّونَ). Develop prompts 2–3; Stretch prompt 4.
Model (website) at the bottom — read it with a confident student first. The website model continues:
A: وَأَيُّ لُغَاتٍ تُسْتَعْمَلُ هُنَاكَ؟ (Follow-up on language)
B: تُسْتَعْمَلُ العَرَبِيَّةُ وَالأَمَازِيغِيَّةُ، وَالأَمَازِيغِيَّةُ لُغَةٌ رَسْمِيَّةٌ أَيْضًا، وَلَيْسَ الأَمْرُ نَفْسَهُ فِي كُلِّ الدُّوَلِ. (Accurate, qualified answer)
Safeguarding / sensitivity: students talk about countries in general — never press anyone to share their own nationality or family background.`,
  },
  // 38 ───────────────────────────────────────────── WRITING ROUTES
  {
    type: 'routes', stage: 'youdo', min: 9, eyebrow: 'You do · independent practice · 9 minutes', title: 'Write: choose your route', ar: 'اُكْتُبْ',
    core: { amount: '5 sentences', task: site.differentiation.core, how: 'Use the sentence frames and word bank (next slide). Start each sentence with a person or a country. Use the nationality tables in your notes.' },
    develop: { amount: '5 + 2 sentences', task: site.differentiation.develop, how: 'Use the Develop frames on the next slide. Add فِي + a place, and a language with إِلَى جَانِبِ العَرَبِيَّةِ.' },
    stretch: { amount: 'about 80 words', task: site.differentiation.stretch, how: 'Website writing task: introduce one Arab country in about 80 words. Checklist and phrase bank on the Stretch slide.' },
    notes: `YOU DO (9 min writing). Steer routes using the Do Now and quick-check results.
Routes are the website’s differentiation tasks:
• Core: ${site.differentiation.core}
• Develop: ${site.differentiation.develop}
• Stretch: ${site.differentiation.stretch} (website writing task: ${site.writing.prompt})
LIVE FEEDBACK: students post their first two sentences in the chat (or OneNote) after 3 minutes. Scan and correct misconceptions immediately — use private chat for individual corrections (Behaviour: quiet, individual).
Work with the less able: stay with Core students for the first 3 minutes; Develop/Stretch continue independently.
SEND: chunk the Core task — “Sentence 1 and 2 first, then show me.”
Extension (fast finishers): the reading on the Extension slides.
Pastoral: Self-Management point for students who work without prompting.`,
  },
  // 39 ───────────────────────────────────────────── FRAMES
  {
    type: 'frames', stage: 'youdo', eyebrow: 'You do · support · Core and Develop frames', title: 'Sentence frames and word bank', ar: 'قَوَالِبُ الجُمَلِ',
    core: [
      { en: 'Egypt is in Africa.', ar: '______ فِي أَفْرِيقِيَا / آسِيَا .' },
      { en: 'Morocco is west of Algeria.', ar: '______ غَرْبَ / شَرْقَ ______ .' },
      { en: 'Karīm is Iraqi.', ar: 'كَرِيمٌ ______ ـِيٌّ .' },
      { en: 'Salmā is Moroccan.', ar: 'سَلْمَى ______ ـِيَّةٌ .' },
      { en: 'The capital of … is …', ar: 'عَاصِمَةُ ______ هِيَ ______ .' },
    ],
    develop: [
      { en: 'In … people speak Arabic and …', ar: 'فِي ______ يَتَحَدَّثُ النَّاسُ العَرَبِيَّةَ وَ ______ .' },
      { en: '… is used alongside Arabic in …', ar: 'تُسْتَعْمَلُ ______ إِلَى جَانِبِ العَرَبِيَّةِ فِي ______ .' },
      { en: '… is an official language in …', ar: '______ لُغَةٌ رَسْمِيَّةٌ فِي ______ .' },
      { en: 'The people of … are …', ar: 'أَهْلُ ______ ______ ـِيُّونَ .' },
      { en: 'She is a … student.', ar: 'هِيَ طَالِبَةٌ ______ ـِيَّةٌ .' },
    ],
    bank: ['مِصْرُ', 'العِرَاقُ', 'المَغْرِبُ', 'لُبْنَانُ', 'الأُرْدُنُّ', 'تُونُسُ', 'أَفْرِيقِيَا', 'آسِيَا', 'شَمَالَ', 'جَنُوبَ', 'شَرْقَ', 'غَرْبَ', 'الأَمَازِيغِيَّةُ', 'الكُرْدِيَّةُ', 'القَاهِرَةُ', 'بَغْدَادُ', 'الرِّبَاطُ'],
    notes: `Keep on screen during writing — Core students complete the frames on the right; Develop students use the frames on the left.
Frames and word bank use only this lesson’s website language (EAL: sentence frame + word bank scaffold; same objective, adapted task). The capitals القَاهِرَةُ (Cairo) and بَغْدَادُ (Baghdad) appear in the website texts and mission; الرِّبَاطُ is the capital of Morocco (website mission).
EAL Band A–B students: matching first (country → nationality from the tables), then complete 3 frames.`,
  },
  // 40 ───────────────────────────────────────────── STRETCH TASK
  {
    type: 'stretchTask', stage: 'youdo', eyebrow: 'You do · stretch · the website writing task', title: 'Stretch: the full writing task', ar: 'مُهِمَّةُ التَّحَدِّي',
    task: site.writing.prompt,
    checklist: [...site.writing.checklist, 'Mix past and present on purpose: زُرْتُ … قَبْلَ سَنَتَيْنِ / تُسْتَعْمَلُ …'],
    phrases: [
      ['مِنْ أَجْمَلِ الدُّوَلِ العَرَبِيَّةِ …', 'one of the most beautiful Arab countries is …'],
      ['تُسْتَعْمَلُ فِيهِ … إِلَى جَانِبِ العَرَبِيَّةِ', '… is used there alongside Arabic'],
      ['وَلَاحَظْتُ أَنَّ اللَّهْجَةَ تَخْتَلِفُ', 'and I noticed that the dialect is different'],
      ['نَكْتُبُ جَمِيعًا بِالفُصْحَى', 'we all write in fuṣḥā'],
      ['وَلَيْسَ صَحِيحًا أَنَّ …', 'and it is not true that …'],
      ['فَالتَّنَوُّعُ فِيهَا كَبِيرٌ', 'for the diversity there is great'],
    ],
    notes: `Stretch students work from this slide. Checklist = website writing checklist (+ one line from the website grammar rule “Past for history, present for today”); phrase bank = phrases from the website model, reading text and listening script.
Live feedback for Stretch: check that there is one accurate nisba, one diptote after a preposition (no tanwīn) and one qualified statement.`,
  },
  // 41 ───────────────────────────────────────────── MODEL ANSWER
  {
    type: 'modelAnswer', stage: 'feedback', min: 1, eyebrow: 'Feedback · compare with the model', title: 'What a strong answer looks like', ar: 'نَمُوذَجُ الإِجَابَةِ',
    text: site.writing.model,
    en: 'Morocco is one of the most beautiful Arab countries, and its capital is Rabat. Its people are Moroccans: a male student from there is maghribī and a female student is maghribiyya. Arabic and Amazigh are used there, and Amazigh is an official language there. I also visited Egypt two years ago, and I noticed that the dialect is very different from the Moroccan dialect. We all write in fuṣḥā, but we speak different dialects. It is not true that the region has a single culture; its diversity is very great.',
    find: ['a nisba (he / she)', 'a diptote: زُرْتُ مِصْرَ', 'a language besides Arabic', 'a careful statement'],
    notes: `FEEDBACK (1 min) — website model answer (“Reveal an achievable model”), with an English translation for Core students.
Students find in the model (● 20s → ◎): a nisba for he and for she (مَغْرِبِيٌّ / مَغْرِبِيَّةٌ), the diptote زُرْتُ مِصْرَ, a language other than Arabic (الأَمَازِيغِيَّةُ), and the qualified statement (وَلَيْسَ صَحِيحًا أَنَّ …). Annotate as they call them out.
Then each student chooses ONE thing from the model to add to their own writing (specific, actionable feedback on the success criteria).`,
  },
  // 42 ───────────────────────────────────────────── SELF CHECK
  {
    type: 'selfCheck', stage: 'feedback', min: 1, eyebrow: 'Feedback · success criteria', title: 'Check your work', ar: 'قَيِّمْ عَمَلَكَ',
    items: [
      { route: 'core', text: site.success[0] },
      { route: 'core', text: 'I can say where a country is: فِي + continent, or شَمَالَ / جَنُوبَ / شَرْقَ / غَرْبَ.' },
      { route: 'develop', text: site.success[2] },
      { route: 'develop', text: site.success[3] },
      { route: 'stretch', text: site.success[1] },
    ],
    notes: `SELF-CHECK (1 min) against the website success criteria (the second Core line is the Topic C place focus). Students tick privately, then type one WWW and one EBI in the chat (English is fine).
Teacher: one whole-class feedback point from live feedback.
Pastoral: Curiosity & Growth for honest reflection and a harder target next lesson.`,
  },
  // 43–44 ────────────────────────────────────────── EXIT TICKET
  {
    type: 'mcq', stage: 'feedback', min: 2, eyebrow: 'Exit ticket · on your own', title: 'Exit ticket: three questions', ar: 'تَذْكِرَةُ الخُرُوجِ',
    seed: 4,
    questions: [fromSite(site.final[0]), fromSite(site.final[1], { prompt: 'Complete:', ar: 'سَافَرْنَا إِلَى ___ فِي الرَّبِيعِ.' }), fromSite(site.final[2])],
    bottom: { head: 'ON YOUR OWN · 2 MINUTES', text: 'Answer silently. When the timer ends, type your three letters in the chat: 1_ 2_ 3_. The other end-of-lesson questions are on the website.' },
    answerSlide: { min: 1, eyebrow: 'Exit ticket · answers', title: 'Exit ticket: answers', ar: 'إِجَابَاتُ تَذْكِرَةِ الخُرُوجِ' },
    answerBottom: { head: 'SCORE', fill: 'EEF3FA', line: 'C9D6EA', color: '1B3B6F', text: '3/3 → aim for Stretch next lesson  ·  2/3 → Develop  ·  0–1 → Core route and a quick check-in during the next Do Now.' },
    notes: `EXIT TICKET (2 min) — 3 of the website’s 4 end-of-lesson questions (“Final self-marking check”). Question 4 and the Arab World Mission are on the website for homework.
Anyone scoring low → Core route next lesson and a check-in during the Do Now.
Record Pastoral Tracker points now.`,
    answerNotes: 'Quick reveal. Students self-mark and type their score out of 3 in the chat.',
  },
  // 45–47 ────────────────────────────────────────── EXTENSION READING
  {
    type: 'passage', stage: 'youdo', flex: true, eyebrow: 'Extension · fast finishers or homework (Stretch)', title: 'Reading: one region, many languages', ar: 'القِرَاءَةُ',
    text: site.reading.text,
    glossary: [
      ['تَضُمُّ', 'includes'], ['جَامِعَةُ الدُّوَلِ العَرَبِيَّةِ', 'the Arab League'], ['تَمْتَدُّ', 'stretches'], ['المُحِيطُ الأَطْلَسِيُّ', 'the Atlantic Ocean'],
      ['الخَلِيجُ', 'the Gulf'], ['الإِعْلَامُ', 'the media'], ['التَّعْلِيمُ', 'education'], ['الحَيَاةُ اليَوْمِيَّةُ', 'daily life'], ['تَخْتَلِفُ', 'differs'], ['التَّنَوُّعُ', 'diversity'],
    ],
    notes: `EXTENSION — website reading text. For fast finishers during You Do, or Stretch homework. “You don’t need every word; find the words the question asks about.”
The green key-words panel is a teacher-made glossary so Develop students can also attempt it.
SEND reading strategy (Toolkit 1): cover the text with a piece of paper and uncover one sentence at a time.`,
  },
  {
    type: 'mcq', stage: 'youdo', flex: true, eyebrow: 'Extension · reading questions', title: 'Reading: questions', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 9,
    questions: site.reading.questions.map((x) => fromSite(x)),
    side: { kind: 'info', head: 'READ LIKE A DETECTIVE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: '1. Read the question first.\n2. Find ONE key word from the question in the text (a number, a country, a language).\n3. Read only that sentence again, then choose.' },
    answerSlide: { eyebrow: 'Extension · reading answers', title: 'Reading: answers', ar: 'إِجَابَاتُ القِرَاءَةِ' },
    notes: 'Reading questions from the website. The detective steps follow the SEND “modular reading” strategy: look at the title and link ideas; read one part at a time.',
    answerNotes: 'Answers from the website, with the evidence for each.',
  },
  // 48 ───────────────────────────────────────────── PREPARATION
  {
    type: 'prep', stage: 'prep', min: 2, eyebrow: 'Preparation for next lesson · about 10 minutes', title: 'Before TC-L02: get ready at home', ar: 'التَّحْضِيرُ لِلدَّرْسِ القَادِمِ',
    next: 'TC-L02 · Landscapes, Nature and Animals',
    words: [['جَبَلٌ', 'mountain', 'pl. جِبَالٌ'], ['نَهْرٌ', 'river', 'pl. أَنْهَارٌ'], ['صَحْرَاءُ', 'desert', 'pl. صَحَارَى'], ['غَابَةٌ', 'forest', 'pl. غَابَاتٌ'], ['حَيَوَانٌ', 'animal', 'pl. حَيَوَانَاتٌ']],
    questionEn: 'Write one Arabic sentence: which Arab country would you like to visit, and where is it?',
    questionAr: 'أَيَّ بَلَدٍ عَرَبِيٍّ تُحِبُّ أَنْ تَزُورَ؟ وَأَيْنَ يَقَعُ؟',
    homework: {
      core: 'Website · TC-L01 · play the “Map & Compass” game, then the vocabulary mission (8 questions).',
      develop: 'Write 5 sentences: country + فِي + continent + nationality for he and she (مِصْرِيٌّ / مِصْرِيَّةٌ).',
      stretch: 'Website · TC-L01 · “Arab World Mission” (14 rounds) and the reading “One region, many languages”.',
    },
    notes: `PREPARATION — flipped learning (2 min to explain).
Next lesson (TC-L02 · Landscapes, Nature and Animals) will spend class time USING this language, so students prepare it tonight — short, simple, easy to access (school guidance: “Simple, Short, Interesting, Relevant, Easy to access”). The five words come from the website Natural World vocabulary bank (Landscapes and Animals).
Follow-up: the next Do Now tests two of these words (Flipped Learning: keep it short AND follow up).
Homework by route (website tasks). No internet? Students copy the five words from this slide into their book now.`,
  },
  // 49 ───────────────────────────────────────────── CLOSE
  {
    type: 'close', next: 'TC-L02 · Landscapes, Nature and Animals', nextAr: 'التَّضَارِيسُ وَالطَّبِيعَةُ وَالحَيَوَانَاتُ', remember: 'Remember: 5 words + 1 sentence before next lesson.',
    notes: 'CLOSE — thank students, dismiss calmly. After the lesson: complete the Pastoral Tracker (attendance, character, self-management, curiosity; demerits only for the five listed concerns). Note any student below 2/3 on the exit ticket for a Do Now check-in next lesson.',
  },
];

// Insert the read-along listening slide straight after the listening questions (before its answer slide is drawn,
// the mcq builder draws question + answer together, so the read-along follows the answers — as in the template, it is
// used after the second listening).
const listenIdx = slides.findIndex((s) => s.title && s.title.startsWith('Listening:'));
slides[listenIdx].between = ({
  type: 'glossed', stage: 'wedo', eyebrow: 'We do · listening support · read along (Core)', title: 'The script — read along with English', ar: 'نَصُّ الاِسْتِمَاعِ',
  lines: [
    ['أَنَا سَلْمَى، وَأَنَا مَغْرِبِيَّةٌ مِنْ مَدِينَةِ الرِّبَاطِ.', 'I am Salmā, and I am Moroccan, from the city of Rabat.'],
    ['فِي بَيْتِنَا نَتَحَدَّثُ العَرَبِيَّةَ وَالأَمَازِيغِيَّةَ، لِأَنَّ الأَمَازِيغِيَّةَ لُغَةٌ رَسْمِيَّةٌ فِي المَغْرِبِ.', 'At home we speak Arabic and Amazigh, because Amazigh is an official language in Morocco.'],
    ['وَصَدِيقِي كَرِيمٌ عِرَاقِيٌّ مِنْ بَغْدَادَ، وَيَقُولُ إِنَّ الكُرْدِيَّةَ تُسْتَعْمَلُ إِلَى جَانِبِ العَرَبِيَّةِ فِي بِلَادِهِ.', 'My friend Karīm is Iraqi, from Baghdad. He says Kurdish is used alongside Arabic in his country.'],
    ['أَمَّا زَمِيلَتُنَا نُورُ فَهِيَ لُبْنَانِيَّةٌ، وَقَدْ جَاءَتْ مِنْ لُبْنَانَ قَبْلَ سَنَتَيْنِ.', 'As for our classmate Nūr, she is Lebanese; she came from Lebanon two years ago.'],
    ['نَحْنُ نَكْتُبُ جَمِيعًا بِالفُصْحَى، وَلٰكِنَّنَا نَتَحَدَّثُ بِلَهَجَاتٍ مُخْتَلِفَةٍ، وَأَحْيَانًا لَا نَفْهَمُ بَعْضَنَا بِسُرْعَةٍ.', 'We all write in fuṣḥā, but we speak different dialects, and sometimes we do not understand each other quickly.'],
  ],
  notes: `READ-ALONG (Core support) — show AFTER the second listening, or keep it for the answers discussion. The Arabic is the website script, line by line; the English is a teacher translation.
Read it once more while Core students follow. Annotate the words that gave each answer (مَغْرِبِيَّةٌ، الأَمَازِيغِيَّةَ، الكُرْدِيَّةَ، قَبْلَ سَنَتَيْنِ، بِالفُصْحَى).
Stretch: cover the English column and translate one line aloud.`,
});

module.exports = { meta, slides };
