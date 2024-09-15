import HelloThereBanner from "./components/banners/hello-there-banner/HelloThereBanner";
import Card1 from "./components/cards/card1";
import OpacityTransitionWrapper from "./components/opacity-transition-wrapper/OpacityTransitionWrapper";

export default async function Home() {

  return (
    <div className="w-full">
      <div className="flex justify-center items-center w-full">
      <div className="grid lg:grid-cols-3 lg:gap-32 justify-center items-center h-fit px-24">
        <div className="lg:col-span-1 flex items-center justify-center">
          <img src="/profile.jpg" width={350} height={350} className="rounded-full"/>

        </div>
        <HelloThereBanner className="lg:col-span-2 px-3 lg:px-16"/>
      </div>

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
