interface Rule {
  heading: string;
  suggestion: (arg1?: number | string) => string;
  rationale: string;
  source: string[];
  ok: string;
  notOk: string;
  listen?: string;
  rules?: string[];
  fn?: (arg1: string, arg2: string) => string | boolean;
}

interface Clue {
  [rule: string]: Rule;
}
