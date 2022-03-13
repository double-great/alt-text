import exactMatch from "../exact-match";
import checkDocsLink from "../utils.js";

describe("exactMatch", () => {
  it("document", () => {
    expect(exactMatch.document()).toMatchInlineSnapshot(`
      "### Alt text is unhelpful

      Suggestion: \`Alt text should not be \\"*, alt, arrow, artwork, blank, bullet, button, chart, diagram, drawing, empty, graph, graphic, icon, image, logo, more, painting, photo, photograph, placeholder, screen shot, screenshot, spacer, table, temp\\"\`

      Usually, there’s no need to include words like “image”, “icon”, or “picture” in the alt text. People who can see will know this already, and screen readers announce the presence of an image.

      - ✅ A child holding a photograph.
      - 🚫 photograph

      Configuration:

      \`\`\`js
      // disable the rule:
      new altText(\\"My alt text.\\", {
        \\"is-unhelpful\\": false
      });

      // adjust rule defaults:
      new altText(\\"My alt text.\\", {
        \\"is-unhelpful\\": {
          \\"exclude\\": [
            \\"*\\",
            \\"alt\\",
            \\"arrow\\",
            \\"artwork\\",
            \\"blank\\",
            \\"bullet\\",
            \\"button\\",
            \\"chart\\",
            \\"diagram\\",
            \\"drawing\\",
            \\"empty\\",
            \\"graph\\",
            \\"graphic\\",
            \\"icon\\",
            \\"image\\",
            \\"logo\\",
            \\"more\\",
            \\"painting\\",
            \\"photo\\",
            \\"photograph\\",
            \\"placeholder\\",
            \\"screen shot\\",
            \\"screenshot\\",
            \\"spacer\\",
            \\"table\\",
            \\"temp\\"
          ]
        }
      });
      \`\`\`

      Sources:

      - <https://www.w3.org/WAI/tutorials/images/tips/#tips>
      - <https://axesslab.com/alt-texts/#dont-say-its-an-image>
      "
    `);
  });
  it("check", () => {
    expect(exactMatch.check("logo")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not be \\"logo\\" (https://tinyurl.com/yxwc2hof).",
      ]
    `);
  });
  it("`docs` matches generated GitHub `heading` link", async () => {
    expect.assertions(1);
    await expect(checkDocsLink(exactMatch.heading)).resolves.toEqual(
      exactMatch.docs
    );
  });
});
