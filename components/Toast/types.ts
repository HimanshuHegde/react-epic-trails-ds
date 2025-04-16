import { ReactNode } from "react";

export interface ToastProviderProps {
    children: ReactNode;
}

export interface ToastContainerProps {
    toasts: Toast[];
    onDismiss: (id: string) => void;
}

export interface PositionGroupProps {
    position: ToastPosition;
    toasts: Toast[];
    onDismiss: (id: string) => void;
}

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';

export interface ToastOptions {
    duration?: number;
    position?: ToastPosition;
    closable?: boolean;
    onClose?: () => void;
}

export interface Toast {
    id: string;
    message: string;
    type: ToastType;
    duration: number;
    position: ToastPosition;
    closable: boolean;
    onClose?: () => void;
}

export interface ToastContextProps {
    showToast: (message: string, type?: ToastType, options?: ToastOptions) => string;
    success: (message: string, options?: ToastOptions) => string;
    error: (message: string, options?: ToastOptions) => string;
    info: (message: string, options?: ToastOptions) => string;
    warning: (message: string, options?: ToastOptions) => string;
    dismiss: (id: string) => void;
    dismissAll: () => void;
}
