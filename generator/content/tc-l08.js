'use strict';
/*
 * TC-L08 · Buildings, Services and Urban Areas
 * Website: Advanced Topics › Topic C › Lesson 8 (reuses P4-L02 “Urban Environments — Cities, Architecture and Urban
 * Planning”; Topic C focus “Describe a town and evaluate the availability and quality of services”; grammar:
 * يوجد/توجد; locatives; comparatives). Picture match: website lesson game “Town Map”.
 */
const C = require('./common');
const site = require('../site-data/p4-content.json').lessons.find((l) => l.code === 'P4-L02');
const game = require('../site-data/advanced-topic-visual-games.json').c08;
const G = site.grammar;
const { q, fromSite, splitPrompt } = C;

const meta = C.meta({
  n: 8, fileTitle: 'Buildings_Services_Urban_Areas', chip: 'Buildings & Services',
  title: 'Buildings, Services and Urban Areas', arabic: 'المَبَانِي وَالخَدَمَاتُ وَالمَنَاطِقُ الحَضَرِيَّةُ',
  focus: 'Describe a town and judge its services: what there is (يُوجَدُ / تُوجَدُ), where it is (مُقَابِلَ · بِجَانِبِ) and how it compares (أَكْبَرُ مِنْ), then analyse a city with مَبْنِيٌّ مِنْ.',
  icon: 'FaCity',
});
const NEXT = { nextCode: 'TC-L09', nextTitle: 'Shopping, Prices and Consumer Choices', nextAr: 'التَّسَوُّقُ وَالأَسْعَارُ وَخِيَارَاتُ المُسْتَهْلِكِ' };
const place = (n, ar, en, tr, g, pl, core, note) => ({ n, ar, en, tr, tag: `noun · ${g}.`, core, note, forms: pl ? [{ l: 'sg.', ar: ar.replace(/^{[a-z]\|(.*)}$/, '$1') }, { l: 'pl.', ar: pl }] : undefined });

const guide = `دَلِيلُ الخَدَمَاتِ فِي حَيِّنَا
يُوجَدُ فِي حَيِّنَا مُسْتَشْفًى كَبِيرٌ وَعِيَادَتَانِ.
تُوجَدُ مَكْتَبَةٌ عَامَّةٌ بِجَانِبِ المَدْرَسَةِ، وَهِيَ مَفْتُوحَةٌ كُلَّ يَوْمٍ.
مَحَطَّةُ القِطَارِ قُرْبَ السَّاحَةِ، وَالقِطَارَاتُ سَرِيعَةٌ.
لَا يُوجَدُ مَسْبَحٌ، وَالمَلْعَبُ صَغِيرٌ جِدًّا.
المَقَاهِي كَثِيرَةٌ، لٰكِنَّ مَوْقِفَ السَّيَّارَاتِ مُزْدَحِمٌ دَائِمًا.
رَأْيِي: حَيُّنَا أَفْضَلُ مِنَ الحَيِّ القَدِيمِ، لٰكِنَّهُ يَحْتَاجُ إِلَى مَسَاحَاتٍ خَضْرَاءَ.`;

