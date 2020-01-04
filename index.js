const forbidden = require("./lib/forbidden");
const forbiddenStartsWith = require("./lib/forbidden-startswith");
const forbiddenEndsWith = require("./lib/forbidden-endswith");

function checkForbidden(altText) {
  return forbidden.reduce((arr, item) => {
    if (altText.includes(item))
      arr.push(`Alt text should not contain "${item}".`);
    return arr;
  }, []);
}

function checkForbiddenStart(altText) {
  return forbiddenStartsWith.reduce((arr, item) => {
    if (altText.startsWith(item))
      arr.push(`Alt text should not start with "${item}".`);
    return arr;
  }, []);
}

function checkForbiddenEnd(altText) {
  return forbiddenEndsWith.reduce((arr, item) => {
    if (altText.endsWith(item))
      arr.push(`Alt text should not end with "${item}".`);
    return arr;
  }, []);
}

function checker(altText) {
  // make alt text lowercase to solve for case insensitivity
  altText = altText.toLowerCase();
  // store warning for the alt text
  let warning = [];
  warning = warning.concat(checkForbidden(altText));
  warning = warning.concat(checkForbiddenStart(altText));
  warning = warning.concat(checkForbiddenEnd(altText));
  // check if alt text length is > 100
  if (altText.length > 100)
    warning.push("Alt text should be fewer than 100 characters.");
  // check if alt text contains a space
  if (altText == " ") warning.push("Alt text must not only contain a space.");
  // check if alt text ends with a  period
  if (!altText.endsWith(".") && altText.length > 1 && !warning.length)
    warning.push("Alt text should end in a period.");
  // if warning has length, return it.
  return warning.length ? warning.join(" ") : undefined;
}

module.exports = checker;
