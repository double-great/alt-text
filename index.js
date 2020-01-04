const rules = require("./rules");

function checker(altText) {
  // make alt text lowercase to solve for case insensitivity
  altText = altText.toLowerCase();
  let warning = [
    ...rules.checkClue(altText),
    ...rules.checkClueStart(altText),
    ...rules.checkClueEnd(altText),
    ...rules.checkLength(altText),
    ...rules.checkOnlySpace(altText)
  ];
  warning = [...warning, ...rules.checkPeriod(altText, warning)];
  // if warning has length, return it.
  return warning.length ? warning.join(" ") : undefined;
}

module.exports = checker;
