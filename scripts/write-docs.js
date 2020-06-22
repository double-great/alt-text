const fs = require("fs");
const clues = require("../clues");

const sortedClues = Object.keys(clues)
  .reduce((arr, item) => {
    clues[item].id = item;
    return (arr = [...arr, clues[item]]);
  }, [])
  .sort((a, b) => a.heading.localeCompare(b.heading));

const md = sortedClues.reduce((str, clue) => {
  const { suggestion, rationale, source, heading, rules, ok, notOk } = clue;
  str += `### ${heading}\n\n`;
  str += `Suggestion: \`${suggestion(rules ? rules.sort().join(", ") : "")}\``;
  str += "\n\n";
  if (rationale) str += `${rationale}\n\n`;
  if (ok && notOk) str += `- ✅ ${ok}\n- 🚫 ${notOk}\n\n`;
  if (source)
    str += `Sources:\n${source.map(link => `- <${link}>\n`).join("")}\n`;
  return str;
}, "## Suggestions\n\n<!-- this section is generated on commit !-->\n\n");

const readme = fs.readFileSync("readme.md", "utf-8");
const regex = /## Suggestions([\s\S]*)/g;
const oldFile = readme.match(regex);
const newFile = readme.replace(oldFile, md);

fs.writeFileSync("README.md", newFile);
