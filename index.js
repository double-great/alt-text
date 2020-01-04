const forbidden = require("./lib/forbidden");

function checker(altText) {
  let warning = forbidden.reduce((arr, item) => {
    if (altText.includes(item))
      arr.push(`Alt text should not contain "${item}".`);
    return arr;
  }, []);
  if (!altText.endsWith(".")) warning.push("Alt text should end in a period.");
  return warning.length ? warning.join(" ") : undefined;
}

module.exports = checker;
