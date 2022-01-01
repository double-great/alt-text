import clues from "../clues.js";

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
