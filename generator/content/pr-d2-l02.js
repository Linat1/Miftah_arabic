'use strict';
/* Practice Room · D2-L02 · Relationships — family, friends and how we get on. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd2-l02',
  arShort: 'العَلَاقَاتُ',
  grammar: 'relationship verbs with their prepositions (atafāhamu maʿa · akhtalifu maʿa · athiqu bi- · aḥtarimu); object suffixes (yadʿamunī · aḥtarimuhā · usāʿiduhu); reciprocal we-verbs (natashājaru · natasālaḥu); always give the reason',
  focus: 'Students run their own speaking and writing practice about relationships: say the relationship verbs, act a short dialogue, answer question cards, do a role-play card giving advice to a friend after an argument, give a one-minute talk about three relationships, then build, fix and write a forum post about the people closest to them.',
  words1: 'Getting on', words2: 'Relationships and linking',
  pick: [0, 1, 3, 5, 6, 7, 8, 9, 10, 11, 15, 16],
  dialogue: {
    title: 'Who do you get on with?', ar: 'مَعَ مَنْ تَتَفَاهَمُ؟',
    lines: [
      ['A', 'مَعَ مَنْ تَتَفَاهَمُ أَكْثَرَ فِي عَائِلَتِكَ؟', 'Who do you get on with most in your family?'],
      ['B', 'أَتَفَاهَمُ مَعَ أَبِي جِدًّا، لِأَنَّهُ يَدْعَمُنِي دَائِمًا.', 'I get on with my dad very well, because he always supports me.'],
      ['A', 'وَأَخُوكَ الكَبِيرُ؟', 'And your older brother?'],
      ['B', 'أَحْيَانًا نَتَشَاجَرُ عَلَى الحَاسُوبِ، ثُمَّ نَتَصَالَحُ بِسُرْعَةٍ.', 'Sometimes we argue over the computer, then we make up quickly.'],
      ['A', 'وَمَنْ صَدِيقُكَ المُقَرَّبُ؟', 'And who is your close friend?'],
      ['B', 'عُمَرُ. أَثِقُ بِهِ كَثِيرًا، وَنَقْضِي الوَقْتَ مَعًا كُلَّ عُطْلَةٍ.', 'Omar. I trust him a lot, and we spend time together every holiday.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: answer about YOUR family — each answer needs a reason with لِأَنَّ.',
  },
  questions: [
    { q: 'مَعَ مَنْ تَتَفَاهَمُ فِي عَائِلَتِكَ؟ لِمَاذَا؟', en: 'Who do you get on with in your family? Why?', start: 'أَتَفَاهَمُ مَعَ … لِأَنَّهُ / لِأَنَّهَا …', more: '… مَثَلًا …' },
    { q: 'مَعَ مَنْ تَخْتَلِفُ أَحْيَانًا؟', en: 'Who do you sometimes disagree with?', start: 'أَخْتَلِفُ مَعَ … عَلَى …', more: '… وَلٰكِنْ نَتَصَالَحُ …' },
    { q: 'مَنْ يَدْعَمُكَ فِي الدِّرَاسَةِ؟', en: 'Who supports you in your studies?', start: 'يَدْعَمُنِي … / تَدْعَمُنِي …', more: '… عِنْدَمَا …' },
    { q: 'مَا الصِّفَةُ المُهِمَّةُ فِي الصَّدِيقِ المُقَرَّبِ؟', en: 'What is the important quality in a close friend?', start: 'فِي رَأْيِي الصِّدْقُ …', more: '… لِأَنَّنِي أَثِقُ …' },
    { q: 'كَيْفَ تَتَصَالَحُ مَعَ صَدِيقِكَ بَعْدَ مُشْكِلَةٍ؟', en: 'How do you make up with your friend after a problem?', start: 'أَتَّصِلُ بِهِ / أَعْتَذِرُ …', more: '… ثُمَّ نَقْضِي …' },
  ],
  card: {
    title: 'Role-play card — advising a friend after an argument', ar: 'نَصِيحَةٌ لِصَدِيقٍ', you: 'a good friend', them: 'a friend who argued with their sister',
    tasks: [
      { ex: 'تَشَاجَرْتُ مَعَ أُخْتِي أَمْسِ.', task: 'Ask why.', plan: 'لِمَاذَا ← لِمَاذَا تَشَاجَرْتُمَا؟', model: 'أَنَا آسِفٌ! لِمَاذَا تَشَاجَرْتُمَا؟', modelEn: 'I’m sorry! Why did you two argue?' },
      { ex: 'أَخَذَتْ هَاتِفِي بِدُونِ إِذْنٍ.', task: 'Show understanding.', plan: 'أَفْهَمُ ← أَفْهَمُ، وَلٰكِنَّ …', model: 'أَفْهَمُ ذٰلِكَ، وَلٰكِنَّهَا تُحِبُّكَ وَتَدْعَمُكَ دَائِمًا.', modelEn: 'I understand, but she loves you and always supports you.' },
      { ex: 'مَاذَا أَفْعَلُ؟', task: 'Give advice + reason.', plan: '', model: 'تَكَلَّمْ مَعَهَا بِهُدُوءٍ، لِأَنَّ العَلَاقَةَ القَوِيَّةَ أَهَمُّ مِنَ الهَاتِفِ.', modelEn: 'Talk to her calmly, because a strong relationship matters more than the phone.' },
      { unexpected: true, ex: 'وَأَنْتَ، هَلْ تَتَشَاجَرُ مَعَ إِخْوَتِكَ؟', task: 'Answer the surprise question.', plan: '', model: 'أَحْيَانًا، وَلٰكِنَّنَا نَتَصَالَحُ قَبْلَ النَّوْمِ دَائِمًا.', modelEn: 'Sometimes, but we always make up before bedtime.' },
    ],
    girl: 'to a girl: تَكَلَّمِي · تَتَشَاجَرِينَ · إِخْوَتِكِ · تُحِبُّكِ',
    notes: 'Object suffixes in action: tadʿamuka · tuḥibbuka; imperative for advice.',
  },
  talk: {
    title: 'One minute: three relationships', ar: 'ثَلَاثُ عَلَاقَاتٍ',
    text: 'Talk for one minute about three people: one you get on with, one you sometimes disagree with, and one you trust. Give a reason for each.',
    routes: {
      core: 'One sentence + لِأَنَّ for each person.',
      develop: 'Add object suffixes (يَدْعَمُنِي · أَحْتَرِمُهَا) and a we-verb (نَتَصَالَحُ).',
      stretch: 'Add an example of a real moment and عَلَى الرَّغْمِ مِنْ أَنَّ …',
    },
  },
  builder: [
    { en: 'I respect my teacher because she supports me.', cols: [['أَحْتَرِمُ مُعَلِّمَتِي', 'أَحْتَرِمُ مُعَلِّمَتِيَ'], ['لِأَنَّهَا', 'لِأَنَّهُ'], ['تَدْعَمُنِي.', 'يَدْعَمُنِي.']], key: [0, 0, 0], why: 'Teacher (f.) → لِأَنَّهَا + تَدْعَمُنِي.' },
    { en: 'I get on with my cousin, but we argue sometimes.', cols: [['أَتَفَاهَمُ مَعَ', 'أَتَفَاهَمُ فِي'], ['ابْنِ عَمِّي،', 'ابْنُ عَمِّي،'], ['وَلٰكِنَّنَا نَتَشَاجَرُ أَحْيَانًا.', 'وَلٰكِنَّنَا يَتَشَاجَرُ أَحْيَانًا.']], key: [0, 0, 0], why: 'أَتَفَاهَمُ مَعَ + genitive; we → نَتَشَاجَرُ.' },
    { en: 'I trust my friend completely.', cols: [['أَثِقُ', 'أَثِقُ أَنْ'], ['بِصَدِيقِي', 'صَدِيقِي'], ['تَمَامًا.', 'تَمَامٌ.']], key: [0, 0, 0], why: 'أَثِقُ takes bi-: بِصَدِيقِي.' },
  ],
  errors: [
    { wrong: 'أَثِقُ صَدِيقَتِي.', hint: 'Which preposition?', right: 'أَثِقُ بِصَدِيقَتِي.', why: 'أَثِقُ + bi-.' },
    { wrong: 'أُمِّي يَدْعَمُنِي.', hint: 'Mother → ?', right: 'أُمِّي تَدْعَمُنِي.', why: 'She → ta-.' },
    { wrong: 'أَحْتَرِمُ جَدِّي لِأَنَّهَا حَكِيمٌ.', hint: 'Grandfather → which pronoun?', right: 'أَحْتَرِمُ جَدِّي لِأَنَّهُ حَكِيمٌ.', why: 'He → لِأَنَّهُ.' },
  ],
  task: {
    title: 'A forum post: the people closest to me', ar: 'مُنْتَدَى: أَقْرَبُ النَّاسِ إِلَيَّ',
    text: 'Write a forum post (about 60–80 words) about your relationships. Include: • someone you get on with and why • someone you trust and why • a time you disagree or argue — and how you make up • two object suffixes (يَدْعَمُنِي · أَحْتَرِمُهُ …) • your opinion: what makes a strong relationship?',
    phrases: [['أَتَفَاهَمُ مَعَ … لِأَنَّ …', 'I get on with … because …'], ['أَثِقُ بِصَدِيقِي / بِأُمِّي …', 'I trust my friend / my mum …'], ['نَتَشَاجَرُ أَحْيَانًا ثُمَّ نَتَصَالَحُ', 'we argue sometimes, then make up'], ['فِي رَأْيِي العَلَاقَةُ القَوِيَّةُ تَحْتَاجُ إِلَى …', 'in my opinion a strong relationship needs …']],
    coreFrames: [
      { ar: 'أَتَفَاهَمُ مَعَ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I get on with … because he / she …' },
      { ar: 'أَثِقُ بِ______ ، لِأَنَّ ______ .', en: 'I trust …, because …' },
      { ar: 'أَحْيَانًا أَخْتَلِفُ مَعَ ______ عَلَى ______ .', en: 'Sometimes I disagree with … about …' },
      { ar: 'فِي رَأْيِي ______ .', en: 'In my opinion …' },
    ],
    developFrames: [
      { ar: '______ يَدْعَمُنِي / تَدْعَمُنِي عِنْدَمَا ______ .', en: '… supports me when …' },
      { ar: 'نَتَشَاجَرُ أَحْيَانًا، وَلٰكِنَّنَا ______ .', en: 'We argue sometimes, but we …' },
    ],
    bank: ['أَتَفَاهَمُ مَعَ', 'أَخْتَلِفُ مَعَ', 'أَحْتَرِمُ', 'يَدْعَمُنِي · تَدْعَمُنِي', 'نَتَشَاجَرُ · نَتَصَالَحُ', 'صَدِيقٌ مُقَرَّبٌ', 'عَلَاقَةٌ قَوِيَّةٌ', 'عَلَى الرَّغْمِ مِنْ أَنَّ'],
    model: {
      text: 'أَتَفَاهَمُ مَعَ أُمِّي جِدًّا، لِأَنَّهَا تَسْمَعُنِي وَتَدْعَمُنِي فِي كُلِّ شَيْءٍ. صَدِيقَتِي المُقَرَّبَةُ هِيَ نُورٌ، وَأَثِقُ بِهَا تَمَامًا لِأَنَّهَا صَادِقَةٌ وَلَا تُخْبِرُ أَحَدًا بِأَسْرَارِي. أَمَّا أَخِي الصَّغِيرُ فَنَتَشَاجَرُ أَحْيَانًا عَلَى التِّلْفَازِ، وَلٰكِنَّنَا نَتَصَالَحُ بِسُرْعَةٍ، لِأَنَّنِي أُحِبُّهُ وَأَحْتَرِمُهُ. عَلَى الرَّغْمِ مِنْ أَنَّنَا مُخْتَلِفَانِ، نَقْضِي الوَقْتَ مَعًا كُلَّ مَسَاءٍ. فِي رَأْيِي العَلَاقَةُ القَوِيَّةُ تَحْتَاجُ إِلَى الصِّدْقِ وَالاحْتِرَامِ وَالصَّبْرِ أَيْضًا.',
      en: '“I get on very well with my mum, because she listens to me and supports me in everything. My close friend is Nour, and I trust her completely because she is honest and never tells anyone my secrets. As for my little brother, we argue sometimes over the TV, but we make up quickly, because I love him and respect him. Although we are different, we spend time together every evening. In my opinion a strong relationship needs honesty, respect and patience too.”',
      find: ['وَتَدْعَمُنِي', 'وَأَثِقُ بِهَا', 'نَتَصَالَحُ بِسُرْعَةٍ', 'عَلَى الرَّغْمِ مِنْ أَنَّنَا'],
    },
  },
  checkCore: 'use relationship verbs with the right preposition (مَعَ · بِ…)?',
  checkDevelop: 'use object suffixes (يَدْعَمُنِي · أَحْتَرِمُهُ) and give a reason every time?',
});
