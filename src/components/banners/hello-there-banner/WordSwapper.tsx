"use client";

import { useEffect } from "react";
import "./style.css";

export default function WordSwapper({
    className,
    uniqueId,
    wordsWithColors,
    rotateInterval,
}: {
    className?: string;
    uniqueId: number;
    wordsWithColors: Record<string, string>;
    rotateInterval?: number;
}) {
    useEffect(() => {
        const swapWords = async (targetClass: string) => {
            let words = document.querySelectorAll(targetClass);
            words.forEach((word) => {
                if (word.textContent) {
                    let letters = word.textContent.split("");
                    word.textContent = "";
                    letters.forEach((letter) => {
                        let span = document.createElement("span");
                        span.textContent = letter;
                        span.className = "letter";
                        word.append(span);
                    });
                }
            });

            let currentWordIndex = 0;
            const maxWordIndex = words.length - 1;
            (words[currentWordIndex] as HTMLElement).style.opacity = "1";

            const rotateText = () => {
                let currentWord = words[currentWordIndex];
                let nextWord =
                    currentWordIndex === maxWordIndex
                        ? words[0]
                        : words[currentWordIndex + 1];
                // rotate out letters of current word
                Array.from(currentWord.children).forEach((letter, i) => {
                    setTimeout(() => {
                        letter.className = "letter out";
                    }, i * 80);
                });
                // reveal and rotate in letters of next word
                (nextWord as HTMLElement).style.opacity = "1";
                Array.from(nextWord.children).forEach((letter, i) => {
                    letter.className = "letter behind";
                    setTimeout(
                        () => {
                            letter.className = "letter in";
                        },
                        340 + i * 80,
                    );
                });
                currentWordIndex =
                    currentWordIndex === maxWordIndex
                        ? 0
                        : currentWordIndex + 1;
            };

            rotateText();
            setInterval(rotateText, rotateInterval ? rotateInterval : 4000);
        };

        swapWords(`.unique-id-${uniqueId}`);
    }, []);

    return (
        <div
            className={`relative rotating-text translate-x-[-70px] flex gap-4 justify-center ${className}`}
        >
            <p className="m-0 inline-flex align-top">
                {Object.entries(wordsWithColors).map((item, idx) => {
                    const word = item[0];
                    const color = item[1];
                    return (
                        <span
                            key={idx}
                            className={`unique-id-${uniqueId} absolute flex opacity-0 word alizarin`}
                            style={{ color: color }}
                        >
                            {word}
                        </span>
                    );
                })}
            </p>
        </div>
    );
}
