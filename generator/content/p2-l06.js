'use strict';
/* P2-L06 · Education and Social Mobility — website: Pathways › Progression › P2 › P2-L06 — the P2 second grammar milestone: the Type 2 conditional
 * لَوْ + past → لَـ + past, contrasted with the real إِذَا … سَـ, inside a balanced argument (يُجَادِلُ بِأَنَّ · فِي الوَاقِعِ · عَلَى الرَّغْمِ مِنْ ذٰلِكَ).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live builder and mission used as published, with waṣl alif
 * shown without a kasra (الاجْتِمَاعِيُّ · الاجْتِهَادَ). The website visual game repeats the P2-L01 / P2-L03 education-path cards, so it is not used here.
 * English added to the patterns; sorter headings and rule examples in transliteration / without English glosses. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P2')({
  n: 6, fileTitle: 'Education_and_Social_Mobility', chip: 'Grammar',
  title: 'Education and Social Mobility', arabic: 'التَّعْلِيمُ وَالحَرَاكُ الاجْتِمَاعِيُّ',
  focus: 'The P2 second milestone: argue about education and equality with the Type 2 conditional — law + a past verb, then la- + a past verb — and keep it apart from the real idhā … sa- conditional.',
  icon: 'FaScaleBalanced', iconSet: 'fa6',
});

const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const site = D.waslFix(D.site('P2-L06'));
const RH = [['The Type 2 form', 'law + past → la- + past'], ['Type 1 vs Type 2', 'idhā … sa- · law … la-'], ['Arguing with a counterfactual', 'law ūtīḥat al-furaṣ, la- …'], ['Balancing a claim', 'reported claim + law counter']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P2-L06', {
  support: `• Core: five Type 2 conditionals (law … la-) about education and opportunity. Develop: add three Type 1 proposals (idhā … sa-). Stretch: the website 100–110-word balanced argument with two law conditionals, one idhā conditional and a reported-speech citation.
• The key idea: idhā = it can still happen; law = it did not happen (or is not true). Use a gesture: hand forward for idhā (the future), hand over the shoulder for law (the road not taken).
• Be sensitive: poverty, class and private vs state schooling can be personal. Keep the discussion about societies and research, not students’ own families; never ask who attends which kind of school.
• Islamic link (optional): «طَلَبُ العِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ» (Ibn Mājah) — seeking knowledge is a duty on every Muslim, rich or poor: a strong argument for equal access.
• Grammar links: Type 1 conditional (P1-L03) · reported speech yujādil bi-anna (P2-L02) · past perfect for the past (P2-L03).`,
  teach: 'law + past → la- + past, real vs hypothetical, the moves of a balanced argument.',
  wedo: 'Turn real proposals into counterfactuals, build an argument, sort the conditionals.',
  next: { nextCode: 'P2-L07', nextTitle: 'Education in the Arab World — History and Change', nextAr: 'التَّعْلِيمُ فِي العَالَمِ العَرَبِيِّ — التَّارِيخُ وَالتَّغْيِيرُ' },
  objectives: ['Discuss education and social mobility in argumentative register.', 'Form the Type 2 conditional: law + past → la- + past.', 'Tell the real idhā conditional from the hypothetical law conditional.', 'Write a balanced argument using both conditional types.'],
  rulesAr: 'الشَّرْطُ الافْتِرَاضِيُّ وَالوَاقِعِيُّ',
  ruleEx: [['لَوْ دَرَسَ أَكْثَرَ، لَنَجَحَ', 'لَوْ كَانَ التَّعْلِيمُ مَجَّانِيًّا، لَوَصَلَ الجَمِيعُ'], ['إِذَا اجْتَهَدْتَ، سَتَنْجَحُ', 'لَوِ اجْتَهَدْتَ، لَنَجَحْتَ'], ['لَوْ أُتِيحَتِ الفُرَصُ لِلْجَمِيعِ، لَتَغَيَّرَ وَجْهُ المُجْتَمَعِ'], ['يُجَادِلُ المُنْتَقِدُونَ بِأَنَّ التَّعْلِيمَ الخَاصَّ يُكَرِّسُ الامْتِيَازَ']],
  doNow: {
    questions: [
      q('What does حَرَاكٌ اجْتِمَاعِيٌّ mean?', ['social mobility', 'social class', 'social media'], 'Prepared at home (P2-L05).'),
      q('What does فُرَصٌ مُتَكَافِئَةٌ mean?', ['equal opportunities', 'free education', 'an education gap'], 'Prepared at home (P2-L05).'),
      q('What does فَجْوَةٌ تَعْلِيمِيَّةٌ mean?', ['an education gap', 'equality', 'a private school'], 'Prepared at home (P2-L05).'),
      q('Choose the accurate sentence.', ['التَّعْلِيمُ يُؤَهِّلُنِي لِسُوقِ العَمَلِ.', 'التَّعْلِيمُ يُؤَهِّلُنِي إِلَى سُوقِ العَمَلِ.', 'التَّعْلِيمُ يُؤَهِّلُنِي عَلَى سُوقِ العَمَلِ.'], 'P2-L05: yuʾahhil li-.'),
      q('Complete: إِذَا اجْتَهَدْتَ، ___ .', ['سَتَنْجَحُ', 'نَجَحْتَ', 'تَنْجَحَ'], 'P1-L03: idhā + past → sa- + present.'),
    ],
    keyIdea: { text: 'idhā = it can still happen. law = it did not happen — and the result takes la-.', ar: '{k|إِذَا اجْتَهَدْتَ، سَتَنْجَحُ} · {e|لَوِ اجْتَهَدْتَ، لَنَجَحْتَ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P2-L05. Question 4 retrieves yuʾahhil li- (P2-L05). Question 5 retrieves the Type 1 conditional (P1-L03) — today it meets its hypothetical partner, law.',
  },
  routes: {
    core: ['I can name 8 words for equality and opportunity.', 'I can form law + past → la- + past.'],
    develop: ['I can choose idhā for real and law for hypothetical.', 'I can cite a view with yujādil bi-anna.'],
    stretch: ['I can balance a claim with a counter-argument.', 'I can negate a Type 2 result (lamā).'],
  },
  bridge: [
    { ar: 'مُسَاوَاةٌ', urdu: 'مساوات', tr: 'musāwāt', en: 'equality' },
    { ar: 'طَبَقَةٌ', urdu: 'طبقہ', tr: 'tabqa', en: 'a (social) class' },
    { ar: 'امْتِيَازٌ', urdu: 'امتیاز', tr: 'imtiyāz', en: 'privilege, distinction' },
    { ar: 'فَقْرٌ · ثَرْوَةٌ', urdu: 'فقر · ثروت', tr: 'faqr · sarwat', en: 'poverty · wealth' },
    { ar: 'فُرْصَةٌ', urdu: 'فرصت', tr: 'fursat', en: 'Arabic: an opportunity · Urdu: free time!' },
  ],
  bridgeNotes: 'URDU BRIDGE: مساوات, طبقہ, امتیاز, فقر and ثروت are shared. FALSE FRIEND: Urdu فرصت means free time / leisure, but Arabic فُرْصَةٌ means an opportunity (pl. فُرَصٌ) — فُرَصٌ مُتَكَافِئَةٌ = equal opportunities.',
  core: ['حَرَاكٌ اجْتِمَاعِيٌّ', 'مُسَاوَاةٌ', 'فُرَصٌ مُتَكَافِئَةٌ', 'فَجْوَةٌ تَعْلِيمِيَّةٌ', 'تَعْلِيمٌ مَجَّانِيٌّ', 'تَعْلِيمٌ خَاصٌّ', 'الفَقْرُ', 'يُجَادِلُ', 'يَرْتَقِي', 'لَوْ', 'افْتِرَاضِيٌّ', 'وَاقِعِيٌّ'],
  forms: {
    'فُرَصٌ مُتَكَافِئَةٌ': { tag: 'sg · pl', forms: [{ l: 'sg.', ar: 'فُرْصَةٌ' }] }, 'فَجْوَةٌ تَعْلِيمِيَّةٌ': sp('فَجَوَاتٌ تَعْلِيمِيَّةٌ'), 'طَبَقَةٌ اجْتِمَاعِيَّةٌ': sp('طَبَقَاتٌ اجْتِمَاعِيَّةٌ'), 'امْتِيَازٌ اجْتِمَاعِيٌّ': sp('امْتِيَازَاتٌ اجْتِمَاعِيَّةٌ'),
    'يَتَجَاوَزُ الفَوَارِقَ': ihs('أَتَجَاوَزُ', 'تَتَجَاوَزُ'), 'يُكَرِّسُ التَّفَاوُتَ': ihs('أُكَرِّسُ', 'تُكَرِّسُ'), 'يُدِيمُ': ihs('أُدِيمُ', 'تُدِيمُ'), 'يُكَافِئُ': ihs('أُكَافِئُ', 'تُكَافِئُ'),
    'يَرْتَقِي': ihs('أَرْتَقِي', 'تَرْتَقِي'), 'يُجَادِلُ': ihs('أُجَادِلُ', 'تُجَادِلُ'),
  },
  vocabNotes: {
    0: 'Mobility and equality: the nouns of the debate. حَرَاكٌ اجْتِمَاعِيٌّ = moving up (or down) between social classes; النُّخْبَةُ = the elite.',
    1: 'Argument verbs: two sides — education يَتَجَاوَزُ الفَوَارِقَ (overcomes differences) and يُكَافِئُ الاجْتِهَادَ (rewards effort), or it يُكَرِّسُ / يُدِيمُ التَّفَاوُتَ (entrenches / perpetuates inequality).',
    2: 'The hypothetical conditional: لَوْ + past, and the result carries لَـ. فِي الوَاقِعِ (in reality) brings the argument back to the facts.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the Type 2 form (website rule 1 + teaching point 1) · Core', title: 'law + past → la- + past', ar: 'لَوْ … لَـ',
      cols: [{ label: 'Meaning — and what really happened', w: 4.2 }, { label: 'Result: la- + past', w: 3.6, size: 20 }, { label: 'Condition: law + past', w: 4.53, size: 20 }],
      rows: [
        { core: true, cells: ['If he had studied more, he would have passed. (He did not.)', '{k|لَنَجَحَ}.', '{e|لَوْ} {e|دَرَسَ} أَكْثَرَ،'] },
        { core: true, cells: ['If education were free, everyone would reach university. (It is not.)', '{k|لَوَصَلَ} الجَمِيعُ.', '{e|لَوْ} {e|كَانَ} التَّعْلِيمُ مَجَّانِيًّا،'] },
        { cells: ['If chances were offered to all, society would change. (They are not.)', '{k|لَتَغَيَّرَ} المُجْتَمَعُ.', '{e|لَوْ} {e|أُتِيحَتِ} الفُرَصُ لِلْجَمِيعِ،'] },
        { cells: ['If opportunities were equal, the gap would shrink. (They are not.)', '{k|لَقَلَّتِ} الفَجْوَةُ.', '{e|لَوْ} {e|كَانَتِ} الفُرَصُ مُتَكَافِئَةً،'] },
      ],
      ltr: true,
      foot: 'Two past verbs. la- is joined to the result verb. law always implies the opposite is true.',
      notes: `GRAMMAR PART 1 — website rule “The Type 2 form” and teaching point: لَوْ كَانَ التَّعْلِيمُ مَجَّانِيًّا، لَوَصَلَ الجَمِيعُ إِلَى الجَامِعَةِ — “it implies the opposite was actually true (education was not free)”.
Website mistakes 1 and 2: لَوْ يَدْرُسُ ✗ (law takes a past verb) · لَوْ دَرَسَ …، سَيَنْجَحُ ✗ (the result takes la-, not sa-).
English can say “would” or “would have” — Arabic uses the same past form for both; context decides.
Pronounce: la-najaḥa · la-waṣala · la-taghayyara · la-qallati (helping kasra before al-).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · law for every person (website rule 1 applied) · Core / Develop', title: 'If I had studied … if she had studied …', ar: 'لَوْ دَرَسْتُ · لَوْ دَرَسَتْ',
      cols: [{ label: 'Person', w: 1.9 }, { label: 'Result: la- + past', w: 3.4, size: 20 }, { label: 'Condition: law + past', w: 4.0, size: 20 }, { label: 'What really happened', w: 3.03 }],
      rows: [
        { core: true, cells: ['I', '{k|لَنَجَحْتُ}.', 'لَوْ {e|دَرَسْتُ} أَكْثَرَ،', 'I did not study more.'] },
        { core: true, cells: ['he', '{k|لَنَجَحَ}.', 'لَوْ {e|دَرَسَ} أَكْثَرَ،', 'He did not.'] },
        { core: true, cells: ['she', '{k|لَنَجَحَتْ}.', 'لَوْ {e|دَرَسَتْ} أَكْثَرَ،', 'She did not.'] },
        { cells: ['you (m · f)', '{k|لَنَجَحْتَ · لَنَجَحْتِ}.', 'لَوِ {e|اجْتَهَدْتَ · اجْتَهَدْتِ}،', 'You did not work hard.'] },
        { cells: ['they', '{k|لَنَجَحُوا}.', 'لَوْ {e|دَرَسُوا} أَكْثَرَ،', 'They did not.'] },
      ],
      ltr: true,
      foot: 'Both verbs take the same person ending: dars-tu … najaḥ-tu · dars-at … najaḥ-at.',
      notes: `GRAMMAR PART 2 — website rule 1 (لَوْ دَرَسَ أَكْثَرَ، لَنَجَحَ) for I / he / she / you / they.
Row 4: لَوْ + a waṣl word → لَوِ (helping kasra): لَوِ اجْتَهَدْتَ (website rule 2 and listening لَوِ اسْتُثْمِرَ).
Quick drill: teacher says “I didn’t revise — I failed”; students say لَوْ رَاجَعْتُ، لَنَجَحْتُ. “She didn’t get a scholarship — she didn’t go to university” → لَوْ حَصَلَتْ عَلَى مِنْحَةٍ، لَالْتَحَقَتْ بِالجَامِعَةِ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · real or hypothetical? (website rule 2 + teaching point 2) · Develop', title: 'idhā is real — law is not', ar: 'إِذَا أَمْ لَوْ؟',
      cards: [
        { chip: 'REAL · TYPE 1 · CORE', color: '1E6B52', head: 'إِذَا … سَـ', big: 'إِذَا اجْتَهَدْتَ، سَتَنْجَحُ.', en: 'If you work hard, you will succeed.', clue: 'You still might.' },
        { chip: 'HYPOTHETICAL · TYPE 2 · DEVELOP', color: 'C0386B', head: 'لَوْ … لَـ', big: 'لَوِ اجْتَهَدْتَ، لَنَجَحْتَ.', en: 'If you had worked hard, you would have succeeded.', clue: 'But you did not.' },
        { chip: 'NEGATIVE RESULT · STRETCH', color: '6B4C9A', head: 'لَوْ … لَمَا', big: 'لَوْ كَانَتِ الفُرَصُ مُتَكَافِئَةً حَقًّا، لَمَا بَقِيَتِ الفَجْوَةُ.', en: 'If opportunities were truly equal, the gap would not remain.', clue: 'la- + mā.' },
      ],
      error: { text: 'Website mistake 2: law never takes sa- in the result.', pairs: [['لَوْ دَرَسَ أَكْثَرَ، لَنَجَحَ', 'لَوْ دَرَسَ أَكْثَرَ، سَيَنْجَحُ']] },
      notes: `GRAMMAR PART 3 — website rule “Type 1 vs Type 2” and teaching point “إِذَا is real; لَوْ is hypothetical”: إِذَا ضَمِنَتِ الحُكُومَاتُ التَّعْلِيمَ، سَيَتَحَسَّنُ الوَضْعُ (a real, possible future) vs لَوْ ضَمِنَتِ الحُكُومَاتُ التَّعْلِيمَ، لَتَحَسَّنَ الوَضْعُ (an unreal past).
Website mistake 3: a counterfactual about the past uses لَوْ, not إِذَا.
Card 3 is from the website reading (فَلَوْ كَانَتِ الفُرَصُ مُتَكَافِئَةً حَقًّا، لَمَا بَقِيَتِ الفَجْوَةُ): the negative result is لَمَا + past.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the moves of a balanced argument (website rules 3–4, reading and listening) · Stretch', title: 'Claim, counter, proposal', ar: 'حُجَّةٌ مُتَوَازِنَةٌ',
      cols: [{ label: 'Move', w: 2.1 }, { label: 'Website language', w: 7.0, size: 18 }, { label: 'English', w: 3.23 }],
      rows: [
        { cells: ['1 · claim', 'يَرَى المُؤَيِّدُونَ {m|أَنَّ} التَّعْلِيمَ {w|يَتَجَاوَزُ} الفَوَارِقَ.', 'Supporters believe education overcomes differences.'] },
        { cells: ['2 · evidence', '{m|أَكَّدَتْ} دِرَاسَاتٌ {m|أَنَّ} التَّعْلِيمَ {w|يُكَافِئُ} الاجْتِهَادَ لَا الأَصْلَ.', 'Studies confirmed it rewards effort, not origin.'] },
        { cells: ['3 · counter', 'لٰكِنَّ المُنْتَقِدِينَ {m|يُجَادِلُونَ بِأَنَّ} الوَاقِعَ أَكْثَرُ تَعْقِيدًا.', 'But critics argue that reality is more complex.'] },
        { cells: ['4 · counterfactual', '{e|فَلَوْ} كَانَتِ الفُرَصُ مُتَكَافِئَةً، {e|لَقَلَّتِ} الفَجْوَةُ.', 'If opportunities were equal, the gap would shrink.'] },
        { cells: ['5 · concession', '{p|عَلَى الرَّغْمِ مِنْ ذٰلِكَ}، يَبْقَى التَّعْلِيمُ أَقْوَى أَدَاةٍ.', 'Nevertheless, education remains the strongest tool.'] },
        { cells: ['6 · proposal', '{k|إِذَا اسْتَثْمَرَتِ} الدَّوْلَةُ فِي المَدَارِسِ، {k|سَتَضِيقُ} الفَجْوَةُ.', 'If the state invests in schools, the gap will narrow.'] },
      ],
      ltr: true,
      foot: 'yujādil bi-anna (argues that) — bi-anna, then an accusative noun.',
      notes: `GRAMMAR PART 4 — website rules “Argument with a counterfactual” and “Balancing a claim” (يُجَادِلُ المُنْتَقِدُونَ بِأَنَّ التَّعْلِيمَ الخَاصَّ يُكَرِّسُ الامْتِيَازَ), built from the website reading “a balanced argument”.
Website quiz 7: يُجَادِلُ بِأَنَّ ✓ — not يُجَادِلُ إِنَّ.
Core: moves 1, 3 and 6 (claim, counter, proposal) make a complete mini-argument. Stretch: all six = the website writing task.`,
    },
  ],
  quick: [0, 1, 2, 4],
  rest: [3, 5, 6, 7],
  ido: {
    title: 'Watch me argue both sides',
    steps: [
      { head: 'Claim', ar: 'يَرَى … {m|أَنَّ} التَّعْلِيمَ …', think: 'Cite a view.' },
      { head: 'Counter', ar: '{p|لٰكِنَّ} الوَاقِعَ أَكْثَرُ تَعْقِيدًا', think: 'Turn.' },
      { head: 'Counterfactual', ar: '{e|فَلَوْ كَانَ} … {e|لَقَلَّتِ}', think: 'law … la-.' },
      { head: 'Proposal', ar: '{k|إِذَا ضَمِنَتِ} … {k|سَيُصْبِحُ}', think: 'idhā … sa-.' },
    ],
    legend: ['m', 'p', 'e', 'k'], legendLabels: { m: 'REPORTED', p: 'BALANCE', e: 'TYPE 2 · LAW', k: 'TYPE 1 · IDHĀ' },
    model: 'يَرَى كَثِيرٌ مِنْ عُلَمَاءِ التَّرْبِيَةِ {m|أَنَّ} التَّعْلِيمَ هُوَ المُحَرِّكُ الرَّئِيسِيُّ لِلْحَرَاكِ الاجْتِمَاعِيِّ. {p|لٰكِنَّ} الوَاقِعَ أَكْثَرُ تَعْقِيدًا؛ {e|فَلَوْ كَانَ} التَّعْلِيمُ الجَيِّدُ مُتَاحًا لِلْجَمِيعِ بِالتَّسَاوِي، {e|لَقَلَّتِ} الفَجْوَةُ بَيْنَ الطَّبَقَاتِ. {p|وَمِنْ وِجْهَةِ نَظَرِي}، {k|إِذَا ضَمِنَتِ} الحُكُومَاتُ جَوْدَةَ التَّعْلِيمِ لِلْجَمِيعِ، {k|سَيُصْبِحُ} التَّعْلِيمُ مُحَرِّكًا حَقِيقِيًّا لِلْمُسَاوَاةِ.',
    modelEn: 'Many education scholars believe that education is the main engine of social mobility. But reality is more complex: if good education were available to everyone equally, the gap between the classes would have narrowed. From my point of view, if governments guarantee quality education for all, education will become a true engine of equality.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Start with what others think: yarā … anna. Turn with lākinna. Now imagine the world that does NOT exist: law + past, la- + past. Finally, back to the real world with my proposal: idhā + past, sa- + present.”',
  },
  patternEn: ['if education were free, everyone would reach university', 'if governments guarantee quality, the situation will improve', 'if opportunities were offered to all, the face of society would change'],
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · turn a real proposal into a counterfactual (website challenge)', title: 'From idhā to law', ar: 'مِنْ إِذَا إِلَى لَوْ',
      cols: [{ label: 'Hypothetical: law … la-', w: 6.2, size: 18 }, { label: 'Real: idhā … sa-', w: 6.13, size: 18 }],
      rows: [
        { core: true, cells: ['{e|لَوِ اجْتَهَدْتَ}، {e|لَنَجَحْتَ}.', '{k|إِذَا اجْتَهَدْتَ}، {k|سَتَنْجَحُ}.'] },
        { core: true, cells: ['{e|لَوْ زَادَ} الإِنْفَاقُ، {e|لَقَلَّتِ} الفَجْوَةُ.', '{k|إِذَا زَادَ} الإِنْفَاقُ، {k|سَتَقِلُّ} الفَجْوَةُ.'] },
        { cells: ['{e|لَوْ ضَمِنَتِ} الحُكُومَةُ التَّعْلِيمَ، {e|لَتَحَسَّنَ} الوَضْعُ.', '{k|إِذَا ضَمِنَتِ} الحُكُومَةُ التَّعْلِيمَ، {k|سَيَتَحَسَّنُ} الوَضْعُ.'] },
        { cells: ['{e|لَوِ اسْتَثْمَرَتِ} الدَّوْلَةُ فِي المَدَارِسِ، {e|لَضَاقَتِ} الفَجْوَةُ.', '{k|إِذَا اسْتَثْمَرَتِ} الدَّوْلَةُ فِي المَدَارِسِ، {k|سَتَضِيقُ} الفَجْوَةُ.'] },
      ],
      foot: 'Show the right column first; students build the left. The condition stays the same — only the particle and the result change.',
      notes: `WE DO (3 min) — the website challenge: “Write one real proposal with إِذَا and one counterfactual with لَوْ about the same idea.” Rows 1–3 come from the website sorter and teaching point; row 4 from the website reading.
Cover the left column. Students change: إِذَا → لَوْ (لَوِ before a waṣl alif) and sa- + present → la- + past (سَتَنْجَحُ → لَنَجَحْتَ · سَتَقِلُّ → لَقَلَّتْ · سَتَضِيقُ → لَضَاقَتْ).
Ask each time: “Did it happen?” (law → no).`,
    },
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build a balanced argument (website live builder)', title: 'Claim + counterfactual + proposal', ar: 'ابْنِ حُجَّتَكَ',
      cols: [{ label: '1 · Reported claim', w: 3.9, size: 16 }, { label: '2 · Counterfactual (law … la-)', w: 4.0, size: 16 }, { label: '3 · Proposal (idhā … sa-)', w: 4.43, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Say it, then write three different versions.',
      notes: `WE DO — the website live builder: “Build a balanced argument from a reported claim, a counterfactual and a real proposal.” Website feedback: each part is accurate on its own, so any three different combinations work.
Core: read row 1 across. Develop: mix rows. Stretch: write your own column 2 with لَمَا (… لَمَا بَقِيَتِ الفَجْوَةُ).`,
    },
  ],
  sorterTitle: 'Real, hypothetical — or argument vocabulary?',
  sorterCats: ['real (idhā … sa-)', 'hypothetical (law … la-)', 'argument vocabulary'],
  sorterNotes: 'Then convert one real sentence into a hypothetical one, and one hypothetical into a real proposal: إِذَا زَادَ الإِنْفَاقُ، سَتَقِلُّ الفَجْوَةُ → لَوْ زَادَ الإِنْفَاقُ، لَقَلَّتِ الفَجْوَةُ.',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('لَوْ + past → لَـ + past.', 'law + past → la- + past.').replace('إِذَا … سَـ', 'idhā … sa-') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra (الاجْتِمَاعِيُّ · الاجْتِهَادَ); rule headings and sorter headings in English and transliteration; rule examples shown without their English glosses; the website visual game repeats the P2-L01 / P2-L03 cards and is not used. All other website items are used as published.',
  hints: ['law + present?', 'law … sa-?', 'A past counterfactual with idhā?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nListen for: law … la- and idhā … sa-.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5 — and write down the two law sentences you hear.',
  gloss: [
    ['يَرَى كَثِيرٌ مِنْ عُلَمَاءِ التَّرْبِيَةِ أَنَّ التَّعْلِيمَ هُوَ المُحَرِّكُ الرَّئِيسِيُّ لِلْحَرَاكِ الاجْتِمَاعِيِّ.', 'Many education scholars believe that education is the main engine of social mobility.'],
    ['وَأَشَارَ تَقْرِيرٌ دَوْلِيٌّ إِلَى أَنَّ كُلَّ سَنَةٍ إِضَافِيَّةٍ مِنَ التَّعْلِيمِ تَزِيدُ دَخْلَ الفَرْدِ.', 'An international report indicated that every extra year of education raises a person’s income.'],
    ['لٰكِنَّ المُنْتَقِدِينَ يُجَادِلُونَ بِأَنَّ التَّعْلِيمَ وَحْدَهُ لَا يُسَاوِي. لَوْ كَانَ التَّعْلِيمُ الجَيِّدُ مُتَاحًا لِلْجَمِيعِ بِالتَّسَاوِي، لَقَلَّتِ الفَجْوَةُ بَيْنَ الطَّبَقَاتِ.', 'But critics argue that education alone does not equalise. If good education were available to all equally, the gap between the classes would narrow.'],
    ['فِي الوَاقِعِ، غَالِبًا مَا يُكَرِّسُ التَّعْلِيمُ الخَاصُّ الامْتِيَازَ الاجْتِمَاعِيَّ.', 'In reality, private education often entrenches social privilege.'],
    ['وَمِنْ وِجْهَةِ نَظَرِي، إِذَا ضَمِنَتِ الحُكُومَاتُ جَوْدَةَ التَّعْلِيمِ لِلْجَمِيعِ، سَيُصْبِحُ التَّعْلِيمُ مُحَرِّكًا حَقِيقِيًّا لِلْمُسَاوَاةِ. لَوِ اسْتُثْمِرَ فِي المَدَارِسِ الفَقِيرَةِ مُبَكِّرًا، لَارْتَقَى كَثِيرُونَ.', 'From my point of view, if governments guarantee quality education for all, education will become a true engine of equality. Had poor schools been invested in early, many would have risen.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'هَلْ يُحَقِّقُ التَّعْلِيمُ المُسَاوَاةَ؟ اعْرِضْ رَأْيًا مُؤَيِّدًا.' },
      { route: 'develop', ar: 'اعْرِضْ حُجَّةً مُضَادَّةً بِاسْتِعْمَالِ «لَوْ».' },
      { route: 'stretch', ar: 'اقْتَرِحْ حَلًّا وَاقِعِيًّا بِاسْتِعْمَالِ «إِذَا».' },
    ],
    stems: [
      { route: 'core', ar: 'يَرَى المُؤَيِّدُونَ أَنَّ التَّعْلِيمَ ______ .' },
      { route: 'develop', ar: 'لَوْ كَانَتِ الفُرَصُ مُتَكَافِئَةً، ______ .' },
      { route: 'stretch', ar: 'إِذَا اسْتَثْمَرَتِ الحُكُومَاتُ فِي ______ ، ______ .' },
    ],
    modelEn: ['Does education achieve equality?', 'Many believe it overcomes differences and rewards effort.', 'And what is the counter-argument?', 'If opportunities were equal, the gap would shrink — but if we invest in weak schools, it will narrow.'],
    notes: 'Website prompts and model. Develop stem: the result must start with la- (لَقَلَّتِ الفَجْوَةُ · لَارْتَقَى كَثِيرُونَ). To a girl: اعْرِضِي · اقْتَرِحِي.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Website Core: five Type 2 conditionals (law … la-) about education and opportunity.' },
    develop: { amount: '8 sentences', how: 'Website Develop: add three Type 1 conditionals (idhā … sa-) proposing real changes.' },
    stretch: { amount: '100–110 words', how: 'Website task: a balanced argument with two law conditionals, one idhā conditional and a reported-speech clause.' },
  },
  frames: {
    core: [
      { en: 'If education were free, everyone would …', ar: 'لَوْ كَانَ التَّعْلِيمُ مَجَّانِيًّا، ______ الجَمِيعُ إِلَى الجَامِعَةِ.' },
      { en: 'If I had studied more, …', ar: 'لَوْ دَرَسْتُ أَكْثَرَ، ______ .' },
      { en: 'If opportunities were offered to all, …', ar: 'لَوْ أُتِيحَتِ الفُرَصُ لِلْجَمِيعِ، ______ .' },
      { en: 'If opportunities were equal, the gap would …', ar: 'لَوْ كَانَتِ الفُرَصُ مُتَكَافِئَةً، ______ الفَجْوَةُ.' },
    ],
    develop: [
      { en: 'If spending on schools increases, …', ar: 'إِذَا زَادَ الإِنْفَاقُ عَلَى المَدَارِسِ، ______ .' },
      { en: 'If governments guarantee quality, …', ar: 'إِذَا ضَمِنَتِ الحُكُومَاتُ الجَوْدَةَ، ______ .' },
      { en: 'Critics argue that …', ar: 'يُجَادِلُ المُنْتَقِدُونَ بِأَنَّ ______ .' },
      { en: 'Nevertheless, …', ar: 'عَلَى الرَّغْمِ مِنْ ذٰلِكَ، ______ .' },
    ],
    bank: ['لَوَصَلَ', 'لَنَجَحْتُ', 'لَقَلَّتِ', 'لَارْتَقَى كَثِيرُونَ', 'لَتَغَيَّرَ المُجْتَمَعُ', 'سَتَضِيقُ الفَجْوَةُ', 'سَيَتَحَسَّنُ الوَضْعُ', 'التَّعْلِيمَ الخَاصَّ يُكَرِّسُ الامْتِيَازَ', 'يَبْقَى التَّعْلِيمُ أَقْوَى أَدَاةٍ', 'فُرَصٌ مُتَكَافِئَةٌ', 'الحَرَاكُ الاجْتِمَاعِيُّ', 'المُسَاوَاةُ'],
  },
  stretch: [
    ['المُحَرِّكُ الرَّئِيسِيُّ لِلْحَرَاكِ الاجْتِمَاعِيِّ', 'the main engine of social mobility'],
    ['كُلُّ سَنَةٍ إِضَافِيَّةٍ تَزِيدُ الدَّخْلَ', 'every extra year raises income'],
    ['لٰكِنَّ الوَاقِعَ أَكْثَرُ تَعْقِيدًا', 'but reality is more complex'],
    ['لَارْتَقَى كَثِيرُونَ مِنَ الفُقَرَاءِ', 'many of the poor would have risen'],
    ['مُحَرِّكًا حَقِيقِيًّا لِلْمُسَاوَاةِ', 'a true engine of equality'],
  ],
  modelEn: 'Does education achieve social equality? Many education scholars believe that education is the main engine of social mobility, and an international report pointed out that every extra year raises income. But reality is more complex: if good education were available to everyone equally, the gap between the classes would have narrowed. And if opportunities had been offered early, many of the poor would have risen. In reality, private education sometimes entrenches privilege. From my point of view, if governments guarantee quality education for all, education will become a true engine of equality.',
  find: ['two reported clauses (yarā … anna · ashāra ilā anna)', 'two Type 2 conditionals (law … la-)', 'one Type 1 proposal (idhā … sa-)', 'a balance word (lākinna · fī l-wāqiʿ)'],
  modelNotes: 'Website writing model. Evidence: يَرَى … أَنَّ · أَشَارَ تَقْرِيرٌ دَوْلِيٌّ إِلَى أَنَّ · فَلَوْ كَانَ … لَقَلَّتِ · وَلَوْ أُتِيحَتِ … لَارْتَقَى · لٰكِنَّ الوَاقِعَ · فِي الوَاقِعِ · وَمِنْ وِجْهَةِ نَظَرِي، إِذَا ضَمِنَتِ … سَيُصْبِحُ.',
  selfCheck: [
    { route: 'core', text: 'After law I used a PAST verb.' },
    { route: 'core', text: 'My law result starts with la- (never sa-).' },
    { route: 'develop', text: 'idhā for real proposals, law for things that did not happen.' },
    { route: 'develop', text: 'I cited a view (yarā … anna · yujādil bi-anna).' },
    { route: 'stretch', text: 'I balanced a claim with a counter-argument and a proposal.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['المُؤَيِّدُونَ', 'supporters'], ['يُتِيحُ', 'allows, makes possible'], ['الأَصْلَ', 'origin, family background'], ['أَكْثَرُ تَعْقِيدًا', 'more complex'], ['حَقًّا', 'truly'],
    ['لَمَا بَقِيَتِ', 'would not have remained'], ['أَحْيَانًا', 'sometimes'], ['أَقْوَى أَدَاةٍ', 'the strongest tool'], ['الضَّعِيفَةِ', 'weak'], ['تَدْرِيجِيًّا', 'gradually'],
  ],
  prep: {
    words: [['دَارُ الحِكْمَةِ', 'the House of Wisdom', '—'], ['العَصْرُ الذَّهَبِيُّ', 'the Golden Age', '—'], ['الحَضَارَةُ الإِسْلَامِيَّةُ', 'Islamic civilisation', 'pl. حَضَارَاتٌ'], ['ازْدَهَرَ', 'it flourished', 'ازْدَهَرَتْ she / it (f.)'], ['أَسَّسَ', 'he founded', 'أَسَّسَتْ she']],
    questionEn: 'What do you know about the House of Wisdom in Baghdad?',
    questionAr: 'أَعْرِفُ أَنَّ دَارَ الحِكْمَةِ ______ ، وَأَنَّ العُلُومَ ازْدَهَرَتْ فِي ______ .',
    homework: {
      core: 'Write five law … la- sentences about education and opportunity.',
      develop: 'Add three idhā … sa- proposals for real changes.',
      stretch: 'Website writing task: a 100–110-word balanced argument with both conditional types.',
    },
    wordsSource: 'The five words come from the website P2-L07 vocabulary (education in the Arab world).',
  },
  remember: 'Remember: law + PAST, then la- + PAST (law darasa, la-najaḥa) — it means it did NOT happen. idhā … sa- is for the real future. Never put sa- after law.',
});

module.exports = { meta, slides };
