import React from "react";
import clsx from "clsx";

type ModalHeaderProps = {
  title?: string;
  description?: string;
  illustration?: React.ReactNode;
};

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  description,
  illustration,
}) => {
  return (
    <div className="mb-4 text-center">
      {illustration && <div className="mb-3">{illustration}</div>}
      {title && <h2 className="text-2xl font-bold text-white">{title}</h2>}
      {description && (
        <p className="mt-1 text-sm text-gray-400">{description}</p>
      )}
    </div>
  );
};

export default ModalHeader;
