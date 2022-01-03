import { formatDocs, swapDocs } from "../scripts/write-docs-utils.js";
import { clues } from "../src/clues.ts";

describe("Documentation in README.md is up-to-date", () => {
  it("Run `npm run write-docs` to update documentation", () => {
    const { matchedDocs } = swapDocs();
    expect(formatDocs(clues)).toEqual(matchedDocs[0]);
  });
});
