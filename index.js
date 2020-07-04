const rules = require("./rules");

function altText(alt) {
  if (!alt) return rules.createSuggestion("decorative");
  alt = alt.toLowerCase();
  const suggestion = [
    ...rules.checkClue(alt),
    ...rules.checkLength(alt),
    ...rules.checkOnlySpace(alt),
    ...rules.checkPeriod(alt),
    ...rules.checkEmoji(alt)
  ];
  return suggestion.length ? suggestion.join(" ") : undefined;
}

module.exports = altText;
