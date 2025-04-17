import React, { useState } from "react";

interface ModernRadioProps {
    name: string;
    options: string[];
    onChange: (selected: string) => void;
    defaultSelected?: string;
    className?: string;
}

export const RadioGroup = ({
    name,
    options,
    onChange,
    defaultSelected = "",
    className = "",
}: ModernRadioProps) => {
    const [selected, setSelected] = useState(defaultSelected || options[0]);

    const handleChange = (option: string) => {
        setSelected(option);
        onChange(option);
    };

    return (
        <div className={`flex flex-col ${className} my-2`}>
            {options.map((option, index) => (
                <label
                    key={option}
                    className={`flex items-center space-x-3 py-2 px-4 cursor-pointer transition-all duration-300 
            ${
                selected === option
                    ? "bg-zinc-900 text-white"
                    : "bg-zinc-800 text-zinc-400"
            }
            hover:bg-zinc-700
            ${
                index === 0 ? "rounded-tl-lg rounded-tr-lg" : ""
            } 
            ${
                index === options.length - 1
                    ? "rounded-bl-lg rounded-br-lg"
                    : ""
            }
          `}
                >
                    <input
                        type="radio"
                        name={name}
                        value={option}
                        checked={selected === option}
                        onChange={() => handleChange(option)}
                        className="hidden"
                    />
                    <div
                        className={`relative w-5 h-5 rounded-full border-2 
              ${selected === option ? "border-white" : "border-zinc-600"}
            `}
                    >
                        <div
                            className={`absolute inset-1 bg-white rounded-full transition-all duration-200 
                ${selected === option ? "scale-100" : "scale-0"}
              `}
                        />
                    </div>
                    <span>{option}</span>
                </label>
            ))}
        </div>
    );
};
