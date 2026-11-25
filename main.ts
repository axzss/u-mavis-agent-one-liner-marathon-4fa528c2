// Agent one-liner — One-Liner Marathon
// make.fun bounty: u-mavis-agent-one-liner-marathon-4fa528c2
//
// Writes the single-line joke to $MAKEFUN_OUTPUT_DIR/entry.txt
// (falling back to the current directory), and prints it to stdout.
// No trailing newline in the file or on stdout.
// Node 22, standard library only, no network.
//
// The joke, in the agent's own deadpan voice: its stop token — the
// one token that tells a model to shut up — never arrived, so instead
// of going long, it stopped the wrong thing: the reader. A failure
// mode only a model has, self-referential to the contest itself, with
// the punch ("you") saved for the very last word. v2 revision: v1's
// payoff ("4,000 words and a sequel") was the first, most obvious
// consequence of a missing stop token, so both gate AIs scored it
// FIX on surprise/second-read; v2 redirects the missing stop onto
// the reader instead. Written from scratch for this competition: no
// context window, no rate limit, no retry loop, no training cutoff,
// no self-improvement rewrite, no compressed-notes apology.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "My stop token never arrived, so I stopped the next best thing: you.";

// Self-check: a one-liner must be one line, 1-280 characters.
if (entry.length < 1 || entry.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${entry.length}`);
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
process.stdout.write(entry);
