import React, { useState, useRef, useContext } from "react";

interface TooltipContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tooltipRef: React.RefObject<HTMLDivElement>;
}

const TooltipContext = React.createContext<TooltipContextType|null>(null);

export const TooltipProvider = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const tooltipRef = useRef(null);

    const contextValue = {
        isOpen,
        setIsOpen,
        tooltipRef,
    };

    return (
        <TooltipContext.Provider value={contextValue}>
            <div className={`relative inline-flex ${className}`}>
                {children}
            </div>
        </TooltipContext.Provider>
    );
};

export const useTooltipContext = () => {
    const context = useContext(TooltipContext);
    if (!context) {
        throw new Error(
            "useAccordionContext must be used within an AccordionProvider"
        );
    }
    return context;
};
