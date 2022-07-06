import altContains from "../contains";
import checkDocsLink from "../utils.js";

describe("altContains", () => {
  it("document", () => {
    expect(altContains.document()).toMatchInlineSnapshot(`
      "### Alt text contains unhelpful words

      Suggestion: \`Alt text should not contain \\"graphic of, image of, photo of, photo:, photograph of, photographer:, picture of, screen shot of, screenshot of\\"\`

      Screen readers announce the presence of an image before reading the alt text. Adding “picture of” or “photo of” is redundant in this context.

      - ✅ Dog jumping through a hoop.
      - 🚫 Image of a dog jumping through a hoop.

      Configuration:

      <!-- prettier-ignore-start -->
      \`\`\`js
      // disable the rule:
      altText(\\"My alt text.\\", {\\"contains-unhelpful-word\\":false})
      // adjust rule defaults:
      altText(\\"My alt text.\\", {\\"contains-unhelpful-word\\":{\\"exclude\\":[\\"graphic of\\",\\"image of\\",\\"photo of\\",\\"photo:\\",\\"photograph of\\",\\"photographer:\\",\\"picture of\\",\\"screen shot of\\",\\"screenshot of\\"]}})
      \`\`\`
      <!-- prettier-ignore-end -->

      Sources:

      - <https://www.w3.org/WAI/tutorials/images/tips/#tips>
      - <https://axesslab.com/alt-texts/#dont-say-its-an-image>
      "
    `);
  });
  it("check", () => {
    expect(altContains.check("A screenshot of a dog.")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not contain \\"screenshot of\\" (https://doublegreat.dev/alt-text/#alt-text-contains-unhelpful-words).",
      ]
    `);
    expect(
      altContains.check("A photo of a large black dog illustration.", {
        exclude: ["illustration"],
      })
    ).toMatchInlineSnapshot(`
      Array [
        "Alt text should not contain \\"illustration\\" (https://doublegreat.dev/alt-text/#alt-text-contains-unhelpful-words).",
      ]
    `);
  });
  it("`docs` matches generated GitHub `heading` link", async () => {
    expect.assertions(1);
    await expect(checkDocsLink(altContains.heading)).resolves.toEqual(
      altContains.docs
    );
  });
});
