import * as React from 'react';
import { Pagination, Stack, Select, MenuItem, Typography } from '@mui/material';
import './custompagination.scss'
export default function CustomPagination({
  totalItems,
  page,
  rowsPerPage,
  rowsPerPageOptions = [5, 10, 50, 100, 1000],
  onPageChange,
  onRowsPerPageChange
}) {
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  return (
    <div className='custom-pagination'>
      <Stack spacing={2} alignItems="center" className='custom-pagination-box'>
        <div className='left-side'>
          <Typography>Total {totalItems}</Typography>
          <div>|</div>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography>Items per page:</Typography>
            <Select
              value={rowsPerPage}
              onChange={(event) => onRowsPerPageChange(parseInt(event.target.value, 10))}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              {rowsPerPageOptions.map(option => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
              ))}
            </Select>
          </Stack>
        </div>
        <div className='righht-side'>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(event, newPage) => onPageChange(newPage)}
          variant="outlined"
          shape="rounded"
        />
        </div>
      </Stack>
    </div>
  );
}
