import { Rule } from "../clues.js";

export default function altStartWith(): Rule {
  return {
    heading: "Alt text should not start with",
    docs: "https://tinyurl.com/y5y98ygu",
    fn: (item, alt) => alt.startsWith(item),
    suggestion: (value) => `Alt text should not start with "${value}"`,
    rules: [
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
    rationale:
      "Usually, there’s no need to include words like “image”, “icon”, or “picture” in the alt text. People who can see will know this already, and screen readers announce the presence of an image.",
    source: [
      "https://www.w3.org/WAI/tutorials/images/tips/#tips",
      "https://axesslab.com/alt-texts/#dont-say-its-an-image",
    ],
    ok: "A child holding a photograph.",
    notOk: "Image of a child.",
  };
}
