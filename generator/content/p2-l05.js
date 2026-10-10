'use strict';
/* P2-L05 · Career Aspirations and the Future of Work — website: Pathways › Progression › P2 › P2-L05 (career verbs with their complements يُؤَهِّلُ لِـ ·
 * يُعِدُّ لِـ · يَتَحَوَّلُ إِلَى · يَطْمَحُ إِلَى · يَسْتَبْدِلُ + object, and integrating the P2 toolkit: كَانَ قَدْ, reported speech, إِذَا … سَـ, سَوْفَ).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live builder and mission used as published, with waṣl alif
 * shown without a kasra (الاصْطِنَاعِيُّ). The website visual games for P2-L04 and P2-L05 are swapped: this deck uses the future-plans set the website files
 * under P2-L04 (gameKey). English added to the patterns; sorter headings in transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P2')({
  n: 5, fileTitle: 'Career_Aspirations_and_the_Future_of_Work', chip: 'Vocabulary',
  title: 'Career Aspirations and the Future of Work', arabic: 'الطُّمُوحَاتُ المِهَنِيَّةُ وَمُسْتَقْبَلُ العَمَلِ',
  focus: 'Talk about career ambitions and AI: use the career verbs with the right complement (yuʾahhil li- · yuʿidd li- · yataḥawwal ilā · yaṭmaḥ ilā), weave four P2 structures into one paragraph, and discuss AI with balanced, hedged language.',
  icon: 'FaBriefcase', iconSet: 'fa6',
});

const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const site = D.waslFix(D.site('P2-L05'));
const RH = [['Career verbs + complement', 'yuʾahhil li- · yuʿidd li- · yataḥawwal ilā'], ['Background: past perfect', 'kuntu qad + past'], ['Cite others: reported speech', 'qāla inna · ashāra ilā anna'], ['Plan: conditional + future', 'idhā … sa- · sawfa']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P2-L05', {
  support: `• Core: five sentences with the career verbs and the right complement (li- / ilā / direct object). Develop: add a past-perfect background and a reported-speech clause. Stretch: the website 110–120-word paragraph integrating all four P2 structures.
• Be sensitive: some students may not have a career idea yet, or may face pressure about careers at home. “I don’t know yet” is a valid answer — offer لَمْ أُقَرِّرْ بَعْدُ، لٰكِنَّنِي أَطْمَحُ إِلَى … and let them write about a relative or an invented character.
• AI debate: keep it balanced (the website models hedging: some jobs, not all). Avoid fear-based framing.
• Grammar links: past perfect (P2-L03) · reported speech qāla inna / anna (P2-L02) · Type 1 conditional (P1-L03) · lan + subjunctive (D units).`,
  teach: 'Career verbs + complements, integrating four P2 structures, hedging about AI.',
  wedo: 'Build a career argument, sort the complements, hear a careers adviser.',
  next: { nextCode: 'P2-L06', nextTitle: 'Education and Social Mobility', nextAr: 'التَّعْلِيمُ وَالحَرَاكُ الاجْتِمَاعِيُّ' },
  objectives: ['Describe career ambitions and the future of work, including AI.', 'Use yuʾahhil li-, yuʿidd li- and yataḥawwal ilā with the correct complement.', 'Combine past perfect, reported speech, conditional and future in one text.', 'Argue which jobs AI will and will not replace — with balance.'],
  rulesAr: 'أَفْعَالُ المِهْنَةِ وَدَمْجُ القَوَاعِدِ',
  ruleEx: [['التَّعْلِيمُ يُؤَهِّلُنِي لِسُوقِ العَمَلِ', 'يَتَحَوَّلُ الذَّكَاءُ الاصْطِنَاعِيُّ إِلَى شَرِيكٍ'], ['كُنْتُ قَدْ قَرَّرْتُ مَسِيرَتِي مُنْذُ صِغَرِي'], ['أَشَارَ مُرْشِدِي إِلَى أَنَّ المَجَالَ وَاعِدٌ'], ['إِذَا طَوَّرْتَ مَهَارَاتِكَ، سَتَنْجَحُ', 'سَوْفَ يُعِيدُ الذَّكَاءُ الاصْطِنَاعِيُّ تَشْكِيلَ العَمَلِ']],
  doNow: {
    questions: [
      q('What does طُمُوحٌ مِهَنِيٌّ mean?', ['a career ambition', 'a career change', 'a start-up'], 'Prepared at home (P2-L04).'),
      q('What does رِيَادَةُ الأَعْمَالِ mean?', ['entrepreneurship', 'the labour market', 'a career path'], 'Prepared at home (P2-L04).'),
      q('What does الذَّكَاءُ الاصْطِنَاعِيُّ mean?', ['artificial intelligence', 'critical thinking', 'creativity'], 'Prepared at home (P2-L04).'),
      q('Choose the accurate sentence.', ['يَحْتَفِظُ الطَّالِبُ بِالمَعْلُومَاتِ.', 'يَحْتَفِظُ الطَّالِبُ المَعْلُومَاتِ.', 'يَحْتَفِظُ الطَّالِبُ إِلَى المَعْلُومَاتِ.'], 'P2-L04: yaḥtafiẓ bi-.'),
      q('Choose the accurate reported speech.', ['قَالَ المُعَلِّمُ إِنَّ الامْتِحَانَ سَهْلٌ.', 'قَالَ المُعَلِّمُ أَنَّ الامْتِحَانَ سَهْلٌ.', 'قَالَ المُعَلِّمُ إِنَّ الامْتِحَانُ سَهْلٌ.'], 'P2-L02: qāla + inna + accusative.'),
    ],
    keyIdea: { text: 'Every career verb has its own partner. Learn the verb WITH its complement.', ar: '{w|يُؤَهِّلُ لِـ} · {w|يُعِدُّ لِـ} · {k|يَتَحَوَّلُ إِلَى} · {k|يَطْمَحُ إِلَى}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P2-L04. Question 4 retrieves yaḥtafiẓ bi- (P2-L04) — today’s verbs are also fixed with a preposition. Question 5 retrieves qāla inna (P2-L02), which today’s writing integrates.',
  },
  routes: {
    core: ['I can name 8 career and future-of-work words.', 'I can use yuʾahhil li- and yaṭmaḥ ilā accurately.'],
    develop: ['I can add a past-perfect background and a reported clause.', 'I can say what AI will and will not replace.'],
    stretch: ['I can integrate four P2 structures in one paragraph.', 'I can hedge (baʿḍ … lā kullahā · lākinnahu lan …).'],
  },
  bridge: [
    { ar: 'مُسْتَقْبَلٌ', urdu: 'مستقبل', tr: 'mustaqbil', en: 'the future' },
    { ar: 'مَهَارَةٌ', urdu: 'مہارت', tr: 'mahārat', en: 'a skill' },
    { ar: 'تَعَاوُنٌ', urdu: 'تعاون', tr: 'taʿāwun', en: 'cooperation' },
    { ar: 'حَلٌّ · مُشْكِلَةٌ', urdu: 'حل · مشکل', tr: 'hal · mushkil', en: 'a solution · a problem' },
    { ar: 'شَرِيكٌ', urdu: 'شریک', tr: 'sharīk', en: 'a partner' },
  ],
  bridgeNotes: 'URDU BRIDGE: مستقبل, مہارت, تعاون, حل, مشکل and شریک are all shared. Urdu تنقید (criticism) comes from the same root as نَقْدِيٌّ in التَّفْكِيرُ النَّقْدِيُّ (critical thinking).',
  core: ['طُمُوحٌ مِهَنِيٌّ', 'مَسَارٌ مِهَنِيٌّ', 'رِيَادَةُ الأَعْمَالِ', 'شَرِكَةٌ نَاشِئَةٌ', 'التَّفْكِيرُ النَّقْدِيُّ', 'حَلُّ المَشْكِلَاتِ', 'الذَّكَاءُ الاصْطِنَاعِيُّ', 'مَهَارَةُ التَّكَيُّفِ', 'يُؤَهِّلُ لِـ', 'يُعِدُّ لِـ', 'يَتَحَوَّلُ إِلَى', 'يَطْمَحُ إِلَى'],
  forms: {
    'طُمُوحٌ مِهَنِيٌّ': sp('طُمُوحَاتٌ مِهَنِيَّةٌ'), 'مَسَارٌ مِهَنِيٌّ': sp('مَسَارَاتٌ مِهَنِيَّةٌ'), 'مِهْنَةُ المُسْتَقْبَلِ': sp('مِهَنُ المُسْتَقْبَلِ'),
    'شَرِكَةٌ نَاشِئَةٌ': sp('شَرِكَاتٌ نَاشِئَةٌ'), 'مَشْرُوعٌ مُسْتَقِلٌّ': sp('مَشَارِيعُ مُسْتَقِلَّةٌ'),
    'يُؤَهِّلُ لِـ': ihs('أُؤَهِّلُ', 'تُؤَهِّلُ'), 'يُعِدُّ لِـ': ihs('أُعِدُّ', 'تُعِدُّ'), 'يَتَحَوَّلُ إِلَى': ihs('أَتَحَوَّلُ', 'تَتَحَوَّلُ'), 'يَسْتَبْدِلُ': ihs('أَسْتَبْدِلُ', 'تَسْتَبْدِلُ'),
    'يَطْمَحُ إِلَى': ihs('أَطْمَحُ', 'تَطْمَحُ'), 'يَسْعَى إِلَى': ihs('أَسْعَى', 'تَسْعَى'), 'يُسْهِمُ فِي': ihs('أُسْهِمُ', 'تُسْهِمُ'), 'يُوَاكِبُ': ihs('أُوَاكِبُ', 'تُوَاكِبُ'),
  },
  vocabNotes: {
    0: 'Ambitions and paths: the nouns for talking about your future. شَرِكَةٌ نَاشِئَةٌ (start-up) and مَشْرُوعٌ مُسْتَقِلٌّ (freelance project) are the language of رِيَادَةُ الأَعْمَالِ.',
    1: 'Skills and AI: the 21st-century skills that experts say AI cannot replace — critical thinking, problem solving, creativity, empathy, adaptability.',
    2: 'Integration verbs: learn each WITH its complement — li- (yuʾahhil, yuʿidd), ilā (yataḥawwal, yaṭmaḥ, yasʿā), fī (yushim), or a direct object (yastabdil, yuwākib).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · career verbs and their complements (website rule 1 + table) · Core', title: 'Each verb has its own partner', ar: 'الفِعْلُ وَحَرْفُهُ',
      cols: [{ label: 'Meaning', w: 2.3 }, { label: 'Verb', w: 2.2, size: 22 }, { label: 'Partner', w: 1.6, size: 22 }, { label: 'Example', w: 6.23, size: 20 }],
      rows: [
        { core: true, cells: ['qualifies for', '{w|يُؤَهِّلُ}', '{w|لِـ}', 'التَّعْلِيمُ يُؤَهِّلُنِي {w|لِسُوقِ} العَمَلِ.'] },
        { core: true, cells: ['prepares for', '{w|يُعِدُّ}', '{w|لِـ}', 'الجَامِعَةُ تُعِدُّنِي {w|لِلْمُنَافَسَةِ}.'] },
        { core: true, cells: ['transforms into', '{k|يَتَحَوَّلُ}', '{k|إِلَى}', 'يَتَحَوَّلُ الذَّكَاءُ الاصْطِنَاعِيُّ {k|إِلَى} شَرِيكٍ.'] },
        { core: true, cells: ['aspires to', '{k|يَطْمَحُ}', '{k|إِلَى}', 'يَطْمَحُ الطَّالِبُ {k|إِلَى} النَّجَاحِ.'] },
        { cells: ['contributes to', '{m|يُسْهِمُ}', '{m|فِي}', 'سَأُسْهِمُ {m|فِي} مَجَالِي.'] },
        { cells: ['replaces', '{p|يَسْتَبْدِلُ}', '—', 'يَسْتَبْدِلُ الذَّكَاءُ {p|بَعْضَ} الوَظَائِفِ.'] },
      ],
      ltr: true,
      foot: 'Website table and common error: never ilā after yuʾahhil / yuʿidd, never li- after yataḥawwal.',
      notes: `GRAMMAR PART 1 — website rule “Career verbs” and the website table (يُؤَهِّلُ لِـ · يُعِدُّ لِـ · يَتَحَوَّلُ إِلَى · يَطْمَحُ إِلَى), plus يُسْهِمُ فِي and يَسْتَبْدِلُ + object from the vocabulary notes.
Website mistakes 1 and 2: يُؤَهِّلُنِي إِلَى ✗ → لِسُوقِ · يَتَحَوَّلُ … لِشَرِيكٍ ✗ → إِلَى شَرِيكٍ.
لِـ joins the next word: لِسُوقِ · لِلْمُنَافَسَةِ (li + al- → lil-). Drill: teacher says a verb, class calls out its partner.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · career verbs for I, he and she (website vocabulary) · Core / Develop', title: 'I aspire · he aspires · she aspires', ar: 'أَطْمَحُ · يَطْمَحُ · تَطْمَحُ',
      cols: [{ label: 'Meaning', w: 2.4 }, { label: 'I', w: 3.3, size: 20 }, { label: 'He', w: 3.3, size: 20 }, { label: 'She', w: 3.33, size: 20 }],
      rows: [
        { core: true, cells: ['aspire to engineering', 'أَطْمَحُ إِلَى الهَنْدَسَةِ', 'يَطْمَحُ إِلَى الهَنْدَسَةِ', 'تَطْمَحُ إِلَى الهَنْدَسَةِ'] },
        { core: true, cells: ['education qualifies me / him / her for work', 'التَّعْلِيمُ {w|يُؤَهِّلُنِي} لِلْعَمَلِ', 'التَّعْلِيمُ {w|يُؤَهِّلُهُ} لِلْعَمَلِ', 'التَّعْلِيمُ {w|يُؤَهِّلُهَا} لِلْعَمَلِ'] },
        { cells: ['strive to learn', 'أَسْعَى إِلَى التَّعَلُّمِ', 'يَسْعَى إِلَى التَّعَلُّمِ', 'تَسْعَى إِلَى التَّعَلُّمِ'] },
        { cells: ['contribute to my / his / her field', 'أُسْهِمُ فِي {w|مَجَالِي}', 'يُسْهِمُ فِي {w|مَجَالِهِ}', 'تُسْهِمُ فِي {w|مَجَالِهَا}'] },
        { cells: ['keep pace with change', 'أُوَاكِبُ التَّغْيِيرَ', 'يُوَاكِبُ التَّغْيِيرَ', 'تُوَاكِبُ التَّغْيِيرَ'] },
      ],
      ltr: true,
      foot: 'Row 2: the person is the OBJECT pronoun on the verb (-nī · -hu · -hā) — education does the qualifying.',
      notes: `GRAMMAR PART 2 — the website vocabulary group “Integration verbs” for I / he / she, with the speaking model أَطْمَحُ إِلَى الهَنْدَسَةِ وَالتَّعْلِيمُ الجَيِّدُ يُؤَهِّلُنِي لِسُوقِ العَمَلِ.
Plural (they): يَطْمَحُونَ · يَسْعَوْنَ · يُسْهِمُونَ · يُؤَهِّلُهُمْ (website listening: يُؤَهِّلُ الشَّبَابَ · تُعِدُّهُمْ).
Note يَسْعَى (weak final): أَسْعَى · يَسْعَى · تَسْعَى — the ending never changes in the singular.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · the P2 toolkit in one text (website rules 2–4 + teaching point 2) · Develop', title: 'Background, citation, plan', ar: 'دَمْجُ القَوَاعِدِ',
      cards: [
        { chip: 'BACKGROUND · P2-L03', color: 'C0386B', head: 'كُنْتُ قَدْ', big: 'كُنْتُ قَدْ قَرَّرْتُ مَسِيرَتِي مُنْذُ صِغَرِي.', en: 'I had decided on my career since childhood.', clue: 'kuntu qad + past.' },
        { chip: 'CITATION · P2-L02', color: '6B4C9A', head: 'قَالَ إِنَّ · أَضَافَ أَنَّ', big: 'قَالَ مُرْشِدِي إِنَّ المَجَالَ وَاعِدٌ، وَأَضَافَ أَنَّهُ مَطْلُوبٌ.', en: 'My adviser said the field is promising, and added that it is in demand.', clue: 'qāla → inna; others → anna.' },
        { chip: 'PLAN · P1-L03', color: '1E6B52', head: 'إِذَا … سَـ · سَوْفَ', big: 'إِذَا طَوَّرْتُ مَهَارَاتِي، سَأَنْجَحُ فِي سُوقِ العَمَلِ.', en: 'If I develop my skills, I will succeed in the labour market.', clue: 'Past → sa-.' },
      ],
      error: { text: 'Website mistake 3: qāla takes inna, not anna.', pairs: [['قَالَ مُرْشِدِي إِنَّ المَجَالَ وَاعِدٌ', 'قَالَ مُرْشِدِي أَنَّ المَجَالَ وَاعِدٌ']] },
      notes: `GRAMMAR PART 3 — website rules 2–4 and teaching point “Integrate the P2 toolkit in one text”: a P2-standard paragraph combines kāna qad (background), qāla / ashāra … anna (what others say), a conditional and the future.
Website pattern 3 does two at once: كُنْتُ قَدْ قَرَّرْتُ مَسِيرَتِي، وَإِذَا اجْتَهَدْتُ سَأُحَقِّقُهَا.
Website quiz 5: أَشَارَ takes إِلَى before أَنَّ (أَشَارَ مُرْشِدِي إِلَى أَنَّ …).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · talking about AI with balance (website quiz 7, reading and listening) · Stretch', title: 'Not “AI is a disaster” — but …', ar: 'رَأْيٌ مُتَوَازِنٌ',
      cols: [{ label: 'Too strong ✗', w: 3.9, size: 18 }, { label: 'Balanced ✓', w: 6.1, size: 18 }, { label: 'Tool', w: 2.33 }],
      rows: [
        { core: true, cells: ['سَيُنْهِي الذَّكَاءُ كُلَّ العَمَلِ.', 'سَيَسْتَبْدِلُ بَعْضَ الوَظَائِفِ {k|لَا كُلَّهَا}.', 'baʿḍ … lā kullahā'] },
        { cells: ['الذَّكَاءُ الاصْطِنَاعِيُّ كَارِثَةٌ.', 'سَيَسْتَبْدِلُ الوَظَائِفَ الرُّوتِينِيَّةَ، {k|لٰكِنَّهُ لَنْ يَسْتَبْدِلَ} المُبْدِعِينَ.', 'lākinnahu lan + -a'] },
        { cells: ['سَيُنْهِي سُوقَ العَمَلِ.', 'سَيُعِيدُ تَشْكِيلَ سُوقِ العَمَلِ {k|لَا إِنْهَاءَهُ}.', 'lā + noun'] },
        { cells: ['يَجِبُ أَنْ نُقَاوِمَ التَّغْيِيرَ.', '{k|لَيْسَ} المُهِمُّ مُقَاوَمَةَ التَّغْيِيرِ، {k|بَلْ} مُوَاكَبَتَهُ.', 'laysa … bal'] },
      ],
      ltr: true,
      foot: 'Strong arguments hedge: some jobs, not all; routine work, not creative work.',
      notes: `GRAMMAR PART 4 — website success criterion “I discuss AI’s impact with balanced, hedged language”, quiz item 7 and the reading (سَيُعِيدُ تَشْكِيلَ سُوقِ العَمَلِ لَا إِنْهَاءَهُ · وَلَيْسَ المُهِمُّ مُقَاوَمَةَ التَّغْيِيرِ، بَلْ مُوَاكَبَتَهُ).
lan + subjunctive: لَنْ يَسْتَبْدِلَ (-a) — future negative.
Also useful: فِي حِينِ أَنَّ (whereas — website reading), يُمْكِنُ أَنْ (may), مِنَ المُحْتَمَلِ أَنَّ (it is likely that).`,
    },
  ],
  quick: [0, 2, 4, 5],
  rest: [1, 3, 6, 7],
  ido: {
    title: 'Watch me write about my future',
    steps: [
      { head: 'Background', ar: '{e|كُنْتُ قَدْ قَرَّرْتُ} …', think: 'P2-L03.' },
      { head: 'Citation', ar: '{m|أَشَارَ} مُرْشِدِي {m|إِلَى أَنَّ} …', think: 'P2-L02.' },
      { head: 'Plan', ar: '{k|إِذَا الْتَحَقْتُ} … {k|سَأُطَوِّرُ}', think: 'idhā … sa-.' },
      { head: 'Career verb', ar: '{w|يُعِدُّنِي لِمُوَاكَبَةِ} …', think: 'li-!' },
    ],
    legend: ['e', 'm', 'k', 'w'], legendLabels: { e: 'PAST PERFECT', m: 'REPORTED', k: 'CONDITIONAL', w: 'CAREER VERB' },
    model: '{e|كُنْتُ قَدْ قَرَّرْتُ} مَسِيرَتِي المِهَنِيَّةَ مُنْذُ صِغَرِي. {m|أَشَارَ} مُرْشِدِي الوَظِيفِيُّ {m|إِلَى أَنَّ} هٰذَا المَجَالَ مِنْ أَكْثَرِ المَجَالَاتِ طَلَبًا. {k|إِذَا الْتَحَقْتُ} بِجَامِعَةٍ مُتَمَيِّزَةٍ، {k|سَأُطَوِّرُ} مَهَارَاتِي فِي التَّفْكِيرِ النَّقْدِيِّ، فَالتَّعْلِيمُ الجَيِّدُ {w|يُعِدُّنِي لِمُوَاكَبَةِ} التَّغْيِيرِ.',
    modelEn: 'I had decided on my career since childhood. My careers adviser pointed out that this field is among the most in demand. If I join an excellent university, I will develop my critical-thinking skills, for good education prepares me to keep pace with change.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Background first: kuntu qad + past. Then what my adviser said: ashāra ilā anna. Then my plan: idhā + past, sa- + present. Finish with a career verb — yuʿidd needs li-: li-muwākabati.”',
  },
  patternEn: ['good education qualifies me for the competitive labour market', 'AI is turning into a partner, not a competitor', 'I had decided on my career, and if I work hard, I will achieve it'],
  gameKey: 'P2-L04',
  game: {
    title: 'Whose plan? Match the picture',
    pick: [0, 1, 5],
    en: ['I will study medicine in the future.', 'I will work as a programmer.', 'I aspire to a successful job.'],
    icons: [[['fa6', 'FaGraduationCap', '1E6B52'], ['fa6', 'FaArrowRight', 'C77700'], ['fa6', 'FaUserDoctor', 'C0386B']], [['fa6', 'FaLaptopCode', '1D5FBF'], ['fa6', 'FaCode', '6B4C9A']], [['fa6', 'FaBuilding', '1D5FBF'], ['fa6', 'FaStar', 'C77700']]],
    labels: ['from study to medicine', 'a programmer', 'career ambition'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6; the website files this future-plans set under P2-L04 and the study-skills set under P2-L05, so the two are swapped). Then upgrade each one with today’s verbs: أَطْمَحُ إِلَى دِرَاسَةِ الطِّبِّ، وَالتَّعْلِيمُ يُؤَهِّلُنِي لَهَا · إِذَا تَعَلَّمْتُ البَرْمَجَةَ، سَأَعْمَلُ مُبَرْمِجًا.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build a career argument (website live builder)', title: 'Background + citation + plan', ar: 'ابْنِ حُجَّتَكَ',
      cols: [{ label: '1 · Background (kāna qad)', w: 4.0, size: 17 }, { label: '2 · Citation (reported)', w: 4.1, size: 17 }, { label: '3 · Plan (idhā / sawfa)', w: 4.23, size: 17 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Say it, then write three different versions.',
      notes: `WE DO (3 min) — the website live builder: “Build a career argument from a past-perfect background, a reported-speech citation and a conditional plan.” Website feedback: each part is accurate on its own, so any three combinations work (the website asks for 3 different ones).
Core: read row 1 across. Develop: mix rows. Stretch: replace column 3 with your own plan using a career verb (… سَأُؤَهِّلُ نَفْسِي لِـ …).
Check the particles aloud: قَالَ إِنَّ · أَشَارَ إِلَى أَنَّ · أَكَّدَ أَنَّ.`,
    },
  ],
  sorterTitle: 'Which partner? li-, ilā — or a direct object / fī?',
  sorterCats: ['li-', 'ilā', 'direct object / fī'],
  sorterNotes: 'Then say each verb with its partner and a noun: يُؤَهِّلُ لِسُوقِ العَمَلِ · يُعِدُّ لِلْمُنَافَسَةِ · يَسْتَعِدُّ لِلامْتِحَانِ · يَتَحَوَّلُ إِلَى شَرِيكٍ · يَطْمَحُ إِلَى النَّجَاحِ · يَسْعَى إِلَى التَّعَلُّمِ · يَسْتَبْدِلُ الوَظَائِفَ · يُوَاكِبُ التَّغْيِيرَ · يُسْهِمُ فِي المُجْتَمَعِ.',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('يُؤَهِّلُ', 'yuʾahhil').replace('يَتَحَوَّلُ', 'yataḥawwal').replace('لِـ', 'li-').replace('إِلَى', 'ilā') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra (الاصْطِنَاعِيُّ); rule headings in English and transliteration; sorter headings in transliteration; the website visual games for P2-L04 and P2-L05 are swapped (future plans here). All other website items are used as published.',
  hints: ['yuʾahhil + ilā?', 'yataḥawwal + li-?', 'qāla + anna?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 4.\nListen for: qāla inna · aḍāfa anna · kānū qad.',
  listenRoutes: 'Core: questions 1, 3 and 4. Develop / Stretch: all 5 — and note every reporting verb you hear (four of them).',
  gloss: [
    ['قَالَ المُرْشِدُ الوَظِيفِيُّ إِنَّ سُوقَ العَمَلِ يَتَغَيَّرُ بِسُرْعَةٍ.', 'The careers adviser said that the labour market is changing quickly.'],
    ['وَأَضَافَ أَنَّ الذَّكَاءَ الاصْطِنَاعِيَّ سَيَسْتَبْدِلُ بَعْضَ الوَظَائِفِ الرُّوتِينِيَّةِ، لٰكِنَّهُ لَنْ يَسْتَبْدِلَ الوَظَائِفَ الَّتِي تَحْتَاجُ إِلَى إِبْدَاعٍ وَتَعَاطُفٍ.', 'He added that AI will replace some routine jobs, but it will not replace jobs that need creativity and empathy.'],
    ['وَأَشَارَ إِلَى أَنَّ التَّعْلِيمَ الجَيِّدَ يُؤَهِّلُ الشَّبَابَ لِسُوقٍ تَنَافُسِيٍّ، وَأَنَّ الجَامِعَةَ تُعِدُّهُمْ لِمُوَاكَبَةِ التَّغْيِيرِ.', 'He pointed out that good education qualifies young people for a competitive market, and that university prepares them to keep pace with change.'],
    ['كَثِيرٌ مِنَ الطُّلَّابِ كَانُوا قَدْ حَدَّدُوا مَسَارَهُمْ مُبَكِّرًا، ثُمَّ غَيَّرُوهُ بَعْدَ اكْتِشَافِ مَهَارَاتٍ جَدِيدَةٍ.', 'Many students had chosen their path early, then changed it after discovering new skills.'],
    ['وَقَالَ إِنَّ مَهَارَةَ التَّكَيُّفِ هِيَ الأَهَمُّ. وَخَلَصَ إِلَى أَنَّهُ إِذَا طَوَّرَ الطَّالِبُ تَفْكِيرَهُ النَّقْدِيَّ، فَسَيَجِدُ مَكَانَهُ فِي أَيِّ سُوقٍ.', 'He said adaptability is the most important skill. He concluded that if a student develops his critical thinking, he will find his place in any market.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا طُمُوحُكَ المِهَنِيُّ؟ وَكَيْفَ يُؤَهِّلُكَ التَّعْلِيمُ لَهُ؟' },
      { route: 'develop', ar: 'مَاذَا كُنْتَ قَدْ قَرَّرْتَ عَنْ مَسَارِكَ سَابِقًا؟' },
      { route: 'stretch', ar: 'أَيَّ الوَظَائِفِ سَيَسْتَبْدِلُهَا الذَّكَاءُ الاصْطِنَاعِيُّ، وَأَيَّهَا لَنْ يَسْتَبْدِلَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَطْمَحُ إِلَى ______ ، وَالتَّعْلِيمُ يُؤَهِّلُنِي لِهٰذِهِ المِهْنَةِ.' },
      { route: 'develop', ar: 'كُنْتُ قَدْ قَرَّرْتُ ______ مُنْذُ ______ .' },
      { route: 'stretch', ar: 'سَيَسْتَبْدِلُ ______ ، لٰكِنَّهُ لَنْ يَسْتَبْدِلَ ______ .' },
    ],
    modelEn: ['What is your career ambition?', 'I aspire to engineering, and good education qualifies me for the labour market and prepares me for competition.', 'And what about AI?', 'My adviser pointed out that it will not replace creative people, and if I develop my critical thinking, it will become a tool in my hand.'],
    notes: 'Website prompts and model. “Not decided yet” stem: لَمْ أُقَرِّرْ بَعْدُ، لٰكِنَّنِي أَطْمَحُ إِلَى … To a girl: طُمُوحُكِ · يُؤَهِّلُكِ · كُنْتِ قَدْ قَرَّرْتِ · مَسَارِكِ.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Website Core: five sentences with the career verbs and the correct complements.' },
    develop: { amount: '70–90 words', how: 'Website Develop: add a past-perfect background and a reported-speech clause.' },
    stretch: { amount: '110–120 words', how: 'Website task: integrate all four P2 structures and use yuʾahhil li- or yuʿidd li-.' },
  },
  frames: {
    core: [
      { en: 'I aspire to …', ar: 'أَطْمَحُ إِلَى ______ .' },
      { en: 'Education qualifies me for the job of …', ar: 'التَّعْلِيمُ يُؤَهِّلُنِي لِمِهْنَةِ ______ .' },
      { en: 'University prepares me to work in …', ar: 'الجَامِعَةُ تُعِدُّنِي لِلْعَمَلِ فِي ______ .' },
      { en: 'AI will turn into …', ar: 'سَيَتَحَوَّلُ الذَّكَاءُ الاصْطِنَاعِيُّ إِلَى ______ .' },
    ],
    develop: [
      { en: 'I had decided … since …', ar: 'كُنْتُ قَدْ قَرَّرْتُ ______ مُنْذُ ______ .' },
      { en: 'My adviser said that …', ar: 'قَالَ مُرْشِدِي إِنَّ ______ .' },
      { en: 'If I join university, I will …', ar: 'إِذَا الْتَحَقْتُ بِالجَامِعَةِ، ______ .' },
      { en: 'AI will replace …, but it will not replace …', ar: 'سَيَسْتَبْدِلُ الذَّكَاءُ ______ ، لٰكِنَّهُ لَنْ يَسْتَبْدِلَ ______ .' },
    ],
    bank: ['الطِّبُّ', 'الهَنْدَسَةُ', 'البَرْمَجَةُ', 'التَّعْلِيمُ', 'رِيَادَةُ الأَعْمَالِ', 'شَرِكَةٌ نَاشِئَةٌ', 'سُوقُ العَمَلِ', 'المُنَافَسَةُ', 'التَّفْكِيرُ النَّقْدِيُّ', 'مَهَارَةُ التَّكَيُّفِ', 'الوَظَائِفُ الرُّوتِينِيَّةُ', 'المُبْدِعِينَ'],
  },
  stretch: [
    ['وَبِحُلُولِ نِهَايَةِ المَرْحَلَةِ الابْتِدَائِيَّةِ', 'and by the end of primary school'],
    ['مِنْ أَكْثَرِ المَجَالَاتِ طَلَبًا', 'among the most in-demand fields'],
    ['لَنْ يَسْتَبْدِلَ المُتَخَصِّصِينَ المُبْدِعِينَ', 'will not replace creative specialists'],
    ['وَأُؤَهِّلُ نَفْسِي لِمِهَنِ المُسْتَقْبَلِ', 'and qualify myself for the careers of the future'],
    ['أَسْعَى الآنَ إِلَى تَعَلُّمِ لُغَاتٍ وَمَهَارَاتٍ جَدِيدَةٍ', 'I now strive to learn new languages and skills'],
  ],
  modelEn: 'I had decided on my career since childhood, and by the end of primary school I had become interested in technology. My careers adviser pointed out that this field is among the most in demand, and added that AI will not replace creative specialists. If I join an excellent university, I will develop my skills in critical thinking and problem solving. I will contribute to my field and qualify myself for the careers of the future. I realise that the labour market requires adaptability, so I now strive to learn new languages and skills — good education prepares me to keep pace with change.',
  find: ['two past-perfect backgrounds (kuntu qad)', 'two reported clauses (ashāra ilā anna · aḍāfa anna)', 'a conditional and a future (idhā … sa- · sawfa)', 'yuʾahhil li- and yuʿidd li-'],
  modelNotes: 'Website writing model. Evidence: كُنْتُ قَدْ قَرَّرْتُ · كُنْتُ قَدِ اهْتَمَمْتُ · أَشَارَ … إِلَى أَنَّ · وَأَضَافَ أَنَّ … لَنْ يَسْتَبْدِلَ · إِذَا الْتَحَقْتُ … سَأُطَوِّرُ · سَوْفَ أُسْهِمُ · أُؤَهِّلُ نَفْسِي لِمِهَنِ · أَسْعَى إِلَى · يُعِدُّنِي لِمُوَاكَبَةِ. Note قَدِ اهْتَمَمْتُ: qad takes a helping kasra before a waṣl alif.',
  selfCheck: [
    { route: 'core', text: 'yuʾahhil and yuʿidd have li-; yataḥawwal and yaṭmaḥ have ilā.' },
    { route: 'core', text: 'yastabdil and yuwākib have a direct object.' },
    { route: 'develop', text: 'My background uses kuntu qad + past (both end in -tu).' },
    { route: 'develop', text: 'qāla → inna; ashāra ilā / aḍāfa / akkada → anna.' },
    { route: 'stretch', text: 'I hedged about AI (some jobs, not all · lākinnahu lan …).' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['الخُبَرَاءِ', 'experts'], ['سَيُعِيدُ تَشْكِيلَ', 'will reshape'], ['إِنْهَاءَهُ', 'ending it'], ['سَيَتَوَلَّاهَا', 'will take them over'], ['فِي حِينِ أَنَّ', 'whereas'],
    ['لِلْبَشَرِ', 'for humans'], ['الشَّهَادَةِ', 'the certificate'], ['لَمْ تُوجَدْ بَعْدُ', 'do not exist yet'], ['أَدَاةٍ', 'a tool'], ['مُقَاوَمَةَ', 'resisting'],
  ],
  prep: {
    words: [['حَرَاكٌ اجْتِمَاعِيٌّ', 'social mobility', '—'], ['فُرَصٌ مُتَكَافِئَةٌ', 'equal opportunities', 'sg. فُرْصَةٌ'], ['فَجْوَةٌ تَعْلِيمِيَّةٌ', 'an education gap', 'pl. فَجَوَاتٌ'], ['مُسَاوَاةٌ', 'equality', '—'], ['لَوْ', 'if (hypothetical)', '—']],
    questionEn: 'Does education give everyone an equal chance?',
    questionAr: 'أَعْتَقِدُ أَنَّ التَّعْلِيمَ ______ فُرَصًا مُتَكَافِئَةً، لِأَنَّ ______ .',
    homework: {
      core: 'Learn the six career verbs with their partners; write five sentences about your future.',
      develop: 'A 70–90-word paragraph with a past-perfect background and a reported clause.',
      stretch: 'Website writing task: 110–120 words integrating all four P2 structures.',
    },
    wordsSource: 'The five words come from the website P2-L06 vocabulary (education and social mobility).',
  },
  remember: 'Remember: every career verb has a partner — yuʾahhil li- · yuʿidd li- · yataḥawwal ilā · yaṭmaḥ ilā · yastabdil + object — and a P2-standard paragraph weaves together kāna qad, qāla inna, idhā … sa- and sawfa.',
});

module.exports = { meta, slides };
