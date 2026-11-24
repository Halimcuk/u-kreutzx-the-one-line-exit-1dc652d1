// The One-Line Exit — a one-line resignation letter.
//
// The entry line below is the whole entry: exactly one line, at most
// 140 characters, written as a letter someone could actually send.
// The joke turns on the coffee machine: the only colleague who never
// let the writer down, so the writer is taking it along to a better office.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "I resign: the coffee machine was the only colleague who never let me down, so I'm taking it with me to a better office.";

// The output folder comes from MAKEFUN_OUTPUT_DIR, falling back to a
// folder named "output" at the filesystem root when it is not set.
// The entry is written with no trailing newline, so the file holds
// exactly the one line and nothing else.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_LINE, "utf8");

console.log(ENTRY_LINE);
console.log(`Characters: ${ENTRY_LINE.length}`);
