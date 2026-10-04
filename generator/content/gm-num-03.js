'use strict';
/* GM-NUM-03 · Age — website: Mastery & Revision › Numeracy Mastery 03 (kam ʿumruka / ʿumruki?; ʿumrī … and lī … formulas; the Age
 * Ladder: sanatun wāḥidatun · sanatāni · 3–10 + sanawātin (gender flip: khamsu sanawātin) · 11–99 + sanatan; feminine teens for ages
 * (arbaʿa ʿashrata sanatan); compound ages flip the unit (khamsun wa-arbaʿūna sanatan); ʿām masculine as Stretch; the 13 / 30 ear trap;
 * akbaru min / aṣgharu min + bi- for the gap; minnī; hidden calculations). The website quizzes are interactive and not stored, so all
 * questions are teacher-written on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'numeracy__numbers__numeracy-mastery-03-age';

const meta = G.meta({
  code: 'GM-NUM-03', fileTitle: 'Age', title: 'Age', arabic: 'الْعُمْرُ',
  focus: 'Kam ʿumruka? — ʿumrī arbaʿa ʿashrata sanatan. Climb the Age Ladder: sana (1), sanatān (2), sanawāt (3–10), sanatan (11–99). Compare with akbaru min / aṣgharu min, and give the gap with bi-: bi-sanatayni.',
  icon: 'FaCakeCandles',
});

const slides = G.gmLesson({
  code: 'GM-NUM-03', site: KEY,
  support: `• Core: كَمْ عُمْرُكَ؟ · عُمْرِي … and the family عُمْرُهُ · عُمْرُهَا with common ages. Develop: the full Age Ladder (سَنَةٌ · سَنَتَانِ · سَنَوَاتٍ · سَنَةً) and family comparisons with أَكْبَرُ مِنْ / أَصْغَرُ مِنْ. Stretch: feminine teens (أَرْبَعَ عَشْرَةَ), compound ages (خَمْسٌ وَأَرْبَعُونَ), the gap with بِـ, hidden calculations and the masculine عَامٌ.
• Website ear trap: thalātha ʿashrata (13 — TWO words) vs thalāthūna (30 — ONE word in -ūna).
• Website Rung 3 surprise: from 11 the noun is singular — khamsa ʿashrata sanatan, never sanawātin.`,
  teach: 'ʿumr family; the Age Ladder; family ages; comparisons.',
  wedo: 'Climb the ladder; sort rungs; repair.',
  next: { nextCode: 'GM-NUM-04', nextTitle: 'Money', nextAr: 'الْمَالُ' },
  doNow: {
    questions: [
      q('Choose “three cars”.', ['ثَلَاثُ سَيَّارَاتٍ', 'ثَلَاثَةُ سَيَّارَاتٍ', 'ثَلَاثُ سَيَّارَةٍ'], 'GM-NUM-01: fem. noun → no ة.'),
      q('Is سَنَةٌ masculine or feminine?', ['feminine', 'masculine', 'both'], 'Tāʾ marbūṭa.'),
      q('Choose “twenty students”.', ['عِشْرُونَ طَالِبًا', 'عِشْرُونَ طُلَّابٍ', 'عِشْرُونَ طَالِبٌ'], '11–99: singular -an.'),
      q('What does أَكْبَرُ مِنْ mean?', ['older than', 'younger than', 'the same as'], 'Prep word.'),
      q('Choose “my age”.', ['عُمْرِي', 'عُمْرُكَ', 'عُمْرُهُ'], '-ī = my.'),
    ],
    keyIdea: { text: 'ʿumrī + number + the right form of “year”: sana · sanatān · 3–10 sanawāt · 11–99 sanatan.', ar: 'عُمْرُهُ {k|خَمْسُ سَنَوَاتٍ} ‖ عُمْرِي {e|أَرْبَعَ عَشْرَةَ سَنَةً}' },
    retrieves: 'Teacher-written retrieval from GM-NUM-01 (the flip, 11–99) and the GM-NUM-02 prep words.',
  },
  objectives: ['Ask and answer kam ʿumruka?', 'Choose the right form of “year” for any age.', 'Say the ages of family members.', 'Compare ages and give the gap with bi-.'],
  routes: {
    core: ['I say my own age correctly.', 'I ask kam ʿumruka? / kam ʿumruki?'],
    develop: ['I use all four rungs of the Age Ladder.', 'I compare: akhī akbaru minnī.'],
    stretch: ['I use feminine teens and compound ages.', 'I calculate hidden age gaps.'],
  },
  terms: {
    items: [
      { ar: 'الْعُمْرُ', en: 'age', note: 'كَمْ عُمْرُكَ؟' },
      { ar: 'سَنَةٌ · سَنَتَانِ', en: 'one year · two years', note: 'عُمْرُهَا سَنَتَانِ' },
      { ar: 'سَنَوَاتٌ', en: 'years (3–10)', note: 'خَمْسُ سَنَوَاتٍ' },
      { ar: 'سَنَةً', en: 'year (11–99, singular)', note: 'عِشْرُونَ سَنَةً' },
      { ar: 'أَكْبَرُ مِنْ · أَصْغَرُ مِنْ', en: 'older than · younger than', note: 'أَكْبَرُ مِنِّي' },
      { ar: 'بِـ', en: 'by (the gap)', note: 'بِسَنَتَيْنِ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Age · part 1 · asking and answering (website tables)', title: 'Kam ʿumruka?', ar: 'كَمْ عُمْرُكَ؟', ltr: true,
      cols: [{ label: 'Arabic', w: 2.6, size: 24 }, { label: 'Meaning', w: 3.0 }, { label: 'Example (website)', w: 6.73, size: 22 }],
      rows: [
        { core: true, cells: ['عُمْرِي', 'my age', 'عُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً.'] },
        { core: true, cells: ['عُمْرُكَ · عُمْرُكِ', 'your age (m. · f.)', 'كَمْ عُمْرُكِ يَا فَاطِمَةُ؟'] },
        { core: true, cells: ['عُمْرُهُ · عُمْرُهَا', 'his · her age', 'أَخِي عُمْرُهُ سَبْعُ سَنَوَاتٍ.'] },
        { cells: ['لِي · لَهُ · لَهَا', 'I have · he has · she has', 'لِي سِتَّ عَشْرَةَ سَنَةً.'] },
      ],
      foot: 'Website: ʿumr = age (the same root as ʿumra and the name ʿUmar). Both formulas earn full marks; ʿumrī … is the safest everyday choice. Listen for ʿumruka (boy) vs ʿumruki (girl).',
      notes: 'PART 1 (3 min) — website “Asking and answering”. The lī pattern is like French j’ai 16 ans.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Age · part 2 · the Age Ladder (website table)', title: 'Four rungs for “year”', ar: 'سُلَّمُ الْعُمْرِ', ltr: true,
      cols: [{ label: 'Age', w: 1.4 }, { label: 'Rung', w: 2.4 }, { label: 'Form', w: 3.0, size: 24 }, { label: 'Example (website)', w: 5.53, size: 22 }],
      rows: [
        { core: true, cells: ['1', 'rung 1 · singular', 'سَنَةٌ وَاحِدَةٌ', 'عُمْرُ أَخِي سَنَةٌ وَاحِدَةٌ.'] },
        { core: true, cells: ['2', 'rung 1 · dual', 'سَنَتَانِ', 'عُمْرُهَا سَنَتَانِ.'] },
        { core: true, cells: ['3–10', 'rung 2 · plural (flip)', '… سَنَوَاتٍ', 'عُمْرُهُ خَمْسُ سَنَوَاتٍ.'] },
        { core: true, cells: ['11–19', 'rung 3 · fem. teens', '… سَنَةً', 'عُمْرِي خَمْسَ عَشْرَةَ سَنَةً.'] },
        { cells: ['20–99', 'rung 3 · tens', '… سَنَةً', 'عُمْرُ أَخِي عِشْرُونَ سَنَةً.'] },
        { cells: ['45', 'compound (unit flips)', 'خَمْسٌ وَأَرْبَعُونَ سَنَةً', 'عُمْرُ أَبِي خَمْسٌ وَأَرْبَعُونَ سَنَةً.'] },
      ],
      foot: 'Website: sana is feminine, so 3–10 drop the ة (thalāthu sanawātin) and the teens use the feminine set: iḥdā ʿashrata, ithnatā ʿashrata, thalātha ʿashrata … From 11 the noun is SINGULAR: sanatan.',
      notes: 'PART 2 (4 min) — website “The Age Ladder” and “Tens, compounds & the whole family”. Stretch: ʿām is masculine — khamsata ʿashara ʿāman.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Age · part 3 · older, younger and the gap (website table) · Develop / Stretch', title: 'Akbaru min … bi- …', ar: 'أَكْبَرُ وَأَصْغَرُ', ltr: true,
      cols: [{ label: 'Phrase', w: 3.0, size: 24 }, { label: 'Meaning', w: 3.0 }, { label: 'Example (website)', w: 6.33, size: 22 }],
      rows: [
        { core: true, cells: ['أَكْبَرُ مِنْ', 'older than', 'أَخِي أَكْبَرُ مِنِّي.'] },
        { core: true, cells: ['أَصْغَرُ مِنْ', 'younger than', 'أُخْتِي أَصْغَرُ مِنْهُ.'] },
        { cells: ['بِسَنَةٍ · بِسَنَتَيْنِ', 'by one · by two years', 'هُوَ أَكْبَرُ مِنِّي بِسَنَتَيْنِ.'] },
        { cells: ['بِثَلَاثِ سَنَوَاتٍ', 'by three years', 'أَبِي أَكْبَرُ مِنْ أُمِّي بِثَلَاثِ سَنَوَاتٍ.'] },
        { cells: ['الْأَكْبَرُ · الْأَصْغَرُ', 'the oldest · the youngest', 'جَدَّتِي أَكْبَرُ شَخْصٍ فِي الْبَيْتِ.'] },
      ],
      foot: 'Website: than me / you / him / her = minnī (double n!), minka / minki, minhu, minhā. The ladder still applies after bi-: bi-sanatin, bi-sanatayni, bi-thalāthi sanawātin.',
      notes: 'PART 3 (3 min) — website “Older, younger & the same age”. Heritage link (website): Allāhu akbar — the same pattern afʿal.',
    },
  ],
  quick: [
    q('Choose “I am 5”.', ['عُمْرِي خَمْسُ سَنَوَاتٍ', 'عُمْرِي خَمْسَةُ سَنَوَاتٍ', 'عُمْرِي خَمْسُ سَنَةً'], 'Rung 2: flip + plural.'),
    q('Choose “I am 15”.', ['عُمْرِي خَمْسَ عَشْرَةَ سَنَةً', 'عُمْرِي خَمْسَ عَشْرَةَ سَنَوَاتٍ', 'عُمْرِي خَمْسُونَ سَنَةً'], 'Rung 3: singular sanatan.'),
    q('You hear ثَلَاثُونَ سَنَةً. The age is …', ['30', '13', '3'], 'One word in -ūna = a ten.'),
    q('Choose “two years old”.', ['سَنَتَانِ', 'اثْنَانِ سَنَةً', 'سَنَتَيْنِ اثْنَتَيْنِ'], 'Rung 1: the dual.'),
  ],
  quickNote: 'teacher-written hinge questions on the website ladder and traps.',
  ido: {
    title: 'Watch me describe my family’s ages',
    steps: [
      { head: 'Me · 16', ar: 'سِتَّ عَشْرَةَ سَنَةً', think: 'Feminine teen, singular.' },
      { head: 'Brother · 19', ar: 'أَكْبَرُ مِنِّي', think: '+ the gap with bi-.' },
      { head: 'Sister · 8', ar: 'ثَمَانِي سَنَوَاتٍ', think: 'Rung 2.' },
      { head: 'Father · 46', ar: 'سِتٌّ وَأَرْبَعُونَ', think: 'Unit flips.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'AGE', e: 'COMPARISON' },
    model: 'اِسْمِي سَارَةُ وَعُمْرِي {k|سِتَّ عَشْرَةَ سَنَةً}. أَخِي عُمَرُ عُمْرُهُ {k|تِسْعَ عَشْرَةَ سَنَةً}، وَهُوَ {e|أَكْبَرُ مِنِّي بِثَلَاثِ سَنَوَاتٍ}. أُخْتِي لَيْلَى عُمْرُهَا {k|ثَمَانِي سَنَوَاتٍ}. أَبِي عُمْرُهُ {k|سِتٌّ وَأَرْبَعُونَ سَنَةً}، وَأُمِّي {e|أَصْغَرُ مِنْهُ بِسَنَتَيْنِ}.',
    modelEn: 'My name is Sārah and I am sixteen. My brother ʿUmar is nineteen, and he is three years older than me. My sister Laylā is eight. My father is forty-six, and my mother is two years younger than him.',
    notes: 'Website reading “Family profile” (answers: 16 · 19 · 8 · 44).',
  },
  models: [
    { ar: 'كَمْ عُمْرُكَ يَا أَحْمَدُ؟', en: 'How old are you, Aḥmad?', tip: 'To a boy.' },
    { ar: 'لِي عِشْرُونَ سَنَةً.', en: 'I am twenty (I have twenty years).', tip: 'lī formula.' },
    { ar: 'عُمْرُ أُمِّي اثْنَتَانِ وَأَرْبَعُونَ سَنَةً.', en: 'My mother is forty-two.', tip: 'Compound, feminine unit.' },
    { ar: 'جَدَّتِي عُمْرُهَا سَبْعُونَ سَنَةً.', en: 'My grandmother is seventy.', tip: 'Ten + sanatan.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · climb the ladder (website Age Machine) · say it aloud', title: 'How old is he / she?', ar: 'كَمْ عُمْرُهُ؟', ltr: true, stage: 'wedo',
      cols: [{ label: 'Who', w: 3.2 }, { label: 'Age', w: 1.4 }, { label: 'Arabic', w: 5.6, size: 22 }, { label: 'Rung', w: 2.13 }],
      rows: [
        { core: true, cells: ['baby brother', '1', 'عُمْرُهُ سَنَةٌ وَاحِدَةٌ', '1'] },
        { core: true, cells: ['little sister', '5', 'عُمْرُهَا خَمْسُ سَنَوَاتٍ', '2'] },
        { core: true, cells: ['me', '14', 'عُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً', '3'] },
        { cells: ['big brother', '20', 'عُمْرُهُ عِشْرُونَ سَنَةً', '3'] },
        { cells: ['mother', '42', 'عُمْرُهَا اثْنَتَانِ وَأَرْبَعُونَ سَنَةً', '3'] },
        { cells: ['grandmother', '70', 'عُمْرُهَا سَبْعُونَ سَنَةً', '3'] },
      ],
      foot: 'Website “A family of ages”: choose the right rung — and the right teen gender (sana is feminine).',
      notes: 'WE DO (3 min) — website family table and Age Machine. Cover column 3.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · which rung?', title: 'Sanawāt or sanatan?', ar: 'سَنَوَاتٍ أَمْ سَنَةً؟',
      categories: ['3–10 (… sanawātin)', '11–99 (… sanatan)'],
      items: [['ثَلَاثُ سَنَوَاتٍ', 0], ['سِتُّ سَنَوَاتٍ', 0], ['ثَمَانِي سَنَوَاتٍ', 0], ['عَشْرُ سَنَوَاتٍ', 0], ['إِحْدَى عَشْرَةَ سَنَةً', 1], ['ثَلَاثَ عَشْرَةَ سَنَةً', 1], ['عِشْرُونَ سَنَةً', 1], ['خَمْسٌ وَثَلَاثُونَ سَنَةً', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students say each age in digits — and hold up 1 finger (teen) or 3 (ten) for the 13 / 30 trap.',
    },
  ],
  mistakes: [
    { wrong: 'عُمْرِي خَمْسَ عَشْرَةَ سَنَوَاتٍ', right: 'عُمْرِي خَمْسَ عَشْرَةَ سَنَةً', why: 'From 11 the noun is singular (website).' },
    { wrong: 'عُمْرُهُ خَمْسَةُ سَنَوَاتٍ', right: 'عُمْرُهُ خَمْسُ سَنَوَاتٍ', why: 'Sana is feminine → the number drops ة.' },
    { wrong: 'أَخِي أَكْبَرُ مِنْ أَنَا', right: 'أَخِي أَكْبَرُ مِنِّي', why: 'Min + -nī = minnī.' },
  ],
  hints: ['Which rung for 15?', 'Is sana masculine?', 'How do you say “than me”?'],
  practice: [
    q('Choose “she is 12”.', ['عُمْرُهَا اثْنَتَا عَشْرَةَ سَنَةً', 'عُمْرُهَا اثْنَا عَشَرَ سَنَةً', 'عُمْرُهَا اثْنَتَا عَشْرَةَ سَنَوَاتٍ'], 'Feminine teen + singular.'),
    q('Choose “older than her by two years”.', ['أَكْبَرُ مِنْهَا بِسَنَتَيْنِ', 'أَكْبَرُ مِنْهَا سَنَتَانِ', 'أَصْغَرُ مِنْهَا بِسَنَتَيْنِ'], 'Gap with bi- + dual (genitive -ayni).'),
    q('Maryam is 15; her brother is 6 years older. He is …', ['21', '9', '16'], 'Website hidden calculation.'),
    q('Choose “he has 30 years” (lī formula).', ['لَهُ ثَلَاثُونَ سَنَةً', 'لَهَا ثَلَاثُونَ سَنَةً', 'لَهُ ثَلَاثَ عَشْرَةَ سَنَةً'], 'lahu = he has.'),
  ],
  practiceLabel: 'teacher-written questions on the website ladder and comparisons',
  read: {
    title: 'Āmina’s family', label: 'website reading task A',
    text: 'آمِنَةُ عُمْرُهَا أَرْبَعَ عَشْرَةَ سَنَةً. أَخُوهَا الْكَبِيرُ يُوسُفُ عُمْرُهُ سَبْعَ عَشْرَةَ سَنَةً، وَهُوَ أَكْبَرُ مِنْهَا بِثَلَاثِ سَنَوَاتٍ. أُخْتُهَا الصَّغِيرَةُ مَرْيَمُ عُمْرُهَا خَمْسُ سَنَوَاتٍ. أَبُوهَا عُمْرُهُ خَمْسٌ وَأَرْبَعُونَ سَنَةً، وَأُمُّهَا عُمْرُهَا اثْنَتَانِ وَأَرْبَعُونَ سَنَةً. جَدَّتُهَا عُمْرُهَا سَبْعُونَ سَنَةً، وَهِيَ أَكْبَرُ شَخْصٍ فِي الْبَيْتِ.',
    glossary: [['أَخُوهَا', 'her brother'], ['أَبُوهَا', 'her father'], ['جَدَّتُهَا', 'her grandmother'], ['أَكْبَرُ شَخْصٍ', 'the oldest person']],
    task: 'Website: answer, and calculate any age gap the text does not state.',
    questions: [
      q('Who is five years old?', ['Maryam', 'Āmina', 'Yūsuf'], 'Khamsu sanawātin — rung 2 shows a small number.'),
      q('By how much is Yūsuf older than Āmina?', ['three years', 'seventeen years', 'two years'], 'Bi-thalāthi sanawātin.'),
      q('Who is the oldest person in the house?', ['the grandmother (70)', 'the father (45)', 'the mother (42)'], 'Akbaru shakhṣin fī l-bayt.'),
      q('Detective: the age gap between the parents is …', ['3 years', '5 years', '2 years'], '45 − 42 — calculated, not stated.'),
    ],
    qNote: 'Website reading Task A text and questions.',
  },
  speak: {
    title: 'Speaking: my family age map', source: 'website speaking task and role-play questions',
    prompts: [
      { route: 'core', ar: 'كَمْ عُمْرُكَ؟' },
      { route: 'develop', ar: 'كَمْ عُمْرُ أَخِيكَ أَوْ أُخْتِكَ؟ مَنْ أَكْبَرُ؟' },
      { route: 'stretch', ar: 'مَنْ أَكْبَرُ شَخْصٍ فِي عَائِلَتِكَ؟ وَمَنِ الْأَصْغَرُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'عُمْرِي ______ سَنَةً.' },
      { route: 'develop', ar: 'عُمْرُ أَخِي ______ ، وَهُوَ أَكْبَرُ مِنِّي ______ .' },
      { route: 'stretch', ar: '______ أَكْبَرُ شَخْصٍ فِي عَائِلَتِي، وَعُمْرُهُ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'كَمْ عُمْرُكِ يَا مَرْيَمُ؟', en: 'How old are you, Maryam?' },
      { who: 'B', ar: 'عُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً. أُخْتِي أَصْغَرُ مِنِّي بِأَرْبَعِ سَنَوَاتٍ، وَعُمْرُهَا تِسْعُ سَنَوَاتٍ. جَدِّي أَكْبَرُ شَخْصٍ فِي الْعَائِلَةِ.', en: 'I am thirteen. My sister is four years younger than me — she is nine. My grandfather is the oldest person in the family.' },
    ],
    notes: 'Website: five ages, two comparisons, an exact gap and three ladder rungs. Listening (website): three introductions — beware 13 / 30.',
  },
  write: {
    siteTask: 'Write 7–9 Arabic sentences using both ʿumruhu / ʿumruhā and akbaru min / aṣgharu min.',
    core: { amount: '4 sentences', task: 'My age and three family members.', how: 'ʿumrī · ʿumruhu · ʿumruhā.' },
    develop: { amount: '6 sentences', task: 'Use three ladder rungs and two comparisons.', how: 'akbaru minnī · aṣgharu minhā.' },
    stretch: { amount: '7–9 sentences', task: 'Website “Hot”: «أَعْمَارُ عَائِلَتِي» with three gaps.', how: 'Feminine teens, compound ages, bi-.' },
  },
  frames: {
    core: [
      { en: 'I am … years old', ar: 'عُمْرِي ______ سَنَةً.' },
      { en: 'My brother is … (3–10)', ar: 'أَخِي عُمْرُهُ ______ سَنَوَاتٍ.' },
      { en: 'My sister is …', ar: 'أُخْتِي عُمْرُهَا ______ .' },
      { en: 'How old is …?', ar: 'كَمْ عُمْرُ ______ ؟' },
    ],
    develop: [
      { en: '… is older than me', ar: '______ أَكْبَرُ مِنِّي.' },
      { en: '… is younger than him by …', ar: '______ أَصْغَرُ مِنْهُ ______ .' },
      { en: 'My father is … (compound)', ar: 'عُمْرُ أَبِي ______ سَنَةً.' },
      { en: 'The youngest in my family is …', ar: 'الْأَصْغَرُ فِي عَائِلَتِي ______ .' },
    ],
    bank: ['سَنَةٌ وَاحِدَةٌ', 'سَنَتَانِ', 'خَمْسُ سَنَوَاتٍ', 'ثَمَانِي سَنَوَاتٍ', 'ثَلَاثَ عَشْرَةَ سَنَةً', 'أَرْبَعَ عَشْرَةَ سَنَةً', 'عِشْرُونَ سَنَةً', 'أَكْبَرُ مِنْ', 'أَصْغَرُ مِنْ', 'مِنِّي', 'بِسَنَتَيْنِ', 'الْأَكْبَرُ'],
  },
  stretchTask: {
    task: 'Website “Hot” task: «أَعْمَارُ عَائِلَتِي» — everyone’s ages, three comparisons with a gap, ending with the oldest and the youngest.',
    checklist: ['All four ladder rungs (if your family allows).', 'Feminine teens with sana.', 'One compound age (unit flips).', 'Three comparisons with bi- for the gap.', 'al-akbar and al-aṣghar at the end.'],
    phrases: [['تَوْأَمٌ', 'twin'], ['فِي نَفْسِ الْعُمْرِ', 'the same age'], ['الْأَكْبَرُ', 'the oldest'], ['الْأَصْغَرُ', 'the youngest'], ['بِسَنَةٍ وَاحِدَةٍ', 'by one year'], ['عِيدُ مِيلَادِي', 'my birthday']],
  },
  model: {
    text: 'أَعْمَارُ عَائِلَتِي: عُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً، وَأَنَا الْبِنْتُ الْكُبْرَى. أُخْتِي هِنْدُ عُمْرُهَا إِحْدَى عَشْرَةَ سَنَةً، فَأَنَا أَكْبَرُ مِنْهَا بِثَلَاثِ سَنَوَاتٍ. أَخِي يُوسُفُ عُمْرُهُ سِتُّ سَنَوَاتٍ، وَأَخِي الصَّغِيرُ عُمْرُهُ سَنَتَانِ. أُمِّي عُمْرُهَا تِسْعٌ وَثَلَاثُونَ سَنَةً، وَأَبِي أَكْبَرُ مِنْهَا بِسَنَتَيْنِ، فَعُمْرُهُ وَاحِدٌ وَأَرْبَعُونَ سَنَةً. جَدِّي يَسْكُنُ مَعَنَا، وَعُمْرُهُ سَبْعُونَ سَنَةً. هُوَ الْأَكْبَرُ، وَأَخِي الصَّغِيرُ هُوَ الْأَصْغَرُ.',
    en: 'My family’s ages: I am fourteen, and I am the eldest daughter. My sister Hind is eleven, so I am three years older than her. My brother Yūsuf is six, and my little brother is two. My mother is thirty-nine, and my father is two years older than her, so he is forty-one. My grandfather lives with us, and he is seventy. He is the oldest, and my little brother is the youngest.',
    find: ['rung 2 (sanawāt)', 'rung 3 (sanatan)', 'comparison + gap', 'compound age'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'I said my own age correctly.' },
    { route: 'core', text: 'I used ʿumruhu for a male and ʿumruhā for a female.' },
    { route: 'develop', text: 'I chose the right rung of the ladder.' },
    { route: 'develop', text: 'I wrote minnī for “than me”.' },
    { route: 'stretch', text: 'My teens are feminine and my compound units flip.' },
  ],
  exit: [
    q('Choose “he is 8”.', ['عُمْرُهُ ثَمَانِي سَنَوَاتٍ', 'عُمْرُهُ ثَمَانِيَةُ سَنَوَاتٍ', 'عُمْرُهُ ثَمَانِي سَنَةً'], 'Rung 2, feminine sana.'),
    q('Choose “I am 13”.', ['عُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً', 'عُمْرِي ثَلَاثُونَ سَنَةً', 'عُمْرِي ثَلَاثَةَ عَشَرَ سَنَةً'], 'Feminine teen + singular.'),
    q('Choose “younger than me”.', ['أَصْغَرُ مِنِّي', 'أَكْبَرُ مِنِّي', 'أَصْغَرُ مِنْ أَنَا'], 'aṣgharu = younger.'),
  ],
  mastery: false,
  prep: {
    words: [['الْمَالُ', 'money', '—'], ['جُنَيْهٌ · جُنَيْهَاتٌ', 'pound · pounds', '—'], ['رِيَالٌ · دِرْهَمٌ', 'riyal · dirham', '—'], ['بِكَمْ؟', 'how much (does it cost)?', 'بِكَمْ هَذَا؟'], ['السِّعْرُ', 'the price', '—']],
    questionEn: 'Junayh (pound) is masculine. Is it khamsu junayhātin or khamsatu junayhātin?',
    questionAr: '______ جُنَيْهَاتٍ',
    homework: {
      core: 'Website “Mild”: the Age Ladder poster.',
      develop: 'Website “Spicy”: eight age sentences using all four rungs.',
      stretch: 'Website “Hot”: «أَعْمَارُ عَائِلَتِي».',
    },
    wordsSource: 'The five words prepare GM-NUM-04 (website Numeracy Mastery 04: money).',
  },
  remember: 'Remember: kam ʿumruka / ʿumruki? · ʿumrī … · ladder: sana · sanatān · 3–10 sanawāt (no ة) · 11–99 sanatan · teens feminine (arbaʿa ʿashrata) · akbaru minnī bi-sanatayni.',
});

module.exports = { meta, slides };
