'use strict';
/* D2-L09 · Speaking — People, Relationships and Style Topic Conversation — website: Pathways › Development › D2 › D2-L09 (developing answers: direct answer + description/reason + example/comparison, follow-up questions, repair phrases). */
const D = require('./d-common');
const X = require('./d2-lex');
const { q } = D;

const meta = D.meta('D2')({
  n: 9, fileTitle: 'Topic_Conversation', chip: 'Topic Conversation',
  title: 'Speaking — People, Relationships and Style Topic Conversation', arabic: 'المُحَادَثَةُ — الأَشْخَاصُ وَالعَلَاقَاتُ وَالأُسْلُوبُ الشَّخْصِيُّ',
  focus: 'Hold a real topic conversation about a person, a relationship and style: answer directly, then build (reason → example → comparison), ask a follow-up question, and repair when you don’t understand.',
  icon: 'FaComments', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const G = D.site('D2-L09').grammar;

const slides = D.devLesson('D2-L09', {
  support: `• SPEAKING lesson: the main You Do is the paired topic conversation (website prompts). Everything before it builds the “answer ladder” and the follow-up / repair phrases.
• Core: answer three questions with Direct answer + Reason, reading from cue words. Develop: add an example or a comparison and ask one follow-up question. Stretch: 45–60 seconds per answer, spontaneous follow-ups, and self-repair.
• The website grammar and quiz for this lesson are copies of D2-L07; the deck replaces them with the rules named in the website title (“Developing answers and follow-up questions”) — flagged for the website editor.
• Urdu bridge: سوال، جواب، مثال، مقابلہ ≠ مُقَارَنَةٌ, دوبارہ (→ إِعَادَةُ).`,
  teach: 'The answer ladder, follow-ups and repair phrases.',
  wedo: 'Which answer is stronger? Sort, fix and listen.',
  next: { nextCode: 'D2-L10', nextTitle: 'Speaking — Describing People and Personal Style', nextAr: 'التَّحَدُّثُ' },
  flexGroups: [1, 2],
  doNow: {
    questions: [
      q('What does كَيْفَ هِيَ؟ mean?', ['What is she like?', 'Where is she?', 'Who is she?'], 'Prepared at home (D2-L01).'),
      q('What does أَيُّهُمَا تُفَضِّلُ؟ mean?', ['Which of the two do you prefer?', 'Why do you prefer it?', 'Do you agree?'], 'Prepared at home (D2-L05).'),
      q('Which gives the writer’s view?', ['يَرَى الكَاتِبُ أَنَّ …', 'يَذْكُرُ مِثَالًا …', 'بَيْنَمَا …'], 'D2-L08: the four moves.'),
      q('Choose “I get on with my sister.”', ['أَتَفَاهَمُ مَعَ أُخْتِي.', 'أَتَفَاهَمُ أُخْتِي.', 'يَتَفَاهَمُ مَعَ أُخْتِي.'], 'D2-L02.'),
      q('Choose the correct comparison.', ['هُوَ أَكْثَرُ رَسْمِيَّةً مِنِّي.', 'هُوَ رَسْمِيٌّ مِنِّي.', 'هُوَ أَكْثَرُ رَسْمِيٌّ مِنِّي.'], 'D2-L05: more + noun.'),
    ],
    keyIdea: { text: '“Yes” or “no” is never enough. Answer → reason → example or comparison.', ar: 'هُوَ وَدُودٌ {k|لِأَنَّهُ} يَسْتَمِعُ إِلَيَّ؛ {w|مَثَلًا} … {e|بَيْنَمَا} …' },
    retrieves: 'Questions 1–2 test two of the five conversation questions prepared at home. Questions 3–5 retrieve D2-L08, D2-L02 and D2-L05.',
  },
  routes: {
    core: ['I can answer three questions with a reason.', 'I can ask someone to repeat a question.'],
    develop: ['I can add an example or a comparison to each answer.', 'I can ask one follow-up question.'],
    stretch: ['I can speak for 45–60 seconds per answer without a script.', 'I can react to an unexpected follow-up question.'],
  },
  bridge: [
    { ar: 'سُؤَالٌ تَابِعٌ', urdu: 'سوال', tr: 'sawāl', en: 'a (follow-up) question' },
    { ar: 'جَوَابٌ مُبَاشِرٌ', urdu: 'جواب / براہ راست', tr: 'jawāb', en: 'a direct answer' },
    { ar: 'مِثَالٌ', urdu: 'مثال', tr: 'misāl', en: 'example' },
    { ar: 'إِعَادَةُ السُّؤَالِ', urdu: 'اعادہ', tr: 'iʿāda', en: 'repeating the question' },
    { ar: 'مُحَادَثَةٌ', urdu: 'محاورہ', tr: 'muhāwara', en: 'Urdu: idiom · Arabic مُحَاوَرَةٌ: dialogue' },
  ],
  bridgeNotes: 'URDU BRIDGE: سوال / جواب → سُؤَالٌ / جَوَابٌ; مثال → مِثَالٌ; اعادہ (repetition) → إِعَادَةُ السُّؤَالِ (repeat the question). CAREFUL: Urdu محاورہ = an idiom; Arabic مُحَاوَرَةٌ / مُحَادَثَةٌ = a conversation.',
  core: ['أَتَفَاهَمُ مَعَ', 'أَثِقُ بِـ', 'يَدْعَمُنِي', 'لِأَنَّ', 'وَلٰكِنَّ', 'بَيْنَمَا', 'فِي رَأْيِي'],
  forms: X.formsFor('D2-L09', {
    'أَتَفَاهَمُ مَعَ': { tag: 'I · he · we', forms: [{ l: 'we', ar: 'نَتَفَاهَمُ' }, { l: 'he', ar: 'يَتَفَاهَمُ' }, { l: 'you?', ar: 'هَلْ تَتَفَاهَمُ …؟' }] },
    'أَثِقُ بِـ': { tag: 'I · you?', forms: [{ l: 'him', ar: 'أَثِقُ بِهِ' }, { l: 'her', ar: 'أَثِقُ بِهَا' }, { l: 'you?', ar: 'هَلْ تَثِقُ بِـ …؟' }] },
  }),
  vocabNotes: { 0: 'Conversation questions: every verb card also shows the QUESTION form (you: ta-). Students practise turning each into a question to a partner.', 1: 'Description and comparison (FLEX) — D2-L01 and D2-L05 revision.', 2: 'Style language (FLEX) — D2-L03/L04 revision.' },
  patch: {
    grammar: {
      ...G,
      rules: [
        { heading: 'Start with a direct answer', formula: 'السُّؤَالُ ← جَوَابٌ مُبَاشِرٌ', explanation: 'Answer the exact question in the first sentence.', examples: ['صِفْ صَدِيقَكَ. ← صَدِيقِي عُمَرُ وَدُودٌ وَصَادِقٌ.'] },
        { heading: 'Add a reason or description', formula: '… لِأَنَّ … / … وَ …', explanation: 'Develop the answer with a reason or more detail.', examples: ['أَثِقُ بِهِ لِأَنَّهُ يَسْتَمِعُ إِلَيَّ.'] },
        { heading: 'Add an example or a comparison', formula: 'مَثَلًا … / أَكْثَرُ … مِنْ / بَيْنَمَا', explanation: 'Evidence and comparison make the answer convincing.', examples: ['هُوَ أَكْثَرُ رَسْمِيَّةً مِنِّي، بَيْنَمَا أُفَضِّلُ الأُسْلُوبَ العَمَلِيَّ.'] },
        { heading: 'Ask a follow-up and repair', formula: 'وَأَنْتَ؟ · لِمَاذَا؟ · هَلْ يُمْكِنُكَ إِعَادَةُ السُّؤَالِ؟', explanation: 'Keep the conversation going; ask for help politely when you do not understand.', examples: ['وَأَنْتِ، كَيْفَ أُسْلُوبُكِ؟', 'مَاذَا تَقْصِدُ بِـ «مُحْتَشِمٌ»؟'] },
      ],
      quiz: [
        { prompt: 'Which answer to صِفْ صَدِيقَكَ is strongest?', options: ['هُوَ وَدُودٌ وَأَثِقُ بِهِ لِأَنَّهُ يَسْتَمِعُ إِلَيَّ.', 'نَعَمْ.', 'صَدِيقِي.'], answer: 0, feedback: 'Direct answer + reason.' },
        { prompt: 'Which is a follow-up question?', options: ['وَأَنْتَ، مَا أُسْلُوبُكَ؟', 'شُكْرًا.', 'أَنَا طَالِبٌ.'], answer: 0, feedback: 'It turns the question back to the partner.' },
        { prompt: 'You did not understand. What do you say?', options: ['هَلْ يُمْكِنُكَ إِعَادَةُ السُّؤَالِ؟', 'لَا.', 'أَنَا لَا أَعْرِفُ شَيْئًا.'], answer: 0, feedback: 'A polite repair phrase.' },
        { prompt: 'Which adds a comparison?', options: ['هُوَ أَكْثَرُ رَسْمِيَّةً مِنِّي.', 'هُوَ رَسْمِيٌّ.', 'هُوَ هُنَا.'], answer: 0, feedback: 'أَكْثَرُ … مِنْ.' },
        { prompt: 'Which adds an example?', options: ['مَثَلًا، يُسَاعِدُنِي فِي الوَاجِبِ.', 'لِأَنَّ.', 'فِي رَأْيِي.'], answer: 0, feedback: 'مَثَلًا introduces an example.' },
        { prompt: 'Ask a GIRL about her style.', options: ['مَا أُسْلُوبُكِ؟', 'مَا أُسْلُوبُكَ؟', 'مَا أُسْلُوبُهُ؟'], answer: 0, feedback: 'To a girl: -ki.' },
        { prompt: 'Which asks for a reason?', options: ['لِمَاذَا؟', 'مَتَى؟', 'أَيْنَ؟'], answer: 0, feedback: 'Why?' },
        { prompt: 'Which shows you disagree politely?', options: ['أَفْهَمُ رَأْيَكَ، وَلٰكِنَّنِي أَرَى أَنَّ …', 'أَنْتَ مُخْطِئٌ.', 'لَا أُرِيدُ.'], answer: 0, feedback: 'Acknowledge, then contrast.' },
      ],
    },
    patterns: [
      { ar: 'صَدِيقِي عُمَرُ وَدُودٌ وَصَادِقٌ.', en: 'My friend Omar is friendly and honest.', tip: 'Direct answer.' },
      { ar: 'أَثِقُ بِهِ لِأَنَّهُ يَسْتَمِعُ إِلَيَّ.', en: 'I trust him because he listens to me.', tip: 'Reason.' },
      { ar: 'هُوَ أَكْثَرُ اهْتِمَامًا بِالمَوْضَةِ مِنِّي.', en: 'He is more interested in fashion than me.', tip: 'Comparison.' },
      { ar: 'وَأَنْتَ، مَنْ صَدِيقُكَ المُقَرَّبُ؟', en: 'And you, who is your close friend?', tip: 'Follow-up question.' },
    ],
    mistakes: [
      { wrong: 'صِفْ صَدِيقَكَ. — نَعَمْ.', right: 'صِفْ صَدِيقَكَ. — صَدِيقِي وَدُودٌ لِأَنَّهُ يُسَاعِدُنِي.', why: 'Answer the question and add a reason.' },
      { wrong: 'أَنْتَ مُخْطِئٌ.', right: 'أَفْهَمُ رَأْيَكَ، وَلٰكِنَّنِي أَرَى أَنَّ …', why: 'Disagree politely.' },
      { wrong: 'مَا أُسْلُوبُكَ؟ (to a girl)', right: 'مَا أُسْلُوبُكِ؟', why: 'To a girl: -ki.' },
    ],
    sorter: {
      title: 'Which part of the answer ladder?', instructions: 'Sort each phrase: direct answer, development (reason / example / comparison) or conversation (follow-up / repair).',
      categories: ['Direct answer', 'Development', 'Follow-up or repair'],
      items: [
        { label: 'صَدِيقِي عُمَرُ وَدُودٌ.', answer: 0 }, { label: 'أُسْلُوبِي بَسِيطٌ.', answer: 0 },
        { label: 'لِأَنَّهُ يَسْتَمِعُ إِلَيَّ.', answer: 1 }, { label: 'مَثَلًا، يُسَاعِدُنِي فِي الوَاجِبِ.', answer: 1 }, { label: 'هُوَ أَكْثَرُ رَسْمِيَّةً مِنِّي.', answer: 1 },
        { label: 'وَأَنْتَ؟', answer: 2 }, { label: 'هَلْ يُمْكِنُكَ إِعَادَةُ السُّؤَالِ؟', answer: 2 }, { label: 'مَاذَا تَقْصِدُ بِـ …؟', answer: 2 },
      ],
    },
    final: [
      L('Which answer is strongest?', ['أُسْلُوبِي بَسِيطٌ لِأَنَّنِي أُحِبُّ الرَّاحَةَ.', 'بَسِيطٌ.', 'نَعَمْ.'], 'Answer + reason.'),
      L('Which is a repair phrase?', ['هَلْ يُمْكِنُكَ إِعَادَةُ السُّؤَالِ؟', 'وَأَنْتَ؟', 'مَثَلًا'], 'It asks for the question again.'),
      L('Which is a follow-up question?', ['وَأَنْتِ، مَا أُسْلُوبُكِ؟', 'شُكْرًا جَزِيلًا.', 'أَنَا طَالِبَةٌ.'], 'It keeps the conversation going.'),
      L('Which introduces an example?', ['مَثَلًا', 'لِأَنَّ', 'بَيْنَمَا'], 'mathalan = for example.'),
      L('Choose the polite disagreement.', ['أَفْهَمُ رَأْيَكَ، وَلٰكِنَّنِي أَرَى أَنَّ الرَّاحَةَ أَهَمُّ.', 'رَأْيُكَ خَطَأٌ.', 'لَا.'], 'Acknowledge, then contrast.'),
      L('Ask a BOY who supports him.', ['مَنْ يَدْعَمُكَ؟', 'مَنْ يَدْعَمُكِ؟', 'مَنْ يَدْعَمُنِي؟'], 'To a boy: -ka.'),
    ],
    mission: null,
    listening: {
      questions: [
        L('What is the student asked about first?', ['his closest friend', 'his family', 'his school'], 'يُسْأَلُ الطَّالِبُ عَنْ أَقْرَبِ صَدِيقٍ لَهُ.'),
        L('What else is he asked?', ['what he likes about his friend’s personality', 'where his friend lives', 'his friend’s age'], 'وَمَا يُعْجِبُهُ فِي شَخْصِيَّتِهِ.'),
        L('What is compared?', ['their styles of clothing', 'their marks', 'their families'], 'كَيْفَ يَخْتَلِفُ أُسْلُوبُهُمَا فِي المَلَابِسِ.'),
        L('How does he answer?', ['in connected sentences', 'with yes / no', 'in English'], 'يُجِيبُ بِجُمَلٍ مُتَّصِلَةٍ.'),
        L('What does he add to his answers?', ['evidence and a comparison', 'a joke', 'a price'], 'يُقَدِّمُ دَلِيلًا وَمُقَارَنَةً.'),
        L('What does he do at the end?', ['asks the interviewer a follow-up question', 'says goodbye', 'stops talking'], 'ثُمَّ يَسْأَلُ المُحَاوِرَ سُؤَالًا تَابِعًا.'),
      ],
    },
    reading: {
      questions: [
        L('What kind of text is this?', ['a practice guide for conversations', 'a story', 'an advert'], 'نَصٌّ تَدْرِيبِيٌّ لِمُحَادَثَةٍ.'),
        L('What is not enough?', ['answering “yes” or “no”', 'giving a reason', 'giving an example'], 'لَا تَكْفِي إِجَابَةُ «نَعَمْ» أَوْ «لَا».'),
        L('How does a strong answer start?', ['with a direct answer', 'with a question', 'with an example'], 'تَبْدَأُ بِجَوَابٍ مُبَاشِرٍ.'),
        L('What comes next?', ['a description or a reason', 'a goodbye', 'a price'], 'ثُمَّ تُضِيفُ وَصْفًا أَوْ سَبَبًا.'),
        L('And after that?', ['an example or a comparison', 'the same answer again', 'silence'], 'وَبَعْدَ ذٰلِكَ مِثَالًا أَوْ مُقَارَنَةً.'),
        L('What can you say if you don’t understand?', ['Can you repeat the question?', 'I don’t want to answer.', 'No.'], 'هَلْ يُمْكِنُكَ إِعَادَةُ السُّؤَالِ؟'),
      ],
    },
  },
  grammar: [
    {
      type: 'formula', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the answer ladder (website reading text + model)', title: 'Answer → reason → example / comparison', ar: 'سُلَّمُ الإِجَابَةِ',
      cols: [
        { label: 'direct answer', ar: 'جَوَابٌ مُبَاشِرٌ', color: '1D5FBF', pale: 'EEF3FA' },
        { label: 'reason / description', ar: 'سَبَبٌ', color: '1E7B4F', pale: 'E8F4EC' },
        { label: 'example / comparison', ar: 'مِثَالٌ / مُقَارَنَةٌ', color: '6B4C9A', pale: 'F1ECF7' },
      ],
      rows: [
        { en: 'My friend Omar is friendly and honest; I trust him because he listens to me; for example, he helps me with my homework.', cells: ['صَدِيقِي عُمَرُ وَدُودٌ وَصَادِقٌ،', 'وَأَثِقُ بِهِ {k|لِأَنَّهُ} يَسْتَمِعُ إِلَيَّ؛', '{k|مَثَلًا}، يُسَاعِدُنِي فِي الوَاجِبِ.'] },
        { en: 'I prefer simple clothes because I like comfort, whereas he is more interested in fashion than me.', cells: ['أُفَضِّلُ المَلَابِسَ البَسِيطَةَ', '{k|لِأَنَّنِي} أُحِبُّ الرَّاحَةَ،', '{k|بَيْنَمَا} هُوَ أَكْثَرُ اهْتِمَامًا بِالمَوْضَةِ مِنِّي.'] },
      ],
      foot: 'Core: steps 1–2. Develop: all three. Stretch: all three + a follow-up question to your partner.',
      notes: `GRAMMAR PART 1 — the website reading text for this lesson IS the rule: “A strong answer starts with a direct answer, then adds a description or reason, then an example or comparison.” Rows use the website model answers (Omar; style).
Practice: teacher asks the class a question; three students build ONE answer together, one step each.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · keep the conversation going (website reading + model)', title: 'Follow up · repair · disagree politely', ar: 'اِسْأَلْ · اِطْلُبْ · نَاقِشْ',
      cards: [
        { chip: 'FOLLOW UP · CORE', color: '1D5FBF', head: 'وَأَنْتَ؟ · لِمَاذَا؟', big: 'وَأَنْتِ، كَيْفَ أُسْلُوبُكِ؟', en: 'And you (f.), what is your style like?', clue: 'To a boy -ka, to a girl -ki.' },
        { chip: 'REPAIR · CORE', color: '1E7B4F', head: 'إِعَادَةُ السُّؤَالِ', big: 'هَلْ يُمْكِنُكَ إِعَادَةُ السُّؤَالِ؟ مَاذَا تَقْصِدُ بِـ «مُحْتَشِمٌ»؟', en: 'Can you repeat the question? What do you mean by “modest”?', clue: 'Never stay silent.' },
        { chip: 'DISAGREE · STRETCH', color: 'B83227', head: 'أَفْهَمُ رَأْيَكَ، وَلٰكِنَّ …', big: 'أَفْهَمُ رَأْيَكَ، وَلٰكِنَّنِي أَرَى أَنَّ الرَّاحَةَ أَهَمُّ.', en: 'I understand your view, but I think comfort is more important.', clue: 'Acknowledge, then contrast.' },
      ],
      error: { text: 'A one-word answer ends the conversation.', pairs: [['نَعَمْ، لِأَنَّهُ يُسَاعِدُنِي دَائِمًا. وَأَنْتَ؟', 'نَعَمْ.']] },
      notes: `GRAMMAR PART 2 — repair phrases from the website reading text (هَلْ يُمْكِنُكَ إِعَادَةُ السُّؤَالِ؟ / مَاذَا تَقْصِدُ بِـ…؟) and the follow-up move from the website listening (“then he asks the interviewer a follow-up question”). Polite disagreement recycles D2-L04.`,
    },
  ],
  quick: [0, 1, 2, 3],
  ido: {
    title: 'Watch me climb the answer ladder',
    steps: [
      { head: 'Question', ar: 'صِفْ صَدِيقَكَ المُقَرَّبَ.', think: 'What exactly is asked?' },
      { head: 'Direct answer', ar: '{w|صَدِيقِي عُمَرُ وَدُودٌ وَصَادِقٌ.}', think: 'Answer first.' },
      { head: 'Reason + comparison', ar: 'أَثِقُ بِهِ {k|لِأَنَّهُ} يَسْتَمِعُ إِلَيَّ، {e|وَ}هُوَ {e|أَكْثَرُ} رَسْمِيَّةً {e|مِنِّي}.', think: 'Build.' },
      { head: 'Follow-up', ar: '{w|وَأَنْتَ، مَنْ صَدِيقُكَ المُقَرَّبُ؟}', think: 'Pass the ball.' },
    ],
    legend: ['w', 'k', 'e'], legendLabels: { w: 'ANSWER / FOLLOW-UP', k: 'REASON', e: 'COMPARISON' },
    model: 'أ: صِفْ صَدِيقَكَ المُقَرَّبَ.  ب: {w|صَدِيقِي عُمَرُ وَدُودٌ وَصَادِقٌ،} وَأَثِقُ بِهِ {k|لِأَنَّهُ} يَسْتَمِعُ إِلَيَّ. هُوَ {e|أَكْثَرُ} رَسْمِيَّةً {e|مِنِّي}، بَيْنَمَا أُفَضِّلُ الأُسْلُوبَ العَمَلِيَّ. {w|وَأَنْتَ، مَنْ صَدِيقُكَ المُقَرَّبُ؟}',
    modelEn: 'A: Describe your close friend. B: My friend Omar is friendly and honest, and I trust him because he listens to me. He is more formal than me, whereas I prefer a practical style. And you, who is your close friend?',
    notes: 'I DO (3 min) — the website model conversation performed by the teacher (both parts, or with a confident student), thinking aloud about each rung. Then show how the SAME answer can shrink to Core size (rungs 1–2 only).',
  },
  wedoSlides: [
    {
      type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · which answer climbs higher?', title: 'Upgrade the answer', ar: 'طَوِّرِ الإِجَابَةَ',
      seed: 9,
      questions: [
        q('Question: كَيْفَ تَتَفَاهَمُ مَعَ أَصْدِقَائِكَ؟', ['أَتَفَاهَمُ مَعَهُمْ لِأَنَّنَا نَحْتَرِمُ بَعْضَنَا.', 'جَيِّدًا.', 'أَصْدِقَائِي.'], 'Answer + reason.'),
        q('Question: مَا أُسْلُوبُكَ فِي المَلَابِسِ؟', ['أُسْلُوبِي بَسِيطٌ وَعَمَلِيٌّ، بَيْنَمَا أُخْتِي تُفَضِّلُ الأَلْوَانَ.', 'بَسِيطٌ.', 'نَعَمْ.'], 'Answer + comparison.'),
        q('Your partner said: أُحِبُّ المَوْضَةَ. Best follow-up?', ['لِمَاذَا؟ وَمَا أُسْلُوبُكَ المُفَضَّلُ؟', 'شُكْرًا.', 'أَنَا أَيْضًا.'], 'Ask why / ask for more.'),
        q('You didn’t understand مُحْتَشِمٌ. You say …', ['مَاذَا تَقْصِدُ بِـ «مُحْتَشِمٌ»؟', 'لَا أَعْرِفُ.', 'نَعَمْ.'], 'Repair politely.'),
      ],
      side: { kind: 'core', label: 'CORE', text: 'The stronger answer:\n1. answers the question\n2. says WHY\nDevelop: + example / comparison' },
      answerSlide: { min: 0, eyebrow: 'We do · upgrade answers', title: 'Upgrade the answer: answers', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO — built from the website prompts and reading text. After each reveal, a student gives their OWN answer to the question on the mic.',
      answerNotes: 'Volunteers answer the question for themselves, climbing at least two rungs.',
    },
  ],
  sorterCats: ['Direct answer', 'Development', 'Follow-up or repair'],
  hints: ['Did it answer the question? Why?', 'Polite or rude?', 'Talking to a girl: -ka or -ki?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 6.\nListen for: أَقْرَبِ صَدِيقٍ · المَلَابِسِ · سُؤَالًا تَابِعًا.',
  listenRoutes: 'Core: questions 1, 3 and 6. Develop / Stretch: all 6. (Questions are teacher-written: the website questions for this script are generic.)',
  gloss: [
    ['فِي مُحَادَثَةٍ، يُسْأَلُ الطَّالِبُ عَنْ أَقْرَبِ صَدِيقٍ لَهُ،', 'In a conversation, the student is asked about his closest friend,'],
    ['وَمَا يُعْجِبُهُ فِي شَخْصِيَّتِهِ، وَكَيْفَ يَخْتَلِفُ أُسْلُوبُهُمَا فِي المَلَابِسِ.', 'what he likes about his personality, and how their clothing styles differ.'],
    ['يُجِيبُ بِجُمَلٍ مُتَّصِلَةٍ وَيُقَدِّمُ دَلِيلًا وَمُقَارَنَةً،', 'He answers in connected sentences and gives evidence and a comparison,'],
    ['ثُمَّ يَسْأَلُ المُحَاوِرَ سُؤَالًا تَابِعًا.', 'then asks the interviewer a follow-up question.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ شَخْصًا مُهِمًّا فِي حَيَاتِكَ.' },
      { route: 'develop', ar: 'كَيْفَ تَتَفَاهَمُ مَعَ أَصْدِقَائِكَ؟' },
      { route: 'develop', ar: 'مَا أُسْلُوبُكَ فِي المَلَابِسِ؟' },
      { route: 'stretch', ar: 'قَارِنْ بَيْنَكَ وَبَيْنَ شَخْصٍ آخَرَ.' },
    ],
    stems: [
      { route: 'core', ar: '______ مُهِمٌّ / مُهِمَّةٌ لِي لِأَنَّهُ / لِأَنَّهَا ______ .' },
      { route: 'develop', ar: 'أَتَفَاهَمُ مَعَ أَصْدِقَائِي لِأَنَّ ______ ؛ مَثَلًا ______ .' },
      { route: 'develop', ar: 'أُسْلُوبِي ______ ، بَيْنَمَا ______ .' },
      { route: 'stretch', ar: 'أَنَا أَكْثَرُ ______ مِنْ ______ ، وَلٰكِنَّ ______ . وَأَنْتَ؟' },
    ],
    modelEn: ['Describe your close friend.', 'He is friendly and honest; I trust him because he listens to me.'],
    notes: 'MAIN TASK OF THE LESSON (extend to 8–10 minutes). Pairs on the mic (or breakout rooms): A asks all four website prompts, B answers from cue words only, then swap. The listener must ask ONE follow-up per answer. Website model continues: A: كَيْفَ يَخْتَلِفُ أُسْلُوبُكُمَا؟ B: هُوَ أَكْثَرُ رَسْمِيَّةً مِنِّي، بَيْنَمَا أُفَضِّلُ الأُسْلُوبَ العَمَلِيَّ. (Website typo: أُسْلُبُكُمَا → أُسْلُوبُكُمَا.)',
  },
  write: {
    core: { amount: '4 Q + A', how: 'Write answers to four questions: direct answer + reason each.', task: 'Prepare cue cards: answer four conversation questions with a reason.' },
    develop: { amount: '6 Q + A', how: 'Answers with a reason and an example or comparison; add two follow-up questions.', task: 'Build developed answers and follow-ups.' },
    stretch: { amount: '100–120 words', how: 'Website task: a written rehearsal (questions + developed answers) — then reduce it to cue words. Do not memorise it.', task: 'Write, then reduce to cue words.' },
  },
  frames: {
    core: [
      { en: 'My friend … is … and …', ar: 'صَدِيقِي / صَدِيقَتِي ______ ______ وَ ______ .' },
      { en: 'I trust him / her because …', ar: 'أَثِقُ بِهِ / بِهَا لِأَنَّ ______ .' },
      { en: 'My style is …', ar: 'أُسْلُوبِي ______ .' },
      { en: 'And you?', ar: 'وَأَنْتَ؟ / وَأَنْتِ؟' },
      { en: 'Can you repeat the question?', ar: 'هَلْ يُمْكِنُكَ إِعَادَةُ السُّؤَالِ؟' },
    ],
    develop: [
      { en: 'For example, …', ar: 'مَثَلًا ، ______ .' },
      { en: 'He / she is more … than me.', ar: 'هُوَ / هِيَ أَكْثَرُ ______ مِنِّي.' },
      { en: '…, whereas I prefer …', ar: '______ ، بَيْنَمَا أُفَضِّلُ ______ .' },
      { en: 'What do you mean by …?', ar: 'مَاذَا تَقْصِدُ بِـ ______ ؟' },
      { en: 'I understand your view, but …', ar: 'أَفْهَمُ رَأْيَكَ، وَلٰكِنَّنِي أَرَى أَنَّ ______ .' },
    ],
    bank: ['وَدُودٌ', 'صَادِقٌ', 'أَثِقُ بِهِ', 'يَدْعَمُنِي', 'لِأَنَّ', 'مَثَلًا', 'أَكْثَرُ … مِنْ', 'بَيْنَمَا', 'وَأَنْتَ؟', 'لِمَاذَا؟', 'إِعَادَةُ السُّؤَالِ', 'مَاذَا تَقْصِدُ؟'],
  },
  stretch: [
    ['أَكْثَرُ اهْتِمَامًا بِالمَوْضَةِ', 'more interested in fashion'],
    ['الصِّدْقُ يَبْنِي الثِّقَةَ', 'honesty builds trust'],
    ['نَتَكَلَّمُ بِهُدُوءٍ وَنَتَصَالَحُ', 'we talk calmly and make up'],
    ['أَفْهَمُ رَأْيَكَ، وَلٰكِنَّ …', 'I understand your view, but …'],
    ['هَذَا سُؤَالٌ جَيِّدٌ! فِي رَأْيِي …', 'that’s a good question! In my opinion …'],
  ],
  modelEn: 'Q: Describe a close friend. A: My friend Omar is friendly and honest, and I trust him because he listens to me. Q: How do your styles differ? A: I prefer simple clothes, whereas he is more interested in fashion. Q: What is the most important quality in a friend? A: In my opinion, honesty is the most important quality because it builds trust. Q: Can you two disagree? A: Yes, but we talk calmly and make up.',
  find: ['a reason in each answer', 'a comparison', 'an opinion', 'the reciprocal “we” verbs'],
  modelNotes: 'Evidence: لِأَنَّهُ يَسْتَمِعُ / لِأَنَّهُ يَبْنِي · بَيْنَمَا هُوَ أَكْثَرُ اهْتِمَامًا · فِي رَأْيِي · نَتَكَلَّمُ … وَنَتَصَالَحُ. Remind Stretch: turn this into CUE WORDS (عُمَرُ · وَدُودٌ · يَسْتَمِعُ · مَوْضَة · صِدْق) and speak from them.',
  selfCheck: [
    { route: 'core', text: 'Every answer answers the question directly.' },
    { route: 'core', text: 'Every answer has a reason.' },
    { route: 'develop', text: 'I added an example or a comparison.' },
    { route: 'develop', text: 'I asked at least one follow-up question.' },
    { route: 'stretch', text: 'I spoke from cue words, not a script.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['نَصٌّ تَدْرِيبِيٌّ', 'a practice text'], ['لَا تَكْفِي', 'is not enough'], ['إِجَابَةُ', 'the answer'], ['تَبْدَأُ بِـ', 'starts with'], ['مُبَاشِرٍ', 'direct'],
    ['تُضِيفُ', 'adds'], ['وَصْفًا', 'a description'], ['عِنْدَمَا لَا تَفْهَمُ', 'when you don’t understand'], ['إِعَادَةُ السُّؤَالِ', 'repeating the question'], ['مَاذَا تَقْصِدُ بِـ', 'what do you mean by'],
  ],
  prep: {
    words: [['يَبْدُو / تَبْدُو', 'he / she seems', 'D2-L06'], ['لَهُ / لَهَا', 'he / she has', 'D2-L06'], ['الَّذِي / الَّتِي', 'who (m. / f.)', 'D2-L06'], ['يَرْتَدِي / تَرْتَدِي', 'he / she wears', 'D2-L03'], ['أُسْلُوبُهُ / أُسْلُوبُهَا', 'his / her style', 'D2-L04']],
    questionEn: 'Choose a photo of a person (family, a famous person, a character). Prepare cue words for their appearance, clothes and personality.',
    questionAr: 'صِفْ شَخْصًا فِي صُورَةٍ.',
    homework: {
      core: 'Write cue cards (3–5 words) for each of the four conversation questions.',
      develop: 'Record yourself answering two questions for 30 seconds each.',
      stretch: 'Website writing task: a 100–120-word rehearsal, then reduce it to cue words.',
    },
    wordsSource: 'D2-L10 is a speaking lesson describing people and style: these five structures (D2-L03, L04, L06) are its building blocks.',
  },
  remember: 'Remember: answer → reason → example — then “And you?”',
});

module.exports = { meta, slides };
