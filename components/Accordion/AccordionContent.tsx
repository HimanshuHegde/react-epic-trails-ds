import React, { useRef, useEffect, useState } from 'react';
import { useAccordionContext } from '../../context/AccordionContext';

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  value: string;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  value,
  className = '',
  ...props
}) => {
  const { activeItems } = useAccordionContext();
  const isActive = activeItems.includes(value);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(0);
  
  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = isActive ? contentRef.current.scrollHeight : 0;
      setHeight(contentHeight);
    }
  }, [isActive]);

  return (
    <div
      ref={contentRef}
      className={`bg-black text-gray-300 overflow-hidden transition-all duration-300 ease-in-out ${className}`}
      style={{ 
        maxHeight: isActive ? `${height}px` : '0',
        opacity: isActive ? 1 : 0,
        visibility: isActive ? 'visible' : 'hidden'
      }}
      role="region"
      aria-hidden={!isActive}
      data-state={isActive ? 'open' : 'closed'}
      {...props}
    >
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};