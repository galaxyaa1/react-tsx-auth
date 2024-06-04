import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RoutesConfig from './Routes';
import './App.css';

function App() {
  return (
    <Router>
      <div id="root">
        <Header />
        <div className="content">
          <RoutesConfig />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;