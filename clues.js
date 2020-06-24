module.exports = {
  notOnlySpace: {
    heading: "Empty alt text",
    warning: () => `Alt text should not be a single space`,
    rationale:
      'If you use null (empty) alt text (`alt=""`) to hide decorative images, make sure that there is no space character in between the quotes. **If a space character is present, the image may not be effectively hidden from assistive technologies.** For instance, some screen readers will still announce the presence of an image if a space character is put between the quotes.',
    source: ["https://www.w3.org/WAI/tutorials/images/tips/#tips"],
    ok: '`<img src="photo.png" alt="">`',
    notOk: '`<img src="photo.png" alt=" ">`'
  },
  charLength: {
    heading: "Character length",
    warning: length =>
      `Alt text length should be less than 125 characters${
        length ? `, it is currently ${length} characters` : ""
      }`,
    rationale:
      "Alt text should be less than 125 characters in length. The JAWS screen reader reads alt text in 125 character chunks. Any information about the image, such as copyright information, image source or extra information should be placed in the caption text below the image.",
    source: [
      "https://accessibility.psu.edu/images/imageshtml/#alt",
      "https://terrillthompson.com/tests/altlength.html"
    ],
    ok:
      "George Washington and Lafayette on horseback talking to soldiers in snow at Valley Forge.",
    notOk:
      "Caption: Painting “Washington and Lafayette at Valley Forge” by John Ward Dunsmore from 1907. Image courtesy of the Library of Congress."
  },
  imageLink: {
    heading: "Image is link",
    warning: () =>
      `Images inside a link tag require alt text that describes the purpose of the link`,
    rationale:
      "Images inside a link tag require alt text that describes the purpose of the link.",
    source: ["https://axesslab.com/alt-texts/#images-in-links"],
    ok:
      '`<a href="https://github.com/double-great"><img src="logo.png" alt="double great on GitHub"></a>`',
    notOk:
      '`<a href="https://github.com/double-great"><img src="logo.png" alt="double great logo"></a>`'
  },
  endPeriod: {
    heading: "End in a period",
    warning: () => `Alt text should end in a period`,
    rationale:
      "End the alt text with a period. This will make screen readers pause a bit after the last word in the alt text, which creates a more pleasant reading experience for the user.",
    source: ["https://axesslab.com/alt-texts/#end-with-a-period"],
    ok: "A child holding a photograph.",
    notOk: "A child holding a photograph"
  },
  noAlt: {
    heading: "Missing alt attribute",
    warning: () => `Missing "alt" attribute`,
    rationale:
      "All images must have alternate text to convey their purpose and meaning to screen reader users.",
    source: ["https://dequeuniversity.com/rules/axe/3.4/image-alt"],
    ok: '`<img src="photograph.jpg" alt="A child holding a photograph.">`',
    notOk: '`<img src="photograph.jpg">`'
  },
  contains: {
    heading: "Alt text contains unhelpful words",
    fn: (item, alt) => alt.includes(item),
    warning: value => `Alt text should not contain "${value}"`,
    rules: [
      "picture of",
      "photo of",
      "photograph of",
      "image of",
      "graphic of",
      "screenshot of",
      "photo:",
      "photographer:"
    ],
    rationale:
      "Screen readers announce the presence of an image before reading the alt text. Adding “picture of” or “photo of” is redundant in this context.",
    source: [
      "https://www.w3.org/WAI/tutorials/images/tips/#tips",
      "https://axesslab.com/alt-texts/#dont-say-its-an-image"
    ],
    ok: "Dog jumping through a hoop.",
    notOk: "Image of a dog jumping through a hoop."
  },
  exactMatch: {
    heading: "Alt text is unhelpful",
    fn: (item, alt) => item == alt.trim(),
    warning: value => `Alt text should not be "${value}"`,
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
      "blank",
      "empty",
      "chart",
      "table",
      "diagram",
      "graph",
      "*"
    ],
    rationale:
      "Usually, there’s no need to include words like “image”, “icon”, or “picture” in the alt text. People who can see will know this already, and screen readers announce the presence of an image.",
    source: [
      "https://www.w3.org/WAI/tutorials/images/tips/#tips",
      "https://axesslab.com/alt-texts/#dont-say-its-an-image"
    ],
    ok: "A child holding a photograph.",
    notOk: "photograph"
  },
  endWith: {
    heading: "Alt text should not end with",
    fn: (item, alt) => alt.endsWith(item),
    warning: value => `Alt text should not end with "${value}"`,
    rules: [
      ".jpg",
      ".jpeg",
      ".gif",
      ".png",
      ".svg",
      ".webp",
      "image",
      "graphic"
    ],
    rationale: "A file name in alt text does not provide helpful context.",
    source: ["https://axesslab.com/alt-texts/"],
    ok: "A child holding a photograph.",
    notOk: "photograph.jpg"
  },
  startWith: {
    heading: "Alt text should not start with",
    fn: (item, alt) => alt.startsWith(item),
    warning: value => `Alt text should not start with "${value}"`,
    rules: [
      "picture",
      "photo",
      "photograph",
      "photographer",
      "image",
      "graphic",
      "screenshot",
      "spacer"
    ],
    rationale:
      "Usually, there’s no need to include words like “image”, “icon”, or “picture” in the alt text. People who can see will know this already, and screen readers announce the presence of an image.",
    source: [
      "https://www.w3.org/WAI/tutorials/images/tips/#tips",
      "https://axesslab.com/alt-texts/#dont-say-its-an-image"
    ],
    ok: "A child holding a photograph.",
    notOk: "Image of a child."
  },
  decorative: {
    heading: "Image is decorative",
    warning: () => `Empty alt text should only be used for decorative images`,
    rationale: `Provide "null" \`alt\` attributes (using \`alt=""\`) for images which do not provide information or do not require alternative text because the image is described in the page content. Some developers will mistakenly leave off the alt attribute altogether on images which they deem do not need alternatives. This is not helpful to assistive technology users because the assistive technology, such as screen reader, will often read the source attribute (i.e., file name) as the alternative text. To tell assistive technology to ignore an image, use a "blank alternative text" attribute: \`alt=""\`.`,
    source: ["https://dequeuniversity.com/rules/axe/3.0/image-alt"],
    ok: '`<img src="decorative-photo.jpg" alt="">`',
    notOk: '`<img src="quarterly-earnings-chart.png" alt=""/>`'
  },
  avoidEmoji: {
    heading: "Avoid emoji",
    warning: emoji =>
      `Replace ${emoji || "emoji"} in alt text with descriptive text`,
    rationale: `Emoji have their own text descriptions. These descriptions can vary between operating systems and software. The spoken description of the emoji may not match your visual intention.`,
    source: [
      "https://www.youtube.com/watch?v=uIbPcZq6izk",
      "https://readabilityguidelines.co.uk/images/emojis/"
    ],
    ok: '`<img src="cat.jpg" alt="An orange cat.">`',
    notOk: '`<img src="cat.png" alt="An orange 🐈."/>`'
  }
};
