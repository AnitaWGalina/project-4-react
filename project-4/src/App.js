
import './App.css';
import RegistrationForm from "./Registration";
import Login from "./Login";
// import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Home from './pages/Home/Home'
import Login from './Login';
import About from "./pages/About/About";


function App() {
  return (
    // <ChakraProvider>
    <div className="App">
    
      <Router>
        <Routes>
          <Route exact path="/" element={<RegistrationForm />} />

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/navbar" element={<Navbar />} />
          <Route exact path="/header" element={<Header />} />
          <Route path="/" element={<Home />} />
          <Route exact path="/registration" element={<RegistrationForm />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </div>
    // </ChakraProvider>
  
  );
}


export default App;
