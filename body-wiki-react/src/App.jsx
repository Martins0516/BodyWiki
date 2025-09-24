import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Login from './components/login';
import Home from './components/Home'; // Corrija aqui!

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
