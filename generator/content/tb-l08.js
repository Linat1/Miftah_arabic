'use strict';
/* TB-L08 · Hobbies, Sport and Free Time — website: Advanced Topics › Topic B › Lesson 8 (lesson engine D5-L01
   “Hobbies and Free Time — Vocabulary and Present Habits”): verb collocations, frequency and three preference structures.
   On the website the D5-L01 model patterns have no English translation: teacher translations are added. */
const T = require('./topic-common');
const D = require('./d-common');
const { q } = D;

const meta = T.meta('B', 8, { fileTitle: 'Hobbies_Sport_and_Free_Time', chip: 'Hobbies and Free Time', icon: 'FaFutbol' });
const nx = T.nextOf('B', 8);

const V = (i, he, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'he', ar: he }, { l: 'I', ar: i }] });
const forms = {
  'هِوَايَةٌ / هِوَايَاتٌ': { tag: 'my · his · her', forms: [{ l: 'her', ar: 'هِوَايَتُهَا' }, { l: 'his', ar: 'هِوَايَتُهُ' }, { l: 'my', ar: 'هِوَايَتِي' }] },
  'يُمَارِسُ الرِّيَاضَةَ': V('أُمَارِسُ', 'يُمَارِسُ', 'تُمَارِسُ'),
  'يَلْعَبُ كُرَةَ القَدَمِ': V('أَلْعَبُ', 'يَلْعَبُ', 'تَلْعَبُ'),
  'يَلْعَبُ كُرَةَ السَّلَّةِ': V('أَلْعَبُ', 'يَلْعَبُ', 'تَلْعَبُ'),
  'السِّبَاحَةُ / يَسْبَحُ': V('أَسْبَحُ', 'يَسْبَحُ', 'تَسْبَحُ'),
  'الرَّسْمُ / يَرْسُمُ': V('أَرْسُمُ', 'يَرْسُمُ', 'تَرْسُمُ'),
  'يَعْزِفُ عَلَى البِيَانُو': V('أَعْزِفُ', 'يَعْزِفُ', 'تَعْزِفُ'),
  'يَعْزِفُ عَلَى العُودِ': V('أَعْزِفُ', 'يَعْزِفُ', 'تَعْزِفُ'),
  'القِرَاءَةُ / يَقْرَأُ': V('أَقْرَأُ', 'يَقْرَأُ', 'تَقْرَأُ'),
  'يَطْبُخُ': V('أَطْبُخُ', 'يَطْبُخُ', 'تَطْبُخُ'),
  'يُشَاهِدُ الأَفْلَامَ': V('أُشَاهِدُ', 'يُشَاهِدُ', 'تُشَاهِدُ'),
  'يَسْتَمِعُ إِلَى المُوسِيقَى': V('أَسْتَمِعُ', 'يَسْتَمِعُ', 'تَسْتَمِعُ'),
  'يَتَطَوَّعُ': V('أَتَطَوَّعُ', 'يَتَطَوَّعُ', 'تَتَطَوَّعُ'),
};

