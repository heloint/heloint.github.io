"use client";
import { useEffect, useRef, useState } from "react";
import SideBarOpenButton from "./SideBarToggleButton";
import SideBarCloseButton from "./SideBarCloseButton";
import NavbarItem from "./NavbarItem";
import Link from "next/link";

export default function Navbar() {
    const navbarOptionsRef = useRef<HTMLUListElement>(null);
    const [isTopPosition, setTopPosition] = useState(true);
    const [isDroppedDown, setDroppedDown] = useState(false);
    const [needLateralNavbar, setNeedLateralNavbar] = useState(false);

    useEffect(() => {
        if (window.innerWidth <= 1024) {
            setNeedLateralNavbar(true);
        }

        const handleOutSideClick = (event: any) => {
            if (
                navbarOptionsRef.current &&
                !navbarOptionsRef.current.contains(event.target)
            ) {
                setDroppedDown(false);
            }
        };

        const handleWindowResize = () => {
            if (window.innerWidth >= 1024) {
                setNeedLateralNavbar(false);
            } else if (window.innerWidth < 1024) {
                setNeedLateralNavbar(true);
                setDroppedDown(false);
            }
        };

        const handleWindowScrollEvent = () => {
            if (window.scrollY < 30) {
                setTopPosition(true);
            } else {
                setTopPosition(false);
            }
        };

        window.addEventListener("resize", handleWindowResize);
        window.addEventListener("mousedown", handleOutSideClick);
        window.addEventListener("scroll", handleWindowScrollEvent);

        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
            window.removeEventListener("resize", handleWindowResize);
            window.removeEventListener("scroll", handleWindowScrollEvent);
        };
    }, [navbarOptionsRef]);

    return (
        <nav
            id="main-nav"
            className={
                "w-full fixed z-[20] " +
                (isTopPosition
                    ? "bg-transparent"
                    : "border-b-2 border-b-slate-400 bg-slate-50 bg-opacity-90")
            }
        >
            <div className="max-w-screen-xl lg:flex lg:content-center lg:justify-around lg:mx-auto mx-10 h-full items-center">
                <div className="flex justify-between content-center items-center">
                    <div id="home-nav-icon " className="py-2">
                        <Link href="/">
                            <img
                                alt="navbar icon"
                                width={200}
                                height={200}
                                src="/icons/signature-icon.png"
                                className="hover:scale-105"
                            />
                        </Link>
                    </div>
                    <SideBarOpenButton
                        setDroppedDown={setDroppedDown}
                        isDroppedDown={isDroppedDown}
                    />
                </div>

                <ul
                    ref={navbarOptionsRef}
                    id="navbar-options"
                    tabIndex={isDroppedDown ? undefined : -1}
                    className={
                        (needLateralNavbar ? " min-h-screen " : "") +
                        "border-solid border-2 border-slate-300 bg-slate-50 lg:contents lg:mt-0 mx-auto lg:static fixed top-0 transform transition-all duration-300 py-5 flex-col rounded-lg " +
                        (isDroppedDown && needLateralNavbar
                            ? "right-0 w-2/5 sm:w-1/5"
                            : "w-0 -right-[300px] ")
                    }
                >
                    {needLateralNavbar ? (
                        <SideBarCloseButton
                            needLateralNavbar={needLateralNavbar}
                            setDroppedDown={setDroppedDown}
                        />
                    ) : null}

                    <NavbarItem
                        needLateralNavbar={needLateralNavbar}
                        isDroppedDown={isDroppedDown}
                        href={"/#experiences"}
                        text={"Experiences"}
                    />
                    <NavbarItem
                        needLateralNavbar={needLateralNavbar}
                        isDroppedDown={isDroppedDown}
                        href={"/#works"}
                        text={"Works"}
                    />
                    <NavbarItem
                        needLateralNavbar={needLateralNavbar}
                        isDroppedDown={isDroppedDown}
                        href={"/#studies"}
                        text={"Studies"}
                    />
                    <NavbarItem
                        needLateralNavbar={needLateralNavbar}
                        isDroppedDown={isDroppedDown}
                        href={"/#posts"}
                        text={"Posts"}
                    />
                    <NavbarItem
                        needLateralNavbar={needLateralNavbar}
                        isDroppedDown={isDroppedDown}
                        href={"/#footer-contacts"}
                        text={"Contacts"}
                    />
                </ul>
            </div>
        </nav>
    );
}
