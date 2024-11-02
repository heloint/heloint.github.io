import { IntroductionBanner } from "./_components/IntroductionBanner";
import { WorkedOnSection } from "./_components/WorkedOnSection";

import { LangParam, langParams } from "@/lib/internationalization/langParam";
import { ExperienceSection } from "./_components/ExperienceSection";
import PostsSection from "./_components/PostsSection";
import StudiesSection from "./_components/StudiesSection";

export async function generateStaticParams() {
    return langParams.map((lang) => ({ lang: lang }));
}

export default async function Home({
    params,
}: {
    params: Promise<{ lang: LangParam }>;
}) {
    const langDictionary = (await params).lang;
    return (
        <div className="w-full px-4 lg:px-52">
            {<IntroductionBanner lang={langDictionary} />}
            <ExperienceSection lang={langDictionary}/>
            <WorkedOnSection lang={langDictionary}/>
            <StudiesSection lang={langDictionary}/>
            <PostsSection lang={langDictionary}/>
        </div>
    );
}
