'use strict';
/* D2-L02 · Relationships — Family, Friends and How We Get On — website: Pathways › Development › D2 › D2-L02 (أَتَفَاهَمُ مَعَ, object pronouns يَدْعَمُنِي / أَحْتَرِمُهَا, reciprocal نَتَشَاجَرُ / نَتَصَالَحُ, reasons لِأَنَّنَا). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D2')({
  n: 2, fileTitle: 'Relationships', chip: 'Relationships',
  title: 'Relationships — Family, Friends and How We Get On', arabic: 'العَلَاقَاتُ — العَائِلَةُ وَالأَصْدِقَاءُ وَكَيْفِيَّةُ التَّعَامُلِ',
  focus: 'Say how you get on with people (أَتَفَاهَمُ مَعَ …), who does what to whom (يَدْعَمُنِي، أَحْتَرِمُهَا), what we do together (نَتَشَاجَرُ ثُمَّ نَتَصَالَحُ) — and always why.',
  icon: 'FaPeopleGroup', iconSet: 'fa6',
});

const who = (he, she, we) => ({ tag: 'he · she · we', forms: [{ l: 'we', ar: we }, { l: 'she', ar: she }, { l: 'he', ar: he }] });
const P = (a, b) => ({ ar: a, sub: b });
const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });

const slides = D.devLesson('D2-L02', {
  support: `• Core: three chunks learnt whole — أَتَفَاهَمُ مَعَ … (I get on with) · … يَدْعَمُنِي (… supports me) · نَتَشَاجَرُ ثُمَّ نَتَصَالَحُ (we argue, then make up) — plus one reason (because …).
• Develop: object endings (أُسَاعِدُهُ / أَحْتَرِمُهَا) — the same endings as D1-L05 — and لِأَنَّنَا for “because we”. Stretch: a strong and a difficult relationship compared, with how problems are solved.
• Sensitivity: family situations differ. Students may describe a friend, a cousin or an invented person; “sometimes difficult” should stay light (computer, TV, chores).
• Urdu bridge: تعلقات، احترام، اعتماد (→ ثقة), مدد (→ أُسَاعِدُ by meaning), صلح.`,
  teach: 'Get on with, supports me, we argue — and why.',
  wedo: 'Picture match, decide accurate / inaccurate, fix and listen.',
  next: { nextCode: 'D2-L03', nextTitle: 'Clothes and Accessories — Vocabulary and Shopping', nextAr: 'المَلَابِسُ وَالإِكْسِسْوَارَاتُ' },
  flexGroups: [2],
  doNow: {
    questions: [
      q('What does أَتَفَاهَمُ مَعَ mean?', ['I get on with', 'I disagree with', 'I trust'], 'Prepared at home.'),
      q('What does صَدِيقٌ مُقَرَّبٌ mean?', ['a close friend', 'a new friend', 'a relative'], 'Prepared at home.'),
      q('Choose “She is patient.”', ['هِيَ صَبُورَةٌ.', 'هِيَ صَبُورٌ.', 'هُوَ صَبُورَةٌ.'], 'D2-L01: she → -a(tun).'),
      q('Complete: هِيَ كَرِيمَةٌ ___ تُسَاعِدُ الآخَرِينَ.', ['لِأَنَّهَا', 'لِأَنَّهُ', 'وَلٰكِنَّهُ'], 'D2-L01: because SHE.'),
      q('Choose “I help her”.', ['أُسَاعِدُهَا', 'أُسَاعِدُهُ', 'تُسَاعِدُنِي'], 'D1-L05 object endings.'),
    ],
    keyIdea: { text: 'The ending on the verb shows who RECEIVES the action: -nī me · -hu him · -hā her.', ar: 'أَبِي يَدْعَمُ{e|نِي}  ·  أَحْتَرِمُ{w|هُ}  ·  أُسَاعِدُ{k|هَا}' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home. Questions 3–5 retrieve D2-L01 (agreement, لِأَنَّهَا) and D1-L05 (object endings).',
  },
  routes: {
    core: ['I can say who I get on with and who supports me.', 'I can give one reason with “because”.'],
    develop: ['I can use object endings (supports me, I respect her).', 'I can describe what we do together (we argue / we make up).'],
    stretch: ['I can compare a strong and a difficult relationship.', 'I can explain how a problem is solved.'],
  },
  bridge: [
    { ar: 'عَلَاقَةٌ', urdu: 'تعلق', tr: 'taʿalluq', en: 'connection, relationship' },
    { ar: 'أَحْتَرِمُ', urdu: 'احترام', tr: 'ihtirām', en: 'respect' },
    { ar: 'أَثِقُ بِـ', urdu: 'وثوق', tr: 'wusūq', en: 'confidence, trust' },
    { ar: 'نَتَصَالَحُ', urdu: 'صلح', tr: 'sulah', en: 'reconciliation → we make up' },
    { ar: 'قَوِيَّةٌ', urdu: 'قوی', tr: 'qavī', en: 'strong' },
  ],
  bridgeNotes: 'URDU BRIDGE: تعلق / تعلقات → عَلَاقَةٌ (same root ع-ل-ق). احترام → أَحْتَرِمُ (I respect). وثوق (trust, formal Urdu) → أَثِقُ بِـ. صلح (peace, reconciliation) → نَتَصَالَحُ (we make up). قوی (strong) → قَوِيٌّ / قَوِيَّةٌ.',
  core: ['أَتَفَاهَمُ مَعَ', 'أَخْتَلِفُ مَعَ', 'أَثِقُ بِـ', 'أَحْتَرِمُ', 'يَدْعَمُنِي', 'تَدْعَمُنِي', 'نَتَشَاجَرُ', 'نَتَصَالَحُ', 'صَدِيقٌ مُقَرَّبٌ'],
  forms: {
    'أَتَفَاهَمُ مَعَ': who('يَتَفَاهَمُ', 'تَتَفَاهَمُ', 'نَتَفَاهَمُ'),
    'أَخْتَلِفُ مَعَ': who('يَخْتَلِفُ', 'تَخْتَلِفُ', 'نَخْتَلِفُ'),
    'أَثِقُ بِـ': who('يَثِقُ', 'تَثِقُ', 'نَثِقُ'),
    'أَحْتَرِمُ': { tag: 'him · her · them', forms: [{ l: 'them', ar: 'أَحْتَرِمُهُمْ' }, { l: 'her', ar: 'أَحْتَرِمُهَا' }, { l: 'him', ar: 'أَحْتَرِمُهُ' }] },
    'أُسَاعِدُ': { tag: 'him · her · them', forms: [{ l: 'them', ar: 'أُسَاعِدُهُمْ' }, { l: 'her', ar: 'أُسَاعِدُهَا' }, { l: 'him', ar: 'أُسَاعِدُهُ' }] },
    'يَدْعَمُنِي': { tag: 'me · us · him', forms: [{ l: 'him', ar: 'يَدْعَمُهُ' }, { l: 'us', ar: 'يَدْعَمُنَا' }, { l: 'me', ar: 'يَدْعَمُنِي' }] },
    'صَدِيقٌ مُقَرَّبٌ': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'أَصْدِقَاءُ مُقَرَّبُونَ' }, { l: 'f.', ar: 'صَدِيقَةٌ مُقَرَّبَةٌ' }, { l: 'm.', ar: 'صَدِيقٌ مُقَرَّبٌ' }] },
    'عَلَاقَةٌ قَوِيَّةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'عَلَاقَاتٌ قَوِيَّةٌ' }, { l: 'weak', ar: 'عَلَاقَةٌ ضَعِيفَةٌ' }, { l: 'one', ar: 'عَلَاقَةٌ قَوِيَّةٌ' }] },
  },
  vocabNotes: { 0: 'يَدْعَمُنِي vs تَدْعَمُنِي: the FRONT tells you who supports (he / she); the END (-nī) tells you it is me. Ask: “who is doing it, who receives it?”', 1: 'نَتَصَالَحُ and نَتَشَاجَرُ start with na- = we: things we do TO EACH OTHER.', 2: 'Reasons and contrast (FLEX) — the same connectors in every D2 lesson.' },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · object pronouns (website rule + table)', title: 'Who receives the action?', ar: 'ضَمَائِرُ المَفْعُولِ',
      cols: [{ label: 'With a noun', w: 4.2, size: 24 }, { label: 'With an ending', w: 3.6, size: 26 }, { label: 'Meaning', w: 4.53 }],
      rows: [
        { core: true, cells: [P('أَحْتَرِمُ أَخِي.', 'I respect my brother.'), { ar: 'أَحْتَرِمُ{w|هُ}' }, 'I respect him.'] },
        { core: true, cells: [P('أَحْتَرِمُ أُمِّي.', 'I respect my mother.'), { ar: 'أَحْتَرِمُ{e|هَا}' }, 'I respect her.'] },
        { core: true, cells: [P('أَبِي يَدْعَمُ ابْنَهُ.', 'My father supports his son.'), { ar: 'أَبِي يَدْعَمُ{k|نِي}' }, 'My father supports me.'] },
        { cells: [P('أُخْتِي تُسَاعِدُ أَخَاهَا.', 'My sister helps her brother.'), { ar: 'أُخْتِي تُسَاعِدُ{k|نِي}' }, 'My sister helps me.'] },
        { cells: [P('نَتَفَاهَمُ مَعَ أَصْدِقَائِنَا.', 'We get on with our friends.'), { ar: 'نَتَفَاهَمُ مَعَ{w|هُمْ}' }, 'We get on with them.'] },
      ],
      foot: 'Front of the verb = WHO does it (ya- he · ta- she). End of the verb = WHO receives it (-nī me · -hu him · -hā her).',
      notes: `GRAMMAR PART 1 — website rule “Object pronouns” (the suffix shows who receives the action) and the website table (With noun · With pronoun). Recycles D1-L05 (أُسَاعِدُهَا).
Website common error: attaching the wrong gender — أَحْتَرِمُهُ for a woman ✗ → أَحْتَرِمُهَا ✓.
Quick-fire: teacher says a person (أُمِّي / أَخِي / أَصْدِقَائِي); students answer أَحْتَرِمُهَا / أَحْتَرِمُهُ / أَحْتَرِمُهُمْ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · with, together, and why (website rules)', title: 'Get on with · we argue · because we', ar: 'مَعَ · نَتَـ · لِأَنَّنَا',
      cards: [
        { chip: 'WITH · CORE', color: '1D5FBF', head: 'مَعَ', big: 'أَتَفَاهَمُ مَعَ أُخْتِي، وَأَخْتَلِفُ مَعَ أَخِي أَحْيَانًا.', en: 'I get on with my sister, and I sometimes disagree with my brother.', clue: 'Never drop maʿa.' },
        { chip: 'TOGETHER · DEVELOP', color: '6B4C9A', head: 'نَتَـ…', big: 'نَتَشَاجَرُ ثُمَّ نَتَصَالَحُ.', en: 'We argue, then we make up.', clue: 'na- = we, to each other.' },
        { chip: 'WHY · DEVELOP', color: '1E7B4F', head: 'لِأَنَّنَا', big: 'نَتَفَاهَمُ لِأَنَّنَا نَسْتَمِعُ إِلَى بَعْضِنَا.', en: 'We get on because we listen to each other.', clue: 'Because we = li-annanā.' },
      ],
      error: { text: 'Website common error: do not drop maʿa after “I get on”.', pairs: [['أَتَفَاهَمُ مَعَ أُخْتِي.', 'أَتَفَاهَمُ أُخْتِي.']] },
      notes: `GRAMMAR PART 2 — website rules “Get on with / disagree with” (use مَعَ), “Reciprocal actions” (the نَـ form: what we do together or to one another) and “Explain the relationship” (give a reason, not just a label).
Reason forms to learn: لِأَنَّهُ (because he) · لِأَنَّهَا (because she) · لِأَنَّنَا (because we) · لِأَنَّنِي (because I).`,
    },
  ],
  quick: [0, 1, 2, 3],
  ido: {
    title: 'Watch me describe two relationships',
    steps: [
      { head: 'Strong', ar: 'أَتَفَاهَمُ {k|مَعَ} أُخْتِي جَيِّدًا.', think: 'Get on WITH.' },
      { head: 'Proof', ar: 'هِيَ تَدْعَمُ{e|نِي} عِنْدَمَا أَكُونُ قَلِقًا.', think: 'She (ta-) … me (-nī).' },
      { head: 'Difficult', ar: 'أَخْتَلِفُ {k|مَعَ} ابْنِ عَمِّي، وَأَحْيَانًا {w|نَ}تَشَاجَرُ.', think: 'We → na-.' },
      { head: 'Solution', ar: 'وَلٰكِنَّنَا {w|نَ}تَصَالَحُ {k|لِأَنَّنَا} نَحْتَرِمُ بَعْضَنَا.', think: 'Because we …' },
    ],
    legend: ['k', 'e', 'w'], legendLabels: { k: 'WITH / BECAUSE', e: 'OBJECT ENDING', w: 'WE (NA-)' },
    model: 'أَتَفَاهَمُ {k|مَعَ} أُخْتِي جَيِّدًا؛ هِيَ تَدْعَمُ{e|نِي} عِنْدَمَا أَكُونُ قَلِقًا، وَأَنَا أُسَاعِدُ{e|هَا} فِي وَاجِبِهَا. أَمَّا ابْنُ عَمِّي فَأَخْتَلِفُ {k|مَعَهُ} أَحْيَانًا، وَ{w|نَ}تَشَاجَرُ حَوْلَ الحَاسُوبِ، وَلٰكِنَّنَا {w|نَ}تَصَالَحُ سَرِيعًا {k|لِأَنَّنَا} نَحْتَرِمُ بَعْضَنَا.',
    modelEn: 'I get on well with my sister; she supports me when I am worried, and I help her with her homework. As for my cousin, I sometimes disagree with him, and we argue about the computer, but we make up quickly because we respect each other.',
    notes: 'I DO (3 min) — website patterns and the website writing model condensed into one strong and one difficult relationship, with a think-aloud (“who does it? who receives it? why?”).',
  },
  game: {
    title: 'How do they get on? Match the picture',
    pick: [1, 4, 5],
    en: ['They (two) get on well.', 'We disagree sometimes.', 'We help each other.'],
    icons: [[['fa6', 'FaHandshake', '1E7B4F'], ['fa6', 'FaFaceSmile', 'C77700']], [['fa6', 'FaComments', 'B83227'], ['fa6', 'FaScaleUnbalanced', '5A6472']], [['fa6', 'FaHandsHoldingCircle', '1D5FBF'], ['fa6', 'FaPeopleCarryBox', '6B4C9A']]],
    labels: ['getting on well', 'disagreeing', 'helping each other'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Stretch: يَتَفَاهَمَانِ is the DUAL (they two) — the -āni ending. Other cards for homework: صَدِيقَتَانِ مُقَرَّبَتَانِ (two close friends, f.), عَلَاقَتِي بِعَائِلَتِي جَيِّدَةٌ, نَتَحَدَّثُ كَثِيرًا مَعًا.',
  },
  patch: {
    patterns: [
      { ar: 'أَتَفَاهَمُ مَعَ أُخْتِي.', en: 'I get on with my sister.', tip: 'Get on WITH (مَعَ).' },
      { ar: 'أَبِي يَدْعَمُنِي.', en: 'My father supports me.', tip: 'Object ending: -nī = me.' },
      { ar: 'نَتَعَاوَنُ فِي البَيْتِ.', en: 'We cooperate at home.', tip: 'Reciprocal: na- = we.' },
      { ar: 'نَتَفَاهَمُ لِأَنَّنَا نَسْتَمِعُ إِلَى بَعْضِنَا.', en: 'We get on because we listen to each other.', tip: 'Reason: because we.' },
    ],
    mistakes: [
      { wrong: 'أَتَفَاهَمُ أُخْتِي.', right: 'أَتَفَاهَمُ مَعَ أُخْتِي.', why: 'Use مَعَ after أَتَفَاهَمُ.' },
      { wrong: 'أُمِّي يَدْعَمُنِي.', right: 'أُمِّي تَدْعَمُنِي.', why: 'My mother = she → تَـ.' },
      { wrong: 'أَحْتَرِمُ أُمِّي؛ أَحْتَرِمُهُ.', right: 'أَحْتَرِمُ أُمِّي؛ أَحْتَرِمُهَا.', why: 'ـهَا refers to her.' },
    ],
    sorter: {
      title: 'Accurate or not?', instructions: 'Decide whether each Arabic sentence is accurate (right preposition, right ending, right person).',
      categories: ['Accurate', 'Inaccurate'],
      items: [
        { label: 'أَتَفَاهَمُ مَعَ أُخْتِي.', answer: 0 }, { label: 'أَبِي يَدْعَمُنِي.', answer: 0 }, { label: 'أَحْتَرِمُهَا.', answer: 0 }, { label: 'نَتَشَاجَرُ ثُمَّ نَتَصَالَحُ.', answer: 0 },
        { label: 'أَتَفَاهَمُ أُخْتِي.', answer: 1 }, { label: 'أُمِّي يَدْعَمُنِي.', answer: 1 }, { label: 'نَتَفَاهَمُ لِأَنَّهُ نَسْتَمِعُ.', answer: 1 }, { label: 'أَنَا يَحْتَرِمُهَا.', answer: 1 },
      ],
    },
    listening: {
      questions: [
        L('Who is Samer?', ['the speaker’s older brother', 'a classmate', 'a cousin'], 'لَدَيَّ أَخٌ أَكْبَرُ يُسَمَّى سَامِرًا.'),
        L('Why does the speaker usually get on with him?', ['he listens and supports the speaker’s studies', 'he buys presents', 'he is very quiet'], 'لِأَنَّهُ يَسْتَمِعُ إِلَيَّ وَيَدْعَمُنِي فِي دِرَاسَتِي.'),
        L('What do they sometimes disagree about?', ['using the computer', 'football', 'homework'], 'نَخْتَلِفُ أَحْيَانًا حَوْلَ اسْتِخْدَامِ الحَاسُوبِ.'),
        L('What happens after they argue?', ['they talk and make up quickly', 'they stop speaking for days', 'their mother decides'], 'نَتَكَلَّمُ بَعْدَ ذٰلِكَ وَنَتَصَالَحُ سَرِيعًا.'),
        L('Why does the speaker respect him?', ['he is honest and helpful', 'he is older', 'he is funny'], 'أَحْتَرِمُهُ لِأَنَّهُ صَادِقٌ وَمُتَعَاوِنٌ.'),
        L('In أَحْتَرِمُهُ, who is respected?', ['Samer (him)', 'the speaker (me)', 'the mother (her)'], '-hu = him.'),
      ],
    },
    reading: {
      questions: [
        L('Who is Hind?', ['Layla’s friend', 'Layla’s sister', 'Layla’s teacher'], 'صَدِيقَتِهَا هِنْدٍ.'),
        L('Why is their relationship strong?', ['they trust each other and spend time together', 'they live in the same house', 'they never disagree'], 'تَثِقَانِ بِبَعْضِهِمَا وَتَقْضِيَانِ الوَقْتَ مَعًا.'),
        L('How does Hind help Layla?', ['she supports her when she is worried', 'she cooks for her', 'she drives her to school'], 'تَدْعَمُ لَيْلَى عِنْدَمَا تَكُونُ قَلِقَةً.'),
        L('How does Layla help Hind?', ['with her studies', 'with shopping', 'with sport'], 'لَيْلَى تُسَاعِدُهَا فِي الدِّرَاسَةِ.'),
        L('Do they always agree?', ['no — they differ in some opinions', 'yes, always', 'the text does not say'], 'تَخْتَلِفَانِ فِي بَعْضِ الآرَاءِ.'),
        L('What do they do about their differences?', ['listen to each other and respect the difference', 'argue every day', 'stop talking'], 'تَسْتَمِعَانِ … وَتَحْتَرِمَانِ الاِخْتِلَافَ.'),
      ],
    },
  },
  sorterCats: ['Accurate', 'Inaccurate'],
  hints: ['Get on … WITH?', 'My mother = he or she?', 'Mother → which ending?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 4.\nListen for: أَخٌ أَكْبَرُ · الحَاسُوبِ · نَتَصَالَحُ.',
  listenRoutes: 'Core: questions 1, 3 and 4. Develop / Stretch: all 6. (Questions are teacher-written: the website questions for this script are generic.)',
  gloss: [
    ['لَدَيَّ أَخٌ أَكْبَرُ يُسَمَّى سَامِرًا.', 'I have an older brother called Samer.'],
    ['أَتَفَاهَمُ مَعَهُ عَادَةً لِأَنَّهُ يَسْتَمِعُ إِلَيَّ وَيَدْعَمُنِي فِي دِرَاسَتِي.', 'I usually get on with him because he listens to me and supports me in my studies.'],
    ['وَلٰكِنَّنَا نَخْتَلِفُ أَحْيَانًا حَوْلَ اسْتِخْدَامِ الحَاسُوبِ.', 'But we sometimes disagree about using the computer.'],
    ['عِنْدَمَا نَتَشَاجَرُ، نَتَكَلَّمُ بَعْدَ ذٰلِكَ وَنَتَصَالَحُ سَرِيعًا.', 'When we argue, we talk afterwards and make up quickly.'],
    ['أَحْتَرِمُهُ لِأَنَّهُ صَادِقٌ وَمُتَعَاوِنٌ.', 'I respect him because he is honest and helpful.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ عَلَاقَتَكَ بِصَدِيقٍ مُقَرَّبٍ.' },
      { route: 'develop', ar: 'مَنْ يَدْعَمُكَ وَكَيْفَ؟' },
      { route: 'develop', ar: 'مَتَى تَخْتَلِفُ مَعَ أَحَدٍ فِي أُسْرَتِكَ؟' },
      { route: 'stretch', ar: 'مَا الَّذِي يَجْعَلُ العَلَاقَةَ قَوِيَّةً؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَتَفَاهَمُ مَعَ ______ لِأَنَّ ______ .' },
      { route: 'develop', ar: '______ يَدْعَمُنِي / تَدْعَمُنِي عِنْدَمَا ______ .' },
      { route: 'develop', ar: 'نَتَشَاجَرُ أَحْيَانًا حَوْلَ ______ ، وَلٰكِنَّنَا ______ .' },
      { route: 'stretch', ar: 'العَلَاقَةُ القَوِيَّةُ تَحْتَاجُ إِلَى ______ لِأَنَّ ______ .' },
    ],
    modelEn: ['Who supports you in your studies?', 'My sister supports and helps me.'],
    notes: 'Website prompts (order changed for routes). Website model continues: A: هَلْ تَخْتَلِفَانِ أَحْيَانًا؟ (Do you two sometimes disagree?) B: نَعَمْ، وَلٰكِنَّنَا نَتَصَالَحُ سَرِيعًا. (Yes, but we make up quickly.)',
  },
  write: {
    core: { amount: '5 sentences', how: 'One relationship: get on with … · … supports me · one reason (because …).' },
    develop: { amount: '8 sentences', how: 'Two relationships with object endings (him / her / me) and “we argue … we make up”.' },
    stretch: { amount: '100–120 words', how: 'Website task: one strong and one sometimes difficult relationship — actions, feelings, reasons and how problems are resolved.' },
  },
  frames: {
    core: [
      { en: 'I get on with …', ar: 'أَتَفَاهَمُ مَعَ ______ .' },
      { en: '… supports me (he / she).', ar: '______ يَدْعَمُنِي / تَدْعَمُنِي.' },
      { en: 'I respect him / her.', ar: 'أَحْتَرِمُهُ / أَحْتَرِمُهَا.' },
      { en: 'We sometimes argue.', ar: 'أَحْيَانًا نَتَشَاجَرُ.' },
      { en: 'Then we make up.', ar: 'ثُمَّ نَتَصَالَحُ.' },
    ],
    develop: [
      { en: 'I get on with … because he / she …', ar: 'أَتَفَاهَمُ مَعَ ______ لِأَنَّهُ / لِأَنَّهَا ______ .' },
      { en: 'I sometimes disagree with … about …', ar: 'أَخْتَلِفُ مَعَ ______ أَحْيَانًا حَوْلَ ______ .' },
      { en: 'I help him / her with …', ar: 'أُسَاعِدُهُ / أُسَاعِدُهَا فِي ______ .' },
      { en: 'We get on because we …', ar: 'نَتَفَاهَمُ لِأَنَّنَا ______ .' },
      { en: 'Although we disagree, …', ar: 'عَلَى الرَّغْمِ مِنْ أَنَّنَا نَخْتَلِفُ ، ______ .' },
    ],
    bank: ['أَتَفَاهَمُ مَعَ', 'أَخْتَلِفُ مَعَ', 'أَثِقُ بِـ', 'أَحْتَرِمُهُ / أَحْتَرِمُهَا', 'يَدْعَمُنِي', 'تَدْعَمُنِي', 'نَتَشَاجَرُ', 'نَتَصَالَحُ', 'صَدِيقٌ مُقَرَّبٌ', 'عَلَاقَةٌ قَوِيَّةٌ', 'لِأَنَّنَا', 'وَلٰكِنَّنَا'],
  },
  stretch: [
    ['نَثِقُ بِبَعْضِنَا', 'we trust each other'],
    ['عِنْدَمَا أَكُونُ قَلِقًا / قَلِقَةً', 'when I am worried (m. / f.)'],
    ['أَصْعَبُ نَوْعًا مَا', 'somewhat more difficult'],
    ['نَتَكَلَّمُ بِهُدُوءٍ', 'we talk calmly'],
    ['يُسَاعِدَانِ النَّاسَ عَلَى فَهْمِ بَعْضِهِمْ', 'they help people understand each other'],
  ],
  modelEn: 'My relationship with my sister is strong because we get on and trust each other. She supports me when I am worried, and I help her with her homework. As for my relationship with my cousin, it is somewhat more difficult, because we disagree about computer games. Sometimes we argue, but we talk calmly and make up afterwards. In my opinion, respect and listening are the two most important things in any relationship, because they help people understand each other.',
  find: ['two object endings', 'a reciprocal “we” verb', 'a reason with لِأَنَّنَا', 'the opinion'],
  modelNotes: 'Evidence: تَدْعَمُنِي، أُسَاعِدُهَا · نَتَفَاهَمُ، نَثِقُ، نَتَشَاجَرُ، نَتَصَالَحُ · لِأَنَّنَا نَتَفَاهَمُ، لِأَنَّنَا نَخْتَلِفُ · فِي رَأْيِي، الاِحْتِرَامُ وَالاِسْتِمَاعُ أَهَمُّ شَيْئَيْنِ. (Website spelling note: the model writes عِلَاقَة in two places; the standard spelling is عَلَاقَة, as in the vocabulary.)',
  selfCheck: [
    { route: 'core', text: 'I wrote “get on WITH” (maʿa).' },
    { route: 'core', text: 'I gave a reason with “because”.' },
    { route: 'develop', text: 'My object endings match the person (-hu / -hā / -nī).' },
    { route: 'develop', text: 'I used a “we” verb (we argue / we make up).' },
    { route: 'stretch', text: 'I explained how a problem is solved.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['تَكْتُبُ', 'she writes'], ['عَلَاقَتَهُمَا', 'their (two) relationship'], ['تَثِقَانِ بِبَعْضِهِمَا', 'they (two) trust each other'], ['تَقْضِيَانِ الوَقْتَ مَعًا', 'they (two) spend time together'], ['قَلِقَةً', 'worried (f.)'],
    ['تُسَاعِدُهَا', 'she helps her'], ['تَخْتَلِفَانِ', 'they (two) differ'], ['الآرَاءِ', 'opinions'], ['تَسْتَمِعَانِ', 'they (two) listen'], ['الاِخْتِلَافَ', 'the difference'],
  ],
  prep: {
    words: [['قَمِيصٌ', 'a shirt', 'pl. قُمْصَانٌ'], ['فُسْتَانٌ', 'a dress', 'pl. فَسَاتِينُ'], ['سِرْوَالٌ', 'trousers', ''], ['حِذَاءٌ', 'shoes', 'pl. أَحْذِيَةٌ'], ['مِعْطَفٌ', 'a coat', 'pl. مَعَاطِفُ']],
    questionEn: 'What are you wearing today? Name three items of clothing in Arabic.',
    questionAr: 'مَاذَا تَلْبَسُ اليَوْمَ؟',
    homework: {
      core: 'Website D2-L02: the picture game and the vocabulary tab (relationship actions).',
      develop: 'Write 8 sentences about two relationships with object endings.',
      stretch: 'Website writing task: 100–120 words — one strong and one difficult relationship.',
    },
    wordsSource: 'The five words come from the website D2-L03 vocabulary (clothes and accessories).',
  },
  remember: 'Remember: front of the verb = who does it; end of the verb = who receives it.',
});

module.exports = { meta, slides };
