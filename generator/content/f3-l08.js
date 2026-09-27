'use strict';
/*
 * F3-L08 · Describing My Bedroom
 * Website: Pathways › Foundation › F3 › Lesson 8. The eight-question F3 bridge, the bedroom and bedding vault (16-question
 * check), the room description system (12 feminine room adjectives, object colour agreement, opinion + reason; 12-question
 * laboratory), the position laboratory (10 expressions, 14-question check), bedroom actions (10-question check), the Bedroom
 * Layout Studio, the Bedroom Designer Mission (14), Maryam’s bedroom (listening), Yūsuf’s and Salmā’s bedrooms (reading),
 * the bedroom tour, the 6–8-sentence description and the 16-question checkpoint.
 */
const F = require('./f3-common');
const game = require('../site-data/pathway-visual-games.json')['f3-l08'];
const { q, bank, banks } = F;

const meta = F.meta({
  n: 8, fileTitle: 'Describing_My_Bedroom', chip: 'My Bedroom',
  title: 'Describing My Bedroom', arabic: 'وَصْفُ غُرْفَتِي',
  focus: 'Combine the whole unit in one room: bedroom objects, feminine room adjectives, colour and size agreement, precise positions and simple bedroom actions in a clear connected description.',
  icon: 'FaBed', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F3-L09', nextTitle: 'Extended Writing: My Home and Family', nextAr: 'الكِتَابَةُ المُطَوَّلَةُ — بَيْتِي وَعَائِلَتِي' };
const AR = /[؀-ۿ]/;
const rounds = banks.l08.rounds.map((r) => F.w({ ...r, q: AR.test(r.prompt) ? r.prompt : `${r.title}: ${r.prompt}` }));
const prompts = banks.l08.speaking;
const MF = (m, f) => ({ tag: 'm · f', forms: [{ l: 'f.', ar: f }, { l: 'm.', ar: m }] });
const PL = (pl, g) => ({ tag: g, forms: [{ l: 'pl.', ar: pl }] });

const site = {
  speaking: {
    context: 'Give a bedroom tour',
    model: [
      ['A', 'صِفْ غُرْفَتَكَ، مِنْ فَضْلِكَ.', 'Describe your room, please.'],
      ['B', 'غُرْفَتِي مُرَتَّبَةٌ وَهَادِئَةٌ. الحَاسُوبُ عَلَى المَكْتَبِ، وَفَوْقَهُ رَفَّانِ لِلكُتُبِ.', 'My room is tidy and quiet. The computer is on the desk, and above it are two shelves for books.'],
    ],
  },
  writing: {
    prompt: 'Website writing task: 6–8 connected sentences about a real, ideal or invented bedroom — two room adjectives, six objects, two colours, four positions, one action and one reason.',
    checklist: ['غُرْفَتِي + feminine adjective.', 'Objects with colours that agree.', 'Four positions: عَلَى، تَحْتَ، بِجَانِبِ، مُقَابِلَ …', 'One action and an opinion with لِأَنَّ.'],
    model: 'غُرْفَتِي وَاسِعَةٌ وَمُرَتَّبَةٌ. السَّرِيرُ بِجَانِبِ النَّافِذَةِ، وَالمَكْتَبُ مُقَابِلَهُ. عَلَى المَكْتَبِ حَاسُوبٌ وَمِصْبَاحٌ. الخِزَانَةُ عَلَى يَمِينِ البَابِ، وَالسَّجَّادَةُ فِي وَسَطِ الغُرْفَةِ. فِي المَسَاءِ أَدْرُسُ عَلَى المَكْتَبِ، ثُمَّ أَرْتَاحُ. أُحِبُّ غُرْفَتِي لِأَنَّهَا هَادِئَةٌ وَمُرِيحَةٌ.',
  },
  differentiation: {
    core: 'Six accurate sentences using the planner and the banks.',
    develop: 'Add colours, four positions and a bedroom action.',
    stretch: 'Compare a real and an ideal room: wa-lākinna, ayḍan, fī l-muqābil.',
  },
  mistakes: [
    { wrong: 'غُرْفَتِي وَاسِعٌ.', right: 'غُرْفَتِي وَاسِعَةٌ.', why: 'Room is feminine: every room adjective takes -a.' },
    { wrong: 'السِّتَارَةُ أَزْرَقُ.', right: 'السِّتَارَةُ زَرْقَاءُ.', why: 'Curtain is feminine: use the feminine colour.' },
    { wrong: 'الحَاسُوبُ تَحْتَ المَكْتَبِ.', right: 'الحَاسُوبُ عَلَى المَكْتَبِ.', why: 'Check the picture: on = ‘alā, under = taḥta.' },
  ],
  listening: {
    title: 'Maryam’s bedroom',
    script: 'اِسْمِي مَرْيَمُ، وَسَأَصِفُ غُرْفَةَ نَوْمِي. غُرْفَتِي صَغِيرَةٌ، وَلَكِنَّهَا مُرَتَّبَةٌ وَمُضِيئَةٌ. فِي وَسَطِ الغُرْفَةِ سَرِيرٌ أَبْيَضُ، وَبِجَانِبِهِ طَاوِلَةٌ صَغِيرَةٌ عَلَيْهَا مِصْبَاحٌ أَزْرَقُ. المَكْتَبُ تَحْتَ النَّافِذَةِ، وَعَلَيْهِ حَاسُوبٌ وَثَلَاثَةُ كُتُبٍ. الخِزَانَةُ مُقَابِلَ السَّرِيرِ، وَالمِرْآةُ عَلَى يَسَارِهَا. أُحِبُّ غُرْفَتِي لِأَنَّهَا هَادِئَةٌ وَمُرِيحَةٌ. فِي المَسَاءِ أَدْرُسُ عَلَى المَكْتَبِ، ثُمَّ أَرْتَاحُ وَأَنَامُ فِي السَّرِيرِ.',
    questions: bank(8, 'listening', [0, 2, 5, 7, 8]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 8,
    source: 'Website sections used: the eight-question F3 bridge and the description formula, the bedroom and bedding vault and the 16-question check, the room description system (12 room adjectives, object agreement, opinion) and the 12-question laboratory, the position laboratory (10 expressions) and the 14-question check, bedroom actions and the 10-question check, the Bedroom Layout Studio, the Bedroom Designer Mission (14), Maryam’s bedroom (listening, 10), Yūsuf’s and Salmā’s bedrooms (reading, 12), the bedroom tour (4 prompts), the 6–8-sentence description and the 16-question checkpoint. Picture match: website visual game (rooms).',
    support: `• Core: 8 objects + غُرْفَتِي + 2 feminine adjectives + on / under / next to. Develop: colours that agree, four positions and one action. Stretch: compare a real and an ideal room.
• Website description formula: room first (غُرْفَتِي) → feminine description → objects and their exact positions.
• SENSITIVITY: students may describe a real, ideal or invented bedroom — some share rooms or have very little space. Never ask to see a student’s room on camera.
• Urdu bridge: کرسی = كُرْسِيٌّ, مکتب (school) / مَكْتَبٌ (desk, office), آئینہ ≈ مِرْآةٌ (same idea), صاف ≈ نَظِيفٌ, آرام = أَرْتَاحُ (same root).`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Bedroom objects, then the room description formula and ten positions.', wedo: 'Designer mission, listen to Maryam, read two bedrooms.', next: 'F3-L09' }),
  F.doNow({
    questions: [
      q('What does وِسَادَةٌ mean?', ['a pillow', 'a blanket', 'a curtain'], 'Prepared at home (F3-L07). Also مِخَدَّةٌ.'),
      q('What is the plural of رَفٌّ?', ['رُفُوفٌ', 'رَفَّاتٌ', 'أَرْفَافٌ'], 'Prepared at home (F3-L07).'),
      ...bank(8, 'retrieval', [1, 2, 4]),
    ],
    keyIdea: { text: 'غُرْفَةٌ is feminine: EVERY adjective that describes the room ends in -a.', ar: 'غُرْفَتِي نَظِيفَ{e|ةٌ} وَمُرَتَّبَ{e|ةٌ}' },
    retrieves: 'Questions 1–2 test two of the five bedroom words prepared at home at the end of F3-L07. Questions 3–5 are the website “eight-question F3 bridge” (colour agreement, next to the window, clean and tidy).',
  }),
  F.objectivesSlide([
    'Name the complete core bedroom and bedding bank.',
    'Describe a room accurately with feminine adjectives.',
    'Place furniture with ten useful position expressions.',
    'Understand and produce a connected bedroom description.',
  ], {
    core: ['I can name eight bedroom objects.', 'I can say two things about my room.'],
    develop: ['I can use four positions.', 'I can make colours agree with objects.'],
    stretch: ['I can add a bedroom action.', 'I can compare a real and an ideal room.'],
  }, 2, 'Website “By the end” aims (left) and the website writing Core / Develop / Stretch routes (right).'),
  F.keywordsSlide({
    text: 'Objects and bedding, room adjectives and positions. Core: eight objects, four adjectives, four positions.',
    groups: [
      { head: 'GROUP 1', name: 'Objects and bedding · 16' },
      { head: 'GROUP 2', name: 'Room adjectives · 12 (f.)' },
      { head: 'GROUP 3', name: 'Positions · 10 + actions' },
    ],
    bridge: [
      { ar: 'كُرْسِيٌّ', urdu: 'کرسی', tr: 'kursiyy', en: 'chair' },
      { ar: 'مَكْتَبٌ', urdu: 'مکتب', tr: 'maktab', en: 'desk (Urdu: school)' },
      { ar: 'أَرْتَاحُ', urdu: 'آرام', tr: 'artāḥu', en: 'I rest (root r-w-ḥ)' },
      { ar: 'نَظِيفٌ', urdu: 'نظافت', tr: 'naẓīf', en: 'clean' },
      { ar: 'جَمِيلٌ', urdu: 'جمیل', tr: 'jamīl', en: 'beautiful' },
    ],
    notes: 'URDU BRIDGE: کرسی and مکتب are the same words (careful: Urdu مکتب = a school; Arabic مَكْتَبٌ = a desk or office). نظافت (cleanliness) shares the root of نَظِيفٌ.',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · bedroom and bedding (website vault)', title: 'Bed, pillow, mirror …', ar: 'غُرْفَةُ النَّوْمِ وَالفِرَاشُ',
    items: [
      { n: 1, ar: 'سَرِيرٌ', en: 'bed', tr: 'sa-rīr', core: true, ...PL('أَسِرَّةٌ', 'm.') },
      { n: 2, ar: 'خِزَانَةٌ', en: 'wardrobe', tr: 'khi-zā-na', core: true, ...PL('خَزَائِنُ', 'f.') },
      { n: 3, ar: 'مِرْآةٌ', en: 'mirror', tr: 'mir-’ā', core: true, ...PL('مَرَايَا', 'f.') },
      { n: 4, ar: 'مِخَدَّةٌ / وِسَادَةٌ', en: 'pillow', tr: 'mi-khad-da / wi-sā-da', core: true, ...PL('مِخَدَّاتٌ / وَسَائِدُ', 'f.') },
      { n: 5, ar: 'بِطَّانِيَّةٌ', en: 'blanket', tr: 'biṭ-ṭā-niy-ya', ...PL('بِطَّانِيَّاتٌ', 'f.') },
      { n: 6, ar: 'لِحَافٌ', en: 'duvet / quilt', tr: 'li-ḥāf', ...PL('أَلْحِفَةٌ', 'm.') },
    ],
    notes: 'BEDROOM AND BEDDING (website vault). Revision from F3-L04: مَكْتَبٌ، كُرْسِيٌّ، مِصْبَاحٌ، نَافِذَةٌ، بَابٌ، سَجَّادَةٌ، سِتَارَةٌ / سَتَائِرُ، رَفٌّ / رُفُوفٌ، حَاسُوبٌ، سَاعَةٌ (clock). Website “useful distinctions”: بِطَّانِيَّةٌ (blanket) · لِحَافٌ (duvet or quilt) · غِطَاءُ سَرِيرٍ (bedspread).',
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 2 · room adjectives (website)', title: 'Tidy, clean, spacious …', ar: 'صِفَاتُ الغُرْفَةِ',
    items: [
      { n: 7, ar: 'مُرَتَّبَةٌ', en: 'tidy', tr: 'mu-rat-ta-ba', core: true, ...MF('مُرَتَّبٌ', 'مُرَتَّبَةٌ') },
      { n: 8, ar: 'نَظِيفَةٌ', en: 'clean', tr: 'na-ẓī-fa', core: true, ...MF('نَظِيفٌ', 'نَظِيفَةٌ') },
      { n: 9, ar: 'وَاسِعَةٌ', en: 'spacious', tr: 'wā-si-‘a', core: true, ...MF('وَاسِعٌ', 'وَاسِعَةٌ') },
      { n: 10, ar: 'ضَيِّقَةٌ', en: 'narrow / cramped', tr: 'ḍay-yi-qa', ...MF('ضَيِّقٌ', 'ضَيِّقَةٌ') },
      { n: 11, ar: 'مُرِيحَةٌ', en: 'comfortable', tr: 'mu-rī-ḥa', core: true, ...MF('مُرِيحٌ', 'مُرِيحَةٌ') },
      { n: 12, ar: 'مُضِيئَةٌ', en: 'bright / well-lit', tr: 'mu-ḍī-’a', ...MF('مُضِيءٌ', 'مُضِيئَةٌ') },
    ],
    notes: 'ROOM ADJECTIVES (website, 6 of 12 — shown feminine first because غُرْفَةٌ is feminine). Also: هَادِئَةٌ (quiet), مُظْلِمَةٌ (dark), جَمِيلَةٌ (beautiful), غَيْرُ مُرَتَّبَةٍ / فَوْضَوِيَّةٌ (untidy / messy), حَدِيثَةٌ (modern), قَدِيمَةٌ (old).',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · the position laboratory (website)', title: 'Where is it in the room?', ar: 'مُخْتَبَرُ المَوْقِعِ',
    cols: [{ label: 'Position', w: 2.6, size: 24 }, { label: 'Example', w: 5.9, size: 22 }, { label: 'Meaning', w: 3.83 }],
    rows: [
      { core: true, cells: [{ ar: 'عَلَى · تَحْتَ' }, { ar: 'الحَاسُوبُ عَلَى المَكْتَبِ · الحَقِيبَةُ تَحْتَ السَّرِيرِ' }, 'on · under'] },
      { core: true, cells: [{ ar: 'بِجَانِبِ · مُقَابِلَ' }, { ar: 'المِصْبَاحُ بِجَانِبِ السَّرِيرِ · الخِزَانَةُ مُقَابِلَ البَابِ' }, 'next to · opposite'] },
      { cells: [{ ar: 'فَوْقَ' }, { ar: 'الرَّفُّ فَوْقَ المَكْتَبِ' }, 'above'] },
      { cells: [{ ar: 'أَمَامَ · خَلْفَ' }, { ar: 'الكُرْسِيُّ أَمَامَ النَّافِذَةِ · السَّلَّةُ خَلْفَ البَابِ' }, 'in front of · behind'] },
      { cells: [{ ar: 'بَيْنَ … وَ …' }, { ar: 'السَّجَّادَةُ بَيْنَ السَّرِيرِ وَالخِزَانَةِ' }, 'between … and …'] },
      { cells: [{ ar: 'عَلَى يَمِينِ · عَلَى يَسَارِ' }, { ar: 'الخِزَانَةُ عَلَى يَمِينِ البَابِ' }, 'to the right / left of'] },
    ],
    foot: 'Website: use each expression as a reliable chunk, then add the definite noun that follows it. In the middle = fī wasaṭi l-ghurfa.',
    notes: `GRAMMAR PART 1 — website section 4 “Position laboratory”: ten expressions (عَلَى، تَحْتَ، فَوْقَ، أَمَامَ، خَلْفَ، بِجَانِبِ، بَيْنَ، مُقَابِلَ، عَلَى يَمِينِ، عَلَى يَسَارِ).
Website model layout: السَّرِيرُ بِجَانِبِ النَّافِذَةِ. المَكْتَبُ مُقَابِلَ السَّرِيرِ، وَالحَاسُوبُ عَلَى المَكْتَبِ. الخِزَانَةُ عَلَى يَمِينِ البَابِ، وَالسَّجَّادَةُ بَيْنَ السَّرِيرِ وَالمَكْتَبِ.
Links to F3-L07: the same positions now work inside a room. Stretch: مُقَابِلَهُ (opposite it), عَلَيْهِ (on it), بِجَانِبِهِ (next to it).`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · the description formula (website)', title: 'Room → description → objects', ar: 'نِظَامُ وَصْفِ الغُرْفَةِ',
    cards: [
      { chip: 'ROOM', color: 'B83280', head: 'غُرْفَتِي …', big: 'غُرْفَتِي نَظِيفَةٌ وَمُرَتَّبَةٌ.', en: 'My room is clean and tidy.', clue: 'Room = f. → -a.' },
      { chip: 'OBJECTS', color: '1D5FBF', head: 'السَّرِيرُ … السِّتَارَةُ …', big: 'السَّرِيرُ أَبْيَضُ، وَالسِّتَارَةُ زَرْقَاءُ.', en: 'The bed is white and the curtain is blue.', clue: 'Each object sets its colour.' },
      { chip: 'OPINION', color: '1E6B52', head: 'لِأَنَّهَا …', big: 'أُحِبُّ غُرْفَتِي لِأَنَّهَا هَادِئَةٌ.', en: 'I like my room because it is quiet.', clue: 'لِأَنَّهَا — she = the room.' },
    ],
    error: { text: 'Website common mistake: the noun is feminine.', pairs: [['غُرْفَتِي وَاسِعَةٌ.', 'غُرْفَتِي وَاسِعٌ.']] },
    notes: `GRAMMAR PART 2 — website section 3 “Build the room description system”: غُرْفَةٌ is feminine, so every adjective describing the room must use its feminine form; objects keep their own gender (bed m., curtain f.).
Bedroom actions (website section 5, wider bank): أَنَامُ فِي السَّرِيرِ، أَسْتَيْقِظُ، أَنْهَضُ مِنَ السَّرِيرِ، أَسْتَلْقِي عَلَى السَّرِيرِ، أَرْتَاحُ فِي غُرْفَتِي، أَشْعُرُ بِالنُّعَاسِ، أَنَا مُتْعَبٌ / مُتْعَبَةٌ، أَدْرُسُ عَلَى المَكْتَبِ.
Website link sentence: فِي المَسَاءِ أَدْرُسُ عَلَى المَكْتَبِ، ثُمَّ أَرْتَاحُ وَأَنَامُ فِي السَّرِيرِ.`,
  },
  F.quickCheck([...bank(8, 'descriptionQuiz', [3, 4]), ...bank(8, 'positionQuiz', [1, 7])], 'website description laboratory questions 4–5 and position check questions 2 and 8.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me describe a bedroom', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Room', ar: 'غُرْفَتِي وَاسِعَ{e|ةٌ} وَمُرَتَّبَ{e|ةٌ}.', think: 'Room f. → -a.' },
      { head: 'Objects + colour', ar: 'فِيهَا سَرِيرٌ {w|بُنِّيٌّ} وَخِزَانَةٌ {e|بَيْضَاءُ}.', think: 'Each object sets its colour.' },
      { head: 'Positions', ar: 'السَّرِيرُ بِجَانِبِ النَّافِذَةِ، وَالمَكْتَبُ مُقَابِلَهُ.', think: 'Chunk + the noun.' },
      { head: 'Action + opinion', ar: 'فِي المَسَاءِ أَدْرُسُ هُنَا. أُحِبُّهَا لِأَنَّهَا مُرِيحَ{e|ةٌ}.', think: 'Reason with li’annahā.' },
    ],
    legend: ['w', 'e'], legendLabels: { w: 'MASCULINE', e: 'FEMININE' },
    model: 'غُرْفَتِي وَاسِعَ{e|ةٌ} وَمُرَتَّبَ{e|ةٌ}. فِيهَا سَرِيرٌ {w|بُنِّيٌّ} وَخِزَانَةٌ {e|بَيْضَاءُ}. السَّرِيرُ بِجَانِبِ النَّافِذَةِ، وَالمَكْتَبُ مُقَابِلَهُ. عَلَى المَكْتَبِ حَاسُوبٌ وَمِصْبَاحٌ. فِي المَسَاءِ أَدْرُسُ عَلَى المَكْتَبِ. أُحِبُّ غُرْفَتِي لِأَنَّهَا مُرِيحَ{e|ةٌ}.',
    modelEn: 'My room is spacious and tidy. In it there is a brown bed and a white wardrobe. The bed is next to the window and the desk is opposite it. On the desk there is a computer and a lamp. In the evening I study at the desk. I like my room because it is comfortable.',
    notes: 'I DO (3 min) — website model description + Text A. Think aloud at every adjective: “the room (f.) or an object? — which gender is the object?”',
  },
  F.gameSlide({ ...game, title: 'Visual game — Rooms', items: [game.items[0], game.items[4], game.items[5]] }, {
    title: 'Where do I live? Match the picture',
    en: ['This is the bedroom.', 'The house has a garden.', 'I live in a flat.'],
    icons: [[['fa6', 'FaBed', '1D5FBF']], [['fa6', 'FaTree', '1E6B52'], ['fa6', 'FaHouse', 'C77700']], [['fa6', 'FaBuilding', '5A6472']]],
    labels: ['a bed', 'a tree and a house', 'a block of flats'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6, rooms — retrieval from F3-L03). Follow-up (Develop): describe the bedroom card — هٰذِهِ غُرْفَةُ النَّوْمِ. هِيَ وَاسِعَةٌ وَمُرَتَّبَةٌ.',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website “Bedroom Designer Mission”', title: 'Design the bedroom', ar: 'مُهِمَّةُ مُصَمِّمِ الغُرْفَةِ',
    seed: 14,
    questions: [rounds[2], rounds[3], rounds[7], rounds[8], rounds[12]],
    side: { kind: 'core', label: 'CORE', text: 'room (f.) → -a\nobject sets its colour\non ‘alā · under taḥta' },
    answerSlide: { min: 0, eyebrow: 'We do · Mission answers', title: 'Mission: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 14 design rounds (room quality, colour agreement, opposite, study zone, repair). The other 9 are homework.',
    answerNotes: 'After each answer ask: which word does the adjective describe — the room or an object?',
  },
  F.repairSlide(site, ['Room: which ending?', 'Curtain: masculine or feminine colour?', 'On or under?']),
  F.listening(site, {
    coreTip: 'Listen twice.\nNote: room size · 3 objects with colours · 2 positions · 1 action.',
    routes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5.',
    gloss: [
      ['اِسْمِي مَرْيَمُ، وَسَأَصِفُ غُرْفَةَ نَوْمِي. غُرْفَتِي صَغِيرَةٌ، وَلَكِنَّهَا مُرَتَّبَةٌ وَمُضِيئَةٌ.', 'My name is Maryam and I will describe my bedroom. My room is small, but tidy and bright.'],
      ['فِي وَسَطِ الغُرْفَةِ سَرِيرٌ أَبْيَضُ، وَبِجَانِبِهِ طَاوِلَةٌ صَغِيرَةٌ عَلَيْهَا مِصْبَاحٌ أَزْرَقُ.', 'In the middle of the room is a white bed, and next to it a small table with a blue lamp on it.'],
      ['المَكْتَبُ تَحْتَ النَّافِذَةِ، وَعَلَيْهِ حَاسُوبٌ وَثَلَاثَةُ كُتُبٍ. الخِزَانَةُ مُقَابِلَ السَّرِيرِ، وَالمِرْآةُ عَلَى يَسَارِهَا.', 'The desk is under the window, with a computer and three books on it. The wardrobe is opposite the bed and the mirror is to its left.'],
      ['أُحِبُّ غُرْفَتِي لِأَنَّهَا هَادِئَةٌ وَمُرِيحَةٌ.', 'I love my room because it is quiet and comfortable.'],
      ['فِي المَسَاءِ أَدْرُسُ عَلَى المَكْتَبِ، ثُمَّ أَرْتَاحُ وَأَنَامُ فِي السَّرِيرِ.', 'In the evening I study at the desk, then I rest and sleep in the bed.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · Text A (website)', title: 'Yūsuf’s bedroom', ar: 'النَّصُّ (أ)',
    lines: [
      ['غُرْفَةُ نَوْمِي وَاسِعَةٌ وَنَظِيفَةٌ.', 'Spacious and clean'],
      ['فِيهَا سَرِيرٌ بُنِّيٌّ كَبِيرٌ بِجَانِبِ النَّافِذَةِ، وَخِزَانَةٌ بَيْضَاءُ مُقَابِلَ البَابِ.', 'Big brown bed next to the window · white wardrobe opposite the door'],
      ['المَكْتَبُ عَلَى يَمِينِ السَّرِيرِ، وَفَوْقَهُ رَفَّانِ لِلكُتُبِ.', 'Desk right of the bed · two book shelves above it'],
      ['تَحْتَ المَكْتَبِ كُرْسِيٌّ أَسْوَدُ، وَعَلَى الأَرْضِيَّةِ سَجَّادَةٌ زَرْقَاءُ فَاتِحَةٌ.', 'Black chair under the desk · light-blue rug on the floor'],
      ['أُحِبُّ غُرْفَتِي لِأَنَّهَا مُرِيحَةٌ وَهَادِئَةٌ.', 'Opinion: comfortable and quiet'],
    ],
    notes: 'TEXT A (website, complete). Colour hunt: بُنِّيٌّ (bed, m.), بَيْضَاءُ (wardrobe, f.), أَسْوَدُ (chair, m.), زَرْقَاءُ فَاتِحَةٌ (rug, f. — light blue). Stretch: رَفَّانِ = two shelves (dual).',
  },
  {
    type: 'glossed', stage: 'wedo', flex: true, eyebrow: 'We do · reading · Text B (website) · FLEX / Stretch', title: 'Salmā’s bedroom', ar: 'النَّصُّ (ب)',
    lines: [
      ['غُرْفَتِي ضَيِّقَةٌ، وَلَكِنَّهَا جَمِيلَةٌ وَمُضِيئَةٌ.', 'Narrow — but beautiful and bright'],
      ['السَّرِيرُ عَلَى يَسَارِ النَّافِذَةِ، وَعَلَيْهِ لِحَافٌ وَرْدِيٌّ وَمِخَدَّتَانِ بَيْضَاوَانِ.', 'Bed left of the window · pink duvet and two white pillows'],
      ['بِجَانِبِ السَّرِيرِ مِصْبَاحٌ صَغِيرٌ. خَلْفَ البَابِ سَلَّةٌ، وَالمِرْآةُ فَوْقَ خِزَانَةٍ قَصِيرَةٍ.', 'Small lamp by the bed · basket behind the door · mirror above a short wardrobe'],
      ['غُرْفَتِي أَحْيَانًا غَيْرُ مُرَتَّبَةٍ، لِأَنَّ فِيهَا كُتُبًا وَمَلَابِسَ كَثِيرَةً.', 'Sometimes untidy: lots of books and clothes'],
      ['فِي اللَّيْلِ أَقْرَأُ، ثُمَّ أَنَامُ.', 'At night: reads, then sleeps'],
    ],
    notes: 'TEXT B (website, complete). Contrast with Text A: spacious vs narrow; Salmā is honest that her room is sometimes untidy — a good model for real, not perfect, descriptions. Stretch: مِخَدَّتَانِ بَيْضَاوَانِ (two white pillows — dual).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions (website)', title: 'Yūsuf or Salmā?', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 8,
    questions: bank(8, 'reading', [1, 3, 4, 7, 9]),
    side: { kind: 'info', head: 'EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Find the object,\nthen the position or colour next to it.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading questions 2, 4, 5, 8 and 10 (8 and 10 are Text B — Core may skip them). The other 7 are homework.',
    answerNotes: 'A student reads aloud the evidence phrase (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'كَيْفَ غُرْفَتُكَ؟' },
      { route: 'develop', ar: 'مَاذَا يُوجَدُ فِي غُرْفَتِكَ؟ مَا لَوْنُهُ؟' },
      { route: 'develop', ar: 'أَيْنَ السَّرِيرُ؟ وَأَيْنَ المَكْتَبُ؟' },
      { route: 'stretch', ar: 'صِفْ غُرْفَتَكَ الحَالِيَّةَ وَغُرْفَتَكَ المِثَالِيَّةَ.' },
    ],
    stems: [
      { route: 'core', ar: 'غُرْفَتِي ______ ـةٌ وَ ______ ـةٌ.' },
      { route: 'develop', ar: 'فِيهَا سَرِيرٌ ______ وَخِزَانَةٌ ______ .' },
      { route: 'develop', ar: 'السَّرِيرُ ______ النَّافِذَةِ، وَالمَكْتَبُ ______ البَابِ.' },
      { route: 'stretch', ar: 'غُرْفَتِي … ، أَمَّا غُرْفَتِي المِثَالِيَّةُ فَهِيَ … .' },
    ],
    modelEn: ['Describe your room, please.', 'My room is tidy and quiet. The computer is on the desk, and above it are two shelves for books.'],
    notes: `WEBSITE SPEAKING STUDIO “Give a bedroom tour” — a real, ideal or fictional room. Prompts (website):
${prompts.map((r) => `• ${r.title}: ${r.detail}`).join('\n')}
Website checklist (1–6): two feminine room adjectives · six objects · colours and size for two objects · four positions · an opinion with لِأَنَّ · clear delivery.
The prompts are teacher-made from the website studio steps.`,
  }),
  F.routesSlide(site, {
    core: { amount: '6 sentences', how: 'Room + two adjectives, objects with positions, an opinion.' },
    develop: { amount: '6–8 sentences', how: 'Add colours, four positions and a bedroom action.' },
    stretch: { amount: '8+ sentences', how: 'Compare a real and an ideal room: wa-lākinna, ammā … fa-.' },
  }),
  F.framesSlide({
    core: [
      { en: 'My room is clean and tidy.', ar: 'غُرْفَتِي نَظِيفَةٌ وَمُرَتَّبَةٌ.' },
      { en: 'In it there is a bed and a desk.', ar: 'فِيهَا سَرِيرٌ وَمَكْتَبٌ.' },
      { en: 'The computer is on the desk.', ar: 'الحَاسُوبُ عَلَى المَكْتَبِ.' },
      { en: 'The lamp is next to the bed.', ar: 'المِصْبَاحُ بِجَانِبِ السَّرِيرِ.' },
      { en: 'I like my room because it is quiet.', ar: 'أُحِبُّ غُرْفَتِي لِأَنَّهَا هَادِئَةٌ.' },
    ],
    develop: [
      { en: 'The bed is white and the curtain is blue.', ar: 'السَّرِيرُ أَبْيَضُ، وَالسِّتَارَةُ زَرْقَاءُ.' },
      { en: 'The wardrobe is opposite the door.', ar: 'الخِزَانَةُ مُقَابِلَ البَابِ.' },
      { en: 'Above the desk there are shelves.', ar: 'فَوْقَ المَكْتَبِ رُفُوفٌ.' },
      { en: 'The rug is in the middle of the room.', ar: 'السَّجَّادَةُ فِي وَسَطِ الغُرْفَةِ.' },
      { en: 'In the evening I study at the desk.', ar: 'فِي المَسَاءِ أَدْرُسُ عَلَى المَكْتَبِ.' },
    ],
    bank: ['سَرِيرٌ', 'خِزَانَةٌ', 'مَكْتَبٌ', 'مِرْآةٌ', 'مِخَدَّةٌ', 'مُرَتَّبَةٌ', 'نَظِيفَةٌ', 'وَاسِعَةٌ', 'عَلَى', 'تَحْتَ', 'بِجَانِبِ', 'مُقَابِلَ'],
  }),
  F.modelSlide(site,
    'My room is spacious and tidy. The bed is next to the window and the desk is opposite it. On the desk there is a computer and a lamp. The wardrobe is to the right of the door and the rug is in the middle of the room. In the evening I study at the desk, then I rest. I like my room because it is quiet and comfortable.',
    ['room adjectives (f.)', 'positions', 'bedroom action', 'opinion + reason'],
    'Website Layout Studio model description + the action link sentence. Stretch: add the “real and ideal” comparison (website speaking prompt 4).'),
  F.selfCheckSlide([
    { route: 'core', text: 'My room adjectives end in -a.' },
    { route: 'core', text: 'I named six objects with positions.' },
    { route: 'develop', text: 'Each colour agrees with its object.' },
    { route: 'develop', text: 'I used four different positions and one action.' },
    { route: 'stretch', text: 'I compared a real and an ideal room.' },
  ]),
  F.exitTicket(bank(8, 'finalQuiz', [3, 5, 6]), 16),
  F.prepSlide({
    ...NEXT,
    words: [['فِكْرَةٌ', 'an idea', 'pl. أَفْكَارٌ'], ['خُطَّةٌ', 'a plan', 'pl. خُطَطٌ'], ['مُسَوَّدَةٌ', 'a draft', 'pl. مُسَوَّدَاتٌ'], ['فِقْرَةٌ', 'a paragraph', 'pl. فِقْرَاتٌ'], ['رَابِطٌ', 'a connector (link word)', 'pl. رَوَابِطُ']],
    questionEn: 'Write three ideas for a text about your home and family (in English or Arabic).',
    questionAr: 'مَا أَفْكَارُكَ؟',
    homework: {
      core: 'Website F3-L08: the Bedroom Designer Mission (14) and the picture game.',
      develop: 'Website Layout Studio: draw and label a bedroom and write six location sentences.',
      stretch: 'Write 6–8 sentences comparing your real and your ideal bedroom.',
    },
    wordsSource: 'The five words come from the website F3-L09 writing-process toolkit.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: room (f.) → -a · each object sets its colour · on ‘alā, under taḥta.' }),
];

module.exports = { meta, slides };
