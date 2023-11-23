// Pagination.js
import React from 'react';

const Pagination = ({ onNextPage, onPrevPage, hasNextPage, hasPrevPage }) => {
  return (
    <div>
      <button onClick={onPrevPage} disabled={!hasPrevPage}>
        Previous
      </button>
      <button onClick={onNextPage} disabled={!hasNextPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
