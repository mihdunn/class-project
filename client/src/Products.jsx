
import React, { useState, useEffect } from 'react';
import WatchCard from './WatchCard';
import axios from 'axios';
import { useNavigate } from 'react-router';


const Products = () => {
    const navigate = useNavigate()
    const [cart, setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [watches, setWatches] = useState([]);
    const [elegant, setElegant] = useState([]);
    const [smart, setSmart] = useState([]);
    const [classic, setClassic] = useState([]);
    const [sport, setSport] = useState([]);

    useEffect(() => {
        const fetchWatches = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/watches/');
            setWatches(response.data);
        };
        fetchWatches();
        
    }, []);

    useEffect(()=>{
    if(watches.length>0){
        setSmart(watches.filter(w=>w.category=="smart"))
        setElegant(watches.filter(w=>w.category=="elegant"))
        setSport(watches.filter(w=>w.category=="sport"))
        setClassic(watches.filter(w=>w.category=="classic"))
    }
    },[watches])

    const addToCart = (name, price) => {
        setCart([...cart, { name, price }]);
        setTotalAmount(totalAmount + parseFloat(price));
    };

    const removeFromCart = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        const removedPrice = cart[index].price;
        setCart(updatedCart);
        setTotalAmount(totalAmount - parseFloat(removedPrice));
    };

    const checkout = () => {
        alert('Proceeding to checkout...');
    };

    return (
        <div className="products-main">
            {!localStorage.getItem('token')&& (<h1 style={{marginLeft:"36%",marginTop:"20%",color:"red",fontSize:"23px"}}>Unauthorized! <span onClick={()=>navigate('/login')} style={{textDecoration:"underline",cursor:'pointer'}}>Login</span> to View Products</h1>)}
            {localStorage.getItem('token')&&(<div className="bg-gray-900 text-white min-h-screen py-8">
             <section id="products" className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Our Collection</h2>
                    <h3 className="text-2xl font-bold mb-6">Elegant Watches</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {elegant.map((watch, index) => (
                            <WatchCard key={index} watch={watch} addToCart={addToCart} />
                        ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-6">Sport Watches</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {sport.map((watch, index) => (
                            <WatchCard key={index} watch={watch} addToCart={addToCart} />
                        ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-6">Smart Watches</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {smart.map((watch, index) => (
                            <WatchCard key={index} watch={watch} addToCart={addToCart} />
                        ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-6">Classic Watches</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {classic.map((watch, index) => (
                            <WatchCard className='h-40' key={index} watch={watch} addToCart={addToCart} />
                        ))}
                    </div>
                </section>
                <section id="cart" className="container mx-auto mt-10 px-4">
                    <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
                    <div id="cart-items" className="mt-4 bg-gray-800 p-4 rounded-lg">
                        {cart.length === 0 ? (
                            <p>Your cart is currently empty.</p>
                        ) : (
                            cart.map((item, index) => (
                                <p key={index} className="flex justify-between items-center mb-2">
                                    <span>{item.name} - {item.price}</span>
                                    <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition" onClick={() => removeFromCart(index)}>Remove</button>
                                </p>
                            ))
                        )}
                        {cart.length > 0 && <p className="font-semibold"><strong>Total: {totalAmount}</strong></p>}
                    </div>
                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition" onClick={checkout}>Checkout</button>
                </section>
            </div>)}
        </div>
    );
};

export default Products;
