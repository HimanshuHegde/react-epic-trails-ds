import { ReactNode } from "react";

// Define types for our context
export interface WizardContextType {
  activeStep: number;
  completedSteps: number;
  goToStep: (step: number) => void;
  completeStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  totalSteps: number;
  setTotalSteps: React.Dispatch<React.SetStateAction<number>>;
}



// Props for Wizard component
export interface WizardProps {
  id?: string;
  children: ReactNode;
  initialActiveStep?: number;
  initialCompletedSteps?: number;
}

// Props for WizardStep component
export interface WizardStepProps {
    title: string;
    children: ReactNode;
}
// Props for WizardContextProvider
export interface WizardContextProviderProps {
  children: ReactNode;
  initialActiveStep: number;
  initialCompletedSteps: number;
}


// Props for WizardNavigation component
export interface WizardNavigationProps {
  prevLabel?: string;
  nextLabel?: string;
}