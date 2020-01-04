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

function checkLength(altText) {
  return altText.length > 100
    ? ["Alt text should be fewer than 100 characters."]
    : [];
}

function checkOnlySpace(altText) {
  return altText == " " ? ["Alt text must not only contain a space."] : [];
}

function checkPeriod(altText, warning) {
  return !altText.endsWith(".") && altText.length > 1 && !warning.length
    ? ["Alt text should end in a period."]
    : [];
}

module.exports = {
  checkForbidden,
  checkForbiddenStart,
  checkForbiddenEnd,
  checkLength,
  checkOnlySpace,
  checkPeriod
};
