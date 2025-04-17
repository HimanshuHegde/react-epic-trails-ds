import React, { useState } from 'react';
import { Drawer } from './Drawer';
import { DrawerProvider, useDrawer } from './DrawerContext';
import { DrawerPosition } from './types';

export const DrawerDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [drawerPosition, setDrawerPosition] = useState<DrawerPosition>('right');
  const [drawerSize, setDrawerSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md');
  
  const positions: DrawerPosition[] = ['right', 'left', 'top', 'bottom'];
  const sizes: ('sm' | 'md' | 'lg' | 'xl' | 'full')[] = ['sm', 'md', 'lg', 'xl', 'full'];
  
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Drawer Component Demo</h1>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-xl mb-3">Position Options</h2>
          <div className="flex flex-wrap gap-4">
            {positions.map(position => (
              <button
                key={position}
                onClick={() => {
                  setDrawerPosition(position);
                  setIsOpen(true);
                }}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors border border-gray-700"
              >
                Open {position} drawer
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-xl mb-3">Size Options</h2>
          <div className="flex flex-wrap gap-4">
            {sizes.map(size => (
              <button
                key={size}
                onClick={() => {
                  setDrawerSize(size);
                  setIsOpen(true);
                }}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors border border-gray-700"
              >
                {size.toUpperCase()} size
              </button>
            ))}
          </div>
        </div>
        
        <Drawer 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)} 
          position={drawerPosition}
          size={drawerSize}
          title={`${drawerPosition.charAt(0).toUpperCase() + drawerPosition.slice(1)} Drawer (${drawerSize.toUpperCase()})`}
        >
          <div className="space-y-4">
            <p>This is a drawer that opens from the {drawerPosition}.</p>
            <p>Current size: {drawerSize.toUpperCase()}</p>
            <p>Click outside or press ESC to close.</p>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Features:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>TypeScript support</li>
                <li>Black theme with Tailwind CSS</li>
                <li>Smooth animations</li>
                <li>Multiple positions</li>
                <li>Various sizes</li>
                <li>Click outside to close</li>
                <li>ESC key to close</li>
                <li>Responsive design</li>
                <li>Accessibility support</li>
                <li>Context API integration</li>
              </ul>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors mt-4 border border-gray-700"
            >
              Close drawer
            </button>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

// Context demo component
export const DrawerContextDemo: React.FC = () => {
  return (
    <DrawerProvider>
      <DrawerWithContext />
    </DrawerProvider>
  );
};

const DrawerWithContext: React.FC = () => {
  const { open } = useDrawer();
  
  const positions: DrawerPosition[] = ['right', 'left', 'top', 'bottom'];
  const sizes: ('sm' | 'md' | 'lg' | 'xl' | 'full')[] = ['sm', 'md', 'lg', 'xl', 'full'];
  
  const openDrawer = (position: DrawerPosition, size: 'sm' | 'md' | 'lg' | 'xl' | 'full') => {
    open(
      <div className="space-y-4">
        <p>This drawer was opened using the context API.</p>
        <p>Position: {position}</p>
        <p>Size: {size.toUpperCase()}</p>
      </div>,
      position,
      `Context Drawer (${size.toUpperCase()})`,
      size
    );
  };
  
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Drawer Context API Demo</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {positions.map(position => (
          <div key={position} className="space-y-3">
            <h2 className="text-xl">{position.charAt(0).toUpperCase() + position.slice(1)} Drawers</h2>
            <div className="flex flex-wrap gap-2">
              {sizes.map(size => (
                <button
                  key={`${position}-${size}`}
                  onClick={() => openDrawer(position, size)}
                  className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors border border-gray-700 text-sm"
                >
                  {size.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};