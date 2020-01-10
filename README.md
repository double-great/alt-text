# alt-text [![Build Status](https://travis-ci.com/double-great/alt-text.svg?branch=master)](https://travis-ci.com/double-great/alt-text)

Alternative text for images aims to improve the user experience for people with low or loss of vision. `alt-text` checks for common issues found in alternative text and provides hints on how to improve it.

## Install

```
npm install @double-great/alt-test
```

## Usage

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
