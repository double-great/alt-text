import imageLink from "../image-link";
import checkDocsLink from "../utils.js";

describe("imageLink", () => {
  it("document", () => {
    expect(imageLink.document()).toMatchInlineSnapshot(`
      "### Image is link

      Suggestion: \`Images inside a link tag require alt text that describes the purpose of the link\`

      Images inside a link tag require alt text that describes the purpose of the link.

      - ✅ \`<a href=\\"https://github.com/double-great\\"><img src=\\"logo.png\\" alt=\\"double great on GitHub\\"></a>\`
      - 🚫 \`<a href=\\"https://github.com/double-great\\"><img src=\\"logo.png\\" alt=\\"double great logo\\"></a>\`

      Configuration:

      \`\`\`js
      // disable the rule:
      altText(\\"My alt text.\\", { \\"image-is-link\\": false });
      \`\`\`

      Sources:

      - <https://axesslab.com/alt-texts/#images-in-links>
      "
    `);
  });
  it("check", () => {
    expect(imageLink.check()).toMatchInlineSnapshot(
      `"Images inside a link tag require alt text that describes the purpose of the link (https://tinyurl.com/yxhq2k5w)."`
    );
  });
  it("`docs` matches generated GitHub `heading` link", async () => {
    expect.assertions(1);
    await expect(checkDocsLink(imageLink.heading)).resolves.toEqual(
      imageLink.docs
    );
  });
});
