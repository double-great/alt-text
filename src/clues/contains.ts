import { Alt } from "../index.js";
import Clue, { ClueProps } from "../clues.js";

class AltContains extends Clue {
  constructor(props: ClueProps) {
    super(props);
    this.config = {
      exclude: [
        "picture of",
        "photo of",
        "photograph of",
        "image of",
        "graphic of",
        "screenshot of",
        "screen shot of",
        "photo:",
        "photographer:",
      ],
    };
    this.recommendation = this.setRecommendation();
  }

  check(alt: Alt, config?: { exclude?: string[] }) {
    if (config?.exclude) this.config.exclude = config.exclude;
    if (!this.config.exclude) return [];
    return this.config.exclude.reduce((arr: string[], item: string) => {
      if (alt.includes(item)) {
        this.recommendation = this.setRecommendation(item);
        arr.push(this.suggestion());
      }
      return arr;
    }, []);
  }

  setRecommendation(value?: string) {
    return `Alt text should not contain "${
      value || this.config.exclude?.sort().join(", ")
    }"`;
  }
}

const altContains = new AltContains({
  id: "contains-unhelpful-word",
  heading: "Alt text contains unhelpful words",
  docs: "https://tinyurl.com/ydbwu53g",
  rationale:
    "Screen readers announce the presence of an image before reading the alt text. Adding “picture of” or “photo of” is redundant in this context.",
  source: [
    "https://www.w3.org/WAI/tutorials/images/tips/#tips",
    "https://axesslab.com/alt-texts/#dont-say-its-an-image",
  ],
  ok: "Dog jumping through a hoop.",
  notOk: "Image of a dog jumping through a hoop.",
});

export default altContains;
