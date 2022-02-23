import emojiRegex from "emoji-regex";
import { Rule } from "./index";
import { createSuggestion } from "../check-clue";
import { Alt } from "../index.js";

export function checkEmoji(alt: Alt) {
  const regex = emojiRegex();
  const match = regex.exec(alt);
  return match ? [createSuggestion("avoidEmoji", match[0])] : [];
}

export default function avoidEmoji(): Rule {
  return {
    heading: "Avoid emoji",
    docs: "https://tinyurl.com/yylrxrus",
    suggestion: (value) =>
      `Replace ${value || "emoji"} in alt text with descriptive text`,
    rationale: `Emoji have their own text descriptions. These descriptions can vary between operating systems and software. The spoken description of the emoji may not match your visual intention.`,
    listen: "https://doublegreat.dev/listen/emoji/",
    source: [
      "https://www.youtube.com/watch?v=uIbPcZq6izk",
      "https://readabilityguidelines.co.uk/images/emojis/",
    ],
    ok: '`<img src="cat.jpg" alt="An orange cat.">`',
    notOk: '`<img src="cat.png" alt="An orange 🐈."/>`',
  };
}
