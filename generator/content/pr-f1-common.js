'use strict';
/*
 * F1 (script and sounds) variant of the combined practice room. Same 22-slide shape as pr-common.js, but every step
 * works on letters, sounds, marks and single words instead of full sentences:
 *   Part A · Sounds — letter warm-up → mini-dialogue → point-and-say cards → a reading card → a 30-second read-aloud race.
 *   Part B · Script — build the word from its parts → spot the slip → copy, listen and write (dictation) → buddy check.
 * Tatweel is allowed here: letter positions (بـ ـبـ ـب) are the content.
 * Usage: room(f1({ key, ..., words?: [[ar, en, tr, tag], ...] })).
 */
const { room } = require('./pr-common');

const ROLES = [
  'LEADER — points to a letter or word on the slide (or reads the card) and keeps the time.',
  'SPEAKER — says the sound or reads the word aloud, from RIGHT to left. Slowly is fine — clearly is the goal.',
  'COACH — checks with the slide, then says one thing that went well and one thing to improve. (In a pair, the Leader is also the Coach.)',
  'WRITING (Part B): everyone writes in their OWN book — copying, then dictation; then swap with a buddy and check.',
];

// [ar, en, tr?, tag?, subAr?, subLabel?] — subAr shows as a small Arabic line on the card (a name, a word, the vowelled form).
const word = ([ar, en, tr, tag, subAr, subLabel]) => ({ ar, en, tr: tr || '', tag: tag || '', core: true, ...(subAr ? { forms: [{ l: subLabel || 'name', ar: subAr }] } : {}) });

function f1(d) {
  return {
    ...d,
    allowTatweel: true,
    chip: 'Sounds + script practice room',
    bigAr: d.bigAr !== undefined ? d.bigAr : true,
    wordsAr: d.wordsAr || 'حُرُوفُ الدَّرْسِ',
    roles: ROLES,
    labels: { words: 'Letter warm-up', dialogue: 'Say the mini-dialogue', questions: 'Point-and-say cards', card: 'Reading card', talk: 'Read-aloud race', builder: 'Build the word', fix: 'Spot the slip', write: 'Copy, listen and write' },
    warm: {
      title: 'Say it — then find it', ar: 'قُلْهُ وَجِدْهُ', head: 'Sound ping-pong',
      text: 'The Leader says a letter NAME or SOUND from the next two slides. The Speaker points to it (or says its number) and says the sound again. The Coach checks on the slide.',
      steps: ['Leader: say 4 letter names or sounds; Speaker finds each one.', 'Coach checks the shape and the dots on the slide.', 'Swap roles — new letters each time.', 'Last round: the Speaker says a word that starts with the letter.'],
      routes: { core: 'Find the letter and say its sound.', develop: 'Say its name AND its sound, and how many dots it has.', stretch: 'Say a word with that letter — at the start, in the middle or at the end.' },
      ...(d.warm || {}),
    },
    qCols: [{ label: '#', w: 0.55 }, { label: 'Leader points to / says', w: 3.6, size: 20 }, { label: 'Hint', w: 2.9 }, { label: 'Speaker says (Core)', w: 3.0, size: 18 }, { label: 'Then read (Develop)', w: 2.28, size: 18 }],
    qTitle: d.qTitle || 'Point, say, check',
    qFoot: d.qFoot || 'Each Speaker does every card. Core: say the sound or read the word. Develop: do the “then” part. Stretch: give your own example with the same letter or mark. Swap after each card.',
    qNotes: d.qNotes || 'STEP 3 (7 min). The Speaker reads from the slide; the Coach checks the sound and the direction (right to left). Teacher: listen for the target sounds of the lesson.',
    builderTitle: d.builderTitle || 'Build three words from their parts',
    builderAr: d.builderAr || 'ابْنِ الكَلِمَةَ',
    builderAnswer: d.builderAnswer || 'Build the word: answers',
    builderNotes: d.builderNotes || 'STEP 6 (4 min). Read the English, then choose the correct part from each column, starting on the RIGHT (column 1). The answer slide shows the parts joined into one word. Students copy the three words into their book — they are used again in Step 8.',
    buddyRows: d.buddyRows || [
      ['write every letter from RIGHT to left?', 'Core'],
      ['put the dots in the right place, with the right number?', 'Core'],
      ['join letters correctly — and leave a gap after ا د ذ ر ز و?', 'Develop'],
      ['add the short-vowel marks in the right place?', 'Develop'],
      ['write the dictation words without looking at the slide?', 'Stretch'],
    ],
    selfCheck: d.selfCheck || [
      { route: 'core', text: 'I said the sounds of today’s letters clearly.' },
      { route: 'core', text: 'I copied every letter from right to left with the dots in the right place.' },
      { route: 'develop', text: 'I read today’s words aloud without stopping.' },
      { route: 'develop', text: 'My buddy checked my writing and I fixed one thing.' },
      { route: 'stretch', text: 'I wrote the dictation words without looking.' },
    ],
    remember: d.remember || 'Remember: Arabic starts on the right — look at the dots, say the sound, then write it.',
    cardCols: d.cardCols || [{ label: '#', w: 0.55 }, { label: 'Leader shows / reads', w: 4.3, size: 20 }, { label: 'Speaker’s task', w: 3.6 }, { label: 'Hint', w: 3.88, size: 16 }],
    words: d.words ? d.words.map(word) : undefined,
    task: { size: 'copy · dictation · labels', chip: 'WRITING · SCRIPT', ...d.task },
    talk: {
      head: 'Read aloud for 30 seconds — as many as you can',
      steps: ['The Leader points to the list on the slide (or in your book).', 'The Speaker reads aloud for 30 seconds; the Coach counts the correct ones.', 'Coach: one sound that was perfect + one to practise.', 'Swap — try to beat your own score, not your partner’s.'],
      phrases: [['دَوْرُكَ! / دَوْرُكِ!', 'your turn! (m. / f.)'], ['أَحْسَنْتَ! / أَحْسَنْتِ!', 'well done! (m. / f.)'], ['مَرَّةً أُخْرَى', 'once more'], ['بِبُطْءٍ', 'slowly']],
      ...d.talk,
    },
    card: { girl: 'no changes needed', checkFoot: 'Did you read every item clearly, from right to left? Read the one you found hardest once more.', ...d.card },
  };
}

module.exports = { f1, room };
