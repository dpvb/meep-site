"use client";

import { useState } from "react";
import Image from "next/image";

export default function ChromaMeep() {
//  Tilt for possible pause feature?
//  const [tilting, setTilt] = useState(true);
    const [boom, setBoom] = useState(false);

    const handleClick = () => {
        setBoom((a) => !a);

        setTimeout(() => {
            setBoom(false);
        }, 50);

//        setTilt((a) => !a);
//
//        setTimeout(() => {
//            setTilt(true);
//       }, 10);
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
                className={`
                    cursor-pointer
                    ${boom ? "animate-boom" : ""}
                `}
            />
        </div>
    );
}
