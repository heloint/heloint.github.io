export function SiteFooter() {
    return (
        <footer id="footer" className="py-6 md:px-8 md:py-0 border-t-2 border-slate-400 mt-10  backdrop-blur-lg bg-white bg-opacity-50">
            <div className="container flex flex-col sm:flex-row items-center justify-start gap-4 md:h-20 md:flex-row">
                <p className="text-balance text-center text-md leading-loose text-muted-foreground md:text-left">
                    This is a footer. Something should come here in the
                    future... Have an idea?{" "}
                    <a
                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                        target="_blank"
                        href={`mailto:majerdaniel93@gmail.com`}
                    >
                        Contact me!
                    </a>
                </p>
                <div id="footer-contacts" className="flex justify-normal items-center gap-3">
                    <a href="https://github.com/heloint">
                        <img
                            alt="github logo"
                            src="/logos/github.png"
                            className="hover:scale-105 w-[50px] sm:w-[45px] h-[50px] sm:h-[40px]"
                        />
                    </a>
                    <a href={`https://linkedin.com/in/majerdaniel93`}>
                        <img
                            alt="linkedin logo"
                            src="/logos/linkedin.png"
                            className="hover:scale-105 w-[50px] sm:w-[35px] h-[50px] sm:h-[35px]"
                        />
                    </a>
                    <a href={`https://x.com/majerdaniel937`}>
                        <img
                            alt="x logo"
                            src="/logos/x-logo.webp"
                            className="hover:scale-105 w-[50px] sm:w-[35px] h-[50px] sm:h-[35px]"
                        />
                    </a>
                    <a href={`https://www.bsc.es/es/majer-daniel`}>
                        <img
                            alt="BSC logo"
                            src="/logos/bsc-logo.webp"
                            className="hover:scale-105 w-[50px] sm:w-[35px] h-[50px] sm:h-[35px]"
                        />
                    </a>
                    <a href={`mailto:majerdaniel93@gmail.com`}>
                        <img
                            alt="email logo"
                            src="/logos/email-logo.webp"
                            className="hover:scale-105 w-[50px] sm:w-[35px] h-[50px] sm:h-[35px]"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
