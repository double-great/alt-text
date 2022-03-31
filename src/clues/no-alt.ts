import Clue, { ClueProps } from "../clues.js";

class NoAlt extends Clue {
  constructor(props: ClueProps) {
    super(props);
    this.recommendation = this.setRecommendation();
  }
  check() {
    return this.suggestion();
  }
  setRecommendation() {
    return `Missing "alt" attribute`;
  }
}

const noAlt = new NoAlt({
  id: "no-alt",
  heading: "Missing alt attribute",
  docs: "https://tinyurl.com/ycq4enq5",
  rationale:
    "All images must have alternate text to convey their purpose and meaning to screen reader users.",
  source: ["https://dequeuniversity.com/rules/axe/3.4/image-alt"],
  ok: '`<img src="photograph.jpg" alt="A child holding a photograph.">`',
  notOk: '`<img src="photograph.jpg">`',
});

export default noAlt;