const raw = D.devLesson('D5-L01', {
  siteRef: 'Advanced Topics › Topic B › Lesson 8 (TB-L08), lesson engine Pathways › Development › D5 › D5-L01',
  patchNote: 'the website D5-L01 model patterns have no English translation, so the deck adds teacher-written translations (the Arabic is the website’s).',
  support: `• Core: 10 hobbies + the right verb (أَلْعَبُ / أُمَارِسُ / أَعْزِفُ عَلَى / أَسْتَمِعُ إِلَى) + one frequency phrase. Develop: مَرَّةً / مَرَّتَيْنِ / ثَلَاثَ مَرَّاتٍ + a preference (أُفَضِّلُ … عَلَى …). Stretch: all three preference structures with a reason, and a partner’s habits in the third person (for the survey).
• The website’s big idea: learn the whole collocation (verb + preposition + noun), not the single verb — Arabic does not “play” swimming.
• Links: TB-L01–L02 (he / she forms for the survey report), AT-A-L03 frequency words (دَائِمًا، أَحْيَانًا) and the dual from F3.
• Urdu bridge: شوق (hobby, passion), مشق (practice) — ممارسة, موسیقی ← المُوسِيقَى, تصویر (picture) ← التَّصْوِيرُ, فلم ← فِيلْمٌ / أَفْلَامٌ.`,
  teach: 'Hobbies with the right verb, then how often and which you prefer.',
  wedo: 'Picture match, sort the verbs, fix and listen.',
  next: nx,
  vocabSlides: 2,
  kwText: '32 free-time words from the website in 3 groups. Core: 10 hobbies with their verbs. The other hobbies, frequency and preference words are taught on the grammar slides and are on the website for homework.',
  doNow: {
    questions: [
      q('What does وَقْتُ الفَرَاغِ mean?', ['free time', 'a hobby', 'the weekend'], 'Prepared at home (TB-L07).'),
      q('What does أَسْتَمِعُ إِلَى المُوسِيقَى mean?', ['I listen to music', 'I play music', 'I like music'], 'Prepared at home (TB-L07).'),
      q('Choose “a blue shirt”.', ['قَمِيصٌ أَزْرَقُ', 'قَمِيصٌ زَرْقَاءُ', 'أَزْرَقُ قَمِيصٌ'], 'TB-L06–L07: noun first, colour agrees.'),
      q('Choose “She plays …”.', ['تَلْعَبُ', 'يَلْعَبُ', 'أَلْعَبُ'], 'TB-L01: she → ta-.'),
      q('What does أَحْيَانًا mean?', ['sometimes', 'always', 'never'], 'AT-A-L03 / Topic A frequency.'),
    ],
    keyIdea: { text: 'Learn the verb WITH its partner: play a ball game, practise an activity, play ON an instrument, listen TO music.', ar: '{w|أَلْعَبُ} كُرَةَ القَدَمِ · {w|أُمَارِسُ} السِّبَاحَةَ · أَعْزِفُ {k|عَلَى} العُودِ · أَسْتَمِعُ {k|إِلَى} المُوسِيقَى' },
    retrieves: 'Questions 1–2 test two of the five free-time words prepared at home at the end of TB-L07. Questions 3–5 retrieve TB-L06–L07 (colour agreement), TB-L01 (she-verbs) and a frequency word.',
  },
  routes: {
    core: ['I can name 10 hobbies with the right verb.', 'I can say how often I do one.'],
    develop: ['I can use once / twice / three times a week.', 'I can say which hobby I prefer (ufaḍḍilu … ‘alā …).'],
    stretch: ['I can use three preference structures with a reason.', 'I can report a partner’s habits (he / she).'],
  },
  bridge: [
    { ar: 'هِوَايَةٌ', urdu: 'شوق', tr: 'hiwāya', en: 'hobby (Urdu: passion)' },
    { ar: 'يُمَارِسُ', urdu: 'مشق', tr: 'yumārisu', en: 'practises (Urdu: practice)' },
    { ar: 'المُوسِيقَى', urdu: 'موسیقی', tr: 'al-mūsīqā', en: 'music' },
    { ar: 'التَّصْوِيرُ', urdu: 'تصویر', tr: 'at-taṣwīr', en: 'photography (Urdu: picture)' },
    { ar: 'الرِّيَاضَةُ', urdu: 'ریاضت', tr: 'ar-riyāḍa', en: 'sport (Urdu: discipline, exercise)' },
  ],
  bridgeNotes: 'URDU BRIDGE: موسیقی and تصویر are the same words; ریاضت in Urdu is spiritual discipline or exercise — in Arabic الرِّيَاضَةُ is simply sport. مشق (practice) is the same idea as يُمَارِسُ but a different root.',
  core: ['هِوَايَةٌ / هِوَايَاتٌ', 'وَقْتُ الفَرَاغِ', 'يُمَارِسُ الرِّيَاضَةَ', 'يَلْعَبُ كُرَةَ القَدَمِ', 'السِّبَاحَةُ / يَسْبَحُ', 'الرَّسْمُ / يَرْسُمُ', 'يَعْزِفُ عَلَى العُودِ', 'القِرَاءَةُ / يَقْرَأُ'],
  forms,
  vocabNotes: {
    0: 'Every verb card shows I · he · she (for the survey report). The hobby noun after يَلْعَبُ / يُمَارِسُ ends in -a (object): أَلْعَبُ كُرَةَ القَدَمِ.',
    1: 'FLEX: frequency — taught on the grammar slide (مَرَّةً، مَرَّتَيْنِ، ثَلَاثَ مَرَّاتٍ).',
    2: 'FLEX: preference — taught on the grammar slide (أُفَضِّلُ … عَلَى، أَسْتَمْتِعُ بِـ، أَهْوَى … حَقًّا).',
  },
  patch: {
    patterns: [
      { ar: 'يَلْعَبُ كُرَةَ القَدَمِ', en: 'he plays football', tip: 'Ball game after yal‘abu; the object ends in -a.' },
      { ar: 'يَعْزِفُ عَلَى العُودِ', en: 'he plays the oud', tip: '‘alā is fixed with ya‘zifu.' },
      { ar: 'مَرَّتَيْنِ فِي الأُسْبُوعِ', en: 'twice a week', tip: 'marratayni is the dual of marra.' },
      { ar: 'أُفَضِّلُ الرَّسْمَ عَلَى التَّصْوِيرِ.', en: 'I prefer drawing to photography.', tip: 'The less-preferred thing follows ‘alā.' },
    ],
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · the right verb for the activity (website collocation table)', title: 'Play, practise, play on, listen to', ar: 'التَّلَازُمُ اللَّفْظِيُّ',
      cols: [{ label: 'Verb (I)', w: 2.8, size: 24 }, { label: 'What follows', w: 2.9, size: 18 }, { label: 'Example', w: 4.0, size: 24 }, { label: 'Meaning', w: 2.63 }],
      rows: [
        { core: true, cells: [{ ar: '{w|أَلْعَبُ}' }, 'a ball / board game', { ar: '{w|أَلْعَبُ} كُرَةَ السَّلَّةِ' }, 'I play basketball'] },
        { core: true, cells: [{ ar: '{w|أُمَارِسُ}' }, 'an activity', { ar: '{w|أُمَارِسُ} السِّبَاحَةَ' }, 'I go swimming'] },
        { core: true, cells: [{ ar: 'أَعْزِفُ {k|عَلَى}' }, 'an instrument', { ar: 'أَعْزِفُ {k|عَلَى} البِيَانُو' }, 'I play the piano'] },
        { cells: [{ ar: 'أَسْتَمِعُ {k|إِلَى}' }, 'a sound', { ar: 'أَسْتَمِعُ {k|إِلَى} المُوسِيقَى' }, 'I listen to music'] },
      ],
      foot: 'Store verb + preposition + noun as one unit (website). “I play swimming” does not exist in Arabic.',
      notes: `GRAMMAR PART 1 — website rules “يَلْعَبُ with ball games”, “يُمَارِسُ with an activity noun”, “يَعْزِفُ عَلَى with an instrument” and the website collocation table (with يَسْتَمِعُ إِلَى).
Website common error: choosing a sentence only because it contains the right hobby word — check verb, preposition and ending.
Quick-fire: say a hobby; students type the verb (كُرَةُ القَدَمِ → أَلْعَبُ · السِّبَاحَةُ → أُمَارِسُ · العُودُ → أَعْزِفُ عَلَى).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · how often and which you prefer (website)', title: 'Twice a week … I prefer …', ar: 'التَّكْرَارُ وَالتَّفْضِيلُ',
      cards: [
        { chip: 'HOW OFTEN · CORE', color: '1D5FBF', head: 'مَرَّةً · مَرَّتَيْنِ', big: 'أُمَارِسُ السِّبَاحَةَ مَرَّتَيْنِ فِي الأُسْبُوعِ.', en: 'I swim twice a week.', clue: '3–10: thalātha marrātin.' },
        { chip: 'PREFER · DEVELOP', color: '1E7B4F', head: 'أُفَضِّلُ … عَلَى …', big: 'أُفَضِّلُ المُوسِيقَى عَلَى الرِّيَاضَةِ.', en: 'I prefer music to sport.', clue: 'The loser comes after ‘alā.' },
        { chip: 'ENJOY · STRETCH', color: 'B83280', head: 'أَسْتَمْتِعُ بِـ · أَهْوَى', big: 'أَسْتَمْتِعُ بِالقِرَاءَةِ أَكْثَرَ مِنَ الغِنَاءِ.', en: 'I enjoy reading more than singing.', clue: 'bi- + the hobby.' },
      ],
      error: { text: 'Website common mistake: 3–10 take a plural — marrātin.', pairs: [['ثَلَاثَ مَرَّاتٍ فِي الشَّهْرِ', 'ثَلَاثَ مَرَّةٍ فِي الشَّهْرِ']] },
      notes: `GRAMMAR PART 2 — website rule “Frequency after a number” (مَرَّةً / مَرَّتَيْنِ / ثَلَاثَ مَرَّاتٍ + فِي + period) and the website preference structures: أُفَضِّلُ … عَلَى … · أَسْتَمْتِعُ بِـ … أَكْثَرَ مِنْ … · أَهْوَى … حَقًّا (I am truly passionate about).
Other frequency words (website): يَوْمِيًّا (daily), نَادِرًا (rarely), فِي وَقْتِ فَرَاغِي (in my free time). Topic A link: دَائِمًا، أَحْيَانًا، لَا … أَبَدًا.
Reason: لِأَنَّهُ / لِأَنَّهَا مُمْتِعٌ / مُمْتِعَةٌ — the pronoun matches the hobby noun (السِّبَاحَةُ f. → لِأَنَّهَا).`,
    },
  ],
  quick: [0, 1, 2, 4],
  rest: [3, 5, 6, 7],
  ido: {
    title: 'Watch me describe my free time',
    steps: [
      { head: 'Collocation', ar: 'فِي وَقْتِ فَرَاغِي {w|أُمَارِسُ} السِّبَاحَةَ', think: 'Swimming = activity → umārisu.' },
      { head: 'Frequency', ar: '{k|مَرَّتَيْنِ} فِي الأُسْبُوعِ', think: 'Twice = the dual.' },
      { head: 'Instrument', ar: 'وَأَعْزِفُ {k|عَلَى} العُودِ يَوْمِيًّا', think: 'Instrument → ‘alā.' },
      { head: 'Preference + reason', ar: '{p|أُفَضِّلُ} المُوسِيقَى {p|عَلَى} الرِّيَاضَةِ لِأَنَّهَا تُرِيحُنِي.', think: 'Music (f.) → li’annahā.' },
    ],
    legend: ['w', 'k', 'p'], legendLabels: { w: 'VERB', k: 'PARTNER WORD', p: 'PREFERENCE' },
    model: 'فِي وَقْتِ فَرَاغِي {w|أُمَارِسُ} السِّبَاحَةَ {k|مَرَّتَيْنِ} فِي الأُسْبُوعِ، وَأَعْزِفُ {k|عَلَى} العُودِ يَوْمِيًّا. {p|أُفَضِّلُ} المُوسِيقَى {p|عَلَى} الرِّيَاضَةِ لِأَنَّهَا تُرِيحُنِي بَعْدَ الدِّرَاسَةِ.',
    modelEn: 'In my free time I go swimming twice a week, and I play the oud every day. I prefer music to sport because it relaxes me after studying.',
    notes: 'I DO (3 min) — built from the website listening (Salma swims twice a week; Yusuf plays the oud daily and prefers music to sport). Think aloud before each verb: “ball game, activity, instrument or sound?”',
  },
  game: {
    title: 'What do they do? Match the picture',
    pick: [0, 2, 3],
    en: ['I like reading in my free time.', 'I like drawing.', 'I listen to music.'],
    icons: [[['fa6', 'FaBookOpen', '1D5FBF']], [['fa6', 'FaPalette', 'C77700']], [['fa6', 'FaHeadphones', '6B4C9A']]],
    labels: ['a book', 'a palette', 'headphones'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Stretch: turn each into “he / she” for the survey report (يُحِبُّ القِرَاءَةَ / تَسْتَمِعُ إِلَى المُوسِيقَى). Other cards for homework: أَلْعَبُ أَلْعَابَ الفِيدْيُو، أُحِبُّ السِّبَاحَةَ، أُحِبُّ المَشْيَ فِي الحَدِيقَةِ.',
  },
  sorterTitle: 'Which verb goes with it?',
  sorterCats: ['play (a game): al‘abu', 'practise: umārisu', 'play on: a‘zifu ‘alā'],
  sorterNotes: 'The website sorter has no title or instruction on the page; they are teacher-written here. Then: make one sentence from each column with a frequency phrase.',
  hints: ['Swimming: game or activity?', 'Instrument → which partner word?', 'After three: marra or marrāt?'],
  coreTip: 'Listen twice. Core: questions 1 and 3.\nListen for: مَرَّتَيْنِ · يَوْمِيًّا · ثَلَاثَ مَرَّاتٍ.',
  listenRoutes: 'Core: questions 1 and 3. Develop / Stretch: all 5.',
  gloss: [
    ['أَنَا سَلْمَى، وَأُمَارِسُ السِّبَاحَةَ مَرَّتَيْنِ فِي الأُسْبُوعِ لِأَنَّهَا تُرِيحُنِي بَعْدَ الدِّرَاسَةِ.', 'I am Salma, and I swim twice a week because it relaxes me after studying.'],
    ['وَفِي وَقْتِ فَرَاغِي أَقْرَأُ الرِّوَايَاتِ.', 'And in my free time I read novels.'],
    ['أَمَّا أَخِي يُوسُفُ فَيَعْزِفُ عَلَى العُودِ يَوْمِيًّا،', 'As for my brother Yusuf, he plays the oud every day,'],
    ['وَيَقُولُ إِنَّهُ يُفَضِّلُ المُوسِيقَى عَلَى الرِّيَاضَةِ.', 'and he says that he prefers music to sport.'],
    ['وَصَدِيقَتِي لَيْلَى تَلْعَبُ كُرَةَ السَّلَّةِ ثَلَاثَ مَرَّاتٍ فِي الشَّهْرِ فَقَطْ، لٰكِنَّهَا تَهْوَى التَّصْوِيرَ الفُوتُوغْرَافِيَّ حَقًّا.', 'And my friend Layla plays basketball only three times a month, but she is truly passionate about photography.'],
  ],
  speak: {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'مَاذَا تَفْعَلُ فِي وَقْتِ فَرَاغِكَ؟' },
      { route: 'develop', ar: 'مَا هِوَايَتُكَ المُفَضَّلَةُ؟ وَكَمْ مَرَّةً تُمَارِسُهَا فِي الأُسْبُوعِ؟' },
      { route: 'develop', ar: 'هَلْ تُفَضِّلُ الرِّيَاضَةَ عَلَى المُوسِيقَى؟ لِمَاذَا؟' },
      { route: 'stretch', ar: 'مَاذَا تَفْعَلُ فِي وَقْتِ فَرَاغِكَ مَعَ أَصْدِقَائِكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'فِي وَقْتِ فَرَاغِي ______ .' },
      { route: 'develop', ar: 'هِوَايَتِي المُفَضَّلَةُ ______ ، وَأُمَارِسُهَا ______ فِي الأُسْبُوعِ.' },
      { route: 'develop', ar: 'أُفَضِّلُ ______ عَلَى ______ لِأَنَّ ______ .' },
      { route: 'stretch', ar: 'مَعَ أَصْدِقَائِي ______ ، وَأَسْتَمْتِعُ بِـ ______ أَكْثَرَ مِنْ ______ .' },
    ],
    modelEn: ['What is your (f.) favourite hobby?', 'I swim twice a week, and I enjoy it a lot.'],
    notes: 'Website instruction: speak for thirty seconds about one hobby without notes — collocation, frequency, a preference structure and a reason with لِأَنَّ. Website prompts 2–4; the Core prompt is teacher-made.',
  },
  write: {
    core: { amount: '6 sentences', task: 'Website Core: six sentences with the vault and frames — one collocation and one frequency phrase each.', how: 'Three hobbies with the right verb, each with how often.' },
    develop: { amount: '8 sentences', task: 'Website task: eight sentences about your free time.', how: 'Link them into a paragraph with a preference (ufaḍḍilu … ‘alā …) and a reason.' },
    stretch: { amount: '8+ sentences', task: 'Website Stretch: compare two hobbies in one sentence.', how: 'Five collocation verbs, four frequency phrases, all three preference structures, amma … fa-.' },
  },
  frames: {
    core: [
      { en: 'In my free time I …', ar: 'فِي وَقْتِ فَرَاغِي ______ .' },
      { en: 'I play football.', ar: 'أَلْعَبُ كُرَةَ القَدَمِ.' },
      { en: 'I go swimming.', ar: 'أُمَارِسُ السِّبَاحَةَ.' },
      { en: 'I play the oud.', ar: 'أَعْزِفُ عَلَى العُودِ.' },
      { en: '… once / twice a week.', ar: '______ مَرَّةً / مَرَّتَيْنِ فِي الأُسْبُوعِ.' },
    ],
    develop: [
      { en: '… three times a month.', ar: '______ ثَلَاثَ مَرَّاتٍ فِي الشَّهْرِ.' },
      { en: 'I prefer … to …', ar: 'أُفَضِّلُ ______ عَلَى ______ .' },
      { en: 'I enjoy … more than …', ar: 'أَسْتَمْتِعُ بِـ ______ أَكْثَرَ مِنْ ______ .' },
      { en: 'I am truly passionate about …', ar: 'أَهْوَى ______ حَقًّا.' },
      { en: '… because it is enjoyable.', ar: '______ لِأَنَّهُ مُمْتِعٌ / لِأَنَّهَا مُمْتِعَةٌ.' },
    ],
    bank: ['أَلْعَبُ', 'أُمَارِسُ', 'أَعْزِفُ عَلَى', 'أَسْتَمِعُ إِلَى', 'السِّبَاحَةَ', 'الرَّسْمَ', 'القِرَاءَةَ', 'كُرَةَ القَدَمِ', 'مَرَّةً', 'مَرَّتَيْنِ', 'يَوْمِيًّا', 'لِأَنَّ'],
  },
  stretch: [
    ['أُفَضِّلُ الأَنْشِطَةَ الهَادِئَةَ عَلَى الأَلْعَابِ السَّرِيعَةِ', 'I prefer quiet activities to fast games'],
    ['وَمَعَ ذٰلِكَ أُشَاهِدُ المُبَارَاةَ أَحْيَانًا', 'even so, I sometimes watch the match'],
    ['أَمَّا هِوَايَتِي المُفَضَّلَةُ فَهِيَ …', 'as for my favourite hobby, it is …'],
    ['وَأَهْوَاهُ حَقًّا لِأَنَّهُ يَجْعَلُنِي سَعِيدًا', 'and I truly love it because it makes me happy'],
    ['نَتَنَاقَشُ فِيهَا طَوِيلًا', 'we discuss it for a long time'],
  ],
  modelEn: 'In my free time I go swimming twice a week, and I play basketball once a week. And I play the oud every day because music relaxes me. I prefer quiet activities to fast games, and I enjoy reading more than watching films. As for my favourite hobby, it is drawing, and I am truly passionate about it because it makes me happy.',
  find: ['five collocation verbs', 'the dual marratayni', 'ufaḍḍilu … ‘alā …', 'a reason with li’anna'],
  modelNotes: 'Evidence: أُمَارِسُ / أَلْعَبُ / أَعْزِفُ عَلَى / أَسْتَمْتِعُ بِـ / أَهْوَى · مَرَّتَيْنِ فِي الأُسْبُوعِ · أُفَضِّلُ الأَنْشِطَةَ الهَادِئَةَ عَلَى … · لِأَنَّ المُوسِيقَى تُرِيحُنِي.',
  selfCheck: [
    { route: 'core', text: 'Every hobby has the right verb.' },
    { route: 'core', text: 'I said how often.' },
    { route: 'develop', text: 'Twice = marratayni; 3–10 = marrātin.' },
    { route: 'develop', text: 'I used ufaḍḍilu … ‘alā …' },
    { route: 'stretch', text: 'Three preference structures + a matching reason pronoun.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['فِي وَقْتِ فَرَاغِي', 'in my free time'], ['أَرْكَبُ الدَّرَّاجَةَ', 'I ride a bike'], ['فِي نِهَايَةِ الأُسْبُوعِ', 'at the weekend'], ['الأَنْشِطَةَ الهَادِئَةَ', 'quiet activities'], ['الأَلْعَابِ السَّرِيعَةِ', 'fast games'],
    ['المُبَارَيَاتِ', 'matches'], ['وَمَعَ ذٰلِكَ', 'even so'], ['نَتَنَاقَشُ', 'we discuss'], ['طَوِيلًا', 'for a long time'], ['يَجْعَلُنِي سَعِيدَةً', 'makes me happy (f.)'],
  ],
  prep: {
    words: [['سَافَرْتُ إِلَى', 'I travelled to', 'he: سَافَرَ'], ['زُرْتُ', 'I visited', 'he: زَارَ'], ['أَقَمْتُ فِي', 'I stayed in', 'he: أَقَامَ'], ['رِحْلَةٌ', 'a trip', 'pl. رِحْلَاتٌ'], ['سَأَزُورُ', 'I will visit', '']],
    questionEn: 'Where did you go on your last holiday or day out? One sentence in Arabic.',
    questionAr: 'أَيْنَ سَافَرْتَ فِي العُطْلَةِ؟',
    homework: {
      core: 'Website D5-L01: the picture game and the sorter — learn 10 hobbies with their verbs.',
      develop: 'Website writing task: eight sentences about your free time.',
      stretch: 'Survey three people at home and write a report in the third person (he / she).',
    },
    wordsSource: 'The five words come from the website D5-L07 vocabulary (the TB-L09 lesson engine).',
  },
  remember: 'Remember: 5 travel words — visited is zurtu!',
});
const slides = T.wrap('B', 8, 'D5-L01', raw, {
  challenge: {
    steps: [
      'Survey: ask 3 classmates (on the mic or in the chat) about hobbies and sport.',
      'Record: the hobby, how often, and one reason.',
      'Rank the most popular activities in the class (teacher tallies in the chat).',
      'Report back in the third person: he plays … twice a week because …',
    ],
    routes: {
      core: 'Ask “mā hiwāyatuka?” and report one answer: “yal‘abu / tal‘abu …”.',
      develop: 'Report hobby + frequency + reason for two people.',
      stretch: 'Report the class ranking with a comparison: “aktharu min …” and one ability (yastaṭī‘u …).',
    },
    phrases: [['مَا هِوَايَتُكَ؟ / هِوَايَتُكِ؟', 'what is your hobby? (m. / f.)'], ['كَمْ مَرَّةً فِي الأُسْبُوعِ؟', 'how many times a week?'], ['هِيَ تُمَارِسُ السِّبَاحَةَ', 'she goes swimming'], ['أَكْثَرُ هِوَايَةٍ شُهْرَةً هِيَ …', 'the most popular hobby is …']],
    notes: 'Website Topic B challenge “Leisure survey showdown”: survey hobbies and sport, rank the most popular activities and report frequency, ability and reasons. Ability (Topic B layer): يَسْتَطِيعُ / تَسْتَطِيعُ أَنْ + verb (he / she can …) — e.g. تَسْتَطِيعُ أَنْ تَسْبَحَ جَيِّدًا.',
  },
});
module.exports = { meta, slides };
