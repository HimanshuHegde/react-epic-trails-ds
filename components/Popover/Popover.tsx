import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Close } from '../icons';

// Types
type PopoverProps = {
  children: React.ReactNode;
};

type PopoverTriggerProps = {
  asChild?: boolean;
  children: React.ReactNode;
};

type PopoverContentProps = {
  className?: string;
  children: React.ReactNode;
  sideOffset?: number;
};

type Placement = 'right' | 'left' | 'top' | 'bottom';

// Popover Context
const PopoverContext = React.createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  triggerRef: React.RefObject<HTMLDivElement>;
}>({
  open: false,
  setOpen: () => {},
  triggerRef: { current: null },
});

// Main Components
export const Popover = ({ children }: PopoverProps) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Create container for the popover
  useEffect(() => {
    // Ensure popover container exists
    let container = document.getElementById('popover-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'popover-container';
      container.style.position = 'absolute';
      container.style.top = '0';
      container.style.left = '0';
      container.style.width = '100%';
      container.style.height = '0';
      container.style.overflow = 'visible';
      container.style.pointerEvents = 'none';
      document.body.appendChild(container);
    }
    
    return () => {
      // Cleanup if this is the last popover
      const container = document.getElementById('popover-container');
      if (container && !container.children.length) {
        document.body.removeChild(container);
      }
    };
  }, []);

  return (
    <PopoverContext.Provider value={{ open, setOpen, triggerRef }}>
      {children}
    </PopoverContext.Provider>
  );
};

export const PopoverTrigger = ({ asChild = false, children }: PopoverTriggerProps) => {
  const { setOpen, open, triggerRef } = React.useContext(PopoverContext);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!open);
  };

  if (asChild) {
    return (
      <div ref={triggerRef} onClick={handleClick} className="inline-block">
        {children}
      </div>
    );
  }

  return (
    <div ref={triggerRef} onClick={handleClick} className="inline-block">
      <button className="bg-black text-white rounded-md px-4 py-2">
        {children}
      </button>
    </div>
  );
};

export const PopoverContent = ({ 
  className = "", 
  children, 
  sideOffset = 8 
}: PopoverContentProps) => {
  const { open, setOpen, triggerRef } = React.useContext(PopoverContext);
  const contentRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [placement, setPlacement] = useState<Placement>('right');

  useEffect(() => {
    if (!open || !triggerRef.current) return;

    const handlePosition = () => {
      if (!triggerRef.current || !contentRef.current) return;
      
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Check available space in each direction
      const rightSpace = viewportWidth - triggerRect.right;
      const leftSpace = triggerRect.left;
      const topSpace = triggerRect.top;
      const bottomSpace = viewportHeight - triggerRect.bottom;
      
      // Choose best placement
      let bestPlacement: Placement = 'right';
      
      if (rightSpace >= contentRect.width + sideOffset) {
        bestPlacement = 'right';
      } else if (leftSpace >= contentRect.width + sideOffset) {
        bestPlacement = 'left';
      } else if (bottomSpace >= contentRect.height + sideOffset) {
        bestPlacement = 'bottom';
      } else if (topSpace >= contentRect.height + sideOffset) {
        bestPlacement = 'top';
      } else {
        // If no ideal position, use the one with most space
        const spaces = [
          { placement: 'right', space: rightSpace },
          { placement: 'left', space: leftSpace },
          { placement: 'bottom', space: bottomSpace },
          { placement: 'top', space: topSpace }
        ];
        
        bestPlacement = spaces.sort((a, b) => b.space - a.space)[0].placement as Placement;
      }
      
      setPlacement(bestPlacement);
      
      // Calculate position based on placement
      // Add scrollX and scrollY to account for page scrolling
      const scrollX = window.scrollX || window.pageXOffset;
      const scrollY = window.scrollY || window.pageYOffset;
      
      let newPosition = { top: 0, left: 0 };
      
      switch (bestPlacement) {
        case 'right':
          newPosition = {
            top: triggerRect.top + scrollY,
            left: triggerRect.right + sideOffset + scrollX
          };
          break;
        case 'left':
          newPosition = {
            top: triggerRect.top + scrollY,
            left: triggerRect.left - contentRect.width - sideOffset + scrollX
          };
          break;
        case 'bottom':
          newPosition = {
            top: triggerRect.bottom + sideOffset + scrollY,
            left: triggerRect.left + (triggerRect.width / 2) - (contentRect.width / 2) + scrollX
          };
          break;
        case 'top':
          newPosition = {
            top: triggerRect.top - contentRect.height - sideOffset + scrollY,
            left: triggerRect.left + (triggerRect.width / 2) - (contentRect.width / 2) + scrollX
          };
          break;
      }
      
      // Ensure the popover stays within viewport boundaries
      if (newPosition.left < scrollX) {
        newPosition.left = scrollX + sideOffset;
      } else if (newPosition.left + contentRect.width > viewportWidth + scrollX) {
        newPosition.left = viewportWidth - contentRect.width - sideOffset + scrollX;
      }
      
      if (newPosition.top < scrollY) {
        newPosition.top = scrollY + sideOffset;
      } else if (newPosition.top + contentRect.height > viewportHeight + scrollY) {
        newPosition.top = viewportHeight - contentRect.height - sideOffset + scrollY;
      }
      
      setPosition(newPosition);
    };
    
    // Initial position
    setTimeout(handlePosition, 0);
    
    // Update position on resize
    window.addEventListener('resize', handlePosition);
    window.addEventListener('scroll', handlePosition);
    
    return () => {
      window.removeEventListener('resize', handlePosition);
      window.removeEventListener('scroll', handlePosition);
    };
  }, [open, sideOffset]);

  if (!open) return null;

  // Use createPortal to render to our container
  const container = document.getElementById('popover-container');
  if (!container) return null;
  
  const closePopover = () => setOpen(false);

  const content = (
    <div 
      ref={contentRef}
      className={`absolute z-50 bg-gray-50 border border-gray-400 rounded-md shadow-lg text-white ${className}`}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: className.includes('w-') ? undefined : 'max-content',
        pointerEvents: 'auto'
      }}
      data-placement={placement}
    >
      {/* Close button */}
      <button 
        onClick={closePopover}
        className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full  hover:bg-zinc-900 focus:outline-none"
        aria-label="Close"
      >
        <Close/>
      </button>
      
      <div className="p-4">{children}</div>
    </div>
  );
  
  return createPortal(content, container);
};