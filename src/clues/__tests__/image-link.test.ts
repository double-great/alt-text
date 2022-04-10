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

      <!-- prettier-ignore-start -->
      \`\`\`js
      // disable the rule:
      altText(\\"My alt text.\\", {\\"image-is-link\\":false})
      \`\`\`
      <!-- prettier-ignore-end -->

      Sources:

      - <https://axesslab.com/alt-texts/#images-in-links>
      "
    `);
  });
  it("check", () => {
    expect(imageLink.check()).toMatchInlineSnapshot(
      `"Images inside a link tag require alt text that describes the purpose of the link (https://tinyurl.com/y7s7je5u)."`
    );
  });
  it("`docs` matches generated GitHub `heading` link", async () => {
    expect.assertions(1);
    await expect(checkDocsLink(imageLink.heading)).resolves.toEqual(
      imageLink.docs
    );
  });
});
