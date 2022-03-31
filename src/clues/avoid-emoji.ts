import emojiRegex from "emoji-regex";
import { Alt } from "../index.js";
import Clue, { ClueProps } from "../clues.js";

class AvoidEmoji extends Clue {
  constructor(props: ClueProps) {
    super(props);
    this.recommendation = this.setRecommendation();
  }

  check(alt: Alt) {
    const regex = emojiRegex();
    const match = regex.exec(alt);
    if (!match) return [];
    this.recommendation = this.setRecommendation(match[0]);
    return [this.suggestion()];
  }

  setRecommendation(value?: string) {
    return `Replace ${value || "emoji"} in alt text with descriptive text`;
  }
}

const avoidEmoji = new AvoidEmoji({
  id: "avoid-emoji",
  heading: "Avoid emoji",
  docs: "https://tinyurl.com/ybhwbyzk",
  rationale: `Emoji have their own text descriptions. These descriptions can vary between operating systems and software. The spoken description of the emoji may not match your visual intention.`,
  listen: "https://doublegreat.dev/listen/emoji/",
  source: [
    "https://www.youtube.com/watch?v=uIbPcZq6izk",
    "https://readabilityguidelines.co.uk/images/emojis/",
  ],
  ok: '`<img src="cat.jpg" alt="An orange cat.">`',
  notOk: '`<img src="cat.png" alt="An orange 🐈."/>`',
});

export default avoidEmoji;
