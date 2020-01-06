const test = require("tape");
const clues = require("../clues");

test("[clues]", assert => {
  assert.equal(typeof clues, "object", "shape of clues is an object");
  assert.end();
});

Object.keys(clues).forEach(clue => {
  test(`[clues] ${clue}`, assert => {
    assert.equal(
      typeof clues[clue].fn,
      "function",
      "value of `fn` is a function"
    );
    assert.equal(
      typeof clues[clue].message,
      "function",
      "value of `message` is a function"
    );
    assert.equal(
      typeof clues[clue].rules,
      "object",
      "value of `rules` is an object (array)"
    );
    clues[clue].rules.forEach(rule => {
      assert.equal(rule, rule.toLowerCase(), `"${rule}" must be lowercase`);
    });
    assert.end();
  });
});
