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
            className={`flex border w-fit rounded-full p-1 my-2 border-gray-800 ${className}`}
        >
            {options.map((option, index) => (
                <div
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`relative flex items-center justify-center py-2 px-6 cursor-pointer transition-all duration-300
        ${
            selected === option
                ? "bg-black text-white"
                : "bg-gray-50 text-gray-800"
        }
        ${index === 0 ? "rounded-l-full" : ""}
        ${index === options.length - 1 ? "rounded-r-full" : ""}
        ${index !== 0 ? "border-l border-zinc-500" : ""}
      `}
                >
                    {option}
                </div>
            ))}
        </div>
    );
};
