import Box1 from "@/components/boxes/Box1";

import path from "path";
import { remark } from "remark";
import html from "remark-html";

import * as fs from "fs";
import matter from "gray-matter";
import Header1 from "@/components/animated-headers/Header1";
import Card1 from "@/components/cards/card1";
import OpacityTransitionWrapper from "@/components/opacity-transition-wrapper/OpacityTransitionWrapper";
import { LangParam, ServerComponentLangProp } from "@/lib/internationalization/langParam";
import { DICTIONARY } from "@/lib/internationalization/dictionary";

export default function PostsSection(props: ServerComponentLangProp) {
    const postsMarkdownDir = path.join(
        process.cwd(),
        "_markdown_contents",
        "posts"
    );
    const markdownFiles = fs.readdirSync(postsMarkdownDir);
    const postIds = markdownFiles.map((fileName) =>
        fileName.replace(".md", "")
    );
    return (
        <section id="posts" className="scroll-mt-14">
            <OpacityTransitionWrapper className="w-full">
                <Card1 className="flex flex-col justify-center items-center slanted-bottom-to-right bg-transparent">
                    <Header1
                        headerText={DICTIONARY.PostsSection.header1Text[props.lang ? props.lang : "en"]}
                        className="w-full text-center text-2xl sm:text-4xl flex-none font-serif"
                    />
                    <div className="py-3 w-full">
                        <hr className="h-1 bg-gray-800 bg-opacity-80 flex-none w-full skew-y-2" />
                    </div>
                </Card1>
            </OpacityTransitionWrapper>
            <div className="flex flex-col gap-3 items-center">
                {postIds.map((postId, idx) => (
                    <PostBox key={idx} postId={postId} lang={props.lang ? props.lang : "en"}/>
                ))}
            </div>
        </section>
    );
}

async function PostBox(params: { postId: string, lang: LangParam }) {
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
        <Box1 extraClasses="flex-shrink-0 w-3/4">
            <div className="flex justify-between">
                <h3 className="text-lg font-semibold">
                    <a
                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                        href={`/${params.lang}/posts/${params.postId}`}
                    >
                        {matterResult.data.title}
                    </a>
                </h3>
                <h4 className="text-sm">{matterResult.data.date}</h4>
            </div>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
            <span dangerouslySetInnerHTML={{ __html: htmlContent }}></span>
        </Box1>
    );
}
