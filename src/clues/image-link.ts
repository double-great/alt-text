import { Rule } from "./index";

export default function imageLink(): Rule {
  return {
    heading: "Image is link",
    docs: "https://tinyurl.com/yxhq2k5w",
    suggestion: () =>
      `Images inside a link tag require alt text that describes the purpose of the link`,
    rationale:
      "Images inside a link tag require alt text that describes the purpose of the link.",
    source: ["https://axesslab.com/alt-texts/#images-in-links"],
    ok: '`<a href="https://github.com/double-great"><img src="logo.png" alt="double great on GitHub"></a>`',
    notOk:
      '`<a href="https://github.com/double-great"><img src="logo.png" alt="double great logo"></a>`',
  };
}
