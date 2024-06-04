import React from 'react';
import './Home.css';
import About from '../About/About'
import Contact from '../Contact/Contact'
import Services from '../Services/Services'

const Home: React.FC = () => {
  return (
    <>
    <div className="home">
      <div className="overlay">
        <h1>Working as a Frontend Developer</h1>
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
    </div>
    <About />
    <Contact />
    <Services />
    </>
  );
};

export default Home;
