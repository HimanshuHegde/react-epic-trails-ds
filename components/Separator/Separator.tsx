import React from "react";
import clsx from "clsx";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical";
}

export const Separator: React.FC<SeparatorProps> = ({
    orientation = "horizontal",
    className,
    ...rest
}) => {
    const baseStyle = "bg-zinc-700";
    const orientationStyle =
        orientation === "horizontal" ? "h-px w-full" : "w-px";

    return (
        <div
            className={clsx(baseStyle, orientationStyle, className)}
            role="separator"
            aria-orientation={orientation}
            {...rest}
        />
    );
};
