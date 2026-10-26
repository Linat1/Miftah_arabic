'use strict';
/* Apply Workshop · F5-W05 · F5-L09 (at the doctor and pharmacy) + F5-L10 (healthy habits and advice). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f5-w05', pair: ['f5-l09', 'f5-l10'],
  title: 'Health Week: Ask the Doctor', arShort: 'أُسْبُوعُ الصِّحَّةِ: اسْأَلِ الطَّبِيبَ',
  focus: 'Students join the doctor’s visit with healthy habits: during the school health week a student who feels tired sees the doctor, explains the problem, receives medicine instructions and advice on habits (sleep, water, exercise), and writes a health plan that uses both lessons.',
  dialogue: {
    title: 'At the health-week clinic', ar: 'فِي عِيَادَةِ أُسْبُوعِ الصِّحَّةِ',
    lines: [
      ['A', 'مَاذَا بِكِ؟', 'What is wrong (girl)?'],
      ['B', 'أَشْعُرُ بِالتَّعَبِ، وَعِنْدِي صُدَاعٌ مُنْذُ ثَلَاثَةِ أَيَّامٍ.', 'I feel tired, and I have had a headache for three days.'],
      ['A', 'كَمْ سَاعَةً تَنَامِينَ؟', 'How many hours do you sleep?'],
      ['B', 'سِتَّ سَاعَاتٍ فَقَطْ، لِأَنِّي أَسْهَرُ أَمَامَ الشَّاشَةِ.', 'Only six hours, because I stay up late in front of the screen.'],
      ['A', 'يَجِبُ أَنْ تَنَامِي مُبَكِّرًا، وَاشْرَبِي مَاءً كَافِيًا.', 'You must sleep early, and drink enough water.'],
      ['A', 'وَخُذِي حَبَّةً وَاحِدَةً مَرَّتَيْنِ فِي اليَوْمِ. وَمِنَ الأَفْضَلِ أَنْ تَمْشِي كُلَّ يَوْمٍ.', 'And take one tablet twice a day. And it is better to walk every day.'],
    ],
    notes: 'The problem, imperatives to a girl (اشْرَبِي · خُذِي) and dosage (مَرَّتَيْنِ فِي اليَوْمِ) come from F5-L09; habits and gentle advice (أَسْهَرُ · مِنَ الأَفْضَلِ أَنْ) from F5-L10. Here the doctor speaks to a girl: تَنَامِي · تَمْشِي (feminine after أَنْ).',
  },
  card: {
    title: 'Role-play card — seeing the doctor', ar: 'عِنْدَ الطَّبِيبِ', you: 'the patient', them: 'the doctor',
    mix: 'explaining a problem and understanding medicine instructions (F5-L09) with habits and advice: يَجِبُ أَنْ · مِنَ الأَفْضَلِ أَنْ · لَا يَجِبُ أَنْ (F5-L10)',
    tasks: [
      { ex: 'مَاذَا بِكَ؟', task: 'Explain the problem and since when.', plan: 'مَاذَا ← عِنْدِي … مُنْذُ …', model: 'عِنْدِي أَلَمٌ فِي المَعِدَةِ مُنْذُ يَوْمَيْنِ.', modelEn: 'I have had a stomach ache for two days.' },
      { ex: 'مَاذَا تَأْكُلُ وَتَشْرَبُ عَادَةً؟', task: 'Describe one healthy and one unhealthy habit.', plan: 'مَاذَا ← آكُلُ … ، لٰكِنِّي أَشْرَبُ …', model: 'آكُلُ الفَاكِهَةَ، لٰكِنِّي أَشْرَبُ مَشْرُوبَاتٍ غَازِيَّةً كَثِيرًا.', modelEn: 'I eat fruit, but I drink a lot of fizzy drinks.' },
      { ex: 'هٰذَا الدَّوَاءُ. خُذْهُ ثَلَاثَ مَرَّاتٍ فِي اليَوْمِ.', task: 'Check the instruction: how often?', plan: 'كَمْ ← كَمْ مَرَّةً …؟ / ثَلَاثَ مَرَّاتٍ؟', model: 'عَفْوًا، كَمْ مَرَّةً فِي اليَوْمِ؟ ثَلَاثَ مَرَّاتٍ، بَعْدَ الأَكْلِ؟', modelEn: 'Sorry, how many times a day? Three times, after eating?' },
      { ex: 'مَاذَا يَجِبُ أَنْ تَفْعَلَ الآنَ؟', task: 'Repeat two pieces of advice.', plan: 'مَاذَا ← يَجِبُ أَنْ … وَمِنَ الأَفْضَلِ أَنْ …', model: 'يَجِبُ أَنْ أَسْتَرِيحَ، وَمِنَ الأَفْضَلِ أَنْ أَشْرَبَ مَاءً كَافِيًا.', modelEn: 'I must rest, and it is better to drink enough water.' },
      { unexpected: true, ex: 'وَأَيْنَ تَشْتَرِي الدَّوَاءَ؟', task: 'Answer and say thank you.', plan: 'أَيْنَ ← مِنَ الصَّيْدَلِيَّةِ …', model: 'مِنَ الصَّيْدَلِيَّةِ بِجَانِبِ المَدْرَسَةِ. شُكْرًا جَزِيلًا يَا دُكْتُورُ.', modelEn: 'From the pharmacy next to the school. Thank you very much, doctor.' },
    ],
    girl: 'مَاذَا بِكِ؟ · خُذِيهِ · مَاذَا يَجِبُ أَنْ تَفْعَلِي؟',
  },
  talk: {
    title: 'Doctor for a day: my health advice', ar: 'طَبِيبٌ لِيَوْمٍ وَاحِدٍ',
    text: 'Talk for 30–45 seconds as a doctor giving advice to a tired student: what they must do, what is better to do, and what they should not do — with a reason. Then say which healthy habits you already have.',
    routes: {
      core: 'يَجِبُ أَنْ … · اشْرَبْ … · اسْتَرِحْ …',
      develop: 'Add مِنَ الأَفْضَلِ أَنْ … and لَا يَجِبُ أَنْ …',
      stretch: 'Give reasons and results: لِأَنَّ … · لِذٰلِكَ … — and dosage: … مَرَّاتٍ فِي اليَوْمِ.',
    },
    phrases: [['يَجِبُ أَنْ …', 'you must …'], ['مِنَ الأَفْضَلِ أَنْ …', 'it is better to …'], ['لَا يَجِبُ أَنْ …', 'you should not …'], ['خُذِ الدَّوَاءَ … مَرَّاتٍ فِي اليَوْمِ', 'take the medicine … times a day']],
  },
  task: {
    title: 'My health plan after the doctor', ar: 'خُطَّتِي الصِّحِّيَّةُ',
    text: 'Write a note (about 45–65 words) for your family after seeing the doctor. Include: • the problem and since when • the medicine and how often • two pieces of advice from the doctor • one unhealthy habit you will stop, with a reason • two healthy habits you will start.',
    range: [40, 85],
    phrases: [['ذَهَبْتُ إِلَى الطَّبِيبِ لِأَنَّ عِنْدِي …', 'I went to the doctor because I have …'], ['قَالَ الطَّبِيبُ: يَجِبُ أَنْ …', 'the doctor said: I must …'], ['آخُذُ الدَّوَاءَ … مَرَّاتٍ فِي اليَوْمِ', 'I take the medicine … times a day'], ['مِنَ الآنَ سَأَمْشِي … · لَنْ أَسْهَرَ', 'from now on I will walk … · I will not stay up late']],
    coreFrames: [
      { ar: 'ذَهَبْتُ إِلَى الطَّبِيبِ لِأَنَّ عِنْدِي ______ .', en: 'I went to the doctor because I have …' },
      { ar: 'مُنْذُ ______ .', en: 'Since …' },
      { ar: 'آخُذُ الدَّوَاءَ ______ مَرَّاتٍ فِي اليَوْمِ.', en: 'I take the medicine … times a day.' },
      { ar: 'قَالَ الطَّبِيبُ: يَجِبُ أَنْ ______ .', en: 'The doctor said: I must …' },
      { ar: 'وَمِنَ الأَفْضَلِ أَنْ ______ .', en: 'And it is better to …' },
    ],
    developFrames: [
      { ar: 'لَنْ ______ لِأَنَّ ______ .', en: 'I will not … because …' },
      { ar: 'مِنَ الآنَ سَأَمْشِي ______ وَسَأَنَامُ ______ .', en: 'From now on I will walk … and sleep …' },
    ],
    bank: ['دَوَاءٌ · حُبُوبٌ', 'صَيْدَلِيَّةٌ', 'مَرَّتَيْنِ · ثَلَاثَ مَرَّاتٍ', 'يَجِبُ أَنْ', 'مِنَ الأَفْضَلِ أَنْ', 'لَا يَجِبُ أَنْ', 'أَسْتَرِيحَ · أَنَامَ مُبَكِّرًا', 'مَاءً كَافِيًا'],
    model: {
      text: 'ذَهَبْتُ إِلَى الطَّبِيبِ لِأَنَّ عِنْدِي صُدَاعًا مُنْذُ ثَلَاثَةِ أَيَّامٍ، وَأَشْعُرُ بِالتَّعَبِ. آخُذُ الدَّوَاءَ مَرَّتَيْنِ فِي اليَوْمِ بَعْدَ الأَكْلِ. قَالَ الطَّبِيبُ: يَجِبُ أَنْ تَنَامَ مُبَكِّرًا، وَمِنَ الأَفْضَلِ أَنْ تَشْرَبَ مَاءً كَافِيًا. لَنْ أَسْهَرَ أَمَامَ الشَّاشَةِ لِأَنَّ ذٰلِكَ يُتْعِبُ عَيْنَيَّ. مِنَ الآنَ سَأَمْشِي كُلَّ يَوْمٍ، وَسَآكُلُ الفَاكِهَةَ وَالخَضْرَوَاتِ.',
      en: '“I went to the doctor because I have had a headache for three days, and I feel tired. I take the medicine twice a day after eating. The doctor said: you must sleep early, and it is better to drink enough water. I will not stay up late in front of the screen because it tires my eyes. From now on I will walk every day, and I will eat fruit and vegetables.”',
      find: ['مُنْذُ ثَلَاثَةِ أَيَّامٍ', 'مَرَّتَيْنِ فِي اليَوْمِ', 'مِنَ الأَفْضَلِ أَنْ', 'لَنْ أَسْهَرَ'],
    },
  },
});
