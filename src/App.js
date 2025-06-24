import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Videos from './pages/Videos';
import Bigmsali from './pages/Bigmsali';


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/taste" element={<Home />} />
        <Route path="/Dramas" element={<Videos />} />
        <Route path="/dramas/bigmsali" element={<Bigmsali />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>

  );
}

export default App;
