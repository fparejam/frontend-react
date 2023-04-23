# Insurance Dashboard App

This is an insurance dashboard application built with React that displays data from an API endpoint.

## Setup

1. Clone the repository: `git clone https://github.com/username/repo.git`.
2. Install dependencies: `npm install`.
3. Start the development server: `npm start`.
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Backend

The backend of this application is built with Flask and uses a SQLite table to store policy data. The code can be found on [GitHub](https://github.com/fparejam/backend-flask). It is currently hosted on PythonAnywhere.

## Functionality

The application displays insurance policy data in a table with columns including policy ID, date of purchase, customer ID, fuel type, vehicle segment, premium, and more.

Pagination has been implemented with the ability to choose the number of rows per page and navigate to different pages. The DashboardFooter component handles pagination.

The data is fetched from an API endpoint using the `fetch()` function in the `useEffect()` hook. If there is an error with the response, an error message is displayed in the console.

## Deployment

The app is automatically deployed using Vercel. Whenever changes are pushed to the main branch, Vercel automatically builds and deploys the updated app. You can find the app [here](https://www.bcginterview.fparejam.com/)


## Contact

For any questions or inquiries, please contact [fparejamayo@gmail.com](mailto:fparejamayo@gmail.com).

