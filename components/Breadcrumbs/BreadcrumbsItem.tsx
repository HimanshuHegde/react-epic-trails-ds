import { BreadcrumbsItemProps } from './types';

 const BreadcrumbsItem = ({
  href,
  onClick,
  children,
  className = '',
  ...props
}: BreadcrumbsItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLSpanElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  const commonProps = {
    className: `text-sm font-medium hover:text-gray-400 text-white transition-colors ${className}`,
    onClick: handleClick,
    ...props,
  };

  return href ? (
    <a href={href} {...commonProps}>
      {children}
    </a>
  ) : (
    <span {...commonProps}>{children}</span>
  );
};

export default BreadcrumbsItem;