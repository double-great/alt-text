import { clues } from "./clues";

const emojiRegex = require("emoji-regex");

export function createSuggestion(ruleName: string, value?: string | number) {
  return `${clues[ruleName].suggestion(value)} (${clues[ruleName].docs}).`;
}

export function filterClues({
  ruleName,
  rules,
  fn,
  alt,
}: {
  ruleName: string;
  rules: Rule["rules"];
  fn: Rule["fn"];
  alt: string;
}) {
  if (!rules) return [];
  return rules.reduce((arr: string[], item: string) => {
    if (fn && fn(item, alt)) arr.push(createSuggestion(ruleName, item));
    return arr;
  }, []);
}

export function checkClue(alt: string) {
  return Object.keys(clues).reduce((arr: string[], item: string) => {
    const clue: Rule = clues[item];
    arr = [
      ...arr,
      ...filterClues({ ruleName: item, rules: clue.rules, fn: clue.fn, alt }),
    ];
    return arr;
  }, []);
}

export function checkLength(alt: string) {
  return alt.length > 125 ? [createSuggestion("charLength", alt.length)] : [];
}

export function checkOnlySpace(alt: string) {
  return alt == " " ? [createSuggestion("notOnlySpace")] : [];
}

export function checkPunctuation(alt: string) {
  return !/[.!?]$/.test(alt) && alt.length > 1
    ? [createSuggestion("endPunctuation")]
    : [];
}

export function checkEmoji(alt: string) {
  const regex = emojiRegex();
  const match = regex.exec(alt);
  return match ? [createSuggestion("avoidEmoji", match[0])] : [];
}
