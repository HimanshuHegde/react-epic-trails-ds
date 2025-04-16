import React, { ReactNode } from "react";

interface TimelineProps {
    children: ReactNode;
    activeColor?: string;
    inactiveColor?: string;
    lineThickness?: number;
    className?: string;
}

export function Timeline({
    children,
    activeColor = "#22c55e",
    inactiveColor = "#d1d5db",
    lineThickness = 2,
    className = "",
}: TimelineProps) {
    return (
        <div className={`w-full ${className}`}>
            <div className="relative">
                <div
                    className="absolute top-3 left-0 right-0 bg-gray-300"
                    style={{ height: `${lineThickness}px` }}
                />

                <div className="flex justify-between relative">
                    {React.Children.map(children, (child) => {
                        if (React.isValidElement(child)) {
                            return React.cloneElement(child, {
                                activeColor,
                                inactiveColor,
                                ...child.props,
                            });
                        }
                        return child;
                    })}
                </div>
            </div>
        </div>
    );
}
