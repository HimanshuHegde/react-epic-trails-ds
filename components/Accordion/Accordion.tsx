import React from 'react';
import { AccordionProvider } from '../../context/AccordionContext';

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  allowMultiple?: boolean;
  defaultActiveItems?: string[];
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  allowMultiple = false,
  defaultActiveItems = [],
  className = '',
  ...props
}) => {
  return (
    <AccordionProvider allowMultiple={allowMultiple} defaultActiveItems={defaultActiveItems}>
      <div className={`w-full bg-primaryA text-white overflow-hidden ${className}`} {...props}>
        {children}
      </div>
    </AccordionProvider>
  );
};