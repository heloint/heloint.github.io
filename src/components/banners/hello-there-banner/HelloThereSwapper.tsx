"use client";

import { useEffect } from "react";
import "./style.css";
import WordSwapper from "./WordSwapper";

export default function HelloThereSwapper({
    className,
}: {
    className?: string;
}) {
    const greetings = {
        "Hey, folks!": "",
        "¡Hola, gente!": "",
        "Sziasztok!": "",
    };

    return (
        <div className="relative flex flex-col h-fit font-serif text-gray-700">
            <div className="flex items-start gap-4 pl-16">
                <WordSwapper
                    wordsWithColors={greetings}
                    uniqueId={1}
                    rotateInterval={3800}
                    className="font-semibold text-4xl"
                />
            </div>
            <div className="text-2xl text-pretty pt-16 w-full">
                <p>
                    I'm Daniel. I'm a full-stack developer with the Gabaldón Lab
                    at the Barcelona Supercomputing Center.
                </p>
                <p>
                    Developing, maintaining and administrating web applications,
                    CLI tools, web services, databases and servers.
                </p>
            </div>
        </div>
    );
}
