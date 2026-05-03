import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Modal from '../components/Modal'

function Layout() {
  return (
    <>
      <Navbar />
      <Modal />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout