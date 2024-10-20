import React, { useState } from 'react';
import { FaTachometerAlt } from "react-icons/fa";
import { BsBuildingAdd } from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci";
import { useNavigate, Link } from 'react-router-dom';

const AdminSidebar = () => {
    const [showShow, setShowShow] = useState(false);
    const toggleShow = () => setShowShow(!showShow);

    return (
        <div className="bg-gray-800 text-white w-64 h-screen shadow-md flex flex-col">
            <div className="p-4">
                <h2 className="text-xl font-bold mb-6">Staff Dashboard</h2>
                
                <div className="flex flex-col space-y-4">
                    <Link to="/staff/dashboard" className="flex items-center p-2 rounded hover:bg-gray-700 transition duration-300">
                        <FaTachometerAlt className="mr-2" />
                        <span>All Users</span>
                    </Link>

                    <Link to="/staff/dashboard/createuser" className="flex items-center p-2 rounded hover:bg-gray-700 transition duration-300">
                        <BsBuildingAdd className="mr-2" />
                        <span>Create User</span>
                    </Link>

                    <Link to="/staff/dashboard/deposituser" className="flex items-center p-2 rounded hover:bg-gray-700 transition duration-300">
                        <BsBuildingAdd className="mr-2" />
                        <span>Deposit User</span>
                    </Link>

                    <button 
                        onClick={() => {}}
                        className="flex items-center p-2 rounded hover:bg-gray-700 transition duration-300 cursor-pointer"
                    >
                        <CiMoneyBill className="mr-2" />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AdminSidebar;
