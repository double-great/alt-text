const test = require("tape");
const checker = require("../");

test("checker", assert => {
  assert.equal(checker("a screenshot of a dog"), "Warning!");
  assert.end();
});
