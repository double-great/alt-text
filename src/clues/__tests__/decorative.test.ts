import decorative from "../decorative";
import checkDocsLink from "../utils.js";

describe("decorative", () => {
  it("document", () => {
    expect(decorative.document()).toMatchInlineSnapshot(`
      "### Image is decorative

      Suggestion: \`Empty alt text should only be used for decorative images\`

      Provide \\"null\\" \`alt\` attributes (using \`alt=\\"\\"\`) for images which do not provide information or do not require alternative text because the image is described in the page content. Some developers will mistakenly leave off the alt attribute altogether on images which they deem do not need alternatives. This is not helpful to assistive technology users because the assistive technology, such as screen reader, will often read the source attribute (i.e., file name) as the alternative text. To tell assistive technology to ignore an image, use a \\"blank alternative text\\" attribute: \`alt=\\"\\"\`.

      - ✅ \`<img src=\\"decorative-photo.jpg\\" alt=\\"\\">\`
      - 🚫 \`<img src=\\"quarterly-earnings-chart.png\\" alt=\\"\\"/>\`

      Configuration:

      \`\`\`js
      // disable the rule:
      altText(\\"My alt text.\\", { \\"image-is-decorative\\": false });
      \`\`\`

      Sources:

      - <https://dequeuniversity.com/rules/axe/3.0/image-alt>
      "
    `);
  });
  it("check", () => {
    expect(decorative.check()).toMatchInlineSnapshot(
      `"Empty alt text should only be used for decorative images (https://tinyurl.com/yxnvejgv)."`
    );
  });
  it("`docs` matches generated GitHub `heading` link", async () => {
    expect.assertions(1);
    await expect(checkDocsLink(decorative.heading)).resolves.toEqual(
      decorative.docs
    );
  });
});
