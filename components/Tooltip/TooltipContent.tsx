import { useTooltipContext } from "@/context/TooltipContext";
import { ReactNode, useEffect, useRef } from "react";

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipContentProps {
    children: ReactNode;
    className?: string;
    position?: TooltipPosition;
    offset?: number;
    arrow?: boolean;
}

interface TooltipContentProps {
    children: ReactNode;
    className?: string;
    position?: TooltipPosition;
    offset?: number;
    arrow?: boolean;
}

export const TooltipContent = ({
    children,
    className = "",
    position = "top",
    offset = 8,
    arrow = true,
}: TooltipContentProps) => {
    const { isOpen, tooltipRef, setIsOpen } = useTooltipContext();
    const contentRef = useRef<HTMLDivElement>(null);

    // Handle positioning based on the selected position
    const getPositionClasses = (): string => {
        switch (position) {
            case "top":
                return "bottom-full left-1/2 -translate-x-1/2 mb-2";
            case "bottom":
                return "top-full left-1/2 -translate-x-1/2 mt-2";
            case "left":
                return "right-full top-1/2 -translate-y-1/2 mr-2";
            case "right":
                return "left-full top-1/2 -translate-y-1/2 ml-2";
            default:
                return "bottom-full left-1/2 -translate-x-1/2 mb-2";
        }
    };

    // Get arrow position classes
    const getArrowClasses = (): string => {
        switch (position) {
            case "top":
                return "bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-t-black border-x-transparent border-b-transparent";
            case "bottom":
                return "top-0 left-1/2 -translate-x-1/2 -translate-y-full border-b-black border-x-transparent border-t-transparent";
            case "left":
                return "right-0 top-1/2 -translate-y-1/2 translate-x-full border-l-black border-y-transparent border-r-transparent";
            case "right":
                return "left-0 top-1/2 -translate-y-1/2 -translate-x-full border-r-black border-y-transparent border-l-transparent";
            default:
                return "bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-t-black border-x-transparent border-b-transparent";
        }
    };

    // Handle click outside to close tooltip
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                contentRef.current &&
                event.target instanceof Node &&
                !contentRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setIsOpen]);

    if (!isOpen) return null;

    return (
        <div
            ref={contentRef}
            className={`
          absolute z-50 px-3 py-2 text-sm text-white bg-black rounded-md shadow-lg
          ${getPositionClasses()}
          ${className}
        `}
            role="tooltip"
            style={{ maxWidth: "260px" }}
        >
            {children}
            {arrow && (
                <div
                    className={`absolute w-0 h-0 border-4 ${getArrowClasses()}`}
                />
            )}
        </div>
    );
};
