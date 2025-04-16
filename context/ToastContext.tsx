"use client";
import { ToastContainer } from "@/components/Toast/ToastContainer";
import {
    Toast,
    ToastContextProps,
    ToastOptions,
    ToastProviderProps,
    ToastType,
} from "@/components/Toast/types";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);
    const [counter, setCounter] = useState(0);

    const showToast = useCallback(
        (
            message: string,
            type: ToastType = "info",
            options?: ToastOptions
        ): string => {
            const id = (counter + 1).toString();

            const toast: Toast = {
                id,
                message,
                type,
                duration: options?.duration ?? 5000,
                position: options?.position ?? "top-right",
                closable: options?.closable ?? true,
                onClose: options?.onClose,
            };

            setToasts((prev) => [...prev, toast]);
            setCounter((prev) => prev + 1);

            return id;
        },
        [counter]
    );

    const dismiss = useCallback((id: string) => {
        setToasts((prev) => {
            const toast = prev.find((t) => t.id === id);
            if (toast?.onClose) {
                toast.onClose();
            }
            return prev.filter((toast) => toast.id !== id);
        });
    }, []);

    const dismissAll = useCallback(() => {
        toasts.forEach((toast) => {
            if (toast.onClose) {
                toast.onClose();
            }
        });
        setToasts([]);
    }, [toasts]);

    const success = useCallback(
        (message: string, options?: ToastOptions) =>
            showToast(message, "success", options),
        [showToast]
    );

    const error = useCallback(
        (message: string, options?: ToastOptions) =>
            showToast(message, "error", options),
        [showToast]
    );

    const info = useCallback(
        (message: string, options?: ToastOptions) =>
            showToast(message, "info", options),
        [showToast]
    );

    const warning = useCallback(
        (message: string, options?: ToastOptions) =>
            showToast(message, "warning", options),
        [showToast]
    );

    // Auto dismiss toasts when their duration expires
    useEffect(() => {
        toasts
            .filter((toast) => toast.duration > 0)
            .map((toast) =>
                setTimeout(() => dismiss(toast.id), toast.duration)
            );
    }, [toasts, dismiss]);

    const contextValue = {
        showToast,
        success,
        error,
        info,
        warning,
        dismiss,
        dismissAll,
    };

    return (
        <ToastContext.Provider value={contextValue}>
            {children}
            <ToastContainer toasts={toasts} onDismiss={dismiss} />
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};
