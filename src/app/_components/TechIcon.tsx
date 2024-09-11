export const techIconDetails = {
    python: { url: "/icons/languages/python.webp", label: "Python" },
    nextjs: { url: "/icons/frameworks/nextjs.png", label: "Next.js" },
    drupal: { url: "/icons/frameworks/drupal.png", label: "Drupal" },
    d3js: { url: "/icons/frameworks/d3js.webp", label: "D3.js" },
    fastapi: { url: "/icons/frameworks/fastapi.png", label: "FastAPI" },
    typescript: {
        url: "/icons/languages/typescript.png",
        label: "Typescript",
    },
    nodejs: { url: "/icons/technologies/nodejs.png", label: "Node.js" },
    golang: { url: "/icons/languages/golang.png", label: "Go" },
    php: { url: "/icons/languages/php.png", label: "PHP" },
    mariadb: { url: "/icons/technologies/mariadb.png", label: "MariaDB" },
    codeigniter: {
        url: "/icons/frameworks/codeigniter.webp",
        label: "CodeIgniter",
    },
    postgres: {
        url: "/icons/technologies/postgres.webp",
        label: "Postgresql",
    },
    slurm: { url: "/icons/technologies/slurm.png", label: "SLURM" },
    flask: { url: "/icons/frameworks/flask.webp", label: "Flask" },
    docker: { url: "/icons/technologies/docker.png", label: "Docker" },
    dockercompose: {
        url: "/icons/technologies/docker-compose.png",
        label: "Docker Compose",
    },
    singularityce: {
        url: "/icons/technologies/singularity-ce.png",
        label: "SingularityCE",
    },
    wordpress: {
        url: "/icons/frameworks/wordpress.png",
        label: "Wordpress",
    },
    bootstrap: {
        url: "/icons/frameworks/bootstrap.png",
        label: "Bootstrap",
    },
    tailwind: { url: "/icons/frameworks/tailwind.png", label: "Tailwind" },
    apache: { url: "/icons/technologies/apache.webp", label: "Apache" },
    tomcat: { url: "/icons/technologies/tomcat.png", label: "Tomcat" },
    java: { url: "/icons/languages/java.png", label: "Java" },
    nginx: { url: "/icons/technologies/nginx.webp", label: "NGinx" },
    sqlite3: { url: "/icons/technologies/sqlite3.png", label: "Sqlite3" },
};

export type TechIconDetailsKeys = keyof typeof techIconDetails;

export default function TechIcon({
    name,
    className,
}: {
    name: TechIconDetailsKeys;
    className?: string;
}) {
    const selectedOption = techIconDetails[name];
    return (
        <div
            className={`${className} col-span-1 flex justify-center items-center text-xl gap-1 border-2 rounded-3xl p-1 shadow-inner`}
        >
            <img src={selectedOption.url} width={28} height={28} />
            <span className="text-[1rem]">{selectedOption.label}</span>
        </div>
    );
}
