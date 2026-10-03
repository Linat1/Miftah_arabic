'use strict';
/* D5-L09 · Writing — My Leisure Life (Extended Writing) — website: Pathways › Development › D5 › D5-L09 (three-tense text: فِي الطُّفُولَةِ + past · الآنَ + present ·
 * فِي المُسْتَقْبَلِ + future; contrast أَمَّا … فَـ; opinion أَعْتَقِدُ أَنَّ + accusative; intention أَنْوِي أَنْ + subjunctive; self-marking the draft; 130–140 words).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading model, speaking and writing used as published. Key case-ending distractors kept
 * on purpose; two other near-identical distractors replaced; English added to the patterns and speaking model. The website visual game repeats
 * D5-L01, so it is skipped. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D5')({
  n: 9, fileTitle: 'Writing_My_Leisure_Life', chip: 'Extended Writing',
  title: 'Writing — My Leisure Life (Extended Writing)', arabic: 'الكِتَابَةُ — حَيَاتِي التَّرْفِيهِيَّةُ',
  focus: 'Plan, write and check a 130–140-word text on وَقْتُ فَرَاغِي in three time zones — past (فِي الطُّفُولَةِ لَعِبْتُ), present (أَمَّا الآنَ فَأُمَارِسُ), future (سَأَشْتَرِكُ · أَنْوِي أَنْ) — ending with an opinion (أَعْتَقِدُ أَنَّ …).',
  icon: 'FaPenNib', iconSet: 'fa6',
});

const site = D.site('D5-L09');
const quiz = site.grammar.quiz.map((it, i) => {
  if (i === 3) return { ...it, options: [it.options[0], it.options[1], 'إِلَى الرِّيَاضَةِ'] };
  if (i === 6) return { ...it, options: [it.options[0], it.options[1], 'وَفِي الخِتَامِ، أَعْتَقِدُ الهِوَايَاتِ مُهِمَّةٌ.'] };
  return it;
});
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D5-L09', {
  support: `• Core: the three-paragraph frame — one paragraph per tense with the given time phrase (70–90 words). Develop: 110–130 words with أَمَّا … فَـ and a connector in the past section. Stretch: the website task (130–140 words) with a كَانَ habit, a contrast and a justified opinion — then the 90-second self-mark.
• Website key message: Range = moving between tenses accurately, NOT adding long words. Writing everything in the present loses Range AND Accuracy.
• This is the D5 writing showcase: it pulls together L01 (hobbies), L02 (sport), L03–L05 (past, كَانَ), L07 (future).`,
  teach: 'Three time zones, one contrast, one opinion, one check.',
  wedo: 'Sort sentences into past / present / future, fix tense slips, then hear a student’s plan.',
  next: { nextCode: 'D5-L10', nextTitle: 'Listening — Sport, Leisure and Past Events', nextAr: 'الاِسْتِمَاعُ — الرِّيَاضَةُ وَالتَّرْفِيهُ' },
  objectives: ['Plan a three-paragraph text: past · present · future.', 'Signal each tense with a time phrase and match the verb.', 'Contrast with أَمَّا … فَـ and give an opinion with أَعْتَقِدُ أَنَّ.', 'Check my own draft for suffixes, collocations and word count.'],
  rulesAr: 'بِنَاءُ نَصٍّ تَرْفِيهِيٍّ بِثَلَاثَةِ أَزْمِنَةٍ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does المُسَوَّدَةُ mean?', ['the draft', 'the conclusion', 'the word count'], 'Prepared at home (D5-L08).'),
      q('What does أَنْوِي أَنْ mean?', ['I intend to', 'I believe that', 'I hope that'], 'Prepared at home (D5-L08).'),
      q('What does تَنَوُّعُ الأَزْمِنَةِ mean?', ['tense variety', 'accuracy', 'linking'], 'Prepared at home (D5-L08).'),
      q('Complete: فِي العَامِ المَاضِي ___ إِلَى نَادٍ جَدِيدٍ.', ['انْتَقَلْتُ', 'أَنْتَقِلُ', 'سَأَنْتَقِلُ'], 'D5-L08: time marker → tense.'),
      q('Choose the accurate sentence.', ['كَانَ أَبِي يُشَجِّعُنِي.', 'كَانَ أَبِي شَجَّعَنِي.', 'يَكُونُ أَبِي يُشَجِّعُنِي.'], 'D5-L05: kāna + present.'),
    ],
    keyIdea: { text: 'Range = past + present + future, each with its own time phrase — not long words.', ar: '{k|فِي الطُّفُولَةِ} لَعِبْتُ · {e|أَمَّا الآنَ} فَأُمَارِسُ · {w|فِي المُسْتَقْبَلِ} سَأَشْتَرِكُ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D5-L08. Questions 4–5 retrieve D5-L08 (time marker decides tense) and D5-L05 (كَانَ + present = habit).',
  },
  routes: {
    core: ['I can write one paragraph per tense with frames.', 'My verbs match my time phrases.'],
    develop: ['I can contrast with أَمَّا … فَـ.', 'I can add a connector and an opinion.'],
    stretch: ['I can write 130–140 words with a كَانَ habit.', 'I can self-mark my draft against the checklist.'],
  },
  bridge: [
    { ar: 'مُسَوَّدَةٌ', urdu: 'مسودہ', tr: 'musawwada', en: 'a draft' },
    { ar: 'خَاتِمَةٌ', urdu: 'خاتمہ', tr: 'khātima', en: 'conclusion' },
    { ar: 'مُقَدِّمَةٌ', urdu: 'مقدمہ', tr: 'muqaddama', en: 'introduction (Urdu also: a court case)' },
    { ar: 'زَمَنٌ / أَزْمِنَةٌ', urdu: 'زمانہ', tr: 'zamāna', en: 'Urdu: an era · Arabic grammar: a tense' },
    { ar: 'بِصَرَاحَةٍ', urdu: 'صراحت سے', tr: 'ṣarāḥat se', en: 'frankly, clearly' },
  ],
  bridgeNotes: 'URDU BRIDGE: مسودہ، خاتمہ، صراحت are shared. CAREFUL: Urdu زمانہ = an age / the times; in Arabic grammar زَمَنٌ (pl. أَزْمِنَةٌ) = a tense — تَنَوُّعُ الأَزْمِنَةِ = using different tenses.',
  core: ['تَنَوُّعُ الأَزْمِنَةِ', 'فِقْرَةٌ', 'المُسَوَّدَةُ', 'فِي الطُّفُولَةِ', 'أَمَّا الآنَ فَـ', 'فِي المُسْتَقْبَلِ', 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'وَفِي الخِتَامِ', 'فِي رَأْيِي', 'أَعْتَقِدُ أَنَّ', 'أَنْوِي أَنْ', 'أَتَمَنَّى أَنْ'],
  vocabNotes: {
    0: 'Talking about writing: the words of the marking criteria (range, accuracy, linking, word count).',
    1: 'Structuring the response: one time phrase per paragraph — they tell the reader (and the examiner) which tense to expect.',
    2: 'Opinion and evaluation: أَعْتَقِدُ أَنَّ + noun in -a; أَنْوِي / أَتَمَنَّى أَنْ + verb in -a.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the three-tense plan (website rule 1 + listening)', title: 'Three paragraphs, three tenses', ar: 'ثَلَاثُ فِقَرٍ، ثَلَاثَةُ أَزْمِنَةٍ',
      cols: [{ label: 'Paragraph', w: 2.4 }, { label: 'Model (website)', w: 7.2, size: 22 }, { label: 'Verb form', w: 2.73 }],
      rows: [
        { core: true, cells: ['1 · past', P('{k|فِي الطُّفُولَةِ} لَعِبْتُ كُرَةَ السَّلَّةِ، وَكَانَ أَبِي يُشَجِّعُنِي.', 'In childhood I played basketball, and my father used to encourage me.'), 'past · kāna + present'] },
        { core: true, cells: ['2 · present', P('{e|أَمَّا الآنَ} فَأُمَارِسُ السِّبَاحَةَ مَرَّتَيْنِ فِي الأُسْبُوعِ.', 'As for now, I swim twice a week.'), 'present'] },
        { core: true, cells: ['3 · future', P('{w|فِي المُسْتَقْبَلِ} سَأَشْتَرِكُ فِي بُطُولَةٍ.', 'In the future I will take part in a championship.'), 'sa- + present'] },
        { cells: ['3 · intention', P('أَنْوِي أَنْ أَتَعَلَّمَ رِيَاضَةً جَدِيدَةً.', 'I intend to learn a new sport.'), 'an + -a'] },
        { cells: ['4 · conclusion', P('وَفِي الخِتَامِ، أَعْتَقِدُ أَنَّ الرِّيَاضَةَ مُفِيدَةٌ لِلصِّحَّةِ.', 'In conclusion, I believe sport is good for health.'), 'anna + -a'] },
      ],
      ltr: true,
      foot: 'The time phrase tells the reader which tense to expect — then the verb must match it.',
      notes: `GRAMMAR PART 1 — website rule “Signal each tense with a time phrase” and the website listening (a student explains her plan: past paragraph → present paragraph → future paragraph → opinion → count the words and check every suffix). Website teaching point: “Range means moving between tenses, not adding long words.”
Website mistake: فِي الطُّفُولَةِ أَلْعَبُ ✗ → لَعِبْتُ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · contrast, opinion, intention (website rules 2–4) · Develop / Stretch', title: 'Three small words, many marks', ar: 'أَمَّا · أَنَّ · أَنْ',
      cards: [
        { chip: 'CONTRAST · CORE', color: '1E6B52', head: 'أَمَّا … فَـ', big: 'أَمَّا أَخِي فَيُفَضِّلُ المُوسِيقَى.', en: 'As for my brother, he prefers music.', clue: 'Never drop the fa-.' },
        { chip: 'OPINION · DEVELOP', color: '1D5FBF', head: 'أَعْتَقِدُ أَنَّ', big: 'أَعْتَقِدُ أَنَّ المُوسِيقَى تُرِيحُ النَّفْسَ.', en: 'I believe music relaxes the soul.', clue: 'anna + noun in -a.' },
        { chip: 'INTENTION · STRETCH', color: '6B4C9A', head: 'أَنْوِي أَنْ · أَتَمَنَّى أَنْ', big: 'أَنْوِي أَنْ أَتَعَلَّمَ العَزْفَ.', en: 'I intend to learn to play.', clue: 'an + verb in -a.' },
      ],
      error: { text: 'Website mistake: the fa- answering ammā cannot be dropped.', pairs: [['أَمَّا الآنَ فَأُمَارِسُ', 'أَمَّا الآنَ أُمَارِسُ']] },
      notes: `GRAMMAR PART 2 — website rules “Contrast with أَمَّا … فَـ” (the فَـ is obligatory), “Opinion with أَعْتَقِدُ أَنَّ” (أَنَّ makes the following noun accusative, unlike أَنْ which takes a subjunctive verb) and “Intention with أَنْوِي أَنْ”. Website mistake: أَعْتَقِدُ أَنَّ الرِّيَاضَةُ ✗ → الرِّيَاضَةَ.
These two small words (أَنَّ / أَنْ) look alike: anna + NOUN, an + VERB.`,
    },
  ],
  quick: [0, 1, 2, 4],
  rest: [3, 5, 6, 7],
  ido: {
    title: 'Watch me plan, draft and check',
    steps: [
      { head: 'Plan', ar: 'المَاضِي · الحَاضِرُ · المُسْتَقْبَلُ', think: 'Three boxes first.' },
      { head: 'Past', ar: '{k|فِي الطُّفُولَةِ} كُنْتُ أَلْعَبُ', think: 'Time phrase + past.' },
      { head: 'Switch', ar: '{e|أَمَّا الآنَ} فَأُمَارِسُ', think: 'Don’t drop fa-.' },
      { head: 'Check', ar: 'اللَّوَاحِقُ · عَدَدُ الكَلِمَاتِ', think: '90 seconds.' },
    ],
    legend: ['k', 'e', 'w'], legendLabels: { k: 'PAST', e: 'PRESENT', w: 'FUTURE' },
    model: '{k|فِي الطُّفُولَةِ} كُنْتُ أَلْعَبُ كُرَةَ القَدَمِ كُلَّ مَسَاءٍ مَعَ أَصْدِقَائِي، وَكَانَ أَبِي يُشَجِّعُنِي دَائِمًا. {e|أَمَّا الآنَ} فَأُمَارِسُ السِّبَاحَةَ مَرَّتَيْنِ فِي الأُسْبُوعِ، وَأَسْتَمْتِعُ بِهَا كَثِيرًا. {w|وَفِي المُسْتَقْبَلِ} سَأَشْتَرِكُ فِي بُطُولَةٍ مَدْرَسِيَّةٍ.',
    modelEn: 'In childhood I used to play football every evening with my friends, and my father always encouraged me. As for now, I swim twice a week and enjoy it a lot. In the future I will take part in a school championship.',
    notes: 'I DO (3 min) — the plan → draft → check cycle. The copy box is the skeleton of the website model (one sentence per tense). The full 130-word website model is on the Write / model slides. Then model the 90-second self-mark: circle every verb, check its ending against the time phrase.',
  },
  patternEn: ['in childhood I played', 'as for now, I practise', 'I believe that sport is useful'],
  sorterNotes: 'Then put one sentence from each column together to make a mini three-tense text.',
  patch: {
    grammar: { ...site.grammar, quiz },
    speaking: {
      model: [
        ['A', 'مَاذَا سَتَكْتُبُ فِي الفِقْرَةِ الأُولَى؟', 'What will you write in the first paragraph?'],
        ['B', 'سَأَكْتُبُ عَنِ المَاضِي: فِي الطُّفُولَةِ لَعِبْتُ كُرَةَ السَّلَّةِ، وَكَانَ أَبِي يُشَجِّعُنِي.', 'I will write about the past: in childhood I played basketball, and my father used to encourage me.'],
        ['A', 'وَكَيْفَ تَنْتَقِلُ إِلَى الحَاضِرِ؟', 'And how will you move to the present?'],
        ['B', 'أَسْتَعْمِلُ أَمَّا الآنَ فَـ، ثُمَّ أَذْكُرُ خُطَّتِي بِـ سَوْفَ، وَأَخْتِمُ بِرَأْيِي.', 'I use “as for now”, then I state my plan with “sawfa”, and I end with my opinion.'],
      ],
    },
  },
  patchNote: 'two near-identical quiz distractors replaced (the key case-ending errors are kept on purpose), English added to the patterns and speaking model; the website visual game repeats D5-L01 and is skipped.',
  hints: ['Childhood → which tense?', 'ammā … needs which letter?', 'anna + noun: which ending?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nThree paragraphs: past · present · future.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — then copy her plan as your own plan.',
  gloss: [
    ['قَبْلَ أَنْ أَكْتُبَ، رَسَمْتُ خُطَّةً بَسِيطَةً.', 'Before I wrote, I drew up a simple plan.'],
    ['فِي الفِقْرَةِ الأُولَى كَتَبْتُ عَنِ المَاضِي: فِي الطُّفُولَةِ لَعِبْتُ كُرَةَ السَّلَّةِ، وَكَانَ أَبِي يُشَجِّعُنِي كُلَّ أُسْبُوعٍ.', 'In the first paragraph I wrote about the past: in childhood I played basketball, and my father encouraged me every week.'],
    ['وَفِي الفِقْرَةِ الثَّانِيَةِ كَتَبْتُ عَنِ الحَاضِرِ: أَمَّا الآنَ فَأُمَارِسُ السِّبَاحَةَ مَرَّتَيْنِ فِي الأُسْبُوعِ.', 'In the second paragraph I wrote about the present: as for now, I swim twice a week.'],
    ['وَفِي الفِقْرَةِ الثَّالِثَةِ كَتَبْتُ عَنِ المُسْتَقْبَلِ: سَأَشْتَرِكُ فِي بُطُولَةٍ، وَأَنْوِي أَنْ أَتَعَلَّمَ رِيَاضَةً جَدِيدَةً.', 'In the third paragraph I wrote about the future: I will take part in a championship, and I intend to learn a new sport.'],
    ['وَفِي الخِتَامِ أَضَفْتُ رَأْيِي: أَعْتَقِدُ أَنَّ الرِّيَاضَةَ مُفِيدَةٌ لِلصِّحَّةِ. ثُمَّ عَدَدْتُ الكَلِمَاتِ وَرَاجَعْتُ كُلَّ لَاحِقَةٍ.', 'In conclusion I added my opinion: I believe sport is good for health. Then I counted the words and checked every suffix.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَاذَا سَتَكْتُبُ فِي الفِقْرَةِ الأُولَى عَنِ المَاضِي؟' },
      { route: 'develop', ar: 'كَيْفَ سَتَنْتَقِلُ مِنَ المَاضِي إِلَى الحَاضِرِ؟' },
      { route: 'stretch', ar: 'مَا خُطَّتُكَ لِلْمُسْتَقْبَلِ؟ وَمَا رَأْيُكَ فِي الخِتَامِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'فِي الطُّفُولَةِ ______ ، وَكَانَ ______ .' },
      { route: 'develop', ar: 'أَمَّا الآنَ فَـ ______ مَرَّتَيْنِ فِي الأُسْبُوعِ.' },
      { route: 'stretch', ar: 'فِي المُسْتَقْبَلِ سَـ ______ ، وَأَعْتَقِدُ أَنَّ ______ .' },
    ],
    modelEn: ['What will you write in the first paragraph?', 'I will write about the past: in childhood I played basketball, and my father used to encourage me.'],
    notes: 'Website prompts and model: talk the plan through BEFORE writing. Pairs: 60 seconds each; the partner ticks past / present / future heard. To a girl: سَتَكْتُبِينَ · سَتَنْتَقِلِينَ · خُطَّتُكِ · رَأْيُكِ.',
  },
  write: {
    core: { amount: '70–90 words', how: 'One paragraph per tense with the given time phrases (frames).' },
    develop: { amount: '110–130 words', how: 'Link with أَمَّا … فَـ, a past connector and an opinion.' },
    stretch: { amount: '130–140 words', how: 'Website task: 6+ past verbs, 2 future verbs, كَانَ + habit, a contrast and a justified opinion.' },
  },
  frames: {
    core: [
      { en: 'In childhood I used to …', ar: 'فِي الطُّفُولَةِ كُنْتُ ______ .' },
      { en: 'Last year I …', ar: 'فِي العَامِ المَاضِي ______ .' },
      { en: 'As for now, I …', ar: 'أَمَّا الآنَ فَـ ______ .' },
      { en: 'In the future I will …', ar: 'فِي المُسْتَقْبَلِ سَـ ______ .' },
    ],
    develop: [
      { en: 'Suddenly … / Unfortunately …', ar: 'فَجْأَةً ______ ، وَلِلْأَسَفِ ______ .' },
      { en: 'I prefer … to …', ar: 'أُفَضِّلُ ______ عَلَى ______ .' },
      { en: 'I intend to …', ar: 'أَنْوِي أَنْ ______ .' },
      { en: 'In conclusion, I believe that …', ar: 'وَفِي الخِتَامِ، أَعْتَقِدُ أَنَّ ______ .' },
    ],
    bank: ['فِي الطُّفُولَةِ', 'كُنْتُ', 'كَانَ … يُشَجِّعُنِي', 'فِي العَامِ المَاضِي', 'فَجْأَةً', 'أَمَّا الآنَ فَـ', 'مَرَّتَيْنِ فِي الأُسْبُوعِ', 'فِي المُسْتَقْبَلِ', 'سَأَشْتَرِكُ', 'أَنْوِي أَنْ', 'أَعْتَقِدُ أَنَّ', 'وَفِي الخِتَامِ'],
  },
  stretch: [
    ['كَانَ أَبِي يُشَجِّعُنِي دَائِمًا', 'my father always used to encourage me'],
    ['أُصِبْتُ فِي رُكْبَتِي', 'I injured my knee'],
    ['عُدْتُ أَقْوَى', 'I came back stronger'],
    ['أُفَضِّلُ الرِّيَاضَةَ الجَمَاعِيَّةَ عَلَى الفَرْدِيَّةِ', 'I prefer team sport to individual sport'],
    ['مُهِمٌّ لِلصِّحَّةِ وَلِلسَّعَادَةِ مَعًا', 'important for both health and happiness'],
  ],
  modelEn: 'In childhood I used to play football every evening with my friends, and my father always encouraged me. Last year I joined a nearby club and trained three times a week. Suddenly I injured my knee, and unfortunately I stopped for two months, but luckily I came back stronger. As for now, I swim twice a week and enjoy it a lot because it relaxes me after studying. I prefer team sport to individual sport. In the future I will take part in a school championship, and I will also learn to play the oud. In conclusion, I believe free time is important for both health and happiness.',
  find: ['six past verbs', 'a كَانَ habit', 'أَمَّا الآنَ فَـ', 'two future verbs + an opinion'],
  modelNotes: 'Website writing model (≈ 130 words). Evidence: كُنْتُ أَلْعَبُ · كَانَ أَبِي يُشَجِّعُنِي · اشْتَرَكْتُ · تَدَرَّبْتُ · أُصِبْتُ · تَوَقَّفْتُ · عُدْتُ · أَمَّا الآنَ فَأُمَارِسُ · أُفَضِّلُ … عَلَى · سَأَشْتَرِكُ · سَوْفَ أَتَعَلَّمُ · أَعْتَقِدُ أَنَّ وَقْتَ الفَرَاغِ مُهِمٌّ.',
  selfCheck: [
    { route: 'core', text: 'Each paragraph has a time phrase and matching verbs.' },
    { route: 'core', text: 'Every past verb has the right ending.' },
    { route: 'develop', text: 'My أَمَّا has its فَـ.' },
    { route: 'develop', text: 'After أَنَّ my noun ends in -a.' },
    { route: 'stretch', text: 'I counted my words (130–140) and checked every collocation.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['فِي الشَّارِعِ', 'in the street'], ['اشْتَرَكْتُ فِي نَادٍ', 'I joined a club'], ['تَدَرَّبْتُ', 'I trained'], ['أُصِبْتُ فِي رُكْبَتِي', 'I injured my knee'], ['تَوَقَّفْتُ شَهْرَيْنِ', 'I stopped for two months'],
    ['عُدْتُ أَقْوَى', 'I came back stronger'], ['أَكْثَرَ مِنَ الجَرْيِ', 'more than running'], ['بُطُولَةٍ مَدْرَسِيَّةٍ', 'a school championship'], ['العَزْفَ عَلَى العُودِ', 'playing the oud'], ['لِلسَّعَادَةِ', 'for happiness'],
  ],
  prep: {
    words: [['الكَلَامُ السَّرِيعُ', 'fast speech', '—'], ['المُلْهِيَاتُ', 'distractors', 'sing. مُلْهِيَةٌ'], ['عَادَةً', 'usually', '—'], ['غَدًا', 'tomorrow', '—'], ['الأُسْبُوعَ القَادِمَ', 'next week', '—']],
    questionEn: 'Finish your final draft. Then: which is harder for you in listening — numbers, names or tenses?',
    questionAr: 'أَصْعَبُ شَيْءٍ فِي الاسْتِمَاعِ هُوَ …',
    homework: {
      core: 'Final 70–90-word version from the frames; learn the five listening words.',
      develop: 'Final 110–130-word version with أَمَّا … فَـ and an opinion.',
      stretch: 'Website writing task: final 130–140 words, self-marked against the checklist.',
    },
    wordsSource: 'The five words come from the website D5-L10 vocabulary (listening strategy and tense markers).',
  },
  remember: 'Remember: past · present · future — one time phrase each — أَمَّا needs فَـ — then check every ending before you hand in.',
});

module.exports = { meta, slides };
