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
                "bg-black border border-gray-700 rounded-md p-4 text-white transition-all duration-300 hover:shadow-[6px_6px_12px_rgba(0,0,0,0.6)] hover:-translate-y-1 " +
                className
            }
        >
            {children}
        </div>
    );
}
