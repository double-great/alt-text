import avoidEmoji from "./rules/avoid-emoji";
import charLength from "./rules/char-length";
import altContains from "./rules/contains";
import decorative from "./rules/decorative";
import endPunctuation from "./rules/end-punctuation";
import atlEndsWith from "./rules/end-with";
import exactMatch from "./rules/exact-match";
import imageLink from "./rules/image-link";
import noAlt from "./rules/no-alt";
import notOnlySpace from "./rules/not-only-space";
import altStartWith from "./rules/start-with";

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
