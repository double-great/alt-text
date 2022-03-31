import { Alt } from "../index.js";
import Clue, { ClueProps } from "../clues.js";

class AltEndsWith extends Clue {
  constructor(props: ClueProps) {
    super(props);
    this.config = {
      exclude: [
        ".jpg",
        ".jpeg",
        ".gif",
        ".png",
        ".svg",
        ".webp",
        "image",
        "graphic",
      ],
    };
    this.recommendation = this.setRecommendation();
  }

  check(alt: Alt, config?: { exclude?: string[] }) {
    if (config?.exclude) this.config.exclude = config.exclude;
    if (!this.config.exclude) return [];
    return this.config.exclude.reduce((arr: string[], item: string) => {
      if (alt.endsWith(item)) {
        this.recommendation = this.setRecommendation(item);
        arr.push(this.suggestion());
      }
      return arr;
    }, []);
  }

  setRecommendation(value?: string) {
    return `Alt text should not end with "${
      value || this.config.exclude?.sort().join(", ")
    }"`;
  }
}

const altEndsWith = new AltEndsWith({
  id: "should-not-end-with",
  heading: "Alt text should not end with",
  docs: "https://tinyurl.com/yb5w77fy",
  rationale: "A file name in alt text does not provide helpful context.",
  source: ["https://axesslab.com/alt-texts/"],
  ok: "A child holding a photograph.",
  notOk: "photograph.jpg",
});

export default altEndsWith;
