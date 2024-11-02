import Header1 from "@/components/animated-headers/Header1";
import Card1 from "@/components/cards/card1";
import OpacityTransitionWrapper from "@/components/opacity-transition-wrapper/OpacityTransitionWrapper";
import TechIcon, { TechIconDetailsKeys } from "./TechIcon";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

type WorkedOnSectionContent = {
    title: string;
    referenceURL: string;
    imgURL: string;
    usedTechs?: TechIconDetailsKeys[];
    description?: string;
};

export function WorkedOnSection() {
    const content: WorkedOnSectionContent[] = [
        {
            title: "Phylomizer3.0 (Internal private platform)",
            referenceURL: "https://github.com/Gabaldonlab/phylomizer",
            imgURL: "/project-imgs/phylomizer3-scrnshot.png",
            usedTechs: [
                "nextjs",
                "fastapi",
                "typescript",
                "python",
                "slurm",
                "tailwind",
                "apache",
                "mariadb",
                "docker",
                "dockercompose",
            ],
            description: `This project involved redesigning an internal platform for managing phylogenetic data,
            processing pipelines, and job tracking with an HPC cluster, transitioning from a simple Python WSGI backend with a Vue 2
            frontend to a more robust tech stack and prioritize development speed, ease of use, and framework popularity, ensuring
            future developers could quickly familiarize themselves with the technology.`,
        },
        {
            title: "Treeko's archive page",
            referenceURL: "https://treeko.cgenomics.org",
            imgURL: "/project-imgs/treeko-scrnshot.png",
            usedTechs: [
                "nextjs",
                "typescript",
                "tailwind",
                "apache",
                "docker",
                "dockercompose",
            ],
            description: `Archive documentation page of the Treeko algorithm,
            built with Next.js and exported as a static website. Minimalist design,
            mainly focused on SEO and accessibility.`,
        },
        {
            title: "CandidaMine",
            referenceURL: "https://candidamine.org",
            imgURL: "/project-imgs/candidamine-scrnshot.png",
            usedTechs: ["java", "nginx", "bootstrap", "postgres", "tomcat"],
            description: `I was responsible for the update of the UI's design and frontend dependencies
            to improve the accesibility and responsiveness of the application.`,
        },
        {
            title: "PhyloExplorer feature for PhylomeDB",
            referenceURL: "https://phylomedb.org/phylomes?s=expl",
            imgURL: "/project-imgs/phylo-explorer.png",
            usedTechs: ["python", "mariadb", "sqlite3", "d3js", "slurm"],
            description: `PhyloExplorer allows you to better decide which
            phylome suits your need by selecting a set of species that the
            phylome must contain, and indicating what other species are in
            each phylome and how well they are represented.
            The development of this new feature was the main project of my DUAL
            internship for the higher technician certificate in web development.`,
        },
        {
            title: "PhylomeDB",
            referenceURL: "https://phylomedb.org",
            imgURL: "/project-imgs/phylomedb-scrnshot.png",
            usedTechs: [
                "drupal",
                "php",
                "python",
                "bootstrap",
                "mariadb",
                "apache",
                "docker",
                "dockercompose",
            ],
            description: `Maintainer and admin of the project.`,
        },
        {
            title: "EvolclustDB",
            referenceURL: "https://evolclustdb.org/",
            imgURL: "/project-imgs/evolclustdb-scrnshot.png",
            usedTechs: [
                "codeigniter",
                "php",
                "python",
                "bootstrap",
                "mariadb",
                "apache",
                "docker",
                "dockercompose",
            ],
            description: `Maintainer and admin of the project.`,
        },
        {
            title: "MetaPhOrs",
            referenceURL: "https://orthology.phylomedb.org",
            imgURL: "/project-imgs/metaphors-scrnshot.png",
            usedTechs: [
                "drupal",
                "php",
                "python",
                "slurm",
                "bootstrap",
                "mariadb",
                "apache",
                "docker",
                "dockercompose",
            ],
            description: `Maintainer and admin of the project.`,
        },
        {
            title: "CGenomics",
            referenceURL: "https://cgenomics.org",
            imgURL: "/project-imgs/cgenomics-scrnshot.png",
            usedTechs: ["wordpress"],
            description: `Maintainer and admin of the project.`,
        },
    ];

    return (
        <section id="works" className="scroll-mt-14">
            <OpacityTransitionWrapper className="w-full">
                <Card1 className="flex flex-col justify-center items-center slanted-bottom-to-right bg-transparent">
                    <Header1
                        headerText="I'VE BEEN WORKING ON"
                        className="w-full text-center text-2xl sm:text-4xl flex-none font-serif"
                    />
                    <div className="py-3 w-full">
                        <hr className="h-1 bg-gray-800 bg-opacity-80 flex-none w-full skew-y-2" />
                    </div>
                </Card1>
            </OpacityTransitionWrapper>

            <OpacityTransitionWrapper className="w-full bg-transparent">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                    {content.map((item, idx) => (
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
