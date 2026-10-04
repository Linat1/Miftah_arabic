'use strict';
/* GM-VF-03 · Form III: Participation and Interaction — website: Mastery & Revision › Grammar › Arabic Verb Forms › Form III (long ā after
 * the first root letter: fāʿala; present yufāʿilu; shāraka “participate”; family sāʿada, ḥāwala, sāfara; clinic: Form III does not always
 * mean “doing something to each other” — sāʿada = help, sāfara = travel; apply: a four-sentence school activity account). Website
 * self-check items used via W. Pattern extras, conjugation, contrast, sorter (Form III vs hollow Form I), reading and model are
 * teacher-written on the website content. */
const G = require('./gm-common');
const V = require('./gm-vf-common');
const { q } = G;

const KEY = 'grammar__07a-verb-forms__form-03';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-VF-03', fileTitle: 'Form_III', title: 'Form III: Participation and Interaction', arabic: 'الْوَزْنُ الثَّالِثُ',
  focus: 'Form III adds a long ā after the first root letter: shāraka (participate), sāʿada (help). The present starts with u-: yushāriku. It often involves another person — but not always.',
  icon: 'FaHandshake',
});

const slides = G.gmLesson({
  code: 'GM-VF-03', site: KEY,
  support: `• Core: شَارَكَ · يُشَارِكُ and the family سَاعَدَ · حَاوَلَ · سَافَرَ in sentences about school activities. Develop: present with u- (أُسَاعِدُ · تُشَارِكِينَ) and the verbal noun مُفَاعَلَةٌ (مُشَارَكَةٌ · مُسَاعَدَةٌ · مُحَاوَلَةٌ). Stretch: Form I vs Form III (جَلَسَ / جَالَسَ · قَبِلَ / قَابَلَ) and telling Form III from hollow Form I verbs (قَالَ · نَامَ).
• Website clinic: Form III does NOT always mean “to each other” — sāʿada = to help, sāfara = to travel.
• Grammar link: sāʿada takes a direct object — سَاعَدْتُ صَدِيقِي (no maʿa).`,
  teach: 'Pattern card; family; conjugation; Form I vs III.',
  wedo: 'Same root, Form III; sort Form III / hollow Form I; repair.',
  next: { nextCode: 'GM-VF-04', nextTitle: 'Form IV: Causing and Bringing About', nextAr: 'الْوَزْنُ الرَّابِعُ' },
  doNow: {
    questions: [
      q('Which verb is Form II?', ['نَظَّمَ', 'نَظَرَ', 'نَاظَرَ'], 'Shadda on the middle letter (GM-VF-02).'),
      q('What comes after the first letter in شَارَكَ?', ['a long ā', 'a shadda', 'a sukūn'], 'The prep clue.'),
      q('Sāʿada means …', ['to help', 'to travel', 'to try'], 'Prep word.'),
      q('Choose the present of سَافَرَ.', ['يُسَافِرُ', 'يَسْفِرُ', 'يَتَسَافَرُ'], 'Form III present: yu-.'),
      q('Ḥāwala means …', ['to try', 'to help', 'to participate'], 'Prep word.'),
    ],
    keyIdea: { text: 'Form III = long ā after the first root letter. Present = yu- + kasra before the last letter.', ar: '{k|شَارَكَ} · {e|يُشَارِكُ}' },
    retrieves: 'Teacher-written retrieval from GM-VF-02 and its prep words (shāraka, sāʿada, ḥāwala, sāfara).',
  },
  objectives: ['Recognise Form III by the long ā after the first letter.', 'Form the present with yu-.', 'Use Form III verbs about activities and helping.', 'Know that Form III is not always “each other”.'],
  routes: {
    core: ['I use shāraka and sāʿada in sentences.', 'I say “I help my friend” without maʿa.'],
    develop: ['I conjugate sāʿada in past and present.', 'I use mushāraka and musāʿada.'],
    stretch: ['I compare jalasa and jālasa.', 'I tell shāraka from qāla (hollow Form I).'],
  },
  terms: {
    items: [
      { ar: 'الْوَزْنُ الثَّالِثُ', en: 'Form III', note: 'فَاعَلَ' },
      { ar: 'الْمُشَارَكَةُ', en: 'participation (involving others)', note: 'شَارَكَ' },
      { ar: 'أَلِفُ الْمَدِّ', en: 'long ā', note: 'سَاعَدَ' },
      { ar: 'مُفَاعَلَةٌ', en: 'Form III verbal noun', note: 'مُسَاعَدَةٌ' },
      { ar: 'مُفَاعِلٌ', en: 'Form III doer', note: 'مُشَارِكٌ' },
      { ar: 'الْمَفْعُولُ بِهِ', en: 'direct object', note: 'سَاعَدْتُ أُمِّي' },
    ],
  },
  explain: [
    V.patternCard({
      roman: 'III', title: 'A long ā after the first letter', ar: 'فَاعَلَ · يُفَاعِلُ',
      template: ['فَاعَلَ', 'يُفَاعِلُ', 'مُفَاعَلَةٌ', 'مُفَاعِلٌ', 'فَاعِلْ'],
      model: ['شَارَكَ', 'يُشَارِكُ', 'مُشَارَكَةٌ', 'مُشَارِكٌ', 'شَارِكْ'], meaning: 'to participate',
      more: [['to help', 'سَاعَدَ', 'يُسَاعِدُ', 'مُسَاعَدَةٌ', 'مُسَاعِدٌ', 'سَاعِدْ'], ['to try', 'حَاوَلَ', 'يُحَاوِلُ', 'مُحَاوَلَةٌ', 'مُحَاوِلٌ', 'حَاوِلْ'], ['to watch', 'شَاهَدَ', 'يُشَاهِدُ', 'مُشَاهَدَةٌ', 'مُشَاهِدٌ', 'شَاهِدْ']],
      foot: 'Website: a long ā is inserted after the first root consonant in the past: fāʿala. The present commonly follows yufāʿilu, with the same long vowel.',
      notes: 'PART 1 (3 min) — website “Root and pattern”. Verbal noun, doer and command added from the standard patterns.',
    }),
    V.familyTable({
      roman: 'III', title: 'The Form III family', ar: 'أُسْرَةُ الْوَزْنِ الثَّالِثِ',
      rows: [
        ['شَارَكَ · يُشَارِكُ', 'to participate', 'أُشَارِكُ فِي نَادِي الْقِرَاءَةِ.'],
        ['سَاعَدَ · يُسَاعِدُ', 'to help', 'سَاعَدَتْ سَلْمَى صَدِيقَتَهَا فِي الْوَاجِبِ.'],
        ['حَاوَلَ · يُحَاوِلُ', 'to try', 'نُحَاوِلُ أَنْ نَتَحَدَّثَ بِالْعَرَبِيَّةِ.'],
        ['سَافَرَ · يُسَافِرُ', 'to travel', 'سَافَرْنَا إِلَى لَنْدَنَ فِي الصَّيْفِ.'],
        ['شَاهَدَ · يُشَاهِدُ', 'to watch', 'شَاهَدْتُ الْمُبَارَاةَ مَعَ أَبِي.'],
        ['نَاقَشَ · يُنَاقِشُ', 'to discuss', 'نُنَاقِشُ الْمَوْضُوعَ فِي الصَّفِّ.'],
      ],
      foot: 'Website: shāraka means to participate or share in an activity. Other Form III verbs, such as sāʿada, have their own meanings — the pattern does not guarantee “each other”.',
      notes: 'PART 2 (4 min) — website “Learn the family” (first four examples are the website sentences).',
    }),
    V.conjTable({
      roman: 'III', verb: 'sāʿada', title: 'Keep the ā in every person', ar: 'تَصْرِيفُ «سَاعَدَ»',
      rows: [
        ['أَنَا', 'سَاعَدْتُ', 'أُسَاعِدُ', 'u- not a-'],
        ['هُوَ', 'سَاعَدَ', 'يُسَاعِدُ', 'yu-'],
        ['هِيَ', 'سَاعَدَتْ', 'تُسَاعِدُ', 'tu-'],
        ['أَنْتِ', 'سَاعَدْتِ', 'تُسَاعِدِينَ', 'tu- … -īna'],
        ['نَحْنُ', 'سَاعَدْنَا', 'نُسَاعِدُ', 'nu-'],
        ['هُمْ', 'سَاعَدُوا', 'يُسَاعِدُونَ', 'yu- … -ūna'],
      ],
      foot: 'Website “Look closely”: compare a Form I verb with shāraka / yushāriku — the long vowel is the clue. Like Form II, the present prefix vowel is u.',
      notes: 'PART 3 (3 min). Students chant past then present for each person.',
    }),
  ],
  quick: [
    W(/Self-check/, 0, { feedback: 'The long ā after the first letter is the Form III feature.' }),
    W(/Self-check/, 1, { prompt: 'Choose the present of shāraka.', feedback: 'Form III commonly follows yufāʿilu.' }),
    q('Choose “I help my mother”.', ['أُسَاعِدُ أُمِّي', 'أُسَاعِدُ مَعَ أُمِّي', 'أَسْعَدُ أُمِّي'], 'Direct object — no maʿa.'),
    q('Choose “we tried”.', ['حَاوَلْنَا', 'نُحَاوِلُ', 'حَاوَلُوا'], 'Past + -nā.'),
  ],
  quickNote: 'website Self-check items, plus two teacher items.',
  ido: {
    title: 'Watch me describe a school activity with Form III',
    steps: [
      { head: 'Root', ar: 'ش ر ك', think: 'Sharing.' },
      { head: 'Form III', ar: 'شَارَكَ', think: 'Add ā: participate.' },
      { head: 'Present', ar: 'أُشَارِكُ', think: 'u- for I.' },
      { head: 'Noun', ar: 'مُشَارَكَةٌ', think: 'mufāʿala.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'FORM III', e: 'OTHER FORMS' },
    model: '{k|أُشَارِكُ} فِي نَادِي الْقِرَاءَةِ. أَمْسِ {k|سَاعَدْتُ} صَدِيقَتِي فِي الْوَاجِبِ. {k|نُحَاوِلُ} أَنْ {e|نَتَحَدَّثَ} بِالْعَرَبِيَّةِ كُلَّ يَوْمٍ. وَ{k|سَافَرْنَا} إِلَى لَنْدَنَ فِي الصَّيْفِ.',
    modelEn: 'I participate in the reading club. Yesterday I helped my friend with the homework. We try to speak Arabic every day. We travelled to London in the summer.',
    notes: 'Website “Apply the form” model answer. Nataḥaddatha is Form V (GM-VF-05) — preview.',
  },
  models: [
    { ar: 'أُشَارِكُ فِي نَادِي الْقِرَاءَةِ.', en: 'I participate in the reading club.', tip: 'Website.' },
    { ar: 'سَاعَدَتْ سَلْمَى صَدِيقَتَهَا.', en: 'Salmā helped her friend.', tip: 'Direct object.' },
    { ar: 'نُحَاوِلُ أَنْ نَتَحَدَّثَ بِالْعَرَبِيَّةِ.', en: 'We try to speak Arabic.', tip: 'ḥāwala + an.' },
    { ar: 'قَابَلْتُ الْمُدِيرَ الْيَوْمَ.', en: 'I met the head teacher today.', tip: 'qābala.' },
  ],
  wedoSlides: [
    V.contrastTable({
      roman: 'III', title: 'What the long ā adds', ar: 'مِنَ الْأَوَّلِ إِلَى الثَّالِثِ',
      rows: [
        ['كَتَبَ', 'to write', 'كَاتَبَ', 'to write to / correspond with'],
        ['جَلَسَ', 'to sit', 'جَالَسَ', 'to sit with someone'],
        ['قَبِلَ', 'to accept', 'قَابَلَ', 'to meet (someone)'],
        ['عَمِلَ', 'to work', 'عَامَلَ', 'to treat / deal with'],
        ['سَعِدَ', 'to be happy', 'سَاعَدَ', 'to help (own meaning)'],
      ],
      foot: 'Often another person is involved (write to, sit with, meet). But sāʿada shows the meaning can be its own — learn each verb (website clinic).',
      notes: 'WE DO (3 min). Cover column 3; students add the ā.',
    }),
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · count the root letters', title: 'Form III, or hollow Form I?', ar: 'وَزْنٌ ثَالِثٌ أَمْ أَجْوَفُ؟',
      categories: ['Form III (3 letters + ā)', 'Hollow Form I (ā is the root)'],
      items: [['شَارَكَ', 0], ['سَاعَدَ', 0], ['حَاوَلَ', 0], ['سَافَرَ', 0], ['قَالَ', 1], ['نَامَ', 1], ['زَارَ', 1], ['كَانَ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Qāla has only q-ā-l: the ā stands for the root wāw (GM-V-02). Shāraka has sh-r-k plus ā.',
    },
  ],
  mistakes: [
    { wrong: 'هُوَ يَشَارِكُ فِي النَّادِي', right: 'هُوَ يُشَارِكُ فِي النَّادِي', why: 'Form III present: yu-.' },
    { wrong: 'سَاعَدْتُ مَعَ صَدِيقِي', right: 'سَاعَدْتُ صَدِيقِي', why: 'Sāʿada takes a direct object.' },
    { wrong: 'أُحَاوِلُ أَدْرُسُ', right: 'أُحَاوِلُ أَنْ أَدْرُسَ', why: 'Ḥāwala + an + subjunctive (GM-V-10).' },
  ],
  hints: ['ya- or yu-?', 'Is maʿa needed?', 'What comes after try?'],
  practice: [
    W(/Self-check/, 2, { prompt: 'What is the best interpretation of Form III?', feedback: 'Meaning depends on the actual verb and context.' }),
    q('Choose “she participates”.', ['تُشَارِكُ', 'تَشْرَكُ', 'شَارَكَتْ'], 'tu- + ā.'),
    q('What is the verbal noun of سَاعَدَ?', ['مُسَاعَدَةٌ', 'سَعَادَةٌ', 'مُسَاعِدٌ'], 'mufāʿala.'),
    q('Which is Form III?', ['نَاقَشَ', 'نَامَ', 'نَقَشَ'], '3 letters n-q-sh + ā.'),
  ],
  practiceLabel: 'website Self-check item and teacher-written questions',
  read: {
    title: 'Our charity day', label: 'reading for Form III (teacher-written account)',
    text: 'فِي يَوْمِ الْخَيْرِ شَارَكَ كُلُّ الطُّلَّابِ فِي الْأَنْشِطَةِ. سَاعَدْنَا الْمُعَلِّمِينَ فِي تَنْظِيمِ السُّوقِ، وَحَاوَلَتْ أُخْتِي أَنْ تَبِيعَ الْكَعْكَ. شَاهَدَ الْآبَاءُ الْعَرْضَ، وَنَاقَشْنَا فِكْرَةَ رِحْلَةٍ خَيْرِيَّةٍ. فِي الصَّيْفِ سَيُسَافِرُ بَعْضُ الطُّلَّابِ لِمُسَاعَدَةِ الْأَطْفَالِ.',
    glossary: [['يَوْمِ الْخَيْرِ', 'charity day'], ['الْأَنْشِطَةِ', 'the activities'], ['تَبِيعَ', 'sell'], ['الْكَعْكَ', 'the cakes'], ['الْعَرْضَ', 'the show']],
    task: 'Website: write about a school activity. First, underline every Form III verb here.',
    questions: [
      q('What did the writer’s sister try to do?', ['sell cakes', 'watch the show', 'travel'], 'Ḥāwalat an tabīʿa l-kaʿk.'),
      q('Who watched the show?', ['the parents', 'the teachers', 'the children'], 'Shāhada l-ābāʾ.'),
      q('What will some students do in summer?', ['travel to help children', 'organise a market', 'sell cakes'], 'Sa-yusāfiru … li-musāʿadati l-aṭfāl.'),
      q('Which word is a Form III verbal noun?', ['مُسَاعَدَةِ', 'تَنْظِيمِ', 'الْأَنْشِطَةِ'], 'mufāʿala; tanẓīm is Form II.'),
    ],
    qNote: 'Teacher-written account for the website “Apply the form” task; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: activities I take part in', source: 'website “Apply the form”',
    prompts: [
      { route: 'core', ar: 'فِي أَيِّ نَشَاطٍ تُشَارِكُ؟' },
      { route: 'develop', ar: 'مَنْ سَاعَدْتَ هَذَا الْأُسْبُوعَ؟ وَكَيْفَ؟' },
      { route: 'stretch', ar: 'مَاذَا تُحَاوِلُ أَنْ تُحَسِّنَ؟ وَإِلَى أَيْنَ سَافَرْتَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أُشَارِكُ فِي ______ .' },
      { route: 'develop', ar: 'سَاعَدْتُ ______ فِي ______ .' },
      { route: 'stretch', ar: 'أُحَاوِلُ أَنْ ______ ، وَسَافَرْتُ إِلَى ______ .' },
    ],
    model: [
      { who: 'A', ar: 'فِي أَيِّ نَشَاطٍ تُشَارِكِينَ؟', en: 'Which activity do you take part in? (to a girl)' },
      { who: 'B', ar: 'أُشَارِكُ فِي فَرِيقِ السِّبَاحَةِ، وَأُسَاعِدُ الطَّالِبَاتِ الصَّغِيرَاتِ. أُحَاوِلُ أَنْ أَسْبَحَ أَسْرَعَ كُلَّ أُسْبُوعٍ.', en: 'I take part in the swimming team, and I help the younger girls. I try to swim faster every week.' },
    ],
    notes: 'Website: use participate, help and try, with a past event and a present habit.',
  },
  write: {
    siteTask: 'Write a four-sentence account of a school activity using participate, help and try. Include a past event and a present habit.',
    core: { amount: '4 sentences', task: 'Website task.', how: 'shāraka · sāʿada · ḥāwala.' },
    develop: { amount: '6 sentences', task: 'Add sāfara, shāhada and a verbal noun.', how: 'Present with u-.' },
    stretch: { amount: '8 sentences', task: 'A charity or club day with five Form III verbs.', how: 'One Form I / Form III contrast.' },
  },
  frames: {
    core: [
      { en: 'I participate in …', ar: 'أُشَارِكُ فِي ______ .' },
      { en: 'Yesterday I helped …', ar: 'أَمْسِ سَاعَدْتُ ______ .' },
      { en: 'We try to …', ar: 'نُحَاوِلُ أَنْ ______ .' },
      { en: 'We travelled to …', ar: 'سَافَرْنَا إِلَى ______ .' },
    ],
    develop: [
      { en: 'I watched … with …', ar: 'شَاهَدْتُ ______ مَعَ ______ .' },
      { en: 'We discuss … in class', ar: 'نُنَاقِشُ ______ فِي الصَّفِّ.' },
      { en: 'Participation in … is …', ar: 'الْمُشَارَكَةُ فِي ______ مُفِيدَةٌ.' },
      { en: 'I met …', ar: 'قَابَلْتُ ______ .' },
    ],
    bank: ['شَارَكَ · يُشَارِكُ', 'سَاعَدَ · يُسَاعِدُ', 'حَاوَلَ · يُحَاوِلُ', 'سَافَرَ · يُسَافِرُ', 'شَاهَدَ · يُشَاهِدُ', 'نَاقَشَ · يُنَاقِشُ', 'قَابَلَ · يُقَابِلُ', 'مُشَارَكَةٌ', 'مُسَاعَدَةٌ'],
  },
  stretchTask: {
    task: 'Write about a charity or club day with five Form III verbs and one Form I / Form III contrast.',
    checklist: ['Five Form III verbs with the long ā.', 'Present forms with u-.', 'A past event and a present habit.', 'One verbal noun (mufāʿala).', 'Sāʿada with a direct object.'],
    phrases: [['فِي يَوْمِ', 'on the day of'], ['مَعَ زُمَلَائِي', 'with my classmates'], ['لِمُسَاعَدَةِ', 'to help'], ['كُلَّ أُسْبُوعٍ', 'every week'], ['فِي الصَّيْفِ الْمَاضِي', 'last summer'], ['بِالْعَرَبِيَّةِ', 'in Arabic']],
  },
  model: {
    text: 'أُشَارِكُ فِي نَادِي الْمُنَاظَرَاتِ كُلَّ أُسْبُوعٍ. نُنَاقِشُ مَوْضُوعَاتٍ مُهِمَّةً، وَأُحَاوِلُ أَنْ أَتَكَلَّمَ بِثِقَةٍ. فِي الشَّهْرِ الْمَاضِي سَافَرْنَا إِلَى مَدِينَةٍ أُخْرَى، وَشَارَكْنَا فِي مُسَابَقَةٍ كَبِيرَةٍ. سَاعَدَنِي مُدَرِّبِي كَثِيرًا، وَشَاهَدَ وَالِدَايَ الْمُنَاظَرَةَ. قَابَلْتُ طُلَّابًا جُدُدًا، وَكَاتَبْتُهُمْ بَعْدَ ذَلِكَ. الْمُشَارَكَةُ فِي النَّادِي عَلَّمَتْنِي الصَّبْرَ.',
    en: 'I take part in the debating club every week. We discuss important topics, and I try to speak confidently. Last month we travelled to another city and took part in a big competition. My coach helped me a lot, and my parents watched the debate. I met new students and corresponded with them afterwards. Taking part in the club has taught me patience.',
    find: ['Form III past', 'Form III present', 'mufāʿala noun', 'Form II verb'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'My Form III verbs have a long ā after the first letter.' },
    { route: 'core', text: 'I used sāʿada with a direct object.' },
    { route: 'develop', text: 'My present forms start with u-.' },
    { route: 'develop', text: 'I used a verbal noun like mushāraka.' },
    { route: 'stretch', text: 'I did not confuse Form III with hollow verbs.' },
  ],
  exit: [
    W(/Quick pattern/, 0, { prompt: 'Which verb is Form III?', feedback: 'The long ā after the first root letter is the Form III feature.' }),
    q('Choose “they help”.', ['يُسَاعِدُونَ', 'سَاعَدُوا', 'يَسْعَدُونَ'], 'yu- … -ūna.'),
    q('Which is NOT Form III?', ['زَارَ', 'سَافَرَ', 'حَاوَلَ'], 'zāra is a hollow Form I verb.'),
  ],
  mastery: false,
  prep: {
    words: [['أَرْسَلَ · يُرْسِلُ', 'to send', '—'], ['أَخْرَجَ · يُخْرِجُ', 'to take out', '—'], ['أَدْخَلَ · يُدْخِلُ', 'to bring in', '—'], ['أَعْلَنَ · يُعْلِنُ', 'to announce', '—'], ['خَرَجَ', 'to go out (Form I)', '—']],
    questionEn: 'Kharaja = to go out. What do you think akhraja means?',
    questionAr: 'خَرَجَ · أَخْرَجَ',
    homework: {
      core: 'Write five sentences with shāraka, sāʿada and ḥāwala.',
      develop: 'Conjugate shāraka in past and present for six persons.',
      stretch: 'A club day with five Form III verbs.',
    },
    wordsSource: 'The five words prepare GM-VF-04 (website Verb Forms: Form IV).',
  },
  remember: 'Remember: Form III = long ā after the first letter (fāʿala) · present yu- … -i- (yushāriku) · noun mufāʿala · often involves another person, but not always · don’t confuse it with hollow qāla.',
});

module.exports = { meta, slides };
