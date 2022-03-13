import noAlt from "../no-alt";
import checkDocsLink from "../utils.js";

describe("noAlt", () => {
  it("document", () => {
    expect(noAlt.document()).toMatchInlineSnapshot(`
      "### Missing alt attribute

      Suggestion: \`Missing \\"alt\\" attribute\`

      All images must have alternate text to convey their purpose and meaning to screen reader users.

      - ✅ \`<img src=\\"photograph.jpg\\" alt=\\"A child holding a photograph.\\">\`
      - 🚫 \`<img src=\\"photograph.jpg\\">\`

      Configuration:

      \`\`\`js
      // disable the rule:
      new altText(\\"My alt text.\\", { \\"no-alt\\": false }).check();
      \`\`\`

      Sources:

      - <https://dequeuniversity.com/rules/axe/3.4/image-alt>
      "
    `);
  });
  it("check", () => {
    expect(noAlt.check()).toMatchInlineSnapshot(
      `"Missing \\"alt\\" attribute (https://tinyurl.com/yybc6bsy)."`
    );
  });
  it("`docs` matches generated GitHub `heading` link", async () => {
    expect.assertions(1);
    await expect(checkDocsLink(noAlt.heading)).resolves.toEqual(noAlt.docs);
  });
});
