import React from 'react'
import './main.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from './routes/main-route'
import ErrorPage from "./routes/errorPage-route"
import { CustomProvider } from './context/context';
import Layout from './Components/Layout/Layout';
import Contact from './Components/Contact/Contact';
import VideoPitch from './Components/VideoPitch/VideoPitch';


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main /> ,
        errorElement: <ErrorPage />
      },
      {
        path: "/contact",
        element:  <Contact/>,
      },
      {
        path: "/presentacion",
        element:  <VideoPitch />,
      },
      
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomProvider>
      <RouterProvider router={ router }   />
    </CustomProvider>
  </React.StrictMode>,
)

