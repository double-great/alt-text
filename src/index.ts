import { checkClue, createSuggestion } from "./rules";
import { checkEmoji } from "./rules/avoid-emoji";
import { checkLength } from "./rules/char-length";
import { checkPunctuation } from "./rules/end-punctuation";
import { checkOnlySpace } from "./rules/not-only-space";

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
