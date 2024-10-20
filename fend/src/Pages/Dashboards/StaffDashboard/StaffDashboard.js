import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StaffSidebar from '../../Dashboards/StaffDashboard/StaffSideBar';

const StaffDashboard = () => {
    const [allUsers, setAllUsers] = useState([]);

    const displayUsers = async () => {
        try {
            const staffAccessToken = localStorage.getItem('staffAccessToken');
            const response = await axios.get('http://localhost:8000/api/v1/all-users', {
                withCredentials: true,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${staffAccessToken}`
                }
            });
            setAllUsers(response?.data?.user || []);
        } catch (error) {
            console.error(error.message);
        }
    };

    const deleteUser = async (id) => {
        try {
            const staffAccessToken = localStorage.getItem('staffAccessToken');
            await axios.delete(`http://localhost:8000/api/v1/delete-user/${id}`, {
                withCredentials: true,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${staffAccessToken}`
                }
            });
            displayUsers(); // Refresh the user list after deletion
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        displayUsers();
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-100">
            <StaffSidebar />
            <div className="flex-1 p-6 w-11/12">
                <h1 className="text-3xl font-bold mb-6">Staff Dashboard</h1>
                <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="bg-gray-800 text-white">
                                <th className="py-3 px-4 text-left">User Info</th>
                                <th className="py-3 px-4 text-left">Role</th>
                                <th className="py-3 px-4 text-left">Acct Number</th>
                                <th className="py-3 px-4 text-left">Acct Balance</th>
                                <th className="py-3 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers.map((user) => (
                                <tr key={user.id} className="border-b hover:bg-gray-100">
                                    <td className="py-4 px-4 flex items-center">
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                            alt=''
                                            className='w-12 h-12 rounded-full mr-4'
                                        />
                                        <div>
                                            <p className='font-semibold'>{user.username}</p>
                                            <p className='text-gray-600'>{user.email}</p>
                                            <p className='text-gray-600'>{user.address}</p>
                                            <p className='text-gray-600'>{user.NIN_Number}</p>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <p className='font-semibold'>{user.role}</p>
                                    </td>
                                    <td className="py-4 px-4">
                                        <p className='font-semibold'>
                                            {user.accountNumber == null ? 'N/A' : user.accountNumber}
                                        </p>
                                    </td>
                                    <td className="py-4 px-4">
                                        <p className='font-semibold'>{user.accountBalance}</p>
                                    </td>
                                    <td className="py-4 px-4">
                                        <button
                                            onClick={() => deleteUser(user.id)}
                                            className="bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600 transition duration-300"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StaffDashboard;
