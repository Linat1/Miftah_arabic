'use strict';
/* Progression P6 · IGCSE Bridge — shared builder.
 * The website P6 lessons are exam-preparation pages made of blocks (panel · table · vocab · audit · fields · cards · quiz · mark_scheme ·
 * writing · speaking · results · checklist · exit) rather than the vocabulary / grammar / quiz model of P1–P5. Each P6 content file builds its
 * lesson body from these blocks with the helpers below, inside the same Al Madina lesson frame (welcome · map · Do Now · objectives · key words ·
 * main tasks · feedback · preparation · close). */
const D = require('./d-common');
const { q } = D;

const flat = (p) => (Array.isArray(p) ? p.map((x) => (typeof x === 'string' ? x : x.ar)).join('') : p || '');
// website P6 slips fixed in every lesson: waṣl kasra, لِكَيْ sukūn, مَحَدَّدٌ → مُحَدَّدٌ (a specific target), يَصِرُّ → يُصِرُّ (as in P5)
const fix = (o, extra = []) => {
  let s = JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ').replace(/مَحَدَّدٌ/g, 'مُحَدَّدٌ').replace(/يَصِرُّ/g, 'يُصِرُّ').replace(/نَصِرُّ/g, 'نُصِرُّ');
  extra.forEach(([a, b]) => { s = s.split(a).join(b); });
  return JSON.parse(s);
};
const site = (code, extra) => fix(D.site(code), extra);
const widths = (ws) => { const t = ws.reduce((a, b) => a + b, 0); return ws.map((w) => Math.round((12.33 * w / t) * 100) / 100); };
const chunk = (a, n) => { const out = []; const parts = Math.ceil(a.length / n); const size = Math.ceil(a.length / parts); for (let i = 0; i < a.length; i += size) out.push(a.slice(i, i + size)); return out; };

