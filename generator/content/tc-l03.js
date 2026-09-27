'use strict';
/*
 * TC-L03 · Climate, Seasons and Weather
 * Website: Advanced Topics › Topic C › Lesson 3 (reuses D4-L02 “Weather Patterns — Describing and Comparing Weather”;
 * Topic C focus “Understand forecasts and compare climate across regions and seasons”; grammar: weather expressions,
 * comparatives, time frames). Seasons: Time & Daily Routine bank. Picture match: website lesson game “Weather Forecast”.
 */
const C = require('./common');
const site = require('../site-data/d4-content.json').lessons.find((l) => l.code === 'D4-L02');
const game = require('../site-data/advanced-topic-visual-games.json').c03;
const G = site.grammar;
const { q, fromSite, splitPrompt } = C;

const meta = C.meta({
  n: 3, fileTitle: 'Climate_Seasons_Weather', chip: 'Climate, Seasons & Weather',
  title: 'Climate, Seasons and Weather', arabic: 'المُنَاخُ وَالفُصُولُ وَالطَّقْسُ',
  focus: 'Understand forecasts and compare climate across regions and seasons: weather words, verbs that agree with the weather (تَسْقُطُ الثُّلُوجُ), comparisons (أَكْثَرُ حَرَارَةً مِنْ) and the future.',
  icon: 'FaCloudSunRain',
});
const NEXT = { nextCode: 'TC-L04', nextTitle: 'Environmental Problems and Their Causes', nextAr: 'المُشْكِلَاتُ البِيئِيَّةُ وَأَسْبَابُهَا' };

