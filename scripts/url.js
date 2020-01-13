const githubURL = require("cli-git.io");
const clues = require("../clues");
const fs = require("fs");
const GithubSlugger = require("github-slugger");
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
        clue
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

  fs.writeFileSync("urls.json", `${JSON.stringify(sorted, null, 2)}\n`);
};

shortenUrls();
