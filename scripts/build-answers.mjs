// Builds src/_data/answers.json — one record per fully-tiled confusion
// class — from the SAME cloud snapshots the shipped app reads (the
// appConfig/wordData pointer), so the site always shows what players see.
//
// Every record holds the FULL class. A post that shows only a SUBSET of the
// class (the app's dev-only tile subset, posting-kit round 9, Sep 2026)
// links to the same page with `?w=<letters>` — the full class's lowercase
// letters for the words it kept — and src/a/a.njk's inline script drops the
// other tiles, re-letters and re-numbers client-side with a copy of
// `canonicalOrder` below (the three copies — this one, a.njk, the app's
// ClassMatchExportModel.canonicalTileOrder — must stay identical).
//
// Each record feeds src/a/a.njk, which renders the class's UNLISTED answer
// page — the reveal Peter links under every social quiz post — plus a
// per-page Open Graph card (below). Two URL forms per class:
//
//  - /a/<alias>/  (canonical) — the class's alphabetically-first WORD.
//    Human-readable and TYPEABLE, which is the whole point: Instagram
//    renders links nowhere and won't let a comment be copied (Peter, Sep
//    2026), so the only answer delivery that works there is a URL short
//    enough to read off the screen and type. The iOS post kit
//    (ConstellationShareText.answerURL) builds the same URL from the same
//    rule; this script ASSERTS the first words are globally unique across
//    classes (true today — no word appears in two classes at all) so a
//    future collision fails the build loudly instead of 404ing a post.
//  - /a/<hash>/ (legacy) — first 12 hex of SHA-256("lexi-answer-v1:" + id),
//    what the kit posted before Sep 2026. src/a/redirect.njk keeps every
//    old posted link alive with a meta-refresh onto the alias page.
//
// OG cards: every answer page gets its own preview image at
// src/img/a/<alias>.jpg — a 1200x630 night-sky card naming the class's
// words — because the site-wide og.jpg (a home-page app screenshot) looked
// like scraper junk under an answer reply (Peter, Sep 2026). Deterministic
// (starfield seeded by class id, no timestamps) and skipped when the file
// already exists — delete src/img/a/ to re-render after a design change.
//
// Rerun (then rebuild + deploy) after publishing new classes or tiles:
//   node scripts/build-answers.mjs
import { createHash } from "node:crypto";
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const RTDB = "https://lexicon-lab-default-rtdb.firebaseio.com";
const BUCKET = "lexicon-lab.firebasestorage.app";
const SLUG_SALT = "lexi-answer-v1:";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const storageURL = (path) =>
  `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/${encodeURIComponent(path)}?alt=media`;

