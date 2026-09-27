'use strict';
/*
 * TC-L04 · Environmental Problems and Their Causes
 * Website: Advanced Topics › Topic C › Lesson 4 (reuses D4-L03 “Environmental Problems — Causes and Effects”;
 * Topic C focus “Explain pollution, climate change and habitat loss through cause and effect”;
 * grammar: passive voice; cause/effect connectors). Picture match: website lesson game “Cause & Effect”.
 */
const C = require('./common');
const site = require('../site-data/d4-content.json').lessons.find((l) => l.code === 'D4-L03');
const game = require('../site-data/advanced-topic-visual-games.json').c04;
const G = site.grammar;
const { q, fromSite, splitPrompt } = C;

const meta = C.meta({
  n: 4, fileTitle: 'Environmental_Problems_Causes', chip: 'Environmental Problems',
  title: 'Environmental Problems and Their Causes', arabic: 'المُشْكِلَاتُ البِيئِيَّةُ وَأَسْبَابُهَا',
  focus: 'Explain pollution, climate change and habitat loss through cause and effect: بِسَبَبِ · يُؤَدِّي إِلَى · مِمَّا يُسَبِّبُ, and active or passive verbs (تُلَوِّثُ / يُلَوَّثُ).',
  icon: 'FaIndustry',
});
const NEXT = { nextCode: 'TC-L05', nextTitle: 'Environmental Solutions and Responsibility', nextAr: 'الحُلُولُ البِيئِيَّةُ وَالمَسْؤُولِيَّةُ' };
const idafa = (a, b, ea, eb) => ({ forms: [{ l: ea, ar: a }, { l: eb, ar: b }] });

