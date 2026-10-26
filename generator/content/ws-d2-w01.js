'use strict';
/* Apply Workshop · D2-W01 · D2-L01 (personality adjectives) + D2-L02 (relationships). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd2-w01', pair: ['d2-l01', 'd2-l02'],
  title: 'Who Supports Me? A Friendship Forum', arShort: 'مَنْ يَدْعَمُنِي؟',
  focus: 'Students join personality with relationships: on a teen forum about “the people who support me” they describe a friend and a family member (agreement, intensity, evidence), say how they get on, trust and make up, and write a forum post that uses both lessons.',
  dialogue: {
    title: 'On the forum', ar: 'فِي المُنْتَدَى',
    lines: [
      ['A', 'مَنْ يَدْعَمُكِ فِي الدِّرَاسَةِ؟', 'Who supports you in your studies?'],
      ['B', 'أُخْتِي الكُبْرَى تَدْعَمُنِي، لِأَنَّهَا صَبُورَةٌ جِدًّا وَتَشْرَحُ لِي كُلَّ شَيْءٍ.', 'My older sister supports me, because she is very patient and explains everything to me.'],
      ['A', 'وَهَلْ تَتَفَاهَمِينَ مَعَهَا دَائِمًا؟', 'And do you always get on with her?'],
      ['B', 'غَالِبًا، وَلٰكِنَّنَا نَتَشَاجَرُ أَحْيَانًا ثُمَّ نَتَصَالَحُ بِسُرْعَةٍ.', 'Usually, but we sometimes argue and then make up quickly.'],
      ['A', 'وَصَدِيقَتُكِ المُقَرَّبَةُ؟', 'And your close friend?'],
      ['B', 'أَثِقُ بِهَا كَثِيرًا؛ هِيَ صَادِقَةٌ وَمَرِحَةٌ، وَلَيْسَتْ أَنَانِيَّةً أَبَدًا.', 'I trust her a lot; she is honest and cheerful, and never selfish.'],
    ],
    notes: 'Personality adjectives with agreement, intensity and لَيْسَتْ + -an (لَيْسَتْ أَنَانِيَّةً) come from D2-L01; relationship verbs with prepositions (أَتَفَاهَمُ مَعَ · أَثِقُ بِهَا) and نَتَشَاجَرُ / نَتَصَالَحُ from D2-L02.',
  },
  card: {
    title: 'Role-play card — the forum interview', ar: 'مُقَابَلَةُ المُنْتَدَى', you: 'the forum member', them: 'the forum moderator',
    mix: 'personality adjectives with agreement, intensity and evidence (D2-L01) with relationship verbs, object suffixes and making up (D2-L02)',
    tasks: [
      { ex: 'كَيْفَ شَخْصِيَّتُكَ؟', task: 'Two qualities: one strong, one soft.', plan: 'كَيْفَ ← أَنَا … جِدًّا وَ… نَوْعًا مَا', model: 'أَنَا مُجْتَهِدٌ جِدًّا، وَخَجُولٌ نَوْعًا مَا.', modelEn: 'I am very hard-working, and rather shy.' },
      { ex: 'مَعَ مَنْ تَتَفَاهَمُ فِي عَائِلَتِكَ؟ لِمَاذَا؟', task: 'A person + a reason with evidence.', plan: 'مَعَ مَنْ ← أَتَفَاهَمُ مَعَ … لِأَنَّهُ / لِأَنَّهَا …', model: 'أَتَفَاهَمُ مَعَ أَبِي لِأَنَّهُ هَادِئٌ وَيَسْمَعُنِي دَائِمًا.', modelEn: 'I get on with my father because he is calm and always listens to me.' },
      { ex: 'مَنْ تَثِقُ بِهِ خَارِجَ العَائِلَةِ؟', task: 'Name a friend and give evidence.', plan: '______________', model: 'أَثِقُ بِصَدِيقِي عَلِيٍّ، لِأَنَّهُ صَادِقٌ وَلَا يَكْذِبُ أَبَدًا.', modelEn: 'I trust my friend Ali, because he is honest and never lies.' },
      { ex: 'هَلْ تَخْتَلِفُ مَعَ أَحَدٍ أَحْيَانًا؟ كَيْفَ تَتَصَالَحَانِ؟', task: 'A disagreement and how you make up.', plan: '______________', model: 'نَعَمْ، أَخْتَلِفُ مَعَ أَخِي الصَّغِيرِ، وَلٰكِنَّنَا نَتَصَالَحُ بَعْدَ سَاعَةٍ؛ أَعْتَذِرُ لَهُ وَأَلْعَبُ مَعَهُ.', modelEn: 'Yes, I disagree with my little brother, but we make up after an hour; I apologise to him and play with him.' },
      { unexpected: true, ex: 'مَا الصِّفَةُ الَّتِي لَا تُحِبُّهَا فِي الصَّدِيقِ؟', task: 'A negative quality with a reason.', plan: '______________', model: 'لَا أُحِبُّ الصَّدِيقَ الأَنَانِيَّ، لِأَنَّهُ لَا يُفَكِّرُ فِي الآخَرِينَ.', modelEn: 'I don’t like a selfish friend, because he does not think about others.' },
    ],
    girl: 'كَيْفَ شَخْصِيَّتُكِ؟ · مَعَ مَنْ تَتَفَاهَمِينَ؟ · مَنْ تَثِقِينَ بِهِ؟ — and she answers: أَنَا مُجْتَهِدَةٌ …',
  },
  talk: {
    title: 'Two people who support me', ar: 'شَخْصَانِ يَدْعَمَانِنِي',
    text: 'Talk for one minute about two people who support you — one male, one female: their personalities (with evidence), how you get on with each one, one disagreement and how you made up, and what makes a strong relationship in your opinion.',
    routes: {
      core: 'هُوَ … · هِيَ … · أَتَفَاهَمُ مَعَ …',
      develop: 'Add evidence with لِأَنَّهُ / لِأَنَّهَا and two object suffixes (يَدْعَمُنِي · أَحْتَرِمُهَا).',
      stretch: 'Add a negative (لَيْسَ / لَيْسَتْ + -an), نَتَشَاجَرُ … ثُمَّ نَتَصَالَحُ, and a judgement.',
    },
  },
  task: {
    title: 'A forum post: the people who support me', ar: 'مَنْ يَدْعَمُنِي',
    text: 'Write a forum post (about 60–80 words). Include: • a friend and a family member (one male, one female), with three qualities each and correct agreement • one quality made stronger and one softer • a negative with لَيْسَ / لَيْسَتْ • how you get on with them, and someone you trust, with reasons • one disagreement and how you made up • what makes a strong relationship.',
    range: [50, 100],
    phrases: [['هِيَ صَبُورَةٌ جِدًّا · هُوَ خَجُولٌ نَوْعًا مَا', 'she is very patient · he is rather shy'], ['لَيْسَ أَنَانِيًّا · لَيْسَتْ أَنَانِيَّةً', 'he / she is not selfish'], ['أَتَفَاهَمُ مَعَ … · أَثِقُ بِصَدِيقِي', 'I get on with … · I trust my friend'], ['نَتَشَاجَرُ أَحْيَانًا ثُمَّ نَتَصَالَحُ', 'we sometimes argue, then make up']],
    coreFrames: [
      { ar: 'أُخْتِي / أُمِّي ______ جِدًّا وَ ______ .', en: 'My sister / mother is very … and …' },
      { ar: 'صَدِيقِي ______ ، وَلَيْسَ ______ .', en: 'My friend is …, and he is not …' },
      { ar: 'أَتَفَاهَمُ مَعَ ______ لِأَنَّ ______ .', en: 'I get on with … because …' },
      { ar: 'أَثِقُ بِصَدِيقِي / بِأُمِّي لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I trust my friend / my mother because he / she …' },
    ],
    developFrames: [
      { ar: 'نَتَشَاجَرُ أَحْيَانًا، ثُمَّ ______ .', en: 'We sometimes argue, then …' },
      { ar: 'فِي رَأْيِي العَلَاقَةُ القَوِيَّةُ تَحْتَاجُ إِلَى ______ .', en: 'In my opinion a strong relationship needs …' },
    ],
    bank: ['صَبُورٌ · صَبُورَةٌ', 'صَادِقٌ · مَرِحَةٌ', 'خَجُولٌ · أَنَانِيٌّ', 'جِدًّا · نَوْعًا مَا', 'لَيْسَ · لَيْسَتْ', 'أَتَفَاهَمُ مَعَ', 'أَثِقُ بِهِ · بِهَا', 'يَدْعَمُنِي · أَحْتَرِمُهَا'],
    model: {
      text: 'أَكْثَرُ شَخْصَيْنِ يَدْعَمَانِنِي هُمَا أُخْتِي الكُبْرَى وَصَدِيقِي يُوسُفُ. أُخْتِي صَبُورَةٌ جِدًّا وَذَكِيَّةٌ، وَلَيْسَتْ عَصَبِيَّةً أَبَدًا؛ تَشْرَحُ لِي الرِّيَاضِيَّاتِ كُلَّ مَسَاءٍ. أَتَفَاهَمُ مَعَهَا لِأَنَّهَا تَسْمَعُنِي. أَمَّا يُوسُفُ فَهُوَ مَرِحٌ وَصَادِقٌ، وَخَجُولٌ نَوْعًا مَا. أَثِقُ بِهِ لِأَنَّهُ لَا يَكْذِبُ أَبَدًا. أَحْيَانًا نَتَشَاجَرُ بِسَبَبِ كُرَةِ القَدَمِ، ثُمَّ نَتَصَالَحُ بِسُرْعَةٍ. فِي رَأْيِي العَلَاقَةُ القَوِيَّةُ تَحْتَاجُ إِلَى الثِّقَةِ وَالاحْتِرَامِ.',
      en: '“The two people who support me most are my older sister and my friend Yusuf. My sister is very patient and clever, and never short-tempered; she explains maths to me every evening. I get on with her because she listens to me. As for Yusuf, he is cheerful and honest, and rather shy. I trust him because he never lies. Sometimes we argue about football, then we make up quickly. In my opinion a strong relationship needs trust and respect.”',
      find: ['صَبُورَةٌ جِدًّا', 'لَيْسَتْ عَصَبِيَّةً', 'أَثِقُ بِهِ', 'نَتَشَاجَرُ بِسَبَبِ'],
    },
  },
});
