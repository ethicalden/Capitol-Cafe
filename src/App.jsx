import React from 'react';
import './App.css';
import Events from './components/Events';
import Navbar from './components/Navbar';
import OurStory from './components/OurStory';
import Form from './components/Form';
import Footer from './components/Footer';
import CardCarousal from './components/CardCarousal';


function App() {
  return (
    <>
      <Navbar />
      <OurStory />
      <CardCarousal />
      <Events />
      <Form />
      <Footer />
    </>

  );
}

export default App;
