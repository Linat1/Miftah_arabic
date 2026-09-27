'use strict';
/*
 * TC-L05 · Environmental Solutions and Responsibility
 * Website: Advanced Topics › Topic C › Lesson 5 (reuses D4-L04 “Environmental Solutions — What Can Be Done?”;
 * Topic C focus “Propose, justify and evaluate practical environmental action”; grammar: advice; subjunctive after
 * أن/لكي; conditionals). Picture match: website lesson game “Choose the Solution”.
 */
const C = require('./common');
const site = require('../site-data/d4-content.json').lessons.find((l) => l.code === 'D4-L04');
const game = require('../site-data/advanced-topic-visual-games.json').c05;
const G = site.grammar;
const { q, fromSite, splitPrompt } = C;

const meta = C.meta({
  n: 5, fileTitle: 'Environmental_Solutions', chip: 'Environmental Solutions',
  title: 'Environmental Solutions and Responsibility', arabic: 'الحُلُولُ البِيئِيَّةُ وَالمَسْؤُولِيَّةُ',
  focus: 'Propose, justify and evaluate practical environmental action: give advice (يَنْبَغِي أَنْ نُقَلِّلَ), say who is responsible (يَجِبُ عَلَى الحُكُومَةِ أَنْ …) and explain the purpose (لِكَيْ).',
  icon: 'FaRecycle',
});
const NEXT = { nextCode: 'TC-L06', nextTitle: 'The Digital World and Communication', nextAr: 'العَالَمُ الرَّقْمِيُّ وَالتَّوَاصُلُ' };
const subj = (ind, sub, tr, en, note) => ({ cells: [{ ar: ind, sub: tr }, en, `{k|أَنْ} {e|${sub}}`, note || ''] });

