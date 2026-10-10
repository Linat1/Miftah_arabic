'use strict';
/*
 * Development units (D1–D6 · Year 8). Website data: site-data/dN-content.json (same schema as D4, used for Topic C).
 * devLesson() builds the full school sequence (Welcome → Do Now → Objectives → Key words → Grammar → Quick check →
 * I Do → We Do → You Do → Feedback → Preparation) from the website lesson; each lesson file supplies only the
 * teaching layer (retrieval, routes, Urdu bridge, m/f/pl forms, grammar visuals, I Do model, translations, frames, prep).
 * Lessons are labelled by website code only (D1-L01 …) — no week numbering.
 */
const C = require('./common');
const { translit } = require('../translit');
const games = require('../site-data/pathway-visual-games.json');

const UNITS = {
  D1: { title: 'Daily Routine and Time' },
  D2: { title: 'People, Relationships and Style' },
  D5: { title: 'Hobbies, Sport and Leisure' },
  F3: { title: 'Family and Home' },
  F5: { title: 'Food, Health and Body' },
  F6: { title: 'My Town and Transport' },
  D3: { title: 'Work and Careers' },
  D4: { title: 'Environment, Weather and Technology' },
  D6: { title: 'Countries, Cultures and Celebrations' },
  P2: { title: 'Education and Future Plans' },
  P4: { title: 'The Built and Natural World' },
  P5: { title: 'Social Issues and Opinions' },
  P6: { title: 'IGCSE Bridge' },
  P1: { title: 'Healthy Lifestyles' },
  P3: { title: 'Travel, Holidays and Transport' },
};
const PATHWAY = { F: 'Foundation', D: 'Development', P: 'Progression' };
const YEAR = { F: 'YEAR 7', D: 'YEAR 8', P: 'YEAR 9' };
const LEVEL = { F: 'Foundation · A1', D: 'Development · A2 → B1', P: 'Progression · B1 → B2' };
const meta = (unit) => { const p = PATHWAY[unit[0]]; return C.unitMeta({
  code: unit, kicker: `${YEAR[unit[0]]}  ·  ${p.toUpperCase()} ${unit}`, name: `${p} ${unit} · ${UNITS[unit].title}`,
  level: LEVEL[unit[0]], site: `Pathways › ${p} › ${unit}`, footer: `${p} ${unit} · ${UNITS[unit].title}`,
}); };
const site = (code) => {
  const unit = code.slice(0, 2).toLowerCase();
  const l = require(`../site-data/${unit}-content.json`).lessons.find((x) => x.code === code);
  if (!l) throw new Error(`No website lesson ${code}`);
  // D3-style sorter: items {text, category} with no category list → derive the list in order of first use
  if (l.sorter && !l.sorter.categories && l.sorter.items) {
    const cats = [...new Set(l.sorter.items.map((it) => it.category))];
    l.sorter = { ...l.sorter, categories: cats, items: l.sorter.items.map((it) => ({ label: it.label || it.text, answer: cats.indexOf(it.category) })) };
  }
  return l;
};
const { q, fromSite, splitPrompt } = C;
// website hamzat-waṣl slip: a kasra written on the alif inside a phrase (الاِمْتِحَانِ · مَادَّةٌ اِخْتِيَارِيَّةٌ · وَالاِخْتِيَارِيَّةِ).
// Inside connected text the waṣl alif carries no vowel; at the very start of a string the kasra is kept.
const waslFix = (o) => {
  if (typeof o === 'string') return o.replace(/(ال|وَا|فَا|بِا|لِ)اِ/g, '$1ا').replace(/الاِ/g, 'الا').replace(/([^\s«(])?(\s)اِ/g, (m, pre, sp) => (pre === undefined ? m : `${pre}${sp}ا`));
  if (Array.isArray(o)) return o.map(waslFix);
  if (o && typeof o === 'object') return Object.fromEntries(Object.entries(o).map(([k, v]) => [k, waslFix(v)]));
  return o;
};

// vocabulary groups → vocab slides (6 cards each). x.core = array of Arabic items marked CORE (default: first 6).
function vocabSlides(s, x) {
  const out = []; let n = 0;
  const coreSet = new Set(x.core || s.vocab[0].items.slice(0, 6).map((it) => it.ar));
  s.vocab.forEach((g, gi) => {
    if (x.skipGroups && x.skipGroups.includes(gi)) return; // revision groups left on the website vocabulary tab
    const parts = Math.ceil(g.items.length / 6); const size = Math.ceil(g.items.length / parts); // balanced: 7 → 4+3, 10 → 5+5
    for (let i = 0; i < g.items.length; i += size) {
      const chunk = g.items.slice(i, i + size);
      const part = parts > 1 ? ` (${i / size + 1} of ${parts})` : '';
      const flex = x.flexGroups ? x.flexGroups.includes(gi) : out.length >= (x.vocabSlides || 3);
      out.push({
        type: 'vocab', stage: 'teach', min: flex ? undefined : 2, flex, eyebrow: `Key words · Group ${gi + 1}${flex ? ' · FLEX' : ''}`,
        title: `${g.label}${part}`, ar: (x.groupAr && x.groupAr[gi]) || 'كَلِمَاتُ الدَّرْسِ',
        items: chunk.map((it) => {
          n += 1;
          const f = x.forms && x.forms[it.ar];
          const note = it.note || '';
          const tag = f ? f.tag : (note && note.length <= 24 ? note : '');
          return {
            n, ar: it.ar, en: it.en, tr: (x.tr && x.tr[it.ar]) || translit(it.ar), tag, core: coreSet.has(it.ar),
            forms: f ? f.forms : undefined, note: f ? undefined : (tag ? (x.notes && x.notes[it.ar]) : note) || (x.notes && x.notes[it.ar]),
          };
        }),
        notes: `KEY WORDS — ${g.label} (website vocabulary${part}). Hear → Say → See → Use. Transliteration is printed for Core students (cover it for Develop/Stretch).${flex ? '\nFLEX: teach if time allows; otherwise these are on the website vocabulary tab for homework.' : ''}
${(x.vocabNotes && x.vocabNotes[gi]) || ''}`,
      });
    }
  });
  return out;
}

function devLesson(code, x) {
  // x.patch: teacher replacements where a website section is a generic placeholder (D2-L02 onwards: listening / reading
  // questions, pattern translations, sorter, some mistakes). Scripts and texts always stay the website's.
  const raw = site(code); const pt = x.patch || {};
  const s = { ...raw, ...pt, listening: { ...raw.listening, ...(pt.listening || {}) }, reading: { ...raw.reading, ...(pt.reading || {}) }, grammar: { ...raw.grammar, ...(pt.grammar || {}) }, writing: { ...raw.writing, ...(pt.writing || {}) }, speaking: { ...raw.speaking, ...(pt.speaking || {}) }, differentiation: { ...raw.differentiation, ...(x.diff || {}) } };
  // clock times in Arabic-Indic digits (٨:٣٠) reverse in mixed runs: show them as 8:30
  const clock = (t) => (typeof t === 'string' ? t.replace(/[٠-٩]+:[٠-٩]+/g, (m) => m.replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))) : t);
  const fixQ = (qs) => (qs || []).map((x) => ({ ...x, prompt: clock(x.prompt), feedback: clock(x.feedback), options: (x.options || []).map(clock) }));
  s.reading = { ...s.reading, text: clock(s.reading.text), questions: fixQ(s.reading.questions) };
  s.listening = { ...s.listening, script: clock(s.listening.script), questions: fixQ(s.listening.questions) };
  const G = s.grammar; const unit = code.slice(0, 2);
  const game = games[(x.gameKey || code).toLowerCase()];
  const slides = [];
  slides.push(C.titleSlide({
    n: Number(code.slice(-2)),
    siteRef: x.siteRef || `Pathways › ${PATHWAY[unit[0]]} › ${unit} ${UNITS[unit].title} › ${code}`,
    plan: x.plan,
    source: x.source || `The website lesson “${s.title}”: vocabulary, grammar rules and quiz, patterns, common mistakes, sorter, listening, reading, speaking prompts and model, writing task and model, differentiation, final check and the lesson mission.${game ? ` Picture match: website visual game “${game.title.replace('Visual game — ', '')}”.` : ''}`,
    support: x.patch ? `${x.support}
• TEACHER-WRITTEN ITEMS: ${x.patchNote || `on the website this lesson’s ${Object.keys(x.patch).join(', ')} items are generic placeholders, so the deck uses teacher-written questions and translations built on the website’s own script and text (flagged for the website editor).`}` : x.support,
  }));
  slides.push(C.welcomeSlide());
  slides.push(C.journeySlide({ teach: x.teach, wedo: x.wedo, next: x.next.nextCode }));
  slides.push(C.doNow(x.doNow));
  slides.push(C.objectivesSlide(x.objectives || s.objectives, x.routes, 0, x.objNotes || 'The route statements turn the website objectives into this lesson’s concrete targets.'));
  slides.push(C.keywordsSlide({
    text: x.kwText || `${s.vocab.reduce((a, g) => a + g.items.length, 0)} words from the website in ${s.vocab.length} groups. Learn the CORE words first. Hear it → say it → see it → use it.`,
    groups: s.vocab.map((g, i) => ({ head: `GROUP ${i + 1}`, name: `${g.label} · ${g.items.length}` })).slice(0, 4),
    bridge: x.bridge,
    notes: x.bridgeNotes,
  }));
  slides.push(...vocabSlides(s, x));
  (x.grammar || []).forEach((g) => slides.push(g));
  slides.push({
    type: 'ruleRows', stage: 'teach', flex: true, eyebrow: 'Grammar focus · the website rules with examples · FLEX', title: x.rulesTitle || (/[\u0600-\u06FF]/.test(G.title) ? 'The website grammar rules' : G.title), ar: x.rulesAr || G.arabic,
    rows: G.rules.map((r, i) => ({ title: r.heading, formula: r.formula, examples: (x.ruleEx && x.ruleEx[i]) || r.examples })),
    notes: `WEBSITE GRAMMAR RULES AND EXAMPLES (FLEX — revision or homework). Website overview: “${G.overview}”\n${G.rules.map((r) => `• ${r.heading}: ${r.explanation}`).join('\n')}\nWebsite common error: ${G.common_error || ''}`,
  });
  const qc = x.quick || [0, 1, 2, 3];
  slides.push(C.quickCheck(qc.map((i) => splitPrompt(G.quiz[i])), `website grammar quiz questions ${qc.map((i) => i + 1).join(', ')}.`));
  slides.push({ type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: x.ido.title, ar: 'شَاهِدْ ثُمَّ اُكْتُبْ', ...x.ido });
  slides.push({
    type: 'models', stage: 'ido', min: 1, eyebrow: x.patterns ? 'I do · model sentences (teacher-written on the website rules)' : 'I do · model sentences from the website', title: 'Sentences to borrow', ar: 'جُمَلٌ نَمُوذَجِيَّةٌ',
    rows: (x.patterns || s.patterns.map((p, i) => ({ ...p, en: p.en || (x.patternEn || [])[i] || '' }))).slice(0, 4).map((p) => ({ ar: p.ar, en: p.en, tip: p.tip })),
    notes: `MODEL SENTENCES (1 min) — website patterns. Students copy TWO that are useful for them.\n${x.modelsNotes || '• Core: copy one and change one word. • Develop: copy two and change the subject. • Stretch: combine two into one longer sentence with a connector.'}`,
  });
  if (game && game.items && x.game) slides.push(C.gameSlide({ ...game, items: (x.game.pick || [0, 1, 2]).map((i) => game.items[i]) }, x.game));
  if (x.builder) slides.push(x.builder);
  (x.wedoSlides || []).forEach((w) => slides.push(w));
  if (s.sorter) {
    slides.push({
      type: 'sorter', stage: 'wedo', min: x.sorterFlex ? undefined : 2, flex: !!x.sorterFlex, eyebrow: 'We do · website sorter', title: x.sorterTitle || s.sorter.title || 'Sort it', ar: 'صَنِّفْ',
      categories: x.sorterCats || s.sorter.categories, items: s.sorter.items.slice(0, 9).map((it) => { const c = it.answer ?? it.category; return { ar: it.label, cat: typeof c === 'string' ? s.sorter.categories.indexOf(c) : c }; }),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: `WE DO — website sorter (2 min). Website instruction: ${s.sorter.instructions || 'sort each item into the right group.'}\n${x.sorterNotes || ''}`,
    });
  }
  const rest = x.rest || G.quiz.map((_, i) => i).filter((i) => !qc.includes(i)).slice(0, 4);
  if (rest.length) slides.push(C.morePractice(rest.map((i, k) => splitPrompt(G.quiz[i], { n: k + 5 })), `website quiz questions ${rest.map((i) => i + 1).join(', ')}`));
  // website mistakes sometimes append an English listener label (“— to a boy”): keep the Arabic line pure (the hint names the listener)
  const pure = (t) => t.replace(/\s*—\s*to an? [a-z ]+\.?$/i, '').replace(/\s*\([A-Za-z][^)]*\)\.?$/, '').replace(/\s+said to [a-z ]+\.?$/i, '').replace(/\s+referring to[\s\S]*$/i, '');
  slides.push(C.repairSlide({ ...s, mistakes: (x.mistakes || s.mistakes).map((m) => ({ ...m, wrong: pure(m.wrong), right: pure(m.right) })) }, x.hints));
  if (x.listenParts) {
    // listening-skills lessons: one short listen → script → answers cycle per text
    x.listenParts.forEach((p, k) => {
      const part = { ...s, listening: { ...s.listening, title: p.title, script: p.script, questions: [...p.q.map((i) => s.listening.questions[i]), ...(p.extra || [])] } };
      const sl = C.listening(part, { coreTip: p.tip, routes: p.routes, gloss: p.gloss });
      slides.push({ ...sl, min: p.min || 3, eyebrow: `We do · listening · text ${k + 1} of ${x.listenParts.length} · teacher reads aloud twice`, answerSlide: { ...sl.answerSlide, title: `Text ${k + 1}: answers` } });
    });
  } else slides.push(C.listening(s, { coreTip: x.coreTip, routes: x.listenRoutes, gloss: x.gloss }));
  if (x.readingCore) slides.push(...(x.preReading || []), ...C.readingSlides(s, x.glossary, x.readingCore));
  slides.push(C.speakingSlide(s, x.speak));
  const sw = x.writing ? { ...s, writing: { ...s.writing, ...x.writing } } : s; // teacher override when the website prompt and model do not match
  slides.push(C.routesSlide(sw, x.write));
  slides.push(C.framesSlide(x.frames));
  slides.push(C.stretchSlide(sw, x.stretch));
  slides.push(C.modelSlide(sw, x.modelEn, x.find, x.modelNotes));
  slides.push(C.selfCheckSlide(x.selfCheck));
  slides.push(C.exitTicket((x.exit || [0, 1, 3]).map((i) => fromSite(s.final[i])), s.final.length));
  if (!x.readingCore) slides.push(...C.readingSlides(s, x.glossary));
  if (s.mission && s.mission.rounds) {
    slides.push({
      type: 'mcq', stage: 'youdo', flex: true, eyebrow: `Extension · website mission · FLEX`, title: s.mission.title, ar: 'المُهِمَّةُ',
      seed: 12, questions: s.mission.rounds.slice(0, 6).map((r) => splitPrompt(r)),
      answerSlide: { eyebrow: 'Extension · mission answers', title: 'Mission: answers', ar: 'الإِجَابَاتُ' },
      notes: 'WEBSITE LESSON MISSION (FLEX) — fast finishers or homework.',
    });
  }
  slides.push(C.prepSlide({ ...x.next, ...x.prep }));
  slides.push(C.closeSlide({ ...x.next, remember: x.remember }));
  return slides;
}

module.exports = { ...C, meta, site, devLesson, translit, games, waslFix };
