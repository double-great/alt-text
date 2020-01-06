const test = require("tape");
const altText = require("../");

test("[altText] return no warning", assert => {
  assert.equal(altText("A large black dog."), undefined);
  assert.equal(altText("A child holding a photograph."), undefined);
  assert.equal(
    altText("An inhaler with a spacer connected to the mouthpiece."),
    undefined
  );
  assert.end();
});

test("[altText] return warnings", assert => {
  assert.equal(
    altText("A SCREENSHOT OF A DOG."),
    'Alt text should not contain "screenshot of".',
    "alt text rules are case insensitive"
  );

  assert.equal(
    altText("A SCREENSHOT OF A DOG"),
    'Alt text should not contain "screenshot of". Alt text should end in a period.',
    "more than one warning"
  );
  assert.equal(
    altText("An inhaler with a spacer connected to the mouthpiece"),
    "Alt text should end in a period."
  );
  assert.end();
});
