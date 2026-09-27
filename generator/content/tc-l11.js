'use strict';
/*
 * TC-L11 · Topic C Integrated Communication Workshop
 * Website: Advanced Topics › Topic C › Lesson 11 (reuses D4-L11 “Consolidation — Range Mastery and Speaking
 * Preparation”; Topic C focus “Connect environmental, technological and urban issues across all four skills”;
 * grammar: mixed tenses; cohesion; balanced opinion). Picture match: website lesson game “Information Relay”.
 */
const C = require('./common');
// “D4” inside Arabic breaks the right-to-left line, so the unit is named in Arabic (Topic C = this unit)
const site = JSON.parse(JSON.stringify(require('../site-data/d4-content.json').lessons.find((l) => l.code === 'D4-L11'))
  .replace(/وَحْدَةُ D4/g, 'هٰذِهِ الوَحْدَةُ').replace(/فِي D4/g, 'فِي هٰذِهِ الوَحْدَةِ').replace(/D4 range features/g, 'Topic C range features'));
const game = require('../site-data/advanced-topic-visual-games.json').c11;
const G = site.grammar;
const { q, fromSite } = C;

const meta = C.meta({
  n: 11, fileTitle: 'Integrated_Communication_Workshop', chip: 'Topic C Workshop',
  title: 'Topic C Integrated Communication Workshop', arabic: 'وَرْشَةُ التَّوَاصُلِ المُتَكَامِلِ',
  focus: 'Bring Topic C together: weather, the environment, technology and the town. Pass on information accurately, use past, present and future, link your ideas and give a balanced opinion.',
  icon: 'FaPeopleArrows',
});
const NEXT = { nextCode: 'TC-L12', nextTitle: 'Topic C Review and Four-Skills Assessment', nextAr: 'مُرَاجَعَةُ الوَحْدَةِ وَتَقْيِيمُ المَهَارَاتِ' };

const newsletter = [
  'نَشْرَةُ مَدِينَتِنَا — الأُسْبُوعُ القَادِمُ',
  'الطَّقْسُ: سَيَكُونُ الجَوُّ مُمْطِرًا فِي الشَّمَالِ، وَمُشْمِسًا فِي الجَنُوبِ.',
  'البِيئَةُ: تُخَطِّطُ البَلَدِيَّةُ لِزِيَادَةِ مَرَاكِزِ إِعَادَةِ التَّدْوِيرِ.',
  'المُوَاصَلَاتُ: تُوجَدُ حَافِلَاتٌ جَدِيدَةٌ بِجَانِبِ مَحَطَّةِ القِطَارِ.',
  'التَّسَوُّقُ: فِي السُّوقِ خَصْمٌ عِشْرُونَ فِي المِئَةِ عَلَى الكُتُبِ.',
  'الأَمَانُ الرَّقْمِيُّ: اِحْمِ حِسَابَكَ بِكَلِمَةِ مُرُورٍ قَوِيَّةٍ، وَلَا تُشَارِكْهَا مَعَ أَحَدٍ.',
  'رَأْيُ المُحَرِّرِ: مَدِينَتُنَا تَتَحَسَّنُ، لٰكِنَّهَا تَحْتَاجُ إِلَى مَسَاحَاتٍ خَضْرَاءَ أَكْثَرَ.',
];

