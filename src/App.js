import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Header from './Components/Header';
import './Components/Style.css';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Features from './Pages/Features';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
