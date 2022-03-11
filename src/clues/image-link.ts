import Clue, { ClueProps } from "../clues.js";

class ImageLink extends Clue {
  constructor(props: ClueProps) {
    super(props);
    this.recommendation = this.setRecommendation();
  }
  check() {
    return this.suggestion();
  }
  setRecommendation() {
    return (this.recommendation = `Images inside a link tag require alt text that describes the purpose of the link`);
  }
}

const imageLink = new ImageLink({
  heading: "Image is link",
  docs: "https://tinyurl.com/yxhq2k5w",
  rationale:
    "Images inside a link tag require alt text that describes the purpose of the link.",
  source: ["https://axesslab.com/alt-texts/#images-in-links"],
  ok: '`<a href="https://github.com/double-great"><img src="logo.png" alt="double great on GitHub"></a>`',
  notOk:
    '`<a href="https://github.com/double-great"><img src="logo.png" alt="double great logo"></a>`',
});

export default imageLink;
