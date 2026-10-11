'use strict';
/* P6-L12 · Celebration — Reflection and the Road Ahead — website: Pathways › Progression › P6 › P6-L12 (from F1 to P6 — the distance, name the
 * journey, Arabic in the wild — three free-communication options, free Arabic writing with a model letter to a future student, the
 * achievement-certificate sentence, the road ahead, the closing panel and the final reflection). Website panels, fields, cards, writing task,
 * model and exit frames used as published, with waṣl alif shown without a kasra. Teacher-made: the Do Now, the two extra journey rows, the
 * starter lines for each option, the English of the model, the routes and the closing celebration. This is the final lesson of the programme:
 * there is no preparation slide. */
const P = require('./p6-common');
const { q } = P;

const meta = P.meta('P6')({
  n: 12, fileTitle: 'Celebration_and_the_Road_Ahead', chip: 'IGCSE Bridge',
  title: 'Celebration — Reflection and the Road Ahead', arabic: 'الاحْتِفَالُ وَالتَّأَمُّلُ وَالطَّرِيقُ إِلَى الأَمَامِ',
  focus: 'Celebrate three years of Arabic: measure the distance from the first letter to the formal argument, produce free Arabic with no mark scheme, write your certificate sentence, and look at the doors Arabic opens next.',
  icon: 'FaTrophy', iconSet: 'fa6',
});

const s = P.site('P6-L12');
const B = s.blocks;
const NEXT = { nextCode: 'IGCSE 0544', nextTitle: 'The real exam — go in with confidence', nextAr: 'الامْتِحَانُ جِسْرٌ — وَالجِسْرُ يُوصِلُكَ إِلَى الضَّفَّةِ الأُخْرَى' };

