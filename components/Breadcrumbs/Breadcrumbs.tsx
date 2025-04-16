import React from 'react';
import { BreadcrumbsProps } from './types';
import { BreadcrumbsItem } from './index';
 const Breadcrumbs = ({
  children,
  onGoBack,
  direction = 'ltr',
  className = '',
  separator,
  ...props
}: BreadcrumbsProps) => {
  const isRtl = direction === 'rtl';
  
  const defaultSeparator = separator || (
    <ion-icon 
      name={isRtl ? "chevron-back-outline" : "chevron-forward-outline"} 
      className="h-4 w-4 text-gray-400"
    ></ion-icon>
  );

  return (
    <nav
      className={`flex items-center ${className} ${isRtl ? 'flex-row-reverse' : ''}`}
      aria-label="Breadcrumb"
      {...props}
    >
      

      <ol
        className={`flex items-center space-x-2  ${isRtl ? 'flex-row-reverse space-x-reverse' : ''}`}
      >
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && child.type === BreadcrumbsItem) {
            return (
              <li
                className={`flex items-center ${
                  isRtl ? 'flex-row-reverse' : ''
                }`}
              >
                {child}
                {index < React.Children.count(children) - 1 && (
                  <span className="mx-2 text-gray-400 flex align-middle ">{defaultSeparator}</span>
                )}
              </li>
            );
          }
          return null;
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;