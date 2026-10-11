'use strict';
/* TE-L01 · Countries, Nationalities and Languages — website: Advanced Topics › Topic E › Lesson 1 (lesson engine D6-L01).
   Topic layer: the website Topic E challenge “Country–language map match”, the Topic game “Country–Language Match” (FLEX); preparation follows the next Topic lesson’s engine (Do Now words from the website D6-L05 preparation list). */
const T = require('./topic-common');
const { game } = require('./topic-de-games');

const meta = T.meta('E', 1, { fileTitle: 'Countries_Nationalities_and_Languages', chip: 'Countries', icon: 'FaEarthAfrica' });
const slides = T.reuse('E', 1, require('./d6-l01'), {
  prepWordsFrom: require('./d6-l05'),
  addGame: game('e01', { notes: 'TOPIC E GAME “Country–Language Match”: France · French, Egypt · Arab country, Britain · English.' }),
  challenge: {
    min: 5,
    steps: ["On a map, match 6 countries to their nationality and main language (cards in the notes).", "Choose one country secretly.", "Give three clues: location, nationality, language — no country name.", "Partners guess; check the nisba agreement (m. / f.)."],
    routes: {
      core: 'Match the cards; one clue: “yatakallamu an-nās …”.',
      develop: 'Three clues with a nisba adjective and a preposition (fī shamāl …).',
      stretch: 'Three clues + residence vs nationality (huwa miṣriyy lākinnahu yaskunu fī …).',
    },
    phrases: [["تَقَعُ فِي شَمَالِ / جَنُوبِ …", "it is in the north / south of …"], ["يَتَكَلَّمُ النَّاسُ …", "people speak …"], ["هُوَ مَغْرِبِيٌّ / هِيَ مَغْرِبِيَّةٌ", "he / she is Moroccan"], ["يَسْكُنُ فِي … لٰكِنَّهُ …", "he lives in … but he is …"]],
    notes: 'Website Topic E challenge “Country–language map match”. Cards: مِصْرُ – مِصْرِيٌّ – العَرَبِيَّةُ · المَغْرِبُ – مَغْرِبِيٌّ – العَرَبِيَّةُ وَالأَمَازِيغِيَّةُ · فَرَنْسَا – فَرَنْسِيٌّ – الفَرَنْسِيَّةُ · بَاكِسْتَانُ – بَاكِسْتَانِيٌّ – الأُرْدِيَّةُ · تُرْكِيَا – تُرْكِيٌّ – التُّرْكِيَّةُ · بِرِيطَانْيَا – بِرِيطَانِيٌّ – الإِنْجِلِيزِيَّةُ. Diptotes: no tanwīn on مِصْرُ / فَرَنْسَا.',
  },
  close: { remember: 'Remember: learn the 5 words for TE-L02.' },
});
module.exports = { meta, slides };
