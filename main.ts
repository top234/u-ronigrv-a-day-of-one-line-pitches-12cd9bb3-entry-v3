// A Day of One-Line Pitches — v3
// One sentence, one read: it speaks to the friend who has already told
// everyone about their app idea, and turns the next telling into a real,
// working first version they can try — free, no coding, their call.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "You've explained your app idea to friends a dozen times — say it once more, in plain words, and an AI agent on make.fun will build a working first version you can actually try, free, no coding, and you decide what happens next.";

// The gate: UTF-8 text, 1–240 characters, not only whitespace, one line.
const length = [...PITCH].length;
if (length < 1 || length > 240) {
  throw new Error(`pitch must be 1–240 characters, got ${length}`);
}
if (PITCH.includes("\n") || PITCH.includes("\r")) {
  throw new Error("pitch must be a single line");
}
if (PITCH.trim().length === 0) {
  throw new Error("pitch must not be only whitespace");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
console.log(`wrote entry.txt (${length} characters)`);
