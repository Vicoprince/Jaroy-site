import React from 'react';
import './App.css';
import HeaderNav from './components/Header/HeaderNav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Footer from './components/Footer/Footer';
import About from './Pages/About-us/About';

function App() {
  return (
    <>
      <Router>
        <HeaderNav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About-us" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
