'use strict';
/*
 * TC-L02 · Landscapes, Nature and Animals
 * Website: Advanced Topics › Topic C › Lesson 2 (reuses P4-L01 “The Natural World — Landscapes, Ecosystems and
 * Biodiversity”, with the Topic C focus “Describe natural settings and explain relationships within them”;
 * grammar focus: adjective agreement, relative clauses, iḍāfa). Landscape and animal words: Topic C
 * “Natural World, Environment & Weather” bank. Picture match: website lesson game “Nature Scene”.
 */
const C = require('./common');
const site = require('../site-data/p4-content.json').lessons.find((l) => l.code === 'P4-L01');
const game = require('../site-data/advanced-topic-visual-games.json').c02;
const G = site.grammar;
const { q, fromSite, splitPrompt } = C;

const meta = C.meta({
  n: 2, fileTitle: 'Landscapes_Nature_Animals', chip: 'Landscapes, Nature & Animals',
  title: 'Landscapes, Nature and Animals', arabic: 'التَّضَارِيسُ وَالطَّبِيعَةُ وَالحَيَوَانَاتُ',
  focus: 'Describe natural settings and explain relationships within them: landscapes, animals and ecosystems, with describing words that agree (نِظَامٌ بِيئِيٌّ · غَابَةٌ اسْتِوَائِيَّةٌ).',
  icon: 'FaMountainSun',
});
const NEXT = { nextCode: 'TC-L03', nextTitle: 'Climate, Seasons and Weather', nextAr: 'المُنَاخُ وَالفُصُولُ وَالطَّقْسُ' };
const adj = (noun, stem, end) => `{w|${noun}} {m|${stem}}{e|${end}}`;

