import { BrowserRouter } from "react-router-dom";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css'
import NavBar from './components/Navbar'
import Homepage from './pages/HomePage';
import GalleryPage from "./pages/GalleryPage";
import Teams from "./components/Teams";
import ScrollToTop from './ScrollToTop';
import Achivements from "./components/Achivements";


const App = () => {
  
  return (
    <BrowserRouter>
    <ScrollToTop />
    <NavBar />
      
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/achivements" element={<Achivements />} />
        
      </Routes>


    </BrowserRouter>
  );
}

export default App
