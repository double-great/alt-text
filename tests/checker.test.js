const test = require("tape");
const checker = require("../");

test("checker", assert => {
  assert.equal(
    checker("A screenshot of a dog."),
    'Alt text should not contain "screenshot of".'
  );

  assert.equal(
    checker("A screenshot of a dog"),
    'Alt text should not contain "screenshot of". Alt text should end in a period.',
    "can have more than one warning"
  );

  assert.equal(
    checker("a large black dog"),
    "Alt text should end in a period."
  );

  assert.equal(checker("A large black dog."), undefined);

  assert.equal(
    checker(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ),
    "Alt text should be fewer than 100 characters."
  );

  assert.end();
});
