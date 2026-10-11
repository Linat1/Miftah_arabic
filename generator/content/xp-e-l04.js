'use strict';
/* Exam-practice data · TE-L04 · Customs, Etiquette and Hospitality (imperatives m. / f. / pl. and negative lā taf'al; advice: yanbaghī, min al-afḍal an, ʿalayka an; comparison: akthar … min, afʿal min). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'E', n: 4, short: 'Customs, Etiquette and Hospitality', arShort: 'العَادَاتُ وَآدَابُ الضِّيَافَةِ', fileTitle: 'Customs_Etiquette_and_Hospitality', title: 'Customs, Etiquette and Hospitality', ar: 'العَادَاتُ وَالآدَابُ وَالضِّيَافَةُ', icon: 'FaMugHot', grammar: 'imperatives m. / f. / pl. and the negative imperative (lā takhlaʿ / lā takhlaʿī); advice (yanbaghī an, min al-afḍal an, ʿalayka an); comparison (akramu min, akthar … min, bi-ʿaksi)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: behave and speak politely as a guest, explain the customs of your culture, give advice with imperatives (اِخْلَعْ · لَا تَنْسَ · قَدِّمِي) and advice phrases (يَنْبَغِي أَنْ · مِنَ الأَفْضَلِ أَنْ), and compare customs between cultures (أَكْرَمُ مِنْ · أَكْثَرُ … مِنْ).',
  words: [
    w(1, 'ضَيْفٌ', 'a guest (m.)', [['f.', 'ضَيْفَةٌ'], ['pl.', 'ضُيُوفٌ']], { tag: 'noun' }),
    w(2, 'مُضِيفٌ', 'a host (m.)', [['f.', 'مُضِيفَةٌ'], ['hospitality', 'الضِّيَافَةُ']], { tag: 'noun' }),
    w(3, 'كَرِيمٌ', 'generous (m.)', [['f.', 'كَرِيمَةٌ'], ['more generous', 'أَكْرَمُ مِنْ']], { tag: 'adjective' }),
    w(4, 'آدَابٌ', 'manners / etiquette', [['polite (m. · f.)', 'مُؤَدَّبٌ · مُؤَدَّبَةٌ'], ['rude', 'قَلِيلُ الأَدَبِ']], { tag: 'noun' }),
    w(5, 'اِخْلَعْ حِذَاءَكَ', 'take off your shoes (m.)', [['f.', 'اِخْلَعِي حِذَاءَكِ'], ['pl.', 'اِخْلَعُوا أَحْذِيَتَكُمْ']], { tag: 'imperative' }),
    w(6, 'لَا تَنْسَ', 'don’t forget (m.)', [['f.', 'لَا تَنْسَيْ'], ['pl.', 'لَا تَنْسَوْا']], { tag: 'negative imp.' }),
    w(7, 'يَنْبَغِي أَنْ …', 'one should …', [['it is better to', 'مِنَ الأَفْضَلِ أَنْ'], ['you must', 'عَلَيْكَ أَنْ']], { tag: 'advice' }),
    w(8, 'تَفَضَّلْ', 'please, go ahead / come in (m.)', [['f.', 'تَفَضَّلِي'], ['pl.', 'تَفَضَّلُوا']], { tag: 'courtesy' }),
    w(9, 'سُفْرَةٌ دَائِمَةٌ', 'may your table always be full', [['the reply', 'دَامَتْ أَيَّامُكَ'], ['bon appétit', 'بِالهَنَاءِ وَالشِّفَاءِ']], { tag: 'courtesy' }),
    w(10, 'أُصَافِحُ', 'I shake hands', [['I greet', 'أُحَيِّي'], ['I kiss (cheeks)', 'أُقَبِّلُ']], { tag: 'verb' }),
    w(11, 'عَيْبٌ', 'shameful / not done', [['it is polite to', 'مِنَ الأَدَبِ أَنْ'], ['it is normal', 'مِنَ العَادِيِّ']], { tag: 'judgement' }),
    w(12, 'بِعَكْسِ', 'unlike / contrary to', [['similar to', 'مِثْلُ'], ['whereas', 'بَيْنَمَا']], { tag: 'comparison' }),
  ],
  words1: { eyebrow: 'Language bank · imperatives and advice', title: 'Do this · don’t do that', ar: 'الأَمْرُ وَالنَّصِيحَةُ', notes: 'LANGUAGE BANK (2 min) — the imperative changes with who you address: اِخْلَعْ (m.) · اِخْلَعِي (f.) · اِخْلَعُوا (pl.). The negative uses lā + jussive: لَا تَأْكُلْ · لَا تَأْكُلِي · لَا تَأْكُلُوا. Softer advice: يَنْبَغِي أَنْ / مِنَ الأَفْضَلِ أَنْ + subjunctive.' },
  words2: { eyebrow: 'Language bank · hospitality and comparison', title: 'Polite phrases · comparing customs', ar: 'عِبَارَاتُ المُجَامَلَةِ وَالمُقَارَنَةُ', notes: 'LANGUAGE BANK (2 min) — guest phrases: تَفَضَّلْ · سُفْرَةٌ دَائِمَةٌ → دَامَتْ أَيَّامُكَ · بِالهَنَاءِ وَالشِّفَاءِ. Compare: أَكْرَمُ مِنْ (afʿal min), أَكْثَرُ رَسْمِيَّةً مِنْ (akthar + noun in acc.), بِعَكْسِ / بَيْنَمَا.' },
  checkCore: 'gave advice with a correct imperative (m. or f.)',
  checkDevelop: 'compared two cultures with afʿal min or akthar … min',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'dinner at an Arab friend’s home', title: 'Role play A — A guest at dinner', ar: 'ضَيْفٌ عَلَى العَشَاءِ', you: 'a guest', them: 'your friend’s mother (the host)',
      tasks: [
        { core: true, ex: 'أَهْلًا وَسَهْلًا! تَفَضَّلْ.', task: 'Greet politely and thank her.', help: 'شُكْرًا … ، بَيْتُكُمْ …', model: 'شُكْرًا جَزِيلًا يَا خَالَةُ، بَيْتُكُمْ جَمِيلٌ جِدًّا.', modelEn: 'Thank you so much, auntie — your home is lovely.' },
        { core: true, ex: 'تَفَضَّلْ، اجْلِسْ هُنَا.', task: 'Ask if you should take off your shoes.', help: 'هَلْ أَخْلَعُ …؟', model: 'هَلْ أَخْلَعُ حِذَائِي؟', modelEn: 'Should I take off my shoes?' },
        { core: true, ex: 'نَعَمْ، مِنْ فَضْلِكَ. هٰذَا هُوَ المَنْسَفُ.', task: 'Praise the food.', help: 'الطَّعَامُ … جِدًّا!', model: 'الطَّعَامُ لَذِيذٌ جِدًّا! سُفْرَةٌ دَائِمَةٌ.', modelEn: 'The food is delicious! May your table always be full.' },
        { core: true, ex: 'دَامَتْ أَيَّامُكَ. خُذْ أَكْثَرَ!', task: 'Accept a little more politely.', help: 'قَلِيلًا فَقَطْ، …', model: 'قَلِيلًا فَقَطْ، شُكْرًا. أَنَا شَبْعَانُ.', modelEn: 'Just a little, thanks. I’m full.' },
        { core: true, unexpected: true, ex: 'هَلْ تَأْكُلُونَ مَعًا فِي بَيْتِكُمْ أَيْضًا؟', task: 'Answer the unexpected question.', help: 'نَعَمْ، نَأْكُلُ … فِي …', model: 'نَعَمْ، نَأْكُلُ مَعًا فِي المَسَاءِ، لٰكِنْ عَلَى طَاوِلَةٍ.', modelEn: 'Yes, we eat together in the evening, but at a table.' },
      ],
      girl: 'تَفَضَّلِي · اجْلِسِي · مِنْ فَضْلِكِ · خُذِي · شَبْعَانَةُ',
      notes: 'Core: courtesy phrases (yā khāla, sufra dāʾima → dāmat ayyāmuk), imperatives heard (tafaḍḍal, ijlis, khudh), hal akhlaʿu …?, qalīlan faqaṭ + shabʿān / shabʿāna.',
    },
    {
      id: 'B', level: 'Core+', setting: 'a school exchange', title: 'Role play B — Advising an exchange student', ar: 'نَصَائِحُ لِطَالِبٍ زَائِرٍ', you: 'a British student', them: 'an exchange student from Oman, new to Britain',
      tasks: [
        { core: true, ex: 'سَأَزُورُ عَائِلَةَ صَدِيقِي الإِنْجْلِيزِيِّ. بِمَاذَا تَنْصَحُنِي؟', task: 'Give one piece of advice (imperative).', help: 'اِذْهَبْ … / لَا …', model: 'اِذْهَبْ فِي الوَقْتِ بِالضَّبْطِ، وَلَا تَتَأَخَّرْ.', modelEn: 'Go exactly on time, and don’t be late.' },
        { core: true, ex: 'هَلْ أَحْمِلُ هَدِيَّةً؟', task: 'Advise on a gift.', help: 'نَعَمْ، اِحْمِلْ …', model: 'نَعَمْ، اِحْمِلْ عُلْبَةَ شُوكُولَاتَةٍ أَوْ وُرُودًا.', modelEn: 'Yes, take a box of chocolates or flowers.' },
        { ex: 'وَعَلَى المَائِدَةِ؟', task: 'Advise with yanbaghī + a negative imperative.', help: 'يَنْبَغِي أَنْ … وَلَا …', model: 'يَنْبَغِي أَنْ تَقُولَ "مِنْ فَضْلِكَ" وَ"شُكْرًا" كَثِيرًا، وَلَا تَبْدَأْ بِالأَكْلِ قَبْلَ الجَمِيعِ.', modelEn: 'Say “please” and “thank you” a lot, and don’t start eating before everyone.' },
        { ex: 'فِي عُمَانَ نَأْكُلُ بِأَيْدِينَا أَحْيَانًا.', task: 'ASK a question comparing customs.', help: 'هَلِ الضِّيَافَةُ فِي عُمَانَ … أَكْثَرُ … مِنْ …؟', model: 'وَهَلِ الضِّيَافَةُ فِي عُمَانَ أَكْثَرُ رَسْمِيَّةً مِنْ هُنَا؟', modelEn: 'And is hospitality in Oman more formal than here?' },
        { unexpected: true, ex: 'نَعَمْ، نُقَدِّمُ القَهْوَةَ وَالتَّمْرَ لِكُلِّ ضَيْفٍ. وَمَا العَادَةُ الَّتِي تُحِبُّهَا هُنَا؟', task: 'Answer the unexpected question (opinion + reason).', help: 'أُحِبُّ … لِأَنَّ …', model: 'أُحِبُّ عَادَةَ شُرْبِ الشَّايِ فِي العَصْرِ، لِأَنَّهَا تَجْمَعُ النَّاسَ لِلْحَدِيثِ.', modelEn: 'Afternoon tea — it brings people together to talk.' },
      ],
      girl: '(to a female student) اِذْهَبِي · لَا تَتَأَخَّرِي · اِحْمِلِي · تَقُولِي · لَا تَبْدَئِي',
      notes: 'Core+: masculine imperatives (idhhab, iḥmil) and lā + jussive (lā tataʾakhkhar, lā tabdaʾ), yanbaghī an taqūla, the CANDIDATE asks with akthar rasmiyyatan min, a relative clause + li-annahā.',
    },
    {
      id: 'C', level: 'Develop', setting: 'a school magazine interview', title: 'Role play C — Hospitality in two cultures', ar: 'الضِّيَافَةُ فِي ثَقَافَتَيْنِ', you: 'a student with Arab and British heritage', them: 'the editor of the school magazine',
      tasks: [
        { ex: 'كَيْفَ يَسْتَقْبِلُ العَرَبُ الضُّيُوفَ؟', task: 'Describe customs with examples.', help: 'يُرَحِّبُونَ … ثُمَّ يُقَدِّمُونَ … مَثَلًا …', model: 'يُرَحِّبُونَ بِهِمْ بِحَرَارَةٍ، ثُمَّ يُقَدِّمُونَ القَهْوَةَ وَالتَّمْرَ فَوْرًا؛ مَثَلًا، جَدِّي لَا يَسْأَلُ الضَّيْفَ "هَلْ تُرِيدُ شَيْئًا؟"، بَلْ يُحْضِرُهُ مُبَاشَرَةً.', modelEn: 'Warm welcome, then coffee and dates straight away — my grandpa never asks a guest “want anything?”, he just brings it.' },
        { ex: 'وَفِي بَرِيطَانْيَا؟', task: 'Compare with bayna-mā / bi-ʿaksi.', help: 'بَيْنَمَا فِي بَرِيطَانْيَا … بِعَكْسِ …', model: 'بَيْنَمَا فِي بَرِيطَانْيَا يَسْأَلُ المُضِيفُ الضَّيْفَ عَمَّا يُرِيدُ، بِعَكْسِ العَرَبِ الَّذِينَ يَعْتَبِرُونَ ذٰلِكَ قِلَّةَ كَرَمٍ.', modelEn: 'In Britain the host asks what the guest wants — unlike Arabs, who see that as a lack of generosity.' },
        { ex: 'أَيُّهُمَا أَكْثَرُ رَسْمِيَّةً؟', task: 'Compare with afʿal min and a reason.', help: 'أَظُنُّ أَنَّ … أَكْثَرُ … مِنْ … لِأَنَّ …', model: 'أَظُنُّ أَنَّ الزِّيَارَاتِ البَرِيطَانِيَّةَ أَكْثَرُ تَنْظِيمًا، لِأَنَّهَا بِمَوْعِدٍ، أَمَّا العَرَبِيَّةُ فَأَكْثَرُ عَفْوِيَّةً وَدِفْئًا.', modelEn: 'British visits are more organised — by appointment — while Arab ones are more spontaneous and warm.' },
        { ex: 'هَلْ حَدَثَ مَوْقِفٌ مُحْرِجٌ بِسَبَبِ اخْتِلَافِ العَادَاتِ؟', task: 'Narrate a past incident.', help: 'نَعَمْ، عِنْدَمَا … كَانَ … فَـ…', model: 'نَعَمْ، عِنْدَمَا زَارَتْنَا صَدِيقَتِي الإِنْجْلِيزِيَّةُ، قَالَتْ "لَا، شُكْرًا" مَرَّةً وَاحِدَةً، فَصَدَّقَتْهَا أُمِّي، وَظَلَّتْ جَائِعَةً طُولَ السَّهْرَةِ!', modelEn: 'When my English friend visited, she said “no thanks” once, mum believed her, and she stayed hungry all evening!' },
        { unexpected: true, ex: 'مَا نَصِيحَتُكَ لِقُرَّائِنَا إِذَا زَارُوا بَيْتًا عَرَبِيًّا؟', task: 'Answer the unexpected question (plural imperatives).', help: 'اِقْبَلُوا … وَلَا … وَمِنَ الأَفْضَلِ أَنْ …', model: 'اِقْبَلُوا القَهْوَةَ دَائِمًا، وَلَا تَرْفُضُوا الطَّعَامَ مِنَ المَرَّةِ الأُولَى، وَمِنَ الأَفْضَلِ أَنْ تَمْدَحُوا الطَّبْخَ.', modelEn: 'Always accept the coffee, don’t refuse food the first time, and it’s best to praise the cooking.' },
      ],
      girl: 'نَصِيحَتُكِ · (examiner asks a girl the same; answers unchanged)',
      notes: 'Develop: present-tense customs + mathalan + lā … bal, baynamā / bi-ʿaksi + alladhīna, akthar + tamyīz (tanẓīman, ʿafwiyyatan), a past anecdote with fa- result and ẓallat, plural imperatives (iqbalū, lā tarfuḍū) and min al-afḍal an.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a training session', title: 'Role play D — Training hotel staff', ar: 'تَدْرِيبُ مُوَظَّفِي الفُنْدُقِ', you: 'a young cultural adviser', them: 'the manager of a London hotel expecting Gulf visitors',
      tasks: [
        { ex: 'مَا أَهَمُّ شَيْءٍ يَجِبُ أَنْ يَعْرِفَهُ مُوَظَّفُونَا؟', task: 'Give formal advice (yanbaghī, ʿalaykum an).', help: 'يَنْبَغِي أَنْ … ؛ وَعَلَيْكُمْ أَنْ …', model: 'يَنْبَغِي أَنْ يُدْرِكُوا أَنَّ الضِّيَافَةَ عِنْدَ العَرَبِ شَرَفٌ؛ لِذٰلِكَ عَلَيْكُمْ أَنْ تُرَحِّبُوا بِالضُّيُوفِ بِحَرَارَةٍ، وَأَنْ تُقَدِّمُوا لَهُمُ القَهْوَةَ عِنْدَ وُصُولِهِمْ.', modelEn: 'They should realise hospitality is an honour for Arabs, so welcome guests warmly and offer coffee on arrival.' },
        { ex: 'وَمَا الأَخْطَاءُ الَّتِي يَجِبُ تَجَنُّبُهَا؟', task: 'List don’ts with negative imperatives.', help: 'لَا تُـ… وَلَا … ؛ لِأَنَّ …', model: 'لَا تَمُدُّوا اليَدَ لِمُصَافَحَةِ امْرَأَةٍ قَبْلَ أَنْ تَمُدَّ يَدَهَا، وَلَا تُقَدِّمُوا الطَّعَامَ بِاليَدِ اليُسْرَى، لِأَنَّ ذٰلِكَ يُعْتَبَرُ قِلَّةَ احْتِرَامٍ.', modelEn: 'Don’t offer a handshake to a woman before she offers hers, and don’t serve with the left hand — it’s seen as disrespectful.' },
        { ex: 'هَلْ يَخْتَلِفُ الضُّيُوفُ الخَلِيجِيُّونَ عَنِ الأُورُوبِّيِّينَ كَثِيرًا؟', task: 'Compare carefully, avoiding stereotypes.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ بَعْضَهُمْ يُفَضِّلُ خِدْمَةً أَكْثَرَ خُصُوصِيَّةً، غَيْرَ أَنَّ التَّعْمِيمَ خَطَأٌ؛ فَكُلُّ ضَيْفٍ فَرْدٌ، وَأَفْضَلُ طَرِيقَةٍ هِيَ أَنْ نَسْأَلَهُ بِلُطْفٍ.', modelEn: 'Some prefer more private service, but generalising is wrong: every guest is an individual — best to ask politely.' },
        { ex: 'كَيْفَ تَعَلَّمْتَ هٰذِهِ الآدَابَ؟', task: 'Narrate how you learnt (past + result).', help: 'تَعَلَّمْتُهَا مِنْ … ؛ فَكُنْتُ … وَهٰكَذَا …', model: 'تَعَلَّمْتُهَا مِنْ جَدَّتِي؛ فَكُنْتُ أُسَاعِدُهَا فِي اسْتِقْبَالِ الضُّيُوفِ فِي رَمَضَانَ، وَهٰكَذَا عَرَفْتُ أَنَّ الابْتِسَامَةَ أَهَمُّ مِنْ أَغْلَى طَعَامٍ.', modelEn: 'From my grandmother — I helped her receive guests in Ramadan and learnt a smile matters more than the costliest food.' },
        { unexpected: true, ex: 'لَوْ أَخْطَأَ مُوَظَّفٌ مَعَ ضَيْفٍ، مَاذَا يَفْعَلُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ أَخْطَأَ، لَنَصَحْتُهُ بِأَنْ …', model: 'لَوْ أَخْطَأَ، لَنَصَحْتُهُ بِأَنْ يَعْتَذِرَ فَوْرًا بِصِدْقٍ؛ فَالاعْتِذَارُ الصَّادِقُ فِي ثَقَافَتِنَا أَقْوَى مِنْ أَيِّ خَطَأٍ.', modelEn: 'I’d advise them to apologise sincerely at once — in our culture a sincere apology is stronger than any mistake.' },
      ],
      girl: 'تَعَلَّمْتِ · (answers otherwise unchanged)',
      notes: 'Stretch: formal advice (yanbaghī an yudrikū, ʿalaykum an), plural negative imperatives + qabla an, the passive yuʿtabaru, akthar khuṣūṣiyyatan, a concession against stereotypes, kuntu + present … wa-hākadhā, aḥammu min aghlā, law … la-naṣaḥtuhu bi-an.',
      modelFoot: 'Stretch: professional advice — formal register, negative imperatives, a careful comparison and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'الضِّيَافَةُ وَالعَادَاتُ', aim: 'one full sentence per question',
      qs: [
        { q: 'مَاذَا تُقَدِّمُ أُسْرَتُكَ لِلضُّيُوفِ؟', en: 'What does your family offer guests?', start: 'نُقَدِّمُ …', model: 'نُقَدِّمُ الشَّايَ وَالحَلَوِيَّاتِ.', modelEn: 'Tea and sweets.' },
        { q: 'هَلْ تَخْلَعُونَ الأَحْذِيَةَ فِي البَيْتِ؟', en: 'Do you take shoes off at home?', start: 'نَعَمْ / لَا، …', model: 'نَعَمْ، نَخْلَعُهَا دَائِمًا عِنْدَ البَابِ.', modelEn: 'Yes, always at the door.' },
        { q: 'كَيْفَ تُحَيِّي جَدَّكَ؟', en: 'How do you greet your grandfather?', start: 'أُقَبِّلُ … / أُصَافِحُ …', model: 'أُقَبِّلُ يَدَهُ وَأَقُولُ: "السَّلَامُ عَلَيْكُمْ".', modelEn: 'I kiss his hand and say “as-salāmu ʿalaykum”.' },
        { q: 'أَعْطِنِي نَصِيحَةً لِضَيْفٍ.', en: 'Give me a piece of advice for a guest.', start: 'اِ… / لَا تَـ…', model: 'اِمْدَحِ الطَّعَامَ، وَلَا تَتَأَخَّرْ.', modelEn: 'Praise the food, and don’t be late.' },
        { q: 'هَلْ تُحِبُّ أَنْ تَسْتَقْبِلَ الضُّيُوفَ؟', en: 'Do you like having guests?', start: 'نَعَمْ، أُحِبُّ … لِأَنَّ …', model: 'نَعَمْ، أُحِبُّ ذٰلِكَ، لِأَنَّ البَيْتَ يُصْبِحُ مُمْتِعًا.', modelEn: 'Yes — the house becomes fun.' },
      ],
      foot: 'Core: one full sentence for every question — check the imperative (m. اِخْلَعْ · f. اِخْلَعِي). If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a correct imperative = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'آدَابُ الضِّيَافَةِ', aim: 'two or three sentences, with advice and a comparison',
      qs: [
        { q: 'صِفْ زِيَارَةً عَائِلِيَّةً فِي ثَقَافَتِكَ.', en: 'Describe a family visit in your culture.', start: 'عِنْدَمَا نَزُورُ … نَحْمِلُ … ثُمَّ …', model: 'عِنْدَمَا نَزُورُ أَقَارِبَنَا نَحْمِلُ الحَلَوِيَّاتِ، ثُمَّ نَجْلِسُ سَاعَاتٍ، وَلَا نَخْرُجُ قَبْلَ أَنْ نَأْكُلَ.', modelEn: 'We bring sweets, sit for hours, and never leave before eating.' },
        { q: 'مَا الفَرْقُ بَيْنَ الضِّيَافَةِ هُنَا وَفِي بَلَدِ أَجْدَادِكَ؟', en: 'What’s the difference between hospitality here and in your grandparents’ country?', start: 'هُنَاكَ … أَكْثَرُ … بَيْنَمَا هُنَا …', model: 'هُنَاكَ الزِّيَارَاتُ أَكْثَرُ عَدَدًا وَبِلَا مَوْعِدٍ، بَيْنَمَا هُنَا يَتَّصِلُ النَّاسُ قَبْلَ الزِّيَارَةِ بِأَيَّامٍ.', modelEn: 'There, visits are more frequent and unannounced; here people call days ahead.' },
        { q: 'مَا النَّصَائِحُ الَّتِي تُعْطِيهَا لِضَيْفٍ أَجْنَبِيٍّ؟', en: 'What advice would you give a foreign guest?', start: 'أَوَّلًا … وَيَنْبَغِي أَنْ …', model: 'أَوَّلًا، اِقْبَلِ القَهْوَةَ؛ وَيَنْبَغِي أَنْ تَأْكُلَ بِيَدِكَ اليُمْنَى، وَلَا تَرْفُضِ الطَّعَامَ بِسُرْعَةٍ.', modelEn: 'Accept the coffee; eat with your right hand; don’t refuse food quickly.' },
        { q: 'هَلْ تَغَيَّرَتْ عَادَاتُ الضِّيَافَةِ فِي أُسْرَتِكَ؟', en: 'Have hospitality customs changed in your family?', start: 'كَانَتْ جَدَّتِي … أَمَّا أُمِّي فَـ…', model: 'كَانَتْ جَدَّتِي تَطْبُخُ كُلَّ شَيْءٍ بِيَدِهَا، أَمَّا أُمِّي فَتَطْلُبُ بَعْضَ الأَطْبَاقِ مِنَ المَطْعَمِ، لِأَنَّهَا تَعْمَلُ.', modelEn: 'Grandma cooked everything by hand; mum orders some dishes because she works.' },
        { q: 'كَيْفَ سَتَسْتَقْبِلُ ضُيُوفَكَ فِي المُسْتَقْبَلِ؟', en: 'How will you welcome guests in future?', start: 'سَأُرَحِّبُ … وَسَأُقَدِّمُ …', model: 'سَأُرَحِّبُ بِهِمْ كَمَا يَفْعَلُ جَدِّي، وَسَأُقَدِّمُ لَهُمُ القَهْوَةَ العَرَبِيَّةَ وَالكَعْكَ الإِنْجْلِيزِيَّ مَعًا!', modelEn: 'Like grandpa — with Arabic coffee and English cake together!' },
      ],
      foot: 'Develop: two or three sentences — an imperative or yanbaghī, plus a comparison (akthar … min / baynamā).',
      modelFoot: 'Advice + comparison + a time frame = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الآدَابُ بَيْنَ الأَمْسِ وَاليَوْمِ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ مَا زَالَتِ الضِّيَافَةُ التَّقْلِيدِيَّةُ مُهِمَّةً؟', en: 'Is traditional hospitality still important?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الحَيَاةَ أَصْبَحَتْ أَسْرَعَ، غَيْرَ أَنَّ الضِّيَافَةَ هِيَ مَا يَجْعَلُ الغَرِيبَ يَشْعُرُ بِأَنَّهُ فِي بَيْتِهِ؛ لِذٰلِكَ هِيَ أَهَمُّ مِنْ أَيِّ وَقْتٍ مَضَى.', modelEn: 'Life is faster, but hospitality makes a stranger feel at home — so it matters more than ever.' },
        { q: 'هَلْ آدَابُ المَائِدَةِ مُهِمَّةٌ أَمْ قَدِيمَةٌ؟', en: 'Are table manners important or old-fashioned?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، بَعْضُهَا شَكْلِيٌّ، كَتَرْتِيبِ السَّكَاكِينِ، وَمِنْ نَاحِيَةٍ أُخْرَى، أَغْلَبُهَا يُعَبِّرُ عَنِ الاحْتِرَامِ، كَانْتِظَارِ الكِبَارِ قَبْلَ الأَكْلِ.', modelEn: 'Some are superficial, like cutlery order; most express respect, like waiting for elders before eating.' },
        { q: 'كَيْفَ نَتَجَنَّبُ سُوءَ الفَهْمِ بَيْنَ الثَّقَافَاتِ؟', en: 'How do we avoid cross-cultural misunderstanding?', start: 'يَنْبَغِي أَنْ … ؛ فَإِذَا … فَـ…', model: 'يَنْبَغِي أَنْ نَسْأَلَ قَبْلَ أَنْ نَحْكُمَ؛ فَإِذَا رَفَضَ ضَيْفٌ الطَّعَامَ مَثَلًا، فَرُبَّمَا يَصُومُ أَوْ لَا يَأْكُلُ اللَّحْمَ، وَلَيْسَ قَلِيلَ أَدَبٍ.', modelEn: 'Ask before judging: if a guest refuses food, maybe they’re fasting or vegetarian — not rude.' },
        { q: 'مَنْ أَكْرَمُ شَخْصٍ عَرَفْتَهُ؟', en: 'Who is the most generous person you have known?', start: 'أَكْرَمُ شَخْصٍ عَرَفْتُهُ … ؛ فَقَدْ …', model: 'أَكْرَمُ شَخْصٍ عَرَفْتُهُ جَارُنَا العَجُوزُ؛ فَقَدْ كَانَ يَطْبُخُ لِكُلِّ عَائِلَةٍ جَدِيدَةٍ فِي الشَّارِعِ، مَعَ أَنَّهُ كَانَ فَقِيرًا.', modelEn: 'Our elderly neighbour: he cooked for every new family on the street, although he was poor.' },
        { q: 'لَوْ اسْتَقْبَلْتَ ضَيْفًا مِنْ ثَقَافَةٍ لَا تَعْرِفُهَا، مَاذَا تَفْعَلُ؟', en: 'If you hosted a guest from a culture you don’t know, what would you do?', start: 'لَوِ اسْتَقْبَلْتُهُ، لَـ…', model: 'لَوِ اسْتَقْبَلْتُهُ، لَقَرَأْتُ عَنْ عَادَاتِهِ أَوَّلًا، وَلَسَأَلْتُهُ عَمَّا لَا يَأْكُلُهُ، وَلَطَلَبْتُ مِنْهُ أَنْ يُعَلِّمَنِي تَحِيَّةً بِلُغَتِهِ.', modelEn: 'I’d read about their customs, ask what they don’t eat, and ask them to teach me a greeting in their language.' },
      ],
      foot: 'Stretch: a concession, a balanced view with examples, advice with idhā … fa-, a superlative and law … la-.',
      modelFoot: 'Stretch: aḥammu min ayyi waqtin maḍā, ka- + examples, qabla an, akramu shakhṣin, maʿa annahu and law … la- ×3 — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I used polite guest phrases (tafaḍḍal, sufra dāʾima).' },
    { route: 'core', text: 'I gave advice with an imperative.' },
    { route: 'develop', text: 'I used a negative imperative (lā + jussive).' },
    { route: 'develop', text: 'I compared customs (akthar … min, baynamā, bi-ʿaksi).' },
    { route: 'stretch', text: 'I avoided stereotypes with a concession and used law … la-.' },
  ],
};
speak.RP[2].tasks[3].help = 'نَعَمْ، عِنْدَمَا … قَالَتْ … فَصَدَّقَتْهَا …';
speak.RP[3].tasks[1].help = 'لَا تَمُدُّوا … وَلَا تُقَدِّمُوا … لِأَنَّ …';
speak.RP[3].tasks[3].help = 'تَعَلَّمْتُهَا مِنْ … ؛ فَكُنْتُ … وَهٰكَذَا …';
speak.RP[3].tasks[4].help = 'لَوْ أَخْطَأَ، لَنَصَحْتُهُ بِأَنْ …';
speak.CONV[0].qs[3].start = 'اِمْدَحْ … / لَا تَتَأَخَّرْ …';
speak.CONV[1].qs[3].start = 'كَانَتْ جَدَّتِي … أَمَّا أُمِّي فَتَطْلُبُ …';
speak.CONV[2].qs[2].start = 'يَنْبَغِي أَنْ … ؛ فَإِذَا … فَرُبَّمَا …';
speak.CONV[2].qs[4].start = 'لَوِ اسْتَقْبَلْتُهُ، لَقَرَأْتُ …';

const Q2_CORE = `مَرْحَبًا يَا هَانَا،
كَيْفَ حَالُكِ؟ أَنَا سَعِيدَةٌ جِدًّا، لِأَنَّكِ سَتَزُورِينَ بَيْتَ جَدِّي فِي عَمَّانَ مَعَنَا فِي الصَّيْفِ! جَدِّي وَجَدَّتِي كَرِيمَانِ جِدًّا، وَهُمَا يُحِبَّانِ الضُّيُوفَ. هٰذِهِ بَعْضُ النَّصَائِحِ: اِخْلَعِي حِذَاءَكِ عِنْدَ البَابِ، وَكُلِي بِيَدِكِ اليُمْنَى. لَا تَرْفُضِي القَهْوَةَ، وَقُولِي "سُفْرَةٌ دَائِمَةٌ" بَعْدَ الأَكْلِ. فِي الأُرْدُنِّ يَأْكُلُ النَّاسُ أَكْثَرَ مِنْ هُنَا، لِذٰلِكَ لَا تَأْكُلِي كَثِيرًا قَبْلَ الزِّيَارَةِ! أَظُنُّ أَنَّ الضِّيَافَةَ هُنَاكَ أَجْمَلُ، لِأَنَّهَا دَافِئَةٌ جِدًّا. سَنَطْبُخُ المَنْسَفَ مَعًا. هَلْ عِنْدَكِ أَسْئِلَةٌ؟
مَعَ السَّلَامَةِ،
أَمِينَةُ`;
const Q2_FULL = `عَزِيزَتِي هَانَا،
مَا أَجْمَلَ خَبَرَ زِيَارَتِكِ لِبَيْتِ جَدِّي فِي عَمَّانَ هٰذَا الصَّيْفَ! وَلِأَنَّ عَادَاتِ الضِّيَافَةِ هُنَاكَ تَخْتَلِفُ عَنْ عَادَاتِكُمْ، إِلَيْكِ بَعْضَ النَّصَائِحِ. اِخْلَعِي حِذَاءَكِ عِنْدَ البَابِ، وَصَافِحِي جَدَّتِي أَوَّلًا، فَهِيَ الأَكْبَرُ سِنًّا. وَإِذَا قَدَّمُوا لَكِ القَهْوَةَ، فَاقْبَلِيهَا بِيَدِكِ اليُمْنَى، وَهُزِّي الفِنْجَانَ عِنْدَمَا تَكْتَفِينَ. أَمَّا الطَّعَامُ، فَلَا تَقُولِي "لَا، شُكْرًا" مِنَ المَرَّةِ الأُولَى، لِأَنَّهُمْ سَيُصِرُّونَ ثَلَاثَ مَرَّاتٍ عَلَى الأَقَلِّ! صَحِيحٌ أَنَّ هٰذَا قَدْ يَبْدُو غَرِيبًا، غَيْرَ أَنَّ الضِّيَافَةَ عِنْدَنَا أَكْثَرُ دِفْئًا وَأَقَلُّ رَسْمِيَّةً مِمَّا تَعَوَّدْتِ عَلَيْهِ. وَإِذَا أَرَدْتِ، فَسَأُعَلِّمُكِ عِبَارَاتِ المُجَامَلَةِ قَبْلَ السَّفَرِ. مَا رَأْيُكِ؟
بِمَحَبَّةٍ،
أَمِينَةُ`;
const Q3A_CORE = `فِي ثَقَافَتِي العَرَبِيَّةِ، الضَّيْفُ مُهِمٌّ جِدًّا. عِنْدَمَا يَزُورُنَا ضَيْفٌ، نُرَحِّبُ بِهِ بِحَرَارَةٍ وَنَقُولُ: "أَهْلًا وَسَهْلًا، تَفَضَّلْ". ثُمَّ نُقَدِّمُ لَهُ القَهْوَةَ العَرَبِيَّةَ وَالتَّمْرَ، وَبَعْدَ ذٰلِكَ الطَّعَامَ.
فِي بَيْتِ جَدِّي فِي عَمَّانَ، نَجْلِسُ عَلَى الأَرْضِ وَنَأْكُلُ المَنْسَفَ مَعًا. جَدَّتِي تَطْبُخُ كَثِيرًا جِدًّا، لِأَنَّهَا تَقُولُ إِنَّ الطَّعَامَ القَلِيلَ عَيْبٌ. نَخْلَعُ الأَحْذِيَةَ عِنْدَ البَابِ، وَنَأْكُلُ بِاليَدِ اليُمْنَى، وَهٰذَا مِنَ الأَدَبِ.
فِي بَرِيطَانْيَا، الضِّيَافَةُ مُخْتَلِفَةٌ. هُنَا يَتَّصِلُ النَّاسُ قَبْلَ الزِّيَارَةِ، وَالزِّيَارَاتُ أَقْصَرُ مِنْ زِيَارَاتِنَا. أَظُنُّ أَنَّ الضِّيَافَةَ العَرَبِيَّةَ أَكْثَرُ دِفْئًا، لٰكِنَّ الضِّيَافَةَ البَرِيطَانِيَّةَ أَكْثَرُ تَنْظِيمًا. فِي السَّنَةِ المَاضِيَةِ زَارَتْنَا صَدِيقَتِي الإِنْجْلِيزِيَّةُ، وَأَحَبَّتْ طَعَامَنَا كَثِيرًا، وَطَلَبَتْ وَصْفَةَ المَنْسَفِ مِنْ أُمِّي.
نَصِيحَتِي لِأَيِّ ضَيْفٍ: اِمْدَحِ الطَّعَامَ، وَلَا تَرْفُضِ القَهْوَةَ. فِي المُسْتَقْبَلِ سَأَسْتَقْبِلُ ضُيُوفِي مِثْلَ جَدِّي، لِأَنَّ الكَرَمَ جُزْءٌ مِنْ هُوِيَّتِي.`;
const Q3A_FULL = `يَقُولُ جَدِّي دَائِمًا: "الضَّيْفُ إِذَا دَخَلَ بَيْتَنَا صَارَ صَاحِبَهُ". وَقَدْ فَهِمْتُ مَعْنَى هٰذِهِ الجُمْلَةِ حِينَ رَأَيْتُهُ يُعْطِي غُرْفَتَهُ لِضَيْفٍ غَرِيبٍ، وَيَنَامُ هُوَ فِي الصَّالَةِ عَلَى فِرَاشٍ بَسِيطٍ!
فَالضِّيَافَةُ فِي ثَقَافَتِنَا لَيْسَتْ مُجَرَّدَ طَعَامٍ، بَلْ هِيَ مَجْمُوعَةٌ مِنَ الآدَابِ: أَنْ تُرَحِّبَ بِالضَّيْفِ قَبْلَ أَنْ يَطْرُقَ البَابَ، وَأَنْ تُقَدِّمَ لَهُ القَهْوَةَ بِيَمِينِكَ، وَأَلَّا تَسْأَلَهُ عَنْ سَبَبِ زِيَارَتِهِ إِلَّا بَعْدَ ثَلَاثَةِ أَيَّامٍ، كَمَا كَانَ يَفْعَلُ البَدْوُ قَدِيمًا.
وَحِينَ أُقَارِنُهَا بِالضِّيَافَةِ البَرِيطَانِيَّةِ، أَجِدُ أَنَّ هٰذِهِ أَكْثَرُ تَنْظِيمًا وَاحْتِرَامًا لِخُصُوصِيَّةِ الآخَرِينَ، بَيْنَمَا تِلْكَ أَكْثَرُ دِفْئًا وَعَفْوِيَّةً. وَلَا أَرَى أَنَّ إِحْدَاهُمَا أَفْضَلُ مِنَ الأُخْرَى؛ فَلِكُلٍّ مِنْهُمَا جَمَالُهَا، وَلِكُلٍّ مِنْهُمَا مَا يُمْكِنُ أَنْ نَتَعَلَّمَهُ.
وَلِذٰلِكَ أَنْصَحُ كُلَّ مَنْ يَزُورُ بَيْتًا عَرَبِيًّا: اِقْبَلِ القَهْوَةَ، وَلَا تَرْفُضِ الطَّعَامَ مِنَ المَرَّةِ الأُولَى، وَلَا تَنْسَ أَنْ تَمْدَحَ الطَّبْخَ وَتَشْكُرَ المُضِيفَ عِنْدَ الخُرُوجِ. وَلَوْ طَبَّقَ النَّاسُ أَجْمَلَ مَا فِي الثَّقَافَتَيْنِ، لَأَصْبَحَ كُلُّ ضَيْفٍ صَاحِبَ بَيْتٍ حَقًّا.`;
const Q3B_FULL = `فِي زَمَنِ الوَجَبَاتِ السَّرِيعَةِ وَالرَّسَائِلِ القَصِيرَةِ، صَارَ كَثِيرٌ مِنَ الشَّبَابِ يَرَوْنَ أَنَّ آدَابَ الضِّيَافَةِ التَّقْلِيدِيَّةَ مُتْعِبَةٌ وَقَدِيمَةٌ. فَهَلْ مَا زَالَتْ هٰذِهِ الآدَابُ مُهِمَّةً فِي عَالَمِنَا اليَوْمَ؟
مِنْ نَاحِيَةٍ، يَصْعُبُ عَلَى العَائِلَاتِ الَّتِي يَعْمَلُ فِيهَا الوَالِدَانِ أَنْ تَطْبُخَ وَلَائِمَ كَبِيرَةً، أَوْ أَنْ تَسْتَقْبِلَ ضُيُوفًا بِلَا مَوْعِدٍ. وَمِنْ نَاحِيَةٍ أُخْرَى، فَإِنَّ جَوْهَرَ الضِّيَافَةِ لَيْسَ فِي كَثْرَةِ الطَّعَامِ، بَلْ فِي الاحْتِرَامِ وَالاهْتِمَامِ بِالآخَرِ، وَهٰذَا لَا يَحْتَاجُ إِلَى وَقْتٍ أَوْ مَالٍ.
وَقَدْ تَعَلَّمْتُ هٰذَا الدَّرْسَ عِنْدَمَا وَصَلَتْ إِلَى شَارِعِنَا عَائِلَةٌ سُورِيَّةٌ لَاجِئَةٌ؛ فَلَمْ نُقَدِّمْ لَهُمْ وَلِيمَةً، بَلْ كُوبَ شَايٍ وَابْتِسَامَةً وَمُسَاعَدَةً فِي تَسْجِيلِ الأَطْفَالِ فِي المَدْرَسَةِ. وَبَعْدَ سَنَةٍ، قَالَتْ لَنَا الأُمُّ إِنَّ ذٰلِكَ الكُوبَ كَانَ أَوَّلَ شَيْءٍ جَعَلَهَا تَشْعُرُ بِالأَمَانِ.
لِذٰلِكَ أَرَى أَنَّ شَكْلَ الضِّيَافَةِ يَتَغَيَّرُ، غَيْرَ أَنَّ رُوحَهَا أَهَمُّ مِنْ أَيِّ وَقْتٍ مَضَى. فَإِذَا حَافَظْنَا عَلَى هٰذِهِ الرُّوحِ، فَسَيَبْقَى العَالَمُ مَكَانًا أَدْفَأَ لِلْغُرَبَاءِ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a homestay host-family form, write an email advising a friend before she visits your family abroad (imperatives in the feminine), and write an extended piece about hospitality in your culture or about whether traditional etiquette still matters.',
  lift: [
    { ar: 'اِخْلَعِي حِذَاءَكِ عِنْدَ البَابِ، وَلَا تَرْفُضِي القَهْوَةَ', en: 'take off your shoes at the door, and don’t refuse the coffee' },
    { ar: 'الضِّيَافَةُ العَرَبِيَّةُ أَكْثَرُ دِفْئًا', en: 'Arab hospitality is warmer' },
    { ar: 'الزِّيَارَاتُ هُنَا أَقْصَرُ مِنْ زِيَارَاتِنَا', en: 'visits here are shorter than ours' },
  ],
  checkTip: 'Check the imperative for the person you address: m. iqbal, f. iqbalī, pl. iqbalū; the negative is lā + jussive (lā tarfuḍī, NOT lā tarfuḍīna); after akthar the noun is accusative (akthar difʾan); afʿal min does not change for gender (aḍ-ḍiyāfa akramu min …).',
  FORM: {
    title: 'Homestay host-family form', ar: 'اسْتِمَارَةُ العَائِلَةِ المُضِيفَةِ',
    fields: [
      { core: true, ar: 'اسْمُ العَائِلَةِ', en: 'Family name', model: 'عَائِلَةُ الحُسَيْنِيِّ', modelEn: 'the Al-Husseini family' },
      { core: true, ar: 'المَدِينَةُ', en: 'City', model: 'عَمَّانُ', modelEn: 'Amman' },
      { core: true, ar: 'عَدَدُ أَفْرَادِ الأُسْرَةِ', en: 'Number of family members', model: 'سِتَّةٌ', modelEn: 'six' },
      { core: true, ar: 'لُغَةُ البَيْتِ', en: 'Home language', model: 'العَرَبِيَّةُ', modelEn: 'Arabic' },
      { core: true, ar: 'وَجْبَةٌ تَقْلِيدِيَّةٌ', en: 'A traditional meal', model: 'المَنْسَفُ', modelEn: 'mansaf' },
      { core: true, ar: 'عَادَةٌ فِي البَيْتِ', en: 'A house custom', model: 'خَلْعُ الأَحْذِيَةِ', modelEn: 'taking shoes off' },
      { ar: 'نَصِيحَةٌ لِلضَّيْفِ', en: 'Advice for the guest', model: 'اِقْبَلِ القَهْوَةَ', modelEn: 'accept the coffee' },
      { ar: 'جُمْلَةٌ: كَيْفَ تَخْتَلِفُ ضِيَافَتُكُمْ؟', en: 'ONE sentence: how your hospitality is different', model: 'ضِيَافَتُنَا أَكْثَرُ دِفْئًا وَأَقَلُّ رَسْمِيَّةً مِنَ الضِّيَافَةِ البَرِيطَانِيَّةِ.', modelEn: 'Our hospitality is warmer and less formal than British hospitality.' },
    ],
    foot: 'One word or a short phrase for each box — box 7 is an imperative; the last box is a full sentence with a comparison.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 6 takes a verbal noun (khalʿ), box 7 an imperative — point out the difference. Box 8: akthar + accusative.',
  },
  Q2: {
    short: 'an email giving advice before a visit', title: 'Question 2: advice for my friend’s visit', ar: 'نَصَائِحُ قَبْلَ الزِّيَارَةِ',
    task: 'Write an email in Arabic to a friend of about 80–90 words. You must include: • where your friend is going and who she will meet • advice about behaviour in the house (imperatives) • a comparison between customs there and here • your opinion, what you will do together, and a question.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'At least three feminine imperatives.', 'A comparison (akthar … min).', 'About 80–90 words.'],
    phrases: [['سَتَزُورِينَ بَيْتَ جَدِّي فِي …', 'you will visit my grandfather’s house in …'], ['اِخْلَعِي … وَكُلِي … وَلَا تَرْفُضِي …', 'take off … eat … don’t refuse …'], ['يَأْكُلُ النَّاسُ هُنَاكَ أَكْثَرَ مِنْ هُنَا', 'people there eat more than here'], ['أَظُنُّ أَنَّ الضِّيَافَةَ هُنَاكَ أَجْمَلُ', 'I think hospitality there is nicer']],
    rubric: [
      ['task', 'اكْتُبِي رِسَالَةً إِلَى صَدِيقَتِكِ قَبْلَ زِيَارَتِهَا لِأُسْرَتِكِ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend before she visits your family (80–90 words).'],
      ['1', 'أَيْنَ سَتَذْهَبُ صَدِيقَتُكِ؟ وَمَنْ سَتُقَابِلُ؟', 'Where she is going; who she will meet'],
      ['2', 'اُنْصُحِيهَا: كَيْفَ تَتَصَرَّفُ فِي البَيْتِ؟', 'Advise her on behaviour in the house'],
      ['3', 'قَارِنِي بَيْنَ العَادَاتِ هُنَاكَ وَهُنَا.', 'Compare customs there and here'],
      ['4', 'مَا رَأْيُكِ؟ وَمَاذَا سَتَفْعَلَانِ مَعًا؟ وَاسْأَلِيهَا سُؤَالًا.', 'Your opinion; what you’ll do together; a question'],
    ],
    qwords: 'اُنْصُحِيهَا (advise her! — imperative) · قَارِنِي (compare!) · سَتَفْعَلَانِ (you two will do — FUTURE dual) · اسْأَلِيهَا (ask her!)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكِ؟', 'Hello …, how are you?'],
      ['1', 'سَتَزُورِينَ بَيْتَ ______ فِي ______ .', 'You’ll visit …’s house in …'],
      ['2', 'اِخْلَعِي ______ ، وَلَا تَرْفُضِي ______ .', 'Take off …, and don’t refuse …'],
      ['3', 'هُنَاكَ يَأْكُلُ النَّاسُ أَكْثَرَ مِنْ ______ .', 'People there eat more than …'],
      ['4', 'أَظُنُّ أَنَّ ______ . سَنَطْبُخُ ______ مَعًا.', 'I think … We’ll cook … together.'],
      ['end', 'هَلْ عِنْدَكِ ______ ؟ مَعَ السَّلَامَةِ.', 'Do you have …? Goodbye.'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Hannah, how are you? I’m so happy you’ll visit my grandfather’s house in Amman with us this summer! My grandparents are very generous and love guests. Here is some advice: take off your shoes at the door and eat with your right hand. Don’t refuse the coffee, and say ‘sufra dāʾima’ after eating. In Jordan people eat more than here, so don’t eat a lot before the visit! I think hospitality there is nicer, because it’s so warm. We’ll cook mansaf together. Do you have any questions? Goodbye, Amina.”',
      find: ['اِخْلَعِي حِذَاءَكِ', 'لَا تَرْفُضِي', 'أَكْثَرَ مِنْ هُنَا', 'لَا تَأْكُلِي كَثِيرًا'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Hannah, what lovely news that you’re visiting my grandfather’s house in Amman this summer! Since hospitality customs there differ from yours, here is some advice. Take your shoes off at the door, and greet my grandmother first, as she is the eldest. If they offer you coffee, take it with your right hand and shake the cup when you’ve had enough. As for food, don’t say ‘no thanks’ the first time, because they’ll insist at least three times! This may seem strange, but our hospitality is warmer and less formal than what you’re used to. If you like, I’ll teach you the courtesy phrases before the trip. What do you think? With love, Amina.”',
      find: ['مَا أَجْمَلَ', 'إِلَيْكِ بَعْضَ النَّصَائِحِ', 'إِذَا قَدَّمُوا … فَاقْبَلِيهَا', 'أَكْثَرُ دِفْئًا وَأَقَلُّ رَسْمِيَّةً'],
    },
  },
  Q3: {
    a: { title: 'الضِّيَافَةُ فِي ثَقَافَتِي', en: 'Hospitality in my culture', bullets: 'كَيْفَ تَسْتَقْبِلُونَ الضُّيُوفَ · عَادَاتُ البَيْتِ وَالطَّعَامِ · مُقَارَنَةٌ بِثَقَافَةٍ أُخْرَى · نَصَائِحُ لِلضَّيْفِ وَخُطَطُكَ', bulletsEn: 'How you welcome guests · house and food customs · a comparison with another culture · advice for guests and your plans' },
    b: { title: 'هَلْ مَا زَالَتْ آدَابُ الضِّيَافَةِ التَّقْلِيدِيَّةُ مُهِمَّةً؟', en: 'Does traditional hospitality etiquette still matter?', bullets: 'المَوْضُوعُ · الصُّعُوبَاتُ اليَوْمَ وَجَوْهَرُ الضِّيَافَةِ · مِثَالٌ مِنْ تَجْرِبَتِكَ · رَأْيُكَ', bulletsEn: 'The issue · today’s difficulties and the heart of hospitality · an example from your experience · your opinion' },
    plan: [
      'Welcome — ʿindamā yazurunā ḍayfun, nuraḥḥibu bihi …; thumma nuqaddimu …',
      'House customs — fī bayti jaddī …; jaddatī taṭbukhu kathīran li-annahā …; nakhlaʿu …',
      'Comparison — fī barīṭāniyā …; az-ziyārātu aqṣaru min …; akthar difʾan / akthar tanẓīman',
      'Advice + future — naṣīḥatī: imdaḥ …, wa-lā tarfuḍ …; sa-astaqbilu ḍuyūfī …; Stretch: laysat … bal, law … la-.',
    ],
    frames: [
      { ar: 'نُرَحِّبُ بِالضَّيْفِ، ثُمَّ نُقَدِّمُ القَهْوَةَ.', en: 'present: we welcome, then serve coffee.' },
      { ar: 'الزِّيَارَاتُ هُنَا أَقْصَرُ مِنْ زِيَارَاتِنَا.', en: 'comparison: visits here are shorter.' },
      { ar: 'اِمْدَحِ الطَّعَامَ، وَلَا تَرْفُضِ القَهْوَةَ.', en: 'advice: praise the food; accept coffee.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Guests matter: we say “ahlan wa-sahlan, tafaḍḍal”, then serve coffee, dates and food → at grandpa’s in Amman we sit on the floor and eat mansaf; grandma cooks a lot as too little food is shameful; shoes off, right hand → British visits are arranged and shorter: ours are warmer, theirs more organised → my advice: praise the food, don’t refuse coffee; I’ll host like grandpa.', find: ['نُرَحِّبُ بِهِ', 'أَقْصَرُ مِنْ', 'أَكْثَرُ دِفْئًا', 'لَا تَرْفُضِ القَهْوَةَ'], notes: 'Core model: present-tense customs, inna in reported speech (taqūlu inna …), afʿal min (aqṣaru min), akthar + accusative (difʾan, tanẓīman), a past visit, imperative + negative imperative, and sa- with li-anna.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Grandpa always says “a guest who enters our home becomes its owner” — I understood when I saw him give his room to a stranger and sleep in the lounge on a simple mattress! → hospitality is not just food but a set of manners: welcoming before the guest knocks, serving coffee with your right hand, not asking why they came until after three days, as the Bedouin did → compared with British hospitality, that one is more organised and respectful of privacy, ours warmer and more spontaneous; neither is better — each has its beauty and something to teach us → so my advice: accept the coffee, don’t refuse food the first time, don’t forget to praise the cooking and thank the host when leaving; “if people applied the best of both cultures, every guest would truly own the house”.', find: ['لَيْسَتْ مُجَرَّدَ … بَلْ', 'أَلَّا تَسْأَلَهُ … إِلَّا', 'هٰذِهِ … بَيْنَمَا تِلْكَ', 'لَوْ طَبَّقَ … لَأَصْبَحَ'], notes: 'Full-mark model: a proverb hook, a ḥīna clause, laysat mujarrada … bal, three maṣdar clauses with an / allā … illā, hādhihi vs tilka with baynamā, iḥdāhumā afḍalu min al-ukhrā, three imperatives, and law … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'does old etiquette still matter?', text: Q3B_FULL, en: 'In an age of fast food and short messages, many young people find traditional hospitality tiring and old-fashioned — does it still matter? → it is hard for families where both parents work to cook big feasts or host unannounced guests; yet the heart of hospitality lies not in quantity of food but in respect and care, which need neither time nor money → I learnt this when a Syrian refugee family arrived on our street: we offered not a feast but a cup of tea, a smile and help registering the children at school; a year later the mother said that cup was the first thing that made her feel safe → the form of hospitality changes, but its spirit matters more than ever; “if we keep this spirit, the world will stay a warmer place for strangers”.', find: ['صَارَ … يَرَوْنَ', 'لَيْسَ فِي … بَلْ فِي', 'لَمْ نُقَدِّمْ … بَلْ', 'أَهَمُّ مِنْ أَيِّ وَقْتٍ مَضَى'], notes: 'Full-mark model for the Stretch title: ṣāra + present, a rhetorical question, yaṣʿubu ʿalā … an, a relative clause with fīhā, laysa fī … bal fī, lam nuqaddim … bal, reported speech with inna, a superlative of time and idhā … fa-sa- with afʿal (adfaʾ).' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic, with an imperative in box 7.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: three feminine imperatives, one of them negative.' },
    { route: 'develop', text: 'Q3: a comparison with akthar … min or afʿal min.' },
    { route: 'stretch', text: 'Q3: laysa … bal, a concession and a conditional.' },
  ],
};

module.exports = { speak, write };