const slides = [
  C.titleSlide({
    n: 5,
    source: 'The website lesson reuses D4-L04 (Environmental Solutions — What Can Be Done?) with the Topic C focus “Propose, justify and evaluate practical environmental action” (grammar: advice; subjunctive after أن/لكي; conditionals). The picture match is the website lesson game “Choose the Solution”; the “solution council” ranking task is the website’s advanced application challenge.',
    support: `• D4-L04 is B1 language. CORE: solution words + ONE pattern: يَنْبَغِي أَنْ / يَجِبُ أَنْ + a “we” verb whose last vowel changes to fatḥa (نُقَلِّلُ → نُقَلِّلَ). The three website game sentences are the Core models. DEVELOP: responsibility (يَجِبُ عَلَى الحُكُومَةِ أَنْ …) and purpose (لِكَيْ). STRETCH: the “five verbs” (أَنْ يُعِيدُوا) and a conditional (إِذَا … سَـ).
• A “before and after أَنْ” verb table with transliteration; picture match with icons; read-along listening with English.
• Urdu bridge words (ضروری، طاقت، حل، حکومت، ممکن).`,
  }),
  C.welcomeSlide(),
  C.journeySlide({ teach: 'Solution words, then advice, “must” and purpose.', wedo: 'Picture match, build, rank solutions, fix and listen.', next: 'TC-L06' }),
  C.doNow({
    questions: [
      q('Which phrase means “recycling”?', ['إِعَادَةُ التَّدْوِيرِ', 'النَّقْلُ العَامُّ', 'تَلَوُّثُ الهَوَاءِ'], 'Prepared at home: إِعَادَةُ التَّدْوِيرِ = recycling · النَّقْلُ العَامُّ = public transport.'),
      q('What does نَزْرَعُ mean?', ['we plant', 'we save', 'we throw'], 'Prepared at home: نَزْرَعُ = we plant · نُوَفِّرُ = we save.'),
      q('Choose the accurate sentence.', ['يُؤَدِّي التَّلَوُّثُ إِلَى أَمْرَاضٍ.', 'يُؤَدِّي التَّلَوُّثُ فِي أَمْرَاضٍ.', 'يُؤَدِّي التَّلَوُّثُ بِأَمْرَاضٍ.'], 'TC-L04: always إِلَى after يُؤَدِّي.'),
      q('What does بِسَبَبِ النُّفَايَاتِ mean?', ['because of the waste', 'leads to waste', 'without waste'], 'TC-L04: بِسَبَبِ + noun = because of …'),
      q('Choose the accurate sentence.', ['تَسْقُطُ الثُّلُوجُ فِي الشِّتَاءِ.', 'يَسْقُطُ الثُّلُوجُ فِي الشِّتَاءِ.', 'الثُّلُوجُ يَسْقُطَ فِي الشِّتَاءِ.'], 'TC-L03: feminine weather word → تَـ.'),
    ],
    keyIdea: { text: 'After أَنْ (and لِكَيْ) the verb’s last vowel changes to a fatḥa: نُقَلِّلُ → أَنْ نُقَلِّلَ.', ar: 'نُقَلِّلُ  ←  يَنْبَغِي أَنْ {e|نُقَلِّلَ}' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home (Flipped Learning follow-up). Questions 3–5 retrieve TC-L04 and TC-L03.',
  }),
  C.objectivesSlide(site.objectives, {
    core: ['I can name 6 environmental solutions.', 'I can give advice: يَنْبَغِي أَنْ نُقَلِّلَ … (fatḥa after أَنْ).'],
    develop: ['I can say who is responsible: يَجِبُ عَلَى الحُكُومَةِ أَنْ …', 'I can give a purpose with لِكَيْ.'],
    stretch: ['I can use the five verbs after أَنْ: أَنْ يُعِيدُوا.', 'I can rank solutions and evaluate one limitation.'],
  }, 2, 'The route statements turn the general website objectives into this lesson’s concrete targets (website grammar rules 1–4 and the Topic C focus).'),
  C.keywordsSlide({
    text: '26 words from the website in 4 groups. Learn the CORE words first. Hear it → say it → see it → use it.',
    groups: [
      { head: 'GROUP 1', name: 'Solutions · 6' },
      { head: 'GROUP 2', name: 'More solutions · 6' },
      { head: 'GROUP 3', name: '“We” verbs · 8' },
      { head: 'GROUP 4', name: 'Advice and purpose · 6' },
    ],
    bridge: [
      { ar: 'ضَرُورِيٌّ', urdu: 'ضروری', tr: 'zarūrī', en: 'necessary' },
      { ar: 'طَاقَةٌ', urdu: 'طاقت', tr: 'tāqat', en: 'energy, power' },
      { ar: 'حَلٌّ', urdu: 'حل', tr: 'ḥal', en: 'solution' },
      { ar: 'حُكُومَةٌ', urdu: 'حکومت', tr: 'ḥukūmat', en: 'government' },
      { ar: 'يُمْكِنُ', urdu: 'ممکن', tr: 'mumkin', en: 'possible' },
    ],
    notes: `URDU BRIDGE: ضروری (necessary — مِنَ الضَّرُورِيِّ أَنْ), طاقت (power — الطَّاقَةُ الشَّمْسِيَّةُ), حل (solution — الحُلُولُ), حکومت (government), ممکن (possible — يُمْكِنُ أَنْ).
Groups 1–4 are the website D4-L04 vocabulary; Group 2 also adds الدَّرَّاجَةُ and نُطْفِئُ الأَضْوَاءَ from the website lesson game.`,
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1', title: 'Environmental solutions (1 of 2)', ar: 'الحُلُولُ البِيئِيَّةُ',
    items: [
      { n: 1, ar: 'إِعَادَةُ التَّدْوِيرِ', en: 'recycling', tr: 'i-ʿā-dat at-tad-wīr', tag: 'iḍāfa', core: true, forms: [{ l: 'again', ar: 'إِعَادَةٌ' }, { l: 'turning', ar: 'التَّدْوِيرُ' }] },
      { n: 2, ar: 'الطَّاقَةُ {m|الشَّمْسِ}{e|يَّةُ}', en: 'solar energy', tr: 'aṭ-ṭā-qa sh-sham-siy-ya', tag: 'noun + nisba', core: true, forms: [{ l: 'energy', ar: 'طَاقَةٌ' }, { l: 'sun', ar: 'شَمْسٌ' }] },
      { n: 3, ar: 'طَاقَةُ الرِّيَاحِ', en: 'wind energy', tr: 'ṭā-qat ar-ri-yāḥ', tag: 'iḍāfa', core: true, forms: [{ l: 'energy', ar: 'طَاقَةٌ' }, { l: 'winds', ar: 'الرِّيَاحُ' }] },
      { n: 4, ar: 'التَّشْجِيرُ', en: 'tree planting', tr: 'at-tash-jīr', tag: 'noun', core: true, forms: [{ l: 'tree', ar: 'شَجَرَةٌ' }, { l: 'planting trees', ar: 'التَّشْجِيرُ' }] },
      { n: 5, ar: 'تَرْشِيدُ المِيَاهِ', en: 'saving water', tr: 'tar-shīd al-mi-yāh', tag: 'iḍāfa', core: true, forms: [{ l: 'wise use', ar: 'تَرْشِيدٌ' }, { l: 'the water', ar: 'المِيَاهُ' }] },
      { n: 6, ar: 'النَّقْلُ {m|العَامُّ}', en: 'public transport', tr: 'an-naql al-ʿāmm', tag: 'noun + adjective', core: true },
    ],
    notes: `KEY WORDS — Environmental solutions (website D4-L04). Hear → Say → See → Use.
The small boxes break each phrase into two words with English. Links: الشَّمْسِيَّةُ = nisba of شَمْس (TC-L01 ending); الرِّيَاح (TC-L03); شَجَرَة (TC-L04 prep word) → التَّشْجِيرُ (planting trees).
Gesture: circular arrows for recycling; sun; blow; plant a seed; turn off a tap; bus steering wheel.`,
  },
  {
    type: 'vocab', stage: 'teach', min: 1, eyebrow: 'Key words · Group 2', title: 'Environmental solutions (2 of 2)', ar: 'الحُلُولُ البِيئِيَّةُ',
    items: [
      { n: 7, ar: 'الدَّرَّاجَةُ', en: 'bicycle', tr: 'ad-dar-rā-ja · pl. dar-rā-jāt', tag: 'noun · f. (game)', core: true, forms: [{ l: 'sg.', ar: 'دَرَّاجَةٌ' }, { l: 'pl.', ar: 'دَرَّاجَاتٌ' }] },
      { n: 8, ar: 'نُطْفِئُ الأَضْوَاءَ', en: 'we switch off the lights', tr: 'nuṭ-fiʾ al-aḍ-wāʾ', tag: 'phrase (game)', core: true, forms: [{ l: 'light', ar: 'ضَوْءٌ' }, { l: 'lights', ar: 'أَضْوَاءٌ' }] },
      { n: 9, ar: 'الطَّاقَةُ المُتَجَدِّدَةُ', en: 'renewable energy', tr: 'aṭ-ṭā-qa l-mu-ta-jad-di-da', tag: 'noun + adjective' },
      { n: 10, ar: 'تَقْلِيلُ الاسْتِهْلَاكِ', en: 'reducing consumption', tr: 'taq-līl al-is-tih-lāk', tag: 'iḍāfa' },
      { n: 11, ar: 'التَّوْعِيَةُ {m|البِيئِ}{e|يَّةُ}', en: 'environmental awareness', tr: 'at-taw-ʿi-ya l-bī-ʾiy-ya', tag: 'noun + nisba' },
      { n: 12, ar: 'التَّنْمِيَةُ المُسْتَدَامَةُ', en: 'sustainable development', tr: 'at-tan-mi-ya l-mus-ta-dā-ma', tag: 'noun + adjective' },
    ],
    notes: `KEY WORDS — more solutions (website D4-L04 + website lesson game). Core: الدَّرَّاجَةُ and نُطْفِئُ الأَضْوَاءَ (both in the picture match). Develop / Stretch: all six.
Link: البِيئِيَّةُ = nisba of بِيئَة (TC-L02).`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Key words · Group 3 · “we” verbs (website)', title: '“We” verbs — before and after أَنْ', ar: 'أَفْعَالٌ لِـ «نَحْنُ»',
    cols: [{ label: '“We” verb (website)', w: 3.3, size: 22 }, { label: 'English', w: 2.6 }, { label: 'After أَنْ / لِكَيْ', w: 3.2, size: 22 }, { label: 'Note', w: 3.23, italic: true }],
    rows: [
      { core: true, ...subj('نُقَلِّلُ مِنْ', 'نُقَلِّلَ', 'nu-qal-li-lu min', 'we reduce', '-u → -a (ḍamma → fatḥa)') },
      { core: true, ...subj('نُوَفِّرُ', 'نُوَفِّرَ', 'nu-waf-fi-ru', 'we save, conserve', '-u → -a (ḍamma → fatḥa)') },
      { core: true, ...subj('نَزْرَعُ', 'نَزْرَعَ', 'naz-ra-ʿu', 'we plant', '-u → -a (ḍamma → fatḥa)') },
      { core: true, ...subj('نُعِيدُ التَّدْوِيرَ', 'نُعِيدَ', 'nu-ʿī-du t-tad-wīr', 'we recycle', '-u → -a (ḍamma → fatḥa)') },
      subj('نَسْتَخْدِمُ', 'نَسْتَخْدِمَ', 'nas-takh-di-mu', 'we use', '-u → -a (ḍamma → fatḥa)'),
      subj('نَسْتَثْمِرُ فِي', 'نَسْتَثْمِرَ', 'nas-tath-mi-ru fī', 'we invest in', 'keep فِي after it'),
      subj('نَتَخَلَّصُ مِنْ', 'نَتَخَلَّصَ', 'na-ta-khal-la-ṣu min', 'we get rid of', 'keep مِنْ after it'),
      subj('نَتَبَنَّى', 'نَتَبَنَّى', 'na-ta-ban-nā', 'we adopt', 'ends in ى — no visible change'),
    ],
    notes: `KEY WORDS — Action verbs (website D4-L04), all in the “we” form (نَـ / نُـ = we — the WHO letter from the verb code).
The third column shows the same verb after أَنْ or لِكَيْ: the last vowel changes from ḍamma to fatḥa (website rule: “A sound-ending present verb changes its final ḍamma to fatḥa after أَنْ: نُقَلِّلُ → نُقَلِّلَ. It does not ‘lose a nūn’.”).
Core: the four CORE rows — say both forms aloud: nu-qal-li-LU → an nu-qal-li-LA.`,
  },
  {
    type: 'vocab', stage: 'teach', min: 1, eyebrow: 'Key words · Group 4 · advice, obligation and purpose', title: 'Advice words', ar: 'النَّصِيحَةُ وَالوَاجِبُ',
    items: [
      { n: 1, ar: '{k|يَنْبَغِي أَنْ}', en: 'should', tr: 'yan-ba-ghī an', tag: '+ verb (ـَ)', core: true },
      { n: 2, ar: '{k|يَجِبُ أَنْ}', en: 'must', tr: 'ya-ji-bu an', tag: '+ verb (ـَ)', core: true, note: 'Name who: يَجِبُ عَلَى … أَنْ' },
      { n: 3, ar: '{k|يُمْكِنُ أَنْ}', en: 'it is possible to, (we) can', tr: 'yum-ki-nu an', tag: '+ verb (ـَ)', core: true, note: 'Urdu: ممکن' },
      { n: 4, ar: '{k|لِكَيْ}', en: 'in order to, so that', tr: 'li-kay', tag: '+ verb (ـَ)', note: 'Purpose — TC-L02.' },
      { n: 5, ar: '{k|مِنَ الضَّرُورِيِّ أَنْ}', en: 'it is necessary to', tr: 'mi-na ḍ-ḍa-rū-riy-yi an', tag: '+ verb (ـَ)', note: 'Urdu: ضروری' },
      { n: 6, ar: '{k|مِنَ الأَفْضَلِ أَنْ}', en: 'it is better to', tr: 'mi-na l-af-ḍa-li an', tag: '+ verb (ـَ)', note: 'Website game.' },
    ],
    notes: `KEY WORDS — Advice, obligation and purpose (website D4-L04; مِنَ الأَفْضَلِ أَنْ from the website game; also on the website: عَلَى المَدَى الطَّوِيلِ = in the long term).
Every card ends in أَنْ or لِكَيْ — so the NEXT verb always takes a fatḥa. Core: cards 1–3.`,
  },
  {
    type: 'codeWord', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 1 · advice + a “we” verb', title: 'Give advice in three steps', ar: 'اُنْصَحْ',
    word: '{k|يَنْبَغِي أَنْ} {w|نُ}{e|قَلِّلَ}', tr: 'yan-ba-ghī an nu-qal-li-la · we should reduce',
    parts: [
      { code: 'k', ar: 'يَنْبَغِي أَنْ', title: 'ADVICE word', text: 'يَنْبَغِي أَنْ = should · يَجِبُ أَنْ = must · يُمْكِنُ أَنْ = can.' },
      { code: 'w', ar: 'نُـ', title: 'WHO? نُـ / نَـ = we', text: 'The verb starts with نُـ or نَـ: we (TC verb code).' },
      { code: 'e', ar: 'ـَ', title: 'ENDING: -u → -a', text: 'After أَنْ the last vowel becomes a fatḥa: نُقَلِّلُ → نُقَلِّلَ.' },
    ],
    notes: `GRAMMAR PART 1 — website rule “Advice with يَنْبَغِي أَنْ”: يَنْبَغِي أَنْ + subjunctive present. A sound-ending present verb changes its final ḍamma to fatḥa after أَنْ.
Think aloud: “Three steps: the advice word, then WHO (نُـ = we), then the ending changes to a fatḥa because of أَنْ.”
Pink here marks the part of the verb whose ENDING changes — say the last syllable louder: nu-qal-li-LA.
Core rule for today: after أَنْ → end the verb with “-a”.
Misconception (website mistake): يَنْبَغِي أَنْ نُقَلِّلُ ✗.`,
  },
  {
    type: 'peopleTable', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · one ending after five advice words', title: 'Advice words + a verb ending in fatḥa', ar: 'بَعْدَ أَنْ وَلِكَيْ',
    heads: ['Advice word', 'Verb after it', 'Website sentence'],
    rows: [
      { who: 'يَنْبَغِي أَنْ', whoEn: 'should', word: '{e|نُقَلِّلَ}', sentence: 'يَنْبَغِي أَنْ {e|نُقَلِّلَ} اسْتِخْدَامَ البِلَاسْتِيكِ.', en: 'We should reduce plastic use.' },
      { who: 'يَجِبُ أَنْ', whoEn: 'must', word: '{e|نُعِيدَ}', sentence: 'يَجِبُ أَنْ {e|نُعِيدَ} تَدْوِيرَ النُّفَايَاتِ.', en: 'We must recycle waste. (website game)' },
      { who: 'يُمْكِنُ أَنْ', whoEn: 'can', word: '{e|نَسْتَخْدِمَ}', sentence: 'يُمْكِنُ أَنْ {e|نَسْتَخْدِمَ} الطَّاقَةَ الشَّمْسِيَّةَ.', en: 'We can use solar energy.' },
      { who: 'لِكَيْ', whoEn: 'so that', word: '{e|نُقَلِّلَ}', sentence: 'نَسْتَخْدِمُ النَّقْلَ العَامَّ لِكَيْ {e|نُقَلِّلَ} الانْبِعَاثَاتِ.', en: 'We use public transport to reduce emissions.' },
      { who: 'مِنَ الأَفْضَلِ أَنْ', whoEn: 'it is better to', word: '{e|نَسْتَعْمِلَ}', sentence: 'مِنَ الأَفْضَلِ أَنْ {e|نَسْتَعْمِلَ} الدَّرَّاجَةَ.', en: 'It is better to use a bicycle. (website game)' },
    ],
    notes: `GRAMMAR PART 2 — the same ending after five advice words (2 min). Sentences: website grammar quiz, pattern, website game (rows 2 and 5, shortened in row 5).
Read each row; students repeat only the advice word + the pink verb, stressing the final “-a”.
Develop: in row 4 notice that نَسْتَخْدِمُ (before لِكَيْ) keeps its ḍamma — only the verb AFTER أَنْ / لِكَيْ changes.`,
  },
  {
    type: 'formula', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 3 · website rule “Obligation for a person or group”', title: 'Who must act? Responsibility', ar: 'مَنِ المَسْؤُولُ؟',
    cols: [
      { label: 'must / can (key word)', ar: 'يَجِبُ عَلَى', color: '0E7C86', pale: 'E3F2F3' },
      { label: 'who is responsible', ar: 'مَنْ؟', color: '1D5FBF', pale: 'EEF3FA' },
      { label: 'an + action (ends in -a)', ar: 'أَنْ + فِعْلٌ', color: 'D6336C', pale: 'FBEAEA' },
    ],
    rows: [
      { en: 'The government must invest in energy.', cells: ['{k|يَجِبُ عَلَى}', 'الحُكُومَةِ', 'أَنْ {e|تَسْتَثْمِرَ} فِي الطَّاقَةِ.'] },
      { en: 'Schools must recycle paper.', cells: ['{k|يَجِبُ عَلَى}', 'المَدَارِسِ', 'أَنْ {e|تُعِيدَ} تَدْوِيرَ الوَرَقِ.'] },
      { en: 'Students must separate paper from plastic.', cells: ['{k|يَجِبُ عَلَى}', 'الطُّلَّابِ', 'أَنْ {e|يَفْصِلُوا} الوَرَقَ عَنِ البِلَاسْتِيكِ.'] },
      { en: 'Families can save water.', cells: ['{k|يُمْكِنُ}', 'لِلأُسَرِ', 'أَنْ {e|تُرَشِّدَ} المَاءَ.'] },
    ],
    foot: 'Name who is responsible after عَلَى: يَجِبُ عَلَى + person / group + أَنْ + verb (ـَ)',
    notes: `GRAMMAR PART 3 — website rule “Obligation for a person or group”: يَجِبُ عَلَى + noun + أَنْ + subjunctive. Name the responsible person or group after عَلَى.
Sentences: website pattern (government), listening script (schools, families) and reading text (students).
The verb agrees with WHO: الحُكُومَة / المَدَارِس / الأُسَر → تَـ; الطُّلَّاب (people, plural) → يَفْصِلُوا (a “five verb”: the ن disappears — Stretch).
Topic C application “Solution council”: responsibility is the key to ranking solutions (individuals vs government).`,
  },
  {
    type: 'ruleCards', stage: 'teach', flex: true, eyebrow: 'Grammar focus · Part 4 · FLEX · Stretch', title: 'Fatḥa or no ن? And “if”', ar: 'المَنْصُوبُ وَالشَّرْطُ',
    cards: [
      { chip: 'MOST VERBS · fatḥa', head: 'أَنْ نُقَلِّلَ', big: 'يَنْبَغِي أَنْ نُقَلِّلَ النُّفَايَاتِ', en: 'We should reduce waste.', clue: 'Most verbs: final ـُ → ـَ. They do NOT lose a ن.' },
      { chip: 'FIVE VERBS · drop ن', color: '7B3FA0', head: 'أَنْ يُعِيدُوا', big: 'يَجِبُ عَلَى النَّاسِ أَنْ يُعِيدُوا التَّدْوِيرَ', en: 'People must recycle.', clue: 'Only the five verbs lose their ن: يُعِيدُونَ → أَنْ يُعِيدُوا.' },
      { chip: 'IF · TYPE 1 (TC-L02)', color: 'B83227', head: 'إِذَا … سَـ', big: 'إِذَا أَعَدْنَا التَّدْوِيرَ، سَنُقَلِّلُ النُّفَايَاتِ', en: 'If we recycle, we will reduce waste.', clue: 'Topic C focus: a real result with إِذَا + past → سَـ.' },
    ],
    error: { text: G.common_error.split('.')[0] + '.', pairs: [['أَنْ نُقَلِّلَ', 'أَنْ نُقَلِّلُ'], ['أَنْ يُعِيدُوا', 'أَنْ يُعِيدُونَ']] },
    notes: `GRAMMAR PART 4 — website rule “The five verbs after أَنْ” (only the five verbs lose their final nūn: يُعِيدُونَ → أَنْ يُعِيدُوا; ordinary forms such as نُقَلِّلُ do not contain that nūn) + the Topic C “conditionals” focus (card 3 is teacher-made, recycling the TC-L02 Type 1 rule).
Website common error: “${G.common_error}”
FLEX — Stretch focus. Develop may try card 3 only.`,
  },
  {
    type: 'ruleRows', stage: 'teach', flex: true, eyebrow: 'Grammar focus · Part 5 · website examples · FLEX', title: 'The four website rules with examples', ar: 'أَمْثِلَةُ القَوَاعِدِ',
    rows: G.rules.map((r) => ({ title: r.heading, formula: r.formula, examples: r.examples })),
    notes: `WEBSITE GRAMMAR RULES AND EXAMPLES (FLEX — revision or homework). Website overview: “${G.overview}”`,
  },
  C.quickCheck([fromSite(G.quiz[0]), fromSite(G.quiz[2]), fromSite(G.quiz[3]), splitPrompt(G.quiz[5])], 'website grammar quiz questions 1, 3, 4 and 6.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me propose a solution', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Name the problem', ar: 'تَزْدَادُ النُّفَايَاتُ', think: 'The problem first (TC-L04). تَزْدَادُ = is increasing.' },
      { head: 'Give advice', ar: '{k|يَنْبَغِي أَنْ} {e|نُعِيدَ} التَّدْوِيرَ', think: 'Advice word + we-verb with fatḥa: نُعِيدُ → نُعِيدَ.' },
      { head: 'Who is responsible?', ar: '{k|يَجِبُ عَلَى} المَدْرَسَةِ أَنْ {e|تَضَعَ} حَاوِيَاتٍ', think: 'عَلَى + who. تَضَعَ: she-verb for المَدْرَسَة.' },
      { head: 'Why? The purpose', ar: '{k|لِكَيْ} {e|نُقَلِّلَ} النُّفَايَاتِ', think: 'لِكَيْ + fatḥa again.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'ADVICE WORD', e: 'VERB ENDS -a' },
    model: 'تَزْدَادُ النُّفَايَاتُ، لِذٰلِكَ {k|يَنْبَغِي أَنْ} {e|نُعِيدَ} التَّدْوِيرَ. {k|يَجِبُ عَلَى} المَدْرَسَةِ أَنْ {e|تَضَعَ} حَاوِيَاتٍ {k|لِكَيْ} {e|نُقَلِّلَ} النُّفَايَاتِ.',
    modelEn: 'Waste is increasing, so we should recycle. The school must put out bins so that we reduce waste.',
    notes: `I DO (3 min) — teacher models with a think-aloud; students watch, then COPY the proposal into their books.
Step 1 — “The problem: تَزْدَادُ النُّفَايَاتُ. لِذٰلِكَ = so.”
Step 2 — “Advice: يَنْبَغِي أَنْ + نُعِيدُ → نُعِيدَ.”
Step 3 — “Who? يَجِبُ عَلَى المَدْرَسَةِ أَنْ تَضَعَ حَاوِيَاتٍ — the school is ‘she’, so تَضَعَ.”
Step 4 — “Why? لِكَيْ نُقَلِّلَ النُّفَايَاتِ.”
Built from website language: mission (تَزْدَادُ النُّفَايَاتُ، لِذٰلِكَ يَجِبُ أَنْ نُعِيدَ التَّدْوِيرَ), speaking model (يَجِبُ عَلَى المَدْرَسَةِ أَنْ تَضَعَ حَاوِيَاتٍ … لِكَيْ تُقَلِّلَ النُّفَايَاتِ).`,
  },
  {
    type: 'models', stage: 'ido', min: 1, eyebrow: 'I do · model sentences from the website', title: 'Four sentences to borrow', ar: 'جُمَلٌ نَمُوذَجِيَّةٌ',
    rows: [
      { ar: game.items[0].sentence, en: 'We must recycle waste.', tip: 'Website game — a Core sentence.' },
      { ar: site.patterns[0].ar, en: 'We should reduce plastic use.', tip: 'After أَنْ: نُقَلِّلَ (fatḥa).' },
      { ar: site.patterns[1].ar, en: 'The government must invest in renewable energy.', tip: 'Name who is responsible after عَلَى.' },
      { ar: site.patterns[2].ar, en: 'We use public transport to reduce emissions.', tip: 'لِكَيْ explains the purpose.' },
    ],
    notes: `MODEL SENTENCES (1 min) — website lesson game and patterns. Students copy TWO that are useful for them.
• Core: copy 1 and 2 and change the solution. • Develop: copy 3 with a different group (المَدَارِسُ، الأُسَرُ). • Stretch: copy 4 and add a limitation (لٰكِنَّ …).`,
  },
  C.gameSlide(game, {
    title: 'Match the picture to the solution',
    en: ['We must recycle waste.', 'It is better to use a bicycle instead of the car for short journeys.', 'We should switch off the lights when we do not need them.'],
    icons: [[['fa6', 'FaRecycle', '2E8B57'], ['fa6', 'FaTrashCan', '5A6472']], [['fa6', 'FaBicycle', '1D5FBF'], ['fa6', 'FaCar', 'B83227']], [['fa6', 'FaLightbulb', 'C77700'], ['fa6', 'FaBan', 'B83227']]],
    labels: ['recycling', 'bicycle, not car', 'lights OFF'],
    order: [1, 2, 0],
    notes: 'Key words to spot: نُعِيدَ تَدْوِيرَ (recycle), الدَّرَّاجَةَ … السَّيَّارَةِ (bicycle … car), الأَضْوَاءَ (lights). All three use أَنْ + a verb with fatḥa: find them (Develop).',
  }),
  {
    type: 'builder', stage: 'wedo', min: 3, eyebrow: 'We do · guided practice · sentence builder', title: 'Build the solution', ar: 'اِبْنِ الجُمْلَةَ',
    rows: [
      { en: 'We should reduce plastic use.', cols: [['يَنْبَغِي أَنْ', 'يُؤَدِّي إِلَى'], ['نُقَلِّلُ', 'نُقَلِّلَ'], ['اسْتِخْدَامَ البِلَاسْتِيكِ.', 'بِسَبَبِ البِلَاسْتِيكِ.']], key: [0, 1, 0], why: 'After أَنْ: نُقَلِّلَ (fatḥa).' },
      { en: 'The government must invest in solar energy.', cols: [['يَجِبُ الحُكُومَةُ', 'يَجِبُ عَلَى الحُكُومَةِ'], ['أَنْ تَسْتَثْمِرَ', 'تَسْتَثْمِرُ'], ['فِي الطَّاقَةِ الشَّمْسِيَّةِ.', 'إِلَى الطَّاقَةِ الشَّمْسِيَّةِ.']], key: [1, 0, 0], why: 'يَجِبُ عَلَى + who + أَنْ + verb; تَسْتَثْمِرُ فِي.' },
      { en: 'We plant trees to improve the air.', cols: [['نَزْرَعُ الأَشْجَارَ', 'تُقْطَعُ الأَشْجَارُ'], ['بِسَبَبِ', 'لِكَيْ'], ['نُحَسِّنُ جَوْدَةَ الهَوَاءِ.', 'نُحَسِّنَ جَوْدَةَ الهَوَاءِ.']], key: [0, 1, 1], why: 'Purpose: لِكَيْ + fatḥa (نُحَسِّنَ).' },
    ],
    answerSlide: { min: 0, eyebrow: 'We do · sentence builder answers', title: 'Check your sentences', ar: 'تَحَقَّقْ مِنْ جُمَلِكَ' },
    notes: `WE DO — sentence builder (3 min). Teacher-made from website sentences (pattern, quiz, final check).
Students choose ONE box per column (start from Column 1 on the right) and type the letters, e.g. “1: A B A”. ↔ Rehearse 30s first.
Core: sentence 1. Develop: sentences 2–3. Stretch: explain every wrong option.
Website “Advanced application — Solution council”: after the builder, groups rank three solutions to one problem in the chat and defend the top choice with a reason (يَجِبُ عَلَى … لِأَنَّ …).`,
  },
  {
    type: 'sorter', stage: 'wedo', flex: true, eyebrow: 'We do · website sorter', title: 'Solution, action or advice?', ar: 'صَنِّفْ',
    categories: ['Environmental solutions', 'Action verbs', 'Advice, obligation and purpose'],
    items: [
      { ar: 'نَزْرَعُ', cat: 1 }, { ar: 'إِعَادَةُ التَّدْوِيرِ', cat: 0 }, { ar: 'يَنْبَغِي أَنْ', cat: 2 }, { ar: 'نُوَفِّرُ', cat: 1 },
      { ar: 'الطَّاقَةُ الشَّمْسِيَّةُ', cat: 0 }, { ar: 'يُمْكِنُ أَنْ', cat: 2 }, { ar: 'نُقَلِّلُ مِنْ', cat: 1 }, { ar: 'يَجِبُ عَلَى ... أَنْ', cat: 2 }, { ar: 'الطَّاقَةُ المُتَجَدِّدَةُ', cat: 0 },
    ],
    answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — website sorter (FLEX, 2 min). Clue for Core: a tile starting with نَـ / نُـ is a “we” action verb; a tile ending in أَنْ is advice.',
  },
  C.morePractice([fromSite(G.quiz[1], { n: 5 }), fromSite(G.quiz[4], { n: 6 }), fromSite(G.quiz[6], { n: 7 }), fromSite(G.quiz[7], { n: 8 })], 'website quiz questions 2, 5, 7, 8 (Stretch)'),
  C.repairSlide(site, [
    'What is wrong? Look at the last vowel of the verb after أَنْ.',
    'What is wrong? يُعِيدُونَ is one of the five verbs — what happens after أَنْ?',
    'What is wrong? Look at the last vowel of the verb after لِكَيْ.',
  ]),
  C.listening(site, {
    coreTip: 'Listen twice. Core: questions 1, 2 and 4 — listen for البِلَاسْتِيك, الوَرَق (paper) and الأُسَر (families).',
    routes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 6.',
    gloss: [
      ['هُنَاكَ حُلُولٌ عَمَلِيَّةٌ لِحِمَايَةِ البِيئَةِ.', 'There are practical solutions to protect the environment.'],
      ['يَنْبَغِي أَنْ نُقَلِّلَ اسْتِخْدَامَ البِلَاسْتِيكِ، وَيَجِبُ عَلَى المَدَارِسِ أَنْ تُعِيدَ تَدْوِيرَ الوَرَقِ.', 'We should reduce plastic use, and schools must recycle paper.'],
      ['كَمَا يَجِبُ عَلَى الحُكُومَاتِ أَنْ تَسْتَثْمِرَ فِي الطَّاقَةِ الشَّمْسِيَّةِ وَطَاقَةِ الرِّيَاحِ.', 'Governments must also invest in solar and wind energy.'],
      ['وَيُمْكِنُ لِلأُسَرِ أَنْ تُرَشِّدَ المَاءَ لِكَيْ تَحْمِيَ المَوَارِدَ الطَّبِيعِيَّةَ.', 'And families can save water in order to protect natural resources.'],
    ],
  }),
  C.speakingSlide(site, {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'مَاذَا تَسْتَطِيعُ أَنْ تَفْعَلَ لِحِمَايَةِ البِيئَةِ؟' },
      { route: 'develop', ar: site.speaking.prompts[0] },
      { route: 'develop', ar: site.speaking.prompts[1] },
      { route: 'stretch', ar: site.speaking.prompts[2] },
    ],
    stems: [
      { route: 'core', ar: 'يَنْبَغِي أَنْ ______ .' },
      { route: 'develop', ar: 'يَجِبُ عَلَى ______ أَنْ ______ .' },
      { route: 'stretch', ar: '______ لِكَيْ ______ ، لٰكِنَّ ______ .' },
      { route: 'sum', ar: 'اقْتَرَحَ / اقْتَرَحَتْ أَنْ ______ .' },
    ],
    modelEn: ['What must the school do?', 'Developed answer'],
    notes: 'Core prompt (teacher-made; it is the preparation question): “What can you do to protect the environment?” — answered with the Core stem, e.g. يَنْبَغِي أَنْ نُوَفِّرَ المَاءَ.',
  }),
  C.routesSlide(site, {
    core: { amount: '4 sentences', how: 'Frames + word bank (next slide): يَنْبَغِي أَنْ / يَجِبُ أَنْ + a “we” verb from the table, ending in ـَ.' },
    develop: { amount: '6–8 sentences', how: 'Name who is responsible (يَجِبُ عَلَى …) and give one purpose with لِكَيْ.' },
    stretch: { amount: '120–140 words', how: 'Website writing task: propose solutions to one problem; include individuals AND government, and one limitation.' },
  }),
  C.framesSlide({
    core: [
      { en: 'We must recycle …', ar: 'يَجِبُ أَنْ نُعِيدَ تَدْوِيرَ ______ .' },
      { en: 'We should save water.', ar: 'يَنْبَغِي أَنْ نُوَفِّرَ ______ .' },
      { en: 'We can use …', ar: 'يُمْكِنُ أَنْ نَسْتَخْدِمَ ______ .' },
      { en: 'It is better to use a bicycle.', ar: 'مِنَ الأَفْضَلِ أَنْ نَسْتَعْمِلَ ______ .' },
      { en: 'We plant …', ar: 'نَزْرَعُ ______ .' },
    ],
    develop: [
      { en: 'The government must …', ar: 'يَجِبُ عَلَى الحُكُومَةِ أَنْ ______ .' },
      { en: 'Students must …', ar: 'يَجِبُ عَلَى الطُّلَّابِ أَنْ ______ .' },
      { en: '… so that we …', ar: '______ لِكَيْ نُـ ______ .' },
      { en: 'It is necessary to …', ar: 'مِنَ الضَّرُورِيِّ أَنْ ______ .' },
      { en: 'In the long term, …', ar: 'عَلَى المَدَى الطَّوِيلِ، ______ .' },
    ],
    bank: ['إِعَادَةُ التَّدْوِيرِ', 'الطَّاقَةُ الشَّمْسِيَّةُ', 'طَاقَةُ الرِّيَاحِ', 'النَّقْلُ العَامُّ', 'الدَّرَّاجَةَ', 'المَاءَ', 'الأَشْجَارَ', 'البِلَاسْتِيكَ', 'نُقَلِّلَ', 'نُوَفِّرَ', 'نَزْرَعَ', 'نُعِيدَ', 'نَسْتَخْدِمَ'],
  }),
  C.stretchSlide(site, [
    ['تُعَانِي مَدْرَسَتُنَا مِنْ …', 'our school suffers from …'],
    ['لِحَلِّ هٰذِهِ المُشْكِلَةِ', 'to solve this problem'],
    ['الَّتِي تُسْتَعْمَلُ مَرَّةً وَاحِدَةً', 'which are used only once'],
    ['عَلَاوَةً عَلَى ذٰلِكَ', 'in addition to that'],
    ['مِنَ الضَّرُورِيِّ أَنْ نَنْشُرَ الوَعْيَ البِيئِيَّ', 'it is necessary to spread environmental awareness'],
    ['هٰذِهِ الخُطُوَاتُ عَمَلِيَّةٌ وَقَابِلَةٌ لِلتَّطْبِيقِ', 'these steps are practical and achievable'],
  ]),
  C.modelSlide(site,
    'Our school suffers from an increase in plastic waste. To solve this problem, we should reduce the use of cups and bags that are used only once. Students must recycle, and the administration must provide suitable bins. We can use reusable bottles so that we reduce the amount of plastic. In addition, it is necessary to spread environmental awareness. In my opinion, these steps are practical and achievable.',
    ['يَنْبَغِي أَنْ + verb (ـَ)', 'يَجِبُ عَلَى … أَنْ', 'لِكَيْ + purpose', 'an opinion'],
    'Evidence: يَنْبَغِي أَنْ نُقَلِّلَ · يَجِبُ عَلَى الطُّلَّابِ أَنْ يُعِيدُوا (a five verb!) · لِكَيْ نُقَلِّلَ · فِي رَأْيِي …'),
  C.selfCheckSlide([
    { route: 'core', text: 'I can name environmental solutions (إِعَادَةُ التَّدْوِيرِ، الطَّاقَةُ الشَّمْسِيَّةُ …).' },
    { route: 'core', text: 'I can give advice with a fatḥa after أَنْ: يَنْبَغِي أَنْ نُقَلِّلَ.' },
    { route: 'develop', text: 'I can say who is responsible: يَجِبُ عَلَى الحُكُومَةِ أَنْ …' },
    { route: 'develop', text: site.success[2] },
    { route: 'stretch', text: 'I know only the five verbs lose ن after أَنْ: أَنْ يُعِيدُوا.' },
  ]),
  C.exitTicket([fromSite(site.final[0]), fromSite(site.final[2]), fromSite(site.final[3])], site.final.length),
  ...C.readingSlides(site, [
    ['لِحَلِّ', 'to solve'], ['الأَغْلِفَةُ', 'packaging'], ['حَاوِيَاتٌ', 'bins, containers'], ['يَفْصِلُوا', '(they) separate'], ['الإِدَارَةُ', 'the (school) administration'],
    ['تُنَظِّمَ', 'organise'], ['حَمْلَةُ تَوْعِيَةٍ', 'an awareness campaign'], ['زُجَاجَاتٌ', 'bottles'], ['قَابِلَةٌ لِإِعَادَةِ الاسْتِخْدَامِ', 'reusable'], ['كَمِّيَّةٌ', 'amount'],
  ]),
  C.prepSlide({
    ...NEXT,
    words: [['هَاتِفٌ', 'phone', 'pl. هَوَاتِفُ'], ['تَطْبِيقٌ', 'app', 'pl. تَطْبِيقَاتٌ'], ['مَوْقِعٌ إِلِكْتُرُونِيٌّ', 'website', ''], ['يُرْسِلُ', 'he sends', ''], ['كَلِمَةُ المُرُورِ', 'password', '']],
    questionEn: 'Write one Arabic sentence: which app do you use most, and why?',
    questionAr: 'أَيَّ تَطْبِيقٍ تَسْتَعْمِلُ كَثِيرًا؟ وَلِمَاذَا؟',
    homework: {
      core: 'Website · TC-L05 · play “Choose the Solution”, then the vocabulary mission.',
      develop: 'Write 5 pieces of advice for your school with يَنْبَغِي أَنْ / يَجِبُ عَلَى … أَنْ.',
      stretch: 'Website · TC-L05 · the application mission and the reading “A school recycling plan” (6 questions).',
    },
    wordsSource: 'The five words come from the website D4-L05 vocabulary and the website lesson game “Digital Life”.',
  }),
  C.closeSlide(NEXT),
];

module.exports = { meta, slides };
