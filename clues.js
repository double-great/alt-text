module.exports = {
  "Image is link": {
    message: () =>
      `Images inside a link tag require alt text that describes the purpose of the link.`,
    rationale: "",
    source: ""
  },
  "Missing alt attribute": {
    message: () => `Missing \`alt\` attribute.`,
    source: ""
  },
  "Alt text contains problematic words": {
    fn: (item, alt) => alt.includes(item),
    message: value => `Alt text should not contain "${value}".`,
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
  "Alt text could be considered problematic": {
    fn: (item, alt) => item == alt.trim(),
    message: value => `Alt text should not be "${value}".`,
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
  "Alt text should not end with": {
    fn: (item, alt) => alt.endsWith(item),
    message: value => `Alt text should not end with "${value}".`,
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
  "Alt text should not start with": {
    fn: (item, alt) => alt.startsWith(item),
    message: value => `Alt text should not start with "${value}".`,
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
