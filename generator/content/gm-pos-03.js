'use strict';
/* GM-POS-03 · Possession with ʿinda and li- — website: Mastery & Revision › Grammar › Possessives › Lesson 3 (Arabic expresses
 * “have” through relationships: ʿinda + pronoun = has / available; li- = belongs to / allocated to; maʿa = physically with now;
 * the possessed item is nominative (ʿindī kitābun); the full ʿinda and li- families; li + al- = lil-, li + -ī = lī; questions
 * (hal ʿindaka, li-man) and negation (laysa ʿindī — not lā ʿindī); the item keeps its own gender and number; combining all
 * possession systems; clinic). Quizzes are the website’s (Possession Marker Starter, Mini-checks: ʿinda family, li- family, choose
 * the relationship, ask and negate; Mastery); items whose options contain “only” / “always” are skipped. Colour code: teal =
 * possession marker, blue = possessed item (-u). I-do, has / belongs / with drill, correct-or-repair sorter, reading, frames and the
 * extended model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__13-possessives__grammar-mastery-03-inda-li';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-POS-03', fileTitle: 'Inda_Li', title: 'Possession with ʿinda and li-', arabic: 'التَّعْبِيرُ عَنِ الْمِلْكِيَّةِ بِـ«عِنْدَ» وَ«لِـ»',
  focus: 'Arabic has no verb “to have”. ʿIndī qalamun = I have a pen; hādhā l-qalamu lī = this pen is mine; al-qalamu maʿī = the pen is with me (now). Choose the marker that matches the relationship.',
  icon: 'FaHandHolding',
});

const slides = G.gmLesson({
  code: 'GM-POS-03', site: KEY,
  support: `• Core: ʿindī, ʿindaka, ʿindahu, ʿindahā … + item in -u (ʿindī qalamun); lī, laka, lahu, lahā for belonging; hal ʿindaka …? and li-man hādhā? Develop: the full families, laysa ʿindī for negation, and choosing ʿinda / li- / maʿa by meaning. Stretch: dual and plural items with agreement (ʿindahumā ṭiflāni), allocation (al-ghurfatu l-ūlā li-ṭ-ṭullābi) and combining all possession systems.
• Website warning: do not use bare lā before ʿinda as the formal pattern — say laysa ʿindī waqtun. The adjective matches the ITEM, not the owner: ʿindahā kitābun jadīdun.
• Colour code: teal = marker, blue = item. Brings together GM-POS-01 (suffixes), GM-POS-02 (iḍāfa), GM-NVS-04 (laysa) and GM-CP prepositions.`,
  teach: 'ʿinda family; li- family; has / belongs / with; questions and negatives; item agreement.',
  wedo: 'Has, belongs or with?; correct or repair; repair.',
  next: { nextCode: 'GM-INT-01', nextTitle: 'Yes / No Questions', nextAr: 'أَسْئِلَةُ نَعَمْ وَلَا بِـ«هَلْ» وَهَمْزَةِ الِاسْتِفْهَامِ' },
  doNow: {
    questions: [
      W(/Possession Marker Starter/, 0, { feedback: 'ʿIndī + item in -un.' }),
      W(/Possession Marker Starter/, 1, { feedback: 'Belongs to me: lī.' }),
      W(/Possession Marker Starter/, 2, { feedback: 'One female: ʿindaki.' }),
      W(/Possession Marker Starter/, 3, { feedback: 'Li-man = whose?' }),
      W(/Possession Marker Starter/, 4, { feedback: 'Maʿī = physically with me.' }),
    ],
    keyIdea: { text: 'Has → ʿinda · belongs to → li- · with me now → maʿa. The item stays nominative.', ar: '{k|عِنْدِي} {w|قَلَمٌ} ‖ الْقَلَمُ {k|لِي} ‖ الْقَلَمُ {k|مَعِي}' },
    retrieves: 'The website starter — GM-POS-01 pronoun endings, GM-CASE-01 nominative and GM-NVS-04 laysa.',
  },
  objectives: ['Say what I and others have with ʿinda.', 'Say who something belongs to with li-.', 'Choose ʿinda, li- or maʿa by meaning.', 'Ask and negate possession.'],
  routes: {
    core: ['I say ʿindī …, ʿindahu …, ʿindahā …', 'I ask li-man hādhā? and answer huwa lī.'],
    develop: ['I say laysa ʿindī …', 'I choose ʿinda, li- or maʿa correctly.'],
    stretch: ['I use dual and plural items correctly.', 'I write 110–130 words on belongings and responsibilities.'],
  },
  terms: {
    items: [
      { ar: 'عِنْدَ', en: 'with / at — “has”', note: 'عِنْدِي كِتَابٌ' },
      { ar: 'لِـ', en: 'for / belongs to', note: 'هَذَا لِي' },
      { ar: 'مَعَ', en: 'with (physically, now)', note: 'الْمِفْتَاحُ مَعِي' },
      { ar: 'لِمَنْ؟', en: 'whose? / for whom?', note: 'لِمَنْ هَذَا؟' },
      { ar: 'لَيْسَ عِنْدِي', en: 'I do not have', note: 'لَيْسَ عِنْدِي وَقْتٌ' },
      { ar: 'الْمِلْكِيَّةُ', en: 'possession / ownership', note: 'عِنْدَ · لِـ · مَعَ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · ʿinda + pronoun = “has” (website table)', title: 'With me = I have', ar: 'عِنْدَ + الضَّمِيرِ', ltr: true,
      cols: [{ label: 'Person', w: 2.8 }, { label: 'Form', w: 2.8, size: 26 }, { label: 'Website model', w: 6.73, size: 24 }],
      rows: [
        { core: true, cells: ['I', 'عِنْدِي', 'عِنْدِي سُؤَالٌ.'] },
        { core: true, cells: ['we', 'عِنْدَنَا', 'عِنْدَنَا وَقْتٌ.'] },
        { core: true, cells: ['you (one male)', 'عِنْدَكَ', 'هَلْ عِنْدَكَ قَلَمٌ؟'] },
        { core: true, cells: ['you (one female)', 'عِنْدَكِ', 'هَلْ عِنْدَكِ فِكْرَةٌ؟'] },
        { core: true, cells: ['he', 'عِنْدَهُ', 'عِنْدَهُ سَيَّارَةٌ.'] },
        { cells: ['she', 'عِنْدَهَا', 'عِنْدَهَا أُخْتَانِ.'] },
        { cells: ['they (m. / mixed)', 'عِنْدَهُمْ', 'عِنْدَهُمْ مَشْرُوعٌ.'] },
      ],
      foot: 'Website case pattern: the item is the delayed topic, so it is NOMINATIVE — ʿindī kitābun, ʿindī sayyāratāni, ʿindī kutubun. Other forms follow the POS-01 endings: ʿindakumā, ʿindakum, ʿindakunna, ʿindahumā, ʿindahunna.',
      notes: 'PART 1 (3 min) — website “ʿinda + pronoun”. Literally “with me (is) a question”. Students pass a pen round: ʿindī qalamun → ʿindahu qalamun → ʿindahā qalamun.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · li- + noun or pronoun = belongs to (website table)', title: 'It is mine, yours, his …', ar: 'لِـ + الضَّمِيرِ', ltr: true,
      cols: [{ label: 'Person', w: 2.8 }, { label: 'Form', w: 2.6, size: 26 }, { label: 'Website model', w: 6.93, size: 24 }],
      rows: [
        { core: true, cells: ['me', 'لِي', 'هَذَا لِي.'] },
        { core: true, cells: ['us', 'لَنَا', 'هَذَا الْمَشْرُوعُ لَنَا.'] },
        { core: true, cells: ['you (one male)', 'لَكَ', 'هَذَا الْمَقْعَدُ لَكَ.'] },
        { cells: ['you (one female)', 'لَكِ', 'هَذِهِ الرِّسَالَةُ لَكِ.'] },
        { core: true, cells: ['him', 'لَهُ', 'الْقَلَمُ لَهُ.'] },
        { cells: ['her', 'لَهَا', 'السَّيَّارَةُ لَهَا.'] },
        { cells: ['them (m. / mixed)', 'لَهُمْ', 'الْقَرَارُ لَهُمْ.'] },
      ],
      foot: 'Website spelling: li- becomes la- before most pronouns (laka, lahu), but li + -ī = lī. Before al- the alif drops: li-l-muʿallimi, li-ṭ-ṭullābi.',
      notes: 'PART 2 (3 min) — website “li- + noun or pronoun”. Other forms: lakumā, lakum, lakunna, lahumā, lahunna.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · choose by meaning (website table) · Develop', title: 'Has, belongs, or with me now?', ar: 'عِنْدَ أَمْ لِـ أَمْ مَعَ؟', ltr: true,
      cols: [{ label: 'Intended meaning', w: 4.0 }, { label: 'Marker', w: 1.8 }, { label: 'Example', w: 6.53, size: 22 }],
      rows: [
        { core: true, cells: ['someone has / it is available', 'ʿinda', 'عِنْدِي سَيَّارَةٌ.'] },
        { core: true, cells: ['it belongs to / is for someone', 'li-', 'السَّيَّارَةُ لِي.'] },
        { core: true, cells: ['it is physically with someone now', 'maʿa', 'السَّيَّارَةُ مَعِي الْيَوْمَ.'] },
        { cells: ['two relationships together', 'ʿinda + li-', 'عِنْدِي فِكْرَةٌ، وَلَكِنَّ الْقَرَارَ لِلْمُدِيرِ.'] },
      ],
      foot: 'Website: the three overlap in English (“have”) but focus on different relationships. Maʿī can mean someone else’s passport is with me today; lī means it is mine.',
      notes: 'PART 3 (3 min) — website “Choose by meaning”. Row 4: I have an idea, but the decision belongs to the head teacher.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 4 · questions and negation (website table) · Develop', title: 'Ask, answer, deny', ar: 'السُّؤَالُ وَالنَّفْيُ', ltr: true,
      cols: [{ label: 'Purpose', w: 3.4 }, { label: 'Pattern', w: 3.6 }, { label: 'Example', w: 5.33, size: 22 }],
      rows: [
        { core: true, cells: ['ask if someone has', 'hal + ʿinda + item', 'هَلْ عِنْدَكِ سُؤَالٌ؟'] },
        { cells: ['ask what someone has', 'mādhā + ʿinda', 'مَاذَا عِنْدَكُمْ؟'] },
        { core: true, cells: ['ask who owns it', 'li-man + item', 'لِمَنْ هَذِهِ الْحَقِيبَةُ؟'] },
        { core: true, cells: ['answer ownership', 'item + li- + pronoun', 'هِيَ لَهَا.'] },
        { core: true, cells: ['deny having', 'laysa + ʿinda', 'لَيْسَ عِنْدِي وَقْتٌ.'] },
        { cells: ['deny owning', 'item + laysa + li-', 'هَذَا الْكِتَابُ لَيْسَ لِي.'] },
      ],
      foot: 'Website warning: lā ʿindī is not the formal pattern — use laysa ʿindī … (or lā amliku … for literal ownership). After laysa ʿindī the item stays nominative: waqtun.',
      notes: 'PART 4 (2 min) — website “Questions and negation”. Recycles GM-NVS-04 laysa.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 5 · number and agreement of the item (website table) · Stretch', title: 'The item keeps its own gender and number', ar: 'مُطَابَقَةُ الْمَمْلُوكِ', ltr: true,
      cols: [{ label: 'Item type', w: 3.2 }, { label: 'Website model', w: 5.6, size: 22 }, { label: 'Notice', w: 3.53 }],
      rows: [
        { core: true, cells: ['masculine singular', 'عِنْدَهَا قَلَمٌ جَدِيدٌ.', 'm. adjective (owner f.)'] },
        { core: true, cells: ['feminine singular', 'عِنْدَهُ سَيَّارَةٌ جَدِيدَةٌ.', 'f. adjective (owner m.)'] },
        { cells: ['dual', 'عِنْدَهُمَا طِفْلَانِ.', 'nominative dual -āni'] },
        { cells: ['human plural', 'عِنْدَنَا مُعَلِّمُونَ مُخْلِصُونَ.', 'full plural agreement'] },
        { cells: ['non-human plural', 'عِنْدِي كُتُبٌ مُفِيدَةٌ.', 'f. singular adjective'] },
      ],
      foot: 'Website: the pronoun inside ʿindahā shows the owner; it does NOT make the item feminine. Check the item and its adjective as a pair.',
      notes: 'PART 5 (2 min) — website “Number and agreement of the possessed item”.',
    },
  ],
  quick: [
    W(/عِنْدَ family/, 0, { prompt: 'Choose “we have”.', feedback: '-nā = we.' }),
    W(/عِنْدَ family/, 1, { prompt: 'Choose “they have” (two people).', feedback: 'Dual: ʿindahumā.' }),
    W(/عِنْدَ family/, 3, { prompt: 'Choose “She has a new idea.”', feedback: 'ʿIndahā + fikratun jadīdatun.' }),
    W(/لِـ family/, 0, { prompt: 'Choose “This seat is for you” (to one male).', feedback: 'Laka = for you (m.).' }),
  ],
  quickNote: 'website mini-checks: ʿinda and li- families.',
  ido: {
    title: 'Watch me choose the right marker',
    steps: [
      { head: 'Has', ar: 'عِنْدِي حَاسُوبٌ', think: 'Available to me: ʿinda.' },
      { head: 'Belongs', ar: 'لِأَخِي', think: 'Owner: li-.' },
      { head: 'With me', ar: 'مَعِي', think: 'Physically with me now.' },
      { head: 'Item', ar: 'تَذْكِرَتَانِ', think: 'Nominative dual.' },
    ],
    legend: ['k', 'w'], legendLabels: { k: 'MARKER', w: 'ITEM (-u)' },
    model: '{k|عِنْدِي} {w|حَاسُوبٌ مَحْمُولٌ} أَسْتَخْدِمُهُ لِلدِّرَاسَةِ، وَلَكِنَّ هَذَا الْهَاتِفَ {k|لِأَخِي}. جَوَازُ سَفَرِهِ {k|مَعِي} الْيَوْمَ، لِأَنَّنَا سَنَذْهَبُ إِلَى الْمَطَارِ. {k|عِنْدَ أُخْتِي} {w|تَذْكِرَتَانِ}، وَحَقِيبَتَاهَا فِي السَّيَّارَةِ.',
    modelEn: 'I have a laptop that I use for studying, but this phone is my brother’s. His passport is with me today because we are going to the airport. My sister has two tickets, and her two bags are in the car.',
    notes: 'Website “Combine all three possession systems” text. Website task: find a suffix (safarihi, ḥaqībatāhā), an iḍāfa (jawāzu safarihi), ʿinda, li- and maʿa.',
  },
  models: [
    { ar: 'عِنْدِي قَلَمٌ.', en: 'I have a pen.', tip: 'Has: ʿinda.' },
    { ar: 'هَذَا الْقَلَمُ لِي.', en: 'This pen is mine.', tip: 'Belongs: li-.' },
    { ar: 'الْقَلَمُ مَعِي.', en: 'The pen is with me.', tip: 'With me now: maʿa.' },
    { ar: 'لَيْسَ عِنْدِي وَقْتٌ.', en: 'I have no time.', tip: 'Negative: laysa ʿindī.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · has, belongs or with? (website mini-checks)', title: 'Match the meaning to the marker', ar: 'اِخْتَرِ الْعَلَاقَةَ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Meaning', w: 3.8 }, { label: 'Arabic', w: 5.2, size: 22 }, { label: 'Marker', w: 3.33 }],
      rows: [
        { core: true, cells: ['I have time.', 'عِنْدِي وَقْتٌ.', 'ʿinda'] },
        { core: true, cells: ['This time slot is mine.', 'هَذَا الْوَقْتُ لِي.', 'li-'] },
        { core: true, cells: ['The keys are with me.', 'الْمَفَاتِيحُ مَعِي.', 'maʿa'] },
        { cells: ['Do you (f.) have a question?', 'هَلْ عِنْدَكِ سُؤَالٌ؟', 'hal + ʿinda'] },
        { cells: ['Whose bag is this?', 'لِمَنْ هَذِهِ الْحَقِيبَةُ؟', 'li-man'] },
        { cells: ['This book is not mine.', 'هَذَا الْكِتَابُ لَيْسَ لِي.', 'laysa + li-'] },
      ],
      foot: 'Website: choose the structure that matches the relationship — availability, ownership, allocation or physical accompaniment.',
      notes: 'WE DO (3 min) — cover column 2; students build each answer, then hold up 1 / 2 / 3 fingers for ʿinda / li- / maʿa.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · website proofreading clinic', title: 'Correct, or needs repair?', ar: 'صَحِيحٌ أَمْ يَحْتَاجُ إِلَى تَصْحِيحٍ؟',
      categories: ['Correct', 'Needs repair'],
      items: [['عِنْدِي قَلَمٌ.', 0], ['هَذَا الْمَقْعَدُ لِي.', 0], ['لَيْسَ عِنْدِي وَقْتٌ.', 0], ['عِنْدَهَا كِتَابٌ جَدِيدٌ.', 0], ['عِنْدِي قَلَمًا.', 1], ['لَا عِنْدِي وَقْتٌ.', 1], ['عِنْدَهَا كِتَابٌ جَدِيدَةٌ.', 1], ['لِإِي هَذَا الْمَقْعَدُ.', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min) — website clinic items. For each repair card students say the correct form and the reason.',
    },
  ],
  mistakes: [
    { wrong: 'هَذَا الْكِتَابُ عِنْدِي.', right: 'هَذَا الْكِتَابُ لِي.', why: 'To say “it is mine”, use lī (website clinic).' },
    { wrong: 'عِنْدِي الْمَفَاتِيحُ مَعِي.', right: 'الْمَفَاتِيحُ مَعِي.', why: 'Choose one focus; do not stack markers (website clinic).' },
    { wrong: 'أَنَا عِنْدِي قَلَمٌ.', right: 'عِنْدِي قَلَمٌ.', why: 'Anā is not needed unless you are contrasting (website clinic).' },
  ],
  hints: ['Mine, or just with me?', 'Has or with me now?', 'Is anyone being contrasted?'],
  practice: [
    W(/لِـ family/, 1, { prompt: 'Choose “The decision is theirs” (m. / mixed group).', feedback: 'Lahum = for / belonging to them.' }),
    W(/choose the relationship/, 0, { prompt: 'Choose “I have time.”', feedback: 'Availability: ʿindī.' }),
    W(/choose the relationship/, 2, { prompt: 'Choose “I have the keys with me.”', feedback: 'Physically with me: maʿī.' }),
    W(/ask and negate/, 1, { prompt: 'Choose “Do you have a question?” (to one female).', feedback: 'Hal + ʿindaki.' }),
  ],
  practiceLabel: 'website mini-checks: li- family, choose the relationship, ask and negate',
  read: {
    title: 'Trip notice', label: 'website allocation notice (extended)',
    text: 'إِلَى طُلَّابِ الرِّحْلَةِ: الْغُرْفَةُ الْأُولَى لِلطُّلَّابِ، وَالثَّانِيَةُ لِلطَّالِبَاتِ. عِنْدَ كُلِّ مَجْمُوعَةٍ مِفْتَاحٌ، وَالْبِطَاقَاتُ مَعَ الْمُشْرِفَةِ. الْحَافِلَةُ الزَّرْقَاءُ لَنَا، وَالْحَمْرَاءُ لِمَدْرَسَةٍ أُخْرَى. لَيْسَ عِنْدَنَا وَقْتٌ طَوِيلٌ لِلْغَدَاءِ، فَخُذُوا طَعَامَكُمْ مَعَكُمْ. إِذَا كَانَ عِنْدَكُمْ سُؤَالٌ، فَالْمُشْرِفَةُ مَعَنَا طُولَ الْيَوْمِ.',
    glossary: [['الْمُشْرِفَةِ', 'the supervisor (f.)'], ['مِفْتَاحٌ', 'a key'], ['الْبِطَاقَاتُ', 'the cards'], ['الزَّرْقَاءُ', 'the blue (one)'], ['طُولَ الْيَوْمِ', 'all day']],
    task: 'Website: explain the relationship each possession marker shows — has, belongs / allocated, or physically with.',
    questions: [
      q('Who is the second room for?', ['the girls', 'the boys', 'the supervisor'], 'Wa-th-thāniyatu li-ṭ-ṭālibāti: allocation (li-).'),
      q('Where are the cards?', ['with the supervisor', 'in the rooms', 'on the bus'], 'Maʿa l-mushrifati: physically with her.'),
      q('Which bus is theirs?', ['the blue one', 'the red one', 'both'], 'Al-ḥāfilatu z-zarqāʾu lanā.'),
      q('Why should they take their food with them?', ['there is not much time for lunch', 'the bus is late', 'the restaurant is closed'], 'Laysa ʿindanā waqtun ṭawīlun.'),
    ],
    qNote: 'Website allocation notice, extended by the teacher; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: lost property', source: 'website role-play',
    prompts: [
      { route: 'core', ar: 'مَاذَا عِنْدَكَ فِي حَقِيبَتِكَ؟' },
      { route: 'develop', ar: 'لِمَنْ هَذِهِ الْأَشْيَاءُ؟' },
      { route: 'stretch', ar: 'فَقَدْتَ حَقِيبَتَكَ. اِسْأَلْ زَمِيلَكَ وَأَجِبْ.' },
    ],
    stems: [
      { route: 'core', ar: 'عِنْدِي ______ وَ______ .' },
      { route: 'develop', ar: 'هَذَا الْقَلَمُ ______ ، وَذَلِكَ الْكِتَابُ ______ .' },
      { route: 'stretch', ar: 'هَلْ عِنْدَكَ ______ ؟ لِمَنْ ______ ؟ هَلْ هُوَ مَعَكَ الْآنَ؟' },
    ],
    model: [
      { who: 'A', ar: 'لِمَنْ هَذِهِ الْحَقِيبَةُ السَّوْدَاءُ؟', en: 'Whose is this black bag?' },
      { who: 'B', ar: 'لَيْسَتْ لِي؛ حَقِيبَتِي مَعِي. رُبَّمَا هِيَ لِيُوسُفَ، فَعِنْدَهُ حَقِيبَةٌ سَوْدَاءُ.', en: 'It is not mine; my bag is with me. Maybe it is Yūsuf’s — he has a black bag.' },
    ],
    notes: 'Website role-play: ask who has an item, whose it is and whether it is with the person now — hal ʿindaka …? li-man hādhā? hal huwa laka? hal huwa maʿaka l-āna?',
  },
  write: {
    siteTask: 'Write 110–130 Arabic words about belongings and responsibilities in a home, class, journey, event or workplace.',
    core: { amount: '5 sentences', task: 'Your family: who has what.', how: 'ʿinda abī … · ʿindī … · ʿindahā …' },
    develop: { amount: '8 sentences', task: 'Add who things belong to, one negative and one question.', how: 'al-ghurfatu lī · laysa ʿindī …' },
    stretch: { amount: '110–130 words', task: 'Website account with the full checklist.', how: 'Three columns: has / belongs / with.' },
  },
  frames: {
    core: [
      { en: 'I have a …', ar: 'عِنْدِي ______ .' },
      { en: 'My brother has …', ar: 'عِنْدَ أَخِي ______ .' },
      { en: 'This … is mine', ar: 'هَذَا ______ لِي.' },
      { en: 'Do you have …?', ar: 'هَلْ عِنْدَكَ ______ ؟' },
    ],
    develop: [
      { en: 'I do not have …', ar: 'لَيْسَ عِنْدِي ______ .' },
      { en: 'This room is my sister’s, and that one is …', ar: 'هَذِهِ الْغُرْفَةُ لِأُخْتِي، وَتِلْكَ ______ .' },
      { en: 'The keys are with …', ar: 'الْمَفَاتِيحُ مَعَ ______ .' },
      { en: 'Whose … is this?', ar: 'لِمَنْ هَذَا ______ ؟' },
    ],
    bank: ['عِنْدِي', 'عِنْدَهُ', 'عِنْدَهَا', 'عِنْدَنَا', 'لِي', 'لَهُ', 'لَهَا', 'لَنَا', 'مَعِي', 'لِمَنْ', 'لَيْسَ عِنْدِي', 'وَقْتٌ', 'سَيَّارَةٌ'],
  },
  stretchTask: {
    task: 'Website account (110–130 words): ownership, availability and responsibility in a home, class, journey, event or workplace.',
    checklist: ['Four ʿinda forms and four li- forms.', 'Two maʿa forms.', 'Two questions and one negative (laysa ʿindī).', 'One dual or plural item.', 'Two possessive suffixes and two iḍāfa phrases.'],
    phrases: [['مَسْؤُولِيَّةٌ', 'a responsibility'], ['لِكُلِّ شَخْصٍ', 'each person has'], ['دَائِمًا', 'always'], ['بَعْدُ', 'yet'], ['وَعَدَ', 'promised'], ['مِثْلُ', 'like']],
  },
  model: {
    text: 'فِي عَائِلَتِنَا لِكُلِّ شَخْصٍ مَسْؤُولِيَّةٌ. عِنْدَ أَبِي سَيَّارَةٌ كَبِيرَةٌ، وَهُوَ يُوصِلُنَا إِلَى الْمَدْرَسَةِ كُلَّ صَبَاحٍ. مَفَاتِيحُ الْبَيْتِ مَعَ أُمِّي دَائِمًا، لِأَنَّهَا آخِرُ مَنْ يَخْرُجُ. الْغُرْفَةُ الْكَبِيرَةُ لِي وَلِأُخْتِي، وَالصَّغِيرَةُ لِأَخِي الصَّغِيرِ. عِنْدَنَا حَاسُوبَانِ: الْأَوَّلُ لِلدِّرَاسَةِ، وَالثَّانِي لِأَبِي. لَيْسَ عِنْدِي هَاتِفٌ خَاصٌّ بَعْدُ، لَكِنَّ أُمِّي وَعَدَتْنِي بِهَاتِفٍ فِي عِيدِ مِيلَادِي. أُخْتِي عِنْدَهَا قِطَّةٌ صَغِيرَةٌ، وَإِطْعَامُ الْقِطَّةِ مَسْؤُولِيَّتُهَا. فِي يَوْمِ الْجُمُعَةِ الْمَطْبَخُ لِجَدَّتِي، فَهِيَ تَطْبُخُ لَنَا أَطْيَبَ طَعَامٍ. هَلْ عِنْدَكُمْ نِظَامٌ مِثْلُ نِظَامِنَا؟',
    en: 'In our family everyone has a responsibility. My father has a big car, and he drives us to school every morning. The house keys are always with my mother, because she is the last one to leave. The big room is mine and my sister’s, and the small one is my little brother’s. We have two computers: the first is for studying and the second is my father’s. I do not have my own phone yet, but my mother has promised me a phone for my birthday. My sister has a little cat, and feeding the cat is her responsibility. On Fridays the kitchen belongs to my grandmother — she cooks us the most delicious food. Do you have a system like ours?',
    find: ['ʿinda (has)', 'li- (belongs / for)', 'maʿa (with now)', 'laysa ʿindī'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'After ʿindī the item ends in -un.' },
    { route: 'core', text: 'I used lī / lahu / lahā for “mine / his / hers”.' },
    { route: 'develop', text: 'I wrote laysa ʿindī, not lā ʿindī.' },
    { route: 'develop', text: 'I chose ʿinda, li- or maʿa by meaning.' },
    { route: 'stretch', text: 'The adjective matches the item, not the owner.' },
  ],
  exit: [
    W(/Mastery/, 0, { prompt: 'Choose “They have two children” (two owners).', feedback: 'ʿIndahumā + ṭiflāni.' }),
    W(/ask and negate/, 2, { prompt: 'Choose “Whose bag is this?”', feedback: 'Li-man = whose.' }),
    W(/Mastery/, 9, { prompt: 'Choose the accurate combined answer.', feedback: 'Each marker does its own job.' }),
  ],
  mastery: false,
  prep: {
    words: [['هَلْ', 'yes / no question word', '—'], ['أَ', 'question hamza (yes / no)', '—'], ['نَعَمْ', 'yes', '—'], ['لَا', 'no', '—'], ['بَلَى', 'yes (after a negative question)', '—']],
    questionEn: 'To make a yes / no question, put hal in front: anta ṭālibun → hal anta ṭālibun? How would you ask “Do you have a pen?”',
    questionAr: '______ عِنْدَكَ قَلَمٌ؟',
    homework: {
      core: 'Write six sentences: three with ʿindī / ʿindahu / ʿindahā, three with lī / lahu / lahā.',
      develop: 'Write a lost-property dialogue with li-man, hal ʿindaka and laysa ʿindī.',
      stretch: 'Website account (110–130 words).',
    },
    wordsSource: 'The five words prepare GM-INT-01 (website: yes / no questions with hal and the question hamza).',
  },
  remember: 'Remember: has → ʿindī / ʿindahu / ʿindahā + item in -un · belongs to → lī / lahu / lahā / li-l-… · with me now → maʿī · ask: hal ʿindaka …? li-man …? · deny: laysa ʿindī … · the item keeps its own gender and number.',
});

module.exports = { meta, slides };
