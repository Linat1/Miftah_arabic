'use strict';
/* Apply Workshop · D5-W05 · D5-L09 (writing: my leisure life, then · now · next) + D5-L10 (listening: hearing the tense). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd5-w05', pair: ['d5-l09', 'd5-l10'],
  title: 'Leisure Podcast: Then, Now and Next', arShort: 'بُودْكَاسْتُ وَقْتِ الفَرَاغِ',
  focus: 'Students join hearing the tense with writing across time: they listen to podcast clips and decide past · used to · present · future from endings, prefixes and time markers, record their own then–now–next clip, and write a four-paragraph text about their leisure life with an opinion.',
  sortTitle: 'Then, or now and next?', sortCats: ['Then: past and “used to”', 'Now and next: present and future'],
  sort: [
    { ar: 'كُنْتُ أَلْعَبُ', cat: 0 }, { ar: 'تَدَرَّبْتُ أَمْسِ', cat: 0 }, { ar: 'فِي الطُّفُولَةِ', cat: 0 }, { ar: 'شَارَكْتُ فِي سِبَاقٍ', cat: 0 },
    { ar: 'أَمَّا الآنَ فَأُمَارِسُ', cat: 1 }, { ar: 'كُلَّ يَوْمٍ', cat: 1 }, { ar: 'سَأَشْتَرِكُ فِي نَادٍ', cat: 1 }, { ar: 'أَنْوِي أَنْ أَتَعَلَّمَ', cat: 1 },
  ],
  dialogue: {
    title: 'A podcast interview', ar: 'مُقَابَلَةٌ فِي البُودْكَاسْتِ',
    lines: [
      ['A', 'مَاذَا كُنْتَ تَفْعَلُ فِي الطُّفُولَةِ؟', 'What did you use to do as a child?'],
      ['B', 'كُنْتُ أَلْعَبُ التِّنِسَ كُلَّ سَبْتٍ مَعَ أَبِي.', 'I used to play tennis every Saturday with my father.'],
      ['A', 'وَالآنَ؟', 'And now?'],
      ['B', 'أَمَّا الآنَ فَأُمَارِسُ السِّبَاحَةَ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ؛ أَمْسِ تَدَرَّبْتُ سَاعَتَيْنِ.', 'But now I swim three times a week; yesterday I trained for two hours.'],
      ['A', 'وَمَا خُطَطُكَ؟', 'And what are your plans?'],
      ['B', 'سَأُشَارِكُ فِي سِبَاقٍ الشَّهْرَ القَادِمَ، وَأَعْتَقِدُ أَنَّ الرِّيَاضَةَ تُعَلِّمُنَا الصَّبْرَ.', 'I will take part in a race next month, and I believe that sport teaches us patience.'],
    ],
    notes: 'Hearing the tense (كُنْتُ + present · past endings · سَـ / سَوْفَ · time markers) comes from D5-L10; the then → now → next → opinion plan (أَمَّا الآنَ فَ… · أَعْتَقِدُ أَنَّ …) from D5-L09.',
  },
  card: {
    title: 'Listening card — which tense?', ar: 'أَيُّ زَمَنٍ؟', you: 'the listener', them: 'the podcast host',
    mix: 'hearing past, used to, present and future (D5-L10) and placing each detail in the then–now–next plan (D5-L09)',
    tasks: [
      { ex: '«شَارَكْتُ فِي سِبَاقٍ، وَسَأُشَارِكُ فِي سِبَاقٍ آخَرَ الشَّهْرَ القَادِمَ.» — مَتَى السِّبَاقُ الثَّانِي؟', task: 'Find the future detail.', plan: 'مَتَى ← سَأُشَارِكُ + الشَّهْرَ القَادِمَ', model: 'الشَّهْرَ القَادِمَ.', modelEn: 'Next month.' },
      { ex: '«كُنْتُ أَلْعَبُ التِّنِسَ، وَالآنَ أَلْعَبُ الغُولْفَ.» — مَاذَا يَلْعَبُ الآنَ؟', task: 'Used to vs now.', plan: 'الآنَ ← أَلْعَبُ …', model: 'يَلْعَبُ الغُولْفَ الآنَ؛ التِّنِسُ كَانَ فِي المَاضِي.', modelEn: 'He plays golf now; tennis was in the past.' },
      { ex: '«لَمْ أَتَدَرَّبْ أَمْسِ، بَلْ تَدَرَّبْتُ اليَوْمَ صَبَاحًا.» — مَتَى تَدَرَّبَ؟', task: 'The trap: لَمْ … بَلْ …', plan: '______________', model: 'اليَوْمَ صَبَاحًا، لَيْسَ أَمْسِ.', modelEn: 'This morning, not yesterday.' },
      { ex: '«أُخْتِي تَرْسُمُ كُلَّ يَوْمٍ، أَمَّا أَنَا فَأَعْزِفُ عَلَى البِيَانُو.» — مَنْ يَرْسُمُ؟', task: 'Who does what?', plan: '______________', model: 'أُخْتُهُ تَرْسُمُ، وَهُوَ يَعْزِفُ عَلَى البِيَانُو.', modelEn: 'His sister draws, and he plays the piano.' },
      { unexpected: true, ex: 'وَأَنْتَ: مَا هِوَايَتُكَ فِي الطُّفُولَةِ، وَالآنَ، وَفِي المُسْتَقْبَلِ؟', task: 'Three tenses in three sentences.', plan: '______________', model: 'كُنْتُ أَرْسُمُ كَثِيرًا، أَمَّا الآنَ فَأَلْعَبُ الشِّطْرَنْجَ، وَسَأَتَعَلَّمُ البَرْمَجَةَ.', modelEn: 'I used to draw a lot, but now I play chess, and I will learn programming.' },
    ],
    foot: 'Partner A reads each clip twice. Say the tense and the clue (an ending, a prefix, سَوْفَ, كُنْتُ, a time marker), then the answer. Task ! is your then–now–next. Then swap.',
    girl: 'وَأَنْتِ: مَا هِوَايَتُكِ …؟',
  },
  talk: {
    title: 'My podcast clip: then, now, next', ar: 'مَقْطَعِي: المَاضِي وَالحَاضِرُ وَالمُسْتَقْبَلُ',
    text: 'Record a one-minute clip about your free time in four parts: (1) what you used to do as a child + one memory, (2) your hobbies now and how often, (3) your plans, (4) your opinion on why hobbies matter. Your partner writes down every tense they hear.',
    routes: {
      core: 'كُنْتُ أَلْعَبُ … · الآنَ أُمَارِسُ … · سَأَشْتَرِكُ …',
      develop: 'Add one past event with a time marker (أَمْسِ · الأُسْبُوعَ المَاضِيَ).',
      stretch: 'Add أَمَّا الآنَ فَ… · أَنْوِي أَنْ … · أَعْتَقِدُ أَنَّ … and a trap with لَمْ … بَلْ …',
    },
  },
  task: {
    title: 'My leisure life: then, now and next', ar: 'وَقْتُ فَرَاغِي',
    text: 'Write a text (about 60–80 words) in four short paragraphs. ¶1 past: what you used to do (كُنْتُ + present) + one memory with past verbs. ¶2 present: أَمَّا الآنَ فَ… + two hobbies with frequency. ¶3 future: two plans. ¶4 opinion: why hobbies matter. Use at least one connector in each paragraph.',
    range: [50, 100],
    phrases: [['فِي الطُّفُولَةِ كُنْتُ …', 'as a child I used to …'], ['أَمَّا الآنَ فَ…', 'but now …'], ['سَأَشْتَرِكُ فِي … · أَنْوِي أَنْ …', 'I will join … · I intend to …'], ['أَعْتَقِدُ أَنَّ … · وَفِي الخِتَامِ …', 'I believe that … · and finally …']],
    coreFrames: [
      { ar: 'فِي الطُّفُولَةِ كُنْتُ ______ .', en: '¶1 As a child I used to …' },
      { ar: 'وَفِي يَوْمٍ مِنَ الأَيَّامِ ______ .', en: '¶1 And one day I …' },
      { ar: 'أَمَّا الآنَ فَأُمَارِسُ ______ ______ فِي الأُسْبُوعِ.', en: '¶2 But now I do … (how often) a week.' },
      { ar: 'فِي المُسْتَقْبَلِ سَوْفَ ______ .', en: '¶3 In future I will …' },
      { ar: 'أَعْتَقِدُ أَنَّ الهِوَايَاتِ ______ .', en: '¶4 I believe that hobbies …' },
    ],
    developFrames: [
      { ar: 'بِالإِضَافَةِ إِلَى ذٰلِكَ، ______ .', en: 'In addition, …' },
      { ar: 'أَنْوِي أَنْ ______ لِأَنَّ ______ .', en: 'I intend to … because …' },
    ],
    bank: ['كُنْتُ أَلْعَبُ · كُنْتُ أَرْسُمُ', 'أَمْسِ · الأُسْبُوعَ المَاضِيَ', 'أَمَّا الآنَ فَ…', 'مَرَّتَيْنِ فِي الأُسْبُوعِ', 'سَأَشْتَرِكُ · سَوْفَ أَتَعَلَّمُ', 'أَنْوِي أَنْ', 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'أَعْتَقِدُ أَنَّ'],
    model: {
      text: `فِي الطُّفُولَةِ كُنْتُ أَلْعَبُ التِّنِسَ مَعَ أَبِي كُلَّ سَبْتٍ. وَفِي يَوْمٍ مِنَ الأَيَّامِ فُزْتُ عَلَيْهِ لِأَوَّلِ مَرَّةٍ!
أَمَّا الآنَ فَأُمَارِسُ السِّبَاحَةَ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ، وَبِالإِضَافَةِ إِلَى ذٰلِكَ أَقْرَأُ الرِّوَايَاتِ كُلَّ مَسَاءٍ.
فِي المُسْتَقْبَلِ سَأُشَارِكُ فِي سِبَاقِ سِبَاحَةٍ، وَأَنْوِي أَنْ أَتَعَلَّمَ الغَوْصَ.
أَعْتَقِدُ أَنَّ الهِوَايَاتِ مُهِمَّةٌ لِأَنَّهَا تُرِيحُنَا وَتُعَلِّمُنَا الصَّبْرَ.`,
      en: '“As a child I used to play tennis with my father every Saturday. And one day I beat him for the first time! / But now I swim three times a week, and in addition I read novels every evening. / In future I will take part in a swimming race, and I intend to learn diving. / I believe hobbies are important because they relax us and teach us patience.”',
      find: ['كُنْتُ أَلْعَبُ التِّنِسَ', 'أَمَّا الآنَ فَأُمَارِسُ', 'سَأُشَارِكُ فِي', 'أَعْتَقِدُ أَنَّ'],
    },
  },
});
