# alt-text [![Build Status](https://travis-ci.com/double-great/alt-text.svg?branch=master)](https://travis-ci.com/double-great/alt-text)

Alt text describes an image. This description provides context for people with low or no vision. The text is a fallback for users with images turned off or when an image fails to load.

The usefulness of alt text can be subjective. Context, detail, length, and relevance contribute to the quality of the description. Determining alt text quality is a manual effort, but there are patterns to avoid.

`altText` checks for common issues found in alt text and suggests improvements.

Are you writing in markdown? We recommend using [remark-lint-alt-text](https://github.com/double-great/remark-lint-alt-text).

## Install

```
npm install @double-great/alt-text
```

## Usage

If `altText` detects an issue, it will return a warning to help you fix it. If `altText` doesn't detect any issues it will return `undefined`.

```js
const altText = require("@double-great/alt-text");

console.log(altText("A child holding a photograph."));
// undefined

console.log(altText("A screenshot of a dog"));
// Alt text should not contain "screenshot of". Alt text should end in a period.
```

## References

- W3C alt text decision tree: https://www.w3.org/WAI/tutorials/images/decision-tree/
- W3C alt text tips https://www.w3.org/WAI/tutorials/images/tips/
- Axess Lab Ultimate Guide https://axesslab.com/alt-texts/
- Shopify alt text https://polaris.shopify.com/content/alternative-text
- WCAG 2.1 1.1.1 Non-text content https://webaim.org/standards/wcag/checklist#sc1.1.1
- WCAG 2.1 2.4.4 Link purpose (in context) https://webaim.org/standards/wcag/checklist#sc2.4.4
- Webaim WAVE documentation https://wave.webaim.org/api/docs?format=html

## Warnings

<!-- this section is generated on commit !-->

### Should not only contain a space

Warning: `Alt text should not only contain a space`

### Character length

Warning: `Alt text length should be less than 100 characters, it is currently characters`

### Image is link

Warning: `Images inside a link tag require alt text that describes the purpose of the link`

### Should end in a period

Warning: `Alt text should end in a period`

### Missing alt attribute

Warning: `Missing`alt`attribute`

### Alt text contains problematic words

Warning: `Alt text should not contain "<picture of|photo of|photograph of|image of|graphic of|screenshot of|photo:|photographer:>"`

### Alt text could be considered problematic

Warning: `Alt text should not be "<image|graphic|photo|photograph|placeholder|temp|alt|drawing|painting|artwork|logo|bullet|button|arrow|more|spacer|blank|chart|table|diagram|graph|*>"`

### Alt text should not end with

Warning: `Alt text should not end with "<.jpg|.jpeg|.gif|.png|.svg|.webp|image|graphic>"`

### Alt text should not start with

Warning: `Alt text should not start with "<picture|photo|photograph|photographer|image|graphic|screenshot|spacer>"`
