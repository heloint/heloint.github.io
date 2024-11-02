"use client";

import { useRef, useState, useEffect, RefObject, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { LangParam } from "@/lib/internationalization/langParam";

type LanguageSelectionProps = {
    defaultLanguage: LangParam;
    needLateralNavbar: boolean;
    isDroppedDown: boolean;
};

function useHandleUseEffect(
    subDropdownRef: RefObject<HTMLUListElement | null>,
    parentItemRef: RefObject<HTMLLIElement | null>,
    setDroppedDown: Dispatch<SetStateAction<boolean>>
) {
    useEffect(() => {
        const handleOutSideClick = (event: any) => {
            if (
                subDropdownRef.current &&
                !subDropdownRef.current.contains(event.target) &&
                parentItemRef.current &&
                !parentItemRef.current.contains(event.target)
            ) {
                setDroppedDown(false);
            }
        };

        const handleWindowResize = () => {
            setDroppedDown(false);
            subDropdownRef.current!.style.top = "";
            subDropdownRef.current!.style.right = "";
            subDropdownRef.current!.style.left = "";
        };

        window.addEventListener("resize", handleWindowResize);
        window.addEventListener("mousedown", handleOutSideClick);
        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [subDropdownRef, parentItemRef, setDroppedDown]);
}

function toggleDropdown(
    subDropdownRef: RefObject<HTMLUListElement | null>,
    isDroppedDown: boolean,
    setDroppedDown: Dispatch<SetStateAction<boolean>>,
    params: LanguageSelectionProps
) {
    const dropdown = subDropdownRef.current;
    const mainSideBarWidth: number | undefined = subDropdownRef.current?.parentElement?.offsetWidth;
    const mainSideBarHeight: number | undefined =
        subDropdownRef.current?.parentElement?.offsetHeight;
    if (!dropdown || mainSideBarWidth === undefined || mainSideBarHeight === undefined) {
        return;
    }
    if (!isDroppedDown) {
        setDroppedDown(true);

        if (params.needLateralNavbar) {
            dropdown.style.right = `${mainSideBarWidth - 3}px`;
            dropdown.style.top = `0px`;
        } else {
            dropdown.style.top = `${mainSideBarHeight * 1.05}px`;
            dropdown.style.left = "-1.0rem";
        }
    } else {
        setDroppedDown(false);
        dropdown.style.top = "";
        dropdown.style.right = "";
        dropdown.style.left = "";
    }
}

function redirectToLangBaseUrl(router: AppRouterInstance, lang: LangParam) {
    console.log("==> change lang.")
    // const origin: string = window.location.origin;
    // const pathnameWithNewLocale: string = `/${lang}/${window.location.pathname.split("/").slice(2).join("/")}`;
    // const searchParams: string = window.location.search;
    // const newURL: string = `${origin}${pathnameWithNewLocale}${searchParams}`;
    // setCookie("lang", lang);
    // window.location.href = newURL;
}

export default function LanguageSelection(params: LanguageSelectionProps) {
    const parentItemRef = useRef<HTMLLIElement>(null);
    const subDropdownRef = useRef<HTMLUListElement>(null);
    const [isDroppedDown, setDroppedDown] = useState(false);
    useHandleUseEffect(subDropdownRef, parentItemRef, setDroppedDown);
    const router = useRouter();

    const languageIconPaths: { [key in LangParam]: string } = {
        en: "/language-icons/microscreen-en-lang-icon.png",
        es: "/language-icons/microscreen-es-lang-icon.jpg",
    };
    const currentLanguageIcon = languageIconPaths[params.defaultLanguage];

    return (
        <li
            ref={parentItemRef}
            onClick={() => toggleDropdown(subDropdownRef, isDroppedDown, setDroppedDown, params)}
            onKeyDown={(e) => {
                e.key.toLowerCase() === "enter"
                    ? toggleDropdown(subDropdownRef, isDroppedDown, setDroppedDown, params)
                    : null;
            }}
            className="flex gap-2 lg:pt-4 relative cursor-pointer justify-between border-2 border-slate-300 border-x-transparent border-b-transparent items-center text-black text-center lg:border-0 w-100 px-10 py-4 lg:p-0 animated-bottom-border"
            aria-hidden={params.needLateralNavbar && !params.isDroppedDown ? "true" : "false"}
            tabIndex={params.needLateralNavbar && !params.isDroppedDown ? -1 : 0}
        >
            {params.needLateralNavbar ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="currentColor"
                    className="bi bi-caret-left-fill"
                    viewBox="0 0 16 16"
                >
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="currentColor"
                    className="bi bi-caret-down-fill"
                    viewBox="0 0 16 16"
                >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
            )}
            <a className="animated-bottom-border">
                <img
                    alt={"flag for the current selected language"}
                    height={30}
                    width={40}
                    src={currentLanguageIcon}
                />
            </a>
            <ul
                ref={subDropdownRef}
                data-navbar-element="sub-dropdown"
                className={
                    (isDroppedDown ? "" : "hidden") +
                    " absolute " +
                    (params.needLateralNavbar
                        ? "bg-slate-50 border-2 border-solid border-slate-300 "
                        : "bg-slate-50 border-double border-4 backdrop-blur border-t-transparent border-slate-400 ")
                }
            >
                <li className="flex justify-center border-b-2 border-solid border-slate-400 m-0">
                    <span
                        onClick={() => redirectToLangBaseUrl(router, "en")}
                        tabIndex={params.needLateralNavbar && !params.isDroppedDown ? -1 : 0}
                        className="w-full py-2 px-4 whitespace-nowrap animated-bottom-border"
                    >
                        English
                    </span>
                </li>
                <li className="flex justify-center border-b-2 border-solid border-slate-400 m-0">
                    <span
                        onClick={() => redirectToLangBaseUrl(router, "es")}
                        tabIndex={params.needLateralNavbar && !params.isDroppedDown ? -1 : 0}
                        className="w-full py-2 px-4 whitespace-nowrap animated-bottom-border"
                    >
                        Español
                    </span>
                </li>
            </ul>
        </li>
    );
}
