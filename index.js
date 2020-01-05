const rules = require("./rules");

function altText(alt) {
  alt = alt.toLowerCase();
  let warning = [
    ...rules.checkClue(alt),
    ...rules.checkLength(alt),
    ...rules.checkOnlySpace(alt)
  ];
  warning = [...warning, ...rules.checkPeriod(alt, warning)];
  return warning.length ? warning.join(" ") : undefined;
}

module.exports = altText;
