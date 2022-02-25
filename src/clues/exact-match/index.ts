import { Rule } from "../../clues.js";

export default function exactMatch(): Rule {
  return {
    heading: "Alt text is unhelpful",
    docs: "https://tinyurl.com/yxwc2hof",
    fn: (item, alt) => item == alt.trim(),
    suggestion: (value) => `Alt text should not be "${value}"`,
    rules: [
      "image",
      "icon",
      "graphic",
      "photo",
      "photograph",
      "placeholder",
      "temp",
      "alt",
      "drawing",
      "painting",
      "artwork",
      "logo",
      "bullet",
      "button",
      "arrow",
      "more",
      "spacer",
      "screenshot",
      "screen shot",
      "blank",
      "empty",
      "chart",
      "table",
      "diagram",
      "graph",
      "*",
    ],
    rationale:
      "Usually, there’s no need to include words like “image”, “icon”, or “picture” in the alt text. People who can see will know this already, and screen readers announce the presence of an image.",
    source: [
      "https://www.w3.org/WAI/tutorials/images/tips/#tips",
      "https://axesslab.com/alt-texts/#dont-say-its-an-image",
    ],
    ok: "A child holding a photograph.",
    notOk: "photograph",
  };
}
