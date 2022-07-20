import React from 'react';
import './App.css';
import HeaderNav from './components/Header/HeaderNav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Footer from './components/Footer/Footer';
import About from './Pages/About-us/About';
import Contact from './Pages/Contact-us/Contact';
import Excel_powerpoint from './Pages/short-courses/Excel-powerpoint/Excel_powerpoint';
import IELTS from "./Pages/short-courses/IELTS/IELTS";
import Graphics from './Pages/Courses/Graphics/Graphics';

function App() {
  return (
    <>
      <Router>
        <HeaderNav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/excel-powerpoint" element={<Excel_powerpoint />} />
          <Route path="/IELTS" element={<IELTS />} />
          <Route path="/Graphics-design" element={<Graphics />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
