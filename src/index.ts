import { clues, Rule } from "./clues.js";
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

export function checkClue(alt: Alt) {
  return Object.keys(clues).reduce((arr: string[], item: string) => {
    const clue: Rule = clues[item];
    arr = [...arr, ...filterClues({ ruleName: item, clue: clue, alt })];
    return arr;
  }, []);
}

export function filterClues({
  ruleName,
  clue,
  alt,
}: {
  ruleName: string;
  clue: Rule;
  alt: Alt;
}) {
  if (!clue.rules) return [];
  return clue.rules.reduce((arr: string[], item: string) => {
    if (clue.fn && clue.fn(item, alt))
      arr.push(createSuggestion(ruleName, item));
    return arr;
  }, []);
}

export function createSuggestion(ruleName: string, value?: string | number) {
  return `${clues[ruleName].suggestion(value)} (${clues[ruleName].docs}).`;
}
