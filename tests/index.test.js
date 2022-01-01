import test from "tape";
import altText from "../src/index.js";

test("[altText] return no suggestion", (assert) => {
  assert.equal(altText("A large black dog."), undefined);
  assert.equal(altText("A child holding a photograph."), undefined);
  assert.equal(
    altText("An inhaler with a spacer connected to the mouthpiece."),
    undefined
  );
  assert.end();
});

test("[altText] undefined", (assert) => {
  assert.equal(
    altText(),
    "Empty alt text should only be used for decorative images (https://git.io/Jvqx8)."
  );
  assert.equal(
    altText(""),
    "Empty alt text should only be used for decorative images (https://git.io/Jvqx8)."
  );
  assert.equal(
    altText(null),
    "Empty alt text should only be used for decorative images (https://git.io/Jvqx8)."
  );
  assert.end();
});

test("[altText] return suggestions", (assert) => {
  assert.equal(
    altText("A SCREENSHOT OF A DOG."),
    'Alt text should not contain "screenshot of" (https://git.io/JvqAM).',
    "alt text rules are case insensitive"
  );

  assert.equal(
    altText("A SCREENSHOT OF A DOG"),
    'Alt text should not contain "screenshot of" (https://git.io/JvqAM). Alt text should end with punctuation (https://git.io/JJk55).',
    "more than one suggestion"
  );
  assert.equal(
    altText("An inhaler with a spacer connected to the mouthpiece"),
    "Alt text should end with punctuation (https://git.io/JJk55)."
  );
  assert.equal(
    altText("😸."),
    "Replace 😸 in alt text with descriptive text (https://git.io/Jfhte)."
  );
  assert.end();
});
