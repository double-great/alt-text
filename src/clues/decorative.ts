import { Rule } from "../clues.js";

export default function decorative(): Rule {
  return {
    heading: "Image is decorative",
    docs: "https://tinyurl.com/yxnvejgv",
    suggestion: () =>
      `Empty alt text should only be used for decorative images`,
    rationale: `Provide "null" \`alt\` attributes (using \`alt=""\`) for images which do not provide information or do not require alternative text because the image is described in the page content. Some developers will mistakenly leave off the alt attribute altogether on images which they deem do not need alternatives. This is not helpful to assistive technology users because the assistive technology, such as screen reader, will often read the source attribute (i.e., file name) as the alternative text. To tell assistive technology to ignore an image, use a "blank alternative text" attribute: \`alt=""\`.`,
    source: ["https://dequeuniversity.com/rules/axe/3.0/image-alt"],
    ok: '`<img src="decorative-photo.jpg" alt="">`',
    notOk: '`<img src="quarterly-earnings-chart.png" alt=""/>`',
  };
}
