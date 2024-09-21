import Header1 from "../sharedCcomponents/animated-headers/Header1";
import Card1 from "../sharedCcomponents/cards/card1";
import OpacityTransitionWrapper from "../sharedCcomponents/opacity-transition-wrapper/OpacityTransitionWrapper";

export function WorkedOnSection() {
    return (
        <section>
            <OpacityTransitionWrapper className="w-full">
                <Card1 className="flex flex-col justify-center items-center slanted-bottom-to-right bg-gray-200 h-36">
                    <Header1
                        headerText="WORKED ON SO FAR"
                        className="w-full text-center text-4xl sm:text-6xl flex-none font-serif"
                    />
                    <hr className="h-2 border-2 bg-black flex-none w-full skew-x-12" />
                </Card1>
            </OpacityTransitionWrapper>

            <OpacityTransitionWrapper className="w-full bg-transparent">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full">
                    <WorkedOnSectionItem
                        title="PhylomeDB"
                        referenceURL="https://phylomedb.org"
                        imgURL="/phylomedb-scrnshot.png"
                    />
                    <WorkedOnSectionItem
                        title="PhylomeDB"
                        referenceURL="https://phylomedb.org"
                        imgURL="/phylomedb-scrnshot.png"
                    />
                    <WorkedOnSectionItem
                        title="PhylomeDB"
                        referenceURL="https://phylomedb.org"
                        imgURL="/phylomedb-scrnshot.png"
                    />
                </div>
            </OpacityTransitionWrapper>
        </section>
    );
}
function WorkedOnSectionItem({
    title,
    imgURL,
    referenceURL,
}: {
    title: string;
    imgURL: string;
    referenceURL: string;
}) {
    return (
        <div className="col-span-1  border-slate-600 duration-150 hover:scale-105">
            <div className="flex justify-center items-center p-1 rounded-t-lg bg-gray-300 bg-opacity-70 w-full">
                <span className="text-2xl underline">{title}</span>
            </div>
            <a href={referenceURL}>
                <img
                    src={imgURL}
                    className="border-2 border-y-0 rounded-t-none rounded-b-none rounded-xl"
                />
            </a>
            <div className="flex justify-center items-center p-1 rounded-b-lg bg-gray-300 bg-opacity-70 w-full">
                <span className="text-2xl underline">{title}</span>
            </div>
        </div>
    );
}
