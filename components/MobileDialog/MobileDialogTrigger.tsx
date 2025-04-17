import { useMobileDialog } from "@/context/MobileDialogContext";
import { ReactNode } from "react";

interface MobileDialogTriggerProps {
    children: ReactNode;
    className?: string;
}

// Trigger component
export const MobileDialogTrigger: React.FC<MobileDialogTriggerProps> = ({
    children,
    className = "",
}) => {
    const { open } = useMobileDialog();

    return (
        <button
            onClick={open}
            className={`px-4 py-2 bg-gray-800 text-gray-100 rounded hover:bg-gray-700 focus:outline-none ${className}`}
        >
            {children}
        </button>
    );
};
