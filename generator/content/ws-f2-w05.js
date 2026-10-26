'use strict';
/* Apply Workshop · F2-W05 · F2-L09 (listening to introductions, reporting) + F2-L10 (greetings and identity). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f2-w05', pair: ['f2-l09', 'f2-l10'],
  title: 'Identity Interview', arShort: 'مُقَابَلَةٌ عَنِ الهُوِيَّةِ',
  focus: 'Students listen, ask and report: they interview a partner about family, languages at home and customs, retell the answers with “he / she”, talk about their own identity and write a report that joins what they heard with their own identity.',
  dialogue: {
    title: 'Listen and report', ar: 'اسْتَمِعْ وَأَخْبِرْ',
    lines: [
      ['A', 'مِنْ أَيْنَ عَائِلَتُكِ؟', 'Where is your family from?'],
      ['B', 'عَائِلَتِي مِنَ المَغْرِبِ، وَأَنَا أَسْكُنُ فِي لِيدْز.', 'My family is from Morocco, and I live in Leeds.'],
      ['A', 'مَا لُغَتُكِ فِي البَيْتِ؟', 'What is your language at home?'],
      ['B', 'فِي البَيْتِ نَتَكَلَّمُ العَرَبِيَّةَ وَالفَرَنْسِيَّةَ.', 'At home we speak Arabic and French.'],
      ['A', 'مَاذَا تُقَدِّمُ عَائِلَتُكِ لِلضُّيُوفِ؟', 'What does your family offer guests?'],
      ['B', 'نُقَدِّمُ الشَّايَ بِالنَّعْنَاعِ. أَنَا فَخُورَةٌ بِعَائِلَتِي!', 'We offer mint tea. I am proud of my family!'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: A retells B’s answers to the group with “she”: عَائِلَتُهَا مِنَ المَغْرِبِ، وَهِيَ تَسْكُنُ فِي …',
    notes: 'The questions about family, home language and guests come from F2-L10; the retelling with he / she (listening for details) from F2-L09. Hedge cultural statements: customs differ between families.',
  },
  card: {
    title: 'Role-play card — the class identity survey', ar: 'اسْتِبْيَانُ الصَّفِّ', you: 'the student being interviewed', them: 'the interviewer',
    mix: 'answering identity questions (F2-L10) and then reporting another person’s answers with he / she (F2-L09)',
    tasks: [
      { ex: 'مِنْ أَيْنَ عَائِلَتُكَ؟', task: 'Say where your family is from and where you live.', plan: 'مِنْ أَيْنَ ← عَائِلَتِي مِنْ … ، وَأَسْكُنُ فِي …', model: 'عَائِلَتِي مِنْ بَاكِسْتَانَ، وَأَنَا أَسْكُنُ فِي بِرَادْفُورْد.', modelEn: 'My family is from Pakistan, and I live in Bradford.' },
      { ex: 'مَا لُغَتُكَ فِي البَيْتِ؟', task: 'Name the languages you speak at home.', plan: 'مَا ← فِي البَيْتِ نَتَكَلَّمُ …', model: 'فِي البَيْتِ نَتَكَلَّمُ الأُرْدِيَّةَ وَالإِنْجِلِيزِيَّةَ.', modelEn: 'At home we speak Urdu and English.' },
      { ex: 'كَيْفَ تُسَلِّمُ عَلَى جَدِّكَ؟', task: 'Describe one greeting custom.', plan: 'كَيْفَ ← أَقُولُ … وَأُقَبِّلُ …', model: 'أَقُولُ «السَّلَامُ عَلَيْكُمْ»، وَأُقَبِّلُ يَدَهُ أَحْيَانًا.', modelEn: 'I say “peace be upon you”, and sometimes I kiss his hand.' },
      { ex: 'بِمَاذَا أَنْتَ فَخُورٌ؟ وَلِمَاذَا؟', task: 'Say what you are proud of and why.', plan: 'بِمَاذَا ← أَنَا فَخُورٌ بِعَائِلَتِي … لِأَنَّ …', model: 'أَنَا فَخُورٌ بِعَائِلَتِي لِأَنَّهَا كَرِيمَةٌ.', modelEn: 'I am proud of my family because it is generous.' },
      { unexpected: true, ex: 'اسْمَعْ: «اسْمِي نُورٌ، وَعُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً، وَأَنَا مِنْ تُونِسَ.» — أَخْبِرْنِي عَنْهَا.', task: 'Listen, then report with “she”.', plan: 'أَخْبِرْ ← اسْمُهَا … عُمْرُهَا … هِيَ مِنْ …', model: 'اسْمُهَا نُورٌ، وَعُمْرُهَا أَرْبَعَ عَشْرَةَ سَنَةً، وَهِيَ مِنْ تُونِسَ.', modelEn: 'Her name is Nour, she is fourteen, and she is from Tunisia.' },
    ],
    girl: 'مِنْ أَيْنَ عَائِلَتُكِ؟ · مَا لُغَتُكِ؟ · كَيْفَ تُسَلِّمِينَ عَلَى جَدِّكِ؟ · بِمَاذَا أَنْتِ فَخُورَةٌ؟',
  },
  talk: {
    title: 'My identity in 45 seconds', ar: 'هُوِيَّتِي',
    text: 'Talk for 30–45 seconds about your identity: where your family is from, where you live, your languages at home, one custom (greetings or guests) and what you are proud of. Your partner listens and then retells TWO facts with “he” or “she”.',
    routes: {
      core: 'عَائِلَتِي مِنْ … · أَسْكُنُ فِي … · فِي البَيْتِ نَتَكَلَّمُ …',
      develop: 'Add a custom: عِنْدَمَا يَزُورُنَا ضَيْفٌ، نُقَدِّمُ …',
      stretch: 'Add أَنَا فَخُورٌ / فَخُورَةٌ بِعَائِلَتِي لِأَنَّ … and one thing that is similar (مُتَشَابِهٌ) or different (مُخْتَلِفٌ).',
    },
    phrases: [['عَائِلَتِي مِنْ …', 'my family is from …'], ['فِي البَيْتِ نَتَكَلَّمُ …', 'at home we speak …'], ['نُقَدِّمُ لِلضُّيُوفِ …', 'we offer guests …'], ['هُوَ / هِيَ مِنْ … ، وَيَتَكَلَّمُ / وَتَتَكَلَّمُ …', 'he / she is from … and speaks …']],
  },
  task: {
    title: 'Our identities: a class blog post', ar: 'هُوِيَّاتُنَا',
    text: 'Write a blog post (about 45–65 words) in two parts. Part 1 · MY PARTNER (what you heard): name and age · where the family is from · languages at home · one custom. Part 2 · ME: where my family is from · my languages · what I am proud of, and why. Finish with one thing that is similar or different.',
    range: [40, 80],
    phrases: [['اسْمُهُ / اسْمُهَا … وَعُمْرُهُ / وَعُمْرُهَا …', 'his / her name is … and he / she is …'], ['عَائِلَتُهُ / عَائِلَتُهَا مِنْ …', 'his / her family is from …'], ['فِي البَيْتِ يَتَكَلَّمُونَ …', 'at home they speak …'], ['أَنَا فَخُورٌ / فَخُورَةٌ بِعَائِلَتِي لِأَنَّ …', 'I am proud of my family because …']],
    coreFrames: [
      { ar: 'زَمِيلِي / زَمِيلَتِي اسْمُهُ / اسْمُهَا ______ .', en: 'My classmate is called …' },
      { ar: 'عَائِلَتُهُ / عَائِلَتُهَا مِنْ ______ .', en: 'His / her family is from …' },
      { ar: 'فِي البَيْتِ يَتَكَلَّمُونَ ______ .', en: 'At home they speak …' },
      { ar: 'وَأَنَا، عَائِلَتِي مِنْ ______ .', en: 'And me: my family is from …' },
      { ar: 'أَنَا فَخُورٌ / فَخُورَةٌ بِعَائِلَتِي / بِبَلَدِي.', en: 'I am proud of my family / my country.' },
    ],
    developFrames: [
      { ar: 'عِنْدَمَا يَزُورُهُمْ ضَيْفٌ، يُقَدِّمُونَ ______ .', en: 'When a guest visits them, they offer …' },
      { ar: '… لِأَنَّ ______ .', en: '… because …' },
      { ar: 'نَحْنُ مُخْتَلِفَانِ / مُتَشَابِهَانِ فِي ______ .', en: 'We are different / similar in …' },
    ],
    bank: ['عَائِلَةٌ', 'هُوِيَّةٌ', 'ثَقَافَةٌ', 'عَادَاتٌ', 'ضِيَافَةٌ', 'فَخُورٌ بِعَائِلَتِي', 'مُتَشَابِهٌ · مُخْتَلِفٌ', 'أَحْيَانًا'],
    model: {
      text: 'زَمِيلَتِي اسْمُهَا نُورٌ، وَعُمْرُهَا أَرْبَعَ عَشْرَةَ سَنَةً. عَائِلَتُهَا مِنَ المَغْرِبِ، وَفِي البَيْتِ يَتَكَلَّمُونَ العَرَبِيَّةَ وَالفَرَنْسِيَّةَ. عِنْدَمَا يَزُورُهُمْ ضَيْفٌ، يُقَدِّمُونَ الشَّايَ بِالنَّعْنَاعِ. وَأَنَا، عَائِلَتِي مِنَ الصُّومَالِ، وَأَتَكَلَّمُ الصُّومَالِيَّةَ وَالإِنْجِلِيزِيَّةَ. أَنَا فَخُورٌ بِعَائِلَتِي لِأَنَّهَا كَرِيمَةٌ. نَحْنُ مُخْتَلِفَانِ فِي اللُّغَةِ، لٰكِنَّنَا نُحِبُّ الضِّيَافَةَ!',
      en: '“My classmate is called Nour, and she is fourteen. Her family is from Morocco, and at home they speak Arabic and French. When a guest visits them, they offer mint tea. As for me, my family is from Somalia, and I speak Somali and English. I am proud of my family because it is generous. We are different in language, but we both love hospitality!”',
      find: ['اسْمُهَا نُورٌ', 'عَائِلَتُهَا مِنَ المَغْرِبِ', 'يُقَدِّمُونَ الشَّايَ', 'أَنَا فَخُورٌ بِعَائِلَتِي'],
    },
  },
});
