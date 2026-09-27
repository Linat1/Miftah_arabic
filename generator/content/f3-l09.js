'use strict';
/*
 * F3-L09 · Extended Writing: My Home and Family
 * Website: Pathways › Foundation › F3 › Lesson 9. The writing journey (plan → draft → review → improve, 70–90 words), the
 * three quality questions, the eight-question F3 bridge, the writing-process toolkit (16 terms, 12-question check), the
 * complete F3 language reference, the connector laboratory (10 connectors, 14 questions), the annotated 79-word model (12
 * questions), the accuracy repair workshop (12), the three-paragraph planning studio and Paragraph Architect Mission (14),
 * Noor’s plan (listening), first draft vs improved version (reading), oral rehearsal, the 70–90-word draft, the review
 * checklist and final version, and the 16-question checkpoint.
 */
const F = require('./f3-common');
const game = require('../site-data/pathway-visual-games.json')['f3-l09'];
const { q, bank, banks } = F;

const meta = F.meta({
  n: 9, fileTitle: 'Extended_Writing_My_Home_and_Family', chip: 'Extended Writing',
  title: 'Extended Writing: My Home and Family', arabic: 'الكِتَابَةُ المُطَوَّلَةُ — بَيْتِي وَعَائِلَتِي',
  focus: 'Turn the whole F3 language system into a well-organised 70–90-word text: plan three paragraphs, connect ideas with purpose, then review and improve your own writing.',
  icon: 'FaPenNib', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F3-L10', nextTitle: 'Speaking: My Family and Home', nextAr: 'التَّحَدُّثُ عَنْ عَائِلَتِي وَبَيْتِي' };
const AR = /[؀-ۿ]/;
const rounds = banks.l09.rounds.map((r) => F.w({ ...r, q: AR.test(r.prompt) ? r.prompt : `${r.title}: ${r.prompt}` }));
const prompts = banks.l09.speaking;
const PL = (pl) => ({ forms: [{ l: 'pl.', ar: pl }] });

const MODEL = 'أَسْكُنُ مَعَ عَائِلَتِي فِي بَيْتٍ مُتَوَسِّطِ الحَجْمِ قَرِيبٍ مِنَ المَدْرَسَةِ. فِي بَيْتِنَا طَابِقَانِ، وَفِيهِ غُرْفَةُ جُلُوسٍ وَمَطْبَخٌ وَثَلَاثُ غُرَفِ نَوْمٍ. غُرْفَتِي صَغِيرَةٌ، وَلَكِنَّهَا مُرَتَّبَةٌ وَمُضِيئَةٌ. فِيهَا سَرِيرٌ أَبْيَضُ وَمَكْتَبٌ بُنِّيٌّ وَخِزَانَةٌ كَبِيرَةٌ. أَعِيشُ مَعَ أَبِي وَأُمِّي وَأَخِي وَأُخْتِي. أَبِي هَادِئٌ وَكَرِيمٌ، وَأُمِّي لَطِيفَةٌ وَمُجْتَهِدَةٌ. فِي المَسَاءِ أَدْرُسُ فِي غُرْفَتِي، ثُمَّ أَجْلِسُ مَعَ عَائِلَتِي فِي غُرْفَةِ الجُلُوسِ. أُحِبُّ بَيْتِي لِأَنَّهُ مُرِيحٌ، وَأُحِبُّ حَيِّي أَيْضًا لِأَنَّ الحَدِيقَةَ وَالمَكْتَبَةَ قَرِيبَتَانِ مِنْهُ.';

const site = {
  speaking: {
    context: 'Oral rehearsal before writing',
    model: [
      ['A', 'أَيْنَ تَسْكُنُ؟ وَمَعَ مَنْ؟', 'Where do you live? And with whom?'],
      ['B', 'أَسْكُنُ مَعَ عَائِلَتِي فِي بَيْتٍ قَرِيبٍ مِنَ المَدْرَسَةِ. فِي بَيْتِنَا طَابِقَانِ.', 'I live with my family in a house near the school. Our house has two floors.'],
    ],
  },
  writing: {
    prompt: 'Website writing task: a 70–90-word text about a real, fictional or ideal home and family in three paragraphs — (1) home and location, (2) family and descriptions, (3) daily life and opinion. No address or identifying information is needed.',
    checklist: ['Three paragraphs: home · family · daily life and opinion.', 'Six purposeful connectors.', 'Agreement and -hu / -hā references checked.', '70–90 Arabic words.'],
    model: MODEL,
  },
  differentiation: {
    core: 'Use the three-paragraph frame and write at least 70 words.',
    develop: 'Six connectors, varied descriptions and accurate references.',
    stretch: 'Add a comparison, a routine sequence and a longer controlled sentence.',
  },
  mistakes: [
    { wrong: 'أُحِبُّ غُرْفَتِي لِأَنَّهُ هَادِئٌ.', right: 'أُحِبُّ غُرْفَتِي لِأَنَّهَا هَادِئَةٌ.', why: 'The room is feminine: li’annahā.' },
    { wrong: 'فِي بَيْتِي ثَلَاثَةُ غُرَفٍ.', right: 'فِي بَيْتِي ثَلَاثُ غُرَفٍ.', why: 'Rooms are feminine: the number drops ة.' },
    { wrong: 'أُحِبُّ بَيْتِي ثُمَّ هُوَ مُرِيحٌ.', right: 'أُحِبُّ بَيْتِي لِأَنَّهُ مُرِيحٌ.', why: 'A reason needs li’anna, not thumma.' },
  ],
  listening: {
    title: 'Noor’s plan',
    script: 'اِسْمِي نُورٌ، وَأَسْكُنُ مَعَ عَائِلَتِي فِي شَقَّةٍ حَدِيثَةٍ فِي الطَّابِقِ الثَّانِي. فِي شَقَّتِنَا غُرْفَةُ جُلُوسٍ وَمَطْبَخٌ وَحَمَّامٌ وَغُرْفَتَا نَوْمٍ. غُرْفَتِي مُرَتَّبَةٌ وَهَادِئَةٌ، وَفِيهَا مَكْتَبٌ قَرِيبٌ مِنَ النَّافِذَةِ. أَعِيشُ مَعَ أُمِّي وَأَبِي وَأُخْتِي الصَّغِيرَةِ. أُمِّي لَطِيفَةٌ وَمُجْتَهِدَةٌ، وَأَبِي هَادِئٌ وَمُضْحِكٌ. بَعْدَ المَدْرَسَةِ أَدْرُسُ فِي غُرْفَتِي، ثُمَّ أُسَاعِدُ أُمِّي فِي المَطْبَخِ. أُحِبُّ شَقَّتَنَا لِأَنَّهَا مُرِيحَةٌ وَقَرِيبَةٌ مِنَ المَكْتَبَةِ.',
    questions: bank(9, 'listening', [0, 2, 5, 7, 9]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 9,
    source: 'Website sections used: the writing journey and the three quality questions, the eight-question F3 bridge, the writing-process toolkit (16 terms, 12-question check), the complete F3 language reference, the connector laboratory (10 connectors, 14 questions), the annotated 79-word model and the 12-question feature finder, the accuracy repair workshop (6 systems, 12 questions), the three-paragraph planning studio and the Paragraph Architect Mission (14), Noor’s plan (listening, 10), first draft vs improved version (reading, 12), oral rehearsal (6 prompts), the 70–90-word draft, the review checklist and final version, and the 16-question checkpoint.',
    support: `• This lesson introduces NO new topic: it teaches students to select, connect and improve the F3 language they already know. Keep the F3 language reference (website section R) open throughout.
• Core: the three-paragraph frame + at least 70 words. Develop: six purposeful connectors, varied descriptions, accurate -hu / -hā. Stretch: a comparison, a routine sequence and a longer controlled sentence.
• PRIVACY (website): the home and family may be real, fictional or ideal — no address or identifying information is needed. Be sensitive to students’ family situations; an invented family is always acceptable.
• Multi-session: this deck covers plan → model → first draft. Use the review checklist slide and the website review section for the improved final version next time if needed.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'The writing toolkit, purposeful connectors and a 79-word model.', wedo: 'Paragraph mission, listen to Noor’s plan, compare a draft and an improved version.', next: 'F3-L10' }),
  F.doNow({
    questions: [
      q('What does مُسَوَّدَةٌ mean?', ['a draft', 'a plan', 'a paragraph'], 'Prepared at home (F3-L08).'),
      q('What does رَابِطٌ mean?', ['a connector', 'an idea', 'a sentence'], 'Prepared at home (F3-L08).'),
      ...bank(9, 'retrieval', [2, 3, 5]),
    ],
    keyIdea: { text: 'A strong text answers every point, shows variety and is accurate.', ar: 'إِتْمَامُ المَهَمَّةِ · التَّنَوُّعُ · الدِّقَّةُ' },
    retrieves: 'Questions 1–2 test two of the five writing words prepared at home at the end of F3-L08. Questions 3–5 are the website “eight-question F3 bridge” (li’annahu, tūjadu, thalāthu ghuraf).',
  }),
  F.objectivesSlide([
    'Plan a complete response before writing.',
    'Write 70–90 connected Arabic words about home and family.',
    'Use a purposeful range of F3 structures and connectors.',
    'Review task completion, variety and accuracy — then improve.',
  ], {
    core: ['I can plan three paragraphs.', 'I can write at least 70 words.'],
    develop: ['I can use six purposeful connectors.', 'I can check -hu / -hā after li’anna.'],
    stretch: ['I can add a comparison.', 'I can improve my draft, not just copy it.'],
  }, 2, 'Website “By the end” aims (left) and the website writing Core / Develop / Stretch routes (right).'),
  F.keywordsSlide({
    text: 'Writing-process words and ten connectors. Core: plan, draft, paragraph, and, but, because, then.',
    groups: [
      { head: 'GROUP 1', name: 'Writing toolkit · 16' },
      { head: 'GROUP 2', name: 'Connectors · 10' },
      { head: 'GROUP 3', name: 'Three quality questions' },
    ],
    bridge: [
      { ar: 'فِكْرَةٌ', urdu: 'فکر', tr: 'fikra', en: 'idea' },
      { ar: 'جُمْلَةٌ', urdu: 'جملہ', tr: 'jumla', en: 'sentence' },
      { ar: 'تَصْحِيحٌ', urdu: 'تصحیح', tr: 'taṣḥīḥ', en: 'correction' },
      { ar: 'لِأَنَّ', urdu: 'کیونکہ', tr: 'li’anna', en: 'because' },
      { ar: 'لِذَلِكَ', urdu: 'لہٰذا / اس لیے', tr: 'li-dhālika', en: 'therefore' },
    ],
    notes: 'URDU BRIDGE: فکر، جملہ and تصحیح are the same words. Urdu لہٰذا (therefore) comes from Arabic لِهَذَا — the same idea as لِذَلِكَ.',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · the writing-process toolkit (website)', title: 'Idea, plan, draft …', ar: 'أَدَوَاتُ الكِتَابَةِ',
    items: [
      { n: 1, ar: 'فِكْرَةٌ', en: 'idea', tr: 'fik-ra', core: true, tag: 'f.', ...PL('أَفْكَارٌ') },
      { n: 2, ar: 'خُطَّةٌ', en: 'plan', tr: 'khuṭ-ṭa', core: true, tag: 'f.', ...PL('خُطَطٌ') },
      { n: 3, ar: 'مُسَوَّدَةٌ', en: 'draft', tr: 'mu-saw-wa-da', core: true, tag: 'f.', ...PL('مُسَوَّدَاتٌ') },
      { n: 4, ar: 'فِقْرَةٌ', en: 'paragraph', tr: 'fiq-ra', core: true, tag: 'f.', ...PL('فِقْرَاتٌ / فِقَرٌ') },
      { n: 5, ar: 'جُمْلَةٌ', en: 'sentence', tr: 'jum-la', tag: 'f.', ...PL('جُمَلٌ') },
      { n: 6, ar: 'رَابِطٌ', en: 'connector', tr: 'rā-biṭ', tag: 'm.', ...PL('رَوَابِطُ') },
    ],
    notes: 'WRITING TOOLKIT (website, 6 of 16). Also: كَلِمَةٌ (word), مُرَاجَعَةٌ (review), تَصْحِيحٌ (correction), تَحْسِينٌ (improvement), نُسْخَةٌ نِهَائِيَّةٌ (final version), عَدَدُ الكَلِمَاتِ (word count), إِتْمَامُ المَهَمَّةِ (task completion), تَنَوُّعٌ (variety), دِقَّةٌ (accuracy), تَرْتِيبٌ (organisation).',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · the connector laboratory (website)', title: 'A connector must do a job', ar: 'مُخْتَبَرُ الرَّوَابِطِ',
    cols: [{ label: 'Connector', w: 2.4, size: 24 }, { label: 'Example', w: 6.3, size: 22 }, { label: 'Job', w: 3.63 }],
    rows: [
      { core: true, cells: [{ ar: 'وَ · أَيْضًا' }, { ar: 'فِي بَيْتِي حَدِيقَةٌ، وَفِيهِ شُرْفَةٌ أَيْضًا.' }, 'add (and · also)'] },
      { core: true, cells: [{ ar: 'وَلَكِنْ' }, { ar: 'غُرْفَتِي صَغِيرَةٌ، وَلَكِنَّهَا مُرِيحَةٌ.' }, 'contrast (but)'] },
      { core: true, cells: [{ ar: 'لِأَنَّ' }, { ar: 'أُحِبُّ حَيِّي لِأَنَّهُ هَادِئٌ.' }, 'reason (because)'] },
      { core: true, cells: [{ ar: 'ثُمَّ · بَعْدَ ذَلِكَ' }, { ar: 'أَدْرُسُ فِي غُرْفَتِي، ثُمَّ أَجْلِسُ مَعَ عَائِلَتِي.' }, 'sequence (then)'] },
      { cells: [{ ar: 'أَمَّا … فَـ' }, { ar: 'أَمَّا عَائِلَتِي فَأَعِيشُ مَعَ أَبِي وَأُمِّي.' }, 'new focus (as for)'] },
      { cells: [{ ar: 'لِذَلِكَ' }, { ar: 'بَيْتِي بَعِيدٌ عَنِ المَدْرَسَةِ؛ لِذَلِكَ أَذْهَبُ بِالحَافِلَةِ.' }, 'result (therefore)'] },
    ],
    foot: 'Website: do not add a connector simply to increase a counter. Also: fī l-muqābil (in contrast), ma‘a dhālika (however).',
    notes: `GRAMMAR PART 1 — website section 3 “Connector laboratory”: ten connectors, each with a job — وَ (add), أَيْضًا (also), وَلَكِنْ (contrast), لِأَنَّ (reason), ثُمَّ / بَعْدَ ذَلِكَ (sequence), أَمَّا … فَـ (new focus), فِي المُقَابِلِ (compare), لِذَلِكَ (result), مَعَ ذَلِكَ (stronger contrast).
Reference after وَلَكِنَّ / لِأَنَّ: add -hu (masculine) or -hā (feminine) — لِأَنَّهُ (the house), وَلَكِنَّهَا (the room).`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · the accuracy repair workshop (website)', title: 'Spot the system, then repair it', ar: 'وَرْشَةُ تَصْحِيحِ الدِّقَّةِ',
    cards: [
      { chip: 'GENDER', color: 'B83280', head: 'غُرْفَتِي …ـةٌ', big: 'غُرْفَتِي جَمِيلَةٌ.', en: 'My room is beautiful.', clue: 'Not: jamīl.' },
      { chip: 'REFERENCE', color: '1D5FBF', head: 'لِأَنَّهُ / لِأَنَّهَا', big: 'أُحِبُّ غُرْفَتِي لِأَنَّهَا هَادِئَةٌ.', en: 'I love my room because it is quiet.', clue: 'Room (f.) → -hā.' },
      { chip: 'EXISTENCE', color: '1E6B52', head: 'يُوجَدُ / تُوجَدُ', big: 'تُوجَدُ خِزَانَةٌ.', en: 'There is a wardrobe.', clue: 'Feminine item → tūjadu.' },
    ],
    error: { text: 'Website workshop: numbers with feminine plurals.', pairs: [['فِي بَيْتِي ثَلَاثُ غُرَفٍ.', 'فِي بَيْتِي ثَلَاثَةُ غُرَفٍ.']] },
    notes: `GRAMMAR PART 2 — website section 5 “Accuracy repair workshop”: strong writers identify the SYSTEM and repair it. Six systems: gender (غُرْفَتِي جَمِيلَةٌ), reference (لِأَنَّهَا), possession (هَذَا أَبِي — not أَبُو), number and noun (ثَلَاثُ غُرَفٍ), existence (تُوجَدُ خِزَانَةٌ), connector meaning (لِأَنَّهُ, not ثُمَّ, for a reason).
The three quality questions: 1 إِتْمَامُ المَهَمَّةِ — did I answer every point? 2 التَّنَوُّعُ — did I show variety? 3 الدِّقَّةُ — is my Arabic accurate?`,
  },
  F.quickCheck([...bank(9, 'connectorQuiz', [0, 3]), ...bank(9, 'repairQuiz', [1, 3])], 'website connector laboratory questions 1 and 4, and repair check questions 2 and 4.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch me upgrade a draft', title: 'From a list to a connected text', ar: 'مِنَ المُسَوَّدَةِ إِلَى النُّسْخَةِ المُحَسَّنَةِ',
    steps: [
      { head: 'Draft', ar: 'أَسْكُنُ فِي بَيْتٍ. بَيْتِي كَبِيرٌ.', think: 'Short and repetitive.' },
      { head: 'Add place', ar: 'أَسْكُنُ مَعَ عَائِلَتِي فِي بَيْتٍ كَبِيرٍ قَرِيبٍ مِنَ الحَدِيقَةِ.', think: 'Who + where.' },
      { head: 'Add contrast', ar: 'غُرْفَتِي صَغِيرَةٌ {w|وَلَكِنَّهَا} مُرِيحَةٌ.', think: 'A real contrast.' },
      { head: 'Add reason', ar: 'أُحِبُّ بَيْتِي {e|لِأَنَّهُ} وَاسِعٌ.', think: 'House m. → -hu.' },
    ],
    legend: ['w', 'e'], legendLabels: { w: 'CONTRAST', e: 'REASON' },
    model: 'أَسْكُنُ مَعَ عَائِلَتِي فِي بَيْتٍ كَبِيرٍ قَرِيبٍ مِنَ الحَدِيقَةِ. فِي بَيْتِنَا غُرَفٌ كَثِيرَةٌ، وَغُرْفَتِي صَغِيرَةٌ {w|وَلَكِنَّهَا} مُرِيحَةٌ. فِيهَا سَرِيرٌ أَبْيَضُ وَمَكْتَبٌ بُنِّيٌّ بِجَانِبِ النَّافِذَةِ. أُحِبُّ بَيْتِي {e|لِأَنَّهُ} وَاسِعٌ، وَأُحِبُّ عَائِلَتِي أَيْضًا {e|لِأَنَّهَا} مُحِبَّةٌ.',
    modelEn: 'I live with my family in a big house near the park. Our house has many rooms, and my room is small but comfortable. In it there is a white bed and a brown desk next to the window. I love my house because it is spacious, and I love my family too because it is loving.',
    notes: 'I DO (3 min) — the website “first draft vs improved version” as a live upgrade. Think aloud: “What is missing — place, detail, contrast, reason? Which job does each connector do?”',
  },
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website “Paragraph Architect Mission”', title: 'Build the paragraphs', ar: 'مُهَنْدِسُ الفِقْرَاتِ',
    seed: 19,
    questions: [rounds[2], rounds[4], rounds[8], rounds[9], rounds[12]],
    side: { kind: 'core', label: 'CORE', text: 'contrast → wa-lākinnahā\nreason → li’annahu / -hā\nnew paragraph → ammā … fa-' },
    answerSlide: { min: 0, eyebrow: 'We do · Mission answers', title: 'Mission: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 14 paragraph moves (room contrast, new paragraph, sequence, home opinion, avoid repetition). The other 9 are homework.',
    answerNotes: 'After each answer ask: which job does this connector do — add, contrast, reason, sequence?',
  },
  F.gameSlide({ ...game, title: 'Visual game — Rooms', items: [game.items[1], game.items[2], game.items[3]] }, {
    flex: true,
    title: 'Warm-up: which room?',
    en: ['This is the kitchen.', 'This is the living room.', 'This is the bathroom.'],
    icons: [[['fa6', 'FaKitchenSet', 'C77700']], [['fa6', 'FaCouch', '1D5FBF']], [['fa6', 'FaShower', '1E6B52']]],
    labels: ['a kitchen', 'a sofa', 'a shower'],
    order: [2, 0, 1],
    notes: 'FLEX — website visual game (rooms, retrieval). Use only if the class needs a quick vocabulary boost before planning paragraph 1.',
  }),
  F.repairSlide(site, ['Room: -hu or -hā?', 'Rooms: thalātha or thalāth?', 'A reason: thumma or li’anna?']),
  F.listening(site, {
    coreTip: 'Listen twice.\nFour boxes: home · family · routine · opinion.',
    routes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5.',
    gloss: [
      ['اِسْمِي نُورٌ، وَأَسْكُنُ مَعَ عَائِلَتِي فِي شَقَّةٍ حَدِيثَةٍ فِي الطَّابِقِ الثَّانِي.', 'My name is Noor and I live with my family in a modern flat on the second floor.'],
      ['فِي شَقَّتِنَا غُرْفَةُ جُلُوسٍ وَمَطْبَخٌ وَحَمَّامٌ وَغُرْفَتَا نَوْمٍ. غُرْفَتِي مُرَتَّبَةٌ وَهَادِئَةٌ، وَفِيهَا مَكْتَبٌ قَرِيبٌ مِنَ النَّافِذَةِ.', 'Our flat has a living room, a kitchen, a bathroom and two bedrooms. My room is tidy and quiet, with a desk near the window.'],
      ['أَعِيشُ مَعَ أُمِّي وَأَبِي وَأُخْتِي الصَّغِيرَةِ. أُمِّي لَطِيفَةٌ وَمُجْتَهِدَةٌ، وَأَبِي هَادِئٌ وَمُضْحِكٌ.', 'I live with my mother, my father and my younger sister. My mother is kind and hard-working, and my father is calm and funny.'],
      ['بَعْدَ المَدْرَسَةِ أَدْرُسُ فِي غُرْفَتِي، ثُمَّ أُسَاعِدُ أُمِّي فِي المَطْبَخِ.', 'After school I study in my room, then I help my mother in the kitchen.'],
      ['أُحِبُّ شَقَّتَنَا لِأَنَّهَا مُرِيحَةٌ وَقَرِيبَةٌ مِنَ المَكْتَبَةِ.', 'I love our flat because it is comfortable and near the library.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · the annotated model (website, 79 words)', title: 'A complete model text', ar: 'النَّمُوذَجُ المَشْرُوحُ',
    lines: [
      ['أَسْكُنُ مَعَ عَائِلَتِي فِي بَيْتٍ مُتَوَسِّطِ الحَجْمِ قَرِيبٍ مِنَ المَدْرَسَةِ. فِي بَيْتِنَا طَابِقَانِ، وَفِيهِ غُرْفَةُ جُلُوسٍ وَمَطْبَخٌ وَثَلَاثُ غُرَفِ نَوْمٍ.', '¶1 Home: medium-sized · near school · 2 floors · rooms'],
      ['غُرْفَتِي صَغِيرَةٌ، وَلَكِنَّهَا مُرَتَّبَةٌ وَمُضِيئَةٌ. فِيهَا سَرِيرٌ أَبْيَضُ وَمَكْتَبٌ بُنِّيٌّ وَخِزَانَةٌ كَبِيرَةٌ.', '¶1 My room: contrast · furniture + colours'],
      ['أَعِيشُ مَعَ أَبِي وَأُمِّي وَأَخِي وَأُخْتِي. أَبِي هَادِئٌ وَكَرِيمٌ، وَأُمِّي لَطِيفَةٌ وَمُجْتَهِدَةٌ.', '¶2 Family: who + personality (m. · f.)'],
      ['فِي المَسَاءِ أَدْرُسُ فِي غُرْفَتِي، ثُمَّ أَجْلِسُ مَعَ عَائِلَتِي فِي غُرْفَةِ الجُلُوسِ.', '¶3 Daily life: time + sequence'],
      ['أُحِبُّ بَيْتِي لِأَنَّهُ مُرِيحٌ، وَأُحِبُّ حَيِّي أَيْضًا لِأَنَّ الحَدِيقَةَ وَالمَكْتَبَةَ قَرِيبَتَانِ مِنْهُ.', '¶3 Opinion: two reasons · also'],
    ],
    notes: 'ANNOTATED MODEL (website). Website annotations: CONTENT — home type, rooms, bedroom, furniture, family, routine, neighbourhood and opinions all covered. CONNECTIONS — وَ، وَلَكِنَّ، ثُمَّ، أَيْضًا، لِأَنَّ each do a different job. GRAMMAR RANGE — possessives, agreement, numbers, positions, present-tense verbs. ACCURACY — بَيْتِي … لِأَنَّهُ · غُرْفَتِي … وَلَكِنَّهَا.',
  },
  {
    type: 'glossed', stage: 'wedo', flex: true, eyebrow: 'We do · reading · first draft (website) · FLEX / Develop', title: 'What is weak in this draft?', ar: 'المُسَوَّدَةُ الأُولَى',
    lines: [
      ['أَسْكُنُ فِي بَيْتٍ. بَيْتِي كَبِيرٌ. فِي بَيْتِي غُرَفٌ.', 'Relevant — but very short sentences'],
      ['عِنْدِي أُمٌّ وَأَبٌ وَأَخٌ.', 'Family listed, no detail'],
      ['أُمِّي لَطِيفَةٌ. أَبِي هَادِئٌ.', 'Accurate — but repetitive openings'],
      ['غُرْفَتِي صَغِيرَةٌ. فِيهَا سَرِيرٌ وَمَكْتَبٌ.', 'No colours or precise positions'],
      ['أُحِبُّ بَيْتِي. أُحِبُّ عَائِلَتِي.', 'Opinions with no reason · almost no connectors'],
    ],
    notes: 'FIRST DRAFT (website, complete) with the website diagnosis: some relevant content · too repetitive · no reason or precise location · very limited connectors. Compare with the improved version on the I Do slide: grouped and connected ideas, precise furniture and position, accurate reasons, greater adjective range.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions · the model (website)', title: 'Find the evidence', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 6,
    questions: bank(9, 'modelQuiz', [1, 3, 6, 8, 11]),
    side: { kind: 'info', head: 'EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Find the paragraph first:\nhome · family · daily life.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website model-feature finder questions 2, 4, 7, 9 and 12. The other 7 (and the 12 draft-comparison questions) are homework.',
    answerNotes: 'A student reads aloud the evidence phrase (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'أَيْنَ تَسْكُنُ؟ وَمَعَ مَنْ؟' },
      { route: 'develop', ar: 'صِفْ غُرْفَتَكَ المُفَضَّلَةَ.' },
      { route: 'develop', ar: 'صِفْ شَخْصَيْنِ مِنْ عَائِلَتِكَ.' },
      { route: 'stretch', ar: 'مَاذَا تَفْعَلُ فِي المَسَاءِ؟ وَلِمَاذَا تُحِبُّ بَيْتَكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَسْكُنُ مَعَ عَائِلَتِي فِي ______ قَرِيبٍ مِنَ ______ .' },
      { route: 'develop', ar: 'غُرْفَتِي ______ ، وَلَكِنَّهَا ______ . فِيهَا ______ .' },
      { route: 'develop', ar: 'أَمَّا عَائِلَتِي فَأَعِيشُ مَعَ ______ . أَبِي ______ ، وَأُمِّي ______ .' },
      { route: 'stretch', ar: 'فِي المَسَاءِ ______ ، ثُمَّ ______ . أُحِبُّ بَيْتِي لِأَنَّهُ ______ .' },
    ],
    modelEn: ['Where do you live? And with whom?', 'I live with my family in a house near the school. Our house has two floors.'],
    notes: `WEBSITE ORAL REHEARSAL — “speaking through the plan reveals missing ideas before the full draft begins”. Rehearsal prompts (website):
${prompts.map((r) => `• ${r.title}: ${r.detail}`).join('\n')}
Website checklist (1–6): all content areas · detail · four purposeful connectors · -hu / -hā controlled · a reason with لِأَنَّ · logical order.`,
  }),
  F.routesSlide(site, {
    core: { amount: '70 words', how: 'Three paragraphs with the frames: home · family · daily life and opinion.' },
    develop: { amount: '70–90 words', how: 'Six purposeful connectors, varied adjectives and accurate -hu / -hā.' },
    stretch: { amount: '90 words', how: 'Add a comparison (ammā … fa-, fī l-muqābil) and a routine sequence.' },
  }),
  F.framesSlide({
    core: [
      { en: '¶1 I live with my family in …', ar: 'أَسْكُنُ مَعَ عَائِلَتِي فِي ______ .' },
      { en: '¶1 In our house there is …', ar: 'فِي بَيْتِنَا ______ وَ ______ .' },
      { en: '¶2 I live with …', ar: 'أَعِيشُ مَعَ ______ وَ ______ .' },
      { en: '¶3 In the evening I …, then …', ar: 'فِي المَسَاءِ ______ ، ثُمَّ ______ .' },
      { en: '¶3 I love my house because …', ar: 'أُحِبُّ بَيْتِي لِأَنَّهُ ______ .' },
    ],
    develop: [
      { en: 'My room is small but comfortable.', ar: 'غُرْفَتِي صَغِيرَةٌ، وَلَكِنَّهَا مُرِيحَةٌ.' },
      { en: 'As for my family, …', ar: 'أَمَّا عَائِلَتِي فَـ ______ .' },
      { en: 'My mother is kind and hard-working.', ar: 'أُمِّي لَطِيفَةٌ وَمُجْتَهِدَةٌ.' },
      { en: 'I love my area too because …', ar: 'أُحِبُّ حَيِّي أَيْضًا لِأَنَّهُ ______ .' },
      { en: 'Therefore I feel happy at home.', ar: 'لِذَلِكَ أَشْعُرُ بِالسَّعَادَةِ فِي بَيْتِي.' },
    ],
    bank: ['وَ', 'أَيْضًا', 'وَلَكِنَّ', 'لِأَنَّ', 'ثُمَّ', 'بَعْدَ ذَلِكَ', 'أَمَّا … فَـ', 'لِذَلِكَ', 'لِأَنَّهُ', 'لِأَنَّهَا', 'تُوجَدُ', 'ثَلَاثُ غُرَفٍ'],
  }),
  F.modelSlide(site,
    'I live with my family in a medium-sized house near the school. Our house has two floors, with a living room, a kitchen and three bedrooms. My room is small, but tidy and bright. In it there is a white bed, a brown desk and a big wardrobe. I live with my father, my mother, my brother and my sister. My father is calm and generous, and my mother is kind and hard-working. In the evening I study in my room, then I sit with my family in the living room. I love my house because it is comfortable, and I love my area too because the park and the library are near it.',
    ['¶1 home', '¶2 family', '¶3 daily life', 'connectors'],
    'The website annotated model (79 words): three paragraphs, five connectors with different jobs, accurate references.'),
  F.selfCheckSlide([
    { route: 'core', text: 'Task: home, family AND opinion are all there.' },
    { route: 'core', text: 'My text has 70–90 Arabic words.' },
    { route: 'develop', text: 'Variety: six connectors, each doing a job.' },
    { route: 'develop', text: 'Accuracy: gender and -hu / -hā checked.' },
    { route: 'stretch', text: 'My final version improves the draft — not a copy.' },
  ]),
  F.exitTicket(bank(9, 'finalQuiz', [3, 7, 8]), 16),
  F.prepSlide({
    ...NEXT,
    words: [['سُؤَالٌ', 'a question', 'pl. أَسْئِلَةٌ'], ['إِجَابَةٌ', 'an answer', 'pl. إِجَابَاتٌ'], ['تَفْصِيلٌ', 'a detail', 'pl. تَفَاصِيلُ'], ['رَأْيٌ', 'an opinion', 'pl. آرَاءٌ'], ['سَبَبٌ', 'a reason', 'pl. أَسْبَابٌ']],
    questionEn: 'Read your paragraph aloud twice at home and time it. How many seconds?',
    questionAr: 'كَمْ ثَانِيَةً؟',
    homework: {
      core: 'Website F3-L09: the Paragraph Architect Mission (14) and the connector laboratory.',
      develop: 'Finish your 70–90-word draft, then complete the website review checklist.',
      stretch: 'Write the improved final version; underline six connectors and circle every -hu / -hā.',
    },
    wordsSource: 'The five words come from the website F3-L10 speaking toolkit.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: plan → draft → review → improve · every connector does a job.' }),
];

module.exports = { meta, slides };
