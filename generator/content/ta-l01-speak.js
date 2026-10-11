'use strict';
/* AT-A-L01 · Speaking workshop — Time and Daily Routine. Exam practice for Paper 3 (Speaking): four role plays (Core · Core+ · Develop ·
 * Stretch) and a topic conversation in three tiers, each with a model answer, run in breakout rooms of three (examiner · candidate · observer).
 * Teacher-made scenarios built on the AT-A-L01 language: present-tense routine verbs (Forms V, VI, VIII, X), times, sequencing and frequency. */
const X = require('./xp-common');

const meta = X.meta('A', 1, 'Speaking', {
  fileTitle: 'Time_and_Daily_Routine', title: 'Speaking Workshop — Time and Daily Routine', arabic: 'وَرْشَةُ التَّحَدُّثِ — الوَقْتُ وَالرُّوتِينُ اليَوْمِيُّ',
  focus: 'Paper 3 practice in breakout rooms: four role plays and a topic conversation about your day — answer every task in a full sentence, then develop with times, sequence, frequency and reasons.',
  icon: 'FaComments',
});

// ---------- role plays
const RP = [
  {
    id: 'A', level: 'Core', setting: 'at a summer camp', title: 'Role play A — At the summer camp', ar: 'فِي المُخَيَّمِ الصَّيْفِيِّ',
    you: 'a new camper', them: 'the camp leader',
    tasks: [
      { core: true, ex: 'أَهْلًا وَسَهْلًا! مَا اسْمُكَ، وَكَمْ عُمْرُكَ؟', task: 'Say your name and your age.', help: 'اسْمِي … وَعُمْرِي …', model: 'اسْمِي آدَمُ، وَعُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً.', modelEn: 'My name is Adam and I am fourteen.' },
      { core: true, ex: 'فِي أَيِّ سَاعَةٍ تَسْتَيْقِظُ عَادَةً؟', task: 'Say what time you usually wake up.', help: 'أَسْتَيْقِظُ فِي السَّاعَةِ …', model: 'أَسْتَيْقِظُ عَادَةً فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ.', modelEn: 'I usually wake up at half past six.' },
      { core: true, ex: 'مَاذَا تَتَنَاوَلُ فِي الإِفْطَارِ؟', task: 'Say what you have for breakfast.', help: 'أَتَنَاوَلُ … وَأَشْرَبُ …', model: 'أَتَنَاوَلُ الخُبْزَ وَالجُبْنَ، وَأَشْرَبُ الحَلِيبَ.', modelEn: 'I eat bread and cheese, and I drink milk.' },
      { core: true, ex: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟', task: 'Say how you get to school.', help: 'أَسْتَقِلُّ الحَافِلَةَ / أَمْشِي', model: 'أَسْتَقِلُّ الحَافِلَةَ، وَأَصِلُ إِلَى المَدْرَسَةِ فِي الثَّامِنَةِ.', modelEn: 'I take the bus and arrive at school at eight.' },
      { core: true, unexpected: true, ex: 'وَمَاذَا تَفْعَلُ بَعْدَ المَدْرَسَةِ؟', task: 'Answer the unexpected question.', help: 'بَعْدَ المَدْرَسَةِ أَ…', model: 'بَعْدَ المَدْرَسَةِ أَتَنَاوَلُ الغَدَاءَ، ثُمَّ أَدْرُسُ.', modelEn: 'After school I have lunch, then I study.' },
    ],
    notes: 'Core role play: one full sentence per task is enough. Check the “I” prefix أَـ on every verb (أَسْتَيْقِظُ · أَتَنَاوَلُ · أَسْتَقِلُّ).',
  },
  {
    id: 'B', level: 'Core+', setting: 'a phone call with your host family', title: 'Role play B — Calling your host family', ar: 'مُكَالَمَةٌ مَعَ الأُسْرَةِ المُضِيفَةِ',
    you: 'a student going on an exchange visit', them: 'your host mother / father',
    tasks: [
      { core: true, ex: 'مَتَى تَسْتَيْقِظُ فِي أَيَّامِ المَدْرَسَةِ؟', task: 'Say when you wake up on school days.', help: 'فِي أَيَّامِ المَدْرَسَةِ أَسْتَيْقِظُ …', model: 'فِي أَيَّامِ المَدْرَسَةِ أَسْتَيْقِظُ مُبَكِّرًا، فِي السَّاعَةِ السَّادِسَةِ.', modelEn: 'On school days I wake up early, at six o’clock.' },
      { core: true, ex: 'وَفِي نِهَايَةِ الأُسْبُوعِ؟', task: 'Say when you wake up at the weekend — and why.', help: '… مُتَأَخِّرًا لِأَنِّي …', model: 'فِي نِهَايَةِ الأُسْبُوعِ أَسْتَيْقِظُ مُتَأَخِّرًا، لِأَنِّي أُحِبُّ النَّوْمَ!', modelEn: 'At the weekend I wake up late, because I love sleeping!' },
      { ex: 'مَاذَا تَفْعَلُ فِي الصَّبَاحِ قَبْلَ المَدْرَسَةِ؟', task: 'Give two or three morning activities in order.', help: 'أَوَّلًا … ثُمَّ … بَعْدَ ذٰلِكَ …', model: 'أَوَّلًا أَغْتَسِلُ، ثُمَّ أَرْتَدِي مَلَابِسِي، وَبَعْدَ ذٰلِكَ أَتَنَاوَلُ الإِفْطَارَ.', modelEn: 'First I shower, then I get dressed, and after that I have breakfast.' },
      { ex: '… نَتَنَاوَلُ الإِفْطَارَ فِي السَّابِعَةِ.', task: 'ASK what time the family has breakfast (the examiner then answers).', help: 'فِي أَيِّ سَاعَةٍ …؟', model: 'فِي أَيِّ سَاعَةٍ تَتَنَاوَلُونَ الإِفْطَارَ؟', modelEn: 'What time do you (all) have breakfast?' },
      { unexpected: true, ex: 'هَلْ تَحْتَاجُ إِلَى شَيْءٍ فِي الصَّبَاحِ؟', task: 'Answer the unexpected question.', help: 'نَعَمْ، أَحْتَاجُ إِلَى …', model: 'نَعَمْ، أَحْتَاجُ إِلَى مُنَبِّهٍ، لِأَنِّي أَكُونُ نَاعِسًا فِي الصَّبَاحِ.', modelEn: 'Yes, I need an alarm clock, because I am sleepy in the morning.' },
    ],
    notes: 'Task 4: the CANDIDATE asks the question; the examiner answers with the line in brackets. Asking a question is a common role-play task — practise the question words (مَتَى · فِي أَيِّ سَاعَةٍ · كَمْ). To a girl: نَاعِسَةً.',
  },
  {
    id: 'C', level: 'Develop', setting: 'at the sports club', title: 'Role play C — Joining the swimming club', ar: 'فِي النَّادِي الرِّيَاضِيِّ',
    you: 'a student who wants to join a club', them: 'the club receptionist',
    tasks: [
      { ex: 'أَهْلًا بِكَ فِي النَّادِي. كَيْفَ أُسَاعِدُكَ؟', task: 'Say which class you want to join.', help: 'أُرِيدُ أَنْ أَشْتَرِكَ فِي …', model: 'أُرِيدُ أَنْ أَشْتَرِكَ فِي دَرْسِ السِّبَاحَةِ، مِنْ فَضْلِكَ.', modelEn: 'I would like to join the swimming class, please.' },
      { ex: 'عِنْدَنَا دُرُوسٌ صَبَاحًا وَمَسَاءً. أَيُّ وَقْتٍ يُنَاسِبُكَ؟', task: 'Choose a time and give a reason.', help: 'يُنَاسِبُنِي … لِأَنِّي …', model: 'يُنَاسِبُنِي المَسَاءُ، لِأَنِّي فِي المَدْرَسَةِ مِنَ الثَّامِنَةِ إِلَى الثَّالِثَةِ.', modelEn: 'The evening suits me, because I am at school from eight to three.' },
      { ex: 'صِفْ لِي يَوْمَكَ بَعْدَ المَدْرَسَةِ.', task: 'Describe your afternoon in order (three activities).', help: 'أَصِلُ … ثُمَّ … وَأَخِيرًا …', model: 'أَصِلُ إِلَى البَيْتِ فِي الرَّابِعَةِ، ثُمَّ أَتَنَاوَلُ الغَدَاءَ وَأُنْهِي وَاجِبَاتِي، وَأَخِيرًا أَرْتَاحُ قَلِيلًا.', modelEn: 'I get home at four, then I have lunch and finish my homework, and finally I rest a little.' },
      { ex: '… يَسْتَغْرِقُ الدَّرْسُ سَاعَةً وَاحِدَةً.', task: 'ASK how long the lesson lasts (the examiner then answers).', help: 'كَمْ دَقِيقَةً …؟', model: 'كَمْ دَقِيقَةً يَسْتَغْرِقُ الدَّرْسُ؟', modelEn: 'How many minutes does the lesson last?' },
      { unexpected: true, ex: 'كَمْ مَرَّةً تُمَارِسُ الرِّيَاضَةَ فِي الأُسْبُوعِ؟', task: 'Answer the unexpected question.', help: 'مَرَّةً / مَرَّتَيْنِ / ثَلَاثَ مَرَّاتٍ', model: 'أُمَارِسُ الرِّيَاضَةَ مَرَّتَيْنِ فِي الأُسْبُوعِ عَادَةً، وَأَحْيَانًا ثَلَاثَ مَرَّاتٍ.', modelEn: 'I usually do sport twice a week, and sometimes three times.' },
    ],
    girl: 'كَيْفَ أُسَاعِدُكِ؟ · يُنَاسِبُكِ · صِفِي لِي يَوْمَكِ · تُمَارِسِينَ',
    notes: 'Develop: add a reason (لِأَنِّي) or a frequency word (عَادَةً · أَحْيَانًا) to every answer. Frequency: مَرَّةً (once) · مَرَّتَيْنِ (twice) · ثَلَاثَ مَرَّاتٍ (three times).',
  },
  {
    id: 'D', level: 'Stretch', setting: 'an interview for the school radio', title: 'Role play D — The school radio: a balanced day', ar: 'مُقَابَلَةٌ مَعَ إِذَاعَةِ المَدْرَسَةِ',
    you: 'a student being interviewed', them: 'the school-radio presenter',
    tasks: [
      { ex: 'صِفْ لَنَا يَوْمًا عَادِيًّا فِي حَيَاتِكَ.', task: 'Describe a typical day, with times and sequence.', help: 'بَعْدَ أَنْ أَتَوَضَّأَ …', model: 'أَسْتَيْقِظُ فِي السَّادِسَةِ، وَبَعْدَ أَنْ أَتَوَضَّأَ وَأُصَلِّيَ الفَجْرَ أَسْتَعِدُّ لِلْمَدْرَسَةِ، ثُمَّ أَخْرُجُ مِنَ البَيْتِ فِي السَّابِعَةِ وَالنِّصْفِ.', modelEn: 'I wake up at six; after I do wudu and pray Fajr I get ready for school, then I leave home at half past seven.' },
      { ex: 'مَا الفَرْقُ بَيْنَ أَيَّامِ الدِّرَاسَةِ وَالعُطْلَةِ؟', task: 'Compare school days and holidays.', help: 'أَمَّا فِي العُطْلَةِ فَأَسْتَيْقِظُ …', model: 'فِي أَيَّامِ الدِّرَاسَةِ يَكُونُ يَوْمِي مُنَظَّمًا وَسَرِيعًا، أَمَّا فِي العُطْلَةِ فَأَسْتَيْقِظُ مُتَأَخِّرًا وَأَقْضِي وَقْتًا أَطْوَلَ مَعَ أُسْرَتِي.', modelEn: 'On school days my day is organised and fast; in the holidays I wake up late and spend longer with my family.' },
      { ex: 'مَاذَا فَعَلْتَ أَمْسِ بَعْدَ المَدْرَسَةِ؟', task: 'Say what you did yesterday (past tense).', help: 'رَجَعْتُ … ثُمَّ …', model: 'أَمْسِ رَجَعْتُ إِلَى البَيْتِ مُتْعَبًا، فَأَخَذْتُ قَيْلُولَةً قَصِيرَةً، ثُمَّ رَاجَعْتُ دُرُوسِي سَاعَتَيْنِ.', modelEn: 'Yesterday I came home tired, so I had a short nap, then I revised for two hours.' },
      { ex: 'هَلْ رُوتِينُكَ صِحِّيٌّ فِي رَأْيِكَ؟ لِمَاذَا؟', task: 'Give an opinion with a reason and a “but”.', help: 'أَعْتَقِدُ أَنَّهُ … لٰكِنَّنِي …', model: 'أَعْتَقِدُ أَنَّهُ صِحِّيٌّ إِلَى حَدٍّ مَا، لِأَنِّي أَتَنَاوَلُ الإِفْطَارَ كُلَّ يَوْمٍ، لٰكِنَّنِي أَنَامُ مُتَأَخِّرًا أَحْيَانًا.', modelEn: 'I think it is fairly healthy, because I eat breakfast every day, but I sometimes go to bed late.' },
      { unexpected: true, ex: 'مَاذَا سَتُغَيِّرُ فِي رُوتِينِكَ فِي المُسْتَقْبَلِ؟', task: 'Answer the unexpected question (future).', help: 'سَأُحَاوِلُ أَنْ …', model: 'سَأُحَاوِلُ أَنْ أَنَامَ مُبَكِّرًا، وَسَأَسْتَعْمِلُ هَاتِفِي أَقَلَّ فِي اللَّيْلِ.', modelEn: 'I will try to sleep early, and I will use my phone less at night.' },
    ],
    girl: 'صِفِي لَنَا · فَعَلْتِ · رُوتِينُكِ · رَأْيِكِ · سَتُغَيِّرِينَ — and the candidate says مُتْعَبَةً',
    notes: 'Stretch: three time frames (present routine, past yesterday, future change), an opinion with a reason and a contrast. Task 1 uses بَعْدَ أَنْ + subjunctive (أَتَوَضَّأَ · أُصَلِّيَ). Students who prefer may describe any morning routine; prayer is an example, not a requirement.',
    modelFoot: 'Stretch: three time frames + an opinion + a contrast. Notice ammā … fa- (as for … then) and baʿda an + verb in -a.',
  },
];

// ---------- topic conversation
const CONV = [
  {
    level: 'Core', title: 'Topic conversation — Core questions', ar: 'يَوْمِي', aim: 'one full sentence per question, with a time or a frequency word',
    qs: [
      { q: 'فِي أَيِّ سَاعَةٍ تَسْتَيْقِظُ؟', en: 'What time do you wake up?', start: 'أَسْتَيْقِظُ فِي …', model: 'أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ.', modelEn: 'I wake up at half past six.' },
      { q: 'مَاذَا تَتَنَاوَلُ فِي الإِفْطَارِ؟', en: 'What do you have for breakfast?', start: 'أَتَنَاوَلُ …', model: 'أَتَنَاوَلُ البَيْضَ وَالخُبْزَ عَادَةً.', modelEn: 'I usually have eggs and bread.' },
      { q: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟', en: 'How do you go to school?', start: 'أَذْهَبُ بِـالسَّيَّارَةِ / أَمْشِي', model: 'أَذْهَبُ إِلَى المَدْرَسَةِ بِالسَّيَّارَةِ مَعَ أَبِي.', modelEn: 'I go to school by car with my father.' },
      { q: 'مَاذَا تَفْعَلُ فِي المَسَاءِ؟', en: 'What do you do in the evening?', start: 'فِي المَسَاءِ أَ…', model: 'فِي المَسَاءِ أَدْرُسُ ثُمَّ أُشَاهِدُ التِّلْفَازَ.', modelEn: 'In the evening I study, then I watch TV.' },
      { q: 'مَتَى تَنَامُ؟', en: 'When do you go to sleep?', start: 'أَنَامُ فِي …', model: 'أَنَامُ فِي السَّاعَةِ العَاشِرَةِ.', modelEn: 'I go to sleep at ten o’clock.' },
    ],
    foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
    modelFoot: 'Full sentence + a time or a frequency word = a secure Core answer.',
  },
  {
    level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'رُوتِينِي', aim: 'two or three sentences, with sequence words and a reason',
    qs: [
      { q: 'صِفْ رُوتِينَكَ الصَّبَاحِيَّ بِالتَّرْتِيبِ.', en: 'Describe your morning routine in order.', start: 'أَوَّلًا … ثُمَّ … وَأَخِيرًا …', model: 'أَوَّلًا أَسْتَيْقِظُ فِي السَّادِسَةِ، ثُمَّ أُنَظِّفُ أَسْنَانِي وَأَرْتَدِي مَلَابِسِي، وَأَخِيرًا أَتَنَاوَلُ الإِفْطَارَ مَعَ أُسْرَتِي.', modelEn: 'First I wake up at six, then I brush my teeth and get dressed, and finally I have breakfast with my family.' },
      { q: 'هَلْ يَخْتَلِفُ يَوْمُكَ فِي نِهَايَةِ الأُسْبُوعِ؟', en: 'Is your day different at the weekend?', start: 'نَعَمْ، فِي نِهَايَةِ الأُسْبُوعِ …', model: 'نَعَمْ، فِي نِهَايَةِ الأُسْبُوعِ أَسْتَيْقِظُ مُتَأَخِّرًا، وَأَلْعَبُ كُرَةَ القَدَمِ مَعَ أَصْدِقَائِي.', modelEn: 'Yes, at the weekend I wake up late and play football with my friends.' },
      { q: 'مَنْ يَسْتَيْقِظُ أَوَّلًا فِي بَيْتِكَ؟', en: 'Who wakes up first in your house?', start: 'يَسْتَيْقِظُ / تَسْتَيْقِظُ … أَوَّلًا', model: 'تَسْتَيْقِظُ أُمِّي أَوَّلًا، لِأَنَّهَا تُحَضِّرُ الإِفْطَارَ لَنَا.', modelEn: 'My mother wakes up first, because she prepares breakfast for us.' },
      { q: 'مَا الجُزْءُ المُفَضَّلُ مِنْ يَوْمِكَ؟ لِمَاذَا؟', en: 'What is your favourite part of the day? Why?', start: 'أُحِبُّ … لِأَنَّ …', model: 'أُحِبُّ المَسَاءَ كَثِيرًا، لِأَنَّنِي أَرْتَاحُ وَأَقْرَأُ كِتَابًا.', modelEn: 'I really like the evening, because I relax and read a book.' },
      { q: 'مَاذَا فَعَلْتَ صَبَاحَ أَمْسِ؟', en: 'What did you do yesterday morning?', start: 'أَمْسِ اسْتَيْقَظْتُ …', model: 'أَمْسِ اسْتَيْقَظْتُ مُتَأَخِّرًا، فَخَرَجْتُ مِنَ البَيْتِ بِسُرْعَةٍ.', modelEn: 'Yesterday I woke up late, so I left the house quickly.' },
    ],
    foot: 'Develop: two or three sentences — a sequence word (thumma · baʿda dhālika) and a reason (li-anna) in each answer.',
    modelFoot: 'Sequence + reason + one past-tense sentence = a strong Develop answer.',
  },
  {
    level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'تَنْظِيمُ الوَقْتِ', aim: 'a developed answer: opinion, reason, example, and more than one time frame',
    qs: [
      { q: 'قَارِنْ بَيْنَ رُوتِينِكَ وَرُوتِينِ شَخْصٍ آخَرَ فِي أُسْرَتِكَ.', en: 'Compare your routine with another family member’s.', start: 'بَيْنَمَا أَسْتَيْقِظُ … يَسْتَيْقِظُ أَخِي …', model: 'بَيْنَمَا أَسْتَيْقِظُ فِي السَّادِسَةِ، يَسْتَيْقِظُ أَخِي الكَبِيرُ فِي الخَامِسَةِ، لِأَنَّهُ يَعْمَلُ فِي مُسْتَشْفًى بَعِيدٍ.', modelEn: 'While I wake up at six, my older brother wakes up at five, because he works in a hospital far away.' },
      { q: 'هَلْ يَنَامُ الطُّلَّابُ وَقْتًا كَافِيًا فِي رَأْيِكَ؟', en: 'Do students get enough sleep, in your opinion?', start: 'فِي رَأْيِي … لِأَنَّ …', model: 'فِي رَأْيِي لَا يَنَامُ كَثِيرٌ مِنَ الطُّلَّابِ وَقْتًا كَافِيًا، لِأَنَّهُمْ يَسْتَعْمِلُونَ الهَاتِفَ حَتَّى وَقْتٍ مُتَأَخِّرٍ.', modelEn: 'In my opinion many students do not get enough sleep, because they use their phones until late.' },
      { q: 'كَيْفَ تُنَظِّمُ وَقْتَكَ فِي أَيَّامِ الامْتِحَانَاتِ؟', en: 'How do you organise your time during exams?', start: 'أَضَعُ جَدْوَلًا … وَأَحْرِصُ عَلَى …', model: 'أَضَعُ جَدْوَلًا لِلْمُرَاجَعَةِ، وَأَدْرُسُ سَاعَةً ثُمَّ أَرْتَاحُ عَشْرَ دَقَائِقَ، وَأَحْرِصُ عَلَى النَّوْمِ مُبَكِّرًا.', modelEn: 'I make a revision timetable, study for an hour then rest for ten minutes, and make sure I sleep early.' },
      { q: 'كَيْفَ كَانَ رُوتِينُكَ عِنْدَمَا كُنْتَ صَغِيرًا؟', en: 'What was your routine like when you were little?', start: 'عِنْدَمَا كُنْتُ صَغِيرًا كُنْتُ …', model: 'عِنْدَمَا كُنْتُ صَغِيرًا كُنْتُ أَنَامُ مُبَكِّرًا جِدًّا، وَكَانَتْ أُمِّي تُوقِظُنِي كُلَّ صَبَاحٍ.', modelEn: 'When I was little I used to sleep very early, and my mother used to wake me every morning.' },
      { q: 'لَوْ كَانَ عِنْدَكَ يَوْمٌ حُرٌّ تَمَامًا، كَيْفَ تَقْضِيهِ؟', en: 'If you had a completely free day, how would you spend it?', start: 'لَوْ كَانَ عِنْدِي يَوْمٌ حُرٌّ، لَـ…', model: 'لَوْ كَانَ عِنْدِي يَوْمٌ حُرٌّ، لَزُرْتُ جَدَّتِي فِي الصَّبَاحِ، وَلَلَعِبْتُ مَعَ أَصْدِقَائِي فِي المَسَاءِ.', modelEn: 'If I had a free day, I would visit my grandmother in the morning and play with my friends in the evening.' },
    ],
    foot: 'Stretch: opinion + reason + example, and a second time frame (kuntu … · sa- … · law …).',
    modelFoot: 'Stretch: a comparison (baynamā), a past habit (kuntu + verb), a conditional (law … la-) — range is rewarded.',
  },
];
CONV[0].qs[2].start = 'أَذْهَبُ بِالسَّيَّارَةِ / أَمْشِي';
CONV[2].qs[4].start = 'لَوْ كَانَ عِنْدِي يَوْمٌ حُرٌّ، لَزُرْتُ …';

const W = [
  X.word(1, 'أَسْتَيْقِظُ', 'I wake up', [['he', 'يَسْتَيْقِظُ'], ['she', 'تَسْتَيْقِظُ'], ['they', 'يَسْتَيْقِظُونَ']]),
  X.word(2, 'أَتَنَاوَلُ', 'I have (a meal)', [['he', 'يَتَنَاوَلُ'], ['she', 'تَتَنَاوَلُ'], ['they', 'يَتَنَاوَلُونَ']]),
  X.word(3, 'أَسْتَقِلُّ الحَافِلَةَ', 'I take the bus', [['he', 'يَسْتَقِلُّ'], ['she', 'تَسْتَقِلُّ'], ['they', 'يَسْتَقِلُّونَ']]),
  X.word(4, 'أَسْتَعِدُّ', 'I get ready', [['he', 'يَسْتَعِدُّ'], ['she', 'تَسْتَعِدُّ'], ['they', 'يَسْتَعِدُّونَ']]),
  X.word(5, 'أَصِلُ', 'I arrive', [['he', 'يَصِلُ'], ['she', 'تَصِلُ'], ['they', 'يَصِلُونَ']]),
  X.word(6, 'أَنَامُ', 'I sleep, go to bed', [['he', 'يَنَامُ'], ['she', 'تَنَامُ'], ['they', 'يَنَامُونَ']]),
  X.word(7, 'نَشِيطٌ', 'energetic', [['m.', 'نَشِيطٌ'], ['f.', 'نَشِيطَةٌ'], ['pl.', 'نَشِيطُونَ']]),
  X.word(8, 'نَاعِسٌ', 'sleepy', [['m.', 'نَاعِسٌ'], ['f.', 'نَاعِسَةٌ'], ['pl.', 'نَاعِسُونَ']]),
  X.word(9, 'مُتْعَبٌ', 'tired', [['m.', 'مُتْعَبٌ'], ['f.', 'مُتْعَبَةٌ'], ['pl.', 'مُتْعَبُونَ']]),
  X.word(10, 'مُنَبِّهٌ', 'an alarm clock', [['sg.', 'مُنَبِّهٌ'], ['pl.', 'مُنَبِّهَاتٌ']]),
  X.word(11, 'عَادَةً · أَحْيَانًا', 'usually · sometimes', null, { tag: 'frequency' }),
  X.word(12, 'مُبَكِّرًا · مُتَأَخِّرًا', 'early · late', null, { tag: 'time' }),
];

const slides = [
  X.title({ notes: `WORKSHOP AT A GLANCE — 60 minutes on Teams, mostly in breakout rooms of three.
0–2 Welcome · 2–6 How Paper 3 works · 6–10 Language bank · 10–13 Breakout routine · 13–33 Role plays A–D in rooms (rotate roles) · 33–37 Role-play models (main room) · 37–50 Topic conversation in rooms · 50–55 Conversation models · 55–58 Feedback + self-check · 58–60 Close.
Content: teacher-made exam scenarios for Advanced Topic A, Lesson 1 (Time and Daily Routine, AT-A-L01), using that lesson’s verbs, times, sequencing and frequency language. Every task has Core · Develop · Stretch support and a model answer.
EXAM FORMAT: Paper 3 Speaking = a role play and a topic conversation, as in the Cambridge IGCSE Arabic 0544 speaking test. Check timings and marks against the current syllabus and the past paper you use.
BREAKOUT ROOMS: set up rooms of three before the lesson (mixed or same-level — see slide 6). Send the slides as a PDF or share the deck link so every room can see the cards.` }),
  X.welcomeSlide(),
  X.map([
    ['teach', 8, 'How the speaking exam works; the language you need.', 'كَيْفَ'],
    ['youdo', 20, 'Role plays A–D in breakout rooms.', 'تَمْثِيلُ الدَّوْرِ'],
    ['feedback', 4, 'Role-play models.', 'النَّمُوذَجُ'],
    ['youdo', 13, 'Topic conversation in breakout rooms.', 'المُحَادَثَةُ'],
    ['feedback', 9, 'Conversation models, feedback, self-check.', 'قَيِّمْ'],
  ], 'In the rooms everyone has a job: examiner, candidate or observer. You will swap after each role play, so everybody speaks.', 'MAP (1 min) — explain that most of the lesson happens in breakout rooms; the teacher visits each room.'),
  {
    type: 'explain', stage: 'teach', min: 3, eyebrow: 'Teach · Paper 3 Speaking', title: 'How the speaking exam works', ar: 'امْتِحَانُ التَّحَدُّثِ',
    pointsHead: 'THE TWO PARTS WE PRACTISE TODAY',
    points: [
      'ROLE PLAY — a card with a situation and tasks. The examiner asks; you answer every task in a full, clear sentence. One task is unexpected (!).',
      'TOPIC CONVERSATION — the examiner asks questions about a topic you know. Short answers are not enough: develop each one.',
      'Examiners reward: completing the tasks, a range of language (tenses, linking words, opinions) and accuracy.',
      'Never stay silent — use a repair phrase and keep going.',
    ],
    exHead: 'REPAIR PHRASES',
    examples: [
      { ar: 'عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟', en: 'Sorry, could you repeat the question?' },
      { ar: 'لَحْظَةً، دَعْنِي أُفَكِّرُ …', en: 'One moment, let me think …' },
      { ar: 'أَقْصِدُ …', en: 'I mean …' },
    ],
    notes: 'TEACH (3 min). Role play = precise and complete; conversation = develop. Choral repetition of the three repair phrases. To a girl: تُعِيدِي.',
  },
  X.vocab({ eyebrow: 'Language bank · routine verbs (I · he · she · they)', title: 'Verbs for your day', ar: 'أَفْعَالُ الرُّوتِينِ', items: W.slice(0, 6), notes: 'LANGUAGE BANK (2 min) — the AT-A-L01 verbs with the four forms students need in the exam: I (أَـ), he (يَـ), she (تَـ), they (يَـ…ونَ). Say “I” → “she” for each: أَسْتَيْقِظُ → تَسْتَيْقِظُ.' }),
  X.vocab({ eyebrow: 'Language bank · how you feel, time and frequency (m. · f. · pl.)', title: 'Describe it: feelings, time, frequency', ar: 'الصِّفَاتُ وَالوَقْتُ', items: W.slice(6), notes: 'LANGUAGE BANK (2 min) — adjectives with m. / f. / pl. (a girl says: أَنَا نَاعِسَةٌ / مُتْعَبَةٌ), plus frequency and time adverbs that lift every answer.' }),
  {
    type: 'challenge', stage: 'youdo', min: 3, eyebrow: 'Breakout rooms · how we work', title: 'Examiner · candidate · observer', ar: 'فِي الغُرَفِ',
    chip: 'BREAKOUT ROUTINE', icon: '🎧', head: 'Three jobs, then swap', text: 'Rooms of three. A = examiner (reads the questions only). B = candidate (answers from the task card). C = observer (ticks the checklist and gives one WWW and one EBI).',
    steps: ['1 minute: the candidate reads the card and plans (no writing full sentences).', 'About 3 minutes: the role play — the examiner reads every question in order.', '1 minute: the observer gives feedback (WWW + EBI).', 'Swap jobs and do the next role play. Then the topic conversation.'],
    routes: {
      core: 'Role plays A and B, with the help column. Conversation: Core questions.',
      develop: 'Role plays B and C, help column covered. Conversation: Core + Develop questions.',
      stretch: 'Role plays C and D, no help. Conversation: Develop + Stretch questions, push with “why?”.',
    },
    phrases: [['دَوْرُكَ!', 'your turn!'], ['أَحْسَنْتَ! / أَحْسَنْتِ!', 'well done! (m. / f.)'], ['تَكَلَّمْ أَكْثَرَ، مِنْ فَضْلِكَ', 'say more, please'], ['لِمَاذَا؟', 'why?']],
    notes: 'BREAKOUT ROUTINE (3 min, in the main room before opening rooms). Grouping: same-level rooms make the routes simple; mixed rooms work if the strongest student is examiner first. Post the room timer in the chat. Teacher visits every room for about two minutes and listens to at least one candidate per room.',
  },
  ...RP.map(X.roleCard),
  {
    type: 'formsTable', stage: 'youdo', min: 1, eyebrow: 'Observer · feedback checklist', title: 'Observer: tick and give feedback', ar: 'وَرَقَةُ المُلَاحِظِ', ltr: true,
    cols: [{ label: 'The candidate …', w: 6.2 }, { label: 'Route', w: 1.6 }, { label: '✓ / ✗', w: 1.2 }, { label: 'Example you heard', w: 3.33 }],
    rows: [
      { core: true, cells: ['answered EVERY task, including the unexpected one', 'Core', '', ''] },
      { core: true, cells: ['used full sentences with the correct “I” verb (a-: astayqiẓu)', 'Core', '', ''] },
      { cells: ['added a time, a sequence word or a frequency word', 'Develop', '', ''] },
      { cells: ['gave a reason (لِأَنَّ) or an opinion (فِي رَأْيِي)', 'Develop', '', ''] },
      { cells: ['used more than one time frame (past / future)', 'Stretch', '', ''] },
      { cells: ['kept going with a repair phrase instead of silence', 'All', '', ''] },
    ],
    foot: 'Feedback in the room: one WWW (what went well) + one EBI (even better if …).',
    notes: 'Observers keep this slide open (or copy the six points into their book). Teacher collects one strong WWW per room in the main room afterwards.',
  },
  ...RP.map(X.roleModel),
  ...CONV.map(X.convCard),
  X.convModel(CONV[0], 0, 5),
  X.convModel(CONV[1], 0, 5),
  X.convModel(CONV[2], 0, 3, 'part 1'),
  X.convModel(CONV[2], 3, 5, 'part 2'),
  X.selfCheckSlide([
    { route: 'core', text: 'I answered every role-play task in a full sentence.' },
    { route: 'core', text: 'I used the “I” form of routine verbs correctly (أَسْتَيْقِظُ · أَتَنَاوَلُ).' },
    { route: 'develop', text: 'I added times, sequence words and a reason.' },
    { route: 'develop', text: 'I asked a question in the role play.' },
    { route: 'stretch', text: 'I used past, present and future in the conversation.' },
  ]),
  X.closeSlide({ nextCode: 'AT-A-L01 · Writing workshop', nextTitle: 'Form filling, directed writing and extended writing', nextAr: 'وَرْشَةُ الكِتَابَةِ', remember: 'Remember: in the role play answer EVERY task; in the conversation, develop every answer.' }),
].filter(Boolean).map((sp) => (sp.type === 'close' ? { ...sp, byeEn: 'Well done — great speaking practice today!', nextLabel: 'NEXT WORKSHOP' } : sp));

module.exports = { meta, slides, RP, CONV };
