import React, { useState } from "react";
import "./Pagenation.css"
const Pagenation = ({ data, itemsperPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(data.length / itemsperPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <div
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => handlePageChange(i)}>
            {i}
          </button>
        </div>
      );
    }
    return pageNumbers;
  };
  return (
    <nav>
      <ul className="pagination">{renderPageNumbers()}</ul>
    </nav>
  );
};

export default Pagenation;
