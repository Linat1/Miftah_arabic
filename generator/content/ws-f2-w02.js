'use strict';
/* Apply Workshop · F2-W02 · F2-L03 (how old are you?) + F2-L04 (nationality and language). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f2-w02', pair: ['f2-l03', 'f2-l04'],
  title: 'International Summer Camp', arShort: 'المُخَيَّمُ الدُّوَلِيُّ',
  focus: 'Students join ages, countries, nationalities and languages: they register at an international summer camp, interview new campers, talk about themselves and a family member, and write a camp profile that uses both lessons.',
  dialogue: {
    title: 'New friends at camp', ar: 'أَصْدِقَاءُ جُدُدٌ فِي المُخَيَّمِ',
    lines: [
      ['A', 'مَرْحَبًا! أَنَا اسْمِي لَيْلَى. كَمْ عُمْرُكَ؟', 'Hello! My name is Layla. How old are you?'],
      ['B', 'عُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً. وَأَنْتِ؟', 'I am thirteen. And you?'],
      ['A', 'عُمْرِي اثْنَتَا عَشْرَةَ سَنَةً. مِنْ أَيْنَ أَنْتَ؟', 'I am twelve. Where are you from?'],
      ['B', 'أَنَا مِنْ مِصْرَ، أَنَا مِصْرِيٌّ. وَأَنْتِ؟', 'I am from Egypt; I am Egyptian. And you?'],
      ['A', 'أَنَا بِرِيطَانِيَّةٌ. أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ وَالأُرْدِيَّةَ.', 'I am British. I speak English and Urdu.'],
      ['B', 'وَأَنَا أَتَكَلَّمُ العَرَبِيَّةَ، وَأَفْهَمُ الإِنْجِلِيزِيَّةَ قَلِيلًا.', 'And I speak Arabic, and I understand a little English.'],
    ],
    notes: 'Ages (عُمْرِي … سَنَةً) come from F2-L03; country, nationality and languages from F2-L04. Point out مِصْرِيٌّ (boy) and بِرِيطَانِيَّةٌ (girl).',
  },
  card: {
    title: 'Role-play card — the camp registration desk', ar: 'مَكْتَبُ التَّسْجِيلِ', you: 'a new camper', them: 'the camp leader',
    mix: 'age and a family member’s age (F2-L03) with country, nationality and languages (F2-L04)',
    tasks: [
      { ex: 'أَهْلًا! كَمْ عُمْرُكَ؟', task: 'Give your age.', plan: 'كَمْ ← عُمْرِي … سَنَةً', model: 'عُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً.', modelEn: 'I am fourteen years old.' },
      { ex: 'مِنْ أَيْنَ أَنْتَ؟', task: 'Say where you are from and your nationality.', plan: 'مِنْ أَيْنَ ← أَنَا مِنْ … ، أَنَا …', model: 'أَنَا مِنْ بِرِيطَانِيَا، أَنَا بِرِيطَانِيٌّ.', modelEn: 'I am from Britain; I am British.' },
      { ex: 'أَيَّ لُغَةٍ تَتَكَلَّمُ؟', task: 'Name two languages.', plan: 'أَيَّ لُغَةٍ ← أَتَكَلَّمُ … وَ…', model: 'أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ وَالعَرَبِيَّةَ قَلِيلًا.', modelEn: 'I speak English, and a little Arabic.' },
      { ex: 'هَلْ مَعَكَ أَخٌ أَوْ أُخْتٌ فِي المُخَيَّمِ؟', task: 'Say yes: a brother or sister, name and age.', plan: 'هَلْ ← نَعَمْ، أُخْتِي … عُمْرُهَا …', model: 'نَعَمْ، أُخْتِي سَارَةُ، عُمْرُهَا إِحْدَى عَشْرَةَ سَنَةً.', modelEn: 'Yes, my sister Sara; she is eleven.' },
      { unexpected: true, ex: 'هَلْ تَقْرَأُ العَرَبِيَّةَ؟', task: 'Answer and add one detail.', plan: 'هَلْ ← نَعَمْ، أَقْرَأُ … وَأَكْتُبُ …', model: 'نَعَمْ، أَقْرَأُ العَرَبِيَّةَ، وَأَكْتُبُ قَلِيلًا.', modelEn: 'Yes, I read Arabic, and I write a little.' },
    ],
    girl: 'كَمْ عُمْرُكِ؟ · مِنْ أَيْنَ أَنْتِ؟ · أَيَّ لُغَةٍ تَتَكَلَّمِينَ؟ — and she answers بِرِيطَانِيَّةٌ',
  },
  talk: {
    title: 'Me and one person in my family', ar: 'أَنَا وَشَخْصٌ مِنْ عَائِلَتِي',
    text: 'Talk for 30–45 seconds: your name, age, country, nationality and languages — then the same facts about one person in your family (a brother, sister, mother or father).',
    routes: {
      core: 'اسْمِي … · عُمْرِي … سَنَةً · أَنَا مِنْ … · أَتَكَلَّمُ …',
      develop: 'Add a family member: أُخْتِي … عُمْرُهَا … وَهِيَ … (nationality).',
      stretch: 'Add what you understand or read (أَفْهَمُ · أَقْرَأُ) and a number under 10 (… سَنَوَاتٍ).',
    },
    phrases: [['عُمْرِي … سَنَةً', 'I am … years old'], ['أَنَا مِنْ … · أَنَا …', 'I am from … · I am (nationality)'], ['أَتَكَلَّمُ … وَأَفْهَمُ …', 'I speak … and I understand …'], ['عُمْرُهُ · عُمْرُهَا', 'he is · she is … old']],
  },
  task: {
    title: 'My camp profile', ar: 'بِطَاقَتِي فِي المُخَيَّمِ',
    text: 'Write your profile (about 40–60 words) for the camp noticeboard. Include: • your name and age • where you are from and your nationality • where you live • your languages (speak · understand · read) • a brother, sister or friend: name, age and nationality.',
    range: [35, 75],
    phrases: [['اسْمِي … وَعُمْرِي … سَنَةً', 'my name is … and I am … years old'], ['أَنَا مِنْ … ، وَأَسْكُنُ فِي …', 'I am from … and I live in …'], ['أَتَكَلَّمُ … ، وَأَفْهَمُ … قَلِيلًا', 'I speak … and I understand a little …'], ['أُخْتِي … ، عُمْرُهَا … ، وَهِيَ …', 'my sister …, she is …, and she is …']],
    coreFrames: [
      { ar: 'اسْمِي ______ ، وَعُمْرِي ______ سَنَةً.', en: 'My name is … and I am … years old.' },
      { ar: 'أَنَا مِنْ ______ ، أَنَا ______ .', en: 'I am from …; I am (nationality).' },
      { ar: 'أَسْكُنُ فِي ______ .', en: 'I live in …' },
      { ar: 'أَتَكَلَّمُ ______ وَ ______ .', en: 'I speak … and …' },
    ],
    developFrames: [
      { ar: 'أَخِي ______ ، عُمْرُهُ ______ ، وَهُوَ ______ .', en: 'My brother …; he is … and he is …' },
      { ar: 'وَأَفْهَمُ ______ قَلِيلًا.', en: 'And I understand a little …' },
      { ar: 'أَقْرَأُ ______ وَأَكْتُبُ ______ .', en: 'I read … and I write …' },
    ],
    bank: ['عُمْرِي … سَنَةً', 'عُمْرُهُ · عُمْرُهَا', 'أَنَا مِنْ …', 'بِرِيطَانِيٌّ · بِرِيطَانِيَّةٌ', 'أَسْكُنُ فِي', 'أَتَكَلَّمُ', 'أَفْهَمُ · أَقْرَأُ', 'قَلِيلًا'],
    model: {
      text: 'السَّلَامُ عَلَيْكُمْ! اسْمِي يُوسُفُ، وَعُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً. أَنَا مِنْ بِرِيطَانِيَا، أَنَا بِرِيطَانِيٌّ، وَأَسْكُنُ فِي لَنْدَنَ. أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ وَالأُرْدِيَّةَ، وَأَفْهَمُ العَرَبِيَّةَ قَلِيلًا. أُخْتِي اسْمُهَا عَائِشَةُ، وَعُمْرُهَا عَشْرُ سَنَوَاتٍ. هِيَ بِرِيطَانِيَّةٌ أَيْضًا، وَتَقْرَأُ العَرَبِيَّةَ. مَعَ السَّلَامَةِ!',
      en: '“Peace be upon you! My name is Yusuf and I am thirteen. I am from Britain; I am British, and I live in London. I speak English and Urdu, and I understand a little Arabic. My sister is called Aisha and she is ten. She is British too, and she reads Arabic. Goodbye!”',
      find: ['عُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً', 'أَنَا بِرِيطَانِيٌّ', 'أَفْهَمُ العَرَبِيَّةَ قَلِيلًا', 'عُمْرُهَا عَشْرُ سَنَوَاتٍ'],
    },
  },
});
