import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Contact from './pages/Contact/Contact';
import '@fortawesome/fontawesome-free/css/all.css';
import Footer from './components/Footer/Footer';
import UserProfile from './pages/UserProfile/UserProfile.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
          <Route path = "/" element={<Home />}>
          <Route path = "profile" element={<UserProfile />} />
          <Route path = "about" element={<About />} />
          <Route path = "contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
</>
);
