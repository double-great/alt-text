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
- https://dequeuniversity.com/rules/axe/3.0/image-alt

## Warnings

<!-- this section is generated on commit !-->

### Empty alt text

Warning: `Alt text should not be a single space`

- ✅ `<img src="photo.png" alt="" />`
- 🚫 `<img src="photo.png" alt=" " />`

If you use a null (empty) text alternative (`alt=""`) to hide decorative images, make sure that there is no space character in between the quotes. **If a space character is present, the image may not be effectively hidden from assistive technologies.** For instance, some screen readers will still announce the presence of an image if a space character is put between the quotes.

Sources:

- <https://www.w3.org/WAI/tutorials/images/tips/#tips>

### Character length

Warning: `Alt text length should be less than 125 characters`

- ✅ George Washington and Lafayette on horseback talking to soldiers in snow at Valley Forge.
- 🚫 Caption: Painting "Washington and Lafayette at Valley Forge" by John Ward Dunsmore from 1907. Image courtesy of the Library of Congress.

Alt text should be less than 125 characters in length. The JAWS screen reader reads alt text in 125 character chunks. Any information about the image, such as copyright information, image source or extra information should be placed in the caption text below the image.

Sources:

- <https://accessibility.psu.edu/images/imageshtml/#alt>
- <https://terrillthompson.com/tests/altlength.html>

### Image is link

Warning: `Images inside a link tag require alt text that describes the purpose of the link`

- ✅ `<a href="https://github.com/double-great"><img src="logo.png" alt="double great on github.com" /></a>`
- 🚫 `<a href="https://github.com/double-great"><img src="logo.png" alt="double great logo" /></a>`

Images inside a link tag require alt text that describes the purpose of the link.

Sources:

- <https://axesslab.com/alt-texts/#images-in-links>

### End in a period

Warning: `Alt text should end in a period`

- ✅ A child holding a photograph.
- 🚫 A child holding a photograph

End the alt-text with a period. This will make screen readers pause a bit after the last word in the alt-text, which creates a more pleasant reading experience for the user.

Sources:

- <https://axesslab.com/alt-texts/#end-with-a-period>

### Missing alt attribute

Warning: `Missing "alt" attribute`

- ✅ `<img src="photograph.png" alt="A child holding a photograph." />`
- 🚫 `<img src="photograph.png" />`

All images must have alternate text to convey their purpose and meaning to screen reader users.

Sources:

- <https://dequeuniversity.com/rules/axe/3.4/image-alt>

### Alt text contains problematic words

Warning: `Alt text should not contain "<picture of|photo of|photograph of|image of|graphic of|screenshot of|photo:|photographer:>"`

- ✅ Dog jumping through a hoop.
- 🚫 Image of a dog jumping through a hoop.

Usually, there’s no need to include words like “image”, “icon”, or “picture” in the alt text. People who can see will know this already, and screen readers announce the presence of an image.

Sources:

- <https://www.w3.org/WAI/tutorials/images/tips/#tips>
- <https://axesslab.com/alt-texts/#dont-say-its-an-image>

### Alt text could be considered problematic

Warning: `Alt text should not be "<image|graphic|photo|photograph|placeholder|temp|alt|drawing|painting|artwork|logo|bullet|button|arrow|more|spacer|blank|chart|table|diagram|graph|*>"`

- ✅ A child holding a photograph.
- 🚫 photograph

### Alt text should not end with

Warning: `Alt text should not end with "<.jpg|.jpeg|.gif|.png|.svg|.webp|image|graphic>"`

- ✅ A child holding a photograph.
- 🚫 photograph.jpg

### Alt text should not start with

Warning: `Alt text should not start with "<picture|photo|photograph|photographer|image|graphic|screenshot|spacer>"`

- ✅ A child holding a photograph.
- 🚫 Image of a child.

Usually, there’s no need to include words like “image”, “icon”, or “picture” in the alt text. People who can see will know this already, and screen readers announce the presence of an image.

Sources:

- <https://www.w3.org/WAI/tutorials/images/tips/#tips>
- <https://axesslab.com/alt-texts/#dont-say-its-an-image>
