'use strict';
/* Exam-practice data · FR-L02 · Final Revision — People, Home and Free Time (Topic B: identity, family and friends, appearance and personality, home and furniture, colours, clothes and shopping, hobbies and sport, invitations, holidays and past experiences). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'R', n: 2, short: 'People, Home and Free Time', arShort: 'النَّاسُ وَالبَيْتُ وَوَقْتُ الفَرَاغِ', fileTitle: 'People_Home_and_Free_Time', title: 'Final Revision — People, Home and Free Time', ar: 'مُرَاجَعَةٌ: النَّاسُ وَالبَيْتُ وَوَقْتُ الفَرَاغِ', icon: 'FaHouseUser', grammar: 'Topic B revision: adjective agreement (m. / f. / non-human pl.), colours (aḥmar / ḥamrāʾ), possessives, prepositions of place, the past for holidays and experiences, invitations (hal turīdīna an …?), comparatives' };

const speak = {
  ...base,
  focus: 'Final-revision Paper 3 practice on Topic B in breakout rooms: describing people, family and friends, your home and room, clothes and shopping, hobbies, invitations and holidays. Exam skills: agreement is a quick win (طَوِيلٌ / طَوِيلَةٌ · غُرَفٌ وَاسِعَةٌ), ask questions when the card says ASK, and use the past for holidays and experiences.',
  words: [
    w(1, 'عُمْرِي … سَنَةً', 'I am … years old', [['my birthday', 'عِيدُ مِيلَادِي'], ['born in', 'وُلِدْتُ فِي']], { tag: 'B · L01' }),
    w(2, 'أَخٌ · أُخْتٌ', 'a brother · a sister', [['brothers', 'إِخْوَةٌ'], ['sisters', 'أَخَوَاتٌ']], { tag: 'B · L02' }),
    w(3, 'طَوِيلٌ · طَوِيلَةٌ', 'tall (m. · f.)', [['kind (m. · f.)', 'لَطِيفٌ · لَطِيفَةٌ'], ['funny (m. · f.)', 'مَرِحٌ · مَرِحَةٌ']], { tag: 'B · L03' }),
    w(4, 'غُرْفَتِي وَاسِعَةٌ', 'my room is spacious', [['rooms (non-hum. pl. → f.)', 'غُرَفٌ وَاسِعَةٌ'], ['garden', 'حَدِيقَةٌ']], { tag: 'B · L04' }),
    w(5, 'بِجَانِبِ · فَوْقَ · تَحْتَ', 'next to · above · under', [['in front of', 'أَمَامَ'], ['behind', 'خَلْفَ']], { tag: 'B · L05' }),
    w(6, 'أَحْمَرُ · حَمْرَاءُ', 'red (m. · f.)', [['blue (m. · f.)', 'أَزْرَقُ · زَرْقَاءُ'], ['white (m. · f.)', 'أَبْيَضُ · بَيْضَاءُ']], { tag: 'B · L06' }),
    w(7, 'مَقَاسٌ', 'a size', [['too big', 'كَبِيرٌ جِدًّا'], ['may I try it on?', 'هَلْ أَسْتَطِيعُ أَنْ أُجَرِّبَهُ؟']], { tag: 'B · L07' }),
    w(8, 'هِوَايَتِي …', 'my hobby is …', [['I play', 'أَلْعَبُ'], ['in my free time', 'فِي وَقْتِ فَرَاغِي']], { tag: 'B · L08' }),
    w(9, 'هَلْ تُرِيدِينَ أَنْ …؟', 'would you like to …? (f.)', [['with pleasure', 'بِكُلِّ سُرُورٍ'], ['sorry, I can’t', 'آسِفَةٌ، لَا أَسْتَطِيعُ']], { tag: 'B · L09' }),
    w(10, 'قَضَيْتُ العُطْلَةَ فِي …', 'I spent the holiday in …', [['we stayed', 'أَقَمْنَا'], ['it was', 'كَانَ / كَانَتْ']], { tag: 'B · L09' }),
    w(11, 'أَكْبَرُ مِنْ · أَجْمَلُ مِنْ', 'bigger than · prettier than', [['my best friend', 'أَعَزُّ صَدِيقَاتِي'], ['the same', 'نَفْسُ … / … نَفْسُهُ']], { tag: 'comparison' }),
    w(12, 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', 'it is true that … but …', [['if … would', 'لَوْ كَانَ عِنْدِي بَيْتٌ كَبِيرٌ لَدَعَوْتُ'], ['which (result)', 'مِمَّا']], { tag: 'top band' }),
  ],
  words1: { eyebrow: 'Language bank · Topic B in twelve structures', title: 'People, home and free time', ar: 'المِحْوَرُ الثَّانِي فِي اثْنَتَيْ عَشْرَةَ بِنْيَةً', notes: 'LANGUAGE BANK (2 min) — a revision map of Topic B. EXAM TIP: agreement errors are the most common slip — check every adjective: a girl is طَوِيلَةٌ; a red bag is حَقِيبَةٌ حَمْرَاءُ; rooms are غُرَفٌ وَاسِعَةٌ (non-human plural → feminine singular).' },
  words2: { eyebrow: 'Language bank · structures that lift a mark', title: 'Describe, compare, narrate', ar: 'بِنْيَاتٌ تَرْفَعُ الدَّرَجَةَ', notes: 'LANGUAGE BANK (2 min) — lift a description with a comparison (أَكْبَرُ مِنْ), a past experience (قَضَيْتُ … وَكَانَ …) and an opinion with a reason. EXAM TIP: when the card says ASK, start with a question word: مَتَى · أَيْنَ · كَمْ · هَلْ.' },
  checkCore: 'described a person or a room with correct agreement',
  checkDevelop: 'used a comparison and the past for a holiday or experience',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a clothes shop', title: 'Role play A — Buying a jacket', ar: 'فِي مَحَلِّ المَلَابِسِ', you: 'a customer', them: 'the shop assistant',
      tasks: [
        { core: true, ex: 'أَهْلًا! كَيْفَ أُسَاعِدُكِ؟', task: 'Say what you want.', help: 'أُرِيدُ …', model: 'أُرِيدُ سُتْرَةً لِلشِّتَاءِ، مِنْ فَضْلِكِ.', modelEn: 'I’d like a winter jacket, please.' },
        { core: true, ex: 'أَيَّ لَوْنٍ تُفَضِّلِينَ؟', task: 'Give a colour (agreement).', help: 'أُفَضِّلُ … (f.)', model: 'أُفَضِّلُ سُتْرَةً زَرْقَاءَ.', modelEn: 'I prefer a blue jacket.' },
        { core: true, ex: 'مَا مَقَاسُكِ؟', task: 'Give your size.', help: 'مَقَاسِي …', model: 'مَقَاسِي مُتَوَسِّطٌ.', modelEn: 'Medium.' },
        { core: true, ex: 'تَفَضَّلِي، هٰذِهِ جَمِيلَةٌ.', task: 'Ask the price.', help: 'كَمْ ثَمَنُهَا؟', model: 'كَمْ ثَمَنُهَا؟', modelEn: 'How much is it?' },
        { core: true, unexpected: true, ex: 'أَرْبَعُونَ جُنَيْهًا. لِأَيِّ مُنَاسَبَةٍ تَشْتَرِينَهَا؟', task: 'Answer the unexpected question.', help: 'لِأَنِّي سَأُسَافِرُ إِلَى …', model: 'لِأَنِّي سَأُسَافِرُ إِلَى اسْكُتْلَنْدَا فِي العُطْلَةِ.', modelEn: 'Because I’m travelling to Scotland in the holiday.' },
      ],
      girl: '(model is f.; to a boy: أُسَاعِدُكَ · تُفَضِّلُ · مَقَاسُكَ · تَشْتَرِيهَا)',
      notes: 'Core: colour agreement with a feminine noun (sutratan zarqāʾa), maqāsī, kam thamanuhā? (-hā because sutra is f.), sa- + li-annī. EXAM TIP: listen for the gender in the examiner’s question and keep it in your answer.',
    },
    {
      id: 'B', level: 'Core+', setting: 'a phone call', title: 'Role play B — A birthday invitation', ar: 'دَعْوَةٌ إِلَى عِيدِ مِيلَادٍ', you: 'a teenager having a party', them: 'your friend',
      tasks: [
        { core: true, ex: 'أَلُو، مَرْحَبًا!', task: 'Invite your friend (day and place).', help: 'هَلْ تُرِيدِينَ أَنْ تَأْتِيَ إِلَى … يَوْمَ …؟', model: 'مَرْحَبًا! هَلْ تُرِيدِينَ أَنْ تَأْتِيَ إِلَى حَفْلَةِ عِيدِ مِيلَادِي يَوْمَ السَّبْتِ؟', modelEn: 'Hi! Would you like to come to my birthday party on Saturday?' },
        { core: true, ex: 'بِكُلِّ سُرُورٍ! فِي أَيِّ سَاعَةٍ؟', task: 'Give the time and place.', help: 'فِي السَّاعَةِ … فِي …', model: 'فِي السَّاعَةِ الرَّابِعَةِ، فِي حَدِيقَةِ بَيْتِنَا.', modelEn: 'At four, in our garden.' },
        { ex: 'مَاذَا سَنَفْعَلُ؟', task: 'Describe two plans.', help: 'سَنَأْكُلُ … ثُمَّ …', model: 'سَنَأْكُلُ البِيتْزَا وَالكَعْكَةَ، ثُمَّ سَنَلْعَبُ أَلْعَابًا فِي الحَدِيقَةِ.', modelEn: 'We’ll eat pizza and cake, then play games in the garden.' },
        { ex: 'رَائِعٌ! مَاذَا أَلْبَسُ؟', task: 'Answer, then ASK a question.', help: 'الْبَسِي … ؛ وَهَلْ …؟', model: 'الْبَسِي مَلَابِسَ مُرِيحَةً. وَهَلْ تَسْتَطِيعِينَ أَنْ تُحْضِرِي أُخْتَكِ أَيْضًا؟', modelEn: 'Wear comfy clothes. And can you bring your sister too?' },
        { unexpected: true, ex: 'طَبْعًا. مَاذَا فَعَلْتِ فِي عِيدِ مِيلَادِكِ المَاضِي؟', task: 'Answer the unexpected question (past).', help: 'ذَهَبْتُ … وَكَانَ …', model: 'ذَهَبْتُ مَعَ أُسْرَتِي إِلَى مَطْعَمٍ تُرْكِيٍّ، وَكَانَ الطَّعَامُ لَذِيذًا جِدًّا.', modelEn: 'I went to a Turkish restaurant with my family — the food was delicious.' },
      ],
      girl: '(model is f.; to a boy: تُرِيدُ · الْبَسْ · تَسْتَطِيعُ أَنْ تُحْضِرَ أَخَاكَ · فَعَلْتَ)',
      notes: 'Core+: hal turīdīna an + subjunctive (L09), time and place, sa- + thumma, an imperative + the CANDIDATE asks (hal tastaṭīʿīna an …?), a past experience (L09). EXAM TIP: two questions in one task? Answer both parts.',
    },
    {
      id: 'C', level: 'Develop', setting: 'a video call', title: 'Role play C — My family, friends and home', ar: 'عَائِلَتِي وَأَصْدِقَائِي وَبَيْتِي', you: 'a student', them: 'a new e-pal in Jordan',
      tasks: [
        { ex: 'حَدِّثِينِي عَنْ عَائِلَتِكِ.', task: 'Describe family members (agreement).', help: 'عِنْدِي … ؛ أُخْتِي … وَأَخِي …', model: 'عِنْدِي أُخْتٌ وَأَخَوَانِ؛ أُخْتِي طَوِيلَةٌ وَهَادِئَةٌ، أَمَّا أَخِي الصَّغِيرُ فَمَرِحٌ لٰكِنَّهُ مُزْعِجٌ أَحْيَانًا!', modelEn: 'One sister and two brothers: my sister is tall and quiet; my little brother is funny but sometimes annoying!' },
        { ex: 'وَمَنْ أَعَزُّ صَدِيقَاتِكِ؟', task: 'Describe a friend with a comparison.', help: 'أَعَزُّ صَدِيقَاتِي … ؛ هِيَ أَ… مِنِّي', model: 'أَعَزُّ صَدِيقَاتِي اسْمُهَا جُودِي؛ هِيَ أَطْوَلُ مِنِّي، وَشَعْرُهَا أَسْوَدُ، وَهِيَ صَادِقَةٌ وَتَسْمَعُنِي دَائِمًا.', modelEn: 'My best friend is Judy: taller than me, black hair, honest and always listens.' },
        { ex: 'صِفِي لِي غُرْفَتَكِ.', task: 'Describe a room with prepositions.', help: 'غُرْفَتِي … ؛ فِيهَا … بِجَانِبِ …', model: 'غُرْفَتِي صَغِيرَةٌ لٰكِنَّهَا مُرَتَّبَةٌ؛ فِيهَا سَرِيرٌ أَبْيَضُ بِجَانِبِ النَّافِذَةِ، وَمَكْتَبٌ تَحْتَ رُفُوفِ الكُتُبِ.', modelEn: 'Small but tidy: a white bed by the window and a desk under the bookshelves.' },
        { ex: 'مَاذَا تَفْعَلِينَ فِي وَقْتِ فَرَاغِكِ؟', task: 'Hobbies with frequency and reason.', help: 'أَ… مَرَّتَيْنِ فِي الأُسْبُوعِ، لِأَنَّ …', model: 'أَرْسُمُ كُلَّ يَوْمٍ تَقْرِيبًا، وَأَلْعَبُ كُرَةَ الشَّبَكَةِ مَرَّتَيْنِ فِي الأُسْبُوعِ، لِأَنَّهَا تُعَلِّمُنِي العَمَلَ الجَمَاعِيَّ.', modelEn: 'I draw almost daily and play netball twice a week — it teaches teamwork.' },
        { unexpected: true, ex: 'أَيْنَ قَضَيْتِ العُطْلَةَ الصَّيْفِيَّةَ؟', task: 'Answer the unexpected question (past narrative).', help: 'قَضَيْتُهَا فِي … ؛ أَقَمْنَا … وَ…', model: 'قَضَيْتُهَا فِي إِسْبَانْيَا؛ أَقَمْنَا فِي شَقَّةٍ قُرْبَ البَحْرِ، وَسَبَحْنَا كُلَّ يَوْمٍ، وَزُرْنَا قَصْرَ الحَمْرَاءِ.', modelEn: 'In Spain: a flat near the sea, swimming every day, and a visit to the Alhambra.' },
      ],
      girl: '(model is f.; to a boy: عَائِلَتِكَ · أَعَزُّ أَصْدِقَائِكَ · صِفْ · غُرْفَتَكَ · تَفْعَلُ · قَضَيْتَ)',
      notes: 'Develop: agreement in the dual and singular (L02–L03), ammā … fa- + lākinnahu, aʿazzu ṣadīqātī + aṭwalu minnī (L03), a room with prepositions and colours (L04–L06), frequency + li-anna (L08), a past holiday (L09).',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a school podcast', title: 'Role play D — Real friends in a digital age', ar: 'الصَّدَاقَةُ فِي عَصْرِ الشَّاشَاتِ', you: 'a student guest', them: 'the podcast host',
      tasks: [
        { ex: 'هَلْ تَكْفِي صَدَاقَاتُ الإِنْتَرْنِتِ؟', task: 'Give a balanced thesis.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، تَجْمَعُنَا بِأَصْدِقَاءَ يُشَارِكُونَنَا هِوَايَاتِنَا فِي بُلْدَانٍ بَعِيدَةٍ، وَمِنْ نَاحِيَةٍ أُخْرَى، لَا تُعَوِّضُ عَنْ صَدِيقٍ يَجْلِسُ بِجَانِبِكَ حِينَ تَحْزَنُ.', modelEn: 'They connect us with friends who share hobbies far away, but can’t replace a friend sitting beside you when you’re sad.' },
        { ex: 'مَا صِفَاتُ الصَّدِيقِ الحَقِيقِيِّ فِي رَأْيِكِ؟', task: 'Define with relative clauses.', help: 'الصَّدِيقُ الحَقِيقِيُّ هُوَ الَّذِي …', model: 'الصَّدِيقُ الحَقِيقِيُّ هُوَ الَّذِي يَقُولُ لَكَ الحَقِيقَةَ وَلَوْ كَانَتْ صَعْبَةً، وَيَفْرَحُ لِنَجَاحِكَ دُونَ غَيْرَةٍ.', modelEn: 'One who tells you the truth even when it’s hard, and is glad at your success without jealousy.' },
        { ex: 'هَلْ عِشْتِ تَجْرِبَةً تُثْبِتُ ذٰلِكَ؟', task: 'Narrate a past experience with a result.', help: 'عِنْدَمَا … كَانَ … فَـ…', model: 'عِنْدَمَا كَسَرْتُ رِجْلِي فِي الصَّيْفِ، كَانَ لِي مِئَاتُ المُتَابِعِينَ، غَيْرَ أَنَّ صَدِيقَتَيْنِ فَقَطْ زَارَتَانِي كُلَّ يَوْمٍ، فَعَرَفْتُ الفَرْقَ.', modelEn: 'When I broke my leg I had hundreds of followers, but only two friends visited daily — I learnt the difference.' },
        { ex: 'لٰكِنَّ الشَّبَابَ يُفَضِّلُونَ الهَاتِفَ عَلَى اللِّقَاءِ.', task: 'Concede and propose.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ … ؛ لِذٰلِكَ …', model: 'صَحِيحٌ أَنَّ الهَاتِفَ أَسْهَلُ، غَيْرَ أَنَّ اللِّقَاءَ أَدْفَأُ؛ لِذٰلِكَ أَقْتَرِحُ أَنْ نَتْرُكَ الهَوَاتِفَ فِي سَلَّةٍ عِنْدَمَا نَجْتَمِعُ.', modelEn: 'The phone is easier, but meeting is warmer — so let’s leave phones in a basket when we get together.' },
        { unexpected: true, ex: 'لَوِ اسْتَطَعْتِ أَنْ تَقْضِيَ يَوْمًا كَامِلًا مَعَ صَدِيقَتِكِ، مَاذَا تَفْعَلَانِ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوِ اسْتَطَعْتُ، لَـ…', model: 'لَوِ اسْتَطَعْتُ، لَذَهَبْنَا إِلَى الشَّاطِئِ صَبَاحًا، وَلَطَبَخْنَا مَعًا فِي المَسَاءِ، وَلَمَا فَتَحْنَا الهَاتِفَ مَرَّةً وَاحِدَةً!', modelEn: 'We’d go to the beach in the morning, cook together in the evening, and not open our phones once!' },
      ],
      girl: '(model is f.; to a boy: رَأْيِكَ · عِشْتَ · اسْتَطَعْتَ · تَقْضِيَ · صَدِيقِكَ · تَفْعَلَانِ)',
      notes: 'Stretch: a balanced thesis, alladhī + wa-law, a past narrative with a dual verb (zāratānī), a concession with comparatives (ashal / adfaʾ) + aqtariḥu an, law … la- ×3 incl. la-mā (negative). EXAM TIP: one strong concession is worth more than three opinions.',
      modelFoot: 'Stretch: friendship, a definition, a narrated turning point, a proposal and law … la- — all of Topic B’s people and free-time language.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'أَنَا وَعَائِلَتِي', aim: 'one full sentence per question',
      qs: [
        { q: 'صِفْ نَفْسَكَ.', en: 'Describe yourself.', start: 'أَنَا … وَ…', model: 'أَنَا قَصِيرٌ وَنَشِيطٌ.', modelEn: 'I’m short and active.' },
        { q: 'كَمْ شَخْصًا فِي عَائِلَتِكَ؟', en: 'How many people are in your family?', start: 'فِي عَائِلَتِي …', model: 'فِي عَائِلَتِي خَمْسَةُ أَشْخَاصٍ.', modelEn: 'Five people.' },
        { q: 'صِفْ بَيْتَكَ.', en: 'Describe your home.', start: 'بَيْتِي … وَفِيهِ …', model: 'بَيْتِي كَبِيرٌ، وَفِيهِ ثَلَاثُ غُرَفِ نَوْمٍ.', modelEn: 'Big, with three bedrooms.' },
        { q: 'مَا لَوْنُكَ المُفَضَّلُ؟', en: 'What is your favourite colour?', start: 'لَوْنِي المُفَضَّلُ …', model: 'لَوْنِيَ المُفَضَّلُ الأَخْضَرُ.', modelEn: 'Green.' },
        { q: 'مَا هِوَايَتُكَ؟', en: 'What is your hobby?', start: 'هِوَايَتِي …', model: 'هِوَايَتِي السِّبَاحَةُ.', modelEn: 'Swimming.' },
      ],
      foot: 'Core: one full sentence for every question — check every adjective agrees. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + correct agreement = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'حَيَاتِي وَوَقْتُ فَرَاغِي', aim: 'two or three sentences, with a comparison and a past or future detail',
      qs: [
        { q: 'صِفْ شَخْصًا مُهِمًّا فِي حَيَاتِكَ.', en: 'Describe an important person in your life.', start: '… شَخْصٌ … ؛ هُوَ / هِيَ … وَ…', model: 'جَدَّتِي شَخْصٌ مُهِمٌّ جِدًّا؛ هِيَ قَصِيرَةٌ وَشَعْرُهَا أَبْيَضُ، وَهِيَ أَطْيَبُ إِنْسَانَةٍ أَعْرِفُهَا.', modelEn: 'My grandmother: short, white-haired, the kindest person I know.' },
        { q: 'مَا الغُرْفَةُ المُفَضَّلَةُ فِي بَيْتِكَ؟', en: 'What is your favourite room at home?', start: 'غُرْفَتِي المُفَضَّلَةُ … لِأَنَّ … ؛ فِيهَا …', model: 'غُرْفَتِيَ المُفَضَّلَةُ المَطْبَخُ، لِأَنَّ العَائِلَةَ تَجْتَمِعُ فِيهِ؛ فِيهِ طَاوِلَةٌ خَشَبِيَّةٌ كَبِيرَةٌ.', modelEn: 'The kitchen — the family gathers there around a big wooden table.' },
        { q: 'مَاذَا اشْتَرَيْتَ آخِرَ مَرَّةٍ ذَهَبْتَ إِلَى السُّوقِ؟', en: 'What did you buy last time you went shopping?', start: 'اشْتَرَيْتُ … لَوْنُهُ … وَكَانَ …', model: 'اشْتَرَيْتُ حِذَاءً رِيَاضِيًّا لَوْنُهُ أَبْيَضُ، وَكَانَ أَرْخَصَ مِمَّا تَوَقَّعْتُ.', modelEn: 'White trainers — cheaper than I expected.' },
        { q: 'كَيْفَ تَغَيَّرَتْ هِوَايَاتُكَ؟', en: 'How have your hobbies changed?', start: 'كُنْتُ … أَمَّا الآنَ فَـ…', model: 'كُنْتُ أَلْعَبُ بِالدُّمَى، أَمَّا الآنَ فَأَتَعَلَّمُ العَزْفَ عَلَى العُودِ.', modelEn: 'I played with toys; now I’m learning the oud.' },
        { q: 'أَيْنَ سَتَقْضِي العُطْلَةَ القَادِمَةَ؟', en: 'Where will you spend the next holiday?', start: 'سَأَقْضِيهَا فِي … لِأَنَّ …', model: 'سَأَقْضِيهَا فِي تُرْكِيَا مَعَ عَائِلَتِي، لِأَنَّنَا نُرِيدُ أَنْ نَزُورَ إِسْطَنْبُولَ.', modelEn: 'In Turkey with family — we want to visit Istanbul.' },
      ],
      foot: 'Develop: two or three sentences — a description with agreement, a comparison or reason, and a past or future detail.',
      modelFoot: 'Agreement + comparison + two time frames = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'العَلَاقَاتُ وَالبَيْتُ وَالمُجْتَمَعُ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلِ الأُسْرَةُ أَهَمُّ مِنَ الأَصْدِقَاءِ؟', en: 'Is family more important than friends?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الأُسْرَةَ تَبْقَى دَائِمًا، غَيْرَ أَنَّ الأَصْدِقَاءَ هُمُ الَّذِينَ نَخْتَارُهُمْ بِأَنْفُسِنَا؛ لِذٰلِكَ نَحْتَاجُ إِلَى الاثْنَيْنِ.', modelEn: 'Family is always there, but friends are the ones we choose — so we need both.' },
        { q: 'هَلْ يُؤَثِّرُ المَظْهَرُ عَلَى نَظْرَةِ النَّاسِ إِلَيْنَا؟', en: 'Does appearance affect how people see us?', start: 'لِلْأَسَفِ … ؛ مَعَ أَنَّ …', model: 'لِلْأَسَفِ نَعَمْ، فَالنَّاسُ يَحْكُمُونَ مِنَ النَّظْرَةِ الأُولَى، مَعَ أَنَّ الشَّخْصِيَّةَ أَهَمُّ بِكَثِيرٍ مِنَ المَلَابِسِ.', modelEn: 'Sadly yes — people judge at first sight, although personality matters far more than clothes.' },
        { q: 'هَلْ تُضِيعُ الشَّاشَاتُ وَقْتَ الفَرَاغِ؟', en: 'Do screens waste our free time?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، نَتَعَلَّمُ مِنْهَا هِوَايَاتٍ جَدِيدَةً، وَمِنْ نَاحِيَةٍ أُخْرَى، تَسْرِقُ سَاعَاتٍ كُنَّا نَقْضِيهَا فِي الرِّيَاضَةِ وَالقِرَاءَةِ.', modelEn: 'We learn new hobbies from them, yet they steal hours we used to spend on sport and reading.' },
        { q: 'كَيْفَ تَغَيَّرَتِ البُيُوتُ مُنْذُ أَيَّامِ أَجْدَادِكَ؟', en: 'How have homes changed since your grandparents’ day?', start: 'كَانَتِ البُيُوتُ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَتِ البُيُوتُ أَكْبَرَ، وَتَسْكُنُ فِيهَا العَائِلَةُ كُلُّهَا، أَمَّا اليَوْمَ فَالشُّقَقُ أَصْغَرُ، وَلِكُلِّ شَخْصٍ غُرْفَتُهُ وَشَاشَتُهُ.', modelEn: 'Homes were bigger and housed the whole family; today flats are smaller and each person has their own room and screen.' },
        { q: 'لَوْ صَمَّمْتَ بَيْتَ أَحْلَامِكَ، كَيْفَ يَكُونُ؟', en: 'If you designed your dream home, what would it be like?', start: 'لَوْ صَمَّمْتُهُ، لَـ…', model: 'لَوْ صَمَّمْتُهُ، لَجَعَلْتُهُ قُرْبَ البَحْرِ، بِغُرَفٍ وَاسِعَةٍ وَنَوَافِذَ كَبِيرَةٍ، وَبِحَدِيقَةٍ يَجْتَمِعُ فِيهَا كُلُّ أَصْدِقَائِي.', modelEn: 'Near the sea, with spacious rooms, big windows and a garden where all my friends gather.' },
      ],
      foot: 'Stretch: a concession, maʿa anna, a balanced view, kāna … ammā al-yawma fa- and law … la-.',
      modelFoot: 'Stretch: alladhīna, maʿa anna, comparatives and law … la- with non-human plural agreement — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I answered every role-play task, including the unexpected one.' },
    { route: 'core', text: 'Every adjective agreed (m. / f. / non-human plural).' },
    { route: 'develop', text: 'I used a comparison (aṭwal min, akbar min).' },
    { route: 'develop', text: 'I narrated a holiday or experience in the past.' },
    { route: 'stretch', text: 'I gave a balanced view with a concession and law … la-.' },
  ],
};
speak.RP[2].tasks[0].help = 'عِنْدِي … ؛ أُخْتِي … أَمَّا أَخِي فَمَرِحٌ …';
speak.RP[2].tasks[1].help = 'أَعَزُّ صَدِيقَاتِي … ؛ هِيَ أَطْوَلُ مِنِّي …';
speak.RP[2].tasks[3].help = 'أَرْسُمُ … مَرَّتَيْنِ فِي الأُسْبُوعِ، لِأَنَّ …';
speak.RP[3].tasks[2].help = 'عِنْدَمَا … كَانَ … فَعَرَفْتُ …';
speak.RP[3].tasks[4].help = 'لَوِ اسْتَطَعْتُ، لَذَهَبْنَا …';
speak.CONV[1].qs[3].start = 'كُنْتُ … أَمَّا الآنَ فَأَتَعَلَّمُ …';
speak.CONV[2].qs[3].start = 'كَانَتِ البُيُوتُ … أَمَّا اليَوْمَ فَالشُّقَقُ …';
speak.CONV[2].qs[4].start = 'لَوْ صَمَّمْتُهُ، لَجَعَلْتُهُ …';

const Q2_CORE = `مَرْحَبًا يَا سَلْمَى،
كَيْفَ حَالُكِ؟ عِنْدِي خَبَرٌ جَمِيلٌ: انْتَقَلْنَا إِلَى بَيْتٍ جَدِيدٍ الأُسْبُوعَ المَاضِيَ! البَيْتُ أَكْبَرُ مِنْ بَيْتِنَا القَدِيمِ، وَفِيهِ أَرْبَعُ غُرَفِ نَوْمٍ وَحَدِيقَةٌ صَغِيرَةٌ. غُرْفَتِي وَاسِعَةٌ وَمُشْمِسَةٌ، وَجُدْرَانُهَا زَرْقَاءُ. فِيهَا سَرِيرٌ أَبْيَضُ بِجَانِبِ النَّافِذَةِ، وَمَكْتَبٌ صَغِيرٌ لِلدِّرَاسَةِ. أُحِبُّ البَيْتَ كَثِيرًا، لٰكِنَّهُ بَعِيدٌ عَنِ المَدْرَسَةِ قَلِيلًا. يَوْمَ السَّبْتِ القَادِمِ سَنُنَظِّمُ حَفْلَةً صَغِيرَةً فِي الحَدِيقَةِ. هَلْ تُرِيدِينَ أَنْ تَأْتِي؟
مَعَ السَّلَامَةِ،
نَادِيَةُ`;
const Q2_FULL = `عَزِيزَتِي سَلْمَى،
أَخِيرًا انْتَقَلْنَا إِلَى البَيْتِ الجَدِيدِ الَّذِي حَدَّثْتُكِ عَنْهُ! صَحِيحٌ أَنَّهُ أَبْعَدُ عَنِ المَدْرَسَةِ، غَيْرَ أَنَّهُ أَوْسَعُ بِكَثِيرٍ مِنْ شَقَّتِنَا القَدِيمَةِ، فَلِكُلٍّ مِنَّا غُرْفَتُهُ أَخِيرًا. أَمَّا غُرْفَتِي فَقَدْ دَهَنَّا جُدْرَانَهَا بِاللَّوْنِ الأَزْرَقِ الفَاتِحِ، وَوَضَعْتُ سَرِيرِي الأَبْيَضَ بِجَانِبِ النَّافِذَةِ الكَبِيرَةِ الَّتِي تُطِلُّ عَلَى الحَدِيقَةِ، كَمَا عَلَّقْتُ صُوَرَ رِحْلَتِنَا إِلَى إِسْبَانْيَا فَوْقَ المَكْتَبِ. وَأَجْمَلُ مَا فِي البَيْتِ شَجَرَةُ اللَّيْمُونِ الَّتِي تَمْلَأُ المَطْبَخَ بِرَائِحَتِهَا الجَمِيلَةِ فِي الصَّبَاحِ. وَإِذَا كَانَ الطَّقْسُ جَمِيلًا يَوْمَ السَّبْتِ، فَسَنُقِيمُ حَفْلَةً صَغِيرَةً فِي الحَدِيقَةِ. هَلْ تَأْتِينَ مَعَ أُخْتِكِ فِي الرَّابِعَةِ؟
بِمَحَبَّةٍ،
نَادِيَةُ`;
const Q3A_CORE = `فِي الصَّيْفِ المَاضِي قَضَيْتُ أَجْمَلَ عُطْلَةٍ فِي حَيَاتِي. سَافَرْتُ مَعَ عَائِلَتِي وَصَدِيقَتِي جُودِي إِلَى مَدِينَةِ غَرْنَاطَةَ فِي إِسْبَانْيَا، وَبَقِينَا هُنَاكَ أُسْبُوعَيْنِ، وَكَانَ الجَوُّ حَارًّا وَمُشْمِسًا.
أَقَمْنَا فِي شَقَّةٍ جَمِيلَةٍ قُرْبَ وَسَطِ المَدِينَةِ. كَانَتِ الشَّقَّةُ وَاسِعَةً، وَغُرَفُهَا بَيْضَاءُ وَمُرِيحَةٌ. مِنَ النَّافِذَةِ كُنَّا نَرَى الجِبَالَ العَالِيَةَ وَالبُيُوتَ القَدِيمَةَ.
كُلَّ يَوْمٍ كُنَّا نَفْعَلُ شَيْئًا جَدِيدًا. أَوَّلًا زُرْنَا قَصْرَ الحَمْرَاءِ، وَكَانَ أَجْمَلَ مِنَ الصُّوَرِ. ثُمَّ ذَهَبْنَا إِلَى السُّوقِ، وَاشْتَرَيْتُ فُسْتَانًا أَحْمَرَ وَحَقِيبَةً زَرْقَاءَ. فِي المَسَاءِ كُنَّا نَأْكُلُ فِي مَطْعَمٍ صَغِيرٍ، وَنَلْعَبُ الوَرَقَ مَعَ أَبِي، وَكَانَ دَائِمًا يَفُوزُ!
أُحِبُّ السَّفَرَ مَعَ عَائِلَتِي، لِأَنَّنَا نَضْحَكُ كَثِيرًا وَنَتَعَلَّمُ أَشْيَاءَ جَدِيدَةً. وَجُودِي صَدِيقَةٌ مَرِحَةٌ وَلَطِيفَةٌ، وَهِيَ أَطْوَلُ مِنِّي قَلِيلًا. فِي الصَّيْفِ القَادِمِ سَنُسَافِرُ إِلَى تُرْكِيَا، وَأُرِيدُ أَنْ تَأْتِيَ جُودِي مَعَنَا مَرَّةً أُخْرَى.`;
const Q3A_FULL = `لَمْ تَكُنْ عُطْلَتُنَا فِي غَرْنَاطَةَ الصَّيْفَ المَاضِيَ أَطْوَلَ عُطْلَةٍ قَضَيْتُهَا، غَيْرَ أَنَّهَا كَانَتْ أَجْمَلَهَا بِلَا شَكٍّ؛ فَلِأَوَّلِ مَرَّةٍ رَافَقَتْنَا صَدِيقَتِي جُودِي، فَصَارَتِ الرِّحْلَةُ رِحْلَتَيْنِ: رِحْلَةَ عَائِلَةٍ، وَرِحْلَةَ صَدَاقَةٍ.
أَقَمْنَا فِي شَقَّةٍ قَدِيمَةٍ جَمِيلَةٍ ذَاتِ جُدْرَانٍ بَيْضَاءَ وَشُرْفَةٍ تُطِلُّ عَلَى قَصْرِ الحَمْرَاءِ، فَكُنَّا نَتَنَاوَلُ الفُطُورَ كُلَّ صَبَاحٍ أَمَامَ ذٰلِكَ المَنْظَرِ الَّذِي لَا يُنْسَى، وَنُخَطِّطُ لِيَوْمِنَا بِحَمَاسٍ.
وَقَدْ أَدْهَشَنِي القَصْرُ حِينَ زُرْنَاهُ؛ فَالكِتَابَاتُ العَرَبِيَّةُ تَمْلَأُ جُدْرَانَهُ، وَاسْتَطَعْتُ أَنْ أَقْرَأَ بَعْضَهَا لِجُودِي بِصَوْتٍ عَالٍ، فَشَعَرْتُ بِفَخْرٍ لَمْ أَشْعُرْ بِهِ مِنْ قَبْلُ. أَمَّا فِي المَسَاءِ، فَكُنَّا نَتَجَوَّلُ فِي الأَسْوَاقِ، حَيْثُ اشْتَرَتْ جُودِي فُسْتَانًا أَحْمَرَ، وَاخْتَرْتُ أَنَا حَقِيبَةً جِلْدِيَّةً زَرْقَاءَ مَا زِلْتُ أَحْمِلُهَا إِلَى المَدْرَسَةِ كُلَّ يَوْمٍ.
صَحِيحٌ أَنَّ الحَرَّ كَانَ شَدِيدًا أَحْيَانًا، غَيْرَ أَنَّ الضَّحِكَ لَمْ يَتَوَقَّفْ، حَتَّى فِي أَطْوَلِ الأَيَّامِ وَأَكْثَرِهَا تَعَبًا. وَلَوْ خُيِّرْتُ بَيْنَ أَيِّ مَكَانٍ فِي العَالَمِ وَتِلْكَ الشُّرْفَةِ الصَّغِيرَةِ، لَاخْتَرْتُ الشُّرْفَةَ دُونَ تَرَدُّدٍ.`;
const Q3B_FULL = `لِكَثِيرٍ مِنَ الشَّبَابِ اليَوْمَ مِئَاتُ "الأَصْدِقَاءِ" عَلَى الإِنْتَرْنِتِ، وَمَعَ ذٰلِكَ تَقُولُ الدِّرَاسَاتُ إِنَّهُمْ يَشْعُرُونَ بِالوَحْدَةِ أَكْثَرَ مِنْ أَيِّ جِيلٍ سَابِقٍ. فَهَلْ تُغْنِي صَدَاقَاتُ الإِنْتَرْنِتِ عَنِ الأَصْدِقَاءِ الحَقِيقِيِّينَ؟
مِنْ نَاحِيَةٍ، تُتِيحُ لَنَا الإِنْتَرْنِتُ أَنْ نَتَعَرَّفَ عَلَى أَشْخَاصٍ يُشَارِكُونَنَا هِوَايَاتٍ نَادِرَةً، كَالرَّسْمِ اليَابَانِيِّ أَوِ الشِّطْرَنْجِ، وَأَنْ نَبْقَى عَلَى اتِّصَالٍ بِأَصْدِقَاءَ انْتَقَلُوا إِلَى بُلْدَانٍ أُخْرَى، وَأَنْ نَجِدَ دَعْمًا عِنْدَمَا نَشْعُرُ بِأَنَّ لَا أَحَدَ حَوْلَنَا يَفْهَمُنَا. وَمِنْ نَاحِيَةٍ أُخْرَى، لَا يَسْتَطِيعُ الصَّدِيقُ الافْتِرَاضِيُّ أَنْ يُعَانِقَكَ حِينَ تَحْزَنُ، أَوْ يَزُورَكَ حِينَ تَمْرَضُ، أَوْ يُلَاحِظَ مِنْ وَجْهِكَ أَنَّكَ لَسْتَ بِخَيْرٍ.
وَقَدْ تَعَلَّمْتُ ذٰلِكَ عِنْدَمَا كَسَرْتُ رِجْلِي؛ فَقَدْ وَصَلَتْنِي عَشَرَاتُ الرَّسَائِلِ وَالرُّمُوزِ التَّعْبِيرِيَّةِ، غَيْرَ أَنَّ صَدِيقَتَيْنِ فَقَطْ جَاءَتَا كُلَّ يَوْمٍ بِالوَاجِبَاتِ وَالحَلَوِيَّاتِ وَالقِصَصِ المُضْحِكَةِ، حَتَّى نَسِيتُ الأَلَمَ.
لِذٰلِكَ أَرَى أَنَّ صَدَاقَاتِ الإِنْتَرْنِتِ إِضَافَةٌ جَمِيلَةٌ وَمُفِيدَةٌ لَا بَدِيلٌ. فَإِذَا اسْتَخْدَمْنَاهَا لِنُقَرِّبَ البَعِيدَ دُونَ أَنْ نُبْعِدَ القَرِيبَ، فَسَنَحْصُلُ عَلَى أَفْضَلِ مَا فِي العَالَمَيْنِ.`;

const write = {
  ...base,
  focus: 'Final-revision Paper 4 practice on Topic B: fill in a youth-club membership form, write an email describing your new home and inviting a friend, and write an extended piece about an unforgettable holiday or about whether online friendships can replace real ones. Exam skills: check every adjective agrees, and plan four paragraphs before you write.',
  lift: [
    { ar: 'البَيْتُ أَكْبَرُ مِنْ بَيْتِنَا القَدِيمِ', en: 'the house is bigger than our old house' },
    { ar: 'غُرْفَتِي وَاسِعَةٌ، وَجُدْرَانُهَا زَرْقَاءُ', en: 'my room is spacious and its walls are blue' },
    { ar: 'هَلْ تُرِيدِينَ أَنْ تَأْتِي؟', en: 'would you like to come? (f.)' },
  ],
  checkTip: 'EXAM CHECK (2 min): every bullet answered? greeting and closing? Then check Topic B accuracy — adjective agreement (sarīrun abyaḍu / ḥaqībatun zarqāʾu), non-human plurals take the feminine singular (al-ghurafu wāsiʿatun), colour adjectives have no tanwīn (zarqāʾu), prepositions of place, and the past for holidays (qaḍaytu, aqamnā, zurnā).',
  FORM: {
    title: 'Youth-club membership form', ar: 'اسْتِمَارَةُ الاشْتِرَاكِ فِي نَادِي الشَّبَابِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'نَادِيَةُ عَلِيٍّ', modelEn: 'Nadia Ali' },
      { core: true, ar: 'العُمْرُ', en: 'Age', model: 'خَمْسَ عَشْرَةَ سَنَةً', modelEn: 'fifteen' },
      { core: true, ar: 'العُنْوَانُ', en: 'Address', model: 'شَارِعُ الحَدِيقَةِ، رَقْمُ ١٢', modelEn: '12 Garden Street' },
      { core: true, ar: 'عَدَدُ الإِخْوَةِ وَالأَخَوَاتِ', en: 'Number of brothers and sisters', model: 'أُخْتٌ وَأَخَوَانِ', modelEn: 'one sister, two brothers' },
      { core: true, ar: 'الهِوَايَاتُ', en: 'Hobbies', model: 'الرَّسْمُ وَكُرَةُ الشَّبَكَةِ', modelEn: 'drawing and netball' },
      { core: true, ar: 'صِفَتَانِ شَخْصِيَّتَانِ', en: 'Two personal qualities', model: 'مَرِحَةٌ وَصَبُورَةٌ', modelEn: 'cheerful and patient' },
      { ar: 'نَشَاطٌ تُرِيدِينَ أَنْ تُجَرِّبِيهِ', en: 'An activity you want to try', model: 'المَسْرَحُ', modelEn: 'drama' },
      { ar: 'جُمْلَةٌ: مَاذَا فَعَلْتِ فِي آخِرِ عُطْلَةٍ؟', en: 'ONE sentence: what you did last holiday', model: 'سَافَرْتُ إِلَى إِسْبَانْيَا مَعَ عَائِلَتِي، وَزُرْنَا قَصْرَ الحَمْرَاءِ.', modelEn: 'I travelled to Spain with my family, and we visited the Alhambra.' },
    ],
    foot: 'One word or a short phrase for each box — box 6 needs feminine agreement for a girl (marḥa, ṣabūra); the last box is a full sentence in the past.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 4: the dual (akhawāni). A boy writes مَرِحٌ وَصَبُورٌ and reads تُرِيدُ / فَعَلْتَ in the headings.',
  },
  Q2: {
    short: 'an email about my new home', title: 'Question 2: our new home', ar: 'بَيْتُنَا الجَدِيدُ',
    task: 'Write an email in Arabic to a friend of about 80–90 words. You must include: • when you moved and a description of the new home • a description of your room (colours, furniture, where things are) • your opinion of the home (one good point and one bad point) • an invitation with day and time.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Three adjectives that agree, and two colours.', 'Past, present AND future.', 'About 80–90 words.'],
    phrases: [['انْتَقَلْنَا إِلَى بَيْتٍ جَدِيدٍ …', 'we moved to a new house …'], ['البَيْتُ أَكْبَرُ مِنْ … ، وَفِيهِ …', 'the house is bigger than …, and has …'], ['فِيهَا سَرِيرٌ … بِجَانِبِ …', 'it has a … bed next to …'], ['هَلْ تُرِيدِينَ أَنْ تَأْتِي … ؟', 'would you like to come …?']],
    rubric: [
      ['task', 'اكْتُبِي رِسَالَةً إِلَى صَدِيقَتِكِ عَنْ بَيْتِكِ الجَدِيدِ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about your new home (80–90 words).'],
      ['1', 'مَتَى انْتَقَلْتُمْ؟ صِفِي البَيْتَ الجَدِيدَ.', 'When you moved; describe the home'],
      ['2', 'صِفِي غُرْفَتَكِ.', 'Describe your room'],
      ['3', 'مَا رَأْيُكِ فِي البَيْتِ؟', 'Your opinion of the home'],
      ['4', 'اُدْعِي صَدِيقَتَكِ إِلَى البَيْتِ، وَحَدِّدِي اليَوْمَ وَالوَقْتَ.', 'Invite your friend; give day and time'],
    ],
    qwords: 'مَتَى انْتَقَلْتُمْ (when did you move — PAST) · صِفِي (describe! — f.) · رَأْيُكِ (your opinion) · اُدْعِي (invite! — f.)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكِ؟', 'Hello …, how are you?'],
      ['1', 'انْتَقَلْنَا إِلَى بَيْتٍ جَدِيدٍ ______ . البَيْتُ ______ .', 'We moved to a new house … It is …'],
      ['2', 'غُرْفَتِي ______ ، وَجُدْرَانُهَا ______ . فِيهَا ______ بِجَانِبِ ______ .', 'My room is …; its walls are … It has … next to …'],
      ['3', 'أُحِبُّ البَيْتَ، لٰكِنَّهُ ______ .', 'I love the house, but it is …'],
      ['4', 'يَوْمَ ______ سَنُنَظِّمُ ______ . هَلْ تُرِيدِينَ أَنْ تَأْتِي؟', 'On … we’ll hold … Would you like to come?'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Salma, how are you? I have lovely news: we moved to a new house last week! It’s bigger than our old house, with four bedrooms and a small garden. My room is spacious and sunny, and its walls are blue. It has a white bed next to the window and a small desk for studying. I love the house a lot, but it’s a bit far from school. Next Saturday we’ll have a small party in the garden. Would you like to come? Goodbye, Nadia.”',
      find: ['أَكْبَرُ مِنْ', 'وَجُدْرَانُهَا زَرْقَاءُ', 'بِجَانِبِ النَّافِذَةِ', 'هَلْ تُرِيدِينَ أَنْ تَأْتِي'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Salma, at last we’ve moved into the new house I told you about! It’s further from school, but much more spacious than our old flat, so each of us finally has a room. As for mine, we painted the walls light blue, and I put my white bed by the big window overlooking the garden, and hung photos of our Spain trip above the desk. The best thing is the lemon tree that fills the kitchen with its lovely scent in the morning. If the weather is nice on Saturday, we’ll have a small party in the garden. Will you come with your sister at four? With love, Nadia.”',
      find: ['الَّذِي حَدَّثْتُكِ عَنْهُ', 'أَوْسَعُ بِكَثِيرٍ مِنْ', 'الَّتِي تُطِلُّ عَلَى', 'إِذَا كَانَ … فَسَنُقِيمُ'],
    },
  },
  Q3: {
    a: { title: 'عُطْلَةٌ لَا أَنْسَاهَا مَعَ عَائِلَتِي وَأَصْدِقَائِي', en: 'An unforgettable holiday with my family and friends', bullets: 'أَيْنَ ذَهَبْتَ وَمَعَ مَنْ · المَكَانُ الَّذِي أَقَمْتَ فِيهِ · مَاذَا فَعَلْتُمْ وَاشْتَرَيْتُمْ · رَأْيُكَ وَخُطَطُكَ لِلْعُطْلَةِ القَادِمَةِ', bulletsEn: 'Where you went and with whom · where you stayed · what you did and bought · your opinion and plans for the next holiday' },
    b: { title: 'هَلْ تُغْنِي صَدَاقَاتُ الإِنْتَرْنِتِ عَنِ الأَصْدِقَاءِ الحَقِيقِيِّينَ؟', en: 'Can online friendships replace real friends?', bullets: 'المَوْضُوعُ · المَزَايَا وَالحُدُودُ · مِثَالٌ مِنْ تَجْرِبَتِكَ · رَأْيُكَ', bulletsEn: 'The issue · advantages and limits · an example from your experience · your opinion' },
    plan: [
      'The trip — fī aṣ-ṣayfi al-māḍī qaḍaytu …; sāfartu maʿa … ilā …; baqīnā …',
      'Where we stayed — aqamnā fī shaqqatin …; kānat … wāsiʿatan, wa-ghurafuhā bayḍāʾu …',
      'What we did — awwalan zurnā … wa-kāna ajmala min …; thumma …; ishtaraytu fustānan aḥmara …',
      'Opinion + future — uḥibbu as-safara maʿa … li-annanā …; fī aṣ-ṣayfi al-qādimi sa- …; Stretch: lam takun … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'أَقَمْنَا فِي شَقَّةٍ وَاسِعَةٍ قُرْبَ البَحْرِ.', en: 'past: we stayed in a big flat by the sea.' },
      { ar: 'اشْتَرَيْتُ فُسْتَانًا أَحْمَرَ وَحَقِيبَةً زَرْقَاءَ.', en: 'colours: a red dress and a blue bag.' },
      { ar: 'سَنُسَافِرُ إِلَى تُرْكِيَا فِي الصَّيْفِ القَادِمِ.', en: 'future: we’ll go to Turkey next summer.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Best holiday: two weeks in Granada with my family and my friend Judy → a spacious flat with white rooms and mountain views → the Alhambra, more beautiful than the photos; a red dress and a blue bag from the market; evenings of cards with dad → we laugh and learn together; next summer Turkey, with Judy again.', find: ['قَضَيْتُ أَجْمَلَ عُطْلَةٍ', 'وَغُرَفُهَا بَيْضَاءُ', 'أَجْمَلَ مِنَ الصُّوَرِ', 'فُسْتَانًا أَحْمَرَ'], notes: 'Core model: all of Topic B — a holiday in the past (L09), a place with non-human plural agreement (ghurafuhā bayḍāʾu, L04), kunnā + present, a comparison (L03), shopping with colour agreement (L06–L07), describing a friend (L03) and a future plan.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Granada last summer wasn’t my longest holiday, but certainly my best: for the first time my friend Judy came, so it became two trips — a family trip and a friendship trip → we stayed in an old flat with white walls and a balcony facing the Alhambra, eating breakfast every morning before that unforgettable view, planning our day excitedly → the palace amazed me: Arabic inscriptions fill its walls, and I read some aloud to Judy, feeling a pride I’d never felt; in the evenings we wandered the markets, where Judy bought a red dress and I chose a blue leather bag I still carry to school every day → it was sometimes very hot, but the laughter never stopped, even on the longest, most tiring days; “if I had to choose between anywhere in the world and that little balcony, I’d choose the balcony without hesitation”.', find: ['لَمْ تَكُنْ … غَيْرَ أَنَّهَا', 'ذَاتِ جُدْرَانٍ بَيْضَاءَ', 'لَمْ أَشْعُرْ بِهِ مِنْ قَبْلُ', 'لَوْ خُيِّرْتُ … لَاخْتَرْتُ'], notes: 'Full-mark model: lam takun … ghayra anna, a superlative (ajmalahā), an apposition (riḥlatayni: riḥlata …), dhāt + colour agreement in the genitive (bayḍāʾa), a relative clause with lā yunsā, a cognate (fakhrin lam ashʿur bihi), ḥaythu, mā ziltu, a concession and a passive law khuyyirtu … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'online vs real friends', text: Q3B_FULL, en: 'Many young people have hundreds of online “friends”, yet studies say they feel lonelier than any previous generation — can online friendships replace real friends? → the internet lets us meet people who share rare hobbies, like Japanese drawing or chess, and keep in touch with friends who moved abroad, and find support when no one around understands us; yet a virtual friend can’t hug you when you’re sad or visit you when you’re ill, or notice from your face that you’re not OK → I learnt this when I broke my leg: dozens of messages and emojis arrived, but only two friends came every day with homework, sweets and funny stories, until I forgot the pain → online friendships are a lovely addition, not a replacement; “if we use them to bring the distant closer without pushing away those close by, we’ll have the best of both worlds”.', find: ['وَمَعَ ذٰلِكَ تَقُولُ', 'لَا يَسْتَطِيعُ … أَنْ', 'صَدِيقَتَيْنِ فَقَطْ جَاءَتَا', 'إِضَافَةٌ … لَا بَدِيلٌ'], notes: 'Full-mark model for the Stretch title: a paradox hook with reported speech and akthar min ayyi jīl, a rhetorical question, tutīḥu lanā an ×2 + ka- examples, lā yastaṭīʿu an … aw, a narrated example with a dual verb (jāʾatā), idāfa lā badīl, and idhā … fa-sa- with li- … dūna an.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box filled; feminine agreement in box 6 (for a girl).' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: three adjectives that agree, two colours and a comparison.' },
    { route: 'develop', text: 'Q3: a past narrative with kunnā + present for repeated actions.' },
    { route: 'stretch', text: 'Q3: a concession and a conditional; I checked all my agreements.' },
  ],
};

module.exports = { speak, write };
