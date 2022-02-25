import { checkClue } from "../../../index.js";

test("exactMatch", () => {
  expect(checkClue("logo")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not be \\"logo\\" (https://tinyurl.com/yxwc2hof).",
      ]
    `);
});
