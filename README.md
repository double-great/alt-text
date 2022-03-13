# alt-text ![Build Status](https://github.com/double-great/alt-text/workflows/Test/badge.svg)

Check for unhelpful alt text.

Alt text describes an image. This description provides context for people with low or no vision. The text is a fallback for users with images turned off or when an image fails to load.

The usefulness of alt text can be subjective. Context, detail, length, and relevance contribute to the quality of the description. Determining alt text quality is a manual effort, but there are patterns to avoid.

`altText` checks for common issues found in alt text and suggests improvements.

Are you writing in markdown? We recommend using [remark-lint-alt-text](https://github.com/double-great/remark-lint-alt-text).

## Install

```
npm install @double-great/alt-text
```

## Usage

If `altText` detects an issue, it will return a suggestion to help you fix it. If `altText` doesn't detect any issues it will return `undefined`.

```js
import altText from "@double-great/alt-text";

console.log(altText("A child holding a photograph."));
// undefined

console.log(altText("A photo of a dog"));
// Alt text should not contain "photo of" (https://tinyurl.com/y3v3jgux). Alt text should end with punctuation (https://tinyurl.com/y5krn3ny).
```

## Suggestions

<!-- this section is generated on commit !-->

- [Alt text contains unhelpful words (`contains-unhelpful-word`)](#alt-text-contains-unhelpful-words)
- [Alt text is unhelpful (`is-unhelpful`)](#alt-text-is-unhelpful)
- [Alt text should not end with (`should-not-end-with`)](#alt-text-should-not-end-with)
- [Alt text should not start with (`should-not-start-with`)](#alt-text-should-not-start-with)
- [Avoid emoji (`avoid-emoji`)](#avoid-emoji)
- [Character length (`character-length`)](#character-length)
- [Empty alt text (`empty-alt-text`)](#empty-alt-text)
- [End with punctuation (`end-with-punctuation`)](#end-with-punctuation)
- [Image is decorative (`image-is-decorative`)](#image-is-decorative)
- [Image is link (`image-is-link`)](#image-is-link)
- [Missing alt attribute (`no-alt`)](#missing-alt-attribute)

### Alt text contains unhelpful words

Suggestion: `Alt text should not contain "graphic of, image of, photo of, photo:, photograph of, photographer:, picture of, screen shot of, screenshot of"`

Screen readers announce the presence of an image before reading the alt text. Adding “picture of” or “photo of” is redundant in this context.

- ✅ Dog jumping through a hoop.
- 🚫 Image of a dog jumping through a hoop.

Configuration:

```js
// disable the rule:
altText("My alt text.", { "contains-unhelpful-word": false });

// adjust rule defaults:
altText("My alt text.", {
  "contains-unhelpful-word": {
    exclude: [
      "graphic of",
      "image of",
      "photo of",
      "photo:",
      "photograph of",
      "photographer:",
      "picture of",
      "screen shot of",
      "screenshot of",
    ],
  },
});
```

Sources:

- <https://www.w3.org/WAI/tutorials/images/tips/#tips>
- <https://axesslab.com/alt-texts/#dont-say-its-an-image>

### Alt text is unhelpful

Suggestion: `Alt text should not be "*, alt, arrow, artwork, blank, bullet, button, chart, diagram, drawing, empty, graph, graphic, icon, image, logo, more, painting, photo, photograph, placeholder, screen shot, screenshot, spacer, table, temp"`

Usually, there’s no need to include words like “image”, “icon”, or “picture” in the alt text. People who can see will know this already, and screen readers announce the presence of an image.

- ✅ A child holding a photograph.
- 🚫 photograph

Configuration:

```js
// disable the rule:
altText("My alt text.", { "is-unhelpful": false });

// adjust rule defaults:
altText("My alt text.", {
  "is-unhelpful": {
    exclude: [
      "*",
      "alt",
      "arrow",
      "artwork",
      "blank",
      "bullet",
      "button",
      "chart",
      "diagram",
      "drawing",
      "empty",
      "graph",
      "graphic",
      "icon",
      "image",
      "logo",
      "more",
      "painting",
      "photo",
      "photograph",
      "placeholder",
      "screen shot",
      "screenshot",
      "spacer",
      "table",
      "temp",
    ],
  },
});
```

Sources:

- <https://www.w3.org/WAI/tutorials/images/tips/#tips>
- <https://axesslab.com/alt-texts/#dont-say-its-an-image>

### Alt text should not end with

Suggestion: `Alt text should not end with ".gif, .jpeg, .jpg, .png, .svg, .webp, graphic, image"`

A file name in alt text does not provide helpful context.

- ✅ A child holding a photograph.
- 🚫 photograph.jpg

Configuration:

```js
// disable the rule:
altText("My alt text.", { "should-not-end-with": false });

// adjust rule defaults:
altText("My alt text.", {
  "should-not-end-with": {
    exclude: [
      ".gif",
      ".jpeg",
      ".jpg",
      ".png",
      ".svg",
      ".webp",
      "graphic",
      "image",
    ],
  },
});
```

Sources:

- <https://axesslab.com/alt-texts/>

### Alt text should not start with

Suggestion: `Alt text should not start with "graphic, image, photo, photograph, photographer, picture, screen shot, screenshot, spacer"`

Usually, there’s no need to include words like “image”, “icon”, or “picture” in the alt text. People who can see will know this already, and screen readers announce the presence of an image.

- ✅ A child holding a photograph.
- 🚫 Image of a child.

Configuration:

```js
// disable the rule:
altText("My alt text.", { "should-not-start-with": false });

// adjust rule defaults:
altText("My alt text.", {
  "should-not-start-with": {
    exclude: [
      "graphic",
      "image",
      "photo",
      "photograph",
      "photographer",
      "picture",
      "screen shot",
      "screenshot",
      "spacer",
    ],
  },
});
```

Sources:

- <https://www.w3.org/WAI/tutorials/images/tips/#tips>
- <https://axesslab.com/alt-texts/#dont-say-its-an-image>

### Avoid emoji

Suggestion: `Replace emoji in alt text with descriptive text`

Emoji have their own text descriptions. These descriptions can vary between operating systems and software. The spoken description of the emoji may not match your visual intention.

- ✅ `<img src="cat.jpg" alt="An orange cat.">`
- 🚫 `<img src="cat.png" alt="An orange 🐈."/>`

Hear an example: <https://doublegreat.dev/listen/emoji/>

Configuration:

```js
// disable the rule:
altText("My alt text.", { "avoid-emoji": false });
```

Sources:

- <https://www.youtube.com/watch?v=uIbPcZq6izk>
- <https://readabilityguidelines.co.uk/images/emojis/>

### Character length

Suggestion: `Alt text length should be less than 125 characters`

Alt text should be less than 125 characters in length. The JAWS screen reader reads alt text in 125 character chunks. Any information about the image, such as copyright information, image source or extra information should be placed in the caption text below the image.

- ✅ George Washington and Lafayette on horseback talking to soldiers in snow at Valley Forge.
- 🚫 Caption: Painting “Washington and Lafayette at Valley Forge” by John Ward Dunsmore from 1907. Image courtesy of the Library of Congress.

Configuration:

```js
// disable the rule:
altText("My alt text.", { "character-length": false });

// adjust rule defaults:
altText("My alt text.", { "character-length": { length: 125 } });
```

Sources:

- <https://accessibility.psu.edu/images/imageshtml/#alt>
- <https://terrillthompson.com/tests/altlength.html>

### Empty alt text

Suggestion: `Alt text should not be a single space`

If you use null (empty) alt text (`alt=""`) to hide decorative images, make sure that there is no space character in between the quotes. **If a space character is present, the image may not be effectively hidden from assistive technologies.** For instance, some screen readers will still announce the presence of an image if a space character is put between the quotes.

- ✅ `<img src="photo.png" alt="">`
- 🚫 `<img src="photo.png" alt=" ">`

Configuration:

```js
// disable the rule:
altText("My alt text.", { "empty-alt-text": false });
```

Sources:

- <https://www.w3.org/WAI/tutorials/images/tips/#tips>

### End with punctuation

Suggestion: `Alt text should end with punctuation`

End the alt text with a period, exclamation point, or question mark. This will make screen readers pause a bit after the last word in the alt text, which creates a more pleasant reading experience for the user.

- ✅ A child holding a photograph.
- 🚫 A child holding a photograph

Hear an example: <https://doublegreat.dev/listen/punctuation-in-alt-text/>

Configuration:

```js
// disable the rule:
altText("My alt text.", { "end-with-punctuation": false });
```

Sources:

- <https://axesslab.com/alt-texts/#end-with-a-period>

### Image is decorative

Suggestion: `Empty alt text should only be used for decorative images`

Provide "null" `alt` attributes (using `alt=""`) for images which do not provide information or do not require alternative text because the image is described in the page content. Some developers will mistakenly leave off the alt attribute altogether on images which they deem do not need alternatives. This is not helpful to assistive technology users because the assistive technology, such as screen reader, will often read the source attribute (i.e., file name) as the alternative text. To tell assistive technology to ignore an image, use a "blank alternative text" attribute: `alt=""`.

- ✅ `<img src="decorative-photo.jpg" alt="">`
- 🚫 `<img src="quarterly-earnings-chart.png" alt=""/>`

Configuration:

```js
// disable the rule:
altText("My alt text.", { "image-is-decorative": false });
```

Sources:

- <https://dequeuniversity.com/rules/axe/3.0/image-alt>

### Image is link

Suggestion: `Images inside a link tag require alt text that describes the purpose of the link`

Images inside a link tag require alt text that describes the purpose of the link.

- ✅ `<a href="https://github.com/double-great"><img src="logo.png" alt="double great on GitHub"></a>`
- 🚫 `<a href="https://github.com/double-great"><img src="logo.png" alt="double great logo"></a>`

Configuration:

```js
// disable the rule:
altText("My alt text.", { "image-is-link": false });
```

Sources:

- <https://axesslab.com/alt-texts/#images-in-links>

### Missing alt attribute

Suggestion: `Missing "alt" attribute`

All images must have alternate text to convey their purpose and meaning to screen reader users.

- ✅ `<img src="photograph.jpg" alt="A child holding a photograph.">`
- 🚫 `<img src="photograph.jpg">`

Configuration:

```js
// disable the rule:
altText("My alt text.", { "no-alt": false });
```

Sources:

- <https://dequeuniversity.com/rules/axe/3.4/image-alt>
