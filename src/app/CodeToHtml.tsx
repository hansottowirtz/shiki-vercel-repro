import { makeSingletonHighlighter } from "shiki/bundle/web";
import { createHighlighter } from "shiki";

const getHighlighter = makeSingletonHighlighter(createHighlighter);

export async function CodeToHtml({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  
  const highlighter = await getHighlighter({
    themes: ['poimandres'],
    langs: ["tsx"]
  });

  const html = highlighter.codeToHtml(code, {
    lang: language,
    theme: "poimandres",
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}