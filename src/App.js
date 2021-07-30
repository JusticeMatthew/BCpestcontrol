import React from 'react';
import TopLogo from './components/TopLogo';
import NavBar from './components/NavBar';
import About from './components/About';
import ServiceArea from './components/ServiceArea';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <TopLogo />
      <div className='sections flex flex-col justify-evenly items-center'>
        <NavBar />
        <About />
        <br />
        <ServiceArea />
        <br />
        <Reviews />
        <br />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
