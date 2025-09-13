
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// * Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Project from './components/pages/Project';

// * Components
import Navbar from './components/mini-components/Navbar';
import Footer from './components/mini-components/Footer';

const App = () => {
  return (
    <Router>
      <main>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Footer/>
      </main>
    </Router>
  );
}

export default App;
