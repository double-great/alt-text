import altStartsWith from "../start-with";
import checkDocsLink from "../utils.js";

describe("altStartsWith", () => {
  it("document", () => {
    expect(altStartsWith.document()).toMatchInlineSnapshot(`
      "### Alt text should not start with

      Suggestion: \`Alt text should not start with "graphic, image, photo, photograph, photographer, picture, screen shot, screenshot, spacer"\`

      Usually, there’s no need to include words like “image”, “icon”, or “picture” in the alt text. People who can see will know this already, and screen readers announce the presence of an image.

      - ✅ A child holding a photograph.
      - 🚫 Image of a child.

      Configuration:

      <!-- prettier-ignore-start -->
      \`\`\`js
      // disable the rule:
      altText("My alt text.", {"should-not-start-with":false})
      // adjust rule defaults:
      altText("My alt text.", {"should-not-start-with":{"exclude":["graphic","image","photo","photograph","photographer","picture","screen shot","screenshot","spacer"]}})
      \`\`\`
      <!-- prettier-ignore-end -->

      Sources:

      - <https://www.w3.org/WAI/tutorials/images/tips/#tips>
      - <https://axesslab.com/alt-texts/#dont-say-its-an-image>
      "
    `);
  });
  it("check", () => {
    expect(altStartsWith.check("spacer image")).toMatchInlineSnapshot(`
      [
        "Alt text should not start with "spacer" (https://doublegreat.dev/alt-text/#alt-text-should-not-start-with).",
      ]
    `);
    expect(altStartsWith.check("hotdog with bun", { exclude: ["hotdog"] }))
      .toMatchInlineSnapshot(`
      [
        "Alt text should not start with "hotdog" (https://doublegreat.dev/alt-text/#alt-text-should-not-start-with).",
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
