import {
  checkClue,
  checkPunctuation,
  checkLength,
  checkOnlySpace,
  checkEmoji,
} from "../src/rules";

describe("rules", () => {
  test("checkClue.endWith", () => {
    expect(checkClue("A screenshot of a dog.jpg")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not contain \\"screenshot of\\" (https://git.io/JvqAM).",
        "Alt text should not end with \\".jpg\\" (https://git.io/JvfAf).",
      ]
    `);
    expect(checkClue("DSC_0010.jpg")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not end with \\".jpg\\" (https://git.io/JvfAf).",
      ]
    `);
    expect(checkClue("placeholder graphic")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not end with \\"graphic\\" (https://git.io/JvfAf).",
      ]
    `);
  });

  test("checkClue.startWith", () => {
    expect(checkClue("spacer image.")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not start with \\"spacer\\" (https://git.io/JvfAv).",
      ]
    `);
  });

  test("checkClue.exactMatch", () => {
    expect(checkClue("logo")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not be \\"logo\\" (https://git.io/JvqAK).",
      ]
    `);
  });

  test("checkClue.exactMatch", () => {
    expect(checkClue(" logo ")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not be \\"logo\\" (https://git.io/JvqAK).",
      ]
    `);
  });

  test("checkClue.contain", () => {
    expect(checkClue("A screenshot of a dog.")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not contain \\"screenshot of\\" (https://git.io/JvqAM).",
      ]
    `);
  });

  test("checkPunctuation", () => {
    expect(checkPunctuation("a large black dog")).toMatchInlineSnapshot(`
      Array [
        "Alt text should end with punctuation (https://git.io/JJk55).",
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
        "Alt text length should be less than 125 characters, it is currently 446 characters (https://git.io/Jvfxm).",
      ]
    `);
  });

  test("checkOnlySpace", () => {
    expect(checkOnlySpace(" ")).toMatchInlineSnapshot(`
      Array [
        "Alt text should not be a single space (https://git.io/Jvqim).",
      ]
    `);
  });

  test("checkEmoji", () => {
    expect(checkEmoji("An orange 🐈.")).toMatchInlineSnapshot(`
      Array [
        "Replace 🐈 in alt text with descriptive text (https://git.io/Jfhte).",
      ]
    `);
  });
});
