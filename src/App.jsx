import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './component/Layout';
import Hompage from './pages/Homepage/Hompage';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Hompage />,
    },
  ]);

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  )
}

export default App
