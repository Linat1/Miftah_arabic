'use strict';
/* Apply Workshop · F4-W05 · F4-L09 (extended writing: an email about my school) + F4-L10 (school conversations). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f4-w05', pair: ['f4-l09', 'f4-l10'],
  title: 'Open Evening: Ask, Listen, Then Email', arShort: 'الأُمْسِيَةُ المَفْتُوحَةُ',
  focus: 'Students join school conversations with extended writing: at an open evening they ask precise questions about the school and a club, use repair phrases when they don’t understand, then write a three-paragraph email about the school to a pen-friend in Jordan.',
  sortTitle: 'Speaking phrase or writing phrase?', sortCats: ['Writing an email · F4-L09', 'Repair in conversation · F4-L10'],
  sort: [
    { ar: 'بِالإِضَافَةِ إِلَى ذٰلِكَ', cat: 0 }, { ar: 'فِي النِّهَايَةِ', cat: 0 }, { ar: 'عَزِيزِي سَامِي', cat: 0 }, { ar: 'مَعَ تَحِيَّاتِي', cat: 0 },
    { ar: 'لَمْ أَفْهَمْ', cat: 1 }, { ar: 'تَكَلَّمْ بِبُطْءٍ', cat: 1 }, { ar: 'هَلْ يُمْكِنُكَ أَنْ تُعِيدَ ذٰلِكَ؟', cat: 1 }, { ar: 'فَهِمْتُ الآنَ', cat: 1 },
  ],
  dialogue: {
    title: 'At the open evening', ar: 'فِي الأُمْسِيَةِ المَفْتُوحَةِ',
    lines: [
      ['A', 'مَتَى يَبْدَأُ نَادِي الرُّوبُوتَاتِ؟', 'When does the robotics club start?'],
      ['B', 'يَوْمَ الأَرْبِعَاءِ، بَعْدَ المَدْرَسَةِ، فِي السَّاعَةِ الثَّالِثَةِ وَالرُّبْعِ.', 'On Wednesday, after school, at a quarter past three.'],
      ['A', 'آسِفٌ، لَمْ أَفْهَمْ. هَلْ يُمْكِنُكِ أَنْ تُعِيدِي ذٰلِكَ؟', 'Sorry, I didn’t understand. Could you repeat that?'],
      ['B', 'طَبْعًا: يَوْمَ الأَرْبِعَاءِ، فِي السَّاعَةِ الثَّالِثَةِ وَالرُّبْعِ.', 'Of course: on Wednesday, at a quarter past three.'],
      ['A', 'شُكْرًا، فَهِمْتُ الآنَ. وَأَيْنَ النَّادِي؟ وَكَمْ طَالِبًا فِيهِ؟', 'Thank you, I understand now. And where is the club? And how many students are in it?'],
      ['B', 'فِي مُخْتَبَرِ العُلُومِ، وَفِيهِ خَمْسَةَ عَشَرَ طَالِبًا.', 'In the science lab, and there are fifteen students in it.'],
    ],
    notes: 'Precise questions and repair phrases come from F4-L10 (note -ki to a female teacher: هَلْ يُمْكِنُكِ أَنْ تُعِيدِي …؟). The facts collected become paragraph 2 of the F4-L09 email.',
  },
  card: {
    title: 'Role-play card — asking a teacher at the open evening', ar: 'أَسْأَلُ المُعَلِّمَ', you: 'the visiting student', them: 'a teacher at the open evening',
    mix: 'precise questions, listening and repair phrases (F4-L10) to collect the facts for an email (F4-L09)',
    tasks: [
      { ex: 'أَهْلًا! هَلْ عِنْدَكَ سُؤَالٌ؟', task: 'Ask when the school day starts and ends.', plan: 'سُؤَالٌ ← مَتَى يَبْدَأُ … وَمَتَى يَنْتَهِي؟', model: 'نَعَمْ، مِنْ فَضْلِكَ: مَتَى يَبْدَأُ اليَوْمُ المَدْرَسِيُّ، وَمَتَى يَنْتَهِي؟', modelEn: 'Yes, please: when does the school day start, and when does it end?' },
      { ex: 'يَبْدَأُ فِي الثَّامِنَةِ وَالنِّصْفِ، وَيَنْتَهِي فِي الثَّالِثَةِ وَالرُّبْعِ.', task: 'You didn’t catch it — use a repair phrase.', plan: 'لَمْ أَفْهَمْ ← آسِفٌ … تَكَلَّمْ بِبُطْءٍ …', model: 'آسِفٌ، لَمْ أَفْهَمْ. تَكَلَّمْ بِبُطْءٍ، مِنْ فَضْلِكَ.', modelEn: 'Sorry, I didn’t understand. Speak slowly, please.' },
      { ex: 'كَمْ طَالِبًا فِي الصَّفِّ؟', task: 'Ask the question back and comment on the answer.', plan: 'كَمْ ← فِي صَفِّي … طَالِبًا', model: 'فِي صَفِّي الآنَ خَمْسَةٌ وَعِشْرُونَ طَالِبًا. وَفِي صَفِّكُمْ؟', modelEn: 'In my class now there are twenty-five students. And in your class?' },
      { ex: 'أَيُّ نَادٍ يُعْجِبُكَ؟', task: 'Choose a club and ask where and when.', plan: 'أَيُّ ← نَادِي … · أَيْنَ؟ · مَتَى؟', model: 'نَادِي الكُتُبِ يُعْجِبُنِي. أَيْنَ هُوَ، وَمَتَى؟', modelEn: 'I like the book club. Where is it, and when?' },
      { unexpected: true, ex: 'مَنْ مُعَلِّمُكَ المُفَضَّلُ فِي مَدْرَسَتِكَ الآنَ؟', task: 'Answer with a reason.', plan: 'مَنْ ← مُعَلِّمِي المُفَضَّلُ … لِأَنَّهُ …', model: 'مُعَلِّمَتِي المُفَضَّلَةُ مُعَلِّمَةُ العُلُومِ لِأَنَّهَا وَاضِحَةٌ وَلَطِيفَةٌ.', modelEn: 'My favourite teacher is the science teacher because she is clear and kind.' },
    ],
    girl: 'هَلْ عِنْدَكِ سُؤَالٌ؟ · أَيُّ نَادٍ يُعْجِبُكِ؟ — and she says: آسِفَةٌ، لَمْ أَفْهَمْ',
  },
  talk: {
    title: 'What I found out', ar: 'مَاذَا عَرَفْتُ؟',
    text: 'Talk for 30–45 seconds and report what you found out at the open evening: when the day starts and ends, how many students are in a class, one club (day, time, place) and your opinion of the school.',
    routes: {
      core: 'يَبْدَأُ اليَوْمُ فِي … · النَّادِي يَوْمَ …',
      develop: 'Add the place and number: فِي … · فِيهِ … طَالِبًا.',
      stretch: 'Add your opinion with بِالإِضَافَةِ إِلَى ذٰلِكَ and لِذٰلِكَ.',
    },
    phrases: [['يَبْدَأُ اليَوْمُ المَدْرَسِيُّ فِي …', 'the school day starts at …'], ['النَّادِي يَوْمَ … فِي السَّاعَةِ …', 'the club is on … at …'], ['بِالإِضَافَةِ إِلَى ذٰلِكَ …', 'in addition …'], ['لِذٰلِكَ أُرِيدُ أَنْ …', 'so I want to …']],
  },
  task: {
    title: 'An email to my pen-friend in Jordan', ar: 'رِسَالَةٌ إِلَى صَدِيقِي فِي الأُرْدُنِّ',
    text: 'Write an email (about 50–70 words) in three paragraphs, using the facts you collected today. Paragraph 1: greeting + the school you visited. Paragraph 2: the school day and one club (day, time, place, number of students). Paragraph 3: your opinion with a reason, and a closing. Use at least four connectors.',
    range: [45, 90],
    phrases: [['عَزِيزِي … / عَزِيزَتِي …', 'dear … (m. / f.)'], ['زُرْتُ مَدْرَسَةَ … ، وَهِيَ …', 'I visited … school, and it is …'], ['يَبْدَأُ اليَوْمُ فِي … ، وَيَنْتَهِي فِي …', 'the day starts at … and ends at …'], ['بِالإِضَافَةِ إِلَى ذٰلِكَ … · لِذٰلِكَ …', 'in addition … · so …']],
    coreFrames: [
      { ar: 'عَزِيزِي / عَزِيزَتِي ______ ،', en: '¶1 Dear …,' },
      { ar: 'زُرْتُ مَدْرَسَةَ ______ ، وَهِيَ ______ .', en: '¶1 I visited … school, and it is …' },
      { ar: 'يَبْدَأُ اليَوْمُ فِي ______ ، وَيَنْتَهِي فِي ______ .', en: '¶2 The day starts at … and ends at …' },
      { ar: 'نَادِي ______ يَوْمَ ______ فِي السَّاعَةِ ______ .', en: '¶2 The … club is on … at …' },
      { ar: 'مَعَ تَحِيَّاتِي، ______', en: '¶3 With my greetings, (name)' },
    ],
    developFrames: [
      { ar: 'بِالإِضَافَةِ إِلَى ذٰلِكَ، ______ .', en: '¶2 In addition, …' },
      { ar: 'فِي رَأْيِي المَدْرَسَةُ ______ ، لِذٰلِكَ ______ .', en: '¶3 In my opinion the school is …, so …' },
      { ar: 'وَأَنْتَ / وَأَنْتِ، مَا نَادِيكَ / نَادِيكِ المُفَضَّلُ؟', en: '¶3 And you, what is your favourite club?' },
    ],
    bank: ['عَزِيزِي · عَزِيزَتِي', 'زُرْتُ', 'يَبْدَأُ · يَنْتَهِي', 'نَادِي …', 'فِي السَّاعَةِ …', 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'لِذٰلِكَ · لِأَنَّ', 'مَعَ تَحِيَّاتِي'],
    model: {
      text: `عَزِيزِي سَامِي،
السَّلَامُ عَلَيْكُمْ! زُرْتُ أَمْسِ مَدْرَسَةَ النُّورِ، وَهِيَ كَبِيرَةٌ وَجَمِيلَةٌ.
يَبْدَأُ اليَوْمُ فِي السَّاعَةِ الثَّامِنَةِ وَالنِّصْفِ، وَيَنْتَهِي فِي الثَّالِثَةِ وَالرُّبْعِ. بِالإِضَافَةِ إِلَى ذٰلِكَ، فِيهَا نَادِي رُوبُوتَاتٍ يَوْمَ الأَرْبِعَاءِ فِي مُخْتَبَرِ العُلُومِ، وَفِيهِ خَمْسَةَ عَشَرَ طَالِبًا.
فِي رَأْيِي المَدْرَسَةُ مُمْتَازَةٌ لِأَنَّ المُعَلِّمِينَ لُطَفَاءُ، لِذٰلِكَ أُرِيدُ أَنْ أَدْرُسَ فِيهَا. وَأَنْتَ، مَا نَادِيكَ المُفَضَّلُ؟
مَعَ تَحِيَّاتِي، آدَمُ`,
      en: '“Dear Sami, peace be upon you! Yesterday I visited Al-Nour School, and it is big and beautiful. / The day starts at half past eight and ends at a quarter past three. In addition, it has a robotics club on Wednesday in the science lab, with fifteen students. / In my opinion the school is excellent because the teachers are kind, so I want to study there. And you, what is your favourite club? With my greetings, Adam”',
      find: ['زُرْتُ أَمْسِ', 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'خَمْسَةَ عَشَرَ طَالِبًا', 'لِذٰلِكَ أُرِيدُ'],
    },
  },
});
