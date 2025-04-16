import React, { ChangeEventHandler, useState } from "react";
import clsx from "clsx";

// Switch Props Interface
interface SwitchProps {
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  className?: string;
}

export const Switch = ({
  checked = false,
  onChange,
  disabled = false,
  className,
}: SwitchProps) => {
  return (
    <label
      className={clsx(
        "inline-flex items-center cursor-pointer select-none",
        disabled ? "opacity-50 cursor-not-allowed" : "",
        className
      )}
    >
      <span className="sr-only">Enable toggle</span>
      <span
        className={clsx(
          "relative inline-block w-12 h-6 transition-colors duration-300 rounded-full",
          checked ? "bg-blue-600" : "bg-zinc-400",
          "mr-4" // Add margin-right to create space between the circle and button
        )}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="absolute opacity-0 w-full h-full cursor-pointer"
        />
        <span
          className={clsx(
            "absolute top-1/2 ml-[2px] -translate-y-1/2 w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out",
            checked ? "transform translate-x-6" : "",
            "p-1"
          )}
        />
      </span>
    </label>
  );
};
