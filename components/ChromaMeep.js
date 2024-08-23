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
                width={100}
                height={100}
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
    );
}
