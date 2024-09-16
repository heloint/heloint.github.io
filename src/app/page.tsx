import Header1 from "./components/animated-headers/Header1";
import HelloThereBanner from "./components/banners/hello-there-banner/HelloThereBanner";
import Card1 from "./components/cards/card1";
import OpacityTransitionWrapper from "./components/opacity-transition-wrapper/OpacityTransitionWrapper";

export default async function Home() {
    return (
        <div className="w-full px-4 lg:px-52">
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

            <OpacityTransitionWrapper className="w-full">
                <Card1 className="flex justify-center items-center slanted-bottom-to-right bg-gray-200 h-36">
                <Header1 headerText="PROJECTS" className="w-full text-center text-6xl flex-none text-gray-800 font-serif"/>
                </Card1>
            </OpacityTransitionWrapper>

            <OpacityTransitionWrapper className="w-full bg-transparent">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full p-4 ">
                    <div className="col-span-1  border-slate-600 duration-500 hover:scale-105">
                        <div className="flex justify-center items-center p-4 rounded-t-lg bg-gray-300 bg-opacity-70 w-full"><span className="text-2xl underline">PhylomeDB</span></div>
                        <img src="/phylomedb-scrnshot.png" className="border-2 border-t-0 rounded-t-none rounded-xl"/>
                    </div>
                    <div className="col-span-1  border-slate-600">
                        <img src="/phylomedb-scrnshot.png" className="border-2 rounded-xl"/>
                    </div>
                </div>
            </OpacityTransitionWrapper>

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
