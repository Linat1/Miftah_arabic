'use strict';
/*
 * F1-L05 · One Letter, Four Positions (positional forms; non-connectors; word X-ray)
 * Website: Pathways › Foundation › F1 › Lesson 5.
 */
const F = require('./f1-common');
const { q } = F;

const meta = F.meta({
  n: 5, fileTitle: 'One_Letter_Four_Positions', chip: 'Letter positions',
  title: 'One Letter, Four Positions', arabic: 'أَشْكَالُ الحُرُوفِ فِي الكَلِمَةِ',
  focus: 'See how a letter keeps its identity but changes its joining strokes at the start, middle and end of a word — and how the six breakers change the shape of the word around them.',
  icon: 'FaLink', level: 'Foundation · beginner',
});
const NEXT = { nextCode: 'F1-L06', nextTitle: 'Small Marks, Big Changes', nextAr: 'الشَّدَّةُ وَالتَّنْوِينُ وَأَلِفُ المَدِّ' };
const row = (name, a, b, c, d, core) => ({ core, cells: [name, a, b, c, d] });
const cols = [{ label: 'Letter', w: 2.33 }, { label: 'Isolated', w: 2.5, size: 32 }, { label: 'Initial (start)', w: 2.5, size: 32 }, { label: 'Medial (middle)', w: 2.5, size: 32 }, { label: 'Final (end)', w: 2.5, size: 32 }];

