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
      <About />
      <br />
      <ServiceArea />
      <br />
      <Reviews />
      <br />
      <Contact />
    </div>
  );
}

export default App;
