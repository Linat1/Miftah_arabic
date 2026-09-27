'use strict';
/* F5-L11 · Speaking and Writing About Food and Health — website: Pathways › Foundation › F5 › F5-L11 (synthesis: connectives for a paragraph, developed answers, speaking repair, the plan → draft → check routine, the 80–100-word article طَعَامِي وَصِحَّتِي). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F5')({
  n: 11, fileTitle: 'Speaking_and_Writing_About_Food_and_Health', chip: 'Speak and Write',
  title: 'Speaking and Writing About Food and Health', arabic: 'التَّحَدُّثُ وَالكِتَابَةُ عَنِ الطَّعَامِ وَالصِّحَّةِ',
  focus: 'Bring the whole of F5 together: answer six topic questions with developed answers, then plan, write and check an 80–100-word article: طَعَامِي وَصِحَّتِي.',
  icon: 'FaPenToSquare', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('F5-L11', {
  support: `• Core: the five-box planner and sentence starters → 60–70 accurate words.
• Develop: 80–100 words and six topic questions answered with reasons.
• Stretch: write independently, then improve range: a comparison (أَكْثَرَ مِنْ), a purpose phrase (لِلْحِفَاظِ عَلَى صِحَّتِي) and a precise target.
• Website: “A developed answer normally contains at least two pieces of information: an answer plus a reason, example, comparison or time detail.”
• Website writing routine: content → organisation → accuracy. Check in this order: verbs → gender → reasons → connectives → spelling.
• Keep today’s article and speaking notes: they are the evidence students bring to F5-L12 (unit assessment).`,
  teach: 'Connectives, repair phrases and writing checks, then the five-part article plan.',
  wedo: 'Sort plan / draft / check, fix three F5 errors and listen to Amal’s topic conversation.',
  next: { nextCode: 'F5-L12', nextTitle: 'Review and Unit Assessment', nextAr: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ' },
  doNow: {
    questions: [
      q('What does فِقْرَةٌ mean?', ['a paragraph', 'a plan', 'a conclusion'], 'Prepared at home (F5-L10).'),
      q('What does أَدَوَاتُ الرَّبْطِ mean?', ['connectives', 'an introduction', 'a word count'], 'Prepared at home (F5-L10).'),
      q('Which gives the strongest advice?', ['يَجِبُ أَنْ', 'مِنَ الأَفْضَلِ أَنْ', 'أُحِبُّ أَنْ'], 'F5-L10: yajibu an is strong.'),
      q('Which connective gives a result?', ['لِذَلِكَ', 'لِأَنَّ', 'أَمْ'], 'F5-L10: li-dhālika = so / therefore.'),
      q('Complete: أُحِبُّ السَّلَطَةَ ____ صِحِّيَّةٌ.', ['لِأَنَّهَا', 'لِأَنَّهُ', 'ثُمَّ'], 'F5-L04: salad is feminine.'),
    ],
    keyIdea: { text: 'A developed answer = answer + reason, example, comparison or time. A list is not a paragraph.', ar: 'أُحِبُّ السَّمَكَ {k|لِأَنَّهُ} لَذِيذٌ، وَآكُلُهُ مَعَ الأَرُزِّ.' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F5-L10. Questions 3–5 retrieve F5-L10 (advice, result) and F5-L04 (reason agreement).',
  },
  routes: {
    core: ['I can answer six questions with one detail each.', 'I can write 60–70 words from the planner.'],
    develop: ['I can give developed answers with reasons.', 'I can write 80–100 words with four connectives.'],
    stretch: ['I can add comparison, purpose and a precise target.', 'I can find and fix my most common F5 error.'],
  },
  bridge: [
    { ar: 'مِثَالٌ', urdu: 'مثال', tr: 'misāl', en: 'example' },
    { ar: 'خُطَّةٌ', urdu: 'خط', tr: 'khat', en: 'Urdu: a letter / line · Arabic: a plan' },
    { ar: 'تَصْحِيحٌ', urdu: 'تصحیح', tr: 'tas-hīh', en: 'correction' },
    { ar: 'فِكْرَةٌ', urdu: 'فکر', tr: 'fikr', en: 'worry → an idea' },
    { ar: 'مُرَاجَعَةٌ', urdu: 'رجوع', tr: 'rujūʿ', en: 'returning → review' },
  ],
  bridgeNotes: 'URDU BRIDGE: مثال and تصحیح are identical. فکر (Urdu: worry, thought) → فِكْرَةٌ (an idea). خط (Urdu: a letter, a line) → خُطَّةٌ (a plan — “lines” drawn in advance). رجوع (returning, turning back) → مُرَاجَعَةٌ (review: going back over your work).',
  core: ['أَوَّلًا', 'ثُمَّ', 'بَعْدَ ذٰلِكَ', 'أَيْضًا', 'وَلٰكِنْ / لٰكِنَّ', 'لِأَنَّ', 'لِذٰلِكَ', 'أَخِيرًا', 'فِي رَأْيِي', 'مَثَلًا', 'مِنْ فَضْلِكَ، أَعِدِ السُّؤَالَ.', 'دَعْنِي أُفَكِّرُ.'],
  vocabSlides: 3,
  vocabNotes: {
    0: 'Connectives by job: sequence (أَوَّلًا، ثُمَّ، بَعْدَ ذَلِكَ، أَخِيرًا) · add (أَيْضًا) · contrast (وَلَكِنْ) · reason (لِأَنَّ) · result (لِذَلِكَ).',
    1: 'Speaking repair keeps a conversation alive (F4-L10): أَعِدِ السُّؤَالَ، مِنْ فَضْلِكَ · دَعْنِي أُفَكِّرُ (let me think) — use it instead of silence.',
    2: 'FLEX: writing-check words. The website checking routine: verbs → gender → reasons → connectives → spelling.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · the article plan (website reading: model article plan)', title: 'My food and my health: five boxes', ar: 'خُطَّةُ المَقَالِ',
      cols: [{ label: 'Box', w: 3.0 }, { label: 'Model sentence', w: 6.4, size: 22 }, { label: 'F5 lesson', w: 2.93 }],
      rows: [
        { core: true, cells: ['1 · meals', P('عَادَةً أَتَنَاوَلُ الفُطُورَ فِي السَّاعَةِ السَّابِعَةِ، وَآكُلُ الخُبْزَ وَالجُبْنَ.', ''), 'L01–L02'] },
        { core: true, cells: ['2 · favourite + reason', P('أُفَضِّلُ السَّمَكَ {m|أَكْثَرَ مِنَ} اللَّحْمِ {k|لِأَنَّهُ} لَذِيذٌ وَمُفِيدٌ.', ''), 'L03–L04'] },
        { cells: ['3 · restaurant', P('أَحْيَانًا أَذْهَبُ إِلَى مَطْعَمٍ، وَأَطْلُبُ الحَسَاءَ وَالسَّلَطَةَ.', ''), 'L05–L06'] },
        { core: true, cells: ['4 · healthy habits', P('{w|لِلْحِفَاظِ عَلَى صِحَّتِي}، أَشْرَبُ مَاءً كَافِيًا وَأُمَارِسُ الرِّيَاضَةَ.', ''), 'L07–L10'] },
        { cells: ['5 · goal', P('{e|وَلَكِنِّي} أَنَامُ مُتَأَخِّرًا أَحْيَانًا؛ {k|لِذَلِكَ} هَدَفِي أَنْ أَنَامَ مُبَكِّرًا.', ''), 'L10'] },
      ],
      ltr: true,
      foot: 'Website: “the paragraph must include examples and connectives — a list of words is not enough.”',
      notes: `GRAMMAR PART 1 — the website “Model article plan” (reading section): title طَعَامِي وَصِحَّتِي · idea 1 meals on a normal day · idea 2 favourite food and the reason · idea 3 healthy habits and one habit to improve · conclusion: advice and a personal goal. The model sentences are the website’s full-mark article, one per box.
Core students write ONE sentence per box (≈ 60–70 words with the frames).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · connectives with a real job (website rules)', title: 'Sequence · add · contrast · reason', ar: 'أَدَوَاتُ الرَّبْطِ',
      cards: [
        { chip: 'SEQUENCE', color: '1D5FBF', head: 'أَوَّلًا · ثُمَّ · أَخِيرًا', big: 'أَوَّلًا أَتَنَاوَلُ الفُطُورَ، ثُمَّ أَشْرَبُ المَاءَ.', en: 'First I have breakfast, then I drink water.', clue: 'Order of events.' },
        { chip: 'CONTRAST', color: 'C0386B', head: 'وَلَكِنْ', big: 'أُحِبُّ الحَلْوَيَاتِ، وَلَكِنْ لَا آكُلُهَا كَثِيرًا.', en: 'I like sweets, but I don’t eat them much.', clue: 'The second idea differs.' },
        { chip: 'OPINION + REASON', color: '1E7B4F', head: 'رَأْيٌ + لِأَنَّ', big: 'أُفَضِّلُ الطَّعَامَ المَنْزِلِيَّ لِأَنَّهُ طَازَجٌ وَصِحِّيٌّ.', en: 'I prefer home food because it is fresh and healthy.', clue: 'Say WHY.' },
      ],
      error: { text: 'Website: turn a list into actions with verbs.', pairs: [['فِي الفُطُورِ آكُلُ الخُبْزَ وَأَشْرَبُ الحَلِيبَ.', 'فِي الفُطُورِ الخُبْزُ وَالحَلِيبُ.']] },
      notes: `GRAMMAR PART 2 — website rules “Sequence actions”, “Add another detail” (وَ، أَيْضًا، كَمَا), “Show contrast” (وَلَكِنْ) and “Develop an opinion” (opinion + لِأَنَّ + reason).
Website common error: “Do not add connectives only to increase a count. Choose the connective that matches the relationship between the ideas.”`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 6],
  ido: {
    title: 'Watch me turn short answers into developed answers',
    steps: [
      { head: '1 · Short', ar: 'أُحِبُّ السَّمَكَ.', think: 'Correct — but only one idea.' },
      { head: '2 · + reason', ar: 'أُحِبُّ السَّمَكَ {k|لِأَنَّهُ} لَذِيذٌ وَمُفِيدٌ.', think: 'Fish is m. → li-annahu.' },
      { head: '3 · + example', ar: '… وَآكُلُهُ مَعَ الأَرُزِّ وَالسَّلَطَةِ.', think: 'How / when I eat it.' },
      { head: '4 · + contrast', ar: '{e|وَلَكِنِّي} لَا آكُلُهُ كُلَّ يَوْمٍ.', think: 'Balance.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'REASON', e: 'CONTRAST' },
    model: 'طَعَامِي المُفَضَّلُ هُوَ السَّمَكُ {k|لِأَنَّهُ} لَذِيذٌ وَمُفِيدٌ. آكُلُهُ مَعَ الأَرُزِّ وَالسَّلَطَةِ. أَشْرَبُ المَاءَ وَأَمْشِي كُلَّ يَوْمٍ، {e|وَلَكِنِّي} أُرِيدُ أَنْ أَنَامَ مُبَكِّرَةً.',
    modelEn: 'My favourite food is fish because it is delicious and beneficial. I eat it with rice and salad. I drink water and walk every day, but I want to sleep earlier.',
    notes: 'I DO (3 min) — the website teaching note “a developed answer = answer + reason, example, comparison or time detail”, modelled on the website topic-conversation model (a female student: مُبَكِّرَةً). Students repeat the chain with their own favourite food.',
  },
  sorterNotes: 'Stages (website): plan (ideas, choose connectives) → draft (write it all, add a reason and an example) → check (li-annahu / li-annahā, word count, corrections).',
  hints: ['Is salad m. or f.?', 'Which ending after أَنْ?', 'Where are the verbs?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: لِأَنَّهُ · فِي الفُطُورِ · هَدَفِي.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5, then find three F5 lessons in Amal’s answer.',
  gloss: [
    ['أُحِبُّ الطَّعَامَ المَنْزِلِيَّ لِأَنَّهُ طَازَجٌ، وَطَعَامِي المُفَضَّلُ هُوَ السَّمَكُ مَعَ الأَرُزِّ.', 'I like home-cooked food because it is fresh, and my favourite food is fish with rice.'],
    ['فِي الفُطُورِ آكُلُ الزَّبَادِي وَالفَاكِهَةَ.', 'At breakfast I eat yoghurt and fruit.'],
    ['أَحْيَانًا أَذْهَبُ إِلَى المَطْعَمِ مَعَ أُسْرَتِي، وَأَطْلُبُ الحَسَاءَ أَوِ السَّلَطَةَ.', 'Sometimes I go to a restaurant with my family, and I order soup or salad.'],
    ['لِلْحِفَاظِ عَلَى صِحَّتِي، أَشْرَبُ المَاءَ وَأَمْشِي كُلَّ يَوْمٍ.', 'To keep healthy, I drink water and walk every day.'],
    ['هَدَفِي أَنْ أَنَامَ مُبَكِّرَةً.', 'My goal is to sleep early.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ وَجَبَاتِكَ فِي يَوْمٍ عَادِيٍّ. · مَا طَعَامُكَ المُفَضَّلُ وَلِمَاذَا؟' },
      { route: 'develop', ar: 'مَاذَا تَطْلُبُ فِي مَطْعَمٍ؟' },
      { route: 'develop', ar: 'مَاذَا تَفْعَلُ عِنْدَمَا تَمْرَضُ؟' },
      { route: 'stretch', ar: 'مَا العَادَاتُ الصِّحِّيَّةُ المُهِمَّةُ؟ وَمَا هَدَفُكَ الصِّحِّيُّ؟' },
    ],
    stems: [
      { route: 'core', ar: 'فِي الفُطُورِ آكُلُ … · طَعَامِي المُفَضَّلُ … لِأَنَّهُ …' },
      { route: 'develop', ar: 'أَطْلُبُ ______ وَ ______ ، لِأَنَّ …' },
      { route: 'develop', ar: 'أَذْهَبُ إِلَى الطَّبِيبِ … / أَسْتَرِيحُ وَأَشْرَبُ …' },
      { route: 'stretch', ar: 'يَجِبُ أَنْ … · هَدَفِي أَنْ …' },
    ],
    modelEn: ['What is your (f.) favourite food and why?', 'My favourite food is fish because it is delicious and beneficial. I eat it with rice and salad.'],
    notes: 'Website “Full F5 topic conversation” — six website questions (merged into four prompts on the slide). Each answer = answer + one detail. Pairs use the repair phrases if needed (أَعِدِ السُّؤَالَ، مِنْ فَضْلِكَ · دَعْنِي أُفَكِّرُ). Keep notes for F5-L12.',
  },
  write: {
    core: { amount: '60–70 words', how: 'The five-box planner with one sentence per box and the starters.' },
    develop: { amount: '80–100 words', how: 'Website task: meals, favourite + reason, restaurant, habits, one target; four connectives.' },
    stretch: { amount: '100+ words', how: 'Write independently, then add a comparison, a purpose phrase and a precise target.' },
  },
  frames: {
    core: [
      { en: 'I usually have breakfast at …', ar: 'عَادَةً أَتَنَاوَلُ الفُطُورَ فِي السَّاعَةِ ______ .' },
      { en: 'My favourite food is … because …', ar: 'طَعَامِي المُفَضَّلُ هُوَ ______ لِأَنَّهُ ______ .' },
      { en: 'Sometimes I go to a restaurant and order …', ar: 'أَحْيَانًا أَذْهَبُ إِلَى مَطْعَمٍ وَأَطْلُبُ ______ .' },
      { en: 'I drink enough water and …', ar: 'أَشْرَبُ مَاءً كَافِيًا وَ ______ .' },
      { en: 'My goal is to …', ar: 'هَدَفِي أَنْ ______ .' },
    ],
    develop: [
      { en: 'I prefer … more than …', ar: 'أُفَضِّلُ ______ أَكْثَرَ مِنَ ______ .' },
      { en: 'To keep healthy, …', ar: 'لِلْحِفَاظِ عَلَى صِحَّتِي، ______ .' },
      { en: 'But I sometimes stay up late; so …', ar: 'وَلَكِنِّي أَسْهَرُ أَحْيَانًا؛ لِذَلِكَ ______ .' },
      { en: 'We should …', ar: 'يَجِبُ أَنْ ______ .' },
      { en: 'Finally, …', ar: 'أَخِيرًا، ______ .' },
    ],
    bank: ['أَوَّلًا', 'ثُمَّ', 'بَعْدَ ذَلِكَ', 'أَيْضًا', 'وَلَكِنْ', 'لِأَنَّ', 'لِذَلِكَ', 'أَخِيرًا', 'فِي رَأْيِي', 'مَثَلًا', 'يَجِبُ أَنْ', 'هَدَفِي أَنْ'],
  },
  stretch: [
    ['لِلْحِفَاظِ عَلَى صِحَّتِي', 'to keep my health'],
    ['يُسَاعِدُنِي عَلَى التَّرْكِيزِ', 'it helps me concentrate'],
    ['أُفَضِّلُ … أَكْثَرَ مِنْ …', 'I prefer … more than …'],
    ['سِتَّةَ أَكْوَابٍ مِنَ المَاءِ يَوْمِيًّا', 'six glasses of water a day'],
    ['أَنْ أُقَلِّلَ مِنَ السُّكَّرِ', 'to reduce sugar'],
  ],
  modelEn: 'My food and my health. I usually have breakfast at seven o’clock, and I eat bread and cheese. At lunch I prefer fish more than meat because it is delicious and beneficial. Sometimes I go to a restaurant with my family and order soup and salad. To keep healthy, I drink enough water and do sport. But I sometimes sleep late; so my goal is to sleep early.',
  find: ['a meal', 'a comparison', 'a purpose phrase', 'so + goal'],
  modelNotes: 'Evidence: أَتَنَاوَلُ الفُطُورَ · أَكْثَرَ مِنَ اللَّحْمِ · لِلْحِفَاظِ عَلَى صِحَّتِي · لِذَلِكَ هَدَفِي. Count the connectives: وَ، لِأَنَّهُ، أَحْيَانًا، وَلَكِنِّي، لِذَلِكَ.',
  selfCheck: [
    { route: 'core', text: 'I covered all five boxes.' },
    { route: 'core', text: 'Every sentence has a verb.' },
    { route: 'develop', text: 'Four connectives, each with a real job.' },
    { route: 'develop', text: 'Verbs → gender → reasons → spelling checked.' },
    { route: 'stretch', text: 'Comparison, purpose and a precise target.' },
  ],
  exit: [0, 3, 5],
  glossary: [
    ['العُنْوَانُ', 'the title'], ['الفِكْرَةُ', 'idea'], ['يَوْمٍ عَادِيٍّ', 'a normal day'], ['السَّبَبُ', 'the reason'], ['أُرِيدُ تَحْسِينَهَا', 'I want to improve it'],
    ['الخَاتِمَةُ', 'the conclusion'], ['هَدَفٌ شَخْصِيٌّ', 'a personal goal'], ['تَتَضَمَّنَ', 'include'], ['لَا يَكْفِي', 'is not enough'], ['سَرْدُ قَائِمَةٍ', 'listing'],
  ],
  prep: {
    words: [['تَقْيِيمٌ', 'an assessment', '—'], ['اِسْتِمَاعٌ', 'listening', '—'], ['قِرَاءَةٌ', 'reading', '—'], ['كِتَابَةٌ', 'writing', '—'], ['تَحَدُّثٌ', 'speaking', '—']],
    questionEn: 'Which skill is strongest for you? Which needs more practice?',
    questionAr: 'أَقْوَى مَهَارَةٍ عِنْدِي …',
    homework: {
      core: 'Finish your 60–70-word article from the planner; revise the F5 vocabulary tabs.',
      develop: 'Website writing task: طَعَامِي وَصِحَّتِي (80–100 words); practise the six questions aloud.',
      stretch: 'Improve your article: comparison, purpose phrase and precise target; record your talk privately.',
    },
    wordsSource: 'The five words prepare the F5-L12 review and unit assessment.',
  },
  remember: 'Remember: answer + reason / example · plan → draft → check (verbs, gender, reasons, spelling).',
});

module.exports = { meta, slides };
