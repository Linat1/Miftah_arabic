'use strict';
/* Exam-practice data · TB-L06 · Colours and Accurate Description (colour forms afʿal / faʿlāʾ / fuʿl; non-human plural agreement). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'B', n: 6, short: 'Colours and Accurate Description', arShort: 'الأَلْوَانُ وَالوَصْفُ', fileTitle: 'Colours_and_Accurate_Description', title: 'Colours and Accurate Description', ar: 'الأَلْوَانُ وَالوَصْفُ الدَّقِيقُ', icon: 'FaPalette', grammar: 'colour forms (aḥmar · ḥamrāʾ · ḥumr); regular colours (-iyy); non-human plural agreement' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: describe objects, clothes, places and pictures precisely — size, shape, colour and material — with colour forms that agree (aḥmar / ḥamrāʾ) and non-human plurals.',
  words: [
    w(1, 'أَحْمَرُ', 'red', [['m.', 'أَحْمَرُ'], ['f.', 'حَمْرَاءُ'], ['pl.', 'حُمْرٌ']], { tag: 'afʿal · faʿlāʾ · fuʿl' }),
    w(2, 'أَزْرَقُ', 'blue', [['m.', 'أَزْرَقُ'], ['f.', 'زَرْقَاءُ'], ['pl.', 'زُرْقٌ']]),
    w(3, 'أَخْضَرُ', 'green', [['m.', 'أَخْضَرُ'], ['f.', 'خَضْرَاءُ'], ['pl.', 'خُضْرٌ']]),
    w(4, 'أَبْيَضُ', 'white', [['m.', 'أَبْيَضُ'], ['f.', 'بَيْضَاءُ'], ['pl.', 'بِيضٌ']]),
    w(5, 'أَسْوَدُ', 'black', [['m.', 'أَسْوَدُ'], ['f.', 'سَوْدَاءُ'], ['pl.', 'سُودٌ']]),
    w(6, 'أَصْفَرُ', 'yellow', [['m.', 'أَصْفَرُ'], ['f.', 'صَفْرَاءُ'], ['pl.', 'صُفْرٌ']]),
    w(7, 'بُنِّيٌّ', 'brown', [['m.', 'بُنِّيٌّ'], ['f.', 'بُنِّيَّةٌ'], ['pl.', 'بُنِّيَّةٌ']], { tag: 'regular: -iyy / -iyya' }),
    w(8, 'رَمَادِيٌّ', 'grey', [['m.', 'رَمَادِيٌّ'], ['f.', 'رَمَادِيَّةٌ']], { tag: 'regular' }),
    w(9, 'بُرْتُقَالِيٌّ · وَرْدِيٌّ', 'orange · pink', [['f.', 'بُرْتُقَالِيَّةٌ · وَرْدِيَّةٌ']], { tag: 'regular' }),
    w(10, 'فَاتِحٌ · غَامِقٌ', 'light · dark (shade)', [['f.', 'فَاتِحَةٌ · غَامِقَةٌ']], { tag: 'shade' }),
    w(11, 'مُخَطَّطٌ · مُنَقَّطٌ', 'striped · spotted', [['f.', 'مُخَطَّطَةٌ · مُنَقَّطَةٌ']]),
    w(12, 'مَصْنُوعٌ مِنْ …', 'made of …', [['f.', 'مَصْنُوعَةٌ'], ['pl.', 'مَصْنُوعَةٌ']], { tag: 'material' }),
  ],
  words1: { eyebrow: 'Language bank · the six “irregular” colours (m. · f. · pl.)', title: 'Red: aḥmar · ḥamrāʾ · ḥumr', ar: 'أَلْوَانُ أَفْعَلَ', notes: 'LANGUAGE BANK (2 min) — the basic colours follow afʿal (m.) · faʿlāʾ (f.) · fuʿl (human pl.): قَمِيصٌ أَحْمَرُ · سَيَّارَةٌ حَمْرَاءُ. They never take tanwīn: أَحْمَرُ (not أَحْمَرٌ). Non-human plurals take the feminine singular: أَزْهَارٌ حَمْرَاءُ.' },
  words2: { eyebrow: 'Language bank · regular colours, shades, patterns, materials', title: 'Light blue, striped, made of wool', ar: 'الدِّقَّةُ فِي الوَصْفِ', notes: 'LANGUAGE BANK (2 min) — colours from nouns are regular: بُنِّيٌّ / بُنِّيَّةٌ (from coffee bean) · وَرْدِيٌّ (from rose). Shades follow the colour: أَزْرَقُ فَاتِحٌ · حَقِيبَةٌ زَرْقَاءُ غَامِقَةٌ.' },
  checkCore: 'described objects with colours that agree (m. / f.)',
  checkDevelop: 'added a shade, a pattern or a material, and used non-human plural agreement',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'at the airport', title: 'Role play A — My suitcase is lost', ar: 'حَقِيبَتِي ضَائِعَةٌ', you: 'a traveller', them: 'the lost-luggage officer',
      tasks: [
        { core: true, ex: 'مَا المُشْكِلَةُ؟', task: 'Say your suitcase did not arrive.', help: 'حَقِيبَتِي لَمْ …', model: 'حَقِيبَتِي لَمْ تَصِلْ مَعَ الطَّائِرَةِ مِنْ لَنْدَنَ.', modelEn: 'My suitcase didn’t arrive on the plane from London.' },
        { core: true, ex: 'مَا لَوْنُهَا؟', task: 'Say its colour (feminine).', help: 'هِيَ … ', model: 'هِيَ زَرْقَاءُ غَامِقَةٌ، وَعَلَيْهَا شَرِيطٌ أَصْفَرُ.', modelEn: 'It is dark blue, with a yellow ribbon on it.' },
        { core: true, ex: 'هَلْ هِيَ كَبِيرَةٌ أَمْ صَغِيرَةٌ؟', task: 'Describe its size and material.', help: 'هِيَ … وَمَصْنُوعَةٌ مِنْ …', model: 'هِيَ كَبِيرَةٌ، وَمَصْنُوعَةٌ مِنَ البْلَاسْتِيكِ القَوِيِّ.', modelEn: 'It is big, and made of hard plastic.' },
        { core: true, ex: 'مَاذَا يُوجَدُ فِيهَا؟', task: 'Say two things inside, with colours.', help: 'فِيهَا … وَ…', model: 'فِيهَا مَلَابِسِي، وَحِذَاءٌ أَسْوَدُ، وَهَدِيَّةٌ لِأُمِّي.', modelEn: 'My clothes, a pair of black shoes and a present for my mum.' },
        { core: true, unexpected: true, ex: 'أَيْنَ تَنْزِلُ فِي المَدِينَةِ؟', task: 'Answer the unexpected question.', help: 'أَنْزِلُ فِي فُنْدُقِ …', model: 'أَنْزِلُ فِي فُنْدُقِ النِّيلِ، فِي وَسَطِ المَدِينَةِ.', modelEn: 'I am staying at the Nile Hotel, in the city centre.' },
      ],
      girl: 'تَنْزِلِينَ — the bag stays feminine: هِيَ زَرْقَاءُ',
      notes: 'Core: ḥaqība is feminine → zarqāʾ, kabīra, maṣnūʿa. Masculine items: shirīṭ aṣfar, ḥidhāʾ aswad. No tanwīn on afʿal / faʿlāʾ.',
    },
    {
      id: 'B', level: 'Core+', setting: 'choosing paint', title: 'Role play B — Choosing colours for your room', ar: 'فِي مَحَلِّ الدِّهَانِ', you: 'a customer', them: 'the paint-shop assistant',
      tasks: [
        { core: true, ex: 'مَاذَا تُرِيدُ أَنْ تَدْهَنَ؟', task: 'Say what you want to paint.', help: 'أُرِيدُ أَنْ أَدْهَنَ …', model: 'أُرِيدُ أَنْ أَدْهَنَ جُدْرَانَ غُرْفَتِي، وَبَابَهَا.', modelEn: 'I want to paint my bedroom walls and its door.' },
        { core: true, ex: 'أَيَّ لَوْنٍ لِلْجُدْرَانِ؟', task: 'Choose a colour with a shade.', help: 'أَخْضَرُ فَاتِحٌ / …', model: 'أُرِيدُ لَوْنًا أَخْضَرَ فَاتِحًا، لِأَنَّهُ هَادِئٌ.', modelEn: 'I want a light green, because it is calming.' },
        { ex: 'وَالبَابُ؟', task: 'Choose a different colour and give a reason.', help: 'البَابُ … لِأَنَّ …', model: 'البَابُ أَبْيَضُ، لِأَنَّ الأَبْيَضَ يَجْعَلُ الغُرْفَةَ أَوْسَعَ.', modelEn: 'White for the door, because white makes the room look bigger.' },
        { ex: 'هٰذِهِ العُلْبَةُ بِعِشْرِينَ دِينَارًا.', task: 'ASK how many tins you need.', help: 'كَمْ عُلْبَةً …؟', model: 'كَمْ عُلْبَةً أَحْتَاجُ لِغُرْفَةٍ صَغِيرَةٍ؟', modelEn: 'How many tins do I need for a small room?' },
        { unexpected: true, ex: 'مَا لَوْنُ الأَثَاثِ فِي غُرْفَتِكَ؟', task: 'Answer the unexpected question (plural agreement).', help: 'الأَثَاثُ … وَالسَّتَائِرُ …', model: 'الأَثَاثُ بُنِّيٌّ، وَالسَّتَائِرُ بَيْضَاءُ، وَالسَّجَّادَةُ رَمَادِيَّةٌ.', modelEn: 'The furniture is brown, the curtains are white and the rug is grey.' },
      ],
      girl: 'تُرِيدِينَ أَنْ تَدْهَنِي · غُرْفَتِكِ',
      notes: 'Task 2: laun is masculine → akhḍar fātiḥ (accusative here). Task 5: as-satāʾir (non-human pl.) → bayḍāʾ. Task 4: the CANDIDATE asks.',
    },
    {
      id: 'C', level: 'Develop', setting: 'an art gallery', title: 'Role play C — Describing a painting', ar: 'فِي مَعْرِضِ الفُنُونِ', you: 'a student on a school trip', them: 'a friend on a video call',
      tasks: [
        { ex: 'أَيْنَ أَنْتَ؟', task: 'Say where you are and with whom.', help: 'أَنَا فِي … مَعَ …', model: 'أَنَا فِي مَعْرِضِ الفُنُونِ مَعَ صَفِّي، وَأَمَامِي لَوْحَةٌ رَائِعَةٌ.', modelEn: 'I am in the art gallery with my class, and in front of me there is a wonderful painting.' },
        { ex: 'صِفْهَا لِي.', task: 'Describe the picture with three colours.', help: 'فِي اللَّوْحَةِ … وَ… وَ…', model: 'فِي اللَّوْحَةِ بَحْرٌ أَزْرَقُ، وَسَمَاءٌ بُرْتُقَالِيَّةٌ، وَقَوَارِبُ صَغِيرَةٌ بَيْضَاءُ.', modelEn: 'There is a blue sea, an orange sky and small white boats.' },
        { ex: 'وَأَيْنَ الأَشْخَاصُ؟', task: 'Say where things are in the picture.', help: 'عَلَى اليَمِينِ … وَفِي الوَسَطِ …', model: 'عَلَى اليَمِينِ صَيَّادٌ يَلْبَسُ قُبَّعَةً حَمْرَاءَ، وَفِي الوَسَطِ أَطْفَالٌ يَلْعَبُونَ عَلَى الرَّمْلِ.', modelEn: 'On the right a fisherman in a red hat; in the middle children playing on the sand.' },
        { ex: 'هَلْ تُعْجِبُكَ؟', task: 'Give your opinion with a reason.', help: 'نَعَمْ، لِأَنَّ الأَلْوَانَ …', model: 'نَعَمْ كَثِيرًا، لِأَنَّ الأَلْوَانَ دَافِئَةٌ، وَتُذَكِّرُنِي بِعُطْلَتِنَا فِي تُونِسَ.', modelEn: 'Yes, a lot — the colours are warm and remind me of our holiday in Tunisia.' },
        { unexpected: true, ex: 'مَاذَا رَأَيْتَ قَبْلَ ذٰلِكَ؟', task: 'Answer the unexpected question (past).', help: 'رَأَيْتُ … كَانَتْ …', model: 'رَأَيْتُ تِمْثَالًا ضَخْمًا مِنَ الرُّخَامِ الأَبْيَضِ، وَكَانَتْ فِيهِ تَفَاصِيلُ دَقِيقَةٌ جِدًّا.', modelEn: 'I saw a huge white marble statue, with very fine details.' },
      ],
      girl: 'أَيْنَ أَنْتِ · صِفِيهَا · تُعْجِبُكِ · رَأَيْتِ',
      notes: 'Develop: agreement with each noun (baḥr azraq, samāʾ burtuqāliyya, qawārib bayḍāʾ — non-human pl.), qubbaʿa ḥamrāʾ, positions, an opinion, a past description.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a design-school interview', title: 'Role play D — Colours and their meanings', ar: 'لِلْأَلْوَانِ مَعَانٍ', you: 'an applicant for a design course', them: 'the course tutor',
      tasks: [
        { ex: 'مَا لَوْنُكَ المُفَضَّلُ؟ وَمَاذَا يَعْنِي لَكَ؟', task: 'Explain a colour and its meaning.', help: 'لَوْنِي المُفَضَّلُ … لِأَنَّهُ يُذَكِّرُنِي بِـ…', model: 'لَوْنِيَ المُفَضَّلُ الأَخْضَرُ، لِأَنَّهُ يُذَكِّرُنِي بِحَدِيقَةِ جَدِّي، وَيَعْنِي لِيَ الهُدُوءَ وَالحَيَاةَ.', modelEn: 'My favourite colour is green, because it reminds me of my grandfather’s garden; it means calm and life to me.' },
        { ex: 'هَلْ لِلْأَلْوَانِ المَعْنَى نَفْسُهُ فِي كُلِّ الثَّقَافَاتِ؟', task: 'Compare two cultures with an example.', help: 'لَا، فَمَثَلًا … بَيْنَمَا …', model: 'لَا، فَمَثَلًا يَلْبَسُ النَّاسُ الأَبْيَضَ فِي الأَعْرَاسِ فِي أُورُوبَّا، بَيْنَمَا يَرْتَبِطُ الأَبْيَضُ بِالحُزْنِ فِي بَعْضِ بُلْدَانِ آسْيَا.', modelEn: 'No — in Europe people wear white at weddings, whereas in some Asian countries white is linked to mourning.' },
        { ex: 'صِفْ تَصْمِيمًا عَمِلْتَهُ.', task: 'Describe a past project precisely.', help: 'صَمَّمْتُ … بِاللَّوْنِ … وَاخْتَرْتُ …', model: 'صَمَّمْتُ مُلْصَقًا لِحَمْلَةٍ بِيئِيَّةٍ، وَاخْتَرْتُ خَلْفِيَّةً خَضْرَاءَ غَامِقَةً وَكِتَابَةً صَفْرَاءَ لِتَلْفِتَ النَّظَرَ.', modelEn: 'I designed a poster for an environmental campaign, choosing a dark green background and yellow lettering to catch the eye.' },
        { ex: 'أَلَيْسَتِ الأَلْوَانُ مَسْأَلَةَ ذَوْقٍ فَقَطْ؟', task: 'Concede and give your view.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الذَّوْقَ شَخْصِيٌّ، غَيْرَ أَنَّ الدِّرَاسَاتِ تُظْهِرُ أَنَّ الأَزْرَقَ يُهَدِّئُ، وَأَنَّ الأَحْمَرَ يَزِيدُ الشَّهِيَّةَ.', modelEn: 'It is true taste is personal, but studies show blue calms and red increases appetite.' },
        { unexpected: true, ex: 'لَوْ صَمَّمْتَ عَلَمًا لِمَدْرَسَتِكَ، كَيْفَ يَكُونُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ صَمَّمْتُ …، لَجَعَلْتُهُ …', model: 'لَوْ صَمَّمْتُ عَلَمًا لِمَدْرَسَتِي، لَجَعَلْتُهُ أَزْرَقَ وَذَهَبِيًّا، وَلَوَضَعْتُ فِي وَسَطِهِ كِتَابًا مَفْتُوحًا.', modelEn: 'If I designed a flag for my school, I would make it blue and gold, with an open book in the middle.' },
      ],
      girl: 'لَوْنُكِ · لَكِ · عَمِلْتِهِ · صَمَّمْتِ · مَدْرَسَتِكِ',
      notes: 'Stretch: colours as nouns (al-akhḍar), baynamā, a purpose (li-talfita), a concession with anna … wa-anna, law … la- with accusative colours (azraqa wa-dhahabiyyan).',
      modelFoot: 'Stretch: meanings, a cultural comparison (baynamā), a precise past description, ṣaḥīḥun anna … ghayra anna and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'أَلْوَانِي', aim: 'one full sentence per question',
      qs: [
        { q: 'مَا لَوْنُكَ المُفَضَّلُ؟', en: 'What is your favourite colour?', start: 'لَوْنِيَ المُفَضَّلُ …', model: 'لَوْنِيَ المُفَضَّلُ الأَزْرَقُ، مِثْلَ لَوْنِ البَحْرِ.', modelEn: 'My favourite colour is blue, like the sea.' },
        { q: 'مَا لَوْنُ حَقِيبَتِكَ المَدْرَسِيَّةِ؟', en: 'What colour is your school bag?', start: 'حَقِيبَتِي …', model: 'حَقِيبَتِي سَوْدَاءُ وَرَمَادِيَّةٌ.', modelEn: 'My bag is black and grey.' },
        { q: 'مَا لَوْنُ الزِّيِّ المَدْرَسِيِّ؟', en: 'What colour is the school uniform?', start: 'القَمِيصُ … وَالبِنْطَالُ …', model: 'القَمِيصُ أَبْيَضُ، وَالبِنْطَالُ أَزْرَقُ غَامِقٌ.', modelEn: 'The shirt is white, and the trousers are dark blue.' },
        { q: 'صِفْ سَيَّارَةَ أُسْرَتِكَ.', en: 'Describe your family car.', start: 'سَيَّارَتُنَا … ', model: 'سَيَّارَتُنَا كَبِيرَةٌ وَحَمْرَاءُ، وَهِيَ قَدِيمَةٌ قَلِيلًا.', modelEn: 'Our car is big and red, and a little old.' },
        { q: 'مَا الأَلْوَانُ فِي عَلَمِ بَلَدِكَ؟', en: 'What colours are in your country’s flag?', start: 'فِي العَلَمِ … وَ…', model: 'فِي العَلَمِ البِرِيطَانِيِّ أَحْمَرُ وَأَبْيَضُ وَأَزْرَقُ.', modelEn: 'The British flag has red, white and blue.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a colour that agrees = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'الوَصْفُ الدَّقِيقُ', aim: 'two or three sentences, with shade, pattern or material',
      qs: [
        { q: 'صِفْ مَلَابِسَكَ اليَوْمَ بِدِقَّةٍ.', en: 'Describe your clothes today precisely.', start: 'أَلْبَسُ … وَ… مَصْنُوعٌ مِنْ …', model: 'أَلْبَسُ قَمِيصًا أَزْرَقَ فَاتِحًا مُخَطَّطًا، وَبِنْطَالًا رَمَادِيًّا مَصْنُوعًا مِنَ القُطْنِ.', modelEn: 'I’m wearing a light blue striped shirt and grey cotton trousers.' },
        { q: 'صِفْ مَكَانًا تُحِبُّهُ بِأَلْوَانِهِ.', en: 'Describe a place you love through its colours.', start: 'أُحِبُّ … فِيهِ … وَ…', model: 'أُحِبُّ سُوقَ التَّوَابِلِ فِي القُدْسِ، فِيهِ أَكْيَاسٌ حَمْرَاءُ وَصَفْرَاءُ وَبُرْتُقَالِيَّةٌ، وَرَائِحَتُهُ رَائِعَةٌ.', modelEn: 'I love the spice market in Jerusalem — red, yellow and orange sacks, and a wonderful smell.' },
        { q: 'هَلْ تَخْتَارُ مَلَابِسَكَ بِسَبَبِ اللَّوْنِ؟', en: 'Do you choose clothes for their colour?', start: 'نَعَمْ، أَخْتَارُ … لِأَنَّ … / لَا، …', model: 'نَعَمْ، أَخْتَارُ الأَلْوَانَ الغَامِقَةَ فِي الشِّتَاءِ، وَالأَلْوَانَ الفَاتِحَةَ فِي الصَّيْفِ، لِأَنَّهَا أَبْرَدُ.', modelEn: 'Yes, I choose dark colours in winter and light colours in summer, because they are cooler.' },
        { q: 'صِفْ هَدِيَّةً جَمِيلَةً أَخَذْتَهَا.', en: 'Describe a lovely present you received.', start: 'أَخَذْتُ … لَوْنُهَا … وَهِيَ مَصْنُوعَةٌ مِنْ …', model: 'أَخَذْتُ مِنْ خَالَتِي سَاعَةً فِضِّيَّةً، وَهِيَ مَصْنُوعَةٌ مِنَ المَعْدِنِ، وَفِيهَا أَرْقَامٌ عَرَبِيَّةٌ.', modelEn: 'My aunt gave me a silver watch, made of metal, with Arabic numerals.' },
        { q: 'بِأَيِّ لَوْنٍ سَتَدْهَنُ غُرْفَتَكَ فِي المُسْتَقْبَلِ؟', en: 'What colour will you paint your room in future?', start: 'سَأَدْهَنُهَا بِـ… لِأَنَّ …', model: 'سَأَدْهَنُهَا بِاللَّوْنِ الأَصْفَرِ الفَاتِحِ، لِأَنَّهُ يَجْعَلُ الغُرْفَةَ مُشْرِقَةً حَتَّى فِي الشِّتَاءِ.', modelEn: 'I will paint it light yellow, because it makes the room bright even in winter.' },
      ],
      foot: 'Develop: two or three sentences — colours with shades, patterns and materials, plural agreement, a reason and the future.',
      modelFoot: 'Precise description + reason + agreement = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الأَلْوَانُ وَالحَيَاةُ', aim: 'a developed answer: opinion, comparison, concession and a conditional',
      qs: [
        { q: 'هَلْ تُؤَثِّرُ الأَلْوَانُ فِي مَشَاعِرِنَا؟', en: 'Do colours affect our feelings?', start: 'نَعَمْ، فَالأَزْرَقُ مَثَلًا … أَمَّا …', model: 'نَعَمْ، فَالأَزْرَقُ مَثَلًا يُشْعِرُنِي بِالهُدُوءِ، أَمَّا الأَحْمَرُ فَيُشْعِرُنِي بِالحَمَاسِ، وَلِذٰلِكَ تَخْتَارُهُ المَطَاعِمُ.', modelEn: 'Yes — blue, for example, calms me, whereas red excites me, which is why restaurants choose it.' },
        { q: 'لِمَاذَا تُعْتَبَرُ الدِّقَّةُ فِي الوَصْفِ مُهِمَّةً؟', en: 'Why is accurate description important?', start: 'لِأَنَّ … مَثَلًا عِنْدَمَا …', model: 'لِأَنَّ الوَصْفَ الدَّقِيقَ يُسَاعِدُ الآخَرِينَ، مَثَلًا عِنْدَمَا يَضِيعُ طِفْلٌ، تَحْتَاجُ الشُّرْطَةُ إِلَى لَوْنِ مَلَابِسِهِ بِالضَّبْطِ.', modelEn: 'Because precise description helps others — when a child is lost, for example, the police need the exact colour of his clothes.' },
        { q: 'هَلِ المُدُنُ الحَدِيثَةُ أَقَلُّ أَلْوَانًا مِنَ القَدِيمَةِ؟', en: 'Are modern cities less colourful than old ones?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ المَبَانِيَ الحَدِيثَةَ رَمَادِيَّةٌ فِي الغَالِبِ، غَيْرَ أَنَّ بَعْضَ المُدُنِ تَرْسُمُ لَوْحَاتٍ مُلَوَّنَةً عَلَى جُدْرَانِهَا.', modelEn: 'It is true modern buildings are mostly grey, but some cities paint colourful murals on their walls.' },
        { q: 'صِفْ مَنْظَرًا طَبِيعِيًّا لَا تَنْسَاهُ.', en: 'Describe a natural scene you will never forget.', start: 'رَأَيْتُ … كَانَتِ السَّمَاءُ … وَ…', model: 'رَأَيْتُ غُرُوبَ الشَّمْسِ فِي الصَّحْرَاءِ؛ كَانَتِ السَّمَاءُ حَمْرَاءَ ثُمَّ بَنَفْسَجِيَّةً، وَالرِّمَالُ ذَهَبِيَّةً.', modelEn: 'I saw a desert sunset: the sky was red, then purple, and the sand golden.' },
        { q: 'لَوْ عِشْتَ فِي عَالَمٍ بِلَا أَلْوَانٍ، مَاذَا تَفْتَقِدُ أَكْثَرَ؟', en: 'If you lived in a world without colour, what would you miss most?', start: 'لَوْ عِشْتُ …، لَافْتَقَدْتُ …', model: 'لَوْ عِشْتُ فِي عَالَمٍ بِلَا أَلْوَانٍ، لَافْتَقَدْتُ خُضْرَةَ الأَشْجَارِ فِي الرَّبِيعِ أَكْثَرَ مِنْ أَيِّ شَيْءٍ.', modelEn: 'If I lived in a world without colour, I would miss the green of the trees in spring more than anything.' },
      ],
      foot: 'Stretch: ammā … fa-, examples, a concession, a past description with kāna + accusative colours, and law … la-.',
      modelFoot: 'Stretch: colours as nouns, ammā … fa-, a concession, kānat as-samāʾu ḥamrāʾa, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I used colours that agree: aḥmar (m.) / ḥamrāʾ (f.).' },
    { route: 'core', text: 'I described size and colour in full sentences.' },
    { route: 'develop', text: 'I added a shade, pattern or material.' },
    { route: 'develop', text: 'I used feminine singular for non-human plurals.' },
    { route: 'stretch', text: 'I compared, conceded or used law … la-.' },
  ],
};
speak.RP[0].tasks[1].help = 'هِيَ زَرْقَاءُ / حَمْرَاءُ …';
speak.RP[1].tasks[1].help = 'أُرِيدُ لَوْنًا أَخْضَرَ فَاتِحًا / …';
speak.RP[1].tasks[2].help = 'البَابُ أَبْيَضُ، لِأَنَّ …';
speak.RP[3].tasks[0].help = 'لَوْنِيَ المُفَضَّلُ … لِأَنَّهُ يُذَكِّرُنِي …';
speak.RP[3].tasks[2].help = 'صَمَّمْتُ … وَاخْتَرْتُ خَلْفِيَّةً …';
speak.CONV[1].qs[4].start = 'سَأَدْهَنُهَا بِاللَّوْنِ … لِأَنَّ …';
speak.CONV[2].qs[0].start = 'نَعَمْ، فَالأَزْرَقُ مَثَلًا … أَمَّا الأَحْمَرُ فَيُشْعِرُنِي …';

const Q2_CORE = `مَرْحَبًا يَا جُودُ،
كَيْفَ حَالُكِ؟ أَمْسِ كَانَ عِيدُ مِيلَادِي، وَأَخَذْتُ هَدَايَا جَمِيلَةً. أَعْطَتْنِي أُمِّي فُسْتَانًا أَزْرَقَ فَاتِحًا، وَهُوَ مَصْنُوعٌ مِنَ الحَرِيرِ. أَعْطَانِي أَبِي حَقِيبَةً سَوْدَاءَ صَغِيرَةً. أَمَّا أُخْتِي فَأَعْطَتْنِي أَسَاوِرَ مُلَوَّنَةً: حَمْرَاءَ وَخَضْرَاءَ وَصَفْرَاءَ. أُحِبُّ الفُسْتَانَ كَثِيرًا، لِأَنَّ لَوْنَهُ هَادِئٌ وَجَمِيلٌ. فِي المَسَاءِ أَكَلْنَا كَعْكَةً بَيْضَاءَ وَوَرْدِيَّةً. فِي نِهَايَةِ الأُسْبُوعِ سَأَلْبَسُ الفُسْتَانَ فِي حَفْلَةِ خَالَتِي.
مَعَ السَّلَامَةِ،
مَرْيَمُ`;
const Q2_FULL = `عَزِيزَتِي جُودُ،
تَحِيَّةً طَيِّبَةً، وَبَعْدُ، فَقَدِ احْتَفَلْنَا أَمْسِ بِعِيدِ مِيلَادِي الخَامِسَ عَشَرَ، وَكَانَتِ الهَدَايَا أَجْمَلَ مِمَّا تَوَقَّعْتُ. أَعْطَتْنِي أُمِّي فُسْتَانًا أَزْرَقَ فَاتِحًا مَصْنُوعًا مِنَ الحَرِيرِ، عَلَيْهِ زُهُورٌ بَيْضَاءُ صَغِيرَةٌ، أَمَّا أَبِي فَاشْتَرَى لِي حَقِيبَةً جِلْدِيَّةً سَوْدَاءَ تَتَّسِعُ لِكُتُبِي كُلِّهَا. وَصَنَعَتْ لِي أُخْتِي الصَّغِيرَةُ بِيَدِهَا أَسَاوِرَ مُلَوَّنَةً، فَتَأَثَّرْتُ كَثِيرًا. أَمَّا الكَعْكَةُ فَكَانَتْ وَرْدِيَّةً بِطَبَقَةٍ مِنَ الشُّوكُولَاتَةِ الغَامِقَةِ. صَحِيحٌ أَنِّي لَا أَلْبَسُ الأَزْرَقَ عَادَةً، غَيْرَ أَنَّ هٰذَا الفُسْتَانَ غَيَّرَ رَأْيِي. سَأَلْبَسُهُ فِي حَفْلَةِ خَالَتِي يَوْمَ الجُمُعَةِ، وَسَأُرْسِلُ لَكِ صُورَةً!
مَعَ مَحَبَّتِي،
مَرْيَمُ`;
const Q3A_CORE = `مَدِينَتِي مَلِيئَةٌ بِالأَلْوَانِ. فِي وَسَطِ المَدِينَةِ سُوقٌ كَبِيرٌ، فِيهِ فَوَاكِهُ حَمْرَاءُ وَصَفْرَاءُ وَخَضْرَاءُ. البُيُوتُ القَدِيمَةُ بَيْضَاءُ، وَأَبْوَابُهَا زَرْقَاءُ. السَّمَاءُ زَرْقَاءُ صَافِيَةٌ فِي الصَّيْفِ، لٰكِنَّهَا رَمَادِيَّةٌ فِي الشِّتَاءِ. الحَافِلَاتُ فِي مَدِينَتِي حَمْرَاءُ، وَسَيَّارَاتُ الأُجْرَةِ سَوْدَاءُ.
لَوْنِيَ المُفَضَّلُ هُوَ الأَخْضَرُ، لِأَنَّهُ لَوْنُ الطَّبِيعَةِ. غُرْفَتِي خَضْرَاءُ فَاتِحَةٌ، وَسَتَائِرُهَا بَيْضَاءُ، وَسَرِيرِي بُنِّيٌّ. أَلْبَسُ الأَلْوَانَ الغَامِقَةَ فِي الشِّتَاءِ، وَالأَلْوَانَ الفَاتِحَةَ فِي الصَّيْفِ، لِأَنَّهَا أَبْرَدُ. حَقِيبَتِيَ المَدْرَسِيَّةُ خَضْرَاءُ أَيْضًا!
فِي الرَّبِيعِ المَاضِي زُرْتُ حَدِيقَةً كَبِيرَةً مَعَ أُسْرَتِي. رَأَيْنَا أَزْهَارًا حَمْرَاءَ وَوَرْدِيَّةً وَبَنَفْسَجِيَّةً، وَأَشْجَارًا خَضْرَاءَ عَالِيَةً. أَخَذْتُ صُوَرًا كَثِيرَةً، وَرَسَمْتُ لَوْحَةً لِلْحَدِيقَةِ فِي البَيْتِ. عَلَّقَتْ أُمِّي اللَّوْحَةَ فِي غُرْفَةِ الجُلُوسِ، وَكُنْتُ سَعِيدًا جِدًّا.
فِي رَأْيِي، الأَلْوَانُ تَجْعَلُ الحَيَاةَ جَمِيلَةً، وَتُغَيِّرُ مَشَاعِرَنَا. فِي المُسْتَقْبَلِ أُرِيدُ أَنْ أَدْرُسَ الفَنَّ، وَسَأَرْسُمُ لَوْحَاتٍ مُلَوَّنَةً لِمَدِينَتِي.`;
const Q3A_FULL = `لَوْ سَأَلْتَنِي عَنْ لَوْنِ طُفُولَتِي، لَقُلْتُ إِنَّهُ أَزْرَقُ: أَزْرَقُ البَحْرِ الَّذِي كُنْتُ أَرَاهُ مِنْ نَافِذَةِ بَيْتِ جَدِّي فِي الإِسْكَنْدَرِيَّةِ، وَأَزْرَقُ البَابِ الخَشَبِيِّ القَدِيمِ الَّذِي كَانَتْ جَدَّتِي تَدْهَنُهُ كُلَّ صَيْفٍ.
اليَوْمَ أَسْكُنُ فِي مَدِينَةٍ بِرِيطَانِيَّةٍ أَغْلَبُ مَبَانِيهَا مِنَ الطُّوبِ الأَحْمَرِ، وَسَمَاؤُهَا رَمَادِيَّةٌ مُعْظَمَ أَيَّامِ السَّنَةِ، وَلِذٰلِكَ أُحَاوِلُ أَنْ أُدْخِلَ الأَلْوَانَ إِلَى حَيَاتِي: فِي مَلَابِسِي، وَفِي دَفَاتِرِي، وَفِي الأَزْهَارِ الصَّفْرَاءِ عَلَى نَافِذَتِي، وَحَتَّى فِي جَوَارِبِي المُخَطَّطَةِ الَّتِي يَضْحَكُ مِنْهَا أَصْدِقَائِي.
فِي الصَّيْفِ المَاضِي رَجَعْتُ إِلَى الإِسْكَنْدَرِيَّةِ بَعْدَ غِيَابٍ طَوِيلٍ، فَوَجَدْتُ البَابَ قَدْ أَصْبَحَ بُنِّيًّا بَاهِتًا، لِأَنَّ جَدَّتِي لَمْ تَعُدْ تَسْتَطِيعُ أَنْ تَدْهَنَهُ. فَاشْتَرَيْتُ عُلْبَةَ دِهَانٍ زَرْقَاءَ، وَقَضَيْتُ يَوْمًا كَامِلًا أُعِيدُ إِلَيْهِ لَوْنَهُ، بَيْنَمَا كَانَتْ جَدَّتِي تَجْلِسُ بِجَانِبِي وَتَحْكِي لِي قِصَصَ البَيْتِ.
صَحِيحٌ أَنَّ الأَلْوَانَ تَبْدُو شَيْئًا بَسِيطًا، غَيْرَ أَنَّهَا تَحْمِلُ ذِكْرَيَاتِنَا وَمَشَاعِرَنَا. وَفِي المُسْتَقْبَلِ، عِنْدَمَا يَكُونُ لِي بَيْتٌ، سَأَدْهَنُ بَابَهُ بِالأَزْرَقِ نَفْسِهِ، لِيَبْقَى بَيْتُ جَدَّتِي مَعِي دَائِمًا.`;
const Q3B_FULL = `نَعِيشُ فِي عَالَمٍ مِنَ الأَلْوَانِ، لٰكِنَّنَا نَادِرًا مَا نُفَكِّرُ فِي تَأْثِيرِهَا فِينَا. فَالشَّرِكَاتُ تَخْتَارُ أَلْوَانَ مُنْتَجَاتِهَا بِعِنَايَةٍ: الأَحْمَرُ لِلْمَطَاعِمِ السَّرِيعَةِ لِأَنَّهُ يَفْتَحُ الشَّهِيَّةَ، وَالأَزْرَقُ لِلْبُنُوكِ لِأَنَّهُ يُوحِي بِالثِّقَةِ، وَالأَخْضَرُ لِلْمُنْتَجَاتِ الطَّبِيعِيَّةِ، وَالأَسْوَدُ لِلسِّلَعِ الفَاخِرَةِ الغَالِيَةِ.
وَتَخْتَلِفُ مَعَانِي الأَلْوَانِ بَيْنَ الثَّقَافَاتِ أَيْضًا؛ فَالأَبْيَضُ لَوْنُ الفَرَحِ فِي الأَعْرَاسِ الغَرْبِيَّةِ، بَيْنَمَا يَرْتَبِطُ بِالحُزْنِ فِي بَعْضِ ثَقَافَاتِ آسْيَا، أَمَّا الأَخْضَرُ فَلَهُ مَكَانَةٌ خَاصَّةٌ فِي الثَّقَافَةِ الإِسْلَامِيَّةِ.
لَاحَظْتُ تَأْثِيرَ الأَلْوَانِ بِنَفْسِي عِنْدَمَا دَهَنَتْ مَدْرَسَتُنَا مَكْتَبَتَهَا فِي السَّنَةِ المَاضِيَةِ؛ كَانَتْ جُدْرَانُهَا رَمَادِيَّةً كَئِيبَةً، فَأَصْبَحَتْ خَضْرَاءَ فَاتِحَةً وَصَفْرَاءَ. وَبَعْدَ شَهْرٍ وَاحِدٍ تَضَاعَفَ عَدَدُ الطُّلَّابِ الَّذِينَ يَقْرَؤُونَ فِيهَا فِي الاسْتِرَاحَةِ، وَقَالَتْ أَمِينَةُ المَكْتَبَةِ إِنَّ المَكَانَ صَارَ أَهْدَأَ وَأَجْمَلَ.
صَحِيحٌ أَنَّ تَأْثِيرَ الأَلْوَانِ يَخْتَلِفُ مِنْ شَخْصٍ إِلَى آخَرَ، غَيْرَ أَنَّهُ حَقِيقِيٌّ وَلَا يُمْكِنُ تَجَاهُلُهُ. وَلَوِ اهْتَمَّتِ المَدَارِسُ وَالمُسْتَشْفَيَاتُ بِأَلْوَانِ جُدْرَانِهَا، لَشَعَرَ النَّاسُ فِيهَا بِرَاحَةٍ أَكْبَرَ، وَلَتَحَسَّنَتْ حَالَتُهُمُ النَّفْسِيَّةُ كَثِيرًا.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a lost-property form, write an email describing birthday presents precisely, and write an extended piece about colours in your life or about the power of colour.',
  lift: [
    { ar: 'فُسْتَانٌ أَزْرَقُ فَاتِحٌ مَصْنُوعٌ مِنَ الحَرِيرِ', en: 'a light blue silk dress' },
    { ar: 'حَقِيبَةٌ جِلْدِيَّةٌ سَوْدَاءُ', en: 'a black leather bag' },
    { ar: 'عَلَيْهِ زُهُورٌ بَيْضَاءُ صَغِيرَةٌ', en: 'with small white flowers on it' },
  ],
  checkTip: 'Check: afʿal for masculine, faʿlāʾ for feminine and for non-human plurals (azhār ḥamrāʾ); no tanwīn on these colours; regular colours take -iyy / -iyya; colours after kāna / laysa / a verb go accusative (kāna azraqa).',
  FORM: {
    title: 'Lost-property report', ar: 'تَقْرِيرٌ عَنْ شَيْءٍ مَفْقُودٍ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Your name', model: 'مَرْيَمُ حَسَنٌ', modelEn: 'Maryam Hassan' },
      { core: true, ar: 'الشَّيْءُ المَفْقُودُ', en: 'The lost item', model: 'حَقِيبَةُ ظَهْرٍ', modelEn: 'a rucksack' },
      { core: true, ar: 'اللَّوْنُ', en: 'Colour', model: 'زَرْقَاءُ غَامِقَةٌ', modelEn: 'dark blue' },
      { core: true, ar: 'الحَجْمُ', en: 'Size', model: 'كَبِيرَةٌ', modelEn: 'large' },
      { core: true, ar: 'مَصْنُوعٌ مِنْ …', en: 'Made of …', model: 'القُمَاشِ', modelEn: 'fabric' },
      { core: true, ar: 'أَيْنَ وَمَتَى فَقَدْتَهُ؟', en: 'Where and when you lost it', model: 'فِي الحَافِلَةِ، صَبَاحَ الإِثْنَيْنِ', modelEn: 'on the bus, Monday morning' },
      { ar: 'عَلَامَةٌ مُمَيِّزَةٌ', en: 'A distinguishing mark', model: 'عَلَيْهَا نُجُومٌ صَفْرَاءُ صَغِيرَةٌ', modelEn: 'small yellow stars on it' },
      { ar: 'جُمْلَةٌ: مَاذَا كَانَ فِيهَا؟', en: 'ONE sentence: what was inside', model: 'كَانَ فِيهَا دَفْتَرٌ أَحْمَرُ وَمِقْلَمَةٌ خَضْرَاءُ وَهَاتِفِي.', modelEn: 'Inside were a red notebook, a green pencil case and my phone.' },
    ],
    foot: 'One word or a short phrase for each box — every colour must agree with the item.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 7: nujūm (non-human pl.) → ṣafrāʾ. Box 8: masculine daftar aḥmar, feminine miqlama khaḍrāʾ.',
  },
  Q2: {
    short: 'an email describing presents', title: 'Question 2: my birthday presents', ar: 'رِسَالَةٌ عَنْ هَدَايَايَ',
    task: 'You had your birthday yesterday. Write an email in Arabic to your friend of about 80–90 words. You must include: • how you celebrated • the presents you received — describe them precisely (colour, material) • your favourite present, and why • when you will use or wear it.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Colours that agree with each noun.', 'A material (maṣnūʿ min …).', 'A past AND a future sentence.'],
    phrases: [['أَعْطَتْنِي أُمِّي …', 'my mum gave me …'], ['… مَصْنُوعٌ مِنَ …', '… made of …'], ['أُحِبُّ … لِأَنَّ لَوْنَهُ …', 'I love … because its colour …'], ['سَأَلْبَسُهُ فِي …', 'I will wear it at …']],
    rubric: [
      ['task', 'كَانَ أَمْسِ عِيدُ مِيلَادِكِ. اكْتُبِي رِسَالَةً إِلَى صَدِيقَتِكِ (٨٠–٩٠ كَلِمَةً).', 'It was your birthday yesterday: write to your friend (80–90 words).'],
      ['1', 'كَيْفَ احْتَفَلْتِ؟', 'How you celebrated'],
      ['2', 'صِفِي الهَدَايَا بِدِقَّةٍ (اللَّوْنُ، المَادَّةُ).', 'Describe the presents precisely'],
      ['3', 'مَا هَدِيَّتُكِ المُفَضَّلَةُ؟ وَلِمَاذَا؟', 'Your favourite present, and why'],
      ['4', 'مَتَى سَتَسْتَعْمِلِينَهَا أَوْ تَلْبَسِينَهَا؟', 'When you will use or wear it'],
    ],
    qwords: 'كَيْفَ (how) · صِفِي (describe — to a girl) · مَا (what) · لِمَاذَا (why) · مَتَى (when) — bullet 2 asks for COLOUR and MATERIAL',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكِ؟', 'Hello …, how are you?'],
      ['1', 'أَمْسِ كَانَ عِيدُ مِيلَادِي، وَ ______ .', 'Yesterday was my birthday, and …'],
      ['2', 'أَعْطَتْنِي أُمِّي ______ ______ ، مَصْنُوعًا مِنَ ______ .', 'Mum gave me a … …, made of …'],
      ['3', 'أُحِبُّ ______ كَثِيرًا، لِأَنَّ ______ .', 'I love … a lot, because …'],
      ['4', 'سَأَلْبَسُهُ / سَأَسْتَعْمِلُهَا فِي ______ .', 'I will wear / use it at …'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Joud, how are you? Yesterday was my birthday and I got lovely presents. Mum gave me a light blue dress made of silk. Dad gave me a small black bag. As for my sister, she gave me colourful bracelets: red, green and yellow. I love the dress a lot, because its colour is calm and pretty. In the evening we ate a white and pink cake. At the weekend I will wear the dress at my aunt’s party. Goodbye, Maryam.”',
      find: ['فُسْتَانًا أَزْرَقَ فَاتِحًا', 'حَقِيبَةً سَوْدَاءَ', 'أَسَاوِرَ … حَمْرَاءَ', 'سَأَلْبَسُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Joud, greetings. Yesterday we celebrated my fifteenth birthday, and the presents were lovelier than I expected. Mum gave me a light blue silk dress with small white flowers on it; as for Dad, he bought me a black leather bag big enough for all my books. My little sister made me colourful bracelets by hand, which really touched me. As for the cake, it was pink with a layer of dark chocolate. It is true I don’t usually wear blue, but this dress changed my mind. I will wear it at my aunt’s party on Friday and send you a photo! With love, Maryam.”',
      find: ['أَجْمَلَ مِمَّا تَوَقَّعْتُ', 'زُهُورٌ بَيْضَاءُ', 'حَقِيبَةً جِلْدِيَّةً سَوْدَاءَ', 'صَحِيحٌ أَنِّي … غَيْرَ أَنَّ'],
    },
  },
  Q3: {
    a: { title: 'الأَلْوَانُ فِي حَيَاتِي', en: 'Colours in my life', bullets: 'صِفْ أَلْوَانَ مَدِينَتِكَ أَوْ بَيْتِكَ · لَوْنُكَ المُفَضَّلُ وَلِمَاذَا · ذِكْرَى مُرْتَبِطَةٌ بِلَوْنٍ · رَأْيُكَ وَخُطَطُكَ', bulletsEn: 'Describe the colours of your town or home · your favourite colour and why · a memory linked to a colour · your opinion and plans' },
    b: { title: 'قُوَّةُ الأَلْوَانِ', en: 'The power of colour', bullets: 'كَيْفَ تَسْتَعْمِلُ الشَّرِكَاتُ الأَلْوَانَ؟ · الأَلْوَانُ فِي الثَّقَافَاتِ المُخْتَلِفَةِ · تَجْرِبَةٌ لَاحَظْتَ فِيهَا تَأْثِيرَ لَوْنٍ · رَأْيُكَ وَاقْتِرَاحُكَ', bulletsEn: 'How companies use colour · colours in different cultures · an experience where you noticed a colour’s effect · your opinion and suggestion' },
    plan: [
      'Describe — places and things with colours that agree; non-human plurals with faʿlāʾ.',
      'Favourite colour — li-annahu …, yudhakkirunī bi- …; shades and materials.',
      'Past memory — kāna / kānat + accusative colour; fa- for results.',
      'Opinion + future — fī raʾyī …, sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'البُيُوتُ بَيْضَاءُ، وَأَبْوَابُهَا زَرْقَاءُ.', en: 'present: the houses are white, and their doors are blue.' },
      { ar: 'كَانَتِ السَّمَاءُ حَمْرَاءَ وَقْتَ الغُرُوبِ.', en: 'past: the sky was red at sunset.' },
      { ar: 'سَأَدْهَنُ البَابَ بِاللَّوْنِ الأَزْرَقِ.', en: 'future: I will paint the door blue.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'My town is full of colour: a big market of red, yellow and green fruit; old white houses with blue doors; clear blue summer sky but grey in winter; red buses and black taxis → favourite colour green (nature): a light green room, white curtains, brown bed; dark colours in winter, light in summer (cooler); a green school bag too! → last spring a big park with my family: red, pink and purple flowers, tall green trees; lots of photos and a painting at home, which Mum hung in the living room — I was very happy → colours make life beautiful and change our feelings; I want to study art and will paint colourful pictures of my town.', find: ['فَوَاكِهُ حَمْرَاءُ', 'أَبْوَابُهَا زَرْقَاءُ', 'خَضْرَاءُ فَاتِحَةٌ', 'سَأَرْسُمُ'], notes: 'Core model: non-human plurals with faʿlāʾ, colour + shade, regular colours (bunniyy), a past paragraph with accusative colours, an opinion and future.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'If you asked me the colour of my childhood, I would say blue: the sea I saw from my grandfather’s window in Alexandria, and the old wooden door my grandmother painted every summer → today I live in a British town of red brick under a mostly grey sky, so I bring colour into my life — clothes, notebooks, yellow flowers on my window, even striped socks my friends laugh at → last summer I went back after a long absence and found the door faded brown because Grandma can no longer paint it; I bought a tin of blue paint and spent a whole day restoring its colour, while Grandma sat beside me telling the house’s stories → it is true colours seem simple, but they carry our memories and feelings; when I have a home, I’ll paint its door the same blue “so that my grandmother’s house stays with me always”.', find: ['لَوْ سَأَلْتَنِي … لَقُلْتُ', 'الَّذِي كَانَتْ جَدَّتِي تَدْهَنُهُ', 'قَدْ أَصْبَحَ بُنِّيًّا بَاهِتًا', 'لَمْ تَعُدْ تَسْتَطِيعُ'], notes: 'Full-mark model: law … la-, relative clauses with kāna + present, an idāfa of colour (azraqu l-baḥr), aṣbaḥa + accusative colour, lam taʿud, a concession and li- of purpose.' },
      { which: 'ب', level: 'Full', subtitle: 'the power of colour', text: Q3B_FULL, en: 'We rarely think about colour’s effect: companies choose carefully — red for fast food (appetite), blue for banks (trust), green for natural products, black for luxury goods → meanings differ between cultures: white is joy at Western weddings, whereas it is linked to mourning in parts of Asia; as for green, it has a special place in Islamic culture → I saw it myself when my school repainted its library last year: from gloomy grey to light green and yellow; within a month the number of students reading there at break doubled, and the librarian said it became calmer and nicer → it is true the effect varies from person to person, but it is real and can’t be ignored; “if schools and hospitals cared about their wall colours, people there would feel much more at ease, and their wellbeing would improve a lot”.', find: ['نَادِرًا مَا نُفَكِّرُ', 'بَيْنَمَا يَرْتَبِطُ', 'أَمَّا الأَخْضَرُ فَلَهُ', 'لَوِ اهْتَمَّتْ … لَشَعَرَ'], notes: 'Full-mark model for the Stretch title: nādiran mā, colours as nouns with reasons, baynamā, ammā … fa-, kānat + accusative colour, alladhīna, a concession and a conditional.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every colour agrees with its item (m. / f.).' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: a shade or material, and faʿlāʾ with a non-human plural.' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: accusative colours after kāna, a concession or law … la-.' },
  ],
};

module.exports = { speak, write };
