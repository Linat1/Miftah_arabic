'use strict';
/*
 * Advanced Topics A and B. On the website each Topic lesson is a pathway “lesson engine” (e.g. AT-A-L01 = D1-L01)
 * wrapped with the Topic focus, grammar, skills, an application challenge and a Topic picture game.
 * reuse() retargets an already-built pathway deck for the Topic sequence: lesson codes are mapped to the Topic codes,
 * codes outside the Topic keep their website code, the title notes gain the Topic framing, the journey / preparation / close
 * slides point to the next Topic lesson, and the website application challenge is added before the speaking task.
 */
const C = require('./common');
const T = require('../site-data/advanced-topics-ab.json');

const INFO = {
  A: { key: 'a', code: 'AT-A', level: 'Topic A · A1+ → B1', words: [[/\bDevelopment D1\b/g, 'Topic A'], [/\bD1\b/g, 'Topic A'], [/\bD2\b/g, 'Topic B']] },
  B: { key: 'b', code: 'TB', level: 'Topic B · A1+ → B1', words: [[/\bDevelopment D2\b/g, 'Topic B'], [/\bD2\b/g, 'Topic B'], [/\bD1\b/g, 'earlier work'], [/\bD3\b/g, 'Topic C'], [/\bF2\b/g, 'Topic B'], [/\bF3\b/g, 'Topic B']] },
};
const topic = (t) => T[INFO[t].key];
const tcode = (t, n) => `${INFO[t].code}-L${String(n).padStart(2, '0')}`;
const lesson = (t, n) => topic(t).lessons[n - 1];
const unitMeta = (t) => C.unitMeta({
  code: INFO[t].code, kicker: `ADVANCED TOPIC ${t}`, name: `Advanced Topic ${t} · ${topic(t).title}`,
  level: INFO[t].level, site: `Advanced Topics › Topic ${t}`, footer: `Advanced Topic ${t} · ${topic(t).title}`,
});
function meta(t, n, o) {
  const L = lesson(t, n);
  return unitMeta(t)({ n, fileTitle: o.fileTitle, chip: o.chip, title: L.title, arabic: L.arabic, focus: o.focus || L.focus, icon: o.icon, iconSet: o.iconSet || 'fa6', level: o.level });
}
function codeMap(t) {
  const m = {};
  topic(t).sources.forEach((s, i) => { m[s.toUpperCase()] = tcode(t, i + 1); });
  return m;
}
function retargetString(s, t) {
  const m = codeMap(t);
  const keep = [];
  let out = s.replace(/\b([FDP]\d)-L(\d{2})\b/g, (x) => { keep.push(m[x] || `${x} (website)`); return `\u0000${keep.length - 1}\u0000`; });
  INFO[t].words.forEach(([re, w]) => { out = out.replace(re, w); });
  return out.replace(/\u0000(\d+)\u0000/g, (_, i) => keep[Number(i)]);
}
function retarget(v, t) {
  if (typeof v === 'string') return retargetString(v, t);
  if (Array.isArray(v)) return v.map((x) => retarget(x, t));
  if (v && typeof v === 'object') {
    const o = {};
    Object.entries(v).forEach(([k, x]) => { o[k] = (k === 'type' || k === 'stage' || k === 'icons') ? x : retarget(x, t); });
    return o;
  }
  return v;
}
function nextOf(t, n) {
  if (n >= 12) return null;
  const L = lesson(t, n + 1);
  return { nextCode: tcode(t, n + 1), nextTitle: L.title, nextAr: L.arabic };
}
function topicNote(t, n, src) {
  const L = lesson(t, n); const P = topic(t).practice[n - 1];
  return `ADVANCED TOPIC ${t} · ${tcode(t, n)} — ${L.title}. Website: Advanced Topics › Topic ${t} (${topic(t).title}) › Lesson ${n}.
The website builds this lesson on the ${src} lesson engine, with the Topic focus “${L.focus}” (grammar: ${L.grammar}; skills: ${L.skills}) and the application challenge “${P.title}”. This deck follows the same engine, re-sequenced for Topic ${t}: lesson references now point to Topic ${t} codes (lessons outside Topic ${t} keep their website code), and the challenge is added before the speaking task.
No year group: Topic lessons are taught to any class following the Advanced Topics route.

`;
}
// the website application challenge as a slide; o supplies routes / steps / phrases (teacher layer)
function challengeSlide(t, n, o) {
  const P = topic(t).practice[n - 1];
  return {
    type: 'challenge', stage: 'youdo', min: o.min || 3, eyebrow: `You do · Topic ${t} application challenge (website)`, title: P.title, ar: o.ar || 'تَحَدِّي التَّطْبِيقِ',
    chip: `TOPIC ${t} CHALLENGE · WEBSITE`, icon: P.icon, head: P.title, text: P.text,
    steps: o.steps, routes: o.routes, phrases: o.phrases,
    notes: `TOPIC ${t} APPLICATION CHALLENGE (${o.min || 3} min — it takes the speaking-rehearsal slot; the website speaking slide after it is FLEX) — from the website Topic page: “${P.text}”
${o.notes || 'Run it in pairs on the mic or in breakout rooms; Core students use the useful-language panel.'}`,
  };
}
function reuse(t, n, mod, o) {
  const src = mod.meta.code;
  let slides = retarget(JSON.parse(JSON.stringify(mod.slides)), t);
  const nx = nextOf(t, n);
  slides = slides.map((sp) => {
    if (sp.type === 'title') return { ...sp, notes: topicNote(t, n, src) + (sp.notes || '') };
    if (sp.type === 'journey' && nx) return { ...sp, steps: sp.steps.map((st) => (st.stage === 'prep' ? { ...st, text: `Get ready at home for ${nx.nextCode}.` } : st)) };
    if (sp.type === 'prep' && nx) {
      if (o.prep) return C.prepSlide({ ...nx, ...o.prep }); // new words for a different next-lesson engine
      if (o.prepWordsFrom) { // the next Topic lesson reuses a deck whose Do Now tests ANOTHER deck’s preparation words
        const src = retarget(o.prepWordsFrom.slides.find((x) => x.type === 'prep'), t);
        return { ...sp, title: `Before ${nx.nextCode}: get ready at home`, next: `${nx.nextCode} · ${nx.nextTitle}`, words: src.words, questionEn: src.questionEn, questionAr: src.questionAr,
          notes: `${sp.notes.replace(/Next lesson \([^)]*\)/, `Next lesson (${nx.nextCode} · ${nx.nextTitle})`)}\nTOPIC ${t}: the five words are the ones the ${nx.nextCode} Do Now tests (preparation list of the website ${o.prepWordsFrom.meta.code} lesson).` };
      }
      return { ...sp, title: `Before ${nx.nextCode}: get ready at home`, next: `${nx.nextCode} · ${nx.nextTitle}`, notes: sp.notes.replace(/Next lesson \([^)]*\)/, `Next lesson (${nx.nextCode} · ${nx.nextTitle})`) };
    }
    if (sp.type === 'close' && nx) return { ...sp, next: `${nx.nextCode} · ${nx.nextTitle}`, nextAr: nx.nextAr, ...(o.close || {}) };
    if (sp.type === 'picMatch' && o.game) return o.game;
    return sp;
  });
  if (o.addGame) { // Topic picture game added after the model sentences
    const at = slides.findIndex((sp) => sp.type === 'models');
    slides.splice(at + 1, 0, o.addGame);
  }
  if (o.challenge) {
    let at = slides.findIndex((sp) => sp.type === 'speaking');
    if (at < 0) at = slides.findIndex((sp) => sp.type === 'selfCheck' || sp.type === 'prep');
    if (slides[at].type === 'speaking' && !o.challenge.keepSpeaking) {
      const sp = slides[at];
      slides[at] = { ...sp, min: undefined, flex: true, eyebrow: `${sp.eyebrow} · FLEX`, notes: `FLEX — the Topic ${t} challenge before this slide is the main speaking task; use these website prompts if time allows or as homework rehearsal.\n${sp.notes}` };
    }
    slides.splice(at, 0, challengeSlide(t, n, o.challenge));
  }
  (o.patch || []).forEach((f) => { slides = f(slides) || slides; });
  return slides;
}
// a Topic visual game (site-data/advanced-topic-visual-games.json) as a picture match
const TG = require('../site-data/advanced-topic-visual-games.json');
function topicGame(key, o) {
  const g = TG[key];
  return C.gameSlide({ ...g, title: `${g.title} (Topic game)` }, { ...o, notes: `${o.notes || ''}\nThis is the website TOPIC game for this lesson (Advanced Topics page), not the pathway game.` });
}
// fresh Topic lessons built on a not-yet-built pathway engine: the same wrapper applied to a devLesson() deck
function wrap(t, n, srcCode, slides, o) { return reuse(t, n, { meta: { code: srcCode }, slides }, o); }

module.exports = { ...C, T, INFO, topic, tcode, lesson, meta, retarget, nextOf, challengeSlide, reuse, wrap, topicGame, TG };
