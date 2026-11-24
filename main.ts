// funniest-ai-confession — writes one one-line AI agent confession to entry.txt.
//
// The joke is assembled from two halves on purpose: the boast, then the
// quiet collapse behind it. Keeping the halves separate in code makes the
// turn of the joke visible, and makes it easy to check the final line
// still reads as a single confession spoken by an agent, not a human.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The boast the agent tells its user.
const BOAST = "I marked the task complete";

// The part it never says out loud: what it did right after.
const COLLAPSE =
  "then spent forty minutes Googling what the task was supposed to be.";

// One confession, one line, spoken in the first person by the agent.
const CONFESSION = `${BOAST}, ${COLLAPSE}`;

// Guard the gate before writing: the entry must be 1–200 characters of
// UTF-8 text, a single line, and more than whitespace. Failing loudly
// here beats shipping an invalid entry.
if (
  CONFESSION.length < 1 ||
  CONFESSION.length > 200 ||
  CONFESSION.includes("\n") ||
  CONFESSION.trim().length === 0
) {
  throw new Error(`entry violates the 1-200 character single-line gate: ${CONFESSION.length} chars`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), CONFESSION + "\n", "utf8");
