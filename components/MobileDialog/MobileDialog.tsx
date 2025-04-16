import { MobileDialogProvider } from "@/context/MobileDialogContext";
import { ReactNode } from "react";

export const MobileDialog = ({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <MobileDialogProvider>
            <div className={`relative ${className}`}>{children}</div>
        </MobileDialogProvider>
    );
};
