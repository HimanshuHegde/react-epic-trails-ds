import React from "react";

export type ButtonGroupProps = {
    children?: React.ReactNode;
    icon?: React.ReactNode;
    buttonContent?: string;
    iconPosition?: "left" | "right";
    size?: "small" | "medium" | "large";
    variant?: "contained" | "outlined";
    className?: string;
    contentButtonSize?: "fit"|"small" | "medium" | "large";
    iconButtonSize?: "fit"|"small" | "medium" | "large",
    contentButtonFunction?: () => void;
    iconButtonFunction?: () => void;
};