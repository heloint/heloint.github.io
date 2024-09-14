import Card1 from "./components/cards/card1";
import OpacityTransitionWrapper from "./components/opacity-transition-wrapper/OpacityTransitionWrapper";

export default async function Home() {

  return (
    <div className="mt-40 w-full bg-gray-200">
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
