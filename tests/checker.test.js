const test = require("tape");
const checker = require("../");

test("checker", assert => {
  assert.equal(
    checker("A screenshot of a dog."),
    'Alt text should not contain "screenshot of".'
  );
  assert.equal(
    checker("a large black dog"),
    "Alt text should end in a period."
  );
  assert.equal(checker("A large black dog."), undefined);
  assert.end();
});
