'use strict';
/*
 * F2-L10 · Greetings and Identity in the Arab World (cultural context)
 * Website: Pathways › Foundation › F2 › Lesson 10. Ten core cultural words, greetings show respect but practices vary,
 * blessing language, hospitality and family language (micro-dialogue), layered identity (no disclosure required),
 * Culture Detective (12), Hanaa listening, three fictional family profiles, respectful cultural profile, comparison writing.
 */
const F = require('./f2-common');
const game = require('../site-data/pathway-visual-games.json')['f2-l10'];
const { q, bank, banks } = F;

const meta = F.meta({
  n: 10, fileTitle: 'Culture_Greetings_Identity', chip: 'Culture & Identity',
  title: 'Greetings and Identity in the Arab World', arabic: 'التَّحِيَّاتُ وَالهُوِيَّةُ فِي العَالَمِ العَرَبِيِّ',
  focus: 'Language carries culture: explore how greetings, family, hospitality, nationality, language and belief can shape identity — while remembering that Arabic-speaking communities are diverse and no single custom applies to everyone.',
  icon: 'FaEarthAsia', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F2-L11', nextTitle: 'Writing a Short Personal Introduction', nextAr: 'كِتَابَةُ تَعْرِيفٍ شَخْصِيٍّ' };
const CATS = ['Respectful and accurate', 'Needs more care', 'A personal choice to respect'];
const detective = banks.l10.cultureRounds.map((r) => F.w({ q: 'How should this statement be classified?', options: CATS, ok: r.ok, why: r.why }, { prompt: `“${r.statement}” — how should this be classified?` }));
const profiles = banks.l10.speakingProfiles;

const site = {
  speaking: {
    context: 'Present a respectful cultural profile',
    model: [
      ['1', 'هَذِهِ عَائِلَةٌ أُرْدُنِيَّةٌ. عِنْدَمَا يَصِلُ الجَارُ يَقُولُونَ أَهْلًا وَسَهْلًا.', 'This is a Jordanian family. When the neighbour arrives they say “welcome”.'],
      ['2', 'يُقَدِّمُونَ الشَّايَ وَالتَّمْرَ، وَلَكِنَّهُمْ يَحْتَرِمُونَ اخْتِيَارَ الضَّيْفِ.', 'They offer tea and dates, but they respect the guest’s choice.'],
    ],
  },
  writing: {
    prompt: 'Website writing task: a cultural comparison of six to ten connected sentences about one greeting or hospitality context (real, fictional or family-safe): the context, one greeting custom, one hospitality/family custom, one similarity, one difference, and a final statement about respect or identity.',
    checklist: ['Cultural words: ثَقَافَةٌ، عَادَاتٌ، اِحْتِرَامٌ، ضِيَافَةٌ …', 'Comparison: مُتَشَابِهٌ، مُخْتَلِفٌ، وَلَكِنْ، أَيْضًا', 'Careful language: فِي بَعْضِ العَائِلَاتِ …', 'فَخُورٌ / فَخُورَةٌ matches the speaker.'],
    model: 'فِي عَائِلَتِي نَقُولُ السَّلَامُ عَلَيْكُمْ، وَنَسْأَلُ: كَيْفَ الأَهْلُ؟ عِنْدَمَا يَزُورُنَا ضَيْفٌ، نُقَدِّمُ الشَّايَ. فِي المَدْرَسَةِ فِي بَرِيطَانِيَا التَّحِيَّةُ قَصِيرَةٌ، وَلَكِنَّ الاِحْتِرَامَ مُتَشَابِهٌ. فِي بَعْضِ العَائِلَاتِ تَخْتَلِفُ العَادَاتُ. أَنَا فَخُورٌ بِثَقَافَتِي.',
  },
  differentiation: {
    core: 'Four sentences: family or country context, a greeting, hospitality, and one respectful “this may vary” statement.',
    develop: 'Six to eight sentences with a comparison (similar / different) and وَلَكِنْ or أَيْضًا.',
    stretch: 'Ten sentences; explain why one broad statement is inaccurate and replace it with careful language.',
  },
  listening: {
    title: 'A family welcome',
    script: 'السَّلَامُ عَلَيْكُمْ. اِسْمِي هَنَاءُ، وَأَنَا أُرْدُنِيَّةٌ أَعِيشُ فِي لَنْدَنَ. اليَوْمَ تَزُورُنَا صَدِيقَتِي مَرْيَمُ. أَقُولُ لَهَا: أَهْلًا وَسَهْلًا، تَفَضَّلِي. ثُمَّ أَسْأَلُهَا: كَيْفَ الأَهْلُ؟ وَأُقَدِّمُ لَهَا الشَّايَ وَالتَّمْرَ. أَنَا فَخُورَةٌ بِعَائِلَتِي وَبِثَقَافَتِي، وَلَكِنَّنِي أَعْرِفُ أَنَّ عَادَاتِ التَّحِيَّةِ وَالضِّيَافَةِ تَخْتَلِفُ مِنْ عَائِلَةٍ إِلَى أُخْرَى.',
    questions: bank(10, 'listeningQuiz', [1, 3, 5, 6, 7]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 10,
    plan: '0–1 Welcome · 1–2 Lesson map · 2–9 Do Now + answers · 9–10 Objectives · 10–18 Cultural words · 18–24 Greetings, blessings, hospitality · 24–26 Quick check · 26–29 I Do · 29–38 We Do (picture match, Culture Detective, listening, reading) · 38–49 You Do (profile + comparison) · 49–54 Feedback · 54–56 Preparation.',
    source: 'Website sections used: the five cultural lenses and respectful rule, the eight-question F2 retrieval, the ten core cultural words and the additional phrase bank, the vocabulary check (10), “Greetings show respect — but practices vary” with blessing language and the stereotype warning, the greeting and respect check (8), hospitality and family language with the Salma–Maryam micro-dialogue, the layered-identity section and check (8), the Culture Detective Mission (12), the Hanaa listening (8), three fictional family profiles, the respectful cultural profile (speaking) and the comparison writing task. Picture match: website visual game “Greetings and Identity in the Arab World”. The three-family reading questions are teacher-made (the website lists ten but does not include them in the lesson data).',
    support: `• SAFEGUARDING AND RESPECT (website): “No personal disclosure required.” Students may use fictional profiles throughout. Religion appears for RECOGNITION only (مَا دِينُكَ؟ is never asked of a student); a learner who does not wish to discuss belief chooses another identity topic.
• Website respectful rule: observe, ask politely and follow the other person’s lead. Avoid “Arabs always…” / “Everyone must…”; use “in some families”, “in this situation”, “this may vary”, “follow the person’s preference”.
• Core: recognise the key words and identify respectful greeting behaviour. Develop: one similarity and one difference in connected sentences. Stretch: describe layered identity and challenge an inaccurate generalisation.
• A mixed-heritage class is an asset: many students live “layered identity” (website section 5).`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Cultural words, greetings, hospitality and identity.', wedo: 'Picture match, Culture Detective, listen and read.', next: 'F2-L11', support: 'You never have to share anything personal today. You can always use a fictional family. Look for the green CORE boxes; English answers in the chat are fine.' }),
  F.doNow({
    questions: [
      q('What does ثَقَافَةٌ mean?', ['culture', 'custom', 'identity'], 'Prepared at home.'),
      q('Choose the form a girl uses: “I am proud”.', ['أَنَا فَخُورَةٌ.', 'أَنَا فَخُورٌ.', 'أَنَا فَخْرٌ.'], 'Prepared at home + F2-L05 agreement.'),
      ...bank(10, 'retrievalQuiz', [1, 2, 6]),
    ],
    keyIdea: { text: 'Observe, ask politely and follow the other person’s lead (website respectful rule).', ar: 'فِي بَعْضِ العَائِلَاتِ … · لَيْسَ دَائِمًا' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home. Questions 3–5 are from the website “eight-question F2 retrieval check” (the -ki question, origin with مِنْ, تَفَضَّلِي).',
  }),
  F.objectivesSlide([
    'Use the core cultural vocabulary accurately.',
    'Describe greetings, hospitality, family and identity without stereotyping.',
    'Recognise that practices vary by country, family and individual.',
    'Compare a cultural practice with a familiar context respectfully.',
  ], {
    core: ['I can recognise the key cultural words.', 'I can identify respectful greeting behaviour.'],
    develop: ['I can explain one similarity and one difference.', 'I can use “in some families…” carefully.'],
    stretch: ['I can describe layered identity.', 'I can challenge an inaccurate generalisation.'],
  }, 1, 'Website learning goals (left) and the website success routes (right).'),
  F.keywordsSlide({
    text: '10 core cultural words (website “required core”) plus greeting, hospitality and comparison phrases. Core: the first six words.',
    groups: [
      { head: 'GROUP 1', name: 'Core cultural words · 10' },
      { head: 'GROUP 2', name: 'Greeting, blessing, hospitality' },
      { head: 'GROUP 3', name: 'Careful comparison · 6' },
    ],
    bridge: [
      { ar: 'ثَقَافَةٌ', urdu: 'ثقافت', tr: 'saqāfat', en: 'culture' },
      { ar: 'عَادَةٌ', urdu: 'عادت', tr: 'ādat', en: 'habit, custom' },
      { ar: 'اِحْتِرَامٌ', urdu: 'احترام', tr: 'ehtirām', en: 'respect' },
      { ar: 'ضِيَافَةٌ', urdu: 'ضیافت', tr: 'ziyāfat', en: 'hospitality, feast' },
      { ar: 'فَخُورٌ', urdu: 'فخر', tr: 'fakhr', en: 'pride (→ proud)' },
    ],
    notes: 'URDU BRIDGE: ثقافت, عادت, احترام, ضیافت, فخر — five of today’s ten core words are used in Urdu with the same meaning. Ask Urdu speakers to teach the pronunciation difference (ث = s in Urdu, th in Arabic).',
  }),
  {
    type: 'vocab', stage: 'teach', min: 3, eyebrow: 'Key words · Group 1 · core cultural words 1–6 (website)', title: 'Culture, customs and respect', ar: 'مُفْرَدَاتُ الثَّقَافَةِ',
    items: [
      { n: 1, ar: 'ثَقَافَةٌ', en: 'culture', tr: 'tha-qā-fa · -āt', tag: 'my · sg · pl', core: true, forms: [{ l: 'my', ar: 'ثَقَافَتِي' }, { l: 'one', ar: 'ثَقَافَةٌ' }, { l: 'pl.', ar: 'ثَقَافَاتٌ' }] },
      { n: 2, ar: 'عَادَاتٌ', en: 'customs, habits', tr: 'ʿā-dāt · sg. ʿā-da', tag: 'pl. · sg.', core: true, forms: [{ l: 'one', ar: 'عَادَةٌ' }, { l: 'pl.', ar: 'عَادَاتٌ' }] },
      { n: 3, ar: 'تَقَالِيدُ', en: 'traditions', tr: 'ta-qā-līd', tag: 'plural', core: true, note: 'لِعَائِلَتِي تَقَالِيدُ جَمِيلَةٌ.' },
      { n: 4, ar: 'اِحْتِرَامٌ', en: 'respect', tr: 'iḥ-ti-rām', tag: 'noun', core: true, note: 'التَّحِيَّةُ تُظْهِرُ الاِحْتِرَامَ.' },
      { n: 5, ar: 'ضِيَافَةٌ', en: 'hospitality', tr: 'ḍi-yā-fa', tag: 'noun · f.', core: true, note: 'Guest: ضَيْفٌ / ضَيْفَةٌ / ضُيُوفٌ' },
      { n: 6, ar: 'عَائِلَةٌ', en: 'family', tr: 'ʿā-ʾi-la · -āt', tag: 'my · his · her', core: true, forms: [{ l: 'my', ar: 'عَائِلَتِي' }, { l: 'his', ar: 'عَائِلَتُهُ' }, { l: 'her', ar: 'عَائِلَتُهَا' }] },
    ],
    notes: `CORE WORDS 1–6 (website, with the website example sentences in the notes line). Gesture / emoji from the website: 🌍 culture · 🧭 customs · 🪡 traditions · 🤝 respect · ☕ hospitality · 👨‍👩‍👧‍👦 family.
Website examples: فِي كُلِّ مُجْتَمَعٍ ثَقَافَةٌ (every society has a culture) · تَخْتَلِفُ العَادَاتُ بَيْنَ العَائِلَاتِ (customs differ between families) · الضِّيَافَةُ مُهِمَّةٌ فِي بَعْضِ العَائِلَاتِ (hospitality is important in SOME families) · أَسْأَلُ عَنِ العَائِلَةِ بِأَدَبٍ (I ask about the family politely).`,
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · core cultural words 7–10 + comparison (website)', title: 'Community, identity and pride', ar: 'المُجْتَمَعُ وَالهُوِيَّةُ',
    items: [
      { n: 7, ar: 'مُجْتَمَعٌ', en: 'society, community', tr: 'mu-jta-maʿ', tag: 'noun · m.', core: true, note: 'المُجْتَمَعُ مُتَنَوِّعٌ. (diverse)' },
      { n: 8, ar: 'دِينٌ', en: 'religion', tr: 'dīn', tag: 'recognise', note: 'A part of SOME people’s identity — personal.' },
      { n: 9, ar: 'هُوِيَّةٌ', en: 'identity', tr: 'hu-wiy-ya', tag: 'my · his · her', core: true, forms: [{ l: 'my', ar: 'هُوِيَّتِي' }, { l: 'his', ar: 'هُوِيَّتُهُ' }, { l: 'her', ar: 'هُوِيَّتُهَا' }] },
      { n: 10, ar: 'فَخُورٌ بِـ', en: 'proud of', tr: 'fa-khūr · fa-khū-ra · fa-khū-rūn', tag: 'm · f · pl', core: true, forms: [{ l: 'm.', ar: 'فَخُورٌ' }, { l: 'f.', ar: 'فَخُورَةٌ' }, { l: 'pl.', ar: 'فَخُورُونَ' }] },
      { n: 11, ar: 'مُتَشَابِهٌ · مُخْتَلِفٌ', en: 'similar · different', tr: 'mu-ta-shā-bih · mukh-ta-lif', tag: 'm · f', note: 'f.: مُتَشَابِهَةٌ · مُخْتَلِفَةٌ' },
      { n: 12, ar: 'فِي بَعْضِ … · أَحْيَانًا', en: 'in some … · sometimes', tr: 'fī baʿ-ḍi … · aḥ-yā-nan', tag: 'careful', note: 'Also: لَيْسَ دَائِمًا (not always)' },
    ],
    notes: `CORE WORDS 7–10 (website) + the website “Careful comparison” bank (cards 11–12). Card 10: agreement with the SPEAKER (F2-L05): a boy says فَخُورٌ, a girl says فَخُورَةٌ; أَنَا فَخُورٌ / فَخُورَةٌ بِثَقَافَتِي.
Card 8: website example — الدِّينُ جُزْءٌ مِنْ هُوِيَّةِ بَعْضِ النَّاسِ (religion is part of SOME people’s identity). Keep it at recognition level.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · greetings show respect — but practices vary (website)', title: 'Observe, ask, follow the lead', ar: 'التَّحِيَّاتُ تُظْهِرُ الاِحْتِرَامَ',
    cards: [
      { chip: '1 · WORDS FIRST', color: '1D5FBF', head: 'السَّلَامُ عَلَيْكُمْ', big: 'السَّلَامُ عَلَيْكُمْ · مَرْحَبًا · أَهْلًا وَسَهْلًا', en: 'Start with a clear spoken greeting.', clue: 'Words are always a respectful start.' },
      { chip: '2 · RELATIONSHIP MATTERS', color: '6B4C9A', head: 'كَبِيرُ السِّنِّ', big: 'صَدِيقٌ · مُعَلِّمٌ · ضَيْفٌ · كَبِيرُ السِّنِّ', en: 'friend · teacher · guest · older person', clue: 'Different people may be greeted differently.' },
      { chip: '3 · CONTACT VARIES', color: '0E7C86', head: 'مُصَافَحَةٌ', big: 'مُصَافَحَةٌ · اِبْتِسَامَةٌ · الكَلِمَاتُ فَقَطْ', en: 'handshake · smile · words only', clue: 'All can be normal. Do not assume — follow their lead.' },
    ],
    error: { text: 'Avoid the stereotype (website): one language does not mean one greeting style.', pairs: [['فِي بَعْضِ العَائِلَاتِ …', 'كُلُّ العَائِلَاتِ …']] },
    notes: `GREETINGS AND RESPECT (website section 3). Website points: 1 words first · 2 relationship matters (a close relative, school friend, elder, teacher and new visitor may be greeted differently) · 3 physical contact varies (handshakes, cheek greetings or no physical contact can all be normal — do not assume; follow the other person’s lead) · 4 time and warmth vary (some greetings are brief; others include questions about health and family — both can be respectful).
Website: “Never write ‘Arabs always…’ or ‘Everyone must…’.”`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Key words · Group 2 · blessing language in everyday speech (website)', title: 'Everyday blessing phrases', ar: 'عِبَارَاتٌ يَوْمِيَّةٌ',
    cols: [{ label: 'Phrase', w: 4.4, size: 24 }, { label: 'Meaning', w: 4.2 }, { label: 'You may hear it…', w: 3.73 }],
    rows: [
      { core: true, cells: [{ ar: 'السَّلَامُ عَلَيْكُمْ' }, 'Peace be upon you.', 'as a greeting (F2-L01)'] },
      { core: true, cells: [{ ar: 'الحَمْدُ لِلَّهِ' }, 'Praise be to God. / I am well.', 'after “how are you?”'] },
      { cells: [{ ar: 'إِنْ شَاءَ اللَّهُ' }, 'God willing.', 'when talking about the future'] },
      { cells: [{ ar: 'مَا شَاءَ اللَّهُ' }, 'An expression of appreciation and blessing.', 'when admiring something'] },
    ],
    notes: 'BLESSING LANGUAGE (website). These are heard across many Arabic-speaking communities in everyday speech — also among Urdu speakers. Present them as language students will HEAR; using them is a personal choice.',
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Key words · Group 2 · hospitality and family language (website)', title: 'Welcome, offer, ask after the family', ar: 'لُغَةُ الضِّيَافَةِ وَالعَائِلَةِ',
    cols: [{ label: 'Phrase', w: 5.0, size: 22 }, { label: 'Meaning', w: 3.8 }, { label: 'Use', w: 3.53 }],
    rows: [
      { core: true, cells: [{ ar: 'أَهْلًا وَسَهْلًا' }, 'Welcome.', 'receiving someone warmly'] },
      { core: true, cells: [{ ar: 'تَفَضَّلْ / تَفَضَّلِي' }, 'Please come in. / Here you are.', 'form for the listener (F2-L06)'] },
      { core: true, cells: [{ ar: 'هَلْ تُرِيدُ شَايًا أَوْ قَهْوَةً؟' }, 'Would you like tea or coffee?', 'a practical offer (f.: تُرِيدِينَ)'] },
      { cells: [{ ar: 'كَيْفَ الأَهْلُ؟' }, 'How is the family?', 'when the relationship makes it right'] },
      { cells: [{ ar: 'هُمْ بِخَيْرٍ، الحَمْدُ لِلَّهِ.' }, 'They are well, praise be to God.', 'a possible answer'] },
      { cells: [{ ar: 'شُكْرًا عَلَى الضِّيَافَةِ.' }, 'Thank you for the hospitality.', 'a polite closing'] },
    ],
    notes: `HOSPITALITY (website section 4). Website: “Offering a drink, welcoming a guest and asking after family can communicate warmth. The exact food, drink, length of visit and level of formality differ widely.”
Website “Meaning before rule”: hospitality is an invitation, not a test — a guest may accept or decline politely.`,
  },
  {
    type: 'glossed', stage: 'teach', min: 1, eyebrow: 'Hospitality · the website micro-dialogue', title: 'Salma welcomes Maryam', ar: 'حِوَارٌ قَصِيرٌ',
    lines: [
      ['سَلْمَى: أَهْلًا وَسَهْلًا يَا مَرْيَمُ. تَفَضَّلِي.', 'Welcome, Maryam. Come in.'],
      ['مَرْيَمُ: شُكْرًا. كَيْفَ الأَهْلُ؟', 'Thank you. How is the family?'],
      ['سَلْمَى: هُمْ بِخَيْرٍ، الحَمْدُ لِلَّهِ. هَلْ تُرِيدِينَ شَايًا؟', 'They are well, praise be to God. Would you like some tea?'],
      ['مَرْيَمُ: نَعَمْ، مِنْ فَضْلِكِ. شُكْرًا.', 'Yes, please. Thank you.'],
    ],
    notes: 'MICRO-DIALOGUE (website). Read in two roles (teacher + a volunteer). Spot the three female-listener forms: تَفَضَّلِي · تُرِيدِينَ · مِنْ فَضْلِكِ (F2-L06). Develop: perform it with a male guest (تَفَضَّلْ · تُرِيدُ · مِنْ فَضْلِكَ).',
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Grammar focus · identity has more than one layer (website)', title: 'Layers of identity', ar: 'لِلْهُوِيَّةِ أَكْثَرُ مِنْ جَانِبٍ',
    cols: [{ label: 'Layer', w: 2.6 }, { label: 'Frame (I)', w: 4.2, size: 22 }, { label: 'Layer', w: 2.6 }, { label: 'Frame (I)', w: 2.93, size: 22 }],
    rows: [
      { core: true, cells: ['🪪 Name', { ar: 'اِسْمِي …' }, '🗣️ Language', { ar: 'أَتَكَلَّمُ …' }] },
      { core: true, cells: ['🌍 Origin', { ar: 'أَنَا مِنْ …' }, '👨‍👩‍👧‍👦 Family', { ar: 'عَائِلَتِي …' }] },
      { cells: ['🏙️ Residence', { ar: 'أَسْكُنُ فِي …' }, '⚽ Interest', { ar: 'أُحِبُّ …' }] },
      { cells: ['⭐ Pride', { ar: 'أَنَا فَخُورٌ / فَخُورَةٌ بِـ …' }, '🕊️ Belief (optional)', 'optional — your choice'] },
    ],
    foot: 'هُوِيَّتِي مُتَنَوِّعَةٌ. — My identity is diverse. No single layer tells the whole story.',
    notes: `LAYERED IDENTITY (website section 5): “A person may describe identity through name, family, nationality, language, city, religion, interests, values or several of these together. No single layer tells the whole story.”
PRIVACY: the belief layer is optional and never required (website identity check Q4: “Respect the choice and use another identity topic”). The questions مَا دِينُكَ؟ / مَا دِينُكِ؟ appear on the website for RECOGNITION only — do not ask them in class.
Website layered-identity example: أَنَا بَرِيطَانِيَّةٌ مِنْ عَائِلَةٍ سُورِيَّةٍ وَأَتَكَلَّمُ لُغَتَيْنِ.`,
  },
  F.quickCheck(bank(10, 'customsQuiz', [0, 1, 4, 5]), 'website “Eight-question greeting and respect check” questions 1, 2, 5 and 6.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me describe a family respectfully', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'The context', ar: 'هَذِهِ عَائِلَةٌ مَغْرِبِيَّةٌ بَرِيطَانِيَّةٌ.', think: 'A fictional family — not a real classmate.' },
      { head: 'The greeting', ar: 'يَقُولُونَ السَّلَامُ عَلَيْكُمْ عِنْدَ اللِّقَاءِ.', think: 'They say … when they meet.' },
      { head: 'Hospitality', ar: 'وَيُقَدِّمُونَ الشَّايَ لِلضُّيُوفِ.', think: 'They offer tea to guests.' },
      { head: 'Careful variation', ar: 'بَعْضُ الأَقَارِبِ يُصَافِحُونَ، {k|وَلَكِنَّ} آخَرِينَ يُفَضِّلُونَ الكَلِمَاتِ.', think: 'SOME … but OTHERS … — no “all”.' },
    ],
    legend: ['k'], legendLabels: { k: 'CONTRAST' },
    model: 'هَذِهِ عَائِلَةٌ مَغْرِبِيَّةٌ بَرِيطَانِيَّةٌ. يَقُولُونَ السَّلَامُ عَلَيْكُمْ، وَيُقَدِّمُونَ الشَّايَ لِلضُّيُوفِ. بَعْضُ الأَقَارِبِ يُصَافِحُونَ، {k|وَلَكِنَّ} آخَرِينَ يُفَضِّلُونَ التَّحِيَّةَ بِالكَلِمَاتِ.',
    modelEn: 'This is a Moroccan-British family. They say “peace be upon you”, and they offer tea to guests. Some relatives shake hands, but others prefer to greet with words.',
    notes: 'I DO (3 min) — the website speaking profile “A Moroccan-British family in Birmingham”, modelled with a think-aloud. New “they” verbs (يَقُولُونَ، يُقَدِّمُونَ، يُصَافِحُونَ) are for recognition: point out the يـ … ـونَ pattern. Students copy the model.',
  },
  F.gameSlide({ ...game, items: [game.items[0], game.items[1], game.items[2]] }, {
    title: 'Match the picture to the cultural sentence',
    en: ['It is important to respect hospitality customs.', 'Ways of greeting differ from place to place.', 'The family gathers on special occasions.'],
    icons: [[['fa6', 'FaMugHot', '8A5A2B'], ['fa6', 'FaHandshake', '1D5FBF']], [['fa6', 'FaHand', '1D5FBF'], ['fa6', 'FaEarthAfrica', '1E7B4F']], [['fa6', 'FaPeopleGroup', '6B4C9A'], ['fa6', 'FaUtensils', 'C77700']]],
    labels: ['hospitality + respect', 'greetings vary', 'family gathering'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Key words to spot: الضِّيَافَةِ (hospitality) · تَخْتَلِفُ … التَّحِيَّةِ (greetings differ) · العَائِلَةُ (family). All three are today’s core words.',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 5, eyebrow: 'We do · website game “Culture Detective Mission”', title: 'Culture Detective', ar: 'مُهِمَّةُ المُحَقِّقِ الثَّقَافِيِّ',
    seed: 21,
    questions: [detective[1], detective[2], detective[5], detective[6], detective[9]],
    side: { kind: 'core', label: 'THINK ABOUT', text: 'Evidence · variation\nprivacy · choice\nWords like “every” or “all” = be careful!' },
    answerSlide: { min: 0, eyebrow: 'We do · Culture Detective answers', title: 'Detective: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 12 Culture Detective statements. Three categories (website): respectful and accurate · needs more care · a personal choice. Stretch: rewrite each “needs more care” statement with careful language (فِي بَعْضِ العَائِلَاتِ …، لَيْسَ دَائِمًا).',
    answerNotes: 'Reveal and discuss the website explanation for each. Stress statement 3 (religion): no student is ever required to disclose belief.',
  },
  F.listening(site, {
    coreTip: 'Six boxes: speaker · greeting · family question · offer · identity · final message.',
    routes: 'Core: questions 1, 3 and 4. Develop / Stretch: all 5.',
    gloss: [
      ['السَّلَامُ عَلَيْكُمْ. اِسْمِي هَنَاءُ، وَأَنَا أُرْدُنِيَّةٌ أَعِيشُ فِي لَنْدَنَ.', 'Peace be upon you. My name is Hanaa; I am Jordanian and I live in London.'],
      ['اليَوْمَ تَزُورُنَا صَدِيقَتِي مَرْيَمُ. أَقُولُ لَهَا: أَهْلًا وَسَهْلًا، تَفَضَّلِي.', 'Today my friend Maryam is visiting us. I say to her: Welcome, come in.'],
      ['ثُمَّ أَسْأَلُهَا: كَيْفَ الأَهْلُ؟ وَأُقَدِّمُ لَهَا الشَّايَ وَالتَّمْرَ.', 'Then I ask her: How is the family? And I offer her tea and dates.'],
      ['أَنَا فَخُورَةٌ بِعَائِلَتِي وَبِثَقَافَتِي، وَلَكِنَّنِي أَعْرِفُ أَنَّ عَادَاتِ التَّحِيَّةِ وَالضِّيَافَةِ تَخْتَلِفُ مِنْ عَائِلَةٍ إِلَى أُخْرَى.', 'I am proud of my family and culture, but I know that greeting and hospitality customs differ from one family to another.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · three fictional family profiles (website)', title: 'Three families, three profiles', ar: 'ثَلَاثُ عَائِلَاتٍ',
    lines: [
      ['يَاسْمِينُ مَغْرِبِيَّةٌ وَتَعِيشُ فِي بَرِيسْتُولَ. فِي عَائِلَتِهَا يَقُولُونَ «السَّلَامُ عَلَيْكُمْ» وَيَسْأَلُونَ عَنِ الأَهْلِ.', 'Yasmin: Moroccan, lives in Bristol · greeting + asking after the family'],
      ['عِنْدَمَا يَزُورُهُمْ ضَيْفٌ، يُقَدِّمُونَ الشَّايَ. يَاسْمِينُ فَخُورَةٌ بِاللُّغَةِ العَرَبِيَّةِ وَبِتَقَالِيدِ عَائِلَتِهَا.', 'offer tea to guests · proud of Arabic and family traditions'],
      ['رَامِي لُبْنَانِيٌّ وَيَعِيشُ فِي مَانْشِسْتَرَ. يَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ فِي البَيْتِ.', 'Rami: Lebanese, Manchester · Arabic and English at home'],
      ['بَعْضُ أَقَارِبِهِ يُصَافِحُونَ، وَبَعْضُهُمْ يُفَضِّلُونَ التَّحِيَّةَ بِالكَلِمَاتِ فَقَطْ. يَقُولُ رَامِي إِنَّ الاِحْتِرَامَ أَهَمُّ مِنْ شَكْلِ التَّحِيَّةِ.', 'some relatives shake hands, some prefer words · respect matters more than the form'],
      ['آدَمُ بَرِيطَانِيٌّ مِنْ عَائِلَةٍ أُرْدُنِيَّةٍ. فِي المَدْرَسَةِ تَكُونُ تَحِيَّاتُهُ قَصِيرَةً، وَلَكِنْ فِي البَيْتِ يَسْأَلُ عَنِ الصِّحَّةِ وَالعَائِلَةِ.', 'Adam: British, Jordanian family · short greetings at school, longer at home'],
      ['يَرَى آدَمُ أَنَّ هُوِيَّتَهُ تَجْمَعُ بَيْنَ أَكْثَرَ مِنْ ثَقَافَةٍ.', 'his identity combines more than one culture'],
    ],
    notes: 'READING (website section 8). Website: “These are fictional family profiles, not claims about every person from a country.” The English column gives the key points; Develop / Stretch cover it and find the Arabic evidence. Core: read the English, then find ONE Arabic word per profile (مَغْرِبِيَّةٌ · لُبْنَانِيٌّ · بَرِيطَانِيٌّ).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions (teacher-made from the website profiles)', title: 'Find the evidence', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 22,
    questions: [
      q('Where does Yasmin live?', ['Bristol', 'Manchester', 'London'], 'يَاسْمِينُ … تَعِيشُ فِي بَرِيسْتُولَ.'),
      q('What does Yasmin’s family offer a guest?', ['tea', 'coffee', 'dates'], 'يُقَدِّمُونَ الشَّايَ.'),
      q('Which languages does Rami speak at home?', ['Arabic and English', 'Arabic and French', 'English only'], 'يَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ فِي البَيْتِ.'),
      ...bank(10, 'finalQuiz', [9]),
      q('How are Adam’s greetings different at school?', ['They are short.', 'They are in French.', 'He does not greet.'], 'فِي المَدْرَسَةِ تَكُونُ تَحِيَّاتُهُ قَصِيرَةً.'),
    ],
    side: { kind: 'info', head: 'FIND THE EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Point to the Arabic that proves it. Remember: these are three fictional families, not rules for a whole country.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Reading questions 1–3 and 5 are teacher-made; question 4 is the website checkpoint question about Rami’s main point.',
    answerNotes: 'A student reads aloud the evidence (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'كَيْفَ تُسَلِّمُ هَذِهِ العَائِلَةُ؟' },
      { route: 'develop', ar: 'مَا أَهَمُّ عَادَةٍ فِي هَذِهِ العَائِلَةِ؟' },
      { route: 'develop', ar: 'هَلْ تَخْتَلِفُ التَّحِيَّةُ مَعَ الأَصْدِقَاءِ؟' },
      { route: 'stretch', ar: 'لِمَاذَا جُمْلَةُ «كُلُّ العَائِلَاتِ …» غَيْرُ دَقِيقَةٍ؟' },
    ],
    stems: [
      { route: 'core', ar: 'هَذِهِ عَائِلَةٌ ______ . يَقُولُونَ ______ .' },
      { route: 'develop', ar: 'فِي بَعْضِ العَائِلَاتِ ______ ، وَلَكِنْ ______ .' },
      { route: 'stretch', ar: 'لَيْسَ دَائِمًا … تَخْتَلِفُ العَادَاتُ مِنْ عَائِلَةٍ إِلَى أُخْرَى.' },
      { route: 'sum', ar: 'الاِحْتِرَامُ مُهِمٌّ.' },
    ],
    modelEn: ['This is a Jordanian family. When the neighbour arrives they say “welcome”.', 'They offer tea and dates, but they respect the guest’s choice.'],
    notes: `WEBSITE SPEAKING: “Use a fictional profile or a culture you know well. Never invent personal information about a real classmate.”
Random profile cards (website):
${profiles.map((p) => `• ${p.title} — ${p.details}`).join('\n')}
Routes (website): Core — four sentences (country/family, greeting, hospitality, one variation statement) · Develop — add a comparison with Britain or another familiar context using وَلَكِنْ or أَيْضًا · Stretch — explain why one broad statement is inaccurate and replace it with careful language.
Audience questions (website, prompts 2–3 above): مَا أَهَمُّ عَادَةٍ فِي هَذِهِ العَائِلَةِ؟ · هَلْ تَخْتَلِفُ التَّحِيَّةُ مَعَ الأَصْدِقَاءِ؟ · مَا اللُّغَاتُ الَّتِي يَتَكَلَّمُونَهَا؟`,
  }),
  F.routesSlide(site, {
    core: { amount: '4 sentences', how: 'A (fictional) family, a greeting, hospitality, and “in some families…”.' },
    develop: { amount: '6–8 sentences', how: 'Add one similarity and one difference with Britain; use وَلَكِنْ / أَيْضًا.' },
    stretch: { amount: '10 sentences', how: 'Include layered identity and correct one broad statement with careful language.' },
  }),
  F.framesSlide({
    core: [
      { en: 'In my family / this family we say …', ar: 'فِي عَائِلَتِي نَقُولُ ______ .' },
      { en: 'When a guest visits, we offer …', ar: 'عِنْدَمَا يَزُورُنَا ضَيْفٌ، نُقَدِّمُ ______ .' },
      { en: 'In some families …', ar: 'فِي بَعْضِ العَائِلَاتِ ______ .' },
      { en: 'I am proud of my culture.', ar: 'أَنَا فَخُورٌ / فَخُورَةٌ بِـ ______ .' },
    ],
    develop: [
      { en: 'In Britain the greeting is …', ar: 'فِي بَرِيطَانِيَا التَّحِيَّةُ ______ .' },
      { en: '… is similar, but … is different.', ar: '______ مُتَشَابِهٌ، وَلَكِنَّ ______ مُخْتَلِفٌ.' },
      { en: 'Customs differ from one family to another.', ar: 'تَخْتَلِفُ العَادَاتُ مِنْ عَائِلَةٍ إِلَى أُخْرَى.' },
      { en: 'Respect is more important than …', ar: 'الاِحْتِرَامُ أَهَمُّ مِنْ ______ .' },
      { en: 'My identity is diverse.', ar: 'هُوِيَّتِي مُتَنَوِّعَةٌ.' },
    ],
    bank: ['ثَقَافَةٌ', 'عَادَاتٌ', 'تَقَالِيدُ', 'اِحْتِرَامٌ', 'ضِيَافَةٌ', 'عَائِلَةٌ', 'هُوِيَّةٌ', 'الشَّايَ', 'القَهْوَةَ', 'التَّمْرَ', 'مُتَشَابِهٌ', 'مُخْتَلِفٌ', 'أَحْيَانًا'],
  }),
  F.modelSlide(site,
    'In my family we say “peace be upon you”, and we ask: How is the family? When a guest visits us, we offer tea. At school in Britain the greeting is short, but the respect is similar. In some families the customs differ. I am proud of my culture.',
    ['a greeting custom', 'a hospitality custom', 'similar … but …', 'فِي بَعْضِ العَائِلَاتِ'],
    'Teacher-made model built from website language (the website gives a planner, not a finished model). A girl would write فَخُورَةٌ.'),
  F.selfCheckSlide([
    { route: 'core', text: 'I used at least four cultural words.' },
    { route: 'core', text: 'I described a greeting respectfully.' },
    { route: 'develop', text: 'I gave one similarity and one difference.' },
    { route: 'develop', text: 'I avoided “all” and “always” — I used “in some families”.' },
    { route: 'stretch', text: 'I described layered identity without personal disclosure.' },
  ]),
  F.exitTicket(bank(10, 'finalQuiz', [1, 4, 11]), 12),
  F.prepSlide({
    ...NEXT,
    words: [['الاِسْتِمَارَةُ', 'the form (to fill in)', ''], ['التَّوْقِيعُ', 'signature', ''], ['لِأَنَّ', 'because', ''], ['ثُمَّ', 'then', ''], ['مَسَوَّدَةٌ', 'a draft', '']],
    questionEn: 'Bring your F2-L07 introduction or F2-L08 profile to the next lesson — we will improve it.',
    questionAr: 'أَكْتُبُ مَسَوَّدَةً، ثُمَّ أُحَسِّنُهَا.',
    homework: {
      core: 'Website F2-L10: the vocabulary check and the Culture Detective Mission (12).',
      develop: 'Write a cultural comparison of 6–8 sentences (fictional or family-safe).',
      stretch: '10 sentences with layered identity; then the 12-question checkpoint (aim for 10/12).',
    },
    wordsSource: 'The five words are from the website F2-L11 form and connected-writing vocabulary (الاِسْتِمَارَةُ appears in the website task titles).',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: observe, ask politely, follow their lead.' }),
];

module.exports = { meta, slides };
