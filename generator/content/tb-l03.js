'use strict';
/* TB-L03 · Appearance and Personality — website: Advanced Topics › Topic B › Lesson 3 (lesson engine D2-L06).
   Preparation points to TB-L04 (engine F3-L03): five home words from the website F3-L03 banks. */
const T = require('./topic-common');

const meta = T.meta('B', 3, { fileTitle: 'Appearance_and_Personality', chip: 'Appearance and Personality', icon: 'FaUserPen' });
const slides = T.reuse('B', 3, require('./d2-l06'), {
  challenge: {
    steps: [
      'Teacher shows 3 description cards (appearance) and 3 personality clues on screen.',
      'Pairs match each appearance card to a personality clue (type 1-B, 2-A …).',
      'For each match, say ONE fact (appearance) and ONE opinion (personality).',
      'Check every adjective: m. / f. agreement.',
    ],
    routes: {
      core: 'Match the cards; say one fact: “huwa ṭawīl / hiya ṭawīla”.',
      develop: 'A fact + an opinion with “I think” (a‘taqidu anna …).',
      stretch: 'Justify the opinion with evidence (li’annahu / li’annahā …) and use a relative clause (alladhī / allatī).',
    },
    phrases: [['طَوِيلٌ / طَوِيلَةٌ', 'tall (m. / f.)'], ['شَعْرُهَا أَسْوَدُ', 'her hair is black'], ['أَعْتَقِدُ أَنَّهُ …', 'I think that he …'], ['الَّذِي / الَّتِي', 'who (m. / f.)']],
    notes: 'Cards to show: 1 طَوِيلٌ، شَعْرُهُ قَصِيرٌ، يَلْبَسُ نَظَّارَةً · 2 قَصِيرَةٌ، شَعْرُهَا طَوِيلٌ وَأَسْوَدُ · 3 نَحِيفٌ، عَيْنَاهُ خَضْرَاوَانِ. Clues: A يَقْرَأُ كَثِيرًا وَيُسَاعِدُ زُمَلَاءَهُ · B تَضْحَكُ دَائِمًا وَتُحِبُّ الحَفَلَاتِ · C هَادِئٌ وَخَجُولٌ قَلِيلًا. Any match is fine if justified — the point is FACT vs OPINION (website Topic B challenge “Appearance and character match”). Invented people only.',
  },
  prep: {
    words: [['بَيْتٌ', 'a house, a home', 'pl. بُيُوتٌ'], ['شَقَّةٌ', 'a flat', 'pl. شُقَقٌ'], ['غُرْفَةٌ', 'a room', 'pl. غُرَفٌ'], ['مَطْبَخٌ', 'a kitchen', 'pl. مَطَابِخُ'], ['حَدِيقَةٌ', 'a garden', 'pl. حَدَائِقُ']],
    questionEn: 'Do you live in a house or a flat? Write one sentence in Arabic (a real or an invented home).',
    questionAr: 'أَيْنَ تَسْكُنُ؟',
    homework: {
      core: 'Website D2-L06: the picture game and the vocabulary tab — learn 8 description words (m. and f.).',
      develop: 'Describe a person (invented or a book character): appearance + personality with one piece of evidence.',
      stretch: 'Website writing task on appearance and personality, with a fact / opinion contrast.',
    },
    wordsSource: 'The five words come from the website F3-L03 home banks (the TB-L04 lesson engine).',
  },
  close: { remember: 'Remember: 5 home words + where you live.' },
});
module.exports = { meta, slides };
