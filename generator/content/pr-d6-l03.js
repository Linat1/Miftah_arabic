'use strict';
/* Practice Room · D6-L03 · Islamic celebrations — Ramadan and the two Eids. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd6-l03',
  arShort: 'رَمَضَانُ وَالعِيدَانِ',
  grammar: 'the general custom in the present (yaṣūmu al-muslimūna · yatanāwalūna al-suḥūra); what is done with the passive (tuzayyanu al-shawāriʿ · tuwazzaʿu al-ḥalwā · tutabādalu al-tahānī); your own memory in the past (ṣumtu li-awwali marratin · zurnā); a hedge for variety (fī baʿḍi al-buldān · tukhtalifu al-ʿādāt …)',
  focus: 'Students run their own speaking and writing practice about Ramadan and Eid: say the celebration words, act an Eid-morning dialogue, answer question cards, do a role-play card explaining Ramadan to a non-Muslim classmate, give a one-minute talk about Eid in their family, then build, fix and write a piece about Ramadan and Eid in three tenses.',
  words1: 'Ramadan', words2: 'Eid',
  dialogue: {
    title: 'Eid morning', ar: 'صَبَاحُ العِيدِ',
    lines: [
      ['A', 'عِيدٌ مُبَارَكٌ! كَيْفَ تَحْتَفِلُونَ بِالعِيدِ؟', 'Eid Mubarak! How do you celebrate Eid?'],
      ['B', 'نَذْهَبُ إِلَى صَلَاةِ العِيدِ صَبَاحًا، ثُمَّ نَزُورُ الأَقَارِبَ.', 'We go to the Eid prayer in the morning, then visit relatives.'],
      ['A', 'وَمَاذَا يَحْدُثُ فِي البَيْتِ؟', 'And what happens at home?'],
      ['B', 'يُزَيَّنُ البَيْتُ، وَتُوَزَّعُ الحَلْوَى وَالعِيدِيَّةُ عَلَى الأَطْفَالِ.', 'The house is decorated, and sweets and Eid money are handed out to the children.'],
      ['A', 'وَهَلْ تَتَذَكَّرُ أَوَّلَ رَمَضَانَ صُمْتَهُ؟', 'Do you remember the first Ramadan you fasted?'],
      ['B', 'نَعَمْ! صُمْتُ لِأَوَّلِ مَرَّةٍ وَأَنَا فِي التَّاسِعَةِ، وَكَانَ اليَوْمُ طَوِيلًا جِدًّا!', 'Yes! I fasted for the first time when I was nine, and the day was very long!'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: describe YOUR family’s Eid — present for habits, past for a memory.',
  },
  questions: [
    { q: 'مَاذَا يَفْعَلُ المُسْلِمُونَ فِي رَمَضَانَ؟', en: 'What do Muslims do in Ramadan?', start: 'يَصُومُ المُسْلِمُونَ مِنَ الفَجْرِ إِلَى المَغْرِبِ …', more: '… وَيَتَنَاوَلُونَ السَّحُورَ …' },
    { q: 'مَاذَا تَأْكُلُونَ عَلَى الإِفْطَارِ؟', en: 'What do you eat for iftar?', start: 'نُفْطِرُ عَلَى التَّمْرِ وَ…', more: '… ثُمَّ …' },
    { q: 'مَاذَا يُزَيَّنُ فِي العِيدِ؟', en: 'What is decorated at Eid?', start: 'تُزَيَّنُ البُيُوتُ / الشَّوَارِعُ …', more: '… بِ…' },
    { q: 'مَا الفَرْقُ بَيْنَ عِيدِ الفِطْرِ وَعِيدِ الأَضْحَى؟', en: 'Difference between Eid al-Fitr and Eid al-Adha?', start: 'عِيدُ الفِطْرِ بَعْدَ رَمَضَانَ، بَيْنَمَا عِيدُ الأَضْحَى …', more: '…' },
    { q: 'احْكِ عَنْ ذِكْرَى مِنْ رَمَضَانَ.', en: 'Tell a Ramadan memory.', start: 'أَتَذَكَّرُ … عِنْدَمَا …', more: '… وَكَانَ …' },
  ],
  card: {
    title: 'Role-play card — explaining Ramadan to a classmate', ar: 'أَشْرَحُ رَمَضَانَ لِزَمِيلٍ', you: 'a Muslim student', them: 'a curious non-Muslim classmate',
    tasks: [
      { ex: 'لِمَاذَا لَا تَأْكُلُ فِي الغَدَاءِ؟', task: 'Explain fasting.', plan: 'الصِّيَامُ ← أَنَا صَائِمٌ لِأَنَّ … ؛ نَصُومُ مِنْ … إِلَى …', model: 'أَنَا صَائِمٌ، لِأَنَّهُ رَمَضَانُ؛ نَصُومُ مِنَ الفَجْرِ إِلَى المَغْرِبِ.', modelEn: 'I am fasting, because it is Ramadan — we fast from dawn to sunset.' },
      { ex: 'أَلَيْسَ ذٰلِكَ صَعْبًا؟', task: 'Honest answer + benefit.', plan: 'الجَوَابُ ← أَحْيَانًا … وَلٰكِنَّهُ يُعَلِّمُنَا …', model: 'أَحْيَانًا، وَلٰكِنَّهُ يُعَلِّمُنَا الصَّبْرَ وَيُذَكِّرُنَا بِالفُقَرَاءِ.', modelEn: 'Sometimes, but it teaches us patience and reminds us of the poor.' },
      { ex: 'وَمَاذَا يَحْدُثُ فِي آخِرِ الشَّهْرِ؟', task: 'Eid with the passive.', plan: '', model: 'نَحْتَفِلُ بِعِيدِ الفِطْرِ؛ تُزَيَّنُ البُيُوتُ، وَتُتَبَادَلُ التَّهَانِي وَالهَدَايَا.', modelEn: 'We celebrate Eid al-Fitr — homes are decorated and greetings and gifts are exchanged.' },
      { unexpected: true, ex: 'هَلْ أَسْتَطِيعُ أَنْ أُفْطِرَ مَعَكُمْ يَوْمًا؟', task: 'Invite warmly.', plan: '', model: 'طَبْعًا! تَعَالَ يَوْمَ الجُمُعَةِ؛ أُمِّي سَتَطْبُخُ طَعَامًا لَذِيذًا، وَسَتُحِبُّ أَنْ تَتَعَرَّفَ عَلَيْكَ.', modelEn: 'Of course! Come on Friday — my mum will cook something delicious, and she’ll love to meet you.' },
    ],
    girl: 'if you are a girl: أَنَا صَائِمَةٌ; to a girl classmate: تَعَالَيْ · عَلَيْكِ',
    notes: 'General custom → present; what is done → passive; your memory → past.',
  },
  talk: {
    title: 'One minute: Eid in my family', ar: 'العِيدُ فِي عَائِلَتِي',
    text: 'Talk for one minute about Eid or Ramadan in your family: what usually happens, what is done (passive), a memory, and a fair note about variety.',
    routes: {
      core: 'Four present-tense habits.',
      develop: 'Add two passives (تُزَيَّنُ · تُوَزَّعُ) and a past memory.',
      stretch: 'Add a hedge (تَخْتَلِفُ العَادَاتُ … · فِي بَعْضِ البُلْدَانِ) and what Eid means to you.',
    },
  },
  builder: [
    { en: 'Muslims fast from dawn to sunset.', cols: [['يَصُومُ المُسْلِمُونَ', 'يَصُومُونَ المُسْلِمُونَ'], ['مِنَ الفَجْرِ', 'مِنْ الفَجْرِ'], ['إِلَى المَغْرِبِ.', 'إِلَى المَغْرِبُ.']], key: [0, 0, 0], why: 'Verb before a plural subject stays singular; مِنَ before al-.' },
    { en: 'The streets are decorated with lights.', cols: [['تُزَيَّنُ', 'تُزَيِّنُ'], ['الشَّوَارِعُ', 'الشَّوَارِعَ'], ['بِالأَنْوَارِ.', 'بِالأَنْوَارُ.']], key: [0, 0, 0], why: 'Passive تُزَيَّنُ (-ya-) + subject in -u.' },
    { en: 'I fasted for the first time when I was ten.', cols: [['صُمْتُ', 'صَامْتُ'], ['لِأَوَّلِ مَرَّةٍ', 'لِأَوَّلُ مَرَّةٍ'], ['وَأَنَا فِي العَاشِرَةِ.', 'وَأَنَا فِي عَشَرَةٍ.']], key: [0, 0, 0], why: 'صَامَ → صُمْتُ (hollow verb).' },
  ],
  errors: [
    { wrong: 'تُوَزِّعُ الحَلْوَى عَلَى الأَطْفَالِ.', hint: 'Who distributes? (passive)', right: 'تُوَزَّعُ الحَلْوَى عَلَى الأَطْفَالِ.', why: 'Passive vowel: تُوَزَّعُ.' },
    { wrong: 'صَامْتُ رَمَضَانَ كُلَّهُ.', hint: 'Hollow verb stem.', right: 'صُمْتُ رَمَضَانَ كُلَّهُ.', why: 'صَامَ → صُمْتُ.' },
    { wrong: 'كُلُّ المُسْلِمِينَ يَأْكُلُونَ نَفْسَ الطَّعَامِ فِي العِيدِ.', hint: 'Accurate?', right: 'يَخْتَلِفُ طَعَامُ العِيدِ مِنْ بَلَدٍ إِلَى آخَرَ.', why: 'Hedge: customs vary between countries and families.' },
  ],
  task: {
    title: 'Ramadan and Eid — then, now and next', ar: 'رَمَضَانُ وَالعِيدُ',
    text: 'Write a piece (about 60–80 words) for the school’s “Celebrations around us” display. Include: • what Muslims usually do in Ramadan (present) • two things that are done at Eid (passive) • one memory (past) • one plan for next Eid (future) • a hedge about variety.',
    phrases: [['يَصُومُ المُسْلِمُونَ … · يَتَنَاوَلُونَ …', 'Muslims fast … · they have …'], ['تُزَيَّنُ … · تُوَزَّعُ … · تُتَبَادَلُ …', '… is decorated · handed out · exchanged'], ['صُمْتُ لِأَوَّلِ مَرَّةٍ …', 'I fasted for the first time …'], ['فِي العِيدِ القَادِمِ سَوْفَ …', 'next Eid I will …']],
    coreFrames: [
      { ar: 'فِي رَمَضَانَ يَصُومُ المُسْلِمُونَ ______ .', en: 'In Ramadan Muslims fast …' },
      { ar: 'فِي العِيدِ تُزَيَّنُ ______ ، وَتُوَزَّعُ ______ .', en: 'At Eid … are decorated, and … handed out.' },
      { ar: 'أَتَذَكَّرُ ______ عِنْدَمَا ______ .', en: 'I remember … when …' },
      { ar: 'فِي العِيدِ القَادِمِ سَوْفَ ______ .', en: 'Next Eid I will …' },
    ],
    developFrames: [
      { ar: 'تَخْتَلِفُ العَادَاتُ ______ ؛ فَفِي بَعْضِ البُلْدَانِ ______ .', en: 'Customs vary …; in some countries …' },
      { ar: 'يَعْنِي العِيدُ لِي ______ ، لِأَنَّ ______ .', en: 'Eid means … to me, because …' },
    ],
    bank: ['الصِّيَامُ · يَصُومُ · صُمْتُ', 'الإِفْطَارُ · السَّحُورُ', 'الهِلَالُ', 'عِيدُ الفِطْرِ · عِيدُ الأَضْحَى', 'صَلَاةُ العِيدِ', 'تُزَيَّنُ · تُوَزَّعُ', 'تُتَبَادَلُ التَّهَانِي', 'فِي بَعْضِ البُلْدَانِ'],
    model: {
      text: 'فِي رَمَضَانَ يَصُومُ المُسْلِمُونَ مِنَ الفَجْرِ إِلَى المَغْرِبِ، وَيَتَنَاوَلُونَ السَّحُورَ قَبْلَ الفَجْرِ. فِي عِيدِ الفِطْرِ تُزَيَّنُ البُيُوتُ بِالأَنْوَارِ، وَتُوَزَّعُ الحَلْوَى عَلَى الأَطْفَالِ، وَتُتَبَادَلُ التَّهَانِي بَعْدَ صَلَاةِ العِيدِ. أَتَذَكَّرُ أَوَّلَ يَوْمٍ صُمْتُهُ كَامِلًا؛ كُنْتُ فِي التَّاسِعَةِ، وَأَعْطَانِي جَدِّي هَدِيَّةً. تَخْتَلِفُ العَادَاتُ مِنْ بَلَدٍ إِلَى آخَرَ؛ فَفِي بَعْضِ البُلْدَانِ يَأْكُلُونَ الكَعْكَ، وَفِي غَيْرِهَا البَقْلَاوَةَ. فِي العِيدِ القَادِمِ سَأُسَاعِدُ أُمِّي فِي تَحْضِيرِ الحَلْوَى لِلْجِيرَانِ.',
      en: '“In Ramadan Muslims fast from dawn to sunset, and have suhoor before dawn. At Eid al-Fitr homes are decorated with lights, sweets are handed out to children, and greetings are exchanged after the Eid prayer. I remember the first full day I fasted — I was nine, and my grandfather gave me a present. Customs vary from country to country: in some countries people eat kaʿk, and in others baklava. Next Eid I will help my mum prepare sweets for the neighbours.”',
      find: ['يَصُومُ المُسْلِمُونَ', 'تُزَيَّنُ البُيُوتُ', 'صُمْتُهُ', 'فَفِي بَعْضِ البُلْدَانِ'],
    },
  },
  checkCore: 'describe Ramadan and Eid in the present with two passives?',
  checkDevelop: 'add a past memory, a future plan and a hedge about variety?',
});
