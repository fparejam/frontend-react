import React, { useState } from 'react';

const DashboardHeader = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column} >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default DashboardHeader;
