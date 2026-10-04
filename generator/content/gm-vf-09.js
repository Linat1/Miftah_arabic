'use strict';
/* GM-VF-09 · Form IX: Colours and Physical States — website: Mastery & Revision › Grammar › Arabic Verb Forms › Form IX (doubled final
 * letter: ifʿalla / yafʿallu; verbal noun ifʿilāl; aḥmar “red” (adjective) vs iḥmarra “become red” (verb); family iṣfarra, ikhḍarra,
 * iswadda; clinic: Form IX is not the ordinary way to say something IS a colour — use the adjective for a state, the verb for becoming;
 * apply: seasonal changes; website marks Form IX as optional extension). Website self-check items used via W. Pattern extras,
 * conjugation (the doubled letter splits before -tu / -nā), adjective table, sorter, reading and model are teacher-written. */
const G = require('./gm-common');
const V = require('./gm-vf-common');
const { q } = G;

const KEY = 'grammar__07a-verb-forms__form-09';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-VF-09', fileTitle: 'Form_IX', title: 'Form IX: Colours and Physical States', arabic: 'الْوَزْنُ التَّاسِعُ',
  focus: 'Form IX doubles the LAST root letter: aḥmar (red) → iḥmarra (become red). It is rare and almost only used for colours and physical changes. Is it red? Use the adjective. Did it turn red? Use Form IX.',
  icon: 'FaPalette',
});

