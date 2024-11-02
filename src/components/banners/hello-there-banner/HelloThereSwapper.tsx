"use client";

import "./style.css";
import WordSwapper from "./WordSwapper";
import { ServerComponentLangProp } from "@/lib/internationalization/langParam";
import { DICTIONARY } from "@/lib/internationalization/dictionary";

export default function HelloThereSwapper(props: ServerComponentLangProp) {
    const greetings = {
        "Hey, folks!": "",
        "¡Hola, gente!": "",
        "Sziasztok!": "",
    };
    console.log(props.lang)
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
                    {
                        DICTIONARY.HelloThereSwapper.paragraph1[
                            props.lang ? props.lang : "en"
                        ]
                    }
                </p>
                <p>
                    {
                        DICTIONARY.HelloThereSwapper.paragraph2[
                            props.lang ? props.lang : "en"
                        ]
                    }
                </p>
            </div>
        </div>
    );
}
