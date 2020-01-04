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

  assert.end();
});
