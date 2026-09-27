'use strict';
/*
 * TC-L07 · Documents, Texts and Digital Information
 * Website: Advanced Topics › Topic C › Lesson 7 (reuses P3-L02 “Planning a Trip — Booking, Itineraries and Travel
 * Documents”; Topic C focus “Interpret messages, forms, webpages and instructions critically”; grammar: imperatives;
 * passive; relative pronouns). Picture match: website lesson game “Document Detective”.
 */
const C = require('./common');
const site = require('../site-data/p3-content.json').lessons.find((l) => l.code === 'P3-L02');
const game = require('../site-data/advanced-topic-visual-games.json').c07;
const G = site.grammar;
const { q, fromSite, splitPrompt } = C;

const meta = C.meta({
  n: 7, fileTitle: 'Documents_Texts_Digital_Information', chip: 'Documents & Information',
  title: 'Documents, Texts and Digital Information', arabic: 'الوَثَائِقُ وَالنُّصُوصُ وَالمَعْلُومَاتُ الرَّقْمِيَّةُ',
  focus: 'Interpret messages, forms and instructions: travel documents, booking and staying in every tense (أَحْجِزُ · حَجَزْتُ · سَأَحْجِزُ · أُقِيمُ فِي) and the instructions found on forms (أَحْضِرْ · سَجِّلْ).',
  icon: 'FaPassport',
});
const NEXT = { nextCode: 'TC-L08', nextTitle: 'Buildings, Services and Urban Areas', nextAr: 'المَبَانِي وَالخَدَمَاتُ وَالمَنَاطِقُ الحَضَرِيَّةُ' };
const imp = (n, he, doit, en, tr, core) => ({ n, ar: `{k|${doit}}`, en, tr, tag: 'instruction', core, forms: [{ l: 'he …', ar: he }, { l: 'do it!', ar: doit }] });

const confirmation = `رِسَالَةُ تَأْكِيدِ الحَجْزِ
شُكْرًا لَكَ! تَمَّ حَجْزُ رِحْلَتِكَ إِلَى مَرَّاكُشَ.
مَوْعِدُ القِيَامِ: يَوْمَ السَّبْتِ، السَّاعَةَ العَاشِرَةَ صَبَاحًا.
البَوَّابَةُ: ١٢  ·  الدَّرَجَةُ الاِقْتِصَادِيَّةُ.
وَزْنُ الأَمْتِعَةِ: ٢٠ كِيلُوغْرَامًا فَقَطْ.
سَتُقِيمُ فِي فُنْدُقٍ بِخَمْسِ نُجُومٍ قُرْبَ المَدِينَةِ القَدِيمَةِ.
مُهِمٌّ: أَحْضِرْ جَوَازَ سَفَرِكَ وَالتَّأْشِيرَةَ، وَسَجِّلِ الوُصُولَ إِلِكْتْرُونِيًّا قَبْلَ الرِّحْلَةِ.`;

