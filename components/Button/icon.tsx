import { useState } from "react";
import { ButtonProps } from "./Button.type";
import { ArrowForward } from "../icons";

const Icon = ({
  label = "Button",
  state = "default",
  size = "medium",
  icon = "right",
  disabled,
  background,
  variant = "primary", 
  ...props
}: ButtonProps) => {
  
  const buttonVariant = variant;

  const sizes = {
    fit: "w-fit h-fit p-2",
    small: "min-w-[169px] h-fit p-2", 
    medium: "min-w-[270px] h-fit p-2", 
    large: "min-w-[270px] h-fit p-4", 
    full: "w-full h-full p-2",
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

  const isHoverEffectEnabled = !disabled && state !== "loading";
  
  // Apply hover effect if state is "hover" or if user is hovering over the button
  const shouldApplyHoverEffect = (state === "hover" || (isHovered && isHoverEffectEnabled));

  const iconColor =
    disabled
  ? "#868686" 
      : buttonVariant === "primary"
      ? "#ffffff" 
      : "#000000"; 

  return (
    <button
      {...props}
      disabled={disabled}
      onMouseEnter={() => isHoverEffectEnabled && setIsHovered(true)} 
      onMouseLeave={() => isHoverEffectEnabled && setIsHovered(false)}
      className={`${sizes[size]} relative flex flex-row items-center justify-between ${props.className}`}
    >
      {/* Background div */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundColor: background ? background : undefined,
          opacity: shouldApplyHoverEffect ? 0.8 : 1
        }}
      >
        {!background && (
          <div className={`absolute inset-0 ${disabled ? states.disabled : shouldApplyHoverEffect ? states.hover : states[state]}`}></div>
        )}
      </div>
      
      {state === "loading" ? (
        <div className="flex justify-center items-center w-full relative z-10">
          <div className="w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <>
          {icon === "left" && (
            <ArrowForward
              style={{
                color: iconColor, 
                marginRight: "24px", 
                fontSize: "20px",
                position: "relative",
                zIndex: 10
              }}
            />
          )}

          <span className={`${disabled ? "text-[#868686]" : buttonVariant === "primary" ? "text-white" : "text-black"} relative z-10`}>
            {label}
          </span>

          {icon === "right" && (
            <ArrowForward
              style={{
                color: iconColor, 
                marginLeft: "24px", 
                fontSize: "20px",
                position: "relative",
                zIndex: 10
              }}
            />
          )}
        </>
      )}
    </button>
  );
};

export default Icon;