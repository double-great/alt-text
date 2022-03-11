import charLength from "../char-length";
import checkDocsLink from "../utils.js";

describe("charLength", () => {
  it("check", () => {
    expect(
      charLength.check(
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      )
    ).toMatchInlineSnapshot(`
      Array [
        "Alt text length should be less than 125 characters, it is currently 446 characters (https://tinyurl.com/y2f7rhao).",
      ]
    `);
    expect(
      charLength.check("Lorem ipsum dolor sit amet")
    ).toMatchInlineSnapshot(`Array []`);
  });
  it("`docs` matches generated GitHub `heading` link", async () => {
    expect.assertions(1);
    await expect(checkDocsLink(charLength.heading)).resolves.toEqual(
      charLength.docs
    );
  });
  it("document", () => {
    expect(charLength.document()).toMatchInlineSnapshot(`
      "### Character length

      Suggestion: \`Alt text length should be less than 125 characters, it is currently 446 characters\`

      Alt text should be less than 125 characters in length. The JAWS screen reader reads alt text in 125 character chunks. Any information about the image, such as copyright information, image source or extra information should be placed in the caption text below the image.

      - ✅ George Washington and Lafayette on horseback talking to soldiers in snow at Valley Forge.
      - 🚫 Caption: Painting “Washington and Lafayette at Valley Forge” by John Ward Dunsmore from 1907. Image courtesy of the Library of Congress.

      Sources:

      - <https://accessibility.psu.edu/images/imageshtml/#alt>
      - <https://terrillthompson.com/tests/altlength.html>
      "
    `);
  });
});
