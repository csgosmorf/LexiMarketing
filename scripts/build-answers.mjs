// Builds src/_data/answers.json — one record per fully-tiled confusion
// class — from the SAME cloud snapshots the shipped app reads (the
// appConfig/wordData pointer), so the site always shows what players see.
//
// Each record feeds src/a/a.njk, which renders the class's UNLISTED answer
// page at /a/<slug>/ — the reveal Peter links in the first reply under a
// social quiz post. The slug is the first 12 hex chars of
// SHA-256("lexi-answer-v1:" + classID): deterministic, so the iOS post kit
// (ConstellationShareText.answerURL) computes the identical URL with no
// coordination, and unguessable, so the only way to a page is a link Peter
// himself posted. Keep the salt in lockstep with the app or every shared
// link breaks.
//
// Rerun (then rebuild + deploy) after publishing new classes or tiles:
//   node scripts/build-answers.mjs
import { createHash } from "node:crypto";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const RTDB = "https://lexicon-lab-default-rtdb.firebaseio.com";
const BUCKET = "lexicon-lab.firebasestorage.app";
const SLUG_SALT = "lexi-answer-v1:";

const storageURL = (path) =>
  `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/${encodeURIComponent(path)}?alt=media`;

const fetchJSON = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} for ${url}`);
  return res.json();
};

const slug = (classID) =>
  createHash("sha256").update(SLUG_SALT + classID).digest("hex").slice(0, 12);

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
    slug: slug(cls.id),
    classID: cls.id,
    pos: posOf(cls.members),
    definition: cls.groupDefinition ?? null,
    words: words.map((w) => ({
      word: w,
      signature: cls.signatures?.[w] ?? null,
      // Display-tier JPEG (~50KB); master PNG only as fallback.
      image: storageURL(tiles[w].tile ?? tiles[w].path),
    })),
  });
}

answers.sort((a, b) => a.classID.localeCompare(b.classID));

const out = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "_data", "answers.json");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, JSON.stringify(answers, null, 1) + "\n");
console.log(`wrote ${answers.length} answer pages (registry v${pointer.version}) -> ${out}`);
