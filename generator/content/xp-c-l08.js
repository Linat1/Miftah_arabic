'use strict';
/* Exam-practice data · TC-L08 · Buildings, Services and Urban Areas (yūjadu / tūjadu; locatives; comparatives; mabnī min). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'C', n: 8, short: 'Buildings, Services and Urban Areas', arShort: 'المَدِينَةُ وَخِدْمَاتُهَا', fileTitle: 'Buildings_Services_Urban_Areas', title: 'Buildings, Services and Urban Areas', ar: 'المَبَانِي وَالخِدْمَاتُ وَالمَنَاطِقُ الحَضَرِيَّةُ', icon: 'FaCity', grammar: 'yūjadu / tūjadu (there is); locatives (muqābila, bi-jānibi, bayna, khalfa); comparatives (akbaru min, aktharu ḥaraka); mabnī min' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: describe your town and its services, give directions with locatives (مُقَابِلَ · بِجَانِبِ · بَيْنَ), say what there is (يُوجَدُ · تُوجَدُ), compare town and village, and say what buildings are made of (مَبْنِيٌّ مِنْ).',
  words: [
    w(1, 'يُوجَدُ · تُوجَدُ', 'there is (m. · f.)', [['there is a park', 'تُوجَدُ حَدِيقَةٌ'], ['there is a museum', 'يُوجَدُ مَتْحَفٌ'], ['there isn’t', 'لَا يُوجَدُ']], { tag: 'agreement' }),
    w(2, 'مَبْنًى', 'a building', [['the', 'المَبْنَى'], ['pl.', 'مَبَانٍ · المَبَانِي'], ['tall', 'مَبَانٍ عَالِيَةٌ']]),
    w(3, 'مُسْتَشْفًى', 'a hospital', [['the', 'المُسْتَشْفَى'], ['pl.', 'مُسْتَشْفَيَاتٌ']]),
    w(4, 'مَكْتَبَةٌ عَامَّةٌ', 'a public library', [['pl.', 'مَكْتَبَاتٌ عَامَّةٌ'], ['a post office', 'مَكْتَبُ البَرِيدِ']]),
    w(5, 'مَرْكَزٌ تِجَارِيٌّ', 'a shopping centre', [['pl.', 'مَرَاكِزُ تِجَارِيَّةٌ'], ['a market', 'سُوقٌ · أَسْوَاقٌ']]),
    w(6, 'مَحَطَّةٌ', 'a station', [['pl.', 'مَحَطَّاتٌ'], ['the train station', 'مَحَطَّةُ القِطَارِ']]),
    w(7, 'مُقَابِلَ …', 'opposite …', [['next to', 'بِجَانِبِ'], ['between', 'بَيْنَ … وَ…']], { tag: 'locatives' }),
    w(8, 'خَلْفَ · أَمَامَ', 'behind · in front of', [['near', 'قُرْبَ'], ['far from', 'بَعِيدٌ عَنْ']], { tag: 'locatives' }),
    w(9, 'حَيٌّ', 'a neighbourhood', [['pl.', 'أَحْيَاءٌ'], ['residential', 'حَيٌّ سَكَنِيٌّ']]),
    w(10, 'مُزْدَحِمٌ · هَادِئٌ', 'crowded · quiet', [['f.', 'مُزْدَحِمَةٌ · هَادِئَةٌ'], ['comp.', 'أَكْثَرُ ازْدِحَامًا · أَهْدَأُ']]),
    w(11, 'مَبْنِيٌّ مِنْ …', 'built of …', [['f.', 'مَبْنِيَّةٌ مِنْ'], ['stone · brick · glass', 'الحَجَرُ · الطُّوبُ · الزُّجَاجُ']], { tag: 'passive participle' }),
    w(12, 'خِدْمَاتٌ', 'services', [['sg.', 'خِدْمَةٌ'], ['public', 'خِدْمَاتٌ عَامَّةٌ'], ['transport', 'المُوَاصَلَاتُ']]),
  ],
  words1: { eyebrow: 'Language bank · places and buildings', title: 'Hospital, library, station', ar: 'أَمَاكِنُ فِي المَدِينَةِ', notes: 'LANGUAGE BANK (2 min) — يُوجَدُ before a masculine noun, تُوجَدُ before a feminine noun: يُوجَدُ مُسْتَشْفًى · تُوجَدُ مَكْتَبَةٌ. Non-human plurals → تُوجَدُ مَبَانٍ عَالِيَةٌ. مَبْنًى and مُسْتَشْفًى end in alif: المَبْنَى · المُسْتَشْفَى.' },
  words2: { eyebrow: 'Language bank · where is it?', title: 'Opposite, next to, between', ar: 'أَيْنَ يَقَعُ؟', notes: 'LANGUAGE BANK (2 min) — locatives take the genitive: مُقَابِلَ المَسْجِدِ · بِجَانِبِ البَنْكِ · بَيْنَ المَدْرَسَةِ وَالحَدِيقَةِ. Comparatives: المَدِينَةُ أَكْثَرُ ازْدِحَامًا مِنَ القَرْيَةِ. Materials: البَيْتُ مَبْنِيٌّ مِنَ الحَجَرِ.' },
  checkCore: 'said what there is in their town (yūjadu / tūjadu)',
  checkDevelop: 'gave directions with locatives and made a comparison',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'in the street', title: 'Role play A — Asking the way', ar: 'السُّؤَالُ عَنِ الطَّرِيقِ', you: 'a tourist', them: 'a local resident',
      tasks: [
        { core: true, ex: 'نَعَمْ؟ هَلْ أُسَاعِدُكَ؟', task: 'Ask where the museum is.', help: 'مِنْ فَضْلِكَ، أَيْنَ …؟', model: 'مِنْ فَضْلِكَ، أَيْنَ المَتْحَفُ؟', modelEn: 'Excuse me, where is the museum?' },
        { core: true, ex: 'المَتْحَفُ مُقَابِلَ المَحَطَّةِ.', task: 'Ask if it is far.', help: 'هَلْ هُوَ …؟', model: 'هَلْ هُوَ بَعِيدٌ عَنْ هُنَا؟', modelEn: 'Is it far from here?' },
        { core: true, ex: 'لَا، عَشْرُ دَقَائِقَ مَشْيًا.', task: 'Ask about a café near it.', help: 'هَلْ يُوجَدُ … قُرْبَهُ؟', model: 'هَلْ يُوجَدُ مَقْهًى قُرْبَهُ؟', modelEn: 'Is there a café near it?' },
        { core: true, ex: 'نَعَمْ، بِجَانِبِ المَتْحَفِ.', task: 'Thank them and say where you are from.', help: 'شُكْرًا … أَنَا مِنْ …', model: 'شُكْرًا جَزِيلًا، أَنَا مِنْ مَانْشِسْتَرَ.', modelEn: 'Thank you very much, I’m from Manchester.' },
        { core: true, unexpected: true, ex: 'هَلْ تُعْجِبُكَ مَدِينَتُنَا؟', task: 'Answer the unexpected question.', help: 'نَعَمْ، هِيَ … وَ…', model: 'نَعَمْ، هِيَ جَمِيلَةٌ وَنَظِيفَةٌ.', modelEn: 'Yes, it is beautiful and clean.' },
      ],
      girl: 'أُسَاعِدُكِ · تُعْجِبُكِ',
      notes: 'Core: muqābila / bi-jānibi + genitive, yūjadu maqhan, baʿīdun ʿan, ʿashru daqāʾiqa (3–10 + plural).',
    },
    {
      id: 'B', level: 'Core+', setting: 'a tourist office', title: 'Role play B — At the tourist information office', ar: 'فِي مَكْتَبِ السِّيَاحَةِ', you: 'a visitor', them: 'the tourist-office employee',
      tasks: [
        { core: true, ex: 'أَهْلًا وَسَهْلًا! مَاذَا تُحِبُّ أَنْ تَزُورَ؟', task: 'Say two places you want to visit.', help: 'أُحِبُّ أَنْ أَزُورَ … وَ…', model: 'أُحِبُّ أَنْ أَزُورَ القَلْعَةَ وَالسُّوقَ القَدِيمَ.', modelEn: 'I’d like to visit the castle and the old market.' },
        { core: true, ex: 'القَلْعَةُ فِي وَسَطِ المَدِينَةِ.', task: 'Ask how to get there.', help: 'كَيْفَ أَصِلُ …؟', model: 'كَيْفَ أَصِلُ إِلَيْهَا بِالحَافِلَةِ؟', modelEn: 'How do I get there by bus?' },
        { ex: 'الحَافِلَةُ رَقْمُ خَمْسَةٍ، أَمَامَ المَكْتَبِ.', task: 'ASK about opening times.', help: 'مَتَى تُفْتَحُ …؟', model: 'مَتَى تُفْتَحُ القَلْعَةُ، وَمَتَى تُغْلَقُ؟', modelEn: 'When does the castle open, and when does it close?' },
        { ex: 'مِنَ التَّاسِعَةِ إِلَى الخَامِسَةِ. وَهِيَ مَبْنِيَّةٌ مُنْذُ أَلْفِ سَنَةٍ!', task: 'Ask what it is built of.', help: 'مِمَّ … مَبْنِيَّةٌ؟', model: 'رَائِعٌ! مِمَّ هِيَ مَبْنِيَّةٌ؟', modelEn: 'Wonderful! What is it built of?' },
        { unexpected: true, ex: 'هَلْ مَدِينَتُكَ أَكْبَرُ مِنْ مَدِينَتِنَا؟', task: 'Answer the unexpected question (compare).', help: 'نَعَمْ / لَا، مَدِينَتِي … مِنْ …', model: 'نَعَمْ، مَدِينَتِي أَكْبَرُ، لٰكِنَّهَا أَكْثَرُ ازْدِحَامًا مِنْ مَدِينَتِكُمْ.', modelEn: 'Yes, my city is bigger, but it is more crowded than yours.' },
      ],
      girl: 'تُحِبِّينَ · تَزُورِي · مَدِينَتُكِ',
      notes: 'Core+: aṣilu ilā, passive verbs tuftaḥu / tughlaqu, mimma (min + mā) … mabniyya, akbaru / akthar izdiḥāman min; the CANDIDATE asks (task 3).',
    },
    {
      id: 'C', level: 'Develop', setting: 'a neighbourhood survey', title: 'Role play C — Is your neighbourhood a good place to live?', ar: 'اسْتِطْلَاعٌ عَنِ الحَيِّ', you: 'a resident', them: 'a council researcher',
      tasks: [
        { ex: 'صِفْ لِي حَيَّكَ.', task: 'Describe it with yūjadu / tūjadu and a locative.', help: 'فِي حَيِّي يُوجَدُ … وَتُوجَدُ … بِجَانِبِ …', model: 'حَيِّي هَادِئٌ؛ فِيهِ تُوجَدُ مَدْرَسَةٌ ابْتِدَائِيَّةٌ، وَبِجَانِبِهَا حَدِيقَةٌ صَغِيرَةٌ وَمَرْكَزٌ صِحِّيٌّ.', modelEn: 'My neighbourhood is quiet: there is a primary school, and next to it a small park and a health centre.' },
        { ex: 'وَمَا الَّذِي يَنْقُصُهُ؟', task: 'Say what is missing and why it matters.', help: 'لَا يُوجَدُ … لِذٰلِكَ …', model: 'لَا يُوجَدُ مَرْكَزٌ لِلشَّبَابِ، لِذٰلِكَ يَقْضِي المُرَاهِقُونَ وَقْتَهُمْ فِي الشَّارِعِ.', modelEn: 'There is no youth centre, so teenagers spend their time in the street.' },
        { ex: 'كَيْفَ كَانَ الحَيُّ قَبْلَ عَشْرِ سَنَوَاتٍ؟', task: 'Describe a change (past vs now).', help: 'كَانَ هُنَاكَ … أَمَّا الآنَ فَـ…', model: 'كَانَ هُنَاكَ مَصْنَعٌ قَدِيمٌ، أَمَّا الآنَ فَقَدْ بُنِيَتْ مَكَانَهُ شُقَقٌ حَدِيثَةٌ.', modelEn: 'There was an old factory; now modern flats have been built in its place.' },
        { ex: 'هَلْ تُفَضِّلُ السَّكَنَ فِي المَدِينَةِ أَمْ فِي الرِّيفِ؟', task: 'Compare with two points.', help: 'أُفَضِّلُ … لِأَنَّهَا أَ… وَأَ…', model: 'أُفَضِّلُ المَدِينَةَ، لِأَنَّ الخِدْمَاتِ فِيهَا أَكْثَرُ، وَالمُوَاصَلَاتِ أَسْرَعُ، مَعَ أَنَّ الرِّيفَ أَهْدَأُ.', modelEn: 'I prefer the city: more services and faster transport, although the countryside is quieter.' },
        { unexpected: true, ex: 'مَاذَا سَيُبْنَى فِي حَيِّكُمْ قَرِيبًا؟', task: 'Answer the unexpected question (future passive).', help: 'سَيُبْنَى … / سَتُفْتَحُ …', model: 'سَتُفْتَحُ مَكْتَبَةٌ عَامَّةٌ جَدِيدَةٌ مُقَابِلَ المَحَطَّةِ فِي الصَّيْفِ القَادِمِ.', modelEn: 'A new public library will open opposite the station next summer.' },
      ],
      girl: 'حَيَّكِ · تُفَضِّلِينَ · حَيِّكُنَّ / حَيِّكُمْ',
      notes: 'Develop: tūjadu + bi-jānibihā, lā yūjadu … li-dhālika, kāna hunāka vs ammā … fa-qad + passive (buniyat), comparatives with maʿa anna, a future passive (sa-tuftaḥu).',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a planning debate', title: 'Role play D — A new shopping centre or a park?', ar: 'مَرْكَزٌ تِجَارِيٌّ أَمْ حَدِيقَةٌ؟', you: 'a young resident', them: 'a town planner',
      tasks: [
        { ex: 'تُرِيدُ البَلَدِيَّةُ أَنْ تَبْنِيَ مَرْكَزًا تِجَارِيًّا مَكَانَ الحَدِيقَةِ. مَا رَأْيُكَ؟', task: 'Give a clear opinion with a reason.', help: 'أُعَارِضُ … لِأَنَّ …', model: 'أُعَارِضُ ذٰلِكَ بِشِدَّةٍ، لِأَنَّ الحَدِيقَةَ هِيَ المَسَاحَةُ الخَضْرَاءُ الوَحِيدَةُ الَّتِي بَقِيَتْ فِي وَسَطِ المَدِينَةِ.', modelEn: 'I strongly oppose it, because the park is the only green space left in the town centre.' },
        { ex: 'لٰكِنَّ المَرْكَزَ سَيُوَفِّرُ مِئَاتِ الوَظَائِفِ.', task: 'Concede and counter.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهُ سَيُوَفِّرُ وَظَائِفَ، غَيْرَ أَنَّ فِي المَدِينَةِ ثَلَاثَةَ مَرَاكِزَ تِجَارِيَّةٍ، وَنِصْفُ مَحَلَّاتِهَا مُغْلَقٌ أَصْلًا.', modelEn: 'True, it will create jobs, but the town already has three shopping centres, and half their shops are closed.' },
        { ex: 'وَمَاذَا تَقْتَرِحُ إِذَنْ؟', task: 'Propose an alternative with purpose.', help: 'أَقْتَرِحُ أَنْ … لِكَيْ …', model: 'أَقْتَرِحُ أَنْ تُطَوَّرَ الحَدِيقَةُ، فَتُبْنَى فِيهَا مَلَاعِبُ وَمَقْهًى صَغِيرٌ، لِكَيْ تُوَفِّرَ وَظَائِفَ وَتَبْقَى خَضْرَاءَ.', modelEn: 'I suggest the park be developed with pitches and a small café, so it creates jobs and stays green.' },
        { ex: 'هَلْ هُنَاكَ مِثَالٌ نَاجِحٌ عَلَى ذٰلِكَ؟', task: 'Give an example from another city.', help: 'نَعَمْ، فِي … حَيْثُ …', model: 'نَعَمْ، فِي مَدِينَةِ لِيدْز، حَيْثُ حُوِّلَتْ حَدِيقَةٌ قَدِيمَةٌ إِلَى مَرْكَزٍ لِلْأَنْشِطَةِ، فَزَادَ عَدَدُ الزُّوَّارِ عَشْرَةَ أَضْعَافٍ.', modelEn: 'Yes, in Leeds, where an old park was turned into an activity hub, and visitor numbers rose tenfold.' },
        { unexpected: true, ex: 'لَوْ كُنْتَ رَئِيسَ البَلَدِيَّةِ، مَاذَا تَبْنِي أَوَّلًا؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ كُنْتُ رَئِيسَ البَلَدِيَّةِ، لَبَنَيْتُ …', model: 'لَوْ كُنْتُ رَئِيسَ البَلَدِيَّةِ، لَبَنَيْتُ مَرْكَزًا لِلشَّبَابِ مَبْنِيًّا مِنْ مَوَادَّ صَدِيقَةٍ لِلْبِيئَةِ، بِجَانِبِ الحَدِيقَةِ نَفْسِهَا.', modelEn: 'If I were mayor, I’d build a youth centre made of eco-friendly materials, right next to the park.' },
      ],
      girl: 'رَأْيُكِ · تَقْتَرِحِينَ · كُنْتِ',
      notes: 'Stretch: al-waḥīda allatī, a concession with numbers, aqtariḥu an + passive (tuṭawwara, tubnā), li-kay, ḥaythu + passive (ḥuwwilat), law … la- with mabnī min.',
      modelFoot: 'Stretch: a strong opinion, a concession with evidence, a passive proposal, a real example and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'مَدِينَتِي', aim: 'one full sentence per question',
      qs: [
        { q: 'أَيْنَ تَسْكُنُ؟', en: 'Where do you live?', start: 'أَسْكُنُ فِي …', model: 'أَسْكُنُ فِي حَيٍّ هَادِئٍ فِي بِرْمِنْغْهَامَ.', modelEn: 'I live in a quiet area of Birmingham.' },
        { q: 'مَاذَا يُوجَدُ فِي مَدِينَتِكَ؟', en: 'What is there in your town?', start: 'يُوجَدُ … وَتُوجَدُ …', model: 'يُوجَدُ مَتْحَفٌ كَبِيرٌ، وَتُوجَدُ حَدَائِقُ كَثِيرَةٌ.', modelEn: 'There is a big museum, and there are many parks.' },
        { q: 'هَلْ مَدِينَتُكَ كَبِيرَةٌ؟', en: 'Is your town big?', start: 'نَعَمْ / لَا، مَدِينَتِي …', model: 'نَعَمْ، مَدِينَتِي كَبِيرَةٌ وَمُزْدَحِمَةٌ.', modelEn: 'Yes, my city is big and crowded.' },
        { q: 'أَيْنَ مَدْرَسَتُكَ؟', en: 'Where is your school?', start: 'مَدْرَسَتِي … بِجَانِبِ / مُقَابِلَ …', model: 'مَدْرَسَتِي مُقَابِلَ المَكْتَبَةِ العَامَّةِ.', modelEn: 'My school is opposite the public library.' },
        { q: 'مَا مَكَانُكَ المُفَضَّلُ فِي المَدِينَةِ؟', en: 'What is your favourite place in town?', start: 'مَكَانِي المُفَضَّلُ … لِأَنَّ …', model: 'مَكَانِيَ المُفَضَّلُ المَكْتَبَةُ، لِأَنَّهَا هَادِئَةٌ.', modelEn: 'My favourite place is the library, because it is quiet.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + yūjadu / tūjadu = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'الخِدْمَاتُ فِي مَدِينَتِي', aim: 'two or three sentences, with a comparison and a past detail',
      qs: [
        { q: 'صِفِ الطَّرِيقَ مِنْ بَيْتِكَ إِلَى المَدْرَسَةِ.', en: 'Describe the way from your home to school.', start: 'أَخْرُجُ مِنْ … ثُمَّ أَمُرُّ بِـ … وَ…', model: 'أَخْرُجُ مِنَ البَيْتِ، ثُمَّ أَمْشِي إِلَى المَحَطَّةِ الَّتِي تَقَعُ بِجَانِبِ البَنْكِ، وَأَرْكَبُ الحَافِلَةَ عَشْرَ دَقَائِقَ.', modelEn: 'I leave home, walk to the station next to the bank, and take the bus for ten minutes.' },
        { q: 'مَا الخِدْمَاتُ الجَيِّدَةُ فِي مَدِينَتِكَ؟', en: 'Which services in your town are good?', start: 'المُوَاصَلَاتُ … وَالمُسْتَشْفَى …', model: 'المُوَاصَلَاتُ سَرِيعَةٌ، وَالمُسْتَشْفَى حَدِيثٌ، لٰكِنَّ الحَدَائِقَ قَلِيلَةٌ.', modelEn: 'Transport is fast and the hospital modern, but there are few parks.' },
        { q: 'قَارِنْ بَيْنَ مَدِينَتِكَ وَمَدِينَةٍ عَرَبِيَّةٍ زُرْتَهَا.', en: 'Compare your town with an Arab city you visited.', start: '… أَكْبَرُ / أَقْدَمُ مِنْ …', model: 'القَاهِرَةُ أَكْبَرُ وَأَقْدَمُ مِنْ مَدِينَتِي بِكَثِيرٍ، وَشَوَارِعُهَا أَكْثَرُ ازْدِحَامًا، لٰكِنَّ أَسْوَاقَهَا أَجْمَلُ.', modelEn: 'Cairo is much bigger and older than my city, with busier streets, but its markets are nicer.' },
        { q: 'صِفْ مَبْنًى مَشْهُورًا فِي مَدِينَتِكَ.', en: 'Describe a famous building in your town.', start: 'مِنْ أَشْهَرِ المَبَانِي … وَهُوَ مَبْنِيٌّ مِنْ …', model: 'مِنْ أَشْهَرِ المَبَانِي المَكْتَبَةُ المَرْكَزِيَّةُ؛ هِيَ مَبْنِيَّةٌ مِنَ الزُّجَاجِ وَالحَدِيدِ، وَفِيهَا حَدِيقَةٌ عَلَى السَّطْحِ.', modelEn: 'One of the most famous buildings is the central library: built of glass and steel, with a roof garden.' },
        { q: 'مَا الَّذِي تَغَيَّرَ فِي مَدِينَتِكَ فِي السَّنَوَاتِ الأَخِيرَةِ؟', en: 'What has changed in your town recently?', start: 'بُنِيَ … وَفُتِحَ …', model: 'بُنِيَ مَرْكَزٌ رِيَاضِيٌّ جَدِيدٌ، وَفُتِحَتْ مَحَطَّةٌ لِلْقِطَارِ السَّرِيعِ.', modelEn: 'A new sports centre has been built, and a high-speed rail station opened.' },
      ],
      foot: 'Develop: two or three sentences — locatives, comparatives, mabnī min and a passive in the past.',
      modelFoot: 'Locative + comparison + passive = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'مُدُنُ المُسْتَقْبَلِ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلِ الحَيَاةُ فِي المَدِينَةِ أَفْضَلُ مِنَ الحَيَاةِ فِي القَرْيَةِ؟', en: 'Is city life better than village life?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، تُقَدِّمُ المَدِينَةُ خِدْمَاتٍ وَفُرَصًا أَكْثَرَ، وَمِنْ نَاحِيَةٍ أُخْرَى، القَرْيَةُ أَهْدَأُ وَأَنْظَفُ، وَالعَلَاقَاتُ فِيهَا أَقْوَى.', modelEn: 'The city offers more services and chances; the village is quieter and cleaner, with stronger relationships.' },
        { q: 'لِمَاذَا يَنْتَقِلُ كَثِيرٌ مِنَ النَّاسِ إِلَى المُدُنِ؟', en: 'Why do so many people move to cities?', start: 'بِسَبَبِ … مِمَّا يُؤَدِّي إِلَى …', model: 'بِسَبَبِ قِلَّةِ العَمَلِ فِي الرِّيفِ، مِمَّا يُؤَدِّي إِلَى ازْدِحَامِ المُدُنِ وَارْتِفَاعِ أَسْعَارِ السَّكَنِ.', modelEn: 'Because of the lack of work in the countryside, which leads to crowded cities and high housing prices.' },
        { q: 'هَلْ يَجِبُ أَنْ نُحَافِظَ عَلَى المَبَانِي القَدِيمَةِ؟', en: 'Should we preserve old buildings?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ صِيَانَتَهَا مُكْلِفَةٌ، غَيْرَ أَنَّهَا تَحْكِي تَارِيخَ المَدِينَةِ، وَتَجْذِبُ السُّيَّاحَ.', modelEn: 'Maintaining them is costly, but they tell the city’s history and attract tourists.' },
        { q: 'كَيْفَ كَانَتْ مَدِينَتُكَ فِي أَيَّامِ أَجْدَادِكَ؟', en: 'What was your town like in your grandparents’ day?', start: 'يَقُولُ جَدِّي إِنَّ … كَانَتْ …', model: 'يَقُولُ جَدِّي إِنَّ مُعْظَمَ البُيُوتِ كَانَتْ مَبْنِيَّةً مِنَ الطُّوبِ الأَحْمَرِ، وَإِنَّ الحَيَّ كُلَّهُ كَانَ يَعْرِفُ بَعْضَهُ.', modelEn: 'My grandad says most houses were built of red brick, and the whole neighbourhood knew each other.' },
        { q: 'لَوْ صَمَّمْتَ مَدِينَةَ المُسْتَقْبَلِ، كَيْفَ تَكُونُ؟', en: 'If you designed the city of the future, what would it be like?', start: 'لَوْ صَمَّمْتُهَا، لَـ…', model: 'لَوْ صَمَّمْتُهَا، لَجَعَلْتُ السَّيَّارَاتِ تَحْتَ الأَرْضِ، وَلَزَرَعْتُ الأَشْجَارَ عَلَى أَسْطُحِ كُلِّ المَبَانِي.', modelEn: 'If I designed it, I’d put the cars underground and plant trees on every rooftop.' },
      ],
      foot: 'Stretch: a balanced view, bi-sababi … mimmā, a concession, reported speech and law … la-.',
      modelFoot: 'Stretch: balance, cause → effect, ṣaḥīḥun anna … ghayra anna, reported speech with inna, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I said what there is in my town (yūjadu / tūjadu).' },
    { route: 'core', text: 'I said where places are (muqābila, bi-jānibi, qurba).' },
    { route: 'develop', text: 'I compared places (akbaru / akthar izdiḥāman min).' },
    { route: 'develop', text: 'I used mabnī min or a passive (buniya, futiḥa).' },
    { route: 'stretch', text: 'I gave a balanced view, a concession or law … la-.' },
  ],
};
speak.RP[2].tasks[2].help = 'كَانَ هُنَاكَ … أَمَّا الآنَ فَقَدْ بُنِيَتْ …';
speak.CONV[1].qs[0].start = 'أَخْرُجُ مِنَ البَيْتِ، ثُمَّ أَمْشِي إِلَى …';
speak.CONV[2].qs[4].start = 'لَوْ صَمَّمْتُهَا، لَجَعَلْتُ …';

const Q2_CORE = `مَرْحَبًا يَا لَيْلَى،
كَيْفَ حَالُكِ؟ سَعِيدَةٌ جِدًّا لِأَنَّكِ سَتَزُورِينَنِي فِي مَدِينَتِي! أَسْكُنُ فِي حَيٍّ هَادِئٍ قُرْبَ وَسَطِ المَدِينَةِ. بَيْتِي مُقَابِلَ حَدِيقَةٍ كَبِيرَةٍ، وَبِجَانِبِهِ مَخْبَزٌ وَصَيْدَلِيَّةٌ. فِي مَدِينَتِي يُوجَدُ مَتْحَفٌ مَشْهُورٌ، وَتُوجَدُ أَسْوَاقٌ كَثِيرَةٌ وَمَطَاعِمُ لَذِيذَةٌ. فِي الأُسْبُوعِ المَاضِي فُتِحَ مَرْكَزٌ تِجَارِيٌّ جَدِيدٌ، وَذَهَبْتُ إِلَيْهِ مَعَ أُخْتِي. فِي رَأْيِي، مَدِينَتِي أَجْمَلُ مِنَ العَاصِمَةِ، لِأَنَّهَا أَهْدَأُ وَأَنْظَفُ. عِنْدَمَا تَأْتِينَ، سَنَزُورُ القَلْعَةَ القَدِيمَةَ، وَسَنَرْكَبُ القِطَارَ إِلَى البَحْرِ.
إِلَى اللِّقَاءِ،
نُورُ`;
const Q2_FULL = `عَزِيزَتِي لَيْلَى،
يَا لَهُ مِنْ خَبَرٍ سَعِيدٍ أَنَّكِ سَتَقْضِينَ عُطْلَتَكِ عِنْدَنَا! أَسْكُنُ فِي حَيٍّ سَكَنِيٍّ هَادِئٍ، لَا يَبْعُدُ عَنْ وَسَطِ المَدِينَةِ إِلَّا عَشْرَ دَقَائِقَ بِالحَافِلَةِ؛ فَبَيْتُنَا يَقَعُ مُقَابِلَ حَدِيقَةٍ وَاسِعَةٍ، بَيْنَ المَسْجِدِ وَالمَكْتَبَةِ العَامَّةِ. وَفِي مَدِينَتِنَا مَتْحَفٌ مَبْنِيٌّ مِنَ الحَجَرِ الأَبْيَضِ يَعُودُ إِلَى القَرْنِ التَّاسِعَ عَشَرَ، وَسُوقٌ شَعْبِيٌّ يُقَامُ كُلَّ سَبْتٍ. وَقَدِ افْتُتِحَتْ مُؤَخَّرًا مَكْتَبَةٌ رَقْمِيَّةٌ رَائِعَةٌ قَضَيْتُ فِيهَا يَوْمًا كَامِلًا. صَحِيحٌ أَنَّ مَدِينَتَنَا أَصْغَرُ مِنْ لَنْدَنَ، غَيْرَ أَنَّهَا أَدْفَأُ قَلْبًا. وَعِنْدَمَا تَصِلِينَ، سَأَصْحَبُكِ إِلَى القَلْعَةِ الَّتِي تُطِلُّ عَلَى المَدِينَةِ كُلِّهَا.
بِشَوْقٍ،
نُورُ`;
const Q3A_CORE = `أَسْكُنُ فِي مَدِينَةِ بِرْمِنْغْهَامَ. هِيَ مَدِينَةٌ كَبِيرَةٌ وَمُزْدَحِمَةٌ فِي وَسَطِ بَرِيطَانْيَا. فِيهَا تُوجَدُ مَبَانٍ عَالِيَةٌ كَثِيرَةٌ، وَيُوجَدُ مَرْكَزٌ تِجَارِيٌّ كَبِيرٌ جِدًّا، وَمَحَطَّةُ قِطَارٍ حَدِيثَةٌ. المُوَاصَلَاتُ فِيهَا سَرِيعَةٌ، لٰكِنَّ الشَّوَارِعَ مُزْدَحِمَةٌ فِي الصَّبَاحِ.
بَيْتِي فِي حَيٍّ هَادِئٍ. مُقَابِلَ بَيْتِي تُوجَدُ حَدِيقَةٌ جَمِيلَةٌ، وَبِجَانِبِهِ مَسْجِدٌ صَغِيرٌ. مَدْرَسَتِي قَرِيبَةٌ، بَيْنَ المَكْتَبَةِ العَامَّةِ وَالمُسْتَشْفَى. أُحِبُّ حَيِّي، لِأَنَّ الجِيرَانَ لُطَفَاءُ، وَالخِدْمَاتِ جَيِّدَةٌ.
فِي الشِّتَاءِ المَاضِي زُرْتُ قَرْيَةَ جَدِّي فِي بَاكِسْتَانَ. كَانَتِ القَرْيَةُ صَغِيرَةً وَهَادِئَةً جِدًّا. كَانَتِ البُيُوتُ مَبْنِيَّةً مِنَ الطِّينِ وَالحَجَرِ، وَلَمْ تَكُنْ هُنَاكَ مَحَلَّاتٌ كَبِيرَةٌ. لَعِبْتُ مَعَ أَبْنَاءِ عَمِّي فِي الحُقُولِ كُلَّ يَوْمٍ، وَكُنَّا نَشْرَبُ الحَلِيبَ الطَّازَجَ.
فِي رَأْيِي، المَدِينَةُ أَفْضَلُ لِلدِّرَاسَةِ وَالعَمَلِ، لٰكِنَّ القَرْيَةَ أَهْدَأُ وَأَنْظَفُ. فِي المُسْتَقْبَلِ سَأَسْكُنُ فِي مَدِينَةٍ صَغِيرَةٍ قُرْبَ البَحْرِ، لِأَنِّي أُرِيدُ الهُدُوءَ وَالخِدْمَاتِ مَعًا.`;
const Q3A_FULL = `لِكُلِّ مَدِينَةٍ شَخْصِيَّةٌ، وَشَخْصِيَّةُ مَدِينَتِي بِرْمِنْغْهَامَ مَزِيجٌ مِنَ القَدِيمِ وَالحَدِيثِ؛ فَبِجَانِبِ المَصَانِعِ القَدِيمَةِ المَبْنِيَّةِ مِنَ الطُّوبِ الأَحْمَرِ، تَرْتَفِعُ أَبْرَاجٌ زُجَاجِيَّةٌ، وَمَكْتَبَةٌ عَامَّةٌ تُعَدُّ مِنْ أَكْبَرِ المَكْتَبَاتِ فِي أُورُوبَّا.
أَمَّا حَيِّي، فَهُوَ عَالَمٌ صَغِيرٌ مُتَكَامِلٌ؛ إِذْ يُوجَدُ فِيهِ كُلُّ مَا أَحْتَاجُ إِلَيْهِ: مَدْرَسَةٌ وَمَسْجِدٌ وَمَرْكَزٌ صِحِّيٌّ، وَسُوقٌ يَمْتَلِئُ بِالفَوَاكِهِ وَالتَّوَابِلِ مِنْ كُلِّ أَنْحَاءِ العَالَمِ. غَيْرَ أَنَّهُ يَنْقُصُهُ مَكَانٌ لِلشَّبَابِ يَجْتَمِعُونَ فِيهِ بَعْدَ المَدْرَسَةِ، مِمَّا يَدْفَعُ كَثِيرًا مِنْهُمْ إِلَى قَضَاءِ المَسَاءِ فِي الشَّوَارِعِ أَوْ أَمَامَ الشَّاشَاتِ.
وَقَدْ شَعَرْتُ بِالفَرْقِ بَيْنَ المَدِينَةِ وَالقَرْيَةِ حِينَ قَضَيْتُ شَهْرًا فِي قَرْيَةِ جَدِّي؛ فَهُنَاكَ لَا تُوجَدُ مُوَاصَلَاتٌ عَامَّةٌ، وَأَقْرَبُ مُسْتَشْفًى يَبْعُدُ سَاعَةً بِالسَّيَّارَةِ، لٰكِنَّ الجِيرَانَ كَانُوا يَتَقَاسَمُونَ الطَّعَامَ وَالأَخْبَارَ كُلَّ مَسَاءٍ.
صَحِيحٌ أَنَّ المَدِينَةَ تُوَفِّرُ الخِدْمَاتِ وَالفُرَصَ، غَيْرَ أَنَّهَا قَدْ تُفْقِدُنَا الدِّفْءَ الإِنْسَانِيَّ. وَلَوْ صُمِّمَتْ أَحْيَاءُ المُدُنِ بِحَيْثُ يَلْتَقِي سُكَّانُهَا فِي حَدَائِقَ وَمَرَاكِزَ مُشْتَرَكَةٍ، لَجَمَعْنَا بَيْنَ مَزَايَا المَكَانَيْنِ.`;
const Q3B_FULL = `يَعِيشُ اليَوْمَ أَكْثَرُ مِنْ نِصْفِ سُكَّانِ العَالَمِ فِي المُدُنِ، وَيُتَوَقَّعُ أَنْ تَرْتَفِعَ هٰذِهِ النِّسْبَةُ إِلَى الثُّلُثَيْنِ خِلَالَ ثَلَاثِينَ سَنَةً. فَكَيْفَ يَجِبُ أَنْ تَكُونَ مُدُنُ المُسْتَقْبَلِ لِكَيْ تَتَّسِعَ لِهٰذِهِ المَلَايِينِ؟
فِي المَاضِي كَانَتِ المُدُنُ تَنْمُو دُونَ تَخْطِيطٍ، فَتُبْنَى الأَحْيَاءُ المُزْدَحِمَةُ حَوْلَ المَصَانِعِ وَالطُّرُقِ السَّرِيعَةِ، أَمَّا اليَوْمَ فَيُدْرِكُ المُخَطِّطُونَ أَنَّ المَسَاحَاتِ الخَضْرَاءَ وَالمُوَاصَلَاتِ العَامَّةَ لَيْسَتْ رَفَاهِيَةً، بَلْ ضَرُورَةً لِصِحَّةِ السُّكَّانِ.
وَقَدْ رَأَيْتُ نَمُوذَجًا مُدْهِشًا عِنْدَمَا زُرْتُ سِنْغَافُورَةَ مَعَ أُسْرَتِي؛ فَالمَبَانِي هُنَاكَ مُغَطَّاةٌ بِالنَّبَاتَاتِ، وَالحَدَائِقُ مُعَلَّقَةٌ بَيْنَ الأَبْرَاجِ، وَالقِطَارَاتُ تَصِلُ إِلَى كُلِّ حَيٍّ فِي دَقَائِقَ، مِمَّا يَجْعَلُ السَّيَّارَةَ غَيْرَ ضَرُورِيَّةٍ تَقْرِيبًا. وَأَدْهَشَنِي أَنَّ دَرَجَةَ الحَرَارَةِ فِي الشَّوَارِعِ المُشَجَّرَةِ كَانَتْ أَقَلَّ بِوُضُوحٍ مِنْ غَيْرِهَا.
صَحِيحٌ أَنَّ بِنَاءَ مُدُنٍ كَهٰذِهِ مُكْلِفٌ، غَيْرَ أَنَّ تَكْلِفَةَ التَّلَوُّثِ وَالزَّحْمَةِ أَعْلَى بِكَثِيرٍ. وَإِذَا اسْتَثْمَرَتِ الحُكُومَاتُ فِي مَبَانٍ صَدِيقَةٍ لِلْبِيئَةِ وَمُوَاصَلَاتٍ نَظِيفَةٍ، فَسَتُصْبِحُ المُدُنُ أَمَاكِنَ نَعِيشُ فِيهَا، لَا أَمَاكِنَ نَهْرُبُ مِنْهَا.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a new-resident registration form, write an email describing your town to a visiting friend, and write an extended piece about your town or about cities of the future.',
  lift: [
    { ar: 'بَيْتُنَا يَقَعُ مُقَابِلَ حَدِيقَةٍ وَاسِعَةٍ', en: 'our house is opposite a large park' },
    { ar: 'مَتْحَفٌ مَبْنِيٌّ مِنَ الحَجَرِ الأَبْيَضِ', en: 'a museum built of white stone' },
    { ar: 'مَدِينَتِي أَهْدَأُ وَأَنْظَفُ مِنَ العَاصِمَةِ', en: 'my town is quieter and cleaner than the capital' },
  ],
  checkTip: 'Check: yūjadu + masculine, tūjadu + feminine or non-human plural; locatives + genitive (muqābila al-ḥadīqati); mabnī / mabniyya agrees with the building; comparatives do not change for gender (al-madīnatu aṣgharu).',
  FORM: {
    title: 'New-resident registration form', ar: 'اسْتِمَارَةُ تَسْجِيلِ السُّكَّانِ الجُدُدِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'نُورُ حُسَيْنٌ', modelEn: 'Nour Hussein' },
      { core: true, ar: 'العُنْوَانُ الجَدِيدُ', en: 'New address', model: '١٢ شَارِعُ الحَدِيقَةِ', modelEn: '12 Park Street' },
      { core: true, ar: 'نَوْعُ السَّكَنِ', en: 'Type of home', model: 'شَقَّةٌ فِي الطَّابِقِ الثَّالِثِ', modelEn: 'a third-floor flat' },
      { core: true, ar: 'عَدَدُ أَفْرَادِ الأُسْرَةِ', en: 'Number in family', model: 'خَمْسَةٌ', modelEn: 'five' },
      { core: true, ar: 'أَقْرَبُ مَدْرَسَةٍ', en: 'Nearest school', model: 'مَدْرَسَةُ النُّورِ', modelEn: 'Al Noor School' },
      { core: true, ar: 'وَسِيلَةُ المُوَاصَلَاتِ', en: 'Means of transport', model: 'الحَافِلَةُ وَالقِطَارُ', modelEn: 'bus and train' },
      { ar: 'خِدْمَةٌ تَحْتَاجُ إِلَيْهَا', en: 'A service you need', model: 'مَكْتَبَةٌ عَامَّةٌ قَرِيبَةٌ', modelEn: 'a nearby public library' },
      { ar: 'جُمْلَةٌ: صِفْ مَوْقِعَ بَيْتِكَ', en: 'ONE sentence: describe where your home is', model: 'بَيْتِي مُقَابِلَ الحَدِيقَةِ، بَيْنَ المَسْجِدِ وَالمَخْبَزِ.', modelEn: 'My home is opposite the park, between the mosque and the bakery.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with two locatives.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 5: aqrabu + indefinite genitive (aqrabu madrasatin). Box 8: muqābila / bayna + genitive.',
  },
  Q2: {
    short: 'an email describing your town', title: 'Question 2: welcome to my town', ar: 'أَهْلًا بِكِ فِي مَدِينَتِي',
    task: 'A friend is coming to visit your town. Write an email in Arabic of about 80–90 words. You must include: • where you live and what is near your home • what there is in your town • something new that opened or was built recently • your opinion of the town and what you will do together.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'yūjadu / tūjadu and two locatives.', 'A past (or passive) AND a future sentence.', 'About 80–90 words.'],
    phrases: [['أَسْكُنُ فِي … بَيْتِي مُقَابِلَ …', 'I live in … my house is opposite …'], ['فِي مَدِينَتِي يُوجَدُ … وَتُوجَدُ …', 'in my town there is … and there are …'], ['فِي الأُسْبُوعِ المَاضِي فُتِحَ …', 'last week … opened (was opened)'], ['عِنْدَمَا تَأْتِينَ، سَنَزُورُ …', 'when you come, we will visit …']],
    rubric: [
      ['task', 'سَتَزُورُكِ صَدِيقَتُكِ فِي مَدِينَتِكِ. اكْتُبِي لَهَا رِسَالَةً (٨٠–٩٠ كَلِمَةً).', 'Your friend is visiting: write her an email (80–90 words).'],
      ['1', 'أَيْنَ تَسْكُنِينَ؟ وَمَاذَا يُوجَدُ قُرْبَ بَيْتِكِ؟', 'Where you live; what is near your home'],
      ['2', 'مَاذَا يُوجَدُ فِي مَدِينَتِكِ؟', 'What there is in your town'],
      ['3', 'مَا الجَدِيدُ الَّذِي افْتُتِحَ أَوْ بُنِيَ مُؤَخَّرًا؟', 'Something new that opened or was built'],
      ['4', 'مَا رَأْيُكِ فِي المَدِينَةِ؟ وَمَاذَا سَتَفْعَلَانِ مَعًا؟', 'Your opinion; what you will do together'],
    ],
    qwords: 'أَيْنَ (where) · مَاذَا يُوجَدُ (what is there) · افْتُتِحَ / بُنِيَ (opened / was built — PAST PASSIVE) · سَتَفْعَلَانِ (you two will do — FUTURE)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكِ؟', 'Hello …, how are you?'],
      ['1', 'أَسْكُنُ فِي حَيٍّ ______ . بَيْتِي مُقَابِلَ ______ ، وَبِجَانِبِهِ ______ .', 'I live in a … area. My house is opposite …, and next to it …'],
      ['2', 'فِي مَدِينَتِي يُوجَدُ ______ ، وَتُوجَدُ ______ .', 'In my town there is …, and there are …'],
      ['3', 'فِي الأُسْبُوعِ المَاضِي فُتِحَ ______ .', 'Last week … opened.'],
      ['4', 'مَدِينَتِي أَ______ مِنْ ______ . عِنْدَمَا تَأْتِينَ، سَنَزُورُ ______ .', 'My town is …er than … When you come, we will visit …'],
      ['end', 'إِلَى اللِّقَاءِ، ______', 'See you, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Layla, how are you? I’m so happy you’re visiting me in my town! I live in a quiet area near the centre. My house is opposite a big park, and next to it there’s a bakery and a chemist. In my town there is a famous museum, and lots of markets and delicious restaurants. Last week a new shopping centre opened, and I went with my sister. In my opinion my town is nicer than the capital, because it is quieter and cleaner. When you come, we’ll visit the old castle and take the train to the sea. See you, Nour.”',
      find: ['بَيْتِي مُقَابِلَ', 'يُوجَدُ مَتْحَفٌ', 'فُتِحَ مَرْكَزٌ', 'أَهْدَأُ وَأَنْظَفُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Layla, what happy news that you’ll spend your holiday with us! I live in a quiet residential area just ten minutes by bus from the centre: our house is opposite a large park, between the mosque and the public library. Our town has a museum built of white stone dating from the 19th century, and a traditional market held every Saturday. A wonderful digital library recently opened, where I spent a whole day. It’s true our town is smaller than London, but it has a warmer heart. When you arrive, I’ll take you to the castle that overlooks the whole town. With longing, Nour.”',
      find: ['لَا يَبْعُدُ … إِلَّا', 'بَيْنَ المَسْجِدِ وَالمَكْتَبَةِ', 'مَبْنِيٌّ مِنَ الحَجَرِ', 'قَدِ افْتُتِحَتْ'],
    },
  },
  Q3: {
    a: { title: 'مَدِينَتِي وَحَيِّي', en: 'My town and my neighbourhood', bullets: 'وَصْفُ مَدِينَتِكَ · حَيُّكَ وَخِدْمَاتُهُ · مُقَارَنَةٌ بِمَكَانٍ زُرْتَهُ · رَأْيُكَ وَأَيْنَ سَتَسْكُنُ فِي المُسْتَقْبَلِ', bulletsEn: 'Describing your town · your neighbourhood and its services · a comparison with a place you visited · your opinion and where you will live' },
    b: { title: 'مُدُنُ المُسْتَقْبَلِ', en: 'Cities of the future', bullets: 'نُمُوُّ المُدُنِ · المَاضِي وَالحَاضِرُ · مِثَالٌ رَأَيْتَهُ · رَأْيُكَ وَاقْتِرَاحُكَ', bulletsEn: 'The growth of cities · past and present · an example you saw · your opinion and suggestion' },
    plan: [
      'Your town — tūjadu mabānin ʿāliya, yūjadu markaz …; non-human plural agreement.',
      'Your neighbourhood — muqābila, bi-jānibi, bayna … wa-; what is missing (lā yūjadu …).',
      'Past — a visit to a village or another city: kānat al-buyūtu mabniyyatan min …; lam takun hunāka …',
      'Comparison + future — afḍalu / ahdaʾu min, sa-askunu …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'مُقَابِلَ بَيْتِي تُوجَدُ حَدِيقَةٌ، وَبِجَانِبِهِ مَسْجِدٌ.', en: 'present: opposite my house there is a park, and next to it a mosque.' },
      { ar: 'كَانَتِ البُيُوتُ مَبْنِيَّةً مِنَ الطِّينِ وَالحَجَرِ.', en: 'past: the houses were built of mud and stone.' },
      { ar: 'سَأَسْكُنُ فِي مَدِينَةٍ صَغِيرَةٍ قُرْبَ البَحْرِ.', en: 'future: I will live in a small town near the sea.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Birmingham: a big, crowded city with tall buildings, a huge shopping centre and a modern station; fast transport, busy mornings → my quiet area: a park opposite, a mosque next door, school between the library and hospital; kind neighbours → last winter in my grandfather’s village in Pakistan: mud-and-stone houses, no big shops, fields and fresh milk → the city suits study and work, the village is calmer; in future I’ll live in a small town by the sea', find: ['تُوجَدُ مَبَانٍ عَالِيَةٌ', 'مُقَابِلَ بَيْتِي', 'كَانَتِ البُيُوتُ مَبْنِيَّةً', 'أَهْدَأُ وَأَنْظَفُ'], notes: 'Core model: yūjadu / tūjadu with agreement, three locatives, kānat … mabniyyatan min, lam takun hunāka, comparatives and a future plan with a reason.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Every city has a personality, and Birmingham’s is a mix of old and new: beside old factories of red brick rise glass towers, and a public library counted among Europe’s largest → as for my neighbourhood, it is a small complete world, with everything I need: a school, a mosque, a health centre, and a market full of fruit and spices from all over the world — but it lacks a place for young people to meet after school, which pushes many to spend evenings on the streets or in front of screens → I felt the difference between city and village when I spent a month in my grandfather’s village: no public transport, the nearest hospital an hour’s drive away, but neighbours shared food and news every evening → the city provides services and opportunities, but it may cost us human warmth; “if neighbourhoods were designed so residents met in shared parks and centres, we would combine the advantages of both”.', find: ['المَبْنِيَّةِ مِنَ الطُّوبِ', 'تُعَدُّ مِنْ أَكْبَرِ', 'يَنْقُصُهُ مَكَانٌ', 'لَوْ صُمِّمَتْ … لَجَمَعْنَا'], notes: 'Full-mark model: a personification hook, mabniyya min as an adjective, a passive (tuʿaddu), ammā … fa-, idh, kull mā, ghayra anna, a three-point contrast, a concession and a passive law … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'cities of the future', text: Q3B_FULL, en: 'Over half the world’s population lives in cities today, expected to reach two-thirds within thirty years — so how must future cities be to hold these millions? → in the past cities grew without planning, with crowded areas built round factories and motorways; today planners realise green spaces and public transport are not luxuries but necessities for residents’ health → I saw an amazing model visiting Singapore with my family: buildings covered in plants, gardens hanging between towers, and trains reaching every area in minutes, which makes a car almost unnecessary; it amazed me that tree-lined streets were noticeably cooler than others → building such cities is costly, but the cost of pollution and congestion is far higher; “if governments invest in eco-friendly buildings and clean transport, cities will become places we live in, not places we escape from”.', find: ['يُتَوَقَّعُ أَنْ', 'فَتُبْنَى الأَحْيَاءُ', 'لَيْسَتْ رَفَاهِيَةً، بَلْ', 'إِذَا اسْتَثْمَرَتْ … فَسَتُصْبِحُ'], notes: 'Full-mark model for the Stretch title: statistics, a passive forecast (yutawaqqaʿu an), a rhetorical question with li-kay, kāna + present vs ammā … fa-, laysat … bal, passive participles (mughaṭṭāt, muʿallaqa), mimmā, a concession and idhā … fa-sa- with a lā … contrast.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; the last box has two locatives.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: yūjadu / tūjadu agree, and a past passive (futiḥa).' },
    { route: 'develop', text: 'Q3: four paragraphs with a comparison and mabnī min.' },
    { route: 'stretch', text: 'Q3: a concession and law … la- or idhā … fa-sa-.' },
  ],
};

module.exports = { speak, write };
