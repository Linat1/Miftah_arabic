'use strict';
/* Apply Workshop · F5-W04 · F5-L07 (the body and its parts) + F5-L08 (health problems and how you feel). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f5-w04', pair: ['f5-l07', 'f5-l08'],
  title: 'At the School Nurse', arShort: 'عِنْدَ مُمَرِّضَةِ المَدْرَسَةِ',
  focus: 'Students join body parts with illness: at the school nurse’s office they say where it hurts (with the right body part and duals), what they have and since when, describe how they feel, and then write an absence message that uses both lessons.',
  dialogue: {
    title: 'What is wrong?', ar: 'مَاذَا بِكَ؟',
    lines: [
      ['A', 'مَاذَا بِكَ يَا عَلِيُّ؟ كَيْفَ تَشْعُرُ؟', 'What is wrong, Ali? How do you feel?'],
      ['B', 'أَنَا مَرِيضٌ. عِنْدِي صُدَاعٌ، وَأَشْعُرُ بِالتَّعَبِ.', 'I am ill. I have a headache, and I feel tired.'],
      ['A', 'مُنْذُ مَتَى؟', 'Since when?'],
      ['B', 'مُنْذُ أَمْسِ. وَعِنْدِي أَلَمٌ فِي أُذُنِي اليُمْنَى أَيْضًا.', 'Since yesterday. And I have a pain in my right ear too.'],
      ['A', 'هَلْ عِنْدَكَ حُمَّى؟', 'Do you have a fever?'],
      ['B', 'لَا، لٰكِنَّ عَيْنَيَّ حَمْرَاوَانِ، وَحَلْقِي يُؤْلِمُنِي.', 'No, but my eyes are red, and my throat hurts.'],
    ],
    notes: 'Body parts and duals (أُذُنِي · عَيْنَيَّ — ear and eye are feminine) come from F5-L07; illnesses, عِنْدِي أَلَمٌ فِي … and مُنْذُ … from F5-L08.',
  },
  card: {
    title: 'Role-play card — the school nurse’s office', ar: 'مَكْتَبُ المُمَرِّضَةِ', you: 'the student who feels ill', them: 'the school nurse',
    mix: 'body parts, duals and feminine body words (F5-L07) with illnesses, pain, feelings and مُنْذُ (F5-L08)',
    tasks: [
      { ex: 'أَهْلًا! كَيْفَ تَشْعُرُ؟', task: 'Say you are ill and how you feel.', plan: 'كَيْفَ ← أَنَا مَرِيضٌ … أَشْعُرُ بِالتَّعَبِ', model: 'أَنَا مَرِيضٌ، وَأَشْعُرُ بِالتَّعَبِ.', modelEn: 'I am ill, and I feel tired.' },
      { ex: 'أَيْنَ الأَلَمُ؟', task: 'Name the body part that hurts.', plan: 'أَيْنَ ← عِنْدِي أَلَمٌ فِي …', model: 'عِنْدِي أَلَمٌ فِي رَأْسِي وَفِي ظَهْرِي.', modelEn: 'I have a pain in my head and in my back.' },
      { ex: 'مَاذَا عِنْدَكَ؟', task: 'Name two problems.', plan: 'مَاذَا ← عِنْدِي … وَ…', model: 'عِنْدِي زُكَامٌ وَسُعَالٌ.', modelEn: 'I have a cold and a cough.' },
      { ex: 'مُنْذُ مَتَى أَنْتَ مَرِيضٌ؟', task: 'Say since when.', plan: 'مُنْذُ مَتَى ← مُنْذُ …', model: 'مُنْذُ يَوْمَيْنِ.', modelEn: 'For two days.' },
      { unexpected: true, ex: 'افْتَحْ فَمَكَ … وَهَلْ تُؤْلِمُكَ عَيْنَاكَ؟', task: 'Answer about your eyes (dual).', plan: 'هَلْ ← نَعَمْ، عَيْنَايَ … / لَا، …', model: 'نَعَمْ، عَيْنَايَ تُؤْلِمَانِنِي قَلِيلًا.', modelEn: 'Yes, my eyes hurt a little.' },
    ],
    girl: 'كَيْفَ تَشْعُرِينَ؟ · مَاذَا عِنْدَكِ؟ · مُنْذُ مَتَى أَنْتِ مَرِيضَةٌ؟ — she answers: أَنَا مَرِيضَةٌ',
    notes: 'Accept a simpler answer for task 5 from Core students: نَعَمْ، عِنْدِي أَلَمٌ فِي عَيْنَيَّ.',
  },
  talk: {
    title: 'The last time I was ill', ar: 'آخِرَ مَرَّةٍ كُنْتُ مَرِيضًا',
    text: 'Talk for 30–45 seconds about a time you were ill (or invent one): what you had, which body parts hurt, since when, how you felt and what you did.',
    routes: {
      core: 'كَانَ عِنْدِي … · عِنْدِي أَلَمٌ فِي …',
      develop: 'Add two body parts (one dual) and مُنْذُ …',
      stretch: 'Add how you felt (أَشْعُرُ بِالتَّعَبِ · بِالبَرْدِ) and what you did: ذَهَبْتُ إِلَى الطَّبِيبِ …',
    },
    phrases: [['عِنْدِي صُدَاعٌ / زُكَامٌ / حُمَّى', 'I have a headache / a cold / a fever'], ['عِنْدِي أَلَمٌ فِي …', 'I have a pain in …'], ['مُنْذُ أَمْسِ · مُنْذُ يَوْمَيْنِ', 'since yesterday · for two days'], ['أَشْعُرُ بِالتَّعَبِ', 'I feel tired']],
  },
  task: {
    title: 'A message from the nurse’s office', ar: 'رِسَالَةٌ مِنْ مَكْتَبِ المُمَرِّضَةِ',
    text: 'Write a message (about 40–60 words) to your teacher or your parents from the nurse’s office. Include: • a polite greeting • that you are ill and how you feel • two problems • which body parts hurt (one dual) • since when • what you will do now.',
    range: [35, 80],
    phrases: [['أَنَا مَرِيضٌ / مَرِيضَةٌ، وَأَشْعُرُ بِالتَّعَبِ', 'I am ill and I feel tired'], ['عِنْدِي … وَعِنْدِي أَلَمٌ فِي …', 'I have … and I have a pain in …'], ['عَيْنَايَ / أُذُنَايَ تُؤْلِمَانِنِي', 'my eyes / ears hurt'], ['مُنْذُ … · سَأَرْجِعُ إِلَى البَيْتِ', 'since … · I will go home']],
    coreFrames: [
      { ar: 'السَّلَامُ عَلَيْكُمْ يَا ______ .', en: 'Peace be upon you, …' },
      { ar: 'أَنَا مَرِيضٌ / مَرِيضَةٌ اليَوْمَ.', en: 'I am ill today.' },
      { ar: 'عِنْدِي ______ وَ ______ .', en: 'I have … and …' },
      { ar: 'عِنْدِي أَلَمٌ فِي ______ .', en: 'I have a pain in my …' },
      { ar: 'مُنْذُ ______ .', en: 'Since …' },
    ],
    developFrames: [
      { ar: 'وَ ______ تُؤْلِمَانِنِي أَيْضًا.', en: 'And my (two) … hurt too.' },
      { ar: 'أَشْعُرُ بِالتَّعَبِ، لِذٰلِكَ ______ .', en: 'I feel tired, so …' },
    ],
    bank: ['رَأْسِي · ظَهْرِي', 'أُذُنِي · عَيْنَايَ', 'يَدِي · رِجْلِي', 'صُدَاعٌ · زُكَامٌ', 'حُمَّى · سُعَالٌ', 'عِنْدِي أَلَمٌ فِي', 'مُنْذُ أَمْسِ', 'أَشْعُرُ بِالتَّعَبِ'],
    model: {
      text: 'السَّلَامُ عَلَيْكُمْ يَا أُمِّي. أَنَا فِي مَكْتَبِ المُمَرِّضَةِ لِأَنِّي مَرِيضٌ اليَوْمَ. عِنْدِي زُكَامٌ وَسُعَالٌ مُنْذُ أَمْسِ. عِنْدِي أَلَمٌ فِي رَأْسِي وَفِي حَلْقِي، وَعَيْنَايَ تُؤْلِمَانِنِي قَلِيلًا. أَشْعُرُ بِالتَّعَبِ، لِذٰلِكَ قَالَتِ المُمَرِّضَةُ: يَجِبُ أَنْ تَرْجِعَ إِلَى البَيْتِ. هَلْ يُمْكِنُ أَنْ تَأْتِي إِلَى المَدْرَسَةِ، مِنْ فَضْلِكِ؟',
      en: '“Peace be upon you, Mum. I am in the nurse’s office because I am ill today. I have had a cold and a cough since yesterday. I have a pain in my head and in my throat, and my eyes hurt a little. I feel tired, so the nurse said: you must go home. Can you come to school, please?”',
      find: ['مُنْذُ أَمْسِ', 'عِنْدِي أَلَمٌ فِي رَأْسِي', 'عَيْنَايَ تُؤْلِمَانِنِي', 'أَشْعُرُ بِالتَّعَبِ'],
    },
  },
});
