import React, { ChangeEventHandler } from "react";
import clsx from "clsx";

// Switch Props Interface
interface SwitchProps {
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode; // New prop for custom icon
}

export const Switch = ({
  checked = false,
  onChange,
  disabled = false,
  className,
  icon,
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
          checked ? "bg-black" : "bg-zinc-400",
          "mr-4" // Space between the switch and any adjacent content
        )}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="absolute opacity-0 w-full h-full cursor-pointer z-10"
        />
        <span
          className={clsx(
            "absolute top-1/2 -translate-y-1/2 flex items-center justify-center",
            "w-5 h-5 bg-white rounded-full",
            "shadow-sm",
            "transition-all duration-300 ease-in-out",
            // The correct positioning with 2px gap
            checked ? "left-[calc(100%-20px-2px)]" : "left-[2px]"
          )}
        >
          {icon && (
            <span className="flex items-center justify-center text-gray-600 w-3 h-3">
              {icon}
            </span>
          )}
        </span>
      </span>
    </label>
  );
};