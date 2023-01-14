import {unified} from 'unified'
import remarkRehype from 'remark-rehype'
import remarkParse from 'remark-parse'
import rehypeStringify from 'rehype-stringify'
import remark from 'remark'
import html from 'remark-html'
import math from 'remark-math'
import rehypeKatex from 'rehype-katex'
import htmlKatex from 'remark-html-katex'


export async function getHtmlContent() {
    const processedContent = await remark()
      .use(math)
      .use(htmlKatex)
      .use(html)
      .process(article.content)
    const contentHtml = processedContent.toString()
    return {
      ...article,
      content: contentHtml
    }
  }