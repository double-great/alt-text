import altText from "../index.js";

describe("altText", () => {
  test("return no suggestion", () => {
    expect(altText("A large black dog.")).toBeUndefined();
    expect(altText("A child holding a photograph.")).toBeUndefined();
    expect(
      altText("An inhaler with a spacer connected to the mouthpiece.")
    ).toBeUndefined();
  });

  test("empty", () => {
    expect(altText()).toMatchInlineSnapshot(
      `"Empty alt text should only be used for decorative images (https://doublegreat.dev/alt-text/#image-is-decorative)."`
    );
    expect(altText("")).toMatchInlineSnapshot(
      `"Empty alt text should only be used for decorative images (https://doublegreat.dev/alt-text/#image-is-decorative)."`
    );
  });

  test("empty, disabled", () => {
    expect(altText("", { "image-is-decorative": false })).toBeUndefined();
  });

  test("return suggestions", () => {
    expect(altText("A SCREENSHOT OF A DOG.")).toMatchInlineSnapshot(
      `"Alt text should not contain "screenshot of" (https://doublegreat.dev/alt-text/#alt-text-contains-unhelpful-words)."`
    );
    expect(altText("A SCREENSHOT OF A DOG")).toMatchInlineSnapshot(
      `"Alt text should not contain "screenshot of" (https://doublegreat.dev/alt-text/#alt-text-contains-unhelpful-words). Alt text should end with punctuation (https://doublegreat.dev/alt-text/#end-with-punctuation)."`
    );
    expect(
      altText("An inhaler with a spacer connected to the mouthpiece")
    ).toMatchInlineSnapshot(
      `"Alt text should end with punctuation (https://doublegreat.dev/alt-text/#end-with-punctuation)."`
    );
    expect(altText("😸.")).toMatchInlineSnapshot(
      `"Replace 😸 in alt text with descriptive text (https://doublegreat.dev/alt-text/#avoid-emoji)."`
    );
  });

  test("config, disabled", () => {
    expect(
      altText("An orange 🐈.", { "avoid-emoji": false })
    ).toMatchInlineSnapshot(`undefined`);

    expect(
      altText(
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        { "character-length": false }
      )
    ).toMatchInlineSnapshot(`undefined`);

    expect(
      altText("A screenshot of a dog.", {
        "contains-unhelpful-word": false,
      })
    ).toMatchInlineSnapshot(`undefined`);

    expect(
      altText("An orange cat", { "end-with-punctuation": false })
    ).toMatchInlineSnapshot(`undefined`);

    expect(
      altText("An orange cat.jpg", {
        "should-not-end-with": false,
        "end-with-punctuation": false,
      })
    ).toMatchInlineSnapshot(`undefined`);

    expect(
      altText("Photograph: an orange cat.", {
        "should-not-start-with": false,
      })
    ).toMatchInlineSnapshot(`undefined`);

    expect(altText(" ", { "empty-alt-text": false })).toMatchInlineSnapshot(
      `undefined`
    );

    expect(altText("icon", { "is-unhelpful": false })).toMatchInlineSnapshot(
      `"Alt text should end with punctuation (https://doublegreat.dev/alt-text/#end-with-punctuation)."`
    );

    expect(
      altText("icon", {
        "is-unhelpful": false,
        "end-with-punctuation": false,
      })
    ).toMatchInlineSnapshot(`undefined`);
  });
});
