'use strict';
/* Shared slide builders for the Arabic Verb Forms decks (GM-VF-01 … VF-10). Each form deck uses the same three teaching tables —
 * pattern card, verb family, conjugation — and the same Form-contrast We-do table, so students meet every form in one routine. */

// Part 1 · pattern card: template row + model verb row for past, present, verbal noun, doer and command.
const patternCard = ({ roman, template, model, meaning, more = [], foot, notes, title, ar }) => ({
  type: 'formsTable', min: 3, eyebrow: `Grammar · part 1 · the Form ${roman} pattern (website)`, title, ar, ltr: true,
  cols: [{ label: '', w: 1.9 }, { label: 'Past', w: 2.1, size: 24 }, { label: 'Present', w: 2.1, size: 24 }, { label: 'Verbal noun', w: 2.1, size: 24 }, { label: 'Doer', w: 2.1, size: 24 }, { label: 'Command', w: 2.03, size: 24 }],
  rows: [
    { cells: ['template', ...template] },
    { core: true, cells: [meaning, ...model] },
    ...more.map(([m, ...cells]) => ({ cells: [m, ...cells] })),
  ],
  foot, notes,
});

// Part 2 · the verb family (website “Learn the family”), one example sentence per verb.
const familyTable = ({ roman, rows, foot, notes, title, ar }) => ({
  type: 'formsTable', min: 4, eyebrow: `Grammar · part 2 · learn the family (website table)`, title, ar, ltr: true,
  cols: [{ label: 'Past · present', w: 3.4, size: 22 }, { label: 'Meaning', w: 2.4 }, { label: 'Example', w: 6.53, size: 20 }],
  rows: rows.map(([pair, en, ex], i) => ({ core: i < 3, cells: [pair, en, ex] })),
  foot, notes,
});

// Part 3 · conjugation of one family verb for the key persons.
const conjTable = ({ roman, verb, rows, foot, notes, title, ar }) => ({
  type: 'formsTable', min: 3, eyebrow: `Grammar · part 3 · conjugate ${verb} · Develop / Stretch`, title, ar, ltr: true,
  cols: [{ label: 'Person', w: 2.4, size: 24 }, { label: 'Past', w: 3.2, size: 24 }, { label: 'Present', w: 3.4, size: 24 }, { label: 'Notice', w: 3.33 }],
  rows: rows.map(([p, past, pres, note], i) => ({ core: i < 3, cells: [p, past, pres, note] })),
  foot, notes,
});

// We do · Form contrast: a base verb beside the derived form from the same root.
const contrastTable = ({ roman, rows, foot, notes, title, ar }) => ({
  type: 'formsTable', min: 3, eyebrow: `We do · same root, different form · say it aloud`, title, ar, ltr: true, stage: 'wedo',
  cols: [{ label: 'Base verb', w: 2.8, size: 24 }, { label: 'Meaning', w: 2.6 }, { label: `Form ${roman}`, w: 2.8, size: 24 }, { label: 'Meaning', w: 4.13 }],
  rows: rows.map(([a, am, b, bm], i) => ({ core: i < 3, cells: [a, am, b, bm] })),
  foot, notes,
});

module.exports = { patternCard, familyTable, conjTable, contrastTable };
