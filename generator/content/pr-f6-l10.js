'use strict';
/* Practice Room · F6-L10 · Listening — town and transport texts. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f6-l10',
  arShort: 'أَسْتَمِعُ وَأَفْهَمُ',
  grammar: 'predicting the answer type from the question word (ayna → place · matā → time · kayfa → transport · kam → number / price / duration · li-mādhā → reason); distractors after lākin / baynamā; command and pronoun endings',
  focus: 'Students run their own listening-and-speaking practice in pairs: one partner reads short station and street announcements, the other predicts, listens, notes and answers — watching for distractors; then they build, fix and write their own announcement for the class to listen to.',
  words1: 'Listening strategies', words2: 'Question words and answer types',
  warm: {
    title: 'Predict the answer type', ar: 'تَوَقَّعْ نَوْعَ الجَوَابِ',
    text: 'The Leader says a QUESTION WORD in Arabic. The Speaker says what kind of answer to listen for (a place, a time, a number…) and gives one Arabic example.',
    steps: ['Leader: say 4 question words (أَيْنَ · مَتَى · كَيْفَ · كَمْ · لِمَاذَا).', 'Speaker: “a place → فِي المَحَطَّةِ”.', 'Coach checks with the word bank.', 'Swap roles.'],
    routes: { core: 'Say the answer type in English.', develop: 'Add one Arabic example.', stretch: 'Give two examples and a possible distractor.' },
  },
  dialogue: {
    title: 'Station announcements (read them aloud)', ar: 'إِعْلَانَاتُ المَحَطَّةِ',
    lines: [
      ['1', 'القِطَارُ إِلَى لِيدْزَ يُغَادِرُ فِي السَّاعَةِ العَاشِرَةِ، مِنَ الرَّصِيفِ رَقْمِ خَمْسَةٍ.', 'The train to Leeds leaves at ten from platform five.'],
      ['2', 'لِلْأَسَفِ، القِطَارُ إِلَى يُورْكَ مُتَأَخِّرٌ عِشْرِينَ دَقِيقَةً، لِأَنَّ الطَّقْسَ سَيِّئٌ.', 'Unfortunately the train to York is twenty minutes late, because the weather is bad.'],
      ['3', 'الحَافِلَةُ رَقْمُ سَبْعَةٍ لَا تَقِفُ أَمَامَ المَتْحَفِ اليَوْمَ، بَلْ خَلْفَ المَكْتَبَةِ.', 'Bus number seven does not stop outside the museum today, but behind the library.'],
      ['4', 'تَذْكِرَةُ الذَّهَابِ وَالإِيَابِ بِعِشْرِينَ جُنَيْهًا، بَيْنَمَا التَّذْكِرَةُ المُفْرَدَةُ بِاثْنَيْ عَشَرَ.', 'A return ticket is twenty pounds, whereas a single is twelve.'],
      ['5', 'يَا رُكَّابُ، اذْهَبُوا إِلَى المَخْرَجِ رَقْمِ اثْنَيْنِ، عَلَى اليَسَارِ.', 'Passengers, go to exit two, on the left.'],
    ],
    foot: 'The Leader reads ONE announcement twice (slide hidden for the Speaker). The Speaker answers the question for it on the next slide. Second listening = check. Then swap.',
    notes: 'Each announcement contains a typical distractor (late · not … but · whereas). The second reading is for checking — exactly as in the exam.',
  },
  questions: [
    { q: '١ — مِنْ أَيِّ رَصِيفٍ يُغَادِرُ القِطَارُ إِلَى لِيدْزَ؟', en: '1 — Which platform for the Leeds train?', start: 'مِنَ الرَّصِيفِ رَقْمِ …', more: '… فِي السَّاعَةِ …' },
    { q: '٢ — لِمَاذَا القِطَارُ إِلَى يُورْكَ مُتَأَخِّرٌ؟', en: '2 — Why is the York train late?', start: 'لِأَنَّ …', more: '… كَمْ دَقِيقَةً؟' },
    { q: '٣ — أَيْنَ تَقِفُ الحَافِلَةُ رَقْمُ سَبْعَةٍ اليَوْمَ؟', en: '3 — Where does bus 7 stop today?', start: 'تَقِفُ … (لَيْسَ أَمَامَ المَتْحَفِ!)', more: '…' },
    { q: '٤ — كَمْ ثَمَنُ التَّذْكِرَةِ المُفْرَدَةِ؟', en: '4 — How much is a single?', start: 'ثَمَنُهَا …', more: '… (لَيْسَ عِشْرِينَ!)' },
    { q: '٥ — أَيْنَ المَخْرَجُ؟', en: '5 — Where is the exit?', start: 'المَخْرَجُ رَقْمُ … ، عَلَى …', more: '…' },
  ],
  qTitle: 'Listen twice — then answer (watch for the trap!)',
  card: {
    title: 'Card — make your own announcement, partner listens', ar: 'إِعْلَانِي', you: 'the announcer', them: 'the listener (eyes closed)',
    tasks: [
      { ex: 'Listener asks: إِلَى أَيْنَ يَذْهَبُ القِطَارُ؟', task: 'Announcer: destination.', plan: 'إِلَى أَيْنَ ← القِطَارُ إِلَى …', model: 'القِطَارُ إِلَى بِرِسْتُولَ…', modelEn: 'The train to Bristol…' },
      { ex: 'Listener asks: مَتَى يُغَادِرُ؟', task: 'Announcer: time.', plan: 'مَتَى ← يُغَادِرُ فِي السَّاعَةِ …', model: 'يُغَادِرُ فِي السَّاعَةِ الثَّالِثَةِ وَالنِّصْفِ.', modelEn: 'It leaves at half past three.' },
      { ex: 'Listener asks: مِنْ أَيِّ رَصِيفٍ؟', task: 'Announcer: platform + a distractor.', plan: 'رَصِيفٌ ← لَيْسَ مِنَ … بَلْ مِنَ …', model: 'لَيْسَ مِنَ الرَّصِيفِ رَقْمِ وَاحِدٍ، بَلْ مِنَ الرَّصِيفِ رَقْمِ أَرْبَعَةٍ.', modelEn: 'Not from platform one, but from platform four.' },
      { ex: 'Listener asks: هَلْ هُوَ فِي الوَقْتِ؟', task: 'Announcer: late + reason.', plan: 'هَلْ ← لَا، مُتَأَخِّرٌ … لِأَنَّ …', model: 'لَا، هُوَ مُتَأَخِّرٌ عَشْرَ دَقَائِقَ، لِأَنَّ هُنَاكَ مُشْكِلَةً فِي الطَّرِيقِ.', modelEn: 'No, it is ten minutes late, because there is a problem on the line.' },
    ],
    foot: 'The announcer makes up the details; the listener notes them with eyes closed and then repeats ALL the facts. Swap roles.',
    girl: 'no gender changes — this card uses train facts',
    notes: 'Students create listening material for each other, including a deliberate distractor.',
  },
  talk: {
    title: '30 seconds: what did you hear?', ar: 'مَاذَا سَمِعْتَ؟',
    text: 'The Leader reads one announcement. In 30 seconds, the Speaker repeats every fact in a full sentence — without the slide.',
    routes: {
      core: 'Two facts (where + when).',
      develop: 'All the facts, in order.',
      stretch: 'All the facts + explain the distractor: “… لَيْسَ … بَلْ …”.',
    },
  },
  builder: [
    { en: 'The bus does not stop here, but opposite the bank.', cols: [['الحَافِلَةُ لَا تَقِفُ هُنَا،', 'الحَافِلَةُ لَا يَقِفُ هُنَا،'], ['بَلْ', 'لِأَنَّ'], ['مُقَابِلَ البَنْكِ.', 'مُقَابِلَ البَنْكُ.']], key: [0, 0, 0], why: 'Bus (f.) → تَقِفُ; “not … but” = لَا … بَلْ.' },
    { en: 'The train is late because of the snow.', cols: [['القِطَارُ مُتَأَخِّرٌ', 'القِطَارُ مُتَأَخِّرَةٌ'], ['بِسَبَبِ', 'لِأَنَّ'], ['الثَّلْجِ.', 'الثَّلْجُ.']], key: [0, 0, 0], why: 'Train (m.) → مُتَأَخِّرٌ; because of = بِسَبَبِ + genitive.' },
    { en: 'Passengers, go to platform three!', cols: [['يَا رُكَّابُ،', 'يَا رَاكِبُ،'], ['اذْهَبُوا', 'اذْهَبْ'], ['إِلَى الرَّصِيفِ رَقْمِ ثَلَاثَةٍ!', 'الرَّصِيفَ رَقْمَ ثَلَاثَةٍ!']], key: [0, 0, 0], why: 'A group → اذْهَبُوا; go TO = إِلَى.' },
  ],
  errors: [
    { wrong: 'أَيْنَ تَقِفُ الحَافِلَةُ؟ — فِي السَّاعَةِ الثَّانِيَةِ.', hint: 'أَيْنَ asks for …', right: 'تَقِفُ خَلْفَ المَكْتَبَةِ.', why: 'أَيْنَ → a place.' },
    { wrong: 'كَمْ ثَمَنُ التَّذْكِرَةِ المُفْرَدَةِ؟ — عِشْرُونَ. (from announcement 4)', hint: 'Listen after بَيْنَمَا!', right: 'ثَمَنُهَا اثْنَا عَشَرَ جُنَيْهًا.', why: 'The first number is a distractor; the answer comes after بَيْنَمَا.' },
    { wrong: 'القِطَارُ يُغَادِرُ مِنَ الرَّصِيفِ رَقْمِ وَاحِدٍ. (heard: لَيْسَ … بَلْ أَرْبَعَةٍ)', hint: 'لَيْسَ … بَلْ …', right: 'القِطَارُ يُغَادِرُ مِنَ الرَّصِيفِ رَقْمِ أَرْبَعَةٍ.', why: 'Keep listening after لَيْسَ … بَلْ.' },
  ],
  task: {
    title: 'Write a station announcement', ar: 'أَكْتُبُ إِعْلَانًا',
    text: 'Write your own station or bus announcement (about 35–55 words) for the class to listen to. Include: • destination and transport • departure time and platform / stop • a delay or change, with a reason • ticket prices • one command to passengers • ONE deliberate distractor (لَيْسَ … بَلْ … or بَيْنَمَا).',
    phrases: [['القِطَارُ / الحَافِلَةُ إِلَى …', 'the train / bus to …'], ['يُغَادِرُ / تُغَادِرُ فِي السَّاعَةِ …', 'leaves at …'], ['لَيْسَ مِنَ … بَلْ مِنَ …', 'not from … but from …'], ['يَا رُكَّابُ، اذْهَبُوا إِلَى …', 'passengers, go to …']],
    coreFrames: [
      { ar: 'القِطَارُ إِلَى ______ يُغَادِرُ فِي السَّاعَةِ ______ .', en: 'The train to … leaves at …' },
      { ar: 'يُغَادِرُ مِنَ الرَّصِيفِ رَقْمِ ______ .', en: 'It leaves from platform …' },
      { ar: 'ثَمَنُ التَّذْكِرَةِ ______ .', en: 'The ticket costs …' },
      { ar: 'يَا رُكَّابُ، اذْهَبُوا إِلَى ______ .', en: 'Passengers, go to …' },
    ],
    developFrames: [
      { ar: 'لِلْأَسَفِ، هُوَ مُتَأَخِّرٌ ______ ، لِأَنَّ ______ .', en: 'Unfortunately it is … late, because …' },
      { ar: 'لَيْسَ مِنَ ______ ، بَلْ مِنَ ______ .', en: 'Not from …, but from …' },
    ],
    bank: ['يُغَادِرُ · يَصِلُ', 'رَصِيفٌ · مَخْرَجٌ', 'مُتَأَخِّرٌ · فِي الوَقْتِ', 'لِأَنَّ · بِسَبَبِ', 'لَيْسَ … بَلْ …', 'بَيْنَمَا', 'تَذْكِرَةٌ مُفْرَدَةٌ', 'اذْهَبُوا · انْتَظِرُوا'],
    model: {
      text: 'السَّلَامُ عَلَيْكُمْ يَا رُكَّابُ. القِطَارُ إِلَى مَانْشِسْتَرَ يُغَادِرُ فِي السَّاعَةِ الرَّابِعَةِ وَالرُّبْعِ، لَيْسَ مِنَ الرَّصِيفِ رَقْمِ اثْنَيْنِ، بَلْ مِنَ الرَّصِيفِ رَقْمِ سِتَّةٍ. لِلْأَسَفِ، هُوَ مُتَأَخِّرٌ عَشْرَ دَقَائِقَ بِسَبَبِ المَطَرِ. التَّذْكِرَةُ المُفْرَدَةُ بِخَمْسَةَ عَشَرَ جُنَيْهًا، بَيْنَمَا تَذْكِرَةُ الذَّهَابِ وَالإِيَابِ بِخَمْسَةٍ وَعِشْرِينَ. انْتَظِرُوا خَلْفَ الخَطِّ الأَصْفَرِ، مِنْ فَضْلِكُمْ.',
      en: '“Peace be upon you, passengers. The train to Manchester leaves at quarter past four — not from platform two, but from platform six. Unfortunately it is ten minutes late because of the rain. A single ticket is fifteen pounds, whereas a return is twenty-five. Please wait behind the yellow line.”',
      find: ['لَيْسَ مِنَ … بَلْ مِنَ', 'مُتَأَخِّرٌ عَشْرَ دَقَائِقَ', 'بَيْنَمَا', 'انْتَظِرُوا'],
    },
  },
  checkCore: 'give the destination, time and platform clearly?',
  checkDevelop: 'include a reason and a deliberate distractor (لَيْسَ … بَلْ … / بَيْنَمَا)?',
});
