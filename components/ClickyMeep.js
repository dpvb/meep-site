"use client";

import Image from "next/image";
import { useState } from "react";
import SpawnableText from "@/components/SpawnableText";

export default function ChromaMeep({ size }) {
    const [texts, setTexts] = useState([]);
    const [boom, setBoom] = useState(false);
    const width = window.innerWidth;
    const height = window.innerHeight;

    const handleClick = (e) => {
        setBoom((a) => !a);

        setTimeout(() => {
            setBoom(false);
        }, 50);

        //Randomized X and Y value spawn (SpawnableText)
        const x = Math.random() * width;
        const y = Math.random() * height;
        setTexts([...texts, { x, y }]);
        console.log(x);
    };

    return (
        <div>

            <div className={`
                animate-wiggle fill-mode-both
                repeat-infinite
            `}>
                <Image 
                    src="/chromameep.gif"
                    priority

                    height={size}
                    width={size}

                    alt="Chroma Meep"

                    draggable="false"
                    onClick={handleClick}

                    className={`
                        cursor-pointer
                        ${boom ? "animate-boom" : ""}
                    `}
                />    
            </div>

            <div draggable="false">
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
