import React from 'react';
import { BreadcrumbsProps } from './types';
import { BreadcrumbsItem } from './index';
import { ChevronBackOutline, ChevronForwardOutline } from '../icons';
 const Breadcrumbs = ({
  children,
  direction = 'ltr',
  className = '',
  separator,
  ...props
}: BreadcrumbsProps) => {
  const isRtl = direction === 'rtl';
  
  const defaultSeparator = separator || (
    isRtl ? <ChevronBackOutline color='#a6a6a6'/> : <ChevronForwardOutline color='#a6a6a6'/>
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