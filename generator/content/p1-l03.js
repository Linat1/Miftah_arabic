'use strict';
/* P1-L03 · Mental Health and Wellbeing — website: Pathways › Progression › P1 › P1-L03 (the P1 grammar milestone: Type 1 conditional إِذَا + past form → سَـ + present,
 * reversed order, recognising لَوْ … لَـ and عِنْدَمَا; coping verbs يُعَانِي مِنْ · يَتَعَامَلُ مَعَ · يَتَغَلَّبُ عَلَى · يَسْعَى إِلَى; writing about mental health responsibly).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, builder and visual game used as published.
 * The website visual-game card with الاِسْتِرْخَاءِ (should be الاسْتِرْخَاءِ) is not used. English added to the patterns. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P1')({
  n: 3, fileTitle: 'Mental_Health_and_Wellbeing', chip: 'Grammar',
  title: 'Mental Health and Wellbeing — Talking About Stress and Happiness', arabic: 'الصِّحَّةُ النَّفْسِيَّةُ وَالعَافِيَةُ',
  focus: 'The P1 grammar milestone: the real conditional — إِذَا + a past-form verb, then سَـ + a present verb (إِذَا نِمْتَ مُبَكِّرًا، سَتَكُونُ أَكْثَرَ تَرْكِيزًا) — with the coping verbs يُعَانِي مِنْ · يَتَعَامَلُ مَعَ · يَتَغَلَّبُ عَلَى, written with care.',
  icon: 'FaFaceSmile', iconSet: 'fa6',
});

const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });

const site = D.site('P1-L03');
const RH = [['The Type 1 conditional', 'idhā + past-form verb → sa- + present verb'], ['The order can reverse', 'result + idhā + condition'], ['law signals a hypothetical', 'law + past → la- + past'], ['Coping verbs and their prepositions', 'yuʿānī min · yataʿāmal maʿa · yataghallab ʿalā · yasʿā ilā']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));

const slides = D.devLesson('P1-L03', {
  support: `• SAFEGUARDING FIRST: this lesson talks about stress, anxiety and depression. Never ask students to disclose their own mental health; let them speak about “a student” or “people”. Know your school’s safeguarding route and remind the class who they can talk to (a parent, a teacher, the pastoral team). If a student discloses something, follow school procedure after the lesson.
• Core: four Type 1 conditionals from the frames (إِذَا نِمْتَ … سَتَكُونُ …). Develop: add two coping verbs with their fixed prepositions. Stretch: a reversed conditional + a careful statement about seeking help (website ~80–90 words).
• Grammar links: the past tense of hollow and weak verbs (نِمْتُ · مَشَيْتُ, D units) · سَـ for the future (D units) · يُخَفِّفُ مِنْ (P1-L02) · يُنْصَحُ بِـ (P1-L01).`,
  teach: 'The real conditional (إِذَا … سَـ), recognising لَوْ, coping verbs, careful language.',
  wedo: 'Build conditionals, sort coping verbs, match the wellbeing picture.',
  next: { nextCode: 'P1-L04', nextTitle: 'Unhealthy Habits — Smoking, Alcohol and Risk Behaviours', nextAr: 'العَادَاتُ غَيْرُ الصِّحِّيَّةِ' },
  objectives: ['Build a Type 1 conditional: idhā + past-form verb → sa- with a present verb.', 'Recognise a Type 2 conditional with law and understand what it means.', 'Describe stress and coping with yuʿānī min, yataʿāmal maʿa and yataghallab ʿalā.', 'Write about wellbeing without diagnosing or advising beyond your knowledge.'],
  objNotes: 'Website objectives (Arabic shown in transliteration on the slide so the lines read cleanly). The route statements turn them into this lesson’s concrete targets.',
  rulesAr: 'الجُمْلَةُ الشَّرْطِيَّةُ',
  doNow: {
    questions: [
      q('What does التَّوَتُّرُ mean?', ['stress', 'happiness', 'sleep'], 'Prepared at home (P1-L02).'),
      q('What does القَلَقُ mean?', ['anxiety, worry', 'balance', 'peace'], 'Prepared at home (P1-L02).'),
      q('What does يَتَعَامَلُ مَعَ mean?', ['he copes with', 'he suffers from', 'he looks for'], 'Prepared at home (P1-L02).'),
      q('Complete: يُخَفِّفُ التَّمْرِينُ ___ التَّوَتُّرِ.', ['مِنَ', 'عَلَى', 'إِلَى'], 'P1-L02: benefit verbs with min.'),
      q('Choose the past of نَامَ for “I”.', ['نِمْتُ', 'نَامْتُ', 'نُمْتُ'], 'P1-L02: hollow verbs (zāda → zidtu).'),
    ],
    keyIdea: { text: 'If + a past-form verb … then sa- + a present verb — the meaning is the future.', ar: '{e|إِذَا نِمْتَ} مُبَكِّرًا، {k|سَتَكُونُ} أَكْثَرَ تَرْكِيزًا.' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P1-L02. Question 4 retrieves the min family (P1-L02); question 5 the hollow past (zāda → zidtu) — exactly the form needed after idhā today (nāma → nimta).',
  },
  routes: {
    core: ['I can build a real conditional with a frame.', 'I can name 8 feelings and states.'],
    develop: ['I can use two coping verbs with their prepositions.', 'I can reverse the order of a conditional.'],
    stretch: ['I can tell idhā, law and ʿindamā apart.', 'I can advise carefully without diagnosing.'],
  },
  bridge: [
    { ar: 'سَعَادَةٌ', urdu: 'سعادت', tr: 'saʿādat', en: 'Urdu: good fortune, honour · Arabic: happiness' },
    { ar: 'الطُّمَأْنِينَةُ', urdu: 'اطمینان', tr: 'iṭmīnān', en: 'peace of mind, reassurance' },
    { ar: 'التَّوَازُنُ', urdu: 'توازن', tr: 'tawāzun', en: 'balance' },
    { ar: 'شَرْطٌ', urdu: 'شرط', tr: 'shart', en: 'condition' },
    { ar: 'الضَّغْطُ', urdu: 'دباؤ', tr: 'dabāʾo', en: 'pressure (Urdu uses a different word)' },
  ],
  bridgeNotes: 'URDU BRIDGE: اطمینان، توازن and شرط are shared (بِشَرْطِ أَنْ = بشرط کہ). CAREFUL: Urdu سعادت is honour or good fortune (سعادت مند = dutiful); Arabic السَّعَادَةُ is everyday happiness.',
  core: ['الصِّحَّةُ النَّفْسِيَّةُ', 'التَّوَتُّرُ', 'القَلَقُ', 'السَّعَادَةُ', 'الضَّغْطُ', 'الإِرْهَاقُ', 'يُعَانِي مِنْ', 'يَتَعَامَلُ مَعَ', 'يَتَغَلَّبُ عَلَى', 'يَشْعُرُ بِـ', 'إِذَا', 'سَـ / سَوْفَ'],
  forms: {
    'يُعَانِي مِنْ': ihs('أُعَانِي', 'تُعَانِي'), 'يَتَعَامَلُ مَعَ': ihs('أَتَعَامَلُ', 'تَتَعَامَلُ'), 'يَتَغَلَّبُ عَلَى': ihs('أَتَغَلَّبُ', 'تَتَغَلَّبُ'),
    'يَسْعَى إِلَى': ihs('أَسْعَى', 'تَسْعَى'), 'يَبْحَثُ عَنْ': ihs('أَبْحَثُ', 'تَبْحَثُ'), 'يَطْلُبُ المُسَاعَدَةَ': ihs('أَطْلُبُ', 'تَطْلُبُ'),
    'يُخَفِّفُ مِنْ': ihs('أُخَفِّفُ', 'تُخَفِّفُ'), 'يَشْعُرُ بِـ': ihs('أَشْعُرُ', 'تَشْعُرُ'),
  },
  vocabNotes: {
    0: 'States and feelings: all are nouns with al-. الاكْتِئَابُ is a CLINICAL word (depression) — use it precisely; for everyday sadness say الحُزْنُ.',
    1: 'Coping verbs: learn each with its preposition — مِنْ · مَعَ · عَلَى · إِلَى · عَنْ · بِـ. With “she” every verb starts with ta- / tu-: تُعَانِي · تَتَعَامَلُ · تَشْعُرُ.',
    2: 'Conditional language: إِذَا is followed by a PAST-form verb; سَـ marks the result. عِنْدَمَا (when) is a time word, not a condition.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the real (Type 1) conditional (website rule 1) · Core', title: 'If you do this, you will feel that', ar: 'إِذَا … سَـ …',
      cols: [{ label: 'To whom', w: 1.9 }, { label: 'Condition: idhā + past form', w: 4.0, size: 22 }, { label: 'Result: sa- + present', w: 4.1, size: 22 }, { label: 'Meaning', w: 2.33 }],
      rows: [
        { core: true, cells: ['a boy', '{e|إِذَا تَمَرَّنْتَ} يَوْمِيًّا،', '{k|سَتَشْعُرُ} بِتَحَسُّنٍ.', 'exercise → feel better'] },
        { core: true, cells: ['a girl', '{e|إِذَا تَمَرَّنْتِ} يَوْمِيًّا،', '{k|سَتَشْعُرِينَ} بِتَحَسُّنٍ.', 'the same, to a girl'] },
        { cells: ['a group', '{e|إِذَا تَمَرَّنْتُمْ} يَوْمِيًّا،', '{k|سَتَشْعُرُونَ} بِتَحَسُّنٍ.', 'the same, to a group'] },
        { core: true, cells: ['a boy', '{e|إِذَا نِمْتَ} مُبَكِّرًا،', '{k|سَتَكُونُ} أَكْثَرَ تَرْكِيزًا.', 'sleep early → focus'] },
        { cells: ['about her', '{e|إِذَا نَظَّمَتْ} وَقْتَهَا،', '{k|سَتَشْعُرُ} بِسَيْطَرَةٍ أَكْبَرَ.', 'organise → in control'] },
      ],
      ltr: true,
      foot: 'The verb after idhā LOOKS past but MEANS a real future condition — the single most important form in P1 (website teaching point).',
      notes: `GRAMMAR PART 1 — website rule “The Type 1 conditional” (إِذَا + past-form verb → سَـ + present verb: “The condition clause uses a past-form verb regardless of the time meant; the result clause is marked with سَـ or سَوْفَ”).
Teach it as two halves: 1) إِذَا + past (pink) — comma — 2) سَـ + present (teal). Point out the agreement on BOTH halves: تَمَرَّنْتَ / سَتَشْعُرُ (boy) · تَمَرَّنْتِ / سَتَشْعُرِينَ (girl) · تَمَرَّنْتُمْ / سَتَشْعُرُونَ (group).
Website mistake and common error: إِذَا تَتَمَرَّنُ يَوْمِيًّا ✗ — a present verb after إِذَا. Quiz distractor: … تَشْعُرُ بِتَحَسُّنٍ أَمْسِ ✗ (no sa-, and a past time word).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · the past form after idhā (hollow and weak verbs) · Develop', title: 'Choose the right past form', ar: 'المَاضِي بَعْدَ «إِذَا»',
      cols: [{ label: 'Meaning', w: 2.2 }, { label: 'Present', w: 2.4, size: 24 }, { label: 'idhā + you (m.)', w: 2.7, size: 24 }, { label: 'idhā + you (f.)', w: 2.7, size: 24 }, { label: 'Type', w: 2.33 }],
      rows: [
        { core: true, cells: ['organise', 'تُنَظِّمُ', 'إِذَا {e|نَظَّمْتَ}', 'إِذَا {e|نَظَّمْتِ}', 'regular'] },
        { core: true, cells: ['sleep', 'تَنَامُ', 'إِذَا {e|نِمْتَ}', 'إِذَا {e|نِمْتِ}', 'hollow: ā → i'] },
        { cells: ['walk', 'تَمْشِي', 'إِذَا {e|مَشَيْتَ}', 'إِذَا {e|مَشَيْتِ}', 'weak: -ay-'] },
        { cells: ['go out', 'تَخْرُجُ', 'إِذَا {e|خَرَجْتَ}', 'إِذَا {e|خَرَجْتِ}', 'regular'] },
        { cells: ['talk', 'تَتَحَدَّثُ', 'إِذَا {e|تَحَدَّثْتَ}', 'إِذَا {e|تَحَدَّثْتِ}', 'Form V'] },
      ],
      ltr: true,
      foot: 'Same hollow rule as zāda → zidtu (P1-L02): nāma → nimta.',
      notes: `GRAMMAR PART 2 — website quiz items 2 and the mission: “The verb after إِذَا takes the past form; نَامَ is hollow, giving نِمْتَ.”
The five verbs are the ones in the website listening, reading and builder: نَظَّمْتَ · نِمْتَ · مَشَيْتَ · خَرَجْتَ · تَحَدَّثْتَ.
Drill: teacher says the present (تَنَامُ), students answer إِذَا نِمْتَ. Then switch to a girl: إِذَا نِمْتِ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · order, law and ʿindamā (website rules 2–3) · Develop / Stretch', title: 'Real, unreal — or just “when”?', ar: 'إِذَا · لَوْ · عِنْدَمَا',
      cards: [
        { chip: 'REVERSED · DEVELOP', color: '1E6B52', head: 'result + إِذَا', big: 'سَتَشْعُرُ بِتَحَسُّنٍ إِذَا نَظَّمْتَ وَقْتَكَ.', en: 'You will feel better if you organise your time.', clue: 'Still past after idhā.' },
        { chip: 'UNREAL · RECOGNISE', color: '6B4C9A', head: 'لَوْ … لَـ …', big: 'لَوْ نِمْتَ جَيِّدًا، لَكُنْتَ أَكْثَرَ تَرْكِيزًا.', en: 'If you had slept well, you would have focused more.', clue: 'It did not happen.' },
        { chip: 'TIME · STRETCH', color: 'C77700', head: 'عِنْدَمَا', big: 'عِنْدَمَا أَنَامُ جَيِّدًا أَشْعُرُ بِالرَّاحَةِ.', en: 'When I sleep well, I feel rested.', clue: 'Present, no sa-.' },
      ],
      error: { text: 'Website common error: never sa- or a present verb straight after idhā.', pairs: [['إِذَا نَظَّمْتَ وَقْتَكَ', 'إِذَا سَتُنَظِّمُ وَقْتَكَ']] },
      notes: `GRAMMAR PART 3 — website rules “The order can reverse” (no comma needed when the result comes first) and “لَوْ signals a hypothetical” (لَوْ + past → لَـ + past: recognise it now; you will produce it later). Website table: عِنْدَمَا + present → present = a time, not a condition.
Test the meaning: “Did it happen? → law.” “Might it happen? → idhā.” “It happens regularly → ʿindamā.”
Website quiz item 3 and mission: لَوْ نِمْتَ جَيِّدًا، لَكُنْتَ أَكْثَرَ تَرْكِيزًا is the hypothetical.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · coping verbs and careful language (website rule 4 + teaching point 2) · Develop / Stretch', title: 'Coping verbs — and saying it with care', ar: 'أَفْعَالُ التَّعَامُلِ',
      cols: [{ label: 'Meaning', w: 2.5 }, { label: 'Verb + preposition', w: 3.0, size: 22 }, { label: 'Example', w: 5.4, size: 20 }, { label: 'Prep.', w: 1.43 }],
      rows: [
        { core: true, cells: ['suffers from', '{e|يُعَانِي مِنْ}', 'يُعَانِي كَثِيرٌ مِنَ الطُّلَّابِ {e|مِنَ} التَّوَتُّرِ.', 'min'] },
        { core: true, cells: ['copes with', '{w|يَتَعَامَلُ مَعَ}', 'نَتَعَامَلُ {w|مَعَ} الضَّغْطِ بِطُرُقٍ مُخْتَلِفَةٍ.', 'maʿa'] },
        { cells: ['overcomes', '{k|يَتَغَلَّبُ عَلَى}', 'يَتَغَلَّبُ الإِنْسَانُ {k|عَلَى} القَلَقِ بِالدَّعْمِ.', 'ʿalā'] },
        { cells: ['strives for', '{m|يَسْعَى إِلَى}', 'أَسْعَى {m|إِلَى} تَوَازُنٍ بَيْنَ الدِّرَاسَةِ وَالرَّاحَةِ.', 'ilā'] },
        { cells: ['careful advice', '{p|يُنْصَحُ بِـ}', 'إِذَا اسْتَمَرَّتِ الأَعْرَاضُ، فَيُنْصَحُ بِاسْتِشَارَةِ مُخْتَصٍّ.', 'bi-'] },
      ],
      ltr: true,
      foot: 'Describe what people experience and what generally helps — do not diagnose, and do not promise a result (website teaching point).',
      notes: `GRAMMAR PART 4 — website rule “Coping verbs and their prepositions” (each preposition is fixed and takes the genitive) and teaching point “Write about mental health carefully”.
Website mistake: كُلُّ مَنْ يَشْعُرُ بِالحُزْنِ مُصَابٌ بِالاكْتِئَابِ ✗ → قَدْ يَشْعُرُ الإِنْسَانُ بِالحُزْنِ دُونَ أَنْ يَكُونَ مُصَابًا بِالاكْتِئَابِ (sadness is not a diagnosis). Quiz distractor: التَّوَتُّرُ يَخْتَفِي دَائِمًا بِالرِّيَاضَةِ ✗ (a promise).
Row 5 combines today’s grammar with P1-L01’s يُنْصَحُ بِـ: notice the fa- before the advice — فَيُنْصَحُ — because the result is not a sa- verb.
Useful hedges: قَدْ (may) · غَالِبًا (often) · عِنْدَ الحَاجَةِ (when needed).`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me give careful advice',
    steps: [
      { head: 'Normalise', ar: '{w|يُعَانِي} كَثِيرُونَ {w|مِنَ} التَّوَتُّرِ', think: 'It is common.' },
      { head: 'If …', ar: '{e|إِذَا نَظَّمْتَ} وَقْتَكَ', think: 'Past form.' },
      { head: '… then', ar: '{k|سَتَشْعُرُ} بِسَيْطَرَةٍ أَكْبَرَ', think: 'sa- + present.' },
      { head: 'Care', ar: 'فَيُنْصَحُ بِاسْتِشَارَةِ مُخْتَصٍّ', think: 'Advise, not diagnose.' },
    ],
    legend: ['w', 'e', 'k'], legendLabels: { w: 'COPING VERB', e: 'CONDITION', k: 'RESULT' },
    model: '{w|يُعَانِي} كَثِيرٌ مِنَ الطُّلَّابِ {w|مِنَ} التَّوَتُّرِ قَبْلَ الامْتِحَانَاتِ، وَهٰذَا أَمْرٌ طَبِيعِيٌّ. {e|إِذَا نَظَّمْتَ} وَقْتَكَ مُبَكِّرًا، {k|سَتَشْعُرُ} بِسَيْطَرَةٍ أَكْبَرَ. {e|وَإِذَا نِمْتَ} سَبْعَ سَاعَاتٍ، {k|سَتَكُونُ} أَكْثَرَ تَرْكِيزًا. وَإِذَا اسْتَمَرَّتِ الأَعْرَاضُ، فَيُنْصَحُ بِاسْتِشَارَةِ مُخْتَصٍّ.',
    modelEn: 'Many students suffer from stress before exams, and this is normal. If you organise your time early, you will feel more in control. And if you sleep seven hours, you will be more focused. If the symptoms continue, it is advised to consult a specialist.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “First I make it normal — many students. Now the condition: idhā + PAST — naẓẓamta. Comma. The result: sa- + present. Last, I advise carefully — I do not say what anyone has.”',
  },
  patternEn: ['if you exercise daily, you will feel better', 'if you had slept well, you would have focused more', 'he suffers from stress'],
  game: {
    title: 'Which habit? Match the picture',
    pick: [1, 2, 3],
    en: ['I feel stressed when there is a lot of work.', 'Good sleep is important for mental health.', 'It is helpful to talk to someone we trust.'],
    icons: [[['fa6', 'FaFaceFrown', 'C0386B'], ['fa6', 'FaBookOpen', '1D5FBF'], ['fa6', 'FaArrowUp', 'C77700']], [['fa6', 'FaBed', '6B4C9A'], ['fa6', 'FaMoon', '1D5FBF']], [['fa6', 'FaComments', '1E6B52'], ['fa6', 'FaHandshake', 'C77700']]],
    labels: ['stress from a pile of work', 'sleep at night', 'talking to someone'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Then turn each card into a conditional: إِذَا نِمْتَ جَيِّدًا، سَتَكُونُ … · إِذَا تَحَدَّثْتَ إِلَى صَدِيقٍ، سَتَشْعُرُ … Other website cards: walking in nature (not used: الاِسْتِرْخَاءِ should be الاسْتِرْخَاءِ), screen time, friends.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build a conditional (website builder)', title: 'Condition + result + coping', ar: 'اِبْنِ جُمْلَةً شَرْطِيَّةً',
      cols: [{ label: '1 · Condition (idhā + past)', w: 3.6, size: 20 }, { label: '2 · Result (sa- + present)', w: 3.8, size: 20 }, { label: '3 · Coping or care', w: 4.93, size: 19 }],
      rows: [
        { core: true, cells: ['إِذَا نَظَّمْتَ وَقْتَكَ', 'سَتَشْعُرُ بِسَيْطَرَةٍ أَكْبَرَ', 'وَأَتَعَامَلُ مَعَ الضَّغْطِ بِالرِّيَاضَةِ'] },
        { core: true, cells: ['إِذَا نِمْتَ سَبْعَ سَاعَاتٍ', 'سَتَكُونُ أَكْثَرَ تَرْكِيزًا', 'وَأَسْعَى إِلَى تَوَازُنٍ يَوْمِيٍّ'] },
        { cells: ['إِذَا مَشَيْتَ عِشْرِينَ دَقِيقَةً', 'سَتَتَحَسَّنُ حَالَتُكَ المِزَاجِيَّةُ', 'وَإِذَا اسْتَمَرَّ القَلَقُ فَيُنْصَحُ بِاسْتِشَارَةِ مُخْتَصٍّ'] },
      ],
      foot: 'Website builder: every condition fits every result — say three different sentences, then change them for a girl.',
      notes: `WE DO (3 min) — the website sentence builder. Pairs say three different conditionals (one box from each column).
Core: columns 1 + 2 only. Develop: add column 3. Stretch: make the sentence for a girl (إِذَا نَظَّمْتِ وَقْتَكِ، سَتَشْعُرِينَ …) and then reverse the order (سَتَشْعُرِينَ … إِذَا …).
Translations: column 3 — and I cope with pressure through sport · and I strive for a daily balance · and if the worry continues, it is advised to consult a specialist.`,
    },
  ],
  patch: { grammar: { ...site.grammar, rules } },
  patchNote: 'website rule headings and formulas shown in English and transliteration; all other website items are used as published (one visual-game card not used, see notes).',
  sorterTitle: 'Which preposition?',
  sorterNotes: 'Then say a phrase for each verb: يُعَانِي مِنَ التَّوَتُّرِ · يَتَعَامَلُ مَعَ الضَّغْطِ · يَتَغَلَّبُ عَلَى القَلَقِ · يُحَافِظُ عَلَى التَّوَازُنِ · يَسْعَى إِلَى السَّعَادَةِ · يَبْحَثُ عَنِ المُسَاعَدَةِ · يَحْتَاجُ إِلَى الرَّاحَةِ.',
  hints: ['After idhā: past or present?', 'yuʿānī + which preposition?', 'Sadness = a diagnosis?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: idhā … sa-.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write down two complete idhā sentences you hear.',
  gloss: [
    ['يُعَانِي كَثِيرٌ مِنَ الطُّلَّابِ مِنَ التَّوَتُّرِ قَبْلَ الامْتِحَانَاتِ، وَهٰذَا أَمْرٌ طَبِيعِيٌّ.', 'Many students suffer from stress before exams, and this is normal.'],
    ['وَأَنَا أَتَعَامَلُ مَعَ الضَّغْطِ بِتَنْظِيمِ وَقْتِي وَبِالمَشْيِ كُلَّ مَسَاءٍ. إِذَا نَظَّمْتَ وَقْتَكَ جَيِّدًا، سَتَشْعُرُ بِسَيْطَرَةٍ أَكْبَرَ.', 'I cope with pressure by organising my time and walking every evening. If you organise your time well, you will feel more in control.'],
    ['وَإِذَا نِمْتَ سَبْعَ سَاعَاتٍ، سَتَكُونُ أَكْثَرَ تَرْكِيزًا فِي اليَوْمِ التَّالِي. أَمَّا إِذَا أَهْمَلْتَ الرَّاحَةَ، فَسَيَزْدَادُ الإِرْهَاقُ.', 'If you sleep seven hours, you will be more focused the next day. But if you neglect rest, exhaustion will increase.'],
    ['وَلَيْسَ كُلُّ حُزْنٍ اكْتِئَابًا؛ فَإِذَا اسْتَمَرَّتِ الأَعْرَاضُ، يُنْصَحُ بِطَلَبِ المُسَاعَدَةِ مِنْ مُخْتَصٍّ.', 'Not every sadness is depression; if the symptoms continue, it is advised to seek help from a specialist.'],
    ['وَأَسْعَى إِلَى تَوَازُنٍ بَيْنَ الدِّرَاسَةِ وَالرَّاحَةِ.', 'And I strive for a balance between study and rest.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَاذَا يَحْدُثُ إِذَا نَظَّمْتَ وَقْتَكَ جَيِّدًا؟' },
      { route: 'develop', ar: 'كَيْفَ تَتَعَامَلُ مَعَ الضَّغْطِ قَبْلَ الامْتِحَانَاتِ؟' },
      { route: 'stretch', ar: 'مَتَى يُنْصَحُ بِطَلَبِ المُسَاعَدَةِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'إِذَا نَظَّمْتُ وَقْتِي، سَأَشْعُرُ ______ .' },
      { route: 'develop', ar: 'أَتَعَامَلُ مَعَ الضَّغْطِ عَنْ طَرِيقِ ______ .' },
      { route: 'stretch', ar: 'إِذَا اسْتَمَرَّ ______ ، فَيُنْصَحُ بِطَلَبِ ______ .' },
    ],
    modelEn: ['What happens if you organise your time well?', 'If I organise my time, I will feel more in control and stress will decrease.', 'And how do you cope with pressure?', 'I cope with it by walking and talking to a friend, and if the worry continues, it is advised to consult a specialist.'],
    notes: 'Website prompts and model. Students talk about exam pressure in general — no personal disclosure needed; “a student” or “people” is fine. Check: past form after idhā, sa- in the result. To a girl: نَظَّمْتِ وَقْتَكِ · تَتَعَامَلِينَ.',
  },
  write: {
    core: { amount: '4 conditionals', how: 'Website Core: four Type 1 conditionals using the sentence frames.' },
    develop: { amount: '60–70 words', how: 'Website Develop: add two coping verbs with their correct prepositions.' },
    stretch: { amount: '80–90 words', how: 'Website task: add a reversed conditional and a careful statement about seeking help.' },
  },
  frames: {
    core: [
      { en: 'If you organise your time, you will feel more in control.', ar: 'إِذَا نَظَّمْتَ وَقْتَكَ، ______ بِسَيْطَرَةٍ أَكْبَرَ.' },
      { en: 'If you sleep seven hours, you will be …', ar: 'إِذَا نِمْتَ سَبْعَ سَاعَاتٍ، سَتَكُونُ ______ .' },
      { en: 'If you walk every day, your mood will improve.', ar: 'إِذَا مَشَيْتَ كُلَّ يَوْمٍ، ______ حَالَتُكَ المِزَاجِيَّةُ.' },
      { en: 'If you talk to a friend, you will feel …', ar: 'إِذَا تَحَدَّثْتَ إِلَى صَدِيقٍ، سَتَشْعُرُ ______ .' },
    ],
    develop: [
      { en: 'Many students suffer from …', ar: 'يُعَانِي كَثِيرٌ مِنَ الطُّلَّابِ مِنْ ______ .' },
      { en: 'I cope with pressure by …', ar: 'أَتَعَامَلُ مَعَ الضَّغْطِ عَنْ طَرِيقِ ______ .' },
      { en: 'I strive for a balance between … and …', ar: 'أَسْعَى إِلَى تَوَازُنٍ بَيْنَ ______ وَ ______ .' },
      { en: 'If the symptoms continue, it is advised to seek …', ar: 'إِذَا اسْتَمَرَّتِ الأَعْرَاضُ، فَيُنْصَحُ بِطَلَبِ ______ .' },
    ],
    bank: ['التَّوَتُّرُ', 'القَلَقُ', 'الضَّغْطُ', 'الإِرْهَاقُ', 'الرَّاحَةُ', 'التَّرْكِيزُ', 'بِتَحَسُّنٍ', 'بِسَيْطَرَةٍ أَكْبَرَ', 'الرِّيَاضَةُ', 'الحَدِيثُ إِلَى صَدِيقٍ', 'تَنْظِيمُ الوَقْتِ', 'اسْتِشَارَةُ مُخْتَصٍّ'],
  },
  stretch: [
    ['وَهٰذَا أَمْرٌ طَبِيعِيٌّ', 'and this is normal'],
    ['سَتَقِلُّ المُفَاجَآتُ', 'surprises will decrease'],
    ['صَدِيقٌ أَثِقُ بِهِ', 'a friend I trust'],
    ['وَلَيْسَ كُلُّ حُزْنٍ اكْتِئَابًا', 'and not every sadness is depression'],
    ['وَأَثَّرَتْ فِي الحَيَاةِ اليَوْمِيَّةِ', 'and affected daily life'],
  ],
  modelEn: 'Many students suffer from stress before exams, and this is normal. If you organise your time early, surprises will decrease and you will feel more in control. If you go out for a twenty-minute walk every day, your mood will improve. If you sleep seven hours, you will be more focused. I cope with pressure through sport and talking to a friend I trust, and I strive for a balance between study and rest. Not every sadness is depression; if the symptoms continue and affect daily life, it is advised to consult a specialist.',
  find: ['three idhā conditionals (past form)', 'a result with sa-', 'two coping verbs with prepositions', 'a careful statement (yunṣaḥ bi-)'],
  modelNotes: 'Website writing model. Evidence: إِذَا نَظَّمْتَ … سَتَقِلُّ · إِذَا خَرَجْتَ … سَتَتَحَسَّنُ · إِذَا نِمْتَ … سَتَكُونُ · يُعَانِي … مِنَ التَّوَتُّرِ · أَتَعَامَلُ مَعَ الضَّغْطِ · أَسْعَى إِلَى تَوَازُنٍ · لَيْسَ كُلُّ حُزْنٍ اكْتِئَابًا · فَيُنْصَحُ بِاسْتِشَارَةِ مُخْتَصٍّ.',
  selfCheck: [
    { route: 'core', text: 'Every verb after idhā is in the past form.' },
    { route: 'core', text: 'Every result has sa- (or sawfa) + a present verb.' },
    { route: 'develop', text: 'My coping verbs have the right preposition.' },
    { route: 'develop', text: 'I used a comma when the condition comes first.' },
    { route: 'stretch', text: 'I advised carefully and did not diagnose anyone.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['عَادَاتٍ صَغِيرَةً', 'small habits'], ['مُفَاجَآتُ اليَوْمِ', 'the day’s surprises'], ['حَالَتُكَ المِزَاجِيَّةُ', 'your mood'], ['تَثِقُ بِهِ', 'you trust'], ['العِبْءَ', 'the burden'],
    ['أَخَفُّ', 'lighter'], ['يُنَاسِبُ', 'suits'], ['بَدِيلًا عَنِ العِلَاجِ', 'a substitute for treatment'], ['دَعْمٌ إِضَافِيٌّ', 'extra support'], ['اسْتِشَارَةِ مُخْتَصٍّ', 'consulting a specialist'],
  ],
  prep: {
    words: [['التَّدْخِينُ', 'smoking', '—'], ['الإِدْمَانُ', 'addiction', '—'], ['يُقْلِعُ عَنْ', 'he gives up', 'تُقْلِعُ she'], ['يُضْعِفُ', 'it weakens', 'تُضْعِفُ she'], ['الوِقَايَةُ', 'prevention', '—']],
    questionEn: 'Why do you think it is hard for people to give up smoking?',
    questionAr: 'لَيْسَ سَهْلًا أَنْ يُقْلِعَ الإِنْسَانُ عَنِ التَّدْخِينِ، لِأَنَّ ______ .',
    homework: {
      core: 'Learn 8 feelings and the coping verbs; write four idhā sentences.',
      develop: 'A 60–70-word paragraph on coping with exam pressure with two coping verbs.',
      stretch: 'Website writing task: 80–90 words with three conditionals and a careful statement.',
    },
    wordsSource: 'The five words come from the website P1-L04 vocabulary (risk behaviours and prevention).',
  },
  remember: 'Remember: idhā + a PAST-form verb, comma, sa- + a present verb (idhā nimta … sa-takūnu) — law is for what did not happen — and write about mental health with care: advise, never diagnose.',
});

module.exports = { meta, slides };
