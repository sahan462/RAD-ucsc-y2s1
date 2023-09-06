import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/login', { email: email, password: password });
            if (response.status === 200) {
                alert('LogIn Successful!!!');
                window.location.href = '/q2/login/loginhome';
            } else {
                alert('LogIn Failed!!');
            }
        } catch (e) {
            console.log(e.message);
            alert('LogIn Failed!!!');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h1>
                <form onSubmit={handleLogin}>
                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-600" htmlFor="email">
                            Email:
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-600" htmlFor="password">
                            Password:
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Login Button */}
                    <div className="mb-4">
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Log In
                        </button>
                    </div>
                </form>

                {/* Sign Up Link */}
                <p className="text-gray-600 text-center text-sm">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-blue-500 hover:underline">
                        Sign Up
                    </Link>
                </p>

                {/* Home Link */}
                <p className="text-gray-600 text-center text-sm mt-4">
                    <Link to="/" className="text-green-500 hover:underline">
                        Go to Home
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
