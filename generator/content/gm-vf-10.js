'use strict';
/* GM-VF-10 · Form X: Seeking, Using and Considering — website: Mastery & Revision › Grammar › Arabic Verb Forms › Form X (ista- before
 * the root: istafʿala; present yastafʿilu; verbal noun istifʿāl; ʿamila “work” vs istaʿmala “use”; istaghfara “seek forgiveness”; family
 * istakhdama, istaghfara, istaqbala; clinic: do not translate ista- as “ask for” in every verb — istaʿmala and istakhdama mean “use”;
 * apply: how you use technology for learning). Website self-check items used via W. Pattern extras, conjugation (incl. hollow
 * istaṭāʿa), contrast, sorter, reading and model are teacher-written on the website content. */
const G = require('./gm-common');
const V = require('./gm-vf-common');
const { q } = G;

const KEY = 'grammar__07a-verb-forms__form-10';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-VF-10', fileTitle: 'Form_X', title: 'Form X: Seeking, Using and Considering', arabic: 'الْوَزْنُ الْعَاشِرُ',
  focus: 'Form X puts ista- in front of the root: ʿamila (work) → istaʿmala (use), ghafara (forgive) → istaghfara (seek forgiveness). Present: yastaʿmilu. Ista- can mean “seek”, but often it is just its own word.',
  icon: 'FaLaptop',
});

