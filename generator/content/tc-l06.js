'use strict';
/*
 * TC-L06 · The Digital World and Communication
 * Website: Advanced Topics › Topic C › Lesson 6 (reuses D4-L05 “The Digital World — Technology and Social Media”;
 * Topic C focus “Discuss devices, platforms, benefits, risks and patterns of use”; grammar: verbal nouns; object
 * pronouns; contrast). Picture match: website lesson game “Digital Life”.
 */
const C = require('./common');
const site = require('../site-data/d4-content.json').lessons.find((l) => l.code === 'D4-L05');
const game = require('../site-data/advanced-topic-visual-games.json').c06;
const G = site.grammar;
const { q, fromSite } = C;

const meta = C.meta({
  n: 6, fileTitle: 'Digital_World_Communication', chip: 'The Digital World',
  title: 'The Digital World and Communication', arabic: 'العَالَمُ الرَّقْمِيُّ وَالتَّوَاصُلُ',
  focus: 'Discuss devices, platforms, benefits, risks and patterns of use: “I” verbs with their fixed prepositions (أَتَفَاعَلُ مَعَ · أُعَلِّقُ عَلَى), verbal nouns and a balanced view (مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى).',
  icon: 'FaMobileScreen',
});
const NEXT = { nextCode: 'TC-L07', nextTitle: 'Documents, Texts and Digital Information', nextAr: 'الوَثَائِقُ وَالنُّصُوصُ وَالمَعْلُومَاتُ الرَّقْمِيَّةُ' };
const vc = (v) => v.replace(/^\{w\|([^}]*)\}(\S+)/, '{w|$1}{m|$2}');
const act = (he, I, tr, en, note, core) => ({ core, cells: [{ ar: vc(he), sub: tr }, en, vc(I), note || ''] });

const actionCols = [{ label: 'Verb (he)', w: 3.3, size: 22 }, { label: 'English', w: 2.8 }, { label: '“I” form', w: 3.0, size: 22 }, { label: 'Partner word', w: 3.23, italic: true }];

