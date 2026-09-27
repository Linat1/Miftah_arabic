'use strict';
/*
 * Foundation F1 (Arabic Script & Sounds) · Year 7.
 * Same lesson flow and helpers as Topic C (common.js); only the labelling and a few alphabet-specific
 * builders differ. 12 lessons = 4 weeks × 3 lessons.
 */
const C = require('./common');

const meta = C.unitMeta({ code: 'F1', kicker: 'YEAR 7  ·  FOUNDATION F1', name: 'Foundation F1 · Arabic Script & Sounds', level: 'Foundation · pre-A1 → A1', site: 'Pathways › Foundation › F1', footer: 'Foundation F1 · Arabic Script & Sounds' });

const titleSlide = (o) => C.titleSlide({
  ...o,
  siteRef: `Pathways › Foundation › F1 Arabic Script & Sounds › Lesson ${o.n} (F1-L${String(o.n).padStart(2, '0')})`,
  plan: o.plan || '0–1 Welcome · 1–2 Lesson map · 2–9 Do Now + answers · 9–10 Objectives · 10–20 New letters and sounds · 20–23 Quick check · 23–27 I Do (formation) · 27–38 We Do (listen, sort, detect) · 38–49 You Do (write, then show-and-say) · 49–54 Feedback · 54–56 Preparation.',
});

// Listening in F1 = the teacher reads a letter name or sound; students choose the letter.
function listenPick(o) {
  return {
    type: 'mcq', stage: 'wedo', min: o.min || 3, eyebrow: o.eyebrow || 'We do · listen and choose', title: o.title, ar: o.ar || 'اِسْتَمِعْ وَاخْتَرْ',
    seed: o.seed || 3,
    questions: o.items.map((it, i) => ({ prompt: `Listen to cue ${i + 1}. Which letter?`, options: it.options, answer: 0, why: it.why || `Cue: ${it.cue}` })),
    side: { kind: 'info', head: 'HOW TO ANSWER', text: o.how || 'Teacher reads each cue twice.\nLook, listen, then choose.\nChat: 1_ 2_ 3_ 4_' },
    answerSlide: { min: 0, eyebrow: `${o.eyebrow || 'We do · listen and choose'} · answers`, title: 'Answers', ar: 'الإِجَابَاتُ' },
    notes: `LISTEN AND CHOOSE (${o.min || 3} min) — ${o.source || 'website activity'}. Read each cue aloud twice; do not show the Arabic spelling or any transliteration. Students choose the letter shape.
CUES (read aloud):
${o.items.map((it, i) => `${i + 1}. ${it.cue}`).join('\n')}
${o.notes || ''}`,
    answerNotes: 'Reveal. Say the cue once more while pointing to the right letter; students repeat it.',
  };
}

module.exports = { ...C, meta, titleSlide, listenPick };
