"use client";

import { useIsVisible } from "@/app/lib/customHooks";
import { useRef } from "react";

export default function OpacityTransitionWrapper({
    children, className
}: {
    children: any;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(ref);
    return (<div
        ref={ref}
        className={`transition-opacity ease-in duration-700 ${className} ${
            isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
        {children}
    </div>);
}