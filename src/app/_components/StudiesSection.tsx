import Header1 from "@/components/animated-headers/Header1";
import RightBarArrow from "@/components/arrows/RightBarArrow";
import Card1 from "@/components/cards/card1";
import OpacityTransitionWrapper from "@/components/opacity-transition-wrapper/OpacityTransitionWrapper";

export default function StudiesSection() {
    return (
        <section id="studies" className="scroll-mt-14">
            <OpacityTransitionWrapper className="w-full">
                <Card1 className="flex flex-col justify-center items-center slanted-bottom-to-right bg-transparent">
                    <Header1
                        headerText="STUDIES"
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
                            dateRange="09/2021 - 05/2023"
                            topic="Higher technician in web application development with bioinformatics profile"
                            institute="Provençana Institute, Barcelona, Spain"
                            description={
                                <span className="py-4">
                                    <span className="flex flex-col justify-center items-start gap-3 py-4">
                                        <h4>
                                            <b className="flex items-center">
                                                <RightBarArrow />{" "}
                                                <u>Achievments</u>
                                            </b>
                                        </h4>
                                        <div>
                                            <h5 className="text-md font-semibold">
                                                Best Higher Technician Student
                                                of Institut Provençana
                                            </h5>
                                            <p>
                                                <i className="text-sm">
                                                    Provençana Institute,
                                                    Barcelona, Spain
                                                </i>
                                            </p>
                                            <p>
                                                <i className="text-sm">
                                                    2022-2023
                                                </i>
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="text-md font-semibold">
                                                Best student in 1st and 2nd year
                                                Web application development with
                                                bioinformatics profile
                                            </h5>
                                            <p>
                                                <i className="text-sm">
                                                    Provençana Institute,
                                                    Barcelona, Spain
                                                </i>
                                            </p>
                                            <p>
                                                <i className="text-sm">
                                                    2022-2023
                                                </i>
                                            </p>
                                        </div>
                                    </span>
                                    {/* <p>
                                        For the Gabaldón Lab investigation group
                                        administrating, developing and
                                        maintaining:
                                    </p>
                                    <ul className="list-disc px-5">
                                        <li>web applications and services</li>
                                        <li>CLI tools</li>
                                        <li>databases</li>
                                        <li>servers</li>
                                        <li>project repositories</li>
                                        <li>CI/CD pipelines</li>
                                    </ul> */}
                                </span>
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
    institute,
    topic,
    description,
}: {
    dateRange: string;
    institute: string;
    topic: string;
    description: string | React.ReactElement;
}) {
    return (
        <li className={`mb-10 ms-4 border-2 border-slate-400 p-3 rounded-xl w-full relative backdrop-blur-lg`}>
            <div className="absolute w-5 h-5 bg-gray-700 rounded-full mt-1.5 -start-7 border-2 border-white"></div>
            <time className="mb-1 text-md leading-none lg:absolute lg:-start-52 lg:inset-y-5 font-semibold">
                {dateRange}
            </time>
            <span>
                <h2 className="text-xl font-semibold">{topic}</h2>
                <hr className="w-full h-0.5 bg-black" />
                <h3 className="text-lg">{institute}</h3>
                <span className="mb-4 text-base font-normal">
                    {description}
                </span>
            </span>
        </li>
    );
}
