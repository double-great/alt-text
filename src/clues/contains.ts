import { Rule } from "../clues.js";

export default function altContains(): Rule {
  return {
    heading: "Alt text contains unhelpful words",
    docs: "https://tinyurl.com/y3v3jgux",
    fn: (item, alt) => alt.includes(item),
    suggestion: (value) => `Alt text should not contain "${value}"`,
    rules: [
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
    rationale:
      "Screen readers announce the presence of an image before reading the alt text. Adding “picture of” or “photo of” is redundant in this context.",
    source: [
      "https://www.w3.org/WAI/tutorials/images/tips/#tips",
      "https://axesslab.com/alt-texts/#dont-say-its-an-image",
    ],
    ok: "Dog jumping through a hoop.",
    notOk: "Image of a dog jumping through a hoop.",
  };
}
