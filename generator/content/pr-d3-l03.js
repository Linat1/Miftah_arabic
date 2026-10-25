'use strict';
/* Practice Room · D3-L03 · Skills and qualities — what makes a good worker? Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd3-l03',
  arShort: 'المَهَارَاتُ وَالصِّفَاتُ',
  grammar: 'needs: yaḥtāju ilā + noun (yaḥtāju al-ṭabību ilā al-ṣabri); must: yajibu an yakūna + adjective in -an (ṣabūran / ṣabūratan); can: yastaṭīʿu an + verb in -a; proving a quality with behaviour (mathalan, ʿindamā …)',
  focus: 'Students run their own speaking and writing practice about job skills: say the skills and qualities, act a short dialogue, answer question cards, do a role-play card for a volunteer position, give a one-minute talk about the skills a job needs, then build, fix and write a “my skills” profile with evidence.',
  words1: 'Skills', words2: 'Qualities (m. / f.)',
  dialogue: {
    title: 'What does a good teacher need?', ar: 'إِلَامَ يَحْتَاجُ المُعَلِّمُ الجَيِّدُ؟',
    lines: [
      ['A', 'إِلَامَ يَحْتَاجُ المُعَلِّمُ الجَيِّدُ؟', 'What does a good teacher need?'],
      ['B', 'يَحْتَاجُ إِلَى مَهَارَةِ التَّوَاصُلِ وَإِدَارَةِ الوَقْتِ.', 'He needs communication skills and time management.'],
      ['A', 'وَكَيْفَ يَجِبُ أَنْ يَكُونَ؟', 'And what must he be like?'],
      ['B', 'يَجِبُ أَنْ يَكُونَ صَبُورًا وَمُنَظَّمًا.', 'He must be patient and organised.'],
      ['A', 'وَأَنْتَ، هَلْ أَنْتَ مُنَظَّمٌ؟', 'And you — are you organised?'],
      ['B', 'نَعَمْ! مَثَلًا، أَسْتَطِيعُ أَنْ أُخَطِّطَ أُسْبُوعِي كُلَّهُ يَوْمَ الأَحَدِ.', 'Yes! For example, I can plan my whole week on Sunday.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: talk about a female job (مُمَرِّضَةٌ) — يَجِبُ أَنْ تَكُونَ صَبُورَةً.',
  },
  questions: [
    { q: 'إِلَامَ يَحْتَاجُ الطَّبِيبُ؟', en: 'What does a doctor need?', start: 'يَحْتَاجُ إِلَى … وَ …', more: '… لِأَنَّهُ …' },
    { q: 'كَيْفَ يَجِبُ أَنْ تَكُونَ المُمَرِّضَةُ؟', en: 'What must a nurse (f.) be like?', start: 'يَجِبُ أَنْ تَكُونَ … وَ …', more: '… لِأَنَّ المَرْضَى …' },
    { q: 'مَا أَقْوَى مَهَارَةٍ عِنْدَكَ؟', en: 'What is your strongest skill?', start: 'أَقْوَى مَهَارَةٍ عِنْدِي …', more: '… مَثَلًا عِنْدَمَا …' },
    { q: 'مَاذَا تَسْتَطِيعُ أَنْ تَفْعَلَ جَيِّدًا؟', en: 'What can you do well?', start: 'أَسْتَطِيعُ أَنْ …', more: '… لِذٰلِكَ …' },
    { q: 'هَلِ العَمَلُ الجَمَاعِيُّ مُهِمٌّ؟', en: 'Is teamwork important?', start: 'نَعَمْ، لِأَنَّ …', more: '… مَثَلًا فِي فَرِيقِ …' },
  ],
  card: {
    title: 'Role-play card — applying to volunteer at a summer camp', ar: 'مُتَطَوِّعٌ فِي مُخَيَّمٍ صَيْفِيٍّ', you: 'a volunteer applicant', them: 'the camp leader',
    tasks: [
      { ex: 'لِمَاذَا تُرِيدُ أَنْ تَتَطَوَّعَ؟', task: 'Reason.', plan: 'لِمَاذَا ← لِأَنَّنِي أُحِبُّ …', model: 'لِأَنَّنِي أُحِبُّ الأَطْفَالَ، وَأُرِيدُ أَنْ أَكْسِبَ خِبْرَةً.', modelEn: 'Because I love children, and I want to gain experience.' },
      { ex: 'مَا مَهَارَاتُكَ؟', task: 'Two skills.', plan: 'مَهَارَاتِي ← عِنْدِي مَهَارَةُ … وَ …', model: 'عِنْدِي مَهَارَةُ التَّوَاصُلِ، وَأَسْتَطِيعُ أَنْ أَحُلَّ المُشْكِلَاتِ.', modelEn: 'I have communication skills, and I can solve problems.' },
      { ex: 'هَلْ أَنْتَ مَسْؤُولٌ؟ أَعْطِنِي مِثَالًا.', task: 'Quality + evidence.', plan: '', model: 'نَعَمْ، مَثَلًا أَعْتَنِي بِأَخِي الصَّغِيرِ كُلَّ يَوْمٍ بَعْدَ المَدْرَسَةِ.', modelEn: 'Yes — for example, I look after my little brother every day after school.' },
      { unexpected: true, ex: 'وَمَا نُقْطَةُ ضَعْفِكَ؟', task: 'A weakness + improvement.', plan: '', model: 'أَحْيَانًا لَسْتُ صَبُورًا، وَلٰكِنَّنِي أُحَاوِلُ أَنْ أَتَنَفَّسَ وَأَهْدَأَ.', modelEn: 'Sometimes I’m not patient, but I try to breathe and calm down.' },
    ],
    girl: 'to a girl: تُرِيدِينَ · مَهَارَاتُكِ · مَسْؤُولَةٌ · لَسْتُ صَبُورَةً',
    notes: 'yajibu an yakūna / takūna + adjective in -an; yastaṭīʿu an + verb in -a.',
  },
  talk: {
    title: 'One minute: what does this job need?', ar: 'مَاذَا تَحْتَاجُ هٰذِهِ الوَظِيفَةُ؟',
    text: 'The Leader names a job (طَبِيبٌ · طَيَّارَةٌ · شُرْطِيٌّ · مُدَرِّسَةٌ …). Talk for one minute: what it needs, what the worker must be, and do YOU have these skills?',
    routes: {
      core: 'يَحْتَاجُ إِلَى … + two skills.',
      develop: 'Add يَجِبُ أَنْ يَكُونَ / تَكُونَ + two qualities (with -an).',
      stretch: 'Add your own skills with evidence (أَسْتَطِيعُ أَنْ … مَثَلًا …).',
    },
  },
  builder: [
    { en: 'An engineer needs accuracy.', cols: [['يَحْتَاجُ المُهَنْدِسُ', 'يَحْتَاجُ المُهَنْدِسَ'], ['إِلَى', 'عَلَى'], ['الدِّقَّةِ.', 'الدِّقَّةُ.']], key: [0, 0, 0], why: 'يَحْتَاجُ إِلَى + genitive.' },
    { en: 'A nurse (f.) must be patient.', cols: [['يَجِبُ أَنْ', 'يَجِبُ'], ['تَكُونَ المُمَرِّضَةُ', 'يَكُونَ المُمَرِّضَةُ'], ['صَبُورَةً.', 'صَبُورَةٌ.']], key: [0, 0, 0], why: 'She → تَكُونَ; كَانَ-type verb → adjective in -an.' },
    { en: 'I can manage my time well.', cols: [['أَسْتَطِيعُ', 'أَسْتَطِيعَ'], ['أَنْ أُدِيرَ', 'أَنْ أُدِيرُ'], ['وَقْتِي جَيِّدًا.', 'وَقْتِي جَيِّدٌ.']], key: [0, 0, 0], why: 'أَنْ + -a; جَيِّدًا is an adverb.' },
  ],
  errors: [
    { wrong: 'يَجِبُ أَنْ يَكُونَ مُنَظَّمٌ.', hint: 'After يَكُونَ …', right: 'يَجِبُ أَنْ يَكُونَ مُنَظَّمًا.', why: 'كَانَ / يَكُونَ → adjective in -an.' },
    { wrong: 'يَحْتَاجُ الطَّيَّارُ الدِّقَّةَ.', hint: 'Missing preposition.', right: 'يَحْتَاجُ الطَّيَّارُ إِلَى الدِّقَّةِ.', why: 'يَحْتَاجُ إِلَى …' },
    { wrong: 'أَنَا مَسْؤُولٌ. (no proof)', hint: 'Prove it!', right: 'أَنَا مَسْؤُولٌ؛ مَثَلًا، أَعْتَنِي بِأَخِي كُلَّ يَوْمٍ.', why: 'Every quality needs a behaviour as evidence.' },
  ],
  task: {
    title: 'My skills profile', ar: 'مَلَفُّ مَهَارَاتِي',
    text: 'Write a skills profile (about 60–80 words) for a careers website. Include: • a job you are interested in and what it needs (يَحْتَاجُ إِلَى …) • what the worker must be (يَجِبُ أَنْ يَكُونَ …) • three skills or qualities YOU have, each with evidence • one weakness and how you will improve it.',
    phrases: [['تَحْتَاجُ هٰذِهِ الوَظِيفَةُ إِلَى …', 'this job needs …'], ['يَجِبُ أَنْ يَكُونَ / تَكُونَ … ', 'he / she must be …'], ['أَسْتَطِيعُ أَنْ … ؛ مَثَلًا …', 'I can …; for example …'], ['نُقْطَةُ ضَعْفِي … وَلٰكِنَّنِي …', 'my weakness is … but I …']],
    coreFrames: [
      { ar: 'أَهْتَمُّ بِعَمَلِ ______ .', en: 'I am interested in the job of …' },
      { ar: 'يَحْتَاجُ هٰذَا العَمَلُ إِلَى ______ وَ ______ .', en: 'This job needs … and …' },
      { ar: 'أَنَا ______ ؛ مَثَلًا، ______ .', en: 'I am …; for example, …' },
      { ar: 'أَسْتَطِيعُ أَنْ ______ .', en: 'I can …' },
    ],
    developFrames: [
      { ar: 'يَجِبُ أَنْ يَكُونَ المُوَظَّفُ ______ ، لِأَنَّ ______ .', en: 'The employee must be …, because …' },
      { ar: 'نُقْطَةُ ضَعْفِي ______ ، وَلٰكِنَّنِي سَأُحَاوِلُ أَنْ ______ .', en: 'My weakness is …, but I will try to …' },
    ],
    bank: ['مَهَارَةُ التَّوَاصُلِ', 'حَلُّ المُشْكِلَاتِ', 'العَمَلُ الجَمَاعِيُّ', 'إِدَارَةُ الوَقْتِ', 'مَسْؤُولٌ · مَسْؤُولَةٌ', 'مُنَظَّمٌ · مُنَظَّمَةٌ', 'يَحْتَاجُ إِلَى', 'يَجِبُ أَنْ يَكُونَ + -an'],
    model: {
      text: 'أَهْتَمُّ بِعَمَلِ الصَّيْدَلِيِّ. يَحْتَاجُ هٰذَا العَمَلُ إِلَى الدِّقَّةِ وَمَهَارَةِ التَّوَاصُلِ، وَيَجِبُ أَنْ يَكُونَ الصَّيْدَلِيُّ أَمِينًا وَمَسْؤُولًا، لِأَنَّ الأَدْوِيَةَ خَطِيرَةٌ. أَنَا دَقِيقٌ جِدًّا؛ مَثَلًا، أُرَاجِعُ وَاجِبَاتِي مَرَّتَيْنِ قَبْلَ أَنْ أُسَلِّمَهَا. أَسْتَطِيعُ أَنْ أَتَوَاصَلَ مَعَ النَّاسِ بِسُهُولَةٍ، لِأَنَّنِي أَعْمَلُ فِي دُكَّانِ عَمِّي يَوْمَ السَّبْتِ. كَمَا أَنَّنِي أُحِبُّ العَمَلَ الجَمَاعِيَّ. نُقْطَةُ ضَعْفِي أَنَّنِي بَطِيءٌ أَحْيَانًا، وَلٰكِنَّنِي سَأُحَاوِلُ أَنْ أُدِيرَ وَقْتِي أَفْضَلَ.',
      en: '“I am interested in the pharmacist’s job. This job needs accuracy and communication skills, and the pharmacist must be honest and responsible, because medicines are dangerous. I am very accurate; for example, I check my homework twice before I hand it in. I can communicate with people easily, because I work in my uncle’s shop on Saturdays. I also love teamwork. My weakness is that I am sometimes slow, but I will try to manage my time better.”',
      find: ['يَحْتَاجُ هٰذَا العَمَلُ إِلَى', 'يَجِبُ أَنْ يَكُونَ الصَّيْدَلِيُّ أَمِينًا', 'أَسْتَطِيعُ أَنْ أَتَوَاصَلَ', 'نُقْطَةُ ضَعْفِي'],
    },
  },
  checkCore: 'use يَحْتَاجُ إِلَى and يَجِبُ أَنْ يَكُونَ + -an correctly?',
  checkDevelop: 'prove every quality with a real behaviour?',
});
