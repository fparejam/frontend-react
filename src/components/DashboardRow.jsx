import React from 'react';

const DashboardRow = ({ data }) => {
    return (
        <tr>
            <td>{data.Policy_id}</td>
            <td>{data['Date of Purchase']}</td>
            <td>{data.Customer_id}</td>
            <td>{data.Fuel}</td>
            <td>{data.VEHICLE_SEGMENT}</td>
            <td>{data.Premium}</td>
            <td>{data['bodily injury liability']}</td>
            <td>{data['personal injury protection']}</td>
            <td>{data['property damage liability']}</td>
            <td>{data.collision}</td>
            <td>{data.comprehensive}</td>
            <td>{data.Customer_Gender}</td>
            <td>{data['Customer_Income group']}</td>
            <td>{data.Customer_Region}</td>
            <td>{data.Customer_Marital_status}</td>
        </tr>
    );  
};

export default DashboardRow;
