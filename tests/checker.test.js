const test = require("tape");
const checker = require("../");

test("checker", assert => {
  assert.equal(
    checker("a screenshot of a dog"),
    'Alt text should not contain "screenshot of".'
  );
  assert.equal(checker("a large black dog"), "");
  assert.end();
});
