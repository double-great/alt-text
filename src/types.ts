declare module "cli-git.io";

interface Rule {
  heading: string;
  docs: string;
  suggestion: (arg1?: number | string) => string;
  rationale: string;
  source: string[];
  ok: string;
  notOk: string;
  listen?: string;
  rules?: string[];
  fn?: (arg1: string, arg2: string) => string | boolean;
  id?: string;
}

interface Clue {
  [rule: string]: Rule;
}

interface Url {
  [heading: string]: string;
}
