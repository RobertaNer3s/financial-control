import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fale-conosco" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
