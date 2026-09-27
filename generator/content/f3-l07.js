'use strict';
/*
 * F3-L07 · My Neighbourhood — Places Near My Home
 * Website: Pathways › Foundation › F3 › Lesson 7. The eight-question bridge from home to neighbourhood, the place vault (15
 * core places + wider recognition bank), near / far with agreement and eight fixed position expressions, route commands
 * (one male / one female listener), the Neighbourhood Map Studio, the Navigation Mission, directions to the library
 * (listening), a quiet area and a busy area (reading), the neighbourhood tour, the connected neighbourhood guide and the
 * checkpoint.
 * The website quiz file for this lesson only publishes the retrieval bridge: every other question in this deck is
 * teacher-written from the website page content (vault, tables, route model, listening script and texts).
 */
const F = require('./f3-common');
const game = require('../site-data/pathway-visual-games.json')['f3-l07'];
const { q, bank } = F;

const meta = F.meta({
  n: 7, fileTitle: 'My_Neighbourhood_Places_Near_My_Home', chip: 'Neighbourhood',
  title: 'My Neighbourhood — Places Near My Home', arabic: 'حَيِّي — الأَمَاكِنُ القَرِيبَةُ مِنْ بَيْتِي',
  focus: 'Name the places around a neighbourhood, say where they are (near, far, next to, opposite …) and guide someone along a short route.',
  icon: 'FaMapLocationDot', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F3-L08', nextTitle: 'Describing My Bedroom', nextAr: 'وَصْفُ غُرْفَتِي' };

const site = {
  speaking: {
    context: 'Give a neighbourhood tour',
    model: [
      ['A', 'عُذْرًا، كَيْفَ أَذْهَبُ إِلَى المَكْتَبَةِ؟', 'Excuse me, how do I get to the library?'],
      ['B', 'سِرْ مُسْتَقِيمًا، ثُمَّ اِنْعَطِفْ يَمِينًا عِنْدَ البَنْكِ. المَكْتَبَةُ بِجَانِبِ الحَدِيقَةِ.', 'Walk straight on, then turn right at the bank. The library is next to the park.'],
    ],
  },
  writing: {
    prompt: 'Website writing task: a connected neighbourhood guide of 7–9 sentences — eight places, four location expressions, a route and an opinion (real or invented neighbourhood).',
    checklist: ['Eight places.', 'قَرِيبٌ مِنْ · بَعِيدٌ عَنْ (with agreement).', 'Two fixed positions: أَمَامَ، بِجَانِبِ، مُقَابِلَ …', 'A route and an opinion with لِأَنَّ.'],
    model: 'أَسْكُنُ فِي حَيٍّ هَادِئٍ. بَيْتِي قَرِيبٌ مِنَ المَدْرَسَةِ وَبَعِيدٌ عَنِ المَحَطَّةِ. أَمَامَ بَيْتِي حَدِيقَةٌ عَامَّةٌ، وَخَلْفَ الحَدِيقَةِ مَلْعَبٌ كَبِيرٌ. الصَّيْدَلِيَّةُ بِجَانِبِ السُّوبَرْمَارْكِتِ، وَالمَكْتَبَةُ مُقَابِلَ البَنْكِ. أُحِبُّ حَيِّي لِأَنَّهُ جَمِيلٌ وَآمِنٌ.',
  },
  differentiation: {
    core: 'Seven accurate sentences using the place and position banks.',
    develop: 'Add a four-step route and a reason for your opinion.',
    stretch: 'Compare two areas with wa-lākinna, ayḍan and fī l-muqābil.',
  },
  mistakes: [
    { wrong: 'البَنْكُ بَعِيدٌ مِنَ البَيْتِ.', right: 'البَنْكُ بَعِيدٌ عَنِ البَيْتِ.', why: 'Near takes min, far takes ‘an: do not swap them.' },
    { wrong: 'الصَّيْدَلِيَّةُ قَرِيبٌ مِنَ المَدْرَسَةِ.', right: 'الصَّيْدَلِيَّةُ قَرِيبَةٌ مِنَ المَدْرَسَةِ.', why: 'The pharmacy is feminine: qarība.' },
    { wrong: 'سَلْمَى، اِنْعَطِفْ يَمِينًا.', right: 'سَلْمَى، اِنْعَطِفِي يَمِينًا.', why: 'Talking to a girl: add -ī to the command.' },
  ],
  listening: {
    title: 'Directions to the library',
    script: 'سَلْمَى: عُذْرًا، كَيْفَ أَذْهَبُ إِلَى المَكْتَبَةِ مِنَ المَدْرَسَةِ؟ عُمَرُ: سِيرِي مُسْتَقِيمًا فِي شَارِعِ النَّهْضَةِ. سَتَرَيْنَ بَنْكًا عَلَى يَسَارِكِ وَصَيْدَلِيَّةً عَلَى يَمِينِكِ. عِنْدَ إِشَارَةِ المُرُورِ، اِنْعَطِفِي يَمِينًا وَاعْبُرِي الشَّارِعَ عِنْدَ مَعْبَرِ المُشَاةِ. المَكْتَبَةُ بِجَانِبِ الحَدِيقَةِ العَامَّةِ وَمُقَابِلَ المَطْعَمِ. هِيَ قَرِيبَةٌ مِنَ المَحَطَّةِ. سَلْمَى: شُكْرًا جَزِيلًا. عُمَرُ: عَفْوًا.',
    questions: [
      { prompt: 'Where does Salma start?', options: ['at the school', 'at the station', 'at the park'], answer: 0, feedback: 'She asks: مِنَ المَدْرَسَةِ (from the school).' },
      { prompt: 'What is on her left?', options: ['a bank', 'a pharmacy', 'a restaurant'], answer: 0, feedback: 'بَنْكًا عَلَى يَسَارِكِ.' },
      { prompt: 'Where does she turn right?', options: ['at the traffic lights', 'at the bank', 'at the roundabout'], answer: 0, feedback: 'عِنْدَ إِشَارَةِ المُرُورِ.' },
      { prompt: 'What is the library next to?', options: ['the public park', 'the restaurant', 'the station'], answer: 0, feedback: 'بِجَانِبِ الحَدِيقَةِ العَامَّةِ — it is OPPOSITE the restaurant.' },
      { prompt: 'Why does Omar say sīrī, not sir?', options: ['He is talking to a girl.', 'He is talking to a group.', 'He is talking about himself.'], answer: 0, feedback: 'The -ī ending is for one female listener.' },
    ],
  },
};

const slides = [
  F.titleSlide({
    n: 7,
    source: 'Website sections used: the eight-question bridge (home → neighbourhood), the place vault (15 core places + wider recognition bank), “Locate places accurately” (near / far with agreement, eight fixed position expressions, the common mistake), “Build a short route” (commands for one male and one female listener, the route model), the Neighbourhood Map Studio and its model description, the Navigation Mission, directions to the library (listening), Text A quiet area and Text B busy area (reading), the neighbourhood tour, the 7–9-sentence guide and the checkpoint. Picture match: website visual game (in the city).',
    support: `• QUESTIONS: the website quiz file for this lesson publishes only the eight-question bridge. The quick check, mission, listening, reading and exit questions in this deck are teacher-written from the website page content.
• Core: 8 places + near / far + next to / opposite. Develop: all eight positions and a route with three commands. Stretch: male and female commands, and comparing two areas.
• Website “Foundation focus”: learn reliable direction CHUNKS for immediate communication — full imperative grammar returns later.
• Sensitivity: students may describe a real or an invented neighbourhood; do not ask anyone to reveal where they actually live.
• Urdu bridge: مسجد، مکتبہ، شارع (as in شاہراہ-style road names), قریب، دور / بعید، سامنے (Arabic أَمَامَ), مقابل (same word).`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Places in a neighbourhood, then near, far, next to, opposite — and route commands.', wedo: 'Navigation mission, listen to Omar’s directions, read two areas.', next: 'F3-L08' }),
  F.doNow({
    questions: [
      q('What does مَسْجِدٌ mean?', ['a mosque', 'a school', 'a street'], 'Prepared at home (F3-L06).'),
      q('What does مُسْتَشْفًى mean?', ['a hospital', 'a library', 'a neighbourhood'], 'Prepared at home (F3-L06).'),
      ...bank(7, 'retrieval', [1, 3, 6]),
    ],
    keyIdea: { text: 'Near takes min, far takes ‘an — and both agree with the place.', ar: 'قَرِيبٌ {w|مِنْ} · بَعِيدٌ {e|عَنْ}' },
    retrieves: 'Questions 1–2 test two of the five place words prepared at home at the end of F3-L06. Questions 3–5 are the website “eight-question bridge” (there is a garden, the white window, I live in a flat).',
  }),
  F.objectivesSlide([
    'Name the complete core neighbourhood bank.',
    'Use near, far and fixed location expressions.',
    'Follow and give short directions.',
    'Create a map and a connected neighbourhood description.',
  ], {
    core: ['I can name eight places.', 'I can say near / far with the right word.'],
    develop: ['I can use four position phrases.', 'I can give a route with three steps.'],
    stretch: ['I can use commands for a boy and a girl.', 'I can compare two areas.'],
  }, 2, 'Website “By the end” aims (left) and the website writing Core / Develop / Stretch routes (right).'),
  F.keywordsSlide({
    text: 'Places, positions and route commands. Core: eight places, near / far, next to, opposite.',
    groups: [
      { head: 'GROUP 1', name: 'Places · 15 + wider bank' },
      { head: 'GROUP 2', name: 'Near, far and 8 positions' },
      { head: 'GROUP 3', name: 'Route commands' },
    ],
    bridge: [
      { ar: 'مَسْجِدٌ', urdu: 'مسجد', tr: 'masjid', en: 'mosque' },
      { ar: 'مَكْتَبَةٌ', urdu: 'مکتبہ', tr: 'maktaba', en: 'library / bookshop' },
      { ar: 'قَرِيبٌ', urdu: 'قریب', tr: 'qarīb', en: 'near' },
      { ar: 'مُقَابِلَ', urdu: 'مقابل', tr: 'muqābila', en: 'opposite' },
      { ar: 'مُسْتَشْفًى', urdu: 'شفا خانہ', tr: 'mustashfā', en: 'hospital (root: healing)' },
    ],
    notes: 'URDU BRIDGE: مسجد، مکتبہ، قریب and مقابل are the same words. مُسْتَشْفًى shares the root of شفا (healing). CAREFUL: Urdu دور = Arabic بَعِيدٌ (far).',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · core places (website) · 1 of 2', title: 'Street, school, mosque …', ar: 'أَمَاكِنُ الحَيِّ',
    items: [
      { n: 1, ar: 'حَيٌّ', en: 'neighbourhood', tr: 'ḥayy', core: true, tag: 'm.', forms: [{ l: 'pl.', ar: 'أَحْيَاءٌ' }, { l: 'my', ar: 'حَيِّي' }] },
      { n: 2, ar: 'شَارِعٌ', en: 'street', tr: 'shā-ri‘', core: true, tag: 'm.', forms: [{ l: 'pl.', ar: 'شَوَارِعُ' }] },
      { n: 3, ar: 'مَدْرَسَةٌ', en: 'school', tr: 'mad-ra-sa', core: true, tag: 'f.', forms: [{ l: 'pl.', ar: 'مَدَارِسُ' }] },
      { n: 4, ar: 'مَسْجِدٌ', en: 'mosque', tr: 'mas-jid', core: true, tag: 'm.', forms: [{ l: 'pl.', ar: 'مَسَاجِدُ' }] },
      { n: 5, ar: 'مُسْتَشْفًى', en: 'hospital', tr: 'mus-tash-fā', core: true, tag: 'm.', forms: [{ l: 'pl.', ar: 'مُسْتَشْفَيَاتٌ' }] },
      { n: 6, ar: 'صَيْدَلِيَّةٌ', en: 'pharmacy', tr: 'ṣay-da-liy-ya', core: true, tag: 'f.', forms: [{ l: 'pl.', ar: 'صَيْدَلِيَّاتٌ' }] },
    ],
    notes: 'CORE PLACES (website vault). Gender matters today — it decides قَرِيبٌ / قَرِيبَةٌ. Also in the vault: كَنِيسَةٌ (church). Notice مُسْتَشْفًى is masculine despite the long ā.',
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · core places (website) · 2 of 2', title: 'Shop, park, station, bank …', ar: 'أَمَاكِنُ الحَيِّ',
    items: [
      { n: 7, ar: 'مَتْجَرٌ / دُكَّانٌ', en: 'shop', tr: 'mat-jar / duk-kān', core: true, tag: 'm.', forms: [{ l: 'pl.', ar: 'مَتَاجِرُ' }] },
      { n: 8, ar: 'مَكْتَبَةٌ', en: 'library / bookshop', tr: 'mak-ta-ba', core: true, tag: 'f.', forms: [{ l: 'pl.', ar: 'مَكْتَبَاتٌ' }] },
      { n: 9, ar: 'حَدِيقَةٌ عَامَّةٌ', en: 'public park', tr: 'ḥa-dī-qa ‘ām-ma', core: true, tag: 'f.', forms: [{ l: 'pl.', ar: 'حَدَائِقُ عَامَّةٌ' }] },
      { n: 10, ar: 'مَطْعَمٌ', en: 'restaurant', tr: 'maṭ-‘am', tag: 'm.', forms: [{ l: 'pl.', ar: 'مَطَاعِمُ' }] },
      { n: 11, ar: 'مَحَطَّةٌ', en: 'station', tr: 'ma-ḥaṭ-ṭa', tag: 'f.', forms: [{ l: 'pl.', ar: 'مَحَطَّاتٌ' }] },
      { n: 12, ar: 'بَنْكٌ', en: 'bank', tr: 'bank', tag: 'm.', forms: [{ l: 'also', ar: 'مَصْرِفٌ' }] },
    ],
    notes: 'CORE PLACES (website vault). Also: سُوبَرْمَارْكِتٌ (supermarket), مَلْعَبٌ (pitch / playground). Wider recognition bank (website, for texts): مَخْبَزٌ (bakery), مَقْهًى (café), سُوقٌ (market), مَكْتَبُ البَرِيدِ (post office), مَرْكَزُ الشُّرْطَةِ (police station), مَوْقِفُ الحَافِلَاتِ (bus stop), إِشَارَةُ المُرُورِ (traffic lights), مَعْبَرُ المُشَاةِ (pedestrian crossing), دَوَّارٌ (roundabout).',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · near, far and positions (website)', title: 'Where is it?', ar: 'أَيْنَ المَكَانُ؟',
    cols: [{ label: 'Expression', w: 2.6, size: 24 }, { label: 'Example', w: 6.2, size: 22 }, { label: 'Meaning', w: 3.53 }],
    rows: [
      { core: true, cells: [{ ar: 'قَرِيبٌ {w|مِنْ}' }, { ar: 'المَسْجِدُ قَرِيبٌ مِنَ البَيْتِ · الصَّيْدَلِيَّةُ قَرِيبَ{e|ةٌ} مِنَ البَيْتِ' }, 'near (m. · f.)'] },
      { core: true, cells: [{ ar: 'بَعِيدٌ {e|عَنْ}' }, { ar: 'البَنْكُ بَعِيدٌ عَنِ المَدْرَسَةِ · المَحَطَّةُ بَعِيدَ{e|ةٌ} عَنِ الحَدِيقَةِ' }, 'far (m. · f.)'] },
      { core: true, cells: [{ ar: 'بِجَانِبِ · مُقَابِلَ' }, { ar: 'بَيْتِي بِجَانِبِ المَدْرَسَةِ · المَكْتَبَةُ مُقَابِلَ البَنْكِ' }, 'next to · opposite'] },
      { cells: [{ ar: 'أَمَامَ · خَلْفَ' }, { ar: 'الحَدِيقَةُ أَمَامَ المَسْجِدِ · المَلْعَبُ خَلْفَ الحَدِيقَةِ' }, 'in front of · behind'] },
      { cells: [{ ar: 'بَيْنَ … وَ …' }, { ar: 'الصَّيْدَلِيَّةُ بَيْنَ السُّوبَرْمَارْكِتِ وَالمَحَطَّةِ' }, 'between … and …'] },
      { cells: [{ ar: 'عَلَى يَمِينِ · عَلَى يَسَارِ' }, { ar: 'المَقْهَى عَلَى يَسَارِ البِنَايَةِ' }, 'on the right / left of'] },
    ],
    foot: 'Website common mistake: qarīb MIN but ba‘īd ‘AN — do not swap the prepositions. Also: ‘inda = at / by.',
    notes: `GRAMMAR PART 1 — website section 3 “Locate places accurately”: agreement with near and far (masculine / feminine place), then the eight fixed expressions (أَمَامَ، خَلْفَ، بِجَانِبِ، مُقَابِلَ، عَلَى يَمِينِ، عَلَى يَسَارِ، بَيْنَ، عِنْدَ).
Positions do not change: they are fixed chunks followed by the place (… المَدْرَسَةِ with kasra — no need to teach the case at Foundation).`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · a short route (website)', title: 'Walk, turn, cross, stop', ar: 'اِبْنِ طَرِيقًا قَصِيرًا',
    cards: [
      { chip: 'WALK', color: '1D5FBF', head: 'سِرْ / سِيرِي', big: 'سِرْ مُسْتَقِيمًا.', en: 'Walk straight on (to a boy).', clue: 'To a girl: sīrī.' },
      { chip: 'TURN', color: 'C77700', head: 'اِنْعَطِفْ / اِنْعَطِفِي', big: 'اِنْعَطِفْ يَمِينًا / يَسَارًا.', en: 'Turn right / left.', clue: 'To a girl: in‘aṭifī.' },
      { chip: 'CROSS · STOP', color: '1E6B52', head: 'اِعْبُرْ · تَوَقَّفْ', big: 'اِعْبُرِ الشَّارِعَ، ثُمَّ تَوَقَّفْ عِنْدَ البَنْكِ.', en: 'Cross the street, then stop at the bank.', clue: 'To a girl: u‘burī, tawaqqafī.' },
    ],
    error: { text: 'Website route model: sequence words from F3-L06 + commands.', pairs: [['أَوَّلًا سِرْ مُسْتَقِيمًا، ثُمَّ اِنْعَطِفْ يَمِينًا عِنْدَ البَنْكِ.', 'سِرْ ثُمَّ أَوَّلًا البَنْكِ يَمِينًا.']] },
    notes: `GRAMMAR PART 2 — website section 4 “Build a short route”: the male and female command chunks — اِذْهَبْ / اِذْهَبِي (go), سِرْ مُسْتَقِيمًا / سِيرِي مُسْتَقِيمًا, اِنْعَطِفْ / اِنْعَطِفِي يَمِينًا · يَسَارًا, اِعْبُرِ / اِعْبُرِي الشَّارِعَ, تَوَقَّفْ / تَوَقَّفِي عِنْدَ …
Website route model: أَوَّلًا سِرْ مُسْتَقِيمًا، ثُمَّ اِنْعَطِفْ يَمِينًا عِنْدَ البَنْكِ. بَعْدَ ذَلِكَ اِعْبُرِ الشَّارِعَ، وَأَخِيرًا سَتَجِدُ المَكْتَبَةَ عَلَى يَسَارِكَ.
Core learns the male chunks; the female -ī is Develop / Stretch (and needed for the listening).`,
  },
  F.quickCheck([
    q('Choose “The pharmacy is near the house.”', ['الصَّيْدَلِيَّةُ قَرِيبَةٌ مِنَ البَيْتِ.', 'الصَّيْدَلِيَّةُ قَرِيبٌ مِنَ البَيْتِ.', 'الصَّيْدَلِيَّةُ قَرِيبَةٌ عَنِ البَيْتِ.'], 'Pharmacy is feminine (qarība) and near takes min.'),
    q('Choose “The bank is far from the school.”', ['البَنْكُ بَعِيدٌ عَنِ المَدْرَسَةِ.', 'البَنْكُ بَعِيدٌ مِنَ المَدْرَسَةِ.', 'البَنْكُ بَعِيدَةٌ عَنِ المَدْرَسَةِ.'], 'Far takes ‘an; bank is masculine.'),
    q('What does مُقَابِلَ mean?', ['opposite', 'behind', 'between'], 'Urdu مقابل — the same word.'),
    q('Choose “Turn right” for a boy.', ['اِنْعَطِفْ يَمِينًا.', 'اِنْعَطِفِي يَمِينًا.', 'اِنْعَطِفْ يَسَارًا.'], 'No -ī for a boy; yamīnan = right.'),
  ], 'teacher-written from the website location and route tables (no published bank for this section).'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me describe and guide', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Where I live', ar: 'أَسْكُنُ فِي حَيٍّ هَادِئٍ.', think: 'Opening.' },
      { head: 'Near / far', ar: 'بَيْتِي قَرِيبٌ {w|مِنَ} المَدْرَسَةِ وَبَعِيدٌ {e|عَنِ} المَحَطَّةِ.', think: 'min · ‘an' },
      { head: 'Positions', ar: 'الصَّيْدَلِيَّةُ بِجَانِبِ السُّوبَرْمَارْكِتِ، وَالمَكْتَبَةُ مُقَابِلَ البَنْكِ.', think: 'Fixed chunks.' },
      { head: 'Route', ar: 'أَوَّلًا سِرْ مُسْتَقِيمًا، ثُمَّ اِنْعَطِفْ يَمِينًا عِنْدَ البَنْكِ.', think: 'Sequence + command.' },
    ],
    legend: ['w', 'e'], legendLabels: { w: 'NEAR → MIN', e: 'FAR → ‘AN' },
    model: 'أَسْكُنُ فِي حَيٍّ هَادِئٍ. بَيْتِي قَرِيبٌ {w|مِنَ} المَدْرَسَةِ وَبَعِيدٌ {e|عَنِ} المَحَطَّةِ. الصَّيْدَلِيَّةُ بِجَانِبِ السُّوبَرْمَارْكِتِ، وَالمَكْتَبَةُ مُقَابِلَ البَنْكِ. إِلَى المَكْتَبَةِ: أَوَّلًا سِرْ مُسْتَقِيمًا، ثُمَّ اِنْعَطِفْ يَمِينًا عِنْدَ البَنْكِ.',
    modelEn: 'I live in a quiet neighbourhood. My house is near the school and far from the station. The pharmacy is next to the supermarket, and the library is opposite the bank. To the library: first walk straight on, then turn right at the bank.',
    notes: 'I DO (3 min) — website Text A and the route model. Think aloud at near / far: “min or ‘an?” and at every place: “masculine or feminine?”',
  },
  F.gameSlide({ ...game, title: 'Visual game — In the city', items: [game.items[0], game.items[4], game.items[5]] }, {
    title: 'Which place? Match the picture',
    en: ['This is a hospital.', 'This is a public park.', 'This is a library.'],
    icons: [[['fa6', 'FaHospital', 'B83280']], [['fa6', 'FaTree', '1E6B52']], [['fa6', 'FaBookOpen', '1D5FBF']]],
    labels: ['a hospital', 'trees and a playground', 'books'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Ask: why هٰذَا for the hospital but هٰذِهِ for the park and the library? Other cards for homework: مَصْرِفٌ (= بَنْكٌ), مَكْتَبُ بَرِيدٍ, مَتْجَرٌ.',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website “Navigation Mission” (teacher-written rounds)', title: 'Find the way', ar: 'مُهِمَّةُ المَلَّاحِ',
    seed: 11,
    questions: [
      q('The library is ___ the bank. (opposite)', ['مُقَابِلَ', 'خَلْفَ', 'بَيْنَ'], 'مُقَابِلَ = opposite.'),
      q('Complete: المَحَطَّةُ ___ عَنِ البَيْتِ.', ['بَعِيدَةٌ', 'بَعِيدٌ', 'قَرِيبَةٌ'], 'Station is feminine, and ‘an goes with far.'),
      q('Which command means “cross the street”?', ['اِعْبُرِ الشَّارِعَ.', 'سِرْ مُسْتَقِيمًا.', 'تَوَقَّفْ عِنْدَ الشَّارِعِ.'], 'u‘bur = cross.'),
      q('You are guiding a girl. Choose the command.', ['سِيرِي مُسْتَقِيمًا.', 'سِرْ مُسْتَقِيمًا.', 'سِيرُوا مُسْتَقِيمًا.'], 'One female listener → -ī.'),
      q('Choose the most logical route.', ['أَوَّلًا سِرْ مُسْتَقِيمًا، ثُمَّ اِنْعَطِفْ يَسَارًا، وَأَخِيرًا تَوَقَّفْ عِنْدَ المَسْجِدِ.', 'أَخِيرًا سِرْ مُسْتَقِيمًا، أَوَّلًا تَوَقَّفْ عِنْدَ المَسْجِدِ.', 'ثُمَّ أَوَّلًا اِنْعَطِفْ المَسْجِدِ يَسَارًا.'], 'First … then … finally, each with a command.'),
    ],
    side: { kind: 'core', label: 'CORE', text: 'near → min · far → ‘an\nplace f. → qarība / ba‘īda\ngirl → sīrī, in‘aṭifī' },
    answerSlide: { min: 0, eyebrow: 'We do · Mission answers', title: 'Mission: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 rounds in the style of the website Navigation Mission (14 rounds; the round bank is not published in the site data, so these are teacher-written). Students play all 14 on the website for homework.',
    answerNotes: 'After each answer ask: who is listening — a boy or a girl? Is the place masculine or feminine?',
  },
  F.repairSlide(site, ['Far: min or ‘an?', 'Pharmacy: masculine or feminine?', 'Salma is a girl: which ending?']),
  F.listening(site, {
    coreTip: 'Listen twice.\nNote: start · 3 landmarks · the turn · the destination.',
    routes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5.',
    gloss: [
      ['سَلْمَى: عُذْرًا، كَيْفَ أَذْهَبُ إِلَى المَكْتَبَةِ مِنَ المَدْرَسَةِ؟', 'Salma: Excuse me, how do I get to the library from the school?'],
      ['عُمَرُ: سِيرِي مُسْتَقِيمًا فِي شَارِعِ النَّهْضَةِ. سَتَرَيْنَ بَنْكًا عَلَى يَسَارِكِ وَصَيْدَلِيَّةً عَلَى يَمِينِكِ.', 'Omar: Walk straight along Nahda Street. You will see a bank on your left and a pharmacy on your right.'],
      ['عِنْدَ إِشَارَةِ المُرُورِ، اِنْعَطِفِي يَمِينًا وَاعْبُرِي الشَّارِعَ عِنْدَ مَعْبَرِ المُشَاةِ.', 'At the traffic lights, turn right and cross the street at the pedestrian crossing.'],
      ['المَكْتَبَةُ بِجَانِبِ الحَدِيقَةِ العَامَّةِ وَمُقَابِلَ المَطْعَمِ. هِيَ قَرِيبَةٌ مِنَ المَحَطَّةِ.', 'The library is next to the public park and opposite the restaurant. It is near the station.'],
      ['سَلْمَى: شُكْرًا جَزِيلًا. عُمَرُ: عَفْوًا.', 'Salma: Thank you very much. Omar: You’re welcome.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · Text A · a quiet area (website)', title: 'A quiet neighbourhood', ar: 'النَّصُّ (أ)',
    lines: [
      ['أَسْكُنُ فِي حَيٍّ هَادِئٍ.', 'A quiet neighbourhood'],
      ['بَيْتِي قَرِيبٌ مِنَ المَدْرَسَةِ وَبَعِيدٌ عَنِ المَحَطَّةِ.', 'Near the school · far from the station'],
      ['أَمَامَ بَيْتِي حَدِيقَةٌ عَامَّةٌ، وَخَلْفَ الحَدِيقَةِ مَلْعَبٌ كَبِيرٌ.', 'In front: a park · behind the park: a big pitch'],
      ['الصَّيْدَلِيَّةُ بِجَانِبِ السُّوبَرْمَارْكِتِ، وَالمَكْتَبَةُ مُقَابِلَ البَنْكِ.', 'Pharmacy next to the supermarket · library opposite the bank'],
      ['أُحِبُّ حَيِّي لِأَنَّهُ جَمِيلٌ وَآمِنٌ.', 'Opinion: beautiful and safe'],
    ],
    notes: 'TEXT A (website, complete). Find: two near / far phrases and four fixed positions.',
  },
  {
    type: 'glossed', stage: 'wedo', flex: true, eyebrow: 'We do · reading · Text B · a busy area (website) · FLEX / Stretch', title: 'Layla’s busy area', ar: 'النَّصُّ (ب)',
    lines: [
      ['تَعِيشُ لَيْلَى فِي شَقَّةٍ فِي حَيٍّ مُزْدَحِمٍ.', 'A flat in a busy neighbourhood'],
      ['تَحْتَ شَقَّتِهَا مَخْبَزٌ، وَعَلَى يَسَارِ البِنَايَةِ مَقْهًى صَغِيرٌ.', 'Under the flat: a bakery · left of the building: a small café'],
      ['المُسْتَشْفَى بَعِيدٌ عَنْ بَيْتِهَا، وَلَكِنَّ مَوْقِفَ الحَافِلَاتِ قَرِيبٌ جِدًّا.', 'Hospital: far · bus stop: very near'],
      ['عِنْدَ الزَّاوِيَةِ مَكْتَبُ البَرِيدِ،', 'At the corner: the post office'],
      ['وَمَرْكَزُ الشُّرْطَةِ بَيْنَ المَحَطَّةِ وَالسُّوقِ.', 'Police station: between the station and the market'],
    ],
    notes: 'TEXT B (website, complete) — uses the wider recognition bank. Stretch: compare with Text A (quiet vs busy, house vs flat) using وَلَكِنَّ / فِي المُقَابِلِ.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions (teacher-written)', title: 'Quiet or busy?', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 5,
    questions: [
      q('Text A: What is in front of the house?', ['a public park', 'a big pitch', 'a bank'], 'أَمَامَ بَيْتِي حَدِيقَةٌ عَامَّةٌ.'),
      q('Text A: Where is the library?', ['opposite the bank', 'next to the pharmacy', 'behind the park'], 'المَكْتَبَةُ مُقَابِلَ البَنْكِ.'),
      q('Text A: Why does the writer like the area?', ['It is beautiful and safe.', 'It is busy.', 'It is near the station.'], 'لِأَنَّهُ جَمِيلٌ وَآمِنٌ.'),
      q('Text B: What is under Layla’s flat?', ['a bakery', 'a café', 'a post office'], 'تَحْتَ شَقَّتِهَا مَخْبَزٌ.'),
      q('Text B: What is very near?', ['the bus stop', 'the hospital', 'the market'], 'مَوْقِفَ الحَافِلَاتِ قَرِيبٌ جِدًّا.'),
    ],
    side: { kind: 'info', head: 'EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Find the position word,\nthen read the place after it.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Teacher-written questions on the two website texts (the website has 12 — students answer them for homework). Core: questions 1–3 (Text A).',
    answerNotes: 'A student reads aloud the evidence phrase (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'مَاذَا يُوجَدُ فِي حَيِّكَ؟' },
      { route: 'develop', ar: 'مَا القَرِيبُ مِنْ بَيْتِكَ؟ وَمَا البَعِيدُ عَنْهُ؟' },
      { route: 'develop', ar: 'أَيْنَ المَكْتَبَةُ؟ صِفْ مَكَانَهَا.' },
      { route: 'stretch', ar: 'كَيْفَ أَذْهَبُ إِلَى المَسْجِدِ مِنْ بَيْتِكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'فِي حَيِّي ______ وَ ______ وَ ______ .' },
      { route: 'develop', ar: 'بَيْتِي قَرِيبٌ مِنَ ______ وَبَعِيدٌ عَنِ ______ .' },
      { route: 'develop', ar: 'المَكْتَبَةُ بِجَانِبِ ______ وَمُقَابِلَ ______ .' },
      { route: 'stretch', ar: 'أَوَّلًا سِرْ مُسْتَقِيمًا، ثُمَّ اِنْعَطِفْ ______ عِنْدَ ______ .' },
    ],
    modelEn: ['Excuse me, how do I get to the library?', 'Walk straight on, then turn right at the bank. The library is next to the park.'],
    notes: `WEBSITE SPEAKING STUDIO “Give a neighbourhood tour”: describe places, explain their positions and guide a listener to one destination. Website checklist (1–6): five places · near / far + two fixed expressions · three route commands · clear sequence · one opinion with a reason · clear delivery.
Real or invented neighbourhood — no one has to describe where they actually live. The prompts are teacher-made from the website studio steps.`,
  }),
  F.routesSlide(site, {
    core: { amount: '7 sentences', how: 'Eight places with near / far and next to / opposite.' },
    develop: { amount: '7–9 sentences', how: 'Add a four-step route and a reason for your opinion.' },
    stretch: { amount: '9+ sentences', how: 'Compare two areas: wa-lākinna, ayḍan, fī l-muqābil.' },
  }),
  F.framesSlide({
    core: [
      { en: 'I live in a quiet neighbourhood.', ar: 'أَسْكُنُ فِي حَيٍّ هَادِئٍ.' },
      { en: 'My house is near the school.', ar: 'بَيْتِي قَرِيبٌ مِنَ المَدْرَسَةِ.' },
      { en: 'The station is far from the house.', ar: 'المَحَطَّةُ بَعِيدَةٌ عَنِ البَيْتِ.' },
      { en: 'The mosque is next to the park.', ar: 'المَسْجِدُ بِجَانِبِ الحَدِيقَةِ.' },
      { en: 'The library is opposite the bank.', ar: 'المَكْتَبَةُ مُقَابِلَ البَنْكِ.' },
    ],
    develop: [
      { en: 'First walk straight on.', ar: 'أَوَّلًا سِرْ مُسْتَقِيمًا.' },
      { en: 'Then turn left at the bank.', ar: 'ثُمَّ اِنْعَطِفْ يَسَارًا عِنْدَ البَنْكِ.' },
      { en: 'After that cross the street.', ar: 'بَعْدَ ذَلِكَ اِعْبُرِ الشَّارِعَ.' },
      { en: 'The pharmacy is between … and …', ar: 'الصَّيْدَلِيَّةُ بَيْنَ ______ وَ ______ .' },
      { en: 'I like my area because it is safe.', ar: 'أُحِبُّ حَيِّي لِأَنَّهُ آمِنٌ.' },
    ],
    bank: ['مَدْرَسَةٌ', 'مَسْجِدٌ', 'مُسْتَشْفًى', 'صَيْدَلِيَّةٌ', 'مَكْتَبَةٌ', 'مَحَطَّةٌ', 'قَرِيبٌ مِنْ', 'بَعِيدٌ عَنْ', 'بِجَانِبِ', 'مُقَابِلَ', 'أَمَامَ', 'خَلْفَ'],
  }),
  F.modelSlide(site,
    'I live in a quiet neighbourhood. My house is near the school and far from the station. In front of my house there is a public park, and behind the park there is a big pitch. The pharmacy is next to the supermarket, and the library is opposite the bank. I love my neighbourhood because it is beautiful and safe.',
    ['places', 'near / far', 'fixed positions', 'opinion + reason'],
    'Website Text A as the model guide. Develop: add the website route model. Stretch: compare with Text B.'),
  F.selfCheckSlide([
    { route: 'core', text: 'I named at least eight places.' },
    { route: 'core', text: 'Near → min; far → ‘an.' },
    { route: 'develop', text: 'Near / far agree with the place (qarība for a feminine place).' },
    { route: 'develop', text: 'I gave a route with three commands.' },
    { route: 'stretch', text: 'I compared two areas.' },
  ]),
  F.exitTicket([
    q('Choose “far from”.', ['بَعِيدٌ عَنْ', 'بَعِيدٌ مِنْ', 'قَرِيبٌ عَنْ'], 'Far takes ‘an.'),
    q('What does بِجَانِبِ mean?', ['next to', 'behind', 'opposite'], 'bi-jānibi = next to.'),
    q('Choose the command for a girl.', ['اِنْعَطِفِي يَسَارًا.', 'اِنْعَطِفْ يَسَارًا.', 'اِنْعَطِفُوا يَسَارًا.'], 'One female listener → -ī.'),
  ], 16),
  F.prepSlide({
    ...NEXT,
    words: [['مِرْآةٌ', 'a mirror', 'pl. مَرَايَا'], ['وِسَادَةٌ', 'a pillow', 'pl. وَسَائِدُ'], ['بِطَّانِيَّةٌ', 'a blanket', 'pl. بِطَّانِيَّاتٌ'], ['رَفٌّ', 'a shelf', 'pl. رُفُوفٌ'], ['سِتَارَةٌ', 'a curtain', 'pl. سَتَائِرُ']],
    questionEn: 'What colour is your bedroom? (A real or an invented room is fine.)',
    questionAr: 'مَا لَوْنُ غُرْفَتِكَ؟',
    homework: {
      core: 'Website F3-L07: the Navigation Mission (14) and the picture game.',
      develop: 'Website Map Studio: draw a neighbourhood map with eight places and write six location sentences.',
      stretch: 'Write a 7–9-sentence neighbourhood guide with a four-step route and a comparison.',
    },
    wordsSource: 'The five words come from the website F3-L08 bedroom and bedding vault.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: near → min · far → ‘an · a girl → sīrī, in‘aṭifī.' }),
];

module.exports = { meta, slides };
