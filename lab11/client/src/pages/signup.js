import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        // Implement your signup logic here (e.g., send a request to your backend).
        console.log('Signup with:', email, password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign Up</h1>
                <form onSubmit={handleSignup}>
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
                    <div className="mb-4">
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className="text-gray-600 text-center text-sm">
                    Already have an account?{' '}
                    <Link to="/q2" className="text-blue-500 hover:underline">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default SignupPage;
