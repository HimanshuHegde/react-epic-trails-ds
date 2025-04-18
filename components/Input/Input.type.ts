import { InputHTMLAttributes } from "react";

export type NInputProp = InputHTMLAttributes<HTMLInputElement> & {
  Size?: "small" | "medium" | "large"|"fit";
  Label?: string;
  Hint?: string;
  State?: "Default" | "Active" | "Correct" | "ViewOnly" | "Loading" | "Disabled" | "Incorrect";
  curved?: boolean;
  id?: string;
  clear?: boolean;

};

export type AInputProp = InputHTMLAttributes<HTMLInputElement> & {
  Size?: "small" | "medium" | "large";
  Label?: string;
  Hint?: string;
  State?: "Default" | "Error" | "Success" | "Loading";
  input?: string[];
  curved?: boolean;
};
