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

export default class AltText {
  alt: string | undefined;
  config: Config;

  constructor(alt?: Alt, config?: Config) {
    this.alt = alt?.toLowerCase();
    this.config = {
      "image-is-decorative": true,
      "avoid-emoji": true,
      "contains-unhelpful-word": true,
      "character-length": true,
      "end-with-puncutation": true,
      "should-not-end-with": true,
      "is-unhelpful": true,
      "should-not-start-with": true,
      "empty-alt-text": true,
      ...config,
    };
  }

  check() {
    const { config, alt, register } = this;
    if (!alt && config["image-is-decorative"] !== false) {
      return decorative.check();
    } else if (!alt) return undefined;

    let suggestion: string[] | [] = [];
    for (const { rule, config } of this.rules()) {
      suggestion = [...suggestion, ...register({ alt, config, rule })];
    }
    return suggestion.length ? suggestion.join(" ") : undefined;
  }

  private rules() {
    const { config } = this;
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
  }

  private register({
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
}

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
