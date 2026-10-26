'use strict';
/* Apply Workshop · D3-W04 · D3-L07 (Arabic proverbs and values: work ethic) + D3-L08 (reading job and career texts). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd3-w04', pair: ['d3-l07', 'd3-l08'],
  title: 'Values at Work: The Volunteer Advert', arShort: 'القِيَمُ فِي العَمَلِ',
  focus: 'Students join reading job adverts with values and proverbs: they read a volunteer advert from a food bank (يُطْلَبُ · يُشْتَرَطُ · يُفَضَّلُ), infer what the charity values, match proverbs to the requirements, decide if they are suitable, and write a reply that explains a proverb and applies it to themselves.',
  sortTitle: 'Advert language or values language?', sortCats: ['Proverbs and values · D3-L07', 'Advert language · D3-L08'],
  sort: [
    { ar: 'الصَّبْرُ مِفْتَاحُ الفَرَجِ', cat: 0 }, { ar: 'الأَمَانَةُ', cat: 0 }, { ar: 'يَعْنِي هٰذَا المَثَلُ أَنَّ …', cat: 0 }, { ar: 'لَا تَسْتَسْلِمْ', cat: 0 },
    { ar: 'يُطْلَبُ مُتَطَوِّعُونَ', cat: 1 }, { ar: 'يُشْتَرَطُ الالْتِزَامُ', cat: 1 }, { ar: 'يُفَضَّلُ مَنْ لَدَيْهِ خِبْرَةٌ', cat: 1 }, { ar: 'لِلتَّقَدُّمِ أَرْسِلْ …', cat: 1 },
  ],
  dialogue: {
    title: 'Reading the advert together', ar: 'نَقْرَأُ الإِعْلَانَ مَعًا',
    lines: [
      ['A', 'اسْمَعْ: «يُطْلَبُ مُتَطَوِّعُونَ لِبَنْكِ الطَّعَامِ يَوْمَ السَّبْتِ».', 'Listen: “Volunteers wanted for the food bank on Saturday.”'],
      ['B', 'وَمَا الشُّرُوطُ؟', 'And what are the requirements?'],
      ['A', '«يُشْتَرَطُ الالْتِزَامُ بِالوَقْتِ، وَيُفَضَّلُ مَنْ لَدَيْهِ خِبْرَةٌ فِي العَمَلِ الجَمَاعِيِّ».', '“Punctuality is required, and someone with teamwork experience is preferred.”'],
      ['B', 'يَبْدُو أَنَّ الانْضِبَاطَ مُهِمٌّ عِنْدَهُمْ. هٰذَا مِثْلُ المَثَلِ: «الوَقْتُ كَالسَّيْفِ».', 'It seems that discipline is important to them. That is like the proverb: “Time is like a sword.”'],
      ['A', 'مَاذَا يَعْنِي هٰذَا المَثَلُ؟', 'What does this proverb mean?'],
      ['B', 'يَعْنِي أَنَّ الوَقْتَ ثَمِينٌ؛ إِذَا لَمْ تَسْتَعْمِلْهُ جَيِّدًا، ضَاعَ.', 'It means that time is precious; if you don’t use it well, it is lost.'],
    ],
    notes: 'Advert passives (يُطْلَبُ · يُشْتَرَطُ · يُفَضَّلُ) and inference (يَبْدُو أَنَّ …) come from D3-L08; explaining and applying a proverb (يَعْنِي هٰذَا المَثَلُ أَنَّ …) and values nouns from D3-L07.',
  },
  card: {
    title: 'Reading card — the food bank advert', ar: 'إِعْلَانُ بَنْكِ الطَّعَامِ', you: 'the reader', them: 'the volunteer coordinator',
    mix: 'reading advert requirements and inferring from the text (D3-L08) and linking them to values and proverbs (D3-L07)',
    tasks: [
      { ex: '«يُشْتَرَطُ أَنْ يَكُونَ عُمْرُ المُتَطَوِّعِ أَرْبَعَ عَشْرَةَ سَنَةً عَلَى الأَقَلِّ.» — هَلْ أَنْتَ مُنَاسِبٌ؟', task: 'Check the requirement against yourself.', plan: 'هَلْ ← نَعَمْ / لَا، عُمْرِي …', model: 'نَعَمْ، أَنَا مُنَاسِبٌ؛ عُمْرِي خَمْسَ عَشْرَةَ سَنَةً.', modelEn: 'Yes, I am suitable; I am fifteen.' },
      { ex: '«يُفَضَّلُ مَنْ يَتَكَلَّمُ لُغَةً ثَانِيَةً.» — هَلْ هٰذَا ضَرُورِيٌّ؟', task: 'Required or preferred?', plan: 'يُفَضَّلُ ← لَيْسَ ضَرُورِيًّا، وَلٰكِنَّهُ …', model: 'لَيْسَ ضَرُورِيًّا، وَلٰكِنَّهُ مُفِيدٌ؛ أَنَا أَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ.', modelEn: 'It is not essential, but it is useful; I speak Arabic and English.' },
      { ex: 'مَا القِيمَةُ المُهِمَّةُ فِي هٰذَا الإِعْلَانِ؟ مَا الدَّلِيلُ؟', task: 'Infer a value with evidence from the text.', plan: '______________', model: 'يَبْدُو أَنَّ الأَمَانَةَ مُهِمَّةٌ، وَالدَّلِيلُ أَنَّهُمْ يَطْلُبُونَ مُتَطَوِّعِينَ لِتَوْزِيعِ الطَّعَامِ وَالمَالِ.', modelEn: 'It seems that honesty is important; the evidence is that they want volunteers to hand out food and money.' },
      { ex: 'مَاذَا يَعْنِي «الاتِّحَادُ قُوَّةٌ»؟', task: 'Explain the proverb and apply it.', plan: '______________', model: 'يَعْنِي أَنَّنَا أَقْوَى مَعًا؛ يَنْطَبِقُ هٰذَا المَثَلُ عَلَى العَمَلِ الجَمَاعِيِّ فِي بَنْكِ الطَّعَامِ.', modelEn: 'It means we are stronger together; this proverb applies to teamwork at the food bank.' },
      { unexpected: true, ex: 'إِذَا كَانَ العَمَلُ مُتْعِبًا، مَاذَا تَقُولُ لِنَفْسِكَ؟', task: 'Advise yourself with an imperative and a prohibition.', plan: '______________', model: 'أَقُولُ: اصْبِرْ وَلَا تَسْتَسْلِمْ، فَالصَّبْرُ مِفْتَاحُ الفَرَجِ.', modelEn: 'I say: be patient and don’t give up, for patience is the key to relief.' },
    ],
    foot: 'Partner A reads the advert lines and asks. Answer with evidence from the text (الدَّلِيلُ أَنَّ …). Task ! is personal. Then swap.',
    girl: 'هَلْ أَنْتِ مُنَاسِبَةٌ؟ · مَاذَا تَقُولِينَ لِنَفْسِكِ؟ — and she advises herself: اصْبِرِي وَلَا تَسْتَسْلِمِي',
  },
  talk: {
    title: 'A proverb for the volunteers', ar: 'مَثَلٌ لِلْمُتَطَوِّعِينَ',
    text: 'Talk for one minute to the new volunteers: what the advert requires and prefers, which value matters most at the food bank and why, one proverb and what it means, a time it applied to you (in the past), and two pieces of advice (one imperative, one لَا + verb).',
    routes: {
      core: 'يُشْتَرَطُ … · يُفَضَّلُ … · يَعْنِي هٰذَا المَثَلُ أَنَّ …',
      develop: 'Add a value with a reason and a past example (يَنْطَبِقُ هٰذَا المَثَلُ عَلَى …).',
      stretch: 'Add inference (يَبْدُو أَنَّ … · الدَّلِيلُ أَنَّ …) and advice: اجْتَهِدُوا · لَا تَسْتَسْلِمُوا.',
    },
  },
  task: {
    title: 'A reply to the volunteer advert', ar: 'رَدٌّ عَلَى الإِعْلَانِ',
    text: 'Write a reply (about 60–80 words) to the food bank. Include: • the post and two requirements from the advert, and whether you meet them • what the charity seems to value, with evidence from the text • one proverb, what it means and how it applies to you (a past example) • why you are suitable • a polite close.',
    range: [50, 100],
    phrases: [['قَرَأْتُ إِعْلَانَكُمْ: «يُطْلَبُ …»', 'I read your advert: “… wanted”'], ['يُشْتَرَطُ … ، وَأَنَا …', '… is required, and I …'], ['يَبْدُو أَنَّ … مُهِمٌّ عِنْدَكُمْ', 'it seems that … matters to you'], ['يَعْنِي هٰذَا المَثَلُ أَنَّ … · يَنْطَبِقُ عَلَيَّ لِأَنَّ …', 'this proverb means … · it applies to me because …']],
    coreFrames: [
      { ar: 'قَرَأْتُ إِعْلَانَكُمْ، وَيَسُرُّنِي أَنْ ______ .', en: 'I read your advert, and I am pleased to …' },
      { ar: 'يُشْتَرَطُ ______ ، وَأَنَا ______ .', en: '… is required, and I …' },
      { ar: 'يَبْدُو أَنَّ ______ مُهِمٌّ / مُهِمَّةٌ عِنْدَكُمْ.', en: 'It seems that … is important to you.' },
      { ar: 'يَعْنِي المَثَلُ «______» أَنَّ ______ .', en: 'The proverb “…” means that …' },
    ],
    developFrames: [
      { ar: 'يَنْطَبِقُ هٰذَا المَثَلُ عَلَيَّ؛ مَثَلًا، ______ .', en: 'This proverb applies to me; for example, …' },
      { ar: 'أَعْتَقِدُ أَنَّنِي مُنَاسِبٌ / مُنَاسِبَةٌ لِأَنَّ ______ .', en: 'I believe I am suitable because …' },
    ],
    bank: ['يُطْلَبُ · يُشْتَرَطُ · يُفَضَّلُ', 'يَبْدُو أَنَّ', 'الدَّلِيلُ أَنَّ', 'الأَمَانَةُ · الانْضِبَاطُ', 'المُثَابَرَةُ', 'يَعْنِي هٰذَا المَثَلُ أَنَّ', 'يَنْطَبِقُ عَلَى', 'الصَّبْرُ مِفْتَاحُ الفَرَجِ'],
    model: {
      text: 'السَّلَامُ عَلَيْكُمْ، قَرَأْتُ إِعْلَانَكُمْ، وَيَسُرُّنِي أَنْ أَتَطَوَّعَ يَوْمَ السَّبْتِ. يُشْتَرَطُ الالْتِزَامُ بِالوَقْتِ، وَأَنَا أَصِلُ إِلَى المَدْرَسَةِ مُبَكِّرًا دَائِمًا. يَبْدُو أَنَّ الانْضِبَاطَ وَالأَمَانَةَ مُهِمَّانِ عِنْدَكُمْ، وَالدَّلِيلُ أَنَّكُمْ تُوَزِّعُونَ الطَّعَامَ عَلَى العَائِلَاتِ. يَعْنِي المَثَلُ «الاتِّحَادُ قُوَّةٌ» أَنَّنَا أَقْوَى مَعًا، وَيَنْطَبِقُ عَلَيَّ؛ مَثَلًا، فَازَ فَرِيقُنَا فِي المُسَابَقَةِ لِأَنَّنَا تَعَاوَنَّا. أَعْتَقِدُ أَنَّنِي مُنَاسِبٌ لِأَنِّي صَبُورٌ وَمُتَعَاوِنٌ. شُكْرًا جَزِيلًا.',
      en: '“Peace be upon you. I read your advert, and I am pleased to volunteer on Saturday. Punctuality is required, and I always arrive at school early. It seems that discipline and honesty are important to you; the evidence is that you hand out food to families. The proverb “Unity is strength” means that we are stronger together, and it applies to me; for example, our team won the competition because we co-operated. I believe I am suitable because I am patient and co-operative. Thank you very much.”',
      find: ['يُشْتَرَطُ الالْتِزَامُ', 'يَبْدُو أَنَّ الانْضِبَاطَ', 'وَالدَّلِيلُ أَنَّكُمْ', 'يَعْنِي المَثَلُ'],
    },
  },
});
