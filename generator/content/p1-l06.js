'use strict';
/* P1-L06 · Healthcare Systems — website: Pathways › Progression › P1 › P1-L06 (active treatment verbs يُشَخِّصُ · يُعَالِجُ · يَصِفُ + object, يُحِيلُ إِلَى;
 * the medical passive يُشَخَّصُ · يُعَالَجُ · يُوصَفُ · يُحَالُ · تُجْرَى with a nominative subject; narrating across past, present and conditional).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing and visual game used as published. English added to the patterns. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P1')({
  n: 6, fileTitle: 'Healthcare_Systems_Hospitals_Doctors_Treatment', chip: 'Grammar',
  title: 'Healthcare Systems — Hospitals, Doctors and Treatment', arabic: 'أَنْظِمَةُ الرِّعَايَةِ الصِّحِّيَّةِ',
  focus: 'Describe the patient’s journey with active verbs (يُشَخِّصُ الطَّبِيبُ المَرَضَ · يُحِيلُ … إِلَى مُتَخَصِّصٍ) and the medical passive with a nominative subject (يُشَخَّصُ المَرِيضُ · يُوصَفُ الدَّوَاءُ · تُجْرَى العَمَلِيَّةُ), then narrate a visit across three tenses.',
  icon: 'FaUserDoctor', iconSet: 'fa6',
});

const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const act = (active) => ({ tag: 'active', forms: [{ l: 'active', ar: active }] });

const site = D.site('P1-L06');
const RH = [['Active treatment verbs', 'yushakhkhiṣ / yuʿālij + object · yuḥīl ilā + genitive'], ['Forming the medical passive', 'yufaʿʿilu → yufaʿʿalu'], ['yaṣif and its passive', 'yaṣif al-dawāʾa → yūṣaf al-dawāʾu'], ['Narrating an experience', 'past → present → conditional']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));

const slides = D.devLesson('P1-L06', {
  support: `• Core: 10 healthcare words + five sentences pairing an active verb with its passive (يُشَخِّصُ → يُشَخَّصُ). Develop: add a referral (يُحَالُ إِلَى) and a conditional. Stretch: the website ~80–90-word pathway or personal experience moving through past, present and future.
• Sensitivity: some students may have had difficult hospital experiences, or family members who are ill. Let them describe “a patient” rather than themselves. Different countries have different systems — avoid ranking them.
• Grammar links: the passive pattern was met with يُوصَى · يُنْصَحُ (P1-L01) and يُوصَفُ بِأَنَّهُ (P1-L04) · the nominative subject (GM-CASE-01) · Type 1 conditional (P1-L03).`,
  teach: 'Active verbs and complements, forming the medical passive, three tenses.',
  wedo: 'Active ↔ passive drill, sort the verbs, match the healthcare picture.',
  next: { nextCode: 'P1-L07', nextTitle: 'Public Health Campaigns — Persuasive Health Communication', nextAr: 'حَمَلَاتُ الصِّحَّةِ العَامَّةِ' },
  objectives: ['Name parts of a healthcare system and stages of treatment.', 'Use the medical passive: yushakhkhaṣ, yuʿālaj, yūṣaf, yuḥāl.', 'Use yushakhkhiṣ, yuʿālij, yaṣif and yuḥīl ilā in the active voice with correct complements.', 'Narrate a healthcare experience using past, present and conditional.'],
  objNotes: 'Website objectives (Arabic shown in transliteration on the slide so the lines read cleanly). The route statements turn them into this lesson’s concrete targets.',
  rulesAr: 'المَعْلُومُ وَالمَجْهُولُ',
  doNow: {
    questions: [
      q('What does العِيَادَةُ mean?', ['the clinic', 'the pharmacy', 'the hospital'], 'Prepared at home (P1-L05).'),
      q('What does مَوْعِدٌ mean?', ['an appointment', 'a medicine', 'a doctor'], 'Prepared at home (P1-L05).'),
      q('What does وَصْفَةٌ طِبِّيَّةٌ mean?', ['a prescription', 'a diagnosis', 'an operation'], 'Prepared at home (P1-L05).'),
      q('Choose the passive: “It is recommended to …”', ['يُوصَى بِـ', 'يُوصِي بِـ', 'أَوْصَى بِـ'], 'P1-L01: the impersonal passive.'),
      q('Complete: يُؤَثِّرُ الضَّوْءُ الأَزْرَقُ ___ النَّوْمِ.', ['عَلَى', 'بِـ', 'إِلَى'], 'P1-L05: cause-effect verbs.'),
    ],
    keyIdea: { text: 'Active names the doctor. Passive names the patient — and the patient becomes nominative.', ar: 'يُشَخِّصُ الطَّبِيبُ {w|المَرِيضَ} · {k|يُشَخَّصُ} {k|المَرِيضُ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P1-L05. Question 4 retrieves the passive يُوصَى (P1-L01) — today the same pattern becomes the medical passive; question 5 retrieves the P1-L05 complements.',
  },
  routes: {
    core: ['I can name 10 healthcare words.', 'I can pair an active verb with its passive.'],
    develop: ['I can describe a referral (yuḥāl ilā).', 'I can keep the passive subject nominative.'],
    stretch: ['I can narrate a visit in three tenses.', 'I can use the past passive (ʿūlijtu).'],
  },
  bridge: [
    { ar: 'طَبِيبٌ', urdu: 'طبیب', tr: 'tabīb', en: 'doctor (Urdu: a traditional physician, hakīm)' },
    { ar: 'مَرِيضٌ', urdu: 'مریض', tr: 'marīz', en: 'patient, ill person' },
    { ar: 'عِلَاجٌ', urdu: 'علاج', tr: 'ilāj', en: 'treatment' },
    { ar: 'تَشْخِيصٌ', urdu: 'تشخیص', tr: 'tashkhīs', en: 'diagnosis' },
    { ar: 'دَوَاءٌ', urdu: 'دوا', tr: 'dawā', en: 'medicine' },
  ],
  bridgeNotes: 'URDU BRIDGE: almost every key noun is shared — مریض، علاج، تشخیص، دوا. Students can lean on Urdu for meaning and focus their energy on the VERBS and the passive. Note: Urdu علاج کرنا = Arabic يُعَالِجُ.',
  core: ['المُسْتَشْفَى', 'العِيَادَةُ', 'الطَّوَارِئُ', 'طَبِيبٌ مُتَخَصِّصٌ', 'المَرِيضُ', 'مَوْعِدٌ', 'يُشَخِّصُ', 'يُعَالِجُ', 'يَصِفُ دَوَاءً', 'يُحِيلُ إِلَى', 'يُشَخَّصُ', 'يُعَالَجُ'],
  forms: {
    'المُسْتَشْفَى': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'المُسْتَشْفَيَاتُ' }] }, 'العِيَادَةُ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'العِيَادَاتُ' }] },
    'مُمَرِّضٌ / مُمَرِّضَةٌ': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'مُمَرِّضُونَ / مُمَرِّضَاتٌ' }, { l: 'f.', ar: 'مُمَرِّضَةٌ' }] },
    'المَرِيضُ': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'المَرْضَى' }, { l: 'f.', ar: 'المَرِيضَةُ' }] },
    'طَبِيبٌ عَامٌّ': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'أَطِبَّاءُ' }, { l: 'f.', ar: 'طَبِيبَةٌ عَامَّةٌ' }] },
    'مَوْعِدٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'مَوَاعِيدُ' }] },
    'يُشَخِّصُ': ihs('أُشَخِّصُ', 'تُشَخِّصُ'), 'يُعَالِجُ': ihs('أُعَالِجُ', 'تُعَالِجُ'), 'يَصِفُ دَوَاءً': ihs('أَصِفُ', 'تَصِفُ'), 'يُحِيلُ إِلَى': ihs('أُحِيلُ', 'تُحِيلُ'), 'يَسْتَشِيرُ': ihs('أَسْتَشِيرُ', 'تَسْتَشِيرُ'),
    'يُشَخَّصُ': act('يُشَخِّصُ'), 'يُعَالَجُ': act('يُعَالِجُ'), 'يُوصَفُ': act('يَصِفُ'), 'يُحَالُ': act('يُحِيلُ'), 'يُفْحَصُ': act('يَفْحَصُ'), 'يُجْرَى': act('يُجْرِي'),
  },
  vocabNotes: {
    0: 'The system. المَرِيضُ has an irregular plural: المَرْضَى. الطَّوَارِئُ is a diptote (no tanwīn).',
    1: 'Treatment verbs (active): the doer is named — يُشَخِّصُ الطَّبِيبُ … Most take a direct object; يُحِيلُ is fixed with إِلَى. To prescribe is يَصِفُ (Form I), never يُوصِفُ.',
    2: 'The medical passive: each card shows its active partner. The passive vowels are u … a: yu-shakh-kha-ṣu · yu-ʿā-la-ju · yū-ṣa-fu. With a feminine subject: تُجْرَى العَمَلِيَّةُ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · the active treatment verbs (website rule 1) · Core', title: 'Who does what: the doctor', ar: 'المَبْنِيُّ لِلْمَعْلُومِ',
      cols: [{ label: 'Meaning', w: 2.3 }, { label: 'Verb', w: 2.6, size: 22 }, { label: 'Example', w: 5.8, size: 20 }, { label: 'Then', w: 1.63 }],
      rows: [
        { core: true, cells: ['diagnoses', '{w|يُشَخِّصُ}', 'يُشَخِّصُ الطَّبِيبُ {w|المَرَضَ}.', 'object'] },
        { core: true, cells: ['treats', '{w|يُعَالِجُ}', 'تُعَالِجُ الطَّبِيبَةُ {w|المَرِيضَ}.', 'object'] },
        { core: true, cells: ['prescribes', '{w|يَصِفُ}', 'يَصِفُ الطَّبِيبُ {w|دَوَاءً} مُنَاسِبًا.', 'object'] },
        { cells: ['refers to', '{e|يُحِيلُ إِلَى}', 'يُحِيلُ الطَّبِيبُ المَرِيضَ {e|إِلَى} مُتَخَصِّصٍ.', 'obj. + ilā'] },
        { cells: ['consults', '{w|يَسْتَشِيرُ}', 'يَسْتَشِيرُ المَرِيضُ {w|طَبِيبًا} عَامًّا.', 'object'] },
      ],
      ltr: true,
      foot: 'Website teaching point: yaṣif al-dawāʾ, NOT yūṣif — to prescribe is the Form I verb waṣafa / yaṣif.',
      notes: `GRAMMAR PART 1 — website rule “Active treatment verbs” (most take a direct object; يُحِيلُ is fixed with إِلَى) and teaching point “يَصِفُ الدَّوَاءَ, not يُوصِفُ”.
Website mistakes: يُوصِفُ الطَّبِيبُ دَوَاءً ✗ · يُحِيلُ … عَلَى مُتَخَصِّصٍ ✗ · quiz: يُشَخِّصُ الطَّبِيبُ بِالمَرَضِ ✗.
Row 2: a female doctor → تُعَالِجُ الطَّبِيبَةُ (verb agrees). Point out that the doer (الطَّبِيبُ) is nominative and the object is accusative — that is about to change.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 2 · forming the medical passive (website rules 2–3) · Core / Develop', title: 'Active → passive', ar: 'المَبْنِيُّ لِلْمَجْهُولِ',
      cols: [{ label: 'Form', w: 1.9 }, { label: 'Active', w: 2.3, size: 24 }, { label: 'Passive', w: 2.3, size: 24 }, { label: 'Passive sentence', w: 5.83, size: 20 }],
      rows: [
        { core: true, cells: ['II', 'يُشَخِّصُ', '{k|يُشَخَّصُ}', '{k|يُشَخَّصُ} المَرِيضُ فِي العِيَادَةِ.'] },
        { core: true, cells: ['III', 'يُعَالِجُ', '{k|يُعَالَجُ}', '{k|يُعَالَجُ} المَرْضَى مَجَّانًا.'] },
        { cells: ['I', 'يَفْحَصُ', '{k|يُفْحَصُ}', '{k|يُفْحَصُ} المَرِيضُ أَوَّلًا.'] },
        { core: true, cells: ['I (w-)', 'يَصِفُ', '{k|يُوصَفُ}', '{k|يُوصَفُ} الدَّوَاءُ حَسَبَ الحَالَةِ.'] },
        { cells: ['IV (hollow)', 'يُحِيلُ', '{k|يُحَالُ}', '{k|يُحَالُ} المَرِيضُ إِلَى مُتَخَصِّصٍ.'] },
        { cells: ['IV (weak)', 'يُجْرِي', '{k|يُجْرَى}', '{k|تُجْرَى} العَمَلِيَّةُ فِي غُرْفَةٍ خَاصَّةٍ.'] },
      ],
      ltr: true,
      foot: 'Passive = yu- … -a- before the last letter: yushakhkhiṣu → yushakhkhaṣu. The doctor disappears; the patient becomes the subject.',
      notes: `GRAMMAR PART 2 — website rule “Forming the medical passive” (a ḍamma on the prefix, a fatḥa before the ending; the affected noun becomes nominative) and rule “يَصِفُ and its passive” (يَصِفُ الدَّوَاءَ → يُوصَفُ الدَّوَاءُ).
Say each pair aloud and exaggerate the changed vowel: yushakhkh-I-ṣu → yushakhkh-A-ṣu · yuʿāl-I-ju → yuʿāl-A-ju.
Hollow and weak verbs change more: يُحِيلُ → يُحَالُ · يُجْرِي → يُجْرَى (the passive يُوصَى from P1-L01 is the same shape).
Row 6: العَمَلِيَّةُ is feminine → تُجْرَى (website quiz item 6).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · passive agreement, case and the past passive · Develop / Stretch', title: 'Patient, patients — and “I was treated”', ar: 'المَرِيضُ · المَرِيضَةُ · المَرْضَى',
      cols: [{ label: 'Who', w: 2.0 }, { label: 'Present passive', w: 4.3, size: 21 }, { label: 'Past passive', w: 4.3, size: 21 }, { label: 'Note', w: 1.73 }],
      rows: [
        { core: true, cells: ['he', '{k|يُعَالَجُ} المَرِيضُ', '{k|عُولِجَ} المَرِيضُ', 'nominative'] },
        { core: true, cells: ['she', '{k|تُعَالَجُ} المَرِيضَةُ', '{k|عُولِجَتِ} المَرِيضَةُ', 'ta- / -at'] },
        { cells: ['they (people)', '{k|يُعَالَجُ} المَرْضَى', '{k|عُولِجَ} المَرْضَى', 'verb first'] },
        { core: true, cells: ['I', 'أُعَالَجُ', '{e|عُولِجْتُ} بِسُرْعَةٍ', '-tu'] },
        { cells: ['it (f.)', '{k|تُجْرَى} العَمَلِيَّةُ', '{k|أُجْرِيَتِ} العَمَلِيَّةُ', 'weak verb'] },
      ],
      ltr: true,
      foot: 'Website common error: the subject of a passive verb is NOMINATIVE — yushakhkhaṣu al-marīḍu, never al-marīḍa.',
      notes: `GRAMMAR PART 3 — website common error (“Keeping the affected noun accusative after a passive verb”) and mistake يُشَخَّصُ المَرِيضَ ✗ → المَرِيضُ. Quiz items 2, 5 and 6 test exactly this.
The past passive is u … i: عُولِجَ (from عَالَجَ) — the website listening and model use عُولِجْتُ بِسُرْعَةٍ (I was treated quickly). Stretch students can also use فُحِصْتُ (I was examined) and شُخِّصَ (was diagnosed).
Row 3: a verb before its subject stays singular even with a human plural (GM-VS-03): يُعَالَجُ المَرْضَى.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · narrating across three tenses (website rule 4) · Stretch', title: 'Then · usually · if', ar: 'المَاضِي · الحَاضِرُ · الشَّرْطُ',
      cards: [
        { chip: 'PAST · DEVELOP', color: '6B4C9A', head: 'ذَهَبْتُ · عُولِجْتُ', big: 'ذَهَبْتُ إِلَى العِيَادَةِ، وَعُولِجْتُ بِسُرْعَةٍ.', en: 'I went to the clinic and was treated quickly.', clue: 'What happened.' },
        { chip: 'USUALLY · CORE', color: '1D5FBF', head: 'عَادَةً · أَوَّلًا · ثُمَّ', big: 'يُفْحَصُ المَرِيضُ أَوَّلًا، ثُمَّ يُشَخَّصُ المَرَضُ.', en: 'The patient is examined first, then the illness is diagnosed.', clue: 'What generally happens.' },
        { chip: 'IF · STRETCH', color: '1E6B52', head: 'إِذَا … سَـ', big: 'إِذَا اسْتَمَرَّ الأَلَمُ، سَأُرَاجِعُ مُتَخَصِّصًا.', en: 'If the pain continues, I will see a specialist.', clue: 'What would follow.' },
      ],
      error: { text: 'Website quiz: a Type 1 result takes sa-.', pairs: [['سَأُرَاجِعُ مُتَخَصِّصًا', 'رَاجَعْتُ مُتَخَصِّصًا']] },
      notes: `GRAMMAR PART 4 — website rule “Narrating an experience” (past → present → conditional: describe what happened, what generally happens, and what would follow).
Sequencers for the pathway: أَوَّلًا · ثُمَّ · بَعْدَ ذٰلِكَ · وَأَخِيرًا.
The website listening also uses إِذَا كَانَتِ الحَالَةُ بَسِيطَةً، يَصِفُ الطَّبِيبُ … with a plain present: for a GENERAL rule (“whenever this is the case”) the result can be a plain present; for a personal future result use sa-.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me describe the patient’s journey',
    steps: [
      { head: 'First', ar: '{k|يُفْحَصُ} المَرِيضُ أَوَّلًا', think: 'Passive, -u.' },
      { head: 'Then', ar: 'ثُمَّ {k|يُشَخَّصُ} المَرَضُ', think: 'yushakhkhaṣu.' },
      { head: 'Referral', ar: '{e|فَيُحَالُ} المَرِيضُ {e|إِلَى} مُتَخَصِّصٍ', think: 'ilā.' },
      { head: 'My visit', ar: '{m|عُولِجْتُ} بِسُرْعَةٍ', think: 'Past passive.' },
    ],
    legend: ['k', 'e', 'm'], legendLabels: { k: 'PRESENT PASSIVE', e: 'REFERRAL', m: 'PAST PASSIVE' },
    model: 'عِنْدَمَا يَشْعُرُ المَرِيضُ بِأَلَمٍ، يَذْهَبُ إِلَى الطَّبِيبِ العَامِّ. {k|يُفْحَصُ} المَرِيضُ أَوَّلًا، ثُمَّ {k|يُشَخَّصُ} المَرَضُ. وَإِذَا كَانَتِ الحَالَةُ بَسِيطَةً، {k|يُوصَفُ} دَوَاءٌ مُنَاسِبٌ. أَمَّا إِذَا كَانَتْ مُعَقَّدَةً، {e|فَيُحَالُ} المَرِيضُ {e|إِلَى} مُتَخَصِّصٍ. أَنَا ذَهَبْتُ إِلَى العِيَادَةِ {m|وَعُولِجْتُ} بِسُرْعَةٍ.',
    modelEn: 'When a patient feels pain, he goes to the GP. The patient is examined first, then the illness is diagnosed. If the case is simple, a suitable medicine is prescribed. But if it is complex, the patient is referred to a specialist. I went to the clinic and was treated quickly.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Who is affected? The patient → he becomes the subject, so -u. Examined: yufḥaṣu. Diagnosed: yushakhkhaṣu. Medicine is prescribed: yūṣafu dawāʾun — nominative. Referral needs ilā. My own visit: the past passive ʿūlijtu.”',
  },
  patternEn: ['the patient is diagnosed in the clinic', 'the doctor refers the patient to a specialist', 'the doctor prescribes a medicine'],
  game: {
    title: 'Where and what? Match the picture',
    pick: [1, 2, 4],
    en: ['He is in hospital.', 'I take the medicine twice a day.', 'I buy the medicine from the pharmacy.'],
    icons: [[['fa6', 'FaHospital', '1D5FBF'], ['fa6', 'FaTruckMedical', 'C0386B']], [['fa6', 'FaPills', '6B4C9A'], ['fa6', 'FaClock', 'C77700']], [['fa6', 'FaPrescriptionBottleMedical', '1E6B52'], ['fa6', 'FaStore', '1D5FBF']]],
    labels: ['hospital and ambulance', 'pills and a clock', 'pharmacy'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Then make each one passive: هُوَ فِي المُسْتَشْفَى → يُعَالَجُ فِي المُسْتَشْفَى · آخُذُ الدَّوَاءَ → يُوصَفُ الدَّوَاءُ مَرَّتَيْنِ فِي اليَوْمِ. Other website cards: a female doctor, rest and fluids, a bandage.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · active → passive drill', title: 'Remove the doctor', ar: 'حَوِّلْ إِلَى المَجْهُولِ',
      cols: [{ label: 'Active (the doctor does it)', w: 5.4, size: 20 }, { label: 'Passive (it is done)', w: 4.6, size: 20 }, { label: 'Check', w: 2.33 }],
      rows: [
        { core: true, cells: ['يُشَخِّصُ الطَّبِيبُ المَرَضَ.', 'يُشَخَّصُ المَرَضُ.', 'المَرَضَ → -u'] },
        { core: true, cells: ['يُعَالِجُ الطَّبِيبُ المَرِيضَ.', 'يُعَالَجُ المَرِيضُ.', 'i → a'] },
        { core: true, cells: ['يَصِفُ الطَّبِيبُ الدَّوَاءَ.', 'يُوصَفُ الدَّوَاءُ.', 'yaṣif → yūṣaf'] },
        { cells: ['يُحِيلُ الطَّبِيبُ المَرِيضَ إِلَى مُتَخَصِّصٍ.', 'يُحَالُ المَرِيضُ إِلَى مُتَخَصِّصٍ.', 'ilā stays'] },
        { cells: ['يُجْرِي الجَرَّاحُ العَمَلِيَّةَ.', 'تُجْرَى العَمَلِيَّةُ.', 'feminine → tu-'] },
      ],
      foot: 'Three steps: delete the doer · change the verb vowels · make the object nominative (and check he / she).',
      notes: `WE DO (3 min) — the website lesson has no builder, so this drill is built from the website table (active / passive pairs) and examples.
Cover column 2; students say the passive, then reveal. Core: rows 1–3. Develop: all five. Stretch: say each one in the past passive (شُخِّصَ المَرَضُ · عُولِجَ المَرِيضُ · وُصِفَ الدَّوَاءُ · أُحِيلَ المَرِيضُ · أُجْرِيَتِ العَمَلِيَّةُ).`,
    },
  ],
  sorterTitle: 'Active, passive — or ilā?',
  sorterNotes: 'Then pair each active verb with its passive aloud: يُشَخِّصُ ↔ يُشَخَّصُ · يُعَالِجُ ↔ يُعَالَجُ · يَصِفُ ↔ يُوصَفُ · يُحِيلُ ↔ يُحَالُ.',
  patch: { grammar: { ...site.grammar, rules } },
  patchNote: 'website rule headings and formulas shown in English and transliteration; the active → passive drill is teacher-built from the website table. All other website items are used as published.',
  hints: ['Passive subject: -u or -a?', 'yaṣif or yūṣif?', 'yuḥīl + which preposition?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: yufḥaṣu · yushakhkhaṣu.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write down three passive verbs you hear.',
  gloss: [
    ['عِنْدَمَا يَشْعُرُ المَرِيضُ بِأَلَمٍ، يَذْهَبُ أَوَّلًا إِلَى الطَّبِيبِ العَامِّ. يُفْحَصُ المَرِيضُ، ثُمَّ يُشَخَّصُ المَرَضُ.', 'When a patient feels pain, he first goes to the GP. The patient is examined, then the illness is diagnosed.'],
    ['وَإِذَا كَانَتِ الحَالَةُ بَسِيطَةً، يَصِفُ الطَّبِيبُ دَوَاءً وَيُعْطِي وَصْفَةً طِبِّيَّةً.', 'If the case is simple, the doctor prescribes a medicine and gives a prescription.'],
    ['أَمَّا إِذَا كَانَتِ الحَالَةُ مُعَقَّدَةً، فَيُحَالُ المَرِيضُ إِلَى مُتَخَصِّصٍ.', 'But if the case is complex, the patient is referred to a specialist.'],
    ['وَفِي الطَّوَارِئِ يُعَالَجُ المَرْضَى حَسَبَ الأَوْلَوِيَّةِ، لَا حَسَبَ وَقْتِ الوُصُولِ. وَتُجْرَى الفُحُوصَاتُ الضَّرُورِيَّةُ بِسُرْعَةٍ.', 'In A&E, patients are treated by priority, not by arrival time. The necessary tests are carried out quickly.'],
    ['أَنَا ذَهَبْتُ العَامَ المَاضِيَ إِلَى العِيَادَةِ، وَعُولِجْتُ بِسُرْعَةٍ، وَكَانَتِ التَّجْرِبَةُ مُطَمْئِنَةً.', 'Last year I went to the clinic, I was treated quickly, and the experience was reassuring.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ مَا يَحْدُثُ عِنْدَ زِيَارَةِ الطَّبِيبِ. اِسْتَعْمِلْ فِعْلًا مَبْنِيًّا لِلْمَجْهُولِ.' },
      { route: 'develop', ar: 'مَاذَا يَحْدُثُ إِذَا كَانَتِ الحَالَةُ مُعَقَّدَةً؟' },
      { route: 'stretch', ar: 'صِفْ تَجْرِبَةً صِحِّيَّةً مَرَرْتَ بِهَا.' },
    ],
    stems: [
      { route: 'core', ar: 'يُفْحَصُ المَرِيضُ أَوَّلًا، ثُمَّ ______ .' },
      { route: 'develop', ar: 'إِذَا كَانَتِ الحَالَةُ مُعَقَّدَةً، يُحَالُ المَرِيضُ ______ .' },
      { route: 'stretch', ar: 'ذَهَبْتُ إِلَى ______ ، وَعُولِجْتُ ______ .' },
    ],
    modelEn: ['Describe what happens when you visit the doctor.', 'The patient is examined first, then the illness is diagnosed and the medicine is prescribed.', 'And if the case is complex?', 'If it is complex, the patient is referred to a specialist, and an operation may be carried out.'],
    notes: 'Website prompts and model. For the Stretch prompt, any small experience works (a check-up, a vaccination, a sprained ankle) — or describe a family member’s visit in the third person. Check: nominative after the passive, ilā after yuḥāl. To a girl: صِفِي · اِسْتَعْمِلِي · مَرَرْتِ بِهَا.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Website Core: five sentences pairing an active verb with its passive.' },
    develop: { amount: '60–70 words', how: 'Website Develop: add a referral and a conditional.' },
    stretch: { amount: '80–90 words', how: 'Website task: narrate a short experience through three tenses with accurate passives.' },
  },
  frames: {
    core: [
      { en: 'The illness is diagnosed in the clinic.', ar: '______ المَرَضُ فِي العِيَادَةِ.' },
      { en: 'The patient is examined first.', ar: '______ المَرِيضُ أَوَّلًا.' },
      { en: 'A suitable medicine is prescribed.', ar: '______ دَوَاءٌ مُنَاسِبٌ.' },
      { en: 'Patients are treated free of charge in …', ar: 'يُعَالَجُ المَرْضَى مَجَّانًا فِي ______ .' },
    ],
    develop: [
      { en: 'If the case is complex, the patient is referred to …', ar: 'إِذَا كَانَتِ الحَالَةُ مُعَقَّدَةً، يُحَالُ المَرِيضُ إِلَى ______ .' },
      { en: 'Last year I went to … and I was treated …', ar: 'ذَهَبْتُ العَامَ المَاضِيَ إِلَى ______ ، وَعُولِجْتُ ______ .' },
      { en: 'If the pain continues, I will see …', ar: 'إِذَا اسْتَمَرَّ الأَلَمُ، سَأُرَاجِعُ ______ .' },
      { en: 'In future I will make sure to …', ar: 'فِي المُسْتَقْبَلِ سَأَحْرِصُ عَلَى ______ .' },
    ],
    bank: ['يُفْحَصُ', 'يُشَخَّصُ', 'يُعَالَجُ', 'يُوصَفُ', 'يُحَالُ', 'تُجْرَى', 'الطَّبِيبُ العَامُّ', 'مُتَخَصِّصٌ', 'العِيَادَةُ', 'غُرْفَةُ الطَّوَارِئِ', 'بِسُرْعَةٍ', 'الفُحُوصَاتُ الدَّوْرِيَّةُ'],
  },
  stretch: [
    ['وَقَدْ تُجْرَى لَهُ فُحُوصَاتٌ إِضَافِيَّةٌ', 'and further tests may be carried out for him'],
    ['بَعْدَ إِصَابَةٍ بَسِيطَةٍ', 'after a minor injury'],
    ['وَكَانَتِ الرِّعَايَةُ جَيِّدَةً', 'and the care was good'],
    ['فَسَتَزْدَادُ فُرَصُ الشِّفَاءِ', 'the chances of recovery will increase'],
    ['سَأَحْرِصُ عَلَى الفُحُوصَاتِ الدَّوْرِيَّةِ', 'I will make sure to have regular check-ups'],
  ],
  modelEn: 'When a patient feels pain, he goes to the GP. The patient is examined first, then the illness is diagnosed. If the case is simple, a suitable medicine is prescribed. But if it is complex, the patient is referred to a specialist, and further tests may be carried out. Last year I went to the clinic after a minor injury; I was treated quickly and the care was good. If a patient gets an early diagnosis, the chances of recovery will increase. In future I will make sure to have regular check-ups.',
  find: ['three present passives (nominative subjects)', 'a referral (yuḥāl ilā)', 'a past passive (ʿūlijtu)', 'a conditional with sa-'],
  modelNotes: 'Website writing model. Evidence: يُفْحَصُ المَرِيضُ · يُشَخَّصُ المَرَضُ · يُوصَفُ دَوَاءٌ مُنَاسِبٌ · فَيُحَالُ المَرِيضُ إِلَى مُتَخَصِّصٍ · تُجْرَى لَهُ فُحُوصَاتٌ · عُولِجْتُ بِسُرْعَةٍ · إِذَا حَصَلَ … فَسَتَزْدَادُ · سَأَحْرِصُ.',
  selfCheck: [
    { route: 'core', text: 'Each passive verb has u … a vowels (yushakhkhaṣu).' },
    { route: 'core', text: 'The subject after a passive verb is nominative (-u).' },
    { route: 'develop', text: 'I used yuḥāl / yuḥīl with ilā.' },
    { route: 'develop', text: 'I prescribed with yaṣif (active) or yūṣaf (passive).' },
    { route: 'stretch', text: 'I moved through past, present and a conditional.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['يَقُومُ عَلَى مَبْدَأِ', 'is based on the principle of'], ['الوُصُولِ العَادِلِ', 'fair access'], ['بِتَكْلِفَةٍ قَلِيلَةٍ', 'at low cost'], ['المَسَارُ', 'the pathway'], ['الحَالَاتِ البَسِيطَةَ', 'simple cases'],
    ['فُرَصُ الشِّفَاءِ', 'the chances of recovery'], ['مِثَالِيَّةً', 'perfect, ideal'], ['قَوَائِمِ الانْتِظَارِ', 'waiting lists'], ['يَبْقَى', 'remains'], ['فِي مُتَنَاوَلِ الجَمِيعِ', 'within everyone’s reach'],
  ],
  prep: {
    words: [['حَمْلَةٌ صِحِّيَّةٌ', 'a health campaign', 'pl. حَمَلَاتٌ'], ['شِعَارٌ', 'a slogan', 'pl. شِعَارَاتٌ'], ['الإِقْنَاعُ', 'persuasion', '—'], ['يُحَذِّرُ مِنْ', 'he warns against', 'تُحَذِّرُ she'], ['يَدْعُو إِلَى', 'he calls for', 'تَدْعُو she']],
    questionEn: 'Think of a health poster or advert you have seen. What was its message?',
    questionAr: 'رَأَيْتُ حَمْلَةً صِحِّيَّةً تَدْعُو إِلَى ______ .',
    homework: {
      core: 'Learn 10 healthcare words; write five active → passive pairs.',
      develop: 'A 60–70-word description of a patient’s pathway with a referral and a conditional.',
      stretch: 'Website writing task: 80–90 words through three tenses with accurate passives.',
    },
    wordsSource: 'The five words come from the website P1-L07 vocabulary (health campaigns and persuasion).',
  },
  remember: 'Remember: active names the doctor (yushakhkhiṣ al-ṭabību al-maraḍa); the passive names the patient — u … a vowels and a NOMINATIVE subject (yushakhkhaṣu al-marīḍu) — to prescribe is yaṣif (passive yūṣaf), and a referral needs ilā.',
});

module.exports = { meta, slides };
