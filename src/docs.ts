import { readFile, writeFile } from "fs/promises";
import avoidEmoji from "./clues/avoid-emoji.js";
import charLength from "./clues/char-length.js";
import altContains from "./clues/contains.js";
import decorative from "./clues/decorative.js";
import endPunctuation from "./clues/end-punctuation.js";
import altEndsWith from "./clues/end-with.js";
import exactMatch from "./clues/exact-match.js";
import imageLink from "./clues/image-link.js";
import noAlt from "./clues/no-alt.js";
import notOnlySpace from "./clues/not-only-space.js";
import altStartsWith from "./clues/start-with.js";

import GithubSlugger from "github-slugger";

const slugger = new GithubSlugger();

const allClues = [
  altContains,
  exactMatch,
  altEndsWith,
  altStartsWith,
  avoidEmoji,
  charLength,
  notOnlySpace,
  endPunctuation,
  decorative,
  imageLink,
  noAlt,
];

export const formattedDocs = `## Suggestions

<!-- this section is generated on commit !-->

${allClues
  .map(
    (clue) =>
      `- [${clue.heading} (\`${clue.id}\`)](#${slugger.slug(clue.heading)})`
  )
  .join("\n")}

${allClues.map((clue) => clue.document()).join("\n")}`;

export async function writeDocs() {
  const { currentDocs, matchedDocs } = await swapDocs();
  if (!matchedDocs) return;
  const newFile = currentDocs.replace(matchedDocs[0], formattedDocs);
  try {
    await writeFile("README.md", newFile);
  } catch (error) {
    console.log(error);
  }
}

export async function swapDocs() {
  const readme = await readFile("./README.md", "utf-8");
  return {
    currentDocs: readme,
    matchedDocs: readme.match(/## Suggestions([\s\S]*)/g),
  };
}

writeDocs();
