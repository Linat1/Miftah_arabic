'use strict';
/* F5-L10 · Healthy Habits and Advice — website: Pathways › Foundation › F5 › F5-L10 (positive habits and habits to limit, يَجِبُ أَنْ / مِنَ الأَفْضَلِ أَنْ / لَا يَجِبُ أَنْ, reasons with لِأَنَّ and results with لِذَلِكَ, بِاعْتِدَالٍ). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F5')({
  n: 10, fileTitle: 'Healthy_Habits_and_Advice', chip: 'Healthy Habits',
  title: 'Healthy Habits and Advice', arabic: 'العَادَاتُ الصِّحِّيَّةُ وَالنَّصِيحَةُ',
  focus: 'Describe a balanced lifestyle, give strong, gentle and negative advice (يَجِبُ أَنْ · مِنَ الأَفْضَلِ أَنْ · لَا يَجِبُ أَنْ) and explain it with لِأَنَّ and لِذَلِكَ.',
  icon: 'FaPersonRunning', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const who = (i, she, we) => ({ tag: 'I · she · we', forms: [{ l: 'I', ar: i }, { l: 'she', ar: she }, { l: 'we', ar: we }] });
const slides = D.devLesson('F5-L10', {
  support: `• Core: classify habits (helpful / to limit) and complete four advice frames: يَجِبُ أَنْ نَشْرَبَ … · لَا يَجِبُ أَنْ نُكْثِرَ مِنَ …
• Develop: six linked pieces of advice, each with a reason (لِأَنَّ …).
• Stretch: evaluate Nour’s lifestyle profile, choose two priority changes and justify the order (لِذَلِكَ …).
• Website: “A healthy lifestyle is a pattern, not one perfect meal … Use balanced, realistic language such as بِاعْتِدَالٍ.”
• Sensitivity: never comment on anyone’s body, weight or family food. Students may describe an invented character’s habits instead of their own.
• The same أَنْ + verb (-a) chunk as F4-L06 (school rules) and F5-L09 (doctor’s advice) — this is the third time: expect accuracy!`,
  teach: 'Habits to keep and habits to limit, then three strengths of advice + a reason.',
  wedo: 'Picture match, sort helpful / limit, fix the advice and listen: advice for three students.',
  next: { nextCode: 'F5-L11', nextTitle: 'Speaking and Writing About Food and Health', nextAr: 'التَّحَدُّثُ وَالكِتَابَةُ عَنِ الطَّعَامِ وَالصِّحَّةِ' },
  doNow: {
    questions: [
      q('What does نَصِيحَةٌ mean?', ['a piece of advice', 'a habit', 'sleep'], 'Prepared at home (F5-L09).'),
      q('What does عَادَةٌ صِحِّيَّةٌ mean?', ['a healthy habit', 'a sport', 'a medicine'], 'Prepared at home (F5-L09).'),
      q('Choose advice to a girl.', ['يَجِبُ أَنْ تَسْتَرِيحِي.', 'يَجِبُ أَنْ تَسْتَرِيحَ.', 'يَجِبُ أَنْ أَسْتَرِيحَ.'], 'F5-L09: a female listener → -ī.'),
      q('Which phrase means “twice a day”?', ['مَرَّتَيْنِ فِي اليَوْمِ', 'مَرَّةً فِي الأُسْبُوعِ', 'كُلَّ سَاعَةٍ'], 'F5-L09 dosage.'),
      q('Where do you buy medicine?', ['صَيْدَلِيَّةٌ', 'مُسْتَشْفًى', 'مَطْعَمٌ'], 'F5-L09 places.'),
    ],
    keyIdea: { text: 'Three strengths of advice — strong, gentle, negative — and always a reason.', ar: '{w|يَجِبُ أَنْ} · {m|مِنَ الأَفْضَلِ أَنْ} · {e|لَا يَجِبُ أَنْ}' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F5-L09. Questions 3–5 retrieve F5-L09 (advice to a girl, dosage, places).',
  },
  routes: {
    core: ['I can name six healthy habits.', 'I can give advice with يَجِبُ أَنْ.'],
    develop: ['I can give gentle and negative advice.', 'I can explain advice with لِأَنَّ.'],
    stretch: ['I can evaluate a lifestyle and prioritise changes.', 'I can use لِذَلِكَ for a result.'],
  },
  bridge: [
    { ar: 'صِحَّةٌ', urdu: 'صحت', tr: 'sehat', en: 'health' },
    { ar: 'عَادَةٌ', urdu: 'عادت', tr: 'ādat', en: 'habit' },
    { ar: 'نَصِيحَةٌ', urdu: 'نصیحت', tr: 'nasīhat', en: 'advice' },
    { ar: 'اِعْتِدَالٌ', urdu: 'اعتدال', tr: 'eʿtidāl', en: 'moderation' },
    { ar: 'مُتَوَازِنٌ', urdu: 'متوازن', tr: 'mutawāzin', en: 'balanced' },
  ],
  bridgeNotes: 'URDU BRIDGE: this lesson is almost all shared vocabulary — صحت، عادت، نصیحت، اعتدال، متوازن (balanced, as in متوازن غذا “a balanced diet”). Ask students to say the Urdu first, then the Arabic, and notice the ة / ت ending (صحت ↔ صِحَّةٌ).',
  core: ['يَشْرَبُ مَاءً كَافِيًا', 'يَأْكُلُ طَعَامًا مُتَوَازِنًا', 'يَأْكُلُ الفَاكِهَةَ وَالخَضْرَوَاتِ', 'يُمَارِسُ التَّمَارِينَ الرِّيَاضِيَّةَ', 'يَمْشِي', 'يَنَامُ مُبَكِّرًا', 'يَأْكُلُ سُكَّرًا كَثِيرًا', 'يَشْرَبُ مَشْرُوبَاتٍ غَازِيَّةً', 'يَسْهَرُ', 'يَجْلِسُ طَوِيلًا', 'يُنَظِّفُ أَسْنَانَهُ', 'يَسْتَرِيحُ'],
  forms: {
    'يَشْرَبُ مَاءً كَافِيًا': who('أَشْرَبُ', 'تَشْرَبُ', 'نَشْرَبُ'),
    'يَمْشِي': who('أَمْشِي', 'تَمْشِي', 'نَمْشِي'),
    'يَنَامُ مُبَكِّرًا': who('أَنَامُ', 'تَنَامُ', 'نَنَامُ'),
    'يُنَظِّفُ أَسْنَانَهُ': who('أُنَظِّفُ أَسْنَانِي', 'تُنَظِّفُ أَسْنَانَهَا', 'نُنَظِّفُ أَسْنَانَنَا'),
    'يَسْهَرُ': who('أَسْهَرُ', 'تَسْهَرُ', 'نَسْهَرُ'),
  },
  skipGroups: [3],
  vocabNotes: {
    0: 'The habits are in the “he” form (يَـ). The cards show I / she / we. In advice we use “we”: يَجِبُ أَنْ نَشْرَبَ، نَمْشِيَ، نَنَامَ.',
    1: 'Habits to LIMIT (website wording) — not “bad people”. يُكْثِرُ مِنْ = has too much of.',
    2: 'FLEX: the advice frames are on the grammar slides. بِاعْتِدَالٍ (in moderation) is the key balanced word: آكُلُ الحَلْوَيَاتِ بِاعْتِدَالٍ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · three strengths of advice (website rules 1–3)', title: 'Should · it is better · should not', ar: 'دَرَجَاتُ النَّصِيحَةِ',
      cols: [{ label: 'Strength', w: 2.4 }, { label: 'Advice', w: 6.2, size: 24 }, { label: 'English', w: 3.73 }],
      rows: [
        { core: true, cells: ['strong', P('{w|يَجِبُ أَنْ} نَشْرَبَ مَاءً كَافِيًا.', ''), 'We should drink enough water.'] },
        { core: true, cells: ['strong', P('{w|يَجِبُ أَنْ} نَنَامَ مُبَكِّرًا.', ''), 'We should sleep early.'] },
        { cells: ['gentle', P('{m|مِنَ الأَفْضَلِ أَنْ} نَمْشِيَ كُلَّ يَوْمٍ.', ''), 'It is better to walk every day.'] },
        { cells: ['gentle', P('{m|مِنَ الأَفْضَلِ أَنْ} نُقَلِّلَ السُّكَّرَ.', ''), 'It is better to reduce sugar.'] },
        { core: true, cells: ['negative', P('{e|لَا يَجِبُ أَنْ} نُكْثِرَ مِنَ الحَلْوَيَاتِ.', ''), 'We should not eat too many sweets.'] },
      ],
      ltr: true,
      foot: 'A VERB always follows an (ending in -a): an nashraba, an nanāma, an numshiya.',
      notes: `GRAMMAR PART 1 — website rules “Give strong advice” (يَجِبُ أَنْ), “Give gentler advice” (مِنَ الأَفْضَلِ أَنْ “it is better to” softens it) and “Give negative advice” (لَا يَجِبُ أَنْ).
Website common error: “A verb must follow أَنْ: يَجِبُ أَنْ نَشْرَبَ, not يَجِبُ أَنْ المَاءُ.” Also: لَا يَجِبُ نَأْكُلَ ✗ → لَا يَجِبُ أَنْ نَأْكُلَ ✓
The website game uses يَنْبَغِي أَنْ (“one ought to”) — a third gentle frame (Stretch).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · reason and result (website rule 4)', title: 'Because … so …', ar: 'لِأَنَّ · لِذَلِكَ',
      cards: [
        { chip: 'REASON · لِأَنَّ', color: '1D5FBF', head: 'لِأَنَّهُ / لِأَنَّهَا', big: 'الرِّيَاضَةُ مُفِيدَةٌ لِأَنَّهَا تُقَوِّي الجِسْمَ.', en: 'Exercise is beneficial because it strengthens the body.', clue: 'Sport is f. → -hā (F5-L04).' },
        { chip: 'RESULT · لِذَلِكَ', color: '6B4C9A', head: 'لِذَلِكَ', big: 'أَنَامُ قَلِيلًا؛ لِذَلِكَ أَشْعُرُ بِالتَّعَبِ.', en: 'I sleep little; so I feel tired.', clue: 'Cause first, then result.' },
        { chip: 'BALANCE', color: '1E7B4F', head: 'بِاعْتِدَالٍ', big: 'آكُلُ الحَلْوَيَاتِ بِاعْتِدَالٍ.', en: 'I eat sweets in moderation.', clue: 'Realistic, not perfect.' },
      ],
      error: { text: 'Website common error: sport is feminine, so the adjective is too.', pairs: [['الرِّيَاضَةُ مُفِيدَةٌ.', 'الرِّيَاضَةُ مُفِيدٌ.']] },
      notes: `GRAMMAR PART 2 — website rule “Explain the advice”: لِأَنَّ introduces the reason; لِذَلِكَ introduces the result or recommendation.
Website examples: المَاءُ مُفِيدٌ لِأَنَّهُ يُرَطِّبُ الجِسْمَ (water is m. → -hu) · أَنَامُ قَلِيلًا؛ لِذَلِكَ أَشْعُرُ بِالتَّعَبِ.
Link to Nour’s profile (reading): “she sits a long time while studying; so it is better to walk every day.”`,
    },
  ],
  quick: [0, 1, 3, 4],
  rest: [5, 6],
  ido: {
    title: 'Watch me write a healthy-lifestyle guide',
    steps: [
      { head: '1 · Strong', ar: '{w|يَجِبُ أَنْ} نَشْرَبَ مَاءً كَافِيًا {w|وَأَنْ} نَأْكُلَ الفَاكِهَةَ.', think: 'Two pieces: repeat an.' },
      { head: '2 · Gentle', ar: '{m|مِنَ الأَفْضَلِ أَنْ} نُمَارِسَ الرِّيَاضَةَ.', think: 'Softer advice.' },
      { head: '3 · Negative', ar: '{e|لَا يَجِبُ أَنْ} نُكْثِرَ مِنَ السُّكَّرِ.', think: 'Limit, not ban.' },
      { head: '4 · Reason + goal', ar: 'الرِّيَاضَةُ مُفِيدَةٌ لِأَنَّهَا تُقَوِّي الجِسْمَ. هَدَفِي أَنْ أَمْشِيَ كُلَّ يَوْمٍ.', think: 'Why + a realistic goal.' },
    ],
    legend: ['w', 'm', 'e'], legendLabels: { w: 'STRONG', m: 'GENTLE', e: 'NEGATIVE' },
    model: 'لِلْحِفَاظِ عَلَى صِحَّةٍ جَيِّدَةٍ، {w|يَجِبُ أَنْ} نَشْرَبَ مَاءً كَافِيًا وَأَنْ نَأْكُلَ الفَاكِهَةَ وَالخَضْرَوَاتِ. {m|مِنَ الأَفْضَلِ أَنْ} نُمَارِسَ الرِّيَاضَةَ وَأَنْ نَنَامَ مُبَكِّرًا. {e|لَا يَجِبُ أَنْ} نُكْثِرَ مِنَ السُّكَّرِ أَوِ المَشْرُوبَاتِ الغَازِيَّةِ. الرِّيَاضَةُ مُفِيدَةٌ لِأَنَّهَا تُقَوِّي الجِسْمَ. هَدَفِي أَنْ أَمْشِيَ ثَلَاثِينَ دَقِيقَةً كُلَّ يَوْمٍ.',
    modelEn: 'To keep good health, we should drink enough water and eat fruit and vegetables. It is better to do sport and sleep early. We should not have too much sugar or fizzy drinks. Sport is beneficial because it strengthens the body. My goal is to walk for thirty minutes every day.',
    notes: 'I DO (3 min) — the website writing model built step by step. Students copy it and replace the goal with their own realistic goal.',
  },
  game: {
    title: 'Healthy advice: match the picture',
    pick: [2, 3, 5],
    en: ['We should drink enough water.', 'We ought to sleep well.', 'We ought to reduce phone use at night.'],
    icons: [[['fa6', 'FaGlassWater', '1D5FBF'], ['fa6', 'FaCircleCheck', '1E7B4F']], [['fa6', 'FaBed', '6B4C9A'], ['fa6', 'FaCircleCheck', '1E7B4F']], [['fa6', 'FaMobileScreen', '1F3A5F'], ['fa6', 'FaMoon', 'C77700']]],
    labels: ['water ✓', 'sleep ✓', 'phone at night ↓'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Two items use يَنْبَغِي أَنْ (“one ought to”) — a gentle advice frame like مِنَ الأَفْضَلِ أَنْ. Other website items: healthy food, walking, less fried food (نُقَلِّلَ الطَّعَامَ المَقْلِيَّ).',
  },
  sorterNotes: 'After sorting, turn each “limit” item into negative advice: لَا يَجِبُ أَنْ نَسْهَرَ كُلَّ لَيْلَةٍ.',
  hints: ['Which ending after أَنْ?', 'What is missing after لَا يَجِبُ?', 'Is sport m. or f.?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for the advice frame after each semicolon.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 4, then say which advice is strong, gentle or negative.',
  gloss: [
    ['تَنَامُ لَيْلَى مُتَأَخِّرَةً وَتَشْعُرُ بِالتَّعَبِ فِي المَدْرَسَةِ؛', 'Layla sleeps late and feels tired at school;'],
    ['مِنَ الأَفْضَلِ أَنْ تَنَامَ مُبَكِّرًا.', 'it is better for her to sleep early.'],
    ['يَشْرَبُ مَازِنٌ قَلِيلًا مِنَ المَاءِ؛ يَجِبُ أَنْ يَحْمِلَ زُجَاجَةَ مَاءٍ.', 'Mazin drinks little water; he should carry a water bottle.'],
    ['يُحِبُّ سَعِيدٌ الحَلْوَيَاتِ وَيَأْكُلُهَا بَعْدَ كُلِّ وَجْبَةٍ؛', 'Saeed loves sweets and eats them after every meal;'],
    ['لَا يَجِبُ أَنْ يُكْثِرَ مِنَ السُّكَّرِ، وَيَجِبُ أَنْ يُنَظِّفَ أَسْنَانَهُ.', 'he should not have too much sugar, and he should clean his teeth.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَاذَا تَفْعَلُ لِتَكُونَ صِحِّيًّا / صِحِّيَّةً؟' },
      { route: 'develop', ar: 'كَمْ مَرَّةً تُمَارِسُ الرِّيَاضَةَ؟' },
      { route: 'develop', ar: 'هَلْ تَنَامُ مُبَكِّرًا؟' },
      { route: 'stretch', ar: 'مَا العَادَةُ الَّتِي تُرِيدُ أَنْ تُحَسِّنَهَا؟ وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَشْرَبُ المَاءَ وَ ______ كُلَّ يَوْمٍ.' },
      { route: 'develop', ar: 'أُمَارِسُ الرِّيَاضَةَ ______ مَرَّاتٍ فِي الأُسْبُوعِ.' },
      { route: 'develop', ar: 'نَعَمْ … / لَا، أَسْهَرُ أَحْيَانًا؛ لِذَلِكَ …' },
      { route: 'stretch', ar: 'أُرِيدُ أَنْ ______ لِأَنَّ ______ .' },
    ],
    modelEn: ['What do you (f.) do to be healthy?', 'I drink water and walk every day.'],
    notes: 'Website “Health coach conversation” — all four prompts are the website’s. One partner is the coach, one the client (real or invented habits). Website model: مَاذَا تَفْعَلِينَ لِتَكُونِي صِحِّيَّةً؟ — أَشْرَبُ المَاءَ وَأَمْشِي كُلَّ يَوْمٍ. — مَا هَدَفُكِ؟ — أُرِيدُ أَنْ أَنَامَ مُبَكِّرَةً.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Four advice frames (should / should not) and one habit you have.' },
    develop: { amount: '8–10 sentences', how: 'Website task: four good habits, two to limit, two reasons and one personal goal.' },
    stretch: { amount: '10+ sentences', how: 'Evaluate Nour’s profile: two priority changes, justified with because / so.' },
  },
  frames: {
    core: [
      { en: 'We should drink enough water.', ar: 'يَجِبُ أَنْ نَشْرَبَ مَاءً كَافِيًا.' },
      { en: 'We should sleep early.', ar: 'يَجِبُ أَنْ نَنَامَ مُبَكِّرًا.' },
      { en: 'We should not eat a lot of sugar.', ar: 'لَا يَجِبُ أَنْ نَأْكُلَ سُكَّرًا كَثِيرًا.' },
      { en: 'I eat fruit and vegetables every day.', ar: 'آكُلُ الفَاكِهَةَ وَالخَضْرَوَاتِ كُلَّ يَوْمٍ.' },
      { en: 'My goal is to walk every day.', ar: 'هَدَفِي أَنْ أَمْشِيَ كُلَّ يَوْمٍ.' },
    ],
    develop: [
      { en: 'It is better to …', ar: 'مِنَ الأَفْضَلِ أَنْ ______ .' },
      { en: '… because it strengthens the body.', ar: 'لِأَنَّهَا تُقَوِّي الجِسْمَ.' },
      { en: 'Water is useful because …', ar: 'المَاءُ مُفِيدٌ لِأَنَّهُ ______ .' },
      { en: 'I stay up late, so I feel tired.', ar: 'أَسْهَرُ؛ لِذَلِكَ أَشْعُرُ بِالتَّعَبِ.' },
      { en: 'I eat sweets in moderation.', ar: 'آكُلُ الحَلْوَيَاتِ بِاعْتِدَالٍ.' },
    ],
    bank: ['يَجِبُ أَنْ', 'لَا يَجِبُ أَنْ', 'مِنَ الأَفْضَلِ أَنْ', 'نَشْرَبَ', 'نَأْكُلَ', 'نَنَامَ', 'نَمْشِيَ', 'نُكْثِرَ مِنَ', 'لِأَنَّ', 'لِذَلِكَ', 'بِاعْتِدَالٍ', 'هَدَفِي'],
  },
  stretch: [
    ['أَحَاوِلُ أَنْ أَتَّبِعَ أُسْلُوبَ حَيَاةٍ صِحِّيًّا', 'I try to follow a healthy lifestyle'],
    ['بَدَلًا مِنَ المَشْرُوبَاتِ الغَازِيَّةِ', 'instead of fizzy drinks'],
    ['أَوَّلًا … لِأَنَّ … ثُمَّ …', 'first … because … then …'],
    ['هٰذَا التَّغْيِيرُ أَهَمُّ لِأَنَّ …', 'this change is more important because …'],
    ['هَدَفِي هٰذَا الشَّهْرَ', 'my goal this month'],
  ],
  modelEn: 'To keep good health, we should drink enough water and eat fruit and vegetables. It is better to do sport and sleep early. We should not have too much sugar or fizzy drinks. Sport is beneficial because it strengthens the body. My goal is to walk thirty minutes every day.',
  find: ['strong advice', 'gentle advice', 'negative advice', 'a reason'],
  modelNotes: 'Evidence: يَجِبُ أَنْ نَشْرَبَ · مِنَ الأَفْضَلِ أَنْ نُمَارِسَ · لَا يَجِبُ أَنْ نُكْثِرَ · لِأَنَّهَا تُقَوِّي الجِسْمَ · goal: هَدَفِي أَنْ أَمْشِيَ.',
  selfCheck: [
    { route: 'core', text: 'I gave four pieces of advice.' },
    { route: 'core', text: 'A verb (-a) follows every أَنْ.' },
    { route: 'develop', text: 'I used gentle and negative advice.' },
    { route: 'develop', text: 'Two pieces of advice have a reason.' },
    { route: 'stretch', text: 'My plan is balanced and realistic.' },
  ],
  exit: [0, 3, 4],
  glossary: [
    ['أُحَاوِلُ أَنْ أَتَّبِعَ', 'I try to follow'], ['أُسْلُوبَ حَيَاةٍ', 'a lifestyle'], ['بَدَلًا مِنَ', 'instead of'], ['ثَلَاثَ مَرَّاتٍ', 'three times'], ['أَثْنَاءَ الدِّرَاسَةِ', 'while studying'],
    ['مُتَأَخِّرَةً', 'late (f.)'], ['هَدَفِي', 'my goal'], ['أَهْتَمُّ بِـ', 'I take care of'], ['النَّظَافَةِ الشَّخْصِيَّةِ', 'personal hygiene'], ['النَّادِي الرِّيَاضِيِّ', 'the gym'],
  ],
  prep: {
    words: [['فِقْرَةٌ', 'a paragraph', 'pl. فِقْرَاتٌ'], ['خُطَّةٌ', 'a plan', 'pl. خُطَطٌ'], ['مُقَدِّمَةٌ', 'an introduction', '—'], ['خَاتِمَةٌ', 'a conclusion', '—'], ['أَدَوَاتُ الرَّبْطِ', 'connectives', '—']],
    questionEn: 'Which F5 topic do you want to talk about for one minute: food, meals, the body or health?',
    questionAr: 'سَأَتَحَدَّثُ عَنْ …',
    homework: {
      core: 'Website F5-L10: the vocabulary tab and the “Helpful habit or habit to limit?” sorter.',
      develop: 'Website writing task: an 8–10-sentence healthy-lifestyle guide with a personal goal.',
      stretch: 'Evaluate Nour’s lifestyle profile: prioritise two changes and justify them.',
    },
    wordsSource: 'The five words prepare the F5-L11 speaking and writing lesson (planning a connected paragraph).',
  },
  remember: 'Remember: يَجِبُ أَنْ · مِنَ الأَفْضَلِ أَنْ · لَا يَجِبُ أَنْ + verb (-a) · + لِأَنَّ …',
});

module.exports = { meta, slides };
