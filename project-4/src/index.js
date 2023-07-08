
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Registration from "./pages/Registration/Registration";
import Login from "./Login";
import Home from './pages/Home/Home';

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import '@fortawesome/fontawesome-free/css/all.css';
import Footer from"./components/Footer/Footer";
import UserProfile from"./pages/UserProfile/UserProfile";



//function App() {
 const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <>
    <BrowserRouter>
          <Routes>
            <Route  path = "/" element={<Home />}>
            <Route  path = "userprofile" element={<UserProfile />} />
            <Route  path = "about" element={<About />} />
            <Route  path = "contact" element={<Contact />} />
            <Route  path = "login" element={<Login />} />
            <Route  path = "registration" element={<Registration />} />
            </Route>
          </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
  );





