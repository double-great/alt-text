import { readFileSync, writeFile } from "fs";

function sortClues(clues) {
  return Object.keys(clues)
    .reduce((arr, item) => {
      clues[item].id = item;
      return (arr = [...arr, clues[item]]);
    }, [])
    .sort((a, b) => a.heading.localeCompare(b.heading));
}

export function formatDocs(clues) {
  const sortedClues = sortClues(clues);
  return sortedClues.reduce((str, clue) => {
    const { suggestion, rationale, source, heading, rules, ok, notOk, listen } =
      clue;
    str += `### ${heading}\n\n`;
    str += `Suggestion: \`${suggestion(
      rules ? rules.sort().join(", ") : ""
    )}\``;
    str += "\n\n";
    if (rationale) str += `${rationale}\n\n`;
    if (ok && notOk) str += `- ✅ ${ok}\n- 🚫 ${notOk}\n\n`;
    if (listen) str += `Hear an example: <${listen}>\n\n`;
    if (source)
      str += `Sources:\n\n${source.map((link) => `- <${link}>\n`).join("")}\n`;
    return str;
  }, "## Suggestions\n\n<!-- this section is generated on commit !-->\n\n");
}

export function writeDocs(clues) {
  const md = formatDocs(clues);
  const { currentDocs, matchedDocs } = swapDocs();
  const newFile = currentDocs.replace(matchedDocs, md);
  writeFile("README.md", newFile, () => {
    console.log("Updated README.md");
  });
}

export function swapDocs() {
  const readme = readFileSync("./README.md", "utf-8");
  return {
    currentDocs: readme,
    matchedDocs: readme.match(/## Suggestions([\s\S]*)/g),
  };
}
