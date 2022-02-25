import { checkClue } from "../../../index.js";

test("contains", () => {
  expect(checkClue("A screenshot of a dog.")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not contain \\"screenshot of\\" (https://tinyurl.com/y3v3jgux).",
      ]
    `);
});
