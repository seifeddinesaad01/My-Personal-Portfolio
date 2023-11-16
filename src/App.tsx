import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
