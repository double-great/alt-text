const rules = require("./rules");

function altText(alt) {
  if (!alt) return rules.createWarning("decorative");
  alt = alt.toLowerCase();
  const warning = [
    ...rules.checkClue(alt),
    ...rules.checkLength(alt),
    ...rules.checkOnlySpace(alt),
    ...rules.checkPeriod(alt)
  ];
  return warning.length ? warning.join(" ") : undefined;
}

module.exports = altText;
