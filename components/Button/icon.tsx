import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ButtonProps } from "./Button.type";

// Define the button props type
// Would normally be imported from a .type.ts file


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
    fit: "w-fit h-fit p-[10px]",
    small: "min-w-[169px] h-fit p-[10px]", 
    medium: "min-w-[270px] h-fit p-[10px]", 
    large: "min-w-[270px] h-fit p-[15px]", 
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
    loading: '.btn-secondary-loading',
  };

  const states = buttonVariant === "primary" ? primaryStates : secondaryStates;

  background = disabled ? null : background;

  const [isHovered, setIsHovered] = useState(false);

  const isHoverEffectEnabled = !disabled && state !== "disabled" && state !== "loading";

  const iconColor =
    state === "disabled"
      ? "#868686" 
      : buttonVariant === "primary"
      ? "#ffffff" 
      : "#000000"; 

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
      } flex flex-row items-center justify-between`} 
      {...props}
    >
      {state === "loading" ? (
        <div className="flex justify-center items-center w-full">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-t-2" style={{ 
            borderColor: buttonVariant === "primary" ? "#ffffff" : "#000000" 
          }}></div>
        </div>
      ) : (
        <>
          {icon === "left" && (
            <ArrowForwardIcon
              style={{
                color: iconColor, 
                marginRight: "24px", 
                fontSize: "20px", 
              }}
            />
          )}

          <span className={`${state === "disabled" ? "text-[#868686]" : buttonVariant === "primary" ? "text-white" : "text-black"}`}>
            {label}
          </span>

          {icon === "right" && (
            <ArrowForwardIcon
              style={{
                color: iconColor, 
                marginLeft: "24px", 
                fontSize: "20px", 
              }}
            />
          )}
        </>
      )}
    </button>
  );
};

export default Icon;