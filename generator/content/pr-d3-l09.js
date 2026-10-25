'use strict';
/* Practice Room · D3-L09 · Writing — my career plans and ambitions (four paragraphs). Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd3-l09',
  arShort: 'خُطَطِي وَطُمُوحَاتِي',
  grammar: 'four-paragraph plan: ambition + reason · skills + evidence · route in sequence (awwalan … thumma … baʿda al-takharruji …) · challenge + concession; future (sa- / sawfa / lan); purpose (li-kay); condition (idhā najaḥtu); connectors (iḍāfatan ilā dhālika · natījatan li-dhālika · ʿalā al-raghmi min anna)',
  focus: 'Students run their own writing workshop with speaking first: say the career-writing toolkit, act a planning dialogue, plan each paragraph aloud with cards, do a role-play card giving peer feedback on a draft, rehearse their article aloud for one minute, then build, fix and write a four-paragraph career-plan article.',
  words1: 'Future and ambition', words2: 'Connectors',
  dialogue: {
    title: 'Planning four paragraphs', ar: 'نُخَطِّطُ أَرْبَعَ فِقْرَاتٍ',
    lines: [
      ['A', 'مَا طُمُوحُكَ فِي الفِقْرَةِ الأُولَى؟', 'What is your ambition in paragraph one?'],
      ['B', 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ طَيَّارًا، لِأَنَّنِي أُحِبُّ السَّفَرَ.', 'I aspire to become a pilot, because I love travelling.'],
      ['A', 'وَمَهَارَاتُكَ؟', 'And your skills?'],
      ['B', 'أَنَا هَادِئٌ وَدَقِيقٌ؛ عَلَى سَبِيلِ المِثَالِ، أَحْلُّ مَسَائِلَ الفِيزِيَاءِ بِسُرْعَةٍ.', 'I am calm and precise; for example, I solve physics problems quickly.'],
      ['A', 'وَالطَّرِيقُ؟ وَالتَّحَدِّي؟', 'And the route? And the challenge?'],
      ['B', 'أَوَّلًا سَأَدْرُسُ الفِيزِيَاءَ، ثُمَّ سَأَلْتَحِقُ بِأَكَادِيمِيَّةِ طَيَرَانٍ. عَلَى الرَّغْمِ مِنْ أَنَّ التَّدْرِيبَ غَالٍ، فَإِنَّنِي سَأَبْحَثُ عَنْ مِنْحَةٍ.', 'First I will study physics, then join a flight academy. Although training is expensive, I will look for a scholarship.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: plan YOUR four paragraphs aloud the same way.',
  },
  qTitle: 'Plan aloud — one card per paragraph',
  questions: [
    { q: '¶١ مَا طُمُوحُكَ؟ وَلِمَاذَا؟', en: '¶1 What is your ambition? Why?', start: 'أَطْمَحُ إِلَى أَنْ … لِأَنَّ …', more: '… مُنْذُ أَنْ كُنْتُ صَغِيرًا …' },
    { q: '¶٢ مَا مَهَارَاتُكَ؟ أَعْطِ دَلِيلًا.', en: '¶2 Your skills? Give evidence.', start: 'أَنَا … ؛ عَلَى سَبِيلِ المِثَالِ …', more: '… إِضَافَةً إِلَى ذٰلِكَ …' },
    { q: '¶٣ مَا خُطُوَاتُكَ بِالتَّرْتِيبِ؟', en: '¶3 Your steps, in order?', start: 'أَوَّلًا سَأَدْرُسُ … ثُمَّ …', more: '… بَعْدَ التَّخَرُّجِ سَوْفَ …' },
    { q: '¶٤ مَا التَّحَدِّي؟', en: '¶4 What is the challenge?', start: 'التَّحَدِّي هُوَ …', more: '… عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …' },
    { q: 'كَيْفَ تَخْتِمُ المَقَالَةَ؟', en: 'How do you end the article?', start: 'إِذَا نَجَحْتُ، فَسَوْفَ …', more: '… نَتِيجَةً لِذٰلِكَ …' },
  ],
  card: {
    title: 'Role-play card — feedback on a partner’s career article', ar: 'تَغْذِيَةٌ رَاجِعَةٌ عَلَى مَقَالَةٍ', you: 'the reviewer', them: 'the writer',
    tasks: [
      { ex: 'هَلِ الفِقْرَةُ الأُولَى وَاضِحَةٌ؟', task: 'Comment on ¶1.', plan: '¶١ ← نَعَمْ، الطُّمُوحُ وَاضِحٌ، وَلٰكِنْ …', model: 'نَعَمْ، الطُّمُوحُ وَاضِحٌ، وَلٰكِنْ أَضِفْ سَبَبًا ثَانِيًا.', modelEn: 'Yes, the ambition is clear, but add a second reason.' },
      { ex: 'وَالمَهَارَاتُ؟', task: 'Ask for evidence.', plan: 'دَلِيلٌ ← أَيْنَ الدَّلِيلُ عَلَى …؟', model: 'كَتَبْتَ أَنَّكَ مُنَظَّمٌ، وَلٰكِنْ أَيْنَ الدَّلِيلُ؟ أَعْطِ مِثَالًا.', modelEn: 'You wrote that you are organised, but where is the evidence? Give an example.' },
      { ex: 'هَلْ هُنَاكَ أَخْطَاءٌ فِي المُسْتَقْبَلِ؟', task: 'Correct a future error.', plan: '', model: 'كَتَبْتَ «سَوْفَ لَا أَعْمَلُ»، وَالصَّوَابُ «لَنْ أَعْمَلَ».', modelEn: 'You wrote “sawfa lā aʿmalu”; the correct form is “lan aʿmala”.' },
      { unexpected: true, ex: 'مَا أَفْضَلُ جُمْلَةٍ فِي مَقَالَتِي؟', task: 'Praise one sentence.', plan: '', model: 'جُمْلَةُ «عَلَى الرَّغْمِ مِنْ أَنَّ الطَّرِيقَ طَوِيلٌ، فَإِنَّنِي لَنْ أَسْتَسْلِمَ» مُمْتَازَةٌ!', modelEn: 'The sentence “Although the road is long, I won’t give up” is excellent!' },
    ],
    girl: 'to a girl writer: كَتَبْتِ أَنَّكِ مُنَظَّمَةٌ · أَعْطِي · أَضِيفِي',
    notes: 'Feedback = strength + evidence check + one correction.',
  },
  talk: {
    title: 'One minute: say your article', ar: 'أَقُولُ مَقَالَتِي',
    text: 'Speak your four paragraphs aloud for one minute from your plan. Your partner ticks: ambition · evidence · sequence · concession.',
    routes: {
      core: 'One sentence per paragraph.',
      develop: 'Add evidence in ¶2 and sequence words in ¶3.',
      stretch: 'Add a concession in ¶4 and a condition to finish.',
    },
  },
  builder: [
    { en: 'In addition, I am good at languages.', cols: [['إِضَافَةً إِلَى ذٰلِكَ،', 'لِذٰلِكَ،'], ['أَنَا مَاهِرٌ', 'أَنَا مَاهِرًا'], ['فِي اللُّغَاتِ.', 'بِاللُّغَاتُ.']], key: [0, 0, 0], why: 'In addition = إِضَافَةً إِلَى ذٰلِكَ; predicate -un.' },
    { en: 'First I will study, then I will train.', cols: [['أَوَّلًا سَأَدْرُسُ،', 'أَوَّلًا دَرَسْتُ،'], ['ثُمَّ', 'لِأَنَّ'], ['سَأَتَدَرَّبُ.', 'أَتَدَرَّبَ.']], key: [0, 0, 0], why: 'Sequence in the future: sa- … ثُمَّ sa- …' },
    { en: 'As a result, I will get a good job.', cols: [['نَتِيجَةً لِذٰلِكَ،', 'عَلَى سَبِيلِ المِثَالِ،'], ['سَأَحْصُلُ عَلَى', 'سَأَحْصُلُ'], ['وَظِيفَةٍ جَيِّدَةٍ.', 'وَظِيفَةً جَيِّدَةً.']], key: [0, 0, 0], why: 'حَصَلَ عَلَى + genitive.' },
  ],
  errors: [
    { wrong: 'سَوْفَ لَا أَتْرُكُ حُلْمِي.', hint: 'Negative future.', right: 'لَنْ أَتْرُكَ حُلْمِي.', why: 'لَنْ + -a.' },
    { wrong: 'أَنَا مُنَظَّمٌ. أَنَا دَقِيقٌ. أَنَا صَبُورٌ.', hint: 'Join and prove.', right: 'أَنَا مُنَظَّمٌ وَدَقِيقٌ؛ عَلَى سَبِيلِ المِثَالِ، أُخَطِّطُ دُرُوسِي كُلَّ أُسْبُوعٍ.', why: 'Connectors + evidence.' },
    { wrong: 'عَلَى الرَّغْمِ مِنْ أَنَّ الطَّرِيقُ طَوِيلٌ، سَأُحَاوِلُ.', hint: 'Two things to fix.', right: 'عَلَى الرَّغْمِ مِنْ أَنَّ الطَّرِيقَ طَوِيلٌ، فَإِنَّنِي سَأُحَاوِلُ.', why: 'أَنَّ + -a; answer with فَإِنَّ.' },
  ],
  task: {
    title: 'A career-plan article in four paragraphs', ar: 'مَقَالَةٌ عَنْ خُطَطِي المِهَنِيَّةِ',
    text: 'Write an article (about 70–90 words) in four paragraphs for a careers magazine. ¶1 ambition + two reasons. ¶2 two skills with evidence. ¶3 your route in order (أَوَّلًا … ثُمَّ … بَعْدَ التَّخَرُّجِ …). ¶4 a challenge + a concession, and a condition to finish.',
    range: [60, 105],
    phrases: [['أَطْمَحُ إِلَى أَنْ أُصْبِحَ …', 'I aspire to become …'], ['عَلَى سَبِيلِ المِثَالِ … · إِضَافَةً إِلَى ذٰلِكَ …', 'for example … · in addition …'], ['أَوَّلًا … ثُمَّ … بَعْدَ التَّخَرُّجِ …', 'first … then … after graduating …'], ['عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّنِي …', 'although …, I …']],
    coreFrames: [
      { ar: '¶١ أَطْمَحُ إِلَى أَنْ أُصْبِحَ ______ ، لِأَنَّ ______ .', en: '¶1 I aspire to become …, because …' },
      { ar: '¶٢ أَنَا ______ ؛ عَلَى سَبِيلِ المِثَالِ، ______ .', en: '¶2 I am …; for example, …' },
      { ar: '¶٣ أَوَّلًا سَأَدْرُسُ ______ ، ثُمَّ ______ .', en: '¶3 First I will study …, then …' },
      { ar: '¶٤ التَّحَدِّي هُوَ ______ .', en: '¶4 The challenge is …' },
    ],
    developFrames: [
      { ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّنِي ______ .', en: 'Although …, I …' },
      { ar: 'إِذَا نَجَحْتُ، فَسَوْفَ ______ ؛ نَتِيجَةً لِذٰلِكَ ______ .', en: 'If I succeed, I will …; as a result …' },
    ],
    bank: ['أَطْمَحُ إِلَى أَنْ', 'أَنْوِي أَنْ', 'سَأَدْرُسُ · سَوْفَ أَتَدَرَّبُ', 'بَعْدَ التَّخَرُّجِ', 'إِضَافَةً إِلَى ذٰلِكَ', 'عَلَى سَبِيلِ المِثَالِ', 'نَتِيجَةً لِذٰلِكَ', 'عَلَى الرَّغْمِ مِنْ أَنَّ'],
    model: {
      text: `أَطْمَحُ إِلَى أَنْ أُصْبِحَ طَبِيبَةَ أَطْفَالٍ، لِأَنَّنِي أُحِبُّ الأَطْفَالَ، وَلِأَنَّ أُمِّي مُمَرِّضَةٌ وَأَلْهَمَتْنِي.
أَنَا صَبُورَةٌ وَمُجْتَهِدَةٌ؛ عَلَى سَبِيلِ المِثَالِ، أُدَرِّسُ أَبْنَاءَ جِيرَانِنَا كُلَّ سَبْتٍ. إِضَافَةً إِلَى ذٰلِكَ، أَنَا قَوِيَّةٌ فِي الأَحْيَاءِ.
أَوَّلًا سَأَدْرُسُ الكِيمْيَاءَ وَالأَحْيَاءَ، ثُمَّ سَأَدْرُسُ الطِّبَّ فِي الجَامِعَةِ. بَعْدَ التَّخَرُّجِ سَوْفَ أَتَدَرَّبُ فِي مُسْتَشْفًى لِلْأَطْفَالِ.
عَلَى الرَّغْمِ مِنْ أَنَّ الطَّرِيقَ طَوِيلٌ وَصَعْبٌ، فَإِنَّنِي لَنْ أَسْتَسْلِمَ. إِذَا نَجَحْتُ، فَسَوْفَ أَعْمَلُ فِي قَرْيَةِ جَدِّي، لِكَيْ أُسَاعِدَ العَائِلَاتِ هُنَاكَ.`,
      en: '“I aspire to become a children’s doctor, because I love children and because my mother is a nurse and inspired me. I am patient and hard-working; for example, I tutor our neighbours’ children every Saturday. In addition, I am strong in biology. First I will study chemistry and biology, then medicine at university. After graduating I will train in a children’s hospital. Although the road is long and hard, I won’t give up. If I succeed, I will work in my grandfather’s village, to help the families there.”',
      find: ['أَطْمَحُ إِلَى أَنْ أُصْبِحَ', 'عَلَى سَبِيلِ المِثَالِ', 'أَوَّلًا سَأَدْرُسُ', 'فَإِنَّنِي لَنْ أَسْتَسْلِمَ'],
    },
  },
  checkCore: 'write four clear paragraphs, each with its job?',
  checkDevelop: 'give evidence, a sequence, a concession and a condition?',
});
