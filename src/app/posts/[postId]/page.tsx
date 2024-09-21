import path from "path";
import { remark } from "remark";
import html from "remark-html";

import * as fs from "fs";
import matter from "gray-matter";

export async function generateStaticParams() {
  const postsMarkdownDir = path.join(
    process.cwd(),
    "_markdown_contents",
    "posts"
  );
  const markdownFiles = fs.readdirSync(postsMarkdownDir);
  const postIds = markdownFiles.map((fileName) => fileName.replace(".md", ""));
  return postIds.map((postId) => ({
    postId: postId,
  }));
}

export default async function Page({ params }: { params: { postId: string } }) {
  const markdownPath = path.join(
    process.cwd(),
    "_markdown_contents",
    "posts",
    `${params.postId}.md`
  );
  const fileContents = fs.readFileSync(markdownPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const htmlContent = processedContent.toString();
  return (<div>
        <span>{matterResult.data.title}</span>
        <span>{matterResult.data.date}</span>
        <span dangerouslySetInnerHTML={{__html: htmlContent}}></span>
    </div>);
}
