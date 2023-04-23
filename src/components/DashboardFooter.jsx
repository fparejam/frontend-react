import React from 'react';
import styles from '../styles/DashboardFooter.module.css';

const DashboardFooter = ({ currentPage, totalPages, handlePrevClick, handleNextClick, handlePageClick, rowsPerPage, setRowsPerPage }) => {
  const pageButtons = [];
  const windowSize = 5;
  let startPage = Math.max(1, currentPage - Math.floor(windowSize / 2));
  let endPage = Math.min(totalPages, startPage + windowSize - 1);

  if (endPage - startPage < windowSize - 1) {
    startPage = Math.max(1, endPage - windowSize + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    const active = currentPage === i;
    pageButtons.push(
      <button
        key={i}
        className={active ? styles.active : ''}
        onClick={() => handlePageClick(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className={styles.dashboardFooterContainer}>
      <div className={styles.footer}>
        <div className={styles.pagination}>
          <button onClick={() => handlePrevClick(startPage - 1)} disabled={currentPage === 1}>
            {'< Prev'}
          </button>
          {startPage > 1 && <button onClick={() => handlePageClick(1)}>1</button>}
          {startPage > 2 && <button disabled>...</button>}
          {pageButtons}
          {endPage < totalPages - 1 && <button disabled>...</button>}
          {endPage < totalPages && <button onClick={() => handlePageClick(totalPages)}>{totalPages}</button>}
          <button onClick={() => handleNextClick(endPage + 1)} disabled={currentPage === totalPages}>
            {'Next >'}
          </button>
        </div>
        <div className={styles.rowsPerPageContainer}>
          <span className={styles.rowsPerPageLabel}>Rows per page:</span>
          <select className={styles.rowsPerPageSelect} value={rowsPerPage} onChange={(e) => setRowsPerPage(parseInt(e.target.value))}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DashboardFooter;
