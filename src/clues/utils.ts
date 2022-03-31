import TinyUrl from "tinyurl";
import GithubSlugger from "github-slugger";

const slugger = new GithubSlugger();

const getUrl = (url: string) =>
  new Promise((resolve) =>
    TinyUrl.shorten(url, (shortURL: string) => resolve(shortURL))
  );

export default async function checkDocsLink(heading: string) {
  return await getUrl(
    `https://doublegreat.dev/alt-text/#${slugger.slug(heading)}`
  );
}
