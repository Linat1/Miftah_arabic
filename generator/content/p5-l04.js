'use strict';
/* P5-L04 · Digital Society — Social Media, Privacy and the Digital Divide — website: Pathways › Progression › P5 › P5-L04 (the subjunctive at its widest
 * reach: prohibition يَمْنَعُ أَنْ and permission يُبِيحُ أَنْ, often with a passive verb in -a and sometimes two أَنْ in one sentence; regulate / restrict;
 * the course’s designated “2028 words” — الذَّكَاءُ الاصْطِنَاعِيُّ، كَلِمَةُ المُرُورِ، التَّعَلُّمُ عَنْ بُعْدٍ — redeployed in a social frame; opportunity vs risk).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live builder, mission and visual game used as published, with
 * waṣl alif shown without a kasra, لِكَيْ always written with its sukūn and يَصِرُّ → يُصِرُّ (as in P5-L03). Game cards 0, 1 and 4 not used. Sorter headings in
 * transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P5')({
  n: 4, fileTitle: 'Digital_Society', chip: 'Argument',
  title: 'Digital Society — Social Media, Privacy and the Digital Divide', arabic: 'المُجْتَمَعُ الرَّقْمِيُّ — وَسَائِلُ التَّوَاصُلِ وَالخُصُوصِيَّةُ وَالفَجْوَةُ الرَّقْمِيَّةُ',
  focus: 'Debate the digital world — yamnaʿu an (prohibits) and yubīḥu an (permits) + a verb in -a (often passive: an tubāʿa), regulate vs restrict, AI and passwords in a social frame, and a fair balance: ṣaḥīḥun anna … ghayra anna … law … la-.',
  icon: 'FaMobileScreen', iconSet: 'fa6',
});

const hs = (she) => ({ tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: she }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ').replace(/يَصِرُّ/g, 'يُصِرُّ'));
const site = fix(D.site('P5-L04'));
const RH = [['Prohibition', 'yamnaʿu an + verb in -a'], ['Permission', 'yubīḥu an + verb in -a'], ['Balance opportunity and risk', 'ṣaḥīḥun anna … ghayra anna …'], ['2028 words in a social frame', 'al-dhakāʾ al-iṣṭināʿī · kalimat al-murūr']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P5-L04', {
  support: `• Core: one prohibition (yamnaʿu an) and one permission (yubīḥu an) (website Core). Develop: add a “2028 word” in a social frame and a concession–refutation (100 words). Stretch: 110 words with both triggers, a concession–refutation and a Type 2.
• “2028 words”: the website marks الذَّكَاءُ الاصْطِنَاعِيُّ، كَلِمَةُ المُرُورِ، التَّعَلُّمُ عَنْ بُعْدٍ as designated vocabulary for the updated Cambridge specification and asks students to reuse them OUTSIDE a pure technology topic — that cross-topic reuse is what earns range.
• Faith link (optional): «وَلَا تَجَسَّسُوا» (al-Ḥujurāt 49:12) — do not spy: Islam protects privacy. «إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا» (49:6) — verify news before sharing it: the first rule against misinformation.
• Online safety: link to the school’s e-safety policy; if cyberbullying comes up personally, follow safeguarding procedures.
• Grammar links: an + -a and passives in -a (P5-L03) · concession–refutation (P5-L01) · Type 2 (P3-L05) · yataṭallabu an (P4).`,
  teach: 'Prohibit / permit + an + -a, two an in one sentence, regulate / restrict, 2028 words in a social frame, opportunity vs risk.',
  wedo: 'Match digital-life pictures, build a digital-rights line, sort prohibition / permission / opportunity–risk.',
  next: { nextCode: 'P5-L05', nextTitle: 'Global Justice — International Responsibility and the Arab World', nextAr: 'العَدَالَةُ العَالَمِيَّةُ' },
  objectives: ['Analyse the social impact of digital technology using the 2028 words in a social frame.', 'Use yamnaʿu an (prohibits) and yubīḥu an (permits) + a verb in -a.', 'Balance digital opportunity against digital risk.', 'Integrate all P5 grammar into a digital-society analysis.'],
  rulesAr: 'المَنْصُوبُ المُوَسَّعُ: المَنْعُ وَالإِبَاحَةُ',
  ruleEx: [['يَمْنَعُ القَانُونُ أَنْ تُبَاعَ البَيَانَاتُ الشَّخْصِيَّةُ'], ['لَا يَنْبَغِي أَنْ يُبِيحَ القَانُونُ أَنْ تُرَاقَبَ المُحَادَثَاتُ الخَاصَّةُ'], ['صَحِيحٌ أَنَّ التِّقْنِيَّةَ تُوَفِّرُ فُرَصًا، غَيْرَ أَنَّهَا تُثِيرُ مَخَاطِرَ المُرَاقَبَةِ'], ['يُعِيدُ الذَّكَاءُ الاصْطِنَاعِيُّ تَشْكِيلَ سُوقِ العَمَلِ']],
  doNow: {
    questions: [
      q('What does الفَجْوَةُ الرَّقْمِيَّةُ mean?', ['the digital divide', 'a digital camera', 'a number gap in maths'], 'Prepared at home (P5-L03).'),
      q('What does خُصُوصِيَّةُ البَيَانَاتِ mean?', ['data privacy', 'special offers', 'a data plan'], 'Prepared at home (P5-L03).'),
      q('What does مَعْلُومَاتٌ مُضَلِّلَةٌ mean?', ['misinformation', 'useful information', 'secret information'], 'Prepared at home (P5-L03).'),
      q('Complete: يُطَالِبُ النَّاشِطُونَ ___ أَنْ تُوَقِّعَ الحُكُومَاتُ.', ['بِـ', 'عَلَى', 'إِلَى'], 'P5-L03: yuṭālibu bi-an.'),
      q('Complete: تَدْعُو الحَمْلَةُ إِلَى أَنْ ___ القَوَالِبُ النَّمَطِيَّةُ.', ['تُكْسَرَ', 'تُكْسَرُ', 'كُسِرَتْ'], 'P5-L03: a passive in -a after an.'),
    ],
    keyIdea: { text: 'Laws forbid and allow — and what they forbid or allow comes after an, ending in -a (often a passive).', ar: 'يَمْنَعُ القَانُونُ أَنْ {e|تُبَاعَ} البَيَانَاتُ · لَا يُبِيحُ أَنْ {k|تُرَاقَبَ} المُحَادَثَاتُ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P5-L03. Questions 4–5 retrieve the demand triggers and the passive in -a (P5-L03) — today the same -a follows yamnaʿu an and yubīḥu an.',
  },
  routes: {
    core: ['I can name 8 digital-society words.', 'I can use yamnaʿu an + a verb in -a.'],
    develop: ['I can use yubīḥu an and lā yanbaghī an yubīḥa an …', 'I can use a 2028 word in a social frame.'],
    stretch: ['I can balance opportunity and risk and add a Type 2.', 'I can write a 110-word digital-society analysis.'],
  },
  bridge: [
    { ar: 'رَقْمٌ · رَقْمِيٌّ', urdu: 'رقم', tr: 'raqam', en: 'Arabic: a number · digital · Urdu: a sum of money' },
    { ar: 'خُصُوصِيَّةٌ', urdu: 'خصوصیت', tr: 'khusūsiyat', en: 'Arabic: privacy · Urdu: a special feature' },
    { ar: 'مَعْلُومَاتٌ', urdu: 'معلومات', tr: 'maalūmāt', en: 'information' },
    { ar: 'ذَكَاءٌ', urdu: 'ذہانت · ذکاوت', tr: 'zakāwat', en: 'intelligence (AI = الذَّكَاءُ الاصْطِنَاعِيُّ)' },
    { ar: 'حُكُومَةٌ', urdu: 'حکومت', tr: 'hukūmat', en: 'a government' },
  ],
  bridgeNotes: 'URDU BRIDGE: معلومات and حکومت are shared. Careful: Urdu خصوصیت = a special feature, but Arabic الخُصُوصِيَّةُ = PRIVACY (الحَقُّ فِي الخُصُوصِيَّةِ = the right to privacy). Urdu رقم = a sum of money; Arabic رَقْمٌ = a number, so رَقْمِيٌّ = digital (made of numbers).',
  core: ['يَمْنَعُ أَنْ', 'يُبِيحُ أَنْ', 'يُقَيِّدُ', 'يُنَظِّمُ', 'الحَقُّ فِي الخُصُوصِيَّةِ', 'حُرِّيَّةُ التَّعْبِيرِ', 'الفَجْوَةُ الرَّقْمِيَّةُ', 'خُصُوصِيَّةُ البَيَانَاتِ', 'مَعْلُومَاتٌ مُضَلِّلَةٌ', 'التَّنَمُّرُ الإِلِكْتُرُونِيُّ', 'الذَّكَاءُ الاصْطِنَاعِيُّ', 'كَلِمَةُ المُرُورِ'],
  forms: {
    'يَمْنَعُ أَنْ': hs('تَمْنَعُ أَنْ'), 'يُبِيحُ أَنْ': hs('تُبِيحُ أَنْ'), 'يُقَيِّدُ': hs('تُقَيِّدُ'), 'يُنَظِّمُ': hs('تُنَظِّمُ'), 'يُعِيدُ تَشْكِيلَ': hs('تُعِيدُ تَشْكِيلَ'),
    'يَتَعَرَّضُ لِـ': { tag: 'he · they', forms: [{ l: 'they', ar: 'يَتَعَرَّضُونَ لِـ' }] },
    'مَعْلُومَاتٌ مُضَلِّلَةٌ': { tag: 'sg · pl', forms: [{ l: 'sg.', ar: 'مَعْلُومَةٌ مُضَلِّلَةٌ' }] }, 'كَلِمَةُ المُرُورِ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'كَلِمَاتُ المُرُورِ' }] },
  },
  vocabNotes: {
    0: 'Prohibition and permission: يَمْنَعُ أَنْ / يُبِيحُ أَنْ + a verb in -a — very often a PASSIVE (أَنْ تُبَاعَ البَيَانَاتُ = that data be sold). يُقَيِّدُ (restricts) and يُنَظِّمُ (regulates) take a direct object: يُنَظِّمُ الإِنْتِرْنِتَ.',
    1: 'Digital society: الرَّقَابَةُ (censorship — controlling what is published) ≠ المُرَاقَبَةُ (surveillance — watching people). Same root, different jobs — a common exam trap.',
    2: 'The “2028 words”: الذَّكَاءُ الاصْطِنَاعِيُّ · كَلِمَةُ المُرُورِ · التَّعَلُّمُ عَنْ بُعْدٍ — learn them in a SOCIAL sentence, not just a tech one: يُعِيدُ الذَّكَاءُ الاصْطِنَاعِيُّ تَشْكِيلَ سُوقِ العَمَلِ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · prohibit and permit + an (website rules 1–2, teaching point 1, sorter and texts) · Core', title: 'Forbid it, allow it — then -a', ar: 'المَنْعُ وَالإِبَاحَةُ',
      cols: [{ label: 'Trigger', w: 2.6, size: 19 }, { label: 'Verb after an', w: 2.1, size: 19 }, { label: 'Type', w: 1.6 }, { label: 'Example (website texts)', w: 6.03, size: 17 }],
      rows: [
        { core: true, cells: ['{e|يَمْنَعُ أَنْ}', '{e|تُبَاعَ}', 'passive', 'يَمْنَعُ القَانُونُ أَنْ {e|تُبَاعَ} البَيَانَاتُ الشَّخْصِيَّةُ.'] },
        { core: true, cells: ['{e|تَمْنَعُ أَنْ}', '{e|تُنْشَرَ}', 'passive', 'تَمْنَعُ الأَنْظِمَةُ أَنْ {e|تُنْشَرَ} المَعْلُومَاتُ المُضَلِّلَةُ.'] },
        { core: true, cells: ['{k|يُبِيحُ أَنْ}', '{k|يَصِلَ}', 'active', 'يُبِيحُ النِّظَامُ أَنْ {k|يَصِلَ} الجَمِيعُ إِلَى الإِنْتِرْنِتِ.'] },
        { cells: ['{k|لَا يُبِيحُ أَنْ}', '{k|تُرَاقَبَ}', 'passive', 'لَا يُبِيحُ القَانُونُ أَنْ {k|تُرَاقَبَ} المُحَادَثَاتُ الخَاصَّةُ.'] },
        { cells: ['{m|يَجِبُ أَلَّا}', '{m|تُقَيِّدَ}', 'active', 'يَجِبُ أَلَّا {m|تُقَيِّدَ} حُرِّيَّةَ التَّعْبِيرِ.'] },
      ],
      ltr: true,
      foot: 'Website mistake 1: an tubāʿu ✗ → an tubāʿa ✓. Website teaching point: “the subjunctive at its widest reach”.',
      notes: `GRAMMAR PART 1 — website rules “Prohibition” and “Permission”, teaching point 1, the sorter and the reading (row 5: أَلَّا = أَنْ + لَا, from P4-L07).
Most of these verbs are PASSIVE: the law forbids data BEING sold — نَعْرِفُ مَا يُمْنَعُ، لَا مَنْ يَفْعَلُهُ. Passive in -a: tu-faʿ-a (تُنْشَرَ) · tu-fāʿal-a (تُرَاقَبَ) · tubāʿa (hollow).
Agreement: the law (m.) يَمْنَعُ · the systems / laws (non-human pl.) تَمْنَعُ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · two an in one sentence (website rule 2, mistake 2 and reading) · Develop / Stretch', title: 'An + an: two verbs in -a', ar: 'أَنْ … أَنْ',
      cards: [
        { chip: 'FIRST AN · DEVELOP', color: '1D5FBF', head: 'لَا يَنْبَغِي أَنْ يُبِيحَ', big: 'لَا يَنْبَغِي أَنْ يُبِيحَ القَانُونُ …', en: 'The law should not permit …', clue: 'yubīḥ-A (1st -a)' },
        { chip: 'SECOND AN · DEVELOP', color: 'C0386B', head: 'أَنْ تُرَاقَبَ', big: '… أَنْ تُرَاقَبَ المُحَادَثَاتُ الخَاصَّةُ.', en: '… private conversations to be monitored.', clue: 'turāqab-A (2nd -a)' },
        { chip: 'DŪNA AN · STRETCH', color: '6B4C9A', head: 'دُونَ أَنْ', big: 'أَنْ تُنَظِّمَ الدُّوَلُ الإِنْتِرْنِتَ دُونَ أَنْ تُصَادِرَ الخُصُوصِيَّةَ.', en: 'that states regulate the internet without seizing privacy.', clue: 'without + an + -a' },
      ],
      error: { text: 'Website mistake 2: after the first an, yubīḥu also takes -a.', pairs: [['لَا يَنْبَغِي أَنْ يُبِيحَ القَانُونُ', 'لَا يَنْبَغِي أَنْ يُبِيحُ القَانُونُ']] },
      notes: `GRAMMAR PART 2 — website rule “Permission”, mistake 2 (“After the first an, yubīḥa is also subjunctive”) and the reading (card 3: دُونَ أَنْ).
Read the chain slowly: يَنْبَغِي → أَنْ يُبِيحَ (1) → أَنْ تُرَاقَبَ (2). Each أَنْ makes the next verb end in -a. Students colour each أَنْ and the verb after it.
دُونَ أَنْ = without (doing): another trigger of -a — دُونَ أَنْ تُصَادِرَ (without seizing).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · regulate, restrict, permit, prohibit (website table, vocabulary and mistake 3) · Develop', title: 'Four verbs of control', ar: 'أَفْعَالُ التَّنْظِيمِ',
      cols: [{ label: 'Verb', w: 2.0, size: 20 }, { label: 'Meaning', w: 1.9 }, { label: 'Takes', w: 2.0 }, { label: 'Example (website texts)', w: 6.43, size: 17 }],
      rows: [
        { core: true, cells: ['{w|يُنَظِّمُ}', 'regulates', 'object', 'أَنْ {w|تُنَظِّمَ} الدُّوَلُ {w|الإِنْتِرْنِتَ}'] },
        { core: true, cells: ['{e|يُقَيِّدُ}', 'restricts', 'object', 'يَجِبُ أَلَّا {e|تُقَيِّدَ} {e|حُرِّيَّةَ} التَّعْبِيرِ'] },
        { cells: ['{k|يُبِيحُ}', 'permits', 'an + -a / object', 'لَا يَنْبَغِي أَنْ {k|يُبِيحَ} القَانُونُ {k|بَيْعَ} الخُصُوصِيَّةِ'] },
        { cells: ['{m|يَمْنَعُ}', 'prohibits', 'an + -a', 'يَمْنَعُ التَّشْرِيعُ أَنْ {m|يُرَاقَبَ} المُوَاطِنُونَ دُونَ إِذْنٍ'] },
        { cells: ['{p|يُعِيدُ}', 'redoes', 'object (-a)', 'يُعِيدُ الذَّكَاءُ الاصْطِنَاعِيُّ {p|تَشْكِيلَ} سُوقِ العَمَلِ'] },
      ],
      ltr: true,
      foot: 'Website mistake 3: yuʿīdu … tashkīlu ✗ → tashkīla ✓ — the object of a verb takes -a too (accusative).',
      notes: `GRAMMAR PART 3 — the website table, vocabulary group 1 and mistake 3.
Two kinds of -a today: the SUBJUNCTIVE -a on a verb after an (tunaẓẓimA) and the ACCUSATIVE -a on a noun that is an object (al-intirnitA · ḥurriyyatA · tashkīlA). Same sound, different jobs.
False friend: يُتِيحُ (makes available) ≠ يُبِيحُ (permits) — the website mission uses it as a distractor.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · 2028 words in a social frame + the balance (website rules 3–4, teaching point 2 and texts) · Stretch', title: 'Opportunity, risk — and what could be', ar: 'الفُرْصَةُ وَالخَطَرُ',
      cols: [{ label: 'Tool', w: 2.4 }, { label: 'Example (website texts)', w: 7.4, size: 17 }, { label: 'Range', w: 2.53 }],
      rows: [
        { core: true, cells: ['2028 word · society', '{p|الذَّكَاءُ الاصْطِنَاعِيُّ} يُعِيدُ تَشْكِيلَ اقْتِصَادَاتِ العَالَمِ العَرَبِيِّ', 'AI → jobs'] },
        { cells: ['2028 word · privacy', 'حِمَايَةُ {p|كَلِمَةِ المُرُورِ} مِنْ أَوْلَوِيَّاتِ الخُصُوصِيَّةِ', 'password → rights'] },
        { cells: ['2028 word · divide', '{p|التَّعَلُّمُ عَنْ بُعْدٍ} … غَيْرَ أَنَّ الفَجْوَةَ الرَّقْمِيَّةَ بَاتَتْ …', 'learning → inequality'] },
        { core: true, cells: ['balance', '{w|صَحِيحٌ أَنَّ} التِّقْنِيَّةَ تُوَفِّرُ فُرَصًا، {e|غَيْرَ أَنَّهَا} تُثِيرُ مَخَاطِرَ المُرَاقَبَةِ', 'ghayra anna-hā'] },
        { cells: ['Type 2', '{m|لَوْ} كَانَتِ الحَوْكَمَةُ أَكْثَرَ تَطَوُّرًا، {m|لَكَانَتْ} خُصُوصِيَّةُ المُوَاطِنِ أَكْثَرَ أَمَانًا', 'akthar + tamyīz'] },
      ],
      ltr: true,
      foot: 'Website teaching point: cross-context reuse of the designated words is exactly what is rewarded.',
      notes: `GRAMMAR PART 4 — website rules “Balance opportunity and risk” and “2028 words in a social frame”, teaching point 2, the listening and reading.
Row 4: غَيْرَ أَنَّهَا = however, it … — أَنَّ + a pronoun suffix (أَنَّهَا · أَنَّهُ) when the subject is already known.
Row 5: أَكْثَرَ تَطَوُّرًا / أَكْثَرَ أَمَانًا = more advanced / safer — akthar + an accusative noun (P4).`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me write a digital-society analysis',
    steps: [
      { head: '2028 word', ar: '{p|الذَّكَاءُ الاصْطِنَاعِيُّ} يُعِيدُ تَشْكِيلَ …', think: 'Social frame.' },
      { head: 'Balance', ar: '{w|صَحِيحٌ أَنَّ} … {w|غَيْرَ أَنَّهَا} …', think: 'Fair, then firm.' },
      { head: 'Prohibit / permit', ar: 'أَنْ {e|تُبَاعَ} · أَنْ {k|تُرَاقَبَ}', think: 'Every -a.' },
      { head: 'Could be', ar: '{m|لَوْ} … {m|لَكَانَتْ} …', think: 'Type 2.' },
    ],
    legend: ['p', 'w', 'e', 'k', 'm'], legendLabels: { p: '2028 WORD', w: 'BALANCE', e: 'PROHIBIT', k: 'PERMIT', m: 'TYPE 2' },
    model: 'يُعِيدُ {p|الذَّكَاءُ الاصْطِنَاعِيُّ} تَشْكِيلَ سُوقِ العَمَلِ فِي العَالَمِ العَرَبِيِّ. {w|صَحِيحٌ أَنَّ} التِّقْنِيَّةَ تُوَفِّرُ فُرَصًا لِلتَّعْلِيمِ، {w|غَيْرَ أَنَّهَا} تُثِيرُ مَخَاطِرَ المُرَاقَبَةِ. تَمْنَعُ قَوَانِينُ حِمَايَةِ البَيَانَاتِ أَنْ {e|تُبَاعَ} مَعْلُومَاتُ المُسْتَخْدِمِينَ، وَلَا يَنْبَغِي أَنْ {k|يُبِيحَ} القَانُونُ أَنْ {k|تُرَاقَبَ} المُرَاسَلَاتُ الخَاصَّةُ. {m|وَلَوْ} كَانَتِ الحَوْكَمَةُ أَكْثَرَ تَطَوُّرًا، {m|لَكَانَتِ} الخُصُوصِيَّةُ أَكْثَرَ أَمَانًا.',
    modelEn: 'Artificial intelligence is reshaping the job market in the Arab world. It is true that technology offers opportunities for education; however, it raises the risk of surveillance. Data-protection laws prohibit users’ information being sold, and the law should not permit private correspondence to be monitored. Had governance been more advanced, privacy would be safer.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Open with a 2028 word in a SOCIAL sentence: AI and jobs. Be fair: ṣaḥīḥun anna … ghayra anna-hā. Now the law: tamnaʿu … AN tubāʿA (passive, -a). Then two an in a row: AN yubīḥA … AN turāqabA. Finally: law … LA-kānat.”',
  },
  patternEn: ['data-protection laws prohibit users’ information being sold', 'the law should not permit correspondence to be subject to monitoring', 'artificial intelligence is reshaping the job market in the Arab world'],
  gameKey: 'P5-L04',
  game: {
    title: 'Life online: match the picture',
    pick: [2, 3, 5],
    en: ['We must protect our privacy on the internet.', 'Artificial intelligence helps solve some problems.', 'Social media connects people.'],
    icons: [[['fa6', 'FaLock', '1D5FBF'], ['fa6', 'FaUserShield', '1E6B52']], [['fa6', 'FaRobot', '6B4C9A'], ['fa6', 'FaLightbulb', 'C77700']], [['fa6', 'FaGlobe', '1D5FBF'], ['fa6', 'FaPeopleGroup', 'C0386B']]],
    labels: ['privacy', 'artificial intelligence', 'social media'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6; card 4 not used — waṣl kasra). Card 1 already has an + -a: أَنْ نَحْمِيَ. Upgrade each card into a P5 sentence: يَمْنَعُ القَانُونُ أَنْ تُنْتَهَكَ الخُصُوصِيَّةُ · صَحِيحٌ أَنَّ وَسَائِلَ التَّوَاصُلِ تَرْبِطُ النَّاسَ، غَيْرَ أَنَّهَا …',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build a digital-rights line (website live builder)', title: 'Prohibit + permit + balance', ar: 'ابْنِ سَطْرًا عَنِ الحُقُوقِ الرَّقْمِيَّةِ',
      cols: [{ label: '1 · Prohibition (yamnaʿu an)', w: 4.1, size: 16 }, { label: '2 · Permission (yubīḥu an)', w: 4.1, size: 16 }, { label: '3 · Balanced conclusion', w: 4.13, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Then count the an in your line: does every verb after an end in -a?',
      notes: `WE DO (3 min) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Core: read row 1 across. Develop: column 2 row 1 has TWO an (يُبِيحَ … تُرَاقَبَ). Stretch: open the line with a 2028 word in a social frame.`,
    },
  ],
  sorterTitle: 'Prohibition, permission — or opportunity / risk?',
  sorterCats: ['prohibition (yamnaʿu an)', 'permission (yubīḥu an)', 'opportunity / risk'],
  sorterNotes: 'Then turn one prohibition into a permission (and vice versa) — what changes in meaning? What stays the same in grammar (an + -a)?',
  patch: { vocab: site.vocab.map((g) => ({ ...g, items: g.items.map((it) => ({ ...it, note: it.note.replace('2028 word — ', '2028 word: ') })) })), grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: { ...site.writing, prompt: 'Write a 100–110-word digital-society analysis. Open with a 2028 word in a social frame, concede a benefit with ṣaḥīḥun anna and refute with ghayra anna, use yamnaʿu an and yubīḥu an, and close with a Type 2 counterfactual.', checklist: ['A 2028 word (al-dhakāʾ al-iṣṭināʿī / kalimat al-murūr) in a social context.', 'A concession–refutation balancing opportunity and risk.', 'A prohibition (yamnaʿu an) and a permission (yubīḥu an), each with a verb in -a.', 'A Type 2 counterfactual and 100–110 words.'] }, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('Prohibition: يَمْنَعُ أَنْ.', 'Prohibition: yamnaʿu an.').replace('Permission: يُبِيحُ أَنْ.', 'Permission: yubīḥu an.') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; لِكَيْ always written with its sukūn; يَصِرُّ → يُصِرُّ in two quiz options (as in P5-L03); rule formulas, pattern tips, writing prompt and checklist in transliteration; sorter headings in transliteration; game cards 0, 1 and 4 not used; the trigger, double-an, control-verb and 2028-word tables are teacher-built from the website texts. All other website items are used as published.',
  hints: ['an tubāʿu?', 'an yubīḥu … an turāqaba?', 'yuʿīdu tashkīlu?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 4.\nListen for: tamnaʿu … an · yubīḥa … an · ṣaḥīḥun anna.',
  listenRoutes: 'Core: questions 1, 3 and 4. Develop / Stretch: all 5 — and write down every verb in -a you hear after an.',
  gloss: [
    ['يَقُولُ الخَبِيرُ: تُشِيرُ الإِحْصَاءَاتُ إِلَى أَنَّ الذَّكَاءَ الاصْطِنَاعِيَّ يُعِيدُ تَشْكِيلَ اقْتِصَادَاتِ العَالَمِ العَرَبِيِّ.', 'The expert says: statistics indicate that artificial intelligence is reshaping the economies of the Arab world.'],
    ['صَحِيحٌ أَنَّ التِّقْنِيَّةَ الرَّقْمِيَّةَ تُوَفِّرُ فُرَصًا لِلتَّعْلِيمِ وَالتَّوَاصُلِ، غَيْرَ أَنَّهَا تُثِيرُ مَخَاطِرَ المُرَاقَبَةِ وَنَشْرِ المَعْلُومَاتِ المُضَلِّلَةِ.', 'It is true that digital technology offers opportunities for education and communication; however, it raises the risks of surveillance and the spread of misinformation.'],
    ['تَمْنَعُ قَوَانِينُ حِمَايَةِ البَيَانَاتِ أَنْ تُبَاعَ مَعْلُومَاتُ المُسْتَخْدِمِينَ، وَلَا يَنْبَغِي أَنْ يُبِيحَ القَانُونُ أَنْ تُرَاقَبَ المُرَاسَلَاتُ الخَاصَّةُ.', 'Data-protection laws prohibit users’ information being sold, and the law should not permit private correspondence to be monitored.'],
    ['وَإِذَا اسْتَثْمَرَتِ الدُّوَلُ فِي البُنْيَةِ التَّحْتِيَّةِ الرَّقْمِيَّةِ، سَتَتَقَلَّصُ الفَجْوَةُ الرَّقْمِيَّةُ.', 'If states invest in digital infrastructure, the digital divide will shrink.'],
    ['وَلَوْ كَانَتِ الحَوْكَمَةُ أَكْثَرَ تَطَوُّرًا، لَكَانَتْ خُصُوصِيَّةُ المُوَاطِنِ أَكْثَرَ أَمَانًا.', 'Had governance been more advanced, citizens’ privacy would be safer.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَاذَا يَنْبَغِي أَنْ يَمْنَعَ القَانُونُ؟' },
      { route: 'develop', ar: 'مَاذَا لَا يَنْبَغِي أَنْ يُبِيحَ القَانُونُ؟' },
      { route: 'stretch', ar: 'كَيْفَ تُوَازِنُ بَيْنَ الحُرِّيَّةِ وَالتَّنْظِيمِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'يَنْبَغِي أَنْ يَمْنَعَ القَانُونُ أَنْ ______ .' },
      { route: 'develop', ar: 'لَا يَنْبَغِي أَنْ يُبِيحَ القَانُونُ أَنْ ______ .' },
      { route: 'stretch', ar: 'يَتَطَلَّبُ التَّوَازُنُ أَنْ تُنَظِّمَ الدُّوَلُ ______ دُونَ أَنْ ______ .' },
    ],
    modelEn: ['What should the law prohibit?', 'The law should prohibit data being sold without consent.', 'And how do you balance it?', 'Balance requires states to regulate the internet without restricting freedom of expression.'],
    notes: 'Website prompts and model. Pair task: “digital parliament” — A proposes a law with yamnaʿu an …, B answers ṣaḥīḥun anna … ghayra anna … and proposes a permission instead. Note the speaking model also has three an: يَنْبَغِي أَنْ يَمْنَعَ … أَنْ تُبَاعَ. To a girl: تُوَازِنِينَ.',
  },
  write: {
    core: { amount: '2 sentences', how: 'Website Core: one prohibition (yamnaʿu an) and one permission (yubīḥu an).' },
    develop: { amount: '100 words', how: 'Website Develop: add a 2028 word in a social frame and a concession–refutation.' },
    stretch: { amount: '100–110 words', how: 'Website task: both triggers, a concession–refutation and a Type 2 counterfactual.' },
  },
  frames: {
    core: [
      { en: 'The law prohibits … being sold.', ar: 'يَمْنَعُ القَانُونُ أَنْ تُبَاعَ ______ .' },
      { en: 'The law should not permit … to be monitored.', ar: 'لَا يَنْبَغِي أَنْ يُبِيحَ القَانُونُ أَنْ تُرَاقَبَ ______ .' },
      { en: 'Users are exposed to …', ar: 'يَتَعَرَّضُ المُسْتَخْدِمُونَ لِلْمُرَاقَبَةِ وَ ______ .' },
      { en: 'Artificial intelligence is reshaping …', ar: 'يُعِيدُ الذَّكَاءُ الاصْطِنَاعِيُّ تَشْكِيلَ ______ .' },
    ],
    develop: [
      { en: 'It is true that technology offers …', ar: 'صَحِيحٌ أَنَّ التِّقْنِيَّةَ تُوَفِّرُ ______ ،' },
      { en: '… however, it raises the risk of …', ar: 'غَيْرَ أَنَّهَا تُثِيرُ مَخَاطِرَ ______ .' },
      { en: 'Balance requires states to … without …', ar: 'يَتَطَلَّبُ التَّوَازُنُ أَنْ تُنَظِّمَ الدُّوَلُ الإِنْتِرْنِتَ دُونَ أَنْ ______ .' },
      { en: 'Had governance been more advanced, …', ar: 'لَوْ كَانَتِ الحَوْكَمَةُ أَكْثَرَ تَطَوُّرًا، لَكَانَتْ ______ .' },
    ],
    bank: ['البَيَانَاتُ الشَّخْصِيَّةُ', 'المُحَادَثَاتُ الخَاصَّةُ', 'المَعْلُومَاتِ المُضَلِّلَةِ', 'سُوقِ العَمَلِ', 'فُرَصًا لِلتَّعْلِيمِ وَالتَّوَاصُلِ', 'المُرَاقَبَةِ الرَّقْمِيَّةِ', 'تُقَيِّدَ حُرِّيَّةَ التَّعْبِيرِ', 'تُصَادِرَ الخُصُوصِيَّةَ', 'خُصُوصِيَّةُ المُوَاطِنِ أَكْثَرَ أَمَانًا', 'كَلِمَةِ المُرُورِ', 'التَّعَلُّمُ عَنْ بُعْدٍ', 'الفَجْوَةُ الرَّقْمِيَّةُ'],
  },
  stretch: [
    ['وَسُوقِ العَمَلِ فِيهِ', 'and its job market'],
    ['فُرَصًا اسْتِثْنَائِيَّةً', 'exceptional opportunities'],
    ['فِي الوَقْتِ ذَاتِهِ', 'at the same time'],
    ['دُونَ أَنْ تُصَادِرَ حُرِّيَّةَ التَّعْبِيرِ', 'without seizing freedom of expression'],
    ['أَكْثَرَ أَمَانًا', 'safer'],
  ],
  modelEn: 'Statistics indicate that artificial intelligence is reshaping the economies of the Arab world and its job market. It is true that digital technology offers exceptional opportunities for education and communication; however, at the same time it raises the risks of digital surveillance and the spread of misinformation. Data-protection laws prohibit users’ information being sold, and the law should not permit private correspondence to be monitored. Balance requires states to regulate the internet without seizing freedom of expression. Had digital governance been more advanced, citizens’ privacy would be safer.',
  find: ['al-dhakāʾ al-iṣṭināʿī (2028 word)', 'ṣaḥīḥun anna … ghayra anna-hā', 'an tubāʿa · an turāqaba', 'law kānat … la-kānat'],
  modelNotes: 'Website writing model. Evidence: تُشِيرُ … إِلَى أَنَّ الذَّكَاءَ الاصْطِنَاعِيَّ يُعِيدُ تَشْكِيلَ · صَحِيحٌ أَنَّ … غَيْرَ أَنَّهَا · تَمْنَعُ … أَنْ تُبَاعَ · لَا يَنْبَغِي أَنْ يُبِيحَ … أَنْ تُرَاقَبَ · يَتَطَلَّبُ … أَنْ تُنَظِّمَ … دُونَ أَنْ تُصَادِرَ · لَوْ كَانَتْ … لَكَانَتْ.',
  selfCheck: [
    { route: 'core', text: 'After yamnaʿu an / yubīḥu an my verb ends in -a (an tubāʿa).' },
    { route: 'core', text: 'I used one prohibition and one permission.' },
    { route: 'develop', text: 'In a chain of two an, BOTH verbs end in -a.' },
    { route: 'develop', text: 'I used a 2028 word in a social sentence.' },
    { route: 'stretch', text: 'I balanced opportunity and risk and added a Type 2.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['حَيَاتِنَا اليَوْمِيَّةِ', 'our daily life'], ['يُوَفِّرَانِ', 'they both provide'], ['اسْتِثْنَائِيَّةً', 'exceptional'], ['أَوْجُهِ', 'aspects, forms'], ['يَتَعَرَّضُ', 'is exposed'],
    ['ضَارَّةً', 'harmful'], ['التَّوَازُنُ', 'balance'], ['تُصَادِرَ', '(to) seize, confiscate'], ['الانْتِهَاكَاتُ', 'violations, breaches'], ['المُرَاسَلَاتُ', 'correspondence'],
  ],
  prep: {
    words: [['العَدَالَةُ الدَّوْلِيَّةُ', 'international justice', '—'], ['القَانُونُ الدَّوْلِيُّ الإِنْسَانِيُّ', 'international humanitarian law', '—'], ['ازْدِوَاجِيَّةُ المَعَايِيرِ', 'double standards', '—'], ['الإِفْلَاتُ مِنَ العِقَابِ', 'impunity', '—'], ['يَرْفُضُ أَنْ', 'refuses to', '+ verb in -a']],
    questionEn: 'Should every country follow the same international rules? Why?',
    questionAr: 'صَحِيحٌ أَنَّ لِكُلِّ دَوْلَةٍ سِيَادَتَهَا، غَيْرَ أَنَّ ______ .',
    homework: {
      core: 'Write one prohibition (yamnaʿu an) and one permission (yubīḥu an) about data privacy.',
      develop: 'Add a 2028 word in a social frame and a concession–refutation (100 words).',
      stretch: 'Website writing task: a 100–110-word digital-society analysis.',
    },
    wordsSource: 'The five words come from the website P5-L05 vocabulary (global justice).',
  },
  remember: 'Remember: yamnaʿu an / yubīḥu an + a verb in -A (often passive: an tubāʿA) — two an, two -a — and keep AI, passwords and distance learning in SOCIAL sentences, balanced with ṣaḥīḥun anna … ghayra anna.',
});

module.exports = { meta, slides };
