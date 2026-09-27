'use strict';
/* F6-L08 · Giving Directions: Signs, Streets and Maps — website: Pathways › Foundation › F6 › F6-L08 (imperatives for one male / one female / a group, مُسْتَقِيمًا · يَمِينًا · يَسَارًا, sequencing a route with landmarks, كَيْفَ أَذْهَبُ إِلَى …؟, town signs). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F6')({
  n: 8, fileTitle: 'Giving_Directions_Signs_Streets_Maps', chip: 'Giving Directions',
  title: 'Giving Directions: Signs, Streets and Maps', arabic: 'إِعْطَاءُ الاِتِّجَاهَاتِ',
  focus: 'Ask كَيْفَ أَذْهَبُ إِلَى …؟ and give a complete route with commands for a boy, a girl or a group — straight on, turn right, cross, then … — and read common Arabic signs.',
  icon: 'FaSignsPost', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('F6-L08', {
  support: `• Core: follow and write three basic commands with a map (اِذْهَبْ مُسْتَقِيمًا · اِنْعَطِفْ يَمِينًا · اِعْبُرِ الشَّارِعَ).
• Develop: a complete route with correct male / female commands, landmarks and ثُمَّ / بَعْدَ ذَلِكَ.
• Stretch: adapt the route for a group (-ū), include signs and give an alternative if a road is closed.
• Three endings: one boy — (اِذْهَبْ) · one girl -ī (اِذْهَبِي) · a group -ū (اِذْهَبُوا). The same system as F5-L09 (doctor’s commands).
• Website: “Signs are often short and unvowelled in the real world, so secure recognition of the whole word is important.” (مدخل، مخرج، قف …)
• Online: share a street map; students give each other routes in the chat and the partner traces them with the annotation pen.`,
  teach: 'Direction commands and signs, then go / turn / cross for a boy, a girl or a group.',
  wedo: 'Picture match, sort who is being addressed, fix the mistakes and follow directions to the museum.',
  next: { nextCode: 'F6-L09', nextTitle: 'Extended Writing: My Town and How I Get Around', nextAr: 'الكِتَابَةُ المُوَسَّعَةُ' },
  doNow: {
    questions: [
      q('What does اِنْعَطِفْ mean?', ['turn!', 'go!', 'stop!'], 'Prepared at home (F6-L07).'),
      q('What does إِشَارَةُ المُرُورِ mean?', ['traffic lights', 'a roundabout', 'a direction'], 'Prepared at home (F6-L07).'),
      q('Complete: المَدْرَسَةُ ____ مِنَ الطُّوبِ.', ['مَبْنِيَّةٌ', 'مَبْنِيٌّ', 'مَبْنِيَّانِ'], 'F6-L07: the school is feminine.'),
      q('Which connector means “whereas”?', ['بَيْنَمَا', 'لِأَنَّ', 'ثُمَّ'], 'F6-L07.'),
      q('Choose “The library is next to the school.”', ['المَكْتَبَةُ بِجَانِبِ المَدْرَسَةِ.', 'المَكْتَبَةُ بَيْنَ المَدْرَسَةِ.', 'المَكْتَبَةُ مَبْنِيَّةٌ المَدْرَسَةَ.'], 'F6-L02 position words.'),
    ],
    keyIdea: { text: 'One command, three endings: to a boy (nothing), to a girl (-ī), to a group (-ū).', ar: 'اِذْهَبْ · اِذْهَبِ{e|ي} · اِذْهَبُ{k|وا}' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F6-L07. Questions 3–5 retrieve F6-L07 (mabniyya, bayna-mā) and F6-L02 (position).',
  },
  routes: {
    core: ['I can ask how to get to a place.', 'I can give three basic directions.'],
    develop: ['I can give a route to a boy or a girl.', 'I can use landmarks and sequence words.'],
    stretch: ['I can give directions to a group.', 'I can suggest an alternative route.'],
  },
  bridge: [
    { ar: 'اِتِّجَاهٌ', urdu: 'توجہ / جہت', tr: 'jihat', en: 'direction' },
    { ar: 'مُسْتَقِيمًا', urdu: 'مستقیم', tr: 'mustaqīm', en: 'straight (as in صراط مستقیم)' },
    { ar: 'مَمْنُوعٌ', urdu: 'ممنوع', tr: 'mamnūʿ', en: 'forbidden' },
    { ar: 'دَاخِلَ · مَدْخَلٌ', urdu: 'داخلہ', tr: 'dākhila', en: 'admission → entrance' },
    { ar: 'خَارِجَ · مَخْرَجٌ', urdu: 'خارج', tr: 'khārij', en: 'outside → exit' },
  ],
  bridgeNotes: 'URDU BRIDGE: مستقیم (as in صراطِ مستقیم, the straight path) → مُسْتَقِيمًا (straight ahead). ممنوع is identical (ممنوع الدخول is even seen on signs in Pakistan). داخلہ (admission) → مَدْخَلٌ (entrance); خارج → مَخْرَجٌ (exit) — the مَـ pattern makes a PLACE again. جہت / توجہ (direction, attention) share the root of اِتِّجَاهٌ.',
  core: ['اِذْهَبْ / اِذْهَبِي / اِذْهَبُوا', 'اِنْعَطِفْ / اِنْعَطِفِي / اِنْعَطِفُوا', 'اِعْبُرْ / اِعْبُرِي / اِعْبُرُوا', 'مُسْتَقِيمًا', 'يَمِينًا', 'يَسَارًا', 'حَتَّى', 'مَدْخَلٌ', 'مَخْرَجٌ', 'مَمْنُوعُ الدُّخُولِ', 'دَوَّارٌ', 'كَيْفَ أَذْهَبُ إِلَى...؟'],
  vocabSlides: 3,
  vocabNotes: {
    0: 'Each command shows three forms: one boy / one girl / a group. Mime them: point straight on, turn a hand right / left.',
    1: 'FLEX: signs. On real signs the vowels are missing: مدخل، مخرج، قف، ممنوع الدخول — practise reading them unvowelled too.',
    2: 'FLEX: asking for directions (the speaking task).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · commands for a boy, a girl, a group (website rules 1–3)', title: 'Go · turn · cross', ar: 'أَفْعَالُ الأَمْرِ',
      cols: [{ label: 'One boy', w: 3.6, size: 26 }, { label: 'One girl', w: 3.6, size: 26 }, { label: 'A group', w: 3.6, size: 26 }, { label: 'Meaning', w: 1.53 }],
      rows: [
        { core: true, cells: [{ ar: 'اِذْهَبْ' }, { ar: 'اِذْهَبِي' }, { ar: 'اِذْهَبُوا' }, 'go'] },
        { core: true, cells: [{ ar: 'اِنْعَطِفْ' }, { ar: 'اِنْعَطِفِي' }, { ar: 'اِنْعَطِفُوا' }, 'turn'] },
        { core: true, cells: [{ ar: 'اِعْبُرْ' }, { ar: 'اِعْبُرِي' }, { ar: 'اِعْبُرُوا' }, 'cross'] },
        { cells: [{ ar: 'خُذْ' }, { ar: 'خُذِي' }, { ar: 'خُذُوا' }, 'take'] },
        { cells: [{ ar: 'اِمْشِ' }, { ar: 'اِمْشِي' }, { ar: 'اِمْشُوا' }, 'walk'] },
        { cells: [{ ar: 'اِسْتَمِرَّ' }, { ar: 'اِسْتَمِرِّي' }, { ar: 'اِسْتَمِرُّوا' }, 'continue'] },
      ],
      foot: 'Add a direction: mustaqīman (straight) · yamīnan (right) · yasāran (left) — all end in -an.',
      notes: `GRAMMAR PART 1 — website rules “Command one male person” (the dictionary-style command, used on many signs), “Command one female person” (add long ـي) and “Command a group” (ـوا — the alif is written but not pronounced).
Website mistakes: اِذْهَبِي to a group ✗ → اِذْهَبُوا ✓ · اِنْعَطِفْ يَمِينٌ ✗ → يَمِينًا ✓ (adverb, -an).
Game: teacher points at one student / one girl / the whole class and says “go!” — students give the correct form.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · a complete route (website rule 4)', title: 'Start · actions · landmarks · end', ar: 'الطَّرِيقُ الكَامِلُ',
      cards: [
        { chip: 'ASK', color: '6B4C9A', head: 'كَيْفَ أَذْهَبُ إِلَى …؟', big: 'مِنْ فَضْلِكَ، كَيْفَ أَذْهَبُ إِلَى المَحَطَّةِ؟', en: 'Please, how do I get to the station?', clue: 'ilā before the place.' },
        { chip: 'ROUTE', color: '1D5FBF', head: '… حَتَّى … ثُمَّ …', big: 'اِذْهَبْ مُسْتَقِيمًا حَتَّى إِشَارَةِ المَرُورِ، ثُمَّ اِنْعَطِفْ يَسَارًا.', en: 'Go straight to the traffic lights, then turn left.', clue: 'Until a landmark, then …' },
        { chip: 'END', color: '1E7B4F', head: 'المَكَانُ + مَوْقِعٌ', big: 'المَتْحَفُ مُقَابِلَ المَكْتَبَةِ. تَسْتَغْرِقُ الطَّرِيقُ عَشْرَ دَقَائِقَ.', en: 'The museum is opposite the library. It takes ten minutes.', clue: 'F6-L02 + F6-L04.' },
      ],
      error: { text: 'Website common error: ilā before the destination.', pairs: [['كَيْفَ أَذْهَبُ إِلَى المَحَطَّةِ؟', 'كَيْفَ أَذْهَبُ المَحَطَّةَ؟']] },
      notes: `GRAMMAR PART 2 — website rule “Sequence a complete route” (command + ثُمَّ / بَعْدَ ذَلِكَ + command). Website teaching note: “A complete route uses a starting point, ordered actions, landmarks and an endpoint.”
Ordinals for streets: الشَّارِعَ الأَوَّلَ / الثَّانِيَ / الثَّالِثَ. عَلَى يَمِينِكَ / يَمِينِكِ (on your right, m. / f.).`,
    },
  ],
  quick: [0, 1, 2, 6],
  rest: [4, 5, 7],
  ido: {
    title: 'Watch me direct Maryam to the museum',
    steps: [
      { head: '1 · Start', ar: 'يَا مَرْيَمُ، اُخْرُجِي مِنَ المَحَطَّةِ مِنَ المَخْرَجِ الرَّئِيسِيِّ.', think: 'A girl → -ī.' },
      { head: '2 · Straight + turn', ar: 'اِذْهَبِ{e|ي} مُسْتَقِيمًا حَتَّى إِشَارَةِ المَرُورِ، {k|ثُمَّ} اِنْعَطِفِ{e|ي} يَمِينًا.', think: 'Landmark, then turn.' },
      { head: '3 · Cross + take', ar: '{k|بَعْدَ ذَلِكَ}، اِعْبُرِ{e|ي} مَمَرَّ المُشَاةِ وَخُذِ{e|ي} الشَّارِعَ الأَوَّلَ عَلَى يَسَارِكِ.', think: 'Two more steps.' },
      { head: '4 · End', ar: 'المَتْحَفُ مُقَابِلَ الحَدِيقَةِ. تَسْتَغْرِقُ الطَّرِيقُ خَمْسَ عَشْرَةَ دَقِيقَةً.', think: 'Location + time.' },
    ],
    legend: ['e', 'k'], legendLabels: { e: 'TO A GIRL', k: 'SEQUENCE' },
    model: 'يَا مَرْيَمُ، اُخْرُجِي مِنَ المَحَطَّةِ مِنَ المَخْرَجِ الرَّئِيسِيِّ. اِذْهَبِي مُسْتَقِيمًا حَتَّى إِشَارَةِ المَرُورِ، {k|ثُمَّ} اِنْعَطِفِي يَمِينًا. {k|بَعْدَ ذَلِكَ}، اِعْبُرِي مَمَرَّ المُشَاةِ وَخُذِي الشَّارِعَ الأَوَّلَ عَلَى يَسَارِكِ. سَتَرَيْنَ لَافِتَةَ «مَدْخَلُ المَتْحَفِ». المَتْحَفُ مُقَابِلَ الحَدِيقَةِ. تَسْتَغْرِقُ الطَّرِيقُ حَوَالَيْ خَمْسَ عَشْرَةَ دَقِيقَةً مَشْيًا.',
    modelEn: 'Maryam, leave the station by the main exit. Go straight until the traffic lights, then turn right. After that, cross the pedestrian crossing and take the first street on your left. You will see a sign “Museum entrance”. The museum is opposite the park. The route takes about fifteen minutes on foot.',
    notes: 'I DO (3 min) — the website writing model, traced live on a map. Then ask: how would I say this to Yusuf? (remove every -ī) — and to the whole class? (-ū).',
  },
  game: {
    title: 'Directions: match the picture',
    pick: [0, 1, 2],
    en: ['Go straight ahead.', 'Turn right.', 'Turn left.'],
    icons: [[['fa6', 'FaArrowUp', '1D5FBF']], [['fa6', 'FaArrowRight', '1E7B4F']], [['fa6', 'FaArrowLeft', 'C0386B']]],
    labels: ['straight', 'right', 'left'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Note: an Arabic reader faces the same way — right is still right! Other website items: at the traffic lights turn right; you will find the bank on your right; the school is on your left.',
  },
  sorterNotes: 'Say who is being addressed by pointing: one boy, one girl, or the whole group.',
  hints: ['To a group: which ending?', 'Right / left end in …?', 'Which word goes before the destination?'],
  coreTip: 'Listen twice and trace the route on the map.\nListen for: -ī endings (she is a woman).',
  listenRoutes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 5, then say the route to a man.',
  gloss: [
    ['السَّائِحَةُ: مِنْ فَضْلِكَ، كَيْفَ أَذْهَبُ إِلَى المَتْحَفِ؟', 'Tourist (f.): Please, how do I get to the museum?'],
    ['الرَّجُلُ: اِذْهَبِي مُسْتَقِيمًا حَتَّى إِشَارَةِ المَرُورِ. ثُمَّ اِنْعَطِفِي يَمِينًا وَاعْبُرِي مَمَرَّ المُشَاةِ.', 'Man: Go straight to the traffic lights. Then turn right and cross the pedestrian crossing.'],
    ['اِسْتَمِرِّي حَتَّى الدَّوَّارِ، وَخُذِي الشَّارِعَ الثَّانِيَ عَلَى يَسَارِكِ.', 'Continue to the roundabout, and take the second street on your left.'],
    ['المَتْحَفُ مُقَابِلَ المَكْتَبَةِ وَبِجَانِبِ المَقْهَى.', 'The museum is opposite the library and next to the café.'],
    ['السَّائِحَةُ: هَلْ هُوَ بَعِيدٌ؟ الرَّجُلُ: لَا، تَسْتَغْرِقُ الطَّرِيقُ عَشْرَ دَقَائِقَ مَشْيًا.', 'Is it far? — No, it takes ten minutes on foot.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'كَيْفَ أَذْهَبُ إِلَى المَحَطَّةِ؟' },
      { route: 'develop', ar: 'هَلْ هِيَ بَعِيدَةٌ؟' },
      { route: 'develop', ar: 'كَمْ دَقِيقَةً مَشْيًا؟' },
      { route: 'stretch', ar: 'هَلْ يُمْكِنُكَ أَنْ تُعِيدَ الاِتِّجَاهَاتِ؟ (الشَّارِعُ مُغْلَقٌ!)' },
    ],
    stems: [
      { route: 'core', ar: 'اِذْهَبْ / اِذْهَبِي مُسْتَقِيمًا، ثُمَّ اِنْعَطِفْ / اِنْعَطِفِي …' },
      { route: 'develop', ar: 'لَا، هِيَ قَرِيبَةٌ … / نَعَمْ، هِيَ بَعِيدَةٌ …' },
      { route: 'develop', ar: 'تَسْتَغْرِقُ الطَّرِيقُ ______ دَقَائِقَ مَشْيًا.' },
      { route: 'stretch', ar: 'الشَّارِعُ مُغْلَقٌ، لِذَلِكَ خُذْ … بَدَلًا مِنْهُ.' },
    ],
    modelEn: ['Please, how do I get to the mosque?', 'Go straight, then turn left at the roundabout.'],
    notes: 'Website “Directions information gap” — all four prompts are the website’s. A has a map with the destination marked; B asks and traces. Swap and change addressee (boy / girl / group). Website model: مِنْ فَضْلِكَ، كَيْفَ أَذْهَبُ إِلَى المَسْجِدِ؟ — اِذْهَبْ مُسْتَقِيمًا، ثُمَّ اِنْعَطِفْ يَسَارًا عِنْدَ الدَّوَّارِ. — هَلْ هُوَ بَعِيدٌ؟ — لَا، تَسْتَغْرِقُ الطَّرِيقُ خَمْسَ دَقَائِقَ مَشْيًا.',
  },
  write: {
    core: { amount: '3–4 commands', how: 'Directions on a map to one boy: go, turn, cross + one landmark.' },
    develop: { amount: '5+ commands', how: 'Website task: a named boy or girl, three sequence words, landmarks, a sign and a time.' },
    stretch: { amount: 'two routes', how: 'The same route for a group (-ū) + an alternative because a road is closed; design four signs.' },
  },
  frames: {
    core: [
      { en: 'Go straight ahead.', ar: 'اِذْهَبْ مُسْتَقِيمًا.' },
      { en: 'Turn right / left.', ar: 'اِنْعَطِفْ يَمِينًا / يَسَارًا.' },
      { en: 'Cross the street.', ar: 'اِعْبُرِ الشَّارِعَ.' },
      { en: 'The … is next to the …', ar: 'الـ ______ بِجَانِبِ الـ ______ .' },
      { en: 'How do I get to …?', ar: 'كَيْفَ أَذْهَبُ إِلَى ______ ؟' },
    ],
    develop: [
      { en: '(to a girl) Go straight until the lights.', ar: 'اِذْهَبِي مُسْتَقِيمًا حَتَّى إِشَارَةِ المَرُورِ.' },
      { en: '(to a girl) Then turn left.', ar: 'ثُمَّ اِنْعَطِفِي يَسَارًا.' },
      { en: 'Take the second street on your right.', ar: 'خُذِ الشَّارِعَ الثَّانِيَ عَلَى يَمِينِكَ.' },
      { en: 'After that, continue to the roundabout.', ar: 'بَعْدَ ذَلِكَ، اِسْتَمِرَّ حَتَّى الدَّوَّارِ.' },
      { en: 'It takes ten minutes on foot.', ar: 'تَسْتَغْرِقُ الطَّرِيقُ عَشْرَ دَقَائِقَ مَشْيًا.' },
    ],
    bank: ['اِذْهَبْ', 'اِنْعَطِفْ', 'اِعْبُرْ', 'خُذْ', 'اِسْتَمِرَّ', 'مُسْتَقِيمًا', 'يَمِينًا', 'يَسَارًا', 'حَتَّى', 'ثُمَّ', 'بَعْدَ ذَلِكَ', 'عَلَى يَمِينِكَ'],
  },
  stretch: [
    ['اِذْهَبُوا … ثُمَّ اِنْعَطِفُوا …', 'go (all) … then turn (all) …'],
    ['الشَّارِعُ مُغْلَقٌ اليَوْمَ', 'the street is closed today'],
    ['خُذُوا الطَّرِيقَ الآخَرَ بَدَلًا مِنْهُ', 'take the other road instead'],
    ['اِتَّبِعُوا اللَّافِتَاتِ الخَضْرَاءَ', 'follow the green signs'],
    ['سَتَرَوْنَ … عَلَى يَمِينِكُمْ', 'you will see … on your right'],
  ],
  modelEn: 'Maryam, leave the station by the main exit. Go straight until the traffic lights, then turn right. After that, cross the pedestrian crossing and take the first street on your left. You will see a sign: Museum entrance. The museum is opposite the park. The route takes about fifteen minutes on foot.',
  find: ['a command to a girl', 'until + landmark', 'a sequence word', 'the time'],
  modelNotes: 'Evidence: اِذْهَبِي، اِنْعَطِفِي، اِعْبُرِي، خُذِي · حَتَّى إِشَارَةِ المَرُورِ · ثُمَّ / بَعْدَ ذَلِكَ · تَسْتَغْرِقُ الطَّرِيقُ … دَقِيقَةً.',
  selfCheck: [
    { route: 'core', text: 'I used three commands.' },
    { route: 'core', text: 'يَمِينًا / يَسَارًا / مُسْتَقِيمًا end in -an.' },
    { route: 'develop', text: 'Command endings match the person.' },
    { route: 'develop', text: 'I used landmarks and sequence words.' },
    { route: 'stretch', text: 'A group version and an alternative route.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['مَدْخَلُ المَحَطَّةِ', 'the station entrance'], ['البَوَّابَةِ الشَّرْقِيَّةِ', 'the eastern gate'], ['مَمْنُوعُ الدُّخُولِ', 'no entry'], ['لِلذَّهَابِ إِلَى', 'to go to'], ['رَصِيفِ الحَافِلَاتِ', 'the bus platform'],
    ['مَمْنُوعُ الوُقُوفِ', 'no parking'], ['مَخْرَجُ', 'exit'], ['خَلْفَ المَبْنَى', 'behind the building'], ['عِنْدَ الطَّوَارِئِ', 'in an emergency'], ['اِتَّبِعْ', 'follow'],
  ],
  prep: {
    words: [['فِقْرَةٌ', 'a paragraph', 'pl. فِقْرَاتٌ'], ['مُقَدِّمَةٌ', 'an introduction', '—'], ['خَاتِمَةٌ', 'a conclusion', '—'], ['أَتَنَقَّلُ', 'I get around', 'she: تَتَنَقَّلُ'], ['مَسْوَدَّةٌ', 'a draft', '—']],
    questionEn: 'Plan: write three things you will say about your town and three about transport.',
    questionAr: 'مَدِينَتِي … · أَتَنَقَّلُ بِـ …',
    homework: {
      core: 'Website F6-L08: the vocabulary tab and the “Who is being addressed?” sorter.',
      develop: 'Website writing task: directions from the station to a town place + four signs.',
      stretch: 'Rewrite the route for a group and add an alternative route.',
    },
    wordsSource: 'The five words prepare the website F6-L09 lesson (extended writing: my town and how I get around).',
  },
  remember: 'Remember: to a boy اِذْهَبْ · to a girl اِذْهَبِي · to a group اِذْهَبُوا · + مُسْتَقِيمًا / يَمِينًا / يَسَارًا.',
});

module.exports = { meta, slides };
