import React from 'react';
import './App.css';
import Header from './components/Header';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;