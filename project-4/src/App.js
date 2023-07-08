
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';

import Footer from './components/Footer/Footer';
import './App.css';
import App from './App';
// createRoot(document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(


<>
<BrowserRouter>
<Routes>
<Route path = "/" element={<Home />} />
<Route path = "contact" element={<Contact />} />
</Routes>
</BrowserRouter>
<Footer></Footer>
<App/>
</>
);
export default App;
