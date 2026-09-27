'use strict';
/*
 * F3-L05 · Colours — Full System and Agreement
 * Website: Pathways › Foundation › F3 › Lesson 5. The colour vault (11 core colours + extension: gold, silver, colourful,
 * striped, light, dark), the two feminine patterns (أَفْعَلُ ← فَعْلَاءُ and ـِيٌّ ← ـِيَّةٌ), agreement with the noun
 * (incl. definite phrases and non-human plurals), shades and patterns, the Colour Code Mission (14), Layla’s colourful home
 * (listening), Yusuf’s study and Maha’s objects (reading), the colour-scheme studio, the colour-rich description and the
 * 16-question checkpoint. Also used as the engine of Topic B lesson 6 (TB-L06).
 */
const F = require('./f3-common');
const game = require('../site-data/pathway-visual-games.json')['f3-l05'];
const { q, bank, banks } = F;

const meta = F.meta({
  n: 5, fileTitle: 'Colours_Full_System_and_Agreement', chip: 'Colours',
  title: 'Colours — Full System and Agreement', arabic: 'الأَلْوَانُ — النِّظَامُ الكَامِلُ وَالمُطَابَقَةُ',
  focus: 'Learn the complete colour system, tell apart the two feminine patterns (حَمْرَاءُ vs بُنِّيَّةٌ), add light, dark and patterned detail, and make every colour agree with its noun.',
  icon: 'FaPalette', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F3-L06', nextTitle: 'Household Appliances and Daily Routines', nextAr: 'الأَجْهِزَةُ المَنْزِلِيَّةُ وَالرُّوتِينُ' };
const rounds = banks.l05.rounds.map((r) => F.w({ ...r, q: r.prompt }));
const prompts = banks.l05.prompts;
const C3 = (m, f) => ({ tag: 'm · f · things', forms: [{ l: 'things pl.', ar: f }, { l: 'f.', ar: f }, { l: 'm.', ar: m }] });

const site = {
  speaking: {
    context: 'Describe a colour scheme',
    model: [
      ['A', 'مَا أَلْوَانُ غُرْفَةِ الجُلُوسِ؟', 'What are the colours of the living room?'],
      ['B', 'غُرْفَةُ الجُلُوسِ وَاسِعَةٌ وَمُلَوَّنَةٌ. الأَرِيكَةُ بَنَفْسَجِيَّةٌ غَامِقَةٌ.', 'The living room is spacious and colourful. The sofa is dark purple.'],
    ],
  },
  writing: {
    prompt: 'Website writing task: 6–8 connected sentences about a room, a family portrait or a personal-item collection — six colour words, both colour patterns, one shade or pattern word and one reason.',
    checklist: ['Colour AFTER the noun.', 'Both patterns: حَمْرَاءُ-type and بُنِّيَّةٌ-type.', 'One shade or pattern word (فَاتِحٌ، غَامِقٌ، مُخَطَّطٌ).', 'One reason with لِأَنَّ.'],
    model: prompts[0].model,
  },
  differentiation: {
    core: 'Six noun + colour phrases with the colour bank (masculine and feminine).',
    develop: 'Six to eight sentences using both colour patterns and one shade word.',
    stretch: 'Definite phrases (al-bābu l-aḥmaru), non-human plurals (satā’ir zarqā’) and a reason.',
  },
  mistakes: [
    { wrong: 'نَافِذَةٌ أَحْمَرَةٌ', right: 'نَافِذَةٌ حَمْرَاءُ', why: 'Red is a “changes completely” colour: the feminine is ḥamrā’ (website common mistake).' },
    { wrong: 'الطَّاوِلَةُ بُنِّيٌّ.', right: 'الطَّاوِلَةُ بُنِّيَّةٌ.', why: 'A table is feminine: regular colours add -iyya.' },
    { wrong: 'الحَائِطُ خَضْرَاءُ.', right: 'الحَائِطُ أَخْضَرُ.', why: 'A wall is masculine: use the masculine colour.' },
  ],
  listening: {
    title: 'Layla’s colourful home',
    script: 'فِي بَيْتِ لَيْلَى غُرَفٌ مُلَوَّنَةٌ. بَابُ المَدْخَلِ أَزْرَقُ غَامِقٌ، وَالحَائِطُ أَبْيَضُ. فِي غُرْفَةِ الجُلُوسِ أَرِيكَةٌ بَنَفْسَجِيَّةٌ وَسَجَّادَةٌ رَمَادِيَّةٌ. السَّتَائِرُ زَرْقَاءُ فَاتِحَةٌ وَمُخَطَّطَةٌ. فِي المَطْبَخِ ثَلَّاجَةٌ فِضِّيَّةٌ وَطَاوِلَةٌ بَيْضَاءُ، وَالكَرَاسِي بُرْتُقَالِيَّةٌ. غُرْفَةُ لَيْلَى وَرْدِيَّةٌ، وَلَكِنَّ مَكْتَبَهَا بُنِّيٌّ. غُرْفَةُ أَخِيهَا خَضْرَاءُ، وَسَرِيرُهُ أَسْوَدُ. تُحِبُّ لَيْلَى غُرْفَةَ الجُلُوسِ لِأَنَّ أَلْوَانَهَا هَادِئَةٌ وَجَمِيلَةٌ.',
    questions: bank(5, 'listeningQuiz', [0, 2, 4, 5, 8]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 5,
    source: 'Website sections used: the eight-question agreement bridge, the colour vault (11 core colours + 7 extension words) and its 12-question check, the two colour patterns and the 12-question pattern laboratory, “make colour agree” (masculine, feminine, definite, non-human plural) and the 14-question agreement check, light / dark / colourful / striped and the 10-question shade check, the Palette Studio, the Colour Code Mission (14), Layla’s colourful home (listening, 10), Yusuf’s study and Maha’s objects (reading, 12), the colour-scheme studio (4 prompts), the colour-rich writing task and the 16-question checkpoint. Picture match: website visual game “Colours — Full System and Agreement”.',
    support: `• The website’s one big warning: do NOT add ة automatically. Six colours change completely (أَحْمَرُ ← حَمْرَاءُ); the rest just add ة (بُنِّيٌّ ← بُنِّيَّةٌ).
• Core: 8 colours in both forms + noun first, colour second. Develop: both patterns + one shade word (فَاتِحٌ / غَامِقٌ). Stretch: definite phrases (البَابُ الأَحْمَرُ) and non-human plurals (السَّتَائِرُ زَرْقَاءُ).
• Links: F3-L04 furniture genders do all the work today (خِزَانَةٌ f., مَكْتَبٌ m.).
• Urdu bridge: سبز / أَخْضَرُ (not cognate), لال / أَحْمَرُ (not cognate) — but بنفشی ← بَنَفْسَجِيٌّ، گلابی / وَرْدِيٌّ (both from “rose”), رنگ / لَوْنٌ, سنہری / ذَهَبِيٌّ (both “golden”).`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'The colour vault, then two feminine patterns and agreement.', wedo: 'Colour Code Mission, listen to Layla, read two descriptions.', next: 'F3-L06' }),
  F.doNow({
    questions: [
      q('What does أَزْرَقُ mean?', ['blue', 'green', 'yellow'], 'Prepared at home (F3-L04).'),
      q('What is the feminine of أَبْيَضُ (white)?', ['بَيْضَاءُ', 'أَبْيَضَةٌ', 'أَبْيَضُ'], 'Prepared at home (F3-L04).'),
      ...bank(5, 'retrievalQuiz', [0, 1, 3]),
    ],
    keyIdea: { text: 'Noun first, colour second — and the colour matches the noun. Six colours change completely for feminine; the rest add -a.', ar: 'بَابٌ {w|أَحْمَرُ} · نَافِذَةٌ {e|حَمْرَاءُ} · طَاوِلَةٌ بُنِّيَّ{e|ةٌ}' },
    retrieves: 'Questions 1–2 test two of the five colours prepared at home at the end of F3-L04. Questions 3–5 are the website “agreement bridge” (noun gender, word order, masculine colour).',
  }),
  F.objectivesSlide([
    'Name all core colours and the extension words.',
    'Form masculine and feminine colours accurately.',
    'Use light, dark, colourful and striped descriptions.',
    'Write a connected colour-rich description.',
  ], {
    core: ['I can name eight colours.', 'I can put the colour after the noun.'],
    develop: ['I can use both feminine patterns.', 'I can add light or dark.'],
    stretch: ['I can use definite phrases and plural things.', 'I can write a colour-rich description with a reason.'],
  }, 2, 'Website “By the end” aims (left) and the website speaking checklist as routes (right).'),
  F.keywordsSlide({
    text: 'The website colour vault: 11 core colours and 7 extension words, each in masculine and feminine. Core: the six “change completely” colours + brown and pink.',
    groups: [
      { head: 'GROUP 1', name: 'Six colours that change · 6' },
      { head: 'GROUP 2', name: 'Colours that add -a · 5' },
      { head: 'GROUP 3', name: 'Shade, finish, pattern · 7' },
    ],
    bridge: [
      { ar: 'لَوْنٌ', urdu: 'رنگ', tr: 'lawn', en: 'colour (not cognate)' },
      { ar: 'بَنَفْسَجِيٌّ', urdu: 'بنفشی', tr: 'banafsajī', en: 'purple (from “violet”)' },
      { ar: 'وَرْدِيٌّ', urdu: 'گلابی', tr: 'wardī', en: 'pink (both from “rose”)' },
      { ar: 'ذَهَبِيٌّ', urdu: 'سنہری', tr: 'dhahabī', en: 'golden (ذَهَبٌ = gold)' },
      { ar: 'أَسْوَدُ', urdu: 'سیاہ', tr: 'aswad', en: 'black (al-Ḥajar al-Aswad)' },
    ],
    notes: 'URDU BRIDGE: most colour words are NOT shared, so give memory hooks: الحَجَرُ الأَسْوَدُ (the Black Stone) → أَسْوَدُ; وَرْدَةٌ (a rose) → وَرْدِيٌّ; ذَهَبٌ (gold) → ذَهَبِيٌّ; فِضَّةٌ (silver) → فِضِّيٌّ; بُرْتُقَالٌ (an orange, F5) → بُرْتُقَالِيٌّ; بُنٌّ (coffee beans) → بُنِّيٌّ.',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · six colours that change completely (website)', title: 'Red, blue, green …', ar: 'الأَلْوَانُ الأَسَاسِيَّةُ',
    items: [
      { n: 1, ar: 'أَحْمَرُ', en: 'red', tr: 'aḥ-mar · ḥam-rā’', core: true, ...C3('أَحْمَرُ', 'حَمْرَاءُ') },
      { n: 2, ar: 'أَزْرَقُ', en: 'blue', tr: 'az-raq · zar-qā’', core: true, ...C3('أَزْرَقُ', 'زَرْقَاءُ') },
      { n: 3, ar: 'أَخْضَرُ', en: 'green', tr: 'akh-ḍar · khaḍ-rā’', core: true, ...C3('أَخْضَرُ', 'خَضْرَاءُ') },
      { n: 4, ar: 'أَصْفَرُ', en: 'yellow', tr: 'aṣ-far · ṣaf-rā’', core: true, ...C3('أَصْفَرُ', 'صَفْرَاءُ') },
      { n: 5, ar: 'أَبْيَضُ', en: 'white', tr: 'ab-yaḍ · bay-ḍā’', core: true, ...C3('أَبْيَضُ', 'بَيْضَاءُ') },
      { n: 6, ar: 'أَسْوَدُ', en: 'black', tr: 'as-wad · saw-dā’', core: true, ...C3('أَسْوَدُ', 'سَوْدَاءُ') },
    ],
    notes: `PATTERN 1 (website “changes completely”: أَفْعَلُ ← فَعْلَاءُ). Chant each pair: aḥmar – ḥamrā’. The “things pl.” box: plurals of things take the feminine singular colour (السَّتَائِرُ زَرْقَاءُ — website).
Website common mistake: حَمْرَاءُ ✓ — «أَحْمَرَةٌ» ✗.`,
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 2 · colours that add -a (website)', title: 'Orange, purple, brown …', ar: 'الأَلْوَانُ المُنْتَهِيَةُ بِـ ـِيٌّ',
    items: [
      { n: 7, ar: 'بُرْتُقَالِيٌّ', en: 'orange', tr: 'bur-tu-qā-lī', ...C3('بُرْتُقَالِيٌّ', 'بُرْتُقَالِيَّةٌ') },
      { n: 8, ar: 'بَنَفْسَجِيٌّ', en: 'purple', tr: 'ba-naf-sa-jī', ...C3('بَنَفْسَجِيٌّ', 'بَنَفْسَجِيَّةٌ') },
      { n: 9, ar: 'بُنِّيٌّ', en: 'brown', tr: 'bun-nī', core: true, ...C3('بُنِّيٌّ', 'بُنِّيَّةٌ') },
      { n: 10, ar: 'رَمَادِيٌّ', en: 'grey', tr: 'ra-mā-dī', ...C3('رَمَادِيٌّ', 'رَمَادِيَّةٌ') },
      { n: 11, ar: 'وَرْدِيٌّ', en: 'pink', tr: 'war-dī', core: true, ...C3('وَرْدِيٌّ', 'وَرْدِيَّةٌ') },
      { n: 12, ar: 'لَوْنٌ', en: 'colour', tr: 'lawn · al-wān', tag: 'm.', forms: [{ l: 'pl.', ar: 'أَلْوَانٌ' }] },
    ],
    notes: 'PATTERN 2 (website “add ة”: ـِيٌّ ← ـِيَّةٌ) — the same nisba pattern as nationalities in F2-L04 (مِصْرِيٌّ / مِصْرِيَّةٌ). Card 12: لَوْنٌ / أَلْوَانٌ — مَا لَوْنُكَ المُفَضَّلُ؟',
  },
  {
    type: 'vocab', stage: 'teach', flex: true, eyebrow: 'Key words · Group 3 · shade, finish and pattern (website extension) · FLEX', title: 'Light, dark, gold, striped …', ar: 'مُفْرَدَاتٌ إِضَافِيَّةٌ',
    items: [
      { n: 13, ar: 'فَاتِحٌ', en: 'light (shade)', tr: 'fā-tiḥ', ...C3('فَاتِحٌ', 'فَاتِحَةٌ') },
      { n: 14, ar: 'غَامِقٌ', en: 'dark (shade)', tr: 'ghā-miq', ...C3('غَامِقٌ', 'غَامِقَةٌ') },
      { n: 15, ar: 'ذَهَبِيٌّ', en: 'gold / golden', tr: 'dha-ha-bī', ...C3('ذَهَبِيٌّ', 'ذَهَبِيَّةٌ') },
      { n: 16, ar: 'فِضِّيٌّ', en: 'silver', tr: 'fiḍ-ḍī', ...C3('فِضِّيٌّ', 'فِضِّيَّةٌ') },
      { n: 17, ar: 'مُلَوَّنٌ', en: 'colourful', tr: 'mu-law-wan', ...C3('مُلَوَّنٌ', 'مُلَوَّنَةٌ') },
      { n: 18, ar: 'مُخَطَّطٌ', en: 'striped', tr: 'mu-khaṭ-ṭaṭ', ...C3('مُخَطَّطٌ', 'مُخَطَّطَةٌ') },
    ],
    notes: 'EXTENSION (website “official extension bank”). A second adjective comes after the colour and also agrees: بَابٌ أَزْرَقُ فَاتِحٌ (a light-blue door) · نَافِذَةٌ زَرْقَاءُ غَامِقَةٌ (a dark-blue window).',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · noun first, colour second (website “make colour agree”)', title: 'The noun decides the colour', ar: 'طَابِقِ اللَّوْنَ مَعَ الاِسْمِ',
    cols: [{ label: 'Masculine noun', w: 3.3, size: 24 }, { label: 'Feminine noun', w: 3.4, size: 24 }, { label: 'Pattern', w: 2.4, size: 18 }, { label: 'Meaning', w: 3.23 }],
    rows: [
      { core: true, cells: [{ ar: 'بَابٌ {w|أَحْمَرُ}' }, { ar: 'نَافِذَةٌ {e|حَمْرَاءُ}' }, 'changes completely', 'a red door · a red window'] },
      { core: true, cells: [{ ar: 'مَكْتَبٌ {w|بُنِّيٌّ}' }, { ar: 'طَاوِلَةٌ {e|بُنِّيَّةٌ}' }, 'adds -a (ة)', 'a brown desk · a brown table'] },
      { cells: [{ ar: 'سَرِيرٌ {w|أَزْرَقُ} {k|فَاتِحٌ}' }, { ar: 'أَرِيكَةٌ {e|زَرْقَاءُ} {k|فَاتِحَةٌ}' }, '+ shade', 'a light-blue bed · sofa'] },
      { cells: [{ ar: 'البَابُ {w|الأَحْمَرُ}' }, { ar: 'السَّتَائِرُ {e|زَرْقَاءُ}' }, 'definite · things pl.', 'the red door · the curtains are blue'] },
    ],
    foot: 'Look at the noun: masculine → aḥmar / bunnī; feminine → ḥamrā’ / bunniyya.',
    notes: `GRAMMAR PART 1 — website section 4 “Make colour agree”: the colour follows the noun and matches its gender; the noun decides the form. Row 4 = website “Definite phrase” (البَابُ الأَحْمَرُ — both take الـ) and “Non-human plural reminder” (السَّتَائِرُ زَرْقَاءُ وَمُخَطَّطَةٌ).
Quick-fire with F3-L04 furniture: say a noun + English colour; students say the phrase (خِزَانَةٌ + white → خِزَانَةٌ بَيْضَاءُ).`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · two feminine patterns (website)', title: 'Don’t just add ة!', ar: 'نَمَطَانِ لِصِيَاغَةِ الأَلْوَانِ',
    cards: [
      { chip: 'PATTERN 1 · CORE', color: 'B83227', head: 'أَفْعَلُ / فَعْلَاءُ', big: 'أَحْمَرُ / حَمْرَاءُ · أَبْيَضُ / بَيْضَاءُ', en: 'red · white (six colours)', clue: 'Learn them as pairs.' },
      { chip: 'PATTERN 2 · CORE', color: '1E7B4F', head: 'ـِيٌّ / ـِيَّةٌ', big: 'بُنِّيٌّ / بُنِّيَّةٌ · وَرْدِيٌّ / وَرْدِيَّةٌ', en: 'brown · pink (and the rest)', clue: 'Like nationalities.' },
      { chip: 'SHADE · DEVELOP', color: '6B4C9A', head: '+ فَاتِحٌ / غَامِقٌ', big: 'سَجَّادَةٌ حَمْرَاءُ غَامِقَةٌ', en: 'a dark-red rug', clue: 'Both adjectives agree.' },
    ],
    error: { text: 'Website common mistake: red does not add ة.', pairs: [['حَمْرَاءُ', 'أَحْمَرَةٌ']] },
    notes: `GRAMMAR PART 2 — website section 3 “Two colour patterns”: “Do not add ة automatically. First identify which pattern the colour follows.”
Pattern 1 (broken, six high-frequency colours): أَحْمَرُ/حَمْرَاءُ · أَزْرَقُ/زَرْقَاءُ · أَخْضَرُ/خَضْرَاءُ · أَصْفَرُ/صَفْرَاءُ · أَبْيَضُ/بَيْضَاءُ · أَسْوَدُ/سَوْدَاءُ.
Pattern 2 (regular nisba): بُرْتُقَالِيٌّ، بَنَفْسَجِيٌّ، بُنِّيٌّ، رَمَادِيٌّ، وَرْدِيٌّ، ذَهَبِيٌّ، فِضِّيٌّ + ة.
Website section 5: add a second adjective (فَاتِحٌ، غَامِقٌ، مُلَوَّنٌ، مُخَطَّطٌ) — both must agree.`,
  },
  F.quickCheck(bank(5, 'agreementQuiz', [2, 1, 4, 5]), 'website “Fourteen-question colour-agreement check” questions 3, 2, 5 and 6.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me colour a living room', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'The room', ar: 'غُرْفَةُ الجُلُوسِ وَاسِعَةٌ وَمُلَوَّنَ{e|ةٌ}.', think: 'Room is f. → mulawwana.' },
      { head: 'Pattern 2', ar: 'الأَرِيكَةُ بَنَفْسَجِيَّ{e|ةٌ} غَامِقَ{e|ةٌ}.', think: 'Sofa f. → -iyya + ghāmiqa.' },
      { head: 'Pattern 1', ar: 'البَابُ {w|أَبْيَضُ}، وَالسَّتَائِرُ {e|زَرْقَاءُ}.', think: 'Door m. · curtains = things → f.' },
      { head: 'Reason', ar: 'أُحِبُّهَا لِأَنَّ أَلْوَانَهَا هَادِئَةٌ.', think: 'Colours (things) → hādi’a.' },
    ],
    legend: ['w', 'e'], legendLabels: { w: 'MASCULINE', e: 'FEMININE' },
    model: 'غُرْفَةُ الجُلُوسِ وَاسِعَةٌ وَمُلَوَّنَ{e|ةٌ}. الأَرِيكَةُ بَنَفْسَجِيَّ{e|ةٌ} غَامِقَ{e|ةٌ}، وَالسَّجَّادَةُ رَمَادِيَّ{e|ةٌ}. البَابُ {w|أَبْيَضُ}، وَالسَّتَائِرُ {e|زَرْقَاءُ} فَاتِحَةٌ. أُحِبُّ هَذِهِ الغُرْفَةَ لِأَنَّ أَلْوَانَهَا هَادِئَةٌ.',
    modelEn: 'The living room is spacious and colourful. The sofa is dark purple and the rug is grey. The door is white, and the curtains are light blue. I love this room because its colours are calm.',
    notes: 'I DO (3 min) — the website speaking prompt “Living room” with a think-aloud before every colour: “noun masculine or feminine? which pattern?” Then change الأَرِيكَةُ to الكُرْسِيُّ — what changes? (بَنَفْسَجِيٌّ غَامِقٌ).',
  },
  F.gameSlide({ ...game, items: [game.items[0], game.items[2], game.items[5]] }, {
    title: 'What colour? Match the picture',
    en: ['The colour is red.', 'The colour is green.', 'The colour is white.'],
    icons: [[['fa6', 'FaCircle', 'C62828']], [['fa6', 'FaCircle', '2E7D32']], [['fa6', 'FaCircle', 'E8E8E8']]],
    labels: ['red', 'green', 'white'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Follow-up: say the feminine of each colour (حَمْرَاءُ، خَضْرَاءُ، بَيْضَاءُ) — why? (after اللَّوْنُ, masculine, the colour stays masculine). Other cards: أَزْرَقُ، أَصْفَرُ، أَسْوَدُ.',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website “Colour Code Mission”', title: 'Crack the colour code', ar: 'مُهِمَّةُ شِفْرَةِ الأَلْوَانِ',
    seed: 15,
    questions: [rounds[1], rounds[3], rounds[5], rounds[7], rounds[11]],
    side: { kind: 'core', label: 'CORE', text: 'Six colours change:\naḥmar → ḥamrā’\nThe rest add -a:\nbunnī → bunniyya' },
    answerSlide: { min: 0, eyebrow: 'We do · Mission answers', title: 'Mission: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 14 Colour Code rounds (broken pair, regular pattern, feminine agreement, shade, plural things). The other 9 are homework.',
    answerNotes: 'After each answer ask: which pattern — changes completely, or adds -a?',
  },
  F.repairSlide(site, ['Red: which pattern?', 'Table: masculine or feminine?', 'Wall: masculine or feminine?']),
  F.listening(site, {
    coreTip: 'Listen twice.\nTwo columns: room / object · colour.',
    routes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5.',
    gloss: [
      ['فِي بَيْتِ لَيْلَى غُرَفٌ مُلَوَّنَةٌ. بَابُ المَدْخَلِ أَزْرَقُ غَامِقٌ، وَالحَائِطُ أَبْيَضُ.', 'In Layla’s house there are colourful rooms. The front door is dark blue, and the wall is white.'],
      ['فِي غُرْفَةِ الجُلُوسِ أَرِيكَةٌ بَنَفْسَجِيَّةٌ وَسَجَّادَةٌ رَمَادِيَّةٌ. السَّتَائِرُ زَرْقَاءُ فَاتِحَةٌ وَمُخَطَّطَةٌ.', 'In the living room there is a purple sofa and a grey rug. The curtains are light blue and striped.'],
      ['فِي المَطْبَخِ ثَلَّاجَةٌ فِضِّيَّةٌ وَطَاوِلَةٌ بَيْضَاءُ، وَالكَرَاسِي بُرْتُقَالِيَّةٌ.', 'In the kitchen there is a silver fridge and a white table, and the chairs are orange.'],
      ['غُرْفَةُ لَيْلَى وَرْدِيَّةٌ، وَلَكِنَّ مَكْتَبَهَا بُنِّيٌّ. غُرْفَةُ أَخِيهَا خَضْرَاءُ، وَسَرِيرُهُ أَسْوَدُ.', 'Layla’s room is pink, but her desk is brown. Her brother’s room is green, and his bed is black.'],
      ['تُحِبُّ لَيْلَى غُرْفَةَ الجُلُوسِ لِأَنَّ أَلْوَانَهَا هَادِئَةٌ وَجَمِيلَةٌ.', 'Layla loves the living room because its colours are calm and beautiful.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · Text A · fully supported (website)', title: 'Yusuf’s study', ar: 'النَّصُّ (أ)',
    lines: [
      ['مَكْتَبُ يُوسُفَ صَغِيرٌ وَلَكِنَّهُ مُرَتَّبٌ.', 'Description: small but tidy'],
      ['الحَائِطُ أَخْضَرُ فَاتِحٌ، وَالبَابُ أَبْيَضُ.', 'Wall: light green · door: white'],
      ['فِي الغُرْفَةِ مَكْتَبٌ بُنِّيٌّ وَكُرْسِيٌّ أَسْوَدُ.', 'Desk: brown · chair: black'],
      ['عَلَى المَكْتَبِ حَاسُوبٌ فِضِّيٌّ وَمِصْبَاحٌ أَصْفَرُ.', 'Computer: silver · lamp: yellow'],
      ['السَّتَائِرُ بَيْضَاءُ وَخَضْرَاءُ وَمُخَطَّطَةٌ. يُحِبُّ يُوسُفُ المَكْتَبَ لِأَنَّ أَلْوَانَهُ هَادِئَةٌ.', 'Curtains: white, green, striped · opinion: calm colours'],
    ],
    notes: 'TEXT A (website). Website strategy: “Locate each noun first, then identify the agreeing colour and any extra shade or pattern word.” Every noun here is masculine except the curtains (plural of things → feminine colours).',
  },
  {
    type: 'glossed', stage: 'wedo', flex: true, eyebrow: 'We do · reading · Text B · reduced vowels (website) · FLEX / Stretch', title: 'Maha’s favourite objects', ar: 'النَّصُّ (ب)',
    lines: [
      ['تُحِبُّ مَهَا الألوان الزاهية.', 'Maha loves bright colours'],
      ['حقيبتها وردية، وهاتفها بنفسجي غامق.', 'Bag: pink (f.) · phone: dark purple (m.)'],
      ['في غرفتها سجادة حمراء، ووسادتان برتقاليتان، ومرآة ذهبية.', 'Rug: red · two cushions: orange · mirror: gold'],
      ['أمّا خزانتها فهي بيضاء، ولكن أبوابها ملوّنة.', 'Wardrobe: white · its doors: colourful'],
      ['تقول مها إنّ اللون الأزرق هو لونها المفضّل لأنّه هادئ وجميل.', 'Favourite colour: blue — calm and beautiful'],
    ],
    notes: 'TEXT B (website, reduced vowels — Stretch). Find the dual: وِسَادَتَانِ بُرْتُقَالِيَّتَانِ (two orange cushions — the colour is dual too!).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions (website)', title: 'Yusuf or Maha?', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 9,
    questions: bank(5, 'readingQuiz', [1, 3, 6, 8, 10]),
    side: { kind: 'info', head: 'NOUN FIRST', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Find the noun in the text,\nthen read the word after it.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading questions 2, 4, 7 (Yusuf) and 9, 11 (Maha — Core may skip). The other 7 are homework.',
    answerNotes: 'A student reads aloud the noun + colour (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'مَا لَوْنُكَ المُفَضَّلُ؟ / مَا لَوْنُكِ المُفَضَّلُ؟' },
      { route: 'develop', ar: 'مَا أَلْوَانُ غُرْفَتِكَ؟' },
      { route: 'develop', ar: 'صِفْ أَغْرَاضَكَ: الحَقِيبَةُ، الهَاتِفُ، الدَّفْتَرُ.' },
      { route: 'stretch', ar: 'صِفْ غُرْفَةَ الجُلُوسِ بِالأَلْوَانِ، وَقُلْ لِمَاذَا تُحِبُّهَا.' },
    ],
    stems: [
      { route: 'core', ar: 'لَوْنِي المُفَضَّلُ ______ .' },
      { route: 'develop', ar: 'غُرْفَتِي ______ ، وَسَرِيرِي ______ .' },
      { route: 'develop', ar: 'حَقِيبَتِي ______ ، وَهَاتِفِي ______ .' },
      { route: 'stretch', ar: '______ فَاتِحَةٌ / غَامِقَةٌ ، لِأَنَّ ______ .' },
    ],
    modelEn: ['What are the colours of the living room?', 'The living room is spacious and colourful. The sofa is dark purple.'],
    notes: `WEBSITE COLOUR-SCHEME STUDIO: describe a room, a person or an object set with accurate agreement and one reason. Prompt cards (website):
${prompts.map((r) => `• ${r.title}: ${r.detail}`).join('\n')}
Website checklist (listener ticks 1–6): five colour words · a broken and a regular colour · every colour agrees · light / dark / striped · a reason · clear delivery.
Sensitivity: for the family-portrait prompt, describe clothes and objects — not skin colour.`,
  }),
  F.routesSlide(site, {
    core: { amount: '6 phrases', how: 'Noun + colour from the bank: three masculine, three feminine (my bag, my room, my desk …).' },
    develop: { amount: '6–8 sentences', how: 'A room or your personal items: both colour patterns and one shade word.' },
    stretch: { amount: '8+ sentences', how: 'Definite phrases, a plural of things with a feminine colour, and a reason.' },
  }),
  F.framesSlide({
    core: [
      { en: 'My favourite colour is …', ar: 'لَوْنِي المُفَضَّلُ ______ .' },
      { en: 'My bag (f.) is …', ar: 'حَقِيبَتِي ______ .' },
      { en: 'My desk (m.) is …', ar: 'مَكْتَبِي ______ .' },
      { en: 'There is a red rug.', ar: 'هُنَاكَ سَجَّادَةٌ حَمْرَاءُ.' },
      { en: 'The door is white.', ar: 'البَابُ أَبْيَضُ.' },
    ],
    develop: [
      { en: 'The wall is light green.', ar: 'الحَائِطُ أَخْضَرُ فَاتِحٌ.' },
      { en: 'The sofa is dark purple.', ar: 'الأَرِيكَةُ بَنَفْسَجِيَّةٌ غَامِقَةٌ.' },
      { en: 'The curtains are blue and striped.', ar: 'السَّتَائِرُ زَرْقَاءُ وَمُخَطَّطَةٌ.' },
      { en: '…, but my … is …', ar: '______ ، وَلَكِنَّ ______ ______ .' },
      { en: 'I love it because its colours are calm.', ar: 'أُحِبُّهَا لِأَنَّ أَلْوَانَهَا هَادِئَةٌ.' },
    ],
    bank: ['أَحْمَرُ / حَمْرَاءُ', 'أَزْرَقُ / زَرْقَاءُ', 'أَخْضَرُ / خَضْرَاءُ', 'أَبْيَضُ / بَيْضَاءُ', 'أَسْوَدُ / سَوْدَاءُ', 'بُنِّيٌّ / بُنِّيَّةٌ', 'وَرْدِيٌّ / وَرْدِيَّةٌ', 'رَمَادِيٌّ / رَمَادِيَّةٌ', 'فَاتِحٌ', 'غَامِقٌ', 'مُخَطَّطٌ', 'لِأَنَّ'],
  }),
  F.modelSlide(site,
    'The living room is spacious and colourful. The sofa is dark purple and the rug is grey. The curtains are light blue and striped, and the lamp is golden. The wall is white. I love these colours because they are calm and beautiful.',
    ['a “changes completely” colour', 'an “adds -a” colour', 'a shade word', 'a reason'],
    'Website model (speaking prompt “Living room”, as extracted). Stretch: rewrite it about a bedroom with a masculine noun first (السَّرِيرُ …).'),
  F.selfCheckSlide([
    { route: 'core', text: 'Every colour comes AFTER its noun.' },
    { route: 'core', text: 'Feminine nouns have feminine colours.' },
    { route: 'develop', text: 'I used both patterns (ḥamrā’ and bunniyya).' },
    { route: 'develop', text: 'My shade word agrees too.' },
    { route: 'stretch', text: 'Plural things → feminine colour.' },
  ]),
  F.exitTicket(bank(5, 'finalQuiz', [0, 3, 9]), 16),
  F.prepSlide({
    ...NEXT,
    words: [['فُرْنٌ', 'an oven', 'pl. أَفْرَانٌ'], ['غَسَّالَةُ صُحُونٍ', 'a dishwasher', ''], ['غَلَّايَةٌ', 'a kettle', 'pl. غَلَّايَاتٌ'], ['مِكْوَاةٌ', 'an iron', 'pl. مَكَاوٍ'], ['مُكَيِّفٌ', 'an air conditioner', 'pl. مُكَيِّفَاتٌ']],
    questionEn: 'Which appliance does your family use every day? Write it in Arabic.',
    questionAr: 'مَاذَا تَسْتَعْمِلُ فِي البَيْتِ؟',
    homework: {
      core: 'Website F3-L05: the Colour Code Mission (14) and the picture game.',
      develop: 'Website writing task: a colour-rich description in 6–8 sentences.',
      stretch: 'Palette Studio: both colour patterns, gold, silver, light, dark, striped, and six noun phrases.',
    },
    wordsSource: 'The five words come from the website F3-L04 recognition bank — the appliances of F3-L06.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: noun first · aḥmar → ḥamrā’ · bunnī → bunniyya.' }),
];

module.exports = { meta, slides };
