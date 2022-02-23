import { clues, Rule } from "./clues/index";
import { Alt } from "./index";

export default function checkClue(alt: Alt) {
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
