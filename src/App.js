import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from './components/AppBar';
import Home from './routes/Home';
import Configure from './routes/Configure';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <BrowserRouter>
      <Container fluid>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/configure" element={<Configure/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App