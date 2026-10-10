'use strict';
/* P2-L02 · Reported Speech — website: Pathways › Progression › P2 › P2-L02 (the P2 grammar milestone: قَالَ إِنَّ vs every other reporting verb + أَنَّ;
 * accusative after the particle; first person → third person pronoun إِنَّهُ · إِنَّهَا · إِنَّهُمْ; no tense back-shift; attribution وَفْقًا لِـ · خَلَصَ إِلَى أَنَّ).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing and visual game used as published; waṣl alif shown without a
 * kasra inside phrases (بَيْنَمَا اعْتَرَفَ); rule examples shown without their English arrows. English added to the patterns. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P2')({
  n: 2, fileTitle: 'Reported_Speech_Education', chip: 'Grammar',
  title: 'Reported Speech — What People Say About Education', arabic: 'الكَلَامُ المَنْقُولُ',
  focus: 'The P2 grammar milestone: report what people say — قَالَ إِنَّ but أَضَافَ / أَوْضَحَ / أَكَّدَ أَنَّ, an accusative noun after the particle, the pronoun switched to third person (قَالَتْ إِنَّهَا سَتَدْرُسُ) and the tense kept as it was.',
  icon: 'FaQuoteRight', iconSet: 'fa6',
});

const he3 = (she, they) => ({ tag: 'he · she · they', forms: [{ l: 'they', ar: they }, { l: 'she', ar: she }] });
const site = D.waslFix(D.site('P2-L02'));
const RH = [['inna vs anna', 'qāla inna · (every other verb) anna'], ['Accusative after the particle', 'inna / anna + accusative noun'], ['Pronoun replacement', 'first person → third person'], ['Tense stays', 'truth present · past past · future future']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));

const slides = D.devLesson('P2-L02', {
  support: `• THE P2 GRAMMAR MILESTONE. Core: convert five direct quotes with قَالَ إِنَّ / قَالَتْ إِنَّ. Develop: vary the reporting verbs (أَضَافَ · أَوْضَحَ · أَكَّدَ أَنَّ) and add a source with وَفْقًا لِـ. Stretch: the website ~90–100-word research report with a past and a future reported statement.
• Good news for students: Arabic has NO tense back-shift — “I will study” stays future (قَالَ إِنَّهُ سَيَدْرُسُ). The only traps are إِنَّ / أَنَّ, the accusative noun and the pronoun.
• Grammar links: إِنَّ and her sisters (GM-NVS-02) · أَنَّ + accusative (P1-L07, P1-L08) · verbs with fixed prepositions (أَشَارَ إِلَى · اعْتَرَفَ بِـ — the P1 habit).`,
  teach: 'inna after qāla, anna after the rest, switch the pronoun, keep the tense.',
  wedo: 'Report five quotes, sort the reporting verbs, match the speech bubble.',
  next: { nextCode: 'P2-L03', nextTitle: 'University Life and Higher Education', nextAr: 'الحَيَاةُ الجَامِعِيَّةُ وَالتَّعْلِيمُ العَالِي' },
  objectives: ['Report speech with qāla inna, aḍāfa anna, awḍaḥa anna and others.', 'Choose inna after qāla and anna after the other reporting verbs.', 'Replace a first-person pronoun with a third-person one.', 'Keep the reported tense correct: truth present, past past, future future.'],
  objNotes: 'Website objectives (Arabic shown in transliteration on the slide so the lines read cleanly). The route statements turn them into this lesson’s concrete targets.',
  rulesAr: 'نَقْلُ الكَلَامِ',
  ruleEx: [['قَالَ إِنَّ التَّعْلِيمَ حَقٌّ', 'أَكَّدَ أَنَّ المَنَاهِجَ يَجِبُ أَنْ تَتَطَوَّرَ'], ['ذَكَرَ أَنَّ التَّحْصِيلَ يَتَحَسَّنُ'], ['قَالَ إِنَّهُ دَرَسَ بِجِدٍّ', 'قَالَتْ إِنَّهَا سَتَتَخَصَّصُ'], ['أَشَارَ إِلَى أَنَّ التَّعْلِيمَ الرَّقْمِيَّ يُوَفِّرُ فُرَصًا', 'خَلَصَ إِلَى أَنَّ الطُّلَّابَ تَفَوَّقُوا']],
  doNow: {
    questions: [
      q('What does قَالَ إِنَّ mean?', ['he said that', 'he asked whether', 'he denied that'], 'Prepared at home (P2-L01).'),
      q('What does أَكَّدَ أَنَّ mean?', ['he stressed that', 'he added that', 'he admitted that'], 'Prepared at home (P2-L01).'),
      q('What does وَفْقًا لِـ mean?', ['according to', 'in contrast', 'because of'], 'Prepared at home (P2-L01).'),
      q('Complete: يَعْتَمِدُ نِظَامٌ عَلَى الامْتِحَانِ، فِي حِينِ أَنَّ ___ آخَرَ يَعْتَمِدُ عَلَى المَشَارِيعِ.', ['نِظَامًا', 'نِظَامٌ', 'نِظَامٍ'], 'P2-L01: anna + accusative.'),
      q('Complete: يَلْتَحِقُ الطَّالِبُ ___ الجَامِعَةِ.', ['بِـ', 'عَلَى', 'فِي'], 'P2-L01: academic verbs.'),
    ],
    keyIdea: { text: 'qāla takes inna; every other reporting verb takes anna — and both make the next noun -a.', ar: '{e|قَالَ إِنَّ} التَّعْلِيمَ حَقٌّ · {w|أَضَافَ أَنَّهُ} يَتَطَوَّرُ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P2-L01. Question 4 retrieves anna + accusative (فِي حِينِ أَنَّ نِظَامًا) — the exact rule every reported sentence uses today; question 5 the P2-L01 verb complements.',
  },
  routes: {
    core: ['I can report a quote with qāla inna / qālat inna.', 'I can switch “I” to “he / she” (innahu · innahā).'],
    develop: ['I can vary the reporting verb and use anna.', 'I can add a source with wafqan li-.'],
    stretch: ['I can report a past and a future statement.', 'I can report groups (innahum · innahunna).'],
  },
  bridge: [
    { ar: 'قَالَ', urdu: 'قول / کہا', tr: 'qaul', en: 'Urdu قول = a saying; the verb is کہنا' },
    { ar: 'نَقْلٌ', urdu: 'نقل', tr: 'naql', en: 'copying, transmission' },
    { ar: 'تَأْكِيدٌ · أَكَّدَ', urdu: 'تاکید', tr: 'tākīd', en: 'emphasis · stressed' },
    { ar: 'وَضَاحَةٌ · أَوْضَحَ', urdu: 'وضاحت', tr: 'wazāḥat', en: 'explanation · explained' },
    { ar: 'اعْتِرَافٌ · اعْتَرَفَ', urdu: 'اعتراف', tr: 'iʿtirāf', en: 'admission · admitted' },
  ],
  bridgeNotes: 'URDU BRIDGE: the reporting verbs come with Urdu nouns students already know — تاکید (أَكَّدَ), وضاحت (أَوْضَحَ), اعتراف (اعْتَرَفَ), نقل (reported speech is كَلَامٌ مَنْقُولٌ). Urdu reports with کہ (اس نے کہا کہ …) — Arabic needs إِنَّ / أَنَّ AND an accusative noun after it.',
  core: ['قَالَ إِنَّ', 'أَضَافَ أَنَّ', 'أَوْضَحَ أَنَّ', 'أَكَّدَ أَنَّ', 'أَشَارَ إِلَى أَنَّ', 'اعْتَرَفَ بِأَنَّ', 'كَلَامٌ مَنْقُولٌ', 'وَفْقًا لِـ', 'بَاحِثٌ', 'دِرَاسَةٌ حَدِيثَةٌ', 'خَلَصَ إِلَى أَنَّ', 'التَّعَلُّمُ عَنْ بُعْدٍ'],
  forms: {
    'قَالَ إِنَّ': he3('قَالَتْ إِنَّ', 'قَالُوا إِنَّ'), 'أَضَافَ أَنَّ': he3('أَضَافَتْ أَنَّ', 'أَضَافُوا أَنَّ'), 'أَوْضَحَ أَنَّ': he3('أَوْضَحَتْ أَنَّ', 'أَوْضَحُوا أَنَّ'),
    'أَكَّدَ أَنَّ': he3('أَكَّدَتْ أَنَّ', 'أَكَّدُوا أَنَّ'), 'أَشَارَ إِلَى أَنَّ': he3('أَشَارَتْ', 'أَشَارُوا'), 'ذَكَرَ أَنَّ': he3('ذَكَرَتْ', 'ذَكَرُوا'),
    'اعْتَرَفَ بِأَنَّ': he3('اعْتَرَفَتْ', 'اعْتَرَفُوا'), 'نَفَى أَنَّ': he3('نَفَتْ', 'نَفَوْا'),
    'خَبِيرٌ': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'خُبَرَاءُ' }, { l: 'f.', ar: 'خَبِيرَةٌ' }] }, 'بَاحِثٌ': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'بَاحِثُونَ' }, { l: 'f.', ar: 'بَاحِثَةٌ' }] },
    'دِرَاسَةٌ حَدِيثَةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'دِرَاسَاتٌ حَدِيثَةٌ' }] }, 'فُرْصَةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'فُرَصٌ' }] },
    'يُوَفِّرُ': { tag: 'he · she', forms: [{ l: 'she', ar: 'تُوَفِّرُ' }] }, 'يَتَطَوَّرُ': { tag: 'he · she', forms: [{ l: 'she', ar: 'تَتَطَوَّرُ' }] },
  },
  vocabNotes: {
    0: 'Reporting verbs — each card shows she · they. نَفَى is a weak verb: نَفَتْ (she denied) · نَفَوْا (they denied). Two verbs need a preposition first: أَشَارَ إِلَى أَنَّ · اعْتَرَفَ بِأَنَّ.',
    1: 'Sources and attribution: say WHO said it (بَاحِثٌ · خَبِيرَةٌ · دِرَاسَةٌ حَدِيثَةٌ) and use وَفْقًا لِـ / بِحَسَبِ to attribute — the P1-L08 habit of naming the source.',
    2: 'Education content to report: نَتَائِجُ and مَنَاهِجُ are diptote plurals (no tanwīn). Things in the plural take a feminine verb: تَتَطَوَّرُ المَنَاهِجُ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · inna or anna? (website rule 1 + table) · Core', title: 'Only qāla takes inna', ar: 'إِنَّ أَمْ أَنَّ؟',
      cols: [{ label: 'Meaning', w: 2.3 }, { label: 'Verb + particle', w: 3.2, size: 22 }, { label: 'Example', w: 5.2, size: 20 }, { label: 'Particle', w: 1.63 }],
      rows: [
        { core: true, cells: ['said that', '{e|قَالَ إِنَّ}', 'قَالَ {e|إِنَّ} التَّعْلِيمَ حَقٌّ.', 'inna'] },
        { core: true, cells: ['added that', '{w|أَضَافَ أَنَّ}', 'أَضَافَ {w|أَنَّ} المَنَاهِجَ تَتَطَوَّرُ.', 'anna'] },
        { cells: ['explained · stressed', '{w|أَوْضَحَ · أَكَّدَ أَنَّ}', 'أَكَّدَتْ {w|أَنَّ} التَّعَلُّمَ عَنْ بُعْدٍ يُوَفِّرُ فُرَصًا.', 'anna'] },
        { cells: ['mentioned · denied', '{w|ذَكَرَ · نَفَى أَنَّ}', 'نَفَى {w|أَنَّ} الامْتِحَانَاتِ وَحْدَهَا تَقِيسُ الذَّكَاءَ.', 'anna'] },
        { core: true, cells: ['pointed out · concluded', '{k|أَشَارَ / خَلَصَ إِلَى أَنَّ}', 'أَشَارَ الخَبِيرُ {k|إِلَى أَنَّ} المَنَاهِجَ تَتَطَوَّرُ.', 'ilā + anna'] },
        { cells: ['admitted', '{m|اعْتَرَفَ بِأَنَّ}', 'اعْتَرَفَ {m|بِأَنَّ} الفَجْوَةَ الرَّقْمِيَّةَ مُشْكِلَةٌ.', 'bi- + anna'] },
      ],
      ltr: true,
      foot: 'Website common error: qāla anna ✗ → qāla inna. After both particles the noun is accusative (al-taʿlīma).',
      notes: `GRAMMAR PART 1 — website rule “إِنَّ vs أَنَّ” (إِنَّ only after قَالَ; أَنَّ after the other verbs), the website table and teaching point “قَالَ takes إِنَّ; the others take أَنَّ”.
Website mistake 1: قَالَ أَنَّ التَّعْلِيمَ مُهِمٌّ ✗ → قَالَ إِنَّ.
Why? After قَالَ, Arabic treats what follows as the actual words said — a new sentence, so it begins with إِنَّ (kasra), just like any sentence starting with إِنَّ. The other verbs need a “that”-clause: أَنَّ.
Drill: say a reporting verb; the class answers “inna!” or “anna!” — then add the preposition where needed (إِلَى / بِـ).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 2 · switch the pronoun (website rule 3) · Core / Develop', title: '“I will study” → he said that he …', ar: 'تَحْوِيلُ الضَّمِيرِ',
      cols: [{ label: 'Who said it', w: 2.2 }, { label: 'Direct speech', w: 3.3, size: 21 }, { label: 'Reported speech', w: 5.2, size: 21 }, { label: 'Pronoun', w: 1.63 }],
      rows: [
        { core: true, cells: ['a boy', '«سَأَدْرُسُ الطِّبَّ.»', 'قَالَ {e|إِنَّهُ} سَيَدْرُسُ الطِّبَّ.', '-hu'] },
        { core: true, cells: ['a girl', '«سَأَدْرُسُ الطِّبَّ.»', 'قَالَتْ {e|إِنَّهَا} سَتَدْرُسُ الطِّبَّ.', '-hā'] },
        { cells: ['boys / mixed', '«نَحْتَاجُ إِلَى وَقْتٍ.»', 'قَالُوا {e|إِنَّهُمْ} يَحْتَاجُونَ إِلَى وَقْتٍ.', '-hum'] },
        { cells: ['girls', '«نَحْتَاجُ إِلَى وَقْتٍ.»', 'قُلْنَ {e|إِنَّهُنَّ} يَحْتَجْنَ إِلَى وَقْتٍ.', '-hunna'] },
        { core: true, cells: ['a boy', '«كِتَابِي جَدِيدٌ.»', 'قَالَ إِنَّ {k|كِتَابَهُ} جَدِيدٌ.', '-ī → -hu'] },
      ],
      ltr: true,
      foot: 'The verb changes too: sa-adrusu (I) → sa-yadrusu (he) · sa-tadrusu (she) · yaḥtājūna (they).',
      notes: `GRAMMAR PART 2 — website rule “Pronoun replacement” (attach the third-person pronoun to إِنَّ / أَنَّ) and teaching point “Swap the pronoun, keep the tense”.
Website mistake 3: قَالَ إِنَّ سَأَدْرُسُ الطِّبَّ ✗ → قَالَ إِنَّهُ سَيَدْرُسُ الطِّبَّ.
Two things change: the pronoun on إِنَّ (هُ · هَا · هُمْ · هُنَّ) AND the person of the verb (أَدْرُسُ → يَدْرُسُ / تَدْرُسُ). Possessives change as well: كِتَابِي → كِتَابَهُ (row 5 — and كِتَابَ is accusative after إِنَّ!).
Website game: قَالَ الطُّلَّابُ إِنَّهُمْ يَحْتَاجُونَ إِلَى وَقْتٍ (plural speakers → هُمْ).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · keep the tense — no back-shift (website rule 4) · Develop', title: 'Arabic is easier than English here', ar: 'الزَّمَنُ لَا يَتَغَيَّرُ',
      cards: [
        { chip: 'PRESENT STAYS · CORE', color: '1D5FBF', head: '«أُحِبُّ العُلُومَ»', big: 'قَالَ الطَّالِبُ إِنَّهُ يُحِبُّ العُلُومَ.', en: 'The student said (that) he loves science.', clue: 'Not “loved”.' },
        { chip: 'PAST STAYS · DEVELOP', color: '6B4C9A', head: '«دَرَسْتُ بِجِدٍّ»', big: 'قَالَتْ إِنَّهَا دَرَسَتْ بِجِدٍّ.', en: 'She said she had studied hard.', clue: 'Past → past.' },
        { chip: 'FUTURE STAYS · STRETCH', color: '1E6B52', head: '«سَأُوَاصِلُ البَحْثَ»', big: 'قَالَتِ البَاحِثَةُ إِنَّهَا سَتُوَاصِلُ البَحْثَ.', en: 'The researcher said she would continue the research.', clue: 'sa- stays.' },
      ],
      error: { text: 'Website quiz: a future statement stays future when it is reported.', pairs: [['قَالَ إِنَّهُ سَيَدْرُسُ الطِّبَّ', 'قَالَ إِنَّهُ دَرَسَ الطِّبَّ']] },
      notes: `GRAMMAR PART 3 — website rule “Tense stays” (no back-shift: keep the original tense) and overview (“Arabic reporting is simpler than English: no automatic tense back-shift”).
English changes will → would and love → loved; Arabic keeps سَـ and the present. Students translating from English often “back-shift” by mistake — the website quiz traps exactly that (قَالَ إِنَّهُ دَرَسَ الطِّبَّ for a future plan).
A general truth stays present: أَشَارَ إِلَى أَنَّ التَّعْلِيمَ الرَّقْمِيَّ يُوَفِّرُ فُرَصًا.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the accusative and the source (website rule 2 + vocabulary) · Stretch', title: 'Case after the particle — and who said it', ar: 'النَّصْبُ وَالمَصْدَرُ',
      cols: [{ label: 'Check', w: 2.4 }, { label: 'Correct', w: 5.4, size: 20 }, { label: 'Not', w: 4.53, size: 19 }],
      rows: [
        { core: true, cells: ['noun after inna', 'قَالَ إِنَّ {e|التَّعْلِيمَ} حَقٌّ.', 'قَالَ إِنَّ التَّعْلِيمُ حَقٌّ.'] },
        { core: true, cells: ['noun after anna', 'ذَكَرَ أَنَّ {e|التَّحْصِيلَ} يَتَحَسَّنُ.', 'ذَكَرَ أَنَّ التَّحْصِيلُ يَتَحَسَّنُ.'] },
        { cells: ['predicate stays -u', 'أَكَّدَ أَنَّ التَّعْلِيمَ {k|ضَرُورِيٌّ}.', 'أَكَّدَ أَنَّ التَّعْلِيمَ ضَرُورِيًّا.'] },
        { cells: ['attribution', '{w|وَفْقًا لِدِرَاسَةٍ} حَدِيثَةٍ، يَتَفَوَّقُ …', 'حَسَبَ دِرَاسَةٌ حَدِيثَةٌ …'] },
        { cells: ['conclusion', '{m|خَلَصَ} البَاحِثُونَ {m|إِلَى أَنَّ} التِّقْنِيَّةَ أَدَاةٌ.', 'خَلَصَ البَاحِثُونَ أَنَّ …'] },
      ],
      ltr: true,
      foot: 'Website mistake: qāla inna al-taʿlīmu ✗ — the noun after the particle is accusative; the predicate stays nominative.',
      notes: `GRAMMAR PART 4 — website rule “Accusative after the particle” (the noun after إِنَّ / أَنَّ is accusative; the predicate stays nominative) and the vocabulary group “Sources and attribution”.
Website mistake 2: قَالَ إِنَّ التَّعْلِيمُ حَقٌّ ✗. Website quiz 6: أَنَّ التَّحْصِيلَ يَتَحَسَّنُ.
Row 3 is the opposite trap: students over-apply the rule and put the PREDICATE in -an (ضَرُورِيًّا ✗) — only the noun right after the particle changes.
Attribution: وَفْقًا لِـ + genitive (وَفْقًا لِدِرَاسَةٍ) · بِحَسَبِ مَا قَالَ · وَفْقًا لِلْخُبَرَاءِ.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me report a study',
    steps: [
      { head: 'Source', ar: '{m|وَفْقًا لِدِرَاسَةٍ} حَدِيثَةٍ', think: 'Who?' },
      { head: 'qāla inna', ar: 'قَالَ البَاحِثُ {e|إِنَّ} التِّقْنِيَّةَ تُوَفِّرُ فُرَصًا', think: 'inna + -a.' },
      { head: 'Other verb', ar: '{w|وَأَضَافَ أَنَّ} الطُّلَّابَ تَفَوَّقُوا', think: 'anna; past stays.' },
      { head: 'Pronoun', ar: 'قَالَتْ {k|إِنَّهَا} سَتُوَاصِلُ', think: '“I” → she.' },
    ],
    legend: ['m', 'e', 'w', 'k'], legendLabels: { m: 'SOURCE', e: 'QĀLA INNA', w: 'ANNA', k: 'PRONOUN' },
    model: 'أَجْرَتْ دِرَاسَةٌ حَدِيثَةٌ بَحْثًا حَوْلَ التَّعْلِيمِ الرَّقْمِيِّ. قَالَ البَاحِثُ الرَّئِيسِيُّ {e|إِنَّ} التِّقْنِيَّةَ تُوَفِّرُ فُرَصًا جَدِيدَةً، {w|وَأَضَافَ أَنَّ} الطُّلَّابَ الَّذِينَ اسْتَعْمَلُوهَا تَفَوَّقُوا عَلَى أَقْرَانِهِمْ. {w|وَأَوْضَحَ} التَّقْرِيرُ {w|أَنَّ} التَّعَلُّمَ عَنْ بُعْدٍ سَيَنْتَشِرُ أَكْثَرَ. وَقَالَتِ البَاحِثَةُ {k|إِنَّهَا} سَتُوَاصِلُ دِرَاسَةَ المَوْضُوعِ.',
    modelEn: 'A recent study carried out research on digital education. The lead researcher said that technology provides new opportunities, and added that the students who used it outperformed their peers. The report explained that distance learning will spread further. And the (female) researcher said that she would continue studying the topic.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “qāla → inna, and the noun after it takes -a. Aḍāfa → anna. Past stays past (tafawwaqū), future stays future (sa-yantashiru). The researcher said ‘I will continue’ → innahā sa-tuwāṣilu.”',
  },
  patternEn: ['he said that education is a right for everyone', 'she said that she will specialise in medicine', 'the expert pointed out that curricula are developing'],
  game: {
    title: 'Who said it? Match the picture',
    pick: [0, 2, 4],
    en: ['The (female) teacher said that studying is important.', 'The (female) student said that she will study medicine.', 'The students said that they need time.'],
    icons: [[['fa6', 'FaChalkboardUser', '1D5FBF'], ['fa6', 'FaComment', 'C77700']], [['fa6', 'FaUserGraduate', 'C0386B'], ['fa6', 'FaArrowRight', '6B4C9A']], [['fa6', 'FaUsers', '1E6B52'], ['fa6', 'FaComment', 'C77700']]],
    labels: ['a teacher speaks', 'a student’s future plan', 'a group of students'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Then report each one with a DIFFERENT verb: أَكَّدَتِ المُعَلِّمَةُ أَنَّ … · أَوْضَحَتِ الطَّالِبَةُ أَنَّهَا … · أَشَارَ الطُّلَّابُ إِلَى أَنَّهُمْ … Other website cards: a boy who loves science, an exam tomorrow, education opening opportunities.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · report it (website quiz and game items)', title: 'Direct → reported', ar: 'اُنْقُلِ الكَلَامَ',
      cols: [{ label: 'Speaker', w: 2.1 }, { label: 'Direct speech', w: 3.6, size: 20 }, { label: 'Reported speech', w: 5.0, size: 20 }, { label: 'Check', w: 1.63 }],
      rows: [
        { core: true, cells: ['الطَّالِبُ', '«أُحِبُّ العُلُومَ.»', 'قَالَ الطَّالِبُ إِنَّهُ يُحِبُّ العُلُومَ.', 'inna + hu'] },
        { core: true, cells: ['الطَّالِبَةُ', '«دَرَسْتُ بِجِدٍّ.»', 'قَالَتِ الطَّالِبَةُ إِنَّهَا دَرَسَتْ بِجِدٍّ.', 'past stays'] },
        { cells: ['المُعَلِّمُ', '«الامْتِحَانُ غَدًا.»', 'قَالَ المُعَلِّمُ إِنَّ الامْتِحَانَ غَدًا.', '-a after inna'] },
        { cells: ['الخَبِيرَةُ', '«المَنَاهِجُ تَتَطَوَّرُ.»', 'أَكَّدَتِ الخَبِيرَةُ أَنَّ المَنَاهِجَ تَتَطَوَّرُ.', 'anna'] },
        { cells: ['البَاحِثُونَ', '«سَنُوَاصِلُ البَحْثَ.»', 'أَوْضَحَ البَاحِثُونَ أَنَّهُمْ سَيُوَاصِلُونَ البَحْثَ.', 'hum + future'] },
      ],
      ltr: true,
      foot: 'Cover column 3: say the reported sentence, then check — particle · accusative · pronoun · tense.',
      notes: `WE DO (3 min) — the website lesson has no builder, so this drill is built from the website quiz and visual-game sentences.
Core: rows 1–3 with qāla / qālat inna. Develop: all five. Stretch: redo rows 1–3 with a different reporting verb each time (أَضَافَ · أَوْضَحَ · ذَكَرَ أَنَّ) and add a source with وَفْقًا لِـ.
Row 5: verb first stays singular (أَوْضَحَ البَاحِثُونَ), but the pronoun and the reported verb are plural (أَنَّهُمْ سَيُوَاصِلُونَ).`,
    },
  ],
  sorterTitle: 'inna, anna — or a preposition + anna?',
  sorterNotes: 'Then say a reported sentence for each verb: قَالَ إِنَّ … · أَضَافَ أَنَّ … · أَوْضَحَ أَنَّ … · أَكَّدَ أَنَّ … · ذَكَرَ أَنَّ … · نَفَى أَنَّ … · أَشَارَ إِلَى أَنَّ … · اعْتَرَفَ بِأَنَّ … · خَلَصَ إِلَى أَنَّ …',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns, final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra inside phrases (website spelling); rule headings shown in English and transliteration (rule examples without the English arrows); the direct → reported drill is teacher-built from the website quiz and game. All other website items are used as published.',
  hints: ['qāla + inna or anna?', 'After inna: -u or -a?', '“I will …” → he …?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 5.\nListen for: the reporting verbs.',
  listenRoutes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 5 — and write down four reporting verbs with their particle.',
  gloss: [
    ['أَجْرَتْ دِرَاسَةٌ حَدِيثَةٌ فِي جَامِعَةٍ عَرَبِيَّةٍ بَحْثًا حَوْلَ التَّعْلِيمِ الرَّقْمِيِّ.', 'A recent study at an Arab university carried out research on digital education.'],
    ['خَلَصَ البَاحِثُونَ إِلَى أَنَّ الطُّلَّابَ الَّذِينَ يَسْتَعْمِلُونَ التِّقْنِيَّةَ يَتَفَوَّقُونَ عَلَى أَقْرَانِهِمْ. وَأَوْضَحَ التَّقْرِيرُ أَنَّ التَّعَلُّمَ عَنْ بُعْدٍ يُوَفِّرُ فُرَصًا لَمْ تَكُنْ مُتَاحَةً سَابِقًا.', 'The researchers concluded that students who use technology outperform their peers. The report explained that distance learning provides opportunities that were not available before.'],
    ['وَأَشَارَ الخُبَرَاءُ إِلَى أَنَّ المَنَاهِجَ يَجِبُ أَنْ تَتَطَوَّرَ لِمُوَاكَبَةِ التَّحَدِّيَاتِ.', 'The experts pointed out that curricula must develop to keep up with the challenges.'],
    ['لٰكِنَّ أَحَدَ البَاحِثِينَ اعْتَرَفَ بِأَنَّ الفَجْوَةَ الرَّقْمِيَّةَ مَا زَالَتْ مُشْكِلَةً. وَقَالَ إِنَّ الحَلَّ يَبْدَأُ بِتَدْرِيبِ المُعَلِّمِينَ.', 'But one of the researchers admitted that the digital gap is still a problem. He said that the solution begins with training teachers.'],
    ['وَفْقًا لِهٰذِهِ الدِّرَاسَةِ، التِّقْنِيَّةُ أَدَاةٌ، وَلَيْسَتْ بَدِيلًا عَنِ المُعَلِّمِ.', 'According to this study, technology is a tool, not a substitute for the teacher.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'اسْمَعْ رَأْيَ زَمِيلِكَ ثُمَّ انْقُلْهُ بِـ«قَالَ إِنَّ».' },
      { route: 'develop', ar: 'أَضِفْ نُقْطَةً ثَانِيَةً بِـ«وَأَضَافَ أَنَّ».' },
      { route: 'stretch', ar: 'اذْكُرْ مَصْدَرًا بِـ«وَفْقًا لِـ».' },
    ],
    stems: [
      { route: 'core', ar: 'قَالَ زَمِيلِي إِنَّ ______ .' },
      { route: 'develop', ar: 'وَأَضَافَ أَنَّهُ ______ .' },
      { route: 'stretch', ar: 'وَفْقًا لِدِرَاسَةٍ حَدِيثَةٍ، ______ .' },
    ],
    modelEn: ['What is your classmate’s opinion of distance learning?', 'He said that it provides many opportunities, and added that it needs good internet.', 'And what is your source?', 'According to a recent study, technology users outperform their peers.'],
    notes: 'Website prompts and model. Interview chain: A gives an opinion on distance learning, B reports it to C, C reports B’s report to the class. Check: inna / anna, the -a noun, the pronoun. A girl reporting a girl: قَالَتْ زَمِيلَتِي إِنَّهَا … To a girl: اسْمَعِي · انْقُلِيهِ · أَضِيفِي · اذْكُرِي.',
  },
  write: {
    core: { amount: '5 quotes', how: 'Website Core: convert five direct quotes to reported speech with correct inna / anna.' },
    develop: { amount: '60–80 words', how: 'Website Develop: vary the reporting verbs and add a source with wafqan li-.' },
    stretch: { amount: '90–100 words', how: 'Website task: a full research report with four reporting verbs, a past and a future reported statement.' },
  },
  frames: {
    core: [
      { en: 'The researcher said that …', ar: 'قَالَ البَاحِثُ إِنَّ ______ .' },
      { en: 'She said that she will …', ar: 'قَالَتْ إِنَّهَا سَوْفَ ______ .' },
      { en: 'He added that …', ar: 'وَأَضَافَ أَنَّ ______ .' },
      { en: 'The report explained that …', ar: 'وَأَوْضَحَ التَّقْرِيرُ أَنَّ ______ .' },
    ],
    develop: [
      { en: 'The experts pointed out that …', ar: 'وَأَشَارَ الخُبَرَاءُ إِلَى أَنَّ ______ .' },
      { en: 'One of them admitted that …', ar: 'وَاعْتَرَفَ أَحَدُهُمْ بِأَنَّ ______ .' },
      { en: 'According to the study, …', ar: 'وَفْقًا لِلدِّرَاسَةِ، ______ .' },
      { en: 'The researchers concluded that …', ar: 'وَخَلَصَ البَاحِثُونَ إِلَى أَنَّ ______ .' },
    ],
    bank: ['التِّقْنِيَّةَ', 'التَّعَلُّمَ عَنْ بُعْدٍ', 'المَنَاهِجَ', 'الطُّلَّابَ', 'الفَجْوَةَ الرَّقْمِيَّةَ', 'تُوَفِّرُ فُرَصًا', 'تَفَوَّقُوا عَلَى أَقْرَانِهِمْ', 'سَيَنْتَشِرُ', 'يَجِبُ أَنْ تَتَطَوَّرَ', 'مَا زَالَتْ مُشْكِلَةً', 'أَدَاةٌ', 'بَدِيلٌ عَنِ المُعَلِّمِ'],
  },
  stretch: [
    ['أَجْرَتْ دِرَاسَةٌ حَدِيثَةٌ بَحْثًا حَوْلَ', 'a recent study carried out research on'],
    ['تَفَوَّقُوا عَلَى أَقْرَانِهِمْ', 'outperformed their peers'],
    ['سَيَنْتَشِرُ أَكْثَرَ فِي المُسْتَقْبَلِ', 'will spread further in the future'],
    ['مَا زَالَتْ مَوْجُودَةً', 'still exists'],
    ['أَدَاةٌ لَا بَدِيلٌ عَنِ المُعَلِّمِ', 'a tool, not a substitute for the teacher'],
  ],
  modelEn: 'A recent study carried out research on digital education. The lead researcher said that technology provides new opportunities, and added that the students who used it outperformed their peers. The report explained that distance learning will spread further in the future. The experts pointed out that curricula must develop, while one of them admitted that the digital gap still exists. According to the study, the researchers concluded that technology is a tool, not a substitute for the teacher. And the (female) researcher said that she would continue studying the topic.',
  find: ['qāla inna + an accusative noun', 'four other reporting verbs with anna', 'a reported past and a reported future', 'a pronoun switch (innahā)'],
  modelNotes: 'Website writing model. Evidence: قَالَ … إِنَّ التِّقْنِيَّةَ · وَأَضَافَ أَنَّ الطُّلَّابَ … تَفَوَّقُوا (past) · وَأَوْضَحَ … أَنَّ التَّعَلُّمَ … سَيَنْتَشِرُ (future) · أَشَارَ … إِلَى أَنَّ · اعْتَرَفَ … بِأَنَّ · وَفْقًا لِلدِّرَاسَةِ · خَلَصَ … إِلَى أَنَّ · قَالَتْ … إِنَّهَا سَتُوَاصِلُ.',
  selfCheck: [
    { route: 'core', text: 'inna only after qāla / qālat; anna after the other verbs.' },
    { route: 'core', text: 'The noun right after the particle ends in -a.' },
    { route: 'develop', text: 'I switched “I / we” to he / she / they (innahu · innahā · innahum).' },
    { route: 'develop', text: 'I kept the tense (no back-shift).' },
    { route: 'stretch', text: 'I used four reporting verbs and named a source.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['مُؤْتَمَرٍ', 'a conference'], ['تَحَدَّثَ', 'spoke'], ['وَحْدَهَا لَا تَكْفِي', 'alone is not enough'], ['لِمَنْ يَعِيشُونَ', 'for those who live'], ['الفَجْوَةَ الرَّقْمِيَّةَ', 'the digital gap'],
    ['تَقِيسُ', 'measure'], ['الذَّكَاءَ', 'intelligence'], ['المَهَارَاتِ العَمَلِيَّةَ', 'practical skills'], ['لَا تَقِلُّ أَهَمِّيَّةً', 'are no less important'], ['يُوَازِنُ بَيْنَ', 'balances between'],
  ],
  prep: {
    words: [['حَرَمٌ جَامِعِيٌّ', 'a university campus', '—'], ['كُلِّيَّةٌ', 'a faculty, college', 'pl. كُلِّيَّاتٌ'], ['مُحَاضَرَةٌ', 'a lecture', 'pl. مُحَاضَرَاتٌ'], ['مِنْحَةٌ دِرَاسِيَّةٌ', 'a scholarship', 'pl. مِنَحٌ'], ['رُسُومٌ دِرَاسِيَّةٌ', 'tuition fees', '—']],
    questionEn: 'Ask an older relative or friend what university life is like — then report one thing they said.',
    questionAr: 'قَالَ لِي ______ إِنَّ الحَيَاةَ الجَامِعِيَّةَ ______ .',
    homework: {
      core: 'Learn the reporting verbs with inna / anna; convert five direct quotes.',
      develop: 'A 60–80-word report of a classmate’s opinion with three reporting verbs and a source.',
      stretch: 'Website writing task: a 90–100-word research report with a past and a future reported statement.',
    },
    wordsSource: 'The five words come from the website P2-L03 vocabulary (university life).',
  },
  remember: 'Remember: qāla INNA — every other reporting verb ANNA (ashāra ilā anna · iʿtarafa bi-anna) — the next noun takes -a — “I” becomes innahu / innahā / innahum — and the tense stays as it was.',
});

module.exports = { meta, slides };
