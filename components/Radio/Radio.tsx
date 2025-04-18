import React, { useState } from "react";

interface RadioProps {
    name: string;
    label: string;
    value: string;
    checked: boolean;
    onChange: (value: string) => void;
    className?: string;
}

export const Radio = ({
    name,
    label,
    value,
    checked,
    onChange,
    className = "",
}: RadioProps) => {
    // Removed internal state - now fully controlled by parent

    const handleChange = () => {
        onChange(value);
    };

    return (
        <label
            className={`flex items-center space-x-3 py-2 px-4 cursor-pointer transition-all duration-300 
          ${checked ? "bg-zinc-900 text-white" : "bg-zinc-800 text-zinc-400"}
          hover:bg-zinc-700 ${className}`}
        >
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={handleChange}
                className="hidden"
            />
            <div
                className={`relative w-5 h-5 rounded-full border-2 
            ${checked ? "border-white" : "border-zinc-600"}`}
            >
                <div
                    className={`absolute inset-1 bg-white rounded-full transition-all duration-200 
              ${checked ? "scale-100" : "scale-0"}`}
                />
            </div>
            <span>{label}</span>
        </label>
    );
};
