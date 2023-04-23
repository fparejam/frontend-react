import React, { useState, useEffect } from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardRow from './DashboardRow';
import DashboardFooter from './DashboardFooter';
import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const columns = [
    'Policy_id',
    'Date of Purchase',
    'Customer_id',
    'Fuel',
    'VEHICLE_SEGMENT',
    'Premium',
    'bodily injury liability',
    'personal injury protection',
    'property damage liability',
    'collision',
    'comprehensive',
    'Customer_Gender',
    'Customer_Income group',
    'Customer_Region',
    'Customer_Marital_status'
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fparejam.pythonanywhere.com/api/policies');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const rowsToShow = data.slice(startIndex, endIndex);

  return (
    <div className={styles['dashboard-container']}>
      <table>
        <DashboardHeader columns={columns} />
        <tbody>
          {rowsToShow.map((row) => (
            <DashboardRow key={row.Policy_id} data={row} />
          ))}
        </tbody>
      </table>
      {data.length > 0 && (
        <DashboardFooter
          currentPage={currentPage}
          totalPages={totalPages}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          handlePageClick={handlePageClick}
        />
      )}
    </div>
  );
};

export default Dashboard;
