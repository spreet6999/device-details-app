import React from "react";
import { Button } from "@material-tailwind/react";

function Pagination({ paginationProps }) {
  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = parseInt(event.target.value);
    paginationProps.handleItemsPerPageChange(newItemsPerPage);
  };

  return (
    <div className="flex justify-center align-items-center">
      {/* Dropdown to select items per page */}
      <select
        className="px-3 mx-4 rounded"
        value={paginationProps.itemsPerPage}
        onChange={handleItemsPerPageChange}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </select>
      <Button
        variant="text"
        onClick={() =>
          paginationProps.handlePageChange(paginationProps.currentPage - 1)
        }
        disabled={paginationProps.currentPage === 1}
      >
        Previous
      </Button>
      {Boolean(paginationProps.totalPages) && (
        <div className="flex justify-center align-items-center">
          {[...Array(paginationProps.totalPages).keys()].map((page) => (
            <button
              key={page}
              className={`px-3 py-1 mx-1 ${
                paginationProps.currentPage === page + 1 ? "text-blue-500" : ""
              }`}
              onClick={() => paginationProps.handlePageChange(page + 1)}
            >
              {page + 1}
            </button>
          ))}
        </div>
      )}
      <Button
        variant="text"
        onClick={() =>
          paginationProps.handlePageChange(paginationProps.currentPage + 1)
        }
        disabled={paginationProps.currentPage === paginationProps.totalPages}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;