const slides = [
  F.titleSlide({
    n: 5,
    source: 'The website lesson teaches the four connector forms (isolated, initial, medial, final), transfer across body families, the two visible patterns of the six non-connectors, and word X-rays of كَتَبَ، بَاب، بَيْت. The retrieval check, form charts, think-aloud, games (Form Finder, Connection Architect, Word X-Ray) and the ten-item final check are the website’s. (The website’s visual game for this lesson repeats the F1-L01 letters, so it is not used.)',
    support: `• CORE: trace the joins — start with ب ت ث, using coloured connection lines. DEVELOP: predict the form by checking both neighbours. STRETCH: explain the difference between WORD POSITION and VISIBLE FORM after a breaker.
• Key message (website): the body and dots are the letter’s identity; the joining strokes only show connection — they do not make a new letter.
• Heritage / Urdu readers: Urdu script joins the same way (Urdu nastaʿlīq looks different, but the rules are the same) — ask them to annotate authentic words (website Heritage route).`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Four forms, family patterns, the six breakers.', wedo: 'Form finder, connection architect, word X-ray.', next: 'F1-L06' }),
  F.doNow({
    questions: [
      q('Which is the final alphabet letter?', ['ي', 'و', 'ء'], 'F1-L04: yāʾ is letter 28.'),
      q('What kind of set is ا د ذ ر ز و?', ['Connection breakers', 'All sun letters', 'All vowels'], 'The six breakers.'),
      q('What does sukūn show?', ['No following short vowel', 'Always silent'], 'The consonant is said; no vowel follows.'),
      q('Is ي a connector?', ['Yes', 'No'], 'yāʾ can join on both sides.'),
      q('Read كَتَبَ (prepared at home).', ['kataba', 'kutiba', 'katab'], 'Three fatḥas: ka-ta-ba — he wrote.'),
    ],
    keyIdea: { text: 'A letter keeps its body and dots — only its joining lines change.', ar: 'ب   بـ   ـبـ   ـب' },
    retrieves: 'Questions 1–4 are the website “F1-L04 readiness check” (3–4 → continue; 0–2 → repair the final letters and breaker rule). Question 5 tests the home preparation.',
  }),
  F.objectivesSlide([
    'Name the four connector forms.',
    'Use the neighbours to predict a letter’s form.',
    'Explain the two visible patterns of the six breakers.',
    'Take apart and rebuild كَتَبَ، بَاب، بَيْت.',
  ], {
    core: ['I can name isolated, initial, medial and final.', 'I can trace ب ت ث in all four forms.'],
    develop: ['I can predict a form by checking both neighbours.', 'I can find the breaks in a word.'],
    stretch: ['I can explain word position vs visible form.', 'I can annotate a new word letter by letter.'],
  }, 2, 'Objectives and routes are the website F1-L05 outcomes.'),
  F.keywordsSlide({
    text: '4 form names and 3 model words. No new letters today — the same 28 letters, joined up!',
    groups: [
      { head: 'FORMS', name: 'Four positions · 4' },
      { head: 'RULE', name: 'Six breakers' },
      { head: 'WORDS', name: 'X-ray · 3' },
    ],
    bridge: [
      { ar: 'مُنْفَصِلٌ', urdu: 'منفصل', tr: 'munfasil', en: 'separate → isolated' },
      { ar: 'أَوَّلُ', urdu: 'اول', tr: 'awwal', en: 'first → initial' },
      { ar: 'وَسَطٌ', urdu: 'وسط', tr: 'wasat', en: 'middle → medial' },
      { ar: 'آخِرٌ', urdu: 'آخر', tr: 'ākhir', en: 'last → final' },
      { ar: 'بَابٌ', urdu: 'باب', tr: 'bāb', en: 'door, chapter' },
    ],
    notes: 'URDU BRIDGE: منفصل (separate), اول (first), وسط (middle), آخر (last) — the four position names use words students may already know from Urdu. باب in Urdu means a chapter; in Arabic a door (and also a chapter).',
  }),
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Teacher instruction · the four connector forms (website Part 1)', title: 'bāʾ in four positions', ar: 'مُنْفَصِلٌ · أَوَّلِيٌّ · وَسَطِيٌّ · نِهَائِيٌّ',
    cols: [{ label: 'Form', w: 2.6 }, { label: 'Shape', w: 2.2, size: 40 }, { label: 'Joins from the right?', w: 2.6 }, { label: 'Joins to the left?', w: 2.4 }, { label: 'Where?', w: 2.53 }],
    rows: [
      { core: true, cells: ['Isolated  مُنْفَصِلٌ', 'ب', 'no', 'no', 'alone'] },
      { core: true, cells: ['Initial  أَوَّلِيٌّ', 'بـ', 'no', 'YES', 'start of a joined run (right)'] },
      { core: true, cells: ['Medial  وَسَطِيٌّ', 'ـبـ', 'YES', 'YES', 'in the middle'] },
      { core: true, cells: ['Final  نِهَائِيٌّ', 'ـب', 'YES', 'no', 'end of a joined run (left)'] },
    ],
    notes: `THE FOUR FORMS (website Part 1). The base letter remains bāʾ; only the joining strokes and tail change.
Arabic runs right to left: “initial” = the first/rightmost letter in a connected run; “final” = the last/leftmost (website).
Identity stays stable: look for the body and dots first — the horizontal strokes show connection; they do not create a new letter.
Gesture: two hands = two neighbours. Initial holds hands only to the left; medial both; final only to the right.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Teacher instruction · word position is not enough (website)', title: 'Ask four questions', ar: 'اِسْأَلْ أَرْبَعَةَ أَسْئِلَةٍ',
    cards: [
      { chip: 'RIGHT SIDE', head: '1 · 2', big: '← ؟', en: 'Is there a neighbour on the right? Does it connect onward?', clue: 'If yes → my letter receives a join.' },
      { chip: 'LEFT SIDE', color: '0E7C86', head: '3 · 4', big: '؟ ←', en: 'Is there a neighbour on the left? Can MY letter continue the join?', clue: 'If yes → my letter joins onward.' },
      { chip: 'THINK ALOUD', color: '7B3FA0', head: 'website model', big: 'كَتَبَ', en: '“I check the pair on the right, then the pair on the left.”', clue: 'Never choose a form from its number position alone.' },
    ],
    notes: 'WORD POSITION IS NOT ENOUGH (website): a letter in the middle of a word may look initial or isolated after a non-connector. Always ask the four questions. Think-aloud model (website): “I inspect the pair on the right, then the pair on the left. I do not choose a form from the letter’s numerical position alone.”',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Teacher instruction · families keep their dot clues (website Part 2)', title: 'Same body, same four shapes', ar: 'العَائِلَاتُ',
    cols,
    rows: [
      row('bāʾ', 'ب', 'بـ', 'ـبـ', 'ـب', true), row('tāʾ', 'ت', 'تـ', 'ـتـ', 'ـت', true), row('thāʾ', 'ث', 'ثـ', 'ـثـ', 'ـث', true),
      row('jīm', 'ج', 'جـ', 'ـجـ', 'ـج'), row('ḥāʾ', 'ح', 'حـ', 'ـحـ', 'ـح'), row('khāʾ', 'خ', 'خـ', 'ـخـ', 'ـخ'),
    ],
    notes: `FAMILY TRANSFER (website Part 2): the body transformation transfers across related letters; dots remain the identity check.
Website routes: Core — trace one body family in four columns; add dots only after the body is correct. Develop — cover one column and rebuild it from the connection rule. Stretch — explain which details are identity clues and which are joining strokes.
Note: in the initial and medial forms ب ت ث lose their “bowl” and become a small “tooth” — the dots are the only clue left.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Teacher instruction · the six breakers have only TWO shapes (website Part 3)', title: 'Breakers: two patterns, four places', ar: 'الحُرُوفُ الَّتِي لَا تَتَّصِلُ',
    cols,
    rows: [
      row('alif', 'ا', 'ا', 'ـا', 'ـا', true), row('dāl', 'د', 'د', 'ـد', 'ـد', true), row('rāʾ', 'ر', 'ر', 'ـر', 'ـر', true),
      row('wāw', 'و', 'و', 'ـو', 'ـو', true), row('dhāl · zāy', 'ذ  ز', 'ذ  ز', 'ـذ  ـز', 'ـذ  ـز'),
    ],
    foot: 'Isolated = initial (unjoined) · medial = final (joined from the right). The break is AFTER the breaker.',
    notes: `NON-CONNECTORS (website Part 3): the labels still describe context, but each breaker has only two visibly different patterns: isolated and initial share the unjoined form; medial and final share the form joined from the right.
The break is after the letter: alif may receive a join from its right, but the following bāʾ on its left cannot join back to it.
Shape label vs word position (website): in كِتَاب the final bāʾ is at the end of the word but looks ISOLATED because alif breaks the connection before it — it is not an initial form.`,
  },
  F.quickCheck([
    q('Name the form بـ', ['Initial', 'Medial', 'Final'], 'Joins onward to the left only (website final check 1).'),
    q('Name the form ـتـ', ['Medial', 'Initial', 'Final'], 'Joined on both sides (website final check 2).'),
    q('Name the form ـج', ['Final', 'Isolated', 'Medial'], 'Joined from the right only (website final check 3).'),
    q('Which non-connector pairing is correct?', ['Isolated = initial; medial = final', 'Isolated = final; initial = medial'], 'Website final check 6.'),
  ], 'website final check questions 1, 2, 3 and 6.'),
  {
    type: 'formsTable', stage: 'ido', min: 4, eyebrow: 'I do · X-ray three words (website Part 4 think-aloud)', title: 'Watch me take words apart', ar: 'بِنَاءُ الكَلِمَاتِ وَتَحْلِيلُهَا',
    cols: [{ label: 'Word', w: 2.3, size: 34 }, { label: 'Letter 1 (right)', w: 2.2, size: 30 }, { label: 'Letter 2', w: 2.2, size: 30 }, { label: 'Letter 3 (left)', w: 2.2, size: 30 }, { label: 'What happens?', w: 3.43 }],
    rows: [
      { core: true, cells: [{ ar: 'كَتَبَ', sub: 'kataba · he wrote' }, { ar: 'كـ', sub: 'initial kāf' }, { ar: 'ـتـ', sub: 'medial tāʾ' }, { ar: 'ـب', sub: 'final bāʾ' }, 'All neighbours join: one continuous run.'] },
      { core: true, cells: [{ ar: 'بَابٌ', sub: 'bāb · door' }, { ar: 'بـ', sub: 'initial bāʾ' }, { ar: 'ـا', sub: 'alif receives the join' }, { ar: 'ب', sub: 'final but isolated-looking' }, 'Alif breaks — the last bāʾ stands alone.'] },
      { core: true, cells: [{ ar: 'بَيْتٌ', sub: 'bayt · house' }, { ar: 'بـ', sub: 'initial bāʾ' }, { ar: 'ـيـ', sub: 'medial yāʾ' }, { ar: 'ـت', sub: 'final tāʾ' }, 'yāʾ is a connector: the whole word stays joined.'] },
    ],
    notes: `I DO — WORD X-RAY (4 min), website Part 4. Think aloud for each word, right to left:
“كَتَبَ: kāf has no neighbour on its right → initial. tāʾ has kāf on its right (a connector) and bāʾ on its left → medial. bāʾ has tāʾ on its right, nothing on its left → final.”
“بَابٌ: bāʾ initial; alif receives the join but cannot pass it on; so the last bāʾ is at the END of the word but looks ISOLATED.”
Students copy the three words, then split each into its letters with the form names underneath (website homework).
Colour code (website): green = connection continues, coral = connection stops — mark the boundary between every pair.`,
  },
  {
    type: 'formsTable', stage: 'ido', min: 4, eyebrow: 'I do · write the four forms (website formation practice)', title: 'Copy the four forms', ar: 'اُكْتُبِ الأَشْكَالَ الأَرْبَعَةَ',
    cols,
    rows: [
      row('sīn · three teeth every time', 'س', 'سـ', 'ـسـ', 'ـس', true), row('ʿayn · open head → closed head', 'ع', 'عـ', 'ـعـ', 'ـع', true),
      row('mīm · tail only at the end', 'م', 'مـ', 'ـمـ', 'ـم', true), row('fāʾ · dot every time', 'ف', 'فـ', 'ـفـ', 'ـف'),
      row('hāʾ · changes the most!', 'ه', 'هـ', 'ـهـ', 'ـه'),
    ],
    notes: 'FORMATION PRACTICE (website): select connector letters and copy each row across four labelled columns using a verified model. Model each row on the pen tablet, saying “start · middle · end”, then students copy into four labelled columns. ʿayn and hāʾ change the most — point out the medial ـعـ and ـهـ shapes.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · website game “Form Finder”', title: 'Form finder: which form?', ar: 'اِبْحَثْ عَنِ الشَّكْلِ',
    seed: 15,
    questions: [
      q('Which form is this?', ['Medial', 'Initial', 'Final'], 'Joined on both sides.', { ar: 'ـسـ', arBig: true }),
      q('Which form is this?', ['Initial', 'Medial', 'Final'], 'Joins onward to the left only.', { ar: 'عـ', arBig: true }),
      q('Which form is this?', ['Final', 'Initial', 'Medial'], 'Joined from the right, with its tail.', { ar: 'ـم', arBig: true }),
      q('Which form is this?', ['Isolated', 'Initial', 'Final'], 'No joins at all.', { ar: 'ق', arBig: true }),
      q('Which form is this?', ['Medial', 'Final', 'Initial'], 'hāʾ in the middle of a word.', { ar: 'ـهـ', arBig: true }),
    ],
    side: { kind: 'core', label: 'CORE', text: 'Look at the little joining lines:\nline on the left only → initial\nboth sides → medial\nright only → final' },
    answerSlide: { min: 0, eyebrow: 'We do · form finder answers', title: 'Answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — website game “Form Finder” (classify visible connector forms before working inside full words). Teacher-made items.',
    answerNotes: 'Reveal. Ask: which letter is it? (sīn, ʿayn, mīm, qāf, hāʾ) — identity first, then form.',
  },
  {
    type: 'sorter', stage: 'wedo', min: 2, eyebrow: 'We do · website game “Connection Architect”', title: 'Can it join the next letter?', ar: 'مُهَنْدِسُ الاِتِّصَالِ',
    categories: ['Can continue the join', 'Stops the join (breaker)'],
    items: [
      { ar: 'ل', cat: 0 }, { ar: 'ا', cat: 1 }, { ar: 'ك', cat: 0 }, { ar: 'ز', cat: 1 },
      { ar: 'ف', cat: 0 }, { ar: 'و', cat: 1 }, { ar: 'ع', cat: 0 }, { ar: 'ذ', cat: 1 },
    ],
    answerSlide: { eyebrow: 'We do · connection architect answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — website game “Connection Architect” (predict whether a letter can continue a join to the following letter).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · website game “Word X-Ray”', title: 'Word X-ray', ar: 'حَلِّلِ الكَلِمَةَ',
    seed: 16,
    questions: [
      q('How does the final ب look in بَاب?', ['Isolated-looking', 'Initial', 'Final connected'], 'Alif breaks before it (website final check 7).'),
      q('What form is ي in بَيْت?', ['Medial', 'Initial', 'Final'], 'Joined on both sides (website final check 8).'),
      q('What form is ك in كَتَبَ?', ['Initial', 'Medial', 'Final'], 'First letter, joins onward.'),
      q('Where is the break in دَرَسَ (he studied)?', ['After د and after ر', 'Only after س', 'There is no break'], 'د and ر are both breakers: د ر س all look separate.'),
      q('What should you inspect before choosing a form?', ['Its neighbours and their connection behaviour', 'Only the number of dots'], 'Website final check 10.'),
    ],
    side: { kind: 'core', label: 'CORE', text: 'Read right → left.\nCheck the letter on the RIGHT, then the LEFT.\nBreakers: ا د ذ ر ز و' },
    answerSlide: { min: 0, eyebrow: 'We do · word X-ray answers', title: 'Answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — website game “Word X-Ray” (identify the visible form of the named connector inside a real word). Q4 is teacher-made; the others are website final-check items.',
    answerNotes: 'Reveal. Show each word with green (joined) and coral (break) boundaries on the whiteboard.',
  },
  {
    type: 'routes', stage: 'youdo', min: 7, eyebrow: 'You do · independent practice · 7 minutes', title: 'Write: choose your route', ar: 'اُكْتُبْ',
    core: { amount: '3 four-form rows', task: 'Copy ب ت ث in four columns: isolated, initial, medial, final.', how: 'Write the body first, then add the dots. Label each column.' },
    develop: { amount: '6 four-form rows', task: 'Four-form rows for س ش ص ض ط ظ (website homework).', how: 'Cover one column and rebuild it from the rule.' },
    stretch: { amount: 'X-ray words', task: 'Split كَتَبَ، بَاب، بَيْت, then مَدْرَسَة (school) and رَسُول (messenger), and label every form.', how: 'Explain word position vs visible form after each breaker (website Heritage extension).' },
    notes: 'YOU DO — WRITING (7 min) = the website formation practice, homework and Heritage extension, split by route. LIVE FEEDBACK after 3 minutes: check the teeth of ب ت ث in initial/medial forms and dot positions.',
  },
  F.speakingSlide({
    speaking: {
      context: 'Explain a word to a partner',
      model: [
        ['A', 'مَا هٰذِهِ الكَلِمَةُ؟ كَتَبَ', 'What is this word? kataba'],
        ['B', 'كَافٌ، تَاءٌ، بَاءٌ. كُلُّهَا مُتَّصِلَةٌ.', 'kāf, tāʾ, bāʾ. They are all joined.'],
        ['A', 'وَ«بَابٌ»؟', 'And “bāb”?'],
        ['B', 'بَاءٌ، أَلِفٌ، بَاءٌ. الأَلِفُ لَا تَتَّصِلُ بِمَا بَعْدَهَا.', 'bāʾ, alif, bāʾ. Alif does not join the next letter.'],
      ],
    },
  }, {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'مَا هٰذَا الحَرْفُ؟' },
      { route: 'core', ar: 'أَوَّلِيٌّ أَمْ وَسَطِيٌّ أَمْ نِهَائِيٌّ؟' },
      { route: 'develop', ar: 'أَيْنَ الاِنْفِصَالُ؟' },
      { route: 'stretch', ar: 'حَلِّلْ «مَدْرَسَة».' },
    ],
    stems: [
      { route: 'core', ar: 'هٰذَا ______ .' },
      { route: 'develop', ar: '______ لَا يَتَّصِلُ بِمَا بَعْدَهُ .' },
      { route: 'stretch', ar: 'مِيمٌ ، دَالٌ ، رَاءٌ ، سِينٌ ، تَاءٌ مَرْبُوطَةٌ' },
      { route: 'sum', ar: 'قَالَ / قَالَتْ : ______ .' },
    ],
    modelEn: ['What is this word? kataba', 'kāf, tāʾ, bāʾ. They are all joined.'],
    notes: 'EXPLAIN A WORD (teacher-made speaking task): A shows a word from the lesson; B names each letter and says where the joins stop. Prompts: What is this letter? · Initial, medial or final? · Where is the break? · Analyse “madrasa”. (تَاءٌ مَرْبُوطَةٌ ة is previewed only — taught in F1-L06.)',
  }),
  {
    type: 'formsTable', stage: 'feedback', min: 2, eyebrow: 'Feedback · mix-ups and repairs', title: 'Mistakes that help us learn', ar: 'أَخْطَاءٌ شَائِعَةٌ',
    cols: [{ label: 'Likely mix-up', w: 5.6 }, { label: 'Repair cue', w: 6.73 }],
    rows: [
      { core: true, cells: ['Choosing a form from the letter’s number in the word', 'Check the neighbours, not the position number (website).'] },
      { core: true, cells: ['Joining after ا د ذ ر ز و', 'The break is AFTER the breaker.'] },
      { core: true, cells: ['Forgetting the dots on the small “tooth”', 'Body first, then the dots — they are the identity.'] },
      { cells: ['Calling the last ب in بَاب “initial”', 'It is final but isolated-looking (website).'] },
      { cells: ['Thinking a new shape is a new letter', 'The joining strokes show connection only.'] },
      { cells: ['Mixing medial ـهـ with other letters', 'hāʾ changes the most — learn its four shapes.'] },
    ],
    notes: 'FEEDBACK (2 min) — mix-ups based on the website explanations. Students correct in green pen.',
  },
  F.selfCheckSlide([
    { route: 'core', text: 'I can identify the four connector forms.' },
    { route: 'core', text: 'I can find the connection breaks inside a word.' },
    { route: 'develop', text: 'I can explain the two visible patterns of the breakers.' },
    { route: 'develop', text: 'I can build and annotate a three-letter word.' },
    { route: 'stretch', text: 'I can explain word position vs visible form.' },
  ]),
  F.exitTicket([
    q('How many connection breakers are in the standard set?', ['Six', 'Four', 'Eight'], 'ا د ذ ر ز و (website final check 5).'),
    q('Why can one body pattern help with ب ت ث?', ['They share a body family', 'They have the same sound'], 'Website final check 4.'),
    q('Which direction do we follow an Arabic word?', ['Right to left', 'Left to right'], 'Website final check 9.'),
  ], 10),
  F.prepSlide({
    ...NEXT,
    words: [['شَدَّةٌ  ـّ', 'shadda · a doubled letter', ''], ['تَنْوِينٌ  ـٌ', 'tanwīn · the -n ending', ''], ['آ', 'alif madda · long ā after a hamza', ''], ['ة', 'tāʾ marbūṭa · ends many feminine words', ''], ['كِتَابٌ', 'a book', 'pl. كُتُبٌ']],
    questionEn: 'Split كِتَابٌ into its letters and name each form.',
    questionAr: 'كِتَابٌ = كـ + ـتـ + ـا + ب',
    homework: {
      core: 'Website · F1-L05 · Form Finder game; copy ب ت ث in four columns.',
      develop: 'Website homework: four-form rows for س ش ص ض ط ظ.',
      stretch: 'Website homework: segment كَتَبَ، بَاب، بَيْت and label each form; then annotate مَدْرَسَة and رَسُول.',
    },
    wordsSource: 'Next lesson: the small marks that change a word’s sound (shadda, tanwīn, madda) and hamza. Look at the five marks above.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: 5 marks + your four-form rows.' }),
];

module.exports = { meta, slides };
