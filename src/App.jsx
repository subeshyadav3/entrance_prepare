import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Store from './components/pages/Store'; 
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Login from './components/pages/login';
import Logout from './components/pages/logout';
import Footer from './components/pages/footer';

import Nav from './components/pages/nav';

const App = () => {
  return (
    <Router basename='/entrance_prepare'>
      <Nav />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Logout />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
