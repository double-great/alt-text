const clues = require("./clues");

function filterClues(clue, altText) {
  return clue.rules.reduce((arr, item) => {
    if (clue.fn(item, altText)) arr.push(clue.message(item));
    return arr;
  }, []);
}

function checkClue(altText) {
  return Object.keys(clues).reduce((arr, item) => {
    const clue = clues[item];
    const items = filterClues(clue, altText);
    arr = [...arr, ...items];
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
  checkLength,
  checkOnlySpace,
  checkPeriod
};
