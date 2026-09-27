'use strict';
/* F5-L03 · Likes, Dislikes and Preferences — website: Pathways › Foundation › F5 › F5-L03 (أُفَضِّلُ, أَكْثَرَ مِنْ, intensity words, أَيُّهُمَا / أَيَّتُهُمَا + أَمْ, reporting هُوَ يُفَضِّلُ / هِيَ تُفَضِّلُ). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F5')({
  n: 3, fileTitle: 'Likes_Dislikes_and_Preferences', chip: 'Likes and Preferences',
  title: 'Likes, Dislikes and Preferences', arabic: 'الإِعْجَابُ وَالتَّفْضِيلُ',
  focus: 'Extend food opinions with أُفَضِّلُ, compare two foods with أَكْثَرَ مِنْ, add intensity words and ask a boy or a girl which they prefer.',
  icon: 'FaHeart', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const who = (he, she, we) => ({ tag: 'I · he · she · we', forms: [{ l: 'he', ar: he }, { l: 'she', ar: she }, { l: 'we', ar: we }] });
const slides = D.devLesson('F5-L03', {
  support: `• Core: three opinions from a frame — أُحِبُّ … كَثِيرًا · لَا أُحِبُّ … · أُفَضِّلُ …
• Develop: compare three food pairs (أُفَضِّلُ أ أَكْثَرَ مِنْ ب) and report a partner (هُوَ يُفَضِّلُ / هِيَ تُفَضِّلُ).
• Stretch: summarise class survey results with numbers and plural verbs (يُفَضِّلُونَ) — the website reading text is the model.
• Website warning: أُفَضِّلُ (I prefer, a verb) ≠ أَفْضَلُ (better / best). The shadda and the first vowel make the difference.
• Website: “Preferences are personal, so there is no ‘correct’ favourite food. The accuracy comes from the language.”`,
  teach: 'Opinion and intensity words, then prefer + more than, and he / she forms.',
  wedo: 'Picture match, sort like / dislike / prefer, fix the mistakes and listen to four friends.',
  next: { nextCode: 'F5-L04', nextTitle: 'Giving Reasons: Taste and Health', nextAr: 'إِبْدَاءُ الأَسْبَابِ وَوَصْفُ المَذَاقِ' },
  doNow: {
    questions: [
      q('What does لَذِيذٌ mean?', ['delicious', 'healthy', 'favourite'], 'Prepared at home (F5-L02).'),
      q('What does مُفَضَّلٌ mean?', ['favourite', 'a lot', 'usually'], 'Prepared at home (F5-L02).'),
      q('Which sentence says “At breakfast I drink milk”?', ['فِي الفُطُورِ أَشْرَبُ الحَلِيبَ.', 'فِي الفُطُورِ آكُلُ الحَلِيبَ.', 'فِي الحَلِيبِ أَشْرَبُ الفُطُورَ.'], 'F5-L02: drinks take ashrabu.'),
      q('Ask a girl what she eats for dinner.', ['مَاذَا تَأْكُلِينَ فِي العَشَاءِ؟', 'مَاذَا يَأْكُلُ فِي العَشَاءِ؟', 'مَاذَا آكُلُ فِي العَشَاءِ؟'], 'F5-L02: a female listener → taʼkulīna.'),
      q('What does أَحْيَانًا mean?', ['sometimes', 'always', 'usually'], 'F5-L02 frequency words.'),
    ],
    keyIdea: { text: 'I like it → I like it a lot → I prefer it MORE THAN something else.', ar: 'أُحِبُّ الشَّايَ {m|كَثِيرًا} · {w|أُفَضِّلُ} الشَّايَ {k|أَكْثَرَ مِنَ} القَهْوَةِ' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F5-L02. Questions 3–5 retrieve F5-L02 (meal + drink, asking a girl, frequency).',
  },
  routes: {
    core: ['I can give three different food opinions.', 'I can use كَثِيرًا or جِدًّا.'],
    develop: ['I can compare two foods with أَكْثَرَ مِنْ.', 'I can report what he or she prefers.'],
    stretch: ['I can ask “which of the two?” to a boy or a girl.', 'I can summarise a class survey with numbers.'],
  },
  bridge: [
    { ar: 'أُفَضِّلُ', urdu: 'فضیلت / افضل', tr: 'afzal', en: 'Urdu: best, excellence → I prefer' },
    { ar: 'مُفَضَّلٌ', urdu: 'پسندیدہ', tr: 'pasandīda', en: 'favourite (a new word)' },
    { ar: 'خُصُوصًا', urdu: 'خصوصاً', tr: 'khusūsan', en: 'especially' },
    { ar: 'عِشْقٌ', urdu: 'عشق', tr: 'ishq', en: 'passion → I adore (aʿshaqu)' },
    { ar: 'قَلِيلًا', urdu: 'قلیل', tr: 'qalīl', en: 'little → a little' },
  ],
  bridgeNotes: 'URDU BRIDGE: افضل (best) and فضیلت share the root of أُفَضِّلُ — but WARNING: Arabic أَفْضَلُ (best) is exactly the word students must NOT write for “I prefer” (the website’s common error). خصوصاً is identical in Urdu. عشق → أَعْشَقُ (“I adore” — strong, even funny, with food). قلیل (little, few) → قَلِيلًا.',
  core: ['أُحِبُّ', 'لَا أُحِبُّ', 'أُفَضِّلُ', 'طَعَامِي المُفَضَّلُ', 'أَكْثَرَ مِنْ', 'كَثِيرًا', 'جِدًّا', 'قَلِيلًا', 'هَلْ تُحِبُّ؟', 'هَلْ تُحِبِّينَ؟', 'هُوَ يُفَضِّلُ', 'هِيَ تُفَضِّلُ'],
  forms: {
    'أُحِبُّ': who('يُحِبُّ', 'تُحِبُّ', 'نُحِبُّ'),
    'أُفَضِّلُ': who('يُفَضِّلُ', 'تُفَضِّلُ', 'نُفَضِّلُ'),
    'طَعَامِي المُفَضَّلُ': { tag: 'm · f', forms: [{ l: 'food (m.)', ar: 'طَعَامِي المُفَضَّلُ' }, { l: 'drink (m.)', ar: 'مَشْرُوبِي المُفَضَّلُ' }, { l: 'fruit (f.)', ar: 'فَاكِهَتِي المُفَضَّلَةُ' }] },
  },
  vocabNotes: {
    0: 'أَعْشَقُ is very strong (“I adore”) — fun for Stretch. لَا أَسْتَطِيعُ أَنْ آكُلَ (I can’t eat) is useful for allergies and diets.',
    2: 'أَيُّهُمَا (to a boy) / أَيَّتُهُمَا (to a girl) = “which of the two”. Core students can simply ask هَلْ تُفَضِّلُ … أَمْ …؟',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · prefer + more than (website rules 1 and 2)', title: 'I prefer A more than B', ar: 'أُفَضِّلُ + أَكْثَرَ مِنْ',
      cols: [{ label: 'Step', w: 2.3 }, { label: 'Arabic', w: 6.2, size: 26 }, { label: 'English', w: 3.83 }],
      rows: [
        { core: true, cells: ['1 · like', P('أُحِبُّ التَّمْرَ {m|كَثِيرًا}.', ''), 'I like dates a lot.'] },
        { core: true, cells: ['2 · prefer', P('{w|أُفَضِّلُ} العَصِيرَ.', ''), 'I prefer juice.'] },
        { core: true, cells: ['3 · compare', P('{w|أُفَضِّلُ} السَّمَكَ {k|أَكْثَرَ مِنَ} اللَّحْمِ.', ''), 'I prefer fish more than meat.'] },
        { cells: ['4 · compare', P('{w|أُفَضِّلُ} الشَّايَ {k|أَكْثَرَ مِنَ} القَهْوَةِ.', ''), 'I prefer tea more than coffee.'] },
        { cells: ['5 · less', P('آكُلُ اللَّحْمَ {k|أَقَلَّ مِنَ} الدَّجَاجِ.', ''), 'I eat meat less than chicken.'] },
      ],
      ltr: true,
      foot: 'Preferred item FIRST, then the whole chunk akthara min + the second item (ending in -i).',
      notes: `GRAMMAR PART 1 — website rules “State a preference” (أُفَضِّلُ + item) and “Compare two items” (أُفَضِّلُ أ + أَكْثَرَ مِنْ + ب).
Website common error: أُفَضِّلُ السَّمَكَ مِنَ اللَّحْمِ ✗ → أَكْثَرَ مِنَ اللَّحْمِ ✓ (use the complete chunk).
Pronunciation: مِنْ + ال → مِنَ ال (min-a l-laḥmi). The second item ends in kasra (اللَّحْمِ، القَهْوَةِ).
Note: the website game uses أُفَضِّلُ … عَلَى … (prepared at home) — equally correct: أُفَضِّلُ الشَّايَ عَلَى القَهْوَةِ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · report and ask (website rules 3 and 4)', title: 'He prefers, she prefers — which one?', ar: 'يُفَضِّلُ · تُفَضِّلُ · أَمْ',
      cards: [
        { chip: 'HE', color: '1D5FBF', head: 'هُوَ يُفَضِّلُ', big: 'هُوَ يُفَضِّلُ المَاءَ.', en: 'He prefers water.', clue: 'yu- for he.' },
        { chip: 'SHE', color: 'C0386B', head: 'هِيَ تُفَضِّلُ', big: 'هِيَ تُفَضِّلُ العَصِيرَ.', en: 'She prefers juice.', clue: 'tu- for she.' },
        { chip: 'WHICH? · A OR B', color: '6B4C9A', head: 'أَيُّهُمَا … أَمْ …؟', big: 'أَيُّهُمَا تُفَضِّلُ: الأَرُزَّ أَمِ الخُبْزَ؟', en: 'Which do you prefer: rice or bread?', clue: 'am = or (in questions).' },
      ],
      error: { text: 'Website common error: with hiya the verb starts with tu-.', pairs: [['هِيَ تُفَضِّلُ الشَّايَ.', 'هِيَ يُفَضِّلُ الشَّايَ.']] },
      notes: `GRAMMAR PART 2 — website rules “Change the verb for the person” (يُـ with هُوَ, تُـ with هِيَ) and “Ask between alternatives” (أَمْ between two named items).
To a girl: أَيَّتُهُمَا تُفَضِّلِينَ: الشَّايَ أَمِ القَهْوَةَ؟ (website model). Simpler for Core: هَلْ تُفَضِّلُ / تُفَضِّلِينَ الشَّايَ أَمِ القَهْوَةَ؟
Website teaching note: “Do not confuse أُفَضِّلُ ‘I prefer’ with أَفْضَلُ ‘better/best’.”`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 7],
  ido: {
    title: 'Watch me build a preference report',
    steps: [
      { head: '1 · Like + intensity', ar: 'أُحِبُّ الفَاكِهَةَ {m|كَثِيرًا}، {m|خُصُوصًا} التُّفَّاحَ.', think: 'A lot, especially …' },
      { head: '2 · Dislike', ar: 'لَا أُحِبُّ القَهْوَةَ.', think: 'Lā before the verb.' },
      { head: '3 · Compare', ar: '{w|أُفَضِّلُ} السَّمَكَ {k|أَكْثَرَ مِنَ} اللَّحْمِ.', think: 'Preferred item first.' },
      { head: '4 · Report her', ar: 'صَدِيقَتِي {w|تُفَضِّلُ} العَصِيرَ {k|أَكْثَرَ مِنَ} الحَلِيبِ.', think: 'She → tu-.' },
    ],
    legend: ['m', 'w', 'k'], legendLabels: { m: 'HOW MUCH', w: 'PREFER', k: 'MORE THAN' },
    model: 'أُحِبُّ الفَاكِهَةَ {m|كَثِيرًا}، {m|خُصُوصًا} التُّفَّاحَ. لَا أُحِبُّ القَهْوَةَ. {w|أُفَضِّلُ} السَّمَكَ {k|أَكْثَرَ مِنَ} اللَّحْمِ. صَدِيقَتِي تُحِبُّ الدَّجَاجَ، وَلَا تُحِبُّ السَّلَطَةَ. هِيَ {w|تُفَضِّلُ} العَصِيرَ {k|أَكْثَرَ مِنَ} الحَلِيبِ.',
    modelEn: 'I like fruit a lot, especially apples. I don’t like coffee. I prefer fish more than meat. My friend likes chicken and doesn’t like salad. She prefers juice more than milk.',
    notes: 'I DO (3 min) — the website writing model built step by step. Students copy it, then replace the friend with a real or invented person (صَدِيقِي يُفَضِّلُ …).',
  },
  game: {
    title: 'Like, dislike, prefer: match the picture',
    pick: [0, 1, 4],
    en: ['I like apples.', 'I don’t like milk.', 'I prefer coffee to fizzy drinks.'],
    icons: [[['fa6', 'FaHeart', 'C0392B'], ['fa6', 'FaAppleWhole', 'C0392B']], [['fa6', 'FaBan', '6B6B6B'], ['fa6', 'FaBottleWater', '1D5FBF']], [['fa6', 'FaMugHot', '8A5A2B'], ['fa6', 'FaThumbsUp', '1E7B4F']]],
    labels: ['like', 'don’t like', 'prefer A > B'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6; the other items are about reading, football and cycling — useful later). The third item uses أُفَضِّلُ … عَلَى … — another way to compare, prepared at home.',
  },
  sorterNotes: 'The “prefer” column includes طَعَامِي المُفَضَّلُ — a preference without the verb. Ask which word gave it away.',
  hints: ['Verb “I prefer” or adjective “best”?', 'What is missing before مِنَ?', 'She → which first letter?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nListen for: يُفَضِّلُ · لَا تُحِبُّ · أَكْثَرَ مِنْ.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 4, then say why Omar prefers water.',
  gloss: [
    ['يُفَضِّلُ سَامِرٌ التَّمْرَ أَكْثَرَ مِنَ الكَعْكِ.', 'Samir prefers dates more than cake.'],
    ['أَمَّا لَيْلَى فَتُحِبُّ الحَسَاءَ وَلَا تُحِبُّ البِيتْزَا.', 'As for Layla, she likes soup and doesn’t like pizza.'],
    ['يُحِبُّ عُمَرُ العَصِيرَ، وَلَكِنَّهُ يُفَضِّلُ المَاءَ لِأَنَّهُ يَشْرَبُهُ كُلَّ يَوْمٍ.', 'Omar likes juice, but he prefers water because he drinks it every day.'],
    ['تُفَضِّلُ نُورٌ السَّمَكَ أَكْثَرَ مِنَ اللَّحْمِ.', 'Nour prefers fish more than meat.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا طَعَامُكَ المُفَضَّلُ؟' },
      { route: 'develop', ar: 'أَيُّهُمَا تُفَضِّلُ: السَّمَكَ أَمِ الدَّجَاجَ؟' },
      { route: 'develop', ar: 'هَلْ تُحِبُّ الخَضْرَوَاتِ؟' },
      { route: 'stretch', ar: 'مَا المَشْرُوبُ الَّذِي لَا تُحِبُّهُ؟ وَمَاذَا تُفَضِّلُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'طَعَامِي المُفَضَّلُ هُوَ ______ .' },
      { route: 'develop', ar: 'أُفَضِّلُ ______ أَكْثَرَ مِنَ ______ .' },
      { route: 'develop', ar: 'نَعَمْ، أُحِبُّهَا كَثِيرًا / لَا، لَا أُحِبُّهَا.' },
      { route: 'stretch', ar: 'لَا أُحِبُّ ______ ، وَأُفَضِّلُ ______ .' },
    ],
    modelEn: ['Which do you (f.) prefer: tea or coffee?', 'I prefer tea more than coffee.'],
    notes: 'Website “Preference interview” — all four prompts are the website’s. Website model: أَيَّتُهُمَا تُفَضِّلِينَ: الشَّايَ أَمِ القَهْوَةَ؟ — أُفَضِّلُ الشَّايَ أَكْثَرَ مِنَ القَهْوَةِ. — وَهَلْ تُحِبِّينَ العَصِيرَ؟ — نَعَمْ، أُحِبُّهُ كَثِيرًا. After the interview, Develop students report: هُوَ يُفَضِّلُ … / هِيَ تُفَضِّلُ …',
  },
  write: {
    core: { amount: '4 sentences', how: 'Like, like a lot, don’t like, favourite food — from the Core frames.' },
    develop: { amount: '7–8 sentences', how: 'Website task: your preferences + one other person, with one comparison.' },
    stretch: { amount: '8–10 sentences', how: 'A class survey summary with numbers and plural verbs (yufaḍḍilūna).' },
  },
  frames: {
    core: [
      { en: 'I like … a lot.', ar: 'أُحِبُّ ______ كَثِيرًا.' },
      { en: 'I don’t like …', ar: 'لَا أُحِبُّ ______ .' },
      { en: 'I prefer …', ar: 'أُفَضِّلُ ______ .' },
      { en: 'My favourite food is …', ar: 'طَعَامِي المُفَضَّلُ هُوَ ______ .' },
      { en: 'My favourite drink is …', ar: 'مَشْرُوبِي المُفَضَّلُ هُوَ ______ .' },
    ],
    develop: [
      { en: 'I prefer … more than …', ar: 'أُفَضِّلُ ______ أَكْثَرَ مِنَ ______ .' },
      { en: '… especially …', ar: 'خُصُوصًا ______ .' },
      { en: 'My friend (m.) prefers …', ar: 'صَدِيقِي يُفَضِّلُ ______ .' },
      { en: 'My friend (f.) doesn’t like …', ar: 'صَدِيقَتِي لَا تُحِبُّ ______ .' },
      { en: 'Which do you prefer: … or …?', ar: 'أَيُّهُمَا تُفَضِّلُ: ______ أَمِ ______ ؟' },
    ],
    bank: ['أُحِبُّ', 'لَا أُحِبُّ', 'أُفَضِّلُ', 'يُفَضِّلُ', 'تُفَضِّلُ', 'أَكْثَرَ مِنْ', 'أَقَلَّ مِنْ', 'كَثِيرًا', 'جِدًّا', 'قَلِيلًا', 'خُصُوصًا', 'أَمْ'],
  },
  stretch: [
    ['سَأَلْنَا عَشَرَةَ طُلَّابٍ', 'we asked ten students'],
    ['أَرْبَعَةُ طُلَّابٍ يُفَضِّلُونَ …', 'four students prefer …'],
    ['طَالِبَانِ يُحِبَّانِ …', 'two students like …'],
    ['لَا تُحِبُّ اللَّحْمَ وَلَا السَّمَكَ', 'she likes neither meat nor fish'],
    ['أَمَّا المَشْرُوبُ المُفَضَّلُ فَهُوَ …', 'as for the favourite drink, it is …'],
  ],
  modelEn: 'I like fruit a lot, especially apples. I don’t like coffee. I prefer fish more than meat. My friend likes chicken and doesn’t like salad. She prefers juice more than milk.',
  find: ['intensity', 'a dislike', 'a comparison', 'she prefers'],
  modelNotes: 'Evidence: كَثِيرًا، خُصُوصًا · لَا أُحِبُّ القَهْوَةَ · أَكْثَرَ مِنَ اللَّحْمِ · هِيَ تُفَضِّلُ. The model has 5 sentences — Develop adds two more to reach 7–8.',
  selfCheck: [
    { route: 'core', text: 'I gave three different opinions.' },
    { route: 'core', text: 'I wrote أُفَضِّلُ, not أَفْضَلُ.' },
    { route: 'develop', text: 'My comparison has أَكْثَرَ مِنْ.' },
    { route: 'develop', text: 'He → يُـ, she → تُـ.' },
    { route: 'stretch', text: 'I summarised a survey with numbers.' },
  ],
  exit: [0, 3, 5],
  glossary: [
    ['سَأَلْنَا', 'we asked'], ['عَشَرَةَ طُلَّابٍ', 'ten students'], ['طَعَامِهِمُ المُفَضَّلِ', 'their favourite food'], ['يُفَضِّلُونَ', 'they prefer'], ['طَالِبَانِ يُحِبَّانِ', 'two students like'],
    ['طَالِبَةٌ وَاحِدَةٌ', 'one (girl) student'], ['وَلَا السَّمَكَ', 'nor fish'], ['النَّبَاتِيَّ', 'vegetarian'], ['أَمَّا … فَـ', 'as for …'], ['المَشْرُوبُ', 'the drink'],
  ],
  prep: {
    words: [['لِأَنَّهُ / لِأَنَّهَا', 'because it (m. / f.)', '—'], ['حُلْوٌ', 'sweet', 'f. حُلْوَةٌ'], ['مَالِحٌ', 'salty', 'f. مَالِحَةٌ'], ['حَارٌّ', 'spicy / hot', 'f. حَارَّةٌ'], ['صِحِّيٌّ', 'healthy', 'f. صِحِّيَّةٌ']],
    questionEn: 'Why do you like your favourite food? Write one reason in English or Arabic.',
    questionAr: 'أُحِبُّ … لِأَنَّهُ …',
    homework: {
      core: 'Website F5-L03: the vocabulary tab and the “Like, dislike or prefer?” sorter.',
      develop: 'Interview one person at home and write 7–8 sentences with one comparison.',
      stretch: 'Website Stretch: summarise a (real or invented) class survey with numbers.',
    },
    wordsSource: 'The five words come from the website F5-L04 lesson (taste and health reasons).',
  },
  remember: 'Remember: أُفَضِّلُ (I prefer) ≠ أَفْضَلُ (best) · preferred item + أَكْثَرَ مِنْ + the other.',
});

module.exports = { meta, slides };
