import { IntroductionBanner } from "./_components/IntroductionBanner";
import { WorkedOnSection } from "./_components/WorkedOnSection";

import { ExperienceSection } from "./_components/ExperienceSection";
import StudiesSection from "./_components/StudiesSection";
import PostsSection from "./_components/PostsSection";

export default async function Home() {
    return (
        <div className="w-full px-4 lg:px-52">
            {IntroductionBanner()}
            <ExperienceSection />
            <WorkedOnSection />
            <StudiesSection />
            <PostsSection />
        </div>
    );
}
