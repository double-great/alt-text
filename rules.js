const clues = require("./clues");
const urls = require("./urls");

function createSuggestion(ruleName, value) {
  return `${clues[ruleName].suggestion(value)} (${urls[ruleName]}).`;
}

function filterClues(ruleName, clue, alt) {
  return clue.rules.reduce((arr, item) => {
    if (clue.fn(item, alt)) arr.push(createSuggestion(ruleName, item));
    return arr;
  }, []);
}

function checkClue(alt) {
  return Object.keys(clues).reduce((arr, item) => {
    if (clues[item].rules)
      arr = [...arr, ...filterClues(item, clues[item], alt)];
    return arr;
  }, []);
}

function checkLength(alt) {
  return alt.length > 125 ? [createSuggestion("charLength", alt.length)] : [];
}

function checkOnlySpace(alt) {
  return alt == " " ? [createSuggestion("notOnlySpace")] : [];
}

function checkPeriod(alt) {
  return !alt.endsWith(".") && alt.length > 1
    ? [createSuggestion("endPeriod")]
    : [];
}

module.exports = {
  checkClue,
  checkLength,
  checkOnlySpace,
  checkPeriod,
  createSuggestion
};
