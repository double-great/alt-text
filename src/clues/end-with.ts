import { Alt } from "../index.js";
import Clue, { ClueProps } from "../clues.js";

class AltEndsWith extends Clue {
  constructor(props: ClueProps) {
    super(props);
    this.rules = props.rules;
    this.recommendation = this.setRecommendation();
  }

  check(alt: Alt) {
    if (!this.rules) return [];
    return this.rules.reduce((arr: string[], item: string) => {
      if (alt.endsWith(item)) {
        this.recommendation = this.setRecommendation(item);

        arr.push(this.suggestion());
      }
      return arr;
    }, []);
  }

  setRecommendation(value?: string) {
    return `Alt text should not end with "${
      value || this.rules?.sort().join(", ")
    }"`;
  }
}

const altEndsWith = new AltEndsWith({
  heading: "Alt text should not end with",
  docs: "https://tinyurl.com/yy2q8bbb",
  rules: [".jpg", ".jpeg", ".gif", ".png", ".svg", ".webp", "image", "graphic"],
  rationale: "A file name in alt text does not provide helpful context.",
  source: ["https://axesslab.com/alt-texts/"],
  ok: "A child holding a photograph.",
  notOk: "photograph.jpg",
});

export default altEndsWith;
