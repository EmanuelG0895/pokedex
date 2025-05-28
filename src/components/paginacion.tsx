import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i}>
          <button
            onClick={() => handlePageClick(i)}
            className={`flex text-[10px] items-center justify-center px-3 h-5 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
              i === currentPage
                ? "bg-gray-300 text-gray-900"
                : "bg-white text-gray-500"
            }`}
          >
            {i}
          </button>
        </li>
      );
    }

    return pages;
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px text-sm">
        <li>
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-3 h-5 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
          >
            <img
              className="w-2.5 h-2.5"
              src="/navigation/chevron_left.svg"
              alt="Previous"
            />
          </button>
        </li>

        {renderPageNumbers()}

        <li>
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center px-3 h-5 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
          >
            <img
              className="w-2.5 h-2.5"
              src="/navigation/chevron_right.svg"
              alt="Next"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
