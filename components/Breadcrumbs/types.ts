import { ReactNode, MouseEvent, HTMLAttributes } from 'react';

export interface BreadcrumbsItemProps extends HTMLAttributes<HTMLElement> {
  href?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement | HTMLSpanElement>) => void;
  children: ReactNode;
  className?: string;
}

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  direction?: 'ltr' | 'rtl';
  className?: string;
  separator?: ReactNode;
  [key: string]: any; // For additional HTML attributes
}