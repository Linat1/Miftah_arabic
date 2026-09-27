'use strict';
/*
 * F4-L01 · School Subjects — What Do You Study?
 * Website: Pathways › Foundation › F4 › Lesson 1. The F3-to-F4 bridge, the school-subject vault (18 subjects + subject /
 * subjects / favourite subject; mathematics vs sport contrast), the study verb (أَدْرُسُ / نَدْرُسُ / يَدْرُسُ / تَدْرُسُ; asking a
 * boy or a girl; أَدْرُسُ vs أُدَرِّسُ), opinions and reasons (أُحِبُّ / لَا أُحِبُّ / أُفَضِّلُ + لِأَنَّهُ / لِأَنَّهَا + 8 adjectives),
 * the subject profile, the Subject Mission (14), Maryam’s subjects (listening), Samir and Huda (reading), speaking,
 * the 6–8-sentence paragraph and the 16-question checkpoint.
 */
const F = require('./f4-common');
const game = require('../site-data/pathway-visual-games.json')['f4-l01'];
const { q, bank, banks } = F;

const meta = F.meta({
  n: 1, fileTitle: 'School_Subjects_What_Do_You_Study', chip: 'School Subjects',
  title: 'School Subjects — What Do You Study?', arabic: 'المَوَادُّ الدِّرَاسِيَّةُ — مَاذَا تَدْرُسُ؟',
  focus: 'Name the school subjects, say what you and others study, and give likes, dislikes and preferences — each with an accurate reason (li’annahu / li’annahā).',
  icon: 'FaBookOpen', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F4-L02', nextTitle: 'The School Timetable — Days and Times', nextAr: 'الجَدْوَلُ المَدْرَسِيُّ — الأَيَّامُ وَالأَوْقَاتُ' };
const AR = /[؀-ۿ]/;
const rounds = banks.l01.rounds.map((r) => F.w({ ...r, q: AR.test(r.prompt) ? r.prompt : `${r.title}: ${r.prompt}` }));
const prompts = banks.l01.prompts;
const MF = (m, f) => ({ tag: 'm · f', forms: [{ l: 'f.', ar: f }, { l: 'm.', ar: m }] });
const R = (g) => ({ tag: g, forms: [{ l: 'because', ar: g === 'm.' ? 'لِأَنَّهُ …' : 'لِأَنَّهَا …' }] });

const site = {
  speaking: {
    context: 'Talk about your subjects',
    model: [
      ['A', 'مَاذَا تَدْرُسُ فِي المَدْرَسَةِ؟', 'What do you study at school?'],
      ['B', 'أَدْرُسُ الرِّيَاضِيَّاتِ وَالعُلُومَ وَالفَنَّ. أُحِبُّ الفَنَّ لِأَنَّهُ مُمْتِعٌ.', 'I study maths, science and art. I like art because it is enjoyable.'],
    ],
  },
  writing: {
    prompt: 'Website writing task: 6–8 connected sentences — name your subjects, state a favourite, include one like and one dislike, and justify at least two opinions (real or invented details).',
    checklist: ['At least six subjects.', 'مَادَّتِي المُفَضَّلَةُ هِيَ …', 'One like and one dislike.', 'Two reasons: لِأَنَّهُ / لِأَنَّهَا + agreeing adjective.'],
    model: 'أَدْرُسُ اللُّغَةَ العَرَبِيَّةَ، وَاللُّغَةَ الإِنْجِلِيزِيَّةَ، وَالرِّيَاضِيَّاتِ، وَالعُلُومَ، وَالتَّارِيخَ، وَالفَنَّ. مَادَّتِي المُفَضَّلَةُ هِيَ العُلُومُ لِأَنَّهَا مُفِيدَةٌ. أُحِبُّ الفَنَّ أَيْضًا لِأَنَّهُ مُمْتِعٌ، وَلَكِنِّي لَا أُحِبُّ التَّارِيخَ لِأَنَّهُ صَعْبٌ.',
  },
  differentiation: {
    core: 'Six accurate sentences using the models.',
    develop: 'Eight subject terms and three different opinion structures.',
    stretch: 'Add what another person studies with yadrusu / tadrusu.',
  },
  mistakes: [
    { wrong: 'أُحِبُّ الفَنَّ لِأَنَّهَا مُمْتِعَةٌ.', right: 'أُحِبُّ الفَنَّ لِأَنَّهُ مُمْتِعٌ.', why: 'Art is masculine: li’annahu + masculine adjective.' },
    { wrong: 'أُدَرِّسُ العُلُومَ فِي المَدْرَسَةِ.', right: 'أَدْرُسُ العُلُومَ فِي المَدْرَسَةِ.', why: 'With the shadda it means I TEACH; I study = adrusu.' },
    { wrong: 'أُحِبُّ الرِّيَاضَةَ: هِيَ مَادَّةُ الأَرْقَامِ.', right: 'أُحِبُّ الرِّيَاضِيَّاتِ: هِيَ مَادَّةُ الأَرْقَامِ.', why: 'Riyāḍiyyāt = maths; riyāḍa = sport / PE.' },
  ],
  listening: {
    title: 'Maryam describes her subjects',
    script: 'اِسْمِي مَرْيَمُ. أَدْرُسُ اللُّغَةَ العَرَبِيَّةَ، وَاللُّغَةَ الإِنْجِلِيزِيَّةَ، وَالرِّيَاضِيَّاتِ، وَالعُلُومَ، وَالتَّارِيخَ، وَالفَنَّ. مَادَّتِي المُفَضَّلَةُ هِيَ العُلُومُ لِأَنَّهَا مُفِيدَةٌ وَمُثِيرَةٌ لِلاهْتِمَامِ. أُحِبُّ الفَنَّ أَيْضًا لِأَنَّهُ مُمْتِعٌ. لَا أُحِبُّ التَّارِيخَ لِأَنَّهُ صَعْبٌ. أَنَا وَصَدِيقَتِي نَدْرُسُ المُوسِيقَى أَيْضًا.',
    questions: bank(1, 'listening', [0, 1, 3, 5, 8]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 1,
    source: 'Website sections used: the eight-question F3-to-F4 bridge, the school-subject vault (18 subjects, مَادَّةٌ / مَوَادُّ / مَادَّتِي المُفَضَّلَةُ, the mathematics vs sport contrast) and the 18-question check, the study verb (أَنَا أَدْرُسُ · نَحْنُ نَدْرُسُ · هُوَ يَدْرُسُ · هِيَ تَدْرُسُ; asking a boy or a girl; أَدْرُسُ vs أُدَرِّسُ) and the 12-question laboratory, opinions and reasons (8 adjectives) and the 14-question check, the subject profile, the Subject Mission (14), Maryam’s subjects (listening, 10), Samir and Huda (reading, 12), speaking (4 prompts), the 6–8-sentence paragraph and the 16-question checkpoint. Picture match: website visual game.',
    support: `• F4 opens the school-life pathway. Core: 8 subjects + أَدْرُسُ + أُحِبُّ / لَا أُحِبُّ. Develop: all four study-verb forms, أُفَضِّلُ and two reasons with agreement. Stretch: what another person studies (يَدْرُسُ / تَدْرُسُ) and comparing two subjects.
• Website “Foundation-to-development bridge”: the present-tense pattern is introduced for communication now; later lessons broaden the full verb system.
• Real or invented details are equally acceptable (website). Religious education appears in the website vault as التَّرْبِيَةُ الدِّينِيَّةُ.
• Urdu bridge: ریاضی (maths), علوم (sciences), تاریخ (history), جغرافیہ, فلسفہ, مفید, مشکل ≈ صَعْبٌ (different word), آسان ≈ سَهْلٌ.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'School subjects, the study verb, then opinions with reasons.', wedo: 'Subject mission, listen to Maryam, read two profiles.', next: 'F4-L02' }),
  F.doNow({
    questions: [
      q('What does الرِّيَاضِيَّاتُ mean?', ['mathematics', 'sport', 'science'], 'Prepared at home (F3-L12).'),
      q('What does التَّارِيخُ mean?', ['history', 'geography', 'art'], 'Prepared at home (F3-L12).'),
      ...bank(1, 'retrieval', [0, 3, 5]),
    ],
    keyIdea: { text: 'A strong school answer = subject + opinion + reason. The reason word agrees with the subject: masculine → li’annahu, feminine → li’annahā.', ar: 'أُحِبُّ الفَنَّ {w|لِأَنَّهُ} مُمْتِعٌ · أُحِبُّ العُلُومَ {e|لِأَنَّهَا} مُفِيدَةٌ' },
    retrieves: 'Questions 1–2 test two of the five subjects prepared at home at the end of F3-L12. Questions 3–5 are the website “F3-to-F4 bridge”.',
  }),
  F.objectivesSlide([
    'Name and recognise at least eighteen subject terms.',
    'Use adrusu, nadrusu, yadrusu, tadrusu accurately.',
    'Ask and answer what someone studies.',
    'Express likes, dislikes and preferences with a matching reason.',
  ], {
    core: ['I can name eight subjects.', 'I can say what I study and what I like.'],
    develop: ['I can ask a boy or a girl what they study.', 'I can give two reasons with agreement.'],
    stretch: ['I can say what another person studies.', 'I can compare two subjects.'],
  }, 2, 'Website “By the end, I can…” (left) and the website writing Core / Develop / Stretch routes (right).'),
  F.keywordsSlide({
    text: 'Eighteen subjects, the study verb and eight reason adjectives. Core: eight subjects and four adjectives.',
    groups: [
      { head: 'GROUP 1', name: 'Subjects · 18' },
      { head: 'GROUP 2', name: 'Study verb · 4 forms' },
      { head: 'GROUP 3', name: 'Opinions and reasons' },
    ],
    bridge: [
      { ar: 'الرِّيَاضِيَّاتُ', urdu: 'ریاضی', tr: 'ar-riyāḍiyyāt', en: 'mathematics' },
      { ar: 'العُلُومُ', urdu: 'علوم', tr: 'al-‘ulūm', en: 'science(s)' },
      { ar: 'التَّارِيخُ', urdu: 'تاریخ', tr: 'at-tārīkh', en: 'history (Urdu: also date)' },
      { ar: 'الجُغْرَافِيَا', urdu: 'جغرافیہ', tr: 'al-jughrāfiyā', en: 'geography' },
      { ar: 'مُفِيدٌ', urdu: 'مفید', tr: 'mufīd', en: 'useful' },
    ],
    notes: 'URDU BRIDGE: ریاضی، علوم، تاریخ، جغرافیہ، فلسفہ and مفید are shared words. CAREFUL: Urdu مشکل (difficult) is also Arabic مُشْكِلَةٌ (a problem) — for “difficult” Arabic uses صَعْبٌ.',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · school subjects (website vault) · 1 of 2', title: 'Arabic, maths, science …', ar: 'المَوَادُّ الدِّرَاسِيَّةُ',
    items: [
      { n: 1, ar: 'اللُّغَةُ العَرَبِيَّةُ', en: 'Arabic', tr: 'al-lugha al-‘arabiyya', core: true, ...R('f.') },
      { n: 2, ar: 'اللُّغَةُ الإِنْجِلِيزِيَّةُ', en: 'English', tr: 'al-lugha al-injilīziyya', core: true, ...R('f.') },
      { n: 3, ar: 'الرِّيَاضِيَّاتُ', en: 'mathematics', tr: 'ar-ri-yā-ḍiy-yāt', core: true, ...R('f.') },
      { n: 4, ar: 'العُلُومُ', en: 'science', tr: 'al-‘u-lūm', core: true, ...R('f.') },
      { n: 5, ar: 'التَّارِيخُ', en: 'history', tr: 'at-tā-rīkh', core: true, ...R('m.') },
      { n: 6, ar: 'الجُغْرَافِيَا', en: 'geography', tr: 'al-jugh-rā-fi-yā', core: true, ...R('f.') },
    ],
    notes: 'SUBJECTS (website vault, 6 of 18). The website marks each subject with its reason form: most subjects take لِأَنَّهَا (feminine or non-human plural — العُلُومُ، الرِّيَاضِيَّاتُ); التَّارِيخُ takes لِأَنَّهُ. Website contrast: الرِّيَاضِيَّاتُ = mathematics; الرِّيَاضَةُ / التَّرْبِيَةُ البَدَنِيَّةُ = sport / PE.',
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · school subjects (website vault) · 2 of 2', title: 'Art, music, PE, computing …', ar: 'المَوَادُّ الدِّرَاسِيَّةُ',
    items: [
      { n: 7, ar: 'الفَنُّ', en: 'art', tr: 'al-fann', core: true, ...R('m.') },
      { n: 8, ar: 'المُوسِيقَى', en: 'music', tr: 'al-mū-sī-qā', core: true, ...R('f.') },
      { n: 9, ar: 'التَّرْبِيَةُ البَدَنِيَّةُ', en: 'PE', tr: 'at-tar-bi-ya al-ba-da-niy-ya', ...R('f.') },
      { n: 10, ar: 'عِلْمُ الحَاسُوبِ', en: 'computer science', tr: '‘ilm al-ḥā-sūb', ...R('m.') },
      { n: 11, ar: 'الفِيزِيَاءُ · الكِيمِيَاءُ', en: 'physics · chemistry', tr: 'al-fī-zi-yā’ · al-kī-mi-yā’', ...R('f.') },
      { n: 12, ar: 'مَادَّةٌ', en: 'a school subject', tr: 'mād-da', core: true, tag: 'f.', forms: [{ l: 'pl.', ar: 'مَوَادُّ' }, { l: 'my fav.', ar: 'مَادَّتِي المُفَضَّلَةُ' }] },
    ],
    notes: 'SUBJECTS (website vault). Also: الأَحْيَاءُ (biology), التِّقْنِيَّةُ (technology / DT), التَّرْبِيَةُ الدِّينِيَّةُ (religious education), الفَلْسَفَةُ (philosophy), المَسْرَحُ / التَّمْثِيلُ (drama, m.), اللُّغَاتُ (languages).',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · the study verb (website)', title: 'Who studies?', ar: 'فِعْلُ الدِّرَاسَةِ',
    cols: [{ label: 'Person', w: 2.4, size: 24 }, { label: 'Verb', w: 2.4, size: 26 }, { label: 'Example', w: 5.2, size: 22 }, { label: 'Meaning', w: 2.33 }],
    rows: [
      { core: true, cells: [{ ar: 'أَنَا' }, { ar: '{w|أَ}دْرُسُ' }, { ar: 'أَدْرُسُ العُلُومَ.' }, 'I study'] },
      { core: true, cells: [{ ar: 'نَحْنُ' }, { ar: '{k|نَ}دْرُسُ' }, { ar: 'نَدْرُسُ اللُّغَاتِ.' }, 'we study'] },
      { cells: [{ ar: 'هُوَ' }, { ar: '{w|يَ}دْرُسُ' }, { ar: 'يَدْرُسُ عِلْمَ الحَاسُوبِ.' }, 'he studies'] },
      { cells: [{ ar: 'هِيَ' }, { ar: '{e|تَ}دْرُسُ' }, { ar: 'تَدْرُسُ المُوسِيقَى.' }, 'she studies'] },
      { core: true, cells: [{ ar: 'أَنْتَ / أَنْتِ' }, { ar: 'تَدْرُسُ / تَدْرُسِينَ' }, { ar: 'مَاذَا تَدْرُسُ؟ · مَاذَا تَدْرُسِينَ؟' }, 'you study (m. / f.)'] },
    ],
    foot: 'The beginning of the verb shows WHO studies. Do not confuse: adrusu = I study · udarrisu (shadda) = I teach.',
    notes: `GRAMMAR PART 1 — website section 3 “Control the study verb”: أَنَا أَدْرُسُ · نَحْنُ نَدْرُسُ · هُوَ يَدْرُسُ · هِيَ تَدْرُسُ; ask one male مَاذَا تَدْرُسُ فِي المَدْرَسَةِ؟ and one female مَاذَا تَدْرُسِينَ فِي المَدْرَسَةِ؟
Website “do not confuse”: أَدْرُسُ (I study) vs أُدَرِّسُ (I teach) — the shadda changes the verb.
After the verb the subject takes -a: أَدْرُسُ الفَنَّ، أَدْرُسُ العُلُومَ (model it; no case teaching needed at Foundation).`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · opinions and reasons (website)', title: 'Subject + opinion + reason', ar: 'الرَّأْيُ وَالسَّبَبُ',
    cards: [
      { chip: 'MASCULINE SUBJECT', color: '1D5FBF', head: 'لِأَنَّهُ', big: 'أُحِبُّ الفَنَّ لِأَنَّهُ مُمْتِعٌ.', en: 'I like art because it is enjoyable.', clue: 'Art, history, computing.' },
      { chip: 'FEMININE SUBJECT', color: 'B83280', head: 'لِأَنَّهَا', big: 'أُحِبُّ العُلُومَ لِأَنَّهَا مُفِيدَةٌ.', en: 'I like science because it is useful.', clue: 'Also non-human plurals.' },
      { chip: 'PREFERENCE', color: '1E6B52', head: 'أُفَضِّلُ · مَادَّتِي المُفَضَّلَةُ', big: 'مَادَّتِي المُفَضَّلَةُ هِيَ المُوسِيقَى.', en: 'My favourite subject is music.', clue: 'Dislike: لَا أُحِبُّ …' },
    ],
    error: { text: 'Website agreement rule: the adjective matches the subject.', pairs: [['أُحِبُّ التَّارِيخَ لِأَنَّهُ مُهِمٌّ.', 'أُحِبُّ التَّارِيخَ لِأَنَّهَا مُهِمَّةٌ.']] },
    notes: `GRAMMAR PART 2 — website section 4 “Build accurate opinions and reasons”: أُحِبُّ · لَا أُحِبُّ · أُفَضِّلُ · مَادَّتِي المُفَضَّلَةُ هِيَ…
Reason adjectives (website, m. / f.): سَهْلٌ / سَهْلَةٌ (easy) · صَعْبٌ / صَعْبَةٌ (difficult) · مُفِيدٌ / مُفِيدَةٌ (useful) · مُمْتِعٌ / مُمْتِعَةٌ (enjoyable) · مُمِلٌّ / مُمِلَّةٌ (boring) · مُهِمٌّ / مُهِمَّةٌ (important) · مُثِيرٌ / مُثِيرَةٌ لِلاهْتِمَامِ (interesting) · شَيِّقٌ / شَيِّقَةٌ (engaging).`,
  },
  {
    type: 'vocab', stage: 'teach', flex: true, eyebrow: 'Key words · Group 3 · reason adjectives (website) · FLEX', title: 'Easy, difficult, useful …', ar: 'صِفَاتُ السَّبَبِ',
    items: [
      { n: 13, ar: 'سَهْلٌ', en: 'easy', tr: 'sahl', core: true, ...MF('سَهْلٌ', 'سَهْلَةٌ') },
      { n: 14, ar: 'صَعْبٌ', en: 'difficult', tr: 'ṣa‘b', core: true, ...MF('صَعْبٌ', 'صَعْبَةٌ') },
      { n: 15, ar: 'مُفِيدٌ', en: 'useful', tr: 'mu-fīd', core: true, ...MF('مُفِيدٌ', 'مُفِيدَةٌ') },
      { n: 16, ar: 'مُمْتِعٌ', en: 'enjoyable', tr: 'mum-ti‘', core: true, ...MF('مُمْتِعٌ', 'مُمْتِعَةٌ') },
      { n: 17, ar: 'مُمِلٌّ', en: 'boring', tr: 'mu-mill', ...MF('مُمِلٌّ', 'مُمِلَّةٌ') },
      { n: 18, ar: 'مُهِمٌّ', en: 'important', tr: 'mu-himm', ...MF('مُهِمٌّ', 'مُهِمَّةٌ') },
    ],
    notes: 'FLEX — the website reason adjectives (6 of 8). Also مُثِيرٌ لِلاهْتِمَامِ (interesting) and شَيِّقٌ (engaging). Use if the class needs the adjectives before the mission; otherwise they are on the frames slide.',
  },
  F.quickCheck([...bank(1, 'studyQuiz', [1, 3]), q('Complete: أُحِبُّ الفَنَّ ___ مُمْتِعٌ.', ['لِأَنَّهُ', 'لِأَنَّهَا', 'لِأَنَّنِي'], 'Art is masculine: li’annahu.'), ...bank(1, 'opinionQuiz', [6])], 'website study-verb laboratory questions 2 and 4, a teacher item on the masculine reason, and opinion check question 7.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me build a subject profile', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Subjects', ar: 'أَدْرُسُ الرِّيَاضِيَّاتِ، وَالعُلُومَ، وَالفَنَّ.', think: 'I study + list.' },
      { head: 'Favourite', ar: 'مَادَّتِي المُفَضَّلَةُ هِيَ العُلُومُ {e|لِأَنَّهَا} مُفِيدَ{e|ةٌ}.', think: 'Science (f.) → -hā.' },
      { head: 'Like', ar: 'أُحِبُّ الفَنَّ أَيْضًا {w|لِأَنَّهُ} مُمْتِعٌ.', think: 'Art (m.) → -hu.' },
      { head: 'Dislike', ar: 'لَا أُحِبُّ التَّارِيخَ {w|لِأَنَّهُ} صَعْبٌ.', think: 'History (m.).' },
    ],
    legend: ['w', 'e'], legendLabels: { w: 'MASCULINE SUBJECT', e: 'FEMININE SUBJECT' },
    model: 'أَدْرُسُ الرِّيَاضِيَّاتِ، وَالعُلُومَ، وَالفَنَّ. مَادَّتِي المُفَضَّلَةُ هِيَ العُلُومُ {e|لِأَنَّهَا} مُفِيدَ{e|ةٌ}. أُحِبُّ الفَنَّ أَيْضًا {w|لِأَنَّهُ} مُمْتِعٌ، وَلَكِنِّي لَا أُحِبُّ التَّارِيخَ {w|لِأَنَّهُ} صَعْبٌ.',
    modelEn: 'I study maths, science and art. My favourite subject is science because it is useful. I like art too because it is enjoyable, but I do not like history because it is difficult.',
    notes: 'I DO (3 min) — the website listening (Maryam) as a model. Think aloud at every reason: “Which subject? Masculine or feminine? So -hu or -hā, and does the adjective need -a?”',
  },
  F.gameSlide({ ...game, title: 'Visual game — School subjects', items: [game.items[0], game.items[2], game.items[4]] }, {
    title: 'Which subject? Match the picture',
    en: ['I study mathematics.', 'I study geography.', 'I study art.'],
    icons: [[['fa6', 'FaCalculator', '1D5FBF']], [['fa6', 'FaEarthAfrica', '1E6B52']], [['fa6', 'FaPalette', 'B83280']]],
    labels: ['a calculator', 'a globe', 'a palette'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Follow-up (Develop): add an opinion + reason — أَدْرُسُ الفَنَّ، وَأُحِبُّهُ لِأَنَّهُ مُمْتِعٌ. Other cards for homework: العُلُومُ، التَّارِيخُ، عِلْمُ الحَاسُوبِ.',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website “Subject Mission”', title: 'Complete the subject mission', ar: 'مُهِمَّةُ المَوَادِّ',
    seed: 11,
    questions: [rounds[1], rounds[5], rounds[6], rounds[9], rounds[10]],
    side: { kind: 'core', label: 'CORE', text: 'maths ≠ sport\nboy: tadrusu · girl: tadrusīna\nm. subject → -hu · f. → -hā' },
    answerSlide: { min: 0, eyebrow: 'We do · Mission answers', title: 'Mission: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 14 Subject Mission rounds (PE, ask a boy, ask a girl, masculine reason, feminine reason). The other 9 are homework.',
    answerNotes: 'After each answer ask: who is speaking or listening? Is the subject masculine or feminine?',
  },
  F.repairSlide(site, ['Art: -hu or -hā?', 'Study or teach?', 'Maths or sport?']),
  F.listening(site, {
    coreTip: 'Listen twice.\nFive headings: studies · favourite · likes · dislikes · reasons.',
    routes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5.',
    gloss: [
      ['اِسْمِي مَرْيَمُ. أَدْرُسُ اللُّغَةَ العَرَبِيَّةَ، وَاللُّغَةَ الإِنْجِلِيزِيَّةَ، وَالرِّيَاضِيَّاتِ، وَالعُلُومَ، وَالتَّارِيخَ، وَالفَنَّ.', 'My name is Maryam. I study Arabic, English, maths, science, history and art.'],
      ['مَادَّتِي المُفَضَّلَةُ هِيَ العُلُومُ لِأَنَّهَا مُفِيدَةٌ وَمُثِيرَةٌ لِلاهْتِمَامِ.', 'My favourite subject is science because it is useful and interesting.'],
      ['أُحِبُّ الفَنَّ أَيْضًا لِأَنَّهُ مُمْتِعٌ.', 'I also like art because it is enjoyable.'],
      ['لَا أُحِبُّ التَّارِيخَ لِأَنَّهُ صَعْبٌ.', 'I do not like history because it is difficult.'],
      ['أَنَا وَصَدِيقَتِي نَدْرُسُ المُوسِيقَى أَيْضًا.', 'My friend and I study music too.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · Profile A (website)', title: 'Samir’s subjects', ar: 'المَلَفُّ (أ)',
    lines: [
      ['يَدْرُسُ سَامِرٌ الرِّيَاضِيَّاتِ، وَالفِيزِيَاءَ، وَالكِيمِيَاءَ،', 'Samir studies maths, physics, chemistry,'],
      ['وَالتَّارِيخَ، وَعِلْمَ الحَاسُوبِ.', 'history and computer science'],
      ['مَادَّتُهُ المُفَضَّلَةُ هِيَ عِلْمُ الحَاسُوبِ', 'His favourite: computer science'],
      ['لِأَنَّهُ مُفِيدٌ وَمُمْتِعٌ.', 'because it is useful and enjoyable (m.)'],
      ['لَا يُحِبُّ التَّارِيخَ لِأَنَّهُ مُمِلٌّ فِي رَأْيِهِ.', 'Dislike: history — boring, in his opinion'],
    ],
    notes: 'PROFILE A (website, complete). Notice the “he” forms: يَدْرُسُ، مَادَّتُهُ، لَا يُحِبُّ، رَأْيِهِ.',
  },
  {
    type: 'glossed', stage: 'wedo', flex: true, eyebrow: 'We do · reading · Profile B (website) · FLEX / Stretch', title: 'Huda’s subjects', ar: 'المَلَفُّ (ب)',
    lines: [
      ['تَدْرُسُ هُدَى اللُّغَةَ العَرَبِيَّةَ، وَاللُّغَةَ الإِنْجِلِيزِيَّةَ، وَالأَحْيَاءَ،', 'Huda studies Arabic, English, biology,'],
      ['وَالجُغْرَافِيَا، وَالمُوسِيقَى، وَالفَنَّ.', 'geography, music and art'],
      ['تُفَضِّلُ اللُّغَةَ العَرَبِيَّةَ لِأَنَّهَا جَمِيلَةٌ وَمُهِمَّةٌ.', 'Prefers Arabic: beautiful and important (f.)'],
      ['تُحِبُّ المُوسِيقَى أَيْضًا،', 'She also likes music'],
      ['وَلَكِنَّهَا لَا تُحِبُّ الجُغْرَافِيَا لِأَنَّهَا صَعْبَةٌ.', 'but not geography — difficult'],
    ],
    notes: 'PROFILE B (website, complete). Notice the “she” forms: تَدْرُسُ، تُفَضِّلُ، تُحِبُّ، وَلَكِنَّهَا. Stretch: compare Samir and Huda (يَدْرُسُ … بَيْنَمَا تَدْرُسُ …).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions (website)', title: 'Samir or Huda?', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 9,
    questions: bank(1, 'reading', [0, 2, 5, 7, 10]),
    side: { kind: 'info', head: 'EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Find the name,\nthen the verb and the subject after it.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading questions 1, 3, 6, 8 and 11. The other 7 are homework.',
    answerNotes: 'A student reads aloud the evidence phrase (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'مَاذَا تَدْرُسُ فِي المَدْرَسَةِ؟ / مَاذَا تَدْرُسِينَ؟' },
      { route: 'develop', ar: 'مَا مَادَّتُكَ المُفَضَّلَةُ؟ وَلِمَاذَا؟' },
      { route: 'develop', ar: 'مَا المَادَّةُ الَّتِي لَا تُحِبُّهَا؟ وَلِمَاذَا؟' },
      { route: 'stretch', ar: 'مَاذَا يَدْرُسُ صَدِيقُكَ؟ وَمَاذَا تَدْرُسُ صَدِيقَتُكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَدْرُسُ ______ وَ ______ وَ ______ .' },
      { route: 'develop', ar: 'مَادَّتِي المُفَضَّلَةُ هِيَ ______ لِأَنَّهَا / لِأَنَّهُ ______ .' },
      { route: 'develop', ar: 'لَا أُحِبُّ ______ لِأَنَّهُ / لِأَنَّهَا ______ .' },
      { route: 'stretch', ar: 'يَدْرُسُ صَدِيقِي ______ ، وَتَدْرُسُ صَدِيقَتِي ______ .' },
    ],
    modelEn: ['What do you study at school?', 'I study maths, science and art. I like art because it is enjoyable.'],
    notes: `WEBSITE SPEAKING STUDIO “Talk about your subjects” — real or invented school profile. Prompts (website):
${prompts.map((r) => `• ${r.title}: ${r.detail}`).join('\n')}
Website checklist (1–6): four subjects · أَدْرُسُ / نَدْرُسُ · أُحِبُّ / لَا أُحِبُّ / أُفَضِّلُ · لِأَنَّهُ / لِأَنَّهَا · agreement · clear delivery.`,
  }),
  F.routesSlide(site, {
    core: { amount: '6 sentences', how: 'Subjects, a favourite, one like and one dislike, using the models.' },
    develop: { amount: '6–8 sentences', how: 'Eight subjects, three opinion structures, two agreeing reasons.' },
    stretch: { amount: '8+ sentences', how: 'Add another person: yadrusu / tadrusu, and compare two subjects.' },
  }),
  F.framesSlide({
    core: [
      { en: 'I study maths and science.', ar: 'أَدْرُسُ الرِّيَاضِيَّاتِ وَالعُلُومَ.' },
      { en: 'My favourite subject is art.', ar: 'مَادَّتِي المُفَضَّلَةُ هِيَ الفَنُّ.' },
      { en: 'I like art because it is enjoyable.', ar: 'أُحِبُّ الفَنَّ لِأَنَّهُ مُمْتِعٌ.' },
      { en: 'I like science because it is useful.', ar: 'أُحِبُّ العُلُومَ لِأَنَّهَا مُفِيدَةٌ.' },
      { en: 'I do not like history because it is difficult.', ar: 'لَا أُحِبُّ التَّارِيخَ لِأَنَّهُ صَعْبٌ.' },
    ],
    develop: [
      { en: 'I prefer chemistry because it is interesting.', ar: 'أُفَضِّلُ الكِيمِيَاءَ لِأَنَّهَا مُثِيرَةٌ لِلاهْتِمَامِ.' },
      { en: 'We study languages.', ar: 'نَحْنُ نَدْرُسُ اللُّغَاتِ.' },
      { en: 'My friend (m.) studies computing.', ar: 'يَدْرُسُ صَدِيقِي عِلْمَ الحَاسُوبِ.' },
      { en: 'My friend (f.) studies music.', ar: 'تَدْرُسُ صَدِيقَتِي المُوسِيقَى.' },
      { en: '… but physics is difficult in my opinion.', ar: '… وَلَكِنَّ الفِيزِيَاءَ صَعْبَةٌ فِي رَأْيِي.' },
    ],
    bank: ['الرِّيَاضِيَّاتُ', 'العُلُومُ', 'التَّارِيخُ', 'الفَنُّ', 'المُوسِيقَى', 'أَدْرُسُ', 'أُحِبُّ', 'لَا أُحِبُّ', 'أُفَضِّلُ', 'لِأَنَّهُ', 'لِأَنَّهَا', 'مُفِيدٌ / مُفِيدَةٌ'],
  }),
  F.modelSlide(site,
    'I study Arabic, English, maths, science, history and art. My favourite subject is science because it is useful. I also like art because it is enjoyable, but I do not like history because it is difficult.',
    ['subjects', 'favourite', 'reasons (m. · f.)', 'contrast'],
    'Website speaking models (subject profile + likes and dislikes), joined. Stretch: add the website “Our class” model — يَدْرُسُ صَدِيقِي … وَتَدْرُسُ صَدِيقَتِي …'),
  F.selfCheckSlide([
    { route: 'core', text: 'I named at least six subjects.' },
    { route: 'core', text: 'I used adrusu and uḥibbu / lā uḥibbu.' },
    { route: 'develop', text: 'Masculine subject → li’annahu; feminine → li’annahā.' },
    { route: 'develop', text: 'Every reason adjective agrees.' },
    { route: 'stretch', text: 'I said what another person studies.' },
  ]),
  F.exitTicket(bank(1, 'finalQuiz', [0, 5, 9]), 16),
  F.prepSlide({
    ...NEXT,
    words: [['جَدْوَلٌ مَدْرَسِيٌّ', 'a school timetable', 'pl. جَدَاوِلُ'], ['حِصَّةٌ', 'a lesson / period', 'pl. حِصَصٌ'], ['أُسْبُوعٌ', 'a week', 'pl. أَسَابِيعُ'], ['الاِسْتِرَاحَةُ', 'break time', '—'], ['مَتَى؟', 'when?', '—']],
    questionEn: 'Which lesson do you have first on Monday?',
    questionAr: 'مَا الحِصَّةُ الأُولَى؟',
    homework: {
      core: 'Website F4-L01: the Subject Mission (14) and the picture game.',
      develop: 'Website subject profile: list eight subjects, one like, one dislike and two reasons.',
      stretch: 'Write 6–8 sentences about your subjects and one friend’s subjects.',
    },
    wordsSource: 'The five words come from the website F4-L02 timetable language vault.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: subject + opinion + reason · art (m.) → li’annahu · science (f.) → li’annahā.' }),
];

module.exports = { meta, slides };
