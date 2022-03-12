import avoidEmoji from "./clues/avoid-emoji.js";
import charLength from "./clues/char-length.js";
import altContains from "./clues/contains.js";
import decorative from "./clues/decorative.js";
import endPunctuation from "./clues/end-punctuation.js";
import altEndsWith from "./clues/end-with.js";
import exactMatch from "./clues/exact-match.js";
import notOnlySpace from "./clues/not-only-space.js";
import altStartsWith from "./clues/start-with.js";

/**
 * Check for unhelpful alt text.
 *
 * @param alt A string of alt text
 * @returns {string | undefined} Suggestions on how to improve the alt text
 */
export default function altText(alt?: Alt): string | undefined {
  if (!alt) return decorative.check();
  alt = alt.toLowerCase();
  const suggestion = [
    ...avoidEmoji.check(alt),
    ...altContains.check(alt),
    ...charLength.check(alt),
    ...endPunctuation.check(alt),
    ...altEndsWith.check(alt),
    ...exactMatch.check(alt),
    ...altStartsWith.check(alt),
    ...notOnlySpace.check(alt),
  ];
  return suggestion.length ? suggestion.join(" ") : undefined;
}

export type Alt = string;
