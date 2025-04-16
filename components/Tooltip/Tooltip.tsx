import { TooltipProvider } from "@/context/TooltipContext";
import { ReactNode } from "react";
export const Tooltip = ({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) => {
    return <TooltipProvider className={className}>{children}</TooltipProvider>;
};
