import { Rule } from "../../clues.js";

export default function atlEndsWith(): Rule {
  return {
    heading: "Alt text should not end with",
    docs: "https://tinyurl.com/yy2q8bbb",
    fn: (item, alt) => alt.endsWith(item),
    suggestion: (value) => `Alt text should not end with "${value}"`,
    rules: [
      ".jpg",
      ".jpeg",
      ".gif",
      ".png",
      ".svg",
      ".webp",
      "image",
      "graphic",
    ],
    rationale: "A file name in alt text does not provide helpful context.",
    source: ["https://axesslab.com/alt-texts/"],
    ok: "A child holding a photograph.",
    notOk: "photograph.jpg",
  };
}
