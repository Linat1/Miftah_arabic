'use strict';
/* P5-L06 · Youth and Society — The Arab Generation’s Challenges and Power — website: Pathways › Progression › P5 › P5-L06 (historical depth with the
 * intergenerational past perfect كَانَتِ الأَجْيَالُ السَّابِقَةُ قَدْ …; the contrast أَمَّا شَبَابُ اليَوْمِ، فَـ + present; يُعِيدُ تَعْرِيفَ + an object in -a;
 * youth futures with both conditional types and a conclusion connector). Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking,
 * writing, live builder, mission and visual game used as published, with waṣl alif shown without a kasra, لِكَيْ always written with its sukūn and the
 * unvowelled الناشِطِيَّةِ in one teaching point vowelled. Game cards 1, 2 and 4 not used. Sorter headings in transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P5')({
  n: 6, fileTitle: 'Youth_and_Society', chip: 'Argument',
  title: 'Youth and Society — The Arab Generation’s Challenges and Power', arabic: 'الشَّبَابُ وَالمُجْتَمَعُ — تَحَدِّيَاتُ جِيلِ الشَّبَابِ العَرَبِيِّ وَقُدْرَتُهُ',
  focus: 'Give an argument historical depth — kānati l-ajyālu l-sābiqatu qad + past for what earlier generations had done, ammā … fa- + present for today, yuʿīdu taʿrīfa + an object in -a, and both conditional types for youth futures.',
  icon: 'FaUserGraduate', iconSet: 'fa6',
});

const hs = (she) => ({ tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: she }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ').replace(/الناشِطِيَّةِ/g, 'النَّاشِطِيَّةِ'));
const site = fix(D.site('P5-L06'));
const RH = [['Earlier generation', 'kānati l-ajyālu … qad + past'], ['Today’s reality', 'ammā … fa- + present'], ['Redefine', 'yuʿīdu taʿrīfa + noun'], ['Youth futures', 'idhā … sa- · law … la-']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P5-L06', {
  support: `• Core: one past-perfect sentence about an earlier generation and one present sentence about today (website Core). Develop: add yuʿīdu taʿrīfa and a Type 1 (110 words). Stretch: 120 words with both conditionals and a conclusion connector + a verb in -a.
• Sensitivity: the Arab Spring is a politically contested topic, and youth unemployment or migration may touch students’ own families. Keep the focus on language and on youth agency; no student should have to state a political position.
• Faith link (optional): the youth of the Cave — «إِنَّهُمْ فِتْيَةٌ آمَنُوا بِرَبِّهِمْ وَزِدْنَاهُمْ هُدًى» (al-Kahf 18:13); and the hadith «اغْتَنِمْ خَمْسًا قَبْلَ خَمْسٍ: شَبَابَكَ قَبْلَ هَرَمِكَ …» — youth as a trust and an opportunity.
• Grammar links: past perfect kāna … qad (P3, P5-L05) · ammā … fa- (P2) · yuʿīdu tashkīla (P5-L04) · Type 1 / Type 2 (P3-L05) · wa-bināʾan ʿalā mā sabaqa (P5-L05).`,
  teach: 'The intergenerational past perfect, ammā … fa- + present, yuʿīdu taʿrīfa + object, youth futures with both conditionals.',
  wedo: 'Match youth pictures, build a generational line, sort earlier / today / future.',
  next: { nextCode: 'P5-L07', nextTitle: 'Constructing a Balanced Argument — The Art of Arabic Essay Writing', nextAr: 'فَنُّ كِتَابَةِ المَقَالِ' },
  objectives: ['Describe youth challenges and empowerment with formal intergenerational language.', 'Use the past perfect for what earlier generations had done.', 'Use yuʿīdu taʿrīfa for how today’s youth redefine roles.', 'Analyse youth futures with both conditional types and a conclusion connector.'],
  rulesAr: 'المَاضِي التَّامُّ بَيْنَ الأَجْيَالِ',
  ruleEx: [['كَانَتِ الأَجْيَالُ السَّابِقَةُ قَدْ كَافَحَتْ مِنْ أَجْلِ الاسْتِقْلَالِ'], ['أَمَّا شَبَابُ اليَوْمِ، فَيُكَافِحُ مِنْ أَجْلِ الشَّفَافِيَّةِ'], ['يُعِيدُ شَبَابُ اليَوْمِ تَعْرِيفَ النَّاشِطِيَّةِ الاجْتِمَاعِيَّةِ'], ['لَوْ كَانَتِ البَطَالَةُ أَقَلَّ، لَتَرَاجَعَتِ الهِجْرَةُ']],
  doNow: {
    questions: [
      q('What does جِيلُ الشَّبَابِ mean?', ['the youth generation', 'a youth club', 'a young teacher'], 'Prepared at home (P5-L05).'),
      q('What does المُشَارَكَةُ السِّيَاسِيَّةُ mean?', ['political participation', 'a political party', 'sharing a meal'], 'Prepared at home (P5-L05).'),
      q('What does الطُّمُوحُ mean?', ['ambition', 'frustration', 'patience'], 'Prepared at home (P5-L05).'),
      q('Complete: يَرْفُضُ النَّاشِطُونَ أَنْ ___ ازْدِوَاجِيَّةُ المَعَايِيرِ.', ['تَسْتَمِرَّ', 'تَسْتَمِرُّ', 'اسْتَمَرَّتْ'], 'P5-L05: yarfuḍu an + -a.'),
      q('Which connector closes an essay?', ['وَبِنَاءً عَلَى مَا سَبَقَ', 'وَأَيْضًا', 'ثُمَّ'], 'P5-L05: a formal conclusion connector.'),
    ],
    keyIdea: { text: 'Then and now: what earlier generations HAD done (kānat … qad) — and what today’s youth DO (ammā … fa-).', ar: '{w|كَانَتِ} الأَجْيَالُ {w|قَدْ} كَافَحَتْ … {k|أَمَّا} شَبَابُ اليَوْمِ {k|فَـ}يُعِيدُ تَعْرِيفَ …' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P5-L05. Questions 4–5 retrieve the refusal trigger and the formal conclusion (P5-L05) — today’s essay closes the same way.',
  },
  routes: {
    core: ['I can name 8 youth words.', 'I can write a past-perfect sentence about an earlier generation.'],
    develop: ['I can contrast with today: ammā … fa- + present.', 'I can use yuʿīdu taʿrīfa + an object in -a.'],
    stretch: ['I can analyse youth futures with both conditionals.', 'I can write a 120-word youth-empowerment analysis.'],
  },
  bridge: [
    { ar: 'تَعْرِيفٌ', urdu: 'تعریف', tr: 'tārīf', en: 'Arabic: a definition · Urdu: praise' },
    { ar: 'مُسْتَقْبَلٌ', urdu: 'مستقبل', tr: 'mustaqbil', en: 'the future' },
    { ar: 'سِيَاسَةٌ', urdu: 'سیاست', tr: 'siyāsat', en: 'politics' },
    { ar: 'مُجْتَمَعٌ', urdu: 'معاشرہ', tr: 'muāshara', en: 'Arabic society = مُجْتَمَعٌ (Arabic مُعَاشَرَةٌ = companionship)' },
    { ar: 'انْقِلَابٌ', urdu: 'انقلاب', tr: 'inqilāb', en: 'Arabic: a coup · Urdu: a revolution (Arabic ثَوْرَةٌ)' },
  ],
  bridgeNotes: 'URDU BRIDGE: مستقبل and سیاست are shared. Three traps: Urdu تعریف = praise, but Arabic التَّعْرِيفُ = a DEFINITION — so يُعِيدُ تَعْرِيفَ = re-defines (not re-praises). Urdu معاشرہ = society, but in Arabic society is المُجْتَمَعُ. Urdu انقلاب = a revolution; in Arabic انْقِلَابٌ is usually a military COUP.',
  core: ['كَانَتِ الأَجْيَالُ السَّابِقَةُ قَدْ', 'جِيلُ الشَّبَابِ', 'يُعِيدُ تَعْرِيفَ', 'يَقُودُ التَّغْيِيرَ', 'يُسْهِمُ فِي تَغْيِيرِ', 'يَصُوغُ مُسْتَقْبَلَهُ', 'المُشَارَكَةُ السِّيَاسِيَّةُ', 'المُجْتَمَعُ المَدَنِيُّ', 'الطُّمُوحُ', 'الإِحْبَاطُ', 'صَوْتُ الشَّبَابِ', 'شَرْطٌ أَسَاسِيٌّ'],
  forms: {
    'يُعِيدُ تَعْرِيفَ': hs('تُعِيدُ تَعْرِيفَ'), 'يَقُودُ التَّغْيِيرَ': hs('تَقُودُ التَّغْيِيرَ'), 'يَقُودُ': hs('تَقُودُ'), 'يُسْهِمُ فِي تَغْيِيرِ': hs('تُسْهِمُ فِي تَغْيِيرِ'), 'يُشَارِكُ فِي': hs('تُشَارِكُ فِي'),
    'يَصُوغُ مُسْتَقْبَلَهُ': { tag: 'he · she · they', forms: [{ l: 'she', ar: 'تَصُوغُ مُسْتَقْبَلَهَا' }, { l: 'they', ar: 'يَصُوغُونَ مُسْتَقْبَلَهُمْ' }] },
    'جِيلُ الشَّبَابِ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'أَجْيَالُ الشَّبَابِ' }] }, 'صَوْتُ الشَّبَابِ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'أَصْوَاتُ الشَّبَابِ' }] },
    'شَرْطٌ أَسَاسِيٌّ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'شُرُوطٌ أَسَاسِيَّةٌ' }] }, 'النَّاشِطُونَ الشَّبَابُ': { tag: 'm. · f.', forms: [{ l: 'f. pl.', ar: 'النَّاشِطَاتُ الشَّابَّاتُ' }] },
  },
  vocabNotes: {
    0: 'Then and now: كَانَتِ الأَجْيَالُ السَّابِقَةُ قَدْ + past (had …) — the generations (non-human plural) take the feminine كَانَتْ … كَافَحَتْ. With جِيلٌ or الشَّبَابُ use the masculine: كَانَ الشَّبَابُ قَدْ أَطْلَقَ …',
    1: 'Challenges and power: الإِحْبَاطُ (frustration) and ضَغْطُ الأَقْرَانِ (peer pressure) vs الطُّمُوحُ (ambition) and صَوْتُ الشَّبَابِ (the youth voice) — a ready-made concession–refutation.',
    2: 'Change verbs: يُسْهِمُ فِي تَغْيِيرِ (contributes to changing) and يُعِيدُ تَعْرِيفَ both put a noun in -a or an iḍāfa straight after the verb. يَصُوغُ مُسْتَقْبَلَهُ = shapes its future — the closing image of the topic.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the intergenerational past perfect (website rule 1, teaching point 1 and mistake 1) · Core', title: 'What earlier generations had done', ar: 'كَانَ … قَدْ',
      cols: [{ label: 'Subject', w: 3.0, size: 18 }, { label: 'kāna / kānat', w: 1.7, size: 19 }, { label: 'qad + past', w: 2.4, size: 19 }, { label: 'Example (website texts)', w: 5.23, size: 16 }],
      rows: [
        { core: true, cells: ['الأَجْيَالُ السَّابِقَةُ (f.)', '{w|كَانَتِ}', '{w|قَدْ} كَافَحَتْ', 'كَانَتِ الأَجْيَالُ السَّابِقَةُ قَدْ كَافَحَتْ مِنْ أَجْلِ الاسْتِقْلَالِ'] },
        { core: true, cells: ['الأَجْيَالُ (f.)', '{w|كَانَتِ}', '{w|قَدْ} وَاجَهَتْ', 'كَانَتِ الأَجْيَالُ قَدْ وَاجَهَتْ تَحَدِّيَاتِ التَّنْمِيَةِ'] },
        { cells: ['شَبَابُ السَّبْعِينِيَّاتِ (m.)', '{k|كَانَ}', '{k|قَدْ} حَلِمَ', 'كَانَ شَبَابُ السَّبْعِينِيَّاتِ قَدْ حَلِمَ بِالتَّحَرُّرِ'] },
        { cells: ['شَبَابُ العَقْدِ المَاضِي (m.)', '{k|كَانَ}', '{k|قَدْ} أَطْلَقَ', 'كَانَ شَبَابُ العَقْدِ المَاضِي قَدْ أَطْلَقَ شَرَارَةَ الرَّبِيعِ العَرَبِيِّ'] },
        { cells: ['✗ no qad', 'كَانَتِ', '✗ كَافَحَتْ', '✗ كَانَتِ الأَجْيَالُ السَّابِقَةُ كَافَحَتْ → ✓ … {w|قَدْ} كَافَحَتْ'] },
      ],
      ltr: true,
      foot: 'Website mistake 1: the past perfect needs qad between kānat and the past verb.',
      notes: `GRAMMAR PART 1 — website rule “Earlier generation”, teaching point 1 (“The past perfect gives the argument historical depth”) and mistake 1.
Agreement: الأَجْيَالُ (non-human plural) → feminine singular كَانَتْ … كَافَحَتْ. شَبَابُ … (treated as one group, masculine) → كَانَ … حَلِمَ / أَطْلَقَ.
Why the past perfect? It sets the earlier generation BEHIND today’s story — a “had” before the “now”. Without قَدْ the sentence loses that depth (and the website marks it wrong).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · then → now (website rules 1–3, teaching point 1, quiz 2 and 8) · Develop', title: 'Then — as for today …', ar: 'أَمَّا … فَـ',
      cards: [
        { chip: 'THEN · CORE', color: '6B4C9A', head: 'كَانَتْ … قَدْ', big: 'كَانَتِ الأَجْيَالُ السَّابِقَةُ قَدْ كَافَحَتْ مِنْ أَجْلِ الاسْتِقْلَالِ.', en: 'Earlier generations had struggled for independence.', clue: 'past perfect' },
        { chip: 'NOW · DEVELOP', color: '1D5FBF', head: 'أَمَّا … فَـ', big: 'أَمَّا شَبَابُ اليَوْمِ، فَيُكَافِحُ مِنْ أَجْلِ الشَّفَافِيَّةِ.', en: 'As for today’s youth, they struggle for transparency.', clue: 'ammā … fa- + present' },
        { chip: 'REDEFINE · STRETCH', color: '1E6B52', head: 'فَيُعِيدُ تَعْرِيفَ', big: 'أَمَّا اليَوْمَ، فَيُعِيدُ الشَّبَابُ تَعْرِيفَ المُشَارَكَةِ المَدَنِيَّةِ.', en: 'Today, youth redefine civic participation.', clue: 'fa- + yuʿīdu' },
      ],
      error: { text: 'Website quiz 2: after ammā, the second half opens with fa- and a PRESENT verb.', pairs: [['أَمَّا شَبَابُ اليَوْمِ، فَيُكَافِحُ', 'وَشَبَابُ اليَوْمِ كَافَحَ']] },
      notes: `GRAMMAR PART 2 — website rules “Earlier generation” and “Today’s reality”, teaching point 1 (“The tense contrast is the narrative”), quiz 2 and quiz 8.
أَمَّا … فَـ = as for … (then): the فَـ is compulsory and sticks to the next word (فَيُكَافِحُ · فَيُعِيدُ). Students met it in P2; here it carries the whole then → now contrast.
Read the three cards right to left as ONE paragraph: past perfect → ammā … fa- → redefine. That is the heart of today’s writing task.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · yuʿīdu taʿrīfa + an object (website rule 3, teaching point 2, mistake 2 and quiz 4) · Develop', title: 'Redefine: the object takes -a', ar: 'يُعِيدُ تَعْرِيفَ',
      cols: [{ label: 'Verb', w: 2.1, size: 19 }, { label: 'Subject', w: 2.2, size: 18 }, { label: 'Object (-a)', w: 1.9, size: 19 }, { label: '+ what is redefined', w: 2.6, size: 18 }, { label: 'Meaning', w: 3.53 }],
      rows: [
        { core: true, cells: ['{w|يُعِيدُ}', 'شَبَابُ اليَوْمِ', '{e|تَعْرِيفَ}', 'النَّاشِطِيَّةِ', 'today’s youth redefine activism'] },
        { core: true, cells: ['{w|يُعِيدُ}', 'الشَّبَابُ', '{e|تَعْرِيفَ}', 'المُشَارَكَةِ المَدَنِيَّةِ', 'youth redefine civic participation'] },
        { cells: ['أَنْ {k|يُعِيدَ}', 'المُجْتَمَعُ', '{e|تَعْرِيفَ}', 'دَوْرِ الشَّبَابِ', 'that society (should) redefine youth’s role'] },
        { cells: ['{w|يُعِيدُ}', 'الذَّكَاءُ الاصْطِنَاعِيُّ', '{e|تَشْكِيلَ}', 'سُوقِ العَمَلِ', 'AI reshapes the job market (P5-L04)'] },
        { cells: ['✗ يُعِيدُ', 'الشَّبَابُ', '✗ تَعْرِيفُ', 'النَّاشِطِيَّةِ', '→ ✓ taʿrīfa (object, -a)'] },
      ],
      ltr: true,
      foot: 'Website mistake 2: yuʿīdu … taʿrīfu ✗ → taʿrīfa ✓. The noun after taʿrīfa is genitive (-i): an iḍāfa.',
      notes: `GRAMMAR PART 3 — website rule “Redefine”, teaching point 2 (“تَعْرِيفَ is the object of يُعِيدُ, so it carries a fatḥa”), mistake 2 and quiz 4.
Three endings in one phrase: يُعِيدُ (verb, -u) · الشَّبَابُ (subject, -u) · تَعْرِيفَ (object, -a) · النَّاشِطِيَّةِ (iḍāfa, -i).
Row 3: after أَنْ the VERB changes too — أَنْ يُعِيدَ (subjunctive -a), but تَعْرِيفَ is still the object. Two different -a’s, as in P5-L04.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · youth futures (website rule 4, mistake 3, listening and writing model) · Stretch', title: 'From statistics to futures', ar: 'مُسْتَقْبَلُ الشَّبَابِ',
      cols: [{ label: 'Tool', w: 2.3 }, { label: 'Example (website texts)', w: 7.6, size: 17 }, { label: 'Range', w: 2.43 }],
      rows: [
        { core: true, cells: ['statistics', '{p|تُشِيرُ} الإِحْصَاءَاتُ {p|إِلَى أَنَّ} سِتِّينَ بِالمِئَةِ مِنْ سُكَّانِ العَالَمِ العَرَبِيِّ دُونَ الثَّلَاثِينَ', 'tushīru ilā anna'] },
        { cells: ['Type 1', '{k|إِذَا} أَتَاحَتِ الحُكُومَاتُ فُرَصَ المُشَارَكَةِ، {k|سَتَكْتَسِبُ} شَرْعِيَّةً أَوْسَعَ', 'idhā … sa-'] },
        { core: true, cells: ['Type 2', '{m|لَوْ} كَانَتِ البَطَالَةُ أَقَلَّ، {m|لَتَرَاجَعَتْ} مَوْجَاتُ الهِجْرَةِ', 'law … la-'] },
        { cells: ['conclusion', '{e|وَبِنَاءً عَلَى مَا سَبَقَ}، يَبْقَى تَمْكِينُ الشَّبَابِ شَرْطًا أَسَاسِيًّا', 'yabqā + -an'] },
        { cells: ['+ purpose', 'مِنَ الضَّرُورِيِّ أَنْ يُعِيدَ المُجْتَمَعُ تَعْرِيفَ دَوْرِ الشَّبَابِ {w|لِكَيْ} يُسْهِمَ فِي صِيَاغَةِ مُسْتَقْبَلِهِ', 'an / li-kay + -a'] },
      ],
      ltr: true,
      foot: 'Website mistake 3: law … sa-tarājaʿat ✗ → la-tarājaʿat ✓ — a Type 2 result takes la-.',
      notes: `GRAMMAR PART 4 — website rule “Youth futures”, mistake 3, the listening and the writing model.
Row 2 = a real policy (if governments open doors, they WILL gain legitimacy). Row 3 = what could have been (had unemployment been lower, migration WOULD have fallen).
Note: the website sorter files the Type 2 under “Future (conditional)” — discuss: is law … la- about the future, or about an unreal present / past? (It is unreal — a good Stretch question.)
Row 4: يَبْقَى … شَرْطًا أَسَاسِيًّا — yabqā (remains), like kāna, makes its predicate -an.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me write a youth-empowerment analysis',
    steps: [
      { head: 'Statistics', ar: '{p|تُشِيرُ} … {p|إِلَى أَنَّ} …', think: 'Evidence first.' },
      { head: 'Then', ar: '{w|كَانَتِ} الأَجْيَالُ … {w|قَدْ} …', think: 'Past perfect.' },
      { head: 'Now', ar: '{k|أَمَّا} اليَوْمَ، {k|فَيُعِيدُ} … {e|تَعْرِيفَ}', think: 'Object in -a.' },
      { head: 'Futures', ar: '{m|لَوْ} … {m|لَـ} · {e|وَبِنَاءً عَلَى مَا سَبَقَ}', think: 'Close.' },
    ],
    legend: ['p', 'w', 'k', 'e', 'm'], legendLabels: { p: 'STATISTICS', w: 'THEN', k: 'NOW', e: 'REDEFINE / CLOSE', m: 'TYPE 2' },
    model: '{p|تُشِيرُ} الإِحْصَاءَاتُ {p|إِلَى أَنَّ} سِتِّينَ بِالمِئَةِ مِنْ سُكَّانِ العَالَمِ العَرَبِيِّ دُونَ الثَّلَاثِينَ عَامًا. {w|كَانَتِ} الأَجْيَالُ السَّابِقَةُ {w|قَدْ} كَافَحَتْ مِنْ أَجْلِ الاسْتِقْلَالِ. {k|أَمَّا} اليَوْمَ، {k|فَيُعِيدُ} الشَّبَابُ {e|تَعْرِيفَ} النَّاشِطِيَّةِ عَبْرَ الوَسَائِطِ الرَّقْمِيَّةِ. {m|وَلَوْ} كَانَتِ البَطَالَةُ أَقَلَّ، {m|لَتَرَاجَعَتْ} مَوْجَاتُ الهِجْرَةِ. {e|وَبِنَاءً عَلَى مَا سَبَقَ}، يَبْقَى تَمْكِينُ الشَّبَابِ شَرْطًا أَسَاسِيًّا لِأَيِّ تَنْمِيَةٍ.',
    modelEn: 'Statistics indicate that sixty per cent of the Arab world’s population is under thirty. Earlier generations had struggled for independence. Today, however, young people are redefining activism through digital media. Had unemployment been lower, migration waves would have receded. Based on the above, empowering youth remains a basic condition for any development.',
    notes: 'I DO (3 min) — from the website listening and writing model. Think aloud: “Evidence first: tushīru … ilā anna. Then: kānati l-ajyālu … QAD kāfaḥat — don’t drop qad. Now: ammā l-yawma, FA-yuʿīdu … taʿrīfA (object, -a). What could have been: law … LA-tarājaʿat. Close: wa-bināʾan ʿalā mā sabaqa.”',
  },
  patternEn: ['earlier generations had struggled for national independence', 'as for today’s youth, they struggle for transparency and participation', 'today’s youth are redefining social activism'],
  gameKey: 'P5-L06',
  game: {
    title: 'Young lives: match the picture',
    pick: [0, 3, 5],
    en: ['Young people have big ambitions.', 'Unemployment is a challenge for some young people.', 'Youth initiatives can bring about change.'],
    icons: [[['fa6', 'FaUserGraduate', '1D5FBF'], ['fa6', 'FaBullseye', 'C0386B']], [['fa6', 'FaBriefcase', '6B4C9A'], ['fa6', 'FaCircleQuestion', 'C77700']], [['fa6', 'FaHandshake', '1D5FBF'], ['fa6', 'FaSeedling', '1E6B52']]],
    labels: ['ambition', 'unemployment', 'youth initiatives'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6; card 4 not used — waṣl kasra). Card 3 already has an + -a: يُمْكِنُ أَنْ تُحْدِثَ. Upgrade each card into a P5 sentence: كَانَتِ الأَجْيَالُ السَّابِقَةُ قَدْ … أَمَّا شَبَابُ اليَوْمِ فَلَهُمْ طُمُوحَاتٌ … · لَوْ كَانَتِ البَطَالَةُ أَقَلَّ، لَـ …',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build a generational line (website live builder)', title: 'Then + now + future', ar: 'ابْنِ سَطْرًا عَبْرَ الأَجْيَالِ',
      cols: [{ label: '1 · Then (past perfect)', w: 4.1, size: 16 }, { label: '2 · Now (ammā … fa-)', w: 4.1, size: 16 }, { label: '3 · Future / conclusion', w: 4.13, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Then circle qad, the fa- after ammā, and the la- or sa- in your future.',
      notes: `WE DO (3 min) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Core: read row 1 across. Develop: column 1 row 2 (masculine كَانَ … قَدْ أَطْلَقَ) — why not كَانَتْ? Stretch: replace column 3 with your own conclusion + a verb in -a: مِنَ الضَّرُورِيِّ أَنْ …`,
    },
  ],
  sorterTitle: 'Earlier generation, today — or future?',
  sorterCats: ['earlier generation (past perfect)', 'today (present)', 'future (conditional)'],
  sorterNotes: 'Then pair one “earlier” card with one “today” card using ammā … fa- to make a then → now sentence.',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: { ...site.writing, prompt: 'Write a 110–120-word youth-empowerment analysis. Open with reported statistics, use the past perfect for earlier generations, contrast with today’s youth (yuʿīdu taʿrīfa), analyse futures with both conditional types, and close with a conclusion connector + a verb in -a.', checklist: ['A reported-statistics opening.', 'The intergenerational past perfect (kānat … qad) contrasted with the present (ammā … fa-).', 'yuʿīdu taʿrīfa with an object in -a, and both conditional types.', 'A conclusion connector (wa-bināʾan ʿalā mā sabaqa) + a necessity subjunctive.'] }, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('يُعِيدُ تَعْرِيفَ + object.', 'yuʿīdu taʿrīfa + object.') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; لِكَيْ always written with its sukūn; الناشِطِيَّةِ vowelled in one teaching point; rule formulas, pattern tips, writing prompt and checklist in transliteration; sorter headings in transliteration; game cards 1, 2 and 4 not used; the past-perfect, then → now, redefine and futures tables are teacher-built from the website texts. All other website items are used as published.',
  hints: ['kānat … kāfaḥat (no qad)?', 'yuʿīdu … taʿrīfu?', 'law … sa-tarājaʿat?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: kānat … qad · ammā … fa-yuʿīdu taʿrīfa · law … la-.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and note the two past-perfect sentences (one feminine, one masculine).',
  gloss: [
    ['يَقُولُ المُحَلِّلُ: تُشِيرُ الإِحْصَاءَاتُ إِلَى أَنَّ سِتِّينَ بِالمِئَةِ مِنْ سُكَّانِ العَالَمِ العَرَبِيِّ دُونَ الثَّلَاثِينَ عَامًا.', 'The analyst says: statistics indicate that sixty per cent of the Arab world’s population is under thirty.'],
    ['وَأَكَّدَ تَقْرِيرُ التَّنْمِيَةِ البَشَرِيَّةِ أَنَّ الشَّبَابَ يَمْلِكُونَ طَاقَاتٍ إِبْدَاعِيَّةً هَائِلَةً.', 'The Human Development Report confirmed that young people possess enormous creative energies.'],
    ['كَانَتِ الأَجْيَالُ السَّابِقَةُ قَدْ كَافَحَتْ مِنْ أَجْلِ الاسْتِقْلَالِ الوَطَنِيِّ، وَكَانَ شَبَابُ العَقْدِ المَاضِي قَدْ أَطْلَقَ شَرَارَةَ الرَّبِيعِ العَرَبِيِّ.', 'Earlier generations had struggled for national independence, and the youth of the last decade had lit the spark of the Arab Spring.'],
    ['أَمَّا شَبَابُ اليَوْمِ، فَيُعِيدُ تَعْرِيفَ النَّاشِطِيَّةِ عَبْرَ الوَسَائِطِ الرَّقْمِيَّةِ. إِذَا أَتَاحَتِ الحُكُومَاتُ فُرَصَ المُشَارَكَةِ، سَتَكْتَسِبُ شَرْعِيَّةً أَوْسَعَ.', 'As for today’s youth, they are redefining activism through digital media. If governments open up opportunities to participate, they will gain wider legitimacy.'],
    ['وَلَوْ كَانَتِ البَطَالَةُ أَقَلَّ، لَتَرَاجَعَتْ مَوْجَاتُ الهِجْرَةِ. وَبِنَاءً عَلَى مَا سَبَقَ، يَبْقَى تَمْكِينُ الشَّبَابِ شَرْطًا أَسَاسِيًّا لِأَيِّ تَنْمِيَةٍ.', 'Had unemployment been lower, migration waves would have receded. Based on the above, empowering youth remains a basic condition for any development.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا الَّذِي كَانَتِ الأَجْيَالُ السَّابِقَةُ قَدْ فَعَلَتْهُ؟' },
      { route: 'develop', ar: 'كَيْفَ يُعِيدُ شَبَابُ اليَوْمِ تَعْرِيفَ المُشَارَكَةِ؟' },
      { route: 'stretch', ar: 'مَاذَا سَيَحْدُثُ إِذَا أُتِيحَتْ لِلشَّبَابِ الفُرَصُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'كَانَتِ الأَجْيَالُ السَّابِقَةُ قَدْ ______ .' },
      { route: 'develop', ar: 'أَمَّا اليَوْمَ، فَيُعِيدُ الشَّبَابُ تَعْرِيفَ ______ .' },
      { route: 'stretch', ar: 'إِذَا أُتِيحَتْ لِلشَّبَابِ الفُرَصُ، سَيَصُوغُونَ ______ .' },
    ],
    modelEn: ['What had earlier generations done?', 'Earlier generations had struggled for independence.', 'And today’s youth?', 'Today, young people are redefining activism through digital media.'],
    notes: 'Website prompts and model. Pair task: “grandparent and grandchild” — A (the grandparent) answers with kānat … qad; B (today’s youth) replies ammā l-yawma, fa- … and adds a Type 1 about the future. Stretch stem: sa- + yaṣūghūna = they will shape (one word).',
  },
  write: {
    core: { amount: '2 sentences', how: 'Website Core: one past-perfect sentence about an earlier generation and one present sentence about today.' },
    develop: { amount: '110 words', how: 'Website Develop: add yuʿīdu taʿrīfa and a Type 1 conditional.' },
    stretch: { amount: '110–120 words', how: 'Website Stretch: both conditionals and a conclusion connector + a verb in -a.' },
  },
  frames: {
    core: [
      { en: 'Earlier generations had struggled for …', ar: 'كَانَتِ الأَجْيَالُ السَّابِقَةُ قَدْ كَافَحَتْ مِنْ أَجْلِ ______ .' },
      { en: 'Earlier generations had faced …', ar: 'كَانَتِ الأَجْيَالُ قَدْ وَاجَهَتْ ______ .' },
      { en: 'As for today’s youth, they …', ar: 'أَمَّا شَبَابُ اليَوْمِ، فَيُكَافِحُ مِنْ أَجْلِ ______ .' },
      { en: 'Young people are redefining …', ar: 'يُعِيدُ الشَّبَابُ تَعْرِيفَ ______ .' },
    ],
    develop: [
      { en: 'Statistics indicate that …', ar: 'تُشِيرُ الإِحْصَاءَاتُ إِلَى أَنَّ ______ .' },
      { en: 'If governments open up …, they will …', ar: 'إِذَا أَتَاحَتِ الحُكُومَاتُ ______ ، سَتَكْتَسِبُ ______ .' },
      { en: 'Had unemployment been lower, …', ar: 'لَوْ كَانَتِ البَطَالَةُ أَقَلَّ، لَتَرَاجَعَتْ ______ .' },
      { en: 'Based on the above, it is essential that …', ar: 'وَبِنَاءً عَلَى مَا سَبَقَ، مِنَ الضَّرُورِيِّ أَنْ ______ .' },
    ],
    bank: ['الاسْتِقْلَالِ الوَطَنِيِّ', 'تَحَدِّيَاتِ الاسْتِعْمَارِ وَالتَّنْمِيَةِ', 'الشَّفَافِيَّةِ وَالمُشَارَكَةِ', 'النَّاشِطِيَّةِ الاجْتِمَاعِيَّةِ', 'المُشَارَكَةِ المَدَنِيَّةِ', 'دُونَ الثَّلَاثِينَ', 'فُرَصَ المُشَارَكَةِ', 'شَرْعِيَّةً أَوْسَعَ', 'مَوْجَاتُ الهِجْرَةِ', 'دَوْرِ الشَّبَابِ', 'صَوْتُ الشَّبَابِ', 'الطَّاقَاتُ الإِبْدَاعِيَّةُ'],
  },
  stretch: [
    ['طَاقَاتٍ إِبْدَاعِيَّةً هَائِلَةً', 'enormous creative energies'],
    ['أَطْلَقَ شَرَارَةَ', 'lit the spark of'],
    ['عَبْرَ الوَسَائِطِ الرَّقْمِيَّةِ', 'through digital media'],
    ['شَرْعِيَّةً شَعْبِيَّةً أَوْسَعَ', 'wider popular legitimacy'],
    ['لِكَيْ يُسْهِمَ فِي صِيَاغَةِ مُسْتَقْبَلِهِ', 'so that it contributes to shaping its future'],
  ],
  modelEn: 'Sixty per cent of Arabs are under thirty, and a UN report confirmed that young people possess enormous creative energies. Earlier generations had faced the challenges of colonialism and development, and young people had lit the spark of the Arab Spring in order to build a fairer society. Today, young people are redefining activism through digital media. If governments open up real participation, they will gain wider legitimacy. Had youth unemployment been lower, migration waves would have been smaller. Based on the above, it is essential that society redefine the role of youth so that it contributes to shaping its future.',
  find: ['tushīru … ilā anna', 'kānat … qad wājahat', 'ammā … fa-yuʿīdu taʿrīfa', 'law … la-kānat'],
  modelNotes: 'Website writing model. Evidence: تُشِيرُ … إِلَى أَنَّ · أَكَّدَ … أَنَّ · كَانَتِ الأَجْيَالُ … قَدْ وَاجَهَتْ · كَانَ الشَّبَابُ قَدْ أَطْلَقَ … لِكَيْ يَبْنِيَ · أَمَّا اليَوْمَ، فَيُعِيدُ … تَعْرِيفَ · إِذَا أَتَاحَتْ … سَتَكْتَسِبُ · لَوْ كَانَتْ … لَكَانَتْ · وَبِنَاءً عَلَى مَا سَبَقَ … أَنْ يُعِيدَ … لِكَيْ يُسْهِمَ.',
  selfCheck: [
    { route: 'core', text: 'My past perfect has kānat (or kāna) + qad + a past verb.' },
    { route: 'core', text: 'I contrasted then and now with ammā … fa- + a present verb.' },
    { route: 'develop', text: 'After yuʿīdu, taʿrīfa ends in -a and the next noun in -i.' },
    { route: 'develop', text: 'My Type 2 result starts with la- (not sa-).' },
    { route: 'stretch', text: 'I used both conditionals and closed with a connector + a verb in -a.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['سِتِّينَ بِالمِئَةِ', 'sixty per cent'], ['دُونَ الثَّلَاثِينَ', 'under thirty'], ['يَمْلِكُونَ', 'they possess'], ['هَائِلَةً', 'enormous'], ['شَرَارَةَ', 'the spark'],
    ['الوَسَائِطِ', 'media, channels'], ['شَرْعِيَّةً', 'legitimacy'], ['تَمْكِينُ', 'empowering'], ['إِهْمَالًا', 'neglect'], ['صِيَاغَةِ', 'shaping, drafting'],
  ],
  prep: {
    words: [['التَّمْهِيدُ', 'the introduction', '—'], ['نَقِيضُ الحُجَّةِ', 'the counter-argument', 'pl. الحُجَجُ'], ['الخَاتِمَةُ', 'the conclusion', 'pl. الخَوَاتِمُ'], ['لَا يُمْكِنُ إِنْكَارُ أَنَّ', 'it cannot be denied that', '+ noun in -a'], ['وَفِي ضَوْءِ مَا سَبَقَ', 'in light of the above', '—']],
    questionEn: 'What makes an essay convincing?',
    questionAr: 'يَكُونُ المَقَالُ مُقْنِعًا عِنْدَمَا ______ .',
    homework: {
      core: 'Write one past-perfect sentence about your grandparents’ generation and one present sentence about yours.',
      develop: 'Add yuʿīdu taʿrīfa and a Type 1 conditional (110 words).',
      stretch: 'Website writing task: a 110–120-word youth-empowerment analysis.',
    },
    wordsSource: 'The five words come from the website P5-L07 vocabulary (essay construction).',
  },
  remember: 'Remember: kānat … QAD + past for what earlier generations HAD done; ammā … FA- + present for today; yuʿīdu taʿrīfA + noun-i; idhā … sa- / law … la- for the futures.',
});

module.exports = { meta, slides };
