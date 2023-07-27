import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import Products from './components/products/Products';
import Users from './components/users/Users';
import SubUser from './components/users/SubUser';
import SubProduct from './components/products/SubProduct';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <SubUser />,
        },
        {
          path: "/products/:id",
          element: <SubProduct />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  export default router