import { Hero } from './components/hero/hero';
import Experience from './components/experience/experience';
import Services from './components/services/services';
import { NavMenu } from './components/navbar/nav';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import { Container } from 'react-bootstrap';
import React, { Component }  from 'react';
import fondoRosa from './assets/fondoRosa.png'

import './style/style.css';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Hero />
      <Experience />
      <div style={{ 
        backgroundImage:`url(${fondoRosa})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat'}}>
        <Services />
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
