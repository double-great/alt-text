import Clue from "./clues.js";
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
export default function altText(
  alt: string | undefined,
  config?: Config
): string | undefined {
  // lowercase alt text to improve parsing
  alt = alt?.toLowerCase();

  // take into account user configuration settings
  config = {
    ...defaultConfig,
    ...config,
  };

  // if no alt text, throw image is decorative (if enabled)
  if (!alt && config["image-is-decorative"] !== false) {
    return decorative.check();
  } else if (!alt) return undefined;

  // list of rules
  const rules: Clue[] = [
    avoidEmoji,
    altContains,
    charLength,
    endPunctuation,
    altEndsWith,
    exactMatch,
    altStartsWith,
    notOnlySpace,
  ];

  // check all rules
  let suggestion: string[] | [] = [];
  for (const rule of rules) {
    // get the rule's id
    const ruleConfig: ConfigOption = config[rule.id];
    // skip rule if it is diabled
    if (ruleConfig === false) continue;
    // check rule and add any suggestions
    suggestion = [...suggestion, ...rule.check(alt, ruleConfig)];
  }

  // return suggestions, if any
  return suggestion.length ? suggestion.join(" ") : undefined;
}

const defaultConfig: Config = {
  "image-is-decorative": true,
  "avoid-emoji": true,
  "contains-unhelpful-word": true,
  "character-length": true,
  "end-with-punctuation": true,
  "should-not-end-with": true,
  "is-unhelpful": true,
  "should-not-start-with": true,
  "empty-alt-text": true,
  "image-is-link": true,
};

export type Alt = string;

export type Config = {
  [key: string]: any; // TO DO, remove!
  "image-is-decorative"?: boolean;
  "avoid-emoji"?: boolean;
  "contains-unhelpful-word"?: boolean | { exclude: string[] };
  "character-length"?: boolean | { length: number };
  "end-with-punctuation"?: boolean;
  "should-not-end-with"?: boolean | { exclude: string[] };
  "is-unhelpful"?: boolean | { exclude: string[] };
  "should-not-start-with"?: boolean | { exclude: string[] };
  "empty-alt-text"?: boolean;
  "image-is-link"?: boolean;
};

export type ConfigOption = boolean | { exclude?: string[]; length?: number };
