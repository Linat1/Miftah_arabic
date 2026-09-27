'use strict';
/*
 * F4-L05 · Giving Reasons — Why?
 * Website: Pathways › Foundation › F4 › Lesson 5. The F4 retrieval bridge, the reason sentence system (ask a boy / a girl
 * لِمَاذَا؟; the subject controls لِأَنَّهُ / لِأَنَّهَا; 14), the reason-word bank (14 m. / f. pairs; 14), agreement laboratory
 * (14), the justified-opinion builder and richer لِأَنَّنِي reasons, the Why Mission (14), Layla (listening), Amir and Hana
 * (reading), the “Why?” conversation, the 8–10-sentence set of justified opinions and the 16-question checkpoint.
 */
const F = require('./f4-common');
const game = require('../site-data/pathway-visual-games.json')['f4-l05'];
const { q, bank, banks } = F;

const meta = F.meta({
  n: 5, fileTitle: 'Giving_Reasons_Why', chip: 'Giving Reasons',
  title: 'Giving Reasons — Why?', arabic: 'إِعْطَاءُ الأَسْبَابِ — لِمَاذَا؟',
  focus: 'Ask why, then answer with a complete reason: the subject’s gender chooses the pronoun and the adjective — and richer reasons begin with li’annanī (because I …).',
  icon: 'FaCircleQuestion', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F4-L06', nextTitle: 'School Rules and Obligations — Must and Must Not', nextAr: 'القَوَاعِدُ المَدْرَسِيَّةُ — يَجِبُ وَلَا يَجُوزُ' };
const AR = /[؀-ۿ]/;
const rounds = banks.l05.rounds.map((r) => F.w({ ...r, q: AR.test(r.prompt) ? r.prompt : `${r.title}: ${r.prompt}` }));
const prompts = banks.l05.prompts;
const MF = (m, f) => ({ tag: 'm · f', forms: [{ l: 'f.', ar: f }, { l: 'm.', ar: m }] });

const site = {
  speaking: {
    context: 'Hold a “Why?” subject conversation',
    model: [
      ['A', 'لِمَاذَا تُحِبِّينَ العَرَبِيَّةَ؟', 'Why do you (f.) like Arabic?'],
      ['B', 'أُحِبُّهَا لِأَنَّهَا جَمِيلَةٌ وَمُهِمَّةٌ، وَلِأَنَّنِي أُحِبُّ القِرَاءَةَ. وَأَنْتِ؟', 'I like it because it is beautiful and important, and because I like reading. And you?'],
    ],
  },
  writing: {
    prompt: 'Website writing task: 8–10 sentences about school subjects with at least five reasons — two masculine patterns, two feminine patterns, one richer لِأَنَّنِي reason and one balanced opinion (وَلَكِنْ).',
    checklist: ['Five reasons with لِأَنَّهُ / لِأَنَّهَا.', 'Every adjective agrees with its subject.', 'One richer reason: لِأَنَّنِي …', 'One balanced opinion with وَلَكِنَّهَا / وَلَكِنَّهُ.'],
    model: 'أُحِبُّ اللُّغَةَ العَرَبِيَّةَ لِأَنَّهَا جَمِيلَةٌ وَمُهِمَّةٌ. أُفَضِّلُ العُلُومَ عَلَى التَّارِيخِ لِأَنَّهَا مُفِيدَةٌ وَمُمْتِعَةٌ، وَلِأَنَّنِي أُحِبُّ التَّجَارِبَ. أُحِبُّ الفَنَّ أَيْضًا لِأَنَّهُ إِبْدَاعِيٌّ وَشَيِّقٌ. لَا أُحِبُّ الفِيزِيَاءَ كَثِيرًا لِأَنَّهَا صَعْبَةٌ فِي رَأْيِي، وَلَكِنَّهَا مُهِمَّةٌ.',
  },
  differentiation: {
    core: 'Five accurate li’annahu / li’annahā reasons.',
    develop: 'Add two richer li’annanī reasons.',
    stretch: 'Use wa-lākin to balance an opinion and explain both sides.',
  },
  mistakes: [
    { wrong: 'أُحِبُّ الفَنَّ لِأَنَّهَا إِبْدَاعِيَّةٌ.', right: 'أُحِبُّ الفَنَّ لِأَنَّهُ إِبْدَاعِيٌّ.', why: 'The SUBJECT (art, m.) controls the pronoun — not the speaker.' },
    { wrong: 'أُحِبُّ الرِّيَاضِيَّاتِ لِأَنَّهُ عَمَلِيٌّ.', right: 'أُحِبُّ الرِّيَاضِيَّاتِ لِأَنَّهَا عَمَلِيَّةٌ.', why: 'Maths takes the feminine reason pattern.' },
    { wrong: 'لِأَنَّ أُحِبُّ القِرَاءَةَ.', right: 'لِأَنَّنِي أُحِبُّ القِرَاءَةَ.', why: 'Because I … = li’annanī.' },
  ],
  listening: {
    title: 'Layla explains her subject choices',
    script: 'مَرْحَبًا. اِسْمِي لَيْلَى. أُحِبُّ اللُّغَةَ العَرَبِيَّةَ لِأَنَّهَا جَمِيلَةٌ وَمُهِمَّةٌ. أُفَضِّلُ العُلُومَ عَلَى التَّارِيخِ لِأَنَّهَا مُفِيدَةٌ وَمُمْتِعَةٌ، وَلِأَنَّنِي أُحِبُّ التَّجَارِبَ. لَا أُحِبُّ الفِيزِيَاءَ كَثِيرًا لِأَنَّهَا صَعْبَةٌ فِي رَأْيِي، وَلَكِنِّي أَدْرُسُهَا. أُحِبُّ الفَنَّ أَيْضًا لِأَنَّهُ إِبْدَاعِيٌّ وَشَيِّقٌ.',
    questions: bank(5, 'listening', [1, 2, 4, 6, 9]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 5,
    source: 'Website sections used: the eight-question F4 retrieval bridge and “the complete answer” (opinion + subject + reason), the reason sentence system (two decisions: who are you asking? which subject?) and the 14-question check, the reason-word bank (14 m. / f. pairs) and the 14-question check, the agreement laboratory (14), the justified-opinion builder with the richer-reason bank, the Why Mission (14), Layla (listening, 10), Amir and Hana (reading, 12), the “Why?” conversation (4 prompts), the 8–10-sentence set of justified opinions and the 16-question checkpoint. Picture match: website visual game.',
    support: `• Core: three accurate opinions with لِأَنَّهُ / لِأَنَّهَا + an agreeing adjective. Develop: varied adjectives + one richer لِأَنَّنِي reason. Stretch: balanced opinions with وَلَكِنْ and two reasons.
• Website “two decisions”: (1) who are you asking? → تُحِبُّ / تُحِبِّينَ; (2) which subject? → لِأَنَّهُ / لِأَنَّهَا + matching adjective. The speaker’s gender never controls the reason pronoun.
• Honest opinions are welcome (website) — a reasoned dislike is a strong answer, especially when balanced (… وَلَكِنَّهَا مُهِمَّةٌ).
• Urdu bridge: کیونکہ ≈ لِأَنَّ (different word); سبب = سَبَبٌ; واضح، منظم، مفید، اہم (≈ مُهِمٌّ) are shared or related.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Ask why, then two decisions: who is listening? which subject?', wedo: 'Why mission, listen to Layla, read Amir and Hana.', next: 'F4-L06' }),
  F.doNow({
    questions: [
      q('What does لِمَاذَا؟ mean?', ['why?', 'when?', 'where?'], 'Prepared at home (F4-L04).'),
      q('What does عَمَلِيٌّ mean?', ['practical', 'creative', 'complicated'], 'Prepared at home (F4-L04).'),
      ...bank(5, 'retrieval', [3, 5, 6]),
    ],
    keyIdea: { text: 'Two decisions: the LISTENER chooses tuḥibbu / tuḥibbīna; the SUBJECT chooses li’annahu / li’annahā and the adjective.', ar: 'لِمَاذَا تُحِبُّ الفَنَّ؟ — {w|لِأَنَّهُ} إِبْدَاعِيٌّ' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F4-L04. Questions 3–5 are the website “F4 retrieval bridge” (masculine reason, masculine subject, maths takes the feminine pattern).',
  }),
  F.objectivesSlide([
    'Ask li-mādhā? and answer with a complete reason.',
    'Choose li’annahu for masculine and li’annahā for feminine subjects.',
    'Use the complete reason-adjective bank accurately.',
    'Write and speak several connected justified opinions.',
  ], {
    core: ['I can give three opinions with reasons.', 'I can choose li’annahu or li’annahā.'],
    develop: ['I can vary my reason adjectives.', 'I can give a reason with li’annanī.'],
    stretch: ['I can balance an opinion with wa-lākin.', 'I can give two reasons in one answer.'],
  }, 2, 'Website “By the end” (left) and the website success routes (right).'),
  F.keywordsSlide({
    text: 'Why?, the two reason pronouns, fourteen adjective pairs and richer reasons. Core: li’annahu / li’annahā + six adjectives.',
    groups: [
      { head: 'GROUP 1', name: 'Why? · because it (m. / f.)' },
      { head: 'GROUP 2', name: 'Reason adjectives · 14 pairs' },
      { head: 'GROUP 3', name: 'Richer reasons · because I …' },
    ],
    bridge: [
      { ar: 'سَبَبٌ', urdu: 'سبب', tr: 'sabab', en: 'reason' },
      { ar: 'وَاضِحٌ', urdu: 'واضح', tr: 'wāḍiḥ', en: 'clear' },
      { ar: 'مُنَظَّمٌ', urdu: 'منظم', tr: 'munaẓẓam', en: 'organised' },
      { ar: 'مُهِمٌّ', urdu: 'اہم', tr: 'muhimm', en: 'important (same root)' },
      { ar: 'تَجْرِبَةٌ', urdu: 'تجربہ', tr: 'tajriba', en: 'experiment' },
    ],
    notes: 'URDU BRIDGE: سبب، واضح، منظم، تجربہ are shared words; اہم (important) shares the root of مُهِمٌّ.',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 2 · reason adjectives (website) · 1 of 2', title: 'Easy, difficult, important …', ar: 'كَلِمَاتُ الأَسْبَابِ',
    items: [
      { n: 1, ar: 'سَهْلٌ', en: 'easy', tr: 'sahl', core: true, ...MF('سَهْلٌ', 'سَهْلَةٌ') },
      { n: 2, ar: 'صَعْبٌ', en: 'difficult', tr: 'ṣa‘b', core: true, ...MF('صَعْبٌ', 'صَعْبَةٌ') },
      { n: 3, ar: 'مُهِمٌّ', en: 'important', tr: 'mu-himm', core: true, ...MF('مُهِمٌّ', 'مُهِمَّةٌ') },
      { n: 4, ar: 'مُفِيدٌ', en: 'useful', tr: 'mu-fīd', core: true, ...MF('مُفِيدٌ', 'مُفِيدَةٌ') },
      { n: 5, ar: 'وَاضِحٌ', en: 'clear', tr: 'wā-ḍiḥ', ...MF('وَاضِحٌ', 'وَاضِحَةٌ') },
      { n: 6, ar: 'مُنَظَّمٌ', en: 'organised', tr: 'mu-naẓ-ẓam', ...MF('مُنَظَّمٌ', 'مُنَظَّمَةٌ') },
    ],
    notes: 'REASON-WORD BANK (website, 14 pairs). Website memory route: say the pair aloud (مُفِيدٌ / مُفِيدَةٌ), then place each form after the correct reason pronoun. New today: وَاضِحٌ (clear), مُنَظَّمٌ (organised).',
  },
  {
    type: 'vocab', stage: 'teach', flex: true, eyebrow: 'Key words · Group 2 · reason adjectives (website) · 2 of 2 · FLEX', title: 'Enjoyable, boring, engaging …', ar: 'كَلِمَاتُ الأَسْبَابِ',
    items: [
      { n: 7, ar: 'مُمْتِعٌ', en: 'enjoyable', tr: 'mum-ti‘', core: true, ...MF('مُمْتِعٌ', 'مُمْتِعَةٌ') },
      { n: 8, ar: 'مُمِلٌّ', en: 'boring', tr: 'mu-mill', core: true, ...MF('مُمِلٌّ', 'مُمِلَّةٌ') },
      { n: 9, ar: 'شَيِّقٌ', en: 'engaging', tr: 'shay-yiq', ...MF('شَيِّقٌ', 'شَيِّقَةٌ') },
      { n: 10, ar: 'إِبْدَاعِيٌّ', en: 'creative', tr: 'ib-dā-‘iyy', ...MF('إِبْدَاعِيٌّ', 'إِبْدَاعِيَّةٌ') },
      { n: 11, ar: 'عَمَلِيٌّ', en: 'practical', tr: '‘a-ma-liyy', ...MF('عَمَلِيٌّ', 'عَمَلِيَّةٌ') },
      { n: 12, ar: 'مُعَقَّدٌ', en: 'complicated', tr: 'mu-‘aq-qad', ...MF('مُعَقَّدٌ', 'مُعَقَّدَةٌ') },
    ],
    notes: 'FLEX — the remaining website pairs (recycled from F4-L01 and F4-L04). Also: مُثِيرٌ / مُثِيرَةٌ لِلاهْتِمَامِ (interesting), مُفَضَّلٌ / مُفَضَّلَةٌ (favourite).',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · the reason sentence system (website)', title: 'Two decisions', ar: 'نِظَامُ جُمْلَةِ السَّبَبِ',
    cols: [{ label: 'Decision', w: 3.2 }, { label: 'Example', w: 5.8, size: 22 }, { label: 'Rule', w: 3.33 }],
    rows: [
      { core: true, cells: ['1 · Asking one male', { ar: 'لِمَاذَا تُحِبُّ العُلُومَ؟' }, 'tuḥibbu'] },
      { core: true, cells: ['1 · Asking one female', { ar: 'لِمَاذَا تُحِبِّ{e|ينَ} العُلُومَ؟' }, 'tuḥibbīna'] },
      { core: true, cells: ['2 · Masculine subject', { ar: 'أُحِبُّ الفَنَّ {w|لِأَنَّهُ} إِبْدَاعِيٌّ.' }, 'li’annahu + m. adjective'] },
      { core: true, cells: ['2 · Feminine subject', { ar: 'أُحِبُّ العُلُومَ {e|لِأَنَّهَا} مُفِيدَةٌ.' }, 'li’annahā + f. adjective'] },
      { cells: ['Richer reason (Develop)', { ar: 'أُحِبُّ القِرَاءَةَ {k|لِأَنَّنِي} أَتَعَلَّمُ أَشْيَاءَ جَدِيدَةً.' }, 'li’annanī + I-verb'] },
    ],
    ltr: true,
    foot: 'Website common mistake: the speaker’s gender does not control li’annahu / li’annahā — the subject noun does.',
    notes: `GRAMMAR PART 1 — website section 2 “Master the reason sentence system”. Masculine subjects (website): التَّارِيخُ، الفَنُّ، المَسْرَحُ، عِلْمُ الحَاسُوبِ. Feminine-pattern subjects: العَرَبِيَّةُ، العُلُومُ، الرِّيَاضِيَّاتُ، الجُغْرَافِيَا.
Website: “Mathematics uses the feminine singular reason pattern taught in F4” (أُحِبُّ الرِّيَاضِيَّاتِ لِأَنَّهَا عَمَلِيَّةٌ).`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · richer and balanced reasons (website)', title: 'Because I … · but it is …', ar: 'أَسْبَابٌ أَغْنَى',
    cards: [
      { chip: 'BECAUSE I · DEVELOP', color: '1D5FBF', head: 'لِأَنَّنِي', big: 'أُحِبُّ العُلُومَ لِأَنَّنِي أُحِبُّ التَّجَارِبَ.', en: 'I like science because I like experiments.', clue: '+ an I-verb (a-/u-)' },
      { chip: 'IT HELPS ME', color: '1E6B52', head: 'لِأَنَّهُ يُسَاعِدُنِي', big: 'لِأَنَّهُ يُسَاعِدُنِي عَلَى التَّفْكِيرِ.', en: 'because it helps me think (m. subject)', clue: 'f.: لِأَنَّهَا تُسَاعِدُنِي' },
      { chip: 'BALANCE · STRETCH', color: '6B4C9A', head: 'وَلَكِنَّهَا / وَلَكِنَّهُ', big: 'لَا أُحِبُّ الجُغْرَافِيَا لِأَنَّهَا صَعْبَةٌ، وَلَكِنَّهَا مُهِمَّةٌ.', en: 'I don’t like geography because it’s hard, but it’s important.', clue: 'Two sides of one subject.' },
    ],
    error: { text: 'Website agreement laboratory: rebuild pronoun AND adjective.', pairs: [['الفِيزِيَاءُ لِأَنَّهَا مُعَقَّدَةٌ.', 'الفِيزِيَاءُ لِأَنَّهُ مُعَقَّدٌ.']] },
    notes: `GRAMMAR PART 2 — website “Develop your reasons” bank: لِأَنَّنِي أَتَعَلَّمُ أَشْيَاءَ جَدِيدَةً · لِأَنَّنِي أُحِبُّ القِرَاءَةَ · لِأَنَّنِي أُحِبُّ الرَّسْمَ · لِأَنَّنِي أُحِبُّ التَّجَارِبَ · لِأَنَّنِي أُحِبُّ حَلَّ المَسَائِلِ · لِأَنَّنِي أَسْتَخْدِمُ الحَاسُوبَ · لِأَنَّهُ يُسَاعِدُنِي عَلَى التَّفْكِيرِ · لِأَنَّهَا تُسَاعِدُنِي عَلَى فَهْمِ العَالَمِ.
Website best next step after an error: identify the subject gender, then rebuild pronoun and adjective.`,
  },
  F.quickCheck([...bank(5, 'system', [1, 5]), ...bank(5, 'agreement', [7]), ...bank(5, 'system', [10])], 'website reason-system questions 2, 6 and 11, and agreement laboratory question 8.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me answer “Why?”', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'The question', ar: 'لِمَاذَا تُفَضِّلُ العُلُومَ؟', think: 'Male listener.' },
      { head: 'Subject gender', ar: 'العُلُومُ / لِأَنَّهَا', think: 'Science → feminine pattern.' },
      { head: 'Adjective', ar: 'أُفَضِّلُ العُلُومَ {e|لِأَنَّهَا} مُفِيدَ{e|ةٌ}،', think: 'Adjective -a too.' },
      { head: 'Richer reason', ar: 'وَ{k|لِأَنَّنِي} أُحِبُّ التَّجَارِبَ.', think: 'Because I …' },
    ],
    legend: ['e', 'k'], legendLabels: { e: 'FEMININE SUBJECT', k: 'BECAUSE I' },
    model: 'أُفَضِّلُ العُلُومَ عَلَى التَّارِيخِ {e|لِأَنَّهَا} مُفِيدَ{e|ةٌ} وَمُمْتِعَ{e|ةٌ}، وَ{k|لِأَنَّنِي} أُحِبُّ التَّجَارِبَ. أُحِبُّ الفَنَّ أَيْضًا {w|لِأَنَّهُ} إِبْدَاعِيٌّ.',
    modelEn: 'I prefer science to history because it is useful and enjoyable, and because I like experiments. I also like art because it is creative.',
    notes: 'I DO (3 min) — the website listening (Layla) as the model. Think aloud the two decisions every time.',
  },
  F.gameSlide({ ...game, title: 'Visual game — Why?', items: [game.items[1], game.items[3], game.items[4]] }, {
    title: 'Why? Match the picture',
    en: ['I like reading because it is useful.', 'I don’t like rain because it is annoying.', 'I prefer science because it is exciting.'],
    icons: [[['fa6', 'FaBookOpen', '1D5FBF'], ['fa6', 'FaCircleCheck', '1E6B52']], [['fa6', 'FaCloudRain', '5A6472'], ['fa6', 'FaFaceFrown', 'B83227']], [['fa6', 'FaFlask', 'B83280'], ['fa6', 'FaStar', 'C77700']]],
    labels: ['book + tick', 'rain + frown', 'flask + star'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Check the pronouns: القِرَاءَةُ (f.) → لِأَنَّهَا · المَطَرُ (m.) → لِأَنَّهُ مُزْعِجٌ (annoying) · العُلُومُ → لِأَنَّهَا.',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website “Why Mission”', title: 'Complete the Why Mission', ar: 'مُهِمَّةُ «لِمَاذَا؟»',
    seed: 16,
    questions: [rounds[2], rounds[6], rounds[7], rounds[10], rounds[11]],
    side: { kind: 'core', label: 'CORE', text: 'listener → tuḥibbu / tuḥibbīna\nsubject → li’annahu / li’annahā\nbecause I → li’annanī' },
    answerSlide: { min: 0, eyebrow: 'We do · Mission answers', title: 'Mission: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 14 Why Mission rounds (female listener, maths, because I like reading, balance, agreement repair). The other 9 are homework.',
    answerNotes: 'Ask the two decisions aloud before revealing each answer.',
  },
  F.repairSlide(site, ['Art: which pronoun?', 'Maths: which pattern?', 'Because I …?']),
  F.listening(site, {
    coreTip: 'Listen twice.\nFour columns: subject · opinion · li’annahu / li’annahā · adjective.',
    routes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5.',
    gloss: [
      ['مَرْحَبًا. اِسْمِي لَيْلَى. أُحِبُّ اللُّغَةَ العَرَبِيَّةَ لِأَنَّهَا جَمِيلَةٌ وَمُهِمَّةٌ.', 'Hello, my name is Layla. I like Arabic because it is beautiful and important.'],
      ['أُفَضِّلُ العُلُومَ عَلَى التَّارِيخِ لِأَنَّهَا مُفِيدَةٌ وَمُمْتِعَةٌ،', 'I prefer science to history because it is useful and enjoyable,'],
      ['وَلِأَنَّنِي أُحِبُّ التَّجَارِبَ.', 'and because I like experiments.'],
      ['لَا أُحِبُّ الفِيزِيَاءَ كَثِيرًا لِأَنَّهَا صَعْبَةٌ فِي رَأْيِي، وَلَكِنِّي أَدْرُسُهَا.', 'I don’t like physics much because it is difficult in my opinion, but I study it.'],
      ['أُحِبُّ الفَنَّ أَيْضًا لِأَنَّهُ إِبْدَاعِيٌّ وَشَيِّقٌ.', 'I also like art because it is creative and engaging.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · Profile A (website)', title: 'Amir’s reasons', ar: 'المَلَفُّ (أ)',
    lines: [
      ['اِسْمِي أَمِيرٌ. أُحِبُّ التَّارِيخَ لِأَنَّهُ مُثِيرٌ لِلاهْتِمَامِ،', 'Amir · history — interesting (m.)'],
      ['وَلِأَنَّنِي أُحِبُّ القِرَاءَةَ.', 'and because he likes reading'],
      ['أُفَضِّلُ عِلْمَ الحَاسُوبِ عَلَى الفَنِّ', 'Prefers computing to art'],
      ['لِأَنَّهُ عَمَلِيٌّ وَمُفِيدٌ.', 'practical and useful (m.)'],
      ['لَا أُحِبُّ المُوسِيقَى لِأَنَّهَا مُعَقَّدَةٌ فِي رَأْيِي.', 'Dislikes music — complicated (f.)'],
    ],
    notes: 'PROFILE A (website, complete). Sort Amir’s reasons into masculine (لِأَنَّهُ) and feminine (لِأَنَّهَا) patterns, and find his richer reason.',
  },
  {
    type: 'glossed', stage: 'wedo', flex: true, eyebrow: 'We do · reading · Profile B (website) · FLEX / Stretch', title: 'Hana’s reasons', ar: 'المَلَفُّ (ب)',
    lines: [
      ['اِسْمِي هَنَاءُ. مَادَّتِي المُفَضَّلَةُ هِيَ الفَنُّ', 'Hana · favourite: art'],
      ['لِأَنَّهُ إِبْدَاعِيٌّ وَمُمْتِعٌ.', 'creative and enjoyable (m.)'],
      ['أُحِبُّ الرِّيَاضِيَّاتِ أَيْضًا لِأَنَّنِي أُحِبُّ حَلَّ المَسَائِلِ.', 'Maths too — she likes solving problems'],
      ['لَا أُفَضِّلُ الجُغْرَافِيَا لِأَنَّهَا صَعْبَةٌ،', 'Not geography — difficult'],
      ['وَلَكِنَّهَا مُهِمَّةٌ.', 'but important (balanced opinion)'],
    ],
    notes: 'PROFILE B (website, complete) — the Stretch model: a balanced opinion with وَلَكِنَّهَا.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions (website)', title: 'Amir or Hana?', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 6,
    questions: bank(5, 'reading', [1, 3, 5, 9, 11]),
    side: { kind: 'info', head: 'EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Find the subject,\nthen read what comes\nafter li’anna.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading questions 2, 4, 6, 10 and 12. The other 7 are homework.',
    answerNotes: 'A student reads aloud the evidence phrase (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'لِمَاذَا تُحِبُّ الفَنَّ؟ / لِمَاذَا تُحِبِّينَ الفَنَّ؟' },
      { route: 'develop', ar: 'لِمَاذَا تُفَضِّلُ العُلُومَ؟ قَارِنْهَا بِمَادَّةٍ أُخْرَى.' },
      { route: 'develop', ar: 'مَا المَادَّةُ الَّتِي لَا تُحِبُّهَا؟ وَلِمَاذَا؟' },
      { route: 'stretch', ar: 'أَعْطِ رَأْيًا مُتَوَازِنًا عَنِ الرِّيَاضِيَّاتِ.' },
    ],
    stems: [
      { route: 'core', ar: 'أُحِبُّ ______ لِأَنَّهُ / لِأَنَّهَا ______ .' },
      { route: 'develop', ar: 'أُفَضِّلُ ______ عَلَى ______ لِأَنَّهَا ______ ، وَلِأَنَّنِي ______ .' },
      { route: 'develop', ar: 'لَا أُحِبُّ ______ لِأَنَّهُ / لِأَنَّهَا ______ .' },
      { route: 'stretch', ar: '… لِأَنَّهَا ______ ، وَلَكِنَّهَا ______ .' },
    ],
    modelEn: ['Why do you (f.) like Arabic?', 'I like it because it is beautiful and important, and because I like reading. And you?'],
    notes: `WEBSITE SPEAKING STUDIO “Hold a ‘Why?’ subject conversation” — at least two connected sentences per prompt and one follow-up question. Prompts (website):
${prompts.map((r) => `• ${r.title}: ${r.detail}`).join('\n')}
Website checklist (1–6): asked لِمَاذَا؟ · clear opinion · لِأَنَّهُ / لِأَنَّهَا · agreeing adjective · one richer reason · one follow-up question.`,
  }),
  F.routesSlide(site, {
    core: { amount: '8 sentences', how: 'Five accurate li’annahu / li’annahā reasons.' },
    develop: { amount: '8–10 sentences', how: 'Add two richer li’annanī reasons and vary the adjectives.' },
    stretch: { amount: '10 sentences', how: 'Balance an opinion with wa-lākin and explain both sides.' },
  }),
  F.framesSlide({
    core: [
      { en: 'I like art because it is creative.', ar: 'أُحِبُّ الفَنَّ لِأَنَّهُ إِبْدَاعِيٌّ.' },
      { en: 'I like science because it is useful.', ar: 'أُحِبُّ العُلُومَ لِأَنَّهَا مُفِيدَةٌ.' },
      { en: 'I don’t like history because it is boring.', ar: 'لَا أُحِبُّ التَّارِيخَ لِأَنَّهُ مُمِلٌّ.' },
      { en: 'I like maths because it is practical.', ar: 'أُحِبُّ الرِّيَاضِيَّاتِ لِأَنَّهَا عَمَلِيَّةٌ.' },
      { en: 'Why do you (f.) like Arabic?', ar: 'لِمَاذَا تُحِبِّينَ العَرَبِيَّةَ؟' },
    ],
    develop: [
      { en: '… because I like reading.', ar: '… لِأَنَّنِي أُحِبُّ القِرَاءَةَ.' },
      { en: '… because I learn new things.', ar: '… لِأَنَّنِي أَتَعَلَّمُ أَشْيَاءَ جَدِيدَةً.' },
      { en: '… because it helps me think.', ar: '… لِأَنَّهُ يُسَاعِدُنِي عَلَى التَّفْكِيرِ.' },
      { en: '… but it is important.', ar: '… وَلَكِنَّهَا مُهِمَّةٌ.' },
      { en: 'I prefer science to history because …', ar: 'أُفَضِّلُ العُلُومَ عَلَى التَّارِيخِ لِأَنَّهَا …' },
    ],
    bank: ['لِمَاذَا؟', 'لِأَنَّهُ', 'لِأَنَّهَا', 'لِأَنَّنِي', 'وَلَكِنَّهَا', 'سَهْلٌ / سَهْلَةٌ', 'صَعْبٌ / صَعْبَةٌ', 'مُفِيدٌ / مُفِيدَةٌ', 'مُمْتِعٌ / مُمْتِعَةٌ', 'مُهِمٌّ / مُهِمَّةٌ', 'إِبْدَاعِيٌّ', 'عَمَلِيَّةٌ'],
  }),
  F.modelSlide(site,
    'I like Arabic because it is beautiful and important. I prefer science to history because it is useful and enjoyable, and because I like experiments. I also like art because it is creative and engaging. I don’t like physics much because it is difficult in my opinion, but it is important.',
    ['masculine reasons', 'feminine reasons', 'because I …', 'balanced opinion'],
    'Built from the website listening (Layla) with Hana’s balanced opinion as the ending.'),
  F.selfCheckSlide([
    { route: 'core', text: 'Every opinion has a reason.' },
    { route: 'core', text: 'The subject chose li’annahu or li’annahā.' },
    { route: 'develop', text: 'Every adjective agrees with its subject.' },
    { route: 'develop', text: 'I gave a richer reason with li’annanī.' },
    { route: 'stretch', text: 'I balanced one opinion with wa-lākin.' },
  ]),
  F.exitTicket(bank(5, 'finalCheck', [1, 3, 7]), 16),
  F.prepSlide({
    ...NEXT,
    words: [['قَاعِدَةٌ', 'a rule', 'pl. قَوَاعِدُ'], ['يَجِبُ أَنْ', 'you must …', '—'], ['لَا يَجُوزُ', 'it is not allowed', '—'], ['مَمْنُوعٌ', 'forbidden', 'f. مَمْنُوعَةٌ'], ['اللِّبَاسُ المَدْرَسِيُّ', 'school uniform', '—']],
    questionEn: 'Write one rule from your school in English. Can you say it in Arabic next lesson?',
    questionAr: 'قَاعِدَةٌ مِنْ مَدْرَسَتِي',
    homework: {
      core: 'Website F4-L05: the Why Mission (14) and the picture game.',
      develop: 'Website justified-opinion builder: six opinions with four different adjectives.',
      stretch: 'Write 8–10 justified opinions including one balanced opinion.',
    },
    wordsSource: 'The five words come from the website F4-L06 rules vocabulary.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: the listener → tuḥibbu / tuḥibbīna · the subject → li’annahu / li’annahā.' }),
];

module.exports = { meta, slides };
