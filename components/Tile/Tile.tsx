import { ReactNode } from "react";

export function Tile({
    children,
    className = "",
}: {
    children?: ReactNode;
    className?: string;
}) {
    return (
        <div
            className={
                "border border-gray-300 rounded-md p-4 transition-all duration-300 hover:shadow-[6px_6px_12px_rgba(0,0,0,0.2)] " +
                className
            }
        >
            {children}
        </div>
    );
}
