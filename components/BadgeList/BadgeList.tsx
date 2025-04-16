// BadgeList.tsx
'use client';
import React, { ReactNode } from 'react';

interface BadgeListProps {
  children: ReactNode;
  className?: string;
}

const BadgeList: React.FC<BadgeListProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      {children}
    </div>
  );
};

export default BadgeList;