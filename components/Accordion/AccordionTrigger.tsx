import React from 'react';
import { useAccordionContext } from '../../context/AccordionContext';

export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  value: string;
}

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  value,
  className = '',
  ...props
}) => {
  const { activeItems, setActiveItems, allowMultiple } = useAccordionContext();
  const isActive = activeItems.includes(value);

  const handleToggle = () => {
    if (isActive) {
      setActiveItems(prev => prev.filter(item => item !== value));
    } else {
      setActiveItems(prev => allowMultiple ? [...prev, value] : [value]);
    }
  };

  return (
    <button
      type="button"
      className={`flex justify-between items-center w-full p-4 text-left transition-colors duration-200 font-medium 
       ${className}`}
      onClick={handleToggle}
      aria-expanded={isActive}
      data-state={isActive ? 'open' : 'closed'}
      {...props}
    >
      <span>{children}</span>
      <svg
        className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
  );
};