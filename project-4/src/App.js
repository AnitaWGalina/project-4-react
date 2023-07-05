
import './App.css';
import RegistrationForm from "./Registration";
import Login from "./Login";
// import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    // <ChakraProvider>
    <div className="App">
    <Router>
      <Routes>
        
          <Route exact path="/" element={<RegistrationForm />} />

          <Route exact path="/login" element={<Login />} />
        
      </Routes>

    </Router>
    </div>
    // </ChakraProvider>
  );
}


export default App;
