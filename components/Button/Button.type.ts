import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  variant?: "primary" | "secondary";
  size?: "fit"|"small" | "medium" | "large"|"full";
  icon?: "right" | "left";
  state?: "default" | "pressed" | "hover" | "loading";
  disabled?: boolean;
  background?: string | null;
  children?: React.ReactNode;
};

export interface TypeDocsProps {
  icon?: "left" | "right";
  buttonLabel?: string;
  label?: string;
  size?: "fit"|"small" | "medium" | "large"|"full";
  state?: "default" | "pressed" | "hover" | "disabled" | "loading";
  disabled?: boolean;
  background?: string;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  checkboxProps?: React.HTMLAttributes<HTMLDivElement>;
}
