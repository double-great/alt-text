import { clues, Rule } from "./clues.js";
import emojiRegex from "emoji-regex";
import { Alt } from "./index.js";

export function createSuggestion(ruleName: string, value?: string | number) {
  return `${clues[ruleName].suggestion(value)} (${clues[ruleName].docs}).`;
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

export function checkClue(alt: Alt) {
  return Object.keys(clues).reduce((arr: string[], item: string) => {
    const clue: Rule = clues[item];
    arr = [...arr, ...filterClues({ ruleName: item, clue: clue, alt })];
    return arr;
  }, []);
}

export function checkLength(alt: Alt) {
  return alt.length > 125 ? [createSuggestion("charLength", alt.length)] : [];
}

export function checkOnlySpace(alt: Alt) {
  return alt == " " ? [createSuggestion("notOnlySpace")] : [];
}

export function checkPunctuation(alt: Alt) {
  return !/[.!?]$/.test(alt) && alt.length > 1
    ? [createSuggestion("endPunctuation")]
    : [];
}

export function checkEmoji(alt: Alt) {
  const regex = emojiRegex();
  const match = regex.exec(alt);
  return match ? [createSuggestion("avoidEmoji", match[0])] : [];
}
