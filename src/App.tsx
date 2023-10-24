import React from 'react';
import './App.css';
import Header from './compornents/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Works from './compornents/pages/Works';
import Contact from './compornents/pages/Contact';
import Top from './compornents/pages/Top';
import Footer from './compornents/footer/Footer';
import Htmlcss from './compornents/pages/Htmlcss';
import Javascript from './compornents/pages/Javascript';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Top />}/>
        <Route path='/Works' element={<Works />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Htmlcss' element={<Htmlcss />}/>
        <Route path='/Javascript' element={<Javascript />}/>

      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
