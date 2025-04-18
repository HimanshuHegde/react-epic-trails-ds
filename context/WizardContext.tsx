import {
    WizardContextProviderProps,
    WizardContextType,
} from "@/components/Wizard/types";
import { createContext, useContext, useState } from "react";

// Create context for wizard state
const WizardContext = createContext<WizardContextType | undefined>(undefined);

// Custom hook to use wizard context
export const useWizard = (): WizardContextType => {
    const context = useContext(WizardContext);
    if (!context) {
        throw new Error("useWizard must be used within a Wizard component");
    }
    return context;
};

// Wizard context provider component (internal use only)
export const WizardContextProvider: React.FC<WizardContextProviderProps> = ({
    children,
    initialActiveStep,
    initialCompletedSteps,
}) => {
    const [activeStep, setActiveStep] = useState<number>(initialActiveStep);
    const [completedSteps, setCompletedSteps] = useState<number>(
        initialCompletedSteps
    );
    const [totalSteps, setTotalSteps] = useState<number>(0);

    const goToStep = (step: number): void => {
        if (step <= completedSteps) {
            setActiveStep(step);
        }
    };

    const completeStep = (step: number): void => {
        const newCompletedSteps = Math.max(completedSteps, step + 1);
        setCompletedSteps(newCompletedSteps);
    };

    const nextStep = (): void => {
        if (activeStep < totalSteps - 1) {
            setActiveStep(activeStep + 1);
            completeStep(activeStep);
        }
    };

    const prevStep = (): void => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    };

    const value: WizardContextType = {
        activeStep,
        completedSteps,
        goToStep,
        completeStep,
        nextStep,
        prevStep,
        totalSteps,
        setTotalSteps,
    };

    return (
        <WizardContext.Provider value={value}>
            {children}
        </WizardContext.Provider>
    );
};
