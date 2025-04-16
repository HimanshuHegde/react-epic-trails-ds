// BadgeListItem.tsx
'use client';
import React, { ReactNode, ComponentPropsWithoutRef } from 'react';

type BadgeListItemSize = 'small' | 'normal' | 'large';
type BadgeListItemColor = 'blue' | 'lightBlue' | 'green' | 'orange' | 'red' | 'gray';

// Define base props for our component
interface BadgeListItemBaseProps {
  children: ReactNode;
  icon?: ReactNode;
  size?: BadgeListItemSize;
  color?: BadgeListItemColor;
  className?: string;
}

// Props when used as a div
interface BadgeListItemDivProps extends BadgeListItemBaseProps {
  as?: 'div';
  href?: never;
}

// Props when used as an anchor
interface BadgeListItemAnchorProps extends BadgeListItemBaseProps {
  as: 'a';
  href: string;
}

// Combined props type
type BadgeListItemProps = 
  & (BadgeListItemDivProps | BadgeListItemAnchorProps) 
  & Omit<ComponentPropsWithoutRef<'div'>, keyof BadgeListItemDivProps>
  & Omit<ComponentPropsWithoutRef<'a'>, keyof BadgeListItemAnchorProps>;

const BadgeListItem = React.forwardRef<HTMLElement, BadgeListItemProps>((props, ref) => {
  const {
    children,
    icon,
    size = 'normal',
    color = 'blue',
    className = '',
    as = 'div',
    href,
    ...restProps
  } = props;

  const sizeStyles: Record<BadgeListItemSize, string> = {
    small: 'text-sm py-1',
    normal: 'text-base py-2',
    large: 'text-lg py-3',
  };

  const colorStyles: Record<BadgeListItemColor, string> = {
    blue: 'text-blue-700',
    lightBlue: 'text-blue-500',
    green: 'text-green-600',
    orange: 'text-orange-600',
    red: 'text-red-600',
    gray: 'text-gray-600',
  };

  const iconColorStyles: Record<BadgeListItemColor, string> = {
    blue: 'text-blue-700',
    lightBlue: 'text-blue-500',
    green: 'text-green-600',
    orange: 'text-orange-600',
    red: 'text-red-600',
    gray: 'text-gray-600',
  };

  const combinedClassName = `flex items-center space-x-2 ${sizeStyles[size]} ${className}`;

  // Content to be rendered
  const content = (
    <>
      {icon && <span className={`${iconColorStyles[color]} flex align-middle flex-shrink-0`}>{icon}</span>}
      <div className={`${colorStyles[color]}`}>{children}</div>
    </>
  );

  // Render as an anchor if specified
  if (as === 'a') {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={combinedClassName}
        {...(restProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  // Default render as div
  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      className={combinedClassName}
      {...(restProps as React.HTMLAttributes<HTMLDivElement>)}
    >
      {content}
    </div>
  );
});

BadgeListItem.displayName = 'BadgeListItem';

export default BadgeListItem;