import React, { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { Checkbox, SquareOutline } from "../icons";
type CheckBoxProps = InputHTMLAttributes<HTMLInputElement> & {
    checked?: boolean;
    children?: React.ReactNode;
    info?: React.ReactNode;
    label?: React.ReactNode;
    error?: boolean;
    disabled?: boolean;
    name?: string;
    value?: string;
};
export default function CheckBox({
    children,
    checked,
    info,
    label,
    error = false,
    disabled = false,
    name = "checkbox",
    value,
    ...props
}: CheckBoxProps) {
    const [check, setCheck] = useState<boolean>(checked || false);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.onchange?.(new Event("change"));
    }, [check]);
    return (
        <div
            className={`flex gap-2 p-2 ${
                disabled ? "cursor-not-allowed text-gray-400" : ""
            } bg-gray-50 text-black`}
        >
            <div
                className={`${
                    disabled
                        ? "cursor-not-allowed text-gray-400"
                        : "cursor-pointer"
                }`}
            >
                <span className={`flex gap-2`}>
                    <span
                        className={`  ${disabled ? "text-gray-400" : ""} flex ${
                            info ? "" : "items-center"
                        }`}
                    >
                        <input
                            {...props}
                            type="checkbox"
                            value={value}
                            className={
                                "w-4 h-4 hidden " + (props.className || "")
                            }
                            name={name}
                            disabled={disabled}
                            checked={checked ?? check}
                            ref={inputRef}
                            onChange={(e) => {
                                setCheck(e.target.checked);
                                props.onChange?.(e);
                            }}
                        />

                        {checked ?? check ? (
                            <button
                                aria-label="checkbox"
                                id={props.id || name}
                                className={`flex ${
                                    error ? "text-red-500" : ""
                                } ${
                                    disabled
                                        ? "text-gray-400 cursor-not-allowed"
                                        : ""
                                }`}
                                onClick={() => {
                                    if (!disabled && checked === undefined) {
                                        inputRef.current?.click();
                                    }
                                }}
                            >
                                <Checkbox color="black" height="20px" />
                            </button>
                        ) : (
                            <button
                                aria-label="checkbox"
                                id={props.id || name}
                                className={`flex ${
                                    error ? "text-red-500" : ""
                                } ${
                                    disabled
                                        ? "text-gray-400 cursor-not-allowed"
                                        : ""
                                }`}
                                onClick={() => {
                                    if (!disabled && checked === undefined) {
                                        inputRef.current?.click();
                                    }
                                }}
                            >
                                <SquareOutline color="black" />
                            </button>
                        )}
                    </span>
                    <label
                        htmlFor={name}
                        className="flex flex-col leading-none gap-1 text-black cursor-pointer"
                    >
                        {label}
                        <div className="text-sm text-gray-700 leading-none">
                            {info}
                        </div>
                    </label>
                </span>
            </div>
        </div>
    );
}
