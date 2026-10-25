'use strict';
/* Practice Room · F2-L10 · Greetings and identity in the Arab world. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f2-l10',
  arShort: 'التَّحِيَّاتُ وَالهُوِيَّةُ',
  grammar: 'describing customs: fī baʿḍi al-buldāni …; aḥyānan; anā fakhūrun / fakhūratun bi-…; mutashābihun / mukhtalifun',
  focus: 'Students run their own speaking and writing practice about greetings, culture and identity: say the culture words, act a short dialogue about greeting customs, answer question cards, do a role-play card welcoming a guest, give a 30-second talk about their identity, then build, fix and write a short text about who they are.',
  words1: 'Culture and customs', words2: 'Identity and comparing',
  dialogue: {
    title: 'How do people greet in your family?', ar: 'كَيْفَ تُسَلِّمُونَ فِي عَائِلَتِكَ؟',
    lines: [
      ['A', 'كَيْفَ تُسَلِّمُونَ عَلَى الضُّيُوفِ فِي عَائِلَتِكَ؟', 'How do you greet guests in your family?'],
      ['B', 'نَقُولُ: السَّلَامُ عَلَيْكُمْ، أَهْلًا وَسَهْلًا!', 'We say: peace be upon you, welcome!'],
      ['A', 'وَمَاذَا تُقَدِّمُونَ لِلضُّيُوفِ؟', 'And what do you offer guests?'],
      ['B', 'نُقَدِّمُ الشَّايَ وَالتَّمْرَ، لِأَنَّ الضِّيَافَةَ مُهِمَّةٌ عِنْدَنَا.', 'We offer tea and dates, because hospitality is important for us.'],
      ['A', 'فِي بَعْضِ العَائِلَاتِ يُقَبِّلُ النَّاسُ الخَدَّ أَيْضًا.', 'In some families people kiss on the cheek too.'],
      ['B', 'نَعَمْ، العَادَاتُ مُخْتَلِفَةٌ، لٰكِنَّ الاحْتِرَامَ وَاحِدٌ.', 'Yes, customs are different, but respect is the same.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: say what YOUR family really does (مَاذَا تُقَدِّمُونَ؟ · كَيْفَ تُسَلِّمُونَ؟).',
  },
  questions: [
    { q: 'كَيْفَ تُسَلِّمُ عَلَى جَدِّكَ أَوْ جَدَّتِكَ؟', en: 'How do you greet your grandfather or grandmother?', start: 'أَقُولُ: …', more: '… وَأُقَبِّلُ يَدَهُ / يَدَهَا' },
    { q: 'مَاذَا تُقَدِّمُ عَائِلَتُكَ لِلضُّيُوفِ؟', en: 'What does your family offer guests?', start: 'نُقَدِّمُ …', more: '… لِأَنَّ الضِّيَافَةَ …' },
    { q: 'مَا لُغَتُكَ فِي البَيْتِ؟', en: 'What is your language at home?', start: 'فِي البَيْتِ أَتَكَلَّمُ …', more: '… وَفِي المَدْرَسَةِ …' },
    { q: 'هَلْ أَنْتَ فَخُورٌ بِبَلَدِكَ؟', en: 'Are you proud of your country?', start: 'نَعَمْ، أَنَا فَخُورٌ بِبَلَدِي …', more: '… لِأَنَّ …' },
    { q: 'مَا الشَّيْءُ المُتَشَابِهُ بَيْنَ ثَقَافَتِكَ وَثَقَافَةِ صَدِيقِكَ؟', en: 'What is similar between your culture and your friend’s?', start: 'نَحْنُ … ، وَهُمْ … أَيْضًا', more: '… لٰكِنَّ …' },
  ],
  card: {
    title: 'Role-play card — welcoming a guest at home', ar: 'أُرَحِّبُ بِضَيْفٍ', you: 'the host', them: 'a guest visiting your family',
    tasks: [
      { ex: 'السَّلَامُ عَلَيْكُمْ!', task: 'Greet and welcome the guest.', plan: 'السَّلَامُ ← وَعَلَيْكُمُ السَّلَامُ! أَهْلًا وَسَهْلًا', model: 'وَعَلَيْكُمُ السَّلَامُ! أَهْلًا وَسَهْلًا، تَفَضَّلْ.', modelEn: 'And upon you be peace! Welcome, come in.' },
      { ex: 'شُكْرًا! بَيْتُكُمْ جَمِيلٌ.', task: 'Thank and offer a drink.', plan: 'شُكْرًا ← شُكْرًا … هَلْ تُرِيدُ …؟', model: 'شُكْرًا! هَلْ تُرِيدُ شَايًا أَوْ قَهْوَةً؟', modelEn: 'Thank you! Would you like tea or coffee?' },
      { ex: 'شَايًا، مِنْ فَضْلِكَ. مِنْ أَيْنَ عَائِلَتُكَ؟', task: 'Say where your family is from.', plan: 'مِنْ أَيْنَ ← عَائِلَتِي مِنْ …', model: 'تَفَضَّلْ. عَائِلَتِي مِنْ فِلَسْطِينَ، لٰكِنِّي وُلِدْتُ فِي بِرِيطَانِيَا.', modelEn: 'Here you are. My family is from Palestine, but I was born in Britain.' },
      { ex: 'هَلْ أَنْتَ فَخُورٌ بِثَقَافَتِكَ؟', task: 'Answer with a reason.', plan: 'هَلْ ← نَعَمْ، أَنَا فَخُورٌ … لِأَنَّ …', model: 'نَعَمْ، أَنَا فَخُورٌ بِثَقَافَتِي، لِأَنَّ عَائِلَتِي كَرِيمَةٌ.', modelEn: 'Yes, I am proud of my culture, because my family is generous.' },
    ],
    girl: 'to a female guest: تَفَضَّلِي · تُرِيدِينَ — and a girl says: فَخُورَةٌ',
    notes: 'Language: ahlan wa-sahlan · tafaḍḍal · hal turīdu …? · fakhūrun bi- + noun + li-anna.',
  },
  talk: {
    title: '30 seconds: who am I?', ar: 'مَنْ أَنَا؟',
    text: 'Talk for 30 seconds about your identity: where your family is from, your languages, one custom in your family — and what makes you proud.',
    routes: {
      core: 'عَائِلَتِي مِنْ … · أَتَكَلَّمُ … · فِي بَيْتِنَا …',
      develop: 'Add one custom (greeting or hospitality) with نَحْنُ + verb.',
      stretch: 'Add أَنَا فَخُورٌ / فَخُورَةٌ بِثَقَافَتِي لِأَنَّ … and one difference with a friend’s culture.',
    },
    phrases: [['عَائِلَتِي مِنْ …', 'my family is from …'], ['فِي بَيْتِنَا نَقُولُ …', 'at home we say …'], ['أَنَا فَخُورٌ / فَخُورَةٌ بِثَقَافَتِي', 'I am proud of my culture'], ['مُتَشَابِهٌ · مُخْتَلِفٌ', 'similar · different']],
  },
  builder: [
    { en: 'In our family we offer tea to guests.', cols: [['فِي عَائِلَتِنَا', 'فِي عَائِلَتِي أَنَا'], ['نُقَدِّمُ الشَّايَ', 'يُقَدِّمُ الشَّايَ'], ['لِلضُّيُوفِ.', 'الضُّيُوفَ.']], key: [0, 0, 0], why: 'We → نُقَدِّمُ (nu-); to guests = لِلضُّيُوفِ.' },
    { en: 'I am proud of my language (girl).', cols: [['أَنَا فَخُورَةٌ', 'أَنَا فَخُورٌ'], ['بِلُغَتِي', 'لُغَتِي'], ['العَرَبِيَّةِ.', 'العَرَبِيَّةُ.']], key: [0, 0, 0], why: 'A girl → فَخُورَةٌ; proud OF = bi- + noun: بِلُغَتِي.' },
    { en: 'Customs are different, but respect is the same.', cols: [['العَادَاتُ مُخْتَلِفَةٌ،', 'العَادَاتُ مُخْتَلِفُونَ،'], ['لٰكِنَّ', 'لِأَنَّ'], ['الاحْتِرَامَ وَاحِدٌ.', 'الاحْتِرَامُ وَاحِدَةٌ.']], key: [0, 0, 0], why: 'Things in the plural → مُخْتَلِفَةٌ; but = لٰكِنَّ.' },
  ],
  errors: [
    { wrong: 'أَنَا فَخُورٌ ثَقَافَتِي.', hint: 'Proud OF …', right: 'أَنَا فَخُورٌ بِثَقَافَتِي.', why: 'فَخُورٌ needs bi-: بِثَقَافَتِي.' },
    { wrong: 'كُلُّ العَرَبِ يُقَبِّلُونَ الخَدَّ.', hint: 'Is this true for everyone?', right: 'فِي بَعْضِ العَائِلَاتِ يُقَبِّلُ النَّاسُ الخَدَّ.', why: 'Communities are diverse: say فِي بَعْضِ … or أَحْيَانًا.' },
    { wrong: 'نَحْنُ يُقَدِّمُ التَّمْرَ.', hint: 'We …', right: 'نَحْنُ نُقَدِّمُ التَّمْرَ.', why: 'We → nu- / na-: نُقَدِّمُ.' },
  ],
  task: {
    title: 'My identity', ar: 'هُوِيَّتِي',
    text: 'Write a short text (about 35–55 words) for a class display called “My identity”. Include: • where your family is from • your languages • one custom in your family (greetings or guests) • what you are proud of, and why.',
    phrases: [['عَائِلَتِي مِنْ … ، وَأَنَا أَسْكُنُ فِي …', 'my family is from …, and I live in …'], ['فِي البَيْتِ نَتَكَلَّمُ …', 'at home we speak …'], ['عِنْدَمَا يَزُورُنَا ضَيْفٌ، نُقَدِّمُ …', 'when a guest visits us, we offer …'], ['أَنَا فَخُورٌ / فَخُورَةٌ بِعَائِلَتِي لِأَنَّ …', 'I am proud of my family because …']],
    coreFrames: [
      { ar: 'عَائِلَتِي مِنْ ______ ، وَأَسْكُنُ فِي ______ .', en: 'My family is from …, and I live in …' },
      { ar: 'فِي البَيْتِ نَتَكَلَّمُ ______ .', en: 'At home we speak …' },
      { ar: 'نَقُولُ لِلضُّيُوفِ: ______ !', en: 'We say to guests: …!' },
      { ar: 'أَنَا فَخُورٌ / فَخُورَةٌ بِ ______ .', en: 'I am proud of …' },
    ],
    developFrames: [
      { ar: 'نُقَدِّمُ لِلضُّيُوفِ ______ ، لِأَنَّ ______ .', en: 'We offer guests …, because …' },
      { ar: 'صَدِيقِي مِنْ ______ ، وَعَادَاتُهُ ______ ، لٰكِنَّ ______ .', en: 'My friend is from …, his customs are …, but …' },
    ],
    bank: ['ثَقَافَةٌ', 'عَادَاتٌ · تَقَالِيدُ', 'ضِيَافَةٌ', 'احْتِرَامٌ', 'هُوِيَّةٌ', 'فَخُورٌ · فَخُورَةٌ بِثَقَافَتِي', 'مُتَشَابِهٌ · مُخْتَلِفٌ', 'فِي بَعْضِ … · أَحْيَانًا'],
    model: {
      text: 'عَائِلَتِي مِنَ السُّودَانِ، وَأَنَا أَسْكُنُ فِي لَنْدَنَ. فِي البَيْتِ نَتَكَلَّمُ العَرَبِيَّةَ، وَفِي المَدْرَسَةِ أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ. عِنْدَمَا يَزُورُنَا ضَيْفٌ، نَقُولُ: أَهْلًا وَسَهْلًا، وَنُقَدِّمُ القَهْوَةَ وَالتَّمْرَ. أَنَا فَخُورَةٌ بِهُوِيَّتِي، لِأَنَّ عَائِلَتِي كَرِيمَةٌ، وَلِأَنِّي أَتَكَلَّمُ لُغَتَيْنِ. صَدِيقَتِي مِنْ بُولَنْدَا، وَعَادَاتُهَا مُخْتَلِفَةٌ، لٰكِنَّ الاحْتِرَامَ وَاحِدٌ.',
      en: '“My family is from Sudan, and I live in London. At home we speak Arabic, and at school I speak English. When a guest visits us, we say ‘welcome’ and offer coffee and dates. I am proud of my identity, because my family is generous, and because I speak two languages. My friend is from Poland, and her customs are different, but respect is the same.”',
      find: ['عَائِلَتِي مِنَ السُّودَانِ', 'فِي البَيْتِ نَتَكَلَّمُ', 'وَنُقَدِّمُ القَهْوَةَ', 'أَنَا فَخُورَةٌ بِهُوِيَّتِي'],
    },
  },
  checkCore: 'say where the family is from and which languages you speak?',
  checkDevelop: 'use نَحْنُ verbs (نَقُولُ · نُقَدِّمُ) and فَخُورٌ + bi- correctly?',
});
