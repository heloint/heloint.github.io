import { IntroductionBanner } from "./_components/IntroductionBanner";
import { WorkedOnSection } from "./_components/WorkedOnSection";
import Card1 from "./sharedCcomponents/cards/card1";
import OpacityTransitionWrapper from "./sharedCcomponents/opacity-transition-wrapper/OpacityTransitionWrapper";

export default async function Home() {
    return (
        <div className="w-full px-4 lg:px-52">
            {IntroductionBanner()}

            <WorkedOnSection />

            <OpacityTransitionWrapper className="w-full">
                <Card1 className="slanted-top-to-right bg-blue-900 h-96">
                    <h1 className="text-2xl">Hello</h1>
                    <h2 className="text-xl">World</h2>
                </Card1>
            </OpacityTransitionWrapper>

            <OpacityTransitionWrapper className="w-full bg-transparent">
                <div className="h-96">
                    <h1 className="text-2xl">Hello</h1>
                    <h2 className="ext-xl">World</h2>
                </div>
            </OpacityTransitionWrapper>

            <OpacityTransitionWrapper className="w-full">
                <Card1 className="slanted-bottom-to-left bg-blue-200 h-96">
                    <h1 className="text-2xl">Hello</h1>
                    <h2 className="text-xl">World</h2>
                </Card1>
            </OpacityTransitionWrapper>

            <OpacityTransitionWrapper className="w-full bg-transparent">
                <div className="h-96">
                    <h1 className="text-2xl">Hello</h1>
                    <h2 className="ext-xl">World</h2>
                </div>
            </OpacityTransitionWrapper>

            <OpacityTransitionWrapper className="w-full">
                <Card1 className="slanted-top-to-left bg-blue-200 h-96">
                    <h1 className="text-2xl">Hello</h1>
                    <h2 className="text-xl">World</h2>
                </Card1>
            </OpacityTransitionWrapper>
        </div>
    );
}


