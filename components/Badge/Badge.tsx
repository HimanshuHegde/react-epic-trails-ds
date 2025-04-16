import React from 'react';

const Badge = ({ 
  children, 
  type = 'neutral', 
  icon,
  size = 'md',
  ...props 
}:badgeProp) => {
  const typeStyles = {
    neutral: 'bg-blue-600 text-white',
    infoSubtle: 'bg-blue-100 text-blue-800',
    successSubtle: 'bg-green-100 text-green-800',
    warningSubtle: 'bg-yellow-100 text-yellow-800',
    criticalSubtle: 'bg-red-100 text-red-800',
    dark: 'bg-black text-white',
    white: 'bg-white text-gray-800 border border-gray-200',
    info: 'bg-blue-500 text-white',
    critical: 'bg-backgroundNegative text-white',
    success: 'bg-backgroundPositive text-white',
    warning: 'bg-yellow-500 text-white',
    bundleBasic: 'bg-purple-600 text-white',
    bundleMedium: 'bg-purple-700 text-white',
    bundleTop: 'bg-purple-900 text-white',
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-1',
    lg: 'text-base px-3 py-1.5',
  };

  const baseStyles = 'inline-flex items-center gap-1.5 rounded-full font-medium';

  return (
    <span 
      className={`${baseStyles} ${typeStyles[type]} ${sizeStyles[size]}`}
      {...props}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </span>
  );
};

type badgeProp = {
  children?: React.ReactNode,
  type?: 
    'neutral'|
    'infoSubtle'|
    'successSubtle'|
    'warningSubtle'|
    'criticalSubtle'|
    'dark'|
    'white'|    
    'info'|
    'critical'|
    'success'|
    'warning'|
    'bundleBasic'|
    'bundleMedium'|
    'bundleTop',
  icon?: React.ReactNode,
  size?: 'sm'| 'md'| 'lg',
};

export default Badge;