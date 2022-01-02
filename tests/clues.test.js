import { clues } from "../src/clues";
import githubURL from "cli-git.io";
import GithubSlugger from "github-slugger";

const slugger = new GithubSlugger();

const getUrl = (url) =>
  new Promise((resolve) =>
    githubURL.shorten(url, (shortURL) => resolve(shortURL))
  );

async function checkDocsLink(clue) {
  return await getUrl(
    `https://github.com/double-great/alt-text#${slugger.slug(clue.heading)}`
  );
}

describe("clues", () => {
  it("shape of clues is an object", () => {
    expect(typeof clues).toEqual("object");
  });
  Object.keys(clues).forEach((clue) => {
    describe(`clue: ${clue}`, () => {
      const {
        suggestion,
        source,
        rationale,
        ok,
        notOk,
        heading,
        fn,
        rules,
        listen,
        docs,
      } = clues[clue];
      it("value of `suggestion` is a function", () => {
        expect(typeof suggestion).toEqual("function");
      });

      it("`suggestion` must not end in period", () => {
        expect(suggestion().endsWith(".")).toBeFalsy();
      });

      it("must have `source`", () => {
        expect(source).toBeDefined();
      });

      it("source must be an array", () => {
        expect(typeof source).toEqual("object");
      });

      it("must have `rationale`", () => {
        expect(rationale).toBeDefined();
      });

      it("must have `ok`", () => {
        expect(ok).toBeDefined();
      });

      it("must have `notOk`", () => {
        expect(notOk).toBeDefined();
      });
      it("must have `heading`", () => {
        expect(heading).toBeDefined();
      });

      it("must have `docs`", () => {
        expect(docs).toBeDefined();
      });

      it("`docs` matches generated GitHub `heading` link", async () => {
        expect.assertions(1);
        await expect(checkDocsLink(clues[clue])).resolves.toEqual(docs);
      });

      if (fn) {
        it("value of `fn` is a function", () => {
          expect(typeof fn).toEqual("function");
        });
      }
      if (rules) {
        it("value of `rules` is an object (array)", () => {
          expect(typeof rules).toEqual("object");
        });

        rules.forEach((rule) => {
          it(`"${rule}" must be lowercase`, () => {
            expect(rule).toEqual(rule.toLowerCase());
          });
        });
      }
      if (listen) {
        it("`listen` must be a string", () => {
          expect(typeof listen).toEqual("string");
        });

        it("`listen` must start with 'https://'", () => {
          expect(listen.startsWith("https://")).toBeTruthy();
        });
      }
    });
  });
});
