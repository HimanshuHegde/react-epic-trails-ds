import React from "react";
import clsx from "clsx";

type ListItemProps = {
  icon?: React.ReactNode;
  iconColor?: string;
  label?: string;
  children: React.ReactNode;
};

export const ListItem: React.FC<ListItemProps> = ({
  icon,
  iconColor = "text-green-400",
  label,
  children,
}) => {
  return (
    <li className="flex items-start space-x-3">
      {icon && (
        <div className={clsx("mt-1", iconColor)}>
          {icon}
        </div>
      )}
      <div>
        {label && <div className="font-semibold text-white">{label}</div>}
        <div >{children}</div>
      </div>
    </li>
  );
};

export default ListItem;