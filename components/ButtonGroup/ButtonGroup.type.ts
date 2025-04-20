import React from "react";

export type ButtonGroupProps = {
    icon?: React.ReactNode;
    buttonContent?: string;
    iconPosition?: "left" | "right";
    variant?: "primary" | "secondary";
    className?: string;
    contentButtonSize?: "fit"|"small" | "medium" | "large";
    iconButtonSize?: "fit"|"small" | "medium" | "large",
    contentButtonFunction?: () => void;
    iconButtonFunction?: () => void;
};