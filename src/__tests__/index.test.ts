import altText from "../index.js";

describe("altText", () => {
  const checkSpy = jest.spyOn(altText.prototype, "check");

  test("return no suggestion", () => {
    new altText("A large black dog.").check();
    expect(checkSpy.mock.results[0].value).toBeUndefined();
  });

  test("return no suggestion", () => {
    new altText("A child holding a photograph.").check();
    expect(checkSpy.mock.results[0].value).toBeUndefined();
  });

  test("return no suggestion", () => {
    new altText(
      "An inhaler with a spacer connected to the mouthpiece."
    ).check();
    expect(checkSpy.mock.results[0].value).toBeUndefined();
  });

  test("empty", () => {
    new altText().check();
    expect(checkSpy.mock.results[0].value).toMatchInlineSnapshot(
      `"Empty alt text should only be used for decorative images (https://tinyurl.com/yxnvejgv)."`
    );
  });

  test("empty", () => {
    new altText("").check();
    expect(checkSpy.mock.results[0].value).toMatchInlineSnapshot(
      `"Empty alt text should only be used for decorative images (https://tinyurl.com/yxnvejgv)."`
    );
  });

  test("empty, disabled", () => {
    new altText("", { "image-is-decorative": false }).check();
    expect(checkSpy.mock.results[0].value).toBeUndefined();
  });

  test("return suggestions", () => {
    new altText("A SCREENSHOT OF A DOG.").check();
    expect(checkSpy.mock.results[0].value).toMatchInlineSnapshot(
      `"Alt text should not contain \\"screenshot of\\" (https://tinyurl.com/y3v3jgux)."`
    );
  });

  test("return suggestions", () => {
    new altText("A SCREENSHOT OF A DOG").check();
    expect(checkSpy.mock.results[0].value).toMatchInlineSnapshot(
      `"Alt text should not contain \\"screenshot of\\" (https://tinyurl.com/y3v3jgux). Alt text should end with punctuation (https://tinyurl.com/y5krn3ny)."`
    );
  });

  test("return suggestions", () => {
    new altText("An inhaler with a spacer connected to the mouthpiece").check();
    expect(checkSpy.mock.results[0].value).toMatchInlineSnapshot(
      `"Alt text should end with punctuation (https://tinyurl.com/y5krn3ny)."`
    );
  });

  test("return suggestions", () => {
    new altText("😸.").check();
    expect(checkSpy.mock.results[0].value).toMatchInlineSnapshot(
      `"Replace 😸 in alt text with descriptive text (https://tinyurl.com/yylrxrus)."`
    );
  });

  /*
    test("config, enabled", () => {
      
    new altText("A large black dog.", {
      "character-length": { length: 10 },
    }).check();
    expect(checkSpy.mock.results[0].value).toMatchInlineSnapshot(
      `"Alt text length should be less than 10 characters, it is currently 18 characters (https://tinyurl.com/y2f7rhao)."`
    );
  });*/

  test("config, disabled", () => {
    new altText("An orange 🐈.", { "avoid-emoji": false }).check();
    expect(checkSpy.mock.results[0].value).toMatchInlineSnapshot(`undefined`);
  });

  test("config, disabled", () => {
    new altText(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      { "character-length": false }
    ).check();
    expect(checkSpy.mock.results[0].value).toMatchInlineSnapshot(`undefined`);
  });

  test("config, disabled", () => {
    new altText("A screenshot of a dog.", {
      "contains-unhelpful-word": false,
    }).check();
    expect(checkSpy.mock.results[0].value).toMatchInlineSnapshot(`undefined`);
  });

  test("config, disabled", () => {
    new altText("An orange cat", { "end-with-puncutation": false }).check();
    expect(checkSpy.mock.results[0].value).toMatchInlineSnapshot(`undefined`);
  });

  test("config, disabled", () => {
    new altText("An orange cat.jpg", {
      "should-not-end-with": false,
      "end-with-puncutation": false,
    }).check();
    expect(checkSpy.mock.results[0].value).toMatchInlineSnapshot(`undefined`);
  });

  test("config, disabled", () => {
    new altText("Photograph: an orange cat.", {
      "should-not-start-with": false,
    }).check();
    expect(checkSpy.mock.results[0].value).toMatchInlineSnapshot(`undefined`);
  });

  test("config, disabled", () => {
    new altText(" ", { "empty-alt-text": false }).check();
    expect(checkSpy.mock.results[0].value).toMatchInlineSnapshot(`undefined`);
  });

  test("config, disabled", () => {
    new altText("icon", { "is-unhelpful": false }).check();
    expect(checkSpy.mock.results[0].value).toMatchInlineSnapshot(
      `"Alt text should end with punctuation (https://tinyurl.com/y5krn3ny)."`
    );
  });

  test("config, disabled", () => {
    new altText("icon", {
      "is-unhelpful": false,
      "end-with-puncutation": false,
    }).check();
    expect(checkSpy.mock.results[0].value).toMatchInlineSnapshot(`undefined`);
  });
});