const slides = [
  C.titleSlide({
    n: 6,
    source: 'The website lesson reuses D4-L05 (The Digital World — Technology and Social Media) with the Topic C focus “Discuss devices, platforms, benefits, risks and patterns of use” (grammar: verbal nouns; object pronouns; contrast). The picture match is the website lesson game “Digital Life”; the “benefit–risk debate” is the website’s advanced application challenge.',
    support: `• D4-L05 is B1 language. CORE: devices and apps + “I” verbs from the website game (أُرْسِلُ رَسَائِلَ … بِالهَاتِفِ · أَسْتَعْمِلُ الحَاسُوبَ لِلدِّرَاسَةِ) and the rule “keep the verb with its partner preposition”. DEVELOP: verbal nouns and a balanced view (مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى). STRETCH: pronoun reference (عَلَيْهِ / فِيهَا), عَلَى الرَّغْمِ مِنْ أَنَّ and شَرِيطَةَ أَنْ.
• “He / I” verb tables with transliteration; picture match with icons; read-along listening with English.
• Website note: the website lists “follows” as يَتَابِعُ; the correct form is يُتَابِعُ (Form III) — used on the slides.
• Safeguarding: keep discussion of apps and social media general; remind students never to share passwords or personal details (the lesson content supports this message).`,
  }),
  C.welcomeSlide(),
  C.journeySlide({ teach: 'Digital words, “I” verbs and their partner words.', wedo: 'Picture match, build, sort, fix and listen.', next: 'TC-L07' }),
  C.doNow({
    questions: [
      q('Which word means “app”?', ['تَطْبِيقٌ', 'هَاتِفٌ', 'مَوْقِعٌ'], 'Prepared at home: تَطْبِيقٌ = app · هَاتِفٌ = phone · مَوْقِعٌ = website.'),
      q('What does كَلِمَةُ المُرُورِ mean?', ['password', 'message', 'website'], 'Prepared at home: كَلِمَةُ المُرُورِ = password.'),
      q('Choose the accurate advice.', ['يَنْبَغِي أَنْ نُقَلِّلَ البِلَاسْتِيكَ.', 'يَنْبَغِي أَنْ نُقَلِّلُ البِلَاسْتِيكَ.', 'يَنْبَغِي نُقَلِّلُ البِلَاسْتِيكَ.'], 'TC-L05: after أَنْ the verb ends in a fatḥa.'),
      q('What does يَتَفَاعَلُ مَعَ mean?', ['interacts with', 'depends on', 'leads to'], 'TC-L02: يَتَفَاعَلُ is always with مَعَ.'),
      q('Choose the accurate sentence.', ['يُؤَدِّي التَّلَوُّثُ إِلَى أَمْرَاضٍ.', 'يُؤَدِّي التَّلَوُّثُ فِي أَمْرَاضٍ.', 'يُؤَدِّي التَّلَوُّثُ مَعَ أَمْرَاضٍ.'], 'TC-L04: يُؤَدِّي is always with إِلَى.'),
    ],
    keyIdea: { text: 'Many verbs have a PARTNER word that never changes: يَتَفَاعَلُ مَعَ · يُعَلِّقُ عَلَى · يَبْحَثُ عَنْ.', ar: 'أَتَفَاعَلُ {k|مَعَ}  ·  أُعَلِّقُ {k|عَلَى}' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home (Flipped Learning follow-up). Questions 3–5 retrieve TC-L05, TC-L02 and TC-L04 — questions 4–5 are fixed verb + preposition pairs, today’s key idea.',
  }),
  C.objectivesSlide(site.objectives, {
    core: ['I can name 6 devices and apps and say what I use them for.', 'I keep each verb with its partner: أَتَفَاعَلُ مَعَ، أُعَلِّقُ عَلَى، أَبْحَثُ عَنْ.'],
    develop: ['I can give a benefit and a risk with مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى.', 'I can use verbal nouns: اسْتِخْدَامٌ، تَعَلُّمٌ، نَشْرٌ.'],
    stretch: ['I can refer back with عَلَيْهِ / فِيهَا.', 'I can qualify an opinion with شَرِيطَةَ أَنْ …'],
  }, 3, 'The route statements turn the general website objectives into this lesson’s concrete targets (website grammar rules 1–4 and the Topic C focus).'),
  C.keywordsSlide({
    text: '30 words from the website in 5 groups. Learn the CORE words first. Hear it → say it → see it → use it.',
    groups: [
      { head: 'GROUP 1', name: 'Devices and apps · 6' },
      { head: 'GROUP 2', name: 'Online world · 6' },
      { head: 'GROUP 3', name: 'Online actions · 10' },
      { head: 'GROUP 4', name: 'Benefits and risks · 6' },
      { head: 'GROUP 5', name: 'Verbal nouns · 5' },
    ],
    bridge: [
      { ar: 'مَعْلُومَاتٌ', urdu: 'معلومات', tr: 'maʿlūmāt', en: 'information' },
      { ar: 'تَعَلُّمٌ', urdu: 'تعلیم', tr: 'taʿlīm', en: 'learning' },
      { ar: 'صِحَّةٌ', urdu: 'صحت', tr: 'sehat', en: 'health' },
      { ar: 'مُفِيدٌ', urdu: 'مفید', tr: 'mufīd', en: 'useful' },
      { ar: 'مَخَاطِرُ', urdu: 'خطرات', tr: 'khatrāt', en: 'risks' },
    ],
    notes: `URDU BRIDGE: معلومات (information — مَعْلُومَاتٌ مُضَلِّلَةٌ = misinformation), تعلیم (education — same root as التَّعَلُّمُ), صحت (health — الصِّحَّةُ الرَّقْمِيَّةُ), مفید (useful), خطرات (dangers — مَخَاطِرُ).
Groups 2–4 are the website D4-L05 vocabulary; Group 1 adds هَاتِفٌ / حَاسُوبٌ / الإِنْتَرْنِتُ from the website game; Group 5 (verbal nouns — Topic C grammar focus) uses nouns from the website texts.`,
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1', title: 'Devices and apps', ar: 'الأَجْهِزَةُ وَالتَّطْبِيقَاتُ',
    items: [
      { n: 1, ar: 'هَاتِفٌ', en: 'phone', tr: 'hā-tif · pl. ha-wā-tif', tag: 'noun · m. (game)', core: true, forms: [{ l: 'sg.', ar: 'هَاتِفٌ' }, { l: 'pl.', ar: 'هَوَاتِفُ' }] },
      { n: 2, ar: 'حَاسُوبٌ', en: 'computer', tr: 'ḥā-sūb · pl. ḥa-wā-sīb', tag: 'noun · m. (game)', core: true, forms: [{ l: 'sg.', ar: 'حَاسُوبٌ' }, { l: 'pl.', ar: 'حَوَاسِيبُ' }] },
      { n: 3, ar: 'الإِنْتَرْنِتُ', en: 'the internet', tr: 'al-in-tar-nit', tag: 'noun (game)', core: true, note: 'عَبْرَ الإِنْتَرْنِتِ = online, via the internet' },
      { n: 4, ar: 'تَطْبِيقٌ', en: 'app', tr: 'taṭ-bīq · pl. taṭ-bī-qāt', tag: 'noun · m.', core: true, forms: [{ l: 'sg.', ar: 'تَطْبِيقٌ' }, { l: 'pl.', ar: 'تَطْبِيقَاتٌ' }] },
      { n: 5, ar: 'مَوْقِعٌ {m|إِلِكْتُرُونِ}{e|يٌّ}', en: 'website', tr: 'maw-qiʿ i-lik-tru-niyy · pl. ma-wā-qiʿ', tag: 'noun + nisba', core: true, forms: [{ l: 'sg.', ar: 'مَوْقِعٌ' }, { l: 'pl.', ar: 'مَوَاقِعُ' }] },
      { n: 6, ar: 'كَلِمَةُ المُرُورِ', en: 'password', tr: 'ka-li-mat al-mu-rūr', tag: 'iḍāfa', core: true, note: 'Also: كَلِمَةُ السِّرِّ' },
    ],
    notes: `KEY WORDS — devices and apps (website D4-L05 + the website game “Digital Life”). Hear → Say → See → Use.
Pink ending again: إِلِكْتُرُونِيٌّ is a nisba (electronic). كَلِمَةُ المُرُورِ = “word of passing” (iḍāfa, TC-L02).
Quick check: “Type the NUMBER of the thing you used today.”`,
  },
  {
    type: 'vocab', stage: 'teach', min: 1, eyebrow: 'Key words · Group 2 · Develop', title: 'The online world', ar: 'العَالَمُ الرَّقْمِيُّ',
    items: [
      { n: 7, ar: 'مِنَصَّةٌ', en: 'platform', tr: 'mi-naṣ-ṣa · pl. mi-naṣ-ṣāt', tag: 'noun · f.', forms: [{ l: 'sg.', ar: 'مِنَصَّةٌ' }, { l: 'pl.', ar: 'مِنَصَّاتٌ' }] },
      { n: 8, ar: 'التَّعَلُّمُ عَنْ بُعْدٍ', en: 'distance learning', tr: 'at-ta-ʿal-lum ʿan buʿd', tag: 'phrase' },
      { n: 9, ar: 'الذَّكَاءُ {m|الاصْطِنَاعِ}{e|يُّ}', en: 'artificial intelligence', tr: 'adh-dha-kāʾ al-iṣ-ṭi-nā-ʿiyy', tag: 'noun + nisba' },
      { n: 10, ar: 'شَبَكَةٌ {m|اجْتِمَاعِ}{e|يَّةٌ}', en: 'social network', tr: 'sha-ba-ka ij-ti-mā-ʿiy-ya', tag: 'noun + nisba' },
      { n: 11, ar: 'بَثٌّ مُبَاشِرٌ', en: 'live stream', tr: 'baththun mu-bā-shir', tag: 'noun + adjective' },
      { n: 12, ar: 'مُدَوَّنَةٌ', en: 'blog', tr: 'mu-daw-wa-na', tag: 'noun · f.' },
    ],
    notes: `KEY WORDS — the online world (website D4-L05 “Digital tools and 2028 vocabulary”). Develop / Stretch; Core students listen and repeat.
Also on the website: عَلَامَةٌ تِجَارِيَّةٌ / مَارْكَةٌ = brand.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Key words · Group 3 · online actions (1 of 2)', title: 'Online actions: he → I', ar: 'أَفْعَالٌ رَقْمِيَّةٌ',
    cols: actionCols,
    rows: [
      act('{w|يُ}رْسِلُ', '{w|أُ}رْسِلُ', 'yur-si-lu', 'sends', 'إِلَى (to someone)', true),
      act('{w|يَ}نْشُرُ', '{w|أَ}نْشُرُ', 'yan-shu-ru', 'posts, publishes', '—', true),
      act('{w|يُ}حَمِّلُ', '{w|أُ}حَمِّلُ', 'yu-ḥam-mi-lu', 'uploads', '—', true),
      act('{w|يُ}نَزِّلُ', '{w|أُ}نَزِّلُ', 'yu-naz-zi-lu', 'downloads', '—'),
      act('{w|يُ}تَابِعُ', '{w|أُ}تَابِعُ', 'yu-tā-bi-ʿu', 'follows', '—'),
    ],
    notes: `KEY WORDS — Online actions (website D4-L05). The blue letter is WHO: يُـ / يَـ = he, أُـ / أَـ = I. Change only the blue letter (the morning-routine rule).
Core: the three CORE rows — say “he … / I …” for each.
Website note: the website lists “follows” as يَتَابِعُ; the correct Form III form is يُتَابِعُ (used here).`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Key words · Group 3 · online actions (2 of 2)', title: 'Verbs with a partner word', ar: 'أَفْعَالٌ مَعَ حُرُوفِ الجَرِّ',
    cols: actionCols,
    rows: [
      act('{w|يَ}تَفَاعَلُ {k|مَعَ}', '{w|أَ}تَفَاعَلُ {k|مَعَ}', 'ya-ta-fā-ʿa-lu ma-ʿa', 'interacts with', 'always مَعَ', true),
      act('{w|يُ}عَلِّقُ {k|عَلَى}', '{w|أُ}عَلِّقُ {k|عَلَى}', 'yu-ʿal-li-qu ʿa-lā', 'comments on', 'always عَلَى', true),
      act('{w|يَ}بْحَثُ {k|عَنْ}', '{w|أَ}بْحَثُ {k|عَنْ}', 'yab-ḥa-thu ʿan', 'searches for', 'always عَنْ', true),
      act('{w|يَ}عْتَمِدُ {k|عَلَى}', '{w|أَ}عْتَمِدُ {k|عَلَى}', 'yaʿ-ta-mi-du ʿa-lā', 'relies on', 'always عَلَى'),
      act('{w|يُ}شَارِكُ', '{w|أُ}شَارِكُ', 'yu-shā-ri-ku', 'shares, takes part', 'فِي = takes part in'),
    ],
    notes: `KEY WORDS — verbs that keep a partner word (website D4-L05 “Online actions and their prepositions”). Teal = the partner word, which NEVER changes.
Teach as chunks: “interact-WITH”, “comment-ON”, “search-FOR”. Website rule: “Arabic digital verbs often govern a specific preposition. Changing it makes the phrase inaccurate.”
Core: the three CORE rows as fixed chunks.`,
  },
  {
    type: 'vocab', stage: 'teach', min: 1, eyebrow: 'Key words · Group 4', title: 'Benefits and risks', ar: 'الفَوَائِدُ وَالمَخَاطِرُ',
    items: [
      { n: 1, ar: 'الخُصُوصِيَّةُ', en: 'privacy', tr: 'al-khu-ṣū-ṣiy-ya', tag: 'noun · f.', core: true },
      { n: 2, ar: 'الأَمَانُ {m|الرَّقْمِ}{e|يُّ}', en: 'digital security', tr: 'al-a-mān ar-raq-miyy', tag: 'noun + nisba', core: true },
      { n: 3, ar: 'إِدْمَانُ الشَّاشَاتِ', en: 'screen addiction', tr: 'id-mān ash-shā-shāt', tag: 'iḍāfa', core: true, forms: [{ l: 'addiction', ar: 'إِدْمَانٌ' }, { l: 'screens', ar: 'الشَّاشَاتُ' }] },
      { n: 4, ar: 'مَعْلُومَاتٌ مُضَلِّلَةٌ', en: 'misinformation', tr: 'maʿ-lū-māt mu-ḍal-li-la', tag: 'noun + adjective' },
      { n: 5, ar: 'التَّنَمُّرُ {m|الإِلِكْتُرُونِ}{e|يُّ}', en: 'cyberbullying', tr: 'at-ta-nam-mur al-i-lik-tru-niyy', tag: 'noun + nisba' },
      { n: 6, ar: 'الصِّحَّةُ {m|الرَّقْمِ}{e|يَّةُ}', en: 'digital wellbeing', tr: 'aṣ-ṣiḥ-ḥa r-raq-miy-ya', tag: 'noun + nisba' },
    ],
    notes: `KEY WORDS — Digital benefits and risks (website D4-L05). Also on the website: مِنْ نَاحِيَةٍ (on the one hand) and مِنْ نَاحِيَةٍ أُخْرَى (on the other hand) — taught on the contrast slide.
Nisba again: رَقْمِيٌّ (digital, from رَقْم = number) — masculine الأَمَانُ الرَّقْمِيُّ vs feminine الصِّحَّةُ الرَّقْمِيَّةُ.
Safeguarding: if cyberbullying comes up, remind students who they can talk to in school; do not invite personal disclosures on open mic.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Key words · Group 5 · Develop · verbal nouns (Topic C grammar)', title: 'Verb → verbal noun (“-ing”)', ar: 'المَصْدَرُ',
    cols: [{ label: 'Verb (he)', w: 2.8, size: 22 }, { label: 'Verbal noun', w: 2.8, size: 22 }, { label: 'English', w: 2.3 }, { label: 'In a website phrase', w: 4.43, size: 18 }],
    rows: [
      { cells: [{ ar: 'يَسْتَخْدِمُ', sub: 'uses' }, { ar: 'اسْتِخْدَامٌ', sub: 'is-tikh-dām' }, 'using, use', 'اسْتِخْدَامُ كَلِمَةِ مُرُورٍ قَوِيَّةٍ'] },
      { cells: [{ ar: 'يَتَعَلَّمُ', sub: 'learns' }, { ar: 'تَعَلُّمٌ', sub: 'ta-ʿal-lum' }, 'learning', 'التَّعَلُّمُ عَنْ بُعْدٍ'] },
      { cells: [{ ar: 'يَنْشُرُ', sub: 'posts' }, { ar: 'نَشْرٌ', sub: 'nashr' }, 'posting', 'نَشْرُ العُنْوَانِ الشَّخْصِيِّ'] },
      { cells: [{ ar: 'يَتَوَاصَلُ', sub: 'communicates' }, { ar: 'تَوَاصُلٌ', sub: 'ta-wā-ṣul' }, 'communication', 'وَسَائِلُ التَّوَاصُلِ الاجْتِمَاعِيِّ'] },
      { cells: [{ ar: 'يُقَلِّلُ', sub: 'reduces' }, { ar: 'تَقْلِيلٌ', sub: 'taq-līl' }, 'reducing', 'تَقْلِيلُ وَقْتِ الشَّاشَةِ'] },
    ],
    notes: `KEY WORDS — verbal nouns (Topic C grammar focus for this lesson). A verbal noun (مَصْدَر) is the “-ing” noun of a verb. The website phrases come from the mission (اسْتِخْدَامُ كَلِمَةِ مُرُورٍ قَوِيَّةٍ · نَشْرُ العُنْوَانِ الشَّخْصِيِّ), vocabulary (التَّعَلُّمُ عَنْ بُعْدٍ), lesson title (وَسَائِلُ التَّوَاصُلِ الاجْتِمَاعِيِّ) and listening (تَقْلِيلُ وَقْتِ الشَّاشَةِ).
Develop: say the verb, then the noun. Stretch: make a verbal noun the subject of a sentence (اسْتِخْدَامُ الهَاتِفِ مُفِيدٌ).`,
  },
  {
    type: 'codeWord', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 1 · website rule “verb + fixed preposition”', title: 'Read the verb and its partner', ar: 'الفِعْلُ وَحَرْفُهُ',
    word: '{w|أَ}{m|تَفَاعَلُ} {k|مَعَ} المُعَلِّمِ', tr: 'a-ta-fā-ʿa-lu ma-ʿa l-mu-ʿal-lim · I interact with the teacher',
    parts: [
      { code: 'w', ar: 'أَـ', title: 'WHO? أَـ = I', text: 'Change the first letter for the person: أَتَفَاعَلُ (I) · يَتَفَاعَلُ (he).' },
      { code: 'm', ar: 'تَفَاعَلُ', title: 'MEANING', text: 'The rest of the verb carries the meaning: interact.' },
      { code: 'k', ar: 'مَعَ', title: 'PARTNER word', text: 'Each verb keeps its own partner: مَعَ · عَلَى · عَنْ. It never changes.' },
    ],
    notes: `GRAMMAR PART 1 — website rule “Keep the verb with its required preposition”: verb + fixed preposition. Arabic digital verbs often govern a specific preposition. Changing it makes the phrase inaccurate.
Think aloud: “Blue tells me WHO (I). Purple is the meaning. Teal is the partner word — I learn the verb and its partner together as one chunk.”
Misconception (website common mistakes): يَتَفَاعَلُ … عَلَى ✗ · يُعَلِّقُ … مَعَ ✗.`,
  },
  {
    type: 'peopleTable', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · verbs and their partners in website sentences', title: 'One verb, one partner', ar: 'فِعْلٌ وَاحِدٌ، حَرْفٌ وَاحِدٌ',
    heads: ['Verb', 'Partner', 'Website sentence'],
    rows: [
      { who: 'يَتَفَاعَلُ', whoEn: 'interacts', word: '{k|مَعَ}', sentence: 'يَتَفَاعَلُ الطُّلَّابُ {k|مَعَ} المُعَلِّمِ.', en: 'The students interact with the teacher.' },
      { who: 'يُعَلِّقُ', whoEn: 'comments', word: '{k|عَلَى}', sentence: 'يُعَلِّقُ المُسْتَخْدِمُ {k|عَلَى} المَنْشُورِ.', en: 'The user comments on the post.' },
      { who: 'يُرْسِلُ', whoEn: 'sends', word: '{k|إِلَى}', sentence: 'أُرْسِلُ رَسَائِلَ {k|إِلَى} أَصْدِقَائِي بِالهَاتِفِ.', en: 'I send messages to my friends by phone. (website game)' },
      { who: 'يَعْتَمِدُ', whoEn: 'relies', word: '{k|عَلَى}', sentence: 'لَا يَجِبُ أَنْ نَعْتَمِدَ {k|عَلَيْهِ} كُلِّيًّا.', en: 'We must not rely on it completely.' },
      { who: 'يُسَاعِدُ', whoEn: 'helps', word: '{k|عَلَى}', sentence: 'تُسَاعِدُنِي المِنَصَّةُ {k|عَلَى} التَّعَلُّمِ فِي أَيِّ مَكَانٍ.', en: 'The platform helps me learn anywhere.' },
    ],
    notes: `GRAMMAR PART 2 — verbs and their partners in website sentences (website rule examples, game, listening script).
Read each row; students repeat the verb + partner as ONE chunk.
Row 4 shows the partner with an attached pronoun: عَلَى + ـهِ = عَلَيْهِ (on it) — Stretch pronoun reference.
Row 5: تُسَاعِدُنِي = helps ME (ـنِي = me, an object pronoun — Topic C grammar focus).`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 3 · contrast and “it”', title: 'On the one hand … on the other', ar: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى',
    cards: [
      { chip: 'DEVELOP · CONTRAST', head: 'مِنْ نَاحِيَةٍ …', big: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', en: 'On the one hand … and on the other hand …', clue: 'Give a benefit first, then a risk, then your judgement (website rule “Balanced contrast”).' },
      { chip: 'STRETCH · “it” (m.)', color: '7B3FA0', head: 'عَلَيْهِ', big: 'المَوْقِعُ مُفِيدٌ … يُنْشَرُ عَلَيْهِ', en: 'The website is useful … (check) what is posted on it.', clue: 'Masculine noun → ـهُ / ـهِ: عَلَيْهِ.' },
      { chip: 'STRETCH · “it” (f.)', color: 'B83227', head: 'فِيهَا', big: 'المِنَصَّةُ آمِنَةٌ … فِيهَا', en: 'The platform is safe … (our privacy) on it.', clue: 'Feminine noun → ـهَا: فِيهَا · نَسْتَخْدِمُهَا.' },
    ],
    error: { text: 'The website’s common mistakes: the wrong partner word after the verb.', pairs: [['يَتَفَاعَلُ مَعَ', 'يَتَفَاعَلُ عَلَى'], ['يُعَلِّقُ عَلَى', 'يُعَلِّقُ مَعَ']] },
    notes: `GRAMMAR PART 3 — website rules “Balanced contrast” (present a benefit and a limitation before reaching a judgement) and “Pronoun reference” (refer back precisely: عَلَيْهِ for a masculine noun, عَلَيْهَا for a feminine noun).
Examples are the website rule examples (shortened on the cards; full sentences in the FLEX rules slide).
• CORE: listen. • DEVELOP: card 1. • STRETCH: cards 2–3.
Website application “Technology benefit–risk debate”: sort statements into benefit / risk / balanced, then defend a balanced viewpoint.`,
  },
  {
    type: 'ruleRows', stage: 'teach', flex: true, eyebrow: 'Grammar focus · Part 4 · website examples · FLEX', title: 'The four website rules with examples', ar: 'أَمْثِلَةُ القَوَاعِدِ',
    rows: G.rules.map((r) => ({ title: r.heading, formula: r.formula, examples: r.examples })),
    notes: `WEBSITE GRAMMAR RULES AND EXAMPLES (FLEX — revision or homework). Rule 3 is the Stretch concession: عَلَى الرَّغْمِ مِنْ أَنَّ + nominal clause (use أَنَّ with a noun or attached pronoun; the sentence that follows states the unexpected contrast).`,
  },
  C.quickCheck([fromSite(G.quiz[0]), fromSite(G.quiz[1]), fromSite(G.quiz[5]), fromSite(G.quiz[4])], 'website grammar quiz questions 1, 2, 6 and 5.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me describe how I use technology', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Which device?', ar: '{w|أَ}سْتَعْمِلُ الحَاسُوبَ', think: 'أَـ = I. From the website game.' },
      { head: 'What for?', ar: 'لِلدِّرَاسَةِ عَبْرَ الإِنْتَرْنِتِ', think: 'لِـ + verbal noun = for studying.' },
      { head: 'A benefit', ar: '{k|مِنْ نَاحِيَةٍ}، أَتَفَاعَلُ مَعَ المُعَلِّمِ', think: 'Keep مَعَ with أَتَفَاعَلُ.' },
      { head: 'A risk', ar: '{k|وَمِنْ نَاحِيَةٍ أُخْرَى}، أَحْتَاجُ إِلَى تَقْلِيلِ وَقْتِ الشَّاشَةِ', think: 'The other side: a risk (website listening).' },
    ],
    legend: ['w', 'k'], legendLabels: { w: 'WHO (I)', k: 'CONTRAST' },
    model: '{w|أَ}سْتَعْمِلُ الحَاسُوبَ لِلدِّرَاسَةِ عَبْرَ الإِنْتَرْنِتِ. {k|مِنْ نَاحِيَةٍ}، أَتَفَاعَلُ مَعَ المُعَلِّمِ، {k|وَمِنْ نَاحِيَةٍ أُخْرَى}، أَحْتَاجُ إِلَى تَقْلِيلِ وَقْتِ الشَّاشَةِ.',
    modelEn: 'I use the computer to study online. On the one hand, I interact with the teacher; on the other hand, I need to reduce screen time.',
    notes: `I DO (3 min) — teacher models with a think-aloud; students watch, then COPY the paragraph into their books.
Step 1 — “Which device? أَسْتَعْمِلُ الحَاسُوبَ — أَـ tells you it is me.”
Step 2 — “What for? لِلدِّرَاسَةِ = for studying — لِـ + a verbal noun.”
Step 3 — “A benefit: مِنْ نَاحِيَةٍ، أَتَفَاعَلُ مَعَ المُعَلِّمِ — the verb keeps its partner مَعَ.”
Step 4 — “A risk: وَمِنْ نَاحِيَةٍ أُخْرَى، أَحْتَاجُ إِلَى تَقْلِيلِ وَقْتِ الشَّاشَةِ.”
Built from website language: game (أَسْتَعْمِلُ الحَاسُوبَ لِلدِّرَاسَةِ عَبْرَ الإِنْتَرْنِتِ) and listening script (أَتَفَاعَلُ مَعَ المُعَلِّمِ … أَحْتَاجُ إِلَى تَقْلِيلِ وَقْتِ الشَّاشَةِ).`,
  },
  {
    type: 'models', stage: 'ido', min: 1, eyebrow: 'I do · model sentences from the website', title: 'Four sentences to borrow', ar: 'جُمَلٌ نَمُوذَجِيَّةٌ',
    rows: [
      { ar: game.items[0].sentence, en: 'I send messages to my friends by phone.', tip: 'Website game — a Core sentence.' },
      { ar: game.items[2].sentence, en: 'We must use a strong password.', tip: 'Website game — أَنْ + fatḥa (TC-L05).' },
      { ar: site.patterns[0].ar, en: 'The students interact with the teacher.', tip: 'Keep مَعَ with يَتَفَاعَلُ.' },
      { ar: site.patterns[2].ar, en: 'Although AI is useful, we must not rely on it completely.', tip: 'Stretch: concession + عَلَيْهِ.' },
    ],
    notes: `MODEL SENTENCES (1 min) — website lesson game and patterns. Students copy TWO that are useful for them.
• Core: copy 1 and 2 and change the device or the person. • Develop: copy 3 with a different verb and partner. • Stretch: copy 4 about a different technology.`,
  },
  C.gameSlide(game, {
    en: ['I send messages to my friends by phone.', 'I use the computer to study online.', 'We must use a strong password.'],
    icons: [[['fa6', 'FaMobileScreen', '1B3B6F'], ['fa6', 'FaEnvelope', '1D5FBF']], [['fa6', 'FaLaptop', '1B3B6F'], ['fa6', 'FaBook', '2E8B57']], [['fa6', 'FaLock', 'C77700'], ['fa6', 'FaKey', 'C77700']]],
    order: [2, 0, 1],
    notes: 'Key words to spot: بِالهَاتِفِ / رَسَائِلَ (phone / messages), الحَاسُوبَ / لِلدِّرَاسَةِ (computer / for studying), كَلِمَةَ مُرُورٍ (password).',
  }),
  {
    type: 'builder', stage: 'wedo', min: 3, eyebrow: 'We do · guided practice · sentence builder', title: 'Build the sentence', ar: 'اِبْنِ الجُمْلَةَ',
    rows: [
      { en: 'I send messages to my friends.', cols: [['يُرْسِلُ', 'أُرْسِلُ'], ['رَسَائِلَ', 'كَلِمَةَ المُرُورِ'], ['إِلَى أَصْدِقَائِي.', 'عَلَى أَصْدِقَائِي.']], key: [1, 0, 0], why: 'أُـ = I; يُرْسِلُ … إِلَى.' },
      { en: 'The user comments on the post.', cols: [['يُعَلِّقُ', 'يُنَزِّلُ'], ['المُسْتَخْدِمُ', 'المُعَلِّمَ'], ['مَعَ المَنْشُورِ.', 'عَلَى المَنْشُورِ.']], key: [0, 0, 1], why: 'يُعَلِّقُ always with عَلَى.' },
      { en: 'We must use a strong password.', cols: [['يَجِبُ أَنْ', 'يُؤَدِّي إِلَى'], ['نَسْتَخْدِمُ', 'نَسْتَخْدِمَ'], ['كَلِمَةَ مُرُورٍ قَوِيَّةً.', 'كَلِمَةَ مُرُورٍ قَوِيٌّ.']], key: [0, 1, 0], why: 'After أَنْ: fatḥa; قَوِيَّةً agrees with كَلِمَة (f.).' },
    ],
    answerSlide: { min: 0, eyebrow: 'We do · sentence builder answers', title: 'Check your sentences', ar: 'تَحَقَّقْ مِنْ جُمَلِكَ' },
    notes: `WE DO — sentence builder (3 min). Teacher-made from website sentences (game, patterns, quiz).
Students choose ONE box per column (start from Column 1 on the right) and type the letters, e.g. “1: B A A”. ↔ Rehearse 30s first.
Core: sentences 1–2. Develop / Stretch: sentence 3 and explain each wrong option.`,
  },
  {
    type: 'sorter', stage: 'wedo', flex: true, eyebrow: 'We do · website sorter', title: 'Tool, action or benefit/risk?', ar: 'صَنِّفْ',
    categories: ['Digital tools', 'Online actions', 'Benefits and risks'],
    items: [
      { ar: 'يُحَمِّلُ', cat: 1 }, { ar: 'الذَّكَاءُ الاصْطِنَاعِيُّ', cat: 0 }, { ar: 'الخُصُوصِيَّةُ', cat: 2 }, { ar: 'يَنْشُرُ', cat: 1 },
      { ar: 'كَلِمَةُ المُرُورِ', cat: 0 }, { ar: 'الأَمَانُ الرَّقْمِيُّ', cat: 2 }, { ar: 'يُنَزِّلُ', cat: 1 }, { ar: 'مَعْلُومَاتٌ مُضَلِّلَةٌ', cat: 2 }, { ar: 'عَلَامَةٌ تِجَارِيَّةٌ', cat: 0 },
    ],
    answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
    notes: `WE DO — website sorter (FLEX, 2 min). Clue for Core: a tile starting with يُـ / يَـ is an action (verb).
Website application “Benefit–risk debate”: for the benefits/risks column, students say whether each is a benefit or a risk, then defend one balanced view.`,
  },
  C.morePractice([fromSite(G.quiz[2], { n: 5 }), fromSite(G.quiz[3], { n: 6 }), fromSite(G.quiz[6], { n: 7 }), fromSite(G.quiz[7], { n: 8 })], 'website quiz questions 3, 4, 7, 8 (Stretch)'),
  C.repairSlide(site, [
    'What is wrong? Which partner word goes with يَتَفَاعَلُ?',
    'What is wrong? Which partner word goes with يُعَلِّقُ?',
    'What is wrong? The full connector is عَلَى الرَّغْمِ … أَنَّ — what is missing?',
  ]),
  C.listening(site, {
    coreTip: 'Listen twice. Core: questions 1, 2 and 3 — listen for ثَلَاثَ مَرَّاتٍ (three times), المُعَلِّم (teacher) and وَاجِبَاتِي (my homework).',
    routes: 'Core: questions 1–3. Develop / Stretch: all 6.',
    gloss: [
      ['أَسْتَخْدِمُ مِنَصَّةً لِلتَّعَلُّمِ عَنْ بُعْدٍ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ.', 'I use a platform for distance learning three times a week.'],
      ['أَتَفَاعَلُ مَعَ المُعَلِّمِ، وَأُحَمِّلُ وَاجِبَاتِي، وَأُعَلِّقُ عَلَى أَفْكَارِ زُمَلَائِي.', 'I interact with the teacher, upload my homework and comment on my classmates’ ideas.'],
      ['مِنْ نَاحِيَةٍ، تُسَاعِدُنِي المِنَصَّةُ عَلَى التَّعَلُّمِ فِي أَيِّ مَكَانٍ.', 'On the one hand, the platform helps me learn anywhere.'],
      ['وَمِنْ نَاحِيَةٍ أُخْرَى، أَحْتَاجُ إِلَى تَقْلِيلِ وَقْتِ الشَّاشَةِ.', 'On the other hand, I need to reduce screen time.'],
      ['لِذٰلِكَ أَسْتَخْدِمُ كَلِمَةَ مُرُورٍ قَوِيَّةً وَأَتَوَقَّفُ عَنِ الاسْتِخْدَامِ قَبْلَ النَّوْمِ.', 'So I use a strong password and I stop using it before sleep.'],
    ],
  }),
  C.speakingSlide(site, {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'أَيَّ تَطْبِيقٍ تَسْتَعْمِلُ كَثِيرًا؟ وَلِمَاذَا؟' },
      { route: 'develop', ar: site.speaking.prompts[0] },
      { route: 'develop', ar: site.speaking.prompts[1] },
      { route: 'stretch', ar: site.speaking.prompts[2] },
    ],
    stems: [
      { route: 'core', ar: 'أَسْتَعْمِلُ ______ لِـ ______ .' },
      { route: 'develop', ar: 'مِنْ نَاحِيَةٍ ______ ، وَمِنْ نَاحِيَةٍ أُخْرَى ______ .' },
      { route: 'stretch', ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَـ ______ .' },
      { route: 'sum', ar: 'هُوَ يَسْتَعْمِلُ / هِيَ تَسْتَعْمِلُ ______ .' },
    ],
    modelEn: ['What is your opinion of distance learning?', 'Developed answer'],
    notes: `Core prompt (teacher-made; it is the preparation question): “Which app do you use a lot, and why?” — answered with the Core stem, e.g. أَسْتَعْمِلُ تَطْبِيقًا لِلدِّرَاسَةِ.
Website note: the listening script on the website spells مَنْصَّةً; the read-along slide uses the standard vowelling مِنَصَّةً.`,
  }),
  C.routesSlide(site, {
    core: { amount: '4 sentences', how: 'Frames + word bank (next slide): أَسْتَعْمِلُ / أُرْسِلُ / أَبْحَثُ عَنْ … — the أَـ / أُـ “I” verbs with their partner words.' },
    develop: { amount: '6–8 sentences', how: 'One benefit and one risk with مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى; two verbs with their partner words; one verbal noun.' },
    stretch: { amount: '120–140 words', how: 'Website writing task: evaluate technology or social media with a qualified conclusion (شَرِيطَةَ أَنْ).' },
  }),
  C.framesSlide({
    core: [
      { en: 'I use my phone to …', ar: 'أَسْتَعْمِلُ هَاتِفِي لِـ ______ .' },
      { en: 'I send messages to …', ar: 'أُرْسِلُ رَسَائِلَ إِلَى ______ .' },
      { en: 'I search for … online.', ar: 'أَبْحَثُ عَنْ ______ عَلَى الإِنْتَرْنِتِ .' },
      { en: 'My favourite app is …', ar: 'تَطْبِيقِي المُفَضَّلُ هُوَ ______ .' },
      { en: 'I use a strong password.', ar: 'أَسْتَخْدِمُ كَلِمَةَ مُرُورٍ ______ .' },
    ],
    develop: [
      { en: 'On the one hand, …', ar: 'مِنْ نَاحِيَةٍ، ______ .' },
      { en: 'On the other hand, …', ar: 'وَمِنْ نَاحِيَةٍ أُخْرَى، ______ .' },
      { en: 'I interact with …', ar: 'أَتَفَاعَلُ مَعَ ______ .' },
      { en: 'I comment on …', ar: 'أُعَلِّقُ عَلَى ______ .' },
      { en: '… is useful, but …', ar: '______ مُفِيدٌ، وَلٰكِنْ ______ .' },
    ],
    bank: ['هَاتِفٌ', 'حَاسُوبٌ', 'الإِنْتَرْنِتُ', 'تَطْبِيقٌ', 'مَوْقِعٌ', 'رَسَائِلُ', 'أَصْدِقَائِي', 'الدِّرَاسَةِ', 'الخُصُوصِيَّةُ', 'وَقْتُ الشَّاشَةِ', 'مُفِيدٌ', 'خَطِيرٌ'],
  }),
  C.stretchSlide(site, [
    ['أَصْبَحَتِ التِّقْنِيَّةُ جُزْءًا أَسَاسِيًّا مِنْ حَيَاتِنَا', 'technology has become a basic part of our lives'],
    ['يُسَهِّلُ … الوُصُولَ إِلَى الدُّرُوسِ', '… makes access to lessons easier'],
    ['قَدْ تُؤَدِّي كَثْرَةُ الاسْتِخْدَامِ إِلَى …', 'too much use may lead to …'],
    ['قَدْ يَتَعَرَّضُ المُسْتَخْدِمُ لِـ …', 'the user may be exposed to …'],
    ['عَلَى الرَّغْمِ مِنْ أَنَّ … ، فَـ …', 'although …, …'],
    ['شَرِيطَةَ أَنْ نَسْتَخْدِمَهَا بِمَسْؤُولِيَّةٍ', 'provided that we use it responsibly'],
  ]),
  C.modelSlide(site,
    'Technology has become a basic part of our lives. On the one hand, distance learning makes access to lessons easier, and artificial intelligence helps to organise ideas. On the other hand, too much use may lead to screen addiction, and the user may be exposed to misleading information. Although platforms are useful, we must protect our privacy and use strong passwords. In my opinion, technology is positive provided that we use it responsibly.',
    ['a verb + its partner word', 'مِنْ نَاحِيَةٍ … أُخْرَى', 'a risk', 'شَرِيطَةَ أَنْ'],
    'Evidence: يُسَاعِدُ … عَلَى · تُؤَدِّي … إِلَى · يَتَعَرَّضُ … لِـ; the risks إِدْمَانِ الشَّاشَاتِ / مَعْلُومَاتٍ مُضَلِّلَةٍ; the qualified conclusion شَرِيطَةَ أَنْ نَسْتَخْدِمَهَا (ـهَا = technology, feminine).'),
  C.selfCheckSlide([
    { route: 'core', text: 'I can name devices and apps and say what I use them for: أَسْتَعْمِلُ … لِـ …' },
    { route: 'core', text: 'I keep each verb with its partner: أَتَفَاعَلُ مَعَ، أُعَلِّقُ عَلَى، أَبْحَثُ عَنْ.' },
    { route: 'develop', text: 'I give a benefit and a risk with مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى.' },
    { route: 'develop', text: site.success[2] },
    { route: 'stretch', text: 'I refer back with عَلَيْهِ / فِيهَا and qualify with شَرِيطَةَ أَنْ.' },
  ]),
  C.exitTicket([fromSite(site.final[0]), fromSite(site.final[1]), fromSite(site.final[2])], site.final.length),
  ...C.readingSlides(site, [
    ['أَصْبَحَ', 'became'], ['جُزْءٌ', 'a part'], ['المَفَاهِيمُ', 'concepts'], ['تَنْظِيمٌ', 'organising'], ['يُنْتِجُ', 'produces'], ['دَقِيقَةٌ', 'accurate'],
    ['التَّحَقُّقُ مِنَ', 'checking'], ['المَصَادِرُ', 'sources'], ['البَيَانَاتُ الشَّخْصِيَّةُ', 'personal data'], ['أَدَاةٌ', 'a tool'], ['شَرِيطَةَ أَنْ', 'provided that'],
  ]),
  C.prepSlide({
    ...NEXT,
    words: [['جَوَازُ سَفَرٍ', 'passport', ''], ['تَذْكِرَةٌ', 'ticket', 'pl. تَذَاكِرُ'], ['حَجْزٌ', 'booking', ''], ['مَوْعِدٌ', 'appointment', ''], ['رِسَالَةٌ', 'message, email', 'pl. رَسَائِلُ']],
    questionEn: 'Write one Arabic sentence: which documents do you need to travel?',
    questionAr: 'مَا الوَثَائِقُ الَّتِي تَحْتَاجُهَا لِلسَّفَرِ؟',
    homework: {
      core: 'Website · TC-L06 · play “Digital Life”, then the vocabulary mission.',
      develop: 'Write 5 sentences about how you use technology, with مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى.',
      stretch: 'Website · TC-L06 · the application mission and the reading “Responsible use of artificial intelligence”.',
    },
    wordsSource: 'The five words come from the website lesson game “Document Detective” and the website P3-L02 travel-documents vocabulary.',
  }),
  C.closeSlide(NEXT),
];

module.exports = { meta, slides };
