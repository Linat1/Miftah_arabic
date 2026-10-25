'use strict';
/* Practice Room · D5-L09 · Writing — my leisure life in three time zones. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd5-l09',
  arShort: 'حَيَاتِي التَّرْفِيهِيَّةُ',
  grammar: 'three time zones: past (fī al-ṭufūlati laʿibtu · kuntu alʿabu) → present (ammā al-āna fa-umārisu …) → future (sa-ashtariku · anwī an …); ending with an opinion (aʿtaqidu anna …); connectors (bi-l-iḍāfati ilā dhālika · wa-fī al-khitām); planning, drafting and checking',
  focus: 'Students run their own writing workshop, with speaking first: say the time-zone toolkit, act a past–present–future dialogue, plan each time zone aloud with cards, do a role-play card giving peer feedback on tense variety, rehearse the text aloud for one minute, then build, fix and write an extended text about their leisure life.',
  words1: 'Planning and time zones', words2: 'Connectors and opinion',
  dialogue: {
    title: 'Then, now and next', ar: 'المَاضِي وَالحَاضِرُ وَالمُسْتَقْبَلُ',
    lines: [
      ['A', 'مَاذَا كُنْتَ تَفْعَلُ فِي وَقْتِ فَرَاغِكَ عِنْدَمَا كُنْتَ صَغِيرًا؟', 'What did you use to do in your free time as a child?'],
      ['B', 'فِي الطُّفُولَةِ كُنْتُ أَلْعَبُ بِالمُكَعَّبَاتِ، وَشَاهَدْتُ الرُّسُومَ المُتَحَرِّكَةَ كَثِيرًا.', 'In childhood I used to play with blocks, and I watched lots of cartoons.'],
      ['A', 'وَالآنَ؟', 'And now?'],
      ['B', 'أَمَّا الآنَ فَأُمَارِسُ الكَارَاتِيهِ، وَأَقْرَأُ الرِّوَايَاتِ.', 'As for now, I do karate and read novels.'],
      ['A', 'وَفِي المُسْتَقْبَلِ؟', 'And in the future?'],
      ['B', 'سَأَشْتَرِكُ فِي نَادِي التَّصْوِيرِ، وَأَنْوِي أَنْ أُسَافِرَ لِأُصَوِّرَ الطَّبِيعَةَ. أَعْتَقِدُ أَنَّ الهِوَايَاتِ تُغَيِّرُنَا مَعَ الوَقْتِ.', 'I will join the photography club, and I intend to travel to photograph nature. I think hobbies change us over time.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: YOUR three time zones — the Coach checks every verb’s tense.',
  },
  qTitle: 'Plan aloud — one time zone per card',
  questions: [
    { q: '¶١ مَاذَا كُنْتَ تَفْعَلُ فِي الطُّفُولَةِ؟', en: '¶1 What did you use to do as a child?', start: 'فِي الطُّفُولَةِ كُنْتُ أَلْعَبُ …', more: '… وَمَرَّةً …' },
    { q: '¶١ اذْكُرْ ذِكْرَى خَاصَّةً.', en: '¶1 Mention a special memory.', start: 'أَتَذَكَّرُ يَوْمًا عِنْدَمَا …', more: '…' },
    { q: '¶٢ مَاذَا تَفْعَلُ الآنَ؟', en: '¶2 What do you do now?', start: 'أَمَّا الآنَ فَأُمَارِسُ …', more: '… بِالإِضَافَةِ إِلَى ذٰلِكَ …' },
    { q: '¶٣ مَا خُطَطُكَ لِلْمُسْتَقْبَلِ؟', en: '¶3 Your future plans?', start: 'سَأَشْتَرِكُ فِي … / أَنْوِي أَنْ …', more: '… لِكَيْ …' },
    { q: '¶٤ مَا رَأْيُكَ فِي أَهَمِّيَّةِ الهِوَايَاتِ؟', en: '¶4 Your opinion on hobbies?', start: 'أَعْتَقِدُ أَنَّ …', more: '… وَفِي الخِتَامِ …' },
  ],
  card: {
    title: 'Role-play card — peer feedback on tense variety', ar: 'تَغْذِيَةٌ رَاجِعَةٌ', you: 'the reviewer', them: 'a writer',
    tasks: [
      { ex: 'هَلِ اسْتَخْدَمْتُ أَزْمِنَةً مُتَنَوِّعَةً؟', task: 'Check the three tenses.', plan: 'الأَزْمِنَةُ ← اسْتَخْدَمْتَ المَاضِيَ وَالحَاضِرَ، وَلٰكِنْ …', model: 'اسْتَخْدَمْتَ المَاضِيَ وَالحَاضِرَ، وَلٰكِنْ لَيْسَ عِنْدَكَ مُسْتَقْبَلٌ.', modelEn: 'You used past and present, but you have no future.' },
      { ex: 'كَيْفَ أُضِيفُ المُسْتَقْبَلَ؟', task: 'Suggest a sentence.', plan: 'اقْتِرَاحٌ ← اكْتُبْ: «سَأَشْتَرِكُ فِي …»', model: 'اكْتُبْ مَثَلًا: «فِي الصَّيْفِ القَادِمِ سَأَشْتَرِكُ فِي دَوْرَةِ سِبَاحَةٍ».', modelEn: 'Write for example: “Next summer I will join a swimming course.”' },
      { ex: 'وَهَلْ هُنَاكَ خَطَأٌ؟', task: 'Correct one tense error.', plan: '', model: 'كَتَبْتَ «فِي الطُّفُولَةِ أَلْعَبُ»، وَالصَّوَابُ «كُنْتُ أَلْعَبُ».', modelEn: 'You wrote “in childhood I play”; correct is “I used to play”.' },
      { unexpected: true, ex: 'كَيْفَ أَخْتِمُ النَّصَّ؟', task: 'Advise on the ending.', plan: '', model: 'اخْتِمْ بِرَأْيٍ: «أَعْتَقِدُ أَنَّ الهِوَايَاتِ تُعَلِّمُنَا الصَّبْرَ».', modelEn: 'End with an opinion: “I think hobbies teach us patience.”' },
    ],
    girl: 'to a girl writer: اسْتَخْدَمْتِ · عِنْدَكِ · اكْتُبِي · كَتَبْتِ · اخْتِمِي',
    notes: 'Feedback on tense variety: past · present · future · opinion.',
  },
  talk: {
    title: 'One minute: say your text', ar: 'أَقُولُ نَصِّي',
    text: 'Speak your text aloud for one minute from your plan: past → present → future → opinion. The Coach ticks one verb in each time zone.',
    routes: {
      core: 'Two sentences in each time zone.',
      develop: 'Add كُنْتُ + present (used to) and أَمَّا الآنَ فَ…',
      stretch: 'Add أَنْوِي أَنْ … , a connector and أَعْتَقِدُ أَنَّ …',
    },
  },
  builder: [
    { en: 'As a child I used to draw a lot.', cols: [['فِي الطُّفُولَةِ', 'فِي المُسْتَقْبَلِ'], ['كُنْتُ أَرْسُمُ', 'سَأَرْسُمُ'], ['كَثِيرًا.', 'كَثِيرٌ.']], key: [0, 0, 0], why: 'Used to = كُنْتُ + present.' },
    { en: 'As for now, I play tennis.', cols: [['أَمَّا الآنَ', 'أَمَّا الآنُ'], ['فَأَلْعَبُ', 'أَلْعَبُ'], ['التِّنِسَ.', 'التِّنِسُ.']], key: [0, 0, 0], why: 'أَمَّا … + fa-.' },
    { en: 'I intend to join a club.', cols: [['أَنْوِي', 'نَوَيْتُ'], ['أَنْ أَشْتَرِكَ', 'أَنْ أَشْتَرِكُ'], ['فِي نَادٍ.', 'فِي نَادِي.']], key: [0, 0, 0], why: 'أَنْ + -a; نَادٍ after فِي (indefinite).' },
  ],
  errors: [
    { wrong: 'فِي الطُّفُولَةِ أَلْعَبُ فِي الحَدِيقَةِ.', hint: 'Childhood = the past.', right: 'فِي الطُّفُولَةِ كُنْتُ أَلْعَبُ فِي الحَدِيقَةِ.', why: 'Habit in the past → كُنْتُ + present.' },
    { wrong: 'أَمَّا الآنَ أُمَارِسُ السِّبَاحَةَ.', hint: 'أَمَّا needs its partner.', right: 'أَمَّا الآنَ فَأُمَارِسُ السِّبَاحَةَ.', why: 'أَمَّا … + fa-.' },
    { wrong: 'أَعْتَقِدُ أَنَّ الهِوَايَاتُ مُهِمَّةٌ.', hint: 'After أَنَّ …', right: 'أَعْتَقِدُ أَنَّ الهِوَايَاتِ مُهِمَّةٌ.', why: 'أَنَّ + noun in -a (sound f. pl. → -i).' },
  ],
  task: {
    title: 'My leisure life: then, now and next', ar: 'حَيَاتِي التَّرْفِيهِيَّةُ',
    text: 'Write a text (about 70–90 words) in four short paragraphs about your free time. ¶1 past: what you used to do + one memory. ¶2 present: أَمَّا الآنَ فَ… + two hobbies. ¶3 future: سَأَ… / أَنْوِي أَنْ … ¶4 opinion: أَعْتَقِدُ أَنَّ … Then check every verb’s tense with your buddy.',
    range: [60, 105],
    phrases: [['فِي الطُّفُولَةِ كُنْتُ …', 'in childhood I used to …'], ['أَمَّا الآنَ فَ…', 'as for now, …'], ['سَأَشْتَرِكُ فِي … · أَنْوِي أَنْ …', 'I will join … · I intend to …'], ['أَعْتَقِدُ أَنَّ … · وَفِي الخِتَامِ …', 'I think that … · and in conclusion …']],
    coreFrames: [
      { ar: '¶١ فِي الطُّفُولَةِ كُنْتُ ______ .', en: '¶1 In childhood I used to …' },
      { ar: '¶٢ أَمَّا الآنَ فَ______ .', en: '¶2 As for now, …' },
      { ar: '¶٣ فِي المُسْتَقْبَلِ سَوْفَ ______ .', en: '¶3 In the future I will …' },
      { ar: '¶٤ أَعْتَقِدُ أَنَّ ______ .', en: '¶4 I think that …' },
    ],
    developFrames: [
      { ar: 'أَتَذَكَّرُ يَوْمًا عِنْدَمَا ______ .', en: 'I remember a day when …' },
      { ar: 'بِالإِضَافَةِ إِلَى ذٰلِكَ، أَنْوِي أَنْ ______ لِكَيْ ______ .', en: 'In addition, I intend to … in order to …' },
    ],
    bank: ['فِي الطُّفُولَةِ', 'كُنْتُ أَلْعَبُ', 'أَمَّا الآنَ فَ…', 'فِي المُسْتَقْبَلِ', 'سَأَشْتَرِكُ فِي', 'أَنْوِي أَنْ', 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'أَعْتَقِدُ أَنَّ'],
    model: {
      text: `فِي الطُّفُولَةِ كُنْتُ أَلْعَبُ بِالدَّرَّاجَةِ فِي الشَّارِعِ مَعَ أَوْلَادِ الجِيرَانِ. أَتَذَكَّرُ يَوْمًا عِنْدَمَا سَقَطْتُ وَكَسَرْتُ يَدِي!
أَمَّا الآنَ فَأُمَارِسُ كُرَةَ الطَّائِرَةِ فِي نَادِي المَدْرَسَةِ مَرَّتَيْنِ فِي الأُسْبُوعِ. بِالإِضَافَةِ إِلَى ذٰلِكَ، أَتَعَلَّمُ الخَطَّ العَرَبِيَّ مَعَ أُسْتَاذٍ عَلَى الإِنْتَرْنِت.
فِي الصَّيْفِ القَادِمِ سَأَشْتَرِكُ فِي مُخَيَّمٍ رِيَاضِيٍّ، وَأَنْوِي أَنْ أُشَارِكَ فِي مَعْرِضٍ لِلْخَطِّ.
وَفِي الخِتَامِ، أَعْتَقِدُ أَنَّ الهِوَايَاتِ مُهِمَّةٌ جِدًّا، لِأَنَّهَا تُعَلِّمُنَا الصَّبْرَ وَتُرِيحُنَا مِنْ ضَغْطِ الدِّرَاسَةِ.`,
      en: '“In childhood I used to ride my bike in the street with the neighbours’ children. I remember a day when I fell and broke my hand! As for now, I play volleyball at the school club twice a week. In addition, I am learning Arabic calligraphy with a teacher online. Next summer I will join a sports camp, and I intend to take part in a calligraphy exhibition. In conclusion, I think hobbies are very important, because they teach us patience and relieve the pressure of study.”',
      find: ['كُنْتُ أَلْعَبُ', 'أَمَّا الآنَ فَأُمَارِسُ', 'سَأَشْتَرِكُ فِي', 'أَعْتَقِدُ أَنَّ الهِوَايَاتِ'],
    },
  },
  checkCore: 'write in three time zones with the right tense in each?',
  checkDevelop: 'use كُنْتُ + present, أَمَّا … فَ… and finish with an opinion?',
});
