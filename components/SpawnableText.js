import { useState, useEffect } from "react";

//Randomized values and getters

const textOption = ["plink", "buh", "mow"];
const textSizeOption = ["1.875rem", "2.25rem", "3rem", "3.75rem"]
const gradientColors = [
    ['from-indigo-500', 'via-pink-500', 'to-purple-600'],
    ['from-blue-400', 'via-green-500', 'to-yellow-600'],
    ['from-red-500', 'via-yellow-500', 'to-orange-600'],
];

const getText = () => {
    return textOption[Math.floor(Math.random() * textOption.length)];
};

const getSizeText = () => {
    return textSizeOption[Math.floor(Math.random() * textSizeOption.length)];
};

const getRandomGradient = () => {
    const colors = gradientColors[Math.floor(Math.random() * gradientColors.length)];
    return {
        from: colors[0],
        via: colors[1],
        to: colors[2],
    };
};

export default function SpawnableText({ x, y, duration }) {
    const [isVisible, setIsVisible] = useState(true);

    //Random values and getters
    const [variableText, setVariableText] = useState(getText());
    const [variableTextSize, setVariableTextSize] = useState(getText());
    const [gradient, setGradient] = useState(getRandomGradient());

    useEffect(() => {
        setVariableText(getText());
    }, []);

    useEffect(() => {
        setVariableTextSize(getSizeText());
    }, []);

    useEffect(() => {
        setGradient(getRandomGradient());
    }, []);

    //Checking Despawn
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, duration);
        return () => clearTimeout(timer);
    }, [duration]);

    if (!isVisible) return null;

    return(
        <div
        draggable="false"
        className={`
            absolute
            transform -translate-x-1/2 -translate-y-1/2

            font-extrabold
            text-7xl
            text-transparent
            
            bg-clip-text
            bg-gradient-to-r ${gradient.from} ${gradient.via} ${gradient.to}
            
            pointer-events-none

            animate-floatfade
        `}
        style={{
            left: x,
            top: y,
            fontSize: variableTextSize,
        }}>
            {variableText}
        </div>
    );
}