import test from "tape";
import {clues} from "../src/clues.js";

Object.keys(clues).forEach((clue) => {
  test(`[clues] ${clue}`, (assert) => {
    assert.equal(
      clues[clue].suggestion().endsWith("."),
      false,
      "`suggestion` must not end in period"
    );

    if (clues[clue].rules) {
      clues[clue].rules.forEach((rule) => {
        assert.equal(rule, rule.toLowerCase(), `"${rule}" must be lowercase`);
      });
    }
    if (clues[clue].listen) {
      assert.ok(
        clues[clue].listen.startsWith("https://"),
        "`listen` must start with 'https://'"
      );
    }
    assert.end();
  });
});
