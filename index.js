const forbidden = require("./lib/forbidden");

function checker(altText) {
  // store warning for the alt text
  let warning = [];
  // check if alt text matches any item in forbidden
  warning = warning.concat(
    forbidden.reduce((arr, item) => {
      if (altText.includes(item))
        arr.push(`Alt text should not contain "${item}".`);
      return arr;
    }, [])
  );
  // check if alt text ends with a  period
  if (!altText.endsWith(".")) warning.push("Alt text should end in a period.");
  // check if alt text length is > 100
  if (altText.length > 100)
    warning.push("Alt text should be fewer than 100 characters.");
  // if warning has length, return it.
  return warning.length ? warning.join(" ") : undefined;
}

module.exports = checker;
