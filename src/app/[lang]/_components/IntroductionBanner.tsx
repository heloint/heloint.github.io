import HelloThereSwapper from "@/components/banners/hello-there-banner/HelloThereSwapper";
import {
    LangParam,
    ServerComponentLangProp,
} from "@/lib/internationalization/langParam";
import { DICTIONARY } from "@/lib/internationalization/dictionary";

export function IntroductionBanner(props: ServerComponentLangProp) {
    return (
        <div className="grid grid-cols-5 items-start">
            <ProfilePicture className="col-span-5 sm:col-span-2" />
            <div className="text-2xl text-pretty font-serif text-gray-700 w-full col-span-5 sm:col-span-3">
                <HelloThereSwapper lang={props.lang} />
                <p>
                    {
                        DICTIONARY.IntroductionBanner.paragraph1[
                            props.lang ? props.lang : "en"
                        ]
                    }
                </p>
            </div>
        </div>
    );
}
export function ProfilePicture({ className }: { className?: string }) {
    return (
        <div
            className={`flex flex-col justify-center items-center gap-4 ${className}`}
        >
            <div className="relative flex items-center justify-center">
                <img
                    alt="profile img"
                    src="/profile.jpg"
                    width={200}
                    height={200}
                    className="rounded-full"
                />
                <img
                    alt="waving hand icon"
                    src="/icons/waving-hand-icon.svg"
                    width={100}
                    height={100}
                    className="absolute -bottom-1 -left-16"
                />
            </div>
        </div>
    );
}
