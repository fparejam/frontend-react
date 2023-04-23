import React, { useState, useEffect } from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardRow from './DashboardRow';
import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  const [data, setData] = useState([]);
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
    fetch('http://fparejam.pythonanywhere.com/api/policies')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className={styles['dashboard-container']}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1>Dashboard</h1>
      </div>
      <table>
        <DashboardHeader columns={columns} />
        <tbody>
          {data.map(item => (
            <DashboardRow key={item.Policy_id} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
