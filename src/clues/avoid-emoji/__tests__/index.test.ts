import { checkEmoji } from "..";

test("checkEmoji", () => {
  expect(checkEmoji("An orange 🐈.")).toMatchInlineSnapshot(`
      Array [
        "Replace 🐈 in alt text with descriptive text (https://tinyurl.com/yylrxrus).",
      ]
    `);
});
