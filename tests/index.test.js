const test = require("tape");
const altText = require("../");

test("return no warning", assert => {
  assert.equal(altText("A large black dog."), undefined);
  assert.equal(altText("A child holding a photograph."), undefined);
  assert.equal(
    altText("An inhaler with a spacer connected to the mouthpiece."),
    undefined
  );
  assert.end();
});

test("clues.checkClue.endWith", assert => {
  assert.equal(
    altText("A screenshot of a dog.jpg"),
    'Alt text should not contain "screenshot of". Alt text should not end with ".jpg".',
    "can have more than one warning"
  );
  assert.equal(altText("DSC_0010.jpg"), 'Alt text should not end with ".jpg".');
  assert.equal(
    altText("placeholder graphic"),
    'Alt text should not end with "graphic".'
  );
  assert.end();
});

test("clues.checkClue.startWith", assert => {
  assert.equal(
    altText("spacer image."),
    'Alt text should not start with "spacer".'
  );
  assert.end();
});

test("clues.checkClue.contain", assert => {
  assert.equal(
    altText("A screenshot of a dog."),
    'Alt text should not contain "screenshot of".'
  );
  assert.equal(
    altText("A SCREENSHOT OF A DOG."),
    'Alt text should not contain "screenshot of".',
    "clue matching is case insensitive"
  );
  assert.end();
});

test("clues.checkPeriod", assert => {
  assert.equal(
    altText("a large black dog"),
    "Alt text should end in a period."
  );
  assert.end();
});

test("clues.checkLength", assert => {
  assert.equal(
    altText(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ),
    "Alt text should be fewer than 100 characters."
  );
  assert.end();
});

test("clues.checkOnlySpace", assert => {
  assert.equal(altText(" "), "Alt text must not only contain a space.");
  assert.end();
});
