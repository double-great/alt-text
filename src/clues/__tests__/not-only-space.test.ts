import notOnlySpace from "../not-only-space";
import checkDocsLink from "../utils.js";

describe("notOnlySpace", () => {
  it("document", () => {
    expect(notOnlySpace.document()).toMatchInlineSnapshot(`
      "### Empty alt text

      Suggestion: \`Alt text should not be a single space\`

      If you use null (empty) alt text (\`alt=\\"\\"\`) to hide decorative images, make sure that there is no space character in between the quotes. **If a space character is present, the image may not be effectively hidden from assistive technologies.** For instance, some screen readers will still announce the presence of an image if a space character is put between the quotes.

      - ✅ \`<img src=\\"photo.png\\" alt=\\"\\">\`
      - 🚫 \`<img src=\\"photo.png\\" alt=\\" \\">\`

      Configuration:

      \`\`\`js
      // disable the rule:
      altText(\\"My alt text.\\", { \\"empty-alt-text\\": false });
      \`\`\`

      Sources:

      - <https://www.w3.org/WAI/tutorials/images/tips/#tips>
      "
    `);
  });
  it("check", () => {
    expect(notOnlySpace.check(" ")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not be a single space (https://tinyurl.com/y877n89g).",
      ]
    `);
  });
  it("`docs` matches generated GitHub `heading` link", async () => {
    expect.assertions(1);
    await expect(checkDocsLink(notOnlySpace.heading)).resolves.toEqual(
      notOnlySpace.docs
    );
  });
});
