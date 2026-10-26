'use strict';
/* Apply Workshop · F1-W05 · F1-L09 (handwriting and dictation: WRITE + L/D/J/M/S) + F1-L10 (reading unvowelled text: SCOPE). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f1-w05', pair: ['f1-l09', 'f1-l10'], allowTatweel: true,
  title: 'Sign Makers for Our Town', arShort: 'نَصْنَعُ لَافِتَاتِ المَدِينَةِ',
  focus: 'Students join clear handwriting with reading unvowelled signs: they read real-style town signs without vowels (SCOPE), match them to their vowelled forms, then make their own signs in clear handwriting, check each other with the L · D · J · M · S codes and take a sign dictation.',
  sort: [
    { ar: 'كِتَابٌ', cat: 0 }, { ar: 'قَلَمٌ', cat: 0 }, { ar: 'مُعَلِّمٌ', cat: 0 }, { ar: 'عَيْنٌ', cat: 0 },
    { ar: 'مطعم', cat: 1 }, { ar: 'مخرج', cat: 1 }, { ar: 'فندق', cat: 1 }, { ar: 'مغلق', cat: 1 },
  ],
  sortTitle: 'With marks or without?',
  dialogue: {
    title: 'What does the sign say?', ar: 'مَاذَا تَقُولُ اللَّافِتَةُ؟',
    lines: [
      ['A', 'اقْرَأِ اللَّافِتَةَ: مطعم.', 'Read the sign: (restaurant, no vowels).'],
      ['B', 'مَطْعَمٌ — أَعْرِفُ: مَ، ثُمَّ طْ، ثُمَّ عَمٌ.', 'maṭʿam — I know it: ma, then ṭ, then ʿam.'],
      ['A', 'وَهٰذِهِ؟ مخرج.', 'And this one? (exit, no vowels).'],
      ['B', 'مَخْرَجٌ — هُنَا البَابُ لِلْخُرُوجِ.', 'makhraj — the door to go out is here.'],
      ['A', 'اكْتُبْهَا الآنَ بِخَطٍّ وَاضِحٍ.', 'Now write it in clear handwriting.'],
      ['B', 'مخرج — النُّقْطَةُ فَوْقَ الخَاءِ، وَالرَّاءُ لَا تَتَّصِلُ.', 'makhraj — the dot is above the khāʾ, and the rāʾ does not join.'],
    ],
    notes: 'Reading the unvowelled sign with SCOPE comes from F1-L10; writing it clearly and checking D (dots) and J (joins) from F1-L09.',
  },
  card: {
    title: 'Reading card — signs around town', ar: 'بِطَاقَةُ القِرَاءَةِ', you: 'the reader', them: 'the sign holder',
    mix: 'reading unvowelled signs with SCOPE (F1-L10) and checking handwriting with L · D · J · M · S (F1-L09)',
    tasks: [
      { ex: 'مدرسة', task: 'Read the sign; give the vowelled form.', plan: 'chunk the -a ending', model: 'مَدْرَسَةٌ', modelEn: 'madrasa — school.' },
      { ex: 'مستشفى', task: 'Read it; what is it?', plan: 'starts like the mosque sign?', model: 'مُسْتَشْفًى', modelEn: 'mustashfā — hospital.' },
      { ex: 'محطة القطار', task: 'Read both words.', plan: 'al- + …', model: 'مَحَطَّةُ القِطَارِ', modelEn: 'maḥaṭṭat al-qiṭār — the train station.' },
      { ex: 'فَلَمٌ', task: 'A slip! Which code — L, D, J, M or S?', plan: 'dots', model: 'قَلَمٌ', modelEn: 'D — qāf has TWO dots: qalam (pen).' },
      { unexpected: true, ex: 'مغلق', task: 'Read it: can we go in?', plan: 'predict from context', model: 'مُغْلَقٌ — لَا', modelEn: 'mughlaq — closed. No, we cannot go in.' },
    ],
  },
  talk: {
    title: 'Sign race', ar: 'سِبَاقُ اللَّافِتَاتِ',
    text: 'In 30 seconds, read as many unvowelled signs as you can from the Step 1 slides. For each one, say the vowelled word, then what it is in English. The partner counts and checks.',
    routes: { core: 'Read four signs you know well.', develop: 'Read six signs and say what each one is.', stretch: 'Read every sign, then say one that has two possible readings.' },
  },
  task: {
    title: 'Make your own town signs', ar: 'أَصْنَعُ لَافِتَاتٍ',
    text: 'In your book: • copy four signs WITHOUT vowels, in your clearest handwriting • under each one, write it WITH vowels • DICTATION: your buddy reads four sign words — write them without vowels • swap books and check with the codes L · D · J · M · S • fix one thing.',
    range: [8, 50],
    phrases: [['مطعم · مَطْعَمٌ', 'restaurant (sign · vowelled)'], ['مدخل · مخرج', 'entrance · exit'], ['ال · ة · ات', 'chunks you already know'], ['خَطٌّ وَاضِحٌ', 'clear handwriting — check L · D · J · M · S']],
    coreFrames: [
      { ar: 'مطعم ← مَطْعَمٌ ______', en: 'Copy the sign and its vowelled form.' },
      { ar: 'مدرسة ← مَدْرَسَةٌ ______', en: 'Copy the sign and its vowelled form.' },
      { ar: 'مخرج ← مَخْرَجٌ ______', en: 'Copy the sign and its vowelled form.' },
      { ar: 'مكتبة ← مَكْتَبَةٌ ______', en: 'Copy the sign and its vowelled form.' },
    ],
    developFrames: [
      { ar: 'إِمْلَاءٌ: ١ ______ ٢ ______ ٣ ______', en: 'Dictation: write the signs without vowels.' },
      { ar: 'فندق ← ______', en: 'Add the vowels yourself.' },
    ],
    bank: ['مطعم · مدرسة', 'مستشفى · مسجد', 'محطة · شارع', 'بنك · فندق', 'مكتبة', 'مدخل · مخرج', 'مغلق', 'كِتَابٌ · قَلَمٌ'],
    model: {
      text: `مطعم · مدرسة · مخرج · مكتبة
مَطْعَمٌ · مَدْرَسَةٌ · مَخْرَجٌ · مَكْتَبَةٌ
إِمْلَاءٌ: فندق · بنك · مسجد · مغلق`,
      en: 'Line 1: four signs without vowels, written clearly. Line 2: the same signs with vowels. Line 3: a dictation of four sign words. Check: D — the dots on ق and خ; J — no join after د and ر.',
      find: ['مخرج', 'مَطْعَمٌ', 'مَكْتَبَةٌ', 'فندق'],
    },
  },
});
