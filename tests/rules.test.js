import test from "tape";
import {
  checkClue,
  checkPunctuation,
  checkLength,
  checkOnlySpace,
  checkEmoji,
} from "../src/rules.js";

test("[rules] checkClue.endWith", (assert) => {
  assert.deepEqual(
    checkClue("A screenshot of a dog.jpg"),
    [
      'Alt text should not contain "screenshot of" (https://git.io/JvqAM).',
      'Alt text should not end with ".jpg" (https://git.io/JvfAf).',
    ],
    "can have more than one suggestion"
  );
  assert.deepEqual(checkClue("DSC_0010.jpg"), [
    'Alt text should not end with ".jpg" (https://git.io/JvfAf).',
  ]);
  assert.deepEqual(checkClue("placeholder graphic"), [
    'Alt text should not end with "graphic" (https://git.io/JvfAf).',
  ]);
  assert.end();
});

test("[rules] checkClue.startWith", (assert) => {
  assert.deepEqual(checkClue("spacer image."), [
    'Alt text should not start with "spacer" (https://git.io/JvfAv).',
  ]);
  assert.end();
});

test("[rules] checkClue.exactMatch", (assert) => {
  assert.deepEqual(checkClue("logo"), [
    'Alt text should not be "logo" (https://git.io/JvqAK).',
  ]);
  assert.end();
});

test("[rules] checkClue.exactMatch", (assert) => {
  assert.deepEqual(checkClue(" logo "), [
    'Alt text should not be "logo" (https://git.io/JvqAK).',
  ]);
  assert.end();
});

test("[rules] checkClue.contain", (assert) => {
  assert.deepEqual(checkClue("A screenshot of a dog."), [
    'Alt text should not contain "screenshot of" (https://git.io/JvqAM).',
  ]);
  assert.end();
});

test("[rules] checkPunctuation", (assert) => {
  assert.deepEqual(checkPunctuation("a large black dog"), [
    "Alt text should end with punctuation (https://git.io/JJk55).",
  ]);
  assert.deepEqual(checkPunctuation("a large black dog."), []);
  assert.deepEqual(checkPunctuation("a large black dog!"), []);
  assert.deepEqual(checkPunctuation("a large black dog?"), []);
  assert.end();
});

test("[rules] checkLength", (assert) => {
  assert.deepEqual(
    checkLength(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ),
    [
      "Alt text length should be less than 125 characters, it is currently 446 characters (https://git.io/Jvfxm).",
    ]
  );
  assert.end();
});

test("[rules] checkOnlySpace", (assert) => {
  assert.deepEqual(checkOnlySpace(" "), [
    "Alt text should not be a single space (https://git.io/Jvqim).",
  ]);
  assert.end();
});

test("[rules] checkEmoji", (assert) => {
  assert.deepEqual(checkEmoji("An orange 🐈."), [
    "Replace 🐈 in alt text with descriptive text (https://git.io/Jfhte).",
  ]);
  assert.end();
});
