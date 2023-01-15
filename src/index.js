import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  NavLink
} from "react-router-dom";
import Card from './Pages/Card';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Card/> ,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
