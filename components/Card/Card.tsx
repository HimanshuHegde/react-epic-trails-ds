// Card.tsx
'use client'
import React, { useState, ReactNode } from 'react';

// Types for the Card components
type CardBaseProps = {
  className?: string;
  children?: ReactNode;
};

type CardProps = CardBaseProps & {
  variant?: 'default' | 'closable' | 'with-actions' | 'with-only-section' | 'with-sections' | 
    'with-expandable-sections' | 'with-controlled-and-uncontrolled' | 'with-controlled-with-controls' | 
    'with-default-expanded' | 'with-mixed-sections';
  defaultExpanded?: boolean;
  onClose?: () => void;
  actions?: ReactNode;
  loading?: boolean;
};

type CardSectionProps = CardBaseProps & {
  title: string;
  expandable?: boolean;
  defaultExpanded?: boolean;
  controlled?: boolean;
  onToggle?: (expanded: boolean) => void;
  isExpanded?: boolean;
};

// Icons


// Card Section Component
export const CardSection: React.FC<CardSectionProps> = ({ 
  title, 
  children, 
  className = '', 
  expandable = false,
  defaultExpanded = false,
  controlled = false,
  onToggle,
  isExpanded: controlledIsExpanded,
  
}) => {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  
  const isExpanded = controlled ? controlledIsExpanded : internalExpanded;
  
  const handleToggle = () => {
    if (controlled) {
      onToggle?.(!controlledIsExpanded);
    } else {
      setInternalExpanded(!internalExpanded);
      onToggle?.(!internalExpanded);
    }
  };

  return (
    <div className={`border-b border-gray-200 last:border-0 ${className} w-full`}>
      <div className="flex items-center justify-between px-4 py-3">
        <h3 className="font-medium text-gray-400">{title}</h3>
        {expandable && (
          <button 
            onClick={handleToggle}
            className="text-gray-100 hover:text-gray-700 focus:outline-none"
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Collapse section" : "Expand section"}
          >
            {isExpanded ? <ion-icon name="chevron-up-outline" ></ion-icon> : <ion-icon name="chevron-down-outline"></ion-icon>}
          </button>
        )}
      </div>
      {(!expandable || isExpanded) && (
        <div className="px-4 py-3">
          {children}
        </div>
      )}
    </div>
  );
};

// Loading Spinner
const LoadingSpinner = () => (
  <div className="flex justify-center items-center p-8 h-32">
    <div className="animate-spin rounded-full h-10 w-10 border-4 border-t-transparent border-blue-500"></div>
    
  </div>
);

// Main Card Component
export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  defaultExpanded = false,
  onClose,
  actions,
  loading = false,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`bg-black text-white shadow-md overflow-hidden flex justify-around ${className} text`}>
        {loading ? (
        <LoadingSpinner />
      ) : (
        <div className='w-full'>
          {children}
        </div>
      )}
      {/* Card Header with Close Button for closable variant */}
      {variant === 'closable' && (
        <div className="flex justify-end p-2">
          <button 
            onClick={handleClose}
            className="text-white hover:text-gray-600 focus:outline-none flex justify-center align-top"
            aria-label="Close"
          >
            <ion-icon name="close"></ion-icon>
          </button>
        </div>
      )}
      
      {/* Card with Actions */}
      {variant === 'with-actions' && (
        <div className="flex justify-end p-2 border-b border-gray-200">
          {actions}
        </div>
      )}
    </div>
  );
};

// Example usage components
export const CardClosable: React.FC<Omit<CardProps, 'variant'>> = (props) => (
  <Card {...props} variant="closable" />
);

export const CardWithActions: React.FC<Omit<CardProps, 'variant'>> = (props) => (
  <Card {...props} variant="with-actions" />
);

export const CardWithOnlySection: React.FC<Omit<CardProps, 'variant'>> = (props) => (
  <Card {...props} variant="with-only-section" />
);

export const CardWithSections: React.FC<Omit<CardProps, 'variant'>> = (props) => (
  <Card {...props} variant="with-sections" />
);

export const CardWithExpandableSections: React.FC<Omit<CardProps, 'variant'>> = (props) => (
  <Card {...props} variant="with-expandable-sections" />
);

export const CardWithControlledAndUncontrolled: React.FC<Omit<CardProps, 'variant'>> = (props) => (
  <Card {...props} variant="with-controlled-and-uncontrolled" />
);

export const CardWithControlledWithControls: React.FC<Omit<CardProps, 'variant'>> = (props) => (
  <Card {...props} variant="with-controlled-with-controls" />
);

export const CardWithDefaultExpanded: React.FC<Omit<CardProps, 'variant'>> = (props) => (
  <Card {...props} defaultExpanded={true} variant="with-default-expanded" />
);

export const CardWithMixedSections: React.FC<Omit<CardProps, 'variant'>> = (props) => (
  <Card {...props} variant="with-mixed-sections" />
);

export const LoadingCard: React.FC<Omit<CardProps, 'loading'>> = (props) => (
  <Card {...props} loading={true} />
);

export default Card;