const slides = P.bridgeLesson('P6-L12', {
  site: s, next: NEXT,
  plan: '0–1 Welcome · 1–2 Map · 2–7 Do Now + answers · 7–8 Objectives · 8–11 From F1 to P6 · 11–17 Name the journey · 17–20 Arabic in the wild · 20–35 Free Arabic (choose A, B or C) · 35–39 The model letter · 39–46 My certificate sentence · 46–50 The road ahead · 50–55 Sharing + the programme is complete · 55–58 Final reflection + self-check · 58–60 Celebration.',
  source: 'The website P6-L12: the panel “From F1 to P6 — the distance”, the field “Name the journey”, the cards “Arabic in the wild” (conversation · creative · cultural), the free-writing task with the model letter to a future student, the certificate-sentence fields, the cards “The road ahead”, the closing panel and the final reflection.',
  support: `• CELEBRATION LESSON: nothing is marked. The aim is pride and free use of Arabic. Keep the tone warm; praise effort and risk-taking, not accuracy.
• Routes: Core — the journey sentence and a certificate sentence with the frame · Develop — option B or C (a 100-word piece or a three-minute talk) · Stretch — option A, a genuine five-minute conversation entirely in Arabic, plus the free writing.
• Sharing is by invitation only: some students will happily read aloud; others may type their sentence in the chat or send it privately.
• Faith and heritage: for many of our students Arabic is the language of the Qur’an and of their family heritage. Welcome sentences that express this, but never require a personal or religious disclosure.
• Before the lesson: prepare a certificate template so each student’s sentence can be added afterwards.`,
  steps: [
    ['donow', 5, 'Retrieval: celebration words.', 'اِبْدَأِ الآنَ'],
    ['teach', 8, 'From F1 to P6 — name the journey.', 'الرِّحْلَةُ'],
    ['youdo', 22, 'Arabic in the wild: free Arabic, your choice.', 'تَحَدَّثْ وَاكْتُبْ'],
    ['youdo', 7, 'My certificate sentence.', 'جُمْلَتِي'],
    ['feedback', 12, 'The road ahead, sharing, final reflection.', 'التَّأَمُّلُ'],
    ['feedback', 2, 'Celebrate!', 'أَحْسَنْتُمْ'],
  ],
  doNow: {
    questions: [
      q('What does الإِنْجَازُ mean?', ['achievement', 'celebration', 'ambition'], 'Prepared at home (P6-L11).'),
      q('What does الطُّمُوحُ mean?', ['ambition', 'the journey', 'the road ahead'], 'Prepared at home (P6-L11).'),
      q('What does الطَّرِيقُ إِلَى الأَمَامِ mean?', ['the road ahead', 'the road behind', 'a long road'], 'Prepared at home (P6-L11).'),
      q('How many IGCSE papers did you sit as mocks?', ['four', 'three', 'two'], 'Listening · Reading · Speaking · Writing (P6-L08 to P6-L10).'),
      q('What does العَرَبِيَّةُ الآنَ لَكَ mean?', ['Arabic is now yours.', 'Arabic is now difficult.', 'Arabic is for later.'], 'The last line of today’s model letter.'),
    ],
    keyIdea: { text: 'You are an Arabic speaker — and that does not expire.', ar: 'العَرَبِيَّةُ الآنَ لَكَ.' },
    retrieves: 'Questions 1–3 test three of the five celebration words prepared at the end of P6-L11. Questions 4–5 look back on the mocks and forward to today’s message.',
  },
  routes: {
    core: ['I can name how far I have come in Arabic.', 'I can write my proudest Arabic sentence.'],
    develop: ['I can write or speak freely for one of the three options.', 'I can name the structures in my sentence.'],
    stretch: ['I can hold a five-minute conversation in Arabic, without a script.', 'I can name the doors Arabic opens next.'],
  },
  body: [
    P.panel(B[0], {
      min: 3, eyebrow: 'Teach · then · now · distance (website)', ar: 'المَسَافَةُ',
      exHead: 'THEN → NOW',
      examples: [
        { ar: 'بَ', en: 'F1 — the first letter you wrote' },
        { ar: 'صَحِيحٌ أَنَّ الطَّرِيقَ طَوِيلٌ، غَيْرَ أَنَّهُ يَسْتَحِقُّ كُلَّ جُهْدٍ.', en: 'P6 — “It is true that the road is long; however, it is worth every effort.”' },
      ],
      notes: 'TEACH (3 min) — read the website panel slowly. Pause on the last line: “You are an Arabic speaker — and that does not expire.” If you have a photo or worksheet from F1, show it now.',
    }),
    P.fields({ ...B[1], items: [...B[1].items, { label: 'The lesson or moment I remember most' }, { label: 'The structure I am proudest of now' }] }, {
      min: 6, eyebrow: 'You do · then → now (website)', ar: 'سَمِّ الرِّحْلَةَ', head: 'Name the journey', ex: 'Example', lw: 3.6, ew: 5.6, core: [0],
      examples: ['فِي الصَّفِّ الأَوَّلِ كُنْتُ لَا أَقْرَأُ حَرْفًا، أَمَّا اليَوْمَ فَأَسْتَطِيعُ أَنْ أَكْتُبَ مَقَالًا.', 'the first time I read a whole sentence aloud', 'the Type 2 conditional (lau … la-)'],
      foot: 'Row 1 is the website frame — write it in Arabic. Rows 2–3 can be in English.',
      notes: 'NAME THE JOURNEY (6 min) — website frame (row 1) plus two teacher rows. Invite three volunteers to read row 1 aloud.',
    }),
    P.cards(B[2], {
      min: 3, eyebrow: 'Teach · choose one · speak or write freely (website)', ar: 'العَرَبِيَّةُ فِي الحَيَاةِ', leftW: 6.6,
      examples: [
        { ar: 'مَا أَجْمَلُ شَيْءٍ تَعَلَّمْتَهُ هٰذَا العَامَ؟', en: 'A · a conversation opener' },
        { ar: 'فِي صَبَاحٍ هَادِئٍ، فَتَحْتُ البَابَ فَوَجَدْتُ …', en: 'B · a story opening' },
        { ar: 'أَكْثَرُ مَا أَدْهَشَنِي فِي العَالَمِ العَرَبِيِّ هُوَ …', en: 'C · a cultural talk' },
      ],
      notes: 'CHOOSE (3 min) — the website cards with a teacher starter for each. Option A pairs talk on open mic one pair at a time, or record; options B and C work independently. Students type A, B or C in the chat.',
    }),
    P.writing(B[3], {
      min: 15, chip: 'FREE ARABIC · UNMARKED', eyebrow: 'You do · free Arabic — your choice (website)', title: 'Free Arabic — write or speak for meaning', ar: 'العَرَبِيَّةُ الحُرَّةُ',
      phrases: [['إِلَى طَالِبٍ يَبْدَأُ رِحْلَتَهُ مَعَ العَرَبِيَّةِ،', 'To a student beginning their journey with Arabic,'], ['أَتَذَكَّرُ يَوْمَ …', 'I remember the day …'], ['أَنْصَحُكَ بِأَنْ …', 'I advise you to …']],
      bankHead: 'STARTERS (TEACHER)',
      notes: 'FREE ARABIC (15 min) — website task, unmarked. Stretch students who chose option A hold their conversation now (teacher listens to one pair at a time); everyone else writes. Circulate and celebrate a good sentence publicly (with permission).',
      modelEyebrow: 'Feedback · the website model · a letter to a future student', modelTitle: 'A letter to a student starting F1',
      en: '“I am writing to a student beginning their journey with Arabic: do not fear the first letter, for every language begins with a step. It is true that the road is long; however, it is worth every effort. Based on my experience, I advise you to read and speak every day. If you persevere, you will one day find yourself writing in Arabic with confidence. Arabic is now yours.”',
      find: ['لَا تَخَفْ', 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ', 'أَنْصَحُكَ بِأَنْ', 'وَلَوْ ثَابَرْتَ، لَوَجَدْتَ'],
      modelNotes: 'Read the website model aloud warmly — it is the whole programme in five sentences: a negative imperative (F-level), a concession-refutation (P5), a subjunctive (P4–P5) and a Type 2 conditional (P4). Consider sending the class’s letters to a real F1 class.',
    }),
    P.fields(B[4], {
      min: 7, eyebrow: 'You do · the proof (website)', ar: 'شَهَادَةُ الإِنْجَازِ', head: 'My certificate', ex: 'Example', lw: 3.6, ew: 5.6, core: [0],
      examples: ['لَوْ لَمْ أُثَابِرْ، لَمَا وَصَلْتُ إِلَى هُنَا؛ غَيْرَ أَنِّي ثَابَرْتُ، فَأَصْبَحَتِ العَرَبِيَّةُ لُغَتِي.', 'Type 2 conditional (lau lam … la-mā) · concession (ghayra anna)'],
      foot: 'This sentence goes on your certificate — the proof of three years.',
      notes: 'CERTIFICATE SENTENCE (7 min) — website fields. Students send the final sentence to the teacher privately; check vowels kindly before it goes on the certificate. Teacher example: “Had I not persevered, I would not have reached here; but I persevered, and Arabic became my language.”',
    }),
    P.cards(B[5], {
      min: 4, stage: 'feedback', eyebrow: 'Feedback · a key to a world (website)', ar: 'الطَّرِيقُ إِلَى الأَمَامِ', leftW: 7.2,
      examples: [
        { ar: 'العَرَبِيَّةُ مِفْتَاحٌ إِلَى عَالَمٍ.', en: 'Arabic is a key to a world.' },
        { ar: 'لُغَةُ القُرْآنِ الكَرِيمِ', en: 'the language of the Qur’an — understood, not only recited' },
        { ar: 'أَرْبَعُمِائَةِ مِلْيُونِ مُتَحَدِّثٍ', en: '400 million speakers' },
      ],
      notes: 'THE ROAD AHEAD (4 min) — the website cards. Ask: which door is yours? Students type one word in the chat (exam · A-Level · medicine · translation · travel · Qur’an …). The Qur’an example is offered for students for whom it matters; it is not required.',
    }),
    P.panel(B[6], {
      min: 3, stage: 'feedback', eyebrow: 'Feedback · the programme is complete (website)', ar: 'اكْتَمَلَ البَرْنَامَجُ',
      points: [...B[6].body.map(P.flat), 'Use it: read, speak and write Arabic every week — even after the exam.'],
      exHead: 'TWO SENTENCES TO KEEP (WEBSITE)',
      examples: [
        { ar: 'العَرَبِيَّةُ الآنَ لَكَ.', en: 'Arabic is now yours.' },
        { ar: 'الامْتِحَانُ جِسْرٌ — وَالجِسْرُ يُوصِلُكَ إِلَى الضَّفَّةِ الأُخْرَى.', en: 'The exam is a bridge — and a bridge takes you to the other bank.' },
      ],
      notes: 'CLOSING PANEL (3 min) — read the website panel; the whole class repeats the two Arabic sentences together (unmuted, all at once — a joyful chorus). Invite volunteers to read their certificate sentence.',
    }),
    P.reflect(B[7], {
      min: 2, eyebrow: 'Feedback · the road ahead (website)', ar: 'التَّأَمُّلُ الأَخِيرُ', can: 'what I am proudest of this year', next: 'what I will use my Arabic for',
      modelCan: 'writing a full essay in Arabic', modelNext: 'reading the Qur’an and travelling',
      extra: [['أَنَا فَخُورٌ بِأَنِّي ______ .', 'I am proud that I … (girls: anā fakhūratun)', 'تَعَلَّمْتُ العَرَبِيَّةَ']],
      foot: 'Whatever grade the exam returns, you are an Arabic speaker — and that does not expire.',
      notes: 'FINAL REFLECTION (2 min) — website frames plus a teacher frame with masculine and feminine forms (فَخُورٌ / فَخُورَةٌ).',
    }),
  ],
  selfCheck: s.success.map((t, i) => ({ route: ['core', 'stretch', 'core', 'develop'][i], text: t })),
  remember: 'Arabic is now yours. Go into the exam with confidence: you have done the work. Well done, and thank you for three wonderful years.',
});

const last = slides[slides.length - 1];
Object.assign(last, { byeEn: 'Well done — the programme is complete. Thank you!', nextLabel: 'WHAT COMES NEXT', notes: 'CLOSE — the final slide of the programme. Thank the class; if possible, keep the call open a few minutes for goodbyes. After the lesson: add each certificate sentence to the certificates and send them home.' });

module.exports = { meta, slides };
