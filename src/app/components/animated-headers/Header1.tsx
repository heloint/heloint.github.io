"use client";

import { useIsVisible } from "@/app/lib/customHooks";
import { useRef } from "react";

export default function Header1({ headerText, className }: { headerText: string, className?: string }) {
    const ref = useRef<HTMLHeadingElement>(null);
    const isVisible = useIsVisible(ref);
    return (
        <h1
            className={`${className} transition-transform duration-700 ease-out transform ${
                isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
            }`}
            ref={ref}
        >
            {headerText}
        </h1>
    );
}
