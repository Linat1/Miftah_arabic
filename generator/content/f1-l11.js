'use strict';
/*
 * F1-L11 · Arabic Around Us (script vs language vs meaning; MSA and spoken varieties; contexts; calligraphy; ten countries)
 * Website: Pathways › Foundation › F1 › Lesson 11.
 */
const F = require('./f1-common');
const { q } = F;

const meta = F.meta({
  n: 11, fileTitle: 'Arabic_Around_Us', chip: 'Arabic around us',
  title: 'Arabic Around Us', arabic: 'خَطٌّ وَاحِدٌ، أَصْوَاتٌ كَثِيرَةٌ، ثَقَافَاتٌ كَثِيرَةٌ',
  focus: 'Use your reading skills on Arabic from real life: tell script, language and meaning apart, understand formal Arabic and spoken dialects, meet three styles of calligraphy and travel through ten Arabic-speaking countries.',
  icon: 'FaEarthAfrica', level: 'Foundation · beginner',
});
const NEXT = { nextCode: 'F1-L12', nextTitle: 'Review & Assessment', nextAr: 'مُرَاجَعَةُ الوَحْدَةِ الأُولَى' };
const country = (ar, en, region, core) => ({ core, cells: [{ ar, sub: '' }, en, region] });

const slides = [
  F.titleSlide({
    n: 11,
    source: 'The website lesson teaches that script, language and meaning are three different questions; Modern Standard Arabic and regional spoken varieties (flexible repertoires); where Arabic appears in the UK (food, business, community, media, travel, digital); three calligraphic traditions (Naskh, Ruqʿah, Thuluth); a west-to-east route through ten countries; and the ABCD detective chain (worked example مَخْبَز). The vocabulary, context table, country list, games and final checklist are the website’s.',
    support: `• CORE: key vocabulary (لُغَة، ثَقَافَة، عَالَم …), read five country names, sort six real-world contexts. DEVELOP: explain script vs language vs meaning; MSA vs dialects. STRETCH: the ABCD detective chain with an uncertain example; the name-design studio.
• Culture without stereotypes (website): do not infer religion, nationality or dialect from one sign; Arabic belongs to Muslim, Christian, Jewish and non-religious communities. Spoken varieties are NOT “bad Arabic”.
• Safe collection (website): no photographs of people, addresses or private information. Heritage / Urdu readers: Urdu uses an adapted Perso-Arabic script — a perfect example of “same script, different language”.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Script, language, meaning; MSA and dialects.', wedo: 'Context sort, calligraphy, the ten-country route.', next: 'F1-L12' }),
  F.doNow({
    questions: [
      q('What does SCOPE start with?', ['Scan every letter and dot', 'Look at the picture'], 'F1-L10: letters first.'),
      q('What does مطعم mean?', ['restaurant', 'school', 'station'], 'F1-L10 sign.'),
      q('Can context turn بت into بيت?', ['No', 'Yes'], 'F1-L10: the hard boundary.'),
      q('What does لُغَةٌ mean (prepared at home)?', ['a language', 'a country', 'a sign'], 'Prepared at home.'),
      q('Where did you find Arabic script recently?', ['Any safe example is right!', 'Nowhere — Arabic is only in books'], 'Share your example: source, script, reading, confidence.'),
    ],
    keyIdea: { text: 'Seeing Arabic script does not always mean the language is Arabic. Investigate!', ar: 'خَطٌّ · لُغَةٌ · مَعْنًى' },
    retrieves: 'Questions 1–3 retrieve F1-L10 (website retrieval). Q4 tests the home preparation. Q5 launches the website “four-part share routine”: Source — “I found this on …”; Script — name letters and dots; Reading — apply SCOPE; Confidence — secure, likely or uncertain.',
  }),
  F.objectivesSlide([
    'Separate script, language and meaning.',
    'Explain formal Arabic and spoken varieties respectfully.',
    'Connect examples and calligraphy styles to their purpose.',
    'Make claims with evidence — and say when you are not sure.',
  ], {
    core: ['I can say where Arabic appears around me.', 'I can read five Arabic country names.'],
    develop: ['I can explain script vs language vs meaning.', 'I can explain MSA and dialects respectfully.'],
    stretch: ['I can use the ABCD detective chain.', 'I can say “I can identify the script, but I cannot yet verify the meaning.”'],
  }, 2, 'Objectives are the website F1-L11 outcomes (Recognise · Explain · Compare · Verify).'),
  {
    type: 'vocab', stage: 'teach', min: 3, eyebrow: 'Key words · website key vocabulary', title: 'Words for talking about Arabic in the world', ar: 'كَلِمَاتٌ عَنِ العَالَمِ',
    items: [
      { n: 1, ar: 'لُغَةٌ', en: 'language', tr: 'lugha · pl. lughāt', tag: 'noun · f.', core: true, forms: [{ l: 'sg.', ar: 'لُغَةٌ' }, { l: 'pl.', ar: 'لُغَاتٌ' }] },
      { n: 2, ar: 'ثَقَافَةٌ', en: 'culture', tr: 'thaqāfa', tag: 'noun · f.', core: true, forms: [{ l: 'sg.', ar: 'ثَقَافَةٌ' }, { l: 'pl.', ar: 'ثَقَافَاتٌ' }] },
      { n: 3, ar: 'عَالَمٌ', en: 'world', tr: 'ʿālam', tag: 'noun · m.', core: true, note: 'العَالَمُ العَرَبِيُّ = the Arab world' },
      { n: 4, ar: 'بِلَادٌ', en: 'countries, lands', tr: 'bilād', tag: 'noun · pl.', core: true, forms: [{ l: 'sg.', ar: 'بَلَدٌ' }, { l: 'pl.', ar: 'بِلَادٌ' }] },
      { n: 5, ar: 'فَنٌّ', en: 'art', tr: 'fann · pl. funūn', tag: 'noun · m.', forms: [{ l: 'sg.', ar: 'فَنٌّ' }, { l: 'pl.', ar: 'فُنُونٌ' }] },
      { n: 6, ar: 'تِجَارَةٌ', en: 'commerce, trade', tr: 'tijāra', tag: 'noun · f.' },
    ],
    notes: 'KEY WORDS — the website key vocabulary (also دِين religion). Hear → say → see → use. Urdu bridge: زبان is Urdu for language, but ثقافت، عالم، فن، تجارت are shared words.',
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Teacher instruction · script, language and meaning are three questions (website Part 2)', title: 'Three different questions', ar: 'الخَطُّ وَاللُّغَةُ وَالمَعْنَى',
    cards: [
      { chip: '1 · WHAT CAN I SEE?', head: 'the script', big: 'مَطْعَم', en: 'Letter shapes, joins, dots, numerals and marks.', clue: 'This is evidence you can observe.' },
      { chip: '2 · WHICH LANGUAGE?', color: '0E7C86', head: 'check, don’t assume', big: 'كِتَاب · کتاب', en: 'Arabic كِتَاب and Persian/Urdu کتاب — same script family.', clue: 'Arabic script also writes Persian, Urdu and other languages.' },
      { chip: '3 · WHAT MIGHT IT MEAN?', color: '7B3FA0', head: 'decode first', big: 'مَا المَعْنَى؟', en: 'Read the letters, then use the setting to check.', clue: 'Context checks a reading; it does not replace it.' },
    ],
    notes: `SCRIPT LITERACY (website Part 2). Foundation principle: recognise the script without claiming a language you have not verified.
Arabic belongs to many communities (website): people of many nationalities, religions and identities — a liturgical language in Islam, and part of the history of Muslim, Christian, Jewish and non-religious Arabic speakers. Do NOT infer a person’s religion, nationality or dialect from one sign.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Teacher instruction · formal Arabic and everyday voices (website Part 3)', title: 'One language, many voices', ar: 'الفُصْحَى وَاللَّهَجَاتُ',
    cards: [
      { chip: 'MSA', head: 'Modern Standard Arabic', big: 'الفُصْحَى', en: 'Shared formal Arabic: school, news, books, speeches.', clue: 'This course teaches MSA.' },
      { chip: 'DIALECTS', color: '0E7C86', head: 'regional spoken varieties', big: 'اللَّهَجَاتُ', en: 'Egyptian, Levantine, Gulf, Iraqi, Sudanese, Maghrebi …', clue: 'Systematic varieties with their own rules — not “bad Arabic”.' },
      { chip: 'CHOICE', color: '7B3FA0', head: 'flexible repertoires', big: 'حَسَبَ السِّيَاقِ', en: 'Family chat → more local · formal writing → more MSA.', clue: 'Speakers shift and blend with audience, place and purpose.' },
    ],
    notes: `LANGUAGE AWARENESS (website Part 3). Continuum (website): family chat · friends/community · interview/classroom · public presentation · formal writing — from more local to more MSA.
Respect rule (website): spoken varieties are not “bad Arabic” or failed MSA. Course standard: our classroom speaking and writing use MSA.
Heritage students: invite them (by choice) to share a greeting from their family variety and compare it with MSA.`,
  },
  F.quickCheck([
    q('Does Arabic script always mean the language is Arabic?', ['No — it also writes Persian, Urdu and more', 'Yes, always'], 'Website Part 2.'),
    q('What are dialects?', ['Systematic spoken varieties', 'Mistakes in Arabic'], 'The respect rule.'),
    q('Which Arabic do we use in class tasks?', ['Modern Standard Arabic', 'Only Egyptian Arabic'], 'Course standard.'),
    q('What does ثَقَافَةٌ mean?', ['culture', 'language', 'art'], 'Key vocabulary.'),
  ], 'teacher-made from the website Parts 2–3.'),
  {
    type: 'formsTable', stage: 'ido', min: 4, eyebrow: 'I do · the ABCD detective chain (website Part 7) · worked example', title: 'Watch me investigate a shop sign', ar: 'كُنْ مُحَقِّقًا لِلْخَطِّ العَرَبِيِّ',
    cols: [{ label: 'Step', w: 2.8 }, { label: 'Question', w: 4.2 }, { label: 'مَخْبَز on a shop front', w: 5.33 }],
    rows: [
      { core: true, cells: ['A · Attend', 'What can I observe?', 'م خ ب ز — final ز does not connect onwards'] },
      { core: true, cells: ['B · Build', 'What could it say? How sure am I?', 'مَخْبَز — makhbaz'] },
      { core: true, cells: ['C · Contextualise', 'Who wrote it, for whom, why?', 'A shop front with pictures of bread'] },
      { core: true, cells: ['D · Double-check', 'Can I verify it?', 'The shop’s bilingual listing says “bakery” ✓ secure'] },
    ],
    notes: `I DO — ABCD (website Part 7): the aim is not instant certainty but a transparent, checkable interpretation. Think aloud each step.
When to say “uncertain” (website): stylised word with hidden dots; the script may represent another language; cropped image with no source; several meanings fit; a dialect or cultural label not verified.
Strong sentence (website): “I can identify the Arabic script, but I cannot yet verify the language or meaning.”`,
  },
  {
    type: 'formsTable', stage: 'wedo', min: 4, eyebrow: 'We do · where Arabic appears around us (website Part 4)', title: 'Arabic in everyday life', ar: 'العَرَبِيَّةُ فِي الحَيَاةِ اليَوْمِيَّةِ',
    cols: [{ label: 'Context', w: 3.0 }, { label: 'Arabic you may see', w: 4.2, size: 24 }, { label: 'Meaning', w: 5.13 }],
    rows: [
      { core: true, cells: ['Food and packaging', 'مُكَوِّنَات · تَارِيخ', 'ingredients · date'] },
      { core: true, cells: ['Business', 'مَطْعَم · مَخْبَز', 'restaurant · bakery'] },
      { core: true, cells: ['Community and faith', 'مَرْكَز · مَسْجِد', 'centre · mosque'] },
      { cells: ['Media', 'أَخْبَار · صَحِيفَة', 'news · newspaper'] },
      { cells: ['Travel', 'وُصُول · مُغَادَرَة', 'arrivals · departures'] },
      { cells: ['Digital life', 'بَحْث · رِسَالَة', 'search · message'] },
    ],
    notes: `WE DO — the website context table. Read each pair together (SCOPE). Website game “Context Sort”: classify real-world examples by PURPOSE, not by stereotype.
Accuracy check (website): do not claim a transport operator routinely provides Arabic signs without a dated, local example. Scale with care: UNESCO says Arabic is used daily by more than 400 million people — reach, but not uniformity.`,
  },
  {
    type: 'sorter', stage: 'wedo', min: 3, eyebrow: 'We do · website game “Context Sort”', title: 'Which context?', ar: 'صَنِّفِ الأَمْثِلَةَ',
    categories: ['Food / business', 'Media / digital', 'Travel'],
    items: [
      { ar: 'مَطْعَم', cat: 0 }, { ar: 'أَخْبَار', cat: 1 }, { ar: 'وُصُول', cat: 2 }, { ar: 'مُكَوِّنَات', cat: 0 },
      { ar: 'رِسَالَة', cat: 1 }, { ar: 'مُغَادَرَة', cat: 2 }, { ar: 'مَخْبَز', cat: 0 }, { ar: 'بَحْث', cat: 1 },
    ],
    answerSlide: { eyebrow: 'We do · context sort answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — website game “Context Sort” (a category describes function, not identity). Read each word aloud before sorting.',
  },
  {
    type: 'formsTable', stage: 'wedo', flex: true, min: 3, eyebrow: 'We do · three calligraphic traditions (website Part 5) · FLEX', title: 'Three styles, three jobs', ar: 'فُنُونُ الخَطِّ العَرَبِيِّ',
    cols: [{ label: 'Style', w: 2.6 }, { label: 'Name', w: 2.4, size: 26 }, { label: 'What it looks like', w: 3.6 }, { label: 'Its job', w: 3.73 }],
    rows: [
      { core: true, cells: ['Naskh', 'النَّسْخ', 'clear, rounded, very readable', 'manuscripts, print, screens — our school hand'] },
      { cells: ['Ruqʿah', 'الرُّقْعَة', 'compact, simplified shapes', 'quick everyday handwriting'] },
      { cells: ['Thuluth', 'الثُّلُث', 'large, sweeping, carefully proportioned', 'monumental inscriptions, architecture'] },
    ],
    notes: `CALLIGRAPHY (website Part 5): a disciplined visual art with specialist proportions and tools. Show real examples from a museum or library website if possible (e.g. mosque inscriptions for Thuluth).
Website game “Style & Purpose Matcher”: choose the most likely tradition — or the safest interpretation.
Name-design studio (website, Stretch/extension): confirm the person’s preferred Arabic spelling; write it first in the Naskh school hand; enlarge and decorate without breaking letter identity; label it “Arabic-inspired name design”, not master calligraphy. Ask permission before using a sacred phrase — a personal name is the safest start.`,
  },
  {
    type: 'formsTable', stage: 'wedo', min: 4, eyebrow: 'We do · a west-to-east route through ten countries (website Part 6)', title: 'Journey across the Arab world', ar: 'رِحْلَةٌ فِي العَالَمِ العَرَبِيِّ',
    cols: [{ label: 'Country (Arabic)', w: 4.2, size: 24 }, { label: 'English', w: 3.4 }, { label: 'Region', w: 4.73 }],
    rows: [
      country('المَغْرِب', 'Morocco', 'Maghreb · North-west Africa', true), country('الجَزَائِر', 'Algeria', 'Maghreb', true),
      country('تُونِس', 'Tunisia', 'Maghreb'), country('مِصْر', 'Egypt', 'Nile Valley', true), country('السُّودَان', 'Sudan', 'Nile Valley'),
      country('لُبْنَان', 'Lebanon', 'Levant'), country('سُورِيَا', 'Syria', 'Levant'), country('العِرَاق', 'Iraq', 'Iraq', true),
      country('المَمْلَكَةُ العَرَبِيَّةُ السُّعُودِيَّة', 'Saudi Arabia', 'Arabian Peninsula', true), country('عُمَان', 'Oman', 'Arabian Peninsula'),
    ],
    notes: `WE DO — the website ten-country route (schematic, not to scale; not a political map). Read each name with SCOPE: many start with الـ — sun or moon letter? (المَغْرِب moon; الجَزَائِر moon; السُّودَان sun; العِرَاق moon; السُّعُودِيَّة sun).
Language map ≠ identity map (website): Arabic may be official while people also use Amazigh languages, Kurdish, Nubian languages, South Arabian languages, English, French and more.
Website game “World Route”: read each Arabic country name, then match its English name or region.`,
  },
  {
    type: 'routes', stage: 'youdo', min: 7, eyebrow: 'You do · independent practice · 7 minutes', title: 'Investigate: choose your route', ar: 'اِبْحَثْ وَاكْتُبْ',
    core: { amount: '5 countries + 3 contexts', task: 'Copy five country names in Arabic with the English. Then copy three everyday words from the context table.', how: 'Say each word aloud as you copy it.' },
    develop: { amount: 'script · language · meaning', task: 'Use your own example from home (or مَطْعَم). Write the three questions and your answer to each.', how: 'Finish with: secure, likely or uncertain — and why.' },
    stretch: { amount: 'ABCD + name design', task: 'Complete the ABCD chain for your own example. Then design your name in Arabic (Naskh first).', how: 'Label it “Arabic-inspired name design” and write an artist’s note: spelling, legibility, visual idea.' },
    notes: 'YOU DO (7 min) — the website private script record (Locate · Copy · Decode · Verify) and name-design studio, split by route. Remind: no personal information in copied examples.',
  },
  F.speakingSlide({
    speaking: {
      context: 'Share your example: source, script, reading, confidence',
      model: [
        ['A', 'أَيْنَ رَأَيْتَ الكِتَابَةَ العَرَبِيَّةَ؟', 'Where did you see Arabic writing?'],
        ['B', 'رَأَيْتُهَا عَلَى مَطْعَمٍ.', 'I saw it on a restaurant.'],
        ['A', 'مَاذَا تَقُولُ؟', 'What does it say?'],
        ['B', 'تَقُولُ «مَطْعَم». أَنَا مُتَأَكِّدٌ.', 'It says “restaurant”. I am sure.'],
      ],
    },
  }, {
    prompts: [
      { route: 'core', ar: 'أَيْنَ رَأَيْتَ الكِتَابَةَ العَرَبِيَّةَ؟' },
      { route: 'core', ar: 'اِقْرَأِ اسْمَ بَلَدٍ.' },
      { route: 'develop', ar: 'هَلْ هِيَ العَرَبِيَّةُ؟ كَيْفَ تَعْرِفُ؟' },
      { route: 'stretch', ar: 'مَا الفَرْقُ بَيْنَ الفُصْحَى وَاللَّهْجَةِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'رَأَيْتُهَا عَلَى ______ .' },
      { route: 'develop', ar: 'أَنَا مُتَأَكِّدٌ / لَسْتُ مُتَأَكِّدًا .' },
      { route: 'stretch', ar: 'الفُصْحَى لِـ ______ ، وَاللَّهْجَةُ لِـ ______ .' },
      { route: 'sum', ar: 'رَأَى / رَأَتْ ______ .' },
    ],
    modelEn: ['Where did you see Arabic writing?', 'I saw it on a restaurant.'],
    notes: 'FOUR-PART SHARE (website): Source — “I found this on …”; Script — letters, dots, marks; Reading — SCOPE; Confidence — secure / likely / uncertain and why. Prompts (translation): Where did you see Arabic writing? · Read a country name. · Is it Arabic? How do you know? · What is the difference between MSA and a dialect? Sentence stems are teacher-made.',
  }),
  {
    type: 'formsTable', stage: 'feedback', min: 2, eyebrow: 'Feedback · careful claims', title: 'Strong claims and careful claims', ar: 'الدَّلِيلُ أَوَّلًا',
    cols: [{ label: 'Risky claim', w: 5.6 }, { label: 'Stronger, careful claim', w: 6.73 }],
    rows: [
      { core: true, cells: ['“It’s Arabic script, so it’s Arabic.”', '“It is Arabic script; I need to check the language.”'] },
      { core: true, cells: ['“This sign tells me the owner’s religion.”', '“The sign tells me what the business is — not who people are.”'] },
      { core: true, cells: ['“Dialects are bad Arabic.”', '“Dialects are spoken varieties with their own rules; MSA is the shared formal variety.”'] },
      { cells: ['“It must mean bakery — there’s bread.”', '“The letters read مَخْبَز, and the picture agrees.”'] },
    ],
    notes: 'FEEDBACK (2 min) — the website respect and evidence rules. Students rewrite one of their own claims in the “careful” style.',
  },
  F.selfCheckSlide([
    { route: 'core', text: 'I can say where Arabic appears around me.' },
    { route: 'core', text: 'I can read five Arabic country names.' },
    { route: 'develop', text: 'I can distinguish script, language, context and meaning.' },
    { route: 'develop', text: 'I can explain MSA and spoken varieties respectfully.' },
    { route: 'stretch', text: 'I can use ABCD and say when evidence is uncertain.' },
  ]),
  F.exitTicket([
    q('Which country is مِصْر?', ['Egypt', 'Morocco', 'Iraq'], 'Nile Valley.'),
    q('Which calligraphy style is our clear school hand based on?', ['Naskh', 'Thuluth', 'Ruqʿah'], 'Website Part 5.'),
    q('A sign is cropped and has no source. What do you say?', ['“I can identify the script, but I cannot yet verify the meaning.”', '“I am sure what it means.”'], 'Website strong sentence.'),
  ], 10),
  F.prepSlide({
    ...NEXT,
    words: [['ا د ذ ر ز و', 'the six non-connectors', ''], ['بَ  بُ  بِ  بْ', 'fatḥa · ḍamma · kasra · sukūn', ''], ['بّ  بٌ  آ  ء', 'shadda · tanwīn · madda · hamza', ''], ['١ ٢ ٣ … ٢٠', 'numerals 0–20', ''], ['مطعم · مدرسة', 'two sign words', '']],
    questionEn: 'Review the 28-letter chart and circle three letter families you feel unsure about.',
    questionAr: 'ا ب ت ث … ن ه و ي',
    homework: {
      core: 'Website “Next step”: review the 28-letter chart; practise the six non-connectors.',
      develop: 'Website “Next step”: review diacritics, numerals 0–20 and five sign words.',
      stretch: 'Website “Next step”: prepare a short vowelled read-aloud passage and one question for the review lesson.',
    },
    wordsSource: 'Next lesson is the F1 review and assessment. These are the five areas to revise (website “prepare for Lesson 12”).',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: revise the 5 areas + bring one question.' }),
];

module.exports = { meta, slides };
