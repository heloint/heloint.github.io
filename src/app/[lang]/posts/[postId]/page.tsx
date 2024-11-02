import path from "path";
import { remark } from "remark";
import html from "remark-html";

import * as fs from "fs";
import matter from "gray-matter";
import { LangParam, langParams } from "@/lib/internationalization/langParam";

export async function generateStaticParams() {
    const postsMarkdownDir = path.join(
        process.cwd(),
        "_markdown_contents",
        "posts"
    );
    const markdownFiles = fs.readdirSync(postsMarkdownDir);
    const postIds = markdownFiles.map((fileName) =>
        fileName.replace(".md", "")
    );

    const combinations = [];
    for (const lang of langParams) {
        for (const postId of postIds) {
            combinations.push({lang: lang, postId: postId})
        }
    }
    return combinations;
}

export default async function Page(props: {
    params: Promise<{ lang:LangParam, postId: string }>;
}) {
    const params = await props.params;
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
    return (
        <div className="flex flex-col justify-start items-start min-h-dvh w-full">
            <div className="py-8 px-2 sm:px-16 lg:px-32 max-w-7xl mx-auto bg-white mt-3 min-w-[80%] rounded-lg border border-slate-400">
                <h1 className="text-2xl text-center font-bold mb-4">
                    {matterResult.data.title}
                </h1>
                <h2 className="italic text-center">{matterResult.data.date}</h2>
                <span dangerouslySetInnerHTML={{ __html: htmlContent }}></span>
            </div>
        </div>
    );
}
