
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registration from "./pages/Registration/Registration";
import Login from "./Login";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from"./components/Footer/Footer";
import UserProfile from"./pages/UserProfile/UserProfile";

import "./App.css";


function App() {
 const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <BrowserRouter>
      <div className="App">
        <>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/header" element={<Header />} />
            <Route exact path="/registration" element={<Registration />} />
            <Route exact path="/userprofile" element={<UserProfile />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/navbar" element={<Navbar />} />
          </Routes>
        
        </>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;