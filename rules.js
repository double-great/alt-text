const clues = require("./clues");
const cluesMatch = clues.match;
const cluesStartsWith = clues.startWith;
const cluesEndsWith = clues.endWith;

function checkClue(altText) {
  return cluesMatch.reduce((arr, item) => {
    if (altText.includes(item))
      arr.push(`Alt text should not contain "${item}".`);
    return arr;
  }, []);
}

function checkClueStart(altText) {
  return cluesStartsWith.reduce((arr, item) => {
    if (altText.startsWith(item))
      arr.push(`Alt text should not start with "${item}".`);
    return arr;
  }, []);
}

function checkClueEnd(altText) {
  return cluesEndsWith.reduce((arr, item) => {
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
  checkClue,
  checkClueStart,
  checkClueEnd,
  checkLength,
  checkOnlySpace,
  checkPeriod
};
