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
import Typescript from './compornents/pages/Typescript';
import Framework from './compornents/pages/Framework';
import Nodejs from './compornents/pages/Nodejs';
import Figma from './compornents/pages/Figma';
import Github from './compornents/pages/Github';
import Mongodb from './compornents/pages/Mongodb';
import Firebase from './compornents/pages/Firebase';
import Netlify from './compornents/pages/Netlify';

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
        <Route path='/Typescript' element={<Typescript />}/>
        <Route path='/Framework' element={<Framework />}/>
        <Route path='/Nodejs' element={<Nodejs />}/>
        <Route path='/Figma' element={<Figma />}/>
        <Route path='/Github' element={<Github />}/>
        <Route path='/Mongodb' element={<Mongodb />}/>
        <Route path='/Firebase' element={<Firebase />}/>
        <Route path='/Netlify' element={<Netlify />}/>
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
