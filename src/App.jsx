import { useState } from 'react'

import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './component/Layout';
import Hompage from './pages/Homepage/Hompage';
import { createContext } from 'react';
import About from './pages/About/Aboutpage';
import Frontendpage from './pages/Frontend/Frontendpage';

export const ModalContext = createContext({showModal: false, modalHandler: () => {}, modalContent: 'courses', setModalContentAction: () => {}})



function App() {
  const [showModal, setShowmodal] = useState(false)
  const [modalContent, setModalContent] = useState('courses')

  const handleModal = () => {
    console.log("clicking")
    setShowmodal(!showModal)
  }

  const setModalContentAction = (value) => {
      setModalContent(value)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Hompage />,
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/frontend",
      element: <Frontendpage />
    }
  ]);

  return (
    <ModalContext.Provider value={{showModal, modalHandler: handleModal, modalContent, setModalContentAction}}>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
    </ModalContext.Provider>
  )
}

export default App
