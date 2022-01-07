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
      `"Empty alt text should only be used for decorative images (https://git.io/Jvqx8)."`
    );
    expect(altText("")).toMatchInlineSnapshot(
      `"Empty alt text should only be used for decorative images (https://git.io/Jvqx8)."`
    );
    expect(altText(null)).toMatchInlineSnapshot(
      `"Empty alt text should only be used for decorative images (https://git.io/Jvqx8)."`
    );
  });

  test("return suggestions", () => {
    expect(altText("A SCREENSHOT OF A DOG.")).toMatchInlineSnapshot(
      `"Alt text should not contain \\"screenshot of\\" (https://git.io/JvqAM)."`
    );
    expect(altText("A SCREENSHOT OF A DOG")).toMatchInlineSnapshot(
      `"Alt text should not contain \\"screenshot of\\" (https://git.io/JvqAM). Alt text should end with punctuation (https://git.io/JJk55)."`
    );
    expect(
      altText("An inhaler with a spacer connected to the mouthpiece")
    ).toMatchInlineSnapshot(
      `"Alt text should end with punctuation (https://git.io/JJk55)."`
    );
    expect(altText("😸.")).toMatchInlineSnapshot(
      `"Replace 😸 in alt text with descriptive text (https://git.io/Jfhte)."`
    );
  });
});
