import altEndsWith from "../end-with";
import checkDocsLink from "../utils.js";

describe("altEndsWith", () => {
  it("document", () => {
    expect(altEndsWith.document()).toMatchInlineSnapshot(`
      "### Alt text should not end with

      Suggestion: \`Alt text should not end with \\".gif, .jpeg, .jpg, .png, .svg, .webp, graphic, image\\"\`

      A file name in alt text does not provide helpful context.

      - ✅ A child holding a photograph.
      - 🚫 photograph.jpg

      Configuration:

      <!-- prettier-ignore-start -->
      \`\`\`js
      // disable the rule:
      altText(\\"My alt text.\\", {\\"should-not-end-with\\":false})
      // adjust rule defaults:
      altText(\\"My alt text.\\", {\\"should-not-end-with\\":{\\"exclude\\":[\\".gif\\",\\".jpeg\\",\\".jpg\\",\\".png\\",\\".svg\\",\\".webp\\",\\"graphic\\",\\"image\\"]}})
      \`\`\`
      <!-- prettier-ignore-end -->

      Sources:

      - <https://axesslab.com/alt-texts/>
      "
    `);
  });
  it("check", () => {
    expect(altEndsWith.check("A screenshot of a dog.jpg"))
      .toMatchInlineSnapshot(`
      Array [
        "Alt text should not end with \\".jpg\\" (https://doublegreat.dev/alt-text/#alt-text-should-not-end-with).",
      ]
    `);
    expect(altEndsWith.check("DSC_0010.jpg")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not end with \\".jpg\\" (https://doublegreat.dev/alt-text/#alt-text-should-not-end-with).",
      ]
    `);
    expect(altEndsWith.check("placeholder graphic")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not end with \\"graphic\\" (https://doublegreat.dev/alt-text/#alt-text-should-not-end-with).",
      ]
    `);
    expect(
      altEndsWith.check("DSC_0010.gov", {
        exclude: [".gov"],
      })
    ).toMatchInlineSnapshot(`
      Array [
        "Alt text should not end with \\".gov\\" (https://doublegreat.dev/alt-text/#alt-text-should-not-end-with).",
      ]
    `);
  });
  it("`docs` matches generated GitHub `heading` link", async () => {
    expect.assertions(1);
    await expect(checkDocsLink(altEndsWith.heading)).resolves.toEqual(
      altEndsWith.docs
    );
  });
});
