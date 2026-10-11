'use strict';
/* Exam-practice data · TC-L10 · Measurements, Shapes and Materials (ṭūluhu mitrān; maṣnūʿ min; agreement; passive participles). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'C', n: 10, short: 'Measurements, Shapes and Materials', arShort: 'المَقَايِيسُ وَالأَشْكَالُ', fileTitle: 'Measurements_Shapes_Materials', title: 'Measurements, Shapes and Materials', ar: 'المَقَايِيسُ وَالأَشْكَالُ وَالمَوَادُّ', icon: 'FaRuler', grammar: 'ṭūluhu / ʿarḍuhā + measurement (mitrān, thalāthatu amtār); maṣnūʿ min / mabnī min; shape and colour agreement; passive participles (maṣnūʿ, mulawwan, mustaʿmal)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: describe objects by size, shape, colour and material (طُولُهُ مِتْرَانِ · مَصْنُوعٌ مِنَ الخَشَبِ · شَكْلُهَا دَائِرِيٌّ), describe lost property, design a product and discuss materials and the environment.',
  words: [
    w(1, 'طُولٌ · عَرْضٌ · ارْتِفَاعٌ', 'length · width · height', [['its length (m.)', 'طُولُهُ'], ['its width (f.)', 'عَرْضُهَا'], ['weight', 'وَزْنٌ']]),
    w(2, 'مِتْرٌ', 'a metre', [['dual', 'مِتْرَانِ'], ['pl.', 'أَمْتَارٌ'], ['centimetre', 'سَنْتِيمِتْرٌ']]),
    w(3, 'كِيلُوغْرَامٌ · غْرَامٌ', 'a kilogram · a gram', [['dual', 'كِيلُوغْرَامَانِ'], ['5 kg', 'خَمْسَةُ كِيلُوغْرَامَاتٍ']]),
    w(4, 'مُرَبَّعٌ', 'square', [['f.', 'مُرَبَّعَةٌ'], ['a square', 'مُرَبَّعٌ · مُرَبَّعَاتٌ']]),
    w(5, 'دَائِرِيٌّ · مُسْتَطِيلٌ', 'round · rectangular', [['f.', 'دَائِرِيَّةٌ · مُسْتَطِيلَةٌ'], ['a circle', 'دَائِرَةٌ']]),
    w(6, 'مَصْنُوعٌ مِنْ …', 'made of …', [['f.', 'مَصْنُوعَةٌ مِنْ'], ['what is it made of?', 'مِمَّ هُوَ مَصْنُوعٌ؟']], { tag: 'passive participle' }),
    w(7, 'خَشَبٌ · مَعْدِنٌ', 'wood · metal', [['adj. m.', 'خَشَبِيٌّ · مَعْدِنِيٌّ'], ['adj. f.', 'خَشَبِيَّةٌ · مَعْدِنِيَّةٌ']]),
    w(8, 'زُجَاجٌ · بْلَاسْتِيكٌ', 'glass · plastic', [['adj. m.', 'زُجَاجِيٌّ · بْلَاسْتِيكِيٌّ'], ['adj. f.', 'زُجَاجِيَّةٌ · بْلَاسْتِيكِيَّةٌ']]),
    w(9, 'قُطْنٌ · جِلْدٌ · صُوفٌ', 'cotton · leather · wool', [['adj.', 'قُطْنِيٌّ · جِلْدِيٌّ · صُوفِيٌّ']]),
    w(10, 'ثَقِيلٌ · خَفِيفٌ', 'heavy · light', [['f.', 'ثَقِيلَةٌ · خَفِيفَةٌ'], ['comp.', 'أَثْقَلُ · أَخَفُّ']]),
    w(11, 'مُسْتَعْمَلٌ', 'used, second-hand', [['f.', 'مُسْتَعْمَلَةٌ'], ['new', 'جَدِيدٌ · جَدِيدَةٌ']]),
    w(12, 'قَابِلٌ لِلْكَسْرِ', 'breakable', [['f.', 'قَابِلَةٌ لِلْكَسْرِ'], ['recyclable', 'قَابِلٌ لِإِعَادَةِ التَّدْوِيرِ']]),
  ],
  words1: { eyebrow: 'Language bank · size, weight and shape', title: 'Length, weight, shape', ar: 'المَقَايِيسُ وَالأَشْكَالُ', notes: 'LANGUAGE BANK (2 min) — measurements use the pronoun of the object: الطَّاوِلَةُ طُولُهَا مِتْرَانِ (dual!) · وَزْنُهُ ثَلَاثَةُ كِيلُوغْرَامَاتٍ. Shapes agree: صُنْدُوقٌ مُرَبَّعٌ · طَاوِلَةٌ دَائِرِيَّةٌ.' },
  words2: { eyebrow: 'Language bank · materials (noun → adjective)', title: 'Wood, glass, cotton', ar: 'مِمَّ هُوَ مَصْنُوعٌ؟', notes: 'LANGUAGE BANK (2 min) — two ways: مَصْنُوعٌ مِنَ الخَشَبِ = خَشَبِيٌّ. The participle agrees: الكُرْسِيُّ مَصْنُوعٌ · الحَقِيبَةُ مَصْنُوعَةٌ · الأَكْيَاسُ مَصْنُوعَةٌ (non-human pl.). Buildings: مَبْنِيٌّ مِنَ الحَجَرِ.' },
  checkCore: 'described an object’s colour, size and material',
  checkDevelop: 'gave a measurement with the right number form and used maṣnūʿ min with agreement',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'lost property', title: 'Role play A — At the lost-property office', ar: 'مَكْتَبُ المَفْقُودَاتِ', you: 'a traveller', them: 'the lost-property clerk',
      tasks: [
        { core: true, ex: 'مَسَاءَ الخَيْرِ، مَاذَا فَقَدْتَ؟', task: 'Say what you lost.', help: 'فَقَدْتُ …', model: 'فَقَدْتُ حَقِيبَةَ ظَهْرٍ.', modelEn: 'I lost a backpack.' },
        { core: true, ex: 'مَا لَوْنُهَا؟', task: 'Give the colour.', help: 'لَوْنُهَا …', model: 'لَوْنُهَا أَخْضَرُ دَاكِنٌ.', modelEn: 'It is dark green.' },
        { core: true, ex: 'هَلْ هِيَ كَبِيرَةٌ؟', task: 'Give the size.', help: 'لَا، هِيَ … / ارْتِفَاعُهَا …', model: 'هِيَ مُتَوَسِّطَةٌ، ارْتِفَاعُهَا خَمْسُونَ سَنْتِيمِتْرًا تَقْرِيبًا.', modelEn: 'It’s medium — about fifty centimetres high.' },
        { core: true, ex: 'مِمَّ هِيَ مَصْنُوعَةٌ؟', task: 'Give the material.', help: 'هِيَ مَصْنُوعَةٌ مِنْ …', model: 'هِيَ مَصْنُوعَةٌ مِنَ القُمَاشِ.', modelEn: 'It is made of fabric.' },
        { core: true, unexpected: true, ex: 'مَاذَا كَانَ فِيهَا؟', task: 'Answer the unexpected question (past).', help: 'كَانَ فِيهَا … وَ…', model: 'كَانَ فِيهَا حَاسُوبٌ وَكِتَابَانِ.', modelEn: 'There was a laptop and two books in it.' },
      ],
      girl: 'فَقَدْتِ',
      notes: 'Core: lawnuhā (f. pronoun for ḥaqība), akhḍar (no tanwīn), khamsūna santīmitran, maṣnūʿa (f.) min, a dual (kitābān).',
    },
    {
      id: 'B', level: 'Core+', setting: 'a furniture shop', title: 'Role play B — Buying a desk', ar: 'شِرَاءُ مَكْتَبٍ', you: 'a customer', them: 'a furniture-shop assistant',
      tasks: [
        { core: true, ex: 'أَهْلًا، كَيْفَ أُسَاعِدُكَ؟', task: 'Say what you need and for which room.', help: 'أُرِيدُ … لِغُرْفَتِي', model: 'أُرِيدُ مَكْتَبًا صَغِيرًا لِغُرْفَتِي.', modelEn: 'I want a small desk for my room.' },
        { core: true, ex: 'هٰذَا المَكْتَبُ مُمْتَازٌ.', task: 'Ask about its length.', help: 'كَمْ طُولُهُ؟', model: 'كَمْ طُولُهُ مِنْ فَضْلِكَ؟', modelEn: 'How long is it, please?' },
        { ex: 'طُولُهُ مِتْرٌ وَنِصْفٌ.', task: 'Say why that is a problem.', help: 'هٰذَا … لِأَنَّ … طُولُهُ …', model: 'هٰذَا طَوِيلٌ قَلِيلًا، لِأَنَّ الجِدَارَ فِي غُرْفَتِي طُولُهُ مِتْرٌ وَاحِدٌ فَقَطْ.', modelEn: 'That’s a bit long, because the wall in my room is only one metre long.' },
        { ex: 'عِنْدَنَا هٰذَا: طُولُهُ تِسْعُونَ سَنْتِيمِتْرًا.', task: 'ASK about the material and weight.', help: 'مِمَّ هُوَ مَصْنُوعٌ؟ وَهَلْ هُوَ …؟', model: 'مِمَّ هُوَ مَصْنُوعٌ؟ وَهَلْ هُوَ ثَقِيلٌ؟', modelEn: 'What is it made of? And is it heavy?' },
        { unexpected: true, ex: 'مِنَ الخَشَبِ، وَوَزْنُهُ عِشْرُونَ كِيلُوغْرَامًا. هَلْ تُرِيدُ التَّوْصِيلَ؟', task: 'Answer the unexpected question.', help: 'نَعَمْ، لِأَنَّهُ …', model: 'نَعَمْ، لِأَنَّهُ أَثْقَلُ مِنْ أَنْ أَحْمِلَهُ فِي الحَافِلَةِ!', modelEn: 'Yes, because it’s too heavy to carry on the bus!' },
      ],
      girl: 'أُسَاعِدُكِ · تُرِيدِينَ',
      notes: 'Core+: kam ṭūluhu?, mitrun wa-niṣf, tisʿūna santīmitran, mimma huwa maṣnūʿ?, the CANDIDATE asks (task 4), athqalu min an + subjunctive.',
    },
    {
      id: 'C', level: 'Develop', setting: 'a design competition', title: 'Role play C — My design for a school bench', ar: 'تَصْمِيمُ مَقْعَدٍ لِلْمَدْرَسَةِ', you: 'a student designer', them: 'the design-technology teacher',
      tasks: [
        { ex: 'صِفْ لَنَا تَصْمِيمَكَ.', task: 'Give shape and size.', help: 'شَكْلُهُ … طُولُهُ … وَعَرْضُهُ …', model: 'شَكْلُهُ نِصْفُ دَائِرَةٍ، طُولُهُ ثَلَاثَةُ أَمْتَارٍ، وَعَرْضُهُ نِصْفُ مِتْرٍ، فَيَجْلِسُ عَلَيْهِ سِتَّةُ طُلَّابٍ.', modelEn: 'It’s a semicircle, three metres long and half a metre wide, so six students can sit on it.' },
        { ex: 'مِمَّ هُوَ مَصْنُوعٌ؟', task: 'Give two materials and why.', help: 'مَصْنُوعٌ مِنْ … لِأَنَّ …', model: 'المَقْعَدُ مَصْنُوعٌ مِنْ بْلَاسْتِيكٍ مُعَادِ التَّدْوِيرِ، وَأَرْجُلُهُ مَعْدِنِيَّةٌ، لِأَنَّهُمَا لَا يَتَأَثَّرَانِ بِالمَطَرِ.', modelEn: 'The seat is made of recycled plastic and the legs are metal, because neither is affected by rain.' },
        { ex: 'كَيْفَ جَاءَتْكَ الفِكْرَةُ؟', task: 'Explain where the idea came from (past).', help: 'لَاحَظْتُ أَنَّ … فَـ…', model: 'لَاحَظْتُ أَنَّ المَقَاعِدَ الخَشَبِيَّةَ القَدِيمَةَ تَتَكَسَّرُ بَعْدَ كُلِّ شِتَاءٍ، فَبَحَثْتُ عَنْ مَوَادَّ أَقْوَى.', modelEn: 'I noticed the old wooden benches break after every winter, so I looked for stronger materials.' },
        { ex: 'وَمَا اللَّوْنُ؟', task: 'Give colour and reason.', help: 'سَيَكُونُ … لِكَيْ …', model: 'سَيَكُونُ أَخْضَرَ فَاتِحًا، لِكَيْ يَنْسَجِمَ مَعَ الأَشْجَارِ فِي المَلْعَبِ.', modelEn: 'It will be light green, to blend with the trees in the playground.' },
        { unexpected: true, ex: 'كَمْ سَيُكَلِّفُ؟', task: 'Answer the unexpected question (future + comparison).', help: 'سَيُكَلِّفُ … وَهُوَ أَ… مِنْ …', model: 'سَيُكَلِّفُ مِئَتَيْ جُنَيْهٍ تَقْرِيبًا، وَهُوَ أَغْلَى مِنَ الخَشَبِيِّ، لٰكِنَّهُ سَيَدُومُ عِشْرِينَ سَنَةً.', modelEn: 'About £200 — dearer than a wooden one, but it will last twenty years.' },
      ],
      girl: 'صِفِي · تَصْمِيمَكِ · جَاءَتْكِ',
      notes: 'Develop: shakluhu / ṭūluhu / ʿarḍuhu, thalāthatu amtārin, sittatu ṭullābin, maṣnūʿ min, a dual verb (lā yataʾaththarān), lāḥaẓtu anna … fa-, sa-yakūnu + accusative, li-kay, miʾatay junayhin.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a sustainability panel', title: 'Role play D — Plastic, wood or glass?', ar: 'أَيُّ المَوَادِّ أَفْضَلُ لِلْبِيئَةِ؟', you: 'a student panellist', them: 'the panel chair',
      tasks: [
        { ex: 'أَيُّ المَوَادِّ أَفْضَلُ لِلتَّغْلِيفِ فِي رَأْيِكَ؟', task: 'Give a clear opinion with evidence.', help: 'أَرَى أَنَّ … لِأَنَّ … بَيْنَمَا …', model: 'أَرَى أَنَّ الزُّجَاجَ أَفْضَلُ، لِأَنَّهُ يُعَادُ تَدْوِيرُهُ مَرَّاتٍ لَا تُحْصَى، بَيْنَمَا يَبْقَى البْلَاسْتِيكُ فِي الأَرْضِ مِئَاتِ السِّنِينَ.', modelEn: 'Glass is best: it can be recycled countless times, whereas plastic stays in the ground for centuries.' },
        { ex: 'لٰكِنَّ الزُّجَاجَ ثَقِيلٌ وَقَابِلٌ لِلْكَسْرِ!', task: 'Concede and counter.', help: 'صَحِيحٌ أَنَّهُ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهُ أَثْقَلُ، مِمَّا يَزِيدُ تَكْلِفَةَ النَّقْلِ، غَيْرَ أَنَّ الزُّجَاجَاتِ يُمْكِنُ أَنْ تُغْسَلَ وَتُسْتَعْمَلَ عَشَرَاتِ المَرَّاتِ.', modelEn: 'It is heavier, which raises transport costs, but bottles can be washed and reused dozens of times.' },
        { ex: 'وَمَاذَا عَنِ الخَشَبِ؟', task: 'Give a balanced view.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، الخَشَبُ مَادَّةٌ طَبِيعِيَّةٌ مُتَجَدِّدَةٌ، وَمِنْ نَاحِيَةٍ أُخْرَى، إِذَا قُطِعَتِ الأَشْجَارُ دُونَ زِرَاعَةِ غَيْرِهَا، فَسَنَخْسَرُ الغَابَاتِ.', modelEn: 'Wood is a natural renewable material, but if trees are cut without replanting, we’ll lose the forests.' },
        { ex: 'هَلْ جَرَّبْتُمْ شَيْئًا فِي مَدْرَسَتِكُمْ؟', task: 'Describe a past project with figures.', help: 'نَعَمْ، اسْتَبْدَلْنَا … بِـ … فَـ…', model: 'نَعَمْ، اسْتَبْدَلْنَا الأَكْوَابَ البْلَاسْتِيكِيَّةَ بِأَكْوَابٍ مَعْدِنِيَّةٍ، فَقَلَّتِ النُّفَايَاتُ بِمِقْدَارِ ثَلَاثِينَ كِيلُوغْرَامًا كُلَّ شَهْرٍ.', modelEn: 'Yes, we replaced plastic cups with metal ones, and waste fell by thirty kilograms a month.' },
        { unexpected: true, ex: 'لَوِ اخْتَرَعْتَ مَادَّةً جَدِيدَةً، كَيْفَ تَكُونُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوِ اخْتَرَعْتُ …، لَكَانَتْ …', model: 'لَوِ اخْتَرَعْتُ مَادَّةً جَدِيدَةً، لَكَانَتْ خَفِيفَةً كَالبْلَاسْتِيكِ، وَقَوِيَّةً كَالمَعْدِنِ، وَتَتَحَلَّلُ فِي التُّرْبَةِ كَأَوْرَاقِ الشَّجَرِ.', modelEn: 'If I invented a material, it would be light as plastic, strong as metal, and break down in soil like leaves.' },
      ],
      girl: 'رَأْيِكِ · جَرَّبْتُنَّ / جَرَّبْتُمْ · اخْتَرَعْتِ',
      notes: 'Stretch: arā anna … baynamā, passives (yuʿādu, tughsala, tustaʿmala, quṭiʿat), a concession with mimmā, a balanced view with idhā … fa-sa-, istabdalnā X bi-Y, numbers with tamyīz, law … la- with three similes.',
      modelFoot: 'Stretch: evidence, a concession, a balanced view, a measured result and a creative law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'الأَشْيَاءُ حَوْلِي', aim: 'one full sentence per question',
      qs: [
        { q: 'صِفْ حَقِيبَتَكَ المَدْرَسِيَّةَ.', en: 'Describe your school bag.', start: 'حَقِيبَتِي … لَوْنُهَا … وَهِيَ مَصْنُوعَةٌ مِنْ …', model: 'حَقِيبَتِي سَوْدَاءُ، وَهِيَ مَصْنُوعَةٌ مِنَ القُمَاشِ.', modelEn: 'My bag is black, and it is made of fabric.' },
        { q: 'مَا شَكْلُ طَاوِلَةِ المَطْبَخِ فِي بَيْتِكَ؟', en: 'What shape is your kitchen table?', start: 'طَاوِلَتُنَا …', model: 'طَاوِلَتُنَا مُسْتَطِيلَةٌ وَخَشَبِيَّةٌ.', modelEn: 'Our table is rectangular and wooden.' },
        { q: 'كَمْ طُولُكَ؟', en: 'How tall are you?', start: 'طُولِي …', model: 'طُولِي مِتْرٌ وَسِتُّونَ سَنْتِيمِتْرًا.', modelEn: 'I am one metre sixty.' },
        { q: 'مِمَّ هَاتِفُكَ مَصْنُوعٌ؟', en: 'What is your phone made of?', start: 'هَاتِفِي مَصْنُوعٌ مِنْ …', model: 'هَاتِفِي مَصْنُوعٌ مِنَ المَعْدِنِ وَالزُّجَاجِ.', modelEn: 'My phone is made of metal and glass.' },
        { q: 'هَلْ تُحِبُّ المَلَابِسَ القُطْنِيَّةَ أَمِ الصُّوفِيَّةَ؟', en: 'Do you prefer cotton or woollen clothes?', start: 'أُحِبُّ … لِأَنَّهَا …', model: 'أُحِبُّ المَلَابِسَ القُطْنِيَّةَ، لِأَنَّهَا خَفِيفَةٌ.', modelEn: 'I like cotton clothes, because they are light.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + colour, shape or material that agrees = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'المَقَايِيسُ وَالمَوَادُّ', aim: 'two or three sentences, with a measurement and a past detail',
      qs: [
        { q: 'صِفْ غُرْفَتَكَ: حَجْمَهَا وَشَكْلَهَا.', en: 'Describe your room: size and shape.', start: 'غُرْفَتِي … طُولُهَا … وَعَرْضُهَا …', model: 'غُرْفَتِي مُرَبَّعَةٌ تَقْرِيبًا؛ طُولُهَا ثَلَاثَةُ أَمْتَارٍ، وَعَرْضُهَا مِتْرَانِ وَنِصْفٌ، وَفِيهَا نَافِذَةٌ كَبِيرَةٌ.', modelEn: 'My room is roughly square: three metres long, two and a half wide, with a big window.' },
        { q: 'صِفْ شَيْئًا مُهِمًّا لَكَ.', en: 'Describe something important to you.', start: 'أَهَمُّ شَيْءٍ عِنْدِي … مَصْنُوعٌ مِنْ …', model: 'أَهَمُّ شَيْءٍ عِنْدِي سَاعَةٌ فِضِّيَّةٌ أَهْدَاهَا لِي جَدِّي؛ هِيَ دَائِرِيَّةٌ، وَمَصْنُوعَةٌ مِنَ الفِضَّةِ وَالجِلْدِ.', modelEn: 'A silver watch my grandad gave me: round, made of silver and leather.' },
        { q: 'هَلْ تَشْتَرِي أَشْيَاءَ مُسْتَعْمَلَةً؟', en: 'Do you buy second-hand things?', start: 'نَعَمْ، اشْتَرَيْتُ … لِأَنَّ …', model: 'نَعَمْ، اشْتَرَيْتُ دَرَّاجَةً مُسْتَعْمَلَةً، لِأَنَّهَا أَرْخَصُ بِكَثِيرٍ، وَمَا زَالَتْ قَوِيَّةً.', modelEn: 'Yes, I bought a second-hand bike: much cheaper, and still strong.' },
        { q: 'لِمَاذَا نَسْتَخْدِمُ البْلَاسْتِيكَ كَثِيرًا؟', en: 'Why do we use plastic so much?', start: 'لِأَنَّهُ أَ… وَأَ… مِنْ …', model: 'لِأَنَّهُ أَخَفُّ وَأَرْخَصُ مِنَ الزُّجَاجِ وَالمَعْدِنِ، لٰكِنَّهُ يُلَوِّثُ البِيئَةَ.', modelEn: 'Because it is lighter and cheaper than glass and metal — but it pollutes.' },
        { q: 'صِفْ شَيْئًا صَنَعْتَهُ بِيَدِكَ.', en: 'Describe something you made by hand.', start: 'صَنَعْتُ … مِنْ … طُولُهُ …', model: 'صَنَعْتُ صُنْدُوقًا خَشَبِيًّا فِي حِصَّةِ التِّكْنُولُوجْيَا، طُولُهُ ثَلَاثُونَ سَنْتِيمِتْرًا، وَلَوَّنْتُهُ بِالأَزْرَقِ.', modelEn: 'I made a wooden box in DT, thirty centimetres long, and painted it blue.' },
      ],
      foot: 'Develop: two or three sentences — a measurement, a material and a past action.',
      modelFoot: 'Measurement + material + past = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'المَوَادُّ وَالمُسْتَقْبَلُ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلِ الأَشْيَاءُ القَدِيمَةُ أَفْضَلُ صُنْعًا مِنَ الحَدِيثَةِ؟', en: 'Are old things better made than modern ones?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ أَثَاثَ جَدَّتِي الخَشَبِيَّ عَاشَ خَمْسِينَ سَنَةً، غَيْرَ أَنَّ الأَجْهِزَةَ الحَدِيثَةَ أَخَفُّ وَأَكْثَرُ أَمَانًا.', modelEn: 'My grandma’s wooden furniture lasted fifty years, but modern devices are lighter and safer.' },
        { q: 'لِمَاذَا تُصْنَعُ الأَجْهِزَةُ اليَوْمَ بِحَيْثُ لَا تَدُومُ طَوِيلًا؟', en: 'Why are devices made today so they don’t last long?', start: 'لِأَنَّ الشَّرِكَاتِ … مِمَّا …', model: 'لِأَنَّ الشَّرِكَاتِ تُرِيدُ أَنْ نَشْتَرِيَ أَجْهِزَةً جَدِيدَةً، مِمَّا يَزِيدُ أَرْبَاحَهَا وَالنُّفَايَاتِ الإِلِكْتْرُونِيَّةَ مَعًا.', modelEn: 'Because companies want us to buy new ones, which increases both their profits and e-waste.' },
        { q: 'مَا رَأْيُكَ فِي الأَكْيَاسِ الوَرَقِيَّةِ بَدَلًا مِنَ البْلَاسْتِيكِيَّةِ؟', en: 'What do you think of paper bags instead of plastic?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، تَتَحَلَّلُ بِسُرْعَةٍ، وَمِنْ نَاحِيَةٍ أُخْرَى، صِنَاعَتُهَا تَحْتَاجُ إِلَى أَشْجَارٍ وَمَاءٍ كَثِيرٍ؛ لِذٰلِكَ أُفَضِّلُ الحَقِيبَةَ القُمَاشِيَّةَ.', modelEn: 'They break down fast, but making them needs trees and lots of water — so I prefer a cloth bag.' },
        { q: 'كَيْفَ كَانَتِ البُيُوتُ تُبْنَى فِي بِلَادِ أَجْدَادِكَ؟', en: 'How were houses built in your grandparents’ country?', start: 'كَانَتْ تُبْنَى مِنْ … لِأَنَّ …', model: 'كَانَتْ تُبْنَى مِنَ الطِّينِ وَالحَجَرِ، وَجُدْرَانُهَا سَمِيكَةٌ، لِأَنَّ ذٰلِكَ يُبْقِيهَا بَارِدَةً فِي الصَّيْفِ الحَارِّ.', modelEn: 'They were built of mud and stone with thick walls, which kept them cool in the hot summer.' },
        { q: 'لَوْ بَنَيْتَ بَيْتَ أَحْلَامِكَ، مِمَّ يَكُونُ مَبْنِيًّا؟', en: 'If you built your dream house, what would it be built of?', start: 'لَوْ بَنَيْتُهُ، لَـ…', model: 'لَوْ بَنَيْتُهُ، لَجَعَلْتُهُ مَبْنِيًّا مِنَ الخَشَبِ وَالزُّجَاجِ، بِأَلْوَاحٍ شَمْسِيَّةٍ عَلَى سَطْحِهِ، وَحَدِيقَةٍ دَائِرِيَّةٍ فِي وَسَطِهِ.', modelEn: 'If I built it, I’d make it of wood and glass, with solar panels on the roof and a round garden in the middle.' },
      ],
      foot: 'Stretch: a concession, a cause → effect with mimmā, a balanced view, a past passive (kānat tubnā) and law … la-.',
      modelFoot: 'Stretch: ṣaḥīḥun anna … ghayra anna, mimmā, balance, the past passive and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I described objects by colour, shape and material.' },
    { route: 'core', text: 'I used maṣnūʿ / maṣnūʿa min with the right gender.' },
    { route: 'develop', text: 'I gave measurements with the right number form (mitrān, thalāthatu amtār).' },
    { route: 'develop', text: 'I compared materials (athqalu, akhaffu, arkhaṣu min).' },
    { route: 'stretch', text: 'I gave a balanced view, a concession or law … la-.' },
  ],
};
speak.RP[3].tasks[3].help = 'نَعَمْ، اسْتَبْدَلْنَا … بِأَكْوَابٍ … فَقَلَّتْ …';
speak.RP[3].tasks[4].help = 'لَوِ اخْتَرَعْتُ …، لَكَانَتْ …';
speak.CONV[2].qs[4].start = 'لَوْ بَنَيْتُهُ، لَجَعَلْتُهُ مَبْنِيًّا مِنْ …';
speak.RP[2].tasks[2].help = 'لَاحَظْتُ أَنَّ … فَبَحَثْتُ …';

const Q2_CORE = `إِلَى مَكْتَبِ المَفْقُودَاتِ فِي المَطَارِ،
اسْمِي آدَمُ يُوسُفُ. أَمْسِ وَصَلْتُ مِنْ دُبَيّ فِي الرِّحْلَةِ رَقْمِ ٢٠٤، وَنَسِيتُ حَقِيبَةً صَغِيرَةً فِي الطَّائِرَةِ. الحَقِيبَةُ زَرْقَاءُ، وَمَصْنُوعَةٌ مِنَ الجِلْدِ. شَكْلُهَا مُسْتَطِيلٌ، وَطُولُهَا ثَلَاثُونَ سَنْتِيمِتْرًا تَقْرِيبًا. فِيهَا حَاسُوبٌ مَحْمُولٌ وَكِتَابٌ عَرَبِيٌّ وَشَاحِنٌ أَبْيَضُ. هٰذِهِ الحَقِيبَةُ مُهِمَّةٌ جِدًّا لِي، لِأَنَّ الحَاسُوبَ فِيهِ كُلُّ وَاجِبَاتِي المَدْرَسِيَّةِ. أَرْجُو أَنْ تَتَّصِلُوا بِي إِذَا وَجَدْتُمُوهَا. سَأَكُونُ فِي البَيْتِ كُلَّ يَوْمٍ بَعْدَ السَّاعَةِ الرَّابِعَةِ.
مَعَ الشُّكْرِ،
آدَمُ يُوسُفُ`;
const Q2_FULL = `حَضْرَةَ المَسْؤُولِ عَنْ مَكْتَبِ المَفْقُودَاتِ المُحْتَرَمِ،
أَكْتُبُ إِلَيْكُمْ لِأُبَلِّغَ عَنْ حَقِيبَةٍ فَقَدْتُهَا أَمْسِ عَلَى مَتْنِ الرِّحْلَةِ رَقْمِ ٢٠٤ القَادِمَةِ مِنْ دُبَيّ؛ إِذْ وَضَعْتُهَا تَحْتَ المَقْعَدِ، وَنَسِيتُهَا عِنْدَ النُّزُولِ. وَهِيَ حَقِيبَةٌ جِلْدِيَّةٌ زَرْقَاءُ دَاكِنَةٌ، مُسْتَطِيلَةُ الشَّكْلِ، طُولُهَا نَحْوُ ثَلَاثِينَ سَنْتِيمِتْرًا، وَعَلَى جَانِبِهَا حَرْفَا اسْمِي مَحْفُورَانِ بِاللَّوْنِ الذَّهَبِيِّ. وَبِدَاخِلِهَا حَاسُوبٌ مَحْمُولٌ فِضِّيٌّ يَحْتَوِي عَلَى مَشْرُوعِي النِّهَائِيِّ الَّذِي يَجِبُ أَنْ أُسَلِّمَهُ الأُسْبُوعَ القَادِمَ. لِذٰلِكَ أَرْجُو أَنْ تُبْلِغُونِي فَوْرَ العُثُورِ عَلَيْهَا، وَسَأَحْضُرُ بِنَفْسِي لِاسْتِلَامِهَا مَعَ جَوَازِ سَفَرِي وَبِطَاقَةِ الصُّعُودِ إِلَى الطَّائِرَةِ.
مَعَ خَالِصِ الشُّكْرِ،
آدَمُ يُوسُفُ`;
const Q3A_CORE = `فِي غُرْفَتِي أَشْيَاءُ كَثِيرَةٌ، لٰكِنَّ أَهَمَّهَا مَكْتَبِي. هُوَ مَصْنُوعٌ مِنَ الخَشَبِ، وَلَوْنُهُ بُنِّيٌّ فَاتِحٌ. شَكْلُهُ مُسْتَطِيلٌ، وَطُولُهُ مِتْرٌ وَعِشْرُونَ سَنْتِيمِتْرًا. عَلَيْهِ حَاسُوبِي وَكُتُبِي وَمِصْبَاحٌ صَغِيرٌ. أَجْلِسُ إِلَيْهِ كُلَّ يَوْمٍ سَاعَتَيْنِ لِأَدْرُسَ.
عِنْدِي أَيْضًا سَاعَةٌ قَدِيمَةٌ أُحِبُّهَا كَثِيرًا. هِيَ دَائِرِيَّةٌ، وَمَصْنُوعَةٌ مِنَ الفِضَّةِ وَالجِلْدِ. أَهْدَاهَا لِي جَدِّي قَبْلَ أَنْ يُسَافِرَ إِلَى مِصْرَ، لِذٰلِكَ هِيَ مُهِمَّةٌ جِدًّا لِي، وَأَلْبَسُهَا فِي المُنَاسَبَاتِ فَقَطْ.
فِي السَّنَةِ المَاضِيَةِ صَنَعْتُ صُنْدُوقًا خَشَبِيًّا فِي حِصَّةِ التِّكْنُولُوجْيَا. كَانَ طُولُهُ أَرْبَعِينَ سَنْتِيمِتْرًا، وَعَرْضُهُ عِشْرِينَ. لَوَّنْتُهُ بِالأَخْضَرِ، وَأَعْطَيْتُهُ لِأُمِّي هَدِيَّةً، فَوَضَعَتْ فِيهِ صُوَرَ العَائِلَةِ.
فِي رَأْيِي، الأَشْيَاءُ المَصْنُوعَةُ مِنَ الخَشَبِ وَالمَعْدِنِ أَفْضَلُ مِنَ البْلَاسْتِيكِ، لِأَنَّهَا أَقْوَى وَتَدُومُ أَطْوَلَ. فِي المُسْتَقْبَلِ سَأَشْتَرِي أَشْيَاءَ قَلِيلَةً وَجَيِّدَةً، وَسَأَصْنَعُ رَفًّا لِلْكُتُبِ بِنَفْسِي، طُولُهُ مِتْرَانِ.`;
const Q3A_FULL = `يُقَالُ إِنَّ الأَشْيَاءَ تَحْكِي قِصَصَ أَصْحَابِهَا، وَهٰذَا صَحِيحٌ فِي غُرْفَتِي؛ فَكُلُّ قِطْعَةٍ فِيهَا تَحْمِلُ ذِكْرَى. أَوَّلُهَا مَكْتَبٌ خَشَبِيٌّ قَدِيمٌ، طُولُهُ مِتْرٌ وَنِصْفٌ، كَانَ لِأَبِي عِنْدَمَا كَانَ طَالِبًا، وَمَا زَالَتْ آثَارُ أَقْلَامِهِ مَحْفُورَةً عَلَى سَطْحِهِ.
أَمَّا أَغْلَى مَا أَمْلِكُ فَهُوَ سَاعَةٌ دَائِرِيَّةٌ مَصْنُوعَةٌ مِنَ الفِضَّةِ، أَهْدَاهَا لِي جَدِّي قَبْلَ وَفَاتِهِ؛ وَمَعَ أَنَّهَا تَتَأَخَّرُ خَمْسَ دَقَائِقَ كُلَّ يَوْمٍ، فَإِنِّي لَا أَسْتَطِيعُ أَنْ أَسْتَبْدِلَهَا بِأَيِّ سَاعَةٍ ذَكِيَّةٍ.
وَقَدْ أَضَفْتُ إِلَى هٰذِهِ المَجْمُوعَةِ قِطْعَةً صَنَعْتُهَا بِيَدَيَّ فِي العَامِ المَاضِي: رَفًّا لِلْكُتُبِ مَصْنُوعًا مِنْ أَلْوَاحِ خَشَبٍ مُسْتَعْمَلَةٍ وَجَدْتُهَا فِي مَخْزَنِ المَدْرَسَةِ. قِسْتُ الجِدَارَ بِدِقَّةٍ، وَقَطَعْتُ الأَلْوَاحَ، ثُمَّ دَهَنْتُهَا بِاللَّوْنِ الأَبْيَضِ، فَأَصْبَحَ الرَّفُّ أَجْمَلَ مِنْ أَيِّ رَفٍّ فِي المَحَلَّاتِ.
صَحِيحٌ أَنَّ الأَشْيَاءَ الحَدِيثَةَ أَخَفُّ وَأَرْخَصُ، غَيْرَ أَنَّهَا نَادِرًا مَا تَدُومُ أَوْ تَحْمِلُ قِيمَةً. وَلَوْ أَصْلَحْنَا أَشْيَاءَنَا بَدَلًا مِنْ رَمْيِهَا، لَوَفَّرْنَا المَالَ، وَحَافَظْنَا عَلَى ذِكْرَيَاتِنَا وَعَلَى البِيئَةِ مَعًا.`;
const Q3B_FULL = `نَعِيشُ فِي عَصْرِ البْلَاسْتِيكِ؛ فَهُوَ فِي أَكْوَابِنَا وَمَلَابِسِنَا وَهَوَاتِفِنَا، بَلْ وَحَتَّى فِي المِيَاهِ الَّتِي نَشْرَبُهَا. فَهَلْ نَسْتَطِيعُ أَنْ نَسْتَبْدِلَهُ بِمَوَادَّ أَكْثَرَ احْتِرَامًا لِلطَّبِيعَةِ؟
فِي المَاضِي كَانَتِ الأَشْيَاءُ تُصْنَعُ مِنَ الخَشَبِ وَالزُّجَاجِ وَالقُطْنِ، وَكَانَتْ تُصْلَحُ وَتُورَثُ مِنْ جِيلٍ إِلَى جِيلٍ، أَمَّا اليَوْمَ فَيُفَضِّلُ المُصَنِّعُونَ البْلَاسْتِيكَ، لِأَنَّهُ أَخَفُّ وَأَرْخَصُ، مِمَّا جَعَلَ الأَشْيَاءَ تُرْمَى بَعْدَ اسْتِعْمَالٍ قَصِيرٍ، حَتَّى أَصْبَحَتِ النُّفَايَاتُ البْلَاسْتِيكِيَّةُ تَمْلَأُ البِحَارَ وَالشَّوَاطِئَ.
وَقَدْ شَارَكْتُ فِي تَجْرِبَةٍ عِلْمِيَّةٍ فِي المَدْرَسَةِ دَفَنَّا فِيهَا قِطَعًا مُتَسَاوِيَةً مِنَ الوَرَقِ وَالقُطْنِ وَالبْلَاسْتِيكِ فِي التُّرْبَةِ؛ وَبَعْدَ ثَلَاثَةِ أَشْهُرٍ، اخْتَفَى الوَرَقُ تَقْرِيبًا، وَتَحَلَّلَ نِصْفُ القُطْنِ، أَمَّا البْلَاسْتِيكُ فَبَقِيَ كَمَا هُوَ تَمَامًا، حَتَّى إِنَّ لَوْنَهُ لَمْ يَتَغَيَّرْ.
صَحِيحٌ أَنَّ المَوَادَّ الطَّبِيعِيَّةَ أَغْلَى أَحْيَانًا، غَيْرَ أَنَّ ثَمَنَ البْلَاسْتِيكِ الحَقِيقِيَّ تَدْفَعُهُ الأَجْيَالُ القَادِمَةُ. وَإِذَا دَعَمَتِ الحُكُومَاتُ الشَّرِكَاتِ الَّتِي تَسْتَخْدِمُ مَوَادَّ قَابِلَةً لِلتَّحَلُّلِ، فَسَتُصْبِحُ هٰذِهِ المَوَادُّ أَرْخَصَ وَفِي مُتَنَاوَلِ الجَمِيعِ، فِي كُلِّ بَيْتٍ وَمَدْرَسَةٍ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a lost-luggage form, write an email describing a lost item precisely, and write an extended piece about objects that matter to you or about materials and the environment.',
  lift: [
    { ar: 'حَقِيبَةٌ جِلْدِيَّةٌ زَرْقَاءُ، مُسْتَطِيلَةُ الشَّكْلِ', en: 'a blue leather bag, rectangular in shape' },
    { ar: 'طُولُهَا نَحْوُ ثَلَاثِينَ سَنْتِيمِتْرًا', en: 'about thirty centimetres long' },
    { ar: 'سَاعَةٌ دَائِرِيَّةٌ مَصْنُوعَةٌ مِنَ الفِضَّةِ', en: 'a round watch made of silver' },
  ],
  checkTip: 'Check: ṭūluhu / ṭūluhā follows the object’s gender; numbers: mitrān (dual), thalāthatu amtārin (3–10 + pl.), thalāthūna santīmitran (11–99 + sg. acc.); maṣnūʿ / maṣnūʿa agrees; colours: zarqāʾ (f.), azraq (m.).',
  FORM: {
    title: 'Lost-luggage report form', ar: 'اسْتِمَارَةُ الإِبْلَاغِ عَنْ أَمْتِعَةٍ مَفْقُودَةٍ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'آدَمُ يُوسُفُ', modelEn: 'Adam Yusuf' },
      { core: true, ar: 'رَقْمُ الرِّحْلَةِ', en: 'Flight number', model: '٢٠٤', modelEn: '204' },
      { core: true, ar: 'نَوْعُ الشَّيْءِ المَفْقُودِ', en: 'Type of item lost', model: 'حَقِيبَةُ يَدٍ', modelEn: 'a handbag' },
      { core: true, ar: 'اللَّوْنُ', en: 'Colour', model: 'أَزْرَقُ دَاكِنٌ', modelEn: 'dark blue' },
      { core: true, ar: 'المَادَّةُ', en: 'Material', model: 'الجِلْدُ', modelEn: 'leather' },
      { core: true, ar: 'الشَّكْلُ', en: 'Shape', model: 'مُسْتَطِيلٌ', modelEn: 'rectangular' },
      { ar: 'المَقَاسُ أَوِ الوَزْنُ', en: 'Size or weight', model: 'طُولُهَا ثَلَاثُونَ سَنْتِيمِتْرًا', modelEn: 'thirty centimetres long' },
      { ar: 'جُمْلَةٌ: مَا الَّذِي كَانَ فِيهَا؟', en: 'ONE sentence: what was inside', model: 'كَانَ فِيهَا حَاسُوبٌ فِضِّيٌّ وَكِتَابَانِ مَدْرَسِيَّانِ.', modelEn: 'Inside there was a silver laptop and two school books.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with kāna fīhā and a dual.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 4: azraqu dākinun (colour + shade). Box 7: thalāthūna santīmitran (11–99 + sg.). Box 8: a dual noun + adjective (kitābāni madrasiyyāni).',
  },
  Q2: {
    short: 'an email about a lost item', title: 'Question 2: lost on the plane', ar: 'حَقِيبَةٌ مَفْقُودَةٌ',
    task: 'You left a bag on a plane. Write an email in Arabic to the airport lost-property office of about 80–90 words. You must include: • when and where you lost it • a precise description (colour, material, shape, size) • what was inside and why it is important • what you want them to do and when you are available.',
    checklist: ['All four bullet points, in order.', 'A formal greeting and closing.', 'Colour, material, shape AND a measurement.', 'A past AND a future sentence.', 'About 80–90 words.'],
    phrases: [['أَمْسِ نَسِيتُ … فِي …', 'yesterday I left … in …'], ['هِيَ … وَمَصْنُوعَةٌ مِنْ … طُولُهَا …', 'it is … and made of … it is … long'], ['فِيهَا … وَهِيَ مُهِمَّةٌ لِأَنَّ …', 'inside is … and it is important because …'], ['أَرْجُو أَنْ تَتَّصِلُوا بِي … سَأَكُونُ …', 'please call me … I will be …']],
    rubric: [
      ['task', 'نَسِيتَ حَقِيبَةً فِي الطَّائِرَةِ. اكْتُبْ رِسَالَةً إِلَى مَكْتَبِ المَفْقُودَاتِ (٨٠–٩٠ كَلِمَةً).', 'You left a bag on a plane: write to lost property (80–90 words).'],
      ['1', 'مَتَى وَأَيْنَ فَقَدْتَهَا؟', 'When and where you lost it'],
      ['2', 'صِفِ الحَقِيبَةَ بِدِقَّةٍ.', 'Describe it precisely'],
      ['3', 'مَاذَا كَانَ فِيهَا؟ وَلِمَاذَا هِيَ مُهِمَّةٌ؟', 'What was inside; why it matters'],
      ['4', 'مَاذَا تُرِيدُ مِنْهُمْ؟ وَمَتَى سَتَكُونُ مُتَاحًا؟', 'What you want them to do; when you are available'],
    ],
    qwords: 'مَتَى (when) · أَيْنَ (where) · صِفْ (describe!) · مَاذَا (what) · لِمَاذَا (why) — bullet 1 is PAST, bullet 4 is FUTURE',
    frames: [
      ['start', 'إِلَى مَكْتَبِ المَفْقُودَاتِ،', 'To the lost-property office,'],
      ['1', 'أَمْسِ وَصَلْتُ مِنْ ______ ، وَنَسِيتُ حَقِيبَةً فِي ______ .', 'Yesterday I arrived from …, and left a bag in …'],
      ['2', 'الحَقِيبَةُ ______ ، وَمَصْنُوعَةٌ مِنْ ______ . شَكْلُهَا ______ ، وَطُولُهَا ______ .', 'The bag is …, made of … Its shape is …, and it is … long.'],
      ['3', 'فِيهَا ______ . هِيَ مُهِمَّةٌ لِأَنَّ ______ .', 'Inside is … It is important because …'],
      ['4', 'أَرْجُو أَنْ تَتَّصِلُوا بِي. سَأَكُونُ فِي البَيْتِ ______ .', 'Please call me. I will be at home …'],
      ['end', 'مَعَ الشُّكْرِ، ______', 'With thanks, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“To the airport lost-property office, my name is Adam Yusuf. Yesterday I arrived from Dubai on flight 204 and left a small bag on the plane. The bag is blue and made of leather. It is rectangular and about thirty centimetres long. Inside are a laptop, an Arabic book and a white charger. This bag is very important to me, because the laptop has all my school homework on it. Please call me if you find it. I will be at home every day after four o’clock. With thanks, Adam Yusuf.”',
      find: ['مَصْنُوعَةٌ مِنَ الجِلْدِ', 'شَكْلُهَا مُسْتَطِيلٌ', 'طُولُهَا ثَلَاثُونَ', 'سَأَكُونُ فِي البَيْتِ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear lost-property officer, I am writing to report a bag I lost yesterday on flight 204 from Dubai: I put it under the seat and forgot it when getting off. It is a dark-blue leather bag, rectangular, about thirty centimetres long, with my initials engraved in gold on the side. Inside is a silver laptop containing my final project, which I must hand in next week. So please inform me as soon as it is found, and I will come in person to collect it with my passport and boarding pass. Many thanks, Adam Yusuf.”',
      find: ['لِأُبَلِّغَ عَنْ', 'مُسْتَطِيلَةُ الشَّكْلِ', 'حَرْفَا اسْمِي مَحْفُورَانِ', 'الَّذِي يَجِبُ أَنْ أُسَلِّمَهُ'],
    },
  },
  Q3: {
    a: { title: 'أَشْيَاءُ لَهَا قِيمَةٌ عِنْدِي', en: 'Things that matter to me', bullets: 'شَيْءٌ تَسْتَخْدِمُهُ كُلَّ يَوْمٍ · شَيْءٌ لَهُ ذِكْرَى · شَيْءٌ صَنَعْتَهُ أَوْ أَصْلَحْتَهُ · رَأْيُكَ فِي الأَشْيَاءِ القَدِيمَةِ وَالحَدِيثَةِ', bulletsEn: 'Something you use every day · something with a memory · something you made or fixed · your opinion on old and new things' },
    b: { title: 'المَوَادُّ الَّتِي نَسْتَخْدِمُهَا وَالبِيئَةُ', en: 'The materials we use and the environment', bullets: 'عَصْرُ البْلَاسْتِيكِ · المَاضِي وَالحَاضِرُ · تَجْرِبَةٌ أَوْ مِثَالٌ · رَأْيُكَ وَالحَلُّ', bulletsEn: 'The plastic age · past and present · an experiment or example · your opinion and the solution' },
    plan: [
      'An everyday object — maṣnūʿ min …, lawnuhu …, shakluhu …, ṭūluhu … (gender agreement).',
      'An object with a memory — ahdāhā lī …; dāʾiriyya, maṣnūʿa min al-fiḍḍa.',
      'Past — something you made: ṣanaʿtu, qistu, lawwantu; kāna ṭūluhu + accusative number.',
      'Opinion + future — aqwā / atwalu, sa-aṣnaʿu …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'مَكْتَبِي مَصْنُوعٌ مِنَ الخَشَبِ، وَطُولُهُ مِتْرٌ وَعِشْرُونَ سَنْتِيمِتْرًا.', en: 'present: my desk is made of wood and is 1.2 m long.' },
      { ar: 'كَانَ طُولُهُ أَرْبَعِينَ سَنْتِيمِتْرًا، وَلَوَّنْتُهُ بِالأَخْضَرِ.', en: 'past: it was forty centimetres long, and I painted it green.' },
      { ar: 'سَأَصْنَعُ رَفًّا لِلْكُتُبِ بِنَفْسِي.', en: 'future: I will make a bookshelf myself.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'My most important object is my desk: wooden, light brown, rectangular, 1.2 m long, with my computer, books and a lamp; I study at it two hours a day → my old watch: round, silver and leather, a gift from Grandad before he went to Egypt; I only wear it on special occasions → last year in DT I made a wooden box, 40 cm by 20 cm, painted it green and gave it to Mum, who keeps family photos in it → wood and metal beat plastic: stronger and longer-lasting; I’ll buy fewer, better things and make a two-metre bookshelf myself.', find: ['مَصْنُوعٌ مِنَ الخَشَبِ', 'دَائِرِيَّةٌ، وَمَصْنُوعَةٌ', 'كَانَ طُولُهُ أَرْبَعِينَ', 'أَقْوَى وَتَدُومُ أَطْوَلَ'], notes: 'Core model: maṣnūʿ / maṣnūʿa min with agreement, shape and colour adjectives, a measurement with mitrun wa-ʿishrūna santīmitran, kāna ṭūluhu + accusative, comparatives and a future plan.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'They say objects tell their owners’ stories — true in my room, where every piece holds a memory: first, an old 1.5 m wooden desk that was Dad’s as a student, his pen marks still carved on it → my most precious possession is a round silver watch Grandad gave me before he died; although it loses five minutes a day, I couldn’t swap it for any smartwatch → last year I added something I made: a bookshelf from used planks found in the school store; I measured the wall, cut the planks and painted them white — nicer than any shop shelf → modern things are lighter and cheaper but rarely last or mean anything; “if we repaired things instead of throwing them away, we’d save money and protect our memories and the environment together”.', find: ['يُقَالُ إِنَّ', 'مَا زَالَتْ آثَارُ', 'مَعَ أَنَّهَا … فَإِنِّي', 'لَوْ أَصْلَحْنَا … لَوَفَّرْنَا'], notes: 'Full-mark model: a passive hook (yuqālu inna), a measurement, mā zāla + passive participle, ammā … fa-, maʿa anna … fa-innī, a relative without alladhī, a sequence of past verbs, nādiran mā, a concession and law … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'materials and the environment', text: Q3B_FULL, en: 'We live in the plastic age — in our cups, clothes, phones and even our drinking water; can we replace it with materials kinder to nature? → in the past things were made of wood, glass and cotton, repaired and handed down; today manufacturers prefer plastic because it is lighter and cheaper, which means things are thrown away after short use, until plastic waste now fills the seas and beaches → in a school experiment we buried equal pieces of paper, cotton and plastic; after three months the paper had almost gone, half the cotton had broken down, and the plastic was exactly the same — even its colour hadn’t changed → natural materials are sometimes dearer, but future generations pay plastic’s real price; “if governments support companies using biodegradable materials, these will become cheaper and within everyone’s reach, in every home and school”.', find: ['بَلْ وَحَتَّى', 'كَانَتِ الأَشْيَاءُ تُصْنَعُ', 'أَمَّا البْلَاسْتِيكُ فَبَقِيَ', 'إِذَا دَعَمَتْ … فَسَتُصْبِحُ'], notes: 'Full-mark model for the Stretch title: bal wa-ḥattā, a rhetorical question, kāna + passive present vs ammā … fa-, mimmā, a scientific experiment with ammā … fa-, a concession and idhā … fa-sa-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; colour and material are correct.' },
    { route: 'core', text: 'Q2: all four bullet points, with a formal greeting and closing.' },
    { route: 'develop', text: 'Q2: a measurement with the right number form and maṣnūʿa min.' },
    { route: 'develop', text: 'Q3: four paragraphs with shape, size and material.' },
    { route: 'stretch', text: 'Q3: a concession and law … la- or idhā … fa-sa-.' },
  ],
};

module.exports = { speak, write };
