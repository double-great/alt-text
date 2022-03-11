import { checkLength } from "../char-length";

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
