'use strict';
/* Apply Workshop · F2-W03 · F2-L05 (masculine and feminine) + F2-L06 (polite classroom Arabic). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f2-w03', pair: ['f2-l05', 'f2-l06'],
  title: 'A Polite Day in a New Class', arShort: 'يَوْمٌ مُهَذَّبٌ فِي صَفٍّ جَدِيدٍ',
  focus: 'Students join matching adjectives (he / she) with polite classroom Arabic: they ask politely for help in a new class, describe their teacher and classmates, give a short talk and write a polite message that describes people.',
  dialogue: {
    title: 'In the new class', ar: 'فِي الصَّفِّ الجَدِيدِ',
    lines: [
      ['A', 'مَعْذِرَةً، هَلْ عِنْدَكِ قَلَمٌ، مِنْ فَضْلِكِ؟', 'Excuse me, do you have a pen, please?'],
      ['B', 'نَعَمْ، تَفَضَّلْ!', 'Yes, here you are!'],
      ['A', 'شُكْرًا جَزِيلًا! مَنْ هٰذِهِ؟', 'Thank you very much! Who is this?'],
      ['B', 'هٰذِهِ مُعَلِّمَتُنَا. هِيَ لَطِيفَةٌ جِدًّا.', 'This is our teacher. She is very kind.'],
      ['A', 'وَمَنْ هٰذَا؟', 'And who is this?'],
      ['B', 'هٰذَا صَدِيقِي آدَمُ. هُوَ طَوِيلٌ وَذَكِيٌّ.', 'This is my friend Adam. He is tall and clever.'],
    ],
    notes: 'Polite phrases (مَعْذِرَةً · مِنْ فَضْلِكِ · تَفَضَّلْ · شُكْرًا جَزِيلًا) come from F2-L06; هٰذَا / هٰذِهِ + matching adjectives from F2-L05. Ask: why لَطِيفَةٌ but طَوِيلٌ?',
  },
  card: {
    title: 'Role-play card — first lesson with a new teacher', ar: 'الدَّرْسُ الأَوَّلُ', you: 'a new student', them: 'the teacher',
    mix: 'polite requests, apologies and thanks (F2-L06) with هٰذَا / هٰذِهِ and adjectives that match (F2-L05)',
    tasks: [
      { ex: 'أَهْلًا! أَنْتَ طَالِبٌ جَدِيدٌ؟', task: 'Say yes and greet the teacher politely.', plan: 'أَنْتَ ← نَعَمْ، أَنَا … يَا أُسْتَاذُ', model: 'نَعَمْ، أَنَا طَالِبٌ جَدِيدٌ. السَّلَامُ عَلَيْكُمْ يَا أُسْتَاذُ!', modelEn: 'Yes, I am a new student. Peace be upon you, Sir!' },
      { ex: 'أَيْنَ كِتَابُكَ؟', task: 'Say sorry: you forgot it. Ask politely for one.', plan: 'أَيْنَ ← أَنَا آسِفٌ … هَلْ يُمْكِنُ أَنْ …؟', model: 'أَنَا آسِفٌ، نَسِيتُهُ. هَلْ يُمْكِنُ أَنْ آخُذَ كِتَابًا، مِنْ فَضْلِكَ؟', modelEn: 'I am sorry, I forgot it. May I take a book, please?' },
      { ex: 'تَفَضَّلْ! مَنْ صَدِيقُكَ فِي الصَّفِّ؟', task: 'Thank the teacher; describe a friend (a boy) with two adjectives.', plan: 'مَنْ ← شُكْرًا … هٰذَا … هُوَ … وَ…', model: 'شُكْرًا جَزِيلًا! هٰذَا صَدِيقِي عَلِيٌّ، هُوَ لَطِيفٌ وَذَكِيٌّ.', modelEn: 'Thank you very much! This is my friend Ali; he is kind and clever.' },
      { ex: 'وَمَنْ هٰذِهِ؟', task: 'Describe a girl with two adjectives.', plan: 'هٰذِهِ ← هٰذِهِ … هِيَ … وَ…', model: 'هٰذِهِ صَدِيقَتُهُ سَلْمَى، هِيَ طَوِيلَةٌ وَلَطِيفَةٌ.', modelEn: 'This is his friend Salma; she is tall and kind.' },
      { unexpected: true, ex: 'هَلْ تَفْهَمُ الدَّرْسَ؟', task: 'Say you do not understand and ask politely to repeat.', plan: 'هَلْ ← لَا أَفْهَمُ … مِنْ فَضْلِكَ', model: 'مَعْذِرَةً، لَا أَفْهَمُ. أَعِدْ مِنْ فَضْلِكَ يَا أُسْتَاذُ.', modelEn: 'Excuse me, I do not understand. Repeat please, Sir.' },
    ],
    girl: 'أَنْتِ طَالِبَةٌ جَدِيدَةٌ؟ · أَيْنَ كِتَابُكِ؟ — and she answers: أَنَا آسِفَةٌ … تَفَضَّلِي!',
  },
  talk: {
    title: 'Polite, clever, kind: my class', ar: 'صَفِّي',
    text: 'Talk for 30–45 seconds about your class: your teacher and two classmates (a boy and a girl) with adjectives that match. Finish with one polite classroom phrase you use every day, and why.',
    routes: {
      core: 'هٰذَا … هُوَ … · هٰذِهِ … هِيَ …',
      develop: 'Two adjectives for each person, with جِدًّا: هِيَ لَطِيفَةٌ جِدًّا.',
      stretch: 'Add a polite phrase and a reason: أَقُولُ «مِنْ فَضْلِكَ» لِأَنَّ …',
    },
    phrases: [['هٰذَا … ، هُوَ …', 'this is … (m.); he is …'], ['هٰذِهِ … ، هِيَ …', 'this is … (f.); she is …'], ['لَطِيفٌ · لَطِيفَةٌ', 'kind (m. · f.)'], ['أَقُولُ «شُكْرًا» لِأَنَّ …', 'I say “thank you” because …']],
  },
  task: {
    title: 'A polite message about my new class', ar: 'رِسَالَةٌ مُهَذَّبَةٌ',
    text: 'Write a polite message (about 40–60 words) to your new teacher. Include: • a polite greeting • say sorry (you forgot your book / you were late) • a polite request (هَلْ يُمْكِنُ أَنْ …؟) • describe two classmates, a boy and a girl, with two adjectives each • a thank-you and a goodbye.',
    range: [35, 75],
    phrases: [['السَّلَامُ عَلَيْكُمْ يَا أُسْتَاذَةُ', 'peace be upon you, Miss'], ['أَنَا آسِفٌ / آسِفَةٌ، …', 'I am sorry, …'], ['هَلْ يُمْكِنُ أَنْ …؟', 'may I …? / is it possible to …?'], ['صَدِيقِي … هُوَ … · صَدِيقَتِي … هِيَ …', 'my friend (m.) … he is … · my friend (f.) … she is …']],
    coreFrames: [
      { ar: 'السَّلَامُ عَلَيْكُمْ يَا ______ !', en: 'Peace be upon you, (Sir / Miss)!' },
      { ar: 'أَنَا آسِفٌ / آسِفَةٌ، ______ .', en: 'I am sorry, …' },
      { ar: 'هَلْ يُمْكِنُ أَنْ ______ ، مِنْ فَضْلِكِ؟', en: 'May I …, please?' },
      { ar: 'صَدِيقِي ______ ، هُوَ ______ وَ ______ .', en: 'My friend …; he is … and …' },
      { ar: 'صَدِيقَتِي ______ ، هِيَ ______ وَ ______ .', en: 'My friend …; she is … and …' },
    ],
    developFrames: [
      { ar: '______ جِدًّا، وَ ______ أَيْضًا.', en: '… very …, and … too.' },
      { ar: 'شُكْرًا جَزِيلًا، وَ ______ !', en: 'Thank you very much, and goodbye!' },
    ],
    bank: ['مِنْ فَضْلِكِ', 'هَلْ يُمْكِنُ أَنْ …؟', 'أَنَا آسِفٌ · آسِفَةٌ', 'شُكْرًا جَزِيلًا', 'طَوِيلٌ · طَوِيلَةٌ', 'لَطِيفٌ · لَطِيفَةٌ', 'ذَكِيٌّ · ذَكِيَّةٌ', 'جِدًّا'],
    model: {
      text: 'السَّلَامُ عَلَيْكُمْ يَا أُسْتَاذَةُ! أَنَا آسِفَةٌ، نَسِيتُ كِتَابِي اليَوْمَ. هَلْ يُمْكِنُ أَنْ آخُذَ كِتَابًا مِنَ الصَّفِّ، مِنْ فَضْلِكِ؟ صَفِّي جَمِيلٌ جِدًّا، وَمُعَلِّمُنَا الجَدِيدُ لَطِيفٌ. صَدِيقِي خَالِدٌ طَوِيلٌ وَذَكِيٌّ، وَصَدِيقَتِي هُدَى لَطِيفَةٌ وَذَكِيَّةٌ أَيْضًا. شُكْرًا جَزِيلًا، وَمَعَ السَّلَامَةِ!',
      en: '“Peace be upon you, Miss! I am sorry, I forgot my book today. May I take a book from the class, please? My class is very nice, and our new teacher is kind. My friend Khalid is tall and clever, and my friend Huda is kind and clever too. Thank you very much, and goodbye!”',
      find: ['أَنَا آسِفَةٌ', 'هَلْ يُمْكِنُ أَنْ', 'طَوِيلٌ وَذَكِيٌّ', 'لَطِيفَةٌ وَذَكِيَّةٌ'],
    },
  },
});
