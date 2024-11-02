import Header1 from "@/components/animated-headers/Header1";
import Card1 from "@/components/cards/card1";
import OpacityTransitionWrapper from "@/components/opacity-transition-wrapper/OpacityTransitionWrapper";
import TechIcon, { TechIconDetailsKeys } from "./TechIcon";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ServerComponentLangProp } from "@/lib/internationalization/langParam";
import { DICTIONARY } from "@/lib/internationalization/dictionary";

type WorkedOnSectionContent = {
    title: string;
    referenceURL: string;
    imgURL: string;
    usedTechs?: TechIconDetailsKeys[];
    description?: string;
};

export function WorkedOnSection(props: ServerComponentLangProp) {
    const contents: WorkedOnSectionContent[] = DICTIONARY.WorkedOnSection
        .contents[props.lang ? props.lang : "en"] as WorkedOnSectionContent[];

    return (
        <section id="works" className="scroll-mt-14">
            <OpacityTransitionWrapper className="w-full">
                <Card1 className="flex flex-col justify-center items-center slanted-bottom-to-right bg-transparent">
                    <Header1
                        headerText={
                            DICTIONARY.WorkedOnSection.header1Text[
                                props.lang ? props.lang : "en"
                            ]
                        }
                        className="w-full text-center text-2xl sm:text-4xl flex-none font-serif"
                    />
                    <div className="py-3 w-full">
                        <hr className="h-1 bg-gray-800 bg-opacity-80 flex-none w-full skew-y-2" />
                    </div>
                </Card1>
            </OpacityTransitionWrapper>

            <OpacityTransitionWrapper className="w-full bg-transparent">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                    {contents.map((item, idx) => (
                        <WorkedOnSectionItem
                            key={idx}
                            title={item.title}
                            referenceURL={item.referenceURL}
                            imgURL={item.imgURL}
                            usedTechs={item.usedTechs}
                            description={item.description}
                        />
                    ))}
                </div>
            </OpacityTransitionWrapper>
        </section>
    );
}

function WorkedOnSectionItem(params: WorkedOnSectionContent) {
    return (
        <Dialog>
            <DialogTrigger>
                <div className="col-span-1 border-slate-600 duration-150 hover:scale-105 rounded-xl border h-fit cursor-pointer">
                    <div className="flex justify-center items-center p-1 rounded-t-lg bg-gray-300 bg-opacity-70 w-full">
                        <span className="text-2xl underline font-serif">
                            {params.title}
                        </span>
                    </div>
                    <img
                        alt="dialog img"
                        src={params.imgURL}
                        className="border-2 border-y-0 rounded-t-none rounded-b-none rounded-xl max-h-[22rem] w-full"
                    />
                    <div className="flex flex-wrap justify-center items-center gap-1 rounded-b-lg bg-gray-100 bg-opacity-70 w-full min-h-[7rem] p-3">
                        {params.usedTechs
                            ? params.usedTechs.map((item, idx) => (
                                  <TechIcon key={idx} name={item} />
                              ))
                            : null}
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:min-w-[36rem] md:min-w-[52rem] lg:min-w-[72rem] xl:min-w-[82rem] max-h-[75%] sm:max-h-[95%] overflow-scroll">
                <DialogHeader>
                    <DialogTitle className="text-xl">
                        {params.title}
                    </DialogTitle>
                    <div className="flex flex-col gap-2 py-2 px-1">
                        <p>
                            <b>Visit:</b>{" "}
                            <a
                                target="_blank"
                                className={`underline text-blue-600 hover:text-blue-800 visited:text-purple-600`}
                                href={params.referenceURL}
                            >
                                {params.referenceURL}
                            </a>
                        </p>
                        <p className="text-wrap break-all">
                            {params.description}
                        </p>
                    </div>
                    <div>
                        <div className="flex flex-wrap justify-center items-center gap-2 rounded-b-lg bg-gray-100 bg-opacity-70 w-full p-3">
                            {params.usedTechs
                                ? params.usedTechs.map((item, idx) => (
                                      <TechIcon key={idx} name={item} />
                                  ))
                                : null}
                        </div>
                        <img
                            alt="dialog header img"
                            src={params.imgURL}
                            className="border-2 border-y-0 rounded-t-none rounded-b-none rounded-xl"
                        />
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