const slides = [
  C.titleSlide({
    n: 7,
    source: 'The website lesson reuses P3-L02 (Planning a Trip — Booking, Itineraries and Travel Documents) with the Topic C focus “Interpret messages, forms, webpages and instructions critically” (grammar: imperatives; passive; relative pronouns). The picture match is the website lesson game “Document Detective”; the “digital document sort” is the website’s advanced application challenge. The booking-confirmation document is teacher-made using only website vocabulary.',
    support: `• P3-L02 is B1+ language. CORE: travel-document words + the two website verbs in the present and future (أَحْجِزُ / سَأَحْجِزُ · أُقِيمُ فِي / سَأُقِيمُ فِي) + reading a short booking confirmation for key facts. DEVELOP: the past and past perfect (حَجَزْتُ · كُنْتُ قَدْ حَجَزْتُ), instructions on forms (imperatives) and الَّذِي / الَّتِي. STRETCH: the website’s two conditional types.
• Tense table with colour (blue = WHO, teal = time marker), transliteration, picture match, a “document detective” reading with a glossary, and a read-along listening with English.
• Urdu bridge words (سفر، مسافر، جدول، وزن، مدت).`,
  }),
  C.welcomeSlide(),
  C.journeySlide({ teach: 'Document words, then book / stay in every tense.', wedo: 'Picture match, read a document, build, fix and listen.', next: 'TC-L08' }),
  C.doNow({
    questions: [
      q('Which phrase means “passport”?', ['جَوَازُ سَفَرٍ', 'تَذْكِرَةٌ', 'حَجْزٌ'], 'Prepared at home: جَوَازُ سَفَرٍ = passport · تَذْكِرَةٌ = ticket · حَجْزٌ = booking.'),
      q('What does مَوْعِدٌ mean?', ['appointment', 'message', 'ticket'], 'Prepared at home: مَوْعِدٌ = appointment, time.'),
      q('Choose the accurate phrase.', ['أَتَفَاعَلُ مَعَ المُعَلِّمِ', 'أَتَفَاعَلُ عَلَى المُعَلِّمِ', 'أَتَفَاعَلُ عَنِ المُعَلِّمِ'], 'TC-L06: يَتَفَاعَلُ always with مَعَ.'),
      q('Which word means “we must”?', ['يَجِبُ أَنْ', 'بِسَبَبِ', 'مِنْ نَاحِيَةٍ'], 'TC-L05: يَجِبُ أَنْ + verb (fatḥa).'),
      q('What does أُرْسِلُ mean?', ['I send', 'he sends', 'we send'], 'TC-L06: أُـ = I.'),
    ],
    keyIdea: { text: 'The same verb shows TIME: before (حَجَزْتُ), now (أَحْجِزُ), later (سَأَحْجِزُ).', ar: 'حَجَزْ{w|تُ}  ·  {w|أَ}حْجِزُ  ·  {k|سَ}أَحْجِزُ' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home (Flipped Learning follow-up). Questions 3–5 retrieve TC-L06 and TC-L05.',
  }),
  C.objectivesSlide(site.objectives, {
    core: ['I can name 6 travel documents and read a booking message for key facts.', 'I can say أَحْجِزُ / سَأَحْجِزُ and أُقِيمُ فِي / سَأُقِيمُ فِي.'],
    develop: ['I can use the past and past perfect: حَجَزْتُ · كُنْتُ قَدْ حَجَزْتُ.', 'I can understand instructions on a form: أَحْضِرْ · سَجِّلْ.'],
    stretch: ['I can use both conditionals with يَحْجِزُ.', 'I can write a 100–110-word itinerary.'],
  }, 1, 'The Core statements carry the Topic C focus for this lesson (interpret messages, forms and instructions). The website objectives on the left are the P3-L02 objectives.'),
  C.keywordsSlide({
    text: '32 words from the website in 5 groups. Learn the CORE words first. Hear it → say it → see it → use it.',
    groups: [
      { head: 'GROUP 1', name: 'Documents · 6' },
      { head: 'GROUP 2', name: 'At the airport · 6' },
      { head: 'GROUP 3', name: 'Staying · 6' },
      { head: 'GROUP 4', name: 'Two verbs, four times · 8' },
      { head: 'GROUP 5', name: 'Instructions · 6' },
    ],
    bridge: [
      { ar: 'سَفَرٌ', urdu: 'سفر', tr: 'safar', en: 'travel' },
      { ar: 'مُسَافِرٌ', urdu: 'مسافر', tr: 'musāfir', en: 'traveller' },
      { ar: 'جَدْوَلٌ', urdu: 'جدول', tr: 'jadwal', en: 'table, schedule' },
      { ar: 'وَزْنٌ', urdu: 'وزن', tr: 'wazn', en: 'weight' },
      { ar: 'مُدَّةٌ', urdu: 'مدت', tr: 'muddat', en: 'duration' },
    ],
    notes: `URDU BRIDGE: سفر (journey — جَوَازُ سَفَرٍ “permit for travel”), مسافر (traveller), جدول (table — جَدْوَلُ رِحْلَةٍ = itinerary), وزن (weight — وَزْنُ الأَمْتِعَةِ), مدت (period — مُدَّةُ الرِّحْلَةِ).
Groups 1–4 are the website P3-L02 vocabulary (تَذْكِرَة from the website reading); Group 5 turns website verbs into instructions (imperatives — Topic C grammar focus).`,
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1', title: 'Travel documents', ar: 'وَثَائِقُ السَّفَرِ',
    items: [
      { n: 1, ar: 'جَوَازُ سَفَرٍ', en: 'passport', tr: 'ja-wā-zu sa-far', tag: 'iḍāfa', core: true, forms: [{ l: 'permit', ar: 'جَوَازٌ' }, { l: 'travel', ar: 'سَفَرٌ' }] },
      { n: 2, ar: 'تَأْشِيرَةٌ', en: 'visa', tr: 'taʾ-shī-ra · pl. taʾ-shī-rāt', tag: 'noun · f.', core: true, forms: [{ l: 'sg.', ar: 'تَأْشِيرَةٌ' }, { l: 'pl.', ar: 'تَأْشِيرَاتٌ' }] },
      { n: 3, ar: 'تَذْكِرَةٌ', en: 'ticket', tr: 'tadh-ki-ra · pl. ta-dhā-kir', tag: 'noun · f.', core: true, forms: [{ l: 'sg.', ar: 'تَذْكِرَةٌ' }, { l: 'pl.', ar: 'تَذَاكِرُ' }] },
      { n: 4, ar: 'حَجْزٌ', en: 'a booking', tr: 'ḥajz', tag: 'noun · m.', core: true, note: 'Verb: يَحْجِزُ = books.' },
      { n: 5, ar: 'تَأْمِينُ سَفَرٍ', en: 'travel insurance', tr: 'taʾ-mī-nu sa-far', tag: 'iḍāfa', core: true },
      { n: 6, ar: 'جَدْوَلُ رِحْلَةٍ', en: 'itinerary', tr: 'jad-wa-lu riḥ-la', tag: 'iḍāfa', core: true, forms: [{ l: 'table', ar: 'جَدْوَلٌ' }, { l: 'trip', ar: 'رِحْلَةٌ' }] },
    ],
    notes: `KEY WORDS — Booking and documents (website P3-L02; تَذْكِرَةُ الطَّائِرَةِ from the website reading). Hear → Say → See → Use.
Gesture: hold up a passport (open hands like a small book), stamp it (visa), tear a ticket, tick a box (booking).
Website game: هٰذَا جَوَازُ سَفَرٍ = This is a passport.`,
  },
  {
    type: 'vocab', stage: 'teach', min: 1, eyebrow: 'Key words · Group 2 · Develop', title: 'At the airport', ar: 'فِي المَطَارِ',
    items: [
      { n: 7, ar: 'تَسْجِيلُ الوُصُولِ', en: 'check-in', tr: 'tas-jī-lu l-wu-ṣūl', tag: 'iḍāfa' },
      { n: 8, ar: 'البَوَّابَةُ', en: 'the gate', tr: 'al-baw-wā-ba', tag: 'noun · f.' },
      { n: 9, ar: 'وَزْنُ الأَمْتِعَةِ', en: 'baggage weight', tr: 'waz-nu l-am-ti-ʿa', tag: 'iḍāfa' },
      { n: 10, ar: 'صَالَةُ المُغَادَرَةِ', en: 'the departure lounge', tr: 'ṣā-la-tu l-mu-ghā-da-ra', tag: 'iḍāfa' },
      { n: 11, ar: 'صَالَةُ الوُصُولِ', en: 'the arrivals hall', tr: 'ṣā-la-tu l-wu-ṣūl', tag: 'iḍāfa' },
      { n: 12, ar: 'الدَّرَجَةُ {m|الاِقْتِصَادِ}{e|يَّةُ}', en: 'economy class', tr: 'ad-da-ra-ja l-iq-ti-ṣā-diy-ya', tag: 'noun + nisba' },
    ],
    notes: 'KEY WORDS — at the airport (website P3-L02). Develop / Stretch; Core students listen and repeat. All but one are iḍāfa phrases (TC-L02).',
  },
  {
    type: 'vocab', stage: 'teach', min: 1, eyebrow: 'Key words · Group 3', title: 'Staying somewhere', ar: 'الإِقَامَةُ',
    items: [
      { n: 1, ar: 'يُقِيمُ {k|فِي}', en: 'stays at', tr: 'yu-qī-mu fī', tag: 'verb + فِي', core: true, note: 'Fixed with فِي (website).' },
      { n: 2, ar: 'فُنْدُقٌ', en: 'hotel', tr: 'fun-duq · pl. fa-nā-diq', tag: 'noun · m.', core: true, forms: [{ l: 'sg.', ar: 'فُنْدُقٌ' }, { l: 'pl.', ar: 'فَنَادِقُ' }] },
      { n: 3, ar: 'شَقَّةٌ مَفْرُوشَةٌ', en: 'a furnished apartment', tr: 'shaq-qa maf-rū-sha', tag: 'noun + adjective', forms: [{ l: 'sg.', ar: 'شَقَّةٌ' }, { l: 'pl.', ar: 'شُقَقٌ' }] },
      { n: 4, ar: 'رِيَاضٌ {m|تَقْلِيدِ}{e|يٌّ}', en: 'a traditional riad (house)', tr: 'ri-yāḍ taq-lī-diyy', tag: 'noun + nisba', note: 'A Moroccan courtyard house (listening).' },
      { n: 5, ar: 'مَوْعِدُ القِيَامِ', en: 'the departure time', tr: 'maw-ʿi-du l-qi-yām', tag: 'iḍāfa' },
      { n: 6, ar: 'مُدَّةُ الرِّحْلَةِ', en: 'the journey duration', tr: 'mud-da-tu r-riḥ-la', tag: 'iḍāfa' },
    ],
    notes: `KEY WORDS — Accommodation (website P3-L02). Website teaching point: “Use يُقِيمُ فِي for staying at a hotel — it is the formal choice, not يَسْكُنُ.”
Also on the website: فُنْدُقٌ بِخَمْسِ نُجُومٍ (a five-star hotel).`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Key words · Group 4 · grammar part 1 · website table', title: 'Two verbs, four times', ar: 'فِعْلَانِ فِي أَرْبَعَةِ أَزْمِنَةٍ',
    cols: [{ label: 'Time', w: 2.4 }, { label: 'يَحْجِزُ · book', w: 3.0, size: 22 }, { label: 'يُقِيمُ فِي · stay at', w: 3.0, size: 22 }, { label: 'Website example', w: 3.93, size: 17 }],
    rows: [
      { core: true, cells: ['now (present)', { ar: '{w|أَ}{m|حْجِزُ}', sub: 'aḥ-ji-zu · I book' }, { ar: '{w|أُ}{m|قِيمُ} فِي', sub: 'u-qī-mu fī · I stay' }, 'أَحْجِزُ تَذَاكِرِي مُبَكِّرًا'] },
      { core: true, cells: ['later (future)', { ar: '{k|سَ}{w|أَ}{m|حْجِزُ}', sub: 'sa-ʾaḥ-ji-zu · I will book' }, { ar: '{k|سَ}{w|أُ}{m|قِيمُ} فِي', sub: 'sa-ʾu-qī-mu fī' }, 'سَأَحْجِزُ رِحْلَةً إِلَى مَرَّاكُشَ'] },
      { cells: ['before (past)', { ar: '{m|حَجَزْ}{w|تُ}', sub: 'ḥa-jaz-tu · I booked' }, { ar: '{m|أَقَمْ}{w|تُ} فِي', sub: 'a-qam-tu fī · I stayed' }, 'حَجَزْتُ الفُنْدُقَ قَبْلَ شَهْرٍ'] },
      { cells: ['had (past perfect)', { ar: '{k|كُنْتُ قَدْ} حَجَزْتُ', sub: 'kun-tu qad ḥa-jaz-tu' }, { ar: '{k|كُنْتُ قَدْ} أَقَمْتُ فِي', sub: 'kun-tu qad a-qam-tu fī' }, 'كُنْتُ قَدْ حَجَزْتُ رِحْلَتِي قَبْلَ شَهْرَيْنِ'] },
    ],
    notes: `GRAMMAR PART 1 — the website table “The 2028 verbs across tenses” (present, past, future, past perfect of يَحْجِزُ and يُقِيمُ فِي), with website examples from the grammar rules and listening.
Colour: blue = WHO. In the present and future WHO is at the START (أَـ / أُـ = I); in the past WHO moves to the END (ـتُ = I). Teal = the time marker (سَـ = will · كُنْتُ قَدْ = had).
• CORE: rows 1–2 (now and later). • DEVELOP: add row 3. • STRETCH: all four.
Website teaching point: “Present أَحْجِزُ، past حَجَزْتُ، future سَأَحْجِزُ، past perfect كُنْتُ قَدْ حَجَزْتُ.”`,
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 5 · grammar part 2 · imperative', title: 'Instructions: “Do it!”', ar: 'فِعْلُ الأَمْرِ',
    items: [
      imp(1, 'يَحْجِزُ', 'اِحْجِزْ', 'Book!', 'iḥ-jiz', true),
      imp(2, 'يُحْضِرُ', 'أَحْضِرْ', 'Bring!', 'aḥ-ḍir', true),
      imp(3, 'يُسَجِّلُ', 'سَجِّلْ', 'Register! Check in!', 'saj-jil', true),
      imp(4, 'يُجَدِّدُ', 'جَدِّدْ', 'Renew!', 'jad-did'),
      imp(5, 'يَشْتَرِي', 'اِشْتَرِ', 'Buy!', 'ish-ta-ri'),
      imp(6, 'يَقْرَأُ', 'اِقْرَأْ', 'Read!', 'iq-raʾ'),
    ],
    notes: `GRAMMAR PART 2 — instructions (imperatives), the Topic C grammar focus for reading forms and messages. These are teacher-made from website verbs: يَحْجِزُ، يُجَدِّدُ (أُجَدِّدُ جَوَازَ سَفَرِي), يُسَجِّلُ الوُصُولَ, يَشْتَرِي (أَشْتَرِي تَأْمِينَ سَفَرٍ), and the common instruction verbs أَحْضِرْ / اِقْرَأْ.
Rule of thumb for Core: an instruction has NO person letter at the start and a sukūn at the end — “Do it!”. Examples on forms: أَحْضِرْ جَوَازَ سَفَرِكَ · اِحْجِزْ مُبَكِّرًا · سَجِّلِ الوُصُولَ إِلِكْتْرُونِيًّا.
Stretch: notice the vowel before the root: اِحْجِزْ / اِقْرَأْ / اِشْتَرِ (i-) vs أَحْضِرْ (a-).`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 3 · reading documents', title: 'Stay at · do it · it has been done', ar: 'لُغَةُ الوَثَائِقِ',
    cards: [
      { chip: 'STAY AT · فِي', head: 'يُقِيمُ فِي', big: 'أُقِيمُ فِي فُنْدُقٍ قَرِيبٍ مِنَ الشَّاطِئِ', en: 'I stay at a hotel near the beach.', clue: 'يُقِيمُ always takes فِي before the place (website rule).' },
      { chip: 'INSTRUCTION · imperative', color: '0E7C86', head: 'أَحْضِرْ', big: 'أَحْضِرْ جَوَازَ سَفَرِكَ', en: 'Bring your passport.', clue: 'Forms and messages give instructions: أَحْضِرْ · سَجِّلْ · اِحْجِزْ.' },
      { chip: 'DONE · تَمَّ + noun', color: '7B3FA0', head: 'تَمَّ', big: 'تَمَّ حَجْزُ رِحْلَتِكَ', en: 'Your trip has been booked.', clue: 'In messages, تَمَّ + a verbal noun = “has been done” (passive meaning).' },
    ],
    error: { text: 'The website’s common mistakes: dropping فِي after يُقِيمُ, and a present verb after إِذَا.', pairs: [['أُقِيمُ فِي فُنْدُقٍ', 'أُقِيمُ فُنْدُقًا'], ['إِذَا حَجَزْتَ', 'إِذَا تَحْجِزُ']] },
    notes: `GRAMMAR PART 3 — reading documents. Card 1 is the website rule “يُقِيمُ فِي” (website example). Cards 2–3 are the Topic C focus (imperatives; passive) as it appears in real messages — teacher-made examples used in today’s booking confirmation.
Website common error: “${G.common_error}”`,
  },
  {
    type: 'formula', stage: 'teach', flex: true, eyebrow: 'Grammar focus · Part 4 · FLEX · relative pronouns', title: 'The … that …: الَّذِي / الَّتِي', ar: 'الاِسْمُ المَوْصُولُ',
    cols: [
      { label: 'the thing', ar: 'الاِسْمُ', color: '1B3B6F', pale: 'EEF3FA' },
      { label: 'that / which (key word)', ar: 'الَّذِي / الَّتِي', color: '0E7C86', pale: 'E3F2F3' },
      { label: 'more information', ar: 'التَّفْصِيلُ', color: '8A6D1E', pale: 'F8F0DC' },
    ],
    rows: [
      { en: 'the hotel that I booked', cells: ['الفُنْدُقُ', '{k|الَّذِي}', 'حَجَزْتُهُ'] },
      { en: 'the passport that I renewed', cells: ['الجَوَازُ', '{k|الَّذِي}', 'جَدَّدْتُهُ'] },
      { en: 'the visa that I got online', cells: ['التَّأْشِيرَةُ', '{k|الَّتِي}', 'حَصَلْتُ عَلَيْهَا إِلِكْتْرُونِيًّا'] },
      { en: 'the message that confirms the time', cells: ['الرِّسَالَةُ', '{k|الَّتِي}', 'تُؤَكِّدُ المَوْعِدَ'] },
    ],
    foot: 'Use الَّذِي after a masculine noun and الَّتِي after a feminine noun (ـة). ـهُ / ـهَا = it.',
    notes: `GRAMMAR PART 4 — relative pronouns (Topic C grammar focus; FLEX — Develop / Stretch). Teacher-made phrases from website language: listening (جَدَّدْتُ جَوَازَ سَفَرِي · التَّأْشِيرَةُ فَقَدْ حَصَلْتُ عَلَيْهَا إِلِكْتْرُونِيًّا) and the website game (تُؤَكِّدُ الرِّسَالَةُ … المَوْعِدَ).
Stretch: notice the “it” pronoun at the end (ـهُ / عَلَيْهَا) — TC-L06 pronoun reference.`,
  },
  {
    type: 'ruleRows', stage: 'teach', flex: true, eyebrow: 'Grammar focus · Part 5 · website examples · FLEX · Stretch', title: 'The four website rules with examples', ar: 'أَمْثِلَةُ القَوَاعِدِ',
    rows: G.rules.map((r) => ({ title: r.heading, formula: r.formula, examples: r.examples })),
    notes: `WEBSITE GRAMMAR RULES AND EXAMPLES (FLEX — Stretch or homework): present/past/future, past perfect, Type 1 (إِذَا حَجَزْتَ … سَـ) and Type 2 (لَوْ حَجَزْتُ … لَـ) with يُقِيمُ فِي. Website overview: “${G.overview}”`,
  },
  C.quickCheck([splitPrompt(G.quiz[0]), splitPrompt(G.quiz[1]), splitPrompt(G.quiz[5]), fromSite(G.quiz[6])], 'website grammar quiz questions 1, 2, 6 and 7.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me plan a trip', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Where? (later)', ar: '{k|سَ}أَحْجِزُ رِحْلَةً إِلَى مَرَّاكُشَ', think: 'سَـ = will. A website sentence.' },
      { head: 'Documents (before)', ar: 'جَدَّدْ{w|تُ} جَوَازَ سَفَرِي', think: 'Past: ـتُ at the END = I.' },
      { head: 'Where will I stay?', ar: 'سَأُقِيمُ {k|فِي} رِيَاضٍ تَقْلِيدِيٍّ', think: 'يُقِيمُ always + فِي.' },
      { head: 'Advice (instruction)', ar: '{k|اِحْجِزْ} مُبَكِّرًا!', think: 'An instruction: “Book early!”' },
    ],
    legend: ['w', 'k'], legendLabels: { w: 'WHO', k: 'TIME / KEY WORD' },
    model: '{k|سَ}أَحْجِزُ رِحْلَةً إِلَى مَرَّاكُشَ. جَدَّدْ{w|تُ} جَوَازَ سَفَرِي، وَسَأُقِيمُ {k|فِي} رِيَاضٍ تَقْلِيدِيٍّ فِي المَدِينَةِ القَدِيمَةِ. نَصِيحَتِي: {k|اِحْجِزْ} مُبَكِّرًا!',
    modelEn: 'I will book a trip to Marrakesh. I renewed my passport, and I will stay in a traditional riad in the old city. My advice: book early!',
    notes: `I DO (3 min) — teacher models with a think-aloud; students watch, then COPY the plan into their books.
Step 1 — “Later → سَـ: سَأَحْجِزُ رِحْلَةً إِلَى مَرَّاكُشَ.”
Step 2 — “Before → past: جَدَّدْتُ. In the past the ‘I’ is at the END: ـتُ.”
Step 3 — “Stay → سَأُقِيمُ فِي — never without فِي.”
Step 4 — “An instruction for a friend: اِحْجِزْ مُبَكِّرًا! — no person letter, just ‘Do it!’.”
Built from website language: grammar example (سَأَحْجِزُ رِحْلَةً إِلَى مَرَّاكُشَ), listening (جَدَّدْتُ جَوَازَ سَفَرِي · سَأُقِيمُ فِي رِيَاضٍ تَقْلِيدِيٍّ فِي المَدِينَةِ القَدِيمَةِ), reading (أَنْصَحُ دَائِمًا بِالحَجْزِ المُبَكِّرِ).`,
  },
  {
    type: 'models', stage: 'ido', min: 1, eyebrow: 'I do · model sentences from the website', title: 'Four sentences to borrow', ar: 'جُمَلٌ نَمُوذَجِيَّةٌ',
    rows: [
      { ar: game.items[0].sentence, en: 'This is a passport.', tip: 'Website game — a Core sentence.' },
      { ar: site.patterns[2].ar + '.', en: 'I stay in a traditional riad in the old city.', tip: site.patterns[2].tip },
      { ar: game.items[1].sentence, en: 'The message confirms that the appointment is at ten o’clock.', tip: 'Website game — read a message for the time.' },
      { ar: site.patterns[0].ar + '.', en: 'I had booked my trip two months earlier.', tip: site.patterns[0].tip },
    ],
    notes: `MODEL SENTENCES (1 min) — website lesson game and patterns. Students copy TWO that are useful for them.
• Core: copy 1 and 2 (change the document / the place). • Develop: copy 3 with a different time. • Stretch: copy 4 and add a Type 1 conditional (website pattern: ${site.patterns[1].ar}).`,
  },
  C.gameSlide(game, {
    en: ['This is a passport.', 'The message confirms that the appointment is at ten o’clock.', 'The total amount is twenty-four pounds and fifty pence.'],
    icons: [[['fa6', 'FaPassport', '1B3B6F']], [['fa6', 'FaEnvelope', '1D5FBF'], ['fa6', 'FaClock', 'C77700']], [['fa6', 'FaReceipt', '5A6472']]],
    labels: ['جواز سفر', '10:00', '£24.50'],
    order: [1, 2, 0],
    notes: 'Key words to spot: جَوَازُ سَفَرٍ (passport), الرِّسَالَةُ … السَّاعَةِ العَاشِرَةِ (message … ten o’clock), المَبْلَغُ الإِجْمَالِيُّ (the total amount). Stretch: read the full number in sentence 3 aloud.',
  }),
  {
    type: 'passage', stage: 'wedo', min: 2, eyebrow: 'We do · document detective (Topic C focus)', title: 'Read a booking confirmation', ar: 'مُحَقِّقُ الوَثَائِقِ',
    docLines: confirmation.split('\n'),
    glossaryHead: 'KEY WORDS',
    glossary: [
      ['تَأْكِيدُ الحَجْزِ', 'booking confirmation'], ['تَمَّ حَجْزُ …', '… has been booked'], ['مَوْعِدُ القِيَامِ', 'departure time'], ['يَوْمَ السَّبْتِ', 'on Saturday'],
      ['البَوَّابَةُ', 'the gate'], ['وَزْنُ الأَمْتِعَةِ', 'baggage weight'], ['سَتُقِيمُ فِي', 'you will stay at'], ['مُهِمٌّ', 'important'], ['أَحْضِرْ', 'bring!'], ['سَجِّلِ الوُصُولَ', 'check in!'],
    ],
    notes: `DOCUMENT DETECTIVE (2 min reading) — Topic C focus “Interpret messages, forms, webpages and instructions critically”, and the website application “Digital document sort … extract the key fact needed for a realistic task”.
The document is teacher-made using only website vocabulary (P3-L02 words + the website game). Read it aloud once while students follow. SEND: cover the text and uncover one line at a time; Core students use the glossary.
Point out the three “document” structures: تَمَّ حَجْزُ (has been booked), the instructions أَحْضِرْ / سَجِّلْ, and the future سَتُقِيمُ فِي.
Translation for the teacher: Booking confirmation. Thank you! Your trip to Marrakesh has been booked. Departure time: Saturday, 10 a.m. Gate: 12 · Economy class. Baggage weight: 20 kg only. You will stay in a five-star hotel near the old city. Important: bring your passport and visa, and check in online before the trip.`,
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · document detective · questions', title: 'Find the key facts', ar: 'اِسْتَخْرِجِ المَعْلُومَاتِ',
    seed: 2,
    questions: [
      q('When does the flight leave?', ['Saturday, 10 a.m.', 'Sunday, 10 p.m.', 'Saturday, 12 noon'], 'مَوْعِدُ القِيَامِ: يَوْمَ السَّبْتِ، السَّاعَةَ العَاشِرَةَ صَبَاحًا.'),
      q('Which gate?', ['12', '20', '10'], 'البَوَّابَةُ: ١٢'),
      q('How much baggage can you take?', ['20 kg', '12 kg', '5 kg'], 'وَزْنُ الأَمْتِعَةِ: ٢٠ كِيلُوغْرَامًا فَقَطْ.'),
      q('Where will you stay?', ['A five-star hotel near the old city', 'A furnished apartment', 'A traditional riad'], 'سَتُقِيمُ فِي فُنْدُقٍ بِخَمْسِ نُجُومٍ قُرْبَ المَدِينَةِ القَدِيمَةِ.'),
      q('What must you bring?', ['Your passport and visa', 'Your ticket and insurance', 'Nothing'], 'أَحْضِرْ جَوَازَ سَفَرِكَ وَالتَّأْشِيرَةَ.'),
    ],
    side: { kind: 'core', label: 'CORE', text: 'Find the KEY WORD first.\nWhen? مَوْعِدُ\nGate? البَوَّابَةُ\nBaggage? الأَمْتِعَةُ\nBring? أَحْضِرْ' },
    answerSlide: { eyebrow: 'We do · document detective · answers', title: 'Key facts: answers', ar: 'الإِجَابَاتُ' },
    notes: 'DOCUMENT DETECTIVE questions (teacher-made). Students type five letters in the chat. Core: questions 1, 2 and 5 with the key-word clues. Stretch: explain what تَمَّ حَجْزُ means and why it is useful in official messages.',
    answerNotes: 'Reveal. For each answer, a student reads the exact line from the document (by invitation).',
  },
  {
    type: 'builder', stage: 'wedo', min: 3, eyebrow: 'We do · guided practice · sentence builder', title: 'Build the sentence', ar: 'اِبْنِ الجُمْلَةَ',
    rows: [
      { en: 'I will stay in a hotel.', cols: [['أُقِيمُ', 'سَأُقِيمُ'], ['فِي', 'عَلَى'], ['فُنْدُقٍ.', 'فُنْدُقًا.']], key: [1, 0, 0], why: 'Future سَـ; يُقِيمُ فِي + place.' },
      { en: 'I booked the hotel a month ago.', cols: [['أَحْجِزُ', 'حَجَزْتُ'], ['الفُنْدُقَ', 'التَّأْشِيرَةَ'], ['بَعْدَ شَهْرٍ.', 'قَبْلَ شَهْرٍ.']], key: [1, 0, 1], why: 'Past: حَجَزْتُ (ـتُ = I); قَبْلَ = ago, before.' },
      { en: 'Bring your passport and visa!', cols: [['أَحْضِرْ', 'يُحْضِرُ'], ['جَدْوَلَ رِحْلَتِكَ', 'جَوَازَ سَفَرِكَ'], ['وَالتَّأْشِيرَةَ!', 'وَالبَوَّابَةَ!']], key: [0, 1, 0], why: 'An instruction: أَحْضِرْ.' },
    ],
    answerSlide: { min: 0, eyebrow: 'We do · sentence builder answers', title: 'Check your sentences', ar: 'تَحَقَّقْ مِنْ جُمَلِكَ' },
    notes: `WE DO — sentence builder (3 min). Teacher-made from website sentences (grammar quiz, mission, the booking confirmation).
Students choose ONE box per column (start from Column 1 on the right) and type the letters, e.g. “1: B A A”. ↔ Rehearse 30s first.
Core: sentences 1 and 3. Develop / Stretch: sentence 2 and explain the wrong options.`,
  },
  {
    type: 'sorter', stage: 'wedo', flex: true, eyebrow: 'We do · website sorter', title: 'Present, past or future?', ar: 'صَنِّفْ',
    categories: ['Present', 'Past / past perfect', 'Future / conditional'],
    items: [
      { ar: 'سَأَحْجِزُ', cat: 2 }, { ar: 'أَحْجِزُ', cat: 0 }, { ar: 'حَجَزْتُ', cat: 1 }, { ar: 'أُقِيمُ فِي', cat: 0 },
      { ar: 'كُنْتُ قَدْ حَجَزْتُ', cat: 1 }, { ar: 'إِذَا حَجَزْتَ سَتَحْصُلُ', cat: 2 }, { ar: 'يَحْجِزُ', cat: 0 }, { ar: 'أَقَمْتُ فِي', cat: 1 }, { ar: 'لَوْ حَجَزْتُ لَكَانَ', cat: 2 },
    ],
    answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — website sorter (FLEX, 2 min). Clue for Core: سَـ at the start = future; ـتُ at the end = past; أَـ / أُـ / يَـ at the start = present.',
  },
  C.morePractice([splitPrompt(G.quiz[2], { n: 5 }), splitPrompt(G.quiz[3], { n: 6 }), splitPrompt(G.quiz[4], { n: 7 }), fromSite(G.quiz[7], { n: 8 })], 'website quiz 3, 4, 5, 8'),
  C.repairSlide(site, [
    'What is wrong? Which small word must come after أُقِيمُ?',
    'What is wrong? After إِذَا, do we use the past or the present?',
    'What is wrong? After لَوْ, which result word: سَـ or لَـ?',
  ]),
  C.listening(site, {
    coreTip: 'Listen twice. Core: questions 1–3 — listen for قَبْلَ شَهْرَيْنِ (two months ago), مُبَكِّرًا (early) and رِيَاضٍ تَقْلِيدِيٍّ (a traditional riad).',
    routes: 'Core: questions 1–3. Develop / Stretch: all 5.',
    gloss: [
      ['يَقُولُ المُسَافِرُ: كُنْتُ قَدْ حَجَزْتُ رِحْلَتِي إِلَى مَرَّاكُشَ قَبْلَ شَهْرَيْنِ، وَكُنْتُ قَدْ جَدَّدْتُ جَوَازَ سَفَرِي.', 'The traveller says: I had booked my trip to Marrakesh two months ago, and I had renewed my passport.'],
      ['أَحْجِزُ دَائِمًا تَذَاكِرِي مُبَكِّرًا لِأَحْصُلَ عَلَى الدَّرَجَةِ الاِقْتِصَادِيَّةِ بِسِعْرٍ مُنَاسِبٍ.', 'I always book my tickets early to get economy class at a good price.'],
      ['سَأُقِيمُ فِي رِيَاضٍ تَقْلِيدِيٍّ فِي المَدِينَةِ القَدِيمَةِ.', 'I will stay in a traditional riad in the old city.'],
      ['وَأَشَارَ دَلِيلُ السَّفَرِ إِلَى أَنَّهُ إِذَا وَصَلْتُ مُبَكِّرًا، سَأَزُورُ سُوقَ الجُدَيْدَةِ قَبْلَ الزِّحَامِ.', 'The travel guide said that if I arrive early, I will visit the market before the crowds.'],
      ['أَمَّا التَّأْشِيرَةُ فَقَدْ حَصَلْتُ عَلَيْهَا إِلِكْتْرُونِيًّا.', 'As for the visa, I got it online.'],
      ['وَلَوْ حَجَزْتُ فِي فُنْدُقٍ حَدِيثٍ خَارِجَ المَدِينَةِ، لَفَقَدْتُ سِحْرَ الأَحْيَاءِ القَدِيمَةِ.', 'Had I booked a modern hotel outside the city, I would have lost the charm of the old quarters.'],
      ['سَأَحْمِلُ حَقِيبَةً وَاحِدَةً فَقَطْ لِأَتَجَنَّبَ رُسُومَ الأَمْتِعَةِ الزَّائِدَةِ.', 'I will carry only one bag to avoid extra baggage fees.'],
    ],
  }),
  C.speakingSlide(site, {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'مَا الوَثَائِقُ الَّتِي تَحْتَاجُهَا لِلسَّفَرِ؟' },
      { route: 'develop', ar: site.speaking.prompts[0] },
      { route: 'stretch', ar: site.speaking.prompts[1] },
      { route: 'stretch', ar: site.speaking.prompts[2] },
    ],
    stems: [
      { route: 'core', ar: 'أَحْتَاجُ إِلَى ______ وَ ______ .' },
      { route: 'develop', ar: 'حَجَزْتُ ______ ، وَسَأُقِيمُ فِي ______ .' },
      { route: 'stretch', ar: 'إِذَا ______ ، سَـ ______ .' },
      { route: 'sum', ar: 'سَيُقِيمُ / سَتُقِيمُ فِي ______ .' },
    ],
    modelEn: ['When did you book your trip, and where will you stay?', 'Past perfect + future يُقِيمُ فِي'],
    notes: 'Core prompt (teacher-made; it is the preparation question): “Which documents do you need to travel?” — answered with the Core stem, e.g. أَحْتَاجُ إِلَى جَوَازِ سَفَرٍ وَتَذْكِرَةٍ.',
  }),
  C.routesSlide(site, {
    core: { amount: '4 sentences', how: 'Use the frames and word bank on the next slide. Say when you book, where you will stay and which documents you need.' },
    develop: { amount: '6–8 sentences', how: 'Add a past perfect and one “if” sentence, then give a friend one instruction, such as “Book early!”' },
    stretch: { amount: '100–110 words', how: 'Website writing task: a day-by-day itinerary opening with كُنْتُ قَدْ حَجَزْتُ; checklist and phrase bank on the Stretch slide.' },
  }),
  C.framesSlide({
    core: [
      { en: 'I book my ticket early.', ar: 'أَحْجِزُ ______ مُبَكِّرًا .' },
      { en: 'I booked … a month ago.', ar: 'حَجَزْتُ ______ قَبْلَ شَهْرٍ .' },
      { en: 'I will book a trip to …', ar: 'سَأَحْجِزُ رِحْلَةً إِلَى ______ .' },
      { en: 'I will stay in …', ar: 'سَأُقِيمُ فِي ______ .' },
      { en: 'I need a passport and …', ar: 'أَحْتَاجُ إِلَى جَوَازِ سَفَرٍ وَ ______ .' },
    ],
    develop: [
      { en: 'I had booked …', ar: 'كُنْتُ قَدْ حَجَزْتُ ______ .' },
      { en: 'If you book early, …', ar: 'إِذَا حَجَزْتَ مُبَكِّرًا، سَـ ______ .' },
      { en: 'Bring …!', ar: 'أَحْضِرْ ______ !' },
      { en: 'The hotel that I booked is …', ar: 'الفُنْدُقُ الَّذِي حَجَزْتُهُ ______ .' },
      { en: 'The guide said that …', ar: 'أَشَارَ الدَّلِيلُ إِلَى أَنَّ ______ .' },
    ],
    bank: ['جَوَازُ سَفَرٍ', 'تَأْشِيرَةٌ', 'تَذْكِرَةٌ', 'تَأْمِينُ سَفَرٍ', 'فُنْدُقٍ', 'شَقَّةٍ مَفْرُوشَةٍ', 'رِيَاضٍ', 'مَرَّاكُشَ', 'عُمَانَ', 'مُبَكِّرًا', 'قَبْلَ شَهْرٍ', 'الصَّيْفَ القَادِمَ'],
  }),
  C.stretchSlide(site, [
    ['اليَوْمُ الأَوَّلُ: …', 'Day one: …'],
    ['كُنْتُ قَدْ حَجَزْتُ … قَبْلَ …', 'I had booked … before …'],
    ['وَأَشَارَ دَلِيلُ السَّفَرِ إِلَى أَنَّهُ …', 'the travel guide indicated that …'],
    ['إِذَا كَانَ الطَّقْسُ جَيِّدًا، سَـ …', 'if the weather is good, I will …'],
    ['وَلَوْ كُنْتُ قَدْ حَجَزْتُ … لَحَصَلْتُ عَلَى …', 'had I booked …, I would have got …'],
    ['لِذٰلِكَ أَنْصَحُ بِـ …', 'so I recommend …'],
  ]),
  C.modelSlide(site,
    'Day one: I had booked my trip to Casablanca two months ago, and I had renewed my passport. I will arrive at the airport in the morning, and I will stay in a traditional riad in the old city. The travel guide said that if I arrive early, I will visit the market before the crowds. Day two: I will book a trip to the mountains, and if the weather is good, I will walk all day. Day three: I will stay one last night near the beach. Had I booked before the public holiday, I would have got a cheaper price. So I always recommend booking early.',
    ['كُنْتُ قَدْ حَجَزْتُ', 'يُقِيمُ فِي', 'إِذَا … سَـ', 'لَوْ … لَـ'],
    'Core students find the future verbs with سَـ and the places after فِي; Stretch find both conditionals.'),
  C.selfCheckSlide([
    { route: 'core', text: 'I can name travel documents: جَوَازُ سَفَرٍ، تَأْشِيرَةٌ، تَذْكِرَةٌ …' },
    { route: 'core', text: 'I can say أَحْجِزُ / سَأَحْجِزُ and سَأُقِيمُ فِي … and find key facts in a message.' },
    { route: 'develop', text: site.success[1] },
    { route: 'develop', text: 'I understand instructions on a form: أَحْضِرْ، سَجِّلْ، اِحْجِزْ.' },
    { route: 'stretch', text: site.success[2] },
  ]),
  C.exitTicket([splitPrompt(site.final[0]), splitPrompt(site.final[1]), splitPrompt(site.final[2])], site.final.length),
  ...C.readingSlides(site, [
    ['أُخَطِّطُ لِـ', 'I plan (for)'], ['الأَسَاسِيَّاتُ', 'the basics'], ['الطَّائِرَةُ', 'the plane'], ['أُجَدِّدُ', 'I renew'], ['أَشْتَرِي', 'I buy'], ['الأَخِيرَةُ', 'the last'],
    ['المَرْكَزُ', 'the centre'], ['المُنَظِّمُ', 'the organiser'], ['سَجَّلْتُ الوُصُولَ', 'I checked in'], ['نُزُلٌ جَبَلِيٌّ', 'a mountain lodge'], ['العُطْلَةُ الرَّسْمِيَّةُ', 'the public holiday'],
  ]),
  C.prepSlide({
    ...NEXT,
    words: [['مُسْتَشْفًى', 'hospital', ''], ['بَنْكٌ', 'bank', ''], ['مَكْتَبَةٌ', 'library', ''], ['مَقْهًى', 'café', ''], ['مَحَطَّةُ القِطَارِ', 'train station', '']],
    questionEn: 'Write one Arabic sentence: which places are there in your town?',
    questionAr: 'مَاذَا يُوجَدُ فِي مَدِينَتِكَ؟',
    homework: {
      core: 'Website · TC-L07 · play “Document Detective”, then the vocabulary mission.',
      develop: 'Write a message to a friend with three instructions for a trip: اِحْجِزْ · أَحْضِرْ · سَجِّلْ',
      stretch: 'Website · TC-L07 · “Booking Mission” (14 rounds) and the reading “A traveller’s plan”.',
    },
    wordsSource: 'The five words come from the website lesson game “Town Map” and the Topic C “Towns, Buildings, Services & Shopping” bank.',
  }),
  C.closeSlide(NEXT),
];

module.exports = { meta, slides };
