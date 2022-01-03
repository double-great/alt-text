import {
  checkClue,
  checkPunctuation,
  checkLength,
  checkOnlySpace,
  checkEmoji,
  createSuggestion,
} from "./rules.js";

export default function altText(alt?: Alt) {
  if (!alt) return createSuggestion("decorative");
  alt = alt.toLowerCase();
  const suggestion = [
    ...checkClue(alt),
    ...checkLength(alt),
    ...checkOnlySpace(alt),
    ...checkPunctuation(alt),
    ...checkEmoji(alt),
  ];
  return suggestion.length ? suggestion.join(" ") : undefined;
}
