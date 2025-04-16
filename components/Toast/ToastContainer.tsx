import { PositionGroup } from "./ToastPositionGroup";
import { Toast, ToastContainerProps, ToastPosition } from "./types";

export const ToastContainer: React.FC<ToastContainerProps> = ({
    toasts,
    onDismiss,
}) => {
    if (toasts.length === 0) return null;

    // Group toasts by position
    const positionGroups: Record<ToastPosition, Toast[]> = {
        "top-left": [],
        "top-right": [],
        "bottom-left": [],
        "bottom-right": [],
        "top-center": [],
        "bottom-center": [],
    };

    toasts.forEach((toast) => {
        positionGroups[toast.position].push(toast);
    });

    return (
        <>
            <style>
                {`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
            </style>
            <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
                {Object.entries(positionGroups).map(
                    ([position, positionToasts]) => (
                        <PositionGroup
                            key={position}
                            position={position as ToastPosition}
                            toasts={positionToasts}
                            onDismiss={onDismiss}
                        />
                    )
                )}
            </div>
        </>
    );
};
