'use strict';
/* D2-L11 · Writing — Describing People, Relationships and Style — website: Pathways › Development › D2 › D2-L11 (three paragraphs, consistent reference, controlled range: الَّذِي / الَّتِي, وَلٰكِنَّ, بَيْنَمَا, evidence; draft → improve → review). */
const D = require('./d-common');
const X = require('./d2-lex');
const { q } = D;

const meta = D.meta('D2')({
  n: 11, fileTitle: 'Writing_People_and_Style', chip: 'Writing',
  title: 'Writing — Describing People, Relationships and Style', arabic: 'الكِتَابَةُ — وَصْفُ النَّاسِ وَالعَلَاقَاتِ وَالأُسْلُوبِ',
  focus: 'Plan, draft and improve a 100–120-word text in three paragraphs — person and appearance, personality and relationship, style and opinion — then check agreement, references and connectors.',
  icon: 'FaPenNib', iconSet: 'fa6',
});

const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const G = D.site('D2-L11').grammar;

const slides = D.devLesson('D2-L11', {
  support: `• WRITING lesson: the main You Do is the website writing task (100–120 words, three paragraphs) with a draft → improve → check cycle. Only the personality bank is shown (the rest is D2 revision on the website vocabulary tab).
• Core: paragraph 1 + 2 with the frames (6–8 sentences). Develop: three paragraphs with one “because” per quality and one contrast. Stretch: 100–120 words, a relative clause, a comparison and a full review.
• The website grammar and quiz are copies of D2-L07; the deck teaches the rule named in the website title (“Paragraphing, reference and controlled range”) — flagged for the website editor.
• Urdu bridge: فقرہ، مسودہ، نظرثانی (→ مُرَاجَعَةٌ), ربط، تحسین.`,
  teach: 'Three paragraphs, one person, varied links.',
  wedo: 'Improve a draft, sort, fix and listen.',
  next: { nextCode: 'D2-L12', nextTitle: 'Review and Unit Assessment', nextAr: 'المُرَاجَعَةُ وَالتَّقْيِيمُ' },
  skipGroups: [1, 2],
  flexGroups: [0],
  doNow: {
    questions: [
      q('What does فِقْرَةٌ mean?', ['a paragraph', 'a sentence', 'a word'], 'Prepared at home.'),
      q('What does خَاتِمَةٌ mean?', ['a conclusion', 'an introduction', 'a connector'], 'Prepared at home.'),
      q('Which stage comes after appearance in a portrait?', ['qualities with evidence', 'the opinion', 'who the person is'], 'D2-L10.'),
      q('Describing your aunt, choose:', ['تَرْتَدِي مَلَابِسَ أَنِيقَةً.', 'يَرْتَدِي مَلَابِسَ أَنِيقَةً.', 'أَرْتَدِي مَلَابِسَ أَنِيقَةً.'], 'D2-L10: keep reference.'),
      q('Choose “my friend (f.) whom I have known for five years”.', ['صَدِيقَتِي الَّتِي أَعْرِفُهَا مُنْذُ خَمْسِ سَنَوَاتٍ', 'صَدِيقَتِي الَّذِي أَعْرِفُهُ مُنْذُ خَمْسِ سَنَوَاتٍ', 'صَدِيقَتِي أَعْرِفُ الَّتِي'], 'D2-L06: allatī.'),
    ],
    keyIdea: { text: 'Plan in three paragraphs, write, then CHECK: agreement · pronouns · connectors.', ar: 'الفِقْرَةُ ١: {w|الشَّخْصُ وَالمَظْهَرُ} · ٢: {k|الشَّخْصِيَّةُ وَالعَلَاقَةُ} · ٣: {e|الأُسْلُوبُ وَالرَّأْيُ}' },
    retrieves: 'Questions 1–2 test two of the five writing words prepared at home. Questions 3–5 retrieve D2-L10 (stages, reference) and D2-L06 (relative clause).',
  },
  routes: {
    core: ['I can write paragraphs 1 and 2 with the frames.', 'I can check my adjectives match the person.'],
    develop: ['I can write three clear paragraphs.', 'I can give a reason for each quality and one contrast.'],
    stretch: ['I can write 100–120 words with a relative clause and a comparison.', 'I can improve my own first draft.'],
  },
  bridge: [
    { ar: 'فِقْرَةٌ', urdu: 'فقرہ', tr: 'fiqra', en: 'paragraph (Urdu: sentence)' },
    { ar: 'مُسَوَّدَةٌ', urdu: 'مسودہ', tr: 'musawwada', en: 'draft' },
    { ar: 'مُرَاجَعَةٌ', urdu: 'نظرثانی', tr: 'nazar-e sānī', en: 'review (meaning only)' },
    { ar: 'رَابِطٌ', urdu: 'ربط', tr: 'rabt', en: 'connection → connector' },
    { ar: 'تَحْسِينٌ', urdu: 'تحسین', tr: 'tahsīn', en: 'Urdu: praise · Arabic: improvement' },
  ],
  bridgeNotes: 'URDU BRIDGE: مسودہ (draft) → مُسَوَّدَةٌ; ربط → رَابِطٌ / رَوَابِطُ (connectors). CAREFUL: Urdu فقرہ is a sentence or phrase, Arabic فِقْرَةٌ is a paragraph; Urdu تحسین = praise, Arabic تَحْسِينٌ = improvement (أُحَسِّنُ النَّصَّ = I improve the text).',
  core: ['وَدُودٌ / وَدُودَةٌ', 'صَادِقٌ / صَادِقَةٌ', 'صَبُورٌ / صَبُورَةٌ', 'مُتَعَاوِنٌ / مُتَعَاوِنَةٌ', 'هَادِئٌ / هَادِئَةٌ', 'وَاثِقٌ / وَاثِقَةٌ'],
  forms: X.formsFor('D2-L11'),
  kwText: 'This lesson is for writing. The personality bank is shown as a FLEX refresher; relationships and style words are on the website vocabulary tab.',
  vocabNotes: { 0: 'FLEX refresher: the complete personality bank with m. · f. · pl. Students pick three words for their person BEFORE writing and note the right form (m. or f.).' },
  patch: {
    grammar: {
      ...G,
      rules: [
        { heading: 'Three purposeful paragraphs', formula: '١ الشَّخْصُ وَالمَظْهَرُ · ٢ الشَّخْصِيَّةُ وَالعَلَاقَةُ · ٣ الأُسْلُوبُ وَالرَّأْيُ', explanation: 'Each paragraph has one job; the reader always knows where they are.', examples: ['سَأَكْتُبُ عَنْ صَدِيقَتِي سَلْمَى …'] },
        { heading: 'Keep reference clear', formula: 'الاِسْمُ مَرَّةً ← ثُمَّ هِيَ / تَـ / ـهَا', explanation: 'Name the person once, then use pronouns — but do not repeat هُوَ / هِيَ in every sentence.', examples: ['سَلْمَى وَدُودَةٌ، وَأَثِقُ بِهَا لِأَنَّهَا تَسْتَمِعُ إِلَيَّ.'] },
        { heading: 'Vary your structures', formula: 'الَّذِي / الَّتِي · وَلٰكِنَّ · بَيْنَمَا · أَكْثَرُ … مِنْ', explanation: 'Join short sentences with relative clauses and connectors.', examples: ['صَدِيقَتِي الَّتِي أَعْرِفُهَا مُنْذُ خَمْسِ سَنَوَاتٍ …', 'أُسْلُوبُهَا أَكْثَرُ عَصْرِيَّةً مِنْ أُسْلُوبِي.'] },
        { heading: 'Review before you finish', formula: 'المُطَابَقَةُ · المَرَاجِعُ · الرَّوَابِطُ', explanation: 'Check adjective agreement, pronoun reference and connectors.', examples: ['هِيَ صَادِقٌ ← هِيَ صَادِقَةٌ', 'لِأَنَّهُ تُسَاعِدُ ← لِأَنَّهَا تُسَاعِدُ'] },
      ],
      quiz: [
        { prompt: 'What goes in paragraph 2?', options: ['personality and relationship', 'appearance', 'the opinion only'], answer: 0, feedback: 'Paragraph 2 = personality + relationship.' },
        { prompt: 'Which joins two short sentences best?', options: ['لِي صَدِيقٌ يُحِبُّ الرِّيَاضَةَ، وَهُوَ الَّذِي يُسَاعِدُنِي دَائِمًا.', 'لِي صَدِيقٌ. هُوَ يُحِبُّ الرِّيَاضَةَ. هُوَ يُسَاعِدُنِي.', 'صَدِيقٌ رِيَاضَةٌ يُسَاعِدُ.'], answer: 0, feedback: 'Connectors + relative clause.' },
        { prompt: 'Correct: سَلْمَى صَادِقٌ.', options: ['سَلْمَى صَادِقَةٌ.', 'سَلْمَى صَادِقُونَ.', 'سَلْمَى صَادِقًا.'], answer: 0, feedback: 'Feminine agreement.' },
        { prompt: 'Correct: هِيَ كَرِيمَةٌ لِأَنَّهُ يُسَاعِدُ.', options: ['هِيَ كَرِيمَةٌ لِأَنَّهَا تُسَاعِدُ.', 'هُوَ كَرِيمَةٌ لِأَنَّهَا تُسَاعِدُ.', 'هِيَ كَرِيمٌ لِأَنَّهُ يُسَاعِدُ.'], answer: 0, feedback: 'Reference must stay feminine.' },
        { prompt: 'Which is a comparison?', options: ['أُسْلُوبُهَا أَكْثَرُ عَصْرِيَّةً مِنْ أُسْلُوبِي.', 'أُسْلُوبُهَا عَصْرِيٌّ.', 'أُحِبُّ أُسْلُوبَهَا.'], answer: 0, feedback: 'More … than.' },
        { prompt: 'Which belongs in paragraph 3?', options: ['فِي رَأْيِي، أَفْضَلُ صِفَةٍ فِيهَا صِدْقُهَا.', 'لَهَا شَعْرٌ قَصِيرٌ.', 'سَأَكْتُبُ عَنْ صَدِيقَتِي.'], answer: 0, feedback: 'Opinion closes the text.' },
        { prompt: 'Which is a good opening sentence?', options: ['سَأَكْتُبُ عَنْ صَدِيقَتِي سَلْمَى الَّتِي أَعْرِفُهَا مُنْذُ سَنَوَاتٍ.', 'فِي النِّهَايَةِ …', 'وَلٰكِنَّ …'], answer: 0, feedback: 'It introduces the person.' },
        { prompt: 'What do you check LAST?', options: ['agreement, references and connectors', 'the colour of the pen', 'nothing'], answer: 0, feedback: 'The website review checks.' },
      ],
    },
    patterns: [
      { ar: 'سَأَكْتُبُ عَنْ صَدِيقَتِي سَلْمَى الَّتِي أَعْرِفُهَا مُنْذُ خَمْسِ سَنَوَاتٍ.', en: 'I will write about my friend Salma, whom I have known for five years.', tip: 'Paragraph 1 opener + relative clause.' },
      { ar: 'أَثِقُ بِهَا لِأَنَّهَا تَسْتَمِعُ إِلَيَّ وَتَقُولُ الحَقَّ.', en: 'I trust her because she listens to me and tells the truth.', tip: 'Paragraph 2: quality + evidence.' },
      { ar: 'نَتَفَاهَمُ جَيِّدًا، وَلٰكِنَّنَا نَخْتَلِفُ أَحْيَانًا.', en: 'We get on well, but we sometimes disagree.', tip: 'Paragraph 2: relationship + contrast.' },
      { ar: 'أُسْلُوبُهَا أَكْثَرُ عَصْرِيَّةً مِنْ أُسْلُوبِي.', en: 'Her style is more modern than mine.', tip: 'Paragraph 3: comparison.' },
    ],
    mistakes: [
      { wrong: 'لِي صَدِيقَةٌ. هِيَ سَلْمَى. هِيَ وَدُودَةٌ. هِيَ صَادِقَةٌ.', right: 'لِي صَدِيقَةٌ اسْمُهَا سَلْمَى، وَهِيَ وَدُودَةٌ وَصَادِقَةٌ.', why: 'Join sentences; don’t repeat هِيَ.' },
      { wrong: 'سَلْمَى صَادِقٌ لِأَنَّهُ يَقُولُ الحَقَّ.', right: 'سَلْمَى صَادِقَةٌ لِأَنَّهَا تَقُولُ الحَقَّ.', why: 'Agreement and reference must be feminine.' },
      { wrong: 'أُسْلُوبُهَا عَصْرِيَّةٌ مِنْ أُسْلُوبِي.', right: 'أُسْلُوبُهَا أَكْثَرُ عَصْرِيَّةً مِنْ أُسْلُوبِي.', why: 'Comparison: more + noun + min.' },
    ],
    sorter: {
      title: 'Which paragraph?', instructions: 'Sort each sentence into the paragraph where it belongs.',
      categories: ['1 · Person and appearance', '2 · Personality and relationship', '3 · Style and opinion'],
      items: [
        { label: 'سَأَكْتُبُ عَنْ صَدِيقِي أَحْمَدَ.', answer: 0 }, { label: 'هُوَ طَوِيلُ القَامَةِ.', answer: 0 }, { label: 'لَهُ شَعْرٌ قَصِيرٌ.', answer: 0 },
        { label: 'هُوَ صَبُورٌ لِأَنَّهُ يَسْتَمِعُ.', answer: 1 }, { label: 'نَتَفَاهَمُ جَيِّدًا.', answer: 1 },
        { label: 'يُفَضِّلُ المَلَابِسَ العَمَلِيَّةَ.', answer: 2 }, { label: 'فِي رَأْيِي، أَفْضَلُ صِفَةٍ فِيهِ صَبْرُهُ.', answer: 2 },
      ],
    },
    final: [
      L('What goes in paragraph 1?', ['the person and their appearance', 'your opinion', 'the relationship'], 'Paragraph 1.'),
      L('Correct: أَحْمَدُ صَبُورَةٌ.', ['أَحْمَدُ صَبُورٌ.', 'أَحْمَدُ صَبُورُونَ.', 'أَحْمَدُ صَبُورًا.'], 'Masculine.'),
      L('Which joins ideas with a relative clause?', ['صَدِيقِي الَّذِي أَعْرِفُهُ مُنْذُ سَنَوَاتٍ …', 'صَدِيقِي. أَعْرِفُهُ.', 'صَدِيقِي الَّتِي أَعْرِفُهَا …'], 'Friend (m.) → alladhī.'),
      L('Which adds a contrast?', ['نَتَفَاهَمُ، وَلٰكِنَّنَا نَخْتَلِفُ أَحْيَانًا.', 'نَتَفَاهَمُ لِأَنَّنَا أَصْدِقَاءُ.', 'نَتَفَاهَمُ.'], 'But …'),
      L('Which is a review check?', ['Does every adjective match the person?', 'Is my handwriting big?', 'Did I use English?'], 'Agreement check.'),
      L('Which closes the text?', ['فِي رَأْيِي، أَفْضَلُ صِفَةٍ فِيهِ صِدْقُهُ.', 'هُوَ طَوِيلُ القَامَةِ.', 'سَأَكْتُبُ عَنْ أَخِي.'], 'Opinion.'),
    ],
    mission: null,
    listening: {
      questions: [
        L('Who explains her plan?', ['a (female) writer', 'a teacher', 'the student'], 'كَاتِبَةٍ تَشْرَحُ خُطَّتَهَا.'),
        L('What is in paragraph 1?', ['a person and their appearance', 'the relationship', 'the style'], 'فِي الفَقْرَةِ الأُولَى عَنْ شَخْصٍ وَمَظْهَرِهِ.'),
        L('What is in paragraph 2?', ['personality and the relationship', 'appearance', 'clothes'], 'عَنْ شَخْصِيَّتِهِ وَالعَلَاقَةِ بِهِ.'),
        L('What is in paragraph 3?', ['style and a comparison with hers', 'height and hair', 'a story'], 'عَنْ أُسْلُوبِهِ وَمُقَارَنَتِهِ بِأُسْلُوبِهَا.'),
        L('When will she review?', ['after writing', 'before planning', 'never'], 'بَعْدَ الكِتَابَةِ سَتُرَاجِعُ.'),
        L('What will she check?', ['agreement, references and connectors', 'spelling of names only', 'the title'], 'المُطَابَقَةَ وَالمَرَاجِعَ وَالرَّوَابِطَ.'),
      ],
    },
    reading: {
      questions: [
        L('What does the text compare?', ['a first draft and an improved text', 'two people', 'two shops'], 'نَصٌّ أَوَّلِيٌّ وَنَصٌّ مُحَسَّنٌ.'),
        L('What is wrong with the first draft?', ['short sentences and «هُوَ» repeated a lot', 'it is too long', 'it has no names'], 'جُمَلًا قَصِيرَةً وَيُكَرِّرُ «هُوَ» كَثِيرًا.'),
        L('How does the improved text organise ideas?', ['in paragraphs', 'in a list', 'in a table'], 'يُجَمِّعُ الأَفْكَارَ فِي فَقَرَاتٍ.'),
        L('Which words does it use to join ideas?', ['الَّذِي، وَلٰكِنَّ، بَيْنَمَا', 'ثُمَّ only', 'no connectors'], 'يَسْتَعْمِلُ الَّذِي وَوَلٰكِنَّ وَبَيْنَمَا.'),
        L('What comes after each important quality?', ['evidence', 'a colour', 'a question'], 'يُقَدِّمُ دَلِيلًا بَعْدَ كُلِّ صِفَةٍ مُهِمَّةٍ.'),
        L('What does the writer check?', ['adjective gender and pronoun reference', 'the price', 'the date'], 'جِنْسَ الصِّفَةِ وَمَرْجِعَ الضَّمِيرِ.'),
      ],
    },
  },
  grammar: [
    {
      type: 'formula', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · plan in three paragraphs (website listening + model)', title: 'One job per paragraph', ar: 'ثَلَاثُ فِقْرَاتٍ',
      cols: [
        { label: '1 · person + appearance', ar: 'الشَّخْصُ وَالمَظْهَرُ', color: '1D5FBF', pale: 'EEF3FA' },
        { label: '2 · personality + relationship', ar: 'الشَّخْصِيَّةُ وَالعَلَاقَةُ', color: '1E7B4F', pale: 'E8F4EC' },
        { label: '3 · style + opinion', ar: 'الأُسْلُوبُ وَالرَّأْيُ', color: '6B4C9A', pale: 'F1ECF7' },
      ],
      rows: [
        { en: 'Salma, whom I have known for five years, is of medium height with short curly hair. / She is friendly and honest; I trust her because she listens to me. / Her style is more modern than mine; in my opinion her best quality is her honesty.', cells: ['صَدِيقَتِي سَلْمَى {k|الَّتِي} أَعْرِفُهَا مُنْذُ خَمْسِ سَنَوَاتٍ مُتَوَسِّطَةُ القَامَةِ، وَلَهَا شَعْرٌ قَصِيرٌ.', 'هِيَ وَدُودَةٌ وَصَادِقَةٌ، وَأَثِقُ بِهَا {k|لِأَنَّهَا} تَسْتَمِعُ إِلَيَّ.', 'أُسْلُوبُهَا {k|أَكْثَرُ} عَصْرِيَّةً {k|مِنْ} أُسْلُوبِي. فِي رَأْيِي، أَفْضَلُ صِفَةٍ فِيهَا صِدْقُهَا.'] },
      ],
      foot: 'Core: paragraphs 1–2 (6–8 sentences). Develop / Stretch: all three, 100–120 words.',
      notes: `GRAMMAR PART 1 — the website listening (the writer’s three-paragraph plan) and the website model (Salma), split into its three paragraphs.
Planning task (3 min): students write 3–4 KEY WORDS per paragraph in a three-column table before any sentences.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · from first draft to improved text (website reading text)', title: 'Improve the draft', ar: 'مِنَ المُسَوَّدَةِ إِلَى النَّصِّ المُحَسَّنِ',
      cols: [{ label: 'First draft', w: 4.6, size: 22 }, { label: 'Improved', w: 5.2, size: 22 }, { label: 'Upgrade', w: 2.53 }],
      rows: [
        { core: true, cells: [{ ar: 'لِي صَدِيقَةٌ. هِيَ سَلْمَى. هِيَ وَدُودَةٌ.' }, { ar: 'لِي صَدِيقَةٌ اسْمُهَا سَلْمَى، {k|وَ}هِيَ وَدُودَةٌ.' }, 'join sentences'] },
        { core: true, cells: [{ ar: 'هِيَ صَادِقَةٌ.' }, { ar: 'هِيَ صَادِقَةٌ {k|لِأَنَّهَا} تَقُولُ الحَقَّ.' }, 'add evidence'] },
        { cells: [{ ar: 'أَعْرِفُهَا. أَعْرِفُهَا مُنْذُ سَنَوَاتٍ.' }, { ar: 'صَدِيقَتِي {k|الَّتِي} أَعْرِفُهَا مُنْذُ سَنَوَاتٍ …' }, 'relative clause'] },
        { cells: [{ ar: 'نَتَفَاهَمُ. نَخْتَلِفُ أَحْيَانًا.' }, { ar: 'نَتَفَاهَمُ، {k|وَلٰكِنَّنَا} نَخْتَلِفُ أَحْيَانًا.' }, 'contrast'] },
        { cells: [{ ar: 'أُسْلُوبُهَا عَصْرِيٌّ. أُسْلُوبِي عَمَلِيٌّ.' }, { ar: 'أُسْلُوبُهَا عَصْرِيٌّ، {k|بَيْنَمَا} أُفَضِّلُ المَلَابِسَ العَمَلِيَّةَ.' }, 'whereas'] },
      ],
      foot: 'Then check: agreement (m. / f.) · every pronoun · every connector.',
      notes: `GRAMMAR PART 2 — the website reading text describes exactly these upgrades: the first draft uses short sentences and repeats «هُوَ»; the improved text groups ideas in paragraphs, uses الَّذِي، وَلٰكِنَّ، بَيْنَمَا, and gives evidence after every important quality; the writer checks adjective gender and pronoun reference.`,
    },
  ],
  quick: [0, 1, 2, 3],
  ido: {
    title: 'Watch me improve a paragraph',
    steps: [
      { head: 'Draft', ar: 'لِي صَدِيقٌ. هُوَ أَحْمَدُ. هُوَ صَبُورٌ. هُوَ طَوِيلٌ.', think: 'Short, repetitive.' },
      { head: 'Join', ar: 'لِي صَدِيقٌ اسْمُهُ أَحْمَدُ، {k|وَ}هُوَ طَوِيلُ القَامَةِ.', think: 'Connector.' },
      { head: 'Evidence', ar: 'هُوَ صَبُورٌ {k|لِأَنَّهُ} يَسْتَمِعُ إِلَى الجَمِيعِ.', think: 'Proof.' },
      { head: 'Check', ar: 'صَبُورٌ ✓ لِأَنَّهُ ✓ يَسْتَمِعُ ✓', think: 'Agreement + reference.' },
    ],
    legend: ['k'], legendLabels: { k: 'UPGRADE' },
    model: 'لِي صَدِيقٌ اسْمُهُ أَحْمَدُ {k|الَّذِي} أَعْرِفُهُ مُنْذُ المَدْرَسَةِ الاِبْتِدَائِيَّةِ، {k|وَ}هُوَ طَوِيلُ القَامَةِ وَلَهُ شَعْرٌ مُجَعَّدٌ. هُوَ صَبُورٌ {k|لِأَنَّهُ} يَسْتَمِعُ إِلَى الجَمِيعِ، {k|وَلٰكِنَّهُ} خَجُولٌ نَوْعًا مَا فِي الصَّفِّ.',
    modelEn: 'I have a friend called Ahmad, whom I have known since primary school, and he is tall with curly hair. He is patient because he listens to everyone, but he is somewhat shy in class.',
    notes: 'I DO (3 min) — live improvement of a weak draft on the whiteboard (the website reading text’s “first draft vs improved text”), then a spoken check of every adjective and pronoun.',
  },
  wedoSlides: [
    {
      type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · choose the improved version', title: 'Which version is better written?', ar: 'أَيُّ نَصٍّ أَفْضَلُ؟',
      seed: 11,
      questions: [
        q('Which is better?', ['لِي أُخْتٌ اسْمُهَا لَيْلَى، وَهِيَ هَادِئَةٌ وَمُجْتَهِدَةٌ.', 'لِي أُخْتٌ. هِيَ لَيْلَى. هِيَ هَادِئَةٌ. هِيَ مُجْتَهِدَةٌ.', 'لَيْلَى هَادِئٌ وَمُجْتَهِدٌ.'], 'Joined and accurate.'),
        q('Which gives evidence?', ['هِيَ مُجْتَهِدَةٌ لِأَنَّهَا تُرَاجِعُ دُرُوسَهَا كُلَّ يَوْمٍ.', 'هِيَ مُجْتَهِدَةٌ جِدًّا جِدًّا.', 'هِيَ مُجْتَهِدَةٌ لِأَنَّ.'], 'Behaviour as proof.'),
        q('Which uses a relative clause correctly?', ['أَخِي الَّذِي يَسْكُنُ فِي لَنْدَنَ طَوِيلُ القَامَةِ.', 'أَخِي الَّتِي تَسْكُنُ فِي لَنْدَنَ طَوِيلُ القَامَةِ.', 'أَخِي يَسْكُنُ الَّذِي لَنْدَنَ.'], 'Brother → alladhī.'),
        q('Which paragraph-3 sentence is best?', ['أُسْلُوبُهُ أَكْثَرُ رَسْمِيَّةً مِنْ أُسْلُوبِي، وَفِي رَأْيِي أَفْضَلُ صِفَةٍ فِيهِ صَبْرُهُ.', 'هُوَ رَسْمِيٌّ.', 'لَهُ شَعْرٌ قَصِيرٌ.'], 'Comparison + opinion.'),
      ],
      side: { kind: 'core', label: 'CORE', text: 'Better writing:\njoined sentences + a reason\n+ the right m. / f. ending.' },
      answerSlide: { min: 0, eyebrow: 'We do · better version answers', title: 'Better written: answers', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO — teacher-made improvement task built on the website reading text. After each answer, ask: “Which upgrade did it use?” (join / evidence / relative clause / comparison).',
      answerNotes: 'Students name the upgrade for each correct answer.',
    },
  ],
  sorterCats: ['1 · Person and appearance', '2 · Personality and relationship', '3 · Style and opinion'],
  hints: ['Too many short sentences — how can you join them?', 'Salma → which ending, which pronoun?', 'Comparison: more + noun + min.'],
  coreTip: 'Listen twice. Core: questions 2, 3 and 4.\nListen for: الفَقْرَةِ الأُولَى · الثَّانِيَةِ · الثَّالِثَةِ.',
  listenRoutes: 'Core: questions 2, 3 and 4. Develop / Stretch: all 6. (Questions are teacher-written: the website questions for this script are generic.)',
  gloss: [
    ['يَسْتَمِعُ الطَّالِبُ إِلَى كَاتِبَةٍ تَشْرَحُ خُطَّتَهَا.', 'The student listens to a writer explaining her plan.'],
    ['سَتَكْتُبُ فِي الفَقْرَةِ الأُولَى عَنْ شَخْصٍ وَمَظْهَرِهِ،', 'In the first paragraph she will write about a person and their appearance,'],
    ['وَفِي الثَّانِيَةِ عَنْ شَخْصِيَّتِهِ وَالعَلَاقَةِ بِهِ،', 'in the second about their personality and her relationship with them,'],
    ['وَفِي الثَّالِثَةِ عَنْ أُسْلُوبِهِ وَمُقَارَنَتِهِ بِأُسْلُوبِهَا.', 'and in the third about their style and how it compares with hers.'],
    ['بَعْدَ الكِتَابَةِ سَتُرَاجِعُ المُطَابَقَةَ وَالمَرَاجِعَ وَالرَّوَابِطَ.', 'After writing she will check agreement, references and connectors.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا الَّذِي سَتَكْتُبُهُ فِي الفَقْرَةِ الأُولَى؟' },
      { route: 'develop', ar: 'مَا الرَّوَابِطُ الَّتِي سَتَسْتَعْمِلُهَا؟' },
      { route: 'develop', ar: 'كَيْفَ تُحَافِظُ عَلَى مَرْجِعِ الضَّمِيرِ؟' },
      { route: 'stretch', ar: 'كَيْفَ سَتُحَسِّنُ النُّسْخَةَ الأُولَى؟' },
    ],
    stems: [
      { route: 'core', ar: 'سَأَكْتُبُ عَنْ ______ وَأَصِفُ ______ .' },
      { route: 'develop', ar: 'سَأَسْتَعْمِلُ ______ وَ ______ .' },
      { route: 'develop', ar: 'الشَّخْصُ ______ ، إِذَنْ أَسْتَعْمِلُ هُوَ / هِيَ وَ ______ .' },
      { route: 'stretch', ar: 'سَأُرَاجِعُ ______ وَ ______ وَ ______ .' },
    ],
    modelEn: ['What will you write in paragraph one?', 'I will introduce the person and describe their appearance.'],
    notes: 'Short (3 min) — students TELL a partner their plan before writing. Website model continues: A: كَيْفَ سَتُحَسِّنُ النَّصَّ؟ B: سَأُرَاجِعُ المُطَابَقَةَ وَالمَرَاجِعَ وَالرَّوَابِطَ. Most of You Do time goes to the writing.',
  },
  write: {
    core: { amount: '6–8 sentences', how: 'Paragraphs 1 and 2 with the Core frames: person, appearance, two qualities with “because”.', task: 'Write paragraphs 1 and 2.' },
    develop: { amount: '3 paragraphs', how: 'All three paragraphs; one reason per quality, one contrast, one comparison.', task: 'Write all three paragraphs.' },
    stretch: { amount: '100–120 words', how: 'Website task: draft, improve (join, evidence, relative clause) and complete the review checks.', task: 'Draft, improve and review.' },
  },
  frames: {
    core: [
      { en: 'I will write about my …', ar: 'سَأَكْتُبُ عَنْ ______ .' },
      { en: 'He / she is … height and has … hair.', ar: 'هُوَ / هِيَ ______ القَامَةِ ، وَلَهُ / لَهَا شَعْرٌ ______ .' },
      { en: 'He / she usually wears …', ar: 'يَرْتَدِي / تَرْتَدِي عَادَةً ______ .' },
      { en: 'He / she is … because …', ar: 'هُوَ / هِيَ ______ لِأَنَّهُ / لِأَنَّهَا ______ .' },
      { en: 'We get on well because …', ar: 'نَتَفَاهَمُ جَيِّدًا لِأَنَّ ______ .' },
    ],
    develop: [
      { en: '… whom I have known for … years', ar: '______ الَّذِي / الَّتِي أَعْرِفُهُ / أَعْرِفُهَا مُنْذُ ______ سَنَوَاتٍ' },
      { en: '…, but we sometimes disagree about …', ar: '______ ، وَلٰكِنَّنَا نَخْتَلِفُ أَحْيَانًا حَوْلَ ______ .' },
      { en: 'His / her style is more … than mine.', ar: 'أُسْلُوبُهُ / أُسْلُوبُهَا أَكْثَرُ ______ مِنْ أُسْلُوبِي.' },
      { en: '…, whereas I prefer …', ar: '______ ، بَيْنَمَا أُفَضِّلُ ______ .' },
      { en: 'In my opinion, his / her best quality is …', ar: 'فِي رَأْيِي، أَفْضَلُ صِفَةٍ فِيهِ / فِيهَا ______ .' },
    ],
    bank: ['سَأَكْتُبُ عَنْ', 'الَّذِي / الَّتِي', 'مُنْذُ', 'لَهُ / لَهَا', 'يَرْتَدِي / تَرْتَدِي', 'لِأَنَّهُ / لِأَنَّهَا', 'أَثِقُ بِهِ / بِهَا', 'نَتَفَاهَمُ', 'وَلٰكِنَّنَا', 'بَيْنَمَا', 'أَكْثَرُ … مِنْ', 'فِي رَأْيِي'],
  },
  stretch: [
    ['الَّتِي أَعْرِفُهَا مُنْذُ خَمْسِ سَنَوَاتٍ', 'whom I have known for five years'],
    ['تَقُولُ الحَقَّ', 'she tells the truth'],
    ['نَخْتَلِفُ أَحْيَانًا فِي آرَائِنَا حَوْلَ المَوْضَةِ', 'we sometimes disagree about fashion'],
    ['أَكْثَرُ عَصْرِيَّةً مِنْ أُسْلُوبِي', 'more modern than my style'],
    ['يَجْعَلُ عَلَاقَتَنَا قَوِيَّةً', 'makes our relationship strong'],
  ],
  modelEn: 'I will write about my friend Salma, whom I have known for five years. She is of medium height, has short curly hair, and usually wears simple, modest clothes. Salma is friendly and honest, and I trust her because she listens to me and tells the truth. We get on well, but we sometimes disagree about fashion. Her style is more modern than mine, whereas I prefer practical clothes. In my opinion, her best quality is her honesty, because it makes our relationship strong.',
  find: ['the three paragraphs', 'a relative clause', 'evidence for a quality', 'a contrast and a comparison'],
  modelNotes: 'Evidence: ١ سَلْمَى الَّتِي … مُتَوَسِّطَةُ القَامَةِ … ٢ وَدُودَةٌ وَصَادِقَةٌ … لِأَنَّهَا … وَلٰكِنَّنَا ٣ أَكْثَرُ عَصْرِيَّةً مِنْ … بَيْنَمَا … فِي رَأْيِي. (The website model is one block; students mark where each paragraph starts. Spelling note: the website writes عِلَاقَتَنَا; standard is عَلَاقَتَنَا.)',
  selfCheck: [
    { route: 'core', text: 'My text has clear paragraphs.' },
    { route: 'core', text: 'Every adjective matches the person (m. / f.).' },
    { route: 'develop', text: 'Every quality has a reason.' },
    { route: 'develop', text: 'My pronouns always refer to the same person.' },
    { route: 'stretch', text: 'I improved my draft (join, evidence, relative clause).' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['نَصٌّ أَوَّلِيٌّ', 'a first draft'], ['نَصٌّ مُحَسَّنٌ', 'an improved text'], ['جُمَلًا قَصِيرَةً', 'short sentences'], ['يُكَرِّرُ', 'repeats'], ['يُجَمِّعُ الأَفْكَارَ', 'groups the ideas'],
    ['فَقَرَاتٍ', 'paragraphs'], ['يُقَدِّمُ دَلِيلًا', 'gives evidence'], ['كُلِّ صِفَةٍ مُهِمَّةٍ', 'every important quality'], ['جِنْسَ الصِّفَةِ', 'the gender of the adjective'], ['مَرْجِعَ الضَّمِيرِ', 'what the pronoun refers to'],
  ],
  prep: {
    words: [['تَقْيِيمٌ', 'assessment', ''], ['دَرَجَةٌ', 'a mark', 'pl. دَرَجَاتٌ'], ['نُقْطَةُ قُوَّةٍ', 'a strength', ''], ['هَدَفٌ', 'a target', 'pl. أَهْدَافٌ'], ['مُرَاجَعَةٌ', 'review, revision', '']],
    questionEn: 'D2-L12 is the unit assessment. Which D2 skill is your strongest, and which needs the most revision?',
    questionAr: 'مَا نُقْطَةُ قُوَّتِكَ؟',
    homework: {
      core: 'Finish paragraphs 1 and 2; revise the D2 personality words (m. / f.).',
      develop: 'Finish all three paragraphs and underline every connector.',
      stretch: 'Website writing task: final improved version (100–120 words) with the review checks.',
    },
    wordsSource: 'Assessment words for D2-L12 (review and unit assessment).',
  },
  remember: 'Remember: plan three paragraphs — then check agreement, pronouns and connectors.',
});

module.exports = { meta, slides };
