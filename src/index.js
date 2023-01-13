import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  NavLink
} from "react-router-dom";
import Card from './Pages/Card';
import About from './Pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Card/> ,
  },
  {
    path: "/about/:id",
    element: <><About/> <NavLink to={"/"}>home</NavLink></>  ,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
