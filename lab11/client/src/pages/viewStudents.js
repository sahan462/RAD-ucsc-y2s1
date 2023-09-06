import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

function ViewStudents() {
    const [students, setStudents] = useState([]);

    // Effect to fetch students from the database when the component mounts
    useEffect(() => {
        console.log('Fetching data...');
        fetch('/q1')
            .then((response) => {
                console.log('Response:', response);
                return response.json();
            })
            .then((data) => {
                console.log('Data:', data);
                setStudents(data);
            })
            .catch((error) => {
                console.error('Error fetching students:', error);
            });
    }, []);


    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 p-8">
            <div className="bg-white rounded-lg shadow-lg p-4">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">View Students</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Roll No
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {student.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {student.email}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {student.rollNo}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Link to="/" className="block text-center mt-6">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline inline-block mr-4"
                >
                    Back to Home
                </button>
            </Link>
        </div>
    );
}

export default ViewStudents;
