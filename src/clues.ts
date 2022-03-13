import { Alt } from ".";
import pkg from "prettier";
const { format } = pkg;

export type ClueProps = {
  id: string;
  heading: string;
  docs: string;
  rationale: string;
  source: string[];
  ok: string;
  notOk: string;
  listen?: string;
};

export default class Clue {
  id: string;
  heading: string;
  docs: string;
  rationale: string;
  source: string[];
  ok: string;
  notOk: string;
  listen?: string;
  recommendation!: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config: any;

  constructor(props: ClueProps) {
    this.id = props.id;
    this.heading = props.heading;
    this.docs = props.docs;
    this.rationale = props.rationale;
    this.source = props.source;
    this.ok = props.ok;
    this.notOk = props.notOk;
    this.listen = props.listen;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  check(alt: Alt, config?: any): string | [] | string[] {
    throw new Error("check() method not implemented.");
  }

  setRecommendation() {
    throw new Error("setRecommendation() method not implemented.");
  }

  suggestion() {
    return `${this.recommendation} (${this.docs}).`;
  }

  document() {
    const codeDisable = format(
      `new altText('My alt text.', ${JSON.stringify({ [this.id]: false })});`,
      { parser: "babel" }
    );
    const codeOptions = format(
      `new altText("My alt text.", ${JSON.stringify({
        [this.id]: this.config,
      })});`,
      { parser: "babel" }
    );
    return `### ${this.heading}

Suggestion: \`${this.recommendation}\`

${this.rationale}

- ✅ ${this.ok}
- 🚫 ${this.notOk}
${
  this.listen
    ? `
Hear an example: <${this.listen}>
`
    : ""
}
Configuration:

\`\`\`js
// disable the rule:
${codeDisable}${
      this.config
        ? `
// adjust rule defaults:
${codeOptions}`
        : ""
    }\`\`\`

Sources:

${this.source.map((link) => `- <${link}>\n`).join("")}`;
  }
}
