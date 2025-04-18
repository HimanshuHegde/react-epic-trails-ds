import { useMobileDialog } from "@/context/MobileDialogContext";
import { ReactNode } from "react";

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
                className={`fixed bottom-0 left-0 right-0 w-full bg-gray-900 text-gray-100 shadow-lg rounded-t-lg 
          transform transition-transform duration-300 ease-in-out ${className}`}
            >
                {title && (
                    <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                        <h3 className="text-lg font-medium text-gray-100">
                            {title}
                        </h3>
                        <button
                            onClick={close}
                            className="text-gray-400 hover:text-gray-100 focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                )}

                <div className="p-4 max-h-96 overflow-y-auto">{children}</div>

                <div className="p-4 border-t border-gray-700 flex justify-center">
                    <button
                        onClick={close}
                        className="w-full py-3 bg-gray-800 text-gray-100 rounded hover:bg-gray-700 focus:outline-none"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};
