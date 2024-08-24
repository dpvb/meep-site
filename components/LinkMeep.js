"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ChromaMeep({ link }) {
    const [src, setSrc] = useState("/meepcat.png");

    const hovered = () => {
        setSrc("/meepglad.png");
    };

    const unhovered = () => {
        setSrc("/meepcat.png");
    };
    return(
        <Link href={link}>
            <Image 
            src={src}
            width={50}
            height={50}
            alt="meep cat"
            draggable="false"
            onMouseEnter={hovered}
            onMouseLeave={unhovered}
            className={`
                cursor-pointer
            `}/>
        </Link>

);}