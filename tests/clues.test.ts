import { clues } from "../clues";
import TinyUrl from "tinyurl";
import GithubSlugger from "github-slugger";

const slugger = new GithubSlugger();

const getUrl = (url) =>
  new Promise((resolve) =>
    TinyUrl.shorten(url, (shortURL) => resolve(shortURL))
  );

async function checkDocsLink(clue) {
  return await getUrl(
    `https://github.com/double-great/alt-text#${slugger.slug(clue.heading)}`
  );
}

describe("clues", () => {
  Object.keys(clues).forEach((clue) => {
    describe(`clue: ${clue}`, () => {
      const { suggestion, rules, listen, docs } = clues[clue];
      it("`suggestion` must not end in period", () => {
        expect(suggestion().endsWith(".")).toBeFalsy();
      });

      it("`docs` matches generated GitHub `heading` link", async () => {
        expect.assertions(1);
        await expect(checkDocsLink(clues[clue])).resolves.toEqual(docs);
      });

      if (rules) {
        rules.forEach((rule) => {
          it(`"${rule}" must be lowercase`, () => {
            expect(rule).toEqual(rule.toLowerCase());
          });
        });
      }
      if (listen) {
        it("`listen` must start with 'https://'", () => {
          expect(listen.startsWith("https://")).toBeTruthy();
        });
      }
    });
  });
});
