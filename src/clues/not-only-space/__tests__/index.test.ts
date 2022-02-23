import { checkOnlySpace } from "..";

test("checkOnlySpace", () => {
  expect(checkOnlySpace(" ")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not be a single space (https://tinyurl.com/y2o7uctu).",
      ]
    `);
});
