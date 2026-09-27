'use strict';
/* D1-L06 · He and She — Describing Someone Else’s Routine — website: Pathways › Development › D1 › D1-L06 (يَـ / تَـ, ـهُ / ـهَا, clear reference, بَيْنَمَا, أَمَّا … فَـ, كِلَاهُمَا). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D1')({
  n: 6, fileTitle: 'He_and_She_Routines', chip: 'He and She',
  title: 'He and She — Describing Someone Else’s Routine', arabic: 'هُوَ وَهِيَ — وَصْفُ رُوتِينِ شَخْصٍ آخَرَ',
  focus: 'Describe and compare another person’s routine: يَـ for him, تَـ for her, ـهُ / ـهَا on every noun, and keep the reference clear through a whole paragraph.',
  icon: 'FaPeopleArrows', iconSet: 'fa6',
});

// masculine card → she / I / they forms
const SHE = ['تَسْتَيْقِظُ', 'تَغْتَسِلُ', 'تَرْتَدِي', 'تَتَنَاوَلُ', 'تَخْرُجُ', 'تَصِلُ', 'تَرْجِعُ', 'تُرَاجِعُ', 'تَسْتَرِيحُ', 'تَنَامُ'];
const I = ['أَسْتَيْقِظُ', 'أَغْتَسِلُ', 'أَرْتَدِي', 'أَتَنَاوَلُ', 'أَخْرُجُ', 'أَصِلُ', 'أَرْجِعُ', 'أُرَاجِعُ', 'أَسْتَرِيحُ', 'أَنَامُ'];
const THEY = ['يَسْتَيْقِظُونَ', 'يَغْتَسِلُونَ', 'يَرْتَدُونَ', 'يَتَنَاوَلُونَ', 'يَخْرُجُونَ', 'يَصِلُونَ', 'يَرْجِعُونَ', 'يُرَاجِعُونَ', 'يَسْتَرِيحُونَ', 'يَنَامُونَ'];
const forms = {};
D.site('D1-L06').vocab[0].items.forEach((it, i) => { forms[it.ar] = { tag: 'I · she · they', forms: [{ l: 'they', ar: THEY[i] }, { l: 'she', ar: SHE[i] }, { l: 'I', ar: I[i] }] }; });
forms['هُوَ'] = { tag: 'pronouns', forms: [{ l: 'she', ar: 'هِيَ' }, { l: 'both', ar: 'هُمَا' }, { l: 'they', ar: 'هُمْ' }] };
forms['رُوتِينُهُ'] = { tag: 'my · his · her', forms: [{ l: 'my', ar: 'رُوتِينِي' }, { l: 'his', ar: 'رُوتِينُهُ' }, { l: 'her', ar: 'رُوتِينُهَا' }] };

const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D1-L06', {
  support: `• Core: describe ONE person (a brother OR a sister) with four verbs. The key question every time: “Who am I talking about — him or her?” (NOT: am I a boy or a girl?).
• Develop: compare two people with بَيْنَمَا and keep the suffix matching (حَقِيبَتُهُ / حَقِيبَتُهَا). Stretch: a whole comparison paragraph with أَمَّا … فَـ, كِلَاهُمَا and an evidence-based judgement.
• The masculine vocabulary cards carry the she / I / they forms, so the feminine group is FLEX (it is the same list with تَـ).
• Website warning: a girl describing her brother still says هُوَ يَسْتَيْقِظُ — choose the verb by the person described, not the speaker.
• Urdu bridge: روٹین، مصروف، منظم، دونوں (→ كِلَاهُمَا), اول.`,
  teach: 'Him or her? The prefix and the ending must both match.',
  wedo: 'Transform I → he / she, sort, fix and listen.',
  next: { nextCode: 'D1-L07', nextTitle: 'Asking About Daily Routine — What Do You Do?', nextAr: 'مَاذَا تَفْعَلُ؟' },
  flexGroups: [1],
  doNow: {
    questions: [
      q('What does رُوتِينُهَا mean?', ['her routine', 'his routine', 'my routine'], 'Prepared at home.'),
      q('What does كِلَاهُمَا mean?', ['both of them', 'all of them', 'neither of them'], 'Prepared at home.'),
      q('Choose “I help her”.', ['أُسَاعِدُهَا', 'أُسَاعِدُهُ', 'تُسَاعِدُنِي'], 'D1-L05 object endings.'),
      q('Choose “I revise my lessons”.', ['أُرَاجِعُ دُرُوسِي', 'أَرْجِعُ دُرُوسِي', 'أَسْتَرِيحُ دُرُوسِي'], 'D1-L05: return vs revise.'),
      q('Choose the accurate sentence.', ['أُخْتِي تَسْتَيْقِظُ مُبَكِّرًا.', 'أُخْتِي يَسْتَيْقِظُ مُبَكِّرًا.', 'أُخْتِي أَسْتَيْقِظُ مُبَكِّرًا.'], 'D1-L01: she → تَـ.'),
    ],
    keyIdea: { text: 'Him: يَـ + ـهُ. Her: تَـ + ـهَا. The verb and the ending must point to the SAME person.', ar: '{w|يُ}حَضِّرُ حَقِيبَتَ{w|هُ}  ·  {e|تُ}حَضِّرُ حَقِيبَتَ{e|هَا}' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home. Questions 3–5 retrieve D1-L05 (object endings, return vs revise) and D1-L01 (prefixes).',
  },
  routes: {
    core: ['I can describe one person’s morning with four verbs.', 'I can say his routine and her routine.'],
    develop: ['I can compare two people with بَيْنَمَا.', 'I can match ـهُ / ـهَا to the right person.'],
    stretch: ['I can organise a comparison with أَمَّا … فَـ and كِلَاهُمَا.', 'I can give an evidence-based judgement.'],
  },
  bridge: [
    { ar: 'رُوتِينُهُ', urdu: 'روٹین', tr: 'rūṭīn', en: 'routine (both from English)' },
    { ar: 'اِنْشِغَالًا', urdu: 'مصروف / مشغول', tr: 'mashghūl', en: 'busy' },
    { ar: 'تَنْظِيمًا', urdu: 'منظم / تنظیم', tr: 'tanẓīm', en: 'organisation' },
    { ar: 'أَوَّلًا', urdu: 'اول', tr: 'awwal', en: 'first' },
    { ar: 'كِلَاهُمَا', urdu: 'دونوں', tr: 'donon', en: 'both (meaning only)' },
  ],
  bridgeNotes: 'URDU BRIDGE: روٹین (routine) → رُوتِينٌ. مشغول (busy) → أَكْثَرُ اِنْشِغَالًا (busier). تنظیم / منظم (organisation / organised) → أَكْثَرُ تَنْظِيمًا (more organised). اول (first) → أَوَّلًا. دونوں = both → كِلَاهُمَا (meaning bridge only, not a cognate).',
  core: ['يَسْتَيْقِظُ', 'يَتَنَاوَلُ الإِفْطَارَ', 'يَخْرُجُ مِنَ البَيْتِ', 'يَرْجِعُ إِلَى البَيْتِ', 'يُرَاجِعُ دُرُوسَهُ', 'يَنَامُ', 'هُوَ', 'هِيَ', 'رُوتِينُهُ', 'رُوتِينُهَا', 'بَيْنَمَا'],
  forms,
  vocabNotes: { 0: 'FAST: students know the I-forms from D1-L01. Read the he-form, then the she-form on the card (just change يَـ to تَـ). Point out تَتَنَاوَلُ has two t’s: one is the pattern, one is “she”.', 2: 'Reference words: أَمَّا هُوَ فَـ / أَمَّا هِيَ فَـ (as for him / her), كِلَاهُمَا (both of them) + a singular he-verb: كِلَاهُمَا يَذْهَبُ.' },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · two things must match (website table)', title: 'Him or her? Prefix AND ending', ar: 'هُوَ أَمْ هِيَ؟',
      cols: [{ label: 'Who?', w: 2.3, size: 26 }, { label: 'Verb prefix', w: 3.4, size: 26 }, { label: 'Ending on nouns', w: 3.4, size: 26 }, { label: 'Example', w: 3.23, size: 18 }],
      rows: [
        { core: true, cells: [{ ar: 'هُوَ · عَلِيٌّ · أَخِي' }, P('{w|يَ}سْتَيْقِظُ', 'he wakes up'), P('حَقِيبَتُ{w|هُ}', 'his bag'), P('أَخِي {w|يُ}حَضِّرُ حَقِيبَتَ{w|هُ}.', 'My brother prepares his bag.')] },
        { core: true, cells: [{ ar: 'هِيَ · مَرْيَمُ · أُخْتِي' }, P('{e|تَ}سْتَيْقِظُ', 'she wakes up'), P('حَقِيبَتُ{e|هَا}', 'her bag'), P('أُخْتِي {e|تُ}حَضِّرُ حَقِيبَتَ{e|هَا}.', 'My sister prepares her bag.')] },
        { cells: [{ ar: 'أَنَا' }, P('{k|أَ}سْتَيْقِظُ', 'I wake up'), P('حَقِيبَتِ{k|ي}', 'my bag'), P('{k|أُ}حَضِّرُ حَقِيبَتِ{k|ي}.', 'I prepare my bag.')] },
      ],
      foot: 'Watch the double t: she has breakfast = ta-ta-nā-wa-lu (one t is the pattern, one t is “she”).',
      notes: `GRAMMAR PART 1 — website rules “Use يَـ for a masculine singular subject”, “Use تَـ for a feminine singular subject”, “Match the possessive suffix” and the website table (Person · Prefix · Possession).
Teacher script: “Two checks every sentence: the FRONT of the verb and the END of the noun. Both must point to the same person.”
Website warning: “Do not choose the verb by the speaker’s gender … a female speaker describing her brother still says هُوَ يَسْتَيْقِظُ.” Ask a girl to describe her brother aloud to prove it.
Quick-fire: say a name (خَالِدٌ / زَيْنَبُ / أَبِي / أُمِّي); students show يـ or تـ on their fingers, then say “ـهُ” or “ـهَا”.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · compare without losing the subject (website) · Develop / Stretch', title: 'Whereas, as for, both of them', ar: 'بَيْنَمَا · أَمَّا … فَـ · كِلَاهُمَا',
      cards: [
        { chip: 'CONTRAST · DEVELOP', color: '1D5FBF', head: 'بَيْنَمَا', big: 'يَسْتَيْقِظُ عَلِيٌّ فِي السَّادِسَةِ، بَيْنَمَا تَسْتَيْقِظُ مَرْيَمُ فِي السَّابِعَةِ.', en: 'Ali wakes at six, whereas Maryam wakes at seven.', clue: 'Each verb matches its own subject.' },
        { chip: 'AS FOR · STRETCH', color: '6B4C9A', head: 'أَمَّا … فَـ', big: 'أَمَّا هِيَ فَرُوتِينُهَا أَهْدَأُ.', en: 'As for her, her routine is calmer.', clue: 'Pronoun + fa- + the comment.' },
        { chip: 'BOTH · STRETCH', color: '1E7B4F', head: 'كِلَاهُمَا', big: 'كِلَاهُمَا يَذْهَبُ إِلَى المَدْرَسَةِ.', en: 'Both of them go to school.', clue: 'Followed by a singular he-verb.' },
      ],
      error: { text: 'Website common error: the ending must match the person.', pairs: [['عَلِيٌّ يُحَضِّرُ حَقِيبَتَهُ', 'عَلِيٌّ يُحَضِّرُ حَقِيبَتَهَا']] },
      notes: `GRAMMAR PART 2 — website rule “Compare without losing the subject” (repeat the subject or use a clear pronoun after a contrast marker) and website patterns 3–4.
Website teaching point: “Use names, then pronouns, then repeated reference only when the reader can still identify the person.”
Recycles بَيْنَمَا and أَمَّا … فَـ from D1-L03 — now with two different people.`,
    },
  ],
  quick: [0, 1, 3, 4],
  ido: {
    title: 'Watch me describe my brother and sister',
    steps: [
      { head: 'Him', ar: 'أَخِي {w|يَ}سْتَيْقِظُ فِي السَّادِسَةِ.', think: 'My brother = he → ya-.' },
      { head: 'His', ar: '{w|يُ}حَضِّرُ حَقِيبَتَ{w|هُ} بِسُرْعَةٍ.', think: 'His bag → -hu.' },
      { head: 'Her (contrast)', ar: 'بَيْنَمَا {e|تَ}سْتَيْقِظُ أُخْتِي فِي السَّابِعَةِ.', think: 'New person, a girl → ta-.' },
      { head: 'Both', ar: '{k|كِلَاهُمَا} يَذْهَبُ إِلَى المَدْرَسَةِ.', think: 'Both + he-verb.' },
    ],
    legend: ['w', 'e', 'k'], legendLabels: { w: 'HE / HIS', e: 'SHE / HER', k: 'BOTH' },
    model: 'أَخِي {w|يَ}سْتَيْقِظُ فِي السَّادِسَةِ وَ{w|يُ}حَضِّرُ حَقِيبَتَ{w|هُ} بِسُرْعَةٍ، بَيْنَمَا {e|تَ}سْتَيْقِظُ أُخْتِي فِي السَّابِعَةِ. أَمَّا هِيَ فَـ{e|تَ}تَنَاوَلُ إِفْطَارَ{e|هَا} مَعَ أُمِّي. {k|كِلَاهُمَا} يَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ.',
    modelEn: 'My brother wakes up at six and prepares his bag quickly, whereas my sister wakes up at seven. As for her, she has her breakfast with my mother. Both of them go to school by bus.',
    notes: 'I DO (3 min) — website patterns combined, with a think-aloud (“who am I talking about now?”). Students copy it, colour him blue and her pink.',
  },
  wedoSlides: [
    {
      type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · transform the website picture-game sentences', title: 'I → he → she', ar: 'أَنَا ← هُوَ ← هِيَ',
      seed: 6,
      questions: [
        q('Change to “he”.', ['يَسْتَيْقِظُ صَبَاحًا.', 'تَسْتَيْقِظُ صَبَاحًا.', 'أَسْتَيْقِظُ صَبَاحًا.'], 'He → ya-.', { ar: 'أَسْتَيْقِظُ صَبَاحًا.' }),
        q('Change to “she”.', ['تُنَظِّفُ أَسْنَانَهَا.', 'تُنَظِّفُ أَسْنَانَهُ.', 'يُنَظِّفُ أَسْنَانَهَا.'], 'She → tu- AND her → -hā.', { ar: 'أُنَظِّفُ أَسْنَانِي.' }),
        q('Change to “she”.', ['تَتَنَاوَلُ الإِفْطَارَ.', 'يَتَنَاوَلُ الإِفْطَارَ.', 'تَنَاوَلُ الإِفْطَارَ.'], 'Two t’s: ta-ta-nā-wa-lu.', { ar: 'أَتَنَاوَلُ الإِفْطَارَ.' }),
        q('Change to “my brother”.', ['أَخِي يَذْهَبُ إِلَى المَدْرَسَةِ.', 'أَخِي تَذْهَبُ إِلَى المَدْرَسَةِ.', 'أَخِي أَذْهَبُ إِلَى المَدْرَسَةِ.'], 'My brother = he.', { ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ.' }),
      ],
      side: { kind: 'core', label: 'CORE', text: 'He → ya- + -hu (his)\nShe → ta- + -hā (her)' },
      answerSlide: { min: 0, eyebrow: 'We do · transform answers', title: 'I → he → she: answers', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO — the website picture game for this lesson uses I-sentences (أَسْتَيْقِظُ صَبَاحًا …). Here the class TRANSFORMS them to he / she, which is the skill of the lesson. 20 seconds each; chat the letters. Q2 is the trap: the verb AND the ending both change.',
      answerNotes: 'Reveal; the class reads each answer aloud, then says it again for the opposite person.',
    },
  ],
  sorterCats: ['He / masculine', 'She / feminine'],
  sorterNotes: 'Core: look at the first letter of verbs (يـ / تـ) and the last letters of nouns (ـهُ / ـهَا).',
  hints: ['Maryam is a girl. Which prefix?', 'Ali is a boy. Whose bag?', 'She is eating HER breakfast. Which ending?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 5.\nListen for: سَامِرٌ · لَيْلَى · كِلَاهُمَا.',
  listenRoutes: 'Core: questions 1, 3 and 5. Develop / Stretch: all 5.',
  gloss: [
    ['يَسْتَيْقِظُ سَامِرٌ فِي السَّادِسَةِ وَالرُّبْعِ، بَيْنَمَا تَسْتَيْقِظُ أُخْتُهُ لَيْلَى فِي السَّادِسَةِ وَالنِّصْفِ.', 'Samer wakes up at quarter past six, whereas his sister Layla wakes up at half past six.'],
    ['هُوَ يَغْتَسِلُ وَيَرْتَدِي مَلَابِسَهُ بِسُرْعَةٍ، ثُمَّ يَتَنَاوَلُ إِفْطَارَهُ فِي المَطْبَخِ.', 'He showers and gets dressed quickly, then has his breakfast in the kitchen.'],
    ['أَمَّا هِيَ فَتُحَضِّرُ حَقِيبَتَهَا أَوَّلًا، ثُمَّ تَتَنَاوَلُ الإِفْطَارَ مَعَ أُمِّهَا.', 'As for her, she prepares her bag first, then has breakfast with her mother.'],
    ['بَعْدَ المَدْرَسَةِ يُرَاجِعُ سَامِرٌ دُرُوسَهُ مُبَاشَرَةً، وَلٰكِنَّ لَيْلَى تَسْتَرِيحُ قَبْلَ أَنْ تَبْدَأَ وَاجِبَهَا.', 'After school Samer revises his lessons straight away, but Layla rests before she starts her homework.'],
    ['كِلَاهُمَا يَنَامُ فِي العَاشِرَةِ تَقْرِيبًا.', 'Both of them sleep at about ten.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ رُوتِينَ أَخٍ أَوْ أُخْتٍ أَوْ صَدِيقٍ.' },
      { route: 'core', ar: 'مَتَى يَسْتَيْقِظُ / تَسْتَيْقِظُ؟ مَاذَا يَفْعَلُ / تَفْعَلُ بَعْدَ المَدْرَسَةِ؟' },
      { route: 'develop', ar: 'قَارِنْ بَيْنَ رُوتِينِكَ وَرُوتِينِهِ / رُوتِينِهَا.' },
      { route: 'stretch', ar: 'مَنْ أَكْثَرُ تَنْظِيمًا؟ هَاتِ دَلِيلًا.' },
    ],
    stems: [
      { route: 'core', ar: 'أَخِي يَـ ______ / أُخْتِي تَـ ______ فِي السَّاعَةِ ______ .' },
      { route: 'develop', ar: 'أَنَا ______ ، بَيْنَمَا هُوَ / هِيَ ______ .' },
      { route: 'stretch', ar: 'رُوتِينُهُ / رُوتِينُهَا أَكْثَرُ تَنْظِيمًا لِأَنَّ ______ .' },
      { route: 'sum', ar: 'كِلَاهُمَا ______ .' },
    ],
    modelEn: ['Describe your sister’s routine.', 'She wakes at seven and walks to school. After school she revises her lessons before she rests.'],
    notes: 'Website prompts (2 and 3 merged on the slide for Core). Summarise step: the partner reports back in the third person (“he / she …”) — this is the lesson skill in speech.',
  },
  write: {
    core: { amount: '5 sentences', how: 'One person (brother, sister or friend): four he- or she-verbs and one “his / her routine”.' },
    develop: { amount: '8 sentences', how: 'Compare two people with whereas; match the endings (his bag / her bag) at least three times.' },
    stretch: { amount: '100–120 words', how: 'Website task: your routine vs another person’s, with times, frequency, before/after and an evidence-based judgement.' },
  },
  frames: {
    core: [
      { en: 'My brother wakes up at …', ar: 'أَخِي يَسْتَيْقِظُ فِي ______ .' },
      { en: 'My sister wakes up at …', ar: 'أُخْتِي تَسْتَيْقِظُ فِي ______ .' },
      { en: 'He has his breakfast …', ar: 'يَتَنَاوَلُ إِفْطَارَهُ ______ .' },
      { en: 'She revises her lessons …', ar: 'تُرَاجِعُ دُرُوسَهَا ______ .' },
      { en: 'He / she sleeps at …', ar: 'يَنَامُ / تَنَامُ فِي ______ .' },
    ],
    develop: [
      { en: 'I … , whereas my brother …', ar: 'أَنَا ______ ، بَيْنَمَا أَخِي يَـ ______ .' },
      { en: 'As for her, she …', ar: 'أَمَّا هِيَ فَـتَـ ______ .' },
      { en: 'Both of them …', ar: 'كِلَاهُمَا يَـ ______ .' },
      { en: 'He wakes up earlier than me.', ar: 'هُوَ يَسْتَيْقِظُ أَبْكَرَ مِنِّي.' },
      { en: 'His routine is busier than hers.', ar: 'رُوتِينُهُ أَكْثَرُ اِنْشِغَالًا مِنْ رُوتِينِهَا.' },
    ],
    bank: ['يَسْتَيْقِظُ', 'تَسْتَيْقِظُ', 'يَتَنَاوَلُ', 'تَتَنَاوَلُ', 'يَرْجِعُ', 'تَرْجِعُ', 'يُرَاجِعُ', 'تُرَاجِعُ', 'حَقِيبَتَهُ', 'حَقِيبَتَهَا', 'بَيْنَمَا', 'كِلَاهُمَا'],
  },
  stretch: [
    ['تَتَأَكَّدُ مِنْ حَقِيبَتِهَا وَمَفَاتِيحِهَا', 'she checks her bag and keys'],
    ['يَسْتَيْقِظُ بَعْدَهَا بِنِصْفِ سَاعَةٍ', 'he wakes half an hour after her'],
    ['لِأَنَّ مَدْرَسَتَهُ أَبْعَدُ', 'because his school is further away'],
    ['رُوتِينُهُ أَكْثَرُ اِنْشِغَالًا', 'his routine is busier'],
    ['وَلٰكِنَّ رُوتِينَهَا أَكْثَرُ تَنْظِيمًا', 'but her routine is more organised'],
  ],
  modelEn: 'My brother wakes up at six, whereas I wake up at half past six. He showers and gets dressed quickly, then has his breakfast. As for me, I prepare my bag before I have breakfast. We go to school together, but we differ after school. My brother trains three times a week and revises his lessons in the evening. I finish my homework straight away, then I rest. In my opinion, his routine is busier, whereas my routine is more organised because I finish my homework early.',
  find: ['four he-verbs', 'two words ending in -hu (his)', 'a contrast with “as for”', 'the judgement and its evidence'],
  modelNotes: 'Evidence: يَسْتَيْقِظُ، يَغْتَسِلُ، يَرْتَدِي، يَتَنَاوَلُ، يَتَمَرَّنُ، يُرَاجِعُ · مَلَابِسَهُ، إِفْطَارَهُ، دُرُوسَهُ، رُوتِينُهُ · أَمَّا أَنَا فَأُحَضِّرُ · أَكْثَرُ تَنْظِيمًا لِأَنَّنِي أُنْهِي وَاجِبِي مُبَكِّرًا.',
  selfCheck: [
    { route: 'core', text: 'Every verb about HIM starts with ya- or yu-.' },
    { route: 'core', text: 'Every verb about HER starts with ta- or tu-.' },
    { route: 'develop', text: 'My endings match the person (his -hu, her -hā).' },
    { route: 'develop', text: 'After “whereas”, the new verb matches the new person.' },
    { route: 'stretch', text: 'I ended with a judgement and evidence.' },
  ],
  exit: [0, 2, 3],
  glossary: [
    ['اِبْنَةُ عَمِّي', 'my cousin (f.)'], ['طَالِبَةٌ مُنَظَّمَةٌ', 'an organised student'], ['بِنَفْسِهَا', 'by herself'], ['تَتَأَكَّدُ مِنْ', 'she checks'], ['مَفَاتِيحِهَا', 'her keys'],
    ['مَشْيًا', 'on foot'], ['تَسْكُنُ قَرِيبًا', 'she lives nearby'], ['بَعْدَهَا', 'after her'], ['أَبْعَدُ', 'further'], ['التَّدْرِيبِ', 'training'],
  ],
  prep: {
    words: [['مَاذَا تَفْعَلُ؟', 'what do you (m.) do?', 'f.: مَاذَا تَفْعَلِينَ؟'], ['مَتَى؟', 'when?', ''], ['كَمْ مَرَّةً؟', 'how often?', ''], ['لِمَاذَا؟', 'why?', ''], ['مَعَ مَنْ؟', 'with whom?', '']],
    questionEn: 'Write three questions you would like to ask a classmate about their day.',
    questionAr: 'مَاذَا تَفْعَلُ بَعْدَ المَدْرَسَةِ؟',
    homework: {
      core: 'Website D1-L06: the sorter “Pronoun switch relay” and the final check.',
      develop: 'Write 8 sentences comparing your routine with a family member’s (بَيْنَمَا).',
      stretch: 'Website writing task: 100–120 words, your routine vs another person’s.',
    },
    wordsSource: 'The five words come from the website D1-L07 vocabulary (question words and questions to a boy / girl).',
  },
  remember: 'Remember: choose the verb by the person you DESCRIBE, not by who is speaking.',
});

module.exports = { meta, slides };
