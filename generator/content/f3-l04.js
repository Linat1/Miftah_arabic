'use strict';
/*
 * F3-L04 · Furniture and Household Items
 * Website: Pathways › Foundation › F3 › Lesson 4. Core furniture bank (12, with plurals), appliances and bathroom items (6 +
 * recognition bank), which items belong in each room, يُوجَدُ / تُوجَدُ by the gender of the item, high-value plurals and
 * non-human plural agreement, the bedroom redesign, Furniture Mission (14), Mariam’s three rooms (listening), Samir’s bedroom
 * and Layla’s kitchen (reading), the room-tour studio, the 6–8-sentence room description and the 16-question checkpoint.
 * Also used as the engine of Topic B lesson 5 (TB-L05).
 */
const F = require('./f3-common');
const game = require('../site-data/pathway-visual-games.json')['f3-l04'];
const { q, bank, banks } = F;

const meta = F.meta({
  n: 4, fileTitle: 'Furniture_and_Household_Items', chip: 'Furniture',
  title: 'Furniture and Household Items', arabic: 'الأَثَاثُ وَالأَغْرَاضُ المَنْزِلِيَّةُ',
  focus: 'Furnish each room: name the core furniture and appliances with useful plurals, choose يُوجَدُ or تُوجَدُ by the gender of the item, and describe one room in detail.',
  icon: 'FaCouch', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F3-L05', nextTitle: 'Colours — Full System and Agreement', nextAr: 'الأَلْوَانُ وَالمُطَابَقَةُ' };
const rounds = banks.l04.rounds.map((r) => F.w({ ...r, q: r.prompt }));
const prompts = banks.l04.prompts;
const P = (pl, g) => ({ tag: g, forms: [{ l: 'pl.', ar: pl }, { l: g === 'm.' ? 'there is' : 'there is', ar: g === 'm.' ? 'يُوجَدُ' : 'تُوجَدُ' }] });

const site = {
  speaking: {
    context: 'Give a guided room tour',
    model: [
      ['A', 'مَاذَا يُوجَدُ فِي غُرْفَةِ النَّوْمِ؟', 'What is there in the bedroom?'],
      ['B', 'غُرْفَةُ النَّوْمِ وَاسِعَةٌ وَهَادِئَةٌ. فِيهَا يُوجَدُ سَرِيرٌ كَبِيرٌ وَمَكْتَبٌ صَغِيرٌ.', 'The bedroom is spacious and quiet. In it there is a big bed and a small desk.'],
    ],
  },
  writing: {
    prompt: 'Website writing task: describe one room in 6–8 connected sentences — at least eight objects, two descriptions, one plural and an opinion with a reason.',
    checklist: ['يُوجَدُ before a masculine item, تُوجَدُ before a feminine one.', 'At least eight objects.', 'One plural (كَرَاسِي، رُفُوفٌ …).', 'An opinion with لِأَنَّ.'],
    model: 'غُرْفَةُ النَّوْمِ وَاسِعَةٌ وَمُرِيحَةٌ. فِيهَا يُوجَدُ سَرِيرٌ كَبِيرٌ وَمَكْتَبٌ صَغِيرٌ. تُوجَدُ خِزَانَةٌ بَيْضَاءُ بِجَانِبِ النَّافِذَةِ، وَتُوجَدُ سَجَّادَةٌ بُنِّيَّةٌ عَلَى الأَرْضِيَّةِ. عَلَى المَكْتَبِ يُوجَدُ مِصْبَاحٌ وَحَاسُوبٌ. أُحِبُّ هَذِهِ الغُرْفَةَ لِأَنَّهَا هَادِئَةٌ.',
  },
  differentiation: {
    core: 'Label eight items in one room and write four “in my room there is …” sentences.',
    develop: 'Six to eight sentences with yūjadu / tūjadu, two descriptions and one plural.',
    stretch: 'Add colours, positions (on, beside, above) and non-human plural agreement (kathīra).',
  },
  mistakes: [
    { wrong: 'فِي الغُرْفَةِ يُوجَدُ خِزَانَةٌ.', right: 'فِي الغُرْفَةِ تُوجَدُ خِزَانَةٌ.', why: 'Look at the ITEM, not the room: a wardrobe is feminine.' },
    { wrong: 'تُوجَدُ مِصْبَاحٌ.', right: 'يُوجَدُ مِصْبَاحٌ.', why: 'A lamp is masculine → yūjadu (website Furniture Mission).' },
    { wrong: 'تُوجَدُ كَرَاسِي كَثِيرُونَ.', right: 'تُوجَدُ كَرَاسِي كَثِيرَةٌ.', why: 'A plural of things takes a feminine singular adjective.' },
  ],
  listening: {
    title: 'Mariam describes three rooms',
    script: 'أَهْلًا! أَنَا مَرْيَمُ، وَسَأَصِفُ ثَلَاثَ غُرَفٍ فِي بَيْتِنَا. فِي غُرْفَةِ نَوْمِي يُوجَدُ سَرِيرٌ أَبْيَضُ وَمَكْتَبٌ بُنِّيٌّ، وَتُوجَدُ خِزَانَةٌ كَبِيرَةٌ وَمِرْآةٌ صَغِيرَةٌ. عَلَى المَكْتَبِ يُوجَدُ حَاسُوبٌ وَمِصْبَاحٌ. فِي المَطْبَخِ تُوجَدُ ثَلَّاجَةٌ بَيْضَاءُ وَغَسَّالَةٌ، وَيُوجَدُ مَوْقِدٌ وَحَوْضٌ. هُنَاكَ أَيْضًا طَاوِلَةٌ وَأَرْبَعَةُ كَرَاسِي. أَمَّا غُرْفَةُ الجُلُوسِ فَفِيهَا أَرِيكَةٌ زَرْقَاءُ وَتِلْفَازٌ كَبِيرٌ وَسَجَّادَةٌ جَمِيلَةٌ. أُحِبُّ غُرْفَةَ الجُلُوسِ لِأَنَّهَا وَاسِعَةٌ وَمُرِيحَةٌ.',
    questions: bank(4, 'listeningQuiz', [1, 3, 5, 6, 8]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 4,
    source: 'Website sections used: the eight-question room bridge, the core furniture bank (12 with plurals) and its 12-question check, appliances and bathroom items with the wider recognition bank (12-question check), the room sets and 12-question room sorter, يُوجَدُ / تُوجَدُ with non-human plurals and the 14-question grammar laboratory, the bedroom redesign, the Furniture Mission (14), Mariam’s three rooms (listening, 10), Samir’s bedroom and Layla’s kitchen (reading, 12), the room-tour studio (4 prompts), the 6–8-sentence writing task and the 16-question checkpoint. Picture match: website visual game “Furniture and Household Items”.',
    support: `• One decision all lesson: is the ITEM masculine or feminine? → يُوجَدُ (masc.) or تُوجَدُ (fem.). The room is only the place (website: “look at the item, not the room”).
• Core: 8 items + “in my room there is …” (the simpler verb-free pattern فِي غُرْفَتِي سَرِيرٌ is also correct — website). Develop: يُوجَدُ / تُوجَدُ and one plural. Stretch: colours, positions and non-human plural agreement (كَرَاسِي كَثِيرَةٌ).
• Privacy (website): use your own room only when comfortable — the model room or an invented room is always fine.
• Urdu bridge: کرسی ← كُرْسِيٌّ، میز (Persian) / طَاوِلَةٌ، الماری (Portuguese) / خِزَانَةٌ (Urdu خزانہ = treasury!), آئینہ (Persian) / مِرْآةٌ، قالین (Turkish) / سَجَّادَةٌ (Urdu سجادہ = prayer mat).`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Furniture and appliances, then “there is” for masculine and feminine items.', wedo: 'Furniture Mission, listen to Mariam, read two rooms.', next: 'F3-L05' }),
  F.doNow({
    questions: [
      q('What does سَرِيرٌ mean?', ['a bed', 'a chair', 'a table'], 'Prepared at home (F3-L03).'),
      q('What does خِزَانَةٌ mean?', ['a wardrobe', 'a sofa', 'a mirror'], 'Prepared at home (F3-L03).'),
      ...bank(4, 'retrievalQuiz', [2, 3, 5]),
    ],
    keyIdea: { text: 'Look at the ITEM, not the room: masculine item → yūjadu; feminine item → tūjadu.', ar: '{w|يُوجَدُ} سَرِيرٌ · {e|تُوجَدُ} خِزَانَةٌ' },
    retrieves: 'Questions 1–2 test two of the five furniture words prepared at home at the end of F3-L03. Questions 3–5 are the website “room bridge” (room-name iḍāfa, room + adjective, in my room).',
  }),
  F.objectivesSlide([
    'Name the full core furniture and appliance bank.',
    'Place items in appropriate rooms.',
    'Use يُوجَدُ / تُوجَدُ accurately.',
    'Describe one room in 6–8 connected sentences.',
  ], {
    core: ['I can name eight items of furniture.', 'I can say what is in my room.'],
    develop: ['I can choose yūjadu or tūjadu.', 'I can use two useful plurals.'],
    stretch: ['I can add colours and positions.', 'I can make a plural of things agree (kathīra).'],
  }, 2, 'Website “By the end” aims (left) and the website speaking checklist as routes (right).'),
  F.keywordsSlide({
    text: '12 furniture words and 6 appliances from the website, each with its plural. Core: bed, wardrobe, table, chair, sofa, television, lamp, mirror.',
    groups: [
      { head: 'GROUP 1', name: 'Core furniture · 12' },
      { head: 'GROUP 2', name: 'Appliances and bathroom · 6' },
      { head: 'GROUP 3', name: 'Recognition bank · 12' },
    ],
    bridge: [
      { ar: 'كُرْسِيٌّ', urdu: 'کرسی', tr: 'kursī', en: 'chair' },
      { ar: 'خِزَانَةٌ', urdu: 'خزانہ', tr: 'khizāna', en: 'Arabic: wardrobe · Urdu: treasury' },
      { ar: 'سَجَّادَةٌ', urdu: 'سجادہ', tr: 'sajjāda', en: 'Arabic: rug · Urdu: prayer mat' },
      { ar: 'مِصْبَاحٌ', urdu: 'مصباح', tr: 'miṣbāḥ', en: 'lamp (Surat an-Nur!)' },
      { ar: 'مِرْآةٌ', urdu: 'آئینہ', tr: 'mirʾā', en: 'mirror (not cognate)' },
    ],
    notes: 'URDU BRIDGE: کرسی is the same word. مِصْبَاحٌ is in Surat an-Nūr (24:35: الْمِصْبَاحُ فِي زُجَاجَةٍ) — many students know it. CAREFUL: خزانہ in Urdu is a treasury and سجادہ is a prayer mat — in Arabic خِزَانَةٌ is a wardrobe / cupboard and سَجَّادَةٌ any rug. آئینہ، میز and الماری are not Arabic.',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · core furniture (website) · 1 of 2', title: 'Bed, wardrobe, table …', ar: 'الأَثَاثُ',
    items: [
      { n: 1, ar: 'سَرِيرٌ', en: 'bed', tr: 'sa-rīr', core: true, ...P('أَسِرَّةٌ', 'm.') },
      { n: 2, ar: 'خِزَانَةٌ', en: 'wardrobe / cupboard', tr: 'khi-zā-na', core: true, ...P('خَزَائِنُ', 'f.') },
      { n: 3, ar: 'طَاوِلَةٌ', en: 'table', tr: 'ṭā-wi-la', core: true, ...P('طَاوِلَاتٌ', 'f.') },
      { n: 4, ar: 'كُرْسِيٌّ', en: 'chair', tr: 'kur-siyy', core: true, ...P('كَرَاسِي', 'm.') },
      { n: 5, ar: 'أَرِيكَةٌ / كَنَبَةٌ', en: 'sofa / couch', tr: 'a-rī-ka / ka-na-ba', core: true, ...P('أَرَائِكُ', 'f.') },
      { n: 6, ar: 'تِلْفَازٌ', en: 'television', tr: 'til-fāz', core: true, ...P('تِلْفَازَاتٌ', 'm.') },
    ],
    notes: 'CORE FURNITURE 1 (website “Core furniture bank”). Every card: the plural and the right “there is”. The tag is the gender — that is today’s decision. Chant: sarīr – asirra – yūjadu sarīr.',
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · core furniture (website) · 2 of 2', title: 'Rug, curtain, lamp …', ar: 'الأَثَاثُ',
    items: [
      { n: 7, ar: 'سَجَّادَةٌ', en: 'rug / carpet', tr: 'saj-jā-da', ...P('سَجَّادَاتٌ', 'f.') },
      { n: 8, ar: 'سِتَارَةٌ', en: 'curtain', tr: 'si-tā-ra', ...P('سَتَائِرُ', 'f.') },
      { n: 9, ar: 'مِصْبَاحٌ', en: 'lamp', tr: 'miṣ-bāḥ', core: true, ...P('مَصَابِيحُ', 'm.') },
      { n: 10, ar: 'رَفٌّ', en: 'shelf', tr: 'raff', ...P('رُفُوفٌ', 'm.') },
      { n: 11, ar: 'مَكْتَبٌ', en: 'desk / study', tr: 'mak-tab', ...P('مَكَاتِبُ', 'm.') },
      { n: 12, ar: 'مِرْآةٌ', en: 'mirror', tr: 'mir-ʾā', core: true, ...P('مَرَايَا', 'f.') },
    ],
    notes: 'CORE FURNITURE 2. مِرْآةٌ is feminine (ة); مِصْبَاحٌ and رَفٌّ are masculine. Website high-value plurals: كَرَاسِي، سَتَائِرُ، مَصَابِيحُ، رُفُوفٌ، مَرَايَا.',
  },
  {
    type: 'vocab', stage: 'teach', flex: true, eyebrow: 'Key words · Group 2 · appliances and bathroom (website) · FLEX', title: 'Fridge, cooker, shower …', ar: 'الأَجْهِزَةُ المَنْزِلِيَّةُ',
    items: [
      { n: 13, ar: 'ثَلَّاجَةٌ', en: 'fridge', tr: 'thal-lā-ja', ...P('ثَلَّاجَاتٌ', 'f.') },
      { n: 14, ar: 'مَوْقِدٌ', en: 'cooker / stove', tr: 'maw-qid', ...P('مَوَاقِدُ', 'm.') },
      { n: 15, ar: 'غَسَّالَةٌ', en: 'washing machine', tr: 'ghas-sā-la', ...P('غَسَّالَاتٌ', 'f.') },
      { n: 16, ar: 'مِكْنَسَةٌ كَهْرَبَائِيَّةٌ', en: 'vacuum cleaner', tr: 'mik-na-sa kah-ra-bā-ʾiy-ya', tag: 'f.' },
      { n: 17, ar: 'حَوْضٌ', en: 'sink / basin', tr: 'ḥawḍ', ...P('أَحْوَاضٌ', 'm.') },
      { n: 18, ar: 'دُشٌّ', en: 'shower', tr: 'dushsh', ...P('دُشُوشٌ', 'm.') },
    ],
    notes: `APPLIANCES (FLEX — they are the focus of F3-L06). Website wider recognition bank: فُرْنٌ (oven), غَسَّالَةُ صُحُونٍ (dishwasher), مُجَمِّدٌ (freezer), غَلَّايَةٌ (kettle), مِكْوَاةٌ (iron), مُكَيِّفٌ (air conditioner), مِرْوَحَةٌ (fan), حَاسُوبٌ (computer), سَاعَةٌ (clock), وِسَادَةٌ (pillow), بَطَّانِيَّةٌ (blanket).`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · yūjadu / tūjadu (website table)', title: 'There is … (masculine or feminine item)', ar: 'يُوجَدُ · تُوجَدُ',
    cols: [{ label: 'Place', w: 3.3, size: 22 }, { label: 'Masculine item', w: 3.5, size: 22 }, { label: 'Feminine item', w: 3.5, size: 22 }, { label: 'Meaning', w: 2.03 }],
    rows: [
      { core: true, cells: [{ ar: 'فِي غُرْفَةِ النَّوْمِ' }, { ar: '{w|يُوجَدُ} سَرِيرٌ' }, { ar: '{e|تُوجَدُ} خِزَانَةٌ' }, 'bed · wardrobe'] },
      { core: true, cells: [{ ar: 'فِي غُرْفَةِ الجُلُوسِ' }, { ar: '{w|يُوجَدُ} تِلْفَازٌ' }, { ar: '{e|تُوجَدُ} أَرِيكَةٌ' }, 'TV · sofa'] },
      { cells: [{ ar: 'فِي الحَمَّامِ' }, { ar: '{w|يُوجَدُ} حَوْضٌ' }, { ar: '{e|تُوجَدُ} مِرْآةٌ' }, 'sink · mirror'] },
      { cells: [{ ar: 'فِي غُرْفَتِي' }, { ar: 'سَرِيرٌ' }, { ar: 'وَخِزَانَةٌ' }, 'no verb — also correct'] },
    ],
    foot: 'The verb agrees with the item after it. The room is only the place.',
    notes: `GRAMMAR PART 1 — website section 5 “Use يُوجَدُ and تُوجَدُ”: يُوجَدُ before a masculine singular; تُوجَدُ before a feminine singular; “look at the item, not the room”.
Row 4 = the website “useful simpler alternative”: فِي غُرْفَتِي سَرِيرٌ وَخِزَانَةٌ — the verb can be omitted. Core students may always use this pattern.
Quick-fire: say an item; students type ي or ت.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · plurals and describing (website)', title: 'One, many, and what they are like', ar: 'المُفْرَدُ وَالجَمْعُ',
    cards: [
      { chip: 'PLURAL · CORE', color: '1D5FBF', head: 'كَرَاسِي', big: 'هُنَاكَ طَاوِلَةٌ وَأَرْبَعَةُ كَرَاسِي.', en: 'There is a table and four chairs.', clue: 'Learn the plural with the word.' },
      { chip: 'DEVELOP', color: 'C77700', head: 'things → f.', big: 'تُوجَدُ كَرَاسِي كَثِيرَةٌ.', en: 'There are many chairs.', clue: 'tūjadu + kathīra (not kathīrūn).' },
      { chip: 'STRETCH', color: '1E7B4F', head: 'describe', big: 'تُوجَدُ خِزَانَةٌ بَيْضَاءُ بِجَانِبِ النَّافِذَةِ.', en: 'There is a white wardrobe beside the window.', clue: 'Colour + position.' },
    ],
    error: { text: 'Website Furniture Mission: a lamp is masculine.', pairs: [['يُوجَدُ مِصْبَاحٌ.', 'تُوجَدُ مِصْبَاحٌ.']] },
    notes: `GRAMMAR PART 2 — website “High-value plurals” (سَرِيرٌ ← أَسِرَّةٌ · كُرْسِيٌّ ← كَرَاسِي · طَاوِلَةٌ ← طَاوِلَاتٌ · خِزَانَةٌ ← خَزَائِنُ · سِتَارَةٌ ← سَتَائِرُ · مِصْبَاحٌ ← مَصَابِيحُ · رَفٌّ ← رُفُوفٌ · مِرْآةٌ ← مَرَايَا · مَكْتَبٌ ← مَكَاتِبُ) and “Non-human plurals · Develop” (فِي الغُرْفَةِ تُوجَدُ كَرَاسِي كَثِيرَةٌ).
Positions from the website model: عَلَى المَكْتَبِ (on the desk), بِجَانِبِ النَّافِذَةِ (beside the window), فَوْقَ المَكْتَبِ (above the desk), عَلَى الأَرْضِيَّةِ (on the floor). Colours are next lesson (F3-L05).`,
  },
  F.quickCheck(bank(4, 'grammarQuiz', [0, 1, 4, 6]), 'website “Fourteen-question grammar laboratory” questions 1, 2, 5 and 7.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me furnish a bedroom', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'The room', ar: 'غُرْفَةُ النَّوْمِ وَاسِعَةٌ وَمُرِيحَةٌ.', think: 'Room (f.) → -a adjectives.' },
      { head: 'Masculine items', ar: 'فِيهَا {w|يُوجَدُ} سَرِيرٌ كَبِيرٌ وَمَكْتَبٌ صَغِيرٌ.', think: 'Bed, desk → yūjadu.' },
      { head: 'Feminine items', ar: '{e|تُوجَدُ} خِزَانَةٌ بِجَانِبِ النَّافِذَةِ، وَ{e|تُوجَدُ} سَجَّادَةٌ عَلَى الأَرْضِيَّةِ.', think: 'Wardrobe, rug → tūjadu.' },
      { head: 'Opinion', ar: 'أُحِبُّ هَذِهِ الغُرْفَةَ لِأَنَّهَا هَادِئَةٌ.', think: 'Because it (f.) is quiet.' },
    ],
    legend: ['w', 'e'], legendLabels: { w: 'MASCULINE ITEM', e: 'FEMININE ITEM' },
    model: 'غُرْفَةُ النَّوْمِ وَاسِعَةٌ وَمُرِيحَةٌ. فِيهَا {w|يُوجَدُ} سَرِيرٌ كَبِيرٌ وَمَكْتَبٌ صَغِيرٌ. {e|تُوجَدُ} خِزَانَةٌ بِجَانِبِ النَّافِذَةِ، وَ{e|تُوجَدُ} سَجَّادَةٌ عَلَى الأَرْضِيَّةِ. عَلَى المَكْتَبِ {w|يُوجَدُ} مِصْبَاحٌ وَحَاسُوبٌ. أُحِبُّ هَذِهِ الغُرْفَةَ لِأَنَّهَا هَادِئَةٌ.',
    modelEn: 'The bedroom is spacious and comfortable. In it there is a big bed and a small desk. There is a wardrobe beside the window, and there is a rug on the floor. On the desk there is a lamp and a computer. I love this room because it is quiet.',
    notes: 'I DO (3 min) — the website “model description” of the bedroom scene (colours left out until F3-L05). Think aloud before every verb: “the ITEM is … masculine or feminine?”',
  },
  F.gameSlide({ ...game, items: [game.items[0], game.items[1], game.items[4]] }, {
    title: 'Where is it? Match the picture',
    en: ['The bed is in the bedroom.', 'The sofa is in the living room.', 'This is a fridge.'],
    icons: [[['fa6', 'FaBed', '1D5FBF']], [['fa6', 'FaCouch', 'C77700']], [['fa6', 'FaSnowflake', '1D5FBF'], ['fa6', 'FaKitchenSet', '5A6472']]],
    labels: ['a bed', 'a sofa', 'a fridge'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Ask: why هٰذِهِ ثَلَّاجَةٌ? (ة → feminine). Other cards for homework: هٰذَا كُرْسِيٌّ، هٰذِهِ مِرْآةٌ، هٰذِهِ غَسَّالَةٌ.',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website “Furniture Mission”', title: 'Furnish the home', ar: 'مُهِمَّةُ تَأْثِيثِ البَيْتِ',
    seed: 14,
    questions: [rounds[2], rounds[4], rounds[5], rounds[6], rounds[11]],
    side: { kind: 'core', label: 'CORE', text: 'Masculine item → yūjadu\nFeminine item → tūjadu\nLearn the plural too' },
    answerSlide: { min: 0, eyebrow: 'We do · Mission answers', title: 'Mission: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 14 Furniture Mission cards (room choice, masculine, feminine, plural, repair). The other 9 are homework.',
    answerNotes: 'After each answer ask: which word decided it — the item or the room?',
  },
  F.repairSlide(site, ['Wardrobe: masculine or feminine?', 'Lamp: masculine or feminine?', 'Chairs are things, not people.']),
  F.listening(site, {
    coreTip: 'Listen twice.\nThree columns: bedroom · kitchen · living room.',
    routes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 5.',
    gloss: [
      ['أَهْلًا! أَنَا مَرْيَمُ، وَسَأَصِفُ ثَلَاثَ غُرَفٍ فِي بَيْتِنَا.', 'Hello! I am Mariam, and I will describe three rooms in our house.'],
      ['فِي غُرْفَةِ نَوْمِي يُوجَدُ سَرِيرٌ أَبْيَضُ وَمَكْتَبٌ بُنِّيٌّ، وَتُوجَدُ خِزَانَةٌ كَبِيرَةٌ وَمِرْآةٌ صَغِيرَةٌ.', 'In my bedroom there is a white bed and a brown desk, and a big wardrobe and a small mirror.'],
      ['عَلَى المَكْتَبِ يُوجَدُ حَاسُوبٌ وَمِصْبَاحٌ.', 'On the desk there is a computer and a lamp.'],
      ['فِي المَطْبَخِ تُوجَدُ ثَلَّاجَةٌ بَيْضَاءُ وَغَسَّالَةٌ، وَيُوجَدُ مَوْقِدٌ وَحَوْضٌ. هُنَاكَ أَيْضًا طَاوِلَةٌ وَأَرْبَعَةُ كَرَاسِي.', 'In the kitchen there is a white fridge and a washing machine, a cooker and a sink. There is also a table and four chairs.'],
      ['أَمَّا غُرْفَةُ الجُلُوسِ فَفِيهَا أَرِيكَةٌ زَرْقَاءُ وَتِلْفَازٌ كَبِيرٌ وَسَجَّادَةٌ جَمِيلَةٌ. أُحِبُّ غُرْفَةَ الجُلُوسِ لِأَنَّهَا وَاسِعَةٌ وَمُرِيحَةٌ.', 'As for the living room, it has a blue sofa, a big TV and a beautiful rug. I love the living room because it is spacious and comfortable.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · Text A (website)', title: 'Samir’s bedroom', ar: 'النَّصُّ (أ)',
    lines: [
      ['غُرْفَةُ نَوْمِ سَامِرٍ صَغِيرَةٌ وَلَكِنَّهَا مُرَتَّبَةٌ.', 'Description: small but tidy'],
      ['فِيهَا سَرِيرٌ وَخِزَانَةٌ وَمَكْتَبٌ.', 'Main items: bed · wardrobe · desk'],
      ['عَلَى المَكْتَبِ يُوجَدُ حَاسُوبٌ وَمِصْبَاحٌ، وَفَوْقَ المَكْتَبِ تُوجَدُ رُفُوفٌ لِلْكُتُبِ.', 'On the desk: computer, lamp · above it: shelves for books'],
      ['لَا يُوجَدُ تِلْفَازٌ فِي الغُرْفَةِ.', 'Not in the room: a television'],
      ['يُحِبُّ سَامِرٌ غُرْفَتَهُ لِأَنَّهَا هَادِئَةٌ.', 'Opinion: he likes it — it is quiet'],
    ],
    notes: 'TEXT A (website, complete). Note لَا يُوجَدُ = there is no (website reading: “locate objects, negatives, quantities, places and opinions”). تُوجَدُ رُفُوفٌ = a plural of things with the feminine verb.',
  },
  {
    type: 'glossed', stage: 'wedo', flex: true, eyebrow: 'We do · reading · Text B (website) · FLEX / Stretch', title: 'Layla’s kitchen', ar: 'النَّصُّ (ب)',
    lines: [
      ['مَطْبَخُ لَيْلَى وَاسِعٌ وَحَدِيثٌ.', 'Description: spacious and modern'],
      ['فِيهِ ثَلَّاجَةٌ كَبِيرَةٌ وَفُرْنٌ وَمَوْقِدٌ وَغَسَّالَةُ صُحُونٍ.', 'Appliances: fridge · oven · cooker · dishwasher'],
      ['تُوجَدُ خَزَائِنُ بَيْضَاءُ كَثِيرَةٌ،', 'Many white cupboards (plural of things)'],
      ['وَفِي الوَسَطِ تُوجَدُ طَاوِلَةٌ مَعَ سِتَّةِ كَرَاسِي.', 'In the middle: a table with six chairs'],
      ['تُحِبُّ لَيْلَى المَطْبَخَ لِأَنَّهُ مُضِيءٌ وَنَظِيفٌ.', 'Opinion: bright and clean (kitchen m. → li’annahu)'],
    ],
    notes: 'TEXT B (website, complete). Stretch: why لِأَنَّهُ here but لِأَنَّهَا in Text A? (مَطْبَخٌ is masculine, غُرْفَةٌ feminine.)',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions (website)', title: 'Samir or Layla?', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 9,
    questions: bank(4, 'readingQuiz', [1, 3, 4, 8, 9]),
    side: { kind: 'info', head: 'FIND THE EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Object? Negative? Number? Place?\nFind the exact Arabic words.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading questions 2, 4, 5 (Samir) and 9, 10 (Layla — Core may skip). The other 7 are homework.',
    answerNotes: 'A student reads aloud the evidence phrase (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'مَاذَا يُوجَدُ فِي غُرْفَةِ النَّوْمِ؟' },
      { route: 'develop', ar: 'مَاذَا يُوجَدُ فِي المَطْبَخِ؟' },
      { route: 'develop', ar: 'مَاذَا يُوجَدُ فِي غُرْفَةِ الجُلُوسِ؟' },
      { route: 'stretch', ar: 'مَا غُرْفَتُكَ المُفَضَّلَةُ؟ صِفْهَا وَقُلْ لِمَاذَا.' },
    ],
    stems: [
      { route: 'core', ar: 'فِي غُرْفَةِ النَّوْمِ ______ وَ ______ .' },
      { route: 'develop', ar: 'يُوجَدُ ______ ، وَتُوجَدُ ______ .' },
      { route: 'develop', ar: 'هُنَاكَ ______ وَ ______ كَرَاسِي.' },
      { route: 'stretch', ar: 'أُحِبُّ ______ لِأَنَّهَا / لِأَنَّهُ ______ .' },
    ],
    modelEn: ['What is there in the bedroom?', 'The bedroom is spacious and quiet. In it there is a big bed and a small desk.'],
    notes: `WEBSITE ROOM-TOUR STUDIO: name the room, list at least six items, describe colours or size, and give an opinion with a reason. Room cards (website):
${prompts.map((r) => `• ${r.title}: ${r.detail}`).join('\n')}
Website checklist (listener ticks 1–6): room named · six objects · يُوجَدُ / تُوجَدُ · colours or size · reason with لِأَنَّ · clear delivery.`,
  }),
  F.routesSlide(site, {
    core: { amount: '4–5 sentences', how: 'Draw one room, label eight items, then four sentences: fī ghurfatī … (no verb needed).' },
    develop: { amount: '6–8 sentences', how: 'Yūjadu / tūjadu for every item, two descriptions, one plural, an opinion.' },
    stretch: { amount: '8+ sentences', how: 'Add colours (next lesson preview), positions (on, beside, above) and kathīra with a plural.' },
  }),
  F.framesSlide({
    core: [
      { en: 'In my room there is a bed.', ar: 'فِي غُرْفَتِي سَرِيرٌ.' },
      { en: 'There is a desk (m.).', ar: 'يُوجَدُ مَكْتَبٌ.' },
      { en: 'There is a wardrobe (f.).', ar: 'تُوجَدُ خِزَانَةٌ.' },
      { en: 'There is no television.', ar: 'لَا يُوجَدُ تِلْفَازٌ.' },
      { en: 'My room is big / small.', ar: 'غُرْفَتِي كَبِيرَةٌ / صَغِيرَةٌ.' },
    ],
    develop: [
      { en: 'On the desk there is …', ar: 'عَلَى المَكْتَبِ يُوجَدُ ______ .' },
      { en: 'Beside the window there is …', ar: 'بِجَانِبِ النَّافِذَةِ تُوجَدُ ______ .' },
      { en: 'There are many chairs.', ar: 'تُوجَدُ كَرَاسِي كَثِيرَةٌ.' },
      { en: 'There is a table and four chairs.', ar: 'هُنَاكَ طَاوِلَةٌ وَأَرْبَعَةُ كَرَاسِي.' },
      { en: 'I love … because it is …', ar: 'أُحِبُّ ______ لِأَنَّهَا ______ .' },
    ],
    bank: ['سَرِيرٌ', 'خِزَانَةٌ', 'طَاوِلَةٌ', 'كُرْسِيٌّ / كَرَاسِي', 'أَرِيكَةٌ', 'تِلْفَازٌ', 'مِصْبَاحٌ', 'مِرْآةٌ', 'رُفُوفٌ', 'يُوجَدُ', 'تُوجَدُ', 'لِأَنَّ'],
  }),
  F.modelSlide(site,
    'The bedroom is spacious and comfortable. In it there is a big bed and a small desk. There is a white wardrobe beside the window, and there is a brown rug on the floor. On the desk there is a lamp and a computer. I love this room because it is quiet.',
    ['يُوجَدُ + masculine item', 'تُوجَدُ + feminine item', 'a position', 'لِأَنَّهَا'],
    'Website model description (bedroom scene). Stretch: find the two colours (بَيْضَاءُ، بُنِّيَّةٌ) — next lesson.'),
  F.selfCheckSlide([
    { route: 'core', text: 'I named at least eight items.' },
    { route: 'core', text: 'I wrote “in my room there is …”.' },
    { route: 'develop', text: 'Masculine item → yūjadu; feminine item → tūjadu.' },
    { route: 'develop', text: 'I used one plural correctly.' },
    { route: 'stretch', text: 'Plural of things → kathīra (f. sing.).' },
  ]),
  F.exitTicket(bank(4, 'finalQuiz', [0, 6, 7]), 16),
  F.prepSlide({
    ...NEXT,
    words: [['أَحْمَرُ', 'red', 'f. حَمْرَاءُ'], ['أَزْرَقُ', 'blue', 'f. زَرْقَاءُ'], ['أَخْضَرُ', 'green', 'f. خَضْرَاءُ'], ['أَبْيَضُ', 'white', 'f. بَيْضَاءُ'], ['أَسْوَدُ', 'black', 'f. سَوْدَاءُ']],
    questionEn: 'What colour is your favourite thing at home? Write it in Arabic.',
    questionAr: 'مَا لَوْنُكَ المُفَضَّلُ؟',
    homework: {
      core: 'Website F3-L04: the Furniture Mission (14) and the picture game.',
      develop: 'Website writing task: describe one room in 6–8 sentences with yūjadu / tūjadu.',
      stretch: 'Redesign a room: label eight items and write eight sentences with positions and a plural.',
    },
    wordsSource: 'The five words come from the website F3-L05 colour bank (masculine and feminine forms).',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: look at the item — yūjadu (m.) · tūjadu (f.).' }),
];

module.exports = { meta, slides };
