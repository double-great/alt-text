const clues = require("./clues");

function filterClues(clue, alt) {
  return clue.rules.reduce((arr, item) => {
    if (clue.fn(item, alt)) arr.push(clue.message(item));
    return arr;
  }, []);
}

function checkClue(alt) {
  return Object.keys(clues).reduce((arr, item) => {
    arr = [...arr, ...filterClues(clues[item], alt)];
    return arr;
  }, []);
}

function checkLength(alt) {
  return alt.length > 100
    ? ["Alt text should be fewer than 100 characters."]
    : [];
}

function checkOnlySpace(alt) {
  return alt == " " ? ["Alt text must not only contain a space."] : [];
}

function checkPeriod(alt, warning) {
  return !alt.endsWith(".") && alt.length > 1 && !warning.length
    ? ["Alt text should end in a period."]
    : [];
}

module.exports = {
  checkClue,
  checkLength,
  checkOnlySpace,
  checkPeriod
};
