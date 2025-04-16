import React, { useState } from "react";

interface SegmentedSwitchProps {
    options: string[];
    onChange?: (selected: string) => void;
    defaultSelected?: string;
    className?: string;
}

export const SegmentedSwitch = ({
    options,
    onChange,
    defaultSelected = "",
    className = "",
}: SegmentedSwitchProps) => {
    const [selected, setSelected] = useState(defaultSelected || options[0]);

    const handleSelect = (option: string) => {
        setSelected(option);
        onChange?.(option);
    };

    return (
        <div
            className={`flex border border-zinc-600 rounded-full bg-zinc-800 p-1 my-2 ${className}`}
        >
            {options.map((option, index) => (
                <div
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`relative flex items-center justify-center py-2 px-6 cursor-pointer transition-all duration-300
            ${
                selected === option
                    ? "bg-zinc-900 text-white"
                    : "bg-zinc-800 text-zinc-400"
            }
            ${index === 0 ? "rounded-l-full" : ""}
            ${index === options.length - 1 ? "rounded-r-full" : ""}
            ${
                index !== 0
                    ? "border-l border-zinc-600"
                    : ""
            }
          `}
                >
                    {option}
                </div>
            ))}
        </div>
    );
};
