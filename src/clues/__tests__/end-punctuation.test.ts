import { checkPunctuation } from "../end-punctuation";

test("checkPunctuation", () => {
  expect(checkPunctuation("a large black dog")).toMatchInlineSnapshot(`
      Array [
        "Alt text should end with punctuation (https://tinyurl.com/y5krn3ny).",
      ]
    `);
  expect(checkPunctuation("a large black dog.")).toMatchInlineSnapshot(
    [],
    `Array []`
  );
  expect(checkPunctuation("a large black dog!")).toMatchInlineSnapshot(
    [],
    `Array []`
  );
  expect(checkPunctuation("a large black dog?")).toMatchInlineSnapshot(
    [],
    `Array []`
  );
});
