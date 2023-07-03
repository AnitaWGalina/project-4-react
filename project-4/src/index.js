import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "signup" element = {<SignUp />} />
          <Route path = "about" element = {<About />} />
          <Route path = "profile" element = {<Userprofile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
