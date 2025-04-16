import { useTooltipContext } from "@/context/TooltipContext";
import React, { ReactNode } from "react";

interface TooltipTriggerProps {
    children: ReactNode;
    className?: string;
    asChild?: boolean;
}

export const TooltipTrigger = ({
    children,
    className = "",
    asChild = false,
}: TooltipTriggerProps) => {
    const { setIsOpen } = useTooltipContext();

    const triggerProps = {
        onMouseEnter: () => setIsOpen(true),
        onMouseLeave: () => setIsOpen(false),
        onFocus: () => setIsOpen(true),
        onBlur: () => setIsOpen(false),
        className: `${className} cursor-pointer`,
    };

    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, triggerProps);
    }

    return <div {...triggerProps}>{children}</div>;
};
