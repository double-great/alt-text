import clues from "./clues.js";
import urls from "./urls.js";
import emojiRegex from "emoji-regex";

export function createSuggestion(ruleName, value) {
  return `${clues[ruleName].suggestion(value)} (${urls[ruleName]}).`;
}

export function filterClues(ruleName, clue, alt) {
  return clue.rules.reduce((arr, item) => {
    if (clue.fn(item, alt)) arr.push(createSuggestion(ruleName, item));
    return arr;
  }, []);
}

export function checkClue(alt) {
  return Object.keys(clues).reduce((arr, item) => {
    if (clues[item].rules)
      arr = [...arr, ...filterClues(item, clues[item], alt)];
    return arr;
  }, []);
}

export function checkLength(alt) {
  return alt.length > 125 ? [createSuggestion("charLength", alt.length)] : [];
}

export function checkOnlySpace(alt) {
  return alt == " " ? [createSuggestion("notOnlySpace")] : [];
}

export function checkPunctuation(alt) {
  return !/[.!?]$/.test(alt) && alt.length > 1
    ? [createSuggestion("endPunctuation")]
    : [];
}

export function checkEmoji(alt) {
  const regex = emojiRegex();
  const match = regex.exec(alt);
  return match ? [createSuggestion("avoidEmoji", match[0])] : [];
}
