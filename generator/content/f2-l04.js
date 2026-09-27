'use strict';
/*
 * F2-L04 · Nationality and Language
 * Website: Pathways › Foundation › F2 › Lesson 4. Countries → nisba nationality (ـِيٌّ / ـِيَّةٌ), أَنَا مِنْ …,
 * جِنْسِيَّةٌ · لُغَةٌ, four language verbs (أَتَكَلَّمُ · أَفْهَمُ · أَقْرَأُ · أَكْتُبُ), four languages, Passport Mission,
 * decision check, listening (3 speakers), three identity profiles, identity-card speaking and writing, checkpoint.
 * NB website reading Q2 has an answer-key error (it names Maryam; the profile shows Zaynab) — corrected here.
 */
const F = require('./f2-common');
const game = require('../site-data/pathway-visual-games.json')['f2-l04'];
const { q, bank } = F;

const meta = F.meta({
  n: 4, fileTitle: 'Nationality_Language', chip: 'Nationality & Language',
  title: 'Nationality and Language', arabic: 'الجِنْسِيَّةُ وَاللُّغَةُ — مَنْ أَنْتَ؟',
  focus: 'Say where you are from (أَنَا مِنْ …), choose the nationality ending that matches the person (ـِيٌّ / ـِيَّةٌ), and say which languages you speak, understand, read and write.',
  icon: 'FaEarthAfrica', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F2-L05', nextTitle: 'Masculine and Feminine Agreement', nextAr: 'المُذَكَّرُ وَالمُؤَنَّثُ' };
const nat = (country, m, f, en, core) => ({ core, cells: [{ ar: country, sub: 'country' }, { ar: `أَنَا ${m}`, sub: 'a boy says' }, { ar: `أَنَا ${f}`, sub: 'a girl says' }, en] });

const readQs = bank(4, 'readingQuiz', [0, 2, 3, 4]);
readQs.splice(1, 0, { prompt: 'Who understands Arabic but speaks English?', options: ['زَيْنَب', 'مَرْيَم', 'يُوسُف'], answer: 0, why: 'Zaynab’s profile: أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ وَأَفْهَمُ العَرَبِيَّةَ.' });

const site = {
  speaking: {
    context: 'Present a short identity profile',
    model: [
      ['أ', 'مَا جِنْسِيَّتُكِ؟', 'What is your nationality? (to a girl)'],
      ['ب', 'أَنَا مِصْرِيَّةٌ.', 'I am Egyptian. (f.)'],
      ['أ', 'مَا اللُّغَاتُ الَّتِي تَتَكَلَّمِينَهَا؟', 'Which languages do you speak?'],
      ['ب', 'أَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ.', 'I speak Arabic and English.'],
    ],
  },
  writing: {
    prompt: 'Website writing task: create your Arabic identity card (name, age, origin, nationality, languages), then write four connected sentences. Stretch: use speak, understand, read and write.',
    checklist: ['I wrote from right to left.', 'My nationality ending matches the person.', 'I used أَتَكَلَّمُ before a language.', 'I joined several languages with وَ.'],
    model: 'الاِسْمُ: مَرْيَم\nالعُمْرُ: أَرْبَعَ عَشْرَةَ سَنَةً\nالجِنْسِيَّةُ: بَرِيطَانِيَّةٌ\nاللُّغَاتُ: الإِنْجِلِيزِيَّةُ وَالفَرَنْسِيَّةُ',
  },
  differentiation: {
    core: 'Complete the identity-card fields.',
    develop: 'Write four connected sentences: name, origin, nationality, languages.',
    stretch: 'Use three or four different language verbs (speak, understand, read, write).',
  },
  mistakes: [
    { wrong: 'زَيْنَب: أَنَا سُورِيٌّ.', right: 'زَيْنَب: أَنَا سُورِيَّةٌ.', why: 'Zaynab is a girl: the feminine ending -iyya.' },
    { wrong: 'أَنَا مِصْرَ.', right: 'أَنَا مِنْ مِصْرَ. / أَنَا مِصْرِيٌّ.', why: 'Use مِنْ + country, or the nationality word.' },
    { wrong: 'أَكْتُبُ العَرَبِيَّةَ مِنْ.', right: 'أَكْتُبُ بِالعَرَبِيَّةِ.', why: 'I write IN a language: بِـ + the language.' },
  ],
  listening: {
    title: 'Catch the country, nationality and language',
    script: '١. مَرْحَبًا. اِسْمِي خَالِدٌ. أَنَا مِنَ العِرَاقِ. أَنَا عِرَاقِيٌّ. أَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ. ٢. مَرْحَبًا. اِسْمِي زَيْنَبُ. أَنَا مِنْ سُورِيَا. أَنَا سُورِيَّةٌ. أَفْهَمُ العَرَبِيَّةَ وَأَتَكَلَّمُ الإِنْجِلِيزِيَّةَ. ٣. اِسْمِي مَرْيَمُ. أَنَا بَرِيطَانِيَّةٌ. أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ وَالفَرَنْسِيَّةَ.',
    questions: bank(4, 'listeningQuiz', [0, 1, 2, 3, 5]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 4,
    source: 'Website sections used: the four-question readiness check, countries → nationality words (8 countries), core identity vocabulary, the nisba pattern, four language actions and four languages, the decision check, listening (three speakers, six questions), three identity profiles (five questions), the identity speaking model and checklist, the identity-card writing task and the ten-question checkpoint. Picture match: website visual game “Nationality and Language”. NOTE: website reading question 2 has an answer-key error (it names Maryam, but the profile that says “I speak English and understand Arabic” is Zaynab’s) — corrected on the slide.',
    support: `• Core: ONE nationality (theirs) in the right form, and ONE language line: أَتَكَلَّمُ … . Develop: origin + nationality + two languages. Stretch: all four language verbs, including أَكْتُبُ بِـ.
• Identity is personal: many students have more than one heritage or nationality. Accept any true answer (e.g. أَنَا بَرِيطَانِيٌّ وَبَاكِسْتَانِيٌّ) and never ask a student to “choose”. Students may also use a character card instead of personal details.
• The nisba pattern (ـِيٌّ / ـِيَّةٌ) is the SAME one students met in Topic-style words like عَرَبِيٌّ — it prepares F2-L05 (gender agreement).
• Urdu bridge: عربی، اردو، انگریزی، فہم، کتاب — Urdu speakers already know most language names.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Countries → nationalities, then four language verbs.', wedo: 'Picture match, boy or girl ending, listen and read profiles.', next: 'F2-L05' }),
  F.doNow({
    questions: [
      q('What does جِنْسِيَّةٌ mean?', ['nationality', 'language', 'age'], 'Prepared at home.'),
      q('What does this sentence mean?', ['I speak Arabic.', 'I am Arab.', 'I read Arabic.'], 'Prepared at home.', { ar: 'أَتَكَلَّمُ العَرَبِيَّةَ.', arBig: true }),
      ...bank(4, 'retrievalQuiz', [0, 1, 2]),
    ],
    keyIdea: { text: 'A nationality word matches the PERSON: -iyy for a boy, -iyya for a girl.', ar: 'مِصْرِيٌّ  ·  مِصْرِيَّةٌ' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home. Questions 3–5 are the website “readiness check” (name, age question to a girl, أَنَا مِنْ مِصْرَ).',
  }),
  F.objectivesSlide([
    'State a nationality with the correct masculine or feminine form.',
    'Say which languages I speak, understand, read and write.',
    'Recognise identity details in short listening and reading texts.',
    'Create and present a simple Arabic identity card.',
  ], {
    core: ['I can state one nationality in the right form.', 'I can say one language line with “I speak”.'],
    develop: ['I can give my name, age, origin and nationality.', 'I can add two language details.'],
    stretch: ['I can use speak, understand, read and write.', 'I can write “in” a language with bi-.'],
  }, 1, 'Website “By the end, I can …” (left) and the website Core / Develop / Stretch goals (right).'),
  F.keywordsSlide({
    text: '8 countries, 3 identity words, 4 language verbs and 4 languages — all from the website. Core: YOUR country, YOUR languages, and “I speak”.',
    groups: [
      { head: 'GROUP 1', name: 'Countries → nationality · 8' },
      { head: 'GROUP 2', name: 'Identity words · 4' },
      { head: 'GROUP 3', name: 'Language verbs + languages · 8' },
    ],
    bridge: [
      { ar: 'العَرَبِيَّةُ', urdu: 'عربی', tr: 'arabī', en: 'Arabic' },
      { ar: 'الأُرْدِيَّةُ', urdu: 'اردو', tr: 'urdū', en: 'Urdu' },
      { ar: 'الإِنْجِلِيزِيَّةُ', urdu: 'انگریزی', tr: 'angrezī', en: 'English' },
      { ar: 'أَفْهَمُ', urdu: 'فہم', tr: 'fahm', en: 'understanding' },
      { ar: 'أَكْتُبُ', urdu: 'کتاب', tr: 'kitāb', en: 'book (k-t-b = write)' },
    ],
    notes: `URDU BRIDGE: عربی / اردو / انگریزی (the language names, with the same -ī nisba ending!), فہم (fahm → أَفْهَمُ I understand), کتاب (kitāb — same root k-t-b as أَكْتُبُ I write).
Big idea for EAL students: Urdu and Arabic BOTH make nationality/language words with -ī (پاکستانی ↔ بَاكِسْتَانِيٌّ).`,
  }),
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · countries become nationality words (website) · 1 of 2', title: 'From country to nationality', ar: 'مِنَ البَلَدِ إِلَى الجِنْسِيَّةِ',
    cols: [{ label: 'Country', w: 2.9, size: 26 }, { label: 'A boy (m.)', w: 3.5, size: 26 }, { label: 'A girl (f.)', w: 3.63, size: 26 }, { label: 'English', w: 2.3 }],
    rows: [
      nat('بَرِيطَانِيَا', '{p|بَرِيطَانِ}{e|يٌّ}', '{p|بَرِيطَانِ}{e|يَّةٌ}', 'Britain', true),
      nat('مِصْرُ', '{p|مِصْرِ}{e|يٌّ}', '{p|مِصْرِ}{e|يَّةٌ}', 'Egypt', true),
      nat('السُّعُودِيَّةُ', '{p|سُعُودِ}{e|يٌّ}', '{p|سُعُودِ}{e|يَّةٌ}', 'Saudi Arabia'),
      nat('المَغْرِبُ', '{p|مَغْرِبِ}{e|يٌّ}', '{p|مَغْرِبِ}{e|يَّةٌ}', 'Morocco'),
    ],
    notes: `COUNTRIES → NATIONALITIES (website, 8 countries). Orange = the country part; pink = the ending.
Read across each row: country → a boy says → a girl says. Core: Britain + Egypt + the student’s OWN country.
Not in the list? Build it the same way: بَاكِسْتَانُ → بَاكِسْتَانِيٌّ / بَاكِسْتَانِيَّةٌ · بَنْغْلَادِيشُ → بَنْغْلَادِيشِيٌّ / بَنْغْلَادِيشِيَّةٌ · الصُّومَالُ → صُومَالِيٌّ / صُومَالِيَّةٌ.
Note the “the” (ال) drops in the nationality: المَغْرِبُ → مَغْرِبِيٌّ.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · countries become nationality words (website) · 2 of 2', title: 'Four more Arab countries', ar: 'مِنَ البَلَدِ إِلَى الجِنْسِيَّةِ',
    cols: [{ label: 'Country', w: 2.9, size: 26 }, { label: 'A boy (m.)', w: 3.5, size: 26 }, { label: 'A girl (f.)', w: 3.63, size: 26 }, { label: 'English', w: 2.3 }],
    rows: [
      nat('العِرَاقُ', '{p|عِرَاقِ}{e|يٌّ}', '{p|عِرَاقِ}{e|يَّةٌ}', 'Iraq'),
      nat('سُورِيَا', '{p|سُورِ}{e|يٌّ}', '{p|سُورِ}{e|يَّةٌ}', 'Syria'),
      nat('لُبْنَانُ', '{p|لُبْنَانِ}{e|يٌّ}', '{p|لُبْنَانِ}{e|يَّةٌ}', 'Lebanon'),
      nat('الأُرْدُنُّ', '{p|أُرْدُنِ}{e|يٌّ}', '{p|أُرْدُنِ}{e|يَّةٌ}', 'Jordan'),
    ],
    notes: 'COUNTRIES → NATIONALITIES (website) continued: Iraq, Syria, Lebanon, Jordan — the countries of the listening and reading speakers. Same pattern: country + ـِيٌّ / ـِيَّةٌ.',
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 2 · identity words (website)', title: 'Identity words', ar: 'مُفْرَدَاتُ الهُوِيَّةِ',
    items: [
      { n: 1, ar: 'جِنْسِيَّةٌ', en: 'nationality', tr: 'jin-siy-ya', tag: 'noun · f.', core: true, forms: [{ l: 'your m.', ar: 'جِنْسِيَّتُكَ' }, { l: 'your f.', ar: 'جِنْسِيَّتُكِ' }, { l: 'my', ar: 'جِنْسِيَّتِي' }] },
      { n: 2, ar: 'لُغَةٌ', en: 'language', tr: 'lu-gha · lu-ghāt', tag: 'noun · f.', core: true, forms: [{ l: 'one', ar: 'لُغَةٌ' }, { l: 'two', ar: 'لُغَتَانِ' }, { l: 'pl.', ar: 'لُغَاتٌ' }] },
      { n: 3, ar: 'عَرَبِيٌّ', en: 'Arab', tr: 'ʿa-ra-biy · ʿa-ra-biy-ya · ʿa-rab', tag: 'm · f · pl', forms: [{ l: 'm.', ar: 'عَرَبِيٌّ' }, { l: 'f.', ar: 'عَرَبِيَّةٌ' }, { l: 'pl.', ar: 'عَرَبٌ' }] },
      { n: 4, ar: 'أَنَا مِنْ …', en: 'I am from …', tr: 'a-nā min …', tag: 'origin', core: true, note: 'مِنْ + a country: أَنَا مِنْ مِصْرَ.' },
      { n: 5, ar: 'مَا جِنْسِيَّتُكَ؟', en: 'What is your nationality? (to a boy)', tr: 'mā jin-siy-ya-tu-ka', tag: 'to m.', note: 'To a girl: -ki.' },
      { n: 6, ar: 'مِنْ أَيْنَ أَنْتَ؟', en: 'Where are you from? (to a boy)', tr: 'min ay-na an-ta · an-ti', tag: 'to m. · f.', note: 'To a girl: مِنْ أَيْنَ أَنْتِ؟' },
    ],
    notes: `IDENTITY WORDS (website “Core identity vocabulary” + the speaking model question). Card 1 recycles the endings from F2-L02/L03: جِنْسِيَّتُكَ / جِنْسِيَّتُكِ / جِنْسِيَّتِي — notice ة becomes ت when an ending is added.
Card 6 (مِنْ أَيْنَ أَنْتَ؟) is the natural question for أَنَا مِنْ … — used in F2-L07.`,
  },
  {
    type: 'vocab', stage: 'teach', min: 3, eyebrow: 'Key words · Group 3 · four language actions and four languages (website)', title: 'Speak, understand, read, write', ar: 'أَتَكَلَّمُ · أَفْهَمُ · أَقْرَأُ · أَكْتُبُ',
    items: [
      { n: 1, ar: 'أَتَكَلَّمُ', en: 'I speak', tr: 'a-ta-kal-la-mu', tag: 'I · you m. · you f.', core: true, forms: [{ l: 'I', ar: 'أَتَكَلَّمُ' }, { l: 'you m.', ar: 'تَتَكَلَّمُ' }, { l: 'you f.', ar: 'تَتَكَلَّمِينَ' }] },
      { n: 2, ar: 'أَفْهَمُ', en: 'I understand', tr: 'af-ha-mu', tag: 'I · you m. · you f.', core: true, forms: [{ l: 'I', ar: 'أَفْهَمُ' }, { l: 'you m.', ar: 'تَفْهَمُ' }, { l: 'you f.', ar: 'تَفْهَمِينَ' }] },
      { n: 3, ar: 'أَقْرَأُ', en: 'I read', tr: 'aq-ra-ʾu', tag: 'I · you m. · you f.', forms: [{ l: 'I', ar: 'أَقْرَأُ' }, { l: 'you m.', ar: 'تَقْرَأُ' }, { l: 'you f.', ar: 'تَقْرَئِينَ' }] },
      { n: 4, ar: 'أَكْتُبُ بِـ', en: 'I write (in)', tr: 'ak-tu-bu bi-', tag: 'I · you m. · you f.', forms: [{ l: 'I', ar: 'أَكْتُبُ' }, { l: 'you m.', ar: 'تَكْتُبُ' }, { l: 'you f.', ar: 'تَكْتُبِينَ' }] },
      { n: 5, ar: 'العَرَبِيَّةُ · الإِنْجِلِيزِيَّةُ', en: 'Arabic · English', tr: 'al-ʿa-ra-biy-ya · al-in-ji-lī-ziy-ya', tag: 'languages', core: true, note: 'Languages are feminine and take ال.' },
      { n: 6, ar: 'الفَرَنْسِيَّةُ · الأُرْدِيَّةُ', en: 'French · Urdu', tr: 'al-fa-ran-siy-ya · al-ur-diy-ya', tag: 'languages', note: 'Add yours: البِنْغَالِيَّةُ، الصُّومَالِيَّةُ …' },
    ],
    notes: `FOUR LANGUAGE ACTIONS (website, with gestures): 🗣️ أَتَكَلَّمُ · 👂 أَفْهَمُ · 📖 أَقْرَأُ · ✍️ أَكْتُبُ. Do the gesture every time you say the verb.
The small boxes show I / you (to a boy) / you (to a girl) — the أَ = I and تَـ = you pattern students will meet again and again. Core: “I” only.
Website model sentences: أَتَكَلَّمُ العَرَبِيَّةَ. أَفْهَمُ الإِنْجِلِيزِيَّةَ. أَقْرَأُ العَرَبِيَّةَ. أَكْتُبُ بِالإِنْجِلِيزِيَّةِ.`,
  },
  {
    type: 'codeWord', stage: 'teach', min: 3, eyebrow: 'Grammar focus · match the nationality to the person (website)', title: 'Boy or girl? Listen for the ending', ar: 'طَابِقِ الجِنْسِيَّةَ مَعَ الشَّخْصِ',
    word: 'أَنَا {p|مِصْرِ}{e|يَّةٌ}', tr: 'a-nā miṣ-riy-ya · I am Egyptian (a girl speaking)',
    parts: [
      { code: 'w', ar: 'أَنَا', title: 'WHO: I', text: 'The person the sentence describes.' },
      { code: 'p', ar: 'مِصْرِ', title: 'PATTERN: the country', text: 'مِصْرُ → مِصْرِ… (drop ال if there is one).' },
      { code: 'e', ar: 'ـِيٌّ / ـِيَّةٌ', title: 'ENDING: m. / f.', text: '-iyy for a boy · -iyya for a girl.' },
    ],
    notes: `GRAMMAR (website section 3). The nationality is an ADJECTIVE: it changes to match whether the person is masculine or feminine. Memory rule: ـِيٌّ usually describes one male person; ـِيَّةٌ one female person.
Website common mistake: “Do not choose from your own gender” — the ending describes the person IN THE SENTENCE. A girl says أَنَا مِصْرِيَّةٌ; a boy says أَنَا مِصْرِيٌّ; and a boy describing Zaynab says هِيَ سُورِيَّةٌ.
Link: the same ـة feminine clue as صَدِيقَةٌ (F2-L02) — tomorrow’s lesson (F2-L05) is all about this.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Grammar focus · origin, nationality or language?', title: 'Three identity sentences', ar: 'مِنْ أَيْنَ؟ · الجِنْسِيَّةُ · اللُّغَةُ',
    cols: [{ label: 'A boy', w: 4.5, size: 22 }, { label: 'A girl', w: 4.63, size: 22 }, { label: 'What it tells you', w: 3.2 }],
    rows: [
      { core: true, cells: [{ ar: 'أَنَا {k|مِنْ} لُبْنَانَ.', sub: 'I am from Lebanon.' }, { ar: 'أَنَا {k|مِنْ} لُبْنَانَ.', sub: 'I am from Lebanon.' }, 'ORIGIN: مِنْ + country (same for both)'] },
      { core: true, cells: [{ ar: 'أَنَا لُبْنَانِ{e|يٌّ}.', sub: 'I am Lebanese.' }, { ar: 'أَنَا لُبْنَانِ{e|يَّةٌ}.', sub: 'I am Lebanese.' }, 'NATIONALITY: the ending changes'] },
      { cells: [{ ar: '{w|أَ}تَكَلَّمُ العَرَبِيَّةَ.', sub: 'I speak Arabic.' }, { ar: '{w|أَ}تَكَلَّمُ العَرَبِيَّةَ.', sub: 'I speak Arabic.' }, 'LANGUAGE: the same for both'] },
      { cells: [{ ar: 'أَكْتُبُ {k|بِ}الإِنْجِلِيزِيَّةِ.', sub: 'I write in English.' }, { ar: 'أَكْتُبُ {k|بِ}الإِنْجِلِيزِيَّةِ.', sub: 'I write in English.' }, 'WRITE IN: bi- + the language'] },
    ],
    foot: 'Only the NATIONALITY changes for a boy or a girl.',
    notes: 'THREE IDENTITY SENTENCES (built from the website model sentences and reading question 5: “Which sentence states origin rather than nationality?”). The key discovery: only row 2 changes. Website decision check Q5: أَكْتُبُ بِالعَرَبِيَّةِ is the natural way to say “I write in Arabic”.',
  },
  F.quickCheck(bank(4, 'grammarQuiz', [0, 1, 3, 5]), 'website “Nationality and language decision check” questions 1, 2, 4 and 6.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me build an identity profile', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Name', ar: 'اِسْمِي خَالِدٌ.', think: 'Start with the name (F2-L02).' },
      { head: 'Origin', ar: 'أَنَا {k|مِنَ} العِرَاقِ.', think: 'مِنْ + the country. (مِنَ before ال.)' },
      { head: 'Nationality', ar: 'أَنَا عِرَاقِ{e|يٌّ}.', think: 'Khalid is a boy: -iyy.' },
      { head: 'Languages', ar: '{w|أَ}تَكَلَّمُ العَرَبِيَّةَ {k|وَ}الإِنْجِلِيزِيَّةَ.', think: 'I speak + language, and وَ joins the second one.' },
    ],
    legend: ['k', 'e', 'w'], legendLabels: { k: 'LINK WORD', e: 'ENDING', w: 'I' },
    model: 'مَرْحَبًا. اِسْمِي خَالِدٌ. أَنَا {k|مِنَ} العِرَاقِ. أَنَا عِرَاقِ{e|يٌّ}. {w|أَ}تَكَلَّمُ العَرَبِيَّةَ {k|وَ}الإِنْجِلِيزِيَّةَ.',
    modelEn: 'Hello. My name is Khalid. I am from Iraq. I am Iraqi. I speak Arabic and English.',
    notes: 'I DO (3 min) — the website listening speaker 1, modelled as four decisions. Then change ONE detail aloud: “What if Zaynab from Syria says it?” → أَنَا مِنْ سُورِيَا. أَنَا سُورِيَّةٌ. Students copy the model.',
  },
  F.gameSlide({ ...game, items: [game.items[0], game.items[1], game.items[2]] }, {
    title: 'Match the picture to the sentence',
    en: ['He is Egyptian.', 'She is Saudi.', 'She speaks French.'],
    icons: [[['fa6', 'FaPerson', '1D5FBF'], ['fa6', 'FaFlag', 'B83227']], [['fa6', 'FaPersonDress', 'D6336C'], ['fa6', 'FaFlag', '1E7B4F']], [['fa6', 'FaPersonDress', 'D6336C'], ['fa6', 'FaComments', '1D5FBF']]],
    labels: ['a boy · Egypt', 'a girl · Saudi Arabia', 'a girl · speaks French'],
    order: [1, 2, 0],
    notes: 'Website visual game “Nationality and Language” (3 of 6 cards). New but guessable: هُوَ = he, هِيَ = she. Key to spot: the ending ـِيٌّ / ـِيَّةٌ and the verb تَتَكَلَّمُ (she speaks).',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · website decision check (continued) and checkpoint', title: 'Choose the accurate form', ar: 'اِخْتَرِ الشَّكْلَ الصَّحِيحَ',
    seed: 13,
    questions: [...bank(4, 'grammarQuiz', [2, 4]), ...bank(4, 'finalQuiz', [1, 8])],
    side: { kind: 'core', label: 'CORE', text: 'Boy → -iyy (ـِيٌّ)\nGirl → -iyya (ـِيَّةٌ)\nWrite in → bi- (بِـ)' },
    answerSlide: { min: 0, eyebrow: 'We do · answers', title: 'Answers and reasons', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — website decision check Q3 and Q5, checkpoint Q2 and Q9. Show-me: A/B/C fingers to camera.',
    answerNotes: 'Reveal; the class reads each correct sentence aloud.',
  },
  F.repairSlide(site, [
    'Zaynab is a girl. Check the ending.',
    'A country needs a little word before it.',
    'How do you say “write IN a language”?',
  ]),
  F.listening(site, {
    coreTip: 'Listen twice.\nListen for: the country after min, the ending, and “I speak”.',
    routes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5.',
    gloss: [
      ['١. مَرْحَبًا. اِسْمِي خَالِدٌ. أَنَا مِنَ العِرَاقِ. أَنَا عِرَاقِيٌّ.', 'Hello. My name is Khalid. I am from Iraq. I am Iraqi.'],
      ['أَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ.', 'I speak Arabic and English.'],
      ['٢. مَرْحَبًا. اِسْمِي زَيْنَبُ. أَنَا مِنْ سُورِيَا. أَنَا سُورِيَّةٌ.', 'Hello. My name is Zaynab. I am from Syria. I am Syrian.'],
      ['أَفْهَمُ العَرَبِيَّةَ وَأَتَكَلَّمُ الإِنْجِلِيزِيَّةَ.', 'I understand Arabic and I speak English.'],
      ['٣. اِسْمِي مَرْيَمُ. أَنَا بَرِيطَانِيَّةٌ. أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ وَالفَرَنْسِيَّةَ.', 'My name is Maryam. I am British. I speak English and French.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 2, eyebrow: 'We do · reading · three identity profiles (website)', title: 'Read three identity profiles', ar: 'اِقْرَأْ ثَلَاثَ بَطَاقَاتٍ شَخْصِيَّةٍ',
    lines: [
      ['أ · اِسْمِي يُوسُفُ. أَنَا مِنَ المَغْرِبِ. أَنَا مَغْرِبِيٌّ.', 'A · My name is Yusuf. I am from Morocco. I am Moroccan.'],
      ['أَتَكَلَّمُ العَرَبِيَّةَ وَالفَرَنْسِيَّةَ.', 'I speak Arabic and French.'],
      ['ب · اِسْمِي زَيْنَبُ. أَنَا مِنْ سُورِيَا. أَنَا سُورِيَّةٌ.', 'B · My name is Zaynab. I am from Syria. I am Syrian.'],
      ['أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ وَأَفْهَمُ العَرَبِيَّةَ.', 'I speak English and I understand Arabic.'],
      ['ج · اِسْمِي مَرْيَمُ. أَنَا بَرِيطَانِيَّةٌ.', 'C · My name is Maryam. I am British.'],
      ['أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ وَالفَرَنْسِيَّةَ. أَقْرَأُ العَرَبِيَّةَ.', 'I speak English and French. I read Arabic.'],
    ],
    notes: 'READING (website section 5). Website strategy: scan first for the NAME, then underline the nationality ending and circle each language verb. Core: read with the English; Develop / Stretch: cover it.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions · find the evidence (website)', title: 'Prove it from the profiles', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 9,
    questions: readQs,
    side: { kind: 'info', head: 'FIND THE EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Choose, then point to the exact Arabic words that prove it.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading questions 1–5. Q2 is CORRECTED: the website key gives Maryam, but Zaynab’s profile is the one that says “I speak English and I understand Arabic”. (If a student has done it online and “got it wrong” by choosing Zaynab — they were right!)',
    answerNotes: 'A student reads aloud the evidence for each answer (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'مَا جِنْسِيَّتُكَ؟' },
      { route: 'develop', ar: 'مِنْ أَيْنَ أَنْتِ؟ مَا جِنْسِيَّتُكِ؟' },
      { route: 'develop', ar: 'مَا اللُّغَاتُ الَّتِي تَتَكَلَّمُهَا؟' },
      { route: 'stretch', ar: 'مَاذَا تَقْرَأُ؟ وَبِأَيِّ لُغَةٍ تَكْتُبُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَنَا ______ . أَتَكَلَّمُ ______ .' },
      { route: 'develop', ar: 'أَنَا مِنْ ______ . أَنَا ______ . أَتَكَلَّمُ ______ وَ ______ .' },
      { route: 'stretch', ar: 'أَفْهَمُ ______ ، وَأَقْرَأُ ______ ، وَأَكْتُبُ بِـ ______ .' },
      { route: 'sum', ar: 'هُوَ / هِيَ ______ ، وَيَتَكَلَّمُ / وَتَتَكَلَّمُ ______ .' },
    ],
    modelEn: ['What is your nationality? (to a girl)', 'I am Egyptian. (f.)'],
    notes: `WEBSITE SPEAKING CHECKLIST (the listener ticks 1–5 in chat): 1 name · 2 origin with أَنَا مِنْ … · 3 matched gender -iyy / -iyya · 4 a language with أَتَكَلَّمُ · 5 extended with understand, read or write.
Website “random identity prompt”: show a character (e.g. خَالِد 🇮🇶) — the partner asks مَا جِنْسِيَّتُكَ؟ and answers as that character: أَنَا عِرَاقِيٌّ. أَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ.
Summarise (↺, Stretch): he / she is … and speaks … — the he-verb يَتَكَلَّمُ and she-verb تَتَكَلَّمُ (from the picture game).`,
  }),
  F.routesSlide(site, {
    core: { amount: 'identity card', how: 'Fill in: name, age, nationality, languages (copy words from the tables).' },
    develop: { amount: '4 sentences', how: 'Name → origin → nationality → languages, joined with “and”.' },
    stretch: { amount: '5–6 sentences', how: 'Add understand, read and write in, plus one family member (he / she is …).' },
  }),
  F.framesSlide({
    core: [
      { en: 'Name:', ar: 'الاِسْمُ: ______' },
      { en: 'Age:', ar: 'العُمْرُ: ______ سَنَةً' },
      { en: 'Nationality:', ar: 'الجِنْسِيَّةُ: ______' },
      { en: 'Languages:', ar: 'اللُّغَاتُ: ______ وَ ______' },
    ],
    develop: [
      { en: 'My name is …', ar: 'اِسْمِي ______ .' },
      { en: 'I am from …', ar: 'أَنَا مِنْ ______ .' },
      { en: 'I am … (nationality: -iyy / -iyya)', ar: 'أَنَا ______ .' },
      { en: 'I speak … and …', ar: 'أَتَكَلَّمُ ______ وَ ______ .' },
      { en: 'I understand … and I write in …', ar: 'أَفْهَمُ ______ وَأَكْتُبُ بِـ ______ .' },
    ],
    bank: ['بَرِيطَانِيٌّ', 'بَرِيطَانِيَّةٌ', 'مِصْرِيٌّ', 'مِصْرِيَّةٌ', 'العَرَبِيَّةَ', 'الإِنْجِلِيزِيَّةَ', 'الأُرْدِيَّةَ', 'الفَرَنْسِيَّةَ', 'أَتَكَلَّمُ', 'أَفْهَمُ', 'أَقْرَأُ', 'أَكْتُبُ'],
  }),
  F.modelSlide(site,
    'Name: Maryam · Age: fourteen years · Nationality: British (f.) · Languages: English and French',
    ['a feminine nationality', 'an age with sanatan', 'two languages', 'and (wa-)'],
    'Website “achievable model” identity card. Develop: turn each field into a full sentence (اِسْمِي مَرْيَم. عُمْرِي … أَنَا بَرِيطَانِيَّةٌ. أَتَكَلَّمُ …).'),
  F.selfCheckSlide([
    { route: 'core', text: 'My nationality ending matches the person (-iyy or -iyya).' },
    { route: 'core', text: 'I used أَتَكَلَّمُ before a language.' },
    { route: 'develop', text: 'I gave my origin with أَنَا مِنْ …' },
    { route: 'develop', text: 'I joined languages with “and” (wa-).' },
    { route: 'stretch', text: 'I used understand, read and write in.' },
  ]),
  F.exitTicket(bank(4, 'finalQuiz', [2, 4, 6]), 10),
  F.prepSlide({
    ...NEXT,
    words: [['طَالِبٌ', 'a student (m.)', 'f. طَالِبَةٌ'], ['مُعَلِّمٌ', 'a teacher (m.)', 'f. مُعَلِّمَةٌ'], ['وَلَدٌ · بِنْتٌ', 'a boy · a girl', ''], ['جَدِيدٌ', 'new (m.)', 'f. جَدِيدَةٌ'], ['ة', 'tāʾ marbūṭa: a feminine clue', '']],
    questionEn: 'Look at the five words: which ending shows the feminine form? Find two more words with it at home.',
    questionAr: 'طَالِبٌ ← طَالِبَةٌ',
    homework: {
      core: 'Website F2-L04: the Passport Mission (8 cards) and the picture game “Nationality and Language”.',
      develop: 'Your identity card + four connected sentences (type, draw or paper route).',
      stretch: 'Add all four language verbs, then the ten-question checkpoint (aim for 8/10).',
    },
    wordsSource: 'The five words are from the website F2-L05 active vocabulary (people-noun pairs, the first adjective pair and the ة clue).',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: learn 5 words + spot the feminine ة.' }),
];

module.exports = { meta, slides };
