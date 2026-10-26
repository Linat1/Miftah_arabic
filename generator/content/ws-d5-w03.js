'use strict';
/* Apply Workshop · D5-W03 · D5-L05 (storytelling: narrative connectors and كَانَ) + D5-L06 (music, arts and Arabic culture). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd5-w03', pair: ['d5-l05', 'd5-l06'],
  title: 'A Night I Will Never Forget: The Oud Concert', arShort: 'لَيْلَةٌ لَا أَنْسَاهَا',
  focus: 'Students join storytelling with the arts: they tell the story of a concert or exhibition in five steps (scene with كَانَ + -an → background → فَجْأَةً → ending → مَا زِلْتُ أَتَذَكَّرُ …), explain what the art expressed and how it affected them, describe culture fairly, and write the story for the class anthology.',
  dialogue: {
    title: 'Tell me about the concert', ar: 'احْكِ لِي عَنِ الحَفْلَةِ',
    lines: [
      ['A', 'كَيْفَ كَانَتِ الحَفْلَةُ؟', 'How was the concert?'],
      ['B', 'كَانَ المَسْرَحُ مُزْدَحِمًا، وَكَانَ الجَوُّ هَادِئًا وَجَمِيلًا.', 'The theatre was crowded, and the atmosphere was calm and lovely.'],
      ['A', 'وَمَاذَا كُنْتُمْ تَفْعَلُونَ؟', 'And what were you doing?'],
      ['B', 'كُنَّا نَسْتَمِعُ إِلَى العُودِ وَالنَّايِ، وَفَجْأَةً دَعَانِي العَازِفُ إِلَى المَسْرَحِ!', 'We were listening to the oud and the nay, and suddenly the player invited me onto the stage!'],
      ['A', 'وَكَيْفَ أَثَّرَتْ فِيكِ المُوسِيقَى؟', 'And how did the music affect you?'],
      ['B', 'كَانَتْ تُعَبِّرُ عَنِ الحَنِينِ، وَأَلْهَمَتْنِي أَنْ أَتَعَلَّمَ العَزْفَ. مَا زِلْتُ أَتَذَكَّرُ تِلْكَ اللَّيْلَةَ.', 'It expressed longing, and it inspired me to learn to play. I still remember that night.'],
    ],
    notes: 'The story shape (كَانَ + -an · كُنَّا نَسْتَمِعُ · فَجْأَةً · مَا زِلْتُ أَتَذَكَّرُ) comes from D5-L05; arts words and what art does (تُعَبِّرُ عَنْ · أَثَّرَتْ فِيَّ · أَلْهَمَتْنِي) from D5-L06.',
  },
  card: {
    title: 'Story card — the five steps', ar: 'بِطَاقَةُ القِصَّةِ', you: 'the storyteller', them: 'the listener',
    mix: 'the five story steps with كَانَ and narrative connectors (D5-L05) told about an arts event, its meaning and its effect (D5-L06)',
    tasks: [
      { ex: '١) أَيْنَ وَمَتَى كُنْتَ؟ وَكَيْفَ كَانَ المَكَانُ؟', task: 'The scene with كَانَ + -an.', plan: 'أَيْنَ ← كُنْتُ فِي … · كَانَ المَكَانُ …', model: 'كُنْتُ فِي مَعْرِضٍ لِلْخَطِّ العَرَبِيِّ الشِّتَاءَ المَاضِيَ، وَكَانَ المَكَانُ وَاسِعًا وَهَادِئًا.', modelEn: 'I was at an Arabic calligraphy exhibition last winter, and the place was spacious and quiet.' },
      { ex: '٢) مَاذَا كُنْتُمْ تَفْعَلُونَ؟', task: 'The background with كُنَّا + present.', plan: 'مَاذَا ← كُنَّا نَتَجَوَّلُ … · كَانَ الخَطَّاطُ يَكْتُبُ …', model: 'كُنَّا نَتَجَوَّلُ بَيْنَ اللَّوْحَاتِ، وَكَانَ خَطَّاطٌ يَكْتُبُ أَسْمَاءَ الزُّوَّارِ.', modelEn: 'We were walking among the paintings, and a calligrapher was writing visitors’ names.' },
      { ex: '٣) مَاذَا حَدَثَ فَجْأَةً؟', task: 'The twist.', plan: '______________', model: 'فَجْأَةً طَلَبَ مِنِّي الخَطَّاطُ أَنْ أُجَرِّبَ القَلَمَ!', modelEn: 'Suddenly the calligrapher asked me to try the pen!' },
      { ex: '٤) مَاذَا عَبَّرَ الفَنُّ عَنْهُ؟ وَكَيْفَ أَثَّرَ فِيكَ؟', task: 'Meaning + effect.', plan: '______________', model: 'كَانَ الخَطُّ يُعَبِّرُ عَنِ الجَمَالِ وَالصَّبْرِ، وَأَثَّرَ فِيَّ كَثِيرًا.', modelEn: 'The calligraphy expressed beauty and patience, and it affected me a lot.' },
      { unexpected: true, ex: '٥) لِمَاذَا تَتَذَكَّرُ هٰذَا اليَوْمَ؟', task: 'A reflection with مَا زِلْتُ.', plan: '______________', model: 'مَا زِلْتُ أَتَذَكَّرُهُ لِأَنَّهُ أَلْهَمَنِي أَنْ أَتَعَلَّمَ الخَطَّ.', modelEn: 'I still remember it because it inspired me to learn calligraphy.' },
    ],
    foot: 'Speaker = the storyteller · Partner A = the listener. Tell the story in the five steps, in order; Partner A asks the next question only when one step is complete. Then swap and tell YOUR story.',
    girl: 'أَيْنَ كُنْتِ؟ · كَيْفَ أَثَّرَ فِيكِ؟ · لِمَاذَا تَتَذَكَّرِينَ …؟',
  },
  talk: {
    title: 'An arts memory in five steps', ar: 'ذِكْرَى فَنِّيَّةٌ',
    text: 'Tell the story of an arts event for one minute (a concert, an exhibition, a henna night, a nasheed evening — real or imagined) in five steps: the scene, the background, the twist, the ending and a reflection. Include what the art expressed and how it affected you, and one fair statement about culture (فِي بَعْضِ البُلْدَانِ …).',
    routes: {
      core: 'كَانَ … · كُنْتُ فِي … · فَجْأَةً …',
      develop: 'Add كُنَّا + present, تُعَبِّرُ عَنْ … and أَثَّرَ فِيَّ …',
      stretch: 'Add فِي تِلْكَ اللَّحْظَةِ, a fair cultural statement and مَا زِلْتُ أَتَذَكَّرُ …',
    },
  },
  task: {
    title: 'A story for the class anthology', ar: 'قِصَّةٌ لِمَجْمُوعَةِ الصَّفِّ',
    text: 'Write a short story (about 60–80 words) about an arts event you attended (real or imagined). Follow the five steps: scene (كَانَ + -an) → background (كُنْتُ / كُنَّا + present) → twist (فَجْأَةً) → ending → reflection (مَا زِلْتُ أَتَذَكَّرُ …). Include two arts words, what the art expressed and how it affected you.',
    range: [50, 100],
    phrases: [['كَانَ الجَوُّ … · كَانَ المَكَانُ مُزْدَحِمًا', 'the atmosphere was … · the place was crowded'], ['كُنَّا نَسْتَمِعُ إِلَى … · فَجْأَةً …', 'we were listening to … · suddenly …'], ['تُعَبِّرُ عَنْ … · أَثَّرَ فِيَّ · أَلْهَمَنِي', 'expresses … · affected me · inspired me'], ['فِي النِّهَايَةِ … · مَا زِلْتُ أَتَذَكَّرُ …', 'in the end … · I still remember …']],
    coreFrames: [
      { ar: 'كُنْتُ فِي ______ ، وَكَانَ ______ .', en: 'I was at …, and the … was …' },
      { ar: 'كُنَّا ______ .', en: 'We were …-ing.' },
      { ar: 'فَجْأَةً ______ .', en: 'Suddenly …' },
      { ar: 'كَانَتِ المُوسِيقَى / اللَّوْحَاتُ تُعَبِّرُ عَنْ ______ .', en: 'The music / the paintings expressed …' },
      { ar: 'مَا زِلْتُ أَتَذَكَّرُ ______ لِأَنَّ ______ .', en: 'I still remember … because …' },
    ],
    developFrames: [
      { ar: 'فِي تِلْكَ اللَّحْظَةِ ______ .', en: 'At that moment …' },
      { ar: 'أَثَّرَ فِيَّ ______ ، وَأَلْهَمَنِي أَنْ ______ .', en: '… affected me, and inspired me to …' },
    ],
    bank: ['كَانَ + مُزْدَحِمًا · هَادِئًا', 'كُنْتُ · كُنَّا', 'فَجْأَةً', 'فِي تِلْكَ اللَّحْظَةِ', 'فِي النِّهَايَةِ · لِلْأَسَفِ', 'العُودُ · النَّايُ · الخَطُّ', 'تُعَبِّرُ عَنْ · أَلْهَمَنِي', 'مَا زِلْتُ أَتَذَكَّرُ'],
    model: {
      text: 'فِي الشِّتَاءِ المَاضِي كُنْتُ فِي حَفْلَةٍ لِلْمُوسِيقَى العَرَبِيَّةِ مَعَ عَائِلَتِي. كَانَ المَسْرَحُ مُزْدَحِمًا، وَكَانَ الجَوُّ دَافِئًا. كُنَّا نَسْتَمِعُ إِلَى العُودِ وَالنَّايِ، وَكَانَتِ المُوسِيقَى تُعَبِّرُ عَنِ الحَنِينِ إِلَى الوَطَنِ. فَجْأَةً دَعَانِي العَازِفُ إِلَى المَسْرَحِ، وَفِي تِلْكَ اللَّحْظَةِ خِفْتُ كَثِيرًا! وَلٰكِنَّهُ عَلَّمَنِي نَغْمَةً بَسِيطَةً، وَصَفَّقَ الجُمْهُورُ. أَثَّرَتْ فِيَّ تِلْكَ اللَّيْلَةُ، وَأَلْهَمَتْنِي أَنْ أَتَعَلَّمَ العُودَ. مَا زِلْتُ أَتَذَكَّرُهَا كُلَّمَا سَمِعْتُ هٰذِهِ المُوسِيقَى.',
      en: '“Last winter I was at an Arabic music concert with my family. The theatre was crowded, and the atmosphere was warm. We were listening to the oud and the nay, and the music expressed longing for the homeland. Suddenly the player invited me onto the stage, and at that moment I was very scared! But he taught me a simple tune, and the audience clapped. That night affected me, and it inspired me to learn the oud. I still remember it whenever I hear this music.”',
      find: ['كَانَ المَسْرَحُ مُزْدَحِمًا', 'كُنَّا نَسْتَمِعُ', 'فَجْأَةً دَعَانِي', 'مَا زِلْتُ أَتَذَكَّرُهَا'],
    },
  },
});
