import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';
import Hero from './Features/Hero/Hero';
import { Home } from './Views/Home';
import { About } from './Views/About';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<p>skills</p>} />
          <Route path="/projects" element={<p>projects</p>} />
          <Route path="/contact" element={<p>contact</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
