"use client";
import React, { useState } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [pageNumber, setPageNumber] = useState(currentPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setPageNumber(page);
      onPageChange(page);
    }
  };

  const goToFirstPage = () => {
    goToPage(1);
  };

  const goToLastPage = () => {
    goToPage(totalPages);
  };

  const goToPreviousPage = () => {
    goToPage(pageNumber - 1);
  };

  const goToNextPage = () => {
    goToPage(pageNumber + 1);
  };

  return (
    <div>
      <button onClick={goToFirstPage}>First</button>
      <button onClick={goToPreviousPage}>Previous</button>
      <span>
        Page {pageNumber} of {totalPages}
      </span>
      <button onClick={goToNextPage}>Next</button>
      <button onClick={goToLastPage}>Last</button>
    </div>
  );
};

export default Pagination;
