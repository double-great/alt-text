const forbidden = require("./lib/forbidden");

function checker(altText) {
  let warning = forbidden.reduce((string, item) => {
    if (altText.includes(item))
      string += `Alt text should not contain "${item}".`;
    return string;
  }, "");
  return warning;
}

module.exports = checker;
