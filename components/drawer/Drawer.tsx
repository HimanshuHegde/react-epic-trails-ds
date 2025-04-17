import React, { useState, useEffect, useRef } from 'react';
import { DrawerProps } from './types';

export const Drawer: React.FC<DrawerProps> = ({
  isOpen = false,
  onClose,
  children,
  position = 'right',
  title = 'Drawer',
  className = '',
  overlayClassName = '',
  headerClassName = '',
  bodyClassName = '',
  closeButtonClassName = '',
  size = 'md'
}) => {
  const [animationClass, setAnimationClass] = useState<string>('');
  const overlayRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Handle animation
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setAnimationClass('animate-in'), 10);
    } else {
      setAnimationClass('');
    }
  }, [isOpen]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (overlayRef.current === e.target && onClose) onClose();
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const positionClasses = {
    right: 'right-0 top-0 h-full translate-x-full',
    left: 'left-0 top-0 h-full -translate-x-full',
    top: 'top-0 left-0 w-full -translate-y-full',
    bottom: 'bottom-0 left-0 w-full translate-y-full',
  };

  const animationClasses = {
    right: '!translate-x-0',
    left: '!translate-x-0',
    top: '!translate-y-0',
    bottom: '!translate-y-0',
  };

  const sizeClasses = {
    right: {
      sm: 'w-64',
      md: 'w-80 md:w-96',
      lg: 'w-96 md:w-1/3',
      xl: 'w-96 md:w-1/2',
      full: 'w-full',
    },
    left: {
      sm: 'w-64',
      md: 'w-80 md:w-96',
      lg: 'w-96 md:w-1/3',
      xl: 'w-96 md:w-1/2',
      full: 'w-full',
    },
    top: {
      sm: 'h-1/4',
      md: 'h-1/3',
      lg: 'h-1/2',
      xl: 'h-3/4',
      full: 'h-full',
    },
    bottom: {
      sm: 'h-1/4',
      md: 'h-1/3',
      lg: 'h-1/2',
      xl: 'h-3/4',
      full: 'h-full',
    },
  };

  return (
    <div
      ref={overlayRef}
      className={`fixed inset-0 bg-black bg-opacity-70 z-50 transition-opacity ${
        animationClass ? 'opacity-100' : 'opacity-0'
      } ${overlayClassName}`}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={drawerRef}
        className={`
          fixed bg-black text-gray-100 shadow-xl transition-transform duration-300 ease-in-out
          ${positionClasses[position]}
          ${animationClass ? animationClasses[position] : ''}
          ${sizeClasses[position][size]}
          ${className}
        `}
      >
        <div className="flex flex-col h-full">
          <div className={`flex justify-between items-center p-4 border-b border-gray-800 ${headerClassName}`}>
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            <button
              onClick={onClose}
              className={`p-2 rounded-full hover:bg-gray-800 transition-colors text-gray-300 hover:text-white ${closeButtonClassName}`}
              aria-label="Close drawer"
            >
            <ion-icon name="close"></ion-icon>
            </button>
          </div>
          <div className={`flex-1 overflow-auto ${bodyClassName}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};