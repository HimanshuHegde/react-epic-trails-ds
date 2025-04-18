import React, { useState, useContext, createContext } from 'react';
import { DrawerContextType, DrawerPosition } from './types';
import { Drawer } from './Drawer';

const DrawerContext = createContext<DrawerContextType | null>(null);

export const DrawerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<React.ReactNode | null>(null);
  const [position, setPosition] = useState<DrawerPosition>('right');
  const [title, setTitle] = useState<string>('Drawer');
  const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md');

  const open = (
    drawerContent: React.ReactNode, 
    drawerPosition: DrawerPosition = 'right',
    drawerTitle: string = 'Drawer',
    drawerSize: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'md'
  ) => {
    setContent(drawerContent);
    setPosition(drawerPosition);
    setTitle(drawerTitle);
    setSize(drawerSize);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <DrawerContext.Provider value={{ isOpen, open, close, content, position, title, size }}>
      {children}
      <Drawer 
        isOpen={isOpen} 
        onClose={close} 
        position={position}
        title={title}
        size={size}
      >
        {content}
      </Drawer>
    </DrawerContext.Provider>
  );
};

export const useDrawer = (): DrawerContextType => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
};