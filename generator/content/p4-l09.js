'use strict';
/* P4-L09 · Writing — The Built and Natural World (Paper 4 Extended Writing) — website: Pathways › Progression › P4 › P4-L09 (writing-skills lesson: a
 * 145–160-word environmental article in four paragraphs carrying all three subjunctive triggers — purpose لِكَيْ, volition يَهْدِفُ إِلَى / يَرْجُو / يَخْشَى أَنْ,
 * necessity يَنْبَغِي / يَتَطَلَّبُ / مِنَ الضَّرُورِيِّ أَنْ — plus a past-perfect opening, both conditionals, reported speech and formal connectors).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live builder and mission used as published, with waṣl alif shown
 * without a kasra, لِكَيْ always written with its sukūn, the connector spelt عِلَاوَةً (website: عَلَاوَةً) and pattern tip 2 corrected to yahdifu ILĀ an (the
 * website’s own mistake 3). The website visual game (forest, mountain …) is beginner-level and not used. Sorter headings in transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P4')({
  n: 9, fileTitle: 'Writing_Built_and_Natural_World_Paper_4', chip: 'Writing Skills',
  title: 'Writing — The Built and Natural World (Paper 4 Extended Writing)', arabic: 'الكِتَابَةُ — العَالَمُ المَبْنِيُّ وَالطَّبِيعِيُّ (كِتَابَةٌ مُوَسَّعَةٌ)',
  focus: 'Plan and write a 145–160-word environmental article that carries all three triggers — li-kay (purpose), yahdifu ilā an / yarjū an (volition), yanbaghī an (necessity) — with a kāna qad opening, both conditionals, a cited expert and formal connectors.',
  icon: 'FaPenNib', iconSet: 'fa6',
});

const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const hs = (she) => ({ tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: she }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ').replace(/عَلَاوَةً/g, 'عِلَاوَةً'));
const site = fix(D.site('P4-L09'));
const RH = [['Purpose', 'li-kay + verb in -a'], ['Volition', 'yahdifu ilā an / yarjū an / yakhshā an + verb in -a'], ['Necessity', 'yanbaghī / yataṭallabu / min al-ḍarūrī an + verb in -a'], ['Conditionals and narrative', 'idhā … sa- · law … la- · kāna qad']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P4-L09', {
  support: `• WRITING-SKILLS LESSON (IGCSE Paper 4 style): the website task is a 145–160-word environmental article that brings together P4-L01 to P4-L08 and rehearses the P4 writing assessment.
• Core: the four-paragraph plan with one sentence per paragraph, each trigger labelled (website Core). Develop: expand to 145 words with all three triggers marked. Stretch: 160 words with both conditionals, the past perfect and reported speech.
• The website’s Range checklist gives a separate mark to purpose, volition and necessity — so one of EACH, not three li-kay. (This is the course’s own checklist; Cambridge rewards range and accuracy in general.)
• Accuracy first: the website calls the final -a “the single highest accuracy criterion in P4”. Students circle every verb after a trigger before handing in.
• Faith link (optional): «إِنَّ اللّٰهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ» (al-Bayhaqī; graded ḥasan by al-Albānī) — Allah loves that when you do a job you perfect it. Notice: أَنْ يُتْقِنَهُ!`,
  teach: 'The four-paragraph plan, three triggers = three Range marks, both conditionals with a cited expert, the Range checklist.',
  wedo: 'Upgrade plain sentences, build an article line, sort purpose / volition / necessity.',
  next: { nextCode: 'P4-L10', nextTitle: 'Listening — Built and Natural World Texts', nextAr: 'الاسْتِمَاعُ — نُصُوصُ العَالَمِ المَبْنِيِّ وَالطَّبِيعِيِّ' },
  objectives: ['Plan a four-paragraph environmental article.', 'Use li-kay (purpose), a volition verb and a necessity expression — one of each.', 'Add a kāna qad opening, both conditionals and reported speech.', 'Reach 145–160 words with nine or more structures.'],
  rulesAr: 'تَرْكِيبُ النِّطَاقِ بِالمُسَبِّبَاتِ الثَّلَاثَةِ',
  ruleEx: [['نَسْتَثْمِرُ فِي الطَّاقَةِ النَّظِيفَةِ لِكَيْ نَحْمِيَ الأَجْيَالَ القَادِمَةَ'], ['يَهْدِفُ المَشْرُوعُ إِلَى أَنْ يُقَلِّلَ الانْبِعَاثَاتِ', 'نَخْشَى أَنْ يَتَفَاقَمَ التَّلَوُّثُ'], ['يَنْبَغِي أَنْ نَسْتَثْمِرَ فِي البُنْيَةِ التَّحْتِيَّةِ', 'مِنَ الضَّرُورِيِّ أَنْ نُحَافِظَ عَلَى التُّرَاثِ'], ['إِذَا اسْتَثْمَرْنَا اليَوْمَ، سَنَحْمِي الغَدَ', 'لَوْ خَطَّطْنَا مُبَكِّرًا، لَتَجَنَّبْنَا الكَارِثَةَ']],
  doNow: {
    questions: [
      q('What does الحُجَّةُ البِيئِيَّةُ mean?', ['the environmental argument', 'an environmental law', 'a green building'], 'Prepared at home (P4-L08).'),
      q('What does التَّشْخِيصُ mean?', ['diagnosis', 'decoration', 'description'], 'Prepared at home (P4-L08).'),
      q('What does الحَلُّ المُقْتَرَحُ mean?', ['the proposed solution', 'the final answer', 'the main problem'], 'Prepared at home (P4-L08).'),
      q('Which verb is subjunctive?', ['يَتَطَلَّبُ الوَضْعُ أَنْ تَتَعَاوَنَ الدُّوَلُ.', 'تَسْتَنْفِدُ المِنْطَقَةُ مِيَاهَهَا.', 'تَعَاوَنَتِ الدُّوَلُ.'], 'P4-L08: trigger + -a.'),
      q('A necessity subjunctive tells the reader the action is …', ['required but not yet done', 'already finished', 'impossible'], 'P4-L08: maṭlūb lā munjaz.'),
    ],
    keyIdea: { text: 'Three triggers, three Range marks — WHY (li-kay), WANT (yahdifu / yarjū an), MUST (yanbaghī an) — and every verb after them ends in -a.', ar: 'لِكَيْ {e|نُنَقِّيَ} · يَهْدِفُ إِلَى أَنْ {w|يَزْرَعَ} · يَنْبَغِي أَنْ {k|نُعِيدَ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P4-L08. Questions 4–5 retrieve reading the subjunctive (P4-L08) — today students write it themselves.',
  },
  routes: {
    core: ['I can plan four paragraphs, one structure each.', 'I can write one li-kay sentence with a verb in -a.'],
    develop: ['I can use all three triggers — one of each.', 'I can add a kāna qad opening and a cited expert.'],
    stretch: ['I can add both conditionals and two connectors.', 'I can write 145–160 accurate words.'],
  },
  bridge: [
    { ar: 'مَقَالَةٌ', urdu: 'مقالہ', tr: 'maqāla', en: 'an article, a paper' },
    { ar: 'مَضْمُونٌ', urdu: 'مضمون', tr: 'mazmūn', en: 'Arabic: content · Urdu: an essay' },
    { ar: 'حَلٌّ', urdu: 'حل', tr: 'hal', en: 'a solution' },
    { ar: 'تَشْخِيصٌ', urdu: 'تشخیص', tr: 'tashkhīs', en: 'a diagnosis' },
    { ar: 'خِتَامٌ · وَخِتَامًا', urdu: 'خاتمہ', tr: 'khātima', en: 'an ending · in conclusion' },
  ],
  bridgeNotes: 'URDU BRIDGE: مقالہ، حل، تشخیص and خاتمہ are shared. Careful: Urdu مضمون is an essay, but Arabic مَضْمُونٌ is the CONTENT of a text — an essay or article is مَقَالَةٌ. Today’s plan: التَّشْخِيصُ (diagnosis) → الحَلُّ المُقْتَرَحُ (the proposed solution).',
  core: ['لِكَيْ', 'يَهْدِفُ إِلَى أَنْ', 'يَرْجُو أَنْ', 'يَخْشَى أَنْ', 'يَنْبَغِي أَنْ', 'مِنَ الضَّرُورِيِّ أَنْ', 'الاسْتِدَامَةُ', 'التَّلَوُّثُ', 'الحُجَّةُ البِيئِيَّةُ', 'الحَلُّ المُقْتَرَحُ', 'عِلَاوَةً عَلَى ذٰلِكَ', 'وَخِتَامًا'],
  forms: {
    'يَهْدِفُ إِلَى أَنْ': ihs('أَهْدِفُ إِلَى أَنْ', 'تَهْدِفُ إِلَى أَنْ'), 'يَرْجُو أَنْ': ihs('أَرْجُو أَنْ', 'تَرْجُو أَنْ'), 'يَخْشَى أَنْ': ihs('أَخْشَى أَنْ', 'تَخْشَى أَنْ'),
    'يَتَطَلَّبُ أَنْ': hs('تَتَطَلَّبُ أَنْ'), 'يُحَافِظُ عَلَى': ihs('أُحَافِظُ عَلَى', 'تُحَافِظُ عَلَى'), 'يُعَالِجُ': ihs('أُعَالِجُ', 'تُعَالِجُ'),
    'الحَلُّ المُقْتَرَحُ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'الحُلُولُ المُقْتَرَحَةُ' }] },
  },
  vocabNotes: {
    0: 'The three triggers — today’s Range checklist: purpose (لِكَيْ) · volition (يَهْدِفُ إِلَى / يَرْجُو / يَخْشَى أَنْ) · necessity (يَنْبَغِي / يَتَطَلَّبُ / مِنَ الضَّرُورِيِّ أَنْ). The website lists يَتَطَلَّبُ under necessity here (and under volition in P4-L03) — either is fine if the verb ends in -a.',
    1: 'The built and natural world — the topic words that carry the argument. يُحَافِظُ عَلَى always keeps عَلَى: أَنْ نُحَافِظَ عَلَى التُّرَاثِ.',
    2: 'Structuring the argument: التَّشْخِيصُ (the problem) → الحَلُّ المُقْتَرَحُ (the solution). Formal connectors sit at the START of a sentence, followed by a comma: عِلَاوَةً عَلَى ذٰلِكَ، … · وَمِنْ ثَمَّ … · وَخِتَامًا، … .',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the four-paragraph plan (website writing model + differentiation) · Core', title: 'Diagnosis → solution → evidence → future', ar: 'خُطَّةُ المَقَالَةِ',
      cols: [{ label: 'Paragraph', w: 2.2 }, { label: 'Structures', w: 2.4 }, { label: 'Model sentence (website model)', w: 7.73, size: 18 }],
      rows: [
        { core: true, cells: ['1 · the problem ←', 'past perfect', '{p|كَانَتْ} مُدُنُنَا العَرَبِيَّةُ {p|قَدْ فَقَدَتْ} كَثِيرًا مِنْ مِسَاحَاتِهَا الخَضْرَاءِ.'] },
        { core: true, cells: ['2 · what must happen', 'necessity + volition', 'يَنْبَغِي أَنْ {k|نُعِيدَ} التَّوَازُنَ … مَشْرُوعًا يَهْدِفُ إِلَى أَنْ {w|يَزْرَعَ} مَلَايِينَ الأَشْجَارِ.'] },
        { core: true, cells: ['3 · why + evidence', 'purpose + reported', 'نَزْرَعُهَا لِكَيْ {e|نُنَقِّيَ} الهَوَاءَ · {m|قَالَ} خَبِيرٌ بِيئِيٌّ {m|إِنَّ} …'] },
        { core: true, cells: ['4 · future → close', 'Type 1 · Type 2 · hope', 'إِذَا … سَنُقَلِّلُ · لَوْ … لَكَانَتْ · {w|وَخِتَامًا}، نَرْجُو أَنْ يَتَحَمَّلَ …'] },
      ],
      ltr: true,
      foot: 'Back (what we had lost) → now (what must happen) → why (purpose + evidence) → forward and back (if … / had …) → hope.',
      notes: `GRAMMAR PART 1 — the website writing model and differentiation (“the four-paragraph plan with one sentence per paragraph, labelling each trigger”).
Core students write ONLY four sentences — one per row — and label each trigger in the margin: غَرَضٌ · إِرَادَةٌ · ضَرُورَةٌ. That is already a complete, organised text with three Range marks.
Row 4: the model ends with a HOPE (نَرْجُو أَنْ) — a second volition trigger and a warm, forward-looking close.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · three triggers, three Range marks (website rules 1–3, teaching points 1–2 and table) · Develop', title: 'One of each — and every verb in -a', ar: 'ثَلَاثَةُ مُسَبِّبَاتٍ',
      cols: [{ label: 'Family', w: 1.8 }, { label: 'Triggers', w: 3.4, size: 17 }, { label: 'Example (website)', w: 5.73, size: 17 }, { label: 'Watch', w: 1.4 }],
      rows: [
        { core: true, cells: ['purpose', '{e|لِكَيْ}', 'نَزْرَعُ الأَشْجَارَ لِكَيْ {e|نُنَقِّيَ} الهَوَاءَ وَ{e|نَحْمِيَ} الأَجْيَالَ.', '-ī → -iya'] },
        { core: true, cells: ['volition', '{w|يَهْدِفُ إِلَى أَنْ} · يَرْجُو أَنْ · يَخْشَى أَنْ', 'يَهْدِفُ المَشْرُوعُ إِلَى أَنْ {w|يُقَلِّلَ} الانْبِعَاثَاتِ.', 'ilā!'] },
        { core: true, cells: ['necessity', '{k|يَنْبَغِي أَنْ} · يَتَطَلَّبُ أَنْ · مِنَ الضَّرُورِيِّ أَنْ', 'يَنْبَغِي أَنْ {k|نُعِيدَ} التَّوَازُنَ وَأَنْ {k|نُخَصِّصَ} مِيزَانِيَّاتٍ.', 'two an'] },
        { cells: ['volition', 'نَخْشَى أَنْ', 'نَخْشَى أَنْ {w|يَتَفَاقَمَ} التَّلَوُّثُ إِذَا تَأَخَّرْنَا.', 'fear'] },
        { cells: ['volition', 'نَرْجُو أَنْ', 'نَرْجُو أَنْ {w|يَتَحَمَّلَ} كُلُّ فَرْدٍ مَسْؤُولِيَّتَهُ.', 'hope'] },
      ],
      ltr: true,
      foot: 'Website mistakes 1–2: li-kay naḥmī ✗ → naḥmiya ✓ · an nastathmiru ✗ → nastathmira ✓. Mistake 3: yahdifu an ✗ → yahdifu ilā an ✓.',
      notes: `GRAMMAR PART 2 — website rules “Purpose”, “Volition”, “Necessity”, teaching points 1–2, the website table and mistakes 1–3.
Teaching point 1: “a P4 essay that uses only one type cannot reach full Range — the balance of all three is what top-grade Arabic looks like.”
Row 1: weak verbs in -ī show the -a clearly: نُنَقِّيَ · نَحْمِيَ (a favourite accuracy check). Row 2: يَهْدِفُ needs إِلَى before أَنْ — the website pattern tip 2 drops it; we follow the website’s own mistake 3.
Row 4: يَتَفَاقَمُ = to get worse, to escalate.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · forward, back, evidence (website rule 4, writing model and mistake 3) · Develop / Stretch', title: 'Recommend, reflect, cite', ar: 'التَّوْصِيَةُ · التَّأَمُّلُ · الاسْتِشْهَادُ',
      cards: [
        { chip: 'TYPE 1 · FORWARD · CORE', color: '1E6B52', head: 'إِذَا … سَـ', big: 'إِذَا اسْتَثْمَرْنَا فِي الطَّاقَةِ النَّظِيفَةِ، سَنُقَلِّلُ الانْبِعَاثَاتِ.', en: 'If we invest in clean energy, we will cut emissions.', clue: 'Still possible.' },
        { chip: 'TYPE 2 · BACK · DEVELOP', color: 'C0386B', head: 'لَوْ كُنَّا قَدْ … لَـ', big: 'لَوْ كُنَّا قَدْ بَدَأْنَا مُبَكِّرًا، لَكَانَتْ بِيئَتُنَا أَفْضَلَ حَالًا.', en: 'Had we started early, our environment would be in better shape.', clue: 'Past perfect inside.' },
        { chip: 'EVIDENCE · STRETCH', color: '6B4C9A', head: 'قَالَ … إِنَّ', big: 'قَالَ خَبِيرٌ بِيئِيٌّ إِنَّ الاسْتِدَامَةَ لَيْسَتْ رَفَاهِيَةً بَلْ ضَرُورَةٌ.', en: 'An environmental expert said sustainability is not a luxury but a necessity.', clue: 'laysat … bal …' },
      ],
      error: { text: 'Website mistake 3: yahdifu is fixed with ilā before an.', pairs: [['يَهْدِفُ المَشْرُوعُ إِلَى أَنْ يُقَلِّلَ', 'يَهْدِفُ المَشْرُوعُ أَنْ يُقَلِّلَ']] },
      notes: `GRAMMAR PART 3 — website rule “Conditionals and narrative”, the writing model (cards 1–3) and mistake 3.
Card 2: the Stretch Type 2 puts a past perfect inside — لَوْ كُنَّا قَدْ بَدَأْنَا (had we begun). Simpler Core version from the website rule: لَوْ خَطَّطْنَا مُبَكِّرًا، لَتَجَنَّبْنَا الكَارِثَةَ.
Card 3: قَالَ → إِنَّ (kasra); أَكَّدَ / أَشَارَ إِلَى → أَنَّ. لَيْسَتْ … بَلْ … = not … but … — a strong, quotable close for any paragraph.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the P4 Range checklist in the website model (website vocabulary + writing checklist) · Stretch', title: 'Find the Range in the model', ar: 'مَعَايِيرُ النِّطَاقِ',
      cols: [{ label: 'Range marker', w: 2.6 }, { label: 'Evidence in the website model', w: 7.4, size: 18 }, { label: 'Lesson', w: 2.33 }],
      rows: [
        { core: true, cells: ['past perfect', '{p|كَانَتْ} مُدُنُنَا {p|قَدْ فَقَدَتْ} · {p|كُنَّا قَدْ بَدَأْنَا}', 'P4-L05 / L07'] },
        { core: true, cells: ['three triggers', 'لِكَيْ {e|نُنَقِّيَ} · يَهْدِفُ إِلَى أَنْ {w|يَزْرَعَ} · يَنْبَغِي أَنْ {k|نُعِيدَ}', 'P4-L01–L06'] },
        { cells: ['both conditionals', 'إِذَا اسْتَثْمَرْنَا … سَنُقَلِّلُ · لَوْ كُنَّا … لَكَانَتْ', 'P3-L05'] },
        { cells: ['reported speech', '{m|قَالَ} خَبِيرٌ بِيئِيٌّ {m|إِنَّ} الاسْتِدَامَةَ …', 'P3-L06'] },
        { cells: ['connectors', '{w|عِلَاوَةً عَلَى ذٰلِكَ} · {w|لِذٰلِكَ} · {w|وَخِتَامًا}', 'P3-L05'] },
      ],
      ltr: true,
      foot: 'Count them: that is nine or more structures — the website Stretch target for 160 words.',
      notes: `GRAMMAR PART 4 — the website writing checklist and model.
Spelling: عِلَاوَةً (ʿilāwatan, with kasra) — the website writes عَلَاوَةً. The kasra is correct (cf. Urdu علاوہ).
Self-assessment: students tick each row in their own draft with a coloured pen, then circle every verb after a trigger and check the -a.`,
    },
  ],
  quick: [0, 1, 2, 4],
  rest: [3, 5, 6, 7],
  ido: {
    title: 'Watch me build the article',
    steps: [
      { head: 'The problem', ar: '{p|كَانَتْ} مُدُنُنَا {p|قَدْ فَقَدَتْ} …', think: 'Back.' },
      { head: 'Must + want', ar: 'يَنْبَغِي أَنْ {k|نُعِيدَ} · يَهْدِفُ إِلَى أَنْ {w|يَزْرَعَ}', think: '-a, -a.' },
      { head: 'Why', ar: 'لِكَيْ {e|نُنَقِّيَ} الهَوَاءَ', think: 'Purpose.' },
      { head: 'Regret', ar: '{m|لَوْ} كُنَّا قَدْ … {m|لَكَانَتْ}', think: 'Type 2.' },
    ],
    legend: ['p', 'k', 'w', 'e', 'm'], legendLabels: { p: 'PAST PERFECT', k: 'NECESSITY', w: 'VOLITION', e: 'PURPOSE', m: 'TYPE 2' },
    model: '{p|كَانَتْ مُدُنُنَا قَدْ فَقَدَتْ} كَثِيرًا مِنْ مِسَاحَاتِهَا الخَضْرَاءِ. وَاليَوْمَ يَنْبَغِي أَنْ {k|نُعِيدَ} التَّوَازُنَ بَيْنَ العُمْرَانِ وَالطَّبِيعَةِ. لِذٰلِكَ أَطْلَقَتِ الحُكُومَةُ مَشْرُوعًا يَهْدِفُ إِلَى أَنْ {w|يَزْرَعَ} مَلَايِينَ الأَشْجَارِ، وَنَزْرَعُهَا لِكَيْ {e|نُنَقِّيَ} الهَوَاءَ. {m|وَلَوْ} كُنَّا قَدْ بَدَأْنَا مُبَكِّرًا، {m|لَكَانَتْ} بِيئَتُنَا أَفْضَلَ حَالًا.',
    modelEn: 'Our cities had lost much of their green space. Today we should restore the balance between buildings and nature. So the government has launched a project that aims to plant millions of trees, and we plant them so that we purify the air. Had we started early, our environment would be in better shape.',
    notes: 'I DO (3 min) — the skeleton of the website model. Build it paragraph by paragraph, counting Range aloud: past perfect (1) · necessity (2) · volition (3) · purpose (4) · Type 2 (5). Circle each verb after a trigger — nuʿīdA · yazraʿA · nunaqqiyA. Then point to the full model (Feedback) for the Type 1, the cited expert and the connectors.',
  },
  patternEn: ['we invest in clean energy so that we protect future generations', 'the project aims to reduce carbon emissions', 'we should preserve our built heritage'],
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · upgrade the sentence (website model and mistakes)', title: 'From plain to Paper 4', ar: 'حَسِّنِ الجُمْلَةَ',
      cols: [{ label: 'Plain sentence', w: 3.0, size: 20 }, { label: 'Paper 4 sentence', w: 7.0, size: 18 }, { label: 'Structure', w: 2.33 }],
      rows: [
        { core: true, cells: ['المُدُنُ فَقَدَتِ الحَدَائِقَ.', 'كَانَتْ مُدُنُنَا قَدْ فَقَدَتْ كَثِيرًا مِنْ مِسَاحَاتِهَا الخَضْرَاءِ.', 'past perfect'] },
        { core: true, cells: ['نَزْرَعُ الأَشْجَارَ.', 'نَزْرَعُ الأَشْجَارَ لِكَيْ نُنَقِّيَ الهَوَاءَ وَنَحْمِيَ الأَجْيَالَ القَادِمَةَ.', 'purpose'] },
        { cells: ['المَشْرُوعُ يَزْرَعُ أَشْجَارًا.', 'أَطْلَقَتِ الحُكُومَةُ مَشْرُوعًا يَهْدِفُ إِلَى أَنْ يَزْرَعَ مَلَايِينَ الأَشْجَارِ.', 'volition'] },
        { cells: ['التَّوَازُنُ مُهِمٌّ.', 'يَنْبَغِي أَنْ نُعِيدَ التَّوَازُنَ بَيْنَ العُمْرَانِ وَالطَّبِيعَةِ.', 'necessity'] },
        { cells: ['بَدَأْنَا مُتَأَخِّرِينَ.', 'لَوْ كُنَّا قَدْ بَدَأْنَا مُبَكِّرًا، لَكَانَتْ بِيئَتُنَا أَفْضَلَ حَالًا.', 'Type 2'] },
      ],
      ltr: true,
      foot: 'Cover the middle column: upgrade each plain sentence, then compare with the website model.',
      notes: `WE DO (3 min) — an upgrade drill built from the website model. The left-hand sentences are accurate but show almost no Range — that is the point.
Core: rows 1–2. Develop: rows 1–4 (all three triggers). Stretch: all five, then add a connector to the front of rows 3 and 5 (لِذٰلِكَ · عِلَاوَةً عَلَى ذٰلِكَ).
Row 5: the plain fact (we started late) is exactly what the law sentence imagines differently.`,
    },
    {
      type: 'formsTable', stage: 'wedo', min: 2, flex: true, eyebrow: 'We do · build an article line (website live builder)', title: 'Purpose + necessity + volition', ar: 'ابْنِ سَطْرًا غَنِيًّا',
      cols: [{ label: '1 · Purpose (li-kay)', w: 4.1, size: 16 }, { label: '2 · Necessity', w: 4.0, size: 16 }, { label: '3 · Volition (hope / fear / aim)', w: 4.23, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate and earns three Range marks. Say it, then write three different versions.',
      notes: `WE DO (flex) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Ask: which line has the MOST Range? (column 3 row 2 hides a Type 1 too: إِذَا تَأَخَّرْنَا).`,
    },
  ],
  sorterTitle: 'Purpose, volition — or necessity?',
  sorterCats: ['purpose (li-kay)', 'volition (yahdifu / yarjū / yakhshā)', 'necessity (yanbaghī / yataṭallabu)'],
  sorterNotes: 'Then pick one card from each column and join them into a three-sentence mini-article with a connector between each — three triggers, three Range marks.',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: { ...site.writing, prompt: 'Write a 145–160-word built / natural-world article. Open with a past-perfect background, then place all three subjunctive triggers — a purpose clause (li-kay), a volition clause (yahdifu ilā an / yarjū an / yakhshā an) and a necessity clause (yanbaghī an / yataṭallabu an) — and add a Type 1 recommendation, a Type 2 reflection and a formal connector.', checklist: site.writing.checklist.map((c) => c.replace('(كَانَ قَدْ)', '(kāna qad)').replace('(with the لَـ result)', '(with the la- result)')) }, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('Purpose: لِكَيْ + subjunctive.', 'Purpose: li-kay + a verb in -a.').replace('Volition: يَهْدِفُ أَنْ + subjunctive.', 'Volition: yahdifu ilā an + a verb in -a.').replace('Necessity: يَنْبَغِي أَنْ + subjunctive.', 'Necessity: yanbaghī an + a verb in -a.') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; لِكَيْ always written with its sukūn; the connector spelt عِلَاوَةً (website: عَلَاوَةً); pattern tip 2 corrected to yahdifu ilā an (the website’s own mistake 3); rule formulas, pattern tips, writing prompt and checklist in transliteration; sorter headings in transliteration; the plan, trigger, Range and upgrade tables are teacher-built from the website model; the website visual game is beginner-level and not used. All other website items are used as published.',
  hints: ['Only one trigger = Range?', 'li-kay naḥmī?', 'yahdifu an?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 4.\nListen for: the word count · li-kay · the fatḥa.',
  listenRoutes: 'Core: questions 1, 3 and 4. Develop / Stretch: all 5 — and write down the order of the paragraphs the examiner recommends.',
  gloss: [
    ['فِي الوَرَقَةِ الرَّابِعَةِ، يَبْلُغُ نَصُّ هٰذِهِ الوَحْدَةِ مِئَةً وَخَمْسًا وَأَرْبَعِينَ إِلَى مِئَةٍ وَسِتِّينَ كَلِمَةً.', 'In Paper 4, the text in this unit is 145 to 160 words.'],
    ['النِّطَاقُ فِي مُسْتَوَى السَّنَةِ التَّاسِعَةِ يُكَافِئُ المُسَبِّبَاتِ الثَّلَاثَةَ لِلنَّصْبِ بِثَلَاثِ عَلَامَاتٍ مُنْفَصِلَةٍ.', 'At Year 9 level, Range rewards the three subjunctive triggers with three separate marks.'],
    ['عَلَامَةٌ لِلْغَرَضِ مَعَ «لِكَيْ»، وَعَلَامَةٌ لِلْإِرَادَةِ مَعَ «يَهْدِفُ أَوْ يَرْجُو أَوْ يَخْشَى أَنْ»، وَعَلَامَةٌ لِلضَّرُورَةِ مَعَ «يَنْبَغِي أَوْ يَتَطَلَّبُ أَنْ».', 'One mark for purpose with “li-kay”, one for volition with “yahdifu, yarjū or yakhshā an”, and one for necessity with “yanbaghī or yataṭallabu an”.'],
    ['وَبَعْدَ كُلِّ مُسَبِّبٍ يَأْتِي فِعْلٌ مَنْصُوبٌ بِفَتْحَةٍ فِي آخِرِهِ. النَّصُّ الَّذِي يَحْمِلُ مُسَبِّبًا وَاحِدًا فَقَطْ لَا يَنَالُ النِّطَاقَ الكَامِلَ.', 'After every trigger comes a subjunctive verb with a fatḥa at the end. A text that carries only one trigger does not get full Range.'],
    ['افْتَحْ بِخَلْفِيَّةٍ فِي المَاضِي التَّامِّ، ثُمَّ أَوْصِ بِشَرْطٍ مِنَ النَّوْعِ الأَوَّلِ، ثُمَّ تَأَمَّلْ بِشَرْطٍ مِنَ النَّوْعِ الثَّانِي، وَاخْتِمْ بِرَابِطٍ رَسْمِيٍّ.', 'Open with a background in the past perfect, then recommend with a Type 1, then reflect with a Type 2, and close with a formal connector.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا خَلْفِيَّتُكَ فِي المَاضِي التَّامِّ؟' },
      { route: 'develop', ar: 'مَا الغَرَضُ الَّذِي سَتَذْكُرُهُ بِـ«لِكَيْ»؟' },
      { route: 'stretch', ar: 'مَا الضَّرُورَةُ الَّتِي سَتَذْكُرُهَا بِـ«يَنْبَغِي أَنْ»؟ وَمَا رَجَاؤُكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'كَانَتْ مَدِينَتِي قَدْ فَقَدَتْ ______ .' },
      { route: 'develop', ar: 'نَزْرَعُ الأَشْجَارَ لِكَيْ ______ .' },
      { route: 'stretch', ar: 'يَنْبَغِي أَنْ ______ ، وَنَرْجُو أَنْ ______ .' },
    ],
    modelEn: ['What is your background?', 'My city had lost its gardens before we noticed.', 'And the purpose?', 'We plant trees so that we purify the air — and we should invest more.'],
    notes: 'Website prompts and model: students TALK THROUGH their plan with a partner before writing (2 min each). The partner counts the triggers on their fingers — three needed! To a girl: خَلْفِيَّتُكِ · سَتَذْكُرِينَهُ · رَجَاؤُكِ.',
  },
  diff: { core: 'Write the four-paragraph plan with one sentence per paragraph, labelling each trigger.' },
  write: {
    core: { amount: '4 paragraphs', how: 'Website Core: the four-paragraph plan with one sentence per paragraph, each trigger labelled.' },
    develop: { amount: '145 words', how: 'Website Develop: expand to 145 words with all three triggers marked.' },
    stretch: { amount: '145–160 words', how: 'Website task: all three triggers, both conditionals, the past perfect, reported speech and a formal connector.' },
  },
  frames: {
    core: [
      { en: 'Our city had lost … before …', ar: 'كَانَتْ مَدِينَتُنَا قَدْ فَقَدَتْ ______ قَبْلَ أَنْ ______ .' },
      { en: 'Today we should …', ar: 'وَاليَوْمَ يَنْبَغِي أَنْ ______ .' },
      { en: 'We plant / invest … so that …', ar: 'نَسْتَثْمِرُ فِي ______ لِكَيْ ______ .' },
      { en: 'In conclusion, we hope that …', ar: 'وَخِتَامًا، نَرْجُو أَنْ ______ .' },
    ],
    develop: [
      { en: 'The project aims to …', ar: 'يَهْدِفُ المَشْرُوعُ إِلَى أَنْ ______ .' },
      { en: 'An expert said that … is not a luxury but …', ar: 'قَالَ خَبِيرٌ بِيئِيٌّ إِنَّ ______ لَيْسَتْ رَفَاهِيَةً بَلْ ______ .' },
      { en: 'Moreover, if we invest in …, we will …', ar: 'عِلَاوَةً عَلَى ذٰلِكَ، إِذَا اسْتَثْمَرْنَا فِي ______ ، سَنُقَلِّلُ ______ .' },
      { en: 'Had we started early, …', ar: 'وَلَوْ كُنَّا قَدْ بَدَأْنَا مُبَكِّرًا، لَكَانَتْ ______ .' },
    ],
    bank: ['مِسَاحَاتِهَا الخَضْرَاءَ', 'نَنْتَبِهَ لِلْخَطَرِ', 'نُعِيدَ التَّوَازُنَ', 'نُنَقِّيَ الهَوَاءَ', 'نَحْمِيَ الأَجْيَالَ القَادِمَةَ', 'يَزْرَعَ مَلَايِينَ الأَشْجَارِ', 'يُقَلِّلَ الانْبِعَاثَاتِ', 'الاسْتِدَامَةَ', 'ضَرُورَةٌ حَتْمِيَّةٌ', 'الطَّاقَةِ النَّظِيفَةِ', 'بِيئَتُنَا أَفْضَلَ حَالًا', 'يَتَحَمَّلَ كُلُّ فَرْدٍ مَسْؤُولِيَّتَهُ'],
  },
  stretch: [
    ['قَبْلَ أَنْ نُدْرِكَ حَجْمَ الخَطَرِ', 'before we realised the scale of the danger'],
    ['بَيْنَ العُمْرَانِ وَالطَّبِيعَةِ', 'between buildings and nature'],
    ['لَيْسَتْ رَفَاهِيَةً بَلْ ضَرُورَةٌ حَتْمِيَّةٌ', 'not a luxury but an absolute necessity'],
    ['بِشَكْلٍ مَلْحُوظٍ', 'noticeably'],
    ['تُجَاهَ كَوْكَبِنَا', 'towards our planet'],
  ],
  modelEn: 'Our Arab cities had lost much of their green space before we realised the danger. Today we should restore the balance between buildings and nature, and set aside bigger budgets for renewable energy. So the government has launched a project that aims to plant millions of trees, and we plant them so that we purify the air and protect future generations. An environmental expert said that sustainability is not a luxury but an absolute necessity. Moreover, if we invest in clean energy, we will cut emissions noticeably. Had we begun this transition early, our environment would be in better shape today. In conclusion, we hope everyone will take responsibility for our planet.',
  find: ['kānat … qad faqadat (past perfect)', 'li-kay · yahdifu ilā an · yanbaghī an', 'idhā … sa- · law … la-', 'qāla … inna + three connectors'],
  modelNotes: 'Website writing model (≈ 150 words). Range: كَانَتْ … قَدْ فَقَدَتْ (past perfect) · يَنْبَغِي أَنْ نُعِيدَ … وَأَنْ نُخَصِّصَ (necessity) · يَهْدِفُ إِلَى أَنْ يَزْرَعَ (volition) · لِكَيْ نُنَقِّيَ … وَنَحْمِيَ (purpose) · قَالَ … إِنَّ (reported) · إِذَا اسْتَثْمَرْنَا … سَنُقَلِّلُ (Type 1) · لَوْ كُنَّا قَدْ بَدَأْنَا … لَكَانَتْ (Type 2) · نَرْجُو أَنْ يَتَحَمَّلَ (volition) · لِذٰلِكَ · عِلَاوَةً عَلَى ذٰلِكَ · وَخِتَامًا (connectors).',
  selfCheck: [
    { route: 'core', text: 'Four paragraphs: problem · what must happen · why + evidence · future + close.' },
    { route: 'core', text: 'My opening uses kāna / kānat qad + past.' },
    { route: 'develop', text: 'One li-kay, one volition (with ilā after yahdifu), one necessity — every verb in -a.' },
    { route: 'develop', text: 'One idhā … sa- AND one law … la-.' },
    { route: 'stretch', text: 'A cited expert (qāla … inna), two connectors, 145–160 accurate words.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['مِسَاحَاتِهَا الخَضْرَاءِ', 'its green spaces'], ['نُدْرِكَ', '(we) realise'], ['التَّوَازُنَ', 'the balance'], ['العُمْرَانِ', 'buildings, urban areas'], ['مِيزَانِيَّاتٍ', 'budgets'],
    ['أَطْلَقَتِ', 'launched'], ['نُنَقِّيَ', '(we) purify'], ['رَفَاهِيَةً', 'a luxury'], ['حَتْمِيَّةٌ', 'inevitable, absolute'], ['يَتَحَمَّلَ', '(to) bear, take on'],
  ],
  prep: {
    words: [['المُسَبِّبُ المَسْمُوعُ', 'the audible trigger', '—'], ['الفَتْحَةُ المُخْتَزَلَةُ', 'the reduced fatḥa', '—'], ['المَوْقِفُ', 'the attitude', 'pl. المَوَاقِفُ'], ['الاحْتِرَارُ العَالَمِيُّ', 'global warming', '—'], ['المَدِينَةُ الذَّكِيَّةُ', 'the smart city', 'pl. المُدُنُ الذَّكِيَّةُ']],
    questionEn: 'When you listen, which is easier to hear: the trigger (li-kay, an) or the final -a?',
    questionAr: 'أَسْمَعُ « ______ » بِوُضُوحٍ، وَلَا أَسْمَعُ ______ .',
    homework: {
      core: 'Finish the four-paragraph plan with one sentence per paragraph — label each trigger.',
      develop: 'Write the 145-word version and circle every verb after a trigger.',
      stretch: 'Website writing task: the full 145–160-word article with nine or more structures.',
    },
    wordsSource: 'The five words come from the website P4-L10 vocabulary (listening for triggers).',
  },
  remember: 'Remember: four paragraphs — kāna qad (problem) · yanbaghī an + yahdifu ilā an (must + want) · li-kay + qāla inna (why + evidence) · idhā / law + narjū an (future + close) — one of each trigger, and every verb after it in -a.',
});

module.exports = { meta, slides };
