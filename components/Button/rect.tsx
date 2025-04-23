import React, { useState } from "react";
import { ButtonProps } from "./Button.type";

const RectButton = ({ 
  label = "", 
  state = "default", 
  size = "medium", 
  disabled, 
  background, 
  variant = "primary", 
  children, 
  ...props 
}: ButtonProps) => {
  const buttonVariant = variant;
  
  const sizes = {
    fit: "w-fit h-fit p-2",
    small: "min-w-[80px] h-fit p-2",
    medium: "min-w-[120px] h-fit p-2",
    large: "min-w-[160px] h-fit p-4",
    full: "w-full h-full p-2",
  };
  
  const primaryStates = {
    default: "bg-buttons-primary-default",
    pressed: "bg-buttons-primary-pressed",
    hover: "bg-buttons-primary-hover",
    loading: "bg-buttons-primary-default",
  };
  
  const secondaryStates = {
    default: 'btn-secondary-default',
    pressed: 'btn-secondary-pressed',
    hover: 'btn-secondary-hover',
    loading: 'btn-secondary-loading',
  };
  
  const states = buttonVariant === "primary" ? primaryStates : secondaryStates;
  background = disabled ? null : background;
  
  const [isHovered, setIsHovered] = useState(false);
  const isHoverEffectEnabled = !disabled && state !== "loading";
  
  // Apply hover effect if state is "hover" or if user is hovering over the button
  const shouldApplyHoverEffect = (state === "hover" || (isHovered && isHoverEffectEnabled));
  
  return (
    <button
      {...props}
      disabled={disabled}
      onMouseEnter={() => isHoverEffectEnabled && setIsHovered(true)}
      onMouseLeave={() => isHoverEffectEnabled && setIsHovered(false)}
      className={`${sizes[size]} relative flex items-center justify-center ${props.className}`}
    >
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundColor: background ? background : undefined,
          opacity: shouldApplyHoverEffect ? 0.8 : 1
        }}
      >
        {!background && (
          <div className={`absolute inset-0 ${ shouldApplyHoverEffect ? states.hover : states[state]}`}></div>
        )}
      </div>
      
      {state !== "loading" && (
        <span 
          className={`relative z-10 ${
            disabled
              ? "text-contentStatusDisabled" 
              : buttonVariant === "primary" 
                ? "text-white" 
                : "text-black"
          }`}
        >
          {children || label}
        </span>
      )}
    </button>
  );
};

export default RectButton;