'use strict';
/* D4-L07 · Resources and Sustainability — When Resources Run Out — website: Pathways › Development › D4 › D4-L07 (resource nouns, يَنْضَبُ / يَشِحُّ, real condition إِذَا + past، فَسَوْفَ …, negative condition إِذَا لَمْ + jussive, transition يَنْتَقِلُ مِنْ … إِلَى / يَسْتَبْدِلُ … بِـ).
 * Correction: the website writes a jussive before al- with sukūn (نُرَشِّدْ المَاءَ); in vowelled Arabic the sukūn becomes kasra before
 * hamzat al-waṣl (نُرَشِّدِ المَاءَ, as in the website listening: تُرَشِّدِ الأُسَرُ). The deck uses the kasra form throughout. The website
 * visual game repeats D4-L04, so the picture match is skipped. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D4')({
  n: 7, fileTitle: 'Resources_and_Sustainability', chip: 'Resources',
  title: 'Resources and Sustainability — When Resources Run Out', arabic: 'المَوَارِدُ وَالاسْتِدَامَةُ — عِنْدَمَا تَنْضَبُ المَوَارِدُ',
  focus: 'Predict what happens to water, oil and energy: resources run out (يَنْضَبُ) or become scarce (يَشِحُّ); “if … continues, … will …” (إِذَا اسْتَمَرَّ …، فَسَوْفَ …); “if we don’t …” (إِذَا لَمْ نُرَشِّدِ …) — and how we move to sustainable sources.',
  icon: 'FaDroplet', iconSet: 'fa6',
});

const fixJ = (v) => (typeof v === 'string' ? v.replace(/نُرَشِّدْ ال/g, 'نُرَشِّدِ ال')
  : Array.isArray(v) ? v.map(fixJ) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, fixJ(x)])) : v);
const site = fixJ(D.site('D4-L07'));
const quiz = site.grammar.quiz.map((it, i) => {
  if (i === 1) return { ...it, options: ['تَشِحُّ المِيَاهُ فِي فَتَرَاتِ الجَفَافِ.', 'يَشِحُّ المِيَاهُ فِي فَتَرَاتِ الجَفَافِ.', 'تَشِحُّ المِيَاهُ إِلَى فَتَرَاتِ الجَفَافِ.'], answer: 0 };
  if (i === 3) return { ...it, options: ['إِذَا لَمْ نُرَشِّدِ المَاءَ', 'إِذَا لَمْ رَشَّدْنَا المَاءَ', 'إِذَا لَنْ نُرَشِّدَ المَاءَ'], answer: 0 };
  return it;
});
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D4-L07', {
  support: `• Core: 8 resource words + “X is running out / becoming scarce” with the right verb and agreement (يَنْضَبُ النِّفْطُ · تَشِحُّ المِيَاهُ). Develop: a real condition (إِذَا اسْتَمَرَّ …، فَسَوْفَ …). Stretch: a negative condition (إِذَا لَمْ + jussive) and a transition (نَنْتَقِلُ مِنْ … إِلَى … / نَسْتَبْدِلُ … بِـ …) with a judgement on responsibility.
• Builds on D3-L05 (إِذَا + past) and D4-L04 (solutions). NEW: لَمْ + jussive (no final vowel: نُرَشِّدْ; before al- the sukūn becomes kasra: نُرَشِّدِ المَاءَ).
• المِيَاهُ (water, a plural) is treated as feminine → تَشِحُّ.
• Real-world hook: water scarcity in Jordan / Yemen and desalination in the Gulf; Islamic link (teacher choice): the prohibition of wasting water even for wuḍūʾ.`,
  teach: 'Resource words, run out / become scarce, if … will … and if we don’t …',
  wedo: 'Sort the words, fix and listen: groundwater under pressure.',
  next: { nextCode: 'D4-L08', nextTitle: 'Reading — Environment and Technology Texts', nextAr: 'القِرَاءَةُ — نُصُوصُ البِيئَةِ وَالتِّقْنِيَّةِ' },
  objectives: ['Name natural resources and sustainability terms.', 'Use يَنْضَبُ / يَشِحُّ with correct agreement.', 'Predict with real and negative conditions (إِذَا … فَسَوْفَ / إِذَا لَمْ …).', 'Explain a transition to sustainable sources and who is responsible.'],
  rulesTitle: 'Conditions, depletion and sustainable transition',
  rulesAr: 'الشَّرْطُ وَالنُّضُوبُ وَالانْتِقَالُ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does الاسْتِدَامَةُ mean?', ['sustainability', 'consumption', 'scarcity'], 'Prepared at home (D4-L06).'),
      q('What does يَهْدِرُ mean?', ['wastes', 'runs out', 'saves'], 'Prepared at home (D4-L06).'),
      q('Complete: إِذَا ___ ، فَسَأَلْتَحِقُ بِالجَامِعَةِ.', ['نَجَحْتُ', 'سَأَنْجَحُ', 'نَاجِحٌ'], 'D3-L05: idhā + past.'),
      q('Complete: يَنْبَغِي أَنْ ___ المَاءَ.', ['نُوَفِّرَ', 'نُوَفِّرْ', 'وَفَّرْنَا'], 'D4-L04: an + -a.'),
      q('Choose the accurate sentence.', ['تُسْتَخْدَمُ الأَلْوَاحُ لِتَوْلِيدِ الكَهْرَبَاءِ.', 'يُسْتَخْدَمُ الأَلْوَاحُ لِتَوْلِيدِ الكَهْرَبَاءِ.', 'تُسْتَخْدَمُ الأَلْوَاحُ إِلَى الكَهْرَبَاءِ.'], 'D4-L06: non-human plural → tu-.'),
    ],
    keyIdea: { text: 'Predict the future of a resource: if this continues → it will run out. If we don’t act → it will get worse.', ar: 'إِذَا {k|اسْتَمَرَّ} الهَدْرُ، {w|فَسَوْفَ تَنْضَبُ} المَوَارِدُ · إِذَا {e|لَمْ نُرَشِّدِ} المَاءَ …' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of D4-L06. Questions 3–5 retrieve D3-L05 (idhā + past), D4-L04 (an + -a) and D4-L06 (passive agreement).',
  },
  routes: {
    core: ['I can name eight resource words.', 'I can say a resource is running out.'],
    develop: ['I can predict with idhā istamarra …, fa-sawfa …', 'I can make yanḍabu / yashiḥḥu agree.'],
    stretch: ['I can use idhā lam + jussive.', 'I can explain a transition and who is responsible.'],
  },
  bridge: [
    { ar: 'مَوْرِدٌ / مَوَارِدُ', urdu: 'وسائل', tr: 'wasāʾil', en: 'resources (meaning only)' },
    { ar: 'اسْتِعْمَالٌ / اسْتِهْلَاكٌ', urdu: 'استعمال', tr: 'istiʿmāl', en: 'use / consumption' },
    { ar: 'نَسْلٌ / أَجْيَالٌ', urdu: 'نسل', tr: 'nasl', en: 'generation(s)' },
    { ar: 'ذَخِيرَةٌ / مَخْزُونٌ', urdu: 'ذخیرہ', tr: 'zakhīra', en: 'store, reserve' },
    { ar: 'تَدْرِيجِيًّا', urdu: 'تدریجاً', tr: 'tadrījan', en: 'gradually' },
  ],
  bridgeNotes: 'URDU BRIDGE: استعمال، ذخیرہ (a store / stock — Arabic مَخْزُونٌ, from the same idea as خزانہ), تدریجاً are shared. Urdu نسل = generation (Arabic uses أَجْيَالٌ in the text: الأَجْيَالُ القَادِمَةُ).',
  core: ['المَوَارِدُ', 'الاسْتِدَامَةُ', 'شُحُّ المِيَاهِ', 'الوَقُودُ الأُحْفُورِيُّ', 'المِيَاهُ الجَوْفِيَّةُ', 'الاسْتِهْلَاكُ', 'يَنْضَبُ', 'يَشِحُّ', 'يُرَشِّدُ', 'إِذَا اسْتَمَرَّ', 'إِذَا لَمْ', 'فَسَوْفَ'],
  vocabNotes: {
    0: 'Resources and scarcity: الوَقُودُ الأُحْفُورِيُّ = fossil fuel; المِيَاهُ الجَوْفِيَّةُ = groundwater (جَوْفٌ = inside / hollow).',
    1: 'Resource verbs: يَنْضَبُ (a stock runs out) vs يَشِحُّ (becomes scarce). With المِيَاهُ / المَوَارِدُ (feminine plurals) → تَنْضَبُ / تَشِحُّ.',
    2: 'Condition and projection: إِذَا + PAST verb, then فَسَوْفَ / فَسَـ + present.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · runs out · if … will … (website rules 1–2)', title: 'Predict the future of a resource', ar: 'يَنْضَبُ · يَشِحُّ · إِذَا … فَسَوْفَ',
      cols: [{ label: 'Sentence', w: 7.6, size: 22 }, { label: 'Pattern', w: 4.73 }],
      rows: [
        { core: true, cells: [P('{w|يَنْضَبُ} النِّفْطُ تَدْرِيجِيًّا.', 'Oil is gradually running out.'), 'a stock runs out · al-nifṭ (m.) → ya-'] },
        { core: true, cells: [P('{e|تَشِحُّ} المِيَاهُ فِي فَتَرَاتِ الجَفَافِ.', 'Water becomes scarce in droughts.'), 'becomes scarce · al-miyāh → ta-'] },
        { cells: [P('إِذَا {k|اسْتَمَرَّ} الاسْتِهْلَاكُ المُرْتَفِعُ، {w|فَسَوْفَ تَنْضَبُ} المَوَارِدُ بِسُرْعَةٍ.', 'If high consumption continues, resources will run out quickly.'), 'idhā + PAST, fa-sawfa + present'] },
      ],
      ltr: true,
      foot: 'idhā istamarra = “if it continues” (literally “if it continued”) — a REAL future condition (D3-L05).',
      notes: `GRAMMAR PART 1 — website rules “Resource processes” (يَنْضَبُ describes a stock being depleted; يَشِحُّ describes something becoming scarce) and “Real future condition” (Arabic commonly uses a past-form verb after إذا for a real future condition). Website examples as shown.
Website mistake: يَشِحُّ المِيَاهُ ✗ → تَشِحُّ المِيَاهُ ✓ (المياه is treated as feminine).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · if we don’t … · moving to new sources (website rules 3–4) · Develop / Stretch', title: 'If we don’t … · from … to … · replace … with …', ar: 'إِذَا لَمْ · مِنْ … إِلَى · يَسْتَبْدِلُ … بِـ',
      cards: [
        { chip: 'NEGATIVE CONDITION · STRETCH', color: 'B83227', head: 'إِذَا لَمْ + مَجْزُومٌ', big: 'إِذَا لَمْ نُرَشِّدِ المِيَاهَ، فَسَتَزْدَادُ الأَزْمَةُ.', en: 'If we do not conserve water, the crisis will grow.', clue: 'No final -u after lam.' },
        { chip: 'TRANSITION · DEVELOP', color: '1D5FBF', head: 'نَنْتَقِلُ مِنْ … إِلَى …', big: 'يَجِبُ أَنْ نَنْتَقِلَ مِنَ الوَقُودِ الأُحْفُورِيِّ إِلَى الطَّاقَةِ المُتَجَدِّدَةِ.', en: 'We must move from fossil fuel to renewable energy.', clue: 'min … ilā …' },
        { chip: 'REPLACE · DEVELOP', color: '1E7B4F', head: 'نَسْتَبْدِلُ … بِـ …', big: 'نَسْتَبْدِلُ الأَكْيَاسَ البِلَاسْتِيكِيَّةَ بِأَكْيَاسٍ قُمَاشِيَّةٍ.', en: 'We replace plastic bags with cloth bags.', clue: 'The NEW thing after bi-.' },
      ],
      error: { text: 'Website mistake: the replacement follows bi-, not min.', pairs: [['نَسْتَبْدِلُ الوَقُودَ الأُحْفُورِيَّ بِطَاقَةٍ نَظِيفَةٍ.', 'نَسْتَبْدِلُ الوَقُودَ الأُحْفُورِيَّ مِنْ طَاقَةٍ نَظِيفَةٍ.']] },
      notes: `GRAMMAR PART 2 — website rules “Negative condition” (after لَمْ the present verb is jussive; sound-ending verbs lose the final short vowel) and “Transition from one resource to another” (مِنْ … إِلَى for transition; بِـ for the replacement after يَسْتَبْدِلُ). Website examples as shown.
Vowelling note: before al- the jussive sukūn becomes kasra: نُرَشِّدْ + المِيَاهَ → نُرَشِّدِ المِيَاهَ (the website writes نُرَشِّدْ المِيَاهَ; the deck corrects this; the website listening has the kasra form: تُرَشِّدِ الأُسَرُ).
CAREFUL with يَسْتَبْدِلُ: the website (and much modern usage) puts bi- before the NEW thing (نَسْتَبْدِلُ الوَقُودَ بِطَاقَةٍ نَظِيفَةٍ). In Classical / Qurʾānic Arabic bi- marks the thing GIVEN UP (البقرة ٦١: أَتَسْتَبْدِلُونَ الَّذِي هُوَ أَدْنَى بِالَّذِي هُوَ خَيْرٌ). Teach the modern pattern, but accept either from students who know the Classical one; the safest phrasing is نَنْتَقِلُ مِنْ … إِلَى … .`,
    },
  ],
  quick: [0, 2, 4, 7],
  rest: [1, 3, 6], // quiz 6 (istabdala … bi-) is left out: in Classical / Qurʾānic usage bi- marks the thing GIVEN UP (أَتَسْتَبْدِلُونَ الَّذِي هُوَ أَدْنَى بِالَّذِي هُوَ خَيْرٌ), so the website’s “wrong” option is defensible
  ido: {
    title: 'Watch me predict a resource crisis — and respond',
    steps: [
      { head: 'Problem', ar: 'تَعْتَمِدُ بَعْضُ الدُّوَلِ عَلَى المِيَاهِ الجَوْفِيَّةِ.', think: 'yaʿtamidu ʿalā.' },
      { head: 'If … will', ar: 'إِذَا {k|اسْتَمَرَّ} السَّحْبُ، {w|فَسَوْفَ تَشِحُّ} المِيَاهُ.', think: 'idhā + past; water → ta-.' },
      { head: 'If we don’t', ar: 'إِذَا {e|لَمْ تُرَشِّدِ} الأُسَرُ الاسْتِهْلَاكَ …', think: 'lam + jussive (-i before al-).' },
      { head: 'Transition', ar: 'يَجِبُ أَنْ نَنْتَقِلَ {k|مِنَ} الوَقُودِ {k|إِلَى} الطَّاقَةِ المُتَجَدِّدَةِ.', think: 'min … ilā …' },
    ],
    legend: ['k', 'w', 'e'], legendLabels: { k: 'CONDITION / TRANSITION', w: 'RESULT', e: 'lam + JUSSIVE' },
    model: 'تَعْتَمِدُ بَعْضُ الدُّوَلِ عَلَى المِيَاهِ الجَوْفِيَّةِ بِدَرَجَةٍ كَبِيرَةٍ. وَلٰكِنْ إِذَا {k|اسْتَمَرَّ} سَحْبُ المِيَاهِ بِمُعَدَّلٍ أَسْرَعَ مِنْ تَجَدُّدِهَا، {w|فَسَوْفَ} يَنْخَفِضُ المَخْزُونُ وَ{w|تَشِحُّ} المِيَاهُ. لِذٰلِكَ تَسْتَثْمِرُ بَعْضُ المُدُنِ فِي تَحْلِيَةِ المِيَاهِ. وَإِذَا {e|لَمْ تُرَشِّدِ} الأُسَرُ الاسْتِهْلَاكَ، فَلَنْ تَكْفِيَ الحُلُولُ التِّقْنِيَّةُ وَحْدَهَا.',
    modelEn: 'Some countries depend heavily on groundwater. But if water is extracted faster than it is renewed, the reserve will fall and water will become scarce. So some cities invest in desalination. And if families do not conserve consumption, technical solutions alone will not be enough.',
    notes: 'I DO (3 min) — the website listening script as a model. Point out فَلَنْ تَكْفِيَ (will not be enough): لَنْ + verb in -a = will not (Stretch).',
  },
  patternEn: ['Oil is gradually running out.', 'If high consumption continues, resources will run out quickly.', 'If we do not conserve water, the crisis will grow.'],
  patch: {
    grammar: { ...site.grammar, quiz },
    mistakes: site.mistakes, patterns: site.patterns, final: site.final, writing: site.writing,
    speaking: {
      model: [
        ['A', 'مَاذَا سَيَحْدُثُ إِذَا اسْتَمَرَّ الاسْتِهْلَاكُ المُرْتَفِعُ؟', 'What will happen if high consumption continues?'],
        ['B', 'إِذَا اسْتَمَرَّ الاسْتِهْلَاكُ بِهٰذَا المُعَدَّلِ، فَسَوْفَ تَنْضَبُ بَعْضُ المَوَارِدِ وَتَشِحُّ المِيَاهُ. لِذٰلِكَ يَجِبُ أَنْ نُرَشِّدَ الاسْتِهْلَاكَ وَنَنْتَقِلَ إِلَى مَصَادِرَ مُتَجَدِّدَةٍ.', 'If consumption continues at this rate, some resources will run out and water will become scarce. So we must conserve consumption and move to renewable sources.'],
      ],
    },
  },
  patchNote: 'the jussive before al- is vowelled with kasra (website: نُرَشِّدْ المَاءَ → نُرَشِّدِ المَاءَ), two quiz items with vowel-only options were given meaningful distractors, and English is added to the website speaking model.',
  sorterNotes: 'Then build a prediction: إِذَا اسْتَمَرَّ + a resource problem, فَسَوْفَ + a verb from group 2.',
  hints: ['al-miyāh is feminine: ya- or ta-?', 'After lam: -u or no vowel?', 'The replacement after yastabdilu: min or bi-?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nListen for: المِيَاهِ الجَوْفِيَّةِ · تَحْلِيَةِ · الأُسَرُ.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 6.',
  gloss: [
    ['تَعْتَمِدُ بَعْضُ الدُّوَلِ عَلَى المِيَاهِ الجَوْفِيَّةِ بِدَرَجَةٍ كَبِيرَةٍ.', 'Some countries depend heavily on groundwater.'],
    ['وَلٰكِنْ إِذَا اسْتَمَرَّ سَحْبُ المِيَاهِ بِمُعَدَّلٍ أَسْرَعَ مِنْ تَجَدُّدِهَا،', 'But if water is extracted faster than it is renewed,'],
    ['فَسَوْفَ يَنْخَفِضُ المَخْزُونُ وَتَشِحُّ المِيَاهُ.', 'the reserve will fall and water will become scarce.'],
    ['لِذٰلِكَ تَسْتَثْمِرُ بَعْضُ المُدُنِ فِي تَحْلِيَةِ المِيَاهِ وَإِعَادَةِ اسْتِخْدَامِهَا.', 'So some cities invest in desalinating and reusing water.'],
    ['وَإِذَا لَمْ تُرَشِّدِ الأُسَرُ الاسْتِهْلَاكَ، فَلَنْ تَكْفِيَ الحُلُولُ التِّقْنِيَّةُ وَحْدَهَا.', 'And if families do not conserve consumption, technical solutions alone will not be enough.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا المَوَارِدُ الَّتِي قَدْ تَنْضَبُ؟' },
      { route: 'develop', ar: 'مَاذَا سَيَحْدُثُ إِذَا لَمْ نُرَشِّدِ الاسْتِهْلَاكَ؟' },
      { route: 'stretch', ar: 'كَيْفَ نَنْتَقِلُ إِلَى مُسْتَقْبَلٍ أَكْثَرَ اسْتِدَامَةً؟' },
    ],
    stems: [
      { route: 'core', ar: 'قَدْ يَنْضَبُ ______ ، وَتَشِحُّ ______ .' },
      { route: 'develop', ar: 'إِذَا لَمْ نُرَشِّدِ ______ ، فَسَوْفَ ______ .' },
      { route: 'stretch', ar: 'يَجِبُ أَنْ نَنْتَقِلَ مِنْ ______ إِلَى ______ ، وَأَنْ نَسْتَبْدِلَ ______ بِـ ______ .' },
    ],
    modelEn: ['What will happen if high consumption continues?', 'If consumption continues at this rate, some resources will run out and water will become scarce. So we must conserve consumption and move to renewable sources.'],
    notes: 'Website prompts and model. “Consequence chain” game: student 1 says إِذَا اسْتَمَرَّ …، student 2 finishes with فَسَوْفَ …، student 3 gives a solution with يَجِبُ أَنْ …',
  },
  write: {
    core: { amount: '5 sentences', how: 'One resource: why it matters, that it is running out (yanḍabu / yashiḥḥu), one condition, one solution.' },
    develop: { amount: '100–120 words', how: 'A real condition (idhā istamarra …) and a transition (min … ilā …).' },
    stretch: { amount: '130–140 words', how: 'Website task: one real + one negative condition, a transition, and a judgement on responsibility.' },
  },
  frames: {
    core: [
      { en: 'Many countries depend on …', ar: 'تَعْتَمِدُ دُوَلٌ كَثِيرَةٌ عَلَى ______ .' },
      { en: '… is gradually running out.', ar: 'يَنْضَبُ / تَنْضَبُ ______ تَدْرِيجِيًّا.' },
      { en: 'Water becomes scarce in …', ar: 'تَشِحُّ المِيَاهُ فِي ______ .' },
      { en: 'If waste continues, … will …', ar: 'إِذَا اسْتَمَرَّ الهَدْرُ، فَسَوْفَ ______ .' },
    ],
    develop: [
      { en: 'If we do not conserve …, …', ar: 'إِذَا لَمْ نُرَشِّدِ ______ ، فَسَـ ______ .' },
      { en: 'We must move from … to …', ar: 'يَجِبُ أَنْ نَنْتَقِلَ مِنْ ______ إِلَى ______ .' },
      { en: 'We replace … with …', ar: 'نَسْتَبْدِلُ ______ بِـ ______ .' },
      { en: 'Success depends on … and … together.', ar: 'يَعْتَمِدُ النَّجَاحُ عَلَى ______ وَ ______ مَعًا.' },
    ],
    bank: ['المَوَارِدُ', 'شُحُّ المِيَاهِ', 'الوَقُودُ الأُحْفُورِيُّ', 'المِيَاهُ الجَوْفِيَّةُ', 'يَنْضَبُ', 'تَشِحُّ', 'نُرَشِّدُ', 'إِذَا اسْتَمَرَّ', 'إِذَا لَمْ', 'فَسَوْفَ', 'نَنْتَقِلُ مِنْ … إِلَى', 'نَسْتَبْدِلُ … بِـ'],
  },
  stretch: [
    ['مَعَ نُمُوِّ السُّكَّانِ وَالمُدُنِ', 'as population and cities grow'],
    ['دُونَ أَنْ نَحْرِمَ الأَجْيَالَ القَادِمَةَ مِنْهَا', 'without depriving future generations of them'],
    ['يَتَطَلَّبُ ذٰلِكَ …', 'this requires …'],
    ['فَلَنْ تَكْفِيَ الحُلُولُ التِّقْنِيَّةُ وَحْدَهَا', 'technical solutions alone will not be enough'],
    ['أَنْمَاطُ اسْتِهْلَاكٍ أَكْثَرُ اسْتِدَامَةً', 'more sustainable consumption patterns'],
  ],
  modelEn: 'Many countries face the challenge of water scarcity and limited resources. If high consumption continues, the reserve will fall and costs will rise. And if we do not conserve water, it will become scarce in dry areas. So we must reuse water and replace some fossil fuel with renewable energy. We should also move to more sustainable consumption patterns. In my opinion, the success of these plans depends on technology and individual behaviour together.',
  find: ['a real condition', 'a negative condition (lam)', 'a transition or replacement', 'a judgement on responsibility'],
  modelNotes: 'Website writing model (jussive vowelled نُرَشِّدِ المِيَاهَ). Evidence: إِذَا اسْتَمَرَّ … فَسَوْفَ · إِذَا لَمْ نُرَشِّدِ … فَسَتَشِحُّ · نَسْتَبْدِلَ … بِطَاقَةٍ · نَنْتَقِلَ إِلَى · يَعْتَمِدُ عَلَى التِّقْنِيَّةِ وَسُلُوكِ الأَفْرَادِ مَعًا.',
  selfCheck: [
    { route: 'core', text: 'yanḍabu / yashiḥḥu agree with the resource.' },
    { route: 'core', text: 'I named the resource and why it matters.' },
    { route: 'develop', text: 'idhā + past, then fa-sawfa + present.' },
    { route: 'develop', text: 'min … ilā / yastabdilu … bi- are correct.' },
    { route: 'stretch', text: 'idhā lam + jussive; a judgement on responsibility.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['يَزْدَادُ الطَّلَبُ', 'demand increases'], ['نُمُوِّ السُّكَّانِ', 'population growth'], ['الاعْتِمَادُ عَلَى', 'reliance on'], ['الانْبِعَاثَاتُ', 'emissions'], ['المَخْزُونِ', 'the reserve'],
    ['تَعْنِي', 'means'], ['دُونَ أَنْ', 'without'], ['نَحْرِمَ', 'we deprive'], ['الأَجْيَالَ القَادِمَةَ', 'future generations'], ['يَتَطَلَّبُ', 'requires'],
  ],
  prep: {
    words: [['تَقْرِيرٌ', 'a report', 'pl. تَقَارِيرُ'], ['بَيَانَاتٌ', 'data', 'sing. بَيَانٌ'], ['إِحْصَاءَاتٌ', 'statistics', 'sing. إِحْصَاءٌ'], ['يُشَارُ إِلَى أَنَّ', 'it is indicated that', '—'], ['النَّبْرَةُ', 'the tone', '—']],
    questionEn: 'Where do you find reliable information about the environment? Name one source.',
    questionAr: 'أَجِدُ مَعْلُومَاتٍ مَوْثُوقَةً فِي …',
    homework: {
      core: 'Learn 8 resource words; write 5 sentences with yanḍabu / tashiḥḥu and idhā istamarra.',
      develop: 'One resource challenge in 100–120 words with a condition and a transition.',
      stretch: 'Website writing task: a resource challenge and sustainable response (130–140 words).',
    },
    wordsSource: 'The five words come from the website D4-L08 vocabulary (reading environment and technology texts).',
  },
  remember: 'Remember: yanḍabu / tashiḥḥu agree — idhā + past, fa-sawfa — idhā lam + jussive — min … ilā, yastabdilu … bi-.',
});

module.exports = { meta, slides };