const slides = [
  C.titleSlide({
    n: 4,
    source: 'The website lesson reuses D4-L03 (Environmental Problems — Causes and Effects) with the Topic C focus “Explain pollution, climate change and habitat loss through cause and effect” (grammar: passive voice; cause/effect connectors). The picture match is the website lesson game “Cause & Effect”; the “cause–effect chain” task is the website’s advanced application challenge.',
    support: `• D4-L03 is B1 language. CORE: the problem words (most are iḍāfa phrases like TC-L02: تَلَوُّثُ الهَوَاءِ = pollution of the air) + two connectors: بِسَبَبِ (because of) and يُؤَدِّي إِلَى (leads to). The three website game sentences are the Core models. DEVELOP: active vs passive (تُلَوِّثُ المَصَانِعُ الهَوَاءَ / يُلَوَّثُ الهَوَاءُ). STRETCH: مِمَّا يُسَبِّبُ, نَتِيجَةً لِـ and the passive/process-verb distinction.
• Each problem card breaks the phrase into its two words with English; read-along listening with English; picture match with icons.
• Urdu bridge words (سبب، نتیجہ، مشکل، خطرہ، مرض).`,
  }),
  C.welcomeSlide(),
  C.journeySlide({ teach: 'Problem words, then “because of” and “leads to”.', wedo: 'Picture match, build a chain, sort, fix and listen.', next: 'TC-L05' }),
  C.doNow({
    questions: [
      q('Which word means “pollution”?', ['تَلَوُّثٌ', 'هَوَاءٌ', 'شَجَرَةٌ'], 'Prepared at home: تَلَوُّثٌ = pollution · هَوَاءٌ = air · شَجَرَةٌ = tree.'),
      q('What does بِسَبَبِ mean?', ['because of', 'between', 'in order to'], 'Prepared at home: بِسَبَبِ = because of (Urdu: سبب).'),
      q('Choose the accurate sentence.', ['تَسْقُطُ الثُّلُوجُ فِي الشِّتَاءِ.', 'يَسْقُطُ الثُّلُوجُ فِي الشِّتَاءِ.', 'تَسْقُطُ الثُّلُوجِ فِي الشِّتَاءِ.'], 'TC-L03: الثُّلُوجُ is treated as feminine → تَـ.'),
      q('Which is “hotter than”?', ['أَكْثَرُ حَرَارَةً مِنْ', 'أَكْثَرُ حَارٌّ مِنْ', 'حَرَارَةً أَكْثَرُ'], 'TC-L03: أَكْثَرُ + noun (ـًا) + مِنْ.'),
      q('What does this mean?', ['The forest includes thousands of species.', 'The forest is a natural habitat.', 'The sea includes coral reefs.'], 'TC-L02: يَضُمُّ = includes.', { ar: 'تَضُمُّ الغَابَةُ آلَافَ الأَنْوَاعِ.' }),
    ],
    keyIdea: { text: 'Today we link a CAUSE to an EFFECT: بِسَبَبِ + cause, or cause + يُؤَدِّي إِلَى + effect.', ar: 'بِسَبَبِ  ·  يُؤَدِّي إِلَى' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home (Flipped Learning follow-up). Questions 3–5 retrieve TC-L03 and TC-L02.',
  }),
  C.objectivesSlide(site.objectives, {
    core: ['I can name 6 environmental problems (تَلَوُّثُ الهَوَاءِ، إِزَالَةُ الغَابَاتِ …).', 'I can give a cause with بِسَبَبِ and an effect with يُؤَدِّي إِلَى.'],
    develop: ['I can tell an active sentence from a passive one: تُلَوِّثُ / يُلَوَّثُ.', 'I can build a chain of two causes and effects.'],
    stretch: ['I can link a whole idea to its result with مِمَّا يُسَبِّبُ.', 'I can write 120–140 words about two problems.'],
  }, 1, 'The route statements turn the general website objectives into this lesson’s concrete targets (website grammar rules 1–4 and the Topic C focus).'),
  C.keywordsSlide({
    text: '26 words from the website in 4 groups. Learn the CORE words first. Hear it → say it → see it → use it.',
    groups: [
      { head: 'GROUP 1', name: 'Problems · 6' },
      { head: 'GROUP 2', name: 'More problems · 6' },
      { head: 'GROUP 3', name: 'Cause and effect · 6' },
      { head: 'GROUP 4', name: 'Active or passive? · 8' },
    ],
    bridge: [
      { ar: 'سَبَبٌ', urdu: 'سبب', tr: 'sabab', en: 'cause' },
      { ar: 'نَتِيجَةٌ', urdu: 'نتیجہ', tr: 'natīja', en: 'result' },
      { ar: 'مُشْكِلَةٌ', urdu: 'مشکل', tr: 'mushkil', en: 'problem' },
      { ar: 'خَطَرٌ', urdu: 'خطرہ', tr: 'khatra', en: 'danger' },
      { ar: 'مَرَضٌ', urdu: 'مرض', tr: 'marz', en: 'illness' },
    ],
    notes: `URDU BRIDGE: سبب (cause), نتیجہ (result), مشکل (difficulty), خطرہ (danger — the listening says أَخْطَرِ المُشْكِلَاتِ “the most dangerous problems”), مرض (illness — أَمْرَاضُ التَّنَفُّسِ).
All four groups are the website D4-L03 vocabulary; Group 2 also adds الدُّخَانُ and المَصَانِعُ from the website lesson game.`,
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1', title: 'Environmental problems (1 of 2)', ar: 'المُشْكِلَاتُ البِيئِيَّةُ',
    items: [
      { n: 1, ar: 'تَلَوُّثُ الهَوَاءِ', en: 'air pollution', tr: 'ta-law-wuth al-ha-wāʾ', tag: 'iḍāfa', core: true, ...idafa('تَلَوُّثٌ', 'الهَوَاءُ', 'pollution', 'the air') },
      { n: 2, ar: 'تَلَوُّثُ المِيَاهِ', en: 'water pollution', tr: 'ta-law-wuth al-mi-yāh', tag: 'iḍāfa', core: true, ...idafa('تَلَوُّثٌ', 'المِيَاهُ', 'pollution', 'the water') },
      { n: 3, ar: 'النُّفَايَاتُ {m|البِلَاسْتِيكِ}{e|يَّةُ}', en: 'plastic waste', tr: 'an-nu-fā-yāt al-bi-lās-tī-kiy-ya', tag: 'noun + adjective', core: true, ...idafa('نُفَايَاتٌ', 'بِلَاسْتِيكِيَّةٌ', 'waste', 'plastic') },
      { n: 4, ar: 'إِزَالَةُ الغَابَاتِ', en: 'deforestation', tr: 'i-zā-lat al-ghā-bāt', tag: 'iḍāfa', core: true, ...idafa('إِزَالَةٌ', 'الغَابَاتُ', 'removal', 'the forests') },
      { n: 5, ar: 'الاحْتِبَاسُ {m|الحَرَارِ}{e|يُّ}', en: 'global warming', tr: 'al-iḥ-ti-bās al-ḥa-rā-riyy', tag: 'noun + adjective', core: true, ...idafa('احْتِبَاسٌ', 'حَرَارِيٌّ', 'trapping', 'heat (adj.)') },
      { n: 6, ar: 'التَّصَحُّرُ', en: 'desertification', tr: 'at-ta-ṣaḥ-ḥur', tag: 'noun', core: true, ...idafa('صَحْرَاءُ', 'التَّصَحُّرُ', 'desert', '→ becoming desert') },
    ],
    notes: `KEY WORDS — Environmental problems (website D4-L03). Hear → Say → See → Use.
The small boxes break each phrase into its two words (English label above). Most are iḍāfa — “the pollution OF the air” — exactly the structure from TC-L02. Two are noun + nisba adjective (pink ending): البِلَاسْتِيكِيَّةُ، الحَرَارِيُّ.
Link to TC-L02: التَّصَحُّرُ comes from صَحْرَاء (desert), and إِزَالَةُ الغَابَاتِ uses غَابَة (forest).
Quick check: “Type the NUMBER of the problem you think is worst in your city” (personal response, English reason allowed).`,
  },
  {
    type: 'vocab', stage: 'teach', min: 1, eyebrow: 'Key words · Group 2', title: 'Environmental problems (2 of 2)', ar: 'المُشْكِلَاتُ البِيئِيَّةُ',
    items: [
      { n: 7, ar: 'الدُّخَانُ', en: 'smoke', tr: 'ad-du-khān', tag: 'noun · m.', core: true, note: 'Website game: دُخَانُ المَصَانِعِ (factory smoke).' },
      { n: 8, ar: 'المَصَانِعُ', en: 'factories', tr: 'al-ma-ṣā-niʿ · sg. maṣ-naʿ', tag: 'noun · pl.', core: true, forms: [{ l: 'sg.', ar: 'مَصْنَعٌ' }, { l: 'pl.', ar: 'مَصَانِعُ' }] },
      { n: 9, ar: 'ذَوَبَانُ الجَلِيدِ', en: 'melting ice', tr: 'dha-wa-bān al-ja-līd', tag: 'iḍāfa', ...idafa('ذَوَبَانٌ', 'الجَلِيدُ', 'melting', 'the ice') },
      { n: 10, ar: 'ارْتِفَاعُ مُسْتَوَى البَحْرِ', en: 'sea-level rise', tr: 'ir-ti-fāʿ mus-ta-wā l-baḥr', tag: 'iḍāfa', note: 'ارْتِفَاع = rise (TC-L03: تَرْتَفِعُ).' },
      { n: 11, ar: 'فَقْدُ المَوَائِلِ', en: 'habitat loss', tr: 'faqd al-ma-wā-ʾil', tag: 'iḍāfa', ...idafa('فَقْدٌ', 'المَوَائِلُ', 'loss', 'habitats') },
      { n: 12, ar: 'انْقِرَاضُ الأَنْوَاعِ', en: 'species extinction', tr: 'in-qi-rāḍ al-an-wāʿ', tag: 'iḍāfa', note: 'TC-L02: الانْقِرَاضُ = extinction.' },
    ],
    notes: `KEY WORDS — more problems (website D4-L03 + website lesson game for الدُّخَانُ / المَصَانِعُ). Core: الدُّخَانُ and المَصَانِعُ; Develop / Stretch: all six.
Link to TC-L03: ارْتِفَاع (a rise) is the noun from تَرْتَفِعُ (it rises).`,
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 3 · cause and effect (website)', title: 'Cause and effect connectors', ar: 'السَّبَبُ وَالنَّتِيجَةُ',
    items: [
      { n: 1, ar: '{k|بِسَبَبِ}', en: 'because of', tr: 'bi-sa-ba-bi', tag: '+ noun', core: true, note: 'Followed by a NOUN, not a whole sentence.' },
      { n: 2, ar: '{k|يُؤَدِّي إِلَى}', en: 'leads to', tr: 'yu-ʾad-dī i-lā', tag: 'verb + إِلَى', core: true, note: 'Always إِلَى after يُؤَدِّي.' },
      { n: 3, ar: '{k|نَتِيجَةً لِـ}', en: 'as a result of', tr: 'na-tī-ja-tan li', tag: '+ noun', note: 'Followed by a noun in the genitive.' },
      { n: 4, ar: '{k|مِمَّا يُسَبِّبُ}', en: 'which causes', tr: 'mim-mā yu-sab-bi-bu', tag: 'after a comma', note: 'مِمَّا refers back to the whole idea before it.' },
      { n: 5, ar: '{k|نَتِيجَةً لِذٰلِكَ}', en: 'as a result', tr: 'na-tī-ja-tan li-dhā-lik', tag: 'starts a sentence' },
      { n: 6, ar: 'عَلَى المَدَى الطَّوِيلِ', en: 'in the long term', tr: 'ʿa-lā l-ma-dā ṭ-ṭa-wīl', tag: 'time phrase' },
    ],
    notes: `KEY WORDS — Cause and effect (website D4-L03). Teal = key connector.
Core: learn cards 1–2 today. Develop: 1–5. Stretch: all six.
Gesture: point backwards over your shoulder for بِسَبَبِ (the cause came before), point forwards for يُؤَدِّي إِلَى (the effect comes next).`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Key words · Group 4 · Develop · website', title: 'Active or passive? Processes', ar: 'المَعْلُومُ وَالمَجْهُولُ',
    cols: [{ label: 'Phrase (website)', w: 4.4, size: 22 }, { label: 'English', w: 3.4 }, { label: 'Active, passive or process?', w: 4.53, italic: true }],
    rows: [
      { core: true, cells: [{ ar: 'تُلَوِّثُ المَصَانِعُ الهَوَاءَ', sub: 'tu-law-wi-thu l-ma-ṣā-niʿ al-ha-wāʾ' }, 'factories pollute the air', 'ACTIVE — names who does it'] },
      { cells: [{ ar: 'يُلَوَّثُ الهَوَاءُ', sub: 'yu-law-wa-thu l-ha-wāʾ' }, 'the air is polluted', 'PASSIVE — yu-…-wa-: “is …-ed”'] },
      { cells: [{ ar: 'تُقْطَعُ الأَشْجَارُ', sub: 'tuq-ṭa-ʿu l-ash-jār' }, 'trees are cut down', 'PASSIVE — الأَشْجَار → feminine تُـ'] },
      { cells: [{ ar: 'تُرْمَى النُّفَايَاتُ', sub: 'tur-mā n-nu-fā-yāt' }, 'waste is thrown', 'PASSIVE'] },
      { cells: [{ ar: 'يَنْبَعِثُ الدُّخَانُ', sub: 'yan-ba-ʿi-thu d-du-khān' }, 'smoke is emitted', 'PROCESS verb — not a passive'] },
      { cells: [{ ar: 'يَتَرَاكَمُ البِلَاسْتِيكُ', sub: 'ya-ta-rā-ka-mu l-bi-lās-tīk' }, 'plastic accumulates', 'PROCESS verb'] },
      { cells: [{ ar: 'يُهَدِّدُ', sub: 'yu-had-di-du' }, 'threatens', 'ACTIVE + object (TC-L02)'] },
      { cells: [{ ar: 'يَضُرُّ بِـ', sub: 'ya-ḍur-ru bi' }, 'harms', 'ACTIVE + بِـ'] },
    ],
    notes: `KEY WORDS — Active and passive processes (website D4-L03). Develop / Stretch; Core students learn row 1 only.
Listen to the vowels: ACTIVE يُلَوِّثُ (yu-law-WI-thu) → PASSIVE يُلَوَّثُ (yu-law-WA-thu). The passive sounds “u … a”.
Website common error: “Do not label every English ‘is/are + verb’ translation as an Arabic passive. Distinguish true passive forms such as يُلَوَّثُ from intransitive process verbs such as يَنْبَعِثُ.”`,
  },
  {
    type: 'formula', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 1 · cause → effect (website game)', title: 'Cause and effect in three beats', ar: 'السَّبَبُ ← النَّتِيجَةُ',
    cols: [
      { label: 'connector verb (key word)', ar: 'يُسَبِّبُ / يُؤَدِّي', color: '0E7C86', pale: 'E3F2F3' },
      { label: 'cause', ar: 'السَّبَبُ', color: '1B3B6F', pale: 'EEF3FA' },
      { label: 'effect', ar: 'النَّتِيجَةُ', color: '8A6D1E', pale: 'F8F0DC' },
    ],
    rows: [
      { en: 'Factory smoke causes air pollution.', cells: ['{k|يُسَبِّبُ}', 'دُخَانُ المَصَانِعِ', 'تَلَوُّثَ الهَوَاءِ.'] },
      { en: 'Cutting down trees leads to habitat loss.', cells: ['{k|يُؤَدِّي}', 'قَطْعُ الأَشْجَارِ', 'إِلَى فَقْدِ المَوَائِلِ.'] },
      { en: 'Global warming leads to the ice melting.', cells: ['{k|يُؤَدِّي}', 'الاحْتِبَاسُ الحَرَارِيُّ', 'إِلَى ذَوَبَانِ الجَلِيدِ.'] },
      { en: 'Pollution leads to illnesses.', cells: ['{k|يُؤَدِّي}', 'التَّلَوُّثُ', 'إِلَى أَمْرَاضٍ.'] },
    ],
    foot: 'Pattern: يُسَبِّبُ + cause + effect, or يُؤَدِّي + cause + إِلَى + effect. Never يُؤَدِّي فِي ✗',
    notes: `GRAMMAR PART 1 — website rule “Result with يُؤَدِّي إِلَى”: cause + يُؤَدِّي إِلَى + verbal noun / noun. Keep the preposition إِلَى after يُؤَدِّي.
Sentences: website lesson game (row 1), website pattern (row 2), mission (row 3), website common mistake corrected (row 4).
Read each row in three beats; students tap the three beats. Arabic often puts the verb FIRST: “causes — factory smoke — air pollution”.
Core: learn rows 1–2 as chunks.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · three connectors', title: 'Because of · leads to · which causes', ar: 'أَدَوَاتُ الرَّبْطِ',
    cards: [
      { chip: 'CORE · because of', head: 'بِسَبَبِ + noun', big: 'يَتَلَوَّثُ البَحْرُ بِسَبَبِ النُّفَايَاتِ', en: 'The sea gets polluted because of waste.', clue: 'بِسَبَبِ / نَتِيجَةً لِـ + a NOUN phrase, not a whole sentence.' },
      { chip: 'CORE · leads to', color: '0E7C86', head: 'يُؤَدِّي إِلَى', big: 'يُؤَدِّي التَّلَوُّثُ إِلَى أَمْرَاضٍ', en: 'Pollution leads to illnesses.', clue: 'Always إِلَى after يُؤَدِّي.' },
      { chip: 'STRETCH · which causes', color: 'B83227', head: 'مِمَّا يُسَبِّبُ', big: 'تَرْتَفِعُ الحَرَارَةُ، مِمَّا يُسَبِّبُ ذَوَبَانَ الجَلِيدِ', en: 'The temperature rises, which causes the ice to melt.', clue: 'مِمَّا refers back to the WHOLE idea before the comma.' },
    ],
    error: { text: 'The website’s common mistakes: the wrong preposition after يُؤَدِّي, and a masculine verb with الأَشْجَار.', pairs: [['يُؤَدِّي إِلَى', 'يُؤَدِّي فِي'], ['تُقْطَعُ الأَشْجَارُ', 'يُقْطَعُ الأَشْجَارُ']] },
    notes: `GRAMMAR PART 2 — website rules “Cause phrases” (بِسَبَبِ / نَتِيجَةً لِـ + genitive noun: these expressions are followed by a noun phrase, not a complete finite clause) and “Linking a whole clause to a consequence” (مِمَّا refers back to the whole previous idea).
Examples: website pattern and rule examples.
• CORE: بِسَبَبِ and يُؤَدِّي إِلَى. • DEVELOP: add نَتِيجَةً لِـ. • STRETCH: مِمَّا يُسَبِّبُ.`,
  },
  {
    type: 'peopleTable', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 3 · Develop · website rule “Active and passive”', title: 'Who does it? Active or passive', ar: 'مَنْ يَفْعَلُ؟',
    heads: ['Type', 'Verb', 'Website sentence'],
    rows: [
      { who: 'مَعْلُومٌ', whoEn: 'active', word: 'تُلَوِّثُ', sentence: 'تُلَوِّثُ {w|المَصَانِعُ} الهَوَاءَ.', en: 'Factories pollute the air. (who: the factories)' },
      { who: 'مَجْهُولٌ', whoEn: 'passive', word: 'يُلَوَّثُ', sentence: 'يُلَوَّثُ الهَوَاءُ بِدُخَانِ المَصَانِعِ.', en: 'The air is polluted by factory smoke.' },
      { who: 'مَجْهُولٌ', whoEn: 'passive', word: 'تُقْطَعُ', sentence: 'تُقْطَعُ الأَشْجَارُ فِي بَعْضِ المَنَاطِقِ.', en: 'Trees are cut down in some areas.' },
      { who: 'مَجْهُولٌ', whoEn: 'passive', word: 'تُرْمَى', sentence: 'تُرْمَى نُفَايَاتٌ بِلَاسْتِيكِيَّةٌ فِي النَّهْرِ.', en: 'Plastic waste is thrown into the river.' },
      { who: 'لَازِمٌ', whoEn: 'process', word: 'يَنْبَعِثُ', sentence: 'يَنْبَعِثُ مِنْهَا دُخَانٌ كَثِيفٌ.', en: 'Thick smoke comes out of them.' },
    ],
    notes: `GRAMMAR PART 3 — website rule “Active and passive”: تُلَوِّثُ Xُ Yَ ↔ يُلَوَّثُ Yُ. The active sentence names the agent. The passive focuses on the affected thing; the passive subject is nominative.
Sentences: website grammar examples, quiz and listening script.
Develop focus — Core students listen and notice only: the active sentence tells you WHO (blue).
Stretch: explain why row 5 is not a passive (website: “ينبعث is not a passive form of لوّث; it describes smoke or gas emanating”).`,
  },
  {
    type: 'ruleRows', stage: 'teach', flex: true, eyebrow: 'Grammar focus · Part 4 · website examples · FLEX', title: 'The four website rules with examples', ar: 'أَمْثِلَةُ القَوَاعِدِ',
    rows: G.rules.map((r) => ({ title: r.heading, formula: r.formula, examples: r.examples })),
    notes: `WEBSITE GRAMMAR RULES AND EXAMPLES (FLEX — revision or homework). Website overview: “${G.overview}”
Website common error: “${G.common_error}”`,
  },
  C.quickCheck([splitPrompt(G.quiz[3]), fromSite(G.quiz[4]), fromSite(G.quiz[2]), fromSite(G.quiz[0])], 'website grammar quiz questions 4, 5, 3 and 1.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me build a cause–effect chain', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Name the problem', ar: 'يَزْدَادُ {k|تَلَوُّثُ الهَوَاءِ}', think: 'يَزْدَادُ = increases. An iḍāfa: pollution of the air.' },
      { head: 'Give the cause', ar: '{w|بِسَبَبِ} السَّيَّارَاتِ وَالمَصَانِعِ', think: 'بِسَبَبِ + noun. Two causes joined with وَ.' },
      { head: 'Give the effect', ar: 'وَهٰذَا {w|يُؤَدِّي إِلَى} أَمْرَاضٍ', think: 'يُؤَدِّي + إِلَى — never فِي.' },
      { head: 'Add your opinion', ar: 'فِي رَأْيِي، هٰذِهِ مُشْكِلَةٌ خَطِيرَةٌ', think: 'فِي رَأْيِي = in my opinion (website model).' },
    ],
    legend: ['k', 'w'], legendLabels: { k: 'PROBLEM', w: 'CONNECTOR' },
    model: 'يَزْدَادُ {k|تَلَوُّثُ الهَوَاءِ} {w|بِسَبَبِ} السَّيَّارَاتِ وَالمَصَانِعِ، وَهٰذَا {w|يُؤَدِّي إِلَى} أَمْرَاضٍ. فِي رَأْيِي، هٰذِهِ مُشْكِلَةٌ خَطِيرَةٌ.',
    modelEn: 'Air pollution is increasing because of cars and factories, and this leads to illnesses. In my opinion, this is a serious problem.',
    notes: `I DO (3 min) — teacher models with a think-aloud; students watch, then COPY the chain into their books.
Step 1 — “I name the problem: تَلَوُّثُ الهَوَاءِ. يَزْدَادُ means it is increasing.”
Step 2 — “Why? بِسَبَبِ + nouns: السَّيَّارَاتِ وَالمَصَانِعِ.”
Step 3 — “What happens? وَهٰذَا يُؤَدِّي إِلَى أَمْرَاضٍ — I must keep إِلَى.”
Step 4 — “My judgement: فِي رَأْيِي، هٰذِهِ مُشْكِلَةٌ خَطِيرَةٌ.”
Built from website language: listening script (السَّيَّارَاتُ وَالمَصَانِعُ … تَزْدَادُ أَمْرَاضُ التَّنَفُّسِ), website speaking model (فِي رَأْيِي، تَلَوُّثُ الهَوَاءِ خَطِيرٌ …) and the corrected website mistake (يُؤَدِّي التَّلَوُّثُ إِلَى أَمْرَاضٍ).`,
  },
  {
    type: 'models', stage: 'ido', min: 1, eyebrow: 'I do · model sentences from the website', title: 'Four sentences to borrow', ar: 'جُمَلٌ نَمُوذَجِيَّةٌ',
    rows: [
      { ar: game.items[0].sentence, en: 'Factory smoke causes air pollution.', tip: 'Website game — a Core sentence.' },
      { ar: site.patterns[1].ar, en: 'The sea gets polluted because of plastic waste.', tip: 'بِسَبَبِ + noun.' },
      { ar: site.patterns[2].ar, en: 'Cutting down trees leads to habitat loss.', tip: 'Keep إِلَى after يُؤَدِّي.' },
      { ar: G.rules[3].examples[0], en: 'The temperature rises, which causes the ice to melt.', tip: 'Stretch: مِمَّا refers back to the whole idea.' },
    ],
    notes: `MODEL SENTENCES (1 min) — website lesson game, patterns and rules. Students copy TWO that are useful for them.
• Core: copy 1 and 2. • Develop: copy 3 and change the cause. • Stretch: copy 4 and write another chain with مِمَّا.`,
  },
  C.gameSlide(game, {
    title: 'Match the picture to the cause and effect',
    en: ['Factory smoke causes air pollution.', 'Throwing waste into the sea harms marine life.', 'Cutting down trees leads to the loss of animal habitats.'],
    icons: [[['fa6', 'FaIndustry', '5A6472'], ['fa6', 'FaSmog', '5A6472']], [['fa6', 'FaTrashCan', 'C77700'], ['fa6', 'FaFish', '1D5FBF']], [['fa6', 'FaTree', '2E8B57'], ['fa6', 'FaPaw', '8A6D1E']]],
    link: '→',
    order: [2, 0, 1],
    notes: 'Key words to spot: دُخَانُ المَصَانِعِ (factory smoke), النُّفَايَاتِ فِي البَحْرِ (waste in the sea), قَطْعُ الأَشْجَارِ (cutting trees). Develop: find يُؤَدِّي … إِلَى in sentences 2 and 3.',
  }),
  {
    type: 'builder', stage: 'wedo', min: 3, eyebrow: 'We do · guided practice · sentence builder', title: 'Build the sentence', ar: 'اِبْنِ الجُمْلَةَ',
    rows: [
      { en: 'Cars pollute the air.', cols: [['يُلَوَّثُ', 'تُلَوِّثُ'], ['السَّيَّارَاتُ', 'الأَشْجَارُ'], ['الهَوَاءُ.', 'الهَوَاءَ.']], key: [1, 0, 1], why: 'Active: the cars do it; the air is the object → الهَوَاءَ.' },
      { en: 'The sea gets polluted because of plastic waste.', cols: [['يَتَلَوَّثُ', 'يُؤَدِّي'], ['الهَوَاءُ', 'البَحْرُ'], ['بِسَبَبِ النُّفَايَاتِ البِلَاسْتِيكِيَّةِ.', 'إِلَى النُّفَايَاتِ البِلَاسْتِيكِيَّةِ.']], key: [0, 1, 0], why: 'بِسَبَبِ + the cause (a noun).' },
      { en: 'Pollution leads to illnesses.', cols: [['يُؤَدِّي', 'يَتَرَاكَمُ'], ['التَّلَوُّثُ', 'الجَلِيدُ'], ['فِي أَمْرَاضٍ.', 'إِلَى أَمْرَاضٍ.']], key: [0, 0, 1], why: 'Always إِلَى after يُؤَدِّي.' },
    ],
    answerSlide: { min: 0, eyebrow: 'We do · sentence builder answers', title: 'Check your sentences', ar: 'تَحَقَّقْ مِنْ جُمَلِكَ' },
    notes: `WE DO — sentence builder (3 min). Teacher-made from website sentences (listening script, website pattern, website common mistake).
Students choose ONE box per column (start from Column 1 on the right) and type the letters, e.g. “1: B A B”. ↔ Rehearse 30s first.
Core: sentences 2–3 (connectors). Develop / Stretch: sentence 1 (active + object ending) and explain the wrong options.
Website “Advanced application — Cause–effect chain”: after the builder, pairs build a four-step chain from a cause to a problem and two effects in the chat; a partner must challenge or improve one link (? / +).`,
  },
  {
    type: 'sorter', stage: 'wedo', flex: true, eyebrow: 'We do · website sorter', title: 'Problem, process or connector?', ar: 'صَنِّفْ',
    categories: ['Environmental problems', 'Active and passive processes', 'Cause and effect'],
    items: [
      { ar: 'بِسَبَبِ', cat: 2 }, { ar: 'تَلَوُّثُ الهَوَاءِ', cat: 0 }, { ar: 'يُلَوَّثُ الهَوَاءُ', cat: 1 }, { ar: 'يُؤَدِّي إِلَى', cat: 2 },
      { ar: 'النُّفَايَاتُ البِلَاسْتِيكِيَّةُ', cat: 0 }, { ar: 'تُقْطَعُ الأَشْجَارُ', cat: 1 }, { ar: 'تَلَوُّثُ المِيَاهِ', cat: 0 }, { ar: 'نَتِيجَةً لِـ', cat: 2 }, { ar: 'تُلَوِّثُ المَصَانِعُ الهَوَاءَ', cat: 1 },
    ],
    answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — website sorter (FLEX, 2 min). Clue for Core: a tile with a VERB (يُـ / تُـ at the start) is a process; a tile that starts with تَلَوُّث / النُّفَايَات is a problem.',
  },
  C.morePractice([fromSite(G.quiz[1], { n: 5 }), fromSite(G.quiz[5], { n: 6 }), fromSite(G.quiz[6], { n: 7 }), fromSite(G.quiz[7], { n: 8 })], 'website quiz questions 2, 6, 7, 8 (Stretch)'),
  C.repairSlide(site, [
    'What is wrong? Is the air doing the polluting, or being polluted?',
    'What is wrong? Which preposition always follows يُؤَدِّي?',
    'What is wrong? Is الأَشْجَار treated as masculine or feminine?',
  ]),
  C.listening(site, {
    coreTip: 'Listen twice. Core: questions 1, 2 and 5 — listen for تَلَوُّثُ الهَوَاءِ, السَّيَّارَاتُ وَالمَصَانِعُ and النَّهْرِ (river).',
    routes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 6.',
    gloss: [
      ['يُعَدُّ تَلَوُّثُ الهَوَاءِ مِنْ أَخْطَرِ المُشْكِلَاتِ فِي المَدِينَةِ.', 'Air pollution is considered one of the most serious problems in the city.'],
      ['تُلَوِّثُ السَّيَّارَاتُ وَالمَصَانِعُ الهَوَاءَ، وَيَنْبَعِثُ مِنْهَا دُخَانٌ كَثِيفٌ.', 'Cars and factories pollute the air, and thick smoke comes out of them.'],
      ['نَتِيجَةً لِذٰلِكَ، تَزْدَادُ أَمْرَاضُ التَّنَفُّسِ.', 'As a result, breathing (respiratory) illnesses increase.'],
      ['كَمَا تُرْمَى نُفَايَاتٌ بِلَاسْتِيكِيَّةٌ فِي النَّهْرِ، مِمَّا يُؤَدِّي إِلَى تَلَوُّثِ المِيَاهِ وَنُفُوقِ بَعْضِ الأَسْمَاكِ.', 'Plastic waste is also thrown into the river, which leads to water pollution and the death of some fish.'],
    ],
  }),
  C.speakingSlide(site, {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'مَا مُشْكِلَةٌ بِيئِيَّةٌ فِي مَدِينَتِكَ؟' },
      { route: 'develop', ar: site.speaking.prompts[0] },
      { route: 'develop', ar: site.speaking.prompts[1] },
      { route: 'stretch', ar: site.speaking.prompts[2] },
    ],
    stems: [
      { route: 'core', ar: '______ مُشْكِلَةٌ خَطِيرَةٌ بِسَبَبِ ______ .' },
      { route: 'develop', ar: 'يُؤَدِّي ______ إِلَى ______ .' },
      { route: 'stretch', ar: '______ ، مِمَّا يُسَبِّبُ ______ .' },
      { route: 'sum', ar: 'قَالَ / قَالَتْ إِنَّ ______ .' },
    ],
    modelEn: ['What is the most serious environmental problem, in your opinion?', 'Developed answer'],
    notes: 'Core prompt (teacher-made; it is the preparation question): “What is an environmental problem in your city?” — answered with the Core stem, e.g. تَلَوُّثُ الهَوَاءِ مُشْكِلَةٌ خَطِيرَةٌ بِسَبَبِ السَّيَّارَاتِ.',
  }),
  C.routesSlide(site, {
    core: { amount: '4 sentences', how: 'Frames + word bank (next slide): a problem + بِسَبَبِ + cause; يُؤَدِّي … إِلَى + effect.' },
    develop: { amount: '6–8 sentences', how: 'One active and one passive sentence (يُلَوَّثُ / تُقْطَعُ) and at least two different connectors.' },
    stretch: { amount: '120–140 words', how: 'Website writing task: explain two problems, their causes and consequences. Checklist and phrase bank on the Stretch slide.' },
  }),
  C.framesSlide({
    core: [
      { en: 'Air pollution is a serious problem.', ar: 'تَلَوُّثُ ______ مُشْكِلَةٌ خَطِيرَةٌ .' },
      { en: 'The sea is polluted because of …', ar: 'يَتَلَوَّثُ البَحْرُ بِسَبَبِ ______ .' },
      { en: '… leads to …', ar: 'يُؤَدِّي ______ إِلَى ______ .' },
      { en: 'Factories pollute the air.', ar: 'تُلَوِّثُ ______ الهَوَاءَ .' },
      { en: 'In my opinion, … is serious.', ar: 'فِي رَأْيِي، ______ خَطِيرٌ .' },
    ],
    develop: [
      { en: 'The air is polluted by …', ar: 'يُلَوَّثُ الهَوَاءُ بِـ ______ .' },
      { en: 'Trees are cut down in …', ar: 'تُقْطَعُ الأَشْجَارُ فِي ______ .' },
      { en: 'As a result of …, …', ar: 'نَتِيجَةً لِـ ______ ، ______ .' },
      { en: '…, which causes …', ar: '______ ، مِمَّا يُسَبِّبُ ______ .' },
      { en: 'In the long term, …', ar: 'عَلَى المَدَى الطَّوِيلِ، ______ .' },
    ],
    bank: ['تَلَوُّثُ الهَوَاءِ', 'تَلَوُّثُ المِيَاهِ', 'النُّفَايَاتُ', 'الدُّخَانُ', 'المَصَانِعُ', 'السَّيَّارَاتُ', 'قَطْعُ الأَشْجَارِ', 'الاحْتِبَاسُ الحَرَارِيُّ', 'ذَوَبَانُ الجَلِيدِ', 'أَمْرَاضٌ', 'بِسَبَبِ', 'يُؤَدِّي إِلَى'],
  }),
  C.stretchSlide(site, [
    ['تُوَاجِهُ مُدُنٌ كَثِيرَةٌ مُشْكِلَاتٍ بِيئِيَّةً مُتَرَابِطَةً', 'many cities face linked environmental problems'],
    ['فَبِسَبَبِ كَثْرَةِ السَّيَّارَاتِ …', 'because of the large number of cars …'],
    ['مِمَّا يَضُرُّ بِالأَسْمَاكِ وَالطُّيُورِ', 'which harms fish and birds'],
    ['فَيُؤَدِّي ذٰلِكَ إِلَى …', 'and this leads to …'],
    ['عَلَى المَدَى الطَّوِيلِ', 'in the long term'],
    ['لَا بُدَّ مِنْ فَهْمِ الأَسْبَابِ قَبْلَ اخْتِيَارِ الحُلُولِ', 'we must understand the causes before choosing solutions'],
  ]),
  C.modelSlide(site,
    'Many cities face linked environmental problems. Because of the large number of cars and the burning of fossil fuels, the air is polluted and breathing illnesses increase. Plastic waste is also thrown into the seas, which harms fish and birds. In some areas trees are cut down, and this leads to habitat loss and desertification. In the long term, these problems will affect people’s health and the economy. So we must understand the causes before choosing solutions.',
    ['an active sentence', 'a passive sentence', 'بِسَبَبِ / مِمَّا / يُؤَدِّي إِلَى', 'a judgement'],
    'Evidence: passives يُلَوَّثُ الهَوَاءُ · تُرْمَى النُّفَايَاتُ · تُقْطَعُ الأَشْجَارُ; connectors فَبِسَبَبِ · مِمَّا يَضُرُّ · فَيُؤَدِّي ذٰلِكَ إِلَى; judgement لَا بُدَّ مِنْ فَهْمِ الأَسْبَابِ.'),
  C.selfCheckSlide([
    { route: 'core', text: 'I can name environmental problems and give a cause with بِسَبَبِ.' },
    { route: 'core', text: 'I use يُؤَدِّي إِلَى — never يُؤَدِّي فِي.' },
    { route: 'develop', text: 'I can tell an active sentence (تُلَوِّثُ المَصَانِعُ الهَوَاءَ) from a passive one (يُلَوَّثُ الهَوَاءُ).' },
    { route: 'develop', text: site.success[2] },
    { route: 'stretch', text: site.success[3] },
  ]),
  C.exitTicket([fromSite(site.final[0]), fromSite(site.final[1]), fromSite(site.final[2])], site.final.length),
  ...C.readingSlides(site, [
    ['حَرْقٌ', 'burning'], ['الوَقُودُ الأُحْفُورِيُّ', 'fossil fuel'], ['نِسْبَةٌ', 'level, proportion'], ['ثَانِي أُكْسِيدِ الكَرْبُونِ', 'carbon dioxide'], ['الاحْتِبَاسُ الحَرَارِيُّ', 'global warming'],
    ['ذَوَبَانُ الجَلِيدِ', 'melting ice'], ['مُسْتَوَى البَحْرِ', 'sea level'], ['تَفْقِدُ', 'loses'], ['مَوَائِلُ', 'habitats'], ['طَوِيلَةُ الأَمَدِ', 'long-term'],
  ]),
  C.prepSlide({
    ...NEXT,
    words: [['إِعَادَةُ التَّدْوِيرِ', 'recycling', ''], ['نَزْرَعُ', 'we plant', ''], ['نُوَفِّرُ', 'we save, conserve', ''], ['يَجِبُ أَنْ', 'must', ''], ['النَّقْلُ العَامُّ', 'public transport', '']],
    questionEn: 'Write one Arabic sentence: what can you do to help the environment?',
    questionAr: 'مَاذَا تَسْتَطِيعُ أَنْ تَفْعَلَ لِحِمَايَةِ البِيئَةِ؟',
    homework: {
      core: 'Website · TC-L04 · play “Cause & Effect”, then the vocabulary mission.',
      develop: 'Write a four-step cause–effect chain about one problem (website application task).',
      stretch: 'Website · TC-L04 · the application mission and the reading “A cause–effect chain” (6 questions).',
    },
    wordsSource: 'The five words come from the website D4-L04 vocabulary (Environmental solutions; Action verbs; Advice).',
  }),
  C.closeSlide(NEXT),
];

module.exports = { meta, slides };
