import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Configure from './routes/Configure';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/configure" element={<Configure/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App