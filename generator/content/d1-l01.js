'use strict';
/* D1-L01 · My Morning Routine — website: Pathways › Development › D1 › D1-L01 (derived verb patterns V, VI, VIII, X). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D1')({
  n: 1, fileTitle: 'My_Morning_Routine', chip: 'My Morning Routine',
  title: 'My Morning Routine', arabic: 'رُوتِينِي الصَّبَاحِيُّ',
  focus: 'Describe a detailed morning routine through accurate derived verbs, person agreement, precise time, sequence and frequency.',
  icon: 'FaSun', iconSet: 'fa6',
});
const V = (i, he, she, we, en, core) => ({ core, cells: [{ ar: `{w|${i.slice(0, 2)}}${i.slice(2)}` }, { ar: `{w|${he.slice(0, 2)}}${he.slice(2)}` }, { ar: `{e|${she.slice(0, 2)}}${she.slice(2)}` }, { ar: `{w|${we.slice(0, 2)}}${we.slice(2)}` }, en] });

const slides = D.devLesson('D1-L01', {
  support: `• First Development lesson (Year 8): the class moves from Foundation chunks to CONTROLLING verbs. Core: ten routine verbs as whole chunks in the “I” form + أَوَّلًا / ثُمَّ. Develop: change the person prefix (أَ / يَ / تَ / نَ). Stretch: name the derived pattern (V, VI, VIII, X) and keep it whole.
• Weak / mixed class: the verb table (I · he · she · we) is the anchor for the whole lesson — keep it visible in You Do.
• Core supports: transliteration on every card, English on every model, picture match with icons, frames and a word bank.
• Urdu bridge: صبح، ناشتہ (not Arabic!), غسل، وضو، تیار — many students already use وضو and غسل.`,
  teach: 'Morning verbs, then who is doing it: أَ / يَ / تَ / نَ.',
  wedo: 'Picture match, sort the morning, fix and listen.',
  next: { nextCode: 'D1-L02', nextTitle: 'Telling the Time — What Time Is It?', nextAr: 'كَمِ السَّاعَةُ؟' },
  doNow: {
    questions: [
      q('Which pronoun means “she”?', ['هِيَ', 'هُوَ', 'نَحْنُ'], 'Foundation: هِيَ = she · هُوَ = he · نَحْنُ = we.'),
      q('What does this sentence mean?', ['I go to school.', 'He goes to school.', 'We go to school.'], 'The أَـ at the start = I.', { ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ.', arBig: true }),
      q('Which word means “the morning”?', ['الصَّبَاحُ', 'المَسَاءُ', 'اللَّيْلُ'], 'الصَّبَاحُ = the morning (Urdu: subah).'),
      q('Which phrase means “every day”?', ['كُلَّ يَوْمٍ', 'فِي الصَّبَاحِ', 'فِي السَّاعَةِ السَّابِعَةِ'], 'كُلَّ = every · يَوْمٌ = day.'),
      q('Which verb means “we eat”?', ['نَأْكُلُ', 'آكُلُ', 'يَأْكُلُ'], 'نَـ at the start = we.'),
    ],
    keyIdea: { text: 'The first letter of a present verb tells you WHO: أَـ I · يَـ he · تَـ she · نَـ we.', ar: '{w|أَ}سْتَيْقِظُ · {w|يَ}سْتَيْقِظُ · {e|تَ}سْتَيْقِظُ · {w|نَ}سْتَيْقِظُ' },
    retrieves: 'Retrieval from Foundation (pronouns, the present-tense prefix, time words) — the building blocks for today’s routine verbs.',
  },
  routes: {
    core: ['I can say six morning actions in the “I” form.', 'I can order them with أَوَّلًا and ثُمَّ.'],
    develop: ['I can change the verb for he / she / we.', 'I can add a time and a frequency word.'],
    stretch: ['I can keep derived patterns whole (أَسْتَيْقِظُ, أَتَنَاوَلُ).', 'I can compare two routines with a reason.'],
  },
  bridge: [
    { ar: 'الصَّبَاحُ', urdu: 'صبح', tr: 'subah', en: 'morning' },
    { ar: 'أَغْتَسِلُ', urdu: 'غسل', tr: 'ghusl', en: 'washing, bath' },
    { ar: 'أَتَوَضَّأُ', urdu: 'وضو', tr: 'wuzu', en: 'ablution' },
    { ar: 'أَسْتَعِدُّ', urdu: 'مستعد', tr: 'mustaid', en: 'ready, prepared' },
    { ar: 'عَادَةً', urdu: 'عادت', tr: 'ādat', en: 'habit (→ usually)' },
  ],
  bridgeNotes: 'URDU BRIDGE: صبح (subah → الصَّبَاحُ), غسل (ghusl → أَغْتَسِلُ I shower), وضو (wuzu → أَتَوَضَّأُ), مستعد (mustaid → أَسْتَعِدُّ I get ready), عادت (ādat → عَادَةً usually). Warning: Urdu ناشتہ (breakfast) is NOT Arabic — the Arabic is الإِفْطَارُ.',
  core: ['أَسْتَيْقِظُ', 'أَغْتَسِلُ', 'أَرْتَدِي مَلَابِسِي', 'أُنَظِّفُ أَسْنَانِي', 'أَتَنَاوَلُ الإِفْطَارَ', 'أَخْرُجُ مِنَ البَيْتِ', 'أَوَّلًا', 'ثُمَّ', 'بَعْدَ ذٰلِكَ', 'أَخِيرًا', 'عَادَةً', 'كُلَّ يَوْمٍ'],
  forms: {
    'أَسْتَيْقِظُ': { tag: 'I · he · she', forms: [{ l: 'I', ar: 'أَسْتَيْقِظُ' }, { l: 'he', ar: 'يَسْتَيْقِظُ' }, { l: 'she', ar: 'تَسْتَيْقِظُ' }] },
    'أَغْتَسِلُ': { tag: 'I · he · she', forms: [{ l: 'I', ar: 'أَغْتَسِلُ' }, { l: 'he', ar: 'يَغْتَسِلُ' }, { l: 'she', ar: 'تَغْتَسِلُ' }] },
    'أَتَنَاوَلُ الإِفْطَارَ': { tag: 'I · he · she', forms: [{ l: 'I', ar: 'أَتَنَاوَلُ' }, { l: 'he', ar: 'يَتَنَاوَلُ' }, { l: 'she', ar: 'تَتَنَاوَلُ' }] },
    'نَشِيطٌ / نَشِيطَةٌ': { tag: 'm · f · pl', forms: [{ l: 'm.', ar: 'نَشِيطٌ' }, { l: 'f.', ar: 'نَشِيطَةٌ' }, { l: 'pl.', ar: 'نَشِيطُونَ' }] },
    'نَاعِسٌ / نَاعِسَةٌ': { tag: 'm · f · pl', forms: [{ l: 'm.', ar: 'نَاعِسٌ' }, { l: 'f.', ar: 'نَاعِسَةٌ' }, { l: 'pl.', ar: 'نَاعِسُونَ' }] },
    'مُنَبِّهٌ': { tag: 'sg · pl', forms: [{ l: 'one', ar: 'مُنَبِّهٌ' }, { l: 'pl.', ar: 'مُنَبِّهَاتٌ' }] },
  },
  vocabSlides: 3,
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · match the prefix to the subject (website)', title: 'Who is doing it? Change only the first letter', ar: 'أَنَا · هُوَ · هِيَ · نَحْنُ',
      cols: [{ label: 'I (أَنَا)', w: 2.5, size: 20 }, { label: 'he (هُوَ)', w: 2.5, size: 20 }, { label: 'she (هِيَ)', w: 2.5, size: 20 }, { label: 'we (نَحْنُ)', w: 2.5, size: 20 }, { label: 'Meaning', w: 2.33 }],
      rows: [
        V('أَسْتَيْقِظُ', 'يَسْتَيْقِظُ', 'تَسْتَيْقِظُ', 'نَسْتَيْقِظُ', 'wake up', true),
        V('أَغْتَسِلُ', 'يَغْتَسِلُ', 'تَغْتَسِلُ', 'نَغْتَسِلُ', 'shower', true),
        V('أَتَنَاوَلُ', 'يَتَنَاوَلُ', 'تَتَنَاوَلُ', 'نَتَنَاوَلُ', 'have (a meal)', true),
        V('أَرْتَدِي', 'يَرْتَدِي', 'تَرْتَدِي', 'نَرْتَدِي', 'wear, put on'),
        V('أَخْرُجُ', 'يَخْرُجُ', 'تَخْرُجُ', 'نَخْرُجُ', 'go out, leave'),
      ],
      foot: 'The rest of the verb NEVER changes — only the first letter.',
      notes: `GRAMMAR PART 1 — website rule “Match the person prefix to the subject” (أَنَا أَـ · هُوَ يَـ · هِيَ تَـ · نَحْنُ نَـ). Blue = I / he / we; pink = she.
Read each row across; students repeat. Website examples: أَنَا أَسْتَيْقِظُ مُبَكِّرًا · أَخِي يَسْتَعِدُّ بِسُرْعَةٍ · أُخْتِي تَتَنَاوَلُ الإِفْطَارَ · نَحْنُ نَخْرُجُ مَعًا.
Website tip: in connected writing, vary the subject instead of keeping every sentence in the first person.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · derived verb patterns (website) · Develop / Stretch', title: 'Keep the pattern letters!', ar: 'أَوْزَانُ الأَفْعَالِ المَزِيدَةِ',
      cols: [{ label: 'Pattern (past)', w: 2.8, size: 20 }, { label: 'Today’s verbs (I)', w: 4.6, size: 22 }, { label: 'Letters that must stay', w: 4.93 }],
      rows: [
        { core: true, cells: [{ ar: 'تَفَعَّلَ', sub: 'Form V' }, { ar: 'أَتَوَضَّأُ' }, 'ت + the doubled middle letter (shadda)'] },
        { core: true, cells: [{ ar: 'تَفَاعَلَ', sub: 'Form VI' }, { ar: 'أَتَنَاوَلُ' }, 'ت + the long ā (ـَا)'] },
        { cells: [{ ar: 'اِفْتَعَلَ', sub: 'Form VIII' }, { ar: 'أَغْتَسِلُ · أَرْتَدِي' }, 'the ت after the first root letter'] },
        { cells: [{ ar: 'اِسْتَفْعَلَ', sub: 'Form X' }, { ar: 'أَسْتَيْقِظُ · أَسْتَعِدُّ · أَسْتَقِلُّ' }, 'the سْتَ at the start'] },
      ],
      notes: `GRAMMAR PART 2 — website rules “Recognise Form V” and “Distinguish Forms VI, VIII and X”. Development Arabic moves beyond memorising isolated verbs: notice each derived pattern, preserve its added letters, then change the person prefix.
Website common error: do not reduce أَسْتَيْقِظُ to أَيْقِظُ, change أَتَنَاوَلُ to أَنَاوَلُ, or treat all derived verbs as one pattern.
Core: recognition only — “the long verbs keep all their letters”. Stretch: name the form of each verb.`,
    },
    {
      type: 'formula', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 3 · build a connected routine, not a list (website)', title: 'Connector + verb + time / detail', ar: 'رَابِطٌ + فِعْلٌ + وَقْتٌ',
      cols: [
        { label: 'connector', ar: 'رَابِطٌ', color: '0E7C86', pale: 'E3F2F3' },
        { label: 'verb (who?)', ar: 'فِعْلٌ', color: '1D5FBF', pale: 'EEF3FA' },
        { label: 'time / detail', ar: 'وَقْتٌ / تَفْصِيلٌ', color: 'C77700', pale: 'FDF3E3' },
      ],
      rows: [
        { en: 'First I wake up at six.', cells: ['{k|أَوَّلًا}', 'أَسْتَيْقِظُ', 'فِي السَّادِسَةِ.'] },
        { en: 'Then I shower and get dressed.', cells: ['{k|ثُمَّ}', 'أَغْتَسِلُ', 'وَأَرْتَدِي مَلَابِسِي.'] },
        { en: 'Usually I have breakfast with my family.', cells: ['{k|عَادَةً}', 'أَتَنَاوَلُ الإِفْطَارَ', 'مَعَ أُسْرَتِي.'] },
        { en: 'Finally I leave the house.', cells: ['{k|أَخِيرًا}', 'أَخْرُجُ', 'مِنَ البَيْتِ.'] },
      ],
      foot: 'Frequency words (عَادَةً، دَائِمًا، أَحْيَانًا) can go at the start or after the verb.',
      notes: 'GRAMMAR PART 3 — website rule “Build a connected routine, not a list” with the website examples. Sequence markers turn separate actions into a coherent account.',
    },
  ],
  quick: [0, 1, 3, 7],
  ido: {
    title: 'Watch me build my morning',
    steps: [
      { head: 'Wake up + time', ar: '{k|أَوَّلًا} {w|أَ}سْتَيْقِظُ فِي السَّادِسَةِ.', think: 'I → أَـ. Keep سْتَ (Form X).' },
      { head: 'Wash + dress', ar: '{k|ثُمَّ} {w|أَ}غْتَسِلُ وَ{w|أَ}رْتَدِي مَلَابِسِي.', think: 'Two actions joined with وَ.' },
      { head: 'Someone else', ar: 'أُخْتِي {e|تَ}تَنَاوَلُ الإِفْطَارَ قَبْلِي.', think: 'My sister → she → تَـ.' },
      { head: 'Frequency + finish', ar: '{k|عَادَةً} {w|أَ}خْرُجُ فِي السَّابِعَةِ وَالنِّصْفِ.', think: 'A frequency word and an exact time.' },
    ],
    legend: ['k', 'w', 'e'], legendLabels: { k: 'CONNECTOR', w: 'I', e: 'SHE' },
    model: '{k|أَوَّلًا} {w|أَ}سْتَيْقِظُ فِي السَّادِسَةِ، {k|ثُمَّ} {w|أَ}غْتَسِلُ وَ{w|أَ}رْتَدِي مَلَابِسِي. أُخْتِي {e|تَ}تَنَاوَلُ الإِفْطَارَ قَبْلِي. {k|عَادَةً} {w|أَ}خْرُجُ مِنَ البَيْتِ فِي السَّابِعَةِ وَالنِّصْفِ.',
    modelEn: 'First I wake up at six, then I shower and get dressed. My sister has breakfast before me. Usually I leave the house at half past seven.',
    notes: 'I DO (3 min) — teacher models with a think-aloud (website patterns 1–3); students watch, then COPY. Say each decision aloud: “Who? → prefix. Which pattern? → keep the letters. When / how often? → add a time or frequency word.”',
  },
  game: {
    title: 'Match the picture to the routine',
    pick: [0, 1, 2],
    en: ['I wake up in the morning.', 'I brush my teeth.', 'I have breakfast.'],
    icons: [[['fa6', 'FaSun', 'E0A100'], ['fa6', 'FaBed', '1D5FBF']], [['fa6', 'FaTooth', '1D5FBF'], ['fa6', 'FaFaceSmile', 'C77700']], [['fa6', 'FaMugHot', '8A5A2B'], ['fa6', 'FaBowlFood', 'C77700']]],
    labels: ['waking up', 'brushing teeth', 'breakfast'],
    order: [2, 0, 1],
    notes: 'Key words: أَسْتَيْقِظُ (wake up) · أَسْنَانِي (my teeth) · الإِفْطَارَ (breakfast). All three start with أَـ / أُـ = I.',
  },
  hints: ['Who is the subject? Check the first letter.', 'هِيَ = she. Which prefix?', 'Does the order make sense?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 4.\nListen for: السَّادِسَةِ (six) · أَغْتَسِلُ · الإِفْطَارَ.',
  listenRoutes: 'Core: questions 1, 3 and 4. Develop / Stretch: all 5.',
  gloss: [
    ['أَسْتَيْقِظُ عَادَةً فِي السَّادِسَةِ وَالرُّبْعِ، وَلٰكِنَّ أَخِي يَسْتَيْقِظُ بَعْدِي بِنِصْفِ سَاعَةٍ.', 'I usually wake up at quarter past six, but my brother wakes up half an hour after me.'],
    ['أَوَّلًا أَغْتَسِلُ وَأَتَوَضَّأُ، ثُمَّ أَرْتَدِي زِيَّ المَدْرَسَةِ وَأُمَشِّطُ شَعْرِي.', 'First I shower and perform wudu, then I put on my school uniform and comb my hair.'],
    ['فِي السَّابِعَةِ إِلَّا عَشْرَ دَقَائِقَ أَتَنَاوَلُ إِفْطَارًا خَفِيفًا، وَبَعْدَ ذٰلِكَ أَسْتَعِدُّ لِلْخُرُوجِ.', 'At ten to seven I have a light breakfast, and after that I get ready to leave.'],
    ['أَسْتَقِلُّ الحَافِلَةَ فِي السَّابِعَةِ وَالنِّصْفِ، وَأَصِلُ إِلَى المَدْرَسَةِ قَبْلَ بَدْءِ الدِّرَاسَةِ بِعَشْرِ دَقَائِقَ.', 'I take the bus at half past seven, and I arrive at school ten minutes before lessons begin.'],
    ['أَحْيَانًا أَشْعُرُ بِالنُّعَاسِ، لٰكِنَّ الإِفْطَارَ يُسَاعِدُنِي عَلَى التَّرْكِيزِ.', 'Sometimes I feel sleepy, but breakfast helps me concentrate.'],
  ],
  speak: {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'مَاذَا تَفْعَلُ فِي الصَّبَاحِ؟' },
      { route: 'develop', ar: 'صِفْ رُوتِينَكَ الصَّبَاحِيَّ بِالتَّرْتِيبِ.' },
      { route: 'develop', ar: 'مَتَى تَسْتَيْقِظُ فِي أَيَّامِ المَدْرَسَةِ وَفِي نِهَايَةِ الأُسْبُوعِ؟' },
      { route: 'stretch', ar: 'قَارِنْ بَيْنَ رُوتِينِكَ وَرُوتِينِ شَخْصٍ آخَرَ فِي أُسْرَتِكَ.' },
    ],
    stems: [
      { route: 'core', ar: 'أَوَّلًا أَسْتَيْقِظُ، ثُمَّ ______ .' },
      { route: 'develop', ar: 'أَسْتَيْقِظُ فِي ______ ، وَبَعْدَ ذٰلِكَ ______ .' },
      { route: 'stretch', ar: 'أَنَا ______ ، وَلٰكِنَّ أُخْتِي تَـ ______ .' },
      { route: 'sum', ar: 'هُوَ يَـ ______ / هِيَ تَـ ______ .' },
    ],
    modelEn: ['When do you usually wake up?', 'I wake up at half past six, then I shower and have breakfast. I prefer to wake up early because I arrive at school calm.'],
    notes: 'Core prompt (teacher-made): “What do you do in the morning?” — answered with the Core stem. Summarise (↺): report your partner’s routine with يَـ / تَـ.',
  },
  write: {
    core: { amount: '6 sentences', how: 'Frames + word bank: six morning actions in the “I” form with أَوَّلًا / ثُمَّ.' },
    develop: { amount: '8–10 sentences', how: 'Add exact times and frequency words; describe one family member with يَـ / تَـ.' },
    stretch: { amount: '90–110 words', how: 'Website task: compare your real routine with an improved routine; end with an opinion and reason.' },
  },
  frames: {
    core: [
      { en: 'First I wake up at …', ar: 'أَوَّلًا أَسْتَيْقِظُ فِي ______ .' },
      { en: 'Then I shower.', ar: 'ثُمَّ ______ .' },
      { en: 'I get dressed.', ar: 'أَرْتَدِي ______ .' },
      { en: 'I have breakfast.', ar: 'أَتَنَاوَلُ ______ .' },
      { en: 'Finally I leave the house.', ar: 'أَخِيرًا ______ مِنَ البَيْتِ.' },
    ],
    develop: [
      { en: 'I usually wake up at …', ar: 'عَادَةً أَسْتَيْقِظُ فِي ______ .' },
      { en: 'After that I get ready for school.', ar: 'بَعْدَ ذٰلِكَ ______ لِلْمَدْرَسَةِ.' },
      { en: 'My brother wakes up …', ar: 'أَخِي يَـ ______ .' },
      { en: 'My sister has breakfast …', ar: 'أُخْتِي تَـ ______ الإِفْطَارَ ______ .' },
      { en: 'I rarely leave without breakfast.', ar: 'نَادِرًا مَا ______ مِنْ دُونِ إِفْطَارٍ.' },
    ],
    bank: ['أَسْتَيْقِظُ', 'أَغْتَسِلُ', 'أَتَوَضَّأُ', 'أَرْتَدِي مَلَابِسِي', 'أُنَظِّفُ أَسْنَانِي', 'أَتَنَاوَلُ', 'أَسْتَعِدُّ', 'أَخْرُجُ', 'أَوَّلًا', 'ثُمَّ', 'بَعْدَ ذٰلِكَ', 'أَخِيرًا', 'عَادَةً', 'أَحْيَانًا'],
  },
  stretch: [
    ['وَلٰكِنَّنِي أَحْيَانًا أَبْقَى فِي السَّرِيرِ', 'but sometimes I stay in bed'],
    ['أُرِيدُ أَنْ أُحَسِّنَ رُوتِينِي', 'I want to improve my routine'],
    ['مِنَ الأَفْضَلِ أَنْ أَضَعَ هَاتِفِي بَعِيدًا', 'it is better to put my phone away'],
    ['أُجَهِّزُ حَقِيبَتِي لَيْلًا', 'I prepare my bag at night'],
    ['فِي رَأْيِي، الرُّوتِينُ المُنَظَّمُ يَجْعَلُ اليَوْمَ أَهْدَأَ', 'in my opinion, an organised routine makes the day calmer'],
  ],
  modelEn: 'I usually wake up at half past six, but sometimes I stay in bed another ten minutes. First I shower and perform wudu, then I get dressed and have breakfast. After that I get ready for school and leave the house. I want to improve my routine: it is better to put my phone away and prepare my bag at night. In my opinion, an organised routine makes the day calmer and more successful.',
  find: ['six routine verbs', 'a Form X verb', 'four sequence / frequency words', 'an opinion + reason'],
  modelNotes: 'Evidence: أَسْتَيْقِظُ، أَغْتَسِلُ، أَتَوَضَّأُ، أَرْتَدِي، أَتَنَاوَلُ، أَسْتَعِدُّ · Form X: أَسْتَيْقِظُ / أَسْتَعِدُّ · عَادَةً، أَحْيَانًا، أَوَّلًا، ثُمَّ، بَعْدَ ذٰلِكَ · فِي رَأْيِي … يَجْعَلُ.',
  selfCheck: [
    { route: 'core', text: 'I used six morning verbs in the “I” form (أَـ).' },
    { route: 'core', text: 'I ordered my routine with أَوَّلًا / ثُمَّ / أَخِيرًا.' },
    { route: 'develop', text: 'I changed the prefix for another person (يَـ / تَـ / نَـ).' },
    { route: 'develop', text: 'I added an exact time and a frequency word.' },
    { route: 'stretch', text: 'I kept every derived verb whole (أَسْتَيْقِظُ, أَتَنَاوَلُ).' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['فِي العَامِ المَاضِي', 'last year'], ['كُنْتُ أَسْتَيْقِظُ', 'I used to wake up'], ['بِعَجَلَةٍ', 'in a hurry'], ['مُتْعَبًا', 'tired'], ['أَمَّا الآنَ', 'as for now'],
    ['نَظَّمْتُ', 'I organised'], ['أُرَاجِعُ حَقِيبَتِي', 'I check my bag'], ['إِلَّا لِـ', 'except for'], ['أَكْثَرَ نَشَاطًا', 'more energetic'], ['أَقَلَّ تَوَتُّرًا', 'less stressed'],
  ],
  prep: {
    words: [['السَّاعَةُ', 'the hour, the clock', 'pl. السَّاعَاتُ'], ['وَالنِّصْفُ', 'half past', ''], ['وَالرُّبْعُ', 'quarter past', ''], ['إِلَّا الرُّبْعَ', 'quarter to', ''], ['دَقِيقَةٌ', 'a minute', 'pl. دَقَائِقُ']],
    questionEn: 'Write the time you wake up and the time you leave home, in Arabic numerals.',
    questionAr: 'كَمِ السَّاعَةُ؟',
    homework: {
      core: 'Website D1-L01: vocabulary mission and the picture game “My Morning Routine”.',
      develop: 'Write 8 sentences about your morning with times and frequency words.',
      stretch: 'Website writing task: 90–110 words comparing your routine with an improved one.',
    },
    wordsSource: 'The five words come from the website D1-L02 vocabulary (minutes past and to).',
  },
  remember: 'Remember: 5 time words + your wake-up time in Arabic.',
});

module.exports = { meta, slides };
