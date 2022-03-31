import { Alt } from "../index.js";
import Clue, { ClueProps } from "../clues.js";

class CharLength extends Clue {
  config: {
    length: number;
  };

  constructor(props: ClueProps) {
    super(props);
    this.config = {
      length: 125,
    };
    this.recommendation = this.setRecommendation();
  }

  check(alt: Alt, config?: { length?: number }) {
    if (config?.length) this.config.length = config.length;
    if (!alt || alt.length < this.config.length) return [];
    this.recommendation = this.setRecommendation(alt.length);
    return [this.suggestion()];
  }

  setRecommendation(value?: number) {
    return `Alt text length should be less than ${
      this.config.length
    } characters${value ? `, it is currently ${value} characters` : ""}`;
  }
}

const charLength = new CharLength({
  id: "character-length",
  heading: "Character length",
  docs: "https://tinyurl.com/yabhqplx",
  rationale:
    "Alt text should be less than 125 characters in length. The JAWS screen reader reads alt text in 125 character chunks. Any information about the image, such as copyright information, image source or extra information should be placed in the caption text below the image.",
  source: [
    "https://accessibility.psu.edu/images/imageshtml/#alt",
    "https://terrillthompson.com/tests/altlength.html",
  ],
  ok: "George Washington and Lafayette on horseback talking to soldiers in snow at Valley Forge.",
  notOk:
    "Caption: Painting “Washington and Lafayette at Valley Forge” by John Ward Dunsmore from 1907. Image courtesy of the Library of Congress.",
});

export default charLength;
