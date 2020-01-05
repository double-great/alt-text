module.exports = {
  match: {
    fn: (item, altText) => altText.includes(item),
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
    ]
  },
  endWith: {
    fn: (item, altText) => altText.endsWith(item),
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
    ]
  },
  startWith: {
    fn: (item, altText) => altText.startsWith(item),
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
    ]
  }
};
