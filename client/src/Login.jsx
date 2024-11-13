// Login.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const cred ={
    'username':'midhun',
    'password':'test'
}

const Login = () => {
    useEffect(()=>{
        localStorage.getItem('token')&&navigate('/')
    },[])
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // const response = await axios.post('http://localhost:5000/api/login', { email, password });
            console.log(e)
            if (username == cred['username'] && password==cred['password']){
                alert("You have Logged in Succesfully")
                localStorage.setItem('token', 'dfghjkjhgfcfghjkkjhgvcghjkkjhgvcvhjkojhvhjkojhvbhjkijh');
                window.location.reload()
            }
            else{
                alert("Invalid Credentials")
            }

        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-transparent">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 text-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-center text-gray-400">
                    Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
