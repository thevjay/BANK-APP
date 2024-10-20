import React from 'react';
import { FaTachometerAlt } from "react-icons/fa";
import { BsBuildingAdd } from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci";
import { useNavigate, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const AdminSidebar = () => {
    const navigate = useNavigate();
  
    const handleLogout = () => {
        localStorage.removeItem('adminAccessToken');
        navigate('/admin/login');
        console.log("Logged out");
    };

    return (
        <>
        <div className="bg-gray-800 text-white w-64 h-screen shadow-md">
            <div className="p-4">
                <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
                
                <div className="flex flex-col space-y-4">
                    <Link to="/admin/dashboard" className="flex items-center p-2 rounded hover:bg-gray-700 transition duration-300">
                        <FaTachometerAlt className="mr-2" />
                        <span>All Users</span>
                    </Link>

                    <Link to={'/admin/dashboard/createuser'} className="flex items-center p-2 rounded hover:bg-gray-700 transition duration-300">
                        <BsBuildingAdd className="mr-2" />
                        <span>Create User</span>
                    </Link>

                    <Link to="/admin/dashboard/deposituser" className="flex items-center p-2 rounded hover:bg-gray-700 transition duration-300">
                        <BsBuildingAdd className="mr-2" />
                        <span>Deposit User</span>
                    </Link>

                    <div onClick={handleLogout}>
                        <a 
                            className="flex items-center p-2 rounded hover:bg-gray-700 transition duration-300 cursor-pointer"
                        >
                            <CiMoneyBill className="mr-2" />
                            <span>Logout</span>
                        </a>
                    </div>
                </div>

                
            </div>
        </div>

        </>
    );
}

export default AdminSidebar;
