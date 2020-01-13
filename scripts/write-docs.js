const fs = require("fs");
const clues = require("../clues");

const md = Object.keys(clues).reduce((str, clue) => {
  str += `### ${clue}\n\n`;
  str += `Error message:\n\n> ${clues[clue].message("x")}\n\n`;
  if (clues[clue].rationale) str += `${clues[clue].rationale}\n\n`;
  if (clues[clue].source) str += `Source: ${clues[clue].source}\n\n`;
  return str;
}, "## Warnings\n\n<!-- this section is generated on commit !-->\n\n");

const readme = fs.readFileSync("readme.md", "utf-8");
const regex = /## Warnings([\s\S]*)/g;
const oldFile = readme.match(regex);
const newFile = readme.replace(oldFile, md);

fs.writeFileSync("README.md", newFile);
