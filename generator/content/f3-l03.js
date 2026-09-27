'use strict';
/*
 * F3-L03 · My Home — Rooms and Parts of the House
 * Website: Pathways › Foundation › F3 › Lesson 3. House types and parts (16), the room bank (8), room-name iḍāfa
 * (غُرْفَةُ النَّوْمِ), the three home frames فِي بَيْتِي / عِنْدِي / هُنَاكَ, room counting (غُرْفَتَانِ، ثَلَاثُ غُرَفٍ),
 * House Tour Mission (14), Salma’s listening, Omar’s flat and Huda’s house (reading), the house-tour speaking studio,
 * the 6–8-sentence home description and the 16-question checkpoint. Also used as the engine of Topic B lesson 4 (TB-L04).
 */
const F = require('./f3-common');
const game = require('../site-data/pathway-visual-games.json')['f3-l03'];
const { q, bank, banks } = F;

const meta = F.meta({
  n: 3, fileTitle: 'My_Home_Rooms_and_Parts_of_the_House', chip: 'My Home',
  title: 'My Home — Rooms and Parts of the House', arabic: 'بَيْتِي — الغُرَفُ وَأَجْزَاءُ المَنْزِلِ',
  focus: 'Tour a complete Arabic home: name every essential room and house part, build room-name phrases (غُرْفَةُ النَّوْمِ), and describe a home with فِي بَيْتِي، عِنْدِي، هُنَاكَ.',
  icon: 'FaHouse', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F3-L04', nextTitle: 'Furniture and Household Items', nextAr: 'الأَثَاثُ وَالأَغْرَاضُ المَنْزِلِيَّةُ' };
const rounds = banks.l03.rounds.map((r) => F.w({ ...r, q: `${r.prompt} (${r.detail})` }));
const prompts = banks.l03.prompts;
const PL = (pl) => [{ l: 'pl.', ar: pl }];

const site = {
  speaking: {
    context: 'Give a connected house tour',
    model: [
      ['A', 'مَاذَا فِي بَيْتِكَ؟', 'What is in your house?'],
      ['B', 'أَسْكُنُ فِي بَيْتٍ كَبِيرٍ مَعَ عَائِلَتِي. فِي بَيْتِي طَابِقَانِ وَسِتُّ غُرَفٍ.', 'I live in a big house with my family. In my house there are two floors and six rooms.'],
    ],
  },
  writing: {
    prompt: 'Website writing task: 6–8 connected sentences describing your own home, the fictional Al-Nour home or a dream home — home type and size, floors, main rooms, other parts, favourite room and reason.',
    checklist: ['Room names as iḍāfa (غُرْفَةُ النَّوْمِ).', 'فِي بَيْتِي / عِنْدِي / هُنَاكَ.', 'Adjectives agree (بَيْتٌ كَبِيرٌ · غُرْفَةٌ كَبِيرَةٌ).', 'A favourite room with لِأَنَّ.'],
    model: prompts[0].model,
  },
  differentiation: {
    core: 'Name five rooms and use fī baytī (in my house) in five sentences.',
    develop: 'Add floors, six or more rooms and accurate adjectives (50–70 words).',
    stretch: 'Compare two rooms and justify a favourite using wa-lākin (but) and li-anna (because).',
  },
  mistakes: [
    { wrong: 'الغُرْفَةُ النَّوْمِ', right: 'غُرْفَةُ النَّوْمِ', why: 'In a room name the first noun has no al- (website “Repair these”).' },
    { wrong: 'هُنَاكَ ثَلَاثَةُ غُرَفٍ.', right: 'هُنَاكَ ثَلَاثُ غُرَفٍ.', why: 'Ghurfa (room) is feminine, so 3–10 take the opposite (masculine) form.' },
    { wrong: 'غُرْفَتِي كَبِيرٌ.', right: 'غُرْفَتِي كَبِيرَةٌ.', why: 'Ghurfa (room) is feminine: the adjective ends in -a.' },
  ],
  listening: {
    title: 'Salma’s two-floor home',
    script: 'اِسْمِي سَلْمَى. أَسْكُنُ مَعَ عَائِلَتِي فِي بَيْتٍ كَبِيرٍ وَجَدِيدٍ. بَيْتُنَا فِيهِ طَابِقَانِ وَسِتُّ غُرَفٍ وَحَمَّامَانِ. فِي الطَّابِقِ الأَرْضِيِّ مَدْخَلٌ وَغُرْفَةُ جُلُوسٍ وَمَطْبَخٌ وَغُرْفَةُ طَعَامٍ وَحَمَّامٌ. فِي الطَّابِقِ الأَوَّلِ ثَلَاثُ غُرَفِ نَوْمٍ وَحَمَّامٌ آخَرُ. عِنْدَنَا حَدِيقَةٌ صَغِيرَةٌ وَمَرْآبٌ. غُرْفَتِي فِي الطَّابِقِ الأَوَّلِ، وَفِيهَا نَافِذَةٌ كَبِيرَةٌ. أُحِبُّ بَيْتِي لِأَنَّهُ مُرِيحٌ وَهَادِئٌ.',
    questions: bank(3, 'listeningQuiz', [0, 1, 5, 6, 9]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 3,
    source: 'Website sections used: the eight-question F3 bridge, types and parts of a home (16 words + three floors) and its 16-question check, the complete room bank (8) and its 12-question check, the room-name iḍāfa laboratory (10), the house plan, the three home frames with room counting and the 12-question grammar check, the House Tour Mission (14), Salma’s listening (10 questions), Omar’s flat and Huda’s house (12 questions), the house-tour speaking studio (4 prompts), the 6–8-sentence writing task and the 16-question checkpoint. Picture match: website visual game “My Home — Rooms and Parts of the House”.',
    support: `• From people (F3-L01–L02) to places. Core: 5 rooms + فِي بَيْتِي … and عِنْدِي …. Develop: floors, room counting (غُرْفَتَانِ، ثَلَاثُ غُرَفٍ) and agreement (بَيْتٌ كَبِيرٌ / غُرْفَةٌ كَبِيرَةٌ). Stretch: compare two rooms with وَلَكِنْ and لِأَنَّ.
• Privacy (website): students may describe their own home, a fictional home or the model house — no addresses or identifying details.
• Two big patterns only: room names are two nouns (غُرْفَةُ + النَّوْمِ), and the adjective follows the gender of the room (غُرْفَةٌ is feminine, بَيْتٌ is masculine).
• Urdu bridge: مکان (not Arabic for house!), کمرہ (Persian), باورچی خانہ (not Arabic), حمام، باغ / حدیقہ، دروازہ (Persian) / بَابٌ.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'House parts and rooms, then “the room of …” and in my house / I have.', wedo: 'House Tour Mission, listen to Salma, read two homes.', next: 'F3-L04' }),
  F.doNow({
    questions: [
      q('What does شَقَّةٌ mean?', ['a flat', 'a room', 'a garden'], 'Prepared at home (F3-L02).'),
      q('What does غُرْفَةٌ mean?', ['a room', 'a kitchen', 'a house'], 'Prepared at home (F3-L02).'),
      ...bank(3, 'retrievalQuiz', [0, 1, 3]),
    ],
    keyIdea: { text: 'A room is feminine (ghurfa), a house is masculine (bayt): the adjective follows. And “my” is -ī: baytī, ghurfatī.', ar: 'بَيْتِ{e|ي} كَبِيرٌ · غُرْفَتِ{e|ي} كَبِيرَ{e|ةٌ}' },
    retrieves: 'Questions 1–2 test two of the five home words prepared at home at the end of F3-L02. Questions 3–5 are the website “F3 bridge” (my house, her room, room + adjective).',
  }),
  F.objectivesSlide([
    'Name the full lesson bank of rooms and house parts.',
    'Understand room-name iḍāfa phrases.',
    'Use فِي بَيْتِي، عِنْدِي، هُنَاكَ and room-counting patterns.',
    'Describe a real, fictional or dream home in connected Arabic.',
  ], {
    core: ['I can name five rooms.', 'I can say what is in my house (fī baytī …).'],
    develop: ['I can count rooms and floors.', 'I can make adjectives agree with house / room.'],
    stretch: ['I can compare two rooms.', 'I can justify my favourite room with because.'],
  }, 2, 'Website “By the end” aims (left) and the website speaking Core / Develop / Stretch routes (right).'),
  F.keywordsSlide({
    text: 'House parts, rooms and floors — all from the website. Core: the six rooms, house, flat and garden.',
    groups: [
      { head: 'GROUP 1', name: 'Types and parts of a home · 16' },
      { head: 'GROUP 2', name: 'Rooms · 8' },
      { head: 'GROUP 3', name: 'Floors · 3' },
    ],
    bridge: [
      { ar: 'حَمَّامٌ', urdu: 'حمام', tr: 'ḥammām', en: 'bathroom (Urdu: bath-house)' },
      { ar: 'بَابٌ', urdu: 'باب', tr: 'bāb', en: 'door (Urdu: chapter / gate)' },
      { ar: 'مَنْزِلٌ', urdu: 'منزل', tr: 'manzil', en: 'home (Urdu: destination, storey)' },
      { ar: 'حَدِيقَةٌ', urdu: 'حدیقہ', tr: 'ḥadīqa', en: 'garden (Urdu: باغ)' },
      { ar: 'مَكَانٌ', urdu: 'مکان', tr: 'makān', en: 'Arabic: place · Urdu: house!' },
    ],
    notes: 'URDU BRIDGE: حمام، باب and منزل are Arabic words already in Urdu (منزل in Urdu is also a storey — useful for الطَّابِقُ!). CAREFUL: Urdu مکان means a house, but Arabic مَكَانٌ just means a place — the Arabic for house is بَيْتٌ. کمرہ and باورچی خانہ are Persian; Arabic has غُرْفَةٌ and مَطْبَخٌ.',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · types and parts of a home (website)', title: 'Home, flat, door, window …', ar: 'أَنْوَاعُ المَسَاكِنِ وَأَجْزَاؤُهَا',
    items: [
      { n: 1, ar: 'بَيْتٌ', en: 'house / home', tr: 'bayt', tag: 'm. · my', core: true, forms: [{ l: 'pl.', ar: 'بُيُوتٌ' }, { l: 'my', ar: 'بَيْتِي' }] },
      { n: 2, ar: 'شَقَّةٌ', en: 'flat / apartment', tr: 'shaq-qa', tag: 'f. · my', core: true, forms: [{ l: 'pl.', ar: 'شُقَقٌ' }, { l: 'my', ar: 'شَقَّتِي' }] },
      { n: 3, ar: 'بَابٌ', en: 'door', tr: 'bāb', tag: 'm.', core: true, forms: PL('أَبْوَابٌ') },
      { n: 4, ar: 'نَافِذَةٌ / شَبَّاكٌ', en: 'window', tr: 'nā-fi-dha / shub-bāk', tag: 'f. / m.', core: true, forms: PL('نَوَافِذُ / شَبَابِيكُ') },
      { n: 5, ar: 'حَدِيقَةٌ', en: 'garden', tr: 'ḥa-dī-qa', tag: 'f.', core: true, forms: PL('حَدَائِقُ') },
      { n: 6, ar: 'مَرْآبٌ', en: 'garage', tr: 'mar-ʾāb', tag: 'm.', forms: PL('مَرَائِبُ') },
    ],
    notes: `HOUSE PARTS 1 (website “Types and parts of a home”). Every card shows the plural or “my”: ة becomes ت before an ending (شَقَّةٌ → شَقَّتِي — F3-L01 possessives).
Hear → say → see → use: “fī baytī bābun kabīrun.”`,
  },
  {
    type: 'vocab', stage: 'teach', flex: true, eyebrow: 'Key words · Group 1 · more house parts (website) · FLEX', title: 'Stairs, walls, roof, balcony …', ar: 'أَجْزَاءُ البَيْتِ',
    items: [
      { n: 7, ar: 'مَدْخَلٌ', en: 'entrance / hall', tr: 'mad-khal', tag: 'm.', forms: PL('مَدَاخِلُ') },
      { n: 8, ar: 'دَرَجٌ / سُلَّمٌ', en: 'stairs', tr: 'da-raj / sul-lam', tag: 'm.' },
      { n: 9, ar: 'حَائِطٌ', en: 'wall', tr: 'ḥā-ʾiṭ', tag: 'm.', forms: PL('حِيطَانٌ') },
      { n: 10, ar: 'سَقْفٌ · سَطْحٌ', en: 'ceiling · rooftop', tr: 'saqf · saṭḥ', tag: 'm.', note: 'Do not confuse (website): سَقْفٌ = ceiling / roof covering; سَطْحٌ = flat rooftop.' },
      { n: 11, ar: 'مَمَرٌّ', en: 'corridor / hallway', tr: 'ma-marr', tag: 'm.', forms: PL('مَمَرَّاتٌ') },
      { n: 12, ar: 'شُرْفَةٌ', en: 'balcony', tr: 'shur-fa', tag: 'f.', forms: PL('شُرُفَاتٌ') },
    ],
    notes: 'HOUSE PARTS 2 (FLEX). Also on the website: مَنْزِلٌ (home), أَرْضِيَّةٌ (floor surface — not a storey!), زُجَاجٌ (glass). All appear in the House Tour Mission and the reading texts.',
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 2 · the complete room bank (website)', title: 'The rooms', ar: 'غُرَفُ البَيْتِ',
    items: [
      { n: 13, ar: 'غُرْفَةُ النَّوْمِ', en: 'bedroom', tr: 'ghur-fa-tu n-nawm', tag: 'room of sleeping', core: true, forms: [{ l: 'pl.', ar: 'غُرَفُ النَّوْمِ' }, { l: 'my', ar: 'غُرْفَةُ نَوْمِي' }] },
      { n: 14, ar: 'غُرْفَةُ الجُلُوسِ', en: 'living room', tr: 'ghur-fa-tu l-ju-lūs', tag: 'room of sitting', core: true, note: 'Also: الصَّالَةُ (lounge).' },
      { n: 15, ar: 'المَطْبَخُ', en: 'kitchen', tr: 'al-maṭ-bakh', tag: 'm.', core: true, forms: PL('مَطَابِخُ') },
      { n: 16, ar: 'الحَمَّامُ', en: 'bathroom', tr: 'al-ḥam-mām', tag: 'm.', core: true, forms: PL('حَمَّامَاتٌ') },
      { n: 17, ar: 'غُرْفَةُ الطَّعَامِ', en: 'dining room', tr: 'ghur-fa-tu ṭ-ṭa-ʿām', tag: 'room of food', core: true },
      { n: 18, ar: 'المَكْتَبُ', en: 'study / office', tr: 'al-mak-tab', tag: 'm.', note: 'Also “a desk” — context decides (website).' },
    ],
    notes: `ROOMS (website “complete room bank”). Three rooms are “room of …” phrases — the grammar focus in a moment. Extension on the website: غُرْفَةُ الأَطْفَالِ (children’s room).
FLOORS (Group 3): الطَّابِقُ الأَرْضِيُّ (ground floor) · الطَّابِقُ الأَوَّلُ (first floor) · الطَّابِقُ الثَّانِي (second floor) — on the grammar slide.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · “the room of …” (website iḍāfa)', title: 'Room + the …', ar: 'إِضَافَةُ أَسْمَاءِ الغُرَفِ',
    cols: [{ label: 'room of (no الـ)', w: 2.6, size: 26 }, { label: '+ the …', w: 2.6, size: 26 }, { label: '= the room name', w: 3.8, size: 26 }, { label: 'Meaning', w: 3.33 }],
    rows: [
      { core: true, cells: [{ ar: '{k|غُرْفَةُ}' }, { ar: '{p|النَّوْمِ}' }, { ar: '{k|غُرْفَةُ} {p|النَّوْمِ}' }, 'the bedroom (room of the sleeping)'] },
      { core: true, cells: [{ ar: '{k|غُرْفَةُ}' }, { ar: '{p|الجُلُوسِ}' }, { ar: '{k|غُرْفَةُ} {p|الجُلُوسِ}' }, 'the living room'] },
      { core: true, cells: [{ ar: '{k|غُرْفَةُ}' }, { ar: '{p|الطَّعَامِ}' }, { ar: '{k|غُرْفَةُ} {p|الطَّعَامِ}' }, 'the dining room'] },
      { cells: [{ ar: '{k|بَابُ}' }, { ar: '{p|البَيْتِ}' }, { ar: '{k|بَابُ} {p|البَيْتِ}' }, 'the house door'] },
      { cells: [{ ar: '{k|نَافِذَةُ}' }, { ar: '{p|المَطْبَخِ}' }, { ar: '{k|نَافِذَةُ} {p|المَطْبَخِ}' }, 'the kitchen window'] },
    ],
    foot: 'Two nouns side by side: the first has no al- (and no -un); the second carries “the”.',
    notes: `GRAMMAR PART 1 — website section 4 “Build ‘the room of…’ phrases”: غُرْفَةُ (room of) + النَّوْمِ (the sleeping) = غُرْفَةُ النَّوْمِ (the bedroom).
Website “Repair these”: الغُرْفَةُ النَّوْمِ ✗ · غُرْفَةُ نَوْمٌ ✗ → غُرْفَةُ النَّوْمِ ✓.
Teacher note (Stretch): the adjective after a room name follows the FIRST noun: غُرْفَةُ الجُلُوسِ كَبِيرَةٌ (website idafa question 9).`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · three home frames + counting (website)', title: 'In my house · I have · there are', ar: 'فِي بَيْتِي · عِنْدِي · هُنَاكَ',
    cards: [
      { chip: 'LIST · CORE', color: '1D5FBF', head: 'فِي بَيْتِي …', big: 'فِي بَيْتِي مَطْبَخٌ وَحَمَّامٌ.', en: 'In my house there is a kitchen and a bathroom.', clue: 'What the home contains.' },
      { chip: 'HAVE · CORE', color: '1E7B4F', head: 'عِنْدِي …', big: 'عِنْدِي غُرْفَةُ نَوْمٍ كَبِيرَةٌ.', en: 'I have a big bedroom.', clue: 'Possession: ‘indī.' },
      { chip: 'COUNT · DEVELOP', color: 'C77700', head: 'هُنَاكَ …', big: 'هُنَاكَ ثَلَاثُ غُرَفٍ.', en: 'There are three rooms.', clue: 'Room f. → thalāthu (not thalāthatu).' },
    ],
    error: { text: 'House m. · room f. — the adjective follows (website).', pairs: [['غُرْفَةٌ كَبِيرَةٌ وَجَدِيدَةٌ', 'غُرْفَةٌ كَبِيرٌ وَجَدِيدٌ']] },
    notes: `GRAMMAR PART 2 — website section 6 “Say what your home contains”: فِي بَيْتِي (list), عِنْدِي (possession), هُنَاكَ (what exists).
Room counting (website): غُرْفَةٌ وَاحِدَةٌ · غُرْفَتَانِ · ثَلَاثُ غُرَفٍ · أَرْبَعُ غُرَفٍ · خَمْسُ غُرَفٍ · سِتُّ غُرَفٍ — “غُرْفَةٌ is feminine, so numbers 3–10 use the opposite, masculine form”.
Question bank (website): مَاذَا فِي بَيْتِكَ / بَيْتِكِ؟ · هَلْ عِنْدَكَ / عِنْدَكِ حَدِيقَةٌ؟ · كَمْ غُرْفَةً فِي بَيْتِكَ؟
Floors: الطَّابِقُ الأَرْضِيُّ / الأَوَّلُ / الثَّانِي.`,
  },
  F.quickCheck(bank(3, 'grammarQuiz', [0, 1, 2, 6]), 'website “Twelve-question home grammar check” questions 1, 2, 3 and 7.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me tour a home', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Type', ar: 'أَسْكُنُ فِي {k|شَقَّةٍ} فِي الطَّابِقِ الثَّانِي.', think: 'Flat, on the 2nd floor.' },
      { head: 'Size', ar: 'شَقَّتِي صَغِيرَ{e|ةٌ} وَلَكِنَّهَا جَمِيلَ{e|ةٌ}.', think: 'Flat is f. → -a on both adjectives.' },
      { head: 'Rooms', ar: '{w|فِيهَا} غُرْفَتَا نَوْمٍ وَ{p|غُرْفَةُ جُلُوسٍ} وَمَطْبَخٌ.', think: 'Two bedrooms, living room, kitchen.' },
      { head: 'Extra + opinion', ar: '{w|عِنْدَنَا} شُرْفَةٌ. أُحِبُّ شَقَّتِي لِأَنَّهَا مُرِيحَةٌ.', think: 'I / we have + because.' },
    ],
    legend: ['k', 'e', 'w', 'p'], legendLabels: { k: 'HOME', e: 'FEMININE', w: 'FRAME', p: 'ROOM NAME' },
    model: 'أَسْكُنُ فِي {k|شَقَّةٍ} فِي الطَّابِقِ الثَّانِي. شَقَّتِي صَغِيرَ{e|ةٌ} وَلَكِنَّهَا جَمِيلَ{e|ةٌ}. {w|فِيهَا} غُرْفَتَا نَوْمٍ وَ{p|غُرْفَةُ جُلُوسٍ} وَمَطْبَخٌ وَحَمَّامٌ. {w|عِنْدَنَا} شُرْفَةٌ، وَلَكِنْ لَيْسَ عِنْدَنَا حَدِيقَةٌ. أُحِبُّ شَقَّتِي لِأَنَّهَا مُرِيحَةٌ.',
    modelEn: 'I live in a flat on the second floor. My flat is small but beautiful. It has two bedrooms, a living room, a kitchen and a bathroom. We have a balcony, but we don’t have a garden. I like my flat because it is comfortable.',
    notes: 'I DO (3 min) — the website speaking prompt “City flat” (second floor · two bedrooms · balcony · no garden) as a think-aloud. Then ask: “Now a HOUSE (بَيْتٌ) — what changes?” → صَغِيرٌ، جَمِيلٌ، فِيهِ، لِأَنَّهُ.',
  },
  F.gameSlide({ ...game, items: [game.items[0], game.items[1], game.items[5]] }, {
    title: 'Which room? Match the picture',
    en: ['This is the bedroom.', 'This is the kitchen.', 'I live in a flat.'],
    icons: [[['fa6', 'FaBed', '1D5FBF']], [['fa6', 'FaKitchenSet', 'C77700']], [['fa6', 'FaBuilding', '5A6472']]],
    labels: ['a bed', 'a kitchen', 'a block of flats'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Ask: why هٰذِهِ for the bedroom but هٰذَا for the kitchen? (غُرْفَةٌ is feminine; مَطْبَخٌ is masculine.) Other cards for homework: هٰذِهِ غُرْفَةُ الجُلُوسِ، هٰذَا الحَمَّامُ، لِلْبَيْتِ حَدِيقَةٌ.',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website “House Tour Mission”', title: 'Tour the house', ar: 'مُهِمَّةُ جَوْلَةِ البَيْتِ',
    seed: 13,
    questions: [rounds[2], rounds[4], rounds[5], rounds[8], rounds[13]],
    side: { kind: 'core', label: 'CORE', text: 'Room of + the …\nroom → -a adjective\n3 rooms = thalāthu ghuraf' },
    answerSlide: { min: 0, eyebrow: 'We do · Mission answers', title: 'Mission: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 14 House Tour rounds (home type, iḍāfa, room count, agreement, reason). The other 9 are homework.',
    answerNotes: 'After each answer ask: which rule did you use — room name, gender or number?',
  },
  F.repairSlide(site, ['Room name: which noun loses al-?', 'Room is feminine — which number form?', 'Room is feminine — which adjective ending?']),
  F.listening(site, {
    coreTip: 'Listen twice.\nNotes grid: home type · floors · rooms · garden / garage · opinion.',
    routes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 5.',
    gloss: [
      ['اِسْمِي سَلْمَى. أَسْكُنُ مَعَ عَائِلَتِي فِي بَيْتٍ كَبِيرٍ وَجَدِيدٍ.', 'My name is Salma. I live with my family in a big, new house.'],
      ['بَيْتُنَا فِيهِ طَابِقَانِ وَسِتُّ غُرَفٍ وَحَمَّامَانِ.', 'Our house has two floors, six rooms and two bathrooms.'],
      ['فِي الطَّابِقِ الأَرْضِيِّ مَدْخَلٌ وَغُرْفَةُ جُلُوسٍ وَمَطْبَخٌ وَغُرْفَةُ طَعَامٍ وَحَمَّامٌ.', 'On the ground floor: a hall, a living room, a kitchen, a dining room and a bathroom.'],
      ['فِي الطَّابِقِ الأَوَّلِ ثَلَاثُ غُرَفِ نَوْمٍ وَحَمَّامٌ آخَرُ. عِنْدَنَا حَدِيقَةٌ صَغِيرَةٌ وَمَرْآبٌ.', 'On the first floor: three bedrooms and another bathroom. We have a small garden and a garage.'],
      ['غُرْفَتِي فِي الطَّابِقِ الأَوَّلِ، وَفِيهَا نَافِذَةٌ كَبِيرَةٌ. أُحِبُّ بَيْتِي لِأَنَّهُ مُرِيحٌ وَهَادِئٌ.', 'My room is on the first floor and has a big window. I love my house because it is comfortable and quiet.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · Text A (website)', title: 'Omar’s flat', ar: 'النَّصُّ (أ)',
    lines: [
      ['اِسْمِي عُمَرُ. أَسْكُنُ مَعَ أُسْرَتِي فِي شَقَّةٍ فِي الطَّابِقِ الثَّانِي.', 'Type + floor: a flat on the second floor'],
      ['شَقَّتُنَا صَغِيرَةٌ وَلَكِنَّهَا جَمِيلَةٌ وَنَظِيفَةٌ.', 'Description: small but beautiful and clean'],
      ['فِيهَا غُرْفَةُ جُلُوسٍ وَغُرْفَتَا نَوْمٍ وَمَطْبَخٌ وَحَمَّامٌ وَمَمَرٌّ صَغِيرٌ.', 'Rooms: living room · two bedrooms · kitchen · bathroom · hallway'],
      ['لَا عِنْدَنَا حَدِيقَةٌ وَلَا مَرْآبٌ، وَلَكِنْ عِنْدَنَا شُرْفَةٌ.', 'Not: garden, garage · but: a balcony'],
      ['أُحِبُّ غُرْفَةَ الجُلُوسِ لِأَنَّهَا وَاسِعَةٌ وَمُرِيحَةٌ.', 'Opinion: the living room — spacious and comfortable'],
    ],
    notes: 'TEXT A (website, complete). The English column gives the CATEGORY. Website strategy: find exact evidence about house type, rooms, floors and opinions. Note غُرْفَتَا نَوْمٍ = two bedrooms (the dual in a room name).',
  },
  {
    type: 'glossed', stage: 'wedo', flex: true, eyebrow: 'We do · reading · Text B (website) · FLEX / Stretch', title: 'Huda’s house', ar: 'النَّصُّ (ب)',
    lines: [
      ['اِسْمِي هُدَى. بَيْتُنَا قَدِيمٌ وَلَكِنَّهُ كَبِيرٌ.', 'Description: old but big'],
      ['فِيهِ طَابِقٌ أَرْضِيٌّ وَطَابِقٌ أَوَّلُ.', 'Floors: ground + first'],
      ['فِي الطَّابِقِ الأَرْضِيِّ مَطْبَخٌ وَغُرْفَةُ طَعَامٍ وَغُرْفَةُ جُلُوسٍ كَبِيرَةٌ.', 'Ground floor: kitchen · dining room · big living room'],
      ['وَفِي الطَّابِقِ الأَوَّلِ أَرْبَعُ غُرَفِ نَوْمٍ وَحَمَّامَانِ.', 'First floor: four bedrooms · two bathrooms'],
      ['عِنْدَنَا حَدِيقَةٌ وَمَرْآبٌ وَسَطْحٌ. أُحِبُّ الحَدِيقَةَ لِأَنَّهَا جَمِيلَةٌ وَهَادِئَةٌ.', 'Extras: garden · garage · rooftop — opinion: the garden'],
    ],
    notes: 'TEXT B (website, complete). Stretch: compare with Text A — flat vs house, balcony vs garden, masculine لَكِنَّهُ (house) vs feminine لَكِنَّهَا (flat).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions · use evidence from both texts (website)', title: 'Omar or Huda?', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 9,
    questions: bank(3, 'readingQuiz', [0, 2, 4, 6, 8]),
    side: { kind: 'info', head: 'FIND THE EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Question → key word → the exact Arabic phrase.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading questions 1, 3, 5 (Omar) and 7, 9 (Huda — Core may skip). The other 7 are homework.',
    answerNotes: 'A student reads aloud the evidence phrase (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'مَاذَا فِي بَيْتِكَ؟ / مَاذَا فِي بَيْتِكِ؟' },
      { route: 'develop', ar: 'كَمْ غُرْفَةً فِي بَيْتِكَ؟' },
      { route: 'develop', ar: 'هَلْ عِنْدَكَ حَدِيقَةٌ؟ / هَلْ عِنْدَكِ حَدِيقَةٌ؟' },
      { route: 'stretch', ar: 'مَا غُرْفَتُكَ المُفَضَّلَةُ؟ وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'فِي بَيْتِي ______ وَ ______ .' },
      { route: 'develop', ar: 'فِي بَيْتِي ______ غُرَفٍ. / غُرْفَتَانِ.' },
      { route: 'develop', ar: 'نَعَمْ، عِنْدِي ______ . / لَا، لَيْسَ عِنْدِي ______ .' },
      { route: 'stretch', ar: 'أُحِبُّ ______ لِأَنَّهَا ______ ، وَلَكِنَّ ______ .' },
    ],
    modelEn: ['What is in your house?', 'I live in a big house with my family. In my house there are two floors and six rooms.'],
    notes: `WEBSITE SPEAKING STUDIO “Give a connected house tour” (45–60 seconds). Prompt cards (website):
${prompts.map((r) => `• ${r.title}: ${r.detail}`).join('\n')}
Website checklist (listener ticks 1–6): home type · at least five areas · فِي بَيْتِي / عِنْدِي / هُنَاكَ · adjectives match · two connectors · clear delivery.
Privacy: a fictional or dream home is always fine.`,
  }),
  F.routesSlide(site, {
    core: { amount: '5 sentences', how: 'Model + word bank: home type, three rooms with fī baytī, one thing you have (‘indī).' },
    develop: { amount: '6–8 sentences', how: 'Floors, six rooms with a number, two agreeing adjectives, a favourite room.' },
    stretch: { amount: '50–70 words', how: 'Compare two rooms (wa-lākin) and justify your favourite (li-annahā …).' },
  }),
  F.framesSlide({
    core: [
      { en: 'I live in a house / a flat.', ar: 'أَسْكُنُ فِي بَيْتٍ / شَقَّةٍ.' },
      { en: 'In my house there is …', ar: 'فِي بَيْتِي ______ .' },
      { en: 'I have …', ar: 'عِنْدِي ______ .' },
      { en: 'My house is big / small.', ar: 'بَيْتِي كَبِيرٌ / صَغِيرٌ.' },
      { en: 'My room is big / small.', ar: 'غُرْفَتِي كَبِيرَةٌ / صَغِيرَةٌ.' },
    ],
    develop: [
      { en: 'There are … rooms.', ar: 'هُنَاكَ ______ غُرَفٍ.' },
      { en: 'On the ground floor there is …', ar: 'فِي الطَّابِقِ الأَرْضِيِّ ______ .' },
      { en: 'On the first floor there are …', ar: 'فِي الطَّابِقِ الأَوَّلِ ______ .' },
      { en: '… but we don’t have …', ar: 'وَلَكِنْ لَيْسَ عِنْدَنَا ______ .' },
      { en: 'I love … because it is …', ar: 'أُحِبُّ ______ لِأَنَّهَا ______ .' },
    ],
    bank: ['بَيْتٌ', 'شَقَّةٌ', 'غُرْفَةُ النَّوْمِ', 'غُرْفَةُ الجُلُوسِ', 'المَطْبَخُ', 'الحَمَّامُ', 'غُرْفَةُ الطَّعَامِ', 'حَدِيقَةٌ', 'فِي بَيْتِي', 'عِنْدِي', 'هُنَاكَ', 'لِأَنَّ'],
  }),
  F.modelSlide(site,
    'I live in a big house with my family. In my house there are two floors and six rooms. On the ground floor there is a kitchen, a living room and a bathroom. And on the first floor there are three bedrooms. We have a garden and a garage. I love my house because it is comfortable.',
    ['فِي بَيْتِي', 'a room count', 'a room name (iḍāfa)', 'لِأَنَّهُ'],
    'Website model (speaking prompt “Family house”). Develop: add one agreeing adjective to a room (غُرْفَةُ جُلُوسٍ كَبِيرَةٌ).'),
  F.selfCheckSlide([
    { route: 'core', text: 'I named at least five rooms or parts.' },
    { route: 'core', text: 'I used fī baytī or ‘indī.' },
    { route: 'develop', text: 'Room names: the first noun has no al-.' },
    { route: 'develop', text: 'Room (f.) → -a adjective; house (m.) → no -a.' },
    { route: 'stretch', text: 'I compared two rooms and gave a reason.' },
  ]),
  F.exitTicket(bank(3, 'finalQuiz', [1, 2, 5]), 16),
  F.prepSlide({
    ...NEXT,
    words: [['سَرِيرٌ', 'a bed', 'pl. أَسِرَّةٌ'], ['خِزَانَةٌ', 'a wardrobe / cupboard', 'pl. خَزَائِنُ'], ['طَاوِلَةٌ', 'a table', 'pl. طَاوِلَاتٌ'], ['كُرْسِيٌّ', 'a chair', 'pl. كَرَاسِي'], ['أَرِيكَةٌ', 'a sofa', 'pl. أَرَائِكُ']],
    questionEn: 'Which room do you like most at home, and what is in it? Two items in Arabic.',
    questionAr: 'مَاذَا فِي غُرْفَتِكَ؟',
    homework: {
      core: 'Website F3-L03: the House Tour Mission (14) and the picture game.',
      develop: 'Website writing task: 6–8 sentences describing a home (your own, the Al-Nour home or a dream home).',
      stretch: 'Label a floor plan with eight rooms and parts, and write 50–70 words comparing two rooms.',
    },
    wordsSource: 'The five words come from the website F3-L04 core furniture bank.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: room of + the … · room (f.) → -a adjective.' }),
];

module.exports = { meta, slides };
