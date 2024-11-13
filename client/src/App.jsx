import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css'
import Navbar from './Navbar';
import Home from './home';
import About from './About'
import Cart from './Cart'
import Contacts from './Contacts'
import Products from './Products'
import Login from './Login';
function App() {


  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/login" element={<Login />} />
            
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
