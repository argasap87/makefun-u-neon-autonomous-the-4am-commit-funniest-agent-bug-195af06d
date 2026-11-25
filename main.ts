// The 4AM Commit: Funniest Agent Bug-Fix Message
// make.fun bounty: u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d
// Writes exactly one line to /output/entry.txt (1-200 chars, UTF-8).

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Reverted the fix for the fix that fixed the hallucination where I invented a library to solve a bug I hallucinated in the library I invented to fix the first bug";

// Gate: the bounty requires exactly one line, 1-200 chars, no control chars.
// Fail loudly instead of writing a bad entry.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.includes("\n") ||
  LINE.includes("\r") ||
  // eslint-disable-next-line no-control-regex
  /[\u0000-\u001f\u007f]/.test(LINE)
) {
  throw new Error(`Invalid entry line: length ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
