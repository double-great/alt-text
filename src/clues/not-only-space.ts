import Clue, { ClueProps } from "../clues.js";
import { Alt } from "../index.js";

class NotOnlySpace extends Clue {
  constructor(props: ClueProps) {
    super(props);
    this.recommendation = this.setRecommendation();
  }

  check(alt: Alt) {
    if (alt !== " ") return [];
    return [this.suggestion()];
  }

  setRecommendation() {
    return `Alt text should not be a single space`;
  }
}

const notOnlySpace = new NotOnlySpace({
  heading: "Empty alt text",
  docs: "https://tinyurl.com/y2o7uctu",
  rationale:
    'If you use null (empty) alt text (`alt=""`) to hide decorative images, make sure that there is no space character in between the quotes. **If a space character is present, the image may not be effectively hidden from assistive technologies.** For instance, some screen readers will still announce the presence of an image if a space character is put between the quotes.',
  source: ["https://www.w3.org/WAI/tutorials/images/tips/#tips"],
  ok: '`<img src="photo.png" alt="">`',
  notOk: '`<img src="photo.png" alt=" ">`',
});

export default notOnlySpace;
