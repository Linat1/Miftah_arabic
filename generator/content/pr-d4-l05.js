'use strict';
/* Practice Room · D4-L05 · The digital world — technology and social media. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd4-l05',
  arShort: 'العَالَمُ الرَّقْمِيُّ',
  grammar: 'digital verbs with their prepositions: yatafāʿalu maʿa · yuʿalliqu ʿalā · yabḥathu ʿan · yatawāṣalu maʿa; benefits and risks (min fawāʾidihā anna … · min makhāṭirihā anna …); a balanced view: min nāḥiyatin … wa-min nāḥiyatin ukhrā …; a qualified judgement (ilā ḥaddin mā · bi-sharṭi an …)',
  focus: 'Students run their own speaking and writing practice about technology: say the digital words, act a short dialogue, answer question cards, do a role-play card with a parent worried about screen time, give a one-minute balanced talk, then build, fix and write a balanced blog post about social media.',
  words1: 'Digital words', words2: 'Digital verbs',
  dialogue: {
    title: 'How do you use your phone?', ar: 'كَيْفَ تَسْتَخْدِمُ هَاتِفَكَ؟',
    lines: [
      ['A', 'كَيْفَ تَسْتَخْدِمُ الإِنْتَرْنِت عَادَةً؟', 'How do you usually use the internet?'],
      ['B', 'أَبْحَثُ عَنْ مَعْلُومَاتٍ لِلْوَاجِبِ، وَأَتَوَاصَلُ مَعَ أَصْدِقَائِي.', 'I look for information for homework, and I keep in touch with friends.'],
      ['A', 'وَهَلْ تَنْشُرُ صُوَرًا؟', 'Do you post photos?'],
      ['B', 'نَادِرًا. أُفَضِّلُ أَنْ أُعَلِّقَ عَلَى مَنْشُورَاتِ الآخَرِينَ.', 'Rarely. I prefer to comment on other people’s posts.'],
      ['A', 'هَلْ وَسَائِلُ التَّوَاصُلِ مُفِيدَةٌ فِي رَأْيِكَ؟', 'Is social media useful, in your opinion?'],
      ['B', 'مِنْ نَاحِيَةٍ، تُقَرِّبُ النَّاسَ، وَمِنْ نَاحِيَةٍ أُخْرَى، تُضَيِّعُ الوَقْتَ. هِيَ مُفِيدَةٌ إِلَى حَدٍّ مَا.', 'On one hand it brings people together; on the other, it wastes time. It is useful to some extent.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: describe YOUR real use — and give a balanced view.',
  },
  questions: [
    { q: 'كَمْ سَاعَةً تَقْضِي عَلَى الشَّاشَةِ يَوْمِيًّا؟', en: 'How many hours a day on screens?', start: 'أَقْضِي حَوَالَيْ … سَاعَاتٍ', more: '… خُصُوصًا فِي …' },
    { q: 'مَعَ مَنْ تَتَوَاصَلُ عَلَى الإِنْتَرْنِت؟', en: 'Who do you keep in touch with online?', start: 'أَتَوَاصَلُ مَعَ …', more: '… لِأَنَّهُمْ …' },
    { q: 'مَا أَفْضَلُ تَطْبِيقٍ عِنْدَكَ؟ لِمَاذَا؟', en: 'Your best app? Why?', start: 'أَفْضَلُ تَطْبِيقٍ … لِأَنَّهُ …', more: '… مَثَلًا …' },
    { q: 'مَا مَخَاطِرُ وَسَائِلِ التَّوَاصُلِ؟', en: 'What are the risks of social media?', start: 'مِنْ مَخَاطِرِهَا أَنَّ …', more: '… لِذٰلِكَ يَجِبُ أَنْ …' },
    { q: 'هَلِ التَّعَلُّمُ عَنْ بُعْدٍ مُفِيدٌ؟', en: 'Is distance learning useful?', start: 'إِلَى حَدٍّ مَا، لِأَنَّ …', more: '… وَلٰكِنَّ …' },
  ],
  card: {
    title: 'Role-play card — a parent is worried about screen time', ar: 'أُمٌّ قَلِقَةٌ', you: 'a teenager', them: 'your mother or father',
    tasks: [
      { ex: 'أَنْتَ عَلَى الهَاتِفِ طُولَ الوَقْتِ! مَاذَا تَفْعَلُ؟', task: 'Explain your use.', plan: 'أَفْعَلُ ← أَبْحَثُ عَنْ … وَأَتَوَاصَلُ مَعَ …', model: 'أَبْحَثُ عَنْ مَعْلُومَاتٍ لِلْمَشْرُوعِ، وَأَتَوَاصَلُ مَعَ فَرِيقِي.', modelEn: 'I am looking up information for the project and talking to my team.' },
      { ex: 'وَلٰكِنَّ الشَّاشَةَ تَضُرُّ عَيْنَيْكَ.', task: 'Agree partly.', plan: 'إِلَى حَدٍّ مَا ← مَعَكِ حَقٌّ إِلَى حَدٍّ مَا، وَلٰكِنَّ …', model: 'مَعَكِ حَقٌّ إِلَى حَدٍّ مَا، وَلٰكِنَّ الهَاتِفَ يُسَاعِدُنِي فِي الدِّرَاسَةِ.', modelEn: 'You’re right to some extent, but the phone helps me study.' },
      { ex: 'مَا اقْتِرَاحُكَ؟', task: 'A compromise.', plan: '', model: 'أَقْتَرِحُ سَاعَتَيْنِ يَوْمِيًّا، بِشَرْطِ أَنْ أُكْمِلَ وَاجِبِي أَوَّلًا.', modelEn: 'I suggest two hours a day, on condition that I finish my homework first.' },
      { unexpected: true, ex: 'وَهَلْ تَعْرِفُ كَيْفَ تَحْمِي كَلِمَةَ المُرُورِ؟', task: 'Answer about safety.', plan: '', model: 'نَعَمْ، أَسْتَخْدِمُ كَلِمَةَ مُرُورٍ قَوِيَّةً، وَلَا أُشَارِكُهَا مَعَ أَحَدٍ.', modelEn: 'Yes, I use a strong password and don’t share it with anyone.' },
    ],
    girl: 'parent to a girl: أَنْتِ · تَفْعَلِينَ · عَيْنَيْكِ · اقْتِرَاحُكِ · تَعْرِفِينَ · تَحْمِينَ',
    notes: 'Digital verb + preposition every time; a qualified judgement (ilā ḥaddin mā · bi-sharṭi an).',
  },
  talk: {
    title: 'One minute: technology — for and against', ar: 'التِّقْنِيَّةُ: مَعَ وَضِدَّ',
    text: 'Talk for one minute: how you use technology, two benefits, two risks, and a qualified judgement.',
    routes: {
      core: 'Three digital verbs with the right preposition.',
      develop: 'Add مِنْ فَوَائِدِهَا أَنَّ … / مِنْ مَخَاطِرِهَا أَنَّ …',
      stretch: 'Add مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى … and إِلَى حَدٍّ مَا / بِشَرْطِ أَنْ …',
    },
  },
  builder: [
    { en: 'I comment on my friends’ posts.', cols: [['أُعَلِّقُ', 'أُعَلِّقَ'], ['عَلَى', 'مَعَ'], ['مَنْشُورَاتِ أَصْدِقَائِي.', 'مَنْشُورَاتُ أَصْدِقَائِي.']], key: [0, 0, 0], why: 'يُعَلِّقُ عَلَى + genitive.' },
    { en: 'One of its risks is that it wastes time.', cols: [['مِنْ مَخَاطِرِهَا', 'مِنْ مَخَاطِرُهَا'], ['أَنَّهَا', 'أَنْ'], ['تُضَيِّعُ الوَقْتَ.', 'تُضَيِّعَ الوَقْتَ.']], key: [0, 0, 0], why: 'مِنْ + genitive; أَنَّ + pronoun + verb in -u.' },
    { en: 'It is useful, on condition that we use it wisely.', cols: [['هِيَ مُفِيدَةٌ،', 'هِيَ مُفِيدٌ،'], ['بِشَرْطِ أَنْ', 'بِشَرْطِ'], ['نَسْتَخْدِمَهَا بِحِكْمَةٍ.', 'نَسْتَخْدِمُهَا بِحِكْمَةٍ.']], key: [0, 0, 0], why: 'بِشَرْطِ أَنْ + -a.' },
  ],
  errors: [
    { wrong: 'أَتَفَاعَلُ المُتَابِعِينَ كُلَّ يَوْمٍ.', hint: 'Which preposition?', right: 'أَتَفَاعَلُ مَعَ المُتَابِعِينَ كُلَّ يَوْمٍ.', why: 'يَتَفَاعَلُ مَعَ …' },
    { wrong: 'أَبْحَثُ مَعْلُومَاتٍ عَلَى الإِنْتَرْنِت.', hint: 'Look for = ?', right: 'أَبْحَثُ عَنْ مَعْلُومَاتٍ عَلَى الإِنْتَرْنِت.', why: 'يَبْحَثُ عَنْ …' },
    { wrong: 'مِنْ فَوَائِدِهَا أَنَّ التَّوَاصُلُ سَهْلٌ.', hint: 'After أَنَّ …', right: 'مِنْ فَوَائِدِهَا أَنَّ التَّوَاصُلَ سَهْلٌ.', why: 'أَنَّ + noun in -a.' },
  ],
  task: {
    title: 'A balanced blog post: social media', ar: 'مُدَوَّنَةٌ مُتَوَازِنَةٌ: وَسَائِلُ التَّوَاصُلِ',
    text: 'Write a blog post (about 60–80 words): “Social media — friend or enemy?” Include: • how you use it (three digital verbs + prepositions) • two benefits and two risks with أَنَّ • مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى … • a qualified judgement (إِلَى حَدٍّ مَا / بِشَرْطِ أَنْ …).',
    phrases: [['أَتَوَاصَلُ مَعَ … · أُعَلِّقُ عَلَى …', 'I keep in touch with … · I comment on …'], ['مِنْ فَوَائِدِهَا أَنَّ … · مِنْ مَخَاطِرِهَا أَنَّ …', 'a benefit is that … · a risk is that …'], ['مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', 'on one hand … on the other …'], ['هِيَ مُفِيدَةٌ بِشَرْطِ أَنْ …', 'it is useful on condition that …']],
    coreFrames: [
      { ar: 'أَسْتَخْدِمُ وَسَائِلَ التَّوَاصُلِ لِ______ .', en: 'I use social media to …' },
      { ar: 'أَتَوَاصَلُ مَعَ ______ ، وَأُعَلِّقُ عَلَى ______ .', en: 'I keep in touch with …, and comment on …' },
      { ar: 'مِنْ فَوَائِدِهَا أَنَّ ______ .', en: 'One benefit is that …' },
      { ar: 'مِنْ مَخَاطِرِهَا أَنَّ ______ .', en: 'One risk is that …' },
    ],
    developFrames: [
      { ar: 'مِنْ نَاحِيَةٍ ______ ، وَمِنْ نَاحِيَةٍ أُخْرَى ______ .', en: 'On one hand …, on the other …' },
      { ar: 'فِي رَأْيِي هِيَ صَدِيقٌ، بِشَرْطِ أَنْ ______ .', en: 'I think it is a friend, on condition that …' },
    ],
    bank: ['تَطْبِيقٌ · مِنَصَّةٌ', 'كَلِمَةُ المُرُورِ', 'التَّعَلُّمُ عَنْ بُعْدٍ', 'يَنْشُرُ', 'يَتَفَاعَلُ مَعَ', 'يُعَلِّقُ عَلَى', 'يَبْحَثُ عَنْ', 'إِلَى حَدٍّ مَا · بِشَرْطِ أَنْ'],
    model: {
      text: 'أَسْتَخْدِمُ وَسَائِلَ التَّوَاصُلِ كُلَّ يَوْمٍ. أَتَوَاصَلُ مَعَ أَقَارِبِي فِي بَاكِسْتَانَ، وَأُعَلِّقُ عَلَى صُوَرِهِمْ، وَأَبْحَثُ عَنْ فِيدْيُوهَاتٍ تَعْلِيمِيَّةٍ. مِنْ فَوَائِدِهَا أَنَّ العَائِلَةَ تَبْقَى قَرِيبَةً رَغْمَ المَسَافَةِ، وَأَنَّ التَّعَلُّمَ أَصْبَحَ أَسْهَلَ. وَمِنْ مَخَاطِرِهَا أَنَّهَا تُضَيِّعُ الوَقْتَ، وَأَنَّ بَعْضَ المَعْلُومَاتِ غَيْرُ صَحِيحَةٍ. مِنْ نَاحِيَةٍ، هِيَ نَافِذَةٌ عَلَى العَالَمِ، وَمِنْ نَاحِيَةٍ أُخْرَى، قَدْ تُسَبِّبُ الإِدْمَانَ. فِي رَأْيِي هِيَ صَدِيقٌ، بِشَرْطِ أَنْ نَسْتَخْدِمَهَا بِحِكْمَةٍ وَلِوَقْتٍ مَحْدُودٍ.',
      en: '“I use social media every day. I keep in touch with my relatives in Pakistan, comment on their photos, and look for educational videos. One benefit is that the family stays close despite the distance, and learning has become easier. One risk is that it wastes time, and some information is false. On one hand it is a window on the world; on the other, it can cause addiction. In my opinion it is a friend, on condition that we use it wisely and for a limited time.”',
      find: ['أَتَوَاصَلُ مَعَ أَقَارِبِي', 'مِنْ فَوَائِدِهَا أَنَّ', 'مِنْ نَاحِيَةٍ', 'بِشَرْطِ أَنْ نَسْتَخْدِمَهَا'],
    },
  },
  checkCore: 'use three digital verbs with the right prepositions?',
  checkDevelop: 'give a balanced view and a qualified judgement?',
});
