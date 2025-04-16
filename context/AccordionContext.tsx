import React, { createContext, useState, useContext } from 'react';

interface AccordionContextProps {
  activeItems: string[];
  setActiveItems: React.Dispatch<React.SetStateAction<string[]>>;
  allowMultiple: boolean;
}

const AccordionContext = createContext<AccordionContextProps | undefined>(undefined);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordionContext must be used within an AccordionProvider');
  }
  return context;
};

export const AccordionProvider: React.FC<{
  children: React.ReactNode;
  allowMultiple?: boolean;
  defaultActiveItems?: string[];
}> = ({ children, allowMultiple = false, defaultActiveItems = [] }) => {
  const [activeItems, setActiveItems] = useState<string[]>(defaultActiveItems);

  return (
    <AccordionContext.Provider value={{ activeItems, setActiveItems, allowMultiple }}>
      {children}
    </AccordionContext.Provider>
  );
};