import React, { useState } from 'react';
import {Link} from "react-router-dom";

function AddStudent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rollNo, setRollNo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Student Details:
    Name: ${name}
    Email: ${email}
    Roll No: ${rollNo}`);
    };

    return (
        <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 min-h-screen py-8">
            <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-blue-600">React MERN Stack App</h1>
                <div className="mb-6">
                    <Link to="/q1/viewStudentList" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                        View Created Students
                    </Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollNo">
                            Roll No:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="rollNo"
                            type="text"
                            placeholder="Enter Roll No"
                            value={rollNo}
                            onChange={(e) => setRollNo(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Add Student
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddStudent;
