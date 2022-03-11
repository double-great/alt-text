import { checkClue } from "../../clues.js";

test("startWith", () => {
  expect(checkClue("spacer image.")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not start with \\"spacer\\" (https://tinyurl.com/y5y98ygu).",
      ]
    `);
});
