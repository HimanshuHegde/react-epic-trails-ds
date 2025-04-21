import { useMobileDialog } from "@/context/MobileDialogContext";
import { ReactNode } from "react";
import { CloseCircle } from "../icons";
import { RectButton } from "../Button";

interface MobileDialogContentProps {
    title?: string;
    children: ReactNode;
    className?: string;
}

export const MobileDialogContent: React.FC<MobileDialogContentProps> = ({
    title,
    children,
    className = "",
}) => {
    const { isOpen, close } = useMobileDialog();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
            <div
                className={`fixed bottom-0 left-0 right-0 w-full bg-gray-50 text-black shadow-lg rounded-t-lg 
          transform transition-transform duration-300 ease-in-out ${className}`}
            >
                {title && (
                    <div className="p-4 border-b border-gray-400 flex justify-between items-center">
                        <h3 className="text-lg font-medium text-black">
                            {title}
                        </h3>
                        <button
                            onClick={close}
                            className="text-gray-400 hover:text-gray-100 focus:outline-none"
                        >
                           <CloseCircle size="25px"/>
                        </button>
                    </div>
                )}

                <div className="p-4 max-h-96 overflow-y-auto">{children}</div>

                <div className="p-4 border-t border-gray-700 flex justify-center">
                    <RectButton
                        onClick={close}
                        size="full"
                    >
                        Close
                    </RectButton>
                </div>
            </div>
        </div>
    );
};
