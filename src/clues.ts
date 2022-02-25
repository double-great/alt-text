import avoidEmoji from "./clues/avoid-emoji/index.js";
import charLength from "./clues/char-length/index.js";
import altContains from "./clues/contains/index.js";
import decorative from "./clues/decorative/index.js";
import endPunctuation from "./clues/end-punctuation/index.js";
import atlEndsWith from "./clues/end-with/index.js";
import exactMatch from "./clues/exact-match/index.js";
import imageLink from "./clues/image-link/index.js";
import noAlt from "./clues/no-alt/index.js";
import notOnlySpace from "./clues/not-only-space/index.js";
import altStartWith from "./clues/start-with/index.js";
import { Alt } from "./index.js";

export interface Rule {
  /** The name of the rule */
  heading: string;
  /** Shortened URL to the rule's documentation. */
  docs: string;
  /** Recommendation on how to fix the rule. */
  suggestion: (value?: number | string) => string;
  /** Explanation of the rule and why it's important. */
  rationale: string;
  /** URLs to external sources to support the rule. */
  source: string[];
  /** Example of the correct usage. */
  ok: string;
  /** Example of the incorrect usage. */
  notOk: string;
  /** If available, URL to https://doublegreat.dev/listen/ test case to support the rule.  */
  listen?: string;
  /** If applicable, list of strings to test the rule against.  */
  rules?: string[];
  /** If applicable, a function to test the rule against the current `alt` value. */
  fn?: (item: string, alt: string) => string | boolean;
}

/**
 * Suggestions to improve alt text.
 */
export interface Clue {
  [rule: string]: Rule;
}

export const clues: Clue = {
  notOnlySpace: notOnlySpace(),
  charLength: charLength(),
  imageLink: imageLink(),
  endPunctuation: endPunctuation(),
  noAlt: noAlt(),
  contains: altContains(),
  exactMatch: exactMatch(),
  endWith: atlEndsWith(),
  startWith: altStartWith(),
  decorative: decorative(),
  avoidEmoji: avoidEmoji(),
};

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
