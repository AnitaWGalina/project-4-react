import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';

import './index.css';
import Home from './pages/Home/Home'
import Login from './Login';
import About from "./pages/About/About";
// import Userprofile from './pages/Userprofile/Userprofile';
import RegistrationForm from './Registration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route exact path="/registration" element={<RegistrationForm />} />
          <Route path="about" element={<About />} />
          {/* <Route path="profile" element={<Userprofile />} /> */}
          <Route exact path="/login" element={<Login />} />
     
      </Routes>
    </BrowserRouter>

);
