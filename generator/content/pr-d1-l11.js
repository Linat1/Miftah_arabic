'use strict';
/* Practice Room · D1-L11 · Speaking and writing — my daily routine (Point · Reason · Example · Contrast). Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd1-l11',
  arShort: 'رُوتِينِي اليَوْمِيُّ',
  grammar: 'extending every answer: Point + Reason (li-anna) + Example (ʿalā sabīl al-mithāl) + Contrast (maʿa dhālika · baynamā · ammā … fa-); person control (astayqiẓu / yastayqiẓu / tastayqiẓu); qabla an / baʿda an + verb in -a; frequency and exact clock time',
  focus: 'Students run their own exam-style speaking and writing practice for the whole of D1: say the PREC words and routine structures, act an extended dialogue, answer topic-conversation cards with PREC, do a role-play card, give a one-minute PREC talk from cue words, then build, fix and write an extended routine article.',
  words1: 'PREC — extend every answer', words2: 'D1 language toolkit',
  pick: [17, 18, 19, 20, 22, 23, 24, 9, 11, 12, 15, 16],
  dialogue: {
    title: 'From a short answer to a full answer', ar: 'مِنْ جَوَابٍ قَصِيرٍ إِلَى جَوَابٍ كَامِلٍ',
    lines: [
      ['A', 'مَتَى تَسْتَيْقِظُ فِي أَيَّامِ الدِّرَاسَةِ؟', 'When do you wake up on school days?'],
      ['B', 'أَسْتَيْقِظُ فِي السَّادِسَةِ إِلَّا الرُّبْعَ.', 'I wake up at quarter to six. (Point)'],
      ['B', 'لِأَنَّ المَدْرَسَةَ تَبْدَأُ مُبَكِّرًا وَالطَّرِيقَ مُزْدَحِمٌ.', 'Because school starts early and the road is busy. (Reason)'],
      ['B', 'عَلَى سَبِيلِ المِثَالِ، أَمْسِ وَصَلْتُ قَبْلَ الجَرَسِ بِخَمْسِ دَقَائِقَ فَقَطْ!', 'For example, yesterday I arrived only five minutes before the bell! (Example)'],
      ['B', 'مَعَ ذٰلِكَ، أَنَامُ وَقْتًا أَطْوَلَ يَوْمَ السَّبْتِ، أَمَّا أُخْتِي فَتَسْتَيْقِظُ مُبَكِّرًا دَائِمًا.', 'However, I sleep longer on Saturday; as for my sister, she always wakes up early. (Contrast)'],
      ['A', 'جَوَابٌ مُمْتَازٌ! هٰذَا يَعْنِي أَنَّ يَوْمَكَ طَوِيلٌ.', 'Excellent answer! This means your day is long.'],
    ],
    foot: 'Round 1: read it. Round 2: swap letters. Round 3: answer “مَتَى تَنَامُ؟” in four steps — P, R, E, C — and your partner holds up a finger for each step.',
  },
  qTitle: 'Topic conversation — answer with P · R · E · C',
  questions: [
    { q: 'صِفْ صَبَاحَكَ فِي يَوْمٍ مَدْرَسِيٍّ.', en: 'Describe your morning on a school day.', start: 'P: أَسْتَيْقِظُ فِي … ثُمَّ …', more: 'R: لِأَنَّ … · E: عَلَى سَبِيلِ المِثَالِ …' },
    { q: 'مَاذَا تَفْعَلُ بَعْدَ المَدْرَسَةِ عَادَةً؟', en: 'What do you usually do after school?', start: 'P: بَعْدَ أَنْ أَرْجِعَ …', more: 'C: مَعَ ذٰلِكَ … / بَيْنَمَا …' },
    { q: 'كَيْفَ يَخْتَلِفُ رُوتِينُكَ عَنْ رُوتِينِ أَحَدِ أَفْرَادِ أُسْرَتِكَ؟', en: 'How is your routine different from a family member’s?', start: 'P: أَنَا … بَيْنَمَا أَبِي / أُمِّي …', more: 'R + E …' },
    { q: 'مَاذَا فَعَلْتَ أَمْسِ بَعْدَ الظُّهْرِ؟', en: 'What did you do yesterday afternoon?', start: 'P: أَمْسِ رَجَعْتُ … ثُمَّ …', more: 'C: لٰكِنْ عَادَةً …' },
    { q: 'هَلْ رُوتِينُكَ صِحِّيٌّ؟ مَاذَا سَتُغَيِّرُ؟', en: 'Is your routine healthy? What will you change?', start: 'P: فِي رَأْيِي …', more: 'سَأُ… ← سَأَنَامُ مُبَكِّرًا …' },
  ],
  card: {
    title: 'Role-play card — a new pen-friend asks about your life', ar: 'صَدِيقٌ جَدِيدٌ بِالمُرَاسَلَةِ', you: 'yourself', them: 'your new pen-friend on a video call',
    tasks: [
      { ex: 'كَيْفَ يَبْدَأُ يَوْمُكَ؟', task: 'Point + exact time.', plan: 'P ← أَسْتَيْقِظُ فِي … إِلَّا / وَ…', model: 'أَسْتَيْقِظُ فِي السَّادِسَةِ وَالرُّبْعِ، وَأُصَلِّي ثُمَّ أَتَنَاوَلُ الإِفْطَارَ.', modelEn: 'I wake up at quarter past six, pray, then have breakfast.' },
      { ex: 'وَمَا أَفْضَلُ وَقْتٍ فِي يَوْمِكَ؟', task: 'Point + reason.', plan: 'P + R ← أَفْضَلُ وَقْتٍ … لِأَنَّ …', model: 'أَفْضَلُ وَقْتٍ هُوَ المَسَاءُ، لِأَنَّنِي أَلْعَبُ مَعَ إِخْوَتِي.', modelEn: 'The best time is the evening, because I play with my siblings.' },
      { ex: 'هَلْ يَوْمُكَ مِثْلُ يَوْمِ أُخْتِكَ؟', task: 'Contrast.', plan: '', model: 'لَا، أَنَا أَسْهَرُ قَلِيلًا، بَيْنَمَا تَنَامُ أُخْتِي فِي التَّاسِعَةِ لِأَنَّهَا صَغِيرَةٌ.', modelEn: 'No — I stay up a bit, whereas my sister sleeps at nine because she is little.' },
      { unexpected: true, ex: 'وَمَاذَا فَعَلْتَ فِي نِهَايَةِ الأُسْبُوعِ المَاضِيَةِ؟', task: 'Answer in the past.', plan: '', model: 'زُرْتُ جَدِّي، وَعَلَى سَبِيلِ المِثَالِ طَبَخْنَا مَعًا وَجْبَةً تَقْلِيدِيَّةً.', modelEn: 'I visited my grandfather — for example, we cooked a traditional meal together.' },
    ],
    girl: 'pen-friend to a girl: يَوْمُكِ · أُخْتِكِ · فَعَلْتِ',
    notes: 'Tasks 3–4 should each contain at least two PREC steps.',
  },
  talk: {
    title: 'One minute from cue words', ar: 'دَقِيقَةٌ مِنْ كَلِمَاتٍ مِفْتَاحِيَّةٍ',
    text: 'The Leader gives three cue words, e.g. «الصَّبَاحُ · الأُسْرَةُ · نِهَايَةُ الأُسْبُوعِ». Speak for one minute, using PREC for each cue.',
    head: 'Speak for one minute — PREC for every cue',
    routes: {
      core: 'Point + Reason for each cue word.',
      develop: 'Add an Example (عَلَى سَبِيلِ المِثَالِ) for two cues.',
      stretch: 'Full PREC on all three, with one past and one future sentence.',
    },
  },
  builder: [
    { en: 'For example, yesterday I revised for two hours.', cols: [['عَلَى سَبِيلِ المِثَالِ،', 'مَعَ ذٰلِكَ،'], ['أَمْسِ رَاجَعْتُ', 'أَمْسِ أُرَاجِعُ'], ['لِمُدَّةِ سَاعَتَيْنِ.', 'لِمُدَّةِ سَاعَتَانِ.']], key: [0, 0, 0], why: 'Yesterday → past; لِمُدَّةِ + genitive dual: سَاعَتَيْنِ.' },
    { en: 'However, I sleep longer at the weekend.', cols: [['مَعَ ذٰلِكَ،', 'لِذٰلِكَ،'], ['أَنَامُ وَقْتًا أَطْوَلَ', 'أَنَامُ وَقْتًا أَطْوَلُ'], ['فِي نِهَايَةِ الأُسْبُوعِ.', 'فِي نِهَايَةُ الأُسْبُوعِ.']], key: [0, 0, 0], why: 'However = مَعَ ذٰلِكَ (so = لِذٰلِكَ).' },
    { en: 'This means that my day is very busy.', cols: [['هٰذَا يَعْنِي', 'هٰذِهِ يَعْنِي'], ['أَنَّ يَوْمِي', 'أَنْ يَوْمِي'], ['مُزْدَحِمٌ جِدًّا.', 'مُزْدَحِمًا جِدًّا.']], key: [0, 0, 0], why: 'أَنَّ + noun (subject in -a); its predicate stays -un.' },
  ],
  errors: [
    { wrong: 'أَمْسِ أَسْتَيْقِظُ فِي السَّابِعَةِ.', hint: 'Look at the time word.', right: 'أَمْسِ اسْتَيْقَظْتُ فِي السَّابِعَةِ.', why: 'Rule: أَمْسِ → past tense.' },
    { wrong: 'أُخْتِي يَسْتَيْقِظُ مُبَكِّرًا.', hint: 'Person control.', right: 'أُخْتِي تَسْتَيْقِظُ مُبَكِّرًا.', why: 'Rule: she → ta-.' },
    { wrong: 'بَعْدَ أَنْ أَرْجِعُ أَسْتَرِيحُ.', hint: 'After أَنْ …', right: 'بَعْدَ أَنْ أَرْجِعَ أَسْتَرِيحُ.', why: 'Rule: أَنْ + verb ending in -a.' },
  ],
  task: {
    title: 'An article: my daily routine', ar: 'مَقَالَةٌ: رُوتِينِي اليَوْمِيُّ',
    text: 'Write an article (about 70–90 words) for the school magazine about your daily routine. Include: • your morning, school day and evening with exact times • at least one full PREC chain (Point, Reason, Example, Contrast) • قَبْلَ أَنْ / بَعْدَ أَنْ • a comparison with another person • one past sentence (أَمْسِ …) and one future plan (سَأُحَاوِلُ أَنْ …).',
    range: [65, 105],
    phrases: [['لِأَنَّ … · عَلَى سَبِيلِ المِثَالِ …', 'because … · for example …'], ['مَعَ ذٰلِكَ … · بَيْنَمَا …', 'however … · whereas …'], ['قَبْلَ أَنْ … · بَعْدَ أَنْ …', 'before … · after …'], ['هٰذَا يَعْنِي أَنَّ …', 'this means that …']],
    coreFrames: [
      { ar: 'أَسْتَيْقِظُ فِي ______ ، لِأَنَّ ______ .', en: 'I wake up at …, because …' },
      { ar: 'فِي المَدْرَسَةِ ______ ، وَعَلَى سَبِيلِ المِثَالِ ______ .', en: 'At school …, and for example …' },
      { ar: 'بَعْدَ أَنْ أَرْجِعَ ______ .', en: 'After I get back …' },
      { ar: 'أَمْسِ ______ .', en: 'Yesterday I …' },
    ],
    developFrames: [
      { ar: 'مَعَ ذٰلِكَ، ______ ، بَيْنَمَا ______ .', en: 'However, …, whereas …' },
      { ar: 'فِي المُسْتَقْبَلِ سَأُحَاوِلُ أَنْ ______ ، لِأَنَّ ______ .', en: 'In future I will try to …, because …' },
    ],
    bank: ['لِأَنَّ', 'عَلَى سَبِيلِ المِثَالِ', 'مَعَ ذٰلِكَ', 'بَيْنَمَا · أَمَّا … فَ…', 'هٰذَا يَعْنِي أَنَّ', 'قَبْلَ أَنْ · بَعْدَ أَنْ', 'عَادَةً · نَادِرًا', 'أَمْسِ · سَأُحَاوِلُ'],
    model: {
      text: 'أَسْتَيْقِظُ فِي السَّادِسَةِ إِلَّا الرُّبْعَ، لِأَنَّ مَدْرَسَتِي بَعِيدَةٌ. قَبْلَ أَنْ أَخْرُجَ أُصَلِّي وَأَتَنَاوَلُ الإِفْطَارَ مَعَ أُمِّي. فِي المَدْرَسَةِ عِنْدِي سِتُّ حِصَصٍ، وَعَلَى سَبِيلِ المِثَالِ يَوْمَ الثُّلَاثَاءِ أَدْرُسُ العُلُومَ مَرَّتَيْنِ. بَعْدَ أَنْ أَرْجِعَ إِلَى البَيْتِ، أَسْتَرِيحُ نِصْفَ سَاعَةٍ ثُمَّ أُرَاجِعُ دُرُوسِي. مَعَ ذٰلِكَ، أَنَا لَا أَدْرُسُ طُولَ المَسَاءِ، بَيْنَمَا يَدْرُسُ أَخِي الكَبِيرُ حَتَّى مُنْتَصَفِ اللَّيْلِ. أَمْسِ لَعِبْتُ كُرَةَ القَدَمِ بَعْدَ العَشَاءِ. هٰذَا يَعْنِي أَنَّ يَوْمِي مُتَوَازِنٌ، لٰكِنْ فِي المُسْتَقْبَلِ سَأُحَاوِلُ أَنْ أَنَامَ قَبْلَ العَاشِرَةِ.',
      en: '“I wake up at quarter to six, because my school is far away. Before I go out I pray and have breakfast with my mum. At school I have six lessons; for example, on Tuesday I study science twice. After I get home, I rest for half an hour and then revise. However, I don’t study all evening, whereas my older brother studies until midnight. Yesterday I played football after dinner. This means that my day is balanced, but in future I will try to sleep before ten.”',
      find: ['لِأَنَّ مَدْرَسَتِي بَعِيدَةٌ', 'وَعَلَى سَبِيلِ المِثَالِ', 'مَعَ ذٰلِكَ', 'بَيْنَمَا يَدْرُسُ أَخِي'],
    },
  },
  checkCore: 'give a Point + Reason for every part of the day?',
  checkDevelop: 'complete one full PREC chain and use one past and one future sentence?',
});
