import githubURL from "cli-git.io";
import {clues} from "../src/clues.js";
import { writeFileSync} from "fs";
import GithubSlugger from "github-slugger";

const slugger = new GithubSlugger();

const getUrl = url => {
  return new Promise(resolve => {
    githubURL.shorten(url, shortURL => {
      resolve(shortURL);
    });
  });
};

const shortenUrls = async () => {
  const obj = {};
  await Promise.all(
    Object.keys(clues).map(async clue => {
      const url = `https://github.com/double-great/alt-text#${slugger.slug(
        clues[clue].heading
      )}`;
      const shortendUrl = await getUrl(url);
      obj[clue] = shortendUrl;
    })
  );

  const sorted = Object.keys(obj)
    .sort()
    .reduce((o, i) => {
      o[i] = obj[i];
      return o;
    }, {});

  writeFileSync("urls.js", `export default ${JSON.stringify(sorted, null, 2)}\n`);
};

shortenUrls();
