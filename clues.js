module.exports = {
  notOnlySpace: {
    heading: "Empty alt text",
    message: () => `Alt text should not be a single space`,
    rationale:
      'If you use a null (empty) text alternative (`alt=""`) to hide decorative images, make sure that there is no space character in between the quotes. **If a space character is present, the image may not be effectively hidden from assistive technologies.** For instance, some screen readers will still announce the presence of an image if a space character is put between the quotes.',
    source: ["https://www.w3.org/WAI/tutorials/images/tips/#tips"]
  },
  charLength: {
    heading: "Character length",
    message: length =>
      `Alt text length should be less than 125 characters${
        length ? `, it is currently ${length} characters` : ""
      }`,
    rationale:
      "Alt text should be less than 125 characters in length. The JAWS screen reader reads alt text in 125 character chunks.",
    source: [
      "https://accessibility.psu.edu/images/imageshtml/#alt",
      "https://terrillthompson.com/tests/altlength.html"
    ]
  },
  imageLink: {
    heading: "Image is link",
    message: () =>
      `Images inside a link tag require alt text that describes the purpose of the link`,
    rationale:
      "Images inside a link tag require alt text that describes the purpose of the link.",
    source: ["https://axesslab.com/alt-texts/#images-in-links"]
  },
  endPeriod: {
    heading: "End in a period",
    message: () => `Alt text should end in a period`,
    rationale:
      "End the alt-text with a period. This will make screen readers pause a bit after the last word in the alt-text, which creates a more pleasant reading experience for the user.",
    source: ["https://axesslab.com/alt-texts/#end-with-a-period"]
  },
  noAlt: {
    heading: "Missing alt attribute",
    message: () => `Missing "alt" attribute`,
    rationale:
      "All images must have alternate text to convey their purpose and meaning to screen reader users.",
    source: ["https://dequeuniversity.com/rules/axe/3.4/image-alt"]
  },
  contains: {
    heading: "Alt text contains problematic words",
    fn: (item, alt) => alt.includes(item),
    message: value => `Alt text should not contain "${value}"`,

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
      "Usually, there’s no need to include words like “image”, “icon”, or “picture” in the alt text. People who can see will know this already, and screen readers announce the presence of an image.",
    source: [
      "https://www.w3.org/WAI/tutorials/images/tips/#tips",
      "https://axesslab.com/alt-texts/#dont-say-its-an-image"
    ]
  },
  exactMatch: {
    heading: "Alt text could be considered problematic",
    fn: (item, alt) => item == alt.trim(),
    message: value => `Alt text should not be "${value}"`,

    rules: [
      "image",
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
      "chart",
      "table",
      "diagram",
      "graph",
      "*"
    ],
    rationale: "",
    source: ""
  },
  endWith: {
    heading: "Alt text should not end with",
    fn: (item, alt) => alt.endsWith(item),
    message: value => `Alt text should not end with "${value}"`,

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
    rationale: "",
    source: ""
  },
  startWith: {
    heading: "Alt text should not start with",
    fn: (item, alt) => alt.startsWith(item),
    message: value => `Alt text should not start with "${value}"`,
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
    ]
  }
};
