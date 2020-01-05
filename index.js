const rules = require("./rules");

function altText(alt) {
  // make alt text lowercase to solve for case insensitivity
  alt = alt.toLowerCase();
  let warning = [
    ...rules.checkClue(alt),
    ...rules.checkLength(alt),
    ...rules.checkOnlySpace(alt)
  ];
  warning = [...warning, ...rules.checkPeriod(alt, warning)];
  // if warning has length, return it.
  return warning.length ? warning.join(" ") : undefined;
}

module.exports = altText;
