import { Rule } from "../clues";

export default function endPunctuation(): Rule {
  return {
    heading: "End with punctuation",
    docs: "https://tinyurl.com/y5krn3ny",
    suggestion: () => `Alt text should end with punctuation`,
    rationale:
      "End the alt text with a period, exclamation point, or question mark. This will make screen readers pause a bit after the last word in the alt text, which creates a more pleasant reading experience for the user.",
    listen: "https://doublegreat.dev/listen/punctuation-in-alt-text/",
    source: ["https://axesslab.com/alt-texts/#end-with-a-period"],
    ok: "A child holding a photograph.",
    notOk: "A child holding a photograph",
  };
}