const slides = [
  C.titleSlide({
    n: 11,
    source: 'The website lesson reuses D4-L11 (Consolidation — Range Mastery and Speaking Preparation) with the Topic C focus “Connect environmental, technological and urban issues across all four skills” (grammar: mixed tenses; cohesion; balanced opinion). The picture match is the website lesson game “Information Relay”; the relay task is the website application “Topic C information relay”. The newsletter and the Topic C grammar map are teacher-made from Topic C lessons 1–10.',
    support: `• A workshop lesson: less new language, more USING what we have learnt in Topic C. CORE: understand and pass on key facts (weather, place, price, advice) and give an opinion with فِي رَأْيِي … لِأَنَّ. DEVELOP: link ideas (أَوَّلًا، ثُمَّ، لِذٰلِكَ، مِنْ نَاحِيَةٍ …) and use three tenses. STRETCH: the website’s qualified judgement (عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ … شَرِيطَةَ أَنْ).
• Topic C grammar map on one slide, a newsletter to read, an information relay in pairs and self-correction phrases for speaking.
• Every task can be done at Core level — use it to spot what needs revising before the TC-L12 assessment.`,
  }),
  C.welcomeSlide(),
  C.journeySlide({ teach: 'Topic C map, tenses, linking and opinions.', wedo: 'Relay game, newsletter, build, fix and listen.', next: 'TC-L12' }),
  C.doNow({
    questions: [
      q('What does مِنْ وَجْهَةِ نَظَرِي mean?', ['from my point of view', 'in other words', 'to some extent'], 'Prepared at home: مِنْ وَجْهَةِ نَظَرِي = from my point of view.'),
      q('Which phrase means “in other words”?', ['بِعِبَارَةٍ أُخْرَى', 'سَأُعْطِي مِثَالًا', 'أَقْصِدُ أَنَّ'], 'Prepared at home: بِعِبَارَةٍ أُخْرَى = in other words.'),
      q('Complete: الطَّاوِلَةُ ___ مِنَ الخَشَبِ.', ['مَصْنُوعَةٌ', 'مَصْنُوعٌ', 'مَصْنُوعُونَ'], 'TC-L10: feminine → مَصْنُوعَةٌ.'),
      q('Which means “cheaper than”?', ['أَرْخَصُ مِنْ', 'أَغْلَى مِنْ', 'أَكْبَرُ مِنْ'], 'TC-L09.'),
      q('Which sentence is about the FUTURE?', ['سَيَكُونُ الطَّقْسُ مُمْطِرًا.', 'كَانَ الطَّقْسُ مُمْطِرًا.', 'الطَّقْسُ مُمْطِرٌ.'], 'TC-L03: سَـ = will.'),
    ],
    keyIdea: { text: 'Today we join Topic C together: say WHEN (tense), LINK your ideas and give a REASON.', ar: 'أَوَّلًا … ثُمَّ … لِذٰلِكَ … فِي رَأْيِي … لِأَنَّ …' },
    retrieves: 'Questions 1–2 test the phrases prepared at home (Flipped Learning follow-up). Questions 3–5 retrieve TC-L10, TC-L09 and TC-L03.',
  }),
  C.objectivesSlide(site.objectives, {
    core: ['I can find and pass on key facts about weather, places, prices and advice.', 'I can give my opinion with a reason: فِي رَأْيِي … لِأَنَّ …'],
    develop: ['I can use the past, present and future in one answer.', 'I can link my ideas: أَوَّلًا، ثُمَّ، لِذٰلِكَ، مِنْ نَاحِيَةٍ …'],
    stretch: ['I can give a qualified judgement (عَلَى الرَّغْمِ مِنْ أَنَّ … شَرِيطَةَ أَنْ).', 'I can correct myself while speaking.'],
  }, 2, 'The Core statements carry the Topic C focus (connect environmental, technological and urban issues across four skills; mixed tenses, cohesion, balanced opinion). The website objectives on the left are the D4-L11 objectives.'),
  C.keywordsSlide({
    text: 'A workshop day: we reuse Topic C and add 18 speaking and linking phrases in 3 groups. Learn the CORE phrases first.',
    groups: [
      { head: 'MAP', name: 'Topic C in one table' },
      { head: 'GROUP 1', name: 'Speaking phrases · 6' },
      { head: 'GROUP 2', name: 'Linking words · 6' },
      { head: 'GROUP 3', name: 'Opinions · 6' },
    ],
    bridge: [
      { ar: 'رَأْيٌ', urdu: 'رائے', tr: 'rāʾe', en: 'opinion' },
      { ar: 'نَظَرٌ', urdu: 'نظر', tr: 'naẓar', en: 'view, sight' },
      { ar: 'مِثَالٌ', urdu: 'مثال', tr: 'misāl', en: 'example' },
      { ar: 'دَلِيلٌ', urdu: 'دلیل', tr: 'dalīl', en: 'evidence, proof' },
      { ar: 'نَتِيجَةٌ', urdu: 'نتیجہ', tr: 'natīja', en: 'result' },
    ],
    notes: `URDU BRIDGE: رائے (opinion — فِي رَأْيِي), نظر (view — وَجْهَةُ نَظَرٍ = point of view), مثال (example — سَأُعْطِي مِثَالًا), دلیل (evidence — الدَّلِيلُ عَلَى ذٰلِكَ), نتیجہ (result — TC-L04 نَتِيجَةً لِذٰلِكَ).
Group 1 is the website D4-L11 “Speaking and self-correction” vocabulary; Groups 2–3 revise Topic C linking and opinion language (TC-L03, L05, L06) plus the website’s qualified judgement.`,
  }),
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Topic C map · the key structure of each lesson', title: 'Topic C in one table', ar: 'خُلَاصَةُ الوَحْدَةِ',
    cols: [{ label: 'Lessons', w: 2.3 }, { label: 'Key structure', w: 2.6 }, { label: 'Core example', w: 3.7, size: 20 }, { label: 'Stretch example', w: 3.73, size: 18 }],
    rows: [
      { core: true, cells: ['L01–L02 people, places, nature', 'place + compass point', { ar: 'مِصْرُ {k|فِي} شَمَالِ أَفْرِيقِيَا', sub: 'Egypt is in North Africa' }, { ar: 'تَتَمَيَّزُ المِنْطَقَةُ بِـ …', sub: 'the area is known for …' }] },
      { core: true, cells: ['L03 weather', 'weather + tense', { ar: '{k|سَ}يَكُونُ الطَّقْسُ مُمْطِرًا', sub: 'the weather will be rainy' }, { ar: 'تَهُبُّ الرِّيَاحُ وَتَسْقُطُ الأَمْطَارُ', sub: 'feminine agreement (website)' }] },
      { core: true, cells: ['L04–L05 environment', 'problem → solution', { ar: 'التَّلَوُّثُ {k|يُؤَدِّي إِلَى} الأَمْرَاضِ', sub: 'pollution leads to illness' }, { ar: 'يَجِبُ عَلَيْنَا أَنْ … لِكَيْ …', sub: 'we must … so that …' }] },
      { core: true, cells: ['L06–L07 digital, documents', 'verb + partner word', { ar: '{w|أُ}رْسِلُ رِسَالَةً {k|إِلَى} صَدِيقِي', sub: 'I send a message to my friend' }, { ar: 'تَمَّ حَجْزُ رِحْلَتِكَ', sub: 'your trip has been booked' }] },
      { core: true, cells: ['L08–L09 town, shopping', 'there is · “it” ending', { ar: '{w|تُ}وجَدُ مَكْتَبَةٌ · كَمْ ثَمَنُ{e|هَا}؟', sub: 'there is a library · how much is it?' }, { ar: 'أَرْخَصُ مِنْ · أَفْضَلُ قِيمَةً', sub: 'cheaper than · better value' }] },
      { core: true, cells: ['L10 materials', 'made of + agreement', { ar: 'الطَّاوِلَةُ مَصْنُوعَ{e|ةٌ} {k|مِنَ} الخَشَبِ', sub: 'the table is made of wood' }, { ar: '…، بَيْنَمَا …', sub: '…, whereas …' }] },
    ],
    notes: `TOPIC C MAP (3 min) — the one structure from each lesson that every student should own before TC-L12. Teacher-made summary of Topic C lessons 1–10 (all examples are from those lessons).
● 20s: students read the Core column silently. ↔ Then pairs test each other: A says the English, B says the Arabic.
Traffic-light it: students put ✓ next to the rows they are confident with and ? next to the ones to revise — this becomes their TC-L12 revision list.
Colour reminder: blue = WHO, teal = key word, pink = ending.`,
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · website D4-L11 · speaking and self-correction', title: 'Phrases for speaking', ar: 'عِبَارَاتُ التَّحَدُّثِ',
    items: [
      { n: 1, ar: 'مِنْ وَجْهَةِ نَظَرِي', en: 'from my point of view', tr: 'min waj-hati na-ẓa-rī', tag: 'opinion', core: true },
      { n: 2, ar: 'سَأُعْطِي مِثَالًا', en: 'I will give an example', tr: 'sa-ʾuʿ-ṭī mi-thā-lan', tag: 'develop', core: true },
      { n: 3, ar: 'بِعِبَارَةٍ أُخْرَى', en: 'in other words', tr: 'bi-ʿi-bā-ra-tin ukh-rā', tag: 'rephrase', core: true },
      { n: 4, ar: 'أَقْصِدُ أَنَّ', en: 'what I mean is', tr: 'aq-ṣi-du an-na', tag: 'rephrase' },
      { n: 5, ar: 'لِأُصَحِّحْ ذٰلِكَ', en: 'let me correct that', tr: 'li-ʾu-ṣaḥ-ḥiḥ dhā-lik', tag: 'self-correction', core: true, note: 'Use it when you notice a mistake!' },
      { n: 6, ar: 'إِلَى حَدٍّ مَا', en: 'to some extent', tr: 'i-lā ḥad-din mā', tag: 'balance' },
    ],
    notes: `KEY WORDS — website D4-L11 “Speaking and self-correction”. These make a short answer sound developed.
Teach لِأُصَحِّحْ ذٰلِكَ with enthusiasm: correcting yourself is a SKILL, not a failure (website mission: المَشْرُوعُ يَبْدَأُ فِي يُونْيُو — لِأُصَحِّحْ ذٰلِكَ — فِي سِبْتَمْبَرَ).
SEND / EAL: a student may point to the phrase on screen instead of saying it at first.`,
  },
  {
    type: 'formula', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 1 · cohesion · linking words (Topic C)', title: 'Link your ideas', ar: 'أَدَوَاتُ الرَّبْطِ',
    cols: [
      { label: 'order', ar: 'التَّرْتِيبُ', color: '1B3B6F', pale: 'EEF3FA' },
      { label: 'reason and result', ar: 'السَّبَبُ وَالنَّتِيجَةُ', color: '0E7C86', pale: 'E3F2F3' },
      { label: 'contrast and balance', ar: 'المُقَارَنَةُ', color: '8A6D1E', pale: 'F8F0DC' },
    ],
    rows: [
      { en: 'first · because · but', cells: ['{k|أَوَّلًا}', '{k|لِأَنَّ}', '{k|لٰكِنَّ}'] },
      { en: 'then · so, therefore · whereas', cells: ['{k|ثُمَّ}', '{k|لِذٰلِكَ}', '{k|بَيْنَمَا}'] },
      { en: 'also · because of · on the one hand … on the other', cells: ['{k|كَمَا} · {k|أَيْضًا}', '{k|بِسَبَبِ}', '{k|مِنْ نَاحِيَةٍ} … {k|وَمِنْ نَاحِيَةٍ أُخْرَى}'] },
      { en: 'finally · leads to · although', cells: ['{k|أَخِيرًا}', '{k|يُؤَدِّي إِلَى}', '{k|عَلَى الرَّغْمِ مِنْ أَنَّ}'] },
    ],
    foot: 'Core: one word from each column. Develop: two. Stretch: the bottom row.',
    notes: `GRAMMAR PART 1 — cohesion (Topic C grammar focus). All linking words come from Topic C lessons: لِأَنَّ / لٰكِنَّ (TC-L03), بِسَبَبِ / يُؤَدِّي إِلَى (TC-L04), لِذٰلِكَ (website models), مِنْ نَاحِيَةٍ … (TC-L06), بَيْنَمَا (TC-L10), عَلَى الرَّغْمِ مِنْ أَنَّ (website D4-L11).
Remember: after لِأَنَّ and لٰكِنَّ the noun ends in -a (لِأَنَّ الطَّقْسَ …) — Stretch detail only.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · mixed tenses', title: 'Yesterday, today, tomorrow', ar: 'الأَزْمِنَةُ',
    cols: [{ label: 'Time', w: 2.1 }, { label: 'Time word', w: 2.2, size: 20 }, { label: 'Weather (L03)', w: 2.7, size: 20 }, { label: 'Town (L08)', w: 2.7, size: 20 }, { label: 'Me (L06–L07)', w: 2.63, size: 20 }],
    rows: [
      { core: true, cells: ['before (past)', { ar: '{k|أَمْسِ}', sub: 'yesterday' }, { ar: '{k|كَانَ} الجَوُّ بَارِدًا', sub: 'it was cold' }, { ar: '{k|كَانَ} الحَيُّ هَادِئًا', sub: 'the area was quiet' }, { ar: 'أَرْسَلْ{w|تُ} رِسَالَةً', sub: 'I sent a message' }] },
      { core: true, cells: ['now (present)', { ar: '{k|اليَوْمَ}', sub: 'today' }, { ar: 'الجَوُّ مُشْمِسٌ', sub: 'it is sunny' }, { ar: 'تُوجَدُ حَافِلَاتٌ جَدِيدَةٌ', sub: 'there are new buses' }, { ar: '{w|أُ}رْسِلُ رِسَالَةً', sub: 'I send a message' }] },
      { core: true, cells: ['later (future)', { ar: '{k|غَدًا}', sub: 'tomorrow' }, { ar: '{k|سَ}يَكُونُ الجَوُّ مُمْطِرًا', sub: 'it will be rainy' }, { ar: '{k|سَ}تُبْنَى مَكْتَبَةٌ', sub: 'a library will be built' }, { ar: '{k|سَ}أُرْسِلُ رِسَالَةً', sub: 'I will send a message' }] },
    ],
    notes: `GRAMMAR PART 2 — mixed tenses (Topic C grammar focus). One simple rule for every topic:
• past: كَانَ (+ adjective ending -an: بَارِدًا) or the past verb with ـتُ = I.
• present: no extra word — just the sentence.
• future: سَـ in front of the present verb (سَيَكُونُ · سَأُرْسِلُ).
Core: say one column (e.g. Weather) across all three times. Develop: mix two columns in one answer. Stretch: column 3 row 3 is a future passive (سَتُبْنَى — TC-L08).
Website game: فِي الشَّمَالِ سَيَكُونُ الطَّقْسُ مُمْطِرًا.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 3 · balanced opinion', title: 'Give an opinion that is fair', ar: 'رَأْيٌ مُتَوَازِنٌ',
    cards: [
      { chip: 'CORE · OPINION + REASON', color: '2E8B57', head: 'فِي رَأْيِي … لِأَنَّ', big: 'فِي رَأْيِي، النَّقْلُ العَامُّ مُفِيدٌ لِأَنَّهُ يُقَلِّلُ التَّلَوُّثَ', en: 'In my opinion, public transport is useful because it reduces pollution.', clue: 'Opinion + لِأَنَّ + one reason.' },
      { chip: 'DEVELOP · TWO SIDES', color: 'C9780A', head: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى', big: 'مِنْ نَاحِيَةٍ هُوَ سَرِيعٌ، وَمِنْ نَاحِيَةٍ أُخْرَى هُوَ غَالٍ', en: 'On the one hand it is fast; on the other hand it is expensive.', clue: 'TC-L06: a benefit AND a risk.' },
      { chip: 'STRETCH · QUALIFIED', color: 'B83227', head: 'عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …', big: 'التِّقْنِيَّةُ مُفِيدَةٌ إِلَى حَدٍّ مَا، شَرِيطَةَ أَنْ تُطَبَّقَ بِمَسْؤُولِيَّةٍ', en: 'Technology is useful to some extent, provided it is used responsibly.', clue: 'Website: say how far and on what condition.' },
    ],
    error: { text: 'Website: a concession must be followed by a REAL contrast — not the same idea again.', pairs: [['… مُكَلِّفٌ، فَإِنَّهُ يُقَلِّلُ الهَدْرَ', '… مُكَلِّفٌ، فَهُوَ مُكَلِّفٌ']] },
    notes: `GRAMMAR PART 3 — balanced opinion (Topic C grammar focus). Card 1 teacher-made from TC-L04/L05 language; card 2 is the TC-L06 structure; card 3 is the website D4-L11 answer (final quiz) — Stretch.
Website teaching point: “${site.teach[1].text}”
Website common error: “${G.common_error}”`,
  },
  {
    type: 'ruleRows', stage: 'teach', flex: true, eyebrow: 'Grammar focus · Part 4 · website examples · FLEX · Stretch', title: 'The four website rules with examples', ar: 'أَمْثِلَةُ القَوَاعِدِ',
    rows: G.rules.map((r) => ({ title: r.heading, formula: r.formula, examples: r.examples })),
    notes: `WEBSITE GRAMMAR RULES AND EXAMPLES (FLEX — Stretch or homework): climate and weather, problem + cause + passive, solution + purpose, qualified judgement — one model sentence for each. Website overview: “${G.overview}”`,
  },
  C.quickCheck([
    q('Which sentence is in the PAST?', ['كَانَ الجَوُّ بَارِدًا أَمْسِ.', 'سَيَكُونُ الجَوُّ بَارِدًا غَدًا.', 'الجَوُّ بَارِدٌ اليَوْمَ.'], 'كَانَ + أَمْسِ = past.'),
    q('Which word means “so, therefore”?', ['لِذٰلِكَ', 'لٰكِنَّ', 'أَوَّلًا'], 'لِذٰلِكَ introduces a result.'),
    fromSite(G.quiz[0]),
    fromSite(G.quiz[3]),
  ], 'questions 1–2 teacher-made (Topic C grammar focus); questions 3–4 are website grammar quiz questions 1 and 4.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy · information relay', title: 'Watch me pass on the news', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Weather (future)', ar: '{k|أَوَّلًا}، {k|سَ}يَكُونُ الطَّقْسُ مُمْطِرًا فِي الشَّمَالِ', think: 'Website game. سَـ = will.' },
      { head: 'Environment', ar: '{k|ثُمَّ} تُخَطِّطُ المَدِينَةُ لِزِيَادَةِ مَرَاكِزِ التَّدْوِيرِ', think: 'Website game — the city plan.' },
      { head: 'Technology advice', ar: '{k|كَمَا} تَنْصَحُ الرِّسَالَةُ بِكَلِمَةِ مُرُورٍ قَوِيَّةٍ', think: 'Website game — stay safe online.' },
      { head: 'My opinion', ar: '{k|فِي رَأْيِي} هٰذِهِ أَخْبَارٌ مُفِيدَةٌ {k|لِأَنَّ} …', think: 'Opinion + reason.' },
    ],
    legend: ['k'], legendLabels: { k: 'LINKING / KEY WORD' },
    model: '{k|أَوَّلًا}، {k|سَ}يَكُونُ الطَّقْسُ مُمْطِرًا فِي الشَّمَالِ. {k|ثُمَّ} تُخَطِّطُ المَدِينَةُ لِزِيَادَةِ مَرَاكِزِ إِعَادَةِ التَّدْوِيرِ. {k|كَمَا} تَنْصَحُ الرِّسَالَةُ بِحِمَايَةِ الحِسَابِ بِكَلِمَةِ مُرُورٍ قَوِيَّةٍ. {k|فِي رَأْيِي} هٰذِهِ أَخْبَارٌ مُفِيدَةٌ {k|لِأَنَّهَا} تُسَاعِدُنَا.',
    modelEn: 'First, the weather will be rainy in the north. Then the city is planning to increase recycling centres. Also, the message advises protecting your account with a strong password. In my opinion this is useful news because it helps us.',
    notes: `I DO (3 min) — the website application “Topic C information relay”: combine a forecast, an environmental plan and a digital message, then pass them on. Teacher models with a think-aloud; students COPY.
Step 1 — “Start with أَوَّلًا. The forecast is about tomorrow → سَيَكُونُ.”
Step 2 — “Next fact: ثُمَّ …”
Step 3 — “Add a third: كَمَا (also) …”
Step 4 — “Finish with MY view and a reason: فِي رَأْيِي … لِأَنَّهَا تُسَاعِدُنَا.”
All three facts are the website game sentences.`,
  },
  {
    type: 'models', stage: 'ido', min: 1, eyebrow: 'I do · model sentences from the website', title: 'Four sentences to borrow', ar: 'جُمَلٌ نَمُوذَجِيَّةٌ',
    rows: [
      { ar: game.items[0].sentence, en: 'In the north the weather will be rainy.', tip: 'Website game — future weather (Core).' },
      { ar: site.patterns[1].ar, en: 'The air is polluted because of car exhaust, which leads to breathing illnesses.', tip: site.patterns[1].tip },
      { ar: site.patterns[2].ar, en: 'The government must expand public transport so that it reduces emissions.', tip: site.patterns[2].tip },
      { ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ التِّقْنِيَّةَ مُكَلِّفَةٌ، فَإِنَّهَا مُفِيدَةٌ شَرِيطَةَ أَنْ تُطَبَّقَ بِمَسْؤُولِيَّةٍ.', en: 'Although the technology is expensive, it is useful provided it is applied responsibly.', tip: 'Website rule 4 — a qualified judgement (Stretch).' },
    ],
    notes: `MODEL SENTENCES (1 min) — website game and D4-L11 patterns. Students copy TWO that are useful for them.
• Core: copy 1 and change the place / weather (فِي الجَنُوبِ سَيَكُونُ الطَّقْسُ مُشْمِسًا). • Develop: copy 2 or 3. • Stretch: copy 4 and write your own about the internet or cars.`,
  },
  C.gameSlide(game, {
    en: ['In the north the weather will be rainy.', 'The city is planning to increase recycling centres.', 'The message advises protecting the account with a strong password.'],
    icons: [[['fa6', 'FaCloudRain', '1D5FBF'], ['fa6', 'FaMapLocationDot', '2E8B57']], [['fa6', 'FaCity', '1B3B6F'], ['fa6', 'FaRecycle', '2E8B57']], [['fa6', 'FaMobileScreen', '5A6472'], ['fa6', 'FaLock', 'C77700']]],
    labels: ['weather + map', 'city + recycling', 'phone + lock'],
    order: [2, 0, 1],
    notes: 'Key words to spot: الشَّمَالِ + مُمْطِرًا (TC-L01, L03), إِعَادَةِ التَّدْوِيرِ (TC-L05), كَلِمَةِ مُرُورٍ (TC-L06). Point out: one sentence from each part of Topic C.',
  }),
  {
    type: 'passage', stage: 'wedo', min: 2, eyebrow: 'We do · read the newsletter · all of Topic C', title: 'Our town newsletter', ar: 'نَشْرَةُ مَدِينَتِنَا',
    docLines: newsletter,
    glossaryHead: 'KEY WORDS',
    glossary: [
      ['نَشْرَةٌ', 'newsletter'], ['الأُسْبُوعُ القَادِمُ', 'next week'], ['الجَنُوبُ', 'the south'], ['البَلَدِيَّةُ', 'the town council'], ['إِعَادَةُ التَّدْوِيرِ', 'recycling'],
      ['حَافِلَاتٌ', 'buses'], ['اِحْمِ', 'protect!'], ['لَا تُشَارِكْهَا', 'don’t share it'], ['المُحَرِّرُ', 'the editor'], ['تَتَحَسَّنُ', 'is improving'],
    ],
    notes: `READ THE NEWSLETTER (2 min) — Topic C focus “Connect environmental, technological and urban issues”. Teacher-made: every line uses one Topic C lesson — weather and compass points (L01, L03), environment (L05, website game), town (L08), shopping (L09), digital safety (L06, website game), opinion (L11).
Read it aloud once while students follow. SEND: cover the text and uncover one line at a time; Core students use the glossary.
Ask: which LESSON does each line come from? (A great Core revision question.)
Translation for the teacher: Our town newsletter — next week. Weather: it will be rainy in the north and sunny in the south. Environment: the council is planning to increase recycling centres. Transport: there are new buses next to the train station. Shopping: in the market there is a 20% discount on books. Digital safety: protect your account with a strong password, and do not share it with anyone. Editor’s opinion: our town is improving, but it needs more green spaces.`,
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · newsletter questions', title: 'Pass on the facts', ar: 'اِسْتَخْرِجِ المَعْلُومَاتِ',
    seed: 7,
    questions: [
      q('What will the weather be like in the south?', ['Sunny', 'Rainy', 'Windy'], 'وَمُشْمِسًا فِي الجَنُوبِ.'),
      q('What is the council planning?', ['More recycling centres', 'A new market', 'More car parks'], 'تُخَطِّطُ البَلَدِيَّةُ لِزِيَادَةِ مَرَاكِزِ إِعَادَةِ التَّدْوِيرِ.'),
      q('Where are the new buses?', ['Next to the train station', 'Opposite the market', 'In the north'], 'بِجَانِبِ مَحَطَّةِ القِطَارِ.'),
      q('What has a 20% discount?', ['Books', 'Buses', 'Phones'], 'خَصْمٌ عِشْرُونَ فِي المِئَةِ عَلَى الكُتُبِ.'),
      q('What is the digital advice?', ['Use a strong password and don’t share it.', 'Buy a new phone.', 'Send fewer messages.'], 'اِحْمِ حِسَابَكَ بِكَلِمَةِ مُرُورٍ قَوِيَّةٍ، وَلَا تُشَارِكْهَا.'),
    ],
    side: { kind: 'core', label: 'CORE', text: 'Find the KEY WORD first.\nsouth? الجَنُوب\ncouncil? البَلَدِيَّة\nbuses? حَافِلَات\npassword? كَلِمَة مُرُور' },
    answerSlide: { eyebrow: 'We do · newsletter answers', title: 'Newsletter: answers', ar: 'الإِجَابَاتُ' },
    notes: 'NEWSLETTER questions (teacher-made). Students type five letters in the chat. Core: questions 1, 3 and 4. Stretch: does the editor give a balanced opinion? Improve it with مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى.',
    answerNotes: 'Reveal. Then the RELAY (next speaking slide) uses the same newsletter: A reads one line silently, then tells B in their own Arabic; B writes the fact in English.',
  },
  {
    type: 'builder', stage: 'wedo', min: 3, eyebrow: 'We do · guided practice · website sentence builder', title: 'Build the chain', ar: 'اِبْنِ السِّلْسِلَةَ',
    rows: [
      { en: 'The air is polluted because of weak monitoring, which threatens people’s health.', cols: [['تُلَوَّثُ المِيَاهُ', 'يُلَوَّثُ الهَوَاءُ'], ['بِسَبَبِ ضَعْفِ الرَّقَابَةِ،', 'بِسَبَبِ التَّوَسُّعِ غَيْرِ المُخَطَّطِ،'], ['مِمَّا يُضْعِفُ التَّنَوُّعَ الحَيَوِيَّ.', 'مِمَّا يُهَدِّدُ صِحَّةَ السُّكَّانِ.']], key: [1, 0, 1], why: 'Problem (passive) + cause + result — website builder 1.' },
      { en: 'We must manage waste better so that we reduce environmental harm.', cols: [['يَجِبُ عَلَيْنَا أَنْ', 'مِنَ الضَّرُورِيِّ أَنْ'], ['نُرَشِّدَ اسْتِهْلَاكَ المِيَاهِ', 'نُحَسِّنَ إِدَارَةَ النُّفَايَاتِ'], ['لِكَيْ نُقَلِّلَ الأَضْرَارَ البِيئِيَّةَ.', 'لِكَيْ نَحْمِيَ المَوَارِدَ.']], key: [0, 1, 0], why: 'Obligation + action + purpose — website builder 2.' },
      { en: 'Although change needs time, it remains necessary, with regular review of the results.', cols: [['عَلَى الرَّغْمِ مِنْ أَنَّ التِّقْنِيَّةَ مُكَلِّفَةٌ،', 'عَلَى الرَّغْمِ مِنْ أَنَّ التَّغْيِيرَ يَحْتَاجُ إِلَى وَقْتٍ،'], ['فَإِنَّ التَّغْيِيرَ يَظَلُّ ضَرُورِيًّا،', 'فَإِنَّ التِّقْنِيَّةَ قَدْ تُقَدِّمُ حُلُولًا مُهِمَّةً،'], ['مَعَ مُرَاجَعَةِ النَّتَائِجِ بِانْتِظَامٍ.', 'شَرِيطَةَ أَنْ تُوضَعَ ضَوَابِطُ وَاضِحَةٌ.']], key: [1, 0, 0], why: 'Concession + judgement + condition — website builder 3 (Stretch).' },
    ],
    answerSlide: { min: 0, eyebrow: 'We do · sentence builder answers', title: 'Check your chains', ar: 'تَحَقَّقْ مِنْ جُمَلِكَ' },
    notes: `WE DO — the website sentence builders (3 min), cut to two options per column, set to one target sentence each.
Students choose ONE box per column (start from Column 1 on the right) and type the letters. ↔ Rehearse 30s first.
Core: sentence 2 (they know يَجِبُ أَنْ and لِكَيْ from TC-L05, TC-L08). Develop: 1 and 2. Stretch: all three, then build a second, different chain from the website options.`,
  },
  {
    type: 'sorter', stage: 'wedo', min: 2, eyebrow: 'We do · Topic C sorter', title: 'Which part of Topic C?', ar: 'صَنِّفْ',
    categories: ['Environment', 'Technology', 'Town and shopping'],
    items: [
      { ar: 'كَلِمَةُ مُرُورٍ', cat: 1 }, { ar: 'التَّلَوُّثُ', cat: 0 }, { ar: 'مُسْتَشْفًى', cat: 2 }, { ar: 'إِعَادَةُ التَّدْوِيرِ', cat: 0 },
      { ar: 'خَصْمٌ', cat: 2 }, { ar: 'أُرْسِلُ رِسَالَةً', cat: 1 }, { ar: 'الاِحْتِبَاسُ الحَرَارِيُّ', cat: 0 }, { ar: 'مَحَطَّةُ القِطَارِ', cat: 2 }, { ar: 'أُحَمِّلُ صُورَةً', cat: 1 },
    ],
    answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — Topic C sorter (teacher-made, 2 min, all students). Every word is from Topic C lessons 4–9. Stretch: make ONE sentence that joins two columns (e.g. يُؤَدِّي التَّلَوُّثُ إِلَى زِيَارَاتٍ أَكْثَرَ لِلْمُسْتَشْفَى).',
  },
  C.morePractice([fromSite(G.quiz[1], { n: 5 }), fromSite(G.quiz[2], { n: 6 }), fromSite(G.quiz[5], { n: 7 }), fromSite(G.quiz[6], { n: 8 })], 'website quiz 2, 3, 6, 7'),
  C.repairSlide(site, [
    'What is wrong? After أَنْ and لِكَيْ, what is the last vowel on the verb?',
    'What is wrong? أَنْ or أَنَّ before a sentence that reports a fact?',
    'What is wrong? Does the second half really contrast with the first?',
  ]),
  C.listening(site, {
    coreTip: 'Listen twice. Core: questions 1, 2 and 4 — listen for النَّقْلِ العَامِّ (public transport), الانْبِعَاثَاتِ (emissions) and شُحِّ المِيَاهِ (water scarcity).',
    routes: 'Core: questions 1, 2, 4. Develop / Stretch: all 6.',
    gloss: [
      ['فِي المُحَادَثَةِ الأُولَى، وَصَفَتْ مَرْيَمُ مَشْرُوعًا لِتَوْسِيعِ النَّقْلِ العَامِّ.', 'In the first conversation, Maryam described a project to expand public transport.'],
      ['قَالَتْ إِنَّهُ سَيُقَلِّلُ الانْبِعَاثَاتِ، لٰكِنَّهَا أَضَافَتْ أَنَّ التَّكْلِفَةَ الأُولَى مُرْتَفِعَةٌ.', 'She said it will reduce emissions, but she added that the initial cost is high.'],
      ['وَفِي المُحَادَثَةِ الثَّانِيَةِ، تَحَدَّثَ خَالِدٌ عَنْ شُحِّ المِيَاهِ.', 'In the second conversation, Khalid talked about water scarcity.'],
      ['أَوَّلًا قَالَ إِنَّ الاسْتِهْلَاكَ انْخَفَضَ، ثُمَّ صَحَّحَ نَفْسَهُ وَقَالَ إِنَّهُ ارْتَفَعَ بِنِسْبَةِ ٩٪.', 'First he said consumption fell, then he corrected himself and said it rose by 9%.'],
      ['وَأَكَّدَ أَنَّ الحَلَّ يَحْتَاجُ إِلَى التِّقْنِيَّةِ وَتَغْيِيرِ السُّلُوكِ مَعًا.', 'He stressed that the solution needs technology and behaviour change together.'],
    ],
  }),
  C.speakingSlide(site, {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'اِقْرَأْ سَطْرًا مِنَ النَّشْرَةِ، ثُمَّ قُلْهُ لِزَمِيلِكَ.' },
      { route: 'core', ar: site.speaking.prompts[0] },
      { route: 'develop', ar: site.speaking.prompts[1] },
      { route: 'stretch', ar: site.speaking.prompts[2] },
    ],
    stems: [
      { route: 'core', ar: 'فِي رَأْيِي، ______ لِأَنَّ ______ .' },
      { route: 'develop', ar: 'مِنْ نَاحِيَةٍ ______ ، وَمِنْ نَاحِيَةٍ أُخْرَى ______ .' },
      { route: 'stretch', ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّ ______ .' },
      { route: 'sum', ar: 'قَالَ / قَالَتْ إِنَّ ______ .' },
    ],
    modelEn: ['What is the strongest part of your Arabic, and what do you need to improve?', 'Question'],
    notes: `INFORMATION RELAY (website application “Topic C information relay”): A reads ONE line of the newsletter silently, then passes it on to B in Arabic without showing it; B writes the fact in English. Swap. 3 rounds.
Then the discussion prompts. Core prompt 1 is teacher-made for the relay. Encourage لِأُصَحِّحْ ذٰلِكَ when students notice a mistake — praise every self-correction.
Pastoral: Resilience point for a student who self-corrects aloud.`,
  }),
  C.routesSlide(site, {
    core: { amount: '4 sentences', how: 'Pass on three facts from the newsletter (first …, then …, also …) and add your opinion with a reason.' },
    develop: { amount: '6–8 sentences', how: 'Write about your town: one sentence in the past, one now and one in the future, with three linking words and a two-sided opinion.' },
    stretch: { amount: '130–140 words', how: 'Website writing task: climate, a problem, a solution and a qualified technology judgement; checklist and phrase bank on the Stretch slide.' },
  }),
  C.framesSlide({
    core: [
      { en: 'First, …', ar: 'أَوَّلًا، ______ .' },
      { en: 'Then …', ar: 'ثُمَّ ______ .' },
      { en: 'Also …', ar: 'كَمَا ______ .' },
      { en: 'In my opinion, … because …', ar: 'فِي رَأْيِي، ______ لِأَنَّ ______ .' },
      { en: 'Tomorrow it will be …', ar: 'غَدًا سَيَكُونُ الطَّقْسُ ______ .' },
    ],
    develop: [
      { en: 'In the past, my town was …', ar: 'فِي المَاضِي كَانَتْ مَدِينَتِي ______ .' },
      { en: 'Now there is …', ar: 'الآنَ تُوجَدُ ______ .' },
      { en: 'In the future, … will …', ar: 'فِي المُسْتَقْبَلِ سَـ ______ .' },
      { en: 'On the one hand … on the other …', ar: 'مِنْ نَاحِيَةٍ ______ ، وَمِنْ نَاحِيَةٍ أُخْرَى ______ .' },
      { en: 'So we must …', ar: 'لِذٰلِكَ يَجِبُ أَنْ ______ .' },
    ],
    bank: ['مُمْطِرًا', 'مُشْمِسًا', 'التَّلَوُّثُ', 'إِعَادَةُ التَّدْوِيرِ', 'حَافِلَاتٌ', 'مَكْتَبَةٌ', 'كَلِمَةُ مُرُورٍ', 'مُفِيدٌ', 'غَالٍ', 'مَسَاحَاتٌ خَضْرَاءُ', 'نُقَلِّلَ', 'نَحْمِيَ'],
  }),
  C.stretchSlide(site, [
    ['يَسُودُ مَنَاخٌ جَافٌّ فِي …', 'a dry climate prevails in …'],
    ['تَشِحُّ المِيَاهُ نَتِيجَةً لِـ …', 'water becomes scarce as a result of …'],
    ['يَجِبُ عَلَى الحُكُومَاتِ أَنْ … لِكَيْ …', 'governments must … so that …'],
    ['وَعَلَاوَةً عَلَى ذٰلِكَ، …', 'furthermore, …'],
    ['عَلَى الرَّغْمِ مِنْ أَنَّ …، فَإِنَّهَا قَدْ …', 'although …, it may …'],
    ['فِي رَأْيِي، الحَلُّ النَّاجِحُ يَجْمَعُ بَيْنَ …', 'in my view, a successful solution combines …'],
  ]),
  C.modelSlide(site,
    'This unit dealt with important issues such as climate change, water scarcity and artificial intelligence. A dry climate prevails in many regions, and water is becoming scarce as a result of low rainfall and rising consumption. So governments must invest in reusing water so that they protect resources. Furthermore, artificial intelligence can be used to monitor waste. Although this technology is expensive, it may save money in the long term. In my opinion, a successful solution combines technology, policy and responsible behaviour.',
    ['يَسُودُ', 'نَتِيجَةً لِـ', 'يَجِبُ عَلَى … أَنْ … لِكَيْ', 'عَلَى الرَّغْمِ مِنْ أَنَّ'],
    'Core students find the linking words (لِذٰلِكَ، وَعَلَاوَةً عَلَى ذٰلِكَ، فِي رَأْيِي); Stretch find the passive (يُسْتَخْدَمَ) and explain the qualified judgement.'),
  C.selfCheckSlide([
    { route: 'core', text: 'I can find and pass on key facts (weather, place, price, advice).' },
    { route: 'core', text: 'I can give my opinion with a reason: فِي رَأْيِي … لِأَنَّ …' },
    { route: 'develop', text: 'I can use the past, present and future in one answer.' },
    { route: 'develop', text: site.success[3] },
    { route: 'stretch', text: site.success[1] },
  ]),
  C.exitTicket([
    q('Which word means “so, therefore”?', ['لِذٰلِكَ', 'لِأَنَّ', 'بَيْنَمَا'], 'لِذٰلِكَ introduces a result.'),
    fromSite(site.final[1]),
    fromSite(site.final[3]),
  ], site.final.length),
  C.prepSlide({
    ...NEXT,
    words: [['الشَّمَالُ', 'the north', 'TC-L01'], ['الطَّقْسُ', 'the weather', 'TC-L03'], ['التَّلَوُّثُ', 'pollution', 'TC-L04'], ['كَلِمَةُ مُرُورٍ', 'password', 'TC-L06'], ['مُسْتَشْفًى', 'hospital', 'TC-L08']],
    questionEn: 'Revise your ? rows from the Topic C map and write one sentence for each.',
    questionAr: 'رَاجِعْ خُلَاصَةَ الوَحْدَةِ.',
    homework: {
      core: 'Website · TC-L11 · play “Information Relay”, then revise the Topic C map (your ? rows).',
      develop: 'Write 6–8 sentences about your town in three tenses with three linking words.',
      stretch: 'Website · TC-L11 · the application mission, then the 130–140-word writing task.',
    },
    wordsSource: 'Next lesson is the Topic C review and assessment — these five words each open a different Topic C lesson. Revise the lesson around each one.',
  }),
  C.closeSlide(NEXT),
];

module.exports = { meta, slides };
