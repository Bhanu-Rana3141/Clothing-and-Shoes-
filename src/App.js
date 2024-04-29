import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shoes from './components/Shoes';
import Clothing from './components/Clothing';
import Contact from './components/Contact';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RedTape_1 from './components/RedTape_1';

const App = () => {
  return (
    <>
      <Navbar /> {/* Render Navbar directly */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/redtape1" element={<RedTape_1/>} />
        </Routes>
      <Footer /> {/* Render Footer directly */}
    </>
  );
};

export default App;
