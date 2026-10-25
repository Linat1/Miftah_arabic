'use strict';
/* Guided Practice Rooms · TB-L02 · Family, Friends and Relationships. New tasks. Teacher-made. */
const XP = require('./xp-b-l02');

const base = { topic: 'B', n: 2, short: 'Family, Friends and Relationships', arShort: 'العَائِلَةُ وَالأَصْدِقَاءُ', fileTitle: 'Family_Friends_and_Relationships', title: 'Family, Friends and Relationships', icon: 'FaPeopleRoof', grammar: 'possessive endings (akhī, ukhtuhā); iḍāfa (ibnu ʿammī); the dual and plural (ukhtāni, ikhwa); attafiqu maʿa / atashājaru maʿa' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up, the answer ladder, two new role plays (a family-tree project, a friendship problem with a school counsellor), a topic conversation with A-R-E-T, and a one-minute talk about someone important to them.',
  words: XP.speak.words,
  words1: { title: 'My family', ar: 'عَائِلَتِي' },
  words2: { title: 'Friends and getting on', ar: 'الأَصْدِقَاءُ وَالعَلَاقَاتُ' },
  ladder: {
    q: 'مَعَ مَنْ تَتَّفِقُ أَكْثَرَ فِي عَائِلَتِكَ؟', qEn: 'Who do you get on with best in your family?',
    rungs: [
      { ar: 'أَتَّفِقُ أَكْثَرَ مَعَ أُخْتِي الكُبْرَى.', en: 'I get on best with my older sister.' },
      { ar: 'أَتَّفِقُ أَكْثَرَ مَعَ أُخْتِي الكُبْرَى، لِأَنَّهَا تَسْمَعُنِي دَائِمًا.', en: '… because she always listens to me.' },
      { ar: '… مَثَلًا نَخْرُجُ مَعًا كُلَّ يَوْمِ سَبْتٍ، وَنَتَكَلَّمُ عَنْ كُلِّ شَيْءٍ.', en: '… for example we go out together every Saturday and talk about everything.' },
      { ar: '… وَعِنْدَمَا كُنَّا صَغِيرَتَيْنِ كُنَّا نَتَشَاجَرُ كَثِيرًا، أَمَّا الآنَ فَهِيَ أَعَزُّ صَدِيقَاتِي!', en: '… when we were little we argued a lot, but now she is my best friend!' },
    ],
  },
  ladderQs: [
    { q: 'كَمْ شَخْصًا فِي عَائِلَتِكَ؟', l1: 'فِي عَائِلَتِي … أَشْخَاصٍ', l2: '… وَأَنَا الأَكْبَرُ / الأَصْغَرُ …', l3: '… وَعِنْدِي …' },
    { q: 'صِفْ أَعَزَّ أَصْدِقَائِكَ.', l1: 'أَعَزُّ أَصْدِقَائِي …', l2: '… لِأَنَّهُ …', l3: '… تَعَرَّفْتُ عَلَيْهِ …' },
    { q: 'مَعَ مَنْ تَتَشَاجَرُ أَحْيَانًا؟', l1: 'أَتَشَاجَرُ أَحْيَانًا مَعَ …', l2: '… لِأَنَّ …', l3: '… آخِرَ مَرَّةٍ …' },
    { q: 'هَلْ تَزُورُ أَقَارِبَكَ كَثِيرًا؟', l1: 'نَعَمْ / لَا، …', l2: '… لِأَنَّهُمْ …', l3: '… وَفِي العِيدِ سَوْفَ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a family-tree project with a classmate', title: 'Role play 1 — My family tree', ar: 'شَجَرَةُ عَائِلَتِي', you: 'a student presenting your family tree', them: 'a classmate asking questions',
      tasks: [
        { ex: 'كَمْ أَخًا وَأُخْتًا عِنْدَكَ؟', task: 'Say how many brothers and sisters you have.', plan: 'كَمْ ← عِنْدِي … وَ…', model: 'عِنْدِي أَخٌ وَاحِدٌ وَأُخْتَانِ.', modelEn: 'I have one brother and two sisters.' },
        { ex: 'مَنْ هٰذَا فِي الصُّورَةِ؟', task: 'Say who the person is (a relative).', plan: 'مَنْ ← هٰذَا … ؛ هُوَ ابْنُ …', model: 'هٰذَا ابْنُ عَمِّي يُوسُفُ.', modelEn: 'This is my cousin Yusuf (my paternal uncle’s son).' },
        { ex: 'كَمْ عُمْرُهُ؟', task: 'Say his age.', plan: 'كَمْ ← عُمْرُهُ … سَنَةً', model: 'عُمْرُهُ سَبْعَ عَشْرَةَ سَنَةً.', modelEn: 'He is seventeen.' },
        { ex: 'هَلْ هُوَ قَرِيبٌ مِنْكَ؟', task: 'Say if you are close, with a reason.', plan: 'هَلْ ← نَعَمْ، لِأَنَّ …', model: 'نَعَمْ، لِأَنَّنَا نَلْعَبُ كُرَةَ القَدَمِ مَعًا.', modelEn: 'Yes, because we play football together.' },
        { unexpected: true, ex: 'وَأَيْنَ يَسْكُنُ جَدُّكَ وَجَدَّتُكَ؟', task: 'Answer the unexpected question.', plan: 'أَيْنَ ← يَسْكُنَانِ فِي …', model: 'يَسْكُنَانِ فِي مَدِينَةٍ صَغِيرَةٍ فِي الأُرْدُنِّ.', modelEn: 'They live in a small town in Jordan.' },
      ],
      girl: 'عِنْدَكِ · مِنْكِ · جَدُّكِ وَجَدَّتُكِ',
      notes: 'Language: the dual (ukhtāni, yaskunāni) · iḍāfa ibnu ʿammī · ʿumruhu + age · li-annanā + present.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a meeting with the school counsellor', title: 'Role play 2 — A problem with a friend', ar: 'مُشْكِلَةٌ مَعَ صَدِيقٍ', you: 'a student who had an argument', them: 'the school counsellor',
      tasks: [
        { ex: 'تَفَضَّلْ، مَاذَا حَدَثَ؟', task: 'Explain the argument (past).', model: 'تَشَاجَرْتُ مَعَ صَدِيقِي عُمَرَ أَمْسِ، لِأَنَّهُ نَشَرَ صُورَتِي عَلَى الإِنْتَرْنِتْ.', modelEn: 'I argued with my friend Omar yesterday, because he posted my photo online.' },
        { ex: 'كَيْفَ كَانَتْ عَلَاقَتُكُمَا قَبْلَ ذٰلِكَ؟', task: 'Describe the friendship before.', model: 'كُنَّا أَعَزَّ صَدِيقَيْنِ مُنْذُ المَدْرَسَةِ الابْتِدَائِيَّةِ، وَكُنَّا نَقْضِي كُلَّ يَوْمٍ مَعًا.', modelEn: 'We had been best friends since primary school, and we spent every day together.' },
        { ex: 'كَيْفَ تَشْعُرُ الآنَ؟', task: 'Say how you feel and why.', model: 'أَشْعُرُ بِالحُزْنِ وَالغَضَبِ، لِأَنِّي لَمْ أُرِدْ أَنْ يَرَى الجَمِيعُ تِلْكَ الصُّورَةَ.', modelEn: 'I feel sad and angry, because I did not want everyone to see that photo.' },
        { ex: 'رُبَّمَا يَجِبُ أَنْ تَتَكَلَّمَ مَعَهُ.', task: 'ASK for advice.', model: 'وَمَاذَا يَجِبُ أَنْ أَقُولَ لَهُ فِي رَأْيِكَ؟', modelEn: 'And what should I say to him, in your opinion?' },
        { unexpected: true, ex: 'لَوْ كُنْتَ مَكَانَ عُمَرَ، مَاذَا تَفْعَلُ؟', task: 'Answer the unexpected question (law … la-).', model: 'لَوْ كُنْتُ مَكَانَهُ، لَحَذَفْتُ الصُّورَةَ فَوْرًا، وَلَاعْتَذَرْتُ أَمَامَ الصَّفِّ.', modelEn: 'If I were him, I would delete the photo at once and apologise in front of the class.' },
      ],
      girl: 'تَفَضَّلِي · عَلَاقَتُكُمَا · تَشْعُرِينَ · تَتَكَلَّمِي · كُنْتِ',
      notes: 'Language: tashājartu maʿa · kunnā + present (used to) · feelings + li-annī · yajibu an aqūla · law … la- (Stretch).',
    },
  ],
  convAr: 'عَائِلَتِي وَأَصْدِقَائِي',
  conv: [
    { route: 'Core', q: 'مَنْ فِي عَائِلَتِكَ؟', en: 'Who is in your family?', push: 'كَمْ عُمْرُهُمْ؟' },
    { route: 'Core', q: 'مَا اسْمُ أَعَزِّ أَصْدِقَائِكَ؟', en: 'What is your best friend’s name?', push: 'لِمَاذَا هُوَ أَعَزُّهُمْ؟' },
    { route: 'Develop', q: 'كَيْفَ تَعَرَّفْتَ عَلَى أَعَزِّ أَصْدِقَائِكَ؟', en: 'How did you meet your best friend?', push: 'مَتَى؟' },
    { route: 'Develop', q: 'مَاذَا تَفْعَلُ مَعَ عَائِلَتِكَ فِي نِهَايَةِ الأُسْبُوعِ؟', en: 'What do you do with your family at the weekend?', push: 'وَالأُسْبُوعَ المَاضِي؟' },
    { route: 'Stretch', q: 'هَلِ الأَصْدِقَاءُ أَهَمُّ مِنَ العَائِلَةِ لِلشَّبَابِ؟', en: 'Are friends more important than family for young people?', push: 'لِمَاذَا؟' },
    { route: 'Stretch', q: 'كَيْفَ تَتَغَيَّرُ العَائِلَاتُ فِي عَصْرِنَا؟', en: 'How are families changing today?', push: 'وَهَلْ هٰذَا جَيِّدٌ؟' },
  ],
  convModels: [
    { q: 'كَيْفَ تَعَرَّفْتَ عَلَى أَعَزِّ أَصْدِقَائِكَ؟', model: 'تَعَرَّفْتُ عَلَيْهِ فِي أَوَّلِ يَوْمٍ فِي المَدْرَسَةِ الثَّانَوِيَّةِ، لِأَنَّهُ جَلَسَ بِجَانِبِي؛ نَحْنُ نَلْعَبُ فِي الفَرِيقِ نَفْسِهِ، وَفِي الصَّيْفِ سَنُسَافِرُ مَعًا إِلَى مُخَيَّمٍ.', modelEn: 'A: on my first day at secondary school · R: he sat next to me · E: same team · T: in the summer we’ll go to a camp together.' },
    { q: 'مَاذَا تَفْعَلُ مَعَ عَائِلَتِكَ فِي نِهَايَةِ الأُسْبُوعِ؟', model: 'نَأْكُلُ الغَدَاءَ عِنْدَ جَدَّتِي كُلَّ يَوْمِ أَحَدٍ، لِأَنَّهَا تُحِبُّ أَنْ تَجْمَعَ العَائِلَةَ؛ فِي الأُسْبُوعِ المَاضِي طَبَخَتْ لَنَا المَقْلُوبَةَ، وَلَعِبْنَا مَعًا بَعْدَ الغَدَاءِ.', modelEn: 'A: Sunday lunch at grandma’s · R: she likes to gather the family · E/T: last week she cooked maqluba and we played games after lunch.' },
    { q: 'هَلِ الأَصْدِقَاءُ أَهَمُّ مِنَ العَائِلَةِ لِلشَّبَابِ؟', model: 'صَحِيحٌ أَنَّ الشَّبَابَ يَقْضُونَ وَقْتًا أَطْوَلَ مَعَ أَصْدِقَائِهِمْ، غَيْرَ أَنَّ العَائِلَةَ تَبْقَى مَعَنَا دَائِمًا؛ عِنْدَمَا كُنْتُ مَرِيضًا، كَانَتْ أُمِّي بِجَانِبِي لَيْلًا وَنَهَارًا.', modelEn: 'Concession: young people spend more time with friends, but family stays with us forever · E: when I was ill, my mum was by my side day and night.' },
  ],
  talk: {
    title: 'One minute: someone important to me', ar: 'شَخْصٌ مُهِمٌّ فِي حَيَاتِي',
    text: 'Talk for one minute about someone important to you (family or friend): who they are, what they are like, what you do together, a memory with them — and why they matter.',
    routes: {
      core: '30 seconds: who, age, two adjectives, one thing you do together.',
      develop: '60 seconds: add a memory (past) and a reason why they matter.',
      stretch: '90 seconds: add how your relationship has changed (كُنَّا … أَمَّا الآنَ …) and an opinion.',
    },
    phrases: [['أُرِيدُ أَنْ أَتَكَلَّمَ عَنْ …', 'I want to talk about …'], ['هُوَ / هِيَ … وَ…', 'he / she is … and …'], ['أَتَذَكَّرُ عِنْدَمَا …', 'I remember when …'], ['هُوَ مُهِمٌّ لِي لِأَنَّ …', 'he is important to me because …']],
  },
  checkCore: 'named family members correctly (أَخِي · أُخْتِي · ابْنُ عَمِّي)',
  checkDevelop: 'used the dual or plural (أُخْتَانِ · إِخْوَةٌ) and أَتَّفِقُ مَعَ',
};

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up, decoding a new Q2 task (a new baby in the family), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Family day at school: registration', ar: 'يَوْمُ العَائِلَةِ فِي المَدْرَسَةِ: التَّسْجِيلُ',
    fields: [
      { core: true, ar: 'اسْمُ الطَّالِبِ', en: 'Student’s name', tip: 'First name + family name.' },
      { core: true, ar: 'عَدَدُ أَفْرَادِ العَائِلَةِ', en: 'Number of family members', tip: 'خَمْسَةُ أَفْرَادٍ' },
      { core: true, ar: 'مَنْ سَيَأْتِي؟', en: 'Who will come?', tip: 'أُمِّي وَأَخِي الصَّغِيرُ' },
      { core: true, ar: 'عُمْرُ أَصْغَرِ طِفْلٍ', en: 'Age of the youngest child', tip: 'ثَلَاثُ سَنَوَاتٍ' },
      { core: true, ar: 'نَشَاطٌ تُحِبُّهُ العَائِلَةُ', en: 'An activity the family enjoys', tip: 'الطَّبْخُ · الرِّيَاضَةُ' },
      { ar: 'جُمْلَةٌ: صِفْ عَائِلَتَكَ', en: 'ONE sentence: describe your family', tip: 'عَائِلَتِي … وَنَحْنُ …' },
    ],
  },
  Q2: {
    title: 'Question 2: a new baby in the family', ar: 'طِفْلٌ جَدِيدٌ فِي العَائِلَةِ',
    task: 'A new baby has been born in your family. Write an email in Arabic to your friend of about 80–90 words. You must include: • who the baby is, when he or she was born, and the name • how your family celebrated • how your relationships in the family have changed • what you will do with the baby when he or she is older.',
    phrases: [['وُلِدَ / وُلِدَتْ … يَوْمَ …', 'he / she was born on …'], ['احْتَفَلْنَا بِـ …', 'we celebrated …'], ['أَصْبَحْتُ … لِذٰلِكَ …', 'I have become … so …'], ['عِنْدَمَا يَكْبَرُ سَـ …', 'when he grows up I will …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنْ طِفْلٍ جَدِيدٍ فِي العَائِلَةِ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about a new baby in the family (80–90 words).'],
      ['1', 'مَنِ الطِّفْلُ؟ وَمَتَى وُلِدَ؟ وَمَا اسْمُهُ؟', 'Who, when born, the name'],
      ['2', 'كَيْفَ احْتَفَلَتْ عَائِلَتُكَ؟', 'How the family celebrated'],
      ['3', 'كَيْفَ تَغَيَّرَتِ العَلَاقَاتُ فِي العَائِلَةِ؟', 'How family relationships have changed'],
      ['4', 'مَاذَا سَتَفْعَلُ مَعَهُ عِنْدَمَا يَكْبَرُ؟', 'What you will do with the baby later'],
    ],
    decode: ['an email to a FRIEND → informal greeting and closing', 'مَنْ · مَتَى وُلِدَ → PAST (وُلِدَ / وُلِدَتْ) + a date', 'كَيْفَ احْتَفَلَتْ → PAST (we): احْتَفَلْنَا', 'كَيْفَ تَغَيَّرَتْ → PAST change → PRESENT now (كُنْتُ … أَمَّا الآنَ …)', 'سَتَفْعَلُ → FUTURE (sa-)'],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ ، عِنْدِي خَبَرٌ سَعِيدٌ!', en: 'Hello …, I have happy news!' },
      { ar: 'وُلِدَ ابْنُ ______ يَوْمَ ______ ، وَاسْمُهُ ______ .', en: '1 · My …’s son was born on …, and his name is …' },
      { ar: 'احْتَفَلْنَا فِي بَيْتِ ______ ، وَأَكَلْنَا ______ .', en: '2 · We celebrated at …’s house, and ate …' },
      { ar: 'الآنَ أَنَا ______ ، وَأُسَاعِدُ ______ .', en: '3 · Now I am …, and I help …' },
      { ar: 'عِنْدَمَا يَكْبَرُ سَأُعَلِّمُهُ ______ .', en: '4 · When he grows up I will teach him …' },
    ],
    developFrames: [
      { ar: 'وُلِدَتْ بِنْتُ خَالَتِي فِي ______ ، وَسَمَّوْهَا ______ لِأَنَّ ______ .', en: '1 · My cousin was born in …, and they named her … because …' },
      { ar: 'اجْتَمَعَتِ العَائِلَةُ كُلُّهَا، وَ ______ .', en: '2 · The whole family gathered, and …' },
      { ar: 'كُنْتُ ______ ، أَمَّا الآنَ فَـأَنَا ______ .', en: '3 · I used to be …, but now I am …' },
      { ar: 'سَأَلْعَبُ مَعَهَا ______ ، وَسَأَحْكِي لَهَا ______ .', en: '4 · I will play … with her, and tell her …' },
    ],
    bank: ['وُلِدَ · وُلِدَتْ', 'طِفْلٌ · طِفْلَةٌ', 'ابْنُ عَمِّي · بِنْتُ خَالَتِي', 'احْتَفَلْنَا', 'اجْتَمَعَتِ العَائِلَةُ', 'أَصْبَحْتُ', 'قَرِيبٌ مِنْ', 'سَأُعَلِّمُهُ'],
    model: {
      text: `مَرْحَبًا يَا رَامِي،
عِنْدِي خَبَرٌ سَعِيدٌ! وُلِدَ أَخِي الصَّغِيرُ يَوْمَ الخَمِيسِ المَاضِي فِي المُسْتَشْفَى، وَسَمَّاهُ أَبِي إِبْرَاهِيمَ، عَلَى اسْمِ جَدِّي. احْتَفَلْنَا يَوْمَ الجُمُعَةِ فِي بَيْتِنَا، وَجَاءَ أَعْمَامِي وَعَمَّاتِي وَأَبْنَاؤُهُمْ، وَأَكَلْنَا الحَلَوِيَّاتِ، وَوَزَّعْنَا الهَدَايَا عَلَى الجِيرَانِ. قَبْلَ وِلَادَتِهِ كُنْتُ الأَصْغَرَ فِي العَائِلَةِ، وَكَانَ الجَمِيعُ يَهْتَمُّونَ بِي، أَمَّا الآنَ فَأَصْبَحْتُ أَخًا كَبِيرًا، وَأُسَاعِدُ أُمِّي كُلَّ يَوْمٍ فِي البَيْتِ، لِأَنَّهَا مُتْعَبَةٌ قَلِيلًا وَلَا تَنَامُ جَيِّدًا. عِنْدَمَا يَكْبَرُ إِبْرَاهِيمُ، سَأُعَلِّمُهُ كُرَةَ القَدَمِ، وَسَنَذْهَبُ مَعًا إِلَى المُبَارَيَاتِ. هَلْ عِنْدَكَ إِخْوَةٌ صِغَارٌ؟
إِلَى اللِّقَاءِ،
مُصْطَفَى`,
      en: '“Hi Rami, I have happy news! My little brother was born last Thursday in hospital, and my dad named him Ibrahim, after my grandfather. We celebrated on Friday at our house: my uncles, aunts and cousins came, we ate sweets and gave presents to the neighbours. Before he was born I was the youngest in the family and everyone looked after me; now I have become a big brother, and I help my mum every day, because she is a bit tired and doesn’t sleep well. When Ibrahim grows up I will teach him football, and we will go to matches together. Do you have little brothers or sisters? See you, Mustafa.”',
      find: ['وُلِدَ أَخِي الصَّغِيرُ', 'احْتَفَلْنَا يَوْمَ الجُمُعَةِ', 'كُنْتُ الأَصْغَرَ … أَمَّا الآنَ', 'سَأُعَلِّمُهُ'],
    },
  },
  upgrade: [
    { ar: 'عِنْدِي ابْنُ عَمٍّ.', en: 'I have a cousin.' },
    { ar: 'عِنْدِي ابْنُ عَمٍّ اسْمُهُ زَيْدٌ، وَعُمْرُهُ سِتَّ عَشْرَةَ سَنَةً.', en: '… called Zaid, and he is sixteen.' },
    { ar: 'أَنَا قَرِيبٌ جِدًّا مِنْ ابْنِ عَمِّي زَيْدٍ، لِأَنَّنَا فِي المَدْرَسَةِ نَفْسِهَا.', en: 'I am very close to my cousin Zaid, because we are at the same school.' },
    { ar: '… وَفِي رَأْيِي هُوَ مِثْلُ أَخٍ لِي، لٰكِنَّنَا نَتَشَاجَرُ أَحْيَانًا عَلَى الأَلْعَابِ!', en: '… in my opinion he is like a brother — but sometimes we argue over games!' },
  ],
  builder: [
    { en: 'I have two sisters.', cols: [['عِنْدِي', 'عِنْدَهُ'], ['أُخْتَانِ', 'أُخْتَيْنِ'], ['صَغِيرَتَانِ', 'صَغِيرٌ']], key: [0, 0, 0], why: 'The dual: أُخْتَانِ صَغِيرَتَانِ (subject of عِنْدِي, adjective agrees).' },
    { en: 'My uncle’s son lives in Egypt.', cols: [['ابْنُ عَمِّي', 'الابْنُ عَمِّي'], ['يَسْكُنُ', 'تَسْكُنُ'], ['فِي مِصْرَ', 'إِلَى مِصْرَ']], key: [0, 0, 0], why: 'Iḍāfa: no al- on the first word: ابْنُ عَمِّي; he → يَسْكُنُ.' },
    { en: 'I get on well with my brothers.', cols: [['أَتَّفِقُ', 'أَتَشَاجَرُ'], ['جَيِّدًا', 'قَلِيلًا'], ['مَعَ إِخْوَتِي', 'مِنْ إِخْوَتِي']], key: [0, 0, 0], why: 'Get on with = أَتَّفِقُ مَعَ.' },
  ],
  errors: [
    { wrong: 'عِنْدِي اثْنَانِ أُخْتٌ.', hint: 'How do you say “two sisters” in Arabic?', right: 'عِنْدِي أُخْتَانِ.', why: 'Two = the dual ending: أُخْتَانِ (no number word needed).' },
    { wrong: 'الابْنُ عَمِّي طَوِيلٌ.', hint: 'Look at the iḍāfa.', right: 'ابْنُ عَمِّي طَوِيلٌ.', why: 'In an iḍāfa the first word has no al-.' },
    { wrong: 'جَدِّي وَجَدَّتِي يَسْكُنُ فِي القَرْيَةِ.', hint: 'Two people → which verb form?', right: 'جَدِّي وَجَدَّتِي يَسْكُنَانِ فِي القَرْيَةِ.', why: 'Two people (after the subject) → the dual verb: يَسْكُنَانِ.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a day with my family I will never forget', ar: 'يَوْمٌ مَعَ عَائِلَتِي لَا أَنْسَاهُ',
    task: 'Full Q3 title: “Family and friends”. Today write ONLY the past paragraph: a day with your family or friends you will never forget — what happened, who was there, why it mattered and how you felt.',
    formula: [
      { ar: 'لَنْ أَنْسَى يَوْمَ زِفَافِ خَالَتِي.', en: 'T · I will never forget my aunt’s wedding day.' },
      { ar: 'اجْتَمَعَتِ العَائِلَةُ كُلُّهَا، وَرَقَصْنَا حَتَّى اللَّيْلِ.', en: 'D · The whole family gathered and we danced till night.' },
      { ar: 'كَانَ مُهِمًّا لِأَنِّي رَأَيْتُ أَقَارِبِي مِنْ كُلِّ مَكَانٍ.', en: 'R · It mattered because I saw relatives from everywhere.' },
      { ar: 'شَعَرْتُ بِالسَّعَادَةِ، وَأَتَمَنَّى أَنْ نَجْتَمِعَ أَكْثَرَ.', en: 'F · I felt happy, and I hope we meet more often.' },
    ],
    phrases: [['لَنْ أَنْسَى يَوْمَ …', 'I will never forget the day of …'], ['اجْتَمَعَتِ العَائِلَةُ فِي …', 'the family gathered at …'], ['رَأَيْتُ … لِأَوَّلِ مَرَّةٍ', 'I saw … for the first time'], ['كَانَ مُهِمًّا لِأَنَّ …', 'it mattered because …'], ['أَتَمَنَّى أَنْ …', 'I hope that …']],
    model: {
      text: 'لَنْ أَنْسَى يَوْمَ زِفَافِ خَالَتِي فِي الصَّيْفِ المَاضِي. اجْتَمَعَتِ العَائِلَةُ كُلُّهَا فِي قَاعَةٍ كَبِيرَةٍ فِي عَمَّانَ، وَجَاءَ أَقَارِبُنَا مِنْ أَمْرِيكَا وَالسُّعُودِيَّةِ وَبِرِيطَانِيَا. رَأَيْتُ أَبْنَاءَ خَالِي لِأَوَّلِ مَرَّةٍ، فَأَصْبَحْنَا أَصْدِقَاءَ بِسُرْعَةٍ، وَرَقَصْنَا مَعًا حَتَّى مُنْتَصَفِ اللَّيْلِ. كَانَ ذٰلِكَ اليَوْمُ مُهِمًّا لِأَنَّ عَائِلَتَنَا كَبِيرَةٌ لٰكِنَّهَا مُتَفَرِّقَةٌ فِي بُلْدَانٍ كَثِيرَةٍ. شَعَرْتُ بِسَعَادَةٍ كَبِيرَةٍ، وَمُنْذُ ذٰلِكَ اليَوْمِ نَتَكَلَّمُ بِالفِيدْيُو كُلَّ أُسْبُوعٍ.',
      en: 'T: I will never forget my aunt’s wedding last summer · D: the whole family gathered in a big hall in Amman, with relatives from America, Saudi Arabia and Britain; I met my cousins for the first time, we became friends quickly and danced together until midnight · R: the day mattered because our family is big but scattered across many countries · F: I felt very happy, and since that day we video-call every week.',
      find: ['لَنْ أَنْسَى يَوْمَ', 'اجْتَمَعَتِ العَائِلَةُ', 'لِأَوَّلِ مَرَّةٍ', 'كَانَ … مُهِمًّا لِأَنَّ'],
    },
  },
};
write.Q2.phrases[0] = ['وُلِدَ / وُلِدَتْ … يَوْمَ …', 'he / she was born on …'];
write.Q2.phrases[1] = ['احْتَفَلْنَا فِي …', 'we celebrated at …'];
write.Q2.phrases[3] = ['عِنْدَمَا يَكْبَرُ سَأُعَلِّمُهُ …', 'when he grows up I will teach him …'];
write.Q2.developFrames[2] = { ar: 'كُنْتُ ______ ، أَمَّا الآنَ فَأَنَا ______ .', en: '3 · I used to be …, but now I am …' };

module.exports = { speak, write };
