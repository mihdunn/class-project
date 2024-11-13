// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        // Clear token and update state
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        window.location.reload()
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link to="/">Time World</Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link to="/products" className="text-gray-300 hover:text-white">Products</Link>
                    <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
                    <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
                    <Link to="/products#cart" className="text-gray-300 hover:text-white">Cart</Link>
                    {!localStorage.getItem('token') ? (
                        <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
                    ) : (
                        <button onClick={handleLogout} className="text-gray-300 hover:text-white">Logout</button>
                    )}
                </div>
                <div className="md:hidden">
                    <button className="text-gray-300 hover:text-white focus:outline-none">
                        &#9776;
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
