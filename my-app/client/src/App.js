// import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import BrandPage from './pages/BrandPage';
import {Routes, Route } from "react-router-dom"
import ServicesPage from './pages/ServicesPage';
// import AboutPage from './pages/AboutPage';

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
        {/* <Route path="/About" element={<AboutPage/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
