import altText from "../index";

describe("altText", () => {
  test("return no suggestion", () => {
    expect(altText("A large black dog.")).toBeUndefined();
    expect(altText("A child holding a photograph.")).toBeUndefined();
    expect(
      altText("An inhaler with a spacer connected to the mouthpiece.")
    ).toBeUndefined();
  });

  test("undefined", () => {
    expect(altText()).toMatchInlineSnapshot(
      `"Empty alt text should only be used for decorative images (https://tinyurl.com/yxnvejgv)."`
    );
    expect(altText("")).toMatchInlineSnapshot(
      `"Empty alt text should only be used for decorative images (https://tinyurl.com/yxnvejgv)."`
    );
  });

  test("return suggestions", () => {
    expect(altText("A SCREENSHOT OF A DOG.")).toMatchInlineSnapshot(
      `"Alt text should not contain \\"screenshot of\\" (https://tinyurl.com/y3v3jgux)."`
    );
    expect(altText("A SCREENSHOT OF A DOG")).toMatchInlineSnapshot(
      `"Alt text should not contain \\"screenshot of\\" (https://tinyurl.com/y3v3jgux). Alt text should end with punctuation (https://tinyurl.com/y5krn3ny)."`
    );
    expect(
      altText("An inhaler with a spacer connected to the mouthpiece")
    ).toMatchInlineSnapshot(
      `"Alt text should end with punctuation (https://tinyurl.com/y5krn3ny)."`
    );
    expect(altText("😸.")).toMatchInlineSnapshot(
      `"Replace 😸 in alt text with descriptive text (https://tinyurl.com/yylrxrus)."`
    );
  });
});
