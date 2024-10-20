import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    const [allUsers, setAllUsers] = useState([]);

    const displayUsers = async () => {
        try {
            const adminAccessToken = localStorage.getItem('adminAccessToken');
            const response = await axios.get(
                "http://localhost:8000/api/v1/all-users",
                {
                    withCredentials: true,
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${adminAccessToken}`,
                    },
                }
            );

            setAllUsers(response?.data?.user || []);
        } catch (error) {
            console.log(error.message);
        }
    };

    const deleteUser = async (id) => {
        try {
            const adminAccessToken = localStorage.getItem('adminAccessToken');
            await axios.delete(`http://localhost:8000/api/v1/delete-user/${id}`, {
                headers: {
                    Authorization: `Bearer ${adminAccessToken}`,
                },
            });
            // Refresh user list after deletion
            displayUsers();
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        displayUsers();
    }, []); // Add an empty dependency array to avoid infinite loop

    return (
        <div className="flex min-h-screen bg-gray-100">
            
            <AdminSidebar />
            <Outlet/>
            <div className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
                
                
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-green-600 text-white">
                                <th className="py-2 px-4 text-left">Name</th>
                                <th className="py-2 px-4 text-left">Role</th>
                                <th className="py-2 px-4 text-left">Acct Number</th>
                                <th className="py-2 px-4 text-left">Acct Balance</th>
                                <th className="py-2 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers.map((user) => (
                                <tr key={user._id} className="border-b hover:bg-gray-100">
                                    <td className="py-4 px-4">
                                        <div className="flex items-center">
                                            <img
                                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                                alt=''
                                                className='w-10 h-10 rounded-full mr-3'
                                            />
                                            <div>
                                                <p className="font-semibold">{user.username}</p>
                                                <p className="text-gray-500">{user.email}</p>
                                                <p className="text-gray-500">{user.address}</p>
                                                <p className="text-gray-500">{user.NIN_Number}</p>
                                                <p className="text-gray-500">{user.createdAt}</p>
                                                <p className="text-gray-500">{user.updatedAt}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">{user.role}</td>
                                    <td className="py-4 px-4">
                                        {user.accountNumber == null ? '______' : user.accountNumber}
                                    </td>
                                    <td className="py-4 px-4">{user.accountBalance}</td>
                                    <td className="py-4 px-4">
                                        <button
                                            onClick={() => deleteUser(user._id)}
                                            className="text-red-600 hover:text-red-800"
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

export default AdminDashboard;
