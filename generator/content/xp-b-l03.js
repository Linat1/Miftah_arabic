'use strict';
/* Exam-practice data · TB-L03 · Appearance and Personality (adjective agreement; relative pronouns; لَيْسَ). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'B', n: 3, short: 'Appearance and Personality', arShort: 'المَظْهَرُ وَالشَّخْصِيَّةُ', fileTitle: 'Appearance_and_Personality', title: 'Appearance and Personality', ar: 'المَظْهَرُ وَالشَّخْصِيَّةُ', icon: 'FaUserPen', grammar: 'adjective agreement; relative pronouns (alladhī / allatī); laysa' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: describe what people look like and what they are like, with adjectives that agree, alladhī / allatī, and laysa — and back up every judgement with an example.',
  words: [
    w(1, 'طَوِيلٌ', 'tall', [['m.', 'طَوِيلٌ'], ['f.', 'طَوِيلَةٌ'], ['pl.', 'طِوَالٌ']]),
    w(2, 'قَصِيرٌ', 'short', [['m.', 'قَصِيرٌ'], ['f.', 'قَصِيرَةٌ'], ['pl.', 'قِصَارٌ']]),
    w(3, 'شَعْرُهُ أَسْوَدُ', 'his hair is black', [['her', 'شَعْرُهَا أَسْوَدُ'], ['my', 'شَعْرِي أَسْوَدُ']], { tag: 'hair' }),
    w(4, 'عَيْنَاهُ بُنِّيَّتَانِ', 'his eyes are brown', [['her', 'عَيْنَاهَا'], ['my', 'عَيْنَايَ']], { tag: 'dual' }),
    w(5, 'يَلْبَسُ نَظَّارَةً', 'he wears glasses', [['she', 'تَلْبَسُ'], ['I', 'أَلْبَسُ']]),
    w(6, 'لَيْسَ … ', 'is not …', [['she', 'لَيْسَتْ'], ['I', 'لَسْتُ'], ['they', 'لَيْسُوا']], { tag: 'laysa + acc.' }),
    w(7, 'لَطِيفٌ', 'kind, nice', [['m.', 'لَطِيفٌ'], ['f.', 'لَطِيفَةٌ'], ['pl.', 'لُطَفَاءُ']]),
    w(8, 'ذَكِيٌّ', 'clever', [['m.', 'ذَكِيٌّ'], ['f.', 'ذَكِيَّةٌ'], ['pl.', 'أَذْكِيَاءُ']]),
    w(9, 'خَجُولٌ', 'shy', [['m.', 'خَجُولٌ'], ['f.', 'خَجُولَةٌ'], ['pl.', 'خَجُولُونَ']]),
    w(10, 'كَرِيمٌ', 'generous', [['m.', 'كَرِيمٌ'], ['f.', 'كَرِيمَةٌ'], ['pl.', 'كِرَامٌ']]),
    w(11, 'الَّذِي · الَّتِي', 'who, which (m. · f.)', [['pl. m.', 'الَّذِينَ'], ['pl. f.', 'اللَّوَاتِي']], { tag: 'relative pronouns' }),
    w(12, 'صَبُورٌ', 'patient', [['m.', 'صَبُورٌ'], ['f.', 'صَبُورَةٌ'], ['pl.', 'صُبُرٌ']]),
  ],
  words1: { eyebrow: 'Language bank · appearance (m. · f. · pl.)', title: 'What does he look like?', ar: 'كَيْفَ شَكْلُهُ؟', notes: 'LANGUAGE BANK (2 min) — adjectives agree in gender: هُوَ طَوِيلٌ · هِيَ طَوِيلَةٌ. Eyes are a dual: عَيْنَاهَا خَضْرَاوَانِ. laysa takes the accusative: لَيْسَ طَوِيلًا.' },
  words2: { eyebrow: 'Language bank · personality and “who …”', title: 'What is she like?', ar: 'كَيْفَ شَخْصِيَّتُهَا؟', notes: 'LANGUAGE BANK (2 min) — the relative pronoun agrees with the person: الصَّدِيقُ الَّذِي … · الصَّدِيقَةُ الَّتِي … · الأَصْدِقَاءُ الَّذِينَ … Broken plurals of people: لُطَفَاءُ · أَذْكِيَاءُ · كِرَامٌ.' },
  checkCore: 'described appearance with adjectives that agree (m. / f.)',
  checkDevelop: 'used alladhī / allatī or laysa, and gave an example for a personality trait',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a lost child', title: 'Role play A — Reporting a lost little brother', ar: 'أَخِي الصَّغِيرُ ضَائِعٌ', you: 'a worried older sibling', them: 'a shopping-centre security guard',
      tasks: [
        { core: true, ex: 'مَا المُشْكِلَةُ؟', task: 'Say your little brother is lost.', help: 'أَخِي الصَّغِيرُ ضَائِعٌ …', model: 'أَخِي الصَّغِيرُ ضَائِعٌ، كَانَ مَعِي قَبْلَ عَشْرِ دَقَائِقَ.', modelEn: 'My little brother is lost; he was with me ten minutes ago.' },
        { core: true, ex: 'كَمْ عُمْرُهُ؟ وَمَا اسْمُهُ؟', task: 'Give his name and age.', help: 'اسْمُهُ … وَعُمْرُهُ …', model: 'اسْمُهُ زَيْدٌ، وَعُمْرُهُ سِتُّ سَنَوَاتٍ.', modelEn: 'His name is Zaid and he is six.' },
        { core: true, ex: 'كَيْفَ شَكْلُهُ؟', task: 'Describe his appearance.', help: 'هُوَ … وَشَعْرُهُ …', model: 'هُوَ قَصِيرٌ وَنَحِيفٌ، وَشَعْرُهُ أَسْوَدُ وَقَصِيرٌ، وَعَيْنَاهُ بُنِّيَّتَانِ.', modelEn: 'He is short and thin, with short black hair and brown eyes.' },
        { core: true, ex: 'مَاذَا يَلْبَسُ؟', task: 'Say what he is wearing.', help: 'يَلْبَسُ … وَ…', model: 'يَلْبَسُ قَمِيصًا أَحْمَرَ وَبِنْطَالًا أَزْرَقَ.', modelEn: 'He is wearing a red shirt and blue trousers.' },
        { core: true, unexpected: true, ex: 'هَلْ هُوَ خَجُولٌ؟', task: 'Answer the unexpected question.', help: 'لَا، لَيْسَ … هُوَ …', model: 'لَا، لَيْسَ خَجُولًا، هُوَ اجْتِمَاعِيٌّ وَيَتَكَلَّمُ مَعَ الجَمِيعِ.', modelEn: 'No, he isn’t shy; he is sociable and talks to everyone.' },
      ],
      girl: 'if it is a little sister: أُخْتِي الصَّغِيرَةُ ضَائِعَةٌ · اسْمُهَا · هِيَ قَصِيرَةٌ · تَلْبَسُ فُسْتَانًا · لَيْسَتْ خَجُولَةً',
      notes: 'Core: appearance with agreement, colours (aḥmar, azraq — colour pattern), the dual (ʿaynāhu bunniyyatāni), laysa + accusative.',
    },
    {
      id: 'B', level: 'Core+', setting: 'a new teacher', title: 'Role play B — Describing your new teacher', ar: 'مُعَلِّمَتُنَا الجَدِيدَةُ', you: 'a student', them: 'your parent at home',
      tasks: [
        { core: true, ex: 'مَنْ مُعَلِّمَتُكُمُ الجَدِيدَةُ؟', task: 'Give her name and subject.', help: 'اسْمُهَا … وَهِيَ تُدَرِّسُ …', model: 'اسْمُهَا الأُسْتَاذَةُ هِنْدٌ، وَهِيَ تُدَرِّسُ العُلُومَ.', modelEn: 'She is called Ms Hind, and she teaches science.' },
        { core: true, ex: 'كَيْفَ شَكْلُهَا؟', task: 'Describe her appearance.', help: 'هِيَ … وَتَلْبَسُ …', model: 'هِيَ طَوِيلَةٌ، وَتَلْبَسُ نَظَّارَةً، وَعَيْنَاهَا خَضْرَاوَانِ.', modelEn: 'She is tall, wears glasses and has green eyes.' },
        { ex: 'وَهَلْ هِيَ صَارِمَةٌ؟', task: 'Answer with laysa and a positive trait.', help: 'لَا، لَيْسَتْ … بَلْ …', model: 'لَا، لَيْسَتْ صَارِمَةً، بَلْ هِيَ صَبُورَةٌ وَمَرِحَةٌ.', modelEn: 'No, she isn’t strict — she is patient and fun.' },
        { ex: '… مُعَلِّمُكَ القَدِيمُ كَانَ صَارِمًا جِدًّا!', task: 'ASK your parent about their favourite teacher.', help: 'وَأَنْتَ / وَأَنْتِ، مَنْ …؟', model: 'وَأَنْتِ يَا أُمِّي، مَنْ كَانَ مُعَلِّمَكِ المُفَضَّلَ فِي المَدْرَسَةِ؟', modelEn: 'And you, Mum — who was your favourite teacher at school?' },
        { unexpected: true, ex: 'لِمَاذَا تُحِبُّهَا؟', task: 'Answer the unexpected question (a reason + example).', help: 'لِأَنَّهَا … مَثَلًا …', model: 'لِأَنَّهَا تَشْرَحُ بِوُضُوحٍ؛ مَثَلًا أَمْسِ أَجْرَيْنَا تَجْرِبَةً مُمْتِعَةً فِي المُخْتَبَرِ.', modelEn: 'Because she explains clearly — yesterday, for example, we did a fun experiment in the lab.' },
      ],
      girl: 'to a girl the parent says تُحِبِّينَهَا · مُعَلِّمَتُكِ — the candidate asks a father: وَأَنْتَ يَا أَبِي، مَنْ كَانَ مُعَلِّمَكَ …؟',
      notes: 'Feminine throughout (hiya ṭawīla, laysat ṣārimatan). Task 3: laysa … bal. Task 4: the CANDIDATE asks.',
    },
    {
      id: 'C', level: 'Develop', setting: 'choosing a team captain', title: 'Role play C — Who should be team captain?', ar: 'مَنْ يَكُونُ قَائِدَ الفَرِيقِ؟', you: 'a team member', them: 'the coach',
      tasks: [
        { ex: 'مَنْ تَقْتَرِحُ قَائِدًا لِلْفَرِيقِ؟', task: 'Suggest someone using alladhī / allatī.', help: 'أَقْتَرِحُ … الَّذِي / الَّتِي …', model: 'أَقْتَرِحُ سَلْمَى، الَّتِي تَلْعَبُ مَعَنَا مُنْذُ ثَلَاثِ سَنَوَاتٍ.', modelEn: 'I suggest Salma, who has played with us for three years.' },
        { ex: 'لِمَاذَا هِيَ؟', task: 'Give two qualities with a reason.', help: 'لِأَنَّهَا … وَ…', model: 'لِأَنَّهَا شُجَاعَةٌ وَعَادِلَةٌ، وَتُشَجِّعُ الجَمِيعَ حَتَّى عِنْدَمَا نَخْسَرُ.', modelEn: 'Because she is brave and fair, and she encourages everyone even when we lose.' },
        { ex: 'أَعْطِنِي مِثَالًا.', task: 'Give an example from the past.', help: 'فِي المُبَارَاةِ المَاضِيَةِ …', model: 'فِي المُبَارَاةِ المَاضِيَةِ، عِنْدَمَا وَقَعَتْ زَمِيلَتُنَا، تَوَقَّفَتْ سَلْمَى وَسَاعَدَتْهَا.', modelEn: 'In the last match, when a teammate fell, Salma stopped and helped her.' },
        { ex: 'لٰكِنَّهَا لَيْسَتْ أَفْضَلَ لَاعِبَةٍ.', task: 'Concede and answer.', help: 'صَحِيحٌ، لٰكِنَّ القَائِدَ لَيْسَ …', model: 'صَحِيحٌ، لٰكِنَّ القَائِدَ لَيْسَ بِالضَّرُورَةِ أَمْهَرَ لَاعِبٍ، بَلِ الشَّخْصُ الَّذِي يَحْتَرِمُهُ الجَمِيعُ.', modelEn: 'True, but the captain isn’t necessarily the most skilful player — it’s the person everyone respects.' },
        { unexpected: true, ex: 'وَأَنْتَ، هَلْ تَصْلُحُ قَائِدًا؟', task: 'Answer the unexpected question (self-description).', help: 'رُبَّمَا، لِأَنِّي … لٰكِنِّي …', model: 'رُبَّمَا، لِأَنِّي مُنَظَّمٌ، لٰكِنِّي خَجُولٌ قَلِيلًا وَلَا أُحِبُّ أَنْ أَتَكَلَّمَ أَمَامَ النَّاسِ.', modelEn: 'Maybe, because I am organised, but I am a bit shy and don’t like speaking in front of people.' },
      ],
      girl: 'تَقْتَرِحِينَ · وَأَنْتِ، هَلْ تَصْلُحِينَ قَائِدَةً؟ — she answers مُنَظَّمَةٌ · خَجُولَةٌ',
      notes: 'Develop: allatī, two qualities + a reason, a past example with ʿindamā, laysa … bal, a self-description with li-annī … lākinnī.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a magazine interview', title: 'Role play D — Do looks matter?', ar: 'هَلِ المَظْهَرُ مُهِمٌّ؟', you: 'a young interviewee', them: 'a magazine journalist',
      tasks: [
        { ex: 'هَلْ نَحْكُمُ عَلَى النَّاسِ مِنْ مَظْهَرِهِمْ؟', task: 'Give your view with a reason.', help: 'لِلْأَسَفِ نَعَمْ، لِأَنَّ …', model: 'لِلْأَسَفِ نَعَمْ، لِأَنَّ المَظْهَرَ هُوَ أَوَّلُ شَيْءٍ نَرَاهُ، قَبْلَ أَنْ نَعْرِفَ الشَّخْصِيَّةَ.', modelEn: 'Unfortunately yes, because appearance is the first thing we see, before we know the personality.' },
        { ex: 'هَلْ حَكَمْتَ عَلَى شَخْصٍ خَطَأً مَرَّةً؟', task: 'Tell a short story (past).', help: 'نَعَمْ، ظَنَنْتُ أَنَّ … لٰكِنْ …', model: 'نَعَمْ، ظَنَنْتُ أَنَّ جَارَنَا الجَدِيدَ مُتَكَبِّرٌ لِأَنَّهُ لَا يَبْتَسِمُ، لٰكِنَّهُ كَانَ خَجُولًا فَقَطْ، وَهُوَ الآنَ صَدِيقُ أَبِي.', modelEn: 'Yes, I thought our new neighbour was arrogant because he didn’t smile, but he was just shy — he is now my dad’s friend.' },
        { ex: 'مَا تَأْثِيرُ وَسَائِلِ التَّوَاصُلِ عَلَى نَظْرَتِنَا إِلَى الجَمَالِ؟', task: 'Explain an effect.', help: 'تَجْعَلُ … يَظُنُّونَ أَنَّ …', model: 'تَجْعَلُ كَثِيرًا مِنَ الشَّبَابِ يَظُنُّونَ أَنَّ الجَمَالَ شَكْلٌ وَاحِدٌ، لِأَنَّ الصُّوَرَ مُعَدَّلَةٌ بِالفَلَاتِرِ.', modelEn: 'It makes many young people think beauty is one look, because the photos are edited with filters.' },
        { ex: 'أَلَيْسَ مِنَ الطَّبِيعِيِّ أَنْ نَهْتَمَّ بِمَظْهَرِنَا؟', task: 'Concede and give your view.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الاهْتِمَامَ بِالمَظْهَرِ طَبِيعِيٌّ، غَيْرَ أَنَّ الأَخْلَاقَ هِيَ الَّتِي تَجْعَلُ النَّاسَ يُحِبُّونَنَا حَقًّا.', modelEn: 'It is true caring about appearance is natural, but it is character that truly makes people love us.' },
        { unexpected: true, ex: 'لَوِ اسْتَطَعْتَ أَنْ تُغَيِّرَ صِفَةً فِي شَخْصِيَّتِكَ، فَمَا هِيَ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوِ اسْتَطَعْتُ، لَـ…', model: 'لَوِ اسْتَطَعْتُ، لَأَصْبَحْتُ أَكْثَرَ صَبْرًا، لِأَنِّي أَغْضَبُ بِسُرْعَةٍ عِنْدَمَا أَخْسَرُ فِي الأَلْعَابِ.', modelEn: 'If I could, I would become more patient, because I get angry quickly when I lose at games.' },
      ],
      girl: 'حَكَمْتِ · اسْتَطَعْتِ · شَخْصِيَّتِكِ',
      notes: 'Stretch: qabla an, ẓanantu anna … lākinnahu, an effect with yaẓunnūna anna, a concession with hiya allatī, law … la-.',
      modelFoot: 'Stretch: a reason, a past misjudgement, yajʿalu … yaẓunnūna, ṣaḥīḥun anna … ghayra anna and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'شَكْلِي وَشَخْصِيَّتِي', aim: 'one full sentence per question',
      qs: [
        { q: 'صِفْ شَكْلَكَ.', en: 'Describe what you look like.', start: 'أَنَا … وَشَعْرِي …', model: 'أَنَا طَوِيلٌ، وَشَعْرِي أَسْوَدُ، وَعَيْنَايَ بُنِّيَّتَانِ.', modelEn: 'I am tall, with black hair and brown eyes.' },
        { q: 'صِفْ شَخْصِيَّتَكَ.', en: 'Describe your personality.', start: 'أَنَا … وَ…', model: 'أَنَا هَادِئٌ وَمُجْتَهِدٌ، وَأُحِبُّ أَنْ أُسَاعِدَ النَّاسَ.', modelEn: 'I am calm and hard-working, and I like helping people.' },
        { q: 'هَلْ أَنْتَ خَجُولٌ؟', en: 'Are you shy?', start: 'لَا، لَسْتُ … / نَعَمْ، …', model: 'لَا، لَسْتُ خَجُولًا، أَنَا اجْتِمَاعِيٌّ جِدًّا.', modelEn: 'No, I’m not shy; I am very sociable.' },
        { q: 'صِفْ أَحَدَ أَفْرَادِ أُسْرَتِكَ.', en: 'Describe a member of your family.', start: 'أُمِّي / أَبِي … هِيَ / هُوَ …', model: 'أُمِّي قَصِيرَةٌ وَجَمِيلَةٌ، وَهِيَ كَرِيمَةٌ وَصَبُورَةٌ.', modelEn: 'My mum is short and beautiful, and she is generous and patient.' },
        { q: 'مَنِ الشَّخْصُ الَّذِي تُعْجَبُ بِهِ؟', en: 'Who is the person you admire?', start: 'أُعْجَبُ بِـ… لِأَنَّهُ …', model: 'أُعْجَبُ بِجَدِّي كَثِيرًا، لِأَنَّهُ حَكِيمٌ وَلَطِيفٌ.', modelEn: 'I really admire my grandfather, because he is wise and kind.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + adjectives that agree = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'النَّاسُ مِنْ حَوْلِي', aim: 'two or three sentences, with an example',
      qs: [
        { q: 'صِفْ صَدِيقَكَ المُفَضَّلَ: شَكْلَهُ وَشَخْصِيَّتَهُ.', en: 'Describe your best friend: looks and personality.', start: 'صَدِيقِي … شَعْرُهُ … وَهُوَ …', model: 'صَدِيقِي حَمْزَةُ قَصِيرٌ قَلِيلًا وَشَعْرُهُ مُجَعَّدٌ، وَهُوَ مَرِحٌ جِدًّا وَيُضْحِكُ الصَّفَّ كُلَّهُ.', modelEn: 'My friend Hamza is a bit short with curly hair; he is very funny and makes the whole class laugh.' },
        { q: 'مَا الصِّفَةُ الَّتِي لَا تُحِبُّهَا فِي النَّاسِ؟', en: 'Which quality don’t you like in people?', start: 'لَا أُحِبُّ … لِأَنَّ …', model: 'لَا أُحِبُّ الكَذِبَ، لِأَنَّنِي لَا أَسْتَطِيعُ أَنْ أَثِقَ بِشَخْصٍ يَكْذِبُ.', modelEn: 'I don’t like lying, because I can’t trust someone who lies.' },
        { q: 'كَيْفَ تَغَيَّرَ شَكْلُكَ مُنْذُ كُنْتَ صَغِيرًا؟', en: 'How has your appearance changed since you were small?', start: 'كَانَ شَعْرِي … أَمَّا الآنَ فَـ…', model: 'كَانَ شَعْرِي طَوِيلًا وَأَشْقَرَ، أَمَّا الآنَ فَهُوَ قَصِيرٌ وَبُنِّيٌّ، وَصِرْتُ أَطْوَلَ مِنْ أَبِي!', modelEn: 'My hair used to be long and blond; now it is short and brown, and I am taller than my dad!' },
        { q: 'هَلْ تُشْبِهُ أَحَدًا فِي أُسْرَتِكَ؟', en: 'Do you look like anyone in your family?', start: 'أُشْبِهُ … فِي … لٰكِنَّ شَخْصِيَّتِي …', model: 'أُشْبِهُ أَبِي فِي شَكْلِي، لٰكِنَّ شَخْصِيَّتِي تُشْبِهُ شَخْصِيَّةَ أُمِّي، فَأَنَا هَادِئٌ مِثْلَهَا.', modelEn: 'I look like my dad, but my personality is like my mum’s — I am calm like her.' },
        { q: 'أَيَّ صِفَةٍ تُرِيدُ أَنْ تُطَوِّرَهَا فِي المُسْتَقْبَلِ؟', en: 'Which quality do you want to develop in future?', start: 'أُرِيدُ أَنْ أَكُونَ أَكْثَرَ … لِكَيْ …', model: 'أُرِيدُ أَنْ أَكُونَ أَكْثَرَ ثِقَةً بِنَفْسِي، لِكَيْ أَتَكَلَّمَ فِي المُقَابَلَاتِ بِدُونِ خَوْفٍ.', modelEn: 'I want to be more self-confident, so that I can speak in interviews without fear.' },
      ],
      foot: 'Develop: two or three sentences — appearance + personality, a reason, a past/present contrast and an example.',
      modelFoot: 'Description + reason + example = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الشَّخْصِيَّةُ وَالمُجْتَمَعُ', aim: 'a developed answer: opinion, comparison, concession and a conditional',
      qs: [
        { q: 'هَلِ الشَّخْصِيَّةُ أَهَمُّ مِنَ المَظْهَرِ؟', en: 'Is personality more important than looks?', start: 'أَعْتَقِدُ أَنَّ … لِأَنَّ …', model: 'أَعْتَقِدُ أَنَّ الشَّخْصِيَّةَ أَهَمُّ بِكَثِيرٍ، لِأَنَّ الجَمَالَ يَتَغَيَّرُ مَعَ العُمْرِ، أَمَّا الأَخْلَاقُ فَتَبْقَى.', modelEn: 'I think personality matters much more, because beauty changes with age, whereas character remains.' },
        { q: 'مَا صِفَاتُ القَائِدِ النَّاجِحِ؟', en: 'What are the qualities of a successful leader?', start: 'القَائِدُ النَّاجِحُ هُوَ الَّذِي …', model: 'القَائِدُ النَّاجِحُ هُوَ الَّذِي يَسْمَعُ لِلْآخَرِينَ، وَيَعْتَرِفُ بِأَخْطَائِهِ، وَلَا يَخَافُ مِنَ القَرَارَاتِ الصَّعْبَةِ.', modelEn: 'A successful leader is one who listens to others, admits mistakes and isn’t afraid of hard decisions.' },
        { q: 'هَلْ تَتَغَيَّرُ شَخْصِيَّةُ الإِنْسَانِ؟', en: 'Can a person’s personality change?', start: 'نَعَمْ، فَأَنَا مَثَلًا كُنْتُ … أَمَّا الآنَ …', model: 'نَعَمْ، فَأَنَا مَثَلًا كُنْتُ عَصَبِيًّا، أَمَّا الآنَ فَصِرْتُ أَهْدَأَ بَعْدَ أَنْ بَدَأْتُ أُمَارِسُ الرِّيَاضَةَ.', modelEn: 'Yes — I, for example, used to be short-tempered, but now I am calmer since I started exercising.' },
        { q: 'هَلْ تُعْطِي الصُّوَرُ عَلَى الإِنْتَرْنِتِ صُورَةً صَادِقَةً عَنِ النَّاسِ؟', en: 'Do online photos give an honest picture of people?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهَا تُظْهِرُ وُجُوهَهُمْ، غَيْرَ أَنَّهَا لَا تُظْهِرُ قُلُوبَهُمْ، كَمَا أَنَّ كَثِيرًا مِنْهَا مُعَدَّلٌ.', modelEn: 'It is true they show their faces, but they don’t show their hearts — and many are edited.' },
        { q: 'لَوْ كُنْتَ شَخْصِيَّةً فِي رِوَايَةٍ، كَيْفَ يَصِفُكَ الكَاتِبُ؟', en: 'If you were a character in a novel, how would the writer describe you?', start: 'لَوْ كُنْتُ …، لَوَصَفَنِي …', model: 'لَوْ كُنْتُ شَخْصِيَّةً فِي رِوَايَةٍ، لَوَصَفَنِي الكَاتِبُ بِأَنِّي الصَّدِيقُ الهَادِئُ الَّذِي يَحُلُّ مَشَاكِلَ الجَمِيعِ.', modelEn: 'If I were a character in a novel, the writer would describe me as the quiet friend who solves everyone’s problems.' },
      ],
      foot: 'Stretch: a comparative + ammā … fa-, hiya / huwa alladhī …, kuntu vs ṣirtu, a concession and law … la-.',
      modelFoot: 'Stretch: ahamm bi-kathīr, alladhī clauses, kuntu … ṣirtu, ṣaḥīḥun anna … ghayra anna, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I described appearance with adjectives that agree (m. / f.).' },
    { route: 'core', text: 'I described personality with two adjectives.' },
    { route: 'develop', text: 'I used laysa / lastu + accusative correctly.' },
    { route: 'develop', text: 'I used alladhī / allatī and gave an example.' },
    { route: 'stretch', text: 'I used a concession, kuntu … ṣirtu or law … la-.' },
  ],
};
speak.words[5] = w(6, 'لَيْسَ طَوِيلًا', 'he is not tall', [['she', 'لَيْسَتْ طَوِيلَةً'], ['I', 'لَسْتُ طَوِيلًا'], ['they', 'لَيْسُوا طِوَالًا']], { tag: 'laysa + acc.' });
speak.RP[3].tasks[4].help = 'لَوِ اسْتَطَعْتُ، لَأَصْبَحْتُ …';
speak.CONV[0].qs[4].start = 'أُعْجَبُ بِجَدِّي / بِأُمِّي … لِأَنَّ …';
speak.CONV[1].qs[2].start = 'كَانَ شَعْرِي … أَمَّا الآنَ فَهُوَ …';
speak.CONV[2].qs[4].start = 'لَوْ كُنْتُ …، لَوَصَفَنِي …';

const Q2_CORE = `مَرْحَبًا يَا نُورُ،
كَيْفَ حَالُكِ؟ عِنْدِي صَدِيقَةٌ جَدِيدَةٌ فِي المَدْرَسَةِ اسْمُهَا رَانْيَا. هِيَ طَوِيلَةٌ وَنَحِيفَةٌ، وَشَعْرُهَا أَسْوَدُ وَطَوِيلٌ، وَعَيْنَاهَا خَضْرَاوَانِ. تَلْبَسُ نَظَّارَةً صَغِيرَةً. رَانْيَا لَطِيفَةٌ وَذَكِيَّةٌ، لٰكِنَّهَا خَجُولَةٌ قَلِيلًا. هِيَ لَيْسَتْ مَغْرُورَةً أَبَدًا. أَمْسِ سَاعَدَتْنِي فِي وَاجِبِ الرِّيَاضِيَّاتِ، فَشَكَرْتُهَا كَثِيرًا. فِي نِهَايَةِ الأُسْبُوعِ سَنَذْهَبُ إِلَى المَكْتَبَةِ مَعًا. أَتَمَنَّى أَنْ تَتَعَرَّفِي إِلَيْهَا قَرِيبًا!
مَعَ السَّلَامَةِ،
لَيْلَى`;
const Q2_FULL = `عَزِيزَتِي نُورُ،
تَحِيَّةً طَيِّبَةً، وَبَعْدُ، فَأُرِيدُ أَنْ أُحَدِّثَكِ عَنْ رَانْيَا، الطَّالِبَةِ الجَدِيدَةِ الَّتِي أَصْبَحَتْ صَدِيقَتِي المُقَرَّبَةَ. هِيَ طَوِيلَةٌ وَنَحِيفَةٌ، شَعْرُهَا أَسْوَدُ طَوِيلٌ، وَعَيْنَاهَا خَضْرَاوَانِ تَخْتَبِئَانِ خَلْفَ نَظَّارَةٍ صَغِيرَةٍ. فِي البِدَايَةِ ظَنَنْتُ أَنَّهَا مَغْرُورَةٌ، لِأَنَّهَا لَا تَتَكَلَّمُ كَثِيرًا، لٰكِنِّي اكْتَشَفْتُ أَنَّهَا لَيْسَتْ مَغْرُورَةً، بَلْ خَجُولَةٌ فَقَطْ. وَهِيَ أَيْضًا ذَكِيَّةٌ وَكَرِيمَةٌ؛ فَأَمْسِ بَقِيَتْ مَعِي بَعْدَ الدَّوَامِ سَاعَةً كَامِلَةً لِتَشْرَحَ لِي دَرْسَ الكِيمْيَاءِ الصَّعْبَ، وَلَمْ تَطْلُبْ شَيْئًا. فِي نِهَايَةِ الأُسْبُوعِ سَنَزُورُ المَكْتَبَةَ العَامَّةَ مَعًا، وَإِذَا جِئْتِ لِزِيَارَتِي فِي الصَّيْفِ، فَسَأُعَرِّفُكِ إِلَيْهَا.
مَعَ مَحَبَّتِي،
لَيْلَى`;
const Q3A_CORE = `الشَّخْصُ الَّذِي أُعْجَبُ بِهِ كَثِيرًا هُوَ جَدِّي عَبْدُ اللّٰهِ. عُمْرُهُ سَبْعُونَ سَنَةً، وَهُوَ يَسْكُنُ مَعَنَا فِي البَيْتِ. جَدِّي طَوِيلٌ وَنَحِيفٌ، وَشَعْرُهُ أَبْيَضُ، وَلَهُ لِحْيَةٌ بَيْضَاءُ قَصِيرَةٌ. يَلْبَسُ نَظَّارَةً، وَيَمْشِي بِعَصًا خَشَبِيَّةٍ قَدِيمَةٍ، لِأَنَّ رِجْلَهُ تُؤْلِمُهُ أَحْيَانًا.
جَدِّي هَادِئٌ وَصَبُورٌ وَكَرِيمٌ. هُوَ لَيْسَ صَارِمًا أَبَدًا، بَلْ يَضْحَكُ كَثِيرًا وَيَحْكِي لَنَا النُّكَتَ. كُلُّ النَّاسِ فِي الحَيِّ يُحِبُّونَهُ، لِأَنَّهُ يُسَاعِدُ الجَمِيعَ.
عِنْدَمَا كُنْتُ صَغِيرًا، كَانَ جَدِّي يَأْخُذُنِي إِلَى المَسْجِدِ كُلَّ يَوْمِ جُمُعَةٍ. وَفِي السَّنَةِ المَاضِيَةِ عَلَّمَنِي كَيْفَ أَزْرَعُ الطَّمَاطِمَ فِي الحَدِيقَةِ. كَانَ ذٰلِكَ مُمْتِعًا جِدًّا، وَأَكَلْنَا الطَّمَاطِمَ مَعًا فِي الصَّيْفِ، وَكَانَتْ أَلَذَّ مِنْ طَمَاطِمِ السُّوقِ.
فِي رَأْيِي، جَدِّي أَحْسَنُ رَجُلٍ فِي العَالَمِ. فِي المُسْتَقْبَلِ أُرِيدُ أَنْ أَكُونَ صَبُورًا وَكَرِيمًا مِثْلَهُ، وَسَأَزُورُهُ كُلَّ يَوْمٍ عِنْدَمَا أَكْبَرُ.`;
const Q3A_FULL = `هُنَاكَ أَشْخَاصٌ يَتْرُكُونَ أَثَرًا فِي حَيَاتِنَا دُونَ أَنْ يَشْعُرُوا، وَمِنْ هٰؤُلَاءِ مُدَرِّبِي فِي نَادِي السِّبَاحَةِ، الكَابْتِنُ مَازِنٌ. لَيْسَ طَوِيلًا وَلَا قَوِيَّ البِنْيَةِ كَمَا يَتَخَيَّلُ النَّاسُ المُدَرِّبِينَ، بَلْ هُوَ قَصِيرٌ وَنَحِيفٌ، وَلَهُ ابْتِسَامَةٌ لَا تُفَارِقُ وَجْهَهُ، وَشَعْرٌ رَمَادِيٌّ قَصِيرٌ، وَصَوْتٌ هَادِئٌ يُطَمْئِنُ الصِّغَارَ قَبْلَ السِّبَاقَاتِ.
أَكْثَرُ مَا يُمَيِّزُهُ صَبْرُهُ الكَبِيرُ؛ فَهُوَ لَا يَرْفَعُ صَوْتَهُ أَبَدًا، حَتَّى عِنْدَمَا نُخْطِئُ المَرَّةَ تِلْوَ الأُخْرَى، أَمَّا عِنْدَمَا نَنْجَحُ، فَيَفْرَحُ كَأَنَّهُ هُوَ الَّذِي فَازَ، وَيَحْكِي عَنَّا لِكُلِّ أَوْلِيَاءِ الأُمُورِ بِفَخْرٍ.
أَتَذَكَّرُ يَوْمًا فِي الشِّتَاءِ المَاضِي، عِنْدَمَا خَسِرْتُ سِبَاقًا مُهِمًّا وَبَكَيْتُ أَمَامَ الجَمِيعِ. لَمْ يَلُمْنِي، بَلْ جَلَسَ بِجَانِبِي وَقَالَ: «الخَسَارَةُ دَرْسٌ، وَلَيْسَتْ نِهَايَةً». بَعْدَ شَهْرَيْنِ فُزْتُ بِالمَرْكَزِ الأَوَّلِ فِي البُطُولَةِ نَفْسِهَا، وَكَانَ هُوَ أَوَّلَ مَنْ عَانَقَنِي.
صَحِيحٌ أَنَّ المُدَرِّبَ يُعَلِّمُنَا السِّبَاحَةَ، غَيْرَ أَنَّ الكَابْتِنَ مَازِنًا عَلَّمَنِي الصَّبْرَ وَالثِّقَةَ بِالنَّفْسِ. وَلَوْ أَصْبَحْتُ مُدَرِّبًا فِي يَوْمٍ مِنَ الأَيَّامِ، لَعَامَلْتُ طُلَّابِي كَمَا عَامَلَنِي.`;
const Q3B_FULL = `نَعِيشُ اليَوْمَ فِي عَالَمٍ يَهْتَمُّ بِالمَظْهَرِ اهْتِمَامًا كَبِيرًا؛ فَالإِعْلَانَاتُ وَوَسَائِلُ التَّوَاصُلِ تُظْهِرُ وُجُوهًا مِثَالِيَّةً، مِمَّا يَجْعَلُ كَثِيرًا مِنَ الشَّبَابِ غَيْرَ رَاضِينَ عَنْ أَشْكَالِهِمْ، وَيُنْفِقُونَ أَمْوَالًا كَثِيرَةً عَلَى المَلَابِسِ وَمُسْتَحْضَرَاتِ التَّجْمِيلِ.
فِي المَاضِي كَانَ النَّاسُ يَحْكُمُونَ عَلَى الشَّخْصِ مِنْ أَخْلَاقِهِ وَسُمْعَتِهِ فِي الحَيِّ، أَمَّا اليَوْمَ فَكَثِيرًا مَا يَحْكُمُونَ عَلَيْهِ مِنْ صُورَةٍ وَاحِدَةٍ عَلَى الإِنْتَرْنِتِ، قَبْلَ أَنْ يَسْمَعُوا كَلِمَةً مِنْهُ، أَوْ يَعْرِفُوا شَيْئًا عَنْ قِصَّتِهِ وَظُرُوفِهِ.
تَعَلَّمْتُ هٰذَا الدَّرْسَ بِنَفْسِي؛ فَعِنْدَمَا جَاءَتْ طَالِبَةٌ جَدِيدَةٌ إِلَى صَفِّنَا تَلْبَسُ مَلَابِسَ بَسِيطَةً، لَمْ يَهْتَمَّ بِهَا أَحَدٌ فِي البِدَايَةِ. ثُمَّ اكْتَشَفْنَا أَنَّهَا أَذْكَى طَالِبَةٍ فِي المَدْرَسَةِ، وَأَنَّهَا تَتَطَوَّعُ كُلَّ أُسْبُوعٍ فِي دَارٍ لِلْمُسِنِّينَ، فَخَجِلْنَا جَمِيعًا مِنْ حُكْمِنَا السَّرِيعِ عَلَيْهَا.
صَحِيحٌ أَنَّ المَظْهَرَ المُرَتَّبَ يَتْرُكُ انْطِبَاعًا جَيِّدًا، غَيْرَ أَنَّ الشَّخْصِيَّةَ هِيَ الَّتِي تَبْقَى فِي ذَاكِرَةِ النَّاسِ. وَلَوْ تَعَلَّمْنَا أَنْ نَسْمَعَ قَبْلَ أَنْ نَحْكُمَ، لَاكْتَشَفْنَا كُنُوزًا كَثِيرَةً فِي الأَشْخَاصِ مِنْ حَوْلِنَا.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a “find a friend” profile, write an email describing a new friend, and write an extended piece about someone you admire or about looks and personality.',
  lift: [
    { ar: 'الطَّالِبَةُ الجَدِيدَةُ الَّتِي أَصْبَحَتْ صَدِيقَتِي', en: 'the new student who became my friend' },
    { ar: 'لَيْسَتْ مَغْرُورَةً، بَلْ خَجُولَةٌ فَقَطْ', en: 'she isn’t arrogant — just shy' },
    { ar: 'ظَنَنْتُ أَنَّهَا … لٰكِنِّي اكْتَشَفْتُ أَنَّهَا …', en: 'I thought she was … but I discovered she was …' },
  ],
  checkTip: 'Check: every adjective agrees with the person (ṭawīl / ṭawīla); laysa / laysat + accusative (laysat maghrūratan); alladhī for a man, allatī for a woman; dual eyes (ʿaynāhā).',
  FORM: {
    title: 'School buddy-scheme profile', ar: 'مَلَفُّ بَرْنَامَجِ الأَصْدِقَاءِ',
    fields: [
      { core: true, ar: 'الاسْمُ وَالصَّفُّ', en: 'Name and class', model: 'لَيْلَى عُمَرُ، الصَّفُّ العَاشِرُ', modelEn: 'Layla Omar, Year 10' },
      { core: true, ar: 'لَوْنُ الشَّعْرِ', en: 'Hair colour', model: 'بُنِّيٌّ', modelEn: 'brown' },
      { core: true, ar: 'لَوْنُ العَيْنَيْنِ', en: 'Eye colour', model: 'عَسَلِيَّتَانِ', modelEn: 'hazel' },
      { core: true, ar: 'الطُّولُ (طَوِيلٌ / قَصِيرٌ / مُتَوَسِّطٌ)', en: 'Height (tall / short / medium)', model: 'مُتَوَسِّطَةُ الطُّولِ', modelEn: 'medium height' },
      { core: true, ar: 'ثَلَاثُ صِفَاتٍ لِشَخْصِيَّتِكَ', en: 'Three personality adjectives', model: 'مَرِحَةٌ وَصَبُورَةٌ وَمُنَظَّمَةٌ', modelEn: 'cheerful, patient, organised' },
      { core: true, ar: 'صِفَةٌ لَسْتَ عَلَيْهَا', en: 'A quality you are NOT', model: 'لَسْتُ كَسُولَةً', modelEn: 'I am not lazy' },
      { ar: 'نَوْعُ الصَّدِيقِ الَّذِي تَبْحَثُ عَنْهُ', en: 'The kind of friend you are looking for', model: 'صَدِيقَةٌ صَادِقَةٌ تُحِبُّ القِرَاءَةَ', modelEn: 'an honest friend who loves reading' },
      { ar: 'جُمْلَةٌ: مَاذَا يَقُولُ عَنْكَ أَصْدِقَاؤُكَ؟', en: 'ONE sentence: what your friends say about you', model: 'يَقُولُ أَصْدِقَائِي إِنِّي الصَّدِيقَةُ الَّتِي تَسْمَعُ دَائِمًا.', modelEn: 'My friends say I am the friend who always listens.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with allatī / alladhī.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 3 is a dual (ʿasaliyyatāni). Box 6 = lastu + accusative.',
  },
  Q2: {
    short: 'an email describing a new friend', title: 'Question 2: my new friend', ar: 'رِسَالَةٌ عَنْ صَدِيقَتِي الجَدِيدَةِ',
    task: 'You have made a new friend at school. Write an email in Arabic to your friend of about 80–90 words. You must include: • what your new friend looks like • what she is like (personality) • something she did for you recently • what you will do together soon.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Feminine agreement every time.', 'laysat + accusative, or allatī.', 'A past AND a future sentence.'],
    phrases: [['هِيَ طَوِيلَةٌ وَشَعْرُهَا …', 'she is tall and her hair is …'], ['هِيَ لَيْسَتْ … بَلْ …', 'she isn’t … but rather …'], ['أَمْسِ سَاعَدَتْنِي فِي …', 'yesterday she helped me with …'], ['سَنَذْهَبُ مَعًا إِلَى …', 'we will go together to …']],
    rubric: [
      ['task', 'تَعَرَّفْتِ إِلَى صَدِيقَةٍ جَدِيدَةٍ. اكْتُبِي رِسَالَةً إِلَى صَدِيقَتِكِ (٨٠–٩٠ كَلِمَةً).', 'You made a new friend: write to your friend (80–90 words).'],
      ['1', 'كَيْفَ شَكْلُ صَدِيقَتِكِ الجَدِيدَةِ؟', 'What she looks like'],
      ['2', 'كَيْفَ شَخْصِيَّتُهَا؟', 'Her personality'],
      ['3', 'مَاذَا فَعَلَتْ لَكِ مُؤَخَّرًا؟', 'Something she did for you recently'],
      ['4', 'مَاذَا سَتَفْعَلَانِ مَعًا قَرِيبًا؟', 'What you will do together soon'],
    ],
    qwords: 'كَيْفَ (what … like) · مَاذَا (what) — bullet 3 is PAST (faʿalat = she did); bullet 4 is the DUAL future (satafʿalāni = you two will do)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكِ؟', 'Hello …, how are you?'],
      ['1', 'عِنْدِي صَدِيقَةٌ جَدِيدَةٌ اسْمُهَا ______ . هِيَ ______ ، وَشَعْرُهَا ______ .', 'I have a new friend called … She is …, her hair is …'],
      ['2', 'هِيَ ______ وَ ______ ، لٰكِنَّهَا ______ .', 'She is … and …, but she is …'],
      ['3', 'أَمْسِ ______ ، فَشَكَرْتُهَا.', 'Yesterday she …, so I thanked her.'],
      ['4', 'فِي نِهَايَةِ الأُسْبُوعِ سَنَذْهَبُ إِلَى ______ مَعًا.', 'At the weekend we will go to … together.'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Nour, how are you? I have a new friend at school called Rania. She is tall and thin, with long black hair and green eyes. She wears small glasses. Rania is kind and clever, but a little shy. She isn’t arrogant at all. Yesterday she helped me with my maths homework, so I thanked her a lot. At the weekend we will go to the library together. I hope you meet her soon! Goodbye, Layla.”',
      find: ['هِيَ طَوِيلَةٌ', 'عَيْنَاهَا خَضْرَاوَانِ', 'لَيْسَتْ مَغْرُورَةً', 'سَنَذْهَبُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Nour, greetings. I want to tell you about Rania, the new student who has become my close friend. She is tall and thin, with long black hair, and her green eyes hide behind small glasses. At first I thought she was arrogant because she doesn’t talk much, but I discovered she isn’t arrogant — just shy. She is also clever and generous: yesterday she stayed with me for a whole hour after school to explain the difficult chemistry lesson, and asked for nothing. At the weekend we will visit the public library together, and if you come to see me in the summer, I will introduce you to her. With love, Layla.”',
      find: ['الَّتِي أَصْبَحَتْ', 'ظَنَنْتُ أَنَّهَا', 'لَيْسَتْ مَغْرُورَةً، بَلْ', 'إِذَا جِئْتِ … فَسَأُعَرِّفُكِ'],
    },
  },
  Q3: {
    a: { title: 'شَخْصٌ أُعْجَبُ بِهِ', en: 'Someone I admire', bullets: 'مَنْ هُوَ؟ وَكَيْفَ شَكْلُهُ؟ · شَخْصِيَّتُهُ وَصِفَاتُهُ · مَوْقِفٌ لَا تَنْسَاهُ مَعَهُ · مَاذَا تَعَلَّمْتَ مِنْهُ؟', bulletsEn: 'Who they are; what they look like · their personality · a moment you won’t forget · what you learned from them' },
    b: { title: 'المَظْهَرُ أَمِ الشَّخْصِيَّةُ؟', en: 'Looks or personality?', bullets: 'اهْتِمَامُ النَّاسِ بِالمَظْهَرِ اليَوْمَ · المَاضِي وَالحَاضِرُ · تَجْرِبَةٌ عَلَّمَتْكَ دَرْسًا · رَأْيُكَ وَاقْتِرَاحُكَ', bulletsEn: 'People’s focus on looks today · past and present · an experience that taught you a lesson · your opinion and suggestion' },
    plan: [
      'Who + appearance — huwa / hiya …, shaʿruhu …, ʿaynāhu …: every adjective agrees.',
      'Personality — two or three traits, laysa … bal …, an example (mathalan …).',
      'A moment — ʿindamā …, a past story; Stretch: lam yalumnī, bal …',
      'Lesson + future — taʿallamtu …, sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'جَدِّي طَوِيلٌ، وَشَعْرُهُ أَبْيَضُ.', en: 'present: my grandfather is tall, and his hair is white.' },
      { ar: 'عِنْدَمَا كُنْتُ صَغِيرًا، كَانَ يَأْخُذُنِي إِلَى المَسْجِدِ.', en: 'past: when I was small, he used to take me to the mosque.' },
      { ar: 'سَأَكُونُ صَبُورًا مِثْلَهُ.', en: 'future: I will be patient like him.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Grandpa Abdullah, 70, lives with us; tall, thin, white hair and a short white beard; glasses and an old wooden stick because his leg sometimes hurts → calm, patient, generous; not strict at all — he laughs and tells jokes; everyone in the area loves him because he helps everyone → when I was small he took me to the mosque every Friday; last year he taught me to grow tomatoes, and we ate them together in summer — tastier than shop tomatoes → the best man in the world; I want to be patient and generous like him, and will visit him every day when I grow up.', find: ['الشَّخْصُ الَّذِي أُعْجَبُ بِهِ', 'لَيْسَ صَارِمًا أَبَدًا، بَلْ', 'كَانَ جَدِّي يَأْخُذُنِي', 'أُرِيدُ أَنْ أَكُونَ'], notes: 'Core model: alladhī, appearance with colours (abyaḍ / bayḍāʾ), laysa … bal, kāna + present, an opinion and future.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Some people leave a mark without knowing — like my swimming coach, Captain Mazin: not tall or muscular as people imagine coaches, but short and thin with a constant smile, short grey hair and a calm voice that reassures the little ones before races → his patience stands out: he never raises his voice even when we keep making mistakes; as for when we succeed, he celebrates as if he had won, and tells all the parents about us with pride → last winter I lost an important race and cried in front of everyone; he didn’t blame me but sat beside me: “Losing is a lesson, not an end.” Two months later I won first place in the same championship, and he was the first to hug me → it is true a coach teaches swimming, but he taught me patience and self-confidence; “if I became a coach one day, I would treat my students as he treated me”.', find: ['لَيْسَ طَوِيلًا وَلَا', 'أَمَّا عِنْدَمَا … فَيَفْرَحُ كَأَنَّهُ', 'لَمْ يَلُمْنِي، بَلْ', 'لَوْ أَصْبَحْتُ … لَعَامَلْتُ'], notes: 'Full-mark model: dūna an, laysa … wa-lā … bal, a superlative-style focus (akthar mā yumayyizuhu), ammā … fa-, kaʾanna, lam + jussive, direct speech, a concession and law … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'looks or personality?', text: Q3B_FULL, en: 'Today’s world cares greatly about looks: adverts and social media show perfect faces, leaving many young people unhappy with how they look and spending a lot on clothes and cosmetics → in the past people judged someone by character and reputation in the neighbourhood; as for today, they often judge from one online photo before hearing a word or knowing their story → my lesson: a new girl in simple clothes was ignored at first, then we found she was the cleverest student in school and volunteers weekly in a care home — we were all ashamed of our quick judgement → it is true a neat appearance makes a good impression, but personality stays in people’s memory; “if we learned to listen before judging, we would discover many treasures in the people around us”.', find: ['مِمَّا يَجْعَلُ', 'أَمَّا اليَوْمَ فَكَثِيرًا مَا', 'أَذْكَى طَالِبَةٍ', 'لَوْ تَعَلَّمْنَا … لَاكْتَشَفْنَا'], notes: 'Full-mark model for the Stretch title: mimmā, kāna + present vs ammā … fa-, qabla an, a superlative, a concession with hiya allatī and a conditional.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; colours and adjectives agree.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: laysat + accusative, or allatī.' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: a concession, laysa … bal or law … la-.' },
  ],
};

module.exports = { speak, write };
