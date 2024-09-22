import Header1 from "../../sharedCcomponents/animated-headers/Header1";
import Card1 from "../../sharedCcomponents/cards/card1";
import OpacityTransitionWrapper from "../../sharedCcomponents/opacity-transition-wrapper/OpacityTransitionWrapper";

type WorkedOnSectionContent = {
    title: string;
    referenceURL: string;
    imgURL: string;
};

export function WorkedOnSection() {
    const content: WorkedOnSectionContent[] = [
        {
            title: "PhylomeDB",
            referenceURL: "https://phylomedb.org",
            imgURL: "/project-imgs/phylomedb-scrnshot.png",
        },
        {
            title: "EvolclustDB",
            referenceURL: "https://evolclustdb.org/",
            imgURL: "/project-imgs/evolclustdb-scrnshot.png",
        },

        {
            title: "CandidaMine",
            referenceURL: "https://candidamine.org",
            imgURL: "/project-imgs/candidamine-scrnshot.png",
        },
        {
            title: "MetaPhOrs",
            referenceURL: "https://orthology.phylomedb.org",
            imgURL: "/project-imgs/metaphors-scrnshot.png",
        },
        {
            title: "CGenomics",
            referenceURL: "https://cgenomics.org",
            imgURL: "/project-imgs/cgenomics-scrnshot.png",
        },
        {
            title: "Phylomizer3.0 (Internal private platform)",
            referenceURL: "https://github.com/Gabaldonlab/phylomizer",
            imgURL: "/project-imgs/phylomizer3-scrnshot.png",
        },
    ];

    return (
        <section>
            <OpacityTransitionWrapper className="w-full">
                <Card1 className="flex flex-col justify-center items-center slanted-bottom-to-right bg-gray-200 h-36">
                    <Header1
                        headerText="I'VE BEEN WORKING ON"
                        className="w-full text-center text-2xl sm:text-4xl flex-none font-serif"
                    />
                    <hr className="h-2 border-2 bg-black flex-none w-full skew-x-12" />
                </Card1>
            </OpacityTransitionWrapper>

            <OpacityTransitionWrapper className="w-full bg-transparent">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 w-full">
                    {content.map((item, idx) => (
                        <WorkedOnSectionItem
                            key={idx}
                            title={item.title}
                            referenceURL={item.referenceURL}
                            imgURL={item.imgURL}
                        />
                    ))}
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
        <div className="col-span-1  border-slate-600 duration-150 hover:scale-105 grid-">
            <div className="flex justify-center items-center p-1 rounded-t-lg bg-gray-300 bg-opacity-70 w-full">
                <span className="text-2xl underline font-serif">{title}</span>
            </div>
            <a target="_blank" href={referenceURL}>
                <img
                    src={imgURL}
                    className="border-2 border-y-0 rounded-t-none rounded-b-none rounded-xl max-h-[20rem] w-full"
                />
            </a>
            <div className="flex flex-col justify-center items-center p-1 rounded-b-lg bg-gray-300 bg-opacity-70 w-full">
                <span className="text-2xl underline">Description....</span>
                <span className="text-2xl underline">Tech stack: ...</span>
            </div>
        </div>
    );
}
