declare module "cli-git.io";

type Alt = string;

interface Rule {
  heading: string;
  docs: string;
  suggestion: (value?: number | string) => string;
  rationale: string;
  source: string[];
  ok: string;
  notOk: string;
  listen?: string;
  rules?: string[];
  fn?: (item: string, alt: string) => string | boolean;
  id?: string;
}

interface Clue {
  [rule: string]: Rule;
}

interface Url {
  [heading: string]: string;
}
