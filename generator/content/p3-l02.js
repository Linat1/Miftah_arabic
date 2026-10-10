'use strict';
/* P3-L02 · Planning a Trip — Booking, Itineraries and Travel Documents — website: Pathways › Progression › P3 › P3-L02 (the syllabus verbs يَحْجِزُ and
 * يُقِيمُ فِي across every tense — present, past, future, past perfect — and in both conditional types; accommodation with يُقِيمُ فِي; purpose لِـ + subjunctive
 * and a reported recommendation in an itinerary). Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live builder,
 * mission and visual game used as published, with waṣl alif shown without a kasra. English added to the patterns; sorter headings in English. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P3')({
  n: 2, fileTitle: 'Planning_a_Trip_Booking_and_Documents', chip: 'Vocabulary',
  title: 'Planning a Trip — Booking, Itineraries and Travel Documents', arabic: 'التَّخْطِيطُ لِرِحْلَةٍ — الحَجْزُ وَالوَثَائِقُ',
  focus: 'Plan a detailed trip with the syllabus verbs yaḥjiz (book) and yuqīm fī (stay at) in every tense — present, past, future, past perfect — and in both conditionals, then write a day-by-day itinerary.',
  icon: 'FaSuitcaseRolling', iconSet: 'fa6',
});

const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const is = (she) => ({ tag: 'I · she', forms: [{ l: 'she', ar: she }] });
const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const site = D.waslFix(D.site('P3-L02'));
const RH = [['Present, past, future', 'aḥjizu · ḥajaztu · sa-aḥjizu'], ['Past perfect', 'kuntu qad ḥajaztu'], ['Type 1 conditional', 'idhā ḥajazta … sa-'], ['Type 2 and yuqīm fī', 'law ḥajaztu … la- · yuqīm fī']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P3-L02', {
  support: `• Core: yaḥjiz and yuqīm fī in the present, past and future (website Core). Develop: add a past perfect and a Type 1 conditional. Stretch: a full itinerary day with four structures, including a Type 2 counterfactual (the website 100–110-word itinerary).
• Syllabus focus: يَحْجِزُ and يُقِيمُ are on the Cambridge 0544 verb list — today students meet them in EVERY tense, so they never freeze on them in an exam.
• Watch the hollow verb: أُقِيمُ (present, long ī) but أَقَمْتُ (past with -tu, SHORT a) and أَقَامَ / أَقَامَتْ (long ā). Students often write أَقَامْتُ ✗.
• Real-life link: many families plan Umrah or visits to relatives — let students plan a real trip if they wish, or a dream one (Marrakesh, Oman, Istanbul).
• Grammar links: past perfect (P2-L03) · Type 1 (P1-L03) · Type 2 (P2-L06) · reported speech (P2-L02) · li- + subjunctive (D units).`,
  teach: 'yaḥjiz and yuqīm fī in every tense, accommodation, both conditionals, purpose li-.',
  wedo: 'Match the booking pictures, build an itinerary day, sort the tenses.',
  next: { nextCode: 'P3-L03', nextTitle: 'Describing Past Holidays — Advanced Narrative', nextAr: 'وَصْفُ العُطَلِ المَاضِيَةِ — السَّرْدُ المُتَقَدِّمُ' },
  objectives: ['Name booking, document and airport vocabulary.', 'Use yaḥjiz and yuqīm in the present, past, future and past perfect.', 'Use them in both conditional types.', 'Write a day-by-day itinerary that combines the structures.'],
  rulesAr: 'فِعْلَا الحَجْزِ وَالإِقَامَةِ فِي كُلِّ الأَزْمِنَةِ',
  ruleEx: [['أَحْجِزُ تَذَاكِرِي مُبَكِّرًا', 'سَأَحْجِزُ رِحْلَةً إِلَى مَرَّاكُشَ'], ['كُنْتُ قَدْ حَجَزْتُ المَطْعَمَ قَبْلَ أَنْ نَصِلَ'], ['إِذَا حَجَزْتَ مُبَكِّرًا، سَتَحْصُلُ عَلَى سِعْرٍ أَرْخَصَ'], ['لَوْ حَجَزْتُ فِي فُنْدُقٍ آخَرَ، لَكَانَ أَفْضَلَ', 'أُقِيمُ فِي فُنْدُقٍ قَرِيبٍ مِنَ الشَّاطِئِ']],
  doNow: {
    questions: [
      q('What does جَدْوَلُ رِحْلَةٍ mean?', ['a travel itinerary', 'a train timetable', 'a ticket'], 'Prepared at home (P3-L01).'),
      q('What does تَأْشِيرَةٌ mean?', ['a visa', 'a passport', 'insurance'], 'Prepared at home (P3-L01).'),
      q('What does تَسْجِيلُ الوُصُولِ mean?', ['check-in', 'the arrivals hall', 'the gate'], 'Prepared at home (P3-L01).'),
      q('Choose the accurate sentence.', ['يَصِلُ المِتْرُو بَيْنَ المَرْكَزِ وَالمَطَارِ.', 'يَصِلُ المِتْرُو إِلَى المَرْكَزِ وَالمَطَارِ.', 'يَصِلُ المِتْرُو المَرْكَزَ وَالمَطَارَ.'], 'P3-L01: yaṣil bayna.'),
      q('Complete: كُنْتُ قَدْ ___ جَوَازَ سَفَرِي قَبْلَ الرِّحْلَةِ.', ['جَدَّدْتُ', 'أُجَدِّدُ', 'سَأُجَدِّدُ'], 'P2-L03: kuntu qad + past.'),
    ],
    keyIdea: { text: 'Two verbs, every tense — and yuqīm always takes fī before the place you stay.', ar: '{w|أَحْجِزُ · حَجَزْتُ · سَأَحْجِزُ · كُنْتُ قَدْ حَجَزْتُ} · {k|أُقِيمُ فِي} …' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P3-L01. Question 4 retrieves yaṣil bayna (P3-L01); question 5 the past perfect (P2-L03) — today kuntu qad opens every itinerary.',
  },
  routes: {
    core: ['I can name 8 booking and document words.', 'I can use yaḥjiz and yuqīm fī in three tenses.'],
    develop: ['I can use the past perfect kuntu qad ḥajaztu.', 'I can give a booking tip with idhā … sa-.'],
    stretch: ['I can regret a booking with law … la-.', 'I can write a full itinerary day.'],
  },
  bridge: [
    { ar: 'إِقَامَةٌ · مُقِيمٌ', urdu: 'اقامت · مقیم', tr: 'iqāmat · muqīm', en: 'a stay, residence · a resident' },
    { ar: 'مُسَافِرٌ', urdu: 'مسافر', tr: 'musāfir', en: 'a traveller' },
    { ar: 'جَدْوَلٌ', urdu: 'جدول', tr: 'jadwal', en: 'a table, schedule' },
    { ar: 'وُصُولٌ', urdu: 'وصول', tr: 'wusūl', en: 'arrival (Urdu: receipt of something)' },
    { ar: 'تَأْمِينٌ', urdu: 'بیمہ', tr: 'bīma', en: 'insurance (Urdu uses a Persian word)' },
  ],
  bridgeNotes: 'URDU BRIDGE: اقامت، مقیم، مسافر and جدول come from the same roots — يُقِيمُ فِي is the verb behind اقامت. CAREFUL: Urdu وصول usually means “received” (payment received); in Arabic الوُصُولُ is arrival (صَالَةُ الوُصُولِ = the arrivals hall).',
  core: ['جَدْوَلُ رِحْلَةٍ', 'حَجْزٌ', 'يَحْجِزُ', 'تَأْشِيرَةٌ', 'جَوَازُ سَفَرٍ', 'تَأْمِينُ سَفَرٍ', 'تَسْجِيلُ الوُصُولِ', 'يُقِيمُ فِي', 'فُنْدُقٌ بِخَمْسِ نُجُومٍ', 'شَقَّةٌ مَفْرُوشَةٌ', 'صَالَةُ المُغَادَرَةِ', 'الدَّرَجَةُ الاقْتِصَادِيَّةُ'],
  forms: {
    'جَدْوَلُ رِحْلَةٍ': sp('جَدَاوِلُ رِحْلَاتٍ'), 'حَجْزٌ': sp('حُجُوزَاتٌ'), 'تَأْشِيرَةٌ': sp('تَأْشِيرَاتٌ'), 'جَوَازُ سَفَرٍ': sp('جَوَازَاتُ سَفَرٍ'),
    'فُنْدُقٌ بِخَمْسِ نُجُومٍ': sp('فَنَادِقُ بِخَمْسِ نُجُومٍ'), 'شَقَّةٌ مَفْرُوشَةٌ': sp('شُقَقٌ مَفْرُوشَةٌ'), 'صَالَةُ المُغَادَرَةِ': sp('صَالَاتُ المُغَادَرَةِ'),
    'يَحْجِزُ': ihs('أَحْجِزُ', 'تَحْجِزُ'), 'يُقِيمُ فِي': ihs('أُقِيمُ فِي', 'تُقِيمُ فِي'),
    'حَجَزْتُ': is('حَجَزَتْ'), 'أَحْجِزُ': is('تَحْجِزُ'), 'سَأَحْجِزُ': is('سَتَحْجِزُ'), 'كُنْتُ قَدْ حَجَزْتُ': is('كَانَتْ قَدْ حَجَزَتْ'),
    'أَقَمْتُ فِي': is('أَقَامَتْ فِي'), 'أُقِيمُ فِي': is('تُقِيمُ فِي'), 'سَأُقِيمُ فِي': is('سَتُقِيمُ فِي'), 'كُنْتُ قَدْ أَقَمْتُ فِي': is('كَانَتْ قَدْ أَقَامَتْ فِي'),
  },
  vocabNotes: {
    0: 'Booking and documents: the nouns of the trip. يَحْجِزُ (book) takes a direct object: أَحْجِزُ تَذْكِرَةً · حَجَزْتُ فُنْدُقًا.',
    1: 'Accommodation and the airport: يُقِيمُ is FIXED with فِي before the place you stay — the formal choice, not يَسْكُنُ.',
    2: 'The two syllabus verbs across tenses — each card gives the “she” form too. Hollow verb alert: أَقَمْتُ (short a) but أَقَامَتْ (long ā).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · yaḥjiz and yuqīm in every tense (website rules 1–2 + table) · Core', title: 'Book · booked · will book · had booked', ar: 'الحَجْزُ وَالإِقَامَةُ فِي كُلِّ الأَزْمِنَةِ',
      cols: [{ label: 'Tense', w: 1.9 }, { label: 'I book', w: 2.4, size: 21 }, { label: 'She books', w: 2.6, size: 21 }, { label: 'I stay at', w: 2.6, size: 21 }, { label: 'She stays at', w: 2.83, size: 21 }],
      rows: [
        { core: true, cells: ['present', '{w|أَحْجِزُ}', 'تَحْجِزُ', '{k|أُقِيمُ فِي}', 'تُقِيمُ فِي'] },
        { core: true, cells: ['past', '{w|حَجَزْتُ}', 'حَجَزَتْ', '{k|أَقَمْتُ فِي}', 'أَقَامَتْ فِي'] },
        { core: true, cells: ['future', '{w|سَأَحْجِزُ}', 'سَتَحْجِزُ', '{k|سَأُقِيمُ فِي}', 'سَتُقِيمُ فِي'] },
        { cells: ['past perfect', '{e|كُنْتُ قَدْ حَجَزْتُ}', 'كَانَتْ قَدْ حَجَزَتْ', '{e|كُنْتُ قَدْ أَقَمْتُ}', 'كَانَتْ قَدْ أَقَامَتْ'] },
      ],
      ltr: true,
      foot: 'Hollow verb: aqamtu (short a before -tu) but aqāmat (long ā). The past perfect agrees twice: kānat qad ḥajazat.',
      notes: `GRAMMAR PART 1 — website rules “Present, past, future” and “Past perfect”, the website table and teaching point “يَحْجِزُ and يُقِيمُ in every tense”.
Website quiz 1–3 and 7 test exactly these forms. Common slip: أَقَامْتُ ✗ → أَقَمْتُ (the long ā shortens before a consonant ending).
For “we”: نَحْجِزُ · حَجَزْنَا · سَنَحْجِزُ · كُنَّا قَدْ حَجَزْنَا · نُقِيمُ · أَقَمْنَا.
Drill: teacher says a time word (أَمْسِ · الآنَ · غَدًا · قَبْلَ شَهْرٍ …) and a person; students give the right form.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · yuqīm fī + where you stay (website rule 4 + teaching point 2) · Core / Develop', title: 'Where will you stay?', ar: 'أَيْنَ سَتُقِيمُ؟',
      cols: [{ label: 'Accommodation', w: 2.5 }, { label: 'Sentence', w: 6.6, size: 19 }, { label: 'Plural', w: 3.23, size: 19 }],
      rows: [
        { core: true, cells: ['a five-star hotel', '{k|أُقِيمُ فِي} فُنْدُقٍ بِخَمْسِ نُجُومٍ قَرِيبٍ مِنَ الشَّاطِئِ.', 'فَنَادِقُ'] },
        { core: true, cells: ['a furnished flat', '{k|أَقَمْتُ فِي} شَقَّةٍ مَفْرُوشَةٍ قَرِيبَةٍ مِنَ المَرْكَزِ.', 'شُقَقٌ'] },
        { cells: ['a traditional riad', '{k|سَأُقِيمُ فِي} رِيَاضٍ تَقْلِيدِيٍّ فِي المَدِينَةِ القَدِيمَةِ.', 'رِيَاضَاتٌ'] },
        { cells: ['a mountain lodge', '{k|سَتُقِيمُ} أُخْتِي {k|فِي} نُزُلٍ جَبَلِيٍّ هَادِئٍ.', 'نُزُلٌ'] },
      ],
      ltr: true,
      foot: 'Website mistake 1: uqīmu funduqan ✗ → uqīmu FĪ funduqin — and the noun after fī is genitive (-in).',
      notes: `GRAMMAR PART 2 — website rule 4 (يُقِيمُ فِي) and teaching point “يُقِيمُ takes فِي before accommodation … the formal choice, not يَسْكُنُ”. Rows from the website listening, reading and patterns.
After فِي every adjective is genitive too: فِي فُنْدُقٍ قَرِيبٍ · فِي شَقَّةٍ مَفْرُوشَةٍ قَرِيبَةٍ.
A riad (رِيَاضٌ) is a traditional Moroccan house with an inner courtyard — the website listening is set in Marrakesh.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · booking in both conditionals (website rules 3–4 + teaching point 1) · Develop', title: 'Book early — or regret it', ar: 'إِذَا حَجَزْتَ · لَوْ حَجَزْتُ',
      cards: [
        { chip: 'TYPE 1 · TIP · CORE', color: '1E6B52', head: 'إِذَا حَجَزْتَ … سَـ', big: 'إِذَا حَجَزْتَ مُبَكِّرًا، سَتَحْصُلُ عَلَى سِعْرٍ أَرْخَصَ.', en: 'If you book early, you will get a cheaper price.', clue: 'Advice.' },
        { chip: 'TYPE 2 · REGRET · DEVELOP', color: 'C0386B', head: 'لَوْ حَجَزْتُ … لَـ', big: 'لَوْ حَجَزْتُ فِي فُنْدُقٍ حَدِيثٍ، لَفَقَدْتُ سِحْرَ المَدِينَةِ القَدِيمَةِ.', en: 'Had I booked a modern hotel, I would have lost the old city’s charm.', clue: 'Did not happen.' },
        { chip: 'TYPE 2 + PAST PERFECT · STRETCH', color: '6B4C9A', head: 'لَوْ كُنْتُ قَدْ …', big: 'لَوْ كُنْتُ قَدْ حَجَزْتُ قَبْلَ العُطْلَةِ، لَحَصَلْتُ عَلَى سِعْرٍ أَرْخَصَ.', en: 'If I had booked before the holiday, I would have got a cheaper price.', clue: '2 structures.' },
      ],
      error: { text: 'Website mistake 2: idhā takes a past-form verb.', pairs: [['إِذَا حَجَزْتَ مُبَكِّرًا، سَتَحْصُلُ عَلَى سِعْرٍ أَرْخَصَ', 'إِذَا تَحْجِزُ مُبَكِّرًا، سَتَحْصُلُ عَلَى سِعْرٍ أَرْخَصَ']] },
      notes: `GRAMMAR PART 3 — website rules “Type 1 conditional” and “Type 2”, teaching point 1. Card 2 from the website listening; card 3 from the website reading (لَوْ كُنْتُ قَدْ حَجَزْتُ قَبْلَ العُطْلَةِ الرَّسْمِيَّةِ، لَحَصَلْتُ …).
Website mistake 3: لَوْ حَجَزْتُ …، سَيَكُونُ ✗ → لَكَانَ.
Card 1 = advice to “you” (ḥajazta, -ta); cards 2–3 = “I” (ḥajaztu, -tu). Point out the one-letter difference.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · why I do it and what the guide said (website listening, reading and quiz 8) · Stretch', title: 'Purpose, advice — and three structures in one', ar: 'الغَرَضُ وَالنَّصِيحَةُ',
      cols: [{ label: 'Job', w: 2.2 }, { label: 'Sentence (website texts)', w: 7.6, size: 18 }, { label: 'Structures', w: 2.53 }],
      rows: [
        { core: true, cells: ['purpose', 'أَحْجِزُ تَذَاكِرِي مُبَكِّرًا {p|لِأَحْصُلَ} عَلَى سِعْرٍ مُنَاسِبٍ.', 'li- + -a'] },
        { cells: ['purpose', 'سَأَحْمِلُ حَقِيبَةً وَاحِدَةً {p|لِأَتَجَنَّبَ} رُسُومَ الأَمْتِعَةِ الزَّائِدَةِ.', 'li- + -a'] },
        { core: true, cells: ['guide’s advice', '{m|أَشَارَ} الدَّلِيلُ {m|إِلَى أَنَّهُ} {k|إِذَا وَصَلْتُ} مُبَكِّرًا، {k|سَأَزُورُ} السُّوقَ.', 'reported + Type 1'] },
        { cells: ['three in one', '{e|كُنْتُ قَدْ حَجَزْتُ} فُنْدُقِي، {m|وَأَشَارَ} المُنَظِّمُ {m|إِلَى أَنَّهُ} {k|إِذَا وَصَلْنَا} مُبَكِّرًا {k|سَنَحْصُلُ} عَلَى تَرْقِيَةٍ.', 'past perfect + reported + Type 1'] },
      ],
      ltr: true,
      foot: 'Before a conditional, anna needs a pronoun: ashāra ilā anna-HU idhā … (“that, if …”).',
      notes: `GRAMMAR PART 4 — purpose clauses from the website listening (لِأَحْصُلَ · لِأَتَجَنَّبَ) and the reported recommendation from the website listening / reading (أَشَارَ … إِلَى أَنَّهُ إِذَا …); row 4 is website quiz 8 (“Which sentence packs three structures?”).
li- + subjunctive (-a): لِأَحْصُلَ · لِأَتَجَنَّبَ · لِأُوَفِّرَ.
أَنَّهُ here is the “pronoun of the matter” (ضَمِيرُ الشَّأْنِ): anna cannot be followed directly by idhā, so it takes -hu.
Website challenge: “Write يَحْجِزُ in all four tenses and in both conditional types.”`,
    },
  ],
  quick: [0, 2, 3, 5],
  rest: [1, 4, 6, 7],
  ido: {
    title: 'Watch me plan day one',
    steps: [
      { head: 'Before', ar: '{e|كُنْتُ قَدْ حَجَزْتُ} …', think: 'Past perfect.' },
      { head: 'Stay', ar: '{k|سَأُقِيمُ فِي} رِيَاضٍ …', think: 'fī!' },
      { head: 'Advice', ar: '{m|أَشَارَ} … {m|إِلَى أَنَّهُ} {w|إِذَا} …', think: 'Reported + idhā.' },
      { head: 'Regret', ar: '{p|لَوْ كُنْتُ قَدْ حَجَزْتُ} … {p|لَحَصَلْتُ}', think: 'la-.' },
    ],
    legend: ['e', 'k', 'm', 'w', 'p'], legendLabels: { e: 'PAST PERFECT', k: 'YUQĪM FĪ', m: 'REPORTED', w: 'TYPE 1', p: 'TYPE 2' },
    model: 'اليَوْمُ الأَوَّلُ: {e|كُنْتُ قَدْ حَجَزْتُ} رِحْلَتِي إِلَى الدَّارِ البَيْضَاءِ قَبْلَ شَهْرَيْنِ. سَأَصِلُ إِلَى المَطَارِ صَبَاحًا، {k|وَسَأُقِيمُ فِي} رِيَاضٍ تَقْلِيدِيٍّ فِي المَدِينَةِ القَدِيمَةِ. {m|وَأَشَارَ} دَلِيلُ السَّفَرِ {m|إِلَى أَنَّهُ} {w|إِذَا وَصَلْتُ} مُبَكِّرًا، {w|سَأَزُورُ} السُّوقَ قَبْلَ الزِّحَامِ. {p|وَلَوْ كُنْتُ قَدْ حَجَزْتُ} قَبْلَ العُطْلَةِ الرَّسْمِيَّةِ، {p|لَحَصَلْتُ} عَلَى سِعْرٍ أَرْخَصَ.',
    modelEn: 'Day one: I had booked my trip to Casablanca two months ago. I will arrive at the airport in the morning, and I will stay in a traditional riad in the old city. The travel guide pointed out that if I arrive early, I will visit the souk before the crowds. And if I had booked before the public holiday, I would have got a cheaper price.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Start BEFORE the trip: kuntu qad ḥajaztu. Where do I stay? yuqīm needs FĪ. Add the guide’s advice: ashāra ilā anna-hu + idhā … sa-. Finish with a regret: law kuntu qad ḥajaztu … la-ḥaṣaltu.”',
  },
  patternEn: ['I had booked my trip two months ago', 'if you book early, you will get a cheaper price', 'I am staying in a traditional riad in the old city'],
  gameKey: 'P3-L02',
  game: {
    title: 'What has been arranged? Match the picture',
    pick: [0, 1, 5],
    en: ['I booked the plane ticket.', 'I booked a hotel for three nights.', 'I will arrive at the airport early.'],
    icons: [[['fa6', 'FaTicket', '1D5FBF'], ['fa6', 'FaPlane', 'C77700']], [['fa6', 'FaHotel', '1E6B52'], ['fa6', 'FaBed', '6B4C9A']], [['fa6', 'FaPlaneArrival', 'C0386B'], ['fa6', 'FaClock', '1D5FBF']]],
    labels: ['a plane ticket', 'a hotel, three nights', 'arriving early'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Then move each sentence through the tenses: حَجَزْتُ تَذْكِرَةَ الطَّائِرَةِ → كُنْتُ قَدْ حَجَزْتُ … قَبْلَ شَهْرٍ → سَأَحْجِزُ … · حَجَزْتُ فُنْدُقًا → سَأُقِيمُ فِي فُنْدُقٍ لِثَلَاثِ لَيَالٍ.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build an itinerary day (website live builder)', title: 'Opening + accommodation + conditional', ar: 'ابْنِ يَوْمًا فِي الرِّحْلَةِ',
      cols: [{ label: '1 · Past-perfect opening', w: 4.0, size: 16 }, { label: '2 · Where I will stay', w: 4.1, size: 16 }, { label: '3 · Conditional / advice', w: 4.23, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Say it, then write three different versions.',
      notes: `WE DO (3 min) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Core: read row 1 across. Develop: mix rows and change one verb to “she” (كَانَتْ قَدْ حَجَزَتْ · سَتُقِيمُ). Stretch: write your own column 3 with law kuntu qad … la-.`,
    },
  ],
  sorterTitle: 'Present, past — or future / conditional?',
  sorterCats: ['present', 'past / past perfect', 'future / conditional'],
  sorterNotes: 'Then turn every card into the “she” form: تَحْجِزُ · تُقِيمُ فِي · حَجَزَتْ · كَانَتْ قَدْ حَجَزَتْ · أَقَامَتْ فِي · سَتَحْجِزُ · إِذَا حَجَزَتْ سَتَحْصُلُ · لَوْ حَجَزَتْ لَكَانَ.',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('يَحْجِزُ', 'yaḥjiz').replace('يُقِيمُ فِي', 'yuqīm fī') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; rule headings and formulas in English and transliteration; sorter headings in English; the accommodation table and the purpose / advice table are teacher-built from the website texts. All other website items, including the visual game, are used as published.',
  hints: ['uqīmu funduqan?', 'idhā taḥjizu?', 'law … sa-yakūnu?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: kuntu qad · sa-uqīmu fī.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and note the tense of every form of yaḥjiz and yuqīm you hear.',
  gloss: [
    ['يَقُولُ المُسَافِرُ: كُنْتُ قَدْ حَجَزْتُ رِحْلَتِي إِلَى مَرَّاكُشَ قَبْلَ شَهْرَيْنِ، وَكُنْتُ قَدْ جَدَّدْتُ جَوَازَ سَفَرِي.', 'The traveller says: I had booked my trip to Marrakesh two months ago, and I had renewed my passport.'],
    ['أَحْجِزُ دَائِمًا تَذَاكِرِي مُبَكِّرًا لِأَحْصُلَ عَلَى الدَّرَجَةِ الاقْتِصَادِيَّةِ بِسِعْرٍ مُنَاسِبٍ. سَأُقِيمُ فِي رِيَاضٍ تَقْلِيدِيٍّ فِي المَدِينَةِ القَدِيمَةِ.', 'I always book my tickets early to get economy class at a reasonable price. I will stay in a traditional riad in the old city.'],
    ['وَأَشَارَ دَلِيلُ السَّفَرِ إِلَى أَنَّهُ إِذَا وَصَلْتُ مُبَكِّرًا، سَأَزُورُ سُوقَ الجُدَيْدَةِ قَبْلَ الزِّحَامِ. أَمَّا التَّأْشِيرَةُ فَقَدْ حَصَلْتُ عَلَيْهَا إِلِكْتْرُونِيًّا.', 'The travel guide pointed out that if I arrive early, I will visit the souk before the crowds. As for the visa, I obtained it online.'],
    ['وَلَوْ حَجَزْتُ فِي فُنْدُقٍ حَدِيثٍ خَارِجَ المَدِينَةِ، لَفَقَدْتُ سِحْرَ الأَحْيَاءِ القَدِيمَةِ.', 'Had I booked a modern hotel outside the city, I would have lost the charm of the old quarters.'],
    ['سَأَحْمِلُ حَقِيبَةً وَاحِدَةً فَقَطْ لِأَتَجَنَّبَ رُسُومَ الأَمْتِعَةِ الزَّائِدَةِ.', 'I will take only one bag to avoid excess-baggage fees.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَتَى حَجَزْتَ رِحْلَتَكَ، وَأَيْنَ سَتُقِيمُ؟' },
      { route: 'develop', ar: 'مَاذَا سَيَحْدُثُ إِذَا سَجَّلْتَ الوُصُولَ إِلِكْتْرُونِيًّا؟' },
      { route: 'stretch', ar: 'لَوْ حَجَزْتَ فِي مَكَانٍ آخَرَ، مَاذَا كَانَ سَيَخْتَلِفُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'كُنْتُ قَدْ حَجَزْتُ رِحْلَتِي قَبْلَ ______ ، وَسَأُقِيمُ فِي ______ .' },
      { route: 'develop', ar: 'إِذَا سَجَّلْتُ الوُصُولَ إِلِكْتْرُونِيًّا، ______ .' },
      { route: 'stretch', ar: 'لَوْ حَجَزْتُ فِي ______ ، ______ .' },
    ],
    modelEn: ['When did you book your trip, and where will you stay?', 'I had booked my trip two months ago, and I will stay in a traditional riad.', 'And if you had booked somewhere else?', 'Had I booked a modern hotel, I would have lost the charm of the old city.'],
    notes: 'Website prompts and model. Pairs: travel agent / traveller. The agent asks; the traveller answers with the right tense each time. To a girl: حَجَزْتِ · رِحْلَتَكِ · سَتُقِيمِينَ · سَجَّلْتِ.',
  },
  write: {
    core: { amount: '6 forms', how: 'Website Core: yaḥjiz and yuqīm fī in the present, past and future — one sentence each.' },
    develop: { amount: '60–80 words', how: 'Website Develop: add a past perfect and a Type 1 conditional.' },
    stretch: { amount: '100–110 words', how: 'Website task: a day-by-day itinerary opening with kuntu qad ḥajaztu, with yuqīm fī, a Type 1, a reported recommendation and a Type 2.' },
  },
  frames: {
    core: [
      { en: 'I had booked my trip to … before …', ar: 'كُنْتُ قَدْ حَجَزْتُ رِحْلَتِي إِلَى ______ قَبْلَ ______ .' },
      { en: 'I will stay in …', ar: 'سَأُقِيمُ فِي ______ .' },
      { en: 'Last year I stayed in …', ar: 'فِي العَامِ المَاضِي أَقَمْتُ فِي ______ .' },
      { en: 'I always book my tickets …', ar: 'أَحْجِزُ تَذَاكِرِي دَائِمًا ______ .' },
    ],
    develop: [
      { en: 'If you book early, you will …', ar: 'إِذَا حَجَزْتَ مُبَكِّرًا، ______ .' },
      { en: 'The guide pointed out that if I arrive early, …', ar: 'أَشَارَ الدَّلِيلُ إِلَى أَنَّهُ إِذَا وَصَلْتُ مُبَكِّرًا، ______ .' },
      { en: 'I will take one bag in order to avoid …', ar: 'سَأَحْمِلُ حَقِيبَةً وَاحِدَةً لِأَتَجَنَّبَ ______ .' },
      { en: 'If I had booked before the holiday, …', ar: 'لَوْ كُنْتُ قَدْ حَجَزْتُ قَبْلَ العُطْلَةِ، ______ .' },
    ],
    bank: ['مَرَّاكُشَ', 'عُمَانَ', 'شَهْرَيْنِ', 'رِيَاضٍ تَقْلِيدِيٍّ', 'شَقَّةٍ مَفْرُوشَةٍ', 'فُنْدُقٍ بِخَمْسِ نُجُومٍ', 'مُبَكِّرًا', 'سَتَحْصُلُ عَلَى سِعْرٍ أَرْخَصَ', 'سَأَزُورُ السُّوقَ قَبْلَ الزِّحَامِ', 'رُسُومَ الأَمْتِعَةِ الزَّائِدَةِ', 'لَحَصَلْتُ عَلَى سِعْرٍ أَرْخَصَ', 'جَوَازَ سَفَرِي'],
  },
  stretch: [
    ['اليَوْمُ الأَوَّلُ: … اليَوْمُ الثَّانِي: …', 'Day one: … Day two: …'],
    ['وَكُنْتُ قَدْ جَدَّدْتُ جَوَازَ سَفَرِي', 'and I had renewed my passport'],
    ['وَإِذَا كَانَ الطَّقْسُ جَيِّدًا، سَأَتَنَزَّهُ طَوَالَ اليَوْمِ', 'and if the weather is good, I will hike all day'],
    ['سَأُقِيمُ لَيْلَةً أَخِيرَةً قُرْبَ الشَّاطِئِ', 'I will stay a final night near the beach'],
    ['لِذٰلِكَ أَنْصَحُ بِالحَجْزِ المُبَكِّرِ دَائِمًا', 'so I always recommend booking early'],
  ],
  modelEn: 'Day one: I had booked my trip to Casablanca two months ago, and I had renewed my passport. I will arrive at the airport in the morning, and I will stay in a traditional riad in the old city. The travel guide pointed out that if I arrive early, I will visit the souk before the crowds. Day two: I will book a tour to the mountains, and if the weather is good, I will hike all day. Day three: I will stay a final night near the beach. And if I had booked before the public holiday, I would have got a cheaper price. So I always recommend booking early.',
  find: ['two past perfects (kuntu qad ḥajaztu · jaddadtu)', 'yuqīm fī twice', 'a reported tip + two idhā conditionals', 'a Type 2 regret (law kuntu qad … la-)'],
  modelNotes: 'Website writing model. Evidence: كُنْتُ قَدْ حَجَزْتُ · كُنْتُ قَدْ جَدَّدْتُ · سَأُقِيمُ فِي رِيَاضٍ · أَشَارَ … إِلَى أَنَّهُ إِذَا وَصَلْتُ … سَأَزُورُ · سَأَحْجِزُ جَوْلَةً · إِذَا كَانَ الطَّقْسُ … سَأَتَنَزَّهُ · سَأُقِيمُ لَيْلَةً · لَوْ كُنْتُ قَدْ حَجَزْتُ … لَحَصَلْتُ.',
  selfCheck: [
    { route: 'core', text: 'yaḥjiz / yuqīm are in the right tense for each time word.' },
    { route: 'core', text: 'yuqīm always has fī (and the noun after it ends in -in).' },
    { route: 'develop', text: 'My itinerary opens with kuntu qad ḥajaztu.' },
    { route: 'develop', text: 'My idhā verb is past; the result has sa-.' },
    { route: 'stretch', text: 'My Type 2 result has la- (la-ḥaṣaltu · la-kāna).' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['أُخَطِّطُ لِرِحْلَةٍ', 'I plan a trip'], ['الأَسَاسِيَّاتِ', 'the basics'], ['أُجَدِّدُ', 'I renew'], ['المُنَظِّمُ', 'the organiser'], ['سَجَّلْتُ الوُصُولَ', 'I checked in'],
    ['سَأُوَفِّرُ وَقْتًا', 'I will save time'], ['نُزُلٍ جَبَلِيٍّ', 'a mountain lodge'], ['العُطْلَةِ الرَّسْمِيَّةِ', 'the public holiday'], ['أَرْخَصَ', 'cheaper'], ['أَنْصَحُ بِـ', 'I recommend'],
  ],
  prep: {
    words: [['ذِكْرَى لَا تُنْسَى', 'an unforgettable memory', 'pl. ذِكْرَيَاتٌ'], ['مُغَامَرَةٌ', 'an adventure', 'pl. مُغَامَرَاتٌ'], ['صَدْمَةٌ ثَقَافِيَّةٌ', 'culture shock', '—'], ['فَاقَ تَوَقُّعَاتِي', 'it exceeded my expectations', 'فَاقَتْ (f.)'], ['فَجْأَةً', 'suddenly', '—']],
    questionEn: 'Think of a holiday you remember: what happened, and how did you feel?',
    questionAr: 'فِي إِجَازَتِي الأَخِيرَةِ ______ ، وَكَانَتْ ذِكْرَى لَا تُنْسَى لِأَنَّ ______ .',
    homework: {
      core: 'Write yaḥjiz and yuqīm fī in the present, past and future (six sentences).',
      develop: 'Add a past perfect and a Type 1 booking tip (60–80 words).',
      stretch: 'Website writing task: a 100–110-word day-by-day itinerary for a trip to an Arab city.',
    },
    wordsSource: 'The five words come from the website P3-L03 vocabulary (narrating past holidays).',
  },
  remember: 'Remember: aḥjizu · ḥajaztu · sa-aḥjizu · kuntu qad ḥajaztu — uqīmu FĪ (aqamtu, short a) — idhā ḥajazta … sa- for advice, law ḥajaztu … la- for regret.',
});

module.exports = { meta, slides };
