'use strict';
/* GM-ART-01 · The Definite Article — website: Mastery & Revision › Grammar › Articles › Lesson 1 (definite vs indefinite; sun and moon letters;
 * hamzat al-waṣl in connected speech; spelling stays the same; where الـ does and does not belong). Entry check, mini-checks, reading check
 * and mastery check are the website’s; explanation slides, examples, sorter, repair, frames and model are teacher-made on the website rules. */
const G = require('./gm-common');

const s = G.site('grammar__02-articles__grammar-mastery-01-definite-article');
const meta = G.meta({
  code: 'GM-ART-01', fileTitle: 'The_Definite_Article', title: 'The Definite Article', arabic: 'أَدَاةُ التَّعْرِيفِ «الـ»',
  focus: 'Decide whether a noun is definite or indefinite (كِتَابٌ · الْكِتَابُ), pronounce الـ correctly with sun and moon letters (الشَّمْسُ · الْقَمَرُ), connect it in speech (فِي الْبَيْتِ) — and always spell it in full.',
  icon: 'FaSun',
});

const slides = G.gmLesson({
  code: 'GM-ART-01', site: 'grammar__02-articles__grammar-mastery-01-definite-article',
  support: `• Core: a noun vs the noun (كِتَابٌ / الْكِتَابُ) and sorting sun and moon letters. Develop: noun–adjective definiteness, phrase vs sentence. Stretch: hamzat al-waṣl in connected speech and where الـ must NOT be added (كِتَابِي · بَابُ الْمَدْرَسَةِ · names).
• URDU / QUR’AN BRIDGE: students already pronounce this correctly in names and recitation — عَبْدُ الرَّحْمٰنِ (Abdur-Raḥmān), الرَّحْمٰنِ الرَّحِيمِ, الشَّمْسُ in Sūrat ash-Shams: the lām is silent and the next letter doubles. That is a SUN letter. اَلْحَمْدُ, الْقَمَرُ: the lām is heard — a MOON letter.
• The golden rule of this lesson: pronounce naturally, spell in full.`,
  teach: 'A or the? Sun and moon letters. Connected speech. Where الـ belongs.',
  wedo: 'Sort sun and moon letters, repair spelling slips, practise connected speech.',
  next: { nextCode: 'GM-ART-02', nextTitle: 'Definiteness and Adjective Agreement', nextAr: 'مُطَابَقَةُ النَّعْتِ فِي التَّعْرِيفِ وَالتَّنْكِيرِ' },
  doNow: {
    keyIdea: { text: 'Ask one question: am I naming ANY one (indefinite) or a PARTICULAR, known one (definite)?', ar: 'بَيْتٌ = a house  ‖  {k|الْبَيْتُ} = the house' },
    retrieves: 'The website Entry Check (questions 1–5). It is diagnostic: wrong answers tell you which explanation slide needs the most time today.',
  },
  objectives: ['Distinguish a definite noun from an indefinite one.', 'Pronounce الـ correctly with sun and moon letters.', 'Explain why the spelling of الـ never changes in connected speech.', 'Know where الـ belongs — and where it must not be added.'],
  routes: {
    core: ['I can tell كِتَابٌ (a book) from الْكِتَابُ (the book).', 'I can sort nouns into sun and moon letters.'],
    develop: ['I can make a noun and its adjective match in definiteness.', 'I can tell a phrase from a sentence.'],
    stretch: ['I can explain hamzat al-waṣl in connected speech.', 'I can say where الـ does not belong (كِتَابِي · names · iḍāfa).'],
  },
  terms: {
    flexRest: true,
    items: [
      { ar: 'نَكِرَةٌ', en: 'indefinite noun (a / an)', note: 'e.g. كِتَابٌ — a book' },
      { ar: 'مَعْرِفَةٌ', en: 'definite noun (the)', note: 'e.g. الْكِتَابُ — the book' },
      { ar: 'أَدَاةُ التَّعْرِيفِ', en: 'the definite article (al-)', note: 'joined to the noun: الـ' },
      { ar: 'الْحُرُوفُ الشَّمْسِيَّةُ', en: 'sun letters', note: 'lām silent: الشَّمْسُ' },
      { ar: 'الْحُرُوفُ الْقَمَرِيَّةُ', en: 'moon letters', note: 'lām heard: الْقَمَرُ' },
      { ar: 'هَمْزَةُ الْوَصْلِ', en: 'the connecting hamza', note: 'its vowel is heard only after a pause' },
      { ar: 'تَنْوِينٌ', en: 'nunation (-un · -an · -in)', note: 'only on indefinite nouns: كِتَابٌ' },
      { ar: 'شَدَّةٌ', en: 'shadda (doubling mark)', note: 'doubles the sun letter: الشَّمْسُ' },
    ],
    notes: 'Teach the first six now; نَكِرَةٌ and مَعْرِفَةٌ are the two words students must use all lesson (“Is it nakira or maʿrifa?”). Tanwīn and shadda are revision (FLEX slide).',
  },
  explain: [
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 1 · definite or indefinite? (website section 1)', title: 'A book — or THE book?', ar: 'مَعْرِفَةٌ أَمْ نَكِرَةٌ؟',
      points: [
        'Start with MEANING: are you naming any one of something (indefinite) or a particular, known one (definite)?',
        'Indefinite: Arabic has NO word for “a / an”. The noun stands alone; in vowelled text it usually ends in tanwīn: كِتَابٌ (kitābun).',
        'Definite: add الـ to the front of the noun — joined, with no space or hyphen: الْكِتَابُ (al-kitābu).',
        'A noun never has BOTH الـ and tanwīn: write الْكِتَابُ, not الْكِتَابٌ.',
        'In a text, a new noun usually appears first WITHOUT الـ; when it comes back, the reader knows it, so it takes الـ.',
      ],
      examples: [
        { ar: 'بَيْتٌ', en: 'a house', note: 'any house — indefinite' },
        { ar: 'الْبَيْتُ', en: 'the house', note: 'a known house — definite' },
        { ar: 'فِي الْمَدِينَةِ مَدْرَسَةٌ.', en: 'In the city there is a school.', note: 'new → indefinite' },
        { ar: 'الْمَدْرَسَةُ قَرِيبَةٌ.', en: 'The school is near.', note: 'known → definite' },
      ],
      callout: { text: 'Tanwīn (ـٌ ـً ـٍ) is an ending, not a separate word for “a”. In normal unvowelled writing it often disappears, but the noun is still indefinite.' },
      notes: `PART 1 (3 min) — website section “Definite or indefinite?”. Website: “The article is not decoration: it tells the reader whether the noun is specific or non-specific.”
Check: hold up a pen — قَلَمٌ (a pen). Now “THE pen I am holding” — الْقَلَمُ. Students chat “n” (nakira) or “m” (maʿrifa) for five quick nouns.`,
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 2 · phrase or sentence? (website table)', title: 'Same words — a phrase or a sentence?', ar: 'مِنَ الِاسْمِ إِلَى الْجُمْلَةِ', ltr: true,
      cols: [{ label: 'Meaning', w: 3.2 }, { label: 'Arabic', w: 4.4, size: 24 }, { label: 'What to notice', w: 4.73 }],
      rows: [
        { core: true, cells: ['a new school', 'مَدْرَسَةٌ جَدِيدَةٌ', 'Phrase: both words indefinite.'] },
        { core: true, cells: ['the new school', 'الْمَدْرَسَةُ الْجَدِيدَةُ', 'Phrase: both words definite.'] },
        { core: true, cells: ['The school is new.', 'الْمَدْرَسَةُ جَدِيدَةٌ.', 'Sentence: definite subject + indefinite predicate.'] },
        { cells: ['the big house', 'الْبَيْتُ الْكَبِيرُ', 'Phrase (we still need a verb or a predicate).'] },
        { cells: ['The house is big.', 'الْبَيْتُ كَبِيرٌ.', 'A complete sentence — no word for “is”.'] },
      ],
      foot: 'الـ on the adjective decides it: الْبَيْتُ الْكَبِيرُ = the big house · الْبَيْتُ كَبِيرٌ = The house is big.',
      notes: 'PART 2 (2 min) — website table “From noun to noun phrase”. Read each pair aloud. Ask: “Is it complete? Can I put a full stop after it?” This prepares GM-ART-02 (agreement in definiteness).',
    },
    {
      type: 'ruleCards', min: 3, eyebrow: 'Grammar · part 3 · sun and moon letters (website section 2)', title: 'The lām: silent or heard?', ar: 'الشَّمْسِيَّةُ وَالْقَمَرِيَّةُ',
      cards: [
        { chip: 'SUN · 14 LETTERS', color: 'C77700', head: 'ت ث د ذ ر ز س ش ص ض ط ظ ل ن', big: 'الشَّمْسُ', en: 'ash-shamsu — the lām is silent; the next letter doubles (shadda)', clue: 'Tongue-tip letters: say the word and feel the tip of your tongue.' },
        { chip: 'MOON · 14 LETTERS', color: '1D5FBF', head: 'ا ب ج ح خ ع غ ف ق ك م هـ و ي', big: 'الْقَمَرُ', en: 'al-qamaru — the lām is heard (it carries sukūn)', clue: 'Say al- clearly, then the letter.' },
      ],
      error: { text: 'The spelling of الـ never changes — only the sound of the lām.', pairs: [['الشَّمْسُ', 'اَشَّمْسُ']] },
      notes: `PART 3 (3 min) — website section “Sun and moon letters”. Website correction: الشَّمْسُ is pronounced approximately ash-shamsu (short opening vowel), not “āsh-shams”.
Bridge: عَبْدُ الرَّحْمٰنِ, الرَّحِيمِ — students already assimilate ر. Choral: الشَّمْسُ / الْقَمَرُ, then five words — class shows ☀ (hand open) or ☾ (fist) to camera.`,
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 3 · hear the difference (website table “What exactly changes?”)', title: 'Say it, then sort it', ar: 'كَيْفَ نَنْطِقُهَا؟', ltr: true,
      cols: [{ label: 'Pronounced', w: 3.2 }, { label: 'Word', w: 4.4, size: 26 }, { label: 'Letter after الـ', w: 4.73 }],
      rows: [
        { core: true, cells: ['al-qalamu', 'الْقَلَمُ', 'ق — moon: lām heard'] },
        { core: true, cells: ['aṭ-ṭālibu', 'الطَّالِبُ', 'ط — sun: lām silent, ط doubled'] },
        { cells: ['al-baytu', 'الْبَيْتُ', 'ب — moon'] },
        { cells: ['as-sāʿatu', 'السَّاعَةُ', 'س — sun'] },
        { cells: ['an-nahru', 'النَّهْرُ', 'ن — sun'] },
        { cells: ['al-hawāʾu', 'الْهَوَاءُ', 'هـ — moon'] },
      ],
      foot: 'Fully vowelled text shows you: sukūn on the lām = moon letter · shadda on the next letter = sun letter.',
      notes: 'PART 3b (2 min). Cover the left column for Develop/Stretch: they read the Arabic and say the pronunciation. Core read the transliteration first.',
    },
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 4 · hamzat al-waṣl and connected speech (website section 3)', title: 'Connect in speech — spell in full', ar: 'هَمْزَةُ الْوَصْلِ',
      points: [
        'The alif of الـ carries hamzat al-waṣl: a helping vowel used only to START speaking.',
        'After a pause, say it: الْبَيْتُ كَبِيرٌ = al-baytu kabīrun.',
        'After another word, the helping vowel is not pronounced: فِي الْبَيْتِ = fī l-bayti · إِلَى الْمَدْرَسَةِ = ilā l-madrasati.',
        'Both changes can happen at once: فِي الشَّارِعِ = fī sh-shāriʿi (vowel dropped AND lām assimilated).',
        'Pronounce naturally — but ALWAYS write every letter: فِي الْبَيْتِ, never فِلْبَيْتِ.',
      ],
      examples: [
        { ar: 'الْبَيْتُ كَبِيرٌ.', en: 'al-baytu kabīrun', note: 'after a pause' },
        { ar: 'فِي الْبَيْتِ', en: 'fī l-bayti', note: 'connected' },
        { ar: 'وَالشَّمْسُ', en: 'wa-sh-shamsu', note: 'connected + sun letter' },
        { ar: 'مَعَ الْمُعَلِّمَةِ', en: 'maʿa l-muʿallimati', note: 'connected' },
      ],
      callout: { kind: 'warn', text: 'Pronounce naturally; spell conventionally. Cambridge writing expects standard spelling — never write what you hear (فِلْبَيْتِ ✗).' },
      notes: 'PART 4 (3 min) — website section “Hamzat al-waṣl and connected speech”. Model each pair slowly, then naturally. Website: “Connected pronunciation is never an instruction to delete letters.”',
    },
    {
      type: 'ruleCards', min: 2, eyebrow: 'Grammar · part 5 · where الـ does — and does not — belong (website section 4) · Stretch', title: 'Do not add الـ mechanically', ar: 'مَوَاضِعُ «الـ» وَحُدُودُهَا',
      cards: [
        { chip: 'MY BOOK', color: '1E6B52', head: 'كِتَابِي', big: 'كِتَابِي', en: 'my book — the ending ـِي already makes it definite', clue: 'Never الْكِتَابِي.' },
        { chip: 'IḌĀFA', color: '1D5FBF', head: 'بَابُ الْمَدْرَسَةِ', big: 'بَابُ الْمَدْرَسَةِ', en: 'the school door — no الـ on the first noun', clue: 'Only the LAST noun takes الـ.' },
        { chip: 'NAMES', color: '6B4C9A', head: 'مَرْيَمُ · الْقَاهِرَةُ', big: 'مَرْيَمُ · الْقَاهِرَةُ', en: 'Maryam (no الـ) · Cairo (always with الـ)', clue: 'Learn each name as it is.' },
      ],
      error: { text: 'Website idāfa preview: the first noun never takes الـ.', pairs: [['بَابُ الْمَدْرَسَةِ', 'الْبَابُ الْمَدْرَسَةِ']] },
      notes: `PART 5 (2 min) — website section “Where the article does — and does not — belong”. Website: “The safest rule is not ‘add الـ whenever English has the’.”
Proper-name precision (website): “Do not use الـ with proper nouns” is too broad — do not INVENT an article; learn the established form (الْجَزَائِرُ, الْأُرْدُنُّ · مَرْيَمُ, يُوسُفُ).`,
    },
  ],
  quickQuiz: /meaning and structure/i, quickPick: [0, 1, 2, 4], quickNote: 'website mini-check “meaning and structure”, questions 1, 2, 3 and 5.',
  ido: {
    title: 'Watch me decide: الـ or not?',
    steps: [
      { head: 'New?', ar: 'مَكْتَبَةٌ', think: 'First mention → indefinite.' },
      { head: 'Known?', ar: 'الْمَكْتَبَةُ', think: 'Back again → add الـ.' },
      { head: 'Connect', ar: 'إِلَى الْمَكْتَبَةِ', think: 'Say ilā l-maktabati; write in full.' },
      { head: 'Match', ar: 'الْمَكْتَبَةُ الْعَامَّةُ', think: 'Adjective definite too.' },
    ],
    legend: ['e', 'k'], legendLabels: { e: 'INDEFINITE', k: 'DEFINITE' },
    model: 'فِي حَيِّي {e|مَكْتَبَةٌ} {e|عَامَّةٌ}. {k|الْمَكْتَبَةُ} قَرِيبَةٌ مِنَ {k|الْمَدْرَسَةِ}، وَأَذْهَبُ إِلَى {k|الْمَكْتَبَةِ} يَوْمَ {k|السَّبْتِ}.',
    modelEn: 'In my neighbourhood there is a public library. The library is near the school, and I go to the library on Saturday.',
    notes: 'Say aloud at each step: “Is it new or known? Sun or moon? Am I connecting it?” Point out السَّبْتِ (sun letter) and الْمَدْرَسَةِ (moon letter).',
  },
  models: [
    { ar: 'فِي الْمَدِينَةِ مَدْرَسَةٌ جَدِيدَةٌ.', en: 'In the city there is a new school.', tip: 'New information: indefinite.' },
    { ar: 'الْمَدْرَسَةُ قَرِيبَةٌ مِنْ بَيْتِي.', en: 'The school is near my house.', tip: 'Back again: definite · بَيْتِي has no الـ.' },
    { ar: 'أَذْهَبُ إِلَى السُّوقِ يَوْمَ السَّبْتِ.', en: 'I go to the market on Saturday.', tip: 'Two sun letters: as-sūqi · as-sabti.' },
    { ar: 'الْبَيْتُ الْكَبِيرُ فِي الشَّارِعِ.', en: 'The big house is in the street.', tip: 'A definite phrase + connected speech.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · sun or moon?', title: 'Sun letter or moon letter?', ar: 'صَنِّفْ',
      categories: ['Sun letter (lām silent)', 'Moon letter (lām heard)'],
      items: [['الشَّمْسُ', 0], ['الْقَمَرُ', 1], ['النَّهْرُ', 0], ['الْبَابُ', 1], ['الدَّرْسُ', 0], ['الْجَبَلُ', 1], ['الصَّفُّ', 0], ['الْكِتَابُ', 1], ['الرَّجُلُ', 0], ['الْوَلَدُ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Say each word aloud first. Students type “S” or “M” for each card in order (S M S M …), then check. Ask: “How does the vowelling help?” (shadda = sun · sukūn = moon).',
    },
  ],
  mistakes: [
    { wrong: 'أَنَا فِلْبَيْتِ.', right: 'أَنَا فِي الْبَيْتِ.', why: 'Say fī l-bayti, but write every letter.' },
    { wrong: 'مَدْرَسَةٌ الْجَدِيدَةُ', right: 'الْمَدْرَسَةُ الْجَدِيدَةُ', why: 'Noun and adjective match: both definite.' },
    { wrong: 'هٰذَا الْكِتَابِي.', right: 'هٰذَا كِتَابِي.', why: 'my (ـِي) already makes the noun definite.' },
  ],
  hints: ['Write what you hear?', 'Do noun and adjective match?', 'Does “my” need الـ?'],
  practiceQuiz: /connect but do not respell/i, practicePick: [0, 1, 2, 4], practiceLabel: 'website mini-check “connect but do not respell”',
  read: {
    title: 'My city: new and known places', label: 'website reading workshop',
    text: 'أَسْكُنُ فِي مَدِينَةٍ كَبِيرَةٍ. فِي الْمَدِينَةِ مَدْرَسَةٌ جَدِيدَةٌ وَمَكْتَبَةٌ عَامَّةٌ. الْمَدْرَسَةُ قَرِيبَةٌ مِنْ بَيْتِي، وَالْمَكْتَبَةُ فِي وَسَطِ الْمَدِينَةِ. أَذْهَبُ إِلَى الْمَكْتَبَةِ يَوْمَ السَّبْتِ لِأَقْرَأَ الْكُتُبَ الْعَرَبِيَّةَ.',
    glossary: [['أَسْكُنُ', 'I live'], ['مَدِينَةٍ كَبِيرَةٍ', 'a big city'], ['مَكْتَبَةٌ عَامَّةٌ', 'a public library'], ['قَرِيبَةٌ مِنْ', 'near'], ['فِي وَسَطِ', 'in the centre of'], ['يَوْمَ السَّبْتِ', 'on Saturday'], ['لِأَقْرَأَ', 'to read']],
    task: 'Underline every noun that appears first WITHOUT الـ, then circle where it comes back WITH الـ (website: “a noun may first appear indefinitely because it is new, then return with الـ because it is now known”).',
    questions: G.pick(G.quiz(s, /Reading check/i), [0, 1, 2, 3, 4]),
    qNote: 'Website reading check (5 questions).',
  },
  speak: {
    title: 'Speaking: introduce a place, then refer back', source: 'website speaking studio',
    prompts: [
      { route: 'core', ar: 'مَاذَا فِي حَيِّكَ؟' },
      { route: 'develop', ar: 'أَيْنَ الْمَكَانُ؟ صِفْهُ.' },
      { route: 'stretch', ar: 'صِفْ حَيَّكَ: ثَلَاثَةُ أَمَاكِنَ وَصِفَةٌ لِكُلِّ مَكَانٍ.' },
    ],
    stems: [
      { route: 'core', ar: 'فِي حَيِّي ______ وَ ______ .' },
      { route: 'develop', ar: 'الْمَكْتَبَةُ قَرِيبَةٌ مِنْ ______ .' },
      { route: 'stretch', ar: 'الْمَسْجِدُ الْكَبِيرُ فِي ______ ، وَالسُّوقُ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَاذَا فِي حَيِّكَ؟', en: 'What is in your neighbourhood?' },
      { who: 'B', ar: 'فِي حَيِّي مَكْتَبَةٌ وَسُوقٌ. الْمَكْتَبَةُ قَرِيبَةٌ، وَالسُّوقُ كَبِيرٌ.', en: 'There is a library and a market. The library is near; the market is big.' },
    ],
    notes: 'Website checklist for speaking: one sun-letter noun · one moon-letter noun · connect a preposition naturally · answer أَيْنَ الْمَكَانُ؟ To a girl: حَيِّكِ · صِفِيهِ · صِفِي.',
  },
  write: {
    siteTask: 'Writing workshop — My local area: write 7–10 connected sentences; introduce at least three places indefinitely, then refer back to them definitely; include one definite noun–adjective phrase and one complete nominal sentence.',
    core: { amount: '5 sentences', task: 'Introduce three places without الـ, then refer back to two of them with الـ.', how: 'Use the Core frames. Circle every الـ you write and check it is spelled in full.' },
    develop: { amount: '7–8 sentences', task: 'Add one definite phrase (الْحَدِيقَةُ الْكَبِيرَةُ) and one complete sentence (الْحَدِيقَةُ كَبِيرَةٌ).', how: 'Phrase = both words definite. Sentence = definite + indefinite.' },
    stretch: { amount: '7–10 sentences', task: 'The website task “My local area”, with one sun-letter and one moon-letter noun.', how: 'Then mark each الـ as sun or moon and read your text aloud with connected speech.' },
  },
  frames: {
    core: [
      { en: 'In my area there is …', ar: 'فِي حَيِّي ______ .' },
      { en: 'There is also …', ar: 'وَفِيهِ أَيْضًا ______ .' },
      { en: 'The library is near …', ar: 'الْمَكْتَبَةُ قَرِيبَةٌ مِنْ ______ .' },
      { en: 'The market is …', ar: 'السُّوقُ ______ .' },
    ],
    develop: [
      { en: 'The big park is …', ar: 'الْحَدِيقَةُ الْكَبِيرَةُ ______ .' },
      { en: 'The school is … (new)', ar: 'الْمَدْرَسَةُ ______ .' },
      { en: 'I go to … on Saturday.', ar: 'أَذْهَبُ إِلَى ______ يَوْمَ السَّبْتِ.' },
      { en: '… is in the street.', ar: '______ فِي الشَّارِعِ.' },
    ],
    bank: ['مَدْرَسَةٌ / الْمَدْرَسَةُ', 'مَكْتَبَةٌ / الْمَكْتَبَةُ', 'سُوقٌ / السُّوقُ', 'حَدِيقَةٌ / الْحَدِيقَةُ', 'مَسْجِدٌ / الْمَسْجِدُ', 'شَارِعٌ / الشَّارِعُ', 'كَبِيرٌ', 'جَدِيدٌ', 'قَرِيبٌ مِنْ', 'بَعِيدٌ عَنْ', 'فِي وَسَطِ', 'يَوْمَ السَّبْتِ'],
  },
  stretchTask: {
    task: 'Write 7–10 connected sentences about your local area (حَيِّي). Introduce at least three places indefinitely, then refer back to them definitely.',
    checklist: ['Three places introduced without الـ, then referred back to with الـ.', 'One definite noun–adjective phrase (الْبَيْتُ الْكَبِيرُ).', 'One complete nominal sentence (الْبَيْتُ كَبِيرٌ).', 'One sun-letter noun and one moon-letter noun.', 'Every الـ written in full after فِي / إِلَى / مَعَ.'],
    phrases: [['فِي وَسَطِ الْمَدِينَةِ', 'in the centre of the city'], ['قَرِيبٌ مِنَ الْمَحَطَّةِ', 'near the station'], ['أَشْتَرِي مِنَ السُّوقِ', 'I buy from the market'], ['يَوْمَ السَّبْتِ', 'on Saturday'], ['الْمَسْجِدُ الْكَبِيرُ', 'the big mosque'], ['لِأَقْرَأَ الْكُتُبَ', 'to read the books']],
  },
  model: {
    text: 'أَسْكُنُ فِي حَيٍّ هَادِئٍ. فِي الْحَيِّ مَسْجِدٌ كَبِيرٌ وَسُوقٌ صَغِيرٌ وَمَكْتَبَةٌ جَدِيدَةٌ. الْمَسْجِدُ قَرِيبٌ مِنْ بَيْتِي، وَالسُّوقُ فِي الشَّارِعِ الرَّئِيسِيِّ. أَشْتَرِي مِنَ السُّوقِ الْخُبْزَ وَالْفَاكِهَةَ. الْمَكْتَبَةُ الْجَدِيدَةُ جَمِيلَةٌ، وَأَذْهَبُ إِلَيْهَا يَوْمَ السَّبْتِ لِأَقْرَأَ الْكُتُبَ الْعَرَبِيَّةَ.',
    en: 'I live in a quiet neighbourhood. In the neighbourhood there is a big mosque, a small market and a new library. The mosque is near my house, and the market is on the main street. I buy bread and fruit from the market. The new library is beautiful, and I go to it on Saturday to read Arabic books.',
    find: ['new: no الـ', 'known: الـ', 'a definite phrase', 'a sun-letter noun'],
    source: 'teacher model on the website writing task',
    notes: 'Answers: مَسْجِدٌ / سُوقٌ / مَكْتَبَةٌ → الْمَسْجِدُ / السُّوقُ / الْمَكْتَبَةُ · الْمَكْتَبَةُ الْجَدِيدَةُ · السُّوقُ, الشَّارِعِ, السَّبْتِ (sun).',
  },
  selfCheck: [
    { route: 'core', text: 'I introduced new places without الـ.' },
    { route: 'core', text: 'I wrote الـ in full after فِي and إِلَى.' },
    { route: 'develop', text: 'My noun and adjective match in definiteness.' },
    { route: 'develop', text: 'I wrote one phrase AND one sentence.' },
    { route: 'stretch', text: 'I can say which of my nouns begin with a sun letter.' },
  ],
  exitPick: [1, 3, 7],
  prep: {
    words: [['نَعْتٌ / صِفَةٌ', 'an adjective', 'pl. نُعُوتٌ'], ['مَنْعُوتٌ', 'the noun described', '—'], ['مُطَابَقَةٌ', 'agreement', '—'], ['مُبْتَدَأٌ', 'subject of a nominal sentence', '—'], ['خَبَرٌ', 'predicate', 'pl. أَخْبَارٌ']],
    questionEn: 'Write a phrase and a sentence about your bag: “the new bag” and “The bag is new.”',
    questionAr: 'الْحَقِيبَةُ الْجَدِيدَةُ · الْحَقِيبَةُ جَدِيدَةٌ',
    homework: {
      core: 'Learn the 14 sun letters; sort ten nouns from your exercise book into sun and moon.',
      develop: 'Write five phrase / sentence pairs (الْبَيْتُ الْكَبِيرُ · الْبَيْتُ كَبِيرٌ).',
      stretch: 'Finish the website writing task (7–10 sentences) and redo the website mastery check.',
    },
    wordsSource: 'The five words are the grammar terms of GM-ART-02 (website Articles lesson 2).',
  },
  remember: 'Remember: new → no الـ · known → الـ · sun letters swallow the lām · pronounce naturally, spell in full.',
});

module.exports = { meta, slides };
