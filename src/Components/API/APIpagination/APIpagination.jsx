import React, { useState } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <div key={i} className={`page-item ${currentPage === i ? "active" : ""}`}>
        <button className="page-link" onClick={() => onPageChange(i)}>
          {i}
        </button>
      </div>
    );
  }
  return (
    <nav>
      <ul className="pagination">{pageNumbers}</ul>
    </nav>
  );
};

export default Pagination;
