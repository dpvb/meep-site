"use client";

import { useState } from "react";
import Image from "next/image";

export default function ChromaMeep() {
    const [boom, setBoom] = useState(false);

    const handleClick = () => {
        setBoom((a) => !a);

        setTimeout(() => {
            setBoom(false);
        }, 50);
    };

    return (
        <div
            className={`
                animate-wiggle fill-mode-both
                repeat-infinite
            `}>
            <Image 
                src="/chromameep.gif"
                priority

                width={100}
                height={100}
                
                alt="Chroma Meep"

                draggable="false"
                onClick={handleClick}
                
                className={`
                    cursor-pointer
                    ${boom ? "animate-boom" : ""}
                `}
            />
        </div>
    );
}
