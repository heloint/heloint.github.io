import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

import * as fs from 'fs';
import matter from 'gray-matter';

export default async function Home() {
  const postsMarkdownDir = path.join(process.cwd(), "_markdown_contents", "posts");
  const markdownFiles = fs.readdirSync(postsMarkdownDir);
  console.log(markdownFiles);
  const markdownPath = path.join(process.cwd(), "_markdown_contents", "posts", "1.md");
  const fileContents = fs.readFileSync(markdownPath, 'utf8');
  const matterResult = matter(fileContents)
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return (
    <div className="" dangerouslySetInnerHTML={{__html: contentHtml}}>
    </div>
  );
}
