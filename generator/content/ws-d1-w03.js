'use strict';
/* Apply Workshop · D1-W03 · D1-L05 (after school and evening routine) + D1-L06 (he and she: someone else’s routine). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd1-w03', pair: ['d1-l05', 'd1-l06'],
  title: 'My Evening and My Sister’s Evening', arShort: 'مَسَائِي وَمَسَاءُ أُخْتِي',
  focus: 'Students join the evening routine with “he / she” forms: they describe their own afternoon and evening in three phases (with لِمُدَّةِ, لِكَيْ and object pronouns), then a family member’s evening (ya- / ta-, -hu / -hā), compare the two and write a family-magazine article.',
  dialogue: {
    title: 'Two evenings', ar: 'مَسَاءَانِ',
    lines: [
      ['A', 'مَاذَا تَفْعَلُ بَعْدَ المَدْرَسَةِ؟', 'What do you do after school?'],
      ['B', 'أَسْتَرِيحُ لِمُدَّةِ نِصْفِ سَاعَةٍ، ثُمَّ أُرَاجِعُ دُرُوسِي لِكَيْ أَسْتَعِدَّ لِلْغَدِ.', 'I rest for half an hour, then I revise my lessons so that I am ready for tomorrow.'],
      ['A', 'وَأُخْتُكَ؟', 'And your sister?'],
      ['B', 'أُخْتِي تَرْجِعُ مِنَ الجَامِعَةِ فِي الخَامِسَةِ، وَتُسَاعِدُ أُمِّي فِي المَطْبَخِ.', 'My sister comes back from university at five, and she helps my mother in the kitchen.'],
      ['A', 'هَلْ تُسَاعِدُهَا أَنْتَ أَيْضًا؟', 'Do you help her too?'],
      ['B', 'نَعَمْ، أُسَاعِدُهَا أَحْيَانًا. هِيَ تَنَامُ فِي الحَادِيَةَ عَشْرَةَ، بَيْنَمَا أَنَا أَنَامُ فِي التَّاسِعَةِ وَالنِّصْفِ.', 'Yes, I help her sometimes. She sleeps at eleven, whereas I sleep at half past nine.'],
    ],
    notes: 'لِمُدَّةِ · لِكَيْ + verb in -a · object pronouns (أُسَاعِدُهَا) come from D1-L05; ta- verbs for “she” and بَيْنَمَا from D1-L06.',
  },
  card: {
    title: 'Role-play card — the family magazine interview', ar: 'مُقَابَلَةُ مَجَلَّةِ العَائِلَةِ', you: 'the student', them: 'the magazine reporter',
    mix: 'the afternoon and evening in phases with durations, purposes and object pronouns (D1-L05) with he / she verbs, -hu / -hā and comparisons (D1-L06)',
    tasks: [
      { ex: 'مَاذَا تَفْعَلُ عِنْدَمَا تَرْجِعُ إِلَى البَيْتِ؟', task: 'Two actions + a duration.', plan: 'مَاذَا ← أَسْتَرِيحُ لِمُدَّةِ … ثُمَّ …', model: 'أَسْتَرِيحُ لِمُدَّةِ عِشْرِينَ دَقِيقَةً، ثُمَّ آكُلُ وَجْبَةً خَفِيفَةً.', modelEn: 'I rest for twenty minutes, then I eat a snack.' },
      { ex: 'لِمَاذَا تُرَاجِعُ دُرُوسَكَ كُلَّ مَسَاءٍ؟', task: 'Give a purpose with لِكَيْ.', plan: 'لِمَاذَا ← لِكَيْ … / حَتَّى لَا …', model: 'لِكَيْ أَفْهَمَ الدَّرْسَ جَيِّدًا، وَحَتَّى لَا أَنْسَى الكَلِمَاتِ.', modelEn: 'So that I understand the lesson well, and so that I don’t forget the words.' },
      { ex: 'كَيْفَ تُسَاعِدُ أُسْرَتَكَ فِي المَسَاءِ؟', task: 'Use an object pronoun.', plan: 'كَيْفَ ← أُسَاعِدُ … · أُرَتِّبُهَا …', model: 'أُسَاعِدُ أُمِّي؛ أُرَتِّبُ المَائِدَةَ ثُمَّ أَغْسِلُهَا بَعْدَ العَشَاءِ.', modelEn: 'I help my mother; I set the table and then clean it after dinner.' },
      { ex: 'صِفْ مَسَاءَ شَخْصٍ آخَرَ فِي أُسْرَتِكَ.', task: 'Three verbs for him or her, with times.', plan: 'صِفْ ← أَبِي يَرْجِعُ … · أُخْتِي تَقْرَأُ …', model: 'أَبِي يَرْجِعُ مِنْ عَمَلِهِ فِي السَّادِسَةِ، ثُمَّ يُصَلِّي وَيَقْرَأُ جَرِيدَتَهُ.', modelEn: 'My father comes back from his work at six, then he prays and reads his newspaper.' },
      { unexpected: true, ex: 'مَسَاؤُكَ أَمْ مَسَاؤُهُ: أَيُّهُمَا أَكْثَرُ تَوَازُنًا؟', task: 'Compare and give a reason.', plan: 'أَيُّهُمَا ← مَسَائِي … بَيْنَمَا مَسَاؤُهُ … لِأَنَّ …', model: 'مَسَائِي أَكْثَرُ تَوَازُنًا، لِأَنِّي أَسْتَرِيحُ وَأَدْرُسُ، بَيْنَمَا أَبِي يَعْمَلُ كَثِيرًا.', modelEn: 'My evening is more balanced, because I rest and study, whereas my father works a lot.' },
    ],
    girl: 'مَاذَا تَفْعَلِينَ عِنْدَمَا تَرْجِعِينَ؟ · لِمَاذَا تُرَاجِعِينَ …؟ · كَيْفَ تُسَاعِدِينَ …؟',
  },
  talk: {
    title: 'Two evenings in one minute', ar: 'مَسَاءَانِ فِي دَقِيقَةٍ',
    text: 'Talk for one minute: your afternoon and evening in three phases (with two durations and one purpose), then the evening of one family member with “he” or “she”, and a comparison with بَيْنَمَا.',
    routes: {
      core: 'بَعْدَ المَدْرَسَةِ … · فِي المَسَاءِ … · أُخْتِي تَرْجِعُ … / أَخِي يَدْرُسُ …',
      develop: 'Add لِمُدَّةِ … · لِكَيْ … and two object pronouns (أُسَاعِدُهَا · أُرَتِّبُهَا).',
      stretch: 'Add -hu / -hā on three nouns (عَمَلُهُ · جَامِعَتُهَا) and a judgement about balance.',
    },
  },
  task: {
    title: 'Two evenings: an article for the family magazine', ar: 'مَسَاءَانِ',
    text: 'Write an article (about 60–80 words) comparing your evening with a family member’s. Include: • your afternoon and evening in three phases, with times • two durations (لِمُدَّةِ …) and one purpose (لِكَيْ …) • two object pronouns • three verbs for him or her, and -hu / -hā on two nouns • a comparison with بَيْنَمَا • your opinion: whose evening is more balanced, and why?',
    range: [50, 100],
    phrases: [['أَسْتَرِيحُ لِمُدَّةِ …', 'I rest for …'], ['أُرَاجِعُ لِكَيْ … · حَتَّى لَا …', 'I revise so that … · so that … not'], ['أُسَاعِدُهَا · أُرَتِّبُهَا', 'I help her · I tidy it'], ['يَرْجِعُ / تَرْجِعُ … بَيْنَمَا أَنَا …', 'he / she returns … whereas I …']],
    coreFrames: [
      { ar: 'بَعْدَ المَدْرَسَةِ أَسْتَرِيحُ لِمُدَّةِ ______ .', en: 'After school I rest for …' },
      { ar: 'ثُمَّ أُرَاجِعُ دُرُوسِي لِكَيْ ______ .', en: 'Then I revise my lessons so that …' },
      { ar: 'فِي المَسَاءِ أُسَاعِدُ ______ .', en: 'In the evening I help …' },
      { ar: 'أُخْتِي / أَخِي ______ فِي السَّاعَةِ ______ .', en: 'My sister / brother … at …' },
      { ar: '______ ، بَيْنَمَا أَنَا ______ .', en: '…, whereas I …' },
    ],
    developFrames: [
      { ar: 'وَبَعْدَ العَشَاءِ ______ .', en: 'And after dinner …' },
      { ar: 'فِي رَأْيِي مَسَاءُ ______ أَكْثَرُ تَوَازُنًا لِأَنَّ ______ .', en: 'In my opinion …’s evening is more balanced because …' },
    ],
    bank: ['لِمُدَّةِ', 'لِكَيْ · حَتَّى لَا', 'أُسَاعِدُهَا · أُرَتِّبُهَا', 'يَرْجِعُ · تَرْجِعُ', 'يَقْرَأُ · تَدْرُسُ', 'عَمَلُهُ · جَامِعَتُهَا', 'بَيْنَمَا', 'أَكْثَرُ تَوَازُنًا'],
    model: {
      text: 'بَعْدَ المَدْرَسَةِ أَسْتَرِيحُ لِمُدَّةِ نِصْفِ سَاعَةٍ، ثُمَّ أُرَاجِعُ دُرُوسِي لِمُدَّةِ سَاعَةٍ لِكَيْ أَسْتَعِدَّ لِلْغَدِ. فِي المَسَاءِ أُسَاعِدُ أُمِّي؛ أُرَتِّبُ المَائِدَةَ ثُمَّ أَغْسِلُ الصُّحُونَ. أُخْتِي الكُبْرَى تَرْجِعُ مِنْ جَامِعَتِهَا فِي الخَامِسَةِ، ثُمَّ تَدْرُسُ فِي غُرْفَتِهَا وَتَتَكَلَّمُ مَعَ صَدِيقَاتِهَا. هِيَ تَنَامُ فِي الحَادِيَةَ عَشْرَةَ، بَيْنَمَا أَنَا أَنَامُ فِي التَّاسِعَةِ وَالنِّصْفِ. فِي رَأْيِي مَسَائِي أَكْثَرُ تَوَازُنًا، لِأَنِّي أَسْتَرِيحُ وَأَنَامُ مُبَكِّرًا، لٰكِنَّ أُخْتِي تَعْمَلُ أَكْثَرَ مِنِّي لِأَنَّ دِرَاسَتَهَا صَعْبَةٌ.',
      en: '“After school I rest for half an hour, then I revise my lessons for an hour so that I am ready for tomorrow. In the evening I help my mother; I set the table and then wash the dishes. My older sister comes back from her university at five, then she studies in her room and talks with her friends. She sleeps at eleven, whereas I sleep at half past nine. In my opinion my evening is more balanced, because I rest and sleep early, but my sister works more than me because her studies are difficult.”',
      find: ['لِمُدَّةِ نِصْفِ سَاعَةٍ', 'لِكَيْ أَسْتَعِدَّ', 'مِنْ جَامِعَتِهَا', 'بَيْنَمَا أَنَا أَنَامُ'],
    },
  },
});
