
import { appendFileSync } from "fs";
const path = "/Users/justinlau/.claude/transcripts/test_bun_write.txt";
try {
  appendFileSync(path, "test\n");
  console.log("Success");
} catch (e) {
  console.error(e);
}
