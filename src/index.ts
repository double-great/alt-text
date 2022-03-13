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

  // register each rule with its configuration
  const rules = registerRules(config);

  // if no alt text, throw image is decorative (if enabled)
  if (!alt && config["image-is-decorative"] !== false) {
    return decorative.check();
  } else if (!alt) return undefined;

  // check all rules
  let suggestion: string[] | [] = [];
  for (const { rule, config } of rules) {
    suggestion = [...suggestion, ...ruleChecker({ alt, config, rule })];
  }

  // return suggestions, if any
  return suggestion.length ? suggestion.join(" ") : undefined;
}

// if it's not disabled, check the alt text against the rule
function ruleChecker({
  alt,
  config,
  rule,
}: {
  alt: string;
  config: boolean | Record<string, unknown> | undefined;
  rule: Clue;
}): [] | string[] | string {
  return config === false ? [] : rule.check(alt, config);
}

const defaultConfig: Config = {
  "image-is-decorative": true,
  "avoid-emoji": true,
  "contains-unhelpful-word": true,
  "character-length": true,
  "end-with-puncutation": true,
  "should-not-end-with": true,
  "is-unhelpful": true,
  "should-not-start-with": true,
  "empty-alt-text": true,
};

const registerRules = (config: Config) => {
  return [
    {
      config: config["avoid-emoji"],
      rule: avoidEmoji,
    },
    {
      config: config["contains-unhelpful-word"],
      rule: altContains,
    },
    {
      config: config["character-length"],
      rule: charLength,
    },
    {
      config: config["end-with-puncutation"],
      rule: endPunctuation,
    },
    {
      config: config["should-not-end-with"],
      rule: altEndsWith,
    },
    {
      config: config["is-unhelpful"],
      rule: exactMatch,
    },
    {
      config: config["should-not-start-with"],
      rule: altStartsWith,
    },
    {
      config: config["empty-alt-text"],
      rule: notOnlySpace,
    },
  ];
};

export type Alt = string;

export type Config = {
  "image-is-decorative"?: boolean;
  "avoid-emoji"?: boolean;
  "contains-unhelpful-word"?: boolean | { exclude: string[] };
  "character-length"?: boolean | { length: number };
  "end-with-puncutation"?: boolean;
  "should-not-end-with"?: boolean | { exclude: string[] };
  "is-unhelpful"?: boolean | { exclude: string[] };
  "should-not-start-with"?: boolean | { exclude: string[] };
  "empty-alt-text"?: boolean;
};
