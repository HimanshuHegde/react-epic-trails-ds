import React, { useState, useEffect } from "react";
import { TypeDocsProps } from "./Button.type";
import { Checkbox, SquareOutline } from "../icons";

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
    full: "w-full h-full p-[10px]",
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
              <Checkbox color="white" size="20px"/>
            ) : (
              <SquareOutline color="gray" size="20px"/>
            )}
            <span className="ml-2.5 text-white">{label}</span>
          </>
        ) : (
          <>
            <span className="mr-2.5 text-white">{label}</span>
            {isChecked ? (
              <Checkbox color="white" size="20px"/>
            ) : (
              <SquareOutline color="gray" size="20px"/>
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
          <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
        </div>
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