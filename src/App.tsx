import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Hero from './Features/Hero/Hero';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
