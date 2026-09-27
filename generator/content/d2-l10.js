'use strict';
/* D2-L10 · Speaking — Describing People and Personal Style — website: Pathways › Development › D2 › D2-L10 (a six-stage spoken portrait: who → appearance → qualities + evidence → relationship → style → comparison and opinion). */
const D = require('./d-common');
const X = require('./d2-lex');
const { q } = D;

const meta = D.meta('D2')({
  n: 10, fileTitle: 'Describing_People_and_Style', chip: 'Spoken Portrait',
  title: 'Speaking — Describing People and Personal Style', arabic: 'التَّحَدُّثُ — وَصْفُ النَّاسِ وَالأُسْلُوبِ الشَّخْصِيِّ',
  focus: 'Give a one-minute spoken portrait in six stages — who, appearance, qualities with evidence, relationship, style, comparison and opinion — keeping every he / she and his / her consistent.',
  icon: 'FaMicrophoneLines', iconSet: 'fa6',
});

const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const G = D.site('D2-L10').grammar;

const slides = D.devLesson('D2-L10', {
  support: `• SPEAKING lesson: the main You Do is a one-minute spoken portrait (website six-stage plan). The whole unit is revised through it; only the portrait vocabulary is shown (groups 2–3 are on the website vocabulary tab).
• Core: stages 1, 2 and 5 (who, appearance, clothes) from a cue card — 20–30 seconds. Develop: add stage 3 (a quality + evidence) and stage 6. Stretch: all six stages, 60 seconds, no script, a relative clause and a comparison.
• The website grammar and quiz are copies of D2-L07; the deck teaches the rule named in the website title (“Organising an extended spoken portrait”) — flagged for the website editor.
• Respect: describe family, a famous person or an invented person — never a classmate.`,
  teach: 'The six stages and keeping he / she consistent.',
  wedo: 'Order the stages, fix references and listen.',
  next: { nextCode: 'D2-L11', nextTitle: 'Writing — Describing People, Relationships and Style', nextAr: 'الكِتَابَةُ' },
  skipGroups: [1, 2],
  doNow: {
    questions: [
      q('What does يَبْدُو mean?', ['he seems', 'he wears', 'he has'], 'Prepared at home.'),
      q('What does أُسْلُوبُهَا mean?', ['her style', 'his style', 'my style'], 'Prepared at home.'),
      q('Which is a follow-up question?', ['وَأَنْتَ، مَا أُسْلُوبُكَ؟', 'شُكْرًا.', 'أَنَا طَالِبٌ.'], 'D2-L09.'),
      q('Choose “the girl who has long hair”.', ['الفَتَاةُ الَّتِي لَهَا شَعْرٌ طَوِيلٌ', 'الفَتَاةُ الَّذِي لَهُ شَعْرٌ طَوِيلٌ', 'الفَتَاةُ الَّتِي لَهَا شَعْرٌ طَوِيلَةٌ'], 'D2-L06.'),
      q('Choose the accurate comparison.', ['أُسْلُوبُهَا أَكْثَرُ رَسْمِيَّةً مِنْ أُسْلُوبِي.', 'أُسْلُوبُهَا رَسْمِيَّةٌ مِنْ أُسْلُوبِي.', 'أُسْلُوبُهَا أَكْثَرُ رَسْمِيٌّ.'], 'D2-L05.'),
    ],
    keyIdea: { text: 'A strong portrait has an order. Once you say “my aunt”, every verb and ending stays SHE: ta- / -hā.', ar: 'خَالَتِي … {e|هِيَ} … {e|لَهَا} … {e|تَ}رْتَدِي … أُسْلُوبُ{e|هَا}' },
    retrieves: 'Questions 1–2 test two of the five structures prepared at home. Questions 3–5 retrieve D2-L09, D2-L06 and D2-L05.',
  },
  routes: {
    core: ['I can describe someone’s appearance and clothes in order.', 'I can speak for 20–30 seconds from a cue card.'],
    develop: ['I can give a quality with evidence.', 'I can keep he / she and his / her consistent.'],
    stretch: ['I can give a one-minute portrait in six stages without a script.', 'I can end with a comparison and an opinion.'],
  },
  bridge: [
    { ar: 'خُطَّةٌ', urdu: 'خط / منصوبہ', tr: 'khat', en: 'plan (meaning bridge)' },
    { ar: 'مَظْهَرٌ', urdu: 'مظہر', tr: 'mazhar', en: 'appearance, manifestation' },
    { ar: 'صِفَاتٌ', urdu: 'صفات', tr: 'sifāt', en: 'qualities' },
    { ar: 'عَلَاقَةٌ', urdu: 'تعلق', tr: 'taʿalluq', en: 'relationship' },
    { ar: 'خَالَةٌ', urdu: 'خالہ', tr: 'khāla', en: 'maternal aunt' },
  ],
  bridgeNotes: 'URDU BRIDGE: مظہر → مَظْهَرٌ (appearance); صفات → صِفَاتٌ (qualities, pl. of صِفَةٌ); تعلق → عَلَاقَةٌ; خالہ (maternal aunt) → خَالَةٌ — the person in the website model! Also خالو (uncle by marriage) is not Arabic: Arabic uses زَوْجُ خَالَتِي.',
  core: ['طَوِيلُ القَامَةِ / طَوِيلَةُ القَامَةِ', 'مُتَوَسِّطُ القَامَةِ / مُتَوَسِّطَةُ القَامَةِ', 'شَعْرٌ طَوِيلٌ', 'شَعْرٌ قَصِيرٌ', 'عَيْنَانِ بُنِّيَّتَانِ', 'يَرْتَدِي نَظَّارَةً', 'وَدُودٌ / وَدُودَةٌ', 'صَادِقٌ / صَادِقَةٌ', 'صَبُورٌ / صَبُورَةٌ'],
  forms: X.formsFor('D2-L10'),
  vocabNotes: { 0: 'Portrait language — the whole group is revision (D2-L01, D2-L06). Use it as a game: teacher says a stage number (2 = appearance, 3 = qualities) and students call out three words for it.' },
  kwText: 'This lesson revises the D2 vocabulary. Only the portrait group is shown; style and evaluation words are on the website vocabulary tab.',
  patch: {
    grammar: {
      ...G,
      rules: [
        { heading: 'Follow the six stages', formula: 'مَنْ ← المَظْهَرُ ← الصِّفَاتُ ← العَلَاقَةُ ← الأُسْلُوبُ ← الرَّأْيُ', explanation: 'A clear order makes a long answer easy to follow.', examples: ['سَأَتَحَدَّثُ عَنْ خَالَتِي مَرْيَمَ. هِيَ مُتَوَسِّطَةُ القَامَةِ …'] },
        { heading: 'Keep reference consistent', formula: 'هِيَ / تَـ / ـهَا … هُوَ / يَـ / ـهُ', explanation: 'Once you choose the person, every verb, pronoun and ending must match.', examples: ['تَرْتَدِي … أُسْلُوبُهَا … لِأَنَّهَا تُسَاعِدُ …'] },
        { heading: 'Prove each quality', formula: 'صِفَةٌ + لِأَنَّهُ / لِأَنَّهَا + سُلُوكٌ', explanation: 'Give behaviour as evidence for every personality adjective.', examples: ['هِيَ كَرِيمَةٌ لِأَنَّهَا تُسَاعِدُ كُلَّ مَنْ يَحْتَاجُ إِلَيْهَا.'] },
        { heading: 'End with comparison and opinion', formula: 'أَكْثَرُ … مِنْ · بَيْنَمَا · فِي رَأْيِي', explanation: 'A short comparison and a judgement close the portrait.', examples: ['أُسْلُوبُهَا أَكْثَرُ رَسْمِيَّةً مِنْ أُسْلُوبِي. فِي رَأْيِي، أَفْضَلُ صِفَةٍ فِيهَا كَرَمُهَا.'] },
      ],
      quiz: [
        { prompt: 'Which stage comes first?', options: ['who the person is', 'your opinion', 'the comparison'], answer: 0, feedback: 'Start with identity.' },
        { prompt: 'You are describing your aunt. Choose the accurate sentence.', options: ['تَرْتَدِي مَلَابِسَ أَنِيقَةً.', 'يَرْتَدِي مَلَابِسَ أَنِيقَةً.', 'أَرْتَدِي مَلَابِسَ أَنِيقَةً.'], answer: 0, feedback: 'Aunt = she → ta-.' },
        { prompt: 'Which proves “generous”?', options: ['هِيَ كَرِيمَةٌ لِأَنَّهَا تُسَاعِدُ الجَمِيعَ.', 'هِيَ كَرِيمَةٌ لِأَنَّ شَعْرَهَا قَصِيرٌ.', 'هِيَ كَرِيمَةٌ.'], answer: 0, feedback: 'Behaviour as evidence.' },
        { prompt: 'Which is a good closing?', options: ['فِي رَأْيِي، أَفْضَلُ صِفَةٍ فِيهَا كَرَمُهَا.', 'شَعْرُهَا قَصِيرٌ.', 'سَأَتَحَدَّثُ عَنْ خَالَتِي.'], answer: 0, feedback: 'Opinion to finish.' },
        { prompt: 'Complete: أُسْلُوبُهُ ___ رَسْمِيَّةً مِنْ أُسْلُوبِي.', options: ['أَكْثَرُ', 'أَفْضَلُ مِنْ', 'رَسْمِيٌّ'], answer: 0, feedback: 'More + noun.' },
        { prompt: 'Choose the relative clause for a man.', options: ['هُوَ الرَّجُلُ الَّذِي يَرْتَدِي نَظَّارَةً.', 'هُوَ الرَّجُلُ الَّتِي تَرْتَدِي نَظَّارَةً.', 'هُوَ الرَّجُلُ يَرْتَدِي الَّذِي.'], answer: 0, feedback: 'Man → alladhī.' },
        { prompt: 'Which stage does أَتَفَاهَمُ مَعَهَا جَيِّدًا belong to?', options: ['relationship', 'appearance', 'clothes'], answer: 0, feedback: 'Getting on = relationship.' },
        { prompt: 'Which phrase starts a portrait?', options: ['سَأَتَحَدَّثُ عَنْ …', 'فِي النِّهَايَةِ …', 'بَيْنَمَا …'], answer: 0, feedback: 'I will talk about …' },
      ],
    },
    patterns: [
      { ar: 'سَأَتَحَدَّثُ عَنْ خَالَتِي مَرْيَمَ.', en: 'I will talk about my aunt Maryam.', tip: 'Stage 1: who.' },
      { ar: 'هِيَ مُتَوَسِّطَةُ القَامَةِ، وَلَهَا شَعْرٌ قَصِيرٌ.', en: 'She is of medium height and has short hair.', tip: 'Stage 2: appearance.' },
      { ar: 'هِيَ كَرِيمَةٌ لِأَنَّهَا تُسَاعِدُ كُلَّ مَنْ يَحْتَاجُ إِلَيْهَا.', en: 'She is generous because she helps anyone who needs her.', tip: 'Stage 3: quality + evidence.' },
      { ar: 'أُسْلُوبُهَا أَكْثَرُ رَسْمِيَّةً مِنْ أُسْلُوبِي.', en: 'Her style is more formal than mine.', tip: 'Stage 6: comparison.' },
    ],
    mistakes: [
      { wrong: 'خَالَتِي … يَرْتَدِي مَلَابِسَ أَنِيقَةً.', right: 'خَالَتِي … تَرْتَدِي مَلَابِسَ أَنِيقَةً.', why: 'Keep the reference: aunt = she.' },
      { wrong: 'هِيَ كَرِيمَةٌ لِأَنَّهُ يُسَاعِدُ النَّاسَ.', right: 'هِيَ كَرِيمَةٌ لِأَنَّهَا تُسَاعِدُ النَّاسَ.', why: 'Reason pronoun and verb must match her.' },
      { wrong: 'أُسْلُوبُهَا رَسْمِيَّةٌ مِنْ أُسْلُوبِي.', right: 'أُسْلُوبُهَا أَكْثَرُ رَسْمِيَّةً مِنْ أُسْلُوبِي.', why: 'Comparison: more + noun + min.' },
    ],
    sorter: {
      title: 'Which stage of the portrait?', instructions: 'Sort each sentence into its stage.',
      categories: ['Who / appearance', 'Qualities / relationship', 'Style / opinion'],
      items: [
        { label: 'سَأَتَحَدَّثُ عَنْ خَالِي.', answer: 0 }, { label: 'لَهُ شَعْرٌ قَصِيرٌ.', answer: 0 }, { label: 'هُوَ طَوِيلُ القَامَةِ.', answer: 0 },
        { label: 'هُوَ صَبُورٌ لِأَنَّهُ يَسْتَمِعُ.', answer: 1 }, { label: 'أَتَفَاهَمُ مَعَهُ جَيِّدًا.', answer: 1 },
        { label: 'يَرْتَدِي مَلَابِسَ عَمَلِيَّةً.', answer: 2 }, { label: 'فِي رَأْيِي، أَفْضَلُ صِفَةٍ فِيهِ صَبْرُهُ.', answer: 2 },
      ],
    },
    final: [
      L('Which stage comes after appearance?', ['qualities with evidence', 'the opinion', 'who the person is'], 'Stage 3.'),
      L('Describing your uncle, choose:', ['يَرْتَدِي قَمِيصًا أَبْيَضَ.', 'تَرْتَدِي قَمِيصًا أَبْيَضَ.', 'أَرْتَدِي قَمِيصًا أَبْيَضَ.'], 'Uncle = he.'),
      L('Which proves “patient”?', ['هُوَ صَبُورٌ لِأَنَّهُ يَسْتَمِعُ بِهُدُوءٍ.', 'هُوَ صَبُورٌ لِأَنَّهُ طَوِيلٌ.', 'هُوَ صَبُورٌ.'], 'Behaviour.'),
      L('Choose the best closing.', ['فِي رَأْيِي، أَفْضَلُ صِفَةٍ فِيهِ صِدْقُهُ.', 'لَهُ لِحْيَةٌ.', 'سَأَتَحَدَّثُ عَنْ أَخِي.'], 'Opinion.'),
      L('Choose the accurate comparison.', ['هُوَ أَكْثَرُ هُدُوءًا مِنِّي.', 'هُوَ هَادِئٌ مِنِّي.', 'هُوَ أَكْثَرُ هَادِئٌ.'], 'More + noun.'),
      L('“Her hair is long” =', ['شَعْرُهَا طَوِيلٌ.', 'شَعْرُهَا طَوِيلَةٌ.', 'شَعْرُهُ طَوِيلَةٌ.'], 'Hair is masculine.'),
    ],
    mission: null,
    listening: {
      questions: [
        L('Whom does the student describe?', ['her aunt', 'her mother', 'her teacher'], 'وَصْفًا شَفَهِيًّا لِخَالَتِهَا.'),
        L('What does she start with?', ['the relationship', 'the clothes', 'her opinion'], 'تَبْدَأُ بِالعَلَاقَةِ.'),
        L('What does she describe next?', ['height, hair and clothes', 'her aunt’s job', 'her aunt’s house'], 'ثُمَّ تَصِفُ القَامَةَ وَالشَّعْرَ وَالمَلَابِسَ.'),
        L('Which qualities does she explain?', ['generous and confident', 'shy and calm', 'cheerful and patient'], 'كَرِيمَةٌ وَوَاثِقَةٌ.'),
        L('How many pieces of evidence does she give?', ['two', 'one', 'none'], 'مَعَ دَلِيلَيْنِ.'),
        L('What does she do at the end?', ['compares her aunt’s style with her own', 'asks a question', 'describes her own family'], 'تُقَارِنُ أُسْلُوبَهَا بِأُسْلُوبِهَا الشَّخْصِيِّ.'),
      ],
    },
    reading: {
      questions: [
        L('What is this text?', ['a plan for a spoken description', 'a story', 'a letter'], 'خُطَّةُ وَصْفٍ شَفَهِيٍّ.'),
        L('What is stage 1?', ['who the person is', 'appearance', 'opinion'], '١) مَنْ هُوَ الشَّخْصُ؟'),
        L('Stage 3 asks for qualities and …', ['evidence', 'prices', 'colours'], 'مَا صِفَاتُهُ وَمَا الدَّلِيلُ؟'),
        L('Stage 4 is about …', ['your relationship with the person', 'the weather', 'shopping'], 'كَيْفَ هِيَ عَلَاقَتُكَ بِهِ؟'),
        L('Stage 6 includes …', ['your opinion and a comparison', 'a goodbye', 'a question'], 'مَا رَأْيُكَ وَالمُقَارَنَةُ؟'),
        L('What does a strong answer use?', ['connectors and clear references', 'long lists', 'English words'], 'رَوَابِطَ وَمَرَاجِعَ وَاضِحَةً.'),
      ],
    },
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the six-stage portrait (website reading text + model)', title: 'Six stages, one person', ar: 'خُطَّةُ الوَصْفِ الشَّفَهِيِّ',
      cols: [{ label: 'Stage', w: 2.9, size: 22 }, { label: 'Model (website: my aunt Maryam)', w: 6.5, size: 20 }, { label: 'Route', w: 2.93 }],
      rows: [
        { core: true, cells: [{ ar: '١ مَنْ؟', sub: 'who' }, { ar: 'سَأَتَحَدَّثُ عَنْ خَالَتِي مَرْيَمَ.', sub: 'I will talk about my aunt Maryam.' }, 'Core'] },
        { core: true, cells: [{ ar: '٢ المَظْهَرُ', sub: 'appearance' }, { ar: 'هِيَ مُتَوَسِّطَةُ القَامَةِ، وَ{e|لَهَا} شَعْرٌ قَصِيرٌ.', sub: 'medium height, short hair' }, 'Core'] },
        { cells: [{ ar: '٣ الصِّفَاتُ + الدَّلِيلُ', sub: 'qualities + evidence' }, { ar: 'هِيَ كَرِيمَةٌ {k|لِأَنَّهَا} تُسَاعِدُ كُلَّ مَنْ يَحْتَاجُ إِلَيْهَا.', sub: 'generous because she helps anyone in need' }, 'Develop'] },
        { cells: [{ ar: '٤ العَلَاقَةُ', sub: 'relationship' }, { ar: 'أَتَفَاهَمُ مَعَ{e|هَا} جَيِّدًا لِأَنَّهَا تَسْتَمِعُ إِلَيَّ.', sub: 'I get on well with her' }, 'Develop'] },
        { core: true, cells: [{ ar: '٥ الأُسْلُوبُ', sub: 'style' }, { ar: '{e|تَ}رْتَدِي عَادَةً مَلَابِسَ أَنِيقَةً وَمُحْتَشِمَةً.', sub: 'she usually wears elegant, modest clothes' }, 'Core'] },
        { cells: [{ ar: '٦ المُقَارَنَةُ + الرَّأْيُ', sub: 'comparison + opinion' }, { ar: 'أُسْلُوبُهَا أَكْثَرُ رَسْمِيَّةً مِنْ أُسْلُوبِي. فِي رَأْيِي، أَفْضَلُ صِفَةٍ فِيهَا كَرَمُهَا.', sub: 'her style is more formal than mine; her best quality is generosity' }, 'Stretch'] },
      ],
      foot: 'Every line is about HER: ta- verbs, -hā endings, li-annahā. Check them before you speak.',
      notes: `GRAMMAR PART 1 — the website reading text IS the plan (six questions), filled with the website model portrait of the aunt. Core students prepare stages 1, 2 and 5 only.
Cue-card task: students write ONE key word per stage on a card (e.g. خَالَتِي · قَصِيرٌ · كَرِيمَةٌ + تُسَاعِدُ · أَتَفَاهَمُ · أَنِيقَةٌ · رَسْمِيَّةً).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · keep the person consistent (website overview) · Develop / Stretch', title: 'He all the way, or she all the way', ar: 'المَرْجِعُ الوَاضِحُ',
      cards: [
        { chip: 'HIM · CORE', color: '1D5FBF', head: 'هُوَ · يَـ · ـهُ', big: 'خَالِي طَوِيلُ القَامَةِ، يَرْتَدِي نَظَّارَةً، وَأُسْلُوبُهُ بَسِيطٌ.', en: 'My uncle is tall, wears glasses, and his style is simple.', clue: 'ya- … -hu' },
        { chip: 'HER · CORE', color: 'B83227', head: 'هِيَ · تَـ · ـهَا', big: 'خَالَتِي مُتَوَسِّطَةُ القَامَةِ، تَرْتَدِي حِجَابًا، وَأُسْلُوبُهَا أَنِيقٌ.', en: 'My aunt is of medium height, wears a headscarf, and her style is elegant.', clue: 'ta- … -hā' },
        { chip: 'ME vs HER · STRETCH', color: '6B4C9A', head: 'أُسْلُوبِي / أُسْلُوبُهَا', big: 'أُسْلُوبُهَا أَكْثَرُ رَسْمِيَّةً مِنْ أُسْلُوبِي.', en: 'Her style is more formal than mine.', clue: 'Switch person only on purpose.' },
      ],
      error: { text: 'Website overview: maintain reference throughout.', pairs: [['خَالَتِي … تَرْتَدِي … أُسْلُوبُهَا', 'خَالَتِي … يَرْتَدِي … أُسْلُوبُهُ']] },
      notes: `GRAMMAR PART 2 — website overview: “Organise a spoken portrait … while maintaining reference.” Recycles D1-L06 (he/she) and D2-L06 (lahu/lahā).`,
    },
  ],
  quick: [0, 1, 2, 3],
  ido: {
    title: 'Watch me give a one-minute portrait',
    steps: [
      { head: 'Who + appearance', ar: 'سَأَتَحَدَّثُ عَنْ خَالَتِي. هِيَ مُتَوَسِّطَةُ القَامَةِ وَ{e|لَهَا} شَعْرٌ قَصِيرٌ.', think: 'Stages 1–2.' },
      { head: 'Quality + proof', ar: 'هِيَ كَرِيمَةٌ {k|لِأَنَّهَا} تُسَاعِدُ الجَمِيعَ.', think: 'Stage 3.' },
      { head: 'Relationship + style', ar: 'أَتَفَاهَمُ مَعَ{e|هَا}، وَ{e|تَ}رْتَدِي مَلَابِسَ أَنِيقَةً.', think: 'Stages 4–5.' },
      { head: 'Compare + opinion', ar: 'أُسْلُوبُهَا {w|أَكْثَرُ} رَسْمِيَّةً {w|مِنْ} أُسْلُوبِي. فِي رَأْيِي …', think: 'Stage 6.' },
    ],
    legend: ['e', 'k', 'w'], legendLabels: { e: 'SHE / HER', k: 'EVIDENCE', w: 'COMPARISON' },
    model: 'سَأَتَحَدَّثُ عَنْ خَالَتِي مَرْيَمَ. هِيَ مُتَوَسِّطَةُ القَامَةِ، وَ{e|لَهَا} شَعْرٌ قَصِيرٌ وَعَيْنَانِ بُنِّيَّتَانِ. هِيَ كَرِيمَةٌ {k|لِأَنَّهَا} تُسَاعِدُ كُلَّ مَنْ يَحْتَاجُ إِلَيْهَا. أَتَفَاهَمُ مَعَ{e|هَا} جَيِّدًا. {e|تَ}رْتَدِي عَادَةً مَلَابِسَ أَنِيقَةً، وَأُسْلُوبُ{e|هَا} {w|أَكْثَرُ} رَسْمِيَّةً {w|مِنْ} أُسْلُوبِي. فِي رَأْيِي، أَفْضَلُ صِفَةٍ فِيهَا كَرَمُهَا.',
    modelEn: 'I will talk about my aunt Maryam. She is of medium height, and she has short hair and brown eyes. She is generous because she helps anyone who needs her. I get on well with her. She usually wears elegant clothes, and her style is more formal than mine. In my opinion, her best quality is her generosity.',
    notes: 'I DO (3 min) — the teacher SPEAKS the website model from a cue card (not reading), timing it (~45 s), then shows the text. Point to each stage change.',
  },
  wedoSlides: [
    {
      type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · what comes next in the portrait?', title: 'Next stage, same person', ar: 'المَرْحَلَةُ التَّالِيَةُ',
      seed: 10,
      questions: [
        q('After: سَأَتَحَدَّثُ عَنْ خَالِي. What next?', ['هُوَ طَوِيلُ القَامَةِ وَلَهُ لِحْيَةٌ.', 'فِي رَأْيِي، هُوَ أَفْضَلُ خَالٍ.', 'هِيَ طَوِيلَةُ القَامَةِ.'], 'Appearance, and uncle = he.'),
        q('After the appearance. What next?', ['هُوَ صَبُورٌ لِأَنَّهُ يَسْتَمِعُ إِلَيَّ.', 'هُوَ صَبُورٌ.', 'هِيَ صَبُورَةٌ لِأَنَّهَا تَسْمَعُ.'], 'Quality + evidence.'),
        q('Describing your aunt: her style …', ['تَرْتَدِي مَلَابِسَ بَسِيطَةً.', 'يَرْتَدِي مَلَابِسَ بَسِيطَةً.', 'أَرْتَدِي مَلَابِسَ بَسِيطَةً.'], 'Aunt = she.'),
        q('The best final sentence:', ['أُسْلُوبُهُ أَبْسَطُ مِنْ أُسْلُوبِي، وَفِي رَأْيِي أَفْضَلُ صِفَةٍ فِيهِ صَبْرُهُ.', 'لَهُ لِحْيَةٌ.', 'شُكْرًا.'], 'Comparison + opinion.'),
      ],
      side: { kind: 'core', label: 'CORE', text: 'Stages: who → looks → qualities\n→ relationship → style → opinion.' },
      answerSlide: { min: 0, eyebrow: 'We do · next stage answers', title: 'Next stage: answers', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO — build a portrait of an uncle together, stage by stage. After each answer, a student adds their own sentence for that stage.',
      answerNotes: 'The class now has a complete model portrait of the uncle — read it aloud together.',
    },
  ],
  sorterCats: ['Who / appearance', 'Qualities / relationship', 'Style / opinion'],
  hints: ['Aunt = he or she?', 'Because HE or because SHE?', 'Comparison: more + noun + min.'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 6.\nListen for: خَالَتِهَا · القَامَةَ · تُقَارِنُ.',
  listenRoutes: 'Core: questions 1, 3 and 6. Develop / Stretch: all 6. (Questions are teacher-written: the website questions for this script are generic.)',
  gloss: [
    ['تُقَدِّمُ طَالِبَةٌ وَصْفًا شَفَهِيًّا لِخَالَتِهَا.', 'A student gives a spoken description of her aunt.'],
    ['تَبْدَأُ بِالعَلَاقَةِ، ثُمَّ تَصِفُ القَامَةَ وَالشَّعْرَ وَالمَلَابِسَ،', 'She starts with the relationship, then describes height, hair and clothes,'],
    ['وَبَعْدَ ذٰلِكَ تَشْرَحُ أَنَّ خَالَتَهَا كَرِيمَةٌ وَوَاثِقَةٌ مَعَ دَلِيلَيْنِ.', 'and after that explains that her aunt is generous and confident, with two pieces of evidence.'],
    ['فِي النِّهَايَةِ تُقَارِنُ أُسْلُوبَهَا بِأُسْلُوبِهَا الشَّخْصِيِّ.', 'At the end she compares her aunt’s style with her own.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'قَدِّمْ وَصْفًا مُنَظَّمًا لِشَخْصٍ.' },
      { route: 'develop', ar: 'أَضِفْ دَلِيلًا عَلَى صِفَةٍ شَخْصِيَّةٍ.' },
      { route: 'develop', ar: 'اِسْتَعْمِلْ جُمْلَةً مَوْصُولَةً فِي الوَصْفِ.' },
      { route: 'stretch', ar: 'اخْتِمْ بِمُقَارَنَةٍ وَرَأْيٍ.' },
    ],
    stems: [
      { route: 'core', ar: 'سَأَتَحَدَّثُ عَنْ ______ . هُوَ / هِيَ ______ .' },
      { route: 'develop', ar: 'هُوَ / هِيَ ______ لِأَنَّهُ / لِأَنَّهَا ______ .' },
      { route: 'develop', ar: 'هُوَ الشَّخْصُ الَّذِي … / هِيَ الَّتِي ______ .' },
      { route: 'stretch', ar: 'أُسْلُوبُهُ / أُسْلُوبُهَا أَكْثَرُ ______ مِنْ أُسْلُوبِي. فِي رَأْيِي ______ .' },
    ],
    modelEn: ['Whom will you describe?', 'I will describe my aunt Maryam.'],
    notes: 'MAIN TASK (8–10 min). Each student prepares a cue card (one word per stage), then gives the portrait on the mic: Core 20–30 s, Develop 40 s, Stretch 60 s. Listeners tick the stages they heard. Website model continues: A: مَا أَفْضَلُ صِفَةٍ فِيهَا؟ B: كَرَمُهَا، لِأَنَّهَا تُسَاعِدُ كُلَّ مَنْ يَحْتَاجُ إِلَيْهَا.',
  },
  write: {
    core: { amount: 'cue card + 5 sentences', how: 'Stages 1, 2 and 5: who, appearance, clothes.', task: 'Prepare a cue card and five sentences for a short portrait.' },
    develop: { amount: '8 sentences', how: 'Add a quality with evidence and your relationship; keep he / she consistent.', task: 'Write a developed portrait with evidence.' },
    stretch: { amount: '100–120 words', how: 'Website task: the full six-stage portrait, easy to say aloud, with evidence, comparison and a short conclusion.', task: 'Write the full spoken portrait.' },
  },
  frames: {
    core: [
      { en: 'I will talk about my …', ar: 'سَأَتَحَدَّثُ عَنْ ______ .' },
      { en: 'He / she is … height.', ar: 'هُوَ / هِيَ ______ القَامَةِ.' },
      { en: 'He / she has … hair.', ar: 'لَهُ / لَهَا شَعْرٌ ______ .' },
      { en: 'He / she usually wears …', ar: 'يَرْتَدِي / تَرْتَدِي عَادَةً ______ .' },
      { en: 'His / her style is …', ar: 'أُسْلُوبُهُ / أُسْلُوبُهَا ______ .' },
    ],
    develop: [
      { en: 'He / she is … because …', ar: 'هُوَ / هِيَ ______ لِأَنَّهُ / لِأَنَّهَا ______ .' },
      { en: 'I get on well with him / her because …', ar: 'أَتَفَاهَمُ مَعَهُ / مَعَهَا جَيِّدًا لِأَنَّ ______ .' },
      { en: 'His / her style is more … than mine.', ar: 'أُسْلُوبُهُ / أُسْلُوبُهَا أَكْثَرُ ______ مِنْ أُسْلُوبِي.' },
      { en: '…, whereas I prefer …', ar: '______ ، بَيْنَمَا أُفَضِّلُ ______ .' },
      { en: 'In my opinion, his / her best quality is …', ar: 'فِي رَأْيِي، أَفْضَلُ صِفَةٍ فِيهِ / فِيهَا ______ .' },
    ],
    bank: ['سَأَتَحَدَّثُ عَنْ', 'خَالَتِي / خَالِي', 'القَامَةِ', 'لَهُ / لَهَا', 'يَرْتَدِي / تَرْتَدِي', 'كَرِيمٌ / كَرِيمَةٌ', 'لِأَنَّهُ / لِأَنَّهَا', 'أَتَفَاهَمُ مَعَ', 'أُسْلُوبُهُ / أُسْلُوبُهَا', 'أَكْثَرُ … مِنْ', 'بَيْنَمَا', 'فِي رَأْيِي'],
  },
  stretch: [
    ['كُلُّ مَنْ يَحْتَاجُ إِلَيْهَا', 'anyone who needs her'],
    ['عِنْدَمَا تَتَحَدَّثُ أَمَامَ النَّاسِ', 'when she speaks in front of people'],
    ['تُفَضِّلُ الأَلْوَانَ الهَادِئَةَ', 'she prefers calm colours'],
    ['أَفْضَلُ صِفَةٍ فِيهَا كَرَمُهَا', 'her best quality is her generosity'],
    ['هٰذَا مَا يُعْجِبُنِي فِيهَا', 'this is what I like about her'],
  ],
  modelEn: 'I will talk about my aunt Maryam. She is of medium height, and she has short hair and brown eyes. She usually wears elegant, modest clothes, and she prefers calm colours. She is generous because she helps anyone who needs her, and she is also confident when she speaks in front of people. I get on well with her because she listens to me. Her style is more formal than mine, whereas I prefer practical clothes. In my opinion, her best quality is her generosity.',
  find: ['the six stages', 'two qualities with evidence', 'the comparison', 'every “she” verb'],
  modelNotes: 'Stages: خَالَتِي مَرْيَمَ ← مُتَوَسِّطَةُ القَامَةِ … ← تَرْتَدِي … ← كَرِيمَةٌ لِأَنَّهَا … / وَاثِقَةٌ عِنْدَمَا … ← أَتَفَاهَمُ مَعَهَا ← أَكْثَرُ رَسْمِيَّةً مِنْ أُسْلُوبِي ← فِي رَأْيِي …',
  selfCheck: [
    { route: 'core', text: 'I said who, appearance and clothes in order.' },
    { route: 'core', text: 'I spoke from a cue card, not a script.' },
    { route: 'develop', text: 'Every verb and ending matches the person.' },
    { route: 'develop', text: 'I proved a quality with behaviour.' },
    { route: 'stretch', text: 'I finished with a comparison and an opinion.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['خُطَّةُ', 'a plan'], ['وَصْفٍ شَفَهِيٍّ', 'a spoken description'], ['مَنْ هُوَ الشَّخْصُ؟', 'who is the person?'], ['كَيْفَ مَظْهَرُهُ؟', 'what does he look like?'], ['مَا صِفَاتُهُ؟', 'what are his qualities?'],
    ['الدَّلِيلُ', 'the evidence'], ['عَلَاقَتُكَ بِهِ', 'your relationship with him'], ['المُقَارَنَةُ', 'the comparison'], ['رَوَابِطَ', 'connectors'], ['مَرَاجِعَ وَاضِحَةً', 'clear references'],
  ],
  prep: {
    words: [['فِقْرَةٌ', 'a paragraph', 'pl. فِقْرَاتٌ'], ['مُقَدِّمَةٌ', 'an introduction', ''], ['خَاتِمَةٌ', 'a conclusion', ''], ['رَابِطٌ', 'a connector', 'pl. رَوَابِطُ'], ['أُرَاجِعُ', 'I check, revise', 'D1-L05']],
    questionEn: 'D2-L11 is the writing lesson. Choose the person you will write about, and note one fact for each of the six stages.',
    questionAr: 'عَنْ مَنْ سَتَكْتُبُ؟',
    homework: {
      core: 'Record your 20–30-second portrait from your cue card.',
      develop: 'Write your developed portrait (8 sentences).',
      stretch: 'Website writing task: the full 100–120-word spoken portrait.',
    },
    wordsSource: 'Writing-organisation words for D2-L11 (paragraphs, introduction, conclusion, connectors).',
  },
  remember: 'Remember: six stages, one person — ta- and -hā all the way (or ya- and -hu).',
});

module.exports = { meta, slides };
