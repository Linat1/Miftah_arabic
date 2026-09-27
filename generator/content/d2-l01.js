'use strict';
/* D2-L01 · Personality Adjectives — What Is He / She Like? — website: Pathways › Development › D2 › D2-L01 (adjective agreement m./f./pl., كَيْفَ هُوَ / هِيَ؟, degree جِدًّا / نَوْعًا مَا / لَيْسَ, evidence لِأَنَّهُ / لِأَنَّهَا). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D2')({
  n: 1, fileTitle: 'Personality_Adjectives', chip: 'Personality',
  title: 'Personality Adjectives — What Is He / She Like?', arabic: 'الصِّفَاتُ الشَّخْصِيَّةُ — كَيْفَ هُوَ؟ كَيْفَ هِيَ؟',
  focus: 'Describe personality precisely: make every adjective agree (m. / f. / pl.), make it stronger or softer (جِدًّا، نَوْعًا مَا، لَيْسَ …), and prove it with behaviour (لِأَنَّهُ / لِأَنَّهَا …).',
  icon: 'FaFaceSmile', iconSet: 'fa6',
});

// m. / f. / pl. forms for every adjective card (pl. = they, masculine or mixed group)
const PL = {
  'وَدُودٌ': 'وَدُودُونَ', 'صَادِقٌ': 'صَادِقُونَ', 'صَبُورٌ': 'صَبُورُونَ', 'مُتَعَاوِنٌ': 'مُتَعَاوِنُونَ', 'مُجْتَهِدٌ': 'مُجْتَهِدُونَ', 'مَرِحٌ': 'مَرِحُونَ',
  'هَادِئٌ': 'هَادِئُونَ', 'خَجُولٌ': 'خَجُولُونَ', 'وَاثِقٌ': 'وَاثِقُونَ', 'كَرِيمٌ': 'كُرَمَاءُ', 'أَنَانِيٌّ': 'أَنَانِيُّونَ', 'عَصَبِيٌّ': 'عَصَبِيُّونَ',
};
const forms = {};
D.site('D2-L01').vocab.slice(0, 2).forEach((g) => g.items.forEach((it) => {
  const [m, f] = it.ar.split(' / ');
  forms[it.ar] = { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: PL[m] }, { l: 'f.', ar: f }, { l: 'm.', ar: m }] };
}));

const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D2-L01', {
  support: `• NEW UNIT (D2 · People, Relationships and Style). Core: 6 adjectives in BOTH forms (m. / f.) + “He is … / She is …” + one reason (because he / she helps …). Develop: add degree (very / somewhat / not very) and a second person. Stretch: balance (although / on the other hand) and evidence for every judgement.
• The he/she skill from D1-L06 carries straight over: هِيَ → adjective + ـةٌ, and the reason connector changes too (لِأَنَّهُ / لِأَنَّهَا).
• Sensitivity: describe friends, family or invented people kindly — negative words (أَنَانِيٌّ، عَصَبِيٌّ) are for fictional people or “sometimes”, never for classmates.
• Urdu bridge: صادق، صابر، کریم، مخلص / محنتی (not cognate), خوش مزاج.`,
  teach: 'm. / f. / pl. adjectives, degree, and evidence.',
  wedo: 'Picture match, sort the evidence, fix and listen.',
  next: { nextCode: 'D2-L02', nextTitle: 'Relationships — Family, Friends and How We Get On', nextAr: 'العَلَاقَاتُ' },
  flexGroups: [2],
  doNow: {
    questions: [
      q('What does صَبُورٌ / صَبُورَةٌ mean?', ['patient', 'honest', 'calm'], 'Prepared at home (D1-L12).'),
      q('What does مُجْتَهِدٌ / مُجْتَهِدَةٌ mean?', ['hard-working', 'friendly', 'shy'], 'Prepared at home (D1-L12).'),
      q('Choose the accurate sentence.', ['أُخْتِي تُحَضِّرُ حَقِيبَتَهَا.', 'أُخْتِي يُحَضِّرُ حَقِيبَتَهُ.', 'أُخْتِي تُحَضِّرُ حَقِيبَتَهُ.'], 'D1-L06: she → tu- + -hā.'),
      q('Ask a GIRL “What do you do?”', ['مَاذَا تَفْعَلِينَ؟', 'مَاذَا تَفْعَلُ؟', 'مَاذَا يَفْعَلُ؟'], 'D1-L07: girl → -īna.'),
      q('What does لِأَنَّ mean?', ['because', 'but', 'whereas'], 'D1 connectors.'),
    ],
    keyIdea: { text: 'An adjective describing HER takes -a(tun). The reason changes too: because he → لِأَنَّهُ, because she → لِأَنَّهَا.', ar: 'هُوَ صَبُورٌ {w|لِأَنَّهُ} …  ·  هِيَ صَبُورَ{e|ةٌ} {e|لِأَنَّهَا} …' },
    retrieves: 'Questions 1–2 test two of the five personality words prepared at home at the end of D1-L12. Questions 3–5 retrieve D1-L06 (he/she), D1-L07 (asking a girl) and a key connector.',
  },
  routes: {
    core: ['I can describe a boy and a girl with three adjectives each.', 'I can give one reason: because he / she …'],
    develop: ['I can make a description stronger or softer.', 'I can describe a group with plural adjectives.'],
    stretch: ['I can support every adjective with behaviour.', 'I can balance a description (although …, on the other hand …).'],
  },
  bridge: [
    { ar: 'صَادِقٌ', urdu: 'صادق', tr: 'sādiq', en: 'truthful, honest' },
    { ar: 'صَبُورٌ', urdu: 'صابر', tr: 'sābir', en: 'patient' },
    { ar: 'كَرِيمٌ', urdu: 'کریم', tr: 'karīm', en: 'generous, noble' },
    { ar: 'مُجْتَهِدٌ', urdu: 'مجتہد', tr: 'mujtahid', en: 'Urdu: religious scholar · Arabic: hard-working' },
    { ar: 'مَرِحٌ', urdu: 'خوش مزاج', tr: 'khush mizāj', en: 'cheerful (meaning only)' },
  ],
  bridgeNotes: 'URDU BRIDGE: صادق (Al-Sādiq), صابر and کریم are also names and attributes students know — same roots, same meanings. CAREFUL: مجتہد in Urdu is a religious scholar; in everyday Arabic مُجْتَهِدٌ is simply a hard-working student. مَرِحٌ has no Urdu cognate — link it to خوش مزاج by meaning.',
  core: ['وَدُودٌ / وَدُودَةٌ', 'صَادِقٌ / صَادِقَةٌ', 'صَبُورٌ / صَبُورَةٌ', 'مُتَعَاوِنٌ / مُتَعَاوِنَةٌ', 'مُجْتَهِدٌ / مُجْتَهِدَةٌ', 'مَرِحٌ / مَرِحَةٌ', 'هَادِئٌ / هَادِئَةٌ', 'لِأَنَّ', 'وَلٰكِنَّ'],
  forms,
  vocabNotes: { 0: 'Every card shows m. · f. · pl. Chant them: waḍūdun – waḍūdatun – waḍūdūna. The feminine adds -a(tun) (ـةٌ) to every adjective here.', 1: 'Extended words. كَرِيمٌ has a broken plural: كُرَمَاءُ. أَنَانِيٌّ and عَصَبِيٌّ are negative — use them with “sometimes” or “not very”.', 2: 'Evidence and degree (FLEX): these connectors repeat in every D2 lesson — the website lists them each time.' },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · adjective agreement (website rule + table)', title: 'He is … She is … They are …', ar: 'هُوَ · هِيَ · هُمْ',
      cols: [{ label: 'He · هُوَ', w: 2.9, size: 26 }, { label: 'She · هِيَ', w: 3.1, size: 26 }, { label: 'They · هُمْ', w: 3.3, size: 26 }, { label: 'Meaning', w: 3.03 }],
      rows: [
        { core: true, cells: [{ ar: 'وَدُودٌ' }, { ar: 'وَدُودَ{e|ةٌ}' }, { ar: 'وَدُودُ{k|ونَ}' }, 'friendly'] },
        { core: true, cells: [{ ar: 'صَبُورٌ' }, { ar: 'صَبُورَ{e|ةٌ}' }, { ar: 'صَبُورُ{k|ونَ}' }, 'patient'] },
        { core: true, cells: [{ ar: 'مُجْتَهِدٌ' }, { ar: 'مُجْتَهِدَ{e|ةٌ}' }, { ar: 'مُجْتَهِدُ{k|ونَ}' }, 'hard-working'] },
        { cells: [{ ar: 'وَاثِقٌ' }, { ar: 'وَاثِقَ{e|ةٌ}' }, { ar: 'وَاثِقُ{k|ونَ}' }, 'confident'] },
        { cells: [{ ar: 'كَرِيمٌ' }, { ar: 'كَرِيمَ{e|ةٌ}' }, { ar: 'كُرَمَاءُ' }, 'generous (broken plural)'] },
      ],
      foot: 'Name first, then the adjective: the teacher (m.) is ṣabūr, the teacher (f.) is ṣabūra. Ask: kayfa huwa? / kayfa hiya?',
      notes: `GRAMMAR PART 1 — website rules “Adjective agreement” (the adjective matches the person; many feminine forms add ـةٌ) and “Ask what someone is like” (كَيْفَ هُوَ؟ / كَيْفَ هِيَ؟) and the website m./f. table. The plural column is teacher-added (the user’s m / f / pl routine) — Core only needs m. and f.
Website common error: هِيَ صَبُورٌ ✗ → هِيَ صَبُورَةٌ ✓ (“Do not describe a female person with an unmodified masculine adjective”).
Quick-fire: say a name (خَالِدٌ / زَيْنَبُ / أَخِي وَأُخْتِي) + an adjective; students say the right form.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · degree and evidence (website rules) · Develop / Stretch', title: 'How much? And how do you know?', ar: 'جِدًّا · نَوْعًا مَا · لِأَنَّهُ',
      cards: [
        { chip: 'STRONGER · CORE', color: '1D5FBF', head: 'جِدًّا', big: 'هُوَ وَاثِقٌ جِدًّا.', en: 'He is very confident.', clue: 'After the adjective.' },
        { chip: 'SOFTER · DEVELOP', color: '6B4C9A', head: 'نَوْعًا مَا · لَيْسَ', big: 'هِيَ خَجُولَةٌ نَوْعًا مَا. هُوَ لَيْسَ أَنَانِيًّا جِدًّا.', en: 'She is somewhat shy. He is not very selfish.', clue: 'After laysa: -an ending.' },
        { chip: 'EVIDENCE · CORE', color: '1E7B4F', head: 'لِأَنَّهُ / لِأَنَّهَا', big: 'هِيَ مُتَعَاوِنَةٌ لِأَنَّهَا تُسَاعِدُ الآخَرِينَ.', en: 'She is helpful because she helps others.', clue: 'Adjective + behaviour = proof.' },
      ],
      error: { text: 'Website common error: the reason must match the person.', pairs: [['هِيَ كَرِيمَةٌ لِأَنَّهَا تُسَاعِدُ.', 'هِيَ كَرِيمَةٌ لِأَنَّهُ تُسَاعِدُ.']] },
      notes: `GRAMMAR PART 2 — website rules “Strengthen or soften a description” (جِدًّا / نَوْعًا مَا / لَيْسَ … جِدًّا) and “Justify with evidence” (صِفَةٌ + لِأَنَّهُ / لِأَنَّهَا + دَلِيلٌ).
Stretch grammar: after لَيْسَ the adjective takes -an (accusative): لَيْسَ أَنَانِيًّا; for “she” use لَيْسَتْ + -atan: لَيْسَتْ خَجُولَةً (from the listening script).
Website teaching point: “In every extended answer, add evidence, a reason, comparison or contrast rather than stopping after one clause.”`,
    },
  ],
  quick: [0, 1, 3, 4],
  ido: {
    title: 'Watch me describe two people with evidence',
    steps: [
      { head: 'Him', ar: 'أَخِي هَادِئٌ وَمُجْتَهِدٌ.', think: 'Brother → masculine forms.' },
      { head: 'Proof', ar: 'هُوَ مُجْتَهِدٌ {w|لِأَنَّهُ} يُكْمِلُ وَاجِبَهُ كُلَّ يَوْمٍ.', think: 'Adjective + behaviour.' },
      { head: 'Her', ar: 'صَدِيقَتِي مَرِحَ{e|ةٌ} وَوَاثِقَ{e|ةٌ} {k|جِدًّا}.', think: 'Friend (f.) → -atun. Very → after.' },
      { head: 'Balance', ar: 'وَلٰكِنَّهَا خَجُولَ{e|ةٌ} {k|نَوْعًا مَا} فِي الصَّفِّ.', think: 'Softer: somewhat.' },
    ],
    legend: ['w', 'e', 'k'], legendLabels: { w: 'HE / PROOF', e: 'SHE (-ATUN)', k: 'DEGREE' },
    model: 'أَخِي هَادِئٌ وَمُجْتَهِدٌ؛ هُوَ مُجْتَهِدٌ {w|لِأَنَّهُ} يُكْمِلُ وَاجِبَهُ كُلَّ يَوْمٍ. أَمَّا صَدِيقَتِي فَهِيَ مَرِحَ{e|ةٌ} وَوَاثِقَ{e|ةٌ} {k|جِدًّا}، وَلٰكِنَّهَا خَجُولَ{e|ةٌ} {k|نَوْعًا مَا} فِي الصَّفِّ. هِيَ مُتَعَاوِنَ{e|ةٌ} {e|لِأَنَّهَا} تُسَاعِدُ زَمِيلَاتِهَا.',
    modelEn: 'My brother is calm and hard-working; he is hard-working because he finishes his homework every day. As for my friend, she is cheerful and very confident, but she is somewhat shy in class. She is helpful because she helps her classmates.',
    notes: 'I DO (3 min) — website patterns combined into two short portraits, with a think-aloud (“him or her? how much? what is the proof?”). Students copy it, colour him blue and her pink, and underline every “because”.',
  },
  game: {
    title: 'What is he / she like? Match the picture',
    pick: [1, 2, 3],
    en: ['She is hard-working.', 'He is calm.', 'She is cheerful.'],
    icons: [[['fa6', 'FaBookOpenReader', '1E7B4F'], ['fa6', 'FaPenToSquare', 'C77700']], [['fa6', 'FaSpa', '1D5FBF'], ['fa6', 'FaFaceSmile', '5A6472']], [['fa6', 'FaFaceLaughBeam', 'C77700'], ['fa6', 'FaMusic', '6B4C9A']]],
    labels: ['studying hard', 'calm and relaxed', 'laughing, happy'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Ask: which word tells you it is a GIRL? (the -a(tun) ending AND هِيَ). Other cards for homework: لَطِيفٌ وَمُسَاعِدٌ (kind and helpful), اِجْتِمَاعِيٌّ (sociable), كَرِيمَةٌ (generous).',
  },
  sorterCats: ['Positive evidence', 'Negative evidence'],
  sorterNotes: 'Then ask: which ADJECTIVE does each behaviour prove? (يُسَاعِدُ الآخَرِينَ → مُتَعَاوِنٌ · يَقُولُ الحَقَّ → صَادِقٌ · لَا يَسْتَمِعُ → not patient · يَأْخُذُ كُلَّ شَيْءٍ لِنَفْسِهِ → أَنَانِيٌّ).',
  hints: ['She → which ending?', 'He → which ending?', 'Because SHE … — which pronoun?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 6.\nListen for: هَادِئَةٌ · لَيْسَتْ خَجُولَةً · مَرِحَةٌ.',
  listenRoutes: 'Core: questions 1, 2 and 6. Develop / Stretch: all 6.',
  gloss: [
    ['تَتَحَدَّثُ نُورُ عَنْ زَمِيلَتِهَا سَلْمَى.', 'Noor is talking about her classmate Salma.'],
    ['تَقُولُ إِنَّ سَلْمَى هَادِئَةٌ وَصَبُورَةٌ، وَلٰكِنَّهَا لَيْسَتْ خَجُولَةً.', 'She says that Salma is calm and patient, but she is not shy.'],
    ['هِيَ وَاثِقَةٌ عِنْدَمَا تَتَحَدَّثُ أَمَامَ الفَصْلِ،', 'She is confident when she speaks in front of the class,'],
    ['وَمُتَعَاوِنَةٌ لِأَنَّهَا تُسَاعِدُ الطَّالِبَاتِ الجَدِيدَاتِ.', 'and helpful because she helps the new (female) students.'],
    ['أَحْيَانًا تَكُونُ جَادَّةً جِدًّا، وَلٰكِنَّهَا مَرِحَةٌ مَعَ صَدِيقَاتِهَا.', 'Sometimes she is very serious, but she is cheerful with her friends.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ شَخْصِيَّةَ صَدِيقٍ أَوْ قَرِيبٍ.' },
      { route: 'develop', ar: 'مَا أَهَمُّ صِفَةٍ فِي الصَّدِيقِ؟ وَلِمَاذَا؟' },
      { route: 'develop', ar: 'صِفْ شَخْصًا مُتَعَاوِنًا وَاذْكُرْ دَلِيلًا.' },
      { route: 'stretch', ar: 'هَلْ تَتَغَيَّرُ شَخْصِيَّتُكَ فِي المَدْرَسَةِ وَالبَيْتِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'صَدِيقِي ______ وَ ______ . / صَدِيقَتِي ______ ةٌ.' },
      { route: 'develop', ar: 'أَهَمُّ صِفَةٍ هِيَ ______ لِأَنَّ ______ .' },
      { route: 'develop', ar: 'هُوَ مُتَعَاوِنٌ لِأَنَّهُ ______ . / هِيَ … لِأَنَّهَا ______ .' },
      { route: 'stretch', ar: 'فِي المَدْرَسَةِ أَنَا ______ ، وَلٰكِنْ فِي البَيْتِ ______ .' },
    ],
    modelEn: ['What is your friend (f.) like?', 'She is friendly and very patient.'],
    notes: 'Website prompts (order changed so Core starts with the simplest). Website model continues: A: مَا الدَّلِيلُ؟ (What is the evidence?) B: تُسَاعِدُنِي عِنْدَمَا أَحْتَاجُ إِلَيْهَا. (She helps me when I need her.) — the class asks “مَا الدَّلِيلُ؟” after every answer.',
  },
  write: {
    core: { amount: '5 sentences', how: 'One boy and one girl: three adjectives each (check the ending!) and one “because he / she …”.' },
    develop: { amount: '8 sentences', how: 'Two people with degree (very / somewhat / not very), evidence for two adjectives and one contrast.' },
    stretch: { amount: '100–120 words', how: 'Website task: two people, six adjectives, evidence, a contrast and the most important quality in your opinion.' },
  },
  frames: {
    core: [
      { en: 'My friend (m.) is … and …', ar: 'صَدِيقِي ______ وَ ______ .' },
      { en: 'My friend (f.) is … and …', ar: 'صَدِيقَتِي ______ ـةٌ وَ ______ ـةٌ.' },
      { en: 'He is helpful because he …', ar: 'هُوَ مُتَعَاوِنٌ لِأَنَّهُ ______ .' },
      { en: 'She is patient because she …', ar: 'هِيَ صَبُورَةٌ لِأَنَّهَا ______ .' },
      { en: 'What is he / she like?', ar: 'كَيْفَ هُوَ؟ / كَيْفَ هِيَ؟' },
    ],
    develop: [
      { en: 'He is very …', ar: 'هُوَ ______ جِدًّا.' },
      { en: 'She is somewhat …', ar: 'هِيَ ______ ـةٌ نَوْعًا مَا.' },
      { en: 'He is not very …', ar: 'هُوَ لَيْسَ ______ ـًا جِدًّا.' },
      { en: '…, but she is …', ar: '______ ، وَلٰكِنَّهَا ______ .' },
      { en: 'In my opinion, the most important quality is …', ar: 'فِي رَأْيِي، أَهَمُّ صِفَةٍ هِيَ ______ .' },
    ],
    bank: ['وَدُودٌ / وَدُودَةٌ', 'صَادِقٌ / صَادِقَةٌ', 'صَبُورٌ / صَبُورَةٌ', 'مُتَعَاوِنٌ / مُتَعَاوِنَةٌ', 'مُجْتَهِدٌ / مُجْتَهِدَةٌ', 'مَرِحٌ / مَرِحَةٌ', 'هَادِئٌ / هَادِئَةٌ', 'جِدًّا', 'نَوْعًا مَا', 'لِأَنَّهُ', 'لِأَنَّهَا', 'وَلٰكِنَّ'],
  },
  stretch: [
    ['هُوَ لَيْسَ كَثِيرَ الكَلَامِ', 'he doesn’t talk a lot'],
    ['يَسْتَمِعُ إِلَى الآخَرِينَ بِاهْتِمَامٍ', 'he listens to others attentively'],
    ['أَكْثَرُ هُدُوءًا مِنْ …', 'calmer than …'],
    ['كُلُّ وَاحِدٍ يُظْهِرُ ذٰلِكَ بِطَرِيقَةٍ مُخْتَلِفَةٍ', 'each one shows it in a different way'],
    ['الصِّدْقُ يَبْنِي الثِّقَةَ بَيْنَ النَّاسِ', 'honesty builds trust between people'],
  ],
  modelEn: 'I want to describe two friends of mine. Ahmad is a calm and honest person, and he is hard-working because he organises his work and finishes it on time. As for Maryam, she is cheerful and confident, and she likes to encourage others. Ahmad is calmer than Maryam, whereas she is more sociable than him. Both of them are helpful, but each one shows it in a different way. In my opinion, honesty is the most important quality because it builds trust between people.',
  find: ['three masculine and three feminine adjectives', 'evidence with لِأَنَّهُ', 'a contrast', 'the most important quality'],
  modelNotes: 'Evidence: هَادِئٌ، صَادِقٌ، مُجْتَهِدٌ / مَرِحَةٌ، وَاثِقَةٌ · مُجْتَهِدٌ لِأَنَّهُ يُنَظِّمُ عَمَلَهُ · بَيْنَمَا هِيَ أَكْثَرُ اجْتِمَاعِيَّةً · أَهَمُّ صِفَةٍ … لِأَنَّهُ يَبْنِي الثِّقَةَ. Stretch: note the comparatives أَكْثَرُ هُدُوءًا / أَكْثَرُ اجْتِمَاعِيَّةً (taught fully in D2-L05).',
  selfCheck: [
    { route: 'core', text: 'Every adjective about HER ends in -a(tun).' },
    { route: 'core', text: 'I gave one reason with “because he / she …”.' },
    { route: 'develop', text: 'I used very / somewhat / not very.' },
    { route: 'develop', text: 'My reason pronoun matches the person.' },
    { route: 'stretch', text: 'Every judgement has behaviour as evidence.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['شَخْصٌ', 'a person'], ['لَيْسَ كَثِيرَ الكَلَامِ', 'not very talkative'], ['يَسْتَمِعُ … بِاهْتِمَامٍ', 'listens carefully'], ['يَثِقُ بِهِ', 'trust him'], ['دِرَاسَتِهِ', 'his studies'],
    ['يَشْرَحُ الوَاجِبَ', 'explains the homework'], ['زُمَلَائِهِ', 'his classmates'], ['الاِخْتِبَارَاتِ', 'the tests'], ['يَهْدَأُ', 'he calms down'], ['صِدْقُهُ', 'his honesty'],
  ],
  prep: {
    words: [['أَتَفَاهَمُ مَعَ', 'I get on with', 'he: يَتَفَاهَمُ'], ['أَثِقُ بِـ', 'I trust', 'he: يَثِقُ'], ['أَحْتَرِمُ', 'I respect', 'he: يَحْتَرِمُ'], ['صَدِيقٌ مُقَرَّبٌ', 'a close friend', 'f.: صَدِيقَةٌ مُقَرَّبَةٌ'], ['نَتَشَاجَرُ', 'we argue', '']],
    questionEn: 'Who do you get on with best in your family or among your friends — and why?',
    questionAr: 'مَعَ مَنْ تَتَفَاهَمُ جَيِّدًا؟',
    homework: {
      core: 'Website D2-L01: the picture game and the vocabulary tab — learn 8 adjectives in m. and f.',
      develop: 'Write 8 sentences describing two people with degree and evidence.',
      stretch: 'Website writing task: 100–120 words describing two people.',
    },
    wordsSource: 'The five words come from the website D2-L02 vocabulary (relationship actions and outcomes).',
  },
  remember: 'Remember: HER adjective ends in -a(tun) — and so does her reason: لِأَنَّهَا.',
});

module.exports = { meta, slides };
