import logo from './logo.svg';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing-pg/Landing-pg';
import './index.css';
import Footer from './components/Footer'
import Testi from './components/Landing-pg/Testimonials'
import Serv from './components/Landing-pg/Serv'
import USA from './components/Countries/USA'
import Canada from './components/Countries/Canada'
import Chatbot from './components/Chatbot'



function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Serv />} />
        
        <Route path="/USA" element={<USA />} />
        <Route path="/Canada" element={<Canada />} />
      </Routes>
      < Chatbot />
      < Footer />
    </Router>  

  );
}

export default App;
