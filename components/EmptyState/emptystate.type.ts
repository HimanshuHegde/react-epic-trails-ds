import { ReactNode } from "react";

type ActionType = "none" | "primary" | "secondary";
export interface EmptyStateProps {
  message: string;
  description?: string;
  label?: string;
  onclick?: () => void;
  action?: ActionType;
  children?: ReactNode;
}