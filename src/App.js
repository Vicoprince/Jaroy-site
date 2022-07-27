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
import Digital_Literacy from './Pages/Courses/Digital_Literacy/Digital_Literacy';
import Digital_marketing from './Pages/Courses/Digital_marketing/Digital_marketing';
import Comptia from './Pages/Courses/COMPTIA_A+/Comptia';
import Network_plus from "./Pages/Courses/CompTIA_N+/Network_plus";

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
          <Route path="/Digital-literacy" element={<Digital_Literacy />} />
          <Route path="/Digital-marketing" element={<Digital_marketing />} />
          <Route path="/COMPTIA" element={<Comptia />} />
          <Route path="/Network-eng" element={<Network_plus />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