const slides = G.gmLesson({
  code: 'GM-VF-09', site: KEY,
  support: `• Core: the colour adjectives (أَحْمَرُ · حَمْرَاءُ) vs the Form IX verbs (اِحْمَرَّ · اِصْفَرَّ · اِخْضَرَّ) for seasons. Develop: present forms (تَخْضَرُّ الْأَرْضُ · تَصْفَرُّ الْأَوْرَاقُ) and agreement (اِصْفَرَّتِ الْأَوْرَاقُ). Stretch: the split doubling (اِحْمَرَرْتُ) and the verbal noun اِفْعِلَالٌ (اِحْمِرَارٌ · اِصْفِرَارٌ).
• Website: Form IX is optional extension — a small, recognisable family. Teach it through seasons, faces and nature.
• Recycles GM-ADJ-03 (colours: أَفْعَلُ · فَعْلَاءُ).`,
  teach: 'Pattern card; colour family; conjugation; adjective vs verb.',
  wedo: 'Is red → turned red; sort state / change; repair.',
  next: { nextCode: 'GM-VF-10', nextTitle: 'Form X: Seeking, Using and Considering', nextAr: 'الْوَزْنُ الْعَاشِرُ' },
  doNow: {
    questions: [
      q('Which verb is Form VIII?', ['اِجْتَمَعَ', 'جَمَّعَ', 'اِنْجَمَعَ'], 't after the first root letter (GM-VF-08).'),
      q('Choose “a red car”.', ['سَيَّارَةٌ حَمْرَاءُ', 'سَيَّارَةٌ أَحْمَرُ', 'سَيَّارَةٌ أَحْمَرَةٌ'], 'Feminine colour: faʿlāʾ (GM-ADJ-03).'),
      q('Iḥmarra means …', ['to become red', 'red', 'to paint red'], 'The prep question.'),
      q('Iṣfarra means …', ['to turn yellow', 'yellow', 'to whistle'], 'Prep word.'),
      q('What is at the end of اِحْمَرَّ?', ['a shadda (doubled r)', 'a long ā', 'a sukūn'], 'The doubled last letter.'),
    ],
    keyIdea: { text: 'Form IX = doubled LAST root letter (ifʿalla). Adjective = it IS a colour; Form IX = it BECAME a colour.', ar: 'الْوَجْهُ {k|أَحْمَرُ} ‖ {e|اِحْمَرَّ} الْوَجْهُ' },
    retrieves: 'Teacher-written retrieval from GM-VF-08, GM-ADJ-03 (colour adjectives) and the prep words.',
  },
  objectives: ['Recognise Form IX by the doubled last letter.', 'Use Form IX verbs for colour changes.', 'Choose the adjective for a state, the verb for a change.', 'Make Form IX agree with the subject.'],
  routes: {
    core: ['I say the leaves turned yellow.', 'I use a colour adjective for a state.'],
    develop: ['I use tukhḍarru and taṣfarru in the present.', 'I make the verb agree (-at).'],
    stretch: ['I write iḥmarartu (split doubling).', 'I use iḥmirār and iṣfirār.'],
  },
  terms: {
    items: [
      { ar: 'الْوَزْنُ التَّاسِعُ', en: 'Form IX', note: 'اِفْعَلَّ' },
      { ar: 'الْأَلْوَانُ', en: 'colours', note: 'أَحْمَرُ · أَصْفَرُ' },
      { ar: 'الصِّفَةُ', en: 'adjective (a state)', note: 'الْوَرَقَةُ صَفْرَاءُ' },
      { ar: 'التَّحَوُّلُ', en: 'change / becoming', note: 'اِصْفَرَّتِ الْوَرَقَةُ' },
      { ar: 'اِفْعِلَالٌ', en: 'Form IX verbal noun', note: 'اِحْمِرَارٌ' },
      { ar: 'الْخَجَلُ', en: 'embarrassment', note: 'اِحْمَرَّ مِنَ الْخَجَلِ' },
    ],
  },
  explain: [
    V.patternCard({
      roman: 'IX', title: 'Double the last letter', ar: 'اِفْعَلَّ · يَفْعَلُّ',
      template: ['اِفْعَلَّ', 'يَفْعَلُّ', 'اِفْعِلَالٌ', 'مُفْعَلٌّ', '—'],
      model: ['اِحْمَرَّ', 'يَحْمَرُّ', 'اِحْمِرَارٌ', 'مُحْمَرٌّ', '—'], meaning: 'to become red',
      more: [['to turn yellow / pale', 'اِصْفَرَّ', 'يَصْفَرُّ', 'اِصْفِرَارٌ', 'مُصْفَرٌّ', '—'], ['to turn green', 'اِخْضَرَّ', 'يَخْضَرُّ', 'اِخْضِرَارٌ', 'مُخْضَرٌّ', '—'], ['to turn black', 'اِسْوَدَّ', 'يَسْوَدُّ', 'اِسْوِدَادٌ', 'مُسْوَدٌّ', '—']],
      foot: 'Website: the pattern has a doubled final radical: ifʿalla / yafʿallu; verbal noun ifʿilāl. This differs from a doubled Form I verb, where the 2nd and 3rd root letters are the same (marra).',
      notes: 'PART 1 (3 min) — website “Root and pattern”. Commands are not used (you cannot order someone to turn red!).',
    }),
    V.familyTable({
      roman: 'IX', title: 'The colour-change family', ar: 'أُسْرَةُ الْوَزْنِ التَّاسِعِ',
      rows: [
        ['اِحْمَرَّ · يَحْمَرُّ', 'to become red', 'اِحْمَرَّ وَجْهُهُ مِنَ الْخَجَلِ.'],
        ['اِخْضَرَّ · يَخْضَرُّ', 'to become green', 'تَخْضَرُّ الْأَرْضُ فِي الرَّبِيعِ.'],
        ['اِصْفَرَّ · يَصْفَرُّ', 'to turn yellow / pale', 'اِصْفَرَّتْ أَوْرَاقُ الشَّجَرِ فِي الْخَرِيفِ.'],
        ['اِسْوَدَّ · يَسْوَدُّ', 'to turn black', 'اِسْوَدَّتِ السَّمَاءُ قَبْلَ الْعَاصِفَةِ.'],
        ['اِبْيَضَّ · يَبْيَضُّ', 'to turn white', 'اِبْيَضَّ شَعْرُ جَدِّي.'],
        ['اِزْرَقَّ · يَزْرَقُّ', 'to turn blue', 'اِزْرَقَّ الْبَحْرُ بَعْدَ الْمَطَرِ.'],
      ],
      foot: 'Website: aḥmar is an adjective meaning red; iḥmarra means to become red. They are related, but different parts of speech.',
      notes: 'PART 2 (4 min) — website “Learn the family” (first three examples are the website sentences).',
    }),
    V.conjTable({
      roman: 'IX', verb: 'iḥmarra', title: 'The doubled letter splits before -tu and -nā', ar: 'تَصْرِيفُ «اِحْمَرَّ»',
      rows: [
        ['هُوَ', 'اِحْمَرَّ', 'يَحْمَرُّ', 'shadda'],
        ['هِيَ', 'اِحْمَرَّتْ', 'تَحْمَرُّ', 'shadda + -at'],
        ['هُمْ', 'اِحْمَرُّوا', 'يَحْمَرُّونَ', 'shadda + -ū'],
        ['أَنَا', 'اِحْمَرَرْتُ', 'أَحْمَرُّ', 'past: r-r split'],
        ['نَحْنُ', 'اِحْمَرَرْنَا', 'نَحْمَرُّ', 'past: r-r split'],
        ['أَنْتِ', 'اِحْمَرَرْتِ', 'تَحْمَرِّينَ', 'split · -īna'],
      ],
      foot: 'Stretch: before a suffix with sukūn (-tu, -nā, -ti) the doubled letter is written twice — iḥmarartu (like doubled verbs in GM-V-02).',
      notes: 'PART 3 (3 min). Core students need the he / she / they rows only.',
    }),
  ],
  quick: [
    W(/Self-check/, 0, { feedback: 'Iḥmarra is a verb meaning to become red.' }),
    W(/Self-check/, 1, { prompt: 'Which means “the land becomes green”?', feedback: 'Takhḍarru describes a change; the adjective describes a state.' }),
    q('Choose “the leaves turned yellow”.', ['اِصْفَرَّتِ الْأَوْرَاقُ', 'الْأَوْرَاقُ صَفْرَاءُ', 'اِصْفَرَّ الْأَوْرَاقُ'], 'Change + feminine agreement (non-human plural).'),
    q('Choose “the sky is blue” (a state).', ['السَّمَاءُ زَرْقَاءُ', 'اِزْرَقَّتِ السَّمَاءُ', 'تَزْرَقُّ السَّمَاءُ'], 'State → adjective.'),
  ],
  quickNote: 'website Self-check items, plus two teacher items.',
  ido: {
    title: 'Watch me describe seasonal change',
    steps: [
      { head: 'Spring', ar: 'تَخْضَرُّ', think: 'The land becomes green.' },
      { head: 'Autumn', ar: 'تَصْفَرُّ', think: 'The leaves turn yellow.' },
      { head: 'A face', ar: 'اِحْمَرَّ', think: 'Past: became red.' },
      { head: 'A state', ar: 'زَرْقَاءَ', think: 'Adjective, not a verb.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'FORM IX (CHANGE)', e: 'ADJECTIVE (STATE)' },
    model: 'فِي الرَّبِيعِ {k|تَخْضَرُّ} الْأَرْضُ، وَفِي الْخَرِيفِ {k|تَصْفَرُّ} الْأَوْرَاقُ. {k|اِحْمَرَّ} وَجْهُ الطَّالِبِ مِنَ الْخَجَلِ، وَكَانَتِ السَّمَاءُ {e|زَرْقَاءَ}.',
    modelEn: 'In spring the land becomes green, and in autumn the leaves turn yellow. The student’s face became red with embarrassment, and the sky was blue.',
    notes: 'Website “Apply the form” model answer.',
  },
  models: [
    { ar: 'اِحْمَرَّ وَجْهُهُ مِنَ الْخَجَلِ.', en: 'His face went red with embarrassment.', tip: 'Website.' },
    { ar: 'تَخْضَرُّ الْأَرْضُ فِي الرَّبِيعِ.', en: 'The land becomes green in spring.', tip: 'Website.' },
    { ar: 'اِصْفَرَّ وَجْهُهَا مِنَ الْخَوْفِ.', en: 'Her face went pale with fear.', tip: 'Pale.' },
    { ar: 'الْوَرَقَةُ صَفْرَاءُ.', en: 'The leaf is yellow.', tip: 'State: adjective.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · adjective (state) vs Form IX (change) · say it aloud', title: 'It IS red → it TURNED red', ar: 'الصِّفَةُ وَالْفِعْلُ',
      ltr: true, stage: 'wedo',
      cols: [{ label: 'Adjective m. · f.', w: 3.6, size: 24 }, { label: 'Meaning', w: 1.9 }, { label: 'Form IX', w: 2.8, size: 24 }, { label: 'Meaning', w: 4.03 }],
      rows: [
        { core: true, cells: ['أَحْمَرُ · حَمْرَاءُ', 'red', 'اِحْمَرَّ', 'to become red'] },
        { core: true, cells: ['أَصْفَرُ · صَفْرَاءُ', 'yellow', 'اِصْفَرَّ', 'to turn yellow / pale'] },
        { core: true, cells: ['أَخْضَرُ · خَضْرَاءُ', 'green', 'اِخْضَرَّ', 'to become green'] },
        { cells: ['أَسْوَدُ · سَوْدَاءُ', 'black', 'اِسْوَدَّ', 'to turn black'] },
        { cells: ['أَبْيَضُ · بَيْضَاءُ', 'white', 'اِبْيَضَّ', 'to turn white'] },
        { cells: ['أَزْرَقُ · زَرْقَاءُ', 'blue', 'اِزْرَقَّ', 'to turn blue'] },
      ],
      foot: 'Website clinic: Form IX is not the ordinary way to say something is a colour. State → adjective (al-waraqatu ṣafrāʾu); change → verb (iṣfarrati l-waraqatu).',
      notes: 'WE DO (3 min). Cover column 3; students build the verb from the adjective (a…ar → i…arra).',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · website clinic · state or change?', title: 'Is it a colour, or did it become one?', ar: 'حَالٌ أَمْ تَحَوُّلٌ؟',
      categories: ['State (adjective)', 'Change (Form IX)'],
      items: [['السَّمَاءُ زَرْقَاءُ', 0], ['الْعُشْبُ أَخْضَرُ', 0], ['وَجْهُهُ أَحْمَرُ', 0], ['شَعْرُهُ أَبْيَضُ', 0], ['اِزْرَقَّتِ السَّمَاءُ', 1], ['اِخْضَرَّ الْعُشْبُ', 1], ['اِحْمَرَّ وَجْهُهُ', 1], ['اِبْيَضَّ شَعْرُهُ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students translate each pair: “the sky is blue / the sky turned blue”.',
    },
  ],
  mistakes: [
    { wrong: 'الْوَرَقَةُ أَصْفَرُ', right: 'الْوَرَقَةُ صَفْرَاءُ', why: 'For a state use the adjective — feminine faʿlāʾ (website clinic).' },
    { wrong: 'اِحْمَرَّتْ وَجْهُهُ', right: 'اِحْمَرَّ وَجْهُهُ', why: 'Wajh (face) is masculine.' },
    { wrong: 'اِحْمَرَّتُ مِنَ الْخَجَلِ', right: 'اِحْمَرَرْتُ مِنَ الْخَجَلِ', why: 'Before -tu the doubled letter splits.' },
  ],
  hints: ['Adjective agreement?', 'Is face masculine?', 'Split the double?'],
  practice: [
    W(/Self-check/, 2, { prompt: 'Which statement is accurate?', feedback: 'Learn Form IX as a small, recognisable family.' }),
    q('What is the verbal noun of اِحْمَرَّ?', ['اِحْمِرَارٌ', 'حُمْرَةٌ', 'أَحْمَرُ'], 'ifʿilāl.'),
    q('Choose “the trees become green”.', ['تَخْضَرُّ الْأَشْجَارُ', 'يَخْضَرُّ الْأَشْجَارُ', 'الْأَشْجَارُ أَخْضَرُ'], 'Non-human plural → ta-.'),
    q('Which is Form IX?', ['اِسْوَدَّ', 'أَسْوَدُ', 'سَوَّدَ'], 'Doubled last letter; aswad is the adjective.'),
  ],
  practiceLabel: 'website Self-check item and teacher-written questions',
  read: {
    title: 'The four seasons in my village', label: 'reading for Form IX (teacher-written description)',
    text: 'فِي الرَّبِيعِ تَخْضَرُّ الْحُقُولُ، وَتَظْهَرُ الْأَزْهَارُ الْحَمْرَاءُ وَالصَّفْرَاءُ. فِي الصَّيْفِ تَكُونُ السَّمَاءُ زَرْقَاءَ صَافِيَةً. فِي الْخَرِيفِ تَصْفَرُّ أَوْرَاقُ الشَّجَرِ ثُمَّ تَسْقُطُ. فِي الشِّتَاءِ تَسْوَدُّ السَّمَاءُ قَبْلَ الْعَوَاصِفِ، وَتَبْيَضُّ الْجِبَالُ بِالثَّلْجِ. أَمَّا جَدِّي فَقَدِ ابْيَضَّ شَعْرُهُ، وَلَكِنَّهُ مَا زَالَ نَشِيطًا!',
    glossary: [['الْحُقُولُ', 'the fields'], ['تَظْهَرُ', 'appear'], ['صَافِيَةً', 'clear'], ['تَسْقُطُ', 'fall'], ['الْعَوَاصِفِ', 'the storms'], ['مَا زَالَ', 'is still']],
    task: 'Website: describe seasonal changes. First, underline every Form IX verb and circle every colour adjective.',
    questions: [
      q('What happens to the fields in spring?', ['they turn green', 'they turn yellow', 'they turn white'], 'Takhḍarru l-ḥuqūl.'),
      q('Which phrase describes a STATE, not a change?', ['السَّمَاءُ زَرْقَاءُ', 'تَصْفَرُّ الْأَوْرَاقُ', 'تَسْوَدُّ السَّمَاءُ'], 'Adjective.'),
      q('What makes the mountains white?', ['snow', 'storms', 'flowers'], 'Tabyaḍḍu l-jibālu bi-th-thalj.'),
      q('What has happened to the grandfather’s hair?', ['it has turned white', 'it has turned black', 'it has fallen out'], 'Ibyaḍḍa shaʿruhu.'),
    ],
    qNote: 'Teacher-written description for the website “Apply the form” task; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: colours that change', source: 'website “Apply the form”',
    prompts: [
      { route: 'core', ar: 'مَا لَوْنُ السَّمَاءِ الْيَوْمَ؟' },
      { route: 'develop', ar: 'مَاذَا يَحْدُثُ لِلْأَشْجَارِ فِي الْخَرِيفِ؟' },
      { route: 'stretch', ar: 'مَتَى يَحْمَرُّ وَجْهُكَ؟ وَمَتَى يَصْفَرُّ؟' },
    ],
    stems: [
      { route: 'core', ar: 'السَّمَاءُ الْيَوْمَ ______ .' },
      { route: 'develop', ar: 'فِي الْخَرِيفِ تَصْفَرُّ ______ .' },
      { route: 'stretch', ar: 'يَحْمَرُّ وَجْهِي عِنْدَمَا ______ ، وَيَصْفَرُّ عِنْدَمَا ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَاذَا يَحْدُثُ فِي الرَّبِيعِ فِي بَلَدِكِ؟', en: 'What happens in spring in your country? (to a girl)' },
      { who: 'B', ar: 'تَخْضَرُّ الْحَدَائِقُ، وَتَكُونُ الْأَزْهَارُ حَمْرَاءَ وَصَفْرَاءَ. وَالسَّمَاءُ زَرْقَاءُ أَغْلَبَ الْأَيَّامِ.', en: 'The gardens turn green, and the flowers are red and yellow. And the sky is blue most days.' },
    ],
    notes: 'Website: two seasonal changes and one change in a person’s appearance; one adjective and two Form IX verbs.',
  },
  write: {
    siteTask: 'Describe two seasonal changes and one change in a person’s appearance. Use one adjective and two Form IX verbs.',
    core: { amount: '3 sentences', task: 'Website task.', how: 'takhḍarru · taṣfarru · one adjective.' },
    develop: { amount: '5 sentences', task: 'Four seasons with Form IX verbs and adjectives.', how: 'Agreement with non-human plurals.' },
    stretch: { amount: '7 sentences', task: 'A seasons description with a verbal noun and a split-doubling past.', how: 'iṣfirār · iḥmarartu.' },
  },
  frames: {
    core: [
      { en: 'In spring … becomes green', ar: 'فِي الرَّبِيعِ يَخْضَرُّ ______ .' },
      { en: 'In autumn the leaves …', ar: 'فِي الْخَرِيفِ ______ الْأَوْرَاقُ.' },
      { en: 'His face went red because …', ar: 'اِحْمَرَّ وَجْهُهُ لِأَنَّ ______ .' },
      { en: 'The sky is …', ar: 'السَّمَاءُ ______ .' },
    ],
    develop: [
      { en: 'Before the storm the sky …', ar: 'قَبْلَ الْعَاصِفَةِ ______ السَّمَاءُ.' },
      { en: 'The mountains turn white with …', ar: 'تَبْيَضُّ الْجِبَالُ ______ .' },
      { en: 'Her face went pale from …', ar: 'اِصْفَرَّ وَجْهُهَا مِنْ ______ .' },
      { en: 'The flowers are …', ar: 'الْأَزْهَارُ ______ .' },
    ],
    bank: ['اِحْمَرَّ · يَحْمَرُّ', 'اِصْفَرَّ · يَصْفَرُّ', 'اِخْضَرَّ · يَخْضَرُّ', 'اِسْوَدَّ · يَسْوَدُّ', 'اِبْيَضَّ · يَبْيَضُّ', 'حَمْرَاءُ', 'صَفْرَاءُ', 'خَضْرَاءُ', 'زَرْقَاءُ'],
  },
  stretchTask: {
    task: 'Describe the four seasons with Form IX verbs, colour adjectives and one verbal noun.',
    checklist: ['Three Form IX verbs (change).', 'Two colour adjectives (state).', 'Correct agreement (taṣfarru l-awrāq).', 'One verbal noun (iṣfirār, ikhḍirār).', 'One split-doubling past (iḥmarartu).'],
    phrases: [['فِي الرَّبِيعِ', 'in spring'], ['فِي الْخَرِيفِ', 'in autumn'], ['مِنَ الْخَجَلِ', 'with embarrassment'], ['مِنَ الْخَوْفِ', 'from fear'], ['شَيْئًا فَشَيْئًا', 'little by little'], ['أَمَّا … فَـ', 'as for … (then)']],
  },
  model: {
    text: 'أُحِبُّ تَغَيُّرَ الْأَلْوَانِ فِي الطَّبِيعَةِ. فِي الرَّبِيعِ تَخْضَرُّ الْحَدَائِقُ شَيْئًا فَشَيْئًا، وَتَكُونُ الْأَزْهَارُ حَمْرَاءَ وَبَيْضَاءَ. فِي الْخَرِيفِ تَصْفَرُّ أَوْرَاقُ الشَّجَرِ، وَاصْفِرَارُهَا جَمِيلٌ جِدًّا. فِي الشِّتَاءِ تَسْوَدُّ السَّمَاءُ قَبْلَ الْمَطَرِ. وَفِي يَوْمِ الْحَفْلِ اِحْمَرَرْتُ مِنَ الْخَجَلِ عِنْدَمَا صَفَّقَ لِي الْجُمْهُورُ!',
    en: 'I love the change of colours in nature. In spring the gardens turn green little by little, and the flowers are red and white. In autumn the leaves turn yellow, and their yellowing is very beautiful. In winter the sky turns black before the rain. And on the day of the show I went red with embarrassment when the audience clapped for me!',
    find: ['Form IX present', 'colour adjective', 'ifʿilāl noun', 'split-doubling past'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'I used Form IX for a CHANGE of colour.' },
    { route: 'core', text: 'I used the adjective for a colour STATE.' },
    { route: 'develop', text: 'My Form IX verbs agree with the subject.' },
    { route: 'develop', text: 'Feminine adjectives use faʿlāʾ.' },
    { route: 'stretch', text: 'I wrote iḥmarartu with the split doubling.' },
  ],
  exit: [
    q('Choose “the land became green”.', ['اِخْضَرَّتِ الْأَرْضُ', 'الْأَرْضُ خَضْرَاءُ', 'اِخْضَرَّ الْأَرْضُ'], 'Change + feminine subject.'),
    q('Which is the adjective?', ['أَحْمَرُ', 'اِحْمَرَّ', 'يَحْمَرُّ'], 'aḥmar = red.'),
    q('Choose “I went red”.', ['اِحْمَرَرْتُ', 'اِحْمَرَّتُ', 'أَحْمَرُّ'], 'Split doubling before -tu.'),
  ],
  mastery: false,
  prep: {
    words: [['اِسْتَعْمَلَ · يَسْتَعْمِلُ', 'to use', '—'], ['اِسْتَخْدَمَ · يَسْتَخْدِمُ', 'to use / employ', '—'], ['اِسْتَقْبَلَ · يَسْتَقْبِلُ', 'to receive / welcome', '—'], ['اِسْتَغْفَرَ · يَسْتَغْفِرُ', 'to seek forgiveness', '—'], ['عَمِلَ', 'to work (Form I)', '—']],
    questionEn: 'ʿAmila = to work. Istaʿmala = to use. Which letters were added at the front?',
    questionAr: 'عَمِلَ · اِسْتَعْمَلَ',
    homework: {
      core: 'Write five sentences: colour states (adjectives) and colour changes (Form IX).',
      develop: 'Conjugate iṣfarra in past and present for he, she, they and I.',
      stretch: 'A four-seasons description.',
    },
    wordsSource: 'The five words prepare GM-VF-10 (website Verb Forms: Form X).',
  },
  remember: 'Remember: Form IX = doubled last letter (ifʿalla) · colours and physical changes · IS a colour → adjective · BECAME a colour → Form IX · iḥmarartu splits the double · rare: optional extension.',
});

module.exports = { meta, slides };
