import HelloThereSwapper from "../../sharedComponents/banners/hello-there-banner/HelloThereSwapper";


export function IntroductionBanner() {
    return <div className="grid grid-cols-5 items-start">
        <ProfilePicture className="col-span-5 sm:col-span-2" />
        <div className="text-2xl text-pretty font-serif text-gray-700 w-full col-span-5 sm:col-span-3">
            <HelloThereSwapper className="px-3 lg:px-16" />
            <p>
                Have a look around to get more info about me and
                checkout some of the projects I have worked with.
            </p>
        </div>
    </div>;
}
export function ProfilePicture({ className }: { className?: string; }) {
    return (
        <div
            className={`flex flex-col justify-center items-center gap-4 ${className}`}
        >
            <div className="relative flex items-center justify-center">
                <img
                    src="/profile.jpg"
                    width={200}
                    height={200}
                    className="rounded-full" />
                <img
                    src="/icons/waving-hand-icon.svg"
                    width={100}
                    height={100}
                    className="absolute -bottom-1 -left-16" />
            </div>
        </div>
    );
}

