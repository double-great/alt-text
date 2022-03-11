import avoidEmoji from "../avoid-emoji";
import checkDocsLink from "../utils.js";

describe("avoidEmoji", () => {
  it("check", () => {
    expect(avoidEmoji.check("An orange 🐈.")).toMatchInlineSnapshot(`
      Array [
        "Replace 🐈 in alt text with descriptive text (https://tinyurl.com/yylrxrus).",
      ]
    `);
    expect(avoidEmoji.check("An orange cat.")).toMatchInlineSnapshot(
      `Array []`
    );
  });
  it("`docs` matches generated GitHub `heading` link", async () => {
    expect.assertions(1);
    await expect(checkDocsLink(avoidEmoji.heading)).resolves.toEqual(
      avoidEmoji.docs
    );
  });
  it("document", () => {
    expect(avoidEmoji.document()).toMatchInlineSnapshot(`
      "### Avoid emoji

      Suggestion: \`Replace 🐈 in alt text with descriptive text\`

      Emoji have their own text descriptions. These descriptions can vary between operating systems and software. The spoken description of the emoji may not match your visual intention.

      - ✅ \`<img src=\\"cat.jpg\\" alt=\\"An orange cat.\\">\`
      - 🚫 \`<img src=\\"cat.png\\" alt=\\"An orange 🐈.\\"/>\`

      Hear an example: <https://doublegreat.dev/listen/emoji/>

      Sources:

      - <https://www.youtube.com/watch?v=uIbPcZq6izk>
      - <https://readabilityguidelines.co.uk/images/emojis/>
      "
    `);
  });
});
