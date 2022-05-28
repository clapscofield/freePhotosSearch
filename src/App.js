
import React from 'react';
import './App.css';
import SearchPhotos from "./features/searchPhotos/searchPhotos"
import Helmet from 'react-helmet';
import Landing from "./features/landing/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <Router>
      <Routes>
        <Route path="/home" element={<Landing />} />
        <Route path="/searchPhotos" element={<SearchPhotos />}/>
        <Route path="/" element={<Landing/>} />
      </Routes>
    </Router>
      
    </>
  );
}
export default App;