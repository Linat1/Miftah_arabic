'use strict';
/*
 * F3-L06 · Household Appliances and Daily Routines
 * Website: Pathways › Foundation › F3 › Lesson 6. The eight-question home-language bridge, the appliance vault (10 active +
 * wider recognition bank) and the 16-question check, “say what each appliance is used for” and the 12-question function
 * check, the power verbs أَسْتَخْدِمُ / أُشَغِّلُ / أُطْفِئُ with يَعْمَلُ / تَعْمَلُ and object endings (14-question laboratory),
 * routine language (time · frequency · sequence, 12-question check), the timeline studio, the Appliance Routine Mission (14),
 * Omar’s routine (listening), Amira’s evening and the kitchen problem (reading), the routine-tour speaking studio, the
 * connected appliance routine and the 16-question checkpoint.
 */
const F = require('./f3-common');
const game = require('../site-data/pathway-visual-games.json')['f3-l06'];
const { q, bank, banks } = F;

const meta = F.meta({
  n: 6, fileTitle: 'Household_Appliances_and_Daily_Routines', chip: 'Appliances',
  title: 'Household Appliances and Daily Routines', arabic: 'الأَجْهِزَةُ المَنْزِلِيَّةُ وَالرُّوتِينُ اليَوْمِيُّ',
  focus: 'Name the appliances in a home, say what each is used for, switch them on and off accurately and build a clear routine with time, frequency and sequence words.',
  icon: 'FaPlug', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F3-L07', nextTitle: 'My Neighbourhood — Places Near My Home', nextAr: 'حَيِّي — الأَمَاكِنُ القَرِيبَةُ مِنْ بَيْتِي' };
const AR = /[؀-ۿ]/;
const rounds = banks.l06.rounds.map((r) => F.w({ ...r, q: AR.test(r.prompt) ? r.prompt : `${r.title}: ${r.prompt}` }));
const prompts = banks.l06.prompts;
const N = (pl, g, use) => ({ tag: g, forms: [{ l: 'pl.', ar: pl }, { l: 'use', ar: use }] });

const site = {
  speaking: {
    context: 'Give a home-routine tour',
    model: [
      ['A', 'مَاذَا تَفْعَلُ فِي الصَّبَاحِ؟', 'What do you do in the morning?'],
      ['B', 'أَوَّلًا أُشَغِّلُ الغَلَّايَةَ، ثُمَّ أَسْتَخْدِمُ الحَاسُوبَ لِلدِّرَاسَةِ.', 'First I switch on the kettle, then I use the computer to study.'],
    ],
  },
  writing: {
    prompt: 'Website writing task: 6–8 connected sentences about a real or invented home routine — at least five appliances, three power or purpose verbs, three sequence words and two time or frequency phrases.',
    checklist: ['Five appliances.', 'أَسْتَخْدِمُ · أُشَغِّلُ · أُطْفِئُ', 'أَوَّلًا · ثُمَّ · بَعْدَ ذَلِكَ · أَخِيرًا', 'Two time or frequency phrases.'],
    model: 'فِي الصَّبَاحِ أُشَغِّلُ الغَلَّايَةَ الكَهْرَبَائِيَّةَ. بَعْدَ ذَلِكَ أَسْتَخْدِمُ الحَاسُوبَ لِلدِّرَاسَةِ. بَعْدَ المَدْرَسَةِ أَضَعُ المَلَابِسَ فِي الغَسَّالَةِ، ثُمَّ أُشَغِّلُهَا. أَحْيَانًا أُسَخِّنُ الطَّعَامَ بِالمِيكْرُوويفِ. فِي المَسَاءِ أُشَغِّلُ غَسَّالَةَ الصُّحُونِ، ثُمَّ أُشَاهِدُ التِّلْفَازَ. أَخِيرًا أُطْفِئُ التِّلْفَازَ قَبْلَ النَّوْمِ.',
  },
  differentiation: {
    core: 'Six accurate sentences using the model and the word banks.',
    develop: 'Seven or eight connected sentences, including ya‘malu / ta‘malu.',
    stretch: 'Add a problem, a repair action and object endings (ushaghghiluhā).',
  },
  mistakes: [
    { wrong: 'الثَّلَّاجَةُ يَعْمَلُ.', right: 'الثَّلَّاجَةُ تَعْمَلُ.', why: 'The fridge is feminine: it works = ta‘malu.' },
    { wrong: 'أُشَغِّلُ التِّلْفَازَ، ثُمَّ أُطْفِئُهَا.', right: 'أُشَغِّلُ التِّلْفَازَ، ثُمَّ أُطْفِئُهُ.', why: 'The television is masculine: “it” = -hu.' },
    { wrong: 'أُسَخِّنُ الطَّعَامَ بِالثَّلَّاجَةِ.', right: 'أُسَخِّنُ الطَّعَامَ بِالمِيكْرُوويفِ.', why: 'Match the action to the right appliance.' },
  ],
  listening: {
    title: 'Omar’s appliance routine',
    script: 'فِي أَيَّامِ الدِّرَاسَةِ أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ. أَوَّلًا، أُشَغِّلُ الغَلَّايَةَ الكَهْرَبَائِيَّةَ وَأَتَنَاوَلُ الفُطُورَ. ثُمَّ أَسْتَخْدِمُ الحَاسُوبَ لِلدِّرَاسَةِ عِشْرِينَ دَقِيقَةً. بَعْدَ المَدْرَسَةِ أُسَاعِدُ أُمِّي. أَحْيَانًا أَضَعُ المَلَابِسَ فِي الغَسَّالَةِ، وَلَكِنَّنِي لَا أَسْتَخْدِمُ المُجَفِّفَةَ كُلَّ يَوْمٍ. فِي المَسَاءِ أُشَغِّلُ غَسَّالَةَ الصُّحُونِ بَعْدَ العَشَاءِ. فِي السَّاعَةِ الثَّامِنَةِ أُشَاهِدُ بَرْنَامَجًا عَلَى التِّلْفَازِ، ثُمَّ أُطْفِئُهُ. قَبْلَ النَّوْمِ أُطْفِئُ الحَاسُوبَ وَالتِّلْفَازَ، وَلَكِنَّ الثَّلَّاجَةَ تَعْمَلُ طَوَالَ اللَّيْلِ.',
    questions: bank(6, 'listeningQuiz', [0, 1, 4, 6, 9]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 6,
    source: 'Website sections used: the eight-question home-language bridge, the appliance vault (10 active appliances + wider recognition bank) and the 16-question appliance check, “say what each appliance is used for” and the 12-question function check, power verbs and appliance agreement (14-question laboratory), routine language (time, frequency, sequence) and the 12-question check, the timeline studio, the Appliance Routine Mission (14), Omar’s routine (listening, 10), Amira’s evening and the kitchen problem (reading, 12), the routine-tour studio (4 prompts), the connected routine and the 16-question checkpoint. Picture match: website visual game (rooms).',
    support: `• Core: 6 appliances + “I use / I switch on / I switch off” + first, then, finally. Develop: the purpose pattern (أَسْتَخْدِمُ … لِـ / فِي / بِـ) and يَعْمَلُ / تَعْمَلُ. Stretch: object endings (أُشَغِّلُهُ / أُشَغِّلُهَا) and an appliance problem.
• Website “Foundation focus”: learn the useful “I” sentence patterns first — the full present-tense system returns later.
• Routines vary between homes: students may describe a real or an invented routine; nobody has to say which appliances their family owns.
• Urdu bridge: کمپیوٹر = حَاسُوبٌ (Arabic also uses كُمْبِيُوتَر), ٹی وی = تِلْفَازٌ, اِسْتِعْمَال / أَسْتَخْدِمُ (use), صُبْح / صَبَاحٌ, شام / مَسَاءٌ.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Appliances and what they do, then switch on, switch off and it works.', wedo: 'Routine mission, listen to Omar, read two home texts.', next: 'F3-L07' }),
  F.doNow({
    questions: [
      q('What does فُرْنٌ mean?', ['an oven', 'a fridge', 'a kettle'], 'Prepared at home (F3-L05).'),
      q('What does غَلَّايَةٌ mean?', ['a kettle', 'an iron', 'an air conditioner'], 'Prepared at home (F3-L05).'),
      ...bank(6, 'retrievalQuiz', [1, 2, 7]),
    ],
    keyIdea: { text: 'The appliance decides the verb: a masculine appliance → ya‘malu; a feminine appliance → ta‘malu.', ar: 'التِّلْفَازُ {w|يَـ}عْمَلُ · الثَّلَّاجَةُ {e|تَـ}عْمَلُ' },
    retrieves: 'Questions 1–2 test two of the five appliance words prepared at home at the end of F3-L05. Questions 3–5 are the website “home-language bridge” (where is a fridge, the feminine appliance, every day).',
  }),
  F.objectivesSlide([
    'Name and recognise the full appliance bank.',
    'Explain what common appliances are used for.',
    'Use “I use / I switch on / I switch off” accurately.',
    'Describe a connected home routine with time and sequence words.',
  ], {
    core: ['I can name six appliances.', 'I can say “I switch on / I switch off …”.'],
    develop: ['I can say what an appliance is for.', 'I can use “it works” with the right letter.'],
    stretch: ['I can use object endings (-hu / -hā).', 'I can describe an appliance problem.'],
  }, 2, 'Website “By the end” aims (left) and the website writing Core / Develop / Stretch routes (right).'),
  F.keywordsSlide({
    text: 'Appliances, three power verbs and routine words. Core: six appliances, three verbs and four sequence words.',
    groups: [
      { head: 'GROUP 1', name: 'Appliances · 10 + wider bank' },
      { head: 'GROUP 2', name: 'Power and purpose verbs' },
      { head: 'GROUP 3', name: 'Time · frequency · sequence' },
    ],
    bridge: [
      { ar: 'صَبَاحٌ', urdu: 'صبح', tr: 'ṣabāḥ', en: 'morning' },
      { ar: 'مَسَاءٌ', urdu: 'شام (مساء)', tr: 'masā’', en: 'evening' },
      { ar: 'أَسْتَخْدِمُ', urdu: 'استعمال', tr: 'astakhdimu', en: 'I use (same idea)' },
      { ar: 'كَهْرَبَاءٌ', urdu: 'کہربا / بجلی', tr: 'kahrabā’', en: 'electricity' },
      { ar: 'أَخِيرًا', urdu: 'آخر', tr: 'akhīran', en: 'finally' },
    ],
    notes: 'URDU BRIDGE: صبح (morning), آخر (end / finally) and کہربا are shared roots. استعمال (Urdu “use”) is from the same family of Arabic verbs as اِسْتِعْمَالٌ — Arabic today prefers أَسْتَخْدِمُ.',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · the kitchen appliances (website) · 1 of 2', title: 'Fridge, oven, microwave …', ar: 'أَجْهِزَةُ المَطْبَخِ',
    items: [
      { n: 1, ar: 'ثَلَّاجَةٌ', en: 'fridge', tr: 'thal-lā-ja', core: true, ...N('ثَلَّاجَاتٌ', 'f.', 'أَحْفَظُ الطَّعَامَ فِيهَا.') },
      { n: 2, ar: 'فُرْنٌ', en: 'oven', tr: 'furn', core: true, ...N('أَفْرَانٌ', 'm.', 'أَطْبُخُ الطَّعَامَ فِيهِ.') },
      { n: 3, ar: 'مِيكْرُوويفٌ', en: 'microwave', tr: 'mīk-rū-wayf', core: true, ...N('مِيكْرُوويفَاتٌ', 'm.', 'أُسَخِّنُ الطَّعَامَ بِهِ.') },
      { n: 4, ar: 'غَسَّالَةُ الصُّحُونِ', en: 'dishwasher', tr: 'ghas-sā-lat aṣ-ṣu-ḥūn', core: true, ...N('غَسَّالَاتُ الصُّحُونِ', 'f.', 'أَغْسِلُ الصُّحُونَ بِهَا.') },
      { n: 5, ar: 'غَلَّايَةٌ', en: 'kettle', tr: 'ghal-lā-ya', ...N('غَلَّايَاتٌ', 'f.', 'أُشَغِّلُهَا فِي الصَّبَاحِ.') },
      { n: 6, ar: 'مُكَيِّفُ هَوَاءٍ', en: 'air conditioner', tr: 'mu-kay-yif ha-wā’', ...N('مُكَيِّفَاتٌ', 'm.', 'أُبَرِّدُ الغُرْفَةَ بِهِ.') },
    ],
    notes: 'KITCHEN AND COMFORT (website appliance vault). Say each with its “use” sentence. Gender check: fridge, dishwasher, kettle = feminine (ـةٌ); oven, microwave, air conditioner = masculine. Alternative term (website): غَسَّالَةُ الأَطْبَاقِ.',
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · around the home (website) · 2 of 2', title: 'Washing machine, vacuum, TV …', ar: 'أَجْهِزَةُ البَيْتِ',
    items: [
      { n: 7, ar: 'غَسَّالَةُ المَلَابِسِ', en: 'washing machine', tr: 'ghas-sā-lat al-ma-lā-bis', core: true, ...N('غَسَّالَاتٌ', 'f.', 'أَغْسِلُ المَلَابِسَ بِهَا.') },
      { n: 8, ar: 'مُجَفِّفَةُ المَلَابِسِ', en: 'tumble dryer', tr: 'mu-jaf-fi-fat al-ma-lā-bis', ...N('مُجَفِّفَاتٌ', 'f.', 'أُجَفِّفُ المَلَابِسَ بِهَا.') },
      { n: 9, ar: 'مِكْنَسَةٌ كَهْرَبَائِيَّةٌ', en: 'vacuum cleaner', tr: 'mik-na-sa kah-ra-bā-’iy-ya', ...N('مَكَانِسُ', 'f.', 'أُنَظِّفُ الأَرْضِيَّةَ بِهَا.') },
      { n: 10, ar: 'تِلْفَازٌ', en: 'television', tr: 'til-fāz', core: true, ...N('تِلْفَازَاتٌ', 'm.', 'أُشَاهِدُ البَرَامِجَ عَلَيْهِ.') },
      { n: 11, ar: 'حَاسُوبٌ', en: 'computer', tr: 'ḥā-sūb', core: true, ...N('حَوَاسِيبُ', 'm.', 'أَسْتَخْدِمُهُ لِلدِّرَاسَةِ.') },
      { n: 12, ar: 'مِكْوَاةٌ', en: 'iron', tr: 'mik-wā', ...N('مَكَاوٍ', 'f.', 'أَكْوِي المَلَابِسَ بِهَا.') },
    ],
    notes: 'AROUND THE HOME (website). Wider recognition bank (website, for texts): فِيشَةُ كَهْرَبَاءٍ (plug), مِرْوَحَةٌ (fan), مُجَمِّدٌ (freezer), شَوَّايَةٌ (grill), هَاتِفٌ (telephone), مُضَخِّمٌ / مُكَبِّرُ صَوْتٍ (loudspeaker).',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · power verbs and “it works” (website)', title: 'Switch it on, switch it off', ar: 'أَفْعَالُ التَّشْغِيلِ',
    cols: [{ label: 'Verb', w: 2.6, size: 24 }, { label: 'Masculine appliance', w: 3.6, size: 22 }, { label: 'Feminine appliance', w: 3.6, size: 22 }, { label: 'Meaning', w: 2.53 }],
    rows: [
      { core: true, cells: [{ ar: 'أَسْتَخْدِمُ' }, { ar: 'أَسْتَخْدِمُ الحَاسُوبَ' }, { ar: 'أَسْتَخْدِمُ الغَسَّالَةَ' }, 'I use'] },
      { core: true, cells: [{ ar: 'أُشَغِّلُ' }, { ar: 'أُشَغِّلُ التِّلْفَازَ' }, { ar: 'أُشَغِّلُ الغَلَّايَةَ' }, 'I switch on'] },
      { core: true, cells: [{ ar: 'أُطْفِئُ' }, { ar: 'أُطْفِئُ الحَاسُوبَ' }, { ar: 'أُطْفِئُ المِكْوَاةَ' }, 'I switch off'] },
      { cells: [{ ar: 'يَعْمَلُ / تَعْمَلُ' }, { ar: 'التِّلْفَازُ {w|يَـ}عْمَلُ' }, { ar: 'الثَّلَّاجَةُ {e|تَـ}عْمَلُ' }, 'it works'] },
      { cells: [{ ar: 'لَا يَعْمَلُ / لَا تَعْمَلُ' }, { ar: 'الحَاسُوبُ لَا {w|يَـ}عْمَلُ' }, { ar: 'الغَسَّالَةُ لَا {e|تَـ}عْمَلُ' }, 'it does not work'] },
    ],
    foot: 'Develop: the appliance becomes -hu or -hā — ushaghghiluhu (the TV) · uṭfi’uhā (the iron).',
    notes: `GRAMMAR PART 1 — website section 4 “Power verbs and appliance agreement”: three high-value “I” verbs, then the appliance noun decides whether “it works” begins with يـ (masculine) or تـ (feminine).
Object endings (Develop): أَسْتَخْدِمُهُ / أَسْتَخْدِمُهَا · أُشَغِّلُهُ / أُشَغِّلُهَا · أُطْفِئُهُ / أُطْفِئُهَا — “use the ending to avoid repeating the appliance name”.
Practical action bank (website): أَفْتَحُ / أُغْلِقُ (open / close), أُصْلِحُ (repair), أَدْفَعُ / أَجْذِبُ (push / pull).`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · routine language (website)', title: 'When, how often, in what order', ar: 'الوَقْتُ وَالتَّكْرَارُ وَالتَّرْتِيبُ',
    cards: [
      { chip: 'WHEN', color: '1D5FBF', head: 'فِي الصَّبَاحِ', big: 'فِي الصَّبَاحِ · فِي المَسَاءِ · قَبْلَ النَّوْمِ', en: 'in the morning · in the evening · before sleep', clue: 'Also: after noon, at night.' },
      { chip: 'HOW OFTEN', color: 'C77700', head: 'كُلَّ يَوْمٍ', big: 'كُلَّ يَوْمٍ · عَادَةً · أَحْيَانًا · نَادِرًا', en: 'every day · usually · sometimes · rarely', clue: 'Also: often (ghāliban).' },
      { chip: 'ORDER', color: '1E6B52', head: 'أَوَّلًا … أَخِيرًا', big: 'أَوَّلًا · ثُمَّ · بَعْدَ ذَلِكَ · أَخِيرًا', en: 'first · then · after that · finally', clue: 'Begin with first, end with finally.' },
    ],
    error: { text: 'Website model: time + verb + appliance, then a sequence word.', pairs: [['فِي المَسَاءِ أُشَغِّلُ غَسَّالَةَ الصُّحُونِ، ثُمَّ أُشَاهِدُ التِّلْفَازَ.', 'فِي المَسَاءِ غَسَّالَةُ الصُّحُونِ ثُمَّ أَوَّلًا.']] },
    notes: `GRAMMAR PART 2 — website section 5 “Build a clear routine at home”: a routine becomes connected when the listener knows the time, frequency and order of each action.
Recycled routine actions (website): أَسْتَيْقِظُ، أَتَنَاوَلُ الفُطُورَ، أَغْسِلُ المَلَابِسَ، أُنَظِّفُ الغُرْفَةَ، أُسَاعِدُ أُسْرَتِي، أَدْرُسُ، أُشَاهِدُ التِّلْفَازَ، أَنَامُ.
Website connected model: فِي الصَّبَاحِ أَسْتَخْدِمُ الغَلَّايَةَ الكَهْرَبَائِيَّةَ. بَعْدَ ذَلِكَ أَسْتَخْدِمُ الحَاسُوبَ لِلدِّرَاسَةِ. فِي المَسَاءِ أُشَغِّلُ غَسَّالَةَ الصُّحُونِ، ثُمَّ أُشَاهِدُ التِّلْفَازَ. أَخِيرًا أُطْفِئُ التِّلْفَازَ قَبْلَ النَّوْمِ.`,
  },
  F.quickCheck([...bank(6, 'grammarQuiz', [1, 4, 9]), ...bank(6, 'functionQuiz', [2])], 'website power-verb laboratory questions 2, 5 and 10, and function check question 3.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me build an evening routine', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'When', ar: 'فِي المَسَاءِ أَطْبُخُ الطَّعَامَ فِي الفُرْنِ.', think: 'Time first.' },
      { head: 'Switch on', ar: 'بَعْدَ العَشَاءِ أُشَغِّلُ غَسَّالَةَ الصُّحُونِ.', think: 'Verb + appliance.' },
      { head: 'Then', ar: 'ثُمَّ أُشَاهِدُ التِّلْفَازَ، وَأُطْفِئُ{w|هُ} قَبْلَ النَّوْمِ.', think: 'TV is m. → -hu.' },
      { head: 'Finally', ar: 'أَخِيرًا أُطْفِئُ الحَاسُوبَ. الثَّلَّاجَةُ {e|تَـ}عْمَلُ طَوَالَ اللَّيْلِ.', think: 'Fridge is f. → ta‘malu.' },
    ],
    legend: ['w', 'e'], legendLabels: { w: 'MASCULINE', e: 'FEMININE' },
    model: 'فِي المَسَاءِ أَطْبُخُ الطَّعَامَ فِي الفُرْنِ. بَعْدَ العَشَاءِ أُشَغِّلُ غَسَّالَةَ الصُّحُونِ. ثُمَّ أُشَاهِدُ التِّلْفَازَ قَلِيلًا، وَأُطْفِئُ{w|هُ} قَبْلَ النَّوْمِ. أَخِيرًا أُطْفِئُ الحَاسُوبَ، وَلَكِنَّ الثَّلَّاجَةَ {e|تَـ}عْمَلُ طَوَالَ اللَّيْلِ.',
    modelEn: 'In the evening I cook food in the oven. After dinner I switch on the dishwasher. Then I watch a little television and switch it off before sleep. Finally I switch off the computer, but the fridge works all night.',
    notes: 'I DO (3 min) — the website “Evening routine” speaking model plus the listening ending. Think aloud: “Which appliance? masculine or feminine? so -hu or -hā, ya- or ta-?”',
  },
  F.gameSlide({ ...game, title: 'Visual game — Rooms', items: [game.items[1], game.items[2], game.items[3]] }, {
    title: 'Which room? Then name an appliance',
    en: ['This is the kitchen.', 'This is the living room.', 'This is the bathroom.'],
    icons: [[['fa6', 'FaKitchenSet', 'C77700']], [['fa6', 'FaCouch', '1D5FBF']], [['fa6', 'FaShower', '1E6B52']]],
    labels: ['a kitchen', 'a sofa and TV', 'a shower'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6, rooms — retrieval from F3-L03). Follow-up (Develop): name one appliance in each room — فِي المَطْبَخِ ثَلَّاجَةٌ وَفُرْنٌ · فِي غُرْفَةِ الجُلُوسِ تِلْفَازٌ · فِي الحَمَّامِ غَسَّالَةٌ (in many homes).',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website “Appliance Routine Mission”', title: 'Run the routine', ar: 'مُهِمَّةُ الأَجْهِزَةِ وَالرُّوتِينِ',
    seed: 16,
    questions: [rounds[2], rounds[6], rounds[7], rounds[10], rounds[13]],
    side: { kind: 'core', label: 'CORE', text: 'm. appliance → ya‘malu · -hu\nf. appliance → ta‘malu · -hā\nfirst … then … finally' },
    answerSlide: { min: 0, eyebrow: 'We do · Mission answers', title: 'Mission: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 14 mission rounds (function, agreement, reference, sequence, transfer). The other 9 are homework.',
    answerNotes: 'After each answer ask: masculine or feminine appliance? How do you know?',
  },
  F.repairSlide(site, ['Fridge: masculine or feminine?', 'Television → -hu or -hā?', 'Which appliance heats food?']),
  F.listening(site, {
    coreTip: 'Listen twice.\nEight boxes: wake-up, morning, study, after school, evening, TV, before sleep, left on.',
    routes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 5.',
    gloss: [
      ['فِي أَيَّامِ الدِّرَاسَةِ أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ.', 'On school days I wake up at half past six.'],
      ['أَوَّلًا، أُشَغِّلُ الغَلَّايَةَ الكَهْرَبَائِيَّةَ وَأَتَنَاوَلُ الفُطُورَ. ثُمَّ أَسْتَخْدِمُ الحَاسُوبَ لِلدِّرَاسَةِ عِشْرِينَ دَقِيقَةً.', 'First I switch on the kettle and have breakfast. Then I use the computer to study for twenty minutes.'],
      ['بَعْدَ المَدْرَسَةِ أُسَاعِدُ أُمِّي. أَحْيَانًا أَضَعُ المَلَابِسَ فِي الغَسَّالَةِ، وَلَكِنَّنِي لَا أَسْتَخْدِمُ المُجَفِّفَةَ كُلَّ يَوْمٍ.', 'After school I help my mother. Sometimes I put the clothes in the washing machine, but I do not use the dryer every day.'],
      ['فِي المَسَاءِ أُشَغِّلُ غَسَّالَةَ الصُّحُونِ بَعْدَ العَشَاءِ. فِي السَّاعَةِ الثَّامِنَةِ أُشَاهِدُ بَرْنَامَجًا عَلَى التِّلْفَازِ، ثُمَّ أُطْفِئُهُ.', 'In the evening I switch on the dishwasher after dinner. At eight I watch a programme on TV, then switch it off.'],
      ['قَبْلَ النَّوْمِ أُطْفِئُ الحَاسُوبَ وَالتِّلْفَازَ، وَلَكِنَّ الثَّلَّاجَةَ تَعْمَلُ طَوَالَ اللَّيْلِ.', 'Before sleep I switch off the computer and TV, but the fridge works all night.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · Text A (website)', title: 'Amira’s evening', ar: 'النَّصُّ (أ)',
    lines: [
      ['تَعُودُ أَمِيرَةُ إِلَى البَيْتِ فِي السَّاعَةِ الرَّابِعَةِ.', 'Home at four o’clock'],
      ['أَوَّلًا تَفْتَحُ الثَّلَّاجَةَ وَتُحَضِّرُ وَجْبَةً خَفِيفَةً. ثُمَّ تَسْتَخْدِمُ المِيكْرُوويفَ لِتَسْخِينِ الطَّعَامِ.', 'First: fridge + a snack · then: microwave to heat food'],
      ['بَعْدَ ذَلِكَ تَضَعُ المَلَابِسَ فِي الغَسَّالَةِ، وَتَسْتَخْدِمُ المِكْنَسَةَ الكَهْرَبَائِيَّةَ لِتَنْظِيفِ غُرْفَتِهَا.', 'After that: washing machine · vacuum for her room'],
      ['فِي المَسَاءِ تَدْرُسُ عَلَى الحَاسُوبِ، وَلَكِنَّهَا لَا تُشَغِّلُ التِّلْفَازَ فِي أَيَّامِ الدِّرَاسَةِ.', 'Evening: studies on the computer · no TV on school days'],
      ['أَخِيرًا تُطْفِئُ الحَاسُوبَ فِي السَّاعَةِ العَاشِرَةِ.', 'Finally: computer off at ten'],
    ],
    notes: 'TEXT A (website, complete). Notice the “she” forms: تَسْتَخْدِمُ، تُشَغِّلُ، تُطْفِئُ — the same verbs as today with تـ instead of أَ / أُ. Recognition only at Foundation.',
  },
  {
    type: 'glossed', stage: 'wedo', flex: true, eyebrow: 'We do · reading · Text B (website) · FLEX / Stretch', title: 'A problem in the kitchen', ar: 'النَّصُّ (ب)',
    lines: [
      ['فِي صَبَاحِ السَّبْتِ لَا تَعْمَلُ غَسَّالَةُ الصُّحُونِ.', 'Saturday morning: the dishwasher does not work'],
      ['يَفْتَحُ أَبِي بَابَهَا، وَلَكِنَّهَا لَا تَبْدَأُ.', 'Dad opens its door — it does not start'],
      ['أَوَّلًا يُطْفِئُ الجِهَازَ، ثُمَّ يَفْحَصُ فِيشَةَ الكَهْرَبَاءِ.', 'First: switches it off · then: checks the plug'],
      ['بَعْدَ ذَلِكَ يُغْلِقُ البَابَ جَيِّدًا وَيُشَغِّلُهَا مَرَّةً أُخْرَى. الآنَ تَعْمَلُ الغَسَّالَةُ.', 'After that: closes the door well, switches it on again — it works'],
      ['أَمَّا الثَّلَّاجَةُ فَتَعْمَلُ جَيِّدًا، وَلَا نَحْتَاجُ إِلَى إِصْلَاحِهَا.', 'The fridge works well — no repair needed'],
    ],
    notes: 'TEXT B (website, complete). Stretch: find the object ending يُشَغِّلُهَا (it = the dishwasher, feminine) and the ammā … fa- structure. Model for the Stretch writing (a problem and a repair).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions (website)', title: 'Amira or the kitchen?', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 7,
    questions: bank(6, 'readingQuiz', [1, 2, 4, 6, 7]),
    side: { kind: 'info', head: 'EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Find the sequence word,\nthen the appliance after it.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading questions 2, 3, 5, 7 and 8 (7–8 are Text B — Core may skip them). The other 7 are homework.',
    answerNotes: 'A student reads aloud the evidence phrase (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'مَاذَا تُشَغِّلُ فِي الصَّبَاحِ؟' },
      { route: 'develop', ar: 'لِمَاذَا تَسْتَخْدِمُ الحَاسُوبَ؟' },
      { route: 'develop', ar: 'مَاذَا تَفْعَلُ فِي المَسَاءِ؟ وَكَمْ مَرَّةً؟' },
      { route: 'stretch', ar: 'جِهَازٌ لَا يَعْمَلُ: مَاذَا تَفْعَلُ أَوَّلًا؟' },
    ],
    stems: [
      { route: 'core', ar: 'فِي الصَّبَاحِ أُشَغِّلُ ______ .' },
      { route: 'develop', ar: 'أَسْتَخْدِمُ الحَاسُوبَ لِـ ______ .' },
      { route: 'develop', ar: 'فِي المَسَاءِ ______ ، ثُمَّ ______ . أَحْيَانًا ______ .' },
      { route: 'stretch', ar: '______ لَا تَعْمَلُ. أَوَّلًا أُطْفِئُهَا، ثُمَّ ______ .' },
    ],
    modelEn: ['What do you do in the morning?', 'First I switch on the kettle, then I use the computer to study.'],
    notes: `WEBSITE SPEAKING STUDIO “Give a home-routine tour” (45–60 s): what, when, how often, sequence and one appliance problem or opinion. Random prompts (website):
${prompts.map((r) => `• ${r.title}: ${r.detail}`).join('\n')}
Website checklist (1–6): four appliances · أَسْتَخْدِمُ / أُشَغِّلُ / أُطْفِئُ · two time or frequency phrases · clear sequence · يَعْمَلُ / تَعْمَلُ or an object ending · clear delivery.
The prompts are teacher-made from the website studio steps.`,
  }),
  F.routesSlide(site, {
    core: { amount: '6 sentences', how: 'Use the model and the word banks: time + verb + appliance.' },
    develop: { amount: '7–8 sentences', how: 'Five appliances, three sequence words and ya‘malu / ta‘malu.' },
    stretch: { amount: '8+ sentences', how: 'Add a problem and a repair, with -hu / -hā endings.' },
  }),
  F.framesSlide({
    core: [
      { en: 'In the morning I switch on the kettle.', ar: 'فِي الصَّبَاحِ أُشَغِّلُ الغَلَّايَةَ.' },
      { en: 'I use the computer to study.', ar: 'أَسْتَخْدِمُ الحَاسُوبَ لِلدِّرَاسَةِ.' },
      { en: 'First …, then …', ar: 'أَوَّلًا ______ ، ثُمَّ ______ .' },
      { en: 'Finally I switch off the TV.', ar: 'أَخِيرًا أُطْفِئُ التِّلْفَازَ.' },
      { en: 'Sometimes I heat food in the microwave.', ar: 'أَحْيَانًا أُسَخِّنُ الطَّعَامَ بِالمِيكْرُوويفِ.' },
    ],
    develop: [
      { en: 'The fridge works all night.', ar: 'الثَّلَّاجَةُ تَعْمَلُ طَوَالَ اللَّيْلِ.' },
      { en: 'The computer does not work.', ar: 'الحَاسُوبُ لَا يَعْمَلُ.' },
      { en: 'I switch it on (the washing machine).', ar: 'أُشَغِّلُهَا.' },
      { en: 'I switch it off (the TV).', ar: 'أُطْفِئُهُ.' },
      { en: 'After that I check the plug.', ar: 'بَعْدَ ذَلِكَ أَفْحَصُ فِيشَةَ الكَهْرَبَاءِ.' },
    ],
    bank: ['ثَلَّاجَةٌ', 'فُرْنٌ', 'مِيكْرُوويفٌ', 'غَسَّالَةٌ', 'تِلْفَازٌ', 'حَاسُوبٌ', 'أَسْتَخْدِمُ', 'أُشَغِّلُ', 'أُطْفِئُ', 'أَوَّلًا', 'ثُمَّ', 'أَخِيرًا'],
  }),
  F.modelSlide(site,
    'In the morning I switch on the electric kettle. After that I use the computer to study. After school I put the clothes in the washing machine, then switch it on. Sometimes I heat food in the microwave. In the evening I switch on the dishwasher, then watch television. Finally I switch off the television before sleep.',
    ['time phrases', 'power verbs', 'sequence words', 'object ending (-hā)'],
    'Website “connected model” and the speaking models, joined. Stretch: add the Text B problem (غَسَّالَةُ الصُّحُونِ لَا تَعْمَلُ …).'),
  F.selfCheckSlide([
    { route: 'core', text: 'I named at least five appliances.' },
    { route: 'core', text: 'I used first, then and finally.' },
    { route: 'develop', text: 'I said what an appliance is used for.' },
    { route: 'develop', text: 'ya‘malu with a masculine appliance, ta‘malu with a feminine one.' },
    { route: 'stretch', text: 'I used -hu / -hā and described a problem.' },
  ]),
  F.exitTicket(bank(6, 'finalQuiz', [4, 7, 10]), 16),
  F.prepSlide({
    ...NEXT,
    words: [['حَيٌّ', 'a neighbourhood', 'pl. أَحْيَاءٌ'], ['شَارِعٌ', 'a street', 'pl. شَوَارِعُ'], ['مَسْجِدٌ', 'a mosque', 'pl. مَسَاجِدُ'], ['مُسْتَشْفًى', 'a hospital', 'pl. مُسْتَشْفَيَاتٌ'], ['مَكْتَبَةٌ', 'a library / bookshop', 'pl. مَكْتَبَاتٌ']],
    questionEn: 'What is near your home? (A real or an invented neighbourhood is fine.)',
    questionAr: 'مَاذَا يُوجَدُ قُرْبَ بَيْتِكَ؟',
    homework: {
      core: 'Website F3-L06: the Appliance Routine Mission (14) and the picture game.',
      develop: 'Website writing task: a connected appliance routine in 7–8 sentences.',
      stretch: 'Write a routine with a problem and a repair (Text B as a model), using -hu / -hā.',
    },
    wordsSource: 'The five words come from the website F3-L07 neighbourhood place vault.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: m. appliance → ya‘malu, -hu · f. appliance → ta‘malu, -hā.' }),
];

module.exports = { meta, slides };
