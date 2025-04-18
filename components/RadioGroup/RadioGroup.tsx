import React, { useState } from "react";
import { Radio } from "../Radio";

interface RadioGroupProps {
    name: string;
    options: { label: string; value: string }[];
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
}: RadioGroupProps) => {
    const initialSelected =
        defaultSelected || (options.length > 0 ? options[0].value : "");
    const [selected, setSelected] = useState(initialSelected);

    const handleRadioChange = (value: string) => {
        setSelected(value);
        onChange(value);
    };

    return (
        <div className={`flex flex-col ${className} my-2`}>
            {options.map((option, index) => (
                <Radio
                    key={option.value}
                    name={name}
                    label={option.label}
                    value={option.value}
                    checked={selected === option.value}
                    onChange={handleRadioChange}
                    className={`
              ${index === 0 ? "rounded-tl-lg rounded-tr-lg" : ""} 
              ${
                  index === options.length - 1
                      ? "rounded-bl-lg rounded-br-lg"
                      : ""
              }
            `}
                />
            ))}
        </div>
    );
};
