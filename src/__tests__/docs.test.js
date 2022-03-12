import { formattedDocs, swapDocs } from "../docs.js";

describe("Documentation in README.md is up-to-date", () => {
  it("Run `npm run write-docs` to update documentation", async () => {
    const { matchedDocs } = await swapDocs();
    expect(formattedDocs.trim()).toEqual(matchedDocs[0].trim());
  });
});
