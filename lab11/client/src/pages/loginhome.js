import React from 'react';

function LoginHome() {
    const handleLogout = () => {
        // Implement your logout logic here, e.g., clearing authentication tokens.
        // Redirect the user to the logout page or perform any necessary actions.
        console.log('Logged out');
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-green-400 via-green-300 to-green-200 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">You are logged in</h1>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default LoginHome;