const slides = [
  C.titleSlide({
    n: 2,
    source: 'The website lesson reuses P4-L01 (The Natural World — Landscapes, Ecosystems and Biodiversity) and adds the Topic C focus “Describe natural settings and explain relationships within them” (grammar: adjective agreement; relative clauses; iḍāfa). Landscape and animal words come from the Topic C “Natural World, Environment & Weather” vocabulary bank; the picture match is the website lesson game “Nature Scene”; the sorter is the website’s “Landscape classification” application challenge.',
    support: `• P4-L01 is B1–B2 language, so the lesson is layered. CORE: landscapes and animals (with plurals) + noun and describing word that agree — most describing words here use the nisba ending from TC-L01 (بِيئِيٌّ، طَبِيعِيٌّ، مَرْجَانِيَّةٌ). DEVELOP: the website composition verbs يَضُمُّ / يُشَكِّلُ / يَتَفَاعَلُ مَعَ / يَعْتَمِدُ عَلَى. STRETCH: the website conditionals (إِذَا … سَـ / لَوْ … لَـ) and لِكَيْ + subjunctive.
• Transliteration on every Core word, sg./pl. forms, English on every model sentence, a picture-match game with icons, a read-along listening script with English.
• Urdu bridge words (صحرا، جزیرہ، حیوان، بحر، طبیعت) value home language as a resource.`,
  }),
  C.welcomeSlide(),
  C.journeySlide({ teach: 'Key words for nature, then describing words that agree.', wedo: 'Picture match, sort, build, fix and listen.', next: 'TC-L03' }),
  C.doNow({
    questions: [
      q('Which word means “mountain”?', ['جَبَلٌ', 'نَهْرٌ', 'بَحْرٌ'], 'Prepared at home: جَبَلٌ = mountain · نَهْرٌ = river · بَحْرٌ = sea.'),
      q('Which word means “desert”?', ['صَحْرَاءُ', 'غَابَةٌ', 'حَيَوَانٌ'], 'صَحْرَاءُ = desert · غَابَةٌ = forest · حَيَوَانٌ = animal.'),
      q('Choose the feminine nationality.', ['مِصْرِيَّةٌ', 'مِصْرِيٌّ', 'مِصْرِيُّونَ'], 'TC-L01: ـِيَّةٌ = she · ـِيٌّ = he · ـِيُّونَ = they.'),
      q('What does this mean?', ['Morocco is in the north of Africa.', 'Morocco is west of Africa.', 'Morocco is in Asia.'], 'No word for “is”: country + فِي + place.', { ar: 'المَغْرِبُ فِي شَمَالِ أَفْرِيقِيَا.' }),
      q('Which word means “south”?', ['جَنُوبٌ', 'شَمَالٌ', 'غَرْبٌ'], 'Urdu bridge: جنوب junūb = south.'),
    ],
    keyIdea: { text: 'The same ending ـِيٌّ / ـِيَّةٌ makes describing words: بِيئَة (environment) → بِيئِيٌّ.', ar: '{m|بِيئَةٌ}  ←  نِظَامٌ {m|بِيئِ}{e|يٌّ}' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home (Flipped Learning follow-up). Questions 3–5 retrieve TC-L01 (nisba, place sentence, compass points).',
  }),
  C.objectivesSlide(site.objectives, {
    core: ['I can name 6 landscapes and 6 animals, with their plurals.', 'I can make a describing word agree: نِظَامٌ بِيئِيٌّ / غَابَةٌ اسْتِوَائِيَّةٌ.'],
    develop: ['I can describe an ecosystem with يَضُمُّ and يُشَكِّلُ + an object.', 'I can link the parts with يَتَفَاعَلُ مَعَ and يَعْتَمِدُ عَلَى.'],
    stretch: ['I can use إِذَا … سَـ for a real threat and لَوْ … لَـ for a “what if”.', 'I can write لِكَيْ + subjunctive: لِكَيْ نَحْمِيَ.'],
  }, 2, 'The Core statements carry the Topic C focus for this lesson (natural settings; adjective agreement) using the Natural World vocabulary bank. The website objectives on the left are the P4-L01 objectives (Develop/Stretch).'),
  C.keywordsSlide({
    text: '37 words from the website in 5 groups. Learn the CORE words first. Hear it → say it → see it → use it.',
    groups: [
      { head: 'GROUP 1', name: 'Landscapes · 12' },
      { head: 'GROUP 2', name: 'Animals · 6' },
      { head: 'GROUP 3', name: 'Ecosystems · 7' },
      { head: 'GROUP 4', name: 'Describing verbs · 6' },
      { head: 'GROUP 5 · FLEX', name: 'Protection · 6', flex: true },
    ],
    bridge: [
      { ar: 'صَحْرَاءُ', urdu: 'صحرا', tr: 'ṣaḥrā', en: 'desert' },
      { ar: 'جَزِيرَةٌ', urdu: 'جزیرہ', tr: 'jazīra', en: 'island' },
      { ar: 'حَيَوَانٌ', urdu: 'حیوان', tr: 'ḥaiwān', en: 'animal' },
      { ar: 'بَحْرٌ', urdu: 'بحر', tr: 'baḥr', en: 'sea' },
      { ar: 'طَبِيعَةٌ', urdu: 'طبیعت', tr: 'ṭabīʿat', en: 'nature' },
    ],
    notes: `URDU BRIDGE: ask “Which of these do you already know from home?” (● 10s → ◎). بحرِ ہند (the Indian Ocean) uses بَحْر; طبیعت in Urdu means one’s nature or health — in Arabic طَبِيعَة means nature, and طَبِيعِيٌّ “natural”.
Groups 1–2 are from the Topic C Natural World bank (Core). Groups 3–5 are the website P4-L01 vocabulary (Develop / Stretch).`,
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1', title: 'Landscapes (1 of 2)', ar: 'المَنَاظِرُ الطَّبِيعِيَّةُ',
    items: [
      { n: 1, ar: 'جَبَلٌ', en: 'mountain', tr: 'ja-bal · pl. ji-bāl', tag: 'noun · m.', core: true, forms: [{ l: 'sg.', ar: 'جَبَلٌ' }, { l: 'pl.', ar: 'جِبَالٌ' }] },
      { n: 2, ar: 'نَهْرٌ', en: 'river', tr: 'nahr · pl. an-hār', tag: 'noun · m.', core: true, forms: [{ l: 'sg.', ar: 'نَهْرٌ' }, { l: 'pl.', ar: 'أَنْهَارٌ' }] },
      { n: 3, ar: 'بَحْرٌ', en: 'sea', tr: 'baḥr · pl. bi-ḥār', tag: 'noun · m.', core: true, forms: [{ l: 'sg.', ar: 'بَحْرٌ' }, { l: 'pl.', ar: 'بِحَارٌ' }] },
      { n: 4, ar: 'صَحْرَاءُ', en: 'desert', tr: 'ṣaḥ-rāʾ · pl. ṣa-ḥā-rā', tag: 'noun · f.', core: true, forms: [{ l: 'sg.', ar: 'صَحْرَاءُ' }, { l: 'pl.', ar: 'صَحَارَى' }] },
      { n: 5, ar: 'غَابَةٌ', en: 'forest', tr: 'ghā-ba · pl. ghā-bāt', tag: 'noun · f.', core: true, forms: [{ l: 'sg.', ar: 'غَابَةٌ' }, { l: 'pl.', ar: 'غَابَاتٌ' }] },
      { n: 6, ar: 'جَزِيرَةٌ', en: 'island', tr: 'ja-zī-ra · pl. ju-zur', tag: 'noun · f.', core: true, forms: [{ l: 'sg.', ar: 'جَزِيرَةٌ' }, { l: 'pl.', ar: 'جُزُرٌ' }] },
    ],
    notes: `KEY WORDS — Landscapes (website: Topic C Natural World bank, “Landscapes & natural features”). Hear → Say → See → Use.
Gesture for each: hands in a peak (mountain), wavy hand (river / sea), wipe brow (desert), fingers up (trees), circle (island).
Link to TC-L01: جُزُرٌ is the plural of جَزِيرَة — as in جُزُرُ القَمَرِ (the Comoros).
PRONUNCIATION: ح in بَحْر / صَحْرَاء is a breathy “ḥ” from the throat, not “h”; ص is a heavy “ṣ”.
Quick check: “Type the NUMBER of the word that means desert / island / river”.`,
  },
  {
    type: 'vocab', stage: 'teach', eyebrow: 'Key words · Group 1 · Develop', title: 'Landscapes (2 of 2)', ar: 'المَنَاظِرُ الطَّبِيعِيَّةُ',
    items: [
      { n: 7, ar: 'بُحَيْرَةٌ', en: 'lake', tr: 'bu-ḥay-ra · pl. bu-ḥay-rāt', tag: 'noun · f.', forms: [{ l: 'sg.', ar: 'بُحَيْرَةٌ' }, { l: 'pl.', ar: 'بُحَيْرَاتٌ' }] },
      { n: 8, ar: 'شَاطِئٌ', en: 'beach, shore', tr: 'shā-ṭiʾ · pl. sha-wā-ṭiʾ', tag: 'noun · m.', forms: [{ l: 'sg.', ar: 'شَاطِئٌ' }, { l: 'pl.', ar: 'شَوَاطِئُ' }] },
      { n: 9, ar: 'سَاحِلٌ', en: 'coast', tr: 'sā-ḥil · pl. sa-wā-ḥil', tag: 'noun · m.', forms: [{ l: 'sg.', ar: 'سَاحِلٌ' }, { l: 'pl.', ar: 'سَوَاحِلُ' }] },
      { n: 10, ar: 'شَلَّالٌ', en: 'waterfall', tr: 'shal-lāl · pl. shal-lā-lāt', tag: 'noun · m.', forms: [{ l: 'sg.', ar: 'شَلَّالٌ' }, { l: 'pl.', ar: 'شَلَّالَاتٌ' }] },
      { n: 11, ar: 'بُرْكَانٌ', en: 'volcano', tr: 'bur-kān · pl. ba-rā-kīn', tag: 'noun · m.', forms: [{ l: 'sg.', ar: 'بُرْكَانٌ' }, { l: 'pl.', ar: 'بَرَاكِينُ' }] },
      { n: 12, ar: 'هَضْبَةٌ', en: 'plateau', tr: 'haḍ-ba · pl. hi-ḍāb', tag: 'noun · f.', forms: [{ l: 'sg.', ar: 'هَضْبَةٌ' }, { l: 'pl.', ar: 'هِضَابٌ' }] },
    ],
    notes: `KEY WORDS — more landscapes (website Natural World bank). Develop / Stretch; Core students listen and repeat.
Notice: بُحَيْرَة (lake) is a “little sea” — it comes from بَحْر. Stretch: find the root ب ح ر in both.`,
  },
  {
    type: 'vocab', stage: 'teach', min: 1, eyebrow: 'Key words · Group 2', title: 'Animals', ar: 'الحَيَوَانَاتُ',
    items: [
      { n: 1, ar: 'حَيَوَانٌ', en: 'animal', tr: 'ḥa-ya-wān · pl. ḥa-ya-wā-nāt', tag: 'noun · m.', core: true, forms: [{ l: 'sg.', ar: 'حَيَوَانٌ' }, { l: 'pl.', ar: 'حَيَوَانَاتٌ' }] },
      { n: 2, ar: 'سَمَكٌ', en: 'fish', tr: 'sa-mak · pl. as-māk', tag: 'noun · m.', core: true, forms: [{ l: 'sg.', ar: 'سَمَكٌ' }, { l: 'pl.', ar: 'أَسْمَاكٌ' }] },
      { n: 3, ar: 'جَمَلٌ', en: 'camel', tr: 'ja-mal · pl. ji-māl', tag: 'noun · m.', core: true, forms: [{ l: 'sg.', ar: 'جَمَلٌ' }, { l: 'pl.', ar: 'جِمَالٌ' }] },
      { n: 4, ar: 'أَسَدٌ', en: 'lion', tr: 'a-sad · pl. u-sūd', tag: 'noun · m.', core: true, forms: [{ l: 'sg.', ar: 'أَسَدٌ' }, { l: 'pl.', ar: 'أُسُودٌ' }] },
      { n: 5, ar: 'فِيلٌ', en: 'elephant', tr: 'fīl · pl. fi-ya-la', tag: 'noun · m.', forms: [{ l: 'sg.', ar: 'فِيلٌ' }, { l: 'pl.', ar: 'فِيَلَةٌ' }] },
      { n: 6, ar: 'قِرْدٌ', en: 'monkey', tr: 'qird · pl. qu-rūd', tag: 'noun · m.', forms: [{ l: 'sg.', ar: 'قِرْدٌ' }, { l: 'pl.', ar: 'قُرُودٌ' }] },
    ],
    notes: `KEY WORDS — Animals (website Natural World bank, “Animals & wildlife”). Hear → Say → See → Use.
Also in the website game: الْمَاعِزُ (goats). Urdu bridge: حَيَوَان ↔ حیوان; فِيل ↔ فیل (fīl, elephant — as in Surat al-Fīl).
Quick check: “Which animal lives in the desert?” → جَمَلٌ.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Key words · Group 3 · website P4-L01', title: 'Ecosystems: a noun + a describing word', ar: 'الأَنْظِمَةُ البِيئِيَّةُ',
    cols: [{ label: 'Phrase (website)', w: 4.2, size: 22 }, { label: 'English', w: 3.2 }, { label: 'The describing word comes from…', w: 4.93, italic: true }],
    rows: [
      { core: true, cells: [{ ar: adj('نِظَامٌ', 'بِيئِ', 'يٌّ'), sub: 'ni-ẓām bī-ʾiyy' }, 'an ecosystem', 'بِيئَة (environment) → بِيئِيٌّ'] },
      { cells: [{ ar: adj('تَنَوُّعٌ', 'حَيَوِ', 'يٌّ'), sub: 'ta-na-wwuʿ ḥa-ya-wiyy' }, 'biodiversity', 'حَيَاة (life) → حَيَوِيٌّ'] },
      { cells: [{ ar: adj('سِلْسِلَةٌ', 'غِذَائِ', 'يَّةٌ'), sub: 'sil-si-la ghi-dhā-ʾiy-ya' }, 'a food chain', 'غِذَاء (food) → غِذَائِيَّةٌ — f. noun'] },
      { core: true, cells: [{ ar: adj('مَوْطِنٌ', 'طَبِيعِ', 'يٌّ'), sub: 'maw-ṭin ṭa-bī-ʿiyy' }, 'a natural habitat', 'طَبِيعَة (nature) → طَبِيعِيٌّ'] },
      { core: true, cells: [{ ar: adj('غَابَةٌ', 'اسْتِوَائِ', 'يَّةٌ'), sub: 'ghā-ba is-ti-wā-ʾiy-ya' }, 'a tropical rainforest', 'اسْتِوَاء (equator) → اسْتِوَائِيَّةٌ — f. noun'] },
      { cells: [{ ar: adj('شِعَابٌ', 'مَرْجَانِ', 'يَّةٌ'), sub: 'shi-ʿāb mar-jā-niy-ya' }, 'coral reefs', 'مَرْجَان (coral) → plural of things takes f.'] },
      { cells: [{ ar: adj('التَّوَازُنُ', 'البِيئِ', 'يُّ'), sub: 'at-ta-wā-zun al-bī-ʾiyy' }, 'ecological balance', 'ال on BOTH words'] },
    ],
    notes: `KEY WORDS — Ecosystems (website P4-L01 vocabulary “Ecosystems and biodiversity”).
The big idea: almost every describing word here is a NISBA — the same ending as the nationalities in TC-L01. Blue = the noun (WHO it describes), purple = meaning, pink = ending.
Core students learn the three CORE phrases. Develop: all seven. Stretch: explain the third column (why شِعَاب takes a feminine adjective: a plural of things behaves like a feminine singular).
Also on the website: أَنْوَاعٌ مُهَدَّدَةٌ بِالانْقِرَاضِ (endangered species) and الانْقِرَاضُ (extinction) — Group 5.`,
  },
  {
    type: 'vocab', stage: 'teach', min: 1, eyebrow: 'Key words · Group 4 · Develop', title: 'Describing verbs (website)', ar: 'أَفْعَالُ الوَصْفِ',
    items: [
      { n: 1, ar: '{k|يَضُمُّ}', en: 'includes, encompasses', tr: 'ya-ḍum-mu', tag: 'verb + object', note: 'Form I, doubled; direct object.' },
      { n: 2, ar: '{k|يُشَكِّلُ}', en: 'forms, constitutes', tr: 'yu-shak-ki-lu', tag: 'verb + object', note: 'Form II; direct object.' },
      { n: 3, ar: '{k|يَتَفَاعَلُ} مَعَ', en: 'interacts with', tr: 'ya-ta-fā-ʿa-lu ma-ʿa', tag: 'verb + مَعَ', note: 'Form VI, fixed with مَعَ.' },
      { n: 4, ar: '{k|يَعْتَمِدُ} عَلَى', en: 'depends on', tr: 'yaʿ-ta-mi-du ʿa-lā', tag: 'verb + عَلَى', note: 'Fixed with عَلَى.' },
      { n: 5, ar: '{k|يُهَدِّدُ}', en: 'threatens', tr: 'yu-had-di-du', tag: 'verb + object', note: 'Form II; direct object.' },
      { n: 6, ar: '{k|يُؤَدِّي} إِلَى', en: 'leads to', tr: 'yu-ʾad-dī i-lā', tag: 'verb + إِلَى', note: 'Fixed with إِلَى.' },
    ],
    notes: `KEY WORDS — Composition and impact verbs (website P4-L01). Develop focus; Core students learn يَضُمُّ only (“includes”).
Website notes on each card. Teach them in pairs: the verbs with NO preposition (يَضُمُّ، يُشَكِّلُ، يُهَدِّدُ) and the verbs that ALWAYS take one (مَعَ، عَلَى، إِلَى).
Also on the website: يَتَكَوَّنُ مِنْ (is composed of) and حِمَايَةُ التَّنَوُّعِ (protecting biodiversity).`,
  },
  {
    type: 'vocab', stage: 'teach', flex: true, eyebrow: 'Key words · Group 5 · FLEX · Stretch', title: 'Protecting nature', ar: 'حِمَايَةُ الطَّبِيعَةِ',
    items: [
      { n: 1, ar: 'أَنْوَاعٌ مُهَدَّدَةٌ بِالانْقِرَاضِ', en: 'endangered species', tr: 'an-wāʿ mu-had-da-da bil-in-qi-rāḍ', tag: 'phrase' },
      { n: 2, ar: 'الانْقِرَاضُ', en: 'extinction', tr: 'al-in-qi-rāḍ', tag: 'noun' },
      { n: 3, ar: 'لِكَيْ', en: 'so that, in order that', tr: 'li-kay', tag: 'particle', note: 'Triggers the subjunctive.' },
      { n: 4, ar: 'لِكَيْ تَحْمِيَ', en: 'so that it protects', tr: 'li-kay taḥ-mi-ya', tag: 'subjunctive', note: 'Subjunctive تَحْمِيَ.' },
      { n: 5, ar: 'إِجْرَاءَاتُ الحِمَايَةِ', en: 'protection measures', tr: 'ij-rā-ʾāt al-ḥi-mā-ya', tag: 'iḍāfa' },
      { n: 6, ar: 'تَعَاوُنٌ {m|إِقْلِيمِ}{e|يٌّ}', en: 'regional cooperation', tr: 'ta-ʿā-wun iq-lī-miyy', tag: 'noun + adjective' },
    ],
    notes: `KEY WORDS — Protection and the purpose subjunctive (website P4-L01; FLEX — Stretch or homework). Website notes shown on cards.
Also on the website: لِكَيْ تَسْتَمِرَّ (so that it continues), لِكَيْ تُحَافِظَ (so that it preserves), الفِعْلُ المَنْصُوبُ (the subjunctive verb), فَتْحَةُ النَّصْبِ (the subjunctive fatḥa).`,
  },
  {
    type: 'codeWord', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 1 · adjective agreement', title: 'The describing word agrees with its noun', ar: 'الصِّفَةُ تَتْبَعُ المَوْصُوفَ',
    word: adj('غَابَةٌ', 'اسْتِوَائِ', 'يَّةٌ'), tr: 'ghā-ba is-ti-wā-ʾiy-ya · a tropical rainforest',
    parts: [
      { code: 'w', ar: 'غَابَةٌ', title: 'NOUN first (WHO it describes)', text: 'The noun comes first. غَابَة ends in ـة, so it is feminine.' },
      { code: 'm', ar: 'اسْتِوَاء', title: 'MEANING', text: 'The describing word is made from a noun: اسْتِوَاء (equator) → tropical.' },
      { code: 'e', ar: 'ـِيَّةٌ', title: 'ENDING agrees', text: 'Feminine noun → ـِيَّةٌ. Masculine noun → ـِيٌّ: نِظَامٌ بِيئِيٌّ.' },
    ],
    notes: `GRAMMAR PART 1 — adjective agreement (2 min). Topic C grammar focus for this lesson: “Adjective agreement; relative clauses; iḍāfa”.
Think aloud: “Arabic puts the noun FIRST and the describing word AFTER it — the opposite of English. The describing word copies the noun: feminine → ـِيَّةٌ, masculine → ـِيٌّ. If the noun has ال, the describing word has ال too.”
Core rule for today: noun first, then the describing word with the SAME ending type.
Misconception: English order (اسْتِوَائِيَّةٌ غَابَةٌ) or a masculine ending on a feminine noun (غَابَةٌ اسْتِوَائِيٌّ).`,
  },
  {
    type: 'peopleTable', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · one ending, many nature words', title: 'Nouns and describing words in website sentences', ar: 'صِفَاتٌ مِنَ الطَّبِيعَةِ',
    heads: ['Noun', 'Describing word', 'Website sentence'],
    rows: [
      { who: 'نِظَامٌ', whoEn: 'system (m.)', word: '{m|بِيئِ}{e|يٌّ}', sentence: 'كُلُّ {w|نِظَامٍ} {m|بِيئِ}{e|يٍّ} يَضُمُّ أَنْوَاعًا.', en: 'Every ecosystem includes (many) species.' },
      { who: 'غَابَةٌ', whoEn: 'forest (f.)', word: '{m|اسْتِوَائِ}{e|يَّةٌ}', sentence: 'تَضُمُّ {w|الغَابَةُ} آلَافَ الأَنْوَاعِ.', en: 'The forest includes thousands of species.' },
      { who: 'سَلَاسِلُ', whoEn: 'chains (pl. things)', word: '{m|غِذَائِ}{e|يَّةٌ}', sentence: 'تَتَفَاعَلُ الأَنْوَاعُ فِي {w|سَلَاسِلَ} {m|غِذَائِ}{e|يَّةٍ}.', en: 'Species interact in food chains.' },
      { who: 'شِعَابٌ', whoEn: 'reefs (pl. things)', word: '{m|مَرْجَانِ}{e|يَّةٌ}', sentence: 'يَضُمُّ البَحْرُ {w|شِعَابًا} {m|مَرْجَانِ}{e|يَّةً}.', en: 'The sea includes coral reefs.' },
      { who: 'المَنَاطِقُ', whoEn: 'areas (pl. things)', word: '{m|الجَبَلِ}{e|يَّةُ}', sentence: 'تَعِيشُ المَاعِزُ فِي {w|المَنَاطِقِ} {m|الجَبَلِ}{e|يَّةِ}.', en: 'Goats live in mountainous areas. (website game)' },
    ],
    notes: `GRAMMAR PART 2 — agreement in real website sentences (2 min). Sentences from the website reading, sorter, builder and lesson game.
Read each row: students say only the blue noun + the pink ending.
Develop / Stretch: plurals of THINGS (سَلَاسِل، شِعَاب، مَنَاطِق) take a FEMININE SINGULAR describing word — that is why they all end in ـِيَّة. Row 5: جَبَل (mountain) → جَبَلِيَّة (mountainous).
The endings change with the grammar (ـٌّ / ـٍّ / ـً): Core students only need to notice “ـِيّ” = he-type, “ـِيَّة” = she-type.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 3 · three ways to join words', title: 'Adjective, iḍāfa, relative clause', ar: 'الصِّفَةُ وَالإِضَافَةُ وَالمَوْصُولُ',
    cards: [
      { chip: 'ADJECTIVE', head: 'نِظَامٌ بِيئِيٌّ', big: 'التَّوَازُنُ البِيئِيُّ', en: 'the ecological balance — noun + describing word', clue: 'ال on BOTH words or on NEITHER: نِظَامٌ بِيئِيٌّ / النِّظَامُ البِيئِيُّ.' },
      { chip: 'IḌĀFA · “the … of …”', color: '7B3FA0', head: 'حِمَايَةُ التَّنَوُّعِ', big: 'إِجْرَاءَاتُ الحِمَايَةِ', en: 'the measures of protection — protection measures', clue: '1st noun: no ال, no tanwīn. 2nd noun: often ال + kasra: حِمَايَةُ التَّنَوُّعِ.' },
      { chip: 'RELATIVE · which / that', color: '0E7C86', head: 'الَّتِي / الَّذِي', big: 'الغَابَةُ الَّتِي تَضُمُّ آلَافَ الأَنْوَاعِ', en: 'the forest which includes thousands of species', clue: 'الَّذِي after a masculine noun; الَّتِي after a feminine noun or a plural of things.' },
    ],
    error: { text: 'Using English word order, or a masculine ending on a feminine noun.', pairs: [['غَابَةٌ اسْتِوَائِيَّةٌ', 'غَابَةٌ اسْتِوَائِيٌّ'], ['حِمَايَةُ التَّنَوُّعِ', 'الحِمَايَةُ التَّنَوُّعِ']] },
    notes: `GRAMMAR PART 3 — the three structures named in the Topic C focus for this lesson (2 min; Develop focus, Core listen for the adjective card).
Examples use website vocabulary: التَّوَازُنُ البِيئِيُّ، حِمَايَةُ التَّنَوُّعِ، إِجْرَاءَاتُ الحِمَايَةِ (website word bank); the relative clause is built from the website quiz sentence تَضُمُّ الغَابَةُ آلَافَ الأَنْوَاعِ (teacher-made).
Common errors (teacher-made): masculine ending on غَابَة; ال on the first noun of an iḍāfa.
Stretch challenge: turn نِظَامٌ بِيئِيٌّ into a relative clause: النِّظَامُ الَّذِي يَضُمُّ …`,
  },
  {
    type: 'formula', stage: 'teach', min: 1, eyebrow: 'Grammar focus · Part 4 · Develop · website rule “Composition”', title: 'Describe an ecosystem: verb + subject + object', ar: 'أَفْعَالُ التَّكْوِينِ',
    cols: [
      { label: 'verb (key word)', ar: 'الفِعْلُ', color: '0E7C86', pale: 'E3F2F3' },
      { label: 'subject', ar: 'الفَاعِلُ', color: '1B3B6F', pale: 'EEF3FA' },
      { label: 'object / complement', ar: 'التَّكْمِلَةُ', color: '8A6D1E', pale: 'F8F0DC' },
    ],
    rows: [
      { en: 'The forest includes thousands of species.', cells: ['{k|تَضُمُّ}', 'الغَابَةُ', 'آلَافَ الأَنْوَاعِ.'] },
      { en: 'Coral forms a vital environment.', cells: ['{k|يُشَكِّلُ}', 'المَرْجَانُ', 'بِيئَةً حَيَوِيَّةً.'] },
      { en: 'Each element interacts with the others.', cells: ['{k|يَتَفَاعَلُ}', 'كُلُّ عُنْصُرٍ', 'مَعَ العَنَاصِرِ الأُخْرَى.'] },
      { en: 'The balance depends on every element surviving.', cells: ['{k|يَعْتَمِدُ}', 'التَّوَازُنُ', 'عَلَى بَقَاءِ كُلِّ عُنْصُرٍ.'] },
    ],
    foot: 'No preposition after يَضُمُّ / يُشَكِّلُ. Fixed partners: يَتَفَاعَلُ مَعَ · يَعْتَمِدُ عَلَى · يُؤَدِّي إِلَى',
    notes: `GRAMMAR PART 4 — website rule “Composition”: يَضُمُّ / يُشَكِّلُ + object. Both take a direct object; يَتَفَاعَلُ takes مَعَ.
Arabic often starts with the VERB. Read each row in three beats: verb → subject → object. Note تَضُمُّ (feminine) because الغَابَةُ is feminine; يُشَكِّلُ because المَرْجَانُ is masculine.
Sentences: website grammar examples, quiz and reading text.
Website teaching point: “Both take a direct object. يَتَفَاعَلُ مَعَ links the parts of a system.”`,
  },
  {
    type: 'ruleCards', stage: 'teach', flex: true, eyebrow: 'Grammar focus · Part 5 · FLEX · Stretch', title: 'Threats and purpose: إِذَا · لَوْ · لِكَيْ', ar: 'الشَّرْطُ وَالمَنْصُوبُ',
    cards: [
      { chip: 'REAL THREAT · TYPE 1', head: 'إِذَا … سَـ', big: 'إِذَا اسْتَمَرَّ الاحْتِرَارُ، سَتَمُوتُ الشِّعَابُ', en: 'If warming continues, the reefs will die.', clue: 'A likely consequence of a current trend: إِذَا + past → سَـ.' },
      { chip: '“WHAT IF” · TYPE 2', color: '7B3FA0', head: 'لَوْ … لَـ', big: 'لَوْ حُمِيَتْ مُبَكِّرًا، لَبَقِيَتِ الشِّعَابُ', en: 'Had they been protected early, the reefs would have survived.', clue: 'What would have been better: لَوْ + past → لَـ.' },
      { chip: 'PURPOSE', color: 'B83227', head: 'لِكَيْ + ـَ', big: 'لِكَيْ نَحْمِيَ الغَابَاتِ', en: 'so that we protect the forests', clue: 'After لِكَيْ the verb ends in a fatḥa: نَحْمِيَ, not نَحْمِي.' },
    ],
    error: { text: G.common_error.split('.')[0] + '.', pairs: [['لِكَيْ نَحْمِيَ', 'لِكَيْ نَحْمِي'], ['لَوْ … لَمَاتَتْ', 'لَوْ … سَتَمُوتُ']] },
    notes: `GRAMMAR PART 5 — website rules “Real threat (Type 1)”, “Counterfactual (Type 2)” and “Purpose subjunctive” (FLEX — Stretch focus; Develop may try Type 1 only).
Website teaching point: “After لِكَي the verb ends in a fatḥa, not a ḍamma … The final fatḥa is the subjunctive marker, and P4 accuracy depends on it.”
Website common error: ${G.common_error}`,
  },
  {
    type: 'ruleRows', stage: 'teach', flex: true, eyebrow: 'Grammar focus · Part 6 · website examples · FLEX', title: 'The four website rules with examples', ar: 'أَمْثِلَةُ القَوَاعِدِ',
    rows: G.rules.map((r) => ({ title: r.heading, formula: r.formula, examples: r.examples })),
    notes: `WEBSITE GRAMMAR RULES AND EXAMPLES (FLEX — revision or homework). Website overview: “${G.overview}”
Core: row 1 only. Develop: rows 1–2. Stretch: all four, and explain the difference between rows 2 and 3 in English.`,
  },
  C.quickCheck([
    q('Choose the accurate phrase.', ['غَابَةٌ اسْتِوَائِيَّةٌ', 'غَابَةٌ اسْتِوَائِيٌّ', 'اسْتِوَائِيَّةٌ غَابَةٌ'], 'غَابَة is feminine → ـِيَّةٌ, and the describing word comes AFTER the noun.'),
    fromSite(site.mission.rounds[8], { prompt: 'Which means “biodiversity”?', why: 'تَنَوُّعٌ حَيَوِيٌّ = biodiversity (حَيَاة = life).' }),
    fromSite(G.quiz[0]),
    splitPrompt(G.quiz[1]),
  ], 'one teacher-made agreement question, Ecosystem Mission round 9 and website grammar quiz questions 1–2.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me describe a natural place', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Choose a place', ar: '{w|البَحْرُ} الأَحْمَرُ', think: 'بَحْر = sea. الأَحْمَرُ (red) agrees: ال + masculine.' },
      { head: 'Say where it is', ar: 'بَيْنَ آسِيَا وَأَفْرِيقِيَا', think: 'بَيْنَ = between. Recycle the continents from TC-L01.' },
      { head: 'What does it include?', ar: '{k|يَضُمُّ} {w|شِعَابًا} {m|مَرْجَانِ}{e|يَّةً}', think: 'يَضُمُّ + object (no بِـ). شِعَاب = plural of things → ـِيَّة.' },
      { head: 'Which animals live there?', ar: 'تَعِيشُ فِيهِ أَسْمَاكٌ كَثِيرَةٌ', think: 'تَعِيشُ = (they) live — from the website game.' },
    ],
    legend: ['w', 'm', 'e', 'k'], legendLabels: { w: 'NOUN', m: 'MEANING', e: 'ENDING', k: 'KEY VERB' },
    model: '{w|البَحْرُ} الأَحْمَرُ بَيْنَ آسِيَا وَأَفْرِيقِيَا. {k|يَضُمُّ} {w|شِعَابًا} {m|مَرْجَانِ}{e|يَّةً}، وَتَعِيشُ فِيهِ أَسْمَاكٌ كَثِيرَةٌ.',
    modelEn: 'The Red Sea is between Asia and Africa. It includes coral reefs, and many fish live in it.',
    notes: `I DO (3 min) — teacher models with a think-aloud; students watch, then COPY the finished description into their books.
Think-aloud script:
Step 1 — “I choose البَحْرُ الأَحْمَرُ. The colour word comes after the noun and copies ال.”
Step 2 — “Where? Between Asia and Africa: بَيْنَ آسِيَا وَأَفْرِيقِيَا. No word for ‘is’.”
Step 3 — “What does it include? يَضُمُّ + object — no بِـ. شِعَاب is a plural of things, so مَرْجَانِيَّة is feminine.”
Step 4 — “Which animals? تَعِيشُ فِيهِ أَسْمَاكٌ كَثِيرَةٌ.”
Built from website language: the listening/model text (يَقَعُ البَحْرُ الأَحْمَرُ بَيْنَ شِبْهِ الجَزِيرَةِ العَرَبِيَّةِ وَشَمَالِ أَفْرِيقِيَا … يَضُمُّ … شِعَابًا مَرْجَانِيَّةً) simplified for Core, and the lesson game (تَعِيشُ الأَسْمَاكُ فِي البَحْرِ).`,
  },
  {
    type: 'models', stage: 'ido', min: 1, eyebrow: 'I do · model sentences from the website', title: 'Four sentences to borrow', ar: 'جُمَلٌ نَمُوذَجِيَّةٌ',
    rows: [
      { ar: 'تَعِيشُ الأَسْمَاكُ فِي البَحْرِ.', en: 'Fish live in the sea.', tip: 'Website game — a Core sentence.' },
      { ar: 'تَعِيشُ المَاعِزُ فِي المَنَاطِقِ {m|الجَبَلِ}{e|يَّةِ}.', en: 'Goats live in mountainous areas.', tip: 'جَبَل → جَبَلِيَّة: the nisba again.' },
      { ar: site.patterns[0].ar + '.', en: 'The coral reefs in the Red Sea include a thousand species of fish.', tip: site.patterns[0].tip },
      { ar: site.patterns[2].ar + '.', en: 'Countries need cooperation so that they protect this natural heritage.', tip: site.patterns[2].tip },
    ],
    notes: `MODEL SENTENCES (1 min) — website lesson game and website patterns. Read each aloud; students copy TWO that are useful for them.
• Core: copy 1 and 2 and change the animal or place (تَعِيشُ الجِمَالُ فِي الصَّحْرَاءِ).
• Develop: copy 3 and change the place.
• Stretch: copy 4 and write a second sentence with لِكَيْ + subjunctive.`,
  },
  C.gameSlide(game, {
    en: ['Goats live in mountainous areas.', 'Fish live in the sea.', 'In the desert there are plants that tolerate drought.'],
    icons: [[['fa6', 'FaMountain'], ['gi', 'GiGoat']], [['fa6', 'FaWater', '1D5FBF'], ['fa6', 'FaFish', '1D5FBF']], [['gi', 'GiDesert', 'C77700'], ['gi', 'GiCactus', '2E8B57']]],
    order: [1, 2, 0],
    notes: 'Key words to spot: الجَبَلِيَّةِ (mountain), البَحْرِ (sea), الصَّحْرَاءِ (desert). Stretch: explain تَتَحَمَّلُ الجَفَافَ (tolerate drought).',
  }),
  {
    type: 'sorter', stage: 'wedo', min: 2, eyebrow: 'We do · website challenge “Landscape classification”', title: 'Landscape, animal or ecosystem?', ar: 'صَنِّفْ',
    categories: ['Landscape', 'Animal', 'Ecosystem'],
    items: [
      { ar: 'جَبَلٌ', cat: 0 }, { ar: 'جَمَلٌ', cat: 1 }, { ar: 'نِظَامٌ بِيئِيٌّ', cat: 2 }, { ar: 'صَحْرَاءُ', cat: 0 },
      { ar: 'أَسَدٌ', cat: 1 }, { ar: 'شِعَابٌ مَرْجَانِيَّةٌ', cat: 2 }, { ar: 'نَهْرٌ', cat: 0 }, { ar: 'سِلْسِلَةٌ غِذَائِيَّةٌ', cat: 2 }, { ar: 'سَمَكٌ', cat: 1 },
    ],
    answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
    notes: `WE DO — website “Advanced application” for this lesson: “Landscape classification — sort natural-world vocabulary into landscape, animal, plant or ecosystem groups, then describe one scene with location and comparison language.” (2 min)
On Teams: drag the tiles into the columns live, or annotate on the shared screen. Core: sort and say the English. Develop: say a sentence for one tile (تَعِيشُ الجِمَالُ فِي الصَّحْرَاءِ). Stretch: describe one scene with a location and a comparison.
The website P4-L01 grammar sorter (composition / conditional / purpose) is on the website for Stretch homework.`,
  },
  {
    type: 'builder', stage: 'wedo', min: 3, eyebrow: 'We do · guided practice · sentence builder', title: 'Build the sentence', ar: 'اِبْنِ الجُمْلَةَ',
    rows: [
      { en: 'The tropical rainforest is a natural habitat.', cols: [['البَحْرُ', 'الغَابَةُ'], ['الاسْتِوَائِيَّةُ', 'الاسْتِوَائِيُّ'], ['مَوْطِنٌ طَبِيعِيَّةٌ.', 'مَوْطِنٌ طَبِيعِيٌّ.']], key: [1, 0, 1], why: 'غَابَة is f. → الاسْتِوَائِيَّةُ; مَوْطِن is m. → طَبِيعِيٌّ.' },
      { en: 'The Red Sea includes coral reefs.', cols: [['يَضُمُّ', 'يَعْتَمِدُ'], ['البَحْرُ الأَحْمَرُ', 'الصَّحْرَاءُ'], ['بِشِعَابٍ مَرْجَانِيَّةٍ.', 'شِعَابًا مَرْجَانِيَّةً.']], key: [0, 0, 1], why: 'يَضُمُّ takes a direct object — no بِـ.' },
      { en: 'Each element interacts with the other elements.', cols: [['يُشَكِّلُ', 'يَتَفَاعَلُ'], ['كُلُّ عُنْصُرٍ', 'كُلُّ عُنْصُرًا'], ['عَلَى العَنَاصِرِ الأُخْرَى.', 'مَعَ العَنَاصِرِ الأُخْرَى.']], key: [1, 0, 1], why: 'يَتَفَاعَلُ is fixed with مَعَ.' },
    ],
    answerSlide: { min: 0, eyebrow: 'We do · sentence builder answers', title: 'Check your sentences', ar: 'تَحَقَّقْ مِنْ جُمَلِكَ' },
    notes: `WE DO — sentence builder (3 min). Teacher-made from website sentences (grammar examples, quiz and builder tasks).
Students choose ONE box from each column (start from Column 1 on the right) and type the letters in chat, e.g. “1: B A B”.
↔ Rehearse 30s: whisper the full Arabic sentence before typing.
Core: sentence 1 (agreement). Develop: sentences 2–3 (verb + object / fixed preposition). Separate the class if needed: Develop/Stretch continue to the FLEX practice while you work with Core on sentence 1.`,
  },
  C.morePractice([splitPrompt(G.quiz[4], { n: 5 }), fromSite(G.quiz[7], { n: 6 }), fromSite(G.quiz[2], { n: 7 }), fromSite(G.quiz[3], { n: 8 })], 'website quiz questions 5, 8, 3, 4 (Stretch)'),
  C.repairSlide(site, [
    'What is wrong? Look at the last vowel of the verb after لِكَيْ.',
    'What is wrong? Does يَضُمُّ need بِـ?',
    'What is wrong? After لَوْ, which result word: سَـ or لَـ?',
  ]),
  C.listening(site, {
    coreTip: 'Listen twice. 1st time: just listen. 2nd time: choose A, B or C.\nCore: questions 1–2 — listen for يَضُمُّ (includes), يُشَكِّلُ (forms), شِعَاب (reefs) and أَسْمَاك (fish).',
    routes: 'Core: questions 1–2. Develop: 1–3. Stretch: all 5.',
    gloss: [
      ['يَقَعُ البَحْرُ الأَحْمَرُ بَيْنَ شِبْهِ الجَزِيرَةِ العَرَبِيَّةِ وَشَمَالِ أَفْرِيقِيَا.', 'The Red Sea lies between the Arabian Peninsula and North Africa.'],
      ['يَضُمُّ هٰذَا البَحْرُ شِعَابًا مَرْجَانِيَّةً مِنْ أَغْنَى النُّظُمِ البِيئِيَّةِ البَحْرِيَّةِ فِي العَالَمِ.', 'This sea includes coral reefs that are among the richest marine ecosystems in the world.'],
      ['يُشَكِّلُ المَرْجَانُ بِيئَةً لَا غِنَى عَنْهَا لِآلَافِ الأَسْمَاكِ.', 'Coral forms an environment that thousands of fish cannot do without.'],
      ['غَيْرَ أَنَّ الاحْتِرَارَ يُهَدِّدُ هٰذَا التَّوَازُنَ.', 'However, (global) warming threatens this balance.'],
      ['إِذَا اسْتَمَرَّ ارْتِفَاعُ حَرَارَةِ المُحِيطَاتِ، سَتَتَبَيَّضُ الشِّعَابُ وَتَمُوتُ.', 'If ocean temperatures keep rising, the reefs will bleach and die.'],
      ['وَلَوْ كَانَتْ إِجْرَاءَاتُ الحِمَايَةِ أَصْرَمَ فِي العُقُودِ المَاضِيَةِ، لَكَانَتِ الشِّعَابُ أَفْضَلَ حَالًا اليَوْمَ.', 'Had protection been stricter in past decades, the reefs would be in a better state today.'],
      ['لِذٰلِكَ تَحْتَاجُ دُوَلُ المِنْطَقَةِ إِلَى تَعَاوُنٍ إِقْلِيمِيٍّ لِكَيْ تَحْمِيَ هٰذَا الإِرْثَ الطَّبِيعِيَّ الاسْتِثْنَائِيَّ.', 'So the region’s countries need regional cooperation to protect this exceptional natural heritage.'],
    ],
  }),
  C.speakingSlide(site, {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'صِفْ مَكَانًا طَبِيعِيًّا: أَيْنَ هُوَ؟ وَأَيُّ حَيَوَانَاتٍ تَعِيشُ فِيهِ؟' },
      { route: 'develop', ar: site.speaking.prompts[0] },
      { route: 'stretch', ar: site.speaking.prompts[1] },
      { route: 'stretch', ar: site.speaking.prompts[2] },
    ],
    stems: [
      { route: 'core', ar: '______ فِي ______ ، وَتَعِيشُ فِيهِ ______ .' },
      { route: 'develop', ar: 'يَضُمُّ ______ ______ ، وَيُشَكِّلُ ______ .' },
      { route: 'stretch', ar: 'إِذَا اسْتَمَرَّ ______ ، سَـ ______ .' },
      { route: 'sum', ar: 'قَالَ / قَالَتْ إِنَّ ______ .' },
    ],
    modelEn: ['Describe an ecosystem.', 'يَضُمُّ + يُشَكِّلُ'],
    notes: 'Core prompt (teacher-made): “Describe a natural place: where is it? Which animals live there?” — answered with the Core stem, e.g. الصَّحْرَاءُ فِي أَفْرِيقِيَا، وَتَعِيشُ فِيهَا الجِمَالُ. (Note فِيهَا for a feminine place.)',
  }),
  C.routesSlide(site, {
    core: { amount: '5 sentences', task: 'Write five sentences about a natural place and its animals. Try one sentence with يَضُمُّ.', how: 'Use the frames and word bank (next slide). Noun first, then the describing word with the same ending (ـِيٌّ / ـِيَّةٌ).' },
    develop: { amount: '5 + 1 sentences', task: site.differentiation.core + ' Add one real threat with إِذَا … سَـ.', how: 'Develop frames on the next slide: يَضُمُّ / يُشَكِّلُ + object, يَتَفَاعَلُ مَعَ, يَعْتَمِدُ عَلَى.' },
    stretch: { amount: '100–110 words', task: 'Website writing task: describe a natural ecosystem with composition verbs, a Type 1 threat, a Type 2 “what if” and لِكَيْ + subjunctive.', how: 'Checklist and phrase bank on the Stretch slide. ' + site.differentiation.stretch },
    notes: 'Routes adapted for this class: the website Core task (يَضُمُّ / يُشَكِّلُ sentences) becomes the Develop task; Core writes about landscapes and animals with agreeing describing words (Topic C focus); Stretch does the full website writing task.',
  }),
  C.framesSlide({
    core: [
      { en: 'The Red Sea is between … and …', ar: 'البَحْرُ الأَحْمَرُ بَيْنَ ______ وَ ______ .' },
      { en: 'The desert is in …', ar: 'الصَّحْرَاءُ فِي ______ .' },
      { en: 'Fish live in the sea.', ar: 'تَعِيشُ ______ فِي ______ .' },
      { en: 'It is a tropical forest.', ar: 'هِيَ غَابَةٌ ______ ـِيَّةٌ .' },
      { en: 'It is an ecosystem.', ar: 'هُوَ نِظَامٌ ______ ـِيٌّ .' },
    ],
    develop: [
      { en: '… includes …', ar: 'يَضُمُّ ______ ______ .' },
      { en: '… forms …', ar: 'يُشَكِّلُ ______ ______ .' },
      { en: '… interacts with …', ar: 'يَتَفَاعَلُ ______ مَعَ ______ .' },
      { en: '… depends on …', ar: 'يَعْتَمِدُ ______ عَلَى ______ .' },
      { en: 'If … continues, … will …', ar: 'إِذَا اسْتَمَرَّ ______ ، سَـ ______ .' },
    ],
    bank: ['جَبَلٌ', 'نَهْرٌ', 'بَحْرٌ', 'صَحْرَاءُ', 'غَابَةٌ', 'جَزِيرَةٌ', 'أَسْمَاكٌ', 'جِمَالٌ', 'أُسُودٌ', 'بِيئِيٌّ', 'طَبِيعِيٌّ', 'اسْتِوَائِيَّةٌ', 'مَرْجَانِيَّةٌ', 'آلَافَ الأَنْوَاعِ'],
  }),
  C.stretchSlide(site, [
    ['يَقَعُ … بَيْنَ … وَ …', '… lies between … and …'],
    ['مِنْ أَغْنَى النُّظُمِ البِيئِيَّةِ فِي العَالَمِ', 'among the richest ecosystems in the world'],
    ['بِيئَةً لَا غِنَى عَنْهَا', 'an indispensable environment'],
    ['غَيْرَ أَنَّ … يُهَدِّدُ هٰذَا التَّوَازُنَ', 'however, … threatens this balance'],
    ['لِذٰلِكَ تَحْتَاجُ … إِلَى …', 'that is why … needs …'],
    ['لِلْأَجْيَالِ القَادِمَةِ', 'for future generations'],
  ]),
  C.modelSlide(site,
    'The Red Sea lies between the Arabian Peninsula and North Africa, and it includes coral reefs that are among the richest ecosystems in the world. Coral forms an indispensable environment for thousands of fish, and species interact with one another in complex food chains. However, warming threatens this balance and leads to coral bleaching. If ocean temperatures keep rising, the reefs will die within decades. Had protection measures been stricter in the past, the reefs would be in a better state today. That is why the region’s countries need regional cooperation, so that they protect this exceptional natural heritage for future generations.',
    ['noun + describing word', 'يَضُمُّ / يُشَكِّلُ + object', 'إِذَا … سَـ / لَوْ … لَـ', 'لِكَيْ + subjunctive'],
    'Core students find the noun + describing word pairs (شِعَابًا مَرْجَانِيَّةً، النُّظُمِ البِيئِيَّةِ، الإِرْثَ الطَّبِيعِيَّ) and the animals/places; Stretch find the conditionals and تَحْمِيَ.'),
  C.selfCheckSlide([
    { route: 'core', text: 'I can name landscapes and animals and use a describing word that agrees (غَابَةٌ اسْتِوَائِيَّةٌ).' },
    { route: 'develop', text: site.success[0] },
    { route: 'develop', text: site.success[3] },
    { route: 'stretch', text: site.success[1] },
    { route: 'stretch', text: site.success[2] },
  ]),
  C.exitTicket([fromSite(site.final[0]), splitPrompt(site.final[1]), fromSite(site.final[3])], site.final.length),
  ...C.readingSlides(site, [
    ['يُعَدُّ', 'is considered'], ['أَسَاسٌ', 'basis'], ['الأَرْضُ', 'the Earth'], ['مُعَقَّدَةٌ', 'complex'], ['بَقَاءٌ', 'survival'], ['عُنْصُرٌ', 'element'],
    ['النَّشَاطُ البَشَرِيُّ', 'human activity'], ['فَقَدْنَا', 'we lost'], ['بِاحْتِرَامٍ', 'with respect'], ['حَافَّةُ الانْقِرَاضِ', 'the edge of extinction'], ['الأَجْيَالُ القَادِمَةُ', 'future generations'],
  ]),
  C.prepSlide({
    ...NEXT,
    words: [['طَقْسٌ', 'weather', ''], ['مُنَاخٌ', 'climate', ''], ['مَطَرٌ', 'rain', 'pl. أَمْطَارٌ'], ['بَارِدٌ', 'cold', 'f. بَارِدَةٌ'], ['فَصْلٌ', 'season', 'pl. فُصُولٌ']],
    questionEn: 'Write one Arabic sentence: what is the weather like today where you live?',
    questionAr: 'كَيْفَ الطَّقْسُ اليَوْمَ فِي مَدِينَتِكَ؟',
    homework: {
      core: 'Website · TC-L02 · play “Nature Scene”, then the vocabulary mission.',
      develop: 'Write 5 sentences with يَضُمُّ / يُشَكِّلُ about a sea, a desert or a forest.',
      stretch: 'Website · TC-L02 · “Ecosystem Mission” (14 rounds) and the reading “A threatened balance”.',
    },
    wordsSource: 'The five words come from the website Natural World vocabulary bank (Weather and Climate).',
  }),
  C.closeSlide(NEXT),
];

module.exports = { meta, slides };
