import { Icon } from "@mui/material";
import React, { useState } from "react";
import { ButtonProps } from "./Button.type";

const RectButton = ({
  label = "Button",
  state = "default",
  size = "medium",
  disabled,
  background,
  variant = "primary", 
  ...props
}: ButtonProps) => {
  const buttonVariant = variant;

  const sizes = {
    small: "min-w-[80px] h-fit p-[10px]", 
    medium: "min-w-[120px] h-fit p-[10px]", 
    large: "min-w-[160px] h-fit p-[15px]", 
  };

  const primaryStates = {
    default: "bg-buttons-primary-default",
    pressed: "bg-buttons-primary-pressed",
    hover: "bg-buttons-primary-hover",
    disabled: "bg-buttons-primary-disabled",
    loading: "bg-buttons-primary-default",
  };

  const secondaryStates = {
    default: 'btn-secondary-default',
    pressed: 'btn-secondary-pressed',
    hover: 'btn-secondary-hover',
    disabled: 'btn-secondary-disabled', 
    loading: 'btn-secondary-loading',
  };

  const states = buttonVariant === "primary" ? primaryStates : secondaryStates;

  background = disabled ? null : background;

  const [isHovered, setIsHovered] = useState(false);

  const isHoverEffectEnabled = !disabled && state !== "disabled" && state !== "loading";

  return (
    <button 
      disabled={disabled}
      onMouseEnter={() => isHoverEffectEnabled && setIsHovered(true)} 
      onMouseLeave={() => isHoverEffectEnabled && setIsHovered(false)} 
      style={{ backgroundColor: background ? background : undefined }}
      className={`${sizes[size]} ${
        background
          ? null
          : disabled
          ? states.disabled 
          : isHovered && isHoverEffectEnabled
          ? states.hover 
          : states[state]
      } flex items-center justify-center`}
      {...props}
    >
      {state === "loading" ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
        </div>
      ) : (
        <span className={`${state === "disabled" ? "text-[#868686]" : buttonVariant === "primary" ? "text-white" : "text-black"}`}>
          {label}
        </span>
      )}
    </button>
  );
};  

export default RectButton;