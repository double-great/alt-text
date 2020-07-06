const test = require("tape");
const clues = require("../clues");

test("[clues]", (assert) => {
  assert.equal(typeof clues, "object", "shape of clues is an object");
  assert.end();
});

Object.keys(clues).forEach((clue) => {
  test(`[clues] ${clue}`, (assert) => {
    assert.equal(
      typeof clues[clue].suggestion,
      "function",
      "value of `suggestion` is a function"
    );
    assert.equal(
      clues[clue].suggestion().endsWith("."),
      false,
      "`suggestion` must not end in period"
    );
    assert.ok(clues[clue].source, "must have `source`");
    assert.equal(
      typeof clues[clue].source,
      "object",
      "source must be an array"
    );
    assert.ok(clues[clue].rationale, "must have `rationale`");
    assert.ok(clues[clue].ok, "must have `ok`");
    assert.ok(clues[clue].notOk, "must have `notOk`");
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
      clues[clue].rules.forEach((rule) => {
        assert.equal(rule, rule.toLowerCase(), `"${rule}" must be lowercase`);
      });
    }
    if (clues[clue].listen) {
      assert.equal(
        typeof clues[clue].listen,
        "string",
        "`listen` must be a string"
      );
      assert.ok(
        clues[clue].listen.startsWith("https://"),
        "`listen` must start with 'https://'"
      );
    }

    assert.end();
  });
});
