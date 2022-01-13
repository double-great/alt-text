import {
  checkClue,
  checkPunctuation,
  checkLength,
  checkOnlySpace,
  checkEmoji,
} from "../rules";

describe("rules", () => {
  test("checkClue.endWith", () => {
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

  test("checkClue.startWith", () => {
    expect(checkClue("spacer image.")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not start with \\"spacer\\" (https://tinyurl.com/y5y98ygu).",
      ]
    `);
  });

  test("checkClue.exactMatch", () => {
    expect(checkClue("logo")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not be \\"logo\\" (https://tinyurl.com/yxwc2hof).",
      ]
    `);
  });

  test("checkClue.exactMatch", () => {
    expect(checkClue(" logo ")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not be \\"logo\\" (https://tinyurl.com/yxwc2hof).",
      ]
    `);
  });

  test("checkClue.contain", () => {
    expect(checkClue("A screenshot of a dog.")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not contain \\"screenshot of\\" (https://tinyurl.com/y3v3jgux).",
      ]
    `);
  });

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

  test("checkLength", () => {
    expect(
      checkLength(
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      )
    ).toMatchInlineSnapshot(`
      Array [
        "Alt text length should be less than 125 characters, it is currently 446 characters (https://tinyurl.com/y2f7rhao).",
      ]
    `);
  });

  test("checkOnlySpace", () => {
    expect(checkOnlySpace(" ")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not be a single space (https://tinyurl.com/y2o7uctu).",
      ]
    `);
  });

  test("checkEmoji", () => {
    expect(checkEmoji("An orange 🐈.")).toMatchInlineSnapshot(`
      Array [
        "Replace 🐈 in alt text with descriptive text (https://tinyurl.com/yylrxrus).",
      ]
    `);
  });
});
