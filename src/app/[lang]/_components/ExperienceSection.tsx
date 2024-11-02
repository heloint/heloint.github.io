"use client";

import Header1 from "@/components/animated-headers/Header1";
import Card1 from "@/components/cards/card1";
import OpacityTransitionWrapper from "@/components/opacity-transition-wrapper/OpacityTransitionWrapper";
import { DICTIONARY } from "@/lib/internationalization/dictionary";
import { ServerComponentLangProp } from "@/lib/internationalization/langParam";

export function ExperienceSection(props: ServerComponentLangProp) {
    return (
        <section id="experiences" className="scroll-mt-14">
            <OpacityTransitionWrapper className="w-full">
                <Card1 className="flex flex-col justify-center items-center slanted-bottom-to-right bg-transparent">
                    <Header1
                        headerText={
                            DICTIONARY.ExperienceSection.header1Text[
                                props.lang ? props.lang : "en"
                            ]
                        }
                        className="w-full text-center md:text-start md:pl-48 text-2xl sm:text-4xl flex-none font-serif"
                    />
                    <div className="py-3 w-full">
                        <hr className="h-1 bg-gray-800 bg-opacity-80 flex-none w-full -skew-y-2" />
                    </div>
                </Card1>
            </OpacityTransitionWrapper>

            <OpacityTransitionWrapper className="w-full bg-transparent">
                <div className="flex justify-center items-center w-full">
                    <Timeline>
                        <TimelineItem
                            dateRange={
                                DICTIONARY.ExperienceSection.timelineItem1
                                    .dateRange[props.lang ? props.lang : "en"]
                            }
                            company={
                                DICTIONARY.ExperienceSection.timelineItem1
                                    .company[props.lang ? props.lang : "en"]
                            }
                            position={
                                DICTIONARY.ExperienceSection.timelineItem1
                                    .position[props.lang ? props.lang : "en"]
                            }
                            description={
                                <span>
                                    <p>
                                        {
                                            DICTIONARY.ExperienceSection
                                                .timelineItem1.paragraph1[
                                                props.lang ? props.lang : "en"
                                            ]
                                        }
                                    </p>
                                    <ul className="list-disc px-5">
                                        {DICTIONARY.ExperienceSection.timelineItem1.listItems[
                                            props.lang ? props.lang : "en"
                                        ].map((listItem, idx) => (
                                            <li key={idx}>{listItem}</li>
                                        ))}
                                    </ul>
                                </span>
                            }
                        />
                        {/**TODO: TBC HERE! */}
                        <TimelineItem
                            dateRange={
                                DICTIONARY.ExperienceSection.timelineItem2
                                    .dateRange[props.lang ? props.lang : "en"]
                            }
                            company={
                                DICTIONARY.ExperienceSection.timelineItem2
                                    .company[props.lang ? props.lang : "en"]
                            }
                            position={
                                DICTIONARY.ExperienceSection.timelineItem2
                                    .position[props.lang ? props.lang : "en"]
                            }
                            description={
                                <ul className="list-disc px-5">
                                    {DICTIONARY.ExperienceSection.timelineItem2.listItems[
                                        props.lang ? props.lang : "en"
                                    ].map((listItem, idx) => (
                                        <li key={idx}>{listItem}</li>
                                    ))}
                                </ul>
                            }
                        />
                        <TimelineItem
                            dateRange={
                                DICTIONARY.ExperienceSection.timelineItem3
                                    .dateRange[props.lang ? props.lang : "en"]
                            }
                            company={
                                DICTIONARY.ExperienceSection.timelineItem3
                                    .company[props.lang ? props.lang : "en"]
                            }
                            position={
                                DICTIONARY.ExperienceSection.timelineItem3
                                    .position[props.lang ? props.lang : "en"]
                            }
                            description={
                                <ul className="list-disc px-5">
                                    {DICTIONARY.ExperienceSection.timelineItem3.listItems[
                                        props.lang ? props.lang : "en"
                                    ].map((listItem, idx) => (
                                        <li key={idx}>{listItem}</li>
                                    ))}
                                </ul>
                            }
                        />
                    </Timeline>
                </div>
            </OpacityTransitionWrapper>
        </section>
    );
}

function Timeline({
    children,
    className,
}: {
    children: any;
    className?: string;
}) {
    return (
        <ol className="w-11/12 md:w-4/6 lg:w-1/2 relative border-s-2 border-gray-400 ">
            {children}
        </ol>
    );
}

function TimelineItem({
    dateRange,
    company,
    position,
    description,
}: {
    dateRange: string;
    company: string;
    position: string;
    description: string | React.ReactElement;
}) {
    return (
        <li
            className={`mb-10 ms-4 border-2 border-slate-400 p-3 rounded-xl w-full relative backdrop-blur-lg`}
        >
            <div className="absolute w-5 h-5 bg-gray-700 rounded-full mt-1.5 -start-7 border-2 border-white"></div>
            <time
                className={`mb-1 text-md leading-none lg:absolute  lg:inset-y-5 font-semibold ${
                    dateRange.length > 22 ? "lg:-start-[19rem]" : "lg:-start-52"
                }`}
            >
                {dateRange}
            </time>
            <span>
                <h2 className="text-xl font-semibold">{company}</h2>
                <hr className="w-full h-0.5 bg-black" />
                <h3 className="text-lg">{position}</h3>
                <span className="mb-4 text-base font-normal">
                    {description}
                </span>
            </span>
        </li>
    );
}
