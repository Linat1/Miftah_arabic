'use strict';
/* Exam-practice data · TB-L11 · Topic B Speaking and Writing Workshop — personal answers developed with detail, reasons,
   comparisons and time frames; cohesion (linking words) and accuracy editing. Theme: an exchange-programme application. Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'B', n: 11, short: 'Mixed Topic B: All About Me', arShort: 'هٰذَا أَنَا', fileTitle: 'Topic_B_Speaking_and_Writing_Workshop', title: 'Topic B mixed practice — all about me', ar: 'هٰذَا أَنَا', icon: 'FaComments', grammar: 'cohesion (linking words); mixed tenses; developing answers; accuracy editing' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms on all of Topic B: develop personal answers with detail, reasons, comparisons and three time frames, and link them smoothly (lākinna, li-dhālika, ammā … fa-, bi-l-iḍāfa ilā).',
  words: [
    w(1, 'لِأَنَّ · لِذٰلِكَ', 'because · so, therefore', null, { tag: 'reason · result' }),
    w(2, 'لٰكِنَّ · غَيْرَ أَنَّ', 'but · however', null, { tag: 'contrast' }),
    w(3, 'أَمَّا … فَـ …', 'as for … (then) …', null, { tag: 'contrast' }),
    w(4, 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'in addition to that', null, { tag: 'adding' }),
    w(5, 'مَثَلًا', 'for example', null, { tag: 'example' }),
    w(6, 'فِي رَأْيِي', 'in my opinion', [['I think', 'أَعْتَقِدُ أَنَّ'], ['I feel', 'أَشْعُرُ أَنَّ']], { tag: 'opinion' }),
    w(7, 'عِنْدَمَا كُنْتُ صَغِيرًا', 'when I was small', [['f.', 'صَغِيرَةً']], { tag: 'past' }),
    w(8, 'فِي المُسْتَقْبَلِ سَـ …', 'in the future I will …', [['I hope', 'أَتَمَنَّى أَنْ'], ['I plan', 'أُخَطِّطُ لِـ']], { tag: 'future' }),
    w(9, 'أَكْثَرُ … مِنْ', 'more … than', [['better', 'أَفْضَلُ مِنْ'], ['the best', 'أَفْضَلُ …']], { tag: 'comparison' }),
    w(10, 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', 'it is true that … but …', null, { tag: 'concession' }),
    w(11, 'لَوْ … لَـ …', 'if … would …', null, { tag: 'conditional' }),
    w(12, 'أَتَأَكَّدُ مِنْ …', 'I check …', [['past', 'تَأَكَّدْتُ'], ['he', 'يَتَأَكَّدُ']], { tag: 'editing' }),
  ],
  words1: { eyebrow: 'Language bank · linking words (cohesion)', title: 'Joining your ideas', ar: 'أَدَوَاتُ الرَّبْطِ', notes: 'LANGUAGE BANK (2 min) — the glue of a top answer: li-anna (because) · li-dhālika (so) · lākinna / ghayra anna (but) · ammā … fa- (as for) · bi-l-iḍāfa ilā dhālika (also) · mathalan (for example). Aim for three different ones in every long answer.' },
  words2: { eyebrow: 'Language bank · three time frames and range', title: 'Then, now, next — and “if”', ar: 'المَاضِي وَالحَاضِرُ وَالمُسْتَقْبَلُ', notes: 'LANGUAGE BANK (2 min) — the development formula: NOW (present) + THEN (kuntu + present) + NEXT (sa- / atamannā an) + WHY (li-anna) + EXAMPLE (mathalan). Stretch adds a concession and law … la-.' },
  checkCore: 'answered with full sentences about self, family, home or hobbies',
  checkDevelop: 'used three linking words and two time frames in one answer',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a summer-camp interview', title: 'Role play A — Interview for a summer camp', ar: 'مُقَابَلَةٌ لِلْمُخَيَّمِ الصَّيْفِيِّ', you: 'an applicant', them: 'the camp leader',
      tasks: [
        { core: true, ex: 'أَهْلًا! عَرِّفْنَا بِنَفْسِكَ.', task: 'Give name, age and where you live.', help: 'اسْمِي … عُمْرِي … أَسْكُنُ …', model: 'اسْمِي عُمَرُ، وَعُمْرِي خَمْسَ عَشْرَةَ سَنَةً، وَأَسْكُنُ فِي بَرْمِنْغْهَامَ.', modelEn: 'My name is Omar, I am fifteen and I live in Birmingham.' },
        { core: true, ex: 'مَنْ فِي أُسْرَتِكَ؟', task: 'Describe your family briefly.', help: 'فِي أُسْرَتِي … أَبِي … وَأُمِّي …', model: 'فِي أُسْرَتِي خَمْسَةُ أَشْخَاصٍ؛ أَبِي مُهَنْدِسٌ، وَأُمِّي مُعَلِّمَةٌ، وَعِنْدِي أُخْتَانِ.', modelEn: 'There are five of us: my dad is an engineer, my mum a teacher, and I have two sisters.' },
        { core: true, ex: 'صِفْ شَخْصِيَّتَكَ.', task: 'Give two qualities.', help: 'أَنَا … وَ…', model: 'أَنَا اجْتِمَاعِيٌّ وَمُنَظَّمٌ، وَأُحِبُّ العَمَلَ مَعَ الآخَرِينَ.', modelEn: 'I am sociable and organised, and I like working with others.' },
        { core: true, ex: 'مَا هِوَايَاتُكَ؟', task: 'Say two hobbies and how often.', help: 'أُحِبُّ … وَأُمَارِسُ … مَرَّتَيْنِ …', model: 'أُحِبُّ السِّبَاحَةَ وَالطَّبْخَ، وَأَسْبَحُ مَرَّتَيْنِ فِي الأُسْبُوعِ.', modelEn: 'I like swimming and cooking, and I swim twice a week.' },
        { core: true, unexpected: true, ex: 'لِمَاذَا تُرِيدُ أَنْ تَأْتِيَ إِلَى المُخَيَّمِ؟', task: 'Answer the unexpected question.', help: 'لِأَنِّي أُرِيدُ أَنْ …', model: 'لِأَنِّي أُرِيدُ أَنْ أَتَعَرَّفَ عَلَى أَصْدِقَاءَ جُدُدٍ، وَأَنْ أُحَسِّنَ لُغَتِي العَرَبِيَّةَ.', modelEn: 'Because I want to make new friends and improve my Arabic.' },
      ],
      girl: 'عَرِّفِينَا بِنَفْسِكِ · أُسْرَتِكِ · شَخْصِيَّتَكِ · هِوَايَاتُكِ · تُرِيدِينَ أَنْ تَأْتِي — she answers اجْتِمَاعِيَّةٌ وَمُنَظَّمَةٌ',
      notes: 'Core: TB-L01 (identity), L02 (family), L03 (personality), L08 (hobbies) — one full sentence each. Then push for li-anna in task 5.',
    },
    {
      id: 'B', level: 'Core+', setting: 'a host-family call', title: 'Role play B — Talking to your host family', ar: 'مَعَ الأُسْرَةِ المُضِيفَةِ', you: 'an exchange student', them: 'your host parent on a video call',
      tasks: [
        { core: true, ex: 'صِفْ لَنَا بَيْتَكَ.', task: 'Describe your home with two details.', help: 'نَسْكُنُ فِي … فِيهِ … وَ…', model: 'نَسْكُنُ فِي بَيْتٍ صَغِيرٍ، فِيهِ ثَلَاثُ غُرَفِ نَوْمٍ وَحَدِيقَةٌ.', modelEn: 'We live in a small house with three bedrooms and a garden.' },
        { core: true, ex: 'هَلْ تُشَارِكُ غُرْفَتَكَ مَعَ أَحَدٍ؟', task: 'Answer with a reason.', help: 'نَعَمْ / لَا، … لِأَنَّ …', model: 'نَعَمْ، أُشَارِكُهَا مَعَ أَخِي، لِأَنَّ البَيْتَ لَيْسَ كَبِيرًا.', modelEn: 'Yes, I share it with my brother, because the house isn’t big.' },
        { ex: 'مَاذَا تُحِبُّ أَنْ تَأْكُلَ؟', task: 'Say what you like and don’t eat, politely.', help: 'أُحِبُّ … لٰكِنِّي لَا آكُلُ …', model: 'آكُلُ كُلَّ شَيْءٍ تَقْرِيبًا، لٰكِنِّي لَا آكُلُ الفُطْرَ، أَمَّا الحَلَوِيَّاتُ فَأُحِبُّهَا جِدًّا!', modelEn: 'I eat almost everything, but I don’t eat mushrooms; as for sweets, I love them!' },
        { ex: '… عِنْدَنَا ابْنٌ فِي عُمْرِكَ.', task: 'ASK two questions about him.', help: 'مَا اسْمُهُ؟ وَمَاذَا …؟', model: 'رَائِعٌ! مَا اسْمُهُ؟ وَمَاذَا يُحِبُّ أَنْ يَفْعَلَ فِي وَقْتِ فَرَاغِهِ؟', modelEn: 'Great! What’s his name? And what does he like doing in his free time?' },
        { unexpected: true, ex: 'مَاذَا سَتُحْضِرُ مَعَكَ مِنْ بِرِيطَانِيَا؟', task: 'Answer the unexpected question (future).', help: 'سَأُحْضِرُ … لِأَنَّ …', model: 'سَأُحْضِرُ لَكُمْ شَايًا إِنْجِلِيزِيًّا وَكَعْكًا اسْكُتْلَنْدِيًّا، لِأَنَّ أُمِّي تَقُولُ إِنَّهُ أَفْضَلُ هَدِيَّةٍ.', modelEn: 'I’ll bring you English tea and Scottish shortbread, because my mum says it’s the best present.' },
      ],
      girl: 'بَيْتَكِ · تُشَارِكِينَ غُرْفَتَكِ · تُحِبِّينَ · فِي عُمْرِكِ · سَتُحْضِرِينَ مَعَكِ',
      notes: 'Core+: TB-L04 (home), L05 (sharing a room, -hā), ammā … fa-, two questions about a third person (-hu), the future with li-anna.',
    },
    {
      id: 'C', level: 'Develop', setting: 'developing answers', title: 'Role play C — Say more! (developing every answer)', ar: 'تَكَلَّمْ أَكْثَرَ!', you: 'a candidate', them: 'the examiner (pushes for more)',
      tasks: [
        { ex: 'هَلْ تُحِبُّ مَدِينَتَكَ؟', task: 'Answer with NOW + WHY + EXAMPLE.', help: 'نَعَمْ، لِأَنَّ … مَثَلًا …', model: 'نَعَمْ، لِأَنَّهَا مُتَنَوِّعَةٌ؛ مَثَلًا فِي شَارِعِنَا وَحْدَهُ جِيرَانٌ مِنْ عَشَرَةِ بُلْدَانٍ.', modelEn: 'Yes, because it is diverse — in our street alone there are neighbours from ten countries.' },
        { ex: 'كَيْفَ تَغَيَّرْتَ فِي السَّنَوَاتِ الأَخِيرَةِ؟', task: 'Answer with THEN + NOW.', help: 'كُنْتُ … أَمَّا الآنَ فَـ…', model: 'كُنْتُ خَجُولًا جِدًّا، أَمَّا الآنَ فَأَتَكَلَّمُ أَمَامَ الصَّفِّ بِثِقَةٍ، لِأَنِّي انْضَمَمْتُ إِلَى نَادِي المُنَاظَرَاتِ.', modelEn: 'I used to be very shy; now I speak confidently in front of the class, because I joined the debating club.' },
        { ex: 'مَنْ أَهَمُّ شَخْصٍ فِي حَيَاتِكَ؟', task: 'Answer with a comparison and a reason.', help: '… لِأَنَّهُ … أَكْثَرُ مِنْ …', model: 'جَدِّي، لِأَنَّهُ يَفْهَمُنِي أَكْثَرَ مِنْ أَيِّ شَخْصٍ آخَرَ، وَلِذٰلِكَ أَزُورُهُ كُلَّ أُسْبُوعٍ.', modelEn: 'My grandfather, because he understands me more than anyone else, so I visit him every week.' },
        { ex: 'مَاذَا فَعَلْتَ فِي نِهَايَةِ الأُسْبُوعِ؟', task: 'Answer with a sequenced past story.', help: 'أَوَّلًا … ثُمَّ … وَأَخِيرًا …', model: 'أَوَّلًا لَعِبْتُ مُبَارَاةً، ثُمَّ زُرْتُ جَدِّي، وَأَخِيرًا شَاهَدْتُ فِيلْمًا مَعَ أُسْرَتِي.', modelEn: 'First I played a match, then visited my grandfather, and finally watched a film with my family.' },
        { unexpected: true, ex: 'وَمَا خُطَطُكَ لِلْمُسْتَقْبَلِ؟', task: 'Answer the unexpected question (future + reason).', help: 'أَتَمَنَّى أَنْ … لِأَنَّ … وَلِذٰلِكَ …', model: 'أَتَمَنَّى أَنْ أَدْرُسَ الطِّبَّ، لِأَنِّي أُحِبُّ أَنْ أُسَاعِدَ النَّاسَ، وَلِذٰلِكَ أَدْرُسُ العُلُومَ بِجِدٍّ الآنَ.', modelEn: 'I hope to study medicine because I love helping people, so I am studying science hard now.' },
      ],
      girl: 'مَدِينَتَكِ · تَغَيَّرْتِ · كُنْتُ خَجُولَةً · حَيَاتِكِ · فَعَلْتِ · خُطَطُكِ',
      notes: 'Develop: this card trains the development formula — each answer needs a reason, an example, a contrast or a sequence. The examiner may add: “لِمَاذَا؟ / مَثَلًا؟”.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a youth panel', title: 'Role play D — Being young today', ar: 'أَنْ تَكُونَ شَابًّا اليَوْمَ', you: 'a young panellist', them: 'the panel chair',
      tasks: [
        { ex: 'مَا أَصْعَبُ شَيْءٍ فِي حَيَاةِ الشَّبَابِ اليَوْمَ؟', task: 'Give a view with two reasons.', help: 'أَعْتَقِدُ أَنَّ … لِأَنَّ … بِالإِضَافَةِ إِلَى …', model: 'أَعْتَقِدُ أَنَّهُ الضَّغْطُ، لِأَنَّ الامْتِحَانَاتِ كَثِيرَةٌ، بِالإِضَافَةِ إِلَى أَنَّ وَسَائِلَ التَّوَاصُلِ تَجْعَلُنَا نُقَارِنُ أَنْفُسَنَا بِالآخَرِينَ.', modelEn: 'I think it is pressure: there are many exams, and in addition social media makes us compare ourselves with others.' },
        { ex: 'هَلْ كَانَتْ حَيَاةُ وَالِدَيْكَ أَسْهَلَ؟', task: 'Compare, with a concession.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهُمْ لَمْ يَعْرِفُوا ضَغْطَ الإِنْتَرْنِتِ، غَيْرَ أَنَّ حَيَاتَهُمْ كَانَتْ أَصْعَبَ مَادِّيًّا، فَأَبِي كَانَ يَعْمَلُ وَهُوَ طَالِبٌ.', modelEn: 'It is true they didn’t know internet pressure, but their life was harder financially — my father worked while still a student.' },
        { ex: 'مَا دَوْرُ الأُسْرَةِ فِي مُسَاعَدَةِ الشَّبَابِ؟', task: 'Give an example from your life.', help: 'فِي أُسْرَتِي مَثَلًا … فَأَسْتَطِيعُ …', model: 'فِي أُسْرَتِي مَثَلًا نَأْكُلُ العَشَاءَ مَعًا بِلَا هَوَاتِفَ، فَأَسْتَطِيعُ أَنْ أَتَحَدَّثَ عَنْ مَشَاكِلِي بِحُرِّيَّةٍ.', modelEn: 'In my family, for example, we eat dinner together without phones, so I can talk about my problems freely.' },
        { ex: 'مَا الَّذِي تَعَلَّمْتَهُ مِنْ تَجْرِبَةٍ صَعْبَةٍ؟', task: 'Tell a short story and a lesson.', help: 'عِنْدَمَا … تَعَلَّمْتُ أَنَّ …', model: 'عِنْدَمَا رَسَبْتُ فِي امْتِحَانِ السِّبَاحَةِ أَوَّلَ مَرَّةٍ، تَعَلَّمْتُ أَنَّ الفَشَلَ لَيْسَ النِّهَايَةَ، بَلْ بِدَايَةُ التَّحَسُّنِ.', modelEn: 'When I failed my swimming test the first time, I learned failure isn’t the end but the start of improvement.' },
        { unexpected: true, ex: 'لَوْ كَتَبْتَ رِسَالَةً لِنَفْسِكَ بَعْدَ عَشْرِ سَنَوَاتٍ، مَاذَا تَقُولُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ كَتَبْتُ …، لَقُلْتُ …', model: 'لَوْ كَتَبْتُ رِسَالَةً لِنَفْسِي، لَقُلْتُ لَهَا: لَا تَنْسَ أُسْرَتَكَ، وَلَا تَتْرُكْ هِوَايَاتِكَ مَهْمَا انْشَغَلْتَ.', modelEn: 'If I wrote a letter to myself, I would say: don’t forget your family, and don’t give up your hobbies however busy you get.' },
      ],
      girl: 'وَالِدَيْكِ · تَعَلَّمْتِهِ · كَتَبْتِ — and in her letter: لَا تَنْسَيْ أُسْرَتَكِ، وَلَا تَتْرُكِي هِوَايَاتِكِ',
      notes: 'Stretch: bi-l-iḍāfa ilā anna, a concession with lam + jussive, wa-huwa ṭālib (ḥāl), an example, laysa … bal, law … la- with negative imperatives and mahmā.',
      modelFoot: 'Stretch: reasons + addition, a concession, a family example, a lesson (taʿallamtu anna), law … la- — the whole Topic B toolkit.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'أَنَا', aim: 'one full sentence per question, from every part of Topic B',
      qs: [
        { q: 'صِفْ نَفْسَكَ.', en: 'Describe yourself.', start: 'أَنَا … وَشَعْرِي …', model: 'أَنَا طَوِيلَةٌ، وَشَعْرِي أَسْوَدُ، وَأَنَا مَرِحَةٌ وَنَشِيطَةٌ.', modelEn: 'I am tall with black hair, and I am cheerful and active.' },
        { q: 'مَنْ صَدِيقُكَ المُفَضَّلُ؟', en: 'Who is your best friend?', start: 'صَدِيقَتِي المُفَضَّلَةُ …', model: 'صَدِيقَتِي المُفَضَّلَةُ اسْمُهَا هِبَةُ، وَهِيَ فِي صَفِّي.', modelEn: 'My best friend is called Hiba; she is in my class.' },
        { q: 'صِفْ غُرْفَتَكَ.', en: 'Describe your room.', start: 'غُرْفَتِي … فِيهَا …', model: 'غُرْفَتِي صَغِيرَةٌ وَوَرْدِيَّةٌ، فِيهَا سَرِيرٌ وَمَكْتَبٌ.', modelEn: 'My room is small and pink, with a bed and a desk.' },
        { q: 'مَاذَا تَلْبَسِينَ فِي العِيدِ؟', en: 'What do you wear at Eid?', start: 'أَلْبَسُ …', model: 'أَلْبَسُ فُسْتَانًا جَدِيدًا أَخْضَرَ.', modelEn: 'I wear a new green dress.' },
        { q: 'مَاذَا تَفْعَلِينَ فِي وَقْتِ فَرَاغِكِ؟', en: 'What do you do in your free time?', start: 'أَقْرَأُ … / أَلْعَبُ …', model: 'أَقْرَأُ الرِّوَايَاتِ، وَأَلْعَبُ كُرَةَ الطَّائِرَةِ يَوْمَ السَّبْتِ.', modelEn: 'I read novels, and play volleyball on Saturdays.' },
      ],
      foot: 'Core: one full sentence for every question (models here are a girl’s answers). If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + correct agreement = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'حَيَاتِي', aim: 'two or three linked sentences in two time frames',
      qs: [
        { q: 'كَيْفَ تَعَرَّفْتَ عَلَى صَدِيقِكَ المُفَضَّلِ؟', en: 'How did you meet your best friend?', start: 'تَعَرَّفْتُ عَلَيْهِ عِنْدَمَا … وَمُنْذُ ذٰلِكَ …', model: 'تَعَرَّفْتُ عَلَيْهِ عِنْدَمَا جَلَسْنَا مَعًا فِي الصَّفِّ الأَوَّلِ، وَمُنْذُ ذٰلِكَ اليَوْمِ لَا نَفْتَرِقُ.', modelEn: 'I met him when we sat together in Year 1, and since that day we have been inseparable.' },
        { q: 'هَلْ تُشْبِهُ أَحَدًا فِي أُسْرَتِكَ؟', en: 'Do you look like anyone in your family?', start: 'أُشْبِهُ … فِي … أَمَّا شَخْصِيَّتِي فَـ…', model: 'أُشْبِهُ أُمِّي فِي شَكْلِي، أَمَّا شَخْصِيَّتِي فَتُشْبِهُ شَخْصِيَّةَ أَبِي، لِأَنِّي هَادِئٌ مِثْلَهُ.', modelEn: 'I look like my mum, but my personality is like my dad’s, because I am calm like him.' },
        { q: 'مَا الَّذِي تُرِيدُ أَنْ تُغَيِّرَهُ فِي بَيْتِكَ؟', en: 'What would you change in your home?', start: 'أُرِيدُ أَنْ … لِأَنَّ … لِذٰلِكَ …', model: 'أُرِيدُ غُرْفَةً خَاصَّةً بِي، لِأَنِّي أَدْرُسُ لِلِامْتِحَانَاتِ، وَأَخِي يُحِبُّ المُوسِيقَى الصَّاخِبَةَ!', modelEn: 'I want my own room, because I’m studying for exams and my brother loves loud music!' },
        { q: 'صِفْ أَجْمَلَ هَدِيَّةٍ أَخَذْتَهَا.', en: 'Describe the best present you have received.', start: 'أَجْمَلُ هَدِيَّةٍ … كَانَتْ … لِأَنَّ …', model: 'أَجْمَلُ هَدِيَّةٍ كَانَتْ دَرَّاجَةً حَمْرَاءَ مِنْ جَدِّي، لِأَنَّهُ اشْتَرَاهَا بِمَالٍ وَفَّرَهُ شُهُورًا.', modelEn: 'The best present was a red bike from my grandfather, because he bought it with money he saved for months.' },
        { q: 'كَيْفَ سَتَقْضِي العُطْلَةَ القَادِمَةَ؟', en: 'How will you spend the next holiday?', start: 'أَوَّلًا سَـ… ثُمَّ … بِالإِضَافَةِ إِلَى ذٰلِكَ …', model: 'أَوَّلًا سَأُرَاجِعُ دُرُوسِي، ثُمَّ سَنَزُورُ خَالَتِي، وَبِالإِضَافَةِ إِلَى ذٰلِكَ سَأَبْدَأُ دَرْسَ طَبْخٍ.', modelEn: 'First I’ll revise, then we’ll visit my aunt, and in addition I’ll start a cooking class.' },
      ],
      foot: 'Develop: link every answer — ʿindamā, mundhu, ammā … fa-, li-anna, li-dhālika, bi-l-iḍāfa ilā dhālika.',
      modelFoot: 'Two time frames + three linking words = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الشَّبَابُ وَالحَيَاةُ', aim: 'a developed answer: opinion, comparison, concession and a conditional',
      qs: [
        { q: 'هَلِ الأَصْدِقَاءُ أَهَمُّ مِنَ الأُسْرَةِ فِي سِنِّكَ؟', en: 'Are friends more important than family at your age?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّنَا نَقْضِي وَقْتًا أَطْوَلَ مَعَ الأَصْدِقَاءِ، غَيْرَ أَنَّ الأُسْرَةَ هِيَ الَّتِي تَبْقَى عِنْدَمَا تَصْعُبُ الأُمُورُ.', modelEn: 'It is true we spend more time with friends, but family is what remains when things get hard.' },
        { q: 'هَلْ تُعَبِّرُ مَلَابِسُنَا وَغُرَفُنَا عَنْ هُوِيَّتِنَا؟', en: 'Do our clothes and rooms express our identity?', start: 'إِلَى حَدٍّ مَا؛ فَمَثَلًا …', model: 'إِلَى حَدٍّ مَا؛ فَغُرْفَتِي مَثَلًا مَلِيئَةٌ بِالكُتُبِ وَالخَرَائِطِ، وَهٰذَا يَقُولُ عَنِّي إِنِّي أَحْلُمُ بِالسَّفَرِ.', modelEn: 'To some extent — my room, for example, is full of books and maps, which says I dream of travelling.' },
        { q: 'كَيْفَ تَخْتَلِفُ هِوَايَاتُ جِيلِكَ عَنْ هِوَايَاتِ جِيلِ وَالِدَيْكَ؟', en: 'How do your generation’s hobbies differ from your parents’?', start: 'كَانَ وَالِدَايَ … أَمَّا جِيلُنَا فَـ…', model: 'كَانَ وَالِدَايَ يَلْعَبَانِ فِي الشَّارِعِ وَيَقْرَآنِ المَجَلَّاتِ، أَمَّا جِيلُنَا فَيَصْنَعُ الفِيدْيُوهَاتِ وَيَلْعَبُ مَعَ أَصْدِقَاءَ فِي بُلْدَانٍ أُخْرَى.', modelEn: 'My parents played in the street and read magazines; our generation makes videos and plays with friends in other countries.' },
        { q: 'مَا التَّجْرِبَةُ الَّتِي غَيَّرَتْ شَخْصِيَّتَكَ؟', en: 'What experience changed your personality?', start: 'عِنْدَمَا … تَغَيَّرْتُ، فَأَصْبَحْتُ …', model: 'عِنْدَمَا تَطَوَّعْتُ فِي دَارٍ لِلْمُسِنِّينَ، تَغَيَّرَتْ نَظْرَتِي إِلَى الحَيَاةِ، فَأَصْبَحْتُ أَصْبَرَ وَأَكْثَرَ امْتِنَانًا.', modelEn: 'When I volunteered in a care home, my view of life changed and I became more patient and grateful.' },
        { q: 'لَوِ اسْتَطَعْتَ أَنْ تَعِيشَ يَوْمًا فِي حَيَاةِ شَخْصٍ آخَرَ، مَنْ تَخْتَارُ؟', en: 'If you could live a day in someone else’s life, who would you choose?', start: 'لَوِ اسْتَطَعْتُ …، لَاخْتَرْتُ … لِكَيْ …', model: 'لَوِ اسْتَطَعْتُ، لَاخْتَرْتُ يَوْمًا فِي حَيَاةِ أُمِّي، لِكَيْ أَفْهَمَ كَيْفَ تَعْمَلُ وَتَطْبُخُ وَتَهْتَمُّ بِنَا فِي وَقْتٍ وَاحِدٍ!', modelEn: 'If I could, I would choose a day in my mother’s life, to understand how she works, cooks and looks after us all at once!' },
      ],
      foot: 'Stretch: a concession, an example, dual verbs (yalʿabāni), ʿindamā … fa-aṣbaḥtu, a comparative, law … la- with likay.',
      modelFoot: 'Stretch: ṣaḥīḥun anna … ghayra anna, past vs present with duals, a life lesson, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I answered about myself, family, home and hobbies in full sentences.' },
    { route: 'core', text: 'My adjectives agreed with me (m. / f.).' },
    { route: 'develop', text: 'I used three linking words in one answer.' },
    { route: 'develop', text: 'I used two time frames in one answer.' },
    { route: 'stretch', text: 'I used a concession, ammā … fa- and law … la-.' },
  ],
};
speak.words[2] = w(3, 'أَمَّا أَنَا فَأُحِبُّ …', 'as for me, I like …', null, { tag: 'contrast' });
speak.words[7] = w(8, 'فِي المُسْتَقْبَلِ سَأَدْرُسُ …', 'in the future I will study …', [['I hope', 'أَتَمَنَّى أَنْ'], ['I plan', 'أُخَطِّطُ لِلسَّفَرِ']], { tag: 'future' });
speak.words[10] = w(11, 'لَوْ كُنْتُ … لَسَافَرْتُ', 'if I were … I would travel', null, { tag: 'conditional' });
speak.RP[2].tasks[1].help = 'كُنْتُ … أَمَّا الآنَ فَأَتَكَلَّمُ …';
speak.RP[3].tasks[4].help = 'لَوْ كَتَبْتُ …، لَقُلْتُ …';
speak.CONV[1].qs[1].start = 'أُشْبِهُ … فِي … أَمَّا شَخْصِيَّتِي فَتُشْبِهُ …';
speak.CONV[1].qs[4].start = 'أَوَّلًا سَأُرَاجِعُ … ثُمَّ … بِالإِضَافَةِ إِلَى ذٰلِكَ …';
speak.CONV[2].qs[2].start = 'كَانَ وَالِدَايَ … أَمَّا جِيلُنَا فَيَصْنَعُ …';
speak.CONV[2].qs[3].start = 'عِنْدَمَا … تَغَيَّرْتُ، فَأَصْبَحْتُ …';
speak.CONV[2].qs[4].start = 'لَوِ اسْتَطَعْتُ …، لَاخْتَرْتُ … لِكَيْ …';

const Q2_CORE = `السَّلَامُ عَلَيْكُمْ،
اسْمِي رِيمُ، وَعُمْرِي سِتَّ عَشْرَةَ سَنَةً، وَأَسْكُنُ فِي لَنْدَنَ مَعَ أُسْرَتِي. أَبِي طَبِيبٌ، وَأُمِّي مُعَلِّمَةٌ، وَعِنْدِي أَخٌ صَغِيرٌ. أَنَا طَالِبَةٌ مَرِحَةٌ وَمُنَظَّمَةٌ، وَأُحِبُّ الرَّسْمَ وَالسِّبَاحَةَ. أَسْبَحُ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ. فِي الصَّيْفِ المَاضِي سَافَرْتُ إِلَى المَغْرِبِ، وَتَكَلَّمْتُ العَرَبِيَّةَ مَعَ النَّاسِ، لِذٰلِكَ أُرِيدُ أَنْ أُشَارِكَ فِي البَرْنَامَجِ. إِذَا قَبِلْتُمُونِي، سَأُحَسِّنُ لُغَتِي وَسَأَتَعَرَّفُ عَلَى ثَقَافَةٍ جَدِيدَةٍ.
مَعَ الشُّكْرِ،
رِيمُ`;
const Q2_FULL = `السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللّٰهِ،
اسْمِي رِيمُ أَحْمَدُ، وَعُمْرِي سِتَّ عَشْرَةَ سَنَةً، وَأَسْكُنُ فِي حَيٍّ مُتَنَوِّعٍ فِي شَرْقِ لَنْدَنَ مَعَ وَالِدَيَّ وَأَخِيَ الصَّغِيرِ. يَصِفُنِي أَصْدِقَائِي بِأَنِّي مَرِحَةٌ وَمُنَظَّمَةٌ، كَمَا أَنِّي أُحِبُّ العَمَلَ فِي فَرِيقٍ. أَقْضِي وَقْتَ فَرَاغِي فِي الرَّسْمِ وَالسِّبَاحَةِ، وَبِالإِضَافَةِ إِلَى ذٰلِكَ أَتَطَوَّعُ فِي مَكْتَبَةِ الحَيِّ يَوْمَ السَّبْتِ. فِي الصَّيْفِ المَاضِي زُرْتُ المَغْرِبَ، فَاكْتَشَفْتُ أَنَّ عَرَبِيَّتِي تَكْفِي لِلتَّسَوُّقِ، لٰكِنَّهَا لَا تَكْفِي لِلْحِوَارِ الحَقِيقِيِّ، وَلِذٰلِكَ أَتَقَدَّمُ لِهٰذَا البَرْنَامَجِ. إِذَا قَبِلْتُمُونِي، فَسَأَكُونُ ضَيْفَةً مُحْتَرِمَةً، وَسَأُشَارِكُ أُسْرَتِيَ المُضِيفَةَ فِي كُلِّ أَنْشِطَتِهَا.
مَعَ خَالِصِ الشُّكْرِ،
رِيمُ أَحْمَدُ`;
const Q3A_CORE = `اسْمِي عُمَرُ، وَعُمْرِي خَمْسَ عَشْرَةَ سَنَةً. وُلِدْتُ فِي القَاهِرَةِ، لٰكِنِّي أَسْكُنُ فِي بَرْمِنْغْهَامَ مُنْذُ عَشْرِ سَنَوَاتٍ. أَنَا طَوِيلٌ وَنَحِيفٌ، وَشَعْرِي أَسْوَدُ، وَعَيْنَايَ بُنِّيَّتَانِ. أَنَا هَادِئٌ وَمُجْتَهِدٌ، لٰكِنِّي مَرِحٌ مَعَ أَصْدِقَائِي.
أَسْكُنُ مَعَ أُسْرَتِي فِي بَيْتٍ صَغِيرٍ، فِيهِ ثَلَاثُ غُرَفِ نَوْمٍ. أُشَارِكُ غُرْفَتِي مَعَ أَخِي الصَّغِيرِ. غُرْفَتُنَا زَرْقَاءُ، وَفِيهَا سَرِيرَانِ وَمَكْتَبٌ. أَمَّا هِوَايَاتِي فَهِيَ كُرَةُ القَدَمِ وَالطَّبْخُ، وَأَلْعَبُ مَعَ فَرِيقِ المَدْرَسَةِ مَرَّتَيْنِ فِي الأُسْبُوعِ.
عِنْدَمَا كُنْتُ صَغِيرًا، كُنْتُ خَجُولًا جِدًّا. فِي السَّنَةِ المَاضِيَةِ انْضَمَمْتُ إِلَى نَادِي المَسْرَحِ، وَمَثَّلْتُ فِي مَسْرَحِيَّةٍ أَمَامَ المَدْرَسَةِ كُلِّهَا. كَانَتْ تَجْرِبَةً رَائِعَةً، وَأَصْبَحْتُ أَكْثَرَ ثِقَةً، وَالآنَ أَتَكَلَّمُ فِي الصَّفِّ بِدُونِ خَوْفٍ.
فِي رَأْيِي، أُسْرَتِي وَأَصْدِقَائِي أَهَمُّ شَيْءٍ فِي حَيَاتِي. فِي المُسْتَقْبَلِ أُرِيدُ أَنْ أَكُونَ طَبَّاخًا مَشْهُورًا، وَسَأَفْتَحُ مَطْعَمًا مِصْرِيًّا فِي لَنْدَنَ.`;
const Q3A_FULL = `لَوْ سَأَلْتَ أُمِّي عَنِّي، لَقَالَتْ إِنِّي «الوَلَدُ الَّذِي لَا يَجْلِسُ أَبَدًا»، وَلَوْ سَأَلْتَ أَصْدِقَائِي، لَقَالُوا إِنِّي الصَّدِيقُ الَّذِي يَسْمَعُ دَائِمًا. أَظُنُّ أَنَّ الاثْنَيْنِ صَحِيحَانِ، وَأَنَّ هٰذَا الخَلِيطَ هُوَ مَا يَجْعَلُنِي أَنَا.
اسْمِي عُمَرُ، وُلِدْتُ فِي القَاهِرَةِ، وَأَسْكُنُ فِي بَرْمِنْغْهَامَ مُنْذُ عَشْرِ سَنَوَاتٍ، فِي بَيْتٍ صَغِيرٍ أُشَارِكُ فِيهِ غُرْفَتِي مَعَ أَخِي. صَحِيحٌ أَنَّ ذٰلِكَ مُزْعِجٌ أَحْيَانًا، غَيْرَ أَنَّهُ عَلَّمَنِي الصَّبْرَ وَالتَّنْظِيمَ. أَمَّا وَقْتُ فَرَاغِي فَأَقْضِيهِ بَيْنَ مَلْعَبِ كُرَةِ القَدَمِ وَمَطْبَخِ جَدَّتِي، الَّتِي عَلَّمَتْنِي أَسْرَارَ الكُشَرِيِّ.
لَمْ أَكُنْ هٰكَذَا دَائِمًا؛ فَقَدْ كُنْتُ طِفْلًا خَجُولًا لَا يَتَكَلَّمُ فِي الصَّفِّ. وَفِي السَّنَةِ المَاضِيَةِ شَجَّعَنِي مُعَلِّمِي عَلَى الانْضِمَامِ إِلَى نَادِي المَسْرَحِ، فَوَقَفْتُ أَمَامَ ثَلَاثِمِئَةِ شَخْصٍ، وَنَسِيتُ نِصْفَ كَلَامِي، لٰكِنَّ الجُمْهُورَ صَفَّقَ لِي طَوِيلًا، وَرَأَيْتُ أُمِّي فِي الصَّفِّ الأَوَّلِ تَبْكِي مِنَ الفَرَحِ.
تِلْكَ اللَّيْلَةُ غَيَّرَتْنِي، فَأَصْبَحْتُ أُؤْمِنُ بِأَنَّ الخَوْفَ يَصْغُرُ عِنْدَمَا نُوَاجِهُهُ. فِي المُسْتَقْبَلِ سَأَدْرُسُ فُنُونَ الطَّبْخِ، وَأَحْلُمُ بِأَنْ أَفْتَحَ مَطْعَمًا يَجْمَعُ بَيْنَ مَطْبَخِ القَاهِرَةِ وَرُوحِ بَرْمِنْغْهَامَ.`;
const Q3B_FULL = `يَعِيشُ الشَّبَابُ اليَوْمَ فِي عَالَمٍ مُخْتَلِفٍ تَمَامًا عَنْ عَالَمِ آبَائِهِمْ؛ فَهُمْ يَتَعَلَّمُونَ وَيَلْعَبُونَ وَيَتَعَرَّفُونَ عَلَى أَصْدِقَائِهِمْ عَبْرَ الشَّاشَاتِ، وَيَحْمِلُونَ أَحْيَانًا ثَقَافَتَيْنِ أَوْ ثَلَاثًا فِي آنٍ وَاحِدٍ.
فِي المَاضِي كَانَ المُرَاهِقُ يَعْرِفُ جِيرَانَهُ كُلَّهُمْ، وَيَقْضِي وَقْتَهُ فِي الشَّارِعِ أَوِ النَّادِي، وَكَانَتْ هُوِيَّتُهُ وَاضِحَةً: ابْنُ هٰذِهِ العَائِلَةِ وَهٰذَا الحَيِّ. أَمَّا اليَوْمَ فَيَبْنِي كُلٌّ مِنَّا صُورَتَهُ عَلَى وَسَائِلِ التَّوَاصُلِ، فَيَخْتَارُ مَا يُظْهِرُهُ وَمَا يُخْفِيهِ.
لَاحَظْتُ ذٰلِكَ فِي نَفْسِي؛ فَقَبْلَ سَنَتَيْنِ كُنْتُ أَنْشُرُ صُوَرِي يَوْمِيًّا، وَأَنْتَظِرُ الإِعْجَابَاتِ بِقَلَقٍ. ثُمَّ قَرَّرْتُ أَنْ أَتَوَقَّفَ شَهْرًا كَامِلًا، فَقَرَأْتُ ثَلَاثَ رِوَايَاتٍ، وَتَعَلَّمْتُ الخِيَاطَةَ مِنْ جَدَّتِي، وَشَعَرْتُ أَنِّي أَعْرِفُ نَفْسِي أَكْثَرَ، وَأَنَّ قِيمَتِي لَا تُقَاسُ بِعَدَدِ الإِعْجَابَاتِ.
صَحِيحٌ أَنَّ التِّكْنُولُوجْيَا تَفْتَحُ لِلشَّبَابِ أَبْوَابًا لَمْ تَكُنْ مَوْجُودَةً، غَيْرَ أَنَّ الهُوِيَّةَ الحَقِيقِيَّةَ تُبْنَى فِي العَائِلَةِ وَالصَّدَاقَةِ وَالتَّجْرِبَةِ. وَلَوْ خَصَّصَ كُلُّ شَابٍّ وَقْتًا لِنَفْسِهِ بَعِيدًا عَنِ الشَّاشَةِ، لَاكْتَشَفَ أَنَّ لَدَيْهِ أَكْثَرَ مِمَّا يُظْهِرُهُ لِلْعَالَمِ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice using all of Topic B, with a focus on cohesion and self-editing: an exchange application form, a personal statement email, and an extended piece about who you are or about growing up today.',
  lift: [
    { ar: 'يَصِفُنِي أَصْدِقَائِي بِأَنِّي …', en: 'my friends describe me as …' },
    { ar: 'بِالإِضَافَةِ إِلَى ذٰلِكَ … · وَلِذٰلِكَ …', en: 'in addition … · and so …' },
    { ar: 'إِذَا قَبِلْتُمُونِي، فَسَأَكُونُ …', en: 'if you accept me, I will be …' },
  ],
  checkTip: 'EDITING CHECKLIST — read your work three times: (1) verbs: right person and tense; (2) agreement: every adjective, number and pronoun; (3) linking: at least four different linking words. Then count your words.',
  FORM: {
    title: 'Youth exchange application', ar: 'طَلَبُ المُشَارَكَةِ فِي بَرْنَامَجِ التَّبَادُلِ',
    fields: [
      { core: true, ar: 'الاسْمُ وَالعُمْرُ', en: 'Name and age', model: 'رِيمُ أَحْمَدُ، سِتَّ عَشْرَةَ سَنَةً', modelEn: 'Reem Ahmed, sixteen' },
      { core: true, ar: 'الجِنْسِيَّةُ وَمَكَانُ المِيلَادِ', en: 'Nationality and place of birth', model: 'بِرِيطَانِيَّةٌ، لَنْدَنُ', modelEn: 'British, London' },
      { core: true, ar: 'أَفْرَادُ الأُسْرَةِ', en: 'Family members', model: 'أَبِي وَأُمِّي وَأَخٌ صَغِيرٌ', modelEn: 'my father, mother and a little brother' },
      { core: true, ar: 'نَوْعُ السَّكَنِ', en: 'Type of home', model: 'شَقَّةٌ فِي الطَّابِقِ الثَّالِثِ', modelEn: 'a third-floor flat' },
      { core: true, ar: 'ثَلَاثُ صِفَاتٍ لِشَخْصِيَّتِكَ', en: 'Three personality words', model: 'مَرِحَةٌ وَمُنَظَّمَةٌ وَصَبُورَةٌ', modelEn: 'cheerful, organised, patient' },
      { core: true, ar: 'هِوَايَاتُكَ', en: 'Your hobbies', model: 'الرَّسْمُ وَالسِّبَاحَةُ', modelEn: 'drawing and swimming' },
      { ar: 'تَجْرِبَةُ سَفَرٍ سَابِقَةٌ', en: 'A previous travel experience', model: 'زِيَارَةُ المَغْرِبِ فِي الصَّيْفِ المَاضِي', modelEn: 'visiting Morocco last summer' },
      { ar: 'جُمْلَةٌ: مَاذَا سَتُقَدِّمُ لِلْأُسْرَةِ المُضِيفَةِ؟', en: 'ONE sentence: what you will offer your host family', model: 'سَأُسَاعِدُ فِي البَيْتِ، وَسَأُعَلِّمُ أَوْلَادَهُمُ الإِنْجِلِيزِيَّةَ.', modelEn: 'I will help at home and teach their children English.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full future sentence. Then EDIT: check agreement in boxes 2 and 5.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. This form uses every Topic B lesson. Model answers are a girl’s (biriṭāniyya, maraḥa).',
  },
  Q2: {
    short: 'a personal statement email', title: 'Question 2: why choose me?', ar: 'رِسَالَةُ تَقْدِيمٍ',
    task: 'You are applying for an exchange programme in an Arab country. Write an email in Arabic of about 80–90 words. You must include: • yourself, your family and where you live • your personality and your hobbies • an experience that made you want to take part • what you will do if they accept you.',
    checklist: ['All four bullet points, in order.', 'A formal greeting and closing.', 'Four different linking words.', 'Past, present AND future.', 'Edited: verbs, agreement, word count.'],
    phrases: [['اسْمِي … وَأَسْكُنُ فِي … مَعَ …', 'my name is … and I live in … with …'], ['يَصِفُنِي أَصْدِقَائِي بِأَنِّي …', 'my friends describe me as …'], ['فِي الصَّيْفِ المَاضِي … وَلِذٰلِكَ …', 'last summer … and so …'], ['إِذَا قَبِلْتُمُونِي، سَأُسَاعِدُ …', 'if you accept me, I will help …']],
    rubric: [
      ['task', 'تَتَقَدَّمِينَ لِبَرْنَامَجِ تَبَادُلٍ فِي بَلَدٍ عَرَبِيٍّ. اكْتُبِي رِسَالَةً (٨٠–٩٠ كَلِمَةً).', 'You are applying for an exchange: write an email (80–90 words).'],
      ['1', 'عَرِّفِي بِنَفْسِكِ وَأُسْرَتِكِ وَمَكَانِ سَكَنِكِ.', 'Yourself, your family, where you live'],
      ['2', 'صِفِي شَخْصِيَّتَكِ وَهِوَايَاتِكِ.', 'Your personality and hobbies'],
      ['3', 'مَا التَّجْرِبَةُ الَّتِي جَعَلَتْكِ تُرِيدِينَ المُشَارَكَةَ؟', 'An experience that made you want to take part'],
      ['4', 'مَاذَا سَتَفْعَلِينَ إِذَا قَبِلُوكِ؟', 'What you will do if accepted'],
    ],
    qwords: 'عَرِّفِي (introduce) · صِفِي (describe) · مَا (what) · مَاذَا (what) — bullet 3 is PAST, bullet 4 is an idhā + FUTURE sentence',
    frames: [
      ['start', 'السَّلَامُ عَلَيْكُمْ،', 'Peace be upon you (formal greeting)'],
      ['1', 'اسْمِي ______ ، وَعُمْرِي ______ ، وَأَسْكُنُ فِي ______ مَعَ ______ .', 'My name is …, I am …, and I live in … with …'],
      ['2', 'أَنَا ______ وَ ______ ، وَأُحِبُّ ______ .', 'I am … and …, and I like …'],
      ['3', 'فِي ______ المَاضِي ______ ، لِذٰلِكَ أُرِيدُ أَنْ أُشَارِكَ.', 'Last … I …, so I want to take part.'],
      ['4', 'إِذَا قَبِلْتُمُونِي، سَأُسَاعِدُ ______ وَسَأَتَعَلَّمُ ______ .', 'If you accept me, I will help … and I will learn …'],
      ['end', 'مَعَ الشُّكْرِ، ______', 'With thanks, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Peace be upon you. My name is Reem, I am sixteen, and I live in London with my family. My dad is a doctor, my mum a teacher, and I have a little brother. I am a cheerful, organised student, and I like drawing and swimming. I swim three times a week. Last summer I travelled to Morocco and spoke Arabic with people, so I want to take part in the programme. If you accept me, I will improve my language and get to know a new culture. With thanks, Reem.”',
      find: ['أَسْكُنُ فِي لَنْدَنَ مَعَ', 'مَرِحَةٌ وَمُنَظَّمَةٌ', 'لِذٰلِكَ', 'إِذَا قَبِلْتُمُونِي، سَأُحَسِّنُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Peace and God’s mercy be upon you. My name is Reem Ahmed; I am sixteen and live in a diverse area of East London with my parents and little brother. My friends describe me as cheerful and organised, and I also love teamwork. I spend my free time drawing and swimming, and in addition I volunteer at the local library on Saturdays. Last summer I visited Morocco and discovered that my Arabic was enough for shopping but not for real conversation, and so I am applying for this programme. If you accept me, I will be a respectful guest and join my host family in all their activities. With sincere thanks, Reem Ahmed.”',
      find: ['يَصِفُنِي أَصْدِقَائِي بِأَنِّي', 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'لٰكِنَّهَا لَا تَكْفِي … وَلِذٰلِكَ', 'إِذَا قَبِلْتُمُونِي، فَسَأَكُونُ'],
    },
  },
  Q3: {
    a: { title: 'هٰذَا أَنَا', en: 'This is me', bullets: 'مَعْلُومَاتُكَ وَشَكْلُكَ وَشَخْصِيَّتُكَ · بَيْتُكَ وَأُسْرَتُكَ وَهِوَايَاتُكَ · تَجْرِبَةٌ غَيَّرَتْكَ · أَحْلَامُكَ لِلْمُسْتَقْبَلِ', bulletsEn: 'Your details, looks and personality · home, family and hobbies · an experience that changed you · your dreams for the future' },
    b: { title: 'أَنْ تَكْبُرَ اليَوْمَ', en: 'Growing up today', bullets: 'كَيْفَ يَعِيشُ الشَّبَابُ اليَوْمَ؟ · المَاضِي وَالحَاضِرُ · تَجْرِبَةٌ شَخْصِيَّةٌ · رَأْيُكَ وَاقْتِرَاحُكَ', bulletsEn: 'How young people live today · past and present · a personal experience · your opinion and suggestion' },
    plan: [
      'Hook + who you are — identity, looks, personality (TB-L01, L03); a hook with law … la- for Stretch.',
      'Your world — home, room, family, hobbies (TB-L02, L04–L08); link with ammā … fa-, bi-l-iḍāfa ilā dhālika.',
      'A turning point — a past story (TB-L09): kuntu …, fī s-sana l-māḍiya …, fa- …',
      'Future + EDIT — sa- / aḥlumu bi-an …; then edit: verbs, agreement, linking words, word count.',
    ],
    frames: [
      { ar: 'أَنَا هَادِئٌ، لٰكِنِّي مَرِحٌ مَعَ أَصْدِقَائِي.', en: 'present: I am calm, but fun with my friends.' },
      { ar: 'عِنْدَمَا كُنْتُ صَغِيرًا، كُنْتُ خَجُولًا جِدًّا.', en: 'past: when I was small, I was very shy.' },
      { ar: 'سَأَفْتَحُ مَطْعَمًا مِصْرِيًّا فِي لَنْدَنَ.', en: 'future: I will open an Egyptian restaurant in London.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Omar, 15, born in Cairo, in Birmingham for ten years; tall, thin, black hair, brown eyes; calm and hard-working but fun with friends → a small house with three bedrooms; I share a blue room with my little brother — two beds and a desk; as for hobbies, football and cooking; school team twice a week → as a child I was very shy; last year I joined the drama club and acted in front of the whole school — a great experience, and I became more confident — now I speak in class without fear → family and friends matter most; I want to be a famous chef and will open an Egyptian restaurant in London.', find: ['لٰكِنِّي أَسْكُنُ … مُنْذُ', 'أَمَّا هِوَايَاتِي فَهِيَ', 'كُنْتُ خَجُولًا', 'سَأَفْتَحُ'], notes: 'Core model: every Topic B area, linked with lākinna, ammā … fa- and ʿindamā; three time frames; a dual (sarīrāni).' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'If you asked my mum about me, she’d say “the boy who never sits still”; my friends would say I’m the one who always listens — both are true, and that mix is what makes me me → Omar, born in Cairo, in Birmingham for ten years, sharing a room with my brother in a small house; it is true that’s annoying sometimes, but it taught me patience and organisation; as for my free time, it’s split between the football pitch and my grandmother’s kitchen, where she taught me the secrets of koshari → I wasn’t always like this: a shy child silent in class; last year my teacher encouraged me to join drama; I stood before three hundred people, forgot half my lines, but the audience applauded for a long time, and I saw Mum in the front row crying with joy → that night changed me: fear shrinks when we face it; I’ll study culinary arts and dream of a restaurant joining Cairo’s kitchen with Birmingham’s spirit.', find: ['لَوْ سَأَلْتَ … لَقَالَتْ', 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّهُ', 'لَمْ أَكُنْ هٰكَذَا دَائِمًا', 'أَحْلُمُ بِأَنْ أَفْتَحَ'], notes: 'Full-mark model: a double law … la- hook, relative clauses, a concession, ammā … fa-, lam akun, a vivid past paragraph, aṣbaḥtu uʾminu bi-anna, aḥlumu bi-an.' },
      { which: 'ب', level: 'Full', subtitle: 'growing up today', text: Q3B_FULL, en: 'Young people today live in a world utterly different from their parents’: learning, playing and making friends through screens, sometimes carrying two or three cultures at once → in the past a teenager knew all his neighbours and spent time in the street or club, with a clear identity — son of this family, this area; as for today, each of us builds an image on social media, choosing what to show and what to hide → I noticed this in myself: two years ago I posted photos daily and waited anxiously for likes; then I stopped for a whole month — read three novels, learned sewing from my grandmother, and felt I knew myself better, and that my worth isn’t measured in likes → it is true technology opens doors that didn’t exist, but real identity is built in family, friendship and experience; “if every young person kept time for themselves away from the screen, they would discover they have more than they show the world”.', find: ['فِي آنٍ وَاحِدٍ', 'أَمَّا اليَوْمَ فَيَبْنِي', 'قَرَّرْتُ أَنْ أَتَوَقَّفَ', 'لَوْ خَصَّصَ … لَاكْتَشَفَ'], notes: 'Full-mark model for the Stretch title: a three-verb list, kāna + present vs ammā … fa-, mā yuẓhiruhu wa-mā yukhfīhi, a personal experiment, a concession with a passive (tubnā), and a conditional.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; agreement checked (m. / f.).' },
    { route: 'core', text: 'Q2: all four bullet points, with a formal greeting and closing.' },
    { route: 'develop', text: 'Q2: four different linking words, past + present + future.' },
    { route: 'develop', text: 'Q3: I edited for verbs, agreement and word count.' },
    { route: 'stretch', text: 'Q3: a hook, ammā … fa-, a concession and law … la-.' },
  ],
};

module.exports = { speak, write };
