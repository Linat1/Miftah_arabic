'use strict';
/* P5-L07 · Constructing a Balanced Argument — The Art of Arabic Essay Writing — website: Pathways › Progression › P5 › P5-L07 (the complete argumentative
 * essay: thesis → evidence → concession صَحِيحٌ أَنَّ → refutation غَيْرَ أَنَّ → conclusion وَبِنَاءً عَلَى مَا سَبَقَ + a verb in -a; أَنَّ + indicative vs
 * أَنْ + subjunctive). Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live builder, mission and visual game used
 * as published, with waṣl alif shown without a kasra, لِكَيْ always written with its sukūn, and two doubled concessions corrected: بِالرَّغْمِ مِنْ X،
 * غَيْرَ أَنَّ … → بِالرَّغْمِ مِنْ X، فَإِنَّ … (live builder) and بِالرَّغْمِ مِنْ X، مَعَ ذٰلِكَ تَبْقَى … → بِالرَّغْمِ مِنْ X، تَبْقَى … (sorter).
 * Game cards 0, 2 and 4 not used. Sorter headings in transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P5')({
  n: 7, fileTitle: 'Balanced_Argument', chip: 'Argument',
  title: 'Constructing a Balanced Argument — The Art of Arabic Essay Writing', arabic: 'بِنَاءُ الحُجَّةِ المُتَوَازِنَةِ — فَنُّ الكِتَابَةِ المَقَالِيَّةِ العَرَبِيَّةِ',
  focus: 'Build the IGCSE Grade A essay — thesis (yushāru ilā anna) → evidence (akkada … anna) → concession (ṣaḥīḥun anna + indicative) → refutation (ghayra anna / maʿa dhālika) → conclusion (wa-bināʾan ʿalā mā sabaqa + an + -a).',
  icon: 'FaPenNib', iconSet: 'fa6',
});

const hs = (she) => ({ tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: she }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ')
  .replace(/بِالرَّغْمِ مِنَ التَّكْلِفَةِ، غَيْرَ أَنَّ/g, 'بِالرَّغْمِ مِنَ التَّكْلِفَةِ، فَإِنَّ')
  .replace(/بِالرَّغْمِ مِنَ التَّقَدُّمِ، مَعَ ذٰلِكَ تَبْقَى/g, 'بِالرَّغْمِ مِنَ التَّقَدُّمِ، تَبْقَى'));
const site = fix(D.site('P5-L07'));
const RH = [['Thesis and evidence', 'yushāru ilā anna · akkada … anna'], ['Concession', 'ṣaḥīḥun anna + indicative'], ['Refutation', 'ghayra anna · maʿa dhālika'], ['Conclusion', 'wa-bināʾan ʿalā mā sabaqa + an + -a']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P5-L07', {
  support: `• Core: a thesis, one piece of evidence and one concession–refutation pair (website Core). Develop: add a Type 2 and a conclusion connector (120 words). Stretch: 130 words with the full architecture and a subjunctive conclusion.
• This is the consolidating lesson of P5’s writing strand: students may choose ANY social issue from P5-L01 to L06 (poverty, migration, gender equality, digital society, global justice, youth). Encourage them to reuse their own earlier paragraphs.
• Faith link (optional): «ادْعُ إِلَى سَبِيلِ رَبِّكَ بِالحِكْمَةِ وَالمَوْعِظَةِ الحَسَنَةِ، وَجَادِلْهُمْ بِالَّتِي هِيَ أَحْسَنُ» (al-Naḥl 16:125) — argue in the best way; and «قُلْ هَاتُوا بُرْهَانَكُمْ إِنْ كُنْتُمْ صَادِقِينَ» (al-Baqara 2:111) — bring your evidence.
• Grammar links: ṣaḥīḥun anna … ghayra anna (P5-L01) · an + -a triggers (P5-L03 to L05) · Type 2 (P3-L05) · wa-bināʾan ʿalā mā sabaqa (P5-L05).`,
  teach: 'The four-paragraph essay architecture, the concession–refutation pair, anna + indicative vs an + subjunctive, the connector bank.',
  wedo: 'Match argument moves to pictures, build an essay spine, sort thesis / concession / conclusion.',
  next: { nextCode: 'P5-L08', nextTitle: 'Reading — Social Issues Texts', nextAr: 'قِرَاءَةُ نُصُوصِ القَضَايَا الاجْتِمَاعِيَّةِ' },
  objectives: ['Master the architecture of a formal Arabic argumentative essay.', 'Move from thesis to evidence to concession to refutation to conclusion.', 'Use the full range of concession and refutation connectors.', 'Write a model essay in which every paragraph carries its structural role.'],
  rulesAr: 'بِنْيَةُ المَقَالِ الحِجَاجِيِّ',
  ruleEx: [['يُشَارُ إِلَى أَنَّ التَّعْلِيمَ رَكِيزَةٌ أَسَاسِيَّةٌ'], ['صَحِيحٌ أَنَّ تَطْوِيرَ التَّعْلِيمِ يَسْتَلْزِمُ مَوَارِدَ ضَخْمَةً'], ['غَيْرَ أَنَّ العَائِدَ الاجْتِمَاعِيَّ يَفُوقُ التَّكْلِفَةَ بِأَشْوَاطٍ'], ['وَبِنَاءً عَلَى مَا سَبَقَ، يَتَطَلَّبُ التَّقَدُّمُ أَنْ تُوَجِّهَ الحُكُومَاتُ اسْتِثْمَارَاتِهَا نَحْوَ التَّعْلِيمِ']],
  doNow: {
    questions: [
      q('What does التَّمْهِيدُ mean?', ['the introduction', 'the conclusion', 'the evidence'], 'Prepared at home (P5-L06).'),
      q('What does نَقِيضُ الحُجَّةِ mean?', ['the counter-argument', 'the main argument', 'a weak opinion'], 'Prepared at home (P5-L06).'),
      q('What does الخَاتِمَةُ mean?', ['the conclusion', 'the title', 'the thesis'], 'Prepared at home (P5-L06).'),
      q('Complete: كَانَتِ الأَجْيَالُ السَّابِقَةُ ___ كَافَحَتْ مِنْ أَجْلِ الاسْتِقْلَالِ.', ['قَدْ', 'سَـ', 'لَنْ'], 'P5-L06: the past perfect needs qad.'),
      q('Complete: يُعِيدُ الشَّبَابُ ___ النَّاشِطِيَّةِ.', ['تَعْرِيفَ', 'تَعْرِيفُ', 'تَعْرِيفِ'], 'P5-L06: the object takes -a.'),
    ],
    keyIdea: { text: 'An essay is not a list of opinions — it is a building: every paragraph has a job.', ar: '{p|يُشَارُ إِلَى أَنَّ} … {w|صَحِيحٌ أَنَّ} … {e|غَيْرَ أَنَّ} … {k|وَبِنَاءً عَلَى مَا سَبَقَ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P5-L06. Questions 4–5 retrieve the past perfect and yuʿīdu taʿrīfa (P5-L06) — both can live inside today’s essay.',
  },
  routes: {
    core: ['I can name the 4 paragraph jobs.', 'I can write one concession–refutation pair.'],
    develop: ['I can tell anna + indicative from an + -a.', 'I can add a Type 2 and a conclusion connector.'],
    stretch: ['I can use 6 different connectors correctly.', 'I can write a 130-word argumentative essay.'],
  },
  bridge: [
    { ar: 'تَمْهِيدٌ', urdu: 'تمہید', tr: 'tamhīd', en: 'an introduction, preamble' },
    { ar: 'دَلِيلٌ', urdu: 'دلیل', tr: 'dalīl', en: 'Arabic: evidence, proof · Urdu: an argument' },
    { ar: 'رَأْيٌ', urdu: 'رائے', tr: 'rāy', en: 'an opinion' },
    { ar: 'مَقَالٌ · مَقَالَةٌ', urdu: 'مقالہ', tr: 'maqāla', en: 'an essay, article' },
    { ar: 'خَاتِمَةٌ', urdu: 'خاتمہ', tr: 'khātima', en: 'Arabic: a conclusion · Urdu: an end, abolition' },
  ],
  bridgeNotes: 'URDU BRIDGE: تمہید, رائے and مقالہ are shared — you already know the essay words. Careful: Urdu دلیل = an argument, but Arabic الدَّلِيلُ = the EVIDENCE that proves it (the argument = الحُجَّةُ). Urdu خاتمہ = an end / ending (e.g. of a problem); Arabic الخَاتِمَةُ = the CONCLUSION paragraph.',
  core: ['التَّمْهِيدُ', 'طَرْحُ الحُجَّةِ', 'نَقِيضُ الحُجَّةِ', 'الخَاتِمَةُ', 'صَحِيحٌ أَنَّ … لٰكِنْ', 'لَا يُمْكِنُ إِنْكَارُ أَنَّ', 'بِالرَّغْمِ مِنْ', 'غَيْرَ أَنَّ', 'مَعَ ذٰلِكَ', 'وَفِي ضَوْءِ مَا سَبَقَ', 'تُفْضِي إِلَى', 'يَفُوقُ التَّكْلِفَةَ'],
  forms: {
    'تُفْضِي إِلَى': { tag: 'she (it) · he', forms: [{ l: 'he / it (m.)', ar: 'يُفْضِي إِلَى' }] }, 'يَفُوقُ التَّكْلِفَةَ': hs('تَفُوقُ التَّكْلِفَةَ'),
    'الحُجَّةُ الدَّاحِضَةُ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'الحُجَجُ الدَّاحِضَةُ' }] }, 'الرَّكِيزَةُ الأَسَاسِيَّةُ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'الرَّكَائِزُ الأَسَاسِيَّةُ' }] },
    'الخَاتِمَةُ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'الخَوَاتِمُ' }] }, 'الرَّأْيُ المُعَلَّلُ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'الآرَاءُ المُعَلَّلَةُ' }] },
  },
  vocabNotes: {
    0: 'Essay architecture: التَّمْهِيدُ → طَرْحُ الحُجَّةِ → نَقِيضُ الحُجَّةِ → الرَّدُّ عَلَى الحُجَّةِ المُضَادَّةِ → الخَاتِمَةُ. These five words ARE your essay plan — label your paragraphs with them.',
    1: 'Concede: صَحِيحٌ أَنَّ · لَا يُمْكِنُ إِنْكَارُ أَنَّ · بِالرَّغْمِ مِنْ + noun. Refute: غَيْرَ أَنَّ · مَعَ ذٰلِكَ. Contrast: فِي المُقَابِلِ · وَعَلَى النَّقِيضِ مِنْ ذٰلِكَ. Conclude: وَفِي ضَوْءِ مَا سَبَقَ. One concession word + one refutation word per pair — never two of the same job.',
    2: 'Register: تُفْضِي إِلَى (leads to) and يَفُوقُ التَّكْلِفَةَ (outweighs the cost) are the formal verbs that turn evidence into argument. الحِيَادُ الأَكَادِيمِيُّ = academic neutrality — the tone of the whole essay.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the essay architecture (website table, teaching point 1 and quiz 1 / 8) · Core', title: 'Four paragraphs, four jobs', ar: 'بِنْيَةُ المَقَالِ',
      cols: [{ label: 'Paragraph', w: 1.5 }, { label: 'Job', w: 2.0 }, { label: 'Marker', w: 3.0, size: 18 }, { label: 'Example (website model essay)', w: 5.83, size: 16 }],
      rows: [
        { core: true, cells: ['P1', 'thesis', '{p|يُشَارُ إِلَى أَنَّ}', 'يُشَارُ إِلَى أَنَّ التَّعْلِيمَ مِنْ أَكْثَرِ القَضَايَا إِلْحَاحًا'] },
        { core: true, cells: ['P2', 'evidence', '{m|أَكَّدَ … أَنَّ}', 'أَكَّدَ البَاحِثُونَ أَنَّ الاسْتِثْمَارَ فِي التَّعْلِيمِ يُفْضِي إِلَى نُمُوٍّ'] },
        { core: true, cells: ['P3', 'concession', '{w|صَحِيحٌ أَنَّ}', 'صَحِيحٌ أَنَّ تَطْوِيرَ المَنْظُومَةِ يَسْتَلْزِمُ مَوَارِدَ ضَخْمَةً،'] },
        { cells: ['P3', 'refutation', '{e|غَيْرَ أَنَّ}', 'غَيْرَ أَنَّ العَائِدَ يَفُوقُ التَّكْلِفَةَ بِأَشْوَاطٍ.'] },
        { cells: ['P4', 'conclusion', '{k|وَبِنَاءً عَلَى مَا سَبَقَ}', 'وَبِنَاءً عَلَى مَا سَبَقَ، يَتَطَلَّبُ التَّقَدُّمُ أَنْ تُوَجِّهَ الحُكُومَاتُ …'] },
      ],
      ltr: true,
      foot: 'Website teaching point: naming each paragraph’s job as you plan is what turns assertion into argument.',
      notes: `GRAMMAR PART 1 — the website table (“Paragraph · Job · Marker”), teaching point 1 (“Every paragraph has a structural job”), quiz 1 and quiz 8.
Planning routine (2 min, every essay): write P1–P4 down the margin, and next to each its marker. Only then write sentences.
The Type 2 (law … la-) can sit in P3 or just before P4 — the website checklist asks for one “within the analysis”.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · the concession–refutation pair (website rules 2–3, teaching point 2, mistake 2) · Core / Develop', title: 'Concede — then answer', ar: 'التَّسْلِيمُ ثُمَّ الرَّدُّ',
      cards: [
        { chip: 'PAIR 1 · CORE', color: '1D5FBF', head: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ', big: 'صَحِيحٌ أَنَّ التِّقْنِيَّةَ تُوَفِّرُ فُرَصًا، غَيْرَ أَنَّ الفَجْوَةَ قَائِمَةٌ.', en: 'True, technology offers opportunities; however, the gap remains.', clue: 'ṣaḥīḥun anna … ghayra anna' },
        { chip: 'PAIR 2 · DEVELOP', color: 'C0386B', head: 'لَا يُمْكِنُ إِنْكَارُ أَنَّ … مَعَ ذٰلِكَ', big: 'لَا يُمْكِنُ إِنْكَارُ أَنَّ التَّطْوِيرَ مُكْلِفٌ، مَعَ ذٰلِكَ يَفُوقُ العَائِدُ التَّكْلِفَةَ.', en: 'Undeniably it is costly; nonetheless the return outweighs the cost.', clue: 'lā yumkinu inkāru anna … maʿa dhālika' },
        { chip: 'PAIR 3 · STRETCH', color: '6B4C9A', head: 'بِالرَّغْمِ مِنْ … فَإِنَّ', big: 'بِالرَّغْمِ مِنَ التَّكْلِفَةِ، فَإِنَّ الاسْتِثْمَارَ فِي الإِنْسَانِ لَا بَدِيلَ عَنْهُ.', en: 'Despite the cost, investing in people is irreplaceable.', clue: 'bi-l-raghmi min + noun, fa-inna' },
      ],
      error: { text: 'Mistake 2: answer a concession with ghayra anna, not wa-. After bi-l-raghmi min use fa-inna.', pairs: [['غَيْرَ أَنَّ الفَجْوَةَ', 'وَالفَجْوَةُ'], ['بِالرَّغْمِ مِنْ …، فَإِنَّ', 'بِالرَّغْمِ مِنْ …، غَيْرَ أَنَّ']] },
      notes: `GRAMMAR PART 2 — website rules “Concession” and “Refutation”, teaching point 2 (“The concession–refutation pair is the peak move”) and mistake 2.
WEBSITE CORRECTION: the website live builder has «بِالرَّغْمِ مِنَ التَّكْلِفَةِ، غَيْرَ أَنَّ …» and the sorter «بِالرَّغْمِ مِنَ التَّقَدُّمِ، مَعَ ذٰلِكَ تَبْقَى …». Both double the concession (like English “Despite the cost, however, …”). In this deck they read «… فَإِنَّ …» and «… تَبْقَى …».
After غَيْرَ أَنَّ / فَإِنَّ the next noun is in -a (الفَجْوَةَ · الاسْتِثْمَارَ); after مَعَ ذٰلِكَ a normal verbal sentence follows.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · anna + indicative vs an + subjunctive (website mistakes 1 and 3, quiz 5–6) · Develop', title: 'Anna -u or an -a?', ar: 'أَنَّ أَمْ أَنْ؟',
      cols: [{ label: 'Trigger', w: 2.8, size: 18 }, { label: 'Type', w: 1.6 }, { label: 'Verb', w: 1.9, size: 19 }, { label: 'Example (website texts)', w: 6.03, size: 16 }],
      rows: [
        { core: true, cells: ['{w|صَحِيحٌ أَنَّ}', 'fact (-u)', '{w|يَسْتَلْزِمُ}', 'صَحِيحٌ أَنَّ التَّطْوِيرَ {w|يَسْتَلْزِمُ} مَوَارِدَ ضَخْمَةً'] },
        { cells: ['{w|أَكَّدَ … أَنَّ}', 'fact (-u)', '{w|يُفْضِي}', 'أَكَّدَ البَاحِثُونَ أَنَّ الاسْتِثْمَارَ {w|يُفْضِي} إِلَى نُمُوٍّ'] },
        { core: true, cells: ['{e|يَتَطَلَّبُ … أَنْ}', 'aim (-a)', '{e|تُوَجِّهَ}', 'يَتَطَلَّبُ التَّقَدُّمُ أَنْ {e|تُوَجِّهَ} الحُكُومَاتُ اسْتِثْمَارَاتِهَا'] },
        { cells: ['{e|لِكَيْ}', 'aim (-a)', '{e|يَنْعَمَ}', 'لِكَيْ {e|يَنْعَمَ} الجَمِيعُ بِفُرَصٍ مُتَكَافِئَةٍ'] },
        { cells: ['✗ ✗', 'mixed up', '✗', '✗ أَنَّ … يَسْتَلْزِمَ · ✗ أَنْ تُوَجِّهُ → ✓ يَسْتَلْزِمُ · تُوَجِّهَ'] },
      ],
      ltr: true,
      foot: 'Website mistakes 1 and 3: after anna (a fact) the verb ends in -u; after an (an aim) it ends in -a.',
      notes: `GRAMMAR PART 3 — website mistakes 1 and 3, quiz 5 and 6, mission rounds 4, 6 and 10.
Memory hook: أَنَّ has a shadda and a NOUN after it (أَنَّ التَّطْوِيرَ …) and states a FACT → the verb stays -u. أَنْ has a sukūn, a VERB straight after it, and points to an AIM or a demand → the verb takes -a.
The essay uses both: facts in P1–P3 (anna), proposals in P4 (an). That is why the conclusion of every P5 essay has a verb in -a.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the connector bank by job (website vocabulary, listening and mission) · Stretch', title: 'The right connector for each job', ar: 'الرَّوَابِطُ وَوَظَائِفُهَا',
      cols: [{ label: 'Job', w: 1.8 }, { label: 'Connectors (website vocabulary)', w: 5.3, size: 17 }, { label: 'Example', w: 5.23, size: 16 }],
      rows: [
        { core: true, cells: ['concede', '{w|صَحِيحٌ أَنَّ} · {w|لَا يُمْكِنُ إِنْكَارُ أَنَّ} · {w|بِالرَّغْمِ مِنْ}', 'لَا يُمْكِنُ إِنْكَارُ أَنَّ بَعْضَ الإِصْلَاحَاتِ تَعَثَّرَتْ'] },
        { core: true, cells: ['refute', '{e|غَيْرَ أَنَّ} · {e|مَعَ ذٰلِكَ} · {e|لٰكِنْ}', 'مَعَ ذٰلِكَ تَبْقَى الأَوْلَوِيَّةُ وَاضِحَةً'] },
        { cells: ['contrast', '{m|فِي المُقَابِلِ} · {m|وَعَلَى النَّقِيضِ مِنْ ذٰلِكَ}', 'فِي المُقَابِلِ، يُفْضِي الإِهْمَالُ إِلَى التَّفَاوُتِ'] },
        { cells: ['evidence', '{p|يُشَارُ إِلَى أَنَّ} · {p|أَكَّدَ … أَنَّ} · {p|تُفْضِي إِلَى}', 'العَائِدُ {p|يَفُوقُ التَّكْلِفَةَ} بِأَشْوَاطٍ'] },
        { cells: ['conclude', '{k|وَبِنَاءً عَلَى مَا سَبَقَ} · {k|وَفِي ضَوْءِ مَا سَبَقَ} · {k|وَخُلَاصَةُ القَوْلِ}', 'وَفِي ضَوْءِ مَا سَبَقَ، يَبْقَى التَّعْلِيمُ أَوْلَوِيَّةً'] },
      ],
      ltr: true,
      foot: 'Website mission: a bare wa- or thumma cannot refute or conclude — choose the connector by its JOB.',
      notes: `GRAMMAR PART 4 — website vocabulary groups 2–3, the listening and mission rounds 3, 8 and 9.
Range tip for Stretch: use a DIFFERENT connector from each row — six different connectors in 130 words is exactly the Range the mark scheme rewards.
Row 3 (example) is teacher-built from the vocabulary; all other examples are from the website texts.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me build a Grade A essay',
    steps: [
      { head: 'P1 · Thesis', ar: '{p|يُشَارُ إِلَى أَنَّ} …', think: 'Claim.' },
      { head: 'P2 · Evidence', ar: '{m|أَكَّدَ} البَاحِثُونَ {m|أَنَّ} …', think: 'Cite.' },
      { head: 'P3 · Balance', ar: '{w|صَحِيحٌ أَنَّ} … {e|غَيْرَ أَنَّ} …', think: 'Concede, answer.' },
      { head: 'P4 · Close', ar: '{k|وَبِنَاءً عَلَى مَا سَبَقَ} … أَنْ + -a', think: 'Propose.' },
    ],
    legend: ['p', 'm', 'w', 'e', 'k'], legendLabels: { p: 'THESIS', m: 'EVIDENCE', w: 'CONCESSION', e: 'REFUTATION', k: 'CONCLUSION' },
    model: '{p|يُشَارُ إِلَى أَنَّ} التَّعْلِيمَ مِنْ أَكْثَرِ القَضَايَا إِلْحَاحًا فِي العَالَمِ العَرَبِيِّ المُعَاصِرِ. {m|أَكَّدَ} البَاحِثُونَ {m|أَنَّ} الاسْتِثْمَارَ فِي التَّعْلِيمِ يُفْضِي إِلَى نُمُوٍّ اقْتِصَادِيٍّ مُسْتَدَامٍ. {w|صَحِيحٌ أَنَّ} تَطْوِيرَ المَنْظُومَةِ التَّعْلِيمِيَّةِ يَسْتَلْزِمُ مَوَارِدَ ضَخْمَةً، {e|غَيْرَ أَنَّ} العَائِدَ يَفُوقُ التَّكْلِفَةَ بِأَشْوَاطٍ. {k|وَبِنَاءً عَلَى مَا سَبَقَ}، يَتَطَلَّبُ التَّقَدُّمُ الحَقِيقِيُّ أَنْ تُوَجِّهَ الحُكُومَاتُ اسْتِثْمَارَاتِهَا نَحْوَ الإِنْسَانِ.',
    modelEn: 'It is noted that education is one of the most pressing issues in the contemporary Arab world. Researchers have confirmed that investing in education leads to sustainable economic growth. It is true that developing the education system requires huge resources; however, the return far outweighs the cost. Based on the above, real progress requires governments to direct their investments towards people.',
    notes: 'I DO (3 min) — from the website reading and writing model. Think aloud: “P1, my claim: yushāru ilā anna. P2, my proof: akkada l-bāḥithūna anna — a fact, so -u. P3, I’m fair: ṣaḥīḥun anna … yastalzimU (fact, -u) — then I answer: ghayra anna. P4, I propose: wa-bināʾan ʿalā mā sabaqa … an tuwajjihA (aim, -a).”',
  },
  patternEn: ['it cannot be denied that education is the fundamental pillar of any just society', 'it is true that developing education requires resources; however, the return outweighs the cost', 'based on the above, progress requires governments to direct their investments'],
  gameKey: 'P5-L07',
  game: {
    title: 'Argument moves: match the picture',
    pick: [1, 3, 5],
    en: ['I think education is important because it opens up opportunities.', 'On the one hand there are benefits; on the other there are challenges.', 'In conclusion, I think the solution needs cooperation.'],
    icons: [[['fa6', 'FaLightbulb', 'C77700'], ['fa6', 'FaArrowRight', '1D5FBF']], [['fa6', 'FaScaleBalanced', '6B4C9A'], ['fa6', 'FaCommentDots', 'C0386B']], [['fa6', 'FaFlagCheckered', '1E6B52'], ['fa6', 'FaHandshake', '1D5FBF']]],
    labels: ['claim + reason', 'two sides', 'conclusion'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6) — simple argument moves. Upgrade each card to P5 register: أَرَى أَنَّ → يُشَارُ إِلَى أَنَّ · مِنْ جِهَةٍ … وَمِنْ جِهَةٍ أُخْرَى → صَحِيحٌ أَنَّ … غَيْرَ أَنَّ · فِي الخِتَامِ → وَبِنَاءً عَلَى مَا سَبَقَ.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build an essay spine (website live builder, one item corrected)', title: 'Thesis + balance + conclusion', ar: 'ابْنِ عَمُودَ المَقَالِ',
      cols: [{ label: '1 · Thesis / evidence', w: 4.1, size: 15 }, { label: '2 · Concession + refutation', w: 4.1, size: 15 }, { label: '3 · Conclusion', w: 4.13, size: 15 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Then label each part with its job: P1 · P3 · P4.',
      notes: `WE DO (3 min) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Correction: column 2 row 3 reads «بِالرَّغْمِ مِنَ التَّكْلِفَةِ، فَإِنَّ …» (the website has «… غَيْرَ أَنَّ …», a doubled concession — see Grammar Part 2).
Core: read row 1 across. Develop: which column-2 pair uses maʿa dhālika? Stretch: insert a Type 2 between columns 2 and 3.`,
    },
  ],
  sorterTitle: 'Thesis, balance — or conclusion?',
  sorterCats: ['thesis / evidence', 'concession + refutation', 'conclusion'],
  sorterNotes: 'Note: lā yumkinu inkāru anna is filed under thesis here (an emphatic claim) — but it can also concede. Then put one card from each column in order to make a mini-essay.',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: { ...site.writing, prompt: 'Write a 120–130-word argumentative essay on a social issue from P5-L01 to L06. Move thesis → evidence → concession (ṣaḥīḥun anna) → refutation (ghayra anna) → conclusion (wa-bināʾan ʿalā mā sabaqa + a verb in -a), giving each paragraph its structural role.', checklist: ['A thesis (yushāru ilā anna) and cited evidence (akkada … anna).', 'A genuine concession (ṣaḥīḥun anna) answered by a refutation (ghayra anna).', 'A Type 2 counterfactual within the analysis.', 'A conclusion (wa-bināʾan ʿalā mā sabaqa) + a verb in -a; 120–130 words.'] }, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns, final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; لِكَيْ always written with its sukūn; two doubled concessions corrected (live builder: بِالرَّغْمِ مِنْ … غَيْرَ أَنَّ → … فَإِنَّ; sorter: بِالرَّغْمِ مِنْ … مَعَ ذٰلِكَ تَبْقَى → … تَبْقَى); rule formulas, writing prompt and checklist in transliteration; sorter headings in transliteration; game cards 0, 2 and 4 not used; the architecture, pair, anna / an and connector tables are teacher-built from the website texts. All other website items are used as published.',
  hints: ['ṣaḥīḥun anna … yastalzima?', '…، wa-l-fajwa?', 'an tuwajjihu?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 5.\nListen for: ṣaḥīḥun anna · ghayra anna · maʿa dhālika · wa-bināʾan ʿalā mā sabaqa.',
  listenRoutes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 5 — and list the essay parts in the order the teacher names them.',
  gloss: [
    ['يَقُولُ المُعَلِّمُ: المَقَالُ الحِجَاجِيُّ المُمْتَازُ لَيْسَ قَائِمَةَ آرَاءٍ، بَلْ بِنْيَةٌ مُتَكَامِلَةٌ.', 'The teacher says: an excellent argumentative essay is not a list of opinions but an integrated structure.'],
    ['تَبْدَأُ بِالتَّمْهِيدِ وَطَرْحِ الأُطْرُوحَةِ، ثُمَّ تُقَدِّمُ الأَدِلَّةَ بِالاسْتِشْهَادِ وَالإِحْصَاءَاتِ.', 'You begin with the introduction and the thesis, then present the evidence with citations and statistics.'],
    ['بَعْدَ ذٰلِكَ يَأْتِي نَقِيضُ الحُجَّةِ: صَحِيحٌ أَنَّ لِلطَّرَفِ الآخَرِ وِجْهَةَ نَظَرٍ، غَيْرَ أَنَّ الوَاقِعَ يُثْبِتُ عَكْسَ ذٰلِكَ.', 'After that comes the counter-argument: it is true that the other side has a point of view; however, reality proves the opposite.'],
    ['لَا يُمْكِنُ إِنْكَارُ أَنَّ التَّطْوِيرَ مُكْلِفٌ، مَعَ ذٰلِكَ يَفُوقُ العَائِدُ التَّكْلِفَةَ.', 'It cannot be denied that development is costly; nonetheless, the return outweighs the cost.'],
    ['وَتُخْتَمُ بِخَاتِمَةٍ: وَبِنَاءً عَلَى مَا سَبَقَ، يَتَطَلَّبُ التَّقَدُّمُ أَنْ تُوَجِّهَ الحُكُومَاتُ اسْتِثْمَارَاتِهَا نَحْوَ الإِنْسَانِ. مَنْ يُتْقِنُ هٰذِهِ البِنْيَةَ يَكْتُبُ فِي أَيِّ مَوْضُوعٍ حِجَاجِيٍّ.', 'It closes with a conclusion: based on the above, progress requires governments to direct their investments towards people. Whoever masters this structure can write on any argumentative topic.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا أُطْرُوحَتُكَ وَدَلِيلُكَ؟' },
      { route: 'develop', ar: 'مَا نَقِيضُ الحُجَّةِ، وَكَيْفَ تَرُدُّ عَلَيْهِ؟' },
      { route: 'stretch', ar: 'كَيْفَ تَخْتِمُ بِرَابِطٍ خِتَامِيٍّ وَفِعْلٍ مَنْصُوبٍ؟' },
    ],
    stems: [
      { route: 'core', ar: 'يُشَارُ إِلَى أَنَّ ______ ، وَأَكَّدَ البَاحِثُونَ أَنَّ ______ .' },
      { route: 'develop', ar: 'صَحِيحٌ أَنَّ ______ ، غَيْرَ أَنَّ ______ .' },
      { route: 'stretch', ar: 'وَبِنَاءً عَلَى مَا سَبَقَ، يَتَطَلَّبُ التَّقَدُّمُ أَنْ ______ .' },
    ],
    modelEn: ['What is the counter-argument?', 'It is true that development requires huge resources.', 'And how do you respond?', 'However, the return outweighs the cost; based on the above, progress requires that we invest in education.'],
    notes: 'Website prompts and model. Pair task: “essay plan in 90 seconds” — A chooses a P5 topic (L01–L06) and gives the thesis + evidence; B gives the concession–refutation; together they say the conclusion. Swap topics. To a girl: أُطْرُوحَتُكِ وَدَلِيلُكِ · تَرُدِّينَ · تَخْتِمِينَ.',
  },
  write: {
    core: { amount: '3–4 sentences', how: 'Website Core: a thesis, one piece of evidence and one concession–refutation pair.' },
    develop: { amount: '120 words', how: 'Website Develop: add a Type 2 counterfactual and a conclusion connector.' },
    stretch: { amount: '120–130 words', how: 'Website Stretch: the full architecture and a subjunctive conclusion.' },
  },
  frames: {
    core: [
      { en: 'P1 · It is noted that … is one of the most pressing issues.', ar: 'يُشَارُ إِلَى أَنَّ ______ مِنْ أَكْثَرِ القَضَايَا إِلْحَاحًا.' },
      { en: 'P2 · Researchers confirmed that … leads to …', ar: 'أَكَّدَ البَاحِثُونَ أَنَّ ______ يُفْضِي إِلَى ______ .' },
      { en: 'P3 · It is true that … requires …', ar: 'صَحِيحٌ أَنَّ ______ يَسْتَلْزِمُ ______ ،' },
      { en: 'P3 · … however, the return outweighs the cost.', ar: 'غَيْرَ أَنَّ العَائِدَ يَفُوقُ التَّكْلِفَةَ بِأَشْوَاطٍ.' },
    ],
    develop: [
      { en: 'It cannot be denied that …; nonetheless …', ar: 'لَا يُمْكِنُ إِنْكَارُ أَنَّ ______ ، مَعَ ذٰلِكَ ______ .' },
      { en: 'Despite …, …', ar: 'بِالرَّغْمِ مِنْ ______ ، فَإِنَّ ______ .' },
      { en: 'Had … been directed earlier, …', ar: 'لَوْ وُجِّهَتِ ______ مُبَكِّرًا، لَكَانَ ______ .' },
      { en: 'P4 · Based on the above, progress requires …', ar: 'وَبِنَاءً عَلَى مَا سَبَقَ، يَتَطَلَّبُ التَّقَدُّمُ أَنْ ______ .' },
    ],
    bank: ['التَّعْلِيمَ', 'الاسْتِثْمَارَ فِي التَّعْلِيمِ', 'نُمُوٍّ اقْتِصَادِيٍّ مُسْتَدَامٍ', 'تَطْوِيرَ المَنْظُومَةِ', 'مَوَارِدَ ضَخْمَةً', 'بَعْضَ الإِصْلَاحَاتِ تَعَثَّرَتْ', 'تَبْقَى الأَوْلَوِيَّةُ وَاضِحَةً', 'التَّكْلِفَةِ', 'المِيزَانِيَّاتُ', 'التَّقَدُّمُ أَسْرَعَ', 'تُوَجِّهَ الحُكُومَاتُ اسْتِثْمَارَاتِهَا', 'تَقْلِيصِ التَّفَاوُتِ'],
  },
  stretch: [
    ['إِذْ يُمَثِّلُ الرَّكِيزَةَ الأَسَاسِيَّةَ', 'since it represents the fundamental pillar'],
    ['وَإِلَى تَقْلِيصِ التَّفَاوُتِ الاجْتِمَاعِيِّ', 'and to reducing social inequality'],
    ['بِأَشْوَاطٍ', 'by far'],
    ['أَسْرَعَ وَأَعْمَقَ', 'faster and deeper'],
    ['بِفُرَصٍ مُتَكَافِئَةٍ', 'with equal opportunities'],
  ],
  modelEn: 'It is noted that education is one of the most pressing issues in the Arab world, since it is the pillar of any just society. Researchers have confirmed that investing in education leads to sustainable growth and reduces social inequality. It is true that developing the system requires huge resources; however, the return far outweighs the cost. Undeniably, some reforms have stumbled; nonetheless, the priority remains clear. Had budgets been directed towards education earlier, progress would have been faster and deeper. Based on the above, real progress requires governments to invest in people so that everyone enjoys equal opportunities.',
  find: ['yushāru ilā anna (thesis)', 'akkada … anna (evidence)', 'ṣaḥīḥun anna … ghayra anna', 'wa-bināʾan … an tuwajjiha'],
  modelNotes: 'Website writing model. Evidence: يُشَارُ إِلَى أَنَّ … إِذْ يُمَثِّلُ (P1) · أَكَّدَ البَاحِثُونَ أَنَّ … يُفْضِي إِلَى (P2) · صَحِيحٌ أَنَّ … يَسْتَلْزِمُ … غَيْرَ أَنَّ … يَفُوقُ · لَا يُمْكِنُ إِنْكَارُ أَنَّ … مَعَ ذٰلِكَ (P3) · لَوْ وُجِّهَتْ … لَكَانَ · وَبِنَاءً عَلَى مَا سَبَقَ … أَنْ تُوَجِّهَ … لِكَيْ يَنْعَمَ (P4).',
  selfCheck: [
    { route: 'core', text: 'My essay has 4 jobs in order: thesis, evidence, balance, conclusion.' },
    { route: 'core', text: 'Every concession is answered by ghayra anna or maʿa dhālika.' },
    { route: 'develop', text: 'After anna my verb ends in -u; after an it ends in -a.' },
    { route: 'develop', text: 'I added a Type 2 (law … la-) inside the analysis.' },
    { route: 'stretch', text: 'I used 6 different connectors and 120–130 words.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['إِلْحَاحًا', 'urgency (most pressing)'], ['المُعَاصِرِ', 'contemporary'], ['مُسْتَدَامٍ', 'sustainable'], ['المَنْظُومَةِ', 'the system'], ['يَسْتَلْزِمُ', 'requires, entails'],
    ['ضَخْمَةً', 'huge'], ['العَائِدَ', 'the return, yield'], ['بِأَشْوَاطٍ', 'by far'], ['تَعَثَّرَتْ', 'stumbled, faltered'], ['المِيزَانِيَّاتُ', 'budgets'],
  ],
  prep: {
    words: [['نَصٌّ جَدَلِيٌّ', 'an argumentative text', 'pl. نُصُوصٌ جَدَلِيَّةٌ'], ['التَّحَيُّزُ فِي الطَّرْحِ', 'bias in presentation', '—'], ['مَوْثُوقِيَّةُ المَصْدَرِ', 'source reliability', 'pl. المَصَادِرُ'], ['القَرِينَةُ', 'the contextual clue', 'pl. القَرَائِنُ'], ['يَسْتَدْعِي', 'calls for, necessitates', 'f. تَسْتَدْعِي']],
    questionEn: 'How can you tell whether a text is biased?',
    questionAr: 'أَعْرِفُ أَنَّ النَّصَّ مُتَحَيِّزٌ عِنْدَمَا ______ .',
    homework: {
      core: 'Write a thesis, one piece of evidence and one concession–refutation pair on a P5 topic.',
      develop: 'Add a Type 2 and a conclusion connector (120 words).',
      stretch: 'Website writing task: a 120–130-word argumentative essay.',
    },
    wordsSource: 'The five words come from the website P5-L08 vocabulary (reading social-issue texts).',
  },
  remember: 'Remember: thesis → evidence → concession → refutation → conclusion. Every ṣaḥīḥun anna needs its ghayra anna; anna (fact) + -u, an (aim) + -a; and the conclusion proposes, it never adds a new point.',
});

module.exports = { meta, slides };
