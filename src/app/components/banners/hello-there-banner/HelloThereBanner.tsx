"use client";

import { useEffect } from "react";
import "./style.css";
import WordSwapper from "./WordSwapper";

export default function HelloThereBanner({
    className,
}: {
    className?: string;
}) {


    const firstWords = {
        "Hey": "#6A5ACD",
        "Hello": "#FF8C00",
        "Ahoy": "#00CED1",
        "Hiya": "#9370DB",
    }


    const secondWords = {
        "mate": "#00FA9A",
        "folks": "#FF6347",
        "friend": "#FF1493",
        "world": "#228B22",
    }

    return (
        <div className="relative flex h-96 ">
<div className="h-full flex items-start">
            <WordSwapper wordsWithColors={firstWords} uniqueId={1} rotateInterval={3800}/>

</div>
<div className="h-full flex items-center">

            <WordSwapper wordsWithColors={secondWords} uniqueId={2} rotateInterval={4000}/>
            </div>


        </div>
    );
}
