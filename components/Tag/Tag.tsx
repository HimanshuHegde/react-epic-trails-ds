import React from "react";
import clsx from "clsx";

export type TagVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "neutral";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: TagVariant;
}

const variantStyles: Record<TagVariant, string> = {
  primary: "bg-blue-900 text-blue-300",
  secondary: "bg-gray-800 text-gray-300",
  success: "bg-green-900 text-green-300",
  danger: "bg-red-900 text-red-300",
  warning: "bg-yellow-800 text-yellow-200",
  info: "bg-cyan-900 text-cyan-300",
  neutral: "bg-zinc-800 text-zinc-200",
};

const Tag: React.FC<TagProps> = ({
  children,
  variant = "neutral",
  className,
  ...props
}) => {
  return (
    <span
      className={clsx(
        "inline-block px-3 py-1 text-sm font-medium rounded-md",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Tag;
