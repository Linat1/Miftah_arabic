'use strict';
/*
 * F3-L02 · Describing Family Members
 * Website: Pathways › Foundation › F3 › Lesson 2. The family and agreement bridge, appearance adjectives (height and build,
 * hair), hair and eye colours (شَعْرٌ masculine · عُيُونٌ feminine plural), personality adjectives (10, m. / f.), the
 * description order (identity → name and age → appearance → personality), the Guess Who? mission (14), Huda describes two
 * relatives (listening), the family portraits reading, the Guess Who? speaking studio, the two-person paragraph and the
 * 14-question checkpoint.
 */
const F = require('./f3-common');
const game = require('../site-data/pathway-visual-games.json')['f3-l02'];
const { q, bank, banks } = F;

const meta = F.meta({
  n: 2, fileTitle: 'Describing_Family_Members', chip: 'Describing Family',
  title: 'Describing Family Members', arabic: 'وَصْفُ أَفْرَادِ العَائِلَةِ',
  focus: 'Describe family members respectfully: height, hair, eyes and personality, with every adjective agreeing with the person — and hair (m.) and eyes (f.) agreeing with their own colours.',
  icon: 'FaUserGroup', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F3-L03', nextTitle: 'My Home — Rooms and Parts of the House', nextAr: 'بَيْتِي — الغُرَفُ وَأَجْزَاءُ المَنْزِلِ' };
const rounds = banks.l02.rounds.map((r) => F.w({ ...r, q: `${r.title}: ${r.prompt}` }));
const prompts = banks.l02.prompts;
const MF = (m, f) => ({ tag: 'm · f', forms: [{ l: 'f.', ar: f }, { l: 'm.', ar: m }] });

const site = {
  speaking: {
    context: 'Guess Who? Describe a person',
    model: [
      ['A', 'هُوَ أَخِي الأَكْبَرُ. عُمْرُهُ سَبْعَ عَشْرَةَ سَنَةً.', 'He is my older brother. He is seventeen.'],
      ['B', 'هُوَ طَوِيلٌ وَنَحِيفٌ. شَعْرُهُ أَسْوَدُ وَعُيُونُهُ بُنِّيَّةٌ. مَنْ هُوَ؟', 'He is tall and slim. His hair is black and his eyes are brown. Who is he?'],
    ],
  },
  writing: {
    prompt: 'Website writing workshop: a connected paragraph of at least six sentences about two family members (real or fictional) — relationship and name, age, appearance, personality, and a comparison or reason.',
    checklist: ['هُوَ / هِيَ and every adjective agree.', 'شَعْرٌ + masculine colour · عُيُونٌ + feminine colour.', 'Two or three personality adjectives each.', 'Connectors: وَ، وَلَكِنْ، لِأَنَّ.'],
    model: 'هَذَا أَخِي. اِسْمُهُ يُوسُفُ. عُمْرُهُ سِتَّ عَشْرَةَ سَنَةً. هُوَ طَوِيلٌ وَنَحِيفٌ. شَعْرُهُ أَسْوَدُ وَعُيُونُهُ بُنِّيَّةٌ. هُوَ مُضْحِكٌ وَكَرِيمٌ. هَذِهِ أُخْتِي. اِسْمُهَا زَيْنَبُ. عُمْرُهَا أَرْبَعَ عَشْرَةَ سَنَةً. هِيَ قَصِيرَةٌ وَجَمِيلَةٌ. شَعْرُهَا بُنِّيٌّ وَعُيُونُهَا خَضْرَاءُ. هِيَ لَطِيفَةٌ وَمُجْتَهِدَةٌ.',
  },
  differentiation: {
    core: 'Five or six accurate sentences about two people using the model.',
    develop: '70–90 words with age, appearance, personality and three connectors.',
    stretch: 'Compare the two people and give a reason with wa-lākin, ammā … fa- and li’anna.',
  },
  mistakes: [
    { wrong: 'أُمِّي هَادِئٌ وَكَرِيمٌ.', right: 'أُمِّي هَادِئَةٌ وَكَرِيمَةٌ.', why: 'Mother is feminine: EVERY adjective takes -a.' },
    { wrong: 'شَعْرُهَا سَوْدَاءُ.', right: 'شَعْرُهَا أَسْوَدُ.', why: 'Hair is masculine — even when it is HER hair.' },
    { wrong: 'عُيُونُهُ أَزْرَقُ.', right: 'عُيُونُهُ زَرْقَاءُ.', why: 'Eyes (plural of things) take the feminine colour.' },
  ],
  listening: {
    title: 'Huda describes two relatives',
    script: 'اِسْمِي هُدَى. سَأَصِفُ شَخْصَيْنِ مِنْ عَائِلَتِي. أَوَّلًا، هَذَا أَخِي الأَكْبَرُ وَاسْمُهُ سَامِرٌ. عُمْرُهُ سَبْعَ عَشْرَةَ سَنَةً. هُوَ طَوِيلٌ وَنَحِيفٌ. شَعْرُهُ أَسْوَدُ وَعُيُونُهُ بُنِّيَّةٌ. هُوَ مُضْحِكٌ وَكَرِيمٌ، وَلَكِنَّهُ صَاخِبٌ أَحْيَانًا. ثَانِيًا، هَذِهِ جَدَّتِي وَاسْمُهَا سَلْمَى. هِيَ قَصِيرَةٌ وَشَعْرُهَا أَبْيَضُ وَعُيُونُهَا خَضْرَاءُ. هِيَ هَادِئَةٌ وَلَطِيفَةٌ وَمُحِبَّةٌ. أُحِبُّهُمَا لِأَنَّهُمَا يُسَاعِدَانِنِي دَائِمًا.',
    questions: bank(2, 'listeningQuiz', [2, 3, 5, 7, 8]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 2,
    source: 'Website sections used: the eight-question family and agreement bridge, appearance adjectives (height and build, hair) and the 10-question check, hair and eye colours and the 8-question colour check, personality adjectives (10) and the 10-question check, the description order and the 12-question agreement laboratory, the Guess Who? mission (14), Huda’s two relatives (listening, 10), family portraits (reading, 12), the Guess Who? speaking studio (4 person cards), the two-person paragraph and the 14-question checkpoint. Picture match: website visual game “Describing Family Members”.',
    support: `• Core: 6 appearance + 6 personality adjectives in m. / f. + “he is … / she is …”. Develop: hair and eyes with colours (شَعْرُهُ أَسْوَدُ · عُيُونُهَا خَضْرَاءُ). Stretch: several adjectives in one chain, a contrast (وَلَكِنَّهُ) and a comparison of two people.
• RESPECTFUL DESCRIPTION (website): describe real people kindly and only with details they would share — or use the fictional people. The website deliberately removed body-size labels: height, hair, eyes and positive personality only. Invented people for Guess Who.
• Two traps: hair is masculine even for a woman (شَعْرُهَا أَسْوَدُ) and eyes take the feminine colour (عُيُونُهُ بُنِّيَّةٌ).
• Urdu bridge: لطیف، کریم، ذہین (Urdu) / ذَكِيٌّ، خوش / سَعِيدٌ (Arabic name سعید), محنتی / مُجْتَهِدٌ (Urdu مجتہد = scholar).`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Appearance and personality words, then hair (m.) and eyes (f.).', wedo: 'Guess Who? mission, listen to Huda, read two portraits.', next: 'F3-L03' }),
  F.doNow({
    questions: [
      q('What does طَوِيلَةٌ mean?', ['tall (f.)', 'short (f.)', 'kind (f.)'], 'Prepared at home (F3-L01).'),
      q('What does لَطِيفٌ mean?', ['kind', 'funny', 'generous'], 'Prepared at home (F3-L01).'),
      ...bank(2, 'retrievalQuiz', [0, 2, 7]),
    ],
    keyIdea: { text: 'The adjective follows the person: he → ṭawīl, she → ṭawīla. Several adjectives? EVERY one agrees.', ar: 'هُوَ طَوِيلٌ وَلَطِيفٌ · هِيَ طَوِيلَ{e|ةٌ} وَلَطِيفَ{e|ةٌ}' },
    retrieves: 'Questions 1–2 test two of the five adjectives prepared at home at the end of F3-L01. Questions 3–5 are the website “family and agreement bridge” (my older brother, her name, my mother is kind).',
  }),
  F.objectivesSlide([
    'Use the complete appearance and personality bank.',
    'Describe hair and eyes with accurate colour forms.',
    'Make several adjectives agree with one person.',
    'Write a connected description of two family members.',
  ], {
    core: ['I can describe a person with two adjectives.', 'I can use he is / she is correctly.'],
    develop: ['I can describe hair and eyes with colours.', 'I can make every adjective agree.'],
    stretch: ['I can compare two people.', 'I can add a contrast and a reason.'],
  }, 2, 'Website “By the end” aims (left) and the website writing Core / Develop / Stretch routes (right).'),
  F.keywordsSlide({
    text: 'Appearance, hair and eyes, and personality — all in masculine and feminine. Core: six appearance and six personality words.',
    groups: [
      { head: 'GROUP 1', name: 'Height, build and hair · 12' },
      { head: 'GROUP 2', name: 'Hair and eye colours · 7' },
      { head: 'GROUP 3', name: 'Personality · 10' },
    ],
    bridge: [
      { ar: 'لَطِيفٌ', urdu: 'لطیف', tr: 'laṭīf', en: 'kind, pleasant' },
      { ar: 'كَرِيمٌ', urdu: 'کریم', tr: 'karīm', en: 'generous' },
      { ar: 'سَعِيدٌ', urdu: 'سعید (name)', tr: 'sa‘īd', en: 'happy' },
      { ar: 'جَمِيلٌ', urdu: 'جمیل', tr: 'jamīl', en: 'beautiful' },
      { ar: 'مُجْتَهِدٌ', urdu: 'محنتی', tr: 'mujtahid', en: 'hard-working (Urdu مجتہد = scholar)' },
    ],
    notes: 'URDU BRIDGE: لطیف، کریم، جمیل and سعید are known as words and names. CAREFUL: مُجْتَهِدٌ is simply “hard-working” in everyday Arabic (Urdu محنتی); ذَكِيٌّ (intelligent) is ذہین in Urdu — same idea, different root.',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · height, build and hair (website)', title: 'Tall, short, long hair …', ar: 'صِفَاتُ المَظْهَرِ',
    items: [
      { n: 1, ar: 'طَوِيلٌ', en: 'tall / long', tr: 'ṭa-wīl', core: true, ...MF('طَوِيلٌ', 'طَوِيلَةٌ') },
      { n: 2, ar: 'قَصِيرٌ', en: 'short', tr: 'qa-ṣīr', core: true, ...MF('قَصِيرٌ', 'قَصِيرَةٌ') },
      { n: 3, ar: 'نَحِيفٌ', en: 'slim', tr: 'na-ḥīf', core: true, ...MF('نَحِيفٌ', 'نَحِيفَةٌ') },
      { n: 4, ar: 'كَبِيرٌ', en: 'big / older', tr: 'ka-bīr', core: true, ...MF('كَبِيرٌ', 'كَبِيرَةٌ') },
      { n: 5, ar: 'صَغِيرٌ', en: 'small / younger', tr: 'ṣa-ghīr', core: true, ...MF('صَغِيرٌ', 'صَغِيرَةٌ') },
      { n: 6, ar: 'شَعْرُهُ / شَعْرُهَا', en: 'his hair / her hair', tr: 'sha‘-ru-hu / sha‘-ru-hā', tag: 'hair = m.', core: true, forms: [{ l: 'short hair', ar: 'شَعْرٌ قَصِيرٌ' }, { l: 'long hair', ar: 'شَعْرٌ طَوِيلٌ' }] },
    ],
    notes: 'APPEARANCE (website). Also: جَمِيلٌ / جَمِيلَةٌ (beautiful), أَشْقَرُ / شَقْرَاءُ (blond), بُنِّيُّ الشَّعْرِ / بُنِّيَّةُ الشَّعْرِ (brown-haired). Website current scope: height, hair, eyes and positive personality only — no body-size labels.',
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 3 · personality (website)', title: 'Kind, funny, generous …', ar: 'صِفَاتُ الشَّخْصِيَّةِ',
    items: [
      { n: 7, ar: 'لَطِيفٌ', en: 'kind / pleasant', tr: 'la-ṭīf', core: true, ...MF('لَطِيفٌ', 'لَطِيفَةٌ') },
      { n: 8, ar: 'مُضْحِكٌ', en: 'funny', tr: 'muḍ-ḥik', core: true, ...MF('مُضْحِكٌ', 'مُضْحِكَةٌ') },
      { n: 9, ar: 'هَادِئٌ', en: 'quiet / calm', tr: 'hā-di’', core: true, ...MF('هَادِئٌ', 'هَادِئَةٌ') },
      { n: 10, ar: 'كَرِيمٌ', en: 'generous', tr: 'ka-rīm', core: true, ...MF('كَرِيمٌ', 'كَرِيمَةٌ') },
      { n: 11, ar: 'مُجْتَهِدٌ', en: 'hard-working', tr: 'muj-ta-hid', core: true, ...MF('مُجْتَهِدٌ', 'مُجْتَهِدَةٌ') },
      { n: 12, ar: 'ذَكِيٌّ', en: 'intelligent', tr: 'dha-kiyy', core: true, ...MF('ذَكِيٌّ', 'ذَكِيَّةٌ') },
    ],
    notes: 'PERSONALITY (website, 6 of 10). Also: صَاخِبٌ / صَاخِبَةٌ (loud), مُحِبٌّ / مُحِبَّةٌ (loving), سَعِيدٌ / سَعِيدَةٌ (happy), مُتَعَاوِنٌ / مُتَعَاوِنَةٌ (helpful). Website: “use more than one adjective to create a fuller picture” — أَبِي كَرِيمٌ وَمُضْحِكٌ، وَأُمِّي لَطِيفَةٌ وَمُجْتَهِدَةٌ.',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · hair and eye colours (website)', title: 'Hair is masculine, eyes are feminine', ar: 'أَلْوَانُ الشَّعْرِ وَالعُيُونِ',
    cols: [{ label: 'Colour', w: 2.6, size: 22 }, { label: 'Hair (m.)', w: 3.2, size: 24 }, { label: 'Eyes (f.)', w: 3.4, size: 24 }, { label: 'Meaning', w: 3.13 }],
    rows: [
      { core: true, cells: [{ ar: 'أَسْوَدُ / سَوْدَاءُ' }, { ar: 'شَعْرٌ {w|أَسْوَدُ}' }, { ar: '—' }, 'black hair'] },
      { core: true, cells: [{ ar: 'بُنِّيٌّ / بُنِّيَّةٌ' }, { ar: 'شَعْرٌ {w|بُنِّيٌّ}' }, { ar: 'عُيُونٌ {e|بُنِّيَّةٌ}' }, 'brown hair · brown eyes'] },
      { core: true, cells: [{ ar: 'أَخْضَرُ / خَضْرَاءُ' }, { ar: '—' }, { ar: 'عُيُونٌ {e|خَضْرَاءُ}' }, 'green eyes'] },
      { cells: [{ ar: 'أَزْرَقُ / زَرْقَاءُ' }, { ar: '—' }, { ar: 'عُيُونٌ {e|زَرْقَاءُ}' }, 'blue eyes'] },
      { cells: [{ ar: 'أَشْقَرُ / شَقْرَاءُ' }, { ar: 'شَعْرٌ {w|أَشْقَرُ}' }, { ar: '—' }, 'blond hair'] },
    ],
    foot: 'Her hair is black = sha‘ruhā aswad (hair stays masculine). His eyes are brown = ‘uyūnuhu bunniyya.',
    notes: `GRAMMAR PART 1 — website section 3 “Hair and eye colours”: the أَفْعَلُ / فَعْلَاءُ colours and regular بُنِّيٌّ / بُنِّيَّةٌ; “Eyes are plural and feminine” (عُيُونٌ بُنِّيَّةٌ · عُيُونٌ خَضْرَاءُ · عُيُونٌ زَرْقَاءُ); “Hair is masculine” (شَعْرٌ بُنِّيٌّ · شَعْرٌ أَسْوَدُ · شَعْرٌ أَشْقَرُ).
The full colour system comes in F3-L05. Also grey hair: شَعْرٌ أَبْيَضُ (white) — website listening (the grandmother).`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · the description order (website)', title: 'Who → name and age → looks → character', ar: 'تَرْتِيبُ الوَصْفِ',
    cards: [
      { chip: '1 · IDENTITY', color: '1D5FBF', head: 'هَذَا / هَذِهِ', big: 'هَذَا أَخِي. اِسْمُهُ يُوسُفُ.', en: 'This is my brother. His name is Yusuf.', clue: 'Name + age: ‘umruhu …' },
      { chip: '2 · APPEARANCE', color: 'C77700', head: 'هُوَ … شَعْرُهُ …', big: 'هُوَ طَوِيلٌ. شَعْرُهُ أَسْوَدُ وَعُيُونُهُ بُنِّيَّةٌ.', en: 'He is tall. His hair is black and his eyes are brown.', clue: 'Height, hair, eyes.' },
      { chip: '3 · PERSONALITY', color: 'B83280', head: 'هِيَ … وَ …', big: 'هِيَ لَطِيفَةٌ وَمُجْتَهِدَةٌ.', en: 'She is kind and hard-working.', clue: 'Two adjectives — both agree.' },
    ],
    error: { text: 'Website agreement laboratory: both adjectives must match the mother.', pairs: [['أُمِّي هَادِئَةٌ وَكَرِيمَةٌ.', 'أُمِّي هَادِئٌ وَكَرِيمٌ.']] },
    notes: `GRAMMAR PART 2 — website section 5 “Build accurate description sentences”: choose the person, choose هُوَ / هِيَ, then make every adjective agree; add name, age, hair, eyes and personality in a clear order (1 identity · 2 name and age · 3 description).
Website models: هَذَا أَخِي. اِسْمُهُ يُوسُفُ. عُمْرُهُ سِتَّ عَشْرَةَ سَنَةً. هُوَ طَوِيلٌ وَنَحِيفٌ. شَعْرُهُ أَسْوَدُ وَعُيُونُهُ بُنِّيَّةٌ. هُوَ مُضْحِكٌ وَكَرِيمٌ. — and the feminine model for زَيْنَبُ.
Contrast (Stretch): هُوَ صَاخِبٌ، وَلَكِنَّهُ لَطِيفٌ.`,
  },
  F.quickCheck(bank(2, 'agreementQuiz', [0, 3, 5, 9]), 'website “Twelve-question agreement laboratory” questions 1, 4, 6 and 10.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me describe two relatives', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Him', ar: 'هَذَا أَخِي الأَكْبَرُ. عُمْرُهُ سَبْعَ عَشْرَةَ سَنَةً.', think: 'Identity + age.' },
      { head: 'His looks', ar: 'هُوَ طَوِيلٌ. شَعْرُهُ {w|أَسْوَدُ} وَعُيُونُهُ {e|بُنِّيَّةٌ}.', think: 'Hair m. · eyes f.' },
      { head: 'Her', ar: 'هَذِهِ جَدَّتِي. هِيَ قَصِيرَ{e|ةٌ}، وَشَعْرُهَا {w|أَبْيَضُ}.', think: 'HER hair is still masculine.' },
      { head: 'Character + reason', ar: 'هِيَ هَادِئَ{e|ةٌ} وَمُحِبَّ{e|ةٌ}، وَأُحِبُّهَا لِأَنَّهَا لَطِيفَ{e|ةٌ}.', think: 'Every adjective -a.' },
    ],
    legend: ['w', 'e'], legendLabels: { w: 'MASCULINE (HAIR)', e: 'FEMININE' },
    model: 'هَذَا أَخِي الأَكْبَرُ. عُمْرُهُ سَبْعَ عَشْرَةَ سَنَةً. هُوَ طَوِيلٌ، شَعْرُهُ {w|أَسْوَدُ} وَعُيُونُهُ {e|بُنِّيَّةٌ}. هُوَ مُضْحِكٌ وَكَرِيمٌ. وَهَذِهِ جَدَّتِي. هِيَ قَصِيرَ{e|ةٌ}، وَشَعْرُهَا {w|أَبْيَضُ} وَعُيُونُهَا {e|خَضْرَاءُ}. هِيَ هَادِئَ{e|ةٌ} وَمُحِبَّ{e|ةٌ}.',
    modelEn: 'This is my older brother. He is seventeen. He is tall, his hair is black and his eyes are brown. He is funny and generous. And this is my grandmother. She is short, her hair is white and her eyes are green. She is calm and loving.',
    notes: 'I DO (3 min) — the website listening (Huda’s brother Samir and grandmother Salma) as a model. Think aloud at every adjective: “about him or her? — is it hair (m.) or eyes (f.)?”',
  },
  F.gameSlide({ ...game, items: [game.items[1], game.items[2], game.items[4]] }, {
    title: 'Who is it? Match the picture',
    en: ['This is my father.', 'This is my sister.', 'This is my grandmother.'],
    icons: [[['fa6', 'FaPerson', '1D5FBF'], ['fa6', 'FaChild', '5A6472']], [['fa6', 'FaPersonDress', 'B83280'], ['fa6', 'FaPersonDress', 'B83280']], [['fa6', 'FaPersonCane', 'B83280'], ['fa6', 'FaChildDress', '5A6472']]],
    labels: ['father and son', 'two girls', 'grandmother and girl'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Follow-up (Develop): add one description to each — هٰذَا أَبِي، هُوَ طَوِيلٌ وَكَرِيمٌ · هٰذِهِ أُخْتِي، هِيَ ذَكِيَّةٌ …',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website “Guess Who? Description Mission”', title: 'Guess who', ar: 'مَنْ هُوَ؟ مَنْ هِيَ؟',
    seed: 12,
    questions: [rounds[1], rounds[2], rounds[3], rounds[6], rounds[8]],
    side: { kind: 'core', label: 'CORE', text: 'She → every adjective -a\nHair = masculine colour\nEyes = feminine colour' },
    answerSlide: { min: 0, eyebrow: 'We do · Mission answers', title: 'Mission: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 14 Guess Who rounds (female height, green eyes, black hair, grandmother, her brown eyes). The other 9 are homework.',
    answerNotes: 'After each answer ask: who or what does the adjective describe?',
  },
  F.repairSlide(site, ['Mother → which ending on both adjectives?', 'Hair: masculine or feminine?', 'Eyes: which colour form?']),
  F.listening(site, {
    coreTip: 'Listen twice.\nTwo boxes: person 1 · person 2 (who, age, hair, eyes, character).',
    routes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5.',
    gloss: [
      ['اِسْمِي هُدَى. سَأَصِفُ شَخْصَيْنِ مِنْ عَائِلَتِي.', 'My name is Huda. I will describe two people from my family.'],
      ['أَوَّلًا، هَذَا أَخِي الأَكْبَرُ وَاسْمُهُ سَامِرٌ. عُمْرُهُ سَبْعَ عَشْرَةَ سَنَةً. هُوَ طَوِيلٌ وَنَحِيفٌ.', 'First, this is my older brother, Samir. He is seventeen. He is tall and slim.'],
      ['شَعْرُهُ أَسْوَدُ وَعُيُونُهُ بُنِّيَّةٌ. هُوَ مُضْحِكٌ وَكَرِيمٌ، وَلَكِنَّهُ صَاخِبٌ أَحْيَانًا.', 'His hair is black and his eyes are brown. He is funny and generous, but sometimes loud.'],
      ['ثَانِيًا، هَذِهِ جَدَّتِي وَاسْمُهَا سَلْمَى. هِيَ قَصِيرَةٌ وَشَعْرُهَا أَبْيَضُ وَعُيُونُهَا خَضْرَاءُ.', 'Second, this is my grandmother, Salma. She is short, her hair is white and her eyes are green.'],
      ['هِيَ هَادِئَةٌ وَلَطِيفَةٌ وَمُحِبَّةٌ. أُحِبُّهُمَا لِأَنَّهُمَا يُسَاعِدَانِنِي دَائِمًا.', 'She is calm, kind and loving. I love them both because they always help me.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · family portraits (website)', title: 'Uncle Maher and aunt Noor', ar: 'أَوْصَافُ العَائِلَةِ',
    lines: [
      ['هَذَا خَالِي مَاهِرٌ. عُمْرُهُ خَمْسٌ وَثَلَاثُونَ سَنَةً. هُوَ طَوِيلٌ وَنَحِيفٌ،', 'Maher: maternal uncle · 35 · tall and slim'],
      ['وَشَعْرُهُ بُنِّيٌّ وَقَصِيرٌ. عُيُونُهُ زَرْقَاءُ. مَاهِرٌ هَادِئٌ وَمُجْتَهِدٌ، وَهُوَ كَرِيمٌ مَعَ أُسْرَتِهِ.', 'Hair: brown, short · eyes: blue · calm, hard-working, generous'],
      ['وَهَذِهِ عَمَّتِي نُورٌ. عُمْرُهَا ثَلَاثُونَ سَنَةً. هِيَ قَصِيرَةٌ،', 'Noor: paternal aunt · 30 · short'],
      ['وَشَعْرُهَا أَسْوَدُ وَطَوِيلٌ، وَعُيُونُهَا بُنِّيَّةٌ. نُورٌ مُضْحِكَةٌ وَلَطِيفَةٌ وَمُتَعَاوِنَةٌ.', 'Hair: black, long · eyes: brown · funny, kind, helpful'],
      ['يَخْتَلِفُ مَاهِرٌ وَنُورٌ فِي المَظْهَرِ، وَلَكِنَّهُمَا مُحِبَّانِ وَكَرِيمَانِ.', 'Different looks — but both loving and generous'],
    ],
    notes: 'FAMILY PORTRAITS (website, complete). Notice: شَعْرُهَا أَسْوَدُ (HER hair — masculine colour) and عُيُونُهُ زَرْقَاءُ (HIS eyes — feminine colour). Stretch: the dual مُحِبَّانِ وَكَرِيمَانِ (both loving and generous).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions (website)', title: 'Maher or Noor?', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 9,
    questions: bank(2, 'readingQuiz', [0, 3, 4, 8, 10]),
    side: { kind: 'info', head: 'EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Find the person’s name,\nthen the adjectives after it.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading questions 1, 4, 5, 9 and 11. The other 7 are homework.',
    answerNotes: 'A student reads aloud the evidence phrase (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'كَيْفَ هُوَ؟ / كَيْفَ هِيَ؟' },
      { route: 'develop', ar: 'صِفْ شَعْرَهُ وَعُيُونَهُ. / صِفْ شَعْرَهَا وَعُيُونَهَا.' },
      { route: 'develop', ar: 'مَا صِفَاتُ شَخْصِيَّتِهِ؟ / شَخْصِيَّتِهَا؟' },
      { route: 'stretch', ar: 'صِفْ شَخْصًا بِدُونِ أَنْ تَقُولَ مَنْ هُوَ: مَنْ هُوَ؟ مَنْ هِيَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'هُوَ ______ وَ ______ . / هِيَ ______ ـةٌ وَ ______ ـةٌ.' },
      { route: 'develop', ar: 'شَعْرُهُ / شَعْرُهَا ______ ، وَعُيُونُهُ / عُيُونُهَا ______ .' },
      { route: 'develop', ar: 'هُوَ مُضْحِكٌ وَ ______ ، وَلَكِنَّهُ ______ أَحْيَانًا.' },
      { route: 'stretch', ar: 'عُمْرُهُ … هُوَ … شَعْرُهُ … مَنْ هُوَ؟' },
    ],
    modelEn: ['He is my older brother. He is seventeen.', 'He is tall and slim. His hair is black and his eyes are brown. Who is he?'],
    notes: `WEBSITE SPEAKING STUDIO “Guess Who?” — describe a real or invented person (30–60 s) without naming the relationship; the listener guesses and says which clues helped. Person cards (website):
${prompts.map((r) => `• ${r.title}: ${r.detail}`).join('\n')}
Website checklist (1–6): identity not revealed too soon · agreement · height / hair / eyes · two personality adjectives · connectors · clear delivery.
The prompts are teacher-made from the website studio steps.`,
  }),
  F.routesSlide(site, {
    core: { amount: '5–6 sentences', how: 'Two people with the model: he is … / she is … + hair or eyes.' },
    develop: { amount: '70–90 words', how: 'Age, appearance, personality for both, and three connectors.' },
    stretch: { amount: '90+ words', how: 'Compare the two: wa-lākin, ammā … fa-, and a reason (li’anna).' },
  }),
  F.framesSlide({
    core: [
      { en: 'He is tall and kind.', ar: 'هُوَ طَوِيلٌ وَلَطِيفٌ.' },
      { en: 'She is short and funny.', ar: 'هِيَ قَصِيرَةٌ وَمُضْحِكَةٌ.' },
      { en: 'His hair is black.', ar: 'شَعْرُهُ أَسْوَدُ.' },
      { en: 'Her eyes are brown.', ar: 'عُيُونُهَا بُنِّيَّةٌ.' },
      { en: 'He / She is … years old.', ar: 'عُمْرُهُ / عُمْرُهَا ______ سَنَةً.' },
    ],
    develop: [
      { en: 'Her hair is long and black.', ar: 'شَعْرُهَا طَوِيلٌ وَأَسْوَدُ.' },
      { en: 'His eyes are blue.', ar: 'عُيُونُهُ زَرْقَاءُ.' },
      { en: 'He is funny, but sometimes loud.', ar: 'هُوَ مُضْحِكٌ، وَلَكِنَّهُ صَاخِبٌ أَحْيَانًا.' },
      { en: 'As for my aunt, she is …', ar: 'أَمَّا عَمَّتِي فَهِيَ ______ .' },
      { en: 'I love her because she is …', ar: 'أُحِبُّهَا لِأَنَّهَا ______ .' },
    ],
    bank: ['طَوِيلٌ', 'قَصِيرٌ', 'نَحِيفٌ', 'لَطِيفٌ', 'مُضْحِكٌ', 'هَادِئٌ', 'كَرِيمٌ', 'ذَكِيٌّ', 'مُجْتَهِدٌ', 'شَعْرُهُ / شَعْرُهَا', 'عُيُونُهُ / عُيُونُهَا', 'ـةٌ'],
  }),
  F.modelSlide(site,
    'This is my brother. His name is Yusuf. He is sixteen. He is tall and slim. His hair is black and his eyes are brown. He is funny and generous. This is my sister. Her name is Zaynab. She is fourteen. She is short and pretty. Her hair is brown and her eyes are green. She is kind and hard-working.',
    ['masculine adjectives', 'feminine adjectives', 'hair + masculine colour', 'eyes + feminine colour'],
    'Website models (masculine and feminine descriptions), joined. Stretch: add a contrast or comparison between the two (أَمَّا أُخْتِي فَـ …).'),
  F.selfCheckSlide([
    { route: 'core', text: 'He → no -a; she → -a on every adjective.' },
    { route: 'core', text: 'I described looks AND character.' },
    { route: 'develop', text: 'Hair takes a masculine colour.' },
    { route: 'develop', text: 'Eyes take a feminine colour.' },
    { route: 'stretch', text: 'I compared two people with a contrast and a reason.' },
  ]),
  F.exitTicket(bank(2, 'finalQuiz', [0, 3, 4]), 14),
  F.prepSlide({
    ...NEXT,
    words: [['بَيْتٌ', 'a house, a home', 'pl. بُيُوتٌ'], ['شَقَّةٌ', 'a flat', 'pl. شُقَقٌ'], ['غُرْفَةٌ', 'a room', 'pl. غُرَفٌ'], ['مَطْبَخٌ', 'a kitchen', 'pl. مَطَابِخُ'], ['حَدِيقَةٌ', 'a garden', 'pl. حَدَائِقُ']],
    questionEn: 'Do you live in a house or a flat? (A real or an invented home is fine.)',
    questionAr: 'أَيْنَ تَسْكُنُ؟',
    homework: {
      core: 'Website F3-L02: the Guess Who? mission (14) and the picture game.',
      develop: 'Website writing workshop: describe two family members (real or fictional) in 70–90 words.',
      stretch: 'Describe and compare two relatives with a contrast and a reason; check every adjective.',
    },
    wordsSource: 'The five words come from the website F3-L03 home banks.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: she → -a · hair (m.) · eyes (f.).' }),
];

module.exports = { meta, slides };
