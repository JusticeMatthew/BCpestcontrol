import React from 'react';
import TopLogo from './components/TopLogo';
import NavBar from './components/NavBar';
import About from './components/About';
import ServiceArea from './components/ServiceArea';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <TopLogo />
      <NavBar />
      <div className='sections flex flex-col justify-evenly items-center'>
        <About />
        <br />
        <ServiceArea />
        <br />
        <Reviews />
        <br />
        <Contact />
      </div>
    </div>
  );
}

export default App;
