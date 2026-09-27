'use strict';
/*
 * F3-L11 · F3 Consolidation — Integrated Skills Review
 * Website: Pathways › Foundation › F3 › Lesson 11. The review pathway (retrieve · repair · rehearse · refine) and routes,
 * the complete F3 language vault, the fifteen-word vocabulary self-test, the grammar repair laboratory (six systems) and
 * the twelve-round Error Detective, Rania’s family-and-home profile (listening), Samir’s and Huda’s review notes (reading),
 * topic-conversation preparation (5 questions), portfolio polish, the F3 vocabulary map, the assessment-readiness dashboard
 * and the final integrated checkpoint.
 */
const F = require('./f3-common');
const game = require('../site-data/pathway-visual-games.json')['f3-l11'];
const { q, bank, banks } = F;

const meta = F.meta({
  n: 11, fileTitle: 'F3_Consolidation_Integrated_Skills_Review', chip: 'F3 Review',
  title: 'F3 Consolidation — Integrated Skills Review', arabic: 'مُرَاجَعَةُ الوَحْدَةِ الثَّالِثَةِ — المَهَارَاتُ المُتَكَامِلَةُ',
  focus: 'Retrieve, repair, rehearse and refine: secure the key F3 words and grammar decisions, practise all four skills and set one precise revision priority before the assessment.',
  icon: 'FaListCheck', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F3-L12', nextTitle: 'Unit Assessment: My Family and Home', nextAr: 'تَقْيِيمُ الوَحْدَةِ — عَائِلَتِي وَبَيْتِي' };
const err = banks.l11.errorRounds.map((r) => F.w({ ...r, q: `Repair: ${r.s}` }));
const MF = (m, f) => ({ tag: 'm · f', forms: [{ l: 'f.', ar: f }, { l: 'm.', ar: m }] });
const PL = (pl, g) => ({ tag: g, forms: [{ l: 'pl.', ar: pl }] });

const site = {
  speaking: {
    context: 'Topic-conversation preparation',
    model: [
      ['A', 'هَلْ تُحِبُّ حَيَّكَ؟ وَلِمَاذَا؟', 'Do you like your neighbourhood? Why?'],
      ['B', 'نَعَمْ، أُحِبُّ حَيِّي لِأَنَّهُ هَادِئٌ. بَيْتِي قَرِيبٌ مِنْ مَكْتَبَةٍ وَحَدِيقَةٍ عَامَّةٍ.', 'Yes, I like my neighbourhood because it is quiet. My home is near a library and a public park.'],
    ],
  },
  writing: {
    prompt: 'Website portfolio polish: return to your F3-L09 text (or write a fresh 70–90-word family-and-home paragraph) and make at least three deliberate improvements. Keep the original so you can see what changed.',
    checklist: ['Keep the original draft.', 'Three visible improvements.', 'A note on the reason for each.', 'يُوجَدُ / تُوجَدُ, agreement and لِأَنَّهُ / لِأَنَّهَا checked.'],
    model: 'اِسْمِي رَانِيَا، وَأَعِيشُ مَعَ أَبِي وَأُمِّي وَأَخِي الصَّغِيرِ. أَسْكُنُ فِي شَقَّةٍ مُتَوَسِّطَةِ الحَجْمِ فِي حَيٍّ هَادِئٍ. فِي شَقَّتِنَا أَرْبَعُ غُرَفٍ، وَغُرْفَتِي المُفَضَّلَةُ غُرْفَةُ الجُلُوسِ لِأَنَّهَا مُضِيئَةٌ وَمُرِيحَةٌ. فِيهَا أَرِيكَةٌ زَرْقَاءُ وَتِلْفَازٌ كَبِيرٌ. بَيْتُنَا قَرِيبٌ مِنْ مَكْتَبَةٍ، وَلَكِنَّهُ بَعِيدٌ عَنِ المَدْرَسَةِ. فِي المَسَاءِ أَدْرُسُ أَوَّلًا، ثُمَّ أَجْلِسُ مَعَ عَائِلَتِي. أُحِبُّ بَيْتِي لِأَنَّهُ هَادِئٌ.',
  },
  differentiation: {
    core: 'Retrieve accurately: essential F3 words in complete sentences.',
    develop: 'Repair precisely: name the reason for each error, then fix it.',
    stretch: 'Perform independently: polish the portfolio and set a target.',
  },
  mistakes: [
    { wrong: 'السَّتَائِرُ أَزْرَقُ.', right: 'السَّتَائِرُ زَرْقَاءُ.', why: 'A non-human plural takes feminine singular agreement.' },
    { wrong: 'أَسْكُنُ فِي شَقَّةٍ الكَبِيرَةِ.', right: 'أَسْكُنُ فِي شَقَّةٍ كَبِيرَةٍ.', why: 'Noun and adjective match: both without al-.' },
    { wrong: 'اِسْمُهُ أُمِّي كَرِيمَةٌ.', right: 'اِسْمُ أُمِّي كَرِيمَةٌ.', why: 'My mother’s name = ismu ummī.' },
  ],
  listening: {
    title: 'Rania’s family-and-home profile',
    script: 'اِسْمِي رَانِيَا، وَأَعِيشُ مَعَ أَبِي وَأُمِّي وَأَخِي الصَّغِيرِ. أَسْكُنُ فِي شَقَّةٍ مُتَوَسِّطَةِ الحَجْمِ فِي حَيٍّ هَادِئٍ. فِي شَقَّتِنَا أَرْبَعُ غُرَفٍ، وَغُرْفَتِي المُفَضَّلَةُ غُرْفَةُ الجُلُوسِ لِأَنَّهَا مُضِيئَةٌ وَمُرِيحَةٌ. فِيهَا أَرِيكَةٌ زَرْقَاءُ وَتِلْفَازٌ كَبِيرٌ، وَالسَّجَّادَةُ أَمَامَ الأَرِيكَةِ. بَيْتُنَا قَرِيبٌ مِنْ مَكْتَبَةٍ وَحَدِيقَةٍ عَامَّةٍ، وَلَكِنَّهُ بَعِيدٌ عَنِ المَدْرَسَةِ. فِي المَسَاءِ أَدْرُسُ أَوَّلًا، ثُمَّ أَجْلِسُ مَعَ عَائِلَتِي. أُحِبُّ بَيْتِي لِأَنَّهُ هَادِئٌ وَقَرِيبٌ مِنْ أَمَاكِنَ مُفِيدَةٍ.',
    questions: bank(11, 'listeningQuiz', [0, 2, 3, 6, 7]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 11,
    source: 'Website sections used: the F3 review pathway (retrieve · repair · rehearse · refine) and the three routes, the complete F3 language vault, the fifteen-word vocabulary self-test, the grammar repair laboratory (agreement, existence, possession, counting, location, reason) and the twelve-round Error Detective, Rania’s profile (listening, 10), Samir’s and Huda’s review notes (reading, 12), topic-conversation preparation (5 questions, 2-minute timer), portfolio polish, the F3 vocabulary map, the assessment-readiness dashboard and the 16-question final checkpoint. Picture match: website visual game (family scene).',
    support: `• This is a REVIEW lesson: no new language. Use the website language vault “after your first attempt” — open only the category needed, then close it and retrieve again.
• Core: retrieve accurately (vocabulary self-test, complete sentences). Develop: repair precisely (name the system, then fix). Stretch: perform independently (topic conversation, portfolio polish, a targeted priority).
• Website readiness dashboard: “rate the evidence, not your mood” — students choose ONE priority skill for the final review before F3-L12.
• Multi-session: the vocabulary map (website section 9) and the portfolio polish can be finished at home.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Retrieve the key words, then six grammar systems.', wedo: 'Error Detective, Rania’s profile, Samir and Huda’s notes.', next: 'F3-L12' }),
  F.doNow({
    questions: [
      q('What does خَطَأٌ mean?', ['a mistake', 'a target', 'a unit'], 'Prepared at home (F3-L10).'),
      q('What does هَدَفٌ mean?', ['a target / goal', 'a correction', 'a review'], 'Prepared at home (F3-L10).'),
      ...bank(11, 'vocabQuiz', [0, 3, 11]),
    ],
    keyIdea: { text: 'Retrieve first, then check the vault. Every error belongs to a system — name it, then repair it.', ar: 'اِسْتَرْجِعْ · صَحِّحْ · تَدَرَّبْ · حَسِّنْ' },
    retrieves: 'Questions 1–2 test two of the five review words prepared at home at the end of F3-L10. Questions 3–5 come from the website “fifteen-word vocabulary self-test” (grandmother, blue (f.), chairs).',
  }),
  F.objectivesSlide([
    'Recall essential F3 words in complete sentences.',
    'Identify the exact reason for an error and repair it.',
    'Practise listening, reading and speaking on the whole unit.',
    'Improve a portfolio paragraph and set one revision priority.',
  ], {
    core: ['I can use F3 words in full sentences.', 'I can answer a question with one detail.'],
    develop: ['I can name the system behind an error.', 'I can find exact evidence in a text.'],
    stretch: ['I can make three portfolio improvements.', 'I can choose my revision priority.'],
  }, 2, 'Website review pathway (left) and the website Core / Develop / Stretch routes (right).'),
  F.keywordsSlide({
    text: 'The whole F3 unit: family, people, home, furniture, colours, neighbourhood, appliances and routines.',
    groups: [
      { head: 'VAULT 1', name: 'Family and people · 44' },
      { head: 'VAULT 2', name: 'Home, furniture, colours · 70+' },
      { head: 'VAULT 3', name: 'Neighbourhood and routines' },
    ],
    bridge: [
      { ar: 'مُرَاجَعَةٌ', urdu: 'مراجعت (رجوع)', tr: 'murāja‘a', en: 'review (root: return)' },
      { ar: 'خَطَأٌ', urdu: 'خطا', tr: 'khaṭa’', en: 'mistake' },
      { ar: 'تَصْحِيحٌ', urdu: 'تصحیح', tr: 'taṣḥīḥ', en: 'correction' },
      { ar: 'هَدَفٌ', urdu: 'ہدف', tr: 'hadaf', en: 'target' },
      { ar: 'تَقْيِيمٌ', urdu: 'قیمت', tr: 'taqyīm', en: 'assessment (root: value)' },
    ],
    notes: 'URDU BRIDGE: خطا، تصحیح and ہدف are shared words; مُرَاجَعَةٌ shares the root of رجوع (to return); تَقْيِيمٌ shares the root of قیمت (value).',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Retrieve · language vault · people (website)', title: 'Family and description', ar: 'العَائِلَةُ وَالصِّفَاتُ',
    items: [
      { n: 1, ar: 'جَدٌّ / جَدَّةٌ', en: 'grandfather / grandmother', tr: 'jadd / jad-da', core: true, tag: 'm · f', forms: [{ l: 'pl.', ar: 'أَجْدَادٌ' }] },
      { n: 2, ar: 'خَالٌ / خَالَةٌ', en: 'maternal uncle / aunt', tr: 'khāl / khā-la', tag: 'm · f', forms: [{ l: 'pl.', ar: 'أَخْوَالٌ / خَالَاتٌ' }] },
      { n: 3, ar: 'أَخٌ / أُخْتٌ', en: 'brother / sister', tr: 'akh / ukht', core: true, tag: 'm · f', forms: [{ l: 'pl.', ar: 'إِخْوَةٌ / أَخَوَاتٌ' }] },
      { n: 4, ar: 'لَطِيفٌ', en: 'kind', tr: 'la-ṭīf', core: true, ...MF('لَطِيفٌ', 'لَطِيفَةٌ') },
      { n: 5, ar: 'مُتَعَاوِنٌ', en: 'helpful / co-operative', tr: 'mu-ta-‘ā-win', ...MF('مُتَعَاوِنٌ', 'مُتَعَاوِنَةٌ') },
      { n: 6, ar: 'مُجْتَهِدٌ', en: 'hard-working', tr: 'muj-ta-hid', core: true, ...MF('مُجْتَهِدٌ', 'مُجْتَهِدَةٌ') },
    ],
    notes: 'RETRIEVE FIRST (website): students cover the English, say each item, then check. Full website vault: family and relationships (22), people (22). Useful review items: أَخِي الأَكْبَرُ / أُخْتِي الكُبْرَى, تَوْأَمٌ / تَوْأَمَانِ, اِبْنُ عَمٍّ / بِنْتُ عَمٍّ.',
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Retrieve · language vault · home and area (website)', title: 'Home, furniture and places', ar: 'البَيْتُ وَالحَيُّ',
    items: [
      { n: 7, ar: 'غُرْفَةُ الجُلُوسِ', en: 'living room', tr: 'ghur-fat al-ju-lūs', core: true, ...PL('غُرَفُ الجُلُوسِ', 'f.') },
      { n: 8, ar: 'خِزَانَةٌ', en: 'wardrobe', tr: 'khi-zā-na', core: true, ...PL('خَزَائِنُ', 'f.') },
      { n: 9, ar: 'كُرْسِيٌّ', en: 'chair', tr: 'kur-siyy', core: true, ...PL('كَرَاسِي', 'm.') },
      { n: 10, ar: 'غَسَّالَةُ الصُّحُونِ', en: 'dishwasher', tr: 'ghas-sā-lat aṣ-ṣu-ḥūn', ...PL('غَسَّالَاتُ الصُّحُونِ', 'f.') },
      { n: 11, ar: 'حَدِيقَةٌ عَامَّةٌ', en: 'public park', tr: 'ḥa-dī-qa ‘ām-ma', ...PL('حَدَائِقُ عَامَّةٌ', 'f.') },
      { n: 12, ar: 'قَرِيبٌ مِنْ · بَعِيدٌ عَنْ', en: 'near · far from', tr: 'qa-rīb min · ba-‘īd ‘an', core: true, tag: 'location', forms: [{ l: 'f.', ar: 'قَرِيبَةٌ · بَعِيدَةٌ' }] },
    ],
    notes: 'RETRIEVE FIRST. Website vault: home, rooms and building parts (24), furniture and bedroom details (23), colours and room qualities, neighbourhood and location, appliances, actions and routines. Website F3 vocabulary map: البَيْتُ وَالعَائِلَةُ in the centre with seven branches — family, rooms, furniture, colours, neighbourhood, appliances, actions (five words + one sentence per branch).',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Repair · the grammar repair laboratory (website)', title: 'Six F3 decisions', ar: 'مُخْتَبَرُ تَصْحِيحِ الأَخْطَاءِ',
    cols: [{ label: 'System', w: 2.4, size: 20 }, { label: 'Accurate models', w: 6.9, size: 22 }, { label: 'Ask yourself', w: 3.03 }],
    rows: [
      { core: true, cells: [{ ar: 'المُطَابَقَةُ' }, { ar: 'غُرْفَةٌ قَرِيبَةٌ · سِتَارَةٌ زَرْقَاءُ · بَيْتٌ كَبِيرٌ' }, 'Agreement: m. or f.?'] },
      { core: true, cells: [{ ar: 'الوُجُودُ' }, { ar: 'يُوجَدُ سَرِيرٌ · تُوجَدُ حَدِيقَةٌ' }, 'Existence: the item’s gender?'] },
      { cells: [{ ar: 'المِلْكِيَّةُ' }, { ar: 'اِسْمُهُ · اِسْمُهَا · غُرْفَتِي · بَيْتُهُمْ' }, 'Possession: whose?'] },
      { cells: [{ ar: 'العَدَدُ' }, { ar: 'ثَلَاثُ غُرَفٍ · أَرْبَعُ غُرَفٍ' }, 'Counting: f. noun → no ة'] },
      { core: true, cells: [{ ar: 'المَكَانُ' }, { ar: 'قَرِيبٌ مِنْ · بَعِيدٌ عَنْ · بِجَانِبِ' }, 'Location: min or ‘an?'] },
      { core: true, cells: [{ ar: 'السَّبَبُ' }, { ar: 'لِأَنَّهُ مُرِيحٌ · لِأَنَّهَا هَادِئَةٌ' }, 'Reason: -hu or -hā?'] },
    ],
    foot: 'Website: each item targets ONE familiar F3 decision — read the entire sentence before choosing the repair.',
    notes: `REPAIR — website section 4 “Grammar repair laboratory” (six systems). Develop students must NAME the system before repairing (“This is an agreement error because …”).
Extra review point from the Error Detective: a non-human plural takes feminine singular agreement — السَّتَائِرُ زَرْقَاءُ وَمُخَطَّطَةٌ; noun and adjective match in definiteness — شَقَّةٍ كَبِيرَةٍ.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Rehearse · four skill strategies (website checkpoint)', title: 'How to earn the marks', ar: 'اِسْتِرَاتِيجِيَّاتُ المَهَارَاتِ',
    cards: [
      { chip: 'LISTEN · READ', color: '1D5FBF', head: 'اِسْتَمِعْ · اِقْرَأْ', big: 'الفِكْرَةُ أَوَّلًا، ثُمَّ الدَّلِيلُ.', en: 'Main idea first, then the exact phrase that proves the answer.', clue: 'Do not chase every word.' },
      { chip: 'SPEAK', color: 'C77700', head: 'تَكَلَّمْ', big: 'جَوَابٌ + تَفْصِيلٌ + سَبَبٌ', en: 'Direct answer, detail, reason. Cue cards: keywords, not a script.', clue: 'Answer first, extend second.' },
      { chip: 'WRITE', color: '1E6B52', head: 'اُكْتُبْ', big: 'مُسَوَّدَةٌ + تَعْلِيقٌ + تَحْسِينٌ', en: 'Original, feedback, improved: fix one repeated error.', clue: 'Show visible progress.' },
    ],
    error: { text: 'Website Error Detective: sequence markers come before the action they organise.', pairs: [['أَدْرُسُ أَوَّلًا، ثُمَّ أَذْهَبُ إِلَى الحَدِيقَةِ.', 'أَذْهَبُ إِلَى الحَدِيقَةِ أَوَّلًا وَأَدْرُسُ ثُمَّ.']] },
    notes: `REHEARSE — strategies taken from the website final checkpoint: best first listening strategy (main idea before every word), best reading habit (locate the exact supporting phrase), a cue card contains keywords and short phrases, a strong speaking answer begins with a direct relevant response, a useful portfolio improvement corrects one repeated agreement error, and the best record of progress is original draft + feedback + improved version.
Best final revision choice (website): practise the lowest-evidence skill, then recheck it.`,
  },
  F.quickCheck(bank(11, 'vocabQuiz', [4, 6, 8, 12]), 'website vocabulary self-test questions 5, 7, 9 and 13.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · refine · portfolio polish', title: 'Three deliberate improvements', ar: 'تَحْسِينُ عَمَلِ المِلَفِّ',
    steps: [
      { head: 'Original', ar: 'بَيْتِي كَبِيرٌ. فِي بَيْتِي يُوجَدُ حَدِيقَةٌ. أُحِبُّ بَيْتِي.', think: 'Find the weak points.' },
      { head: '1 · Existence', ar: 'فِي بَيْتِي {e|تُوجَدُ} حَدِيقَةٌ.', think: 'Garden (f.) → tūjadu.' },
      { head: '2 · Detail', ar: 'بَيْتِي كَبِيرٌ وَقَرِيبٌ {w|مِنْ} مَكْتَبَةٍ.', think: 'Add a precise location.' },
      { head: '3 · Reason', ar: 'أُحِبُّ بَيْتِي {w|لِأَنَّهُ} هَادِئٌ.', think: 'House (m.) → -hu.' },
    ],
    legend: ['w', 'e'], legendLabels: { w: 'MASCULINE', e: 'FEMININE' },
    model: 'بَيْتِي كَبِيرٌ وَقَرِيبٌ {w|مِنْ} مَكْتَبَةٍ. فِي بَيْتِي {e|تُوجَدُ} حَدِيقَةٌ جَمِيلَةٌ. أُحِبُّ بَيْتِي {w|لِأَنَّهُ} هَادِئٌ وَمُرِيحٌ.',
    modelEn: 'My house is big and near a library. In my house there is a beautiful garden. I love my house because it is quiet and comfortable.',
    notes: 'I DO (3 min) — the website “portfolio polish”: keep the original, make three deliberate improvements and write the reason for each (existence · detail · reason). Students then do the same to their F3-L09 text.',
  },
  F.gameSlide({ ...game, title: 'Visual game — Family scene', items: [game.items[1], game.items[2], game.items[4]] }, {
    flex: true,
    title: 'Warm-up: who is it?',
    en: ['This is my father.', 'This is my sister.', 'This is my grandmother.'],
    icons: [[['fa6', 'FaPerson', '1D5FBF'], ['fa6', 'FaChild', '5A6472']], [['fa6', 'FaPersonDress', 'B83280'], ['fa6', 'FaPersonDress', 'B83280']], [['fa6', 'FaPersonCane', 'B83280'], ['fa6', 'FaChildDress', '5A6472']]],
    labels: ['father and son', 'two girls', 'grandmother and girl'],
    order: [2, 0, 1],
    notes: 'FLEX — website visual game (family). Review extension: add one description to each (هٰذِهِ جَدَّتِي. هِيَ كَرِيمَةٌ وَمُضْحِكَةٌ).',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website “Error Detective”', title: 'Detect and repair', ar: 'مُحَقِّقُ الأَخْطَاءِ',
    seed: 23,
    questions: [err[0], err[1], err[3], err[8], err[10]],
    side: { kind: 'core', label: 'CORE', text: 'Read the WHOLE sentence.\nName the system.\nThen choose the repair.' },
    answerSlide: { min: 0, eyebrow: 'We do · Error Detective answers', title: 'Detective: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 12 Error Detective rounds (agreement, existence, counting, reason, non-human plural). The other 7 are homework.',
    answerNotes: 'Develop: before revealing, a student names the system (agreement / existence / counting / reason).',
  },
  F.repairSlide(site, ['Curtains: which agreement?', 'Definite or not?', 'Whose name?']),
  F.listening(site, {
    coreTip: 'Listen twice.\nSeven headings: family · home · room · objects · place · routine · opinion.',
    routes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5.',
    gloss: [
      ['اِسْمِي رَانِيَا، وَأَعِيشُ مَعَ أَبِي وَأُمِّي وَأَخِي الصَّغِيرِ. أَسْكُنُ فِي شَقَّةٍ مُتَوَسِّطَةِ الحَجْمِ فِي حَيٍّ هَادِئٍ.', 'My name is Rania; I live with my father, mother and younger brother, in a medium-sized flat in a quiet area.'],
      ['فِي شَقَّتِنَا أَرْبَعُ غُرَفٍ، وَغُرْفَتِي المُفَضَّلَةُ غُرْفَةُ الجُلُوسِ لِأَنَّهَا مُضِيئَةٌ وَمُرِيحَةٌ.', 'Our flat has four rooms; my favourite is the living room because it is bright and comfortable.'],
      ['فِيهَا أَرِيكَةٌ زَرْقَاءُ وَتِلْفَازٌ كَبِيرٌ، وَالسَّجَّادَةُ أَمَامَ الأَرِيكَةِ.', 'It has a blue sofa and a big TV, and the rug is in front of the sofa.'],
      ['بَيْتُنَا قَرِيبٌ مِنْ مَكْتَبَةٍ وَحَدِيقَةٍ عَامَّةٍ، وَلَكِنَّهُ بَعِيدٌ عَنِ المَدْرَسَةِ.', 'Our home is near a library and a public park, but it is far from the school.'],
      ['فِي المَسَاءِ أَدْرُسُ أَوَّلًا، ثُمَّ أَجْلِسُ مَعَ عَائِلَتِي. أُحِبُّ بَيْتِي لِأَنَّهُ هَادِئٌ وَقَرِيبٌ مِنْ أَمَاكِنَ مُفِيدَةٍ.', 'In the evening I study first, then sit with my family. I love my home because it is quiet and near useful places.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · Profile A (website)', title: 'Samir’s review notes', ar: 'المَلَفُّ (أ) · سَمِيرٌ',
    lines: [
      ['أَعِيشُ مَعَ أُمِّي وَأَبِي وَأُخْتَيْنِ فِي بَيْتٍ مِنْ طَابِقَيْنِ.', 'Parents + two sisters · a two-storey house'],
      ['أَبِي طَوِيلٌ وَهَادِئٌ، وَأُمِّي لَطِيفَةٌ وَمُتَعَاوِنَةٌ.', 'Father: tall, quiet · mother: kind, helpful'],
      ['فِي الطَّابِقِ الأَرْضِيِّ مَطْبَخٌ وَغُرْفَةُ جُلُوسٍ وَاسِعَةٌ.', 'Ground floor: kitchen + spacious living room'],
      ['أَمَّا غُرْفَتِي فَفِي الطَّابِقِ الأَوَّلِ، وَمَكْتَبِي بِجَانِبِ النَّافِذَةِ.', 'My room: first floor · desk next to the window'],
      ['أَسْتَخْدِمُ الحَاسُوبَ لِلدِّرَاسَةِ، ثُمَّ أَلْعَبُ مَعَ أُخْتَيَّ فِي الحَدِيقَةِ. بَيْتُنَا قَرِيبٌ مِنْ مَلْعَبٍ وَلَكِنَّهُ بَعِيدٌ عَنِ المَحَطَّةِ.', 'Computer for study, then garden · near a pitch, far from the station'],
    ],
    notes: 'PROFILE A (website, complete). The text combines F3-L01 (family), L02 (description), L03 (floors, rooms), L06 (appliance for a purpose), L07 (near / far) and L08 (position).',
  },
  {
    type: 'glossed', stage: 'wedo', flex: true, eyebrow: 'We do · reading · Profile B (website) · FLEX / Stretch', title: 'Huda’s review notes', ar: 'المَلَفُّ (ب) · هُدَى',
    lines: [
      ['أَسْكُنُ فِي شَقَّةٍ صَغِيرَةٍ مَعَ وَالِدَتِي وَجَدَّتِي.', 'A small flat · with mother + grandmother'],
      ['جَدَّتِي كَرِيمَةٌ وَمُضْحِكَةٌ، وَهِيَ تُحِبُّ القِرَاءَةَ.', 'Grandmother: generous, funny, loves reading'],
      ['فِي شَقَّتِنَا غُرْفَتَانِ وَمَطْبَخٌ وَحَمَّامٌ.', 'Two rooms + kitchen + bathroom'],
      ['غُرْفَةُ النَّوْمِ وَرْدِيَّةٌ وَمُرَتَّبَةٌ، وَفِيهَا سَرِيرَانِ وَخِزَانَةٌ بَيْضَاءُ.', 'Bedroom: pink, tidy · two beds · white wardrobe'],
      ['الشَّقَّةُ مُقَابِلَ مَكْتَبَةٍ وَبِجَانِبِ صَيْدَلِيَّةٍ. فِي نِهَايَةِ الأُسْبُوعِ نَذْهَبُ إِلَى الحَدِيقَةِ العَامَّةِ، وَأَحْيَانًا نَزُورُ خَالَتِي.', 'Opposite a library, next to a pharmacy · weekend: park, sometimes visit aunt'],
    ],
    notes: 'PROFILE B (website, complete). Stretch: compare A and B — house vs flat, big vs small family, near / far. Duals to notice: غُرْفَتَانِ، سَرِيرَانِ، أُخْتَيْنِ.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions (website)', title: 'Samir or Huda?', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 3,
    questions: bank(11, 'readingQuiz', [1, 3, 5, 8, 10]),
    side: { kind: 'info', head: 'EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Locate the exact phrase\nbefore you choose.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading questions 2, 4, 6, 9 and 11 (9 and 11 are Profile B). The other 7 are homework.',
    answerNotes: 'A student reads aloud the evidence phrase (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'صِفْ بَيْتَكَ. / صِفِي بَيْتَكِ.' },
      { route: 'develop', ar: 'مَا هِيَ غُرْفَتُكَ المُفَضَّلَةُ؟ وَلِمَاذَا؟' },
      { route: 'develop', ar: 'صِفْ عَائِلَتَكَ. / صِفِي عَائِلَتَكِ.' },
      { route: 'stretch', ar: 'هَلْ تُحِبُّ حَيَّكَ؟ وَلِمَاذَا؟ مَاذَا يُوجَدُ بِجَانِبِ بَيْتِكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَسْكُنُ فِي ______ . فِيهِ / فِيهَا ______ غُرَفٍ.' },
      { route: 'develop', ar: 'غُرْفَتِي المُفَضَّلَةُ ______ لِأَنَّهَا ______ .' },
      { route: 'develop', ar: 'أَعِيشُ مَعَ ______ . أَمَّا ______ فَـ ______ .' },
      { route: 'stretch', ar: 'بَيْتِي قَرِيبٌ مِنْ ______ ، وَلَكِنَّهُ بَعِيدٌ عَنْ ______ .' },
    ],
    modelEn: ['Do you like your neighbourhood? Why?', 'Yes, I like my neighbourhood because it is quiet. My home is near a library and a public park.'],
    notes: `WEBSITE TOPIC-CONVERSATION PREPARATION (5 questions, 2-minute timer): prepare keywords, not a full script — a direct answer followed by one or two relevant details. The five website questions are exactly the four prompts above (the Stretch card joins questions 4 and 5).
This rehearses the F3-L12 speaking section (five family-and-home questions, /10).`,
  }),
  F.routesSlide(site, {
    core: { amount: '3 fixes', how: 'Correct three sentences in your F3-L09 text using the six systems.' },
    develop: { amount: '3 fixes + notes', how: 'Three improvements, each with a note naming the system.' },
    stretch: { amount: 'polished 70–90', how: 'A new improved version + your one revision priority.' },
  }),
  F.framesSlide({
    core: [
      { en: 'In my house there is a garden.', ar: 'فِي بَيْتِي تُوجَدُ حَدِيقَةٌ.' },
      { en: 'In our flat there are four rooms.', ar: 'فِي شَقَّتِنَا أَرْبَعُ غُرَفٍ.' },
      { en: 'My house is near a library.', ar: 'بَيْتِي قَرِيبٌ مِنْ مَكْتَبَةٍ.' },
      { en: 'My mother’s name is …', ar: 'اِسْمُ أُمِّي ______ .' },
      { en: 'I love my house because it is quiet.', ar: 'أُحِبُّ بَيْتِي لِأَنَّهُ هَادِئٌ.' },
    ],
    develop: [
      { en: 'I corrected an agreement error.', ar: 'صَحَّحْتُ خَطَأً فِي المُطَابَقَةِ.' },
      { en: 'The curtains are blue and striped.', ar: 'السَّتَائِرُ زَرْقَاءُ وَمُخَطَّطَةٌ.' },
      { en: 'As for my room, it is on the first floor.', ar: 'أَمَّا غُرْفَتِي فَفِي الطَّابِقِ الأَوَّلِ.' },
      { en: '… but it is far from the school.', ar: '… وَلَكِنَّهُ بَعِيدٌ عَنِ المَدْرَسَةِ.' },
      { en: 'My target is …', ar: 'هَدَفِي ______ .' },
    ],
    bank: ['يُوجَدُ', 'تُوجَدُ', 'ثَلَاثُ غُرَفٍ', 'اِسْمُهُ', 'اِسْمُهَا', 'قَرِيبٌ مِنْ', 'بَعِيدٌ عَنْ', 'بِجَانِبِ', 'لِأَنَّهُ', 'لِأَنَّهَا', 'أَمَّا … فَـ', 'هَدَفِي'],
  }),
  F.modelSlide(site,
    'My name is Rania and I live with my father, my mother and my younger brother. I live in a medium-sized flat in a quiet neighbourhood. Our flat has four rooms, and my favourite room is the living room because it is bright and comfortable. In it there is a blue sofa and a big TV. Our home is near a library, but it is far from the school. In the evening I study first, then I sit with my family. I love my home because it is quiet.',
    ['family', 'home + room', 'near / far', 'reasons'],
    'Website listening profile (Rania) used as the polished model — every one of the six systems appears.'),
  F.selfCheckSlide([
    { route: 'core', text: 'Vocabulary: I retrieved before checking the vault.' },
    { route: 'core', text: 'Grammar: I can name the six systems.' },
    { route: 'develop', text: 'Listening / reading: I found exact evidence.' },
    { route: 'develop', text: 'Speaking: direct answer + detail + reason.' },
    { route: 'stretch', text: 'Writing: three visible improvements + my priority.' },
  ]),
  F.exitTicket(bank(11, 'finalQuiz', [1, 4, 5]), 16),
  F.prepSlide({
    ...NEXT,
    words: [['تَقْيِيمٌ', 'an assessment', 'pl. تَقْيِيمَاتٌ'], ['إِنْجَازٌ', 'an achievement', 'pl. إِنْجَازَاتٌ'], ['تَقَدُّمٌ', 'progress', '—'], ['ثِقَةٌ', 'confidence', '—'], ['نَتِيجَةٌ', 'a result', 'pl. نَتَائِجُ']],
    questionEn: 'Which skill is your priority before the assessment — and what will you practise?',
    questionAr: 'مَا مَهَارَتُكَ الأَضْعَفُ؟',
    homework: {
      core: 'Website F3-L11: the vocabulary self-test (15) and the Error Detective (12).',
      develop: 'Website vocabulary map: seven branches, five words and one sentence each.',
      stretch: 'Finish the portfolio polish and complete the readiness dashboard with evidence.',
    },
    wordsSource: 'Four of the five words come from the website F3-L12 “assessment vocabulary” (نَتِيجَةٌ is teacher-added).',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: retrieve → repair → rehearse → refine · practise your lowest-evidence skill.' }),
];

module.exports = { meta, slides };
