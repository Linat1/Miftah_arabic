'use strict';
/*
 * F3-L01 · My Family — Members and Relationships
 * Website: Pathways › Foundation › F3 › Lesson 1. The F2 bridge, the complete family and relationship bank (immediate,
 * grandparents and extended, cousins and wider relations, family structure and sibling order), the Al-Rashid family tree,
 * possessive endings (ـي ـكَ ـكِ ـهُ ـهَا) with the special forms أَبِي / أَبُوهُ and أَخِي / أَخُوهُ, هَذَا / هَذِهِ family
 * sentences, the Family Relationship Mission (12), Layla’s family (listening), the Al-Rashid reading, the family speaking
 * studio, the family-tree description and the 12-question checkpoint.
 */
const F = require('./f3-common');
const game = require('../site-data/pathway-visual-games.json')['f3-l01'];
const { q, bank, banks } = F;

const meta = F.meta({
  n: 1, fileTitle: 'My_Family_Members_and_Relationships', chip: 'My Family',
  title: 'My Family — Members and Relationships', arabic: 'عَائِلَتِي — الأَفْرَادُ وَالعَلَاقَاتُ',
  focus: 'Build a complete family vocabulary bank, show who belongs to whom with possessive endings, and describe a real or invented family clearly.',
  icon: 'FaPeopleRoof', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F3-L02', nextTitle: 'Describing Family Members', nextAr: 'وَصْفُ أَفْرَادِ العَائِلَةِ' };
const rounds = banks.l01.rounds.map((r) => F.w({ ...r, q: `${r.title}: ${r.prompt}` }));
const prompts = banks.l01.prompts;
const MF = (m, f, pl) => ({ tag: 'my · pl', forms: [{ l: 'pl.', ar: pl }, { l: 'my', ar: m }] });

const site = {
  speaking: {
    context: 'Introduce a family',
    model: [
      ['A', 'مَنْ هَذَا؟ وَمَنْ هَذِهِ؟', 'Who is this (m.)? And who is this (f.)?'],
      ['B', 'هَذِهِ عَائِلَةُ الرَّشِيدِ. هَذَا الجَدُّ حَسَنٌ، وَهَذِهِ الجَدَّةُ سَلْمَى.', 'This is the Al-Rashid family. This is grandfather Hassan, and this is grandmother Salma.'],
    ],
  },
  writing: {
    prompt: 'Website writing workshop: describe a real or invented family tree — grandparents, parents or caregivers, children or siblings, extended family and one family quality with a reason.',
    checklist: ['هَذَا / هَذِهِ matches each person.', 'Possessive endings (أَبِي، أُخْتُهُ، عَمُّهَا).', 'Six different relationships.', 'Three connectors (وَ، أَيْضًا، لِأَنَّ).'],
    model: prompts[0].model,
  },
  differentiation: {
    core: 'Six accurate sentences naming at least six people with hādhā / hādhihi.',
    develop: '70–90 words with immediate and extended family, possessive endings and three connectors.',
    stretch: 'Add sibling order, cousins, a comparison and a reason with li’anna.',
  },
  mistakes: [
    { wrong: 'هَذَا أُمِّي.', right: 'هَذِهِ أُمِّي.', why: 'A mother is feminine → hādhihi.' },
    { wrong: 'أُخْتُهَا (for “his sister”)', right: 'أُخْتُهُ', why: 'The ending shows the OWNER: his → -hu (website “important meaning”).' },
    { wrong: 'أَبُهَا', right: 'أَبُوهَا', why: 'Father has a special form: abī, abūhu, abūhā.' },
  ],
  listening: {
    title: 'Layla’s family',
    script: 'اِسْمِي لَيْلَى. عَائِلَتِي كَبِيرَةٌ وَلَطِيفَةٌ. هَذَا أَبِي، وَاسْمُهُ خَالِدٌ. هُوَ مُجْتَهِدٌ. وَهَذِهِ أُمِّي، وَاسْمُهَا مَرْيَمُ. هِيَ لَطِيفَةٌ جِدًّا. عِنْدِي أَخٌ أَكْبَرُ، وَاسْمُهُ يُوسُفُ، وَعُمْرُهُ سِتَّ عَشْرَةَ سَنَةً. جَدَّتِي سَلْمَى تَعِيشُ مَعَنَا. عَمِّي سَامِرٌ يَعِيشُ فِي لَنْدَنَ، وَبِنْتُ عَمِّي زَيْنَبُ تُحِبُّ القِرَاءَةَ. أَنَا أُحِبُّ عَائِلَتِي لِأَنَّهَا مُتَعَاوِنَةٌ.',
    questions: bank(1, 'listeningQuiz', [2, 4, 5, 6, 7]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 1,
    source: 'Website sections used: the six-question F2 bridge, the complete family and relationship vocabulary (immediate family, grandparents and extended family, cousins and wider relations, family structure and sibling order) with its 12-question check, the Al-Rashid family tree, possessive endings with the special family forms and the 10-question laboratory, clear family sentences with هَذَا / هَذِهِ, the Family Relationship Mission (12), Layla’s family (listening, 8), the Al-Rashid family reading (10), the family speaking studio (4 prompts), the family-tree writing workshop and the 12-question checkpoint. Picture match: website visual game “My Family — Members and Relationships”.',
    support: `• NEW UNIT (F3 · My Family & Home). Core: 10 family words + “this is my …” (هَذَا أَبِي / هَذِهِ أُمِّي). Develop: his / her endings (أُخْتُهُ، عَمُّهَا) and extended family. Stretch: paternal / maternal distinctions, sibling order and cousins.
• PRIVACY (website): no one needs to share real family information — every task may use the fictional عَائِلَةُ الرَّشِيدِ or an invented family. Be mindful of students in different family situations (single-parent, carers, bereavement, step-families — the website includes زَوْجَةُ الأَبِ / زَوْجُ الأُمِّ and “caregiver”).
• The website’s key rule: the ending shows the OWNER, not the family member (أُخْتُهُ = HIS sister).
• Urdu bridge: most family words are different in Urdu (ابو، امی، بھائی) but students know many Arabic ones from names and Islamic texts: وَالِد / وَالِدَة (والدین), عَمّ / خَال (in some dialects), أَقَارِب (اقارب), اِبْن (ابن سینا).`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Family words, then “my, your, his, her” endings.', wedo: 'Relationship Mission, listen to Layla, read about the Al-Rashid family.', next: 'F3-L02' }),
  F.doNow({
    questions: [
      q('What does أُسْرَةٌ mean?', ['family', 'father', 'sister'], 'Prepared at home (F2-L12).'),
      q('What does أُخْتٌ mean?', ['sister', 'brother', 'mother'], 'Prepared at home (F2-L12).'),
      ...bank(1, 'retrievalQuiz', [0, 2, 3]),
    ],
    keyIdea: { text: 'This (m.) is my father · this (f.) is my mother. The ending -ī means “my”.', ar: '{w|هَذَا} أَبِ{e|ي} · {e|هَذِهِ} أُمِّ{e|ي}' },
    retrieves: 'Questions 1–2 test two of the five family words prepared at home at the end of F2-L12. Questions 3–5 are the website “F2 bridge” (this m., she is kind, his name).',
  }),
  F.objectivesSlide([
    'Name at least 14 core family members accurately.',
    'Recognise the wider family and relationships bank.',
    'Use ـي، ـكَ، ـكِ، ـهُ، ـهَا to show possession.',
    'Create and describe a real or invented family tree.',
  ], {
    core: ['I can name ten family members.', 'I can say “this is my …”.'],
    develop: ['I can say his / her … (-hu / -hā).', 'I can name uncles, aunts and cousins.'],
    stretch: ['I can tell paternal from maternal relatives.', 'I can describe sibling order and cousins.'],
  }, 2, 'Website “By the end” aims (left) and the website writing Core / Develop / Stretch routes (right).'),
  F.keywordsSlide({
    text: 'The complete website family bank. Core: immediate family and grandparents. Uncles, aunts and cousins are Develop / Stretch.',
    groups: [
      { head: 'GROUP 1', name: 'Immediate family · 8' },
      { head: 'GROUP 2', name: 'Grandparents and extended · 8' },
      { head: 'GROUP 3', name: 'Cousins, structure, siblings · 17' },
    ],
    bridge: [
      { ar: 'وَالِدٌ · وَالِدَةٌ', urdu: 'والد · والدہ', tr: 'wālid · wālida', en: 'father · mother' },
      { ar: 'أَقَارِبُ', urdu: 'اقارب', tr: 'aqārib', en: 'relatives' },
      { ar: 'اِبْنٌ', urdu: 'ابن (ابنِ سینا)', tr: 'ibn', en: 'son' },
      { ar: 'زَوْجٌ · زَوْجَةٌ', urdu: 'زوج · زوجہ', tr: 'zawj · zawja', en: 'husband · wife' },
      { ar: 'طِفْلٌ', urdu: 'طفل', tr: 'ṭifl', en: 'child' },
    ],
    notes: 'URDU BRIDGE: والد / والدہ / والدین, اقارب, زوجہ and طفل are Arabic words used in formal Urdu. ابن is known from names (ابنِ سینا، ابنِ بطوطہ). Everyday Urdu ابو / امی / بھائی / بہن are NOT the Arabic words — give أَبٌ / أُمٌّ / أَخٌ / أُخْتٌ extra practice.',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · immediate family (website)', title: 'Father, mother, brother …', ar: 'الأُسْرَةُ',
    items: [
      { n: 1, ar: 'أَبٌ / وَالِدٌ', en: 'father', tr: 'ab / wā-lid', tag: 'm. · this: hādhā', core: true, forms: [{ l: 'his', ar: 'أَبُوهُ' }, { l: 'my', ar: 'أَبِي' }] },
      { n: 2, ar: 'أُمٌّ / وَالِدَةٌ', en: 'mother', tr: 'umm / wā-li-da', tag: 'f. · this: hādhihi', core: true, forms: [{ l: 'his', ar: 'أُمُّهُ' }, { l: 'my', ar: 'أُمِّي' }] },
      { n: 3, ar: 'أَخٌ', en: 'brother', tr: 'akh', tag: 'm.', core: true, forms: [{ l: 'pl.', ar: 'إِخْوَةٌ' }, { l: 'her', ar: 'أَخُوهَا' }, { l: 'my', ar: 'أَخِي' }] },
      { n: 4, ar: 'أُخْتٌ', en: 'sister', tr: 'ukht', tag: 'f.', core: true, forms: [{ l: 'pl.', ar: 'أَخَوَاتٌ' }, { l: 'his', ar: 'أُخْتُهُ' }, { l: 'my', ar: 'أُخْتِي' }] },
      { n: 5, ar: 'اِبْنٌ', en: 'son', tr: 'ibn', tag: 'm.', core: true, ...MF('اِبْنِي', '', 'أَبْنَاءٌ') },
      { n: 6, ar: 'بِنْتٌ / اِبْنَةٌ', en: 'daughter', tr: 'bint / ib-na', tag: 'f.', core: true, ...MF('بِنْتِي', '', 'بَنَاتٌ') },
    ],
    notes: `IMMEDIATE FAMILY (website). Also in the group: زَوْجٌ (husband), زَوْجَةٌ (wife). Every card shows “my” and a plural or his / her — the special forms of father and brother (أَبِي، أَبُوهُ، أَخُوهَا) are today’s grammar.
Hear → say → see → use: “hādhā abī · hādhihi ummī”.`,
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 2 · grandparents and extended family (website)', title: 'Grandparents, uncles, aunts', ar: 'الأَجْدَادُ وَالأَقَارِبُ',
    items: [
      { n: 7, ar: 'جَدٌّ', en: 'grandfather', tr: 'jadd', tag: 'm.', core: true, ...MF('جَدِّي', '', 'أَجْدَادٌ') },
      { n: 8, ar: 'جَدَّةٌ', en: 'grandmother', tr: 'jad-da', tag: 'f.', core: true, ...MF('جَدَّتِي', '', 'جَدَّاتٌ') },
      { n: 9, ar: 'عَمٌّ', en: 'uncle (father’s side)', tr: '‘amm', tag: 'paternal · m.', ...MF('عَمِّي', '', 'أَعْمَامٌ') },
      { n: 10, ar: 'عَمَّةٌ', en: 'aunt (father’s side)', tr: '‘am-ma', tag: 'paternal · f.', ...MF('عَمَّتِي', '', 'عَمَّاتٌ') },
      { n: 11, ar: 'خَالٌ', en: 'uncle (mother’s side)', tr: 'khāl', tag: 'maternal · m.', ...MF('خَالِي', '', 'أَخْوَالٌ') },
      { n: 12, ar: 'خَالَةٌ', en: 'aunt (mother’s side)', tr: 'khā-la', tag: 'maternal · f.', ...MF('خَالَتِي', '', 'خَالَاتٌ') },
    ],
    notes: 'EXTENDED FAMILY (website). Meaning clue (website): English says “uncle” and “aunt” for both sides; Arabic shows which side — father’s side عَمٌّ / عَمَّةٌ, mother’s side خَالٌ / خَالَةٌ. Also: أَقَارِبُ (relatives), أَجْدَادٌ (grandparents / ancestors).',
  },
  {
    type: 'vocab', stage: 'teach', flex: true, eyebrow: 'Key words · Group 3 · cousins, structure and sibling order (website) · FLEX', title: 'Cousins, older, younger …', ar: 'العَلَاقَاتُ الأَوْسَعُ',
    items: [
      { n: 13, ar: 'اِبْنُ عَمٍّ / بِنْتُ عَمٍّ', en: 'cousin (father’s side) m. / f.', tr: 'ib-nu ‘amm / bin-tu ‘amm', tag: 'paternal' },
      { n: 14, ar: 'اِبْنُ خَالٍ / بِنْتُ خَالٍ', en: 'cousin (mother’s side) m. / f.', tr: 'ib-nu khāl / bin-tu khāl', tag: 'maternal' },
      { n: 15, ar: 'الأَخُ الأَكْبَرُ', en: 'older brother', tr: 'al-a-khu l-ak-bar', tag: 'sibling order', forms: [{ l: 'younger', ar: 'الأَخُ الأَصْغَرُ' }] },
      { n: 16, ar: 'الأُخْتُ الكُبْرَى', en: 'older sister', tr: 'al-ukh-tu l-kub-rā', tag: 'sibling order', forms: [{ l: 'younger', ar: 'الأُخْتُ الصُّغْرَى' }] },
      { n: 17, ar: 'تَوْأَمٌ / تَوْأَمَانِ', en: 'twin / twins', tr: 'taw-am / taw-a-mān', tag: 'dual preview' },
      { n: 18, ar: 'عَائِلَةٌ / أُسْرَةٌ', en: 'family', tr: '‘ā-ʾi-la / us-ra', tag: 'f.', forms: [{ l: 'my', ar: 'عَائِلَتِي' }] },
    ],
    notes: 'WIDER BANK (FLEX / recognition). Also on the website: اِبْنُ أَخٍ / اِبْنُ أُخْتٍ (nephew), اِبْنَةُ أَخٍ (niece), طِفْلٌ / أَطْفَالٌ (child / children), جَارٌ / جَارَةٌ (neighbour), قَرِيبٌ / قَرِيبَةٌ (relative), زَوْجَةُ الأَبِ (stepmother), زَوْجُ الأُمِّ (stepfather).',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · whose family member? (website possessive table)', title: 'My, your, his, her', ar: 'ضَمَائِرُ المِلْكِيَّةِ',
    cols: [{ label: 'Meaning', w: 2.5 }, { label: 'Ending', w: 1.6, size: 26 }, { label: 'uncle (father’s side)', w: 2.7, size: 24 }, { label: 'aunt (mother’s side)', w: 2.7, size: 24 }, { label: 'father', w: 2.83, size: 24 }],
    ltr: true,
    rows: [
      { core: true, cells: ['my', { ar: '{e|ـي}' }, { ar: 'عَمِّ{e|ي}' }, { ar: 'خَالَتِ{e|ي}' }, { ar: 'أَبِ{e|ي}' }] },
      { cells: ['your (to a boy)', { ar: '{w|ـكَ}' }, { ar: 'عَمُّ{w|كَ}' }, { ar: 'خَالَتُ{w|كَ}' }, { ar: 'أَبُو{w|كَ}' }] },
      { cells: ['your (to a girl)', { ar: '{e|ـكِ}' }, { ar: 'عَمُّ{e|كِ}' }, { ar: 'خَالَتُ{e|كِ}' }, { ar: 'أَبُو{e|كِ}' }] },
      { core: true, cells: ['his', { ar: '{w|ـهُ}' }, { ar: 'عَمُّ{w|هُ}' }, { ar: 'خَالَتُ{w|هُ}' }, { ar: 'أَبُو{w|هُ}' }] },
      { core: true, cells: ['her', { ar: '{e|ـهَا}' }, { ar: 'عَمُّ{e|هَا}' }, { ar: 'خَالَتُ{e|هَا}' }, { ar: 'أَبُو{e|هَا}' }] },
    ],
    foot: 'The ending shows the OWNER: ukhtuhu = HIS sister. Father and brother add -ū- (abūhu, akhūhā).',
    notes: `GRAMMAR PART 1 — website section 4 “Show whose family member it is” (the ending table with عَمٌّ and خَالَةٌ) and the special forms: أَبِي · أَبُوكَ / أَبُوكِ · أَبُوهُ / أَبُوهَا — the same for أَخٌ (أَخِي، أَخُوهُ) — and أُمِّي، أُمُّهُ (keep the shadda).
Website “important meaning”: choose the suffix from the owner, not from the family member. أُخْتُهُ = his sister (the sister is female, the owner is male).
Remember ة → ت before an ending: خَالَةٌ → خَالَتِي (F2).`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · clear family sentences (website)', title: 'This is my … His name is …', ar: 'جُمَلٌ عَنِ العَائِلَةِ',
    cards: [
      { chip: 'MASCULINE · CORE', color: '1D5FBF', head: 'هَذَا …', big: 'هَذَا أَبِي. اِسْمُهُ خَالِدٌ. هُوَ لَطِيفٌ.', en: 'This is my father. His name is Khalid. He is kind.', clue: 'hādhā · -hu · huwa.' },
      { chip: 'FEMININE · CORE', color: 'B83280', head: 'هَذِهِ …', big: 'هَذِهِ أُمِّي. اِسْمُهَا مَرْيَمُ. هِيَ لَطِيفَةٌ.', en: 'This is my mother. Her name is Maryam. She is kind.', clue: 'hādhihi · -hā · hiya.' },
      { chip: 'ORDER · STRETCH', color: '6B4C9A', head: 'الكَبِيرُ · الصُّغْرَى', big: 'هَذَا أَخِي الكَبِيرُ، وَهَذِهِ أُخْتِي الصُّغْرَى.', en: 'This is my big brother, and this is my younger sister.', clue: 'Age: ‘umruhu sitta ‘ashrata sana.' },
    ],
    error: { text: 'Website agreement reminder: the adjective agrees with the family member.', pairs: [['أُخْتِي لَطِيفَةٌ.', 'أُخْتِي لَطِيفٌ.']] },
    notes: `GRAMMAR PART 2 — website section 5 “Build clear family sentences”: هَذَا with a masculine family member, هَذِهِ with a feminine one, then a name, age or description. Website models: هَذَا أَبِي. اِسْمُهُ خَالِدٌ. هُوَ لَطِيفٌ وَمُجْتَهِدٌ. / هَذِهِ أُمِّي. اِسْمُهَا مَرْيَمُ. هِيَ لَطِيفَةٌ وَمُجْتَهِدَةٌ.
Connectors (website): وَ، أَيْضًا، وَلَكِنْ، لِأَنَّ. Age (F2-L03): عُمْرُهُ سِتَّ عَشْرَةَ سَنَةً · عُمْرُهَا اِثْنَتَا عَشْرَةَ سَنَةً.`,
  },
  F.quickCheck(bank(1, 'possessiveQuiz', [0, 2, 4, 9]), 'website “Ten-question possessive suffix laboratory” questions 1, 3, 5 and 10.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me introduce the Al-Rashid family', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'The family', ar: 'هَذِهِ عَائِلَةُ الرَّشِيدِ.', think: 'Family is f. → hādhihi.' },
      { head: 'Grandparents', ar: '{w|هَذَا} الجَدُّ حَسَنٌ، وَ{e|هَذِهِ} الجَدَّةُ سَلْمَى.', think: 'm. → hādhā · f. → hādhihi.' },
      { head: 'Parents', ar: '{w|هَذَا} الأَبُ خَالِدٌ، وَ{e|هَذِهِ} الأُمُّ مَرْيَمُ.', think: 'Same pattern.' },
      { head: 'Extended', ar: 'العَمُّ سَامِرٌ لَطِيفٌ، وَبِنْتُ{e|هُ} زَيْنَبُ ذَكِيَّةٌ.', think: 'HIS daughter → -hu.' },
    ],
    legend: ['w', 'e'], legendLabels: { w: 'MASCULINE', e: 'FEMININE / ENDING' },
    model: 'هَذِهِ عَائِلَةُ الرَّشِيدِ. {w|هَذَا} الجَدُّ حَسَنٌ، وَ{e|هَذِهِ} الجَدَّةُ سَلْمَى. {w|هَذَا} الأَبُ خَالِدٌ، وَ{e|هَذِهِ} الأُمُّ مَرْيَمُ. عِنْدَهُمَا بِنْتٌ وَابْنٌ. العَمُّ سَامِرٌ لَطِيفٌ، وَبِنْتُهُ زَيْنَبُ ذَكِيَّةٌ.',
    modelEn: 'This is the Al-Rashid family. This is grandfather Hassan, and this is grandmother Salma. This is the father, Khalid, and this is the mother, Maryam. They have a daughter and a son. Uncle Samir is kind, and his daughter Zaynab is clever.',
    notes: 'I DO (3 min) — the website speaking-studio model for the Al-Rashid family, with a think-aloud at every هَذَا / هَذِهِ and ending. Then ask: “Layla is Khalid’s daughter — what is Samir to Layla?” → عَمُّهَا (her paternal uncle).',
  },
  F.gameSlide({ ...game, items: [game.items[0], game.items[3], game.items[4]] }, {
    title: 'Who is it? Match the picture',
    en: ['This is my mother.', 'This is my brother.', 'This is my grandmother.'],
    icons: [[['fa6', 'FaPersonDress', 'B83280'], ['fa6', 'FaChild', '5A6472']], [['fa6', 'FaPerson', '1D5FBF'], ['fa6', 'FaPerson', '1D5FBF']], [['fa6', 'FaPersonCane', 'B83280'], ['fa6', 'FaChildDress', '5A6472']]],
    labels: ['mother and child', 'two boys', 'grandmother and girl'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Ask: which word tells you it is feminine? (هٰذِهِ). Other cards for homework: هٰذَا أَبِي، هٰذِهِ أُخْتِي، هٰذَا جَدِّي.',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website “Family Relationship Mission”', title: 'Solve the relationships', ar: 'مُهِمَّةُ العَلَاقَاتِ العَائِلِيَّةِ',
    seed: 11,
    questions: [rounds[0], rounds[1], rounds[2], rounds[7], rounds[8]],
    side: { kind: 'core', label: 'CORE', text: 'Father’s side: ‘amm / ‘amma\nMother’s side: khāl / khāla\nThe ending = the owner' },
    answerSlide: { min: 0, eyebrow: 'We do · Mission answers', title: 'Mission: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 12 relationship clues (paternal uncle, maternal aunt, his sister, her father, this is my aunt). The other 7 are homework.',
    answerNotes: 'After each answer ask: which side of the family? who is the owner?',
  },
  F.repairSlide(site, ['Mother: masculine or feminine?', 'His sister: whose ending?', 'Father has a special form.']),
  F.listening(site, {
    coreTip: 'Listen twice.\nFirst: who are the people? Second: names and one detail.',
    routes: 'Core: questions 1 and 4. Develop / Stretch: all 5.',
    gloss: [
      ['اِسْمِي لَيْلَى. عَائِلَتِي كَبِيرَةٌ وَلَطِيفَةٌ.', 'My name is Layla. My family is big and kind.'],
      ['هَذَا أَبِي، وَاسْمُهُ خَالِدٌ. هُوَ مُجْتَهِدٌ. وَهَذِهِ أُمِّي، وَاسْمُهَا مَرْيَمُ. هِيَ لَطِيفَةٌ جِدًّا.', 'This is my father, his name is Khalid. He is hard-working. And this is my mother, her name is Maryam. She is very kind.'],
      ['عِنْدِي أَخٌ أَكْبَرُ، وَاسْمُهُ يُوسُفُ، وَعُمْرُهُ سِتَّ عَشْرَةَ سَنَةً.', 'I have an older brother, his name is Yusuf, and he is sixteen.'],
      ['جَدَّتِي سَلْمَى تَعِيشُ مَعَنَا. عَمِّي سَامِرٌ يَعِيشُ فِي لَنْدَنَ، وَبِنْتُ عَمِّي زَيْنَبُ تُحِبُّ القِرَاءَةَ.', 'My grandmother Salma lives with us. My uncle Samir lives in London, and my cousin Zaynab loves reading.'],
      ['أَنَا أُحِبُّ عَائِلَتِي لِأَنَّهَا مُتَعَاوِنَةٌ.', 'I love my family because it is helpful (we help each other).'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · the Al-Rashid family (website)', title: 'The Al-Rashid family', ar: 'عَائِلَةُ الرَّشِيدِ',
    lines: [
      ['هَذِهِ عَائِلَةُ الرَّشِيدِ. الجَدُّ حَسَنٌ وَالجَدَّةُ سَلْمَى يَعِيشَانِ فِي بَيْتٍ كَبِيرٍ.', 'Grandparents Hassan and Salma live in a big house'],
      ['اِبْنُهُمَا خَالِدٌ هُوَ أَبُو لَيْلَى وَيُوسُفَ. زَوْجَتُهُ مَرْيَمُ مُعَلِّمَةٌ لَطِيفَةٌ.', 'Their son Khalid = Layla and Yusuf’s father · his wife Maryam: a kind teacher'],
      ['لَيْلَى بِنْتٌ ذَكِيَّةٌ، وَأَخُوهَا يُوسُفُ طَالِبٌ مُجْتَهِدٌ.', 'Layla: clever · her brother Yusuf: a hard-working student'],
      ['لِخَالِدٍ أَخٌ وَأُخْتٌ: أَخُوهُ سَامِرٌ، وَأُخْتُهُ نُورٌ. سَامِرٌ هُوَ عَمُّ لَيْلَى، وَنُورٌ هِيَ عَمَّتُهَا.', 'Khalid’s brother Samir and sister Noor = Layla’s paternal uncle and aunt'],
      ['زَيْنَبُ بِنْتُ سَامِرٍ، فَهِيَ بِنْتُ عَمِّ لَيْلَى. تَجْتَمِعُ العَائِلَةُ فِي نِهَايَةِ الأُسْبُوعِ.', 'Zaynab = Samir’s daughter = Layla’s cousin · the family meets at the weekend'],
    ],
    notes: 'AL-RASHID FAMILY (website, one sentence abridged: “the relatives like to eat and talk together”). Draw the tree live as the class reads (website section 3). Every relationship is from LAYLA’s point of view.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions (website)', title: 'Who is who?', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 9,
    questions: bank(1, 'readingQuiz', [1, 2, 6, 7, 8]),
    side: { kind: 'info', head: 'USE THE TEXT', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Find the name → read the words next to it.\nFather’s side or mother’s side?' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading questions 2, 3, 7, 8 and 9. The other 5 are homework.',
    answerNotes: 'A student reads aloud the evidence phrase (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'مَنْ هَذَا؟ مَنْ هَذِهِ؟' },
      { route: 'develop', ar: 'قَدِّمْ عَائِلَةَ الرَّشِيدِ: الجَدُّ، الجَدَّةُ، الأَبُ، الأُمُّ.' },
      { route: 'develop', ar: 'مَنْ سَامِرٌ؟ مَنْ زَيْنَبُ؟' },
      { route: 'stretch', ar: 'قَدِّمْ عَائِلَةً (حَقِيقِيَّةً أَوْ خَيَالِيَّةً) فِي سِتِّ جُمَلٍ.' },
    ],
    stems: [
      { route: 'core', ar: 'هَذَا ______ . / هَذِهِ ______ .' },
      { route: 'develop', ar: 'هَذَا الجَدُّ ______ ، وَهَذِهِ الجَدَّةُ ______ .' },
      { route: 'develop', ar: 'سَامِرٌ عَمُّ لَيْلَى، وَزَيْنَبُ ______ .' },
      { route: 'stretch', ar: 'عِنْدِي ______ ، وَ ______ ، وَأُحِبُّ عَائِلَتِي لِأَنَّ ______ .' },
    ],
    modelEn: ['Who is this (m.)? And who is this (f.)?', 'This is the Al-Rashid family. This is grandfather Hassan, and this is grandmother Salma.'],
    notes: `WEBSITE SPEAKING STUDIO “Introduce a family” — real or invented; speak from a tree or short notes. Prompt cards (website):
${prompts.map((r) => `• ${r.title}: ${r.detail}`).join('\n')}
Website checklist (listener ticks 1–6): six relationships · possessive forms (أَبِي، أُمِّي، أَخُوهَا) · هَذَا / هَذِهِ and matching adjectives · names, ages or places · connectors · clear delivery.
The Core prompt and the “who is Samir?” prompt are teacher-made from the reading.`,
  }),
  F.routesSlide(site, {
    core: { amount: '6 sentences', how: 'Label a fictional tree, then six “this is …” sentences with a name each.' },
    develop: { amount: '70–90 words', how: 'Immediate + extended family, his / her endings, three connectors.' },
    stretch: { amount: '90+ words', how: 'Sibling order, cousins on both sides, a comparison and a reason.' },
  }),
  F.framesSlide({
    core: [
      { en: 'This is my father.', ar: 'هَذَا أَبِي.' },
      { en: 'This is my mother.', ar: 'هَذِهِ أُمِّي.' },
      { en: 'His name is …', ar: 'اِسْمُهُ ______ .' },
      { en: 'Her name is …', ar: 'اِسْمُهَا ______ .' },
      { en: 'I have a brother and a sister.', ar: 'عِنْدِي أَخٌ وَأُخْتٌ.' },
    ],
    develop: [
      { en: 'This is my uncle (father’s side).', ar: 'هَذَا عَمِّي.' },
      { en: 'This is my aunt (mother’s side).', ar: 'هَذِهِ خَالَتِي.' },
      { en: 'His sister is …', ar: 'أُخْتُهُ ______ .' },
      { en: 'My older brother is … years old.', ar: 'أَخِي الأَكْبَرُ عُمْرُهُ ______ سَنَةً.' },
      { en: 'I love my family because …', ar: 'أُحِبُّ عَائِلَتِي لِأَنَّهَا ______ .' },
    ],
    bank: ['أَبٌ', 'أُمٌّ', 'أَخٌ', 'أُخْتٌ', 'جَدٌّ', 'جَدَّةٌ', 'عَمٌّ', 'خَالَةٌ', 'هَذَا', 'هَذِهِ', 'اِسْمُهُ', 'اِسْمُهَا'],
  }),
  F.modelSlide(site,
    'This is the Al-Rashid family. This is grandfather Hassan, and this is grandmother Salma. This is the father, Khalid, and this is the mother, Maryam. They have a daughter and a son. Uncle Samir is kind, and his daughter Zaynab is clever.',
    ['hādhā + a man', 'hādhihi + a woman', 'an ending (-hu)', 'a paternal uncle'],
    'Website model (speaking prompt “Al-Rashid family”). Develop: add Layla, Yusuf and aunt Noor with an age and a reason to reach 70–90 words.'),
  F.selfCheckSlide([
    { route: 'core', text: 'hādhā for men, hādhihi for women.' },
    { route: 'core', text: 'I used “my” (-ī) correctly.' },
    { route: 'develop', text: 'His (-hu) / her (-hā) show the owner.' },
    { route: 'develop', text: 'I used abūhu / akhūhā correctly.' },
    { route: 'stretch', text: 'Paternal vs maternal and sibling order are accurate.' },
  ]),
  F.exitTicket(bank(1, 'finalQuiz', [0, 2, 4]), 12),
  F.prepSlide({
    ...NEXT,
    words: [['طَوِيلٌ', 'tall', 'f. طَوِيلَةٌ'], ['قَصِيرٌ', 'short', 'f. قَصِيرَةٌ'], ['لَطِيفٌ', 'kind', 'f. لَطِيفَةٌ'], ['مُضْحِكٌ', 'funny', 'f. مُضْحِكَةٌ'], ['كَرِيمٌ', 'generous', 'f. كَرِيمَةٌ']],
    questionEn: 'Think of a family member or a friend (or a character). Which two words describe them?',
    questionAr: 'كَيْفَ هُوَ؟ كَيْفَ هِيَ؟',
    homework: {
      core: 'Website F3-L01: the Family Relationship Mission (12) and the picture game.',
      develop: 'Website writing workshop: describe a real or invented family tree in 70–90 words.',
      stretch: 'Draw three generations and write 90+ words with cousins on both sides.',
    },
    wordsSource: 'The five words come from the website F3-L02 appearance and personality banks (m. / f.).',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: hādhā / hādhihi · the ending shows the owner.' }),
];

module.exports = { meta, slides };
