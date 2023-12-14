import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Spinner from "./components/Spinner"
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate('/home')
    }

  }, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation
    const fetchData = async () => {
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </div>
  );
}

export default App;