const fetchJSON = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} for ${url}`);
  return res.json();
};

const hashSlug = (classID) =>
  createHash("sha256").update(SLUG_SALT + classID).digest("hex").slice(0, 12);

// MUST match the app's ConstellationShareText.answerSlug: lowercase, split
// on non-alphanumerics, joined with "-".
const aliasSlug = (word) =>
  word.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean).join("-");

// The canonical tile order — IDENTICAL to the app's
// ClassMatchExportModel.canonicalTileOrder (parity-tested; change one and
// you must change both): Fisher-Yates over the alphabetical list, driven by
// SplitMix64 seeded with FNV-1a of the class id, identity rotated away.
// Every platform's image and the answer page share this order, so a reader
// checks their answer against an identically-arranged grid.
const MASK64 = (1n << 64n) - 1n;
function canonicalOrder(classID, sortedWords) {
  if (sortedWords.length < 2) return [...sortedWords];
  let seed = 0xcbf29ce484222325n;
  for (const b of Buffer.from(classID, "utf8"))
    seed = ((seed ^ BigInt(b)) * 0x100000001b3n) & MASK64;
  let state = seed;
  const next = () => {
    state = (state + 0x9e3779b97f4a7c15n) & MASK64;
    let z = state;
    z = ((z ^ (z >> 30n)) * 0xbf58476d1ce4e5b9n) & MASK64;
    z = ((z ^ (z >> 27n)) * 0x94d049bb133111ebn) & MASK64;
    return z ^ (z >> 31n);
  };
  const tiles = [...sortedWords];
  for (let i = tiles.length - 1; i >= 1; i--) {
    const j = Number(next() % BigInt(i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }
  if (tiles.every((w, k) => w === sortedWords[k])) tiles.push(tiles.shift());
  return tiles;
}

// WordNet sense keys carry the POS: word%<ss_type>:… (1 n, 2 v, 3/5 adj, 4 adv).
const POS_BY_SS_TYPE = { 1: "noun", 2: "verb", 3: "adjective", 4: "adverb", 5: "adjective" };
const posOf = (members) => {
  const counts = {};
  for (const m of members) {
    const match = /%(\d)/.exec(m.sense ?? "");
    const pos = match && POS_BY_SS_TYPE[match[1]];
    if (pos) counts[pos] = (counts[pos] ?? 0) + 1;
  }
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
};

const pointer = await fetchJSON(`${RTDB}/appConfig/wordData.json`);
const [registry, manifest] = await Promise.all([
  fetchJSON(storageURL(pointer.constellationsPath)),
  fetchJSON(storageURL(pointer.imagesPath)),
]);

const tileSets = manifest.constellations ?? {};
const answers = [];
for (const cls of registry.classes) {
  if (cls.status && cls.status !== "active") continue;
  const words = (cls.members ?? []).map((m) => m.word);
  if (words.length < 2) continue;
  const tiles = tileSets[cls.id];
  // Same gate as the app's hasCompleteConstellationTiles: every member
  // illustrated, or the class doesn't surface.
  if (!tiles || !words.every((w) => tiles[w])) continue;

  answers.push({
    slug: hashSlug(cls.id),
    alias: aliasSlug([...words].sort()[0]),
    classID: cls.id,
    // Pre-joined for the page templates (Nunjucks has no map filter).
    wordsLine: [...words].sort().join(", "),
    pos: posOf(cls.members),
    definition: cls.groupDefinition ?? null,
    // In canonical TILE order (tile 1 = first entry), each with its
    // multiple-choice letter (alphabetical, as on the posted chips).
    words: (() => {
      const sorted = [...words].sort();
      return canonicalOrder(cls.id, sorted).map((w) => ({
        word: w,
        letter: String.fromCharCode(65 + sorted.indexOf(w)),
        signature: cls.signatures?.[w] ?? null,
        // Display-tier JPEG (~50KB); master PNG only as fallback.
        image: storageURL(tiles[w].tile ?? tiles[w].path),
      }));
    })(),
  });
}

answers.sort((a, b) => a.classID.localeCompare(b.classID));

// The alias namespace must be collision-free (see header) — and must never
// look like a legacy hash slug (12 lowercase hex chars), which no English
// word does, but assert it anyway since a collision would shadow a page.
{
  const seen = new Map();
  for (const a of answers) {
    if (seen.has(a.alias))
      throw new Error(`alias collision: "${a.alias}" (${a.classID} vs ${seen.get(a.alias)}) — ` +
        `pick a tiebreak rule and change it in BOTH this script and ConstellationShareText.answerSlug`);
    if (/^[0-9a-f]{12}$/.test(a.alias))
      throw new Error(`alias "${a.alias}" collides with the legacy hash-slug namespace`);
    seen.set(a.alias, a.classID);
  }
}

const out = join(ROOT, "src", "_data", "answers.json");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, JSON.stringify(answers, null, 1) + "\n");
console.log(`wrote ${answers.length} answer pages (registry v${pointer.version}) -> ${out}`);

// Compact word->page index for the /answers/ search page (emitted at
// /a/index.json by src/answers-index.njk): [alias, [words alphabetical]].
const index = answers.map((a) => [a.alias, a.wordsLine.split(", ")]);
const indexOut = join(ROOT, "src", "_data", "answersIndex.json");
writeFileSync(indexOut, JSON.stringify(index) + "\n");
console.log(`wrote search index (${index.length} classes) -> ${indexOut}`);

// ---------------------------------------------------------------------------
// Per-page OG cards: 1200x630 JPEG, app-palette night sky + the class's
// words. Text is intentionally spoiler-free — words and tiles are both
// public in the quiz post; only the mapping is the secret, and the card's
// job is to earn the click that reveals it.

const OG_DIR = join(ROOT, "src", "img", "a");
mkdirSync(OG_DIR, { recursive: true });

// Deterministic PRNG seeded from the class id, so re-running the generator
// reproduces byte-identical images (the sync commit stays a no-op).
function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const seedOf = (id) => {
  let h = 2166136261;
  for (const c of id) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); }
  return h >>> 0;
};

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function ogSVG(rec) {
  const W = 1200, H = 630;
  const rand = mulberry32(seedOf(rec.classID));
  let stars = "";
  for (let i = 0; i < 140; i++) {
    const x = (rand() * W).toFixed(1), y = (rand() * H).toFixed(1);
    const r = (0.8 + rand() * 2.0).toFixed(2);
    const o = (0.15 + rand() * 0.65).toFixed(2);
    const roll = rand();
    const fill = roll < 0.08 ? "#d9a640" : roll < 0.14 ? "#57bfe6" : "#ffffff";
    stars += `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" opacity="${o}"/>`;
  }

  // The word list, gold, wrapped to at most two centered lines.
  const words = rec.words.map((w) => w.word).sort();
  const joined = words.join("  ·  ");
  let lines = [joined];
  if (joined.length > 52) {
    const half = Math.ceil(words.length / 2);
    lines = [words.slice(0, half).join("  ·  "), words.slice(half).join("  ·  ")];
  }
  const wordSize = Math.max(...lines.map((l) => l.length)) > 46 ? 40 : 46;
  const wordSpans = lines.map((l, i) =>
    `<text x="600" y="${408 + i * (wordSize + 16)}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="${wordSize}" font-weight="600" letter-spacing="1" fill="#d9a640">${esc(l)}</text>`
  ).join("");

  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#080d1c"/>
      <stop offset="0.55" stop-color="#0d1226"/>
      <stop offset="1" stop-color="#14142b"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.42" r="0.62">
      <stop offset="0" stop-color="#a48fe3" stop-opacity="0.14"/>
      <stop offset="1" stop-color="#a48fe3" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${stars}
  <text x="600" y="150" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="700" letter-spacing="7" fill="#b9b3d9">LEXI &#183; VOCABULARY QUIZ</text>
  <text x="600" y="286" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="118" font-weight="700" fill="#f4f2fb">The Answer</text>
  <g transform="translate(600,338)" fill="#d9a640">
    <path d="M0,-14 L3.2,-3.2 L14,0 L3.2,3.2 L0,14 L-3.2,3.2 L-14,0 L-3.2,-3.2 Z"/>
    <path d="M34,-6 L35.8,-1.8 L40,0 L35.8,1.8 L34,6 L32.2,1.8 L28,0 L32.2,-1.8 Z" opacity="0.75"/>
    <path d="M-34,-6 L-32.2,-1.8 L-28,0 L-32.2,1.8 L-34,6 L-35.8,1.8 L-40,0 L-35.8,-1.8 Z" opacity="0.75"/>
  </g>
  ${wordSpans}
  <text x="600" y="560" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="30" font-weight="500" fill="#8f8aa8">every tile revealed &#183; lexivocab.app</text>
</svg>`;
}

let rendered = 0, kept = 0;
for (const rec of answers) {
  const file = join(OG_DIR, `${rec.alias}.jpg`);
  if (existsSync(file)) { kept++; continue; }
  const jpeg = await sharp(Buffer.from(ogSVG(rec)))
    .flatten({ background: "#080d1c" })
    .jpeg({ quality: 78, chromaSubsampling: "4:2:0", mozjpeg: true })
    .toBuffer();
  writeFileSync(file, jpeg);
  rendered++;
}
console.log(`og cards: ${rendered} rendered, ${kept} already present -> ${OG_DIR}`);
