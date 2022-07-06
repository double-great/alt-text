import endPunctuation from "../end-punctuation";
import checkDocsLink from "../utils.js";

describe("endPunctuation", () => {
  it("document", () => {
    expect(endPunctuation.document()).toMatchInlineSnapshot(`
      "### End with punctuation

      Suggestion: \`Alt text should end with punctuation\`

      End the alt text with a period, exclamation point, or question mark. This will make screen readers pause a bit after the last word in the alt text, which creates a more pleasant reading experience for the user.

      - ✅ A child holding a photograph.
      - 🚫 A child holding a photograph

      Hear an example: <https://doublegreat.dev/listen/punctuation-in-alt-text/>

      Configuration:

      <!-- prettier-ignore-start -->
      \`\`\`js
      // disable the rule:
      altText(\\"My alt text.\\", {\\"end-with-punctuation\\":false})
      \`\`\`
      <!-- prettier-ignore-end -->

      Sources:

      - <https://axesslab.com/alt-texts/#end-with-a-period>
      "
    `);
  });
  it("check", () => {
    expect(endPunctuation.check("A large black dog")).toMatchInlineSnapshot(`
      Array [
        "Alt text should end with punctuation (https://doublegreat.dev/alt-text/#end-with-punctuation).",
      ]
    `);
    expect(endPunctuation.check("A large block dog?")).toMatchInlineSnapshot(
      `Array []`
    );
  });
  it("`docs` matches generated GitHub `heading` link", async () => {
    expect.assertions(1);
    await expect(checkDocsLink(endPunctuation.heading)).resolves.toEqual(
      endPunctuation.docs
    );
  });
});
