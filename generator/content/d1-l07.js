'use strict';
/* D1-L07 · Asking About Daily Routine — What Do You Do? — website: Pathways › Development › D1 › D1-L07 (question words, you m./f. forms تَفْعَلُ / تَفْعَلِينَ, answer shapes, follow-up questions). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D1')({
  n: 7, fileTitle: 'Asking_About_Routine', chip: 'What Do You Do?',
  title: 'Asking About Daily Routine — What Do You Do?', arabic: 'السُّؤَالُ عَنِ الرُّوتِينِ اليَوْمِيِّ — مَاذَا تَفْعَلُ؟',
  focus: 'Ask routine questions to a boy (تَفْعَلُ), a girl (تَفْعَلِينَ) or a group (تَفْعَلُونَ), match each question word to the right answer, and keep an interview going with follow-up questions.',
  icon: 'FaComments', iconSet: 'fa6',
});

// masculine question card → to a girl / to a group forms
const F = ['مَاذَا تَفْعَلِينَ؟', 'مَتَى تَسْتَيْقِظِينَ؟', 'كَيْفَ تَذْهَبِينَ؟', 'كَمْ مَرَّةً تَتَمَرَّنِينَ؟', 'لِمَاذَا تُفَضِّلِينَ ذٰلِكَ؟', 'هَلْ تُسَاعِدِينَ أُسْرَتَكِ؟'];
const PL = ['تَفْعَلُونَ', 'تَسْتَيْقِظُونَ', 'تَذْهَبُونَ', 'تَتَمَرَّنُونَ', 'تُفَضِّلُونَ', 'تُسَاعِدُونَ'];
const FV = F.map((x) => x.split(' ').find((w) => /ينَ/.test(w)));
const forms = {};
D.site('D1-L07').vocab[1].items.forEach((it, i) => {
  forms[it.ar] = { tag: 'boy · girl · group', forms: [{ l: 'group', ar: PL[i] }, { l: 'girl', ar: FV[i] }, { l: 'boy', ar: it.ar.split(' ').find((w) => /^تُ?[َُ]/.test(w)) || it.ar }] };
});

const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D1-L07', {
  support: `• Core: FIVE questions learnt as chunks (مَاذَا تَفْعَلُ؟ مَتَى تَسْتَيْقِظُ؟ كَيْفَ تَذْهَبُ؟ كَمْ مَرَّةً؟ لِمَاذَا؟) + the girl-form ending -īna. Core students may read their questions from the frames slide during the interview.
• Develop: choose the form by the LISTENER (boy / girl / group) and ask one follow-up. Stretch: sustain a five-question interview and turn the notes into a he/she profile (recycles D1-L06).
• Online tip: pair students in breakout rooms; one interviews, one answers, then swap. The teacher visits rooms and listens for -īna.
• Urdu bridge: کیوں؟ is لِمَاذَا؟ — but کب؟ / کیسے؟ are not cognates; use the Arabic question words as new words. Cognates: وقت، مرتبہ (مَرَّةً)، سبب (reason), جواب، سوال.`,
  teach: 'Question words → the right answer; boy, girl or group.',
  wedo: 'Statement → question, sort questions, fix and listen.',
  next: { nextCode: 'D1-L08', nextTitle: 'Weekend Routine — What Do You Do at the Weekend?', nextAr: 'رُوتِينُ عُطْلَةِ نِهَايَةِ الأُسْبُوعِ' },
  flexGroups: [2, 3],
  doNow: {
    questions: [
      q('What does مَعَ مَنْ؟ mean?', ['with whom?', 'where?', 'why?'], 'Prepared at home.'),
      q('What does كَمْ مَرَّةً؟ mean?', ['how often?', 'what time?', 'how?'], 'Prepared at home.'),
      q('Choose “she prepares her bag”.', ['تُحَضِّرُ حَقِيبَتَهَا', 'يُحَضِّرُ حَقِيبَتَهُ', 'تُحَضِّرُ حَقِيبَتَهُ'], 'D1-L06: she → tu- + -hā.'),
      q('Choose the accurate sentence.', ['يَسْتَيْقِظُ عَلِيٌّ مُبَكِّرًا، بَيْنَمَا تَسْتَيْقِظُ أُخْتُهُ مُتَأَخِّرَةً.', 'يَسْتَيْقِظُ عَلِيٌّ مُبَكِّرًا، بَيْنَمَا يَسْتَيْقِظُ أُخْتُهُ مُتَأَخِّرَةً.', 'تَسْتَيْقِظُ عَلِيٌّ مُبَكِّرًا، بَيْنَمَا تَسْتَيْقِظُ أُخْتُهُ مُتَأَخِّرَةً.'], 'D1-L06: each verb matches its own subject.'),
      q('Which answers “for how long?”', ['لِمُدَّةِ سَاعَةٍ', 'فِي السَّاعَةِ الخَامِسَةِ', 'مَرَّتَيْنِ'], 'D1-L05 duration.'),
    ],
    keyIdea: { text: 'The question word decides the answer. The ending decides who you are asking.', ar: '{k|مَتَى} تَسْتَيْقِظُ؟ (boy)  ·  {k|مَتَى} تَسْتَيْقِظِ{e|ينَ}؟ (girl)' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home. Questions 3–5 retrieve D1-L06 (he/she) and D1-L05 (duration).',
  },
  routes: {
    core: ['I can ask five routine questions.', 'I can answer with a time or a frequency.'],
    develop: ['I can ask a boy (تَفْعَلُ) or a girl (تَفْعَلِينَ) accurately.', 'I can ask one follow-up question.'],
    stretch: ['I can sustain a five-question interview.', 'I can report the interview as a 100–120-word profile.'],
  },
  bridge: [
    { ar: 'لِمَاذَا؟', urdu: 'کیوں؟', tr: 'kyūn', en: 'why? (meaning only)' },
    { ar: 'مَرَّةً', urdu: 'مرتبہ', tr: 'martaba', en: 'time, occasion' },
    { ar: 'سُؤَالٌ', urdu: 'سوال', tr: 'sawāl', en: 'question' },
    { ar: 'جَوَابٌ / إِجَابَةٌ', urdu: 'جواب', tr: 'jawāb', en: 'answer' },
    { ar: 'السَّبَبُ', urdu: 'سبب', tr: 'sabab', en: 'reason' },
  ],
  bridgeNotes: 'URDU BRIDGE: سوال and جواب are Arabic words (سُؤَالٌ، جَوَابٌ / إِجَابَةٌ). مرتبہ (ایک مرتبہ = once) → مَرَّةً، كَمْ مَرَّةً؟ سبب (reason) → لِأَنَّ gives the سبب. Urdu question words (کیوں، کب، کیسے) are NOT Arabic — teach مَتَى، كَيْفَ، لِمَاذَا as new words.',
  core: ['مَاذَا؟', 'مَتَى؟', 'كَمْ مَرَّةً؟', 'كَيْفَ؟', 'لِمَاذَا؟', 'مَعَ مَنْ؟', 'مَاذَا تَفْعَلُ؟', 'مَتَى تَسْتَيْقِظُ؟', 'كَيْفَ تَذْهَبُ؟'],
  forms,
  vocabNotes: { 0: 'Mime each question word: مَتَى (tap the wrist), كَيْفَ (open hands), لِمَاذَا (shrug), كَمْ مَرَّةً (count on fingers), مَعَ مَنْ (point to a partner).', 1: 'Each card shows the girl-form (-īna) and the group-form (-ūna). The questions to a girl (group 3) are the same list with -īna: FLEX.' },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · who are you asking? (website rules)', title: 'Asking a boy, a girl or a group', ar: 'أَنْتَ · أَنْتِ · أَنْتُمْ',
      cols: [{ label: 'To a boy', w: 3.2, size: 26 }, { label: 'To a girl', w: 3.4, size: 26 }, { label: 'To a group', w: 3.3, size: 26 }, { label: 'Meaning', w: 2.43 }],
      rows: [
        { core: true, cells: [P('مَاذَا تَفْعَلُ؟', 'أَنْتَ'), P('مَاذَا تَفْعَلِ{e|ينَ}؟', 'أَنْتِ'), P('مَاذَا تَفْعَلُ{k|ونَ}؟', 'أَنْتُمْ'), 'What do you do?'] },
        { core: true, cells: [{ ar: 'مَتَى تَسْتَيْقِظُ؟' }, { ar: 'مَتَى تَسْتَيْقِظِ{e|ينَ}؟' }, { ar: 'مَتَى تَسْتَيْقِظُ{k|ونَ}؟' }, 'When do you wake up?'] },
        { cells: [{ ar: 'كَيْفَ تَذْهَبُ؟' }, { ar: 'كَيْفَ تَذْهَبِ{e|ينَ}؟' }, { ar: 'كَيْفَ تَذْهَبُ{k|ونَ}؟' }, 'How do you go?'] },
        { cells: [{ ar: 'هَلْ تُسَاعِدُ أُسْرَتَ{w|كَ}؟' }, { ar: 'هَلْ تُسَاعِدِ{e|ينَ} أُسْرَتَ{e|كِ}؟' }, { ar: 'هَلْ تُسَاعِدُ{k|ونَ} أُسْرَتَ{k|كُمْ}؟' }, 'Do you help your family?'] },
      ],
      foot: 'Choose by the LISTENER, not by yourself: a boy asking a girl still says -īna.',
      notes: `GRAMMAR PART 1 — website rules “Ask a masculine listener” (no ـين) and “Ask a feminine listener” (add ـين). The group form (-ūna) is added for online classes, where teachers often ask the whole class.
Website warning: “Do not add ـين to a masculine question, and do not remove it from a feminine question.” Row 4: the ending on the NOUN changes too (أُسْرَتَكَ / أُسْرَتَكِ / أُسْرَتَكُمْ).
Quick-fire: the teacher names a student; the class asks them مَتَى تَسْتَيْقِظُ / تَسْتَيْقِظِينَ؟ — boy or girl form.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · match the question word to the answer (website table)', title: 'Every question word wants a different answer', ar: 'السُّؤَالُ وَالجَوَابُ',
      cols: [{ label: 'Question word', w: 3.0, size: 28 }, { label: 'Answer shape', w: 3.4, size: 24 }, { label: 'Example answer', w: 3.6, size: 20 }, { label: 'Asks for', w: 2.33 }],
      rows: [
        { core: true, cells: [P('مَتَى؟', 'when?'), { ar: 'فِي السَّاعَةِ …' }, P('فِي السَّادِسَةِ وَالنِّصْفِ.', 'at half past six'), 'a time'] },
        { core: true, cells: [P('كَمْ مَرَّةً؟', 'how often?'), { ar: 'مَرَّةً / مَرَّتَيْنِ …' }, P('مَرَّتَيْنِ فِي الأُسْبُوعِ.', 'twice a week'), 'frequency'] },
        { core: true, cells: [P('كَيْفَ؟', 'how?'), { ar: 'بِـ … / مَشْيًا' }, P('بِالحَافِلَةِ.', 'by bus'), 'a method'] },
        { core: true, cells: [P('لِمَاذَا؟', 'why?'), { ar: 'لِأَنَّ …' }, P('لِأَنَّ المَدْرَسَةَ بَعِيدَةٌ.', 'because school is far'), 'a reason'] },
        { cells: [P('كَمْ مِنَ الوَقْتِ؟', 'how long?'), { ar: 'لِمُدَّةِ …' }, P('لِمُدَّةِ سَاعَةٍ.', 'for an hour'), 'duration'] },
      ],
      foot: 'Answer in a full sentence: “I train twice a week because …” — not just “twice”.',
      notes: `GRAMMAR PART 2 — website rule “Match the question word to the answer” and the website table (Information · Question · Answer shape). Row 5 recycles D1-L05 (لِمُدَّةِ).
Website common error: لِمَاذَا؟ — فِي السَّابِعَةِ ✗ (a time does not answer “why”).
Quick-fire: the teacher gives an ANSWER (مَرَّتَيْنِ / لِأَنَّنِي مُتْعَبٌ / بِالسَّيَّارَةِ); students type the question word in the chat.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 3 · build a follow-up from the answer (website) · Develop / Stretch', title: 'Listen, pick one detail, ask again', ar: 'سُؤَالُ المُتَابَعَةِ',
      cards: [
        { chip: 'HOW OFTEN? · DEVELOP', color: '1D5FBF', head: 'كَمْ مَرَّةً؟', big: 'أَتَمَرَّنُ بَعْدَ المَدْرَسَةِ. — كَمْ مَرَّةً؟', en: 'I train after school. — How often?', clue: 'Detail: frequency.' },
        { chip: 'WHY? · DEVELOP', color: '6B4C9A', head: 'لِمَاذَا؟', big: 'أَذْهَبُ بِالحَافِلَةِ. — لِمَاذَا لَا تَمْشِي؟', en: 'I go by bus. — Why don’t you walk?', clue: 'Detail: reason.' },
        { chip: 'EVALUATE · STRETCH', color: 'B83227', head: 'مَا أَصْعَبُ …؟', big: 'رُوتِينِي مُزْدَحِمٌ. — مَا أَصْعَبُ جُزْءٍ فِيهِ؟', en: 'My routine is busy. — What is the hardest part?', clue: 'Detail: opinion.' },
      ],
      error: { text: 'Website tip: a follow-up stays on the SAME topic.', pairs: [['أَقْرَأُ كُلَّ مَسَاءٍ. — مَاذَا تَقْرَأُ؟', 'أَقْرَأُ كُلَّ مَسَاءٍ. — أَيْنَ المَحَطَّةُ؟']] },
      notes: `GRAMMAR PART 3 — website rule “Build a follow-up from the answer”: listen to the answer, select one new detail, then ask for time, frequency, cause or evaluation.
Useful interview phrases (website group 4, FLEX): أَخْبِرْنِي / أَخْبِرِينِي أَكْثَرَ (tell me more), مَاذَا تَقْصِدُ / تَقْصِدِينَ؟ (what do you mean?).`,
    },
  ],
  quick: [0, 1, 2, 3],
  ido: {
    title: 'Watch me interview a student',
    steps: [
      { head: 'Fact', ar: '{k|مَتَى} تَسْتَيْقِظِ{e|ينَ}؟ — أَسْتَيْقِظُ فِي السَّادِسَةِ.', think: 'A girl → -īna. When → a time.' },
      { head: 'Method', ar: '{k|كَيْفَ} تَذْهَبِ{e|ينَ} إِلَى المَدْرَسَةِ؟ — مَشْيًا.', think: 'How → a method.' },
      { head: 'Follow-up', ar: '{k|لِمَاذَا} تَمْشِ{e|ينَ}؟ — لِأَنَّ المَدْرَسَةَ قَرِيبَةٌ.', think: 'One detail → why?' },
      { head: 'Report', ar: 'تَسْتَيْقِظُ فِي السَّادِسَةِ وَتَمْشِي لِأَنَّ مَدْرَسَتَ{w|هَا} قَرِيبَةٌ.', think: 'Profile: you → she (D1-L06).' },
    ],
    legend: ['k', 'e', 'w'], legendLabels: { k: 'QUESTION WORD', e: 'GIRL ENDING', w: 'REPORT: HER' },
    model: 'أ: {k|مَتَى} تَسْتَيْقِظِ{e|ينَ}؟  ب: أَسْتَيْقِظُ فِي السَّادِسَةِ.  أ: {k|كَيْفَ} تَذْهَبِ{e|ينَ} إِلَى المَدْرَسَةِ؟  ب: أَمْشِي.  أ: {k|لِمَاذَا}؟  ب: لِأَنَّ المَدْرَسَةَ قَرِيبَةٌ.  ← تَسْتَيْقِظُ سَلْمَى فِي السَّادِسَةِ، وَتَمْشِي إِلَى المَدْرَسَةِ لِأَنَّ مَدْرَسَتَ{w|هَا} قَرِيبَةٌ.',
    modelEn: 'A: When do you wake up? B: I wake up at six. A: How do you go to school? B: I walk. A: Why? B: Because school is near. → Salma wakes up at six and walks to school because her school is near.',
    notes: 'I DO (3 min) — the teacher interviews a volunteer girl (or reads both parts), with a think-aloud, then turns the answers into a she-profile. Repeat quickly with a boy to show the ending disappear.',
  },
  wedoSlides: [
    {
      type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · turn the website picture-game sentences into questions', title: 'Statement → question', ar: 'حَوِّلْ إِلَى سُؤَالٍ',
      seed: 7,
      questions: [
        q('Ask a GIRL about this.', ['مَتَى تَسْتَيْقِظِينَ؟', 'مَتَى تَسْتَيْقِظُ؟', 'لِمَاذَا تَسْتَيْقِظِينَ؟'], 'Time → مَتَى; girl → -īna.', { ar: 'أَسْتَيْقِظُ فِي السَّادِسَةِ.' }),
        q('Ask a BOY about this.', ['كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟', 'كَيْفَ تَذْهَبِينَ إِلَى المَدْرَسَةِ؟', 'مَتَى تَذْهَبُ إِلَى المَدْرَسَةِ؟'], 'Method → كَيْفَ; boy → no ending.', { ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ.' }),
        q('Ask a GIRL about this.', ['كَمْ مَرَّةً تَدْرُسِينَ بَعْدَ المَدْرَسَةِ؟', 'كَمْ مَرَّةً تَدْرُسُ بَعْدَ المَدْرَسَةِ؟', 'مَعَ مَنْ تَدْرُسِينَ؟'], 'Frequency → كَمْ مَرَّةً.', { ar: 'أَدْرُسُ بَعْدَ المَدْرَسَةِ ثَلَاثَ مَرَّاتٍ.' }),
        q('Ask a BOY about this.', ['لِمَاذَا تَنَامُ مُبَكِّرًا؟', 'لِمَاذَا تَنَامِينَ مُبَكِّرًا؟', 'أَيْنَ تَنَامُ؟'], 'Reason → لِمَاذَا.', { ar: 'أَنَامُ مُبَكِّرًا لِأَنَّنِي مُتْعَبٌ.' }),
      ],
      side: { kind: 'core', label: 'CORE', text: 'Step 1: which information? (time, how, how often, why)\nStep 2: boy or girl? Girl → add -īna.' },
      answerSlide: { min: 0, eyebrow: 'We do · statement → question answers', title: 'Statement → question: answers', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO — built from the website picture-game sentences (أَسْتَيْقِظُ صَبَاحًا، أَذْهَبُ إِلَى المَدْرَسَةِ، أَدْرُسُ بَعْدَ المَدْرَسَةِ، أَنَامُ لَيْلًا) with an added detail. Two decisions each time: the question word, then the listener.',
      answerNotes: 'Reveal; then a volunteer asks the question to a classmate on the mic and gets a real answer.',
    },
  ],
  sorterCats: ['Time / duration', 'Frequency', 'Reason / evaluation'],
  hints: ['This question is to a BOY. Remove what?', 'This question is to a GIRL: verb AND ending must match.', 'A time answers which question word?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 4.\nListen for: مَتَى · مَرَّتَيْنِ · قَبْلَ أَنْ أَنَامَ.',
  listenRoutes: 'Core: questions 1, 3 and 4. Develop / Stretch: all 5.',
  gloss: [
    ['المُذِيعَةُ: مَتَى تَسْتَيْقِظُ يَا عُمَرُ؟ عُمَرُ: أَسْتَيْقِظُ فِي السَّادِسَةِ وَالنِّصْفِ.', 'Presenter: When do you wake up, Omar? Omar: I wake up at half past six.'],
    ['المُذِيعَةُ: وَكَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟ عُمَرُ: أَسْتَقِلُّ الحَافِلَةَ لِأَنَّ المَدْرَسَةَ بَعِيدَةٌ.', 'And how do you go to school? — I take the bus because school is far.'],
    ['المُذِيعَةُ: كَمْ مَرَّةً تَتَمَرَّنُ؟ عُمَرُ: مَرَّتَيْنِ فِي الأُسْبُوعِ، يَوْمَيِ الثُّلَاثَاءِ وَالخَمِيسِ.', 'How often do you train? — Twice a week, on Tuesdays and Thursdays.'],
    ['المُذِيعَةُ: مَاذَا تَفْعَلُ فِي المَسَاءِ؟ عُمَرُ: أُكْمِلُ وَاجِبِي، ثُمَّ أَقْرَأُ قَبْلَ أَنْ أَنَامَ.', 'What do you do in the evening? — I finish my homework, then I read before I sleep.'],
    ['المُذِيعَةُ: مَا الجُزْءُ الَّذِي تُرِيدُ أَنْ تُحَسِّنَهُ؟ عُمَرُ: أُرِيدُ أَنْ أَقْضِيَ وَقْتًا أَقَلَّ عَلَى هَاتِفِي.', 'Which part do you want to improve? — I want to spend less time on my phone.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'اِسْأَلْ عَنْ وَقْتِ الاِسْتِيقَاظِ وَعَنِ السَّفَرِ إِلَى المَدْرَسَةِ.' },
      { route: 'develop', ar: 'اِسْأَلْ عَنِ التَّكْرَارِ.' },
      { route: 'develop', ar: 'اِسْأَلْ عَنْ رُوتِينِ المَسَاءِ.' },
      { route: 'stretch', ar: 'اِسْأَلْ سُؤَالَ مُتَابَعَةٍ عَنِ السَّبَبِ أَوِ التَّحْسِينِ.' },
    ],
    stems: [
      { route: 'core', ar: 'مَتَى تَسْتَيْقِظُ / تَسْتَيْقِظِينَ؟ كَيْفَ تَذْهَبُ / تَذْهَبِينَ؟' },
      { route: 'develop', ar: 'كَمْ مَرَّةً ______ فِي الأُسْبُوعِ؟' },
      { route: 'stretch', ar: 'لِمَاذَا ______ ؟ مَا أَصْعَبُ جُزْءٍ فِي ______ ؟' },
      { route: 'sum', ar: 'يَسْتَيْقِظُ / تَسْتَيْقِظُ ______ فِي ______ .' },
    ],
    modelEn: ['How often do you train? (to a girl)', 'I train twice a week.'],
    notes: 'Website prompts (1 and 2 merged for Core). Breakout rooms in pairs: A interviews B (2 min), then swap. Summarise: each student reports ONE answer in the third person (“he / she …”) — the bridge to the writing task.',
  },
  write: {
    core: { amount: '5 questions + answers', how: 'Write five questions to a boy OR a girl and your partner’s answers (use the Core frames).' },
    develop: { amount: '8 sentences', how: 'Four questions, four answers with time, frequency or a reason, plus one follow-up question.' },
    stretch: { amount: '100–120 words', how: 'Website task: a profile from the interview — he/she forms, time, frequency, before/after, a reason and your judgement.' },
  },
  frames: {
    core: [
      { en: 'When do you wake up? (boy / girl)', ar: 'مَتَى تَسْتَيْقِظُ؟ / مَتَى تَسْتَيْقِظِينَ؟' },
      { en: 'How do you go to school?', ar: 'كَيْفَ تَذْهَبُ / تَذْهَبِينَ إِلَى المَدْرَسَةِ؟' },
      { en: 'How often do you train?', ar: 'كَمْ مَرَّةً تَتَمَرَّنُ / تَتَمَرَّنِينَ؟' },
      { en: 'What do you do in the evening?', ar: 'مَاذَا تَفْعَلُ / تَفْعَلِينَ فِي المَسَاءِ؟' },
      { en: 'Why?', ar: 'لِمَاذَا؟ — لِأَنَّ ______ .' },
    ],
    develop: [
      { en: 'Tell me more (to a boy / girl).', ar: 'أَخْبِرْنِي / أَخْبِرِينِي أَكْثَرَ.' },
      { en: 'With whom do you …?', ar: 'مَعَ مَنْ ______ ؟' },
      { en: 'How much time do you spend on …?', ar: 'كَمْ مِنَ الوَقْتِ تَقْضِي فِي ______ ؟' },
      { en: 'I asked my friend about …', ar: 'سَأَلْتُ صَدِيقِي / صَدِيقَتِي عَنْ ______ .' },
      { en: 'He / she said that …', ar: 'قَالَ إِنَّهُ / قَالَتْ إِنَّهَا ______ .' },
    ],
    bank: ['مَاذَا', 'مَتَى', 'كَيْفَ', 'كَمْ مَرَّةً', 'لِمَاذَا', 'مَعَ مَنْ', 'أَيْنَ', 'تَفْعَلُ', 'تَفْعَلِينَ', 'تَسْتَيْقِظِينَ', 'لِأَنَّ', 'أَخْبِرْنِي أَكْثَرَ'],
  },
  stretch: [
    ['سَأَلْتُ زَمِيلَتِي عَنْ رُوتِينِهَا', 'I asked my classmate about her routine'],
    ['فَأَجَابَتْ أَنَّهَا …', 'and she answered that she …'],
    ['عِنْدَمَا سَأَلْتُهُ عَنِ الرِّيَاضَةِ', 'when I asked him about sport'],
    ['أَخْبَرَنِي أَنَّهُ …', 'he told me that he …'],
    ['لِأَنَّ إِجَابَاتِهَا كَانَتْ دَقِيقَةً', 'because her answers were precise'],
  ],
  modelEn: 'I asked my friend about his daily routine. First I asked him when he wakes up, and he said that he wakes up at half past six. He goes to school by bus because it is far from his house. When I asked him about sport, he told me that he trains three times a week. After school he finishes his homework before he goes out with his friends. In the evening he prepares his bag and reads a little. He said that he wants to sleep early. In my opinion, his routine is active, but he needs more rest.',
  find: ['three reporting verbs (asked, said, told)', 'four he-verbs', 'a reason with لِأَنَّ', 'the judgement'],
  modelNotes: 'Evidence: سَأَلْتُ / سَأَلْتُهُ · قَالَ إِنَّهُ · أَخْبَرَنِي أَنَّهُ · يَسْتَيْقِظُ، يَذْهَبُ، يَتَمَرَّنُ، يُكْمِلُ، يُحَضِّرُ · لِأَنَّهَا بَعِيدَةٌ · رُوتِينُهُ نَشِيطٌ، وَلٰكِنَّهُ يَحْتَاجُ إِلَى رَاحَةٍ أَكْثَرَ.',
  selfCheck: [
    { route: 'core', text: 'I used five different question words.' },
    { route: 'core', text: 'My answers fit the question word.' },
    { route: 'develop', text: 'Questions to a girl end in -īna.' },
    { route: 'develop', text: 'I asked at least one follow-up question.' },
    { route: 'stretch', text: 'My profile reports the answers with he/she.' },
  ],
  exit: [0, 2, 4],
  glossary: [
    ['سَأَلْتُ زَمِيلَتِي', 'I asked my classmate'], ['قُلْتُ لَهَا', 'I said to her'], ['فَأَجَابَتْ أَنَّهَا', 'and she answered that she'], ['فَقَالَتْ إِنَّهَا', 'and she said that she'], ['تَمْشِي مَعَ أُخْتِهَا', 'she walks with her sister'],
    ['تُفَضِّلُ', 'she prefers'], ['التَّرْكِيزِ', 'concentration'], ['أَوْضَحَتْ', 'she explained'], ['دَقِيقَةً', 'precise'], ['مُتَوَازِنَةً', 'balanced'],
  ],
  prep: {
    words: [['عُطْلَةُ نِهَايَةِ الأُسْبُوعِ', 'the weekend (break)', ''], ['أَزُورُ أَقَارِبِي', 'I visit my relatives', 'relative: قَرِيبٌ'], ['أَلْتَقِي بِأَصْدِقَائِي', 'I meet my friends', 'friend: صَدِيقٌ / صَدِيقَةٌ'], ['أَتَسَوَّقُ', 'I go shopping', 'he: يَتَسَوَّقُ'], ['وَقْتُ الفَرَاغِ', 'free time', '']],
    questionEn: 'How is your weekend different from a school day? Think of three differences.',
    questionAr: 'مَاذَا تَفْعَلُ فِي نِهَايَةِ الأُسْبُوعِ؟',
    homework: {
      core: 'Website D1-L07: the vocabulary tab (questions to a boy / a girl) and the sorter “Interview producer”.',
      develop: 'Interview a family member (4 questions + 1 follow-up) and write the answers.',
      stretch: 'Website writing task: a 100–120-word profile from the interview.',
    },
    wordsSource: 'The five words come from the website D1-L08 vocabulary (weekend time and weekend activities).',
  },
  remember: 'Remember: the listener decides the ending — girl → -īna.',
});

module.exports = { meta, slides };
