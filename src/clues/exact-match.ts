import { Alt } from "../index.js";
import Clue, { ClueProps } from "../clues.js";

class ExactMatch extends Clue {
  constructor(props: ClueProps) {
    super(props);
    this.rules = props.rules;
    this.recommendation = this.setRecommendation();
  }

  check(alt: Alt) {
    if (!this.rules) return [];
    return this.rules.reduce((arr: string[], item: string) => {
      if (item === alt.trim()) {
        this.recommendation = this.setRecommendation(item);
        arr.push(this.suggestion());
      }
      return arr;
    }, []);
  }

  setRecommendation(value?: string) {
    return `Alt text should not be "${value || this.rules?.sort().join(", ")}"`;
  }
}

const exactMatch = new ExactMatch({
  heading: "Alt text is unhelpful",
  docs: "https://tinyurl.com/yxwc2hof",
  rules: [
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
