import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate('/home')
    }
  }, []);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: "#efefef" }}>
      <Header />
       <Outlet />
      {/* <Footer />  */}
    </div>
  );
}

export default App;
