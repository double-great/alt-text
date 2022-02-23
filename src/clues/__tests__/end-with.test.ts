import checkClue from "../../check-clue";

test("endWith", () => {
  expect(checkClue("A screenshot of a dog.jpg")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not contain \\"screenshot of\\" (https://tinyurl.com/y3v3jgux).",
        "Alt text should not end with \\".jpg\\" (https://tinyurl.com/yy2q8bbb).",
      ]
    `);
  expect(checkClue("DSC_0010.jpg")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not end with \\".jpg\\" (https://tinyurl.com/yy2q8bbb).",
      ]
    `);
  expect(checkClue("placeholder graphic")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not end with \\"graphic\\" (https://tinyurl.com/yy2q8bbb).",
      ]
    `);
});
