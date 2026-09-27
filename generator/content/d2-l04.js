'use strict';
/* D2-L04 · Fashion and Identity — Opinions on Style and Dress — website: Pathways › Development › D2 › D2-L04 (opinion + reason, contrast, concession عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ, يُعَبِّرُ عَنْ, respectful judgement). */
const D = require('./d-common');
const X = require('./d2-lex');
const { q } = D;

const meta = D.meta('D2')({
  n: 4, fileTitle: 'Fashion_and_Identity', chip: 'Fashion and Identity',
  title: 'Fashion and Identity — Opinions on Style and Dress', arabic: 'المَوْضَةُ وَالهُوِيَّةُ — آرَاءٌ حَوْلَ الأُسْلُوبِ وَاللِّبَاسِ',
  focus: 'Give a balanced opinion about style and fashion: opinion + reason (فِي رَأْيِي … لِأَنَّ), contrast (وَلٰكِنَّ), concession (عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ) — and judge clothes, never people.',
  icon: 'FaPalette', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });

const slides = D.devLesson('D2-L04', {
  support: `• Core: describe your own style with two style adjectives + فِي رَأْيِي … لِأَنَّ … (one opinion, one reason). Develop: add a contrast (أُفَضِّلُ … وَلٰكِنَّنِي …). Stretch: a concession (عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …) and a balanced conclusion about fashion and identity.
• Website value: “Do not treat personal style as proof of personality” — every opinion must be respectful (quiz Q5). Model this explicitly: we judge CLOTHES (comfortable, practical, expensive), never PEOPLE.
• Modesty and identity are personal: invite, never require, students to share. Invented examples are fine.
• Urdu bridge: فیشن (→ مَوْضَةٌ), ذوق، ثقافت، شخصیت، احترام.`,
  teach: 'Opinion + reason, contrast and concession.',
  wedo: 'Balance the opinion, sort, fix and listen.',
  next: { nextCode: 'D2-L05', nextTitle: 'Comparing People and Clothes — More, Less and Better', nextAr: 'المُقَارَنَةُ' },
  flexGroups: [2],
  doNow: {
    questions: [
      q('What does مُحْتَشِمٌ / مُحْتَشِمَةٌ mean?', ['modest', 'modern', 'formal'], 'Prepared at home.'),
      q('What does تَقْلِيدِيٌّ / تَقْلِيدِيَّةٌ mean?', ['traditional', 'elegant', 'simple'], 'Prepared at home.'),
      q('Choose “this jacket”.', ['هٰذِهِ السُّتْرَةُ', 'هٰذَا السُّتْرَةُ', 'هٰذِهِ السُّتْرَةَ'], 'D2-L03: sutra is feminine.'),
      q('Ask the price of a bag.', ['كَمْ ثَمَنُهَا؟', 'كَمْ ثَمَنُهُ؟', 'مَا مَقَاسُهُ؟'], 'D2-L03: bag (f.) → thamanuhā.'),
      q('Complete: هِيَ مُتَعَاوِنَةٌ ___ تُسَاعِدُ الآخَرِينَ.', ['لِأَنَّهَا', 'لِأَنَّهُ', 'وَلٰكِنَّهُ'], 'D2-L01: because she.'),
    ],
    keyIdea: { text: 'A balanced opinion has three parts: what I think, why, and the other side.', ar: '{k|فِي رَأْيِي} … {w|لِأَنَّ} … {e|وَلٰكِنَّ} …' },
    retrieves: 'Questions 1–2 test two of the five style words prepared at home. Questions 3–5 retrieve D2-L03 (هٰذِهِ, ثَمَنُهَا) and D2-L01 (لِأَنَّهَا).',
  },
  routes: {
    core: ['I can describe my style with two adjectives.', 'I can give an opinion with a reason.'],
    develop: ['I can add a contrast with “but”.', 'I can say what clothes express.'],
    stretch: ['I can use a concession (although …).', 'I can write a balanced conclusion about fashion.'],
  },
  bridge: [
    { ar: 'المَوْضَةُ', urdu: 'فیشن', tr: 'fashion', en: 'fashion (both borrowed)' },
    { ar: 'الذَّوْقُ', urdu: 'ذوق', tr: 'zauq', en: 'taste' },
    { ar: 'الثَّقَافَةُ', urdu: 'ثقافت', tr: 'saqāfat', en: 'culture' },
    { ar: 'الشَّخْصِيَّةُ', urdu: 'شخصیت', tr: 'shakhsiyat', en: 'personality' },
    { ar: 'الاِحْتِرَامُ', urdu: 'احترام', tr: 'ihtirām', en: 'respect' },
  ],
  bridgeNotes: 'URDU BRIDGE: ذوق (taste) → الذَّوْقُ; ثقافت → الثَّقَافَةُ; شخصیت → الشَّخْصِيَّةُ; احترام → الاِحْتِرَامُ — all Arabic words students already use in Urdu. مَوْضَةٌ (from Italian moda) = fashion; أُسْلُوبٌ = style (Urdu اسلوب: style of writing).',
  core: ['أَنِيقٌ / أَنِيقَةٌ', 'عَصْرِيٌّ / عَصْرِيَّةٌ', 'تَقْلِيدِيٌّ / تَقْلِيدِيَّةٌ', 'رَسْمِيٌّ / رَسْمِيَّةٌ', 'مُحْتَشِمٌ / مُحْتَشِمَةٌ', 'بَسِيطٌ / بَسِيطَةٌ', 'فِي رَأْيِي', 'لِأَنَّ', 'وَلٰكِنَّ', 'عَلَى الرَّغْمِ مِنْ أَنَّ'],
  forms: X.formsFor('D2-L04'),
  vocabNotes: { 0: 'Style adjectives in m. · f. · pl. (reviewed from D2-L03). Things in the plural take the feminine singular: مَلَابِسُ مُلَوَّنَةٌ.', 1: 'Opinion and balance: sort them live — OPINION (فِي رَأْيِي) · REASON (لِأَنَّ، لِذٰلِكَ) · CONTRAST (وَلٰكِنَّ، بَيْنَمَا، مِنْ جِهَةٍ … مِنْ جِهَةٍ أُخْرَى) · CONCESSION (عَلَى الرَّغْمِ مِنْ أَنَّ) · SOFTENERS (أَحْيَانًا، عَادَةً).', 2: 'Clothing reference (FLEX) — the D2-L03 clothes words.' },
  grammar: [
    {
      type: 'formula', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · build a balanced opinion (website rules)', title: 'Opinion → reason → but …', ar: 'رَأْيٌ + سَبَبٌ + مُقَابَلَةٌ',
      cols: [
        { label: 'opinion', ar: 'الرَّأْيُ', color: '1D5FBF', pale: 'EEF3FA' },
        { label: 'reason', ar: 'السَّبَبُ', color: '1E7B4F', pale: 'E8F4EC' },
        { label: 'contrast', ar: 'المُقَابَلَةُ', color: '6B4C9A', pale: 'F1ECF7' },
      ],
      rows: [
        { en: 'In my opinion, simple clothes are better because they are practical, but I like elegant clothes on special occasions.', cells: ['{k|فِي رَأْيِي}، المَلَابِسُ البَسِيطَةُ أَفْضَلُ', '{k|لِأَنَّهَا} عَمَلِيَّةٌ،', '{k|وَلٰكِنَّنِي} أُحِبُّ المَلَابِسَ الأَنِيقَةَ فِي المُنَاسَبَاتِ.'] },
        { en: 'I prefer calm colours because they suit school, but I wear bright colours at weddings.', cells: ['أُفَضِّلُ الأَلْوَانَ الهَادِئَةَ', '{k|لِأَنَّهَا} تُنَاسِبُ المَدْرَسَةَ،', '{k|وَلٰكِنَّنِي} أَلْبَسُ أَلْوَانًا زَاهِيَةً فِي الأَعْرَاسِ.'] },
      ],
      foot: 'Clothes and colours are plural THINGS → “because they” = li-annahā (feminine singular).',
      notes: `GRAMMAR PART 1 — website rules “Opinion plus reason” (a developed opinion explains why) and “Contrast” (contrast adds balance) with the website examples.
Note for Develop/Stretch: non-human plurals take feminine singular agreement — المَلَابِسُ … لِأَنَّهَا عَمَلِيَّةٌ (not لِأَنَّهُمْ).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · concession, expression and respect (website rules) · Develop / Stretch', title: 'Although … · it expresses … · respectfully', ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ · يُعَبِّرُ عَنْ',
      cards: [
        { chip: 'CONCESSION · STRETCH', color: 'B83227', head: 'عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ', big: 'عَلَى الرَّغْمِ مِنْ أَنَّ المَوْضَةَ مُهِمَّةٌ، فَإِنَّ الرَّاحَةَ أَهَمُّ.', en: 'Although fashion is important, comfort is more important.', clue: 'The other side first, then yours.' },
        { chip: 'EXPRESSION · DEVELOP', color: '6B4C9A', head: 'يُعَبِّرُ عَنْ', big: 'أُسْلُوبُهَا يُعَبِّرُ عَنْ ذَوْقِهَا.', en: 'Her style expresses her taste.', clue: 'Her style / her taste: both -hā.' },
        { chip: 'RESPECT · CORE', color: '1E7B4F', head: 'عَنِ المَلَابِسِ لَا عَنِ النَّاسِ', big: 'أُسْلُوبُهُ مُخْتَلِفٌ، وَيُعَبِّرُ عَنْ ذَوْقِهِ.', en: 'His style is different, and it expresses his taste.', clue: 'Judge the clothes, not the person.' },
      ],
      error: { text: 'Website value: do not treat style as proof of personality.', pairs: [['أُسْلُوبُهَا مُخْتَلِفٌ وَيُعَبِّرُ عَنْ ذَوْقِهَا.', 'هِيَ سَيِّئَةٌ لِأَنَّ فُسْتَانَهَا أَحْمَرُ.']] },
      notes: `GRAMMAR PART 2 — website rules “Concession” (acknowledge an opposing point before stating a judgement) and “Identity and expression” (explain what style communicates without judging a person unfairly). Website common error: “Do not treat personal style as proof of personality.”
Stretch grammar: after عَلَى الرَّغْمِ مِنْ أَنَّ the main clause often starts with فَإِنَّ + noun in -a (فَإِنَّ الرَّاحَةَ أَهَمُّ).`,
    },
  ],
  quick: [3, 5, 6, 7],
  rest: [], // quiz 1–3 and 5 are used in the We Do “Upgrade the opinion” slide
  ido: {
    title: 'Watch me give a balanced opinion',
    steps: [
      { head: 'My style', ar: 'أُسْلُوبِي بَسِيطٌ وَمُحْتَشِمٌ.', think: 'Two style adjectives.' },
      { head: 'Opinion + reason', ar: '{k|فِي رَأْيِي}، الرَّاحَةُ مُهِمَّةٌ {w|لِأَنَّنِي} أَتَحَرَّكُ كَثِيرًا.', think: 'Why? Because I …' },
      { head: 'Contrast', ar: '{e|وَلٰكِنَّنِي} أَلْبَسُ مَلَابِسَ أَنِيقَةً فِي المُنَاسَبَاتِ.', think: 'The other side.' },
      { head: 'Concession', ar: '{e|عَلَى الرَّغْمِ مِنْ أَنَّ} المَوْضَةَ مُمْتِعَةٌ، {e|فَإِنَّ} الرَّاحَةَ أَهَمُّ.', think: 'Balanced conclusion.' },
    ],
    legend: ['k', 'w', 'e'], legendLabels: { k: 'OPINION', w: 'REASON', e: 'CONTRAST / CONCESSION' },
    model: 'أُسْلُوبِي بَسِيطٌ وَمُحْتَشِمٌ. {k|فِي رَأْيِي}، الرَّاحَةُ مُهِمَّةٌ {w|لِأَنَّنِي} أَتَحَرَّكُ كَثِيرًا فِي المَدْرَسَةِ، {e|وَلٰكِنَّنِي} أَلْبَسُ مَلَابِسَ أَنِيقَةً فِي المُنَاسَبَاتِ. {e|عَلَى الرَّغْمِ مِنْ أَنَّ} المَوْضَةَ مُمْتِعَةٌ، {e|فَإِنَّ} الرَّاحَةَ أَهَمُّ.',
    modelEn: 'My style is simple and modest. In my opinion, comfort is important because I move around a lot at school, but I wear elegant clothes on special occasions. Although fashion is fun, comfort is more important.',
    notes: 'I DO (3 min) — the website listening (Reem) and patterns turned into a first-person opinion, with a think-aloud. Students copy it and label the four parts: STYLE · OPINION + REASON · CONTRAST · CONCESSION.',
  },
  wedoSlides: [
    {
      type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · which opinion is balanced and respectful?', title: 'Upgrade the opinion', ar: 'رَأْيٌ مُتَوَازِنٌ',
      seed: 4,
      questions: [
        q('Which is a developed opinion?', ['فِي رَأْيِي، المَلَابِسُ البَسِيطَةُ أَفْضَلُ لِأَنَّهَا عَمَلِيَّةٌ.', 'المَلَابِسُ البَسِيطَةُ.', 'لِأَنَّهَا عَمَلِيَّةٌ.'], 'Opinion + reason.'),
        q('Which adds a contrast?', ['أُحِبُّ المَوْضَةَ، وَلٰكِنَّنِي لَا أَتْبَعُ كُلَّ اتِّجَاهٍ.', 'أُحِبُّ المَوْضَةَ، لِأَنَّنِي لَا أَتْبَعُ كُلَّ اتِّجَاهٍ.', 'أُحِبُّ المَوْضَةَ ثُمَّ.'], '“but” = wa-lākinna.'),
        q('Which is a complete concession?', ['عَلَى الرَّغْمِ مِنْ أَنَّهُ غَالٍ، فَإِنَّهُ جَيِّدُ الجَوْدَةِ.', 'لِأَنَّهُ غَالٍ فَإِنَّهُ.', 'عَلَى الرَّغْمِ غَالٍ.'], 'Although … , (fa-inna) …'),
        q('Which judgement is respectful?', ['أُسْلُوبُهَا مُخْتَلِفٌ وَيُعَبِّرُ عَنْ ذَوْقِهَا.', 'هِيَ سَيِّئَةٌ لِأَنَّ فُسْتَانَهَا أَحْمَرُ.', 'كُلُّ مَنْ يَلْبَسُ الأَسْوَدَ حَزِينٌ.'], 'Judge the style, not the person.'),
      ],
      side: { kind: 'core', label: 'CORE', text: 'A strong opinion:\nwhat I think + because …\nStretch: + but … / although …' },
      answerSlide: { min: 0, eyebrow: 'We do · upgrade answers', title: 'Upgrade the opinion: answers', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO — built from the website grammar quiz (Q1, Q2, Q3, Q5) and the website value about respectful judgement. Discuss Q4 carefully: the wrong answers stereotype people.',
      answerNotes: 'After each answer, a volunteer changes one word to make their own opinion.',
    },
  ],
  patch: {
    patterns: [
      { ar: 'فِي رَأْيِي، المَلَابِسُ البَسِيطَةُ أَفْضَلُ لِأَنَّهَا عَمَلِيَّةٌ.', en: 'In my opinion, simple clothes are better because they are practical.', tip: 'Opinion + reason.' },
      { ar: 'أُفَضِّلُ الأَلْوَانَ الهَادِئَةَ، وَلٰكِنَّنِي أَلْبَسُ أَلْوَانًا زَاهِيَةً فِي المُنَاسَبَاتِ.', en: 'I prefer calm colours, but I wear bright colours on special occasions.', tip: 'Contrast.' },
      { ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ المَوْضَةَ مُهِمَّةٌ، فَإِنَّ الرَّاحَةَ أَهَمُّ.', en: 'Although fashion is important, comfort is more important.', tip: 'Concession.' },
      { ar: 'أُسْلُوبُهَا يُعَبِّرُ عَنْ شَخْصِيَّتِهَا.', en: 'Her style expresses her personality.', tip: 'Identity and expression.' },
    ],
    mistakes: [
      { wrong: 'هٰذَا الأُسْلُوبُ.', right: 'فِي رَأْيِي، هٰذَا الأُسْلُوبُ مُنَاسِبٌ لِأَنَّهُ مُرِيحٌ.', why: 'Give an opinion AND a reason.' },
      { wrong: 'أُحِبُّ المَوْضَةَ، لِأَنَّنِي لَا أَتْبَعُ كُلَّ اتِّجَاهٍ.', right: 'أُحِبُّ المَوْضَةَ، وَلٰكِنَّنِي لَا أَتْبَعُ كُلَّ اتِّجَاهٍ.', why: 'A contrast needs “but”, not “because”.' },
      { wrong: 'لِأَنَّهُ غَالٍ فَإِنَّهُ.', right: 'عَلَى الرَّغْمِ مِنْ أَنَّهُ غَالٍ، فَإِنَّهُ جَيِّدُ الجَوْدَةِ.', why: 'Complete the concession pattern.' },
    ],
    sorter: {
      title: 'Balanced and respectful?', instructions: 'Is each sentence a complete, balanced and respectful opinion?',
      categories: ['Complete and respectful', 'Incomplete or unfair'],
      items: [
        { label: 'فِي رَأْيِي، هٰذَا الأُسْلُوبُ مُنَاسِبٌ لِأَنَّهُ مُرِيحٌ.', answer: 0 }, { label: 'أُحِبُّ المَوْضَةَ، وَلٰكِنَّنِي لَا أَتْبَعُ كُلَّ اتِّجَاهٍ.', answer: 0 },
        { label: 'عَلَى الرَّغْمِ مِنْ أَنَّهُ غَالٍ، فَإِنَّهُ جَيِّدُ الجَوْدَةِ.', answer: 0 }, { label: 'أُسْلُوبُهَا يُعَبِّرُ عَنْ ذَوْقِهَا.', answer: 0 },
        { label: 'هٰذَا الأُسْلُوبُ.', answer: 1 }, { label: 'لِأَنَّهُ غَالٍ فَإِنَّهُ.', answer: 1 },
        { label: 'هِيَ سَيِّئَةٌ لِأَنَّ فُسْتَانَهَا أَحْمَرُ.', answer: 1 }, { label: 'كُلُّ مَنْ يَلْبَسُ الأَسْوَدَ حَزِينٌ.', answer: 1 },
      ],
    },
    listening: {
      questions: [
        L('Whose style is described?', ['Reem’s', 'her sister’s', 'her teacher’s'], 'تَتَحَدَّثُ رِيمُ عَنْ أُسْلُوبِهَا.'),
        L('What clothes does she prefer?', ['simple and comfortable', 'elegant and formal', 'colourful and modern'], 'المَلَابِسَ البَسِيطَةَ وَالمُرِيحَةَ.'),
        L('Why?', ['she goes to school and moves around a lot', 'they are cheap', 'her mother chooses them'], 'لِأَنَّهَا تَذْهَبُ إِلَى المَدْرَسَةِ وَتَتَحَرَّكُ كَثِيرًا.'),
        L('What does she wear on special occasions?', ['an elegant dress and a colourful headscarf', 'her school uniform', 'jeans and a T-shirt'], 'فُسْتَانًا أَنِيقًا وَحِجَابًا مُلَوَّنًا.'),
        L('In her opinion, personal style expresses …', ['taste', 'wealth', 'age'], 'يُعَبِّرُ عَنِ الذَّوْقِ.'),
        L('What does style NOT tell us?', ['everything about personality', 'anything at all', 'a person’s taste'], 'لَا يُخْبِرُنَا بِكُلِّ شَيْءٍ عَنِ الشَّخْصِيَّةِ.'),
      ],
    },
    reading: {
      questions: [
        L('What kind of text is this?', ['a short article', 'an advert', 'a letter'], 'مَقَالٌ قَصِيرٌ.'),
        L('What do some young people think?', ['following fashion is necessary', 'fashion is boring', 'clothes should be cheap'], 'اتِّبَاعَ المَوْضَةِ ضَرُورِيٌّ.'),
        L('What do others prefer?', ['choosing what is comfortable and suitable for them', 'buying designer clothes', 'wearing a uniform'], 'مَا هُوَ مُرِيحٌ وَمُنَاسِبٌ لَهُمْ.'),
        L('According to the text, clothes can …', ['express part of identity', 'show someone’s whole personality', 'make people rich'], 'قَدْ تُعَبِّرُ عَنْ جُزْءٍ مِنَ الهُوِيَّةِ.'),
        L('Are clothes enough to judge someone’s character?', ['no', 'yes', 'only formal clothes'], 'لَا تَكْفِي لِلْحُكْمِ عَلَى شَخْصِيَّةِ أَحَدٍ.'),
        L('Good style, in the writer’s opinion, combines …', ['comfort, respect and personal taste', 'fashion and price', 'colour and size'], 'يَجْمَعُ بَيْنَ الرَّاحَةِ وَالاِحْتِرَامِ وَالذَّوْقِ الشَّخْصِيِّ.'),
      ],
    },
  },
  sorterCats: ['Complete and respectful', 'Incomplete or unfair'],
  hints: ['Is there an opinion AND a reason?', 'Contrast: because or but?', 'Although … then what?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nListen for: البَسِيطَةَ · المُنَاسَبَاتِ · الذَّوْقِ.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 6. (Questions are teacher-written: the website questions for this script are generic.)',
  gloss: [
    ['تَتَحَدَّثُ رِيمُ عَنْ أُسْلُوبِهَا.', 'Reem is talking about her style.'],
    ['تَقُولُ إِنَّهَا تُفَضِّلُ المَلَابِسَ البَسِيطَةَ وَالمُرِيحَةَ،', 'She says that she prefers simple, comfortable clothes,'],
    ['لِأَنَّهَا تَذْهَبُ إِلَى المَدْرَسَةِ وَتَتَحَرَّكُ كَثِيرًا.', 'because she goes to school and moves around a lot.'],
    ['وَلٰكِنَّهَا فِي المُنَاسَبَاتِ تَرْتَدِي فُسْتَانًا أَنِيقًا وَحِجَابًا مُلَوَّنًا.', 'But on special occasions she wears an elegant dress and a colourful headscarf.'],
    ['فِي رَأْيِهَا، الأُسْلُوبُ الشَّخْصِيُّ يُعَبِّرُ عَنِ الذَّوْقِ، وَلٰكِنَّهُ لَا يُخْبِرُنَا بِكُلِّ شَيْءٍ عَنِ الشَّخْصِيَّةِ.', 'In her opinion, personal style expresses taste, but it does not tell us everything about personality.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا أُسْلُوبُكَ الشَّخْصِيُّ؟' },
      { route: 'develop', ar: 'هَلِ المَوْضَةُ مُهِمَّةٌ لِلشَّبَابِ؟' },
      { route: 'develop', ar: 'مَا أَهَمُّ: الرَّاحَةُ أَمِ الأَنَاقَةُ؟' },
      { route: 'stretch', ar: 'كَيْفَ تُعَبِّرُ المَلَابِسُ عَنِ الهُوِيَّةِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أُسْلُوبِي ______ وَ ______ .' },
      { route: 'develop', ar: 'فِي رَأْيِي ، المَوْضَةُ ______ لِأَنَّ ______ .' },
      { route: 'develop', ar: '______ أَهَمُّ مِنْ ______ ، وَلٰكِنَّ ______ .' },
      { route: 'stretch', ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّ ______ .' },
    ],
    modelEn: ['Do you follow fashion?', 'I follow some ideas, but I choose what suits me.'],
    notes: 'Website prompts. Website model continues: A: مَا الأَهَمُّ فِي رَأْيِكَ؟ (What is most important in your opinion?) B: الرَّاحَةُ وَالاِحْتِرَامُ أَهَمُّ مِنَ اتِّبَاعِ كُلِّ اتِّجَاهٍ. (Comfort and respect matter more than following every trend.)',
  },
  write: {
    core: { amount: '5 sentences', how: 'Your style: two style adjectives, what you wear to school and on special occasions, one opinion + reason.' },
    develop: { amount: '8 sentences', how: 'Your style and what influences it, one advantage of fashion and a contrast (but …).' },
    stretch: { amount: '100–120 words', how: 'Website task: your style, influences, one advantage and one disadvantage of fashion, a concession and a balanced conclusion.' },
  },
  frames: {
    core: [
      { en: 'My style is … and …', ar: 'أُسْلُوبِي ______ وَ ______ .' },
      { en: 'At school I wear …', ar: 'فِي المَدْرَسَةِ أَلْبَسُ ______ .' },
      { en: 'On special occasions I wear …', ar: 'فِي المُنَاسَبَاتِ أَلْبَسُ ______ .' },
      { en: 'In my opinion, … because …', ar: 'فِي رَأْيِي، ______ لِأَنَّ ______ .' },
      { en: 'I prefer … clothes.', ar: 'أُفَضِّلُ المَلَابِسَ ______ .' },
    ],
    develop: [
      { en: 'I prefer …, but I …', ar: 'أُفَضِّلُ ______ ، وَلٰكِنَّنِي ______ .' },
      { en: 'My style expresses …', ar: 'أُسْلُوبِي يُعَبِّرُ عَنْ ______ .' },
      { en: 'One advantage of fashion is that …', ar: 'مِنْ مَزَايَا المَوْضَةِ أَنَّهَا ______ .' },
      { en: 'One disadvantage is that …', ar: 'وَمِنْ عُيُوبِهَا أَنَّهَا ______ .' },
      { en: 'Although …, …', ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّ ______ .' },
    ],
    bank: ['أَنِيقٌ', 'عَصْرِيٌّ', 'تَقْلِيدِيٌّ', 'بَسِيطٌ', 'مُحْتَشِمٌ', 'مُرِيحٌ', 'فِي رَأْيِي', 'لِأَنَّ', 'وَلٰكِنَّنِي', 'عَلَى الرَّغْمِ مِنْ أَنَّ', 'يُعَبِّرُ عَنْ', 'الذَّوْقُ'],
  },
  stretch: [
    ['المَلَابِسُ جُزْءٌ مِنَ الهُوِيَّةِ', 'clothes are part of identity'],
    ['تُعَبِّرُ عَنْ ذَوْقِنَا وَثَقَافَتِنَا', 'they express our taste and culture'],
    ['مِنْ مَزَايَا المَوْضَةِ … وَمِنْ عُيُوبِهَا …', 'one advantage of fashion … one disadvantage …'],
    ['سَرِيعَةُ التَّغَيُّرِ', 'quick to change'],
    ['الأَهَمُّ هُوَ اخْتِيَارُ مَا يُنَاسِبُنَا', 'the most important thing is choosing what suits us'],
  ],
  modelEn: 'In my opinion, clothes are part of identity, because they can express our taste and culture. I prefer a simple, modest style, and I usually choose comfortable, practical clothes. But on special occasions I like to wear more elegant clothes. One advantage of fashion is that it offers new ideas, but one of its disadvantages is that it can be expensive and quick to change. Despite that, I think the most important thing is choosing what suits us.',
  find: ['an opinion with a reason', 'a contrast', 'an advantage and a disadvantage', 'a concession'],
  modelNotes: 'Evidence: فِي رَأْيِي … لِأَنَّهَا · وَلٰكِنَّنِي فِي المُنَاسَبَاتِ · مِنْ مَزَايَا المَوْضَةِ / مِنْ عُيُوبِهَا · عَلَى الرَّغْمِ مِنْ ذٰلِكَ (despite that — a concession with a noun).',
  selfCheck: [
    { route: 'core', text: 'I described my style with two adjectives.' },
    { route: 'core', text: 'My opinion has a reason (because).' },
    { route: 'develop', text: 'I added a contrast with “but”.' },
    { route: 'develop', text: 'I judged clothes, not people.' },
    { route: 'stretch', text: 'I used “although …” and wrote a balanced conclusion.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['مَقَالٌ قَصِيرٌ', 'a short article'], ['يَظُنُّ', 'think(s)'], ['اتِّبَاعَ المَوْضَةِ', 'following fashion'], ['ضَرُورِيٌّ', 'necessary'], ['آخَرُونَ', 'others'],
    ['يَخْتَارُوا', 'they choose'], ['جُزْءٍ مِنَ الهُوِيَّةِ', 'part of identity'], ['لَا تَكْفِي', 'are not enough'], ['لِلْحُكْمِ عَلَى', 'to judge'], ['يَجْمَعُ بَيْنَ', 'combines'],
  ],
  prep: {
    words: [['أَكْثَرُ … مِنْ', 'more … than', ''], ['أَقَلُّ … مِنْ', 'less … than', ''], ['أَفْضَلُ مِنْ', 'better than', 'the best: الأَفْضَلُ'], ['أَرْخَصُ مِنْ', 'cheaper than', 'cheap: رَخِيصٌ'], ['أَغْلَى مِنْ', 'more expensive than', 'expensive: غَالٍ']],
    questionEn: 'Compare two people you know or two items of clothing. Who / which is taller, cheaper, more elegant?',
    questionAr: 'مَنْ أَطْوَلُ فِي أُسْرَتِكَ؟',
    homework: {
      core: 'Website D2-L04: the vocabulary tab (style adjectives, opinion and balance).',
      develop: 'Write 8 sentences about your style with an opinion, a reason and a contrast.',
      stretch: 'Website writing task: 100–120 words on fashion and identity.',
    },
    wordsSource: 'The five words come from the website D2-L05 vocabulary (comparative language).',
  },
  remember: 'Remember: opinion + because + but — and judge clothes, not people.',
});

module.exports = { meta, slides };