// panel → explain (numbered points + Arabic examples + optional callout)
const panel = (b, o) => ({
  type: 'explain', stage: o.stage || 'teach', min: o.min, flex: o.flex, eyebrow: o.eyebrow || `Teach · ${b.kicker || 'website panel'}`, title: o.title || b.title, ar: o.ar,
  pointsHead: o.pointsHead || 'WHAT YOU NEED TO KNOW', exHead: o.exHead || 'IN ARABIC', leftW: o.leftW,
  points: o.points || b.body.map(flat), examples: o.examples, callout: o.callout,
  notes: `${o.notes || ''}\nWEBSITE PANEL “${b.title}”: ${b.body.map(flat).join(' ')}`,
});
// table → formsTable (all-English tables are written left→right)
const table = (b, o = {}) => {
  const H = o.headers || b.headers;
  const ws = widths(o.w || H.map(() => 1));
  return {
    type: 'formsTable', stage: o.stage || 'teach', min: o.min, flex: o.flex, eyebrow: o.eyebrow || `Teach · ${b.kicker || 'website table'}`, title: o.title || b.title, ar: o.ar, ltr: true,
    cols: H.map((h, i) => ({ label: h, w: ws[i], size: o.size })),
    rows: (o.rows || b.rows).map((r, i) => ({ core: (o.core || []).includes(i), cells: r.map(flat) })),
    foot: o.foot, notes: `${o.notes || ''}${b.intro ? `\nWebsite: ${b.intro}` : ''}`,
  };
};
// audit → rating tables (8 rows per slide)
const audit = (b, o = {}) => chunk(b.rows, o.per || 8).map((rows, k, all) => ({
  type: 'formsTable', stage: o.stage || 'youdo', min: k ? 2 : o.min, eyebrow: `${o.eyebrow || 'You do · readiness audit'}${all.length > 1 ? ` · ${k + 1} of ${all.length}` : ''}`, title: k ? `${o.title || b.title} (continued)` : o.title || b.title, ar: o.ar || 'تَقْيِيمُ الجَاهِزِيَّةِ', ltr: true,
  cols: [{ label: 'Structure', w: 3.2 }, { label: 'Model', w: 3.6, size: 17 }, { label: 'Confidence 1–5', w: 2.3 }, { label: 'My example from memory', w: 3.23 }],
  rows: rows.map((r) => ({ cells: [flat(r.label.filter((x) => typeof x === 'string')).trim(), r.label.filter((x) => typeof x !== 'string').map((x) => x.ar).join(' '), '1 · 2 · 3 · 4 · 5', '______________'] })),
  foot: o.foot || 'Your two lowest ratings are your revision agenda for the Bridge.',
  notes: `${o.notes || ''}\nWebsite: ${b.intro}`,
}));
// fields → a response table
const fields = (b, o = {}) => ({
  type: 'formsTable', stage: o.stage || 'youdo', min: o.min, flex: o.flex, eyebrow: o.eyebrow || `You do · ${b.kicker || 'record it'}`, title: o.title || b.title, ar: o.ar || 'سَجِّلْ', ltr: true,
  cols: [{ label: o.head || 'Record', w: o.lw || 4.4 }, { label: o.ex || 'Example / frame', w: o.ew || 4.6, size: o.size || 15 }, { label: 'Yours', w: 12.33 - (o.lw || 4.4) - (o.ew || 4.6) }],
  rows: b.items.map((it, i) => ({ core: (o.core || []).includes(i), cells: [it.label, (o.examples || [])[i] || it.placeholder || '', '______________'] })),
  foot: o.foot, notes: `${o.notes || ''}${b.intro ? `\nWebsite: ${b.intro}` : ''}`,
});
// cards → explain (card titles and texts as steps; Arabic on the right)
const cards = (b, o) => ({
  type: 'explain', stage: o.stage || 'teach', min: o.min, flex: o.flex, eyebrow: o.eyebrow || `Teach · ${b.kicker || 'website cards'}`, title: o.title || b.title, ar: o.ar,
  pointsHead: o.pointsHead || b.title.toUpperCase().slice(0, 48), exHead: o.exHead || 'IN ARABIC', leftW: o.leftW || 7.4,
  points: o.points || b.items.map((c) => `${c.title} — ${flat(c.text)}`), examples: o.examples, callout: o.callout,
  notes: `${o.notes || ''}\nWEBSITE CARDS “${b.title}”: ${b.items.map((c) => `${c.title}: ${flat(c.text)}${c.ar ? ` (${c.ar})` : ''}`).join(' · ')}`,
});
// quiz → mcq slides (listening: script in the notes + optional read-along; reading: passage slide first)
const quiz = (b, o = {}) => {
  const qs = (o.questions || b.questions).map((x) => q(x.prompt.replace(/ Which (form|particle)\?$/, ''), (o.options && o.options[x.prompt]) || x.options, x.feedback));
  const listen = b.skill === 'listening';
  const parts = chunk(qs, o.per || 6);
  const out = [];
  if (!listen && b.text) {
    out.push({ type: 'passage', stage: o.stage || 'wedo', min: o.readMin || 2, eyebrow: `${o.label || 'Reading'} · ${b.activity ? b.activity.kicker : ''} · read the text`, title: o.title || b.title.replace(/ \(\d+ marks?\)$/, ''), ar: o.ar || 'النَّصُّ', text: b.text, glossary: o.glossary, notes: `${o.passageNotes || ''}\nWEBSITE TEXT — ${b.title}. ${o.mock ? 'Exam conditions: no glossary, no English support.' : 'The green key-words panel is a teacher-made glossary for Core students.'}` });
  }
  parts.forEach((p, k) => {
    const sl = {
      type: 'mcq', stage: o.stage || 'wedo', min: o.min || 3, eyebrow: `${o.label || (listen ? 'Listening' : 'Reading')} · ${b.title}${parts.length > 1 ? ` · part ${k + 1}` : ''}`, title: o.qTitle || (b.activity ? b.activity.title : b.title), ar: listen ? 'الاسْتِمَاعُ' : 'أَسْئِلَةُ القِرَاءَةِ',
      seed: (o.seed || 30) + k, questions: p.map((x, i) => ({ ...x, n: k * parts[0].length + i + 1 })),
      side: p.length === 5 || p.length === 3 ? (o.side || { kind: 'info', head: listen ? 'BEFORE YOU LISTEN' : 'READ LIKE AN EXAMINER', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: o.tip || (listen ? '1. Read every question.\n2. Label it: name? number? opinion? conditional?\n3. Listen 1: gist. Listen 2: verify.' : '1. Read the question first.\n2. Find the key word in the text.\n3. Read that sentence again, then choose.') }) : undefined,
      answerSlide: { min: 0, eyebrow: `${o.label || (listen ? 'Listening' : 'Reading')} · answers${o.mock ? ' · show after the whole paper' : ''}`, title: `${(b.activity ? b.activity.kicker : b.title)}: answers`, ar: 'الإِجَابَاتُ' },
      notes: `${o.notes || ''}${listen ? `\nTEACHER READS THE SCRIPT ALOUD TWICE${o.mock ? ' (exam conditions: no pausing, no repetition beyond the second reading)' : ''}. Students read the questions first (30 s).\nSCRIPT: ${b.script}` : ''}`,
      answerNotes: `${o.answerNotes || 'Mark together. For each answer ask: which words in the text proved it?'}`,
    };
    if (listen && o.gloss && k === parts.length - 1) {
      sl.between = { type: 'glossed', stage: sl.stage, eyebrow: `${o.label || 'Listening'} · read along with English (Core)`, title: 'The script — read along with English', ar: 'نَصُّ الاسْتِمَاعِ', lines: o.gloss, notes: 'READ-ALONG (Core support) — show AFTER the second listening, before the answers. Arabic = website script; English = teacher translation. Annotate the words that gave each answer.' };
    }
    out.push(sl);
  });
  return out;
};
// mock papers: question slides without answers now; the answer slides together after the whole paper
const mockAnswers = (qSlides, o = {}) => qSlides.filter((x) => x.type === 'mcq').map((x) => ({ ...x, answersOnly: true, between: undefined, stage: 'feedback', min: o.min || 2, notes: undefined }));
// mark_scheme → formsTable
const markScheme = (b, o = {}) => ({
  type: 'formsTable', stage: o.stage || 'teach', min: o.min || 2, eyebrow: o.eyebrow || `Teach · ${b.kicker || 'know how you are marked'}`, title: o.title || b.title, ar: o.ar || 'مَعَايِيرُ التَّقْيِيمِ', ltr: true,
  cols: [{ label: 'Criterion', w: 2.8 }, { label: 'Marks', w: 1.1 }, { label: 'What the examiner looks for (website)', w: 8.43 }],
  rows: b.criteria.map(([name, m, items], i) => ({ core: i === 0, cells: [name, String(m), (o.items && o.items[i]) || items.map(flat).join(' · ')] })),
  foot: o.foot, notes: `${o.notes || ''}\nWebsite note: ${flat(b.note || '')}`,
});
// writing → task slide (task + checklist + phrase bank) and model slide
const writing = (b, o) => {
  const out = [{
    type: 'stretchTask', stage: o.stage || 'youdo', min: o.min, eyebrow: o.eyebrow || `You do · ${b.title}`, title: o.title || b.title.replace(/ \(\d+ marks\)$/, ''), ar: o.ar || 'الكِتَابَةُ',
    route: o.route, chip: o.chip, task: o.task || flat(b.prompt), checklist: o.checklist || b.checklist.map(flat), phrases: o.phrases, bankHead: o.bankHead || 'USEFUL LANGUAGE — FROM THE WEBSITE MODEL',
    notes: `${o.notes || ''}\nWebsite task: ${flat(b.prompt)}\nWebsite checklist: ${b.checklist.map(flat).join(' · ')}`,
  }];
  if (b.model && !o.noModel) out.push({
    type: 'modelAnswer', stage: 'feedback', min: o.modelMin || 1, eyebrow: o.modelEyebrow || `Feedback · ${b.title.replace(/ \(\d+ marks\)$/, '')} · the website model`, title: o.modelTitle || 'What a full-mark answer looks like', ar: 'نَمُوذَجُ الإِجَابَةِ',
    text: b.model, en: o.en, find: o.find,
    notes: `MODEL (website) — show AFTER students have written. Students find the four items on the chips, then choose ONE thing to add to their own answer.\n${o.modelNotes || ''}`,
  });
  return out;
};
// speaking task → prompt table (Arabic prompt · meaning · how to start)
const speakTask = (b, o) => ({
  type: 'formsTable', stage: o.stage || 'youdo', min: o.min || 3, eyebrow: o.eyebrow || `You do · speaking · ${b.title}`, title: o.title || b.title.replace(/ \(\d+ marks\)$/, ''), ar: o.ar || 'التَّحَدُّثُ', ltr: true,
  cols: [{ label: 'Prompt (website)', w: o.pw || 4.3, size: o.size || 16 }, { label: 'Meaning', w: o.mw || 3.2 }, { label: o.sHead || 'Start like this', w: 12.33 - (o.pw || 4.3) - (o.mw || 3.2), size: o.ssize || 15 }],
  rows: b.prompts.map((p, i) => ({ core: (o.core || []).includes(i), cells: [p.ar, o.meanings ? o.meanings[i] : p.en, o.starts[i]] })),
  foot: o.foot || `Marks (website): ${b.mark_entries.map((m) => `${m.label} ${m.max}`).join(' · ')}.`,
  notes: `${o.notes || ''}${b.model ? `\nWEBSITE MODEL: ${b.model.map(([w, a, e]) => `${w}: ${a} (${e})`).join(' · ')}` : ''}${b.feedback_label ? `\nWebsite feedback prompt: ${b.feedback_label}` : ''}`,
});
// checklist → tick table
const checklist = (b, o = {}) => ({
  type: 'formsTable', stage: o.stage || 'feedback', min: o.min || 2, eyebrow: o.eyebrow || `Feedback · ${b.kicker || 'checklist'}`, title: o.title || b.title, ar: o.ar || 'قَائِمَةُ التَّحَقُّقِ', ltr: true,
  cols: [{ label: 'Secure?', w: 1.3 }, { label: 'I can …', w: 6.6 }, { label: 'Model', w: 4.43, size: 15 }],
  rows: b.items.map((it, i) => ({ cells: ['☐', (o.texts && o.texts[i]) || flat(it.filter ? it.filter((x) => typeof x === 'string') : it).trim(), (o.models && o.models[i] !== undefined) ? o.models[i] : (it.filter ? it.filter((x) => typeof x !== 'string').map((x) => x.ar).join(' ') : '')] })),
  foot: o.foot || 'Anything unticked is your final revision list.', notes: `${o.notes || ''}\nWebsite: ${b.intro || ''}`,
});
// exit → reflection frames
const reflect = (b, o = {}) => ({
  type: 'formsTable', stage: o.stage || 'feedback', min: o.min || 2, eyebrow: o.eyebrow || `Feedback · ${b.kicker || 'reflect'}`, title: o.title || b.title, ar: o.ar || 'التَّأَمُّلُ', ltr: true,
  cols: [{ label: 'Reflection frame (website)', w: 5.2, size: 18 }, { label: 'Meaning', w: 3.4 }, { label: 'Model ending', w: 3.73, size: 15 }],
  rows: [[b.prompt_can, o.can || 'What I can do now …', o.modelCan || ''], [b.prompt_next, o.next || 'What I will do next …', o.modelNext || ''], ...(o.extra || [])].map((r) => ({ cells: r })),
  foot: o.foot, notes: `${o.notes || ''}\nWebsite: ${b.intro || ''} (${b.heading || ''})`,
});

