'use strict';
/* P3-L05 · Sustainable Tourism — The Ethics and Impact of Travel — website: Pathways › Progression › P3 › P3-L05 (impact verbs with their complements:
 * يُسْهِمُ فِي, يُلْحِقُ الضَّرَرَ بِـ; a real concern with إِذَا … سَـ and a counterfactual regret with لَوْ … لَـ; citing a report and turning with غَيْرَ أَنَّ).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live builder, mission and visual game used as published, with waṣl
 * alif shown without a kasra and two spelling fixes: عَلَاوَةً → عِلَاوَةً, and the writing checklist words given their full case endings.
 * English added to the patterns; sorter headings in transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P3')({
  n: 5, fileTitle: 'Sustainable_Tourism', chip: 'Argument',
  title: 'Sustainable Tourism — The Ethics and Impact of Travel', arabic: 'السِّيَاحَةُ المُسْتَدَامَةُ — أَخْلَاقِيَّاتُ السَّفَرِ وَتَأْثِيرُهُ',
  focus: 'Argue about the ethics of travel: yushim fī and yulḥiq al-ḍarar bi-, a real concern with idhā … sa-, a counterfactual regret with law … la-, and a balanced turn with tushīr al-taqārīr … ghayra anna.',
  icon: 'FaEarthAfrica', iconSet: 'fa6',
});

const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const sg = (s) => ({ tag: 'sg · pl', forms: [{ l: 'sg.', ar: s }] });
const hs = (she) => ({ tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: she }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/عَلَاوَةً/g, 'عِلَاوَةً').replace('بَصْمَة كَرْبُونِيَّة / انْبِعَاثَات', 'بَصْمَةٌ كَرْبُونِيَّةٌ / انْبِعَاثَاتٌ'));
const site = fix(D.site('P3-L05'));
const RH = [['Impact verbs', 'yushim fī · yulḥiq al-ḍarar bi-'], ['Real concern (Type 1)', 'idhā + past → sa-'], ['Counterfactual regret (Type 2)', 'law + past → la-'], ['Cite and balance', 'tushīr al-taqārīr … ghayra anna']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P3-L05', {
  support: `• Core: three benefit and three harm sentences with correct complements (website Core). Develop: add a Type 1 concern and a Type 2 counterfactual. Stretch: a balanced 100–110-word argument citing a report and closing with a solution.
• Keep it balanced and hopeful: tourism brings jobs and pride as well as harm. Our faith teaches us to be trustees of the earth (khalīfa) and to avoid waste (isrāf) — a natural link for students who want to bring it in.
• The two conditionals are the heart of the lesson: idhā = a real, likely future (sa- + present); law = an unreal past (la- + past). The website’s commonest error is sa- after law.
• Grammar links: Type 1 (P1-L03) · law kuntu … la-kāna (P3-L02) · law lam … lamā (P3-L03) · reported speech ashāra ilā anna (P2-L02).`,
  teach: 'Impact verbs + complements, Type 1 vs Type 2, citing and balancing, data and passive.',
  wedo: 'Match sustainable choices, build a balanced argument, sort benefit / harm / solution.',
  next: { nextCode: 'P3-L06', nextTitle: 'Travel Problems and Solutions — Dealing With the Unexpected', nextAr: 'مَشَاكِلُ السَّفَرِ وَالحُلُولُ' },
  objectives: ['Use sustainable-tourism and environmental vocabulary.', 'Follow yushim with fī and yulḥiq al-ḍarar with bi-.', 'State a real concern with idhā … sa- and a counterfactual with law … la-.', 'Write a balanced sustainability argument.'],
  rulesAr: 'نَوْعَا الشَّرْطِ فِي الحُجَّةِ الأَخْلَاقِيَّةِ',
  ruleEx: [['تُسْهِمُ السِّيَاحَةُ فِي الاقْتِصَادِ', 'تُلْحِقُ السِّيَاحَةُ المُفْرِطَةُ الضَّرَرَ بِالتُّرَاثِ'], ['إِذَا وَاصَلَ السُّيَّاحُ بِهٰذِهِ الأَعْدَادِ، سَيَتَدَهْوَرُ التُّرَاثُ'], ['لَوْ كَانَتِ الرُّسُومُ أَعْلَى، لَكَانَتِ الأَعْدَادُ أَكْثَرَ تَنْظِيمًا'], ['تُشِيرُ التَّقَارِيرُ إِلَى أَنَّ السِّيَاحَةَ تُوَفِّرُ فُرَصَ عَمَلٍ', 'غَيْرَ أَنَّهَا قَدْ تُلْحِقُ الضَّرَرَ بِالبِيئَةِ']],
  doNow: {
    questions: [
      q('What does الاكْتِظَاظُ السِّيَاحِيُّ mean?', ['over-tourism', 'eco-tourism', 'a tourism tax'], 'Prepared at home (P3-L04).'),
      q('What does بَصْمَةٌ كَرْبُونِيَّةٌ mean?', ['a carbon footprint', 'a carbon tax', 'a green hotel'], 'Prepared at home (P3-L04).'),
      q('What does يُلْحِقُ الضَّرَرَ بِـ mean?', ['it causes harm to', 'it protects', 'it contributes to'], 'Prepared at home (P3-L04).'),
      q('Complete: تَتَمَيَّزُ فَاسُ ___ أَزِقَّتِهَا الضَّيِّقَةِ.', ['بِـ', 'عَلَى', 'فِي'], 'P3-L04: yatamayyaz is fixed with bi-.'),
      q('Choose the accurate recommendation.', ['إِذَا زُرْتَ المَغْرِبَ، فَلَا بُدَّ مِنْ زِيَارَةِ فَاسَ.', 'إِذَا زُرْتَ المَغْرِبَ، لَا بُدَّ زِيَارَةَ فَاسَ.', 'لَوْ زُرْتَ المَغْرِبَ، سَلَا بُدَّ مِنْ زِيَارَةِ فَاسَ.'], 'P3-L04: idhā … fa-lā budda min + verbal noun.'),
    ],
    keyIdea: { text: 'Real and likely → idhā … sa-. Unreal, in the past → law … la-.', ar: '{w|إِذَا} وَاصَلُوا، {w|سَـ}يَتَدَهْوَرُ · {k|لَوْ} نَظَّمْنَا، {k|لَـ}كَانَ أَفْضَلَ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P3-L04. Questions 4–5 retrieve yatamayyaz bi- and the idhā … fa-lā budda min recommendation (P3-L04) — today we use idhā again, this time for a warning.',
  },
  routes: {
    core: ['I can name 8 sustainable-tourism words.', 'I can use yushim fī and yulḥiq al-ḍarar bi-.'],
    develop: ['I can state a real concern with idhā … sa-.', 'I can state a regret with law … la-.'],
    stretch: ['I can cite a report and turn with ghayra anna.', 'I can write a balanced argument.'],
  },
  bridge: [
    { ar: 'ضَرَرٌ', urdu: 'ضرر', tr: 'zarar', en: 'harm, damage' },
    { ar: 'فَائِدَةٌ · فَوَائِدُ', urdu: 'فائدہ · فوائد', tr: 'fāida · fawāid', en: 'a benefit · benefits' },
    { ar: 'اقْتِصَادٌ', urdu: 'اقتصاد', tr: 'iqtisād', en: 'the economy (اقتصادی = economic)' },
    { ar: 'تَنْظِيمٌ', urdu: 'تنظیم', tr: 'tanzīm', en: 'organisation, regulation' },
    { ar: 'نِسْبَةٌ', urdu: 'نسبت', tr: 'nisbat', en: 'a proportion, a ratio' },
  ],
  bridgeNotes: 'URDU BRIDGE: ضرر، فائدہ، اقتصاد، تنظیم and نسبت are all shared. Careful with نسبت: in Urdu it often means “relation, connection”; in a report بِنِسْبَةِ ٢٠٪ means “by 20 per cent”.',
  core: ['السِّيَاحَةُ المُسْتَدَامَةُ', 'سِيَاحَةٌ مَسْؤُولَةٌ', 'الاكْتِظَاظُ السِّيَاحِيُّ', 'بَصْمَةٌ كَرْبُونِيَّةٌ', 'حِصَصُ دُخُولٍ', 'ضَرِيبَةُ السِّيَاحَةِ', 'يُسْهِمُ فِي', 'يُلْحِقُ الضَّرَرَ بِـ', 'يَحْمِي التُّرَاثَ', 'يَتَدَهْوَرُ', 'تُشِيرُ التَّقَارِيرُ إِلَى أَنَّ', 'غَيْرَ أَنَّ'],
  forms: {
    'بَصْمَةٌ كَرْبُونِيَّةٌ': sp('بَصَمَاتٌ كَرْبُونِيَّةٌ'), 'حِصَصُ دُخُولٍ': sg('حِصَّةُ دُخُولٍ'), 'ضَرِيبَةُ السِّيَاحَةِ': sp('ضَرَائِبُ السِّيَاحَةِ'), 'أَعْدَادٌ قِيَاسِيَّةٌ': sg('عَدَدٌ قِيَاسِيٌّ'),
    'فَوَائِدُ اقْتِصَادِيَّةٌ': sg('فَائِدَةٌ اقْتِصَادِيَّةٌ'), 'مُنْتَجَاتٌ مَحَلِّيَّةٌ': sg('مُنْتَجٌ مَحَلِّيٌّ'),
    'يُسْهِمُ فِي': hs('تُسْهِمُ فِي'), 'يُلْحِقُ الضَّرَرَ بِـ': hs('تُلْحِقُ الضَّرَرَ بِـ'), 'يَحْمِي التُّرَاثَ': hs('تَحْمِي التُّرَاثَ'), 'يُوَازِنُ بَيْنَ': hs('تُوَازِنُ بَيْنَ'), 'يَتَدَهْوَرُ': hs('يَتَدَهْوَرُ'),
  },
  vocabNotes: {
    0: 'Sustainable tourism: the problem (الاكْتِظَاظُ السِّيَاحِيُّ · بَصْمَةٌ كَرْبُونِيَّةٌ) and the solutions (حِصَصُ دُخُولٍ · ضَرِيبَةُ السِّيَاحَةِ). Venice and Amsterdam charge tourism taxes; Machu Picchu uses daily entry quotas.',
    1: 'Impact and argument verbs: each keeps its partner — يُسْهِمُ فِي · يُلْحِقُ الضَّرَرَ بِـ · يُوَازِنُ بَيْنَ … وَ … . يَتَدَهْوَرُ (to deteriorate) takes no object. With السِّيَاحَةُ as subject, use ta-: تُسْهِمُ · تُلْحِقُ.',
    2: 'Data and connectors: the language of a formal argument. تُشِيرُ التَّقَارِيرُ إِلَى أَنَّ cites evidence; غَيْرَ أَنَّ turns to the other side; عِلَاوَةً عَلَى ذٰلِكَ adds a further point.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · impact verbs and their complements (website rule 1 + teaching point 2) · Core', title: 'Every impact verb has a partner', ar: 'أَفْعَالُ التَّأْثِيرِ وَمُتَمِّمَاتُهَا',
      cols: [{ label: 'Verb', w: 2.6, size: 20 }, { label: 'Meaning', w: 1.9 }, { label: 'Partner', w: 1.6 }, { label: 'Example (website)', w: 6.23, size: 19 }],
      rows: [
        { core: true, cells: ['{w|يُسْهِمُ فِي}', 'contributes to', 'fī', 'تُسْهِمُ السِّيَاحَةُ {w|فِي} الاقْتِصَادِ المَحَلِّيِّ.'] },
        { core: true, cells: ['{k|يُلْحِقُ الضَّرَرَ}', 'causes harm to', 'bi-', 'تُلْحِقُ السِّيَاحَةُ المُفْرِطَةُ الضَّرَرَ {k|بِالتُّرَاثِ}.'] },
        { cells: ['{p|يَحْمِي}', 'protects', 'direct object', 'سِيَاحَةٌ مُسْتَدَامَةٌ تَحْمِي {p|التُّرَاثَ}.'] },
        { cells: ['{m|يُوَازِنُ بَيْنَ}', 'balances', 'bayna … wa-', 'وَازَنَتِ الحُكُومَاتُ {m|بَيْنَ} الرِّبْحِ {m|وَ}الحِمَايَةِ.'] },
        { cells: ['{e|يَتَدَهْوَرُ}', 'deteriorates', 'no object', '{e|سَيَتَدَهْوَرُ} حَالُ الأَبْنِيَةِ النَّبَطِيَّةِ.'] },
      ],
      ltr: true,
      foot: 'Website mistakes 1–2: tushim bi- ✗ → tushim fī ✓ · tulḥiq al-ḍarar al-turātha ✗ → bi-l-turāth ✓.',
      notes: `GRAMMAR PART 1 — website rule “Impact verbs”, teaching point 2 and mistakes 1–2. Rows 3–5 are from the website reading and listening texts.
Variation: the website also uses ضَرَرًا بَالِغًا (indefinite): تُلْحِقُ السِّيَاحَةُ الجَوِّيَّةُ ضَرَرًا بَالِغًا بِالبِيئَةِ — the partner بِـ stays.
Environment retrieval: الانْبِعَاثَاتُ الكَرْبُونِيَّةُ (carbon emissions) · البِيئَةُ (the environment) · المَوَاقِعُ الهَشَّةُ (fragile sites).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 2 · two conditionals, two jobs (website rules 2–3 + teaching point 1) · Develop', title: 'A real concern — or a regret?', ar: 'إِذَا لِلْمُحْتَمَلِ · لَوْ لِلْمُمْتَنِعِ',
      cols: [{ label: 'Job', w: 2.3 }, { label: 'Pattern', w: 2.5 }, { label: 'Example (website)', w: 7.53, size: 19 }],
      rows: [
        { core: true, cells: ['real concern', 'idhā + past → sa-', '{w|إِذَا} وَاصَلَ السُّيَّاحُ بِهٰذِهِ الأَعْدَادِ، {w|سَيَتَدَهْوَرُ} التُّرَاثُ.'] },
        { cells: ['real concern (neg.)', 'idhā lam → sa-', '{w|إِذَا لَمْ} نُنَظِّمِ الزِّيَارَاتِ، {w|سَيَتَدَهْوَرُ} التُّرَاثُ.'] },
        { core: true, cells: ['regret', 'law + past → la-', '{k|لَوْ} نَظَّمْنَا الزِّيَارَاتِ، {k|لَكَانَ} التُّرَاثُ أَفْضَلَ.'] },
        { cells: ['regret with kāna', 'law kāna → la-kāna', '{k|لَوْ كَانَتِ} الرُّسُومُ أَعْلَى، {k|لَكَانَتِ} الأَعْدَادُ أَكْثَرَ تَنْظِيمًا.'] },
        { cells: ['regret (neg. result)', 'law … lamā', '{k|لَوْ} وَازَنَتِ الحُكُومَاتُ …، {k|لَمَا} وَصَلَتِ المَوَاقِعُ إِلَى هٰذَا التَّدَهْوُرِ.'] },
      ],
      ltr: true,
      foot: 'Website common error: idhā for a regret, or sa- after law. law nazzamnā, sa-yakūnu ✗ → la-kāna ✓.',
      notes: `GRAMMAR PART 2 — website rules “Real concern (Type 1)” and “Counterfactual regret (Type 2)”, teaching point 1, the website table and mistake 3.
Ask: “Has it happened? Can it still happen?” If it is a real trend that can still happen → إِذَا … سَـ. If it is the past and it did NOT happen → لَوْ … لَـ.
Row 2: لَمْ + jussive after إِذَا (نُنَظِّمِ — the kasra is only there to join the next word). Row 5: the negative result لَمَا (P3-L03), from the website reading.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · cite, turn, add (website rule 4 + reading) · Develop / Stretch', title: 'Build a balanced argument', ar: 'اسْتَشْهِدْ · وَازِنْ · أَضِفْ',
      cards: [
        { chip: 'CITE · CORE', color: '1D5FBF', head: 'تُشِيرُ التَّقَارِيرُ إِلَى أَنَّ', big: 'تُشِيرُ التَّقَارِيرُ إِلَى أَنَّ السِّيَاحَةَ تُوَفِّرُ فُرَصَ عَمَلٍ.', en: 'Reports indicate that tourism provides jobs.', clue: 'anna + accusative.' },
        { chip: 'TURN · DEVELOP', color: 'C77700', head: 'غَيْرَ أَنَّهَا', big: 'غَيْرَ أَنَّهَا قَدْ تُلْحِقُ الضَّرَرَ بِالبِيئَةِ.', en: 'However, it may cause harm to the environment.', clue: 'ghayra anna + pronoun.' },
        { chip: 'ADD · STRETCH', color: '1E6B52', head: 'عِلَاوَةً عَلَى ذٰلِكَ', big: 'عِلَاوَةً عَلَى ذٰلِكَ، تَزِيدُ البَصْمَةَ الكَرْبُونِيَّةَ.', en: 'Moreover, it increases the carbon footprint.', clue: 'A further point.' },
      ],
      error: { text: 'Website mistake 3: a Type 2 result takes la-, not sa-.', pairs: [['لَوْ نَظَّمْنَا الزِّيَارَاتِ، لَكَانَ التُّرَاثُ أَفْضَلَ', 'لَوْ نَظَّمْنَا الزِّيَارَاتِ، سَيَكُونُ التُّرَاثُ أَفْضَلَ']] },
      notes: `GRAMMAR PART 3 — website rule “Cite and balance” and the reading: سِلَاحٌ ذُو حَدَّيْنِ (a double-edged sword) · فَمِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى (on the one hand … on the other).
Like إِنَّ, both أَنَّ and غَيْرَ أَنَّ make the next noun accusative (أَنَّ السِّيَاحَةَ) or take a pronoun (غَيْرَ أَنَّهَا).
قَدْ + present = “may, might” — it softens a claim, which makes an argument sound fair.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · data and passive in a formal argument (website listening and writing model) · Stretch', title: 'Sound like a report', ar: 'لُغَةُ التَّقَارِيرِ',
      cols: [{ label: 'Tool', w: 2.6 }, { label: 'Example (website texts)', w: 7.0, size: 19 }, { label: 'Structure', w: 2.73 }],
      rows: [
        { core: true, cells: ['data', 'تُسْهِمُ {p|بِنِسْبَةٍ كَبِيرَةٍ} فِي النَّاتِجِ المَحَلِّيِّ الإِجْمَالِيِّ.', 'bi-nisba'] },
        { cells: ['experts', '{m|وَأَكَّدَ البَاحِثُونَ أَنَّهَا} تُوَفِّرُ مَلَايِينَ فُرَصِ العَمَلِ.', 'akkada anna'] },
        { cells: ['passive (neg.)', 'قَدْ تُلْحِقُ الضَّرَرَ بِالبِيئَةِ إِذَا لَمْ {e|تُنَظَّمْ}.', 'lam + passive'] },
        { cells: ['passive (future)', 'إِذَا اعْتَمَدَتِ الدُّوَلُ ضَرِيبَةَ السِّيَاحَةِ، {e|سَتُحْمَى} المَوَاقِعُ.', 'sa- + passive'] },
        { core: true, cells: ['the close', 'فَمَسْؤُولِيَّةُ السَّائِحِ {k|لَا تَقِلُّ أَهَمِّيَّةً عَنْ} سِيَاسَاتِ الدَّوْلَةِ.', 'lā taqillu … ʿan'] },
      ],
      ltr: true,
      foot: 'Passive = nobody named: tunaẓẓam (it is regulated) · sa-tuḥmā (they will be protected).',
      notes: `GRAMMAR PART 4 — register tools from the website listening and writing model.
بِنِسْبَةِ is followed by a number or adjective: بِنِسْبَةِ ٢٠٪ · بِنِسْبَةٍ كَبِيرَةٍ.
The passive: تُنَظِّمُ (she regulates) → تُنَظَّمُ (it is regulated); تَحْمِي (she protects) → تُحْمَى (it is protected).
لَا تَقِلُّ أَهَمِّيَّةً عَنْ = is no less important than — a strong, formal close.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me build a balanced argument',
    steps: [
      { head: 'Cite a benefit', ar: '{p|تُشِيرُ التَّقَارِيرُ إِلَى أَنَّ} … {w|تُسْهِمُ فِي}', think: 'Evidence.' },
      { head: 'Turn to harm', ar: '{p|غَيْرَ أَنَّ} … {k|تُلْحِقُ الضَّرَرَ بِـ}', think: 'bi-!' },
      { head: 'Real concern', ar: '{w|إِذَا} … {w|سَـ}يَتَدَهْوَرُ', think: 'Type 1.' },
      { head: 'Regret + solution', ar: '{e|لَوْ} … {e|لَـ}كَانَتْ · {m|عِلَاوَةً عَلَى ذٰلِكَ}', think: 'Type 2.' },
    ],
    legend: ['p', 'w', 'k', 'e', 'm'], legendLabels: { p: 'CITE / TURN', w: 'BENEFIT · TYPE 1', k: 'HARM', e: 'TYPE 2 REGRET', m: 'ADD' },
    model: '{p|تُشِيرُ التَّقَارِيرُ إِلَى أَنَّ} السِّيَاحَةَ {w|تُسْهِمُ} بِنِسْبَةٍ كَبِيرَةٍ {w|فِي} النَّاتِجِ المَحَلِّيِّ الإِجْمَالِيِّ. {p|غَيْرَ أَنَّ} السِّيَاحَةَ المُفْرِطَةَ {k|تُلْحِقُ الضَّرَرَ بِ}البِيئَةِ وَالتُّرَاثِ. {w|إِذَا} وَاصَلَ السُّيَّاحُ زِيَارَةَ المَوَاقِعِ الهَشَّةِ بِأَعْدَادٍ قِيَاسِيَّةٍ، {w|سَيَتَدَهْوَرُ} حَالُهَا. {e|وَلَوْ كَانَتْ} سِيَاسَاتُ السِّيَاحَةِ أَكْثَرَ صَرَامَةً، {e|لَكَانَتْ} مَوَاقِعُ مِثْلُ البَتْرَاءِ أَفْضَلَ حَالًا اليَوْمَ. {m|عِلَاوَةً عَلَى ذٰلِكَ}، إِذَا اعْتَمَدَتِ الدُّوَلُ نِظَامَ الحِصَصِ، سَتُحْمَى المَوَاقِعُ.',
    modelEn: 'Reports indicate that tourism contributes a large proportion of GDP. However, excessive tourism causes harm to the environment and heritage. If tourists continue to visit fragile sites in record numbers, their condition will deteriorate. Had tourism policies been stricter, sites like Petra would be in better condition today. Moreover, if countries adopt a quota system, the sites will be protected.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Start with evidence: tushīru l-taqārīru ilā anna. tushim takes FĪ. Turn: ghayra anna. Harm takes BI-. A real trend that can still happen → idhā … SA-. A past that did not happen → law … LA-kānat. Add a solution: ʿilāwatan ʿalā dhālika.”',
  },
  patternEn: ['air tourism causes serious harm to the environment', 'if tourists continue in these numbers, heritage will deteriorate', 'had entry fees been higher, the damage would have been less'],
  gameKey: 'P3-L05',
  game: {
    title: 'The responsible tourist: match the picture',
    pick: [0, 1, 3],
    en: ['Public transport is more sustainable.', 'We must not leave litter.', 'Water use in the hotel should be reduced.'],
    icons: [[['fa6', 'FaTrainSubway', '1D5FBF'], ['fa6', 'FaSeedling', '1E6B52']], [['fa6', 'FaTrashCan', 'C77700'], ['fa6', 'FaRecycle', '1E6B52']], [['fa6', 'FaShower', '1D5FBF'], ['fa6', 'FaDroplet', 'C0386B']]],
    labels: ['green transport', 'no litter', 'save water'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Then turn each into a conditional: إِذَا اسْتَخْدَمْنَا النَّقْلَ العَامَّ، سَتَقِلُّ البَصْمَةُ الكَرْبُونِيَّةُ (Type 1) · لَوْ لَمْ يَتْرُكِ السُّيَّاحُ النُّفَايَاتِ، لَكَانَ الشَّاطِئُ أَنْظَفَ (Type 2).',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build a balanced argument (website live builder)', title: 'Benefit + concern + regret or solution', ar: 'ابْنِ حُجَّةً مُتَوَازِنَةً',
      cols: [{ label: '1 · Reported benefit', w: 4.0, size: 16 }, { label: '2 · Harm / real concern', w: 4.1, size: 16 }, { label: '3 · Regret / solution', w: 4.23, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Then label each conditional: Type 1 or Type 2?',
      notes: `WE DO (3 min) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Core: read row 1 across. Develop: find the two Type 1 sentences (column 2 row 2, column 3 row 2) and the Type 2 (column 3 row 1). Stretch: rewrite column 3 row 1 negatively: لَوْ لَمْ تُنَظِّمِ الحُكُومَاتُ الزِّيَارَاتِ، لَمَا …`,
    },
  ],
  sorterTitle: 'A benefit, a harm — or a solution?',
  sorterCats: ['benefit', 'harm', 'solution / regulation'],
  sorterNotes: 'Then build one balanced sentence with a card from each column: تُسْهِمُ … ، غَيْرَ أَنَّهَا … ؛ لِذٰلِكَ نَحْتَاجُ إِلَى …',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('يُلْحِقُ الضَّرَرَ بِـ.', 'yulḥiq al-ḍarar + bi-.') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; spelling fix عَلَاوَةً → عِلَاوَةً; writing-checklist words given full case endings; rule headings and formulas in English and transliteration; sorter headings in transliteration; the verb, conditional and report tables are teacher-built from the website texts. All other website items, including the visual game, are used as published.',
  hints: ['tushim + bi-?', 'tulḥiq al-ḍarar + no bi-?', 'law … sa-?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: tushīr al-taqārīr · ghayra anna · idhā … sa-.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and label every conditional you hear Type 1 or Type 2.',
  gloss: [
    ['تُشِيرُ التَّقَارِيرُ إِلَى أَنَّ السِّيَاحَةَ تُسْهِمُ بِنِسْبَةٍ كَبِيرَةٍ فِي النَّاتِجِ المَحَلِّيِّ الإِجْمَالِيِّ فِي كَثِيرٍ مِنَ الدُّوَلِ العَرَبِيَّةِ، وَأَكَّدَ البَاحِثُونَ أَنَّهَا تُوَفِّرُ مَلَايِينَ فُرَصِ العَمَلِ.', 'Reports indicate that tourism contributes a large proportion of GDP in many Arab countries, and researchers confirmed that it provides millions of jobs.'],
    ['غَيْرَ أَنَّ السِّيَاحَةَ المُفْرِطَةَ تُلْحِقُ الضَّرَرَ بِالمَوَاقِعِ الهَشَّةِ.', 'However, excessive tourism causes harm to fragile sites.'],
    ['إِذَا وَاصَلَ السُّيَّاحُ زِيَارَةَ البَتْرَاءِ بِأَعْدَادٍ قِيَاسِيَّةٍ، سَيَتَدَهْوَرُ حَالُ الأَبْنِيَةِ النَّبَطِيَّةِ. وَلَوِ اعْتَمَدَ الأُرْدُنُّ نِظَامَ الحِصَصِ مُنْذُ البِدَايَةِ، لَكَانَتْ حَالَةُ المَوْقِعِ أَفْضَلَ اليَوْمَ.', 'If tourists continue to visit Petra in record numbers, the Nabataean buildings will deteriorate. Had Jordan adopted a quota system from the start, the site would be in a better state today.'],
    ['عِلَاوَةً عَلَى ذٰلِكَ، إِذَا اعْتَمَدَتِ الدُّوَلُ ضَرِيبَةَ السِّيَاحَةِ، سَتُحْمَى المَوَاقِعُ لِلْأَجْيَالِ القَادِمَةِ.', 'Moreover, if countries adopt a tourism tax, the sites will be protected for future generations.'],
    ['فَمَسْؤُولِيَّةُ السَّائِحِ لَا تَقِلُّ أَهَمِّيَّةً عَنْ سِيَاسَاتِ الدَّوْلَةِ.', 'So the tourist’s responsibility is no less important than state policy.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا فَوَائِدُ السِّيَاحَةِ؟ اسْتَشْهِدْ بِتَقْرِيرٍ.' },
      { route: 'develop', ar: 'مَا الضَّرَرُ المُحْتَمَلُ؟ عَبِّرْ عَنْهُ بِشَرْطٍ مِنَ النَّوْعِ الأَوَّلِ.' },
      { route: 'stretch', ar: 'مَاذَا كَانَ يَنْبَغِي فِعْلُهُ سَابِقًا؟ اسْتَعْمِلْ «لَوْ».' },
    ],
    stems: [
      { route: 'core', ar: 'تُشِيرُ التَّقَارِيرُ إِلَى أَنَّ السِّيَاحَةَ تُسْهِمُ فِي ______ .' },
      { route: 'develop', ar: 'إِذَا لَمْ نُنَظِّمِ الزِّيَارَاتِ، سَيَتَدَهْوَرُ ______ .' },
      { route: 'stretch', ar: 'لَوْ فَرَضْنَا حِصَصًا مُبَكِّرًا، لَكَانَ ______ .' },
    ],
    modelEn: ['What are the benefits of tourism?', 'Reports indicate that it contributes to the economy and provides jobs.', 'And what is the possible harm?', 'If we do not regulate visits, heritage will deteriorate — and had we imposed quotas early, it would be in better condition.'],
    notes: 'Website prompts and model. Pair debate (2 minutes): Student A argues FOR more tourism, Student B AGAINST; each must use one Type 1 and one Type 2. Then swap. To a girl: اسْتَشْهِدِي · عَبِّرِي · اسْتَعْمِلِي.',
  },
  write: {
    core: { amount: '6 sentences', how: 'Website Core: three benefit and three harm sentences with correct complements.' },
    develop: { amount: '60–80 words', how: 'Website Develop: add a Type 1 concern and a Type 2 counterfactual.' },
    stretch: { amount: '100–110 words', how: 'Website task: argue for sustainable tourism — cite a report, use environmental vocabulary, a Type 1, a Type 2 and a formal connector.' },
  },
  frames: {
    core: [
      { en: 'Tourism contributes to …', ar: 'تُسْهِمُ السِّيَاحَةُ فِي ______ .' },
      { en: 'It provides … and supports …', ar: 'تُوَفِّرُ ______ ، وَتَدْعَمُ ______ .' },
      { en: 'Excessive tourism causes harm to the environment and …', ar: 'تُلْحِقُ السِّيَاحَةُ المُفْرِطَةُ الضَّرَرَ بِالبِيئَةِ وَ ______ .' },
      { en: 'Air travel increases …', ar: 'تَزِيدُ السِّيَاحَةُ الجَوِّيَّةُ ______ .' },
    ],
    develop: [
      { en: 'Reports indicate that …', ar: 'تُشِيرُ التَّقَارِيرُ إِلَى أَنَّ ______ .' },
      { en: 'However, …', ar: 'غَيْرَ أَنَّهَا ______ .' },
      { en: 'If tourists continue …, … will deteriorate.', ar: 'إِذَا وَاصَلَ السُّيَّاحُ ______ ، سَيَتَدَهْوَرُ ______ .' },
      { en: 'Had … been stricter, … would have been better.', ar: 'لَوْ كَانَتْ ______ أَكْثَرَ صَرَامَةً، لَكَانَ ______ أَفْضَلَ.' },
    ],
    bank: ['الاقْتِصَادِ المَحَلِّيِّ', 'فُرَصَ عَمَلٍ', 'المُنْتَجَاتِ المَحَلِّيَّةَ', 'البِيئَةِ', 'التُّرَاثِ', 'المَوَاقِعِ الهَشَّةِ', 'البَصْمَةَ الكَرْبُونِيَّةَ', 'بِأَعْدَادٍ قِيَاسِيَّةٍ', 'حَالُ المَوْقِعِ', 'سِيَاسَاتُ السِّيَاحَةِ', 'حِصَصُ الدُّخُولِ', 'ضَرِيبَةُ السِّيَاحَةِ'],
  },
  stretch: [
    ['بِنِسْبَةٍ كَبِيرَةٍ فِي النَّاتِجِ المَحَلِّيِّ الإِجْمَالِيِّ', 'a large proportion of GDP'],
    ['وَأَكَّدَ البَاحِثُونَ أَنَّهَا', 'and researchers confirmed that it'],
    ['وَتَزِيدُ البَصْمَةَ الكَرْبُونِيَّةَ', 'and it increases the carbon footprint'],
    ['سَتُحْمَى مَوَاقِعُ التُّرَاثِ لِلْأَجْيَالِ القَادِمَةِ', 'heritage sites will be protected for future generations'],
    ['فَمَسْؤُولِيَّةُ السَّائِحِ وَالدَّوْلَةِ مُشْتَرَكَةٌ', 'so the responsibility of the tourist and the state is shared'],
  ],
  modelEn: 'Reports indicate that tourism contributes a large proportion of GDP, and researchers have confirmed that it provides millions of local jobs. However, excessive tourism causes harm to the environment and heritage, and increases the carbon footprint. If tourists continue to visit fragile sites in record numbers, their condition will deteriorate quickly. Had sustainable tourism policies been stricter from the start, sites like Petra would be in better condition today. Moreover, if Arab countries adopt a system of entry quotas, heritage sites will be protected for future generations. So the responsibility of the tourist and the state is shared.',
  find: ['tushīr al-taqārīr ilā anna · tushim fī', 'ghayra anna · tulḥiq al-ḍarar bi-', 'a Type 1 (idhā … sa-)', 'a Type 2 (law … la-) + ʿilāwatan'],
  modelNotes: 'Website writing model. Evidence: تُشِيرُ التَّقَارِيرُ إِلَى أَنَّ · تُسْهِمُ … فِي · غَيْرَ أَنَّ · تُلْحِقُ الضَّرَرَ بِالبِيئَةِ · البَصْمَةَ الكَرْبُونِيَّةَ · إِذَا وَاصَلَ … سَيَتَدَهْوَرُ · لَوْ كَانَتْ … لَكَانَتْ · عِلَاوَةً عَلَى ذٰلِكَ · سَتُحْمَى.',
  selfCheck: [
    { route: 'core', text: 'tushim has fī; tulḥiq al-ḍarar has bi-.' },
    { route: 'core', text: 'I have at least one benefit and one harm.' },
    { route: 'develop', text: 'My real concern uses idhā + past → sa- + present.' },
    { route: 'develop', text: 'My regret uses law + past → la- + past (never sa-).' },
    { route: 'stretch', text: 'I cite a report and turn with ghayra anna / add with ʿilāwatan ʿalā dhālika.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['لَا شَكَّ أَنَّ', 'there is no doubt that'], ['سِلَاحٌ ذُو حَدَّيْنِ', 'a double-edged sword'], ['مِنْ نَاحِيَةٍ', 'on the one hand'], ['تُعَزِّزُ', 'it strengthens'], ['إِذَا لَمْ تُنَظَّمْ', 'if it is not regulated'],
    ['تَجَاوَزَ', 'exceeded'], ['طَاقَةَ المَوْقِعِ', 'the site’s capacity'], ['الرِّبْحِ', 'profit'], ['التَّدَهْوُرِ', 'deterioration'], ['تَدْعُو إِلَى', 'they call for'],
  ],
  prep: {
    words: [['تَأَخُّرُ الرِّحْلَةِ', 'a flight delay', '—'], ['فُقْدَانُ الأَمْتِعَةِ', 'lost luggage', '—'], ['يَتَصَرَّفُ بِهُدُوءٍ', 'he acts calmly', 'تَتَصَرَّفُ she'], ['يُبَلِّغُ عَنْ', 'he reports', 'تُبَلِّغُ she'], ['التَّأْمِينُ السِّيَاحِيُّ', 'travel insurance', '—']],
    questionEn: 'Has something ever gone wrong on a journey? What did you do?',
    questionAr: 'مَرَّةً، ______ ، فَتَصَرَّفْتُ بِهُدُوءٍ وَ ______ .',
    homework: {
      core: 'Write three benefit and three harm sentences with tushim fī and tulḥiq al-ḍarar bi-.',
      develop: 'Add a Type 1 concern and a Type 2 regret (60–80 words).',
      stretch: 'Website writing task: a 100–110-word argument for sustainable tourism.',
    },
    wordsSource: 'The five words come from the website P3-L06 vocabulary (travel problems).',
  },
  remember: 'Remember: tushim FĪ · tulḥiq al-ḍarar BI- — a real concern is idhā … sa-, a regret is law … la- (never sa-) — cite with tushīr al-taqārīr, turn with ghayra anna.',
});

module.exports = { meta, slides };
