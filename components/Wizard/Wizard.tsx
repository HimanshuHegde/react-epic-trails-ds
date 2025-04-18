import React, { ReactNode, ReactElement } from 'react';
import { WizardNavigationProps, WizardProps, WizardStepProps } from './types';
import { useWizard, WizardContextProvider } from '@/context/WizardContext';


const Wizard: React.FC<WizardProps> = ({ 
  id, 
  children, 
  initialActiveStep = 0, 
  initialCompletedSteps = 0 
}) => {
  return (
    <WizardContextProvider 
      initialActiveStep={initialActiveStep} 
      initialCompletedSteps={initialCompletedSteps}
    >
      <WizardContent id={id}>
        {children}
      </WizardContent>
    </WizardContextProvider>
  );
};

const isWizardStep = (element: React.ReactElement): element is React.ReactElement<WizardStepProps> => {
  return element.type === WizardStep;
};

interface WizardContentProps {
  id?: string;
  children: ReactNode;
}

const WizardContent: React.FC<WizardContentProps> = ({ id, children }) => {
  const childrenArray = React.Children.toArray(children);
  const steps = childrenArray.filter(
    (child): child is ReactElement<WizardStepProps> => 
      React.isValidElement(child) && isWizardStep(child)
  );
  
  const { activeStep, completedSteps, goToStep, totalSteps, setTotalSteps } = useWizard();
  
  React.useEffect(() => {
    setTotalSteps(steps.length);
  }, [steps.length, setTotalSteps]);
  
  return (
    <div id={id} className="w-full">
      <div className="flex items-center justify-between relative">
        <div className="absolute h-1 bg-gray-700 left-0 right-0 top-4"></div>
        
        {/* Steps */}
        {steps.map((step, index) => {
          const isCompleted = index < completedSteps;
          const isCurrent = index === activeStep;
          const isClickable = index <= completedSteps;
          
          return (
            <div 
              key={index} 
              className="flex flex-col items-center z-10"
            >
              <div 
                onClick={() => isClickable && goToStep(index)}
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 cursor-pointer transition-all
                  ${isCurrent ? 'bg-teal-500 text-white' : ''}
                  ${isCompleted ? 'bg-teal-500 text-white' : ''}
                  ${!isCompleted && !isCurrent ? 'bg-gray-200 text-gray-500' : ''}
                `}
              >
                {isCompleted ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              
              <span className={`text-sm font-medium text-center
                ${isCurrent ? 'text-teal-500' : ''}
                ${!isCurrent ? 'text-gray-500' : ''}
              `}>
                {step.props.title}
              </span>
            </div>
          );
        })}
        
        <div 
          className="absolute h-1 bg-teal-500 left-0 top-4 transition-all" 
          style={{ 
            width: `${totalSteps > 1 ? (completedSteps / (totalSteps - 1)) * 100 : 0}%`
          }}
        ></div>
      </div>
      
      {steps[activeStep]}
      
      {/* Render non-step children (like WizardNavigation) */}
      {childrenArray.filter(
        child => !(React.isValidElement(child) && isWizardStep(child))
      )}
    </div>
  );
};

// WizardStep component
const WizardStep: React.FC<WizardStepProps> = ({ title, children }) => {
  return <div className="mt-6">{children}</div>;
};

// Navigation component that uses wizard context
const WizardNavigation: React.FC<WizardNavigationProps> = ({ 
  prevLabel = "Previous", 
  nextLabel = "Next" 
}) => {
  const { activeStep, prevStep, nextStep, totalSteps } = useWizard();
  
  return (
    <div className="flex justify-between mt-6">
      <button 
        onClick={prevStep}
        disabled={activeStep === 0}
        className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
      >
        {prevLabel}
      </button>
      <button 
        onClick={nextStep}
        disabled={activeStep === totalSteps - 1}
        className="px-4 py-2 bg-teal-500 text-white rounded disabled:opacity-50"
      >
        {nextLabel}
      </button>
    </div>
  );
};

// Usage example
export default function WizardExample(): JSX.Element {
  return (
    <div className="p-6 bg-gray-900 text-white">
      <Wizard initialActiveStep={2} initialCompletedSteps={2} id="wizard">
        <WizardStep title="Search">
          <div>Search content goes here</div>
        </WizardStep>
        <WizardStep title="Passenger details">
          <div>Passenger details content goes here</div>
        </WizardStep>
        <WizardStep title="Ticket fare">
          <div>Ticket fare content goes here</div>
        </WizardStep>
        <WizardStep title="Customize your trip">
          <div>Customize your trip content goes here</div>
        </WizardStep>
        <WizardStep title="Kiwi.com guarantee">
          <div>Kiwi.com guarantee content goes here</div>
        </WizardStep>
        <WizardStep title="Seating">
          <div>Seating content goes here</div>
        </WizardStep>
        <WizardStep title="Overview & payment">
          <div>Overview & payment content goes here</div>
        </WizardStep>
        <WizardNavigation />
      </Wizard>
    </div>
  );
}

// Export only the components that users need
export { 
  Wizard, 
  WizardStep, 
  WizardNavigation, 
  useWizard 
};