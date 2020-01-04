const test = require("tape");
const checker = require("../");

test("checker", assert => {
  assert.equal(
    checker("A screenshot of a dog."),
    'Alt text should not contain "screenshot of".'
  );

  assert.equal(
    checker("A SCREENSHOT OF A DOG."),
    'Alt text should not contain "screenshot of".',
    "forbidden matching is case insensitive"
  );

  assert.equal(
    checker("A screenshot of a dog.jpg"),
    'Alt text should not contain "screenshot of". Alt text should not end with ".jpg".',
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

  assert.equal(checker(" "), "Alt text must not only contain a space.");

  assert.equal(
    checker("spacer image."),
    'Alt text should not start with "spacer".'
  );

  assert.equal(checker("A child holding a photograph."), undefined);

  assert.equal(
    checker("An inhaler with a spacer connected to the mouthpiece."),
    undefined
  );

  assert.equal(checker("DSC_0010.jpg"), 'Alt text should not end with ".jpg".');

  assert.equal(
    checker("placeholder graphic"),
    'Alt text should not end with "graphic".'
  );

  assert.end();
});
