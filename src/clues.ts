export type ClueProps = {
  heading: string;
  docs: string;
  rationale: string;
  source: string[];
  ok: string;
  notOk: string;
  listen?: string;
  rules?: string[];
};

export default class Clue {
  heading: string;
  docs: string;
  rationale: string;
  source: string[];
  ok: string;
  notOk: string;
  listen?: string;
  rules?: string[];
  recommendation: string;

  constructor(props: ClueProps) {
    this.heading = props.heading;
    this.docs = props.docs;
    this.rationale = props.rationale;
    this.source = props.source;
    this.ok = props.ok;
    this.notOk = props.notOk;
    this.listen = props.listen;
    this.recommendation = "";
  }

  suggestion() {
    return `${this.recommendation} (${this.docs}).`;
  }

  document() {
    return `### ${this.heading}

Suggestion: \`${this.recommendation}\`

${this.rationale}

- ✅ ${this.ok}
- 🚫 ${this.notOk}
${this.listen ? `\nHear an example: <${this.listen}>\n` : ""}
Sources:

${this.source.map((link) => `- <${link}>\n`).join("")}`;
  }
}
