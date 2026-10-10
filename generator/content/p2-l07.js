'use strict';
/* P2-L07 · Education in the Arab World — History and Change — website: Pathways › Progression › P2 › P2-L07 (tense across a historical timeline: كَانَ قَدْ
 * for the Golden Age, the simple past for decline and reform, the present for today with يَشْهَدُ / يَمُرُّ بِـ, and both conditional types for analysis).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live builder and mission used as published, with waṣl alif
 * shown without a kasra (الاسْتِقْلَالِ · الاسْتِعْمَارُ) and ابْنَ رُشْدٍ given its tanwīn. The website visual game repeats the P2-L01 / P2-L03
 * education-path cards, so it is not used here. English added to the patterns; rule formulas in transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P2')({
  n: 7, fileTitle: 'Education_in_the_Arab_World', chip: 'Culture',
  title: 'Education in the Arab World — History and Change', arabic: 'التَّعْلِيمُ فِي العَالَمِ العَرَبِيِّ — التَّارِيخُ وَالتَّغْيِيرُ',
  focus: 'Trace Arab education across time: the Golden Age in the past perfect (kāna qad), decline and reform in the simple past, today’s challenges in the present — then analyse it with both conditionals (law … la- · idhā … sa-).',
  icon: 'FaLandmark', iconSet: 'fa6',
});

const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const he3 = (she, they) => ({ tag: 'he · she · they', forms: [{ l: 'she', ar: she }, { l: 'they', ar: they }] });
const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const fixR = (o) => JSON.parse(JSON.stringify(o).replace(/ابْنَ رُشْدَ /g, 'ابْنَ رُشْدٍ '));
const site = fixR(D.waslFix(D.site('P2-L07')));
const RH = [['Past perfect: the earliest layer', 'kāna qad + past'], ['Simple past: later events', 'izdahara · inḥaṭṭa · taṭawwara'], ['Present: today’s challenges', 'yashhad · yamurr bi-'], ['Analysis with both conditionals', 'law … la- · idhā … sa-']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P2-L07', {
  support: `• Core: five history sentences, choosing the right tense for each period. Develop: add a reported-speech citation of historians. Stretch: the website 100–110-word analysis with past perfect, simple past, present, a citation and both conditionals.
• Make the timeline visible: draw one line on the board — 9th century (kāna qad) → invasions / colonialism (past) → independence (past) → today (present) → the future (idhā … sa-). Every sentence students say goes on the line.
• Islamic link: the first revealed word was «اقْرَأْ». Fāṭima al-Fihriyya founded al-Qarawiyyīn in Fez in 859 CE — often described as the oldest university still operating; the House of Wisdom flourished in Abbasid Baghdad in the 9th century.
• Be balanced and accurate: celebrate the heritage without dismissing other civilisations, and present today’s challenges (illiteracy, conflict zones) with care — some students may have family links to affected countries.
• Grammar links: past perfect (P2-L03) · reported speech (P2-L02) · Type 2 conditional (P2-L06) · Type 1 conditional (P1-L03).`,
  teach: 'Tense along a timeline, kāna qad agreement, yamurr bi-, both conditionals for analysis.',
  wedo: 'Build a historical analysis, sort tenses by period, hear the history of Arab education.',
  next: { nextCode: 'P2-L08', nextTitle: 'Reading — Education Texts', nextAr: 'القِرَاءَةُ — نُصُوصُ التَّعْلِيمِ' },
  objectives: ['Narrate the Golden Age with the past perfect (kāna qad).', 'Use the simple past for later historical events.', 'Describe today’s challenges in the present, with statistics.', 'Combine both conditional types in a historical argument.'],
  rulesAr: 'الأَزْمِنَةُ عَبْرَ الخَطِّ التَّارِيخِيِّ',
  doNow: {
    questions: [
      q('What does دَارُ الحِكْمَةِ mean?', ['the House of Wisdom', 'a Quranic school', 'the Golden Age'], 'Prepared at home (P2-L06).'),
      q('What does العَصْرُ الذَّهَبِيُّ mean?', ['the Golden Age', 'Islamic civilisation', 'colonialism'], 'Prepared at home (P2-L06).'),
      q('What does أَسَّسَ mean?', ['he founded', 'it flourished', 'it declined'], 'Prepared at home (P2-L06).'),
      q('Complete the Type 2: لَوْ دَرَسَ أَكْثَرَ، ___ .', ['لَنَجَحَ', 'سَيَنْجَحُ', 'يَنْجَحُ'], 'P2-L06: law … la- + past.'),
      q('Complete: كُنْتُ قَدْ ___ بَحْثِي قَبْلَ أَنْ أُسَافِرَ.', ['أَنْهَيْتُ', 'أُنْهِي', 'سَأُنْهِي'], 'P2-L03: kuntu qad + past.'),
    ],
    keyIdea: { text: 'Move the tense with the timeline: Golden Age → past perfect · decline → past · today → present.', ar: '{e|كَانَ قَدْ أَسَّسَ} ← {w|انْحَطَّ} ← {p|يَشْهَدُ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P2-L06. Question 4 retrieves the Type 2 conditional (P2-L06) and question 5 the past perfect (P2-L03) — today both return inside one historical text.',
  },
  routes: {
    core: ['I can name 8 words about Arab educational history.', 'I can choose the tense for each period.'],
    develop: ['I can make kāna qad agree (kānat qad · kānū qad).', 'I can cite historians (ashāra … ilā anna).'],
    stretch: ['I can analyse with law … la-kāna and idhā … sa-.', 'I can write a full timeline analysis.'],
  },
  bridge: [
    { ar: 'مَدْرَسَةٌ', urdu: 'مدرسہ', tr: 'madrasa', en: 'a school' },
    { ar: 'عَالِمٌ · عُلَمَاءُ', urdu: 'عالم · علماء', tr: 'ʿālim · ʿulamā', en: 'a scholar · scholars' },
    { ar: 'تَرْجَمَةٌ', urdu: 'ترجمہ', tr: 'tarjuma', en: 'translation' },
    { ar: 'إِصْلَاحٌ', urdu: 'اصلاح', tr: 'islāh', en: 'reform' },
    { ar: 'اسْتِعْمَارٌ', urdu: 'استعمار', tr: 'istiʿmār', en: 'colonialism' },
  ],
  bridgeNotes: 'URDU BRIDGE: مدرسہ, عالم / علماء, ترجمہ, اصلاح, استعمار and حق are all shared. Note: Urdu often uses مدرسہ for a religious school; in Arabic مَدْرَسَةٌ is any school — المَدْرَسَةُ القُرْآنِيَّةُ is the Quranic school.',
  core: ['دَارُ الحِكْمَةِ', 'العَصْرُ الذَّهَبِيُّ', 'الحَضَارَةُ الإِسْلَامِيَّةُ', 'التَّرْجَمَةُ', 'عَالِمٌ', 'الاسْتِعْمَارُ', 'إِصْلَاحٌ تَعْلِيمِيٌّ', 'مُعَدَّلُ الأُمِّيَّةِ', 'حَقُّ التَّعْلِيمِ', 'يَشْهَدُ', 'يَمُرُّ بِـ', 'أَسَّسَ'],
  forms: {
    'عَالِمٌ': { tag: 'm · f · pl', forms: [{ l: 'f.', ar: 'عَالِمَةٌ' }, { l: 'pl.', ar: 'عُلَمَاءُ' }] }, 'إِصْلَاحٌ تَعْلِيمِيٌّ': sp('إِصْلَاحَاتٌ تَعْلِيمِيَّةٌ'),
    'يَشْهَدُ': ihs('أَشْهَدُ', 'تَشْهَدُ'), 'يَمُرُّ بِـ': ihs('أَمُرُّ', 'تَمُرُّ'),
    'اِزْدَهَرَ': he3('ازْدَهَرَتْ', 'ازْدَهَرُوا'), 'اِنْحَطَّ': he3('انْحَطَّتْ', 'انْحَطُّوا'), 'تَطَوَّرَ': he3('تَطَوَّرَتْ', 'تَطَوَّرُوا'), 'أَسَّسَ': he3('أَسَّسَتْ', 'أَسَّسُوا'),
    'اِسْتَقْطَبَ': he3('اسْتَقْطَبَتْ', 'اسْتَقْطَبُوا'), 'وَاجَهَ': he3('وَاجَهَتْ', 'وَاجَهُوا'),
  },
  vocabNotes: {
    0: 'Heritage and the Golden Age: دَارُ الحِكْمَةِ (the House of Wisdom) was in Abbasid Baghdad; التَّرْجَمَةُ (translation) of Greek, Persian and Indian works fed the الازْدِهَارُ العِلْمِيُّ.',
    1: 'Change and challenge: the language of today — reform, illiteracy rates, the right to education, women’s education, curriculum modernisation.',
    2: 'History verbs: mostly PAST forms (he · she · they) for the story; يَشْهَدُ and يَمُرُّ بِـ are present, for today. يَمُرُّ is fixed with بِـ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · tense along the timeline (website rules 1–3 + table) · Core', title: 'Golden Age → decline → today', ar: 'الزَّمَنُ عَبْرَ التَّارِيخِ',
      cols: [{ label: 'Period', w: 2.1 }, { label: 'Tense', w: 1.9 }, { label: 'Website example', w: 5.4, size: 19 }, { label: 'English', w: 2.93 }],
      rows: [
        { cells: ['Golden Age', 'past perfect', '{e|كَانَ} العَرَبُ {e|قَدْ أَسَّسُوا} نِظَامًا عَالَمِيًّا.', 'The Arabs had founded a world system.'] },
        { cells: ['Golden Age', 'past perfect', '{e|كَانَتْ} دَارُ الحِكْمَةِ {e|قَدِ اسْتَقْطَبَتْ} عُلَمَاءَ.', 'The House of Wisdom had attracted scholars.'] },
        { cells: ['Decline', 'simple past', '{w|انْحَطَّ} التَّعْلِيمُ خِلَالَ فَتَرَاتِ الغَزْوِ.', 'Education declined during the invasions.'] },
        { cells: ['Independence', 'simple past', '{w|تَطَوَّرَ} التَّعْلِيمُ بَعْدَ الاسْتِقْلَالِ.', 'Education developed after independence.'] },
        { cells: ['Today', 'present', '{p|يَشْهَدُ} التَّعْلِيمُ إِصْلَاحَاتٍ جَذْرِيَّةً.', 'Education is undergoing radical reforms.'] },
      ],
      ltr: true,
      foot: 'Website common error: never the present for a Golden-Age achievement, never the past perfect for today.',
      notes: `GRAMMAR PART 1 — website rules 1–3, the website table (Golden Age → past perfect · Decline → simple past · Today → present) and teaching point “Move the tense as the timeline advances”.
Website mistake 1: يُؤَسِّسُ العَرَبُ نِظَامًا … فِي العَصْرِ الذَّهَبِيِّ ✗ → كَانَ العَرَبُ قَدْ أَسَّسُوا.
Why past perfect for the Golden Age? It happened BEFORE a later past point (before European universities existed · before the decline) — the website pattern: بِحُلُولِ القَرْنِ التَّاسِعِ، كَانَ العَرَبُ قَدْ طَوَّرُوا …`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · kāna qad agreement — he, she, they (website listening, reading and model) · Core / Develop', title: 'He had · she had · they had', ar: 'كَانَ قَدْ · كَانَتْ قَدْ · كَانُوا قَدْ',
      cols: [{ label: 'Subject', w: 2.6 }, { label: 'Past perfect', w: 6.6, size: 19 }, { label: 'Notice', w: 3.13 }],
      rows: [
        { core: true, cells: ['Ibn Rushd (he)', '{e|كَانَ} ابْنُ رُشْدٍ {e|قَدْ كَتَبَ} شُرُوحًا مُهِمَّةً.', 'kāna … kataba'] },
        { core: true, cells: ['Fāṭima al-Fihriyya (she)', '{e|كَانَتْ} فَاطِمَةُ الفِهْرِيَّةُ {e|قَدْ أَسَّسَتْ} جَامِعَةَ القَرَوِيِّينَ.', 'kānat … assasat'] },
        { cells: ['the House of Wisdom (it, f.)', '{e|كَانَتْ} دَارُ الحِكْمَةِ {e|قَدِ اسْتَقْطَبَتْ} عُلَمَاءَ.', 'qadi before waṣl'] },
        { cells: ['the Arabs — verb first', '{e|كَانَ} العَرَبُ {e|قَدْ أَسَّسُوا} أَرْقَى الأَنْظِمَةِ.', 'kāna sg. · assasū pl.'] },
        { cells: ['the scholars — subject first', 'العُلَمَاءُ {e|كَانُوا قَدْ تَرْجَمُوا} الإِرْثَ اليُونَانِيَّ.', 'kānū … tarjamū'] },
        { cells: ['the cities (f. pl., non-human)', '{e|كَانَتِ} المُدُنُ {e|قَدِ اسْتَقْطَبَتْ} مُتَرْجِمِينَ.', 'treated as she'] },
      ],
      ltr: true,
      foot: 'kāna agrees like any verb: singular when it comes first, but the main verb after the subject is plural (kāna l-ʿarabu qad assasū).',
      notes: `GRAMMAR PART 2 — kāna qad with different subjects, from the website listening (كَانَ العَرَبُ قَدْ أَسَّسُوا · كَانَتْ دَارُ الحِكْمَةِ قَدِ اسْتَقْطَبَتْ · ابْنَ رُشْدٍ كَانَ قَدْ كَتَبَ), reading (كَانَتِ المُدُنُ … قَدِ اسْتَقْطَبَتْ) and model (كَانُوا قَدْ تَرْجَمُوا).
Row 2 (teacher addition, historically accurate): Fāṭima al-Fihriyya founded al-Qarawiyyīn in Fez in 859 CE.
Website quiz 4 and mission round 4: كَانَتْ دَارُ الحِكْمَةِ قَدِ اسْتَقْطَبَتْ — qad becomes qadi before a waṣl alif; the verb agrees with the feminine subject.
Row 4 is the subtle one: kāna comes BEFORE al-ʿarab, so it stays singular; assasū comes AFTER al-ʿarab, so it is plural.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · today in the present (website rule 3) · Develop', title: 'Today: witnessing, going through, suffering', ar: 'التَّعْلِيمُ اليَوْمَ',
      cards: [
        { chip: 'YASHHAD + OBJECT · CORE', color: '1D5FBF', head: 'يَشْهَدُ', big: 'يَشْهَدُ التَّعْلِيمُ العَرَبِيُّ إِصْلَاحَاتٍ جَذْرِيَّةً.', en: 'Arab education is undergoing radical reforms.', clue: 'Direct object.' },
        { chip: 'YAMURR BI- · DEVELOP', color: '1E6B52', head: 'يَمُرُّ بِـ', big: 'تَمُرُّ مَنَاطِقُ النِّزَاعِ بِأَزَمَاتٍ تَعْلِيمِيَّةٍ.', en: 'Conflict zones are going through education crises.', clue: 'Always bi-.' },
        { chip: 'YUʿĀNĪ MIN · STRETCH', color: 'C0386B', head: 'تُعَانِي مِنْ', big: 'تُعَانِي بَعْضُ الدُّوَلِ مِنْ مُعَدَّلَاتِ أُمِّيَّةٍ مُرْتَفِعَةٍ.', en: 'Some countries suffer from high illiteracy rates.', clue: 'With a statistic.' },
      ],
      error: { text: 'Website mistake 2: yamurr is fixed with bi-.', pairs: [['تَمُرُّ المِنْطَقَةُ بِأَزْمَةٍ تَعْلِيمِيَّةٍ', 'تَمُرُّ المِنْطَقَةُ عَلَى أَزْمَةٍ تَعْلِيمِيَّةٍ']] },
      notes: `GRAMMAR PART 3 — website rule “Present: today’s challenges” (يَشْهَدُ · يَمُرُّ بِـ) with its examples; card 3 from the website listening and model (تُعَانِي … مِنْ مُعَدَّلَاتِ أُمِّيَّةٍ مُرْتَفِعَةٍ — يُعَانِي مِنْ from P1-L04).
Feminine subjects: تَمُرُّ مَنَاطِقُ (non-human plural → she) · تُعَانِي بَعْضُ الدُّوَلِ (agrees with الدُّوَل).
Past of the same verb for history: مَرَّ التَّعْلِيمُ بِفَتَرَاتِ ضَعْفٍ (website reading).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · analysing history with both conditionals (website rule 4) · Stretch', title: 'What if … and what next?', ar: 'لَوْ … لَكَانَ · إِذَا … سَـ',
      cols: [{ label: 'Counterfactual about the past: law … la-', w: 6.3, size: 18 }, { label: 'Real proposal for the future: idhā … sa-', w: 6.03, size: 18 }],
      rows: [
        { core: true, cells: ['{e|لَوِ اسْتَثْمَرَ} العَالَمُ العَرَبِيُّ مُبَكِّرًا، {e|لَكَانَ} وَضْعُهُ مُخْتَلِفًا.', '{k|إِذَا وَاصَلَتِ} الإِصْلَاحَاتُ، {k|سَيَتَحَسَّنُ} الوَضْعُ.'] },
        { cells: ['{e|لَوْ عَادَ} الاسْتِثْمَارُ فِي العِلْمِ، {e|لَاسْتَعَادَتِ} المِنْطَقَةُ رِيَادَتَهَا.', '{k|إِذَا وَاصَلَتِ} الدُّوَلُ إِصْلَاحَاتِهَا، {k|سَتَتَقَلَّصُ} الفَجْوَةُ.'] },
        { cells: ['{e|لَوِ اسْتُثْمِرَ} فِي التَّعْلِيمِ بِنِسْبَةٍ مُوَازِيَةٍ، {e|لَكَانَ} الوَضْعُ مُخْتَلِفًا.', '{k|إِذَا اسْتَثْمَرَتِ} الدُّوَلُ فِي تَعْلِيمِ المَرْأَةِ، {k|سَيَرْتَفِعُ} مُعَدَّلُ التَّعَلُّمِ.'] },
      ],
      foot: 'la-kāna (would have been) is the most useful Type 2 result in history writing. Never sa- after law.',
      notes: `GRAMMAR PART 4 — website rule “Analysis with both conditionals”: counterfactual for the past, real proposal for the future. Row 1 = the website rule examples; row 2 from the website reading; row 3 left from the website listening (passive اسْتُثْمِرَ = “it was invested”); row 3 right is teacher-built.
Website mistake 3: لَوِ اسْتَثْمَرَ … سَيَكُونُ ✗ → لَكَانَ.
لَوِ before a waṣl alif (لَوِ اسْتَثْمَرَ · لَوِ اسْتُثْمِرَ) — the helping kasra from P2-L06.`,
    },
  ],
  quick: [0, 1, 2, 6],
  rest: [3, 4, 5, 7],
  ido: {
    title: 'Watch me write a history in four tenses',
    steps: [
      { head: 'Golden Age', ar: '{e|كَانَتْ} … {e|قَدِ اسْتَقْطَبَتْ}', think: 'Past perfect.' },
      { head: 'Historians', ar: '{m|وَأَشَارَ} … {m|إِلَى أَنَّ}', think: 'Citation.' },
      { head: 'Decline · today', ar: '{w|انْحَطَّ} … {p|يَشْهَدُ}', think: 'Past → present.' },
      { head: 'Analysis', ar: '{k|لَوِ اسْتَثْمَرَ} … {k|لَكَانَ}', think: 'law … la-.' },
    ],
    legend: ['e', 'm', 'w', 'p', 'k'], legendLabels: { e: 'PAST PERFECT', m: 'REPORTED', w: 'SIMPLE PAST', p: 'PRESENT', k: 'TYPE 2' },
    model: '{e|كَانَتْ} دَارُ الحِكْمَةِ {e|قَدِ اسْتَقْطَبَتْ} عُلَمَاءَ مِنْ مُخْتَلِفِ الحَضَارَاتِ. {m|وَأَشَارَ} المُؤَرِّخُونَ {m|إِلَى أَنَّ} العُلَمَاءَ المُسْلِمِينَ كَانُوا قَدْ تَرْجَمُوا الإِرْثَ اليُونَانِيَّ. ثُمَّ {w|انْحَطَّ} التَّعْلِيمُ خِلَالَ فَتَرَاتِ الغَزْوِ. اليَوْمَ، {p|يَشْهَدُ} التَّعْلِيمُ العَرَبِيُّ إِصْلَاحَاتٍ. {k|لَوِ اسْتَثْمَرَ} العَالَمُ العَرَبِيُّ مُبَكِّرًا، {k|لَكَانَ} وَضْعُهُ العِلْمِيُّ مُخْتَلِفًا.',
    modelEn: 'The House of Wisdom had attracted scholars from different civilisations. Historians pointed out that Muslim scholars had translated the Greek heritage. Then education declined during the periods of invasion. Today, Arab education is undergoing reforms. If the Arab world had invested early, its scientific situation would have been different.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud while pointing at the board timeline: “Earliest layer: kānat … qadi staqṭabat — feminine, qadi before waṣl. Cite: ashāra … ilā anna. Move forward: inḥaṭṭa (simple past). Today: yashhadu (present). Analyse: law + past, la-kāna.”',
  },
  patternEn: ['by the ninth century, the Arabs had developed advanced systems', 'education declined during the invasions, then developed after independence', 'if the Arab world had invested early, its scientific situation would have been different'],
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build a historical analysis (website live builder)', title: 'Achievement + challenge + analysis', ar: 'ابْنِ تَحْلِيلَكَ',
      cols: [{ label: '1 · Golden Age (kāna qad)', w: 4.0, size: 16 }, { label: '2 · Today (present)', w: 3.9, size: 16 }, { label: '3 · Analysis (law · idhā · citation)', w: 4.43, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Say it, then write three different versions.',
      notes: `WE DO (3 min) — the website live builder: “Build a historical analysis from a past-perfect achievement, a present challenge and a counterfactual.” Website feedback: any three different combinations work.
Core: read row 1 across. Develop: mix rows and name each tense. Stretch: the website challenge — write your own three-part line (past-perfect achievement · present challenge · counterfactual with لَوْ).`,
    },
  ],
  sorterTitle: 'Golden Age, later events — or today?',
  sorterNotes: 'Then put each verb in a sentence on the class timeline: كَانَ العُلَمَاءُ قَدْ تَرْجَمُوا … · ازْدَهَرَتِ العُلُومُ فِي … · يُوَاجِهُ التَّعْلِيمُ اليَوْمَ …',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('لَوْ', 'law') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra (الاسْتِقْلَالِ · الاسْتِعْمَارُ); ابْنَ رُشْدٍ with tanwīn; rule formulas in transliteration; kāna qad agreement table, “today” cards and conditional pairs are teacher-built from the website texts (Fāṭima al-Fihriyya added); the website visual game repeats the P2-L01 / P2-L03 cards and is not used. All other website items are used as published.',
  hints: ['A Golden-Age achievement in the present?', 'yamurr + ʿalā?', 'law … sa-?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nListen for: kāna qad · inḥaṭṭa · yashhad · law … la-kāna.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5 — and note the tense of every verb you hear, in order.',
  gloss: [
    ['بِحُلُولِ القَرْنِ التَّاسِعِ، كَانَ العَرَبُ قَدْ أَسَّسُوا نِظَامًا تَعْلِيمِيًّا عَالَمِيًّا قَبْلَ أَنْ تُوجَدَ الجَامِعَاتُ الأُورُوبِّيَّةُ.', 'By the ninth century, the Arabs had founded a world education system before European universities existed.'],
    ['كَانَتْ دَارُ الحِكْمَةِ فِي بَغْدَادَ قَدِ اسْتَقْطَبَتْ عُلَمَاءَ مِنْ ثَقَافَاتٍ مُتَعَدِّدَةٍ، وَازْدَهَرَتِ التَّرْجَمَةُ وَالعُلُومُ.', 'The House of Wisdom in Baghdad had attracted scholars from many cultures, and translation and the sciences flourished.'],
    ['وَأَشَارَ المُؤَرِّخُونَ إِلَى أَنَّ ابْنَ رُشْدٍ كَانَ قَدْ كَتَبَ شُرُوحًا أَصْبَحَتْ مَرْجِعًا فِي أُورُوبَّا. ثُمَّ انْحَطَّ التَّعْلِيمُ خِلَالَ فَتَرَاتِ الغَزْوِ، وَتَطَوَّرَ بَعْدَ الاسْتِقْلَالِ.', 'Historians pointed out that Ibn Rushd had written commentaries that became a reference in Europe. Then education declined during the invasions, and developed after independence.'],
    ['اليَوْمَ يَشْهَدُ التَّعْلِيمُ العَرَبِيُّ إِصْلَاحَاتٍ، لٰكِنَّ بَعْضَ المَنَاطِقِ تُعَانِي مِنْ مُعَدَّلَاتِ أُمِّيَّةٍ مُرْتَفِعَةٍ.', 'Today Arab education is undergoing reforms, but some regions suffer from high illiteracy rates.'],
    ['وَلَوِ اسْتُثْمِرَ فِي التَّعْلِيمِ بِنِسْبَةٍ مُوَازِيَةٍ لِلدُّوَلِ المُتَقَدِّمَةِ، لَكَانَ الوَضْعُ العِلْمِيُّ مُخْتَلِفًا.', 'And had education been invested in at a rate equal to developed countries, the scientific situation would have been different.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَاذَا كَانَ العَرَبُ قَدْ حَقَّقُوا فِي العَصْرِ الذَّهَبِيِّ؟' },
      { route: 'develop', ar: 'مَا التَّحَدِّي التَّعْلِيمِيُّ اليَوْمَ؟' },
      { route: 'stretch', ar: 'لَوِ اسْتُثْمِرَ فِي التَّعْلِيمِ مُبَكِّرًا، مَاذَا كَانَ سَيَخْتَلِفُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'كَانَ العَرَبُ قَدْ ______ فِي العَصْرِ الذَّهَبِيِّ.' },
      { route: 'develop', ar: 'اليَوْمَ يَشْهَدُ التَّعْلِيمُ ______ ، لٰكِنَّ ______ .' },
      { route: 'stretch', ar: 'لَوِ اسْتُثْمِرَ فِي التَّعْلِيمِ مُبَكِّرًا، ______ .' },
    ],
    modelEn: ['What had the Arabs achieved in the Golden Age?', 'They had founded the House of Wisdom and attracted scholars from all cultures.', 'And what is the challenge today?', 'Education is undergoing reforms, but if investment had returned as it was, the region would have regained its leadership.'],
    notes: 'Website prompts and model. Core stem verbs: أَسَّسُوا · تَرْجَمُوا · طَوَّرُوا (plural after kāna l-ʿarabu qad). Stretch: the result must start with la- (لَكَانَ · لَاسْتَعَادَتْ).',
  },
  write: {
    core: { amount: '5 sentences', how: 'Website Core: five history sentences, choosing the right tense for each period.' },
    develop: { amount: '60–80 words', how: 'Website Develop: add a reported-speech citation of historians.' },
    stretch: { amount: '100–110 words', how: 'Website task: past perfect, simple past and present, one citation and both conditional types.' },
  },
  frames: {
    core: [
      { en: 'By the ninth century, the Arabs had …', ar: 'بِحُلُولِ القَرْنِ التَّاسِعِ، كَانَ العَرَبُ قَدْ ______ .' },
      { en: 'The House of Wisdom had attracted …', ar: 'كَانَتْ دَارُ الحِكْمَةِ قَدِ اسْتَقْطَبَتْ ______ .' },
      { en: 'Then education declined during …', ar: 'ثُمَّ انْحَطَّ التَّعْلِيمُ خِلَالَ ______ .' },
      { en: 'Today, education is undergoing …', ar: 'اليَوْمَ، يَشْهَدُ التَّعْلِيمُ ______ .' },
    ],
    develop: [
      { en: 'Historians pointed out that …', ar: 'أَشَارَ المُؤَرِّخُونَ إِلَى أَنَّ ______ .' },
      { en: 'Some regions are going through crises in …', ar: 'تَمُرُّ بَعْضُ المَنَاطِقِ بِأَزَمَاتٍ ______ .' },
      { en: 'If the Arab world had invested early, …', ar: 'لَوِ اسْتَثْمَرَ العَالَمُ العَرَبِيُّ مُبَكِّرًا، ______ .' },
      { en: 'If the reforms continue, …', ar: 'إِذَا وَاصَلَتِ الإِصْلَاحَاتُ، ______ .' },
    ],
    bank: ['أَسَّسُوا أَرْقَى الأَنْظِمَةِ', 'عُلَمَاءَ مِنْ كُلِّ الثَّقَافَاتِ', 'تَرْجَمُوا الإِرْثَ اليُونَانِيَّ', 'فَتَرَاتِ الغَزْوِ', 'إِصْلَاحَاتٍ جَذْرِيَّةً', 'مُعَدَّلَاتُ الأُمِّيَّةِ', 'تَعْلِيمُ المَرْأَةِ', 'تَحْدِيثُ المَنَاهِجِ', 'لَكَانَ وَضْعُهُ مُخْتَلِفًا', 'لَاسْتَعَادَتِ المِنْطَقَةُ رِيَادَتَهَا', 'سَيَتَحَسَّنُ الوَضْعُ', 'سَتَتَقَلَّصُ الفَجْوَةُ'],
  },
  stretch: [
    ['أَرْقَى الأَنْظِمَةِ التَّعْلِيمِيَّةِ', 'the finest education systems'],
    ['عُلَمَاءَ مِنْ مُخْتَلِفِ الحَضَارَاتِ', 'scholars from different civilisations'],
    ['تَرْجَمُوا الإِرْثَ اليُونَانِيَّ وَأَضَافُوا إِلَيْهِ', 'they translated the Greek heritage and added to it'],
    ['بِنِسْبَةٍ مُوَازِيَةٍ لِلدُّوَلِ المُتَقَدِّمَةِ', 'at a rate equal to developed countries'],
    ['مُخْتَلِفًا جَذْرِيًّا', 'radically different'],
  ],
  modelEn: 'The Arab world had founded the finest education systems during the Golden Age, and the House of Wisdom had attracted scholars from different civilisations. Historians pointed out that Muslim scholars had translated the Greek heritage and added to it. Then education declined during the periods of invasion, and developed after independence. Today, Arab education is undergoing reforms, but some countries suffer from high illiteracy rates. If the Arab world had invested in education at a rate equal to developed countries, its scientific situation would have been radically different. And if the reforms continue, the situation will improve.',
  find: ['three past perfects (kāna qad · kānat qad · kānū qad)', 'a citation (ashāra … ilā anna)', 'simple past → present (inḥaṭṭa · yashhadu)', 'law … la-kāna and idhā … sa-'],
  modelNotes: 'Website writing model. Evidence: كَانَ … قَدْ أَسَّسَ · كَانَتْ … قَدِ اسْتَقْطَبَتْ · وَأَشَارَ المُؤَرِّخُونَ إِلَى أَنَّ … كَانُوا قَدْ تَرْجَمُوا · ثُمَّ انْحَطَّ … وَتَطَوَّرَ · اليَوْمَ، يَشْهَدُ … تُعَانِي مِنْ · لَوِ اسْتَثْمَرَ … لَكَانَ · وَإِذَا وَاصَلَتِ … سَيَتَحَسَّنُ.',
  selfCheck: [
    { route: 'core', text: 'Golden Age = kāna qad; later = simple past; today = present.' },
    { route: 'core', text: 'yamurr has bi-; yashhad has a direct object.' },
    { route: 'develop', text: 'kāna qad agrees: kānat (she / it f.), kānū (they, subject first).' },
    { route: 'develop', text: 'I cited historians with ashāra … ilā anna.' },
    { route: 'stretch', text: 'law … la-kāna for the past; idhā … sa- for the future.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['يَحْمِلُ', 'carries'], ['عَرِيقًا', 'long-established, deep-rooted'], ['أَرْقَى', 'the finest'], ['قُرْطُبَةَ', 'Córdoba'], ['مُتَرْجِمِينَ', 'translators'],
    ['فَتَرَاتِ ضَعْفٍ', 'periods of weakness'], ['الغَزْوِ', 'invasion'], ['يُشَارُ إِلَى أَنَّ', 'it is pointed out that'], ['رِيَادَتَهَا', 'its leading role'], ['سَتَتَقَلَّصُ', 'will shrink'],
  ],
  prep: {
    words: [['نَصٌّ تَحْلِيلِيٌّ', 'an analytical text', 'pl. نُصُوصٌ'], ['مَقَالُ رَأْيٍ', 'an opinion article', 'pl. مَقَالَاتُ رَأْيٍ'], ['حُجَّةٌ مُضَادَّةٌ', 'a counter-argument', 'pl. حُجَجٌ'], ['يَسْتَشْهِدُ بِـ', 'he cites', 'تَسْتَشْهِدُ she'], ['ادَّعَى', 'he claimed (doubtful)', 'ادَّعَتْ she']],
    questionEn: 'How can a reporting verb show whether a writer believes a claim?',
    questionAr: 'عِنْدَمَا يَكْتُبُ الكَاتِبُ «ادَّعَى»، فَهٰذَا يَعْنِي أَنَّهُ ______ .',
    homework: {
      core: 'Write five history sentences — one per period — with the right tense.',
      develop: 'Add a citation: أَشَارَ المُؤَرِّخُونَ إِلَى أَنَّ …',
      stretch: 'Website writing task: a 100–110-word analysis of Arab education across time.',
    },
    wordsSource: 'The five words come from the website P2-L08 vocabulary (reading education texts).',
  },
  remember: 'Remember: match the tense to the period — kāna qad for the Golden Age, the simple past for decline and reform, the present for today — yamurr BI-, and law … la-kāna for “what if”.',
});

module.exports = { meta, slides };
