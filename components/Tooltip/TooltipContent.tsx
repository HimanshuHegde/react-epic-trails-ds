import { useTooltipContext } from "@/context/TooltipContext";
import { ReactNode, useEffect, useRef, useState } from "react";

type TooltipPosition = "top" | "bottom" | "left" | "right" | "auto";

interface TooltipContentProps {
    children: ReactNode;
    className?: string;
    position?: TooltipPosition;
    arrow?: boolean;
}

export const TooltipContent = ({
    children,
    className = "",
    position = "auto",
    arrow = true,
}: TooltipContentProps) => {
    const { isOpen, setIsOpen } = useTooltipContext();
    const contentRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLElement | null>(null);
    const [finalPosition, setFinalPosition] = useState(position);

    // Get the best position if 'auto'
    const getBestPosition = ():any => {
        if (!contentRef.current || !triggerRef.current) return "top";

        const tooltipRect = contentRef.current.getBoundingClientRect();
        const triggerRect = triggerRef.current.getBoundingClientRect();

        const space = {
            top: triggerRect.top,
            bottom: window.innerHeight - triggerRect.bottom,
            left: triggerRect.left,
            right: window.innerWidth - triggerRect.right,
        };

        const fits = {
            top: space.top >= tooltipRect.height + 8,
            bottom: space.bottom >= tooltipRect.height + 8,
            left: space.left >= tooltipRect.width + 8,
            right: space.right >= tooltipRect.width + 8,
        };

        if (fits.top) return "top";
        if (fits.bottom) return "bottom";
        if (fits.right) return "right";
        if (fits.left) return "left";

        // Fallback to the side with max space
        return Object.entries(space).sort((a, b) => b[1] - a[1])[0][0];
    };

    useEffect(() => {
        if (position === "auto") {
            setTimeout(() => {
                const bestPos = getBestPosition();
                setFinalPosition(bestPos);
            }, 0);
        } else {
            setFinalPosition(position);
        }
    }, [position, isOpen]);

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

    const getPositionClasses = (): string => {
        switch (finalPosition) {
            case "top":
                return "bottom-full left-1/2 -translate-x-1/2 mb-2";
            case "bottom":
                return "top-full left-1/2 -translate-x-1/2 mt-2";
            case "left":
                return "right-full top-1/2 -translate-y-1/2 mr-2";
            case "right":
                return "left-full top-1/2 -translate-y-1/2 ml-2";
            default:
                return "";
        }
    };

    const getArrowClasses = (): string => {
        switch (finalPosition) {
            case "top":
                return "bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-t-black border-x-transparent border-b-transparent";
            case "bottom":
                return "top-0 left-1/2 -translate-x-1/2 -translate-y-full border-b-black border-x-transparent border-t-transparent";
            case "left":
                return "right-0 top-1/2 -translate-y-1/2 translate-x-full border-l-black border-y-transparent border-r-transparent";
            case "right":
                return "left-0 top-1/2 -translate-y-1/2 -translate-x-full border-r-black border-y-transparent border-l-transparent";
            default:
                return "";
        }
    };

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

