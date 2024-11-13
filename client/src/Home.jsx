import React from 'react';
import { Link } from 'react-router-dom';
import elegantWatch from './images/ele5.jpg';
import sportWatch from './images/spo.jpg';
import smartWatch from './images/sma6.jpg'; 
const Home = () => {
    return (
        <>
            <section id="hero" className=" text-center text-white py-24 h-[450px]">
                <h1 className="mt-16 text-4xl font-bold">Discover Timeless Elegance</h1>
                <p className="mt-4 text-lg">Explore our exquisite collection of watches that blend craftsmanship with innovation.</p>
                <Link to="/products" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Shop Now</Link>
            </section>

            <section className="container mx-auto my-5 text-white">
                <h2 className="text-2xl font-bold">Welcome to Time World</h2>
                <p className="mt-2">
                    At Time World, we believe that a watch is more than just a timepiece; it's a reflection of your style and personality. Our carefully curated selection features a diverse range of watches, from classic designs to cutting-edge smartwatches, ensuring that you'll find the perfect piece for any occasion.
                </p>
            </section>

            <section className="container mx-auto my-5 text-white">
                <h2 className="text-2xl font-bold mb-4">Featured Collections</h2>
                <div className="h-1500 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { title: 'Elegant Watches', image: elegantWatch },
                        { title: 'Sport Watches', image: sportWatch },
                        { title: 'Smart Watches', image: smartWatch },
                    ].map((collection, index) => (
                        <div key={index} className="relative overflow-hidden">
                            <img 
                                src={collection.image} 
                                alt={collection.title} 
                                className="w-full h-64 object-cover" 
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <h5 className="text-lg font-semibold">{collection.title}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <section className="container mx-auto my-5 text-white">
                <h2 className="text-2xl font-bold">Why Choose Time World?</h2>
                <ul className="list-disc list-inside mt-2">
                    <li><strong>Quality Craftsmanship:</strong> We partner with leading brands known for their precision and craftsmanship.</li>
                    <li><strong>Variety of Styles:</strong> Our extensive collection caters to every taste and occasion.</li>
                    <li><strong>Exceptional Customer Service:</strong> Our knowledgeable team is here to help you find the perfect watch.</li>
                </ul>
            </section>

            <section className="container mx-auto my-5 text-white">
                <h2 className="text-2xl font-bold">What Our Customers Say:</h2>
                <div className="mt-4 space-y-4">
                    {[
                        { quote: "I found my dream watch at Time World! The selection is amazing, and the staff was so helpful.", name: "Jessica L." },
                        { quote: "The quality of the watches is outstanding. I’ve received so many compliments!", name: "Michael S." },
                        { quote: "The smartwatches are a game changer. I love the features and the style!", name: "Aisha T." }
                    ].map((testimonial, index) => (
                        <blockquote key={index} className="border-l-4 border-blue-600 pl-4 italic">
                            <p className="mb-0">"{testimonial.quote}"</p>
                            <footer className="text-sm">— {testimonial.name}</footer>
                        </blockquote>
                    ))}
                </div>
            </section>

            <section className="container mx-auto my-5 text-center text-white">
                <h2 className="text-2xl font-bold">Join Our Community</h2>
                <p className="mt-2">Sign up for our newsletter to receive exclusive offers, updates on new arrivals, and horological insights.</p>
                <Link to="/signup" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Subscribe Now</Link>
            </section>
        </>
    );
};

export default Home;
