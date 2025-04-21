import { ReactNode } from "react";

export function Truncate({
    children,
    maxWidth,
    className = "",
}: {
    children: ReactNode;
    maxWidth?: string;
    className?: string;
}) {
    return (
        <div
            className={
                "overflow-hidden text-ellipsis whitespace-nowrap p-2 " +
                className
            }
            style={{ maxWidth: maxWidth || "100%" }}
        >
            {children}
        </div>
    );
}