const slides = [
  C.titleSlide({
    n: 3,
    source: 'The website lesson reuses D4-L02 (Weather Patterns — Describing and Comparing Weather) with the Topic C focus “Understand forecasts and compare climate across regions and seasons” (grammar: weather expressions; comparatives; time frames). The four seasons come from the website Time & Daily Routine vocabulary bank; the weather describing words come from the website lesson game “Weather Forecast”.',
    support: `• D4-L02 is A2–B1 language — a good match for this class. CORE: weather words, seasons and describing words (الطَّقْسُ حَارٌّ) + a verb that agrees with the weather (يَسْقُطُ المَطَرُ / تَسْقُطُ الثُّلُوجُ — the same blue WHO prefix as the morning-routine verbs). DEVELOP: comparisons أَكْثَرُ / أَقَلُّ + noun + مِنْ and temperatures. STRETCH: forecasts with مِنَ المُتَوَقَّعِ أَنْ + subjunctive.
• Transliteration and m./f. or sg./pl. forms on every Core card; a picture-match game with weather icons; a read-along forecast with English.
• Urdu bridge words (حرارت، رطوبت، برق، ہوا، خریف).`,
  }),
  C.welcomeSlide(),
  C.journeySlide({ teach: 'Weather words and seasons, then verbs and comparisons.', wedo: 'Picture match, build, sort, fix and listen to a forecast.', next: 'TC-L04' }),
  C.doNow({
    questions: [
      q('Which word means “weather”?', ['طَقْسٌ', 'مُنَاخٌ', 'فَصْلٌ'], 'Prepared at home: طَقْسٌ = weather · مُنَاخٌ = climate · فَصْلٌ = season.'),
      q('Which word means “cold”?', ['بَارِدٌ', 'مَطَرٌ', 'جَبَلٌ'], 'بَارِدٌ = cold (f. بَارِدَةٌ) · مَطَرٌ = rain · جَبَلٌ = mountain.'),
      q('Choose the accurate phrase.', ['غَابَةٌ اسْتِوَائِيَّةٌ', 'غَابَةٌ اسْتِوَائِيٌّ', 'اسْتِوَائِيَّةٌ غَابَةٌ'], 'TC-L02: the describing word comes after the noun and agrees (f. → ـِيَّةٌ).'),
      q('What does this mean?', ['Fish live in the sea.', 'Fish swim in the river.', 'Camels live in the desert.'], 'TC-L02 website game: تَعِيشُ = (they) live.', { ar: 'تَعِيشُ الأَسْمَاكُ فِي البَحْرِ.' }),
      q('Which continent is Egypt in?', ['أَفْرِيقِيَا', 'آسِيَا', 'أُورُوبَّا'], 'TC-L01: مِصْرُ فِي أَفْرِيقِيَا.'),
    ],
    keyIdea: { text: 'The weather is the subject: the verb’s first letter agrees with it — يَـ for masculine, تَـ for feminine.', ar: '{w|يَ}سْقُطُ المَطَرُ  ·  {w|تَ}سْقُطُ الثُّلُوجُ' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home (Flipped Learning follow-up). Questions 3–5 retrieve TC-L02 and TC-L01.',
  }),
  C.objectivesSlide(site.objectives, {
    core: ['I can say the weather and the season: الطَّقْسُ حَارٌّ فِي الصَّيْفِ.', 'I can use the right verb: يَسْقُطُ المَطَرُ / تَسْقُطُ الثُّلُوجُ.'],
    develop: ['I can compare two places: القَاهِرَةُ أَكْثَرُ حَرَارَةً مِنْ لَنْدَنَ.', 'I can give a temperature: تَرْتَفِعُ دَرَجَةُ الحَرَارَةِ إِلَى …'],
    stretch: ['I can forecast: مِنَ المُتَوَقَّعِ أَنْ تَنْخَفِضَ دَرَجَةُ الحَرَارَةِ.', 'I can write 100–120 words comparing two cities.'],
  }, 3, 'The route statements turn the general website objectives into this lesson’s concrete targets (website grammar rules 1–4).'),
  C.keywordsSlide({
    text: '36 words from the website in 6 groups. Learn the CORE words first. Hear it → say it → see it → use it.',
    groups: [
      { head: 'GROUP 1', name: 'Weather · 6' },
      { head: 'GROUP 2', name: 'Describing · 6' },
      { head: 'GROUP 3', name: 'Seasons · 6' },
      { head: 'GROUP 4', name: 'Forecast · 8' },
      { head: 'GROUP 5', name: 'Comparing · 6' },
      { head: 'GROUP 6 · FLEX', name: 'More · 4', flex: true },
    ],
    bridge: [
      { ar: 'حَرَارَةٌ', urdu: 'حرارت', tr: 'ḥarārat', en: 'heat' },
      { ar: 'رُطُوبَةٌ', urdu: 'رطوبت', tr: 'ruṭūbat', en: 'humidity' },
      { ar: 'بَرْقٌ', urdu: 'برق', tr: 'barq', en: 'lightning' },
      { ar: 'هَوَاءٌ', urdu: 'ہوا', tr: 'hawā', en: 'air, wind' },
      { ar: 'خَرِيفٌ', urdu: 'خریف', tr: 'kharīf', en: 'autumn' },
    ],
    notes: `URDU BRIDGE: حرارت (fever/heat), رطوبت (humidity), برق (lightning / electricity), ہوا (air, wind), خریف (the autumn crop season — in Arabic الخَرِيفُ is autumn).
Groups 1, 4, 5, 6 are the website D4-L02 vocabulary; Group 2 comes from the website game “Weather Forecast”; Group 3 from the website Time & Daily Routine bank (seasons).`,
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1', title: 'Weather', ar: 'الطَّقْسُ',
    items: [
      { n: 1, ar: 'المَطَرُ', en: 'rain', tr: 'al-ma-ṭar · pl. am-ṭār', tag: 'noun · m.', core: true, forms: [{ l: 'sg.', ar: 'مَطَرٌ' }, { l: 'pl.', ar: 'أَمْطَارٌ' }] },
      { n: 2, ar: 'الثُّلُوجُ', en: 'snow', tr: 'ath-thu-lūj · sg. thalj', tag: 'noun · f. (pl.)', core: true, forms: [{ l: 'sg.', ar: 'ثَلْجٌ' }, { l: 'pl.', ar: 'ثُلُوجٌ' }] },
      { n: 3, ar: 'الرِّيَاحُ', en: 'winds', tr: 'ar-ri-yāḥ · sg. rīḥ', tag: 'noun · f.', core: true, forms: [{ l: 'sg.', ar: 'رِيحٌ' }, { l: 'pl.', ar: 'رِيَاحٌ' }] },
      { n: 4, ar: 'الشَّمْسُ', en: 'sun', tr: 'ash-shams', tag: 'noun · f.', core: true, note: 'Feminine: تُشْرِقُ الشَّمْسُ.' },
      { n: 5, ar: 'السُّحُبُ / الغُيُومُ', en: 'clouds', tr: 'as-su-ḥub / al-ghu-yūm', tag: 'noun · pl.', core: true, forms: [{ l: 'sg.', ar: 'سَحَابَةٌ / غَيْمَةٌ' }, { l: 'pl.', ar: 'سُحُبٌ / غُيُومٌ' }] },
      { n: 6, ar: 'العَاصِفَةُ', en: 'storm', tr: 'al-ʿā-ṣi-fa · pl. ʿa-wā-ṣif', tag: 'noun · f.', forms: [{ l: 'sg.', ar: 'عَاصِفَةٌ' }, { l: 'pl.', ar: 'عَوَاصِفُ' }] },
    ],
    notes: `KEY WORDS — Weather phenomena (website D4-L02). Hear → Say → See → Use.
Gestures: fingers falling (rain), shiver (snow), blow (wind), circle overhead (sun), hands like a cloud, spin (storm).
The “tag” shows the gender that the VERB will need later: المَطَرُ (m.) → يَسْقُطُ; الثُّلُوجُ / الرِّيَاحُ / الشَّمْسُ (f.) → تَـ.
PRONUNCIATION: ث in الثُّلُوج is “th” as in “think”; ط in المَطَر is a heavy “ṭ”; ع in العَاصِفَة is the throat “ʿ”.`,
  },
  {
    type: 'vocab', stage: 'teach', min: 1, eyebrow: 'Key words · Group 2 · from the website game', title: 'Describing the weather', ar: 'وَصْفُ الطَّقْسِ',
    items: [
      { n: 1, ar: 'حَارٌّ', en: 'hot', tr: 'ḥārr', tag: 'adjective', core: true, forms: [{ l: 'm.', ar: 'حَارٌّ' }, { l: 'f.', ar: 'حَارَّةٌ' }] },
      { n: 2, ar: 'بَارِدٌ', en: 'cold', tr: 'bā-rid', tag: 'adjective', core: true, forms: [{ l: 'm.', ar: 'بَارِدٌ' }, { l: 'f.', ar: 'بَارِدَةٌ' }] },
      { n: 3, ar: 'مُشْمِسٌ', en: 'sunny', tr: 'mush-mis', tag: 'adjective', core: true, forms: [{ l: 'm.', ar: 'مُشْمِسٌ' }, { l: 'f.', ar: 'مُشْمِسَةٌ' }] },
      { n: 4, ar: 'مُمْطِرٌ', en: 'rainy', tr: 'mum-ṭir', tag: 'adjective', core: true, forms: [{ l: 'm.', ar: 'مُمْطِرٌ' }, { l: 'f.', ar: 'مُمْطِرَةٌ' }] },
      { n: 5, ar: 'عَاصِفٌ', en: 'windy, stormy', tr: 'ʿā-ṣif', tag: 'adjective', forms: [{ l: 'm.', ar: 'عَاصِفٌ' }, { l: 'f.', ar: 'عَاصِفَةٌ' }] },
      { n: 6, ar: 'رَطْبٌ', en: 'humid, damp', tr: 'raṭb', tag: 'adjective', forms: [{ l: 'm.', ar: 'رَطْبٌ' }, { l: 'f.', ar: 'رَطْبَةٌ' }] },
    ],
    notes: `KEY WORDS — describing words (website lesson game “Weather Forecast”: الطَّقْسُ حَارٌّ وَمُشْمِسٌ · سَيَكُونُ الطَّقْسُ مُمْطِرًا وَعَاصِفًا · الطَّقْسُ بَارِدٌ جِدًّا; رَطْبٌ from the Natural World bank).
Core sentence pattern for today: الطَّقْسُ + describing word. الطَّقْسُ is masculine, so use the m. form.
Notice مُشْمِس comes from شَمْس and مُمْطِر from مَطَر — ask students to spot the root letters (Curiosity point).`,
  },
  {
    type: 'vocab', stage: 'teach', min: 1, eyebrow: 'Key words · Group 3 · seasons and climate', title: 'The seasons', ar: 'الفُصُولُ',
    items: [
      { n: 1, ar: 'الرَّبِيعُ', en: 'spring', tr: 'ar-ra-bīʿ', tag: 'season · m.', core: true, forms: [{ l: 'in', ar: 'فِي الرَّبِيعِ' }, { l: '=', ar: 'رَبِيعًا' }] },
      { n: 2, ar: 'الصَّيْفُ', en: 'summer', tr: 'aṣ-ṣayf', tag: 'season · m.', core: true, forms: [{ l: 'in', ar: 'فِي الصَّيْفِ' }, { l: '=', ar: 'صَيْفًا' }] },
      { n: 3, ar: 'الخَرِيفُ', en: 'autumn', tr: 'al-kha-rīf', tag: 'season · m.', core: true, forms: [{ l: 'in', ar: 'فِي الخَرِيفِ' }, { l: '=', ar: 'خَرِيفًا' }] },
      { n: 4, ar: 'الشِّتَاءُ', en: 'winter', tr: 'ash-shi-tāʾ', tag: 'season · m.', core: true, forms: [{ l: 'in', ar: 'فِي الشِّتَاءِ' }, { l: '=', ar: 'شِتَاءً' }] },
      { n: 5, ar: 'فَصْلٌ', en: 'season', tr: 'faṣl · pl. fu-ṣūl', tag: 'noun · m.', forms: [{ l: 'sg.', ar: 'فَصْلٌ' }, { l: 'pl.', ar: 'فُصُولٌ' }] },
      { n: 6, ar: 'مُنَاخٌ', en: 'climate', tr: 'mu-nākh', tag: 'noun · m.', note: 'Climate = the usual weather of a region.' },
    ],
    notes: `KEY WORDS — seasons (website Time & Daily Routine bank) and climate (website Natural World bank).
The boxes show two ways to say “in summer”: فِي الصَّيْفِ or صَيْفًا (the website model uses صَيْفًا and شِتَاءً). Core: learn فِي + season.
Website example: تَتَفَتَّحُ الأَزْهَارُ فِي الرَّبِيعِ = Flowers bloom in spring.
Difference: الطَّقْسُ (weather today) vs المُنَاخُ (climate — the usual weather of a place).`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Key words · Group 4 · forecast language (website)', title: 'Forecast language: verb + weather', ar: 'لُغَةُ النَّشْرَةِ الجَوِّيَّةِ',
    cols: [{ label: 'Forecast phrase (website)', w: 4.6, size: 22 }, { label: 'English', w: 3.6 }, { label: 'Why this verb?', w: 4.13, italic: true }],
    rows: [
      { core: true, cells: [{ ar: '{w|يَ}سْقُطُ المَطَرُ', sub: 'yas-quṭ al-ma-ṭar' }, 'rain falls / it rains', 'المَطَر is masculine → يَـ'] },
      { core: true, cells: [{ ar: '{w|تَ}سْقُطُ الثُّلُوجُ', sub: 'tas-quṭ ath-thu-lūj' }, 'snow falls / it snows', 'الثُّلُوج is treated as feminine → تَـ'] },
      { core: true, cells: [{ ar: '{w|تَ}هُبُّ الرِّيَاحُ', sub: 'ta-hubb ar-ri-yāḥ' }, 'the winds blow', 'الرِّيَاح is feminine → تَـ'] },
      { cells: [{ ar: '{w|تُ}شْرِقُ الشَّمْسُ', sub: 'tush-riq ash-shams' }, 'the sun shines', 'الشَّمْس is feminine → تُـ'] },
      { cells: [{ ar: '{w|تَ}رْتَفِعُ دَرَجَةُ الحَرَارَةِ', sub: 'tar-ta-fiʿ da-ra-jat al-ḥa-rā-ra' }, 'the temperature rises', 'دَرَجَة is feminine → تَـ'] },
      { cells: [{ ar: '{w|تَ}نْخَفِضُ دَرَجَةُ الحَرَارَةِ', sub: 'tan-kha-fiḍ da-ra-jat al-ḥa-rā-ra' }, 'the temperature falls', 'opposite of تَرْتَفِعُ'] },
      { cells: [{ ar: 'مِنَ المُتَوَقَّعِ أَنْ', sub: 'mi-na l-mu-ta-waq-qaʿ an' }, 'it is expected that', 'Stretch: + subjunctive verb'] },
      { cells: [{ ar: 'النَّشْرَةُ الجَوِّيَّةُ', sub: 'an-nash-ra l-jaw-wiy-ya' }, 'the weather forecast', 'جَوِّيَّة — a nisba again!'] },
    ],
    notes: `KEY WORDS — Forecast language (website D4-L02). The blue letter is the WHO prefix — exactly the idea from the morning-routine verbs: the first letter of the verb tells you who (here: which weather word) is doing the action.
Core: the first three rows. Develop: rows 1–6. Stretch: all eight.
Read each phrase as ONE chunk (website teaching point: “Read the whole Arabic message — use the complete phrase and its context”).`,
  },
  {
    type: 'vocab', stage: 'teach', min: 1, eyebrow: 'Key words · Group 5 · Develop', title: 'Comparing and measuring', ar: 'المُقَارَنَةُ وَالقِيَاسُ',
    items: [
      { n: 1, ar: 'أَكْثَرُ حَرَارَةً مِنْ', en: 'hotter than', tr: 'ak-tha-ru ḥa-rā-ra-tan min', tag: 'comparison' },
      { n: 2, ar: 'أَقَلُّ رُطُوبَةً مِنْ', en: 'less humid than', tr: 'a-qal-lu ru-ṭū-ba-tan min', tag: 'comparison' },
      { n: 3, ar: 'دَرَجَةٌ مِئَوِيَّةٌ', en: 'degree Celsius', tr: 'da-ra-ja mi-ʾa-wiy-ya', tag: 'measurement', forms: [{ l: 'sg.', ar: 'دَرَجَةٌ' }, { l: 'pl.', ar: 'دَرَجَاتٌ' }] },
      { n: 4, ar: 'الحَدُّ الأَقْصَى', en: 'maximum', tr: 'al-ḥadd al-aq-ṣā', tag: 'measurement' },
      { n: 5, ar: 'الحَدُّ الأَدْنَى', en: 'minimum', tr: 'al-ḥadd al-ad-nā', tag: 'measurement' },
      { n: 6, ar: 'تَتَرَاوَحُ بَيْنَ … وَ …', en: 'ranges between … and …', tr: 'ta-ta-rā-wa-ḥu bay-na … wa …', tag: 'verb' },
    ],
    notes: `KEY WORDS — Comparison and measurement (website D4-L02). Develop / Stretch.
Notice the ـًا ending in حَرَارَةً / رُطُوبَةً — the comparison needs a NOUN, not an adjective (website common mistake: أَكْثَرُ حَارٌّ ✗).`,
  },
  {
    type: 'vocab', stage: 'teach', flex: true, eyebrow: 'Key words · Group 6 · FLEX', title: 'More weather words', ar: 'كَلِمَاتٌ إِضَافِيَّةٌ',
    items: [
      { n: 1, ar: 'الضَّبَابُ', en: 'fog', tr: 'aḍ-ḍa-bāb', tag: 'noun · m.' },
      { n: 2, ar: 'الرَّعْدُ', en: 'thunder', tr: 'ar-raʿd', tag: 'noun · m.' },
      { n: 3, ar: 'البَرْقُ', en: 'lightning', tr: 'al-barq', tag: 'noun · m.', note: 'Urdu: برق' },
      { n: 4, ar: 'الرُّطُوبَةُ', en: 'humidity', tr: 'ar-ru-ṭū-ba', tag: 'noun · f.', note: 'Urdu: رطوبت' },
    ],
    notes: 'KEY WORDS — FLEX (website D4-L02 “Weather phenomena”). Teach if time allows; otherwise website vocabulary tab for homework.',
  },
  {
    type: 'codeWord', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 1 · the weather is the subject', title: 'Read the weather verb like a code', ar: 'فِعْلُ الطَّقْسِ',
    word: '{w|تَ}{m|هُبُّ} الرِّيَاحُ', tr: 'ta-hubb ar-ri-yāḥ · the winds blow',
    parts: [
      { code: 'k', ar: 'الرِّيَاحُ', title: 'WEATHER = the subject', text: 'Name the weather. الرِّيَاح (winds) is treated as feminine.' },
      { code: 'm', ar: 'هُبُّ', title: 'MEANING', text: 'The rest of the verb carries the meaning: blow.' },
      { code: 'w', ar: 'تَـ / يَـ', title: 'WHO? the first letter', text: 'Feminine weather → تَـ. Masculine المَطَرُ → يَـ: يَسْقُطُ المَطَرُ.' },
    ],
    notes: `GRAMMAR PART 1 — website rule “Natural phenomena are grammatical subjects”: verb + weather subject. The verb agrees with the named phenomenon: المطر masculine; الثلوج and الرياح treated as feminine.
Think aloud: “Arabic starts with the verb. I look at the weather word: الرِّيَاح is feminine, so the verb starts with تَـ — the same blue WHO letter as in أَسْتَيْقِظُ / تَسْتَيْقِظُ.”
Core rule for today: المَطَرُ → يَـ ; everything else today → تَـ.
Misconception (website mistakes): يَسْقُطُ الثُّلُوجُ ✗, يَرْتَفِعُ دَرَجَةُ الحَرَارَةِ ✗.`,
  },
  {
    type: 'peopleTable', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · match the verb to the weather', title: 'One verb start, five weather words', ar: 'الفِعْلُ يُطَابِقُ الطَّقْسَ',
    heads: ['Weather word', 'Verb', 'Website sentence'],
    rows: [
      { who: 'المَطَرُ', whoEn: 'rain (m.)', word: '{w|يَ}{m|سْقُطُ}', sentence: '{w|يَ}سْقُطُ المَطَرُ غَزِيرًا.', en: 'It rains heavily.' },
      { who: 'الثُّلُوجُ', whoEn: 'snow (f.)', word: '{w|تَ}{m|سْقُطُ}', sentence: '{w|تَ}سْقُطُ الثُّلُوجُ فِي الشِّتَاءِ.', en: 'Snow falls in winter.' },
      { who: 'الرِّيَاحُ', whoEn: 'winds (f.)', word: '{w|تَ}{m|هُبُّ}', sentence: '{w|تَ}هُبُّ الرِّيَاحُ بِقُوَّةٍ.', en: 'The winds blow strongly.' },
      { who: 'الشَّمْسُ', whoEn: 'sun (f.)', word: '{w|تُ}{m|شْرِقُ}', sentence: 'فِي القَاهِرَةِ سَ{w|تُ}شْرِقُ الشَّمْسُ.', en: 'In Cairo the sun will shine.' },
      { who: 'دَرَجَةُ الحَرَارَةِ', whoEn: 'temperature (f.)', word: '{w|تَ}{m|رْتَفِعُ}', sentence: '{w|تَ}رْتَفِعُ دَرَجَةُ الحَرَارَةِ إِلَى ثَلَاثِينَ دَرَجَةً.', en: 'The temperature rises to thirty degrees.' },
    ],
    notes: `GRAMMAR PART 2 — the verb matches the weather word (2 min). Sentences from the website grammar quiz, rules and listening script.
Read each row aloud; students repeat the blue letter + verb.
Row 4 shows the future سَـ (time frames — Topic C grammar focus): سَتُشْرِقُ = will shine.
Check: thumbs-up if you can tell me the first letter for الثُّلُوجُ (تَـ).`,
  },
  {
    type: 'formula', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 3 · website rule “Comparing weather”', title: 'Compare two places', ar: 'المُقَارَنَةُ',
    cols: [
      { label: 'place', ar: 'المَكَانُ', color: '1B3B6F', pale: 'EEF3FA' },
      { label: 'more / less + noun (key word)', ar: 'أَكْثَرُ / أَقَلُّ', color: '0E7C86', pale: 'E3F2F3' },
      { label: 'than + place', ar: 'مِنْ', color: '8A6D1E', pale: 'F8F0DC' },
    ],
    rows: [
      { en: 'Cairo is hotter than London.', cells: ['القَاهِرَةُ', '{k|أَكْثَرُ} حَرَارَةً', 'مِنْ لَنْدَنَ.'] },
      { en: 'Amman is colder than Dubai.', cells: ['عَمَّانُ', '{k|أَكْثَرُ} بُرُودَةً', 'مِنْ دُبَيَّ.'] },
      { en: 'Jeddah is more humid than Riyadh.', cells: ['جُدَّةُ', '{k|أَكْثَرُ} رُطُوبَةً', 'مِنَ الرِّيَاضِ.'] },
      { en: 'The interior is less humid than the coast.', cells: ['الدَّاخِلُ', '{k|أَقَلُّ} رُطُوبَةً', 'مِنَ السَّاحِلِ.'] },
    ],
    foot: 'Not أَكْثَرُ حَارٌّ ✗. Use أَكْثَرُ / أَقَلُّ + a noun ending in ـًا: حَرَارَةً · بُرُودَةً · رُطُوبَةً',
    notes: `GRAMMAR PART 3 — website rule “Comparing weather”: أَكْثَرُ / أَقَلُّ + verbal noun + مِنْ. Use a comparison noun such as حرارةً، برودةً، رطوبةً.
Examples: website pattern (Cairo/London), quiz (Amman/Dubai), final check (Jeddah/Riyadh) and reading text (interior/coast).
Core: row 1 as a fixed chunk. Develop: all four, then make one about their own city. Stretch: combine with بَيْنَمَا (website speaking model).
Website common mistake: القَاهِرَةُ أَكْثَرُ حَارٌّ مِنْ لَنْدَنَ ✗ → أَكْثَرُ حَرَارَةً.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 1, eyebrow: 'Grammar focus · Part 4 · time frames', title: 'Now, tomorrow, expected', ar: 'الأَزْمِنَةُ فِي النَّشْرَةِ',
    cards: [
      { chip: 'NOW · PRESENT', head: 'يَسْقُطُ', big: 'يَسْقُطُ المَطَرُ', en: 'It is raining / it rains.', clue: 'The present for today and for general facts: تَسْقُطُ الثُّلُوجُ فِي الشِّتَاءِ.' },
      { chip: 'FUTURE · سَـ', color: '7B3FA0', head: 'سَيَسْقُطُ', big: 'سَيَسْقُطُ المَطَرُ صَبَاحًا', en: 'It will rain in the morning.', clue: 'Add سَـ to the present verb: سَتُشْرِقُ الشَّمْسُ.' },
      { chip: 'FORECAST · STRETCH', color: 'B83227', head: 'مِنَ المُتَوَقَّعِ أَنْ', big: 'مِنَ المُتَوَقَّعِ أَنْ تَنْخَفِضَ دَرَجَةُ الحَرَارَةِ', en: 'The temperature is expected to fall.', clue: 'After أَنْ the verb ends in a fatḥa: تَنْخَفِضَ.' },
    ],
    error: { text: 'Using يَـ with a feminine weather word, or أَكْثَرُ + an adjective.', pairs: [['تَسْقُطُ الثُّلُوجُ', 'يَسْقُطُ الثُّلُوجُ'], ['أَكْثَرُ حَرَارَةً', 'أَكْثَرُ حَارٌّ']] },
    notes: `GRAMMAR PART 4 — time frames (Topic C grammar focus) with website rule 4 “Forecasting”: مِنَ المُتَوَقَّعِ أَنْ + subjunctive present (after أن, a sound-ending present verb takes the subjunctive ending).
Examples from the website listening script (سَتُشْرِقُ، سَيَسْقُطُ المَطَرُ صَبَاحًا) and grammar rules.
• CORE: present only. • DEVELOP: add سَـ for tomorrow. • STRETCH: مِنَ المُتَوَقَّعِ أَنْ + fatḥa.
Common errors are the website “common mistakes”.`,
  },
  {
    type: 'ruleRows', stage: 'teach', flex: true, eyebrow: 'Grammar focus · Part 5 · website examples · FLEX', title: 'The four website rules with examples', ar: 'أَمْثِلَةُ القَوَاعِدِ',
    rows: G.rules.map((r) => ({ title: r.heading, formula: r.formula, examples: r.examples })),
    notes: `WEBSITE GRAMMAR RULES AND EXAMPLES (FLEX — revision or homework). Website overview: “${G.overview}”
Website common error: “${G.common_error}”`,
  },
  C.quickCheck([fromSite(G.quiz[0]), fromSite(G.quiz[1]), splitPrompt(G.quiz[2]), fromSite(G.quiz[4])], 'website grammar quiz questions 1, 2, 3 and 5.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me describe the weather', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Choose a place', ar: 'الطَّقْسُ فِي القَاهِرَةِ', think: 'الطَّقْسُ (m.) + فِي + city.' },
      { head: 'Weather + season', ar: '{k|حَارٌّ} وَ{k|مُشْمِسٌ} صَيْفًا', think: 'Describing words from the game. صَيْفًا = in summer.' },
      { head: 'Add a temperature', ar: '{w|تَ}{m|رْتَفِعُ} دَرَجَةُ الحَرَارَةِ', think: 'دَرَجَة is feminine → تَـ. Then إِلَى + number.' },
      { head: 'Compare', ar: '{k|أَكْثَرُ حَرَارَةً} مِنْ لَنْدَنَ', think: 'أَكْثَرُ + noun (ـًا) + مِنْ.' },
    ],
    legend: ['w', 'm', 'k'], legendLabels: { w: 'WHO', m: 'MEANING', k: 'WEATHER WORD' },
    model: 'الطَّقْسُ فِي القَاهِرَةِ {k|حَارٌّ} وَ{k|مُشْمِسٌ} صَيْفًا، وَ{w|تَ}{m|رْتَفِعُ} دَرَجَةُ الحَرَارَةِ إِلَى ثَلَاثِينَ دَرَجَةً. القَاهِرَةُ {k|أَكْثَرُ حَرَارَةً} مِنْ لَنْدَنَ.',
    modelEn: 'The weather in Cairo is hot and sunny in summer, and the temperature rises to thirty degrees. Cairo is hotter than London.',
    notes: `I DO (3 min) — teacher models with a think-aloud; students watch, then COPY the finished description into their books.
Step 1 — “I start with الطَّقْسُ and the place: فِي القَاهِرَةِ.”
Step 2 — “Two describing words from the game, and the season: حَارٌّ وَمُشْمِسٌ صَيْفًا.”
Step 3 — “A temperature: دَرَجَة is feminine, so تَرْتَفِعُ — then إِلَى ثَلَاثِينَ دَرَجَةً.”
Step 4 — “Compare: أَكْثَرُ حَرَارَةً مِنْ لَنْدَنَ — a noun ending in ـًا, never أَكْثَرُ حَارٌّ.”
Built from website language: lesson game (حَارٌّ وَمُشْمِسٌ), website rule examples (تَرْتَفِعُ دَرَجَةُ الحَرَارَةِ إِلَى ثَلَاثِينَ دَرَجَةً · القَاهِرَةُ أَكْثَرُ حَرَارَةً مِنْ لَنْدَنَ), website model (صَيْفًا).`,
  },
  {
    type: 'models', stage: 'ido', min: 1, eyebrow: 'I do · model sentences from the website', title: 'Four sentences to borrow', ar: 'جُمَلٌ نَمُوذَجِيَّةٌ',
    rows: [
      { ar: 'الطَّقْسُ حَارٌّ وَمُشْمِسٌ.', en: 'The weather is hot and sunny.', tip: 'Website game — a Core sentence.' },
      { ar: 'تَسْقُطُ الثُّلُوجُ فِي الشِّتَاءِ.', en: 'Snow falls in winter.', tip: 'Feminine weather word → تَـ.' },
      { ar: site.patterns[2].ar, en: 'Cairo is hotter than London.', tip: 'أَكْثَرُ + noun (ـًا) + مِنْ.' },
      { ar: G.rules[3].examples[0], en: 'The temperature is expected to fall at night.', tip: 'Stretch: أَنْ + subjunctive fatḥa.' },
    ],
    notes: `MODEL SENTENCES (1 min) — website lesson game, grammar quiz and rules. Students copy TWO that are useful for them.
• Core: copy 1 and 2 and change the weather/season. • Develop: copy 3 with two new cities. • Stretch: copy 4 and write another forecast.`,
  },
  C.gameSlide(game, {
    en: ['The weather is hot and sunny, and the temperature is thirty-two degrees.', 'The weather will be rainy and windy.', 'The weather is very cold and the temperature is below zero.'],
    icons: [[['fa6', 'FaSun', 'C77700'], ['fa6', 'FaTemperatureHigh', 'B83227']], [['fa6', 'FaCloudRain', '1D5FBF'], ['fa6', 'FaWind', '5A6472']], [['fa6', 'FaSnowflake', '1D5FBF'], ['fa6', 'FaTemperatureLow', '1D5FBF']]],
    labels: ['32°C', 'rain + wind', '−2°C'],
    order: [2, 0, 1],
    notes: 'Key words to spot: حَارٌّ / مُشْمِسٌ (hot / sunny), مُمْطِرًا / عَاصِفًا (rainy / windy), بَارِدٌ / تَحْتَ الصِّفْرِ (cold / below zero). Sentence 2 uses the future سَيَكُونُ (will be).',
  }),
  {
    type: 'builder', stage: 'wedo', min: 3, eyebrow: 'We do · guided practice · sentence builder', title: 'Build the forecast', ar: 'اِبْنِ الجُمْلَةَ',
    rows: [
      { en: 'It rains in the morning.', cols: [['تَسْقُطُ', 'يَسْقُطُ'], ['المَطَرُ', 'الشَّمْسُ'], ['مَسَاءً.', 'صَبَاحًا.']], key: [1, 0, 1], why: 'المَطَرُ is masculine → يَسْقُطُ.' },
      { en: 'Strong winds blow in the evening.', cols: [['تَهُبُّ', 'يَهُبُّ'], ['رِيَاحٌ قَوِيَّةٌ', 'رِيَاحٌ قَوِيٌّ'], ['صَبَاحًا.', 'مَسَاءً.']], key: [0, 0, 1], why: 'رِيَاح is feminine → تَهُبُّ … قَوِيَّةٌ.' },
      { en: 'The interior is hotter than the coast.', cols: [['الدَّاخِلُ', 'السَّاحِلُ'], ['أَكْثَرُ حَارٌّ', 'أَكْثَرُ حَرَارَةً'], ['مِنَ السَّاحِلِ.', 'إِلَى السَّاحِلِ.']], key: [0, 1, 0], why: 'أَكْثَرُ + noun (ـًا) + مِنْ.' },
    ],
    answerSlide: { min: 0, eyebrow: 'We do · sentence builder answers', title: 'Check your sentences', ar: 'تَحَقَّقْ مِنْ جُمَلِكَ' },
    notes: `WE DO — sentence builder (3 min). Teacher-made from website sentences (listening script: تَهُبُّ رِيَاحٌ قَوِيَّةٌ مَسَاءً · سَيَسْقُطُ المَطَرُ صَبَاحًا; reading: الدَّاخِلُ أَكْثَرُ حَرَارَةً).
Students choose ONE box per column (start from Column 1 on the right) and type the letters, e.g. “1: B A B”. ↔ Rehearse 30s: whisper the full sentence first.
Core: sentences 1–2 (verb agreement). Develop/Stretch: sentence 3 and explain the wrong options.
Website builders (for fast finishers on the website): forecasts, temperature patterns and comparisons.`,
  },
  {
    type: 'sorter', stage: 'wedo', min: 2, eyebrow: 'We do · website sorter', title: 'Weather word, forecast or comparison?', ar: 'صَنِّفْ',
    categories: ['Weather phenomena', 'Forecast language', 'Comparison and measurement'],
    items: [
      { ar: 'تَهُبُّ الرِّيَاحُ', cat: 1 }, { ar: 'المَطَرُ', cat: 0 }, { ar: 'الحَدُّ الأَقْصَى', cat: 2 }, { ar: 'الثُّلُوجُ', cat: 0 },
      { ar: 'يَسْقُطُ المَطَرُ', cat: 1 }, { ar: 'دَرَجَةٌ مِئَوِيَّةٌ', cat: 2 }, { ar: 'الرِّيَاحُ', cat: 0 }, { ar: 'الحَدُّ الأَدْنَى', cat: 2 }, { ar: 'تَسْقُطُ الثُّلُوجُ', cat: 1 },
    ],
    answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
    notes: `WE DO — website sorter (2 min). Clue for Core: a tile with a VERB (يَـ / تَـ at the start) is forecast language.
On Teams: drag the tiles live or annotate. Develop: say the English for each forecast tile. Stretch: turn one tile into a forecast with سَـ.`,
  },
  C.morePractice([fromSite(G.quiz[3], { n: 5 }), splitPrompt(G.quiz[5], { n: 6 }), fromSite(G.quiz[6], { n: 7 }), fromSite(G.quiz[7], { n: 8 })], 'website quiz questions 4, 6, 7, 8'),
  C.repairSlide(site, [
    'What is wrong? Is الثُّلُوجُ treated as masculine or feminine?',
    'What is wrong? Is دَرَجَة masculine or feminine?',
    'What is wrong? After أَكْثَرُ, do we need an adjective or a noun?',
  ]),
  C.listening(site, {
    coreTip: 'Listen twice. Core: questions 1, 2 and 5 — listen for the cities القَاهِرَة، عَمَّان، الرِّبَاط and the words الشَّمْس، المَطَر، صَبَاحًا.',
    routes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 6.',
    gloss: [
      ['مَرْحَبًا بِكُمْ فِي النَّشْرَةِ الجَوِّيَّةِ.', 'Welcome to the weather forecast.'],
      ['فِي القَاهِرَةِ سَتُشْرِقُ الشَّمْسُ، وَسَتَرْتَفِعُ دَرَجَةُ الحَرَارَةِ إِلَى ثَلَاثٍ وَثَلَاثِينَ دَرَجَةً.', 'In Cairo the sun will shine, and the temperature will rise to thirty-three degrees.'],
      ['أَمَّا فِي عَمَّانَ فَمِنَ المُتَوَقَّعِ أَنْ تَنْخَفِضَ دَرَجَةُ الحَرَارَةِ لَيْلًا إِلَى اثْنَتَيْ عَشْرَةَ دَرَجَةً.', 'As for Amman, the temperature is expected to fall at night to twelve degrees.'],
      ['وَفِي الرِّبَاطِ سَيَسْقُطُ المَطَرُ صَبَاحًا، ثُمَّ تَهُبُّ رِيَاحٌ قَوِيَّةٌ مَسَاءً.', 'And in Rabat it will rain in the morning, then strong winds will blow in the evening.'],
    ],
  }),
  C.speakingSlide(site, {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'كَيْفَ الطَّقْسُ اليَوْمَ فِي مَدِينَتِكَ؟' },
      { route: 'develop', ar: site.speaking.prompts[0] },
      { route: 'develop', ar: site.speaking.prompts[1] },
      { route: 'stretch', ar: site.speaking.prompts[2] },
    ],
    stems: [
      { route: 'core', ar: 'الطَّقْسُ ______ وَ ______ .' },
      { route: 'develop', ar: '______ أَكْثَرُ ______ مِنْ ______ .' },
      { route: 'stretch', ar: 'مِنَ المُتَوَقَّعِ أَنْ ______ .' },
      { route: 'sum', ar: 'قَالَ / قَالَتْ إِنَّ الطَّقْسَ ______ .' },
    ],
    modelEn: ['How does the weather differ between two cities?', 'Developed comparison'],
    notes: 'Core prompt (teacher-made; it is the preparation question): “What is the weather like today in your city?” — answered with the Core stem, e.g. الطَّقْسُ بَارِدٌ وَمُمْطِرٌ.',
  }),
  C.routesSlide(site, {
    core: { amount: '4 sentences', how: 'Frames + word bank (next slide): الطَّقْسُ + describing word, a season, and يَسْقُطُ / تَسْقُطُ.' },
    develop: { amount: '6–8 sentences', how: 'Link with وَ، لٰكِنْ، أَمَّا … فَـ. Include a temperature and one comparison with أَكْثَرُ … مِنْ.' },
    stretch: { amount: '100–120 words', how: 'Website writing task: compare the weather in two Arabic-speaking cities. Checklist and phrase bank on the Stretch slide.' },
  }),
  C.framesSlide({
    core: [
      { en: 'The weather is hot and sunny.', ar: 'الطَّقْسُ ______ وَ ______ .' },
      { en: 'In summer the weather is …', ar: 'فِي الصَّيْفِ الطَّقْسُ ______ .' },
      { en: 'It rains in …', ar: 'يَسْقُطُ المَطَرُ فِي ______ .' },
      { en: 'Snow falls in …', ar: 'تَسْقُطُ الثُّلُوجُ فِي ______ .' },
      { en: 'The temperature is … degrees.', ar: 'دَرَجَةُ الحَرَارَةِ ______ دَرَجَةً .' },
    ],
    develop: [
      { en: '… is hotter than …', ar: '______ أَكْثَرُ حَرَارَةً مِنْ ______ .' },
      { en: '… is colder than …', ar: '______ أَكْثَرُ بُرُودَةً مِنْ ______ .' },
      { en: 'It ranges between … and …', ar: 'تَتَرَاوَحُ دَرَجَةُ الحَرَارَةِ بَيْنَ ______ وَ ______ .' },
      { en: 'The temperature will rise to …', ar: 'سَتَرْتَفِعُ دَرَجَةُ الحَرَارَةِ إِلَى ______ .' },
      { en: 'It is expected that …', ar: 'مِنَ المُتَوَقَّعِ أَنْ ______ .' },
    ],
    bank: ['حَارٌّ', 'بَارِدٌ', 'مُشْمِسٌ', 'مُمْطِرٌ', 'رَطْبٌ', 'الصَّيْفُ', 'الشِّتَاءُ', 'الرَّبِيعُ', 'الخَرِيفُ', 'يَسْقُطُ المَطَرُ', 'تَهُبُّ الرِّيَاحُ', 'القَاهِرَةُ', 'عَمَّانُ', 'دُبَيُّ', 'لَنْدَنُ'],
  }),
  C.stretchSlide(site, [
    ['تَخْتَلِفُ أَحْوَالُ الطَّقْسِ مِنْ مَنْطِقَةٍ إِلَى أُخْرَى', 'weather conditions differ from one region to another'],
    ['وَقَدْ تَتَجَاوَزُ أَرْبَعِينَ دَرَجَةً مِئَوِيَّةً', 'and it may exceed forty degrees Celsius'],
    ['أَمَّا فِي … فَالجَوُّ أَكْثَرُ بُرُودَةً', 'as for …, the weather is colder'],
    ['كَمَا تَهُبُّ الرِّيَاحُ عَلَى السَّاحِلِ', 'winds also blow on the coast'],
    ['تُشِيرُ النَّشْرَةُ الجَوِّيَّةُ إِلَى …', 'the forecast points to …'],
    ['لِذٰلِكَ، يَجِبُ عَلَى المُسَافِرِ أَنْ …', 'so the traveller should …'],
  ]),
  C.modelSlide(site,
    'Weather conditions in the Arab world differ from one region to another. In Dubai the temperature rises in summer, and it may exceed forty degrees Celsius. As for Amman, the weather is colder in winter, and snow is expected to fall on some days. In Rabat it rains more than in Dubai, and winds also blow on the coast. So travellers should read the weather forecast before the trip.',
    ['a weather verb that agrees', 'a temperature', 'a comparison with مِنْ', 'a forecast'],
    'Evidence: تَرْتَفِعُ دَرَجَةُ الحَرَارَةِ صَيْفًا · أَرْبَعِينَ دَرَجَةً مِئَوِيَّةً · أَكْثَرُ بُرُودَةً · مِنَ المُتَوَقَّعِ أَنْ تَسْقُطَ الثُّلُوجُ.'),
  C.selfCheckSlide([
    { route: 'core', text: 'I can describe the weather and the season: الطَّقْسُ حَارٌّ فِي الصَّيْفِ.' },
    { route: 'core', text: site.success[0] },
    { route: 'develop', text: 'I use تَـ with feminine weather words: تَسْقُطُ الثُّلُوجُ، تَهُبُّ الرِّيَاحُ.' },
    { route: 'develop', text: site.success[2] },
    { route: 'stretch', text: 'I compare with أَكْثَرُ + noun + مِنْ and forecast with مِنَ المُتَوَقَّعِ أَنْ.' },
  ]),
  C.exitTicket([fromSite(site.final[0]), fromSite(site.final[2]), fromSite(site.final[3])], site.final.length),
  ...C.readingSlides(site, [
    ['تُشِيرُ إِلَى', 'points to'], ['اخْتِلَافٌ', 'a difference'], ['مَنَاطِقُ البِلَادِ', 'the country’s regions'], ['السَّاحِلُ', 'the coast'], ['تَتَرَاوَحُ بَيْنَ', 'ranges between'],
    ['الرُّطُوبَةُ', 'humidity'], ['مُرْتَفِعَةٌ', 'high'], ['الدَّاخِلُ', 'the interior'], ['الجَوُّ', 'the weather, the air'], ['الجَنُوبِيَّةُ', 'southern'],
  ]),
  C.prepSlide({
    ...NEXT,
    words: [['تَلَوُّثٌ', 'pollution', ''], ['نُفَايَاتٌ', 'waste, rubbish', ''], ['هَوَاءٌ', 'air', ''], ['شَجَرَةٌ', 'tree', 'pl. أَشْجَارٌ'], ['بِسَبَبِ', 'because of', '']],
    questionEn: 'Write one Arabic sentence: what is one problem for the environment where you live?',
    questionAr: 'مَا مُشْكِلَةٌ بِيئِيَّةٌ فِي مَدِينَتِكَ؟',
    homework: {
      core: 'Website · TC-L03 · play “Weather Forecast”, then the vocabulary mission.',
      develop: 'Write 5 sentences comparing the weather in two cities with أَكْثَرُ … مِنْ.',
      stretch: 'Website · TC-L03 · the application mission and the reading “Regional weather differences” (6 questions).',
    },
    wordsSource: 'The five words come from the website D4-L03 vocabulary (Environmental problems; Cause and effect) and the Natural World bank.',
  }),
  C.closeSlide(NEXT),
];

module.exports = { meta, slides };
