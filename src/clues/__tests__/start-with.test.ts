import altStartsWith from "../start-with";
import checkDocsLink from "../utils.js";

describe("altStartsWith", () => {
  it("document", () => {
    expect(altStartsWith.document()).toMatchInlineSnapshot(`
      "### Alt text should not start with

      Suggestion: \`Alt text should not start with \\"graphic, image, photo, photograph, photographer, picture, screen shot, screenshot, spacer\\"\`

      Usually, there’s no need to include words like “image”, “icon”, or “picture” in the alt text. People who can see will know this already, and screen readers announce the presence of an image.

      - ✅ A child holding a photograph.
      - 🚫 Image of a child.

      Sources:

      - <https://www.w3.org/WAI/tutorials/images/tips/#tips>
      - <https://axesslab.com/alt-texts/#dont-say-its-an-image>
      "
    `);
  });
  it("check", () => {
    expect(altStartsWith.check("spacer image")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not start with \\"spacer\\" (https://tinyurl.com/y5y98ygu).",
      ]
    `);
  });
  it("`docs` matches generated GitHub `heading` link", async () => {
    expect.assertions(1);
    await expect(checkDocsLink(altStartsWith.heading)).resolves.toEqual(
      altStartsWith.docs
    );
  });
});
