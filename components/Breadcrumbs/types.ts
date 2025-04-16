import { ReactNode, MouseEvent } from 'react';

export interface BreadcrumbsItemProps {
  href?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement | HTMLSpanElement>) => void;
  children: ReactNode;
  className?: string;
  [key: string]: any; // For additional HTML attributes
}

export interface BreadcrumbsProps {
  children: ReactNode;
  onGoBack?: () => void;
  direction?: 'ltr' | 'rtl';
  className?: string;
  separator?: ReactNode;
  [key: string]: any; // For additional HTML attributes
}