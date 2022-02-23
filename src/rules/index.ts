import avoidEmoji from "./avoid-emoji";
import charLength from "./char-length";
import altContains from "./contains";
import decorative from "./decorative";
import endPunctuation from "./end-punctuation";
import atlEndsWith from "./end-with";
import exactMatch from "./exact-match";
import imageLink from "./image-link";
import noAlt from "./no-alt";
import notOnlySpace from "./not-only-space";
import altStartWith from "./start-with";

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
