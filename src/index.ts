import { checkClue, createSuggestion } from "./clues.js";
import { checkEmoji } from "./clues/avoid-emoji/index.js";
import { checkLength } from "./clues/char-length/index.js";
import { checkPunctuation } from "./clues/end-punctuation/index.js";
import { checkOnlySpace } from "./clues/not-only-space/index.js";

export type Alt = string;

/**
 * Check for unhelpful alt text.
 *
 * @param alt A string of alt text
 * @returns {string | undefined} Suggestions on how to improve the alt text
 */
export default function altText(alt?: Alt) {
  if (!alt) return createSuggestion("decorative");
  alt = alt.toLowerCase();
  const suggestion = [
    ...checkClue(alt),
    ...checkLength(alt),
    ...checkOnlySpace(alt),
    ...checkPunctuation(alt),
    ...checkEmoji(alt),
  ];
  return suggestion.length ? suggestion.join(" ") : undefined;
}
