import React, { useState, useEffect } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CircularProgress from "@mui/material/CircularProgress"; // Web equivalent of ActivityIndicator
import { TypeDocsProps } from "./Button.type";

 const TypeDoc = ({
  icon = "right",
  buttonLabel = "Button",
  label = "I agree to the terms and conditions.",
  size = "medium",
  state = "default",
  disabled = false,
  background =  "",
  buttonProps,
  checkboxProps,
}: TypeDocsProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    if (state === "loading" || state === "pressed") {
      setIsChecked(true);
    }
  }, [state]);

  const sizes = {
    fit: "w-fit h-fit p-[10px]",
    small: "w-3/4 min-w-[80px] p-[10px]",
    medium: "w-full min-w-[120px] p-[10px]",
    large: "w-full min-w-[160px] p-[15px]",
  };

  const buttonStates = {
    default: "bg-black",
    pressed: "bg-gray-800",
    hover: "bg-gray-900",
    disabled: "bg-gray-300",
    loading: "bg-black",
  };

  const isButtonDisabled = disabled || !isChecked;
  const isHoverEffectEnabled = !isButtonDisabled && state !== "disabled" && state !== "loading";

  const handlePress = () => {
    if (!isButtonDisabled) {
      setIsPressed(true);
      setTimeout(() => setIsPressed(false), 100);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-[350px] p-5">
      <div
        onClick={() => setIsChecked(!isChecked)}
        className="flex flex-row items-center mb-5 cursor-pointer"
        {...checkboxProps}
      >
        {icon === "right" ? (
          <>
            {isChecked ? (
              <CheckBoxIcon className="text-black text-2xl" />
            ) : (
              <CheckBoxOutlineBlankIcon className="text-gray-600 text-2xl" />
            )}
            <span className="ml-2.5">{label}</span>
          </>
        ) : (
          <>
            <span className="mr-2.5">{label}</span>
            {isChecked ? (
              <CheckBoxIcon className="text-black text-2xl" />
            ) : (
              <CheckBoxOutlineBlankIcon className="text-gray-600 text-2xl" />
            )}
          </>
        )}
      </div>

      <button
        disabled={isButtonDisabled}
        onMouseEnter={() => isHoverEffectEnabled && setIsHovered(true)}
        onMouseLeave={() => isHoverEffectEnabled && setIsHovered(false)}
        onClick={handlePress}
        style={{ backgroundColor: background || undefined }}
        className={`${sizes[size]} ${
          background
            ? ""
            : isButtonDisabled
            ? buttonStates.disabled
            : isPressed
            ? buttonStates.pressed
            : isHovered && isHoverEffectEnabled
            ? buttonStates.hover
            : buttonStates[state]
        } flex items-center justify-center rounded text-center transition duration-200`}
        {...buttonProps}
      >
        {state === "loading" ? (
          <CircularProgress size={18} sx={{ color: "#fff" }} />
        ) : (
          <span className={`${isButtonDisabled ? "text-[#868686]" : "text-white"}`}>
            {buttonLabel}
          </span>
        )}
      </button>
    </div>
  );
};


export default TypeDoc;