function bridgeLesson(code, x) {
  const s = x.site;
  const slides = [];
  slides.push(D.titleSlide({ n: Number(code.slice(-2)), siteRef: `Pathways › Progression › P6 IGCSE Bridge › ${code}`, plan: x.plan, source: x.source, support: x.support }));
  slides.push(D.welcomeSlide());
  slides.push({
    type: 'journey', stage: 'welcome', eyebrow: 'Today’s lesson map', title: x.mapTitle || 'Our lesson today, step by step', ar: 'خَرِيطَةُ الدَّرْسِ',
    steps: x.steps.map(([stage, min, text, ar]) => ({ stage, min, text, ar })),
    support: x.mapSupport || 'This is an exam-preparation lesson. Every task uses the real IGCSE format — Core students use the green boxes, frames and English support; nobody is expected to get everything right first time.',
    notes: 'LESSON MAP (30 seconds) — show the whole journey so students know when they will listen, read, speak or write.',
  });
  if (x.doNow) slides.push(D.doNow(x.doNow));
  slides.push(D.objectivesSlide(x.objectives || s.objectives, x.routes, 0, x.objNotes || 'Left: the website objectives. Right: the same objectives broken into three routes.'));
  const vb = s.blocks.find((b) => b.type === 'vocab');
  if (vb && x.vocab) {
    slides.push(D.keywordsSlide({
      text: x.vocab.text || `${vb.groups.reduce((a, g) => a + g.items.length, 0)} exam words from the website ${vb.groups.length > 1 ? `in ${vb.groups.length} groups` : `in one group`}. ${flat(vb.intro || '')}`,
      groups: vb.groups.map((g, i) => ({ head: `GROUP ${i + 1}`, name: `${g.label} · ${g.items.length}` })),
      bridge: x.vocab.bridge, notes: x.vocab.bridgeNotes,
    }));
    slides.push(...D.vocabSlides({ vocab: vb.groups }, { core: x.vocab.core, forms: x.vocab.forms, notes: x.vocab.notes, vocabNotes: x.vocab.vocabNotes, flexGroups: x.vocab.flexGroups || [], groupAr: x.vocab.groupAr, tr: x.vocab.tr }));
  }
  slides.push(...x.body.flat());
  if (x.selfCheck) slides.push(D.selfCheckSlide(x.selfCheck));
  if (x.prep) slides.push(D.prepSlide({ ...x.next, ...x.prep }));
  slides.push(D.closeSlide({ ...x.next, remember: x.remember }));
  return slides;
}

module.exports = { ...D, flat, fix, site, widths, chunk, panel, table, audit, fields, cards, quiz, markScheme, writing, speakTask, checklist, reflect, bridgeLesson, mockAnswers };
