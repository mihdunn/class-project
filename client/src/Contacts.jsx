import React, { useState } from 'react';
import axios from 'axios';

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [responseMessage, setResponseMessage] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/contact/', formData);
            setResponseMessage(response.data.message);
            setFormData({ name: '', email: '', message: '' }); // Clear form after successful submission
        } catch (error) {
            setResponseMessage("There was an error submitting the form.");
            console.error("Form submission error:", error);
        }
    };

    return (
        <div className="mt-10 bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            {responseMessage && <p className="mb-4 text-center">{responseMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                    <input 
                        type="text" 
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input 
                        type="email" 
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium">Message</label>
                    <textarea 
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        rows="4"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contacts;
