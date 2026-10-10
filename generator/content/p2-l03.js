'use strict';
/* P2-L03 · University Life and Higher Education — website: Pathways › Progression › P2 › P2-L03 (the past perfect كَانَ قَدْ + past for every person,
 * كَانَ / كَانَتْ / كُنْتُ / كَانُوا agreement, linking two past events with قَبْلَ أَنْ + subjunctive, framing with بِحُلُولِ; a university personal statement).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing and visual game used as published; waṣl alif shown without a
 * kasra inside phrases; mistake 2 shown without its bracketed Arabic note (the hint names the girl). The website visual game repeats the P2-L01 set, so
 * three different cards are used. English added to the patterns. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P2')({
  n: 3, fileTitle: 'University_Life_and_Higher_Education', chip: 'Grammar',
  title: 'University Life and Higher Education', arabic: 'الحَيَاةُ الجَامِعِيَّةُ وَالتَّعْلِيمُ العَالِي',
  focus: 'Describe university life and add temporal depth with the past perfect — كَانَ قَدْ + a past verb (كُنْتُ قَدْ أَنْجَزْتُ · كَانَتْ قَدْ حَصَلَتْ) — placing one past action before another (… قَبْلَ أَنْ أَلْتَحِقَ · بِحُلُولِ التَّخَرُّجِ …).',
  icon: 'FaGraduationCap', iconSet: 'fa6',
});

const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const raw = D.waslFix(D.site('P2-L03'));
const site = { ...raw, mistakes: raw.mistakes.map((m) => ({ ...m, wrong: m.wrong.replace(' (لِفَتَاةٍ)', '') })) };
const RH = [['The form', 'kāna / kānat + qad + past verb'], ['All persons', 'kuntu / kunta / kānū qad …'], ['Linking two past events', 'kāna qad … qabla an …'], ['Framing with bi-ḥulūli', 'bi-ḥulūli … kāna qad …']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));

const slides = D.devLesson('P2-L03', {
  support: `• Core: five past-perfect sentences with the right form of كَانَ. Develop: link two of them to a later action with قَبْلَ أَنْ or بِحُلُولِ. Stretch: the website ~100–110-word university personal statement with the past perfect, reported speech (P2-L02) and a conditional.
• Sensitivity: university is not every student’s plan, and family finances differ. Students may write about an apprenticeship, a family member’s university experience or an imagined future; scholarships and fees are discussed neutrally.
• Grammar links: كَانَ and its forms (GM-NVS-03) · قَدْ + past (D units) · أَنْ + subjunctive (D units) · reported speech (P2-L02) · Type 1 conditional (P1-L03).`,
  teach: 'University words, the past perfect for every person, two past events in order.',
  wedo: 'Sort by person, build a personal-statement timeline, match the route.',
  next: { nextCode: 'P2-L04', nextTitle: 'Study Skills and Academic Success', nextAr: 'مَهَارَاتُ الدِّرَاسَةِ وَالنَّجَاحُ الأَكَادِيمِيُّ' },
  objectives: ['Name the parts of university life in academic Arabic.', 'Form the past perfect kāna qad + past for all persons.', 'Agree kāna / kānat with the subject and keep the second verb past.', 'Write a university personal statement using the past perfect.'],
  objNotes: 'Website objectives (Arabic shown in transliteration on the slide so the lines read cleanly). The route statements turn them into this lesson’s concrete targets.',
  rulesAr: 'المَاضِي التَّامُّ',
  doNow: {
    questions: [
      q('What does مُحَاضَرَةٌ mean?', ['a lecture', 'a seminar', 'a faculty'], 'Prepared at home (P2-L02).'),
      q('What does مِنْحَةٌ دِرَاسِيَّةٌ mean?', ['a scholarship', 'tuition fees', 'a student loan'], 'Prepared at home (P2-L02).'),
      q('What does كُلِّيَّةٌ mean?', ['a faculty, college', 'a campus', 'a department'], 'Prepared at home (P2-L02).'),
      q('Report «سَأَدْرُسُ الطِّبَّ» said by a girl.', ['قَالَتْ إِنَّهَا سَتَدْرُسُ الطِّبَّ.', 'قَالَتْ أَنَّهَا سَتَدْرُسُ الطِّبَّ.', 'قَالَتْ إِنَّهَا دَرَسَتِ الطِّبَّ.'], 'P2-L02: reported speech.'),
      q('Choose the “she” form of كَانَ.', ['كَانَتْ', 'كَانَ', 'كُنْتُ'], 'GM-NVS-03: kāna and its forms.'),
    ],
    keyIdea: { text: 'Two past events? The EARLIER one takes kāna qad + a past verb.', ar: '{e|كُنْتُ قَدْ أَنْجَزْتُ} مَشْرُوعًا {k|قَبْلَ أَنْ أَلْتَحِقَ} بِالجَامِعَةِ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P2-L02. Question 4 retrieves reported speech (needed in today’s personal statement); question 5 the forms of كَانَ — the first half of the past perfect.',
  },
  routes: {
    core: ['I can say 8 university words.', 'I can form the past perfect for he / she / I.'],
    develop: ['I can place one past action before another (qabla an).', 'I can use bi-ḥulūli to frame it.'],
    stretch: ['I can write a personal statement across four times.', 'I can add reported speech and a conditional.'],
  },
  bridge: [
    { ar: 'جَامِعَةٌ', urdu: 'جامعہ', tr: 'jāmiʿa', en: 'university' },
    { ar: 'كُلِّيَّةٌ', urdu: 'کلیہ', tr: 'kulliya', en: 'faculty, college' },
    { ar: 'أُسْتَاذٌ', urdu: 'استاد', tr: 'ustād', en: 'Arabic: professor · Urdu: any teacher' },
    { ar: 'بَحْثٌ', urdu: 'بحث', tr: 'bahs', en: 'Arabic: research · Urdu: debate, argument' },
    { ar: 'مَقَالَةٌ · رِسَالَةٌ', urdu: 'مقالہ', tr: 'maqāla', en: 'a thesis (Urdu مقالہ = Arabic رِسَالَةٌ)' },
  ],
  bridgeNotes: 'URDU BRIDGE: جامعہ and کلیہ are shared (جامعہ کراچی = University of Karachi). CAREFUL: Urdu بحث means a debate or argument, but Arabic بَحْثٌ عِلْمِيٌّ is scientific research. Urdu استاد is any teacher; Arabic أُسْتَاذٌ جَامِعِيٌّ is a university professor.',
  core: ['حَرَمٌ جَامِعِيٌّ', 'كُلِّيَّةٌ', 'أُسْتَاذٌ جَامِعِيٌّ', 'مُحَاضَرَةٌ', 'بَحْثٌ عِلْمِيٌّ', 'شَهَادَةُ البَكَالُورْيُوسِ', 'مِنْحَةٌ دِرَاسِيَّةٌ', 'رُسُومٌ دِرَاسِيَّةٌ', 'الاسْتِقْلَالِيَّةُ', 'كَانَ قَدْ', 'بِحُلُولِ', 'قَبْلَ أَنْ'],
  forms: {
    'كُلِّيَّةٌ': sp('كُلِّيَّاتٌ'), 'قِسْمٌ': sp('أَقْسَامٌ'), 'مُحَاضَرَةٌ': sp('مُحَاضَرَاتٌ'), 'نَدْوَةٌ': sp('نَدَوَاتٌ'), 'وَرْشَةُ عَمَلٍ': sp('وِرَشُ عَمَلٍ'),
    'بَحْثٌ عِلْمِيٌّ': sp('بُحُوثٌ عِلْمِيَّةٌ'), 'مِنْحَةٌ دِرَاسِيَّةٌ': sp('مِنَحٌ دِرَاسِيَّةٌ'),
    'أُسْتَاذٌ جَامِعِيٌّ': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'أَسَاتِذَةٌ' }, { l: 'f.', ar: 'أُسْتَاذَةٌ جَامِعِيَّةٌ' }] },
    'كَانَ قَدْ': { tag: 'he · she · I · they', forms: [{ l: 'they', ar: 'كَانُوا قَدْ' }, { l: 'I', ar: 'كُنْتُ قَدْ' }, { l: 'she', ar: 'كَانَتْ قَدْ' }] },
    'قَبْلَ أَنْ': { tag: '+ subjunctive', forms: [{ l: 'example', ar: 'قَبْلَ أَنْ أَبْدَأَ' }] },
  },
  vocabNotes: {
    0: 'Campus and study: the plurals are on the cards — note the broken plurals أَقْسَامٌ · بُحُوثٌ · أَسَاتِذَةٌ.',
    1: 'Degrees and finance: international words take Arabic endings — البَكَالُورْيُوسُ · مَاجِسْتِيرٌ · دُكْتُورَاهْ. Fees and loans: رُسُومٌ (plural of things → رُسُومٌ دِرَاسِيَّةٌ).',
    2: 'University life and the past-perfect helpers: كَانَ قَدْ (had done) · بِحُلُولِ (by the time of) · قَبْلَ أَنْ + subjunctive (before doing) · سَابِقًا (previously).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the past perfect for every person (website rules 1–2 + table) · Core', title: 'kāna + qad + a past verb', ar: 'كَانَ قَدْ + المَاضِي',
      cols: [{ label: 'Person', w: 2.2 }, { label: 'kāna', w: 2.2, size: 24 }, { label: 'Full past perfect', w: 5.6, size: 22 }, { label: 'Meaning', w: 2.33 }],
      rows: [
        { core: true, cells: ['he', '{e|كَانَ}', '{e|كَانَ} قَدْ {k|دَرَسَ} فِي القَاهِرَةِ.', 'he had studied'] },
        { core: true, cells: ['she', '{e|كَانَتْ}', '{e|كَانَتْ} قَدْ {k|تَخَصَّصَتْ} فِي الطِّبِّ.', 'she had specialised'] },
        { core: true, cells: ['I', '{e|كُنْتُ}', '{e|كُنْتُ} قَدْ {k|أَنْهَيْتُ} بَحْثِي.', 'I had finished'] },
        { cells: ['we', '{e|كُنَّا}', '{e|كُنَّا} قَدْ {k|حَضَرْنَا} عَشَرَاتِ المُحَاضَرَاتِ.', 'we had attended'] },
        { cells: ['they (m.)', '{e|كَانُوا}', '{e|كَانُوا} قَدْ {k|تَخَرَّجُوا} قَبْلَ الأَزْمَةِ.', 'they had graduated'] },
        { cells: ['they (f.)', '{e|كُنَّ}', '{e|كُنَّ} قَدْ {k|تَخَرَّجْنَ} قَبْلَ الأَزْمَةِ.', 'they had graduated'] },
      ],
      ltr: true,
      foot: 'BOTH verbs agree with the subject: kānat … ḥaṣalat · kuntu … anhaytu · kānū … takharrajū.',
      notes: `GRAMMAR PART 1 — website rules “The form” (كَانَ / كَانَتْ + قَدْ + past verb; كَانَ agrees with the subject; the main verb stays past) and “All persons”, the website table and teaching point “Agree كَانَ and keep the verb past”.
Colour key: pink = the form of كَانَ, teal = the past verb. Both carry the same person ending — say them as a pair: kuntu … -tu · kānat … -at · kānū … -ū.
Website mistakes: كَانَ قَدْ يَدْرُسُ ✗ (present after qad) · كَانَ قَدْ حَصَلَتْ ✗ for a girl → كَانَتْ.
Row 6 (feminine plural) is for Stretch; the website asks for he / she / I / they (m.).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · two past events in order (website rule 3 + teaching point 1) · Develop', title: 'Which happened first?', ar: 'كَانَ قَدْ … قَبْلَ أَنْ …',
      cards: [
        { chip: '1 · EARLIER', color: 'C0386B', head: 'كَانَ قَدْ + past', big: 'كَانَ قَدْ أَنْهَى دِرَاسَتَهُ …', en: 'He had finished his studies …', clue: 'Happened first.' },
        { chip: '2 · LATER', color: '1E6B52', head: 'قَبْلَ أَنْ + subjunctive', big: '… قَبْلَ أَنْ يَبْدَأَ العَمَلَ.', en: '… before he started work.', clue: 'an + -a.' },
        { chip: 'BOTH · STRETCH', color: '1D5FBF', head: 'she · I', big: 'كَانَتْ قَدْ حَصَلَتْ عَلَى مِنْحَةٍ قَبْلَ أَنْ تُسَافِرَ.', en: 'She had obtained a scholarship before she travelled.', clue: 'Agree both.' },
      ],
      error: { text: 'Website mistake 3: qabla an is followed by a subjunctive, never a past verb.', pairs: [['قَبْلَ أَنْ أَبْدَأَ العَمَلَ', 'قَبْلَ أَنْ بَدَأْتُ العَمَلَ']] },
      notes: `GRAMMAR PART 2 — website rule “Linking two past events” (the past-perfect clause is the earlier action) and teaching point “كَانَ قَدْ marks the earlier of two past actions” (كَانَ قَدْ أَنْهَى دِرَاسَتَهُ قَبْلَ أَنْ يَبْدَأَ العَمَلَ).
Draw a timeline on the board: ● (kāna qad) ─────► ● (qabla an …). The verb after أَنْ is subjunctive (fatḥa): يَبْدَأَ · تُسَافِرَ · أَلْتَحِقَ — even though the meaning is past.
Website quiz item 7: يَبْدَأَ (not بَدَأَ, not سَيَبْدَأُ).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · the personal-statement timeline (website rule 4 + writing task) · Develop / Stretch', title: 'Before · then · now · next', ar: 'خَطُّ الزَّمَنِ',
      cols: [{ label: 'Time', w: 2.4 }, { label: 'Tool', w: 2.4 }, { label: 'Model (website personal statement)', w: 7.53, size: 20 }],
      rows: [
        { core: true, cells: ['by a point in the past', 'bi-ḥulūli + kuntu qad', '{m|بِحُلُولِ} نِهَايَةِ الثَّانَوِيَّةِ، {e|كُنْتُ قَدْ أَنْجَزْتُ} مَشْرُوعًا بَحْثِيًّا.'] },
        { core: true, cells: ['earlier than that', 'kuntu qad (+ mundhu)', '{e|كُنْتُ قَدْ قَرَّرْتُ} دِرَاسَةَ الطِّبِّ مُنْذُ المَرْحَلَةِ الإِعْدَادِيَّةِ.'] },
        { cells: ['now', 'present', '{w|أَدْرُسُ} الآنَ فِي السَّنَةِ الأَخِيرَةِ {w|وَأَتَفَوَّقُ} فِي العُلُومِ.'] },
        { cells: ['what others said', 'reported speech (P2-L02)', '{p|أَشَارَ} أُسْتَاذِي {p|إِلَى أَنَّنِي} مُجْتَهِدٌ.'] },
        { cells: ['next', 'conditional (P1-L03)', '{k|إِذَا قُبِلْتُ}، {k|سَأُكَرِّسُ} جُهْدِي لِلْبَحْثِ العِلْمِيِّ.'] },
      ],
      ltr: true,
      foot: 'A strong personal statement moves through time: what I had done → what I do now → what I will do.',
      notes: `GRAMMAR PART 3 — website rule “Framing with بِحُلُولِ” (“By the time of …, he had already …”) and the website writing task (two past-perfect sentences, a reported-speech clause, a Type 1 conditional, the present for the current situation). All five models come from the website personal statement.
بِحُلُولِ + a genitive noun: بِحُلُولِ التَّخَرُّجِ · بِحُلُولِ نِهَايَةِ الثَّانَوِيَّةِ.
Row 5: قُبِلْتُ is the passive past of قَبِلَ (P1-L06 passive pattern: u … i).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · accuracy check (website common error + mistakes) · Stretch', title: 'Find the slip', ar: 'دَقِّقْ',
      cols: [{ label: 'Slip', w: 4.2, size: 20 }, { label: 'Correct', w: 4.6, size: 20 }, { label: 'Rule', w: 3.53 }],
      rows: [
        { core: true, cells: ['كَانَ قَدْ يَدْرُسُ فِي القَاهِرَةِ.', 'كَانَ قَدْ {k|دَرَسَ} فِي القَاهِرَةِ.', 'past after qad'] },
        { core: true, cells: ['كَانَ قَدْ حَصَلَتْ عَلَى مِنْحَةٍ.', '{e|كَانَتْ} قَدْ حَصَلَتْ عَلَى مِنْحَةٍ.', 'kāna agrees'] },
        { cells: ['كَانُوا قَدْ تَخَرَّجَ.', 'كَانُوا قَدْ {k|تَخَرَّجُوا}.', 'both verbs agree'] },
        { cells: ['قَبْلَ أَنْ بَدَأْتُ العَمَلَ', 'قَبْلَ أَنْ {w|أَبْدَأَ} العَمَلَ', 'an + subjunctive'] },
        { cells: ['قَدْ اكْتَسَبُوا', 'قَدِ اكْتَسَبُوا', 'helping kasra'] },
      ],
      ltr: true,
      foot: 'Website common error: a present verb after qad, or kāna that does not agree with its subject.',
      notes: `GRAMMAR PART 4 — website common error (“Using a present verb after قَدْ, or failing to agree كَانَ / كَانَتْ with the subject”) and the three website mistakes, plus two extra checks.
Row 5: before a waṣl alif, قَدْ takes a helping kasra — قَدِ اكْتَسَبُوا · قَدِ اعْتَمَدُوا (website reading).
Note: قَدْ + PAST = “already / had”; قَدْ + PRESENT = “may, might” (قَدْ يَدْرُسُ = he may study) — a different meaning, which is why كَانَ قَدْ يَدْرُسُ is wrong here.`,
    },
  ],
  quick: [0, 1, 2, 6],
  rest: [3, 4, 5, 7],
  ido: {
    title: 'Watch me write a personal statement',
    steps: [
      { head: 'Earliest', ar: '{e|كُنْتُ قَدْ قَرَّرْتُ} دِرَاسَةَ الطِّبِّ', think: 'kuntu … -tu.' },
      { head: 'By then', ar: '{m|بِحُلُولِ} نِهَايَةِ الثَّانَوِيَّةِ', think: 'Frame.' },
      { head: 'Now', ar: '{w|أَدْرُسُ} الآنَ وَأَتَفَوَّقُ', think: 'Present.' },
      { head: 'Next', ar: '{k|إِذَا قُبِلْتُ}، سَأُكَرِّسُ جُهْدِي', think: 'Conditional.' },
    ],
    legend: ['e', 'm', 'w', 'k'], legendLabels: { e: 'PAST PERFECT', m: 'BY THE TIME', w: 'NOW', k: 'NEXT' },
    model: '{e|كُنْتُ قَدْ قَرَّرْتُ} دِرَاسَةَ الطِّبِّ مُنْذُ المَرْحَلَةِ الإِعْدَادِيَّةِ. {m|وَبِحُلُولِ} نِهَايَةِ الثَّانَوِيَّةِ، {e|كُنْتُ قَدْ أَنْجَزْتُ} مَشْرُوعًا بَحْثِيًّا فِي عِلْمِ الأَحْيَاءِ. {w|أَدْرُسُ} الآنَ فِي السَّنَةِ الأَخِيرَةِ {w|وَأَتَفَوَّقُ} فِي العُلُومِ. {k|وَإِذَا قُبِلْتُ}، {k|سَأُكَرِّسُ} جُهْدِي لِلْبَحْثِ العِلْمِيِّ.',
    modelEn: 'I had decided to study medicine back in middle school. By the end of secondary school, I had completed a research project in biology. I am now in my final year and I excel in science. If I am accepted, I will devote my effort to scientific research.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Earliest first: kuntu qad + qarrartu — both -tu. Frame with bi-ḥulūli. Now: present. Next: idhā + passive past qubiltu, then sa-.”',
  },
  patternEn: ['he had studied in Cairo before he enrolled at the University of London', 'she had obtained a scholarship before she travelled', 'by graduation, I had published a research paper'],
  game: {
    title: 'Which path? Match the picture',
    pick: [3, 4, 5],
    en: ['I learn online (at a distance).', 'I study to pass the exam.', 'Education helps me to get a job.'],
    icons: [[['fa6', 'FaLaptop', '1D5FBF'], ['fa6', 'FaBook', 'C77700']], [['fa6', 'FaPenToSquare', '6B4C9A'], ['fa6', 'FaBullseye', 'C0386B']], [['fa6', 'FaGraduationCap', '1E6B52'], ['fa6', 'FaArrowRight', 'C77700'], ['fa6', 'FaBriefcase', '1D5FBF']]],
    labels: ['online learning', 'studying for an exam', 'from education to a job'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6; the website repeats the P2-L01 cards). Then put each one in the past perfect: كُنْتُ قَدْ تَعَلَّمْتُ عَنْ بُعْدٍ قَبْلَ أَنْ … · كُنْتُ قَدْ دَرَسْتُ كَثِيرًا قَبْلَ أَنْ أَنْجَحَ فِي الامْتِحَانِ.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · put it in order (website listening: Layla’s journey)', title: 'Who had done what — and before what?', ar: 'رَتِّبِ الأَحْدَاثَ',
      cols: [{ label: 'Person', w: 2.1 }, { label: 'Earlier (kāna qad + past)', w: 5.2, size: 19 }, { label: 'Later (qabla an + subjunctive)', w: 5.03, size: 19 }],
      rows: [
        { core: true, cells: ['Layla (I)', 'كُنْتُ قَدْ أَنْجَزْتُ مَشْرُوعًا بَحْثِيًّا', 'قَبْلَ أَنْ أَلْتَحِقَ بِالجَامِعَةِ'] },
        { core: true, cells: ['her classmate (she)', 'كَانَتْ زَمِيلَتِي قَدْ حَصَلَتْ عَلَى مِنْحَةٍ', 'قَبْلَ أَنْ تَبْدَأَ الفَصْلَ'] },
        { cells: ['her brother (he)', 'كَانَ أَخِي قَدْ عَمِلَ سَنَةً كَامِلَةً', 'قَبْلَ أَنْ يُقَرِّرَ التَّخَصُّصَ'] },
        { cells: ['all of them (we)', 'كُنَّا قَدْ حَضَرْنَا عَشَرَاتِ المُحَاضَرَاتِ', 'بِحُلُولِ التَّخَرُّجِ'] },
      ],
      ltr: true,
      foot: 'Cover a column and rebuild it — then retell Layla’s story about Layla (she): kānat qad anjazat …',
      notes: `WE DO (3 min) — built from the website listening (the website lesson has no builder). Read the listening first, then use this table as the support.
Core: rows 1–2 aloud. Develop: retell rows 1 and 4 in the third person (كَانَتْ لَيْلَى قَدْ أَنْجَزَتْ … · كَانُوا قَدْ حَضَرُوا …). Stretch: report it — قَالَتْ لَيْلَى إِنَّهَا كَانَتْ قَدْ أَنْجَزَتْ … (P2-L02 + today).
Translations: I had completed a research project before enrolling at university · my classmate had obtained a scholarship before the term began · my brother had worked a full year before deciding on a specialism · by graduation we had attended dozens of lectures.`,
    },
  ],
  sorterTitle: 'kāna, kānat — or kuntu / kānū?',
  sorterNotes: 'Then say each past verb in a full past-perfect sentence: كَانَ قَدْ دَرَسَ … · كَانَتْ قَدْ تَخَصَّصَتْ … · كُنْتُ قَدْ أَنْهَيْتُ … · كَانُوا قَدْ تَخَرَّجُوا …',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns, final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra inside phrases (website spelling); website mistake 2 shown without its bracketed Arabic note (the hint names the girl); rule headings shown in English and transliteration; the timeline table is teacher-built from the website listening. All other website items are used as published.',
  hints: ['After qad: past or present?', 'A girl: kāna or kānat?', 'After qabla an: past or subjunctive?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: kuntu qad · kānat qad · kāna qad.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and note WHO had done each thing (I / she / he / we).',
  gloss: [
    ['تَقُولُ لَيْلَى: بِحُلُولِ نِهَايَةِ المَرْحَلَةِ الثَّانَوِيَّةِ، كُنْتُ قَدْ قَرَّرْتُ دِرَاسَةَ الطِّبِّ.', 'Layla says: by the end of secondary school, I had decided to study medicine.'],
    ['كُنْتُ قَدْ أَنْجَزْتُ مَشْرُوعًا بَحْثِيًّا فِي عِلْمِ الأَحْيَاءِ قَبْلَ أَنْ أَلْتَحِقَ بِالجَامِعَةِ.', 'I had completed a biology research project before I enrolled at university.'],
    ['وَفِي السَّنَةِ الأُولَى، كَانَتْ زَمِيلَتِي قَدْ حَصَلَتْ عَلَى مِنْحَةٍ دِرَاسِيَّةٍ قَبْلَ أَنْ تَبْدَأَ الفَصْلَ. أَمَّا أَخِي فَكَانَ قَدْ عَمِلَ سَنَةً كَامِلَةً قَبْلَ أَنْ يُقَرِّرَ التَّخَصُّصَ.', 'In the first year, my classmate had obtained a scholarship before the term began. My brother had worked a full year before deciding on a specialism.'],
    ['وَبِحُلُولِ التَّخَرُّجِ، كُنَّا قَدْ حَضَرْنَا عَشَرَاتِ المُحَاضَرَاتِ وَالنَّدَوَاتِ.', 'By graduation, we had attended dozens of lectures and seminars.'],
    ['أَدْرَكْتُ حِينَهَا أَنَّ الاسْتِقْلَالِيَّةَ وَإِدَارَةَ الضَّغْطِ الأَكَادِيمِيِّ لَا تَقِلَّانِ أَهَمِّيَّةً عَنِ الدِّرَاسَةِ نَفْسِهَا.', 'I realised then that independence and managing academic pressure are no less important than the studying itself.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَاذَا كُنْتَ قَدْ حَقَّقْتَ بِحُلُولِ نِهَايَةِ الثَّانَوِيَّةِ؟' },
      { route: 'develop', ar: 'مَاذَا كُنْتَ قَدْ فَعَلْتَ قَبْلَ أَنْ تَخْتَارَ تَخَصُّصَكَ؟' },
      { route: 'stretch', ar: 'كَيْفَ تَتَعَامَلُ مَعَ الضَّغْطِ الأَكَادِيمِيِّ؟' },
    ],
    stems: [
      { route: 'core', ar: 'بِحُلُولِ نِهَايَةِ ______ ، كُنْتُ قَدْ ______ .' },
      { route: 'develop', ar: 'كُنْتُ قَدْ ______ قَبْلَ أَنْ ______ .' },
      { route: 'stretch', ar: 'أُعَانِي مِنَ الضَّغْطِ أَحْيَانًا، لٰكِنْ إِذَا ______ ، سَأَتَغَلَّبُ عَلَيْهِ.' },
    ],
    modelEn: ['What had you achieved by the end of secondary school?', 'By the end of secondary school, I had completed a research project and decided on my specialism.', 'And before you enrolled at university?', 'I had gained work experience before I enrolled at university.'],
    notes: 'Website prompts and model. Students who are not yet at the end of secondary school use “by the end of Year 8 / this year”: بِحُلُولِ نِهَايَةِ السَّنَةِ الثَّامِنَةِ، كُنْتُ قَدْ … To a girl: كُنْتِ قَدْ حَقَّقْتِ · فَعَلْتِ · تَخْتَارِي تَخَصُّصَكِ · تَتَعَامَلِينَ.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Website Core: five past-perfect sentences with correct kāna agreement.' },
    develop: { amount: '60–80 words', how: 'Website Develop: link two of them to a later action with qabla an or bi-ḥulūli.' },
    stretch: { amount: '100–110 words', how: 'Website task: a university personal statement with the past perfect, reported speech and a conditional.' },
  },
  frames: {
    core: [
      { en: 'I had decided to study … since …', ar: 'كُنْتُ قَدْ قَرَّرْتُ دِرَاسَةَ ______ مُنْذُ ______ .' },
      { en: 'My sister had obtained …', ar: 'كَانَتْ أُخْتِي قَدْ حَصَلَتْ عَلَى ______ .' },
      { en: 'My brother had worked …', ar: 'كَانَ أَخِي قَدْ عَمِلَ ______ .' },
      { en: 'Now I study … and I excel in …', ar: 'أَدْرُسُ الآنَ ______ وَأَتَفَوَّقُ فِي ______ .' },
    ],
    develop: [
      { en: 'By the end of …, I had completed …', ar: 'بِحُلُولِ نِهَايَةِ ______ ، كُنْتُ قَدْ أَنْجَزْتُ ______ .' },
      { en: 'I had gained … before I enrolled at university.', ar: 'كُنْتُ قَدْ حَصَلْتُ عَلَى ______ قَبْلَ أَنْ أَلْتَحِقَ بِالجَامِعَةِ.' },
      { en: 'My teacher pointed out that I …', ar: 'أَشَارَ أُسْتَاذِي إِلَى أَنَّنِي ______ .' },
      { en: 'If I am accepted, I will …', ar: 'إِذَا قُبِلْتُ، ______ .' },
    ],
    bank: ['الطِّبُّ', 'الهَنْدَسَةُ', 'مَشْرُوعٌ بَحْثِيٌّ', 'خِبْرَةٌ عَمَلِيَّةٌ', 'عَمَلٌ تَطَوُّعِيٌّ', 'مِنْحَةٌ دِرَاسِيَّةٌ', 'الجَامِعَةُ', 'كُلِّيَّةُ الطِّبِّ', 'مُجْتَهِدٌ', 'الاسْتِقْلَالِيَّةُ', 'الضَّغْطُ الأَكَادِيمِيُّ', 'سَأُكَرِّسُ جُهْدِي'],
  },
  stretch: [
    ['مُنْذُ المَرْحَلَةِ الإِعْدَادِيَّةِ', 'since middle school'],
    ['حَصَلْتُ عَلَى خِبْرَةٍ فِي مُسْتَشْفًى مَحَلِّيٍّ', 'I gained experience at a local hospital'],
    ['أَطْمَحُ إِلَى الالْتِحَاقِ بِكُلِّيَّةِ الطِّبِّ', 'I aspire to join the faculty of medicine'],
    ['سَأُكَرِّسُ جُهْدِي لِلْبَحْثِ العِلْمِيِّ', 'I will devote my effort to scientific research'],
    ['ضَرُورِيَّتَانِ لِلنَّجَاحِ', 'both essential for success'],
  ],
  modelEn: 'I had decided to study medicine back in middle school. By the end of secondary school, I had completed a research project in biology and gained experience at a local hospital. I am now in my final year and I excel in science and mathematics. My teacher pointed out that I am hard-working and stressed that I will be a good doctor. I aspire to join the faculty of medicine at your university, and if I am accepted, I will devote my effort to scientific research. I realise that independence and managing academic pressure are both essential for success at university.',
  find: ['two past-perfect sentences (kuntu qad)', 'bi-ḥulūli framing an earlier action', 'reported speech (ashāra ilā anna)', 'a conditional about the future'],
  modelNotes: 'Website writing model. Evidence: كُنْتُ قَدْ قَرَّرْتُ · بِحُلُولِ … كُنْتُ قَدْ أَنْجَزْتُ · أَدْرُسُ الآنَ · أَشَارَ أُسْتَاذِي إِلَى أَنَّنِي … وَأَكَّدَ أَنَّنِي سَأَكُونُ · إِذَا قُبِلْتُ، سَأُكَرِّسُ.',
  selfCheck: [
    { route: 'core', text: 'After qad my verb is past.' },
    { route: 'core', text: 'kāna agrees with the subject (kānat · kuntu · kānū).' },
    { route: 'develop', text: 'The earlier action has kāna qad; qabla an has a subjunctive.' },
    { route: 'develop', text: 'I framed one event with bi-ḥulūli.' },
    { route: 'stretch', text: 'I moved through before · now · next with reported speech and a conditional.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['لَا تَقْتَصِرُ عَلَى', 'is not limited to'], ['اكْتَسَبُوا', 'they gained'], ['لَمْ تَكُنْ لَدَيْهِمْ', 'they did not have'], ['اعْتَمَدُوا عَلَى أُسَرِهِمْ', 'they relied on their families'], ['إِدَارَةَ الوَقْتِ وَالمَالِ', 'managing time and money'],
    ['اللَّامَنْهَجِيَّةُ', 'extracurricular'], ['قَيِّمَةً', 'valuable'], ['وَاجَهَ', 'faced'], ['بِثِقَةٍ أَكْبَرَ', 'with greater confidence'], ['فِي كِلَيْهِمَا', 'in both'],
  ],
  prep: {
    words: [['مَهَارَاتُ الدِّرَاسَةِ', 'study skills', '—'], ['تَنْظِيمُ الوَقْتِ', 'time management', '—'], ['خَرِيطَةٌ ذِهْنِيَّةٌ', 'a mind map', 'pl. خَرَائِطُ ذِهْنِيَّةٌ'], ['مُلَخَّصٌ', 'a summary', 'pl. مُلَخَّصَاتٌ'], ['التَّشْتِيتُ', 'distraction', '—']],
    questionEn: 'How do you revise for a test — and what distracts you most?',
    questionAr: 'أُرَاجِعُ عَنْ طَرِيقِ ______ ، وَأَكْثَرُ شَيْءٍ يُشَتِّتُنِي هُوَ ______ .',
    homework: {
      core: 'Learn the kāna forms; write five past-perfect sentences about your school life.',
      develop: 'A 60–80-word paragraph linking past events with qabla an and bi-ḥulūli.',
      stretch: 'Website writing task: a 100–110-word university personal statement.',
    },
    wordsSource: 'The five words come from the website P2-L04 vocabulary (study skills).',
  },
  remember: 'Remember: the earlier action takes kāna qad + a past verb — kāna / kānat / kuntu / kānū agree, and so does the verb — qabla an + subjunctive for the later one — and bi-ḥulūli frames it all.',
});

module.exports = { meta, slides };
