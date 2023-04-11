// import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import NavigationBar from './components/NavigationBar';
import BrandPage from './pages/BrandPage';
import {Routes, Route } from "react-router-dom"
import ServicesPage from './pages/ServicesPage';
import TrainingCard from './components/TrainingCard';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import JoinNow from './components/JoinNow';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <NavigationBar />
      <Routes>
        <Route path="/" element={<BrandPage/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/joinnow" element={<JoinNow/>} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
