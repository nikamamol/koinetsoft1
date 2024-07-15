import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "../src/components/Navbar";
import MainDashboard from '../src/views/MainDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<MainDashboard />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
