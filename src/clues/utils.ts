import GithubSlugger from "github-slugger";

const slugger = new GithubSlugger();

export default async function checkDocsLink(heading: string) {
  return `https://doublegreat.dev/alt-text/#${slugger.slug(heading)}`;
}
