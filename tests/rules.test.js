const test = require("tape");
const rules = require("../rules");

test("[rules] checkClue.endWith", assert => {
  assert.deepEqual(
    rules.checkClue("A screenshot of a dog.jpg"),
    [
      'Alt text should not contain "screenshot of".',
      'Alt text should not end with ".jpg".'
    ],
    "can have more than one warning"
  );
  assert.deepEqual(rules.checkClue("DSC_0010.jpg"), [
    'Alt text should not end with ".jpg".'
  ]);
  assert.deepEqual(rules.checkClue("placeholder graphic"), [
    'Alt text should not end with "graphic".'
  ]);
  assert.end();
});

test("[rules] checkClue.startWith", assert => {
  assert.deepEqual(rules.checkClue("spacer image."), [
    'Alt text should not start with "spacer".'
  ]);
  assert.end();
});

test("[rules] checkClue.contain", assert => {
  assert.deepEqual(rules.checkClue("A screenshot of a dog."), [
    'Alt text should not contain "screenshot of".'
  ]);
  assert.end();
});

test("[rules] checkPeriod", assert => {
  assert.deepEqual(rules.checkPeriod("a large black dog"), [
    "Alt text should end in a period."
  ]);
  assert.end();
});

test("[rules] checkLength", assert => {
  assert.deepEqual(
    rules.checkLength(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ),
    [
      "Alt text length should be less than 100 characters, it is currently 446 characters."
    ]
  );
  assert.end();
});

test("[rules] checkOnlySpace", assert => {
  assert.deepEqual(rules.checkOnlySpace(" "), [
    "Alt text must not only contain a space."
  ]);
  assert.end();
});
