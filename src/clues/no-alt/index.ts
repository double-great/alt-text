import { Rule } from "../../clues.js";

export default function noAlt(): Rule {
  return {
    heading: "Missing alt attribute",
    docs: "https://tinyurl.com/yybc6bsy",
    suggestion: () => `Missing "alt" attribute`,
    rationale:
      "All images must have alternate text to convey their purpose and meaning to screen reader users.",
    source: ["https://dequeuniversity.com/rules/axe/3.4/image-alt"],
    ok: '`<img src="photograph.jpg" alt="A child holding a photograph.">`',
    notOk: '`<img src="photograph.jpg">`',
  };
}
