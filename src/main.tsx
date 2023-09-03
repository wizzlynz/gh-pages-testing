import React from 'react'
import ReactDOM from 'react-dom/client'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from 'react-router-dom';
import './index.css'
// import Root from './routes/root';
// import ErrorPage from './pages/error-page.tsx';
import App from './App.tsx';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/gh-pages-testing",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//   },
// ]);

    // <RouterProvider router={router} />
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
