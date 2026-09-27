'use strict';
/*
 * F1-L06 · Small Marks, Big Changes (shadda, tanwīn, alif madda, hamza)
 * Website: Pathways › Foundation › F1 › Lesson 6.
 */
const F = require('./f1-common');
const { q } = F;

const meta = F.meta({
  n: 6, fileTitle: 'Shadda_Tanwin_Madda_Hamza', chip: 'Small marks',
  title: 'Small Marks, Big Changes', arabic: 'الشَّدَّةُ وَالتَّنْوِينُ وَأَلِفُ المَدِّ وَالهَمْزَةُ',
  focus: 'Read four new marks: shadda doubles a letter (دَرَّسَ), tanwīn adds an “n” ending (كِتَابٌ), alif madda says ʾā (آدَم), and hamza is a catch in the throat (سُؤَال). See the mark → name its job → read the word.',
  icon: 'FaHighlighter', level: 'Foundation · beginner',
});
const NEXT = { nextCode: 'F1-L07', nextTitle: 'Read the Number, Keep the Order', nextAr: 'الأَرْقَامُ الهِنْدِيَّةُ مِنْ ٠ إِلَى ١٠٠' };

const slides = [
  F.titleSlide({
    n: 6,
    source: 'The website lesson teaches shadda (gemination: دَرَسَ vs دَرَّسَ, مُحَمَّد, مَرَّ, حَقّ), the three tanwīn endings (كِتَابٌ، كِتَابٍ، كِتَابًا), alif madda آ (آدَم، آمَنَ، قُرْآن vs بَاب) and five printed hamza shapes (أَكَلَ، إِمَام، سُؤَال، بِئْر، شَيْء). The retrieval check, reading lab, listening script, writing rehearsal and ten-item final check are the website’s. (The website’s visual game for this lesson repeats the F1-L03 vowel game, so it is not used.)',
    support: `• CORE: mark and sound — point to the mark, say its job, read the word. DEVELOP: compare two forms and name exactly what changes. STRETCH: notice why tanwīn belongs to indefinite nouns (not with الـ).
• Accuracy boundaries (website): tanwīn is not simply “a/an”; case endings are scored in careful connected MSA (stopping rules come later); for hamza the honest target is RECOGNITION of five shapes — not choosing seats.
• Heritage / Urdu readers: tashdīd, tanwīn and madd are familiar from Qur’an reading. Distinguish script rules from recitation (tajwīd) rules (website Heritage route).`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Four small marks and what they do to the sound.', wedo: 'Shadda signal, ending ear, mark detective, reading lab.', next: 'F1-L07' }),
  F.doNow({
    questions: [
      q('Name the form ـبـ', ['Medial', 'Initial', 'Final'], 'F1-L05: joined on both sides.'),
      q('What does alif do to the connection after it?', ['Breaks it', 'Continues it'], 'Alif is a breaker.'),
      q('What is the job of fatḥa in بَ?', ['short /a/', 'long /ā/', 'no vowel'], 'F1-L04.'),
      q('What does sukūn show in بْ?', ['No following short vowel', 'The consonant disappears'], 'F1-L04.'),
      q('How do you read مُحَمَّدٌ (prepared at home)?', ['mu-ḥam-mad-un', 'mu-ḥa-mad', 'ma-ḥ-mud'], 'The shadda doubles the m.'),
    ],
    keyIdea: { text: 'See the mark → name its job → read the whole word.', ar: 'ـّ   ـٌ   آ   ء' },
    retrieves: 'Questions 1–4 are the website “F1-L05 readiness check” (3–4 → continue; 0–2 → revisit F1-L04 and F1-L05). Question 5 tests the home preparation.',
  }),
  F.objectivesSlide([
    'Read a doubled consonant with shadda.',
    'Read the three tanwīn endings /un/ /in/ /an/.',
    'Tell ordinary long ā from alif madda آ.',
    'Recognise hamza in five printed shapes.',
  ], {
    core: ['I can point to each mark and say its job.', 'I can read مُحَمَّد and كِتَابٌ.'],
    develop: ['I can explain the difference between دَرَسَ and دَرَّسَ.', 'I can read all three tanwīn endings.'],
    stretch: ['I can explain why الكِتَابُ has no tanwīn.', 'I can find two different hamza shapes in a text.'],
  }, 3, 'Objectives and routes are the website F1-L06 outcomes.'),
  F.keywordsSlide({
    text: '4 marks in 4 groups, each with real words. Point to the mark, say its job, read the word.',
    groups: [
      { head: 'MARK 1', name: 'Shadda' },
      { head: 'MARK 2', name: 'Tanwīn · 3' },
      { head: 'MARK 3', name: 'Alif madda' },
      { head: 'MARK 4', name: 'Hamza · 5 shapes' },
    ],
    bridge: [
      { ar: 'شَدَّةٌ', urdu: 'تشدید', tr: 'tashdīd', en: 'shadda' },
      { ar: 'تَنْوِينٌ', urdu: 'تنوین', tr: 'tanwīn', en: 'tanwīn (do zabar …)' },
      { ar: 'مَدٌّ', urdu: 'مد', tr: 'madd', en: 'madda' },
      { ar: 'هَمْزَةٌ', urdu: 'ہمزہ', tr: 'hamza', en: 'hamza' },
      { ar: 'قُرْآنٌ', urdu: 'قرآن', tr: 'Qurʾān', en: 'Qur’an (has آ)' },
    ],
    notes: 'URDU BRIDGE: tashdīd = shadda; tanwīn is called do zabar / do zēr / do pēsh (two fatḥas, kasras, ḍammas); madd = madda; hamza. Students who read the Qur’an know these marks — ask them to explain one to the class.',
  }),
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Teacher instruction · Part 1 · shadda doubles the consonant (website)', title: 'Shadda: say it twice', ar: 'الشَّدَّةُ',
    cards: [
      { chip: 'THE RULE', head: 'رْ + رَ = رَّ', big: 'رَّ', en: 'One written letter, two timings.', clue: 'The vowel on the shadda comes after the second half.' },
      { chip: 'CONTRAST', color: '0E7C86', head: 'studied → taught', big: 'دَرَسَ  ·  دَرَّسَ', en: 'darasa (he studied) · darrasa (he taught)', clue: 'Hold the /r/, then release into /ra/.' },
      { chip: 'NAMES', color: '7B3FA0', head: 'mu-ḥam-mad', big: 'مُحَمَّدٌ', en: 'Double the marked m.', clue: 'Also: مَرَّ marra (he passed) · حَقّ ḥaqq (truth).' },
    ],
    notes: `SHADDA (website Part 1): not an extra vowel and not a command to shout — it shows a long or doubled consonant: the first half closes what came before; the second half begins what follows.
Blend routine (website): in دَرَّسَ, arrive on /r/, hold the closure briefly, then release into /ra/. Do not insert a vowel between the two /r/ timings.
A shadda changes the MEANING: دَرَسَ he studied → دَرَّسَ he taught.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Teacher instruction · Part 2 · tanwīn adds /n/ (website table)', title: 'Tanwīn: three “n” endings', ar: 'التَّنْوِينُ',
    cols: [{ label: 'Name', w: 2.6 }, { label: 'Mark', w: 1.8, size: 36 }, { label: 'Sound', w: 1.8 }, { label: 'Example', w: 2.8, size: 30 }, { label: 'Read it', w: 3.33 }],
    rows: [
      { core: true, cells: ['tanwīn ḍamm (two ḍammas)', 'ـٌ', '/un/', 'كِتَابٌ', 'kitābun'] },
      { core: true, cells: ['tanwīn kasr (two kasras)', 'ـٍ', '/in/', 'كِتَابٍ', 'kitābin'] },
      { core: true, cells: ['tanwīn fatḥ (two fatḥas)', 'ـً', '/an/', 'كِتَابًا', 'kitāban — often with an extra alif'] },
      { cells: ['with الـ → no tanwīn', '—', '/u/', 'الكِتَابُ', 'al-kitābu — the book'] },
    ],
    notes: `TANWĪN (website Part 2): the pair of marks spells a vowel + final /n/ (/u+n/, /i+n/, /a+n/). The /n/ is heard although no nūn is written.
Tanwīn fatḥ often has a supporting alif (كِتَابًا) — but not always (e.g. words ending in ة), so do not add alif mechanically.
Grammar boundary (website): tanwīn is not simply “a/an”; it is a grammatical ending. A noun with الـ does not normally take tanwīn: كِتَابٌ vs الكِتَابُ.
Speech boundary (website): at a pause speakers stop without the ending; today we score the careful connected forms.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Teacher instruction · Part 3 · alif madda (website)', title: 'Alif madda: hamza + long ā', ar: 'أَلِفُ المَدِّ',
    cols: [{ label: 'Spelling', w: 2.2, size: 34 }, { label: 'Sound', w: 2.2 }, { label: 'Word', w: 2.6, size: 30 }, { label: 'Meaning', w: 2.2 }, { label: 'Decode', w: 3.13 }],
    rows: [
      { core: true, cells: ['أَ', '/ʔa/ short', { ar: 'أَكَلَ', sub: 'ʾakala' }, 'he ate', 'hamza + short fatḥa'] },
      { core: true, cells: ['آ', '/ʔā/ long', { ar: 'آدَمُ', sub: 'ʾĀdam' }, 'Adam', '/ʔā/ + dam'] },
      { core: true, cells: ['آ', '/ʔā/ long', { ar: 'قُرْآنٌ', sub: 'qurʾān' }, 'Qur’an', 'qur + /ʔā/ + n'] },
      { cells: ['بَا', '/bā/ long', { ar: 'بَابٌ', sub: 'bāb' }, 'door', 'ordinary long ā — no hamza, so no madda'] },
    ],
    notes: `ALIF MADDA (website Part 3): the wavy sign above alif (آ) = hamza /ʔ/ + long /ā/. It does not replace every ordinary long ā: بَاب has long ā but no hamza before it, so it uses ordinary alif (website).
Other website word: آمَنَ ʾāmana — he believed.
Terminology note (website): “madd” can also mean vowel lengthening in general; here we mean the written character آ.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Teacher instruction · Part 4 · hamza keeps its sound, changes its seat (website)', title: 'Hamza: five printed shapes', ar: 'الهَمْزَةُ',
    cols: [{ label: 'Shape', w: 2.0, size: 36 }, { label: 'Where it sits', w: 2.8 }, { label: 'Word', w: 2.6, size: 30 }, { label: 'Read it', w: 2.2 }, { label: 'Meaning', w: 2.73 }],
    rows: [
      { core: true, cells: ['أ', 'above alif', 'أَكَلَ', 'ʾakala', 'he ate'] },
      { core: true, cells: ['إ', 'below alif', 'إِمَامٌ', 'ʾimām', 'imam, leader'] },
      { core: true, cells: ['ؤ', 'on wāw', 'سُؤَالٌ', 'suʾāl', 'question'] },
      { cells: ['ئ', 'on a seat (dotless yāʾ)', 'بِئْرٌ', 'biʾr', 'a well'] },
      { cells: ['ء', 'alone', 'شَيْءٌ', 'shayʾ', 'thing'] },
    ],
    notes: `HAMZA (website Part 4): the glottal stop /ʔ/ — the brief catch in “uh-oh”. Its small head may sit above or below alif, on wāw, on a tooth-like seat, or alone.
Foundation target (website): RECOGNISE the five shapes أ إ ؤ ئ ء. Choosing the correct seat depends on position and vowels — a later orthography lesson. Avoid shortcuts like “the strongest vowel decides” for every hamza (website).`,
  },
  F.quickCheck([
    q('What does shadda do?', ['Doubles the consonant', 'Makes a long vowel'], 'Website final check 1.'),
    q('Read the ending of كِتَابٌ', ['/un/', '/in/', '/an/'], 'Two ḍammas (website final check 3).'),
    q('What does آ represent?', ['/ʔ/ + long /ā/', 'Every long /ā/'], 'Website final check 6.'),
    q('Identify the hamza form in سُؤَال', ['hamza on wāw', 'plain wāw only'], 'Website final check 9.'),
  ], 'website final check questions 1, 3, 6 and 9.'),
  {
    type: 'glossed', stage: 'ido', min: 4, eyebrow: 'I do · reading lab: inspect → decode → blend (website)', title: 'Watch me read six words', ar: 'مَعْمَلُ القِرَاءَةِ',
    lines: [
      ['مُحَمَّدٌ', 'mu-ḥam-mad-un — shadda: /mm/'],
      ['بَيْتٌ', 'bay-tun — tanwīn: /un/ (a house)'],
      ['قَلَمًا', 'qa-la-man — tanwīn: /an/ (a pen)'],
      ['آدَمُ', 'ʾā-dam — alif madda: /ʔā/'],
      ['سُؤَالٌ', 'su-ʾā-lun — hamza on wāw: /ʔ/ (a question)'],
      ['دَرَّسَ', 'dar-ra-sa — shadda: /rr/ (he taught)'],
    ],
    notes: `I DO — READING LAB (4 min), the website routine:
1 INSPECT — circle the focus mark and name it precisely (shadda, one of three tanwīns, alif madda or hamza).
2 DECODE — state its sound job (double a consonant, add /n/, read /ʔā/, pronounce /ʔ/).
3 BLEND — read the full word, keeping vowel length, consonant timing and direction accurate.
Think aloud for each word, then echo-read with the class. Students copy the six words and circle each mark.`,
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · website games “Shadda Signal” and “Ending Ear”', title: 'Shadda signal and ending ear', ar: 'اِسْتَمِعْ وَاقْرَأْ',
    seed: 17,
    questions: [
      q('Which word has a doubled /r/?', ['دَرَّسَ', 'دَرَسَ'], 'The shadda on رّ = two timings.'),
      q('Which word has a doubled /m/?', ['مُحَمَّدٌ', 'مُحَمَدٌ'], 'mu-ḥam-mad.'),
      q('Read the ending of قَلَمٍ', ['/in/', '/un/', '/an/'], 'Two kasras (website final check 4).'),
      q('Read the ending of بَيْتًا', ['/an/', '/un/', '/in/'], 'Two fatḥas + alif (website final check 5).'),
      q('Which sound is marked in دَرَّسَ?', ['doubled /rr/', 'single /r/'], 'Website final check 2.'),
    ],
    side: { kind: 'core', label: 'CORE', text: 'Shadda → say the letter twice.\nTwo ḍammas → un\nTwo kasras → in\nTwo fatḥas → an' },
    answerSlide: { min: 0, eyebrow: 'We do · answers', title: 'Answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — website games “Shadda Signal” (one timing or two?) and “Ending Ear” (read the doubled mark and select the ending). Read each word aloud before students choose.',
    answerNotes: 'Reveal; read each word together. Partner accuracy check (website): the shadda consonant has two timings; tanwīn ends with an audible /n/.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · website listening · hear the mark', title: 'What do you hear?', ar: 'اِسْتَمِعْ إِلَى العَلَامَةِ',
    seed: 18,
    questions: [
      q('Word 1: مُعَلِّمٌ', ['shadda', 'hamza', 'long ā'], 'mu-ʿal-lim: the l is doubled (also tanwīn at the end).'),
      q('Word 2: كِتَابٌ', ['tanwīn', 'shadda', 'hamza'], 'kitābun: the /n/ ending.'),
      q('Word 3: بَابٌ', ['long ā', 'hamza', 'shadda'], 'bāb: ordinary long ā.'),
      q('Word 4: سَأَلَ', ['hamza', 'tanwīn', 'shadda'], 'sa-ʾa-la: the catch /ʔ/ (he asked).'),
    ],
    side: { kind: 'info', head: 'LISTEN TWICE', text: 'For each word: shadda, tanwīn, long ā or hamza?' },
    answerSlide: { min: 0, eyebrow: 'We do · listening answers', title: 'Listening: answers', ar: 'الإِجَابَاتُ' },
    notes: `WEBSITE LISTENING (3 min). Read each word twice; students first write the feature in their books.
Script: مُعَلِّمٌ. كِتَابٌ. بَابٌ. سَأَلَ.
Answers (website): 1 shadda · 2 tanwīn · 3 long ā · 4 hamza.`,
    answerNotes: 'Reveal. Show the four words on the board and circle the mark in each.',
  },
  {
    type: 'sorter', stage: 'wedo', min: 3, eyebrow: 'We do · website game “Mark Detective”', title: 'Which mark is in focus?', ar: 'مُحَقِّقُ العَلَامَاتِ',
    categories: ['Shadda', 'Tanwīn', 'Alif madda', 'Hamza'],
    items: [
      { ar: 'مَرَّ', cat: 0 }, { ar: 'قَلَمٌ', cat: 1 }, { ar: 'آمَنَ', cat: 2 }, { ar: 'إِمَامٌ', cat: 3 },
      { ar: 'حَقّ', cat: 0 }, { ar: 'كِتَابًا', cat: 1 }, { ar: 'قُرْآن', cat: 2 }, { ar: 'بِئْر', cat: 3 },
    ],
    answerSlide: { eyebrow: 'We do · mark detective answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — website game “Mark Detective” (identify the exact focus mark or character inside each word). Words from the website lesson; items chosen so each has ONE main focus mark (إِمَامٌ also has tanwīn — accept both with a reason).',
  },
  {
    type: 'routes', stage: 'youdo', min: 7, eyebrow: 'You do · independent practice · 7 minutes', title: 'Write: choose your route', ar: 'اُكْتُبْ',
    core: { amount: '4 lines', task: 'Copy the six reading-lab words and circle the mark in each. Write its job underneath (double · n · ʾā · catch).', how: 'Read each word aloud after you write it.' },
    develop: { amount: 'writing rehearsal', task: 'Website writing rehearsal: write the doubled rāʾ three times; build kitābun, kitābin, kitāban and circle only the ending.', how: 'Then contrast ʾa, ʾā and bā and label each sound.' },
    stretch: { amount: 'find and label', task: 'Copy the five hamza shapes with one word each. Then copy five vowelled words from a Qur’an or reading book and label one shadda, one tanwīn, one madda and two hamzas.', how: 'Under each, write its sound job (website homework).' },
    notes: 'YOU DO — WRITING (7 min) = the website writing rehearsal and homework, split by route. LIVE FEEDBACK after 3 minutes.',
  },
  F.speakingSlide({
    speaking: {
      context: 'Partner accuracy check: read and name the mark',
      model: [
        ['A', 'اِقْرَأْ: دَرَّسَ', 'Read: darrasa'],
        ['B', 'دَرَّسَ. فِيهَا شَدَّةٌ.', 'darrasa. It has a shadda.'],
        ['A', 'وَ«كِتَابٌ»؟', 'And “kitābun”?'],
        ['B', 'كِتَابٌ. فِيهَا تَنْوِينٌ.', 'kitābun. It has tanwīn.'],
      ],
    },
  }, {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'اِقْرَأْ: مُحَمَّدٌ' },
      { route: 'core', ar: 'اِقْرَأْ: كِتَابٌ · كِتَابٍ · كِتَابًا' },
      { route: 'develop', ar: 'دَرَسَ أَمْ دَرَّسَ؟' },
      { route: 'stretch', ar: 'أَيْنَ الهَمْزَةُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'فِيهَا شَدَّةٌ / تَنْوِينٌ .' },
      { route: 'develop', ar: 'فِيهَا مَدٌّ / هَمْزَةٌ .' },
      { route: 'stretch', ar: 'الهَمْزَةُ عَلَى ______ .' },
      { route: 'sum', ar: 'قَرَأَ / قَرَأَتْ ______ .' },
    ],
    modelEn: ['Read: darrasa', 'darrasa. It has a shadda.'],
    notes: 'PARTNER ACCURACY CHECK (website): the shadda consonant has two timings; tanwīn ends with an audible /n/; long /ā/ lasts about twice a short /a/; hamza is heard as /ʔ/ whatever its seat. A reads a word, B names the mark and checks the sound.',
  }),
  {
    type: 'formsTable', stage: 'feedback', min: 2, eyebrow: 'Feedback · mix-ups and repairs', title: 'Mistakes that help us learn', ar: 'أَخْطَاءٌ شَائِعَةٌ',
    cols: [{ label: 'Likely mix-up', w: 5.6 }, { label: 'Repair cue', w: 6.73 }],
    rows: [
      { core: true, cells: ['Reading shadda as a vowel', 'Shadda doubles the consonant — no extra vowel.'] },
      { core: true, cells: ['Reading tanwīn as two vowels', 'The pair = one vowel + /n/: un · in · an.'] },
      { core: true, cells: ['Writing آ for every long ā', 'Only when hamza comes first: آدَم but بَاب.'] },
      { cells: ['Adding a vowel between the two halves of shadda', 'Hold, then release: dar-ra-sa, not da-ra-ra-sa.'] },
      { cells: ['Tanwīn with الـ', 'الكِتَابُ — the article removes tanwīn.'] },
      { cells: ['Guessing hamza seats', 'Today: recognise the five shapes only.'] },
    ],
    notes: 'FEEDBACK (2 min) — mix-ups based on the website boundaries and blend routine. Students correct in green pen.',
  },
  F.selfCheckSlide([
    { route: 'core', text: 'I can decode a consonant with shadda.' },
    { route: 'core', text: 'I can read all three tanwīn endings.' },
    { route: 'develop', text: 'I can distinguish أَ، آ، بَا.' },
    { route: 'develop', text: 'I can find hamza in five printed forms.' },
    { route: 'stretch', text: 'I can explain why a word with الـ has no tanwīn.' },
  ]),
  F.exitTicket([
    q('Why does بَاب not use آ?', ['Its /ā/ has no preceding hamza', 'Its vowel is short'], 'Website final check 7.'),
    q('Which consonant sound does hamza represent?', ['glottal stop /ʔ/', '/w/', '/y/'], 'Website final check 8.'),
    q('What is today’s honest hamza spelling target?', ['Recognise all common shapes', 'Guess every seat from one shortcut'], 'Website final check 10.'),
  ], 10),
  F.prepSlide({
    ...NEXT,
    words: [['٠ ١ ٢ ٣', 'zero, one, two, three', ''], ['وَاحِدٌ', 'one', 'f. وَاحِدَةٌ'], ['اِثْنَانِ', 'two', 'f. اِثْنَتَانِ'], ['ثَلَاثَةٌ', 'three', ''], ['عَشَرَةٌ', 'ten  ١٠', '']],
    questionEn: 'Write the digits ٠ to ٩ and say them aloud.',
    questionAr: '٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩',
    homework: {
      core: 'Website · F1-L06 · Shadda Signal and Ending Ear games.',
      develop: 'Website writing rehearsal: shadda, three tanwīn endings, أَ آ بَا.',
      stretch: 'Website homework: five vowelled words from a trusted source; label shadda, tanwīn, madda and two hamzas.',
    },
    wordsSource: 'Next lesson: Arabic-Indic numerals 0–100. Note: the numbers are written left to right even inside Arabic text!',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: digits ٠–٩ + your labelled words.' }),
];

module.exports = { meta, slides };
