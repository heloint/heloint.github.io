export const DICTIONARY = {
    Navbar: [
        {
            en: "Experiences",
            es: "Experiencias",
        },
        {
            en: "Works",
            es: "Proyectos",
        },
        {
            en: "Studies",
            es: "Estudios",
        },
        {
            en: "Posts",
            es: "Publicaciones",
        },
        {
            en: "Contacts",
            es: "Contactos",
        },
    ],
    IntroductionBanner: {
        paragraph1: {
            en: "Have a look around to get more info about me and checkout some of the projects I have participated in.",
            es: "Eche un vistazo para obtener más información sobre mí y ver algunos de los proyectos en los que he participado.",
        },
    },
    HelloThereSwapper: {
        paragraph1: {
            en: "I'm Daniel. I'm a full-stack developer with the Gabaldón Lab at the Barcelona Supercomputing Center.",
            es: "Soy Daniel, desarrollador full-stack en el Gabaldón Lab del Barcelona Supercomputing Center.",
        },
        paragraph2: {
            en: "Developing, maintaining and administering web applications, CLI tools, web services, databases and servers.",
            es: "Desarrollo, mantenimiento y administración de aplicaciones web, herramientas CLI, servicios web, bases de datos y servidores.",
        },
    },
    ExperienceSection: {
        header1Text: {
            en: "EXPERIENCES",
            es: "EXPERIENCIAS",
        },
        timelineItem1: {
            dateRange: {
                en: "07/2024 - CURRENT POSITION",
                es: "07/2024 - POSICIÓN ACTUAL",
            },
            company: {
                en: "Barcelona Supercomputing Center, Gabaldón Lab",
                es: "Barcelona Supercomputing Center, Gabaldón Lab",
            },
            position: {
                en: "Research engineer",
                es: "Ingeniero de investigación",
            },
            paragraph1: {
                en: "For the Gabaldón Lab investigation group ng, developing and maintaining:",
                es: "Para el grupo de investigación del Laboratorio Gabaldón ng, desarrollar y mantener:",
            },
            listItems: {
                en: [
                    "web applications and services",
                    "CLI tools",
                    "databases",
                    "servers",
                    "project repositories",
                    "CI/CD pipelines",
                ],
                es: [
                    "aplicaciones y servicios web",
                    "herramientas CLI",
                    "bases de datos",
                    "servidores",
                    "repositorios de proyectos",
                    "pipelines de CI/CD",
                ],
            },
        },
        timelineItem2: {
            dateRange: {
                en: "06/2023 - 07/2024",
                es: "06/2023 - 07/2024",
            },
            company: {
                en: "Barcelona Supercomputing Center, Gabaldón Lab",
                es: "Barcelona Supercomputing Center, Gabaldón Lab",
            },
            position: {
                en: "Fullstack Developer",
                es: "Desarrollador Full-stack",
            },
            listItems: {
                en: [
                    "Create web applications with NextJs, Flask, FastAPI.",
                    "Create/rewrite bioinformatics pipelines with Python, Bash and Go.",
                    "Maintain legacy VueJs, PHP and Python WSGI monolithic applications.",
                    "Maintain the self-hosted servers with Nginx and Apache load balancers.",
                ],
                es: [
                    "Crear aplicaciones web con NextJs, Flask, FastAPI.",
                    "Crear o reescribir pipelines de bioinformática con Python, Bash y Go.",
                    "Mantener aplicaciones monolíticas heredadas en VueJs, PHP y Python WSGI.",
                    "Mantener servidores autoalojados con balanceadores de carga Nginx y Apache.",
                ],
            },
        },
        timelineItem3: {
            dateRange: {
                en: "05/2022 - 06/2023",
                es: "05/2022 - 06/2023",
            },
            company: {
                en: "Barcelona Supercomputing Center, Gabaldón Lab",
                es: "Barcelona Supercomputing Center, Gabaldón Lab",
            },
            position: {
                en: "Internship",
                es: "Pasantía",
            },
            listItems: {
                en: [
                    "Implement new features in VueJs, PHP, Python based monolithic applications.",
                    "Troubleshoot and debug legacy codebases, bioinformatics pipelines and self-hosted servers.",
                ],
                es: [
                    "Implementar nuevas funcionalidades en aplicaciones monolíticas basadas en VueJs, PHP y Python.",
                    "Solucionar problemas y depurar bases de código heredadas, pipelines de bioinformática y servidores autoalojados.",
                ],
            },
        },
    },
    WorkedOnSection: {
        header1Text: {
            en: "I'VE BEEN WORKING ON",
            es: "HE ESTADO TRABAJANDO EN",
        },
        contents: {
            en: [
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
                    usedTechs: [
                        "java",
                        "nginx",
                        "bootstrap",
                        "postgres",
                        "tomcat",
                    ],
                    description: `I was responsible for the update of the UI's design and frontend dependencies
                    to improve the accesibility and responsiveness of the application.`,
                },
                {
                    title: "PhyloExplorer feature for PhylomeDB",
                    referenceURL: "https://phylomedb.org/phylomes?s=expl",
                    imgURL: "/project-imgs/phylo-explorer.png",
                    usedTechs: [
                        "python",
                        "mariadb",
                        "sqlite3",
                        "d3js",
                        "slurm",
                    ],
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
            ],
            es: [
                {
                    title: "Phylomizer3.0 (Plataforma privada interna)",
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
                    description: `Este proyecto implicó el rediseño de una plataforma interna para la gestión de datos filogenéticos,
                    procesamiento de pipelines y seguimiento de trabajos con un clúster HPC, pasando de un backend simple de Python WSGI
                    con un frontend en Vue 2 a una pila tecnológica más robusta, priorizando la velocidad de desarrollo, facilidad de uso y
                    popularidad de los frameworks, asegurando que los futuros desarrolladores pudieran familiarizarse rápidamente con la tecnología.`,
                },
                {
                    title: "Página de archivo de Treeko",
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
                    description: `Página de documentación de archivo del algoritmo Treeko,
                    construida con Next.js y exportada como un sitio web estático. Diseño minimalista,
                    enfocado principalmente en SEO y accesibilidad.`,
                },
                {
                    title: "CandidaMine",
                    referenceURL: "https://candidamine.org",
                    imgURL: "/project-imgs/candidamine-scrnshot.png",
                    usedTechs: [
                        "java",
                        "nginx",
                        "bootstrap",
                        "postgres",
                        "tomcat",
                    ],
                    description: `Fui responsable de la actualización del diseño de la interfaz y las dependencias del frontend
                    para mejorar la accesibilidad y la capacidad de respuesta de la aplicación.`,
                },
                {
                    title: "Función PhyloExplorer para PhylomeDB",
                    referenceURL: "https://phylomedb.org/phylomes?s=expl",
                    imgURL: "/project-imgs/phylo-explorer.png",
                    usedTechs: [
                        "python",
                        "mariadb",
                        "sqlite3",
                        "d3js",
                        "slurm",
                    ],
                    description: `PhyloExplorer te permite decidir mejor qué filoma se ajusta a tus necesidades al seleccionar un conjunto de especies
                    que el filoma debe contener, indicando qué otras especies están en cada filoma y qué tan bien están representadas.
                    El desarrollo de esta nueva funcionalidad fue el proyecto principal de mi pasantía DUAL para el certificado de técnico superior en desarrollo web.`,
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
                    description: `Encargado del mantenimiento y administración del proyecto.`,
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
                    description: `Encargado del mantenimiento y administración del proyecto.`,
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
                    description: `Encargado del mantenimiento y administración del proyecto.`,
                },
                {
                    title: "CGenomics",
                    referenceURL: "https://cgenomics.org",
                    imgURL: "/project-imgs/cgenomics-scrnshot.png",
                    usedTechs: ["wordpress"],
                    description: `Encargado del mantenimiento y administración del proyecto.`,
                },
            ],
        },
    },
    StudiesSection: {
        header1Text: {
            en: "STUDIES",
            es: "ESTUDIOS",
        },
        timelines: [
            {
                dateRange: {
                    en: "09/2021 - 05/2023",
                    es: "09/2021 - 05/2023",
                },
                topic: {
                    en: "Higher technician in web application development with bioinformatics profile",
                    es: "Grado Superior en Desarrollo de Aplicaciones Web con perfil bioinformático",
                },
                institute: {
                    en: "Provençana Institute, Barcelona, Spain",
                    es: "Institut Provençana, Barcelona, España",
                },
                achievementsHeader: { en: "Achievements", es: "Logros" },
                achievements: {
                    en: [
                        {
                            title: "Best Higher Technician Student of Institut Provençana",
                            place: "Provençana Institute, Barcelona, Spain",
                            date: "2022-2023",
                        },
                        {
                            title: "Best student in 2nd year of Web application development with bioinformatics profile",
                            place: "Provençana Institute, Barcelona, Spain",
                            date: "2023",
                        },

                        {
                            title: "Best student in 1st year of Web application development with bioinformatics profile",
                            place: "Provençana Institute, Barcelona, Spain",
                            date: "2022",
                        },
                    ],
                    es: [
                        {
                            title: "Best Higher Technician Student of Institut Provençana",
                            place: "Institut Provençana, Barcelona, España",
                            date: "2022-2023",
                        },
                        {
                            title: "Mejor estudiante de 2do año de Desarrollo de aplicaciones web con perfil bioinformático",
                            place: "Institut Provençana, Barcelona, España",
                            date: "2023",
                        },

                        {
                            title: "Mejor estudiante de 1er año de Desarrollo de aplicaciones web con perfil bioinformático",
                            place: "Institut Provençana, Barcelona, España",
                            date: "2022",
                        },
                    ],
                },
            },
        ],
    },
    PostsSection: {
        header1Text: {
            en: "POSTS",
            es: "PUBLICACIONES",
        },
    }
};
