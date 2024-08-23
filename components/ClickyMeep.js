"use client";

import { useState } from "react";
import Image from "next/image";
import SpawnableText from "@/components/SpawnableText";

export default function ChromaMeep({ size }) {
    const [texts, setTexts] = useState([]);
    const [boom, setBoom] = useState(false);

    const handleClick = (e) => {
        setBoom((a) => !a);

        setTimeout(() => {
            setBoom(false);
        }, 50);

        //Randomized X and Y value spawn (SpawnableText)
        const x = Math.floor(Math.random() * ((window.innerWidth - 0) + 1));
        const y = window.innerHeight - (Math.floor(Math.random() * (200 - 35 + 1)) + 35);
        setTexts([...texts, { x, y }]);
        console.log(x);
    };

    return (
        <div>

            <div
            className={`
                animate-wiggle fill-mode-both
                repeat-infinite
            `}>
                <Image 
                    src="/chromameep.gif"
                    width={size}
                    height={size}
                    priority
                    alt="Chroma Meep"
                    onClick={handleClick}
                    draggable="false"
                    className={`
                        cursor-pointer
                        ${boom ? "animate-boom" : ""}
                    `}
                />    
            </div>

            <div
            draggable="false" 
            className={`
                overflow-x-hidden
                overflow-y-hidden
            `}>
                {texts.map((text, index) => (
                    <SpawnableText 
                    key={index} 
                    x={text.x} 
                    y={text.y}
                    duration = {1000}
                />
                ))}
            </div>

        </div>
    );
}
