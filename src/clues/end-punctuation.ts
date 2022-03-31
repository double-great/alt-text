import { Alt } from "../index.js";
import Clue, { ClueProps } from "../clues.js";

class EndPunctuation extends Clue {
  constructor(props: ClueProps) {
    super(props);
    this.recommendation = this.setRecommendation();
  }

  check(alt: Alt) {
    if (/[.!?]$/.test(alt) || alt.length <= 1) return [];

    return [this.suggestion()];
  }

  setRecommendation() {
    return `Alt text should end with punctuation`;
  }
}

const endPunctuation = new EndPunctuation({
  id: "end-with-punctuation",
  heading: "End with punctuation",
  docs: "https://tinyurl.com/y9fcquhy",
  rationale:
    "End the alt text with a period, exclamation point, or question mark. This will make screen readers pause a bit after the last word in the alt text, which creates a more pleasant reading experience for the user.",
  listen: "https://doublegreat.dev/listen/punctuation-in-alt-text/",
  source: ["https://axesslab.com/alt-texts/#end-with-a-period"],
  ok: "A child holding a photograph.",
  notOk: "A child holding a photograph",
});

export default endPunctuation;
