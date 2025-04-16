import React from "react";
import { PositionGroupProps, Toast, ToastPosition, ToastType } from "./types";

const getPositionClasses = (position: ToastPosition): string => {
    switch (position) {
        case "top-left":
            return "top-4 left-4";
        case "top-right":
            return "top-4 right-4";
        case "bottom-left":
            return "bottom-4 left-4";
        case "bottom-right":
            return "bottom-4 right-4";
        case "top-center":
            return "top-4 left-1/2 transform -translate-x-1/2";
        case "bottom-center":
            return "bottom-4 left-1/2 transform -translate-x-1/2";
    }
};

export const PositionGroup: React.FC<PositionGroupProps> = ({
    position,
    toasts,
    onDismiss,
}) => {
    if (toasts.length === 0) return null;

    return (
        <div
            className={`absolute flex flex-col ${getPositionClasses(position)} pointer-events-auto`}
        >
            {toasts.map((toast) => (
                <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
            ))}
        </div>
    );
};

interface ToastItemProps {
    toast: Toast;
    onDismiss: (id: string) => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onDismiss }) => {
    const { id, message, type, closable, duration } = toast;
    const progressRef = React.useRef<HTMLDivElement>(null);

    // Set up progress animation when component mounts
    React.useEffect(() => {
        if (progressRef.current && duration > 0) {
            progressRef.current.style.transition = `width ${duration}ms linear`;
            progressRef.current.style.width = "100%";

            // Small delay to ensure the transition starts properly
            setTimeout(() => {
                if (progressRef.current) {
                    progressRef.current.style.width = "0%";
                }
            }, 10);
        }
    }, [duration]);

    const getBorderColor = (type: ToastType): string => {
        switch (type) {
            case "success":
                return "border-green-500";
            case "error":
                return "border-red-500";
            case "warning":
                return "border-yellow-500";
            case "info":
                return "border-blue-500";
        }
    };

    return (
        <div
            className={`relative flex items-center justify-between p-3 mb-2 rounded-md shadow-lg text-white w-full max-w-md bg-gray-900 border-l-4 ${getBorderColor(
                type
            )} overflow-hidden animate-fadeIn`}
        >
            {/* Progress indicator */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-800">
                <div
                    ref={progressRef}
                    className={`h-full ${getProgressColor(type)}`}
                    style={{ width: "100%" }}
                />
            </div>

            <div className="flex-1 mr-3">{message}</div>
            {closable && (
                <button
                    className="text-white opacity-70 hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDismiss(id);
                    }}
                    aria-label="Close"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
};

const getProgressColor = (type: ToastType): string => {
    switch (type) {
        case "success":
            return "bg-green-500";
        case "error":
            return "bg-red-500";
        case "warning":
            return "bg-yellow-500";
        case "info":
            return "bg-blue-500";
    }
};
