import { Alt } from "../index.js";
import Clue, { ClueProps } from "../clues.js";

class AltStartsWith extends Clue {
  constructor(props: ClueProps) {
    super(props);
    this.config = {
      exclude: [
        "picture",
        "photo",
        "photograph",
        "photographer",
        "image",
        "graphic",
        "screenshot",
        "screen shot",
        "spacer",
      ],
    };
    this.recommendation = this.setRecommendation();
  }

  check(alt: Alt, config?: { exclude?: string[] }) {
    if (config?.exclude) this.config.exclude = config.exclude;
    if (!this.config.exclude) return [];
    return this.config.exclude.reduce((arr: string[], item: string) => {
      if (alt.startsWith(item)) {
        this.recommendation = this.setRecommendation(item);
        arr.push(this.suggestion());
      }
      return arr;
    }, []);
  }

  setRecommendation(value?: string) {
    return `Alt text should not start with "${
      value || this.config.exclude?.sort().join(", ")
    }"`;
  }
}

const altStartsWith = new AltStartsWith({
  id: "should-not-start-with",
  heading: "Alt text should not start with",
  docs: "https://tinyurl.com/y5y98ygu",
  rationale:
    "Usually, there’s no need to include words like “image”, “icon”, or “picture” in the alt text. People who can see will know this already, and screen readers announce the presence of an image.",
  source: [
    "https://www.w3.org/WAI/tutorials/images/tips/#tips",
    "https://axesslab.com/alt-texts/#dont-say-its-an-image",
  ],
  ok: "A child holding a photograph.",
  notOk: "Image of a child.",
});

export default altStartsWith;
