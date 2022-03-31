import { Alt } from "../index.js";
import Clue, { ClueProps } from "../clues.js";

class ExactMatch extends Clue {
  constructor(props: ClueProps) {
    super(props);
    this.config = {
      exclude: [
        "image",
        "icon",
        "graphic",
        "photo",
        "photograph",
        "placeholder",
        "temp",
        "alt",
        "drawing",
        "painting",
        "artwork",
        "logo",
        "bullet",
        "button",
        "arrow",
        "more",
        "spacer",
        "screenshot",
        "screen shot",
        "blank",
        "empty",
        "chart",
        "table",
        "diagram",
        "graph",
        "*",
      ],
    };
    this.recommendation = this.setRecommendation();
  }

  check(alt: Alt, config?: { exclude?: string[] }) {
    if (config?.exclude) this.config.exclude = config.exclude;
    if (!this.config.exclude) return [];
    return this.config.exclude.reduce((arr: string[], item: string) => {
      if (item === alt.trim()) {
        this.recommendation = this.setRecommendation(item);
        arr.push(this.suggestion());
      }
      return arr;
    }, []);
  }

  setRecommendation(value?: string) {
    return `Alt text should not be "${
      value || this.config.exclude?.sort().join(", ")
    }"`;
  }
}

const exactMatch = new ExactMatch({
  id: "is-unhelpful",
  heading: "Alt text is unhelpful",
  docs: "https://tinyurl.com/ycxdkm92",
  rationale:
    "Usually, there’s no need to include words like “image”, “icon”, or “picture” in the alt text. People who can see will know this already, and screen readers announce the presence of an image.",
  source: [
    "https://www.w3.org/WAI/tutorials/images/tips/#tips",
    "https://axesslab.com/alt-texts/#dont-say-its-an-image",
  ],
  ok: "A child holding a photograph.",
  notOk: "photograph",
});

export default exactMatch;