const slides = G.gmLesson({
  code: 'GM-VF-10', site: KEY,
  support: `• Core: اِسْتَعْمَلَ · يَسْتَعْمِلُ and the family اِسْتَخْدَمَ · اِسْتَقْبَلَ · اِسْتَغْفَرَ for technology and daily life. Develop: present forms (أَسْتَخْدِمُ · تَسْتَقْبِلِينَ) and the verbal noun اِسْتِفْعَالٌ (اِسْتِعْمَالٌ · اِسْتِقْبَالٌ · اِسْتِخْدَامٌ). Stretch: Form I → X (غَفَرَ / اِسْتَغْفَرَ · فَادَ / اِسْتَفَادَ) and hollow Form X (اِسْتَطَاعَ · يَسْتَطِيعُ).
• Website clinic: ista- does NOT always mean “ask for”. Istaʿmala and istakhdama simply mean “use”.
• Islamic Studies link: أَسْتَغْفِرُ اللَّهَ — “I seek Allah’s forgiveness”: the clearest “seek” meaning of Form X.`,
  teach: 'Pattern card; family; conjugation; Form I vs X.',
  wedo: 'Work → use; sort Form X / look-alikes; repair.',
  next: { nextCode: 'GM-VF-R', nextTitle: 'Optional Morphology Reference', nextAr: 'مَرْجِعٌ صَرْفِيٌّ اخْتِيَارِيٌّ' },
  doNow: {
    questions: [
      q('Which verb is Form IX?', ['اِحْمَرَّ', 'أَحْمَرُ', 'حَمَّرَ'], 'Doubled last letter (GM-VF-09).'),
      q('ʿAmila = to work. Istaʿmala = …', ['to use', 'to work again', 'to make someone work'], 'The prep question.'),
      q('Which letters were added at the front of اِسْتَعْمَلَ?', ['i-s-t-a (ista-)', 'i-n (in-)', 'ta- only'], 'ista- + ʿ-m-l.'),
      q('Istaqbala means …', ['to receive / welcome', 'to accept', 'to meet each other'], 'Prep word.'),
      q('Istaghfara means …', ['to seek forgiveness', 'to forgive', 'to forget'], 'Prep word.'),
    ],
    keyIdea: { text: 'Form X = ista- + root (istafʿala). Present = yasta- … (yastafʿilu). Verbal noun = istifʿāl.', ar: '{k|عَمِلَ} ‖ {e|اِسْتَعْمَلَ} · {e|يَسْتَعْمِلُ}' },
    retrieves: 'Teacher-written retrieval from GM-VF-09 and its prep words (istaʿmala, istakhdama, istaqbala, istaghfara).',
  },
  objectives: ['Recognise Form X by ista- before the root.', 'Form the present with yasta-.', 'Explain how you use technology with Form X.', 'Know that ista- does not always mean “ask for”.'],
  routes: {
    core: ['I say I use the computer.', 'I write one sentence about an app I use.'],
    develop: ['I conjugate istakhdama in past and present.', 'I use istiʿmāl and istiqbāl.'],
    stretch: ['I use istaṭāʿa (can) with an + subjunctive.', 'I compare ghafara and istaghfara.'],
  },
  terms: {
    items: [
      { ar: 'الْوَزْنُ الْعَاشِرُ', en: 'Form X', note: 'اِسْتَفْعَلَ' },
      { ar: 'الطَّلَبُ', en: 'seeking (one Form X meaning)', note: 'اِسْتَغْفَرَ' },
      { ar: 'اِسْتِفْعَالٌ', en: 'Form X verbal noun', note: 'اِسْتِعْمَالٌ' },
      { ar: 'مُسْتَفْعِلٌ', en: 'Form X doer', note: 'مُسْتَخْدِمٌ' },
      { ar: 'مُسْتَفْعَلٌ', en: 'Form X affected (used)', note: 'مُسْتَعْمَلٌ' },
      { ar: 'التِّقْنِيَّةُ', en: 'technology', note: 'أَسْتَخْدِمُ التِّقْنِيَّةَ' },
    ],
  },
  explain: [
    V.patternCard({
      roman: 'X', title: 'ista- before the root', ar: 'اِسْتَفْعَلَ · يَسْتَفْعِلُ',
      template: ['اِسْتَفْعَلَ', 'يَسْتَفْعِلُ', 'اِسْتِفْعَالٌ', 'مُسْتَفْعِلٌ', 'اِسْتَفْعِلْ'],
      model: ['اِسْتَعْمَلَ', 'يَسْتَعْمِلُ', 'اِسْتِعْمَالٌ', 'مُسْتَعْمِلٌ', 'اِسْتَعْمِلْ'], meaning: 'to use',
      more: [['to use / employ', 'اِسْتَخْدَمَ', 'يَسْتَخْدِمُ', 'اِسْتِخْدَامٌ', 'مُسْتَخْدِمٌ', 'اِسْتَخْدِمْ'], ['to receive / welcome', 'اِسْتَقْبَلَ', 'يَسْتَقْبِلُ', 'اِسْتِقْبَالٌ', 'مُسْتَقْبِلٌ', 'اِسْتَقْبِلْ'], ['to seek forgiveness', 'اِسْتَغْفَرَ', 'يَسْتَغْفِرُ', 'اِسْتِغْفَارٌ', 'مُسْتَغْفِرٌ', 'اِسْتَغْفِرْ']],
      foot: 'Website: the regular past begins ista- and the present yasta-. The verbal noun often follows istifʿāl. Mustakhdim = user (of an app!); mustaʿmal = used (GM-V-12).',
      notes: 'PART 1 (3 min) — website “Root and pattern”. Mustaqbal (future) comes from the same root as istaqbala.',
    }),
    V.familyTable({
      roman: 'X', title: 'The Form X family', ar: 'أُسْرَةُ الْوَزْنِ الْعَاشِرِ',
      rows: [
        ['اِسْتَعْمَلَ · يَسْتَعْمِلُ', 'to use', 'أَسْتَعْمِلُ الْحَاسُوبَ لِلدِّرَاسَةِ.'],
        ['اِسْتَخْدَمَ · يَسْتَخْدِمُ', 'to use / employ', 'اِسْتَخْدَمَتْ سَلْمَى التَّطْبِيقَ أَمْسِ.'],
        ['اِسْتَقْبَلَ · يَسْتَقْبِلُ', 'to receive / welcome', 'يَسْتَقْبِلُ الْمُوَظَّفُ الزُّوَّارَ فِي الْمَكْتَبِ.'],
        ['اِسْتَغْفَرَ · يَسْتَغْفِرُ', 'to seek forgiveness', 'أَسْتَغْفِرُ اللَّهَ بَعْدَ الصَّلَاةِ.'],
        ['اِسْتَطَاعَ · يَسْتَطِيعُ', 'to be able (can)', 'لَا أَسْتَطِيعُ أَنْ أَنَامَ مُبَكِّرًا.'],
        ['اِسْتَمْتَعَ · يَسْتَمْتِعُ', 'to enjoy', 'اِسْتَمْتَعْنَا بِالرِّحْلَةِ.'],
      ],
      foot: 'Website: ʿamila means to work; istaʿmala means to use; istaghfara means to seek forgiveness — different uses of the same derivational family.',
      notes: 'PART 2 (4 min) — website “Learn the family” (first three examples are the website sentences).',
    }),
    V.conjTable({
      roman: 'X', verb: 'istakhdama', title: 'The i- goes; ista- becomes -sta-', ar: 'تَصْرِيفُ «اِسْتَخْدَمَ»',
      rows: [
        ['أَنَا', 'اِسْتَخْدَمْتُ', 'أَسْتَخْدِمُ', 'a- + sta-'],
        ['هُوَ', 'اِسْتَخْدَمَ', 'يَسْتَخْدِمُ', 'ya- + sta-'],
        ['هِيَ', 'اِسْتَخْدَمَتْ', 'تَسْتَخْدِمُ', 'ta- + sta-'],
        ['نَحْنُ', 'اِسْتَخْدَمْنَا', 'نَسْتَخْدِمُ', 'na- + sta-'],
        ['هُمْ', 'اِسْتَخْدَمُوا', 'يَسْتَخْدِمُونَ', 'ya- … -ūna'],
        ['أَنَا', 'اِسْتَطَعْتُ', 'أَسْتَطِيعُ', 'hollow istaṭāʿa'],
      ],
      foot: 'Website “Look closely”: istaʿmala / yastaʿmilu and istakhdama / yastakhdimu share the Form X pattern but have different roots — learn them as separate vocabulary.',
      notes: 'PART 3 (3 min). Last row Stretch: istaṭāʿa (ṭ-w-ʿ, hollow) — the long vowel shortens before -tu (GM-V-02).',
    }),
  ],
  quick: [
    W(/Self-check/, 0, { prompt: 'Which pair is Form X?', feedback: 'Form X begins ista- in the past and yasta- in the present.' }),
    W(/Self-check/, 1, { prompt: 'Choose the verbal noun of istakhdama.', feedback: 'Istikhdām names the act of using.' }),
    q('Choose “she uses the app”.', ['تَسْتَخْدِمُ التَّطْبِيقَ', 'تَخْدِمُ التَّطْبِيقَ', 'اِسْتَخْدِمِ التَّطْبِيقَ'], 'ta- + sta-.'),
    q('Choose “we welcomed the guests”.', ['اِسْتَقْبَلْنَا الضُّيُوفَ', 'قَبِلْنَا الضُّيُوفَ', 'نَسْتَقْبِلُ الضُّيُوفَ'], 'Past + -nā.'),
  ],
  quickNote: 'website Self-check items, plus two teacher items.',
  ido: {
    title: 'Watch me explain how I use technology',
    steps: [
      { head: 'Form I', ar: 'عَمِلَ', think: 'Work.' },
      { head: 'Form X', ar: 'اِسْتَعْمَلَ', think: 'ista- + root: use.' },
      { head: 'Present', ar: 'أَسْتَعْمِلُ', think: 'a- + sta-.' },
      { head: 'Past', ar: 'اِسْتَخْدَمْتُ', think: 'i- returns in the past.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'FORM X', e: 'OTHER' },
    model: '{k|أَسْتَعْمِلُ} الْحَاسُوبَ لِلدِّرَاسَةِ، وَ{k|أَسْتَخْدِمُ} تَطْبِيقًا لِتَعَلُّمِ الْعَرَبِيَّةِ. أَمْسِ {k|اسْتَخْدَمْتُ} التَّطْبِيقَ لِمُرَاجَعَةِ الْكَلِمَاتِ، لِأَنَّ {e|الْمُمَارَسَةَ} مُفِيدَةٌ.',
    modelEn: 'I use the computer for studying, and I use an app to learn Arabic. Yesterday I used the app to review words, because practice is useful.',
    notes: 'Website “Apply the form” model answer (amsi stakhdamtu — the linking i- is silent after a word).',
  },
  models: [
    { ar: 'أَسْتَعْمِلُ الْحَاسُوبَ لِلدِّرَاسَةِ.', en: 'I use the computer for studying.', tip: 'Website.' },
    { ar: 'يَسْتَقْبِلُ الْمُوَظَّفُ الزُّوَّارَ.', en: 'The employee receives the visitors.', tip: 'Website.' },
    { ar: 'أَسْتَغْفِرُ اللَّهَ.', en: 'I seek Allah’s forgiveness.', tip: 'Seeking.' },
    { ar: 'هَلْ تَسْتَطِيعُ أَنْ تُسَاعِدَنِي؟', en: 'Can you help me?', tip: 'istaṭāʿa + an.' },
  ],
  wedoSlides: [
    V.contrastTable({
      roman: 'X', title: 'What ista- adds', ar: 'مِنَ الْأَوَّلِ إِلَى الْعَاشِرِ',
      rows: [
        ['عَمِلَ', 'to work', 'اِسْتَعْمَلَ', 'to use'],
        ['غَفَرَ', 'to forgive', 'اِسْتَغْفَرَ', 'to seek forgiveness'],
        ['قَبِلَ', 'to accept', 'اِسْتَقْبَلَ', 'to receive / welcome'],
        ['خَدَمَ', 'to serve', 'اِسْتَخْدَمَ', 'to use / employ'],
        ['فَهِمَ', 'to understand', 'اِسْتَفْهَمَ', 'to ask / inquire'],
      ],
      foot: 'Sometimes ista- = seek / ask (istaghfara, istafhama). Sometimes the meaning is simply its own (istaʿmala = use) — website clinic.',
      notes: 'WE DO (3 min). Students sort the five pairs: “seek / ask” meaning or “own” meaning.',
    }),
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · is ista- added before three root letters?', title: 'Form X, or not?', ar: 'عَاشِرٌ أَمْ لَا؟',
      categories: ['Form X (ista- + root)', 'Not Form X'],
      items: [['اِسْتَعْمَلَ', 0], ['اِسْتَخْدَمَ', 0], ['اِسْتَقْبَلَ', 0], ['اِسْتَغْفَرَ', 0], ['اِسْتَمَعَ', 1], ['اِسْتَلَمَ', 1], ['اِنْكَسَرَ', 1], ['تَعَلَّمَ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Istamaʿa (s-m-ʿ) and istalama (s-l-m, to receive a parcel) are Form VIII — the s belongs to the root (GM-VF-08).',
    },
  ],
  mistakes: [
    { wrong: 'أَسْتَعْمِلُ بِالْحَاسُوبِ', right: 'أَسْتَعْمِلُ الْحَاسُوبَ', why: 'Istaʿmala takes a direct object.' },
    { wrong: 'هُوَ يُسْتَعْمِلُ الْهَاتِفَ', right: 'هُوَ يَسْتَعْمِلُ الْهَاتِفَ', why: 'Form X present: ya- (yustaʿmalu is the passive).' },
    { wrong: 'أَسْتَطِيعُ أَسْبَحُ', right: 'أَسْتَطِيعُ أَنْ أَسْبَحَ', why: 'Istaṭāʿa + an + subjunctive (GM-V-10).' },
  ],
  hints: ['Preposition or object?', 'ya- or yu-?', 'What follows “can”?'],
  practice: [
    W(/Self-check/, 2, { prompt: 'Which statement is accurate?', feedback: 'Learn the meaning alongside the pattern.' }),
    q('What is the verbal noun of اِسْتَقْبَلَ?', ['اِسْتِقْبَالٌ', 'قَبُولٌ', 'مُسْتَقْبَلٌ'], 'istifʿāl.'),
    q('Choose “they enjoyed the trip”.', ['اِسْتَمْتَعُوا بِالرِّحْلَةِ', 'تَمَتَّعُوا الرِّحْلَةَ', 'يَسْتَمْتِعُونَ الرِّحْلَةَ'], 'Past + -ū; istamtaʿa + bi-.'),
    q('Choose “I can’t sleep early”.', ['لَا أَسْتَطِيعُ أَنْ أَنَامَ مُبَكِّرًا', 'لَا أَسْتَطِيعُ أَنَامُ مُبَكِّرًا', 'لَا اِسْتَطَعْتُ أَنْ أَنَامَ'], 'an + subjunctive.'),
  ],
  practiceLabel: 'website Self-check item and teacher-written questions',
  read: {
    title: 'Technology and me', label: 'reading for Form X (teacher-written blog)',
    text: 'أَسْتَخْدِمُ هَاتِفِي كُلَّ يَوْمٍ، وَلَكِنْ بِحِكْمَةٍ. أَسْتَعْمِلُ تَطْبِيقًا لِلْقُرْآنِ، وَأَسْتَمْتِعُ بِالِاسْتِمَاعِ إِلَى التِّلَاوَةِ. فِي الْمَدْرَسَةِ نَسْتَعْمِلُ الْحَوَاسِيبَ فِي الْعُلُومِ. أَمْسِ اِسْتَقْبَلَتْ مَدْرَسَتُنَا مُهَنْدِسَةً مِنْ شَرِكَةِ تِقْنِيَّةٍ، وَقَالَتْ: «تَسْتَطِيعُونَ أَنْ تَكُونُوا مُبْدِعِينَ!». قَبْلَ النَّوْمِ أُغْلِقُ الْهَاتِفَ وَأَسْتَغْفِرُ اللَّهَ.',
    glossary: [['بِحِكْمَةٍ', 'wisely'], ['التِّلَاوَةِ', 'recitation'], ['الْحَوَاسِيبَ', 'computers'], ['مُبْدِعِينَ', 'creative']],
    task: 'Website: explain how you use technology for learning. First, underline every Form X verb here.',
    questions: [
      q('What does the writer use an app for?', ['the Qur’an', 'science', 'games'], 'Tatbīqan li-l-Qurʾān.'),
      q('Who did the school welcome?', ['an engineer from a tech company', 'a new teacher', 'parents'], 'Istaqbalat … muhandisa.'),
      q('What does the writer do before sleeping?', ['closes the phone and seeks forgiveness', 'uses the app', 'reads science'], 'Ughliqu … wa-astaghfiru llāh.'),
      q('Which word is a Form VIII verbal noun, not Form X?', ['الِاسْتِمَاعِ', 'أَسْتَعْمِلُ', 'اِسْتَقْبَلَتْ'], 'istimāʿ: s-m-ʿ + t (Form VIII).'),
    ],
    qNote: 'Teacher-written blog for the website “Apply the form” task; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: how I use technology', source: 'website “Apply the form”',
    prompts: [
      { route: 'core', ar: 'مَاذَا تَسْتَعْمِلُ لِلدِّرَاسَةِ؟' },
      { route: 'develop', ar: 'أَيَّ تَطْبِيقٍ اسْتَخْدَمْتَ أَمْسِ؟ وَلِمَاذَا؟' },
      { route: 'stretch', ar: 'هَلْ تَسْتَطِيعُ أَنْ تَعِيشَ بِلَا هَاتِفٍ؟ لِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَسْتَعْمِلُ ______ لِلدِّرَاسَةِ.' },
      { route: 'develop', ar: 'أَمْسِ اسْتَخْدَمْتُ ______ لِأَنَّ ______ .' },
      { route: 'stretch', ar: 'أَسْتَطِيعُ / لَا أَسْتَطِيعُ أَنْ ______ لِأَنَّ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَاذَا تَسْتَعْمِلِينَ لِلدِّرَاسَةِ؟', en: 'What do you use for studying? (to a girl)' },
      { who: 'B', ar: 'أَسْتَعْمِلُ الْحَاسُوبَ وَتَطْبِيقًا لِلْكَلِمَاتِ. أَمْسِ اسْتَخْدَمْتُهُ سَاعَةً، وَاسْتَمْتَعْتُ كَثِيرًا!', en: 'I use the computer and a vocabulary app. Yesterday I used it for an hour, and I enjoyed it a lot!' },
    ],
    notes: 'Website: two Form X verbs, a reason and a past-time expression.',
  },
  write: {
    siteTask: 'Write a short explanation of how you use technology for learning. Include two Form X verbs, a reason and a past-time expression.',
    core: { amount: '3 sentences', task: 'Website task.', how: 'astaʿmilu · astakhdimu · amsi.' },
    develop: { amount: '6 sentences', task: 'Add istaqbala, istamtaʿa and a verbal noun.', how: 'istikhdām · istiʿmāl.' },
    stretch: { amount: '8 sentences', task: 'A technology blog with five Form X verbs, including istaṭāʿa + an.', how: 'One Form I / X pair.' },
  },
  frames: {
    core: [
      { en: 'I use … for studying', ar: 'أَسْتَعْمِلُ ______ لِلدِّرَاسَةِ.' },
      { en: 'Yesterday I used …', ar: 'أَمْسِ اسْتَخْدَمْتُ ______ .' },
      { en: 'I enjoy …', ar: 'أَسْتَمْتِعُ ______ .' },
      { en: 'I can …', ar: 'أَسْتَطِيعُ أَنْ ______ .' },
    ],
    develop: [
      { en: 'Our school welcomed …', ar: 'اِسْتَقْبَلَتْ مَدْرَسَتُنَا ______ .' },
      { en: 'Using … is useful', ar: 'اِسْتِعْمَالُ ______ مُفِيدٌ.' },
      { en: 'Users of the app …', ar: 'مُسْتَخْدِمُو التَّطْبِيقِ ______ .' },
      { en: 'I seek forgiveness when …', ar: 'أَسْتَغْفِرُ اللَّهَ عِنْدَمَا ______ .' },
    ],
    bank: ['اِسْتَعْمَلَ · يَسْتَعْمِلُ', 'اِسْتَخْدَمَ · يَسْتَخْدِمُ', 'اِسْتَقْبَلَ · يَسْتَقْبِلُ', 'اِسْتَغْفَرَ · يَسْتَغْفِرُ', 'اِسْتَطَاعَ · يَسْتَطِيعُ', 'اِسْتَمْتَعَ · يَسْتَمْتِعُ', 'اِسْتِعْمَالٌ', 'مُسْتَخْدِمٌ', 'تَطْبِيقٌ'],
  },
  stretchTask: {
    task: 'Write a technology blog with five Form X verbs, including istaṭāʿa + an, and one Form I / Form X pair.',
    checklist: ['Five Form X verbs (ista- + root).', 'Present with yasta- / asta- / nasta-.', 'istaṭāʿa + an + subjunctive.', 'One verbal noun (istiʿmāl, istikhdām).', 'One Form I / X pair (ʿamila / istaʿmala).'],
    phrases: [['بِحِكْمَةٍ', 'wisely'], ['لِتَعَلُّمِ', 'to learn'], ['فِي الْوَقْتِ نَفْسِهِ', 'at the same time'], ['مِنْ جِهَةٍ أُخْرَى', 'on the other hand'], ['التِّقْنِيَّةُ الْحَدِيثَةُ', 'modern technology'], ['أَنْصَحُ بِـ', 'I recommend']],
  },
  model: {
    text: 'التِّقْنِيَّةُ جُزْءٌ مُهِمٌّ مِنْ تَعَلُّمِي. أَسْتَعْمِلُ الْحَاسُوبَ لِكِتَابَةِ الْوَاجِبَاتِ، وَأَسْتَخْدِمُ تَطْبِيقًا لِحِفْظِ الْقُرْآنِ. أَمْسِ اسْتَقْبَلْنَا فِي الصَّفِّ مُبَرْمِجًا شَابًّا، وَاسْتَمْتَعْنَا بِحَدِيثِهِ عَنِ الذَّكَاءِ الِاصْطِنَاعِيِّ. قَالَ إِنَّنَا نَسْتَطِيعُ أَنْ نَصْنَعَ تَطْبِيقَاتٍ مُفِيدَةً. وَلَكِنْ مِنْ جِهَةٍ أُخْرَى، اِسْتِعْمَالُ الْهَاتِفِ كَثِيرًا يُضِرُّ بِالصِّحَّةِ، لِذَلِكَ أَعْمَلُ بِلَا شَاشَاتٍ بَعْدَ الْعِشَاءِ.',
    en: 'Technology is an important part of my learning. I use the computer to write homework, and I use an app to memorise the Qur’an. Yesterday we welcomed a young programmer to our class, and we enjoyed his talk about artificial intelligence. He said we can make useful apps. But on the other hand, using the phone a lot harms health, so I work without screens after ʿIshāʾ.',
    find: ['Form X present', 'Form X past', 'istifʿāl noun', 'Form I verb (same root)'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'My Form X verbs start with ista- (past) or yasta- (present).' },
    { route: 'core', text: 'I used istaʿmala with a direct object.' },
    { route: 'develop', text: 'I used a verbal noun like istikhdām.' },
    { route: 'develop', text: 'I did not translate ista- as “ask for” every time.' },
    { route: 'stretch', text: 'I used istaṭāʿa + an + subjunctive.' },
  ],
  exit: [
    q('Choose “I use the phone”.', ['أَسْتَعْمِلُ الْهَاتِفَ', 'أَعْمَلُ الْهَاتِفَ', 'اِسْتَعْمَلُ الْهَاتِفَ'], 'a- + sta-.'),
    q('Which is Form X?', ['اِسْتَقْبَلَ', 'اِسْتَمَعَ', 'اِسْتَلَمَ'], 'ista- + q-b-l.'),
    q('What does اِسْتَغْفَرَ mean?', ['to seek forgiveness', 'to forgive', 'to use'], 'Ista- = seek.'),
  ],
  mastery: false,
  prep: {
    words: [['فَعَلَ', 'template Form I', 'كَتَبَ'], ['فَعَّلَ', 'template Form II', 'عَلَّمَ'], ['تَفَعَّلَ', 'template Form V', 'تَعَلَّمَ'], ['اِسْتَفْعَلَ', 'template Form X', 'اِسْتَعْمَلَ'], ['الْمِيزَانُ', 'the f-ʿ-l template', '—']],
    questionEn: 'Can you name the ten templates from memory? Try I–X before the reference lesson.',
    questionAr: 'فَعَلَ · فَعَّلَ · ______',
    homework: {
      core: 'Write five sentences with istaʿmala, istakhdama and istaqbala.',
      develop: 'Conjugate istamtaʿa in past and present for six persons.',
      stretch: 'A technology blog with five Form X verbs.',
    },
    wordsSource: 'The five words prepare GM-VF-R (website Verb Forms: optional morphology reference).',
  },
  remember: 'Remember: Form X = ista- + root (istafʿala) · present yastafʿilu · noun istifʿāl · ista- can mean “seek” (istaghfara) — or just its own meaning (istaʿmala = use) · istamaʿa is Form VIII.',
});

module.exports = { meta, slides };
