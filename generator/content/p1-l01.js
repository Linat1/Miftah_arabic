'use strict';
/* P1-L01 · Diet and Nutrition — website: Pathways › Progression › P1 › P1-L01 (the three content structures يَحْتَوِي عَلَى · غَنِيٌّ بِـ · يَفْتَقِرُ إِلَى,
 * non-human plural agreement دُهُونٌ مُشْبَعَةٌ, the impersonal recommendation يُوصَى بِـ / يُنْصَحُ بِـ + verbal noun, effect verbs يُقَلِّلُ مِنْ · يَزِيدُ مِنْ).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, builder and visual game used as published.
 * Website spelling الكَالْسْيُومِ (two sukūns in a row) is shown as الكَالْسِيُومِ in quiz item 1 and mistake 1. English added to the patterns. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P1')({
  n: 1, fileTitle: 'Diet_and_Nutrition', chip: 'Vocabulary',
  title: 'Diet and Nutrition — Reviewing and Extending Food Vocabulary', arabic: 'الغِذَاءُ وَالتَّغْذِيَةُ',
  focus: 'Describe what a food contains (يَحْتَوِي عَلَى), what it is rich in (غَنِيٌّ بِـ) and what it lacks (يَفْتَقِرُ إِلَى), make nutrient plurals agree (دُهُونٌ مُشْبَعَةٌ) and give advice impersonally (yūṣā bi-).',
  icon: 'FaBowlFood', iconSet: 'fa6',
});

const site = D.site('P1-L01');
const fixCa = (t) => (typeof t === 'string' ? t.replace(/الكَالْسْيُومِ/g, 'الكَالْسِيُومِ') : t);
const RH = [['Contains', 'yaḥtawī ʿalā + genitive'], ['Rich in · lacks', 'ghaniyy bi- + genitive · yaftaqir ilā + genitive'], ['Non-human plural agreement', 'plural of things + feminine singular adjective'], ['The impersonal recommendation', 'yūṣā bi- + genitive verbal noun']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const quiz = site.grammar.quiz.map((it) => ({ ...it, prompt: fixCa(it.prompt) }));
const mistakes = site.mistakes.map((m) => ({ ...m, wrong: fixCa(m.wrong), right: fixCa(m.right) }));
const mfp = (f, pl) => ({ tag: 'm · f · pl', forms: [{ l: 'pl.', ar: pl }, { l: 'f.', ar: f }] });
const sp = (sg) => ({ tag: 'sg · pl', forms: [{ l: 'sg.', ar: sg }] });
const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });

const slides = D.devLesson('P1-L01', {
  support: `• NEW PATHWAY AND UNIT (Progression P1 · Healthy Lifestyles · Year 9, B1 → B2). The jump: from naming food (F5) to ANALYSING it in academic register.
• Core: 10 nutrient words with accurate agreement + يَحْتَوِي عَلَى. Develop: all three content structures with their prepositions (عَلَى · بِـ · إِلَى). Stretch: the impersonal recommendation يُوصَى بِـ + a statement of effect (يُقَلِّلُ مِنْ / يَزِيدُ مِنْ) — website ~80–90-word analysis.
• Sensitivity: talk about FOOD, not bodies or weight. Some students may be fasting or have restricted diets; use “a meal I know” rather than “what you ate”.
• Grammar links: non-human plural agreement (GM-NVS / D units) · iḍāfa (مَصْدَرُ طَاقَةٍ, GM-POS-02) · genitive after a preposition (GM-CASE-03).`,
  teach: 'Three content structures, nutrient agreement, the impersonal يُوصَى بِـ.',
  wedo: 'Upgrade everyday sentences, sort verbs by preposition, build a meal analysis.',
  next: { nextCode: 'P1-L02', nextTitle: 'Physical Activity — Sport, Exercise and the Body', nextAr: 'النَّشَاطُ البَدَنِيُّ' },
  objectives: site.objectives,
  rulesAr: 'وَصْفُ المُحْتَوَى الغِذَائِيِّ',
  doNow: {
    questions: [
      q('What does بُرُوتِينٌ mean?', ['protein', 'fibre', 'fat'], 'Prepared at home (GM-INT-04).'),
      q('What does أَلْيَافٌ mean?', ['fibre', 'vitamins', 'calories'], 'Prepared at home (GM-INT-04).'),
      q('What does يَحْتَوِي عَلَى mean?', ['contains', 'lacks', 'reduces'], 'Prepared at home (GM-INT-04).'),
      q('Choose the correct agreement: سَيَّارَاتٌ ___', ['جَدِيدَةٌ', 'جَدِيدٌ', 'جَدِيدُونَ'], 'Non-human plural → feminine singular (GM / D units).'),
      q('After a preposition the noun is …', ['genitive (-i)', 'nominative (-u)', 'accusative (-a)'], 'GM-CASE-03: عَلَى الطَّاوِلَةِ.'),
    ],
    keyIdea: { text: 'Each content verb has its own preposition — learn them as one block.', ar: '{w|يَحْتَوِي عَلَى} · {k|غَنِيٌّ بِـ} · {e|يَفْتَقِرُ إِلَى}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of GM-INT-04. Question 4 retrieves non-human plural agreement; question 5 the genitive after a preposition (GM-CASE-03) — both are needed in every sentence today.',
  },
  routes: {
    core: ['I can name 10 nutrients.', 'I can say what a food contains (yaḥtawī ʿalā).'],
    develop: ['I can use all three structures with the right preposition.', 'I can make nutrient plurals agree (duhūn mushbaʿa).'],
    stretch: ['I can recommend impersonally (yūṣā bi-).', 'I can state an effect (yuqallil min / yazīd min).'],
  },
  bridge: [
    { ar: 'غِذَاءٌ', urdu: 'غذا', tr: 'ghizā', en: 'food, nourishment' },
    { ar: 'نِظَامٌ غِذَائِيٌّ مُتَوَازِنٌ', urdu: 'متوازن غذا', tr: 'mutawāzin ghizā', en: 'a balanced diet' },
    { ar: 'مَعَادِنُ', urdu: 'معدنیات', tr: 'maʿdaniyāt', en: 'minerals (from maʿdin, a mine)' },
    { ar: 'غَنِيٌّ', urdu: 'غنی', tr: 'ghanī', en: 'Urdu: wealthy · Arabic: rich (in)' },
    { ar: 'صِحَّةٌ', urdu: 'صحت', tr: 'sehat', en: 'health' },
  ],
  bridgeNotes: 'URDU BRIDGE: Urdu already has غذا، متوازن، معدنیات and صحت — students know more of this register than they think. CAREFUL: Urdu غنی means a wealthy person; in Arabic غَنِيٌّ بِـ is “rich IN” something and always needs بِـ.',
  core: ['بُرُوتِينٌ', 'كَرْبُوهِيدْرَاتٌ', 'دُهُونٌ', 'أَلْيَافٌ', 'فِيتَامِينَاتٌ', 'مَعَادِنُ', 'يَحْتَوِي عَلَى', 'غَنِيٌّ بِـ', 'يَفْتَقِرُ إِلَى', 'مُتَوَازِنٌ / مُتَوَازِنَةٌ', 'يُوصَى بِـ', 'يُقَلِّلُ مِنْ'],
  forms: {
    'دُهُونٌ': sp('دُهْنٌ'), 'أَلْيَافٌ': sp('لِيفٌ'), 'مَعَادِنُ': sp('مَعْدِنٌ'), 'فِيتَامِينَاتٌ': sp('فِيتَامِينٌ'),
    'سُعْرَاتٌ حَرَارِيَّةٌ': sp('سُعْرَةٌ حَرَارِيَّةٌ'), 'مَصْدَرُ طَاقَةٍ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'مَصَادِرُ طَاقَةٍ' }] },
    'غَنِيٌّ بِـ': { tag: 'm · f', forms: [{ l: 'f.', ar: 'غَنِيَّةٌ بِـ' }] }, 'مُتَوَازِنٌ / مُتَوَازِنَةٌ': { tag: 'm · f · things', forms: [{ l: 'things', ar: 'وَجَبَاتٌ مُتَوَازِنَةٌ' }] },
    'مُعَالَجٌ / مُعَالَجَةٌ': mfp('مُعَالَجَةٌ', 'أَطْعِمَةٌ مُعَالَجَةٌ'), 'عُضْوِيٌّ / عُضْوِيَّةٌ': mfp('عُضْوِيَّةٌ', 'خُضَرٌ عُضْوِيَّةٌ'),
    'حِصَّةٌ يَوْمِيَّةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'حِصَصٌ يَوْمِيَّةٌ' }] },
    'يَحْتَوِي عَلَى': ihs('أَحْتَوِي', 'تَحْتَوِي'), 'يَفْتَقِرُ إِلَى': ihs('أَفْتَقِرُ', 'تَفْتَقِرُ'), 'يَسْتَهْلِكُ': ihs('أَسْتَهْلِكُ', 'تَسْتَهْلِكُ'),
    'يُقَلِّلُ مِنْ': ihs('أُقَلِّلُ', 'تُقَلِّلُ'), 'يَزِيدُ مِنْ': ihs('أَزِيدُ', 'تَزِيدُ'), 'يُسَبِّبُ': ihs('أُسَبِّبُ', 'تُسَبِّبُ'), 'يُؤَدِّي إِلَى': ihs('أُؤَدِّي', 'تُؤَدِّي'),
  },
  vocabNotes: {
    0: 'Nutrients. The cards show the singular: most nutrient words are PLURALS of things, so their adjective is feminine singular — دُهُونٌ مُشْبَعَةٌ · مَعَادِنُ مُهِمَّةٌ. مَعَادِنُ is a diptote (no tanwīn).',
    1: 'Describing content. Learn each verb or adjective WITH its preposition: يَحْتَوِي عَلَى · غَنِيٌّ بِـ · يَفْتَقِرُ إِلَى. The plural of a food adjective is feminine singular: أَطْعِمَةٌ مُعَالَجَةٌ.',
    2: 'Academic verbs. يُوصَى بِـ and يُنْصَحُ بِـ are passive — nobody is named, which is the normal style of health writing. With a feminine subject: تُقَلِّلُ · تَزِيدُ · تُسَبِّبُ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · three content structures (website rules 1–2) · Core / Develop', title: 'Contains · rich in · lacks', ar: 'يَحْتَوِي · غَنِيٌّ · يَفْتَقِرُ',
      cols: [{ label: 'Meaning', w: 2.4 }, { label: 'Structure', w: 2.7, size: 24 }, { label: 'Example', w: 5.4, size: 22 }, { label: 'After it', w: 1.83 }],
      rows: [
        { core: true, cells: ['contains', '{w|يَحْتَوِي عَلَى}', 'يَحْتَوِي السَّمَكُ {w|عَلَى} بُرُوتِينٍ.', 'genitive -in'] },
        { core: true, cells: ['is rich in', '{k|غَنِيٌّ بِـ}', 'التَّمْرُ غَنِيٌّ {k|بِالحَدِيدِ}.', 'genitive -i'] },
        { cells: ['is rich in (f.)', '{k|غَنِيَّةٌ بِـ}', 'الخُضَرُ غَنِيَّةٌ {k|بِالفِيتَامِينَاتِ}.', 'adjective agrees'] },
        { core: true, cells: ['lacks', '{e|يَفْتَقِرُ إِلَى}', 'يَفْتَقِرُ الطَّعَامُ {e|إِلَى} الأَلْيَافِ.', 'genitive -i'] },
        { cells: ['contains (f.)', '{w|تَحْتَوِي عَلَى}', 'تَحْتَوِي الخُضَرُ {w|عَلَى} أَلْيَافٍ كَثِيرَةٍ.', 'things → she'] },
      ],
      ltr: true,
      foot: 'One verb, one preposition — swapping them is the commonest error in this topic (website teaching point).',
      notes: `GRAMMAR PART 1 — website rules “يَحْتَوِي عَلَى” and “غَنِيٌّ بِـ and يَفْتَقِرُ إِلَى”. Website teaching point: “يَحْتَوِي عَلَى states what is in something, غَنِيٌّ بِـ says it has a lot of it, and يَفْتَقِرُ إِلَى says it is missing.”
Say it as a chant: ‘iḥtawā ʿalā · ghaniyy bi · iftaqara ilā’. Then point out: after each preposition the noun is GENITIVE (GM-CASE-03).
Row 5: الخُضَرُ is a plural of things, so the verb is feminine — تَحْتَوِي (and the adjective غَنِيَّةٌ in row 3).
Website mistakes: يَحْتَوِي الحَلِيبُ بِالكَالْسِيُومِ ✗ · يَفْتَقِرُ الطَّعَامُ الأَلْيَافَ ✗.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · non-human plural agreement (website rule 3) · Core / Develop', title: 'Plural of things = feminine singular', ar: 'جَمْعُ غَيْرِ العَاقِلِ',
      cols: [{ label: 'Meaning', w: 2.9 }, { label: 'Singular', w: 2.4, size: 24 }, { label: 'Plural + adjective', w: 4.3, size: 24 }, { label: 'Not', w: 2.73, size: 22 }],
      rows: [
        { core: true, cells: ['saturated fats', 'دُهْنٌ', 'دُهُونٌ {k|مُشْبَعَةٌ}', 'مُشْبَعُونَ'] },
        { core: true, cells: ['natural fibre', 'لِيفٌ', 'أَلْيَافٌ {k|طَبِيعِيَّةٌ}', 'طَبِيعِيُّونَ'] },
        { core: true, cells: ['important minerals', 'مَعْدِنٌ', 'مَعَادِنُ {k|مُهِمَّةٌ}', 'مُهِمُّونَ'] },
        { cells: ['high calories', 'سُعْرَةٌ', 'سُعْرَاتٌ حَرَارِيَّةٌ {k|عَالِيَةٌ}', 'عَالُونَ'] },
        { cells: ['processed foods', 'طَعَامٌ', 'أَطْعِمَةٌ {k|مُعَالَجَةٌ}', 'مُعَالَجُونَ'] },
      ],
      ltr: true,
      foot: 'Things in the plural behave like “she”: the adjective takes -a and the verb takes ta- (taḥtawī al-aṭʿima).',
      notes: `GRAMMAR PART 2 — website rule “Non-human plural agreement” and teaching point: “Arabic treats a plural of things as grammatically feminine singular, so the adjective ends in ـَةٌ.”
The -ūna ending (مُشْبَعُونَ) is ONLY for groups of male people: مُعَلِّمُونَ مُجْتَهِدُونَ. Ask: “Is it a person? No → -a.”
Case check (website mission): after عَلَى the whole phrase is genitive — تَحْتَوِي عَلَى دُهُونٍ مُشْبَعَةٍ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · advice and effect (website rule 4) · Develop / Stretch', title: 'Advise without naming anyone', ar: 'يُوصَى بِـ · يُنْصَحُ بِـ',
      cards: [
        { chip: 'RECOMMEND · DEVELOP', color: '1D5FBF', head: 'يُوصَى بِـ', big: 'يُوصَى بِتَنَاوُلِ الخُضَرِ يَوْمِيًّا.', en: 'It is recommended to eat vegetables daily.', clue: 'Passive: -ū-ā.' },
        { chip: 'ADVISE · DEVELOP', color: 'C0386B', head: 'يُنْصَحُ بِـ', big: 'يُنْصَحُ بِتَقْلِيلِ المِلْحِ وَالسُّكَّرِ.', en: 'It is advised to reduce salt and sugar.', clue: 'No doer named.' },
        { chip: 'EFFECT · STRETCH', color: '6B4C9A', head: 'يُقَلِّلُ مِنْ · يَزِيدُ مِنْ', big: 'وَيُقَلِّلُ ذٰلِكَ مِنْ خَطَرِ أَمْرَاضِ القَلْبِ.', en: 'And that reduces the risk of heart disease.', clue: 'Both take min.' },
      ],
      error: { text: 'Website quiz: the passive needs bi- and a genitive verbal noun.', pairs: [['يُوصَى بِتَنَاوُلِ الخُضَرِ', 'يُوصَى تَنَاوُلَ الخُضَرِ']] },
      notes: `GRAMMAR PART 3 — website rule “The impersonal recommendation” (يُوصَى بِـ + genitive verbal noun: “a passive that gives advice without naming who gives it — standard in health writing”).
Contrast the sounds: يُوصِي (yūṣī, active: someone recommends — يُوصِي الأَطِبَّاءُ بِـ) vs يُوصَى (yūṣā, passive: it is recommended). Both are correct, but the passive is the academic choice.
Verbal nouns to use today: تَنَاوُلٌ (eating) · تَقْلِيلٌ (reducing) · إِضَافَةٌ (adding) · قِرَاءَةٌ (reading) · شُرْبٌ (drinking).
Effect verbs from the website table: يُقَلِّلُ مِنَ الخَطَرِ · يَزِيدُ مِنَ الطَّاقَةِ · يُؤَدِّي إِلَى.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · from Foundation to academic register (website summary) · Stretch', title: 'Upgrade the sentence', ar: 'مِنَ العَامِّيِّ إِلَى العِلْمِيِّ',
      cols: [{ label: 'Foundation (everyday)', w: 4.6, size: 22 }, { label: 'Progression (academic)', w: 5.6, size: 22 }, { label: 'Tool', w: 2.13 }],
      rows: [
        { core: true, cells: ['فِي السَّمَكِ بُرُوتِينٌ.', 'يَحْتَوِي السَّمَكُ {w|عَلَى} بُرُوتِينٍ.', 'contains'] },
        { core: true, cells: ['فِي التَّمْرِ حَدِيدٌ كَثِيرٌ.', 'التَّمْرُ غَنِيٌّ {k|بِالحَدِيدِ}.', 'rich in'] },
        { cells: ['لَيْسَ فِي الطَّعَامِ أَلْيَافٌ.', 'يَفْتَقِرُ الطَّعَامُ {e|إِلَى} الأَلْيَافِ.', 'lacks'] },
        { cells: ['كُلِ الخُضَرَ كُلَّ يَوْمٍ!', '{m|يُوصَى} بِتَنَاوُلِ الخُضَرِ يَوْمِيًّا.', 'passive advice'] },
        { cells: ['الأَكْلُ الجَيِّدُ حِلْوٌ.', 'يُوصَى بِنِظَامٍ غِذَائِيٍّ مُتَوَازِنٍ.', 'precise noun'] },
      ],
      ltr: true,
      foot: 'Academic register = a precise verb + the right preposition + no named doer + no “very, very”.',
      notes: `GRAMMAR PART 4 — the website summary: “Upgrade Foundation food vocabulary to academic register”. Website quiz item 8 contrasts يُوصَى بِنِظَامٍ غِذَائِيٍّ مُتَوَازِنٍ … with الأَكْلُ الجَيِّدُ حِلْوٌ وَمُفِيدٌ and أُحِبُّ الطَّعَامَ كَثِيرًا جِدًّا.
Cover the right-hand column and ask students to upgrade each left-hand sentence before you reveal it. Core students can stop after row 2.
Row 4: كُلْ (eat!) becomes كُلِ before al- — a command names “you”; the passive names nobody.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me analyse a meal',
    steps: [
      { head: 'Contains', ar: '{w|تَحْتَوِي} الوَجْبَةُ {w|عَلَى} بُرُوتِينٍ', think: 'Meal = she.' },
      { head: 'Rich in', ar: 'وَهِيَ {k|غَنِيَّةٌ بِالأَلْيَافِ}', think: 'ghaniyya + bi.' },
      { head: 'Lacks', ar: 'لٰكِنَّهَا {e|تَفْتَقِرُ إِلَى} الفَوَاكِهِ', think: 'The gap.' },
      { head: 'Advise', ar: '{m|يُوصَى} بِإِضَافَةِ فَاكِهَةٍ', think: 'Nobody named.' },
    ],
    legend: ['w', 'k', 'e', 'm'], legendLabels: { w: 'CONTAINS', k: 'RICH IN', e: 'LACKS', m: 'ADVICE' },
    model: 'تَنَاوَلْتُ وَجْبَةً مِنَ الأَرُزِّ وَالدَّجَاجِ وَالسَّلَطَةِ. {w|تَحْتَوِي} هٰذِهِ الوَجْبَةُ {w|عَلَى} بُرُوتِينٍ عَالِي الجَوْدَةِ وَكَرْبُوهِيدْرَاتٍ، وَهِيَ {k|غَنِيَّةٌ بِالأَلْيَافِ}. وَلٰكِنَّهَا {e|تَفْتَقِرُ إِلَى} الفَوَاكِهِ. {m|يُوصَى} بِإِضَافَةِ حِصَّةٍ مِنَ الفَاكِهَةِ.',
    modelEn: 'I ate a meal of rice, chicken and salad. This meal contains high-quality protein and carbohydrates, and it is rich in fibre. But it lacks fruit. It is recommended to add a portion of fruit.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “The meal is feminine, so taḥtawī and ghaniyya. Which preposition does this word take? Now the gap — iftaqara ilā. Advice: I don’t say who advises, so yūṣā bi + a verbal noun.”',
  },
  patternEn: ['it contains high-quality protein', 'saturated fats', 'it is recommended to eat vegetables'],
  game: {
    title: 'Which plate? Match the picture',
    pick: [0, 1, 5],
    en: ['This is a healthy, balanced meal.', 'This meal is rich in sugar and fat.', 'Sugar should be reduced.'],
    icons: [[['fa6', 'FaBowlFood', '1E6B52'], ['fa6', 'FaAppleWhole', 'C0386B'], ['fa6', 'FaGlassWater', '1D5FBF']], [['fa6', 'FaBurger', 'C77700'], ['fa6', 'FaCakeCandles', 'C0386B']], [['fa6', 'FaCandyCane', 'C0386B'], ['fa6', 'FaArrowDown', '6B4C9A']]],
    labels: ['salad, fruit and water', 'burger and cake', 'sweets going down'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Then upgrade each one: الوَجْبَةُ غَنِيَّةٌ بِالسُّكَّرِ → وَتَفْتَقِرُ إِلَى الأَلْيَافِ · يَنْبَغِي تَقْلِيلُ السُّكَّرِ → يُنْصَحُ بِتَقْلِيلِ السُّكَّرِ. Other website cards: fruit and vegetables, water, balance.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build an analysis (website builder)', title: 'Contains + strength + gap', ar: 'اِبْنِ تَحْلِيلًا',
      cols: [{ label: '1 · Contains', w: 4.1, size: 20 }, { label: '2 · Strength', w: 3.7, size: 20 }, { label: '3 · Gap / advice / effect', w: 4.53, size: 20 }],
      rows: [
        { core: true, cells: ['تَحْتَوِي الوَجْبَةُ عَلَى بُرُوتِينٍ', 'وَهِيَ غَنِيَّةٌ بِالأَلْيَافِ', 'وَلٰكِنَّهَا تَفْتَقِرُ إِلَى الخُضَرِ'] },
        { core: true, cells: ['تَحْتَوِي الوَجْبَةُ عَلَى كَرْبُوهِيدْرَاتٍ', 'وَهِيَ غَنِيَّةٌ بِالفِيتَامِينَاتِ', 'وَيُوصَى بِتَقْلِيلِ المِلْحِ'] },
        { cells: ['تَحْتَوِي الوَجْبَةُ عَلَى دُهُونٍ غَيْرِ مُشْبَعَةٍ', 'وَهِيَ غَنِيَّةٌ بِالمَعَادِنِ', 'وَيُقَلِّلُ ذٰلِكَ مِنْ خَطَرِ الأَمْرَاضِ'] },
      ],
      foot: 'Website builder: every clause is accurate, so any three different combinations make a valid analysis.',
      notes: `WE DO (3 min) — the website sentence builder. Pairs build THREE different analyses by taking one box from each column (27 combinations are possible).
Core: read one full row aloud. Develop: build two new combinations and translate them. Stretch: add a fourth clause of their own with يُوصَى بِـ or يَزِيدُ مِنْ.
Check aloud: “Why غَنِيَّةٌ and not غَنِيٌّ?” — the meal (الوَجْبَةُ) is feminine.`,
    },
  ],
  sorterTitle: 'Which preposition?',
  sorterNotes: 'Then say a phrase for each verb: يَحْتَوِي عَلَى بُرُوتِينٍ · يُحَافِظُ عَلَى الصِّحَّةِ · يُوصَى بِتَنَاوُلِ … · يُؤَدِّي إِلَى … · يُقَلِّلُ مِنَ الخَطَرِ.',
  patch: { grammar: { ...site.grammar, quiz, rules }, mistakes },
  patchNote: 'the website spelling الكَالْسْيُومِ (two sukūns) is shown as الكَالْسِيُومِ in one quiz item and one mistake; English translations added to the patterns. rule headings and formulas shown in English and transliteration. All other website items are used as published.',
  hints: ['yaḥtawī + which preposition?', 'Things in the plural: -ūna or -a?', 'iftaqara + which preposition?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nListen for: عَلَى · بِـ · إِلَى.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5 — and write down the three content structures you hear.',
  gloss: [
    ['النِّظَامُ الغِذَائِيُّ المُتَوَازِنُ يَحْتَوِي عَلَى بُرُوتِينٍ وَكَرْبُوهِيدْرَاتٍ وَدُهُونٍ غَيْرِ مُشْبَعَةٍ.', 'A balanced diet contains protein, carbohydrates and unsaturated fats.'],
    ['الخُضَرُ وَالفَوَاكِهُ غَنِيَّةٌ بِالفِيتَامِينَاتِ وَالمَعَادِنِ، وَتَحْتَوِي عَلَى أَلْيَافٍ تُسَاعِدُ الهَضْمَ.', 'Vegetables and fruit are rich in vitamins and minerals, and contain fibre that helps digestion.'],
    ['أَمَّا الأَطْعِمَةُ المُعَالَجَةُ فَتَحْتَوِي عَادَةً عَلَى دُهُونٍ مُشْبَعَةٍ وَمِلْحٍ كَثِيرٍ، وَتَفْتَقِرُ إِلَى الأَلْيَافِ.', 'Processed foods, however, usually contain saturated fats and a lot of salt, and lack fibre.'],
    ['يُوصَى بِتَنَاوُلِ خَمْسِ حِصَصٍ مِنَ الخُضَرِ وَالفَوَاكِهِ يَوْمِيًّا، وَيُنْصَحُ بِتَقْلِيلِ السُّكَّرِ.', 'It is recommended to eat five portions of vegetables and fruit daily, and it is advised to reduce sugar.'],
    ['وَيُقَلِّلُ هٰذَا مِنْ خَطَرِ أَمْرَاضِ القَلْبِ، وَيَزِيدُ مِنَ الطَّاقَةِ اليَوْمِيَّةِ.', 'This reduces the risk of heart disease and increases daily energy.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ وَجْبَةً تَنَاوَلْتَهَا. عَلَى مَاذَا تَحْتَوِي؟' },
      { route: 'develop', ar: 'بِمَاذَا هِيَ غَنِيَّةٌ؟ وَإِلَى مَاذَا تَفْتَقِرُ؟' },
      { route: 'stretch', ar: 'بِمَاذَا تُوصِي لِتَحْسِينِهَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'تَحْتَوِي الوَجْبَةُ عَلَى ______ وَ ______ .' },
      { route: 'develop', ar: 'هِيَ غَنِيَّةٌ بِالأَلْيَافِ، وَلٰكِنَّهَا تَفْتَقِرُ إِلَى ______ .' },
      { route: 'stretch', ar: 'يُوصَى بِإِضَافَةِ ______ ، لِأَنَّ ذٰلِكَ يُقَلِّلُ مِنْ ______ .' },
    ],
    modelEn: ['Describe a meal you ate. What does it contain?', 'It contains protein and carbohydrates, and it is rich in fibre.', 'And what does it lack?', 'It lacks vegetables, so it is recommended to add a salad to improve the balance.'],
    notes: 'Website prompts and model. Students may describe any meal they know (a school lunch, a family dish). Listen for the three prepositions and for غَنِيَّةٌ (the meal is feminine). To a girl: صِفِي · تَنَاوَلْتِهَا · تُوصِينَ.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Website Core: name nutrients with accurate agreement (duhūn mushbaʿa).' },
    develop: { amount: '60–70 words', how: 'Website Develop: add all three content structures with their correct prepositions.' },
    stretch: { amount: '80–90 words', how: 'Website task: add yūṣā bi- and a statement of effect — academic register throughout.' },
  },
  frames: {
    core: [
      { en: 'This meal contains …', ar: 'تَحْتَوِي هٰذِهِ الوَجْبَةُ عَلَى ______ .' },
      { en: 'Vegetables are rich in vitamins and …', ar: 'الخُضَرُ غَنِيَّةٌ بِالفِيتَامِينَاتِ وَ ______ .' },
      { en: 'Processed foods contain saturated fats.', ar: 'تَحْتَوِي الأَطْعِمَةُ المُعَالَجَةُ عَلَى ______ مُشْبَعَةٍ.' },
      { en: '… is an energy source.', ar: '______ مَصْدَرُ طَاقَةٍ.' },
    ],
    develop: [
      { en: 'But it lacks …', ar: 'وَلٰكِنَّهَا تَفْتَقِرُ إِلَى ______ .' },
      { en: 'It is recommended to add …', ar: 'يُوصَى بِإِضَافَةِ ______ .' },
      { en: 'It is advised to reduce …', ar: 'يُنْصَحُ بِتَقْلِيلِ ______ .' },
      { en: 'Because that reduces the risk of …', ar: 'لِأَنَّ ذٰلِكَ يُقَلِّلُ مِنْ خَطَرِ ______ .' },
    ],
    bank: ['بُرُوتِينٌ', 'كَرْبُوهِيدْرَاتٌ', 'دُهُونٌ غَيْرُ مُشْبَعَةٍ', 'أَلْيَافٌ', 'فِيتَامِينَاتٌ', 'مَعَادِنُ', 'الحَدِيدُ', 'المِلْحُ', 'السُّكَّرُ', 'حِصَّةٌ يَوْمِيَّةٌ', 'أَمْرَاضُ القَلْبِ', 'الطَّاقَةُ'],
  },
  stretch: [
    ['بُرُوتِينٌ عَالِي الجَوْدَةِ', 'high-quality protein'],
    ['كَرْبُوهِيدْرَاتٌ مُعَقَّدَةٌ', 'complex carbohydrates'],
    ['مِلْحٌ أَكْثَرُ مِمَّا يَنْبَغِي', 'more salt than there should be'],
    ['يُقَلِّلُ مِنْ خَطَرِ ارْتِفَاعِ ضَغْطِ الدَّمِ', 'reduces the risk of high blood pressure'],
    ['لَيْسَ الهَدَفُ الكَمَالَ، بَلْ عَادَةٌ مُسْتَدَامَةٌ', 'the goal is not perfection, but a sustainable habit'],
  ],
  modelEn: 'Yesterday I ate a simple meal of rice, chicken and salad. This meal contains high-quality protein and complex carbohydrates, and it is rich in fibre and some minerals. However, it lacks fruit, and it contains more salt than it should. It is recommended to add a portion of fruit and to reduce the salt, because that reduces the risk of high blood pressure and increases the nutritional value. The goal is not perfection, but a sustainable habit.',
  find: ['all three content structures (ʿalā · bi- · ilā)', 'a nutrient plural with a feminine adjective', 'the impersonal yūṣā bi-', 'a statement of effect (yuqallil min / yazīd min)'],
  modelNotes: 'Website writing model. Evidence: تَحْتَوِي … عَلَى بُرُوتِينٍ · غَنِيَّةٌ بِالأَلْيَافِ · تَفْتَقِرُ إِلَى الفَوَاكِهِ · كَرْبُوهِيدْرَاتٍ مُعَقَّدَةٍ · يُوصَى بِإِضَافَةِ … وَبِتَقْلِيلِ … · يُقَلِّلُ مِنْ خَطَرِ … وَيَزِيدُ مِنَ القِيمَةِ الغِذَائِيَّةِ.',
  selfCheck: [
    { route: 'core', text: 'My nutrient plurals have a feminine adjective (duhūn mushbaʿa).' },
    { route: 'core', text: 'I used yaḥtawī / taḥtawī with ʿalā.' },
    { route: 'develop', text: 'I used ghaniyy bi- and yaftaqir ilā correctly.' },
    { route: 'develop', text: 'The noun after each preposition is genitive.' },
    { route: 'stretch', text: 'I recommended with yūṣā bi- and stated an effect.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['يَعْتَمِدُ عَلَى', 'depends on'], ['التَّنَوُّعِ', 'variety'], ['الحِرْمَانِ', 'deprivation'], ['لِبِنَاءِ العَضَلَاتِ', 'to build muscle'], ['لِوَظَائِفَ حَيَوِيَّةٍ', 'for vital functions'],
    ['القِيمَةِ الغِذَائِيَّةِ', 'nutritional value'], ['المُلْصَقَاتِ', 'the labels'], ['قَبْلَ الشِّرَاءِ', 'before buying'], ['مِثَالِيًّا', 'ideal, perfect'], ['مُسْتَدَامَةٌ', 'sustainable'],
  ],
  prep: {
    words: [['لِيَاقَةٌ بَدَنِيَّةٌ', 'physical fitness', '—'], ['العَضَلَاتُ', 'the muscles', 'sg. عَضَلَةٌ'], ['يَتَمَرَّنُ', 'he exercises', 'تَتَمَرَّنُ she'], ['بِانْتِظَامٍ', 'regularly', '—'], ['يُقَوِّي', 'he strengthens', 'تُقَوِّي she']],
    questionEn: 'Which sport or exercise do you do, and how often?',
    questionAr: 'أَتَمَرَّنُ ______ مَرَّاتٍ فِي الأُسْبُوعِ.',
    homework: {
      core: 'Learn the 10 nutrients; write five sentences with accurate agreement.',
      develop: 'A 60–70-word analysis of a meal with all three content structures.',
      stretch: 'Website writing task: 80–90 words with yūṣā bi- and a statement of effect.',
    },
    wordsSource: 'The five words come from the website P1-L02 vocabulary (fitness and activities).',
  },
  remember: 'Remember: yaḥtawī ʿalā · ghaniyy bi- · yaftaqir ilā — a plural of things takes a feminine adjective (duhūn mushbaʿa) — and yūṣā bi- gives advice without naming anyone.',
});

module.exports = { meta, slides };
