import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  icon?: "right" | "left";
  state?: "default" | "pressed" | "hover" | "disabled" | "loading";
  disabled?: boolean;
  background?: string | null;
};

export interface TypeDocsProps {
  icon?: "left" | "right";
  buttonLabel?: string;
  label?: string;
  size?: "small" | "medium" | "large";
  state?: "default" | "pressed" | "hover" | "disabled" | "loading";
  disabled?: boolean;
  background?: string;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  checkboxProps?: React.HTMLAttributes<HTMLDivElement>;
}
