import { render, act } from '@testing-library/react';
import Dashboard from '@components/Dashboard';
import fetchMock from 'jest-fetch-mock';

const mockData = [
  {
    "Customer_Gender":"Male",
    "Customer_Income group":"0- $25K",
    "Customer_Marital_status":0,
    "Customer_Region":"North",
    "Customer_id":400,
    "Date of Purchase":"2018-01-16",
    "Fuel":"CNG",
    "Policy_id":12345,
    "Premium":958.0,
    "VEHICLE_SEGMENT":"A",
    "bodily injury liability":0,
    "collision":1,
    "comprehensive":1,
    "personal injury protection":0,
    "property damage liability":0
  },
  {
    "Customer_Gender":"Male",
    "Customer_Income group":"$25-$70K",
    "Customer_Marital_status":1,
    "Customer_Region":"South",
    "Customer_id":401,
    "Date of Purchase":"2018-01-04",
    "Fuel":"CNG",
    "Policy_id":12346,
    "Premium":1272.0,
    "VEHICLE_SEGMENT":"A",
    "bodily injury liability":1,
    "collision":0,
    "comprehensive":1,
    "personal injury protection":0,
    "property damage liability":0
  }
];

fetchMock.enableMocks();

test('renders without error', async () => {
  fetch.mockResponseOnce(JSON.stringify(mockData));
  await act(async () => {
    render(<Dashboard />);
  });
});
