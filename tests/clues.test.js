const test = require("tape");
const clues = require("../clues");

test("[clues]", assert => {
  assert.equal(typeof clues, "object", "shape of clues is an object");
  assert.end();
});

Object.keys(clues).forEach(clue => {
  test(`[clues] ${clue}`, assert => {
    assert.equal(
      typeof clues[clue].warning,
      "function",
      "value of `warning` is a function"
    );
    assert.equal(
      clues[clue].warning().endsWith("."),
      false,
      "`warning` must not end in period"
    );

    /*
    assert.ok(
      clues[clue].source,
      "must have `source`"
    );
    assert.ok(
      clues[clue].rationale,
      "must have `rationale`"
    );
    */
    assert.ok(clues[clue].heading, "must have `heading`");
    if (clues[clue].fn) {
      assert.equal(
        typeof clues[clue].fn,
        "function",
        "value of `fn` is a function"
      );
    }
    if (clues[clue].rules) {
      assert.equal(
        typeof clues[clue].rules,
        "object",
        "value of `rules` is an object (array)"
      );
      clues[clue].rules.forEach(rule => {
        assert.equal(rule, rule.toLowerCase(), `"${rule}" must be lowercase`);
      });
    }

    assert.end();
  });
});
