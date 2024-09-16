import Header1 from "./components/animated-headers/Header1";
import HelloThereBanner from "./components/banners/hello-there-banner/HelloThereBanner";
import Card1 from "./components/cards/card1";
import OpacityTransitionWrapper from "./components/opacity-transition-wrapper/OpacityTransitionWrapper";

export default async function Home() {
    return (
        <div className="w-full px-4 lg:px-72">
            <div className="grid grid-cols-5 items-start">
                <Introduction className="col-span-5 sm:col-span-2" />
                <div className="text-2xl text-pretty font-serif text-gray-700 w-full col-span-5 sm:col-span-3">
                    <HelloThereBanner className="px-3 lg:px-16" />
                    <p>
                        Have a look around to get more info about me and
                        checkout some of the projects I have worked with.
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center bg-gray-200 h-44 bg-opacity-55 rounded-lg">
                <Header1 headerText="PROJECTS" className="w-full text-center text-6xl flex-none text-gray-700 font-serif"/>
            </div>
            <OpacityTransitionWrapper className="w-full">
                <Card1 className="slanted-bottom-to-right bg-red-900 h-96">
                    <h1 className="text-2xl">Hello</h1>
                    <h2 className="text-xl">World</h2>
                </Card1>
            </OpacityTransitionWrapper>

            <OpacityTransitionWrapper className="w-full bg-transparent">
                <div className="h-96">
                    <h1 className="text-2xl">Hello</h1>
                    <h2 className="text-xl">World</h2>
                </div>
            </OpacityTransitionWrapper>

            <OpacityTransitionWrapper className="w-full">
                <Card1 className="slanted-top-to-right bg-blue-200 h-96">
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

function Introduction({ className }: { className?: string }) {
    return (
        <div
            className={`flex flex-col justify-center items-center gap-4 ${className}`}
        >
            <div className="relative flex items-center justify-center">
                <img
                    src="/profile.jpg"
                    width={270}
                    height={270}
                    className="rounded-full"
                />
                <img
                    src="/icons/waving-hand-icon.png"
                    width={100}
                    height={100}
                    className="absolute bottom-0 left-0"
                />
            </div>
        </div>
    );
}
