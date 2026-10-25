'use strict';
/* Practice Room · D3-L08 · Reading — job adverts and career texts. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd3-l08',
  arShort: 'أَقْرَأُ إِعْلَانَ وَظِيفَةٍ',
  grammar: 'advert passives: yushtaraṭu (it is required) · yuṭlabu (is wanted) · yufaḍḍalu (is preferred); tracking reference (alladhī / allatī · -hu / -hā); inference you can prove from the text (yabdū anna … · al-dalīlu anna …)',
  focus: 'Students run their own reading-and-speaking practice with job adverts: read an advert aloud, decode what is required, wanted and preferred, track who “who / -hā” refers to, and make an inference with evidence. They do a role-play card phoning about an advert, give a one-minute “am I a good match?” talk, then build, fix and write their own job advert.',
  words1: 'Applications', words2: 'Requirements and skills',
  dialogue: {
    title: 'Reading the advert together', ar: 'نَقْرَأُ الإِعْلَانَ مَعًا',
    lines: [
      ['A', '«يُطْلَبُ مُسَاعِدٌ فِي مَطْعَمٍ عَائِلِيٍّ. يُشْتَرَطُ العُمْرُ ١٦ سَنَةً فَأَكْثَرَ.»', '“Wanted: an assistant in a family restaurant. Age 16 or over required.”'],
      ['B', 'إِذَنِ العُمْرُ شَرْطٌ. عُمْرُكَ سِتَّ عَشْرَةَ سَنَةً، فَأَنْتَ مُنَاسِبٌ.', 'So age is a requirement. You are sixteen, so you fit.'],
      ['A', '«يُفَضَّلُ مَنْ لَدَيْهِ خِبْرَةٌ فِي خِدْمَةِ الزَّبَائِنِ.»', '“Someone with customer-service experience is preferred.”'],
      ['B', '«يُفَضَّلُ» يَعْنِي: لَيْسَ ضَرُورِيًّا، وَلٰكِنَّهُ مُفِيدٌ.', '“Preferred” means: not essential, but useful.'],
      ['A', '«المَطْعَمُ الَّذِي افْتُتِحَ هٰذَا العَامَ يَبْحَثُ عَنْ شَخْصٍ مَرِحٍ.»', '“The restaurant, which opened this year, is looking for a cheerful person.”'],
      ['B', 'يَبْدُو أَنَّ المَطْعَمَ جَدِيدٌ؛ الدَّلِيلُ «افْتُتِحَ هٰذَا العَامَ».', 'It seems the restaurant is new — the evidence is “opened this year”.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: B reads a line from another advert; A says required / preferred / inference.',
  },
  qTitle: 'Advert detective — read, decode, prove',
  questions: [
    { q: '«يُشْتَرَطُ إِجَادَةُ اللُّغَةِ الإِنْجِلِيزِيَّةِ.» — هَلْ هٰذَا ضَرُورِيٌّ؟', en: '“English proficiency is required.” — Is it essential?', start: 'نَعَمْ، «يُشْتَرَطُ» يَعْنِي …', more: '… شَرْطٌ أَسَاسِيٌّ' },
    { q: '«يُفَضَّلُ مَنْ لَدَيْهِ رُخْصَةُ قِيَادَةٍ.» — هَلْ تَحْتَاجُ إِلَيْهَا؟', en: '“A driving licence is preferred.” — Do you need one?', start: 'لَا، لَيْسَتْ ضَرُورِيَّةً، وَلٰكِنَّ …', more: '…' },
    { q: '«الشَّرِكَةُ الَّتِي تَأَسَّسَتْ فِي دُبَيٍّ تَبْحَثُ عَنْ مُصَمِّمٍ.» — مَا الَّذِي تَأَسَّسَ فِي دُبَيٍّ؟', en: '“The company, which was founded in Dubai, seeks a designer.” — What was founded in Dubai?', start: 'الشَّرِكَةُ …', more: 'Clue: الَّتِي ← الشَّرِكَةُ' },
    { q: '«سَاعَاتُ العَمَلِ مِنَ السَّادِسَةِ مَسَاءً إِلَى مُنْتَصَفِ اللَّيْلِ.» — مَا الاسْتِنْتَاجُ؟', en: '“Hours 6 pm to midnight.” — Inference?', start: 'يَبْدُو أَنَّ العَمَلَ …', more: '… الدَّلِيلُ …' },
    { q: 'هَلْ أَنْتَ مُنَاسِبٌ لِهٰذِهِ الوَظِيفَةِ؟', en: 'Are you suitable for this job?', start: 'أَعْتَقِدُ أَنَّنِي … لِأَنَّ …', more: '… وَلٰكِنْ لَيْسَ لَدَيَّ …' },
  ],
  card: {
    title: 'Role-play card — phoning about an advert', ar: 'اتِّصَالٌ بِشَأْنِ إِعْلَانٍ', you: 'a job seeker', them: 'the hotel receptionist',
    tasks: [
      { ex: 'فُنْدُقُ النَّخْلَةِ، تَفَضَّلْ.', task: 'Say why you are calling.', plan: 'السَّبَبُ ← قَرَأْتُ إِعْلَانَ وَظِيفَةِ …', model: 'مَرْحَبًا، قَرَأْتُ إِعْلَانَ وَظِيفَةِ مُوَظَّفِ اسْتِقْبَالٍ.', modelEn: 'Hello, I read the advert for the receptionist job.' },
      { ex: 'نَعَمْ، هَلْ عِنْدَكَ سُؤَالٌ؟', task: 'Ask about a requirement.', plan: 'سُؤَالٌ ← هَلْ يُشْتَرَطُ … ؟', model: 'هَلْ تُشْتَرَطُ خِبْرَةٌ سَابِقَةٌ؟', modelEn: 'Is previous experience required?' },
      { ex: 'لَا، وَلٰكِنْ يُفَضَّلُ مَنْ يَتَكَلَّمُ لُغَتَيْنِ.', task: 'Say what you have.', plan: '', model: 'مُمْتَازٌ، أَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ بِطَلَاقَةٍ.', modelEn: 'Excellent, I speak Arabic and English fluently.' },
      { unexpected: true, ex: 'كَيْفَ تُرْسِلُ طَلَبَكَ؟', task: 'Answer the surprise question.', plan: '', model: 'سَأُرْسِلُ سِيرَتِي الذَّاتِيَّةَ وَرِسَالَةَ تَغْطِيَةٍ بِالبَرِيدِ الإِلِكْتِرُونِيِّ اليَوْمَ.', modelEn: 'I will send my CV and a cover letter by email today.' },
    ],
    girl: 'to a girl: تَفَضَّلِي · عِنْدَكِ · تُرْسِلِينَ طَلَبَكِ · مُوَظَّفَةِ اسْتِقْبَالٍ',
    notes: 'yushtaraṭu = required · yufaḍḍalu = preferred (not essential).',
  },
  talk: {
    title: 'One minute: am I a good match?', ar: 'هَلْ أَنَا مُنَاسِبٌ؟',
    text: 'The Leader invents a short advert (job, two requirements, one preference). Talk for one minute: what is required, what is preferred, and whether you are a good match — with evidence.',
    routes: {
      core: 'Say what is required and what is preferred.',
      develop: 'Match each requirement to yourself (لَدَيَّ … / لَيْسَ لَدَيَّ …).',
      stretch: 'Add an inference about the job (يَبْدُو أَنَّ …) and a decision.',
    },
  },
  builder: [
    { en: 'Experience in sales is required.', cols: [['تُشْتَرَطُ', 'يَشْتَرِطُ'], ['خِبْرَةٌ', 'خِبْرَةً'], ['فِي المَبِيعَاتِ.', 'مَعَ المَبِيعَاتِ.']], key: [0, 0, 0], why: 'Passive verb + subject in -un; خِبْرَةٌ (f.) → تُشْتَرَطُ.' },
    { en: 'It seems that the job is tiring.', cols: [['يَبْدُو', 'يَبْدُوا'], ['أَنَّ العَمَلَ', 'أَنَّ العَمَلُ'], ['مُجْهِدٌ.', 'مُجْهِدًا.']], key: [0, 0, 0], why: 'أَنَّ + -a; predicate -un.' },
    { en: 'The company that is looking for a designer is in Dubai.', cols: [['الشَّرِكَةُ الَّتِي', 'الشَّرِكَةُ الَّذِي'], ['تَبْحَثُ عَنْ مُصَمِّمٍ', 'يَبْحَثُ عَنْ مُصَمِّمٍ'], ['فِي دُبَيٍّ.', 'فِي دُبَيٌّ.']], key: [0, 0, 0], why: 'شَرِكَةٌ (f.) → الَّتِي + تَبْحَثُ.' },
  ],
  errors: [
    { wrong: '«يُفَضَّلُ» يَعْنِي ضَرُورِيٌّ.', hint: 'Preferred or required?', right: '«يُفَضَّلُ» يَعْنِي مُفِيدٌ وَلٰكِنَّهُ لَيْسَ ضَرُورِيًّا.', why: 'Only يُشْتَرَطُ means essential.' },
    { wrong: 'الوَظِيفَةُ الَّذِي فِي الإِعْلَانِ …', hint: 'وَظِيفَةٌ is …', right: 'الوَظِيفَةُ الَّتِي فِي الإِعْلَانِ …', why: 'Feminine → الَّتِي.' },
    { wrong: 'العَمَلُ لَيْلِيٌّ.', hint: 'Prove your inference.', right: 'يَبْدُو أَنَّ العَمَلَ لَيْلِيٌّ؛ الدَّلِيلُ أَنَّ السَّاعَاتِ حَتَّى مُنْتَصَفِ اللَّيْلِ.', why: 'Inference + quote from the text.' },
  ],
  task: {
    title: 'Write a job advert — then check a partner', ar: 'أَكْتُبُ إِعْلَانَ وَظِيفَةٍ',
    text: 'Write a job advert (about 60–80 words) for a summer job you invent. Include: • the job and the workplace (with الَّذِي / الَّتِي) • two requirements (يُشْتَرَطُ …) • one preference (يُفَضَّلُ …) • hours and salary • how to apply. Swap with a partner: they read it and say if they are a good match, with evidence.',
    phrases: [['يُطْلَبُ … لِلْعَمَلِ فِي …', '… wanted to work in …'], ['يُشْتَرَطُ … · تُشْتَرَطُ …', '… is required'], ['يُفَضَّلُ مَنْ لَدَيْهِ …', 'someone with … is preferred'], ['لِلتَّقَدُّمِ أَرْسِلْ …', 'to apply, send …']],
    coreFrames: [
      { ar: 'يُطْلَبُ ______ لِلْعَمَلِ فِي ______ .', en: '… wanted to work in …' },
      { ar: 'يُشْتَرَطُ ______ .', en: '… is required.' },
      { ar: 'يُفَضَّلُ مَنْ لَدَيْهِ ______ .', en: 'Someone with … is preferred.' },
      { ar: 'سَاعَاتُ العَمَلِ ______ ، وَالرَّاتِبُ ______ .', en: 'The hours are …, and the salary is …' },
    ],
    developFrames: [
      { ar: '______ الَّذِي / الَّتِي ______ يَبْحَثُ / تَبْحَثُ عَنْ ______ .', en: 'The … which … is looking for …' },
      { ar: 'لِلتَّقَدُّمِ أَرْسِلْ ______ إِلَى ______ قَبْلَ ______ .', en: 'To apply, send … to … before …' },
    ],
    bank: ['إِعْلَانُ وَظِيفَةٍ', 'يُطْلَبُ · يُشْتَرَطُ', 'يُفَضَّلُ', 'مُتَطَلَّبَاتُ الوَظِيفَةِ', 'خِبْرَةٌ سَابِقَةٌ', 'إِجَادَةُ اللُّغَاتِ', 'مَهَارَاتُ الحَاسُوبِ', 'سِيرَةٌ ذَاتِيَّةٌ'],
    model: {
      text: 'يُطْلَبُ مُسَاعِدٌ أَوْ مُسَاعِدَةٌ لِلْعَمَلِ فِي حَدِيقَةِ الحَيَوَانَاتِ الَّتِي افْتُتِحَتْ فِي وَسَطِ المَدِينَةِ. يُشْتَرَطُ العُمْرُ سِتَّ عَشْرَةَ سَنَةً فَأَكْثَرَ، وَتُشْتَرَطُ مَهَارَةُ التَّوَاصُلِ مَعَ الأَطْفَالِ. يُفَضَّلُ مَنْ لَدَيْهِ خِبْرَةٌ فِي العِنَايَةِ بِالحَيَوَانَاتِ، وَمَنْ يُجِيدُ لُغَتَيْنِ. سَاعَاتُ العَمَلِ مِنَ التَّاسِعَةِ صَبَاحًا إِلَى الثَّالِثَةِ، خَمْسَةَ أَيَّامٍ فِي الأُسْبُوعِ، وَالرَّاتِبُ جَيِّدٌ. لِلتَّقَدُّمِ أَرْسِلْ سِيرَتَكَ الذَّاتِيَّةَ وَرِسَالَةَ تَغْطِيَةٍ قَصِيرَةً إِلَى البَرِيدِ الإِلِكْتِرُونِيِّ قَبْلَ نِهَايَةِ الشَّهْرِ.',
      en: '“Wanted: a male or female assistant to work at the zoo which opened in the city centre. Age 16 or over is required, and communication skills with children are required. Someone with experience caring for animals, and who speaks two languages, is preferred. Hours are 9 am to 3 pm, five days a week, and the salary is good. To apply, send your CV and a short cover letter by email before the end of the month.”',
      find: ['الَّتِي افْتُتِحَتْ', 'يُشْتَرَطُ العُمْرُ', 'يُفَضَّلُ مَنْ لَدَيْهِ', 'لِلتَّقَدُّمِ أَرْسِلْ'],
    },
  },
  checkCore: 'tell apart يُشْتَرَطُ (required) and يُفَضَّلُ (preferred)?',
  checkDevelop: 'track الَّذِي / الَّتِي and support an inference with evidence?',
});
