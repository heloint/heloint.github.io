import HelloThereBanner from "./components/banners/hello-there-banner/HelloThereBanner";
import Card1 from "./components/cards/card1";
import OpacityTransitionWrapper from "./components/opacity-transition-wrapper/OpacityTransitionWrapper";

function Introduction({className}: {className?: string}) {
    return (
        <div className={`flex flex-col justify-center items-center ${className}`}>
            <div className="flex items-center justify-center">
                <img
                    src="/profile.jpg"
                    width={270}
                    height={270}
                    className="rounded-full"
                />
            </div>
            <HelloThereBanner className="px-3 lg:px-16" />
        </div>
    );
}

export default async function Home() {
    return (
        <div className="w-full px-4 lg:px-36">



          <div className="grid grid-cols-5 justify-center items-center">
          <Introduction className="col-span-2"/>
          </div>




            <OpacityTransitionWrapper className="w-full">
                <Card1 className="slanted-bottom-to-right bg-red-200 h-96">
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
