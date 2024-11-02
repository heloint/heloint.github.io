"use client";

import Header1 from "@/components/animated-headers/Header1";
import Card1 from "@/components/cards/card1";
import OpacityTransitionWrapper from "@/components/opacity-transition-wrapper/OpacityTransitionWrapper";

export function ExperienceSection() {
    return (
        <section id="experiences" className="scroll-mt-14">
            <OpacityTransitionWrapper className="w-full">
                <Card1 className="flex flex-col justify-center items-center slanted-bottom-to-right bg-transparent">
                    <Header1
                        headerText="EXPERIENCES"
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
                            dateRange="07/2024 - CURRENT POSITION"
                            company="Barcelona Supercomputing Center, Gabaldón Lab"
                            position="Fullstack Developer"
                            description={
                                <span>
                                    <p>
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
                                    </ul>
                                </span>
                            }
                        />
                        <TimelineItem
                            dateRange="06/2023 - 07/2024"
                            company="IRB Barcelona, Gabaldón Lab"
                            position="Fullstack Developer"
                            description={
                                <ul className="list-disc px-5">
                                    <li>
                                        Create web applications with NextJs,
                                        Flask, FastAPI.
                                    </li>
                                    <li>
                                        Create/rewrite bioinformatics pipelines
                                        with Python, Bash and Go.
                                    </li>
                                    <li>
                                        Maintain legacy VueJs, PHP and Python
                                        WSGI monolithic applications.
                                    </li>
                                    <li>
                                        Maintain the self-hosted servers with
                                        Nginx and Apache load balancers.
                                    </li>
                                </ul>
                            }
                        />
                        <TimelineItem
                            dateRange="05/2022 - 06/2023"
                            company="Barcelona Supercomputing Center, Gabaldón Lab"
                            position="Internship"
                            description={
                                <ul className="list-disc px-5">
                                    <li>
                                        Implement new features in VueJs, PHP,
                                        Python based monolithic applications.
                                    </li>
                                    <li>
                                        Troubleshoot and debug legacy codebases,
                                        bioinformatics pipelines and self-hosted
                                        servers.
                                    </li>
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
        <li className={`mb-10 ms-4 border-2 border-slate-400 p-3 rounded-xl w-full relative backdrop-blur-lg`}>
            <div className="absolute w-5 h-5 bg-gray-700 rounded-full mt-1.5 -start-7 border-2 border-white"></div>
            <time className="mb-1 text-md leading-none lg:absolute lg:-start-52 lg:inset-y-5 font-semibold max-w-[11rem] text-wrap">
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
