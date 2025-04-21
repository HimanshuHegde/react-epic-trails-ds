import React from "react";

type ListProps = {
  children: React.ReactNode;
  type?: "primary" | "secondary";
  size?: "small" | "normal" | "large";
  spaceAfter?: "none" | "small" | "medium" | "large";
  spacing?: "200" | "400" | "600";
};

const sizeClasses = {
  small: "text-sm",
  normal: "text-base",
  large: "text-lg",
};

const spaceAfterClasses = {
  none: "mb-0",
  small: "mb-2",
  medium: "mb-4",
  large: "mb-6",
};

const spacingClasses = {
  "200": "gap-2",
  "400": "gap-4",
  "600": "gap-6",
};

const typeClasses = {
  primary: "text-white",
  secondary: "text-gray-500",
};

export const List: React.FC<ListProps> = ({
  children,
  type = "primary",
  size = "normal",
  spaceAfter = "none",
  spacing = "400",
}) => {
  return (
    <ul
      className={`
        flex flex-col ${sizeClasses[size]} ${spaceAfterClasses[spaceAfter]} ${spacingClasses[spacing]} ${typeClasses[type]} bg-gray-50 p-4
      `}
    >
      {children}
    </ul>
  );
};
export default List;
