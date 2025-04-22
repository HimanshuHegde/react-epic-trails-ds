import React from "react";
import { RectButton } from "../Button";
import { EmptyStateProps } from "./emptystate.type";
const EmptyState: React.FC<EmptyStateProps> = ({
  message,
  description,
  label = "Okay",
  onclick,
  action = "none",
  children,
}) => {
  const renderButton = () => {
    if (action === "none") return null;

    const buttontype = action === "primary" ? "primary" : "secondary";

    return (
      <RectButton
        label={label}
        variant={buttontype}
        onClick={onclick}
      />
    );
  };

  return (
    <div className="flex bg-white justify-center items-center flex-col"
    >
      {children && <div className="w-full min-h-32 h-fit flex justify-center">{children}</div>}
        <div className="flex flex-col bg-white justify-center items-center py-2 px-4">
      <p className="text-center text-sm font-semibold textblack mb-2">
        {message}
      </p>

      {description && (
        <p className="text-center text-xs text-gray-500 mb-2 max-w-xs">
          {description}
        </p>
      )}

      {renderButton()}
      </div>
    </div>
  );
};

export default EmptyState;
