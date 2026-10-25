'use strict';
/* Practice Room · D5-L02 · Sport — results, rules and athletes I admire. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd5-l02',
  arShort: 'الرِّيَاضَةُ',
  grammar: 'results in the past: fāza bi- (a title) · fāza ʿalā (an opponent) · khasira · taʿādala maʿa; rules: yajibu ʿalā al-lāʿibi an … · mamnūʿun an … · lā yajūzu; admiring an athlete: uʿjabu bi- … li-annahu / li-annahā …; scores (bi-natījati ithnayni li-wāḥid)',
  focus: 'Students run their own speaking and writing practice about sport: say the sport words, act a match-report dialogue, answer question cards, do a role-play card explaining a sport to a visitor, give a one-minute talk about an athlete they admire, then build, fix and write a short profile of a famous athlete.',
  words1: 'Sports and results', words2: 'Rules and athletes',
  dialogue: {
    title: 'Did you watch the match?', ar: 'هَلْ شَاهَدْتَ المُبَارَاةَ؟',
    lines: [
      ['A', 'هَلْ شَاهَدْتَ المُبَارَاةَ أَمْسِ؟', 'Did you watch the match yesterday?'],
      ['B', 'نَعَمْ! فَازَ فَرِيقُنَا عَلَى فَرِيقِ المَدِينَةِ بِنَتِيجَةِ ثَلَاثَةٍ لِوَاحِدٍ.', 'Yes! Our team beat the city team three–one.'],
      ['A', 'رَائِعٌ! وَهَلْ فَازَ بِالكَأْسِ؟', 'Great! And did they win the cup?'],
      ['B', 'لَيْسَ بَعْدُ؛ النِّهَائِيُّ الأُسْبُوعَ القَادِمَ.', 'Not yet — the final is next week.'],
      ['A', 'مَنْ أَفْضَلُ لَاعِبٍ فِي رَأْيِكَ؟', 'Who is the best player, in your opinion?'],
      ['B', 'أُعْجَبُ بِحَارِسِ المَرْمَى، لِأَنَّهُ هَادِئٌ وَشُجَاعٌ.', 'I admire the goalkeeper, because he is calm and brave.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: report a REAL match you watched — win, lose or draw?',
  },
  questions: [
    { q: 'مَا رِيَاضَتُكَ المُفَضَّلَةُ؟', en: 'Your favourite sport?', start: 'رِيَاضَتِي المُفَضَّلَةُ … لِأَنَّهَا …', more: '… أَلْعَبُهَا / أُشَاهِدُهَا …' },
    { q: 'مَنِ الرِّيَاضِيُّ الَّذِي تُعْجَبُ بِهِ؟', en: 'Which athlete do you admire?', start: 'أُعْجَبُ بِ… لِأَنَّهُ / لِأَنَّهَا …', more: '… فَازَ / فَازَتْ بِ…' },
    { q: 'مَاذَا حَدَثَ فِي آخِرِ مُبَارَاةٍ شَاهَدْتَهَا؟', en: 'What happened in the last match you watched?', start: 'فَازَ … عَلَى … / تَعَادَلَ …', more: '… بِنَتِيجَةِ …' },
    { q: 'مَا قَوَاعِدُ رِيَاضَتِكَ؟', en: 'What are the rules of your sport?', start: 'يَجِبُ عَلَى اللَّاعِبِ أَنْ …', more: '… وَمَمْنُوعٌ أَنْ …' },
    { q: 'هَلِ الرِّيَاضَةُ مُهِمَّةٌ لِلشَّبَابِ؟', en: 'Is sport important for young people?', start: 'نَعَمْ، لِأَنَّهَا …', more: '… وَتُعَلِّمُ …' },
  ],
  card: {
    title: 'Role-play card — explaining a sport to a visitor', ar: 'أَشْرَحُ رِيَاضَةً', you: 'a team member', them: 'a visiting student from abroad',
    tasks: [
      { ex: 'مَا هٰذِهِ الرِّيَاضَةُ؟', task: 'Name + team size.', plan: 'الرِّيَاضَةُ ← هٰذِهِ … ، وَفِي كُلِّ فَرِيقٍ …', model: 'هٰذِهِ كُرَةُ السَّلَّةِ، وَفِي كُلِّ فَرِيقٍ خَمْسَةُ لَاعِبِينَ.', modelEn: 'This is basketball, and each team has five players.' },
      { ex: 'مَا القَوَاعِدُ؟', task: 'Two rules.', plan: 'القَوَاعِدُ ← يَجِبُ عَلَى اللَّاعِبِ أَنْ … وَمَمْنُوعٌ أَنْ …', model: 'يَجِبُ عَلَى اللَّاعِبِ أَنْ يَنُطَّ الكُرَةَ، وَمَمْنُوعٌ أَنْ يَمْشِيَ بِهَا.', modelEn: 'The player must bounce the ball, and it is forbidden to walk with it.' },
      { ex: 'وَكَيْفَ كَانَتْ مُبَارَاتُكُمُ الأَخِيرَةُ؟', task: 'A past result.', plan: '', model: 'فُزْنَا عَلَى مَدْرَسَةِ النُّورِ بِنَتِيجَةِ خَمْسِينَ لِأَرْبَعِينَ!', modelEn: 'We beat Al-Nour School fifty to forty!' },
      { unexpected: true, ex: 'مَنْ تُعْجَبُ بِهِ مِنَ اللَّاعِبِينَ؟', task: 'Admire + reason.', plan: '', model: 'أُعْجَبُ بِقَائِدِ فَرِيقِنَا، لِأَنَّهُ يُشَجِّعُنَا دَائِمًا حَتَّى عِنْدَمَا نَخْسَرُ.', modelEn: 'I admire our captain, because he always encourages us, even when we lose.' },
    ],
    girl: 'to a girl: تُعْجَبِينَ · مُبَارَاتُكُنَّ · قَائِدَةِ فَرِيقِنَا لِأَنَّهَا تُشَجِّعُنَا',
    notes: 'fāza ʿalā + team · fāza bi- + title · mamnūʿun an + -a.',
  },
  talk: {
    title: 'One minute: an athlete I admire', ar: 'رِيَاضِيٌّ أُعْجَبُ بِهِ',
    text: 'Talk for one minute about an athlete: who, which sport, what they won, and why you admire them.',
    routes: {
      core: 'Who + sport + أُعْجَبُ بِ… لِأَنَّ …',
      develop: 'Add two results (فَازَ بِ… / فَازَ عَلَى …).',
      stretch: 'Add a comparison with another athlete and what you learn from them.',
    },
  },
  builder: [
    { en: 'Egypt won the championship.', cols: [['فَازَتْ', 'فَازَ'], ['مِصْرُ', 'مِصْرَ'], ['بِالبُطُولَةِ.', 'عَلَى البُطُولَةِ.']], key: [0, 0, 0], why: 'Win a title = فَازَ بِ…; مِصْرُ (f.) → فَازَتْ.' },
    { en: 'Our team beat their team.', cols: [['فَازَ فَرِيقُنَا', 'فَازَتْ فَرِيقُنَا'], ['عَلَى', 'بِ'], ['فَرِيقِهِمْ.', 'فَرِيقُهُمْ.']], key: [0, 0, 0], why: 'Beat a team = فَازَ عَلَى + genitive.' },
    { en: 'It is forbidden to touch the ball with your hand.', cols: [['مَمْنُوعٌ', 'مَمْنُوعًا'], ['أَنْ تَلْمِسَ الكُرَةَ', 'أَنْ تَلْمِسُ الكُرَةَ'], ['بِيَدِكَ.', 'بِيَدُكَ.']], key: [0, 0, 0], why: 'مَمْنُوعٌ أَنْ + -a; بِ + genitive.' },
  ],
  errors: [
    { wrong: 'فَازَ الفَرِيقُ بِالفَرِيقِ الآخَرِ.', hint: 'Win a title or beat a team?', right: 'فَازَ الفَرِيقُ عَلَى الفَرِيقِ الآخَرِ.', why: 'Beat → فَازَ عَلَى.' },
    { wrong: 'أُعْجَبُ مُحَمَّدَ صَلَاحٍ.', hint: 'Missing preposition.', right: 'أُعْجَبُ بِمُحَمَّدِ صَلَاحٍ.', why: 'أُعْجَبُ بِ + genitive.' },
    { wrong: 'خَسِرَتْ الفَرِيقُ المُبَارَاةَ.', hint: 'فَرِيقٌ is …', right: 'خَسِرَ الفَرِيقُ المُبَارَاةَ.', why: 'Masculine subject → خَسِرَ.' },
  ],
  task: {
    title: 'A profile of a famous athlete', ar: 'رِيَاضِيٌّ مَشْهُورٌ',
    text: 'Write a profile (about 60–80 words) of a famous athlete (male or female) for a sports blog. Include: • who they are and their sport • two results (فَازَ بِ… / فَازَ عَلَى …) • one rule of their sport • why you admire them (أُعْجَبُ بِ… لِأَنَّ …) • what young people can learn from them.',
    phrases: [['… لَاعِبٌ / لَاعِبَةٌ مَشْهُورٌ / مَشْهُورَةٌ', '… is a famous player'], ['فَازَ / فَازَتْ بِ… · فَازَ / فَازَتْ عَلَى …', 'won … · beat …'], ['يَجِبُ عَلَى اللَّاعِبِ أَنْ …', 'the player must …'], ['أُعْجَبُ بِهِ / بِهَا لِأَنَّ …', 'I admire him / her because …']],
    coreFrames: [
      { ar: '______ لَاعِبٌ / لَاعِبَةٌ ______ مَشْهُورٌ / مَشْهُورَةٌ مِنْ ______ .', en: '… is a famous … player from …' },
      { ar: 'فَازَ / فَازَتْ بِ______ فِي ______ .', en: 'He / she won … in …' },
      { ar: 'فِي هٰذِهِ الرِّيَاضَةِ يَجِبُ عَلَى اللَّاعِبِ أَنْ ______ .', en: 'In this sport the player must …' },
      { ar: 'أُعْجَبُ بِهِ / بِهَا لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I admire him / her because …' },
    ],
    developFrames: [
      { ar: 'فِي ______ فَازَ / فَازَتْ عَلَى ______ بِنَتِيجَةِ ______ .', en: 'In … he / she beat … with a score of …' },
      { ar: 'يَتَعَلَّمُ الشَّبَابُ مِنْهُ / مِنْهَا أَنَّ ______ .', en: 'Young people learn from him / her that …' },
    ],
    bank: ['فَرِيقٌ · مُبَارَاةٌ', 'لَاعِبٌ · لَاعِبَةٌ', 'فَازَ بِ…', 'فَازَ عَلَى', 'خَسِرَ · تَعَادَلَ', 'بِنَتِيجَةِ …', 'مَمْنُوعٌ أَنْ', 'أُعْجَبُ بِ…'],
    model: {
      text: 'رُقَيَّةُ لَاعِبَةُ تِنِسٍ مَشْهُورَةٌ مِنْ مِصْرَ. بَدَأَتْ تَلْعَبُ وَهِيَ فِي السَّادِسَةِ مِنْ عُمُرِهَا. فِي العَامِ المَاضِي فَازَتْ بِبُطُولَةٍ أَفْرِيقِيَّةٍ كَبِيرَةٍ، وَفَازَتْ عَلَى بَطَلَةِ العَالَمِ فِي مُبَارَاةٍ صَعْبَةٍ. فِي التِّنِسِ يَجِبُ عَلَى اللَّاعِبِ أَنْ يُرْسِلَ الكُرَةَ فَوْقَ الشَّبَكَةِ، وَمَمْنُوعٌ أَنْ يَلْمِسَهَا بِيَدِهِ. أُعْجَبُ بِهَا كَثِيرًا، لِأَنَّهَا تَتَدَرَّبُ كُلَّ يَوْمٍ وَلَا تَسْتَسْلِمُ أَبَدًا. يَتَعَلَّمُ الشَّبَابُ مِنْهَا أَنَّ النَّجَاحَ يَحْتَاجُ إِلَى الصَّبْرِ.',
      en: '“Ruqayya is a famous tennis player from Egypt. She started playing when she was six. Last year she won a big African championship, and she beat the world champion in a hard match. In tennis the player must send the ball over the net, and it is forbidden to touch it with the hand. I admire her a lot, because she trains every day and never gives up. Young people learn from her that success needs patience.”',
      find: ['فَازَتْ بِبُطُولَةٍ', 'وَفَازَتْ عَلَى', 'وَمَمْنُوعٌ أَنْ', 'أُعْجَبُ بِهَا'],
    },
  },
  checkCore: 'report results with فَازَ بِ… / فَازَ عَلَى … correctly?',
  checkDevelop: 'state a rule with أَنْ + -a and explain why you admire the athlete?',
});
