import { useState, useMemo } from 'react';

const usePagination = (data, initialRowsPerPage = 10, rowsPerPageOptions = [5, 10, 50, 100, 1000]) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return data.slice(start, end);
  }, [page, rowsPerPage, data]);

  const handlePageChange = (newPage) => setPage(newPage);

  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setPage(1); // Reset to the first page when rows per page changes
  };

  return {
    paginatedData,
    page,
    rowsPerPage,
    rowsPerPageOptions,
    handlePageChange,
    handleRowsPerPageChange,
    totalItems: data.length,
  };
};

export default usePagination;
