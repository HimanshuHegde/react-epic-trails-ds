import { createContext, ReactNode, useContext, useState } from "react";

type MobileDialogContextType = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

const MobileDialogContext = createContext<MobileDialogContextType | null>(null);
interface MobileDialogProviderProps {
    children: ReactNode;
}
export const MobileDialogProvider: React.FC<MobileDialogProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const open = (): void => setIsOpen(true);
    const close = (): void => setIsOpen(false);

    return (
        <MobileDialogContext.Provider value={{ isOpen, open, close }}>
            {children}
        </MobileDialogContext.Provider>
    );
};

export const useMobileDialog = (): MobileDialogContextType => {
    const context = useContext(MobileDialogContext);
    if (!context) {
        throw new Error("useMobileDialog must be used within a MobileDialogProvider");
    }
    return context;
};
