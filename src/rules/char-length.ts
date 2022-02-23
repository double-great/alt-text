import { Rule } from "../clues";

export default function charLength(): Rule {
  return {
    heading: "Character length",
    docs: "https://tinyurl.com/y2f7rhao",
    suggestion: (value) =>
      `Alt text length should be less than 125 characters${
        value ? `, it is currently ${value} characters` : ""
      }`,
    rationale:
      "Alt text should be less than 125 characters in length. The JAWS screen reader reads alt text in 125 character chunks. Any information about the image, such as copyright information, image source or extra information should be placed in the caption text below the image.",
    source: [
      "https://accessibility.psu.edu/images/imageshtml/#alt",
      "https://terrillthompson.com/tests/altlength.html",
    ],
    ok: "George Washington and Lafayette on horseback talking to soldiers in snow at Valley Forge.",
    notOk:
      "Caption: Painting “Washington and Lafayette at Valley Forge” by John Ward Dunsmore from 1907. Image courtesy of the Library of Congress.",
  };
}
