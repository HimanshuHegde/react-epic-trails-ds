import React from 'react';
import { useAccordionContext } from '../../context/AccordionContext';

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  value,
  className = '',
  disabled = false,
  ...props
}) => {
  const { activeItems } = useAccordionContext();
  const isActive = activeItems.includes(value);

  return (
    <div 
      className={`border-b border-gray-400 last:border-b-0 ${className} ${disabled ? 'pointer-events-none bg-gray-900' : ''}`}
      data-state={!disabled && isActive ? 'open' : 'closed'}
      data-value={value}
      {...props}
    >
      {children}
    </div>
  );
};