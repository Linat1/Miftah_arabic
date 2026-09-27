'use strict';
/*
 * F2-L08 · Reading and Writing Personal Profiles
 * Website: Pathways › Foundation › F2 › Lesson 8. From “I” to “he / she”: ـهُ / ـهَا, يـ / تـ verbs (lives, studies,
 * speaks, likes, reads, writes), profile vocabulary, school and interests, connectors (وَلَكِنْ، مَعَ), Profile Builder
 * (12), Noor listening, Ahmed (vowelled) and Sarah (unvowelled) profiles, “Who is this person?” speaking, 60–80-word profile.
 */
const F = require('./f2-common');
const game = require('../site-data/pathway-visual-games.json')['f2-l08'];
const { q, bank, banks } = F;

const meta = F.meta({
  n: 8, fileTitle: 'Personal_Profiles', chip: 'Personal Profiles',
  title: 'Reading and Writing Personal Profiles', arabic: 'قِرَاءَةُ وَكِتَابَةُ البِطَاقَاتِ الشَّخْصِيَّةِ',
  focus: 'Move from “I” to “he” and “she”: read profiles by scanning for information categories, recognise ـهُ / ـهَا and يـ / تـ verbs, and write a connected 60–80-word profile.',
  icon: 'FaAddressCard', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F2-L09', nextTitle: 'Listening to Personal Introductions', nextAr: 'الاِسْتِمَاعُ إِلَى التَّعْرِيفَاتِ' };
const rounds = banks.l08.rounds.map((r) => F.w({ ...r, q: `${r.prompt} ${r.detail}` }));
const roles = banks.l08.roles;
const V = (en, i, he, she, core) => ({ core, cells: [{ ar: `{w|${i.slice(0, 2)}}${i.slice(2)}` }, { ar: `{w|${he.slice(0, 2)}}${he.slice(2)}` }, { ar: `{e|${she.slice(0, 2)}}${she.slice(2)}` }, en] });

const site = {
  speaking: {
    context: 'Who is this person?',
    model: [
      ['هُوَ', 'اِسْمُهُ أَحْمَدُ، وَعُمْرُهُ ثَلَاثَ عَشْرَةَ سَنَةً. هُوَ مِصْرِيٌّ، وَيَعِيشُ فِي لَنْدَنَ.', 'His name is Ahmed, and he is 13. He is Egyptian, and he lives in London.'],
      ['هِيَ', 'اِسْمُهَا سَارَةُ، وَعُمْرُهَا اِثْنَتَا عَشْرَةَ سَنَةً. هِيَ بَرِيطَانِيَّةٌ، وَتَعِيشُ فِي مَانْشِسْتَرَ.', 'Her name is Sarah, and she is 12. She is British, and she lives in Manchester.'],
    ],
  },
  writing: {
    prompt: 'Website writing workshop: write a 60–80-word profile about yourself (first person) or an invented person (third person): identity, residence, school or languages, interests and a final description.',
    checklist: ['هُوَ / هِيَ used accurately.', 'His / her endings: ـهُ or ـهَا.', 'Verbs start with يـ (he) or تـ (she).', 'At least three connectors (وَ، أَيْضًا، وَلَكِنْ، مَعَ).'],
    model: 'اِسْمُهُ أَحْمَدُ، وَعُمْرُهُ ثَلَاثَ عَشْرَةَ سَنَةً. هُوَ مِصْرِيٌّ، وَيَعِيشُ فِي لَنْدَنَ مَعَ أُسْرَتِهِ. يَدْرُسُ فِي مَدْرَسَةِ الرَّشِيدِ، وَيَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ. يُحِبُّ القِرَاءَةَ وَكُرَةَ القَدَمِ، وَلَكِنْ هِوَايَتُهُ المُفَضَّلَةُ هِيَ القِرَاءَةُ. هُوَ طَالِبٌ ذَكِيٌّ وَلَطِيفٌ.',
  },
  differentiation: {
    core: 'At least six accurate sentences: name, age, country, city, school or language, one hobby.',
    develop: '60–80 words with two hobbies, a favourite detail and at least three connectors.',
    stretch: 'An unvowelled or selectively vowelled third-person profile with a school subject and free-time detail.',
  },
  mistakes: [
    { wrong: 'سَارَةُ: اِسْمُهُ سَارَةُ.', right: 'سَارَةُ: اِسْمُهَا سَارَةُ.', why: 'Sarah is female: her name → ـهَا.' },
    { wrong: 'هِيَ يَعِيشُ فِي لَنْدَنَ.', right: 'هِيَ تَعِيشُ فِي لَنْدَنَ.', why: 'She → the verb starts with تـ.' },
    { wrong: 'يُحِبُّ كُرَةَ القَدَمِ، أَيْضًا هِوَايَتُهُ القِرَاءَةُ.', right: 'يُحِبُّ كُرَةَ القَدَمِ، وَلَكِنْ هِوَايَتُهُ المُفَضَّلَةُ القِرَاءَةُ.', why: 'A contrast needs وَلَكِنْ (but).' },
  ],
  listening: {
    title: 'Noor’s profile',
    script: 'اِسْمُهَا نُورٌ، وَعُمْرُهَا أَرْبَعَ عَشْرَةَ سَنَةً. هِيَ سُورِيَّةٌ، وَتَعِيشُ فِي بِرْمِنْغَامَ. تَدْرُسُ فِي مَدْرَسَةِ الأَمَلِ. تَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ. تُحِبُّ السِّبَاحَةَ وَالقِرَاءَةَ، وَلَكِنْ هِوَايَتُهَا المُفَضَّلَةُ هِيَ السِّبَاحَةُ. تَقْرَأُ كِتَابًا كُلَّ شَهْرٍ، وَتَكْتُبُ رَسَائِلَ إِلَى صَدِيقَاتِهَا.',
    questions: bank(8, 'listeningQuiz', [0, 2, 3, 5, 6]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 8,
    source: 'Website sections used: the six-question perspective switch, the complete vocabulary bank (profile words, school and interests, connectors, the third-person verb bank, the profile-enrichment hobby bank), the he/she pattern and its ten-question check, the category-scanning strategy, the Profile Builder Mission (12), Noor’s listening profile (8 questions), Ahmed’s vowelled and Sarah’s unvowelled profiles (12 questions), the “Who is this person?” speaking studio, the 60–80-word writing workshop and the twelve-question checkpoint. Picture match: website visual game “Reading and Writing Personal Profiles”.',
    support: `• The big step today: from “I” to “he / she”. Two small signals do all the work — the ending (ـهُ his / ـهَا her) and the verb prefix (يـ he / تـ she). Colour code: blue = he, pink = she.
• Core: six sentences with the planner and the model visible. Develop: 60–80 words, two hobbies, three connectors. Stretch: an unvowelled profile (website Profile B is the Stretch reading).
• Website caution: تـ can also mean “you” (F2-L04: تَتَكَلَّمُ). In a profile, the named female subject or هِيَ tells you it means “she”.
• Reading strategy (website): do NOT translate every word first — read the question, scan for its category, then prove it.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Profile words, then “I” → “he / she”.', wedo: 'Builder mission, listen to Noor, read two profiles.', next: 'F2-L09' }),
  F.doNow({
    questions: [
      q('What does اِسْمُهَا mean?', ['her name', 'his name', 'my name'], 'Prepared at home.'),
      q('What does هِوَايَةٌ mean?', ['a hobby', 'a school', 'a profile'], 'Prepared at home.'),
      ...bank(8, 'retrievalQuiz', [0, 2, 3]),
    ],
    keyIdea: { text: 'A profile reports the same facts about another person: ـهُ his · ـهَا her · يـ he · تـ she.', ar: 'اِسْمُهُ … يَعِيشُ  ·  اِسْمُهَا … تَعِيشُ' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home. Questions 3–5 are the website “perspective switch” (my name / he lives / she studies).',
  }),
  F.objectivesSlide([
    'Scan profiles for name, age, residence and interests.',
    'Recognise ـهُ / ـهَا (his / her) and يـ / تـ (he / she).',
    'Read a vowelled and an unvowelled profile using evidence.',
    'Write a connected 60–80-word profile.',
  ], {
    core: ['I can read a short profile and find the facts.', 'I can write six sentences with the planner.'],
    develop: ['I can use his / her and he / she forms accurately.', 'I can write 60–80 words with three connectors.'],
    stretch: ['I can read an unvowelled profile.', 'I can edit agreement and verb prefixes myself.'],
  }, 2, 'Website lesson aims (left) and the website writing Core / Develop / Stretch routes (right).'),
  F.keywordsSlide({
    text: 'Profile words, the he / she verb bank and a hobby bank — all from the website. Core: the six verbs and ـهُ / ـهَا.',
    groups: [
      { head: 'GROUP 1', name: 'Profile, school, connectors · 12' },
      { head: 'GROUP 2', name: 'He / she verbs · 6' },
      { head: 'GROUP 3', name: 'Hobbies · 10 (choose yours)' },
    ],
    bridge: [
      { ar: 'شَخْصِيَّةٌ', urdu: 'شخصیت', tr: 'shakhsiyat', en: 'personality, person' },
      { ar: 'مَعْلُومَاتٌ', urdu: 'معلومات', tr: 'maʿlūmāt', en: 'information' },
      { ar: 'مَادَّةٌ', urdu: 'مادہ', tr: 'mādda', en: 'material, subject' },
      { ar: 'وَقْتٌ', urdu: 'وقت', tr: 'waqt', en: 'time' },
      { ar: 'مُحَبَّةٌ · يُحِبُّ', urdu: 'محبت', tr: 'muhabbat', en: 'love (→ he likes)' },
    ],
    notes: 'URDU BRIDGE: شخصیت (shakhsiyat → بِطَاقَةٌ شَخْصِيَّةٌ), معلومات, مادہ (mādda → مَادَّةٌ دِرَاسِيَّةٌ = school subject), وقت (waqt → وَقْتُ الفَرَاغِ = free time), محبت (muhabbat — same root as يُحِبُّ he likes).',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · profile, school and interests (website)', title: 'Profile words', ar: 'مُفْرَدَاتُ البِطَاقَةِ',
    items: [
      { n: 1, ar: 'بِطَاقَةٌ شَخْصِيَّةٌ', en: 'personal profile', tr: 'bi-ṭā-qa shakh-siy-ya', tag: 'noun · f.', core: true, note: 'Also: مَعْلُومَاتٌ شَخْصِيَّةٌ (personal information).' },
      { n: 2, ar: 'مَكَانُ السَّكَنِ', en: 'place of residence', tr: 'ma-kā-nu s-sa-kan', tag: 'form label', core: true, note: 'Same root as أَسْكُنُ (F2-L07).' },
      { n: 3, ar: 'هِوَايَةٌ', en: 'a hobby', tr: 'hi-wā-ya · hi-wā-yāt', tag: 'my · his · her', core: true, forms: [{ l: 'my', ar: 'هِوَايَتِي' }, { l: 'his', ar: 'هِوَايَتُهُ' }, { l: 'her', ar: 'هِوَايَتُهَا' }] },
      { n: 4, ar: 'المُفَضَّلُ', en: 'favourite', tr: 'al-mu-faḍ-ḍal · -la', tag: 'm · f', forms: [{ l: 'm.', ar: 'المُفَضَّلُ' }, { l: 'f.', ar: 'المُفَضَّلَةُ' }] },
      { n: 5, ar: 'مَدْرَسَةٌ · صَفٌّ', en: 'school · class / year group', tr: 'mad-ra-sa · ṣaff', tag: 'school', note: 'مَادَّةٌ دِرَاسِيَّةٌ = school subject' },
      { n: 6, ar: 'وَقْتُ الفَرَاغِ', en: 'free time', tr: 'waq-tu l-fa-rāgh', tag: 'interests', note: 'فِي وَقْتِ الفَرَاغِ = in free time' },
    ],
    notes: `PROFILE WORDS (website vocabulary bank). Card 3 shows my / his / her — today’s key pattern (ة becomes ت before an ending). Card 4: هِوَايَةٌ is feminine, so “favourite hobby” is هِوَايَتُهُ المُفَضَّلَةُ (F2-L05 agreement).
Website connectors: وَ and · أَيْضًا also · وَلَكِنْ but · مَعَ with · فِي in · مِنْ from. NEW today: وَلَكِنْ (contrast) and مَعَ (with: مَعَ أُسْرَتِهِ = with his family).`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Key words · Group 2 · the complete third-person verb bank (website)', title: 'I, he, she: six profile verbs', ar: 'أَنَا · هُوَ · هِيَ',
    cols: [{ label: 'I (أَنَا)', w: 3.0, size: 24 }, { label: 'he (هُوَ)', w: 3.0, size: 24 }, { label: 'she (هِيَ)', w: 3.0, size: 24 }, { label: 'Meaning', w: 3.33 }],
    rows: [
      V('lives', 'أَعِيشُ', 'يَعِيشُ', 'تَعِيشُ', true),
      V('studies', 'أَدْرُسُ', 'يَدْرُسُ', 'تَدْرُسُ', true),
      V('speaks', 'أَتَكَلَّمُ', 'يَتَكَلَّمُ', 'تَتَكَلَّمُ', true),
      V('likes', 'أُحِبُّ', 'يُحِبُّ', 'تُحِبُّ', true),
      V('reads', 'أَقْرَأُ', 'يَقْرَأُ', 'تَقْرَأُ'),
      V('writes', 'أَكْتُبُ', 'يَكْتُبُ', 'تَكْتُبُ'),
    ],
    foot: 'Only the FIRST letter changes: أَ = I · يَـ = he · تَـ = she.',
    notes: `THE VERB BANK (website “Complete third-person verb bank”, with the I-form added from F2-L04/L07 so students see the whole pattern). Blue = I / he prefix; pink = she prefix.
Say each row: “a-ʿīshu, ya-ʿīshu, ta-ʿīshu”. Website: in a profile, يَعِيشُ is a common alternative to يَسْكُنُ (lives).`,
  },
  {
    type: 'formsTable', stage: 'teach', flex: true, eyebrow: 'Key words · Group 3 · the profile-enrichment hobby bank (website) · choose only what is true', title: 'Ten hobbies', ar: 'الهِوَايَاتُ',
    cols: [{ label: 'Hobby', w: 3.4, size: 24 }, { label: 'English', w: 2.8 }, { label: 'Hobby', w: 3.4, size: 24 }, { label: 'English', w: 2.73 }],
    rows: [
      { core: true, cells: [{ ar: 'القِرَاءَةُ' }, 'reading', { ar: 'الكِتَابَةُ' }, 'writing'] },
      { core: true, cells: [{ ar: 'الرَّسْمُ' }, 'drawing', { ar: 'السِّبَاحَةُ' }, 'swimming'] },
      { cells: [{ ar: 'كُرَةُ القَدَمِ' }, 'football', { ar: 'كُرَةُ السَّلَّةِ' }, 'basketball'] },
      { cells: [{ ar: 'الطَّبْخُ' }, 'cooking', { ar: 'التَّصْوِيرُ' }, 'photography'] },
      { cells: [{ ar: 'الأَلْعَابُ الإِلِكْتُرُونِيَّةُ' }, 'video games', { ar: 'المُوسِيقَى' }, 'music'] },
    ],
    notes: 'HOBBY BANK (website “profile-enrichment bank — choose only what is relevant”). FLEX: students choose TWO true hobbies and write them in their books. After يُحِبُّ / تُحِبُّ the hobby ends in -a: يُحِبُّ القِرَاءَةَ (recognition — the models show it).',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · build the he / she profile pattern (website)', title: 'My, his, her', ar: 'نَمَطُ هُوَ وَهِيَ',
    cols: [{ label: 'my (from F2-L07)', w: 3.3, size: 22 }, { label: 'his (ـهُ)', w: 3.3, size: 22 }, { label: 'her (ـهَا)', w: 3.3, size: 22 }, { label: 'Meaning', w: 2.43 }],
    rows: [
      { core: true, cells: [{ ar: 'اِسْمِي أَحْمَدُ.' }, { ar: 'اِسْمُ{w|هُ} أَحْمَدُ.' }, { ar: 'اِسْمُ{e|هَا} سَارَةُ.' }, 'name'] },
      { core: true, cells: [{ ar: 'عُمْرِي … سَنَةً.' }, { ar: 'عُمْرُ{w|هُ} … سَنَةً.' }, { ar: 'عُمْرُ{e|هَا} … سَنَةً.' }, 'age'] },
      { cells: [{ ar: 'هِوَايَتِي المُفَضَّلَةُ' }, { ar: 'هِوَايَتُ{w|هُ} المُفَضَّلَةُ' }, { ar: 'هِوَايَتُ{e|هَا} المُفَضَّلَةُ' }, 'favourite hobby'] },
      { core: true, cells: [{ ar: 'أَنَا مِصْرِيٌّ.' }, { ar: '{w|هُوَ} مِصْرِيٌّ.' }, { ar: '{e|هِيَ} بَرِيطَانِيَّةٌ.' }, 'nationality'] },
    ],
    foot: 'The subject, the ending and the verb prefix work TOGETHER — read the whole pattern (website).',
    notes: `HE / SHE PATTERN (website section 3). Masculine profile: details often end in ـهُ; verbs begin with يـ (يَعِيشُ، يَدْرُسُ، يُحِبُّ). Feminine profile: details end in ـهَا; verbs begin with تـ (تَعِيشُ، تَدْرُسُ، تُحِبُّ).
Website examples: اِسْمُهُ أَحْمَدُ · عُمْرُهُ ثَلَاثَ عَشْرَةَ سَنَةً · هِوَايَتُهُ المُفَضَّلَةُ القِرَاءَةُ // اِسْمُهَا سَارَةُ · عُمْرُهَا اِثْنَتَا عَشْرَةَ سَنَةً · هِوَايَتُهَا المُفَضَّلَةُ السِّبَاحَةُ.
Row 4 recycles F2-L04 agreement: هِيَ + ـِيَّةٌ.`,
  },
  F.quickCheck(bank(8, 'patternQuiz', [0, 1, 3, 4]), 'website “Ten-question he/she pattern check” questions 1, 2, 4 and 5.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me turn a profile card into sentences', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'He or she?', ar: 'أَحْمَدُ · ١٣ · مِصْرُ · لَنْدَنُ', think: 'Ahmed is a boy: he, his (-hu), he-verbs (ya-).' },
      { head: 'Identity', ar: 'اِسْمُ{w|هُ} أَحْمَدُ، وَعُمْرُ{w|هُ} ثَلَاثَ عَشْرَةَ سَنَةً.', think: 'His name, his age.' },
      { head: 'Place', ar: '{w|هُوَ} مِصْرِيٌّ، وَ{w|يَ}عِيشُ فِي لَنْدَنَ.', think: 'He is … and he lives in …' },
      { head: 'School + interest', ar: '{w|يَ}دْرُسُ فِي مَدْرَسَةِ الرَّشِيدِ. {w|يُ}حِبُّ القِرَاءَةَ.', think: 'Every verb starts with يـ.' },
    ],
    legend: ['w'], legendLabels: { w: 'HE SIGNALS' },
    model: 'اِسْمُ{w|هُ} أَحْمَدُ، وَعُمْرُ{w|هُ} ثَلَاثَ عَشْرَةَ سَنَةً. {w|هُوَ} مِصْرِيٌّ، وَ{w|يَ}عِيشُ فِي لَنْدَنَ. {w|يَ}دْرُسُ فِي مَدْرَسَةِ الرَّشِيدِ. {w|يُ}حِبُّ القِرَاءَةَ وَكُرَةَ القَدَمِ.',
    modelEn: 'His name is Ahmed, and he is thirteen. He is Egyptian, and he lives in London. He studies at Al-Rashid School. He likes reading and football.',
    notes: 'I DO (3 min) — the website profile card for Ahmed (speaking studio), turned into sentences with a think-aloud. Then ask: “Now Sarah (12, British, Manchester) — what changes?” → every ـهُ becomes ـهَا, every يـ becomes تـ, هُوَ becomes هِيَ, and بَرِيطَانِيَّةٌ.',
  },
  F.gameSlide({ ...game, items: [game.items[0], game.items[3], game.items[4]] }, {
    title: 'Match the profile picture',
    en: ['My name is Salma and I am fourteen.', 'I am British and I speak English.', 'I live in London.'],
    icons: [[['fa6', 'FaPersonDress', 'D6336C'], ['fa6', 'FaIdCard', '1D5FBF']], [['fa6', 'FaPerson', '1D5FBF'], ['fa6', 'FaComments', '1D5FBF']], [['fa6', 'FaPersonDress', 'D6336C'], ['fa6', 'FaCity', '5A6472']]],
    labels: ['Salma · 14', 'a boy · Britain · English', 'a girl · London'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). The game is in the first person (“I”). STRETCH follow-up: rewrite each answer as a profile sentence — اِسْمُهَا سَلْمَى وَعُمْرُهَا … · هُوَ بَرِيطَانِيٌّ وَيَتَكَلَّمُ … · هِيَ تَعِيشُ فِي لَنْدَنَ.',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website “Profile Builder Mission”', title: 'Build an accurate profile', ar: 'مَهَمَّةُ بِنَاءِ البِطَاقَةِ',
    seed: 17,
    questions: [rounds[2], rounds[5], rounds[8], rounds[9], rounds[10]],
    side: { kind: 'core', label: 'CORE', text: 'He → ـهُ and يـ\nShe → ـهَا and تـ\nbut → وَلَكِنْ' },
    answerSlide: { min: 0, eyebrow: 'We do · Builder Mission answers', title: 'Builder: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 12 profile decisions (verb prefix, possessive, contrast with وَلَكِنْ, full female description). The other 7 are homework.',
    answerNotes: 'After each answer, ask “Which signal told you — the ending, the prefix, or the pronoun?”',
  },
  F.repairSlide(site, [
    'Sarah is a girl. Check the ending.',
    'She → which first letter?',
    'Is this “also” or “but”?',
  ]),
  F.listening(site, {
    coreTip: 'Listen twice.\nSix-box grid: age · city · school · languages · hobbies · favourite.',
    routes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5.',
    gloss: [
      ['اِسْمُهَا نُورٌ، وَعُمْرُهَا أَرْبَعَ عَشْرَةَ سَنَةً.', 'Her name is Noor, and she is fourteen.'],
      ['هِيَ سُورِيَّةٌ، وَتَعِيشُ فِي بِرْمِنْغَامَ. تَدْرُسُ فِي مَدْرَسَةِ الأَمَلِ.', 'She is Syrian, and she lives in Birmingham. She studies at Al-Amal School.'],
      ['تَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ. تُحِبُّ السِّبَاحَةَ وَالقِرَاءَةَ،', 'She speaks Arabic and English. She likes swimming and reading,'],
      ['وَلَكِنْ هِوَايَتُهَا المُفَضَّلَةُ هِيَ السِّبَاحَةُ.', 'but her favourite hobby is swimming.'],
      ['تَقْرَأُ كِتَابًا كُلَّ شَهْرٍ، وَتَكْتُبُ رَسَائِلَ إِلَى صَدِيقَاتِهَا.', 'She reads a book every month, and writes letters to her friends.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · Profile A · fully vowelled (website)', title: 'Ahmed’s profile', ar: 'البِطَاقَةُ (أ)',
    lines: [
      ['اِسْمُهُ أَحْمَدُ، وَعُمْرُهُ ثَلَاثَ عَشْرَةَ سَنَةً. هُوَ مِصْرِيٌّ، وَيَعِيشُ فِي لَنْدَنَ مَعَ أُسْرَتِهِ.', 'Identity + place: 13 · Egyptian · London, with his family'],
      ['يَدْرُسُ فِي مَدْرَسَةِ الرَّشِيدِ، وَيَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ.', 'School + languages: Al-Rashid School · Arabic and English'],
      ['يُحِبُّ القِرَاءَةَ وَكُرَةَ القَدَمِ، وَلَكِنْ هِوَايَتُهُ المُفَضَّلَةُ هِيَ القِرَاءَةُ.', 'Interests: reading and football — favourite: reading'],
      ['فِي وَقْتِ الفَرَاغِ يَقْرَأُ مَعَ أَخِيهِ، وَيَكْتُبُ قِصَصًا قَصِيرَةً عَنِ المَدْرَسَةِ وَالأَصْدِقَاءِ.', 'Free time: reads with his brother · writes short stories'],
      ['يُحِبُّ مَدْرَسَتَهُ أَيْضًا، وَمَادَّتُهُ المُفَضَّلَةُ هِيَ اللُّغَةُ العَرَبِيَّةُ. هُوَ طَالِبٌ ذَكِيٌّ وَلَطِيفٌ.', 'Favourite subject: Arabic · a clever, kind student'],
    ],
    notes: 'PROFILE A (website, abridged by one sentence: “at home he reads the newspaper and writes about his hobbies and school”). The English column gives the CATEGORY, not a translation — website strategy: hunt for the category signals (اِسْمُهُ · عُمْرُهُ · مِنْ / فِي / يَعِيشُ · يُحِبُّ / هِوَايَتُهُ).',
  },
  {
    type: 'glossed', stage: 'wedo', flex: true, eyebrow: 'We do · reading · Profile B · unvowelled challenge (website) · Stretch', title: 'Sarah’s profile — no vowels!', ar: 'البِطَاقَةُ (ب)',
    lines: [
      ['اسمها سارة وعمرها اثنتا عشرة سنة. هي بريطانية وتعيش في مانشستر مع أسرتها.', 'Identity + place'],
      ['تدرس في مدرسة النور، وتتكلم الإنجليزية وتفهم العربية أيضا.', 'School + languages'],
      ['تحب الرسم والسباحة، وهوايتها المفضلة هي الرسم.', 'Interests + favourite'],
      ['في وقت الفراغ تقرأ القصص القصيرة مع أختها، وتكتب يومياتها ورسائل قصيرة إلى صديقاتها.', 'Free time'],
      ['تحب مدرستها أيضا، ومادتها المفضلة هي العلوم. هي طالبة سعيدة ومجتهدة.', 'Subject + description'],
    ],
    notes: 'PROFILE B (website, abridged). Website unvowelled-text strategy: “rely on familiar word shapes, repeated structures and information order. The letters in يعيش، يدرس، يحب، يقرأ، يكتب remain visible even without short vowels.” Stretch students find every ـها and every تـ verb (F1-L10 decoding with SCOPE).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions · use evidence from both texts (website)', title: 'Ahmed or Sarah?', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 9,
    questions: bank(8, 'readingQuiz', [1, 2, 4, 7, 9]),
    side: { kind: 'info', head: 'SCAN BY CATEGORY', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Question → category → scan → prove.\nDo not guess from general knowledge (website).' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading questions 2, 3, 5 (Ahmed) and 8, 10 (Sarah — Core may use the fact summary on the previous slide). The other 7 questions are homework.',
    answerNotes: 'A student reads aloud the evidence phrase (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'مَنْ هَذَا؟ مَا اسْمُهُ؟ كَمْ عُمْرُهُ؟' },
      { route: 'develop', ar: 'مَنْ هَذِهِ؟ أَيْنَ تَعِيشُ؟ مَاذَا تُحِبُّ؟' },
      { route: 'develop', ar: 'قَدِّمْ بِطَاقَةً شَخْصِيَّةً بِضَمِيرِ هُوَ أَوْ هِيَ.' },
      { route: 'stretch', ar: 'قَدِّمْ زَمِيلَكَ أَوْ زَمِيلَتَكَ فِي سِتِّ جُمَلٍ.' },
    ],
    stems: [
      { route: 'core', ar: 'اِسْمُهُ / اِسْمُهَا ______ ، وَعُمْرُهُ / وَعُمْرُهَا ______ سَنَةً.' },
      { route: 'develop', ar: 'هُوَ يَعِيشُ / هِيَ تَعِيشُ فِي ______ ، وَيُحِبُّ / وَتُحِبُّ ______ .' },
      { route: 'stretch', ar: '… وَلَكِنْ هِوَايَتُهُ / هِوَايَتُهَا المُفَضَّلَةُ ______ .' },
      { route: 'sum', ar: 'هَذَا / هَذِهِ ______ !' },
    ],
    modelEn: ['His name is Ahmed, and he is 13. He is Egyptian, and he lives in London.', 'Her name is Sarah, and she is 12. She is British, and she lives in Manchester.'],
    notes: `WEBSITE SPEAKING STUDIO “Who is this person?”: a student presents a profile card in the third person WITHOUT saying the name first; the class identifies the person from the details (Summarise ↺ = the class names the person: هَذَا أَحْمَدُ!).
Profile cards (website):
${roles.map((r) => `• ${r.title}: ${r.detail}`).join('\n')}
Website speaking checklist (listener ticks 1–6): هُوَ / هِيَ accurate · name and age · country and residence · school or language · a hobby and a favourite · at least two connectors.`,
  }),
  F.routesSlide(site, {
    core: { amount: '6 sentences', how: 'Planner + model visible: name, age, country, city, school or language, one hobby.' },
    develop: { amount: '60–80 words', how: 'Two hobbies, a favourite (وَلَكِنْ …) and three connectors.' },
    stretch: { amount: '80 words', how: 'Unvowelled or selectively vowelled; add a school subject and free time; self-edit.' },
  }),
  F.framesSlide({
    core: [
      { en: 'His / Her name is …', ar: 'اِسْمُهُ / اِسْمُهَا ______ ،' },
      { en: 'and he / she is … years old.', ar: 'وَعُمْرُهُ / وَعُمْرُهَا ______ سَنَةً.' },
      { en: 'He / She is … (nationality: -iyy / -iyya)', ar: 'هُوَ / هِيَ ______ .' },
      { en: 'He / She lives in …', ar: 'يَعِيشُ / تَعِيشُ فِي ______ .' },
      { en: 'He / She likes …', ar: 'يُحِبُّ / تُحِبُّ ______ .' },
    ],
    develop: [
      { en: 'He studies at … School.', ar: 'يَدْرُسُ فِي مَدْرَسَةِ ______ .' },
      { en: 'She speaks … and understands …', ar: 'تَتَكَلَّمُ ______ وَتَفْهَمُ ______ أَيْضًا.' },
      { en: '… but his favourite hobby is …', ar: 'وَلَكِنْ هِوَايَتُهُ المُفَضَّلَةُ ______ .' },
      { en: 'In her free time she …', ar: 'فِي وَقْتِ الفَرَاغِ ______ .' },
      { en: 'He is a … and … student.', ar: 'هُوَ طَالِبٌ ______ وَ ______ .' },
    ],
    bank: ['اِسْمُهُ', 'اِسْمُهَا', 'عُمْرُهُ', 'عُمْرُهَا', 'يَعِيشُ', 'تَعِيشُ', 'يَدْرُسُ', 'تَدْرُسُ', 'يُحِبُّ', 'تُحِبُّ', 'وَلَكِنْ', 'مَعَ', 'القِرَاءَةَ', 'السِّبَاحَةَ', 'الرَّسْمَ'],
  }),
  F.modelSlide(site,
    'His name is Ahmed, and he is thirteen. He is Egyptian, and he lives in London with his family. He studies at Al-Rashid School, and he speaks Arabic and English. He likes reading and football, but his favourite hobby is reading. He is a clever and kind student.',
    ['ـهُ his', 'يـ verbs', 'وَلَكِنْ', 'a final description'],
    'Model built from the website Profile A (about 45 words). Develop: add two sentences to reach 60–80 words (free time, school subject).'),
  F.selfCheckSlide([
    { route: 'core', text: 'I used هُوَ or هِيَ accurately.' },
    { route: 'core', text: 'His / her details end in ـهُ or ـهَا.' },
    { route: 'develop', text: 'My verbs start with يـ (he) or تـ (she).' },
    { route: 'develop', text: 'I used at least three connectors.' },
    { route: 'stretch', text: 'I checked agreement and prefixes by myself.' },
  ]),
  F.exitTicket(bank(8, 'finalQuiz', [2, 3, 7]), 12),
  F.prepSlide({
    ...NEXT,
    words: [['اِسْتَمِعْ', 'Listen! (instruction)', 'f. اِسْتَمِعِي'], ['اِخْتَرْ', 'Choose! (instruction)', 'f. اِخْتَارِي'], ['صَحِيحٌ · خَطَأٌ', 'true · false', ''], ['الفِكْرَةُ الرَّئِيسِيَّةُ', 'the main idea', ''], ['التَّفَاصِيلُ', 'the details', '']],
    questionEn: 'Think: when you listen to English, how do you catch a name or a number? Write one tip.',
    questionAr: 'اِسْتَمِعْ وَاخْتَرْ',
    homework: {
      core: 'Website F2-L08: the Profile Builder Mission (12) and the picture game.',
      develop: 'Write a 60–80-word profile of a friend or invented person (website planner).',
      stretch: 'Write it unvowelled; then the 12-question checkpoint (aim for 10/12).',
    },
    wordsSource: 'The five words are from the website F2-L09 listening-instruction and strategy vocabulary.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: he → ـهُ + يـ · she → ـهَا + تـ' }),
];

module.exports = { meta, slides };
