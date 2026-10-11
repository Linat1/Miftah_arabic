'use strict';
/* Exam-practice data · FR-L01 · Final Revision — Daily Life, Food and Health (Topic A: routine and time, frequency, food and meals, eating out, healthy lifestyle, health problems, pharmacy, everyday transport). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'R', n: 1, short: 'Daily Life, Food and Health', arShort: 'الحَيَاةُ اليَوْمِيَّةُ وَالطَّعَامُ وَالصِّحَّةُ', fileTitle: 'Daily_Life_Food_and_Health', title: 'Final Revision — Daily Life, Food and Health', ar: 'مُرَاجَعَةٌ: الحَيَاةُ اليَوْمِيَّةُ وَالطَّعَامُ وَالصِّحَّةُ', icon: 'FaUtensils', grammar: 'Topic A revision: the present tense with time and frequency (fī as-sāʿati …, dāʾiman, aḥyānan, abadan); food quantities and prices; the imperative and advice (yajibu an, lā takul); mundhu for illness; kuntu + present vs al-āna' };

const speak = {
  ...base,
  focus: 'Final-revision Paper 3 practice on Topic A in breakout rooms: daily routine and time, food and eating out, healthy living, illness and the pharmacy, everyday journeys. Exam skills: answer EVERY role-play task in a full sentence, listen for the unexpected question, and develop conversation answers with a reason, a time frame and an example.',
  words: [
    w(1, 'أَسْتَيْقِظُ فِي السَّاعَةِ …', 'I wake up at … o’clock', [['at half past', 'وَالنِّصْفِ'], ['at quarter past', 'وَالرُّبْعِ']], { tag: 'A · L01' }),
    w(2, 'دَائِمًا · أَحْيَانًا · أَبَدًا', 'always · sometimes · never', [['usually', 'عَادَةً'], ['twice a week', 'مَرَّتَيْنِ فِي الأُسْبُوعِ']], { tag: 'A · L03' }),
    w(3, 'أَوَّلًا · ثُمَّ · بَعْدَ ذٰلِكَ', 'first · then · after that', [['before', 'قَبْلَ'], ['finally', 'أَخِيرًا']], { tag: 'A · L03' }),
    w(4, 'الفُطُورُ · الغَدَاءُ · العَشَاءُ', 'breakfast · lunch · dinner', [['I prefer', 'أُفَضِّلُ'], ['I can’t stand', 'لَا أُحِبُّ أَبَدًا']], { tag: 'A · L04' }),
    w(5, 'أُرِيدُ … مِنْ فَضْلِكَ', 'I’d like … please', [['how much is it?', 'كَمِ الثَّمَنُ؟'], ['the bill', 'الحِسَابُ']], { tag: 'A · L05' }),
    w(6, 'صِحِّيٌّ · غَيْرُ صِحِّيٍّ', 'healthy · unhealthy (m.)', [['f.', 'صِحِّيَّةٌ · غَيْرُ صِحِّيَّةٍ'], ['more healthy', 'أَكْثَرُ صِحَّةً']], { tag: 'A · L06' }),
    w(7, 'يُؤْلِمُنِي … · عِنْدِي …', 'my … hurts · I have …', [['my head hurts', 'يُؤْلِمُنِي رَأْسِي'], ['a temperature', 'حَرَارَةٌ']], { tag: 'A · L07' }),
    w(8, 'مُنْذُ يَوْمَيْنِ', 'for two days', [['since yesterday', 'مُنْذُ أَمْسِ'], ['for a week', 'مُنْذُ أُسْبُوعٍ']], { tag: 'A · L07' }),
    w(9, 'خُذْ … · لَا تَأْكُلْ …', 'take … · don’t eat … (m.)', [['f.', 'خُذِي · لَا تَأْكُلِي'], ['you must', 'يَجِبُ أَنْ']], { tag: 'A · L08' }),
    w(10, 'أَذْهَبُ إِلَى المَدْرَسَةِ بِـالحَافِلَةِ', 'I go to school by bus', [['on foot', 'مَشْيًا عَلَى الأَقْدَامِ'], ['it takes', 'تَسْتَغْرِقُ الرِّحْلَةُ']], { tag: 'A · L09' }),
    w(11, 'كُنْتُ … أَمَّا الآنَ فَـ…', 'I used to … but now …', [['I will', 'سَوْفَ'], ['I started', 'بَدَأْتُ']], { tag: 'time frames' }),
    w(12, 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', 'it is true that … but …', [['if … would', 'لَوْ … لَـ … → لَوْ كُنْتُ طَبِيبًا لَنَصَحْتُ'], ['which (result)', 'مِمَّا']], { tag: 'top band' }),
  ],
  words1: { eyebrow: 'Language bank · Topic A in twelve structures', title: 'Routine, food and health', ar: 'المِحْوَرُ الأَوَّلُ فِي اثْنَتَيْ عَشْرَةَ بِنْيَةً', notes: 'LANGUAGE BANK (2 min) — a revision map of Topic A. Ask each student to make ONE sentence about themselves with each card. EXAM TIP: in the role play, the examiner reads every task — answer each one in a full sentence, even the simple ones.' },
  words2: { eyebrow: 'Language bank · structures that lift a mark', title: 'Accurate, linked, developed', ar: 'بِنْيَاتٌ تَرْفَعُ الدَّرَجَةَ', notes: 'LANGUAGE BANK (2 min) — top-band answers are accurate (verb endings, time, numbers), linked (awwalan, thumma, li-dhālika) and developed (kuntu … ammā al-āna fa-, a concession, law … la-). EXAM TIP: in the conversation, aim for three sentences: answer + reason + another time frame.' },
  checkCore: 'answered every role-play task in a full sentence',
  checkDevelop: 'used a frequency word, a reason and two time frames',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a café', title: 'Role play A — Ordering at a café', ar: 'فِي المَقْهَى', you: 'a customer', them: 'the waiter',
      tasks: [
        { core: true, ex: 'أَهْلًا وَسَهْلًا! كَمْ شَخْصًا؟', task: 'Say how many people.', help: 'نَحْنُ …', model: 'نَحْنُ ثَلَاثَةٌ، مِنْ فَضْلِكَ.', modelEn: 'There are three of us, please.' },
        { core: true, ex: 'تَفَضَّلُوا. مَاذَا تُرِيدُ أَنْ تَأْكُلَ؟', task: 'Order food.', help: 'أُرِيدُ … مِنْ فَضْلِكَ', model: 'أُرِيدُ سَلَطَةً وَدَجَاجًا مَشْوِيًّا، مِنْ فَضْلِكَ.', modelEn: 'I’d like a salad and grilled chicken, please.' },
        { core: true, ex: 'وَمَاذَا تَشْرَبُ؟', task: 'Order a drink.', help: 'أَشْرَبُ …', model: 'أَشْرَبُ عَصِيرَ بُرْتُقَالٍ.', modelEn: 'Orange juice.' },
        { core: true, ex: 'حَسَنًا.', task: 'Ask the price.', help: 'كَمِ …؟', model: 'كَمِ الثَّمَنُ؟', modelEn: 'How much is it?' },
        { core: true, unexpected: true, ex: 'خَمْسَةَ عَشَرَ جُنَيْهًا. هَلْ تَأْكُلُ فِي المَطَاعِمِ كَثِيرًا؟', task: 'Answer the unexpected question.', help: 'لَا، … مَرَّةً فِي …', model: 'لَا، آكُلُ فِي المَطْعَمِ مَرَّةً فِي الشَّهْرِ.', modelEn: 'No, I eat out once a month.' },
      ],
      girl: 'تُرِيدِينَ · تَأْكُلِي · تَشْرَبِينَ · تَأْكُلِينَ',
      notes: 'Core: numbers with people (thalāthatun), urīdu … min faḍlika, kam ath-thaman?, frequency (marratan fī ash-shahr). EXAM TIP: if you miss a word, say عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟ — you lose nothing.',
    },
    {
      id: 'B', level: 'Core+', setting: 'a pharmacy', title: 'Role play B — At the pharmacy', ar: 'فِي الصَّيْدَلِيَّةِ', you: 'a teenager who feels ill', them: 'the pharmacist',
      tasks: [
        { core: true, ex: 'صَبَاحَ الخَيْرِ، مَاذَا بِكَ؟', task: 'Say what is wrong.', help: 'يُؤْلِمُنِي … وَعِنْدِي …', model: 'يُؤْلِمُنِي حَلْقِي، وَعِنْدِي حَرَارَةٌ.', modelEn: 'My throat hurts and I have a temperature.' },
        { core: true, ex: 'مُنْذُ مَتَى؟', task: 'Say for how long.', help: 'مُنْذُ …', model: 'مُنْذُ يَوْمَيْنِ.', modelEn: 'For two days.' },
        { ex: 'هَلْ أَخَذْتَ دَوَاءً؟', task: 'Answer in the past.', help: 'نَعَمْ / لَا، أَخَذْتُ … / شَرِبْتُ …', model: 'لَا، لَمْ آخُذْ دَوَاءً، لٰكِنِّي شَرِبْتُ الشَّايَ بِالعَسَلِ.', modelEn: 'No, I didn’t take medicine, but I drank tea with honey.' },
        { ex: 'خُذْ هٰذَا الدَّوَاءَ.', task: 'ASK how often to take it.', help: 'كَمْ مَرَّةً …؟', model: 'كَمْ مَرَّةً آخُذُهُ فِي اليَوْمِ؟', modelEn: 'How many times a day should I take it?' },
        { unexpected: true, ex: 'ثَلَاثَ مَرَّاتٍ بَعْدَ الأَكْلِ. هَلْ تَذْهَبُ إِلَى المَدْرَسَةِ غَدًا؟', task: 'Answer the unexpected question (future + reason).', help: 'لَا، سَأَبْقَى … لِأَنَّ …', model: 'لَا، سَأَبْقَى فِي البَيْتِ، لِأَنِّي أُرِيدُ أَنْ أَرْتَاحَ.', modelEn: 'No, I’ll stay home, because I want to rest.' },
      ],
      girl: 'بِكِ · أَخَذْتِ · خُذِي · تَذْهَبِينَ',
      notes: 'Core+: yuʾlimunī + body part, mundhu + dual, lam ākhudh (past negative), the CANDIDATE asks (kam marratan …?), sa- + li-annī. EXAM TIP: the task “ASK …” means YOU ask a question — a common slip is to answer instead.',
    },
    {
      id: 'C', level: 'Develop', setting: 'a wellbeing check', title: 'Role play C — My routine and my health', ar: 'رُوتِينِي وَصِحَّتِي', you: 'a Year 11 student', them: 'the school wellbeing officer',
      tasks: [
        { ex: 'صِفْ يَوْمًا عَادِيًّا فِي الأُسْبُوعِ.', task: 'Describe a routine with times and sequence.', help: 'أَسْتَيْقِظُ فِي … ثُمَّ … وَبَعْدَ ذٰلِكَ …', model: 'أَسْتَيْقِظُ فِي السَّادِسَةِ وَالنِّصْفِ، ثُمَّ أُصَلِّي وَأُفْطِرُ، وَبَعْدَ ذٰلِكَ أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ، وَتَسْتَغْرِقُ الرِّحْلَةُ عِشْرِينَ دَقِيقَةً.', modelEn: 'I wake at 6.30, pray and have breakfast, then take the bus to school — a twenty-minute journey.' },
        { ex: 'وَكَيْفَ تَأْكُلُ؟', task: 'Describe your diet with frequency.', help: 'آكُلُ … دَائِمًا، وَ… أَحْيَانًا، لٰكِنِّي لَا … أَبَدًا', model: 'آكُلُ الخُضَارَ وَالفَوَاكِهَ دَائِمًا، وَالحَلَوِيَّاتِ أَحْيَانًا، لٰكِنِّي لَا أَشْرَبُ المَشْرُوبَاتِ الغَازِيَّةَ أَبَدًا.', modelEn: 'Vegetables and fruit always, sweets sometimes, but never fizzy drinks.' },
        { ex: 'هَلْ تَغَيَّرَتْ عَادَاتُكَ هٰذِهِ السَّنَةَ؟', task: 'Contrast past and present.', help: 'كُنْتُ … أَمَّا الآنَ فَـ…', model: 'كُنْتُ أَسْهَرُ عَلَى الهَاتِفِ حَتَّى مُنْتَصَفِ اللَّيْلِ، أَمَّا الآنَ فَأَنَامُ فِي العَاشِرَةِ، لِأَنَّ الامْتِحَانَاتِ قَرِيبَةٌ.', modelEn: 'I used to stay up on my phone till midnight; now I sleep at ten because exams are near.' },
        { ex: 'هَلْ تُمَارِسُ الرِّيَاضَةَ؟', task: 'Give frequency, reason and result.', help: 'أَلْعَبُ … مَرَّتَيْنِ فِي الأُسْبُوعِ، لِأَنَّ … مِمَّا …', model: 'أَلْعَبُ كُرَةَ السَّلَّةِ مَرَّتَيْنِ فِي الأُسْبُوعِ، لِأَنَّهَا تُخَفِّفُ التَّوَتُّرَ، مِمَّا يُسَاعِدُنِي عَلَى التَّرْكِيزِ.', modelEn: 'Basketball twice a week — it reduces stress, which helps me concentrate.' },
        { unexpected: true, ex: 'مَا نَصِيحَتُكَ لِطَالِبٍ مُتْعَبٍ قَبْلَ الامْتِحَانَاتِ؟', task: 'Answer the unexpected question (imperatives).', help: 'نَمْ … وَكُلْ … وَلَا …', model: 'نَمْ ثَمَانِيَ سَاعَاتٍ، وَكُلْ فُطُورًا صِحِّيًّا، وَلَا تُرَاجِعْ طُولَ اللَّيْلِ.', modelEn: 'Sleep eight hours, eat a healthy breakfast, and don’t revise all night.' },
      ],
      girl: 'صِفِي · تَأْكُلِينَ · عَادَاتُكِ · تُمَارِسِينَ · نَصِيحَتُكِ · (to a girl: نَامِي · كُلِي · لَا تُرَاجِعِي)',
      notes: 'Develop: times + sequence (A · L01, L03), frequency words incl. lā … abadan (L03, L04), kuntu + present vs ammā al-āna fa- (L06), li-anna + mimmā, imperatives incl. the negative (L08). EXAM TIP: a Develop answer = 2–3 linked sentences.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a radio phone-in', title: 'Role play D — Are teenagers’ lifestyles healthy?', ar: 'هَلْ نَمَطُ حَيَاةِ المُرَاهِقِينَ صِحِّيٌّ؟', you: 'a teenage caller', them: 'the radio presenter',
      tasks: [
        { ex: 'يَقُولُ الأَطِبَّاءُ إِنَّ المُرَاهِقِينَ يَنَامُونَ قَلِيلًا. مَا رَأْيُكَ؟', task: 'Agree with a reason and evidence.', help: 'أُوَافِقُ … ؛ فَالدَّلِيلُ أَنَّ …', model: 'أُوَافِقُ تَمَامًا؛ فَالدَّلِيلُ أَنَّ أَكْثَرَ زُمَلَائِي يَسْهَرُونَ عَلَى الشَّاشَاتِ، ثُمَّ يَأْتُونَ إِلَى المَدْرَسَةِ مُتْعَبِينَ.', modelEn: 'I agree: most classmates stay up on screens, then come to school exhausted.' },
        { ex: 'وَالطَّعَامُ السَّرِيعُ؟', task: 'Balance: advantages and risks.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، هُوَ سَرِيعٌ وَرَخِيصٌ، وَمِنْ نَاحِيَةٍ أُخْرَى، فِيهِ دُهُونٌ وَسُكَّرٌ كَثِيرٌ، مِمَّا يُسَبِّبُ السُّمْنَةَ وَأَمْرَاضَ القَلْبِ.', modelEn: 'It’s quick and cheap, but full of fat and sugar, which causes obesity and heart disease.' },
        { ex: 'هَلْ غَيَّرْتَ أَنْتَ شَيْئًا فِي حَيَاتِكَ؟', task: 'Narrate a change with a result.', help: 'نَعَمْ، فِي … قَرَّرْتُ أَنْ … فَـ…', model: 'نَعَمْ، فِي بِدَايَةِ السَّنَةِ قَرَّرْتُ أَنْ أَمْشِيَ إِلَى المَدْرَسَةِ بَدَلًا مِنَ الحَافِلَةِ، فَصِرْتُ أَنْشَطَ، وَتَحَسَّنَ نَوْمِي.', modelEn: 'At the start of the year I decided to walk to school instead of taking the bus — I became more active and slept better.' },
        { ex: 'لٰكِنَّ الطُّلَّابَ لَيْسَ عِنْدَهُمْ وَقْتٌ!', task: 'Concede and propose.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ … ؛ لِذٰلِكَ أَقْتَرِحُ أَنْ …', model: 'صَحِيحٌ أَنَّ الوَاجِبَاتِ كَثِيرَةٌ، غَيْرَ أَنَّ الصِّحَّةَ أَسَاسُ النَّجَاحِ؛ لِذٰلِكَ أَقْتَرِحُ أَنْ تُخَصِّصَ المَدَارِسُ سَاعَةً يَوْمِيَّةً لِلرِّيَاضَةِ.', modelEn: 'Homework is heavy, but health is the basis of success — so schools should give a daily hour to sport.' },
        { unexpected: true, ex: 'لَوْ كُنْتَ وَزِيرَ الصِّحَّةِ، مَاذَا تَفْعَلُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ كُنْتُ …، لَـ…', model: 'لَوْ كُنْتُ وَزِيرَ الصِّحَّةِ، لَمَنَعْتُ إِعْلَانَاتِ الطَّعَامِ السَّرِيعِ قُرْبَ المَدَارِسِ، وَلَجَعَلْتُ الفَوَاكِهَ مَجَّانِيَّةً فِي المَقَاصِفِ.', modelEn: 'I’d ban fast-food adverts near schools and make fruit free in canteens.' },
      ],
      girl: 'رَأْيُكِ · غَيَّرْتِ · حَيَاتِكِ · كُنْتِ وَزِيرَةَ الصِّحَّةِ · تَفْعَلِينَ · صِرْتُ أَنْشَطَ (same)',
      notes: 'Stretch: reported speech with inna, wa-d-dalīlu anna, a balanced view with mimmā yusabbibu, a past narrative with badalan min + fa-ṣirtu, a concession + aqtariḥu an, law … la- ×2. EXAM TIP: Stretch answers should show range — vary your structures across the five tasks.',
      modelFoot: 'Stretch: all of Topic A in one card — sleep, food, exercise, a personal change, a proposal and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'يَوْمِي وَطَعَامِي', aim: 'one full sentence per question',
      qs: [
        { q: 'مَتَى تَسْتَيْقِظُ؟', en: 'When do you wake up?', start: 'أَسْتَيْقِظُ فِي …', model: 'أَسْتَيْقِظُ فِي السَّاعَةِ السَّابِعَةِ.', modelEn: 'At seven.' },
        { q: 'مَا وَجْبَتُكَ المُفَضَّلَةُ؟', en: 'What is your favourite meal?', start: 'وَجْبَتِي المُفَضَّلَةُ …', model: 'وَجْبَتِيَ المُفَضَّلَةُ العَشَاءُ، لِأَنَّنَا نَأْكُلُ مَعًا.', modelEn: 'Dinner — we eat together.' },
        { q: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟', en: 'How do you get to school?', start: 'أَذْهَبُ …', model: 'أَذْهَبُ مَشْيًا عَلَى الأَقْدَامِ.', modelEn: 'On foot.' },
        { q: 'هَلْ تُمَارِسُ الرِّيَاضَةَ؟', en: 'Do you do sport?', start: 'نَعَمْ، أَلْعَبُ … / …', model: 'نَعَمْ، أَلْعَبُ كُرَةَ القَدَمِ يَوْمَ السَّبْتِ.', modelEn: 'Yes, football on Saturdays.' },
        { q: 'مَاذَا تَفْعَلُ عِنْدَمَا تَكُونُ مَرِيضًا؟', en: 'What do you do when you’re ill?', start: 'أَبْقَى … وَأَشْرَبُ …', model: 'أَبْقَى فِي السَّرِيرِ، وَأَشْرَبُ مَاءً كَثِيرًا.', modelEn: 'I stay in bed and drink lots of water.' },
      ],
      foot: 'Core: one full sentence for every question — every Topic A theme in five questions. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a time or a reason = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'عَادَاتِي الصِّحِّيَّةُ', aim: 'two or three sentences, with frequency, a reason and two time frames',
      qs: [
        { q: 'صِفْ يَوْمَ السَّبْتِ عِنْدَكَ.', en: 'Describe your Saturday.', start: 'أَوَّلًا … ثُمَّ … وَفِي المَسَاءِ …', model: 'أَوَّلًا أَنَامُ حَتَّى التَّاسِعَةِ، ثُمَّ أَلْعَبُ كُرَةَ القَدَمِ مَعَ أَصْدِقَائِي، وَفِي المَسَاءِ نَزُورُ جَدَّتِي.', modelEn: 'I sleep till nine, play football with friends, and visit grandma in the evening.' },
        { q: 'هَلْ طَعَامُكَ صِحِّيٌّ؟', en: 'Is your diet healthy?', start: 'غَالِبًا … لٰكِنِّي أَحْيَانًا …', model: 'غَالِبًا نَعَمْ، لِأَنَّ أُمِّي تَطْبُخُ فِي البَيْتِ، لٰكِنِّي أَحْيَانًا آكُلُ البِيتْزَا مَعَ أَصْدِقَائِي.', modelEn: 'Mostly — mum cooks at home — but I sometimes eat pizza with friends.' },
        { q: 'حَدِّثْنِي عَنْ آخِرِ مَرَّةٍ أَكَلْتَ فِيهَا فِي مَطْعَمٍ.', en: 'Tell me about the last time you ate out.', start: 'ذَهَبْتُ … ؛ أَكَلْتُ … وَكَانَ …', model: 'ذَهَبْتُ إِلَى مَطْعَمٍ لُبْنَانِيٍّ فِي عِيدِ مِيلَادِ أُمِّي؛ أَكَلْتُ المَشَاوِيَ، وَكَانَ الطَّعَامُ لَذِيذًا لٰكِنَّهُ غَالٍ.', modelEn: 'A Lebanese restaurant on mum’s birthday: grills — delicious but expensive.' },
        { q: 'كَيْفَ كَانَتْ عَادَاتُكَ عِنْدَمَا كُنْتَ صَغِيرًا؟', en: 'What were your habits like when you were little?', start: 'كُنْتُ … أَمَّا الآنَ فَـ…', model: 'كُنْتُ آكُلُ الحَلَوِيَّاتِ كُلَّ يَوْمٍ، أَمَّا الآنَ فَآكُلُهَا فِي نِهَايَةِ الأُسْبُوعِ فَقَطْ.', modelEn: 'Sweets every day; now only at weekends.' },
        { q: 'مَاذَا سَتُغَيِّرُ فِي حَيَاتِكَ لِتَكُونَ أَكْثَرَ صِحَّةً؟', en: 'What will you change to be healthier?', start: 'سَـ… لِأَنَّ …', model: 'سَأَنَامُ مُبَكِّرًا، وَسَأَتْرُكُ الهَاتِفَ خَارِجَ غُرْفَتِي، لِأَنَّ النَّوْمَ الجَيِّدَ يُسَاعِدُنِي فِي الامْتِحَانَاتِ.', modelEn: 'I’ll sleep earlier and leave my phone outside my room — good sleep helps in exams.' },
      ],
      foot: 'Develop: two or three sentences — frequency, a reason and a past or future detail.',
      modelFoot: 'Frequency + reason + two time frames = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الصِّحَّةُ وَالمُجْتَمَعُ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلِ الشَّبَابُ اليَوْمَ أَقَلُّ صِحَّةً مِنْ جِيلِ آبَائِهِمْ؟', en: 'Are young people less healthy than their parents’ generation?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهُمْ يَجْلِسُونَ أَكْثَرَ أَمَامَ الشَّاشَاتِ، غَيْرَ أَنَّهُمْ يَعْرِفُونَ عَنِ التَّغْذِيَةِ أَكْثَرَ مِنْ أَيِّ جِيلٍ سَابِقٍ.', modelEn: 'They sit more in front of screens, yet know more about nutrition than any previous generation.' },
        { q: 'مَنِ المَسْؤُولُ عَنْ صِحَّةِ الأَطْفَالِ؟', en: 'Who is responsible for children’s health?', start: 'أَرَى أَنَّ المَسْؤُولِيَّةَ … ؛ فَالأُسْرَةُ … وَالمَدْرَسَةُ …', model: 'أَرَى أَنَّ المَسْؤُولِيَّةَ مُشْتَرَكَةٌ؛ فَالأُسْرَةُ تَطْبُخُ، وَالمَدْرَسَةُ تُعَلِّمُ، وَالحُكُومَةُ تَمْنَعُ الإِعْلَانَاتِ المُضَلِّلَةَ.', modelEn: 'Shared: families cook, schools teach, and government bans misleading adverts.' },
        { q: 'هَلْ يَجِبُ أَنْ تَكُونَ الوَجَبَاتُ المَدْرَسِيَّةُ مَجَّانِيَّةً؟', en: 'Should school meals be free?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، تُكَلِّفُ الدَّوْلَةَ كَثِيرًا، وَمِنْ نَاحِيَةٍ أُخْرَى، الطِّفْلُ الجَائِعُ لَا يَتَعَلَّمُ؛ لِذٰلِكَ أُؤَيِّدُهَا لِلْجَمِيعِ.', modelEn: 'They cost the state a lot, but a hungry child can’t learn — so I support them for all.' },
        { q: 'كَيْفَ أَثَّرَتِ التِّكْنُولُوجْيَا عَلَى صِحَّتِنَا؟', en: 'How has technology affected our health?', start: 'كَانَ النَّاسُ … أَمَّا اليَوْمَ فَـ… مِمَّا …', model: 'كَانَ النَّاسُ يَمْشُونَ أَكْثَرَ، أَمَّا اليَوْمَ فَنَطْلُبُ كُلَّ شَيْءٍ بِالهَاتِفِ، مِمَّا يُقَلِّلُ حَرَكَتَنَا؛ وَمَعَ ذٰلِكَ تُسَاعِدُنَا التَّطْبِيقَاتُ عَلَى عَدِّ خُطُوَاتِنَا.', modelEn: 'People walked more; now we order everything by phone, reducing movement — though apps help us count our steps.' },
        { q: 'لَوْ فَتَحْتَ مَطْعَمًا، مَاذَا تُقَدِّمُ فِيهِ؟', en: 'If you opened a restaurant, what would you serve?', start: 'لَوْ فَتَحْتُ مَطْعَمًا، لَـ…', model: 'لَوْ فَتَحْتُ مَطْعَمًا، لَقَدَّمْتُ أَطْبَاقًا عَرَبِيَّةً صِحِّيَّةً، كَالعَدَسِ وَالسَّلَطَاتِ، وَلَجَعَلْتُ الأَسْعَارَ مُنَاسِبَةً لِلطُّلَّابِ.', modelEn: 'Healthy Arabic dishes like lentils and salads, at student-friendly prices.' },
      ],
      foot: 'Stretch: a concession, shared responsibility, a balanced view with li-dhālika, kāna … ammā al-yawma fa- with mimmā, and law … la-.',
      modelFoot: 'Stretch: comparatives, mimmā, wa-maʿa dhālika and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I answered every role-play task in a full sentence.' },
    { route: 'core', text: 'I used times and frequency words accurately.' },
    { route: 'develop', text: 'I gave a reason and used two time frames.' },
    { route: 'develop', text: 'I used an imperative or yajibu an for advice.' },
    { route: 'stretch', text: 'I gave a balanced view with a concession and law … la-.' },
  ],
};
speak.words[9] = w(10, 'أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ', 'I go to school by bus', [['on foot', 'مَشْيًا عَلَى الأَقْدَامِ'], ['it takes', 'تَسْتَغْرِقُ الرِّحْلَةُ']], { tag: 'A · L09' });
speak.words[10] = w(11, 'كُنْتُ … أَمَّا الآنَ فَأَنَامُ …', 'I used to … but now I sleep …', [['I will', 'سَوْفَ'], ['I started', 'بَدَأْتُ']], { tag: 'time frames' });
speak.words[11] = w(12, 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', 'it is true that … but …', [['if … would', 'لَوْ كُنْتُ طَبِيبًا لَنَصَحْتُ'], ['which (result)', 'مِمَّا']], { tag: 'top band' });
speak.RP[0].tasks[4].help = 'لَا، آكُلُ فِي المَطْعَمِ مَرَّةً فِي …';
speak.RP[2].tasks[2].help = 'كُنْتُ … أَمَّا الآنَ فَأَنَامُ …';
speak.RP[3].tasks[2].help = 'نَعَمْ، فِي … قَرَّرْتُ أَنْ … فَصِرْتُ …';
speak.RP[3].tasks[4].help = 'لَوْ كُنْتُ …، لَمَنَعْتُ …';
speak.CONV[1].qs[3].start = 'كُنْتُ … أَمَّا الآنَ فَآكُلُهَا …';
speak.CONV[1].qs[4].start = 'سَأَنَامُ … لِأَنَّ …';
speak.CONV[2].qs[3].start = 'كَانَ النَّاسُ … أَمَّا اليَوْمَ فَنَطْلُبُ … مِمَّا …';
speak.CONV[2].qs[4].start = 'لَوْ فَتَحْتُ مَطْعَمًا، لَقَدَّمْتُ …';

const Q2_CORE = `مَرْحَبًا يَا مُصْطَفَى،
كَيْفَ حَالُكَ؟ أُرِيدُ أَنْ أُخْبِرَكَ عَنْ يَوْمِي فِي المَدْرَسَةِ هٰذِهِ السَّنَةَ. أَسْتَيْقِظُ فِي السَّادِسَةِ وَالنِّصْفِ، ثُمَّ أُفْطِرُ البَيْضَ وَالخُبْزَ. أَذْهَبُ إِلَى المَدْرَسَةِ مَشْيًا عَلَى الأَقْدَامِ، وَتَسْتَغْرِقُ الرِّحْلَةُ رُبْعَ سَاعَةٍ. فِي الاسْتِرَاحَةِ آكُلُ الفَوَاكِهَ دَائِمًا، وَلَا أَشْرَبُ المَشْرُوبَاتِ الغَازِيَّةَ أَبَدًا. كُنْتُ أَنَامُ مُتَأَخِّرًا، أَمَّا الآنَ فَأَنَامُ فِي العَاشِرَةِ، لِأَنَّ الامْتِحَانَاتِ قَرِيبَةٌ. أَظُنُّ أَنَّ رُوتِينِي صِحِّيٌّ، وَأَنَا أَقَلُّ تَعَبًا. فِي الصَّيْفِ سَأَلْعَبُ التِّنِسَ كُلَّ يَوْمٍ. وَأَنْتَ، مَتَى تَنَامُ؟
مَعَ السَّلَامَةِ،
زَكَرِيَّا`;
const Q2_FULL = `عَزِيزِي مُصْطَفَى،
قَرَّرْتُ هٰذِهِ السَّنَةَ أَنْ أُغَيِّرَ رُوتِينِي اسْتِعْدَادًا لِلِامْتِحَانَاتِ، وَأُرِيدُ أَنْ أُخْبِرَكَ بِالنَّتِيجَةِ. صِرْتُ أَسْتَيْقِظُ فِي السَّادِسَةِ وَالنِّصْفِ، فَأُصَلِّي وَأُفْطِرُ فُطُورًا حَقِيقِيًّا بَدَلًا مِنْ قِطْعَةِ بَسْكَوِيتٍ أَمَامَ الشَّاشَةِ. ثُمَّ أَمْشِي إِلَى المَدْرَسَةِ رُبْعَ سَاعَةٍ، مِمَّا يُنْعِشُنِي قَبْلَ الحِصَّةِ الأُولَى. وَفِي الاسْتِرَاحَةِ آكُلُ الفَوَاكِهَ دَائِمًا، أَمَّا المَشْرُوبَاتُ الغَازِيَّةُ فَقَدْ تَوَقَّفْتُ عَنْهَا تَمَامًا. صَحِيحٌ أَنَّنِي أَشْتَاقُ إِلَى السَّهَرِ أَحْيَانًا، غَيْرَ أَنَّ تَرْكِيزِي فِي الدُّرُوسِ تَحَسَّنَ كَثِيرًا، وَصِرْتُ أَقَلَّ تَعَبًا. وَإِذَا اسْتَمْرَرْتُ هٰكَذَا، فَسَأَدْخُلُ الامْتِحَانَاتِ بِثِقَةٍ. أَخْبِرْنِي: كَيْفَ تُنَظِّمُ يَوْمَكَ أَنْتَ قَبْلَ الامْتِحَانَاتِ؟
مَعَ تَحِيَّاتِي،
زَكَرِيَّا`;
const Q3A_CORE = `اسْمِي زَكَرِيَّا، وَأَنَا فِي الصَّفِّ الحَادِي عَشَرَ. أُحِبُّ أَنْ أَعِيشَ حَيَاةً صِحِّيَّةً، لِأَنَّ الصِّحَّةَ مُهِمَّةٌ جِدًّا لِلدِّرَاسَةِ.
فِي الصَّبَاحِ أَسْتَيْقِظُ فِي السَّادِسَةِ وَالنِّصْفِ، وَأُفْطِرُ البَيْضَ وَالخُبْزَ وَالحَلِيبَ مَعَ أُسْرَتِي. فِي المَدْرَسَةِ آكُلُ الفَوَاكِهَ دَائِمًا، وَأَشْرَبُ المَاءَ كَثِيرًا، لِأَنَّهُ مُفِيدٌ لِلْجِسْمِ وَالعَقْلِ. فِي المَسَاءِ تَطْبُخُ أُمِّي العَشَاءَ، وَنَأْكُلُ مَعًا فِي السَّابِعَةِ. أُفَضِّلُ الدَّجَاجَ وَالأَرُزَّ، لٰكِنِّي لَا أُحِبُّ السَّمَكَ أَبَدًا.
أَلْعَبُ كُرَةَ السَّلَّةِ مَرَّتَيْنِ فِي الأُسْبُوعِ، وَأَمْشِي إِلَى المَدْرَسَةِ كُلَّ يَوْمٍ، وَتَسْتَغْرِقُ الرِّحْلَةُ رُبْعَ سَاعَةٍ. فِي الشَّهْرِ المَاضِي كُنْتُ مَرِيضًا؛ كَانَ يُؤْلِمُنِي حَلْقِي، فَذَهَبْتُ إِلَى الصَّيْدَلِيَّةِ، وَأَخَذْتُ دَوَاءً، وَبَقِيتُ فِي البَيْتِ يَوْمَيْنِ، ثُمَّ رَجَعْتُ إِلَى المَدْرَسَةِ.
فِي الصَّغَرِ كُنْتُ آكُلُ الحَلَوِيَّاتِ كَثِيرًا، أَمَّا الآنَ فَآكُلُهَا قَلِيلًا. فِي المُسْتَقْبَلِ سَأَنَامُ مُبَكِّرًا أَكْثَرَ، لِأَنَّ النَّوْمَ يُسَاعِدُنِي عَلَى التَّرْكِيزِ.`;
const Q3A_FULL = `لَمْ أَكُنْ أُفَكِّرُ فِي صِحَّتِي كَثِيرًا حَتَّى جَاءَ يَوْمٌ نِمْتُ فِيهِ فِي حِصَّةِ الرِّيَاضِيَّاتِ! يَوْمَهَا سَأَلَنِي المُعَلِّمُ بِلُطْفٍ وَهُوَ يَبْتَسِمُ: "مَتَى نِمْتَ أَمْسِ؟"، فَخَجِلْتُ مِنَ الجَوَابِ: فِي الثَّانِيَةِ بَعْدَ مُنْتَصَفِ اللَّيْلِ، بَعْدَ سَاعَاتٍ مِنَ الفِيدْيُوهَاتِ.
كُنْتُ آنَذَاكَ أَسْهَرُ عَلَى الهَاتِفِ، وَأُهْمِلُ الفُطُورَ، وَأَشْتَرِي الطَّعَامَ السَّرِيعَ فِي طَرِيقِ العَوْدَةِ. أَمَّا اليَوْمَ، فَأَنَامُ فِي العَاشِرَةِ، وَأَسْتَيْقِظُ نَشِيطًا، وَأَمْشِي إِلَى المَدْرَسَةِ رُبْعَ سَاعَةٍ بَدَلًا مِنْ أَنْ يُوصِلَنِي أَبِي بِالسَّيَّارَةِ، وَآكُلُ الفَوَاكِهَ فِي الاسْتِرَاحَةِ.
وَلَمْ يَكُنِ التَّغْيِيرُ سَهْلًا؛ فَفِي الأُسْبُوعِ الأَوَّلِ كُنْتُ أَشْعُرُ بِالمَلَلِ دُونَ الهَاتِفِ، وَأَشْتَاقُ إِلَى البَطَاطَا المَقْلِيَّةِ وَالمَشْرُوبَاتِ الغَازِيَّةِ. غَيْرَ أَنَّ النَّتِيجَةَ ظَهَرَتْ بِسُرْعَةٍ: تَحَسَّنَ تَرْكِيزِي، وَارْتَفَعَتْ دَرَجَاتِي، وَقَلَّتْ نَزَلَاتُ البَرْدِ الَّتِي كَانَتْ تُصِيبُنِي كُلَّ شَهْرٍ.
لِذٰلِكَ أَرَى أَنَّ الصِّحَّةَ لَيْسَتْ رِيَاضَةً قَاسِيَةً أَوْ حِمْيَةً صَعْبَةً، بَلْ عَادَاتٌ صَغِيرَةٌ نُكَرِّرُهَا كُلَّ يَوْمٍ حَتَّى تُصْبِحَ جُزْءًا مِنَّا. وَلَوْ رَجَعَ بِيَ الزَّمَنُ، لَبَدَأْتُ هٰذِهِ العَادَاتِ قَبْلَ سَنَوَاتٍ.`;
const Q3B_FULL = `يَحْمِلُ أَغْلَبُ المُرَاهِقِينَ اليَوْمَ هَاتِفًا يَعْرِفُ عَدَدَ خُطُوَاتِهِمْ وَسَاعَاتِ نَوْمِهِمْ، وَمَعَ ذٰلِكَ يَقُولُ الأَطِبَّاءُ إِنَّهُمْ أَقَلُّ حَرَكَةً وَأَكْثَرُ تَعَبًا مِنْ آبَائِهِمْ. فَهَلْ أَصْبَحَ الشَّبَابُ حَقًّا أَقَلَّ صِحَّةً مِنَ الأَجْيَالِ السَّابِقَةِ؟
مِنْ نَاحِيَةٍ، يَقْضِي كَثِيرٌ مِنَّا كُلَّ يَوْمٍ سَاعَاتٍ طَوِيلَةً أَمَامَ الشَّاشَاتِ، وَيَأْكُلُونَ الطَّعَامَ السَّرِيعَ لِأَنَّهُ رَخِيصٌ وَسَهْلٌ، مِمَّا يُؤَدِّي إِلَى السُّمْنَةِ وَقِلَّةِ النَّوْمِ وَضَعْفِ التَّرْكِيزِ. وَمِنْ نَاحِيَةٍ أُخْرَى، يَعْرِفُ جِيلُنَا عَنِ التَّغْذِيَةِ وَالصِّحَّةِ النَّفْسِيَّةِ أَكْثَرَ مِنْ أَيِّ جِيلٍ سَابِقٍ، وَيَهْتَمُّ كَثِيرُونَ بِالرِّيَاضَةِ وَالأَكْلِ النَّبَاتِيِّ وَالتَّأَمُّلِ.
وَقَدْ رَأَيْتُ الوَجْهَيْنِ فِي صَفِّي؛ فَبَعْضُ زُمَلَائِي لَا يَتَحَرَّكُونَ إِلَّا بَيْنَ السَّرِيرِ وَالحَاسُوبِ، بَيْنَمَا أَسَّسَ آخَرُونَ نَادِيًا لِلْجَرْيِ يَلْتَقِي كُلَّ صَبَاحٍ قَبْلَ الدُّرُوسِ، وَيَضُمُّ اليَوْمَ ثَلَاثِينَ طَالِبًا.
لِذٰلِكَ لَا أَظُنُّ أَنَّ المُشْكِلَةَ فِي الجِيلِ نَفْسِهِ، بَلْ فِي البِيئَةِ الَّتِي يَعِيشُ فِيهَا وَالعَادَاتِ الَّتِي يَتَعَلَّمُهَا. فَإِذَا وَفَّرَتِ المَدَارِسُ وَجَبَاتٍ صِحِّيَّةً وَوَقْتًا لِلرِّيَاضَةِ، فَسَيَخْتَارُ الشَّبَابُ الطَّرِيقَ الأَصَحَّ دُونَ أَنْ يُجْبِرَهُمْ أَحَدٌ.`;

const write = {
  ...base,
  focus: 'Final-revision Paper 4 practice on Topic A: fill in a sports-centre membership form, write an email about your daily routine and healthy habits, and write an extended piece about your healthy life or about whether young people are less healthy than previous generations. Exam skills: tick off every bullet, count roughly, and check verb endings at the end.',
  lift: [
    { ar: 'آكُلُ الفَوَاكِهَ دَائِمًا، وَلَا أَشْرَبُ المَشْرُوبَاتِ الغَازِيَّةَ أَبَدًا', en: 'I always eat fruit, and never drink fizzy drinks' },
    { ar: 'كُنْتُ أَنَامُ مُتَأَخِّرًا، أَمَّا الآنَ فَأَنَامُ فِي العَاشِرَةِ', en: 'I used to sleep late; now I sleep at ten' },
    { ar: 'يُؤْلِمُنِي حَلْقِي مُنْذُ يَوْمَيْنِ', en: 'my throat has hurt for two days' },
  ],
  checkTip: 'EXAM CHECK (2 min): every bullet answered? greeting and closing? Then check Topic A accuracy — times (fī as-sādisati wa-n-niṣf), frequency (lā … abadan needs a negative verb), yuʾlimunī + body part, mundhu + time, and kuntu + present for past habits.',
  FORM: {
    title: 'Sports-centre membership form', ar: 'اسْتِمَارَةُ الاشْتِرَاكِ فِي النَّادِي الرِّيَاضِيِّ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'زَكَرِيَّا حُسَيْنٌ', modelEn: 'Zakariya Hussain' },
      { core: true, ar: 'العُمْرُ', en: 'Age', model: 'سِتَّ عَشْرَةَ سَنَةً', modelEn: 'sixteen' },
      { core: true, ar: 'الرِّيَاضَةُ المُفَضَّلَةُ', en: 'Favourite sport', model: 'كُرَةُ السَّلَّةِ', modelEn: 'basketball' },
      { core: true, ar: 'الأَيَّامُ المُنَاسِبَةُ', en: 'Suitable days', model: 'الثُّلَاثَاءُ وَالسَّبْتُ', modelEn: 'Tuesday and Saturday' },
      { core: true, ar: 'الوَقْتُ المُنَاسِبُ', en: 'Suitable time', model: 'السَّاعَةُ الخَامِسَةُ مَسَاءً', modelEn: '5 p.m.' },
      { core: true, ar: 'مُشْكِلَةٌ صِحِّيَّةٌ (إِنْ وُجِدَتْ)', en: 'A health problem (if any)', model: 'لَا تُوجَدُ', modelEn: 'none' },
      { ar: 'وَجْبَتُكَ قَبْلَ الرِّيَاضَةِ', en: 'Your meal before sport', model: 'مَوْزٌ وَمَاءٌ', modelEn: 'a banana and water' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُرِيدُ الاشْتِرَاكَ؟', en: 'ONE sentence: why you want to join', model: 'أُرِيدُ أَنْ أَكُونَ أَكْثَرَ نَشَاطًا، لِأَنِّي أَجْلِسُ كَثِيرًا أَمَامَ الحَاسُوبِ.', modelEn: 'I want to be more active, because I sit a lot at the computer.' },
    ],
    foot: 'One word or a short phrase for each box — box 5 is a time; the last box is a full sentence with a reason. EXAM TIP: never leave a box empty — a short answer scores, a blank does not.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 6: lā tūjadu is a full, correct answer. Box 8: akthar nashāṭan (akthar + accusative).',
  },
  Q2: {
    short: 'an email about my routine and healthy habits', title: 'Question 2: my new routine', ar: 'رُوتِينِي الجَدِيدُ',
    task: 'Write an email in Arabic to a friend of about 80–90 words. You must include: • your morning routine (times) • how you get to school and what you eat during the day • a change you have made and why • your opinion and your plans for the holidays, and a question for your friend.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Times and two frequency words.', 'Past (or kuntu), present AND future.', 'About 80–90 words.'],
    phrases: [['أَسْتَيْقِظُ فِي … ثُمَّ …', 'I wake up at … then …'], ['أَذْهَبُ إِلَى المَدْرَسَةِ … وَتَسْتَغْرِقُ الرِّحْلَةُ …', 'I go to school … and the journey takes …'], ['كُنْتُ … أَمَّا الآنَ فَأَنَامُ …', 'I used to … now I sleep …'], ['فِي الصَّيْفِ سَأَلْعَبُ …', 'in the summer I will play …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنْ رُوتِينِكَ اليَوْمِيِّ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about your daily routine (80–90 words).'],
      ['1', 'مَتَى تَسْتَيْقِظُ؟ وَمَاذَا تَفْعَلُ فِي الصَّبَاحِ؟', 'When you wake up; your morning'],
      ['2', 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟ وَمَاذَا تَأْكُلُ؟', 'How you get to school; what you eat'],
      ['3', 'مَاذَا غَيَّرْتَ فِي رُوتِينِكَ؟ وَلِمَاذَا؟', 'What you changed, and why'],
      ['4', 'مَا رَأْيُكَ؟ وَمَا خِطَطُكَ لِلْعُطْلَةِ؟ وَاسْأَلْ صَدِيقَكَ سُؤَالًا.', 'Opinion; holiday plans; a question'],
    ],
    qwords: 'مَتَى (when → a time) · كَيْفَ (how → by bus / on foot) · غَيَّرْتَ (you changed — PAST) · لِمَاذَا (why → لِأَنَّ) · خِطَطُكَ (plans — FUTURE)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', 'Hello …, how are you?'],
      ['1', 'أَسْتَيْقِظُ فِي ______ ، ثُمَّ ______ .', 'I wake up at …, then …'],
      ['2', 'أَذْهَبُ إِلَى المَدْرَسَةِ ______ . آكُلُ ______ دَائِمًا.', 'I go to school … I always eat …'],
      ['3', 'كُنْتُ ______ ، أَمَّا الآنَ فَأَنَامُ ______ ، لِأَنَّ ______ .', 'I used to …; now I sleep …, because …'],
      ['4', 'أَظُنُّ أَنَّ ______ . فِي الصَّيْفِ سَأَلْعَبُ ______ .', 'I think … In summer I’ll play …'],
      ['end', 'وَأَنْتَ، ______ ؟ مَعَ السَّلَامَةِ.', 'And you, …? Goodbye.'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Mustafa, how are you? I want to tell you about my school day this year. I wake up at 6.30, then have eggs and bread for breakfast. I walk to school, and the journey takes a quarter of an hour. At break I always eat fruit, and I never drink fizzy drinks. I used to sleep late; now I sleep at ten, because exams are near. I think my routine is healthy, and I’m less tired. In the summer I’ll play tennis every day. And you, when do you go to sleep? Goodbye, Zakariya.”',
      find: ['فِي السَّادِسَةِ وَالنِّصْفِ', 'دَائِمًا … أَبَدًا', 'كُنْتُ أَنَامُ … أَمَّا الآنَ', 'سَأَلْعَبُ التِّنِسَ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Mustafa, this year I decided to change my routine to prepare for the exams, and I want to tell you the result. I now wake at 6.30, pray and eat a proper breakfast instead of a biscuit in front of the screen. Then I walk to school for a quarter of an hour, which refreshes me before first lesson. At break I always eat fruit; as for fizzy drinks, I’ve stopped them completely. I sometimes miss staying up late, but my concentration in lessons has improved a lot, and I’m less tired. If I keep this up, I’ll go into the exams with confidence. Tell me: how do you organise your day before exams? Best wishes, Zakariya.”',
      find: ['صِرْتُ أَسْتَيْقِظُ', 'بَدَلًا مِنْ', 'مِمَّا يُنْعِشُنِي', 'إِذَا اسْتَمْرَرْتُ … فَسَأَدْخُلُ'],
    },
  },
  Q3: {
    a: { title: 'حَيَاتِي الصِّحِّيَّةُ: الطَّعَامُ وَالرِّيَاضَةُ وَالنَّوْمُ', en: 'My healthy life: food, exercise and sleep', bullets: 'رُوتِينُكَ اليَوْمِيُّ · طَعَامُكَ وَوَجَبَاتُكَ · الرِّيَاضَةُ وَمَرَّةً كُنْتَ فِيهَا مَرِيضًا · كَيْفَ تَغَيَّرْتَ وَخُطَطُكَ', bulletsEn: 'Your daily routine · your food and meals · exercise and a time you were ill · how you have changed and your plans' },
    b: { title: 'هَلْ أَصْبَحَ الشَّبَابُ أَقَلَّ صِحَّةً مِنَ الأَجْيَالِ السَّابِقَةِ؟', en: 'Are young people less healthy than previous generations?', bullets: 'المَوْضُوعُ · السَّلْبِيَّاتُ وَالإِيجَابِيَّاتُ · مِثَالٌ مِنْ مَدْرَسَتِكَ · رَأْيُكَ', bulletsEn: 'The issue · negatives and positives · an example from your school · your opinion' },
    plan: [
      'Routine — asmī …; astayqiẓu fī … wa-ufṭiru …; fī al-madrasati ākulu … dāʾiman',
      'Food — fī al-masāʾi taṭbukhu ummī …; ufaḍḍilu … lākinnī lā uḥibbu …',
      'Exercise + illness — alʿabu … marratayni fī al-usbūʿ; fī ash-shahri al-māḍī kuntu marīḍan …, fa-dhahabtu …',
      'Change + future — kuntu … ammā al-āna fa- …; sa- … li-anna …; Stretch: laysat … bal, law … la-.',
    ],
    frames: [
      { ar: 'آكُلُ الفَوَاكِهَ دَائِمًا.', en: 'present + frequency: I always eat fruit.' },
      { ar: 'كَانَ يُؤْلِمُنِي حَلْقِي، فَذَهَبْتُ إِلَى الصَّيْدَلِيَّةِ.', en: 'past: my throat hurt, so I went to the chemist.' },
      { ar: 'سَأَنَامُ مُبَكِّرًا أَكْثَرَ.', en: 'future: I will sleep earlier.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Year 11; health matters for study → up at 6.30, eggs, bread and milk; fruit and water at school; dinner together at seven — chicken and rice, but not fish → basketball twice a week and walking to school; last month my throat hurt, so I went to the pharmacy and stayed home two days → I used to eat many sweets, now few; I’ll sleep earlier because it helps me focus.', find: ['فِي السَّادِسَةِ وَالنِّصْفِ', 'مَرَّتَيْنِ فِي الأُسْبُوعِ', 'كَانَ يُؤْلِمُنِي', 'كُنْتُ آكُلُ … أَمَّا الآنَ'], notes: 'Core model: all of Topic A in four paragraphs — times and routine (L01), food preferences (L04), frequency (L03), exercise (L06), illness and the pharmacy in the past (L07–L08), past habits vs now and a future plan.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'I hardly thought about my health until the day I fell asleep in maths! The teacher kindly asked when I’d slept — I was ashamed: 2 a.m., after hours of videos → back then I stayed up on my phone, skipped breakfast and bought fast food on the way home; today I sleep at ten, wake up energetic and walk to school instead of being driven, and eat fruit at break → the change wasn’t easy: in week one I was bored without my phone and missed chips and fizzy drinks; but results came fast: better focus, higher marks, fewer monthly colds → health isn’t harsh exercise or a hard diet but small daily habits until they become part of us; “if I could turn back time, I’d have started these habits years ago”.', find: ['لَمْ أَكُنْ … حَتَّى', 'كُنْتُ آنَذَاكَ … أَمَّا اليَوْمَ', 'بَدَلًا مِنْ أَنْ', 'لَوْ رَجَعَ بِيَ الزَّمَنُ، لَبَدَأْتُ'], notes: 'Full-mark model: an anecdote hook with reported speech, lam akun … ḥattā, kuntu + three present verbs vs ammā al-yawma fa-, badalan min an + a passive-like yūṣilanī, lam yakun … sahlan, three past results, laysat … bal and law … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'are teens less healthy?', text: Q3B_FULL, en: 'Most teens carry a phone that counts their steps and sleep, yet doctors say they move less and are more tired than their parents — are young people really less healthy? → many of us spend hours on screens and eat cheap, easy fast food, leading to obesity, poor sleep and weak concentration; yet our generation knows more about nutrition and mental health than any before, and many love sport and plant-based food and meditation → I see both in my class: some move only between bed and computer, while others founded a running club that meets every morning before lessons and now has thirty members → the problem is not the generation but its environment and the habits it learns; “if schools provided healthy meals and time for sport, young people would choose the healthier path without anyone forcing them”.', find: ['وَمَعَ ذٰلِكَ يَقُولُ', 'مِمَّا يُؤَدِّي إِلَى', 'لَا … إِلَّا … بَيْنَمَا', 'إِذَا وَفَّرَتْ … فَسَيَخْتَارُ'], notes: 'Full-mark model for the Stretch title: a paradox hook with reported speech, two comparatives (aqall ḥarakatan, akthar taʿaban), a balanced view with mimmā yuʾaddī ilā, lā … illā + baynamā, lā aẓunnu … bal, a relative clause with fīhā and idhā … fa-sa-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: no empty boxes; a time in box 5.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: times, two frequency words and three time frames.' },
    { route: 'develop', text: 'Q3: four paragraphs covering routine, food, health and the future.' },
    { route: 'stretch', text: 'Q3: laysa … bal, a concession and a conditional; I checked my verb endings.' },
  ],
};

module.exports = { speak, write };
