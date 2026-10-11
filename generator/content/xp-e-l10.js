'use strict';
/* Exam-practice data · TE-L10 · International Life and Global Connections (conditionals: idhā … fa-sa-, law … la-, in; the passive: ṣuniʿa fī, yuṣaddaru, tumawwalu; balanced opinion: min nāḥiyatin … wa-min nāḥiyatin ukhrā, ṣaḥīḥun anna … ghayra anna). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'E', n: 10, short: 'International Life and Global Connections', arShort: 'الحَيَاةُ الدُّوَلِيَّةُ وَالرَّوَابِطُ العَالَمِيَّةُ', fileTitle: 'International_Life_and_Global_Connections', title: 'International Life and Global Connections', ar: 'الحَيَاةُ الدُّوَلِيَّةُ وَالرَّوَابِطُ العَالَمِيَّةُ', icon: 'FaGlobe', grammar: 'conditionals (idhā … fa-sa-; law … la-; in + jussive); the passive (ṣuniʿa fī, yuṣaddaru, tunāqashu); balanced opinion (min nāḥiyatin … wa-min nāḥiyatin ukhrā; ṣaḥīḥun anna … ghayra anna)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: talk about how your life connects to the wider world — products, friends online, global issues, international organisations, studying or volunteering abroad — with conditionals (إِذَا … فَسَأُسَافِرُ · لَوْ … لَسَافَرْتُ), the passive (صُنِعَ فِي · تُنَاقَشُ) and a balanced opinion.',
  words: [
    w(1, 'عَالَمِيٌّ', 'global (m.)', [['f.', 'عَالَمِيَّةٌ'], ['the world', 'العَالَمُ']], { tag: 'adjective' }),
    w(2, 'العَوْلَمَةُ', 'globalisation', [['global citizen (m. · f.)', 'مُوَاطِنٌ عَالَمِيٌّ · مُوَاطِنَةٌ عَالَمِيَّةٌ'], ['connections', 'رَوَابِطُ']], { tag: 'noun' }),
    w(3, 'صُنِعَ فِي …', 'it was made in …', [['f.', 'صُنِعَتْ فِي …'], ['is exported', 'يُصَدَّرُ']], { tag: 'passive' }),
    w(4, 'مُنَظَّمَةٌ دُوَلِيَّةٌ', 'an international organisation', [['the United Nations', 'الأُمَمُ المُتَّحِدَةُ'], ['a charity', 'جَمْعِيَّةٌ خَيْرِيَّةٌ']], { tag: 'noun' }),
    w(5, 'نَمُوذَجُ الأُمَمِ المُتَّحِدَةِ', 'Model United Nations', [['a delegate (m. · f.)', 'مَنْدُوبٌ · مَنْدُوبَةٌ'], ['a conference', 'مُؤْتَمَرٌ']], { tag: 'school' }),
    w(6, 'قَضِيَّةٌ عَالَمِيَّةٌ', 'a global issue', [['climate change', 'تَغَيُّرُ المُنَاخِ'], ['poverty', 'الفَقْرُ']], { tag: 'issues' }),
    w(7, 'إِذَا … فَسَوْفَ …', 'if … then will …', [['if (+ jussive)', 'إِنْ تَدْرُسْ تَنْجَحْ'], ['if … would', 'لَوْ سَافَرْتُ لَتَعَلَّمْتُ']], { tag: 'conditional' }),
    w(8, 'أَتَطَوَّعُ فِي الخَارِجِ', 'I volunteer abroad', [['a gap year', 'سَنَةٌ فَاصِلَةٌ'], ['to work abroad', 'العَمَلُ فِي الخَارِجِ']], { tag: 'plans' }),
    w(9, 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى', 'on one hand … on the other', [['advantages', 'مَزَايَا'], ['disadvantages', 'عُيُوبٌ']], { tag: 'balance' }),
    w(10, 'يُنَاقَشُ · تُنَاقَشُ', 'is discussed (m. · f.)', [['was decided', 'قُرِّرَ'], ['was voted on', 'صُوِّتَ عَلَى']], { tag: 'passive' }),
    w(11, 'التِّجَارَةُ الدُّوَلِيَّةُ', 'international trade', [['import', 'الاسْتِيرَادُ'], ['export', 'التَّصْدِيرُ']], { tag: 'economy' }),
    w(12, 'التَّعَاوُنُ الدُّوَلِيُّ', 'international cooperation', [['solidarity', 'التَّضَامُنُ'], ['peace', 'السَّلَامُ']], { tag: 'values' }),
  ],
  words1: { eyebrow: 'Language bank · conditionals', title: 'If …, then …', ar: 'أَدَوَاتُ الشَّرْطِ', notes: 'LANGUAGE BANK (2 min) — real: إِذَا + past, then فَسَوْفَ / فَسَأَ… (إِذَا سَافَرْتُ، فَسَأَتَطَوَّعُ). Formal real: إِنْ + jussive ×2 (إِنْ تَدْرُسْ تَنْجَحْ). Unreal: لَوْ + past, la- + past (لَوْ كُنْتُ رَئِيسَةً لَمَنَعْتُ …). One of each in a Stretch answer.' },
  words2: { eyebrow: 'Language bank · passive and balance', title: 'Made in … · discussed at …', ar: 'المَجْهُولُ وَالرَّأْيُ المُتَوَازِنُ', notes: 'LANGUAGE BANK (2 min) — passive for global facts: صُنِعَ هَاتِفِي فِي الصِّينِ · تُنَاقَشُ القَضَايَا فِي الأُمَمِ المُتَّحِدَةِ. Balance: مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى … ؛ صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …' },
  checkCore: 'gave an example of a global connection in their life',
  checkDevelop: 'used a conditional (idhā … fa-sa-) and a passive verb',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'the Model UN club', title: 'Role play A — Joining the Model UN club', ar: 'نَادِي نَمُوذَجِ الأُمَمِ المُتَّحِدَةِ', you: 'a student', them: 'the club leader',
      tasks: [
        { core: true, ex: 'أَهْلًا! لِمَاذَا تُرِيدُ أَنْ تَنْضَمَّ إِلَى النَّادِي؟', task: 'Give a reason.', help: 'لِأَنِّي أُحِبُّ …', model: 'لِأَنِّي أُحِبُّ السِّيَاسَةَ وَالقَضَايَا العَالَمِيَّةَ.', modelEn: 'Because I love politics and global issues.' },
        { core: true, ex: 'مَا اللُّغَاتُ الَّتِي تَتَكَلَّمُهَا؟', task: 'Name your languages.', help: 'أَتَكَلَّمُ …', model: 'أَتَكَلَّمُ الإِنْجْلِيزِيَّةَ وَالعَرَبِيَّةَ وَقَلِيلًا مِنَ الفَرَنْسِيَّةِ.', modelEn: 'English, Arabic and a little French.' },
        { core: true, ex: 'أَيَّ بَلَدٍ تُرِيدُ أَنْ تُمَثِّلَ؟', task: 'Choose a country.', help: 'أُرِيدُ أَنْ أُمَثِّلَ …', model: 'أُرِيدُ أَنْ أُمَثِّلَ المَغْرِبَ.', modelEn: 'I want to represent Morocco.' },
        { core: true, ex: 'جَيِّدٌ. المُؤْتَمَرُ فِي مَارِسَ.', task: 'Ask where the conference is.', help: 'أَيْنَ …؟', model: 'أَيْنَ سَيَكُونُ المُؤْتَمَرُ؟', modelEn: 'Where will the conference be?' },
        { core: true, unexpected: true, ex: 'فِي لَنْدَنَ. مَا القَضِيَّةُ العَالَمِيَّةُ الأَهَمُّ فِي رَأْيِكَ؟', task: 'Answer the unexpected question.', help: 'أَهَمُّ قَضِيَّةٍ … لِأَنَّ …', model: 'أَهَمُّ قَضِيَّةٍ تَغَيُّرُ المُنَاخِ، لِأَنَّهُ يُؤَثِّرُ عَلَى الجَمِيعِ.', modelEn: 'Climate change — it affects everyone.' },
      ],
      girl: 'تُرِيدِينَ · تَنْضَمِّي · تَتَكَلَّمِينَهَا · تُمَثِّلِي · رَأْيِكِ',
      notes: 'Core: li-annī uḥibbu, a relative clause in the question, urīdu an umaththila, ayna sa-yakūnu …?, aḥammu qaḍiyyatin + li-annahu.',
    },
    {
      id: 'B', level: 'Core+', setting: 'in a shopping centre', title: 'Role play B — Where was it made?', ar: 'أَيْنَ صُنِعَ؟', you: 'a teenager', them: 'a friend shopping with you',
      tasks: [
        { core: true, ex: 'هَاتِفُكَ جَدِيدٌ! أَيْنَ صُنِعَ؟', task: 'Say where it was made (passive).', help: 'صُنِعَ فِي …', model: 'صُنِعَ فِي الصِّينِ، لٰكِنَّ الشَّرِكَةَ أَمْرِيكِيَّةٌ.', modelEn: 'It was made in China, but the company is American.' },
        { core: true, ex: 'وَهٰذَا القَمِيصُ؟', task: 'Read the label (passive).', help: 'صُنِعَ فِي … مِنَ …', model: 'صُنِعَ فِي بَنْغْلَادِيشَ مِنَ القُطْنِ.', modelEn: 'Made in Bangladesh from cotton.' },
        { ex: 'هَلْ يُهِمُّكَ أَيْنَ تُصْنَعُ مَلَابِسُكَ؟', task: 'Give an opinion with a reason.', help: 'نَعَمْ، لِأَنَّ … أَحْيَانًا …', model: 'نَعَمْ، لِأَنَّ العُمَّالَ أَحْيَانًا يَعْمَلُونَ سَاعَاتٍ طَوِيلَةً بِرَوَاتِبَ قَلِيلَةٍ.', modelEn: 'Yes, because workers sometimes work long hours for low pay.' },
        { ex: 'إِذَنْ مَاذَا نَفْعَلُ؟', task: 'Suggest with a conditional, then ASK.', help: 'إِذَا … فَسَـ… ؛ مَا رَأْيُكَ؟', model: 'إِذَا اشْتَرَيْنَا أَقَلَّ وَاخْتَرْنَا شَرِكَاتٍ عَادِلَةً، فَسَنُسَاعِدُ العُمَّالَ. مَا رَأْيُكَ؟', modelEn: 'If we buy less and choose fair companies, we’ll help the workers. What do you think?' },
        { unexpected: true, ex: 'فِكْرَةٌ جَيِّدَةٌ. هَلْ تَشْتَرِي مَلَابِسَ مُسْتَعْمَلَةً؟', task: 'Answer the unexpected question (habit + reason).', help: 'نَعَمْ / أَحْيَانًا، … لِأَنَّ …', model: 'نَعَمْ، أَشْتَرِي مِنْ مَحَلَّاتِ الجَمْعِيَّاتِ الخَيْرِيَّةِ، لِأَنَّهَا أَرْخَصُ وَأَفْضَلُ لِلْبِيئَةِ.', modelEn: 'Yes, from charity shops — cheaper and better for the environment.' },
      ],
      girl: 'هَاتِفُكِ · يُهِمُّكِ · مَلَابِسُكِ · تَشْتَرِينَ',
      notes: 'Core+: passive ṣuniʿa fī ×2 and tuṣnaʿu (present passive), li-anna + aḥyānan, idhā + past … fa-sa-, the CANDIDATE asks for an opinion, comparatives arkhaṣ / afḍal.',
    },
    {
      id: 'C', level: 'Develop', setting: 'at home', title: 'Role play C — A gap year abroad?', ar: 'سَنَةٌ فَاصِلَةٌ فِي الخَارِجِ؟', you: 'a Year 13 student', them: 'your mother (or father)',
      tasks: [
        { ex: 'سَمِعْتُ أَنَّكَ تُفَكِّرُ فِي سَنَةٍ فِي الخَارِجِ. لِمَاذَا؟', task: 'Explain the plan with purpose.', help: 'أُرِيدُ أَنْ … لِكَيْ …', model: 'أُرِيدُ أَنْ أَتَطَوَّعَ فِي مَدْرَسَةٍ فِي الأُرْدُنِّ، لِكَيْ أُحَسِّنَ لُغَتِي وَأُسَاعِدَ الأَطْفَالَ اللَّاجِئِينَ.', modelEn: 'I want to volunteer in a school in Jordan to improve my Arabic and help refugee children.' },
        { ex: 'وَمَنْ يُنَظِّمُ هٰذَا البَرْنَامَجَ؟', task: 'Explain with the passive.', help: 'يُنَظَّمُ مِنْ قِبَلِ … وَيُمَوَّلُ …', model: 'يُنَظَّمُ مِنْ قِبَلِ مُنَظَّمَةٍ دُوَلِيَّةٍ مَعْرُوفَةٍ، وَيُمَوَّلُ جُزْءٌ مِنْهُ مِنَ الجَامِعَةِ.', modelEn: 'It’s organised by a well-known international organisation and partly funded by the university.' },
        { ex: 'وَمَاذَا عَنِ الجَامِعَةِ؟', task: 'Answer with a conditional.', help: 'إِذَا … فَسَـ…', model: 'إِذَا أَجَّلْتُ الجَامِعَةَ سَنَةً، فَسَأَبْدَأُ دِرَاسَتِي بِخِبْرَةٍ أَكْبَرَ، وَسَيَكُونُ مَكَانِي مَحْجُوزًا.', modelEn: 'If I defer a year, I’ll start with more experience, and my place will be held.' },
        { ex: 'أَنَا قَلِقَةٌ عَلَيْكَ.', task: 'Balance: advantages and risks.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'أَفْهَمُ ذٰلِكَ؛ مِنْ نَاحِيَةٍ، سَأَكُونُ بَعِيدًا عَنْكُمْ، وَمِنْ نَاحِيَةٍ أُخْرَى، سَأَسْكُنُ عِنْدَ خَالِي فِي عَمَّانَ، وَسَنَتَكَلَّمُ كُلَّ يَوْمٍ.', modelEn: 'I understand: I’ll be far away, but I’ll live with my uncle in Amman and we’ll talk every day.' },
        { unexpected: true, ex: 'وَلَوْ لَمْ يُعْجِبْكَ الأَمْرُ هُنَاكَ؟', task: 'Answer the unexpected question (law lam … la-).', help: 'لَوْ لَمْ …، لَـ…', model: 'لَوْ لَمْ يُعْجِبْنِي، لَعُدْتُ بَعْدَ ثَلَاثَةِ أَشْهُرٍ، وَلَعَمِلْتُ هُنَا حَتَّى تَبْدَأَ الجَامِعَةُ.', modelEn: 'I’d come back after three months and work here until university starts.' },
      ],
      girl: 'أَنَّكِ تُفَكِّرِينَ · عَلَيْكِ · يُعْجِبْكِ · سَأَكُونُ بَعِيدَةً',
      notes: 'Develop: li-kay + two subjunctives, passives (yunaẓẓamu min qibali, yumawwalu), idhā + past … fa-sa-, a balanced reply to worry, law lam … la- ×2 with ḥattā.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'an international youth summit', title: 'Role play D — Globalisation: who wins?', ar: 'العَوْلَمَةُ: مَنِ الرَّابِحُ؟', you: 'a youth delegate', them: 'the summit moderator',
      tasks: [
        { ex: 'هَلْ جَعَلَتِ العَوْلَمَةُ العَالَمَ أَفْضَلَ؟', task: 'Give a balanced thesis.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، أَخْرَجَتِ العَوْلَمَةُ مَلَايِينَ النَّاسِ مِنَ الفَقْرِ، وَمِنْ نَاحِيَةٍ أُخْرَى، زَادَتِ الفَجْوَةُ بَيْنَ الأَغْنِيَاءِ وَالفُقَرَاءِ دَاخِلَ الدُّوَلِ نَفْسِهَا.', modelEn: 'It lifted millions out of poverty, yet widened the gap between rich and poor within countries.' },
        { ex: 'أَعْطِنَا مِثَالًا مِنْ حَيَاتِكَ اليَوْمِيَّةِ.', task: 'Use the passive with a concrete example.', help: 'مَثَلًا، … صُنِعَ … وَ… زُرِعَ …', model: 'مَثَلًا، فُطُورِي هٰذَا الصَّبَاحَ: القَهْوَةُ زُرِعَتْ فِي إِثْيُوبْيَا، وَالمَوْزُ قُطِفَ فِي الإِكْوَادُورِ، وَالكُوبُ صُنِعَ فِي الصِّينِ؛ فَأَنَا مُرْتَبِطَةٌ بِثَلَاثِ قَارَّاتٍ قَبْلَ الثَّامِنَةِ!', modelEn: 'My breakfast: coffee grown in Ethiopia, bananas picked in Ecuador, a mug made in China — three continents before eight!' },
        { ex: 'لٰكِنَّ الدُّوَلَ الفَقِيرَةَ تَخْسَرُ دَائِمًا.', task: 'Concede and nuance.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ … إِذَا …', model: 'صَحِيحٌ أَنَّ كَثِيرًا مِنْهَا يَخْسَرُ، غَيْرَ أَنَّ ذٰلِكَ لَيْسَ قَدَرًا؛ فَإِذَا فُرِضَتْ قَوَانِينُ عَادِلَةٌ لِلتِّجَارَةِ، فَسَيَسْتَفِيدُ المُزَارِعُونَ أَيْضًا.', modelEn: 'Many do lose, but it’s not fate: if fair trade rules are imposed, farmers will benefit too.' },
        { ex: 'وَمَا دَوْرُ الشَّبَابِ؟', task: 'Propose action (formal advice).', help: 'يَنْبَغِي عَلَى الشَّبَابِ أَنْ … ؛ لِأَنَّ …', model: 'يَنْبَغِي أَنْ يَشْتَرُوا بِوَعْيٍ، وَأَنْ يَتَعَلَّمُوا لُغَاتٍ، وَأَنْ يَسْتَخْدِمُوا الإِنْتَرْنِتَ لِلتَّضَامُنِ لَا لِلِاسْتِهْلَاكِ فَقَطْ، لِأَنَّهُمْ مُسْتَهْلِكُو الغَدِ وَصُنَّاعُ قَرَارِهِ.', modelEn: 'Buy consciously, learn languages, and use the internet for solidarity not just consumption — they are tomorrow’s consumers and decision-makers.' },
        { unexpected: true, ex: 'لَوْ كُنْتَ أَمِينًا عَامًّا لِلْأُمَمِ المُتَّحِدَةِ لِيَوْمٍ وَاحِدٍ، مَاذَا تَفْعَلُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ كُنْتُ …، لَـ…', model: 'لَوْ كُنْتُ أَمِينَةً عَامَّةً لِيَوْمٍ وَاحِدٍ، لَدَعَوْتُ شَبَابًا مِنْ كُلِّ القَارَّاتِ لِيَجْلِسُوا مَكَانَ الرُّؤَسَاءِ، وَلَطَلَبْتُ مِنْهُمْ حَلًّا وَاحِدًا لِلْجُوعِ.', modelEn: 'I’d invite young people from every continent to sit in the leaders’ seats and ask them for one solution to hunger.' },
      ],
      girl: 'أَعْطِينَا · حَيَاتِكِ · كُنْتِ أَمِينَةً عَامَّةً · تَفْعَلِينَ (model already f.; a boy says مُرْتَبِطٌ · أَمِينًا)',
      notes: 'Stretch: a balanced thesis, four passives (zuriʿat, quṭifa, ṣuniʿa, furiḍat), a concession with laysa qadaran, idhā + passive … fa-sa-, yanbaghī an ×3 + li- … lā li-, law … la- + li- purpose.',
      modelFoot: 'Stretch: balance, a vivid passive example, a nuanced concession, a formal proposal and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'أَنَا وَالعَالَمُ', aim: 'one full sentence per question',
      qs: [
        { q: 'أَيْنَ صُنِعَ هَاتِفُكَ؟', en: 'Where was your phone made?', start: 'صُنِعَ فِي …', model: 'صُنِعَ فِي كُورِيَا.', modelEn: 'In Korea.' },
        { q: 'هَلْ عِنْدَكَ أَصْدِقَاءُ فِي بُلْدَانٍ أُخْرَى؟', en: 'Do you have friends in other countries?', start: 'نَعَمْ، عِنْدِي … فِي …', model: 'نَعَمْ، عِنْدِي صَدِيقَةٌ فِي كَنَدَا، وَنَتَكَلَّمُ عَلَى الإِنْتَرْنِتِ.', modelEn: 'Yes, a friend in Canada — we talk online.' },
        { q: 'مَا القَضِيَّةُ العَالَمِيَّةُ الَّتِي تُهِمُّكَ؟', en: 'Which global issue matters to you?', start: 'تُهِمُّنِي قَضِيَّةُ …', model: 'تُهِمُّنِي قَضِيَّةُ الفَقْرِ.', modelEn: 'Poverty.' },
        { q: 'هَلْ تُرِيدُ أَنْ تَعْمَلَ فِي الخَارِجِ؟', en: 'Do you want to work abroad?', start: 'نَعَمْ / لَا، … لِأَنَّ …', model: 'نَعَمْ، أُرِيدُ أَنْ أَعْمَلَ فِي دُبَيّ، لِأَنَّهَا مَدِينَةٌ دُوَلِيَّةٌ.', modelEn: 'Yes, in Dubai — it’s an international city.' },
        { q: 'مَا المُنَظَّمَةُ الدُّوَلِيَّةُ الَّتِي تَعْرِفُهَا؟', en: 'Which international organisation do you know?', start: 'أَعْرِفُ …', model: 'أَعْرِفُ الأُمَمَ المُتَّحِدَةَ وَالصَّلِيبَ الأَحْمَرَ وَالهِلَالَ الأَحْمَرَ.', modelEn: 'The UN and the Red Cross / Red Crescent.' },
      ],
      foot: 'Core: one full sentence for every question — try one passive (صُنِعَ فِي …). If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a passive or a reason = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'الرَّوَابِطُ العَالَمِيَّةُ', aim: 'two or three sentences, with a conditional and a passive',
      qs: [
        { q: 'كَيْفَ تَرْتَبِطُ حَيَاتُكَ اليَوْمِيَّةُ بِالعَالَمِ؟', en: 'How is your daily life connected to the world?', start: 'مَثَلًا، … صُنِعَ … وَ…', model: 'مَثَلًا، مَلَابِسِي صُنِعَتْ فِي آسْيَا، وَأُشَاهِدُ مُسَلْسَلَاتٍ كُورِيَّةً، وَأَلْعَبُ عَلَى الإِنْتَرْنِتِ مَعَ شَبَابٍ مِنْ أُسْتُرَالْيَا.', modelEn: 'My clothes were made in Asia, I watch Korean series and play online with young people in Australia.' },
        { q: 'مَا فَوَائِدُ أَنْ يَكُونَ عِنْدَكَ أَصْدِقَاءُ مِنْ بُلْدَانٍ أُخْرَى؟', en: 'What are the benefits of friends from other countries?', start: 'أَوَّلًا … بِالإِضَافَةِ إِلَى ذٰلِكَ …', model: 'أَوَّلًا، أَتَعَلَّمُ لُغَاتٍ وَعَادَاتٍ جَدِيدَةً؛ بِالإِضَافَةِ إِلَى ذٰلِكَ، إِذَا سَافَرْتُ يَوْمًا، فَسَيَكُونُ لِي أَصْدِقَاءُ هُنَاكَ.', modelEn: 'I learn languages and customs; also, if I travel one day, I’ll have friends there.' },
        { q: 'هَلْ تَطَوَّعْتَ لِقَضِيَّةٍ عَالَمِيَّةٍ؟', en: 'Have you volunteered for a global cause?', start: 'نَعَمْ، شَارَكْتُ فِي … ؛ وَجُمِعَ …', model: 'نَعَمْ، شَارَكْتُ فِي حَمْلَةٍ مَدْرَسِيَّةٍ لِلَّاجِئِينَ، وَجُمِعَ أَكْثَرُ مِنْ أَلْفِ جُنَيْهٍ فِي أُسْبُوعٍ وَاحِدٍ.', modelEn: 'A school campaign for refugees — over £1,000 was raised in one week.' },
        { q: 'هَلْ سَتَدْرُسُ أَوْ تَعْمَلُ فِي الخَارِجِ؟', en: 'Will you study or work abroad?', start: 'إِذَا … فَسَـ…', model: 'إِذَا حَصَلْتُ عَلَى مِنْحَةٍ، فَسَأَدْرُسُ سَنَةً فِي فَرَنْسَا، لِأَنَّ ذٰلِكَ سَيُفِيدُنِي فِي عَمَلِي فِي المُسْتَقْبَلِ.', modelEn: 'If I get a scholarship, I’ll study a year in France — it’ll help my future career.' },
        { q: 'هَلْ تُؤَثِّرُ الأَخْبَارُ العَالَمِيَّةُ فِيكَ؟', en: 'Do world news events affect you?', start: 'نَعَمْ، عِنْدَمَا … ؛ لِذٰلِكَ …', model: 'نَعَمْ، عِنْدَمَا أَرَى صُوَرَ الحُرُوبِ وَالكَوَارِثِ أَحْزَنُ كَثِيرًا؛ لِذٰلِكَ أَتَبَرَّعُ مِنْ مَصْرُوفِي كُلَّ شَهْرٍ.', modelEn: 'Yes, war and disaster images sadden me, so I donate from my pocket money monthly.' },
      ],
      foot: 'Develop: two or three sentences — a conditional (idhā … fa-sa-), a passive and an example.',
      modelFoot: 'Example + passive + conditional = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'العَوْلَمَةُ وَالمُوَاطَنَةُ العَالَمِيَّةُ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلِ العَوْلَمَةُ نِعْمَةٌ أَمْ نِقْمَةٌ؟', en: 'Is globalisation a blessing or a curse?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، فَتَحَتْ أَبْوَابَ المَعْرِفَةِ وَالتِّجَارَةِ لِلْجَمِيعِ، وَمِنْ نَاحِيَةٍ أُخْرَى، هَدَّدَتِ الصِّنَاعَاتِ المَحَلِّيَّةَ؛ فَهِيَ أَدَاةٌ، وَالنَّتِيجَةُ تَعْتَمِدُ عَلَى طَرِيقَةِ اسْتِخْدَامِهَا.', modelEn: 'It opened knowledge and trade to all, but threatened local industries — it’s a tool; the outcome depends on how it’s used.' },
        { q: 'مَا مَعْنَى أَنْ تَكُونَ "مُوَاطِنًا عَالَمِيًّا"؟', en: 'What does it mean to be a “global citizen”?', start: 'أَنْ تَكُونَ … يَعْنِي أَنْ …', model: 'يَعْنِي أَنْ تُحِبَّ وَطَنَكَ، وَتَشْعُرَ فِي الوَقْتِ نَفْسِهِ بِالمَسْؤُولِيَّةِ تِجَاهَ إِنْسَانٍ لَمْ تَرَهُ فِي الطَّرَفِ الآخَرِ مِنَ العَالَمِ.', modelEn: 'Loving your country while feeling responsible for a person you’ve never seen on the other side of the world.' },
        { q: 'هَلْ تَسْتَطِيعُ المُنَظَّمَاتُ الدُّوَلِيَّةُ حَلَّ المَشَاكِلِ الكُبْرَى؟', en: 'Can international organisations solve major problems?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهَا بَطِيئَةٌ أَحْيَانًا، غَيْرَ أَنَّ مَلَايِينَ الأَطْفَالِ تَلَقَّوُا اللِّقَاحَاتِ بِفَضْلِهَا، مِمَّا يُثْبِتُ أَنَّ التَّعَاوُنَ يَنْجَحُ إِذَا تَوَفَّرَتِ الإِرَادَةُ.', modelEn: 'They’re sometimes slow, but millions of children were vaccinated thanks to them — cooperation works when there’s will.' },
        { q: 'كَيْفَ تَغَيَّرَ تَوَاصُلُ النَّاسِ عَبْرَ العَالَمِ؟', en: 'How has communication across the world changed?', start: 'كَانَتِ الرَّسَائِلُ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَتِ الرَّسَائِلُ تَصِلُ بَعْدَ أَسَابِيعَ، أَمَّا اليَوْمَ فَتُرْسَلُ فِي ثَوَانٍ، مِمَّا جَعَلَ العَالَمَ قَرْيَةً صَغِيرَةً، وَلٰكِنْ مُزْدَحِمَةً بِالمَعْلُومَاتِ الكَاذِبَةِ أَيْضًا.', modelEn: 'Letters took weeks; now messages are sent in seconds — a small village, but crowded with misinformation too.' },
        { q: 'لَوْ اسْتَطَعْتَ أَنْ تَحُلَّ مُشْكِلَةً عَالَمِيَّةً وَاحِدَةً، فَأَيُّهَا تَخْتَارُ؟', en: 'If you could solve one global problem, which would you choose?', start: 'لَوِ اسْتَطَعْتُ، لَـ… لِأَنَّ …', model: 'لَوِ اسْتَطَعْتُ، لَحَلَلْتُ مُشْكِلَةَ المِيَاهِ النَّظِيفَةِ، لِأَنَّهَا أَسَاسُ الصِّحَّةِ وَالتَّعْلِيمِ؛ فَالطِّفْلُ الَّذِي يَمْشِي سَاعَاتٍ لِيَجْلِبَ المَاءَ لَا يَذْهَبُ إِلَى المَدْرَسَةِ.', modelEn: 'Clean water — the basis of health and education: a child who walks hours for water doesn’t go to school.' },
      ],
      foot: 'Stretch: a balanced view, a definition with an, a concession with mimmā and idhā, kāna … ammā al-yawma fa- and law … la-.',
      modelFoot: 'Stretch: niʿma am niqma, a definition, a concession, passives (tursalu) and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I gave an example of how my life connects to the world.' },
    { route: 'core', text: 'I used a passive (ṣuniʿa fī …).' },
    { route: 'develop', text: 'I used idhā … fa-sa- correctly.' },
    { route: 'develop', text: 'I gave a balanced opinion (min nāḥiyatin … wa-min nāḥiyatin ukhrā).' },
    { route: 'stretch', text: 'I used law … la- and a concession about globalisation.' },
  ],
};
speak.RP[1].tasks[3].help = 'إِذَا اشْتَرَيْنَا … فَسَنُسَاعِدُ … ؛ مَا رَأْيُكَ؟';
speak.RP[2].tasks[2].help = 'إِذَا أَجَّلْتُ … فَسَأَبْدَأُ …';
speak.RP[2].tasks[4].help = 'لَوْ لَمْ يُعْجِبْنِي، لَعُدْتُ …';
speak.RP[3].tasks[3].help = 'يَنْبَغِي أَنْ يَشْتَرُوا … ؛ لِأَنَّ …';
speak.RP[3].tasks[4].help = 'لَوْ كُنْتُ …، لَدَعَوْتُ …';
speak.CONV[1].qs[3].start = 'إِذَا حَصَلْتُ عَلَى … فَسَأَدْرُسُ …';
speak.CONV[2].qs[3].start = 'كَانَتِ الرَّسَائِلُ … أَمَّا اليَوْمَ فَتُرْسَلُ …';
speak.CONV[2].qs[4].start = 'لَوِ اسْتَطَعْتُ، لَحَلَلْتُ … لِأَنَّ …';

const Q2_CORE = `مَرْحَبًا يَا دِينَا،
كَيْفَ حَالُكِ؟ عُدْتُ أَمْسِ مِنْ مُؤْتَمَرِ نَمُوذَجِ الأُمَمِ المُتَّحِدَةِ فِي لَنْدَنَ! كَانَ فِيهِ طُلَّابٌ مِنْ عِشْرِينَ مَدْرَسَةً. أَنَا مَثَّلْتُ المَغْرِبَ، وَتَكَلَّمْتُ عَنْ تَغَيُّرِ المُنَاخِ. فِي المُؤْتَمَرِ نُوقِشَتْ قَضَايَا كَثِيرَةٌ، مِثْلَ الفَقْرِ وَالمِيَاهِ النَّظِيفَةِ. فِي اليَوْمِ الأَخِيرِ قُبِلَ اقْتِرَاحِي، فَكُنْتُ سَعِيدَةً جِدًّا! أَظُنُّ أَنَّ المُؤْتَمَرَ مُفِيدٌ، لِأَنَّنَا نَتَعَلَّمُ عَنِ العَالَمِ وَنَتَكَلَّمُ أَمَامَ النَّاسِ. إِذَا نَجَحْتُ فِي الاخْتِيَارِ، فَسَأُشَارِكُ فِي مُؤْتَمَرٍ دُوَلِيٍّ فِي جِنِيفَ. وَأَنْتِ، هَلْ تُحِبِّينَ أَنْ تَنْضَمِّي إِلَى النَّادِي؟
مَعَ السَّلَامَةِ،
هِبَةُ`;
const Q2_FULL = `عَزِيزَتِي دِينَا،
مَا زِلْتُ مُتَحَمِّسَةً بَعْدَ يَوْمَيْنِ فِي مُؤْتَمَرِ نَمُوذَجِ الأُمَمِ المُتَّحِدَةِ، الَّذِي نُظِّمَ فِي لَنْدَنَ بِمُشَارَكَةِ مِئَتَيْ طَالِبٍ. كُنْتُ مَنْدُوبَةَ المَغْرِبِ فِي لَجْنَةِ البِيئَةِ، وَدَافَعْتُ عَنْ حَقِّ الدُّوَلِ الإِفْرِيقِيَّةِ فِي الحُصُولِ عَلَى دَعْمٍ لِمُوَاجَهَةِ الجَفَافِ. وَبَعْدَ نِقَاشٍ طَوِيلٍ، صُوِّتَ عَلَى اقْتِرَاحِي وَقُبِلَ بِأَغْلَبِيَّةٍ كَبِيرَةٍ! صَحِيحٌ أَنَّنِي كُنْتُ خَائِفَةً مِنَ الكَلَامِ أَمَامَ القَاعَةِ، غَيْرَ أَنَّ التَّجْرِبَةَ عَلَّمَتْنِي أَنَّ الإِقْنَاعَ يَحْتَاجُ إِلَى أَدِلَّةٍ لَا إِلَى صَوْتٍ عَالٍ. وَأَكْثَرُ مَا أَدْهَشَنِي أَنَّ طُلَّابًا مِنْ ثَقَافَاتٍ مُخْتَلِفَةٍ اسْتَطَاعُوا أَنْ يَتَّفِقُوا. وَإِذَا اخْتِرْتُ لِلْفَرِيقِ الوَطَنِيِّ، فَسَأُسَافِرُ إِلَى جِنِيفَ فِي الرَّبِيعِ. أَلَا تُرِيدِينَ أَنْ تُجَرِّبِي مَعِي؟
بِمَحَبَّةٍ،
هِبَةُ`;
const Q3A_CORE = `أَعِيشُ فِي بَرِيطَانْيَا، لٰكِنَّ حَيَاتِي مُرْتَبِطَةٌ بِالعَالَمِ كُلَّ يَوْمٍ. مَثَلًا، صُنِعَ هَاتِفِي فِي الصِّينِ، وَصُنِعَتْ مَلَابِسِي فِي بَنْغْلَادِيشَ، وَزُرِعَتِ القَهْوَةُ الَّتِي يَشْرَبُهَا أَبِي فِي إِثْيُوبْيَا.
عِنْدِي أَصْدِقَاءُ فِي بُلْدَانٍ كَثِيرَةٍ. أَتَكَلَّمُ مَعَ صَدِيقَتِي سَارَا فِي كَنَدَا كُلَّ أُسْبُوعٍ، وَأَلْعَبُ عَلَى الإِنْتَرْنِتِ مَعَ بَنَاتٍ مِنْ مِصْرَ وَمَالِيزِيَا. نَتَكَلَّمُ بِالإِنْجْلِيزِيَّةِ وَأَحْيَانًا بِالعَرَبِيَّةِ مَعَ صَدِيقَتِي المِصْرِيَّةِ.
فِي المَدْرَسَةِ أَنَا عُضْوٌ فِي نَادِي نَمُوذَجِ الأُمَمِ المُتَّحِدَةِ. فِي السَّنَةِ المَاضِيَةِ مَثَّلْتُ المَغْرِبَ فِي مُؤْتَمَرٍ، وَتَكَلَّمْتُ عَنْ تَغَيُّرِ المُنَاخِ. تَعَلَّمْتُ أَنَّ المَشَاكِلَ العَالَمِيَّةَ تَحْتَاجُ إِلَى تَعَاوُنٍ بَيْنَ كُلِّ الدُّوَلِ.
مِنْ نَاحِيَةٍ، العَوْلَمَةُ مُفِيدَةٌ، لِأَنَّنَا نَتَعَلَّمُ عَنْ ثَقَافَاتٍ كَثِيرَةٍ. وَمِنْ نَاحِيَةٍ أُخْرَى، بَعْضُ العُمَّالِ رَوَاتِبُهُمْ قَلِيلَةٌ، وَيَعْمَلُونَ سَاعَاتٍ طَوِيلَةً. إِذَا حَصَلْتُ عَلَى مِنْحَةٍ، فَسَأَدْرُسُ العَلَاقَاتِ الدُّوَلِيَّةَ، لِأَنِّي أُرِيدُ أَنْ أَعْمَلَ فِي الأُمَمِ المُتَّحِدَةِ.`;
const Q3A_FULL = `قَبْلَ أَنْ أَخْرُجَ مِنَ البَيْتِ كُلَّ صَبَاحٍ، أَكُونُ قَدْ زُرْتُ ثَلَاثَ قَارَّاتٍ دُونَ أَنْ أَتَحَرَّكَ: فَقَهْوَةُ أُمِّي زُرِعَتْ فِي إِثْيُوبْيَا، وَهَاتِفِي صُنِعَ فِي الصِّينِ، وَالأَخْبَارُ الَّتِي أَقْرَؤُهَا تُكْتَبُ فِي نِيُويُورْكَ وَالدَّوْحَةِ، وَتُقْرَأُ فِي كُلِّ مَكَانٍ.
وَلَا تَقِفُ هٰذِهِ الرَّوَابِطُ عِنْدَ الأَشْيَاءِ؛ فَلِي صَدِيقَاتٌ فِي كَنَدَا وَمَالِيزِيَا وَمِصْرَ، نَتَبَادَلُ مَعَهُنَّ الآرَاءَ وَالأَغَانِيَ وَالوَصَفَاتِ، حَتَّى صِرْتُ أَشْعُرُ بِأَنَّ الحُدُودَ خُطُوطٌ عَلَى الخَرِيطَةِ أَكْثَرَ مِنْهَا جُدْرَانًا بَيْنَ البَشَرِ، وَأَنَّ الصَّدَاقَةَ لَا تَحْتَاجُ إِلَى جَوَازِ سَفَرٍ.
وَقَدْ تَعَمَّقَ هٰذَا الشُّعُورُ حِينَ مَثَّلْتُ المَغْرِبَ فِي نَمُوذَجِ الأُمَمِ المُتَّحِدَةِ؛ إِذْ أَدْرَكْتُ أَنَّ الجَفَافَ فِي إِفْرِيقْيَا لَيْسَ خَبَرًا بَعِيدًا، بَلْ قَضِيَّةٌ تَرْتَبِطُ بِمَا نَسْتَهْلِكُهُ نَحْنُ فِي لَنْدَنَ مِنْ طَاقَةٍ وَمَلَابِسَ وَطَعَامٍ.
صَحِيحٌ أَنَّ العَوْلَمَةَ لَيْسَتْ عَادِلَةً دَائِمًا، غَيْرَ أَنَّهَا تُتِيحُ لِجِيلِنَا فُرْصَةً لَمْ يَحْظَ بِهَا أَجْدَادُنَا: أَنْ نَعْرِفَ العَالَمَ وَنُغَيِّرَهُ. وَلَوْ عَمِلْتُ يَوْمًا فِي الأُمَمِ المُتَّحِدَةِ، لَجَعَلْتُ صَوْتَ الشَّبَابِ مَسْمُوعًا فِي كُلِّ قَرَارٍ.`;
const Q3B_FULL = `نَعِيشُ فِي عَالَمٍ يُصْنَعُ فِيهِ الهَاتِفُ الوَاحِدُ فِي عَشْرِ دُوَلٍ، وَتُشَاهَدُ فِيهِ الأُغْنِيَةُ نَفْسُهَا فِي كُلِّ القَارَّاتِ خِلَالَ يَوْمٍ وَاحِدٍ، وَتُنْقَلُ الأَخْبَارُ قَبْلَ أَنْ تَنْتَهِيَ الأَحْدَاثُ. فَهَلِ العَوْلَمَةُ نِعْمَةٌ أَمْ نِقْمَةٌ؟
مِنْ نَاحِيَةٍ، أَخْرَجَتِ التِّجَارَةُ الدُّوَلِيَّةُ مَلَايِينَ النَّاسِ مِنَ الفَقْرِ، وَجَعَلَتِ المَعْرِفَةَ وَالدَّوَاءَ فِي مُتَنَاوَلِ عَدَدٍ أَكْبَرَ مِنَ البَشَرِ، كَمَا فَتَحَتْ أَسْوَاقًا جَدِيدَةً لِلشَّرِكَاتِ الصَّغِيرَةِ. وَمِنْ نَاحِيَةٍ أُخْرَى، تُغْلَقُ المَصَانِعُ المَحَلِّيَّةُ أَحْيَانًا لِأَنَّ الإِنْتَاجَ أَرْخَصُ فِي مَكَانٍ آخَرَ، مِمَّا يُفْقِدُ العُمَّالَ وَظَائِفَهُمْ، وَتُهَدَّدُ الثَّقَافَاتُ الصَّغِيرَةُ أَمَامَ الثَّقَافَاتِ الأَقْوَى.
وَقَدْ رَأَيْتُ الوَجْهَيْنِ فِي عَائِلَتِي؛ فَعَمِّي فِي المَغْرِبِ فَقَدَ عَمَلَهُ فِي مَصْنَعِ نَسِيجٍ نُقِلَ إِلَى آسْيَا، بَيْنَمَا وَجَدَتِ ابْنَتُهُ عَمَلًا فِي شَرِكَةٍ دُوَلِيَّةٍ لِلتَّصْدِيرِ بِفَضْلِ لُغَاتِهَا وَشَهَادَتِهَا الجَامِعِيَّةِ.
لِذٰلِكَ أَرَى أَنَّ العَوْلَمَةَ لَيْسَتْ نِعْمَةً خَالِصَةً وَلَا نِقْمَةً خَالِصَةً، بَلْ قُوَّةٌ تَحْتَاجُ إِلَى قَوَانِينَ عَادِلَةٍ وَحُكُومَاتٍ مَسْؤُولَةٍ. فَإِذَا وُضِعَ الإِنْسَانُ قَبْلَ الرِّبْحِ، فَسَتُصْبِحُ نِعْمَةً لِلْجَمِيعِ لَا لِلْقِلَّةِ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a Model UN delegate form, write an email about a Model UN conference, and write an extended piece about how your life connects with the world or about whether globalisation is a blessing or a curse — with conditionals, the passive and balance.',
  lift: [
    { ar: 'صُنِعَ هَاتِفِي فِي الصِّينِ، وَصُنِعَتْ مَلَابِسِي فِي بَنْغْلَادِيشَ', en: 'my phone was made in China, and my clothes in Bangladesh' },
    { ar: 'إِذَا حَصَلْتُ عَلَى مِنْحَةٍ، فَسَأَدْرُسُ …', en: 'if I get a scholarship, I will study …' },
    { ar: 'مِنْ نَاحِيَةٍ … ، وَمِنْ نَاحِيَةٍ أُخْرَى …', en: 'on the one hand …, on the other …' },
  ],
  checkTip: 'Check the passive: ṣuniʿa (m.) / ṣuniʿat (f. and non-human plurals: ṣuniʿat malābisī), nūqishat, qubila; conditionals: idhā + PAST … fa-sa- (never idhā + sa-), law + past … la- + past; balance with min nāḥiyatin … wa-min nāḥiyatin ukhrā; feminine for a female writer (saʿīda, mandūba).',
  FORM: {
    title: 'Model UN delegate form', ar: 'اسْتِمَارَةُ مَنْدُوبِ نَمُوذَجِ الأُمَمِ المُتَّحِدَةِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'هِبَةُ يُوسُفَ', modelEn: 'Hiba Youssef' },
      { core: true, ar: 'المَدْرَسَةُ', en: 'School', model: 'مَدْرَسَةُ المَدِينَةِ', modelEn: 'Al Madina School' },
      { core: true, ar: 'البَلَدُ الَّذِي تُمَثِّلِينَهُ', en: 'Country you represent', model: 'المَغْرِبُ', modelEn: 'Morocco' },
      { core: true, ar: 'اللَّجْنَةُ', en: 'Committee', model: 'لَجْنَةُ البِيئَةِ', modelEn: 'the environment committee' },
      { core: true, ar: 'القَضِيَّةُ', en: 'Issue', model: 'الجَفَافُ فِي إِفْرِيقْيَا', modelEn: 'drought in Africa' },
      { core: true, ar: 'اللُّغَاتُ', en: 'Languages', model: 'الإِنْجْلِيزِيَّةُ وَالعَرَبِيَّةُ وَالفَرَنْسِيَّةُ', modelEn: 'English, Arabic and French' },
      { ar: 'خِبْرَةٌ سَابِقَةٌ', en: 'Previous experience', model: 'مُؤْتَمَرُ لَنْدَنَ ٢٠٢٥', modelEn: 'London conference 2025' },
      { ar: 'جُمْلَةٌ: مَا اقْتِرَاحُكِ؟', en: 'ONE sentence: your proposal', model: 'إِذَا دُعِمَ المُزَارِعُونَ بِالمَاءِ وَالتَّدْرِيبِ، فَسَيَقِلُّ الجُوعُ فِي المِنْطَقَةِ.', modelEn: 'If farmers are supported with water and training, hunger in the region will fall.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with idhā + a passive and fa-sa-.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 3 heading: a relative clause with a returning pronoun (tumaththilīnahu — a boy reads تُمَثِّلُهُ). Box 8 combines a passive (duʿima) with a conditional.',
  },
  Q2: {
    short: 'an email about a Model UN conference', title: 'Question 2: my Model UN conference', ar: 'مُؤْتَمَرُ نَمُوذَجِ الأُمَمِ المُتَّحِدَةِ',
    task: 'Write an email in Arabic to a friend of about 80–90 words. You must include: • where the conference was and who took part • which country you represented and what you spoke about • what was discussed or decided (use the passive) • your opinion and your plans (use a conditional), and a question for your friend.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Two passive verbs.', 'One conditional (idhā … fa-sa-).', 'About 80–90 words.'],
    phrases: [['عُدْتُ مِنْ مُؤْتَمَرِ …', 'I came back from the … conference'], ['مَثَّلْتُ … وَتَكَلَّمْتُ عَنْ …', 'I represented … and spoke about …'], ['نُوقِشَتْ قَضَايَا كَثِيرَةٌ، وَقُبِلَ …', 'many issues were discussed, and … was accepted'], ['إِذَا نَجَحْتُ … فَسَأُشَارِكُ …', 'if I succeed … I will take part …']],
    rubric: [
      ['task', 'اكْتُبِي رِسَالَةً إِلَى صَدِيقَتِكِ عَنْ مُؤْتَمَرِ نَمُوذَجِ الأُمَمِ المُتَّحِدَةِ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about the Model UN conference (80–90 words).'],
      ['1', 'أَيْنَ كَانَ المُؤْتَمَرُ؟ وَمَنْ شَارَكَ فِيهِ؟', 'Where it was; who took part'],
      ['2', 'أَيَّ بَلَدٍ مَثَّلْتِ؟ وَعَنْ أَيِّ مَوْضُوعٍ تَكَلَّمْتِ؟', 'Which country; what you spoke about'],
      ['3', 'مَاذَا نُوقِشَ أَوْ قُرِّرَ؟', 'What was discussed or decided'],
      ['4', 'مَا رَأْيُكِ؟ وَمَا خِطَطُكِ؟ وَاسْأَلِي صَدِيقَتَكِ سُؤَالًا.', 'Your opinion; plans; a question'],
    ],
    qwords: 'مَنْ شَارَكَ (who took part) · مَثَّلْتِ (you represented — PAST) · نُوقِشَ / قُرِّرَ (was discussed / decided — PASSIVE) · خِطَطُكِ (plans → إِذَا … فَسَأُشَارِكُ)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكِ؟', 'Hello …, how are you?'],
      ['1', 'عُدْتُ مِنْ مُؤْتَمَرِ ______ فِي ______ ، وَكَانَ فِيهِ ______ .', 'I’m back from the … conference in …'],
      ['2', 'مَثَّلْتُ ______ ، وَتَكَلَّمْتُ عَنْ ______ .', 'I represented …, and spoke about …'],
      ['3', 'نُوقِشَتْ ______ ، وَقُبِلَ ______ .', '… were discussed, and … was accepted.'],
      ['4', 'أَظُنُّ أَنَّ ______ . إِذَا ______ ، فَسَأُشَارِكُ ______ .', 'I think … If …, I’ll take part …'],
      ['end', 'وَأَنْتِ، ______ ؟ مَعَ السَّلَامَةِ.', 'And you, …? Goodbye.'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Dina, how are you? I got back yesterday from the Model UN conference in London! There were students from twenty schools. I represented Morocco and spoke about climate change. Many issues were discussed, such as poverty and clean water. On the last day my proposal was accepted, so I was very happy! I think the conference is useful, because we learn about the world and speak in public. If I pass the selection, I’ll take part in an international conference in Geneva. And you, would you like to join the club? Goodbye, Hiba.”',
      find: ['مَثَّلْتُ المَغْرِبَ', 'نُوقِشَتْ قَضَايَا', 'قُبِلَ اقْتِرَاحِي', 'إِذَا نَجَحْتُ … فَسَأُشَارِكُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Dina, I’m still excited after two days at the Model UN conference, held in London with two hundred students. I was Morocco’s delegate on the environment committee and defended African countries’ right to support against drought. After long debate, my proposal was voted on and passed by a large majority! I was afraid of speaking to the hall, but the experience taught me persuasion needs evidence, not a loud voice. What amazed me most was that students from different cultures could agree. If I’m selected for the national team, I’ll travel to Geneva in the spring. Won’t you try it with me? With love, Hiba.”',
      find: ['الَّذِي نُظِّمَ', 'صُوِّتَ عَلَى اقْتِرَاحِي وَقُبِلَ', 'أَدِلَّةٍ لَا إِلَى صَوْتٍ عَالٍ', 'إِذَا اخْتِرْتُ … فَسَأُسَافِرُ'],
    },
  },
  Q3: {
    a: { title: 'كَيْفَ تَرْتَبِطُ حَيَاتِي بِالعَالَمِ', en: 'How my life connects with the world', bullets: 'أَشْيَاءُ فِي حَيَاتِكَ مِنْ بُلْدَانٍ أُخْرَى · أَصْدِقَاؤُكَ وَتَوَاصُلُكَ · نَشَاطٌ دُوَلِيٌّ شَارَكْتَ فِيهِ · رَأْيُكَ فِي العَوْلَمَةِ وَخُطَطُكَ', bulletsEn: 'Things in your life from other countries · your friends and contacts · an international activity you took part in · your view of globalisation and your plans' },
    b: { title: 'هَلِ العَوْلَمَةُ نِعْمَةٌ أَمْ نِقْمَةٌ؟', en: 'Is globalisation a blessing or a curse?', bullets: 'المَوْضُوعُ · المَزَايَا وَالعُيُوبُ · مِثَالٌ مِنْ حَيَاتِكَ أَوْ عَائِلَتِكَ · رَأْيُكَ', bulletsEn: 'The issue · advantages and disadvantages · an example from your life or family · your opinion' },
    plan: [
      'Things — mathalan, ṣuniʿa hātifī fī …, wa-ṣuniʿat malābisī fī …, wa-zuriʿat …',
      'People — ʿindī aṣdiqāʾu fī …; atakallamu maʿa … kulla usbūʿin; natakallamu bi- …',
      'An activity — fī as-sanati al-māḍiya maththaltu … fī muʾtamarin; taʿallamtu anna …',
      'Opinion + future — min nāḥiyatin … wa-min nāḥiyatin ukhrā …; idhā ḥaṣaltu ʿalā … fa-sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'صُنِعَ هَاتِفِي فِي الصِّينِ.', en: 'passive: my phone was made in China.' },
      { ar: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', en: 'balance: on one hand … on the other …' },
      { ar: 'إِذَا حَصَلْتُ عَلَى مِنْحَةٍ، فَسَأَدْرُسُ فِي الخَارِجِ.', en: 'conditional: if I get a grant, I’ll study abroad.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'My life connects to the world: phone made in China, clothes in Bangladesh, coffee grown in Ethiopia → friends in Canada, Egypt and Malaysia → at Model UN I represented Morocco on climate change: global problems need cooperation → globalisation teaches us about cultures, but some workers earn little; if I get a scholarship, I’ll study international relations.', find: ['صُنِعَ هَاتِفِي', 'زُرِعَتِ القَهْوَةُ', 'مِنْ نَاحِيَةٍ', 'إِذَا حَصَلْتُ … فَسَأَدْرُسُ'], notes: 'Core model: three passives (ṣuniʿa, ṣuniʿat, zuriʿat) with agreement, a relative clause with a returning pronoun, past experience (maththaltu, takallamtu), a balanced paragraph and idhā + past … fa-sa- with li-annī.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Before leaving home each morning I’ve visited three continents without moving: mum’s coffee grown in Ethiopia, my phone made in China, the news I read written in New York and Doha and read everywhere → the links aren’t just things: I have friends in Canada, Malaysia and Egypt with whom I swap views, songs and recipes, until borders feel more like lines on a map than walls between people, and friendship needs no passport → the feeling deepened when I represented Morocco at Model UN: drought in Africa isn’t distant news but linked to the energy, clothes and food we consume in London → globalisation isn’t always fair, but it gives our generation a chance our grandparents never had — to know the world and change it; “if I ever worked at the UN, I’d make young people’s voices heard in every decision”.', find: ['أَكُونُ قَدْ زُرْتُ', 'أَكْثَرَ مِنْهَا جُدْرَانًا', 'لَيْسَ خَبَرًا بَعِيدًا، بَلْ', 'لَوْ عَمِلْتُ … لَجَعَلْتُ'], notes: 'Full-mark model: akūnu qad (future perfect), dūna an, three passives incl. present tuktabu, a fem. plural pronoun (maʿahunna), ḥattā ṣirtu, akthara minhā (comparison of two predicates), idh adraktu, laysa … bal, lam yaḥẓa bihā and law … la- with a passive participle (masmūʿan).' },
      { which: 'ب', level: 'Full', subtitle: 'blessing or curse?', text: Q3B_FULL, en: 'We live in a world where one phone is made in ten countries and the same song is watched on every continent in a day, and news travels before events end — is globalisation a blessing or a curse? → international trade lifted millions from poverty and put knowledge and medicine within reach of more people and opened new markets to small businesses; yet local factories sometimes close because production is cheaper elsewhere, costing workers their jobs, and small cultures are threatened by stronger ones → I saw both faces in my family: my uncle in Morocco lost his job when his textile factory moved to Asia, while his daughter found work in an international export firm thanks to her languages and degree → it is neither pure blessing nor pure curse but a force needing fair laws and responsible governments; “if people are put before profit, it will become a blessing for all, not the few”.', find: ['يُصْنَعُ فِيهِ … وَتُشَاهَدُ فِيهِ', 'فِي مُتَنَاوَلِ', 'نُقِلَ إِلَى آسْيَا، بَيْنَمَا', 'إِذَا وُضِعَ … فَسَتُصْبِحُ'], notes: 'Full-mark model for the Stretch title: two present passives in relative clauses (yuṣnaʿu fīhi, tushāhadu fīhi), a hal … am question, min nāḥiyatin … wa-min nāḥiyatin ukhrā with passives (tughlaqu, tuhaddadu) and mimmā, a family example with baynamā, laysat … wa-lā … bal, and idhā + passive … fa-sa-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic, with a conditional in box 8.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: two passives and idhā … fa-sa-.' },
    { route: 'develop', text: 'Q3: a balanced paragraph (min nāḥiyatin … wa-min nāḥiyatin ukhrā).' },
    { route: 'stretch', text: 'Q3: a concession and law … la-.' },
  ],
};

module.exports = { speak, write };
