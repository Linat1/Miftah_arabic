'use strict';
/* Apply Workshop · D6-W03 · D6-L05 (comparing countries: global connections and the diaspora) + D6-L06 (Arabic around the world). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd6-w03', pair: ['d6-l05', 'd6-l06'],
  title: 'Options Evening: Why Arabic Matters to Me', arShort: 'لِمَاذَا العَرَبِيَّةُ مُهِمَّةٌ لِي؟',
  focus: 'Students join belonging with the global reach of Arabic: at the options evening they speak personally about belonging to two places (أَنْتَمِي إِلَى · أَحْتَفِظُ بِ… · أُوَازِنُ بَيْنَ …), then make the case for Arabic with its status, a figure and words English took from it, and write a persuasive leaflet paragraph that joins both.',
  dialogue: {
    title: 'At the Arabic table', ar: 'عِنْدَ طَاوِلَةِ العَرَبِيَّةِ',
    lines: [
      ['A', 'لِمَاذَا تَدْرُسُ العَرَبِيَّةَ؟', 'Why do you study Arabic?'],
      ['B', 'لِأَنِّي أَنْتَمِي إِلَى ثَقَافَتَيْنِ: البِرِيطَانِيَّةِ وَاليَمَنِيَّةِ، وَأُرِيدُ أَنْ أَحْتَفِظَ بِلُغَةِ جَدِّي.', 'Because I belong to two cultures, British and Yemeni, and I want to keep my grandfather’s language.'],
      ['A', 'وَهَلِ العَرَبِيَّةُ مُفِيدَةٌ فِي العَالَمِ؟', 'And is Arabic useful in the world?'],
      ['B', 'طَبْعًا! تُعَدُّ مِنْ أَكْثَرِ اللُّغَاتِ انْتِشَارًا، وَهِيَ إِحْدَى لُغَاتِ الأُمَمِ المُتَّحِدَةِ.', 'Of course! It is one of the most widespread languages, and it is one of the languages of the United Nations.'],
      ['A', 'وَهَلْ أَخَذَتِ الإِنْجِلِيزِيَّةُ كَلِمَاتٍ مِنْهَا؟', 'And did English take words from it?'],
      ['B', 'نَعَمْ، مِثْلَ «سُكَّر» وَ«قَهْوَة» وَ«الجَبْر». تَفْتَحُ العَرَبِيَّةُ لَكَ أَبْوَابًا كَثِيرَةً.', 'Yes, like “sugar”, “coffee” and “algebra”. Arabic opens many doors for you.'],
    ],
    notes: 'Belonging verbs with prepositions (أَنْتَمِي إِلَى · أَحْتَفِظُ بِ…) come from D6-L05; status language (تُعَدُّ مِنْ … · إِحْدَى …) and loanwords from D6-L06.',
  },
  card: {
    title: 'Role-play card — a parent at options evening', ar: 'وَلِيُّ أَمْرٍ فِي أُمْسِيَةِ الخِيَارَاتِ', you: 'a student ambassador for Arabic', them: 'a parent at the Arabic table',
    mix: 'belonging, keeping, adapting and balancing two cultures (D6-L05) with the status, reach and gifts of Arabic (D6-L06)',
    tasks: [
      { ex: 'لِمَاذَا اخْتَرْتَ العَرَبِيَّةَ؟', task: 'A personal reason with a belonging verb.', plan: 'لِمَاذَا ← أَنْتَمِي إِلَى … · أَحْتَفِظُ بِ…', model: 'لِأَنِّي أَنْتَمِي إِلَى عَائِلَةٍ سُودَانِيَّةٍ، وَأُرِيدُ أَنْ أَحْتَفِظَ بِلُغَتِهَا.', modelEn: 'Because I belong to a Sudanese family, and I want to keep its language.' },
      { ex: 'هَلْ هِيَ لُغَةٌ مُهِمَّةٌ فِعْلًا؟', task: 'Status with تُعَدُّ / إِحْدَى.', plan: 'هَلْ ← تُعَدُّ مِنْ … · إِحْدَى …', model: 'نَعَمْ، تُعَدُّ مِنْ أَكْثَرِ اللُّغَاتِ انْتِشَارًا، وَهِيَ إِحْدَى لُغَاتِ الأُمَمِ المُتَّحِدَةِ السِّتِّ.', modelEn: 'Yes, it is one of the most widespread languages, and one of the six UN languages.' },
      { ex: 'كَمْ شَخْصًا يَتَكَلَّمُهَا؟', task: 'A figure with يَبْلُغُ + a hedge.', plan: '______________', model: 'يَبْلُغُ عَدَدُ المُتَحَدِّثِينَ بِهَا أَكْثَرَ مِنْ ثَلَاثِمِئَةِ مِلْيُونِ شَخْصٍ تَقْرِيبًا.', modelEn: 'The number of its speakers is more than three hundred million people, approximately.' },
      { ex: 'هَلْ مِنَ الصَّعْبِ أَنْ تُوَازِنَ بَيْنَ ثَقَافَتَيْنِ؟', task: 'Balancing two cultures + adapting.', plan: '______________', model: 'أَحْيَانًا، وَلٰكِنِّي أُوَازِنُ بَيْنَهُمَا؛ تَكَيَّفَتْ عَائِلَتِي مَعَ الحَيَاةِ هُنَا، وَنَحْتَفِظُ بِعَادَاتِنَا أَيْضًا.', modelEn: 'Sometimes, but I balance them; my family adapted to life here, and we keep our customs too.' },
      { unexpected: true, ex: 'اذْكُرْ كَلِمَتَيْنِ إِنْجِلِيزِيَّتَيْنِ مِنْ أَصْلٍ عَرَبِيٍّ.', task: 'Two loanwords as evidence.', plan: '______________', model: '«صِفْر» وَ«قَهْوَة» — أَصْبَحَتَا كَلِمَتَيْنِ فِي الإِنْجِلِيزِيَّةِ.', modelEn: '“ṣifr” became “zero”, and “qahwa” became “coffee”.' },
    ],
    girl: 'لِمَاذَا اخْتَرْتِ العَرَبِيَّةَ؟ · هَلْ مِنَ الصَّعْبِ أَنْ تُوَازِنِي …؟',
  },
  talk: {
    title: 'Choose Arabic! My one-minute pitch', ar: 'اخْتَرِ العَرَبِيَّةَ!',
    text: 'Give a one-minute pitch at options evening: your personal connection (belonging, what you keep, how you balance two cultures), then the case for Arabic — its status, one figure, two words English took from it, and what it opens for you.',
    routes: {
      core: 'أَنْتَمِي إِلَى … · تُعَدُّ العَرَبِيَّةُ مِنْ …',
      develop: 'Add أَحْتَفِظُ بِ… · يَبْلُغُ عَدَدُ … and two loanwords.',
      stretch: 'Add أُوَازِنُ بَيْنَ … وَ… · تَكَيَّفْنَا مَعَ … and تَفْتَحُ لَكَ أَبْوَابًا فِي …',
    },
  },
  task: {
    title: 'A leaflet paragraph: Choose Arabic!', ar: 'اخْتَرِ العَرَبِيَّةَ!',
    text: 'Write a persuasive paragraph (about 60–80 words) for the options-evening leaflet. Include: • your personal connection (أَنْتَمِي إِلَى … · أَحْتَفِظُ بِ…) • how you balance or adapt • the status of Arabic (تُعَدُّ مِنْ … / إِحْدَى …) • one figure (يَبْلُغُ …) • two words English took from Arabic • what Arabic opens for students.',
    range: [50, 100],
    phrases: [['أَنْتَمِي إِلَى … وَ…', 'I belong to … and …'], ['تُعَدُّ العَرَبِيَّةُ مِنْ أَكْثَرِ اللُّغَاتِ انْتِشَارًا', 'Arabic is one of the most widespread languages'], ['يَبْلُغُ عَدَدُ المُتَحَدِّثِينَ …', 'the number of speakers reaches …'], ['تَفْتَحُ لَكَ أَبْوَابًا فِي …', 'it opens doors for you in …']],
    coreFrames: [
      { ar: 'أَنْتَمِي إِلَى ______ وَ ______ .', en: 'I belong to … and …' },
      { ar: 'أَحْتَفِظُ بِ ______ .', en: 'I keep …' },
      { ar: 'تُعَدُّ العَرَبِيَّةُ مِنْ ______ .', en: 'Arabic is one of …' },
      { ar: 'يَبْلُغُ عَدَدُ المُتَحَدِّثِينَ بِهَا ______ .', en: 'The number of its speakers reaches …' },
      { ar: 'أَخَذَتِ الإِنْجِلِيزِيَّةُ كَلِمَاتٍ مِثْلَ ______ .', en: 'English took words like …' },
    ],
    developFrames: [
      { ar: 'أُوَازِنُ بَيْنَ ______ وَ ______ .', en: 'I balance … and …' },
      { ar: 'تَفْتَحُ لَكَ أَبْوَابًا فِي ______ .', en: 'It opens doors for you in …' },
    ],
    bank: ['أَنْتَمِي إِلَى', 'أَحْتَفِظُ بِ…', 'أُوَازِنُ بَيْنَ … وَ…', 'تَكَيَّفَ مَعَ', 'تُعَدُّ مِنْ · إِحْدَى', 'يَبْلُغُ عَدَدُ', 'سُكَّرٌ · قَهْوَةٌ · صِفْرٌ', 'تَفْتَحُ أَبْوَابًا'],
    model: {
      text: 'أَنْتَمِي إِلَى ثَقَافَتَيْنِ: البِرِيطَانِيَّةِ وَاليَمَنِيَّةِ، وَأَحْتَفِظُ بِلُغَةِ جَدِّي وَبِعَادَاتِ عَائِلَتِي. أُوَازِنُ بَيْنَ الثَّقَافَتَيْنِ كُلَّ يَوْمٍ، وَالعَرَبِيَّةُ تُسَاعِدُنِي عَلَى ذٰلِكَ. تُعَدُّ العَرَبِيَّةُ مِنْ أَكْثَرِ اللُّغَاتِ انْتِشَارًا، وَهِيَ إِحْدَى لُغَاتِ الأُمَمِ المُتَّحِدَةِ، وَيَبْلُغُ عَدَدُ المُتَحَدِّثِينَ بِهَا أَكْثَرَ مِنْ ثَلَاثِمِئَةِ مِلْيُونٍ تَقْرِيبًا. أَخَذَتِ الإِنْجِلِيزِيَّةُ مِنْهَا كَلِمَاتٍ مِثْلَ «سُكَّر» وَ«قَهْوَة». اخْتَرِ العَرَبِيَّةَ، لِأَنَّهَا تَفْتَحُ لَكَ أَبْوَابًا فِي العَمَلِ وَالسَّفَرِ وَالصَّدَاقَةِ!',
      en: '“I belong to two cultures, British and Yemeni, and I keep my grandfather’s language and my family’s customs. I balance the two cultures every day, and Arabic helps me do that. Arabic is one of the most widespread languages, it is one of the languages of the United Nations, and it has more than three hundred million speakers, approximately. English took words from it like “sugar” and “coffee”. Choose Arabic, because it opens doors for you in work, travel and friendship!”',
      find: ['أَنْتَمِي إِلَى ثَقَافَتَيْنِ', 'أُوَازِنُ بَيْنَ', 'تُعَدُّ العَرَبِيَّةُ', 'تَفْتَحُ لَكَ أَبْوَابًا'],
    },
  },
});
