'use strict';
/* Apply Workshop · D6-W02 · D6-L03 (Islamic celebrations) + D6-L04 (celebrations beyond Islam in the Arab world). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd6-w02', pair: ['d6-l03', 'd6-l04'],
  title: 'Diversity Week: Celebrations of the Arab World', arShort: 'أُسْبُوعُ التَّنَوُّعِ',
  focus: 'Students join Islamic celebrations with the wider picture of a multi-faith region: for the school’s Diversity Week they present Ramadan and Eid (general customs in the present, passives, a personal memory), name other faith communities and festivals precisely, and write a balanced display text with accurate, hedged claims.',
  dialogue: {
    title: 'Preparing the Diversity Week display', ar: 'نُحَضِّرُ مَعْرِضَ التَّنَوُّعِ',
    lines: [
      ['A', 'مَاذَا يَفْعَلُ المُسْلِمُونَ فِي رَمَضَانَ؟', 'What do Muslims do in Ramadan?'],
      ['B', 'يَصُومُونَ مِنَ الفَجْرِ إِلَى المَغْرِبِ، وَيَتَنَاوَلُونَ الإِفْطَارَ مَعَ العَائِلَةِ.', 'They fast from dawn to sunset, and they have iftar with the family.'],
      ['A', 'وَفِي العِيدِ؟', 'And at Eid?'],
      ['B', 'تُزَيَّنُ البُيُوتُ، وَتُوَزَّعُ الحَلْوَى عَلَى الأَطْفَالِ، وَتُتَبَادَلُ التَّهَانِي.', 'Houses are decorated, sweets are given to children, and greetings are exchanged.'],
      ['A', 'وَهَلْ فِي العَالَمِ العَرَبِيِّ طَوَائِفُ أُخْرَى؟', 'And are there other communities in the Arab world?'],
      ['B', 'نَعَمْ؛ مَثَلًا، يَحْتَفِلُ المَسِيحِيُّونَ الأَقْبَاطُ فِي مِصْرَ بِعِيدِ المِيلَادِ فِي السَّابِعِ مِنْ يَنَايِرَ.', 'Yes; for example, Coptic Christians in Egypt celebrate Christmas on the seventh of January.'],
    ],
    notes: 'General customs in the present (يَصُومُونَ) and passives for what is done (تُزَيَّنُ · تُوَزَّعُ · تُتَبَادَلُ) come from D6-L03; naming faith communities precisely (المَسِيحِيُّونَ الأَقْبَاطُ) from D6-L04. Keep every claim specific and hedged; customs vary between families and countries.',
  },
  card: {
    title: 'Role-play card — the Diversity Week guide', ar: 'مُرْشِدُ أُسْبُوعِ التَّنَوُّعِ', you: 'the student guide', them: 'a visitor to the display',
    mix: 'Ramadan and Eid in the present, the passive and a past memory (D6-L03) with precise, balanced language about other communities and festivals (D6-L04)',
    tasks: [
      { ex: 'مَاذَا يَأْكُلُ النَّاسُ عَلَى الإِفْطَارِ عَادَةً؟', task: 'A general custom in the present + a hedge.', plan: 'مَاذَا ← يَتَنَاوَلُونَ … · فِي كَثِيرٍ مِنَ البُيُوتِ …', model: 'فِي كَثِيرٍ مِنَ البُيُوتِ يَتَنَاوَلُونَ التَّمْرَ أَوَّلًا، ثُمَّ الشُّورْبَةَ.', modelEn: 'In many homes they eat dates first, then soup.' },
      { ex: 'مَاذَا يُفْعَلُ فِي العِيدِ؟', task: 'Two passives.', plan: 'مَاذَا ← تُزَيَّنُ … · تُوَزَّعُ …', model: 'تُزَيَّنُ الشَّوَارِعُ بِالأَضْوَاءِ، وَتُوَزَّعُ الهَدَايَا عَلَى الأَطْفَالِ.', modelEn: 'The streets are decorated with lights, and presents are given to the children.' },
      { ex: 'احْكِ عَنْ ذِكْرَى مِنْ رَمَضَانَ.', task: 'A personal memory in the past.', plan: '______________', model: 'صُمْتُ لِأَوَّلِ مَرَّةٍ عِنْدَمَا كَانَ عُمْرِي تِسْعَ سَنَوَاتٍ، وَشَعَرْتُ بِالفَخْرِ.', modelEn: 'I fasted for the first time when I was nine, and I felt proud.' },
      { ex: 'مَا الطَّوَائِفُ الأُخْرَى فِي العَالَمِ العَرَبِيِّ؟ أَيْنَ يُصَلُّونَ؟', task: 'Two communities and their places of worship, named precisely.', plan: '______________', model: 'هُنَاكَ مَسِيحِيُّونَ يُصَلُّونَ فِي الكَنَائِسِ، وَفِي بَعْضِ البُلْدَانِ يَهُودٌ يُصَلُّونَ فِي الكُنُسِ.', modelEn: 'There are Christians who pray in churches, and in some countries Jews who pray in synagogues.' },
      { unexpected: true, ex: 'هَلْ حَضَرْتَ مِهْرَجَانًا ثَقَافِيًّا؟', task: 'A festival (attended or read about) + a balanced view.', plan: '______________', model: 'قَرَأْتُ عَنْ مِهْرَجَانِ جَرَشَ فِي الأُرْدُنِّ؛ مِنْ نَاحِيَةٍ يَجْمَعُ النَّاسَ، وَمِنْ نَاحِيَةٍ أُخْرَى يَكُونُ مُزْدَحِمًا جِدًّا.', modelEn: 'I read about the Jerash Festival in Jordan; on the one hand it brings people together, on the other it gets very crowded.' },
    ],
    girl: 'احْكِي عَنْ ذِكْرَى · هَلْ حَضَرْتِ …؟',
  },
  talk: {
    title: 'Celebrations of the Arab world', ar: 'احْتِفَالَاتُ العَالَمِ العَرَبِيِّ',
    text: 'Present to Diversity Week visitors for one minute: what Muslims usually do in Ramadan, two things that are done at Eid (passive), one memory of your own, one celebration of another faith community named precisely, and a balanced view of festivals — with at least two hedges.',
    routes: {
      core: 'يَصُومُ المُسْلِمُونَ … · فِي العِيدِ …',
      develop: 'Add two passives (تُزَيَّنُ · تُوَزَّعُ) and a past memory.',
      stretch: 'Add a precise second community, مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى … and hedges.',
    },
  },
  task: {
    title: 'Our Diversity Week display text', ar: 'نَصُّ مَعْرِضِ التَّنَوُّعِ',
    text: 'Write a display text (about 60–80 words) for Diversity Week. Include: • what Muslims usually do in Ramadan (present) • two things that are done at Eid (passive) • one memory (past) and one plan for next Eid (future) • one other faith community and its celebration, named precisely • a balanced sentence • at least two hedges.',
    range: [50, 100],
    phrases: [['يَصُومُ المُسْلِمُونَ … · يَتَنَاوَلُونَ …', 'Muslims fast … · they eat …'], ['تُزَيَّنُ … · تُوَزَّعُ … · تُتَبَادَلُ …', '… are decorated · given out · exchanged'], ['يَحْتَفِلُ المَسِيحِيُّونَ بِ…', 'Christians celebrate …'], ['فِي كَثِيرٍ مِنَ البُيُوتِ · لَيْسَ دَائِمًا', 'in many homes · not always']],
    coreFrames: [
      { ar: 'فِي رَمَضَانَ يَصُومُ المُسْلِمُونَ ______ .', en: 'In Ramadan Muslims fast …' },
      { ar: 'فِي العِيدِ تُزَيَّنُ ______ ، وَتُوَزَّعُ ______ .', en: 'At Eid … are decorated, and … are given out.' },
      { ar: 'صُمْتُ لِأَوَّلِ مَرَّةٍ ______ .', en: 'I fasted for the first time …' },
      { ar: 'يَحْتَفِلُ ______ بِ ______ فِي ______ .', en: '… celebrate … in …' },
      { ar: 'فِي العِيدِ القَادِمِ سَوْفَ ______ .', en: 'Next Eid I will …' },
    ],
    developFrames: [
      { ar: 'مِنْ نَاحِيَةٍ ______ ، وَمِنْ نَاحِيَةٍ أُخْرَى ______ .', en: 'On the one hand …, on the other …' },
      { ar: 'فِي كَثِيرٍ مِنَ البُيُوتِ ______ ، وَلٰكِنْ لَيْسَ دَائِمًا.', en: 'In many homes …, but not always.' },
    ],
    bank: ['يَصُومُ · يُفْطِرُ', 'السُّحُورُ · الإِفْطَارُ', 'تُزَيَّنُ · تُوَزَّعُ', 'تُتَبَادَلُ التَّهَانِي', 'كَنِيسَةٌ · كَنِيسٌ', 'طَائِفَةٌ · مِهْرَجَانٌ', 'فِي كَثِيرٍ مِنَ البُيُوتِ', 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى'],
    model: {
      text: 'فِي رَمَضَانَ يَصُومُ المُسْلِمُونَ مِنَ الفَجْرِ إِلَى المَغْرِبِ، وَفِي كَثِيرٍ مِنَ البُيُوتِ يَتَنَاوَلُونَ التَّمْرَ أَوَّلًا. فِي العِيدِ تُزَيَّنُ البُيُوتُ، وَتُوَزَّعُ الحَلْوَى عَلَى الأَطْفَالِ. صُمْتُ لِأَوَّلِ مَرَّةٍ عِنْدَمَا كَانَ عُمْرِي تِسْعَ سَنَوَاتٍ، وَفِي العِيدِ القَادِمِ سَوْفَ أُسَاعِدُ فِي تَزْيِينِ المَسْجِدِ. فِي العَالَمِ العَرَبِيِّ طَوَائِفُ مُخْتَلِفَةٌ؛ مَثَلًا، يَحْتَفِلُ المَسِيحِيُّونَ الأَقْبَاطُ فِي مِصْرَ بِعِيدِ المِيلَادِ فِي يَنَايِرَ. مِنْ نَاحِيَةٍ تَخْتَلِفُ الاحْتِفَالَاتُ، وَمِنْ نَاحِيَةٍ أُخْرَى تَجْمَعُ كُلُّهَا العَائِلَاتِ.',
      en: '“In Ramadan Muslims fast from dawn to sunset, and in many homes they eat dates first. At Eid houses are decorated, and sweets are given to the children. I fasted for the first time when I was nine, and next Eid I will help decorate the mosque. In the Arab world there are different communities; for example, Coptic Christians in Egypt celebrate Christmas in January. On the one hand the celebrations differ; on the other hand they all bring families together.”',
      find: ['يَصُومُ المُسْلِمُونَ', 'تُزَيَّنُ البُيُوتُ', 'صُمْتُ لِأَوَّلِ مَرَّةٍ', 'مِنْ نَاحِيَةٍ'],
    },
  },
});
