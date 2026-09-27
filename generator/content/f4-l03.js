'use strict';
/*
 * F4-L03 · Classroom Objects — What Is in Your Bag?
 * Website: Pathways › Foundation › F4 › Lesson 3. The F4 retrieval bridge, the classroom-object vault (12 official
 * items with gender and plurals + wider practical bank; desk / office), هَذَا / هَذِهِ by noun gender (14), possession
 * (عِنْدِي / عِنْدَكَ / عِنْدَكِ / عِنْدَهُ / عِنْدَهَا, negative لَيْسَ عِنْدِي; 12), location and counting (12), the school-bag
 * inventory, Pack the Bag Mission (14), Layla’s bag (listening), Omar and Huda (reading), speaking, the 7–9-sentence
 * description and the 16-question checkpoint.
 */
const F = require('./f4-common');
const game = require('../site-data/pathway-visual-games.json')['f4-l03'];
const { q, bank, banks } = F;

const meta = F.meta({
  n: 3, fileTitle: 'Classroom_Objects_What_Is_in_Your_Bag', chip: 'Classroom Objects',
  title: 'Classroom Objects — What Is in Your Bag?', arabic: 'أَدَوَاتُ الفَصْلِ — مَاذَا فِي حَقِيبَتِكَ؟',
  focus: 'Name everyday classroom objects, choose hādhā or hādhihi by gender, say what you have and do not have, and locate objects precisely in a bag or on a desk.',
  icon: 'FaBagShopping', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F4-L04', nextTitle: 'Likes, Dislikes and Preferences', nextAr: 'مَا أُحِبُّ وَمَا لَا أُحِبُّ وَمَا أُفَضِّلُ' };
const AR = /[؀-ۿ]/;
const rounds = banks.l03.rounds.map((r) => F.w({ ...r, q: AR.test(r.prompt) ? r.prompt : `${r.title}: ${r.prompt}` }));
const prompts = banks.l03.prompts;
const O = (g, pl) => ({ tag: g, forms: [{ l: 'pl.', ar: pl }, { l: 'this', ar: g === 'm.' ? 'هَذَا' : 'هَذِهِ' }] });

const site = {
  speaking: {
    context: 'Speak about classroom objects',
    model: [
      ['A', 'هَلْ عِنْدَكِ مِسْطَرَةٌ؟', 'Do you (f.) have a ruler?'],
      ['B', 'نَعَمْ، عِنْدِي مِسْطَرَةٌ. هَلْ عِنْدَكِ غِرَاءٌ؟ — لَا، لَيْسَ عِنْدِي غِرَاءٌ.', 'Yes, I have a ruler. Do you have glue? — No, I don’t have glue.'],
    ],
  },
  writing: {
    prompt: 'Website writing task: 7–9 connected sentences about a real or invented school bag or desk — at least eight objects, two demonstratives, one negative sentence, two locations and two extra details (colour, quantity or reason).',
    checklist: ['هَذَا / هَذِهِ by the noun’s gender.', 'عِنْدِي … وَلَيْسَ عِنْدِي …', 'Two locations: فِي حَقِيبَتِي، عَلَى مَكْتَبِي …', 'A colour or a number.'],
    model: 'هَذِهِ حَقِيبَتِي المَدْرَسِيَّةُ. فِي حَقِيبَتِي كِتَابٌ وَدَفْتَرَانِ وَثَلَاثَةُ أَقْلَامٍ وَمِسْطَرَةٌ وَمِمْحَاةٌ. عِنْدِي أَيْضًا آلَةٌ حَاسِبَةٌ صَغِيرَةٌ، وَلَكِنْ لَيْسَ عِنْدِي قَامُوسٌ اليَوْمَ. عَلَى مَكْتَبِي حَاسُوبٌ مَحْمُولٌ، وَبِجَانِبِ الحَاسُوبِ مِقْلَمَةٌ زَرْقَاءُ. تَحْتَ الكُرْسِيِّ حَقِيبَةُ صَدِيقَتِي.',
  },
  differentiation: {
    core: 'Seven accurate modelled sentences.',
    develop: 'Add plurals, colours and two location phrases.',
    stretch: 'Compare two bags or explain which objects are most useful.',
  },
  mistakes: [
    { wrong: 'هَذَا مِسْطَرَةٌ.', right: 'هَذِهِ مِسْطَرَةٌ.', why: 'Ruler is feminine (ـة): hādhihi.' },
    { wrong: 'يَا مَرْيَمُ، هَلْ عِنْدَكَ قَلَمٌ؟', right: 'يَا مَرْيَمُ، هَلْ عِنْدَكِ قَلَمٌ؟', why: 'One female listener: ‘indaki.' },
    { wrong: 'لَا عِنْدِي غِرَاءٌ.', right: 'لَيْسَ عِنْدِي غِرَاءٌ.', why: 'I don’t have = laysa ‘indī.' },
  ],
  listening: {
    title: 'Layla’s school bag',
    script: 'اِسْمِي لَيْلَى. فِي حَقِيبَتِي كِتَابُ العُلُومِ، وَدَفْتَرَانِ، وَثَلَاثَةُ أَقْلَامٍ، وَمِسْطَرَةٌ، وَمِمْحَاةٌ. لَيْسَ عِنْدِي قَامُوسٌ اليَوْمَ. عَلَى مَكْتَبِي حَاسُوبٌ مَحْمُولٌ، وَبِجَانِبِ الحَاسُوبِ مِقْلَمَةٌ زَرْقَاءُ. تَحْتَ الكُرْسِيِّ حَقِيبَةُ صَدِيقَتِي. أَسْتَخْدِمُ القَلَمَ وَالدَّفْتَرَ فِي حِصَّةِ اللُّغَةِ العَرَبِيَّةِ.',
    questions: bank(3, 'listening', [1, 4, 5, 7, 8]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 3,
    source: 'Website sections used: the eight-question F4 retrieval bridge, the classroom-object vault (12 official items with gender and plurals + wider practical bank; مَكْتَبٌ = desk or office) and the 16-question check, هَذَا / هَذِهِ (14), possession عِنْدِي / عِنْدَكَ / عِنْدَكِ / عِنْدَهُ / عِنْدَهَا and لَيْسَ عِنْدِي (12), location and counting (12), the school-bag inventory, Pack the Bag Mission (14), Layla’s bag (listening, 10), Omar and Huda (reading, 12), speaking (4 prompts), the 7–9-sentence description and the 16-question checkpoint. Picture match: website visual game.',
    support: `• Core: 10 objects + هَذَا / هَذِهِ + عِنْدِي / لَيْسَ عِنْدِي + فِي حَقِيبَتِي. Develop: asking a boy or a girl (عِنْدَكَ / عِنْدَكِ), plurals and two locations. Stretch: counting (dual and 3–10, website optional extension) and comparing two bags.
• Website route: recognise → choose → locate → communicate. Learn every noun WITH its model sentence (the ـة ending is a strong clue, not a rule).
• Real or invented bags are equally acceptable (website) — some students may not have every item.
• Urdu bridge: کتاب، قلم، دفتر، کرسی، قاموس are shared words; مکتب (Urdu school) = Arabic desk / office.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Classroom objects, this / this (f.), then I have and where it is.', wedo: 'Pack the Bag mission, listen to Layla, read Omar and Huda.', next: 'F4-L04' }),
  F.doNow({
    questions: [
      q('What does دَفْتَرٌ mean?', ['an exercise book', 'a dictionary', 'a ruler'], 'Prepared at home (F4-L02).'),
      q('What does حَقِيبَةٌ mean?', ['a bag', 'a pen', 'a book'], 'Prepared at home (F4-L02).'),
      ...bank(3, 'retrieval', [3, 4, 7]),
    ],
    keyIdea: { text: 'This / this (f.) follows the Arabic gender of the OBJECT, not the speaker: hādhā qalamun · hādhihi misṭaratun.', ar: '{w|هَذَا} قَلَمٌ · {e|هَذِهِ} مِسْطَرَةٌ' },
    retrieves: 'Questions 1–2 test two of the five objects prepared at home at the end of F4-L02. Questions 3–5 are the website “F4 retrieval bridge” (feminine demonstrative, I have, on).',
  }),
  F.objectivesSlide([
    'Name the complete core classroom-object bank.',
    'Use hādhā / hādhihi according to noun gender.',
    'Ask and answer what someone has.',
    'Describe where objects are in a bag or on a desk.',
  ], {
    core: ['I can name ten classroom objects.', 'I can say what I have and don’t have.'],
    develop: ['I can ask a boy or a girl what they have.', 'I can say where two objects are.'],
    stretch: ['I can count objects (two, three …).', 'I can compare two bags.'],
  }, 2, 'Website “By the end, I can…” (left) and the website writing Core / Develop / Stretch routes (right).'),
  F.keywordsSlide({
    text: 'Classroom objects with gender and plurals, possession and location. Core: ten objects, this / this (f.), I have.',
    groups: [
      { head: 'GROUP 1', name: 'Classroom objects · 12 + 16' },
      { head: 'GROUP 2', name: 'This · I have · you have' },
      { head: 'GROUP 3', name: 'Location and counting' },
    ],
    bridge: [
      { ar: 'كِتَابٌ', urdu: 'کتاب', tr: 'kitāb', en: 'book' },
      { ar: 'قَلَمٌ', urdu: 'قلم', tr: 'qalam', en: 'pen' },
      { ar: 'دَفْتَرٌ', urdu: 'دفتر', tr: 'daftar', en: 'exercise book (Urdu: office)' },
      { ar: 'قَامُوسٌ', urdu: 'قاموس', tr: 'qāmūs', en: 'dictionary' },
      { ar: 'كُرْسِيٌّ', urdu: 'کرسی', tr: 'kursiyy', en: 'chair' },
    ],
    notes: 'URDU BRIDGE: کتاب، قلم، قاموس and کرسی are the same words. FALSE FRIENDS: Urdu دفتر = office (Arabic دَفْتَرٌ = exercise book); Urdu مکتب = school (Arabic مَكْتَبٌ = desk or office).',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · official classroom bank (website) · 1 of 2', title: 'Book, exercise book, pen …', ar: 'أَدَوَاتُ الفَصْلِ',
    items: [
      { n: 1, ar: 'كِتَابٌ', en: 'book', tr: 'ki-tāb', core: true, ...O('m.', 'كُتُبٌ') },
      { n: 2, ar: 'دَفْتَرٌ', en: 'notebook / exercise book', tr: 'daf-tar', core: true, ...O('m.', 'دَفَاتِرُ') },
      { n: 3, ar: 'قَلَمٌ', en: 'pen', tr: 'qa-lam', core: true, ...O('m.', 'أَقْلَامٌ') },
      { n: 4, ar: 'قَامُوسٌ', en: 'dictionary', tr: 'qā-mūs', core: true, ...O('m.', 'قَوَامِيسُ') },
      { n: 5, ar: 'مَكْتَبٌ', en: 'desk (also: office)', tr: 'mak-tab', core: true, ...O('m.', 'مَكَاتِبُ') },
      { n: 6, ar: 'جَرَسٌ', en: 'bell', tr: 'ja-ras', ...O('m.', 'أَجْرَاسٌ') },
    ],
    notes: 'OFFICIAL CLASSROOM BANK (website, masculine items). Also: غِرَاءٌ (glue, m.), وَرَقٌ / أَوْرَاقٌ (paper / sheets; وَرَقَةٌ = one sheet). Website distinction: مَكْتَبٌ can mean a desk or an office — عَلَى مَكْتَبِي كِتَابٌ = there is a book on my desk.',
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · official classroom bank (website) · 2 of 2', title: 'Ruler, pencil case, board …', ar: 'أَدَوَاتُ الفَصْلِ',
    items: [
      { n: 7, ar: 'مِسْطَرَةٌ', en: 'ruler', tr: 'mis-ṭa-ra', core: true, ...O('f.', 'مَسَاطِرُ') },
      { n: 8, ar: 'مِقْلَمَةٌ', en: 'pencil case', tr: 'miq-la-ma', core: true, ...O('f.', 'مَقَالِمُ') },
      { n: 9, ar: 'مِمْحَاةٌ', en: 'eraser / rubber', tr: 'mim-ḥā', core: true, tag: 'f.', forms: [{ l: 'this', ar: 'هَذِهِ' }] },
      { n: 10, ar: 'سَبُّورَةٌ', en: 'board / interactive board', tr: 'sab-bū-ra', ...O('f.', 'سَبُّورَاتٌ') },
      { n: 11, ar: 'حَقِيبَةٌ', en: 'bag / backpack', tr: 'ḥa-qī-ba', core: true, ...O('f.', 'حَقَائِبُ') },
      { n: 12, ar: 'آلَةٌ حَاسِبَةٌ', en: 'calculator', tr: 'ā-la ḥā-si-ba', tag: 'f.', forms: [{ l: 'this', ar: 'هَذِهِ' }] },
    ],
    notes: 'FEMININE ITEMS (website). Wider practical bank (website): قَلَمُ رَصَاصٍ (pencil), قَلَمُ حِبْرٍ (ink pen), مِبْرَاةٌ (sharpener), مَقَصٌّ (scissors), حَاسُوبٌ مَحْمُولٌ (laptop), جِهَازٌ لَوْحِيٌّ (tablet), شَاشَةٌ (screen), لَوْحَةُ مَفَاتِيحَ (keyboard), فَأْرَةُ الحَاسُوبِ (mouse), طَابِعَةٌ (printer), مَلَفٌّ (folder), كُرْسِيٌّ (chair), طَاوِلَةٌ (table).',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · this and I have (website)', title: 'This (m. / f.) · I have · you have', ar: 'هَذَا · هَذِهِ · عِنْدِي',
    cols: [{ label: 'Pattern', w: 2.4, size: 24 }, { label: 'Example', w: 6.2, size: 22 }, { label: 'Meaning', w: 3.73 }],
    rows: [
      { core: true, cells: [{ ar: '{w|هَذَا}' }, { ar: 'هَذَا قَلَمٌ. · هَذَا كِتَابٌ.' }, 'this is (masculine object)'] },
      { core: true, cells: [{ ar: '{e|هَذِهِ}' }, { ar: 'هَذِهِ مِسْطَرَةٌ. · هَذِهِ حَقِيبَةٌ.' }, 'this is (feminine object)'] },
      { core: true, cells: [{ ar: 'عِنْدِي' }, { ar: 'عِنْدِي قَلَمٌ وَكِتَابٌ.' }, 'I have'] },
      { core: true, cells: [{ ar: 'لَيْسَ عِنْدِي' }, { ar: 'لَا، لَيْسَ عِنْدِي غِرَاءٌ.' }, 'I do not have'] },
      { cells: [{ ar: 'عِنْدَكَ / عِنْدَكِ' }, { ar: 'هَلْ عِنْدَكَ قَامُوسٌ؟ · هَلْ عِنْدَكِ مِسْطَرَةٌ؟' }, 'do you (m. / f.) have …?'] },
      { cells: [{ ar: 'عِنْدَهُ / عِنْدَهَا' }, { ar: 'عِنْدَهُ حَاسُوبٌ. · عِنْدَهَا حَقِيبَةٌ.' }, 'he has / she has'] },
    ],
    foot: 'The demonstrative matches the gender of the singular noun — not the gender of the speaker.',
    notes: `GRAMMAR PART 1 — website sections 3 “Choose هَذَا or هَذِهِ” and 4 “Say what you have”.
Website: “Do not guess from English — Arabic noun gender controls the choice. The ending ـة is a strong feminine clue, but always learn the word with its model sentence.”
Adjectives agree too (website): هَذِهِ مِقْلَمَةٌ زَرْقَاءُ · هَذَا كِتَابٌ جَدِيدٌ.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · where is it? how many? (website)', title: 'Place first, then the object', ar: 'أَيْنَ؟ كَمْ؟',
    cards: [
      { chip: 'IN · ON', color: '1D5FBF', head: 'فِي · عَلَى', big: 'فِي حَقِيبَتِي كِتَابٌ، وَعَلَى مَكْتَبِي حَاسُوبٌ.', en: 'In my bag there is a book, and on my desk a computer.', clue: 'Place phrase comes first.' },
      { chip: 'UNDER · BESIDE · INSIDE', color: 'C77700', head: 'تَحْتَ · بِجَانِبِ · دَاخِلَ', big: 'تَحْتَ الكُرْسِيِّ حَقِيبَةٌ.', en: 'Under the chair there is a bag.', clue: 'Also: amāma, khalfa, bayna.' },
      { chip: 'COUNT · STRETCH', color: '6B4C9A', head: 'وَاحِدٌ · ـَانِ · ثَلَاثَةُ', big: 'قَلَمٌ وَاحِدٌ · قَلَمَانِ · ثَلَاثَةُ أَقْلَامٍ', en: 'one pen · two pens · three pens', clue: 'f.: ثَلَاثُ مَسَاطِرَ' },
    ],
    error: { text: 'Website location model: the place phrase comes first and the object follows.', pairs: [['عَلَى مَكْتَبِي حَاسُوبٌ.', 'حَاسُوبٌ مَكْتَبِي عَلَى.']] },
    notes: `GRAMMAR PART 2 — website section 5 “Say where each object is”. Website location bank: فِي حَقِيبَتِي · عَلَى مَكْتَبِي · تَحْتَ الكُرْسِيِّ · بِجَانِبِ الحَاسُوبِ · أَمَامَ السَّبُّورَةِ · خَلْفَ الكِتَابِ · بَيْنَ الدَّفْتَرِ وَالقَامُوسِ · دَاخِلَ المِقْلَمَةِ.
Counting is an OPTIONAL extension (website): قَلَمٌ وَاحِدٌ · قَلَمَانِ · ثَلَاثَةُ أَقْلَامٍ / مِسْطَرَةٌ وَاحِدَةٌ · مِسْطَرَتَانِ · ثَلَاثُ مَسَاطِرَ (3–10 take the opposite gender).`,
  },
  F.quickCheck([...bank(3, 'gender', [1, 2]), ...bank(3, 'possession', [2, 5])], 'website gender laboratory questions 2–3 and possession check questions 3 and 6.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me unpack my bag', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'This is', ar: '{e|هَذِهِ} حَقِيبَتِي المَدْرَسِيَّةُ.', think: 'Bag (f.) → hādhihi.' },
      { head: 'In my bag', ar: 'فِي حَقِيبَتِي كِتَابٌ وَدَفْتَرٌ وَمِسْطَرَةٌ.', think: 'Place first.' },
      { head: 'I don’t have', ar: 'لَيْسَ عِنْدِي قَامُوسٌ اليَوْمَ.', think: 'Negative: laysa.' },
      { head: 'On my desk', ar: 'عَلَى مَكْتَبِي حَاسُوبٌ، وَبِجَانِبِهِ مِقْلَمَةٌ زَرْقَاءُ.', think: 'Colour agrees (f.).' },
    ],
    legend: ['w', 'e'], legendLabels: { w: 'MASCULINE', e: 'FEMININE' },
    model: '{e|هَذِهِ} حَقِيبَتِي المَدْرَسِيَّةُ. فِي حَقِيبَتِي كِتَابٌ وَدَفْتَرٌ وَمِسْطَرَةٌ، وَلَكِنْ لَيْسَ عِنْدِي قَامُوسٌ اليَوْمَ. عَلَى مَكْتَبِي حَاسُوبٌ، وَبِجَانِبِهِ مِقْلَمَةٌ زَرْقَاءُ. {w|هَذَا} قَلَمِي.',
    modelEn: 'This is my school bag. In my bag there is a book, an exercise book and a ruler, but I don’t have a dictionary today. On my desk there is a computer, and beside it a blue pencil case. This is my pen.',
    notes: 'I DO (3 min) — the website listening (Layla) and Omar’s profile as the model. Hold up real objects on camera if you can: “hādhā or hādhihi?”',
  },
  F.gameSlide({ ...game, title: 'Visual game — Classroom objects', items: [game.items[1], game.items[2], game.items[5]] }, {
    title: 'What is it? Match the picture',
    en: ['This is a pencil.', 'This is a bag.', 'This is a ruler.'],
    icons: [[['fa6', 'FaPencil', 'C77700']], [['fa6', 'FaBagShopping', '1D5FBF']], [['fa6', 'FaRulerHorizontal', 'B83280']]],
    labels: ['a pencil', 'a school bag', 'a ruler'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Ask: why هٰذَا for the pencil but هٰذِهِ for the bag and the ruler? Other cards for homework: كِتَابٌ، كُرْسِيٌّ، قَلَمٌ.',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website “Pack the Bag Mission”', title: 'Pack the bag', ar: 'مُهِمَّةُ تَجْهِيزِ الحَقِيبَةِ',
    seed: 14,
    questions: [rounds[1], rounds[2], rounds[4], rounds[6], rounds[9]],
    side: { kind: 'core', label: 'CORE', text: 'm. → hādhā · f. → hādhihi\nboy: ‘indaka · girl: ‘indaki\nI don’t have: laysa ‘indī' },
    answerSlide: { min: 0, eyebrow: 'We do · Mission answers', title: 'Mission: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 14 Pack the Bag rounds (plural, demonstrative, ask a girl, negative, inside). The other 9 are homework.',
    answerNotes: 'After each answer ask: masculine or feminine? Who is listening?',
  },
  F.repairSlide(site, ['Ruler: hādhā or hādhihi?', 'Talking to a girl: which ending?', 'I don’t have: which word?']),
  F.listening(site, {
    coreTip: 'Listen twice.\nFive headings: bag · missing · desk · colour · under the chair.',
    routes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5.',
    gloss: [
      ['اِسْمِي لَيْلَى. فِي حَقِيبَتِي كِتَابُ العُلُومِ، وَدَفْتَرَانِ، وَثَلَاثَةُ أَقْلَامٍ، وَمِسْطَرَةٌ، وَمِمْحَاةٌ.', 'My name is Layla. In my bag there is the science book, two exercise books, three pens, a ruler and an eraser.'],
      ['لَيْسَ عِنْدِي قَامُوسٌ اليَوْمَ.', 'I don’t have a dictionary today.'],
      ['عَلَى مَكْتَبِي حَاسُوبٌ مَحْمُولٌ، وَبِجَانِبِ الحَاسُوبِ مِقْلَمَةٌ زَرْقَاءُ.', 'On my desk there is a laptop, and beside the computer a blue pencil case.'],
      ['تَحْتَ الكُرْسِيِّ حَقِيبَةُ صَدِيقَتِي.', 'Under the chair is my friend’s bag.'],
      ['أَسْتَخْدِمُ القَلَمَ وَالدَّفْتَرَ فِي حِصَّةِ اللُّغَةِ العَرَبِيَّةِ.', 'I use the pen and the exercise book in the Arabic lesson.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · Profile A (website)', title: 'Omar’s bag', ar: 'المَلَفُّ (أ)',
    lines: [
      ['أَنَا عُمَرُ. هَذِهِ حَقِيبَتِي المَدْرَسِيَّةُ.', 'Omar · this is my school bag (f.)'],
      ['فِيهَا كِتَابٌ، وَدَفْتَرٌ، وَقَلَمُ رَصَاصٍ، وَمِسْطَرَةٌ.', 'In it: book, exercise book, pencil, ruler'],
      ['عِنْدِي أَيْضًا آلَةٌ حَاسِبَةٌ صَغِيرَةٌ.', 'Also: a small calculator'],
      ['لَيْسَ عِنْدِي غِرَاءٌ.', 'Missing: glue'],
      ['عَلَى مَكْتَبِي قَامُوسٌ وَحَاسُوبٌ.', 'On the desk: dictionary + computer'],
    ],
    notes: 'PROFILE A (website, complete). Find: one demonstrative, one negative sentence and one location.',
  },
  {
    type: 'glossed', stage: 'wedo', flex: true, eyebrow: 'We do · reading · Profile B (website) · FLEX / Stretch', title: 'Huda’s pencil case', ar: 'المَلَفُّ (ب)',
    lines: [
      ['اِسْمِي هُدَى.', 'Huda'],
      ['فِي مِقْلَمَتِي ثَلَاثَةُ أَقْلَامٍ وَمِمْحَاةٌ وَمِبْرَاةٌ.', 'Pencil case: 3 pens, eraser, sharpener'],
      ['حَقِيبَتِي بَنَفْسَجِيَّةٌ، وَفِيهَا كِتَابَانِ وَأَوْرَاقٌ.', 'Bag: purple · two books + papers'],
      ['عَلَى الطَّاوِلَةِ جِهَازٌ لَوْحِيٌّ،', 'On the table: a tablet'],
      ['وَبِجَانِبِهِ قَلَمُ حِبْرٍ أَسْوَدُ.', 'Beside it: a black ink pen'],
    ],
    notes: 'PROFILE B (website, complete). Stretch: counting (ثَلَاثَةُ أَقْلَامٍ، كِتَابَانِ) and colour agreement (حَقِيبَتِي بَنَفْسَجِيَّةٌ · قَلَمُ حِبْرٍ أَسْوَدُ).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions (website)', title: 'Omar or Huda?', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 9,
    questions: bank(3, 'reading', [2, 3, 6, 7, 10]),
    side: { kind: 'info', head: 'EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Find the place phrase,\nthen the object after it.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading questions 3, 4, 7, 8 and 11. The other 7 are homework.',
    answerNotes: 'A student reads aloud the evidence phrase (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'مَاذَا فِي حَقِيبَتِكَ؟ / مَاذَا فِي حَقِيبَتِكِ؟' },
      { route: 'develop', ar: 'هَلْ عِنْدَكَ قَامُوسٌ؟ / هَلْ عِنْدَكِ قَامُوسٌ؟' },
      { route: 'develop', ar: 'مَاذَا عَلَى مَكْتَبِكَ؟ وَمَاذَا تَحْتَ الكُرْسِيِّ؟' },
      { route: 'stretch', ar: 'مَا أَهَمُّ أَدَاةٍ فِي حَقِيبَتِكَ؟ وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'فِي حَقِيبَتِي ______ وَ ______ وَ ______ .' },
      { route: 'develop', ar: 'نَعَمْ، عِنْدِي ______ . / لَا، لَيْسَ عِنْدِي ______ .' },
      { route: 'develop', ar: 'عَلَى مَكْتَبِي ______ ، وَتَحْتَ الكُرْسِيِّ ______ .' },
      { route: 'stretch', ar: 'أَهَمُّ أَدَاةٍ ______ لِأَنَّهُ / لِأَنَّهَا ______ .' },
    ],
    modelEn: ['Do you (f.) have a ruler?', 'Yes, I have a ruler. Do you have glue? — No, I don’t have glue.'],
    notes: `WEBSITE SPEAKING STUDIO “Speak about classroom objects” — answer with a complete sentence, then add one colour, quantity, location or reason. Prompts (website):
${prompts.map((r) => `• ${r.title}: ${r.detail}`).join('\n')}
Website checklist (1–6): five objects · هَذَا / هَذِهِ · عِنْدِي or answering هَلْ عِنْدَكَ؟ · one location · one extra detail · clear delivery.`,
  }),
  F.routesSlide(site, {
    core: { amount: '7 sentences', how: 'This is … · In my bag … · I don’t have … using the models.' },
    develop: { amount: '7–9 sentences', how: 'Add plurals, colours and two location phrases.' },
    stretch: { amount: '9+ sentences', how: 'Compare two bags or explain the most useful objects.' },
  }),
  F.framesSlide({
    core: [
      { en: 'This is my school bag.', ar: 'هَذِهِ حَقِيبَتِي المَدْرَسِيَّةُ.' },
      { en: 'In my bag there is a book and a pen.', ar: 'فِي حَقِيبَتِي كِتَابٌ وَقَلَمٌ.' },
      { en: 'I have a ruler.', ar: 'عِنْدِي مِسْطَرَةٌ.' },
      { en: 'I don’t have a dictionary.', ar: 'لَيْسَ عِنْدِي قَامُوسٌ.' },
      { en: 'This is a pen.', ar: 'هَذَا قَلَمٌ.' },
    ],
    develop: [
      { en: 'On my desk there is a computer.', ar: 'عَلَى مَكْتَبِي حَاسُوبٌ.' },
      { en: 'Under the chair there is a bag.', ar: 'تَحْتَ الكُرْسِيِّ حَقِيبَةٌ.' },
      { en: 'Beside the computer there is a blue pencil case.', ar: 'بِجَانِبِ الحَاسُوبِ مِقْلَمَةٌ زَرْقَاءُ.' },
      { en: 'Do you (f.) have a calculator?', ar: 'هَلْ عِنْدَكِ آلَةٌ حَاسِبَةٌ؟' },
      { en: 'I have two books and three pens.', ar: 'عِنْدِي كِتَابَانِ وَثَلَاثَةُ أَقْلَامٍ.' },
    ],
    bank: ['كِتَابٌ', 'دَفْتَرٌ', 'قَلَمٌ', 'مِسْطَرَةٌ', 'مِقْلَمَةٌ', 'حَقِيبَةٌ', 'هَذَا', 'هَذِهِ', 'عِنْدِي', 'لَيْسَ عِنْدِي', 'فِي', 'عَلَى'],
  }),
  F.modelSlide(site,
    'This is my school bag. In my bag there is a book, two exercise books, three pens, a ruler and an eraser. I also have a small calculator, but I don’t have a dictionary today. On my desk there is a laptop, and beside the computer a blue pencil case. Under the chair is my friend’s bag.',
    ['demonstrative', 'objects + numbers', 'negative', 'locations'],
    'Built from the website listening (Layla) and Omar’s profile. Stretch: compare with Huda’s bag (Profile B).'),
  F.selfCheckSlide([
    { route: 'core', text: 'I named at least eight objects.' },
    { route: 'core', text: 'hādhā for masculine, hādhihi for feminine objects.' },
    { route: 'develop', text: 'I used ‘indī and laysa ‘indī.' },
    { route: 'develop', text: 'I gave two locations.' },
    { route: 'stretch', text: 'I counted objects or compared two bags.' },
  ]),
  F.exitTicket(bank(3, 'finalQuiz', [2, 4, 7]), 16),
  F.prepSlide({
    ...NEXT,
    words: [['كَثِيرًا', 'a lot', '—'], ['قَلِيلًا', 'a little', '—'], ['فِي رَأْيِي', 'in my opinion', '—'], ['أُفَضِّلُ … عَلَى …', 'I prefer … to …', '—'], ['هَلْ تُحِبُّ؟', 'do you like?', 'f. تُحِبِّينَ']],
    questionEn: 'Which school subject do you like a lot?',
    questionAr: 'أُحِبُّ … كَثِيرًا.',
    homework: {
      core: 'Website F4-L03: Pack the Bag Mission (14) and the picture game.',
      develop: 'Website school-bag inventory: 5–8 sentences with one negative sentence.',
      stretch: 'Write 7–9 sentences describing your bag and desk with numbers and colours.',
    },
    wordsSource: 'The five words and phrases come from the website F4-L04 preference language.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: m. → hādhā · f. → hādhihi · I have ‘indī · I don’t have laysa ‘indī.' }),
];

module.exports = { meta, slides };