const slides = [
  C.titleSlide({
    n: 8,
    source: 'The website lesson reuses P4-L02 (Urban Environments — Cities, Architecture and Urban Planning) with the Topic C focus “Describe a town and evaluate the availability and quality of services” (grammar: يوجد/توجد; locatives; comparatives). The Core vocabulary comes from the Topic C “Towns, Buildings, Services & Shopping” bank; the picture match is the website lesson game “Town Map”. The services guide is teacher-made from website vocabulary.',
    support: `• P4-L02 is B2 language. CORE: town places + يُوجَدُ / تُوجَدُ / لَا يُوجَدُ + six place words (مُقَابِلَ، بِجَانِبِ …) + comparatives (أَكْبَرُ مِنْ). DEVELOP: the website’s مَبْنِيٌّ مِنْ, يَتَمَيَّزُ بِـ and the planning verbs. STRETCH: the urban passive (يُبْنَى) and لِكَيْ + subjunctive.
• Picture match (map), colour-coded masculine/feminine rule, adjective → comparative table, a “services guide” reading with a glossary, and a read-along listening with English.
• Urdu bridge words (مدینہ، عمارت، مکان، سہولت، مقابلہ).`,
  }),
  C.welcomeSlide(),
  C.journeySlide({ teach: 'Places, “there is”, where it is and comparing.', wedo: 'Town map, read a guide, build, fix and listen.', next: 'TC-L09' }),
  C.doNow({
    questions: [
      q('What does مُسْتَشْفًى mean?', ['hospital', 'library', 'bank'], 'Prepared at home: مُسْتَشْفًى = hospital.'),
      q('Which word means “café”?', ['مَقْهًى', 'مَكْتَبَةٌ', 'بَنْكٌ'], 'Prepared at home: مَقْهًى = café (pl. مَقَاهٍ).'),
      q('Which small word must follow أُقِيمُ?', ['فِي', 'عَلَى', 'إِلَى'], 'TC-L07: أُقِيمُ فِي فُنْدُقٍ.'),
      q('What does أَحْضِرْ جَوَازَ سَفَرِكَ mean?', ['Bring your passport.', 'I brought my passport.', 'He has a passport.'], 'TC-L07: an instruction (“Do it!”).'),
      q('Which verb means “I will book”?', ['سَأَحْجِزُ', 'حَجَزْتُ', 'أَحْجِزُ'], 'TC-L07: سَـ = will.'),
    ],
    keyIdea: { text: 'Arabic says “there is” with one verb that changes for masculine and feminine things.', ar: '{w|يُ}وجَدُ مُسْتَشْفًى  ·  {w|تُ}وجَدُ مَكْتَبَةٌ' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home (Flipped Learning follow-up). Questions 3–5 retrieve TC-L07.',
  }),
  C.objectivesSlide(site.objectives, {
    core: ['I can name 12 places in a town and say what there is: يُوجَدُ / تُوجَدُ.', 'I can say where a place is (مُقَابِلَ · بِجَانِبِ) and compare two places (أَكْبَرُ مِنْ).'],
    develop: ['I can judge the services in my area (good, poor, crowded).', 'I can use مَبْنِيٌّ مِنْ and يَتَمَيَّزُ بِـ.'],
    stretch: ['I can use the urban passive and لِكَيْ تَكُونَ.', 'I can write a 100–110-word city analysis.'],
  }, 2, 'The Core statements carry the Topic C focus for this lesson (describe a town, evaluate services; يوجد/توجد, locatives, comparatives). The website objectives on the left are the P4-L02 objectives.'),
  C.keywordsSlide({
    text: '36 words in 6 groups (Topic C bank + website P4-L02). Learn the CORE words first. Hear it → say it → see it → use it.',
    groups: [
      { head: 'GROUP 1', name: 'Buildings · 6' },
      { head: 'GROUP 2', name: 'Services · 6' },
      { head: 'GROUP 3', name: 'There is · 6' },
      { head: 'GROUP 4', name: 'Where? · 6' },
      { head: 'GROUP 5', name: 'Compare · 6' },
      { head: 'GROUP 6', name: 'The city · 6' },
    ],
    bridge: [
      { ar: 'مَدِينَةٌ', urdu: 'مدینہ', tr: 'madīna', en: 'city (the city of the Prophet ﷺ)' },
      { ar: 'عِمَارَةٌ', urdu: 'عمارت', tr: 'ʿimārat', en: 'building, architecture' },
      { ar: 'مَكَانٌ', urdu: 'مکان', tr: 'makān', en: 'place (Urdu: house)' },
      { ar: 'سَهْلٌ', urdu: 'سہولت', tr: 'sahūlat', en: 'easy → facility' },
      { ar: 'مُقَابِلَ', urdu: 'مقابلہ', tr: 'muqābala', en: 'facing → contest' },
    ],
    notes: `URDU BRIDGE: مدینہ (the same word — المَدِينَةُ المُنَوَّرَةُ = “the illuminated city”), عمارت (building — the website’s العِمَارَةُ = architecture), مکان (in Urdu a house; in Arabic any place), سہولت (facility — from سَهْلٌ, easy), مقابلہ (a contest, “facing each other” — مُقَابِلَ = opposite).
Groups 1–2 are the Topic C “Towns, Buildings, Services & Shopping” bank; Groups 3–5 are the Topic C grammar focus (يوجد/توجد, locatives, comparatives); Group 6 is the website P4-L02 vocabulary.`,
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · Topic C bank', title: 'Buildings in town', ar: 'المَبَانِي فِي المَدِينَةِ',
    items: [
      place(1, 'مُسْتَشْفًى', 'hospital', 'mus-tash-fā', 'm', 'مُسْتَشْفَيَاتٌ', true),
      place(2, 'بَنْكٌ', 'bank', 'bank', 'm', 'بُنُوكٌ', true),
      place(3, 'مَكْتَبَةٌ', 'library', 'mak-ta-ba', 'f', 'مَكْتَبَاتٌ', true),
      place(4, 'مَقْهًى', 'café', 'maq-hā', 'm', 'مَقَاهٍ', true),
      place(5, 'مَتْحَفٌ', 'museum', 'mat-ḥaf', 'm', 'مَتَاحِفُ', true),
      place(6, 'مَدْرَسَةٌ', 'school', 'mad-ra-sa', 'f', 'مَدَارِسُ', true),
    ],
    notes: `KEY WORDS — buildings (Topic C bank, “Public buildings” and “Leisure & cultural places”). Hear → Say → See → Use.
Pattern spotting (Stretch): many place words start with مَـ = “the place of …”: مَكْتَبَةٌ (place of books, كِتَابٌ), مَقْهًى (place of coffee, قَهْوَةٌ), مَتْحَفٌ (place of treasures, تُحْفَةٌ), مَدْرَسَةٌ (place of study, يَدْرُسُ).
Website example: أَسْتَعِيرُ الكُتُبَ مِنَ المَكْتَبَةِ = I borrow books from the library.`,
  },
  {
    type: 'vocab', stage: 'teach', min: 1, eyebrow: 'Key words · Group 2 · Topic C bank', title: 'Services and getting around', ar: 'الخَدَمَاتُ وَالمُوَاصَلَاتُ',
    items: [
      { n: 7, ar: 'مَحَطَّةُ القِطَارِ', en: 'train station', tr: 'ma-ḥaṭ-ṭa-tu l-qi-ṭār', tag: 'iḍāfa · f.', core: true, forms: [{ l: 'station', ar: 'مَحَطَّةٌ' }, { l: 'train', ar: 'قِطَارٌ' }] },
      place(8, 'عِيَادَةٌ', 'clinic', 'ʿi-yā-da', 'f', 'عِيَادَاتٌ', true),
      { n: 9, ar: 'مَكْتَبُ البَرِيدِ', en: 'post office', tr: 'mak-ta-bu l-ba-rīd', tag: 'iḍāfa · m.', forms: [{ l: 'office', ar: 'مَكْتَبٌ' }, { l: 'post', ar: 'البَرِيدُ' }] },
      { n: 10, ar: 'مَوْقِفُ سَيَّارَاتٍ', en: 'car park', tr: 'maw-qi-fu say-yā-rāt', tag: 'iḍāfa · m.' },
      place(11, 'مَلْعَبٌ', 'sports pitch, playground', 'mal-ʿab', 'm', 'مَلَاعِبُ'),
      place(12, 'مَسْبَحٌ', 'swimming pool', 'mas-baḥ', 'm', 'مَسَابِحُ'),
    ],
    notes: 'KEY WORDS — services and stations (Topic C bank). Core: the three CORE words. The مَـ pattern again: مَلْعَبٌ (place of playing, يَلْعَبُ), مَسْبَحٌ (place of swimming, يَسْبَحُ), مَوْقِفٌ (place of stopping, يَقِفُ).',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Key words · Group 3 · grammar part 1 · there is', title: 'There is … / There isn’t …', ar: 'يُوجَدُ وَتُوجَدُ',
    cols: [{ label: 'Meaning', w: 2.4 }, { label: 'Masculine thing', w: 3.3, size: 21 }, { label: 'Feminine thing (ـة)', w: 3.3, size: 21 }, { label: 'Plural thing', w: 3.33, size: 21 }],
    rows: [
      { core: true, cells: ['there is / are', { ar: '{w|يُ}وجَدُ مُسْتَشْفًى', sub: 'yū-ja-du · there is a hospital' }, { ar: '{w|تُ}وجَدُ مَكْتَبَةٌ', sub: 'tū-ja-du · there is a library' }, { ar: '{w|تُ}وجَدُ مَقَاهٍ', sub: 'there are cafés' }] },
      { core: true, cells: ['there isn’t', { ar: '{k|لَا} {w|يُ}وجَدُ مَسْبَحٌ', sub: 'there is no pool' }, { ar: '{k|لَا} {w|تُ}وجَدُ عِيَادَةٌ', sub: 'there is no clinic' }, { ar: '{k|لَا} {w|تُ}وجَدُ مَلَاعِبُ', sub: 'there are no pitches' }] },
      { cells: ['is there …?', { ar: '{k|هَلْ} {w|يُ}وجَدُ بَنْكٌ؟', sub: 'is there a bank?' }, { ar: '{k|هَلْ} {w|تُ}وجَدُ مَحَطَّةٌ؟', sub: 'is there a station?' }, { ar: '{k|هَلْ} {w|تُ}وجَدُ مَتَاحِفُ؟', sub: 'are there museums?' }] },
      { cells: ['in my town', { ar: 'فِي مَدِينَتِي {w|يُ}وجَدُ …', sub: 'in my town there is …' }, { ar: 'فِي حَيِّنَا {w|تُ}وجَدُ …', sub: 'in our area there is …' }, { ar: 'عِنْدَنَا …', sub: 'we have …' }] },
    ],
    notes: `GRAMMAR PART 1 — يُوجَدُ / تُوجَدُ (Topic C grammar focus). Blue = the first letter that matches the THING:
• يُـ for a masculine thing (مُسْتَشْفًى، بَنْكٌ، مَسْبَحٌ). • تُـ for a feminine thing (ـة: مَكْتَبَةٌ، عِيَادَةٌ). • تُـ for a plural of THINGS too (non-human plural = feminine singular — the rule from TC-L04: الأَشْجَارُ … تُقْطَعُ).
Teal = the question / negative word: لَا (not), هَلْ (question).
Core: rows 1–2. Develop: add questions (row 3). Stretch: the website’s own examples use مَوْجُودٌ / يُبْنَى — see Part 5.
Gesture: point to the ـة ending on the word first, THEN choose يُـ or تُـ.`,
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 4 · grammar part 2 · locatives', title: 'Where is it?', ar: 'أَيْنَ يَقَعُ؟',
    items: [
      { n: 1, ar: '{k|مُقَابِلَ}', en: 'opposite', tr: 'mu-qā-bi-la', tag: 'place word', core: true, note: 'Website: المُسْتَشْفَى مُقَابِلُ البَنْكِ.' },
      { n: 2, ar: '{k|بِجَانِبِ}', en: 'next to, beside', tr: 'bi-jā-ni-bi', tag: 'place word', core: true, note: 'Website: المَقْهَى بِجَانِبِ المَكْتَبَةِ.' },
      { n: 3, ar: '{k|قُرْبَ}', en: 'near', tr: 'qur-ba', tag: 'place word', core: true },
      { n: 4, ar: '{k|بَيْنَ} … {k|وَ}', en: 'between … and', tr: 'bay-na … wa', tag: 'place word', core: true },
      { n: 5, ar: '{k|أَمَامَ}', en: 'in front of', tr: 'a-mā-ma', tag: 'place word' },
      { n: 6, ar: '{k|خَلْفَ}', en: 'behind', tr: 'khal-fa', tag: 'place word' },
    ],
    notes: `GRAMMAR PART 2 — locatives (Topic C grammar focus). Gesture each one with two hands (two “buildings”): facing, side by side, close, one hand between two, in front, behind.
Compass points from TC-L01 also work as place words: الفُنْدُقُ شَرْقَ مَحَطَّةِ القِطَارِ (website game).
Website note: the website game writes المُسْتَشْفَى مُقَابِلُ البَنْكِ (مُقَابِلُ as the predicate). The more common form in speech and writing is مُقَابِلَ with fatḥa, like all the other place words — teach مُقَابِلَ; accept both.`,
  },
  {
    type: 'formula', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · place + where + second place', title: 'The café is next to the library', ar: 'المَقْهَى بِجَانِبِ المَكْتَبَةِ',
    cols: [
      { label: 'the place', ar: 'المَكَانُ', color: '1B3B6F', pale: 'EEF3FA' },
      { label: 'where (key word)', ar: 'أَيْنَ؟', color: '0E7C86', pale: 'E3F2F3' },
      { label: 'the second place (ending -i)', ar: 'المَكَانُ الثَّانِي', color: 'D6336C', pale: 'FBE7EF' },
    ],
    rows: [
      { en: 'The hospital is opposite the bank.', cells: ['المُسْتَشْفَى', '{k|مُقَابِلَ}', 'البَنْ{e|كِ}'] },
      { en: 'The café is next to the library.', cells: ['المَقْهَى', '{k|بِجَانِبِ}', 'المَكْتَبَ{e|ةِ}'] },
      { en: 'The hotel is east of the train station.', cells: ['الفُنْدُقُ', '{k|شَرْقَ}', 'مَحَطَّةِ القِطَا{e|رِ}'] },
      { en: 'The museum is between the school and the square.', cells: ['المَتْحَفُ', '{k|بَيْنَ}', 'المَدْرَسَ{e|ةِ} وَالسَّاحَ{e|ةِ}'] },
    ],
    foot: 'After a place word, the second place always ends in -i (kasra): البَنْكِ · المَكْتَبَةِ.',
    notes: `GRAMMAR PART 2 — locative sentences. Rows 1–3 are the website “Town Map” game sentences (row 1 with مُقَابِلَ — see previous slide); row 4 is teacher-made.
Pink = ENDING: after a place word the next noun takes kasra (-i). No verb “is” is needed in Arabic.
Core: say rows 1–2 with the gestures. Develop: make a new sentence about your own street.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Key words · Group 5 · grammar part 3 · comparatives', title: 'Big → bigger than', ar: 'اِسْمُ التَّفْضِيلِ',
    cols: [{ label: 'Meaning', w: 2.2 }, { label: 'Adjective (m.)', w: 2.5, size: 21 }, { label: 'Adjective (f.)', w: 2.5, size: 21 }, { label: 'more … than (m. and f.)', w: 2.6, size: 21 }, { label: 'Example', w: 2.53, size: 16 }],
    rows: [
      { core: true, cells: ['big', { ar: 'كَبِيرٌ', sub: 'ka-bīr' }, { ar: 'كَبِيرَةٌ', sub: 'ka-bī-ra' }, { ar: '{p|أَ}كْبَرُ {k|مِنْ}', sub: 'ak-ba-ru min' }, 'المَدِينَةُ أَكْبَرُ مِنَ القَرْيَةِ'] },
      { core: true, cells: ['small', { ar: 'صَغِيرٌ', sub: 'ṣa-ghīr' }, { ar: 'صَغِيرَةٌ', sub: 'ṣa-ghī-ra' }, { ar: '{p|أَ}صْغَرُ {k|مِنْ}', sub: 'aṣ-gha-ru min' }, 'حَيِّي أَصْغَرُ مِنْ حَيِّكَ'] },
      { core: true, cells: ['near', { ar: 'قَرِيبٌ', sub: 'qa-rīb' }, { ar: 'قَرِيبَةٌ', sub: 'qa-rī-ba' }, { ar: '{p|أَ}قْرَبُ {k|مِنْ}', sub: 'aq-ra-bu min' }, 'البَنْكُ أَقْرَبُ مِنَ المَتْحَفِ'] },
      { cells: ['modern', { ar: 'حَدِيثٌ', sub: 'ḥa-dīth' }, { ar: 'حَدِيثَةٌ', sub: 'ḥa-dī-tha' }, { ar: '{p|أَ}حْدَثُ {k|مِنْ}', sub: 'aḥ-da-thu min' }, 'المَكْتَبَةُ أَحْدَثُ مِنَ المَدْرَسَةِ'] },
      { cells: ['good', { ar: 'جَيِّدٌ', sub: 'jay-yid' }, { ar: 'جَيِّدَةٌ', sub: 'jay-yi-da' }, { ar: '{p|أَ}فْضَلُ {k|مِنْ}', sub: 'af-ḍa-lu min · irregular' }, 'الخَدَمَاتُ هُنَا أَفْضَلُ'] },
      { cells: ['crowded', { ar: 'مُزْدَحِمٌ', sub: 'muz-da-ḥim' }, { ar: 'مُزْدَحِمَةٌ', sub: 'muz-da-ḥi-ma' }, { ar: '{p|أَكْثَرُ} ازْدِحَامًا', sub: 'ak-tha-ru zdi-ḥā-man' }, 'المَدِينَةُ أَكْثَرُ ازْدِحَامًا'] },
    ],
    notes: `GRAMMAR PART 3 — comparatives (Topic C grammar focus). Orange = the PATTERN أَفْعَلُ (a + root with a in the middle). Teal = مِنْ (than), always.
Good news for Core: the comparative is the SAME for masculine and feminine: المَدِينَةُ أَكْبَرُ · البَيْتُ أَكْبَرُ.
Row 5: جَيِّدٌ → أَفْضَلُ (irregular — “better”). Row 6 (Develop / Stretch): long adjectives use أَكْثَرُ + a noun ending -an (the website: أَقَلَّ اكْتِظَاظًا = less overcrowded; أَكْثَرَ اسْتِدَامَةً = more sustainable).
Common error: أَكْبَرُ عَنْ ✗ → أَكْبَرُ مِنْ ✓. `,
  },
  {
    type: 'vocab', stage: 'teach', min: 1, eyebrow: 'Key words · Group 6 · Develop · website P4-L02', title: 'Talking about the city', ar: 'المَدِينَةُ الحَدِيثَةُ',
    items: [
      { n: 1, ar: 'حَيٌّ {m|سَكَنِ}{e|يٌّ}', en: 'a residential district', tr: 'ḥayy sa-ka-niyy', tag: 'noun + nisba', forms: [{ l: 'sg.', ar: 'حَيٌّ' }, { l: 'pl.', ar: 'أَحْيَاءٌ' }] },
      { n: 2, ar: 'مَدِينَةٌ ذَكِيَّةٌ', en: 'a smart city', tr: 'ma-dī-na dha-kiy-ya', tag: 'noun + adjective', forms: [{ l: 'sg.', ar: 'مَدِينَةٌ' }, { l: 'pl.', ar: 'مُدُنٌ' }] },
      { n: 3, ar: 'مَسَاحَاتٌ خَضْرَاءُ', en: 'green spaces', tr: 'ma-sā-ḥāt khaḍ-rāʾ', tag: 'noun + adjective' },
      { n: 4, ar: 'الاِزْدِحَامُ {m|المُرُورِ}{e|يُّ}', en: 'traffic congestion', tr: 'al-iz-di-ḥām al-mu-rū-riyy', tag: 'noun + nisba' },
      { n: 5, ar: 'التَّلَوُّثُ {m|الضَّوْضَائِ}{e|يُّ}', en: 'noise pollution', tr: 'at-ta-law-wuth aḍ-ḍaw-ḍā-ʾiyy', tag: 'noun + nisba', note: 'TC-L04: التَّلَوُّثُ = pollution.' },
      { n: 6, ar: 'صَالِحٌ لِلْعَيْشِ', en: 'liveable', tr: 'ṣā-li-ḥun lil-ʿaysh', tag: 'adjective phrase', forms: [{ l: 'm.', ar: 'صَالِحٌ' }, { l: 'f.', ar: 'صَالِحَةٌ' }] },
    ],
    notes: 'KEY WORDS — the website P4-L02 “Urban planning” and “urban passive and goals” vocabulary (Develop / Stretch). Core students listen and repeat; these words help them JUDGE services in the reading (crowded, noisy, green, liveable).',
  },
  {
    type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 4 · Develop · website P4-L02', title: 'Describe a building', ar: 'وَصْفُ المَبَانِي',
    cards: [
      { chip: 'MADE OF · مِنْ', head: 'مَبْنِيٌّ مِنْ', big: 'الحَيُّ القَدِيمُ مَبْنِيٌّ مِنَ الحَجَرِ', en: 'The old district is built of stone.', clue: 'مَبْنِيٌّ (built) always takes مِنْ + the material (website rule).' },
      { chip: 'KNOWN FOR · بِـ', color: '0E7C86', head: 'يَتَمَيَّزُ بِـ', big: 'تَتَمَيَّزُ المَدِينَةُ بِمِعْمَارٍ حَدِيثٍ', en: 'The city is known for modern architecture.', clue: 'تَتَمَيَّزُ for a feminine city — the same يُـ / تُـ rule as يُوجَدُ.' },
      { chip: 'TURN INTO · إِلَى', color: '7B3FA0', head: 'يُحَوِّلُ … إِلَى', big: 'يُحَوِّلُ المَشْرُوعُ المَطَارَ إِلَى حَدِيقَةٍ', en: 'The project turns the airport into a park.', clue: 'يُحَوِّلُ always takes إِلَى (website rule).' },
    ],
    error: { text: 'The website’s common mistakes: the wrong partner word after مَبْنِيٌّ and يُحَوِّلُ.', pairs: [['مَبْنِيَّةٌ مِنَ الزُّجَاجِ', 'مَبْنِيَّةٌ بِالزُّجَاجِ'], ['إِلَى حَدِيقَةٍ', 'حَدِيقَةً']] },
    notes: `GRAMMAR PART 4 — Develop. Website teaching point: “${site.teach[0].title}”. All three examples are website sentences. Materials from the website: الحَجَرُ (stone), الطِّينُ (clay), الخَشَبُ (wood), الزُّجَاجُ (glass), الصُّلْبُ (steel).
Website common error: “${G.common_error}”`,
  },
  {
    type: 'ruleRows', stage: 'teach', flex: true, eyebrow: 'Grammar focus · Part 5 · website examples · FLEX · Stretch', title: 'The four website rules with examples', ar: 'أَمْثِلَةُ القَوَاعِدِ',
    rows: G.rules.map((r) => ({ title: r.heading, formula: r.formula, examples: r.examples })),
    notes: `WEBSITE GRAMMAR RULES AND EXAMPLES (FLEX — Stretch or homework): materials and features, planning verbs, the urban passive (يُبْنَى + nominative) and the goal clause (لِكَيْ + fatḥa). Website overview: “${G.overview}”
Website teaching point: “${site.teach[1].text}”`,
  },
  C.quickCheck([
    q('Complete:', ['تُوجَدُ', 'يُوجَدُ', 'تُوجَدِينَ'], 'مَكْتَبَةٌ ends in ـة (feminine) → تُوجَدُ.', { ar: '___ مَكْتَبَةٌ كَبِيرَةٌ فِي مَدِينَتِي.' }),
    q('Which means “The café is next to the library”?', ['المَقْهَى بِجَانِبِ المَكْتَبَةِ.', 'المَقْهَى خَلْفَ المَكْتَبَةِ.', 'المَقْهَى مُقَابِلَ المَكْتَبَةِ.'], 'Website game: بِجَانِبِ = next to.'),
    q('Complete:', ['مِنَ', 'عَنِ', 'فِي'], 'Comparatives always take مِنْ: أَكْبَرُ مِنْ.', { ar: 'المَدِينَةُ أَكْبَرُ ___ القَرْيَةِ.' }),
    splitPrompt(G.quiz[0]),
  ], 'questions 1–3 teacher-made (Topic C grammar focus); question 4 is website grammar quiz question 1.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me describe my area', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'What is there?', ar: 'فِي حَيِّي {w|يُ}وجَدُ مُسْتَشْفًى كَبِيرٌ', think: 'مُسْتَشْفًى is masculine → يُـ.' },
      { head: 'Where is it?', ar: 'وَ{w|تُ}وجَدُ مَكْتَبَةٌ {k|بِجَانِبِ} المَقْهَى', think: 'مَكْتَبَةٌ has ـة → تُـ.' },
      { head: 'What is missing?', ar: '{k|لَا} يُوجَدُ مَسْبَحٌ', think: 'لَا = there is no …' },
      { head: 'Compare and judge', ar: 'حَيِّي {p|أَ}هْدَأُ {k|مِنْ} وَسَطِ المَدِينَةِ', think: 'أَهْدَأُ مِنْ = quieter than.' },
    ],
    legend: ['w', 'k', 'p'], legendLabels: { w: 'WHO / WHICH', k: 'KEY WORD', p: 'PATTERN' },
    model: 'فِي حَيِّي {w|يُ}وجَدُ مُسْتَشْفًى كَبِيرٌ، وَ{w|تُ}وجَدُ مَكْتَبَةٌ {k|بِجَانِبِ} المَقْهَى. {k|لَا} يُوجَدُ مَسْبَحٌ، لٰكِنَّ حَيِّي {p|أَ}هْدَأُ {k|مِنْ} وَسَطِ المَدِينَةِ.',
    modelEn: 'In my area there is a big hospital, and there is a library next to the café. There is no swimming pool, but my area is quieter than the city centre.',
    notes: `I DO (3 min) — teacher models with a think-aloud; students watch, then COPY the paragraph into their books.
Step 1 — “What is there? مُسْتَشْفًى — no ـة, so يُوجَدُ.”
Step 2 — “مَكْتَبَةٌ has ـة → تُوجَدُ. Where? بِجَانِبِ المَقْهَى — next to the café.”
Step 3 — “Something missing: لَا يُوجَدُ مَسْبَحٌ.”
Step 4 — “Judge it: هَادِئٌ (quiet) → أَهْدَأُ مِنْ (quieter than) — the أَفْعَلُ pattern + مِنْ.”
Teacher-made from the Topic C bank and grammar focus; لٰكِنَّ from TC-L03.`,
  },
  {
    type: 'models', stage: 'ido', min: 1, eyebrow: 'I do · model sentences from the website', title: 'Four sentences to borrow', ar: 'جُمَلٌ نَمُوذَجِيَّةٌ',
    rows: [
      { ar: game.items[1].sentence, en: 'The café is next to the library.', tip: 'Website game — a Core sentence.' },
      { ar: 'أَسْتَعِيرُ الكُتُبَ مِنَ المَكْتَبَةِ.', en: 'I borrow books from the library.', tip: 'Topic C bank example — say what you DO there.' },
      { ar: 'بُنِيَ الجُزْءُ القَدِيمُ مِنَ الطِّينِ وَالخَشَبِ.', en: 'The old part was built from clay and wood.', tip: 'Website listening — materials with مِنْ.' },
      { ar: site.patterns[2].ar + '.', en: 'They plan so that the capital becomes more sustainable.', tip: site.patterns[2].tip },
    ],
    notes: `MODEL SENTENCES (1 min) — website game, Topic C bank and P4-L02. Students copy TWO that are useful for them.
• Core: copy 1 and 2 (change the places). • Develop: copy 3 about a building you know. • Stretch: copy 4 and add a website Type 2: وَلَوْ كَانَ التَّخْطِيطُ أَكْثَرَ اسْتِدَامَةً، لَكَانَتِ المُدُنُ أَقَلَّ اكْتِظَاظًا.`,
  },
  C.gameSlide(game, {
    en: ['The hospital is opposite the bank.', 'The café is next to the library.', 'The hotel is east of the train station.'],
    icons: [[['fa6', 'FaHospital', 'B83227'], ['fa6', 'FaBuildingColumns', '1B3B6F']], [['fa6', 'FaBookOpen', '7B3FA0'], ['fa6', 'FaMugHot', 'C77700']], [['fa6', 'FaTrain', '1D5FBF'], ['fa6', 'FaHotel', '0E7C86']]],
    labels: ['opposite', 'next to', 'east of'],
    order: [2, 0, 1],
    notes: 'Key words to spot: مُقَابِلُ (opposite), بِجَانِبِ (next to), شَرْقَ (east of — TC-L01 compass points). Stretch: say where YOUR nearest hospital is.',
  }),
  {
    type: 'passage', stage: 'wedo', min: 2, eyebrow: 'We do · read and judge (Topic C focus)', title: 'A guide to the services in our area', ar: 'دَلِيلُ الخَدَمَاتِ',
    docLines: guide.split('\n'),
    glossaryHead: 'KEY WORDS',
    glossary: [
      ['دَلِيلٌ', 'guide'], ['حَيُّنَا', 'our area'], ['عِيَادَتَانِ', 'two clinics'], ['عَامَّةٌ', 'public'], ['مَفْتُوحَةٌ', 'open'],
      ['السَّاحَةُ', 'the square'], ['سَرِيعَةٌ', 'fast'], ['مُزْدَحِمٌ', 'crowded'], ['رَأْيِي', 'my opinion'], ['يَحْتَاجُ إِلَى', 'needs'],
    ],
    notes: `READ AND JUDGE (2 min reading) — Topic C focus “Describe a town and evaluate the availability and quality of services”, and the website application “City-planner information gap … ask for missing services, buildings and locations, then justify where two facilities should go”.
The guide is teacher-made from the Topic C bank and website vocabulary. Read it aloud once while students follow. SEND: cover the text and uncover one line at a time; Core students use the glossary.
Ask students to label each line ✓ (good service) or ✗ (problem) — the “evaluate” part of the focus.
Translation for the teacher: A guide to the services in our area. In our area there is a big hospital and two clinics. There is a public library next to the school, and it is open every day. The train station is near the square, and the trains are fast. There is no swimming pool, and the pitch is very small. There are many cafés, but the car park is always crowded. My opinion: our area is better than the old district, but it needs green spaces.`,
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · read and judge · questions', title: 'What is there — and is it good?', ar: 'اِسْتَخْرِجِ المَعْلُومَاتِ',
    seed: 3,
    questions: [
      q('What is next to the school?', ['A public library', 'The train station', 'A café'], 'تُوجَدُ مَكْتَبَةٌ عَامَّةٌ بِجَانِبِ المَدْرَسَةِ.'),
      q('How many clinics are there?', ['Two', 'One', 'None'], 'مُسْتَشْفًى كَبِيرٌ وَعِيَادَتَانِ (ـَانِ = two).'),
      q('Which service is missing?', ['A swimming pool', 'A hospital', 'A train station'], 'لَا يُوجَدُ مَسْبَحٌ.'),
      q('What is the problem with the car park?', ['It is always crowded.', 'It is closed.', 'It is too far.'], 'مَوْقِفُ السَّيَّارَاتِ مُزْدَحِمٌ دَائِمًا.'),
      q('What does the area need, in the writer’s opinion?', ['Green spaces', 'More cafés', 'A bigger station'], 'لٰكِنَّهُ يَحْتَاجُ إِلَى مَسَاحَاتٍ خَضْرَاءَ.'),
    ],
    side: { kind: 'core', label: 'CORE', text: 'Find the KEY WORD first.\nnext to? بِجَانِبِ\nmissing? لَا يُوجَدُ\nproblem? مُزْدَحِمٌ\nneeds? يَحْتَاجُ إِلَى' },
    answerSlide: { eyebrow: 'We do · read and judge · answers', title: 'Services: answers', ar: 'الإِجَابَاتُ' },
    notes: 'READ AND JUDGE questions (teacher-made). Students type five letters in the chat. Core: questions 1, 3 and 4 with the key-word clues. Stretch: which facility should be built next, and where? Answer with يَجِبُ أَنْ نَبْنِيَ … بِجَانِبِ … (TC-L05).',
    answerNotes: 'Reveal. For each answer, a student reads the exact line from the guide (by invitation). Then vote: is this a good area to live in? Why?',
  },
  {
    type: 'builder', stage: 'wedo', min: 3, eyebrow: 'We do · guided practice · sentence builder', title: 'Build the sentence', ar: 'اِبْنِ الجُمْلَةَ',
    rows: [
      { en: 'There is a library in my town.', cols: [['يُوجَدُ', 'تُوجَدُ'], ['مَكْتَبَةٌ', 'مَكْتَبَةً'], ['فِي مَدِينَتِي.', 'إِلَى مَدِينَتِي.']], key: [1, 0, 0], why: 'مَكْتَبَةٌ is feminine (ـة) → تُوجَدُ.' },
      { en: 'The bank is opposite the hospital.', cols: [['البَنْكُ', 'المُسْتَشْفَى'], ['بِجَانِبِ', 'مُقَابِلَ'], ['المُسْتَشْفَى.', 'البَنْكِ.']], key: [0, 1, 0], why: 'مُقَابِلَ = opposite; the bank comes first.' },
      { en: 'The city is more crowded than the village.', cols: [['المَدِينَةُ', 'القَرْيَةُ'], ['أَكْثَرُ ازْدِحَامًا', 'أَقَلُّ ازْدِحَامًا'], ['عَنِ القَرْيَةِ.', 'مِنَ القَرْيَةِ.']], key: [0, 0, 1], why: 'أَكْثَرُ = more; comparatives take مِنْ.' },
    ],
    answerSlide: { min: 0, eyebrow: 'We do · sentence builder answers', title: 'Check your sentences', ar: 'تَحَقَّقْ مِنْ جُمَلِكَ' },
    notes: `WE DO — sentence builder (3 min). Teacher-made from the three Topic C grammar points (يوجد/توجد; locatives; comparatives).
Students choose ONE box per column (start from Column 1 on the right) and type the letters, e.g. “1: B A A”. ↔ Rehearse 30s first.
Core: sentences 1 and 2. Develop / Stretch: sentence 3 and explain the wrong options.`,
  },
  {
    type: 'sorter', stage: 'wedo', flex: true, eyebrow: 'We do · website sorter', title: 'Material, planning or goal?', ar: 'صَنِّفْ',
    categories: G.sort ? G.sort.categories : ['Material / feature', 'Planning verb', 'Passive / goal'],
    items: [
      { ar: 'يُجَدِّدُ المَبَانِيَ القَدِيمَةَ', cat: 1 }, { ar: 'مَبْنِيٌّ مِنَ الحَجَرِ', cat: 0 }, { ar: 'يُبْنَى مَشْرُوعٌ ضَخْمٌ', cat: 2 },
      { ar: 'يَتَمَيَّزُ بِمِعْمَارٍ حَدِيثٍ', cat: 0 }, { ar: 'لِكَيْ تَكُونَ المَدِينَةُ صَالِحَةً', cat: 2 }, { ar: 'يُعِيدُ تَصْمِيمَ المِنْطَقَةِ', cat: 1 },
      { ar: 'يُحَوِّلُ المَطَارَ إِلَى حَدِيقَةٍ', cat: 1 }, { ar: 'مَبْنِيٌّ مِنَ الزُّجَاجِ وَالصُّلْبِ', cat: 0 }, { ar: 'يُخَطَّطُ لِاسْتِكْمَالِ المَشْرُوعِ', cat: 2 },
    ],
    answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — website sorter (FLEX — Develop / Stretch, 2 min). Clue: مَبْنِيٌّ / يَتَمَيَّزُ = describing; يُجَدِّدُ / يُعِيدُ / يُحَوِّلُ = planning (doing something to the city); يُبْنَى / يُخَطَّطُ / لِكَيْ = passive or goal.',
  },
  C.morePractice([fromSite(G.quiz[1], { n: 5 }), fromSite(G.quiz[2], { n: 6 }), splitPrompt(G.quiz[3], { n: 7 }), fromSite(G.quiz[7], { n: 8 })], 'website quiz 2, 3, 4, 8'),
  C.repairSlide(site, [
    'What is wrong? Which small word must come after مَبْنِيَّةٌ?',
    'What is wrong? Which small word must come after يُحَوِّلُ … ?',
    'What is wrong? After لِكَيْ, what is the last vowel on the verb?',
  ]),
  C.listening(site, {
    coreTip: 'Listen twice. Core: questions 1–3 — listen for دُبَيَّ (Dubai), الطِّينِ وَالخَشَبِ (clay and wood) and مَسَاحَاتٍ خَضْرَاءَ (green spaces).',
    routes: 'Core: questions 1–3. Develop / Stretch: all 5.',
    gloss: [
      ['تَتَمَيَّزُ مَدِينَةُ دُبَيَّ بِمَزِيجٍ فَرِيدٍ مِنَ العِمَارَةِ التُّرَاثِيَّةِ وَالمِعْمَارِ الحَدِيثِ.', 'Dubai is known for a unique mix of heritage and modern architecture.'],
      ['بُنِيَ الجُزْءُ القَدِيمُ مِنَ الطِّينِ وَالخَشَبِ، فِي حِينِ أَنَّ نَاطِحَاتِ السَّحَابِ مَبْنِيَّةٌ مِنَ الزُّجَاجِ وَالصُّلْبِ.', 'The old part was built of clay and wood, while the skyscrapers are built of glass and steel.'],
      ['تُعِيدُ هَيْئَاتُ التَّطْوِيرِ تَصْمِيمَ أَحْيَاءٍ كَامِلَةٍ، وَتُحَوِّلُ مَنَاطِقَ صِنَاعِيَّةً قَدِيمَةً إِلَى مَسَاحَاتٍ خَضْرَاءَ.', 'Development authorities redesign whole districts and turn old industrial areas into green spaces.'],
      ['غَيْرَ أَنَّ التَّوَسُّعَ السَّرِيعَ يُؤَدِّي إِلَى ازْدِحَامٍ مُرُورِيٍّ.', 'However, rapid growth leads to traffic congestion.'],
      ['إِذَا وَاصَلَتِ المُدُنُ التَّوَسُّعَ دُونَ تَخْطِيطٍ، سَتُعَانِي مِنْ تَلَوُّثٍ ضَوْضَائِيٍّ.', 'If cities keep growing without planning, they will suffer from noise pollution.'],
      ['وَلَوْ كَانَ التَّخْطِيطُ أَكْثَرَ اسْتِدَامَةً مُنْذُ البِدَايَةِ، لَكَانَتِ المُدُنُ أَقَلَّ اكْتِظَاظًا.', 'Had planning been more sustainable from the start, cities would be less overcrowded.'],
      ['لِذٰلِكَ يُخَطِّطُ المُهَنْدِسُونَ لِكَيْ تَكُونَ المُدُنُ صَالِحَةً لِلْعَيْشِ.', 'So engineers plan so that cities are liveable.'],
    ],
  }),
  C.speakingSlide(site, {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'مَاذَا يُوجَدُ فِي مَدِينَتِكَ؟ وَأَيْنَ؟' },
      { route: 'develop', ar: site.speaking.prompts[0] },
      { route: 'stretch', ar: site.speaking.prompts[1] },
      { route: 'stretch', ar: site.speaking.prompts[2] },
    ],
    stems: [
      { route: 'core', ar: 'يُوجَدُ / تُوجَدُ ______ بِجَانِبِ ______ .' },
      { route: 'develop', ar: 'مَدِينَتِي أَكْبَرُ مِنْ ______ ، لٰكِنْ ______ .' },
      { route: 'stretch', ar: 'يُعَادُ تَصْمِيمُ ______ لِكَيْ ______ .' },
      { route: 'sum', ar: 'فِي مَدِينَتِهِ / مَدِينَتِهَا ______ .' },
    ],
    modelEn: ['Describe a city.', 'Material and feature'],
    notes: 'Core prompt (teacher-made; it is the preparation question): “What is there in your town? Where?” — answered with the Core stem, e.g. تُوجَدُ مَكْتَبَةٌ بِجَانِبِ المَسْجِدِ.',
  }),
  C.routesSlide(site, {
    core: { amount: '5 sentences', task: 'Describe your town: what there is, what is missing, where one place is and one comparison.', how: 'Use the frames and word bank on the next slide: two things there are, one thing missing, one “where” and one comparison.' },
    develop: { amount: '6–8 sentences', task: 'Judge the services in your area and describe one building with مَبْنِيٌّ مِنْ', how: 'Judge the services (good / crowded / missing), add one building material with مِنْ and one opinion.' },
    stretch: { amount: '100–110 words', how: 'Website writing task: analyse a city or project; checklist and phrase bank on the Stretch slide.' },
  }),
  C.framesSlide({
    core: [
      { en: 'In my town there is (m.) …', ar: 'فِي مَدِينَتِي يُوجَدُ ______ .' },
      { en: 'There is (f.) … next to …', ar: 'تُوجَدُ ______ بِجَانِبِ ______ .' },
      { en: 'There is no …', ar: 'لَا يُوجَدُ ______ .' },
      { en: 'The … is opposite the …', ar: '______ مُقَابِلَ ______ .' },
      { en: 'My town is bigger than …', ar: 'مَدِينَتِي أَكْبَرُ مِنْ ______ .' },
    ],
    develop: [
      { en: 'The services are good, but …', ar: 'الخَدَمَاتُ جَيِّدَةٌ، لٰكِنَّ ______ .' },
      { en: '… is always crowded.', ar: '______ مُزْدَحِمٌ دَائِمًا .' },
      { en: 'The old district is built of …', ar: 'الحَيُّ القَدِيمُ مَبْنِيٌّ مِنَ ______ .' },
      { en: 'My town is known for …', ar: 'تَتَمَيَّزُ مَدِينَتِي بِـ ______ .' },
      { en: 'In my opinion, we need …', ar: 'فِي رَأْيِي، نَحْتَاجُ إِلَى ______ .' },
    ],
    bank: ['مُسْتَشْفًى', 'بَنْكٌ', 'مَكْتَبَةٌ', 'مَقْهًى', 'مَتْحَفٌ', 'مَسْبَحٌ', 'مَحَطَّةُ القِطَارِ', 'السَّاحَةِ', 'القَرْيَةِ', 'الحَجَرِ', 'مَسَاحَاتٍ خَضْرَاءَ', 'هَادِئٌ'],
  }),
  C.stretchSlide(site, [
    ['تَتَمَيَّزُ مَدِينَةُ … بِـ …', '… is distinguished by …'],
    ['بُنِيَ الجُزْءُ القَدِيمُ مِنَ …', 'the old part was built of …'],
    ['تُحَوِّلُ … إِلَى مَسَاحَاتٍ خَضْرَاءَ', 'turns … into green spaces'],
    ['إِذَا وَاصَلَتِ المُدُنُ التَّوَسُّعَ، سَـ …', 'if cities keep growing, …'],
    ['وَلَوْ كَانَ التَّخْطِيطُ …، لَكَانَتِ …', 'had planning been …, … would …'],
    ['لِكَيْ تَبْقَى صَالِحَةً لِلْعَيْشِ', 'so that they stay liveable'],
  ]),
  C.modelSlide(site,
    'Dubai is known for a unique mix of heritage and modern architecture. The old part was built of clay and wood, while the skyscrapers are built of glass and steel. Development authorities redesign whole districts, and many industrial areas are turned into green spaces. If cities keep growing without enough planning, they will suffer from traffic congestion and noise pollution. Had planning been more sustainable from the start, cities would be less overcrowded today. So planning experts point out that cities need green spaces so that they stay liveable.',
    ['مَبْنِيَّةٌ مِنَ', 'تُعِيدُ … تَصْمِيمَ', 'يُحَوَّلُ … إِلَى', 'لِكَيْ تَبْقَى'],
    'Core students find the materials after مِنَ and the places in the text; Stretch find the passive (يُحَوَّلُ) and the لِكَيْ goal.'),
  C.selfCheckSlide([
    { route: 'core', text: 'I can name places in a town: مُسْتَشْفًى، مَكْتَبَةٌ، مَقْهًى …' },
    { route: 'core', text: 'I can choose يُوجَدُ or تُوجَدُ and say where a place is (بِجَانِبِ، مُقَابِلَ).' },
    { route: 'develop', text: 'I can compare and judge services: أَكْبَرُ مِنْ، مُزْدَحِمٌ، لَا يُوجَدُ.' },
    { route: 'develop', text: site.success[0] },
    { route: 'stretch', text: site.success[3] },
  ]),
  C.exitTicket([
    q('Complete:', ['يُوجَدُ', 'تُوجَدُ', 'يُوجَدُونَ'], 'مَسْبَحٌ is masculine (no ـة) → يُوجَدُ.', { ar: 'لَا ___ مَسْبَحٌ فِي حَيِّي.' }),
    q('Which means “The hospital is opposite the bank”?', ['المُسْتَشْفَى مُقَابِلَ البَنْكِ.', 'المُسْتَشْفَى بِجَانِبِ البَنْكِ.', 'المُسْتَشْفَى خَلْفَ البَنْكِ.'], 'مُقَابِلَ = opposite (website game).'),
    splitPrompt(site.final[0]),
  ], 3),
  ...C.readingSlides(site, [
    ['تُوَاجِهُ', 'faces'], ['تَحَدِّيًا', 'a challenge'], ['الحِفَاظِ عَلَى', 'preserving'], ['تُرَاثِهَا', 'its heritage'], ['ذَاكِرَةَ أَجْيَالٍ', 'the memory of generations'],
    ['تَمْحُوَ', 'erase'], ['طَابِعَهَا', 'its character'], ['المَعَايِيرِ', 'standards'], ['وَازَنَتْ', 'balanced'], ['هُوِيَّتَهَا', 'its identity'], ['أَصَحَّ', 'healthier'],
  ]),
  C.prepSlide({
    ...NEXT,
    words: [['سُوقٌ', 'market', 'pl. أَسْوَاقٌ'], ['ثَمَنٌ', 'price', ''], ['رَخِيصٌ', 'cheap', 'f. رَخِيصَةٌ'], ['غَالٍ', 'expensive', 'f. غَالِيَةٌ'], ['خَصْمٌ', 'discount', '']],
    questionEn: 'Write one Arabic sentence: what do you like to buy, and where?',
    questionAr: 'مَاذَا تُحِبُّ أَنْ تَشْتَرِيَ؟ وَمِنْ أَيْنَ؟',
    homework: {
      core: 'Website · TC-L08 · play “Town Map”, then the vocabulary mission.',
      develop: 'Draw a simple map of your street and write 5 sentences with يُوجَدُ / تُوجَدُ and a place word.',
      stretch: 'Website · TC-L08 · “Urban Mission” (14 rounds) and the reading “Heritage and the modern city”.',
    },
    wordsSource: 'The five words come from the website lesson (F6-L06 “Shopping in Town: Prices and Comparisons”).',
  }),
  C.closeSlide(NEXT),
];

module.exports = { meta, slides };
