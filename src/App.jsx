
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import Restaurant from './pages/Restaurant'
import Hotel from './pages/Hotel'
import Resort from './pages/Resort'

function App() {

  return (
    <>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/resort" element={<Resort />} />
          <Route path="/hotel" element={<Hotel />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
