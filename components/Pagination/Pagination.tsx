import React from "react";
import clsx from "clsx";

type PaginationProps = {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  labelPrev?: string;
  labelNext?: string;
  theme?:"primary"|"secondary"
};

export const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  currentPage,
  onPageChange,
  labelPrev = "Previous",
  labelNext = "Next",
  theme = 'primary'
}) => {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < pageCount) onPageChange(currentPage + 1);
  };


  return (
    <div className="flex justify-center items-center gap-2 mt-6 text-white">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`
          px-4 py-2 ${currentPage === 1 && "opacity-50 cursor-not-allowed"} text-gray-500 `}
      >
        {labelPrev}
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={clsx(
            "px-3 py-2 rounded-md transition",
            currentPage === page
              ? theme == "primary"?"text-gray-400 ":"text-black"
              : theme == "secondary"?"text-gray-400 ":"text-black"
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === pageCount}
        className={`
          px-4 py-2 ${currentPage === pageCount && "opacity-50 cursor-not-allowed"} text-gray-500
        `}
      >
        {labelNext}
      </button>
    </div>
  );
};

export default Pagination;