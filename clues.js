module.exports = {
  notOnlySpace: {
    heading: "Should not only contain a space",
    message: () => `Alt text should not only contain a space`,
    rationale: "",
    source: ""
  },
  charLength: {
    heading: "Character length",
    message: length =>
      `Alt text length should be less than 100 characters, it is currently ${length} characters`,
    rationale: "",
    source: ""
  },
  imageLink: {
    heading: "Image is link",
    message: () =>
      `Images inside a link tag require alt text that describes the purpose of the link`,
    rationale: "",
    source: ""
  },
  endPeriod: {
    heading: "Should end in a period",
    message: () => `Alt text should end in a period`,
    rationale: "",
    source: ""
  },
  noAlt: {
    heading: "Missing alt attribute",
    message: () => `Missing \`alt\` attribute`,
    source: ""
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
    rationale: "",
    source: ""
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
    rationale: "",
    source: ""
  }
};
